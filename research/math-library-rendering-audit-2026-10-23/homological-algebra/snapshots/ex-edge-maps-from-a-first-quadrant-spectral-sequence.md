---
id: ex-edge-maps-from-a-first-quadrant-spectral-sequence
kind: example
title: Edge maps from a first quadrant spectral sequence
deps: ["def-edge-homomorphisms-of-a-first-quadrant-spectral-sequence", "thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology", "lem-abelian-group-model-for-spectral-sequence-computations", "def-r-page-of-the-spectral-sequence-of-a-filtered-complex", "lem-the-filtered-differential-induces-d-r-on-the-r-page"]
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

For the complex $C_1=ℤ$ --2--> $C_0=ℤ$ with $F_0C$ the degree-zero stalk, $F_1C=C$ and $F_pC=0$ for p<0, both first-quadrant edge maps in degree zero, taken from $E^2$, identify ℤ/2 with $H_0(C)=ℤ/2$. All positive-degree edges are zero maps between zero groups.

## Facts & Assumptions

**Given:** The two-step filtered multiplication-by-two complex and s=2.

[F1] At s≥2 the homological edges factor through $F_0H_n$ and $H_n/F_{n-1}H_n$ ([[def-edge-homomorphisms-of-a-first-quadrant-spectral-sequence]]).

[F2] Finite filtered convergence identifies the stable page with graded homology ([[thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology]]).

[F3] 2:ℤ→ℤ is injective with cokernel ℤ/2 ([[lem-abelian-group-model-for-spectral-sequence-computations]]).

[F4] The first two pages use the explicit filtered quotient formulas ([[def-r-page-of-the-spectral-sequence-of-a-filtered-complex]]).

[F5] The differential on a page sends a representative to its chain differential ([[lem-the-filtered-differential-induces-d-r-on-the-r-page]]).

## Verification

**Proof technique:** direct.

1.1 The filtration is finite and preserved by d. Its graded terms are ℤ at (1,0),(0,0), with $d^0=0$; the next differential sends x to 2y, so its kernel is zero and cokernel ℤ/2 by [F3]. Therefore $E^2$ has only (0,0)=ℤ/2 and remains constant. Direct homology gives $H_1=0,H_0=ℤ/2$. The image of $H_0(F_0C)=ℤ$ onto $H_0(C)$ is all ℤ/2. Thus $F_{-1}H_0=0,F_0H_0=H_0$, agreeing with [F2]. [F2, F3, F4, F5]

2.1 For n=0 the vertical edge of [F1] is $ℤ/2→E^\infty_{0,0}→F_0H_0→H_0$, taking [a] to [a] at every stage. The horizontal edge is $H_0→H_0/F_{-1}H_0→E^\infty_{0,0}→E^2_{0,0}$, again [a]↦[a]. For n>0 all these $H_n$ and axis terms vanish by step 1.1, so both edges are the unique zero maps. The normalization $F_nH_n=H_n$ holds for every n≥0. [F1, step 1.1] ∎

## Source notes

[Weibel](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Example 5.2.6; explicit calculation in this item.
