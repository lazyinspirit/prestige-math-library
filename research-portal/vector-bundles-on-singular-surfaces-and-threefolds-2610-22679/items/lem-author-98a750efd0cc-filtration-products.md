---
id: lem-author-98a750efd0cc-filtration-products
kind: lemma
title: Products of filtration images
status: draft
domain: mathematics
deps:
  - def-multiplicative-filtered-spectrum
  - lem-author-98a750efd0cc-filtration-image
dependency_roles:
  def-multiplicative-filtered-spectrum: mathematical-premise
  lem-author-98a750efd0cc-filtration-image: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 6
---

## Statement
Let $F$ be a multiplicative filtration on a commutative ring spectrum $E$, including its multiplicative augmentation as in [[def-multiplicative-filtered-spectrum]]. For integers $a,b,i,j$, multiplication on $\pi_*E$ sends the product of the image of $\pi_iF^a\to\pi_iE$ and the image of $\pi_jF^b\to\pi_jE$ into the image of $\pi_{i+j}F^{a+b}\to\pi_{i+j}E$.

## Facts & Assumptions
**Given:** The multiplicatively augmented filtered spectrum $F\to E$ and the four integers.

**Goal:** Prove the containment of products.

[F1] [[def-multiplicative-filtered-spectrum]] supplies $F^a\wedge F^b\to F^{a+b}$ and its compatibility with multiplication on $E$.

[F2] [[lem-author-98a750efd0cc-filtration-image]] supplies the image subgroups. Homotopy groups of spectra admit the pairing induced by smash product, in the convention used in [F1].

## Proof
1.1 Choose elements $x\in\pi_iF^a$ and $y\in\pi_jF^b$ lifting the two given image elements. Smashing representatives and applying the stage multiplication gives an element of $\pi_{i+j}F^{a+b}$. [F1, F2, given]

2.1 Multiplicative compatibility of the augmentation identifies its image in $\pi_{i+j}E$ with the product of the two original image elements. Thus that product belongs to the required image subgroup. This proves the statement. [F1, step 1.1] ∎
