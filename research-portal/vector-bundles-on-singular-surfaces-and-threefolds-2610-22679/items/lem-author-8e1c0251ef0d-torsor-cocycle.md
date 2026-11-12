---
id: lem-author-8e1c0251ef0d-torsor-cocycle
kind: lemma
title: Local sections of a torsor give a cocycle
status: published
domain: mathematics
deps:
  - math:def-category
  - math:def-functor-and-contravariant-functor
  - math:def-pullbacks-and-pushouts
  - math:def-group
  - math:def-group-action
dependency_roles:
  math:def-category: mathematical-premise
  math:def-functor-and-contravariant-functor: mathematical-premise
  math:def-pullbacks-and-pushouts: mathematical-premise
  math:def-group: mathematical-premise
  math:def-group-action: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 0
---

## Statement

Let $(\mathcal C,J)$ be a Grothendieck site. Here $\mathcal C$ is a category; a sieve on $V$ is a collection of arrows into $V$ closed under precomposition, and $f^*R$ consists of arrows $k$ with $fk\in R$. A Grothendieck topology $J$ specifies covering sieves: the maximal sieve covers, pullbacks of covering sieves cover, and a sieve $S$ covers $V$ if some covering sieve $R$ on $V$ has $f^*S$ covering the domain of every $f\in R$. A set-indexed family $\{U_i\to U\}$ is covering if its generated sieve, consisting of arrows factoring through some $U_i\to U$, is covering. Assume the fibre products used below exist in $\mathcal C$.

A presheaf of sets $F$ is a contravariant functor to sets, with restriction $F(f):F(V)\to F(W)$ for $f:W\to V$. It is a sheaf if, for each covering sieve $R$ on $V$, every family $x_f\in F(\operatorname{dom}f)$ satisfying $x_{fk}=F(k)(x_f)$ has a unique $x\in F(V)$ with $F(f)(x)=x_f$. Let $G$ be a sheaf of abelian groups: each $G(V)$ is an abelian group, its restrictions preserve the group operations, and its underlying presheaf of sets is a sheaf.

A $G$-torsor $P$ is a sheaf of sets equipped, for each $V$, with a left action of $G(V)$ on $P(V)$ commuting with restrictions. It is locally nonempty, meaning every $V$ has a covering family $\{V_a\to V\}$ with $P(V_a)\ne\varnothing$, and simply transitive on nonempty section sets: for $x,y\in P(V)$ there is exactly one $g\in G(V)$ with $y=gx$.

Suppose a covering family $\{U_i\to U\}$ and sections $s_i\in P(U_i)$ are given. Write $U_{ij}=U_i\times_U U_j$ and $U_{ijk}=(U_i\times_U U_j)\times_U U_k$. Every section in an equation on an overlap is restricted along its canonical projection to that overlap.

There are unique $g_{ij}\in G(U_{ij})$ with $s_j=g_{ij}s_i$, and $g_{ij}g_{jk}=g_{ik}$ in $G(U_{ijk})$. For any specified sections $h_i\in G(U_i)$, replacing $s_i$ by $s'_i=h_i s_i$ replaces the transition sections by $g'_{ij}=h_jg_{ij}h_i^{-1}$ in $G(U_{ij})$.

## Statement references

[[math:def-category]]

[[math:def-functor-and-contravariant-functor]]

[[math:def-pullbacks-and-pushouts]]

[[math:def-group]]

[[math:def-group-action]]

## Facts & Assumptions

**Given:** The site, abelian sheaf, torsor, covering family, local sections and specified change sections of the Statement. No choice of local sections is asserted.

**Goal:** Prove existence and uniqueness of the transitions, their cocycle equation, and their change-of-section formula.

[F1] Categories and contravariant functors have the meanings in [[math:def-category]] and [[math:def-functor-and-contravariant-functor]]. Sieves, coverings, sheaves and their restriction notation are defined in the Statement; functorial restriction identifies successive pullbacks of a section with restriction along the composite arrow.

[F2] Fibre products and their canonical projections have the universal property in [[math:def-pullbacks-and-pushouts]]. In particular, the projections from $U_{ijk}$ to each double overlap commute with the projections to the $U_i$.

[F3] The group axioms, inverses and commutativity are those of [[math:def-group]], and left actions satisfy $1x=x$ and $(ab)x=a(bx)$ as in [[math:def-group-action]]. The sectionwise torsor condition and compatibility with restriction are explicit hypotheses of the Statement.

## Proof

1.1 On $U_{ij}$ the restrictions of $s_i$ and $s_j$ are sections of $P$, so simple transitivity supplies a unique $g_{ij}$. Restricting further to $U_{ijk}$ respects both the action and the projections. Hence $s_k=g_{jk}s_j=(g_{jk}g_{ij})s_i$ and $s_k=g_{ik}s_i$. Uniqueness for the pair $(s_i,s_k)$ gives $g_{jk}g_{ij}=g_{ik}$; commutativity in $G(U_{ijk})$ gives $g_{ij}g_{jk}=g_{ik}$. [F1, F2, F3, given]

2.1 For the specified $h_i$, the action and inverse laws give $h_i^{-1}s'_i=s_i$ on every overlap. Thus $s'_j=h_js_j=h_jg_{ij}s_i=(h_jg_{ij}h_i^{-1})s'_i$. All products lie in $G(U_{ij})$ after restriction, and simple transitivity identifies the displayed coefficient with the unique new transition section $g'_{ij}$. This proves the change-of-section formula as well as the cocycle formula from step 1.1. [F1, F2, F3, given, step 1.1, algebra] ∎
