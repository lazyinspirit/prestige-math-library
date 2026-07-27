---
id: lem-divisor-bound
kind: lemma
title: "If $d \\mid a$ and $a \\ne 0$ then $d \\ne 0$ and $|d| \\le |a|$; hence the set of divisors of a nonzero integer is bounded above by $|a|$"
status: published
origin: session
deps: [def-divides-in-z, def-int-abs, lem-int-abs-properties, def-int-order, thm-int-comm-ring, thm-int-ordered-ring, lem-nat-embeds-int, lem-nat-discrete, def-natural-numbers, def-nat-order, def-integers, def-int-operations]
justified_by: []
aliases: []
landmark: false
short: "$d \\mid a \\ne 0 \\Rightarrow |d| \\le |a|$"
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
    - title: "Divisor (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Divisor"
pipeline_run: null
---

## Statement

Let $a, d \in \mathbb{Z}$ with $d \mid a$ ([[def-divides-in-z]]) and $a \ne 0$.
Then $d \ne 0$ and

$$|d| \;\le\; |a| .$$

Consequently, for $a \ne 0$ the set $\{\, d \in \mathbb{Z} : d \mid a \,\}$ of
divisors of $a$ is bounded above by $|a|$: every divisor $d$ of $a$ satisfies
$d \le |a|$.

## Facts & Assumptions

**Given:** Integers $a$ and $d$ with $a = dq$ for some $q \in \mathbb{Z}$ and $a \ne 0$; and the embedding $\iota : \mathbb{N} \to \mathbb{Z}$, $\iota(k) = [(k,0)]$, of [[lem-nat-embeds-int]].

[L1] $\mathbb{Z}$ is a commutative ring: addition and multiplication are associative and commutative, $x + 0 = x$, $x \cdot 1 = x$, $x \cdot 0 = 0$, multiplication distributes over addition, and every $x$ has an additive inverse $-x$; we write $u - v$ for $u + (-v)$ ([[thm-int-comm-ring]], [[def-int-operations]]).

[L2] The order on $\mathbb{Z}$ is total, antisymmetric and transitive, is compatible with addition, and positives are closed under multiplication; $x < y$ means $x \le y$ together with $x \ne y$ ([[thm-int-ordered-ring]], [[def-int-order]]).

[L3] $\iota$ is injective, preserves addition, multiplication and order, and its image is exactly the set of nonnegative integers; $\iota(0) = 0$ and $\iota(1) = 1$ ([[lem-nat-embeds-int]], [[def-integers]]).

[L4] On $\mathbb{N}$: $m < n$ if and only if $\sigma(m) \le n$ ([[lem-nat-discrete]]); $1 = \sigma(0)$ ([[def-natural-numbers]]); and $0 \le k$ for every $k$, since $0 + k = k$ ([[def-nat-order]]).

[L5] $|x| \ge 0$; $|x| = 0$ exactly when $x = 0$; $|xy| = |x|\,|y|$; and $x \le |x|$ ([[lem-int-abs-properties]], [[def-int-abs]]).

[L6] $d \mid a$ means $a = dq$ for some $q \in \mathbb{Z}$ ([[def-divides-in-z]]).

## Proof

**Proof technique:** direct.

1.1 Write $a = dq$. If $d = 0$ then $a = 0 \cdot q = 0$, and if $q = 0$ then $a = d \cdot 0 = 0$; both contradict $a \ne 0$, so $d \ne 0$ and $q \ne 0$. [given, L1, L6]

1.2 If $0 \le u$ and $0 \le v$ then $0 \le uv$: if $u = 0$ or $v = 0$ then $uv = 0$, and otherwise $0 < u$ and $0 < v$, so $0 < uv$ because positives are closed under multiplication. [L1, L2]

1.3 Discreteness of $\mathbb{Z}$: if $0 < x$ then $1 \le x$. Indeed $x \ge 0$, so $x = \iota(k)$ for some $k \in \mathbb{N}$; $k \ne 0$ because $\iota(0) = 0 \ne x$; hence $0 < k$ in $\mathbb{N}$, so $1 = \sigma(0) \le k$, and applying $\iota$, which preserves the order, gives $1 = \iota(1) \le \iota(k) = x$. [L2, L3, L4]

2.1 $|a| = |d|\,|q|$, and $|q| > 0$ because $|q| \ge 0$ and $|q| \ne 0$, the latter since $q \ne 0$. [step 1.1, L5]

3.1 Hence $1 \le |q|$, so $0 \le |q| - 1$ by compatibility of the order with addition. [step 1.3, step 2.1, L2]

4.1 Since $|d| \ge 0$ and $0 \le |q| - 1$, the product $|d|\,(|q| - 1)$ is nonnegative, and it equals $|d|\,|q| - |d| = |a| - |d|$ by distributivity; adding $|d|$ gives $|d| \le |a|$. [step 1.2, step 2.1, step 3.1, L1, L2, L5]

5.1 Finally, every divisor $d$ of $a$ satisfies $d \le |d|$ and $|d| \le |a|$, hence $d \le |a|$ by transitivity: $|a|$ is an upper bound for the set of divisors of $a$. [step 4.1, L2, L5] ∎

## Remarks

- **There is no excluded case at $d = 0$.** The hypothesis is $a \ne 0$, and the
  conclusion *derives* $d \ne 0$ rather than assuming it: $0 \mid a$ forces
  $a = 0$ ([[def-divides-in-z]]), so a zero divisor simply cannot occur under
  this hypothesis. The statement is therefore not vacuous anywhere, and it is
  not silently excluding a case.

- **The hypothesis $a \ne 0$ cannot be dropped.** Every integer divides $0$, so
  the divisors of $0$ are all of $\mathbb{Z}$ and are bounded neither above nor
  below. This is exactly why the greatest common divisor of $(0,0)$ has to be
  fixed by a convention rather than by a maximum
  ([[def-common-divisor-and-gcd]]).
