---
id: def-graph-power-and-walk-constraint
kind: definition
title: "Graph power and walk constraint"
status: draft
origin: pipeline
deps: [def-constraint-graph-and-labeling-value]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Irit Dinur, The PCP theorem by gap amplification; §1.2 Powering, pp4–5; underlying walk edges and original constraints."
      url: "https://www.wisdom.weizmann.ac.il/~dinuri/mypapers/combpcp.pdf"
---

## Definition

For a $d$-regular constraint graph with normalized adjacency $M$ under [[def-constraint-graph-and-labeling-value]], and an integer $t\ge1$, the adjacency-slot graph power has one slot for every length-$t$ port walk. Its degree is $d^t$, its adjacency is $A^t$, and its transition matrix is $M^t$: matrix multiplication counts walks with all multiplicities. Walk reversal supplies an inverse slot.

The predicate of a walk $(v_0,e_1,v_1,\ldots,e_t,v_t)$ tests every original edge relation on the labels of its incident vertex occurrences. Repeated occurrences of one vertex use the same label. Thus it is a conjunction of $t$ tests, on at most $t+1$ original vertices; it is not in general a binary predicate on endpoint letters. A fixed labeling satisfies the walk predicate exactly when none of the traversed edges is violated.
