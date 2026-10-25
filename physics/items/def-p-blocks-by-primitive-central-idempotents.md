---
id: def-p-blocks-by-primitive-central-idempotents
kind: definition
title: "p-blocks from primitive central idempotents"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-splitting-p-modular-system-for-a-finite-group]
verification:
  audited: 2026-09-05
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "J. Miquel Martinez, Modular Representation Theory of Finite Groups"
      url: "https://www.uv.es/jomimar8/pdfs/course%20notes.pdf"
    - title: "Tudor Ciurca, Representation Theory"
      url: "https://www.scribd.com/document/951548499/ModRep"
---

## Definition

Fix a splitting $p$-modular system $(K,\mathcal O,k)$ for a finite group $G$.
A **$p$-block idempotent** is a primitive central idempotent of $\mathcal O G$
or, after reduction, of $kG$.

If $e$ is such an idempotent, the corresponding **block** is the two-sided
ideal

$$B=\mathcal OGe\qquad\text{or}\qquad B=kGe.$$

The primitive central idempotents are pairwise orthogonal and sum to $1$, so
the algebra splits as a direct product of its block summands.
