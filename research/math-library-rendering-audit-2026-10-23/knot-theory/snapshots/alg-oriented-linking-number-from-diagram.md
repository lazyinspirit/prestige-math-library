---
id: alg-oriented-linking-number-from-diagram
kind: algorithm
title: "Compute oriented linking number from a diagram"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps: [def-oriented-crossing-sign-writhe-and-blackboard-framing,
       def-oriented-link-in-s-three-and-ambient-isotopy,
       def-regular-oriented-link-diagram,
       lem-linking-number-even-sum-and-reidemeister-invariance,
       def-countable-choice]
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Danny Calegari, Introduction to Knot Theory, University of Chicago course notes (2025), §3.3, pp. 26–29"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "§3.3, Definition 3.11, pp. 26–27"
    - title: "Mohamed Elhamdadi, Mustafa Hajij, and Kyle Istvan, Framed Knots, arXiv:1910.10257v6 (2020), §3, pp. 3–9"
      url: "https://arxiv.org/pdf/1910.10257v6"
      locator: "§3, Definition 3.1, pp. 3–4"
---

## Definition

Assume $\mathrm{AC}_\omega$.

The input is a finite regular oriented link diagram together with its declared
components. If it does not have exactly two components, return
`invalid-input`. For a two-component diagram $D$, initialize $s:=0$ and make
one pass over its finite crossing list. At each crossing whose branches lie on
different components, add
$$\operatorname{sgn}\det_P(v_{\rm over},v_{\rm under})$$
to $s$, where the determinant is taken in the oriented projection plane; ignore
self-crossings. Return $s/2$. The even-sum lemma establishes that this output is
an integer and is the diagram's linking number.

## Definition references

[[def-oriented-crossing-sign-writhe-and-blackboard-framing|Crossing sign convention]]

[[def-oriented-link-in-s-three-and-ambient-isotopy|Two-component oriented link input]]

[[def-regular-oriented-link-diagram|Finite crossing list and component labels]]

[[lem-linking-number-even-sum-and-reidemeister-invariance|Evenness and invariance of the mixed crossing sum]]

[[def-countable-choice|Countable-choice hypothesis for the integer output]]
