---
id: fs-erdos-ko-rado-without-the-ground-set-bound
kind: false-statement
title: "False: the Erdős-Ko-Rado bound holds without the hypothesis $n\\ge 2k$"
status: published
origin: session
deps: [thm-erdos-ko-rado, def-binomial-coefficient]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-07-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Fox, MIT MAT 307, Lecture 12: Erdős-Ko-Rado by Katona's method"
      url: "https://math.mit.edu/~fox/MAT307-lecture12.pdf"
pipeline_run: null
---

## Statement

For every $1\le k<n$, every intersecting family of $k$-subsets of an
$n$-element set has cardinality at most $\binom{n-1}{k-1}$.

## Facts & Assumptions

**Given:** A three-element set $A$ and the family $\mathcal F=[A]^2$ of all its two-element subsets.

[F1] $\binom nk$ is the cardinality of the family of $k$-subsets of an $n$-element set ([[def-binomial-coefficient]]).

[L1] The Erdős-Ko-Rado theorem gives the star bound only under the hypothesis $1\le k$ and $n\ge2k$ ([[thm-erdos-ko-rado]]).

## Refutation

**Proof technique:** direct.

1.1 Any two members of $\mathcal F$ intersect, since two disjoint two-element subsets would require at least four elements while $|A|=3$. Thus $\mathcal F$ is intersecting. [given]

1.2 The family has cardinality $\binom32=3$, while the claimed bound is $\binom21=2$. [given, F1, algebra]

2.1 Hence the proposed bound fails at $k=2$, $n=3$, exactly where $k<n<2k$ and the hypothesis $n\ge2k$ of [L1] is absent. [step 1.1, step 1.2, L1] ∎
