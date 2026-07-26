---
id: lem-power-over-geometric-null
kind: lemma
title: "For every $p > 0$ and every positive rational $\\alpha$, $n^{\\alpha}/(1+p)^n \\to 0$"
status: published
origin: session
deps: [def-rational-power, lem-rational-power-monotone, lem-rational-power-laws, def-integer-power, lem-power-laws, lem-power-monotone, lem-bernoulli-inequality, thm-nth-roots-exist, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-naturals-positive, lem-of-sign-rules, lem-of-add-order, lem-of-abs-value, prop-of-multiply-inequalities, def-real-limit, def-sequence, def-nat-order, thm-nat-linear-order, def-ordered-field]
justified_by: []
forward_refs: [ex-standard-limits-worked]
aliases: []
landmark: false
short: "$n^{\\alpha}/(1+p)^n \\to 0$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Bernoulli's inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bernoulli%27s_inequality"
    - title: "Exponential growth (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponential_growth"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.20)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $p \in \mathbb{R}$ with $p > 0$ and let $\alpha \in \mathbb{Q}$ with
$\alpha > 0$. Write $\iota(n) := n \cdot 1_{\mathbb{R}}$ for the canonical
natural, with $\iota(0) := 0$, and let

$$w_k \;:=\; \frac{\iota(k)^{\alpha}}{(1+p)^{k}} \qquad (k \in \mathbb{N}),$$

the numerator being a rational power ([[def-rational-power]]) and the denominator
an integer power ([[def-integer-power]]). Then $w_k \to 0$
([[def-real-limit]]).

**Every term is defined, including the one at $k = 0$.** The supplementary clause
of [[def-rational-power]] gives $0^{\alpha} = 0$ for rational $\alpha > 0$, and
$(1+p)^0 = 1$, so $w_0 = 0$. No index shift is therefore needed here, in contrast
with the two root lemmas earlier on this page, where the *exponent* is the index.

In words: a fixed power of $n$ is beaten by any geometric sequence of ratio
$> 1$, however small the excess $p$ and however large the exponent $\alpha$.

## Facts & Assumptions

**Given:** A real $p > 0$ and a rational $\alpha > 0$; the base $\beta := 1 + p > 1$; the canonical naturals $\iota(n) = n \cdot 1_{\mathbb{R}}$ with $\iota(0) = 0$; and $w_k = \iota(k)^{\alpha}/\beta^{k}$.

[L1] Rational powers: $x^r$ is defined and positive for real $x > 0$ and rational $r$, and $0^{r} = 0$ for rational $r > 0$; the integer power $x^{m}$ is the rational power at exponent $m$; $(xy)^{r} = x^{r} y^{r}$, which persists for $x, y \ge 0$ when $r > 0$; $x^{-r} = 1/x^{r}$; and $(x^{r})^{s} = x^{rs}$ ([[def-rational-power]], [[lem-rational-power-laws]], [[def-integer-power]], [[thm-nth-roots-exist]]).

[L2] Monotonicity of rational powers: for rational $t > 0$, $x > 1$ implies $x^{t} > 1$; and for rational $t > 0$, $0 < x < y$ implies $x^{t} < y^{t}$ ([[lem-rational-power-monotone]]).

[L3] Integer powers: $x > 0$ implies $x^{m} > 0$, and $x^{m} x^{m'} = x^{m+m'}$, $(x^{m})^{m'} = x^{m m'}$ for integer exponents with $x \ne 0$ ([[lem-power-monotone]], [[lem-power-laws]]).

[L4] Bernoulli's inequality: $(1+x)^{n} \ge 1 + \iota(n) x$ for real $x \ge -1$ and natural $n$ ([[lem-bernoulli-inequality]]).

[L5] Canonical naturals: $\iota(n) > 0$ and invertible for $n \ge 1$, and $\iota$ is strictly increasing ([[lem-of-naturals-positive]], [[def-nat-order]], [[thm-nat-linear-order]]).

[L6] Reciprocal Archimedean property: for every real $\eta > 0$ there is a natural $m \ge 1$ with $1/m < \eta$; and $0 < x < y$ gives $0 < 1/y < 1/x$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]]).

[L7] Order arithmetic: [[lem-of-add-order]] and claim 4 of [[lem-of-sign-rules]] state the strict forms, that inequalities may be translated and added and that multiplication by a positive element preserves $<$; adjoining the case of equality gives the nonstrict forms used below. Products of nonnegative inequalities multiply in the nonstrict form stated by [[prop-of-multiply-inequalities]], and the order is total ([[def-ordered-field]]).

[L8] Convergence to $0$: it suffices to produce, for every real $\varepsilon > 0$, a threshold beyond which $|z_k| < \varepsilon$; and $|z| = z$ for $z \ge 0$ ([[def-real-limit]], [[def-sequence]], [[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 Since $\alpha > 0$ is rational, so is $1/\alpha$; put $\delta := \beta^{1/\alpha}$ and $\theta := \delta^{1/2}$. From $\beta > 1$ and $1/\alpha > 0$ we get $\delta > 1$, and from $\delta > 1$ and $1/2 > 0$ we get $\theta > 1$; hence $\theta - 1 > 0$ and $\delta > 0$, $\theta > 0$. [given, L1, L2, L7]

1.2 For every natural $n$ one has $\delta^{n} = \theta^{n} \theta^{n}$, because $\theta^{2} = (\delta^{1/2})^{2} = \delta$ and therefore $\delta^{n} = (\theta^{2})^{n} = \theta^{2n} = \theta^{n} \theta^{n}$. [given, L1, L3]

1.3 For every natural $k$ one has $w_k = u_k^{\alpha}$, where $u_k := \iota(k)/\delta^{k}$. Indeed $u_k = \iota(k) \cdot (1/\delta^{k})$ with both factors $\ge 0$, so $u_k^{\alpha} = \iota(k)^{\alpha} \big(1/\delta^{k}\big)^{\alpha} = \iota(k)^{\alpha}/\big(\delta^{k}\big)^{\alpha}$, and $\big(\delta^{k}\big)^{\alpha} = \delta^{k\alpha} = \big(\beta^{1/\alpha}\big)^{k\alpha} = \beta^{(1/\alpha)(k\alpha)} = \beta^{k}$. [given, L1, L3]

2.1 For every natural $n \ge 1$ one has $0 \le u_n < 1/\big(\iota(n)(\theta-1)(\theta-1)\big)$. Bernoulli's inequality applied to $\theta - 1 > 0$ gives $\theta^{n} \ge 1 + \iota(n)(\theta-1) > \iota(n)(\theta-1) > 0$, so multiplying this inequality by itself gives $\delta^{n} = \theta^{n}\theta^{n} > \iota(n)(\theta-1)\iota(n)(\theta-1) > 0$; dividing the positive $\iota(n)$ by the two positive quantities reverses the inequality and yields $u_n = \iota(n)/\delta^{n} < \iota(n)/\big(\iota(n)\iota(n)(\theta-1)(\theta-1)\big) = 1/\big(\iota(n)(\theta-1)(\theta-1)\big)$, while $u_n \ge 0$ because $\iota(n) > 0$ and $\delta^{n} > 0$. [step 1.1, step 1.2, L3, L4, L5, L6, L7]

3.1 The sequence $(u_k)$ converges to $0$. Note first $u_0 = \iota(0)/\delta^{0} = 0/1 = 0$. Given a real $\varepsilon > 0$, put $\eta := \varepsilon(\theta-1)(\theta-1) > 0$ and take a natural $m \ge 1$ with $1/m < \eta$. For $k \ge m$ we have $\iota(k) \ge \iota(m) > 0$, hence $1/\iota(k) \le 1/\iota(m) < \eta$, and therefore $0 \le u_k < 1/\big(\iota(k)(\theta-1)(\theta-1)\big) < \eta/\big((\theta-1)(\theta-1)\big) = \varepsilon$, so $|u_k| < \varepsilon$. [step 2.1, L5, L6, L7, L8]

4.1 The sequence $(w_k)$ converges to $0$. Given a real $\varepsilon > 0$, the element $\varepsilon^{1/\alpha}$ is a positive real, so by step 3.1 there is a threshold beyond which $0 \le u_k < \varepsilon^{1/\alpha}$. For such $k$: if $u_k = 0$ then $w_k = 0^{\alpha} = 0 < \varepsilon$, and if $u_k > 0$ then monotonicity of the rational power $\alpha$ in the base gives $w_k = u_k^{\alpha} < \big(\varepsilon^{1/\alpha}\big)^{\alpha} = \varepsilon^{(1/\alpha)\alpha} = \varepsilon$. In both cases $|w_k| = w_k < \varepsilon$, so $w_k \to 0$. [step 3.1, step 1.3, L1, L2, L8] ∎

## Remarks

- **The proof turns the problem into the single case $\alpha = 1$.** Writing
  $\beta = \delta^{\alpha}$ with $\delta := \beta^{1/\alpha}$ makes
  $w_k = \big(\iota(k)/\delta^{k}\big)^{\alpha}$, so it is enough to know that
  $n/\delta^{n} \to 0$ for a base $\delta > 1$, and then that a fixed positive
  rational power of a nonnegative null sequence is null. The exponent never has to
  be moved inside a limit.

- **Bernoulli is applied to the square root of the base, and that is essential.**
  Applied to $\delta$ itself it gives only $\delta^{n} \ge 1 + n(\delta-1)$, which
  makes $n/\delta^{n}$ bounded but not null. Applied to
  $\theta = \delta^{1/2}$ and then squared it gives
  $\delta^{n} > n^{2}(\theta-1)^{2}$, a quadratic lower bound, and one factor of
  $n$ is then left over to drive the quotient to $0$.

- **Why the route through the root test is not taken.** The chain of
  [[thm-ratio-root-inequality]] together with
  [[lem-nth-root-of-n-tends-to-one]] would give
  $\limsup_k w_k^{1/k} \le \limsup_k \big((k^{1/k})^{\alpha}\big)/\beta$, and
  closing that requires knowing $t_k \to 1 \Rightarrow t_k^{\alpha} \to 1$, that
  is the continuity of $x \mapsto x^{\alpha}$ at $x = 1$. That statement is not
  available in this library and is not proved on this page, so the argument above
  is made directly instead; it needs only Bernoulli and the Archimedean property.

- **The growth hierarchy this places.** Together with
  [[lem-factorial-beats-geometric]] it orders the three standard scales: a fixed
  power of $n$ is beaten by every geometric sequence of ratio $> 1$, and every
  geometric sequence is beaten by $k!$. Worked instances are collected in
  [[ex-standard-limits-worked]].
