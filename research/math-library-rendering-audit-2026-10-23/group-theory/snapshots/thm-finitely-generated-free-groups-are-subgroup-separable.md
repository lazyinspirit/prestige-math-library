---
id: thm-finitely-generated-free-groups-are-subgroup-separable
kind: theorem
title: "Every finitely generated free group is subgroup separable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-subgroup-separable-and-lerf, thm-marshall-hall-free-factor-theorem, thm-nielsen-schreier-with-an-explicit-basis, thm-free-groups-are-residually-finite, def-free-product-of-a-family-of-groups]
proof_strategy: "direct"
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "Brian Osserman, Math 6112 notes on inverse limits and profinite groups"
      url: "https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf"
    - title: "H. W. Lenstra, Profinite groups and Galois groups"
      url: "https://websites.math.leidenuniv.nl/algebra/Lenstra-Profinite.pdf"
    - title: "Rita Gitik and Eliyahu Rips, On separability properties of free groups"
      url: "https://arxiv.org/pdf/1906.07275"
---

## Statement

Every finitely generated free group is subgroup separable.

## Facts & Assumptions

**Given:** A finitely generated free group $F$, a finitely generated subgroup $H\le F$, and an element $g\in F\setminus H$.

[F1] Every finitely generated subgroup $H$ of a finite-rank free group $F$ is a free factor of some finite-index subgroup $K\le F$ ([[thm-marshall-hall-free-factor-theorem]]).

[F2] Every subgroup of a free group is free ([[thm-nielsen-schreier-with-an-explicit-basis]]), and free groups are residually finite ([[thm-free-groups-are-residually-finite]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], choose a finite-index subgroup $K\le F$ with a free-product decomposition $K=H*J$. If $g\notin K$, set $L=K$. Then $L$ has finite index in $F$, contains $H$, and omits $g$. [F1, given]

2.1 If $g\in K$, the free-product decomposition gives a retraction $r:K\to H$ that fixes $H$ and kills $J$. Since $g\notin H$, the element $d=g r(g)^{-1}$ is nonidentity. By [F2] there is a homomorphism $\pi:K\to Q$ to a finite group with $\pi(d)\ne1$. The homomorphism $k\mapsto(\pi(k),\pi(r(k)))$ to $Q\times Q$ has finite image. Let $L$ be the preimage of its diagonal subgroup. Then $L$ has finite index in $K$, contains $H$ because $r(h)=h$, and omits $g$ because $\pi(g)\ne\pi(r(g))$. Thus $L$ also has finite index in $F$. [F1, F2, step 1.1, algebra]

3.1 In either case let $N$ be the core of $L$ in $F$, the intersection of its finitely many conjugates. Then $N$ is a finite-index normal subgroup of $F$ contained in $L$. Consequently $H\subseteq HN\subseteq L$ while $g\notin L$, so $g\notin HN$. This is exactly the separation required by [[def-subgroup-separable-and-lerf]]. Since $H$ and $g$ were arbitrary, $F$ is subgroup separable. [step 1.1, step 2.1, algebra] ∎
