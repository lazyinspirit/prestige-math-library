---
id: lem-na-bogovskii-truncated-derivative-fourier-formula
kind: lemma
title: "Truncated Fourier formula for derivatives of the Bogovskii operator"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  [
    "def-na-star-shaped-bogovskii-integral",
    "def-countable-choice",
    "thm-linear-change-of-variables-for-lebesgue-measure",
    "thm-lebesgue-outer-measure-and-measurability-are-translation-invariant",
    "thm-dominated-convergence",
    "thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms",
    "lem-weak-derivatives-are-polynomial-fourier-multipliers",
    "thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces",
    "thm-tonelli-theorem-for-sigma-finite-product-spaces",
    "lem-na-bogovskii-kernel-support-and-divergence"
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ricardo G. Durán, An elementary proof of the continuity from L2_0(Omega)
        to H1_0(Omega)^n of Bogovskii’s right inverse of the divergence"
      url: https://arxiv.org/pdf/1103.3718
      locator: "Complete 17-page article; adopted proof range: pp. 2–7, formula (1.3),
        Lemmas 2.1–2.4 and Theorem 2.1; complete source reviewed."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element
        Methods and Applications (complete textbook)"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Chapter 8, §8.2 and §§8.5.5–8.7.1: continuous divergence lifting,
        inf-sup and MINI element."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Let $U$ and $\omega$ be as in [[def-na-star-shaped-bogovskii-integral]]. For $\phi\in C_c^\infty(\mathbb R^d)$ and $f\in C_c^\infty(\mathbb R^d)$, use $\widehat g(\xi)=\int e^{-2\pi ix\cdot\xi}g(x)dx$ and define
$$T_{\phi,j}^{\epsilon}f(x)=\int f(y)\int_\epsilon^1\partial_{x_j}\left[\phi\left(y+\frac{x-y}{t}\right)\right]\frac{dt}{t^d}dy.$$
As $\epsilon\downarrow0$ these converge in distributions to $T_{\phi,j}f$. The part with $0<t<1/2$ satisfies
$$\widehat{T^<_{\phi,j}f}(\xi)=2\pi i\xi_j\int_0^{1/2}\widehat\phi(t\xi)\widehat f((1-t)\xi)dt.$$
When $f\in C_c^\infty(U)$, the Bogovskii formula satisfies $\partial_j(\mathcal B_Uf)_k=T_{x_k\omega,j}f-T_{\omega,j}(y_kf)$ distributionally.

## Facts & Assumptions

**Given:** Countable Choice; bounded star-shaped $U$, the normalized bump $\omega$ of [[def-na-star-shaped-bogovskii-integral]], smooth compactly supported real $f,\phi$, and the displayed Fourier convention.

[A1] Countable Choice is required by the affine Lebesgue change-of-variables supplier used in [F2] and the Fourier/Plancherel suppliers in [F1]. ([[def-countable-choice]])

[F1] Plancherel and Fourier transformation agree with the integral transform on smooth integrable functions, and weak differentiation transforms to multiplication by $2\pi i\xi_j$. ([[thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms]], [[lem-weak-derivatives-are-polynomial-fourier-multipliers]])

[F2] In the Bogovskii formula $x-y=t(z-y)$. For $t>0$, dilation $z\mapsto tz$ scales Lebesgue measure by $t^d$ and translation by $(1-t)y$ preserves it, so their composition $x=y+t(z-y)$ has $dx=t^d dz$. The integral identity follows for indicators, then by simple-function approximation and positive and negative parts for integrable functions. ([[def-na-star-shaped-bogovskii-integral]], [[thm-linear-change-of-variables-for-lebesgue-measure]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]])

[F3] Fubini applies to the compactly supported truncated integral and its Fourier transform. ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]])

[F4] The kernel proof bounds its absolute integrand after integration in $t$ by $C|x-y|^{1-d}$ for $0<|x-y|\le\operatorname{diam}(U)$; this radial bound is integrable uniformly in each variable. The Bogovskii field and all its truncations have support in the compact set of segments joining $\operatorname{supp}f$ to $\operatorname{supp}\omega$. ([[lem-na-bogovskii-kernel-support-and-divergence]])

[F5] An integrable absolute majorant permits passing an almost-everywhere limit through the integral. ([[thm-dominated-convergence]])

## Proof

1.1 For $0<\delta<\epsilon<1/2$, pair $T^\delta_{\phi,j}f-T^\epsilon_{\phi,j}f$ with a Schwartz test function $\zeta$. This difference integrates only over $\delta\le t\le\epsilon$, where the change of variables $x=y+t(z-y)$ and Fubini are absolutely justified. The inner pairing contains $t^{-1}\partial_j\phi(z)\zeta(y+t(z-y))$. Integration by parts in $z$ changes its integral to $-\int\phi(z)\partial_j\zeta(y+t(z-y))dz$; the factor $t^{-1}$ has canceled. Its absolute value is at most $\|\phi\|_1\|\nabla\zeta\|_\infty$, uniformly in $y,t$. Thus the paired difference is bounded by $(\epsilon-\delta)\|f\|_1\|\phi\|_1\|\nabla\zeta\|_\infty$, so $T^\epsilon_{\phi,j}f$ has a distributional limit as $\epsilon\downarrow0$. [A1, given, F2, F3, algebra]

2.1 For $\epsilon<t<1/2$, Fourier transform in $x$ and use $x=y+t(z-y)$, whose Jacobian is $t^d$. The factor $t^{-d}$ cancels the Jacobian and $\partial_{x_j}\phi(z)=t^{-1}\partial_{z_j}\phi(z)$. Integration by parts in $z$ gives $\widehat{\partial_j\phi}(t\xi)=2\pi it\xi_j\widehat\phi(t\xi)$ by [F1]; the remaining $y$ integral is $\widehat f((1-t)\xi)$. Hence the truncated transform is $2\pi i\xi_j\int_\epsilon^{1/2}\widehat\phi(t\xi)\widehat f((1-t)\xi)dt$. The integrals converge pointwise in $\xi$, and their absolute values are bounded uniformly in $\epsilon$ by $\pi|\xi_j|\|\phi\|_1\|f\|_1$. Against any Schwartz test function this is an integrable majorant, so [F5] gives convergence in $\mathcal S'$. Step 1.1 gives convergence in $\mathcal S'$ as well, since its bound uses the Schwartz seminorm $\|\nabla\zeta\|_\infty$. Fourier transformation therefore identifies the displayed integral with the same limit. [A1, F1, F3, F2, F5, step 1.1]

3.1 For $\epsilon>0$, let $\mathcal B_U^\epsilon f$ be the defining integral truncated to $t\ge\epsilon$. For fixed $x\ne y$, the kernel integrand is zero for all sufficiently small $t$, because nonzero values require $|x-y|/t=|z-y|\le R:=\operatorname{diam}(U)$. By [F4], the absolute $t$ integral is bounded by $C|x-y|^{1-d}\mathbf1_{0<|x-y|\le R}$. Its product with $|f(y)|$ is integrable in $(x,y)$ by the annular bound and Fubini. Applying [F5] to this absolute majorant proves convergence of the truncated fields to $\mathcal B_Uf$ in $L^1(\mathbb R^d)$ and hence in distributions; no sign condition on $\omega$ is required. Rewrite the $k$-th component using $x_k-y_k=t(z_k-y_k)$ from [F2] as the integral of $[z_k\omega(z)-y_k\omega(z)]f(y)$ against $dt/t^d$. Differentiating the truncated fields in $x_j$, then using step 1.1 for the distributional limit, gives $T_{x_k\omega,j}f-T_{\omega,j}(y_kf)$; the minus sign comes from the second term. [A1, F2, F3, F4, F5, step 1.1] ∎
