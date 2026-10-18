from pathlib import Path
import re,json
run='non-ml-math-remaining-81-2026-10-18';base=Path('research/'+run+'-owner-tl-spencer');file=Path('research/'+run+'-batch-59.proof-contracts.json');data=json.load(open(file));maps=json.load(open(base/'format-step-maps.json'));ids=list(maps)+['thm-temperley-lieb-spencer-jones-wenzl-existence-criterion']
def section(s,label):
 m=re.search(r'^## '+re.escape(label)+r'\s*\n([\s\S]*?)(?=^## |\Z)',s,re.M);return m.group(1).strip() if m else ''
for id in ids:
 text=Path('items/'+id+'.md').read_text();proof=section(text,'Proof');facts=section(text,'Facts & Assumptions');derivations=[]
 for m in re.finditer(r'^(\d+\.\d+) ([\s\S]*?)(?=^\d+\.\d+ |\Z)',proof,re.M):
  body=m.group(2).strip();tags=re.search(r'\[([^\[\]]+)\]\s*(?:∎)?$',body);assert tags
  derivations.append({'id':id+'-'+m.group(1),'claim':body[:tags.start()].strip(),'step':m.group(1),'inputs':[x.strip() for x in tags.group(1).split(',')]})
 citations=[]
 for match in re.finditer(r'^\[(F\d+)\] ([\s\S]*?)(?=^\[F\d+\] |\Z)',facts,re.M):
  fact=match.group(1);uses=[row['step'] for row in derivations if fact in row['inputs']]
  for source in re.findall(r'\[\[([^]|]+)',match.group(2)):
   supplier=Path('items/'+source+'.md').read_text();sec='Statement' if section(supplier,'Statement') else 'Definition';quote=section(supplier,sec);assert quote
   citations.append({'fact':fact,'source':source,'source_section':sec,'quote':quote,'uses':uses})
 c=data['contracts'][id];c['derivations']=derivations;c['citations']=citations
 for row in c['boundaries']:
  if row['status']=='checked':
   row['evidence']=re.sub(r'\b\d+\.\d+\b',lambda m:maps.get(id,{}).get(m.group(0),m.group(0)),row['evidence'])
   if not re.search(r'\b\d+\.\d+\b|statement|definition|example',row['evidence'],re.I):row['evidence']='Statement; '+row['evidence']
file.write_text(json.dumps(data,indent=2)+'\n')
