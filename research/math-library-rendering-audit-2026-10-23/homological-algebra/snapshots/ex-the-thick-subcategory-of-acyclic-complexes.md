---
id: ex-the-thick-subcategory-of-acyclic-complexes
kind: example
title: "The thick subcategory of acyclic complexes"
status: published
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [prop-the-full-subcategory-of-acyclic-complexes-is-thick-in-the-homotopy-category, prop-a-quasi-isomorphism-has-an-acyclic-cone-in-the-triangulated-language]
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Derived Categories, Section 13.10"
      url: "https://stacks.math.columbia.edu/tag/014P"
---

## Example

For an abelian category $\mathcal A$, the acyclic complexes in
$K(\mathcal A)$ form a thick subcategory, and the cone of every
quasi-isomorphism belongs to it.

## Verification

**Given:** An abelian category $\mathcal A$ and the displayed data.

1.1 Thickness is the preceding proposition. [given]

2.1 A quasi-isomorphism has an acyclic cone, so its standard cone object lies in this thick subcategory. [step 1.1, given] ∎
