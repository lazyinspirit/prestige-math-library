---
id: thm-cycle-index-of-dihedral-group
kind: theorem
title: "The cycle index of the dihedral group D_{2n}"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-cycle-index-of-cyclic-group,
       def-cycle-index-of-a-permutation-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: parity-split
verification:
  audited: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Ben Lynn, Polya Theory: The Cycle Index Polynomial"
      url: "https://theory.stanford.edu/~blynn/polya/cycleindex.html"
    - title: "Applied Combinatorics, Section 15.5: Applications of Pólya's Enumeration Formula"
      url: "https://appliedcombinatorics.org/book/s_polya_apps.html"
pipeline_run: null
---

## Statement

Let $D_{2n}$ act on the vertices of a labelled $n$-gon, with $n \ge 1$.

If $n$ is odd, then

$$Z(D_{2n})=\frac{1}{2}Z(C_n)+\frac{1}{2}s_1s_2^{(n-1)/2}.$$

If $n$ is even, then

$$Z(D_{2n})=\frac{1}{2}Z(C_n)+\frac{1}{4}\left(s_1^2s_2^{(n-2)/2}+s_2^{n/2}\right).$$

## Facts & Assumptions

**Given:** an integer $n \ge 1$ and the full symmetry action of $D_{2n}$ on a labelled $n$-gon.

[L1] The rotations contribute the cyclic-group cycle index $Z(C_n)$ ([[thm-cycle-index-of-cyclic-group]]).

## Proof

**Proof technique:** cases.

1.1 The subgroup of rotations has $n$ elements. Since $D_{2n}$ has $2n$ elements, the total rotational contribution to $Z(D_{2n})$ is $(1/2)Z(C_n)$ by [L1]. [L1]

2.1 Suppose $n$ is odd. Every reflection fixes exactly one vertex and swaps the remaining $n-1$ vertices in $(n-1)/2$ transpositions. Thus each reflection contributes the monomial $s_1s_2^{(n-1)/2}$. There are $n$ reflections, so after division by $2n$ their total contribution is $(1/2)s_1s_2^{(n-1)/2}$. [step 1.1, algebra]

2.2 Suppose $n$ is even. Then there are two reflection types. The $n/2$ reflections through opposite vertices fix two vertices and swap the remaining $n-2$ vertices in $(n-2)/2$ transpositions, so they contribute $s_1^2s_2^{(n-2)/2}$. The $n/2$ reflections through opposite edges fix no vertex and consist of $n/2$ transpositions, so they contribute $s_2^{n/2}$. Dividing the sum of these $n$ reflection monomials by $2n$ gives the contribution $\frac{1}{4}\left(s_1^2s_2^{(n-2)/2}+s_2^{n/2}\right)$. [step 1.1, algebra]

3.1 Combine step 1.1 with step 2.1 in the odd case and with step 2.2 in the even case. This yields the two displayed formulas. [step 1.1, step 2.1, step 2.2] ∎
