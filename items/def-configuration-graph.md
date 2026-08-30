---
id: def-configuration-graph
kind: definition
title: "The configuration graph of a machine on an input"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
  - def-one-step-configuration-relation
  - def-initial-accepting-and-rejecting-configurations
  - def-multigraph-loop-and-digraph
justified_by: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "John E. Savage, Models of Computation: Exploring the Power of Computing, Chapter 5"
      url: "https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation_Chapter5.pdf"
---

## Definition

Let $N$ be either a deterministic one-tape Turing machine or a nondeterministic
one-tape Turing machine, and fix an input word $w$.

Write $C\leadsto_N C'$ when $C'$ follows $C$ by one legal step of $N$: in the
deterministic case this means $C\vdash_N C'$ in the sense of
[[def-one-step-configuration-relation]], and in the nondeterministic case it
means that one allowed instruction of $N$ changes $C$ to $C'$ by the same local
rewrite and head-move rule.

The **configuration graph** of $N$ on $w$ is the directed graph
$$ G_N(w)=(V,A) $$
whose vertex set $V$ is the set of all configurations reachable from the
initial configuration $(q_0,0,t_w)$ by finitely many legal steps, where $t_w$
is the input tape for $w$, and whose arc set $A\subseteq V\times V$ consists of
the ordered pairs $(C,C')$ such that
$$ C\leadsto_N C'. $$

This uses the same ordered-pair arc convention as a digraph in
[[def-multigraph-loop-and-digraph]], but no finiteness claim is made here: the
configuration graph may be infinite.

An **accepting vertex** is an accepting configuration of $N$.

## Remarks

- For a deterministic machine every nonhalting vertex has out-degree $1$, while
  for a nondeterministic machine it may have several outgoing arcs.

- The graph need not be acyclic. Looping computations and revisited
  configurations are part of the present scope.
