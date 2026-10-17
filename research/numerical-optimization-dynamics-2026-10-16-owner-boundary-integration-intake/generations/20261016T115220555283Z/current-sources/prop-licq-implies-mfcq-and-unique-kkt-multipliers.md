---
id: prop-licq-implies-mfcq-and-unique-kkt-multipliers
kind: proposition
title: LICQ implies MFCQ and makes KKT multipliers unique
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-inequality-constrained-program-and-kkt-geometry
  - thm-first-order-kkt-necessity-under-mfcq
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Nocedal and Wright, Numerical Optimization, second edition
      url: https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/NocedalJ.pdf
      locator: Chapter 12, Sections 12.2 and 12.5, printed pp. 328–330 and 352–353; LICQ, MFCQ, and uniqueness of multipliers.
    - title: "Zhiyuan Li, Convex Optimization, Lecture 5: Lagrange Multipliers and KKT"
      url: https://zhiyuanli.ttic.edu/convex-optimization-site/Lecture-5___-Lagrange-Multipliers-and-KKT/
      locator: KKT definitions and multiplier discussion; the rank argument below is given locally.
---

## Statement

For the $C^2$ program of
[[def-inequality-constrained-program-and-kkt-geometry]], LICQ at a feasible
point $x$ implies MFCQ there. If $x$ is a local minimizer, its KKT
multipliers exist and are unique.

## Facts & Assumptions

**Given:** The program, feasible point $x$, and LICQ at $x$.

[F1] LICQ means that the equality-gradient rows and active
inequality-gradient rows together are linearly independent
([[def-inequality-constrained-program-and-kkt-geometry]]).

[F2] At a local minimizer satisfying MFCQ, KKT multipliers exist
([[thm-first-order-kkt-necessity-under-mfcq]]).

## Proof

1.1 Put the equality-gradient rows and all active inequality-gradient rows into a matrix $M$. By [F1], its rows are independent. If $M$ has no rows, take $w=0$. Otherwise $MM^T$ is invertible: for nonzero $\eta$, $\eta^TMM^T\eta=\|M^T\eta\|_2^2>0$ by row independence. For the target vector $r$ whose equality entries are $0$ and whose active inequality entries are $-1$, set $w=M^T(MM^T)^{-1}r$. Then $Mw=r$, so $Dh(x)w=0$ and $Dg_i(x)w=-1<0$ for every active $i$. This is MFCQ. [F1, given, construct, algebra]

2.1 If $x$ is a local minimizer, [F2] now supplies at least one KKT pair $(\nu,\lambda)$. [F2, step 1.1, given]

3.1 Suppose $(\nu,\lambda)$ and $(\widehat\nu,\widehat\lambda)$ are two KKT pairs at $x$. Complementarity and strict negativity of each inactive $g_i(x)$ force both corresponding multipliers to be $0$. Subtracting the two stationarity equations leaves a linear combination of the equality gradients and active inequality gradients equal to $0$. LICQ makes every coefficient zero, hence $\nu=\widehat\nu$ and $\lambda=\widehat\lambda$. [F1, step 2.1, algebra] ∎
