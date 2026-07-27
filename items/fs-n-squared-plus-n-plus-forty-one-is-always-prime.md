---
id: fs-n-squared-plus-n-plus-forty-one-is-always-prime
kind: false-statement
title: "FALSE: $n^{2} + n + 41$ is prime for every natural number $n$"
status: draft
origin: session
deps: [def-prime, def-divides-in-z, lem-divisibility-basic, lem-divisor-bound,
       def-group-power, lem-group-power-laws, def-semigroup-and-monoid, lem-units-of-z,
       thm-int-comm-ring, thm-int-ordered-ring, def-int-operations, def-int-order,
       def-integers, lem-nat-embeds-int, lem-nat-discrete, def-natural-numbers,
       def-nat-order]
justified_by: []
aliases: [fs-euler-polynomial-is-always-prime]
landmark: false
short: "FALSE: $n^2+n+41$ is always prime"
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
    - title: "Formula for primes (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Formula_for_primes"
    - title: "Lucky numbers of Euler (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lucky_numbers_of_Euler"
pipeline_run: null
---

## Statement

**False claim:** for every $n \in \mathbb{N}$ the integer

$$\iota(n)^{2} + \iota(n) + 41$$

is prime ([[def-prime]]), where $\iota : \mathbb{N} \to \mathbb{Z}$ is the
embedding of [[lem-nat-embeds-int]] and the square is the natural power of
[[def-group-power]] in the commutative monoid $(\mathbb{Z},\cdot,1)$ of
[[lem-units-of-z]]. As usual a numeral $k$ inside $\mathbb{Z}$ means $\iota(k)$.

**Witness:** $n = 40$. Here

$$40^{2} + 40 + 41 \;=\; 1600 + 40 + 41 \;=\; 1681 \;=\; 41 \cdot 41 ,$$

so $1681$ has the positive divisor $41$, which is neither $1$ nor $1681$: it is
composite, not prime.

The failure is structural rather than accidental: $40^{2} + 40 = 40 \cdot 41$, so
the whole expression is $40 \cdot 41 + 41 = 41 \cdot 41$.

## Facts & Assumptions

**Given:** The integers $40$, $41$ and $1681$.

[L1] $p$ is prime when $p > 1$ and its only positive divisors are $1$ and $p$; an integer $> 1$ that is not prime is composite ([[def-prime]]).

[L2] $g^{0} = 1$ and $g^{\sigma(k)} = g^{k} g$ in $(\mathbb{Z},\cdot,1)$, so $g^{2} = g \cdot g$ ([[def-group-power]], [[lem-group-power-laws]], [[def-semigroup-and-monoid]], [[lem-units-of-z]]).

[L3] $d \mid a$ means $a = dc$ for some $c \in \mathbb{Z}$ ([[def-divides-in-z]], [[lem-divisibility-basic]]).

[L4] If $d \mid a$ and $a \ne 0$ then $|d| \le |a|$ ([[lem-divisor-bound]]).

[L5] $\mathbb{Z}$ is a commutative ring: multiplication is associative and commutative, $x \cdot 1 = x$, and multiplication distributes over addition ([[thm-int-comm-ring]], [[def-int-operations]], [[def-integers]]).

[L6] The order on $\mathbb{Z}$ is total, antisymmetric and transitive and is compatible with addition ([[thm-int-ordered-ring]], [[def-int-order]]); $\iota$ is injective and order preserving with image the nonnegative integers, $\iota(0) = 0$, $\iota(1) = 1$ ([[lem-nat-embeds-int]], [[lem-nat-discrete]], [[def-natural-numbers]], [[def-nat-order]]).

## Refutation

**Proof technique:** direct.

1.1 $0 < 1$, since $1 = \iota(1)$ is nonnegative and differs from $0 = \iota(0)$ by injectivity of $\iota$. [L6]

1.2 At $n = 40$ the expression equals $41 \cdot 41$. By [L2], $40^{2} = 40 \cdot 40$, and distributivity gives $40 \cdot 40 + 40 = 40 \cdot (40 + 1) = 40 \cdot 41$; adding $41$ and using distributivity again, $40 \cdot 41 + 41 = (40 + 1) \cdot 41 = 41 \cdot 41$. [L2, L5]

1.3 Arithmetically $40 \cdot 40 = 1600$, $1600 + 40 = 1640$, $1640 + 41 = 1681$, and $41 \cdot 41 = 1681$; so the value at $n = 40$ is $1681$. [L5, algebra]

2.1 $41 \mid 1681$, since $1681 = 41 \cdot 41$; and $41 > 0$. [step 1.2, step 1.3, L3]

2.2 $41 \ne 1$, because $41 - 1 = 40 > 0$; and $41 \ne 1681$, because $1681 - 41 = 1640 > 0$; and $1681 > 1$. [step 1.1, step 1.3, L6, algebra]

3.1 So $1681$ has a positive divisor other than $1$ and itself, hence is not prime; being greater than $1$ it is composite. The claim therefore fails at $n = 40$. [step 2.1, step 2.2, L1] ∎

## Remarks

- **Checking small cases proves nothing here, and that is the point of the item.** The values at $n = 0, 1, \dots, 39$ are classically known to be prime — this is Euler's polynomial, and the fact is not verified above, since it is not needed for a refutation. A claim that survives forty consecutive tests and fails at the forty-first is exactly the situation a universal statement has to be proved out of, not tested out of.

- **The witness is not isolated.** $n = 41$ fails for the same structural reason: $41^{2} + 41 + 41 = 41 \cdot (41 + 1 + 1) = 41 \cdot 43 = 1763$, again divisible by $41$ and again neither $1$ nor itself. What both cases exploit is that $41$ divides the constant term, so it divides the whole value whenever it divides $n^{2} + n$.

- **The refuted claim is about $\mathbb{N}$, which contains $0$.** At $n = 0$ the value is $41$, so the claim is not vacuous at its first index; the witness is needed.
