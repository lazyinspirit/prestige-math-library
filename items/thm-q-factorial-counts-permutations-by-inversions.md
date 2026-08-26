---
id: thm-q-factorial-counts-permutations-by-inversions
kind: theorem
title: "The inversion generating function of $S_n$ is $[n]_q!$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-q-integer-q-factorial-and-q-multinomial, thm-lehmer-code-is-a-bijection, def-inversions-inversion-number-and-sign]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard P. Stanley, Enumerative Combinatorics, Volume 1, second edition"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
    - title: "Felix Gotti, MIT 18.211 Combinatorial Analysis, Lecture 5"
      url: "https://math.mit.edu/~fgotti/docs/Courses/C.%20Combinatorial%20Analysis/5.%20Permutation%20Inversions%20and%20q-Binomials/Permutation%20Inversions%20and%20q-Binomials.pdf"
pipeline_run: null
---

## Statement

For every $n \in \mathbb{N}$,

$$\sum_{\sigma \in S_n} q^{\operatorname{inv}(\sigma)} = [n]_q!.$$

## Facts & Assumptions

**Given:** A natural number $n$.

[L1] The Lehmer code is a bijection $S_n \to \prod_{i=1}^{n}\{0,\dots,i-1\}$ ([[thm-lehmer-code-is-a-bijection]]).

[L2] The inversion number is $\operatorname{inv}(\sigma)=|\operatorname{Inv}(\sigma)|$ ([[def-inversions-inversion-number-and-sign]]).

## Proof

**Proof technique:** constructive.

1.1 For $\sigma \in S_n$ with Lehmer code $L(\sigma)=(\ell_1,\dots,\ell_n)$, the inversion number is $\operatorname{inv}(\sigma)=\ell_1+\cdots+\ell_n$: the component $\ell_i$ counts exactly the inversions whose left entry is the position $n-i$. [L2, algebra]

2.1 By [L1] and step 1.1, $\sum_{\sigma \in S_n} q^{\operatorname{inv}(\sigma)} = \sum_{(\ell_1,\dots,\ell_n)} q^{\ell_1+\cdots+\ell_n} = \prod_{i=1}^{n}\sum_{j=0}^{i-1} q^j = \prod_{i=1}^{n}[i]_q = [n]_q!$. [step 1.1, L1, algebra]

3.1 This is the claimed generating function identity. At $n=0$, both sides are $1$. [step 2.1] ∎
