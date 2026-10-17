---
id: lem-filled-edge-path-characterisation
kind: lemma
title: Filled edges are witnessed by paths through earlier eliminated vertices
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-symmetric-structural-elimination-graph-and-ordering
justified_by: []
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Jennifer Scott and Miroslav Tůma, Algorithms for Sparse Linear Systems, Chapter 4, §§4.1–4.3"
      url: "https://library.oapen.org/bitstream/20.500.12657/62987/1/978-3-031-25820-6.pdf"
    - title: "Timothy A. Davis, Siva Rajamanickam, and Wissam M. Sid-Lakhdar, A survey of direct methods for sparse linear systems, §4"
      url: "https://people.engr.tamu.edu/davis/publications_files/survey_tech_report.pdf"
---

## Statement

Use the zero-based graph and ordering of [[def-symmetric-structural-elimination-graph-and-ordering]]. For distinct remaining vertices $x,y\in V_k$, the pair $\{x,y\}$ is an edge of $G_k$ if and only if the original graph $G_0$ contains a finite walk from $x$ to $y$ all of whose internal vertices belong to $\{v_0,\ldots,v_{k-1}\}$. A walk may repeat vertices; its internal vertices are the entries other than its two endpoints.

## Facts & Assumptions

**Given:** A finite simple graph, an elimination ordering, and the filled graphs defined by the supplier.

[F1] [[def-symmetric-structural-elimination-graph-and-ordering]]: At step $k$, delete $v_k$, retain edges between remaining vertices, and add every pair of distinct later neighbors of $v_k$.

## Proof

1.1 At $k=0$, a walk with no internal vertices consists of one edge, so the claimed equivalence is exactly the definition of $G_0$. [given, F1, base, algebra]

1.2 Suppose the equivalence holds at stage $k$. A retained edge in $G_{k+1}$ already has a witnessing walk whose internal vertices are among $v_0,\ldots,v_{k-1}$. An edge newly added at step $k$ joins two vertices $x,y$ that are each adjacent to $v_k$ in $G_k$. The induction hypothesis gives walks from $x$ to $v_k$ and from $v_k$ to $y$ with internal vertices among $v_0,\ldots,v_{k-1}$; concatenating them gives the required walk with the additional internal vertex $v_k$. This proves the forward implication at stage $k+1$. [F1, IH, induction, algebra]

2.1 Conversely, let a witnessing walk from $x$ to $y$ have internal vertices among $v_0,\ldots,v_k$. If it has no internal occurrence of $v_k$, the induction hypothesis gives an edge in $G_k$, which is retained. Otherwise take the first and last internal occurrences of $v_k$. The initial subwalk from $x$ to the first occurrence and the terminal subwalk from the last occurrence to $y$ have all internal vertices among $v_0,\ldots,v_{k-1}$. By induction, $x$ and $y$ are both later neighbors of $v_k$ in $G_k$. Since $x\ne y$, the update inserts $\{x,y\}$ in $G_{k+1}$. [F1, IH, step 1.2, induction, algebra]

3.1 The base case and steps 1.2 and 2.1 prove both implications for every stage by induction on $k$. [step 1.1, step 1.2, step 2.1, discharge-induction] ∎
