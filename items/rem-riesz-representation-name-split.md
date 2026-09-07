---
id: rem-riesz-representation-name-split
kind: remark
title: "Two different Riesz representation theorems"
status: draft
origin: pipeline
deps: ["thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals", "def-dual-space-of-a-normed-space"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis, Examples 1.32 and 1.37, pp.32,37"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
---

## Remark

For a locally compact Hausdorff space $K$, [[thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals]] identifies the complex continuous dual of $C_0(K;\mathbb C)$ with finite regular complex Borel measures, with functional norm equal to total variation. This is the Riesz–Markov–Kakutani representation. The Hilbert-space Riesz theorem is a different representation by inner-product vectors and belongs to the later Hilbert-space development. The evaluation pairing from [[def-dual-space-of-a-normed-space]] is not itself an inner-product identification. No Hilbert representation theorem is used here.
