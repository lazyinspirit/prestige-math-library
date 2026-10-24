---
id: def-galois-connection
kind: definition
title: 'Galois connection between preorders'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-preorder, prop-preorders-as-categories-and-monotone-maps-as-functors]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Section 4.2'
      url: 'https://emilyriehl.github.io/files/context.pdf'
    - title: 'Tom Leinster, Basic Category Theory, Example 2.2.7'
      url: 'https://arxiv.org/pdf/1612.09375.pdf'
pipeline_run: null
---

## Definition

Let $A$ and $B$ be preorders ([[def-preorder]]). A **Galois connection** $F\dashv G$ consists of monotone maps $F:A\to B$ and $G:B\to A$ such that, for every $a\in A$ and $b\in B$,

$$F(a)\le b\quad\Longleftrightarrow\quad a\le G(b).$$

Under the identification of preorders with thin categories in [[prop-preorders-as-categories-and-monotone-maps-as-functors]], this is exactly an adjunction. The corresponding unit and counit are the inequalities

$$a\le GF(a),\qquad FG(b)\le b.$$
