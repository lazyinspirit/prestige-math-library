---
id: lem-restrictedness-is-complement-invariant
kind: lemma
title: "A set is $c$-sparse in $G$ exactly when it is $c$-dense in $\\overline G$, so $c$-restrictedness is complement-invariant"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-c-sparse-and-c-restricted-vertex-set, def-graph-isomorphism-and-complement, def-graph-adjacency-incidence-neighbourhood-and-degree]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Chudnovsky, A. Scott, P. Seymour, and S. Spirkl, Strengthening Rödl's theorem, sec. 1"
      url: "https://arxiv.org/pdf/2105.07370"
pipeline_run: null
---

## Statement

Let $G$ be a finite simple graph, let $c\ge0$, and let $X\subseteq V(G)$ be
nonempty. Then $X$ is $c$-sparse in $G$ if and only if $X$ is $c$-dense in
$\overline G$. Consequently $X$ is $c$-restricted in $G$ if and only if it is
$c$-restricted in $\overline G$.

## Facts & Assumptions

**Given:** A finite simple graph $G$, a real $c\ge0$, and a nonempty set $X\subseteq V(G)$.

[L1] For distinct vertices $x,y$, they are adjacent in $\overline G$ exactly when they are nonadjacent in $G$ ([[def-graph-isomorphism-and-complement]], [[def-graph-adjacency-incidence-neighbourhood-and-degree]]).

[L2] The definitions of $c$-sparse, $c$-dense, and $c$-restricted are those of [[def-c-sparse-and-c-restricted-vertex-set]].

## Proof

**Proof technique:** direct.

1.1 For $x\in X$, the set $N_{\overline G}(x)\cap X$ is exactly $(X\setminus\{x\})\setminus N_G(x)$ by [L1]. [L1]

2.1 Therefore the inequality defining $c$-sparsity in $\overline G$ is exactly the inequality defining $c$-density in $G$, and vice versa, by [L2]. [step 1.1, L2]

3.1 Since $c$-restricted means the disjunction of the sparse and dense conditions, step 2.1 shows that restrictedness is unchanged by complementation. [step 2.1, L2] ∎
