---
id: lem-geometric-lower-ramification-groups-normal-and-terminate
kind: lemma
title: "Geometric lower ramification groups are normal and terminate"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-lower-ramification-groups-of-a-geometric-local-extension
  - def-finite-galois-extension-and-galois-group
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Richard Crew, Local Class Field Theory, Chapters 1–2"
      url: https://people.clas.ufl.edu/rcrew/files/LCFT.pdf
verification:
  precheck: pending
---
## Statement

Let $L/K$ be a finite Galois extension of complete discretely valued fields of characteristic $p>0$ whose residue field is algebraically closed, and let $G=\operatorname{Gal}(L/K)$ have the lower ramification groups defined by valuation thresholds on $\mathcal O_L$. Then $G_0=G$, each $G_i$ is a normal subgroup of $G$, $G_{i+1}\subseteq G_i$, and $G_i=\{1\}$ for all sufficiently large integers $i$.

## Statement references

[[def-lower-ramification-groups-of-a-geometric-local-extension|Lower ramification groups of a geometric local extension]]

[Richard Crew, *Local Class Field Theory*, Chapter 2 §2.2.2](https://people.clas.ufl.edu/rcrew/files/LCFT.pdf)

## Facts & Assumptions

**Given:** The finite Galois extension and its normalized valuation as in the Statement.

[F1] [[def-lower-ramification-groups-of-a-geometric-local-extension]]: $G_i$ consists of automorphisms satisfying $v_L(\sigma(a)-a)\geq i+1$ for every $a\in\mathcal O_L$.

[F2] [[def-finite-galois-extension-and-galois-group]]: the Galois group of a finite Galois extension is finite.

## Proof

1.1 Because every residue automorphism over the algebraically closed residue field is the identity, every element of $G$ belongs to $G_0$; hence $G_0=G$. If $\sigma,\tau\in G_i$, then $v_L(\sigma\tau(a)-a)=v_L\bigl(\sigma(\tau(a)-a)+\sigma(a)-a\bigr)\geq i+1$ for every $a\in\mathcal O_L$, since $\sigma$ preserves the valuation. For inverses, $v_L(\sigma^{-1}(a)-a)=v_L(\sigma^{-1}(a-\sigma(a)))=v_L(a-\sigma(a))\geq i+1$, so $G_i$ is a subgroup. [F1, given, algebra]

1.2 For $g\in G$ and $\sigma\in G_i$, one has $v_L(g\sigma g^{-1}(a)-a)=v_L\bigl(\sigma(g^{-1}a)-g^{-1}a\bigr)\geq i+1$, so $gG_ig^{-1}\subseteq G_i$; applying this inclusion to $g^{-1}$ gives equality. Raising the threshold from $i+1$ to $i+2$ gives $G_{i+1}\subseteq G_i$. [F1, given, algebra]

2.1 If $G=\{1\}$ then all $G_i=\{1\}$. Otherwise, for each nonidentity $\sigma\in G$, choose $a_\sigma\in\mathcal O_L$ with $\sigma(a_\sigma)\ne a_\sigma$; such an element exists because $\mathcal O_L$ has fraction field $L$. Then $v_L(\sigma(a_\sigma)-a_\sigma)$ is finite. Since $G$ is finite by [F2], the maximum of these finitely many values is finite. For every $i$ greater than that maximum, no nonidentity $\sigma$ satisfies [F1], so $G_i=\{1\}$. [F1, F2, given, choose] ∎
