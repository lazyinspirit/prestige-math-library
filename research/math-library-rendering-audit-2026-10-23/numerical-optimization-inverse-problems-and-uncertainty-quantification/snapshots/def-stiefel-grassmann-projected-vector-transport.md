---
id: def-stiefel-grassmann-projected-vector-transport
kind: definition
title: Projected vector transport on Stiefel and Grassmann
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - def-stiefel-grassmann-optimization-conventions
  - thm-stiefel-grassmann-tangent-projections
  - def-stiefel-qr-polar-retractions
  - thm-stiefel-retractions-are-first-order
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
---

## Definition

Let $X$ be a source frame, $\eta\in T_X\operatorname{St}(n,r)$, and
$Z\in T_X\operatorname{St}(n,r)$. For Stiefel transport let $Y=R_X(\eta)$ be
either the QR or polar endpoint. For Grassmann transport, require $\eta$ to be
the unique horizontal representative at $[X]$, so $X^{\mathsf T}\eta=0$, and choose
$Y=R_X^{\rm pol}(\eta)$, the polar endpoint; the positive-diagonal QR frame is
not used for this representative-based quotient transport. Define the
**projected Stiefel transport**
$$\mathcal T_Y^{\rm St}(Z):=Z-Y\operatorname{sym}(Y^{\mathsf T}Z),$$
and, for a horizontal source representative $Z$, define the **projected Grassmann transport representative**
$$\mathcal T_Y^{\rm Gr}(Z):=(I-YY^{\mathsf T})Z.$$
The Grassmann expression is interpreted as a tangent representative at
$[Y]$. The polar endpoint is right-equivariant, so the next proposition verifies
representative independence, tangency, and identity at a zero step. These
projection transports are not claimed to be Levi-Civita parallel transport.

## Facts & Assumptions

**Given:** $X\in\operatorname{St}(n,r)$, a tangent step $\eta$ (horizontal in the Grassmann branch), its Stiefel endpoint $Y=R_X(\eta)$ or its Grassmann polar endpoint $Y=R_X^{\rm pol}(\eta)$, and a source tangent (or horizontal) representative $Z$.

[F1] The Stiefel and horizontal projections at a frame $Y$ are the formulas in [[thm-stiefel-grassmann-tangent-projections]].

[F2] QR and polar endpoints are orthonormal frames, and the polar endpoint transforms as $R_{XQ}^{\rm pol}(\eta Q)=R_X^{\rm pol}(\eta)Q$ ([[def-stiefel-qr-polar-retractions]]).

[F3] Both retractions fix the zero tangent vector ([[thm-stiefel-retractions-are-first-order]]).

## Proof

**Proof technique:** identify each formula as the corresponding orthogonal projection.

1.1 The first displayed map is exactly the Stiefel tangent projection from [F1], and the second is exactly the horizontal Grassmann projection from [F1]. By [F2], the endpoint is a valid frame; each formula is linear in $Z$ and takes values in the stated destination tangent space. [F1, F2, given]

2.1 Under a change $(X,\eta,Z)\mapsto(XQ,\eta Q,ZQ)$, [F2] gives the polar endpoint $YQ$; hence $I-(YQ)(YQ)^{\mathsf T}=I-YY^{\mathsf T}$ and the output changes to $VQ$. This is exactly the changed horizontal representative, so the Grassmann tangent vector is independent of the frame. At $\eta=0$, [F3] gives $Y=X$; a Stiefel tangent has $\operatorname{sym}(X^{\mathsf T}Z)=0$, and a Grassmann horizontal representative has $X^{\mathsf T}Z=0$, so both transports return $Z$. [F1, F2, F3, given, algebra] ∎