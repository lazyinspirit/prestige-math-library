---
id: ex-poker-hands-from-a-deck
kind: example
title: "Five-card hands from a $52$-card deck: $\\binom{52}{5} = 2598960$, and the count of hands with all cards of one suit"
status: draft
origin: session
deps: [def-binomial-coefficient, thm-binomial-closed-formula, thm-sum-rule,
       def-sum-over-a-finite-index-set, def-finite-cardinality, thm-product-rule,
       def-factorial-and-falling-factorial, lem-nat-mult-cancellative]
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
    - title: "Poker probability (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Poker_probability"
    - title: "Combination (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Combination"
    - title: "Binomial coefficient (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binomial_coefficient"
pipeline_run: null
---

## Example

Model a deck as the set $D := 13 \times 4$, a rank paired with a suit, so
$\lvert D\rvert = 52$ by [[thm-product-rule]]. A **hand** is a five-element
subset of $D$, that is an element of $[D]^{5}$. Then

$$\big\lvert [D]^{5}\big\rvert = \binom{52}{5} = 2598960 ,$$

and the number of hands all of whose cards share a suit is

$$4\cdot\binom{13}{5} = 4 \cdot 1287 = 5148 .$$

**No probability is claimed anywhere.** There is no probability space in this
library at this point in the reading order; these are counts of sets, and nothing
below divides one by another or calls a count a chance.

## Facts & Assumptions

**Given:** The deck $D = 13 \times 4$; for $s < 4$ the suit $D_s := 13 \times \{s\}$; and the falling factorials computed from $n^{\underline{0}} = 1$ and $n^{\underline{\sigma(k)}} = n^{\underline{k}}(n-k)$ ([[def-factorial-and-falling-factorial]]).

[L1] $\lvert [X]^{k}\rvert = \binom{\lvert X\rvert}{k}$ ([[def-binomial-coefficient]], [[def-finite-cardinality]]).

[L2] $\binom{n}{k}\,k! = n^{\underline{k}}$ for $k \le n$ ([[thm-binomial-closed-formula]], clause 1), and $5! = 120$ ([[def-factorial-and-falling-factorial]]).

[L3] The product rule ([[thm-product-rule]]) and the sum rule for a partition indexed by a finite set, with $\sum_{i \in S} c = \lvert S\rvert c$ ([[thm-sum-rule]], [[def-sum-over-a-finite-index-set]]).

[L4] Cancellation by a nonzero natural ([[lem-nat-mult-cancellative]]).

## Verification

**Proof technique:** direct.

1.1 The deck has $\lvert D\rvert = \lvert 13\rvert\cdot\lvert 4\rvert = 13 \cdot 4 = 52$ by [L3], and a hand is by definition an element of $[D]^{5}$, so the number of hands is $\binom{52}{5}$ by [L1]. [given, L1, L3]

2.1 The total. By [L2], $\binom{52}{5}\cdot 5! = 52^{\underline{5}} = 52\cdot 51\cdot 50\cdot 49\cdot 48$. Computing the falling factorial step by step: $52\cdot 51 = 2652$, $2652\cdot 50 = 132600$, $132600\cdot 49 = 6497400$, $6497400\cdot 48 = 311875200$. Since $5! = 120$ and $120\cdot 2598960 = 311875200$, cancellation by $120$ gives $\binom{52}{5} = 2598960$. [step 1.1, L2, L4]

2.2 The single-suit hands. Let $F$ be the set of hands all of whose cards lie in one suit, and for $s < 4$ let $F_s$ be the set of hands contained in $D_s$. The $F_s$ are pairwise disjoint, since a hand has five cards and cannot lie in two different suits at once, and their union is $F$. Each $D_s = 13\times\{s\}$ is in bijection with $13$ under the first projection, so $\lvert F_s\rvert = \lvert [D_s]^{5}\rvert = \binom{13}{5}$ by [L1]. By [L2], $\binom{13}{5}\cdot 120 = 13^{\underline{5}} = 13\cdot 12\cdot 11\cdot 10\cdot 9 = 154440$, and $120\cdot 1287 = 154440$, so $\binom{13}{5} = 1287$. Finally [L3] gives $\lvert F\rvert = \sum_{s \in 4}\lvert F_s\rvert = 4\cdot 1287 = 5148$. [step 1.1, L1, L2, L3, L4]

3.1 So there are $2598960$ hands in all, of which $5148$ have all five cards of one suit. Both numbers are cardinalities of explicitly described sets, and neither is a probability. [step 2.1, step 2.2] ∎

## Remarks

- **The sum rule is doing real work in step 2.2**, and its hypothesis is checked
  rather than assumed: two different suits share no card, so the four blocks are
  disjoint. Without that, adding the four counts would overcount, which is the
  failure this page's counterexample exhibits.

- **What is deliberately absent.** Turning $5148/2598960$ into a probability
  needs a probability space, which the library does not have here. The
  temptation to write one down is exactly the place a worked example smuggles in
  machinery it has not got.
