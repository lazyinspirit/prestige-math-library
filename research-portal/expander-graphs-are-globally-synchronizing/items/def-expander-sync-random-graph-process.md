---
id: def-expander-sync-random-graph-process
title: Random graph process and connectivity hitting time
kind: definition
domain: mathematics
status: published
origin: pipeline
deps:
  - def-expander-sync-graph-notation
  - def-expander-prereq-edge-order-process-coupling
  - math:def-countable-choice
dependency_roles:
  def-expander-sync-graph-notation: mathematical-premise
  def-expander-prereq-edge-order-process-coupling: mathematical-premise
  math:def-countable-choice: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 38, Section 7, second paragraph
      statement: The random graph process starts with the empty graph and adds a
        uniformly chosen missing edge at each step; its connectivity hitting
        time is the first time at which the graph is connected.
      hypotheses: A process of graphs on n vertices, indexed from zero to n(n-1)/2.
      reading_limits: The cited paragraph was inspected in the supplied article text.
        This reference attributes the formulation; the justification uses the
        independent finite-order construction.
provenance:
  statement: ai-altered
  proof: ai-generated
dependency_level: 2
---

## Definition

Assume countable choice. Let $n\ge 1$ be an integer, let $V=\{1,\ldots,n\}$, and put $E=\{\{i,j\}:i,j\in V,\ i<j\}$ and $N=|E|=n(n-1)/2$. A graph on $V$ has an edge set contained in $E$; it is connected if every pair of vertices is joined by a finite path of edges. An edge in $E$ that is not in the graph is called missing.

Choose an ordering $(e_1,\ldots,e_N)$ uniformly from the $N!$ orderings of $E$. The random graph process $\{G(n,m)\}_{m=0}^{N}$ has vertex set $V$ and edge set $\{e_1,\ldots,e_m\}$ at time $m$, with the empty set at $m=0$. Thus, conditional on any revealed ordering of the first $m<N$ edges, the next edge is uniformly chosen from the missing edges. Its connectivity hitting time is $\tau=\min\{m\in\{0,\ldots,N\}:G(n,m)\text{ is connected}\}$.

## Definition references

[[def-expander-sync-graph-notation]]

[[def-expander-prereq-edge-order-process-coupling]]

[[math:def-countable-choice]]

## Facts & Assumptions

[F1] The finite edge-order construction gives each ordering probability $1/N!$ and, conditional on a specified initial ordered segment of length $m<N$, gives each remaining edge probability $1/(N-m)$ of being next ([[def-expander-prereq-edge-order-process-coupling]]).

[F2] A finite undirected graph is represented by its vertex and edge sets, with the stated simple graph convention as a special case ([[def-expander-sync-graph-notation]]).

[F3] Countable choice is assumed in the edge-order supplier's construction ([[math:def-countable-choice]], [[def-expander-prereq-edge-order-process-coupling]]).

## Justification

**Given:** An integer $n\ge1$ and the finite uniform edge ordering under countable choice.

**Goal:** Verify that the process and its connectivity hitting time are well defined and have the stated transition rule.

1.1 The set $E$ has one element for each pair $i<j$, so it has $N$ elements. Each prefix of an ordering is a subset of $E$ and therefore defines a graph on $V$; the prefix of length zero is empty. By the uniform-order construction, conditional on any specified prefix of length $m<N$, each of the $N-m$ missing edges is next with probability $1/(N-m)$. Thus the stated transition rule holds. [F1, F2, F3, given]

2.1 At time $N$ every pair of distinct vertices is an edge, so the graph is connected: distinct vertices are joined by a one-edge path, and the one-vertex case is vacuous. Consequently the set of connected times is a nonempty subset of the finite set $\{0,\ldots,N\}$ and has a least element. This establishes $\tau$, including $\tau=0$ when $n=1$. [given, step 1.1] ∎





## Source notes

The process and hitting-time notation are attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), Section 7, second paragraph. The article is attribution for this formulation, not a premise of the justification.
