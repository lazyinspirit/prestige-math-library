---
id: ex-the-two-step-filtration-and-its-spectral-sequence
kind: example
title: The two step filtration and its spectral sequence
deps: ["def-r-page-of-the-spectral-sequence-of-a-filtered-complex", "lem-the-filtered-differential-induces-d-r-on-the-r-page", "thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology", "lem-abelian-group-model-for-spectral-sequence-computations"]
provenance:
  statement: ai-generated
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Charles A. Weibel, An Introduction to Homological Algebra, Chapter 5
      url: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
    - title: Romyar Sharifi, Homological Algebra
      url: https://math.ucla.edu/~sharifi/homalg.pdf
status: published
origin: pipeline
pipeline_run: phase-2-catchup-24
proof_strategy: direct
generation:
  role: example
---




## Example

Let $C_1=ℤx$, $C_0=ℤy$, d(x)=2y, and all other terms be zero. Give y filtration degree 0 and x degree 1. Thus $F_pC=0$ for p<0, $F_0C$ is the degree-zero stalk, and $F_pC=C$ for p≥1. The two-step filtration has $E^0=E^1$ supported at (1,0),(0,0), with $d^1$ multiplication by 2, and $E^2=E^\infty$ supported at (0,0) with group ℤ/2.

## Facts & Assumptions

**Given:** The displayed ℤ --2--> ℤ complex with generator filtration degrees 1 and 0.

[F1] The page terms are the displayed numerator/denominator quotients ([[def-r-page-of-the-spectral-sequence-of-a-filtered-complex]]).

[F2] The page differential is induced by d ([[lem-the-filtered-differential-induces-d-r-on-the-r-page]]).

[F3] Finite filtrations abut to image-filtered homology ([[thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology]]).

[F4] Multiplication by 2 on ℤ is injective with cokernel ℤ/2 ([[lem-abelian-group-model-for-spectral-sequence-computations]]).

## Verification

**Proof technique:** direct.

1.1 Because d lowers filtration from 1 to 0, it preserves the filtration and its associated graded differential is zero. The two initial graded quotients are ℤx at (1,0) and ℤy at (0,0); all others are zero. At r=1 the x numerator is all ℤx and its denominator is zero. The y numerator is ℤy and its denominator is zero because $F_0C_1=0$. Thus $E^1$ has these same two groups. [F1, F2]

2.1 The rule [F2] gives $d^1([x])=[2y]$, hence $d^1$ is multiplication by 2. Directly at r=2 the x numerator is zero, since 2x cannot map into $F_{-1}C_0=0$ unless x=0 by [F4]. At y, the denominator now contains $d(F_1C_1)=2\mathbb Zy$. Thus $E^2$ has ℤ/2 at (0,0) and no other terms. The same numerator and denominator persist for every later r. [F1, F2, F4, step 1.1]

3.1 Ordinary homology is $H_1(C)=0$ and $H_0(C)=ℤ/2$ by [F4]. The image of $H_0(F_0C)=ℤ$ in $H_0(C)$ is all ℤ/2, so $F_pH_0=0$ for p<0 and $F_pH_0=ℤ/2$ for p≥0. This identifies the stable piece with $gr_0H_0$ and all others with zero, as required by [F3]. [F3, F4, step 2.1] ∎

## Source notes

[Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Construction 5.4.6 and Lemma 5.4.7, pp.133–134; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), Theorem 4.2.3, pp.91–92. Increasing homological indices are used here.
