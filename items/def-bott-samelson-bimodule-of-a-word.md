---
id: def-bott-samelson-bimodule-of-a-word
kind: definition
title: "The Bott–Samelson bimodule of a word"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-type-a-soergel-bimodule-for-a-simple-reflection, lem-type-a-soergel-generators-are-finite-free-on-both-sides]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Elias–Williamson, Soergel Calculus, §§3, 5–7"
      url: "https://arxiv.org/pdf/1309.0865"
    - title: "Libedinsky, Gentle Introduction to Soergel Bimodules I, §§2–5"
      url: "https://arxiv.org/pdf/1702.00039"
verification:
  precheck: n/a
---

## Definition

Let $R$ and the generators $B_i=R\otimes_{R^{s_i}}R(1)$ be as in
[[def-type-a-soergel-bimodule-for-a-simple-reflection]]. For a word
$\underline i=(i_1,\ldots,i_r)$ in the simple reflections, i.e. a sequence with
$1\le i_k\le n-1$, put
$$B_{\underline i}:=B_{i_1}\otimes_RB_{i_2}\otimes_R\cdots\otimes_RB_{i_r},$$
the iterated balanced tensor product of graded $(R,R)$-bimodules, carrying the
total internal grading, the outer left action on the first factor and the outer
right action on the last factor. For the empty word $r=0$ we put
$B_{\emptyset}:=R$, the regular graded $(R,R)$-bimodule; this is the unit of the
tensor product, so the two conventions agree and $B_{(i)}=B_i$. The word
$\underline i$ is **reduced** when $s_{i_1}\cdots s_{i_r}\in S_n$ has length $r$.
The notation $B_{\underline i}$ retains the chosen word even when that word is
reduced: two reduced words for the same $w$ can give nonisomorphic
Bott–Samelson bimodules. The word-independent indecomposable summand indexed by
$w$ is constructed later; it is not the whole $B_{\underline i}$ in general.
The freeness of each $B_{\underline i}$ on both sides is proved in
[[lem-type-a-soergel-generators-are-finite-free-on-both-sides]]. Every element
of a Bott–Samelson product is a finite sum of tensors of
homogeneous elements, with degrees adding.

**Trivial conventions.** If $n\le1$ the empty word is the only word and only
$B_{\emptyset}=R$ is present. The word itself is never claimed to be visible from
the isomorphism type of $B_{\underline i}$: two words related by a Coxeter braid
move need not give isomorphic bimodules, and the rank-two decompositions of the
adjacent triple products are the point where this is computed on this page.
