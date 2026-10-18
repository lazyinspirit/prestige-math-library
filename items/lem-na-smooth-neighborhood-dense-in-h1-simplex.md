---
id: lem-na-smooth-neighborhood-dense-in-h1-simplex
kind: lemma
title: Smooth-neighborhood density in H1 of a simplex
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  [
    def-sobolev-space-wkp-and-its-norm,
    lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set,
    thm-linear-change-of-variables-for-lebesgue-measure,
    thm-lebesgue-outer-measure-and-measurability-are-translation-invariant,
    def-mollifier-family-generated-by-a-unit-mass-smooth-bump,
    lem-smooth-bump-between-concentric-euclidean-balls,
    thm-lebesgue-measure-of-a-box-of-every-kind,
    prop-mollifier-families-are-l-one-approximate-identities,
    thm-l-one-approximate-identities-converge-in-l-p,
    lem-mollification-commutes-with-weak-derivatives-in-the-interior,
    thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign,
    thm-holder-inequality-for-integrals,
    prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets,
    def-countable-choice
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (complete UC
        Davis notes, revised 2014)"
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: "Complete notes, Chapter 3 §3.6 (printed pp. 59–60), smooth
        approximation of Sobolev functions by mollification."
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations
        (complete University of Illinois lecture notes, 2020)"
      url: https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf
      locator: "Complete notes, Chapter 3 §§3.2–3.4 (printed pp. 51–58), mollification
        and approximation by smooth functions."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Let $K\subset\mathbb R^d$ be a nondegenerate open simplex. For every $u\in H^1(K;\mathbb R)$ and every $\varepsilon>0$, there is a function $u_\varepsilon$ smooth on an open neighborhood of $\overline K$ with $\|u_\varepsilon-u\|_{H^1(K)}<\varepsilon$.

## Facts & Assumptions

**Given:** Countable Choice, a nondegenerate simplex $K$, a real Sobolev class $u\in W^{1,2}(K)$, and $\varepsilon>0$.

[A1] Countable Choice is inherited through the published Sobolev, density, change-of-variables, and mollification interfaces. ([[def-countable-choice]])

[F1] $W^{1,2}(K)$ consists of real $L^2$ classes with first weak derivatives in $L^2(K)$. ([[def-sobolev-space-wkp-and-its-norm]])

[F2] For every $g\in L^2(\mathbb R^d)$ and $\eta>0$, some $\phi\in C_c^\infty(\mathbb R^d)$ satisfies $\|g-\phi\|_2<\eta$. ([[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]])

[F3] An invertible linear map scales Lebesgue measure by its absolute determinant, and translations preserve measurability and measure. Thus an affine map $T(x)=Ax+b$ satisfies $|T(E)|=|\det A|\,|E|$. Applying this identity to indicator functions, then nonnegative simple functions and their increasing approximations, and finally positive and negative parts gives $\int_{T(E)}f(y)\,dy=|\det A|\int_E f(T(x))\,dx$ for integrable real $f$ (and for nonnegative measurable $f$). Null sets are preserved in both directions, so composition also respects almost-everywhere classes. ([[thm-linear-change-of-variables-for-lebesgue-measure]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]])

[F4] The smooth-bump lemma gives $\chi\in C_c^\infty(B_{1/2}(0))$ with $0\le\chi\le1$ and $\chi=1$ on $\overline B_{1/4}(0)$. Its support has finite measure by [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]], while $B_{1/4}(0)$ contains the cube $(-1/(8\sqrt d),1/(8\sqrt d))^d$, whose measure is positive by [[thm-lebesgue-measure-of-a-box-of-every-kind]]. Thus $m:=\int\chi$ is finite and positive. The normalized bump $\rho:=\chi/m$ has unit mass and support in $B_1(0)$; its rescalings are an $L^1$ approximate identity by [[prop-mollifier-families-are-l-one-approximate-identities]]. ([[lem-smooth-bump-between-concentric-euclidean-balls]], [[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]])

[F5] For every $g\in L^2(\mathbb R^d)$, $\|\rho_\eta*g-g\|_2\to0$ as $\eta\to0^+$. ([[thm-l-one-approximate-identities-converge-in-l-p]])

[F6] Interior mollification commutes with first weak derivatives: if $w\in H^1(U)$ and the $\eta$-neighborhood of $K$ lies inside $U$, then $D_i(\rho_\eta*w)=\rho_\eta*(D_iw)$ on $K$. ([[lem-mollification-commutes-with-weak-derivatives-in-the-interior]])

[F7] Convolution of a locally integrable function with a smooth compactly supported mollifier is smooth and derivatives pass under the integral sign. ([[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]])

[F8] An $L^2$ function on a bounded set is locally integrable by Holder's inequality and finiteness of Lebesgue measure on bounded sets. ([[thm-holder-inequality-for-integrals]], [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]])

## Proof

1.1 Choose $c\in K$ and $s\in(0,1)$, and put $T_s(x)=c+s(x-c)$ and $U_s=T_s^{-1}(K)$. Since $K$ is convex and $c$ is interior, $T_s(\overline K)$ is a compact subset of $K$; hence $U_s$ is an open simplex containing $\overline K$ with positive distance from $\overline K$ to $U_s^c$. Define $u_s=u\circ T_s$ on $U_s$. For $\psi\in C_c^\infty(U_s)$, change variables $y=T_s(x)$ in the weak derivative identity of $u$; with $\widetilde\psi(y)=\psi(T_s^{-1}y)$ one has $D_{y_i}\widetilde\psi=s^{-1}(D_{x_i}\psi)\circ T_s^{-1}$, so the identity gives $D_i u_s=s(D_i u)\circ T_s$ distributionally. [A1, F1, F3, construct, algebra]

1.2 For any $g\in L^2(K)$, extend it by zero to $\mathbb R^d$. Given $\eta>0$, choose $\phi\in C_c^\infty(\mathbb R^d)$ with $\|g-\phi\|_{L^2(K)}<\eta$ by [F2]. Because $T_s(K)\subset K$, change of variables [F3] gives $\|(g-\phi)\circ T_s\|_{L^2(K)}\le s^{-d/2}\eta$, while uniform continuity of $\phi$ on $\overline K$ gives $\|\phi\circ T_s-\phi\|_{L^2(K)}\to0$ as $s\to1^-$. The triangle inequality and arbitrary $\eta$ therefore show $\|g\circ T_s-g\|_{L^2(K)}\to0$. [F2, F3, algebra, algebra]

2.1 Apply step 1.2 to $g=u$ and to every $g=D_i u$. By step 1.1, $D_i u_s=s(D_i u)\circ T_s$, and $s\to1$; hence $u_s|_K\to u$ in the full $H^1(K)$ norm as $s\to1^-$. [F1, step 1.1, step 1.2, algebra]

3.1 Choose $s$ close enough to $1$ that $\|u_s-u\|_{H^1(K)}<\varepsilon/2$, and let $r=\operatorname{dist}(\overline K,U_s^c)>0$. Choose the bump from [F4] and then $0<\delta<r$. The zero extension of $u_s$ is locally integrable by [F8], so $w_\delta=(\rho_\delta*E_0u_s)$ is smooth by [F7]. On $K$, [F6] gives $D_iw_\delta=\rho_\delta*E_0(D_i u_s)$. Each zero extension is in $L^2(\mathbb R^d)$; [F5] therefore gives $\|w_\delta-u_s\|_{H^1(K)}\to0$ as $\delta\to0^+$. Choose $\delta<r$ small enough to make this norm less than $\varepsilon/2$. Then $w_\delta$ is smooth on a neighborhood of $\overline K$, and the triangle inequality with step 2.1 gives $\|w_\delta-u\|_{H^1(K)}<\varepsilon$. [A1, F4, F5, F6, F7, F8, step 2.1, choose, algebra] ∎
