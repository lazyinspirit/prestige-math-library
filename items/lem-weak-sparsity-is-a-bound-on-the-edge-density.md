---
id: lem-weak-sparsity-is-a-bound-on-the-edge-density
kind: lemma
title: "For disjoint nonempty vertex sets, weak $c$-sparsity says exactly that the edge density is at most $c$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-directional-and-weak-sparsity-between-vertex-sets, def-edge-density-between-vertex-sets, def-edges-between-sets-and-pure-mixed-pairs, def-finite-cardinality]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Y. Huang, Q. Ju, and X. Zhou, Erdős-Hajnal beyond the five-vertex path, sec. 2"
      url: "https://arxiv.org/pdf/2606.06258v2"
pipeline_run: null
---

## Statement

Let $G$ be a finite simple graph, let $c\ge0$, and let $X,Y\subseteq V(G)$ be
disjoint nonempty sets. Then $(X,Y)$ is weakly $c$-sparse if and only if
$d_G(X,Y)\le c$.

## Facts & Assumptions

**Given:** A finite simple graph $G$, a real $c\ge0$, and disjoint nonempty sets $X,Y\subseteq V(G)$.

[L1] Weak $c$-sparsity means $|E_G(X,Y)|\le c|X||Y|$ ([[def-directional-and-weak-sparsity-between-vertex-sets]]).

[L2] The edge density is $d_G(X,Y)=e_G(X,Y)/(|X||Y|)$, where $e_G(X,Y)$ counts ordered pairs $(x,y)\in X\times Y$ that form an edge ([[def-edge-density-between-vertex-sets]]).

[L3] Because $X$ and $Y$ are disjoint, each edge between them contributes exactly one such ordered pair, so $e_G(X,Y)=|E_G(X,Y)|$ ([[def-edges-between-sets-and-pure-mixed-pairs]]).

## Proof

**Proof technique:** direct.

1.1 By [L3], the inequality of [L1] is the same as $e_G(X,Y)\le c|X||Y|$. [L1, L3]

2.1 Since $X$ and $Y$ are nonempty, dividing by $|X||Y|$ is legitimate, and [L2] turns the inequality of step 1.1 into $d_G(X,Y)\le c$. [step 1.1, L2, algebra]

3.1 Reversing the same algebra shows the converse implication, so the two conditions are equivalent. [step 2.1] ∎
