---
id: ex-gcd-with-zero
kind: example
title: "$\\gcd$ at the boundary: $\\gcd(a,0) = |a|$, $\\gcd(0,0) = 0$, and the convention $\\gcd(0,0) = 0$ is exactly what makes $\\gcd(ca,cb) = |c|\\gcd(a,b)$ true at $c = 0$"
status: draft
origin: session
deps: [lem-nat-embeds-int, def-integers, def-common-divisor-and-gcd, lem-gcd-basic-values, lem-gcd-scaling, cor-common-divisor-divides-gcd, def-divides-in-z, def-int-abs, lem-int-abs-properties, thm-int-comm-ring, def-int-operations, thm-int-ordered-ring, def-int-order]
justified_by: []
aliases: []
landmark: false
short: "$\\gcd(0,0) = 0$ is forced"
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
    - title: "Greatest common divisor (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Greatest_common_divisor"
pipeline_run: null
---

## Example

The two boundary values of $\gcd$ are

$$\gcd(a,0) = |a| \quad \text{for every } a, \qquad \gcd(0,0) = 0 ,$$

the first by [[lem-gcd-basic-values]] and the second by the convention fixed in
[[def-common-divisor-and-gcd]]. The point of this example is that the second is
**not** free: instantiating the scaling identity
$\gcd(ca,cb) = |c|\gcd(a,b)$ of [[lem-gcd-scaling]] at $c = 0$ gives

$$\gcd(0,0) \;=\; \gcd(0 \cdot a,\; 0 \cdot b) \;=\; |0|\,\gcd(a,b) \;=\; 0 ,$$

so $0$ is the only value the identity permits. The same conclusion follows from
the identity taken at $(a,b) = (0,0)$ with $c = 1+1$: it reads
$\gcd(0,0) = (1+1)\gcd(0,0)$, and an integer $g$ with $g = g + g$ is $0$.

## Facts & Assumptions

**Given:** Integers $a, b, c$.

[L1] $\mathbb{Z}$ is a commutative ring: $x \cdot 0 = 0$, $x + 0 = x$, $x \cdot 1 = x$, multiplication distributes over addition, and every $x$ has an additive inverse ([[thm-int-comm-ring]], [[def-int-operations]]).

[L2] The order on $\mathbb{Z}$ is total, antisymmetric and transitive ([[thm-int-ordered-ring]], [[def-int-order]]).

[L3] $\gcd(u,0) = |u|$ for every $u$ ([[lem-gcd-basic-values]]).

[L4] $\gcd(0,0) = 0$ by the convention of [[def-common-divisor-and-gcd]], and $\gcd(u,v) \ge 0$ always.

[L5] $\gcd(cu,cv) = |c|\gcd(u,v)$ for all $c, u, v$ ([[lem-gcd-scaling]]).

[L6] $|0| = 0$, and $|u| = u$ for $u \ge 0$ ([[def-int-abs]], [[lem-int-abs-properties]]).

[L7] Every integer divides $0$ ([[def-divides-in-z]]), and every common divisor of $u$ and $v$ divides $\gcd(u,v)$ ([[cor-common-divisor-divides-gcd]]).

[L8] The embedding $\iota : \mathbb{N} \to \mathbb{Z}$ has image exactly the nonnegative integers, and $\iota(1) = 1$, $\iota(1+1) = 1+1$ since $\iota$ preserves addition ([[lem-nat-embeds-int]], [[def-integers]]).

## Verification

**Proof technique:** direct.

1.1 $\gcd(a,0) = |a|$ for every $a$, by [L3]; at $a = 0$ this reads $\gcd(0,0) = |0| = 0$, agreeing with the convention. [L3, L4, L6]

1.2 Instantiate [L5] at $c = 0$: $\gcd(0 \cdot a,\, 0 \cdot b) = |0|\gcd(a,b)$. The left side is $\gcd(0,0)$ and the right side is $0 \cdot \gcd(a,b) = 0$, so $\gcd(0,0) = 0$. [L1, L5, L6]

1.3 Instantiate [L5] at $(a,b) = (0,0)$ and $c = 1+1$: writing $g := \gcd(0,0)$, it reads $g = |1+1|\,g$. [L5]

2.1 An integer $g$ satisfying $g = (1+1)g = g + g$ is $0$: adding $-g$ to both sides gives $0 = g$. Combined with step 1.3, and with $|1+1| = 1+1$ because $1+1 = \iota(1+1)$ is nonnegative, this is a second derivation of $\gcd(0,0) = 0$. [step 1.3, L1, L4, L6, L8]

3.1 So the value $0$ is not chosen but determined, once the scaling identity is required to hold at every triple: steps 1.2 and 2.1 each force it, and step 1.1 shows it agrees with $\gcd(a,0) = |a|$ read at $a = 0$. [step 1.1, step 1.2, step 2.1]

4.1 The divisibility reading agrees as well: every integer divides $0$, so every common divisor of $(0,0)$ divides $0$, and $0$ is a common divisor of $(0,0)$ that is nonnegative — which is exactly the characterisation of $\gcd$ in [L7], returning the value $0$. [L4, L7] ∎

## Remarks

- **What goes wrong without a convention** is not that some identity becomes
  awkward but that $\gcd(0,0)$ names nothing at all: the common divisors of
  $(0,0)$ are all of $\mathbb{Z}$ and have no greatest element
  ([[cex-common-divisors-of-zero-have-no-greatest-element]]).

- **$\gcd(a,0) = |a|$ is where the absolute value earns its place.** Without it
  the natural guess $\gcd(a,0) = a$ would be negative for negative $a$, and
  $\gcd$ would fail to be nonnegative.
