# scripts/build.py
import os
import re

SRC_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'src'))
DIST_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
CONTEXT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '.context'))

FILES = [
    { 'name': 'index.html', 'type': 'html' },
    { 'name': 'projects.html', 'type': 'html' },
    { 'name': 'services.html', 'type': 'html' },
    { 'name': 'games.html', 'type': 'html' },
    { 'name': 'style.css', 'type': 'css' },
    { 'name': 'swiss-override.css', 'type': 'css' },
    { 'name': 'avatar3d.css', 'type': 'css' },
    { 'name': 'script.js', 'type': 'js' },
    { 'name': 'avatar3d.js', 'type': 'js' },
    { 'name': 'projects.js', 'type': 'js' },
    { 'name': 'services.js', 'type': 'js' },
    { 'name': 'common.js', 'type': 'js' }
]

# Binary files to copy directly
BINARY_FILES = ['metahuman_avatar.png', 'Avatar.jpg', 'riya-anime-avatar.png', 'chatbot_icon.png']

def minify_html(html):
    # Remove HTML comments
    minified = re.sub(r'<!--[\s\S]*?-->', '', html)
    # Collapse whitespace
    minified = re.sub(r'\s+', ' ', minified)
    # Remove spaces between tags
    minified = re.sub(r'>\s+<', '><', minified)
    return minified.strip()

def minify_css(css):
    # Remove CSS comments
    minified = re.sub(r'\/\*[\s\S]*?\*\/', '', css)
    # Collapse whitespace
    minified = re.sub(r'\s+', ' ', minified)
    # Remove spaces around operators/delimiters
    minified = re.sub(r'\s*([\{\}:;,])\s*', r'\1', minified)
    return minified.strip()

def clean_js(js):
    # Remove block comments
    minified = re.sub(r'\/\*[\s\S]*?\*\/', '', js)
    
    lines = minified.splitlines()
    cleaned_lines = []
    
    for line in lines:
        trimmed = line.strip()
        if not trimmed:
            continue
        if trimmed.startswith('//'):
            continue
            
        # Safely remove trailing comments
        comment_idx = trimmed.find('//')
        if comment_idx != -1:
            # Check if it follows colon (e.g. https://)
            if comment_idx > 0 and trimmed[comment_idx-1] == ':':
                pass
            # Check if it is inside string quotes by counting
            elif trimmed[:comment_idx].count("'") % 2 == 0 and trimmed[:comment_idx].count('"') % 2 == 0 and trimmed[:comment_idx].count('`') % 2 == 0:
                trimmed = trimmed[:comment_idx].strip()
                
        if trimmed:
            cleaned_lines.append(trimmed)
            
    return '\n'.join(cleaned_lines)

def build():
    print("🚀 Starting codebase optimization pipeline...")
    total_source_size = 0
    total_output_size = 0
    codebase_files_data = []

    if not os.path.exists(CONTEXT_DIR):
        os.makedirs(CONTEXT_DIR, exist_ok=True)

    # Copy binary assets
    import shutil
    for bfile in BINARY_FILES:
        src_b = os.path.join(SRC_DIR, bfile)
        dst_b = os.path.join(DIST_DIR, bfile)
        if os.path.exists(src_b):
            shutil.copy2(src_b, dst_b)
            print(f"📦 Copied binary: {bfile}")

    for file_spec in FILES:
        src_path = os.path.join(SRC_DIR, file_spec['name'])
        dist_path = os.path.join(DIST_DIR, file_spec['name'])

        if not os.path.exists(src_path):
            print(f"❌ Source file not found: {src_path}")
            continue

        with open(src_path, 'r', encoding='utf-8') as f:
            source_content = f.read()

        source_size = len(source_content.encode('utf-8'))
        total_source_size += source_size

        output_content = ""
        ftype = file_spec['type']
        if ftype == 'html':
            output_content = minify_html(source_content)
        elif ftype == 'css':
            output_content = minify_css(source_content)
        elif ftype == 'js':
            output_content = clean_js(source_content)

        output_size = len(output_content.encode('utf-8'))
        total_output_size += output_size

        with open(dist_path, 'w', encoding='utf-8') as f:
            f.write(output_content)

        savings = (1 - output_size / source_size) * 100 if source_size > 0 else 0
        print(f"✅ Optimized {file_spec['name']}: {source_size/1024:.1f} KB -> {output_size/1024:.1f} KB ({savings:.1f}% reduction)")

        codebase_files_data.append({
            'name': file_spec['name'],
            'type': file_spec['type'],
            'content': output_content
        })

    # Include api/chat.js if it exists
    chat_api_path = os.path.join(DIST_DIR, 'api', 'chat.js')
    if os.path.exists(chat_api_path):
        with open(chat_api_path, 'r', encoding='utf-8') as f:
            api_content = f.read()
        cleaned_api = clean_js(api_content)
        codebase_files_data.append({
            'name': 'api/chat.js',
            'type': 'js',
            'content': cleaned_api
        })

    # Generate codebase_context.md
    print("📄 Generating token-optimized codebase context...")
    context_file_path = os.path.join(CONTEXT_DIR, 'codebase_context.md')
    
    context_content = """# Arijeet Ghosal - Portfolio Codebase Context

This document is a compressed, comment-stripped representation of the portfolio codebase. It serves as a unified context map for AI coding assistants to minimize token usage and loading latency.

## Directory Layout
- **src/**: Source development files (readable, commented)
- **api/**: Serverless API handlers
- **videos/**: Media files
- **scripts/**: Build and utility pipelines
- **(Root)**: Production-built optimized web assets (HTML, CSS, JS)

## Codebase Manifest
"""

    for file_info in codebase_files_data:
        context_content += f"\n### File: {file_info['name']}\n"
        context_content += f"```{file_info['type']}\n"
        context_content += f"{file_info['content']}\n"
        context_content += "```\n"

    with open(context_file_path, 'w', encoding='utf-8') as f:
        f.write(context_content)

    context_size = len(context_content.encode('utf-8'))
    print(f"✅ Codebase context compiled: {context_size/1024:.1f} KB")

    print("\n📊 Optimization Summary:")
    print(f"- Source Codebase Size: {total_source_size/1024:.1f} KB")
    print(f"- Built Codebase Size: {total_output_size/1024:.1f} KB")
    print(f"- Combined Codebase Context: {context_size/1024:.1f} KB")
    total_savings = (1 - total_output_size / total_source_size) * 100 if total_source_size > 0 else 0
    print(f"- Total Savings: {total_savings:.1f}% space reduction!")
    print("✨ Build pipeline completed successfully!\n")

if __name__ == '__main__':
    build()
