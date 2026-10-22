---
id: lem-satellite-operator-preserves-concordance
kind: lemma
title: "Satellite operators preserve concordance"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-cdr-satellite-concordance-categories
  - def-satellite-induced-concordance-operator
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
      locator: "§2, satellite operations on concordances"
---

## Statement

Let P⊂S¹×D² be a smooth oriented pattern. If oriented knots K₀ and K₁ are concordant in one of the four categories C_sm, C_top, C_ex or C^{1/n}, then P(K₀) and P(K₁) are concordant in the same category. Thus P induces a well-defined set map on each of these concordance sets.

## Statement references

[CDR, §2](https://arxiv.org/pdf/1205.5058v3)

## Facts & Assumptions

**Given:** A pattern P and a concordance annulus A from K₀ to K₁ in one of the stated ambient categories.

[F1] Satellite insertion uses a zero-framed tubular copy of S¹×D² around each endpoint knot ([[def-satellite-induced-concordance-operator]]).

[F2] Each category specifies the ambient 4-manifold and regularity of its concordance annulus ([[def-cdr-satellite-concordance-categories]]).

## Proof

1.1 In the smooth product category, choose a tubular neighborhood of the smooth annulus A. Its oriented normal 2-plane bundle over A has relative Euler obstruction in H²(A,∂A;Z)≅Z. The boundary trivializations are the zero framings of K₀ and K₁; the relative obstruction is the difference of their self-linking numbers, hence zero. A relative framing therefore identifies a neighborhood of A with A×D² and agrees with the two prescribed endpoint zero-framed neighborhoods. [F1, F2, given]

1.2 In that framed neighborhood insert P in every disk fiber. The result is an embedded annulus from P(K₀) to P(K₁); the product collars and endpoint framings are preserved. This proves concordance preservation for smooth annuli in a standard product. [F1, F2, step 1.1, algebra]

2.1 For a locally flat annulus, the corresponding statement requires a locally flat normal-disk-neighborhood theorem with a relative trivialization matching the endpoint zero framings. That supplier is absent from the local prerequisites, and the smooth vector-bundle argument in step 1.1 does not prove its topological microbundle analogue. [F2, step 1.1, algebra]

## Owner escalation

The locally flat topological branch, and therefore the exotic-smooth and localized branches when their concordance annuli are not already supplied with compatible framed neighborhoods, needs a local normal-microbundle supplier. Proposed item: lem-locally-flat-annulus-relative-zero-framed-neighborhood on the locally-flat-surfaces prerequisite page. The all-category statement is not proved in this draft.