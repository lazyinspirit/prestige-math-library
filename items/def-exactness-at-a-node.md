---
id: def-exactness-at-a-node
kind: definition
title: "Exactness at a node"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-the-opposite-of-an-abelian-category-is-abelian,
       def-image-and-coimage-in-a-category-with-kernels-and-cokernels]
justified_by: [thm-the-subobject-inequalities-underlying-exactness]
landmark: true
verification:
  audited: 2026-08-29
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.5, Definition 12.5.7"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
    - title: "David Mehrle, Category Theory, Part III, Definition 7.20"
      url: "https://pi.math.cornell.edu/~dmehrle/notes/partiii/cattheory_partiii_notes.pdf"
pipeline_run: frontier-23
---

## Definition

Let
$$A\xrightarrow{f}B\xrightarrow{g}C$$
be composable morphisms in an abelian category.

The pair is **exact at $B$** when the image of $f$ and the kernel of $g$
represent the same subobject of $B$:
$$[\operatorname{im}(f)] = [\ker(g)].$$

Equivalently, by the dual description in the opposite abelian category
([[thm-the-opposite-of-an-abelian-category-is-abelian]]) together with the
definitions of image and coimage
([[def-image-and-coimage-in-a-category-with-kernels-and-cokernels]]), the pair
is exact at $B$ exactly when the cokernel of $f$ and the coimage of $g$
represent the same quotient of $B$:
$$[\operatorname{coker}(f)] = [\operatorname{coim}(g)].$$

The well-definedness of the first equality as a comparison of subobjects is
exactly the content of [[thm-the-subobject-inequalities-underlying-exactness]].
