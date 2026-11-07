---
dependency_level: 5
id: lem-perfect-base-witt-teichmuller-expansions-and-units
kind: lemma
title: Teichmuller expansions and units over a perfect base
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-p-typical-witt-vectors-of-a-perfect-ring
- lem-integral-p-typical-witt-coordinate-operations
- lem-witt-frobenius-and-verschiebung-coordinate-identities
- lem-perfect-base-witt-frobenius-and-p-adic-completeness
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: Joseph Rabinoff, The theory of Witt vectors, sections 2–5; p-typical coordinate
      specialization
    url: https://arxiv.org/abs/1409.7445
---

## Statement

For a perfect characteristic-$p$ ring $R$, put $[a]=(a,0,0,\ldots)\in W_p(R)$. This is multiplicative and every Witt vector $x=(a_0,a_1,\ldots)$ has the unique convergent expansion
$$x=\sum_{n\ge0}V^n[a_n]=\sum_{n\ge0}p^n[a_n^{p^{-n}}].$$
Equivalently every $x$ has a unique expansion $\sum_{n\ge0}p^n[b_n]$ with $b_n\in R$. A vector is a unit if and only if its first coordinate is a unit in $R$. All these assertions are choice-free.

## Statement references

[[def-p-typical-witt-vectors-of-a-perfect-ring]]

[[lem-integral-p-typical-witt-coordinate-operations]]

[[lem-witt-frobenius-and-verschiebung-coordinate-identities]]

[[lem-perfect-base-witt-frobenius-and-p-adic-completeness]]

## Facts & Assumptions

**Given:** The rings, prime and hypotheses in the Statement.

[F1] [[def-p-typical-witt-vectors-of-a-perfect-ring]] supplies the notation and underlying tuple set only; no structural conclusion whose proof is being supplied is assumed.

[F2] [[lem-integral-p-typical-witt-coordinate-operations]] supplies its stated interface.

[F3] [[lem-witt-frobenius-and-verschiebung-coordinate-identities]] supplies its stated interface.

[F4] [[lem-perfect-base-witt-frobenius-and-p-adic-completeness]] supplies its stated interface.

## Proof

1.1 The ghosts of $[a][b]$ are $(ab)^{p^n}$, those of $[ab]$, so universal polynomial identities as in [F2] prove $[a][b]=[ab]$. For any $m$, the ghosts through $m$ of $\sum_{n=0}^m V^n[a_n]$ are exactly $w_j(a_0,\ldots,a_j)$: the term $n\le j$ contributes $p^na_n^{p^{j-n}}$ and later terms contribute zero. Universally injective truncated ghosts prove equality of the first $m+1$ coordinates, and specialization proves this over $R$. [given, F2, F3, algebra]

2.1 By [F4], vanishing of the first $m+1$ coordinates is precisely divisibility by $p^{m+1}$, so the finite identities in step 1.1 converge to $x$. Since $F[a]=[a^p]$ and $V=pF^{-1}$, the same identity gives $V^n[a_n]=p^n[a_n^{p^{-n}}]$. Uniqueness of coordinates and unique roots prove uniqueness of both displayed expansions. Alternatively the $b_n$ are recovered by repeatedly subtracting the Teichmüller lift of the residue and dividing by $p$, each operation being unique. [given, F3, F4, step 1.1, algebra]

3.1 Reduction sends a unit to a unit. Conversely, if $a_0$ is a unit, then $x[a_0^{-1}]=1+pz$ for a unique $z$ by [F4]. The geometric series $\sum_{j\ge0}(-pz)^j$ converges by [F4] and multiplies $1+pz$ to $1$, as follows from the finite geometric identity and passage to the separated limit. Multiplying by $[a_0^{-1}]$ gives an inverse of $x$. These constructions use unique recursions, not a choice of countably many lifts. [given, F4, step 1.1, step 2.1, algebra] ∎
