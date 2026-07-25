---
id: fs-rational-power-of-negative-base
kind: false-statement
title: "FALSE: $a^{m/n} := (a^{1/n})^{m}$ extends to negative bases"
status: published
origin: session
deps: [def-rational-power, lem-rational-power-well-defined, thm-nth-roots-exist, def-rationals, def-rat-order, def-integer-power, def-ordered-field, lem-of-square-positive, lem-of-zero-mult, lem-power-laws, lem-power-monotone, lem-of-sign-rules, lem-of-mult-neg, lem-of-naturals-positive, lem-of-q-embeds, thm-of-square-roots, fs-negative-has-square-root]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
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

[A1] Numerals denote canonical naturals. For a natural $k$ the symbol $k$ inside $\mathbb{R}$ means $\iota(k) = k \cdot 1_{\mathbb{R}}$, where $\iota$ is the canonical order-preserving field embedding; $\iota(k) > 0$ for $k \ge 1$, and $\iota$ preserves products ([[lem-of-naturals-positive]], [[lem-of-q-embeds]]). So $8 > 0$, and therefore $-8 < 0$, since $x > 0$ means $x \in P$ and $0 - (-x) = x \in P$ says $-x < 0$ ([[def-ordered-field]]; none of the items just named states this passage from a positive element to its negative). Also $2^{3} = \iota(2)\iota(2)\iota(2) = \iota(8) = 8$ ([[def-integer-power]]). This is where the numerals of this item enter $\mathbb{R}$; the order on $\mathbb{Q}$ ([[def-rat-order]]) is not what is being used when we write $-8 < 0$ in $\mathbb{R}$.

[A2] The same rational has many representatives: $1/3 = 2/6$ in $\mathbb{Q}$, since $1 \cdot 6 = 3 \cdot 2$ ([[def-rationals]]). For a formula in $m$ and $n$ to define a function of $r$, all representatives must give the same value, which for positive bases is [[lem-rational-power-well-defined]].

[A3] No real has sixth power $-8$: for every $x \in \mathbb{R}$, $x^{6} = \big(x^{3}\big)^{2}$ ([[lem-power-laws]], claim 1, [[def-integer-power]]), and a square is nonnegative because a nonzero one is positive ([[lem-of-square-positive]]) while $0^{2} = 0 \cdot 0 = 0$ ([[lem-of-zero-mult]]); so $x^{6} \ge 0$, whereas $-8 < 0$ in $\mathbb{R}$ by [A1].

[A4] Exactly one real has cube $-8$, namely $-2$: if $x^{3} = -8 < 0$ then $x < 0$, since $x \ge 0$ would give $x^{3} \ge 0$; and then $y := -x > 0$ satisfies $y^{3} = -x^{3} = 8$, so $y = 8^{1/3} = 2$ by uniqueness of the nonnegative cube root, whence $x = -2$ ([[thm-nth-roots-exist]], [[lem-power-monotone]], [[lem-of-sign-rules]], [[lem-of-mult-neg]]).

## Refutation

**Proof technique:** contradiction.

1.1 Assume, for contradiction, that the formula does define $a^{r}$ for negative $a$ and every rational $r$, depending only on $a$ and $r$; then in particular $(-8)^{1/3}$ is a real number, and the value obtained from any representative $m/n$ of the rational $1/3$ is that same number. [assume-contra, given, A2]

2.1 Read through the representative $1/3$: the formula gives $(-8)^{1/3} = \big((-8)^{1/3}\big)^{1}$, where $(-8)^{1/3}$ is a real cube root of $-8$, and there is exactly one such real, namely $-2$; so the value is $-2$. [step 1.1, A1, A4]

2.2 Read through the representative $2/6$: the formula gives $(-8)^{2/6} = \big((-8)^{1/6}\big)^{2}$, and $(-8)^{1/6}$ must be a real sixth root of $-8$, of which there is none. [step 1.1, A1, A3]

3.1 The two readings are incompatible: by the assumption the rational $1/3 = 2/6$ has a single value, which step 2.1 computes to be $-2$, while step 2.2 shows that the very expression the formula prescribes for the representative $2/6$ names nothing at all in $\mathbb{R}$. [step 1.1, step 2.1, step 2.2, A2]

4.1 The assumption therefore fails, and the failure is not an artefact of the chosen numbers: every rational $r$ has representatives with even denominator, and a negative base has no real root of even order by the argument of [A3], so for a negative base the formula depends on the representative and [[lem-rational-power-well-defined]] genuinely breaks down; this is exactly why [[def-rational-power]] requires $a > 0$. [step 3.1, step 1.1, A2, A3, discharge-contradiction] ∎

## Remarks

- **Precisely what fails.** For a negative base the formula does not produce two different numbers; it produces a number from some representatives and nothing at all from others. That is still a failure of well-definedness: a definition of $a^{r}$ must depend only on the rational $r$, and this one depends on how $r$ is written.
- **The odd-denominator repair, and why it is not adopted.** If one restricts to rationals admitting a representative $m/n$ with $n$ odd, and always uses such a representative, the formula is consistent, because odd roots of negatives exist and are unique ([[fs-negative-has-square-root]] records this). What one gets is a partial operation, defined on the proper subset of $\mathbb{Q}$ of rationals with odd denominator in lowest terms, not on $\mathbb{Q}$. The library does not adopt it: it is not the operation of [[def-rational-power]], its exponents form only a proper subring of $\mathbb{Q}$ (every rational whose lowest-terms denominator is even is missing, $1/2$ among them, so the square root that [[thm-of-square-roots]] supplies for nonnegative bases has no counterpart here), and every later use on this page, from [[thm-weighted-am-gm-rational]] to [[thm-minkowski-finite]], needs arbitrary rational exponents on a base that is nonnegative anyway.
- The restriction to $a > 0$ is therefore not squeamishness about signs. It is the exact condition under which $a^{1/n}$ exists for every $n \ge 1$, which is what makes the value independent of the representative.
