---
id: lem-units-of-z
kind: lemma
title: "$(\\mathbb{Z}, \\cdot, 1)$ is a commutative monoid whose group of units is $\\{1, -1\\}$; equivalently $u \\mid 1$ holds exactly for $u = 1$ and $u = -1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-int-comm-ring, thm-int-ordered-ring, def-int-operations, def-int-order, def-integers, def-binary-operation, def-identity-element, def-semigroup-and-monoid, def-invertible-element, lem-monoid-units-form-a-group, def-group, def-divides-in-z, lem-divisor-bound, def-int-abs, lem-int-abs-properties, lem-nat-embeds-int, lem-nat-discrete, def-natural-numbers, def-nat-order]
justified_by: []
aliases: []
landmark: false
short: "$\\mathbb{Z}^{\\times} = \\{1,-1\\}$"
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
    - title: "Unit (ring theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Unit_(ring_theory)"
pipeline_run: null
---

## Statement

$(\mathbb{Z}, \cdot, 1)$, with the multiplication of [[def-int-operations]], is a
commutative monoid ([[def-semigroup-and-monoid]]). Its group of units
([[def-invertible-element]], [[lem-monoid-units-form-a-group]]) is

$$\mathbb{Z}^{\times} \;=\; \{\, 1, \, -1 \,\},$$

and these are two distinct elements. Equivalently, for $u \in \mathbb{Z}$ the
condition $u \mid 1$ ([[def-divides-in-z]]) holds exactly when $u = 1$ or
$u = -1$.

## Facts & Assumptions

**Given:** $\mathbb{Z}$ with the operations of [[def-int-operations]], and the embedding $\iota : \mathbb{N} \to \mathbb{Z}$, $\iota(k) = [(k,0)]$, of [[lem-nat-embeds-int]].

[L1] $\mathbb{Z}$ is a commutative ring: multiplication is a function $\mathbb{Z} \times \mathbb{Z} \to \mathbb{Z}$ and is associative and commutative, $x \cdot 1 = x$, and every $x$ has an additive inverse $-x$, with $-(-x) = x$ and $(-x)(-y) = xy$ ([[thm-int-comm-ring]], [[def-int-operations]]).

[L2] The order on $\mathbb{Z}$ is total, antisymmetric and transitive, and positives are closed under multiplication; $x < y$ means $x \le y$ together with $x \ne y$ ([[thm-int-ordered-ring]], [[def-int-order]]).

[L3] A binary operation on a set $S$ is a function $S \times S \to S$; a monoid is a set with an associative binary operation and a two-sided identity, and it is commutative when the operation is ([[def-binary-operation]], [[def-identity-element]], [[def-semigroup-and-monoid]]).

[L4] In a monoid $M$, $u$ is a **unit** when it has a two-sided inverse, and $M^{\times}$ denotes the set of units; $M^{\times}$ is a group under the restricted operation ([[def-invertible-element]], [[lem-monoid-units-form-a-group]], [[def-group]]).

[L5] $u \mid a$ means $a = uv$ for some $v \in \mathbb{Z}$ ([[def-divides-in-z]]).

[L6] If $d \mid a$ and $a \ne 0$ then $d \ne 0$ and $|d| \le |a|$ ([[lem-divisor-bound]]).

[L7] $|x| = x$ when $x \ge 0$ and $|x| = -x$ when $x \le 0$ ([[def-int-abs]]); $|x| \ge 0$ and $|x| = 0$ exactly when $x = 0$ ([[lem-int-abs-properties]]).

[L8] $\iota$ is injective, preserves addition, multiplication and order, and its image is exactly the set of nonnegative integers; $\iota(0) = 0$ and $\iota(1) = 1$ ([[lem-nat-embeds-int]], [[def-integers]]).

[L9] On $\mathbb{N}$: $m < n$ if and only if $\sigma(m) \le n$ ([[lem-nat-discrete]]); $0 = \varnothing$, $1 = \sigma(0) = \{0\}$ and $2 = \sigma(1) = \{0,1\}$, so $1 \ne 0$ and $2 \ne 0$ ([[def-natural-numbers]]); and $0 \le k$ for every $k$ ([[def-nat-order]]).

## Proof

**Proof technique:** direct.

1.1 Multiplication on $\mathbb{Z}$ is a function $\mathbb{Z} \times \mathbb{Z} \to \mathbb{Z}$, hence a binary operation, and it is associative and commutative; $1$ is a two-sided identity, since $x \cdot 1 = x$ and, by commutativity, $1 \cdot x = x$. So $(\mathbb{Z}, \cdot, 1)$ is a commutative monoid. [L1, L3]

1.2 For $u \in \mathbb{Z}$, being a unit of this monoid means $uv = 1$ for some $v$, the two equations $uv = 1$ and $vu = 1$ being the same by commutativity; and $uv = 1$ for some $v$ is precisely $u \mid 1$. So $\mathbb{Z}^{\times} = \{\, u : u \mid 1 \,\}$. [L1, L4, L5]

1.3 Both $1$ and $-1$ lie in $\mathbb{Z}^{\times}$: $1 \cdot 1 = 1$ and $(-1)(-1) = 1 \cdot 1 = 1$. [L1, L4]

1.4 $0 \le 1$, since $1 = \iota(1)$ lies in the image of $\iota$, which is the set of nonnegative integers; hence $|1| = 1$. Also $1 \ne 0$, since $\iota$ is injective and $1 \ne 0$ in $\mathbb{N}$. [L7, L8]

1.5 Discreteness of $\mathbb{Z}$: if $0 < x$ then $1 \le x$. Indeed $x \ge 0$, so $x = \iota(k)$ for some $k \in \mathbb{N}$; $k \ne 0$ because $\iota(0) = 0 \ne x$; hence $0 < k$ in $\mathbb{N}$, so $1 = \sigma(0) \le k$, and applying $\iota$, which preserves the order, gives $1 = \iota(1) \le \iota(k) = x$. [L2, L8, L9]

1.6 $1 \ne -1$: otherwise $1 + 1 = 1 + (-1) = 0$, whereas $1 + 1 = \iota(1) + \iota(1) = \iota(1+1) = \iota(2)$ and $\iota(2) \ne \iota(0) = 0$ because $\iota$ is injective and $2 \ne 0$ in $\mathbb{N}$. [L1, L8, L9]

2.1 Let $u \mid 1$. Since $1 \ne 0$, [L6] gives $u \ne 0$ and $|u| \le |1| = 1$. [step 1.4, L6]

3.1 Also $|u| \ge 0$ and $|u| \ne 0$, so $0 < |u|$, whence $1 \le |u|$; with step 2.1 and antisymmetry this gives $|u| = 1$. [step 1.5, step 2.1, L2, L7]

4.1 From $|u| = 1$: if $u \ge 0$ then $u = |u| = 1$, and if $u \le 0$ then $-u = |u| = 1$, so $u = -(-u) = -1$. By totality one of the two holds, so $u = 1$ or $u = -1$. [step 3.1, L1, L2, L7]

5.1 Combining, $\mathbb{Z}^{\times} = \{\, u : u \mid 1 \,\} = \{1, -1\}$, a two-element set, and by [L4] it is a group under multiplication, with identity $1$ and with each of its elements its own inverse. [step 1.2, step 1.3, step 4.1, step 1.6, L4] ∎

## Remarks

- **Why this is proved here and not cited.** The published example
  [[ex-integers-under-addition]] records the same fact,
  $\mathbb{Z}^{\times} = \{1,-1\}$, but it lives on an examples page, and pages of
  that kind are leaves in the library's reading order: nothing later may depend
  on them. The statement is therefore re-established here, on a spine, so that
  later pages have a citable home for it. The two agree; neither rests on the
  other.

- **The proof is an application of the divisor bound, not a computation.** What
  makes $\{1,-1\}$ the whole answer is that $u \mid 1$ forces $|u| \le 1$
  ([[lem-divisor-bound]]) while $u \ne 0$ forces $|u| \ge 1$ (discreteness), and
  antisymmetry closes the gap. Nothing about the decimal shape of an integer is
  used.
