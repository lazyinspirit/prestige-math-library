---
id: def-the-freyd-axioms-for-an-abelian-category
kind: definition
title: "Freyd's axioms A0, A1, A1*, A2, A2*, A3, and A3* for abelian categories"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-initial-terminal-and-zero-object, def-equalizers-and-coequalizers, def-monomorphism-and-epimorphism]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-28
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Junhan Tan, The Freyd-Mitchell Embedding Theorem, Definition 2.2"
      url: "https://arxiv.org/pdf/1901.08591"
    - title: "Peter Freyd, Abelian Categories, Chapter 2"
      url: "https://www.tac.mta.ca/tac/reprints/articles/3/tr3.pdf"
pipeline_run: frontier-21
---

## Definition

Freyd's axiomatisation of an abelian category asks for the following data and
properties.

1. **A0.** A zero object exists
   ([[def-initial-terminal-and-zero-object]]).
2. **A1.** Every pair of objects has a product.
3. **A1\*.** Every pair of objects has a coproduct.
4. **A2.** Every morphism has a kernel
   ([[def-equalizers-and-coequalizers]]).
5. **A2\*.** Every morphism has a cokernel
   ([[def-equalizers-and-coequalizers]]).
6. **A3.** Every monomorphism is a kernel
   ([[def-monomorphism-and-epimorphism]]).
7. **A3\*.** Every epimorphism is a cokernel.

Unlike the working definition on this page, no additive enrichment is part of
the data. Freyd's point is that the additive structure can be recovered from
the remaining axioms.
