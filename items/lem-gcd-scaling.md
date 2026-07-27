---
id: lem-gcd-scaling
kind: lemma
title: "$\\gcd(ca, cb) = |c|\\,\\gcd(a,b)$ for all integers $a, b, c$, the identity holding at $c = 0$ and at $(a,b) = (0,0)$ as well"
status: draft
origin: session
deps: [def-common-divisor-and-gcd, cor-common-divisor-divides-gcd, thm-bezout-identity, lem-divisibility-basic, lem-divisor-bound, def-divides-in-z, def-int-abs, lem-int-abs-properties, lem-int-cancellation, thm-int-comm-ring, def-int-operations, thm-int-ordered-ring, def-int-order]
justified_by: []
forward_refs: [ex-gcd-with-zero]
aliases: []
landmark: false
short: "$\\gcd(ca,cb) = |c|\\gcd(a,b)$"
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Greatest common divisor (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Greatest_common_divisor"
pipeline_run: null
---

## Statement

For all $a, b, c \in \mathbb{Z}$,

$$\gcd(ca,\, cb) \;=\; |c| \, \gcd(a,b)$$

([[def-common-divisor-and-gcd]], [[def-int-abs]]). The identity is asserted for
every triple, including $c = 0$ and $(a,b) = (0,0)$, where both sides are $0$.

## Facts & Assumptions

**Given:** Integers $a, b, c$, and $g := \gcd(a,b)$, $h := \gcd(ca,cb)$.

[L1] $\mathbb{Z}$ is a commutative ring: addition and multiplication are associative and commutative, $x \cdot 0 = 0$, $x \cdot 1 = x$, $x \cdot (-1) = -x$, multiplication distributes over addition, and every $x$ has an additive inverse, with $-(-x) = x$ ([[thm-int-comm-ring]], [[def-int-operations]]).

[L2] The order on $\mathbb{Z}$ is total, antisymmetric and transitive, and positives are closed under multiplication; $x < y$ means $x \le y$ together with $x \ne y$ ([[thm-int-ordered-ring]], [[def-int-order]]).

[L3] $\gcd(u,v) \ge 0$ always, with $\gcd(u,v) \ge 1$ when $(u,v) \ne (0,0)$ and $\gcd(0,0) = 0$ by convention; $\gcd(u,v)$ is a common divisor of $u$ and $v$ ([[def-common-divisor-and-gcd]]).

[L4] Every common divisor of $u$ and $v$ divides $\gcd(u,v)$ ([[cor-common-divisor-divides-gcd]]).

[L5] For $(u,v) \ne (0,0)$ there are $x_0, y_0$ with $u x_0 + v y_0 = \gcd(u,v)$ ([[thm-bezout-identity]]).

[L6] If $d \mid u$ and $d \mid v$ then $d \mid ux + vy$ for all $x, y$; and $d \mid u$ implies $d \mid uw$ and $-d \mid u$ ([[lem-divisibility-basic]]).

[L7] If $d \mid u$ and $u \ne 0$ then $|d| \le |u|$ ([[lem-divisor-bound]]); $d \mid u$ means $u = dq$ for some $q$ ([[def-divides-in-z]]).

[L8] $|x| \ge 0$; $|x| = 0$ exactly when $x = 0$; $|x| = x$ when $x \ge 0$; and $x$ is $|x|$ or $-|x|$ ([[def-int-abs]], [[lem-int-abs-properties]]).

[L9] A product of two nonzero integers is nonzero ([[lem-int-cancellation]]).

## Proof

**Proof technique:** cases.

1.1 If $0 \le u$ and $0 \le v$ then $0 \le uv$: for $u = 0$ or $v = 0$ the product is $0$, and otherwise $0 < u$ and $0 < v$, so $0 < uv$. [L1, L2]

1.2 Case $c = 0$: then $ca = cb = 0$, so the left side is $\gcd(0,0) = 0$; and $|c| = |0| = 0$, so the right side is $0 \cdot g = 0$. [assume-case zero, L1, L3, L8]

1.3 Case $(a,b) = (0,0)$: then $ca = cb = 0$, so the left side is $\gcd(0,0) = 0$; and $g = \gcd(0,0) = 0$, so the right side is $|c| \cdot 0 = 0$. [assume-case origin, L1, L3]

1.4 Case $c \ne 0$ and $(a,b) \ne (0,0)$. Then $g \ge 1$, and one of $a, b$ is nonzero, say $a \ne 0$; so $ca \ne 0$ by [L9] and hence $(ca,cb) \ne (0,0)$ and $h \ge 1$. Also $|c| \ne 0$, and $|c|\,g \ne 0$ by [L9]. [assume-case generic, L3, L8, L9]

2.1 In the case of step 1.4, $|c|\,g$ is a common divisor of $ca$ and $cb$. Indeed $g \mid a$, say $a = g a_1$; then $ca = c\,g\,a_1$, and $c$ is $|c|$ or $-|c|$ by [L8], so $ca = |c|\,g\,a_1$ or $ca = |c|\,g\,(-a_1)$, and in either case $|c|\,g \mid ca$. The same argument with $b$ gives $|c|\,g \mid cb$. [step 1.4, L1, L3, L7, L8]

2.2 Conversely, by [L5] fix $x_0, y_0$ with $a x_0 + b y_0 = g$; multiplying by $c$ gives $(ca)x_0 + (cb)y_0 = cg$. Since $h \mid ca$ and $h \mid cb$, [L6] gives $h \mid cg$; and $|c|\,g$ is $cg$ or $-cg$, because $|c|$ is $c$ or $-c$, so $h \mid |c|\,g$ as well. [step 1.4, L1, L3, L5, L6, L8]

3.1 Hence $|c|\,g \mid h$ by [L4]. [step 2.1, L4]

4.1 Both $h$ and $|c|\,g$ are nonzero by step 1.4, and both are nonnegative, $h$ by [L3] and $|c|\,g$ by step 1.1 and [L8]. From $h \mid |c|\,g$ and $|c|\,g \ne 0$, [L7] gives $|h| \le \bigl||c|\,g\bigr| = |c|\,g$, that is $h \le |c|\,g$; from $|c|\,g \mid h$ and $h \ne 0$, [L7] gives $|c|\,g \le |h| = h$. [step 1.1, step 1.4, step 3.1, step 2.2, L3, L7, L8]

5.1 By antisymmetry $h = |c|\,g$ in the case of step 1.4. [step 4.1, L2]

6.1 The three cases of steps 1.2, 1.3 and 1.4 exhaust the possibilities, since either $c = 0$, or $(a,b) = (0,0)$, or neither; so $\gcd(ca,cb) = |c|\gcd(a,b)$ for all $a, b, c$. [step 1.2, step 1.3, step 5.1, cases-exhaustive] ∎

## Remarks

- **The boundary cases are the point, not an aside.** The identity at
  $(a,b) = (0,0)$ is exactly what forces the convention $\gcd(0,0) = 0$: it reads
  $\gcd(0,0) = |c|\gcd(0,0)$ for every $c$, and taking $|c| = 1+1$ gives
  $\gcd(0,0) = 0$. That argument is recorded where the convention is made
  ([[def-common-divisor-and-gcd]]) and instantiated on the companion page
  ([[ex-gcd-with-zero]]).

- **Why $|c|$ and not $c$.** $\gcd$ is nonnegative by construction, so the right
  side must be too; with $c < 0$ and $g > 0$ the product $cg$ is negative and
  could not be a greatest common divisor.
