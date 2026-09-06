---
id: def-triangulated-category-axiom-tr-one
kind: definition
title: "Triangulated-category axiom TR1"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-distinguished-triangle, def-morphism-and-isomorphism-of-triangles]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Definition 13.3.2"
      url: "https://stacks.math.columbia.edu/tag/05QK"
---

## Definition

**TR1** requires: (i) every triangle isomorphic to a distinguished one is
distinguished; (ii) for every $f:X\to Y$ there are $Z,g,h$ for which
$X\xrightarrow fY\xrightarrow gZ\xrightarrow hX[1]$ is distinguished; and
(iii) $X\xrightarrow{1_X}X\to0\to X[1]$ is distinguished for every $X$.

