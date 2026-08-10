---
id: lem-three-connected-graph-has-a-contractible-edge
kind: lemma
title: "Every three-connected simple graph with more than four vertices has an edge whose simple contraction remains three-connected"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-whitney-k-connected-path-characterisation, def-vertex-and-edge-connectivity, def-graph-deletion-contraction-minor-and-subdivision, thm-menger-finite-directed-and-undirected-path-forms, def-finite-cardinality]
justified_by: []
aliases: []
landmark: true
short: "A contractible edge in a three-connected graph"
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Lemma 3.2.4"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch3.pdf"
pipeline_run: null
---

## Statement

Every three-connected simple graph $G$ with more than four vertices has an edge $xy$ such that the simple contraction $G/xy$ remains three-connected. Connectivity is [[def-vertex-and-edge-connectivity]], simple contraction deletes loops and merges parallel edges as in [[def-graph-deletion-contraction-minor-and-subdivision]], and separator/path equivalence is supplied by [[cor-whitney-k-connected-path-characterisation]] and [[thm-menger-finite-directed-and-undirected-path-forms]]. Finite minimality uses [[def-finite-cardinality]].

## Facts & Assumptions

**Given:** A three-connected simple graph $G\ne K_4$.

[L1] A finite graph is three-connected exactly when every two distinct vertices are joined by at least three internally vertex-disjoint paths ([[cor-whitney-k-connected-path-characterisation]]).

[F1] Simple contraction deletes resulting loops and merges parallel edges ([[def-graph-deletion-contraction-minor-and-subdivision]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose no edge is contractible. For every edge $xy$, the graph $G/xy$ has a separator of at most two vertices. Three-connectivity of $G$ forces that separator to have the form $\{v_{xy},z\}$, where $v_{xy}$ is the contracted vertex; lifting it shows that $\{x,y,z\}$ separates $G$. Every member of this triple has a neighbour in every component of its deletion, since no proper subset can separate a three-connected graph. [assume-contra, L1, F1]

2.1 Among all choices of $xy,z$ and a component $C$ of $G-\{x,y,z\}$, choose one with $|C|$ least, and choose a neighbour $v\in C$ of $z$. The assumed noncontractibility of $zv$ similarly gives a vertex $w$ such that $\{z,v,w\}$ separates $G$, with every member adjacent into every component of its deletion. [step 1.1]

3.1 Because $x$ and $y$ are adjacent, some component $D$ of $G-\{z,v,w\}$ avoids both $x$ and $y$. The separator-neighbour property puts a neighbour of $v$ in $D$; since $v\in C$ and $D$ avoids $x,y,z$, that neighbour and every vertex of $D$ reached without the new separator lie in $C$. Moreover $v\notin D$, so $D$ is a proper nonempty subset of $C$. The triple $\{z,v,w\}$ with component $D$ is therefore a smaller choice than $C$. [step 2.1, L1]

4.1 Step 3.1 contradicts the minimality in step 2.1. Hence some edge has a simple contraction that remains three-connected. [step 2.1, step 3.1, discharge-contradiction] ∎

