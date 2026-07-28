---
id: fs-stars-and-bars-holds-for-every-number-of-parts
kind: false-statement
title: "FALSE: the number of weak compositions of $n$ into $m$ parts is $\\binom{n+m-1}{m-1}$ for every $m \\in \\mathbb{N}$"
status: published
origin: session
deps: [thm-stars-and-bars, def-composition-of-a-natural-number, def-binomial-coefficient,
       def-nat-finite-sum-and-product, def-natural-numbers, def-nat-order,
       def-finite-cardinality, lem-nat-trichotomy]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Stars and bars (combinatorics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Stars_and_bars_(combinatorics)"
    - title: "Composition (combinatorics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Composition_(combinatorics)"
    - title: "Binomial coefficient (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binomial_coefficient"
pipeline_run: null
---

## Statement

**FALSE.** The statement

> $\big\lvert\mathcal{W}(n,m)\big\rvert = \dbinom{n+m-1}{\,m-1\,}$

for every $n \in \mathbb{N}$ and **every** $m \in \mathbb{N}$, that is,
[[thm-stars-and-bars]] with its hypothesis $m \ge 1$ deleted.

This is a false statement of an unusual kind: at $m = 0$ the expression on the
right is not even well formed under the reading a reader would intend, and under
the only reading available in this library it is well formed and gives the wrong
number.

## Facts & Assumptions

**Given:** The sets $\mathcal{W}(n,m)$ of [[def-composition-of-a-natural-number]]; binomial coefficients defined for **natural** arguments only ([[def-binomial-coefficient]]); and the truncated difference of [[def-nat-finite-sum-and-product]], under which $n - m$ is $0$ whenever $n < m$.

[L1] $\lvert\mathcal{W}(0,0)\rvert = 1$ and $\lvert\mathcal{W}(n,0)\rvert = 0$ for $n \ge 1$ ([[def-composition-of-a-natural-number]], [[def-finite-cardinality]]).

[L2] $\binom{N}{0} = 1$ and $\binom{N}{N} = 1$ for every natural $N$ ([[def-binomial-coefficient]]).

[L3] The true statement, for $m \ge 1$: $\lvert\mathcal{W}(n,m)\rvert = \binom{n+m-1}{m-1}$ ([[thm-stars-and-bars]]).

[L4] $\binom{n}{k}$ is defined only for $n, k \in \mathbb{N}$, and $-1$ is not a natural number ([[def-binomial-coefficient]], [[def-natural-numbers]], [[def-nat-order]]).

[L5] $0 \ne 1$ ([[lem-nat-trichotomy]], [[def-natural-numbers]]).

## Refutation

**Proof technique:** direct.

1.1 Fix $m = 0$ and $n = 1$. The true count is $\lvert\mathcal{W}(1,0)\rvert = 0$ by [L1]: a weak composition of $1$ into $0$ parts would be a function $0 \to \mathbb{N}$, and the only such function is the empty function, whose sum is the empty sum $0 \ne 1$. [given, L1, L5]

2.1 The formula gives $1$. With the truncated difference, $n+m-1 = 1+0-1 = 0$ and $m-1 = 0-1 = 0$, so the right-hand side reads $\binom{0}{0} = 1$ by [L2]. Since $1 \ne 0$ by [L5], the displayed statement is false at $(n,m) = (1,0)$. [step 1.1, L2, L5]

3.1 Under the other reading the expression is not defined at all. If $m-1$ is meant as an integer, it is $-1$ at $m = 0$, and $-1$ is not a natural number, so $\binom{n-1}{-1}$ names nothing: [[def-binomial-coefficient]] defines $\binom{N}{k}$ for natural $N$ and $k$ only. So the statement is either false or ill formed, and in neither reading is it true. [step 2.1, L4] ∎

## Remarks

- **The formula is correct for every $m \ge 1$**, and the two edges are worth
  seeing. At $m = 1$ it reads $\binom{n}{0} = 1$, matching the unique weak
  composition $(n)$. At $n = 0$ it reads $\binom{m-1}{m-1} = 1$, matching the
  unique weak composition all of whose parts are $0$. Neither of these is the
  failing case; the failure is confined to $m = 0$.

- **A false statement whose falsity is ill-formedness** is worth stating in
  exactly those terms. What [[thm-stars-and-bars]] asserts is a statement about
  $m \ge 1$; the object $\binom{n+m-1}{m-1}$ simply does not exist at $m = 0$
  unless one adopts a truncation convention, and adopting one makes the value
  wrong rather than absent.

- **The companion true values** are recorded in
  [[def-composition-of-a-natural-number]]: at $m = 0$ there is exactly one weak
  composition of $0$ and none of any $n \ge 1$.
