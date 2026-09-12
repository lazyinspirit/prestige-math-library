---
id: ex-a-filtered-complex-collapsing-at-e-one
kind: example
title: A filtered complex collapsing at e one
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

Let $C_1=C_0=ℤ$, $d_1=2$, with all other terms zero and the trivial filtration $F_pC=0$ for p<0, $F_pC=C$ for p≥0. This spectral sequence collapses at $E^1$, with the single stable term $E^1_{0,0}=ℤ/2$.

## Facts & Assumptions

**Given:** The trivial filtration on the multiplication-by-two complex.

[F1] Pages use the filtered numerator/denominator formula ([[def-r-page-of-the-spectral-sequence-of-a-filtered-complex]]).

[F2] The initial differential is the graded map induced by d ([[lem-the-filtered-differential-induces-d-r-on-the-r-page]]).

[F3] Finite convergence gives the image-filtered homology ([[thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology]]).

[F4] The map 2:ℤ→ℤ has zero kernel and cokernel ℤ/2 ([[lem-abelian-group-model-for-spectral-sequence-computations]]).

## Verification

**Proof technique:** direct.

1.1 The initial page has ℤ at (0,1) and (0,0). Both generators have filtration degree 0, so $d^0$ is exactly multiplication by 2 between them. Thus its kernel at (0,1) is zero and its cokernel at (0,0) is ℤ/2 by [F4]. The r=1 formula [F1] gives these same quotients: the degree-one numerator is ker(2)=0 and the degree-zero denominator is 2ℤ. [F1, F2, F4]

2.1 For every r≥1, $F_{-r}C=0$, so the degree-one numerator stays zero; $F_{r-1}C_1=ℤ$ makes the degree-zero denominator stay 2ℤ. All other pieces are zero. Thus all differentials from $E^1$ onward have zero source or target and the sequence collapses there. Its homology is $H_0=ℤ/2$ with $F_{-1}=0,F_0=H_0$ and $H_n=0$ for n≠0, agreeing with [F3]. [F1, F3, F4, step 1.1] ∎

## Source notes

[Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Construction 5.4.6 and Lemma 5.4.7, pp.133–134; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), Theorem 4.2.3, pp.91–92. Increasing homological indices are used here.
