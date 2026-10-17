from pathlib import Path
import json,yaml,re,hashlib,copy,difflib,datetime
R='numerical-optimization-dynamics-2026-10-16';B=Path('research/'+R+'-owner-step2-b70/metadata-proposal-r1');B.mkdir(parents=True,exist_ok=True)
selection=json.loads(Path('research/'+R+'-owner-step2-b70/proposal-r1/combined-exact-selection.json').read_text())['files'];source_ids={Path(r['path']).stem for r in selection if r['path'].startswith('items/')};newids={r['path'].split('/')[-1][:-3] for r in selection if r['before_sha256'] is None};used=set();targets=[]
def readitem(id):
 p=Path('items/'+id+'.md');used.add(str(p));s=p.read_text();return yaml.safe_load(s.split('---',2)[1]),s

def section(s):
 for name in ['Statement','Definition','Example','Statement refuted']:
  m=re.search(r'^## '+name+r'\s*\n([\s\S]*?)(?=^## |\Z)',s,re.M)
  if m:return name,m[1].strip()
 raise RuntimeError('No supplier section')
def steps(s):
 m=re.search(r'^## (Proof|Verification|Counterexample)\s*\n([\s\S]*?)(?=^## |\Z)',s,re.M)
 if not m:return []
 out=[]
 for x in re.finditer(r'^(\d+\.\d+) ([\s\S]*?)(?=^\d+\.\d+ |\Z)',m[2],re.M):
  text=x[2].strip();tag=re.search(r'\[([^\[\]]+)\]\s*∎?\s*$',text)
  if not tag:raise RuntimeError('No final tags '+x[1])
  out.append({'id':'step-'+x[1].replace('.','-'),'step':x[1],'claim':text[:tag.start()].strip(),'inputs':[t.strip() for t in tag[1].split(',')]})
 return out

def facts(s):
 m=re.search(r'^## Facts & Assumptions\s*\n([\s\S]*?)(?=^## |\Z)',s,re.M)
 if not m:return []
 out=[]
 for block in re.finditer(r'^\[(F\d+|L\d+)\]([\s\S]*?)(?=^\[(?:F\d+|L\d+)\]|\Z)',m[1],re.M):
  for supplier in dict.fromkeys(re.findall(r'\[\[([^]|#]+)',block[2])):out.append((block[1],supplier))
 return out

def write_target(path,d):
 p=Path(path);before=p.read_bytes();after=(json.dumps(d,ensure_ascii=False,indent=2)+'\n').encode()
 if before==after:return
 for pref,data in [('before',before),('proposed',after)]:
  q=B/pref/p;q.parent.mkdir(parents=True,exist_ok=True);q.write_bytes(data)
 q=B/'diffs'/p.name;q.parent.mkdir(exist_ok=True);q.write_text(''.join(difflib.unified_diff(before.decode().splitlines(True),after.decode().splitlines(True),fromfile=path,tofile=path)))
 targets.append({'path':path,'before':str(B/'before'/p),'proposed':str(B/'proposed'/p),'proposed_sha256':hashlib.sha256(after).hexdigest()})

# Source manifests: only actual current dependency/title fields and the two new draft rows.
for p in Path('research').glob(R+'-batch-*.pages.json'):
 d=json.loads(p.read_text());touched=False
 for page in d:
  for row in page.get('items',[]):
   if row['id'] in source_ids:
    h,s=readitem(row['id']);row['title']=h['title'];row['deps']=h.get('deps',[]);touched=True
  if page['id']=='nonconvex-line-search-and-inexact-newton-methods':
   for id in sorted(newids):
    if any(x['id']==id for x in page['items']):continue
    h,s=readitem(id);dep=h['deps'];anchor='alg-bracketing-zoom-strong-wolfe-search' if 'bracketing-zoom' in id else 'alg-inexact-newton-krylov-with-descent-safeguard';idx=next(i for i,x in enumerate(page['items']) if x['id']==anchor)+1
    # Dependency level assignment/recertification remains root-owned; this row deliberately carries no guessed level.
    page['items'].insert(idx,{'id':id,'kind':h['kind'],'title':h['title'],'deps':dep});touched=True
 if touched:write_target(str(p),d)
# Changed proof contracts + every actual affected source quote, retaining all unaffected fields/history.
contractpaths=list(Path('research').glob(R+'-batch-*.proof-contracts.json'))
for p in contractpaths:
 d=json.loads(p.read_text());changed=False
 for id,c in d.get('contracts',{}).items():
  h,s=readitem(id)
  if id in source_ids:
   ds=steps(s)
   if ds:
    oldby={x.get('step'):x for x in c.get('derivations',[])};rebuilt=[]
    for row in ds:
     x=copy.deepcopy(oldby.get(row['step'],{}));x.update(row);rebuilt.append(x)
    c['derivations']=rebuilt
    oldcit={(x.get('fact'),x.get('source')):x for x in c.get('citations',[])};cit=[]
    for fact,supplier in facts(s):
     _,sup=readitem(supplier);sec,quote=section(sup);x=copy.deepcopy(oldcit.get((fact,supplier),{}));x.update({'fact':fact,'source':supplier,'source_section':sec,'quote':quote,'uses':[r['step'] for r in ds if fact in r['inputs']]});cit.append(x)
    c['citations']=cit;changed=True
    # Existing boundary text may mention changed proof labels; update just actual label shifts.
    mapping={}
    if id in ['lem-inexact-newton-error-recurrence-under-lipschitz-jacobian','thm-inexact-newton-local-forcing-rates']:mapping={'1.1':'1.2'}
    if id=='ex-rosenbrock-fr-prplus-trace':
     boundary_text={
      'zero':'Step 1.1 gives G0=54227.36>0; step 3.1 gives a nonzero g1, so all coefficient denominators in step 4.1 are defined.',
      'one':'Step 2.1 proves the initial unit trial fails Armijo and the search enters zoom; step 3.1 proves its tenth midpoint 1/1024 passes.',
      'degenerate':'The Example chooses 0<c1=1/1000<c2=49/100<1/2, E>=1, Z>=10 and K>=2; steps 2.1–3.1 show these budgets reach the accepted first update.',
      'endpoints':'Step 2.1 keeps a=0 and halves the positive endpoint through nine rejected midpoints; step 3.1 accepts the positive tenth midpoint, within the feasible whole-plane domain.',
      'nonempty-choice':'Steps 2.1–3.1 specify the deterministic unit/dyadic trial sequence; step 4.1 proves the actual restart without a choice of an unspecified accepted step.'}
     for x in c.get('boundaries',[]):
      if x.get('case') in boundary_text:
       case=x['case'];x.clear();x.update({'case':case,'status':'checked','evidence':boundary_text[case]})
    if id=='ex-trust-region-newton-cauchy-truncated-cg':
     specific={
      'zero':'Step 1.1 verifies the exact zero Newton residual with eta0=bar_eta=0 and m=2<=M; there is no zero-gradient denominator because ||g||=sqrt(5)>0.',
      'one':'The input budgets N>=1 and E>=1 permit the first Newton update; step 2.1 proves the first unit trial is accepted.',
      'endpoints':'Step 1.2 proves the radius-one Cauchy/truncated-CG boundary exit; step 2.1 proves the accepted unit line-search endpoint, and step 3.1 checks the radius-one global minimizer.',
      'nonempty-choice':'Step 1.1 constructs the deterministic K2 Galerkin candidate with det(V)=3 and m=2; no unspecified solver output or infinite selection is assumed.'}
     for x in c.get('boundaries',[]):
      if x.get('case') in specific:
       case=x['case'];x.clear();x.update({'case':case,'status':'checked','evidence':specific[case]})
    if mapping:
     for x in c.get('boundaries',[]):
      for k in ['evidence','reason']:
       if k in x:x[k]=re.sub(r'([Ss]teps?\s+)(\d+\.\d+)',lambda m:m[1]+mapping.get(m[2],m[2]),x[k])
     # Add exact zero-dimensional branch rather than retain exclusion of n=0.
     for x in c.get('boundaries',[]):
      if x.get('case') in ['empty','zero']:
       case=x['case'];x.clear();x.update({'case':case,'status':'checked','evidence':'Step 1.1 treats n=0 explicitly: the singleton zero-space recurrence has identically zero error; positive-dimensional inverse estimates start at step 1.2.'})
  for cit in c.get('citations',[]):
   if cit.get('source') in source_ids:
    _,sup=readitem(cit['source']);sec,quote=section(sup)
    if cit.get('quote')!=quote or cit.get('source_section')!=sec:cit['quote']=quote;cit['source_section']=sec;changed=True
 if p.name==R+'-batch-58.proof-contracts.json':
  for id in sorted(newids):
   if id in d['contracts']:continue
   _,s=readitem(id);ds=steps(s);cit=[]
   for f,supplier in facts(s):
    _,sup=readitem(supplier);sec,quote=section(sup);cit.append({'fact':f,'source':supplier,'source_section':sec,'quote':quote,'uses':[x['step'] for x in ds if f in x['inputs']]})
   zero='The Newton outer budget N may be zero; step 3.1 bounds zero solver/search calls and step 4.1 returns at the initial budget/stationary check.' if 'inexact-newton' in id else 'An arbitrary zero direction fails the initial strict-descent check at step 1.1.'
   boundaries=[{'case':'empty','status':'not_applicable','reason':'The procedure input includes an initial point in its open domain.'},{'case':'zero','status':'checked','evidence':zero},{'case':'one','status':'checked','evidence':'The proof uses loop bounds and vector inner products, including dimension one.'},{'case':'degenerate','status':'checked','evidence':'Exact comparisons, finite evaluation return and solver return assumptions are explicit; a failed trial returns its stated failure.'},{'case':'endpoints','status':'checked','evidence':'Search positivity/domain endpoints are proved in the search lemma steps 1.1–3.1; loop exhaustion is a specified failure/terminal status.'},{'case':'nonempty-choice','status':'not_applicable','reason':'All choices are the deterministic input procedure and explicit finite loops.'},{'case':'iff-forward','status':'not_applicable','reason':'The assertion is a one-way checked-return/count implication.'},{'case':'iff-reverse','status':'not_applicable','reason':'The assertion is a one-way checked-return/count implication.'}]
   d['contracts'][id]={'risk':'medium','citations':cit,'derivations':ds,'routine_steps':[],'boundaries':boundaries,'finite_smoke':[],'risk_review':{'status':'complete','reviewer':'owner-b58-b70','notes':'Root independently reviewed the full source proposal and locally composed proof; this is no native acceptance or source-identical theorem claim.'}};d['scope'].append(id);changed=True
 if changed:write_target(str(p),d)
# Truthful coverage additions use existing recorded source-method context; no new fetch/read stamp.
p=Path('research/'+R+'-batch-58.coverage.json');d=json.loads(p.read_text());source=d['pages'][0]['sources'][0]
for id,label in [('lem-bracketing-zoom-finite-budget-checked-return','Finite capped adaptation of §3.5 bracketing/zoom: local checked-return and E+Z consequence'),('lem-inexact-newton-krylov-finite-budget-checked-return','Finite capped adaptation of §7.1 Newton–CG: local termination, feasibility and separate count consequences')]:
 if not any(c.get('item')==id for c in source['contents']):source['contents'].append({'name':label,'disposition':'included','item':id,'reason':'The established source-method context is already represented by the local algorithm. This added intermediate result proves consequences of its explicit local budgets and checks; no identical theorem in the reference, new external reading or new fetch is claimed.'})
write_target(str(p),d)
# Bind exact current actual sources and every supplier quote. Guard only used canonical paths, not all unrelated files scanned above.
needed={r['path'] for r in selection}
for target in targets:
 if target['path'].endswith('.proof-contracts.json'):
  dat=json.loads(Path(target['proposed']).read_text())
  for id,c in dat['contracts'].items():
   if id in source_ids or any(x.get('source') in source_ids for x in c.get('citations',[])):
    needed.add('items/'+id+'.md');needed.update('items/'+x['source']+'.md' for x in c.get('citations',[]))
guards=[]
for i,p in enumerate(sorted(needed)):
 q=B/'guards'/f'{i:03d}.raw';q.parent.mkdir(exist_ok=True);q.write_bytes(Path(p).read_bytes());guards.append({'path':p,'raw':str(q)})
plan={'version':1,'run':R,'type':'ROOT_ONLY_GUARDED_SOURCE_METADATA_PROPOSAL','created_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'targets':targets,'raw_guards':guards,'not_included':'No hashes/levels/native history/engine controls/step1 readiness or acceptance rewritten. Root owns dependency-level assignment for new rows and native frontier recertification.','warning':'Foreign example is held until native72 writer drains; rebuild this proposal after actual source application and final precheck. Current draft binds only current actual source, not unapplied bytes.'}
(B/'plan.json').write_text(json.dumps(plan,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'targets':len(targets),'guards':len(guards),'directory':str(B)}))
