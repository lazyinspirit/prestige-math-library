---
id: ex-the-empty-set-is-the-product-of-the-large-family-of-all-sets
kind: example
title: "Under the definable-class diagram convention, the empty set is the product of the large family of all sets"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-products-and-coproducts, def-small-finite-and-large-limits-completeness-and-cocompleteness, prop-sets-and-functions-form-category-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: universal-property
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Example 3.7.4"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Example

Under the library's definable-class diagram convention, for the discrete large
diagram in $\mathbf{Set}$ containing every set as a factor, the empty set is a
product apex.

## Facts & Assumptions

**Given:** The class-indexed discrete diagram of all sets.

[F1] For a family indexed by a **set**, a product cone consists of one map to
every factor and is terminal among such cones ([[def-products-and-coproducts]]).
The diagram here is indexed by a proper class, which that definition does not
cover, so "product" is used below in the extended sense: an apex with one map to
every factor, terminal among all such cones over the definable-class diagram.
That extension is stipulated here rather than cited, and it is the whole point of
the example — the pathology below is a consequence of leaving set-sized indexing,
not a statement about any product the definition supplies.

[F2] A large diagram is one whose indexing category is not small; completeness
does not assert that such diagrams have no limits
([[def-small-finite-and-large-limits-completeness-and-cocompleteness]]).

[F3] Morphisms of $\mathbf{Set}$ are functions
([[prop-sets-and-functions-form-category-set]]).

## Verification

**Proof technique:** universal property.

1.1 There is one empty function $\varnothing\to X$ for every set $X$, so these functions form a cone with apex $\varnothing$. [F3]

1.2 Any cone with apex $Y$ includes a function from $Y$ to the empty-set factor. Such a function exists only when $Y=\varnothing$. Hence every cone has empty apex. [F3]

2.1 Between any two empty apices there is exactly one function, and all leg equations hold automatically because the functions are empty. Therefore the cone of step 1.1 is terminal among cones and is a product by [F1]. [F1, F3, step 1.1, step 1.2]

3.1 The indexing family is a proper class, so [F2] classifies the diagram as large. Its having this limit is compatible with completeness being a claim only about all small diagrams. [F2, step 2.1] ∎
