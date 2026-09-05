---
id: rem-how-much-of-the-theory-needs-symmetry-closedness-and-completeness
kind: remark
title: "How much of the theory needs symmetry, closedness, and completeness"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-enriched-category, def-symmetric-monoidal-category, def-left-closed-and-right-closed-monoidal-category]
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory, Sections 1.2, 1.4, 1.6, 2.1, and 2.5"
      url: "https://www.scribd.com/document/891660167/tr10"
    - title: "Emily Riehl, Categorical Homotopy Theory, Sections 3.2 and 7.4"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
---

## Remark

The basic definitions of $\mathcal V$-category and $\mathcal V$-functor use
only a monoidal base ([[def-enriched-category]]). Symmetry is an extra
structure ([[def-symmetric-monoidal-category]]), not part of that starting
point, and closedness is stronger still
([[def-left-closed-and-right-closed-monoidal-category]]).

The later items on this page use those stronger hypotheses only when they are
actually needed:

- mere monoidality suffices for enriched categories, enriched functors,
  enriched natural transformations, the underlying ordinary category, and the
  underlying ordinary category; the strict-2-category theorem additionally
  uses local smallness so that its hom-categories are honest categories;
- closedness enters when $\mathcal V$ is regarded as enriched in itself, when
  representable enriched functors are formed, and when weights take values in
  $\mathcal V$ itself;
- symmetry is used only where the particular source formula requires it, such
  as the standard weak-Yoneda setup and the free-enriched-category construction
  as stated here;
- completeness or cocompleteness of $\mathcal V_0$ are not needed for the
  elementary enriched notions, but they do appear in the free-enriched-category
  and small enriched functor-category constructions.

So the hypothesis ladder is deliberate: later items are stronger because their
conclusions are stronger, not because the page flattened everything to one
ambient assumption at the start.
