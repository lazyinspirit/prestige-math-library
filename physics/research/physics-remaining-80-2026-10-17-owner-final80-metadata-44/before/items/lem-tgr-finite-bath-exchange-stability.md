---
id: lem-tgr-finite-bath-exchange-stability
kind: lemma
title: "Finite-bath entropy curvature and specified exchange stability"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
deps:
  - thm-tgr-regulated-kepler-negative-capacity
  - thm-picard-lindelof-local-existence-and-uniqueness
  - lem-ode-extension-from-a-compact-interior-region
dependency_roles:
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
---

## Statement

Let $S_1\in C^2(I_1)$ and $S_2\in C^2(I_2)$ be entropies on open energy intervals, with $S_i'(E_i)=1/T_i(E_i)>0$ and finite nonzero heat capacities $C_i=dE_i/dT_i$. At a common-temperature critical point of
$$S_{\mathrm{tot}}(x)=S_1(x)+S_2(E_{\mathrm{tot}}-x),$$
one has
$$S_{\mathrm{tot}}''(x)=-\frac1{T^2}\left(\frac1{C_1}+\frac1{C_2}\right).$$
In particular, if $C_1<0<C_2$, the critical point is a strict local entropy maximum in this energy-exchange direction whenever $0<C_2<|C_1|$.

This condition is realized by taking the first subsystem from the negative-capacity branch of [[thm-tgr-regulated-kepler-negative-capacity]] and a finite bath entropy
$$S_b(E_b)=C_b\log\left(\frac{E_b-E_0}{C_bT_{\mathrm{ref}}}\right)+S_0,\qquad E_b>E_0,$$
with $C_b>0$ in $\mathrm{J\,K^{-1}}$, $E_0$ in $\mathrm J$, and $T_{\mathrm{ref}}>0$ in $\mathrm K$. It has $T_b=(E_b-E_0)/C_b$ and heat capacity $C_b$; choose $E_b=E_0+C_bT_*$ to match the subsystem temperature $T_*$ and choose $C_b<|C_1|$.

Separately adopt the effective scalar exchange equation
$$\dot x=L S_{\mathrm{tot}}'(x),\qquad L>0\ \mathrm{J\,K\,s^{-1}}.$$
Near any strict local maximum $x_*$ with $S_{\mathrm{tot}}''(x_*)<0$, this dynamics has a forward invariant local basin and an exponentially attracting solution, and along every solution $dS_{\mathrm{tot}}/dt=L(S_{\mathrm{tot}}')^2\ge0$. This is stability of the specified one-dimensional exchange law, not of a general relativistic star or a causal transport equation.

## Facts & Assumptions

**Given:** The entropy functions, their positive temperatures and finite nonzero heat capacities, a common-temperature critical point, and the separately adopted scalar exchange equation.

[F1] The regulated Kepler branch supplies an energy $E_*$ with positive Gibbs-volume temperature $T_*$ and finite negative capacity $C_G(E_*)<0$. ([[thm-tgr-regulated-kepler-negative-capacity]])

[F2] A continuous vector field locally Lipschitz in its state variable has a unique local solution through every point of its open ODE domain. ([[thm-picard-lindelof-local-existence-and-uniqueness]])

[F3] A Picard-Lindelof solution whose graph approaches a compact subset of its open ODE domain at a finite endpoint extends past that endpoint. ([[lem-ode-extension-from-a-compact-interior-region]])

## Proof

1.1 Since $S_i'=1/T_i$, differentiation with respect to energy gives $S_i''=-T_i^{-2}(dT_i/dE_i)=-1/(T_i^2C_i)$. [given, algebra]

2.1 The first derivative of $S_{\mathrm{tot}}$ is $S_1'(x)-S_2'(E_{\mathrm{tot}}-x)$, so it vanishes exactly at common temperature. The second derivative is the sum $S_1''(x)+S_2''(E_{\mathrm{tot}}-x)$, which by step 1.1 is the stated expression. If $C_1<0<C_2$, then $S_{\mathrm{tot}}''<0$ exactly when $1/C_2>1/|C_1|$, equivalently $C_2<|C_1|$; continuity and the second-derivative test give a strict local maximum. [given, step 1.1, algebra]

3.1 For the displayed bath entropy, $S_b'=C_b/(E_b-E_0)$, hence $T_b=(S_b')^{-1}=(E_b-E_0)/C_b$ and $dE_b/dT_b=C_b$. Setting $E_b=E_0+C_bT_*$ makes $T_b=T_*$; with $C_b<|C_G(E_*)|$, step 2.1 gives strictly negative total entropy curvature. Thus the finite bath realizes the claimed stabilizing parameter range in the specified exchange direction. [F1, step 2.1, algebra]

4.1 At a strict local maximum $x_*$, continuity of $S_{\mathrm{tot}}''$ gives a compact interval $I_0$ about $x_*$ in its open domain and $a>0$ with $S_{\mathrm{tot}}''\le-a$ there. Integrating from $x_*$, where $S_{\mathrm{tot}}'=0$, gives $(x-x_*)S_{\mathrm{tot}}'(x)\le-a(x-x_*)^2$. The vector field $L S_{\mathrm{tot}}'$ is $C^1$ and hence locally Lipschitz, so [F2] gives a unique local solution; the chain rule gives $dS_{\mathrm{tot}}/dt=L(S_{\mathrm{tot}}')^2\ge0$ and
$$\frac{d}{dt}|x-x_*|^2\le-2La|x-x_*|^2.$$
Multiplying by $e^{2Lat}$ and differentiating yields $|x(t)-x_*|\le e^{-La t}|x(0)-x_*|$. Thus the solution stays in a compact interior interval. If its maximal forward endpoint were finite, points on a sequence approaching that endpoint would lie in one compact subset of the open ODE domain, so [F3] would extend the solution, a contradiction. The local basin therefore exists for all forward times and converges exponentially. [F2, F3, given, step 3.1, algebra] ∎
