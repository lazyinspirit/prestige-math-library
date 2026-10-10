import json,copy,hashlib,datetime,decimal
from pathlib import Path
r=Path(__file__).parent;run='physics-em-sr-40-2026-10-08';path=r/f'{run}-batch-11.pages.json';raw=path.read_text();pages=json.loads(raw);items={x['id']:(p['id'],x) for p in pages for x in p['items']};subjects=[];sha=lambda x:hashlib.sha256(x.encode()).hexdigest()
def proposal(id,fn):
 home,b=items[id];x=copy.deepcopy(b);fn(x)
 for field in ['sources','provenance','physical_scope','empirical_status']:
  if field in b:assert x[field]==b[field]
 subjects.append({'id':id,'home':home,'before':b,'after':x,'before_item_sha256':sha(json.dumps(b,sort_keys=True,separators=(',',':'))),'after_item_sha256':sha(json.dumps(x,sort_keys=True,separators=(',',':'))),'before_statement_sha256':sha(b['statement']),'after_statement_sha256':sha(x['statement'])})
def dep(x,id):
 if id not in x['deps']:x['deps'].append(id);x['dependency_roles'][id]='mathematical-premise'
def definition(x):
 x['statement']=x['statement'].replace('and let $y:I\\to A$ have inertial coordinate path', 'and let $y:I\\to A$ have inertial coordinate path')
 x['statement']=x['statement'].replace('define the *coordinate velocity* $w(t)\\in S$ of the path by', 'at each parameter value $t$ where all three coordinate derivatives exist, define the *coordinate velocity* $w(t)\\in S$ of the path by')
 x['statement']=x['statement'].replace('The comparison functionals along the path are', 'For a path differentiable at every parameter value these are functions on $I$; otherwise they are defined on its differentiability set. The comparison functionals along the path are')
 x['strategy']+=' The derivative symbols in(b) are used only at points where the coordinate derivatives exist; no velocity is assigned to an arbitrary nondifferentiable path. Physical correspondence consumers retain their stated differentiable future-timelike worldline hypotheses.'
def taylor(x):
 x['statement']=x['statement'].replace(r'0\le z\le\frac{\eta}{\tfrac12+K(z_0)z_0}',r'0\le z\le\min\!\left\{z_0,\frac{\eta}{\tfrac12+K(z_0)z_0}\right\}')
 x['strategy']+=' The final implication explicitly retains z<=z0; its bound is not asserted beyond the original Taylor interval. At z0=0 it applies only to z=0, while the one-sided convergence statement may use any fixed positive z0<1.'
def observer(x):
 x['statement']=x['statement'].replace(r'$w:=c\,h(U)/\gamma\in n^\perp$',r'$w:=h(U)/\gamma=c\,h(U/c)/\gamma\in n^\perp$')
 x['strategy']='First use the linearity of h in thm-sr-proper-time-and-observer-decomposition(c): h(U)=c h(U/c), so w=h(U)/gamma=c h(u)/gamma for u=U/c. The future-unit u has gamma=−eta(n,u), and the actual supplier(d) then gives u=gamma(n+w/c), |w|²=c²(1−gamma^−2) and gamma=f(z). No extra factor c multiplies h(U)/gamma. '+x['strategy']
def correspondence(x):
 x['statement']=x['statement'].replace('the relative deviation from the Newtonian kinetic energy is at most', 'for $w\\ne0$ the relative deviation from the Newtonian kinetic energy is at most')
 x['statement']=x['statement'].replace(r'$|w-q_n(P)/m|=(\gamma_w-1)|w|/\gamma_w\le(\gamma_w-1)|w|\le',r'$|w-q_n(P)/m|=(\gamma_w-1)|w|\le')
 x['strategy']=x['strategy'].replace('clause (b) divides the bound by $N_K=\\tfrac12m|w|^2$', 'clause(b) retains the absolute bound also at w=0, and divides by the positive $N_K=\\tfrac12m|w|^2$ only when w is nonzero')
 x['strategy']=x['strategy'].replace('clause (c) divides by $|N_p|=m|w|$', 'clause(c) divides by the positive $|N_p|=m|w|$ only when w is nonzero')
 x['strategy']=x['strategy'].replace(r'$w-q_n/m=w(1-1/\gamma_w)=w(\gamma_w-1)/\gamma_w$',r'$w-q_n/m=(1-\gamma_w)w$, hence $|w-q_n/m|=(\gamma_w-1)|w|$')
def remark(x):
 x['strategy']=x['strategy'].replace('$U=\\gamma(n+w/c)$ gives $\\eta(U,U)=-1$', '$U=c\\gamma(n+w/c)$ gives $\\eta(U,U)=-c^2$')
 x['strategy']+=' Fix n and a unit e in its rest space once, and take w=c sqrt(1−gamma^−2)e. Then −eta(U/c,n)=gamma exactly. For any B>=0, thm-of-archimedean supplies an integer gamma>max(2,B/(mc²)+3/2); the displayed difference is greater than mc²(gamma−3/2)>B. The relative ratio exceeds gamma−1 and is unbounded by the same Archimedean property. No sequence of independently chosen unit vectors or additional choice premise is needed.'
 dep(x,'thm-of-archimedean')
def example(x):
 x['statement']=x['statement'].replace(r'$|w-q_n(P)/m|/|w|=1-1/\gamma_w=1-2\sqrt6/5\approx0.0202041029$',r'$|w-q_n(P)/m|/|w|=\gamma_w-1=5\sqrt6/12-1\approx0.0206207262$')
 x['strategy']=x['strategy'].replace(r'$(25/24)^{1/2}=5/\sqrt6\cdot\ldots$',r'$(25/24)^{1/2}=5/\sqrt{24}=5\sqrt6/12$')
 x['strategy']=x['strategy'].replace('rounded to ten significant digits', 'rounded to the displayed decimal places')
 x['strategy']=x['strategy'].replace(r'$w-q_n(P)/m=w(1-1/\gamma_w)$',r'$w-q_n(P)/m=(1-\gamma_w)w$')
def counterexample(x):
 x['statement']=x['statement'].replace('For every integer $N\\ge2$ choose a unit vector $e\\in n^\\perp$ for a fixed future unit $n$', 'Fix a future unit $n$ and a unit vector $e\\in n^\\perp$ once; for every integer $N\\ge2$ use that same vector')
 x['statement']=x['statement'].replace(r'U_N:=N\Bigl(n+\frac{w_N}{c}\Bigr)',r'U_N:=cN\Bigl(n+\frac{w_N}{c}\Bigr)')
 x['statement']=x['statement'].replace(r'$\eta(U_N,U_N)=N^2(-1+|w_N|^2/c^2)=-1$',r'$\eta(U_N,U_N)=c^2N^2(-1+|w_N|^2/c^2)=-c^2$')
 x['statement']=x['statement'].replace('so $U_N$ is a future timelike unit (in the normalization $\\eta(U_N,U_N)=-1$) vector', 'so $U_N$ has the required four-velocity normalization; $u_N=U_N/c$ is future unit timelike')
 x['strategy']=x['strategy'].replace('$U_N:=N(n+w_N/c)$','$U_N:=cN(n+w_N/c)$')
 x['strategy']=x['strategy'].replace(r'$\eta(U_N,U_N)=N^2(\eta(n,n)+2\eta(n,w_N)/c+\eta(w_N,w_N)/c^2)=N^2(-1+a_N^2/c^2)=-1$',r'$\eta(U_N,U_N)=c^2N^2(\eta(n,n)+2\eta(n,w_N)/c+\eta(w_N,w_N)/c^2)=c^2N^2(-1+a_N^2/c^2)=-c^2$')
 x['strategy']=x['strategy'].replace(r'$w_N=c\,h(U_N)/\gamma$',r'$w_N=h(U_N)/\gamma=c\,h(U_N/c)/\gamma$')
 x['strategy']+=' More explicitly choose a canonical integer N>max(2,B/(mc²)+3/2) using thm-of-archimedean. The displayed absolute difference is greater than mc²(N−3/2)>B, and the relative ratio exceeds N−1. This closes both unboundedness assertions by the exact published real-field supplier rather than an unspecified limit argument.'
 dep(x,'thm-of-archimedean')
for id,fn in [('def-sr-newtonian-comparison-quantities',definition),('lem-sr-uniform-low-speed-taylor-remainder',taylor),('lem-sr-uniform-low-speed-expansion-of-observer-quantities',observer),('pthm-sr-newtonian-p-e-correspondence',correspondence),('rem-sr-newtonian-bridge-limits-and-failures',remark),('ex-sr-low-speed-expansion-at-beta-one-fifth',example),('cex-sr-uniform-low-speed-remainder-fails-near-light-speed',counterexample)]:proposal(id,fn)
# Actual current dependency/justification closure, including live carriers only as provisional context.
all={}
for p in r.glob(run+'-batch-*.pages.json'):
 for page in json.loads(p.read_text()):
  for x in page['items']:all[x['id']]={'item':x,'page':page['id'],'manifest':p.name}
closures={}
for row in subjects:
 reached={row['id']};layers=[]
 while True:
  new={id for id,z in all.items() if id not in reached and any(d in reached for d in z['item'].get('deps',[])+z['item'].get('justified_by',[]))}
  if not new:break
  layers.append(sorted(new));reached|=new
 closures[row['id']]=layers
decimal.getcontext().prec=65;D=decimal.Decimal;g=D(25).sqrt()/D(24).sqrt();k=D(3)/D(8)*(D(25)/D(24))**(D(5)/D(2));checks={'gamma':str(g),'K':str(k),'remainder':str(g-1-D(1)/50),'remainder_bound':str(k/625),'momentum_abs_error_over_mc':str((g-1)/5),'momentum_error_bound_over_mc':str((D(1)/2+k/25)/125),'relative_inversion_error':str(g-1),'relative_inversion_error_bound':str((D(1)/2+k/25)/25)}
assert g-1-D(1)/50<=k/625;assert g-1<=(D(1)/2+k/25)/25
report={'run':run,'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'status':'proposal-only against live batch11; no shared writes; final receipt/draft comparison required','input':path.name,'input_sha256':sha(raw),'subjects':subjects,'current_provisional_dependency_order_consumer_layers':closures,'exact_numeric_checks_decimal65':checks,'confirmed_witnesses':[{'finding':'Wrong c factor in relative velocity','data':'c=2,n=e0,U=(8/sqrt15,2/sqrt15,0,0); eta(U,U)=−4; gamma=4/sqrt15; claimed c h(U)/gamma=e1, so claimed z=1/4 and f(z)=2/sqrt3 contradict actual gamma.'},{'finding':'Momentum-to-velocity difference','data':'q=m gamma w gives w−q/m=(1−gamma)w, norm(γ−1)|w|, not divided by γ. At beta1/5 relativeerror0.020620726159... versus original0.020204102886...'},{'finding':'Unit normalization in cex/remark','data':'Original U=N(n+w/c) has eta(U,U)=−1; gamma=−eta(U/c,n)=N/c, notN. U=cN(n+w/c) gives eta(U,U)=−c² and gammaN.'},{'finding':'Taylor domain omitted from implication','data':'If read unscoped: z0=0,eta1/2,z3/4 satisfies0≤z≤1 but f(z)−1=1>1/2. Explicit min(z0,threshold) preserves original interval claim.'}], 'source_reading':'Read exact pinned batch3 decomposition statement/strategy, cor-taylor-remainder-bound and thm-of-archimedean. Existing external source objects/reading evidence retained unchanged; no new full-text retrieval or independent production audit claimed. M08 restricted mass-shell design inspected; gravity/Q4 is outside this flat pair.','integration_obligations':['Wait root confirmation of all writer drain and final batch11 receipt','Compare every before-object with stable final worker artifact; do not overwrite self-repairs','Integrate only necessary remaining corrections and actual supplier/consumer effects','Exact published-home declaration for thm-of-archimedean if not already in requires closure','Recompute levels and native evidence/ready hashes only after reviewed stable integration']}
(r/f'{run}-newtonian-core-proposal.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n');print('seven full metadata proposals, exact numeric checks and consumer closure written; no shared edits')
