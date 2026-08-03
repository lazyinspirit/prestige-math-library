---
id: ex-two-is-the-only-even-prime
kind: example
title: "$2$ is prime, and it is the only even prime: every even integer $n > 2$ is composite"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-prime, def-divides-in-z, lem-divisibility-basic, lem-divisor-bound,
       def-int-abs, lem-int-abs-properties, thm-int-ordered-ring, thm-int-comm-ring,
       def-int-operations, def-int-order, def-integers, lem-nat-embeds-int,
       lem-nat-discrete, def-natural-numbers, def-nat-order]
justified_by: []
forward_refs: [ex-p-adic-ultrametric]
aliases: []
landmark: false
short: "$2$ is the only even prime"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Prime number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Prime_number"
    - title: "Parity (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Parity_(mathematics)"
    - title: "Old Dominion University: Two is the only even prime"
      url: "https://www.cs.odu.edu/~tkennedy/cs417/s25/Public/aQuickWarmUp1/twoIsPrime.mmd.html"
pipeline_run: null
---

## Example

Call an integer **even** when $2 \mid n$ ([[def-divides-in-z]]), where
$2 := 1 + 1$. Then:

1. $2$ is prime ([[def-prime]]);
2. every even integer $n > 2$ is composite.

So $2$ is the only even prime, and every other prime is odd.

## Facts & Assumptions

**Given:** The integer $2 := 1 + 1$.

[L1] $p$ is prime when $p > 1$ and every positive divisor of $p$ is $1$ or $p$; an integer $n > 1$ that is not prime is composite ([[def-prime]]).

[L2] If $d \mid a$ and $a \ne 0$ then $d \ne 0$ and $|d| \le |a|$ ([[lem-divisor-bound]]).

[L3] $|x| = x$ when $x \ge 0$ ([[def-int-abs]], [[lem-int-abs-properties]]).

[L4] Divisibility is reflexive; $d \mid u$ means $u = dc$ for some $c$ ([[lem-divisibility-basic]], [[def-divides-in-z]]).

[L5] The order on $\mathbb{Z}$ is total, antisymmetric and transitive and is compatible with addition ([[thm-int-ordered-ring]], [[def-int-order]]); $\mathbb{Z}$ is a commutative ring ([[thm-int-comm-ring]], [[def-int-operations]], [[def-integers]]).

[L6] $\iota : \mathbb{N} \to \mathbb{Z}$ is injective, preserves addition and order, and has as image exactly the nonnegative integers, with $\iota(0) = 0$ and $\iota(1) = 1$ ([[lem-nat-embeds-int]]).

[L7] On $\mathbb{N}$: $m < k$ exactly when $\sigma(m) \le k$ ([[lem-nat-discrete]]); $1 = \sigma(0)$ ([[def-natural-numbers]]); $0 \le k$ for every $k$ ([[def-nat-order]]).

## Verification

**Proof technique:** direct.

1.1 $0 < 1$: $1 = \iota(1)$ is nonnegative and differs from $0 = \iota(0)$ by injectivity of $\iota$. Adding $1$ gives $1 < 1 + 1 = 2$, so $2 > 1 > 0$. [L5, L6]

1.2 There is no integer strictly between $0$ and $1$: if $0 < x$ then $x = \iota(j)$ with $j \ne 0$, so $1 = \sigma(0) \le j$ and hence $1 \le x$, because $\iota$ preserves the order. [L6, L7]

2.1 Claim 1. Let $d$ be a positive divisor of $2$. Since $2 \ne 0$, [L2] gives $|d| \le |2| = 2$, and $d > 0$ gives $|d| = d$, so $1 \le d \le 2$ by step 1.2. [step 1.1, step 1.2, L2, L3, L5]

2.2 Claim 2. Let $n > 2$ with $2 \mid n$. Then $n > 2 > 1$, so $n > 1$; and $2$ is a positive divisor of $n$ with $2 \ne 1$ (by step 1.1) and $2 \ne n$ (since $n > 2$). [step 1.1, L5]

3.1 The only integers $d$ with $1 \le d \le 2$ are $1$ and $2$: if $d \ne 1$ then $1 < d$, so $1 + 1 \le d$ by step 1.2 applied to $d - 1 > 0$, that is $2 \le d$, and with $d \le 2$ antisymmetry gives $d = 2$. Both $1$ and $2$ do divide $2$. Hence the only positive divisors of $2$ are $1$ and $2$, and $2 > 1$, so $2$ is prime. [step 1.1, step 1.2, step 2.1, L1, L4, L5]

3.2 So $n$ has a positive divisor other than $1$ and $n$, hence is not prime; being greater than $1$, it is composite. [step 2.2, L1]

4.1 Claims 1 and 2 are established, and together they say $2$ is the only even prime: an even prime $n$ satisfies $n > 1$, hence $2 \le n$ by step 3.1's argument, and $n > 2$ is excluded because such an $n$ is composite by step 3.2; so $n = 2$. [step 1.2, step 3.1, step 3.2, L1, L5] ∎

## Remarks

- **"Even" is defined here as divisibility by $2$, not by a new notion of parity.** That is [[def-divides-in-z]] applied at $d = 2$, so no second vocabulary is introduced, and the odd integers are exactly those with remainder $1$ under [[thm-division-algorithm-in-z]].

- **This is why parity sufficed for the $2$-adic case elsewhere in the library.** The published [[ex-p-adic-ultrametric]] builds the $2$-adic valuation from parity alone and records that the general $p$-adic valuation needs primality and unique factorisation. At $p = 2$ "not divisible by $2$" is a single condition that the division algorithm decides; for a general prime $p$ the corresponding step is [[thm-euclids-lemma]].

- **The smallest prime is $2$, and there is no smaller one to miss.** $1$ and $0$ are excluded by the clause $p > 1$ of [[def-prime]], and negative integers by the same clause, so the classification here is complete rather than a convention about where to start.
