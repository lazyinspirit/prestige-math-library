---
id: thm-riesz-measure-is-positive-radon
kind: theorem
title: "The distributional Riesz functional of a subharmonic function is a positive Radon measure"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-riesz-measure-subharmonic-function
  - def-dependent-choice
  - def-countable-choice
  - lem-dependent-choice-implies-countable-choice
  - def-plane-subharmonic-function
  - def-complex-domain
  - thm-plane-subharmonic-functions-are-locally-integrable
  - def-locally-integrable-function-as-a-regular-distribution
  - def-distributional-derivative
  - def-distributional-harmonicity-and-poisson-equation-in-rn
  - lem-schwartz-cutoffs-from-the-standard-smooth-step
  - def-mollifier-family-generated-by-a-unit-mass-smooth-bump
  - prop-mollifier-families-are-l-one-approximate-identities
  - cor-l-one-approximate-identities-converge-uniformly-on-compacta-for-continuous-functions
  - thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign
  - thm-mollifier-approximation-in-distributions
  - thm-distributional-differentiation-is-continuous-and-commutes
  - thm-c-two-characterization-of-plane-subharmonicity
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - lem-test-function-cutoffs-and-euclidean-localization
  - lem-relative-compact-closed-sets-have-a-positive-distance-gap
  - lem-limit-preserves-order
  - thm-infimum-property
  - def-positive-linear-functional-on-c-c
  - lem-positive-linear-functionals-on-c-c-are-monotone
  - lem-rmk-functional-outer-content-is-well-defined
  - lem-rmk-compact-set-formula-and-local-finiteness
  - thm-rmk-representing-measure-is-inner-regular-on-open-sets
  - thm-rmk-positive-functional-is-integration-against-its-representing-measure
  - def-radon-measure-on-an-lch-space
  - thm-rmk-uniqueness-among-radon-measures
  - thm-dominated-convergence
  - cor-rn-is-locally-compact-and-sigma-compact
  - thm-metric-hausdorff-separation
  - thm-locally-compact-hausdorff-basics
  - lem-t0-t1-and-hausdorff-are-hereditary
  - lem-upper-semicontinuous-functions-are-borel-and-circle-integrals-are-defined
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "B. Khoruzhenko, LTCC Potential Theory notes"
      url: "https://maths.qmul.ac.uk/~boris/potential_th_notes.pdf"
      locator: "§3.3, Theorem 41 and proof: the distributional Laplacian is a positive Radon measure"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume Dependent Choice. Let $\Omega\subseteq\mathbb C$ be a complex domain and
let $u:\Omega\to[-\infty,\infty)$ be subharmonic on $\Omega$, with the
distributional Riesz functional
$\mu_u(\varphi)=\frac{1}{2\pi}\int_\Omega u\,\Delta\varphi\,dA$ of
[[def-riesz-measure-subharmonic-function]]. Then:

1. $\mu_u(\varphi)\ge0$ for every real-valued $\varphi\in C_c^\infty(\Omega)$
   with $\varphi\ge0$;
2. there is exactly one positive Radon measure $\nu$ on $\Omega$ with
   $$\mu_u(\varphi)=\int_\Omega\varphi\,d\nu\qquad(\varphi\in C_c^\infty(\Omega)).$$

Dependent Choice is used for the Riesz–Markov–Kakutani representation of the
extended functional and for its uniqueness; the mollification,
distributional-compatibility, density and dominated-convergence steps use only
Countable Choice, which Dependent Choice implies, and the remaining steps are
choice-free.

## Facts & Assumptions

**Given:** Dependent Choice, a complex domain $\Omega\subseteq\mathbb C$, a
subharmonic $u:\Omega\to[-\infty,\infty)$, and the conventions of
[[def-riesz-measure-subharmonic-function]]; write $\mathrm{AC}_\omega$ for
Countable Choice.

[F1] $\mu_u(\varphi)=\frac{1}{2\pi}\int_\Omega u\,\Delta\varphi\,dA$ for every
$\varphi\in C_c^\infty(\Omega)$, the value is real for real $\varphi$, the
assignment is linear on test functions, it depends only on the
almost-everywhere class of $u$, and the normalization $(2\pi)^{-1}$ gives
$\mu_{\log|{\cdot}-a|}=\delta_a$
([[def-riesz-measure-subharmonic-function]]).

[F2] $u\in L^1_{\mathrm{loc}}(\Omega)$
([[thm-plane-subharmonic-functions-are-locally-integrable]]).

[F3] $u$ is upper semicontinuous, hence Borel measurable; $u$ is not
identically $-\infty$ on any connected component of $\Omega$; and $u$ satisfies
the submean inequality
$u(a)\le\frac1{2\pi}\int_0^{2\pi}u(a+re^{it})\,dt$ at every closed disc
$\overline D(a,r)\subseteq\Omega$; the integral is the extended circle integral
of a Borel function that is bounded above on the circle
([[def-plane-subharmonic-function]], [[def-complex-domain]],
[[lem-upper-semicontinuous-functions-are-borel-and-circle-integrals-are-defined]]).

[F4] For $g\in L^1_{\mathrm{loc}}(\Omega)$ the regular distribution
$T_g(\psi)=\int_\Omega g\psi\,dA$ is a distribution on $\Omega$, and with the
sign conventions of the distributional Laplacian in the plane one has
$\langle\Delta T_g,\psi\rangle=\langle T_g,\Delta\psi\rangle$, where
$\Delta=\partial_x\partial_x+\partial_y\partial_y$
([[def-locally-integrable-function-as-a-regular-distribution]],
[[def-distributional-derivative]],
[[def-distributional-harmonicity-and-poisson-equation-in-rn]]).

[F5] In ZF, $\mathrm{DC}$ implies $\mathrm{AC}_\omega$: every at most countable
family of nonempty sets has a choice function
([[lem-dependent-choice-implies-countable-choice]], [[def-countable-choice]],
[[def-dependent-choice]]).

[F6] The standard smooth step $b$ satisfies $0\le b\le1$, equals $1$ on the
closed unit ball of $\mathbb R^2$ and vanishes outside the radius-two ball
([[lem-schwartz-cutoffs-from-the-standard-smooth-step]]). Normalizing
$\rho:=b/\int b$ and rescaling gives kernels
$\rho_\varepsilon(x)=\varepsilon^{-2}\rho(x/\varepsilon)$ with
$\rho_\varepsilon\in C_c^\infty(\mathbb R^2)$, $\rho_\varepsilon\ge0$,
$\int\rho_\varepsilon=1$ and $\operatorname{supp}\rho_\varepsilon\subseteq\overline B(0,2\varepsilon)$,
and under $\mathrm{AC}_\omega$ the family $(\rho_\varepsilon)$ is an $L^1$
approximate identity ([[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]],
[[prop-mollifier-families-are-l-one-approximate-identities]]).

[F7] Assume $\mathrm{AC}_\omega$. If $f\in L^1_{\mathrm{loc}}(\mathbb R^2)$ and
$\varphi$ is a unit-mass smooth bump, the convolution
$(f*\varphi_\varepsilon)(x)=\int f(y)\varphi_\varepsilon(x-y)\,dy$ is smooth
and every derivative passes under the integral sign
([[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]]).

[F8] Assume $\mathrm{AC}_\omega$. Let $T\in\mathcal D'(\Omega)$ and let
$f_\varepsilon(x)=T(\rho_\varepsilon(x-\cdot))$ be the local convolution on
$V_\varepsilon=\{x:x-\operatorname{supp}\rho_\varepsilon\subseteq\Omega\}$. Then
the regular distributions of $f_\varepsilon$ converge weakly to $T$: for every
$\psi\in C_c^\infty(\Omega)$ one has $\int f_\varepsilon\psi\to T(\psi)$ as
$\varepsilon\to0^+$ ([[thm-mollifier-approximation-in-distributions]]).

[F9] Distributional differentiation is continuous linear on $\mathcal D'(\Omega)$
for the weak topology, in ZF; and, under $\mathrm{AC}_\omega$, for $g\in C^k$ on
an open set and $|\alpha|\le k$ one has $\partial^\alpha T_g=T_{\partial^\alpha g}$
([[thm-distributional-differentiation-is-continuous-and-commutes]]).

[F10] A real $C^2$ function on an open subset of $\mathbb C$ is subharmonic
there if and only if its Laplacian is pointwise nonnegative
([[thm-c-two-characterization-of-plane-subharmonicity]]).

[F11] Tonelli's theorem applies to nonnegative product-measurable integrands and
Fubini's theorem to integrable integrands on $\sigma$-finite products
([[thm-tonelli-theorem-for-sigma-finite-product-spaces]],
[[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F12] In ZF, for compact $K\subseteq\Omega$ with $\Omega$ open there is
$\chi\in C_c^\infty(\Omega)$ with $0\le\chi\le1$ and $\chi=1$ on a neighbourhood
of $K$ ([[lem-test-function-cutoffs-and-euclidean-localization]]).

[F13] Assume $\mathrm{AC}_\omega$. If $f$ is bounded and continuous on
$\mathbb R^2$, then $f*\rho_\varepsilon\to f$ uniformly on every compact subset
([[cor-l-one-approximate-identities-converge-uniformly-on-compacta-for-continuous-functions]]).

[F14] A convergent sequence of reals whose terms are eventually nonnegative has
a nonnegative limit ([[lem-limit-preserves-order]]).

[F15] A compact subset $L\subseteq\Omega$ has a positive margin: there is
$\eta>0$ with $L+\overline B(0,\eta)\subseteq\Omega$. If
$\Omega\ne\mathbb R^2$, the complement is nonempty closed and disjoint from
$L$, and the positive gap lemma
([[lem-relative-compact-closed-sets-have-a-positive-distance-gap]]) gives
$\delta>0$ with $|z-c|\ge\delta$ for all $z\in L$ and $c\notin\Omega$, so that
$B(z,\delta)\subseteq\Omega$ and $\eta:=\delta/2$ works; if
$\Omega=\mathbb R^2$ any $\eta$ works.

[F16] A real-linear $\Lambda:C_c(X;\mathbb R)\to\mathbb R$ is positive when
$f\ge0$ pointwise implies $\Lambda(f)\ge0$; for $f\le g$ one has
$\Lambda(f)\le\Lambda(g)$ ([[def-positive-linear-functional-on-c-c]],
[[lem-positive-linear-functionals-on-c-c-are-monotone]]).

[F17] Nonempty subsets of $\mathbb R$ that are bounded above have a supremum
and nonempty subsets bounded below have an infimum, with
$\inf S=-\sup(-S)$ ([[thm-infimum-property]]).

[F18] Assume $\mathrm{DC}$. For a positive linear functional
$\Lambda:C_c(X;\mathbb R)\to\mathbb R$ on an LCH space $X$, the RMK
construction produces a Radon measure $\nu$ on the Borel sets of $X$ that is
inner regular on open sets and finite on compact sets
([[lem-rmk-functional-outer-content-is-well-defined]],
[[lem-rmk-compact-set-formula-and-local-finiteness]],
[[thm-rmk-representing-measure-is-inner-regular-on-open-sets]],
[[def-radon-measure-on-an-lch-space]]), and this measure represents $\Lambda$:
$\Lambda(f)=\int_Xf\,d\nu$ for every $f\in C_c(X;\mathbb R)$
([[thm-rmk-positive-functional-is-integration-against-its-representing-measure]]).

[F19] Assume $\mathrm{DC}$. Two Radon measures on an LCH space whose integrals
agree on every continuous compactly supported function are equal
([[thm-rmk-uniqueness-among-radon-measures]]).

[F20] Dominated convergence for a general measure: if $f_n\to f$ pointwise
almost everywhere and $|f_n|\le g$ almost everywhere for a single nonnegative
measurable $g$ with $\int g\,d\nu<+\infty$, then
$\int f_n\,d\nu\to\int f\,d\nu$ ([[thm-dominated-convergence]]).

[F21] $\mathbb R^2$ is locally compact
([[cor-rn-is-locally-compact-and-sigma-compact]]) and Hausdorff
([[thm-metric-hausdorff-separation]]); an open subspace of a locally compact
Hausdorff space is locally compact
([[thm-locally-compact-hausdorff-basics]]), and Hausdorffness is hereditary
([[lem-t0-t1-and-hausdorff-are-hereditary]]); hence $\Omega$ with the subspace
topology is an LCH space.

## Proof

**Proof technique:** direct.

1.1 Since $u\in L^1_{\mathrm{loc}}(\Omega)$ by [F2], it has a regular distribution $T_u$ on $\Omega$, and [F1] together with [F4] gives $\mu_u(\varphi)=\frac1{2\pi}\int_\Omega u\,\Delta\varphi\,dA=\frac1{2\pi}\langle\Delta T_u,\varphi\rangle$ for every $\varphi\in C_c^\infty(\Omega)$. [F1, F2, F4, given]

1.2 By [F5], $\mathrm{DC}$ yields $\mathrm{AC}_\omega$, which discharges the choice hypotheses of [F7], [F8], [F9] (second clause) and [F13] used below. [F5, given]

1.3 The open set $\Omega$, with the subspace topology of $\mathbb R^2\cong\mathbb C$, is an LCH space by [F21]: $\mathbb R^2$ is locally compact and Hausdorff, open subspaces of locally compact Hausdorff spaces are locally compact, and Hausdorffness is hereditary. [F21, given]

2.1 Choose $\rho:=b/\int b$ from the standard step $b$ of [F6] and put $\rho_\varepsilon(x)=\varepsilon^{-2}\rho(x/\varepsilon)$: then $\rho_\varepsilon\in C_c^\infty(\mathbb R^2)$ is nonnegative, has $\int\rho_\varepsilon=1$ and support in $\overline B(0,2\varepsilon)$, and under $\mathrm{AC}_\omega$ of step 1.2 the family $(\rho_\varepsilon)$ is an $L^1$ approximate identity. [F6, step 1.2, choose]

2.2 For $z$ in the open set $\Omega_\varepsilon:=\{z\in\Omega:\overline B(z,3\varepsilon)\subseteq\Omega\}$ define $u_\varepsilon(z):=\int_{\mathbb R^2}u(z-y)\rho_\varepsilon(y)\,dy$; this set equals $\Omega$ when $\Omega=\mathbb C$. It is open: for any of its points, [F15] gives a positive margin for the compact ball $\overline B(z,3\varepsilon)$ inside $\Omega$, and every sufficiently small translate of that ball stays inside $\Omega$. In general the integrand lives on the compact set $z-\overline B(0,2\varepsilon)\subseteq B(z,3\varepsilon)\subseteq\Omega$. For each such $z$, choose a relatively compact open $W\subseteq\Omega$ containing $z-\overline B(0,2\varepsilon)$ and all its sufficiently small translates. Replacing $u$ by its product with $\mathbf 1_W$, extended by zero outside $\Omega$ (locally integrable on $\mathbb R^2$ by [F2]), [F7] and step 1.2 show that $u_\varepsilon\in C^\infty(\Omega_\varepsilon)$ with every derivative given by the convolution of $u$ against the corresponding derivative of $\rho_\varepsilon$; the values are finite real numbers, since $u\in L^1$ near $z-\overline B(0,2\varepsilon)$. [F2, F7, step 1.2]

3.1 The mollified function satisfies the submean inequality on $\Omega_\varepsilon$: if $a\in\Omega_\varepsilon$ and $\overline D(a,r)\subseteq\Omega_\varepsilon$, then $\overline D(a,r+2\varepsilon)\subseteq\Omega$ — for $|w-a|\le r$ one has $w\in\Omega_\varepsilon$, and for $r<|w-a|\le r+2\varepsilon$ the point $v:=a+r(w-a)/|w-a|$ lies in $\overline D(a,r)\subseteq\Omega_\varepsilon$, so $B(v,3\varepsilon)\subseteq\Omega$ while $|w-v|=|w-a|-r\le2\varepsilon<3\varepsilon$ gives $w\in B(v,3\varepsilon)\subseteq\Omega$ — hence $\overline D(a-y,r)\subseteq\overline D(a,r+2\varepsilon)\subseteq\Omega$ for every $|y|\le2\varepsilon$; applying the submean inequality of [F3] at the centre $a-y$, multiplying by $\rho_\varepsilon(y)\ge0$ and integrating over $|y|\le2\varepsilon$ with Tonelli and Fubini [F11] applied to the positive and negative parts (the absolute double integral is at most $2\pi\|\rho_\varepsilon\|_\infty\int_{\overline D(a,r+2\varepsilon)}|u|\,dA<\infty$ by [F2]) gives $u_\varepsilon(a)\le\frac1{2\pi}\int_0^{2\pi}u_\varepsilon(a+re^{it})\,dt$. [F2, F3, F11, step 2.2, algebra]

3.2 As $\varepsilon\to0^+$ the regular distributions of $u_\varepsilon$ converge weakly to $T_u$ on $\Omega$: the local convolution of [F8] with $T:=T_u$ is exactly $x\mapsto T_u(\rho_\varepsilon(x-\cdot))=\int_\Omega u(y)\rho_\varepsilon(x-y)\,dy=u_\varepsilon(x)$ on $V_\varepsilon=\{x:x-\operatorname{supp}\rho_\varepsilon\subseteq\Omega\}$, and $V_\varepsilon\supseteq\Omega_\varepsilon$ because $x-\overline B(0,2\varepsilon)\subseteq B(x,3\varepsilon)\subseteq\Omega$ for $x\in\Omega_\varepsilon$; hence $\langle T_{u_\varepsilon},\psi\rangle\to\langle T_u,\psi\rangle$ for every $\psi\in C_c^\infty(\Omega)$. [F8, step 1.2, step 2.1, step 2.2]

3.3 Classical compatibility: for every $\varepsilon>0$ and every $\varphi\in C_c^\infty(\Omega_\varepsilon)$ one has $\langle\Delta T_{u_\varepsilon},\varphi\rangle=\int_\Omega\varphi\,\Delta u_\varepsilon\,dA$. Indeed $u_\varepsilon\in C^\infty(\Omega_\varepsilon)$ by step 2.2, so the $\mathrm{AC}_\omega$ clause of [F9] applied on the open set $\Omega_\varepsilon$ to $\partial_x\partial_xu_\varepsilon$ and $\partial_y\partial_yu_\varepsilon$ and added gives $\Delta T_{u_\varepsilon}=T_{\Delta u_\varepsilon}$ there, and only values on $\Omega_\varepsilon$ are tested. [F9, step 1.2, step 2.2]

4.1 By step 2.2 the function $u_\varepsilon$ is continuous and real-valued on $\Omega_\varepsilon$, and by step 3.1 it satisfies the submean inequality at every closed disc in $\Omega_\varepsilon$; hence $u_\varepsilon$ is subharmonic on each connected component of $\Omega_\varepsilon$ in the sense of [F3]. [F3, step 2.2, step 3.1]

4.2 For any fixed $\varphi\in C_c^\infty(\Omega)$, the compact support of $\varphi$ and of $\Delta\varphi$ lies inside $\Omega_\varepsilon$ for all sufficiently small $\varepsilon$ by [F15]. On those open domains, the definition of distributional derivatives gives $\langle\Delta T_{u_\varepsilon},\varphi\rangle=\int u_\varepsilon\Delta\varphi\,dA$. Step 3.2 applied to the fixed test $\Delta\varphi$ shows that this tends to $\langle T_u,\Delta\varphi\rangle=\langle\Delta T_u,\varphi\rangle$. These pairings are local for each $\varepsilon$; no distribution on all of $\Omega$ is asserted for a locally defined $u_\varepsilon$. [F4, F15, step 3.2]

5.1 By [F10] applied on the components of the open set $\Omega_\varepsilon$, step 4.1 gives $\Delta u_\varepsilon\ge0$ pointwise on $\Omega_\varepsilon$. [F10, step 4.1]

6.1 Positivity on nonnegative tests: let $\varphi\in C_c^\infty(\Omega)$ be real with $\varphi\ge0$. Since $\operatorname{supp}\varphi\subseteq\Omega$ is compact in the open set $\Omega$, the positive-margin fact [F15] gives $\eta>0$ with $\operatorname{supp}\varphi+\overline B(0,\eta)\subseteq\Omega$; then any $\varepsilon_0>0$ with $3\varepsilon_0<\eta$ satisfies $\operatorname{supp}\varphi\subseteq\Omega_{\varepsilon_0}$, because $\overline B(x,3\varepsilon_0)\subseteq B(x,\eta)\subseteq\operatorname{supp}\varphi+\overline B(0,\eta)\subseteq\Omega$ for $x\in\operatorname{supp}\varphi$. Fix such an $\varepsilon_0$, so that $\operatorname{supp}\varphi\subseteq\Omega_\varepsilon$ and $\varphi\ge0$ for every $0<\varepsilon\le\varepsilon_0$. Steps 1.1, 4.2 and 3.3 give $\mu_u(\varphi)=\lim_{n\to\infty}\frac1{2\pi}\langle\Delta T_{u_{\varepsilon_0/(n+1)}},\varphi\rangle=\lim_{n\to\infty}\frac1{2\pi}\int_\Omega\varphi\,\Delta u_{\varepsilon_0/(n+1)}\,dA$, and each integrand is nonnegative by step 5.1; [F14] therefore gives $\mu_u(\varphi)\ge0$. [F14, F15, step 1.1, step 5.1, step 4.2, step 3.3]

7.1 Monotonicity on smooth tests: if $\varphi\le\psi$ are real-valued compactly supported smooth functions on $\Omega$, then $\psi-\varphi\ge0$ is a test function with $\mu_u(\psi)-\mu_u(\varphi)=\mu_u(\psi-\varphi)\ge0$ by step 6.1 and the linearity of [F1]; hence $\mu_u(\varphi)\le\mu_u(\psi)$. [F1, step 6.1, algebra]

8.1 For $f\in C_c(\Omega;\mathbb R)$ set $S_f:=\{\mu_u(\varphi):\varphi\in C_c^\infty(\Omega;\mathbb R),\ \varphi\le f\}$ and $T_f:=\{\mu_u(\psi):\psi\in C_c^\infty(\Omega;\mathbb R),\ \psi\ge f\}$. If $f\ne0$, put $M:=\|f\|_\infty$ and use [F12] to choose $\chi\in C_c^\infty(\Omega)$ with $0\le\chi\le1$ and $\chi=1$ on a neighbourhood of $\operatorname{supp}f$; then $-M\chi\le f\le M\chi$ pointwise, so $S_f$ and $T_f$ are nonempty; if $f=0$, then $0\in S_f\cap T_f$. By step 7.1 every element of $S_f$ is at most every element of $T_f$, so $S_f$ is bounded above and $T_f$ bounded below; [F17] makes $\sup S_f$ and $\inf T_f$ well-defined real numbers with $\sup S_f\le\inf T_f$. [F12, F17, step 7.1, construct]

9.1 Density of smooth tests for a fixed $f\ne0$: let $K:=\operatorname{supp}f$, $M:=\|f\|_\infty$, choose $\chi$ as in step 8.1, and use [F15] to fix $\eta>0$ with $L:=\operatorname{supp}\chi+\overline B(0,\eta)\subseteq\Omega$; use [F12] again to choose $\chi_1\in C_c^\infty(\Omega)$ with $0\le\chi_1\le1$ and $\chi_1=1$ on the compact set $L$. For all large $n$ put $f_n:=(f\chi)*\rho_{1/n}$: each $f_n$ is smooth by [F7], supported in $\operatorname{supp}\chi+\overline B(0,2/n)\subseteq L\subseteq\Omega$, and $f_n\to f\chi=f$ uniformly on the compact $L$ by [F13], and hence on $\mathbb R^2$ since both functions vanish outside $L$, because $f\chi$ is continuous with compact support and $f\chi=f$ on $\operatorname{supp}f$. [F7, F12, F13, F15, step 2.1, step 8.1, choose]

10.1 Sandwich for the sets of step 8.1: keep $f\ne0$ and $\chi,\chi_1,L$ of steps 8.1 and 9.1, and let $\delta_n:=\|f_n-f\|_\infty\to0$. Since $|f_n-f|\le\delta_n$ everywhere and $|f_n-f|=0$ outside $L$, one has $f_n-\delta_n\chi_1\le f\le f_n+\delta_n\chi_1$ pointwise, and both bounds are smooth test functions of the kinds defining $S_f$ and $T_f$; applying $\mu_u$ and using step 7.1 gives $\mu_u(f_n)-\delta_n\mu_u(\chi_1)\le\sup S_f\le\inf T_f\le\mu_u(f_n)+\delta_n\mu_u(\chi_1)$. Hence $(\mu_u(f_n))$ is Cauchy, and with $\Lambda(f):=\sup S_f=\inf T_f$ one has $|\Lambda(f)-\mu_u(f_n)|\le\delta_n\mu_u(\chi_1)\to0$ for every admissible sequence $(f_n)$ of smooth functions converging uniformly to $f$ with supports in a fixed compact subset of $\Omega$. For $f=0$ set $\Lambda(0):=0$, consistently with step 8.1. [F2, step 7.1, step 8.1, step 9.1, algebra]

11.1 Positivity of $\Lambda$: if $f\ge0$ in $C_c(\Omega;\mathbb R)$, then the zero test function satisfies $0\le f$, so $0=\mu_u(0)\in S_f$ and $\Lambda(f)=\sup S_f\ge0$. If $f=0$ this is step 10.1. [step 10.1, step 8.1, given]

11.2 Homogeneity of $\Lambda$: for $c>0$ one has $S_{cf}=cS_f$, so $\Lambda(cf)=c\Lambda(f)$; for $c<0$ one has $S_{cf}=cT_f$, so by [F17] $\Lambda(cf)=\sup(cT_f)=c\inf T_f=c\Lambda(f)$; and $\Lambda(0)=0$. Thus $\Lambda$ is positively homogeneous and $\Lambda(-f)=-\Lambda(f)$. [F17, step 10.1, algebra]

11.3 Extension: if $\varphi\in C_c^\infty(\Omega;\mathbb R)$ then $\varphi\in S_\varphi$ and $\varphi\in T_\varphi$, so step 7.1 gives $\mu_u(\varphi)\le\Lambda(\varphi)\le\mu_u(\varphi)$; hence $\Lambda(\varphi)=\mu_u(\varphi)$ for every smooth test function. [step 7.1, step 10.1]

12.1 Additivity of $\Lambda$: given $f,g\in C_c(\Omega;\mathbb R)$ and $\eta>0$, choose by the definition of the supremum $\varphi\in S_f$, $\psi\in S_g$ with $\mu_u(\varphi)>\Lambda(f)-\eta/2$ and $\mu_u(\psi)>\Lambda(g)-\eta/2$; then $\varphi+\psi\le f+g$, so $\Lambda(f+g)\ge\mu_u(\varphi)+\mu_u(\psi)>\Lambda(f)+\Lambda(g)-\eta$, and $\eta\downarrow0$ gives $\Lambda(f+g)\ge\Lambda(f)+\Lambda(g)$. Dually, choose $\psi_f\in T_f$, $\psi_g\in T_g$ with $\mu_u(\psi_f)<\Lambda(f)+\eta/2$ and $\mu_u(\psi_g)<\Lambda(g)+\eta/2$; then $\psi_f+\psi_g\ge f+g$, so $\Lambda(f+g)\le\Lambda(f)+\Lambda(g)+\eta$ and hence $\Lambda(f+g)\le\Lambda(f)+\Lambda(g)$. Therefore $\Lambda$ is additive; it is real-linear together with the homogeneity of step 11.2. [F1, step 10.1, step 11.2, algebra]

13.1 By steps 11.1, 12.1 and 1.3 the map $\Lambda:C_c(\Omega;\mathbb R)\to\mathbb R$ is a positive real-linear functional on the LCH space $\Omega$ in the sense of [F16]; the RMK construction of [F18] therefore produces a Radon measure $\nu$ on $\Omega$ with $\Lambda(w)=\int_\Omega w\,d\nu$ for every $w\in C_c(\Omega;\mathbb R)$. [F16, F18, step 11.1, step 12.1, step 1.3]

14.1 Representing smooth tests: combining steps 11.3 and 13.1, for every $\varphi\in C_c^\infty(\Omega;\mathbb R)$ one has $\mu_u(\varphi)=\Lambda(\varphi)=\int_\Omega\varphi\,d\nu$; since $\mu_u$ is complex-linear, the same identity holds for complex test functions, so $\nu$ represents $\mu_u$. [step 11.3, step 13.1, given]

14.2 Uniqueness: let $\nu'$ be a Radon measure on $\Omega$ with $\mu_u(\varphi)=\int_\Omega\varphi\,d\nu'$ for every $\varphi\in C_c^\infty(\Omega;\mathbb R)$. For $f\in C_c(\Omega;\mathbb R)$ and an admissible sequence $(f_n)$ as in step 10.1 with common support in a compact $L'\subseteq\Omega$, one has $\int_\Omega f_n\,d\nu'=\mu_u(f_n)\to\Lambda(f)$ by step 10.1, while $\int_\Omega f_n\,d\nu'\to\int_\Omega f\,d\nu'$ by [F20], since $f_n\to f$ pointwise and $|f_n|\le\|f\|_\infty+1$ on the compact set $L'$ of finite $\nu'$-measure. Hence $\int_\Omega f\,d\nu'=\Lambda(f)=\int_\Omega f\,d\nu$ for every $f\in C_c(\Omega;\mathbb R)$, and [F19] gives $\nu'=\nu$. [F20, F19, step 10.1, step 13.1]

15.1 Conclusion: clause 1 is step 6.1, and clause 2 is the existence of $\nu$ in steps 13.1 and 14.1 together with the uniqueness in step 14.2. [step 6.1, step 14.1, step 14.2] ∎

## Remarks

**Dependent Choice is used at exactly two places.** The RMK construction of
[F18] selects cutoffs between compact and open sets and constructs the outer
content along a dependent recursion, and the uniqueness theorem [F19] uses the
same cutoff principle; both are stated under $\mathrm{DC}$. Everything else in
the proof is carried out under $\mathrm{AC}_\omega$ (mollification, uniform
density, classical-distributional compatibility) or in ZF (the sandwich and
extension construction, which defines $\Lambda$ by suprema and infima of
fixed sets and therefore selects nothing).

**Why the extension is needed at all.** The positivity of $\mu_u$ on smooth
nonnegative tests is proved directly by mollification, but the
Riesz–Markov–Kakutani theorem consumes a functional on the whole of
$C_c(\Omega;\mathbb R)$. The functional $\Lambda$ is the unique continuous
extension of $\mu_u$ from the dense subspace of smooth tests to $C_c$; the
argument above avoids selecting approximating sequences by defining $\Lambda$
as the common value of $\sup S_f$ and $\inf T_f$.

**Compatibility with the point-mass normalization.** With $u=\log|{\cdot}-a|$
on $\Omega=\mathbb C$ the theorem returns $\nu=\delta_a$, in agreement with the
normalization recorded in [[def-riesz-measure-subharmonic-function]].
