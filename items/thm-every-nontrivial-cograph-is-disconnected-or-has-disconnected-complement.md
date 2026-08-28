---
id: thm-every-nontrivial-cograph-is-disconnected-or-has-disconnected-complement
kind: theorem
title: "Every nontrivial cograph is disconnected or has disconnected complement"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-cograph-by-singletons-disjoint-union-and-complete-connection,
       def-complete-connection-of-two-disjoint-graphs,
       def-connected-graph-and-connected-component,
       def-anticonnected-graph-and-anticonnected-component,
       def-graph-isomorphism-and-complement]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tero Harju, Lecture Notes on Combinatorial Structures in Graph Theory, Exercise 5.3"
      url: "https://users.utu.fi/harju/Structures/Structure2018.pdf"
pipeline_run: null
---

## Statement

Let $G$ be a cograph with at least two vertices. Then $G$ is disconnected or
$\overline G$ is disconnected.

## Facts & Assumptions

**Given:** A cograph $G$ with $|V(G)|\geq 2$.

[L1] Every nontrivial cograph is obtained from two nonempty smaller cographs by
one final disjoint-union step or one final complete-connection step
([[def-cograph-by-singletons-disjoint-union-and-complete-connection]]).

[L2] The disjoint union of two nonempty graphs is disconnected
([[def-connected-graph-and-connected-component]]).

[L3] If $G_1$ and $G_2$ are vertex-disjoint, then the complement of
$G_1\nabla G_2$ is the disjoint union of $\overline{G_1}$ and $\overline{G_2}$
([[def-complete-connection-of-two-disjoint-graphs]],
[[def-graph-isomorphism-and-complement]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], there exist nonempty smaller cographs $G_1$ and $G_2$ such that $G$ is either the disjoint union of $G_1$ and $G_2$, or the complete connection $G_1\nabla G_2$. [L1, given]

2.1 In the disjoint-union case, [L2] immediately shows that $G$ is disconnected. [step 1.1, L2]

2.2 In the complete-connection case, [L3] shows that $\overline G=\overline{G_1}\sqcup\overline{G_2}$. Both sides are nonempty because $G_1$ and $G_2$ are nonempty, so $\overline G$ is disconnected by [L2]. [step 1.1, L2, L3]

3.1 Therefore one of the two stated alternatives always holds: either $G$ is disconnected, or $\overline G$ is disconnected. [step 2.1, step 2.2] ∎
