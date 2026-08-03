---
id: cor-index-tower-finite
kind: corollary
title: "For $K\\le H\\le G$ with $G$ finite, $[G:K]=[G:H][H:K]$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-lagrange, def-index, def-order-in-a-group, def-subgroup, thm-subset-of-a-finite-set, lem-nat-mult-associative, lem-nat-mult-cancellative]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, Lagrange's Theorem"
      url: "https://judsonbooks.org/abstract-algebra-theory-and-applications/"
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, §6.2: Lagrange's Theorem"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/06%3A_Cosets_and_Lagrange%27s_Theorem/6.02%3A_Lagrange%27s_Theorem"
pipeline_run: null
---

## Statement

If $K\le H\le G$ and $G$ is finite, then all three indices are finite and

$$[G:K]=[G:H][H:K].$$

## Facts & Assumptions

**Given:** A finite group $G$ and subgroups $K\le H\le G$.

[L1] Lagrange's theorem gives $|B|=[B:A]|A|$ whenever $A\le B$ and $B$ is finite ([[thm-lagrange]], [[def-index]], [[def-order-in-a-group]]).

[F1] Every subgroup contains the identity; hence its underlying set is nonempty. Also, if $K\le H\le G$, then $K\le G$: one has $K\subseteq H\subseteq G$, and the identity, product, and inverse conditions for $K$ are the same inherited operations in $H$ and $G$ ([[def-subgroup]]).

[F2] Every subset of a finite set is finite ([[thm-subset-of-a-finite-set]]).

[L2] Natural multiplication is associative, and $xz=yz$ with $z\ne0$ implies $x=y$ ([[lem-nat-mult-associative]], [[lem-nat-mult-cancellative]]).

## Proof

**Proof technique:** direct.

1.1 Since $H\le G$, its underlying set is a subset of the finite set $G$, so $H$ is finite by [F2]. Also $K\le G$ by the subgroup-transitivity derivation in [F1]. Applying [L1] to $K\le H$, $H\le G$ and this $K\le G$ gives $|H|=[H:K]|K|$, $|G|=[G:H]|H|$, and $|G|=[G:K]|K|$. [given, F1, F2, L1]

2.1 Substituting the first equality into the second and comparing with the third gives $[G:K]|K|=([G:H][H:K])|K|$. [step 1.1, L2]

3.1 Since $K$ contains the identity, $|K|\ne0$. Cancellation in $\mathbb N$ therefore yields $[G:K]=[G:H][H:K]$. [step 2.1, F1, L2] ∎
