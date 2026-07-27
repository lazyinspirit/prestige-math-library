---
id: cex-pairwise-trivial-intersection-is-not-a-direct-sum
kind: counterexample
title: "Three lines in $F^{2}$ that meet pairwise only in $0$ and whose sum is $F^{2}$ with decompositions that are not unique, so pairwise trivial intersection does not give a direct sum"
status: draft
origin: session
deps: [def-internal-direct-sum, lem-direct-sum-criterion, def-sum-of-linear-subspaces, lem-span-of-a-single-vector, def-linear-combination-and-span, def-linear-subspace, def-function-space, def-vector-space, def-field, lem-of-zero-mult, def-natural-numbers, lem-nat-order-is-membership]
justified_by: []
aliases: []
landmark: false
short: "pairwise trivial is not enough"
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
    - title: "Direct sum of modules (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Direct_sum_of_modules"
    - title: "Linear subspace (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_subspace"
pipeline_run: null
---

## Statement refuted

**False claim:** if $U_0, U_1, U_2$ are linear subspaces of a vector space $V$
with $\sum_{j<3} U_j = V$ and $U_i \cap U_j = \{0_V\}$ for all $i \ne j$, then
$V = \bigoplus_{j<3} U_j$ ([[def-internal-direct-sum]]).

Three lines in the plane $F^{2}$ refute it, over any field $F$. With $e_0, e_1$
the vectors of $F^{2}$ with coordinates $(1_F, 0_F)$ and $(0_F, 1_F)$
([[def-function-space]]) and $d := e_0 + e_1$, put

$$U_0 := \operatorname{span}\{e_0\}, \qquad U_1 := \operatorname{span}\{e_1\}, \qquad U_2 := \operatorname{span}\{d\}$$

([[def-linear-combination-and-span]]). Their pairwise intersections are all
$\{0_V\}$ and their sum is $F^{2}$, yet $d$ has two different decompositions,
$d = e_0 + e_1 + 0_V$ and $d = 0_V + 0_V + d$, so condition (D2) fails at
$j = 2$.

The three sets are called lines informally, as elsewhere on this page; no claim
is made about their dimension, nor about how many such sets $F^{2}$ contains.

## Facts & Assumptions

**Given:** A field $F$, the vector space $F^{2}$ over $F$, the vectors $e_0, e_1$ and $d = e_0 + e_1$, and the linear subspaces $U_0, U_1, U_2$ as displayed.

[L1] $F^{2}$ is the vector space of functions $2 \to F$ with $(x+y)_i = x_i + y_i$ and $(\lambda x)_i = \lambda x_i$, where $2 = \{0,1\}$, and its zero vector has both coordinates $0_F$; the index set of a three-term family is $3 = \{0,1,2\}$ ([[def-function-space]], [[def-vector-space]], [[def-natural-numbers]], [[lem-nat-order-is-membership]]).

[L2] $\operatorname{span}\{v\} = \{\, \lambda v : \lambda \in F \,\}$, a span is a linear subspace, and for $v \ne 0_V$ the equation $\lambda v = 0_V$ forces $\lambda = 0_F$ ([[lem-span-of-a-single-vector]], [[def-linear-combination-and-span]]).

[L3] The elements of $\sum_{i<n} U_i$ are exactly the $\sum_{i<n} u_i$ with $u_i \in U_i$, and $\sum_{i<3} u_i = (u_0 + u_1) + u_2$ ([[def-sum-of-linear-subspaces]]).

[L4] $V = \bigoplus_{i<n} U_i$ requires (D1) $\sum_{i<n} U_i = V$ and (D2) $U_j \cap \sum_{i \ne j} U_i = \{0_V\}$ for every $j < n$, where $\sum_{i \ne j} U_i$ is the sum of the family that agrees with $U$ off $j$ and is $\{0_V\}$ at $j$ ([[def-internal-direct-sum]]).

[L5] $V = \bigoplus_{i<n} U_i$ holds if and only if every $v \in V$ has exactly one decomposition $\sum_{i<n} u_i$ with $u_i \in U_i$ ([[lem-direct-sum-criterion]]).

[L6] In a field: $1_F \ne 0_F$; $\lambda 1_F = \lambda$; $0_F \lambda = 0_F$ ([[lem-of-zero-mult]]) and multiplication is commutative, so $\lambda 0_F = 0_F$; and $0_F$ is the additive identity ([[def-field]]).

[L7] A linear subspace contains $0_V$, by condition (W1) ([[def-linear-subspace]]).

[L8] The refuted claim: three linear subspaces whose sum is $V$ and whose pairwise intersections are $\{0_V\}$ form an internal direct sum of $V$.

## Counterexample

**Proof technique:** direct.

1.1 In $F^{2}$ the vectors $e_0$, $e_1$ and $d = e_0 + e_1$ have coordinates $(1_F, 0_F)$, $(0_F, 1_F)$ and $(1_F + 0_F,\, 0_F + 1_F) = (1_F, 1_F)$; and $U_0, U_1, U_2$ are linear subspaces of $F^{2}$, being spans. [L1, L2, L6]

1.2 The elements of the three subspaces have the coordinates $\lambda e_0 = (\lambda, 0_F)$, $\lambda e_1 = (0_F, \lambda)$ and $\lambda d = (\lambda, \lambda)$, for $\lambda \in F$. [L1, L2, L6]

1.3 $e_0$, $e_1$ and $d$ are all different from $0_V$, since each has a coordinate equal to $1_F$ and $1_F \ne 0_F$. [L1, L6]

2.1 The pairwise intersections are $\{0_V\}$. Each contains $0_V$, every $U_j$ being a linear subspace. Conversely, if $x \in U_0 \cap U_1$ then $x = (\lambda, 0_F) = (0_F, \mu)$ for some $\lambda, \mu$, so $\lambda = 0_F$ and $x = 0_V$; if $x \in U_0 \cap U_2$ then $x = (\lambda, 0_F) = (\mu, \mu)$, so $\mu = 0_F$ and $\lambda = 0_F$; and if $x \in U_1 \cap U_2$ then $x = (0_F, \lambda) = (\mu, \mu)$, so $\mu = 0_F$ and $\lambda = 0_F$. [step 1.2, L1, L7]

2.2 $\sum_{j<3} U_j = F^{2}$. Given $x \in F^{2}$, the list $(x_0 e_0,\; x_1 e_1,\; 0_V)$ has its $j$-th entry in $U_j$, and its sum is $(x_0 e_0 + x_1 e_1) + 0_V$, whose coordinates are $(x_0 + 0_F,\; 0_F + x_1) = (x_0, x_1)$, that is $x$. The reverse inclusion holds because the sum is a subset of $F^{2}$. [step 1.2, L1, L3, L6, L7]

2.3 The vector $d$ has two different decompositions with $j$-th entry in $U_j$: the list $(e_0, e_1, 0_V)$ sums to $(e_0 + e_1) + 0_V = d$, and the list $(0_V, 0_V, d)$ sums to $(0_V + 0_V) + d = d$; the two lists differ at index $0$, since $e_0 \ne 0_V$. [step 1.2, step 1.3, L1, L3, L6, L7]

3.1 Condition (D2) fails at $j = 2$. The family agreeing with $U$ off $2$ and equal to $\{0_V\}$ at $2$ admits the list $(e_0, e_1, 0_V)$, which sums to $d$, so $d \in \sum_{i \ne 2} U_i$; also $d = 1_F d \in U_2$; and $d \ne 0_V$. Hence $U_2 \cap \sum_{i \ne 2} U_i$ contains a vector other than $0_V$. [step 1.3, step 2.3, L2, L4, L6]

4.1 So $U_0, U_1, U_2$ satisfy both hypotheses of [L8], by steps 2.1 and 2.2, and fail its conclusion, by step 3.1: the claim is false. The failure is visible directly in step 2.3 as the loss of unique decomposition, which by the direct sum criterion is equivalent to the failure of the direct sum. [step 2.1, step 2.2, step 2.3, step 3.1, L5, L8] ∎

## Remarks

- **This is why (D2) is stated as it is.** For two summands, (D2) and the pairwise
  condition coincide ([[def-internal-direct-sum]]); from three summands on they
  part company, and the example above is the smallest separation, living in a
  plane over any field whatever. Over the reals it is the familiar picture of
  three distinct lines through the origin in the plane, no two of which meet
  anywhere but the origin.

- **The failure is exactly one of uniqueness, not of existence.** Every vector of
  $F^{2}$ does decompose, as step 2.2 shows; what fails is that some vector
  decomposes in more than one way. That is why
  [[lem-direct-sum-criterion]] states unique decomposition, and not mere
  existence, as the equivalent of a direct sum.

- **Any third line through the origin does the same job.** Nothing above is
  special to $d = e_0 + e_1$ beyond its having both coordinates nonzero; the
  argument only needs a vector lying in neither $U_0$ nor $U_1$, and $d$ is the
  simplest such vector to write down over an arbitrary field.
