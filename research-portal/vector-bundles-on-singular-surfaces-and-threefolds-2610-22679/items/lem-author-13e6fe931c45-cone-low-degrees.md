---
id: lem-author-13e6fe931c45-cone-low-degrees
kind: lemma
title: Cofiber bounds imply low-degree cohomology isomorphisms
status: published
domain: mathematics
deps:
  - lem-author-b747b28c359f-derived-cohomology
  - math:def-derived-category-of-an-abelian-category
  - math:thm-the-derived-category-inherits-a-triangulated-structure
  - math:thm-abelian-groups-form-an-abelian-category
dependency_roles:
  lem-author-b747b28c359f-derived-cohomology: mathematical-premise
  math:def-derived-category-of-an-abelian-category: mathematical-premise
  math:thm-the-derived-category-inherits-a-triangulated-structure: mathematical-premise
  math:thm-abelian-groups-form-an-abelian-category: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 4
---

## Statement
Let $f:A\to B$ be a morphism in $D(\mathbb Z)$ and let $C$ be its cofiber, represented by a mapping cone. If $H^j(C)=0$ for every $j\leq n$, then $H^i(f)$ is an isomorphism for every $i\leq n$ and is injective for $i=n+1$. If, in addition, $H^{n+1}(C)=0$, it is an isomorphism also for $i=n+1$.

## Facts & Assumptions

**Given:** An integer $n$, a morphism $f:A\to B$ in $D(\mathbb Z)$ and a cofiber $C$ with the stated cohomology vanishing.

**Goal:** Establish the stated low-degree consequences.

[F1] Cohomology is a functor on $D(\mathbb Z)$ ([[lem-author-b747b28c359f-derived-cohomology]]).

[F2] Use the cochain and standing size conventions for the derived category: $A[1]^j=A^{j+1}$ with differential $-d_A$, and the cone of a cochain map $g:X\to Y$ has terms $Y^j\oplus X^{j+1}$ and differential $(y,x)\mapsto(d_Yy+g(x),-d_Xx)$ ([[math:def-derived-category-of-an-abelian-category]]).

[F3] The derived category has distinguished triangles given by triangles isomorphic to localized cone triangles. In this item, a cofiber of $f$ means the third object of such a triangle $A\xrightarrow{f}B\to C\to A[1]$. Every distinguished triangle gives the long exact cohomology sequence $\cdots\to H^j(A)\xrightarrow{H^j(f)}H^j(B)\to H^j(C)\to H^{j+1}(A)\to\cdots$ ([[math:thm-the-derived-category-inherits-a-triangulated-structure]]).

[F4] The category of abelian groups and homomorphisms is an abelian category, so the derived-category theorem applies to it ([[math:thm-abelian-groups-form-an-abelian-category]]).

## Proof

1.1 Apply [F3] to the abelian category of abelian groups from [F4]. By the meaning of cofiber in [F3], choose a distinguished triangle $A\xrightarrow{f}B\to C\to A[1]$, with the conventions of [F2]. Applying the long exact cohomology sequence in [F3] gives the exact segment $H^{i-1}(C)\to H^i(A)\xrightarrow{H^i(f)}H^i(B)\to H^i(C)$ for every integer $i$. These are the cohomology groups and maps on the derived category from [F1]; no choice of a representative chain map is required. [F1, F2, F3, F4, given, construct]

2.1 For $i\leq n$, both adjacent cone groups in step 1.1 vanish, giving an isomorphism. For $i=n+1$, the left group $H^n(C)$ vanishes, giving injectivity; if also $H^{n+1}(C)=0$, the right group vanishes and the map is surjective as well. This proves every claimed range without a condition on $H^{n+2}(C)$. [step 1.1, given, algebra] ∎
