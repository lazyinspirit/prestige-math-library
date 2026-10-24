---
id: def-the-chern-weil-homomorphism
kind: definition
title: Chern–Weil map for a chosen connection
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-invariant-polynomial-on-a-matrix-lie-algebra
  - def-evaluation-of-an-invariant-polynomial-on-curvature
  - lem-an-invariant-polynomial-of-curvature-is-closed
  - def-de-rham-cohomology-ring
  - lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Raoul Bott, Lectures on Characteristic Classes and Foliations
      url: https://poisson.phc.dm.unipi.it/~lmigliorini/secondo_magistrale/gauge_theory/bott_foliations.pdf
      locator: "§5.1 and §§5.3–5.5, printed pp. 27–30 (PDF pp. 30–33); real GL-invariant-polynomial construction, class [φ(κ)], and complex de Rham convention"
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Let $M$ be a finite-dimensional Hausdorff second-countable smooth manifold,
possibly with boundary. Let $E\to M$ be a smooth rank-$r$ real or complex
vector bundle with a supplied $G$-frame atlas, where $G$ is a real or complex
matrix Lie group, and let $\nabla$ be a fixed connection compatible with that
reduction. For the algebra of finite sums of $\operatorname{Ad}(G)$-invariant
polynomials $P=\sum_k P_k$ with values in $\mathbb K\in\{\mathbb R,\mathbb C\}$.
For each $P_k$, write $P_k^{\mathrm{pol}}$ for its normalized symmetric
polarization (with $P_0^{\mathrm{pol}}=P_0$), and define
$$\operatorname{CW}_{E,\nabla}(P)=\sum_k [P_k^{\mathrm{pol}}(\Omega_\nabla,\ldots,\Omega_\nabla)]\in H^{\mathrm{even}}_{\mathrm{dR}}(M;\mathbb K).$$
where a degree-$k$ polynomial maps to cohomological degree $2k$. The map is a
graded unital $\mathbb K$-algebra homomorphism, with polynomial multiplication
on the source and wedge product on the target, and
$\operatorname{CW}_{E,\nabla}(1)=[1]$. The coefficient convention for
$H_{\mathrm{dR}}(M;\mathbb K)$ on boundary manifolds is specified below.
This definition depends on the fixed connection; independence of its
cohomology value is a later theorem.

## Facts & Assumptions

**Given:** $M$, $E$, the supplied $G$-frame atlas, its compatible connection, and a finite sum of $G$-invariant polynomials with coefficients in $\mathbb K\in\{\mathbb R,\mathbb C\}$.

[F1] Degree zero evaluates as the corresponding constant $0$-form ([[def-evaluation-of-an-invariant-polynomial-on-curvature]]).

[F2] A compatible connection and invariant polynomial give a global $\mathbb K$-valued curvature form ([[def-evaluation-of-an-invariant-polynomial-on-curvature]]).

[F3] The global evaluation of each homogeneous invariant polynomial on the curvature is closed, including degree zero ([[lem-an-invariant-polynomial-of-curvature-is-closed]]).

[F4] Each homogeneous invariant polynomial has a unique normalized symmetric polarization whose diagonal is the polynomial ([[def-invariant-polynomial-on-a-matrix-lie-algebra]]).

[F8] Finite sums of homogeneous invariant polynomials form an algebra under addition and multiplication ([[def-invariant-polynomial-on-a-matrix-lie-algebra]]).

[F5] On a manifold with boundary the real forms form a cochain complex and the exterior derivative obeys the graded Leibniz rule; its cohomology is formed as cycles modulo boundaries ([[lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary]]).

[F6] On a boundaryless manifold the published real de Rham cohomology is a unital graded-commutative real algebra with unit $[1]$ ([[def-de-rham-cohomology-ring]]).

[F7] The real de Rham cohomology of the empty manifold is the zero algebra with $1=0$ ([[def-de-rham-cohomology-ring]]).

## Definition

For the real coefficient target, use the ordinary real de Rham complex when $\partial M=\varnothing$ and the locally extendible boundary-chart complex from [F5] when $M$ has boundary; write its cohomology ring as $H^\bullet_{\mathrm{dR}}(M;\mathbb R)$. Its product is induced by wedge: the graded Leibniz rule in [F5] makes exact changes of a closed representative exact. For $\mathbb K=\mathbb R$, set $H^\bullet_{\mathrm{dR}}(M;\mathbb K)=H^\bullet_{\mathrm{dR}}(M;\mathbb R)$. For $\mathbb K=\mathbb C$, set $$\Omega^\bullet(M;\mathbb C)=\Omega^\bullet(M;\mathbb R)\otimes_{\mathbb R}\mathbb C,\qquad d_{\mathbb C}=d_{\mathbb R}\otimes 1,\qquad H^\bullet_{\mathrm{dR}}(M;\mathbb C)=H^\bullet(\Omega^\bullet(M;\mathbb C),d_{\mathbb C}).$$ This is the complex-valued smooth-form complex, with boundary coefficients locally extendible componentwise. Real and imaginary parts split its cycles and exact forms, so its cohomology is $H^\bullet_{\mathrm{dR}}(M;\mathbb R)\otimes_{\mathbb R}\mathbb C$; wedge and the unit extend $\mathbb C$-linearly. On the empty manifold the target is the zero algebra with $1=0$, as in [F7].

For a polynomial $P_k$ homogeneous of degree $k$, use its polarization $P_k^{\mathrm{pol}}$ in the global form from [F2]. Define the map by taking its cohomology class and summing over the homogeneous components. No connection-independence assertion is included in the definition.

## Proof

**Well-definedness and algebra law.**

1.1 The target complex for $\mathbb K=\mathbb C$ is the complexification of the real complex: every complex-valued form is uniquely $\alpha+i\beta$ with real forms $\alpha,\beta$, and $d(\alpha+i\beta)=0$ exactly when $d\alpha=d\beta=0$; it is exact exactly when both real and imaginary parts are exact. Hence cohomology splits as the stated complexification, wedge induces its $\mathbb K$-algebra product by the graded Leibniz rule in [F5], and for boundaryless $M$ the real target agrees with the unital ring [F6]. If $M=\varnothing$ it is the zero algebra [F7]. [F5, F6, F7, given, algebra]

2.1 For every homogeneous component $P_k$, the global form supplied by [F2] is closed by [F3], so it determines a class in the target cohomology from step 1.1; degree zero is the constant $0$-form [F1], also closed. The finite sum therefore defines the displayed map. [F1, F2, F3, step 1.1, given]

3.1 Let $P_k,Q_\ell$ be homogeneous with normalized symmetric polarizations $P_k^{\mathrm{pol}}$ and $Q_\ell^{\mathrm{pol}}$. The normalized polarization from [F4] of their product, which is an invariant polynomial by [F8], is $$ (P_kQ_\ell)_{k+\ell}^{\mathrm{pol}}(A_1,\ldots,A_{k+\ell})=\binom{k+\ell}{k}^{-1}\sum_{\substack{S\subseteq\{1,\ldots,k+\ell\}\\|S|=k}}P_k^{\mathrm{pol}}(A_{s_1},\ldots,A_{s_k})Q_\ell^{\mathrm{pol}}(A_{t_1},\ldots,A_{t_\ell}), $$ where $s_1<\cdots<s_k$ list $S$ and $t_1<\cdots<t_\ell$ list its complement. This is symmetric and multilinear with diagonal $P_kQ_\ell$. On setting every $A_j$ equal to the curvature $2$-form, every summand evaluates to $P_k(\Omega_\nabla^k)\wedge Q_\ell(\Omega_\nabla^\ell)$: scalar coefficient forms have even degree and commute. Thus evaluation preserves products, including $k=0$ or $\ell=0$, and passing to cohomology gives the algebra law. [F2, F4, F8, step 2.1, algebra]

4.1 Multilinearity of polarization [F4], exterior multiplication, and the cohomology quotient makes the map $\mathbb K$-linear and degree doubling. By [F1], the constant polynomial $1$ evaluates to the constant $0$-form $1$, hence to the target unit; if $M$ is empty both are the zero-algebra unit $0$ by [F7]. This proves the unital graded algebra claim. The connection is fixed throughout, and no step asserts that changing it leaves the class unchanged. The atlas and connection are supplied data, so no axiom of choice is used. [F1, F4, F7, F8, step 1.1, step 3.1, given, algebra] ∎
