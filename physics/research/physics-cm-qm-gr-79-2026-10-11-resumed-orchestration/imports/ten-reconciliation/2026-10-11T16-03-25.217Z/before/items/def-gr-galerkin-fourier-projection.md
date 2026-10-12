---
id: def-gr-galerkin-fourier-projection
kind: definition
title: "Fourier modes on the periodic three-torus and the Galerkin projection P_N"
status: draft
origin: session
domain: mathematics
dependency_level: 2
provenance:
  statement: ai-altered
  proof: not-applicable
proof_strategy: null
deps: [def-gr-periodic-torus-and-sobolev-spaces, lem-gr-periodic-fourier-differentiation-and-norm-equivalence, def-ck-and-multi-index-notation-in-several-variables, def-countable-choice]
dependency_roles:
  def-gr-periodic-torus-and-sobolev-spaces: mathematical-premise
  lem-gr-periodic-fourier-differentiation-and-norm-equivalence: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 3.1 (Symmetric Hyperbolic Systems): the definition of a quasilinear symmetric hyperbolic system, the finite-dimensional mollifier approximation (3.1) solved by ODE theory, the energy and Moser product/composition estimates, the higher-order energy inequality, uniqueness, the Rellich/Ascoli compactness step and the passage to a classical solution, with Remarks 1-6 on smooth persistence, the continuation criterion, Cauchy stability and the non-identity time matrix"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
    - title: "J. K. Hunter, Notes on Partial Differential Equations (UC Davis lecture notes), Section 6.4 (The Galerkin approximation) of Chapter 6 (Parabolic Equations)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
verification:
  precheck: pending
---

## Definition

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]). Let $\mathbb T^3_{2\pi}$, $\mu$, $\chi_k$ and the
spaces $H^s(\mathbb T^3_{2\pi};\mathbb R^m)$ be as in
[[def-gr-periodic-torus-and-sobolev-spaces]] ($m\ge1$).

**(a) Mode sets.** For $N\ge0$ put
$\Lambda_N:=\{k\in\mathbb Z^3:|k|\le N\}$ with $|k|$ the Euclidean norm, and
$$X_N:=\Bigl\{\sum_{k\in\Lambda_N}a_k\chi_k:\ a_k\in\mathbb C^m,\ a_{-k}=\overline{a_k}\Bigr\}\subseteq C^\infty(\mathbb T^3_{2\pi};\mathbb R^m),$$
the **Galerkin space of modes up to $N$**; it is a finite-dimensional real
vector space of dimension $d_N:=m\,|\Lambda_N|$, and $X_N\subseteq X_{N'}$ for
$N\le N'$. (The reality condition $a_{-k}=\overline{a_k}$ is exactly the
condition that the trigonometric polynomial be real-valued.)

**(b) Projection.** For $u\in L^2(\mathbb T^3_{2\pi};\mathbb R^m)$ define
$$P_Nu:=\sum_{k\in\Lambda_N}\widehat u(k)\chi_k,\qquad (P_Nu)(x)=\sum_{k\in\Lambda_N}\widehat u(k)\chi_k(x),$$
with $\widehat u(k)$ the Fourier coefficients of clause (c) of
[[def-gr-periodic-torus-and-sobolev-spaces]]; the second expression is a finite
sum, so $P_Nu\in X_N$; and $P_N:X_N\to X_N$ is the identity.
$P_N$ is called the **Galerkin (Fourier) projection**.

The definition fixes the projection only. Its self-adjointness,
derivative-commutation and operator-norm properties are proved in
[[lem-gr-galerkin-projection-properties]].
