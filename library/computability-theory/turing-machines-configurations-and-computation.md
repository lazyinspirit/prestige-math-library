---
page: turing-machines-configurations-and-computation
title: "Turing Machines, Configurations, and Computation"
status: published
items:
  - def-deterministic-one-tape-turing-machine
  - def-tape-finite-support-convention
  - def-turing-machine-configuration
  - def-one-step-configuration-relation
  - lem-deterministic-nonhalting-configurations-have-unique-successors
  - def-initial-accepting-and-rejecting-configurations
  - def-halting-computation-and-divergence
  - def-language-recognized-and-decided
  - def-partial-function-computed-by-a-machine
  - def-multitape-and-nondeterministic-machines
  - def-nondeterministic-accepting-computation
  - prop-valid-computation-histories-are-decidable
  - def-configuration-graph
  - lem-acceptance-is-configuration-reachability
  - fs-rejection-is-divergence
  - fs-nondeterministic-acceptance-requires-every-branch-to-halt
examples: []
---

This page fixes the core Turing-machine semantics for the computability theory
track: the deterministic one-tape model, right-infinite finite-support tapes,
configurations, the one-step relation, halting versus divergence, recognized
and decided languages, machine-computed partial functions, and the named
multitape and nondeterministic variants.

It also records two structural viewpoints that become load-bearing later. First,
valid accepting computation histories for one fixed machine and one fixed input
can be checked effectively. Second, acceptance can be read as reachability of
an accepting configuration in the configuration graph, with no acyclicity
assumption built into that graph.
