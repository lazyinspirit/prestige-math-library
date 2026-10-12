from pathlib import Path
import json,hashlib,subprocess,datetime,re
from fractions import Fraction as Q
out=Path(__file__).parent; root=Path.cwd();report=json.loads((out/'guarded-recovery.json').read_text())
def add(a,b):return [[x+y for x,y in zip(r,t)] for r,t in zip(a,b)]
def neg(a):return [[-x for x in r] for r in a]
def mul(a,b):return [[sum(a[i][k]*b[k][j] for k in range(len(b))) for j in range(len(b[0]))] for i in range(len(a))]
def rank(a):
 a=[[Q(x) for x in row] for row in a];r=0
 for c in range(len(a[0])):
  k=next((k for k in range(r,len(a)) if a[k][c]),None)
  if k is None:continue
  a[r],a[k]=a[k],a[r];t=a[r][c];a[r]=[x/t for x in a[r]]
  for k in range(len(a)):
   if k!=r:
    t=a[k][c];a[k]=[x-t*y for x,y in zip(a[k],a[r])]
  r+=1
  if r==len(a):break
 return r
N=[[0,1],[0,0]];J=[[0,1],[1,0]];one=[[1,0],[0,1]];zero=[[0,0],[0,0]]
models=[(N,neg(N),neg(J)),(N,add(one,N),one),(N,add(neg(one),N),neg(one))]
relations=[]
for x,y,u in models:
 checks=[add(mul(u,u),neg(one)),add(mul(x,y),neg(mul(y,x))),add(add(mul(u,x),neg(mul(y,u))),one),add(add(mul(u,y),neg(mul(x,u))),neg(one)),mul(x,x),add(mul(y,y),neg(mul(add(x,y),u)))]
 assert all(a==zero for a in checks);relations.append(True)
words=[]
for is_u in [False,True]:
 for i,j in [(0,0),(1,0),(0,1),(1,1)]:
  cols=[]
  for k,(x,y,u) in enumerate(models):
   a=mul(mul(x if i else one,y if j else one),u if is_u else one)
   cols.extend([v for row in a for v in row] if k==0 else [a[0][0],a[0][1]])
  words.append(cols)
image_rank=rank([list(c) for c in zip(*words)]);assert image_rank==8
E=[[[int(i==r and j==c) for j in range(2)] for i in range(2)] for r in range(2) for c in range(2)]
rightN=[[v for row in mul(a,N) for v in row] for a in E]
rightNrank=rank([list(c) for c in zip(*rightN)]);assert rightNrank==2
f=[[0,0,0],[2,0,0],[0,1,0]];e=[[0,1,0],[0,0,2],[0,0,0]]
d=[1,2,1]
for op in [e,f,[[Q(x,2) for x in r] for r in mul(e,e)],[[Q(x,2) for x in r] for r in mul(f,f)],[[2,0,0],[0,0,0],[0,0,-2]]]:
 assert all((Q(op[i][j])*d[j]/d[i]).denominator==1 for i in range(3) for j in range(3))
assert rank(N)==1 and mul(N,N)==zero
# No mathematical acceptance is inferred from these finite calculations.
result={'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'degree2_models_satisfy_relations':relations,'eight_word_image_rank':image_rank,'middle_dot_nonzero':N!=zero,'induced_A_tensor_B_C_dimension':4-rightNrank,'restricted_simple_is_regular_Jordan_B':True,'three_weight_lattice_index':2,'operator_and_divided_square_stability':True,'limit':'Degree0–2 finite model and three-weight lattice calculation only; whole tower, labeling and Schur/Whittaker prerequisites remain held.'}
(out/'finite-calculation.json').write_text(json.dumps(result,indent=2)+'\n')
# Capture exact native manifest and native contract projections without writing them.
contracts=root/'research/frontier-44-special-representation-examples-28-batch-18.proof-contracts.json';native=json.loads(contracts.read_text())
manifest=root/'research/frontier-44-special-representation-examples-28-batch-18.pages.json'
projection={'version':1,'run':report['run'],'status':'RESEARCH_PROPOSAL_NOT_NATIVE_ACCEPTANCE','native_contract_file':{'path':str(contracts.relative_to(root)),'raw_sha256':hashlib.sha256(contracts.read_bytes()).hexdigest()},'manifest_file':{'path':str(manifest.relative_to(root)),'raw_sha256':hashlib.sha256(manifest.read_bytes()).hexdigest()},'subjects':{}}
for item in report['items']:
 id=item['id'];p=out/f'{id}.proposed.md';s=p.read_text();steps=[]
 for m in re.finditer(r'(?m)^(\d+\.\d+) (.*?)(?=\n\n\d+\.\d+ |\Z)',s.split('## Proof\n',1)[1],re.S):
  text=m[2].strip();tags=re.search(r'\[([^\[\]]+)\](?: ∎)?$',text);assert tags
  steps.append({'step':m[1],'claim':text[:tags.start()].strip(),'inputs':[v.strip() for v in tags[1].split(',')]})
 projection['subjects'][id]={'native_contract':native['contracts'].get(id),'proposal_sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'statement_sha256':item['statement_sha256'],'proposed_derivations':steps,'used_supplier_guards_and_literal_contracts':item['used_supplier_raw_guards_and_literal_contracts'],'status':item['status']}
(out/'exact-source-proof-contract-proposals.json').write_text(json.dumps(projection,indent=2)+'\n')
cmd=['node','tools/proof-layout.mjs']+[str((out/f'{i["id"]}.proposed.md').relative_to(root)) for i in report['items']]
r=subprocess.run(cmd,text=True,capture_output=True);assert r.returncode==0,(r.stdout,r.stderr)
(out/'focused-checks.json').write_text(json.dumps({'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'command':cmd,'exit_code':r.returncode,'stdout':r.stdout,'stderr':r.stderr,'proposal_guards':[i['proposal'] for i in report['items']],'mathematical_acceptance':False},indent=2)+'\n')
# Recheck all frozen subjects and actual used suppliers at handoff.
drift=[]
for item in report['items']:
 for g in [item['before']]+item['used_supplier_raw_guards_and_literal_contracts']:
  p=root/g['path'];actual=hashlib.sha256(p.read_bytes()).hexdigest() if p.exists() else None
  if actual!=g['raw_sha256']:drift.append({'path':g['path'],'expected':g['raw_sha256'],'actual':actual})
(out/'final-guard-recheck.json').write_text(json.dumps({'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'drift':drift,'stable':not drift,'whole_claims_held':True},indent=2)+'\n')
print(json.dumps(result));print(r.stdout);print('guard drift:',len(drift))
