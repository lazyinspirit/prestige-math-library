---
id: lem-sum-is-span-of-union
kind: lemma
title: "$\\sum_{i<n} U_i = \\operatorname{span}\\bigl(\\bigcup_{i<n} U_i\\bigr)$, so the sum is the smallest linear subspace containing every $U_i$"
status: draft
origin: session
deps: [def-sum-of-linear-subspaces, def-linear-combination-and-span, def-linear-subspace, def-monoid-finite-product, def-vector-space, thm-induction-principle, lem-nat-order-is-membership, def-natural-numbers]
justified_by: []
aliases: []
landmark: false
short: "$\\sum U_i = \\operatorname{span}(\\bigcup U_i)$"
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
    - title: "Linear subspace (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_subspace"
    - title: "Linear span (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_span"
pipeline_run: null
---

## Statement

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]), let
$n \in \mathbb{N}$, and let $U$ be a finite family of linear subspaces $U_i$ of
$V$ indexed by $i < n$ ([[def-sum-of-linear-subspaces]]). Write

$$\bigcup_{i<n} U_i \;=\; \{\, x \in V \;:\; x \in U_i \text{ for some } i < n \,\}.$$

Then

$$\sum_{i<n} U_i \;=\; \operatorname{span}\Bigl(\bigcup_{i<n} U_i\Bigr),$$

so $\sum_{i<n} U_i$ is the smallest linear subspace of $V$ containing $U_i$ for
every $i < n$: it contains each $U_i$, and it is contained in every linear
subspace of $V$ that contains each $U_i$.

## Facts & Assumptions

**Given:** A field $F$, a vector space $V$ over $F$, a natural number $n$, and a family of linear subspaces $U_i$ of $V$ indexed by $i < n$.

[L1] $\sum_{i<n} U_i$ is a linear subspace of $V$ whose elements are exactly the vectors $\sum_{i<n} u_i$ with $u_i \in U_i$ for every $i < n$; and a list vanishing off a single index $j < n$ sums to its value at $j$ ([[def-sum-of-linear-subspaces]]).

[L2] For $T \subseteq V$, the span $\operatorname{span}(T)$ is a linear subspace of $V$ containing $T$ and contained in every linear subspace of $V$ containing $T$ ([[def-linear-combination-and-span]]).

[L3] A linear subspace contains $0_V$ by (W1) and is closed under $+$ by (W2) ([[def-linear-subspace]]).

[L4] Finite sums in $(V,+,0_V)$: $\sum_{i<0} u_i = 0_V$ and $\sum_{i<\sigma(m)} u_i = \bigl(\sum_{i<m} u_i\bigr) + u_m$ ([[def-monoid-finite-product]], [[def-linear-combination-and-span]]).

[L5] Induction on $\mathbb{N}$, whose elements are the von Neumann naturals with $m = \{\, k : k < m \,\}$ ([[thm-induction-principle]], [[def-natural-numbers]], [[lem-nat-order-is-membership]]).

## Proof

**Proof technique:** direct.

1.1 Each $U_j$ with $j < n$ is contained in $\sum_{i<n} U_i$: given $x \in U_j$, let $u : n \to V$ be the list with $u_j = x$ and $u_i = 0_V$ for $i \ne j$; then $u_i \in U_i$ for every $i < n$, since each $U_i$ contains $0_V$, and this list sums to $x$. [L1, L3]

1.2 A linear subspace $W$ of $V$ is closed under finite sums: for every $m \in \mathbb{N}$ and every list $u : m \to W$, the vector $\sum_{i<m} u_i$ lies in $W$. By induction on $m$: at $m = 0$ the sum is $0_V \in W$ by (W1), and if it holds at $m$ then $\sum_{i<\sigma(m)} u_i = \bigl(\sum_{i<m} u_i\bigr) + u_m$ lies in $W$ by the inductive hypothesis and (W2). [L3, L4, L5]

2.1 $\bigcup_{i<n} U_i \subseteq \sum_{i<n} U_i$ by step 1.1, and $\sum_{i<n} U_i$ is a linear subspace of $V$, so the span of the union is contained in it: $\operatorname{span}\bigl(\bigcup_{i<n} U_i\bigr) \subseteq \sum_{i<n} U_i$. [step 1.1, L1, L2]

2.2 Conversely, $\operatorname{span}\bigl(\bigcup_{i<n} U_i\bigr)$ is a linear subspace of $V$ containing the union, hence containing each $U_i$; so any list $u : n \to V$ with $u_i \in U_i$ for every $i < n$ takes its values in it, and step 1.2 gives $\sum_{i<n} u_i \in \operatorname{span}\bigl(\bigcup_{i<n} U_i\bigr)$. As these vectors are exactly the elements of $\sum_{i<n} U_i$, that yields $\sum_{i<n} U_i \subseteq \operatorname{span}\bigl(\bigcup_{i<n} U_i\bigr)$. [step 1.2, L1, L2]

3.1 The two inclusions give $\sum_{i<n} U_i = \operatorname{span}\bigl(\bigcup_{i<n} U_i\bigr)$. [step 2.1, step 2.2]

4.1 A linear subspace of $V$ contains $\bigcup_{i<n} U_i$ exactly when it contains $U_i$ for every $i < n$, so the span of the union is the smallest linear subspace containing every $U_i$; by step 3.1 the sum is that subspace. [step 3.1, L2] ∎

## Remarks

- **The empty family is consistent with the statement.** At $n = 0$ the union is
  $\varnothing$ and the sum is $\{0_V\}$ ([[def-sum-of-linear-subspaces]]), while
  $\operatorname{span}(\varnothing) = \{0_V\}$
  ([[lem-span-is-the-set-of-linear-combinations]]), so both sides agree. This is
  the case that would be lost if $\mathbb{N}$ started at $1$.

- **What the identification buys.** The left-hand side is concrete, a set of
  vectors one can produce; the right-hand side is a universal property, "smallest
  linear subspace containing all the $U_i$". Having both means the sum can be
  computed by exhibiting decompositions and bounded by minimality, which is how
  the examples on the companion page proceed.

- **This is the linear analogue of a familiar fact about subgroups.** The subgroup
  generated by a union of subgroups is the smallest subgroup containing them all
  ([[def-generated-subgroup]]); here the sum plays that role, and no separate
  "generated by" notation is needed for linear subspaces because
  [[lem-span-is-the-set-of-linear-combinations]] already describes the span from
  inside.
