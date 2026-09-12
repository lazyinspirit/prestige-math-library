---
id: prop-shifting-a-filtered-complex-reindexes-its-spectral-sequence
kind: proposition
title: Shifting a filtered complex reindexes its spectral sequence
deps: ["thm-the-next-page-is-the-homology-of-the-current-page", "prop-a-filtered-chain-map-induces-a-morphism-of-spectral-sequences", "thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology", "def-r-page-of-the-spectral-sequence-of-a-filtered-complex"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Charles A. Weibel, An Introduction to Homological Algebra, Chapter 5
      url: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
    - title: Romyar Sharifi, Homological Algebra
      url: https://math.ucla.edu/~sharifi/homalg.pdf
status: published
verification:
  audited: 2026-09-12
origin: pipeline
pipeline_run: phase-2-catchup-24
proof_strategy: direct
---





## Statement

For integers a,b define $D_n=C_{n-a}$, $d_D=d_C$, and $G_pD_n=F_{p-b}C_{n-a}$. Then
$$E^r_{p,q}(D,G)\cong E^r_{p-b,q+b-a}(C,F)$$
canonically, with equality when the same quotient models are used. This identification commutes with differentials and next-page maps and identifies the finite filtered abutments. This is a sign-free degree translation, not the signed triangulated shift.

## Facts & Assumptions

**Given:** A filtered chain complex and two integers a,b, with D and G as defined in the statement.

[F1] The next-page map is a natural isomorphism induced by the next-cycle inclusion ([[thm-the-next-page-is-the-homology-of-the-current-page]]).

[F2] Maps preserving the filtered construction induce its canonical quotient maps ([[prop-a-filtered-chain-map-induces-a-morphism-of-spectral-sequences]]).

[F3] Finite filtered convergence identifies the stable quotient with image-filtered homology ([[thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology]]).

[F4] The page formulas include both numerator and denominator bounds ([[def-r-page-of-the-spectral-sequence-of-a-filtered-complex]]).

## Proof

**Proof technique:** direct.

1.1 Put n=p+q. The reindexed total degree is $(p-b)+(q+b-a)=n-a$. Direct substitution gives $A^r_{p,n}(D,G)=A^r_{p-b,n-a}(C,F)$. The lower denominator becomes $A^{r-1}_{p-b-1,n-a}$ and the boundary denominator becomes $d(A^{r-1}_{p-b+r-1,n-a+1})$. For r=0 the quotient is $F_{p-b}C_{n-a}/F_{p-b-1}C_{n-a}$. Thus the quotients in [F1] agree under these indices. [F1, algebra, F4]

2.1 The differential is still $d_C$, and the target index substitution is $(p-r-b,q+r-1+b-a)$ on either route. The inclusions and quotient maps defining α in [F1] also coincide under substitution; hence their induced isomorphisms commute. This is the same uniqueness of quotient descent used in [F2]. No sign is introduced because $d_D$ was explicitly defined to equal $d_C$. [F1, F2, step 1.1, algebra]

3.1 The cycle and boundary objects of $D_n$ are those of $C_{n-a}$, so $H_n(D)=H_{n-a}(C)$ with $G_pH_n(D)=F_{p-b}H_{n-a}(C)$ by the image definition. Finite bounds are translated by b in filtration and a in degree. Applying [F3] gives precisely the same index relation on stable graded quotients. [F3, step 1.1, step 2.1] ∎

## Source notes

[Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Construction 5.4.6 and Lemma 5.4.7, pp.133–134; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), Theorem 4.2.3, pp.91–92. Increasing homological indices are used here. The sign-free degree/filtration translation here is distinguished from the décalage of Weibel Exercise 5.4.3.
