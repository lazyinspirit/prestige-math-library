---
dependency_level: 4
id: lem-choice-free-norm-equivalence-over-finite-residue-local-field
kind: lemma
title: "Choice-free norm equivalence over a finite-residue local field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-normed-vector-space-over-an-absolutely-valued-field
justified_by: []
proof_strategy: direct
axiom_use: "ZF; a finite ordered residue representative set and deterministic digit recursion replace arbitrary approximation-sequence choices."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Brian Conrad, Ostrowski for number fields, \u00a7\u00a75\u20136; finite-residue compactness specialization below"
      url: "https://math.stanford.edu/~conrad/676Page/handouts/ostrowski.pdf"
    - title: "I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, second edition, Chapter I \u00a75 and Chapter III \u00a7\u00a71\u20134"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
verification: {}
---

## Statement

Let $K$ be a nonarchimedean local field with finite residue field. Every norm on a finite-dimensional $K$-vector space is equivalent to the maximum coordinate norm in any basis. Such a normed space is complete, and each of its linear subspaces is closed. These assertions require no choice principle beyond ZF.

## Statement references

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[def-normed-vector-space-over-an-absolutely-valued-field]]

## Facts & Assumptions

**Given:** The data in the Statement.

[F1] The field has a surjective integer valuation, a uniformizer, finite residue field, and is complete. [[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[F2] A norm is positive away from zero, satisfies the triangle inequality, and satisfies $|ax|=|a|_K|x|$. [[def-normed-vector-space-over-an-absolutely-valued-field]]

## Proof

**Given:** The data and conventions above.

1.1 Fix a uniformizer $\pi$ and an ordered set $S\subset\mathcal O_K$ containing exactly one representative of each residue class, including $0$. This uses only finitely many choices. Each $x\in\mathcal O_K$ has a unique digit sequence $s_j\in S$: set $x_0=x$, take the unique $s_j$ with $x_j-s_j\in\pi\mathcal O_K$, and put $x_{j+1}=(x_j-s_j)/\pi$. Thus $x=\sum_{j\ge0}s_j\pi^j$. Recursion is by a single-valued function; no sequence of unspecified choices is used. [F1, given, construct]

2.1 For each fixed finite $d$, the space $\mathcal O_K^d$ in the coordinate maximum metric is compact in ZF. Indeed, its balls specified by the first $n$ digit vectors form a finite branching tree, with children ordered by the fixed ordering of $S^d$. If an open cover had no finite subcover, the root ball would be bad, where bad means not finitely coverable by that cover. A bad ball has a bad child, since it has finitely many children. Recursively take the least bad child. The resulting digit vectors determine a limit point by [F1], coordinate by coordinate. An element of the cover containing that point contains some sufficiently small digit ball on the path; that ball is coverable by one element, a contradiction. The case $d=0$ is the one-point space. [F1, step 1.1, construct]

3.1 For a basis $b_1,\ldots,b_d$ with $d>0$, put $|a|_\infty=\max_i|a_i|_K$ and $N(a)=|\sum a_i b_i|$. The triangle inequality gives $N(a)\le C|a|_\infty$ with $C=\sum_i|b_i|$. Also $|N(a)-N(a')|\le N(a-a')\le C|a-a'|_\infty$, so $N$ is continuous. The coordinate unit sphere $T=\{a:|a|_\infty=1\}$ is a closed subset of $\mathcal O_K^d$ and hence compact by step 2.1. The open sets $\{a\in T:N(a)>1/n\}$ for positive integers $n$ cover $T$, because $N$ is positive on it. A finite subcover gives a positive lower bound $c$ for $N$ on $T$. For each nonzero $a$, its maximum coordinate absolute value is a power of $|\pi|_K$; scaling by the inverse of a coordinate with that absolute value gives a point of $T$. Consequently $c|a|_\infty\le N(a)\le C|a|_\infty$. [F1, F2, step 2.1, algebra]

4.1 For a Cauchy sequence in the norm, step 3.1 makes each coordinate a Cauchy sequence in $K$. Its unique coordinate limits, a finite tuple, give convergence in the norm by the upper bound. Thus the space is complete. For a subspace $W$, extend a finite basis of $W$ to a basis of the ambient space. This is a finite-dimensional algebraic construction. In those coordinates, $W$ is the common zero set of finitely many continuous coordinate maps, and is therefore closed by step 3.1. The zero space and zero subspace satisfy the same conclusions directly. [F1, step 3.1, algebra] ∎ 