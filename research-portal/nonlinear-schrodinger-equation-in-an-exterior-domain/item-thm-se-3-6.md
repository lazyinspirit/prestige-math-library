---
title: "Theorem 3.6: bounded continuous control operator"
status: draft
research_item: thm-se-3-6
dependency_level: 18
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
---

PDF p. 12: ` Theorem 3.6 `; PDF p. 13: ` formula for G `

## Prerequisites

- [def-se-geometry](item-def-se-geometry)
- [def-se-control-cutoffs](item-def-se-control-cutoffs)
- [def-se-dirichlet-scale](item-def-se-dirichlet-scale)
- [def-se-internal-systems](item-def-se-internal-systems)
- [def-se-hum-map](item-def-se-hum-map)
- [prop-se-scale-flow](item-prop-se-scale-flow)
- [prop-se-cutoff-multipliers](item-prop-se-cutoff-multipliers)
- [prop-se-forced-linear-wellposedness](item-prop-se-forced-linear-wellposedness)
- [prop-se-hum-duality](item-prop-se-hum-duality)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)
- [math:thm-heine-cantor-metric](https://alphabetamath.cc/item/thm-heine-cantor-metric)
- [math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion)
- [math:lem-ac-supplies-countable-and-dependent-choice-for-banach-integration](https://alphabetamath.cc/item/lem-ac-supplies-countable-and-dependent-choice-for-banach-integration)
- [lem-se-exterior-dirichlet-realization](item-lem-se-exterior-dirichlet-realization)
- [math:lem-classical-derivatives-are-weak-derivatives](https://alphabetamath.cc/item/lem-classical-derivatives-are-weak-derivatives)
- [math:thm-unbounded-borel-functional-calculus](https://alphabetamath.cc/item/thm-unbounded-borel-functional-calculus)
- [math:def-test-function-space-d-of-an-open-set](https://alphabetamath.cc/item/def-test-function-space-d-of-an-open-set)
- [math:def-distribution](https://alphabetamath.cc/item/def-distribution)
- [math:thm-local-finite-order-characterization-of-distributions](https://alphabetamath.cc/item/thm-local-finite-order-characterization-of-distributions)
- [math:def-multiplication-of-a-distribution-by-a-smooth-function](https://alphabetamath.cc/item/def-multiplication-of-a-distribution-by-a-smooth-function)
- [math:def-support-of-a-distribution](https://alphabetamath.cc/item/def-support-of-a-distribution)
- [math:thm-lebesgue-measure-of-a-box-of-every-kind](https://alphabetamath.cc/item/thm-lebesgue-measure-of-a-box-of-every-kind)


## Statement

Assume the Axiom of Choice and hypothesis (H): $n\ge2$, the nonempty compact obstacle $\Theta\subset\mathbb R^n$ has smooth boundary and connected exterior $\Omega=\mathbb R^n\setminus\Theta$, and its generalized reflected rays leave every compact set in finite time. Let $R>0$ and the real smooth cutoff $\varphi$ be as in [def-se-control-cutoffs](item-def-se-control-cutoffs), so $\varphi=0$ on $|x|\le R$. Let $T>0$ and $s\in[-2,2]$. Write $H_D^s=H_D^s(\Omega)$ for the Dirichlet spectral Hilbert scale and $W(t)=e^{it\Delta_D}$ for its free group.

There is a bounded complex-linear operator $G:H_D^s\times H_D^s\to C([0,T];H_D^s)$ such that, for every $z_0,z_T\in H_D^s$, the unique mild solution of $i\partial_t z+\Delta_Dz=\varphi h$, $z(0)=z_0$, with $h=G(z_0,z_T)$ satisfies $z(T)=z_T$. The homogeneous Dirichlet condition is encoded by the realization and scale. The forcing $\varphi h$ is supported in $\{x\in\Omega:|x|\ge R\}\times[0,T]$, in the distributional sense when necessary.

More precisely, with $\sigma=-s$, $\Lambda_s=(I-\Delta_D)^s:H_D^s\to H_D^\sigma$, and the free HUM map $S:H_D^\sigma\to H_D^s$ of [def-se-hum-map](item-def-se-hum-map), one can take

$$G(z_0,z_T)(t)=-i\Lambda_s^{-1}\bigl(\varphi W(t)S^{-1}(z_0-W(-T)z_T)\bigr).$$

## Facts & Assumptions

[F1] The stated geometry and non-trapping hypothesis are the conventions of [def-se-geometry](item-def-se-geometry). The control cutoff is smooth, real, and vanishes for $|x|\le R$ ([def-se-control-cutoffs](item-def-se-control-cutoffs)).

[F2] The scale is the Hilbert scale associated with $I-\Delta_D$; $W(t)$ is a strongly continuous unitary group on each scale level. For $s\in[-2,2]$, multiplication by $\varphi$ is bounded on $H_D^{-s}$, and $\Lambda_s^{-1}:H_D^{-s}\to H_D^s$ is a bounded isomorphism ([def-se-dirichlet-scale](item-def-se-dirichlet-scale), [prop-se-scale-flow](item-prop-se-scale-flow), [prop-se-cutoff-multipliers](item-prop-se-cutoff-multipliers), [def-se-hum-map](item-def-se-hum-map)).

[F3] Under the stated hypotheses and Choice, $S:H_D^{-s}\to H_D^s$ is a bounded complex-linear isomorphism. For $v_0\in H_D^{-s}$, its defining control $h_v(t)=-i\Lambda_s^{-1}(\varphi W(t)v_0)$ has a backward mild solution with terminal value zero and initial value $Sv_0$ ([prop-se-hum-duality](item-prop-se-hum-duality), [def-se-hum-map](item-def-se-hum-map), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)).

[F4] For $h\in L^1(0,T;H_D^s)$, the controlled system of [def-se-internal-systems](item-def-se-internal-systems) has a unique continuous mild solution, and the forward and backward solutions obey the Duhamel formulas of [prop-se-forced-linear-wellposedness](item-prop-se-forced-linear-wellposedness).


[F5] The continuous-path norm, strong measurability and Bochner $L^1$ conventions are those of [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces). A norm-continuous map on the compact interval $[0,T]$ is uniformly continuous by [math:thm-heine-cantor-metric](https://alphabetamath.cc/item/thm-heine-cantor-metric). A strongly measurable Banach-valued map with integrable norm is Bochner integrable by [math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion).

[F6] The realization has $A=I-\Delta_D\ge I$, $D(A)=H^2(\Omega)\cap H^1_0(\Omega)$, and $A\eta=\eta-\Delta\eta$ there by [lem-se-exterior-dirichlet-realization](item-lem-se-exterior-dirichlet-realization). Classical derivatives of smooth functions are weak derivatives under Countable Choice by [math:lem-classical-derivatives-are-weak-derivatives](https://alphabetamath.cc/item/lem-classical-derivatives-are-weak-derivatives). The spectral norm and domain formulas of [math:thm-unbounded-borel-functional-calculus](https://alphabetamath.cc/item/thm-unbounded-borel-functional-calculus), applied to this $A$, give $\|\eta\|_{H_D^r}\le\|A\eta\|_2$ for $0\le r\le2$ and $\eta\in D(A)$, because $\lambda^r\le\lambda^2$ on the spectral support $\lambda\ge1$. They also give $\|u\|_2\le\|u\|_{H_D^s}$ when $s\ge0$. A bounded box has finite Lebesgue measure, and $[0,T]$ has measure $T$, by [math:thm-lebesgue-measure-of-a-box-of-every-kind](https://alphabetamath.cc/item/thm-lebesgue-measure-of-a-box-of-every-kind).

[F7] Tests are complex smooth compactly supported functions by [math:def-test-function-space-d-of-an-open-set](https://alphabetamath.cc/item/def-test-function-space-d-of-an-open-set). Distributions are continuous complex-linear functionals on tests, with no conjugation in their pairing, by [math:def-distribution](https://alphabetamath.cc/item/def-distribution). A complex-linear functional is a distribution if it has a finite derivative-seminorm bound on each fixed compact support by [math:thm-local-finite-order-characterization-of-distributions](https://alphabetamath.cc/item/thm-local-finite-order-characterization-of-distributions). Smooth multiplication is $(aU)(\eta)=U(a\eta)$ by [math:def-multiplication-of-a-distribution-by-a-smooth-function](https://alphabetamath.cc/item/def-multiplication-of-a-distribution-by-a-smooth-function), and support is the complement of the largest open set of vanishing by [math:def-support-of-a-distribution](https://alphabetamath.cc/item/def-support-of-a-distribution).

[F8] The Axiom of Choice is assumed for the scale and HUM suppliers. It supplies Countable Choice and Dependent Choice by [math:lem-ac-supplies-countable-and-dependent-choice-for-banach-integration](https://alphabetamath.cc/item/lem-ac-supplies-countable-and-dependent-choice-for-banach-integration), in particular discharging the choice hypotheses of the time-space, weak-derivative and Lebesgue-measure suppliers.

## Proof

[F1] The stated geometry and non-trapping hypothesis are the conventions of [def-se-geometry](item-def-se-geometry). The control cutoff is smooth, real, and vanishes for $|x|\le R$ ([def-se-control-cutoffs](item-def-se-control-cutoffs)).

[F2] The scale is the Hilbert scale associated with $I-\Delta_D$; $W(t)$ is a strongly continuous unitary group on each scale level. For $s\in[-2,2]$, multiplication by $\varphi$ is bounded on $H_D^{-s}$, and $\Lambda_s^{-1}:H_D^{-s}\to H_D^s$ is a bounded isomorphism ([def-se-dirichlet-scale](item-def-se-dirichlet-scale), [prop-se-scale-flow](item-prop-se-scale-flow), [prop-se-cutoff-multipliers](item-prop-se-cutoff-multipliers), [def-se-hum-map](item-def-se-hum-map)).

[F3] Under the stated hypotheses and Choice, $S:H_D^{-s}\to H_D^s$ is a bounded complex-linear isomorphism. For $v_0\in H_D^{-s}$, its defining control $h_v(t)=-i\Lambda_s^{-1}(\varphi W(t)v_0)$ has a backward mild solution with terminal value zero and initial value $Sv_0$ ([prop-se-hum-duality](item-prop-se-hum-duality), [def-se-hum-map](item-def-se-hum-map), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)).

[F4] For $h\in L^1(0,T;H_D^s)$, the controlled system of [def-se-internal-systems](item-def-se-internal-systems) has a unique continuous mild solution, and the forward and backward solutions obey the Duhamel formulas of [prop-se-forced-linear-wellposedness](item-prop-se-forced-linear-wellposedness).


[F5] The continuous-path norm, strong measurability and Bochner $L^1$ conventions are those of [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces). A norm-continuous map on the compact interval $[0,T]$ is uniformly continuous by [math:thm-heine-cantor-metric](https://alphabetamath.cc/item/thm-heine-cantor-metric). A strongly measurable Banach-valued map with integrable norm is Bochner integrable by [math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion).

[F6] The realization has $A=I-\Delta_D\ge I$, $D(A)=H^2(\Omega)\cap H^1_0(\Omega)$, and $A\eta=\eta-\Delta\eta$ there by [lem-se-exterior-dirichlet-realization](item-lem-se-exterior-dirichlet-realization). Classical derivatives of smooth functions are weak derivatives under Countable Choice by [math:lem-classical-derivatives-are-weak-derivatives](https://alphabetamath.cc/item/lem-classical-derivatives-are-weak-derivatives). The spectral norm and domain formulas of [math:thm-unbounded-borel-functional-calculus](https://alphabetamath.cc/item/thm-unbounded-borel-functional-calculus), applied to this $A$, give $\|\eta\|_{H_D^r}\le\|A\eta\|_2$ for $0\le r\le2$ and $\eta\in D(A)$, because $\lambda^r\le\lambda^2$ on the spectral support $\lambda\ge1$. They also give $\|u\|_2\le\|u\|_{H_D^s}$ when $s\ge0$. A bounded box has finite Lebesgue measure, and $[0,T]$ has measure $T$, by [math:thm-lebesgue-measure-of-a-box-of-every-kind](https://alphabetamath.cc/item/thm-lebesgue-measure-of-a-box-of-every-kind).

[F7] Tests are complex smooth compactly supported functions by [math:def-test-function-space-d-of-an-open-set](https://alphabetamath.cc/item/def-test-function-space-d-of-an-open-set). Distributions are continuous complex-linear functionals on tests, with no conjugation in their pairing, by [math:def-distribution](https://alphabetamath.cc/item/def-distribution). A complex-linear functional is a distribution if it has a finite derivative-seminorm bound on each fixed compact support by [math:thm-local-finite-order-characterization-of-distributions](https://alphabetamath.cc/item/thm-local-finite-order-characterization-of-distributions). Smooth multiplication is $(aU)(\eta)=U(a\eta)$ by [math:def-multiplication-of-a-distribution-by-a-smooth-function](https://alphabetamath.cc/item/def-multiplication-of-a-distribution-by-a-smooth-function), and support is the complement of the largest open set of vanishing by [math:def-support-of-a-distribution](https://alphabetamath.cc/item/def-support-of-a-distribution).

[F8] The Axiom of Choice is assumed for the scale and HUM suppliers. It supplies Countable Choice and Dependent Choice by [math:lem-ac-supplies-countable-and-dependent-choice-for-banach-integration](https://alphabetamath.cc/item/lem-ac-supplies-countable-and-dependent-choice-for-banach-integration), in particular discharging the choice hypotheses of the time-space, weak-derivative and Lebesgue-measure suppliers.

**Given:** The geometry, Choice assumption, cutoff, $T$, $s$, and endpoint data in the Statement.

**Goal:** Construct the bounded continuous control, justify its time integrability, prove exact steering, and locate the forcing.

1.1 For $y\in H_D^s$ set $v_0=S^{-1}y$ and $N(y)(t)=-i\Lambda_s^{-1}(\varphi W(t)v_0)$. Strong continuity of $W$, followed by the bounded cutoff and inverse scale map, shows that $N(y)\in C([0,T];H_D^s)$. Moreover, if $C_\varphi$ is the cutoff operator norm on $H_D^{-s}$, then $\|N(y)\|_{C([0,T];H_D^s)}\le\|\Lambda_s^{-1}\|C_\varphi\|S^{-1}\|\|y\|_{H_D^s}$. Thus $N$ is bounded and complex-linear. [given, F2, F3]

1.2 We construct the interior distributional realization used for support. Put $r=\max(0,-s)$. Every test $\eta\in C_c^\infty(\Omega;\mathbb C)$ belongs to $D(A)$: its derivatives through order two are square-integrable weak derivatives by F6, and it belongs to the closure defining $H^1_0$. For $u\in H_D^s$ define $j_su(\eta)=\int_\Omega u\eta\,dx$ if $s\ge0$, and $j_su(\eta)=\langle u,\overline\eta\rangle_{s,-s}$ if $s<0$. The conjugation in the latter formula makes this functional complex-linear in the test. Fix a compact $K\subset\Omega$ and a bounded box $B$ containing $K$. For tests supported in $K$, the pivot bound and F6 give $|j_su(\eta)|\le\|u\|_{H_D^s}\|\overline\eta\|_{H_D^r}\le\|u\|_{H_D^s}\|A\overline\eta\|_2\le(n+1)|B|^{1/2}\|u\|_{H_D^s}\max_{|\alpha|\le2}\|\partial^\alpha\eta\|_\infty$. For $s\ge0$ the first inequality instead follows directly from the $L^2$ inner-product bound and $\|u\|_2\le\|u\|_{H_D^s}$, with $r=0$. The finite-order criterion makes $j_su$ a distribution, with its test action bounded continuously in $u$. This constructs the needed interior realization without asserting that the map on a negative spectral antidual is injective. [F2, F6, F7, F8]

2.1 For any $u\in C([0,T];H_D^s)$ and positive integer $m$, let $q_m$ equal $u(kT/2^m)$ on each interval $[kT/2^m,(k+1)T/2^m)$, $0\le k<2^m$, and put $q_m(T)=u(T)$. These are measurable finite-range simple functions. Uniform continuity from F5 gives $\|q_m-u\|_C\to0$, so $u$ is strongly measurable. Its norm is measurable as the limit of the simple-function norms, and $\int_0^T\|u(t)\|_{H_D^s}\,dt\le T\|u\|_C<\infty$. The Bochner criterion therefore gives $u\in L^1(0,T;H_D^s)$ with $\|u\|_{L^1}\le T\|u\|_C$. In particular this applies to every control $N(y)$ in step 1.1. [F5, F6, F8, step 1.1]

2.2 At nonnegative orders, cutoff multiplication agrees with ordinary multiplication in $L^2$, so $j_s(\varphi u)(\eta)=j_su(\varphi\eta)$. At negative orders its defining antidual formula gives $\langle\varphi u,\overline\eta\rangle_{s,-s}=\langle u,\varphi\overline\eta\rangle_{s,-s}=\langle u,\overline{\varphi\eta}\rangle_{s,-s}$, because $\varphi$ is real. Thus again $j_s(\varphi u)=\varphi j_su$ in the distribution convention of F7. If $\eta$ is supported where $|x|<R$, then $\varphi\eta=0$, proving spatial vanishing there. [F1, F2, F7, step 1.2]

3.1 By the definition of $S$, the backward mild solution with control $N(y)$ and terminal value zero has initial value $Sv_0=y$. Uniqueness of the forward mild solution therefore shows that $N(y)$ drives the initial state $y$ to zero at time $T$. [F3, F4, step 1.1, step 2.1]

4.1 Put $y=z_0-W(-T)z_T$ and define $G(z_0,z_T)=N(y)$. The group law gives $W(T)y=W(T)z_0-z_T$. By the forward Duhamel formula, the terminal state produced by $G$ from $z_0$ differs from that produced by the same control from $y$ by $W(T)(z_0-y)=z_T$. The latter controlled terminal state is zero by step 3.1, so the former is $z_T$. The group is unitary, and step 1.1 gives $\|G(z_0,z_T)\|_C\le C(\|z_0\|_{H_D^s}+\|z_T\|_{H_D^s})$ for a constant depending on the fixed parameters. The displayed formula follows by substitution. [F2, F4, step 1.1, step 3.1]

5.1 For $f\in C([0,T];H_D^s)$ define a complex-linear functional on tests $\Psi\in C_c^\infty(\Omega\times\mathbb R;\mathbb C)$ by $U_f(\Psi)=\int_0^T j_sf(t)(\Psi(\cdot,t))\,dt$. The spatial projection $K$ of the test support is compact in $\Omega$. The slices are continuous in $H_D^2$: all their spatial derivatives through order two vary uniformly continuously on a compact box over any bounded time interval, and the estimate of F6 applied to the difference of two slices bounds its $H_D^2$ norm by those suprema. They are therefore continuous in $H_D^r$. The pairing bound in step 1.2 and continuity of $f$ make the scalar integrand continuous. On each fixed compact space-time support the same estimate gives $|U_f(\Psi)|\le T(n+1)|B|^{1/2}\|f\|_C\max_{|\alpha|\le2}\|\partial_x^\alpha\Psi\|_\infty$ for a spatial box $B$ containing its projection. The finite-order criterion, now on $\Omega\times\mathbb R$, makes $U_f$ a distribution. For the control in step 4.1, take $f=\varphi h$, which is continuous by cutoff boundedness. Step 2.2 shows $U_f$ vanishes on $\{(x,t):x\in\Omega,\ |x|<R\}$; its defining time integral also vanishes on $\Omega\times(\mathbb R\setminus[0,T])$. The support definition therefore gives $\operatorname{supp}U_f\subseteq\{x\in\Omega:|x|\ge R\}\times[0,T]$. This proves precisely the stated relative space-time support, including the negative-order interpretation. [F1, F2, F5, F6, F7, step 4.1, step 1.2, step 2.2] ∎

## Source notes

The frozen article is cited for attribution of Theorem 3.6 and its control formula on PDF pages 12–13. The proof above uses the stated mathematical suppliers, including their Choice hypothesis; the article citation is not used as a proof of its own claim.

The time-integrability and distributional-support arguments are local additions to this generated draft. Their premises are the declared mathematical suppliers; they do not assert an injective identification of a negative spectral antidual with interior distributions. The Physics Library is reused through the mathematical flow supplier of the scale-flow result, without a physical premise.
