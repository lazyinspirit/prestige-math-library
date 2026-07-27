---
id: lem-coprime-criterion
kind: lemma
title: "$a$ and $b$ are coprime if and only if $ax + by = 1$ for some integers $x, y$; and in that case the only common divisors of $a$ and $b$ are $1$ and $-1$"
status: published
origin: session
deps: [def-coprime, thm-bezout-identity, cor-common-divisor-divides-gcd, def-common-divisor-and-gcd, lem-divisibility-basic, lem-units-of-z, def-divides-in-z, thm-int-comm-ring, def-int-operations, thm-int-ordered-ring, def-int-order]
justified_by: []
forward_refs: [ex-linear-diophantine-equation-solvability]
aliases: []
landmark: false
short: "coprime iff $ax+by=1$"
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
    - title: "Coprime integers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Coprime_integers"
pipeline_run: null
---

## Statement

Let $a, b \in \mathbb{Z}$. Then $a$ and $b$ are coprime ([[def-coprime]]) if and
only if

$$ax + by \;=\; 1 \qquad \text{for some } x, y \in \mathbb{Z} .$$

When this holds, the set of common divisors of $a$ and $b$ is exactly
$\{1, -1\}$.

## Facts & Assumptions

**Given:** Integers $a$ and $b$.

[L1] $a$ and $b$ are coprime when $\gcd(a,b) = 1$ ([[def-coprime]], [[def-common-divisor-and-gcd]]).

[L2] For $(a,b) \ne (0,0)$ there are $x_0, y_0$ with $a x_0 + b y_0 = \gcd(a,b)$ ([[thm-bezout-identity]]).

[L3] $d = \gcd(a,b)$ exactly when $d \ge 0$, $d \mid a$, $d \mid b$, and every common divisor of $a$ and $b$ divides $d$ ([[cor-common-divisor-divides-gcd]]).

[L4] If $c \mid a$ and $c \mid b$ then $c \mid ax + by$ for all $x, y$; and $1 \mid a$ for every $a$ ([[lem-divisibility-basic]], [[def-divides-in-z]]).

[L5] $c \mid 1$ exactly when $c = 1$ or $c = -1$, and $1 \ne -1$ ([[lem-units-of-z]]).

[L6] $\mathbb{Z}$ is a commutative ring, with $x \cdot 0 = 0$, $x + 0 = x$, $-(-x) = x$ and $(-x)(-y) = xy$ ([[thm-int-comm-ring]], [[def-int-operations]]); its order is total, antisymmetric and transitive and is compatible with addition, and positives are closed under multiplication ([[thm-int-ordered-ring]], [[def-int-order]]).

[L7] $\gcd(0,0) = 0$ by convention ([[def-common-divisor-and-gcd]]).

## Proof

**Proof technique:** direct.

1.1 $1 \ne 0$ and $0 \le 1$. If $1 = 0$ then $-1 = -0 = 0 = 1$, contradicting $1 \ne -1$ in [L5]. By totality either $0 \le 1$ or $1 \le 0$; in the second case adding $-1$ gives $0 \le -1$, and $-1 \ne 0$ since otherwise $1 = 0$, so $0 < -1$ and hence $0 < (-1)(-1) = 1$, which with $1 \le 0$ contradicts antisymmetry. [L5, L6]

1.2 Conversely, suppose $ax + by = 1$ for some $x, y$. Every common divisor $c$ of $a$ and $b$ divides $ax + by = 1$ by [L4], hence $c = 1$ or $c = -1$ by [L5]. [L4, L5]

2.1 Suppose $a$ and $b$ are coprime, so $\gcd(a,b) = 1$. Then $(a,b) \ne (0,0)$, since $\gcd(0,0) = 0 \ne 1$; so [L2] supplies $x_0, y_0$ with $a x_0 + b y_0 = \gcd(a,b) = 1$. [step 1.1, L1, L2, L7]

2.2 The integer $1$ then satisfies all four conditions of [L3]: $1 \ge 0$ by step 1.1, $1 \mid a$ and $1 \mid b$ by [L4], and every common divisor of $a$ and $b$ divides $1$ by step 1.2. Hence $\gcd(a,b) = 1$, that is, $a$ and $b$ are coprime. [step 1.1, step 1.2, L1, L3, L4]

3.1 So coprimality and the solvability of $ax + by = 1$ are equivalent, by step 2.1 and step 2.2. [step 2.1, step 2.2]

4.1 When they hold, step 1.2 shows every common divisor is $1$ or $-1$; conversely $1$ and $-1$ are common divisors of any pair, since $1 \mid a$, $1 \mid b$, $-1 \mid a$ and $-1 \mid b$. So the set of common divisors is exactly $\{1,-1\}$, and it has two elements since $1 \ne -1$. [step 1.2, L4, L5] ∎

## Remarks

- **The criterion is the practical form of coprimality.** Verifying
  $\gcd(a,b) = 1$ from the definition means examining all common divisors;
  exhibiting one pair $(x,y)$ with $ax + by = 1$ settles it in a line, and the
  extended Euclidean algorithm produces such a pair
  ([[cor-extended-euclidean-bezout-coefficients]]).

- **The analogous statement with $1$ replaced by a general $c$ is false**, and
  the correct version is that $ax + by = c$ is solvable exactly when
  $\gcd(a,b) \mid c$; that is worked out on the companion page
  ([[ex-linear-diophantine-equation-solvability]]).
