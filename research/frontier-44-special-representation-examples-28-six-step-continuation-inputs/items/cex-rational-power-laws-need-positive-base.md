---
id: cex-rational-power-laws-need-positive-base
kind: counterexample
title: "The iterated rational-power law fails without a positive base: $\\big((-3)^{2}\\big)^{1/2} = 3 \\ne -3$"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-rational-power, lem-rational-power-laws, def-integer-power, thm-nth-roots-exist, lem-of-abs-value, lem-power-monotone, lem-of-mult-neg, lem-power-laws]
justified_by: []
aliases: []
landmark: false
dependency_level: 7
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Basic Analysis I: Introduction to Real Analysis, Volume I, version 6.3, 15 May 2026 (author-hosted complete book)"
      url: "https://www.jirka.org/ra/realanal.pdf"
      locator: "Chapter 4 §4.4, Corollary 4.4.3 whose convention x^{m/n} = (x^{1/n})^m is stated for x ≥ 0, printed pp. 177-178"
---

## Statement refuted

**Refuted claim:** the identity $(a^{r})^{s} = a^{rs}$ of
[[lem-rational-power-laws]] holds for every real $a$ and all rationals
$r, s$ for which both sides are defined.

Witness: $a := -3$, $r := 2$, $s := 1/2$. Here $a^{r}$ is the integer power
$(-3)^{2} = 9$, so $(a^{r})^{s} = 9^{1/2} = 3$ by [[thm-nth-roots-exist]], while
$a^{rs} = (-3)^{1} = -3$ is again an integer power; the two sides differ. Both
displayed expressions are defined by the library's definitions — only the
rational-power step, on the positive base $9$, uses [[def-rational-power]] — so
the positivity hypothesis $a > 0$ in [[lem-rational-power-laws]] cannot be
dropped. The correct general statement in this case is that
$\big(a^{2}\big)^{1/2} = |a|$ for every real $a$.

## Facts & Assumptions

**Given:** The real number $a := -3$, the integer power $r := 2$ and the rational power $s := 1/2$, with $rs = 1$.

[L1] Rational powers ([[def-rational-power]]): for $b > 0$ and $r = m/n$ with $m \in \mathbb{Z}$, $n \ge 1$, $b^{r} = \big(b^{1/n}\big)^{m}$, and $0^{r} = 0$ for $r > 0$; no value is assigned to $a^{r}$ for $a < 0$.

[L2] Rational power laws ([[lem-rational-power-laws]]): for $a, b > 0$ and rationals $r, s$, $a^{r} > 0$, $a^{r+s} = a^{r}a^{s}$ and $\big(a^{r}\big)^{s} = a^{rs}$; the positivity of the base is a hypothesis of that item, not a convenience.

[L3] Integer powers ([[def-integer-power]], [[lem-power-laws]], [[lem-of-mult-neg]]): $x^{0} = 1$, $x^{j+1} = x^{j}x$, $x^{-j} = \big(x^{j}\big)^{-1}$ for $x \ne 0$, and $(-u)(-v) = uv$ for all reals $u, v$; so $(-3)^{2} = (-3)(-3) = 9$ and $(-3)^{1} = -3$.

[L4] Roots ([[thm-nth-roots-exist]]): every $c \ge 0$ has a unique $c^{1/n} \ge 0$ with $\big(c^{1/n}\big)^{n} = c$; in particular $9^{1/2} = 3$ because $3 \ge 0$ and $3^{2} = 9$, and no real number has square $-1$.

[L5] Absolute value ([[lem-of-abs-value]]): $|a| \ge 0$ and $|a|^{2} = a^{2}$ for every real $a$.

[L6] Monotonicity and signs of powers ([[lem-power-monotone]]): $u \ge 0$ implies $u^{j} \ge 0$ for every natural $j$; and $u \mapsto u^{j}$ is strictly increasing on the nonnegatives for $j \ge 1$, so a nonnegative number with $j$-th power $c$ is unique.

## Counterexample

**Proof technique:** direct.

1.1 The two integer-power evaluations at the witness: $(-3)^{2} = (-3)(-3) = 9$ and $(-3)^{1} = -3$ by [L3]. [L3, algebra]

1.2 The rational-power step: $9^{1/2} = 3$ by [L4], since $3 \ge 0$ and $3^{2} = 9$; the base $9$ is positive, so this is a legitimate application of [L1] at the representative $1/2$. [L1, L4, algebra]

1.3 The correct general statement: for every real $a$ the value $\big(a^{2}\big)^{1/2}$ exists and equals $|a|$, because $|a| \ge 0$ with $|a|^{2} = a^{2}$ by [L5], so $a^{2} = |a|^{2} \ge 0$ by [L6] and $|a|$ is a nonnegative square root of $a^{2}$, which is unique by [L4]; for $a < 0$ this left-hand value is the positive number $|a|$ and not $a$, which is the precise sense in which the identity fails without positivity of the base. [L4, L5, L6, algebra]

2.1 The comparison and the failure: $3 \ne -3$, since $3 > 0 > -3$; hence at $a = -3$, $r = 2$, $s = 1/2$ one has $(a^{r})^{s} = \big((-3)^{2}\big)^{1/2} = 9^{1/2} = 3$ while $a^{rs} = (-3)^{2\cdot(1/2)} = (-3)^{1} = -3$, so the identity $(a^{r})^{s} = a^{rs}$ fails; both sides are defined, the right side as an integer power and the left side because its inner value $9$ is positive, so this is a failure of the identity and not of definedness. [step 1.1, step 1.2, L1, L3, algebra]

3.1 Conclusion: the witness refutes the unrestricted identity (step 2.1), the general computation identifies what survives in its place, namely $\big(a^{2}\big)^{1/2} = |a|$ (step 1.3), and the closing correct statement is exactly why [L2] requires $a > 0$; no integer-power law is denied, since [L3] governs the evaluations used and imposes only $x \ne 0$ where inverses are taken, which holds at $x = -3$. [step 2.1, step 1.3, L1, L2, L3] ∎
