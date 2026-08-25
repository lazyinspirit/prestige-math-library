---
id: lem-modules-are-complement-invariant
kind: lemma
title: "A vertex set is a module of $G$ exactly when it is a module of $\\overline G$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-module-of-a-graph, def-graph-isomorphism-and-complement, lem-purity-symmetry-and-complementation, def-edges-between-sets-and-pure-mixed-pairs]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "M. Habib and C. Paul, A Survey on Algorithmic Aspects of Modular Decomposition, sec. 2.5"
      url: "https://arxiv.org/pdf/0912.1457"
pipeline_run: null
---

## Statement

For every finite simple graph $G$ and every $M\subseteq V(G)$, the set $M$ is a
module of $G$ if and only if it is a module of $\overline G$.

## Facts & Assumptions

**Given:** A finite simple graph $G$ and a set $M\subseteq V(G)$.

[F1] $M$ is a module of $G$ when the pair $(\{v\},M)$ is pure for every $v\in V(G)\setminus M$ ([[def-module-of-a-graph]]).

[F2] The complement of $G=(V,E)$ is $\overline G=(V,[V]^2\setminus E)$, and $\overline{\overline G}=G$ ([[def-graph-isomorphism-and-complement]]).

[L1] For disjoint vertex sets $A,B$ in a graph, complementation swaps complete pairs with anticomplete pairs and preserves pure pairs and mixed pairs ([[lem-purity-symmetry-and-complementation]]).

[F3] A disjoint pair is pure when it is complete or anticomplete ([[def-edges-between-sets-and-pure-mixed-pairs]]).

## Proof

**Proof technique:** direct.

1.1 For $v\in V(G)\setminus M$ the sets $\{v\}$ and $M$ are disjoint, so the pair $(\{v\},M)$ is pure in $G$ exactly when it is pure in $\overline G$. [L1, F3]

1.2 The graphs $G$ and $\overline G$ have the same vertex set, so a vertex lies outside $M$ in one exactly when it lies outside $M$ in the other. [F2]

2.1 If $M$ is a module of $G$, then $(\{v\},M)$ is pure in $G$ for every vertex $v$ outside $M$, hence pure in $\overline G$ for every such vertex, so $M$ is a module of $\overline G$. [step 1.1, step 1.2, F1]

3.1 Applying step 2.1 to the graph $\overline G$ and using $\overline{\overline G}=G$ gives the converse implication, so $M$ is a module of $G$ exactly when it is a module of $\overline G$. [step 2.1, F2] ∎
