---
id: fs-the-alternating-row-sum-vanishes-for-every-n
kind: false-statement
title: "FALSE: $\\sum_{k<n+1}(-1)^{k}\\iota\\!\\binom{n}{k} = 0$ for every $n \\in \\mathbb{N}$"
status: draft
origin: session
deps: [cor-binomial-theorem-consequences, thm-binomial-theorem, def-binomial-coefficient,
       def-integer-power, def-canonical-natural, def-finite-sum, def-natural-numbers,
       lem-finite-sum-laws, lem-of-zero-mult, def-field]
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
sources:
  scraped: []
  references:
    - title: "Binomial coefficient (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binomial_coefficient"
    - title: "Binomial theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binomial_theorem"
    - title: "Pascal's triangle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pascal%27s_triangle"
pipeline_run: null
---

## Statement

**FALSE.** The statement

> $\displaystyle\sum_{k<n+1}(-1)^{k}\,\iota\binom{n}{k} = 0$

for **every** $n \in \mathbb{N}$.

The claim is what a text whose natural numbers begin at $1$ would state truly. In
this library $\mathbb{N}$ contains $0$ ([[def-natural-numbers]]), and the
statement acquires a counterexample at its very first index.

## Facts & Assumptions

**Given:** The canonical natural $\iota$ ([[def-canonical-natural]]) and the real finite sum of [[def-finite-sum]]; $\mathbb{N}$ contains $0$ ([[def-natural-numbers]]).

[L1] $\sum_{k<0}u_k = 0$ and $\sum_{k<\sigma(N)}u_k = \sum_{k<N}u_k + u_N$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L2] $\binom{0}{0} = 1$ ([[def-binomial-coefficient]]), and $\iota(1) = 1$ ([[def-canonical-natural]]).

[L3] $a^{0} = 1$ for every real $a$, including $a = 0$; and $0^{\,m} = 0$ for $m \ge 1$ ([[def-integer-power]], [[lem-of-zero-mult]], [[def-field]]).

[L4] The true statement: $\sum_{k<n+1}(-1)^{k}\iota\binom{n}{k} = 0$ **for $n \ge 1$** ([[cor-binomial-theorem-consequences]], clause 2), proved from the binomial theorem at $x = -1$, $y = 1$ ([[thm-binomial-theorem]]).

## Refutation

**Proof technique:** direct.

1.1 Evaluate the left-hand side at $n = 0$. The sum runs over $k < 0+1 = 1$, so by [L1] it is the single term $(-1)^{0}\,\iota\binom{0}{0}$. [given, L1]

2.1 That term is $1$: $(-1)^{0} = 1$ by [L3], $\binom{0}{0} = 1$ by [L2], and $\iota(1) = 1$. So the sum equals $1$, not $0$, and the displayed statement is false at $n = 0$. [step 1.1, L2, L3]

3.1 Where the hypothesis is spent in the true version. [L4] obtains the identity by evaluating the binomial theorem at $x = -1$, $y = 1$: the left-hand side becomes $(-1+1)^{n} = 0^{\,n}$, which is $0$ **only for $n \ge 1$**, while $0^{0} = 1$ by [L3]. That single evaluation is the entire difference between the true statement and the false one. [step 2.1, L3, L4] ∎

## Remarks

- **The convention $0^{0} = 1$ is not the culprit.** It is what makes the
  binomial theorem itself true at $n = 0$ and at $x = 0$, with no exceptional
  case; the price is that one of its corollaries carries a hypothesis. Changing
  the convention would move the exception, not remove it.

- **The concrete picture.** In [[ex-pascals-triangle-to-row-six]] the alternating
  sums of rows $1$ to $6$ are all $0$ and the alternating sum of row $0$ is $1$.
  A reader who computes from row $1$ onwards sees only the true pattern.
