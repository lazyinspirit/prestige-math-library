---
id: cor-the-erdos-hajnal-conjecture-reduces-to-prime-graphs
kind: corollary
title: "Every graph has the Erdős–Hajnal property if and only if every prime graph does"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-substitution-preserves-the-erdos-hajnal-property, thm-prime-graphs-are-the-graphs-that-are-not-substitutions, def-prime-graph, def-erdos-hajnal-property-and-constant, def-substitution-of-a-graph-for-a-vertex, def-finite-cardinality]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Y. Huang, Q. Ju, and X. Zhou, Erdős-Hajnal beyond the five-vertex path, sec. 1.2"
      url: "https://arxiv.org/pdf/2606.06258v2"
pipeline_run: null
---

## Statement

The following are equivalent.

1. Every finite simple graph has the Erdős–Hajnal property
   ([[def-erdos-hajnal-property-and-constant]]).
2. Every prime graph ([[def-prime-graph]]) has the Erdős–Hajnal property.

## Facts & Assumptions

**Given:** The two assertions above.

[L1] A graph on at least two vertices is prime exactly when it is not obtained by substituting one graph on at least two vertices for a vertex of another such graph ([[thm-prime-graphs-are-the-graphs-that-are-not-substitutions]]).

[L2] If $H_1$ and $H_2$ have the Erdős–Hajnal property, then the graph obtained by substituting $H_2$ for a vertex of $H_1$ has the Erdős–Hajnal property ([[thm-substitution-preserves-the-erdos-hajnal-property]]).

[L3] A graph on $0$ or $1$ vertices is prime, since every module is trivial ([[def-prime-graph]], [[def-finite-cardinality]]).

## Proof

**Proof technique:** induction.

1.1 If every graph has the Erdős–Hajnal property, then in particular every prime graph has it. [given]

1.2 For the converse direction, assume every prime graph has the Erdős–Hajnal property, and induct on the number of vertices of a graph $G$. [base]

1.3 If $|V(G)|\le1$, then $G$ is prime by [L3], so the assumption covers $G$. [L3, base]

1.4 Fix $n\ge2$ and assume inductively that every graph with fewer than $n$ vertices has the Erdős–Hajnal property whenever every prime graph does. Let $G$ have $n$ vertices. If $G$ is prime, the assumption on prime graphs covers it. Otherwise [L1] gives graphs $G_1,G_2$ with at least two vertices each such that $G=G_1[a\to G_2]$ for some vertex $a$ of $G_1$. [L1, ih]

2.1 In the non-prime case of step 1.4, both $G_1$ and $G_2$ have fewer than $n$ vertices, so the induction hypothesis gives the Erdős–Hajnal property for both, and then [L2] gives it for $G$. [step 1.4, L2, ih]

3.1 Steps 1.3, 1.4 and 2.1 prove that every $n$-vertex graph has the Erdős–Hajnal property, so the induction closes. [step 1.3, step 1.4, step 2.1, discharge-induction] ∎
