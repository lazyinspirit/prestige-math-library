---
id: def-stiefel-grassmann-optimization-conventions
kind: definition
title: Real Stiefel and Grassmann optimization conventions
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-stiefel-space-grassmannian-and-tautological-bundle
  - def-grassmannian-subspaces
  - def-riemannian-metric-and-riemannian-manifold
  - def-euclidean-inner-product
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
  - title: "P.-A. Absil, R. Mahony, and R. Sepulchre, Optimization Algorithms on Matrix Manifolds, Chapter 3 (2008)"
    url: "https://assets.press.princeton.edu/chapters/absil/Absil_Chap3.pdf"
    locator: "Complete 37-page chapter, §§3.3.2, 3.4.4, 3.5.7, 3.6.2 and 3.6.4: Stiefel/Grassmann structures, tangent and horizontal spaces, Frobenius projections and gradients."
  - title: "Nicolas Boumal, An Introduction to Optimization on Smooth Manifolds (2023 prepublication)"
    url: "https://www.nicolasboumal.net/book/IntroOptimManifolds_Boumal_2023.pdf"
    locator: "Complete 367-page book, §§3.6–3.8, 7.3 and 9.16: embedded metrics, gradients, Stiefel frames and Grassmann quotient geometry."
verification:
  precheck: n/a
---

## Definition

For integers $1\le r\le n$, the **real Stiefel manifold** is
$$\operatorname{St}(n,r):=\{X\in\mathbb R^{n\times r}:X^{\mathsf T}X=I_r\}.$$
The **real Grassmannian** $\operatorname{Gr}(r,n)$ is the set of $r$-dimensional
linear subspaces of $\mathbb R^n$, identified with the quotient of
$\operatorname{St}(n,r)$ by the right action $X\mapsto XQ$ of
$\operatorname O(r)$. A frame $X$ represents the subspace
$[X]=\operatorname{range}(X)$.

On matrix spaces use the Frobenius inner product
$\langle U,V\rangle_F=\operatorname{tr}(U^{\mathsf T}V)$. Give Stiefel its
induced metric. On the Grassmann quotient use the quotient metric: identify a
tangent vector at $[X]$ with its unique horizontal representative $Z$ satisfying
$X^{\mathsf T}Z=0$, and pair horizontal representatives by the Frobenius inner
product. A Grassmann formula written with a frame representative must be
unchanged under $(X,Z)\mapsto(XQ,ZQ)$ for $Q\in\operatorname O(r)$.

For a square real matrix $M$, set $\operatorname{sym}(M)=(M+M^{\mathsf T})/2$.

## Facts & Assumptions

**Given:** Integers $1\le r\le n$ and the real matrix spaces with their Euclidean topology.

[F1] The right action of $\operatorname O(r)$ on orthonormal frames changes frame but not the represented subspace, and its quotient is the Grassmannian ([[def-stiefel-space-grassmannian-and-tautological-bundle]]).

[F2] A Riemannian metric is a smooth symmetric positive-definite bilinear form on each tangent space ([[def-riemannian-metric-and-riemannian-manifold]]).

[F3] The Euclidean inner product on a finite real coordinate space is the sum of coordinatewise products ([[def-euclidean-inner-product]]).

[F4] A Grassmannian point is an $r$-dimensional subspace of the ambient vector space ([[def-grassmannian-subspaces]]).

## Proof

**Proof technique:** direct verification of the metric convention.

1.1 For any real matrix $U$, $\langle U,U\rangle_F=\sum_{i,j}U_{ij}^2$, so this pairing is symmetric bilinear and positive for every nonzero $U$ by [F3]. Its restriction to each tangent or horizontal subspace is therefore a positive-definite inner product, as required by [F2]. [given, F2, F3, algebra]

1.2 In a local Grassmann graph chart, choose a smooth orthonormal frame section $X(u)$ from the local frame-bundle trivialization in [F1], and set $P(u)=X(u)X(u)^{\mathsf T}$. For a chart tangent $v$, differentiating $X(u)^{\mathsf T}X(u)=I$ gives $A=X(u)^{\mathsf T}DX_u[v]$ skew-symmetric. The first term $X(u)A$ is vertical: for every skew-symmetric $A$, the Cayley curve $Q(t)=(I_r-\tfrac t2A)^{-1}(I_r+\tfrac t2A)$ satisfies $Q(t)^{\mathsf T}Q(t)=I_r$ near zero and $Q(t)=I_r+tA+O(t^2)$. Thus $Z=(I-X(u)X(u)^{\mathsf T})DX_u[v]$ is the unique horizontal representative of $v$. Then $DP_u[v]=ZX(u)^{\mathsf T}+X(u)Z^{\mathsf T}$. For horizontal $Z,W$, direct expansion gives $\tfrac12\langle ZX^{\mathsf T}+XZ^{\mathsf T},WX^{\mathsf T}+XW^{\mathsf T}\rangle_F=\langle Z,W\rangle_F$. Thus the quotient pairing has smooth coefficients in every graph chart. In a local product chart of the frame bundle, matrix entries vary smoothly, so the ambient Frobenius pairing has smooth coefficients on Stiefel as well. [F1, given, algebra]

2.1 By [F4], each frame represents an $r$-dimensional subspace, and [F1] identifies frames representing the same subspace by the right orthogonal action. For $Q^{\mathsf T}Q=I_r$, cyclicity of trace gives $\langle UQ,VQ\rangle_F=\operatorname{tr}(Q^{\mathsf T}U^{\mathsf T}VQ)=\operatorname{tr}(U^{\mathsf T}V)$. Thus the action is isometric and the horizontal pairing is independent of the chosen orthonormal frame. [F1, F4, given, algebra] ∎
