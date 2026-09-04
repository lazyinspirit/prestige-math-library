---
id: ex-the-empty-and-zero-dimensional-morse-cases
kind: example
title: "The empty and zero-dimensional Morse cases"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [rem-zero-dimensional-morse-convention]
justified_by: []
aliases: []
landmark: false
proof_strategy: boundary check
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed."
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
---

## Example

The Morse definitions behave as expected on the empty manifold and on
$0$-manifolds.

## Facts & Assumptions

**Given:** A smooth function $f:M\to\mathbb R$ on either the empty manifold or a
$0$-manifold.

[F1] On a $0$-manifold every point is a nondegenerate critical point of index
$0$, while the empty $0$-manifold has no critical points
([[rem-zero-dimensional-morse-convention]]).

## Verification

**Proof technique:** boundary check.

1.1 If $M=\varnothing$, then there are no points to test. So $f$ has no critical points, and the Morse condition is vacuous. [F1, given]

1.2 If $M$ is a nonempty $0$-manifold, [F1] says that every point of $M$ is a nondegenerate critical point of index $0$. Hence every smooth function on $M$ is Morse. [F1, given]

2.1 In the same $0$-dimensional case, excellence is exactly the condition that distinct points have distinct values, again by [F1]. [F1, step 1.2]

3.1 Therefore the empty and zero-dimensional boundary cases agree with the stated Morse conventions. [step 1.1, step 1.2, step 2.1] ∎
