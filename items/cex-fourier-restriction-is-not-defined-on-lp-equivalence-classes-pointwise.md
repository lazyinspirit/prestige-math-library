---
id: cex-fourier-restriction-is-not-defined-on-lp-equivalence-classes-pointwise
kind: counterexample
title: Pointwise restriction is not defined on Lp equivalence classes
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
- def-fourier-restriction-and-adjoint-extension-operators
- lem-restriction-and-extension-estimates-are-dual
- lem-unit-sphere-is-lebesgue-null
- thm-hausdorff-young-for-the-euclidean-fourier-transform
- def-complex-lp-and-euclidean-test-function-conventions
- def-schwartz-space-and-its-seminorms
- cor-finite-nonnegative-integral-implies-finite-almost-everywhere
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: K. Merz, Some notes on restriction theory
    url: https://www.iaa.tu-bs.de/konmerz/ss25/fr/material/NotesOnRestriction.pdf
    locator: '§1, printed p.4: the null-set representative obstruction to pointwise restriction.'
---

## Statement refuted

Assume Countable Choice and $n\ge2$. Statement refuted: for $1<p<2$ the pointwise restriction $\widehat f|_{S^{n-1}}$ is well defined by the ambient $L^{p'}$ class of the Hausdorff-Young transform. Data: let $f$ be a nonzero Schwartz function on $\mathbb R^n$ and let $F=\mathcal F_pf\in L^{p'}(\mathbb R^n)$ be its transform class, with representative $\widehat f$; put $G:=\widehat f+\mathbf 1_{S^{n-1}}$ pointwise. Since $\lambda_n(S^{n-1})=0$, $G$ represents the same $L^{p'}$ class, but $G|_{S^{n-1}}=\widehat f|_{S^{n-1}}+1$ differs from $\widehat f|_{S^{n-1}}$ everywhere on the sphere. Hence restriction cannot be read off an ambient $L^{p'}$ representative; it begins on Schwartz functions and, when a restriction estimate holds at the chosen exponent, extends by density as in [[def-fourier-restriction-and-adjoint-extension-operators]].

## Facts & Assumptions

[F1] Hausdorff–Young: for $1\le p\le2$ the transform extends to a bounded map $\mathcal F_p:L^p\to L^{p'}$ that agrees almost everywhere with the integral transform on $L^1\cap L^p$; in particular $\widehat f$ is a representative of $\mathcal F_pf$ when $f$ is Schwartz. ([[thm-hausdorff-young-for-the-euclidean-fourier-transform]])

[F2] Complex $L^p$ classes are quotients of measurable functions by almost-everywhere equality, with representative-independent norm; $\mathcal S(\mathbb R^n)$ consists of actual smooth functions and $\mathbf 1_{S^{n-1}}$ is Borel measurable. ([[def-complex-lp-and-euclidean-test-function-conventions]], [[def-schwartz-space-and-its-seminorms]])

[F3] The unit sphere is Lebesgue null: $\lambda_n(S^{n-1})=0$, and a nonnegative measurable function with finite integral is finite almost everywhere; adding an indicator of a null set changes a function only on a null set. ([[lem-unit-sphere-is-lebesgue-null]], [[cor-finite-nonnegative-integral-implies-finite-almost-everywhere]])

[F4] For $1<p<\infty$, a restriction bound on Schwartz data yields the unique bounded extension $R:L^p\to L^2(\sigma)$; its existence is conditional on that bound. ([[lem-restriction-and-extension-estimates-are-dual]])

## Counterexample

**Given:** Countable Choice, $n\ge2$, $1<p<2$, a nonzero Schwartz function $f\in\mathcal S(\mathbb R^n)$, its integral transform $\widehat f$, the Hausdorff–Young class $F=\mathcal F_pf\in L^{p'}(\mathbb R^n)$ with representative $\widehat f$, and $G:=\widehat f+\mathbf 1_{S^{n-1}}$.

1.1 The two representatives coincide almost everywhere. The function $\mathbf 1_{S^{n-1}}$ is Borel measurable by [F2], and $G=\widehat f+\mathbf 1_{S^{n-1}}$ is measurable. Since $S^{n-1}$ is Lebesgue null by [F3], $G=\widehat f$ almost everywhere. Hence $\int|G|^{p'}=\int|\widehat f|^{p'}<\infty$ by the Hausdorff–Young membership in [F1], and $G$ belongs to $L^{p'}(\mathbb R^n)$ and represents the same class as $\widehat f$, namely $F=\mathcal F_pf$: two almost-everywhere equal integrable functions define the same quotient class by [F2]. [F1, F2, F3]

1.2 The restrictions differ at every point of the sphere. By construction $G(\omega)=\widehat f(\omega)+1$ for every $\omega\in S^{n-1}$, so the pointwise restrictions satisfy $G|_{S^{n-1}}=\widehat f|_{S^{n-1}}+\mathbf 1_{S^{n-1}}$. The difference is $1$ at every point of the nonempty sphere $S^{n-1}$, so the two restrictions are different functions on $S^{n-1}$. [given, algebra]

2.1 The refutation. Suppose that the pointwise restriction were well defined by the ambient $L^{p'}$ class, that is, that two representatives of one class always have equal restrictions to $S^{n-1}$. Steps 1.1 and 1.2 exhibit two representatives $\widehat f$ and $G$ of the same class $F=\mathcal F_pf$ whose restrictions differ everywhere on $S^{n-1}$; this contradicts the supposition. Therefore pointwise restriction is not well defined on $L^{p'}$ classes. [step 1.1, step 1.2]

3.1 The correct convention. The restriction operator $R_0$ of [[def-fourier-restriction-and-adjoint-extension-operators]] is defined on the actual functions $\widehat f$ with $f\in\mathcal S(\mathbb R^n)$, where the pointwise values exist. If a bound $\|R_0f\|_{L^2(\sigma)}\le C\|f\|_{L^p}$ holds on Schwartz data, density gives its unique bounded extension $R:L^p(\mathbb R^n)\to L^2(\sigma)$, as in [[lem-restriction-and-extension-estimates-are-dual]]; no pointwise restriction of a general ambient class is asserted. [F2, F4, given] ∎
