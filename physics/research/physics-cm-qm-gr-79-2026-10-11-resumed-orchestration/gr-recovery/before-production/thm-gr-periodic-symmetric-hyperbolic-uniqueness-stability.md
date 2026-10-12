---
id: thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability
kind: theorem
title: "Uniqueness of classical solutions and continuous dependence in H^{s-1} for periodic symmetric hyperbolic systems"
status: draft
origin: session
domain: mathematics
dependency_level: 10
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-periodic-torus-and-sobolev-spaces, def-gr-periodic-symmetric-hyperbolic-system, lem-gr-positive-definite-symmetric-matrix-bounds, lem-gr-smooth-composition-and-commutator-estimates, thm-gr-periodic-symmetric-hyperbolic-existence, lem-gr-galerkin-time-derivative-bound, thm-gronwall-integral-inequality, def-ck-and-multi-index-notation-in-several-variables, def-countable-choice]
dependency_roles:
  def-gr-periodic-torus-and-sobolev-spaces: mathematical-premise
  def-gr-periodic-symmetric-hyperbolic-system: mathematical-premise
  lem-gr-positive-definite-symmetric-matrix-bounds: mathematical-premise
  lem-gr-smooth-composition-and-commutator-estimates: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-existence: mathematical-premise
  lem-gr-galerkin-time-derivative-bound: mathematical-premise
  thm-gronwall-integral-inequality: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 3.1 (Symmetric Hyperbolic Systems): the definition of a quasilinear symmetric hyperbolic system, the finite-dimensional mollifier approximation (3.1) solved by ODE theory, the energy and Moser product/composition estimates, the higher-order energy inequality, uniqueness, the Rellich/Ascoli compactness step and the passage to a classical solution, with Remarks 1-6 on smooth persistence, the continuation criterion, Cauchy stability and the non-identity time matrix"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]). Let $s\ge5$, let $A^\mu,B$ be a periodic symmetric
hyperbolic coefficient family on the open set $O\subseteq\mathbb R^m$, let
$K\subseteq O$ be compact and $R\ge0$.

**(a) Uniqueness.** Let $J\ni0$ be an open interval and let
$u,v:J\to H^s(\mathbb T^3_{2\pi};\mathbb R^m)$ be classical solutions of
$(\star)$ in the sense of clause (d) of
[[def-gr-periodic-symmetric-hyperbolic-system]], both taking values in $K$ and
satisfying $\sup_{t\in J}\|u(t)\|_{H^s}\le R$, $\sup_{t\in J}\|v(t)\|_{H^s}\le R$.
If $u(0)=v(0)$, then $u=v$ on $J$.

**(b) Continuous dependence.** Let $K'\subseteq O$ be compact with
$K\subseteq\operatorname{int}K'$ and let $T>0$ be a time for which the existence
theorem [[thm-gr-periodic-symmetric-hyperbolic-existence]] produces solutions
from every datum with values in $K$ and norm at most $R$, with values in $K'$
and the bounds $C(1+R)$ of that theorem. Then for all such data $u_0,v_0$ with
solutions $u,v$
$$\|u(t)-v(t)\|_{H^{s-1}}\le C'\,e^{C'|t|}\,\|u_0-v_0\|_{H^{s-1}}\qquad(|t|<T),$$
with $C'=C'(A^\mu,B,K',R,s)$.

## Facts & Assumptions
**Given:** Countable Choice, $s\ge5$, the coefficient family on $O$, the compact $K$, the bound $R$, and in (b) the compact $K'$ and time $T$ of the existence theorem.

[L1] The difference of two solutions of $(\star)$ satisfies, with $w:=u-v$, the linear identity $A^0(t,\cdot,u)\partial_tw+A^i(t,\cdot,u)\partial_iw+[A^0(t,\cdot,u)-A^0(t,\cdot,v)]\partial_tv+[A^i(t,\cdot,u)-A^i(t,\cdot,v)]\partial_iv+B(t,\cdot,u)-B(t,\cdot,v)=0$ in $L^2$ at each $t$, obtained by subtracting the two equations ([[def-gr-periodic-symmetric-hyperbolic-system]], [[def-gr-periodic-torus-and-sobolev-spaces]]).

[L2] Uniform positivity and boundedness of the coefficients on $K'$ and $R$-bounds, and of the inverse of $A^0$: $aI\le A^0\le bI$ and $\|(A^0)^{-1}\|\le a^{-1}$ on the coefficient set ([[lem-gr-positive-definite-symmetric-matrix-bounds]] clauses (c),(d)).

[L3] Lipschitz and product estimates: with all data in the ball $\|u\|_{H^s}\le R_1$ and values in a compact convex set, $\|F(t,\cdot,u)-F(t,\cdot,v)\|_{H^{j}}\le C_R\|u-v\|_{H^{j}}$ for $j\le s-1$ and $\|F(t,\cdot,u)w\|_{H^j}\le C_R\|w\|_{H^j}$ for the coefficient maps $F=A^\mu,B$ and $\partial_tA^\mu$, and $\|[D^\alpha,A(t,\cdot,u)]w\|_2\le C_R(1+\|w\|_{H^{|\alpha|-1}})$ ([[lem-gr-smooth-composition-and-commutator-estimates]] clauses (b),(c),(d)).

[L4] Time-derivative controls: for the solutions of [[thm-gr-periodic-symmetric-hyperbolic-existence]] on $(-T,T)$, $\|\partial_tu(t)\|_{H^{s-1}}+\|\partial_tv(t)\|_{H^{s-1}}\le C_R$ and, more precisely, their norms at order $s-2$ are bounded by $C_R$ ([[lem-gr-galerkin-time-derivative-bound]], [[thm-gr-periodic-symmetric-hyperbolic-existence]]).

[L5] Gronwall: if $E\ge0$ is continuous with $E'\le cE$, then $E(t)\le E(0)e^{c|t|}$ ([[thm-gronwall-integral-inequality]]).



## Proof

**Proof technique:** direct.

1.1 (L² estimate and uniqueness (a).) Multiply the difference identity [L1] by $w$ and integrate: $\int w^{\mathsf T}A^0(u)\partial_tw\,d\mu=-\int w^{\mathsf T}\bigl(\text{remaining terms}\bigr)d\mu$, and $\tfrac{d}{dt}\int w^{\mathsf T}A^0(u)w\,d\mu=2\int w^{\mathsf T}A^0(u)\partial_tw+\int w^{\mathsf T}\dot A^0(u)w$, where $\dot A^0$ denotes the total derivative of $A^0$ along the solution. Every remaining term is bounded by $C_R\|w\|_2^2$: the terms $[A^\mu(u)-A^\mu(v)]\partial_\mu v$ are bounded using [L3] with $j=0$ and the bounds [L4] on $\partial_tv,\partial_iv$, and the terms $A^i(u)\partial_iw$, $B(u)-B(v)$ by [L2]--[L3]. Hence $\tfrac{d}{dt}\int w^{\mathsf T}A^0(u)w\le C_R\int w^{\mathsf T}w\le C_Ra^{-1}\int w^{\mathsf T}A^0(u)w$ by [L2], and Gronwall [L5] with $w(0)=0$ gives $w=0$ on $J$. This is (a). [L1, L2, L3, L4, L5, algebra]

1.2 (The difference time derivative.) From [L1] and invertibility [L2], $\partial_tw=(A^0(u))^{-1}\bigl(-A^i(u)\partial_iw-[A^0(u)-A^0(v)]\partial_tv-[A^i(u)-A^i(v)]\partial_iv-B(u)+B(v)\bigr)$. The term $[A^0(u)-A^0(v)]\partial_tv$ is controlled in $H^{s-2}$ by $\|A^0(u)-A^0(v)\|_{H^{s-2}}\|\partial_tv\|_{H^{s-2}}\le C_R\|w\|_{H^{s-1}}$ using [L3] (Lipschitz with $j=s-2$) and [L4]; the terms $A^i(u)\partial_iw$, $[A^i(u)-A^i(v)]\partial_iv$ and $B(u)-B(v)$ are controlled in $H^{s-2}\supseteq H^{s-1}$-type norms by $C_R\|w\|_{H^{s-1}}$; by the product and inverse bounds [L2], [L3], $\|\partial_tw\|_{H^{s-2}}\le C_R(1+\|w\|_{H^{s-1}})$. [L1, L2, L3, L4, algebra]

2.1 (The weighted $H^{s-1}$ energy (b).) Put $E(t):=\sum_{|\alpha|\le s-1}\int(D^\alpha w)^{\mathsf T}A^0(t,\cdot,u)D^\alpha w\,d\mu$, which satisfies $a\|w\|_{H^{s-1}}^2\le E\le b\|w\|_{H^{s-1}}^2$ by [L2]. Differentiating and substituting the $D^\alpha$-differentiated difference identity as in [[lem-gr-galerkin-energy-inequality]], every term is bounded by $C_R(1+E)$: the leading commutator terms by [L3] and step 1.2, the coefficient-difference forcing terms by the Lipschitz bounds [L3] and the uniform solution bounds [L4], and the zeroth-order terms by [L2]--[L3]. Gronwall [L5] on the interval $(-T,T)$ gives $E(t)\le E(0)e^{C_R|t|}$, hence $\|w(t)\|_{H^{s-1}}\le C'e^{C'|t|}\|w(0)\|_{H^{s-1}}$. This is (b). [step 1.2, L2, L3, L4, L5, algebra] ∎



## Remarks

- **Role.** E0's uniqueness among classical solutions and its continuous dependence topology are exactly the statement used in E1--E3 to identify reduced solutions and to propagate the harmonic constraint.
