---
id: thm-central-extensions-and-nilpotency-class
kind: theorem
title: "A central extension of a class-$c$ nilpotent group is nilpotent of class at most $c+1$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-subgroup-commutator-and-lower-central-series, thm-upper-and-lower-central-characterizations-of-nilpotence]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
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

Let $N\trianglelefteq G$ with $N\le Z(G)$. If $G/N$ is nilpotent of class at most $c$, then $G$ is nilpotent of class at most $c+1$.

## Facts & Assumptions

**Given:** A central normal subgroup $N\trianglelefteq G$ and an integer $c\ge0$ such that $G/N$ has class at most $c$.

[F1] $\gamma_1(H)=H$ and $\gamma_{r+1}(H)=[H,\gamma_r(H)]$ ([[def-subgroup-commutator-and-lower-central-series]]).

[L1] For every group $H$ and natural number $d$, the conditions that $H$ has a central series of length $d$, that $Z_d(H)=H$, and that $\gamma_{d+1}(H)=1$ are equivalent; the least such $d$ is the nilpotency class ([[thm-upper-and-lower-central-characterizations-of-nilpotence]]).

## Proof

**Proof technique:** direct.

1.1 For the quotient map $q:G\to G/N$, induction from [F1] gives $q(\gamma_r(G))=\gamma_r(G/N)$ for every $r$, because $q$ is surjective and sends commutators onto commutators. [F1, algebra]

2.1 If $G/N$ has class $e\le c$, then [L1] gives $\gamma_{e+1}(G/N)=1$, and [F1] keeps all later lower-central terms trivial; hence $\gamma_{c+1}(G/N)=1$. Step 1.1 therefore gives $\gamma_{c+1}(G)\le N$. [given, step 1.1, F1, L1]

3.1 Centrality of $N$ gives $[G,N]=1$, so $\gamma_{c+2}(G)=[G,\gamma_{c+1}(G)]\le[G,N]=1$. [step 2.1, F1, algebra]

4.1 By [L1], $G$ is nilpotent of class at most $c+1$. The case $c=0$ is included: then $G/N=1$, so $G=N\le Z(G)$ and $G$ has class at most one. [step 3.1, L1] ∎
