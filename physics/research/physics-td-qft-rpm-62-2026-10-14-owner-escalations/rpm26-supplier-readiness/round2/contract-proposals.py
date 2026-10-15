from pathlib import Path
import json,re
run='physics-td-qft-rpm-62-2026-10-14';base=Path('research')/(run+'-owner-escalations')
def body(id):return Path('items/'+id+'.md').read_text()
def section(id,name):
 s=body(id);m=re.search(r'(?m)^## '+re.escape(name)+r'\s*\n',s)
 if not m:return None
 text=s[m.end():].split('\n## ',1)[0].strip();return text

def propose(folder,batches):
 p=base/folder;paths=json.loads((p/'changed-source-paths.json').read_text())['paths'];native={}
 for n in batches:
  d=json.loads(Path(f'research/{run}-batch-{n}.proof-contracts.json').read_text());native.update(d.get('contracts',{}))
 selected={}
 for rel in paths:
  id=Path(rel).stem;s=body(id);c=native.get(id,{})
  # Rebuild the exact current phase/step claims and tags without accepting old native proof status.
  steps=[]
  proof=s.split('## Proof\n',1)[1] if '## Proof\n' in s else s.split('## Verification\n',1)[1]
  proof=proof.split('\n## ',1)[0]
  for para in proof.split('\n\n'):
   m=re.match(r'(\d+\.\d+) (.*) \[([^\]]+)\](?: ∎)?$',para,re.S)
   if m:steps.append({'id':'D'+str(len(steps)+1),'step':m.group(1),'claim':m.group(2),'inputs':[x.strip() for x in m.group(3).split(',')]})
  c['derivations']=steps
  facts=s.split('## Facts & Assumptions',1)[1].split('\n## ',1)[0]
  citations=[]
  for para in facts.split('\n\n'):
   f=re.match(r'\[([AFL]\d+)\]',para)
   if not f:continue
   fact=f.group(1);uses=[x['step'] for x in steps if fact in x['inputs']]
   for source in re.findall(r'\[\[([a-z0-9-]+)(?:\|[^\]]*)?\]\]',para):
    if not Path('items/'+source+'.md').exists():continue
    for heading in ['Definition','Statement','Postulate']:
     quote=section(source,heading)
     if quote is not None:break
    if quote is None:continue
    # Exact contiguous initial source paragraph is enough as a formulation excerpt;
    # preserve richer native excerpt when the source bytes have not changed.
    old=next((x for x in c.get('citations',[]) if x.get('fact')==fact and x.get('source')==source),None)
    if old and old.get('quote') and old['quote'] in body(source):q=old['quote']
    else:q=quote[:650]
    citations.append({'fact':fact,'source':source,'source_section':heading,'quote':q,'uses':uses})
  c['citations']=citations
  selected[id]=c
 (p/'scoped-proof-contracts.proposal.json').write_text(json.dumps({'version':1,'level':run,'scope':list(selected),'contracts':selected},indent=2)+'\n')
propose('rpm26-supplier-readiness/round2',[25,26]);propose('rpm24-27-28-handoff',[27])
