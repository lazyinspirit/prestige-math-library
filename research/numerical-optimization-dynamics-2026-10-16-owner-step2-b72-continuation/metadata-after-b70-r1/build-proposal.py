from pathlib import Path
import json,re,hashlib,yaml,copy,difflib,datetime
R='numerical-optimization-dynamics-2026-10-16';B=Path(__file__).resolve().parent;P70=Path('research/'+R+'-owner-step2-b70/metadata-proposal-r2');prior=json.loads((P70/'plan.json').read_text());priortarget={r['path']:Path(r['proposed']) for r in prior['targets']};native=Path('research/'+R+'-scope-review/batch-72');state=json.loads((native/'state.json').read_text());ids=set(state['prepared']['inventory']['items']);cone=json.loads((B.parent/'cone.json').read_text());changed=set(cone['changed_statement_definition_subjects']);guards=set();targets=[];nonliteral=[]
def readitem(id):
 p=Path('items/'+id+'.md');guards.add(str(p));s=p.read_text();return yaml.safe_load(re.split(r'^---\s*$',s,flags=re.M)[1]),s

def section(s):
 for n in ['Statement','Definition','Example','Statement refuted']:
  m=re.search(r'^## '+n+r'\s*\n([\s\S]*?)(?=^## |\Z)',s,re.M)
  if m:return n,m[1].strip()
 raise RuntimeError('Missing supplier section')
def proof(s):
 m=re.search(r'^## (?:Proof|Verification|Counterexample)\s*\n([\s\S]*?)(?=^## |\Z)',s,re.M)
 if not m:return []
 rows=[]
 for x in re.finditer(r'^(\d+\.\d+)\s+([\s\S]*?)(?=^\d+\.\d+\s|\Z)',m[1],re.M):
  t=x[2].strip();tag=re.search(r'\[([^\[\]]+)\]\s*∎?\s*$',t);assert tag,(x[1],t)
  rows.append({'id':'step-'+x[1].replace('.','-'),'step':x[1],'claim':t[:tag.start()].strip(),'inputs':[v.strip() for v in tag[1].split(',')]})
 return rows

def facts(s):
 m=re.search(r'^## Facts & Assumptions\s*\n([\s\S]*?)(?=^## |\Z)',s,re.M);rows=[]
 if m:
  for f in re.finditer(r'^\[(F\d+|L\d+)\]([\s\S]*?)(?=^\[(?:F\d+|L\d+)\]|\Z)',m[1],re.M):
   rows.extend((f[1],v) for v in dict.fromkeys(re.findall(r'\[\[([^]|#]+)',f[2])))
 return rows

def loadtarget(p):return json.loads(priortarget.get(str(p),p).read_text())
def write(p,d):
 before=priortarget.get(str(p),p).read_bytes();after=(json.dumps(d,ensure_ascii=False,indent=2)+'\n').encode()
 if before==after:return
 for pre,data in [('before',before),('proposed',after)]:
  q=B/pre/p;q.parent.mkdir(parents=True,exist_ok=True);q.write_bytes(data)
 q=B/'diffs'/p.name;q.parent.mkdir(exist_ok=True);q.write_text(''.join(difflib.unified_diff(before.decode().splitlines(True),after.decode().splitlines(True),fromfile=str(p),tofile=str(p))))
 targets.append({'path':str(p),'before':str(B/'before'/p),'proposed':str(B/'proposed'/p),'proposed_sha256':hashlib.sha256(after).hexdigest(),'expected_before_basis':'b70 r2 proposed target, requiring prior utility application' if str(p) in priortarget else 'actual current canonical metadata'})
# Every native72 source manifest field is mirrored from actual current source; preserve root-owned levels/history.
p=Path('research/'+R+'-batch-72.pages.json');d=loadtarget(p)
for page in d:
 for row in page['items']:
  h,s=readitem(row['id']);row['title']=h['title'];row['deps']=h.get('deps',[]);row['kind']=h['kind']
write(p,d)
# Complete actual paragraph/tag/citation mirrors for native72 proofs; only changed interface quote mirrors outside72.
for p in Path('research').glob(R+'-batch-*.proof-contracts.json'):
 d=loadtarget(p);mutated=False
 for id,c in d.get('contracts',{}).items():
  if id in ids:
   h,s=readitem(id);ds=proof(s)
   if ds:
    oldby={x.get('step'):x for x in c.get('derivations',[])};c['derivations']=[dict(copy.deepcopy(oldby.get(x['step'],{})),**x) for x in ds];oldcit={(x['fact'],x['source']):x for x in c.get('citations',[])};cit=[]
    for f,supplier in facts(s):
     _,sup=readitem(supplier);sec,quote=section(sup);v=copy.deepcopy(oldcit.get((f,supplier),{}));v.update({'fact':f,'source':supplier,'source_section':sec,'quote':quote,'uses':[x['step'] for x in ds if f in x['inputs']]});cit.append(v)
    c['citations']=cit;mutated=True
    # Owner-authored affected boundary projections retain every boundary case, distinguish hypotheses and branches.
    mapping={
     'lem-natural-logarithm-bounded-by-argument':{'zero':('not_applicable','The Statement assumes x>=1, so log is never evaluated at zero.'),'one':('checked','Proof 1.1 treats x=1 explicitly before applying the mean value theorem for x>1.'),'endpoints':('checked','Proof 1.1 uses continuity on [1,x] from the actual logarithm-laws supplier.')},
     'lem-global-cubic-model-minimizer-decrease':{'zero':('checked','Proof 1.2 proves continuity of ||s||^3 at zero; step 2.1 treats g!=0 to exclude a zero exact minimizer. The radial inequality of step 3.1 also holds for s=0.'),'one':('checked','The scalar ray derivative and its positive quadratic root are proved in step 4.1, including t=0 as the ray endpoint.'),'degenerate':('checked','Step 4.1 permits any symmetric B, including q=gTB g=0, because g!=0 and sigma>0 keep the positive-root denominator nonzero.'),'endpoints':('checked','Step 1.2 minimizes on a compact closed ball and compares its boundary/exterior; step 4.1 proves the negative-gradient ray minimum at its unique positive root.')},
     'lem-positive-definite-model-has-unique-newton-step':{'zero':('checked','The Newton equation also has pN=0 when g=0; the dogleg procedure returns stationary before its nonzero-gradient branches.'),'endpoints':('checked','The expanded proof handles returned Newton/Cauchy branches and the unique positive dogleg boundary root in (0,1).')},
     'lem-truncated-cg-iterates-are-krylov-vectors':{'zero':('checked','Step 1.1 gives z0=0 in K0; the stationary and zero-direction stops are covered in step 3.1 before any boundary division.'),'one':('checked','Step 1.1 establishes the base recurrence memberships and strict interior feasibility.'),'degenerate':('checked','Step 2.1 uses the zero-direction guard to ensure ||d||²>0; c<0 gives a unique positive boundary root even when the curvature branch is nonpositive.'),'endpoints':('checked','Step 2.1 proves the unique positive boundary root; step 3.1 verifies feasible interior, cap, stationary and final-Cauchy outputs.')},
     'lem-adaptive-cubic-unsuccessful-iteration-count':{'zero':('checked','Step 1.2 chooses R=0 when 3L<=sigma_min, including L=0. A ratio trial has nonzero checked s and positive predicted decrease by step 1.1.'),'endpoints':('checked','Step 1.2 treats the capped weight update and the threshold sigma>=3L; sigma_max>=3L prevents an infinite below-threshold rejection block.')},
     'thm-trust-region-epsilon-iteration-complexity':{'zero':('checked','The current Statement separately proves positive prediction for every nonstationary trial and permits stationary at a zero gradient; the zero-denominator conventions for MB=0 remain explicit.'),'endpoints':('checked','The finite-cap guarantee allows stationary or target-achieved; actual ratio, radius floor and logarithmic rejection bounds are proved for the current selected feasible trial.')},
     'thm-adaptive-cubic-regularization-epsilon-complexity':{'zero':('checked','The Statement and proof allow an initially stationary iterate. Cases 1/2 assume nonterminal solver success; positive sigma_min, Cg and Dg make the step-count constants defined.'),'one':('checked','Steps 1.2 and 2.2 allow at most one final accepted trial that reaches a stationary or target-achieved iterate.'),'degenerate':('checked','Both exact and admissible inexact cases retain sigma_min>0 and kappa_theta<1; Dg denominator is positive and L=0 is allowed with R=0 when the weight threshold is already met.'),'endpoints':('checked','Steps 1.3 and 2.3 bound rejected blocks and the finite outer cap through the first stationary or target-achieved iterate. Counts exclude internal model-solver work.')}
    }
    if id in mapping:
     for b in c.get('boundaries',[]):
      if b.get('case') in mapping[id]:
       case=b['case'];status,text=mapping[id][case];old=copy.deepcopy(b);b.clear();b.update({'case':case,'status':status,('evidence' if status=='checked' else 'reason'):text});nonliteral.append({'item':id,'old_boundary':old,'proposed_boundary':copy.deepcopy(b),'classification':'Nonliteral owner-authored boundary projection from actual current hypotheses/proof, no new mathematical assertion.'})
  for cit in c.get('citations',[]):
   if cit.get('source') in changed:
    _,s=readitem(cit['source']);sec,quote=section(s)
    if cit.get('quote')!=quote or cit.get('source_section')!=sec:cit['quote']=quote;cit['source_section']=sec;mutated=True
 if mutated:write(p,d)
# Existing source coverage is updated only for scope now present in actual current source. No fetch/read history is invented.
p=Path('research/'+R+'-batch-72.coverage.json');d=loadtarget(p);saved_fetch=[copy.deepcopy(s.get('fetch_verified')) for page in d['pages'] for s in page.get('sources',[])]
for page in d['pages']:
 for src in page.get('sources',[]):
  for row in src.get('contents',[]):
   name=row.get('name','');id=row.get('item')
   if id=='alg-adaptive-cubic-regularization':row['reason']='Current exact-Hessian procedure preserves exact global minimizers and admits checked inexact vectors satisfying the two radial cubic conditions, TC.s residual and cubic-Cauchy decrease; domain-exit and finite solver/cap failures remain explicit.'
   elif id=='lem-global-cubic-model-minimizer-decrease':row['reason']='The current locally proved lemma preserves global existence/stationarity/exact decrease and additionally proves the same decrease from two radial conditions plus the explicit cubic Cauchy-ray minimizer.'
   elif id=='lem-adaptive-cubic-unsuccessful-iteration-count':row['reason']='Current local rejection proof applies to ratio trials using exact minimizers or admissible checked candidates, with exact Hessians, Lipschitz trial-segment Hessian and the stated positive weight floor/cap.'
   elif id=='thm-adaptive-cubic-regularization-epsilon-complexity':row['reason']='Current theorem proves separate exact and admissible-inexact O(epsilon^-3/2) outer-trial bounds. The inexact case also assumes trial-segment gradient Lipschitzness, kappa_theta<1 and solver success at every nonterminal trial; internal solver work is excluded.'
   elif 'Numerical implementation details and convergence claims for approximate subproblem solves' in name:
    row['name']='Construction and internal work of a particular approximate subproblem implementation';row['reason']='The current procedure permits checked inexact steps and its theorem proves their conditional outer complexity, but constructing an arbitrary solver and bounding its internal work remain outside this item inventory.'
   elif 'Approximate ARC(S) subspace-solver conditions and second-order complexity' in name:
    row['name']='Second-order complexity and implementation-specific subspace-solver work';row['reason']='The approved current first-order theorem includes admissible inexact model steps under explicit cubic/TC.s/Cauchy checks, while second-order accuracy and internal solver-work bounds remain outside scope.'
  if src['url']=='https://perso.unamur.be/~phtoint/pubs/TR07-05b.pdf':
   src['contents'].append({'name':'Part II §4 conditions (4.1), (4.2), TC.s and Cauchy model decrease: admissible inexact first-order ARC interface','disposition':'included','item':'thm-adaptive-cubic-regularization-epsilon-complexity','reason':'Native original72 review supplied the actual source-backed checked-candidate interface and a local proof. This coverage mirror asserts no new external reading or fetch; the current theorem retains the exact case and states the extra inexact solver-success/gradient-Lipschitz assumptions explicitly.'})
assert saved_fetch==[s.get('fetch_verified') for page in d['pages'] for s in page.get('sources',[])];nonliteral.append({'target':str(p),'classification':'Nonliteral current scope coverage projections; every fetch_verified object and all existing read/search/recovery history preserved exactly.'});write(p,d)
# Guard native inventory, all exactly quoted suppliers, changed-interface bodies, and actual home pages.
for id in ids:guards.add('items/'+id+'.md')
for slug in state['prepared']['inventory']['pages']:guards.add('library/numerical-optimization-inverse-problems-and-uncertainty-quantification/'+slug+'.md')
raw=[]
for i,path in enumerate(sorted(guards)):
 p=Path(path);q=B/'guards'/f'{i:03d}.raw';q.parent.mkdir(exist_ok=True);q.write_bytes(p.read_bytes());raw.append({'path':path,'raw':str(q)})
plan={'version':1,'run':R,'created_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'type':'ROOTONLY_CURRENT72_METADATA_AFTER_B70_R2','required_prior_utility':str(P70/'apply-metadata.py'),'targets':targets,'raw_guards':raw,'no_application':True,'ordering':'The expected before bytes for72 pages/contracts are the exact b70-r2 proposed payloads. This utility fails closed before that prior utility is applied. Other targets bind actual current metadata.','held_outside_sources':'Original72 cycle2 returned escalate for83 smooth-vs-C2 and stationary status issues. Those source proposals are UNAPPLIED; current72 metadata is a literal current-source projection, not native acceptance or proof closure of83.','not_included':'No native history, source bytes, hashes, levels, engine controls, acceptance or recertification are edited.'};(B/'plan.json').write_text(json.dumps(plan,ensure_ascii=False,indent=2)+'\n');(B/'nonliteral-projections.json').write_text(json.dumps(nonliteral,ensure_ascii=False,indent=2)+'\n');print(json.dumps({'targets':len(targets),'raw_source_guards':len(raw),'prior_utility_required':str(P70/'apply-metadata.py')}))
