---
id: ex-pc-markov-equivalent-dags
kind: example
title: "A complete three-vertex skeleton has several equivalent DAGs"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - alg-pc-causal-discovery
  - def-cpdag-markov-equivalence-class
  - def-d-separation-in-a-dag
  - thm-dag-markov-equivalence-skeleton-vstructures
  - lem-meek-rules-complete-for-cpdag
  - def-causal-discovery-oracle-regime
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Meek, Causal Inference and Causal Explanation with Background Knowledge, Theorem 1"
      url: "https://arxiv.org/pdf/1302.4972"
    - title: "Lauritzen, Graphical Models lecture notes, Theorem 2.62"
      url: "https://web.math.ku.dk/~lauritzen/papers/gmnotes.pdf"
---

## Example

On vertices $A,B,C$, the DAGs $A\to B$, $A\to C$, $B\to C$ and
$C\to B$, $C\to A$, $B\to A$ have the same complete skeleton and no
unshielded colliders. They are Markov equivalent. Suppose the first DAG has a
full-joint law from an observed-only Markovian recursive model with a
topological parent-kernel factorization, faithful to that DAG, and a perfect
conditional-independence oracle for that law. Each edge points in opposite
directions in the two DAGs, so their CPDAG is the fully undirected triangle;
perfect-oracle PC retains all three edges and returns that pattern.

```tikz
\begin{tikzpicture}[>=stealth, node distance=15mm]
  \node at (0,0) (a1) {$A$}; \node at (1.5,0) (b1) {$B$}; \node at (0,-1.3) (c1) {$C$};
  \draw[->] (a1) -- (b1); \draw[->] (a1) -- (c1); \draw[->] (b1) -- (c1);
  \node at (4,0) (a2) {$A$}; \node at (2.5,0) (b2) {$B$}; \node at (4,-1.3) (c2) {$C$};
  \draw[->] (b2) -- (a2); \draw[->] (c2) -- (a2); \draw[->] (c2) -- (b2);
  \node at (0,-3.1) (a3) {$A$}; \node at (1.5,-3.1) (b3) {$B$}; \node at (0,-4.4) (c3) {$C$};
  \draw[-] (a3) -- (b3); \draw[-] (a3) -- (c3); \draw[-] (b3) -- (c3);
  \node at (0.75,0.55) {first DAG};
  \node at (3.25,0.55) {second DAG};
  \node at (0.75,-5) {CPDAG};
\end{tikzpicture}
```

Vertices denote graph variables, arrows denote directed edges, and plain
segments denote undirected edges. The pictures illustrate the edge orientations;
the verification uses the path and equivalence definitions directly.

## Example references

[Meek, Theorem 1](https://arxiv.org/pdf/1302.4972)

[Lauritzen, Theorem 2.62](https://web.math.ku.dk/~lauritzen/papers/gmnotes.pdf)

## Facts & Assumptions

**Given:** The two finite DAGs, the first DAG's observed-only Markovian recursive model and full-joint parent-kernel factorization, its faithful law, and its perfect conditional-independence oracle.

[F1] A direct one-edge path has no internal vertices and is active under every conditioning set disjoint from its endpoints. [[def-d-separation-in-a-dag]]

[F2] DAGs are Markov equivalent exactly when their skeletons and unshielded colliders agree. [[thm-dag-markov-equivalence-skeleton-vstructures]]

[F3] A CPDAG directs exactly the edges with one orientation throughout the class and leaves an edge undirected when both directions occur. [[def-cpdag-markov-equivalence-class]]

[F4] PC deletes a pair only after a conditional-independence answer, then orients unshielded colliders and closes under R1–R3. [[alg-pc-causal-discovery]]

[F5] The background-free R1–R3 closure of the collider pattern is the CPDAG. [[lem-meek-rules-complete-for-cpdag]]

[F6] The causally sufficient discovery regime supplies the observed-only Markovian parent-kernel model, faithfulness to the first DAG, and the exact oracle; hence oracle independences agree with its d-separations. [[def-causal-discovery-oracle-regime]]

## Verification

**Proof technique:** direct graph comparison and the perfect-oracle algorithm.

1.1 Each graph has all three possible edges, so there is no triple with nonadjacent endpoints and in particular no unshielded collider. Their skeletons and unshielded colliders agree; [F2] proves Markov equivalence. Every distinct pair has a direct active path under every allowed conditioning set by [F1], so neither DAG has a d-separation between distinct vertices. Faithfulness in [F6] makes the oracle dependent on every pair and set. [given, F1, F2, F6, algebra]

1.2 In the two DAGs, the orientations of $A-B$, $A-C$, and $B-C$ are respectively $A\to B$ versus $B\to A$, $A\to C$ versus $C\to A$, and $B\to C$ versus $C\to B$. Thus each edge is oriented both ways in the equivalence class, and [F3] makes every edge undirected in the CPDAG. [F2, F3, algebra]

2.1 The perfect oracle never reports independence for any pair by step 1.1, so the algorithm deletes no edge. With three vertices, after the level-$0$ tests the complete triangle permits level $1$; at level $1$ each pair has only one possible conditioning vertex at each endpoint, and the oracle again returns dependence by step 1.1. The stopping condition then fails because an endpoint has at most one neighbor other than the other endpoint, fewer than the required two. Thus the skeleton search terminates. There is no unshielded triple to orient, and none of R1–R3 can fire because each requires at least one directed edge; the finite orientation scan therefore terminates as well. PC returns the undirected triangle, which [F5] identifies with the CPDAG found in step 1.2. The diagram is only a rendering of these verified adjacencies and orientations. [F1, F4, F5, step 1.1, step 1.2, cases] ∎
