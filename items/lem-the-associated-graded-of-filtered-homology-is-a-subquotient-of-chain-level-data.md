---
id: lem-the-associated-graded-of-filtered-homology-is-a-subquotient-of-chain-level-data
kind: lemma
title: The associated graded of filtered homology is a subquotient of chain level data
deps: ["def-induced-filtration-on-homology", "lem-spectral-sequence-subquotient-and-local-lifting-calculus"]
provenance:
  statement: ai-altered
  proof: ai-altered
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
---



## Statement

Put $Z_n=\ker d_n$, $D_n=\operatorname{im}d_{n+1}$ and $P_p=F_pC_n\cap Z_n$. Then the induced homology filtration satisfies
$$\operatorname{gr}^F_pH_n(C)\cong \frac{P_p}{P_{p-1}+(F_pC_n\cap D_n)}.$$
The isomorphism is induced by the cycle quotient $Z_n\to H_n(C)$ and is natural for filtered chain maps.

## Facts & Assumptions

**Given:** A filtered chain complex, an integer n, and an integer filtration index p.

[F1] $F_pH_n(C)$ is the image of the inclusion on homology ([[def-induced-filtration-on-homology]]).

[F2] Coimage equals image, quotients descend, and the sum/intersection and modular identities hold ([[lem-spectral-sequence-subquotient-and-local-lifting-calculus]]).

## Proof

**Proof technique:** direct.

1.1 The identity $d_nd_{n+1}=0$ factors the boundary image $D_n$ through $Z_n$: composing with the epic map onto $D_n$ gives zero, so cancellation gives the factorization. Cycles of $F_pC$ are $P_p$ by the pullback property. Its boundaries map into $D_n$, so the image on homology in [F1] is precisely the image of $P_p\to Z_n/D_n$. By [F2] this is $(P_p+D_n)/D_n$. [F1, F2]

2.1 The kernel of $P_p\to (P_p+D_n)/(P_{p-1}+D_n)$ is $P_p\cap(P_{p-1}+D_n)$. Modularity [F2], using $P_{p-1}\subseteq P_p$, gives $P_{p-1}+(P_p\cap D_n)=P_{p-1}+(F_pC_n\cap D_n)$. The map is epic since $D_n$ is killed and $P_p$ supplies the remaining summand. [F2, step 1.1]

3.1 Nested quotients [F2] identify $(P_p+D_n)/(P_{p-1}+D_n)$ with $F_pH_n(C)/F_{p-1}H_n(C)$. Coimage-to-image applied to the epic map in step 2.1 gives the stated formula. A filtered chain map carries each $P_p$ and $D_n$ into the corresponding target subobject; all arrows just used are uniquely induced by these restrictions, so their squares commute. [F2, step 1.1, step 2.1] ∎

## Source notes

[Stacks §12.24](https://stacks.math.columbia.edu/tag/012K), equations 12.24.5.1–12.24.5.2; the omitted intermediate quotient calculation is proved here.
