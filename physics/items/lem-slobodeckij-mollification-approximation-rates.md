---
id: lem-slobodeckij-mollification-approximation-rates
kind: lemma
title: "Mollification rates for compactly supported Slobodeckij functions"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-radial-mollifier-family-in-rn, thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign, thm-young-convolution-inequality, thm-minkowski-integral-inequality, thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset, def-fractional-slobodeckij-space-on-euclidean-space, def-translation-of-a-function-on-rn, def-l-p-space-as-a-quotient-by-null-functions, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, thm-linear-change-of-variables-for-lebesgue-measure, lem-euclidean-balls-have-positive-finite-lebesgue-measure, thm-tonelli-and-fubini-for-completed-product-measures, thm-holder-inequality-for-integrals, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Theorem 3.44 proof steps (2)-(3), printed pp. 86-88, provide the integer-order mollification model; the fractional delta^theta and delta^(theta-1) rates are proved locally from the translation representation of the Slobodeckij seminorm."
    - title: "Eleonora Di Nezza, Giampiero Palatucci and Enrico Valdinoci, Hitchhiker's guide to the fractional Sobolev spaces (arXiv:1104.4345, survey)"
      url: "https://arxiv.org/pdf/1104.4345"
      locator: "Section 7, Theorem 7.1 proof, printed pp. 49-53, gives fractional averaging estimates. The translation-modulus and mollification rates in this item are derived locally."
---

## Statement

Assume the Axiom of Countable Choice. Let $d\ge1$, $0<\theta<1$,
$1\le p<\infty$, let $g\in W^{\theta,p}(\mathbb R^d)$ have compact support, and
let $g_\delta:=g*\eta_\delta$ be the mollification of $g$ by a radial
mollifier $\eta$ with $\int\eta=1$. Then $g_\delta\in C_c^\infty(\mathbb R^d)$
is supported in the $\delta$-neighbourhood of $\operatorname{supp}g$;
There are constants $C_1=C_1(d,p,\theta)$ and $C_2=C_2(d,p,\theta,\eta)$ such that
$${\rm (i)}\ \|g-g_\delta\|_{L^p(\mathbb R^d)}\le C_1(d,p,\theta)\, \delta^{\theta}[g]_{\theta,p};\qquad {\rm (ii)}\ \|g_\delta\|_{W^{1,p}(\mathbb R^d)}\le C_2(d,p,\theta,\eta)\Bigl( \|g\|_{L^p(\mathbb R^d)}+\delta^{\theta-1}[g]_{\theta,p}\Bigr).$$

## Facts & Assumptions

**Given:** the Axiom of Countable Choice, $d\ge1$, $0<\theta<1$, $1\le p<\infty$, a compactly supported $g\in W^{\theta,p}(\mathbb R^d)$, a radial mollifier $\eta$ with $\int\eta=1$, and $g_\delta=g*\eta_\delta$. Write $\omega(t):=\sup_{|z|\le t}\|\tau_zg-g\|_{L^p(\mathbb R^d)}$ for $t\ge0$.

[F1] *Slobodeckij seminorm as a translation integral.* Because the diagonal is null and Tonelli's theorem together with the substitution $z=y-x$ applies, $[g]_{\theta,p}^p=\int_{\mathbb R^d}\|\tau_zg-g\|_{L^p(\mathbb R^d)}^p |z|^{-d-p\theta}\,dz$. ([[def-fractional-slobodeckij-space-on-euclidean-space]], [[thm-tonelli-and-fubini-for-completed-product-measures]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]], [[def-translation-of-a-function-on-rn]])

[F2] *Volume scaling.* If $v_d:=|B(0,1)|$, then $|B(0,t)|=v_dt^d$ with $0<v_d<\infty$ for every $t>0$. ([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]], [[thm-linear-change-of-variables-for-lebesgue-measure]])

[F3] *The translation modulus is subadditive.* $\omega$ is nondecreasing, and $\omega(s+t)\le\omega(s)+\omega(t)$ for all $s,t\ge0$, because $\tau_zg-g=\tau_{z_2}(\tau_{z_1}g-g)+(\tau_{z_2}g-g)$ when $z=z_1+z_2$ and translations are isometries of $L^p$. ([[def-translation-of-a-function-on-rn]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]], [[def-l-p-space-as-a-quotient-by-null-functions]])

[F4] *Minkowski's integral inequality.* For measurable $F$ on a product of sigma-finite measure spaces with $\int_Y\|F(\cdot,y)\|_p\,d\nu(y)<\infty$, $\bigl\|\int_YF(\cdot,y)\,d\nu(y)\bigr\|_p\le\int_Y\|F(\cdot,y)\|_p\,d\nu(y)$. ([[thm-minkowski-integral-inequality]])

[F5] *Young's convolution inequality.* $\|f*h\|_{L^p}\le\|f\|_{L^1}\|h\|_{L^p}$. ([[thm-young-convolution-inequality]])

[F6] *Mollifying a locally integrable function.* For $g\in L^1_{\mathrm{loc}}$ the convolution $g*\eta_\delta$ is smooth with $\partial^\alpha(g*\eta_\delta)=g*(\partial^\alpha\eta_\delta)$; an $L^p$ function is locally integrable, and a compactly supported $L^p$ function lies in $L^1$. ([[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]], [[thm-holder-inequality-for-integrals]])

[F7] *Support of a convolution.* For Borel representatives of $f,h\in L^1$, $\operatorname{supp}(f*h)\subseteq\overline{\operatorname{supp}f+ \operatorname{supp}h}$. ([[thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset]])

[F8] *The radial mollifier.* $\eta_\delta=\delta^{-d}\eta(\cdot/\delta)$ satisfies $\int\eta_\delta=1$, $\operatorname{supp}\eta_\delta\subseteq B(0,\delta)$, and $\int_{\mathbb R^d}\partial_j\eta_\delta=0$ for every $j$, since $\eta$ is radial and its gradient is odd in each coordinate. ([[def-radial-mollifier-family-in-rn]])

## Proof

**Proof technique:** Use subadditivity of the translation modulus to dominate its supremum by an average over a ball, compare that average to the Slobodeckij translation integral, and then estimate the approximation error and gradient by Minkowski's integral inequality.

1.1 Fix $t>0$ and $|h|\le t$. By [F3], for every $z\in B(0,t)$ we have $\|\tau_hg-g\|_p\le\|\tau_zg-g\|_p+\|\tau_{h-z}g-g\|_p$. Raising to the $p$-th power and averaging over $z\in B(0,t)$ gives $$\|\tau_hg-g\|_p^p\le\frac{2^{p-1}}{|B(0,t)|}\left(\int_{B(0,t)}\|\tau_zg-g\|_p^p dz+\int_{B(0,t)}\|\tau_{h-z}g-g\|_p^p dz\right)\le\frac{2^p}{v_dt^d}\int_{|w|\le2t}\|\tau_wg-g\|_p^p dw,$$ because both $B(0,t)$ and $h-B(0,t)$ lie in $B(0,2t)$ and [F2] gives $|B(0,t)|=v_dt^d$. Taking the supremum over $|h|\le t$, then using [F1] and $|w|^{-d-p\theta}\ge(2t)^{-d-p\theta}$ for $0<|w|\le2t$, yields $$\omega(t)^p\le\frac{2^p}{v_dt^d}(2t)^{d+p\theta}[g]_{\theta,p}^p.$$ Thus $\omega(t)\le C_1t^{\theta}[g]_{\theta,p}$ for a constant $C_1=C_1(d,p,\theta)$, which is the translation-modulus estimate needed below. [F1, F2, F3]

2.1 Since $\int\eta_\delta=1$ and $\eta_\delta\ge0$ is supported in $B(0,\delta)$, $g(x)-g_\delta(x)=\int\eta_\delta(y)\bigl(g(x)-g(x-y)\bigr)dy$; taking $L^p$-norms and applying [F4] with $Y=B(0,\delta)$ gives $\|g-g_\delta\|_p\le\int\eta_\delta(y)\|g-\tau_yg\|_p\,dy\le\omega(\delta)\le C_1\delta^{\theta}[g]_{\theta,p}$, which is (i). [F4, F8, step 1.1]

3.1 By [F6], $g_\delta$ is smooth and $\nabla g_\delta=g*\nabla\eta_\delta$; [F6] also gives $g\in L^1$ because $g$ has compact support and lies in $L^p$. By [F8], $\int\partial_j\eta_\delta=0$, so $\partial_jg_\delta(x)=\int\bigl(g(x-y)-g(x)\bigr)\partial_j\eta_\delta(y)\,dy$, and [F4] gives $\|\partial_jg_\delta\|_p\le\omega(\delta)\int|\partial_j\eta_\delta|\le C_2\delta^{\theta-1}[g]_{\theta,p}$ because $\int|\nabla\eta_\delta|=\delta^{-1}\int|\nabla\eta|$. Moreover $\|g_\delta\|_p\le\|g\|_p$ by [F5] with $\|\eta_\delta\|_1=1$, so $\|g_\delta\|_{W^{1,p}}\le\|g\|_p+\sum_j\|\partial_jg_\delta\|_p$, which is (ii) after enlarging the constant. Finally, $g_\delta\in C^\infty$ by [F6], and [F7] applied to the Borel representative of $g$ and to $\eta_\delta$ gives $\operatorname{supp}g_\delta\subseteq\overline{\operatorname{supp}g+B(0,\delta)}$, the $\delta$-neighbourhood of $\operatorname{supp}g$; this is compact because $\operatorname{supp}g$ is compact, so $g_\delta\in C_c^\infty(\mathbb R^d)$. [F5, F6, F7, F8, step 1.1] ∎ 