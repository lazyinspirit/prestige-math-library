---
id: prop-stiefel-grassmann-vector-transport-is-tangent
kind: proposition
title: Projected vector transports return tangent representatives
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps:
  - def-stiefel-grassmann-projected-vector-transport
  - thm-stiefel-grassmann-tangent-projections
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

For every retraction step $\eta$ at $X$, the maps
[[def-stiefel-grassmann-projected-vector-transport]] are smooth linear maps in
the source tangent vector and take values in the endpoint tangent spaces; at
$\eta=0$ both return the input tangent
representative. The Grassmann map is representative-independent under
$(X,\eta,Z)\mapsto(XQ,\eta Q,ZQ)$.

## Facts & Assumptions

**Given:** A source frame $X$, tangent step $\eta$, its Stiefel endpoint or polar Grassmann endpoint $Y$, and a source tangent or horizontal representative $Z$.

[F1] The projected transport formulas are those in [[def-stiefel-grassmann-projected-vector-transport]].

[F2] The tangent spaces at $Y$ are characterized by the Stiefel and horizontal equations in [[thm-stiefel-grassmann-tangent-projections]].

[F3] The retraction maps fix the zero tangent vector ([[thm-stiefel-retractions-are-first-order]]).

[F4] QR and polar endpoints are frames, and the polar endpoint is right-equivariant ([[def-stiefel-grassmann-projected-vector-transport]]).

## Proof

**Proof technique:** substitute the projected formulas into the tangent equations.

1.1 Put $S=\operatorname{sym}(Y^{\mathsf T}Z)$ and $W=Z-YS$. Then $Y^{\mathsf T}W=Y^{\mathsf T}Z-S$ is skew-symmetric, so $Y^{\mathsf T}W+W^{\mathsf T}Y=0$. By [F2], $W$ is a Stiefel tangent. The projection formulas are linear in $Z$ and smooth in $Y$; [F3] makes their composition with the retraction smooth in $\eta$. [F1, F2, F3, F4, given, algebra]

1.2 The Grassmann output $V=(I-YY^{\mathsf T})Z$ satisfies $Y^{\mathsf T}V=0$, so it is horizontal by [F2], and it depends linearly on $Z$. Under $(X,\eta,Z)\mapsto(XQ,\eta Q,ZQ)$, [F4] makes the polar endpoint $Y$ change to $YQ$. Then $I-(YQ)(YQ)^{\mathsf T}=I-YY^{\mathsf T}$ and the output changes to $VQ$, exactly the changed horizontal representative. This proves independence of the represented tangent vector. [F1, F2, F4, given, algebra]

2.1 At $\eta=0$, [F3] gives $Y=X$. If $Z$ is Stiefel tangent at $X$, $X^{\mathsf T}Z$ is skew-symmetric, so $\operatorname{sym}(X^{\mathsf T}Z)=0$ and the Stiefel transport returns $Z$. If $Z$ is horizontal, $X^{\mathsf T}Z=0$ and $(I-XX^{\mathsf T})Z=Z$. Thus both transports are identity at the zero step, completing the vector-transport conditions. [F1, F2, F3, given, algebra] ∎