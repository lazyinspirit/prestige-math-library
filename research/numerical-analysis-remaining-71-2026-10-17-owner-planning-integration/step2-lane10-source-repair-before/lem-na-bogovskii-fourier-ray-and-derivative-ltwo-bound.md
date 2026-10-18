---
id: lem-na-bogovskii-fourier-ray-and-derivative-ltwo-bound
kind: lemma
title: "Elementary Fourier ray and derivative L2 bounds"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  [
    "lem-na-bogovskii-truncated-derivative-fourier-formula",
    "thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms",
    "lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set",
    "thm-tonelli-theorem-for-sigma-finite-product-spaces",
    "def-countable-choice",
    "lem-weak-derivatives-are-polynomial-fourier-multipliers",
    "cor-cauchy-schwarz-inequality-for-l-two"
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

Assume Countable Choice. Let $U$ be bounded and open, $\phi\in C_c^\infty(\mathbb R^d)$, and $\rho>0$. For every $\xi\in\mathbb R^d$ and coordinate $j$,
$$2\pi|\xi_j|\int_0^\infty|\widehat\phi(t\xi)|dt\le \rho^{-1}\|\phi\|_1+\rho\|\partial_j^2\phi\|_1.$$
If $T_{\phi,j}$ is the distributional operator of [[lem-na-bogovskii-truncated-derivative-fourier-formula]], then for every $f\in C_c^\infty(U)$ its restriction to $U$ is in $L^2(U)$ and
$$\|T_{\phi,j}f\|_{L^2(U)}\le A_j(\phi)\|f\|_{L^2(U)},\quad A_j(\phi)=2^{(d-1)/2}(\rho^{-1}\|\phi\|_1+\rho\|\partial_j^2\phi\|_1)+2^d|U|\|\partial_j\phi\|_\infty.$$
By density, this restriction has a unique bounded extension $L^2(U)\to L^2(U)$ with the same bound.

## Facts & Assumptions

**Given:** Countable Choice; bounded $U$, $\phi\in C_c^\infty$, $\rho>0$, and the truncated Fourier formula for $T_{\phi,j}$.

[A1] Countable Choice is assumed by the Plancherel/Fourier-multiplier interfaces and is used for the $L^2$ density extension. ([[def-countable-choice]])

[F1] For $0<t<1/2$, $\widehat{T^<_{\phi,j}f}(\xi)=2\pi i\xi_j\int_0^{1/2}\widehat\phi(t\xi)\widehat f((1-t)\xi)dt$. ([[lem-na-bogovskii-truncated-derivative-fourier-formula]])

[F2] Plancherel identifies the Fourier and $L^2$ norms, and $\widehat{\partial_j^2\phi}(\eta)=(2\pi i\eta_j)^2\widehat\phi(\eta)$. ([[thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms]], [[lem-weak-derivatives-are-polynomial-fourier-multipliers]])

[F3] Tonelli permits integrating the nonnegative Fourier bound in $(t,\xi)$, and Countable Choice gives density of $C_c^\infty(U)$ in $L^2(U)$. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]], [[def-countable-choice]])

[F4] The L2 Cauchy--Schwarz inequality gives $\int|fg|\le\|f\|_2\|g\|_2$. ([[cor-cauchy-schwarz-inequality-for-l-two]])

## Proof

1.1 If $\xi_j=0$, the left side of the ray estimate is zero. Otherwise put $t_0=(2\pi\rho|\xi_j|)^{-1}$. On $[0,t_0]$, use $|\widehat\phi|\le\|\phi\|_1$ to bound the integral by $2\pi|\xi_j|t_0\|\phi\|_1=\rho^{-1}\|\phi\|_1$. [given, algebra]

2.1 On $[t_0,\infty)$, [F2] gives $|\widehat\phi(t\xi)|\le(4\pi^2t^2\xi_j^2)^{-1}\|\partial_j^2\phi\|_1$. Integrating $2\pi|\xi_j|t^{-2}/(4\pi^2\xi_j^2)$ from $t_0$ to infinity gives $\rho\|\partial_j^2\phi\|_1$. Adding the intervals proves the ray bound. [A1, F2, algebra, step 1.1]

3.1 Write $m(t,\xi)=2\pi|\xi_j||\widehat\phi(t\xi)|$. Cauchy–Schwarz in $t$ and step 2.1 yield $|\widehat{T^<f}(\xi)|^2\le R_j(\phi)\int_0^{1/2}m(t,\xi)|\widehat f((1-t)\xi)|^2dt,$ where $R_j(\phi)=\rho^{-1}\|\phi\|_1+\rho\|\partial_j^2\phi\|_1$. Integrate in $\xi$, set $\eta=(1-t)\xi$, and then $s=t/(1-t)$. Since $(1-t)^{-(d+1)}dt=(1+s)^{d-1}ds\le2^{d-1}ds$ for $0\le s\le1$, the inner integral is at most $2^{d-1}R_j(\phi)\|f\|_2^2$ by the ray bound and [F2]. Plancherel [F2] then gives $\|T^<_{\phi,j}f\|_2\le2^{(d-1)/2}R_j(\phi)\|f\|_2$. [A1, F1, F2, F3, F4, step 2.1]

4.1 For $1/2\le t\le1$, the kernel $t^{-d}\partial_{x_j}[\phi(y+(x-y)/t)]$ has absolute value at most $2^{d+1}\|\partial_j\phi\|_\infty$; integrating the sharper factor $t^{-d-1}$ over this interval gives at most $2^d\|\partial_j\phi\|_\infty$. On $U\times U$ its integral operator has $L^2(U)$ norm at most $2^d|U|\|\partial_j\phi\|_\infty$ by Cauchy–Schwarz in $y$ and then $x$. Add this to the short-range bound of step 3.1, which was proved on all of $\mathbb R^d$ and hence also holds after restriction to $U$. [A1, F1, given, F4, step 3.1]

5.1 The estimates hold first for $f\in C_c^\infty(U)$. Density in $L^2(U)$ extends the restriction of the distributional operator uniquely to all $L^2(U)$ inputs and preserves the same bound. Convergence in $L^2(U)$ implies convergence against every test function in $C_c^\infty(U)$, so this extension agrees on $U$ with the distributional limit from the definition. [A1, F1, F3, step 3.1, step 4.1] ∎
