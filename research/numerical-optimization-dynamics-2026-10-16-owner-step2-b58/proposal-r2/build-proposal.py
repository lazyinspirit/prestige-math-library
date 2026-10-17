from pathlib import Path
import hashlib,json,difflib
B=Path(__file__).resolve().parent;oldB=B.parent/'proposal-r1';rows=[]
for id in ['lem-inexact-newton-error-recurrence-under-lipschitz-jacobian','thm-inexact-newton-local-forcing-rates']:
 p='items/'+id+'.md';old=Path(p).read_text();s=(oldB/'proposed'/p).read_text().replace('Let $n\\ge1$, let','Let $n\\ge0$ be an integer, let',1)
 s=s.replace('1.1 ', '1.2 ',1).replace('step 1.1','step 1.2').replace('steps 1.1–2.1','steps 1.2–2.1')
 if id.startswith('lem-'):
  s=s.replace('$\\|A\\|_{\\rm op}:=\\sup_{\\|v\\|_2=1}\\|Av\\|_2$. Let', '$\\|A\\|_{\\rm op}:=\\sup_{\\|v\\|_2=1}\\|Av\\|_2$ for $n\\ge1$;\nfor $n=0$ set the norm of the unique linear map to $0$. Let')
  branch=r'''1.1 If $n=0$, the space $\mathbb R^0$ is a singleton. Its unique linear map is invertible, and $x=x_*=p=r=F(x)=0$ in this space. Take $r_0=R$, $C_F=1$, and $C=0$. Every claimed estimate is $0\le0$, so the assertion holds. For the remainder assume $n\ge1$, so the imported positive-dimensional Newton lemmas and operator-norm comparisons apply. [given, algebra]

'''
 else:
  s=s.replace('$\\bar\\eta\\in[0,1)$. Consider any sequence', '$\\bar\\eta\\in[0,1)$. For $n=0$ use the zero operator-norm convention\nof [[lem-inexact-newton-error-recurrence-under-lipschitz-jacobian]]. Consider any sequence')
  branch=r'''1.1 If $n=0$, every iterate, residual and correction is the unique zero vector and $x_k=x_*$ for all $k$. Choose any $\rho>0$ and $q=(1+\bar\eta)/2<1$; all error bounds are $0\le0$. The exact-root alternative applies from the start, including the quadratic zero-error bound. For the remainder assume $n\ge1$. [given, algebra]

'''
 s=s.replace('1.2 Let $C_F',branch+'1.2 Let $C_F',1) if id.startswith('thm-') else s.replace('1.2 Put $K_*',branch+'1.2 Put $K_*',1)
 for pre,data in [('before',old),('proposed',s)]:
  f=B/pre/p;f.parent.mkdir(parents=True,exist_ok=True);f.write_text(data)
 d=B/'diffs'/Path(p).name;d.parent.mkdir(exist_ok=True);d.write_text(''.join(difflib.unified_diff(old.splitlines(True),s.splitlines(True),fromfile=p,tofile=p)))
 rows.append({'path':p,'before_sha256':hashlib.sha256(old.encode()).hexdigest(),'proposed_sha256':hashlib.sha256(s.encode()).hexdigest()})
(B/'proposal.json').write_text(json.dumps({'status':'READONLY_REFINEMENT_NOT_APPLIED','cycle':2,'supersedes_only':'proposal-r1 versions of these two paths; other r1 paths preserved, except merged Wolfe proposal forthcoming in b70','files':rows,'reason':'Preserve original zero-dimensional case explicitly; retain required positive Lipschitz radius and prove positive-dimensional branch using actual suppliers.','canonical_writes':False,'gates_run':False},indent=2)+'\n')
print('Two zero-space preserving refinements ready')
