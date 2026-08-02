---
id: cor-common-divisor-divides-gcd
kind: corollary
title: "Every common divisor of $a$ and $b$ divides $\\gcd(a,b)$; consequently $d = \\gcd(a,b)$ exactly when $d \\ge 0$, $d \\mid a$, $d \\mid b$, and every common divisor of $a$ and $b$ divides $d$ — a characterisation that holds at $(a,b) = (0,0)$ as well"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-bezout-identity, def-common-divisor-and-gcd, def-divides-in-z, lem-divisibility-basic, lem-associates-characterisation, def-int-abs, lem-int-abs-properties]
justified_by: []
aliases: []
landmark: true
short: "$c \\mid a, c \\mid b \\Rightarrow c \\mid \\gcd(a,b)$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Greatest common divisor (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Greatest_common_divisor"
pipeline_run: null
---

## Statement

Let $a, b \in \mathbb{Z}$. Every common divisor of $a$ and $b$ divides
$\gcd(a,b)$ ([[def-common-divisor-and-gcd]], [[def-divides-in-z]]).

Consequently, for $d \in \mathbb{Z}$ the following are equivalent:

1. $d = \gcd(a,b)$;
2. $d \ge 0$, $d \mid a$, $d \mid b$, and every common divisor of $a$ and $b$
   divides $d$.

This characterisation holds for **every** pair $(a,b)$, the pair $(0,0)$
included, where it returns the value $\gcd(0,0) = 0$ fixed by convention.

## Facts & Assumptions

**Given:** Integers $a$ and $b$, and $g := \gcd(a,b)$ ([[def-common-divisor-and-gcd]]).

[L1] For $(a,b) \ne (0,0)$, $g$ is the greatest element of the set $D(a,b)$ of common divisors, so in particular $g \in D(a,b)$, and $g \ge 1$; at $(a,b) = (0,0)$, $g = 0$ by convention. In both cases $g \ge 0$ ([[def-common-divisor-and-gcd]]).

[L2] For $(a,b) \ne (0,0)$ there are $x_0, y_0 \in \mathbb{Z}$ with $a x_0 + b y_0 = g$ ([[thm-bezout-identity]]).

[L3] Every integer divides $0$ ([[def-divides-in-z]]).

[L4] If $c \mid a$ and $c \mid b$ then $c \mid ax + by$ for all $x, y$ ([[lem-divisibility-basic]]).

[L5] If $u \mid v$ and $v \mid u$ then $|u| = |v|$ ([[lem-associates-characterisation]]).

[L6] $|x| = x$ when $x \ge 0$ ([[def-int-abs]], [[lem-int-abs-properties]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $(a,b) \ne (0,0)$ and let $c$ be a common divisor of $a$ and $b$. By [L2] fix $x_0, y_0$ with $a x_0 + b y_0 = g$; then $c \mid g$ by [L4]. [L2, L4]

1.2 Suppose instead $(a,b) = (0,0)$. Then $g = 0$, and every integer, in particular every common divisor $c$, divides $0 = g$. [L1, L3]

1.3 $g$ itself is a common divisor of $a$ and $b$: for $(a,b) \ne (0,0)$ this is $g \in D(a,b)$, and for $(a,b) = (0,0)$ it is $0 \mid 0$. And $g \ge 0$ in both cases. [L1, L3]

2.1 In both cases every common divisor of $a$ and $b$ divides $g$; since the two cases are exhaustive, this is the first assertion. [step 1.1, step 1.2]

3.1 Claim 1 implies claim 2: if $d = g$ then $d \ge 0$, $d \mid a$ and $d \mid b$ by step 1.3, and every common divisor divides $d$ by step 2.1. [step 2.1, step 1.3]

3.2 Claim 2 implies claim 1: suppose $d \ge 0$, $d \mid a$, $d \mid b$, and every common divisor of $a$ and $b$ divides $d$. Then $d$ is a common divisor, so $d \mid g$ by step 2.1; and $g$ is a common divisor by step 1.3, so $g \mid d$ by hypothesis. Hence $|d| = |g|$ by [L5], and since $d \ge 0$ and $g \ge 0$ this reads $d = |d| = |g| = g$. [step 2.1, step 1.3, L1, L5, L6]

4.1 The two claims are therefore equivalent, for every pair $(a,b)$ including $(0,0)$, where step 1.2 and step 1.3 were proved directly from the convention rather than from a maximum. [step 1.2, step 1.3, step 3.1, step 3.2] ∎

## Remarks

- **This is the statement later pages should cite.** "Greatest in the order of $\mathbb{Z}$" is how $\gcd$ was defined, but it is not a property that survives at $(0,0)$ and it is not what any later argument uses. "Nonnegative, a common divisor, and divisible by every common divisor" is uniform, and it is the definition that generalises beyond $\mathbb{Z}$.

- **Both halves of claim 2 are needed.** Dropping $d \ge 0$ leaves $d$ determined only up to sign, since $-g$ also divides $a$ and $b$ and is divided by every common divisor ([[lem-associates-characterisation]]). Dropping "every common divisor divides $d$" leaves every nonnegative common divisor a candidate.
