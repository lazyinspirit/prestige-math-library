---
id: cex-a-map-between-two-catalan-families-that-is-not-injective
kind: counterexample
title: "A map from hexagon triangulations to size-four binary trees that is not injective"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
deps: [def-convex-polygon-chords-crossings-and-triangulations, lem-a-triangulation-has-a-unique-triangle-on-the-closing-side, def-binary-tree-and-its-size, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. Guichard, An Introduction to Combinatorics and Graph Theory, §3.5"
      url: "https://www.whitman.edu/mathematics/cgt_online/cgt.pdf"
pipeline_run: null
---

## Statement refuted

Equal Catalan counts do not make a natural-looking rule injective. Define

$$f:\mathcal{P}_6\longrightarrow\mathcal{T}_4$$

by sending a triangulation $T$ of the labelled hexagon to the **canonical comb
tree** determined only by its closing-side split index $k$:

- if $k=2$, take the tree whose left subtree has size $0$ and right subtree has
  size $3$;
- if $k=3$, take the tree whose subtrees have sizes $1$ and $2$;
- if $k=4$, take the tree whose subtrees have sizes $2$ and $1$;
- if $k=5$, take the tree whose left subtree has size $3$ and right subtree has
  size $0$;

and in every case fill each nonzero subtree by the right comb of the required
size.

## Facts & Assumptions

**Given:** the two triangulations $$T_1=\{\{2,4\},\{2,5\},\{2,6\}\}, \qquad T_2=\{\{2,6\},\{3,5\},\{3,6\}\}.$$

[L1] Every triangulation of the hexagon has a unique closing-side split index $k$ ([[lem-a-triangulation-has-a-unique-triangle-on-the-closing-side]]).

[L2] A function is injective when equal outputs force equal inputs ([[def-injection-surjection-bijection]]).

## Counterexample

**Proof technique:** direct.

1.1 Both $T_1$ and $T_2$ are triangulations of the labelled hexagon, and both have the same closing-side split index $k=2$: the side $\{2,6\}$ is present in each, and no index smaller than $2$ is available. [L1, given]

2.1 By the definition of $f$, both triangulations therefore map to the same canonical size-four comb tree, namely the tree with empty left subtree and right comb of size $3$. So $f(T_1)=f(T_2)$. [step 1.1]

3.1 The input triangulations are distinct because $\{2,4\}\in T_1$ but $\{2,4\}\notin T_2$. Hence equal outputs do not force equal inputs, so [L2] shows that $f$ is not injective. [L2, step 2.1] ∎

## Remarks

- The failure is deliberate: the rule remembers only the top split and then replaces the two sides by canonical combs, so it discards most of the triangulation.
