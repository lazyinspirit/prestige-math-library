---
title: Relative variation of a cubic spectral jump factor
status: published
research_item: lem-qec-author-252014cb5616-cubic-spectral-variation
dependency_level: 1
---

## Prerequisites

- [def-qec-prereq-stationary-spectrum-kernel-contract](item-def-qec-prereq-stationary-spectrum-kernel-contract)
- [math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra](https://alphabetamath.cc/item/def-lebesgue-measure-and-the-lebesgue-sigma-algebra)
- [math:thm-lebesgue-measure-is-a-complete-measure](https://alphabetamath.cc/item/thm-lebesgue-measure-is-a-complete-measure)
- [math:def-extended-real-valued-measurable-function](https://alphabetamath.cc/item/def-extended-real-valued-measurable-function)
- [math:def-measure-null-set-and-almost-everywhere](https://alphabetamath.cc/item/def-measure-null-set-and-almost-everywhere)
- [math:def-nonnegative-lebesgue-integral](https://alphabetamath.cc/item/def-nonnegative-lebesgue-integral)
- [math:def-integrable-real-and-complex-functions-and-their-integrals](https://alphabetamath.cc/item/def-integrable-real-and-complex-functions-and-their-integrals)
- [math:thm-lebesgue-measure-of-a-box-of-every-kind](https://alphabetamath.cc/item/thm-lebesgue-measure-of-a-box-of-every-kind)
- [math:def-nonnegative-simple-measurable-function](https://alphabetamath.cc/item/def-nonnegative-simple-measurable-function)
- [math:def-integral-of-a-nonnegative-simple-function](https://alphabetamath.cc/item/def-integral-of-a-nonnegative-simple-function)
- [math:prop-the-nonnegative-integral-agrees-with-the-simple-integral](https://alphabetamath.cc/item/prop-the-nonnegative-integral-agrees-with-the-simple-integral)
- [math:prop-order-and-scalar-rules-for-the-nonnegative-integral](https://alphabetamath.cc/item/prop-order-and-scalar-rules-for-the-nonnegative-integral)
- [math:thm-the-lebesgue-integral-respects-almost-everywhere-equality](https://alphabetamath.cc/item/thm-the-lebesgue-integral-respects-almost-everywhere-equality)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)


## Statement

Let $A,\Omega>0$, $0\leq r<1$, and $I=[\Omega(1-r),\Omega(1+r)]$. Let $\mathcal J:I\to[0,\infty)$ be a pointwise spectral representative satisfying $\mathcal J(\omega)=A\omega^3$ for every $\omega\in I$. Define $b(\omega)=\sqrt{\mathcal J(\omega)}=\sqrt A\,\omega^{3/2}$ using the nonnegative square root. Then $b(\Omega)>0$ and, for every real $s$ with $|s|\leq r\Omega$, $|b(\Omega+s)/b(\Omega)-1|\leq(3+3r+r^2)|s|/\Omega$.

For any fixed complex scalar $c$, define $q_c(\omega)=c\,b(\omega)$ on $I$. If $c=0$, then $q_c(\omega)=0$ throughout $I$. If $c\ne0$, then $q_c(\Omega)\ne0$ and $|q_c(\Omega+s)/q_c(\Omega)-1|$ obeys the same bound. A consuming physical model may use its fixed dipole matrix element as $c$; no dipole operator is assumed here.

For the Lebesgue-measure assertions in this paragraph assume the Axiom of Countable Choice. An identity $\mathcal J(\omega)=A\omega^3$ only almost everywhere on $I$, with respect to Lebesgue measure, does not determine the value of a chosen representative at $\Omega$ and does not imply the pointwise premise. Likewise, define an integrable regulator here to mean a measurable function $\chi:\mathbb R\to[0,\infty)$ with $\int_{\mathbb R}\chi(\omega)\,d\omega<\infty$, used to form $\mathcal J_\chi(\omega)=A\omega^3\chi(\omega)$ for $\omega>0$ and $\mathcal J_\chi(\omega)=0$ for $\omega\leq0$. Integrability of $\chi$ alone implies neither $\mathcal J_\chi(\omega)=A\omega^3$ throughout $I$ nor $\mathcal J_\chi(\Omega)>0$.

## Facts & Assumptions

[F1] The spectral-kernel contract uses Lebesgue integration and pointwise positive spectral square roots, with integral regularity imposed separately. [def-qec-prereq-stationary-spectrum-kernel-contract](item-def-qec-prereq-stationary-spectrum-kernel-contract)

[F2] Write $\lambda$ for Lebesgue measure on $\mathbb R$ and $\mathcal L(\mathbb R)$ for its measurable sets. Under Countable Choice, $\mathcal L(\mathbb R)$ is a sigma-algebra and $\lambda$ is a complete measure on it. [math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra](https://alphabetamath.cc/item/def-lebesgue-measure-and-the-lebesgue-sigma-algebra) [math:thm-lebesgue-measure-is-a-complete-measure](https://alphabetamath.cc/item/thm-lebesgue-measure-is-a-complete-measure)

[F3] Measurability of an extended-real-valued function is equivalent to measurability of every strict superlevel set. A property holds almost everywhere if its exceptions lie in a measurable null set. Nonnegative integrals are suprema of simple minorant integrals; a nonnegative real measurable function is integrable exactly when that integral is finite. [math:def-extended-real-valued-measurable-function](https://alphabetamath.cc/item/def-extended-real-valued-measurable-function) [math:def-measure-null-set-and-almost-everywhere](https://alphabetamath.cc/item/def-measure-null-set-and-almost-everywhere) [math:def-nonnegative-lebesgue-integral](https://alphabetamath.cc/item/def-nonnegative-lebesgue-integral) [math:def-integrable-real-and-complex-functions-and-their-integrals](https://alphabetamath.cc/item/def-integrable-real-and-complex-functions-and-their-integrals)

[F4] Under Countable Choice, every bounded interval with endpoints $a\leq b$ is Lebesgue measurable with measure $b-a$, whatever its endpoint inclusions. In particular $\lambda(\{a\})=0$. This is the one-dimensional case of the box theorem, including degenerate boxes. [math:thm-lebesgue-measure-of-a-box-of-every-kind](https://alphabetamath.cc/item/thm-lebesgue-measure-of-a-box-of-every-kind)

[F5] For measurable $E$, write $\mathbf 1_E$ for its indicator. It is a nonnegative simple measurable function; its simple integral is $\lambda(E)$ and agrees with its nonnegative Lebesgue integral. [math:def-nonnegative-simple-measurable-function](https://alphabetamath.cc/item/def-nonnegative-simple-measurable-function) [math:def-integral-of-a-nonnegative-simple-function](https://alphabetamath.cc/item/def-integral-of-a-nonnegative-simple-function) [math:prop-the-nonnegative-integral-agrees-with-the-simple-integral](https://alphabetamath.cc/item/prop-the-nonnegative-integral-agrees-with-the-simple-integral)

[F6] On any measure space, the nonnegative integral is monotone and homogeneous for positive finite scalars. [math:prop-order-and-scalar-rules-for-the-nonnegative-integral](https://alphabetamath.cc/item/prop-order-and-scalar-rules-for-the-nonnegative-integral)

[F7] If two integrable real or complex functions agree almost everywhere, their integrals over every measurable set agree. [math:thm-the-lebesgue-integral-respects-almost-everywhere-equality](https://alphabetamath.cc/item/thm-the-lebesgue-integral-respects-almost-everywhere-equality)

[A1] Assume Countable Choice for the Lebesgue-measure qualifications and counterexamples, as required by [F2] and [F4]. It asserts that for every sequence of nonempty sets there is a function choosing one member of each set. No choice assumption is used in the pointwise cubic bound or scalar cancellation. [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

## Proof

**Given:** The parameters, pointwise cubic law, scalar coefficient and regulator convention in the Statement; Countable Choice for the Lebesgue-measure qualifications only. **Goal:** Prove the variation bound and zero preservation, and show why almost-everywhere data or regulator integrability alone do not supply the pointwise premise.

1.1 Put $x=s/\Omega$. The frequency stays positive because $|x|\leq r<1$, and $b(\Omega)=\sqrt A\,\Omega^{3/2}>0$. Dividing positive square roots gives $b(\Omega+s)/b(\Omega)=(1+x)^{3/2}$. Rationalizing gives $(1+x)^{3/2}-1=x(3+3x+x^2)/((1+x)^{3/2}+1)$. [given, F1]

1.2 For the weaker almost-everywhere premise, use [A1] and let $\mathcal J_0:\mathbb R\to[0,\infty)$ equal $A\omega^3$ on $I$ and zero off $I$. Let $\mathcal J_1$ equal $\mathcal J_0$ except that $\mathcal J_1(\Omega)=0$. For a negative threshold both strict superlevel sets are $\mathbb R$. For a nonnegative threshold the superlevel set of $\mathcal J_0$ is a bounded interval or empty, because the cubic is strictly increasing on the positive interval $I$; the superlevel set of $\mathcal J_1$ is obtained by removing at most $\{\Omega\}$. Thus [F2]–[F4] establish measurability of both functions. Put $M=A[\Omega(1+r)]^3>0$. Since $0\leq\mathcal J_i\leq M\mathbf 1_I$, [F4]–[F6] give $\int_{\mathbb R}\mathcal J_i\,d\lambda\leq M\lambda(I)=2Mr\Omega<\infty$ for $i=0,1$, so both functions are integrable by [F3]. Their exceptional set is contained in the measurable null singleton $\{\Omega\}$ by [F4], so they agree almost everywhere by [F3]. Consequently [F7] gives identical integrals over every Lebesgue measurable set. Yet $\mathcal J_1$ is cubic almost everywhere on $I$ and $\mathcal J_1(\Omega)=0\ne A\Omega^3$. This also covers $r=0$, when $I=\{\Omega\}$ and both integrals vanish. Integral data therefore cannot determine the differing reference values. [given, A1, F2, F3, F4, F5, F6, F7]

2.1 The denominator is at least one, and $|3+3x+x^2|\leq3+3r+r^2$. Taking absolute values proves the claimed bound. If $c=0$, the defining product $q_c=c\,b$ vanishes at every point. If $c\ne0$, positivity of $b(\Omega)$ gives $q_c(\Omega)\ne0$, and cancellation gives $q_c(\Omega+s)/q_c(\Omega)=b(\Omega+s)/b(\Omega)$. [given, step 1.1]

3.1 For the regulator claim, use [A1] and take $\chi=\mathbf 1_{[0,\Omega/2]}$. The interval is measurable by [F4], and [F5] makes $\chi$ a nonnegative measurable function with $\int_{\mathbb R}\chi\,d\lambda=\lambda([0,\Omega/2])=\Omega/2<\infty$. Thus it is an integrable regulator by [F3]. Since $\Omega>0$, we have $\chi(\Omega)=0$. The defined regulated spectrum therefore satisfies $\mathcal J_\chi(\Omega)=0\ne A\Omega^3$, disproving both proposed implications from regulator integrability alone. These counterexamples concern only the weaker data, not the pointwise hypothesis used for the bound. [given, A1, F3, F4, F5, step 2.1, step 1.2] ∎
