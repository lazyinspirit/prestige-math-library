---
id: rem-the-published-modular-law-for-subgroups-is-the-instance
kind: remark
title: "The published subgroup modular law is the instance"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-the-subobject-lattice-of-an-abelian-category-is-modular, lem-dedekind-modular-law-for-subgroups]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Daniel Murfet, Abelian Categories, Section 4.1"
      url: "https://therisingsea.org/notes/AbelianCategories.pdf"
pipeline_run: frontier-22
---

The subgroup modular law already published as
[[lem-dedekind-modular-law-for-subgroups]] is the concrete group-theoretic
instance of the categorical modularity theorem. Item
[[thm-the-subobject-lattice-of-an-abelian-category-is-modular]] is the abstract
statement: in $\mathbf{Ab}$ its subobjects are subgroups, and the modular-law
identity becomes exactly Dedekind's law.
