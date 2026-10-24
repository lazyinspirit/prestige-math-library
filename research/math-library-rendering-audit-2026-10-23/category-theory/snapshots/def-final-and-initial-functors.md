---
id: def-final-and-initial-functors
kind: definition
title: "Final and initial functors via nonempty connected comma categories"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-comma-slice-and-coslice-categories, def-isomorphism-groupoid-and-connected-category, def-opposite-category, def-functor-and-contravariant-functor]
justified_by: []
aliases: [def-cofinal-functor]
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "T. Leinster, Basic Category Theory, Definition 6.3.1"
      url: "https://arxiv.org/pdf/1612.09375"
pipeline_run: frontier-12
---

## Definition

Let $u:\mathcal A\to\mathcal B$ be a functor
([[def-functor-and-contravariant-functor]]). It is **final** when, for every
$b\in\mathcal B$, the comma category $(b\downarrow u)$
([[def-comma-slice-and-coslice-categories]]) is nonempty and connected in the
finite-zigzag sense of
[[def-isomorphism-groupoid-and-connected-category]]. Its objects are pairs
$(a,\beta:b\to u(a))$.

The functor $u$ is **initial** when $u^{\mathrm{op}}:\mathcal A^{\mathrm{op}}
\to\mathcal B^{\mathrm{op}}$ is final
([[def-opposite-category]]). Equivalently, every $(u\downarrow b)$ is nonempty
and connected. Some sources call a final functor cofinal.
