import pathlib,json,yaml,subprocess,hashlib,datetime
r='non-ml-math-remaining-81-2026-10-18';b=pathlib.Path('research/'+r+'-owner-cherednik-kz-completion');scope=json.loads((b/'item-scope.json').read_text());old=json.loads((b/('before/research/'+r+'-batch-73.pages.json')).read_text());oldids={i['id'] for pg in old for i in pg['items']};new=set(scope)-oldids
fm={};raw={}
def read(i):
 if i not in fm:
  p=pathlib.Path('items/'+i+'.md');raw[i]=p.read_text();fm[i]=yaml.safe_load(raw[i].split('---',2)[1])
 return fm[i]
# Actual text/definition consumers, followed transitively through their dependency identities.
seen=set(scope);candidates=set();changed=True
while changed:
 pat=b/'checks/consumer-patterns.txt';pat.write_text('\n'.join(sorted(seen))+'\n');z=subprocess.run(['rg','-l','-F','-f',str(pat),'items','library','--glob','*.md'],capture_output=True,text=True)
 found=set(z.stdout.splitlines());candidates|=found;changed=False
 for x in found:
  p=pathlib.Path(x)
  if p.parent.name!='items':continue
  i=p.stem;f=read(i)
  if i not in seen and set(f.get('deps',[]))&seen:seen.add(i);changed=True
externalcons=sorted(seen-set(scope));records=[]
for i in scope:
 p=pathlib.Path('items/'+i+'.md');f=read(i);before=b/'before'/p;sha=hashlib.sha256(p.read_bytes()).hexdigest()
 if i in new:disp='new proved local supplier; complete canonical proof and exact-current contract'
 elif before.read_bytes()==p.read_bytes():disp='scientific and raw bytes unchanged; complete consumer proof read and exact-current supplier quotations refreshed'
 else:disp={'thm-rational-cherednik-pbw-theorem':'scientific supplier repair: valid four-component termination measure and explicit group/same-side overlaps; Statement unchanged','lem-rational-cherednik-log-connection-meridian-eigenvalues':'actual ODE/Gronwall premise bindings added; characteristic-polynomial Statement unchanged','lem-rational-cherednik-dunkl-localization-and-flat-connection':'local-freeness proof extracted to actual general finite-connection supplier; Statement unchanged','thm-rational-cherednik-kz-standard-modules-factor-through-hecke':'replaced invalid resonant diagonalizability inference by exact family polynomial identity; Statement unchanged','thm-rational-cherednik-kz-factors-through-hecke-algebra':'completed arbitrary-object projective/family proof; Statement unchanged','thm-rational-cherednik-kz-quotient-equivalence-under-bmr-rank':'completed algebraic-monodromy, projective/BGG/rank and Hecke-surjectivity proof; Statement unchanged'}[i]
 records.append({'id':i,'disposition':disp,'current_raw_sha256':sha,'deps':f.get('deps',[]),'original_dependency_level_preserved':True if i in oldids else None})
# Actual external dependency context and cycle check, without changing or certifying levels.
active=set();done=set();edges=[]
def dfs(i):
 if i in active:raise RuntimeError('dependencycycle '+i)
 if i in done:return
 active.add(i)
 for dep in read(i).get('deps',[]):edges.append([i,dep]);dfs(dep)
 active.remove(i);done.add(i)
for i in scope:dfs(i)
external=sorted(set(x for i in scope for x in read(i).get('deps',[]))-set(scope))
ctx=[]
for i in external:
 p=pathlib.Path('items/'+i+'.md');q=b/'context'/p;q.parent.mkdir(parents=True,exist_ok=True);q.write_bytes(p.read_bytes());ctx.append({'id':i,'path':str(p),'context_file':str(q),'sha256':hashlib.sha256(p.read_bytes()).hexdigest()})
d={'recorded_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'items':records,'external_logical_consumers':externalcons,'all_text_candidate_files':sorted(candidates),'external_supplier_context':ctx,'dependency_closure':{'nodes':len(done),'edges':len(edges),'cycles':0,'levels_written':False},'scope_pages':['rational-cherednik-algebras-and-category-o','rational-cherednik-algebras-and-category-o-examples']}
(b/'consumer-closure.json').write_text(json.dumps(d,indent=2)+'\n');print('scope',len(scope),'external consumers',externalcons,'externaldirect suppliers',len(external),'closure',len(done))
