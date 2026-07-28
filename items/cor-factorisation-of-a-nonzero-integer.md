---
id: cor-factorisation-of-a-nonzero-integer
kind: corollary
title: "Every nonzero integer $n$ is $u \\prod_{i<r} p_i$ with $u \\in \\{1,-1\\}$ and every $p_i$ prime; $u$ and $r$ are determined by $n$, and the list is determined up to a permutation"
status: published
origin: session
deps: [thm-fundamental-theorem-of-arithmetic, thm-prime-factorisation-exists, def-prime,
       def-semigroup-and-monoid, lem-units-of-z, def-monoid-finite-product,
       def-symmetric-group, def-int-abs, lem-int-abs-properties, lem-int-cancellation,
       def-integers, def-int-operations, def-int-order, thm-int-comm-ring,
       thm-int-ordered-ring, def-natural-numbers, def-nat-order, lem-nat-embeds-int,
       lem-nat-discrete]
justified_by: []
aliases: []
landmark: false
short: "$n = u \\prod p_i$ for nonzero $n$"
proof_strategy: direct
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
    - title: "Fundamental theorem of arithmetic (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fundamental_theorem_of_arithmetic"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{Z}$ with $n \ne 0$, and take finite products in the
commutative monoid $(\mathbb{Z},\cdot,1)$ of [[lem-units-of-z]], as in
[[def-monoid-finite-product]].

1. **Existence.** There are $u \in \{1,-1\}$, $r \in \mathbb{N}$ and a list
   $p : r \to \mathbb{Z}$ of primes ([[def-prime]]) with

   $$n \;=\; u \prod_{i<r} p_i .$$

2. **Uniqueness.** If also $n = u' \prod_{j<s} q_j$ with $u' \in \{1,-1\}$ and
   $q : s \to \mathbb{Z}$ a list of primes, then $u = u'$, $r = s$, and
   $q_i = p_{\pi(i)}$ for every $i < r$, for some $\pi \in \operatorname{Sym}(r)$
   ([[def-symmetric-group]]).

## Facts & Assumptions

**Given:** A nonzero integer $n$.

[L1] Every integer $m \ge 1$ is $\prod_{i<r} p_i$ for some $r \in \mathbb{N}$ and some list $p : r \to \mathbb{Z}$ of primes; and conversely every such product is $\ge 1$ ([[thm-prime-factorisation-exists]], [[def-monoid-finite-product]], [[lem-units-of-z]], [[def-semigroup-and-monoid]]).

[L2] If $\prod_{i<r} p_i = \prod_{j<s} q_j$ for lists of primes, then $r = s$ and $q_i = p_{\pi(i)}$ for all $i < r$, for some $\pi \in \operatorname{Sym}(r)$ ([[thm-fundamental-theorem-of-arithmetic]], [[def-symmetric-group]]).

[L3] $|x| = x$ when $x \ge 0$ and $|x| = -x$ when $x < 0$ ([[def-int-abs]]); $|x| \ge 0$, $|x| = 0$ exactly when $x = 0$, and $|xy| = |x|\,|y|$ ([[lem-int-abs-properties]]).

[L4] If $xz = yz$ and $z \ne 0$ then $x = y$ ([[lem-int-cancellation]]).

[L5] $\mathbb{Z}$ is a commutative ring: multiplication is associative and commutative, $x \cdot 1 = x$, $x \cdot (-1) = -x$, and every $x$ has an additive inverse, with $-(-x) = x$ ([[thm-int-comm-ring]], [[def-int-operations]], [[def-integers]]).

[L6] The order on $\mathbb{Z}$ is total, antisymmetric and transitive and is compatible with addition ([[thm-int-ordered-ring]], [[def-int-order]]).

[L7] $\iota : \mathbb{N} \to \mathbb{Z}$ is injective, preserves the order, and has as image exactly the nonnegative integers, with $\iota(0) = 0$ and $\iota(1) = 1$ ([[lem-nat-embeds-int]]).

[L8] On $\mathbb{N}$: $0 \le k$ for every $k$ ([[def-nat-order]]); $m < k$ exactly when $\sigma(m) \le k$ ([[lem-nat-discrete]]); $1 = \sigma(0)$ ([[def-natural-numbers]]).

[L9] $1 \ne -1$ ([[lem-units-of-z]]).

## Proof

**Proof technique:** direct.

1.1 $0 < 1$, since $1 = \iota(1)$ is nonnegative and differs from $0 = \iota(0)$ by injectivity; and if $0 < x$ then $1 \le x$, because $x = \iota(k)$ with $k \ne 0$, so $1 = \sigma(0) \le k$ and $\iota$ preserves the order. [L7, L8]

2.1 $|n| \ge 0$ and $|n| \ne 0$, so $|n| > 0$ and hence $|n| \ge 1$. [step 1.1, L3, L6]

2.2 For uniqueness, suppose $n = u P = u' P'$ where $P := \prod_{i<r} p_i$ and $P' := \prod_{j<s} q_j$ and $u, u' \in \{1,-1\}$. By [L1] both $P \ge 1$ and $P' \ge 1$, so both are positive and $|P| = P$, $|P'| = P'$. [step 1.1, L1, L3, L6]

3.1 By [L1] there are $r \in \mathbb{N}$ and a list $p$ of primes of length $r$ with $|n| = \prod_{i<r} p_i$. [step 2.1, L1, choose]

3.2 Taking absolute values, $|n| = |u|\,|P| = P$ and likewise $|n| = |u'|\,|P'| = P'$, since $|1| = 1$ and $|-1| = 1$. Hence $P = P'$. [step 2.2, L3, L5]

4.1 The order is total and $n \ne 0$, so $n > 0$ or $n < 0$. If $n > 0$ then $|n| = n$ and $n = 1 \cdot \prod_{i<r} p_i$; if $n < 0$ then $|n| = -n$, so $n = -(-n) = -|n| = (-1) \prod_{i<r} p_i$. In both cases clause 1 holds, with $u = 1$ and $u = -1$ respectively. [step 3.1, L3, L5, L6]

4.2 By [L2] applied to $P = P'$ we get $r = s$ and a permutation $\pi \in \operatorname{Sym}(r)$ with $q_i = p_{\pi(i)}$ for every $i < r$. [step 3.2, L2]

4.3 And $u P = u' P$ with $P \ne 0$, since $P \ge 1 > 0$; cancellation gives $u = u'$. [step 2.2, step 3.2, L4, L6]

5.1 Clause 1 is step 4.1 and clause 2 is steps 4.2 and 4.3. [step 4.1, step 4.2, step 4.3] ∎

## Remarks

- **This is why [[def-prime]] can insist on $p > 1$ without loss.** The sign of $n$ is carried by the unit $u$, not by the primes, so admitting negative primes would buy nothing and would break uniqueness, since $(-2)(-3)$ and $2 \cdot 3$ would be different lists with the same product.

- **The uniqueness of $u$ needs $P \ne 0$, and that is why the empty product is harmless.** At $r = 0$ the statement reads $n = u$, so the nonzero integers with an empty prime list are exactly $1$ and $-1$ — which is [[lem-units-of-z]] again, from a different direction.

- **Nothing is claimed at $n = 0$.** Zero is divisible by every prime and is not a product of primes times a unit at all, since every such product is $1$ or $-1$ times a positive integer. It is excluded by hypothesis, not overlooked.
