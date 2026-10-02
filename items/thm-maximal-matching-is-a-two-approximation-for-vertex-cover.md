---
id: thm-maximal-matching-is-a-two-approximation-for-vertex-cover
kind: theorem
title: "A maximal matching gives a 2-approximate minimum vertex cover"
status: draft
origin: pipeline
deps:
  - def-finite-simple-graph
  - def-optimization-problem-and-approximation-ratio
  - def-matching-maximum-perfect-and-matching-number
  - def-clique-independent-set-and-vertex-cover-problems
proof_strategy: direct
landmark: true
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Ghaffari, Advanced Algorithms, Lecture 1: Approximation Algorithms I, §§1, 2.1, 2.2.2, PDF pp. 1–5"
      url: "https://people.csail.mit.edu/ghaffari/AA18/Notes/S_18_01.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

For every finite simple graph, greedily construct any maximal matching $M$ and
return the set $C$ of its endpoints. The procedure is deterministic polynomial
time after fixing a tie rule; $C$ is a vertex cover and
$|C|=2|M|\le 2\operatorname{OPT}_{\mathrm{VC}}$. This includes an edgeless
graph, for which both sides are zero.

## Facts & Assumptions

**Given:** A finite simple graph $G=(V,E)$ with its vertices and edges listed in a fixed order, and $\operatorname{OPT}_{\mathrm{VC}}$ the minimum cardinality of a vertex cover of $G$.

[F1] A finite simple graph has $E\subseteq[V]^2$, so every edge has two distinct endpoints and is an unordered two-element set of vertices. ([[def-finite-simple-graph]])

[F2] A matching is a set of edges no two of which share an endpoint; a vertex is $M$-saturated when it is an endpoint of an edge of $M$; a maximal matching is one contained in no strictly larger matching. ([[def-matching-maximum-perfect-and-matching-number]])

[F3] A vertex cover of $G$ is a set $C\subseteq V$ meeting every edge of $G$; the decision problem VERTEX COVER asks for a cover of size at most $k$, and minimizing its size is the associated minimization problem. ([[def-clique-independent-set-and-vertex-cover-problems]])

[F4] A polynomial-time $\rho$-approximation for a minimization problem returns, on every instance, a feasible solution of value at most $\rho$ times the optimum; no division by the optimum is involved. ([[def-optimization-problem-and-approximation-ratio]])

## Proof

**Proof technique:** direct.

1.1 Consider the following deterministic procedure: list the edges of $G$ in the fixed order, start with $M=\varnothing$, and scan the list once, adding the current edge to $M$ when neither of its endpoints is already $M$-saturated; at the end return $M$ and the set $C$ of all endpoints of edges of $M$. Each step inspects two saturation marks and possibly sets two of them, so the procedure runs in time polynomial in the encoded size of $G$, and the fixed edge order is its tie rule. [F1, given, construct]

1.2 One has $|M|\le\operatorname{OPT}_{\mathrm{VC}}$. Let $C^\ast$ be a vertex cover with $|C^\ast|=\operatorname{OPT}_{\mathrm{VC}}$. Each edge of $M$ has at least one endpoint in $C^\ast$; assign to it such an endpoint explicitly: the smaller of its two endpoints in the fixed vertex order if that endpoint lies in $C^\ast$, and otherwise its other endpoint. Distinct edges of $M$ are vertex-disjoint, so distinct edges receive distinct vertices of $C^\ast$; the assignment is therefore an injection of $M$ into $C^\ast$, and $|M|\le|C^\ast|=\operatorname{OPT}_{\mathrm{VC}}$. [F2, F3, given, algebra]

2.1 Since $M$ is a matching, its edges are pairwise disjoint, so the $2|M|$ endpoints of its edges are distinct vertices and $|C|=2|M|$. Every vertex of $C$ is $M$-saturated by construction. [F2, step 1.1, algebra]

2.2 The matching $M$ is maximal. Indeed, suppose an edge $e$ of $G$ had both endpoints not in $C$, that is, both $M$-exposed at the end of the scan. A vertex once marked saturated is never unmarked, so both endpoints were still exposed when $e$ was scanned; the procedure would then have added $e$ to $M$, a contradiction. Hence no edge can be added to $M$, and $M$ is maximal. [F2, step 1.1, algebra]

2.3 If $G$ has no edges, the scan adds nothing, so $M=\varnothing$ and $C=\varnothing$; the empty set is a vertex cover and no nonempty set is needed, so $\operatorname{OPT}_{\mathrm{VC}}=0=|C|=2|M|$, and both sides of the displayed bound are zero. [F3, step 1.1, algebra]

3.1 The set $C$ is a vertex cover: if some edge $e$ of $G$ had both endpoints outside $C$, then $M\cup\{e\}$ would be a matching strictly larger than $M$, contradicting maximality. Hence every edge meets $C$, so $C$ is a vertex cover and $\operatorname{OPT}_{\mathrm{VC}}\le|C|$. [F2, F3, step 2.2, algebra]

4.1 Combining steps 2.1, 3.1 and 1.2, $|C|=2|M|\le 2\operatorname{OPT}_{\mathrm{VC}}$ and $C$ is a vertex cover computed by the deterministic polynomial-time procedure of step 1.1. By [F4] the procedure is a $2$-approximation for the minimum vertex cover problem. [F4, step 2.1, step 3.1, step 1.2]

5.1 For every finite simple graph, a maximal matching is produced in deterministic polynomial time after the tie rule of step 1.1 is fixed, its endpoint set is a vertex cover $C$ with $|C|=2|M|\le2\operatorname{OPT}_{\mathrm{VC}}$, and the edgeless case is covered by step 2.3. [step 4.1, step 2.3] ∎
