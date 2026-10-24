---
id: ex-the-two-spectral-sequences-of-a-two-by-two-double-complex
kind: example
title: The two spectral sequences of a two by two double complex
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: ["thm-the-row-filtration-spectral-sequence-of-a-first-quadrant-double-complex", "thm-the-column-filtration-spectral-sequence-of-a-first-quadrant-double-complex", "lem-abelian-group-model-for-spectral-sequence-computations"]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
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

## Example

Put $k=\mathbb Z/2$ in all four positions $C_{1,1},C_{0,1},C_{1,0},C_{0,0}$. Let $h_{1,1}=1_k$, $h_{1,0}=0$, and let every vertical map and every other component be zero. The two spectral sequences have different early pages and different degree-one filtration jumps, but both compute $H_0(\operatorname{Tot}C)=k$, $H_1(\operatorname{Tot}C)=k$, with all other total homology zero.

## Facts & Assumptions

[F1] [[thm-the-row-filtration-spectral-sequence-of-a-first-quadrant-double-complex]] computes horizontal homology first, with $E^0_{p,q}=C_{q,p}$ and the row cutoff in vertical index.

[F2] [[thm-the-column-filtration-spectral-sequence-of-a-first-quadrant-double-complex]] computes vertical homology first, with $E^0_{p,q}=C_{p,q}$ and the column cutoff in horizontal index.

[F3] [[lem-abelian-group-model-for-spectral-sequence-computations]] supplies the binary group and coordinate finite biproducts and homology quotients.

## Verification

**Given:** The displayed two-by-two data. Every horizontal square is zero and every mixed composite includes a zero vertical map, so the double-complex identities hold.

1.1 In the column sequence the vertical differential is zero, so $E^1$ consists of the four copies of $k$. Its $d^1$ is identity from $(1,1)$ to $(0,1)$ and zero from $(1,0)$ to $(0,0)$. Thus $E^2$ is $k$ at $(0,0),(1,0)$ and zero elsewhere. No higher differential has both source and target among those two positions, so these are also the limiting terms. [F2, F3]

1.2 In the row sequence, the row with vertical index one is the identity complex $k\to k$ and has zero homology. The row with vertical index zero has zero horizontal differential, so its two homology terms are $k$. With the required transposition these lie at spectral positions $(0,0),(0,1)$. The induced vertical $d^1$ is zero, and all later differentials have zero endpoints. Thus this $E^1$ page is already stationary. [F1, F3]

1.3 Order total degree one as $C_{1,0}\oplus C_{0,1}$. Then the total complex is $k\xrightarrow{x\mapsto(0,x)}k^2\xrightarrow{0}k$ in degrees $2,1,0$. The first map is injective, its image is $0\oplus k$, and the second map has kernel $k^2$ and zero image. Consequently $H_2=0$, $H_1=k^2/(0\oplus k)\cong k$ by the first coordinate, and $H_0=k$. Other degrees are zero. [F1, F2, F3]

2.1 The surviving $H_1$ class is represented by $C_{1,0}$. Row cutoff zero already includes it, giving $F^{\mathrm{row}}_0H_1=H_1$ and $F^{\mathrm{row}}_{-1}H_1=0$. Column cutoff zero includes only the degree-one summand $C_{0,1}$, whose class in total homology is zero, so $F^{\mathrm{col}}_0H_1=0$ and $F^{\mathrm{col}}_1H_1=H_1$. This accounts for the limiting positions $(0,1)$ versus $(1,0)$ despite the common total target. The first-quadrant finite bounds, axes and all omitted zero degrees have been checked; no representatives or maps were selected using AC. [F1, F2, step 1.1, step 1.2, step 1.3] ∎
