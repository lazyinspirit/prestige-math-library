---
id: cor-gcd-quotients-coprime
kind: corollary
title: "If $d = \\gcd(a,b)$ is nonzero then $a/d$ and $b/d$ are coprime"
status: draft
origin: session
deps: [lem-gcd-scaling, def-coprime, def-common-divisor-and-gcd, def-divides-in-z, def-int-abs, lem-int-abs-properties, lem-int-cancellation, thm-int-comm-ring, def-int-operations, thm-int-ordered-ring, def-int-order]
justified_by: []
aliases: []
landmark: false
short: "$\\gcd(a/d, b/d) = 1$"
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

## Statement

Let $a, b \in \mathbb{Z}$ and put $d := \gcd(a,b)$
([[def-common-divisor-and-gcd]]), and suppose $d \ne 0$, equivalently
$(a,b) \ne (0,0)$. Since $d \mid a$ and $d \mid b$, there are unique integers,
written $a/d$ and $b/d$, with

$$a \;=\; d \cdot (a/d), \qquad b \;=\; d \cdot (b/d) ,$$

uniqueness holding because $d \ne 0$ and $\mathbb{Z}$ has cancellation
([[lem-int-cancellation]]). Then

$$\gcd(a/d,\; b/d) \;=\; 1 ,$$

that is, $a/d$ and $b/d$ are coprime ([[def-coprime]]).

## Facts & Assumptions

**Given:** Integers $a, b$ with $(a,b) \ne (0,0)$, and $d := \gcd(a,b)$.

[L1] $\gcd(u,v) \ge 1$ when $(u,v) \ne (0,0)$, $\gcd(0,0) = 0$, and $\gcd(u,v)$ is a common divisor of $u$ and $v$ ([[def-common-divisor-and-gcd]]).

[L2] $\gcd(cu, cv) = |c| \gcd(u,v)$ for all $c, u, v$ ([[lem-gcd-scaling]]).

[L3] If $xz = yz$ and $z \ne 0$ then $x = y$ ([[lem-int-cancellation]]).

[L4] $d \mid u$ means $u = dq$ for some $q$ ([[def-divides-in-z]]).

[L5] $|x| = x$ when $x \ge 0$ ([[def-int-abs]], [[lem-int-abs-properties]]).

[L6] $\mathbb{Z}$ is a commutative ring with $x \cdot 1 = x$ ([[thm-int-comm-ring]], [[def-int-operations]]); its order is total, antisymmetric and transitive ([[thm-int-ordered-ring]], [[def-int-order]]).

[L7] $u$ and $v$ are coprime exactly when $\gcd(u,v) = 1$ ([[def-coprime]]).

## Proof

**Proof technique:** direct.

1.1 Since $(a,b) \ne (0,0)$ we have $d \ge 1$, so $d \ne 0$ and $d \ge 0$, whence $|d| = d$. [L1, L5, L6]

2.1 $d$ is a common divisor of $a$ and $b$, so there are integers $a'$ and $b'$ with $a = d a'$ and $b = d b'$; each is unique, since $d a' = d a''$ with $d \ne 0$ gives $a' = a''$ by cancellation. Write $a' = a/d$ and $b' = b/d$. [step 1.1, L1, L3, L4, L6]

3.1 By [L2] applied with $c = d$, $u = a'$ and $v = b'$: $d = \gcd(a,b) = \gcd(d a', d b') = |d| \gcd(a',b') = d\,\gcd(a',b')$. [step 1.1, step 2.1, L2]

4.1 Also $d = d \cdot 1$, so $d \cdot \gcd(a',b') = d \cdot 1$ with $d \ne 0$, and cancellation gives $\gcd(a',b') = 1$: the integers $a/d$ and $b/d$ are coprime. [step 1.1, step 3.1, L3, L6, L7] ∎

## Remarks

- **The hypothesis $d \ne 0$ is not a restriction in disguise.** It fails only at
  $(a,b) = (0,0)$, where $a/d$ and $b/d$ are not defined at all, since division
  by $0$ determines nothing.

- **This is the standard "reduce a fraction to lowest terms" statement**, proved
  without any fractions: $a/d$ is defined as the unique integer solving
  $a = d \cdot x$, and lives in $\mathbb{Z}$ throughout.
