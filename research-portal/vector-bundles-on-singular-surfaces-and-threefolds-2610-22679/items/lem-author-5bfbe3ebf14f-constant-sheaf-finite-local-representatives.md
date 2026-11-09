---
id: lem-author-5bfbe3ebf14f-constant-sheaf-finite-local-representatives
kind: lemma
title: Constant-sheaf sections have finite local representatives
status: published
domain: mathematics
deps:
  - lem-author-5bfbe3ebf14f-finite-generated-topology-basis
  - def-scheme-sites-and-sheafification
dependency_roles:
  lem-author-5bfbe3ebf14f-finite-generated-topology-basis: mathematical-premise
  def-scheme-sites-and-sheafification: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 10
---

## Statement
For any set $A$, let $P_A$ be the constant presheaf and $aA=aP_A$ its cdh sheafification on the specified site. For every $s\in(aA)(X)$, the sieve of arrows $f:Y\to X$ for which $s|_Y$ is the image of some $a\in A$ is covering. Hence $s$ has a finite cdh covering family of constant representatives $a_1,\ldots,a_m$. For $A=\mathbb Z$, setting $D=\{a_1,\ldots,a_m\}\subset\mathbb Z$ yields a section of the finite constant-set sheaf $aD$ whose image in $a\mathbb Z$ is $s$. This is the precise finite-values assertion; it does not posit an unproved interpretation of arbitrary cdh sections as ordinary point functions.

## Facts & Assumptions
**Given:** A constant presheaf and a section of its sheafification.

**Goal:** Produce finitely many constant representatives, and a finite constant-set factorization.

[F1] The completed sheafification contract defines $aP=(P^+)^+$ using matching families on covering sieves modulo common covering refinement. [[def-scheme-sites-and-sheafification]]

[F2] Every covering sieve contains a finite $B$-family. [[lem-author-5bfbe3ebf14f-finite-generated-topology-basis]]

## Proof
1.1 Represent $s$ by a matching $P_A^+$-family on a covering sieve $R$ using [F1]. Each of its entries in turn is represented by a matching $P_A$-family on a covering sieve of its source. On each arrow of this second sieve, the restriction of $s$ is the image of an actual element of $A$. The sieve $L$ of all arrows having such representatives is closed under precomposition because restrictions of constants remain constant. For each arrow of $R$, its pullback of $L$ contains the corresponding second covering sieve, so it covers. Transitivity therefore shows $L$ covers $X$. Apply [F2] to choose a finite family in $L$ and representatives $a_i$ for it. [F1, F2]

2.1 Sheafification preserves a presheaf injection: if two matching families from $P$ become equal in $Q^+$ under an injection $P\hookrightarrow Q$, they agree on a common covering refinement in $Q$, hence there in $P$; thus $P^+\to Q^+$ is injective, and applying this twice proves the assertion. Consequently $aD\to aA$ is a monomorphism for the subset $D=\{a_i\}$. The local sections $a_i$ in $aD$ have equal restrictions on every pairwise overlap, since their images are the restrictions of $s$ and the map is injective. They glue uniquely to a section of $aD$ by the sheaf condition. Its image is $s$ by uniqueness of gluing in $aA$. The empty-scheme case uses the empty family and the unique empty-domain section. This proves the finite-values formulation, in particular for integers. [F1, step 1.1] ∎
