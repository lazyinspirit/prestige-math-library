from pathlib import Path
import json,re,yaml,shutil
P=Path(__file__).parent
seeds=['alg-constrained-policy-optimization']
meta={}; texts={};aliases={};errors=[]
for p in Path('items').glob('*.md'):
 s=p.read_text();texts[p.stem]=s
 # All current alias declarations are inspected; parse metadata to resolve graph edges.
 try:
  fm=s.split('---',2)[1]
  spans=[]
  for field in ['id','deps','justified_by','aliases']:
   match=re.search(r'(?m)^'+field+r':[^\n]*(?:\n(?![A-Za-z_][A-Za-z_0-9]*:|---)[^\n]*)*',fm)
   if match:spans.append(match.group(0))
  m=yaml.safe_load('\n'.join(spans)) or {};meta[p.stem]=m
  for a in m.get('aliases',[]) or []:
   if a in aliases and aliases[a]!=p.stem:errors.append(f'ambiguous {a}')
   aliases[a]=p.stem
 except Exception as e: errors.append(str(p)+': '+str(e))
canon=lambda x: x if x in meta else aliases.get(x,x)
closure=set(seeds);logical=[]
while True:
 added=[]
 for id,m in meta.items():
  hits=[canon(t) for k in ['deps','justified_by'] for t in (m.get(k,[]) or []) if canon(t) in closure]
  if hits and id not in seeds:added.append(id)
  row={'id':id,'targets':hits}
  if hits and row not in logical:logical.append(row)
 added=[id for id in added if id not in closure]
 if not added:break
 closure.update(added)
refs=[]
names=closure|{a for a,c in aliases.items() if c in closure}
for root in ['items','library']:
 for p in Path(root).rglob('*.md'):
  s=p.read_text();hits=sorted(n for n in names if re.search(r'(?<![\w-])'+re.escape(n)+r'(?![\w-])',s))
  if hits:
   refs.append({'path':str(p),'targets':hits})
   dest=P/'before'/p;dest.parent.mkdir(parents=True,exist_ok=True)
   if not dest.exists():shutil.copyfile(p,dest)
result={'scope':'all active items and library markdown; aliases resolved from every current item exact id/deps/justified_by/aliases YAML field projections (unrelated metadata is outside this discovery); logical deps/justified_by closure plus literal ID/alias references','seeds':seeds,'logical_consumers':logical,'closure':sorted(closure),'relevant_aliases':{a:c for a,c in aliases.items() if c in closure},'references':refs,'parse_errors':errors,'item_count':len(meta)}
(P/'evidence/consumer-discovery.json').write_text(json.dumps(result,indent=2)+'\n')
print(json.dumps(result,indent=2))
