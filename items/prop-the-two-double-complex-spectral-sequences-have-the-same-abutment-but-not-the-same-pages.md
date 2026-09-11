---
id: prop-the-two-double-complex-spectral-sequences-have-the-same-abutment-but-not-the-same-pages
kind: proposition
title: The two double complex spectral sequences have the same abutment but not the same pages
status: draft
origin: pipeline
pipeline_run: phase-2-next-20
deps: [thm-the-row-filtration-spectral-sequence-of-a-first-quadrant-double-complex, thm-the-column-filtration-spectral-sequence-of-a-first-quadrant-double-complex, lem-abelian-group-model-for-spectral-sequence-computations]
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
    - title: "Stacks Project, Lemmas 12.25.1 and 12.25.3; explicit witnesses supplied locally"
      url: https://stacks.math.columbia.edu/tag/012X
---

## Statement

The row and column spectral sequences of a first-quadrant double complex
abut to the same unfiltered object $H_*(\operatorname{Tot}(C))$. Their early
pages need not be isomorphic, and their filtrations on that target can differ.

## Facts & Assumptions

[F1] [[thm-the-row-filtration-spectral-sequence-of-a-first-quadrant-double-complex]] computes horizontal-first pages and the row image filtration.

[F2] [[thm-the-column-filtration-spectral-sequence-of-a-first-quadrant-double-complex]] computes vertical-first pages and the column image filtration.

[F3] [[lem-abelian-group-model-for-spectral-sequence-computations]] supplies the abelian-group category and the nonzero group $k=\mathbb Z/2$.

## Proof

**Given:** The two spectral sequences of a first-quadrant homological double complex, with the conventions in the statement.

1.1 Both convergence theorems identify the unfiltered target in degree $n$ with $H_n(T)$ for the same total complex $T$ and the same differential $h+v$. They make different specified filtrations on that object; equality of targets alone asserts neither equality of those filtrations nor equality of the pages. [F1, F2]

1.2 For the early-page witness, take $C_{1,0}=C_{0,0}=k$, $h_{1,0}=1_k$, and every other component and arrow zero. The only row complex is $k\xrightarrow{1}k$, whose kernel in degree one and cokernel in degree zero are both zero. Thus the row $E^1$ page is zero. Each nonzero column is a single $k$, so column $E^1_{1,0}=E^1_{0,0}=k$, with $d^1_{1,0}=1_k$. Hence its $E^1$ page is nonzero but its $E^2$ page is zero. The total complex is also $k\xrightarrow{1}k$ and has zero homology. [F1, F2, F3]

1.3 For the filtration witness, instead take just $C_{1,0}=k$ with all arrows zero. Then $H_1(T)=k$. The row filtration has $F^{\mathrm{row}}_0H_1(T)=k$, since vertical index zero is already included. The column filtration has $F^{\mathrm{col}}_0H_1(T)=0$ and $F^{\mathrm{col}}_1H_1(T)=k$. Thus the filtrations on the same nonzero target differ; the jumps occur at different filtration degrees. [F1, F2, F3]

2.1 These witnesses establish the two possible failures while step 1.1 proves the common-target assertion. All witnesses have finite support and specified zero or identity maps, with no representative choices. The zero complex would give equal zero pages and filtrations, which is consistent with the claim that differences can occur. [step 1.1, step 1.2, step 1.3] ∎
