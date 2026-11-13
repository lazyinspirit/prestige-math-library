---
title: Localized smooth coordinate changes and cutoffs on Fourier $H^r$
status: draft
research_item: lem-se-author-8d28f6f38ee5-localized-chart-operators
dependency_level: 6
---

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:lem-c-k-boundary-flattening-preserves-wkp-locally](https://alphabetamath.cc/item/lem-c-k-boundary-flattening-preserves-wkp-locally)
- [math:lem-weak-leibniz-rule-with-a-smooth-factor](https://alphabetamath.cc/item/lem-weak-leibniz-rule-with-a-smooth-factor)
- [math:lem-compact-support-zero-extension-in-wkp](https://alphabetamath.cc/item/lem-compact-support-zero-extension-in-wkp)
- [math:thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces](https://alphabetamath.cc/item/thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces)
- [math:thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces](https://alphabetamath.cc/item/thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces)
- [lem-se-positive-spectral-scale-contract](item-lem-se-positive-spectral-scale-contract)
- [math:ex-unbounded-multiplication-operator-and-its-domain](https://alphabetamath.cc/item/ex-unbounded-multiplication-operator-and-its-domain)
- [math:thm-plancherel](https://alphabetamath.cc/item/thm-plancherel)
- [math:def-ck-euclidean-maps-and-diffeomorphisms](https://alphabetamath.cc/item/def-ck-euclidean-maps-and-diffeomorphisms)
- [math:def-complex-lp-and-euclidean-test-function-conventions](https://alphabetamath.cc/item/def-complex-lp-and-euclidean-test-function-conventions)
- [math:cor-c-one-change-of-variables-for-l-one-functions](https://alphabetamath.cc/item/cor-c-one-change-of-variables-for-l-one-functions)
- [math:lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets](https://alphabetamath.cc/item/lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets)
- [physics:lem-nrqm-oscillator-unitary-transport-of-spectral-pvms](https://alphabetamath.cc/physics/item/lem-nrqm-oscillator-unitary-transport-of-spectral-pvms)
- [math:thm-unbounded-borel-functional-calculus](https://alphabetamath.cc/item/thm-unbounded-borel-functional-calculus)
- [math:lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces](https://alphabetamath.cc/item/lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces)
- [math:thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms](https://alphabetamath.cc/item/thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms)
- [math:def-test-function-space-d-of-an-open-set](https://alphabetamath.cc/item/def-test-function-space-d-of-an-open-set)


## Statement

Assume AC, let $d\ge1$, and use complex scalars for all function spaces. Let $\Phi:U\to V$ be a smooth diffeomorphism between open subsets of $\mathbb R^d$ and $\chi\in C_c^\infty(U)$. Define one operator on whole-space $L^2$ classes by $Kf=\chi(f\circ\Phi)$ on $U$ and zero outside $U$. Then $K:H^r(\mathbb R^d)\to H^r(\mathbb R^d)$ is bounded for $0\le r\le2$, with bounds depending on the fixed compact chart and cutoff. The same holds in the inverse chart direction and for fixed smooth multipliers with bounded derivatives through order two. These are the bracket-weighted Fourier spaces, and compactly localized coordinate representatives are extended by zero only outside the chart edges.

## Facts & Assumptions

**Given:** The hypotheses and conventions of the Statement.

[F1] Assume the Axiom of Choice [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice); in particular its countable and dependent instances are available.

[F2] [$C^k$ boundary flattening preserves local $W^{k,p}$](https://alphabetamath.cc/item/lem-c-k-boundary-flattening-preserves-wkp-locally) gives the weak chain rule and composition bound through order two on fixed compact patches, with $k=2$ and $p=2$. [math:lem-weak-leibniz-rule-with-a-smooth-factor](https://alphabetamath.cc/item/lem-weak-leibniz-rule-with-a-smooth-factor) controls cutoff products, and [math:lem-compact-support-zero-extension-in-wkp](https://alphabetamath.cc/item/lem-compact-support-zero-extension-in-wkp) extends the compact ambient-chart product.

[F3] [math:thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces](https://alphabetamath.cc/item/thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces) uses $\|\langle\xi\rangle^r\widehat f\|_2$ and the real-order completion of Schwartz space. [math:thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces](https://alphabetamath.cc/item/thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces) identifies its order-two endpoint with weak derivatives up to norm equivalence. [lem-se-positive-spectral-scale-contract](item-lem-se-positive-spectral-scale-contract) supplies exact common-operator interpolation for the positive Fourier Hilbert scale.

[F4] [math:ex-unbounded-multiplication-operator-and-its-domain](https://alphabetamath.cc/item/ex-unbounded-multiplication-operator-and-its-domain) gives the self-adjoint multiplication operator $M_{1+|\xi|^2}$, its PVM and exact multiplier calculus on complex Euclidean $L^2$. [math:thm-plancherel](https://alphabetamath.cc/item/thm-plancherel) gives the onto complex-linear Fourier isometry $\mathcal F_2$.

[F5] Smooth Euclidean maps and diffeomorphisms have the meaning of [math:def-ck-euclidean-maps-and-diffeomorphisms](https://alphabetamath.cc/item/def-ck-euclidean-maps-and-diffeomorphisms). Complex $L^2$ classes, smooth complex test functions and componentwise derivatives use [Complex $L^p$ classes and Euclidean test-function conventions](https://alphabetamath.cc/item/def-complex-lp-and-euclidean-test-function-conventions). The open-set convention $C_c^\infty(U;\mathbb C)$ and its support compactly contained in $U$, equivalently smooth compactly supported zero extension to $\mathbb R^d$, are supplied by [math:def-test-function-space-d-of-an-open-set](https://alphabetamath.cc/item/def-test-function-space-d-of-an-open-set).

[F6] Under the countable-choice consequence of AC, [A $C^1$ diffeomorphism satisfies the change-of-variables formula for $L^1$ functions](https://alphabetamath.cc/item/cor-c-one-change-of-variables-for-l-one-functions) gives substitution for complex $L^1$ functions under a $C^1$ diffeomorphism of open Euclidean sets. [math:lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets](https://alphabetamath.cc/item/lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets) sends null sets to null sets; apply it to $\Phi^{-1}$ to obtain representative independence of pullback by $\Phi$.

[F7] Under AC and Countable Choice, [physics:lem-nrqm-oscillator-unitary-transport-of-spectral-pvms](https://alphabetamath.cc/physics/item/lem-nrqm-oscillator-unitary-transport-of-spectral-pvms) transports a self-adjoint operator and its regular spectral PVM along a bijective complex-linear isometry. Its actual domain is mathematics. [math:thm-unbounded-borel-functional-calculus](https://alphabetamath.cc/item/thm-unbounded-borel-functional-calculus) supplies the square-integrability domains, norm identities and spectral truncation limits for the transported real powers. No physical premise is used.

[F8] [math:lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces](https://alphabetamath.cc/item/lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces) makes restriction $W^{2,2}(\mathbb R^d;\mathbb C)\to W^{2,2}(V_0;\mathbb C)$ a contraction for every open $V_0$. Its AC, positive-dimension and complex-scalar hypotheses hold here.

[F9] Under Countable Choice, [math:thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms](https://alphabetamath.cc/item/thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms) identifies the distributional Fourier transform of an $L^2$ class with its Plancherel transform in the same negative-sign $2\pi$ normalization. Combine this with the weighted Fourier characterization in [F3] at nonnegative orders.

## Proof

**Given:** The hypotheses and data in the Statement.

**Goal:** Establish every assertion of the Statement with the stated spaces and bounds.

1.1 If $U=\varnothing$, then $V=\varnothing$ because $\Phi$ is a bijection. The chart operator and its inverse-chart analogue are then identically zero on every $H^r$, with operator norm zero. For the remaining chart argument assume $U\ne\varnothing$. By [F5], $\operatorname{supp}\chi$ is a compact subset of $U$. Choose fixed nonempty open patches $U_0\Subset U$ and $V_0\Subset V$ with $\operatorname{supp}\chi\subset U_0$ and $\Phi(\overline{U_0})\subset V_0$. Put $\Psi=\Phi^{-1}$. On these compact patches the derivatives of $\Phi$ and $\Psi$ through order two are bounded, and the absolute Jacobians are bounded above and away from zero. For $f\in L^2(\mathbb R^d;\mathbb C)$, the function $g(y)=|\chi(\Psi(y))|^2|f(y)|^2|\det D\Psi(y)|$ on $\Phi(U_0)$ belongs to $L^1$ by the compact Jacobian bound. Apply substitution to $g$ under $\Phi|_{U_0}$ and use $|\det D\Psi(\Phi(x))||\det D\Phi(x)|=1$ to obtain $\|Kf\|_2^2=\int_{\Phi(U_0)}|\chi(\Psi(y))|^2|f(y)|^2|\det D\Psi(y)|\,dy\le C_0\|\chi\|_\infty^2\|f\|_2^2$, where $C_0=\sup_{\Phi(\overline{U_0})}|\det D\Psi|<\infty$. If two input representatives differ on a null set $N$, their pullbacks differ only on $\Psi(N\cap V)$, which is null by the null-set supplier applied to $\Psi$. Thus the formula defines one complex-linear bounded operator on $L^2$ classes. [F1, F5, F6, given]

2.1 For $f\in H^2(\mathbb R^d)$, the integer Fourier characterization identifies $f$ with its $W^{2,2}$ class with equivalent norms. Apply [F8] with ambient open set $\mathbb R^d$, restriction set $V_0$, $k=p=2$ and complex scalars: $\|f|_{V_0}\|_{W^{2,2}(V_0)}\le\|f\|_{W^{2,2}(\mathbb R^d)}$. The weak chain rule bounds $f\circ\Phi$ in $W^{2,2}(U_0)$: its first derivatives use first input derivatives, and its second derivatives use first and second input derivatives with bounded chart coefficients. Leibniz bounds $\chi(f\circ\Phi)$, whose support is compact in $U_0$. Compact-support zero extension across only the ambient chart edges gives $\|Kf\|_{W^{2,2}(\mathbb R^d)}\le C\|f\|_{W^{2,2}(\mathbb R^d)}$ for the same operator as in step 1.1. [F2, F3, F8, step 1.1]

3.1 The integer Fourier characterization turns the preceding bound into a bound on $H^2(\mathbb R^d)$ for the same $L^2$ operator. On the nonzero frequency Hilbert space $L^2(\mathbb R^d_\xi;\mathbb C)$ let $M=M_{1+|\xi|^2}$. The multiplier is real and at least one, and Lebesgue measure is sigma-finite. Apply [F7] to $U=\mathcal F_2^{-1}$ and $M$: the operator $B=\mathcal F_2^{-1}M\mathcal F_2$ on $D(B)=\mathcal F_2^{-1}D(M)$ is self-adjoint, with PVM $E_B(C)=\mathcal F_2^{-1}E_M(C)\mathcal F_2$. The scalar spectral measures are consequently transported by $\mathcal F_2$, so the multiplier calculus and square-integrability formula give $B\ge I$, $D(B^{r/2})=\{f\in L^2:\langle\xi\rangle^r\mathcal F_2f\in L^2\}$ and $\|B^{r/2}f\|_2=\|\langle\xi\rangle^r\mathcal F_2f\|_2$ for $0\le r\le2$. The powers follow first for bounded truncated multipliers and then by their exact domain-norm limits. By [F9] and [F3], these domains are the bracket-weighted $H^r$ spaces with exactly their Fourier norms. The positive scale contract identifies its completed positive levels with these domains. Apply its common-operator interpolation to $K$ between levels zero and two to obtain the stated bounds for $0<r<2$; retain the endpoint bounds already proved. The inverse chart satisfies the same hypotheses on fixed compact inverse patches, so the identical argument applies there. [F1, F3, F4, F7, F9, step 1.1, step 2.1]

4.1 For a smooth multiplier with bounded derivatives through order two, the $L^2$ bound and global weak Leibniz bound give the same endpoint interpolation argument directly, without compact support. In all cases the extension to a positive-order space is the original $L^2$ formula restricted to that space, so local coordinate changes and cutoffs remain consistent under restriction and composition. This proves the claimed common-model localization. [F2, F3, F4, step 3.1] ∎
