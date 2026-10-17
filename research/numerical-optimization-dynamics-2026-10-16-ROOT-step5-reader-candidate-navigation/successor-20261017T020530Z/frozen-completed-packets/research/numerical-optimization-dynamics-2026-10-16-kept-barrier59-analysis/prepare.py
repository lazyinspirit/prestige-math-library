from pathlib import Path
import json, shutil

base = Path(__file__).parent
root = 'def-barrier-central-path-and-newton-residuals'
alg = 'alg-primal-dual-newton-residual-method-for-lp-qps-and-symmetric-cones'
replacements = {
root: [
('For orthant, Lorentz, or positive-semidefinite cone factors, the analogous conic residuals are $r_p=Ax-b$, $r_d=A^Ty-G^*z-c$, and $r_c=s\\circ z-\\sigma\\mu e$.', 'For a finite product of orthant, Lorentz, or positive-semidefinite cone factors, use the sum $F$ of the selected factor barriers in the three cited lemmas. The analogous conic residuals are $r_p=Ax-b$, $r_d=A^Ty-G^*z-c$, and $r_c=s\\circ z-\\sigma\\mu e_F$.'),
('In each product cone, $\\mu=\\langle s,z\\rangle/\\nu$, where $\\nu$ is the sum of the factor barrier parameters. The linearized slack is $\\Delta s=-G\\Delta x$.', 'Write $e_F$ for the product vector whose orthant and matrix factors are $e_j$ and whose Lorentz factors are $2e_j$; it is a barrier target vector, whereas $e$ remains the Jordan identity. Then $\\langle e,e_F\\rangle=\\nu$, the sum of the selected factor barrier parameters, and set $\\mu=\\langle s,z\\rangle/\\nu$. Indeed, $-\\nabla F_j(s_j)$ is the coordinatewise inverse in the orthant, $2(q,-u)/(q^2-\\|u\\|_2^2)$ at a Lorentz point $(q,u)$, and $X^{-1}$ at a positive-definite matrix $X$. Their Jordan products with $s_j$ are respectively $e_j$, $2e_j$, and $e_j$. Thus a barrier multiplier $z_t=-\\nabla F(s_t)/t$ satisfies $s_t\\circ z_t=e_F/t$ and $\\mu=1/t$. At an iteration, the centering target $\\sigma\\mu$ is held fixed when linearizing: the complementarity equation is $\\Delta s\\circ z+s\\circ\\Delta z=-r_c$, with $\\Delta s=-G\\Delta x$.'),
],
alg: [
('r_c=s\\circ z-\\sigma\\mu e.$$', 'r_c=s\\circ z-\\sigma\\mu e_F.$$'),
('In either mode, $\\epsilon_p$ bounds', 'Here $e_F$ is the barrier target vector of [[def-barrier-central-path-and-newton-residuals]]: it equals the Jordan identity on orthant and matrix factors and twice that identity on Lorentz factors. Hold $\\sigma\\mu$ fixed during each Newton solve. In either mode, $\\epsilon_p$ bounds'),
],
}
edits=[]
for id, pairs in replacements.items():
 p=Path('items')/(id+'.md'); before=p.read_text(); after=before
 for old,new in pairs:
  if after.count(old)!=1: raise RuntimeError('literal guard failed: '+id)
  after=after.replace(old,new,1)
 for folder,text in [('before',before),('proposed',after)]:
  out=base/folder/p; out.parent.mkdir(parents=True,exist_ok=True); out.write_text(text)
 edits.append({'path':str(p),'before_file':str(base/'before'/p),'proposed_file':str(base/'proposed'/p),'guard':'Require byte identity with before_file; each old literal occurs exactly once. Root owns all digest bindings and application.','replacements':[{'before':x,'after':y} for x,y in pairs]})
(base/'guarded-edits.json').write_text(json.dumps({'research_only':True,'applied':False,'edits':edits},indent=2)+'\n')

# Retain exact observations of the unchanged consumers and metadata for owner use.
closure=json.loads((base/'closure.json').read_text())
ids=sorted(set(sum(closure,[])) | {root})
for id in ids:
 p=Path('items')/(id+'.md'); out=base/'observed'/p; out.parent.mkdir(parents=True,exist_ok=True); shutil.copyfile(p,out)
for p in [Path('research/numerical-optimization-dynamics-2026-10-16-batch-59.proof-contracts.json'),Path('research/numerical-optimization-dynamics-2026-10-16-batch-59-step5-context.json')]:
 out=base/'observed'/p;out.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(p,out)

# Exact future quote changes only; these are not canonical contracts or review evidence.
p=Path('research/numerical-optimization-dynamics-2026-10-16-batch-59.proof-contracts.json'); data=json.loads(p.read_text()); mirrors=[]
def walk(x,ptr=''):
 if isinstance(x,dict):
  for k,v in x.items():
   q=ptr+'/'+k
   if isinstance(v,str):
    changed=v
    for pairs in replacements.values():
     for old,new in pairs: changed=changed.replace(old,new)
    if changed!=v: mirrors.append({'pointer':q,'before':v,'after':changed})
   else: walk(v,q)
 elif isinstance(x,list):
  for i,v in enumerate(x):walk(v,ptr+'/'+str(i))
walk(data)
(base/'future-mirrors.json').write_text(json.dumps({'research_only':True,'applied':False,'path':str(p),'quote_edits':mirrors,'owner_followup':'Bind actual current sources, refresh native-required statement/context/contract/manifest mirrors through authorized Step 5; preserve frozen Step 3/4 evidence. No native judgment is supplied here.'},indent=2)+'\n')
