---
title: Linear forced well-posedness by Duhamel formula
status: draft
research_item: prop-se-forced-linear-wellposedness
dependency_level: 8
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
---

PDF p. 12: ` paragraph following (3.14) `

## Prerequisites

- [def-se-dirichlet-scale](item-def-se-dirichlet-scale)
- [prop-se-scale-flow](item-prop-se-scale-flow)
- [lem-se-spectral-cutoff-duality](item-lem-se-spectral-cutoff-duality)
- [def-se-internal-systems](item-def-se-internal-systems)
- [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)
- [math:def-infinitesimal-generator-of-a-c-zero-semigroup](https://alphabetamath.cc/item/def-infinitesimal-generator-of-a-c-zero-semigroup)
- [math:def-classical-strong-and-mild-abstract-cauchy-solutions](https://alphabetamath.cc/item/def-classical-strong-and-mild-abstract-cauchy-solutions)
- [math:thm-variation-of-constants-formula](https://alphabetamath.cc/item/thm-variation-of-constants-formula)
- [math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:lem-ac-supplies-countable-and-dependent-choice-for-banach-integration](https://alphabetamath.cc/item/lem-ac-supplies-countable-and-dependent-choice-for-banach-integration)
- [math:lem-classical-derivatives-are-weak-derivatives](https://alphabetamath.cc/item/lem-classical-derivatives-are-weak-derivatives)
- [math:thm-heine-borel-rn](https://alphabetamath.cc/item/thm-heine-borel-rn)
- [math:thm-continuous-image-of-a-compact-space-is-compact](https://alphabetamath.cc/item/thm-continuous-image-of-a-compact-space-is-compact)
- [math:thm-lebesgue-measure-under-dilations-and-reflections](https://alphabetamath.cc/item/thm-lebesgue-measure-under-dilations-and-reflections)
- [math:thm-lebesgue-outer-measure-and-measurability-are-translation-invariant](https://alphabetamath.cc/item/thm-lebesgue-outer-measure-and-measurability-are-translation-invariant)
- [math:thm-integrals-are-invariant-under-measure-preserving-maps](https://alphabetamath.cc/item/thm-integrals-are-invariant-under-measure-preserving-maps)
- [math:def-banach-valued-simple-function-and-integral](https://alphabetamath.cc/item/def-banach-valued-simple-function-and-integral)
- [math:def-bochner-integrable-function](https://alphabetamath.cc/item/def-bochner-integrable-function)


## Statement

Assume the Axiom of Choice. Let $\Omega$ be the smooth exterior domain, let $H_D^s=H_D^s(\Omega)$ be the Dirichlet spectral space, and let $W(t)=e^{it\Delta_D}$ and the real cutoff $\varphi$ be as in [prop-se-scale-flow](item-prop-se-scale-flow) and [def-se-internal-systems](item-def-se-internal-systems). Let $T>0$ and $s\in[-2,2]$. For $z_0\in H_D^s$ and $h\in L^1(0,T;H_D^s)$, the linear controlled system of [def-se-internal-systems](item-def-se-internal-systems) has a unique mild solution $z\in C([0,T];H_D^s)$, namely

$$z(t)=W(t)z_0-i\int_0^t W(t-r)\varphi h(r)\,dr.$$

The integral is a Bochner integral in $H_D^s$. Equivalently, this is the unique integral solution in the abstract Cauchy-problem sense. It obeys $\sup_{0\le t\le T}\|z(t)\|_{H_D^s}\le\|z_0\|_{H_D^s}+C_s\|h\|_{L^1(0,T;H_D^s)}$, where $C_s$ is a bound for multiplication by $\varphi$ on $H_D^s$.

For a prescribed terminal state $z_T\in H_D^s$, the corresponding backward mild solution is unique and is

$$z(t)=W(t-T)z_T+i\int_t^T W(t-r)\varphi h(r)\,dr.$$

The homogeneous Dirichlet condition is encoded by the Dirichlet realization and its scale; no classical boundary trace is asserted at arbitrary $s$.

## Facts & Assumptions

[F1] The scale $H_D^s$ is a complex Hilbert space, hence a Banach space, and $W(t)$ is a strongly continuous unitary group on it. The Dirichlet realization supplies the meaning of the homogeneous evolution. [def-se-dirichlet-scale](item-def-se-dirichlet-scale) [prop-se-scale-flow](item-prop-se-scale-flow)

[F2] The controlled equation is $i\partial_tz+\Delta z=\varphi h$, with the initial or terminal state interpreted in the chosen evolution class. Its cutoff is smooth and real, zero on $|x|\le R$ and one on $|x|\ge R+1$, with the obstacle contained in $B_R(0)$. [def-se-internal-systems](item-def-se-internal-systems) Under Choice, every $a\in W^{2,\infty}(\Omega)$ gives bounded multiplication on $H_D^s$ for $-2\le s\le2$, agreeing with ordinary multiplication on $L^2$ and extended to negative orders by the pivot antidual pairing. The norm $\|a\|_{W^{2,\infty}}$ is the maximum of the essential bounds of its weak derivatives through order two. [lem-se-spectral-cutoff-duality](item-lem-se-spectral-cutoff-duality)

[F3] The time space $L^1(0,T;H_D^s)$ consists of strongly measurable maps with integrable norm, modulo almost-everywhere equality, and its integration is Bochner integration. [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)

[F4] A strongly continuous semigroup has an infinitesimal generator. For Bochner-integrable forcing, variation of constants supplies the continuous Duhamel formula and its uniqueness as a mild and as an integral solution. [math:def-infinitesimal-generator-of-a-c-zero-semigroup](https://alphabetamath.cc/item/def-infinitesimal-generator-of-a-c-zero-semigroup) [math:def-classical-strong-and-mild-abstract-cauchy-solutions](https://alphabetamath.cc/item/def-classical-strong-and-mild-abstract-cauchy-solutions) [math:thm-variation-of-constants-formula](https://alphabetamath.cc/item/thm-variation-of-constants-formula) The theorem assumes Dependent Choice. The assumed Axiom of Choice supplies both Countable Choice and Dependent Choice by the published implication lemma; Countable Choice also discharges the time-space and weak-derivative hypotheses below. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:lem-ac-supplies-countable-and-dependent-choice-for-banach-integration](https://alphabetamath.cc/item/lem-ac-supplies-countable-and-dependent-choice-for-banach-integration)

[F5] The norm of a Bochner integral is bounded by the integral of the norm of its integrand. [math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality)

[F6] Under Countable Choice, the classical derivatives of a $C^2$ function on an open Euclidean set are its weak derivatives through order two. [math:lem-classical-derivatives-are-weak-derivatives](https://alphabetamath.cc/item/lem-classical-derivatives-are-weak-derivatives)

[F7] Closed bounded Euclidean sets are compact, continuous images of compact metric sets are compact, and compact subsets of the real line are bounded. [math:thm-heine-borel-rn](https://alphabetamath.cc/item/thm-heine-borel-rn) [math:thm-continuous-image-of-a-compact-space-is-compact](https://alphabetamath.cc/item/thm-continuous-image-of-a-compact-space-is-compact)

[F8] Under Countable Choice, reflection in the origin preserves Lebesgue measurability and measure on $\mathbb R$; translation also preserves them. Thus these results apply to compositions of a reflection and a translation, including on null sets. [math:thm-lebesgue-measure-under-dilations-and-reflections](https://alphabetamath.cc/item/thm-lebesgue-measure-under-dilations-and-reflections) [math:thm-lebesgue-outer-measure-and-measurability-are-translation-invariant](https://alphabetamath.cc/item/thm-lebesgue-outer-measure-and-measurability-are-translation-invariant)

[F9] If a measurable self-map of a measure space preserves its measure, composition with it preserves the integral of every nonnegative measurable scalar function, including the value infinity. [math:thm-integrals-are-invariant-under-measure-preserving-maps](https://alphabetamath.cc/item/thm-integrals-are-invariant-under-measure-preserving-maps)

[F10] For an integrable Banach-valued simple function $p=\sum_j x_j\mathbf1_{A_j}$ with disjoint nonzero level sets, $\int_Ep=\sum_j\lambda_1(E\cap A_j)x_j$. A Bochner-integrable function has integrable simple approximants converging in $L^1$ norm, and its integral is the norm limit of their integrals; integration over a measurable subset is defined by restriction. [math:def-banach-valued-simple-function-and-integral](https://alphabetamath.cc/item/def-banach-valued-simple-function-and-integral) [math:def-bochner-integrable-function](https://alphabetamath.cc/item/def-bochner-integrable-function)

## Proof

**Given:** The domain, scale, cutoff, Choice assumption, $s$, $T$, $z_0$ and $h$ in the Statement.

**Goal:** Establish the forward and backward formulas, their uniqueness in the stated solution classes, and the estimate.

1.1 The closed annulus $K=\{x:R\le|x|\le R+1\}$ is disjoint from the obstacle and compact by [F7]. The cutoff and its classical derivatives through order two are continuous on $K$, so their images there are compact subsets of $\mathbb R$ and hence bounded by [F7]. Outside $K$, $\varphi$ has the constant values zero or one and its positive-order derivatives vanish. Thus the function and all its classical derivatives through order two are bounded on $\Omega$. Countable Choice follows from the assumed AC by [F4], so [F6] identifies these with the weak derivatives. Hence $\varphi\in W^{2,\infty}(\Omega)$. Apply the multiplier lemma in [F2] to obtain a bounded operator $M_\varphi$ on $H_D^s$, and denote a bound for its norm by $C_s$. This uses no upper range restriction on $\varphi$. [F2, F4, F6, F7, given]

1.2 Put $I=(0,T)$ and $\rho(q)=T-q$. By [F8] and Countable Choice from [F4], $\rho$ is a measurable, measure-preserving involution of $I$ and takes null sets to null sets. For any strongly measurable $g:I\to X$, compose its almost-everywhere convergent simple approximation with $\rho$. The compositions are measurable simple functions, and they converge to $g\circ\rho$ outside the reflected exceptional null set. Hence $g\circ\rho$ is strongly measurable, independently of the representative of $g$. Applying [F9] to the scalar function $\|g\|_X$ gives $\int_I\|g\circ\rho\|_X=\int_I\|g\|_X$. In particular reflection preserves $L^1(I;X)$ and its norm. [F3, F4, F8, F9]

2.1 Put $X=H_D^s$ and $f(t)=-i\varphi h(t)$. Bounded linear multiplication sends the simple approximants in [F3] to simple approximants, so $f$ is strongly measurable. By step 1.1, $\|f(t)\|_X\le C_s\|h(t)\|_X$ almost everywhere; hence $f$ is Bochner integrable. Restrict the group $W$ to nonnegative times and denote its generator by $B$. Its mild Cauchy problem is $z'=Bz+f$. This is the evolution interpretation of $i\partial_tz+\Delta_Dz=\varphi h$: on generator-domain data the free derivative is $i\Delta_DW(t)v$ in the lower scale, and the forcing is $-i\varphi h$. [F1, F2, F3, F4, step 1.1, given]

2.2 Let $g\in L^1(I;X)$ and let $E\subset I$ be measurable. Choose defining integrable simple approximants $p_n$ with $\int_I\|g-p_n\|_X\to0$, as in [F10]. Reflection sends each nonzero level set $A_j$ of $p_n$ to $\rho(A_j)$ and preserves its measure. Moreover $\rho(E\cap\rho(A_j))=\rho(E)\cap A_j$. The finite-sum formula in [F10] therefore gives $\int_E p_n\circ\rho=\int_{\rho(E)}p_n$. Step 1.2, also applied to $g-p_n$, shows that the reflected errors have the same $L^1$ norm. Restricting either error to the indicated subset can only decrease its norm integral, so [F5] and [F10] permit passage to the norm limits, yielding $\int_E g(\rho(q))\,dq=\int_{\rho(E)}g(r)\,dr$. The same finite-sum limit argument gives $\int_E i g=i\int_Eg$. These identities include null sets and hence apply to the interval integrals irrespective of their endpoints. [F5, F8, F10, step 1.2, algebra]

3.1 Apply variation of constants to this semigroup, initial state $z_0$ and forcing $f$. It gives the displayed forward formula, a continuous $X$-valued path, and uniqueness among mild solutions and separately among integral solutions. Unitarity and the Bochner norm inequality give $\|z(t)\|_X\le\|z_0\|_X+C_s\int_0^t\|h(r)\|_X\,dr$, proving the uniform estimate. [F1, F4, F5, step 2.1]

4.1 For the terminal problem set $y(\tau)=z(T-\tau)$, $0\le\tau\le T$. The reversed free group is $\widetilde W(\tau)=W(-\tau)$, and its generator is $-B$ on $D(B)$: the group identity writes the reversed difference quotient as $-W(-\tau)(W(\tau)v-v)/\tau$, and the converse follows by reversing the same identity. The reversed forcing is $\widetilde f(\tau)=i\varphi h(T-\tau)$, which belongs to $L^1(I;X)$ by step 2.1 and step 1.2. Variation of constants applied to $\widetilde W$ gives a unique mild, equivalently unique integral, $y$ with $y(0)=z_T$. Fix $0\le t\le T$ and put $\tau=T-t$. Its Duhamel integrand $q\mapsto W(q-\tau)\widetilde f(q)$ on $(0,\tau)$ is Bochner integrable by [F4]; extend it by zero to $I$. Apply step 2.2 with $E=(t,T)$ to this extended function. At $q=T-r$, its nonzero value is $iW(t-r)\varphi h(r)$, so the result is $z(t)=W(t-T)z_T+i\int_t^T W(t-r)\varphi h(r)\,dr$. Applying the same reflection twice gives the original mild formula. For the integral class, the reversed identity is $y(\tau)=z_T-B\int_0^\tau y+\int_0^\tau\widetilde f$, with $\int_0^\tau y\in D(B)$; step 2.2 converts it to $z(t)=z_T-B\int_t^Tz-\int_t^Tf$, with $\int_t^Tz\in D(B)$. Reflection converts these identities back as well. Thus reversal is bijective on both stated solution classes, proving backward uniqueness and continuity. The scale realization supplies the stated Dirichlet interpretation. [F1, F2, F3, F4, F10, step 2.1, step 3.1, step 1.2, step 2.2, algebra] ∎

## Source notes

The frozen article is cited for attribution of the linear controlled system and its well-posedness assertion on PDF page 12. The proof uses the independent mathematical suppliers above. Uniqueness is stated in the mild or integral class; no classical trace or stronger solution regularity is claimed.
