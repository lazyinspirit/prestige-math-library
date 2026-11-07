---
id: def-truncated-mobius-function
kind: definition
title: "Truncated Möbius Function at a Real Cutoff"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: [def-number-theoretic-mobius-function]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "D. H. J. Polymath, New equidistribution estimates of Zhang type, and bounded gaps between primes"
      url: "https://arxiv.org/pdf/1402.0811v3"
      locator: "§3, Lemma 3.3, printed pp. 16–17"
    - title: "Dimitris Koukoulopoulos, The Distribution of Prime Numbers"
      url: "https://dms.umontreal.ca/~koukoulo/documents/publications/primes.pdf"
      locator: "Chapter 23, Exercise 23.5"
---

## Definition

For a real cutoff $V\ge1$, the truncated number-theoretic Möbius function is the arithmetic function
$$\mu_{\le V}(n):=\begin{cases}\mu(n),&1\le n\le V,\\0,&n>V,\end{cases}$$
where $\mu$ is the number-theoretic Möbius function and $n$ ranges over positive integers. Its complementary tail is $\mu_{>V}:=\mu-\mu_{\le V}$; it is supported on integers strictly larger than $V$.

## Definition references

[[def-number-theoretic-mobius-function|The number-theoretic Möbius function $\\mu(n)$ from prime factorisation]]

[Polymath8a, Lemma 3.3](https://arxiv.org/pdf/1402.0811v3)

[Koukoulopoulos, Chapter 23, Exercise 23.5](https://dms.umontreal.ca/~koukoulo/documents/publications/primes.pdf)
