---
id: prop-complex-grassmann-projector-energy-gradient
kind: proposition
title: Gradient of a unitary-invariant Hermitian projector energy
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-complex-stiefel-grassmann-optimization-conventions
  - def-stiefel-space-grassmannian-and-tautological-bundle
  - thm-complex-stiefel-grassmann-tangent-projections
  - thm-complex-grassmann-polar-retraction-is-first-order
  - def-riemannian-gradient-of-a-smooth-function
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
  - title: "Nicolas Boumal, An Introduction to Optimization on Smooth Manifolds (2023 prepublication)"
    url: "https://www.nicolasboumal.net/book/IntroOptimManifolds_Boumal_2023.pdf"
    locator: "Complete 367-page book, §§3.1, 3.8, and 9.16: real-coordinate differentiation, Riemannian gradients, and Grassmann quotient gradients."
  - title: "Nicholas D. S. Manton, Optimization algorithms exploiting unitary constraints, IEEE Transactions on Signal Processing 50 (2002), §§VI–VII"
    url: "https://cseweb.ucsd.edu/classes/sp24/cse291-e/papers/StiefelManifold/UnitaryConstraints.pdf"
    locator: "Complete 16-page article, §§VI–VII: unitary-invariant objectives descend to complex Grassmann and admit projected gradients."
verification:
  precheck: n/a
---

## Statement

Let $1\le r\le n$, and let $E$ be real-valued and continuously differentiable on an open set of
Hermitian $n\times n$ matrices containing the rank-$r$ orthogonal projectors.
Suppose its real Frobenius gradient $K(P)=K(P)^*$ satisfies
$$DE(P)[H]=\operatorname{Re}\operatorname{tr}(K(P)^*H)$$
for every Hermitian direction $H$. Then $f([X])=E(XX^*)$ is well-defined on
$\operatorname{Gr}_{\mathbb C}(r,n)$ and has horizontal gradient
$$\operatorname{grad}f([X])=2(I-XX^*)K(XX^*)X.$$

## Facts & Assumptions

**Given:** The real differentiable Hermitian-matrix functional and gradient in the Statement, and $X\in\operatorname{St}_{\mathbb C}(n,r)$.

[F1] The frame quotient is by the right unitary action, and complex matrix spaces use the real Frobenius pairing ([[def-complex-stiefel-grassmann-optimization-conventions]]).

[F2] The horizontal tangent projection is $G\mapsto(I-XX^*)G$ ([[thm-complex-stiefel-grassmann-tangent-projections]]).

[F3] A Riemannian gradient is the metric dual of the differential ([[def-riemannian-gradient-of-a-smooth-function]]).

[F4] Complex Grassmann has local graph charts and frame representatives related by right unitary maps ([[def-stiefel-space-grassmannian-and-tautological-bundle]]).

[F5] The complex polar retraction has frame differential $D R_X(0)[Z]=Z$ for horizontal $Z$ ([[thm-complex-grassmann-polar-retraction-is-first-order]]).

## Proof

**Proof technique:** differentiate the projector map on horizontal directions, then project the ambient metric dual.

1.1 For unitary $Q$, $(XQ)(XQ)^*=XX^*$, so $E(XX^*)$ is independent of the representative. In the local graph charts [F4], it therefore defines a differentiable function $f$ on the quotient. Let $Y(t)=R_X^{\rm pol}(tZ)$ and $P(t)=Y(t)Y(t)^*$. By [F5], $Y(0)=X$ and $Y'(0)=Z$, so differentiating gives $P(0)=P$ and $P'(0)=ZX^*+XZ^*$. Since $E$ is defined on an open neighborhood of $P$, the chain rule gives the differential of $f$ along this Grassmann curve. [F1, F4, F5, given, algebra]

2.1 Using $K=K^*$, cyclicity of trace, and [F1], $df_{[X]}[Z]=\operatorname{Re}\operatorname{tr}(K(ZX^*+XZ^*))=2\operatorname{Re}\operatorname{tr}((KX)^*Z)=\langle 2KX,Z\rangle_{\mathbb R}$. The horizontal metric dual is the projection of $2KX$. By [F2] it equals $2(I-XX^*)KX$, which is the claimed gradient by [F3]. [F1, F2, F3, given, step 1.1, algebra] ∎
