---
title: Fourier trace on a hyperplane and one-sided H¹ uniqueness
status: draft
research_item: lem-se-author-8d28f6f38ee5-flat-fourier-trace
dependency_level: 7
---

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces](https://alphabetamath.cc/item/thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces)
- [math:thm-fourier-inversion-on-schwartz-space](https://alphabetamath.cc/item/thm-fourier-inversion-on-schwartz-space)
- [math:thm-plancherel](https://alphabetamath.cc/item/thm-plancherel)
- [math:thm-tonelli-and-fubini-for-completed-product-measures](https://alphabetamath.cc/item/thm-tonelli-and-fubini-for-completed-product-measures)
- [math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals)
- [lem-se-author-8d28f6f38ee5-localized-chart-operators](item-lem-se-author-8d28f6f38ee5-localized-chart-operators)
- [math:thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces](https://alphabetamath.cc/item/thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces)
- [math:lem-fundamental-theorem-and-integration-by-parts](https://alphabetamath.cc/item/lem-fundamental-theorem-and-integration-by-parts)
- [math:lem-test-function-cutoffs-and-euclidean-localization](https://alphabetamath.cc/item/lem-test-function-cutoffs-and-euclidean-localization)
- [math:def-schwartz-space-and-its-seminorms](https://alphabetamath.cc/item/def-schwartz-space-and-its-seminorms)
- [math:thm-fourier-transform-maps-schwartz-space-continuously-to-itself](https://alphabetamath.cc/item/thm-fourier-transform-maps-schwartz-space-continuously-to-itself)
- [math:lem-schwartz-functions-and-all-derivatives-are-integrable](https://alphabetamath.cc/item/lem-schwartz-functions-and-all-derivatives-are-integrable)
- [math:thm-dominated-convergence](https://alphabetamath.cc/item/thm-dominated-convergence)


## Statement

Assume AC and $n\ge2$, and write $H_\pm=\{(x^{\prime},t):\pm t>0\}$. For every $1\le s\le2$ there is a bounded linear trace $\gamma:H^s(\mathbb R^n)\to H^{s-1/2}(\mathbb R^{n-1})$ agreeing with $F(x',0)$ for Schwartz $F$. All these maps are restrictions of the same $H^1$ trace, as $L^2$-valued maps. Moreover
$$\|\gamma F\|_{L^2}^2\le2\|F\|_{L^2(H_+)}\|\partial_nF\|_{L^2(H_+)}$$
for $F\in H^1(\mathbb R^n)$, and likewise from the negative half-space. Consequently an $H^s$ function zero on one half-space has zero trace.

For the local assertion let $U\subset\mathbb R^n$ be open. Here $f\in H^s_{\mathrm{loc}}(U)$ means $f\in L^2_{\mathrm{loc}}(U)$ and, for every $\chi\in C_c^\infty(U)$, the function $G_\chi$ equal to $\chi f$ on $U$ and zero outside $U$ belongs to $H^s(\mathbb R^n)$. Let $P\subset\mathbb R^{n-1}$ be open with $\overline P\times\{0\}$ a compact subset of $U$. For any $\chi\in C_c^\infty(U)$ equal to one near $\overline P\times\{0\}$, define $\gamma_P f=(\gamma G_\chi)|_P$. This is an $L^2(P)$ class independent of $\chi$, compatible under restriction to smaller such patches, and equal to $(\gamma f)|_P$ when $f$ is a whole-space $H^s$ function. If $f=0$ almost everywhere on $U\cap H_+$, or on $U\cap H_-$, then $\gamma_Pf=0$. Thus the assertion applies to local data on a neighborhood of a flat boundary patch, with no choice of a whole-space extension of those data.

## Facts & Assumptions

**Given:** The hypotheses and conventions of the Statement.

[F1] Assume the Axiom of Choice [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice); its countable instance supplies the hypotheses of the Fourier and completion interfaces and the choices of Schwartz approximation sequences used below.

[F2] [math:thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces](https://alphabetamath.cc/item/thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces) identifies real-order $H^s$ with the weighted Fourier distribution space, with exact norm and dense Schwartz core; its completion definition supplies this density for all orders here, without a dimension restriction.

[F3] [math:thm-fourier-inversion-on-schwartz-space](https://alphabetamath.cc/item/thm-fourier-inversion-on-schwartz-space) gives absolutely convergent inversion. [math:thm-plancherel](https://alphabetamath.cc/item/thm-plancherel) gives the $L^2$ norm identity; [math:thm-tonelli-and-fubini-for-completed-product-measures](https://alphabetamath.cc/item/thm-tonelli-and-fubini-for-completed-product-measures) and [math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals) justify the Schwartz integrations and weighted Cauchy–Schwarz estimate.

[F4] [lem-se-author-8d28f6f38ee5-localized-chart-operators](item-lem-se-author-8d28f6f38ee5-localized-chart-operators) bounds fixed smooth cutoff multipliers on $H^r(\mathbb R^d)$ for $0\le r\le2$, in both the ambient and tangential dimensions. [math:thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces](https://alphabetamath.cc/item/thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces) identifies $H^1$ with its weak derivative space, with equivalent norms.

[F5] [math:lem-fundamental-theorem-and-integration-by-parts](https://alphabetamath.cc/item/lem-fundamental-theorem-and-integration-by-parts) gives $\int_a^b h'(t)\,dt=h(b)-h(a)$ for real $C^1$ functions on an open interval containing the finite endpoints. Apply this to the real smooth function $h(t)=|F(x^{\prime},t)|^2$ before taking an infinite-endpoint limit.

[F6] [math:lem-test-function-cutoffs-and-euclidean-localization](https://alphabetamath.cc/item/lem-test-function-cutoffs-and-euclidean-localization) supplies a compactly supported smooth cutoff equal to one near any compact subset of an open Euclidean set. This applies to $\overline P\times\{0\}$ in $U$ and in any smaller open neighborhood of that compact set.

[F7] [math:def-schwartz-space-and-its-seminorms](https://alphabetamath.cc/item/def-schwartz-space-and-its-seminorms) defines actual smooth Schwartz functions by the bounds $\sup_x|x^\alpha\partial^\beta F(x)|<\infty$ for every pair of multi-indices. [math:thm-fourier-transform-maps-schwartz-space-continuously-to-itself](https://alphabetamath.cc/item/thm-fourier-transform-maps-schwartz-space-continuously-to-itself) preserves this class for the negative-sign $2\pi$ transform under countable choice, supplied by the assumed AC.

[F8] [math:lem-schwartz-functions-and-all-derivatives-are-integrable](https://alphabetamath.cc/item/lem-schwartz-functions-and-all-derivatives-are-integrable) gives $L^p$ integrability of every weighted Schwartz derivative for $1\le p\le\infty$ under countable choice. [math:thm-dominated-convergence](https://alphabetamath.cc/item/thm-dominated-convergence) passes limits through integrals of measurable complex functions dominated by one integrable majorant; below the majorants in the normal variable are constant multiples of $(1+\tau^2)^{-1}$.

## Proof

**Given:** The hypotheses and data in the Statement.

**Goal:** Establish every assertion of the Statement with the stated spaces and bounds.

1.1 Let $F\in\mathcal S(\mathbb R^n)$ and put $h(x^{\prime})=F(x^{\prime},0)$. Its tangential Schwartz seminorms are bounded by those of $F$, so $h\in\mathcal S(\mathbb R^{n-1})$. By F7, $\widehat F\in\mathcal S(\mathbb R^n)$. Define $g(\xi^{\prime})=\int_{\mathbb R}\widehat F(\xi^{\prime},\tau)\,d\tau$. For every tangential multi-index pair $\alpha,\beta$, the Schwartz seminorms with normal powers zero and two give $|(\xi^{\prime})^\alpha\partial_{\xi^{\prime}}^\beta\widehat F(\xi^{\prime},\tau)|\le C_{\alpha\beta}(1+\tau^2)^{-1}$. The finite-interval fundamental theorem bounds coordinate difference quotients by the same kind of majorant for one higher derivative. Dominated convergence, applied along arbitrary sequences of increments tending to zero, therefore permits differentiation under the normal integral and proves continuity of every derivative. Integrating the displayed bound shows that every Schwartz seminorm of $g$ is finite, so $g\in\mathcal S(\mathbb R^{n-1})$. Inversion for $F$ at $t=0$ and Fubini, justified by $\widehat F\in L^1$, give $h(x^{\prime})=\int_{\mathbb R^{n-1}}g(\xi^{\prime})e^{2\pi i x^{\prime}\cdot\xi^{\prime}}\,d\xi^{\prime}$. Thus $\widehat g(y)=h(-y)$; inversion for $g$ and the substitution $y\mapsto-y$ yield $g=\widehat h$. This establishes $\widehat{F(\cdot,0)}(\xi^{\prime})=\int_{\mathbb R}\widehat F(\xi^{\prime},\tau)\,d\tau$ without interchanging an undamped double Fourier transform. [F1, F3, F5, F7, F8, given]

1.2 For Schwartz $F$ and fixed $x^{\prime}$, apply the finite-interval fundamental theorem to $h(t)=|F(x^{\prime},t)|^2$ on $[0,R]$: $|F(x^{\prime},0)|^2=|F(x^{\prime},R)|^2-2\operatorname{Re}\int_0^R(\partial_nF)\overline F\,dt$. Schwartz decay sends the boundary term to zero as $R\to\infty$ and makes the normal integral absolutely convergent. The product $(\partial_nF)\overline F$ is absolutely integrable on $H_+$ by the $p=q=2$ case of Holder applied to its absolute values. Fubini therefore gives $\|F(\cdot,0)\|_2^2=-2\operatorname{Re}\int_{H_+}(\partial_nF)\overline F\le2\|F\|_{L^2(H_+)}\|\partial_nF\|_{L^2(H_+)}$. Integrating instead from $-R$ to zero and taking $R\to\infty$ gives the negative-side estimate by the same absolute-integrability argument. [F3, F5, F7, F8, given]

2.1 Using the restriction identity of step 1.1, set $a=1+|\xi^{\prime}|^2$. Weighted Cauchy–Schwarz bounds the squared modulus of this integral by $\int(a+\tau^2)^s|\widehat F|^2d\tau$ times $\int(a+\tau^2)^{-s}d\tau=C_s a^{1/2-s}$, where $C_s=\int(1+t^2)^{-s}dt<\infty$ since $s>1/2$. Multiplying by $a^{s-1/2}$ and integrating in $\xi^{\prime}$ gives $\|F(\cdot,0)\|_{H^{s-1/2}}^2\le C_s\|F\|_{H^s}^2$. This uses the bracket norm and the negative-sign $2\pi$ transform, so no hidden normalization factor enters the trace integral. [F2, F3, step 1.1, given, algebra]

3.1 Approximate $F\in H^s$ by Schwartz functions in the completion norm. The bound makes their boundary restrictions Cauchy in complete $H^{s-1/2}$, with a limit independent of the approximating sequence. This defines the claimed bounded linear trace. For $s\ge1$ the same sequence converges also in $H^1$, and the target embeds into $L^2$ by its Fourier weight. The $s$-trace and the order-one trace therefore have the same $L^2$ limit, proving their compatibility. [F2, F3, step 2.1]

4.1 For $F\in H^1$, select Schwartz approximants in $H^1$. Their restrictions and normal derivatives converge in $L^2$ on either half-space by the weak-derivative norm equivalence; their traces converge in $L^2$ by step 3.1. Passing to the limits in the two inequalities proves the displayed bound on both sides for every $H^1$ input. If $F$ vanishes on one half-space, the corresponding factor $\|F\|_{L^2(H_\pm)}$ is zero, so its trace is zero. Compatibility from step 3.1 proves the same conclusion for $H^s$ inputs. [F1, F2, F4, step 3.1, step 1.2]

4.2 For $F\in H^s(\mathbb R^n)$ and $\eta\in C_c^\infty(\mathbb R^n)$, put $\eta_0(x^{\prime})=\eta(x^{\prime},0)$. On Schwartz functions the identity $\gamma(\eta F)=\eta_0\gamma F$ is the classical restriction identity. Multiplication by $\eta$ is bounded on $H^s$ and by $\eta_0$ on $H^{s-1/2}$, since both exponents lie in $[0,2]$. Thus Schwartz approximation and the trace bound pass this identity to all $F\in H^s$, in particular in $L^2$. Consequently, if $F=0$ on an open neighborhood $V$ of $\overline P\times\{0\}$, choose $\eta\in C_c^\infty(V)$ equal to one near that compact set. Then $\eta F=0$ and the identity shows $(\gamma F)|_P=0$. This also shows that two whole-space inputs agreeing near the patch have the same trace on it. [F1, F2, F4, F6, step 3.1]

5.1 For local data $f$ in the Statement, F6 gives an admissible $\chi$, and the local hypothesis gives $G_\chi\in H^s$, so $(\gamma G_\chi)|_P$ is an $L^2(P)$ class by step 3.1. If $\chi_1,\chi_2$ are two such cutoffs, then $G_{\chi_1}-G_{\chi_2}\in H^s$ and is zero on an open neighborhood of $\overline P\times\{0\}$, because both cutoffs equal one there. Step 4.2 makes their traces equal on $P$, proving independence. If a smaller patch is used, the cutoff for the larger patch is also admissible for the smaller one, which proves compatibility. A whole-space $f\in H^s$ satisfies the local hypothesis by F4; the difference $G_\chi-f$ vanishes near the patch, so step 4.2 proves agreement with its global trace. [F4, F6, step 3.1, step 4.2]

6.1 If the local datum vanishes almost everywhere on $U\cap H_+$, then every $G_\chi$ is zero on all of $H_+$, since it also vanishes outside $U$. Step 4.1 gives $\gamma G_\chi=0$, and hence $\gamma_Pf=0$. The negative side is identical using the negative-side bound in that step. The same argument applies after shrinking $U$ to any one-sided vanishing neighborhood of the patch. This proves the stated local uniqueness without weakening the global trace bound or the range of exponents. [given, step 4.1, step 5.1] ∎
