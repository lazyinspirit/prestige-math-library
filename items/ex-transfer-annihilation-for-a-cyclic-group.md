---
id: ex-transfer-annihilation-for-a-cyclic-group
kind: example
title: "Integral homology of a finite cyclic group"
status: draft
origin: pipeline
deps: [thm-positive-degree-integral-homology-of-a-finite-group-is-annihilated-by-its-order, def-group-homology-as-a-derived-functor, thm-projective-resolutions-of-the-same-object-are-homotopy-equivalent-over-that-object]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "Weibel, An Introduction to Homological Algebra, Calculation 6.2.1, Theorem 6.2.2 and Example 6.2.3, pp.167–168"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Example

For $C_m=\langle g\mid g^m=1\rangle$, $m\geq1$, with trivial integral coefficients, $H_0(C_m;\mathbb Z)=\mathbb Z$, $H_{2j+1}(C_m;\mathbb Z)=\mathbb Z/m\mathbb Z$ for $j\geq0$, and $H_{2j}(C_m;\mathbb Z)=0$ for $j\geq1$. In particular multiplication by $m$ kills positive homology.

## Facts & Assumptions

**Given:** m is a positive integer; coefficients are trivial integers; the derived-functor convention carries DC and supplied resolutions.

[F1] The order of a finite group annihilates its positive integral homology. ([[thm-positive-degree-integral-homology-of-a-finite-group-is-annihilated-by-its-order]]).

[F2] Group homology is the homology obtained by tensoring the supplied projective resolution with the right trivial module ([[def-group-homology-as-a-derived-functor]]).

[F3] Under DC, any two projective resolutions of the same object are chain-homotopy equivalent over that object ([[thm-projective-resolutions-of-the-same-object-are-homotopy-equivalent-over-that-object]]).

## Verification

1.1 Put $R=\mathbb ZC_m$ and $N=1+g+\cdots+g^{m-1}$. Use one copy of R in each nonnegative degree, augmentation $\epsilon(\sum a_i g^i)=\sum a_i$, differential multiplication by $g-1$ in odd degrees and by N in positive even degrees. Since $(g-1)N=g^m-1=0$ and $\epsilon(g-1)=0$, this is an augmented chain complex. [algebra]

2.1 For $a=\sum_{i=0}^{m-1}a_i g^i$, the coefficient of $g^i$ in $(g-1)a$ is $a_{i-1}-a_i$ (indices modulo m). Thus its kernel consists exactly of constant coefficient vectors, namely $\mathbb ZN$. Also $Na=(\sum_i a_i)N$, so the image of multiplication by N is $\mathbb ZN$ and its kernel is $\ker\epsilon$. If $\sum a_i=0$, then $a=\sum_{i=1}^{m-1}a_i(g^i-1)=(g-1)\sum_{i=1}^{m-1}a_i(1+\cdots+g^{i-1})$. Hence $\ker\epsilon=(g-1)R$, proving exactness in every degree. This also covers m=1: the two maps are zero and identity and the displayed sums are empty. [step 1.1, algebra]

3.1 Each term is free, so step 2.1 makes this complex $P\to\mathbb Z$ a projective resolution of the trivial left $R$-module. Let $P^{\rm sup}\to\mathbb Z$ be the supplied resolution used in [F2]. By [F3], $P$ and $P^{\rm sup}$ are chain-homotopy equivalent over $\mathbb Z$. The additive functor $\mathbb Z\otimes_R-$ carries the comparison maps and their homotopies to comparison maps and homotopies, so $H_*(\mathbb Z\otimes_RP)\cong H_*(\mathbb Z\otimes_RP^{\rm sup})=H_*(C_m;\mathbb Z)$. Tensoring $P$ makes multiplication by $g-1$ zero and multiplication by N multiplication by m. Thus degree zero is $\mathbb Z$, every odd degree has kernel $\mathbb Z$ modulo $m\mathbb Z$, and every positive even degree has kernel of $m:\mathbb Z\to\mathbb Z$, which is zero. [F2, F3, step 2.1, algebra]

4.1 Multiplication by m on $\mathbb Z/m\mathbb Z$ is zero, and on the zero groups it is zero. This explicitly verifies the conclusion of F1. Degree zero is excluded: $m\cdot1\ne0$ in $\mathbb Z$. For m=1 all positive groups vanish. [F1, step 3.1, algebra] ∎
