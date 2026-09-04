---
id: thm-first-cohomology-classifies-complements-up-to-kernel-conjugacy
kind: theorem
title: "First cohomology classifies complements up to kernel conjugacy"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-first-cohomology-via-crossed-homomorphisms, lem-a-graph-subgroup-is-a-complement-exactly-for-a-crossed-homomorphism, lem-kernel-conjugation-by-an-element-of-the-coefficient-group-corresponds-to-a-principal-crossed-homomorphism]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "David A. Craven, Finite Group Theory"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
---

## Statement

Let $G$ act on an abelian group $A$. Then $H^1(G,A)$ is in canonical bijection
with the $A$-conjugacy classes of complements to the canonical copy of $A$ in
the semidirect product $A\rtimes G$.

## Facts & Assumptions

**Given:** An action of $G$ on an abelian group $A$.

[L1] First cohomology is the quotient of crossed homomorphisms by principal
crossed homomorphisms ([[def-first-cohomology-via-crossed-homomorphisms]]).

[L2] A graph subgroup is a complement exactly when its defining map is a
crossed homomorphism ([[lem-a-graph-subgroup-is-a-complement-exactly-for-a-crossed-homomorphism]]).

[L3] Conjugating a graph subgroup by a kernel element changes its defining
crossed homomorphism by a principal one
([[lem-kernel-conjugation-by-an-element-of-the-coefficient-group-corresponds-to-a-principal-crossed-homomorphism]]).

## Proof

**Proof technique:** direct.

1.1 If $z:G\to A$ is a crossed homomorphism, [L2] makes $\Gamma_z$ a complement to $A$ in $A\rtimes G$. By [L3], replacing $z$ by a cohomologous cocycle replaces $\Gamma_z$ by an $A$-conjugate complement. Hence the rule $[z]\mapsto[\Gamma_z]$ is well defined on $H^1(G,A)$. [given, L1, L2, L3]

2.1 Every complement $H\le A\rtimes G$ arises from some crossed homomorphism: the projection $H\to G$ is an isomorphism, so for each $g\in G$ there is a unique element of $H$ of the form $(z(g),g)$, and [L2] says the resulting map $z$ is a crossed homomorphism. Thus the map from step 1.1 is surjective on complement classes. [L2, step 1.1, construct]

2.2 If $\Gamma_z$ and $\Gamma_w$ are $A$-conjugate, then [L3] says $w-z$ is principal, so $[z]=[w]$ in the quotient [L1]. Therefore the map of step 1.1 is injective. [L1, L3, step 1.1]

3.1 Steps 1.1-2.2 give a bijection between $H^1(G,A)$ and the $A$-conjugacy classes of complements to $A$ in $A\rtimes G$. [step 1.1, step 2.1, step 2.2] ∎
