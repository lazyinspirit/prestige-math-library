---
id: lem-implicit-rk-stage-jacobian-nonsingular-on-branch
kind: lemma
title: A contractive implicit Runge-Kutta stage branch has a nonsingular residual Jacobian
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps: [def-implicit-runge-kutta-stage-equations, lem-small-step-implicit-rk-branch-and-residual-error, thm-mean-value-inequality-for-total-derivatives, thm-rank-nullity]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Ernst Hairer and Gerhard Wanner, Introduction à l’Analyse Numérique, Chapter III, §III.3"
      url: "https://www.unige.ch/~hairer/poly/poly.pdf"
    - title: "John C. Butcher, Implicit Runge-Kutta Methods, tutorial, §§1–2"
      url: "https://www.math.auckland.ac.nz/~butcher/ODE-book-2008/Tutorials/IRK.pdf"
---

## Statement

Use the implicit Runge–Kutta residual $G(Y)=Y-\mathbf1\otimes u-h(A\otimes I_d)F(Y)$ from [[def-implicit-runge-kutta-stage-equations]] on a convex open neighborhood of an invariant stage ball. Suppose $F$ is $C^1$ there and $\|D_YF(Y)Z\|_{\infty,2}\le L\|Z\|_{\infty,2}$ for every $Y$ in the ball and every block vector $Z$. If $q=h\|A\|_\infty L<1$, then $D_YG(Y)$ is invertible at every point of the selected stage branch. The contraction hypotheses of [[lem-small-step-implicit-rk-branch-and-residual-error]] provide existence and uniqueness of the root in that ball; this lemma supplies nonsingularity for implicit differentiation.

## Facts & Assumptions

**Given:** The finite-dimensional stage space, implicit Runge–Kutta residual, selected invariant ball, $C^1$ map $F$, derivative bound $L$, and $q<1$.

[F1] The stage residual is $G(Y)=Y-\mathbf1\otimes u-h(A\otimes I_d)F(Y)$; a selected stage root satisfies $G(Y)=0$ ([[def-implicit-runge-kutta-stage-equations]]).

[F2] If $F$ is Lipschitz on the invariant ball with constant $L$ and $h\|A\|_\infty L<1$, the stage fixed-point map has a unique root on the prescribed branch ([[lem-small-step-implicit-rk-branch-and-residual-error]]).

[F3] A uniform derivative bound on a convex open set gives a Lipschitz bound on that set ([[thm-mean-value-inequality-for-total-derivatives]]).

[F4] For a linear map on a finite-dimensional vector space, $\dim V=\dim\ker T+\dim\operatorname{im}T$ ([[thm-rank-nullity]]).

[A1] The stage ball lies in the convex open set on which the derivative bound holds.

## Proof

1.1 By [F3] and [A1], $F$ is Lipschitz on the stage ball with constant $L$. Hence the hypotheses of [F2] hold and the selected root exists uniquely there. [F2, F3, A1]

1.2 Differentiating [F1] with respect to $Y$ gives $D_YG=I-h(A\otimes I_d)D_YF$. If $D_YG\,Z=0$, the block row-sum norm and the derivative bound imply $$\|Z\|_{\infty,2}\le h\|A\|_\infty L\|Z\|_{\infty,2}=q\|Z\|_{\infty,2}.$$ Since $q<1$, this forces $Z=0$; thus the square finite-dimensional map $D_YG$ has trivial kernel. [F1, given, algebra]

2.1 By [F4], a linear map on the stage space has rank equal to its dimension when its kernel has dimension zero. Therefore $D_YG$ is onto as well as one-to-one, hence invertible. This holds at every point of the prescribed branch ball. [F4, step 1.2] ∎

