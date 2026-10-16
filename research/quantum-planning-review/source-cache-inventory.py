"""Inventory source bytes/pages only. This neither establishes reading nor proof validity."""
from pathlib import Path
import hashlib,json
import fitz
roots=[Path('research/quantum-computing-planning/sources'),Path('research/quantum-algorithms-planning/sources')]
rows=[]
for root in roots:
 for p in sorted(root.rglob('*.pdf')):
  data=p.read_bytes()
  if not data.startswith(b'%PDF'):
   rows.append({'path':str(p),'error':'not PDF bytes'});continue
  try:
   doc=fitz.open(p)
   row={'path':str(p),'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest(),'pdf_pages':len(doc)}
   txt=p.with_suffix('.txt')
   if txt.exists():
    t=txt.read_bytes();row['extracted_text']={'path':str(txt),'bytes':len(t),'sha256':hashlib.sha256(t).hexdigest()}
   rows.append(row)
  except Exception as e: rows.append({'path':str(p),'error':str(e)})
report={'scope':'Local source-cache integrity inventory only; extraction and download do not prove reading or mathematical correctness','cached_pdf_copies':len(rows),'distinct_pdf_hashes':len({r['sha256'] for r in rows if 'sha256' in r}),'sources':rows}
Path('research/quantum-planning-review/source-cache-inventory.json').write_text(json.dumps(report,indent=2)+'\n')
print(json.dumps({k:v for k,v in report.items() if k!='sources'},indent=2))
