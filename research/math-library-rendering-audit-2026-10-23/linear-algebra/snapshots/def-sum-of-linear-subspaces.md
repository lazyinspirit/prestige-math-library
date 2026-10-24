---
id: def-sum-of-linear-subspaces
kind: definition
title: "The sum $U + W$ of two linear subspaces and the sum $\\sum_{i<n} U_i$ of a finite family"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-linear-subspace, lem-linear-subspace-criterion, def-vector-space, def-monoid-finite-product, def-linear-combination-and-span, lem-vector-space-elementary-consequences, thm-induction-principle, def-natural-numbers, lem-nat-order-is-membership, def-field]
justified_by: []
aliases: [def-subspace-sum]
landmark: false
short: "$U + W$, $\\sum_{i<n} U_i$"
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
    - title: "Linear subspace (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_subspace"
    - title: "Direct sum of modules (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Direct_sum_of_modules"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed. (free PDF, CC BY-NC)"
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Definition

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]), let
$n \in \mathbb{N}$, and let $U$ be a **finite family of linear subspaces of
$V$**, that is a function assigning to each $i < n$ a linear subspace $U_i$ of
$V$ ([[def-linear-subspace]]); here $n = \{0, \dots, n-1\}$
([[def-natural-numbers]], [[lem-nat-order-is-membership]]), so the family is
indexed from $0$. Define

$$\sum_{i<n} U_i \;:=\; \Bigl\{\, \sum_{i<n} u_i \;:\; u : n \to V \text{ with } u_i \in U_i \text{ for every } i < n \,\Bigr\},$$

the finite sums being those of [[def-monoid-finite-product]] read additively in
the abelian group $(V,+,0_V)$, as in [[def-linear-combination-and-span]]. For two
linear subspaces $U, W$ of $V$ we write

$$U + W \;:=\; \{\, u + w \;:\; u \in U,\ w \in W \,\},$$

which is the case $n = 2$ of the display above, since
$\sum_{i<2} u_i = (0_V + u_0) + u_1 = u_0 + u_1$.

### Three facts about finite sums of vectors

All three are proved by induction on $n$ ([[thm-induction-principle]]) from the
two defining clauses $\sum_{i<0} u_i = 0_V$ and
$\sum_{i<\sigma(n)} u_i = \bigl(\sum_{i<n} u_i\bigr) + u_n$
([[def-monoid-finite-product]]), together with the abelian group laws of
$(V,+,0_V)$. They are collected here because the definition itself needs the
first two, and because the lemmas below need all three.

**(F1) The all-zero list sums to $0_V$.** If $z : n \to V$ has $z_i = 0_V$ for
every $i < n$, then $\sum_{i<n} z_i = 0_V$. At $n = 0$ this is the empty sum, and
if it holds at $n$ then $\sum_{i<\sigma(n)} z_i = 0_V + 0_V = 0_V$.

**(F2) The mixed identity.** For every $\lambda \in F$ and all lists
$u, w : n \to V$,

$$\lambda \sum_{i<n} u_i \;+\; \sum_{i<n} w_i \;=\; \sum_{i<n} (\lambda u_i + w_i).$$

At $n = 0$ both sides are $0_V$, since $\lambda 0_V = 0_V$
([[lem-vector-space-elementary-consequences]]). If the identity holds at $n$,
then at $\sigma(n)$ the left-hand side is
$\lambda\bigl(\sum_{i<n} u_i + u_n\bigr) + \bigl(\sum_{i<n} w_i + w_n\bigr)$,
which by axiom (V2) equals
$\bigl(\lambda\sum_{i<n} u_i + \lambda u_n\bigr) + \bigl(\sum_{i<n} w_i + w_n\bigr)$;
commutativity and associativity of $+$ regroup this as
$\bigl(\lambda\sum_{i<n} u_i + \sum_{i<n} w_i\bigr) + (\lambda u_n + w_n)$, which
by the inductive hypothesis is
$\sum_{i<n}(\lambda u_i + w_i) + (\lambda u_n + w_n) = \sum_{i<\sigma(n)}(\lambda u_i + w_i)$.

**(F3) Extracting one term.** Let $u : n \to V$ and $j < n$, and let
$u^{(j)} : n \to V$ agree with $u$ at every $i \ne j$ and satisfy
$u^{(j)}_j = 0_V$. Then

$$\sum_{i<n} u_i \;=\; u_j + \sum_{i<n} u^{(j)}_i .$$

At $n = 0$ there is no $j < 0$ and the claim is vacuous. Assume it at $n$ and let
$j < \sigma(n)$, so $j \le n$ ([[lem-nat-order-is-membership]]). If $j = n$, then
$u^{(n)}$ agrees with $u$ on $n$, so $\sum_{i<\sigma(n)} u^{(n)}_i = \sum_{i<n} u_i + 0_V = \sum_{i<n} u_i$,
and $u_n + \sum_{i<n} u_i = \sum_{i<n} u_i + u_n = \sum_{i<\sigma(n)} u_i$ by
commutativity. If $j < n$, then $u^{(j)}$ agrees with $u$ at $n$, so
$\sum_{i<\sigma(n)} u^{(j)}_i = \sum_{i<n} u^{(j)}_i + u_n$, and the inductive
hypothesis applied to the restriction of $u$ to $n$ gives
$\sum_{i<\sigma(n)} u_i = \bigl(u_j + \sum_{i<n} u^{(j)}_i\bigr) + u_n = u_j + \sum_{i<\sigma(n)} u^{(j)}_i$,
by associativity.

**A consequence of (F1) and (F3).** If $u_i = 0_V$ for every $i \ne j$, then
$u^{(j)}$ is the all-zero list, so $\sum_{i<n} u_i = u_j + 0_V = u_j$: a list
vanishing off a single index sums to its value at that index.

### The sum is a linear subspace

$\sum_{i<n} U_i$ is a linear subspace of $V$. It is nonempty: each $U_i$ contains
$0_V$, and the all-zero list sums to $0_V$ by (F1), so $0_V \in \sum_{i<n} U_i$.
And it satisfies the one-step test ([[lem-linear-subspace-criterion]]): if
$x = \sum_{i<n} u_i$ and $y = \sum_{i<n} w_i$ with $u_i, w_i \in U_i$, and
$\lambda \in F$, then (F2) gives
$\lambda x + y = \sum_{i<n} (\lambda u_i + w_i)$, and $\lambda u_i + w_i \in U_i$
because $U_i$ is a linear subspace, so $\lambda x + y \in \sum_{i<n} U_i$.

So the definition really does produce a linear subspace, and this is asserted
here rather than assumed.

### The boundary case

$\mathbb{N}$ contains $0$, so $n = 0$ is a genuine case. The only list
$u : 0 \to V$ is the empty function, and its sum is the empty sum $0_V$, so

$$\sum_{i<0} U_i \;=\; \{0_V\},$$

the sum of the empty family of linear subspaces being the zero subspace. This is
the base case of the induction in [[lem-sum-is-span-of-union]] and of the
boundary case of [[def-internal-direct-sum]].

## Remarks

- **The sum is a set of vectors, not a set of decompositions.** An element of
  $\sum_{i<n} U_i$ is a vector that admits at least one expression
  $\sum_{i<n} u_i$ with $u_i \in U_i$; different lists may give the same vector,
  and whether they can is exactly the question answered by
  [[lem-direct-sum-criterion]].

- **Why not the union.** $\bigcup_{i<n} U_i$ is in general not a linear subspace,
  and the sum is what repairs that: [[lem-sum-is-span-of-union]] identifies
  $\sum_{i<n} U_i$ with $\operatorname{span}\bigl(\bigcup_{i<n} U_i\bigr)$, so the
  sum is the smallest linear subspace containing every $U_i$.

- **(F3) is stated with an index, not with a set.** It removes one term from a
  finite sum by replacing it with $0_V$ rather than by re-indexing the list over a
  smaller set, which keeps every sum on this page indexed by a von Neumann natural
  and avoids any appeal to a bijection between index sets. The same device is used
  in [[def-internal-direct-sum]] to say "the sum of the other summands".
