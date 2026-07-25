---
id: fs-rational-power-of-negative-base
kind: false-statement
title: "FALSE: $a^{m/n} := (a^{1/n})^{m}$ extends to negative bases"
status: draft
origin: session
deps: [def-rational-power, lem-rational-power-well-defined, thm-nth-roots-exist, def-rationals, def-rat-order, def-integer-power, lem-of-square-positive, lem-power-laws, lem-power-monotone, lem-of-sign-rules, lem-of-mult-neg]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
    - title: "Nth root (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nth_root"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

**False claim:** the definition $a^{m/n} := \big(a^{1/n}\big)^{m}$ of
[[def-rational-power]] extends to negative bases, that is, the same formula
assigns to every $a < 0$ and every $r \in \mathbb{Q}$ a real number $a^{r}$,
depending only on $a$ and on the rational $r$.

This is the claim that [[def-rational-power]] rules out by insisting on $a > 0$,
and this item is the reason for that restriction.

## Facts & Assumptions

**Given:** The base $a = -8$ and the rational $r = 1/3$; the formula under test is $a^{m/n} = \big(a^{1/n}\big)^{m}$, in which $a^{1/n}$ has to denote a real number whose $n$-th power is $a$ ([[def-rational-power]], [[thm-nth-roots-exist]]).

[A1] The same rational has many representatives: $1/3 = 2/6$ in $\mathbb{Q}$, since $1 \cdot 6 = 3 \cdot 2$ ([[def-rationals]]). For a formula in $m$ and $n$ to define a function of $r$, all representatives must give the same value, which for positive bases is [[lem-rational-power-well-defined]].

[A2] No real has sixth power $-8$: for every $x \in \mathbb{R}$, $x^{6} = \big(x^{3}\big)^{2} \ge 0$, whereas $-8 < 0$ ([[lem-power-laws]], [[lem-of-square-positive]], [[def-integer-power]], [[def-rat-order]]).

[A3] Exactly one real has cube $-8$, namely $-2$: if $x^{3} = -8 < 0$ then $x < 0$, since $x \ge 0$ would give $x^{3} \ge 0$; and then $y := -x > 0$ satisfies $y^{3} = -x^{3} = 8$, so $y = 8^{1/3} = 2$ by uniqueness of the nonnegative cube root, whence $x = -2$ ([[thm-nth-roots-exist]], [[lem-power-monotone]], [[lem-of-sign-rules]], [[lem-of-mult-neg]]).

## Refutation

**Proof technique:** contradiction.

1.1 Assume, for contradiction, that the formula does define $a^{r}$ for negative $a$ and every rational $r$, depending only on $a$ and $r$; then in particular $(-8)^{1/3}$ is a real number, and the value obtained from any representative $m/n$ of the rational $1/3$ is that same number. [assume-contra, given, A1]

2.1 Read through the representative $1/3$: the formula gives $(-8)^{1/3} = \big((-8)^{1/3}\big)^{1}$, where $(-8)^{1/3}$ is a real cube root of $-8$, and there is exactly one such real, namely $-2$; so the value is $-2$. [step 1.1, A3]

2.2 Read through the representative $2/6$: the formula gives $(-8)^{2/6} = \big((-8)^{1/6}\big)^{2}$, and $(-8)^{1/6}$ must be a real sixth root of $-8$, of which there is none. [step 1.1, A2]

3.1 The two readings are incompatible: by the assumption the rational $1/3 = 2/6$ has a single value, which step 2.1 computes to be $-2$, while step 2.2 shows that the very expression the formula prescribes for the representative $2/6$ names nothing at all in $\mathbb{R}$. [step 1.1, step 2.1, step 2.2, A1]

4.1 The assumption therefore fails, and the failure is not an artefact of the chosen numbers: every rational $r$ has representatives with even denominator, and a negative base has no real root of even order by the argument of [A2], so for a negative base the formula depends on the representative and [[lem-rational-power-well-defined]] genuinely breaks down; this is exactly why [[def-rational-power]] requires $a > 0$. [step 3.1, step 1.1, A1, A2, discharge-contradiction] ∎

## Remarks

- **Precisely what fails.** For a negative base the formula does not produce two different numbers; it produces a number from some representatives and nothing at all from others. That is still a failure of well-definedness: a definition of $a^{r}$ must depend only on the rational $r$, and this one depends on how $r$ is written.
- **The odd-denominator repair, and why it is not adopted.** If one restricts to rationals admitting a representative $m/n$ with $n$ odd, and always uses such a representative, the formula is consistent, because odd roots of negatives exist and are unique ([[fs-negative-has-square-root]] records this). What one gets is a partial operation, defined on the proper subset of $\mathbb{Q}$ of rationals with odd denominator in lowest terms, not on $\mathbb{Q}$. The library does not adopt it: it is not the operation of [[def-rational-power]], it is not closed under addition of exponents in any convenient way, and every later use on this page, from [[thm-weighted-am-gm-rational]] to [[thm-minkowski-finite]], needs arbitrary rational exponents on a base that is nonnegative anyway.
- The restriction to $a > 0$ is therefore not squeamishness about signs. It is the exact condition under which $a^{1/n}$ exists for every $n \ge 1$, which is what makes the value independent of the representative.
