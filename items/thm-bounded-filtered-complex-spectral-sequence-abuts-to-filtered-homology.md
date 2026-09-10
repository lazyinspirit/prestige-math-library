---
id: thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology
kind: theorem
title: Bounded filtered complex spectral sequence abuts to filtered homology
deps: ["def-exhaustive-separated-bounded-and-finite-filtration", "lem-the-associated-graded-of-filtered-homology-is-a-subquotient-of-chain-level-data", "thm-the-next-page-is-the-homology-of-the-current-page", "def-limiting-cycles-boundaries-and-e-infinity", "prop-degree-reasons-force-stabilization-in-a-bounded-region", "def-abutment-to-a-filtered-object", "lem-spectral-sequence-subquotient-and-local-lifting-calculus"]
provenance:
  statement: ai-altered
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
landmark: true
status: draft
origin: pipeline
pipeline_run: phase-2-catchup-24
proof_strategy: direct
---



## Statement

If the filtration on every $C_n$ is finite, the spectral sequence of the filtered chain complex stabilizes pointwise and naturally abuts to $H_n(C)$ with its image filtration. This homology filtration is finite, exhaustive and separated. No uniform filtration bound in n is required.

## Facts & Assumptions

**Given:** A filtered complex with a finite filtration on each chain object and fixed p,n.

[F1] Finite in degree n means $F_{a_n}C_n=0$ and $F_{b_n}C_n=C_n$ for some integers ([[def-exhaustive-separated-bounded-and-finite-filtration]]).

[F2] Graded homology is $(F_pC_n\cap\ker d_n)/((F_{p-1}C_n\cap\ker d_n)+(F_pC_n\cap\operatorname{im}d_{n+1}))$ ([[lem-the-associated-graded-of-filtered-homology-is-a-subquotient-of-chain-level-data]]).

[F3] The page transition is the natural inclusion-induced homology isomorphism ([[thm-the-next-page-is-the-homology-of-the-current-page]]).

[F4] Eventually stationary projected cycles and boundaries define $E^\infty$ ([[def-limiting-cycles-boundaries-and-e-infinity]]).

[F5] Finite support on each diagonal forces pointwise stabilization ([[prop-degree-reasons-force-stabilization-in-a-bounded-region]]).

[F6] Abutment is a specified identification with the associated graded of filtered homology ([[def-abutment-to-a-filtered-object]]).

[F7] Image pullbacks and quotient comparisons are canonical and natural ([[lem-spectral-sequence-subquotient-and-local-lifting-calculus]]).

## Proof

**Proof technique:** direct.

1.1 Fix n,p and write $Z=\ker d_n$, $D=\operatorname{im}d_{n+1}$. Choose R≥1 so that $F_{p-r}C_{n-1}=0$ and $F_{p+r-1}C_{n+1}=C_{n+1}$ for every r≥R; [F1] supplies bounds in precisely these two degrees. Then $A^r_{p,n}=F_pC_n\cap Z$ and $A^{r-1}_{p-1,n}=F_{p-1}C_n\cap Z$. Also $A^{r-1}_{p+r-1,n+1}=d_{n+1}^{-1}(F_pC_n)$, whose image is $F_pC_n\cap D$ by the epic-pullback calculation [F7]. [F1, F7]

2.1 The page quotient is therefore stationary with value $$\frac{F_pC_n\cap Z}{(F_{p-1}C_n\cap Z)+(F_pC_n\cap D)}.$$ Its projected numerator and boundary subobjects are stationary too, giving exactly $E^\infty$ under [F4]. By [F2] this quotient is canonically $\operatorname{gr}_pH_n(C)$. Separately the initial page on diagonal n vanishes outside $a_n<p\le b_n$, so [F5] supplies vanishing of both incident differentials and stabilization in the specified sense. [F1, F2, F4, F5, step 1.1]

2.2 For $p≤a_n$, the cycle subobject $F_pC_n\cap Z$ is zero, so the image filtration on $H_n(C)$ is zero. For $p≥b_n$ it is Z, whose quotient map surjects onto $Z/D=H_n(C)$; hence $F_pH_n(C)=H_n(C)$. Thus the filtration is finite. A family containing 0 and $H_n$ has meet 0 and join $H_n$ by the subobject order, proving separation and exhaustiveness without infinite exactness. [F1, F2, step 1.1]

3.1 A filtered chain map preserves the cycle and boundary subobjects in steps 1.1–2.1, and all quotient comparisons commute by [F7]. The page transitions [F3] were built from the same cycle inclusions; their stationary identifications agree with these comparisons. Thus the displayed isomorphisms form natural abutment data in the sense of [F6]. Each argument fixed n before using its finite bounds, so no common bounds over all degrees were needed. [F3, F6, F7, step 1.1, step 2.1, step 2.2] ∎

## Source notes

[Stacks §12.24](https://stacks.math.columbia.edu/tag/012K), Lemma 12.24.11 and equations 12.24.5.1–2; [Weibel](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), bounded case of Theorem 5.5.1 pp.135–136. The chain proof explicitly uses degrees n−1 and n+1; no unbounded convergence clause is used.
