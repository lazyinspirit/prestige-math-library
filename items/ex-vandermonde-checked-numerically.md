---
id: ex-vandermonde-checked-numerically
kind: example
title: "Vandermonde's identity checked at $m = 4$, $n = 3$, $k = 3$, both sides equal to $35$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-vandermonde-identity, def-binomial-coefficient, thm-binomial-closed-formula,
       thm-sum-rule, thm-product-rule, def-factorial-and-falling-factorial,
       lem-nat-mult-cancellative, def-nat-finite-sum-and-product]
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
    - title: "Vandermonde's identity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Vandermonde%27s_identity"
    - title: "Binomial coefficient (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binomial_coefficient"
    - title: "Bijective proof (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bijective_proof"
pipeline_run: null
---

## Example

Take $m = 4$, $n = 3$ and $k = 3$ in [[thm-vandermonde-identity]]. The left-hand
side is $\binom{7}{3} = 35$, and the right-hand side is

$$\binom{4}{0}\binom{3}{3} + \binom{4}{1}\binom{3}{2} + \binom{4}{2}\binom{3}{1} + \binom{4}{3}\binom{3}{0} = 1 + 12 + 18 + 4 = 35 .$$

The same identity at $k = 5$, still with $m = 4$ and $n = 3$, exercises the
boundary convention: three of the six terms vanish because their coefficients are
$0$, and both sides come to $21$.

## Facts & Assumptions

**Given:** $M := 4\times\{0\}$ and $N := 3\times\{1\}$, disjoint with $\lvert M\rvert = 4$, $\lvert N\rvert = 3$ and $\lvert M\cup N\rvert = 7$; and the factorials $2! = 2$, $3! = 6$, $4! = 24$, $5! = 120$, $7! = 5040$ ([[def-factorial-and-falling-factorial]]).

[L1] Vandermonde: $\binom{m+n}{k} = \sum_{i<k+1}\binom{m}{i}\binom{n}{k-i}$, proved by partitioning $[M\cup N]^{k}$ according to $\lvert S \cap M\rvert$, the block with value $i$ being in bijection with $[M]^{i}\times[N]^{k-i}$ ([[thm-vandermonde-identity]], [[thm-sum-rule]], [[thm-product-rule]]).

[L2] $\binom{n}{k}k!(n-k)! = n!$ for $k \le n$ ([[thm-binomial-closed-formula]]), cancellation by a nonzero natural ([[lem-nat-mult-cancellative]]), and $\binom{n}{0} = \binom{n}{n} = 1$, $\binom{n}{1} = n$, $\binom{n}{k} = 0$ for $k>n$ ([[def-binomial-coefficient]]).

[L3] Finite sums in $\mathbb{N}$ ([[def-nat-finite-sum-and-product]]).

## Verification

**Proof technique:** direct.

1.1 The coefficients needed, all from [L2]. $\binom{7}{3}\cdot 3!\cdot 4! = 7!$ gives $\binom{7}{3}\cdot 6\cdot 24 = 5040$, so $\binom{7}{3}\cdot 144 = 5040$ and $\binom{7}{3} = 35$. Similarly $\binom{4}{2}\cdot 2!\cdot 2! = 4!$ gives $\binom{4}{2} = 6$; and $\binom{4}{0} = \binom{3}{3} = \binom{3}{0} = 1$, $\binom{4}{1} = 4$, $\binom{4}{3} = \binom{4}{1} = 4$ by symmetry, $\binom{3}{1} = \binom{3}{2} = 3$. Also $\binom{7}{5}\cdot 5!\cdot 2! = 7!$ gives $\binom{7}{5}\cdot 240 = 5040$, so $\binom{7}{5} = 21$. [given, L2]

2.1 The case $k = 3$. The four terms of the sum, indexed by $i < 4$, are $\binom{4}{0}\binom{3}{3} = 1\cdot 1 = 1$, $\binom{4}{1}\binom{3}{2} = 4\cdot 3 = 12$, $\binom{4}{2}\binom{3}{1} = 6\cdot 3 = 18$ and $\binom{4}{3}\binom{3}{0} = 4\cdot 1 = 4$; their sum is $1+12+18+4 = 35$, equal to $\binom{7}{3}$. [step 1.1, L1, L3]

2.2 The case $k = 5$, where the boundary convention does the work. The sum runs over $i < 6$ and its terms are $\binom{4}{0}\binom{3}{5} = 0$, $\binom{4}{1}\binom{3}{4} = 0$, $\binom{4}{2}\binom{3}{3} = 6$, $\binom{4}{3}\binom{3}{2} = 12$, $\binom{4}{4}\binom{3}{1} = 3$ and $\binom{4}{5}\binom{3}{0} = 0$, the vanishing ones being those with $5-i > 3$ or $i > 4$. The total is $6+12+3 = 21 = \binom{7}{5}$. [step 1.1, L1, L2, L3]

3.1 The partition behind one block. The term with $i = 2$ in step 2.1 counts the sets $S \in [M\cup N]^{3}$ with exactly two elements in $M$; the bijection of [L1] sends such an $S$ to the pair $(S\cap M, S\cap N)$. For instance $S = \{(0,0),(1,0),(0,1)\}$ goes to $\big(\{(0,0),(1,0)\},\ \{(0,1)\}\big) \in [M]^{2}\times[N]^{1}$, and there are $\binom{4}{2}\binom{3}{1} = 18$ such $S$, which is the value computed there. So the identity is a count, not an algebraic accident. [step 1.1, step 2.1, L1]

4.1 Both instances confirm [L1]: at $k = 3$ both sides are $35$, at $k = 5$ both sides are $21$, and in the second the terms whose blocks are empty contribute $0$ exactly as the identity's lack of a range restriction requires. [step 2.1, step 2.2, step 3.1] ∎

## Remarks

- **Why a case with vanishing terms is included.** The identity is stated for all
  $m$, $n$, $k$ with no side condition, and that is only correct because
  out-of-range binomial coefficients are $0$ rather than undefined. Checking a
  case where three terms vanish is checking exactly that clause.
