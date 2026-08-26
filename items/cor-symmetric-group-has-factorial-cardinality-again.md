---
id: cor-symmetric-group-has-factorial-cardinality-again
kind: corollary
title: "The Lehmer code gives $|S_n|=n!$ again"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-lehmer-code-is-a-bijection, thm-product-rule, def-factorial-and-falling-factorial]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Felix Gotti, MIT 18.211 Combinatorial Analysis, Lecture 5"
      url: "https://math.mit.edu/~fgotti/docs/Courses/C.%20Combinatorial%20Analysis/5.%20Permutation%20Inversions%20and%20q-Binomials/Permutation%20Inversions%20and%20q-Binomials.pdf"
pipeline_run: null
---

## Statement

For every $n \in \mathbb{N}$,

$$|S_n| = n!.$$

## Facts & Assumptions

**Given:** The Lehmer-code bijection $S_n \to \prod_{i=1}^{n}\{0,\dots,i-1\}$.

[L1] The Lehmer code is a bijection ([[thm-lehmer-code-is-a-bijection]]).

[L2] If $A$ and $B$ are finite then $|A \times B| = |A||B|$ ([[thm-product-rule]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $|S_n|$ equals the cardinality of $\prod_{i=1}^{n}\{0,\dots,i-1\}$. The $i$-th factor has cardinality $i$, so repeated use of [L2] shows that the whole product has cardinality $1\cdot 2\cdots n = n!$. [L1, L2, algebra]

2.1 Therefore $|S_n|=n!$. For $n=0$, both sides equal $1$ because the codomain is the empty product. [step 1.1] ∎
