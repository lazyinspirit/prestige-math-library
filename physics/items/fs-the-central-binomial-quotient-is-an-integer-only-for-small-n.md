---
id: fs-the-central-binomial-quotient-is-an-integer-only-for-small-n
kind: false-statement
title: "FALSE: the quotient $\\binom{2n}{n}/(n+1)$ is an integer only for small $n$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-one-more-than-n-divides-the-central-binomial-coefficient, cor-catalan-closed-formula, def-catalan-number, def-binomial-coefficient]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "D. Guichard, An Introduction to Combinatorics and Graph Theory, §3.5"
      url: "https://www.whitman.edu/mathematics/cgt_online/cgt.pdf"
pipeline_run: null
---

## Statement

**False claim:** the quotient

$$\frac{\binom{2n}{n}}{n+1}$$

is an integer only for small values of $n$.

## Facts & Assumptions

**Given:** a natural number $n$.

[L1] $(n+1)C_n=\binom{2n}{n}$ ([[cor-catalan-closed-formula]]).

[L2] $n+1$ divides $\binom{2n}{n}$ for every $n$ ([[cor-one-more-than-n-divides-the-central-binomial-coefficient]]).

## Refutation

**Proof technique:** direct.

1.1 The first values of the quotient are $1,1,2,5,14,42,132$ at $n=0,1,2,3,4,5,6$ respectively, so the quotient keeps producing integers beyond the first few cases. [L1]

2.1 More generally, [L1] rewrites the quotient as $C_n$ for every natural number $n$, and $C_n$ is a natural number by definition. So the quotient is an integer for every $n$, not merely for small ones. [L1, L2] ∎

## Remarks

- The point of the refutation is that the divisibility is proved by exhibiting a count. Once the quotient is $C_n$, no separate arithmetic argument is needed.
