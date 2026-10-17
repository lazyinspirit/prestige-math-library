---
id: ex-box-muller-finite-midpoint-tail
kind: example
title: "Eight-bit Box–Muller has a finite radial cutoff"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - thm-natural-logarithm-laws
  - thm-of-square-roots
  - lem-of-square-monotone
  - thm-midpoint-bit-stream-coupling-and-error
  - lem-box-muller-product-density-and-radius-moment
  - def-countable-choice
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Luc Devroye, Non-Uniform Random Variate Generation, Chapter V §4.4"
      url: "https://luc.devroye.org/chapter_five.pdf"
    - title: "E. M. Raz, Lecture Notes in Probability, Chapter 5, Exercise 5.2"
      url: "https://ma.huji.ac.il/~razk/Teaching/LectureNotes/LectureNotesProbability.pdf"
---

## Example

For $b=8$, a midpoint uniform is at least $1/512=2^{-9}$. The exact real-arithmetic Box–Muller reference transform therefore has radius at most $\sqrt{18\log2}$. Its radial target law assigns probability $1/512$ beyond that radius, while the finite midpoint grid never reaches it.

## Facts & Assumptions

**Given:** Two independent 8-bit midpoint uniforms and the exact Box–Muller map used as a mathematical reference.

[F1] The smallest $b$-bit midpoint is $2^{-b-1}$. [[thm-midpoint-bit-stream-coupling-and-error]]

[F2] Under the ideal Box–Muller transform, $\mathbb P(R>r)=e^{-r^2/2}$. [[lem-box-muller-product-density-and-radius-moment]]

[F3] The natural logarithm is increasing on positive reals. [[thm-natural-logarithm-laws]]

[F4] A square root is nonnegative and squares to its argument; squaring is order-preserving on nonnegatives. [[thm-of-square-roots]], [[lem-of-square-monotone]]

[A1] The exact Box–Muller change-of-variables supplier assumes Countable Choice. [[def-countable-choice]]

## Verification

1.1 For $b=8$, $2^b=256$ and the smallest midpoint is $(0+1/2)/256=1/512=2^{-9}$ by [F1]. [given, F1, algebra]

2.1 For $0<u\le v\le1$, [F3] gives $0\le-2\log v\le-2\log u$. Their nonnegative square roots satisfy $\sqrt{-2\log v}\le\sqrt{-2\log u}$ by [F4]; thus $r(u)=\sqrt{-2\log u}$ is nonincreasing, and the largest radius occurs at $u=2^{-9}$ and equals $\sqrt{18\log2}$. By [F2], the ideal radial tail beyond it is $e^{-18\log2/2}=2^{-9}=1/512$, while no finite midpoint input has a larger radius. [F1, F2, F3, F4, A1, step 1.1, algebra] ∎
