---
id: fs-pcp-proofs-are-randomized-strings
kind: false-statement
title: "False: a PCP proof is itself a random string"
status: published
origin: pipeline
deps:
  - def-pcp-verifier-randomness-query-and-proof-length
  - def-pcp-class-with-completeness-and-soundness
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: counterexample
sources:
  scraped: []
  references:
    - title: "Irit Dinur, The PCP Theorem by Gap Amplification, §1.1, printed pp. 1–2"
      url: https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.1, Definition 18.1, printed pp. 353–354"
      url: https://theory.cs.princeton.edu/complexity/book.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Statement

False claim: in the PCP theorem the proof string must be sampled at random
separately on each verifier execution.

## Facts & Assumptions

[F1] For each fixed input and fixed proof, acceptance probability is over the
verifier's coins, with the same proof used on every coin string.
([[def-pcp-verifier-randomness-query-and-proof-length]])

[F2] A yes input has one fixed proof achieving completeness, while soundness
quantifies over every fixed proof for each no input.
([[def-pcp-class-with-completeness-and-soundness]])

## Refutation

**Given:** Let $K=\{\varepsilon\}\subseteq\{0,1\}^*$, where $\varepsilon$ is
the empty input string. Use proof alphabet $\Gamma=\{0,1\}$ and proof length
$L(n)=1$.

1.1 Define $V$ to toss one unbiased coin bit, query the sole proof symbol $\pi_1$, and accept exactly when $x=\varepsilon$ and $\pi_1=1$; it ignores the coin. This is a uniform polynomial-time nonadaptive verifier with $r(n)=q(n)=L(n)=1$. For the yes input $\varepsilon$, the fixed proof $\pi=1$ is accepted on both coin outcomes. For every no input $x\ne\varepsilon$, every fixed proof is rejected on both outcomes. Hence $K\in\operatorname{PCP}(1,1;1,0)$ by [F2]. [F1, F2, given, construct]

2.1 In this explicit PCP, $\pi=1$ is the same deterministic one-bit string for both verifier coin outcomes; only the verifier tosses a random bit, and that bit is unused. Thus the proof need not be resampled on each execution, contradicting the claim. [F1, step 1.1, algebra, discharge-construct] ∎
