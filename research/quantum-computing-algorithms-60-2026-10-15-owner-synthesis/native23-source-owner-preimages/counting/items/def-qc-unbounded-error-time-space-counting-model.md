---
id: def-qc-unbounded-error-time-space-counting-model
kind: definition
title: "Unbounded error time space counting model"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - def-probabilistic-polynomial-time-machine-interface
  - def-effective-binary-encoding-and-decoder
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Eric Allender et al., Time-Space Tradeoffs in the Counting Hierarchy"
      url: https://people.cs.rutgers.edu/~allender/papers/tradeoff.pdf
    - title: "Van Melkebeek and Watson, A Quantum Time-Space Lower Bound for the Counting Hierarchy, Sections 2–3"
      url: https://arxiv.org/pdf/0712.2545
---

## Definition

Use the fixed multitape fair-bit probabilistic machine interface of [[def-probabilistic-polynomial-time-machine-interface]], with a read-only input tape and charged work tapes. Fix one access profile for each class. In the **sequential** profile, input and work-tape heads move locally, one cell per transition. In the **VMW random-access** profile, the machine has a fixed number of heads; each may move locally, stay put, or jump to an address delimited by two classical work-tape heads. A classical input query reads the addressed input symbol in one transition. If heads collide on a work tape so that its operation is not defined, that tape operation is omitted in that transition. These access profiles define distinct classes and are never silently identified. Time is the worst-case number of transitions on every branch. Sequential-profile space counts distinct visited work cells; VMW-profile space is the maximum work-head address visited on any branch. The read-only input is uncharged.

For a fixed profile and bound t, PrTIME(t) is the class of languages with a machine accepting with probability strictly greater than 1/2 on members and at most 1/2 on nonmembers; PrTISP(t,s) imposes both bounds. We write PrTIME_VMW and PrTISP_VMW when using the VMW random-access profile. Superscript A permits exact classical membership queries to A; writing each query and returning from it are charged, and the total query-string length is bounded by the machine's time. For the sequential profile, LCH_1=PrTIME(n) and LCH_(j+1)=PrTIME(n)^{LCH_j}. An LCH oracle is deterministic: the probabilistic machine's fair-bit branches are external to its oracle queries.

A formula for MajSAT has a fixed finite variable set and is accepted when at least half of all assignments satisfy it. MajMajSAT has two disjoint, ordered variable blocks; for at least half of outer assignments, the residual formula must be true on at least half of the inner assignments. We use at-least-half for both formula thresholds. These formula conventions are distinct from the strict machine threshold; the bounded-overhead tie-normalization result is proved separately in [[lem-qc-unbounded-error-tie-normalization]].
