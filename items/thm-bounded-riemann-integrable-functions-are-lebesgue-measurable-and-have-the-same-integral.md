---
id: thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
kind: theorem
title: "A bounded Riemann integrable function on a closed bounded interval is Lebesgue measurable and has the same integral"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-riemann-integrable-function-has-borel-darboux-envelopes, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, thm-ae-equality-preserves-measurability-on-complete-spaces, thm-the-lebesgue-integral-respects-almost-everywhere-equality, thm-lebesgue-measure-is-a-complete-measure, prop-closure-properties-of-measurable-functions-used-by-the-integral, prop-order-and-scalar-rules-for-the-nonnegative-integral, prop-the-nonnegative-integral-agrees-with-the-simple-integral, def-integral-of-a-nonnegative-simple-function, def-integrable-real-and-complex-functions-and-their-integrals, thm-lebesgue-measure-of-a-box-of-every-kind]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Version 5.0, Theorem 9.1"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral: An Introduction to Real Analysis, Theorem (5.52)"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
---

## Statement

Assume the Axiom of Countable Choice. Let $a<b$ and let $f:[a,b]\to\mathbb R$ be
bounded and Riemann integrable. Then $f$ is Lebesgue measurable on $[a,b]$ and
is integrable there, and its Lebesgue integral equals its Riemann integral:
$$\int_{[a,b]} f\,d\lambda_1=\int_a^b f(x)\,dx.$$

This is the point at which the completeness of Lebesgue measure is used
essentially: the proof obtains a Borel function equal to $f$ almost everywhere,
and measurability of $f$ itself is then a completeness statement.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, reals $a<b$, a bounded Riemann
integrable function $f:[a,b]\to\mathbb R$, its Riemann integral
$I:=\int_a^b f(x)\,dx$, and a real $B>0$ with $|f(x)|\le B$ on $[a,b]$.

[L1] The envelope lemma produces bounded Borel functions
$\varphi,\psi:[a,b]\to\mathbb R$ with $\varphi\le f\le\psi$ and
$$\int_{[a,b]}\varphi\,d\lambda_1 = I = \int_{[a,b]}\psi\,d\lambda_1.$$
([[lem-riemann-integrable-function-has-borel-darboux-envelopes]])

[L2] A nonnegative measurable function has integral $0$ exactly when it
vanishes almost everywhere.
([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]])

[L3] On a complete measure space, a function equal almost everywhere to a
measurable function is measurable.
([[thm-ae-equality-preserves-measurability-on-complete-spaces]])

[L4] Lebesgue measure on $\mathbb R$ is complete.
([[thm-lebesgue-measure-is-a-complete-measure]])

[L5] Two integrable functions that agree almost everywhere have the same
integral over every measurable set. 
([[thm-the-lebesgue-integral-respects-almost-everywhere-equality]])

[L6] If a real measurable function is bounded in absolute value by a nonnegative
integrable function, then its absolute value has finite integral; a measurable
real function is integrable exactly when the integral of its absolute value is
finite. ([[prop-closure-properties-of-measurable-functions-used-by-the-integral]],
[[prop-order-and-scalar-rules-for-the-nonnegative-integral]],
[[prop-the-nonnegative-integral-agrees-with-the-simple-integral]],
[[def-integral-of-a-nonnegative-simple-function]],
[[def-integrable-real-and-complex-functions-and-their-integrals]])

[L7] The interval $[a,b]$ is Lebesgue measurable with measure $b-a$.
([[thm-lebesgue-measure-of-a-box-of-every-kind]])

## Proof

**Proof technique:** direct.

1.1 By [L1], choose bounded Borel functions $\varphi,\psi$ on $[a,b]$ with [L1, L2]
$\varphi\le f\le\psi$ and both integrals equal to $I$. Then
$0\le \psi-\varphi$ and
$$\int_{[a,b]}(\psi-\varphi)\,d\lambda_1=0.$$
So [L2] gives $\psi=\varphi$ almost everywhere. Since $\varphi\le f\le\psi$,
the same null set yields $f=\varphi$ almost everywhere.

2.1 By [L4], the measure space $(\mathbb R,\mathcal L(\mathbb R),\lambda_1)$ is [step 1.1, L3, L4]
complete. The function $\varphi$ is measurable because it is Borel, so [L3]
applied to step 1.1 shows that $f$ is Lebesgue measurable.

3.1 The constant function $B\chi_{[a,b]}$ is a nonnegative simple measurable [step 2.1, L1, L6, L7]
function, and [L6] together with [L7] gives
$$\int_{[a,b]} B\chi_{[a,b]}\,d\lambda_1 = B(b-a)<+\infty.$$
Since step 2.1 makes $|f|$ measurable and $|f|\le B\chi_{[a,b]}$, [L6] yields
$$\int_{[a,b]}|f|\,d\lambda_1<+\infty.$$
Hence $f$ is Lebesgue integrable on $[a,b]$. The same estimate applies to
$\varphi$, because [L1] gives $|\varphi|\le B$.

4.1 Steps 1.1 and 3.1 show that $f$ and $\varphi$ are integrable and agree [step 1.1, step 3.1, L1, L5]
almost everywhere. Taking the measurable set $A=[a,b]$ in [L5] gives
$$\int_{[a,b]} f\,d\lambda_1=\int_{[a,b]}\varphi\,d\lambda_1.$$
By [L1], the right-hand side is $I=\int_a^b f(x)\,dx$. So the Lebesgue and
Riemann integrals of $f$ agree. ∎
