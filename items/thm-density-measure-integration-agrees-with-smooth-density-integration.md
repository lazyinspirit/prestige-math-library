---
id: thm-density-measure-integration-agrees-with-smooth-density-integration
title: "Measurable integration extends smooth density integration"
kind: theorem
status: draft
origin: pipeline
deps: ["thm-density-measure-is-independent-of-the-chart-gluing", "thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure", "lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals", "thm-increasing-simple-approximation-of-a-nonnegative-measurable-function", "thm-monotone-convergence-for-the-integral", "thm-density-integration-is-defined-without-an-orientation", "lem-chart-supported-coefficients-have-well-defined-riemann-integrable-half-space-extensions", "def-integrable-real-and-complex-functions-and-their-integrals", "thm-the-lebesgue-integral-respects-almost-everywhere-equality", "def-integral-of-a-compactly-supported-smooth-density", "def-completion-of-a-measure-space", "thm-completion-of-a-measure-space", "cor-integral-over-a-null-set-vanishes", "def-countable-choice", "cor-additivity-of-the-nonnegative-lebesgue-integral", "prop-order-and-scalar-rules-for-the-nonnegative-integral"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Folland, Real Analysis, second edition, \u00a711.4 pp.361\u2013363; Theorems 2.14\u20132.15 pp.50\u201351"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
proof_strategy: direct
---

## Statement

For a nonnegative Borel $f:M\to[0,\infty]$ and any chart partition $(x_i,\varphi_i)$,
$$\int_M f\,d\mu_r=\sum_i\int_{x_i(U_i)}(\varphi_i f r)_{x_i}\,d\lambda_n,$$
with values in $[0,\infty]$ and all zero-times-infinity products equal to zero. For positive smooth $r$ and compactly supported smooth real $f$, this equals the smooth density integral $\int_Mfr$. For real or complex $f\in L^1(\mu_r)$ the same chart formula holds, interpreted by real and imaginary positive and negative parts; the series converges absolutely. On the completion, nonnegative measurable functions and real or complex $L^1$ functions have Borel representatives modulo completed null sets, and the formulas are applied to those representatives.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$. Manifolds are Hausdorff, second countable and smooth, with boundary allowed; $n=0$ is allowed unless excluded. Densities are pointwise Borel, $0\cdot\infty=0$, and $\lambda_0(\mathbb R^0)=1$. Borel-first integration, signed absolute convergence, smooth compact support and completion.

[F1] [[thm-density-measure-is-independent-of-the-chart-gluing]]: The intrinsic measure equals each gluing construction and has the chart-restriction formula.

[F2] [[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]]: Every nonnegative measurable function is the increasing limit of nonnegative simple functions.

[F3] [[thm-monotone-convergence-for-the-integral]]: Nonnegative increasing pointwise limits commute with integration.

[F4] [[def-integral-of-a-compactly-supported-smooth-density]]: The smooth compact-support integral is the finite sum of Riemann integrals of zero-extended weighted chart coefficients; in dimension zero it is the finite scalar sum.

[F5] [[lem-chart-supported-coefficients-have-well-defined-riemann-integrable-half-space-extensions]]: A smooth chart coefficient with compact support has bounded Riemann-integrable zero extension, including boundary charts.

[F6] [[lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals]]: A bounded Borel Riemann-integrable coefficient on a nondegenerate n-box has equal Lebesgue and Riemann integrals.

[F7] [[def-integrable-real-and-complex-functions-and-their-integrals]]: Absolute integrability permits real and imaginary positive/negative part integrals.

[F8] [[def-completion-of-a-measure-space]]: A completed measurable set differs from a Borel set inside a Borel null set.

[F9] [[thm-completion-of-a-measure-space]]: The completion is a complete measure extending the Borel measure under countable choice.

[F10] [[cor-integral-over-a-null-set-vanishes]]: Nonnegative integrals over measurable null sets vanish.

[F11] [[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]: Integrable functions equal almost everywhere have equal integrals over every measurable set.

[F12] [[cor-additivity-of-the-nonnegative-lebesgue-integral]]: The nonnegative integral is additive, including infinite values.

[F13] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: Nonnegative integration is homogeneous and monotone.

## Proof

1.1 For $f=\mathbf1_E$, with $E$ Borel, the left side is $\mu_r(E)$ and the right side is its defining chart sum. For a nonnegative simple function $s=\sum_{k=1}^m a_k\mathbf1_{E_k}$ on disjoint Borel sets, finite additivity and homogeneity of the nonnegative integral give the formula term by term; a finite sum interchanges with the nonnegative chart sum. Coefficients $a_k=0$ contribute zero even when $\mu_r(E_k)=\infty$. [F1, given, F12, F13]

2.1 Take nonnegative simple Borel $s_m\uparrow f$. For each chart, $s_m(x_i^{-1}(u))q_i(u)\uparrow f(x_i^{-1}(u))q_i(u)$, where $q_i=(\varphi_i\circ x_i^{-1})r_{x_i}$. This also holds if $q_i=\infty$: a positive limiting value of $f$ forces an eventually positive $s_m$, whereas a zero limit makes every $s_m$ zero. Monotone convergence on $M$ and each chart, followed by $\sup_m\sum_i a_{mi}=\sum_i\sup_ma_{mi}$ for increasing nonnegative $a_{mi}$, proves the formula. The last identity follows by taking finite chart sums first and then their supremum. [F2, F3, step 1.1]

3.1 For real or complex Borel $f$ with $\int|f|\,d\mu_r<\infty$, apply the nonnegative formula to $|f|$. It gives $\sum_i\int |f\circ x_i^{-1}|q_i<\infty$, so every chart term is integrable and the sum of their absolute integrals is finite. Apply the formula separately to $f^+,f^-$, or to the four positive/negative real/imaginary parts. Subtraction now involves only finite numbers and produces the asserted absolutely convergent series. Where $q_i=\infty$ and $f\ne0$ the weighted absolute integrand $h_i$ is infinite only on a Lebesgue-null set: for $E_i=\{h_i=\infty\}$ and every integer $m\ge1$, $m\lambda_n(E_i)\le\int h_i<\infty$, forcing $\lambda_n(E_i)=0$; one may set the signed coefficient to zero there. This leaves each part integral unchanged. [F7, F10, step 2.1, F13]

3.2 Let $f\ge0$ be measurable for the completed measure. Choose increasing completed-simple $s_m\uparrow f$. For each of the countably many level sets in these simple functions, the completion definition supplies a Borel replacement with symmetric difference contained in a Borel null set. Countable choice selects these replacements; their exceptional Borel sets have a null union $N$. The replacement simple functions $t_m$ are nonnegative Borel and equal $s_m$ off $N$. Put $u_m=\max_{k\le m}t_k$ off $N$ and zero on $N$. Then $u_m$ is increasing Borel, and $g=\sup_m u_m$ is Borel and equals $f$ off $N$. Applying monotone convergence to $u_m$, whose Borel and completed integrals agree by the extension property, gives equality of the Borel and completed integrals of $g$. The null-set integral property gives $\int f\,d\overline\mu_r=\int g\,d\mu_r$. Thus the chart formula for $g$ computes the completed integral, including infinity. [F2, F3, F8, F9, F10, step 2.1]

4.1 Now let $r$ be positive smooth and $f$ smooth with compact support $K$. Local finiteness of the partition supports gives a finite subfamily meeting $K$: finitely many neighborhoods witnessing local finiteness cover $K$. Each coefficient of $\varphi_i fr$ is smooth with compact support inside its chart. Its zero extension is bounded and Riemann integrable by the chart extension result; it is Borel because it is smooth on a Borel chart image and zero elsewhere. A bounding nondegenerate box and the local Darboux bridge identify its Riemann and Lebesgue integrals. There are only finitely many terms; their absolute integrals are finite by boundedness and bounded support. The nonnegative formula of step 2.1 applied to $|f|$ therefore shows $f$ is integrable, so step 3.1 applies and the sum equals the defining smooth integral. [F4, F5, F6, step 2.1, step 3.1]

5.1 In dimension zero, compact sets are finite: the singleton open cover has a finite subcover. The preceding smooth comparison is then the same finite sum $\sum_{p\in K}f(p)r(p)$ in both definitions. Empty $K$, the zero function, and empty $M$ all give zero. A singleton of weight one integrates $f$ to its value. [F1, F4, step 4.1]

6.1 For completed real or complex $L^1$ functions apply the same construction to each nonnegative component and subtract, redefining on the exceptional Borel null set to get a finite-valued Borel representative. Its absolute integral is unchanged, so step 3.1 applies. Two Borel representatives differ inside a Borel null set $N$; the nonnegative chart formula for $\mathbf1_N$ makes each chart contribution of $N$ zero. Null-set invariance, and for $L^1$ also almost-everywhere equality, show independence of every representative choice. [F7, F10, F11, step 2.1, step 3.1, step 3.2] ∎
