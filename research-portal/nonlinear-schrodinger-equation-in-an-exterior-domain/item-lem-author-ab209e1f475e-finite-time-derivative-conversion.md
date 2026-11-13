---
title: Finite-time bounds for Banach-valued derivatives
status: draft
research_item: lem-author-ab209e1f475e-finite-time-derivative-conversion
dependency_level: 1
---

## Prerequisites

- [lem-author-ab209e1f475e-bochner-lp-inclusion](item-lem-author-ab209e1f475e-bochner-lp-inclusion)
- [def-author-ab209e1f475e-banach-valued-time-derivative](item-def-author-ab209e1f475e-banach-valued-time-derivative)
- [math:def-essential-supremum-with-respect-to-a-measure](https://alphabetamath.cc/item/def-essential-supremum-with-respect-to-a-measure)
- [math:prop-essential-supremum-is-attained-as-the-least-essential-bound](https://alphabetamath.cc/item/prop-essential-supremum-is-attained-as-the-least-essential-bound)
- [math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals)
- [math:def-banach-space](https://alphabetamath.cc/item/def-banach-space)
- [math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:thm-lebesgue-measure-of-a-box-of-every-kind](https://alphabetamath.cc/item/thm-lebesgue-measure-of-a-box-of-every-kind)
- [math:def-integral-of-a-nonnegative-simple-function](https://alphabetamath.cc/item/def-integral-of-a-nonnegative-simple-function)
- [math:prop-the-nonnegative-integral-agrees-with-the-simple-integral](https://alphabetamath.cc/item/prop-the-nonnegative-integral-agrees-with-the-simple-integral)


## Statement

Assume Countable Choice. Let $0<T<\infty$, let $Y$ be a real or complex Banach space, and suppose $g=\partial_tu$ in the Bochner distributional sense. Use Lebesgue measure on $(0,T)$ and the corresponding almost-everywhere conventions. Assume $g$ is strongly measurable and $\|g\|_{L^\infty(0,T;Y)}:=\operatorname*{ess\,sup}_{t\in(0,T)}\|g(t)\|_Y\le M<\infty$. The least essential bound property and Hölder's inequality give $\|\partial_tu\|_{L^1(Y)}\le TM$. More generally, if $1\le q<\infty$ and $g\in L^q(0,T;Y)$, the Bochner norm convention gives $\|\partial_tu\|_{L^1(Y)}\le T^{1-1/q}\|g\|_{L^q(Y)}$. Consequently a uniform essential time bound, or a uniform $L^q$ bound, on a family's derivatives supplies a uniform $L^1(Y)$ bound with the displayed constant.

## Statement references

[lem-author-ab209e1f475e-bochner-lp-inclusion](item-lem-author-ab209e1f475e-bochner-lp-inclusion)

[def-author-ab209e1f475e-banach-valued-time-derivative](item-def-author-ab209e1f475e-banach-valued-time-derivative)

[math:def-essential-supremum-with-respect-to-a-measure](https://alphabetamath.cc/item/def-essential-supremum-with-respect-to-a-measure)

[math:prop-essential-supremum-is-attained-as-the-least-essential-bound](https://alphabetamath.cc/item/prop-essential-supremum-is-attained-as-the-least-essential-bound)

[math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals)

[math:def-banach-space](https://alphabetamath.cc/item/def-banach-space)

[math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function)

[math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

## Facts & Assumptions

**Given:** Countable Choice, a finite interval with Lebesgue measure, a real or complex Banach value space, strongly measurable derivative representatives, and the stated uniform norm bound.

**Goal:** Convert the derivative hypothesis to the exact Bochner $L^1$ bound without changing its value space.

[F1] The derivative is the Bochner distributional identity, whose norm is the norm of its representative ([def-author-ab209e1f475e-banach-valued-time-derivative](item-def-author-ab209e1f475e-banach-valued-time-derivative)).

[F2] The essential supremum is an almost-everywhere bound ([math:prop-essential-supremum-is-attained-as-the-least-essential-bound](https://alphabetamath.cc/item/prop-essential-supremum-is-attained-as-the-least-essential-bound), [math:def-essential-supremum-with-respect-to-a-measure](https://alphabetamath.cc/item/def-essential-supremum-with-respect-to-a-measure)).

[F3] The Bochner norm convention and finite-exponent conversion are supplied by [lem-author-ab209e1f475e-bochner-lp-inclusion](item-lem-author-ab209e1f475e-bochner-lp-inclusion); the conversion is its last assertion, obtained by [math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals).

[F4] A Banach space has its specified real or complex scalar field and complete norm metric ([math:def-banach-space](https://alphabetamath.cc/item/def-banach-space)). Strong measurability is almost-everywhere norm approximation by measurable simple functions ([math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function)).

[F5] Under Countable Choice, the one-dimensional open-box case of [math:thm-lebesgue-measure-of-a-box-of-every-kind](https://alphabetamath.cc/item/thm-lebesgue-measure-of-a-box-of-every-kind), with endpoints $0$ and $T$, gives $\lambda_1((0,T))=T$.

[A1] Countable Choice ([math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)) is assumed to meet the hypotheses of the derivative convention in [F1], the Bochner-space supplier in [F3], and the interval-measure supplier in [F5]. No necessity claim for the scalar norm estimates is asserted.

[F6] The endpoint $(\infty,1)$ case of [math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals) gives $\int_I|ab|\,dt\le\|a\|_{L^\infty(I)}\|b\|_{L^1(I)}$ for measurable real-valued $a\in L^\infty(I)$ and $b\in L^1(I)$, where $I=(0,T)$.

[F7] On $I=(0,T)$, the constant function $1=\chi_I$ has simple integral $\lambda_1(I)$ by [math:def-integral-of-a-nonnegative-simple-function](https://alphabetamath.cc/item/def-integral-of-a-nonnegative-simple-function). Its nonnegative Lebesgue integral is the same by [math:prop-the-nonnegative-integral-agrees-with-the-simple-integral](https://alphabetamath.cc/item/prop-the-nonnegative-integral-agrees-with-the-simple-integral). Thus [F5] gives $\|1\|_{L^1(I)}=T$.

## Proof

1.1 In the essential-bound case, put $h(t)=\|g(t)\|_Y$, the measurable scalar norm representative used in [F3]. The given bound and [F2] give $h\in L^\infty(I)$ with $\|h\|_{L^\infty(I)}\le M$. By [F5] and [F7], the constant function $1$ belongs to $L^1(I)$ with norm $T$. Apply [F6] to $a=h$ and $b=1$: $\int_0^T\|g(t)\|_Y\,dt=\int_I|h\cdot1|\,dt\le\|h\|_{L^\infty(I)}\|1\|_{L^1(I)}\le MT$. Strong measurability and this finite integral make $g$ the required $L^1(Y)$ representative in [F1], with the norm convention in [F3]. [F1, F2, F3, F4, F5, F6, F7, A1, given]

2.1 For finite $q$, apply [F3] to $g$ on the same interval, under [A1]. This yields the displayed constant $T^{1-1/q}$. Applying either estimate separately to each family member and then taking the supremum preserves uniformity, proving the final assertion. [F1, F3, A1, step 1.1, given] ∎
