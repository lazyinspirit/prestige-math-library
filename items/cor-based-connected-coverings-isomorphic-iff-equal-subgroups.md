---
id: cor-based-connected-coverings-isomorphic-iff-equal-subgroups
kind: corollary
title: "Based connected coverings are isomorphic exactly when their induced subgroups are equal"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-covering-morphism-subgroup-criterion,
       thm-uniqueness-of-lifts-from-a-connected-space,
       def-map-and-isomorphism-of-covering-spaces,
       thm-induced-fundamental-group-map-functoriality]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Proposition 1.37"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
pipeline_run: null
---

## Statement

Under the hypotheses of [[prop-covering-morphism-subgroup-criterion]], the based connected coverings $(E_1,e_1)$ and $(E_2,e_2)$ are isomorphic over $B$ if and only if

$$(p_1)_*\pi_1(E_1,e_1)=(p_2)_*\pi_1(E_2,e_2).$$

The based isomorphism, when it exists, is unique.

## Facts & Assumptions

**Given:** Two based connected coverings of the same path-connected locally path-connected base.

[L1] A unique based covering morphism exists exactly when the source induced subgroup is contained in the target induced subgroup ([[prop-covering-morphism-subgroup-criterion]]).

[F1] Two lifts from a connected space that agree at one point are equal ([[thm-uniqueness-of-lifts-from-a-connected-space]]).

## Proof

**Proof technique:** direct.

1.1 For the direction from subgroup equality to isomorphism, [L1] gives unique based morphisms $f:E_1\to E_2$ and $g:E_2\to E_1$. [L1]

2.1 The composite $g\circ f$ and $\operatorname{id}_{E_1}$ are lifts of $p_1$ through $p_1$ and agree at $e_1$, so [F1] makes them equal. Likewise $f\circ g=\operatorname{id}_{E_2}$. Hence $f$ and $g$ are inverse based covering isomorphisms, and uniqueness follows from [L1]. [step 1.1, F1, L1]

3.1 For the converse direction, a based isomorphism and its inverse are covering morphisms, so [L1] gives both subgroup inclusions and therefore equality. [L1] ∎
