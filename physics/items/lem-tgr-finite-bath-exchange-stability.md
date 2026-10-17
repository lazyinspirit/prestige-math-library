---
id: lem-tgr-finite-bath-exchange-stability
kind: lemma
title: "Finite-bath entropy curvature and specified exchange stability"
status: published
origin: pipeline
domain: mathematics
library: mathematics
deps:
  - def-tgr-regulated-kepler-shell-law
  - thm-tgr-regulated-kepler-negative-capacity
  - thm-picard-lindelof-local-existence-and-uniqueness
  - lem-ode-extension-from-a-compact-interior-region
dependency_roles:
  def-tgr-regulated-kepler-shell-law: mathematical-premise
  thm-tgr-regulated-kepler-negative-capacity: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  lem-ode-extension-from-a-compact-interior-region: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Joseph Katz, Thermodynamics and Self-Gravitating Systems, Foundations of Physics 33 (2003), author manuscript"
      url: "https://arxiv.org/pdf/astro-ph/0212295"
    - title: "David Tong, Statistical Physics, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems, complete lecture text"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
proof_strategy: direct
verification:
  precheck: pass
dependency_level: 3
---

## Statement

Let $I_1,I_2\subseteq\mathbb R$ be open energy intervals (energies in joules), and let $S_i:I_i\to\mathbb R$ be $C^2$ entropies measured in joules per kelvin. Fix a total energy $E_{\mathrm{tot}}$ in joules and define the open exchange domain $I:=\{x\in I_1:E_{\mathrm{tot}}-x\in I_2\}$. For $x\in I$, set $E_1=x$, $E_2=E_{\mathrm{tot}}-x$, and $T_i(E_i):=1/S_i'(E_i)$ wherever $S_i'(E_i)>0$. At a point $x\in I$ with $T_1(E_1)=T_2(E_2)=T>0$ and $T_i'(E_i)\ne0$, define the finite nonzero heat capacities $C_i(E_i):=1/T_i'(E_i)=dE_i/dT_i$. For
$$S_{\mathrm{tot}}(x)=S_1(x)+S_2(E_{\mathrm{tot}}-x),$$
one has
$$S_{\mathrm{tot}}''(x)=-\frac1{T^2}\left(\frac1{C_1}+\frac1{C_2}\right).$$
In particular, if $C_1<0<C_2$, the critical point is a strict local entropy maximum in this energy-exchange direction whenever $0<C_2<|C_1|$.

This condition is realized by taking $S_1=S_G$ from [[thm-tgr-regulated-kepler-negative-capacity]] at an interior branch energy $E_*$ (for example, $r_0/R<\delta<1/16$), where $T_*=T_G(E_*)>0$ and $C_1=C_G(E_*)<0$. The explicit phase-volume formula makes $S_1$ $C^2$ on an open energy interval around $E_*$. Choose a finite bath entropy
$$S_b(E_b)=C_b\log\left(\frac{E_b-E_0}{C_bT_{\mathrm{ref}}}\right)+S_0,\qquad E_b>E_0,$$
with $C_b>0$ in $\mathrm{J\,K^{-1}}$, $E_0$ in $\mathrm J$, $T_{\mathrm{ref}}>0$ in $\mathrm K$, and $S_0$ in $\mathrm{J\,K^{-1}}$. It has $T_b=(E_b-E_0)/C_b$ and heat capacity $C_b$; choose $E_b=E_0+C_bT_*$ to match the subsystem temperature $T_*$ and choose $C_b<|C_1|$.

Separately adopt, on the open domain $I$ and with time $t$ in seconds, the effective scalar exchange equation
$$\dot x=L S_{\mathrm{tot}}'(x),\qquad L>0\ \mathrm{J\,K\,s^{-1}}.$$
For each strict local maximum $x_*\in I$ with $S_{\mathrm{tot}}''(x_*)<0$, there are $a,r>0$ such that $I_0=[x_*-r,x_*+r]\subset I$, $S_{\mathrm{tot}}''\le-a$ on $I_0$, and every solution with $x(0)\in I_0$ exists for all $t\ge0$, remains in $I_0$, and satisfies $|x(t)-x_*|\le e^{-La t}|x(0)-x_*|$. Thus the equilibrium solution $x(t)\equiv x_*$ attracts those initial states exponentially. Along every solution, $dS_{\mathrm{tot}}/dt=L(S_{\mathrm{tot}}')^2\ge0$. This is stability of the specified one-dimensional exchange law, not of a general relativistic star or a causal transport equation.

## Facts & Assumptions

**Given:** The entropy functions, their positive temperatures and finite nonzero heat capacities, a common-temperature critical point, and the separately adopted scalar exchange equation.

[F1] At an interior regulated Kepler branch energy $E_*$, the Gibbs-volume response formulas supply $T_*=T_G(E_*)>0$ and finite $C_1=C_G(E_*)<0$. ([[thm-tgr-regulated-kepler-negative-capacity]])

[F2] A continuous vector field locally Lipschitz in its state variable has a unique local solution through every point of its open ODE domain. ([[thm-picard-lindelof-local-existence-and-uniqueness]])

[F3] A Picard-Lindelof solution whose graph approaches a compact subset of its open ODE domain at a finite endpoint extends past that endpoint. ([[lem-ode-extension-from-a-compact-interior-region]])

[F4] For positive $\mu,A,r_0,h_*$ and $R>16r_0$, the branch $A/R<e<A/(16r_0)$ has $\delta=er_0/A$ and $\Omega(-e)=K e^{-3/2}J(\delta)$, where $K=(4\pi)(4\pi/3)(2\mu)^{3/2}A^3/h_*^3>0$, $J(\delta)=\int_\delta^1s^{1/2}(1-s)^{3/2}\,ds$, and $S_G=k_B\log\Omega$. ([[def-tgr-regulated-kepler-shell-law]])

## Proof

1.1 Since $S_i'=1/T_i$, differentiation with respect to energy gives $S_i''=-T_i^{-2}(dT_i/dE_i)=-1/(T_i^2C_i)$. [given, algebra]

2.1 The first derivative of $S_{\mathrm{tot}}$ is $S_1'(x)-S_2'(E_{\mathrm{tot}}-x)$, so it vanishes exactly at common temperature. The second derivative is the sum $S_1''(x)+S_2''(E_{\mathrm{tot}}-x)$, which by step 1.1 is the stated expression. If $C_1<0<C_2$, then $S_{\mathrm{tot}}''<0$ exactly when $1/C_2>1/|C_1|$, equivalently $C_2<|C_1|$; continuity and the second-derivative test give a strict local maximum. [given, step 1.1, algebra]

3.1 On $0<\delta<1$, the function $f(\delta)=\delta^{1/2}(1-\delta)^{3/2}$ has continuous derivative. The identity $J(\delta+h)-J(\delta)=-\int_\delta^{\delta+h}f(s)\,ds$ and continuity of $f$ give $J'=-f$, so $J''=-f'$ is continuous; also $J>0$. Thus [F4] makes $\Omega$ positive and $C^2$, and $S_G=k_B\log\Omega$ is $C^2$ on an open interval about the interior energy $E_*$. For the displayed bath entropy, $S_b'=C_b/(E_b-E_0)$, hence $T_b=(E_b-E_0)/C_b$ and $dE_b/dT_b=C_b$. Choose $0<C_b<|C_G(E_*)|$, $E_b^*=E_0+C_bT_*$, and $E_{\mathrm{tot}}=E_*+E_b^*$. Both entropies are $C^2$ near these energies, their positive temperatures agree, and step 2.1 gives strictly negative total entropy curvature. [F1, F4, step 2.1, algebra]

4.1 At the stipulated maximum $x_*$ with $S_{\mathrm{tot}}''(x_*)<0$, continuity gives a compact interval $I_0=[x_*-r,x_*+r]\subset I$ and $a>0$ with $S_{\mathrm{tot}}''\le-a$ there. Integrating from $x_*$, where $S_{\mathrm{tot}}'=0$, gives $(x-x_*)S_{\mathrm{tot}}'(x)\le-a(x-x_*)^2$. The vector field $L S_{\mathrm{tot}}'$ on $\mathbb R\times I$ is $C^1$ and hence locally Lipschitz, so [F2] gives a unique local solution. At the two endpoints of $I_0$ the field points strictly inward, preventing a first exit, including for endpoint initial data. The chain rule gives $dS_{\mathrm{tot}}/dt=L(S_{\mathrm{tot}}')^2\ge0$ along every solution and, for those in $I_0$,
$$\frac{d}{dt}|x-x_*|^2\le-2La|x-x_*|^2.$$
Multiplying by $e^{2Lat}$ and differentiating yields $|x(t)-x_*|\le e^{-La t}|x(0)-x_*|$. If its maximal forward endpoint $b$ were finite, its graph for $0\le t<b$ would lie in the compact set $[0,b]\times I_0\subset\mathbb R\times I$, so [F3] would extend the solution, a contradiction. The local basin therefore exists for all forward times and converges exponentially. [F2, F3, given, step 3.1, algebra] ∎
