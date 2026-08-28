---
id: def-the-join-of-subobjects-in-an-abelian-category
kind: definition
title: "The join of two subobjects in an abelian category"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-subobject-and-quotient-object, def-image-and-coimage-in-a-category-with-kernels-and-cokernels, thm-an-abelian-category-has-all-finite-limits-and-all-finite-colimits]
justified_by: [thm-the-join-of-subobjects-is-their-least-upper-bound]
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
    - title: "Daniel Murfet, Abelian Categories, Section 4.2"
      url: "https://therisingsea.org/notes/AbelianCategories.pdf"
pipeline_run: frontier-22
---

## Definition

Let $b:B\rightarrowtail A$ and $c:C\rightarrowtail A$ represent two subobjects
of an object $A$ in an abelian category. Because finite biproducts exist
([[thm-an-abelian-category-has-all-finite-limits-and-all-finite-colimits]]),
there is a unique morphism

$$[b,c]:B\oplus C\to A$$

whose composites with the two biproduct injections are $b$ and $c$.

The **join** of the two subobjects is the subobject of $A$ represented by the
image inclusion of $[b,c]$ in the sense of
[[def-image-and-coimage-in-a-category-with-kernels-and-cokernels]]. It is
denoted

$$B\vee C.$$

The well-definedness obligation on representatives is discharged by
[[thm-the-join-of-subobjects-is-their-least-upper-bound]].
