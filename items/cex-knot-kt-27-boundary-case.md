---
id: cex-knot-kt-27-boundary-case
kind: counterexample
title: "A knotted closure can have strong winding number one"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-satellite-induced-concordance-operator
justified_by:
  []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  scraped: []
  references:
    - title: "Tim D. Cochran, Christopher W. Davis, and Arunima Ray, “Injectivity of satellite operators in knot concordance”"
      url: "https://arxiv.org/pdf/1205.5058v3"
      locator: "Definition 1.1 and §2, strong winding and local-knot patterns"
---

## Statement refuted

A pattern has strong winding number ±1 if and only if its closure P(U) is the unknot.

## Statement references

[[def-satellite-induced-concordance-operator|Strong-winding definition]]

[CDR, Definition 1.1 and §2](https://arxiv.org/pdf/1205.5058v3)

## Facts & Assumptions

**Given:** A nontrivial knot J and the pattern P_J obtained by tying J into a small arc of the solid-torus core.

[F1] The closure of the local-knot pattern is J and its winding number is 1 ([[def-satellite-induced-concordance-operator]]).

[F2] Strong winding is the normal-generation property of the axis meridian in the closure complement ([[def-satellite-induced-concordance-operator]]).

## Counterexample

**Proof technique:** direct.

1.1 The pattern P_J has winding number 1 because tying a local knot does not change its homology class in the solid torus. Its closure is J, which is not the unknot by the choice of J. [F1, given, algebra]

1.2 The axis meridian is a meridian of J in this local-knot construction. Meridional filling of the knot exterior yields S³, whose fundamental group is trivial; van Kampen implies that the normal closure of the meridian is the entire group. Hence P_J is strong winding +1 although P_J(U) is not the unknot. [F2, given, algebra]

2.1 This disproves the forward implication from strong winding to an unknotted closure, while leaving the reverse implication untouched. The counterexample makes no claim that ordinary winding ±1 always implies strong winding ±1. [step 1.1, step 1.2] ∎
