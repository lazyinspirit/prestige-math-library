---
id: ex-kac-mean-return-to-a-half-circle
kind: example
title: Kac mean return to a half-circle under irrational rotation
deps: ["thm-kac-return-time-formula", "thm-circle-rotation-is-ergodic-iff-angle-is-irrational", "prop-countable-subsets-of-rn-are-lebesgue-null", "def-countable-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Sarig Theorem 1.7, specialization
      url: https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Example

Assume countable choice. Let $\alpha$ be irrational, let $R_\alpha$ act on the Lebesgue circle, and put $E=[0,1/2]$. Its first positive return time satisfies $\int_E r_E\,d\lambda=1$. On the recurrent core $E_\infty$ with normalized restricted probability $\lambda_E$, the mean return time is $\int_{E_\infty}r_E\,d\lambda_E=2$.

## Facts & Assumptions

[F1] For a positive-measure set in an ergodic probability system, Kac gives unnormalized mean one and normalized mean reciprocal to the set measure. [[thm-kac-return-time-formula]].

[F2] Irrational rotations are ergodic for Lebesgue probability. [[thm-circle-rotation-is-ergodic-iff-angle-is-irrational]].

[F3] Finite sets, including endpoints, are Lebesgue null. [[prop-countable-subsets-of-rn-are-lebesgue-null]].

## Verification

**Given:** Assume countable choice. Let $\alpha$ be irrational, let $R_\alpha$ act on the Lebesgue circle, and put $E=[0,1/2]$. Its first positive return time satisfies $\int_E r_E\,d\lambda=1$. On the recurrent core $E_\infty$ with normalized restricted probability $\lambda_E$, the mean return time is $\int_{E_\infty}r_E\,d\lambda_E=2$.

1.1 The set $E$ is Borel and is the disjoint union of $[0,1/2)$ and $\{1/2\}$. The first has length $1/2$ and the second is null by [F3], so $\lambda(E)=1/2>0$. By [F2] irrationality gives ergodicity of the Lebesgue probability system. All hypotheses of [F1] hold; applying its first conclusion yields $\int_E r_E\,d\lambda=1$. This uses the return time to the closed set $E$ as stated, so no unproved comparison between return times for different endpoint conventions is involved. [F1, F2, F3]

2.1 The recurrent core has restricted mass $\lambda(E_\infty)=\lambda(E)=1/2$ in [F1], and normalization divides restricted measure by $1/2$. The second conclusion of [F1] therefore gives $\int_{E_\infty}r_E\,d\lambda_E=1/(1/2)=2$. This is an average, not an assertion that all return times equal two. The unnormalized mean is one, and multiplying it by the normalization factor two gives the same answer. Countable choice is propagated from the Lebesgue ergodicity and endpoint-null suppliers [F2] and [F3]. [1.1, F1, F2, F3] ∎

