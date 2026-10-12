from pathlib import Path
import json
pchanges=Path('research/physics-cm-qm-gr-79-2026-10-11-stability-consumer-successor/changed-items.json');changed=json.loads(pchanges.read_text())
def fix(id,pairs):
 p=Path('items',id+'.md');s=p.read_text()
 for a,b in pairs:
  assert a in s,(id,a);s=s.replace(a,b)
 p.write_text(s)
 if id not in changed:changed.append(id)
fix('pthm-cm09-linearization-error-bound',[
 ('where $y:\\mathbb R\\to\\mathbb R^{2n}$ is the solution of $y\'=Ay$, $y(0)=z_{0}$.', 'where $y(t)=(q_0+\\xi(t),\\eta(t))$ and $\\widetilde y=(\\xi,\\eta):\\mathbb R\\to\\mathbb R^{2n}$ solves $\\widetilde y\'=A\\widetilde y$, $\\widetilde y(0)=(\\delta q_0,v_0)$. Thus $y$ is the linear approximation translated back to the original chart.'),
 ('Writing $y=(\\xi,\\eta)$ for the linear solution of clause 2','Writing $\\widetilde y=(\\xi,\\eta)$ for the displacement linear solution of clause 2'),
 ('apply [F5] to $F$, the constants $r_{0},C,L$, the matrix $A$ and the datum $z_{0}$; under $\\delta e^{LT}<r_{0}$ the maximal solution $z$ of $z\'=F(z)$ is defined on $[0,T]$ with the displayed error bound. Since $F(\\zeta)=G(q_{0}+\\delta q,\\delta v)$, the curve $z$ is exactly the phase curve of the mechanical system translated to the equilibrium, i.e. $z(t)=(q(t),q\'(t))$ for the maximal solution $q$ of the mechanical system with datum $(q_{0}+\\delta q_{0},v_{0})$;', 'apply [F5] to $F$, the constants $r_{0},C,L$, the matrix $A$ and the displaced datum $\\zeta_0=(\\delta q_0,v_0)$ of norm $\\delta$. The maximal solution $\\zeta$ of $\\zeta\'=F(\\zeta)$ is defined on $[0,T]$ and obeys the error bound against $\\widetilde y$. Translating back gives $z(t)=(q_0+\\zeta_q(t),\\zeta_v(t))$, the physical phase solution through $z_0$; $y(t)=(q_0+\\xi(t),\\eta(t))$ has exactly the same translation, so $\\|z(t)-y(t)\\|_2=\\|\\zeta(t)-\\widetilde y(t)\\|_2$;'),
 ('the linear solution $y=(\\xi,\\eta)$ of $y\'=Ay$, $y(0)=z_{0}$','the displacement linear solution $\\widetilde y=(\\xi,\\eta)$ of $\\widetilde y\'=A\\widetilde y$, $\\widetilde y(0)=(\\delta q_0,v_0)$')])
fix('pthm-cm09-averaging-for-weak-damping',[
 ('\\varepsilon\\gamma A/(2m)','\\gamma A/(2m)'),
 ('h\\mapsto-(\\gamma/m)e^{i\\omega_{0}t}', 'h\\mapsto-(i\\gamma/m)e^{i\\omega_{0}t}'),
 ('D_{\\zeta}F(t,\\zeta)h=-(\\gamma/m)e^{i\\omega_{0}t}', 'D_{\\zeta}F(t,\\zeta)h=-(i\\gamma/m)e^{i\\omega_{0}t}')])
fix('ex-cm09-weak-damping-averaging-check',[
 ('\\bar\\zeta(t)=e^{-\\varepsilon t/2}=e^{-t/10^{4}}','\\bar\\zeta(t)=e^{-\\varepsilon t/2}=e^{-t/(2\\cdot10^{4})}'),
 ('$\\lvert\\zeta_{0}\\rvert(1-e^{-\\varepsilon\\gamma A/(2m)})\\approx2.49997\\times10^{-5}\\le R-\\rho=0.25$', '$\\lvert\\zeta_{0}\\rvert(1-e^{-\\gamma A/(2m)})=1-e^{-1/4}\\approx0.22120< R-\\rho=0.25$'),
 ('$2.5\\times10^{-5}=\\varepsilon\\gamma A/(2m)\\le\\ln(4/3)', '$1/4=\\gamma A/(2m)\\le\\ln(4/3)'),
 ('the trapping quantity is $\\lvert\\zeta_{0}\\rvert(1-e^{-\\varepsilon\\gamma A/(2m)})=1-e^{-1/(4\\cdot10^{4})}\\le1/(4\\cdot10^{4})<1/4=R-\\rho$ using $1-e^{-u}\\le u$ for $u\\ge0$; and the sufficient logarithmic condition $\\varepsilon\\gamma A/(2m)=1/(4\\cdot10^{4})<1/4\\le\\ln(4/3)$', 'at the full horizon $A/\\varepsilon=5000$ the trapping quantity is $\\lvert\\zeta_{0}\\rvert(1-e^{-\\gamma A/(2m)})=1-e^{-1/4}<1/4=R-\\rho$ using $1-e^{-u}<u$ for $u>0$; and the sufficient logarithmic condition $\\gamma A/(2m)=1/4\\le\\ln(4/3)$')])
pchanges.write_text(json.dumps(changed,indent=2)+'\n');print(len(changed))
