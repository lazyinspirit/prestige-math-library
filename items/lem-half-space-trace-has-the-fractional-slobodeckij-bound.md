---
id: lem-half-space-trace-has-the-fractional-slobodeckij-bound
kind: lemma
title: "The half-space trace lies in the fractional Slobodeckij space"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [lem-coordinate-direction-form-of-the-slobodeckij-seminorm, lem-one-dimensional-hardy-inequality-on-the-half-line, thm-trace-estimate-on-the-half-space, def-fractional-slobodeckij-space-on-euclidean-space, thm-smooth-up-to-the-boundary-density-on-smooth-domains, thm-holder-inequality-for-integrals, thm-tonelli-and-fubini-for-completed-product-measures, thm-fatou-lemma, thm-wkp-extension-from-a-half-space, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Petru Mironescu, Fine properties of functions: an introduction (Internet Archive capture of the HAL deposit cel-00747696)"
      url: "https://web.archive.org/web/20200319104529id_/https://hal.science/cel-00747696/document"
      locator: "Chapter 11, Theorem 25(a) and estimates (11.21)-(11.29), printed pp. 77-78: mid-point splitting, polar coordinates, Hardy's inequality, and integration of the gradient."
    - title: "Maria Kampanou, Trace Theorems for Sobolev Spaces (master's thesis, National and Kapodistrian University of Athens, July 2018)"
      url: "https://pergamos.lib.uoa.gr/uoa/dl/object/2864871/file.pdf"
      locator: "Chapter 3, Theorem 3.2 and estimates (3.1)-(3.3), printed pp. 19-22: the difference-quotient bound integrated against $h^{-p}dh$, followed by Fatou."
    - title: "Emilio Gagliardo, Caratterizzazioni delle tracce sulla frontiera relative ad alcune classi di funzioni in $n$ variabili, Rend. Sem. Mat. Univ. Padova 27 (1957), 284-305"
      url: "https://www.numdam.org/item/RSMUP_1957__27__284_0.pdf"
      locator: "No. 2, first part of the proof of Teorema [1.I], printed pp. 290-297: the boundary estimate is proved by splitting increments in the normal and tangential directions."
    - title: "Armin Schikorra, Partial Differential Equations (University of Pittsburgh, version 4 December 2019)"
      url: "https://sites.pitt.edu/~armin/pde1_2019/pde_script.pdf"
      locator: "Chapter III, Section III.3.5, printed pp. 76-77 and Chapter V, Section V.2, printed pp. 97-100: the trace loss of $1/p$ derivatives and its difference-quotient form."
    - title: "Petru Mironescu, Fine properties of functions: an introduction (author-hosted 89-page edition)"
      url: "https://math.univ-lyon1.fr/~mironescu/resources/introduction_fine_properties_functions_2005.pdf"
      locator: "Chapter 12, Theorem 25(a), complete proof (12.21)-(12.29), printed pp. 85-86."
---

## Statement

Assume the Axiom of Choice. Let $d\ge1$, $1<p<\infty$, $\theta=1-1/p$,
$H=\mathbb R^d\times(0,\infty)$, and let $T_+$ be the half-space trace of
[[thm-trace-estimate-on-the-half-space]]. Write
$|Du|^p:=\sum_{j=1}^{d+1}|D_ju|^p$ for the sum of the $p$-th powers of the
weak first derivatives, and $[\cdot]_{\theta,p}$ for the Slobodeckij seminorm
of [[def-fractional-slobodeckij-space-on-euclidean-space]]. Then for every
$u\in W^{1,p}(H;\mathbb K)$ with $g=T_+u$,
$$[g]_{\theta,p}^p\le C(d,p)\int_H|Du|^p\,dx=C(d,p)\sum_{j=1}^{d+1}\|D_ju\|_{L^p(H)}^p\le C(d,p)\|u\|_{W^{1,p}(H)}^p;$$
equivalently $T_+:W^{1,p}(H;\mathbb K)\to W^{\theta,p}(\mathbb R^d;\mathbb K)$
is a bounded operator.

The homogeneous estimate is scale invariant: for $r>0$ and
$u_r(x',t):=u(rx',rt)$ one has $g_{u_r}(x')=g(rx')$ and
$$[g_{u_r}]_{\theta,p}^p=r^{-d+p\theta}[g]_{\theta,p}^p,\qquad \int_H|Du_r|^p\,dx=r^{-d+p\theta}\int_H|Du|^p\,dx,$$
because $p\theta=p-1$; so both sides of the homogeneous estimate scale with
the same exponent $r^{-d+p\theta}$.

## Facts & Assumptions

**Given:** The Axiom of Choice; $d\ge1$, $1<p<\infty$, $\theta=1-1/p$; the half-space $H=\mathbb R^d\times(0,\infty)$; the trace $T_+$ and its bound $\|T_+u\|_{L^p}\le C\|u\|_{W^{1,p}(H)}$ of [[thm-trace-estimate-on-the-half-space]].

[F1] The seminorm on $\mathbb R^d$ is $[g]_{\theta,p}=(\int\int|g(\xi)-g(\eta)|^p|\xi-\eta|^{-d-p\theta}d\xi d\eta)^{1/p}$ with the diagonal read as $0$, and it is comparable to the sum of coordinate-direction integrals: $[g]_{\theta,p}^p\asymp_{d,p,\theta}\sum_{i=1}^d\int_0^\infty h^{-p}\int_{\mathbb R^d}|g(\xi+he_i)-g(\xi)|^pd\xi\,dh$, because $1+p\theta=p$. ([[def-fractional-slobodeckij-space-on-euclidean-space]], [[lem-coordinate-direction-form-of-the-slobodeckij-seminorm]])

[F2] Hardy's inequality on the half-line: for $1<p<\infty$ and measurable $f\ge0$, $\int_0^\infty t^{-p}(\int_0^tf)^pdt\le(\frac{p}{p-1})^p\int_0^\infty f^p$, with $+\infty$ allowed on either side; substituting $h=2t$ gives $\int_0^\infty h^{-p}(\int_0^{h/2}f)^pdh\le2^{1-p}(\frac{p}{p-1})^p\int_0^\infty f^p$. ([[lem-one-dimensional-hardy-inequality-on-the-half-line]])

[F3] The trace $T_+$ is linear and bounded from $W^{1,p}(H)$ to $L^p(\mathbb R^d)$, and it is the extension of classical restriction on the dense class of restrictions of $C_c^\infty(\mathbb R^n)$ functions. ([[thm-trace-estimate-on-the-half-space]])

[F4] Assume the Axiom of Choice. There is a bounded linear extension operator $E:W^{1,p}(H)\to W^{1,p}(\mathbb R^n)$ with $(Eu)|_H=u$, and $C_c^\infty(\mathbb R^n)$ is dense in $W^{1,p}(\mathbb R^n)$; consequently the restrictions of $C_c^\infty(\mathbb R^n)$ functions are dense in $W^{1,p}(H)$. ([[thm-wkp-extension-from-a-half-space]], [[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]])

[F5] Fatou's lemma: for nonnegative measurable functions $f_n$, $\int\liminf_nf_n\le\liminf_n\int f_n$. ([[thm-fatou-lemma]])

[F6] Holder's inequality: for conjugate exponents $p,p'$ and measurable $\varphi,\psi$ with $\varphi\in\mathcal L^p$, $\psi\in\mathcal L^{p'}$, $\int|\varphi\psi|\le\|\varphi\|_p\|\psi\|_{p'}$. ([[thm-holder-inequality-for-integrals]])

[F7] Assume Countable Choice. For nonnegative measurable functions on a product of sigma-finite spaces the double integral equals the iterated integrals. ([[thm-tonelli-and-fubini-for-completed-product-measures]])

## Proof

**Proof technique:** direct.

1.1 The estimate for smooth compactly supported $u$. Let $u\in C_c^\infty(\mathbb R^n)$ and let $g=u(\cdot,0)$ be its classical boundary value. Fix $i\in\{1,\dots,d\}$, $h>0$, put $t:=h/2$, and fix $x'\in\mathbb R^d$. Splitting the increment at the midpoint and applying the fundamental theorem of calculus along the vertical and tangential segments gives $|g(x'+he_i)-g(x')|\le\int_0^{t}|\partial_nu(x',s)|ds+\int_0^{t}|\partial_nu(x'+he_i,s)|ds+h\int_0^1|\partial_iu(x'+she_i,t)|ds$; raising to the $p$-th power, integrating in $x'$ and using translation invariance of Lebesgue measure makes the two normal-line integrals equiponderant, so $\int_{\mathbb R^d}|g(x'+he_i)-g(x')|^pdx'\le3^{p-1}\bigl(2\int A_i(x',h)^pdx'+\int\bigl(h\int_0^1|\partial_iu(x'+she_i,t)|ds\bigr)^pdx'\bigr)$ with $A_i(x',h):=\int_0^{h/2}|\partial_nu(x',s)|ds$. Multiplying by $h^{-p}$ and integrating in $h$, Hardy's inequality [F2] applied in the normal variable (with Tonelli [F7]) bounds the first term by $2^{2-p}(p')^p\|\partial_nu\|_{L^p(H)}^p$, while Holder [F6] applied to the inner $s$-integral followed by Tonelli, the substitution $t=h/2$ and translation invariance bounds the second term by $2\|\partial_iu\|_{L^p(H)}^p$. Summing over $i=1,\dots,d$ and using the coordinate-direction form [F1] of the seminorm gives $[g]_{\theta,p}^p\le C(d,p)\sum_{j=1}^{d+1}\|D_ju\|_{L^p(H)}^p=C(d,p)\int_H|Du|^p$. [F1, F2, F6, F7, algebra, given]

1.2 Scale invariance of the homogeneous estimate. For $r>0$ and measurable $u$ on $H$ put $u_r(x',t):=u(rx',rt)$, so $g_{u_r}(x')=g(rx')$ and $D_ju_r=r(D_ju)(r\,\cdot)$ for $j=1,\dots,d+1$. The change of variables $\xi=rx'$, $\eta=ry'$ gives $[g_{u_r}]_{\theta,p}^p=\int\int|g(\xi)-g(\eta)|^p\bigl|\tfrac{\xi-\eta}{r}\bigr|^{-d-p\theta}r^{-2d}d\xi d\eta=r^{-d+p\theta}[g]_{\theta,p}^p$, and the change of variables $(x',t)\mapsto(rx',rt)$ gives $\int_H|Du_r|^pdx=r^p\cdot r^{-d-1}\int_H|Du|^pdx=r^{-d+p\theta}\int_H|Du|^pdx$ because $r^p r^{-d-1}=r^{-d+p-1}$ and $p-1=p\theta$. Hence both sides of the homogeneous estimate carry the same scaling exponent. [F1, algebra, given]

2.1 The general case by density and Fatou. Let $u\in W^{1,p}(H)$ and let $\varphi_m\in C_c^\infty(\mathbb R^n)$ be such that $u_m:=\varphi_m|_H\to u$ in $W^{1,p}(H)$; such a sequence exists by [F4]. Step 1.1 applies to each $u_m$, giving $[T_+u_m]_{\theta,p}^p\le C(d,p)\int_H|Du_m|^p$. By [F3] $T_+u_m\to T_+u$ in $L^p(\mathbb R^d)$, so a subsequence converges almost everywhere; Fatou's lemma [F5] applied to the nonnegative integrands of the seminorm gives $[T_+u]_{\theta,p}^p\le\liminf_m[T_+u_m]_{\theta,p}^p$, while $\int_H|Du_m|^p\to\int_H|Du|^p$ by the norm convergence. Hence $[T_+u]_{\theta,p}^p\le C(d,p)\int_H|Du|^p\le C(d,p)\|u\|_{W^{1,p}(H)}^p$ for every $u\in W^{1,p}(H)$, and $T_+$ is bounded into $W^{\theta,p}(\mathbb R^d)$. [F3, F4, F5, step 1.1, algebra]

3.1 Conclusion. Step 1.1 proves the homogeneous bound for the dense smooth class; step 2.1 extends it to all of $W^{1,p}(H)$ by continuity of the trace and Fatou, giving the displayed chain and the boundedness of $T_+:W^{1,p}(H)\to W^{\theta,p}(\mathbb R^d)$; step 1.2 verifies the scaling of both sides of the homogeneous estimate. [step 1.1, step 1.2, step 2.1, given] ∎

## Source notes

Mironescu's Theorem 25(a) with estimates (11.21)-(11.29) (printed pp. 77-78) carries out the midpoint splitting, the polar-coordinate reduction and the application of Hardy's inequality that appear here; Kampanou's Theorem 3.2 and estimates (3.1)-(3.3) (printed pp. 19-22) integrate the difference quotients against $h^{-p}dh$ and pass to the limit by Fatou; Gagliardo's printed pp. 290-297 splits boundary increments in the normal and tangential directions. The bound is stated in the homogeneous form $C(d,p)\int_H|Du|^p$, which is the form whose two sides scale with the same exponent; the full $W^{1,p}$ norm bound follows a fortiori.
