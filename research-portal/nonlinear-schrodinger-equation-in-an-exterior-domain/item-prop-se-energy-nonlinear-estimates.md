---
title: Cubic and quintic energy-space nonlinear time estimates
status: published
research_item: prop-se-energy-nonlinear-estimates
dependency_level: 10
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF pages 15–16, proof of Proposition 3.9
---

PDF p. 15: ` time-integrated estimate in Proposition 3.9 `; PDF p. 16: ` opening difference estimate `

## Prerequisites

- [def-se-energy-space](item-def-se-energy-space)
- [def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation)
- [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)
- [prop-se-power-chain-rule](item-prop-se-power-chain-rule)
- [prop-se-pointwise-differences](item-prop-se-pointwise-differences)
- [lem-se-power-time-integrability](item-lem-se-power-time-integrability)
- [math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement

Assume the Axiom of Choice. Let $n\ge2$, let $\Theta\subset\mathbb R^n$ be nonempty and compact with smooth boundary, and suppose that $\Omega=\mathbb R^n\setminus\Theta$ is connected. Let $T>0$, $m\in\{3,5\}$ and $\lambda\in\mathbb R\setminus\{0\}$, and set $g(z)=\lambda|z|^{m-1}z$.

Let $H^1_0(\Omega)$ be the closure of $C_c^\infty(\Omega;\mathbb C)$ in the norm $\|w\|_{H^1}=(\|w\|_2^2+\sum_j\|D_jw\|_2^2)^{1/2}$. Define $X_T=C([0,T];H^1_0(\Omega))\cap L^4_tL^\infty_x$ using compatible jointly measurable representatives and the norm $\|w\|_{X_T}=\sup_{t\in[0,T]}\|w(t)\|_{H^1}+\|w\|_{L^4_tL^\infty_x}$. The mixed norm is the $L^4(0,T)$ norm of the spatial essential supremum; it does not require strong measurability into $L^\infty(\Omega)$.

For $u,v\in X_T$, both $g(u)$ and $g(v)$ belong to the Bochner space $L^1(0,T;H^1_0(\Omega))$, and

$$\|g(v)\|_{L^1_tH^1_0}\le m|\lambda|T^{(5-m)/4}\|v\|_{X_T}^m.$$

There is a constant $C$ depending only on $m$ and $|\lambda|$ such that

$$\|g(v)-g(u)\|_{L^1_tH^1_0}\le CT^{(5-m)/4}(\|v\|_{X_T}^{m-1}+\|u\|_{X_T}^{m-1})\|v-u\|_{X_T}.$$

For $m=5$ the factor involving $T$ is $1$.

## Statement references

[def-se-energy-space](item-def-se-energy-space)

[def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation)

[def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Facts & Assumptions

[F1] The energy-space definition supplies the compatible representative convention and the displayed $X_T$ norm; the integer Sobolev and time-space definitions supply the weak-derivative norm, closure and Bochner and mixed-norm conventions. [def-se-energy-space](item-def-se-energy-space) [def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation) [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)

[F2] For bounded $w\in H^1_0(\Omega)$, the power chain rule gives $g(w)\in H^1_0(\Omega)$ and $\|g(w)\|_{H^1}\le m|\lambda|\|w\|_\infty^{m-1}\|w\|_{H^1}$. The pointwise-differences proposition gives the corresponding energy difference bound with one term containing $\|v-u\|_{H^1}$ and one containing $\|v-u\|_\infty$. [prop-se-power-chain-rule](item-prop-se-power-chain-rule) [prop-se-pointwise-differences](item-prop-se-pointwise-differences)

[F3] The time-integrability lemma applies to the stated compatible mixed-norm convention and establishes strong $H^1_0$ measurability and $L^1$ membership for the nonlinear terms, without assuming Bochner measurability into $L^\infty$. [lem-se-power-time-integrability](item-lem-se-power-time-integrability)

[F4] Hölder's integral inequality applies to nonnegative measurable time functions, including its $1,\infty$ endpoint. [math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals)

[F5] The assumed Axiom of Choice supplies the choice hypotheses carried by these inputs. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Proof

[F1] The energy-space definition supplies the compatible representative convention and the displayed $X_T$ norm; the integer Sobolev and time-space definitions supply the weak-derivative norm, closure and Bochner and mixed-norm conventions. [def-se-energy-space](item-def-se-energy-space) [def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation) [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)

[F2] For bounded $w\in H^1_0(\Omega)$, the power chain rule gives $g(w)\in H^1_0(\Omega)$ and $\|g(w)\|_{H^1}\le m|\lambda|\|w\|_\infty^{m-1}\|w\|_{H^1}$. The pointwise-differences proposition gives the corresponding energy difference bound with one term containing $\|v-u\|_{H^1}$ and one containing $\|v-u\|_\infty$. [prop-se-power-chain-rule](item-prop-se-power-chain-rule) [prop-se-pointwise-differences](item-prop-se-pointwise-differences)

[F3] The time-integrability lemma applies to the stated compatible mixed-norm convention and establishes strong $H^1_0$ measurability and $L^1$ membership for the nonlinear terms, without assuming Bochner measurability into $L^\infty$. [lem-se-power-time-integrability](item-lem-se-power-time-integrability)

[F4] Hölder's integral inequality applies to nonnegative measurable time functions, including its $1,\infty$ endpoint. [math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals)

[F5] The assumed Axiom of Choice supplies the choice hypotheses carried by these inputs. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)



**Given:** The domain, parameters, functions and norms in the Statement.

**Goal:** Establish Bochner integrability and both displayed estimates.

1.1 For $w\in\{u,v,v-u\}$ put $A_w(t)=\|w(t)\|_{L^\infty(\Omega)}$, $a_w=\|A_w\|_{L^4(0,T)}$ and $B_w=\sup_{t\in[0,T]}\|w(t)\|_{H^1}$. The compatible representative convention makes $A_w$ measurable and finite almost everywhere. The domain and norm hypotheses match [F3], so $g(u)$ and $g(v)$ are strongly measurable and integrable as $H^1_0$-valued functions; their difference is integrable as well. [given, F1, F3, F5]

2.1 Apply [F4] to $A_v^{m-1}$ and $1$ with reciprocal exponents $(m-1)/4$ and $(5-m)/4$. At $m=5$ the second exponent is $\infty$. Thus $\int_0^T A_v^{m-1}\,dt\le T^{(5-m)/4}a_v^{m-1}$. Using the sharp pointwise-in-time growth estimate in [F2] and $a_v,B_v\le\|v\|_{X_T}$ gives the first displayed inequality. [F2, F4, step 1.1, algebra]

3.1 Let $h=v-u$. The energy difference bound in [F2], applied at almost every time, is bounded by $C[(A_v^{m-1}+A_u^{m-1})B_h+(A_v^{m-2}+A_u^{m-2})(B_v+B_u)A_h]$. The first part integrates by step 2.1. Repeated Hölder applied to the second part gives $\int_0^T A_w^{m-2}A_h\,dt\le T^{(5-m)/4}a_w^{m-2}a_h$ for $w=u,v$: the three reciprocal exponents are $(m-2)/4$, $1/4$ and $(5-m)/4$, with the last factor in $L^\infty$ when $m=5$. [given, F2, F4, step 1.1, step 2.1]

4.1 Bound each $a_w$ and $B_w$ by $\|w\|_{X_T}$. For nonnegative $x,y$, $x^{m-2}y+xy^{m-2}\le x^{m-1}+y^{m-1}$, so the mixed terms from step 3.1 are absorbed into the displayed difference bound after enlarging $C$. The constant depends only on $m$ and $|\lambda|$, and $(5-m)/4=0$ for $m=5$. [step 3.1, F1, algebra] ∎

## Source notes

The original article is cited for attribution of the estimates in Proposition 3.9. The proof uses the separately supplied local polynomial and time-integrability results and Hölder's inequality.
