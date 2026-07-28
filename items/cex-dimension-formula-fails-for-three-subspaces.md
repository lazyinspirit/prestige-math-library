---
id: cex-dimension-formula-fails-for-three-subspaces
kind: counterexample
title: "Three distinct lines $U_0, U_1, U_2$ in $F^{2}$ have $\\dim_F(U_0+U_1+U_2) = 2$ while the inclusion-exclusion analogue of the dimension formula predicts $3$, so the two-subspace formula does not extend"
status: published
origin: session
deps: [thm-dimension-formula, def-dimension, thm-any-two-finite-bases-have-the-same-size, def-sum-of-linear-subspaces, lem-sum-is-span-of-union, lem-intersection-of-linear-subspaces, lem-span-of-a-single-vector, lem-standard-basis-of-f-n, def-linear-basis, def-linear-independence, def-linear-subspace, def-linear-combination-and-span, lem-span-monotone-and-idempotent, def-monoid-finite-product, def-nat-addition, def-function-space, def-vector-space, def-field, lem-vector-space-elementary-consequences, def-equinumerous, def-countable, def-natural-numbers, lem-nat-order-is-membership]
justified_by: []
aliases: []
landmark: false
short: "no inclusion-exclusion for three subspaces"
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
    - title: "Dimension theorem for vector spaces (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dimension_theorem_for_vector_spaces"
    - title: "Inclusion-exclusion principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Inclusion%E2%80%93exclusion_principle"
pipeline_run: null
---

## Statement refuted

**False claim:** for finite-dimensional linear subspaces $U_0, U_1, U_2$ of a
vector space $V$ over $F$,

$$\dim_F\Bigl(\sum_{j<3}U_j\Bigr) + \dim_F(U_0 \cap U_1) + \dim_F(U_0 \cap U_2) + \dim_F(U_1 \cap U_2) \;=\; \dim_F U_0 + \dim_F U_1 + \dim_F U_2 + \dim_F(U_0 \cap U_1 \cap U_2).$$

This is the inclusion-exclusion analogue of [[thm-dimension-formula]], written
without subtraction so that both sides are natural numbers; for two subspaces the
same rearrangement is exactly that theorem.

Let $F$ be **any** field, let $F^{2}$ be the function space on $2 = \{0,1\}$
([[def-function-space]]) with $e_0 = (1_F,0_F)$, $e_1 = (0_F,1_F)$ and
$d := e_0 + e_1 = (1_F,1_F)$, and put

$$U_0 := \operatorname{span}\{e_0\}, \qquad U_1 := \operatorname{span}\{e_1\}, \qquad U_2 := \operatorname{span}\{d\} .$$

Then $\dim_F U_j = 1$ for each $j$, all three pairwise intersections and the
triple intersection equal $\{0_V\}$ and so have dimension $0$, and
$\sum_{j<3}U_j = F^{2}$ has dimension $2$. The left-hand side is
$2 + 0 + 0 + 0 = 2$ and the right-hand side is $1 + 1 + 1 + 0 = 3$, so the
claimed identity fails.

The three sets are called **lines** informally, as on the order-69 examples page;
the word carries no separate definition here.

## Facts & Assumptions

**Given:** A field $F$, the vector space $F^{2}$, the vectors $e_0$, $e_1$, $d = e_0+e_1$, and the linear subspaces $U_0, U_1, U_2$ above.

[L1] $\operatorname{span}\{v\} = \{\, \lambda v : \lambda \in F \,\}$; if $v \ne 0_V$ then $\lambda v = 0_V$ only for $\lambda = 0_F$ and $\operatorname{span}\{v\} \ne \{0_V\}$ ([[lem-span-of-a-single-vector]], claims 1 and 3).

[L2] $e : 2 \to F^{2}$ is an ordered basis with $\bigl(\sum_{i<2}\lambda_i e_i\bigr)(j) = \lambda_j$, and $\dim_F F^{2} = 2$ ([[lem-standard-basis-of-f-n]], claims 2, 3 and 4).

[L3] $\sum_{j<3}U_j = \operatorname{span}\bigl(\bigcup_{j<3}U_j\bigr)$, and a sum of a family contains each summand ([[lem-sum-is-span-of-union]], [[def-sum-of-linear-subspaces]]).

[L4] $\operatorname{span}(T)$ is a linear subspace containing $T$, contained in every linear subspace containing $T$, and monotone; the intersection of two linear subspaces is a linear subspace, and every linear subspace contains $0_V$ ([[def-linear-combination-and-span]], [[lem-span-monotone-and-idempotent]], [[lem-intersection-of-linear-subspaces]], [[def-linear-subspace]]).

[L5] $\dim_F V = p$ means $V$ has a basis with $p$ elements, and it is well defined; $\dim_F\{0_V\} = 0$; a basis is a linearly independent spanning subset ([[def-dimension]], [[thm-any-two-finite-bases-have-the-same-size]], [[def-linear-basis]], [[def-linear-independence]], [[def-equinumerous]], [[def-countable]]).

[L6] In $F^{2}$: elements are equal exactly when they agree at $0$ and at $1$; $(\lambda x)(j) = \lambda x(j)$; $1_F \ne 0_F$; $\lambda 0_F = 0_F$ and $\lambda 1_F = \lambda$ ([[def-function-space]], [[def-vector-space]], [[lem-vector-space-elementary-consequences]], [[def-field]], [[def-natural-numbers]], [[lem-nat-order-is-membership]]).

[L7] Finite sums of naturals: $\sum_{i<3}d_i = ((0 + d_0) + d_1) + d_2$ ([[def-monoid-finite-product]], [[def-nat-addition]]).

## Counterexample

**Proof technique:** direct.

1.1 Each of $e_0$, $e_1$, $d$ is nonzero, since each takes the value $1_F \ne 0_F$ somewhere, and the three are pairwise distinct: $e_0$ and $d$ differ at $1$, $e_1$ and $d$ differ at $0$, and $e_0$ and $e_1$ differ at $0$. [L6]

1.2 $\dim_F U_j = 1$ for each $j < 3$. Take $v$ to be $e_0$, $e_1$ or $d$; then $\{v\}$ spans $\operatorname{span}\{v\}$, and it is linearly independent, since an injective list into $\{v\}$ has length $0$ or is the one-term list $v$, and $\lambda v = 0_V$ forces $\lambda = 0_F$ because $v \ne 0_V$. So $\{v\}$ is a basis with exactly one element. [L1, L4, L5, L6]

1.3 The pairwise intersections are $\{0_V\}$. An element of $U_0 \cap U_1$ is $\lambda e_0 = \mu e_1$; evaluating at $0$ gives $\lambda 1_F = \mu 0_F$, that is $\lambda = 0_F$, so the element is $0_F e_0 = 0_V$. An element of $U_0 \cap U_2$ is $\lambda e_0 = \mu d$; evaluating at $1$ gives $0_F = \mu$, so it is $0_V$. An element of $U_1 \cap U_2$ is $\lambda e_1 = \mu d$; evaluating at $0$ gives $0_F = \mu$, so it is $0_V$. Each intersection also contains $0_V$, being an intersection of linear subspaces, so all three equal $\{0_V\}$. [L1, L4, L6]

1.4 $\sum_{j<3}U_j = F^{2}$. The sum contains each $U_j$, hence contains $e_0$ and $e_1$; being a linear subspace it contains $\operatorname{span}\{e_0,e_1\} = F^{2}$, and it is contained in $F^{2}$. [L2, L3, L4]

2.1 The two sides. The triple intersection $U_0 \cap U_1 \cap U_2$ is contained in $U_0 \cap U_1 = \{0_V\}$ by step 1.3 and contains $0_V$, so it is $\{0_V\}$; hence all four intersection terms have dimension $0$ by step 1.3. By step 1.4 and the standard basis, $\dim_F\bigl(\sum_{j<3}U_j\bigr) = \dim_F F^{2} = 2$, and by step 1.2 each $\dim_F U_j = 1$. So the left-hand side of the claimed identity is $2 + 0 + 0 + 0 = 2$ and the right-hand side is $1 + 1 + 1 + 0 = 3$. [step 1.2, step 1.3, step 1.4, L2, L4, L5, L7]

3.1 Since $2 \ne 3$, the claimed identity fails for these three finite-dimensional linear subspaces of $F^{2}$, so the two-subspace dimension formula has no inclusion-exclusion extension to three subspaces. [step 2.1, L5] ∎

## Remarks

- **Same witness, different failure.** The three lines used here are exactly those of [[cex-pairwise-trivial-intersection-is-not-a-direct-sum]] on the order-69 examples page. That item shows that pairwise trivial intersections together with $\sum_{j<3}U_j = F^{2}$ do **not** make the sum direct, condition (D2) of [[def-internal-direct-sum]] failing at the third summand. This item shows something else about the same configuration: that the dimensions do not obey inclusion-exclusion. Neither statement follows from the other, and the shared witness is a coincidence of economy rather than a duplication.

- **Why the two-subspace formula does not extend.** [[thm-dimension-formula]] is proved by extending a basis of $U \cap W$ to bases of $U$ and of $W$ and showing the union is a basis of $U + W$. With three subspaces there is no single "common part" to extend from: here every pairwise intersection is trivial, so the naive bookkeeping counts three independent directions in a plane that has only two.

- **The field is arbitrary and is named.** Over the two-element field the three lines are still three distinct sets, each with two elements, and every step above uses only $1_F \ne 0_F$ and the field axioms.
