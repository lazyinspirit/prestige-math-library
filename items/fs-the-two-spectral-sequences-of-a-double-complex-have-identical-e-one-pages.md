---
id: fs-the-two-spectral-sequences-of-a-double-complex-have-identical-e-one-pages
kind: false-statement
title: The two spectral sequences of a double complex have identical e one pages
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: ["prop-the-two-double-complex-spectral-sequences-have-the-same-abutment-but-not-the-same-pages", "thm-the-row-filtration-spectral-sequence-of-a-first-quadrant-double-complex", "thm-the-column-filtration-spectral-sequence-of-a-first-quadrant-double-complex", "lem-abelian-group-model-for-spectral-sequence-computations"]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra, Chapter 5"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
    - title: "The Stacks Project, Homological Algebra"
      url: "https://stacks.math.columbia.edu/download/homology.pdf"
---

## Statement

**False:** The two spectral sequences of every double complex have identical $E^1$ pages.

## Facts & Assumptions

[F1] [[thm-the-row-filtration-spectral-sequence-of-a-first-quadrant-double-complex]] computes horizontal-first row pages; [[thm-the-column-filtration-spectral-sequence-of-a-first-quadrant-double-complex]] computes vertical-first column pages.

[F2] [[lem-abelian-group-model-for-spectral-sequence-computations]] supplies the nonzero group $k=\mathbb Z/2$. [[prop-the-two-double-complex-spectral-sequences-have-the-same-abutment-but-not-the-same-pages]] distinguishes common targets from page equality.

## Refutation

**Given:** $C_{1,0}=C_{0,0}=k$, $h_{1,0}=1_k$, and every other component and map zero. All double-complex identities hold because every possible double composite is zero.

1.1 The only nonzero horizontal complex is $k\xrightarrow{1}k$. Its kernel at the source and cokernel at the target are zero. Thus every row $E^1$ term is zero. The two nonzero vertical complexes each consist of a single $k$ with zero differential; therefore column $E^1_{1,0}=E^1_{0,0}=k$. The row and column formulas have exactly the hypotheses in [F1], since the witness is first quadrant and finitely supported. [F1, F2]

2.1 In particular the row term at $(0,0)$ is zero while the column term there is the nonzero group $k$, so the pages are not even isomorphic as bigraded objects. Both sequences nevertheless abut to the zero homology of the total identity complex. The zero double complex would have equal pages, but cannot rescue the universal assertion. The witness uses only two components and zero or identity maps, with no choice assumption. [F2, step 1.1] ∎
