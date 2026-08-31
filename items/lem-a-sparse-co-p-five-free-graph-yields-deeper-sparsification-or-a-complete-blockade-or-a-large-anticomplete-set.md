---
id: lem-a-sparse-co-p-five-free-graph-yields-deeper-sparsification-or-a-complete-blockade-or-a-large-anticomplete-set
kind: lemma
title: "A sparse $\\overline{P_5}$-free graph yields deeper sparsification or a complete blockade or a large anticomplete set"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-a-semisparse-blockade-can-be-sampled-to-anticonnected-blocks-with-nearly-pure-relations,
       lem-no-vertex-is-mixed-on-many-blocks-of-a-semisparse-blockade,
       def-c-sparse-and-c-restricted-vertex-set,
       def-complete-anticomplete-pure-and-x-sparse-blockades]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. VII. The five-vertex path, Lemma 7.1"
      url: "https://arxiv.org/html/2312.15333v2"
pipeline_run: null
---

## Statement

There exists a constant $d\ge 40$ such that, for every
$y\in(0,\tfrac12)$ and every $y$-sparse $\overline{P_5}$-free graph $G$, at
least one of the following holds:

1. there is a set $S\subseteq V(G)$ with
   $$|S|\ge y^{30d^3}|V(G)|$$
   such that $G[S]$ is $y^{2d}$-sparse;
2. there is a complete
   $$(y^{-1},y^{33d^3}|V(G)|)\text{-blockade}$$
   in $G$; or
3. there are disjoint sets $X,Y\subseteq V(G)$ such that
   $$|X|\ge y^{33d^3}|V(G)|,\qquad |Y|\ge(1-3y)|V(G)|,$$
   and $X$ is anticomplete to $Y$.

## Facts & Assumptions

**Given:** A parameter $y\in(0,\tfrac12)$ and a $y$-sparse
$\overline{P_5}$-free graph $G$.

[F1] Lemma 7.1 of Nguyen, Scott, and Seymour's cited paper states the displayed
trichotomy, with the same constant $d\ge40$ and the same exponents and blockade
parameters.

[F2] In the proof of that lemma, Claim 7.1.1 constructs either the complete
blockade in outcome 2 or a long semisparse blockade with anticonnected blocks.
Claim 7.1.2 shows that a vertex mixed on many of those blocks yields outcome 1;
otherwise averaging over the blocks gives a block anticomplete to a set of
size at least $(1-3y)|V(G)|$, which is outcome 3.

## Proof

**Proof technique:** translate the cited source lemma.

1.1 Apply [F1] to the graph in the Given. Its three alternatives are exactly outcomes 1, 2, and 3 in the statement; [F2] records how the semisparse and mixed-block cases in the source proof produce those alternatives. [F1, F2, given, cases]

2.1 Therefore the present trichotomy holds. [step 1.1] ∎
