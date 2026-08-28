---
id: fs-the-subobject-lattice-of-an-abelian-category-is-distributive
kind: false-statement
title: "FALSE: every subobject lattice in an abelian category is distributive"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cex-a-subobject-lattice-need-not-be-distributive]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Daniel Murfet, Abelian Categories, Section 4.2"
      url: "https://therisingsea.org/notes/AbelianCategories.pdf"
pipeline_run: frontier-22
---

## Statement

Every subobject lattice in an abelian category is distributive.

## Facts & Assumptions

**Given:** The object $(\mathbb Z/2)\oplus(\mathbb Z/2)$ in $\mathbf{Ab}$.

[L1] The subobject lattice of this object is a concrete modular but
non-distributive diamond
([[cex-a-subobject-lattice-need-not-be-distributive]]).

## Refutation

1.1 The example [L1] exhibits an object of an abelian category whose subobject lattice is not distributive. [L1]

2.1 Therefore the universal statement is false. In particular, modularity of subobject lattices does not imply distributivity. [L1, step 1.1] ∎
