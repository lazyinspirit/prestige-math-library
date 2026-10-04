---
id: lem-unit-sphere-is-lebesgue-null
kind: lemma
title: The unit sphere is Lebesgue null
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
- thm-polar-coordinates-formula-for-lebesgue-measure
- def-polar-surface-measure-on-the-unit-sphere
- thm-tonelli-theorem-for-sigma-finite-product-spaces
- def-countable-choice
- prop-countable-subsets-of-rn-are-lebesgue-null
- thm-nonnegative-integral-zero-iff-zero-almost-everywhere
- thm-continuous-preimages-of-borel-sets-are-borel
- def-nonnegative-lebesgue-integral
- def-integral-over-a-measurable-set
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Terence Tao, Lecture Notes 8 for Math 247B
    url: https://www.math.ucla.edu/~tao/247b.1.07w/notes8.pdf
    locator: '§5, printed p.14: spherical averages are supported on sets of ambient measure zero. The complete polar-coordinate derivation is supplied locally.'
---

## Statement

Assume Countable Choice and let $n\ge2$. The unit sphere $S^{n-1}$ satisfies $\lambda_n(S^{n-1})=0$, where $\lambda_n$ is $n$-dimensional Lebesgue measure. Proof route: apply the polar-coordinate formula to the Borel indicator of $S^{n-1}$; the inner integral vanishes unless $r=1$, so the double integral is zero because a single radius is a null set in $(0,\infty)$.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge2$, the unit sphere $S^{n-1}\subseteq\mathbb R^n$, the polar surface measure $\sigma$ of [[def-polar-surface-measure-on-the-unit-sphere]], and the Borel function $f=\mathbf 1_{S^{n-1}}$.

[F1] Polar coordinates: $\sigma$ is a finite Borel measure on $S^{n-1}$ and for every Borel measurable $f:\mathbb R^n\to[0,\infty]$, $\int_{\mathbb R^n}f\,d\lambda_n=\int_0^\infty\int_{S^{n-1}}f(r\omega)r^{n-1}\,d\sigma(\omega)\,dr$. ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[def-polar-surface-measure-on-the-unit-sphere]])

[F2] The Euclidean norm is continuous, so $S^{n-1}=|\cdot|^{-1}(\{1\})$ is a Borel subset of $\mathbb R^n$ and $\mathbf 1_{S^{n-1}}$ is a Borel, hence measurable, $[0,\infty]$-valued function. ([[thm-continuous-preimages-of-borel-sets-are-borel]], [[def-nonnegative-lebesgue-integral]])

[F3] The integral of an indicator over a measurable set is the measure of that set: $\int_E\mathbf 1_A\,d\nu=\nu(E\cap A)$ for measurable $E,A$; in particular the section integral of the indicator of a measurable set is a measure value. ([[def-integral-over-a-measurable-set]], [[def-nonnegative-lebesgue-integral]])

[F4] A singleton $\{r_0\}\subseteq\mathbb R$ is Lebesgue null, and every at most countable subset of $\mathbb R^n$ is Lebesgue null. ([[prop-countable-subsets-of-rn-are-lebesgue-null]])

[F5] A nonnegative measurable function has integral zero exactly when it vanishes almost everywhere. ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]])

[F6] The iterated integral in [F1] is a Tonelli integral over the sigma-finite product $(0,\infty)\times S^{n-1}$; in particular the inner integral is a measurable function of $r$. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

## Proof

**Proof technique:** direct; evaluate the polar-coordinate formula at the indicator of the sphere and observe that the inner integral is supported on the single null radius $r=1$.

1.1 The section integral. Fix $r>0$. For every $\omega\in S^{n-1}$ one has $|r\omega|=r$, so $r\omega\in S^{n-1}$ if and only if $r=1$. Hence $\mathbf 1_{S^{n-1}}(r\omega)=\mathbf 1_{\{1\}}(r)$ for every $\omega$, and by [F3] and [F1], $$\int_{S^{n-1}}\mathbf 1_{S^{n-1}}(r\omega)\,d\sigma(\omega)=\int_{S^{n-1}}\mathbf 1_{\{1\}}(r)\,d\sigma(\omega)=\mathbf 1_{\{1\}}(r)\,\sigma(S^{n-1}).$$ The factor $\sigma(S^{n-1})$ is finite by [F1]. [F1, F3, given, algebra]

2.1 The polar integral. The function $f=\mathbf 1_{S^{n-1}}$ is Borel and nonnegative by [F2], so the polar-coordinate formula [F1] applies and, with the section computation of step 1.1, $$\lambda_n(S^{n-1})=\int_{\mathbb R^n}\mathbf 1_{S^{n-1}}\,d\lambda_n=\int_0^\infty\Bigl[\int_{S^{n-1}}\mathbf 1_{S^{n-1}}(r\omega)\,d\sigma(\omega)\Bigr]r^{n-1}\,dr=\sigma(S^{n-1})\int_0^\infty\mathbf 1_{\{1\}}(r)\,r^{n-1}\,dr.$$ [F1, F2, F6, step 1.1]

3.1 The radial integral vanishes. The function $r\mapsto\mathbf 1_{\{1\}}(r)r^{n-1}$ is nonnegative, measurable and vanishes for every $r\ne1$; the singleton $\{1\}$ is Lebesgue null in $(0,\infty)$ by [F4], so the function vanishes almost everywhere. By [F5] its integral over $(0,\infty)$ is $0$, and since $\sigma(S^{n-1})<\infty$ the right-hand side of step 2.1 is $\sigma(S^{n-1})\cdot0=0$. Therefore $\lambda_n(S^{n-1})=0$. [F4, F5, step 2.1, algebra]

4.1 Conclusion. Steps 1.1–3.1 evaluate the polar-coordinate formula at $\mathbf 1_{S^{n-1}}$ and prove $\lambda_n(S^{n-1})=0$ for every $n\ge2$; Countable Choice is inherited exactly from the polar-coordinate, sigma-finite Tonelli, null-set and integral-interface suppliers. [F1, F6, step 1.1, step 2.1, step 3.1] ∎
