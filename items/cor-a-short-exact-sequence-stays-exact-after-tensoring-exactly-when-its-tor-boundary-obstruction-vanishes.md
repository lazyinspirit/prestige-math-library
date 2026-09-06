---
id: cor-a-short-exact-sequence-stays-exact-after-tensoring-exactly-when-its-tor-boundary-obstruction-vanishes
title: "The Tor boundary is exactly the obstruction to left exactness after tensoring a fixed short exact sequence"
kind: corollary
status: published
origin: pipeline
deps: ["thm-long-exact-tor-sequence-in-the-left-module-variable"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

For $0\to A\to B\to C\to0$ of left modules and a right module $N$, the sequence $0\to N\otimes A\to N\otimes B\to N\otimes C\to0$ is exact exactly when the boundary map $\operatorname{Tor}_1^R(N,C)\to N\otimes_RA$ is zero.

## Proof

**Given:** the long exact Tor sequence for the displayed short exact sequence.

1.1 Its relevant segment is $\operatorname{Tor}_1(N,C)\xrightarrow\partial N\otimes A\to N\otimes B\to N\otimes C\to0$. [given]

2.1 Exactness already holds at the last two positions by right exactness; the kernel at $N\otimes A$ is $\operatorname{im}\partial$. [step 1.1, algebra]

3.1 Thus injectivity of $N\otimes A\to N\otimes B$, and hence exactness of the whole tensor sequence, is equivalent to $\partial=0$. [step 2.1, algebra] ∎
