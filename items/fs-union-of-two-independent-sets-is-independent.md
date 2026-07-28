---
id: fs-union-of-two-independent-sets-is-independent
kind: false-statement
title: "FALSE: the union of two linearly independent subsets of a vector space is linearly independent"
status: draft
origin: session
deps: [cex-spanning-set-that-is-not-independent, def-linear-independence, lem-independent-list-is-injective, lem-dependent-iff-a-vector-lies-in-the-span-of-the-others, lem-adjoining-a-vector-outside-the-span, lem-standard-basis-of-f-n, lem-span-of-a-single-vector, def-linear-basis, def-linear-combination-and-span, def-monoid-finite-product, def-function-space, def-vector-space, def-field, lem-vector-space-elementary-consequences, def-natural-numbers, lem-nat-order-is-membership, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: false
short: "FALSE: unions preserve independence"
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
    - title: "Linear independence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_independence"
    - title: "Basis (linear algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Basis_(linear_algebra)"
pipeline_run: null
---

## Statement

**FALSE.** If $A$ and $C$ are linearly independent subsets of a vector space $V$
over a field $F$ ([[def-linear-independence]]), then $A \cup C$ is linearly
independent.

## Facts & Assumptions

**Given:** A field $F$, the vector space $F^{2}$ with pointwise operations, and the vectors $e_0 = (1_F,0_F)$, $e_1 = (0_F,1_F)$ and $d = e_0 + e_1 = (1_F,1_F)$.

[L1] $e[2] = \{e_0,e_1\}$ is a basis of $F^{2}$, hence linearly independent ([[lem-standard-basis-of-f-n]], claim 2, [[def-linear-basis]]).

[L2] $\{e_0,e_1,d\}$ has exactly three elements and is linearly dependent ([[cex-spanning-set-that-is-not-independent]]: the three-element count is stated there and claim 2 is that the set is linearly dependent).

[L3] $\operatorname{span}\{v\} = \{\, \lambda v : \lambda \in F \,\}$, and for $v \ne 0_V$ the equation $\lambda v = 0_V$ forces $\lambda = 0_F$ ([[lem-span-of-a-single-vector]], claims 1 and 3).

[L4] A subset $S$ is linearly independent when every injective finite list into $S$ is; an independent list is injective and never $0_V$; and every subset of an independent set is independent ([[def-linear-independence]], [[lem-independent-list-is-injective]], claims 4 and 7).

[L5] Finite sums: $\sum_{i<1}u_i = 0_V + u_0 = u_0$ ([[def-monoid-finite-product]], [[def-linear-combination-and-span]]).

[L6] In $F^{2}$: elements are equal exactly when they agree at $0$ and at $1$; $1_F \ne 0_F$; $1_F y = y$ ([[def-function-space]], [[def-vector-space]], [[lem-vector-space-elementary-consequences]], [[def-field]], [[def-natural-numbers]], [[lem-nat-order-is-membership]], [[def-injection-surjection-bijection]]).

## Refutation

**Proof technique:** direct.

1.1 Take $V := F^{2}$ over an arbitrary field $F$, $A := \{e_0, e_1\}$ and $C := \{d\}$. Then $A$ is linearly independent, being a basis of $F^{2}$. [L1]

1.2 $C$ is linearly independent. Its only injective finite lists are the empty one, which is independent, and the one-term list $v_0 = d$; for the latter, $\sum_{i<1}\lambda_i v_i = \lambda_0 d$, and $d \ne 0_V$ because $d(0) = 1_F \ne 0_F$, so $\lambda_0 d = 0_V$ forces $\lambda_0 = 0_F$. [L3, L4, L5, L6]

1.3 $A \cup C = \{e_0, e_1, d\}$, which is linearly dependent. [L2]

2.1 So $A$ and $C$ are linearly independent subsets of $F^{2}$ whose union is linearly dependent, and the statement above is false. [step 1.1, step 1.2, step 1.3, L4] ∎

## Remarks

- **What survives.** Two true statements sit either side of the false one. First, every **subset** of a linearly independent set is linearly independent ([[lem-independent-list-is-injective]], claim 7) — independence is inherited downwards, never upwards. Second, adjoining a vector **outside the span** preserves independence: if $A$ is independent and $w \notin \operatorname{span}(A)$ then $A \cup \{w\}$ is independent ([[lem-adjoining-a-vector-outside-the-span]]). The false claim is what remains after the second hypothesis is dropped, and dropping it is exactly what goes wrong above: $d = e_0 + e_1$ lies in $\operatorname{span}(A)$.

- **Independence is a property of a set, not of its members one at a time.** Every single one of $e_0$, $e_1$, $d$ spans an independent singleton, and every two-element subset of $\{e_0,e_1,d\}$ is even a basis of $F^{2}$ ([[cex-spanning-set-that-is-not-independent]]); it is only the three together that fail. So no amount of checking pieces establishes independence of a union.

- **A sufficient repair, stated but not proved here.** If $A$ and $C$ are linearly independent, **disjoint**, and $\operatorname{span}(A) \cap \operatorname{span}(C) = \{0_V\}$, then $A \cup C$ is linearly independent; an argument of exactly that shape, carried out by hand for three blocks rather than two, is what proves the independence step of [[thm-dimension-formula]]. This library does not record the general statement as a separate item, and nothing above uses it. The span condition is sufficient, not necessary: taking $C := A$ nonempty gives an independent union while $\operatorname{span}(A) \cap \operatorname{span}(C) = \operatorname{span}(A)$ is as large as it can be.
