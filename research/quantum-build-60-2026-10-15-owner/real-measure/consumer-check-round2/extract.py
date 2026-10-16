from pathlib import Path
import json,re,hashlib
b=Path(__file__).parent;parent=b.parent
inventory=json.load(open(parent/'consumer-dispositions.json'))['items'];out=[]
pattern=re.compile(r'(?:\^\s*(?:\{[+-]\}|[+-](?![0-9A-Za-z\\])|\\pm|\{\\pm\})|\\odot|zero.times.infinity|positive (?:and|or) negative|positive/negative|(?:0\s*(?:\\cdot|\\times)|(?:infty|∞)\s*(?:\\cdot|\\times)\s*0))')
for row in inventory:
 p=Path('items',row['id']+'.md');s=p.read_text();body=s.split('---',2)[-1];lines=s.splitlines();matches=[]
 for i,l in enumerate(lines):
  if pattern.search(l) and i>s.split('---',2)[0].count('\n'):
   if not l.startswith(('deps:','  - ','    - ')):
    matches.append({'line':i+1,'text':l,'context':'\n'.join(lines[max(0,i-2):min(len(lines),i+3)])})
 direct=row['direct_roots'];supplieruses=[]
 for i,l in enumerate(lines):
  if any('[['+r in l for r in ['def-positive-and-negative-parts-of-a-function','thm-arithmetic-and-lattice-operations-preserve-measurability']):supplieruses.append({'line':i+1,'text':l,'context':'\n'.join(lines[max(0,i-1):min(len(lines),i+3)])})
 stmt=re.search(r'\n## (?:Statement|Definition|Example)\n(.*?)(?=\n## |\Z)',s,re.S)
 out.append({'id':row['id'],'file':str(p),'raw_sha256':hashlib.sha256(s.encode()).hexdigest(),'direct_roots':direct,'statement':stmt[1].strip() if stmt else None,'interface_matches':matches,'direct_supplier_uses':supplieruses,'roots':row['roots']})
(b/'source-use-inventory.json').write_text(json.dumps(out,indent=2)+'\n');selected=[x for x in out if x['interface_matches'] or x['direct_roots']];(b/'selected-ids.json').write_text(json.dumps([x['id'] for x in selected],indent=2)+'\n');print('selected',len(selected),'matches',sum(len(x['interface_matches']) for x in out))
for i in range(0,len(selected),15):
 chunks=[]
 for r in selected[i:i+15]:
  chunks+=['FILE '+r['id'],'STATEMENT '+str(r['statement'])]
  seen=set()
  for v in r['interface_matches']+r['direct_supplier_uses']:
   if v['line'] in seen:continue
   seen.add(v['line']);chunks.append('LINE '+str(v['line'])+' '+v['context'])
 (b/f'batch-{i//15+1:02}.txt').write_text('\n\n'.join(chunks)+'\n')
