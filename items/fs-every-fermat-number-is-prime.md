---
id: fs-every-fermat-number-is-prime
kind: false-statement
title: "FALSE: every Fermat number $2^{2^{n}} + 1$ is prime"
status: published
origin: session
deps: [def-prime, def-group-power, lem-group-power-laws, lem-units-of-z,
       def-semigroup-and-monoid, def-divides-in-z, lem-divisibility-basic,
       lem-divisor-bound, thm-induction-principle, thm-int-comm-ring,
       thm-int-ordered-ring, def-int-operations, def-int-order, def-integers,
       lem-nat-embeds-int, lem-nat-discrete, def-natural-numbers, def-nat-order,
       def-nat-addition]
justified_by: []
aliases: [fs-fermat-numbers-are-prime]
landmark: false
short: "FALSE: every Fermat number is prime"
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
    - title: "Fermat number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fermat_number"
pipeline_run: null
---

## Statement

Powers are the natural powers of [[def-group-power]] in the commutative monoid
$(\mathbb{Z},\cdot,1)$ of [[lem-units-of-z]], and $\iota : \mathbb{N} \to
\mathbb{Z}$ is the embedding of [[lem-nat-embeds-int]]; a numeral $k$ inside
$\mathbb{Z}$ means $\iota(k)$.

**False claim:** every Fermat number is prime ([[def-prime]]). That is: for every
$m \in \mathbb{N}$ which is a power of two — meaning $\iota(m) = 2^{k}$ for some
$k \in \mathbb{N}$ — the integer

$$2^{m} + 1$$

is prime.

**Witness:** $k = 5$, so $m = 32$ and $\iota(32) = 2^{5}$. The integer
$2^{32} + 1$ is **not** prime, because

$$641 \;\mid\; 2^{32} + 1 ,$$

while $641$ is neither $1$ nor $2^{32}+1$.

Euler's verification is used below rather than a ten-digit division: $641$ is
simultaneously $5 \cdot 2^{7} + 1$ and $2^{4} + 5^{4}$, and those two readings
together force $641$ to divide $2^{32}+1$. Congruence notation is not available
at this point in the library, so every step is written as a divisibility
statement with an explicit witness.

## Facts & Assumptions

**Given:** The integers $2$, $5$, $641$ and the powers named below.

[L1] $p$ is prime when $p > 1$ and its only positive divisors are $1$ and $p$; an integer $> 1$ that is not prime is composite ([[def-prime]]).

[L2] $g^{0} = 1$ and $g^{\sigma(t)} = g^{t} g$ in $(\mathbb{Z},\cdot,1)$ ([[def-group-power]], [[def-semigroup-and-monoid]], [[lem-units-of-z]]).

[L3] Exponent laws for natural exponents in a monoid: $g^{a+b} = g^{a}g^{b}$, $(g^{a})^{b} = g^{ab}$, and $(gh)^{b} = g^{b}h^{b}$ when $gh = hg$ ([[lem-group-power-laws]]).

[L4] $d \mid a$ means $a = dc$ for some $c \in \mathbb{Z}$; divisibility is reflexive and linear, so $d \mid a$ and $d \mid b$ give $d \mid a - b$ ([[def-divides-in-z]], [[lem-divisibility-basic]]).

[L5] If $d \mid a$ and $a \ne 0$ then $|d| \le |a|$ ([[lem-divisor-bound]]).

[L6] $\mathbb{Z}$ is a commutative ring: addition and multiplication are associative and commutative, $x \cdot 1 = x$, multiplication distributes over addition, and every $x$ has an additive inverse; we write $u - v$ for $u + (-v)$ ([[thm-int-comm-ring]], [[def-int-operations]], [[def-integers]]).

[L7] The order on $\mathbb{Z}$ is total, antisymmetric and transitive, is compatible with addition, and positives are closed under multiplication ([[thm-int-ordered-ring]], [[def-int-order]]); $\iota$ is injective, preserves addition, multiplication and order, and has as image the nonnegative integers, with $\iota(0) = 0$, $\iota(1) = 1$ ([[lem-nat-embeds-int]], [[lem-nat-discrete]], [[def-natural-numbers]], [[def-nat-order]], [[def-nat-addition]]).

[L8] Induction on $\mathbb{N}$ ([[thm-induction-principle]]).

## Refutation

**Proof technique:** direct.

1.1 $0 < 1$, and every integer $y > 0$ satisfies $y \ge 1$: $y = \iota(t)$ with $t \ne 0$, so $1 \le y$ because $\iota$ preserves the order. [L7]

1.2 The small powers, by repeated doubling from [L2]: $2^{1} = 2$, $2^{2} = 4$, $2^{3} = 8$, $2^{4} = 16$, $2^{5} = 32$, $2^{6} = 64$, $2^{7} = 128$, $2^{8} = 256$, $2^{9} = 512$, $2^{10} = 1024$. Also $5^{2} = 25$ and $5^{4} = 25 \cdot 25 = 625$. [L2, L3, L6, algebra]

2.1 $2^{t} \ge 1$ for every $t \in \mathbb{N}$: the set of such $t$ contains $0$, since $2^{0} = 1$, and if $2^{t} \ge 1$ then $2^{\sigma(t)} = 2^{t} \cdot 2$ has both factors $\ge 1 > 0$, so the product is positive and hence $\ge 1$ by step 1.1. Induction finishes it. [step 1.1, L2, L7, L8]

2.2 $641 = 5 \cdot 2^{7} + 1$ and $641 = 2^{4} + 5^{4}$: indeed $5 \cdot 128 = 640$ and $640 + 1 = 641$, while $16 + 625 = 641$. [step 1.2, L6, algebra]

3.1 Put $u := 5 \cdot 2^{7}$, so $u = 640$ and $u + 1 = 641$; hence $641 \mid u + 1$. [step 2.2, L4]

3.2 $2^{32} + 1 > 641$: by [L3], $2^{32} = 2^{10} \cdot 2^{22} = 1024 \cdot 2^{22}$, and $2^{22} \ge 1 > 0$, so $2^{32} \ge 1024 > 641$. Hence $641 \ne 2^{32}+1$; also $641 \ne 1$ and $641 > 0$, and $2^{32}+1 > 1$. [step 2.1, step 1.2, L3, L7, algebra]

4.1 $u^{4} - 1 = (u+1)(u^{3} - u^{2} + u - 1)$, by expanding the right side with distributivity: the terms $-u^{3} + u^{3}$, $u^{2} - u^{2}$ and $-u + u$ cancel. Hence $641 \mid u^{4} - 1$. [step 3.1, L2, L4, L6]

5.1 $u^{4} = (5 \cdot 2^{7})^{4} = 5^{4} (2^{7})^{4} = 5^{4} \cdot 2^{28}$, using [L3] with $5$ and $2^{7}$ commuting and $7 \cdot 4 = 28$. So $641 \mid 5^{4} \cdot 2^{28} - 1$. [step 4.1, L3, L6]

6.1 From step 2.2, $5^{4} = 641 - 2^{4}$, so $5^{4} \cdot 2^{28} - 1 = (641 - 2^{4}) 2^{28} - 1 = 641 \cdot 2^{28} - 2^{4} 2^{28} - 1 = 641 \cdot 2^{28} - (2^{32} + 1)$, using $2^{4} 2^{28} = 2^{32}$ from [L3]. [step 2.2, step 5.1, L3, L6]

7.1 Now $641 \mid 641 \cdot 2^{28}$, and $641 \mid 641 \cdot 2^{28} - (2^{32}+1)$ by steps 5.1 and 6.1; subtracting, linearity gives $641 \mid 2^{32} + 1$. [step 5.1, step 6.1, L4, L6]

8.1 So $2^{32}+1$ has a positive divisor other than $1$ and itself, hence is not prime, and being greater than $1$ it is composite. Since $\iota(32) = 2^{5}$ by step 1.2, the natural number $32$ is a power of two and the claim fails there. [step 1.2, step 7.1, step 3.2, L1, L7] ∎

## Remarks

- **The first five Fermat numbers are prime, which is why the claim was believed.** For $k = 0,1,2,3,4$ the values are $3$, $5$, $17$, $257$ and $65537$, all classically known to be prime; that is not verified here, since the refutation needs only the single witness at $k = 5$. Fermat conjectured primality for all $k$; Euler produced the divisor $641$.

- **Why the two readings of $641$ are both needed.** $641 = 5 \cdot 2^{7} + 1$ is what makes $641$ divide $5^{4}2^{28} - 1$, and $641 = 2^{4} + 5^{4}$ is what converts that into a statement about $2^{32}+1$. Either alone says nothing.

- **Nothing is claimed about the cofactor.** The refutation needs only that $641$ is a divisor of $2^{32}+1$ lying strictly between $1$ and $2^{32}+1$; the complementary factor is neither computed nor analysed here, and its primality is not asserted.
