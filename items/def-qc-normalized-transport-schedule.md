---
id: def-qc-normalized-transport-schedule
kind: definition
title: "Normalized transport schedule for a J/CZ circuit"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qc-circuit-syntax-and-register-order, def-qc-circuit-denotational-semantics, lem-qc-disjoint-layer-order-independence, def-qc-one-qubit-gate-alphabet-and-rotations, def-qc-controlled-phase-rotation, def-qc-j-gate-and-equatorial-basis, lem-qc-j-basis-and-phase-identities]
justified_by: []
dependency_level: 8
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415, §20.6"
      url: https://arxiv.org/pdf/1907.09415
    - title: "Robert Raussendorf, Daniel E. Browne, and Hans J. Briegel, Measurement-based quantum computation on cluster states, §§II D–F"
      url: https://arxiv.org/pdf/quant-ph/0301052
---

## Definition

Let $C$ be a finite $n$-wire circuit over the $J(\alpha)$ and $CZ$ gates, with chronological layers
$L_1,\ldots,L_d$ and source wire labels $0,\ldots,n-1$ as in
[[def-qc-circuit-syntax-and-register-order]]. Schedule index $j\in\{1,\ldots,n\}$
denotes source wire $j-1$. For each source layer $L_r$, let $M_r$ be the
matching of its $CZ$ occurrences after reindexing a source pair $\{u,v\}$ as
$\{u+1,v+1\}$, and let $J_r\subseteq\{1,\ldots,n\}$ be the indices carrying
one-qubit gates $J(\alpha_{rj})$. The source layer has pairwise disjoint gate
supports by [[def-qc-circuit-syntax-and-register-order]], so no $J$ gate in
$J_r$ meets an edge of $M_r$. By
[[lem-qc-disjoint-layer-order-independence]], its denotation may be written
with the CZ matching first and then at most one $J(\alpha_{rj})$ per schedule
index $j$. The
**normalized transport schedule** $\mathcal T(C)$ is the finite chronological
list of rounds $(M_s,(\alpha_{s1},\ldots,\alpha_{sn}))$ and the scalar
$\sigma_C$ defined as follows. A round applies its matching first and then
one $J$ gate on each wire. Define
$\sigma_C=\prod_{r:0<|J_r|<n}e^{i\pi(n-|J_r|)/4}$. The round list is the
concatenation, in source-layer order, of the blocks specified by the first
matching case below; the empty product is $1$. This order makes the
zero-wire empty-layer case unambiguous:

1. If $J_r=\varnothing$ and $M_r=\varnothing$, the block is empty.
2. If $n\ge1$ and $J_r=\{1,\ldots,n\}$, the block consists of one round with matching
   $M_r$ and the original angles $\alpha_{rj}$.
3. If $J_r=\varnothing$ and $M_r\ne\varnothing$, the block consists of two rounds: the
   first has matching $M_r$ and angle $0$ on every wire; the second has no
   matching and angle $0$ on every wire.
4. If $0<|J_r|<n$, the block consists of three rounds. The first has matching $M_r$,
   angle $\alpha_{rj}$ on active wires $j\in J_r$, and angle $\pi/2$ on
   idle wires. The next two have no matching, angle $0$ on active wires,
   and angle $\pi/2$ on idle wires. The factor for this mixed layer is
   included in the displayed product defining $\sigma_C$.

The rounds are numbered $s=1,\ldots,R$ in concatenation order. Their schedule
indices continue to denote the corresponding source wires $j-1$. Angles at
indices without an original $J$ gate are padding angles. For a mixed layer,
the active-wire product is $J(0)J(0)J(\alpha)=J(\alpha)$ and each idle wire
contributes $J(\pi/2)^3=e^{i\pi/4}I$; the scalar is therefore recorded in
$\sigma_C$ rather than suppressed. The no-$J$ matching case has two
$J(0)=H$ transports, whose product is $I$. No claim about the transport
graph's simplicity is part of this definition.
