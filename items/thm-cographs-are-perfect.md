---
id: thm-cographs-are-perfect
kind: theorem
title: "Every cograph is perfect"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-cograph-by-singletons-disjoint-union-and-complete-connection,
       def-perfect-graph,
       lem-disjoint-union-of-perfect-graphs-is-perfect,
       lem-complete-connection-of-perfect-graphs-is-perfect]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, The Erdos-Hajnal Conjecture - A Survey, Introduction"
      url: "https://arxiv.org/pdf/1606.08827"
    - title: "Tero Harju, Lecture Notes on Combinatorial Structures in Graph Theory, Exercise 5.2"
      url: "https://users.utu.fi/harju/Structures/Structure2018.pdf"
pipeline_run: null
---

## Statement

Every cograph is perfect.

## Facts & Assumptions

**Given:** A cograph $G$.

[L1] A cograph is either null or is built from one-vertex graphs by finitely many disjoint unions and complete connections, and every cograph with at least two vertices has a final step of one of those two kinds ([[def-cograph-by-singletons-disjoint-union-and-complete-connection]]).

[L2] A disjoint union of two perfect graphs is perfect ([[lem-disjoint-union-of-perfect-graphs-is-perfect]]).

[L3] A complete connection of two perfect graphs is perfect ([[lem-complete-connection-of-perfect-graphs-is-perfect]]).

[F1] The null graph and every one-vertex graph are perfect ([[def-perfect-graph]]).

## Proof

**Proof technique:** induction on a cograph construction of $G$.

1.1 We argue by induction on the recursive definition of cographs. If $G$ is the null graph or a one-vertex graph, then [F1] shows that $G$ is perfect. [given, F1, base]

1.2 Assume now that $G$ is nontrivial and that the claim is already known for the two smaller cographs in its final construction step. By [L1], there exist smaller cographs $G_1$ and $G_2$ such that $G$ is either $G_1\sqcup G_2$ or $G_1\nabla G_2$. The induction hypothesis makes both $G_1$ and $G_2$ perfect. [L1, ih]

2.1 In the disjoint-union case, [L2] shows that $G$ is perfect. In the complete-connection case, [L3] shows that $G$ is perfect. [step 1.2, L2, L3]

3.1 Steps 1.1 and 2.1 close the induction. Therefore every cograph is perfect. [step 1.1, step 2.1, discharge-induction] ∎
