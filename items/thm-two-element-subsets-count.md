---
id: thm-two-element-subsets-count
kind: theorem
title: "A finite set with $n$ elements has exactly $\\binom{n}{2}$ two-element subsets, and $2\\binom{n}{2} = n(n-1)$"
status: draft
origin: session
deps: [thm-binomial-closed-formula, def-binomial-coefficient, def-factorial-and-falling-factorial,
       def-finite-cardinality, lem-nat-finite-sum-laws-and-the-canonical-embedding,
       def-canonical-natural, def-nat-multiplication, lem-nat-mult-commutative,
       lem-nat-mult-identity, def-nat-order, lem-nat-trichotomy, def-field, def-ordered-field]
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
    - title: "Combination (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Combination"
    - title: "Falling and rising factorials (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Falling_and_rising_factorials"
pipeline_run: null
---

## Statement

Let $A$ be a finite set with $n := \lvert A\rvert$. Then the set $[A]^{2}$ of
two-element subsets of $A$ is finite with

$$\big\lvert [A]^{2}\big\rvert = \binom{n}{2},$$

and, **for every $n \in \mathbb{N}$**, the identity

$$2\cdot\binom{n}{2} = n\,(n-1)$$

holds in $\mathbb{N}$, the difference being the truncated one. Equivalently, in
$\mathbb{R}$, $\iota\binom{n}{2} = \iota(n)\big(\iota(n)-1\big)/2$ for every
$n \in \mathbb{N}$.

## Facts & Assumptions

**Given:** A finite set $A$ with $n = \lvert A\rvert$, and $2 = \sigma(1)$. The difference $n-1$ is the truncated one, equal to $0$ at $n = 0$.

[L1] $\lvert [A]^{j}\rvert = \binom{\lvert A\rvert}{j}$, $[A]^{j}$ is finite, and $\binom{m}{j} = 0$ for $j > m$ ([[def-binomial-coefficient]], [[def-finite-cardinality]]).

[L2] $\binom{m}{j}\,j! = m^{\underline{j}}$ for $j \le m$ ([[thm-binomial-closed-formula]], clause 1).

[L3] Falling factorials and factorials ([[def-factorial-and-falling-factorial]]): $m^{\underline{0}} = 1$, $m^{\underline{\sigma(j)}} = m^{\underline{j}}(m-j)$, $0! = 1! = 1$ and $2! = 2$.

[L4] Arithmetic of $\mathbb{N}$: multiplication is commutative, $m \cdot 0 = 0$, $1 \cdot m = m$ ([[lem-nat-mult-commutative]], [[lem-nat-mult-identity]], [[def-nat-multiplication]]); and $m - 0 = m$ ([[def-nat-order]]).

[L5] The embedding $\iota$ is additive, multiplicative and injective, and $\iota(m) > 0$ for $m \ge 1$ (clauses 0 and 7 of [[lem-nat-finite-sum-laws-and-the-canonical-embedding]], [[def-canonical-natural]]); $\mathbb{R}$ is an ordered field, so a nonzero element is invertible ([[def-field]], [[def-ordered-field]]).

[L6] Trichotomy in $\mathbb{N}$ ([[lem-nat-trichotomy]]).

## Proof

**Proof technique:** direct.

1.1 The first assertion is the definition: $[A]^{2}$ is finite and $\lvert [A]^{2}\rvert = \binom{n}{2}$ by [L1], because $\lvert A\rvert = n$. [L1]

1.2 The falling factorial at $2$: $n^{\underline{1}} = n^{\underline{0}}\cdot(n-0) = 1 \cdot n = n$ and $n^{\underline{2}} = n^{\underline{1}}\cdot(n-1) = n\,(n-1)$, using [L3] and [L4]. [L3, L4]

2.1 Let $n \ge 2$. Then [L2] with $j = 2$ gives $\binom{n}{2}\cdot 2! = n^{\underline{2}}$, that is $\binom{n}{2}\cdot 2 = n(n-1)$ by step 1.2 and $2! = 2$; commutativity turns this into $2\binom{n}{2} = n(n-1)$. [step 1.2, L2, L3, L4]

3.1 The two remaining values of $n$. If $n = 0$ then $2 > 0$, so $\binom{0}{2} = 0$ by [L1], and the right-hand side is $0\cdot(0-1) = 0 \cdot 0 = 0$ by [L4]. If $n = 1$ then $2 > 1$, so $\binom{1}{2} = 0$, and the right-hand side is $1\cdot(1-1) = 1 \cdot 0 = 0$. In both cases $2\binom{n}{2} = 0 = n(n-1)$, so with step 2.1 and trichotomy the identity holds for every $n \in \mathbb{N}$. [step 2.1, L1, L4, L6]

4.1 The real form. For $n \ge 1$ we have $(n-1) + 1 = n$, so $\iota(n-1) + 1 = \iota(n)$ and $\iota(n-1) = \iota(n) - 1$; applying $\iota$ to step 3.1 then gives $\iota(2)\,\iota\binom{n}{2} = \iota(n)\big(\iota(n)-1\big)$, and $\iota(2) = 2 \ne 0$ is invertible, so $\iota\binom{n}{2} = \iota(n)(\iota(n)-1)/2$. At $n = 0$ both sides are $0$, the left by step 3.1 and the right because $\iota(0) = 0$. [step 3.1, L5]

5.1 The count is step 1.1, the identity in $\mathbb{N}$ is step 3.1, and its real form is step 4.1. [step 1.1, step 3.1, step 4.1] ∎

## Remarks

- **This is a count of unordered pairs, stated purely as a count.** No geometric
  or relational vocabulary appears, because none is available at this point in
  the reading order. Later pages will want exactly this quantity, and they may
  cite it from here.

- **Both small cases are checked.** At $n = 0$ and $n = 1$ there are no
  two-element subsets and both sides are $0$; the truncated difference is what
  makes the right-hand side come out $0$ rather than undefined at $n = 0$.

- **The real form is not the definition.** $\iota(n)(\iota(n)-1)/2$ is a real
  number that happens to be the canonical natural of a count; the identity in
  $\mathbb{N}$ is the primary statement and the division is a convenience.
