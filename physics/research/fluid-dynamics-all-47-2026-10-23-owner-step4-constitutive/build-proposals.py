from pathlib import Path
import hashlib,json,difflib,re,shutil,yaml,datetime
out=Path('research/fluid-dynamics-all-47-2026-10-23-owner-step4-constitutive')
subjects=['ex-fdmath-negative-bulk-residual','lem-fd-newtonian-admissibility','lem-fd-local-balance-equivalence','lem-fd-cauchy-contact','lem-fd-bingham-monotone-graph','def-fd-nonnewtonian-laws','def-fd-incompressible-newtonian-model','lem-fd-generalized-newtonian-dissipation','post-fd-boundary-data','lem-fd-conformation-storage','def-fd-adopted-nonnewtonian-models','pthm-fd-nonnewtonian-conditional-admissibility','def-fd-quantity-and-frame-conventions','post-fd-continuum-balances','lem-fd-gibbs-entropy-residual']
changes={}
def replace(id,old,new):
 p=Path('items')/(id+'.md');s=changes.get(id,p.read_text());assert s.count(old)==1,(id,old[:80]);changes[id]=s.replace(old,new)
replace('def-fd-incompressible-newtonian-model','Let $I\\subset\\mathbb R$ be an open time interval and $\\Omega\\subset I\\times\\mathbb R^3$ open.', 'Let $I\\subset\\mathbb R$ be an open time interval. Use a Cartesian inertial chart of the adopted continuum balances on Newtonian spacetime $I\\times E$: $E$ is an oriented Euclidean affine three-space, and the spatial event coordinate is $x_t(X)=b(X)+tw$, where $b:E\\to\\mathbb R^3$ is an orientation-preserving affine isometry and $w\\in\\mathbb R^3$ is constant. Time is absolute and measured in seconds, and spatial coordinates are measured in metres. All derivatives below use this fixed chart. Let $\\Omega\\subset I\\times\\mathbb R^3$ be open.')
replace('def-fd-incompressible-newtonian-model','A smooth, unforced, constant-density incompressible Newtonian branch with a','A smooth, unforced, constant-density incompressible Newtonian branch in a\n  Cartesian inertial chart, with a')
replace('def-fd-incompressible-newtonian-model','## Definition references\n','## Definition references\n\n[[post-fd-continuum-balances|Adopted continuum balances and inherited Cartesian inertial-chart convention]]\n')
replace('def-fd-adopted-nonnewtonian-models','For the generalized Newtonian and Bingham branches, $\\tau$ is a symmetric deviatoric extra stress,', 'For the generalized Newtonian and Bingham branches, require $\\theta=\\operatorname{div}u=0$ throughout $\\Omega$, so $D\\in\\mathrm{Sym}_0(3)$. In these branches, $\\tau$ is a symmetric deviatoric extra stress,')
replace('def-fd-adopted-nonnewtonian-models','Chosen generalized Newtonian/Bingham closures;', 'Chosen incompressible generalized Newtonian/Bingham closures;')
id='lem-fd-conformation-storage';s=Path('items',id+'.md').read_text()
old=next(x for x in s.splitlines() if x.startswith('[F10]'))
new='[F10] [[lem-fd-observer-calculus]] establishes rigid-observer velocity, gradient, and rate-of-strain identities for its motion-induced velocity. Its smooth-motion hypotheses are stronger than the present $C^1$ field and trajectory hypotheses; step 1.2 establishes the needed identities directly here.'
replace(id,old,new)
old=next(x for x in s.splitlines() if x.startswith('1.2 '))
new=r'''1.2 Define the transformed trajectory by $x^*(t)=Q(t)x(t)+c(t)$. The product and chain rules give $x^{*\prime}=Q'x+Qu+c'$. At a corresponding spatial event $y^*=Q(t)y+c(t)$, define $u^*(t,y^*)=Q'(t)y+Q(t)u(t,y)+c'(t)$. Since $y=Q(t)^{\mathsf T}(y^*-c(t))$, differentiation with respect to $y^*$ gives $\nabla_{y^*}u^*=Q'Q^{\mathsf T}+Q(\nabla_yu)Q^{\mathsf T}$; along the trajectory this is the $L^*$ given in the Statement. Differentiating $QQ^{\mathsf T}=I_3$ shows $Q'Q^{\mathsf T}+QQ'^{\mathsf T}=0$, so taking symmetric parts gives $D^*=QDQ^{\mathsf T}$. The $C^1$ matrix path $C^*=QCQ^{\mathsf T}$ has ordinary derivative $C^{*\prime}=Q'C Q^{\mathsf T}+QC'Q^{\mathsf T}+QCQ'^{\mathsf T}$. Substitute the given formula for $L^*$ into $L^*C^*+C^*(L^*)^{\mathsf T}$ and cancel the two observer-derivative terms to obtain $C^{*\prime}-L^*C^*-C^*(L^*)^{\mathsf T}=Q(C'-LC-CL^{\mathsf T})Q^{\mathsf T}$. Since $C^*-I_3=Q(C-I_3)Q^{\mathsf T}$, the conformation equation is covariant. These calculations require only the stated $C^1$ velocity and trajectory and the $C^2$ observer change. [given, F3, F4, algebra]'''
replace(id,old,new)
# Capture actual source guards once, before any optional native adoption.
allitems={}
for p in Path('items').glob('*.md'):
 try:
  text=p.read_text();d=yaml.safe_load(text.split('---',2)[1]);allitems[d['id']]={'path':str(p),'data':d,'raw':text}
 except Exception: continue
consumers={}
for supplier in ['def-fd-incompressible-newtonian-model','def-fd-adopted-nonnewtonian-models','lem-fd-conformation-storage']:
 direct=[i for i,v in allitems.items() if supplier in (v['data'].get('deps') or [])];seen=set();front=[supplier]
 while front:
  x=front.pop()
  for i,v in allitems.items():
   if i not in seen and x in (v['data'].get('deps') or []):seen.add(i);front.append(i)
 textual=[i for i,v in allitems.items() if i!=supplier and supplier in v['raw']]
 consumers[supplier]={'direct':sorted(direct),'all':sorted(seen),'additional_textual':sorted(set(textual)-seen)}
 subjects+=sorted(seen|set(textual))
for id in dict.fromkeys(subjects):
 p=Path('items',id+'.md');shutil.copyfile(p,out/'before'/p.name)
for id,text in changes.items():
 p=Path('items',id+'.md');(out/'proposals'/p.name).write_text(text)
 (out/'proposals'/(id+'.patch')).write_text(''.join(difflib.unified_diff(p.read_text().splitlines(True),text.splitlines(True),fromfile=str(p),tofile=str(p))))
guards={str(Path('items',id+'.md')):hashlib.sha256(Path('items',id+'.md').read_bytes()).hexdigest() for id in dict.fromkeys(subjects)}
(out/'current-raw-guards.json').write_text(json.dumps({'version':1,'run':'fluid-dynamics-all-47-2026-10-23','reviewer':'/root/fluid_step4_constitutive','authority':'read-only proposals only; no native certification or source-write authority','inputs':guards,'proposals':{id:{'path':str(out/'proposals'/(id+'.md')),'sha256':hashlib.sha256(text.encode()).hexdigest()} for id,text in changes.items()},'consumers':consumers},indent=2)+'\n')
print(json.dumps({'proposals':list(changes),'guarded_items':len(guards),'consumers':consumers},indent=2))
