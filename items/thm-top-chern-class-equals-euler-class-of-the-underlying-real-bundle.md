---
id: thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle
kind: theorem
title: Top Chern class equals Euler class of the underlying real bundle
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-chern-classes-from-the-projective-bundle-relation, thm-complex-splitting-principle-with-integral-injective-pullback, thm-naturality-normalization-and-whitney-sum-for-chern-classes, lem-complex-orientation-of-underlying-real-bundles, thm-naturality-orientation-sign-and-whitney-product-for-euler-classes, def-axiom-of-choice]
proof_strategy: direct
axiom_strength: "ZF + AC; inherited from the splitting principle and Euler-class suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Miller, MIT 18.906 Algebraic Topology II, Lecture 36"
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "c_n(tau)=chi(tau), printed pp.134-137"
---

## Statement

Assume AC. Let $E\to B$ be a numerable complex rank-$n$ bundle over a
path-connected CW complex (or CW-type base), regarded as an oriented real
rank-$2n$ bundle through the complex orientation of
[[lem-complex-orientation-of-underlying-real-bundles]]. Then
$$c_n(E)=e(E_{\mathbb R})\qquad\text{in }H^{2n}(B;\mathbb Z).$$

## Facts & Assumptions

[A1] The Axiom of Choice is assumed, exactly as inherited from the splitting and Euler-class suppliers ([[def-axiom-of-choice]]).

[F1] The flag projection splits $q^*E=L_1\oplus\cdots\oplus L_n$ into complex lines and $q^*$ is injective on cohomology with $\mathbb Z$ coefficients ([[thm-complex-splitting-principle-with-integral-injective-pullback]]).

[F2] Chern classes are natural and multiplicative over Whitney sums, with $c_k(L)=0$ for $k\geq2$ and $c_1(L)=e(L_{\mathbb R})$ on a line ([[thm-naturality-normalization-and-whitney-sum-for-chern-classes]], [[def-chern-classes-from-the-projective-bundle-relation]]).

[F3] The complex orientation is natural under pullback and the complex orientation of a direct sum is the ordered direct-sum orientation ([[lem-complex-orientation-of-underlying-real-bundles]]).

[F4] Euler classes are natural under orientation-preserving pullback and multiply over ordered direct sums ([[thm-naturality-orientation-sign-and-whitney-product-for-euler-classes]]).

## Proof

**Proof technique:** direct.

**Given:** AC and a numerable complex rank-$n$ bundle $E\to B$ over a path-connected CW complex.

1.1 Pulling back to the flag bundle, $q^*E=L_1\oplus\cdots\oplus L_n$ by [F1]. [F1]

2.1 On the flag bundle the top Chern class of the split bundle is the product of the line classes: $q^*c_n(E)=\prod_{i=1}^nc_1(L_i)$, by multiplicativity in [F2] and the vanishing $c_k(L_i)=0$ for $k\geq2$. [F2, step 1.1]

2.2 On the flag bundle the Euler class of the underlying real bundle is the product of the line Euler classes: $q^*e(E_{\mathbb R})=e((q^*E)_{\mathbb R})=\prod_{i=1}^ne(L_{i,\mathbb R})$, using naturality of the Euler class and [F3] for the ordered sum. [F3, F4, step 1.1]

3.1 By [F2] each line contributes $c_1(L_i)=e(L_{i,\mathbb R})$, so the right sides of steps 2.1 and 2.2 are equal; hence $q^*(c_n(E))=q^*(e(E_{\mathbb R}))$. [F2, step 2.1, step 2.2]

4.1 Injectivity of $q^*$ on $H^{2n}(-;\mathbb Z)$ from [F1] gives $c_n(E)=e(E_{\mathbb R})$, which is the assertion. [F1, step 3.1]

5.1 Boundary cases. For $n=0$ both sides are $1$ by the rank-zero conventions of [F2] and the Euler-class convention. For $n=1$ the assertion is the line normalization $c_1(L)=e(L_{\mathbb R})$ of [F2], and no splitting is needed. The empty base is excluded by the path-connected hypothesis, and the coefficient ring $\mathbb Z$ is nonzero. AC enters only through [A1] in the splitting and Thom/Euler suppliers. [A1, F2, step 4.1] ∎

## Source notes

Miller's Lecture 36 (printed pp. 134-137) states $c_n(\tau)=\chi(\tau)$, the top Chern class equals the Euler class; the proof above is the splitting argument: after splitting, both sides are the product of the line Euler classes, and integral injectivity of the flag pullback descends the identity.
