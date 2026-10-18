from pathlib import Path
import json,re,yaml
run='non-ml-math-remaining-81-2026-10-18';research=Path('research')
new=['def-intrinsic-quotient-stack-borel-moore-grading','lem-quiver-parabolic-levi-borel-model-comparisons','thm-quiver-quotient-stack-borel-moore-operation-package']
changed=new+['def-untwisted-quiver-cohomological-hall-algebra','thm-untwisted-quiver-coha-is-associative-and-unital']
def read(id):
 s=(Path('items')/(id+'.md')).read_text();fm,body=s[4:].split('\n---\n',1);return yaml.safe_load(fm),body
p=research/(run+'-batch-55.pages.json');pages=json.loads(p.read_text())
for page in pages:
 for row in page['items']:
  if row['id'] not in changed:continue
  x,b=read(row['id'])
  for k in ['deps','justified_by','provenance','sources','proof_strategy']:
   if k in x:row[k]=x[k]
   elif k in row:del row[k]
  kind='Definition' if x['kind']=='definition' else 'Statement'
  row['statement']=re.search(r'^## '+kind+r'\n(.*?)(?=\n## |\Z)',b,re.S|re.M).group(1).strip()
 if page['kind']=='A':
  ids=[x['id'] for x in page['items']]
  for id in reversed(new):
   if id in ids:continue
   x,b=read(id);kind='Definition' if x['kind']=='definition' else 'Statement'
   row={k:x[k] for k in ['id','kind','title','deps','justified_by','provenance','sources','proof_strategy'] if k in x}
   row['source_path']='items/'+id+'.md';row['statement']=re.search(r'^## '+kind+r'\n(.*?)(?=\n## |\Z)',b,re.S|re.M).group(1).strip()
   idx=next(i for i,x in enumerate(page['items']) if x['id']=='def-untwisted-quiver-cohomological-hall-algebra');page['items'].insert(idx,row)
p.write_text(json.dumps(pages,indent=2,ensure_ascii=False)+'\n')
p=research/(run+'-batch-55.proof-contracts.json');contracts=json.loads(p.read_text())
for id in changed:
 x,b=read(id)
 steps=[]
 if '## Proof' in b:
  proof=b.split('## Proof',1)[1]
  for m in re.finditer(r'^(\d+\.\d+) (.*?)(?=\n\n\d+\.\d+ |\Z)',proof,re.M|re.S):
   t=m.group(2).strip();tag=re.search(r'\[([^\[\]]+)\]\s*(?:∎)?$',t)
   if not tag:raise RuntimeError('missing tag '+id+' '+m.group(1))
   steps.append({'id':'step-'+m.group(1).replace('.','-'),'claim':t[:tag.start()].strip(),'step':m.group(1),'inputs':[t.strip() for t in tag.group(1).split(',')]})
 citations=[]
 if '## Facts & Assumptions' in b:
  facts=b.split('## Facts & Assumptions',1)[1].split('## Proof',1)[0]
  for m in re.finditer(r'^\[([FA]\d+)\] (.*?)(?=\n\n\[[FA]\d+\]|\Z)',facts,re.M|re.S):
   fact=m.group(1);links=re.findall(r'\[\[([^\]|]+)(?:\|[^\]]+)?\]\]',m.group(2));uses=[s['step'] for s in steps if fact in s['inputs']]
   for source in links:
    sx,sb=read(source);section='Definition' if sx['kind']=='definition' else 'Statement'
    sm=re.search(r'^## '+section+r'\n(.*?)(?=\n## |\Z)',sb,re.M|re.S)
    if not sm:raise RuntimeError('no statement '+source)
    quote=sm.group(1).strip()
    if source=='def-axiom-of-choice':quote=quote.split('\n\n',1)[0]
    citations.append({'fact':fact,'source':source,'source_section':section,'quote':quote,'uses':uses})
 base=contracts['contracts'].get(id,{})
 if not base:
  evid={
   'empty':'The Statement/Definition omits rank-zero GL factors and uses the trivial group for the empty product; the construction includes empty quivers.',
   'zero':'Zero blocks are omitted; endpoint Grassmannians and frame spaces are points. The same model and operation formulas apply.',
   'one':'Rank-one blocks use the same pivot-minor and frame charts; no higher-rank hypothesis occurs.',
   'degenerate':'The e=0 or u=0 affine-bundle maps have the identity rank-zero orientation; inverse pullback is still defined.',
   'endpoints':'A zero subdimension or quotient dimension is covered by point flag factors and rank-zero bundles.',
   'nonempty-choice':'AC is explicit in A1 for proof items and inherited constructible suppliers in the Definition; no representative selection defines the comparison.'}
  boundaries=[{'case':k,'status':'checked','evidence':v} for k,v in evid.items()]+[{'case':k,'status':'not_applicable','reason':'No biconditional is asserted.'} for k in ['iff-forward','iff-reverse']]
 else:boundaries=base['boundaries']
 contracts['contracts'][id]={'citations':citations,'derivations':steps,'routine_steps':[],'boundaries':boundaries,'axiom_uses':[{'axiom':'def-axiom-of-choice','steps':[s['step'] for s in steps if 'A1' in s['inputs']]}],'finite_checks':[]}
 if id not in contracts['scope']:contracts['scope'].append(id)
p.write_text(json.dumps(contracts,indent=2,ensure_ascii=False)+'\n')
for suffix in ['coverage.json','source-coverage.json']:
 p=research/(run+'-batch-55.'+suffix);x=json.loads(p.read_text())
 source=x['pages'][0]['sources'][0]
 for id in new:
  if any(c.get('item')==id for c in source['contents']):continue
  source['contents'].append({'name':'Owner local supplier expansion for ordinary quotient-stack CoHA: '+read(id)[0]['title'],'item':id,'disposition':'included','reason':'The full ordinary source construction §§2.1–2.3 was read; the exact intrinsic regrading, induced-variety comparison and change-group/coherent operation proofs are local expansions from the explicitly bound proved constructible suppliers, not quoted as source theorems. Owner source-review documents reading limits.'})
 p.write_text(json.dumps(x,indent=2,ensure_ascii=False)+'\n')
# The actual affected54manifest row; no level label or scheduling claim is changed.
p=research/(run+'-batch-54.pages.json');pages=json.loads(p.read_text())
for page in pages:
 for row in page['items']:
  if row['id']!='rem-derived-and-cohomological-hall-are-distinct':continue
  x,b=read(row['id']);row['deps']=x['deps']
  section=re.search(r'^## Remarks\n(.*?)(?=\n## |\Z)',b,re.M|re.S)
  if 'statement' in row:row['statement']=section.group(1).strip()
p.write_text(json.dumps(pages,indent=2,ensure_ascii=False)+'\n')
print('ordinary bindings updated; no dependency levels, stamps or readiness touched')
