---
id: thm-bezout-identity
kind: theorem
title: "Bézout's identity: for integers $a, b$ not both zero, $\\gcd(a,b)$ is the least positive element of $\\{\\, ax + by : x, y \\in \\mathbb{Z} \\,\\}$; in particular $ax + by = \\gcd(a,b)$ has an integer solution"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-common-divisor-and-gcd, def-divides-in-z, lem-divisibility-basic, lem-divisor-bound, thm-division-algorithm-in-z, thm-well-ordering-principle, lem-nat-embeds-int, def-natural-numbers, def-nat-order, def-int-abs, lem-int-abs-properties, def-integers, def-int-operations, def-int-order, thm-int-comm-ring, thm-int-ordered-ring]
justified_by: []
aliases: [thm-bezout]
landmark: true
short: "$\\gcd(a,b) = ax + by$"
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
    - title: "Bézout's identity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/B%C3%A9zout%27s_identity"
    - title: "Greatest common divisor (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Greatest_common_divisor"
pipeline_run: null
---

## Statement

Let $a, b \in \mathbb{Z}$, not both $0$, and put

$$I \;:=\; \{\, ax + by \;:\; x, y \in \mathbb{Z} \,\} .$$

Then $I$ contains a positive element, and its least positive element is
$\gcd(a,b)$ ([[def-common-divisor-and-gcd]]). In particular there are integers
$x_0, y_0$ with

$$a x_0 + b y_0 \;=\; \gcd(a,b),$$

so the equation $ax + by = \gcd(a,b)$ is solvable in $\mathbb{Z}$.

## Facts & Assumptions

**Given:** Integers $a$ and $b$, not both $0$; the set $I = \{\, ax + by : x, y \in \mathbb{Z} \,\}$; and the embedding $\iota : \mathbb{N} \to \mathbb{Z}$, $\iota(k) = [(k,0)]$, of [[lem-nat-embeds-int]].

[L1] $\mathbb{Z}$ is a commutative ring: addition and multiplication are associative and commutative, $x + 0 = x$, $x \cdot 1 = x$, $x \cdot 0 = 0$, multiplication distributes over addition, and every $x$ has an additive inverse $-x$, with $-(-x) = x$ and $(-x)(-y) = xy$; we write $u - v$ for $u + (-v)$ ([[thm-int-comm-ring]], [[def-int-operations]], [[def-integers]]).

[L2] The order on $\mathbb{Z}$ is total, antisymmetric and transitive, is compatible with addition, and positives are closed under multiplication; $x < y$ means $x \le y$ together with $x \ne y$ ([[thm-int-ordered-ring]], [[def-int-order]]).

[L3] $\iota$ is injective, preserves addition, multiplication and order, and its image is exactly the nonnegative integers ([[lem-nat-embeds-int]], [[def-natural-numbers]]).

[L4] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]], [[def-nat-order]]).

[L5] For $a \in \mathbb{Z}$ and $b' > 0$ there are integers $q, r$ with $a = q b' + r$ and $0 \le r < b'$ ([[thm-division-algorithm-in-z]]).

[L6] For $(a,b) \ne (0,0)$, $\gcd(a,b)$ is the unique greatest element of the set $D(a,b)$ of common divisors of $a$ and $b$ ([[def-common-divisor-and-gcd]]).

[L7] If $d \mid a$ and $d \mid b$ then $d \mid ax + by$ for all $x, y$ ([[lem-divisibility-basic]]).

[L8] If $d \mid a$ and $a \ne 0$ then $d \le |a|$ ([[lem-divisor-bound]]).

[L9] $|x| = x$ when $x \ge 0$ ([[def-int-abs]]); $|x| \ge 0$ ([[lem-int-abs-properties]]).

[L10] $d \mid a$ means $a = dq$ for some $q \in \mathbb{Z}$ ([[def-divides-in-z]]).

## Proof

**Proof technique:** direct.

1.1 If $0 \le u$ and $0 \le v$ then $0 \le uv$, and if moreover $u \ne 0$ and $v \ne 0$ then $0 < uv$: for $u = 0$ or $v = 0$ the product is $0$, and otherwise $0 < u$ and $0 < v$, so $0 < uv$ because positives are closed under multiplication. [L1, L2]

1.2 If $0 < u$ and $0 \le v$ then $0 < u + v$: adding $u$ to $0 \le v$ gives $u \le u + v$, so $0 \le u + v$ by transitivity, and $u + v = 0$ would give $u \le 0$ and hence $u = 0$ by antisymmetry, contrary to $0 < u$. [L1, L2]

2.1 $x \cdot x \ge 0$ for every $x$, with $x \cdot x > 0$ when $x \ne 0$. By totality either $0 \le x$, and step 1.1 applies directly, or $x \le 0$, in which case $0 \le -x$ by compatibility with addition and $x \cdot x = (-x)(-x) \ge 0$ by step 1.1; the strict form follows since $x \ne 0$ gives $-x \ne 0$. [step 1.1, L1, L2]

3.1 $I$ contains a positive element: $a \cdot a + b \cdot b \in I$, and one of $a, b$ is nonzero, so one of $a \cdot a$, $b \cdot b$ is positive and the other is nonnegative, whence the sum is positive by step 1.2. [step 2.1, step 1.2, given]

4.1 Let $P$ be the set of positive elements of $I$ and put $T := \{\, k \in \mathbb{N} : \iota(k) \in P \,\}$. Every $p \in P$ satisfies $p \ge 0$, hence $p = \iota(k)$ for some $k \in \mathbb{N}$ with $k \in T$; so $T$ is nonempty by step 3.1. [step 3.1, L3]

5.1 By well-ordering let $k_0$ be the least element of $T$ and put $d := \iota(k_0)$, so $d \in P$ and $d > 0$; fix $x_0, y_0 \in \mathbb{Z}$ with $d = a x_0 + b y_0$. [step 4.1, L4, choose]

6.1 $d$ is the least element of $P$: given $p \in P$, write $p = \iota(k)$ with $k \in T$ as in step 4.1; then $k_0 \le k$, and applying $\iota$, which preserves the order, gives $d = \iota(k_0) \le \iota(k) = p$. [step 4.1, step 5.1, L3, L4]

7.1 $d \mid a$. By [L5] with divisor $d > 0$ write $a = qd + r$ with $0 \le r < d$. Then $r = a - qd = a - q(a x_0 + b y_0) = a(1 - q x_0) + b(-q y_0)$, so $r \in I$. If $r$ were positive it would lie in $P$, so $d \le r$ by step 6.1, which with $r < d$ contradicts antisymmetry. Hence $r$ is not positive; with $0 \le r$ this forces $r = 0$, so $a = qd$ and $d \mid a$. [step 5.1, step 6.1, L1, L2, L5, L10]

7.2 $d \mid b$, by the same argument with $b$ in place of $a$: dividing $b$ by $d$ gives $b = q'd + r'$ with $0 \le r' < d$, and $r' = b(1 - q' y_0) + a(-q' x_0) \in I$, so $r' = 0$ as before. [step 5.1, step 6.1, L1, L2, L5, L10]

8.1 So $d$ is a common divisor of $a$ and $b$. Moreover every common divisor $c$ of $a$ and $b$ divides $a x_0 + b y_0 = d$ by [L7]. [step 5.1, step 7.1, step 7.2, L7]

9.1 Since $d > 0$ we have $d \ne 0$ and $|d| = d$, so every common divisor $c$ satisfies $c \le |d| = d$ by [L8]. [step 5.1, step 8.1, L8, L9]

10.1 Therefore $d$ is the greatest element of $D(a,b)$, and greatest elements are unique, so $d = \gcd(a,b)$ by [L6]; the hypothesis that $a$ and $b$ are not both $0$ is what makes that clause of the definition apply. [step 8.1, step 9.1, L6, given]

11.1 Hence $\gcd(a,b) = d$ is the least positive element of $I$ by step 6.1, and $\gcd(a,b) = a x_0 + b y_0$ by step 5.1: the equation $ax + by = \gcd(a,b)$ is solvable. [step 5.1, step 6.1, step 10.1] ∎

## Remarks

- **Where the work is.** Two places, and both are easy to hand-wave. The first is
  that $I$ contains a positive element at all, which is what the hypothesis "not
  both zero" buys and which is proved through $a \cdot a + b \cdot b$ rather than
  by taking $|a|$ (that would need a case split on which of $a$, $b$ is nonzero).
  The second is the last inequality: that every common divisor is *below* $d$
  needs [[lem-divisor-bound]], not just $c \mid d$, because divisibility is not
  the order of $\mathbb{Z}$.

- **The hypothesis cannot be dropped.** At $(a,b) = (0,0)$ the set $I$ is
  $\{0\}$, which has no positive element, so "the least positive element of $I$"
  names nothing; that is precisely the pair at which $\gcd$ is fixed by
  convention ([[def-common-divisor-and-gcd]]).

- **This is an existence statement.** The coefficients $x_0, y_0$ come from a
  least element supplied by well-ordering, so nothing here computes them.
  [[cor-extended-euclidean-bezout-coefficients]] does compute them.
