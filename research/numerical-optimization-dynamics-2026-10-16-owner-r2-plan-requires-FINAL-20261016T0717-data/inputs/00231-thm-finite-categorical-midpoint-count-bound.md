---
id: thm-finite-categorical-midpoint-count-bound
kind: theorem
title: "Midpoint categorical frequencies have at most one-grid-cell error"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-finite-categorical-inverse-cdf
  - thm-midpoint-bit-stream-coupling-and-error
  - def-countable-choice
  - def-dependent-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Luc Devroye, Non-Uniform Random Variate Generation, Chapter III §2, discrete inversion"
      url: "https://luc.devroye.org/chapter_three.pdf"
    - title: "Luc Devroye, Non-Uniform Random Variate Generation, Chapter XV §1, the random-bit model"
      url: "https://luc.devroye.org/chapter_fifteen.pdf"
---

## Statement

For the finite categorical procedure of [[alg-finite-categorical-inverse-cdf]], ideal uniform input gives exact probability $p_i$ to outcome $i$. For $b$-bit midpoint input, each cumulative threshold frequency differs from its target $C_i$ by at most $2^{-b-1}$, and each individual outcome frequency differs from $p_i$ by at most $2^{-b}$.

## Facts & Assumptions

**Given:** A finite probability vector $(p_1,\ldots,p_r)$ and either ideal uniform input or the $N=2^b$ midpoint grid.

[F1] The midpoint input is uniform on $\{(k+1/2)/N:0\le k<N\}$. [[thm-midpoint-bit-stream-coupling-and-error]]

[F2] The categorical procedure returns the least index whose cumulative probability exceeds the input threshold. [[alg-finite-categorical-inverse-cdf]]

[A1] When the midpoint law is realized by the countable fair-bit product in [F1], that source assumes Countable Choice and Dependent Choice; the finite counting argument is conditional on the stated grid law. [[def-countable-choice]], [[def-dependent-choice]]

## Proof

1.1 With ideal $U$, outcome $i$ is returned exactly when $C_{i-1}<U\le C_i$, an interval of length $C_i-C_{i-1}=p_i$. Its uniform probability is the interval length $C_i-C_{i-1}=p_i$, so the ideal law is exactly the specified categorical law. [given, F2, algebra]

1.2 Put $N=2^b$. For any threshold $C\in[0,1]$, the number of midpoints $(k+1/2)/N\le C$ is $\min(N,\max(0,\lfloor NC+1/2\rfloor))$. Thus its normalized count differs from $C$ by at most $1/(2N)$. Applying this to $C_i$ and $C_{i-1}$, the frequency of outcome $i$ is the difference of their cumulative frequencies, so its error from $p_i$ is at most $1/N=2^{-b}$. [F1, F2, A1, algebra]

2.1 The cumulative and individual bounds in step 1.2 give the stated finite-grid error, while step 1.1 proves the ideal-input clause. [step 1.1, step 1.2] ∎
