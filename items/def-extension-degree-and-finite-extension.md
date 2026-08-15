---
id: def-extension-degree-and-finite-extension
kind: definition
title: "The degree $[K:F]=\\dim_F K$ of a finite field extension"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-field-extension-generated-subfields-and-simple-extension, def-dimension]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "A. W. Knapp, Basic Algebra, 2nd ed., Chapter IX, Section 1"
      url: "https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf"
pipeline_run: null
---

## Definition

Let $K/F$ be a field extension. Scalar multiplication by $F\subseteq K$, together with addition in $K$, makes $K$ an $F$-vector space. The extension is **finite** when this vector space is finite-dimensional. In that case its **degree** is

$$[K:F]:=\dim_FK.$$

No numerical degree is assigned here to an infinite-dimensional extension.
