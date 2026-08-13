---
id: thm-subgroups-quotients-and-finite-products-of-nilpotent-groups
kind: theorem
title: "Subgroups, quotients, and finite direct products of nilpotent groups are nilpotent"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-subgroup-commutator-and-lower-central-series, thm-upper-and-lower-central-characterizations-of-nilpotence, thm-external-direct-product-is-a-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Subgroup Series I"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/subgpseries1.pdf"
    - title: "K. Igusa, Notes on Jordan-Hölder, section 5"
      url: "https://people.brandeis.edu/~igusa/Math131b/JH.pdf"
pipeline_run: null
---

## Statement

Every subgroup and every quotient of a nilpotent group is nilpotent. Every finite direct product of nilpotent groups is nilpotent; the class of a subgroup or quotient is at most the class of the original group, and the class of a nonempty finite product is at most the maximum of the factor classes. The empty product is the trivial group of class zero.

## Facts & Assumptions

**Given:** A nilpotent group $G$, a subgroup $H\le G$, a normal subgroup $N\trianglelefteq G$, and nilpotent groups $G_1,\ldots,G_t$.

[F1] $\gamma_1(K)=K$ and $\gamma_{r+1}(K)=[K,\gamma_r(K)]$ ([[def-subgroup-commutator-and-lower-central-series]]).

[L1] For every group $K$ and natural number $c$, the conditions that $K$ has a central series of length $c$, that $Z_c(K)=K$, and that $\gamma_{c+1}(K)=1$ are equivalent; the least such $c$ is the nilpotency class ([[thm-upper-and-lower-central-characterizations-of-nilpotence]]).

[L2] Direct products have coordinatewise multiplication and inverses ([[thm-external-direct-product-is-a-group]]).

## Proof

**Proof technique:** direct.

1.1 Induction on $r$ gives $\gamma_r(H)\le\gamma_r(G)$: it is clear at $r=1$, and subgroup commutators preserve an inclusion at the next term. [F1, algebra]

1.2 For the quotient map $q:G\to G/N$, induction on $r$ gives $q(\gamma_r(G))=\gamma_r(G/N)$, because $q$ is surjective and sends commutators onto commutators. [F1, algebra]

1.3 Coordinatewise commutators from [L2] give $\gamma_r(K\times L)=\gamma_r(K)\times\gamma_r(L)$ for every $r$, by induction. [F1, L2, algebra]

2.1 If $G$ has class $e\le c$, then [L1] gives $\gamma_{e+1}(G)=1$, and [F1] keeps every later lower-central term trivial, so $\gamma_{c+1}(G)=1$. Steps 1.1 and 1.2 make $\gamma_{c+1}(H)$ and $\gamma_{c+1}(G/N)$ trivial; [L1] then makes both nilpotent of class at most $c$. [step 1.1, step 1.2, F1, L1]

2.2 For a nonempty finite product, choose the maximum $c$ of the finitely many factor classes. Repeated use of step 1.3 makes its $(c+1)$-st lower-central term trivial, so [L1] gives class at most $c$; the empty product is the trivial group of class zero. [step 1.3, L1, choose]

3.1 These arguments establish all three closure assertions and their stated class bounds. [step 2.1, step 2.2] ∎
