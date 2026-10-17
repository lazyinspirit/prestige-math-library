---
id: lem-unit-interval-lebesgue-gauss-data-valid
kind: lemma
title: Lebesgue measure on the unit interval supplies Gaussian moment data
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-gauss-moment-data
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - def-integrable-real-and-complex-functions-and-their-integrals
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - def-countable-choice
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: John A. Gubner, Gaussian Quadrature and the Eigenvalue Problem, §§2–5, 2020
      url: https://gubner.ece.wisc.edu/gaussquad.pdf
    - title: "MATH 373 Lecture Notes, Lecture 14: Gaussian Quadrature, §§10.2–10.5"
      url: https://sites.math.rutgers.edu/~falk/math373/lecture14.pdf
---

## Statement

Assume Countable Choice. For every integer $M\ge1$, Lebesgue measure on the relative Borel space $[0,1]$ is Gaussian quadrature moment data of order $2M$ in the sense of [[def-gauss-moment-data]].

## Facts & Assumptions

**Given:** An integer $M\ge1$ and Lebesgue measure $\lambda$ on $[0,1]$.

[F1] [[thm-lebesgue-measure-of-a-box-of-every-kind]]: $\lambda([0,1])=1$, and every nonempty relative interval neighborhood in $[0,1]$ has positive measure equal to its length.

[F2] [[def-integrable-real-and-complex-functions-and-their-integrals]] and [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: if $0\le g\le1$ on $[0,1]$, then $g$ is integrable and $0\le\int g\,d\lambda\le1$.

[F3] [[def-gauss-moment-data]]: order-$2M$ data require a finite positive measure whose relative support contains at least $M+1$ points and whose absolute moments through degree $2M$ are finite.

[A1] Countable Choice, required by [F1] for the Lebesgue interval-measure theorem.

## Proof

1.1 The measure is finite and positive because [F1] under [A1] gives $\lambda([0,1])=1$. Every $x\in[0,1]$ belongs to the relative support: any relative open neighborhood of $x$ contains a relative interval of positive length, including when $x=0$ or $x=1$, so its measure is positive by [F1]. Thus the support contains the $M+1$ distinct points $0,1/M,2/M,\ldots,1$, as required in [F3]. [A1, F1, F3, construct]

2.1 For each integer $0\le k\le2M$, the function $x\mapsto|x|^k$ is continuous and satisfies $0\le|x|^k\le1$ on $[0,1]$ (with $|x|^0=1$). By [F2] it is integrable and its integral is at most one. These finite moments and step 1.1 verify every condition in [F3], proving the assertion. [F1, F2, F3, step 1.1, algebra] ∎