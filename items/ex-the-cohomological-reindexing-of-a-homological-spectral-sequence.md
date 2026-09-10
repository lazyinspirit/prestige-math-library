---
id: ex-the-cohomological-reindexing-of-a-homological-spectral-sequence
kind: example
title: The cohomological reindexing of a homological spectral sequence
deps: ["thm-the-cohomological-filtered-complex-construction", "lem-abelian-group-model-for-spectral-sequence-computations", "def-r-page-of-the-spectral-sequence-of-a-filtered-complex", "lem-the-filtered-differential-induces-d-r-on-the-r-page"]
provenance:
  statement: ai-generated
  proof: ai-altered
verification:
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
status: draft
origin: pipeline
pipeline_run: phase-2-catchup-24
proof_strategy: direct
generation:
  role: example
---






## Example

A nonzero homological $d^2$ can be read as a cohomological $d_2$. Let $C_2=ℤx$, $C_1=ℤy$, dx=y, with filtration levels 2 and 0. The corresponding cochain complex has $K^{-2}=ℤx$, $K^{-1}=ℤy$, $d_Kx=y$, with decreasing levels -2 and 0. Its nonzero second differential is
$$d_2:E_2^{-2,0}\longrightarrow E_2^{0,-1},\quad[x]\longmapsto[y].$$

## Facts & Assumptions

**Given:** The displayed homological identity complex with filtration degrees 2 and 0.

[F1] For $K^m=C_{-m}$ and $F^pK^m=F_{-p}C_{-m}$, pages are related by negating both indices ([[thm-the-cohomological-filtered-complex-construction]]).

[F2] The integer identity map has zero kernel and cokernel ([[lem-abelian-group-model-for-spectral-sequence-computations]]).

[F3] The homological page formulas are the specified filtered subquotients ([[def-r-page-of-the-spectral-sequence-of-a-filtered-complex]]).

[F4] The homological differential is induced by d on representatives ([[lem-the-filtered-differential-induces-d-r-on-the-r-page]]).

## Verification

**Proof technique:** direct.

1.1 The homological numerators at x on pages 1 and 2 are ℤx since dx lies in $F_1C_1=F_0C_1$; their denominators are zero. At y the numerators are ℤy and the boundary sources $F_0C_2,F_1C_2$ vanish. Thus $E^1=E^2$ has the two groups at (2,0),(0,1), $d^1=0$ by its absent target, and $d^2$ sends x to y. At r=3, the x numerator vanishes and the y denominator is $d(F_2C_2)=ℤy$. [F1, F2, F3, F4]

2.1 Under [F1], the generators lie in $K^{-2}$ and $K^{-1}$; x is present in $F^p$ precisely for p≤-2 and y precisely for p≤0, so the cochain differential preserves the decreasing filtration. Negating (2,0) and (0,1) gives (-2,0) and (0,-1). The index change is (2,-1), total degree +1, and the map is still the identity on coefficients. Both compositions with the inverse coefficient map send the indicated generator to itself. [F1, step 1.1, algebra]

3.1 The identity complex has zero homology by [F2], hence zero cohomology after reindexing. Its decreasing filtrations are degreewise finite. The $E_3$ and stable terms are zero by step 1.1 and [F1], agreeing with the associated graded of the zero cohomology abutment. [F1, F2, step 1.1, step 2.1] ∎

## Source notes

[Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Construction 5.4.6 and Lemma 5.4.7, pp.133–134; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), Theorem 4.2.3, pp.91–92. Increasing homological indices are used here.
