---
id: ex-nonstationary-block-entropy-rate-oscillation
kind: example
title: "A nonstationary independent source with no entropy-rate limit"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-finite-block-information-and-entropy
  - def-general-process-information-rate
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; finite-alphabet sums and code constructions are explicit, and cited measure-theoretic results retain their stated hypotheses."
provenance:
  statement: ai-altered
  proof: ai-generated
---
## Statement

Constructs independent binary coordinates whose block entropy per symbol has subsequences tending to zero and one by alternating super-exponentially long deterministic and fair-coin blocks.

## Facts & Assumptions

**Given:** Independent binary variables $(X_j)_{j\ge0}$ and finite-block entropy as in [[def-finite-block-information-and-entropy]].

[F1] [[def-finite-block-information-and-entropy]]: entropy is computed from the finite joint law.

[F2] [[def-general-process-information-rate]]: a general process need not be stationary, and its block information rate is defined by the limit of $H_n/n$ when it exists.

## Proof

**Given:** The independent coordinates and block convention below.

1.1 Partition the coordinates into consecutive blocks of lengths $L_j=2^{2^j}$ for $j\ge1$. In odd-numbered blocks set $X_i=0$ deterministically; in even-numbered blocks let the $X_i$ be fair independent bits. Independence implies
$$H(X_0^{N-1})=\sum_{i=0}^{N-1}H(X_i),$$
so the entropy contribution is zero on odd blocks and one bit per coordinate on even blocks. [F1, given, algebra]

1.2 Let $N_j=\sum_{r=1}^jL_r$ be the endpoint of block $j$. Since $L_j/\sum_{r<j}L_r\to\infty$, the previous blocks contribute a vanishing fraction of $N_j$. Therefore $H(X_0^{N_j-1})/N_j\to0$ along odd $j$ and tends to $1$ along even $j$. The block entropy per symbol has no limit, so the process has no entropy rate in the sense of [F2]. [F2, step 1.1, algebra] ∎
