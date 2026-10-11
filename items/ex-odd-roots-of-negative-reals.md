---
id: ex-odd-roots-of-negative-reals
kind: example
title: "Odd powers are bijections of $\\mathbb{R}$: $x^{3} = -8$ has the unique solution $x = -2$"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-nth-roots-exist, lem-power-laws, lem-power-monotone, def-integer-power, lem-of-sign-rules, lem-of-mult-neg, fs-negative-has-square-root, def-rational-power]
justified_by: []
aliases: []
landmark: false
dependency_level: 5
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Basic Analysis I: Introduction to Real Analysis, Volume I, version 6.3, 15 May 2026 (author-hosted complete book)"
      url: "https://www.jirka.org/ra/realanal.pdf"
      locator: "Chapter 4 §4.4, Exercise 4.4.4 (odd n: unique n-th root of every real) and Example 4.4.5, printed pp. 178-180"
---

## Example

Call a natural number $n$ **odd** when $n = 2k+1$ for some natural $k$; every
odd $n$ satisfies $n \ge 1$. Let $n$ be odd. Then $x \mapsto x^{n}$ is a
bijection of $\mathbb{R}$ onto $\mathbb{R}$: every real number has exactly one
real $n$-th root. Explicitly, $x^{3} = -8$ has the unique solution $x = -2$,
and $x^{5} = -32$ has the unique solution $x = -2$.

For a negative right-hand side this is a statement about the solution of
$x^{n} = a$, with $n$ an odd exponent; for $n > 1$ it does not extend the symbol $a^{1/n}$,
since [[thm-nth-roots-exist]] produces that symbol only for $a \ge 0$ and
[[def-rational-power]] does not define rational powers of negative bases (its
separate zero-base clause concerns nonnegative bases only). This is the claim
the A-page prose records when it says that odd roots of negatives do exist,
while [[fs-negative-has-square-root]] shows that even ones do not.

## Facts & Assumptions

**Given:** A natural number $n = 2k+1$ with $k \in \mathbb{N}$, so that $n \ge 1$; all powers are as in [[def-integer-power]].

[L1] Roots of nonnegatives ([[thm-nth-roots-exist]]): for every $c \ge 0$ and every $n \ge 1$ there is a unique $c^{1/n} \ge 0$ with $\big(c^{1/n}\big)^{n} = c$, and $c^{1/n} > 0$ when $c > 0$.

[L2] Laws of natural exponents ([[lem-power-laws]], claim 1): $a^{m+n} = a^{m}a^{n}$, $(a^{m})^{n} = a^{mn}$ and $(ab)^{n} = a^{n}b^{n}$ for all reals $a, b$ and all naturals $m, n$; the recursion clauses of [[def-integer-power]] give $a^{0} = 1$ and $a^{j+1} = a^{j}a$.

[L3] Monotonicity of powers ([[lem-power-monotone]]): $a \ge 0$ implies $a^{j} \ge 0$ and $a > 0$ implies $a^{j} > 0$ for every natural $j$; and $0 \le a < b$ with $j \ge 1$ implies $a^{j} < b^{j}$. Also $1^{j} = 1$ for every natural $j$.

[L4] Sign rules ([[lem-of-sign-rules]]): a product of two positive reals is positive; and for $c < 0$, $a < b$ holds exactly when $bc < ac$. With $c = -1$ this turns $x < y$ into $-y < -x$ and back. The identity $(-1)(-1) = 1$ follows from $(-u)(-v) = uv$ at $u = v = 1$ ([[lem-of-mult-neg]]), followed by $1\cdot1 = 1$.

[L5] No negative square root ([[fs-negative-has-square-root]]): there is no real $y$ with $y^{2} = -1$, so the hypothesis that $n$ be odd cannot be dropped; even exponents land in the nonnegatives.

[L6] The rational-power construction ([[def-rational-power]]) applies to $a > 0$ and every rational $r$, and additionally sets $0^{r} = 0$ for rational $r > 0$. It assigns no noninteger rational powers to negative bases. Integer powers remain defined by [[def-integer-power]]; in particular the case $n = 1$ gives $a^{1} = a$.

## Verification

**Proof technique:** cases.

1.1 The odd power of a negative is negative: since $n = 2k+1$ and $(-1)^{2} = (-1)(-1) = 1$ by [L4], the laws of [L2] give $(-1)^{n} = \big((-1)^{2}\big)^{k}\cdot(-1) = 1^{k}\cdot(-1) = -1$ by [L3]; hence for every real $u$, $(-u)^{n} = \big((-1)u\big)^{n} = (-1)^{n}u^{n} = -\,u^{n}$ by the product law of [L2], so a negative input gives a negative output and $(-u)^{n} > 0$ whenever $u < 0$. [L2, L3, L4, algebra]

2.1 Existence, in the two sign cases: if $a \ge 0$, put $x := a^{1/n}$, so that $x^{n} = a$ by [L1]; if $a < 0$, put $b := -a > 0$, $y := b^{1/n} \ge 0$ by [L1], and $x := -y$, so that $x^{n} = (-y)^{n} = -\,y^{n} = -b = a$ by step 1.1 and $y^{n} = b$; in both cases $x$ is a real $n$-th root of $a$, so every real number is an $n$-th power. [step 1.1, L1, algebra]

2.2 Injectivity, in the three order cases: let $x < y$ be reals. If $0 \le x < y$ then $x^{n} < y^{n}$ by [L3]. If $x < y \le 0$ then $0 \le -y < -x$ by [L4], so $(-y)^{n} < (-x)^{n}$ by [L3], that is $-\,y^{n} < -\,x^{n}$ by step 1.1, and multiplying by $-1$ through [L4] gives $x^{n} < y^{n}$. If $x < 0 \le y$ then $x^{n} = -\,(-x)^{n} < 0$ by step 1.1 and [L3] applied to the positive $-x$, while $y^{n} \ge 0$ by [L3], so again $x^{n} < y^{n}$. Hence $x < y$ always implies $x^{n} < y^{n}$, and $x \mapsto x^{n}$ is injective. [step 1.1, L3, L4, cases]

3.1 Combining steps 2.1 and 2.2, $x \mapsto x^{n}$ is injective and surjective, hence a bijection of $\mathbb{R}$ onto $\mathbb{R}$, and every real number has exactly one real $n$-th root; in particular $(-2)^{3} = -\,2^{3} = -8$ and $(-2)^{5} = -\,2^{5} = -32$ by step 1.1 and the evaluations of [L2], so $x = -2$ solves $x^{3} = -8$ and $x^{5} = -32$, and injectivity makes those solutions unique; the hypothesis that $n$ is odd is indispensable, since for $n = 2$ the value $-1$ has no real square root by [L5], and [L6] records why none of this assigns a value to $(-8)^{1/3}$ as a rational power. [step 2.1, step 2.2, step 1.1, L2, L5, L6, cases-exhaustive] ∎
