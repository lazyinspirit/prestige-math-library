---
id: lem-nrqmx-degree-area-formula
kind: lemma
domain: mathematics
library: mathematics
title: Normalized area integral equals the degree
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 0
deps:
  - def-degree-of-a-map-between-oriented-closed-manifolds
  - def-fundamental-class-of-a-compact-oriented-manifold
  - thm-de-rham-theorem
  - def-kronecker-evaluation-pairing
  - lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives
  - lem-de-rham-top-integral-is-fundamental-class-evaluation
  - def-singular-chain-complex-and-singular-homology
  - def-induced-singular-chain-map
  - prop-singular-chains-and-homology-are-covariantly-functorial
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  def-degree-of-a-map-between-oriented-closed-manifolds: mathematical-premise
  def-fundamental-class-of-a-compact-oriented-manifold: mathematical-premise
  thm-de-rham-theorem: mathematical-premise
  def-kronecker-evaluation-pairing: mathematical-premise
  lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives: mathematical-premise
  lem-de-rham-top-integral-is-fundamental-class-evaluation: mathematical-premise
  def-singular-chain-complex-and-singular-homology: mathematical-premise
  def-induced-singular-chain-map: mathematical-premise
  prop-singular-chains-and-homology-are-covariantly-functorial: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Introduction to Differential Geometry: Manifolds, vector fields, and differential forms, University of Toronto course notes"
      url: https://www.math.toronto.edu/laithy/3672021/DiffGeomNotes_short.pdf
      locator: Section 8.3, Example 8.15, printed p. 167 (PDF pp. 173–174).
---

## Statement

Orient the unit sphere $S^2\subset\mathbb R^3$ outward and let $\omega_{S^2}$ be its normalized area form

$$\omega_{S^2}:=\frac{1}{4\pi}(x\,dy\wedge dz+y\,dz\wedge dx+z\,dx\wedge dy)\big|_{S^2},$$

so that $\int_{S^2}\omega_{S^2}=1$. For every smooth map $n:\mathbb T^2\to S^2$, where $\mathbb T^2$ has orientation $dk_1\wedge dk_2$, its integral degree satisfies

$$\int_{\mathbb T^2}n^*\omega_{S^2}=\deg(n)\in\mathbb Z.$$

Here degree is the integer determined by $n_*[\mathbb T^2]=\deg(n)[S^2]$ in integral homology.

## Statement references

[[def-degree-of-a-map-between-oriented-closed-manifolds]]

[[thm-de-rham-theorem]]

[[lem-de-rham-top-integral-is-fundamental-class-evaluation]]

[[def-singular-chain-complex-and-singular-homology]]

[[def-induced-singular-chain-map]]

[[prop-singular-chains-and-homology-are-covariantly-functorial]]

## Facts & Assumptions

**Given:** Axiom of Choice, Countable Choice, and a smooth map between the stated oriented closed surfaces.

[A1] Axiom of Choice is the principle in [[def-axiom-of-choice]], assumed by the top-form pairing supplier.

[A2] Countable Choice is the assumption in [[def-countable-choice]] and in the de Rham isomorphism [[thm-de-rham-theorem]].

[F1] [[def-degree-of-a-map-between-oriented-closed-manifolds]] defines $\deg(n)$ by the induced map on integral fundamental classes.

[F2] [[def-fundamental-class-of-a-compact-oriented-manifold]] supplies the orientation classes on both closed surfaces.

[F3] [[thm-de-rham-theorem]] makes the de Rham-to-singular-cohomology comparison natural for smooth maps.

[F4] [[def-kronecker-evaluation-pairing]] and [[lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives]] define its natural evaluation on homology classes.

[F5] [[lem-de-rham-top-integral-is-fundamental-class-evaluation]] identifies integration of a top form with evaluation of its de Rham class on the real fundamental class.

[F6] [[def-singular-chain-complex-and-singular-homology]] defines finite singular chains with coefficients and their boundaries; [[def-induced-singular-chain-map]] sends a simplex to its postcomposition; [[prop-singular-chains-and-homology-are-covariantly-functorial]] gives the induced map on homology.

## Proof

**Given:** [A1], [A2], [F1]–[F6], and $n$ as in the statement.

1.1 In spherical coordinates $x=\sin\theta\cos\phi$, $y=\sin\theta\sin\phi$, $z=\cos\theta$, the unnormalized displayed two-form is $\sin\theta\,d\theta\wedge d\phi$. Integrating for $0\le\theta\le\pi$ and $0\le\phi\le2\pi$ gives $4\pi$, so $\omega_{S^2}$ is a smooth closed form with integral one; its displayed ambient expression shows it extends smoothly across the coordinate poles. [given, algebra]

2.1 Let $J$ be the natural comparison in [F3]. By [F5], $\int_{\mathbb T^2}n^*\omega_{S^2}=\langle J([n^*\omega_{S^2}]),[\mathbb T^2]_{\mathbb R}\rangle$. Naturality of $J$ and of the real-coefficient Kronecker pairing [F4] then gives $\int_{\mathbb T^2}n^*\omega_{S^2}=\langle J([\omega_{S^2}]),n_*[\mathbb T^2]_{\mathbb R}\rangle$. [A1, A2, F3, F4, F5, step 1.1, algebra]

3.1 By [F1], $n_*[\mathbb T^2]_{\mathbb Z}=\deg(n)[S^2]_{\mathbb Z}$. The coefficient map $\iota:C_\bullet(X;\mathbb Z)\to C_\bullet(X;\mathbb R)$ sends each finite sum $\sum_j a_j\sigma_j$ to $\sum_j a_j\sigma_j$ with the same coefficients viewed in $\mathbb R$. It commutes with boundaries because [F6] defines the singular boundary as an integer linear combination of faces and $\iota$ is additive; it commutes with $n_\#$ because [F6] postcomposes each simplex without changing its coefficient. Hence it induces a coefficient-change map on homology and carries each integral fundamental class to its real fundamental class: it sends the positive local orientation generator $1$ to $1$, so uniqueness of the class with those local restrictions in [F2] identifies the image. Applying $\iota$ to the degree equation gives $n_*[\mathbb T^2]_{\mathbb R}=\deg(n)[S^2]_{\mathbb R}$. By the real-coefficient bilinearity of [F4], step 2.1 becomes $\int_{\mathbb T^2}n^*\omega_{S^2}=\deg(n)\langle J([\omega_{S^2}]),[S^2]_{\mathbb R}\rangle=\deg(n)\int_{S^2}\omega_{S^2}=\deg(n)$ by [F5] and step 1.1. [F1, F2, F4, F5, F6, step 1.1, step 2.1, algebra] ∎
