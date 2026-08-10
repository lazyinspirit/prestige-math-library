---
id: thm-free-groups-are-torsion-free
kind: theorem
title: "Free groups are torsion-free"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-cyclic-reduction-normal-form, thm-reduced-words-form-the-free-group, thm-free-groups-unique-up-to-unique-isomorphism, def-cyclically-reduced-word, def-group-power, def-order-in-a-group]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Wilhelm Magnus, Abraham Karrass, and Donald Solitar, Combinatorial Group Theory"
      url: "https://books.google.co.uk/books?id=QoiBAAAAIAAJ"
pipeline_run: null
---

## Statement

Every free group is torsion-free: if $g$ is not the identity and $n\geq 1$ is
a natural number, then $g^n$ is not the identity. Equivalently, every
nonidentity element has infinite order in the sense of
[[def-order-in-a-group]].

## Facts & Assumptions

**Given:** A free group $F$ on a set $X$, a nonidentity element $g\in F$, and a natural number $n\geq 1$.

[L1] Every nonempty reduced word has the form $tct^{-1}$ with $c$ nonempty and cyclically reduced ([[lem-cyclic-reduction-normal-form]]).

[L2] The reduced words on $X\sqcup X^{-1}$ form a group when the product of reduced words is their concatenation followed by free reduction ([[thm-reduced-words-form-the-free-group]]).

[L3] Free groups on the same set are uniquely isomorphic compatibly with their generators ([[thm-free-groups-unique-up-to-unique-isomorphism]]).

[F1] A reduced word is cyclically reduced when it is empty or its first letter is not the formal inverse of its last letter ([[def-cyclically-reduced-word]]).

## Proof

**Proof technique:** direct.

1.1 First work in the reduced-word model and let $w$ be a nonidentity element. Then $w$ is itself a nonempty reduced word, and [L1] gives a literal reduced factorisation $w=tct^{-1}$ with $c$ nonempty and cyclically reduced. [L1, L2, given]

2.1 For every $n\geq1$, the literal concatenation $c^n$ is reduced and nonempty: each copy is reduced, and the seam between consecutive copies does not cancel because the last letter of $c$ is not the inverse of its first. [F1, step 1.1]

3.1 In the product $w^n$, the adjacent factors $t^{-1}t$ cancel between copies, leaving $tc^nt^{-1}$; its two outer seams are the same seams as in the reduced word $tct^{-1}$, so it is reduced and nonempty by step 2.1, and [L2] therefore shows that $w^n$ is not the identity. [L2, step 1.1, step 2.1]

4.1 For an arbitrary free group on $X$, use [L3] to transport $g$ to the reduced-word model; an isomorphism preserves the identity and natural powers, so step 3.1 gives $g^n\neq e$. [L3, step 3.1]

5.1 Thus no nonidentity element has a positive power equal to the identity, so every nonidentity element has infinite order and every free group, including the trivial free group on the empty set, is torsion-free. [step 4.1] ∎
