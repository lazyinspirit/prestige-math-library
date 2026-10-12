---
id: thm-gr-periodic-symmetric-hyperbolic-smooth-persistence
kind: theorem
title: "Smooth data give smooth solutions of a periodic symmetric hyperbolic system on the existence interval"
status: draft
origin: session
domain: mathematics
dependency_level: 11
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: induction
deps: [def-gr-periodic-torus-and-sobolev-spaces, def-gr-periodic-symmetric-hyperbolic-system, lem-gr-smooth-composition-and-commutator-estimates, lem-gr-positive-definite-symmetric-matrix-bounds, thm-gr-periodic-symmetric-hyperbolic-existence, thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability, thm-gronwall-integral-inequality, def-c-r-and-smooth-maps-between-smooth-manifolds, def-countable-choice, lem-gr-galerkin-energy-inequality]
dependency_roles:
  def-gr-periodic-torus-and-sobolev-spaces: mathematical-premise
  def-gr-periodic-symmetric-hyperbolic-system: mathematical-premise
  lem-gr-smooth-composition-and-commutator-estimates: mathematical-premise
  lem-gr-positive-definite-symmetric-matrix-bounds: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-existence: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability: mathematical-premise
  thm-gronwall-integral-inequality: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-gr-galerkin-energy-inequality: mathematical-premise
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
$K\subseteq\operatorname{int}K'\subseteq O$ be compact, let $R\ge0$, and let
$T>0$ and $C$ be as in [[thm-gr-periodic-symmetric-hyperbolic-existence]] for
the data class $\mathcal S(K,R)$. Let $u_0\in C^\infty(\mathbb T^3_{2\pi};\mathbb R^m)$
take values in $K$. Then the solution $u\in L^\infty((-T,T);H^s)\cap C^0H^{s-1}$
of that theorem with $u(0)=u_0$ satisfies $u\in L^\infty((-T,T);H^m)$ and
$\partial_tu\in L^\infty((-T,T);H^{m-1})$ for every $m\ge s$, with bounds
depending only on $m$, $T$, the coefficient family, $K'$ and the $H^j$ bounds
of $u_0$ for $j\le m$; consequently $u\in C^\infty((-T,T)\times\mathbb T^3_{2\pi})$
and solves $(\star)$ classically.

## Facts & Assumptions

**Given:** Countable Choice, $s\ge5$, the coefficient family, the compact sets $K\subseteq\operatorname{int}K'\subseteq O$, the time $T$ and constant $C$ of the existence theorem, and a smooth datum $u_0\in C^\infty$ with values in $K$.

[L1] Base case: $u\in L^\infty((-T,T);H^s)$, $\partial_tu\in L^\infty((-T,T);H^{s-1})$ and $u$ takes values in $K'$, with bounds $C(1+R)$ ([[thm-gr-periodic-symmetric-hyperbolic-existence]]).

[L2] Higher estimates: for every integer $m\ge5$, every compact $C_1\subseteq O$ and every bound $\rho$ of the $H^{m-1}$ norm of a map $v$ with values in $C_1$ there is $C_m$ (depending on the coefficient family and on $C_1,\rho$) such that, whenever $\|v\|_{H^{m-1}}\le\rho$ and values lie in $C_1$: the compositions $F(t,\cdot,v)$ and products with them satisfy the same composition, product, Lipschitz and commutator estimates as [[lem-gr-smooth-composition-and-commutator-estimates]] with $s$ replaced by $m$, and the inverse $(A^0(t,\cdot,v))^{-1}$ is a smooth coefficient with the corresponding bounds (the proof of that lemma uses only $m\ge5$, the embedding $H^m\subseteq C^{m-3}$ and the algebra property of $H^{m-1}$, so it applies verbatim; [[lem-gr-smooth-composition-and-commutator-estimates]], [[lem-gr-positive-definite-symmetric-matrix-bounds]]). In particular $\|\partial_tv\|_{H^{m-1}}\le C_m(1+\|v\|_{H^m})$ whenever $v$ solves the equation, because the equation gives $\partial_tv=-(A^0)^{-1}(A^i\partial_iv+B)$.

[L3] Weighted energy identity: for a classical solution $v$ of $(\star)$ with values in $C_1$ and finite $H^m$ norm, the energy $E_m(v)(t):=\sum_{|\alpha|\le m}\int(D^\alpha v)^{\mathsf T}A^0(t,\cdot,v)D^\alpha v\,d\mu$ satisfies $E_m'\le C_m(1+E_m)$ as long as $\|v\|_{H^{m-1}}\le\rho$ and values lie in $C_1$; the proof is the computation of [[lem-gr-galerkin-energy-inequality]] carried out at order $m$, its product terms being estimated by the estimates of [L2] ([[lem-gr-galerkin-energy-inequality]], [[lem-gr-smooth-composition-and-commutator-estimates]]).

[L4] Gronwall: $E'\le c(1+E)$ implies $E(t)\le(1+E(0))e^{c|t|}$ ([[thm-gronwall-integral-inequality]]).

## Proof

**Proof technique:** induction.

1.1 (Base case.) By [L1] the assertion holds for $m=s$: $u\in L^\infty H^s$, $\partial_tu\in L^\infty H^{s-1}$, values in $K'$, with bounds depending only on the listed data. [L1, base]

1.2 (Induction hypothesis.) Fix $M\ge s$ and assume, as induction hypothesis, that $u\in L^\infty H^{M}$ and $\partial_tu\in L^\infty H^{M-1}$ with bounds depending only on $M,T,K'$ and the data bounds, and that $u$ takes values in $K'$. [ih]

2.1 (The order-$M$ energy bound.) Let $\rho$ be the bound of the induction hypothesis [step 1.2] for $\|u\|_{H^{M-1}}$. By [L3] applied with $m=M-1$, $E_{M-1}(u)'\le C_{M-1}(1+E_{M-1}(u))$ as long as the bounds hold; since $u$ is a genuine classical solution on $(-T,T)$ and the values are fixed in $K'$, Gronwall [L4] gives $E_{M-1}(u)(t)\le(1+E_{M-1}(u)(0))e^{C_{M-1}T}$ on $(-T,T)$, which combined with the equivalence $a\|w\|^2_{H^{M-1}}\le E_{M-1}\le b\|w\|^2_{H^{M-1}}$ of [[lem-gr-positive-definite-symmetric-matrix-bounds]] gives the bound $\|u\|_{H^{M-1}}\le\rho_M$ with $\rho_M$ depending only on the listed data. Then $E_M(u)'\le C_M(1+E_M(u))$ by [L3] with $m=M$, and Gronwall again gives $\|u(t)\|_{H^M}\le C(M,T,\text{data})$ on the whole interval. Finally the equation gives $\partial_tu=-(A^0(t,\cdot,u))^{-1}(A^i(t,\cdot,u)\partial_iu+B(t,\cdot,u))$, whose $H^{M-1}$ norm is bounded by $C_M(1+\|u\|_{H^M})$ by [L2]. This proves the induction step. [step 1.2, L2, L3, L4, algebra]

3.1 (Conclusion.) By induction, [discharge-induction] $u\in L^\infty H^m$ and $\partial_tu\in L^\infty H^{m-1}$ for every $m\ge s$, so all spatial derivatives of $u$ are continuous (Sobolev embedding), and $\partial_tu$, being a composition of the smooth maps $A^\mu,B$ and the inverse of $A^0$ with the smooth-in-space field $u$ and its first spatial derivatives, is itself smooth in space; hence $u\in C^\infty((-T,T)\times\mathbb T^3_{2\pi})$ and the equation holds pointwise. [step 2.1, L2] ∎

## Remarks

- **Role.** This is the smooth-persistence clause of E0; E1--E3 invoke it when reading smooth reduced solutions, and [[thm-gr-local-geometric-development]] uses the smooth case for the geometric development theorem.
