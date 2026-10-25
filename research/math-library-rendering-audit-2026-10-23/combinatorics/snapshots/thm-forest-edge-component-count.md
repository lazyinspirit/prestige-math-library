---
id: thm-forest-edge-component-count
kind: theorem
title: "For every forest, $|V|=|E|+c$, where $c$ is the number of connected components"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-tree-forest-and-leaf, lem-nonempty-forest-has-low-degree-vertex, cor-connected-components-partition-the-vertex-set, def-graph-deletion-contraction-minor-and-subdivision, def-finite-cardinality, thm-induction-principle, lem-nat-add-associative, lem-nat-add-commutative, thm-sum-rule, cor-cardinality-of-the-power-set, thm-subset-of-a-finite-set]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "Reinhard Diestel, Graph Theory, Preview Chapter 1"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch1.pdf"
    - title: "ISI Bangalore discrete mathematics notes, Trees and Cayley’s theorem"
      url: "https://www.isibang.ac.in/~d.yogesh/Course_Notes/DM1/Ch4.S1.html"
pipeline_run: null
---

## Statement

If $F$ is a forest, let $\mathscr C(F)$ be the family of vertex sets of its
connected components and put $c(F):=|\mathscr C(F)|$. Then

$$|V(F)|=|E(F)|+c(F).$$

For the null forest, $c(F)=0$.

## Facts & Assumptions

**Given:** A finite forest $F$.

[L1] A forest contains no cycle, and a nonempty forest has a vertex of degree zero or one ([[def-tree-forest-and-leaf]], [[lem-nonempty-forest-has-low-degree-vertex]]).

[L2] Connected components partition the vertex set. Their vertex sets form a subset of the finite power set $\mathcal P(V(F))$, so $\mathscr C(F)$ is finite and $c(F)$ is defined ([[cor-connected-components-partition-the-vertex-set]], [[cor-cardinality-of-the-power-set]], [[thm-subset-of-a-finite-set]], [[def-finite-cardinality]]).

[F1] Deleting a vertex deletes exactly its incident edges ([[def-graph-deletion-contraction-minor-and-subdivision]]).

[F2] Finite disjoint unions obey the sum rule, and natural addition is associative and commutative ([[def-finite-cardinality]], [[thm-sum-rule]], [[lem-nat-add-associative]], [[lem-nat-add-commutative]]).

[L3] Induction is valid on $|V(F)|$ ([[thm-induction-principle]]).

## Proof

**Proof technique:** induction on $|V(F)|$.

1.1 If $|V(F)|=0$, then $|E(F)|=0$ and $c(F)=0$, so the identity holds. [base]

1.2 Let $|V(F)|>0$, assume the identity for forests with fewer vertices, and choose a vertex $v$ of degree at most one. [ih, L1, L3]

2.1 Put $F':=F-v$. It remains a forest, and $V(F)$ is the disjoint union of $V(F')$ and $\{v\}$, so $|V(F)|=|V(F')|+1$. [step 1.2, L1, F1, F2]

3.1 If $v$ is isolated, then $E(F)=E(F')$, while the component family of $F$ is the disjoint union of the component family of $F'$ and $\{\{v\}\}$. Hence $|E(F)|=|E(F')|$ and $c(F)=c(F')+1$. [step 2.1, F1, L2, F2]

3.2 If $v$ has degree one, deleting it removes its unique incident edge, so $|E(F)|=|E(F')|+1$. It does not change the number of components: $v$ cannot be an internal vertex of a path between remaining vertices, and its neighbour remains in the same nonempty component after deletion. Thus $c(F)=c(F')$. [step 2.1, F1, L2, F2]

4.1 In the isolated case, the induction hypothesis gives $|V(F)|=|V(F')|+1=(|E(F')|+c(F'))+1=|E(F)|+c(F)$. [step 1.2, step 2.1, step 3.1, F2]

4.2 In the degree-one case, the induction hypothesis gives $|V(F)|=|V(F')|+1=(|E(F')|+c(F'))+1=(|E(F')|+1)+c(F')=|E(F)|+c(F)$. [step 1.2, step 2.1, step 3.2, F2]

5.1 The two possible degrees of $v$ have both been handled, so the identity holds for every forest. [step 4.1, step 4.2, discharge-induction] ∎
