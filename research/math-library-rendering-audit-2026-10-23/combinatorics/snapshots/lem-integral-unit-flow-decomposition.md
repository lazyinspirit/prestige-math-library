---
id: lem-integral-unit-flow-decomposition
kind: lemma
title: "An integral flow decomposes into source-sink path flows and directed cycle flows; unit capacities make the paths arc-disjoint"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-integral-network-flow-cut-and-residual-network, def-directed-walk-trail-path-cycle-and-strong-connectivity, thm-induction-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "MIT 6.854, Flow notes"
      url: "https://courses.csail.mit.edu/6.854/21/Notes/n06-flow.html"
pipeline_run: null
---

## Statement

Every feasible integral flow is a finite sum of unit $s$-$t$ path flows and
unit directed cycle flows. Here a labelled directed cycle flow also permits a
two-arc antiparallel circuit, so that it records a circulation even when the
underlying simple-digraph convention excludes two-cycles. If every capacity is
at most one, the source-sink paths in such a decomposition are arc-disjoint.

## Facts & Assumptions

**Given:** A feasible integral flow $f$ in a finite integral network.

[F1] Positive flow is conserved at nonterminals, the source has no incoming original arc, and the sink has no outgoing original arc ([[def-integral-network-flow-cut-and-residual-network]]).

## Proof

**Proof technique:** induction on the finite total flow $\sum_{a\in A}f(a)$.

1.1 The zero flow is the empty sum of path and cycle flows. [base]

1.2 If $f$ is nonzero, follow positive-flow arcs from a positive outgoing source arc; conservation continues the walk at every nonterminal until it reaches $t$ or repeats a vertex. [F1]

1.3 A repeated segment is a positive labelled circulation; subtract one on it and record a unit directed cycle flow, while an unrepeated walk to $t$ yields a unit $s$-$t$ path flow after subtracting one on its arcs. [F1]

2.1 The remainder is feasible, integral, and has strictly smaller total flow, so the induction hypothesis decomposes it and adding the recorded term gives the desired decomposition. [step 1.3, ih]

3.1 If $c(a)\le1$, no arc can occur in two recorded path terms; together with the base case and step 2.1 this proves the claim for every finite total flow. [step 1.1, step 2.1, discharge-induction] ∎
