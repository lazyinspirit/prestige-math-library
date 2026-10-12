import pathlib,json,hashlib,yaml
from fractions import Fraction
out=pathlib.Path(__file__).parent; run='frontier-44-special-representation-examples-28';p=json.loads((out/'proposed.pages.json').read_text());e=json.loads((out/'proposal.json').read_text()); added=set(e['added_ids'])
sc={}
for f in pathlib.Path('research').glob(run+'-batch-*.pages.json'):
 for pg in json.loads(f.read_text()):
  for x in pg['items']:sc[x['id']]={'kind':'run-scaffold','path':str(f),'page':pg['id'],'deps':x['deps']}
for pg in p:
 for x in pg['items']:sc[x['id']]={'kind':'proposed','path':str(out/'proposed.pages.json'),'page':pg['id'],'deps':x['deps']}
resolved=[]; missing=[]; seen=set()
def walk(id):
 if id in seen:return
 seen.add(id)
 if id in sc:r=sc[id]
 else:
  f=pathlib.Path('items')/(id+'.md')
  if not f.exists():missing.append(id);return
  meta=yaml.safe_load(f.read_text().split('---',2)[1]);r={'kind':'published-file' if meta.get('status')=='published' else 'draft-file','path':str(f),'deps':meta.get('deps',[])}
 resolved.append({'id':id,**r,'sha256':hashlib.sha256(pathlib.Path(r['path']).read_bytes()).hexdigest()})
 for dep in r['deps']:walk(dep)
for pg in p:
 for x in pg['items']:
  if x['id'] in added:
   for d in x['deps']:walk(d)
assert not missing,missing
assert not added.intersection(seen),'generated B used as supplier'
for g in e['guards']:assert hashlib.sha256(pathlib.Path(g['path']).read_bytes()).hexdigest()==g['sha256'],'native carrier changed while preparing'
# Exact linear equations for H*N_source=N_target*H.
def rank(a):
 a=[[Fraction(v) for v in row] for row in a];i=0
 for j in range(len(a[0]) if a else 0):
  k=next((k for k in range(i,len(a)) if a[k][j]),None)
  if k is None:continue
  a[i],a[k]=a[k],a[i];v=a[i][j];a[i]=[x/v for x in a[i]]
  for k in range(len(a)):
   if k!=i:
    v=a[k][j];a[k]=[x-v*y for x,y in zip(a[k],a[i])]
  i+=1
 return i
def homdim(A,B):
 n=len(A);m=len(B);eq=[]
 for i in range(m):
  for j in range(n):
   row=[0]*(m*n)
   for k in range(n):row[i*n+k]+=A[k][j]
   for k in range(m):row[k*n+j]-=B[i][k]
   eq.append(row)
 return m*n-rank(eq)
N=[[0,0],[1,0]];Z=[[0]];dims=[[homdim(A,B) for B in [Z,N]] for A in [Z,N]];assert dims==[[1,1],[1,2]]
i=[[0],[1]];q=[[1,0]]
def mul(A,B):return [[sum(a*b for a,b in zip(row,col)) for col in zip(*B)] for row in A]
assert mul(q,i)==[[0]] and mul(i,q)==N and mul(N,N)==[[0,0],[0,0]]
# The projective standard matrix is [[1,1],[0,1]]. Acting by rank-one standard matrix gives target columns (1,1),(2,2).
F=[[1,1],[0,1]];T=[[1,1],[1,1]];P=[[0,0],[1,2]];assert mul(T,F)==mul(F,P)
res={'run':run,'checks':'local exact finite matrix and supplier resolution checks; no independent audit','hom_dimensions':dims,'mixed_compositions':'pi=0; ip=N; N²=0','wall_projective_matrix':P,'polynomial_rank_e':[1,0],'polynomial_rank_s':[1,1],'polynomial_rank_evidence':'local cancellation proof in proposed strategy, not numerical proof','direct_dependency_count':sum(len(x['deps']) for pg in p for x in pg['items'] if x['id'] in added),'resolved_closure_count':len(resolved),'missing':missing,'dependencies':resolved,'native_guards_current':True,'generated_leaf_dependencies':False}
(out/'checks.json').write_text(json.dumps(res,indent=2)+'\n'); print(json.dumps({k:v for k,v in res.items() if k!='dependencies'},indent=2))
