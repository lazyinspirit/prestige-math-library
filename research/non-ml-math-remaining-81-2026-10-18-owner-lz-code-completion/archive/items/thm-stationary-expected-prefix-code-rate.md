---
id: thm-stationary-expected-prefix-code-rate
kind: theorem
title: "Expected lossless prefix-code rate for stationary sources"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - thm-stationary-entropy-rate-limit
  - lem-prefix-code-entropy-bounds
  - def-finite-block-information-and-entropy
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; finite-alphabet sums and code constructions are explicit, and cited measure-theoretic results retain their stated hypotheses."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
---
## Statement

For every stationary finite-alphabet source, the optimal expected prefix-code length for X^n divided by n converges to the entropy rate.

## Facts & Assumptions

**Given:** A stationary finite-alphabet source, its length-$n$ block entropy $H_n$, and the infimum $L_n^*$ of expected lengths among binary prefix codes for positive-probability blocks.

[F1] [[def-finite-block-information-and-entropy]]: $H_n$ is the entropy of the finite block law.

[F2] [[lem-prefix-code-entropy-bounds]]: for every finite source, $H_n\le L_n^*<H_n+1$ bit.

[F3] [[thm-stationary-entropy-rate-limit]]: $H_n/n\to h$.

## Proof

**Given:** The source, code class and entropy conventions [F1]–[F3].

1.1 Apply [F2] to each finite block law: $H_n\le L_n^*<H_n+1$. The lower bound includes every finite prefix code; the upper bound is attained within one bit by a Shannon code on the positive-probability support. [F1, F2, given]

1.2 Divide by $n$ and use [F3]. Since $1/n\to0$, both bounds converge to $h$, so $L_n^*/n\to h$. No ergodicity is needed because the argument uses only stationary block entropies. [F2, F3, step 1.1, algebra]

1.3 If the source is deterministic, then $H_n=0$ and the sole positive-probability block can be assigned the empty codeword; the rate is zero. For all other cases the same one-bit additive bound applies. [F1, F2, step 1.2, algebra] ∎
