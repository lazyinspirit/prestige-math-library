---
id: lem-author-8e1c0251ef0d-units-sheaf
kind: lemma
title: Units in a sheaf of rings form a sheaf
status: published
domain: mathematics
deps:
  - math:def-category
  - math:def-functor-and-contravariant-functor
  - math:def-ring
  - math:def-ring-homomorphism
  - math:def-group
  - math:lem-ring-homomorphism-basic-properties
  - math:lem-ring-units-form-a-group
dependency_roles:
  math:def-category: mathematical-premise
  math:def-functor-and-contravariant-functor: mathematical-premise
  math:def-ring: mathematical-premise
  math:def-ring-homomorphism: mathematical-premise
  math:def-group: mathematical-premise
  math:lem-ring-homomorphism-basic-properties: mathematical-premise
  math:lem-ring-units-form-a-group: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 0
---

## Statement
Let $\mathcal O$ be a sheaf of commutative rings on a site. The presheaf $U\mapsto\mathcal O(U)^\times$ is a sheaf of abelian groups, where $\mathcal O(U)^\times$ denotes the multiplicatively invertible elements. Rings and restriction homomorphisms are unital; the zero ring is allowed.

## Facts & Assumptions

**Given:** A site $(\mathcal C,J)$ and a sheaf of commutative unital rings $\mathcal O$ on it, with the conventions below.

**Goal:** Prove the sheaf condition for its units and the compatibility of their abelian group structures with restriction.

[F1] A site here is a category $\mathcal C$ equipped with a Grothendieck topology $J$. A sieve $R$ on $U$ is a collection of arrows to $U$ closed under precomposition. For $f:V\to U$, define $f^*R=\{g:W\to V:fg\in R\}$. The covering sieves are specified by $J$: the maximal sieve covers, pullbacks of covering sieves cover, and a sieve $S$ covers $U$ whenever there is a covering sieve $R$ on $U$ such that $f^*S$ covers the domain of every $f\in R$. Category, domain, identity and composition have the meanings in [[math:def-category]]. These definitions impose no scheme hypothesis or additional smallness restriction; class-sized data use that supplier's definable-class convention.

[F2] A presheaf of sets is a contravariant functor to sets and functions, as in [[math:def-functor-and-contravariant-functor]]. Write $f^*$ for restriction along $f$. A matching family on $R$ consists of $s_f\in F(V)$ for each $f:V\to U$ in $R$, with $g^*s_f=s_{fg}$ for every $g:W\to V$. A sheaf means that each such family on every covering sieve has exactly one amalgamation $s\in F(U)$ satisfying $f^*s=s_f$. In particular, two sections with the same restrictions on a covering sieve are equal. This is an inline convention for arbitrary sites, independent of a construction of sheafification.

[F3] A ring is unital as in [[math:def-ring]], and commutative means $ab=ba$ for all elements. The presheaf $\mathcal O$ assigns a commutative ring to each object and a unital ring homomorphism $f^*:\mathcal O(U)\to\mathcal O(V)$ to each $f:V\to U$, in the sense of [[math:def-ring-homomorphism]], with $1_U^*=\operatorname{id}$ and $(fg)^*=g^*f^*$. Its underlying set-valued presheaf satisfies [F2]. A sheaf of abelian groups means the analogous assignment of abelian groups and restriction maps preserving multiplication and identity, satisfying these same restriction laws and the underlying-set sheaf condition; abelian groups have the meaning in [[math:def-group]].

[F4] For a ring $A$, its units are $A^\times=\{a\in A:ab=ba=1\text{ for some }b\in A\}$. They form a group under multiplication, and inverses are unique, by [[math:lem-ring-units-form-a-group]]. Every unital ring homomorphism $h:A\to B$ carries units to units and satisfies $h(a^{-1})=h(a)^{-1}$, by claim 3 of [[math:lem-ring-homomorphism-basic-properties]]. These facts include the zero ring.

## Proof

1.1 By [F3] and [F4], restriction gives maps on units, preserving multiplication, identity and inverses; their identity and composition laws are inherited from $\mathcal O$. Thus the units form a presheaf of groups. Let $R$ be a covering sieve on $U$ and let $(a_f)$ be a matching family of units. By [F4], $g^*(a_f^{-1})=(g^*a_f)^{-1}=a_{fg}^{-1}$, so their uniquely determined inverses also form a matching family. Apply [F2] to the underlying sheaf of $\mathcal O$ to glue the two families to sections $a,b\in\mathcal O(U)$. For every $f:V\to U$ in $R$, $f^*(ab)=a_fa_f^{-1}=1=f^*1$ and $f^*(ba)=a_f^{-1}a_f=1=f^*1$ by [F3]. Uniqueness in [F2] gives $ab=ba=1$, so $a$ is a unit amalgamating the original family. [F2, F3, F4, construct]

2.1 Two unit amalgamations are sections of $\mathcal O(U)$ with the same restrictions on $R$, so they are equal by [F2]. Thus the presheaf of units is a sheaf. Its groups are abelian because their multiplication is inherited from the commutative rings $\mathcal O(U)$; their restrictions preserve the group operations by step 1.1. This is precisely a sheaf of abelian groups in [F3]. The argument also allows an empty covering sieve: the same uniqueness condition still implies $ab=ba=1$. No choice of inverses is required, since they are unique. [F2, F3, F4, step 1.1] ∎
