---
id: thm-stiefel-retractions-are-first-order
kind: theorem
title: The QR and polar maps are first-order Stiefel and Grassmann retractions
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-stiefel-qr-polar-retractions
  - thm-stiefel-grassmann-tangent-projections
  - thm-gram-schmidt-orthonormalisation
  - lem-positive-definite-bundle-endomorphisms-have-smooth-positive-square-roots
  - lem-matrix-inversion-preserves-ck-regularity
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
  - title: "P.-A. Absil, R. Mahony, and R. Sepulchre, Optimization Algorithms on Matrix Manifolds, Chapter 4 (2008)"
    url: "https://assets.press.princeton.edu/chapters/absil/Absil_Chap4.pdf"
    locator: "Complete 37-page chapter, §§4.1.1–4.1.3: embedded retractions and QR/polar factorization constructions."
  - title: "Nicolas Boumal, An Introduction to Optimization on Smooth Manifolds (2023 prepublication)"
    url: "https://www.nicolasboumal.net/book/IntroOptimManifolds_Boumal_2023.pdf"
    locator: "Complete 367-page book, §7.3: Stiefel QR/Q-factor and polar retractions, their domains and orders."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

On the full-column-rank domains of [[def-stiefel-qr-polar-retractions]], the
positive-diagonal QR and polar maps are smooth, take values in
$\operatorname{St}(n,r)$, fix $\eta=0$, and have differential
$D R_X(0)[\eta]=\eta$. Their induced Grassmann maps are independent of the
representative and have identity differential under the horizontal tangent
identification. Thus they are first-order retractions. This theorem makes no
second-order claim; in particular, the QR map need not be second order.

## Facts & Assumptions

**Given:** $X\in\operatorname{St}(n,r)$, the full-rank formulas of [[def-stiefel-qr-polar-retractions]], and $\eta\in T_X\operatorname{St}(n,r)$.

[F1] The retraction maps are the positive-diagonal QR factor and the polar factor of $X+\eta$ ([[def-stiefel-qr-polar-retractions]]).

[F2] Tangency is characterized by $X^{\mathsf T}\eta+\eta^{\mathsf T}X=0$ ([[thm-stiefel-grassmann-tangent-projections]]).

[F3] Gram–Schmidt constructs an orthonormal basis on the full-rank domain ([[thm-gram-schmidt-orthonormalisation]]).

[F4] The positive square root depends smoothly on a positive-definite matrix ([[lem-positive-definite-bundle-endomorphisms-have-smooth-positive-square-roots]]).

[F5] Matrix inversion preserves $C^k$ regularity on the nonvanishing-determinant domain ([[lem-matrix-inversion-preserves-ck-regularity]]).

## Proof

**Proof technique:** differentiate each matrix factorization at the zero tangent vector.

1.1 On the full-rank set, the Gram–Schmidt recurrences divide only by positive residual norms, so [F3] expresses the QR factors by smooth additions, products, divisions by nonzero functions, and positive square roots. The polar formula is smooth there by [F4], [F5] applied to its positive-definite Gram matrix, and smooth matrix multiplication. Both maps land in Stiefel by [F1]. At $\eta=0$, the factorizations are $X=X I_r$, so each map returns $X$. [F1, F3, F4, F5, given]

1.2 For the polar map, $Y(t)^{\mathsf T}Y(t)=I_r+t^2\eta^{\mathsf T}\eta$ by [F2]. Its inverse square root equals $I_r+O(t^2)$ by smoothness in [F4] and [F5] and its value $I_r$ at $I_r$. Consequently $R_X^{\rm pol}(t\eta)=X+t\eta+O(t^2)$, so its derivative at zero is $\eta$. [F1, F2, F4, F5, given, algebra]

2.1 Set $Y(t)=X+t\eta$ and write its positive-diagonal QR factorization as $Y(t)=Q(t)R(t)$. By step 1.1, $Q,R$ are differentiable near zero; $Q(0)=X$, $R(0)=I_r$. Put $W=Q'(0)$ and $U=R'(0)$, so $\eta=W+XU$ and $U$ is upper triangular. Differentiating $Q(t)^{\mathsf T}Q(t)=I_r$ shows $X^{\mathsf T}W$ is skew-symmetric. By [F2], $X^{\mathsf T}\eta$ is skew-symmetric; hence $U=X^{\mathsf T}\eta-X^{\mathsf T}W$ is skew-symmetric as well. A real matrix both upper triangular and skew-symmetric is zero, so $U=0$ and $W=\eta$. [F1, F2, step 1.1, algebra]

3.1 Under $(X,\eta)\mapsto(XQ_0,\eta Q_0)$, the inputs $X+\eta$ and $(X+\eta)Q_0$ have the same column space. Their QR outputs may differ as frames, but induce the same Grassmann point; the polar output transforms by $Q_0$. Differentiating the induced maps therefore gives the same horizontal class of $\eta$, which is the identity on the quotient tangent space. [F1, step 2.1, step 1.2, algebra] ∎
