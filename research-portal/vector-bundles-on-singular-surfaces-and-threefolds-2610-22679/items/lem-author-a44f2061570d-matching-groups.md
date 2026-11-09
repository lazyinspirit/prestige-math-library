---
id: lem-author-a44f2061570d-matching-groups
kind: lemma
title: Matching families of abelian presheaves
status: draft
domain: mathematics
deps:
  - def-scheme-sites-and-sheafification
dependency_roles:
  def-scheme-sites-and-sheafification: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 6
---

## Statement
Let $\mathcal C$ be a small site and $F$ a presheaf of abelian groups. For a sieve $R$ on an object $U$, the compatible families of sections of $F$ indexed by arrows in $R$ form an abelian group under componentwise addition. If $F$ is a sheaf, restriction from $F(U)$ to this group is an isomorphism for every covering sieve $R$.

A presheaf of abelian groups is a contravariant functor to abelian groups. A compatible family assigns $s_f\in F(V)$ to every $f:V\to U$ in $R$, with $F(g)(s_f)=s_{fg}$ for every $g:W\to V$.

## Facts & Assumptions

**Given:** A small site, an abelian presheaf $F$, an object $U$, and a sieve $R$ on $U$.

**Goal:** Prove the group and sheaf assertions.

[F1] A sheaf has a unique amalgamation for each compatible family on a covering sieve. [[def-scheme-sites-and-sheafification]]

## Proof

**Proof technique:** Check the matching equations componentwise.

1.1 The zero family is compatible, and sums and inverses of compatible families remain compatible because every restriction map of $F$ is a group homomorphism. The abelian group laws hold componentwise. [given, construct]

2.1 Restriction sends a section on $U$ to a compatible family and is a homomorphism. When $R$ covers $U$, existence and uniqueness of amalgamations in [F1] make it bijective, hence an isomorphism. [F1, step 1.1] ∎
