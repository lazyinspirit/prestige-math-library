---
dependency_level: 6
id: lem-milnor-k-groups-of-finite-residue-local-fields-are-uncountable
kind: lemma
title: "Uncountability of Milnor groups of finite-residue local fields"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-milnor-k-group-of-a-field
  - lem-milnor-residue-specialization-and-principal-unit-kernel
  - lem-rational-milnor-restriction-injective-for-algebraic-extensions
  - thm-zorn
  - lem-maximal-algebraically-independent-subset-is-a-transcendence-basis
justified_by: []
proof_strategy: direct
axiom_use: "AC is explicitly used for a transcendence basis and countability of the algebraic root union. No full transfer-independence theorem or cohomological duality is assumed."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, second edition, Chapter IX \u00a7\u00a71\u20133; locally reconstructed arguments below"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
verification: {}
---

## Statement

Assume AC. If $F$ is a nonarchimedean local field with finite residue field, then $K_n^M(F)$ is uncountable for every $n\ge1$. More precisely it contains an uncountable family whose images in $K_n^M(F)\otimes\mathbb Q$ are linearly independent over $\mathbb Q$.

## Statement references

[[def-axiom-of-choice]]

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[def-milnor-k-group-of-a-field]]

[[lem-milnor-residue-specialization-and-principal-unit-kernel]]

[[lem-rational-milnor-restriction-injective-for-algebraic-extensions]]

## Facts & Assumptions

**Given:** The objects in the Statement.

[A1] AC supplies a transcendence basis and the countability of an algebraic extension of a countable field (a countable union of finite root sets). [[def-axiom-of-choice]]

[F1] The local field is complete for a surjective integer valuation with finite residue field and has a uniformizer. [[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[F2] Milnor restriction maps act entrywise on symbols. [[def-milnor-k-group-of-a-field]]

[F3] Rational-variable discrete residues send unit symbols followed by the variable to their unit residue symbol and all-unit symbols to zero. [[lem-milnor-residue-specialization-and-principal-unit-kernel]]

[F5] Under AC, a nonempty poset whose chains have upper bounds has a maximal element. A maximal algebraically independent set makes the extension algebraic over its generated field. [[thm-zorn]] [[lem-maximal-algebraically-independent-subset-is-a-transcendence-basis]]

[F4] Rational Milnor restriction is injective for any algebraic extension; its proof uses only chosen finite simple towers and their degree identity, not tower independence. [[lem-rational-milnor-restriction-injective-for-algebraic-extensions]]

## Proof

**Given:** The data and conventions above.

1.1 Fix a uniformizer $\pi$ of $F$. Every binary sequence $(a_j)_{j\ge0}$ gives a convergent sum $\sum_{j\ge0}a_j\pi^j$ by completeness, where the digits are the field elements $0,1$. Two distinct sequences have a first differing digit; their difference has that index as valuation, since the leading coefficient is $1$ or $-1$ and is a unit. Thus this map from $\{0,1\}^{\mathbb N}$ to $F$ is injective. Cantor's diagonal argument makes $F$ uncountable. [F1, given, construct, algebra]

2.1 Let $k$ be the prime field, either finite or $\mathbb Q$, hence countable. Under [A1], apply [F5] to choose a maximal algebraically independent subset $T$ of $F/k$; the union of a chain of independent sets is independent, and the second part of [F5] makes $F/k(T)$ algebraic. The set $T$ is uncountable. Otherwise the rational-function field on the countable set $T$ is countable (every expression involves finitely many variables and countably many coefficients), and its nonzero polynomials are countable in number. Each has finitely many roots, so under AC their union in $F$ is countable; algebraicity would make $F$ countable, contradicting step 1.1. [A1, F1, F5, step 1.1, choose, algebra]

3.1 Fix $n\ge1$ and distinct $t_1,\ldots,t_{n-1}\in T$, using the empty list when $n=1$. For each $t\in T\setminus\{t_1,\ldots,t_{n-1}\}$ put $z_t=\{t_1,\ldots,t_{n-1},t\}\in K_n^M(k(T))$. These classes are linearly independent over $\mathbb Z$. Indeed, in a finite relation apply the residue at the rational variable $t$ of one of its terms, regarding $k(T)$ as $k(T\setminus\{t\})(t)$. By [F3], all other terms have residue zero and this term has residue its coefficient times $\{t_1,\ldots,t_{n-1}\}$. Taking successively the residues at $t_{n-1},\ldots,t_1$ gives that integer coefficient in $K_0^M(k(T\setminus\{t,t_1,\ldots,t_{n-1}\}))=\mathbb Z$. For $n=1$ the first residue already does so. Thus every coefficient is zero; the same residue calculation after tensoring with $\mathbb Q$ proves rational linear independence. [F2, F3, step 2.1, construct, algebra]

4.1 The extension $F/k(T)$ is algebraic by step 2.1, so [F4] carries this rationally independent family injectively to $K_n^M(F)\otimes\mathbb Q$. Hence its original symbol images in $K_n^M(F)$ are distinct and have the stated independence after rationalization. Removing finitely many elements from the uncountable $T$ leaves it uncountable, completing the proof for every $n\ge1$. This argument uses the finite-tower degree computation only through [F4]; it assumes no generator/tower independence theorem for Milnor transfer. [A1, F2, F4, step 2.1, step 3.1, algebra] ∎
