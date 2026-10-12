from guarded_io import *
p='library/non-relativistic-classical-mechanics/cm15-scattering-and-impulse-model-boundaries-examples.md';s=Path(p).read_text().replace('$e=2$ raises the kinetic energy','the explicitly hypothetical extension to $e=2$, derived locally rather than\nfrom the restricted impact theorems, raises the kinetic energy');write(p,s)
p='library/non-relativistic-classical-mechanics-mathematics/cm-math-balances.md';s=Path(p).read_text().replace('for forces $m_ix_i\'\'=-\\nabla_{x_i}U+d_i$, with the autonomous conserved case.','for forces $m_ix_i\'\'=-\\nabla_{x_i}U+d_i$, with the autonomous conserved case.\nThe potential has a $C^1$ extension to an open time neighborhood; relative\nderivatives retain included endpoints of closed and half-open time intervals.');write(p,s)
for batch in [2,31]:
 p=f'research/{RUN}-batch-{batch}.coverage.json';d=json.load(open(p))
 if batch==2:d['status']='authored; local cycle-1 repair recorded; native readiness refresh and independent review pending'
 def visit(x):
  if isinstance(x,dict):
   if x.get('item')=='cex-cm15-restitution-above-one-increases-energy':x['support']='Current local witness explicitly hypothesizes the extension e=2; outcome and 3 J gain are derived locally, without applying adopted restricted impact theorems outside [0,1].'
   if x.get('item')=='thm-cm-work-energy-balance':x['support']='Current local work-energy supplier uses a C1 extension to an open time neighborhood while preserving included-endpoint interval claims.'
   for v in x.values():visit(v)
  elif isinstance(x,list):
   for v in x:visit(v)
 visit(d);write(p,json.dumps(d,indent=2,ensure_ascii=False)+'\n')
