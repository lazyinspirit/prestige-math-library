---
id: ex-counting-committees
kind: example
title: "Choosing a committee: $\\binom{10}{3} = 120$, and the ordered count $10^{\\underline{3}} = 720$"
status: draft
origin: session
deps: [def-binomial-coefficient, thm-binomial-closed-formula, thm-number-of-injections,
       def-factorial-and-falling-factorial, def-finite-cardinality]
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
    - title: "Combination (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Combination"
    - title: "Binomial coefficient (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binomial_coefficient"
    - title: "Falling and rising factorials (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Falling_and_rising_factorials"
pipeline_run: null
---

## Example

Let $P$ be a set with $\lvert P\rvert = 10$. Two different sets are counted, and
naming which is which is the whole discipline of the example.

- The **unordered** selections of three members of $P$ are the elements of
  $[P]^{3}$, and there are $\binom{10}{3} = 120$ of them.
- The **ordered** selections of three distinct members, that is the injections
  $3 \to P$, number $10^{\underline{3}} = 720$.

The ratio of the two counts is $3! = 6$, which is clause 1 of
[[thm-binomial-closed-formula]] seen concretely: each $3$-element subset arises
from exactly $3!$ ordered selections.

## Facts & Assumptions

**Given:** A set $P$ with $\lvert P\rvert = 10$, and the factorials $3! = 6$, $7! = 5040$, $10! = 3628800$ ([[def-factorial-and-falling-factorial]]).

[L1] $\lvert [P]^{k}\rvert = \binom{\lvert P\rvert}{k}$ ([[def-binomial-coefficient]], [[def-finite-cardinality]]).

[L2] $\binom{n}{k}\,k!\,(n-k)! = n!$ for $k \le n$, and $\binom{n}{k}\,k! = n^{\underline{k}}$ ([[thm-binomial-closed-formula]], clause 1).

[L3] The number of injections of a $k$-element set into an $n$-element set is $n^{\underline{k}}$ ([[thm-number-of-injections]]).

[L4] $n^{\underline{0}} = 1$ and $n^{\underline{\sigma(k)}} = n^{\underline{k}}(n-k)$ ([[def-factorial-and-falling-factorial]]).

## Verification

**Proof technique:** direct.

1.1 The two sets are $[P]^{3}$, whose elements are the $3$-element subsets of $P$, and $\operatorname{Inj}(3,P)$, whose elements are the injective functions from $3 = \{0,1,2\}$ into $P$. They are different sets, and each count below is stated for the set it counts. [given, L1, L3]

2.1 The unordered count. By [L2] with $n = 10$, $k = 3$, $\binom{10}{3}\cdot 3!\cdot 7! = 10!$, that is $\binom{10}{3}\cdot 6 \cdot 5040 = 3628800$, so $\binom{10}{3}\cdot 30240 = 3628800$ and $\binom{10}{3} = 120$. By [L1] the set $[P]^{3}$ has $120$ elements. [step 1.1, L1, L2]

2.2 The ordered count. By [L4], $10^{\underline{1}} = 1 \cdot 10 = 10$, $10^{\underline{2}} = 10\cdot 9 = 90$ and $10^{\underline{3}} = 90 \cdot 8 = 720$. By [L3] the set $\operatorname{Inj}(3,P)$ has $720$ elements. [step 1.1, L3, L4]

3.1 The two counts are related as clause 1 of [L2] says: $\binom{10}{3}\cdot 3! = 120 \cdot 6 = 720 = 10^{\underline{3}}$. Each $3$-element subset of $P$ is the image of exactly $3! = 6$ injections $3 \to P$, so passing from the ordered to the unordered count divides by $6$. [step 2.1, step 2.2, L2] ∎

## Remarks

- **The standard error is to count one set and name the other.** "How many ways
  can a committee of three be chosen from ten people" is the count of
  $[P]^{3}$ only if the committee is unordered; if the three roles are
  distinguished it is the count of $\operatorname{Inj}(3,P)$. The two differ by a
  factor of $6$, and no computation can decide which was meant.
