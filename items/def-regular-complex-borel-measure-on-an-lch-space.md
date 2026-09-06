---
id: def-regular-complex-borel-measure-on-an-lch-space
kind: definition
title: "Regular complex Borel measures"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-regular-borel-measure-on-an-lch-space, def-complex-measure, def-total-variation-of-a-signed-or-complex-measure]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Donald L. Cohn, Measure Theory, 2nd ed., Proposition 7.3.4"
      url: "https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf"
---

## Definition

Let $X$ be a locally compact Hausdorff space. A complex Borel measure $\mu$
on $X$ is **regular** if its total variation
$|\mu|$ is a regular Borel measure in the preceding, all-Borel sense. This
total-variation convention is the one that controls $|\int f\,d\mu|$ and the
norm in the $C_0$ representation theorem.
