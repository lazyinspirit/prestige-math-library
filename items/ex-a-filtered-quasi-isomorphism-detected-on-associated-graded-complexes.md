---
id: ex-a-filtered-quasi-isomorphism-detected-on-associated-graded-complexes
kind: example
title: A filtered quasi isomorphism detected on associated graded complexes
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: ["cor-quasi-isomorphism-criterion-from-a-filtered-map", "lem-abelian-group-model-for-spectral-sequence-computations"]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra, Chapter 5"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
    - title: "The Stacks Project, Homological Algebra"
      url: "https://stacks.math.columbia.edu/download/homology.pdf"
---

## Example

Let $k=\mathbb Z/2$ and take $C_1=ka$, $C_0=kb\oplus kc$, $da=b$, with zero other degrees. Filter it by $F_pC=0$ for $p<0$, $F_0C=kc[0]$ and $F_pC=C$ for $p\ge1$. Give $D=kc[0]$ the weight-zero filtration, zero for $p<0$ and full for $p\ge0$. The projection $f:C\to D$ killing $a,b$ and fixing $c$ is a filtered quasi-isomorphism detected on associated-graded complexes.

## Facts & Assumptions

[F1] [[cor-quasi-isomorphism-criterion-from-a-filtered-map]] proves that a map of degreewise finite filtered complexes which is a quasi-isomorphism on each graded complex is a quasi-isomorphism.

[F2] [[lem-abelian-group-model-for-spectral-sequence-computations]] supplies $k$, finite coordinate groups and ordinary subgroup homology quotients.

## Verification

**Given:** The two filtered complexes and the explicit projection in the example.

1.1 The differential squares to zero since the group below degree zero vanishes. The sole intermediate piece $kc[0]$ is a subcomplex, so the filtration on $C$ is by subcomplexes. The projection is a chain map: $f(da)=f(b)=0=d(f(a))$, and it preserves the specified pieces, including the zero lower tail and full upper tail. Both filtrations are finite in every degree, with the common bounds minus one and one. [F2]

1.2 On $\operatorname{gr}_0$ the map is the identity $kc[0]\to kc[0]$, hence an isomorphism on its sole homology group. On $\operatorname{gr}_1$, the source is $ka\xrightarrow{a\mapsto b}kb$ and the target is zero, because $F_1D=F_0D$. The source has zero kernel in degree one and zero cokernel in degree zero, so the graded map is again a quasi-isomorphism. Every other graded complex is zero on both sides. Therefore all hypotheses of the finite branch of [F1] hold. [F1, F2]

2.1 Apply [F1] to conclude that $f$ is a quasi-isomorphism. Directly, $d:C_1\to C_0$ is injective with image $kb$, giving $H_1(C)=0$ and $H_0(C)=(kb\oplus kc)/kb\cong kc$ via $[xb+yc]\mapsto yc$. The induced map $H_0(f)$ is this same isomorphism, while all other homology maps are isomorphisms between zero groups. This checks the specific map rather than only the isomorphism type of the target. All coefficients, zero terms, filtration endpoints and one-dimensional graded pieces have been computed explicitly; no AC or splitting choice is required. [F1, F2, step 1.1, step 1.2] ∎
