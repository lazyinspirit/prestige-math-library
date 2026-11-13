---
id: rem-expander-sync-density-bounds
title: Bounds on the critical connectivity threshold
kind: remark
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-sync-critical-density
  - def-expander-sync-graph-notation
  - def-expander-sync-global-synchrony
  - def-expander-prereq-phase-volume
  - rem-expander-prereq-critical-density-background
  - prop-author-4f905b3f6478-critical-density-family
  - math:def-countable-choice
  - math:def-connected-graph-and-connected-component
dependency_roles:
  def-expander-sync-critical-density: mathematical-premise
  def-expander-sync-graph-notation: mathematical-premise
  def-expander-sync-global-synchrony: mathematical-premise
  def-expander-prereq-phase-volume: mathematical-premise
  rem-expander-prereq-critical-density-background: mathematical-premise
  prop-author-4f905b3f6478-critical-density-family: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:def-connected-graph-and-connected-component: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 9, Section 1.5, second paragraph
      statement: The article reports $0.6875≤μ_c≤0.75$, attributing the lower bound to
        Canale and the upper bound to Kassabov, Strogatz, and Townsend, and
        explains their significance for connectivity and synchronization.
      hypotheses: The critical minimum-degree threshold and homogeneous graph Kuramoto
        model described in Section 1.5.
      reading_limits: The supplied article text at this paragraph was inspected for
        attribution. This reference is not used as proof of the bounds; the
        independent mathematical inputs are supplied by the declared
        prerequisite items.
provenance:
  statement: ai-altered
  proof: ai-generated
dependency_level: 8
formulation_deps:
  - def-expander-sync-critical-density
  - def-expander-sync-graph-notation
  - def-expander-sync-global-synchrony
  - def-expander-prereq-phase-volume
  - math:def-countable-choice
  - math:def-connected-graph-and-connected-component
argument_deps:
  - def-expander-sync-critical-density
  - def-expander-sync-graph-notation
  - def-expander-sync-global-synchrony
  - def-expander-prereq-phase-volume
  - rem-expander-prereq-critical-density-background
  - prop-author-4f905b3f6478-critical-density-family
  - math:def-countable-choice
  - math:def-connected-graph-and-connected-component
---

## Statement

Assume countable choice. The critical connectivity threshold for the homogeneous graph Kuramoto model satisfies $0.6875=11/16\le\mu_c\le3/4=0.75$. In particular, connectivity alone does not ensure global synchronization: connected nonsynchronizing graphs occur with minimum-degree density arbitrarily close to $11/16$. The upper bound expresses a sufficient minimum-degree condition for synchronization at every fixed density strictly above $3/4$ and all sufficiently large orders.

## Statement references

[[def-expander-sync-critical-density]]

[[def-expander-sync-graph-notation]]

[[def-expander-sync-global-synchrony]]

[[def-expander-prereq-phase-volume]]

[[math:def-countable-choice]]

[[math:def-connected-graph-and-connected-component]]

## Facts & Assumptions

[F1] A graph is finite and undirected, has at most one edge between each pair of vertices, and may have loops, each counted once in its vertex degree. Write $d_{\min}$ for its minimum degree. Global synchronization means convergence to an all-equal phase state for almost every initial phase under normalized phase volume. Countable choice is assumed for this convention ([[def-expander-sync-graph-notation]], [[def-expander-sync-global-synchrony]], [[def-expander-prereq-phase-volume]], [[math:def-countable-choice]]).

[F2] The threshold $\mu_c$ is the smallest real number $a$ such that, for each $\mu>a$, there is a cutoff $N(\mu)$ for which every graph on $n\ge N(\mu)$ vertices with $d_{\min}\ge\mu(n-1)$ globally synchronizes ([[def-expander-sync-critical-density]]).

[F3] Every simple loop-free graph on $n\ge2$ vertices with minimum degree at least $3(n-1)/4$ globally synchronizes. Deleting self-loops leaves the Kuramoto phase dynamics unchanged ([[rem-expander-prereq-critical-density-background]]).

[F4] For each integer $k\ge3$, there is a simple nonsynchronizing graph on $8k$ vertices with common degree $5k+\lceil k/2\rceil-2$. Its degree divided by $8k-1$ is less than $11/16$ and tends to $11/16$ as $k\to\infty$ ([[prop-author-4f905b3f6478-critical-density-family]]).

[F5] For the simple loop-free graphs in [F4], connectedness means that the vertex set is nonempty and every two vertices are joined by a path. A connected component is the induced subgraph on the vertices reachable from a given vertex ([[math:def-connected-graph-and-connected-component]]).

## Proof

**Given:** The conventions and inputs in [F1]–[F5].

**Goal:** Establish the threshold bounds and the connected examples.

1.1 Fix $\mu>3/4$. For sufficiently large $n$, $(\mu-3/4)(n-1)\ge1$. If a graph on $n$ vertices has $d_{\min}\ge\mu(n-1)$, deleting its loops decreases each degree by at most one. The resulting simple graph therefore has minimum degree at least $3(n-1)/4$. By [F3] it globally synchronizes, and the original graph has the same dynamics. Thus $3/4$ has the threshold property in [F2], so $\mu_c\le3/4$. [F1, F2, F3, algebra]

1.2 Let $a<11/16$ and choose $\mu$ with $a<\mu<11/16$. By [F4], for all sufficiently large $k$ the nonsynchronizing graph there has degree density greater than $\mu$; its orders $8k$ are unbounded. Hence no cutoff can satisfy the threshold property for $a$, and [F2] gives $\mu_c\ge11/16$. [F2, F4, algebra]

2.1 For $k\ge3$, the degree in [F4] is at least $4k$, half the order. A disconnected simple graph on $8k$ vertices has a component with at most $4k$ vertices, whose vertices have degree at most $4k-1$. Thus these examples are connected. Their densities tend to $11/16$, proving the final assertion. [F4, F5, algebra] ∎

## Source notes

The article attributes the lower bound to Canale and the upper bound to Kassabov, Strogatz, and Townsend. The independent source inputs and their reading limits are recorded in the prerequisite items; the present proof applies them to the threshold definition and its loop convention.
