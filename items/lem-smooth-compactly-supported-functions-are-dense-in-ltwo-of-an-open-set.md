---
id: lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set
kind: lemma
title: "Smooth compactly supported functions of an open set are dense in $L^2$"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-complex-lp-and-euclidean-test-function-conventions, def-countable-choice, def-integral-over-a-measurable-set, def-l-p-space-as-a-quotient-by-null-functions, def-mollifier-family-generated-by-a-unit-mass-smooth-bump, def-radial-mollifier-family-in-rn, def-sobolev-space-wkp-and-its-norm, def-wkp-zero-as-a-sobolev-closure, lem-classical-derivatives-are-weak-derivatives, lem-distance-to-set-is-lipschitz, lem-euclidean-bump-for-a-compact-set-inside-an-open-set, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, lem-mollification-commutes-with-weak-derivatives-in-the-interior, prop-mollifier-families-are-l-one-approximate-identities, thm-cauchy-schwarz-in-an-inner-product-space, thm-dominated-convergence, thm-heine-borel-rn, thm-l-one-approximate-identities-converge-in-l-p, thm-monotone-convergence-for-the-integral, thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset, thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign, lem-smooth-bump-between-concentric-euclidean-balls, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, thm-lebesgue-measure-of-a-box-of-every-kind, thm-holder-inequality-for-integrals, thm-extreme-value-metric]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: 'John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page notes)'
      url: 'https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf'
      locator: 'Section 4.2, test-function density in the weak formulation, printed pp. 91-95 (read in full)'
    - title: 'Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)'
      url: 'https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf'
      locator: 'Chapter 3, Sections 5.1 and 3.5, mollification and $W^{1,p}_0$ spaces, printed pp. 51-60 (read in full)'
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open with $n\ge1$ and $\mathbb K\in\{\mathbb R,\mathbb C\}$. Then $C_c^\infty(\Omega;\mathbb K)$ is dense in $L^2(\Omega;\mathbb K)$: for every $f\in L^2(\Omega;\mathbb K)$ and every $\delta>0$ there is $\varphi\in C_c^\infty(\Omega;\mathbb K)$ with $\|\varphi-f\|_{L^2(\Omega)}<\delta$. Consequently $H^1_0(\Omega)$ is dense in $L^2(\Omega)$, and if a class $h\in L^2(\Omega)$ satisfies $(h,v)_{L^2}=0$ for all $v\in H^1_0(\Omega)$, then $h=0$.

## Facts & Assumptions

**Given:** Countable Choice; an open set $\Omega\subseteq\mathbb R^n$ with $n\ge1$; $\mathbb K\in\{\mathbb R,\mathbb C\}$; a class $f\in L^2(\Omega;\mathbb K)$; and a tolerance $\delta>0$.

[F1] $L^2$ classes and zero extension: $L^2(\Omega;\mathbb K)$ is a space of almost-everywhere classes with norm $\|u\|_{L^2(\Omega)}=(\int_\Omega|u|^2)^{1/2}$ and pairing $(u,v)_{L^2}=\int_\Omega u\overline v$; the zero extension $F=\mathbf 1_\Omega f$ of $f$, equal to $f$ on $\Omega$ and $0$ off $\Omega$, is a well-defined class in $L^2(\mathbb R^n;\mathbb K)$ with $\|F\|_{L^2(\mathbb R^n)}=\|f\|_{L^2(\Omega)}$ ([[def-l-p-space-as-a-quotient-by-null-functions]], [[def-complex-lp-and-euclidean-test-function-conventions]], [[def-integral-over-a-measurable-set]]).

[F2] A continuous real function on a nonempty compact metric space attains its minimum ([[thm-extreme-value-metric]]). Exhaustion tools: a closed and bounded subset of $\mathbb R^n$ is compact ([[thm-heine-borel-rn]]), and for nonempty $A$ the function $x\mapsto\operatorname{dist}(x,A)$ is $1$-Lipschitz, hence continuous ([[lem-distance-to-set-is-lipschitz]]).

[F3] Mollifier existence: [[lem-smooth-bump-between-concentric-euclidean-balls]] gives a smooth $0\le q\le1$ equal to $1$ on $\overline B_{1/4}(0)$ and supported in $B_{1/2}(0)$. Its support has finite measure by [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]], and its inner ball contains a positive-volume box by [[thm-lebesgue-measure-of-a-box-of-every-kind]], so $0<\int q<\infty$. Thus $\rho=q/\int q$ is a real unit-mass smooth bump supported in $B_1(0)$; radiality is unnecessary.

[F4] Monotone and dominated convergence: a nondecreasing sequence of nonnegative measurable functions has integral limit equal to the integral of its pointwise limit, and a sequence dominated by one integrable function has integrals converging to the integral of its pointwise limit ([[thm-monotone-convergence-for-the-integral]], [[thm-dominated-convergence]]).

[F5] Global smoothing: if $G\in L^2(\mathbb R^n)$, Hölder on each finite-measure compact set makes $G$ locally integrable ([[thm-holder-inequality-for-integrals]], [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]). Its convolution with the real unit-mass bump of [F3] is smooth on all of $\mathbb R^n$ by [[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]]. The rescaled family is that of [[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]].

[F6] Approximate identity convergence: a mollifier family is an $L^1$ approximate identity ([[prop-mollifier-families-are-l-one-approximate-identities]]), and for every $1\le q<\infty$ and $g\in L^q(\mathbb R^n)$ one has $\|\rho_\varepsilon*g-g\|_{L^q}\to0$ as $\varepsilon\to0^+$ ([[thm-l-one-approximate-identities-converge-in-l-p]]).

[F7] Zero-boundary Sobolev space: every $\varphi\in C_c^\infty(\Omega;\mathbb K)$ lies in $W^{k,p}(\Omega;\mathbb K)$ because its classical derivatives are weak derivatives ([[lem-classical-derivatives-are-weak-derivatives]], [[def-sobolev-space-wkp-and-its-norm]]), and $H^1_0(\Omega)=W^{1,2}_0(\Omega)$ is by definition the closure of $C_c^\infty(\Omega;\mathbb K)$ in the $H^1$ norm ([[def-wkp-zero-as-a-sobolev-closure]]).

[F8] Inner product: on $L^2(\Omega;\mathbb K)$ the pairing of [F1] is an inner product inducing the $L^2$ norm ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]), and Cauchy--Schwarz gives $|(u,v)_{L^2}|\le\|u\|_{L^2}\|v\|_{L^2}$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

## Proof

**Proof technique:** direct.

1.1 If $\Omega=\varnothing$, use $\varphi=0$. Otherwise, for $m=0,1,2,\ldots$, when $\Omega\ne\mathbb R^n$, set $K_m=\{x:|x|\le m+1,\ \operatorname{dist}(x,\mathbb R^n\setminus\Omega)\ge1/(m+1)\}$; when $\Omega=\mathbb R^n$, set $K_m=\overline B_{m+1}(0)$. By [F2] each $K_m$ is compact and contained in $\Omega$, the sets increase, and $\bigcup_mK_m=\Omega$: in the proper-open-set case every point has positive distance from the complement by openness. [F2, given]

2.1 Let $F:=\mathbf 1_\Omega f\in L^2(\mathbb R^n)$ be the zero extension of [F1] and let $F_m:=\mathbf 1_{K_m}F$. Since $K_m\uparrow\Omega$, the sequence $|F-F_m|^2=|F|^2\mathbf 1_{\Omega\setminus K_m}$ decreases pointwise to $0$ and is bounded by the integrable function $|F|^2$; hence $\|F-F_m\|_{L^2}^2=\int_{\mathbb R^n}|F-F_m|^2\to0$ by dominated convergence, and $F_m\to F$ pointwise. Equivalently, the integrals $\int_{K_m}|F|^2$ increase to $\|F\|_{L^2}^2$ by monotone convergence, so the same limit follows. Choose $m$ with $\|F-F_m\|_{L^2}<\delta/2$. [F1, F4, step 1.1, choose]

3.1 Put $G=F_m$ for the $m$ selected in step 2.1, with a representative zero outside $K_m$. Then $\|F-G\|_2<\delta/2$. If $K_m=\varnothing$, $G=0$ and $\varphi=0$ already has error less than $\delta$; hence assume $K_m\ne\varnothing$. Consider every pair $(y,r)$ with $y\in K_m$, $0<r\le1$ and $B_r(y)\subseteq\Omega$. The balls $B_{r/2}(y)$ cover $K_m$, so compactness gives a finite nonempty subcover $B_{r_j/2}(y_j)$; put $\varepsilon_0=\min_j r_j/4>0$. If $y\in K_m$ and $|h|\le\varepsilon_0$, some covering ball gives $|y+h-y_j|<r_j/2+\varepsilon_0<r_j$, so $y+h\in\Omega$. Thus $K_m+\overline B_{\varepsilon_0}(0)\subseteq\Omega$. This sumset is compact: it is bounded, and for a point $x$ outside it the continuous function $y\mapsto|x-y|$ attains on $K_m$ a minimum greater than $\varepsilon_0$, so its complement is open. [F1, F2, step 2.1, choose, algebra]

4.1 Choose the unit-mass smooth bump $\rho$ constructed in [F3], and put $G_\varepsilon=G*\rho_\varepsilon$ for $0<\varepsilon<\varepsilon_0$. By [F5] this is smooth globally. If $x\notin K_m+\overline B_\varepsilon(0)$, every $y\in K_m$ has $\rho_\varepsilon(x-y)=0$, while $G(y)=0$ off $K_m$; hence the defining integral is zero. Its support therefore lies in the compact set $K_m+\overline B_\varepsilon(0)\subseteq\Omega$, so $G_\varepsilon|_\Omega\in C_c^\infty(\Omega)$. [F3, F5, step 3.1, construct]

5.1 By [F6], $\|G_\varepsilon-G\|_2\to0$. Choose $0<\varepsilon<\varepsilon_0$ with this norm less than $\delta/2$ and set $\varphi=G_\varepsilon|_\Omega$. Since $F,G,G_\varepsilon$ vanish outside $\Omega$, $\|\varphi-f\|_{L^2(\Omega)}=\|G_\varepsilon-F\|_2\le\|G_\varepsilon-G\|_2+\|G-F\|_2<\delta$. [F1, F6, step 3.1, step 4.1, choose, algebra]

6.1 Density of $C_c^\infty(\Omega;\mathbb K)$ in $L^2(\Omega)$ follows because $f$ and $\delta$ were arbitrary in step 5.1. Consequently $H^1_0(\Omega)$ is dense in $L^2(\Omega)$: given $g\in L^2(\Omega)$ and $\eta>0$, step 5.1 supplies $\varphi\in C_c^\infty(\Omega;\mathbb K)$ with $\|\varphi-g\|_{L^2}<\eta$, and $\varphi\in H^1_0(\Omega)$ by [F7]. Finally let $h\in L^2(\Omega)$ satisfy $(h,v)_{L^2}=0$ for every $v\in H^1_0(\Omega)$. By density choose classes $v_k\in H^1_0(\Omega)$ with $\|v_k-h\|_{L^2}\to0$; then Cauchy--Schwarz [F8] gives $|(h,h)|=|(h,h-v_k)|\le\|h\|_{L^2}\|h-v_k\|_{L^2}\to0$, so $\|h\|_{L^2}^2=(h,h)=0$ and $h=0$. [F1, F7, F8, step 5.1] ∎ 
