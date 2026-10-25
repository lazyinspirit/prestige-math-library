---
id: ex-integers-under-addition
kind: example
title: "$(\\mathbb{Z}, +)$ is an abelian group, $(\\mathbb{Z}, \\cdot)$ is a commutative monoid that is not a group, and its group of units is $\\{1, -1\\}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-group, def-semigroup-and-monoid, def-invertible-element, def-identity-element, lem-monoid-units-form-a-group, def-integers, def-int-operations, def-int-order, thm-int-comm-ring, thm-int-ordered-ring, lem-nat-embeds-int, lem-nat-nonzero-is-successor, lem-nat-add-commutative, def-nat-order, def-natural-numbers]
justified_by: []
aliases: []
landmark: false
short: "$(\\mathbb{Z},+)$, $(\\mathbb{Z},\\cdot)$, units $\\{1,-1\\}$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Integer (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Integer"
    - title: "Unit (ring theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Unit_(ring_theory)"
pipeline_run: null
---

## Example

Let $\mathbb{Z}$ be the integers with the operations of [[def-int-operations]].
Then

1. $(\mathbb{Z}, +, 0)$ is an abelian group ([[def-group]]);
2. $(\mathbb{Z}, \cdot, 1)$ is a commutative monoid
   ([[def-semigroup-and-monoid]]) which is **not** a group, because $0$ has no
   multiplicative inverse;
3. its group of units ([[lem-monoid-units-form-a-group]]) is
   $\mathbb{Z}^{\times} = \{1, -1\}$, and $1 \ne -1$.

## Facts & Assumptions

**Given:** The integers $\mathbb{Z}$ with $+$, $\cdot$, $0$ and $1$ ([[def-integers]], [[def-int-operations]]), and the embedding $\iota : \mathbb{N} \to \mathbb{Z}$ of [[lem-nat-embeds-int]].

[L1] In $\mathbb{Z}$: addition is associative and commutative, $x + 0 = x$, and every $x = [(a,b)]$ has the additive inverse $-x = [(b,a)]$ with $x + (-x) = 0$; multiplication is associative and commutative with $x \cdot 1 = x$, and it distributes over addition. These are the ring axioms, verified one by one in the proof of [[thm-int-comm-ring]] ([[thm-int-comm-ring]], [[def-int-operations]]).

[L2] The order on $\mathbb{Z}$ is total, antisymmetric and transitive, is compatible with addition, and positives are closed under multiplication ([[thm-int-ordered-ring]], [[def-int-order]]).

[L3] $\iota$ is injective, preserves addition, multiplication and order, and its image is exactly the nonnegative integers; $\iota(0) = 0$ and $\iota(1) = 1$ ([[lem-nat-embeds-int]]).

[L4] On $\mathbb{N}$: every $k \ne 0$ is a successor $\sigma(j) = 1 + j$, so $k \ne 0$ implies $1 \le k$ ([[lem-nat-nonzero-is-successor]], [[lem-nat-add-commutative]], [[def-nat-order]], [[def-natural-numbers]]).

[L5] A group is a monoid in which every element is invertible; the units of a monoid form a group ([[def-group]], [[def-semigroup-and-monoid]], [[def-invertible-element]], [[def-identity-element]], [[lem-monoid-units-form-a-group]]).

## Verification

**Proof technique:** direct.

1.1 Addition on $\mathbb{Z}$ is associative and commutative, $x + 0 = x$ and hence $0 + x = x$, and every $x$ has a two-sided additive inverse $-x$; so $(\mathbb{Z},+,0)$ is an abelian group. [L1, L5]

1.2 Multiplication on $\mathbb{Z}$ is associative and commutative and $x \cdot 1 = x = 1 \cdot x$; so $(\mathbb{Z},\cdot,1)$ is a commutative monoid. [L1, L5]

1.3 For every $y \in \mathbb{Z}$, $0 \cdot y = 0$: by distributivity $0 \cdot y = (0+0) \cdot y = 0 \cdot y + 0 \cdot y$, and adding $-(0 \cdot y)$ gives $0 = 0 \cdot y$. [L1]

1.4 $1 \ne 0$ in $\mathbb{Z}$: $\iota$ is injective with $\iota(1) = 1$ and $\iota(0) = 0$, and $1 \ne 0$ in $\mathbb{N}$ since $1 = \sigma(0)$ contains $0$ as an element while $0 = \varnothing$ has none. [L3, L4]

1.5 Discreteness in $\mathbb{Z}$: if $0 < x$ then $1 \le x$. Indeed $x \ge 0$ gives $x = \iota(k)$ with $k \in \mathbb{N}$, and $k \ne 0$ since $\iota(0) = 0 \ne x$; so $1 \le k$ in $\mathbb{N}$ and, $\iota$ preserving the order, $1 = \iota(1) \le \iota(k) = x$. [L3, L4]

2.1 $0$ is not invertible in $(\mathbb{Z},\cdot,1)$: $0 \cdot y = 0 \ne 1$ for every $y$. Hence $(\mathbb{Z},\cdot,1)$ is not a group. [step 1.3, step 1.4, L5]

2.2 $1$ and $-1$ are units: $1 \cdot 1 = 1$, and $(-1)(-1) = 1$ because $(-1)(-1) + (-1) = (-1)\bigl((-1) + 1\bigr) = (-1) \cdot 0 = 0$, so $(-1)(-1)$ is the additive inverse of $-1$, which is $1$. [step 1.3, L1]

2.3 If $0 < u$ and $1 \le v$ then $u \le uv$: from $1 \le v$ we get $0 \le v - 1$, so $u(v-1) \ge 0$, either factor being possibly zero, and $uv - u = u(v-1) \ge 0$ gives $u \le uv$. [step 1.5, L1, L2]

2.4 Let $xy = 1$. Then $x \ne 0$ and $y \ne 0$ by step 1.3 and step 1.4. If $x > 0$ and $y < 0$ then $0 < x(-y) = -(xy) = -1$, so $1 < 0$, contradicting $0 < 1$, which holds by step 1.4 and totality since $1 \ge 0$; the case $x < 0$, $y > 0$ is the same with the names interchanged. So $x$ and $y$ are both positive or both negative. [step 1.3, step 1.4, L1, L2, L3]

3.1 Both positive: $1 \le x$ and $1 \le y$ by step 1.5, so $x \le xy = 1$ by step 2.3, and with $1 \le x$ antisymmetry gives $x = 1$. [step 1.5, step 2.3, L2]

4.1 Both negative: then $0 < -x$ and $0 < -y$ and $(-x)(-y) = xy = 1$ by ring arithmetic, so $-x = 1$ by step 3.1, that is $x = -1$. [step 3.1, L1, L2]

5.1 By steps 2.2, 2.4, 3.1 and 4.1 the units of $(\mathbb{Z},\cdot,1)$ are exactly $1$ and $-1$; and $1 \ne -1$, since $1 = -1$ would give $1 + 1 = 0$, while $0 < 1$ gives $1 < 1 + 1$ and hence $0 < 1 + 1$. So $\mathbb{Z}^{\times} = \{1,-1\}$, a group under multiplication with two elements. [step 2.2, step 2.4, step 3.1, step 4.1, L1, L2, L5] ∎

## Remarks

- **The Statement of [[thm-int-comm-ring]] is quoted here by its content, not by its name.** That theorem says $\mathbb{Z}$ is "a commutative ring with multiplicative identity", a phrase not defined at this point in the reading order; what is used above is the list of equations its proof verifies one at a time. Nothing here presupposes a definition of a ring.

- **Cancellation without invertibility.** $(\mathbb{Z},\cdot)$ satisfies cancellation by nonzero elements yet is not a group, and $(\mathbb{N},+)$ is a sharper example still, being cancellative outright ([[cex-cancellative-monoid-not-a-group]]).

- $\mathbb{Z}^{\times} = \{1,-1\}$ is the first finite group in the library that is not trivial. It is cyclic of order $2$, generated by $-1$.
