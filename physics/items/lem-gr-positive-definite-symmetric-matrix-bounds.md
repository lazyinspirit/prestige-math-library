---
id: lem-gr-positive-definite-symmetric-matrix-bounds
kind: lemma
title: "Uniform quadratic-form bounds for positive definite symmetric matrices and smoothness of the inverse"
status: published
origin: session
domain: mathematics
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [cor-real-spectral-theorem-for-self-adjoint-endomorphisms, cor-inverse-matrix-by-adjugate, def-matrix-minors-cofactors-and-adjugate, def-determinant-of-a-square-matrix, thm-extreme-value-metric, def-continuous-map-top, def-c-r-and-smooth-maps-between-smooth-manifolds, def-ck-euclidean-maps-and-diffeomorphisms]
dependency_roles:
  cor-real-spectral-theorem-for-self-adjoint-endomorphisms: mathematical-premise
  cor-inverse-matrix-by-adjugate: mathematical-premise
  def-matrix-minors-cofactors-and-adjugate: mathematical-premise
  def-determinant-of-a-square-matrix: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  def-continuous-map-top: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
sources:
  references:
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Springer (2024), Open Access edition, Chapters 5-7: positive operators and the real spectral theorem for self-adjoint operators"
      url: "https://linear.axler.net/"
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 3.1 (Symmetric Hyperbolic Systems): the definition of a quasilinear symmetric hyperbolic system, the finite-dimensional mollifier approximation (3.1) solved by ODE theory, the energy and Moser product/composition estimates, the higher-order energy inequality, uniqueness, the Rellich/Ascoli compactness step and the passage to a classical solution, with Remarks 1-6 on smooth persistence, the continuation criterion, Cauchy stability and the non-identity time matrix"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
verification:
  precheck: pending
---

## Statement

Let $m\ge1$ and let $B\in\operatorname{Sym}_m(\mathbb R)$ be positive definite,
that is $B^{\mathsf T}=B$ and $z^{\mathsf T}Bz>0$ for every nonzero
$z\in\mathbb R^m$ with the standard coordinate inner product.

**(a)** There are real numbers $0<a\le b$ with $a\,|z|^2\le z^{\mathsf T}Bz\le b\,|z|^2$
for every $z\in\mathbb R^m$; equivalently $aI\le B\le bI$ in the Loewner
order. They can be taken to be the least and largest eigenvalues of $B$.

**(b)** $B$ is invertible and $\tfrac1bI\le B^{-1}\le\tfrac1aI$, so in
particular $\|B^{-1}z\|\le a^{-1}\|z\|$.

**(c)** Let $\Lambda$ be a compact topological space and let
$B:\Lambda\to\operatorname{Sym}_m(\mathbb R)$ be continuous with $B(\lambda)$
positive definite for every $\lambda\in\Lambda$. Then there are constants
$0<a\le b$ with $aI\le B(\lambda)\le bI$ for every $\lambda\in\Lambda$.

**(d)** Let $D\subseteq\mathbb R^p$ be open and let $B:D\to\operatorname{Sym}_m(\mathbb R)$
be smooth with $B(x)\ge aI$ for a constant $a>0$ and all $x\in D$. Then
$x\mapsto B(x)^{-1}$ is smooth on $D$ and $B(x)^{-1}\le a^{-1}I$ there.

## Facts & Assumptions
**Given:** $m\ge1$, a symmetric positive definite $B$, and in (c), (d) the stated parameter families.

[L1] Real spectral theorem: a self-adjoint endomorphism of a finite-dimensional real inner product space has an orthonormal basis of eigenvectors, and all its eigenvalues are real ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]).

[L2] For $B\in M_m(\mathbb R)$ with $\det B\ne0$, $B^{-1}=\det(B)^{-1}\operatorname{adj}(B)$, where the adjugate has polynomial entries in the entries of $B$ ([[cor-inverse-matrix-by-adjugate]], [[def-matrix-minors-cofactors-and-adjugate]], [[def-determinant-of-a-square-matrix]]).

[L4] Polynomial and rational functions with nonvanishing denominator are smooth, and smoothness is preserved by composition ([[def-c-r-and-smooth-maps-between-smooth-manifolds]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).



## Proof

**Proof technique:** direct.

1.1 (Spectral representation and the bounds (a).) By [L1] choose an orthonormal basis $e_1,\dots,e_m$ of $\mathbb R^m$ with $Be_i=\lambda_ie_i$ and real $\lambda_i$. Writing $z=\sum_iz_ie_i$ gives $z^{\mathsf T}Bz=\sum_i\lambda_iz_i^2$ and $|z|^2=\sum_iz_i^2$. If some $\lambda_i\le0$, then $e_i^{\mathsf T}Be_i=\lambda_i\le0$ with $e_i\ne0$, contradicting positive definiteness; so all $\lambda_i>0$. Put $a:=\min_i\lambda_i$ and $b:=\max_i\lambda_i$; both are positive and $a|z|^2\le z^{\mathsf T}Bz\le b|z|^2$ follows from the representation. This is (a). [L1, algebra]

2.1 (Uniform bounds for an arbitrary compact topological parameter space (c).) If $\Lambda=\varnothing$, take $a=b=1$ and the conclusion is vacuous. For each $\lambda\in\Lambda$, let $a_\lambda>0$ and $b_\lambda$ be the uniquely determined smallest and largest eigenvalues of $B(\lambda)$ from step 1.1. Continuity of the finitely many matrix entries gives an open neighborhood $V_\lambda$ on which every entry of $B(\mu)-B(\lambda)$ has absolute value less than $a_\lambda/(2m)$. For $\mu\in V_\lambda$, $$|z^{\mathsf T}(B(\mu)-B(\lambda))z|\le\frac{a_\lambda}{2m}\left(\sum_i|z_i|\right)^2\le\frac{a_\lambda}{2}|z|^2,$$ where the last inequality follows by summing $2|z_i z_j|\le z_i^2+z_j^2$ over the finite pairs. Hence $(a_\lambda/2)|z|^2\le z^{\mathsf T}B(\mu)z\le(b_\lambda+a_\lambda/2)|z|^2$. The neighborhoods $V_\lambda$ cover $\Lambda$; compactness, in its open-cover definition, gives finitely many $V_{\lambda_1},\ldots,V_{\lambda_q}$ covering it, with $q\ge1$ in the nonempty case. Set $a=\min_j a_{\lambda_j}/2>0$ and $b=\max_j(b_{\lambda_j}+a_{\lambda_j}/2)$. The preceding inequalities give the uniform bounds at every parameter. This uses no metric on $\Lambda$ and selects only a finite subcover; the eigenvalue constants are canonical, so no arbitrary-index choice of bases is needed. [step 1.1, L1, given, algebra]

2.2 (Inverse bounds (b).) In the same eigenbasis, $B^{-1}e_i=\lambda_i^{-1}e_i$ and $\lambda_i^{-1}\in[b^{-1},a^{-1}]$, so $b^{-1}|z|^2\le z^{\mathsf T}B^{-1}z\le a^{-1}|z|^2$; in particular $B^{-1}$ exists. [step 1.1, L1, algebra]

3.1 (Smoothness of the inverse (d).) On $D$, $x\mapsto\det B(x)\ge a^m>0$: the determinant is the product of the eigenvalues, each at least $a$ by (a) applied at $x$, or equivalently $\det$ is continuous and positive. The adjugate entries are polynomial in the entries of $B$, hence smooth in $x$, and dividing by the smooth nonzero function $\det B$ is smooth by [L4]; so $B(x)^{-1}$ is smooth and satisfies the bound by (b). [step 2.2, step 2.1, L2, L4, algebra] ∎



## Remarks

- **Use.** This is the linear-algebra input to [[lem-gr-galerkin-ode-local-solution]] (invertibility of the projected mass operator), [[lem-gr-galerkin-energy-inequality]] (uniform equivalence of weighted energies) and [[lem-gr-galerkin-time-derivative-bound]] (solving the mass equation).
