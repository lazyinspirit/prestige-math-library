from pathlib import Path
import json,re,yaml,hashlib,copy,difflib,datetime
R='numerical-optimization-dynamics-2026-10-16';B=Path(__file__).resolve().parent;prior=B.parent/'metadata-proposal-r2';pp=json.loads((prior/'plan.json').read_text());oldtargets={r['path']:r for r in pp['targets']};guards=set();targets=[];ops=[]
def readitem(id):
 p=Path('items/'+id+'.md');guards.add(str(p));s=p.read_text();return yaml.safe_load(re.split(r'^---\s*$',s,flags=re.M)[1]),s

def section(s):
 for name in ['Statement','Definition','Example','Statement refuted']:
  m=re.search(r'^## '+name+r'\s*\n([\s\S]*?)(?=^## |\Z)',s,re.M)
  if m:return name,m[1].strip()
 raise RuntimeError('No supplier section')
def actualsteps(s):
 m=re.search(r'^## (?:Proof|Verification|Counterexample)\s*\n([\s\S]*?)(?=^## |\Z)',s,re.M)
 if not m:return []
 out=[]
 for x in re.finditer(r'^(\d+\.\d+)\s+([\s\S]*?)(?=^\d+\.\d+\s|\Z)',m[1],re.M):
  text=x[2].strip();tag=re.search(r'\[([^\[\]]+)\]\s*∎?\s*$',text);assert tag,x[1]
  out.append({'step':x[1],'claim':text[:tag.start()].strip(),'inputs':[v.strip() for v in tag[1].split(',')]})
 return out

def actualfacts(s):
 m=re.search(r'^## Facts & Assumptions\s*\n([\s\S]*?)(?=^## |\Z)',s,re.M);rows=[]
 if m:
  for x in re.finditer(r'^\[(F\d+|L\d+)\]([\s\S]*?)(?=^\[[A-Z]+\d+\]|\Z)',m[1],re.M):rows.extend((x[1],v) for v in dict.fromkeys(re.findall(r'\[\[([^]|#]+)',x[2])))
 return rows

def load(p):return json.loads(Path(oldtargets[str(p)]['proposed']).read_text()) if str(p) in oldtargets else json.loads(p.read_text())
def write(p,d):
 before=p.read_bytes();after=(json.dumps(d,ensure_ascii=False,indent=2)+'\n').encode()
 if before==after:return
 for pre,data in [('before',before),('proposed',after)]:
  q=B/pre/p;q.parent.mkdir(parents=True,exist_ok=True);q.write_bytes(data)
 q=B/'diffs'/p.name;q.parent.mkdir(exist_ok=True);q.write_text(''.join(difflib.unified_diff(before.decode().splitlines(True),after.decode().splitlines(True),fromfile=str(p),tofile=str(p))))
 targets.append({'path':str(p),'before':str(B/'before'/p),'proposed':str(B/'proposed'/p),'proposed_sha256':hashlib.sha256(after).hexdigest()})
# Preserve prior exact two-new-result integration, coverage and nonliteral boundary/review fields.
for batch in ['58','70','71','72','85']:
 p=Path('research/'+R+'-batch-'+batch+'.proof-contracts.json');d=load(p)
 for id,c in d['contracts'].items():
  _,s=readitem(id);steps=actualsteps(s);old_der={x['step']:x for x in c.get('derivations',[])};old_routine={x['step']:x for x in c.get('routine_steps',[])};der=[];routine=[]
  for row in steps:
   old=old_routine.get(row['step']) if row['step'] in old_routine else old_der.get(row['step']);x=copy.deepcopy(old or {});x.setdefault('id',('routine-' if row['step'] in old_routine else 'step-')+row['step'].replace('.','-'));x.update(row);(routine if row['step'] in old_routine else der).append(x)
  c['derivations']=der;c['routine_steps']=routine;oldcit={(x['fact'],x['source']):x for x in c.get('citations',[])};cit=[]
  for fact,supplier in actualfacts(s):
   _,suppliertext=readitem(supplier);sec,quote=section(suppliertext);x=copy.deepcopy(oldcit.get((fact,supplier),{}));x.update({'fact':fact,'source':supplier,'source_section':sec,'quote':quote,'uses':[r['step'] for r in steps if fact in r['inputs']]});cit.append(x)
  c['citations']=cit
  if id=='thm-full-memory-bfgs-local-superlinear-convergence':
   for boundary in c.get('boundaries',[]):
    if boundary.get('case')=='zero' and 'steps 1.1–2.2' in (boundary.get('evidence') or ''):
     before_ref=boundary['evidence'];boundary['evidence']=before_ref.replace('steps 1.1–2.2','steps 1.1–3.1');ops.append({'item':id,'field':'boundaries.zero.evidence','old':before_ref,'proposed':boundary['evidence'],'classification':'Mechanical correction of nonexistent step 2.2 to actual unit-trial proof step 3.1; no source/math claim change.'})
  # Preserve risk/reviewer/history/boundaries and proof-vs-routine categorization; all projected text is exact current source.
 write(p,d)
 p=Path('research/'+R+'-batch-'+batch+'.pages.json');d=load(p)
 for page in d:
  carrier=Path('library')/page['category']/(page['id']+'.md');guards.add(str(carrier));h=yaml.safe_load(re.split(r'^---\s*$',carrier.read_text(),flags=re.M)[1]);expected=h.get('items' if page['kind']=='A' else 'examples',[]);assert [x['id'] for x in page['items']]==expected,('Page inventory differs',page['id'])
  for row in page['items']:
   front,_=readitem(row['id']);row['title']=front['title'];row['kind']=front['kind'];row['deps']=front.get('deps',[])
 write(p,d)
# Coverage58 payload unchanged from r2; no read/fetch claims or root scheduling/hash metadata altered.
p=Path('research/'+R+'-batch-58.coverage.json');write(p,load(p))
# Exact current guards include all transcribed proof subjects and quoted supplier sections.
raw=[]
for i,path in enumerate(sorted(guards)):
 q=B/'guards'/f'{i:03d}.raw';q.parent.mkdir(exist_ok=True);q.write_bytes(Path(path).read_bytes());raw.append({'path':path,'raw':str(q)})
plan={'version':1,'run':R,'created_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'type':'ROOTONLY_R3_ALL_SCOPED_FULL_LITERAL_SOURCE_METADATA','targets':targets,'raw_guards':raw,'prior_history':str(prior/'plan.json'),'no_application':True,'transcription_scope':'All72 proof contracts across58/70/71/72/85: complete actual proof paragraphs, exact tag lists, actual fact-to-supplier sections/uses, and exact actual manifest item deps/titles/kinds. Existing routine_steps remain routine, derivations remain derivations; their inputs now match actual source instead of stale artificial self references. No mathematical source review or source mutation performed.','nonliteral_operations':'Only the previously proposed b70-r2 owner-authored boundary/new-contract/source-coverage integration is retained. Other existing risk/boundary/native-history fields are preserved; no new acceptance or boundary math claim authored.','root_remaining':'New draft lemma dependency levels and native acceptance/frontier recertification remain root-owned; no guessed levels/hashes written.'};(B/'additional-nonliteral-operations.json').write_text(json.dumps(ops,ensure_ascii=False,indent=2)+'\n');(B/'plan.json').write_text(json.dumps(plan,ensure_ascii=False,indent=2)+'\n');print(json.dumps({'targets':len(targets),'raw_source_guards':len(raw)}))
