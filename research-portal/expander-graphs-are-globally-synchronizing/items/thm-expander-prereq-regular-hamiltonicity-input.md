---
id: thm-expander-prereq-regular-hamiltonicity-input
kind: theorem
title: Hamiltonicity of a uniform fixed-degree regular graph
domain: mathematics
status: published
origin: pipeline
deps:
  - def-expander-prereq-regular-pairing-conditioning
  - def-expander-prereq-loop-compatible-networks
  - def-expander-prereq-asymptotic-quantifiers
  - lem-author-8d6ffb027277-feasible-regular-orders
  - lem-author-8d6ffb027277-hamilton-cycle-encodings
  - lem-author-8d6ffb027277-uniform-vertex-relabeling
  - lem-author-8d6ffb027277-simultaneous-high-probability-events
  - lem-author-8d6ffb027277-prescribed-cycle-transfer
dependency_roles:
  def-expander-prereq-regular-pairing-conditioning: mathematical-premise
  def-expander-prereq-loop-compatible-networks: mathematical-premise
  def-expander-prereq-asymptotic-quantifiers: mathematical-premise
  lem-author-8d6ffb027277-feasible-regular-orders: mathematical-premise
  lem-author-8d6ffb027277-hamilton-cycle-encodings: mathematical-premise
  lem-author-8d6ffb027277-uniform-vertex-relabeling: mathematical-premise
  lem-author-8d6ffb027277-simultaneous-high-probability-events: mathematical-premise
  lem-author-8d6ffb027277-prescribed-cycle-transfer: mathematical-premise
provenance:
  statement: ai-altered
  proof: literature-derived
external_input: true
sources:
  references:
    - title: R. W. Robinson and N. C. Wormald, Almost All Regular Graphs are
        Hamiltonian
      url: https://users.monash.edu.au/~nwormald/papers/hamreg.pdf
      locator: Section 1, first paragraph and Theorem 1, printed/PDF page 2
      statement: For each fixed integer d >= 3, the probability that a uniformly
        sampled labelled simple d-regular graph is Hamiltonian tends to one as n
        tends to infinity through feasible orders.
      hypotheses: The degree d >= 3 is fixed. The graph is uniform among labelled
        simple d-regular graphs on n vertices. Orders are feasible; in
        particular n is even when d is odd. No growing-degree or
        preselected-cycle probability statement is included.
      reading_limits: Downloaded the authoritative author-hosted PDF; read page 2
        model conventions and Theorem 1, and inspected the rendered page. Also
        read the proof outline on pages 3-7, including the perfect-matching
        lower-tail estimate (2.1). The technical matching concentration proof,
        cubic base theorem and odd-order extension were not independently
        reconstructed or certified. Theorem 1 is imported, not locally proved.
dependency_level: 4
---

## Statement

For each fixed integer $d\ge3$, the probability that a uniformly sampled labelled simple $d$-regular graph is Hamiltonian tends to one as its order grows through feasible values. A Hamiltonian cycle is a spanning cyclic ordering with an edge between every consecutive pair, including the last and first. The result is asymptotic and imposes no chosen Hamiltonian cycle in advance.

## External input

Theorem 1 of Robinson and Wormald is imported under the uniform labelled model and fixed-degree/parity conventions stated immediately above it on page 2. No local proof of this substantial input is claimed. In particular, the perfect-matching concentration estimate (2.1) is not inferred merely from the pairing construction or from the first moment of a cycle count.

## Prerequisite interfaces

[[def-expander-prereq-regular-pairing-conditioning]] defines the uniform simple regular graph law and distinguishes it from the unconditioned pairing multigraph.

[[def-expander-prereq-loop-compatible-networks]] fixes the simple graph and network conventions; the theorem concerns the simple unweighted case.

[[def-expander-prereq-asymptotic-quantifiers]] defines the feasible-order high-probability limit; the degree remains fixed.

[[lem-author-8d6ffb027277-feasible-regular-orders]] establishes the exact feasible orders.

[[lem-author-8d6ffb027277-hamilton-cycle-encodings]] establishes the finite Hamilton-cycle event and cycle convention.

[[lem-author-8d6ffb027277-uniform-vertex-relabeling]] establishes the relabeling action preserving the uniform law.

[[lem-author-8d6ffb027277-simultaneous-high-probability-events]] establishes simultaneous high-probability intersections.

[[lem-author-8d6ffb027277-prescribed-cycle-transfer]] establishes the conditional existence transfer to any prescribed cycle.

## Local application

For any relabeling-invariant properties $Q_n$ whose probabilities tend to one in this same fixed-degree model, there is, for every sufficiently large feasible $n$, a graph in $Q_n$ containing any prescribed Hamiltonian cycle on $[n]$. Apply the prescribed-cycle transfer lemma to the imported Hamiltonicity limit and the assumed limit for $Q_n$. This local consequence does not assert that a uniform graph contains a preselected cycle with high probability; invariance of $Q_n$ is essential to the relabeling argument.
