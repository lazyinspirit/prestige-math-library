---
id: ex-euclidean-algorithm-worked
kind: example
title: "$\\gcd(1071, 462) = 21$ by the Euclidean algorithm, with the back-substitution giving $21 = 7 \\cdot 462 - 3 \\cdot 1071$"
status: published
origin: session
deps: [thm-euclidean-algorithm, cor-extended-euclidean-bezout-coefficients, lem-gcd-euclidean-step, lem-gcd-basic-values, thm-bezout-identity, def-common-divisor-and-gcd, def-divides-in-z, thm-division-algorithm-in-z, def-integers, def-int-operations, def-int-order, thm-int-comm-ring, thm-int-ordered-ring, lem-nat-embeds-int, def-int-abs, lem-int-abs-properties]
justified_by: []
aliases: []
landmark: false
short: "$\\gcd(1071,462) = 21$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Euclidean algorithm (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Euclidean_algorithm"
pipeline_run: null
---

## Example

The remainder descent of [[thm-euclidean-algorithm]] from $(1071, 462)$ is

$$1071 = 2 \cdot 462 + 147, \qquad 462 = 3 \cdot 147 + 21, \qquad 147 = 7 \cdot 21 + 0,$$

so the second coordinates are $462,\; 147,\; 21,\; 0$: the descent stops after
three divisions, the last nonzero remainder is $21$, and

$$\gcd(1071, 462) \;=\; 21 .$$

Reading the divisions backwards gives Bézout coefficients:

$$21 \;=\; 462 - 3 \cdot 147 \;=\; 462 - 3(1071 - 2 \cdot 462) \;=\; 7 \cdot 462 - 3 \cdot 1071 ,$$

that is, $1071 \cdot (-3) + 462 \cdot 7 = 21$.

**Numerals.** For $k \in \mathbb{N}$ the symbol $k$ written inside $\mathbb{Z}$
means $\iota(k)$, where $\iota : \mathbb{N} \to \mathbb{Z}$ is the embedding of
[[lem-nat-embeds-int]]. Since $\iota$ is injective and preserves addition,
multiplication and order, each numerical identity and inequality below is the
image of the corresponding one in $\mathbb{N}$, checked there by the ordinary
decimal arithmetic of $\mathbb{N}$.

## Facts & Assumptions

**Given:** The integers $1071$, $462$, $147$, $21$ and $0$, with numerals read as above through $\iota$ ([[lem-nat-embeds-int]], [[def-integers]]).

[L1] $\mathbb{Z}$ is a commutative ring, and its order is total, antisymmetric, transitive and compatible with addition ([[thm-int-comm-ring]], [[def-int-operations]], [[thm-int-ordered-ring]], [[def-int-order]]).

[L2] For $a \in \mathbb{Z}$ and $b > 0$ there is exactly one pair $(q,r)$ with $a = qb + r$ and $0 \le r < b$ ([[thm-division-algorithm-in-z]]).

[L3] If $a = qb + r$ then $\gcd(a,b) = \gcd(b,r)$ ([[lem-gcd-euclidean-step]]).

[L4] $\gcd(u,0) = |u|$, and $|u| = u$ for $u \ge 0$ ([[lem-gcd-basic-values]], [[def-int-abs]], [[lem-int-abs-properties]], [[def-common-divisor-and-gcd]]).

[L5] The descent of [[thm-euclidean-algorithm]] from $(a,b)$ with $b > 0$ sends $(u,v)$ with $v > 0$ to $(v, u - qv)$, where $q$ is the quotient of $u$ by $v$; it terminates at the least index $N$ with vanishing second coordinate, and the last nonzero remainder equals $\gcd(a,b)$.

[L6] For $(a,b) \ne (0,0)$ the equation $ax + by = \gcd(a,b)$ has an integer solution ([[thm-bezout-identity]]), and the extended descent computes one ([[cor-extended-euclidean-bezout-coefficients]]).

[L7] $d \mid a$ means $a = dq$ for some $q$ ([[def-divides-in-z]]).

## Verification

**Proof technique:** direct.

1.1 The three divisions are correct and are the ones [L2] produces. First, $2 \cdot 462 = 924$ and $924 + 147 = 1071$, with $0 \le 147 < 462$. Second, $3 \cdot 147 = 441$ and $441 + 21 = 462$, with $0 \le 21 < 147$. Third, $7 \cdot 21 = 147$ and $147 + 0 = 147$, with $0 \le 0 < 21$. In each line the remainder satisfies the constraint of [L2], so by the uniqueness there it is the remainder. [L1, L2, algebra]

2.1 Applying [L3] to the three identities in turn gives $\gcd(1071,462) = \gcd(462,147) = \gcd(147,21) = \gcd(21,0)$. [step 1.1, L3]

2.2 Back-substitution. From the second division, $21 = 462 - 3 \cdot 147$; from the first, $147 = 1071 - 2 \cdot 462$. Substituting, $21 = 462 - 3(1071 - 2 \cdot 462) = 462 + 6 \cdot 462 - 3 \cdot 1071 = 7 \cdot 462 - 3 \cdot 1071$. [step 1.1, L1, algebra]

3.1 $\gcd(21,0) = |21| = 21$, since $21 \ge 0$. Hence $\gcd(1071,462) = 21$. [step 2.1, L1, L4]

3.2 The result checks numerically: $7 \cdot 462 = 3234$, $3 \cdot 1071 = 3213$, and $3234 - 3213 = 21$. [step 2.2, algebra]

4.1 In the language of [L5], the descent from $(1071,462)$ is $(1071,462) \mapsto (462,147) \mapsto (147,21) \mapsto (21,0)$, so the second coordinates are $462, 147, 21, 0$; the least index with vanishing second coordinate is $N = 3$, the last nonzero remainder is $21$, and it equals $\gcd(1071,462)$ as [L5] asserts. [step 1.1, step 3.1, L5]

4.2 So $1071 \cdot (-3) + 462 \cdot 7 = 21 = \gcd(1071,462)$, an explicit instance of [L6] with $(x,y) = (-3, 7)$. [step 3.1, step 2.2, step 3.2, L6]

5.1 Finally $21 \mid 1071$ and $21 \mid 462$ directly: $21 \cdot 51 = 1071$ and $21 \cdot 22 = 462$, so the value found is indeed a common divisor, as it must be. [step 3.1, L7, algebra] ∎

## Remarks

- **Three divisions, and the count is exact for this pair only.** Nothing here,
  and nothing on the companion page, proves a bound on the number of divisions
  in terms of the size of the inputs.

- **The back-substitution is not a second algorithm.** It is the same descent
  read in reverse, and
  [[cor-extended-euclidean-bezout-coefficients]] performs it forwards, carrying
  the coefficient pairs alongside the remainders instead of recovering them
  afterwards.

- **The coefficients are not unique**: $1071 \cdot 19 + 462 \cdot (-44) = 21$ as
  well, and [[ex-bezout-coefficients-not-unique]] describes the whole family.
