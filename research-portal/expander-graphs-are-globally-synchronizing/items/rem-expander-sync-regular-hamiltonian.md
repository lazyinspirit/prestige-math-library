---
id: rem-expander-sync-regular-hamiltonian
title: Typical regular graphs are Hamiltonian
kind: remark
domain: mathematics
status: published
origin: pipeline
deps:
  - def-expander-sync-graph-notation
  - def-expander-sync-random-regular-model
  - thm-expander-prereq-regular-hamiltonicity-input
dependency_roles:
  def-expander-sync-graph-notation: mathematical-premise
  def-expander-sync-random-regular-model: mathematical-premise
  thm-expander-prereq-regular-hamiltonicity-input: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 9, Section 1.5, citation to Robinson and Wormald [45]
      statement: A random d-regular graph is Hamiltonian for large n and d at least 3,
        as attributed there to Robinson and Wormald.
      hypotheses: The remark below states the fixed-degree, uniform labelled
        simple-graph asymptotic version supplied by Robinson and Wormald.
      reading_limits: The cited passage in the supplied article text was inspected for
        attribution. It is not used as proof; the independent theorem is
        supplied by the declared prerequisite.
dependency_level: 5
---

## Statement

Fix an integer $d\ge3$. A uniformly random labelled simple $d$-regular graph on $n$ vertices is Hamiltonian with high probability as $n\to\infty$ through feasible orders. Here a graph is $d$-regular when every vertex has degree $d$, and Hamiltonian means that it contains a cycle visiting every vertex exactly once. The uniform law gives equal probability to each simple $d$-regular graph on the labelled vertex set $\{1,\ldots,n\}$; an order is feasible when at least one such graph exists. With high probability means that the probability tends to one along those orders.

## Statement references

[[def-expander-sync-graph-notation]]

[[def-expander-sync-random-regular-model]]

[[thm-expander-prereq-regular-hamiltonicity-input]]

## Facts & Assumptions

[F1] For each fixed integer $d\ge3$, the probability that a uniformly sampled labelled simple $d$-regular graph is Hamiltonian tends to one as its order grows through feasible values. A Hamiltonian cycle is a spanning cyclic ordering with edges between consecutive vertices, including the last and first ([[thm-expander-prereq-regular-hamiltonicity-input]]).

[F2] The uniform random regular model assigns equal mass to the labelled simple $d$-regular graphs, and its high-probability limits are taken through feasible orders ([[def-expander-sync-random-regular-model]]). The degree and regularity conventions agree with the graph notation ([[def-expander-sync-graph-notation]]).

## Proof

**Given:** A fixed integer $d\ge3$ and the uniform labelled simple $d$-regular graph model at feasible orders.

**Goal:** Show that the graph is Hamiltonian with high probability as its order tends to infinity.

1.1 By [F2], the model and feasible-order limit in the statement are exactly those in [F1]; the stated cycle condition is the spanning cyclic ordering in [F1]. Thus [F1] applies to the Hamiltonian event in this model. [given, F1, F2]

2.1 The probability of that event therefore tends to one through feasible orders. By the high-probability convention in [F2], this is the claimed conclusion. [F1, F2, step 1.1] ∎

## Source notes

The article attributes the random regular graph Hamiltonicity result to Robinson and Wormald in Section 1.5; the proof above uses the independently sourced prerequisite, not the article's assertion.
