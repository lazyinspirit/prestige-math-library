---
id: lem-central-binomial-coefficient-prime-valuation
kind: lemma
title: "Prime valuations in the central binomial coefficient"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-p-adic-valuation,
       lem-p-adic-valuation-basic,
       lem-p-adic-valuation-additive,
       thm-binomial-closed-formula,
       def-binomial-coefficient,
       def-prime,
       def-factorial-and-falling-factorial]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Victor Shoup, A Computational Introduction to Number Theory and Algebra, Version 2"
      url: "https://shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$ be a natural number and let $p$ be a prime. Then

$$
v_p(n!)=\sum_{k\ge1}\left\lfloor\frac{n}{p^k}\right\rfloor
$$

and

$$
v_p\binom{2n}{n}=\sum_{k\ge1}\left(\left\lfloor\frac{2n}{p^k}\right\rfloor-2\left\lfloor\frac{n}{p^k}\right\rfloor\right).
$$

Consequently:

1. if $n<p\le2n$, then $v_p\binom{2n}{n}=1$;
2. in general,
   $$
   v_p\binom{2n}{n}\le\frac{\log(2n)}{\log p}.
   $$

## Facts & Assumptions

**Given:** A natural number $n\ge1$ and a prime $p$.

[L1] For every nonzero integer $a$, the valuation $v_p(a)$ is additive on
products and detects exactly the powers $p^k$ that divide $a$
([[lem-p-adic-valuation-additive]], [[lem-p-adic-valuation-basic]],
[[def-p-adic-valuation]]).

[L2] The factorial satisfies
$$
n!=1\cdot2\cdots n
$$
and
$$
\binom{2n}{n}\,n!\,n!=(2n)!
$$
([[def-factorial-and-falling-factorial]], [[thm-binomial-closed-formula]],
[[def-binomial-coefficient]]).

## Proof

**Proof technique:** direct.

1.1 By [L2] and repeated use of additivity from [L1], $ v_p(n!)=\sum_{m=1}^n v_p(m). $ For a fixed integer $m$, [L1] says that $v_p(m)$ is exactly the number of positive integers $k$ for which $p^k\mid m$. Summing over $m\le n$ therefore counts, for each $k\ge1$, how many multiples of $p^k$ lie in $\{1,\dots,n\}$. That number is $\lfloor n/p^k\rfloor$, so $ v_p(n!)=\sum_{k\ge1}\left\lfloor\frac{n}{p^k}\right\rfloor. $ [L1, L2, given, algebra]

2.1 Applying [L1] and [L2] to $\binom{2n}{n}\,n!\,n!=(2n)!$ gives $ v_p\binom{2n}{n}=v_p((2n)!)-2v_p(n!). $ Substituting the formula from step 1.1 twice yields $ v_p\binom{2n}{n}= \sum_{k\ge1}\left(\left\lfloor\frac{2n}{p^k}\right\rfloor-2\left\lfloor\frac{n}{p^k}\right\rfloor\right). $ [L1, L2, step 1.1, algebra]

3.1 Suppose $n<p\le2n$. Then $\lfloor 2n/p\rfloor=1$ and $\lfloor n/p\rfloor=0$. Also $p^2>2n$, so every term with $k\ge2$ vanishes in step 2.1. Hence $ v_p\binom{2n}{n}=1. $ [step 2.1, given, algebra]

3.2 For arbitrary $p$, each summand in step 2.1 is either $0$ or $1$, because $2\lfloor n/p^k\rfloor\le\lfloor 2n/p^k\rfloor\le2\lfloor n/p^k\rfloor+1$. Therefore $v_p\binom{2n}{n}$ is at most the number of positive integers $k$ with $p^k\le2n$. If $p^k\le2n$, then $k\log p\le\log(2n)$, so $k\le\log(2n)/\log p$. This proves $ v_p\binom{2n}{n}\le\frac{\log(2n)}{\log p}. $ [step 2.1, algebra]

4.1 Steps 1.1, 2.1, 3.1, and 3.2 prove all claims. [step 1.1, step 2.1, step 3.1, step 3.2] ∎
