---
dependency_level: 1
id: lem-milnor-symbol-anticommutativity-and-repeated-entry-identities
kind: lemma
title: "Milnor symbol antisymmetry and repeated entries"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-milnor-k-group-of-a-field
justified_by: []
proof_strategy: direct
axiom_use: "ZF; only finite choices for a fixed symbol or polynomial are made."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, second edition, Chapter IX \u00a7\u00a71\u20133; locally reconstructed arguments below"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
verification: {}
---

## Statement

For any field $F$, its Milnor symbols satisfy $\{a,-a\}=0$, $\{a,a\}=\{a,-1\}$ and $\{a,b\}=-\{b,a\}$. In every degree, transposing two entries changes the sign, and a repeated entry can be replaced by that entry and $-1$. The graded Milnor ring is graded anticommutative. Every symbol containing an entry $-1$ is killed by $2$. Field embeddings induce functorial homomorphisms of graded Milnor rings.

## Statement references

[[def-milnor-k-group-of-a-field]]

## Facts & Assumptions

**Given:** The objects in the Statement.

[F1] The Milnor groups are the tensor-symbol quotient by multilinearity and Steinberg relations; products concatenate entries. [[def-milnor-k-group-of-a-field]]

## Proof

**Given:** The data and conventions above.

1.1 Multilinearity makes a symbol with entry $1$ zero and makes inversion negate that entry. If $a\ne1$, expand $0=\{a^{-1},1-a^{-1}\}=-\{a,-1\}-\{a,1-a\}+\{a,a\}$. The middle term is zero, giving $\{a,a\}=\{a,-1\}$. If $a=1$ both sides are zero directly. Also $2\{a,-1\}=\{a,(-1)^2\}=0$, so $\{a,-a\}=\{a,-1\}+\{a,a\}=0$. [F1, given, algebra]

2.1 Expand $0=\{ab,-ab\}$ in both entries. The terms $\{a,-1\}+\{a,a\}$ and $\{b,-1\}+\{b,b\}$ vanish by step 1.1, leaving $\{a,b\}+\{b,a\}=0$. Multiplying these degree-two identities by symbols on the left and right proves the adjacent-transposition and repeated-entry identities in all degrees; any transposition is a composite of adjacent transpositions with its usual sign. Moving all entries of a degree-$r$ symbol past a degree-$s$ symbol gives the sign $(-1)^{rs}$ and proves graded anticommutativity by additivity. An entry $-1$ gives twice the symbol zero by multilinearity. A field embedding preserves products, nonzero elements and sums equal to $1$, so its entrywise map respects all defining relations and products; identities and composition are entrywise. [F1, step 1.1, algebra] ∎
