---
id: thm-free-groups-unique-up-to-unique-isomorphism
kind: theorem
title: "Free groups on the same set are uniquely isomorphic compatibly with their generators"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-free-group, def-group-isomorphism-and-automorphism]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "McKernan, Presentations and Groups of Small Order, Lecture 12"
      url: "https://math.mit.edu/~mckernan/Teaching/12-13/Spring/18.703/l_12.pdf"
pipeline_run: null
---

## Statement

If $(F,\iota)$ and $(F',\iota')$ are free groups on the same set $X$, then
there is a unique group isomorphism $\phi:F\to F'$ such that

$$\phi\circ\iota=\iota'.$$

## Facts & Assumptions

**Given:** Two free groups $(F,\iota)$ and $(F',\iota')$ on $X$.

[L1] A map from the generators of a free group extends uniquely to a group
homomorphism ([[def-free-group]]).

[L2] A group isomorphism is a bijective group homomorphism
([[def-group-isomorphism-and-automorphism]]).

## Proof

**Proof technique:** constructive.

1.1 Apply the universal property of $F$ to $\iota':X\to F'$ and construct the unique homomorphism $\phi:F\to F'$ with $\phi\iota=\iota'$. [L1, given, construct]

1.2 Apply the universal property of $F'$ to $\iota:X\to F$ and construct the unique homomorphism $\psi:F'\to F$ with $\psi\iota'=\iota$. [L1, given, construct]

2.1 Both $\psi\phi$ and $\operatorname{id}_F$ are homomorphisms $F\to F$ whose composites with $\iota$ equal $\iota$, so uniqueness in the universal property gives $\psi\phi=\operatorname{id}_F$. [step 1.1, step 1.2, L1]

2.2 Symmetrically, $\phi\psi=\operatorname{id}_{F'}$. [step 1.1, step 1.2, L1]

3.1 Thus $\phi$ is bijective, hence a group isomorphism. [step 2.1, step 2.2, L2]

4.1 Any generator-compatible homomorphism $F\to F'$ equals $\phi$ by the uniqueness in step 1.1; in particular the displayed isomorphism is unique. [step 1.1, step 3.1, L1, L2, discharge-construct: final] ∎
