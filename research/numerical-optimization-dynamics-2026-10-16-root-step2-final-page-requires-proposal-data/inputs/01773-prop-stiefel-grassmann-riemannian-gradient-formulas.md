---
id: prop-stiefel-grassmann-riemannian-gradient-formulas
kind: proposition
title: Projected Euclidean gradients are the Stiefel and Grassmann gradients
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-stiefel-grassmann-optimization-conventions
  - thm-stiefel-grassmann-tangent-projections
  - def-riemannian-gradient-of-a-smooth-function
  - lem-riemannian-gradient-vanishes-exactly-at-critical-points
  - def-jacobian-matrix-and-gradient
  - def-euclidean-inner-product
  - def-stiefel-space-grassmannian-and-tautological-bundle
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

## Statement

Let $F$ be smooth on an open neighborhood of $\operatorname{St}(n,r)$, and
write $G=\nabla F(X)$ for its Euclidean gradient. Its restriction to Stiefel
has Riemannian gradient $G-X\operatorname{sym}(X^{\mathsf T}G)$. If
$F(XQ)=F(X)$ for every $Q\in\operatorname O(r)$, it descends to a smooth
Grassmann objective and its gradient has horizontal representative
$(I-XX^{\mathsf T})G$. In either metric, gradient zero is equivalent to a
critical point of the restricted objective.

## Facts & Assumptions

**Given:** $1\le r\le n$, a smooth ambient $F$, $X\in\operatorname{St}(n,r)$, and, for the Grassmann conclusion, right-orthogonal invariance.

[F1] The Frobenius projections to Stiefel and Grassmann tangent representatives are the formulas in [[thm-stiefel-grassmann-tangent-projections]].

[F2] A Riemannian gradient is the metric dual of the differential ([[def-riemannian-gradient-of-a-smooth-function]]).

[F3] Right multiplication by an orthogonal matrix changes the frame representative but not its subspace ([[def-stiefel-space-grassmannian-and-tautological-bundle]]).

[F4] The Jacobian definition gives the coordinate partial derivatives of $F$ as the entries of $G=\nabla F(X)$ ([[def-jacobian-matrix-and-gradient]]); for a smooth $F$, its differential is linear and its value on a coordinate-basis matrix is the corresponding partial derivative.

[F5] The Riemannian gradient vanishes exactly at critical points of a smooth function ([[lem-riemannian-gradient-vanishes-exactly-at-critical-points]]).

[F6] The Frobenius pairing is the Euclidean coordinate inner product on matrix entries ([[def-euclidean-inner-product]]).

## Proof

**Proof technique:** identify the metric dual by orthogonal projection.

1.1 Let $E_{ij}$ be the coordinate-basis matrices. Smoothness of $F$ makes $dF_X$ linear, and by the definition in [F4], $dF_X[E_{ij}]=\partial_{ij}F(X)=G_{ij}$. Expanding $Z=\sum_{i,j}Z_{ij}E_{ij}$ therefore gives $dF_X[Z]=\sum_{i,j}G_{ij}Z_{ij}=\langle G,Z\rangle_F$. Restriction to Stiefel has this same differential on tangent vectors. By [F1], $\Pi_X^{\rm St}G$ is tangent and $G-\Pi_X^{\rm St}G$ is normal, hence $\langle\Pi_X^{\rm St}G,Z\rangle_F=\langle G,Z\rangle_F$. The metric-dual characterization [F2] proves the Stiefel formula. [F1, F2, F4, F6, given, algebra]

1.2 Invariance and [F3] make $f([X])=F(X)$ well-defined. The graph charts for the quotient in [F3] provide smooth local frame sections; in each chart, $f$ is the composition of $F$ with such a section and is therefore smooth. The derivative along each vertical vector $X\Omega$, $\Omega^{\mathsf T}=-\Omega$, vanishes because $F(X\exp(t\Omega))$ is constant in $t$. Thus the differential descends to horizontal representatives. [F3, given, algebra]

2.1 For a horizontal $Z$, the descended differential is $\langle G,Z\rangle_F$ by [F4] and [F6]. By [F1], $(I-XX^{\mathsf T})G$ is horizontal and its difference from $G$ is orthogonal to every horizontal $Z$, so it is the metric dual on the quotient. [F5] gives the asserted equivalence between a zero gradient and criticality on each manifold. [F1, F2, F4, F5, F6, given, step 1.2] ∎
