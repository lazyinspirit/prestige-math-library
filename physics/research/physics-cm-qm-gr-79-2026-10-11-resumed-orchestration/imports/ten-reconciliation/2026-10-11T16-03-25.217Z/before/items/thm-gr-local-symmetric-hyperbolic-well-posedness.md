---
id: thm-gr-local-symmetric-hyperbolic-well-posedness
kind: theorem
title: "Local well-posedness and finite-speed independence of the extension for symmetric hyperbolic systems on a coordinate neighbourhood"
status: draft
origin: session
domain: mathematics
dependency_level: 13
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-periodic-torus-and-sobolev-spaces, def-gr-periodic-symmetric-hyperbolic-system, thm-gr-periodic-symmetric-hyperbolic-existence, thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability, thm-gr-periodic-symmetric-hyperbolic-smooth-persistence, lem-gr-finite-speed-independence-of-extension, def-ck-and-multi-index-notation-in-several-variables, def-countable-choice, lem-gr-galerkin-limit-is-classical-solution, lem-gr-smooth-composition-and-commutator-estimates, thm-divergence-theorem-for-bounded-piecewise-c-one-domains, thm-gronwall-integral-inequality]
dependency_roles:
  def-gr-periodic-torus-and-sobolev-spaces: mathematical-premise
  def-gr-periodic-symmetric-hyperbolic-system: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-existence: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-smooth-persistence: mathematical-premise
  lem-gr-finite-speed-independence-of-extension: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-gr-galerkin-limit-is-classical-solution: mathematical-premise
  lem-gr-smooth-composition-and-commutator-estimates: mathematical-premise
  thm-divergence-theorem-for-bounded-piecewise-c-one-domains: mathematical-premise
  thm-gronwall-integral-inequality: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 3.2 (Symmetric Hyperbolic Systems on Manifolds): the invariant principal-symbol definition of a symmetric hyperbolic system on a manifold, with Section 3.1's torus theory supplying the local model"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
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
the class $\mathcal S(K,R)$; for every datum $u_0\in\mathcal S(K,R)$ let $u$ be
the solution produced there on $(-T,T)$ with values in $K'$. Then:

**(a) [local existence]** For every $u_0\in\mathcal S(K,R)$ and every
$x_0\in\mathbb T^3_{2\pi}$ the solution $u$ is $C^1$ on a neighborhood of
$(0,x_0)$ in $(-T,T)\times\mathbb T^3_{2\pi}$ and solves $(\star)$ pointwise
there.

**(b) [finite speed / independence of the extension]** Let $\lambda_0>0$ be
determined by the coefficient bounds on a compact set containing the values of
the solutions in the following sense: for a truncated cone
$$D:=\{(t,x):0\le t\le t_0,\ d(x,x_0)\le\lambda(t_0-t)\}$$
with $t_0<T$, $\lambda\ge\lambda_0$, lying in a single chart of $\mathbb T^3_{2\pi}$
in which the coordinate representation of $A^\mu$ satisfies
$\lambda\,A^0+\xi_iA^i\ge0$ for all unit $\xi$ (which holds for $\lambda$ large
enough by clause (a) of [[lem-gr-finite-speed-independence-of-extension]]),
let $u,v$ be solutions of two periodic symmetric hyperbolic systems whose
coefficient functions agree on a neighborhood of $D$ in the independent variables and on one common open state set containing both solution ranges, with
$u(0,\cdot)=v(0,\cdot)$ on the ball $\{d(x,x_0)\le\lambda t_0\}$. Then
$u=v$ on $D$.

**(c) [local uniqueness and stability]** If two classical solutions of the same
system on a common interval have values in $K$, $H^s$ norms at most $R$ and the
same initial value, they coincide; and the continuous-dependence estimate of
[[thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability]] clause (b) holds
for the solutions of clause (a).

## Facts & Assumptions

**Given:** Countable Choice, $s\ge5$, the coefficient family on $O$, the compact sets $K\subseteq\operatorname{int}K'$, the bound $R$, the time $T$ and constant $C$ of the existence theorem, and a datum $u_0\in\mathcal S(K,R)$ with solution $u$.

[L1] Existence and regularity: $u\in C^1((-T,T)\times\mathbb T^3_{2\pi})$ solves $(\star)$ classically with values in $K'$ and the bounds of [[thm-gr-periodic-symmetric-hyperbolic-existence]] (and [[lem-gr-galerkin-limit-is-classical-solution]] for the upgrade); in particular the local statement of (a) holds. [L1]

[L2] Chart covariance: in a chart with coordinates $y$ for which the time coordinate equals $t$, the system takes the form $\tilde A^0\partial_tw+\tilde A^i\partial_{y^i}w+\tilde B=0$ with $\tilde A^0=A^0$, $\tilde A^i=\sum_\mu A^\mu\partial y^i/\partial x^\mu$ symmetric, and $a',b'$ finite bounds on a compact coordinate neighbourhood ([[def-gr-periodic-symmetric-hyperbolic-system]], [[def-ck-and-multi-index-notation-in-several-variables]]).

[L3] Finite speed: for a linear system on $\mathbb R^3$ with leading coefficients as in [L2] satisfying $\lambda A^0+\xi_iA^i\ge0$ for unit $\xi$, a solution with vanishing data on the base ball of a truncated cone vanishes on the cone, and two solutions of systems agreeing on a neighbourhood of the cone with equal data on the base agree there ([[lem-gr-finite-speed-independence-of-extension]] clauses (b),(c)).

[L4] Uniqueness and continuous dependence for the periodic system ([[thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability]]); smooth data give smooth solutions ([[thm-gr-periodic-symmetric-hyperbolic-smooth-persistence]]).

[L5] On a compact state neighborhood, smooth coefficient cutoffs and the mean-value formula give bounded coefficient-difference matrices ([[lem-gr-smooth-composition-and-commutator-estimates]]). The divergence theorem applies to the bounded piecewise $C^1$ truncated cones, and integral Gronwall gives zero nonnegative energy from zero initial energy ([[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]], [[thm-gronwall-integral-inequality]]).

## Proof

**Proof technique:** direct.

1.1 (Local existence (a).) By [L1] the solution $u$ is a classical $C^1$ solution on all of $(-T,T)\times\mathbb T^3_{2\pi}$, in particular near $(0,x_0)$. [L1]

2.1 (Quasilinear independence (b).) Put $w=u-v$. In the common chart the coefficient functions are the same functions of $(t,x,z)$, but their evaluations at $u$ and $v$ need not agree. Subtraction gives $\widetilde A^\mu(t,x,u)\partial_\mu w+\widetilde C(t,x)w=0$, where $\widetilde Cw=(\widetilde A^\mu(u)-\widetilde A^\mu(v))\partial_\mu v+\widetilde B(u)-\widetilde B(v)$. On the compact cone both ranges form a compact subset of the common open state set. A smooth cutoff in the state variable extends each coefficient off that compact neighborhood; the explicit cutoff construction of [[lem-gr-smooth-composition-and-commutator-estimates]] then gives the mean-value expression for $\widetilde C$ on the straight segment between $u,v$, without assuming the original state set convex. The coefficient derivatives and the first derivatives of $v$ are bounded there, so $\widetilde C$ is continuous and bounded. The evaluated leading matrices are $C^1$, symmetric and positive. For this regularity the flux calculation is direct: $j^\mu=w^{\mathsf T}\widetilde A^\mu(u)w$ is $C^1$ and $\partial_\mu j^\mu=w^{\mathsf T}(\partial_\mu\widetilde A^\mu-\widetilde C-\widetilde C^{\mathsf T})w\le c j^0$. On each truncated subcone its lateral flux is nonnegative by the assumed cone matrix inequality. The divergence theorem and Gronwall give $E(\tau)\le E(0)+c\int_0^\tau E$ and $E(0)=0$, hence $w=0$ on the cone interior and, by continuity, also its boundary and vertex. This is the energy argument of [L3], with its needed regularity established rather than asserting identical composed coefficients. [step 1.1, L2, L3, L5, algebra]

3.1 ((c).) The assertions are exactly [L4] applied to the solutions under consideration. [L4] ∎

## Remarks

- **Role.** E2 uses (b) in the form "a solution on a coordinate patch is independent of how the reduced data and coefficients are extended outside the patch" and (c) to compare two developments of the same geometric data.
