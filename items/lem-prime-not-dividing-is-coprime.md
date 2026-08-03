---
id: lem-prime-not-dividing-is-coprime
kind: lemma
title: "For a prime $p$ and any integer $a$, $\\gcd(p,a)$ is $p$ when $p \\mid a$ and $1$ otherwise; so $p \\nmid a$ makes $p$ and $a$ coprime"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-prime, def-common-divisor-and-gcd, cor-common-divisor-divides-gcd,
       lem-gcd-basic-values, def-coprime, def-divides-in-z, lem-divisibility-basic,
       lem-units-of-z, def-integers, def-int-operations, def-int-order,
       thm-int-comm-ring, thm-int-ordered-ring, def-natural-numbers, lem-nat-embeds-int]
justified_by: []
aliases: []
landmark: false
short: "$p \\nmid a \\Rightarrow \\gcd(p,a) = 1$"
proof_strategy: cases
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
    - title: "Euclid's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Euclid%27s_lemma"
    - title: "Coprime integers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Coprime_integers"
    - title: "Inquiry into Advanced Algebra: Division, primes, and factorisation"
      url: "https://web.math.utk.edu/~dcartwr1/iaawa/section-division-algorithm.html"
pipeline_run: null
---

## Statement

Let $p$ be a prime ([[def-prime]]) and let $a \in \mathbb{Z}$. Then

$$\gcd(p,a) \;=\; \begin{cases} p & \text{if } p \mid a, \\ 1 & \text{if } p \nmid a, \end{cases}$$

with $\gcd$ as in [[def-common-divisor-and-gcd]] and divisibility as in
[[def-divides-in-z]]. In particular, if $p \nmid a$ then $p$ and $a$ are coprime
([[def-coprime]]).

## Facts & Assumptions

**Given:** A prime $p$, an integer $a$, and $g := \gcd(p,a)$ ([[def-common-divisor-and-gcd]]).

[L1] $p > 1$, and every positive divisor $d$ of $p$ satisfies $d = 1$ or $d = p$ ([[def-prime]]).

[L2] $g \ge 0$, $g \mid p$, $g \mid a$, and every common divisor of $p$ and $a$ divides $g$ ([[cor-common-divisor-divides-gcd]], [[def-common-divisor-and-gcd]]).

[L3] $\gcd(u,v) \ge 1$ unless $u = v = 0$, in which case $\gcd(u,v) = 0$ ([[lem-gcd-basic-values]]).

[L4] Divisibility is reflexive and transitive: $u \mid u$ for every $u$, and $d \mid u$ with $u \mid v$ gives $d \mid v$ ([[lem-divisibility-basic]], [[def-divides-in-z]]).

[L5] $u \mid 1$ exactly when $u = 1$ or $u = -1$ ([[lem-units-of-z]]).

[L6] $u$ and $v$ are coprime exactly when $\gcd(u,v) = 1$ ([[def-coprime]]).

[L7] The order on $\mathbb{Z}$ is total, antisymmetric and transitive and is compatible with addition; $x < y$ means $x \le y$ together with $x \ne y$ ([[thm-int-ordered-ring]], [[def-int-order]]).

[L8] The embedding $\iota : \mathbb{N} \to \mathbb{Z}$ is injective, preserves the order, and has as image exactly the nonnegative integers, with $\iota(0) = 0$ and $\iota(1) = 1$; and $0 \ne 1$ in $\mathbb{N}$ ([[lem-nat-embeds-int]], [[def-natural-numbers]], [[def-integers]]).

[L9] $\mathbb{Z}$ is a commutative ring: addition is associative and commutative, $x + 0 = x$, and every $x$ has an additive inverse $-x$, with $-(-x) = x$; we write $u - v$ for $u + (-v)$ ([[thm-int-comm-ring]], [[def-int-operations]]).

## Proof

**Proof technique:** cases.

1.1 $0 < 1$ in $\mathbb{Z}$: $1 = \iota(1)$ lies in the image of $\iota$, hence $1 \ge 0$, and $1 \ne 0$ because $\iota$ is injective and $0 \ne 1$ in $\mathbb{N}$. [L8]

1.2 Suppose $p \mid a$. Then $p$ is a common divisor of $p$ and $a$, since $p \mid p$, so $p \mid g$. [assume-case div, L2, L4]

2.1 $-1 < 0$: adding $-1$ to both sides of $0 < 1$ preserves the order, giving $-1 < 0$. [step 1.1, L7, L9]

2.2 $p > 0$ and $p \ne 0$, so $(p,a) \ne (0,0)$; consequently $g \ge 1$, and in particular $g > 0$. [step 1.1, L1, L3, L7]

3.1 $p \ne 1$ and $p \ne -1$: the first because $p > 1$, the second because $-1 < 0 < 1 < p$ and the order is transitive. [step 1.1, step 2.1, L1, L7]

3.2 $g$ is a positive divisor of $p$, so $g = 1$ or $g = p$. [step 2.2, L1, L2]

4.1 In that case $g \ne 1$: otherwise $p \mid 1$, forcing $p = 1$ or $p = -1$ and contradicting step 3.1. So $g = p$ by step 3.2. [assume-case div, step 3.1, step 3.2, L5]

4.2 Suppose instead $p \nmid a$. Then $g \ne p$, since $g \mid a$ and $g = p$ would give $p \mid a$. So $g = 1$ by step 3.2, that is, $p$ and $a$ are coprime. [assume-case nodiv, step 3.2, L2, L6]

5.1 Either $p \mid a$ or $p \nmid a$, and no third possibility exists, so the two cases above are exhaustive and give the stated value of $g$ in each. [step 4.1, step 4.2, cases-exhaustive] ∎

## Remarks

- **This is the only place on this page where primality becomes coprimality.** Every later appeal to Bézout's identity — Euclid's lemma ([[thm-euclids-lemma]]) first among them — runs through this lemma rather than through the definition of a prime, because the published [[lem-coprime-divides-product]] is stated for coprime integers and uses no primality at all.

- **The hypothesis that $p$ is prime is used twice**, and both uses are essential: once for $p > 1$, which puts $(p,a)$ outside the pair $(0,0)$ where the $\gcd$ convention lives and excludes $p$ from being a unit, and once for the divisor condition, which is what leaves only the two candidate values $1$ and $p$. For a composite $p$ the conclusion fails: $\gcd(4,6) = 2$, which is neither $4$ nor $1$, while $4 \nmid 6$.
