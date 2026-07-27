---
id: ex-linear-diophantine-equation-solvability
kind: example
title: "$ax + by = c$ has an integer solution exactly when $\\gcd(a,b) \\mid c$: $6x + 15y = 9$ is solvable and $6x + 15y = 7$ is not"
status: draft
origin: session
deps: [thm-bezout-identity, cor-common-divisor-divides-gcd, def-common-divisor-and-gcd, lem-divisibility-basic, def-divides-in-z, thm-division-algorithm-in-z, thm-int-comm-ring, def-int-operations, thm-int-ordered-ring, def-int-order, lem-nat-embeds-int, def-integers]
justified_by: []
aliases: []
landmark: false
short: "$ax+by=c$ solvable iff $\\gcd(a,b) \\mid c$"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Diophantine equation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Diophantine_equation"
pipeline_run: null
---

## Example

For integers $a, b, c$, the equation

$$ax + by = c$$

has a solution $(x,y) \in \mathbb{Z} \times \mathbb{Z}$ **if and only if**
$\gcd(a,b) \mid c$ ([[def-common-divisor-and-gcd]], [[def-divides-in-z]]).

With $a = 6$ and $b = 15$, where $\gcd(6,15) = 3$:

- $6x + 15y = 9$ is solvable, since $3 \mid 9$; explicitly
  $6 \cdot (-1) + 15 \cdot 1 = 9$;
- $6x + 15y = 7$ has no solution, since $3 \nmid 7$: dividing, $7 = 2 \cdot 3 + 1$
  with remainder $1 \ne 0$.

**Numerals.** For $k \in \mathbb{N}$ the symbol $k$ inside $\mathbb{Z}$ means
$\iota(k)$, the embedding of [[lem-nat-embeds-int]]; the numerical identities
below are the images of the corresponding identities in $\mathbb{N}$.

## Facts & Assumptions

**Given:** Integers $a, b, c$, and $g := \gcd(a,b)$.

[L1] $\mathbb{Z}$ is a commutative ring: addition and multiplication are associative and commutative, $x \cdot 1 = x$, $x \cdot 0 = 0$, $x \cdot (-1) = -x$, multiplication distributes over addition, and every $x$ has an additive inverse ([[thm-int-comm-ring]], [[def-int-operations]], [[def-integers]]).

[L2] The order on $\mathbb{Z}$ is total, antisymmetric and transitive ([[thm-int-ordered-ring]], [[def-int-order]]).

[L3] $g$ is a common divisor of $a$ and $b$, $g \ge 0$, and $\gcd(0,0) = 0$ ([[def-common-divisor-and-gcd]]).

[L4] For $(a,b) \ne (0,0)$ there are $x_0,y_0$ with $a x_0 + b y_0 = g$ ([[thm-bezout-identity]]).

[L5] $d = \gcd(u,v)$ exactly when $d \ge 0$, $d \mid u$, $d \mid v$ and every common divisor of $u$ and $v$ divides $d$ ([[cor-common-divisor-divides-gcd]]).

[L6] If $d \mid u$ and $d \mid v$ then $d \mid ux + vy$ for all $x,y$ ([[lem-divisibility-basic]]).

[L7] $d \mid u$ means $u = dq$ for some $q$; $0 \mid u$ only for $u = 0$ ([[def-divides-in-z]]).

[L8] For $u \in \mathbb{Z}$ and $v > 0$ there is exactly one pair $(q,r)$ with $u = qv + r$ and $0 \le r < v$, and $v \mid u$ holds exactly when $r = 0$ ([[thm-division-algorithm-in-z]]).

## Verification

**Proof technique:** direct.

1.1 If $ax + by = c$ has a solution, then $g \mid a$ and $g \mid b$ give $g \mid ax + by = c$ by [L6]. [L3, L6]

1.2 Conversely suppose $g \mid c$, say $c = gk$. If $(a,b) \ne (0,0)$, take $x_0, y_0$ with $a x_0 + b y_0 = g$ and multiply by $k$: $a(x_0 k) + b(y_0 k) = gk = c$, a solution. [L1, L4, L7]

1.3 If instead $(a,b) = (0,0)$ then $g = 0$, so $0 \mid c$ forces $c = 0$, and $a \cdot 0 + b \cdot 0 = 0 = c$ is a solution. The two cases are exhaustive. [L1, L3, L7]

1.4 $\gcd(6,15) = 3$. Indeed $3 \ge 0$; $6 = 3 \cdot 2$ and $15 = 3 \cdot 5$, so $3 \mid 6$ and $3 \mid 15$; and $6 \cdot (-2) + 15 \cdot 1 = -12 + 15 = 3$, so every common divisor of $6$ and $15$ divides $3$ by [L6]. By [L5] this is exactly the characterisation of $\gcd(6,15)$. [L1, L5, L6, L7, algebra]

2.1 So solvability of $ax + by = c$ is equivalent to $g \mid c$. [step 1.1, step 1.2, step 1.3]

3.1 $3 \mid 9$, since $9 = 3 \cdot 3$; so $6x + 15y = 9$ is solvable by step 2.1, and $6 \cdot (-1) + 15 \cdot 1 = -6 + 15 = 9$ exhibits a solution. [step 2.1, step 1.4, L1, L7, algebra]

4.1 $3 \nmid 7$: since $3 > 0$, [L8] applies, and $7 = 2 \cdot 3 + 1$ with $0 \le 1 < 3$ is the unique such representation, so the remainder is $1 \ne 0$ and $3$ does not divide $7$. Hence $6x + 15y = 7$ has no integer solution by step 2.1. [step 2.1, step 1.4, L1, L2, L8, algebra] ∎

## Remarks

- **The criterion is decidable by the Euclidean algorithm**: compute
  $\gcd(a,b)$ by [[thm-euclidean-algorithm]], test whether it divides $c$ by
  division with remainder, and, when it does, obtain a solution by scaling the
  Bézout pair that [[cor-extended-euclidean-bezout-coefficients]] computes.

- **Solutions are never unique when $a$ and $b$ are both nonzero**; the family is
  described in [[ex-bezout-coefficients-not-unique]], and scaling that
  description by $k = c/\gcd(a,b)$ describes the solutions of $ax + by = c$.

- **The unsolvable case is genuinely unsolvable, not merely hard.** Every value
  of $6x + 15y$ is a multiple of $3$, and $7$ is not one; no search is involved.
