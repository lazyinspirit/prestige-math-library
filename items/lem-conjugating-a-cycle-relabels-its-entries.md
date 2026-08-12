---
id: lem-conjugating-a-cycle-relabels-its-entries
kind: lemma
title: 'Conjugating a cycle relabels each entry: $g(a_1\,\ldots\,a_k)g^{-1}=(g(a_1)\,\ldots\,g(a_k))$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-symmetric-group, def-permutation-support-disjoint-cycles-and-cycle-type]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Conjugacy Classes"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/conjclass.pdf"
pipeline_run: frontier-11
---

## Statement

For $g\in S_n$ and a cycle $c=(a_1\,a_2\,\ldots\,a_k)$,
$$gcg^{-1}=(g(a_1)\,g(a_2)\,\ldots\,g(a_k)).$$
For a $1$-cycle this says that a fixed point $a_1$ is relabelled as the fixed
point $g(a_1)$.

## Facts & Assumptions

**Given:** A permutation $g\in S_n$ and a cycle $c=(a_1\,\ldots\,a_k)$.

[F1] Permutation products act with the right factor first, and cycle notation records the successive images of the displayed entries ([[def-symmetric-group]]).

[F2] The support of a cycle is its set of moved entries; entries outside it are fixed ([[def-permutation-support-disjoint-cycles-and-cycle-type]]).

## Proof

**Proof technique:** direct.

1.1 For each $j$ modulo $k$, $(gcg^{-1})(g(a_j))=g(c(a_j))=g(a_{j+1})$. [F1]

1.2 If $y$ is outside $\{g(a_1),\ldots,g(a_k)\}$, then $g^{-1}(y)$ is outside the support of $c$, so [F2] gives $(gcg^{-1})(y)=y$. [F2, algebra]

2.1 Steps 1.1--1.2 describe exactly the cycle on the right, including the $k=1$ case. [F1, step 1.1, step 1.2] ∎
