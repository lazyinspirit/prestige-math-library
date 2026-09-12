---
id: fs-the-filtration-on-homology-is-h-n-of-the-filtered-subcomplex
kind: false-statement
title: The filtration on homology is h n of the filtered subcomplex
deps: ["def-induced-filtration-on-homology", "lem-abelian-group-model-for-spectral-sequence-computations"]
provenance:
  statement: ai-altered
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
---



## Statement

It is false that $F_pH_n(C)$ is always $H_n(F_pC)$, or that the latter always embeds into $H_n(C)$.

## Facts & Assumptions

**Given:** The identity complex with the displayed two-step filtration.

[F1] The filtration on H is the image of the map from filtered-piece homology ([[def-induced-filtration-on-homology]]).

[F2] Integer complexes can be computed using ordinary subgroup kernels and quotient cokernels ([[lem-abelian-group-model-for-spectral-sequence-computations]]).

## Refutation

**Proof technique:** direct.

1.1 Let $C_1=C_0=ℤ$ and $d_1=1_ℤ$, with all other groups zero. Set $F_pC=0$ for p<0, let $F_0C$ be its degree-zero stalk, and set $F_pC=C$ for p≥1. This is a filtration by subcomplexes because the restricted degree-zero differential is zero. In $F_0C$, cycles at degree zero are ℤ and boundaries are zero, so $H_0(F_0C)=\mathbb Z$. [F2]

2.1 In C the boundary image at degree zero is $im(1_ℤ)=ℤ$, hence $H_0(C)=ℤ/ℤ=0$. Consequently [F1] gives $F_0H_0(C)=\operatorname{im}(\mathbb Z\to0)=0$, not ℤ. The map kills the nonzero element 1, so it is not injective either. [F1, F2, step 1.1] ∎

## Source notes

[Stacks §12.24](https://stacks.math.columbia.edu/tag/012K), Definition 12.24.5; the identity-complex counterexample is calculated here.
