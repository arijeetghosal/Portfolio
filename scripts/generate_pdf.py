#!/usr/bin/env python3
"""Convert PROJECT_DOCUMENTATION.md to a styled PDF via HTML intermediary."""
import re
import os
import subprocess

SRC = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'PROJECT_DOCUMENTATION.md')
HTML_OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'PROJECT_DOCUMENTATION.html')

with open(SRC, 'r', encoding='utf-8') as f:
    md = f.read()

# Simple markdown → HTML converter (no dependencies)
def md_to_html(text):
    lines = text.split('\n')
    html = []
    in_code = False
    in_table = False
    in_list = False
    code_lang = ''
    table_rows = []

    def flush_table():
        nonlocal table_rows, in_table
        if not table_rows:
            return ''
        out = '<table>\n'
        for i, row in enumerate(table_rows):
            cells = [c.strip() for c in row.strip('|').split('|')]
            if i == 0:
                out += '<thead><tr>' + ''.join(f'<th>{c}</th>' for c in cells) + '</tr></thead>\n<tbody>\n'
            elif all(set(c.strip()) <= set('-|: ') for c in cells):
                continue  # separator row
            else:
                out += '<tr>' + ''.join(f'<td>{c}</td>' for c in cells) + '</tr>\n'
        out += '</tbody></table>\n'
        table_rows = []
        in_table = False
        return out

    for line in lines:
        # Code blocks
        if line.strip().startswith('```'):
            if in_code:
                html.append('</code></pre>')
                in_code = False
            else:
                code_lang = line.strip().lstrip('`').strip()
                html.append(f'<pre><code class="{code_lang}">')
                in_code = True
            continue
        if in_code:
            html.append(line.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;'))
            continue

        # Table detection
        if '|' in line and line.strip().startswith('|'):
            if not in_table:
                in_table = True
                table_rows = []
            table_rows.append(line)
            continue
        elif in_table:
            html.append(flush_table())

        # Headers
        m = re.match(r'^(#{1,6})\s+(.*)', line)
        if m:
            level = len(m.group(1))
            html.append(f'<h{level}>{m.group(2)}</h{level}>')
            continue

        # Horizontal rule
        if re.match(r'^---+\s*$', line):
            html.append('<hr>')
            continue

        # Unordered list
        m = re.match(r'^(\s*)[-*]\s+(.*)', line)
        if m:
            if not in_list:
                html.append('<ul>')
                in_list = True
            content = m.group(2)
            # Bold
            content = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', content)
            # Inline code
            content = re.sub(r'`([^`]+)`', r'<code>\1</code>', content)
            html.append(f'<li>{content}</li>')
            continue
        elif in_list and line.strip() == '':
            html.append('</ul>')
            in_list = False

        # Empty line
        if line.strip() == '':
            html.append('')
            continue

        # Paragraph text
        p = line
        p = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', p)
        p = re.sub(r'`([^`]+)`', r'<code>\1</code>', p)
        html.append(f'<p>{p}</p>')

    if in_table:
        html.append(flush_table())
    if in_list:
        html.append('</ul>')

    return '\n'.join(html)

body = md_to_html(md)

full_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Portfolio Web Application — Project Documentation</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

:root {{
    --primary: #0ea5e9;
    --accent: #8b5cf6;
    --bg: #ffffff;
    --text: #1e293b;
    --text-muted: #64748b;
    --border: #e2e8f0;
    --code-bg: #f8fafc;
}}

* {{ margin: 0; padding: 0; box-sizing: border-box; }}

body {{
    font-family: 'Inter', -apple-system, sans-serif;
    color: var(--text);
    background: var(--bg);
    line-height: 1.7;
    max-width: 900px;
    margin: 0 auto;
    padding: 60px 40px;
    font-size: 11pt;
}}

h1 {{
    font-family: 'Space Grotesk', sans-serif;
    font-size: 28pt;
    font-weight: 700;
    color: var(--primary);
    margin: 0 0 8px;
    padding-bottom: 16px;
    border-bottom: 3px solid var(--primary);
}}

h2 {{
    font-family: 'Space Grotesk', sans-serif;
    font-size: 18pt;
    font-weight: 600;
    color: var(--text);
    margin: 40px 0 16px;
    padding-bottom: 8px;
    border-bottom: 2px solid var(--border);
    page-break-after: avoid;
}}

h3 {{
    font-family: 'Space Grotesk', sans-serif;
    font-size: 14pt;
    font-weight: 600;
    color: var(--accent);
    margin: 28px 0 10px;
    page-break-after: avoid;
}}

h4 {{
    font-size: 12pt;
    font-weight: 600;
    margin: 20px 0 8px;
    color: var(--text);
}}

p {{
    margin: 6px 0;
}}

strong {{
    font-weight: 600;
    color: var(--text);
}}

code {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 9.5pt;
    background: var(--code-bg);
    border: 1px solid var(--border);
    padding: 1px 5px;
    border-radius: 4px;
    color: #be185d;
}}

pre {{
    background: #0f172a;
    color: #e2e8f0;
    padding: 16px 20px;
    border-radius: 8px;
    overflow-x: auto;
    margin: 12px 0 16px;
    font-size: 9pt;
    line-height: 1.5;
    page-break-inside: avoid;
}}

pre code {{
    background: none;
    border: none;
    color: inherit;
    padding: 0;
    font-size: inherit;
}}

table {{
    width: 100%;
    border-collapse: collapse;
    margin: 12px 0 20px;
    font-size: 10pt;
    page-break-inside: avoid;
}}

th {{
    background: #f1f5f9;
    font-weight: 600;
    text-align: left;
    padding: 10px 14px;
    border: 1px solid var(--border);
    font-size: 9.5pt;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    color: var(--text-muted);
}}

td {{
    padding: 8px 14px;
    border: 1px solid var(--border);
    vertical-align: top;
}}

tr:nth-child(even) td {{
    background: #f8fafc;
}}

hr {{
    border: none;
    border-top: 1px solid var(--border);
    margin: 32px 0;
}}

ul {{
    margin: 8px 0 12px 24px;
}}

li {{
    margin: 4px 0;
}}

@media print {{
    body {{
        padding: 30px;
        font-size: 10pt;
    }}
    h1 {{ font-size: 24pt; }}
    h2 {{ font-size: 16pt; page-break-before: auto; }}
    h3 {{ font-size: 12pt; }}
    pre {{ font-size: 8pt; }}
    table {{ font-size: 9pt; }}
}}
</style>
</head>
<body>
{body}
</body>
</html>"""

with open(HTML_OUT, 'w', encoding='utf-8') as f:
    f.write(full_html)

print(f"✅ HTML documentation generated: {HTML_OUT}")
print(f"📄 File size: {os.path.getsize(HTML_OUT) / 1024:.1f} KB")
print(f"\nTo create PDF: Open the HTML file in a browser and use Print → Save as PDF")
print(f"Or on macOS: /usr/sbin/cupsfilter {HTML_OUT} > PROJECT_DOCUMENTATION.pdf")
