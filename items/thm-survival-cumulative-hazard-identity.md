---
id: thm-survival-cumulative-hazard-identity
kind: theorem
title: The continuous survival and cumulative-hazard identity
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-absolutely-continuous-function
  - def-countable-choice
  - def-dependent-choice
  - def-measure-with-density
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-parametric-survival-and-reliability
  - def-natural-logarithm
  - def-real-exponential-function-and-e
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - prop-measure-monotonicity
  - cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous
  - thm-c1-lipschitz-ac-bv-hierarchy
  - thm-chain-rule
  - thm-first-fundamental-theorem-of-calculus-for-l-one
  - thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions
  - thm-logarithm-derivative-and-integral
  - thm-integral-logarithm-is-unbounded
  - cor-mean-value-theorem
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - cor-integral-over-a-null-set-vanishes
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "NIST/SEMATECH Engineering Statistics Handbook, Chapter 8, §8.1.2.3, PDF pp. 15–16"
      url: "https://www.itl.nist.gov/div898/handbook/toolaids/pff/apr.pdf"
    - title: "Qiqing Yu, Survival Analysis (Lecture Notes), §2.1, PDF p. 10"
      url: "https://people.math.binghamton.edu/qyu/ftp/surv5.pdf"
    - title: "Lu Tian, STAT331 Unit 2: Likelihood Construction, Inference for Parametric Survival Distributions, §2.1, PDF pp. 1–4"
      url: "https://web.stanford.edu/~lutian/coursepdf/unit2.pdf"
---

## Statement

Assume Countable Choice and Dependent Choice. Let $T$ be a nonnegative event
time with a finite-valued density $f$ relative to Lebesgue measure, so
$P_T(A)=\int_A f(u)\,du$ for every Borel $A\subseteq[0,\infty)$, and assume
$S_T(0)=1$. Let
$$\tau_*:=\inf\{t\ge0:S_T(t)=0\},$$
with $\tau_*=+\infty$ if this set is empty. For every $0\le t<\tau_*$,
$$S_T(t)=\exp\!\left(-\int_0^t\frac{f(u)}{S_T(u)}\,du\right).$$
If $\tau_*<\infty$, the improper cumulative hazard tends to $+\infty$ as
$t\uparrow\tau_*$; extending it by $+\infty$ for $t\ge\tau_*$ gives the same
identity there with the convention $e^{-\infty}=0$. The density-hazard formula
is asserted only where $S_T>0$.

## Facts & Assumptions

**Given:** Countable Choice, Dependent Choice, a nonnegative finite-valued density $f$, and its event-time law $P_T=f\,du$.

[F1] The density law is the measure $f\,du$; $S_T(t)=P_T(T>t)$, $S_T(0)=1$, and $S_T$ is nonincreasing because $\{T>t\}$ decreases with $t$. [[def-measure-with-density]], [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], [[def-parametric-survival-and-reliability]], [[prop-measure-monotonicity]]

[F2] For $f\in L^1[0,t]$, $I_f(x)=\int_0^x f(u)\,du$ is differentiable a.e. with derivative $f$. [[thm-first-fundamental-theorem-of-calculus-for-l-one]]

[F3] The indefinite integral of an $L^1$ function is absolutely continuous. [[cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous]]

[F4] On $(0,\infty)$, $\log'(x)=1/x$ and $\log b-\log a=\int_a^b du/u$. Thus $\log$ is increasing by the mean value theorem; since it is unbounded below, $\log x\to-\infty$ as $x\downarrow0$. [[thm-logarithm-derivative-and-integral]], [[thm-integral-logarithm-is-unbounded]], [[cor-mean-value-theorem]]

[F5] At differentiability points, the ordinary chain rule gives $(\log\circ S_T)'=S_T'/S_T$. [[thm-chain-rule]]

[F6] If $G$ is absolutely continuous on a compact interval, then $G(t)-G(0)=\int_0^tG'(u)\,du$. [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]

[F7] Absolutely continuous functions are continuous. [[thm-c1-lipschitz-ac-bv-hierarchy]]

[F8] Under Countable Choice, every singleton has Lebesgue measure zero, and a nonnegative measurable density integrates to zero over that null set. [[thm-lebesgue-measure-of-a-box-of-every-kind]], [[cor-integral-over-a-null-set-vanishes]]

[F9] Every interval in $\mathbb R$ is Lebesgue measurable. [[thm-lebesgue-measure-of-a-box-of-every-kind]]

[F10] The pointwise product of measurable real-valued functions is measurable. [[thm-arithmetic-and-lattice-operations-preserve-measurability]]

[F11] For every $x>0$, $\exp(\log x)=x$; also $\log 1=0$, since $\exp(0)=1$ by its power-series definition and $\log(\exp y)=y$. [[def-natural-logarithm]], [[def-real-exponential-function-and-e]]

[A1] Countable Choice is used by [F2] to obtain the a.e. derivative of the indefinite density integral, by [F8] for the singleton null-set formula, and to select the approximating zero times in step 4.1. [[def-countable-choice]]

[A2] Dependent Choice, together with Countable Choice, is used by [F6] to integrate the a.e. derivative of an absolutely continuous function. [[def-dependent-choice]]

## Proof

**Proof technique:** direct.

1.1 Since $T\ge0$ and $S_T(0)=1$, $P_T(T=0)=0$. The density law gives $P_T(T\le x)=\int_{[0,x]}f(u)\,du$; [F8] makes both endpoint integrals zero, so this equals $\int_0^x f(u)\,du$. Therefore $S_T(x)=1-\int_0^x f(u)\,du$ for every $x\ge0$. This integral is at most $1$, so $f\in L^1[0,x]$ for each $x>0$; [F3] then makes $S_T$ absolutely continuous on each compact interval. [A1, F1, F3, F8, given]

1.2 The identity is immediate at $t=0$, so fix $0<t<\tau_*$. The survival function is nonincreasing and positive on $[0,t]$, so $S_T(u)\ge S_T(t)>0$ there. For every $a\in\mathbb R$, the set $\{u\in[0,t]:S_T(u)>a\}$ is downward closed in $[0,t]$, hence is empty, all of $[0,t]$, or an interval with one endpoint at $0$; each is Lebesgue measurable by [F9]. Since the upper rays generate the Borel sigma-algebra, $S_T$ is Lebesgue measurable on $[0,t]$. The reciprocal map is continuous on $[S_T(t),1]$, so its inverse images of Borel sets are Borel; the preimage identity then makes $1/S_T$ measurable. [F10] gives measurability of the product $f/S_T$. Consequently $$\int_0^t\frac{f(u)}{S_T(u)}\,du\le\frac{1}{S_T(t)}\int_0^t f(u)\,du<\infty.$$ Thus $\Lambda_T(x):=\int_0^x f(u)/S_T(u)\,du$ is absolutely continuous on $[0,t]$ by [F3]. [given, F1, F3, F9, F10, algebra]

2.1 By [F2] and step 1.1, $S_T'=-f$ almost everywhere on $[0,t]$. For $x,y\in[S_T(t),1]$, [F4] gives $$|\log x-\log y|\le\frac{|x-y|}{S_T(t)}.$$ This Lipschitz bound and absolute continuity of $S_T$ show directly from the finite disjoint-interval definition that $\log\circ S_T$ is absolutely continuous. Applying [F2] to the integrable function $f/S_T$ gives $\Lambda_T'=f/S_T$ almost everywhere. At almost every point where $S_T'$ exists, [F5] yields $(\log S_T)'=S_T'/S_T=-f/S_T=-\Lambda_T'$. [A1, F2, F3, F4, F5, step 1.1]

3.1 Applying [F6] to $\log\circ S_T$ on $[0,t]$ gives $$\log S_T(t)-\log S_T(0)=-\int_0^t\frac{f(u)}{S_T(u)}\,du.$$ Since $S_T(0)=1$ and [F11] gives $\log 1=0$, exponentiating and using [F11] yields the identity for $0<t<\tau_*$; the case $t=0$ was handled in step 1.2. [A1, A2, F6, F11, step 1.2, step 2.1, algebra]

4.1 If $\tau_*<\infty$, continuity from [F7] makes the zero set $Z:=\{t\ge0:S_T(t)=0\}$ closed. Since $Z$ is nonempty and bounded below, $\tau_*:=\inf Z$ belongs to $Z$: for every $n\in\mathbb N$ choose $z_n\in Z$ with $\tau_*\le z_n<\tau_*+1/(n+1)$, so $z_n\to\tau_*$ and continuity gives $S_T(\tau_*)=0$. Nonincreasing survival [F1] then gives $S_T(t)=0$ for $t\ge\tau_*$. Step 3.1 gives $\Lambda_T(t)=-\log S_T(t)$ for $t<\tau_*$. Since $S_T(t)\to0$ by continuity at $\tau_*$ and [F4], this tends to $+\infty$ as $t\uparrow\tau_*$. The stated extended convention therefore gives $S_T(t)=e^{-\Lambda_T(t)}$ also for $t\ge\tau_*$. [A1, F1, F4, F7, given, step 1.1, step 3.1, algebra]

5.1 The identity holds throughout the positive-survival interval and at a finite terminal endpoint under the stated extended convention. [step 3.1, step 4.1] ∎
