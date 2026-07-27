---
id: fs-union-of-two-subspaces-is-a-subspace
kind: false-statement
title: "The union of two linear subspaces is a linear subspace"
status: draft
origin: session
deps: [def-linear-subspace, lem-linear-subspace-criterion, lem-span-of-a-single-vector, def-linear-combination-and-span, lem-intersection-of-linear-subspaces, def-function-space, def-vector-space, def-field, lem-of-zero-mult, def-natural-numbers, lem-nat-order-is-membership]
justified_by: []
aliases: []
landmark: false
short: "FALSE: $U \\cup W$ is a linear subspace"
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
    - title: "Union (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Union_(set_theory)"
pipeline_run: null
---

## Statement

**False claim:** if $U$ and $W$ are linear subspaces of a vector space $V$ over a
field $F$ ([[def-linear-subspace]]), then $U \cup W$ is a linear subspace of $V$.

The corresponding statement for **intersections** is true and is
[[lem-intersection-of-linear-subspaces]]. For unions it fails, and it already
fails in the plane over any field: with $e_0, e_1 \in F^{2}$ the vectors with
coordinates $(1_F, 0_F)$ and $(0_F, 1_F)$ ([[def-function-space]]), take
$U := \operatorname{span}\{e_0\}$ and $W := \operatorname{span}\{e_1\}$
([[def-linear-combination-and-span]]). Then $e_0 \in U$ and $e_1 \in W$, so both
lie in $U \cup W$, while their sum, with coordinates $(1_F, 1_F)$, lies in
neither.

## Facts & Assumptions

**Given:** A field $F$, the vector space $F^{2}$ over $F$, the vectors $e_0$ and $e_1$, and the linear subspaces $U = \operatorname{span}\{e_0\}$ and $W = \operatorname{span}\{e_1\}$.

[L1] $F^{2}$ is the vector space of functions $2 \to F$ with $(x+y)_i = x_i + y_i$ and $(\lambda x)_i = \lambda x_i$, where $2 = \{0,1\}$; two elements are equal exactly when both coordinates agree ([[def-function-space]], [[def-vector-space]], [[def-natural-numbers]], [[lem-nat-order-is-membership]]).

[L2] $\operatorname{span}\{v\} = \{\, \lambda v : \lambda \in F \,\}$, and a span is a linear subspace ([[lem-span-of-a-single-vector]], [[def-linear-combination-and-span]]).

[L3] A linear subspace is closed under addition, by condition (W2) ([[def-linear-subspace]], [[lem-linear-subspace-criterion]]).

[L4] In a field: $1_F \ne 0_F$; $\lambda 1_F = \lambda$; $0_F \lambda = 0_F$ ([[lem-of-zero-mult]]) and multiplication is commutative, so $\lambda 0_F = 0_F$; and $0_F$ is the additive identity ([[def-field]]).

[L5] The refuted claim: the union of two linear subspaces of a vector space is a linear subspace of it.

## Refutation

**Proof technique:** direct.

1.1 $U$ and $W$ are linear subspaces of $F^{2}$, being spans of one-element subsets. [L1, L2]

1.2 The elements of $U$ are the vectors $(\lambda, 0_F)$ and the elements of $W$ are the vectors $(0_F, \lambda)$, for $\lambda \in F$: indeed $(\lambda e_0)_0 = \lambda 1_F = \lambda$, $(\lambda e_0)_1 = \lambda 0_F = 0_F$, and symmetrically for $e_1$. [L1, L2, L4]

1.3 $e_0 + e_1$ has coordinates $(1_F + 0_F,\; 0_F + 1_F) = (1_F, 1_F)$. [L1, L4]

2.1 $e_0 \in U$ and $e_1 \in W$, since $e_j = 1_F e_j$; so both lie in $U \cup W$. [step 1.2, L2, L4]

2.2 $e_0 + e_1 \notin U \cup W$: if it lay in $U$ its coordinate at index $1$ would be $0_F$, and if it lay in $W$ its coordinate at index $0$ would be $0_F$, whereas both coordinates are $1_F$ and $1_F \ne 0_F$. [step 1.2, step 1.3, L1, L4]

3.1 So $U \cup W$ contains $e_0$ and $e_1$ but not $e_0 + e_1$: it is not closed under addition, so condition (W2) fails and it is not a linear subspace of $F^{2}$, although $U$ and $W$ both are. The claim of [L5] is false. [step 1.1, step 2.1, step 2.2, L3, L5] ∎

## Remarks

- **Intersections behave, unions do not.** An intersection of linear subspaces is
  always a linear subspace ([[lem-intersection-of-linear-subspaces]]), which is
  what makes $\operatorname{span}(S)$ definable as the smallest linear subspace
  containing $S$ ([[def-linear-combination-and-span]]). On the union side there is
  no corresponding construction, and the repair is to take the **sum** rather than
  the union: $U + W$ is a linear subspace, and it is exactly
  $\operatorname{span}(U \cup W)$ ([[lem-sum-is-span-of-union]]).

- **The exact condition.** For linear subspaces $U, W$ of a vector space $V$, the
  union $U \cup W$ is a linear subspace **if and only if** $U \subseteq W$ or
  $W \subseteq U$. One direction is immediate, the union then being the larger of
  the two. For the other, suppose neither inclusion holds and choose
  $u \in U \setminus W$ and $w \in W \setminus U$. If $u + w$ were in $U$ then
  $w = (u + w) + (-u) \in U$, and if $u + w$ were in $W$ then
  $u = (u + w) + (-w) \in W$; both contradict the choice, since a linear subspace
  is closed under addition and under additive inverses. So
  $u + w \notin U \cup W$ and the union is not closed under addition.

- **The witness above is an instance of that criterion**, since neither of $U$ and
  $W$ contains the other: $e_0 \in U$ has coordinate $1_F \ne 0_F$ at index $0$
  and so is not of the form $(0_F, \lambda)$, and symmetrically for $e_1$.
