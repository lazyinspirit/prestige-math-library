---
id: def-trace-dual-and-codifferent-of-a-number-field
kind: definition
title: "Trace duals and the codifferent"
status: draft
origin: pipeline
deps: [def-fractional-ideal, lem-trace-pairing-for-a-finite-separable-extension]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Keith Conrad, The Different Ideal, Definition 3.2"
      url: "https://kconrad.math.uconn.edu/blurbs/gradnumthy/different.pdf"
---

## Definition

For a lattice $A\subset K$, set $A^\vee=\{x\in K:\operatorname{Tr}_{K/\mathbb Q}(xA)\subseteq\mathbb Z\}$.  The **codifferent** is $\mathcal O_K^\vee$; the definition is intrinsic, not basis-dependent.
