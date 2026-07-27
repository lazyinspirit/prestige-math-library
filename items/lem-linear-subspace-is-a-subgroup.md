---
id: lem-linear-subspace-is-a-subgroup
kind: lemma
title: "The additive group of a vector space is an abelian group and every linear subspace is a subgroup of it; conversely a subgroup closed under scalar multiplication is a linear subspace"
status: published
origin: session
deps: [def-linear-subspace, def-vector-space, def-subgroup, lem-vector-space-elementary-consequences, def-group]
justified_by: []
aliases: []
landmark: false
short: "linear subspace $\\Leftrightarrow$ subgroup closed under scalars"
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
    - title: "Linear subspace (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_subspace"
    - title: "Subgroup (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subgroup"
pipeline_run: null
---

## Statement

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]).

1. $(V, +, 0_V)$ is an abelian group ([[def-group]]), called the **additive
   group** of $V$.
2. Every linear subspace $W$ of $V$ ([[def-linear-subspace]]) is a subgroup of
   $(V,+,0_V)$ ([[def-subgroup]]). Consequently $W$ with the restricted addition
   is itself a group, whose identity is $0_V$ and whose inverses are those of
   $V$.
3. Conversely, if $W \subseteq V$ is a subgroup of $(V,+,0_V)$ and
   $\lambda v \in W$ for all $\lambda \in F$ and $v \in W$, then $W$ is a linear
   subspace of $V$.

So the linear subspaces of $V$ are exactly the subgroups of its additive group
that are closed under scalar multiplication.

## Facts & Assumptions

**Given:** A field $F$, a vector space $V$ over $F$, and a subset $W \subseteq V$.

[L1] Axiom (V1): $(V,+,0_V)$ is an abelian group ([[def-vector-space]], [[def-group]]).

[L2] A subgroup of a group $G$ with identity $e$ is a subset $H$ satisfying (S1) $e \in H$, (S2) $x, y \in H$ implies $xy \in H$, and (S3) $x \in H$ implies $x^{-1} \in H$; such an $H$, with the restricted operation, is itself a group whose identity and whose inverses are those of $G$ ([[def-subgroup]]).

[L3] A linear subspace of $V$ is a subset satisfying (W1) $0_V \in W$, (W2) closure under $+$, and (W3) closure under scalar multiplication ([[def-linear-subspace]]).

[L4] $(-1_F)v = -v$ for every $v \in V$ ([[lem-vector-space-elementary-consequences]]).

## Proof

**Proof technique:** direct.

1.1 Claim 1 is axiom (V1) of a vector space, which asserts in as many words that $(V,+,0_V)$ is an abelian group. [L1]

1.2 Let $W$ be a linear subspace of $V$. Condition (W1) says $0_V \in W$, which is condition (S1) for the group $(V,+,0_V)$, whose identity is $0_V$. [L1, L2, L3]

1.3 Condition (W2) says $u + v \in W$ for all $u, v \in W$, which is condition (S2) for $(V,+,0_V)$, whose operation is $+$. [L2, L3]

1.4 Let $v \in W$. By (W3) with $\lambda = -1_F$ we get $(-1_F)v \in W$, and $(-1_F)v = -v$, so $-v \in W$; since the inverse of $v$ in the group $(V,+,0_V)$ is $-v$, this is condition (S3). [L1, L2, L3, L4]

1.5 Conversely, let $W$ be a subgroup of $(V,+,0_V)$ with $\lambda v \in W$ for all $\lambda \in F$ and $v \in W$. Condition (S1) gives $0_V \in W$, which is (W1); condition (S2) gives closure under $+$, which is (W2); and the hypothesis is (W3). [L2, L3]

2.1 By steps 1.2, 1.3 and 1.4 the subset $W$ satisfies (S1), (S2) and (S3), so it is a subgroup of $(V,+,0_V)$; by the properties of a subgroup it is then a group under the restricted addition, with identity $0_V$ and with the inverses of $V$. This is claim 2. [step 1.2, step 1.3, step 1.4, L2]

2.2 By step 1.5 the subset $W$ of that step satisfies (W1), (W2) and (W3), so it is a linear subspace of $V$. This is claim 3. [step 1.5, L3]

3.1 Claim 1 is step 1.1, claim 2 is step 2.1 and claim 3 is step 2.2; together they say that the linear subspaces of $V$ are exactly the subgroups of $(V,+,0_V)$ closed under scalar multiplication. [step 1.1, step 2.1, step 2.2] ∎

## Remarks

- **What the two directions cost.** Going from a linear subspace to a subgroup
  uses one fact about vector spaces and no group theory: closure under additive
  inverses is not assumed but derived, from closure under scalar multiplication at
  the scalar $-1_F$. Going back is pure bookkeeping, since (W1) and (W2) are
  literally (S1) and (S2).

- **Why this is worth an item.** Every statement the library proves about
  subgroups applies to linear subspaces at once. In particular the intersection of
  a nonempty family of subgroups is a subgroup
  ([[lem-intersection-of-subgroups]]), which is the group-theoretic shadow of
  [[lem-intersection-of-linear-subspaces]] below.

- **The hypothesis in claim 3 is not decoration.** Conditions (S1)–(S3) do not
  mention the scalars at all, so a subgroup of $(V,+,0_V)$ is required only to
  contain $0_V$ and to be closed under addition and under negation; closure under
  multiplication by an arbitrary $\lambda \in F$ is a further condition, and claim
  3 assumes it rather than deriving it. Claim 2 says that in the other direction
  nothing extra is needed, because (W3) is already one of the three defining
  conditions of a linear subspace.
