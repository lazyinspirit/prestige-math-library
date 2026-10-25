---
id: thm-regular-cofinality-strata-are-stationary
kind: theorem
title: "Regular cofinality strata are stationary"
status: published
origin: pipeline
deps: ["def-cofinality-strata-and-stationary-trace", "thm-cofinality-basics", "thm-transfinite-recursion"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct argument
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lietz, Proposition 5.13, p.42"
      url: https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf
    - title: "Vasey, Example 14.13(6), p.82"
      url: https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf
---

## Statement

In ZFC, if $\lambda$ is an infinite regular cardinal with $\lambda<\operatorname{cf}(\theta)$, then $E^\theta_\lambda$ is stationary in $\theta$.

## Facts & Assumptions

[F1] [[def-cofinality-strata-and-stationary-trace]]: The stratum consists of ordinals with exactly the specified cofinality.

[F2] [[thm-cofinality-basics]]: Cofinality bounds the length of cofinal sequences; infinite cofinalities are regular cardinals.

[F3] [[thm-transfinite-recursion]]: A specified least-next and limit rule recurses along lambda.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Given a club $C\subseteq\theta$, define a strictly increasing sequence $(c_\xi)_{\xi<\lambda}$ in $C$: start at $\min C$, take the least greater C point at successors, and at nonzero limits take the supremum. Every such supremum is below theta since its index is below $\operatorname{cf}(\theta)$, and closure places it in C. Likewise $\delta=\sup_{\xi<\lambda}c_\xi<\theta$ belongs to C. [F2, F3]

2.1 This sequence gives $\operatorname{cf}(\delta)\le\lambda$. If a cofinal subset $B\subseteq\delta$ had size $\mu<\lambda$, assign to each $b\in B$ the least $\xi<\lambda$ with $b<c_\xi$. These indices would be unbounded in lambda: a bound would bound B below delta. Regularity of lambda rules this out. Therefore $\operatorname{cf}(\delta)=\lambda$, so C meets the stratum. Since C was arbitrary the stratum is stationary. [F1, F2, step 1.1] ∎
