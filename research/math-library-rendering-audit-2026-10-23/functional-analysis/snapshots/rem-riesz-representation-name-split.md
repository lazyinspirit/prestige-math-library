---
id: rem-riesz-representation-name-split
kind: remark
title: "Two different Riesz representation theorems"
status: published
origin: pipeline
deps: ["thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals", "def-dual-space-of-a-normed-space", "def-dependent-choice"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-10-maintenance-receipts.jsonl (rem-riesz-representation-name-split). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis, Examples 1.32 and 1.37, pp.32,37"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
---

## Remark

Assume Dependent Choice ([[def-dependent-choice]]). For a locally compact Hausdorff space $K$, [[thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals]] identifies the complex continuous dual of $C_0(K;\mathbb C)$ with finite regular complex Borel measures, with functional norm equal to total variation. This is the Riesz–Markov–Kakutani representation. The Hilbert-space Riesz theorem is a different representation by inner-product vectors and belongs to the later Hilbert-space development. The evaluation pairing from [[def-dual-space-of-a-normed-space]] is not itself an inner-product identification. No Hilbert representation theorem is used here.
