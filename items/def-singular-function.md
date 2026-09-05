---
id: def-singular-function
kind: definition
title: "A singular function on a compact interval"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-continuity-real, def-derivative, def-interval, def-monotone-function]
justified_by: []
aliases: []
landmark: false
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
    - title: "A. M. Bruckner, J. B. Bruckner, and B. S. Thomson, Real Analysis, 2nd ed."
      url: "https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf"
---

## Definition

Let $F : [a,b] \to \mathbb{R}$.

We call $F$ a **singular function** on $[a,b]$ when:

1. $F$ is continuous ([[def-continuity-real]]);
2. $F$ is nondecreasing ([[def-monotone-function]]);
3. $F$ is not constant;
4. $F'$ exists almost everywhere in the sense of [[def-derivative]] and equals
   $0$ almost everywhere.

## Remarks

- This is the function-level form of a singular continuous measure: the increase
  is carried by a null set.
- The Cantor function is the canonical example, and later examples build other
  singular functions from it.
