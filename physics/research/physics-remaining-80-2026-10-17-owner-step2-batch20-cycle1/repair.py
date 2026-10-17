from pathlib import Path
import json,re,shutil,hashlib
B=Path(__file__).resolve().parents[2];O=Path(__file__).parent;R='physics-remaining-80-2026-10-17'
ids=['cor-emg-regular-counterpoised-sphere','ex-emgmath-ml-b05','pthm-emg-counterpoised-smooth-sphere','ex-emg-ml-b05','ex-emg-ml-b06']
for p in [*[B/'items'/f'{i}.md' for i in ids],B/'items/ex-emgmath-ml-b06.md',*[B/'research'/f'{R}-batch-{n}.proof-contracts.json'for n in(17,20)]]:
 q=O/'before'/p.relative_to(B);q.parent.mkdir(parents=True,exist_ok=True);assert not q.exists();shutil.copyfile(p,q)
def read(i):return (B/'items'/f'{i}.md').read_text()
def write(i,s):(B/'items'/f'{i}.md').write_text(s)
def replace(s,old,new):assert old in s,old[:100];return s.replace(old,new,1)
def step(s,num,new):
 pat=r'^'+re.escape(num)+r' .*?(?=^\d+\.\d+ |^## |\Z)';m=re.search(pat,s,re.S|re.M);assert m;return s[:m.start()]+new+'\n\n'+s[m.end():]
def deps(s,added):
 for dep in added:
  s=replace(s,'deps:\n','deps:\n  - '+dep+'\n');s=replace(s,'dependency_roles:\n','dependency_roles:\n  '+dep+': mathematical-premise\n')
 return s
# Supplier first: retain every native support/definition correction outside two exact proof paragraphs.
i=ids[0];s=read(i);s=deps(s,['thm-monotonicity-of-the-integral']);s=replace(s,'[A1] Countable choice',r'[F14] For Riemann-integrable real functions on $[u,v]$ with $u<v$, pointwise nonnegativity implies a nonnegative integral, pointwise order is preserved by integration, and a bound $m\le h\le M$ implies $m(v-u)\le\int_u^v h\le M(v-u)$ ([[thm-monotonicity-of-the-integral]]).'+ '\n\n[A1] Countable choice')
s=step(s,'2.3',r'''2.3 If $a=\delta b$, then $H=1+z$ with $z=\delta h_0$ and $0<h_0\le1$, since $\Psi\ge b$. For $f(u)=(1+u)^{-2}$, $f(0)=1$, $f'(0)=-2$, and $0<f''(u)=6(1+u)^{-4}\le6$ for $u\ge0$ by [F12]. Fix $z>0$ and define $G_z(u):=(z-u)f'(u)+f(u)$ on $[0,z]$. The product rule [F12] gives $G_z'(u)=(z-u)f''(u)$ on its interior. This derivative is continuous on $[0,z]$, hence Riemann integrable by [F13]; $G_z$ is continuous there. Newton--Leibniz [F13] therefore gives
$$\int_0^z(z-u)f''(u)\,du=G_z(z)-G_z(0)=f(z)-1+2z.$$
The integrand lies between $0$ and $6(z-u)$. These continuous comparison functions are integrable by [F13], so [F14] and Newton--Leibniz applied to $6zu-3u^2$ give
$$0\le f(z)-(1-2z)\le\int_0^z6(z-u)\,du=3z^2\le3\delta^2.$$
At $z=0$ the same remainder and bound are zero directly; no theorem requiring a nondegenerate interval is applied there. Since $g_{00}=-H^{-2}$, this proves the stated time-component bound. [given, F1, F12, F13, F14, step 1.1, algebra]''')
s=step(s,'6.1',r'''6.1 The spatial metric is exactly $g_{ij}=H^2\delta_{ij}=(1+2\delta h_0+\delta^2h_0^2)\delta_{ij}$, so the component error is $\delta^2h_0^2|\delta_{ij}|\le\delta^2$. Also $\rho/\rho_{\mathrm{lin}}=H^{-3}=(1+z)^{-3}$. By [F12], the function $P(u):=1-(1+u)^{-3}$ is continuously differentiable for $u\ge0$ with $P'(u)=3(1+u)^{-4}$. For $z>0$, [F13] makes this derivative integrable on $[0,z]$ and gives
$$1-(1+z)^{-3}=P(z)-P(0)=\int_0^z3(1+u)^{-4}\,du.$$
Its integrand lies between $0$ and $3$, so [F14] yields $0\le1-\rho/\rho_{\mathrm{lin}}\le3z\le3\delta$. At $z=0$ both sides vanish by substitution. Thus neither bound needs an uncited mean-value theorem. [given, F1, F12, F13, F14, step 2.3, algebra] ∎''');write(i,s)
# Mathematical direct consumer: keep native explicit support definition and physical-independent reasoning.
i=ids[1];s=read(i);s=deps(s,['lem-emg-positive-square-root-smoothness','thm-chain-rule','thm-algebra-of-derivatives','thm-local-coordinate-formula-for-the-exterior-derivative']);s=replace(s,r'[F1] [[thm-emg-smooth-counterpoised-dust]] supplies the exact coupled fields, $\rho=-c^2\Delta H/(4\pi G_NH^3)$, and the orthonormal electric components $E_i=-s c^2H_i/(Q_sH^2)$.',r'[F1] [[thm-emg-smooth-counterpoised-dust]] supplies the exact coupled metric and fields, including $A=s(c/Q_s)H^{-1}dx^0$, $U=cH\partial_0$, and $\rho=-c^2\Delta H/(4\pi G_NH^3)$, with $Q_s>0$ and the stated geometric conventions. The observer components used below are computed locally from this potential.')
s=replace(s,'[A1] $\\mathrm{AC}_\\omega$ is exactly',r'[F4] The positive-root function is smooth with derivative $s\prime(q)=1/(2s(q))$ for $q>0$ ([[lem-emg-positive-square-root-smoothness]]). The chain, product and quotient rules hold ([[thm-chain-rule]], [[thm-algebra-of-derivatives]]).'+ '\n\n'+r'[F5] In a smooth coordinate chart, $d(A_a\,dx^a)=\sum_a dA_a\wedge dx^a$ ([[thm-local-coordinate-formula-for-the-exterior-derivative]]), so $(dA)_{i0}=\partial_iA_0-\partial_0A_i$.'+'\n\n[A1] $\\mathrm{AC}_\\omega$ is exactly')
s=step(s,'1.1',r'''1.1 Put $\Psi=(r^2+b^2)^{1/2}$. Since $r^2+b^2\ge b^2>0$, [F4] and the chain rule give $\partial_i\Psi=x^i/\Psi$. Differentiating $H=1+b/\Psi$ with the quotient rule in [F4] gives $H_i=-b x^i/\Psi^3$, hence $H_i(0)=0$. At $r=0$, $\Psi=b$ and $H(0)=2$. The Laplacian in [F3] gives $\Delta H(0)=-3b^3/b^5=-3/b^2$. [given, F3, F4, algebra]''')
s=step(s,'2.1',r'''2.1 Substituting these values into [F1] gives $\rho(0)=3c^2/(4\pi G_Nb^2\cdot2^3)=3c^2/(32\pi G_Nb^2)$, and [F2] gives $S_g(0)=-2(-3/b^2)/2^3=3/(4b^2)$. For the electric components, the metric in [F1] gives the future unit vector $n=H\partial_0$ and positively oriented orthonormal spatial vectors $e_i=H^{-1}\partial_i$ by direct contraction. Since $A_0=s(c/Q_s)H^{-1}$ and $A_i=0$, [F4]–[F5] give $F_{i0}=-s(c/Q_s)H_i/H^2$. Therefore $E_i:=cF(e_i,n)=cF_{i0}=-s c^2H_i/(Q_sH^2)$, which vanishes at the center by step 1.1. This establishes the observer value without importing a formula present only inside another item's proof. [step 1.1, F1, F2, F4, F5, algebra]''');write(i,s)
# Physical consumer: carry the precise mathematical premises and derive all extra coordinate claims.
i=ids[2];s=read(i);s=deps(s,['def-countable-choice','def-emg-explicit-power-regimes','lem-emg-conformastatic-curvature','thm-local-coordinate-formula-for-the-exterior-derivative','thm-algebra-of-derivatives']);s=replace(s,r'Assume only the Axiom of Countable Choice $\mathrm{AC}_\omega$ specified in [A1].',r'Assume the indexed Axiom of Countable Choice $\mathrm{AC}_\omega$ of [[def-countable-choice]], recorded as the mathematical premise [A2].');s=replace(s,r'Set $Q_s:=\sqrt{4\pi\epsilon_0G_N}>0$',r'Use the positive-root convention of [[def-emg-explicit-power-regimes]] to set $Q_s:=\sqrt{4\pi\epsilon_0G_N}>0$')
a=s.index('[F1]');z=s.index('\n\n[F2]',a);s=s[:a]+r'''[F1] [[thm-emg-smooth-counterpoised-dust]]: under $\mathrm{AC}_\omega$, smooth positive $H$ with $\Delta H\le0$, the positive constants and either sign $s$, the exact displayed fields are smooth, $U$ is future timelike, and $\rho\ge0$. Its Statement gives the sourced and homogeneous Maxwell equations, dust stress exchange including the zero-density set, the $\Lambda=0$ Einstein equation, all four energy conditions, and $a^0=0$, $a^i=-c^2H_i/H^3$. The current draft is used only at these stated mathematical interfaces; continuity, undivided force balance and the observer electric components are checked locally below.'''+s[z:]
s=replace(s,'\n\n## Proof',r'''

[F3] [[lem-emg-conformastatic-curvature]] gives the unique torsion-free metric-compatible connection of the coordinate metric. Its only nonzero types are $\Gamma^0{}_{0i}=\Gamma^0{}_{i0}=-H_i/H$, $\Gamma^i{}_{00}=-H_i/H^5$, and $\Gamma^i{}_{jk}=(\delta_{ij}H_k+\delta_{ik}H_j-\delta_{jk}H_i)/H$. In particular every $\Gamma^a{}_{a0}$ is zero.

[F4] [[thm-local-coordinate-formula-for-the-exterior-derivative]] gives $d(A_a\,dx^a)=\sum_a dA_a\wedge dx^a$, hence $F_{i0}=\partial_iA_0-\partial_0A_i$ for $F=dA$.

[F5] [[thm-algebra-of-derivatives]] gives the product and quotient differentiation rules. [[def-emg-explicit-power-regimes]] fixes the unique positive root and reciprocal integer powers; here $Q_s>0$ and $H^{-1}$ is the reciprocal of the strictly positive $H$.

[A2] The mathematical background is exactly [[def-countable-choice]]: for every family $(X_n)_{n\in\mathbb N}$ of nonempty sets there is a function $f$ on $\mathbb N$ with $f(n)\in X_n$ for each $n$. This indexed $\mathrm{AC}_\omega$ premise is inherited by [F1] and [F2]; no full Axiom of Choice is assumed.

## Proof'''.replace('\\n','\n'))
s=step(s,'1.1',r'''1.1 Under the Statement's hypotheses and [A2], the fields are exactly those in the Statement of [F1], with positive-root convention [F5]. Thus its stated conclusions give smooth Lorentzian normalization, nonnegative density, sourced and homogeneous Maxwell equations, dust stress exchange, the Einstein equation with $\Lambda=0$, and the four energy conditions. These equations have the directions and tensor conventions independently adopted in [A1]. The additional continuity, undivided force and observer formulas required by that physical branch are verified next, rather than inferred from claims absent from the supplier's Statement. [given, A1, A2, F1, F5]''')
s=replace(s,'2.1 The exact fields obey',r'''1.2 All coefficients are independent of $x^0$, and $U^0=cH$, $U^i=0$. The component Leibniz rule for the connection of [F3] gives $\nabla_a(\rho U^a)=\partial_0(\rho cH)+\sum_a\Gamma^a{}_{a0}\rho cH=0$, including where $\rho=0$. By [F4]–[F5], the potential in the Statement has $F_{i0}=-s(c/Q_s)H_i/H^2$ and $F_{ij}=0$. Direct metric contraction makes $n=H\partial_0$ unit future timelike and $e_i=H^{-1}\partial_i$ a positively oriented orthonormal spatial frame. Hence $E_i=cF(e_i,n)=cF_{i0}=-s c^2H_i/(Q_sH^2)$. [given, A2, F3, F4, F5, algebra]

1.3 From [F3] and $U^i=0$, $a^0=0$ and $a^i=(cH)^2\Gamma^i{}_{00}=-c^2H_i/H^3$. Raising the spatial index in step 1.2 with $g^{ij}=H^{-2}\delta_{ij}$ gives $F^i{}_0=-s(c/Q_s)H_i/H^4$, so $\sigma F^i{}_cU^c=sQ_s\rho F^i{}_0cH=-\rho c^2H_i/H^3=\rho a^i$. Both temporal components are zero. This proves the undivided force equation everywhere, including $\rho=0$, without dividing by density. [given, A2, F3, step 1.2, algebra]

2.1 The exact fields obey'''.replace('\\n','\n'))
s=replace(s,'and the proved mass continuity.','and the mass continuity proved in step 1.2.');s=replace(s,'[A1, F1, step 1.1, algebra]','[A1, A2, F1, step 1.1, step 1.2, step 1.3, algebra]');s=replace(s,'[given, F1, F2, step 1.1, algebra]','[given, A2, F1, F2, step 1.1, algebra]');write(i,s)
# Explicit inherited hypothesis in the two physical examples, preserving formulas and physical scope.
for i in ids[3:]:
 s=read(i);s=deps(s,['def-countable-choice']);s=replace(s,'## Example\n\n','## Example\n\n'+r'Assume $\mathrm{AC}_\omega$ as defined in [[def-countable-choice]]. ');s=replace(s,'**Given:** ',r'**Given:** The indexed $\mathrm{AC}_\omega$ premise [A1], ');s=replace(s,r'[F1] [[pthm-emg-counterpoised-smooth-sphere]] ',r'[F1] Under $\mathrm{AC}_\omega$, [[pthm-emg-counterpoised-smooth-sphere]] ')
 s=replace(s,'\n\n## Verification',r'''

[A1] [[def-countable-choice]] is the indexed premise that every family $(X_n)_{n\in\mathbb N}$ of nonempty sets has a function $f$ on $\mathbb N$ with $f(n)\in X_n$ for each $n$. It is assumed here because the exact A-page theorem [F1] requires it; the finite substitutions below add no stronger choice principle.

## Verification'''.replace('\\n','\n'));s=s.replace('[given, F1, algebra]','[given, A1, F1, algebra]').replace('[given, F1, step 1.1, algebra]','[given, A1, F1, step 1.1, algebra]');write(i,s)
print('sources repaired in supplier-before-consumer order:',ids)
