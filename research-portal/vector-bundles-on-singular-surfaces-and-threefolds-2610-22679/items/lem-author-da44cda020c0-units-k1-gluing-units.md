---
id: lem-author-da44cda020c0-units-k1-gluing-units
kind: lemma
title: Compatible local units glue uniquely
status: published
domain: mathematics
deps:
  - math:def-sheaf-on-topological-space
  - math:def-presheaf-of-groups-rings-modules
  - math:def-topological-space
  - math:def-ring
  - math:lem-inverse-unique
  - math:def-presheaf-on-topological-space
  - math:def-ring-homomorphism
dependency_roles:
  math:def-sheaf-on-topological-space: mathematical-premise
  math:def-presheaf-of-groups-rings-modules: mathematical-premise
  math:def-topological-space: mathematical-premise
  math:def-ring: mathematical-premise
  math:lem-inverse-unique: mathematical-premise
  math:def-presheaf-on-topological-space: mathematical-premise
  math:def-ring-homomorphism: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
formulation_deps:
  - math:def-sheaf-on-topological-space
  - math:def-presheaf-of-groups-rings-modules
  - math:def-topological-space
  - math:def-ring
  - math:def-presheaf-on-topological-space
  - math:def-ring-homomorphism
argument_deps:
  - math:def-sheaf-on-topological-space
  - math:def-presheaf-of-groups-rings-modules
  - math:def-topological-space
  - math:def-ring
  - math:lem-inverse-unique
  - math:def-presheaf-on-topological-space
  - math:def-ring-homomorphism
---

## Statement
Let X be a ringed space with structure sheaf O and let {Uᵢ} cover X. Units uᵢ∈O(Uᵢ)× that agree on every overlap Uᵢ∩Uⱼ glue to a unique u∈O(X)×. The resulting operation is compatible with multiplication.

A ringed space is a topological space equipped with a sheaf of commutative unital rings; a unit is a section having a multiplicative inverse.

## Facts & Assumptions

**Given:** A ringed space, an open cover, and compatible local units as in the statement.

**Goal:** Glue the units and prove uniqueness and multiplicativity.

[F1] The underlying set-valued presheaf of a sheaf satisfies locality (sections equal on an open cover are equal) and gluing (compatible sections on an open cover glue); locality makes the glued section unique. These clauses apply on every open subset, including the empty cover of the empty set. [[math:def-sheaf-on-topological-space]]

[F2] A sheaf of rings has a ring of sections on each open set and ring-homomorphism restriction maps, whose underlying set-valued presheaf is a sheaf. [[math:def-presheaf-of-groups-rings-modules]] For open subsets $W\subseteq V\subseteq U$, restrictions satisfy $\rho^U_U=\mathrm{id}$ and $\rho^U_W=\rho^V_W\circ\rho^U_V$. [[math:def-presheaf-on-topological-space]] Ring homomorphisms preserve addition, multiplication and identity in the unital convention. [[math:def-ring-homomorphism]] In particular, restricting $ab=ba=1$ gives $\rho(a)\rho(b)=\rho(b)\rho(a)=1$, so restrictions preserve inverses.

[F3] A topology contains the empty set and the whole space and is closed under arbitrary unions and finite intersections. [[math:def-topological-space]] An open cover here means a family of open subsets $U_i$ with $\bigcup_iU_i=X$; thus every overlap $U_i\cap U_j$ is open, and the empty family covers precisely the empty space.

[F4] A ring has an abelian additive group and associative multiplication with a two-sided identity, satisfying both distributive laws; the zero ring is allowed. [[math:def-ring]] Commutative means $ab=ba$ for all elements. A unit $a$ has an element $b$ satisfying $ab=ba=1$. Multiplication in a ring is a monoid operation, so the uniqueness-of-inverses lemma applies and this $b$ is unique. [[math:lem-inverse-unique]]

## Proof

**Proof technique:** Apply the sheaf axiom to the sections and their inverses.

1.1 By [F1], the compatible sections $u_i$ glue to a unique section $u\in\mathcal O(X)$. By [F4], let $v_i$ be the unique inverse of $u_i$. On an overlap, [F2] makes both restrictions of the $v_i$ inverses of the same restricted unit, so they agree by uniqueness of inverses in [F4]. Hence [F1] glues them to $v\in\mathcal O(X)$. The sections $uv$ and $1$ have the same restriction to every $U_i$ by [F2]; locality in [F1] gives $uv=1$, and commutativity gives $vu=1$. Thus $u$ is a unit. Uniqueness of the glued underlying section also proves uniqueness among global units. [given, F1, F2, F3, F4, construct, algebra]

2.1 Let $(u_i)$ and $(w_i)$ be two compatible families of local units, with glued units $u$ and $w$ from step 1.1. Their products form a compatible family by [F2], and each $u_iw_i$ is a unit with inverse $v_iw_i^{-1}$, where $v_i=u_i^{-1}$. By [F2], $uw$ restricts to $u_iw_i$ on each $U_i$; uniqueness in [F1] therefore identifies $uw$ with the glued product. This proves multiplicativity. The empty-cover case is included by [F1], without an additional nonemptiness assumption. [F1, F2, F4, step 1.1, algebra] ∎
