---
id: thm-minkowski-finite
kind: theorem
title: "Minkowski's inequality for finite sums (rational exponent)"
status: draft
origin: session
deps: [thm-holder-finite, def-finite-sum, lem-finite-sum-laws, def-rational-power, lem-rational-power-laws, lem-triangle-inequality-finite, lem-of-triangle-inequality, lem-of-abs-value, def-abs-value, def-rat-operations, def-rat-order, def-rationals, thm-rat-ordered-field, cor-of-one-positive, thm-nth-roots-exist, def-ordered-field, lem-of-sign-rules, lem-of-inverse-positive, lem-of-add-order]
justified_by: []
aliases: []
landmark: true
short: "$\\|a+b\\|_p \\le \\|a\\|_p + \\|b\\|_p$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Minkowski inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Minkowski_inequality"
    - title: "Hölder's inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/H%C3%B6lder%27s_inequality"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$, let $a_0, \dots, a_{n-1}$ and $b_0, \dots, b_{n-1}$ be
reals, and let $p \in \mathbb{Q}$ with $p \ge 1$ ([[def-rat-order]]). Then

$$\Big(\sum_{k<n}|a_k + b_k|^{p}\Big)^{1/p} \;\le\; \Big(\sum_{k<n}|a_k|^{p}\Big)^{1/p} + \Big(\sum_{k<n}|b_k|^{p}\Big)^{1/p}.$$

All exponents appearing are positive rationals, so every power is defined for a
nonnegative base by [[def-rational-power]] and its supplementary clause
$0^{r} = 0$.

**The conjugate exponent is rational exactly because $p$ is.** For $p > 1$ the
proof runs through Hölder with $q = p/(p-1)$, and a quotient of rationals with
nonzero denominator is a rational ([[def-rat-operations]]). Had $p$ been an
arbitrary real, $q$ would still be a real, but $|a_k|^{p}$ would already be
undefined: the whole statement lives inside the rational exponents built on this
page, as the closing remark of the page explains.

**On the case $p = 1$.** It reads $\sum_{k<n}|a_k+b_k| \le \sum_{k<n}|a_k| + \sum_{k<n}|b_k|$
and follows by summing the two-term triangle inequality
([[lem-of-triangle-inequality]]) termwise. It is not literally the finite-sum
triangle inequality [[lem-triangle-inequality-finite]], which compares
$\big|\sum_{k<n} c_k\big|$ with $\sum_{k<n}|c_k|$ for one list; combining the two
at $p = 1$ gives the familiar
$\big|\sum_{k<n}(a_k+b_k)\big| \le \sum_{k<n}|a_k| + \sum_{k<n}|b_k|$.

## Facts & Assumptions

**Given:** A natural $n$, reals $a_0, \dots, a_{n-1}$ and $b_0, \dots, b_{n-1}$, and a rational $p \ge 1$. Write $S := \sum_{k<n}|a_k+b_k|^{p}$, $U := \big(\sum_{k<n}|a_k|^{p}\big)^{1/p}$, $V := \big(\sum_{k<n}|b_k|^{p}\big)^{1/p}$, and $c_k := |a_k+b_k|^{\,p-1}$ when $p > 1$.

[L1] Hölder's inequality ([[thm-holder-finite]]): for conjugate rationals $p, q > 1$, $\sum_{k<n}|x_k y_k| \le \big(\sum_{k<n}|x_k|^{p}\big)^{1/p}\big(\sum_{k<n}|y_k|^{q}\big)^{1/q}$.

[L2] Laws of finite sums ([[lem-finite-sum-laws]], [[def-finite-sum]]): additivity, scaling, monotonicity, and the fact that a sum of nonnegative terms is nonnegative.

[L3] Rational power laws ([[lem-rational-power-laws]], [[def-rational-power]], [[thm-nth-roots-exist]]): for $u > 0$ and rationals $r, s$: $u^{r} > 0$, $u^{r+s} = u^{r}u^{s}$, $\big(u^{r}\big)^{s} = u^{rs}$, $u^{1} = u$ and $u^{-r} = \big(u^{r}\big)^{-1}$; and $0^{r} = 0$ for every rational $r > 0$.

[L4] Absolute values ([[lem-of-abs-value]], [[def-abs-value]], [[lem-of-triangle-inequality]]): $|x| \ge 0$, $|xy| = |x||y|$, and $|x+y| \le |x| + |y|$.

[L5] Rational arithmetic ([[def-rat-operations]], [[def-rationals]], [[def-rat-order]]), carried out in the totally ordered field $\mathbb{Q}$ ([[thm-rat-ordered-field]], which is what makes the order comparisons below legitimate, and which supplies totality, compatibility with addition and closure of the positives under multiplication but NOT $1 > 0$; that is [[cor-of-one-positive]], valid in $\mathbb{Q}$ because $\mathbb{Q}$ is an ordered field): for rational $p > 1$ one has $p - 1 > 0$ and, since $1 > 0$, also $p > p - 1 > 0$, so the number $q := p/(p-1)$ is a rational with $q > 1$, $\frac1p + \frac1q = 1$, $(p-1)q = p$ and $1 - \frac1q = \frac1p$.

[L6] Order arithmetic: [[lem-of-add-order]] and [[lem-of-sign-rules]] state adding inequalities and scaling by a positive element for the STRICT order only, so the nonstrict forms used below (adding two $\le$, and scaling a $\le$ by a nonnegative element) are those statements together with the case of equality, which is settled by trichotomy ([[def-ordered-field]]); and the inverse of a positive element is positive ([[lem-of-inverse-positive]], claim 1).

## Proof

**Proof technique:** direct.

1.1 Every quantity is defined and nonnegative: $|a_k + b_k|^{p}$, $|a_k|^{p}$ and $|b_k|^{p}$ are nonnegative because $p > 0$, hence so are $S$, $U$ and $V$. [L2, L3, L4]

1.2 The case $p = 1$: summing the two-term triangle inequality termwise and using monotonicity and additivity gives $\sum_{k<n}|a_k+b_k| \le \sum_{k<n}\big(|a_k| + |b_k|\big) = \sum_{k<n}|a_k| + \sum_{k<n}|b_k|$, and since $x^{1/1} = x$ this is exactly the assertion at $p = 1$. [L2, L3, L4]

1.3 The case $S = 0$: the left-hand side is $0^{1/p} = 0$, which is at most the nonnegative right-hand side. [L2, L3]

2.1 Assume from now on $p > 1$ and $S > 0$, and put $q := p/(p-1)$, a rational with $q > 1$ conjugate to $p$, so that $(p-1)q = p$ and $1 - \frac1q = \frac1p$. [step 1.1, step 1.2, step 1.3, L5]

3.1 Splitting each term: for $u \ge 0$ one has $u^{p} = u^{1 + (p-1)} = u \cdot u^{\,p-1}$, valid for $u > 0$ by the addition law and for $u = 0$ because both sides are $0$; applying this with $u = |a_k+b_k|$ and then the triangle inequality, multiplied by the nonnegative factor $c_k = |a_k+b_k|^{\,p-1}$, gives $|a_k+b_k|^{p} \le \big(|a_k| + |b_k|\big) c_k = |a_k| c_k + |b_k| c_k$ for every $k < n$. [step 2.1, L3, L4, L6]

3.2 The auxiliary list has $q$-th power sum $S$: $c_k^{\,q} = \big(|a_k+b_k|^{\,p-1}\big)^{q} = |a_k+b_k|^{(p-1)q} = |a_k+b_k|^{p}$ for $|a_k+b_k| > 0$ by the iterated-power law, and both sides are $0$ when $a_k + b_k = 0$; hence $\sum_{k<n}|c_k|^{q} = S$. [step 2.1, L3, L4]

4.1 Summing the termwise bound: $S \le \sum_{k<n}|a_k| c_k + \sum_{k<n}|b_k| c_k$. [step 3.1, L2]

4.2 Applying Hölder to the pairs $(a_k, c_k)$ and to $(b_k, c_k)$, and using $|a_k c_k| = |a_k| c_k$ since $c_k \ge 0$: $\sum_{k<n}|a_k| c_k \le U\,S^{1/q}$ and $\sum_{k<n}|b_k| c_k \le V\,S^{1/q}$. [step 3.2, step 2.1, L1, L4]

5.1 Combining, $S \le (U + V)\,S^{1/q}$. [step 4.1, step 4.2, L6]

6.1 Dividing by $S^{1/q} > 0$, which is legitimate because $S > 0$, and computing $S \big(S^{1/q}\big)^{-1} = S^{1}S^{-1/q} = S^{\,1 - 1/q} = S^{1/p}$, we obtain $S^{1/p} \le U + V$; together with the case $p = 1$ and the case $S = 0$ this proves the inequality for every rational $p \ge 1$. [step 5.1, step 2.1, step 1.2, step 1.3, L3, L5, L6] ∎
