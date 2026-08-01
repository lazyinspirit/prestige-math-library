---
id: lem-coset-partition
kind: lemma
title: "The left cosets of a subgroup partition the group"
status: published
origin: session
deps: [lem-coset-membership-and-equality, def-equivalence-relation, lem-equivalence-classes-partition]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "UCL lecture notes, Cosets and Lagrange's theorem"
      url: "https://www.homepages.ucl.ac.uk/~ucahmto/0007/_book/4-6-cosets-and-lagranges-theorem.html"
pipeline_run: null
---

## Statement

For a subgroup $H\le G$, the set of distinct left cosets $\{gH:g\in G\}$ is a
partition of $G$: every element belongs to a left coset, every coset is
nonempty, and two left cosets are either equal or disjoint.

## Facts & Assumptions

**Given:** A group $G$ and a subgroup $H\le G$.

[F1] A relation is an equivalence relation when it is reflexive, symmetric and transitive ([[def-equivalence-relation]]).

[L1] The equivalence classes of an equivalence relation on a set are nonempty, cover the set and are pairwise equal or disjoint ([[lem-equivalence-classes-partition]]).

[L2] For $a,b\in G$, $b\in aH$ if and only if $a^{-1}b\in H$, and $aH=bH$ if and only if $a^{-1}b\in H$ ([[lem-coset-membership-and-equality]]).

## Proof

**Proof technique:** direct.

1.1 Define $a\sim b$ when $a^{-1}b\in H$. Since $a^{-1}a=e\in H$, the relation is reflexive. [F1, L2]

1.2 If $a\sim b$, then $a^{-1}b\in H$, so its inverse $b^{-1}a$ belongs to $H$ and $b\sim a$; thus the relation is symmetric. [given, F1, L2]

1.3 If $a\sim b$ and $b\sim c$, subgroup closure gives $a^{-1}c=(a^{-1}b)(b^{-1}c)\in H$, so $a\sim c$; thus the relation is transitive. [given, F1, L2]

2.1 By steps 1.1 to 1.3, $\sim$ is an equivalence relation. Its class at $a$ is $\{b:a^{-1}b\in H\}=aH$ by [L2]. [step 1.1, step 1.2, step 1.3, F1, L2]

3.1 The conclusion follows from [L1] applied to these equivalence classes. [step 2.1, L1] ∎
