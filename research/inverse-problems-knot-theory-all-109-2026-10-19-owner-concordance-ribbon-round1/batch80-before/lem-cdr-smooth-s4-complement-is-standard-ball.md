---
id: lem-cdr-smooth-s4-complement-is-standard-ball
kind: lemma
title: "The CDR smooth four-ball complement under the smooth four-sphere hypothesis"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-cdr-satellite-concordance-categories
justified_by:
  []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Tim D. Cochran, Christopher W. Davis, and Arunima Ray, “Injectivity of satellite operators in knot concordance”"
      url: "https://arxiv.org/pdf/1205.5058v3"
      locator: "§3, smooth complement step in the weak-injectivity proof"
---

## Statement

Let B be a smooth 4-ball embedded in the standard smooth 4-sphere S⁴. The closure of S⁴\B is diffeomorphic to the standard 4-ball. This is the special smooth Schoenflies complement assertion used after a capped contractible 4-manifold has been identified with standard S⁴; it does not assert the smooth 4-dimensional Poincaré conjecture.

## Statement references

[CDR, proof of Proposition 3.2](https://arxiv.org/pdf/1205.5058v3)

## Facts & Assumptions

**Given:** A smooth embedded S³ in S⁴ and a complementary component W with the stated properties.

[F1] Ordinary smooth concordance uses the standard smooth product ambient structure ([[def-cdr-satellite-concordance-categories]]).

## Proof

1.1 Since W is contractible, its reduced integral homology vanishes; the boundary hypothesis gives ∂W≅S³. These facts establish the homological conditions in the statement but do not determine the smooth diffeomorphism type. [given, algebra]

1.2 The implication W≅B⁴ is precisely the smooth complement assertion invoked in the CDR ordinary-smooth branch. It does not follow from contractibility by a handle cancellation argument supplied here. [F1, step 1.1]

## Owner escalation

The cited source attributes this special complement step to Kirby; a complete local smooth Schoenflies proof or exact conditional theorem is absent. Proposed supplier: thm-smooth-4-ball-embedded-in-s4-has-standard-complement, placed on the Freedman/smooth-4-manifold prerequisite page. This item remains escalated.