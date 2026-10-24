---
id: def-internal-direct-sum
kind: definition
title: "Internal direct sum $V = \\bigoplus_{i<n} U_i$: the sum is everything and each summand meets the sum of the others only in $0_V$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-sum-of-linear-subspaces, lem-sum-is-span-of-union, def-linear-subspace, def-vector-space, lem-vector-space-elementary-consequences, def-natural-numbers, lem-nat-order-is-membership]
justified_by: []
aliases: [def-direct-sum-of-subspaces]
landmark: true
short: "$V = \\bigoplus_{i<n} U_i$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Direct sum of modules (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Direct_sum_of_modules"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 1"
      url: "https://linear.axler.net/"
    - title: "Direct sum (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Direct_sum"
pipeline_run: null
---

## Definition

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]), let
$n \in \mathbb{N}$, and let $U$ be a finite family of linear subspaces $U_i$ of
$V$ indexed by $i < n$ ([[def-linear-subspace]],
[[def-sum-of-linear-subspaces]]); as everywhere on this page the index runs over
the von Neumann natural $n = \{0, \dots, n-1\}$ ([[def-natural-numbers]],
[[lem-nat-order-is-membership]]).

**The sum of the other summands.** The set $\{0_V\}$ is a linear subspace of $V$:
it contains $0_V$, it is closed under addition since $0_V + 0_V = 0_V$, and it is
closed under scalar multiplication since $\lambda 0_V = 0_V$
([[lem-vector-space-elementary-consequences]]). So for each $j < n$ the family
$U^{(j)}$ defined by

$$U^{(j)}_i := U_i \quad (i \ne j), \qquad U^{(j)}_j := \{0_V\}$$

is again a finite family of linear subspaces of $V$ indexed by $i < n$, and we
write

$$\sum_{i \ne j} U_i \;:=\; \sum_{i<n} U^{(j)}_i ,$$

a linear subspace of $V$ by [[def-sum-of-linear-subspaces]]. Replacing the
$j$-th summand by $\{0_V\}$, rather than re-indexing over a smaller set, keeps
every family on this page indexed by a natural number.

**The definition.** $V$ is the **internal direct sum** of the family $U$, written

$$V \;=\; \bigoplus_{i<n} U_i ,$$

when both of the following hold:

- **(D1)** $\displaystyle\sum_{i<n} U_i = V$;
- **(D2)** for every $j < n$,
  $\displaystyle U_j \cap \sum_{i \ne j} U_i = \{0_V\}$.

In (D2) the inclusion $\supseteq$ is automatic, since $U_j$ and
$\sum_{i \ne j} U_i$ are linear subspaces and each therefore contains $0_V$; the
content of (D2) is the inclusion $\subseteq$, that no nonzero vector of $U_j$ is
a sum of vectors drawn from the other summands.

### Two summands

Take $n = 2$ and write $U := U_0$, $W := U_1$. For $j = 0$ the family $U^{(0)}$ is
$\{0_V\}, W$, so $\sum_{i \ne 0} U_i = \{\, 0_V + w : w \in W \,\} = W$; for
$j = 1$ it is $U$ in the same way. So (D2) reduces to the single condition
$U \cap W = \{0_V\}$, and

$$V = U \oplus W \quad\text{means}\quad U + W = V \ \text{ and } \ U \cap W = \{0_V\}.$$

For two summands, therefore, (D2) and the pairwise condition coincide; this is
the familiar form of the definition.

### Three or more summands: (D2) is not the pairwise condition

For $n \ge 3$ the condition (D2) is **strictly stronger** than requiring
$U_i \cap U_j = \{0_V\}$ for all $i \ne j$.

That (D2) implies the pairwise condition is immediate: for $i \ne j$ with
$i, j < n$ we have $U_i = U^{(j)}_i \subseteq \sum_{i \ne j} U_i$, since a sum of
a family contains each of its summands ([[lem-sum-is-span-of-union]]), so
$U_j \cap U_i \subseteq U_j \cap \sum_{i \ne j} U_i = \{0_V\}$, and the reverse
inclusion holds because both are linear subspaces.

The converse fails, and it fails already for three summands: a family can satisfy
(D1) and have all its pairwise intersections trivial while (D2) is false, so that
decompositions are not unique. The companion examples page records a witness. A
definition stated with the pairwise condition in place of (D2) would therefore be
a different, and weaker, notion, and the characterisation by unique decomposition
([[lem-direct-sum-criterion]]) would be false for it.

### The empty family

$\mathbb{N}$ contains $0$, so $n = 0$ is a genuine case. Then
$\sum_{i<0} U_i = \{0_V\}$ ([[def-sum-of-linear-subspaces]]) and (D2) is vacuous,
there being no $j < 0$. So $V = \bigoplus_{i<0} U_i$ holds exactly when
$V = \{0_V\}$: the zero space is the direct sum of the empty family, and no other
space is.

## Remarks

- **"Internal" is the operative word.** The summands here are linear subspaces of
  one given space $V$, and the direct sum is a property of that configuration, not
  a construction producing a new space out of unrelated ones. No external direct
  sum, and no product of vector spaces, is defined on this page.

- **The notation $\bigoplus$ is reserved for the direct case.** Writing
  $\sum_{i<n} U_i$ asserts nothing beyond [[def-sum-of-linear-subspaces]];
  writing $\bigoplus_{i<n} U_i$ asserts (D1) and (D2) as well. In particular the
  symbol is not used for a sum that has merely been checked to be everything.

- **What (D2) is for.** It is exactly the condition that makes decompositions
  unique: $V = \bigoplus_{i<n} U_i$ holds if and only if every $v \in V$ is
  $\sum_{i<n} u_i$ with $u_i \in U_i$ in exactly one way. That equivalence is
  [[lem-direct-sum-criterion]], and it is the reason the definition is worth
  stating in this form rather than in terms of uniqueness directly.
