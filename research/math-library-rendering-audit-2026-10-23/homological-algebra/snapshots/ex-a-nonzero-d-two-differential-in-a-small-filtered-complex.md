---
id: ex-a-nonzero-d-two-differential-in-a-small-filtered-complex
kind: example
title: A nonzero d two differential in a small filtered complex
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

There is a finite filtered complex with $d^0=d^1=0$ and $d^2$ nonzero. Take $C_2=ℤx$, $C_1=ℤy$ and dx=y, with filtration degrees 2 for x and 0 for y, and all other terms zero. Then $d^2:E^2_{2,0}→E^2_{0,1}$ is the identity ℤ→ℤ.

## Facts & Assumptions

**Given:** The displayed complex with generator filtration levels 2 and 0.

[F1] Pages are computed from $A^r$ and the specified denominators ([[def-r-page-of-the-spectral-sequence-of-a-filtered-complex]]).

[F2] $d^r[x]=[dx]$ ([[lem-the-filtered-differential-induces-d-r-on-the-r-page]]).

[F3] Finite filtrations converge to image-filtered homology ([[thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology]]).

[F4] Abelian-group kernels and quotients compute the homology ([[lem-abelian-group-model-for-spectral-sequence-computations]]).

## Verification

**Proof technique:** direct.

1.1 The filtration is by subcomplexes because d sends filtration 2 into filtration 0. $E^0$ has ℤx at (2,0) and ℤy at (0,1). $d^0=0$ since the only nonzero chain differential drops filtration. For r=1 and r=2 the x numerator is ℤx (dx lies in $F_1C_1=F_0C_1=ℤy$) and its denominator is zero. The y denominator is zero since its potential sources $F_0C_2$ and $F_1C_2$ are zero. Thus $E^1=E^2$ have the same two terms. [F1, F2]

2.1 The possible $d^1$ from x targets (1,0), a zero group; all $d^1$ vanish. At r=2, [F2] instead gives [x]↦[y], an isomorphism between the two nonzero terms, whose inverse sends [y] to [x]. In particular the generator has nonzero image. At r=3 the x numerator is zero because $F_{-1}C_1=0$, and the y denominator contains $d(F_2C_2)=ℤy$. All terms on $E^3$ and later are zero. [F1, F2, F4, step 1.1]

3.1 The unfiltered complex has kernel and cokernel of the identity equal to zero, so all $H_n(C)=0$. Its image filtration and every associated graded homology piece are zero, exactly matching $E^\infty$ under [F3]. [F3, F4, step 2.1] ∎

## Source notes

[Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Construction 5.4.6 and Lemma 5.4.7, pp.133–134; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), Theorem 4.2.3, pp.91–92. Increasing homological indices are used here.
