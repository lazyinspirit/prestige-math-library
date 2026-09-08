---
id: rem-halpern-lauchli-finite-tree-statement
kind: remark
title: "Halpern–Läuchli matrix statement and proof destination"
status: draft
origin: pipeline
deps: [def-pruned-tree-products-and-dense-matrices]
provenance:
  statement: ai-altered
  proof: not-supplied
sources:
  references:
    - title: "Monk, Set theory following Jech (2024), standing tree conventions and Theorem 29.28 statement, printed p661; full proof destination pp661–670"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
proved_here: false
verification:
  precheck: n/a
external_dependency:
  source_url: "https://euclid.colorado.edu/~monkd/jech.pdf"
  exact_statement: "For positive finite d and rooted finitely branching height-omega trees without terminal nodes, every subset Q of the full product contains a k-matrix for every k, or there is h such that its complement contains an (h,k)-matrix for every k."
  local_proof_attempt: "The two density equivalences and the empty/full Q instances are proved locally. They do not establish the word-calculus and density-thinning argument for arbitrary Q; that proof, including the common-height cone restriction, is assigned to SET-21."
  necessity: "Orientation to halpern-lauchli-and-bpi-without-choice; no local theorem uses this recorded dichotomy."
---

## Statement

Let $d$ be positive finite and let $T_1,\ldots,T_d$ be rooted finitely branching trees of height $\omega$ without terminal nodes. For every $Q\subseteq\prod_{i=1}^d T_i$, at least one of the following holds:

- For every $k<\omega$ there is a $k$-matrix contained in $Q$.
- There is $h<\omega$ such that for every $k<\omega$ there is an $(h,k)$-matrix contained in $(\prod_{i=1}^d T_i)\setminus Q$.

Matrices have the full-product density meaning of [[def-pruned-tree-products-and-dense-matrices]], not an assumed equal-level or strong-subtree formulation. This is the Halpern–Läuchli matrix theorem recorded without proof here.

The planned page `halpern-lauchli-and-bpi-without-choice` owns the finite word-calculus, density-thinning lemmas, and proof of this theorem. Its separate symmetric-model application must establish its own choice requirements. Monk states this matrix dichotomy as Theorem 29.28 after the no-terminal-node standing convention. Its proof occupies printed pp661–670. The final cone argument must put the finitely many root heights at a common height and preserve density after restriction; equality of those heights is not automatic. No strong-subtree equivalence or symmetric-model consequence is asserted here.

For the boundary instance $Q=\prod_iT_i$, taking $A_i=T_i$ gives every required $k$-matrix, since each node dominates itself. For $Q=\varnothing$, the same choice gives the second alternative with $h=0$. These two immediate instances do not prove the general dichotomy.
