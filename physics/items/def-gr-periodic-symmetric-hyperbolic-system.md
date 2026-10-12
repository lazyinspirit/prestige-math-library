---
id: def-gr-periodic-symmetric-hyperbolic-system
kind: definition
title: "Periodic first-order symmetric hyperbolic systems: coefficients, admissible values, data classes and solutions"
status: draft
origin: session
domain: mathematics
dependency_level: 2
provenance:
  statement: ai-altered
  proof: not-applicable
proof_strategy: null
deps: [def-gr-periodic-torus-and-sobolev-spaces, lem-gr-periodic-fourier-differentiation-and-norm-equivalence, def-ck-and-multi-index-notation-in-several-variables, def-c-r-and-smooth-maps-between-smooth-manifolds, def-compact-space, def-countable-choice, cor-real-spectral-theorem-for-self-adjoint-endomorphisms]
dependency_roles:
  def-gr-periodic-torus-and-sobolev-spaces: mathematical-premise
  lem-gr-periodic-fourier-differentiation-and-norm-equivalence: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-compact-space: mathematical-premise
  def-countable-choice: mathematical-premise
  cor-real-spectral-theorem-for-self-adjoint-endomorphisms: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 3.1 (Symmetric Hyperbolic Systems): the definition of a quasilinear symmetric hyperbolic system, the finite-dimensional mollifier approximation (3.1) solved by ODE theory, the energy and Moser product/composition estimates, the higher-order energy inequality, uniqueness, the Rellich/Ascoli compactness step and the passage to a classical solution, with Remarks 1-6 on smooth persistence, the continuation criterion, Cauchy stability and the non-identity time matrix"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
    - title: "J. K. Hunter, Notes on Partial Differential Equations (UC Davis lecture notes), Chapter 8 (Friedrich symmetric systems): the boundary value problem and uniqueness/existence theory for symmetric systems"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
verification:
  precheck: pending
---

## Definition

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]). Fix an integer $m\ge1$, an open set
$O\subseteq\mathbb R^m$ with the subspace topology and a nondegenerate open
interval $I\subseteq\mathbb R$ containing $0$. All functions on
$\mathbb T^3_{2\pi}$ are those of [[def-gr-periodic-torus-and-sobolev-spaces]],
and smoothness on $I\times\mathbb T^3_{2\pi}\times O$ means smoothness of the
representative in the sense of clause (e) of that item.

**(a) Coefficients.** A **periodic symmetric hyperbolic coefficient family** on
$O$ consists of smooth maps
$$A^\mu:I\times\mathbb T^3_{2\pi}\times O\to\operatorname{Sym}_m(\mathbb R)\quad(\mu=0,1,2,3),\qquad B:I\times\mathbb T^3_{2\pi}\times O\to\mathbb R^m,$$
such that $A^0(t,x,u)$ is positive definite for every
$(t,x,u)\in I\times\mathbb T^3_{2\pi}\times O$; here
$\operatorname{Sym}_m(\mathbb R)$ is the real vector space of symmetric
$m\times m$ matrices, identified with symmetric endomorphisms of $\mathbb R^m$
through the standard coordinate inner product, and positive definiteness means
$z^TA^0(t,x,u)z>0$ for every nonzero $z\in\mathbb R^m$
([[def-ck-and-multi-index-notation-in-several-variables]]).

**(b) The system.** The associated **symmetric hyperbolic system** is
$$A^0(t,x,u)\,\partial_tu+\sum_{i=1}^3A^i(t,x,u)\,\partial_iu+B(t,x,u)=0 .\qquad(\star)$$

**(c) Values and norms.** A map $u:J\to H^s(\mathbb T^3_{2\pi};\mathbb R^m)$
on an interval $J$ **takes values in a set $E\subseteq\mathbb R^m$** when
$u(t)(x)\in E$ for every $t\in J$ and every $x\in\mathbb T^3_{2\pi}$, with
$u(t)$ read through its continuous representative when $s>3/2$. For compact
$K\subseteq O$ and $R\ge0$ put
$$\mathcal S(K,R):=\bigl\{u_0\in H^s(\mathbb T^3_{2\pi};\mathbb R^m):u_0\text{ takes values in }K,\ \|u_0\|_{H^s}\le R\bigr\}.$$

**(d) Classical solutions.** Let $s\ge2$. A **classical solution of $(\star)$ on
$J\times\mathbb T^3_{2\pi}$** is a $C^1$ map
$u:J\times\mathbb T^3_{2\pi}\to\mathbb R^m$ with $u(t,x)\in O$ for all
$(t,x)$ and $(\star)$ satisfied at every point, such that
$u\in L^\infty(J;H^s)$ and $\partial_tu\in L^\infty(J;H^{s-1})$. (For $s\ge2$
the embedding clause gives a continuous representative, so the pointwise
conditions are meaningful.)

**(e) Sobolev solutions.** Let $s\ge5$ and let $J$ be an open interval. A map
$u:J\to H^s(\mathbb T^3_{2\pi};\mathbb R^m)$ is a **Sobolev solution of
$(\star)$ on $J$** when

1. $u\in L^\infty(J;H^s)\cap C^0(J;H^{s-1})$ and the distributional time
   derivative $\partial_tu$ lies in $L^\infty(J;H^{s-1})$;
2. $u$ takes values in $O$;
3. for almost every $t\in J$ the identity $(\star)$ holds in
   $L^2(\mathbb T^3_{2\pi};\mathbb R^m)$, the coefficients being composed with
   the continuous representative of $u(t)$; all products are defined because
   $A^0(t,\cdot,u(t))$ and $A^i(t,\cdot,u(t))$ lie in $H^s$ with norm bounded
   by a function of $\|u(t)\|_{H^s}$, $\partial_tu(t)$ and $\partial_iu(t)$ lie
   in $H^{s-1}$, and $B(t,\cdot,u(t))$ lies in $H^s$.

**(f) Initial data.** **Initial data for $(\star)$ at time $0$** are a class
$u_0\in H^s(\mathbb T^3_{2\pi};\mathbb R^m)$ with $s\ge5$ whose values lie in a
compact subset of $O$; a solution **has initial value $u_0$** when
$u(t)\to u_0$ in $H^{s-1}$ as $t\to0$ within $J$.

The definition introduces the system and its solution classes only; existence,
uniqueness, continuous dependence and smooth persistence are asserted and
proved in [[thm-gr-periodic-symmetric-hyperbolic-existence]],
[[thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability]] and
[[thm-gr-periodic-symmetric-hyperbolic-smooth-persistence]].
