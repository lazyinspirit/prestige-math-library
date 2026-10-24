---
id: "ex-the-five-term-exact-sequence-of-a-composite-functor"
kind: "example"
title: "Five-term sequence of a composite functor"
deps: ["thm-five-term-exact-sequence-of-the-grothendieck-spectral-sequence", "thm-five-term-exact-sequence-in-group-cohomology-from-lhs", "def-group-cohomology-as-a-derived-functor", "thm-projective-and-injective-constructions-of-ext-are-naturally-isomorphic", "def-dependent-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Weibel, 6.8.3"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Example

For a fixed extension $1\to N\to G\to Q\to1$, the composite-invariants five-term sequence is
$$0\to H^1(Q,M^N)\xrightarrow{\mathrm{inf}}H^1(G,M)\xrightarrow{\mathrm{res}}H^1(N,M)^Q\xrightarrow{d_2^{0,1}}H^2(Q,M^N)\xrightarrow{\mathrm{inf}}H^2(G,M).$$
For $N=G=C_2$, $Q=1$ and trivial coefficients $M=\mathbb Z$, it becomes $0\to0\to0\to0\to0\to\mathbb Z/2$. Thus even this specialization illustrates that the last term is not required to be the image of the preceding arrow.

## Facts & Assumptions

**Given:** The LHS supplied-data and DC or supplied-comparison convention.

[F1] The composite five-term sequence has terms $R^1T(FM)$, $R^1(TF)M$, $T(R^1FM)$, $R^2T(FM)$ and $R^2(TF)M$ ([[thm-five-term-exact-sequence-of-the-grothendieck-spectral-sequence]]).

[F2] For invariants these maps are inflation, restriction and transgression, with their resolution descriptions ([[thm-five-term-exact-sequence-in-group-cohomology-from-lhs]]).

[F3] Group cohomology is Ext of the trivial group-ring module, computable from a supplied projective resolution by balance ([[def-group-cohomology-as-a-derived-functor]], [[thm-projective-and-injective-constructions-of-ext-are-naturally-isomorphic]]).

## Verification

1.1 Substitute $F=(-)^N$ and $T=(-)^Q$ into F1. The five terms become, in order, $H^1(Q,M^N)$, $H^1(G,M)$, $H^1(N,M)^Q$, $H^2(Q,M^N)$ and $H^2(G,M)$. F2 identifies the first and last maps with its bottom-cycle inflation, the second with restriction of invariant cocycles, and the middle with $d_2$ from $(0,1)$ to $(2,0)$. Hence every term and arrow agrees with F2, without importing a later cocycle-classification theorem. [F1, F2]

1.2 To compute the specialization let $C_2=\langle s\rangle$. Its trivial $\mathbb Z[C_2]$-module has the free resolution with augmentation and alternating differentials $d_1=s-1$, $d_2=1+s$, $d_3=s-1$, continuing periodically. Indeed for $a+bs$, the kernel of $s-1$ is $\mathbb Z(1+s)$ and the kernel of $1+s$ is $\mathbb Z(1-s)$; these are the preceding images. The augmentation kernel is also $\mathbb Z(1-s)$. Rank-one free terms are projective by lifting the image of their generator. Hom into trivial $\mathbb Z$ has successive differentials $0,2,0,2,\ldots$. Thus F3 gives $H^1(C_2,\mathbb Z)=0$ and $H^2(C_2,\mathbb Z)=\mathbb Z/2$. [F3, construct]

2.1 For $Q=1$, invariants are identity and the positive cohomology is zero by exactness of any supplied resolution. Consequently step 1.1 has four zero non-initial terms before its final $\mathbb Z/2$, as claimed. All maps in that displayed finite portion are zero, its transgression is zero and exactness holds at every required position. There is no final surjectivity. The rank-one periodic calculation itself is choice-free; only the common resolution-independent comparison convention is inherited. [F1, F2, step 1.1, step 1.2] ∎
