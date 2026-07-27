---
id: lem-direct-sum-criterion
kind: lemma
title: "$V = \\bigoplus_{i<n} U_i$ if and only if every $v \\in V$ is $\\sum_{i<n} u_i$ with $u_i \\in U_i$ in exactly one way; equivalently, if and only if the sum is $V$ and $\\sum_{i<n} u_i = 0_V$ with $u_i \\in U_i$ forces every $u_i = 0_V$"
status: draft
origin: session
deps: [def-internal-direct-sum, def-sum-of-linear-subspaces, def-linear-subspace, def-vector-space, lem-vector-space-elementary-consequences, def-monoid-finite-product, lem-group-cancellation, def-group, def-natural-numbers, lem-nat-order-is-membership]
justified_by: []
aliases: [lem-unique-decomposition-criterion]
landmark: false
short: "direct sum $\\Leftrightarrow$ unique decomposition"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Direct sum of modules (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Direct_sum_of_modules"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 1"
      url: "https://linear.axler.net/"
pipeline_run: null
---

## Statement

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]), let
$n \in \mathbb{N}$, and let $U$ be a finite family of linear subspaces $U_i$ of
$V$ indexed by $i < n$ ([[def-sum-of-linear-subspaces]]). Call a list
$u : n \to V$ **admissible** when $u_i \in U_i$ for every $i < n$. The following
are equivalent.

- **(a)** $V = \bigoplus_{i<n} U_i$ ([[def-internal-direct-sum]]).
- **(b)** For every $v \in V$ there is exactly one admissible list $u$ with
  $\sum_{i<n} u_i = v$.
- **(c)** $\sum_{i<n} U_i = V$, and the only admissible list $u$ with
  $\sum_{i<n} u_i = 0_V$ is the list with $u_i = 0_V$ for every $i < n$.

## Facts & Assumptions

**Given:** A field $F$, a vector space $V$ over $F$, a natural number $n$, and a finite family of linear subspaces $U_i$ of $V$ indexed by $i < n$; a list $u : n \to V$ is called admissible when $u_i \in U_i$ for every $i < n$.

[L1] $V = \bigoplus_{i<n} U_i$ means (D1) $\sum_{i<n} U_i = V$ and (D2) $U_j \cap \sum_{i \ne j} U_i = \{0_V\}$ for every $j < n$, where $\sum_{i \ne j} U_i = \sum_{i<n} U^{(j)}_i$ for the family $U^{(j)}$ with $U^{(j)}_i = U_i$ for $i \ne j$ and $U^{(j)}_j = \{0_V\}$ ([[def-internal-direct-sum]]).

[L2] The elements of $\sum_{i<n} U_i$ are exactly the vectors $\sum_{i<n} u_i$ with $u$ admissible; it is a linear subspace of $V$; the mixed identity (F2) $\lambda \sum_{i<n} u_i + \sum_{i<n} w_i = \sum_{i<n}(\lambda u_i + w_i)$ holds; and by (F3) with (F1), $\sum_{i<n} u_i = u_j + \sum_{i<n} u^{(j)}_i$ for $j < n$, where $u^{(j)}$ agrees with $u$ off $j$ and has $u^{(j)}_j = 0_V$, while a list vanishing off a single index sums to its value there ([[def-sum-of-linear-subspaces]], [[def-monoid-finite-product]]).

[L3] A linear subspace contains $0_V$ and is closed under $+$ and under scalar multiplication ([[def-linear-subspace]]).

[L4] $(-1_F)x = -x$ for every $x \in V$, and $1_F x = x$ ([[lem-vector-space-elementary-consequences]], [[def-vector-space]]).

[L5] Cancellation in the abelian group $(V,+,0_V)$: if $x + y = x + z$ then $y = z$, and if $y + x = z + x$ then $y = z$ ([[lem-group-cancellation]], [[def-group]]).

[L6] $(V,+,0_V)$ is an abelian group: $+$ is associative and commutative, $0_V$ is a two-sided identity, and each $x$ has an additive inverse $-x$ with $x + (-x) = 0_V = (-x) + x$ ([[def-vector-space]], [[def-group]]).

[L7] The index $i$ runs over the von Neumann natural $n = \{0,\dots,n-1\}$ ([[def-natural-numbers]], [[lem-nat-order-is-membership]]).

## Proof

**Proof technique:** direct.

1.1 Let $u$ be admissible and $j < n$. The list $u^{(j)}$ is admissible for the family $U^{(j)}$, since $u^{(j)}_i = u_i \in U_i = U^{(j)}_i$ for $i \ne j$ and $u^{(j)}_j = 0_V \in \{0_V\} = U^{(j)}_j$; hence $s := \sum_{i<n} u^{(j)}_i$ lies in $\sum_{i \ne j} U_i$, and $\sum_{i<n} u_i = u_j + s$. [L1, L2, L7]

1.2 A linear subspace $W$ of $V$ is closed under additive inverses: for $x \in W$ we have $(-1_F)x \in W$ by closure under scalar multiplication, and $(-1_F)x = -x$. [L3, L4]

1.3 Let $j < n$ and $x \in U_j$. The list $z : n \to V$ with $z_j = x$ and $z_i = 0_V$ for $i \ne j$ is admissible, each $U_i$ containing $0_V$, and it sums to $x$. [L2, L3, L7]

1.4 (c) implies (b). Assume (c). Existence: since $\sum_{i<n} U_i = V$, every $v \in V$ is $\sum_{i<n} u_i$ for some admissible $u$. Uniqueness: suppose $u$ and $w$ are admissible with $\sum_{i<n} u_i = \sum_{i<n} w_i =: v$. The mixed identity with $\lambda = -1_F$, applied to $w$ and $u$ in that order, gives $(-1_F)\sum_{i<n} w_i + \sum_{i<n} u_i = \sum_{i<n}\bigl((-1_F)w_i + u_i\bigr)$, whose left-hand side is $-v + v = 0_V$; the list $i \mapsto (-1_F)w_i + u_i = (-w_i) + u_i$ is admissible, each $U_i$ being closed under additive inverses and addition; so by (c) every $(-w_i) + u_i = 0_V = (-w_i) + w_i$, and cancelling $-w_i$ on the left gives $u_i = w_i$ for every $i < n$. [L2, L3, L4, L5, L6]

2.1 (a) implies (c). Assume (a). Condition (D1) is the first half of (c). For the second, let $u$ be admissible with $\sum_{i<n} u_i = 0_V$ and let $j < n$. Writing $s = \sum_{i<n} u^{(j)}_i \in \sum_{i \ne j} U_i$, we get $u_j + s = 0_V$, while $(-s) + s = 0_V$ as well, so cancelling $s$ on the right gives $u_j = -s$; and $-s \in \sum_{i \ne j} U_i$ because that set is a linear subspace. Hence $u_j \in U_j \cap \sum_{i \ne j} U_i$, which is $\{0_V\}$ by (D2), so $u_j = 0_V$. As $j < n$ was arbitrary, $u$ is the all-zero list. [step 1.1, step 1.2, L1, L2, L5, L6]

2.2 (b) implies (a). Assume (b). For (D1): every $v \in V$ is $\sum_{i<n} u_i$ for some admissible $u$, so $V \subseteq \sum_{i<n} U_i$, and the reverse inclusion holds because $\sum_{i<n} U_i$ is a subset of $V$. For (D2): let $j < n$ and $x \in U_j \cap \sum_{i \ne j} U_i$. Then $x = \sum_{i<n} w_i$ for some list $w$ admissible for $U^{(j)}$; such a $w$ has $w_j = 0_V$ and $w_i \in U_i$ for $i \ne j$, so it is admissible for $U$ as well, $U_j$ containing $0_V$. The list $z$ of step 1.3 is also admissible and also sums to $x$, so uniqueness in (b) forces $z = w$, and in particular $x = z_j = w_j = 0_V$. Since $\{0_V\}$ is contained in the intersection anyway, (D2) holds. [step 1.3, L1, L2, L3]

3.1 Steps 2.1, 1.4 and 2.2 give (a) implies (c), (c) implies (b) and (b) implies (a), so the three conditions are equivalent. [step 1.4, step 2.1, step 2.2] ∎

## Remarks

- **Condition (c) is the one used in practice.** Checking uniqueness of every
  decomposition is checking a single one: that of $0_V$. The reduction is the
  content of the implication from (c) to (b), and it works because the difference
  of two admissible decompositions of the same vector is an admissible
  decomposition of $0_V$.

- **This is what makes (D2) the right condition.** If the definition of a direct
  sum had asked only for pairwise trivial intersections, the equivalence above
  would fail for $n \ge 3$: the companion examples page exhibits three linear
  subspaces of a plane whose pairwise intersections are trivial, whose sum is
  everything, and for which some vector has two different decompositions. So the
  equivalence proved here is not available for the pairwise notion, and (D2) is
  exactly the strengthening that restores it.

- **The two-summand case reads as usual.** For $n = 2$, condition (a) says
  $U + W = V$ and $U \cap W = \{0_V\}$ ([[def-internal-direct-sum]]), and the
  lemma says that this holds exactly when every $v \in V$ is $u + w$ with $u \in U$
  and $w \in W$ in exactly one way.

- **No finiteness of $V$ and no dimension anywhere.** The family of summands is
  finite because the sum $\sum_{i<n} U_i$ is defined through a finite sum of
  vectors; $V$ itself is arbitrary, and nothing above counts anything.
