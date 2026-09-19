---
id: ex-continuous-kernel-integral-operator-is-compact-on-c-of-an-interval
kind: example
title: Continuous kernel integral operator is compact on c of an interval
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-compact-linear-operator, def-bounded-linear-operator, def-operator-norm, def-metric-space, def-metric-convergence, def-metric-compactness, thm-metric-compactness-equivalences, def-countable-choice, def-dependent-choice, lem-dependent-choice-implies-countable-choice, thm-arzela-ascoli-for-real-ck, cor-equicontinuous-bounded-sequence-has-a-uniformly-convergent-subsequence, def-equicontinuity-and-boundedness-in-ck, thm-heine-cantor-metric, thm-continuous-implies-integrable, thm-linearity-of-the-integral, lem-uniform-integral-error-bound, thm-heine-borel-rn, lem-metrics-on-rn, lem-complex-conjugation-and-modulus-laws, def-complex-conjugate-real-imaginary-part-and-modulus, def-continuous-map-top, thm-extreme-value-metric, def-bounded-set, def-complete-ordered-field, def-continuity-real, def-metric-ball, def-metric-bounded-diameter, def-sequence, lem-index-map-grows]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.1 p.71, Lemma 3.4"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — §4.2, integral operators with continuous kernels"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
---

## Example

Assume the Axiom of Dependent Choice ([[def-dependent-choice]]). Let $a<b$ be
reals, let $\mathbb K$ be $\mathbb R$ or $\mathbb C$, and let
$k:[a,b]\times[a,b]\to\mathbb K$ be continuous
([[def-continuity-real]], [[def-continuous-map-top]]). Write $C([a,b],\mathbb K)$
for the continuous $\mathbb K$-valued functions on $[a,b]$ with the supremum
norm $\|f\|_\infty=\sup_{x\in[a,b]}|f(x)|$ and the metric
$d_\infty(f,g)=\|f-g\|_\infty$ ([[def-metric-space]]), and define

$$(\mathcal Kf)(x):=\int_a^b k(x,y)f(y)\,dy\qquad(x\in[a,b]),$$

the integral being the Riemann integral in the real case; in the complex case
this formula means
$\int_a^b h:=\int_a^b\operatorname{Re}h+i\int_a^b\operatorname{Im}h$,
where both real Riemann integrals exist for continuous $h$
([[thm-continuous-implies-integrable]]). Then $\mathcal K$ is a compact operator
on $C([a,b],\mathbb K)$ ([[def-compact-linear-operator]]).

## Facts & Assumptions

[A1] The square $[a,b]\times[a,b]$ is a compact subset of $\mathbb R^2$ ([[thm-heine-borel-rn]], [[lem-metrics-on-rn]]); a continuous function on a compact metric space is uniformly continuous ([[thm-heine-cantor-metric]]) and bounded, and a continuous real function on a nonempty compact space attains a maximum ([[thm-extreme-value-metric]], [[def-bounded-set]], [[def-complete-ordered-field]]).

[A2] For a real continuous $g$ on $[a,b]$ the Riemann integral exists and the uniform estimate $|\int_a^b u-\int_a^b v|\le\eta(b-a)$ holds whenever $|u-v|\le\eta$ ([[thm-continuous-implies-integrable]], [[lem-uniform-integral-error-bound]]); complex-valued functions use the real-and-imaginary-part Riemann convention in the example, and the complex modulus satisfies the triangle inequality $|z+w|\le|z|+|w|$, $|\operatorname{Re}z|\le|z|$ and $|\operatorname{Im}z|\le|z|$ ([[lem-complex-conjugation-and-modulus-laws]], [[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[A3] For a nonempty compact metric space $K$, the closure in the supremum metric of a family $F\subseteq C(K,\mathbb R)$ is compact if and only if $F$ is equicontinuous and pointwise bounded ([[thm-arzela-ascoli-for-real-ck]]); under $\mathrm{AC}_\omega$ and DC every equicontinuous pointwise bounded sequence in $C(K,\mathbb R)$ has a uniformly convergent subsequence ([[cor-equicontinuous-bounded-sequence-has-a-uniformly-convergent-subsequence]], [[def-equicontinuity-and-boundedness-in-ck]]). Under the same two hypotheses, compactness, sequential compactness and "complete and totally bounded" agree for metric spaces ([[thm-metric-compactness-equivalences]]).

[A4] $\mathrm{DC}$ implies $\mathrm{AC}_\omega$ ([[lem-dependent-choice-implies-countable-choice]], [[def-countable-choice]], [[def-dependent-choice]]), and a countable selection of approximating elements of a closure uses $\mathrm{AC}_\omega$ ([[def-metric-compactness]], [[def-metric-convergence]], [[def-sequence]], [[lem-index-map-grows]]).

[A5] $\mathcal K$ is compact exactly when the closure of the image of the closed unit ball is compact ([[def-compact-linear-operator]], [[def-metric-bounded-diameter]], [[def-metric-ball]]); and $\|Tf\|\le\|T\|\,\|f\|$ for a bounded linear $T$ ([[def-bounded-linear-operator]], [[def-operator-norm]]).

## Verification

**Proof technique:** direct.

**Given:** $\mathrm{DC}$, reals $a<b$, $\mathbb K\in\{\mathbb R,\mathbb C\}$, a continuous kernel $k$ on the square, the induced operator $\mathcal K$ on $C([a,b],\mathbb K)$ with the supremum norm, and $M:=\sup\{|k(s,t)|:s,t\in[a,b]\}<\infty$.

1.1 For every $f\in C([a,b],\mathbb K)$ the function $\mathcal Kf$ is well defined and continuous, and $\|\mathcal Kf\|_\infty\le 2M(b-a)\|f\|_\infty$: for real scalars the sharper bound without the factor $2$ is the uniform integral estimate of [A2] applied to $y\mapsto k(x,y)f(y)$; for complex scalars the real and imaginary parts of the integrand are continuous, each has absolute value at most $M\|f\|_\infty$, and [A2] bounds each real integral by $M(b-a)\|f\|_\infty$, so the complex triangle inequality gives the displayed factor $2$. Continuity in $x$ follows from the uniform continuity of $k$ on the square and the same real-component estimates. Linearity follows componentwise from real Riemann-integral linearity ([[thm-linearity-of-the-integral]]), so this bound also makes $\mathcal K$ a bounded linear operator. [A1, A2, algebra]

2.1 For all $f$ and all $x,x'\in[a,b]$ one has $|\mathcal Kf(x)-\mathcal Kf(x')|\le2(b-a)\,\omega(x,x')\|f\|_\infty$, where $\omega(x,x')=\sup_{y\in[a,b]}|k(x,y)-k(x',y)|$ and $\omega(x,x')\to0$ as $|x-x'|\to0$ uniformly in $y$, by the uniform continuity of $k$ on the square; the factor $2$ covers the complex real-and-imaginary-part estimate and is harmless in the real case. In particular the family $F:=\{\mathcal Kf:\|f\|_\infty\le1\}$ is equicontinuous in the sense of [A3] and pointwise bounded with $|\mathcal Kf(x)|\le2M(b-a)$. [step 1.1, A1, A2, algebra]

3.1 In the real case $\mathbb K=\mathbb R$ the closure of $F$ in the supremum metric is compact by [A3] and [step 2.1], hence $\mathcal K$ is compact by [A5]. [step 2.1, A3, A5]

3.2 In the complex case every sequence $(f_j)$ with $\|f_j\|_\infty\le1$ has a subsequence for which $\mathcal Kf_j$ converges uniformly: the real functions $x\mapsto\operatorname{Re}\mathcal Kf_j(x)$ form an equicontinuous pointwise bounded sequence in $C([a,b],\mathbb R)$ by [step 2.1] and [A2], so by [A3] they have a uniformly convergent subsequence; within that subsequence the imaginary parts, which are again equicontinuous and pointwise bounded, have a further uniformly convergent subsequence; along that further subsequence $\mathcal Kf_j$ converges uniformly because the complex modulus is at most the sum of the moduli of the real and imaginary parts by [A2]. [step 2.1, A2, A3]

4.1 In the complex case the closure of $F$ is sequentially compact: given a sequence $(g_j)$ in the closure, [A4] chooses $f_j$ with $\|f_j\|_\infty\le1$ and $\|\mathcal Kf_j-g_j\|_\infty<1/(j+1)$ for every $j$, and [step 3.2] applied to $(f_j)$ gives a subsequence along which $\mathcal Kf_j$ converges, hence $g_j$ converges to the same limit; by [A3] the closure of $F$ is compact, and $\mathcal K$ is compact by [A5]. [step 3.2, A3, A4, A5]

5.1 In both cases $\mathbb K=\mathbb R$ and $\mathbb K=\mathbb C$ the operator $\mathcal K$ is compact, which is the assertion. [step 3.1, step 4.1] ∎
