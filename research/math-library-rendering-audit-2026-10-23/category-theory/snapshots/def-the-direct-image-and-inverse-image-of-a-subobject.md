---
id: def-the-direct-image-and-inverse-image-of-a-subobject
kind: definition
title: "Direct and inverse image of a subobject"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-image-and-coimage-in-a-category-with-kernels-and-cokernels, def-pullbacks-and-pushouts, def-subobject-and-quotient-object]
justified_by: [thm-direct-and-inverse-image-of-subobjects-form-a-galois-connection]
aliases: []
landmark: false
verification:
  audited: 2026-08-28
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Section VIII.3"
      url: "https://link.springer.com/book/10.1007/978-1-4757-4721-8"
pipeline_run: frontier-22
---

## Definition

Let $f:A\to A'$ be a morphism in an abelian category.

If $b:B\rightarrowtail A$ represents a subobject of $A$, its **direct image**
along $f$ is the subobject of $A'$ represented by the image inclusion of the
composite

$$B\rightarrowtail A\xrightarrow{f}A'.$$

It is denoted $f_*B$.

If $c:C\rightarrowtail A'$ represents a subobject of $A'$, its **inverse image**
along $f$ is the subobject of $A$ represented by the pullback of $c$ along $f$
([[def-pullbacks-and-pushouts]]). It is denoted $f^*C$.

The representative-independence of these assignments is discharged by
[[thm-direct-and-inverse-image-of-subobjects-form-a-galois-connection]].
