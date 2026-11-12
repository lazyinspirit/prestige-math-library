---
id: lem-author-98a750efd0cc-filtration-products
kind: lemma
title: Products of filtration images
status: published
domain: mathematics
deps:
  - def-multiplicative-filtered-spectrum
  - lem-author-98a750efd0cc-filtration-image
  - def-stable-spectra-interface
  - math:def-axiom-of-choice
dependency_roles:
  def-multiplicative-filtered-spectrum: mathematical-premise
  lem-author-98a750efd0cc-filtration-image: mathematical-premise
  def-stable-spectra-interface: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 6
formulation_deps:
  - def-multiplicative-filtered-spectrum
  - lem-author-98a750efd0cc-filtration-image
  - def-stable-spectra-interface
  - math:def-axiom-of-choice
argument_deps:
  - def-multiplicative-filtered-spectrum
  - lem-author-98a750efd0cc-filtration-image
  - def-stable-spectra-interface
  - math:def-axiom-of-choice
---

## Statement
Work in ZFC and the fixed nested universes of the stable spectra interface. Let $F$ be a multiplicative filtration on a commutative ring spectrum $E$, including its multiplicative augmentation as specified by the multiplicative filtered spectrum definition. For integers $a,b,i,j$, multiplication on $\pi_*E$ sends the product of the image of $\pi_iF^a\to\pi_iE$ and the image of $\pi_jF^b\to\pi_jE$ into the image of $\pi_{i+j}F^{a+b}\to\pi_{i+j}E$.

## Statement references

[[def-multiplicative-filtered-spectrum]]

[[lem-author-98a750efd0cc-filtration-image]]

[[def-stable-spectra-interface]]

[[math:def-axiom-of-choice]]

## Facts & Assumptions
**Given:** The multiplicatively augmented filtered spectrum $F\to E$ and the four integers, under the stated ZFC and universe conventions.

**Goal:** Prove the containment of products.

[F1] [[def-multiplicative-filtered-spectrum]] supplies the stage multiplication $\mu_{a,b}:F^a\wedge F^b\to F^{a+b}$, the multiplication $\mu_E:E\wedge E\to E$, and the augmentation components $u_c:F^c\to E$, with $u_{a+b}\mu_{a,b}\simeq\mu_E(u_a\wedge u_b)$.

[F2] [[lem-author-98a750efd0cc-filtration-image]] supplies the image subgroups and surjectivity of each stage homomorphism onto its image.

[F3] [[def-stable-spectra-interface]] supplies $\pi_nA=\pi_0\operatorname{Map}_{\mathrm{Sp}}(\mathbb S[n],A)$ for every integer $n$, suspension and its inverse, and the separately exact symmetric monoidal smash product with unit $\mathbb S$.

[F4] The Axiom of Choice, [[math:def-axiom-of-choice]], is retained in the ZFC foundations and nested-universe conventions of [F1] and [F3]. Its use is in those supplied categorical and homotopical foundations; choosing the two lifts below requires only finite choice.

## Proof
1.1 Let $p$ and $q$ belong to the two stated image subgroups. By [F2], choose lifts $x\in\pi_iF^a$ and $y\in\pi_jF^b$, and by [F3] represent them by maps $\alpha:\mathbb S[i]\to F^a$ and $\beta:\mathbb S[j]\to F^b$. Fix the ordered sphere identification $\rho_{i,j}:\mathbb S[i+j]\xrightarrow{\sim}\mathbb S[i]\wedge\mathbb S[j]$ induced by suspension and the sphere unit, without interchanging the two factors. Indeed, separate exactness carries the suspension cofiber square to a suspension cofiber square, giving $A[r]\wedge B\simeq(A\wedge B)[r]$ and $A\wedge B[r]\simeq(A\wedge B)[r]$ for $r=1$; stability gives the inverse identifications for $r=-1$, and iteration gives every integer $r$. Apply these to the sphere unit to obtain $\rho_{i,j}$ for all integers $i,j$. The composite $\mu_{a,b}(\alpha\wedge\beta)\rho_{i,j}$ defines $z\in\pi_{i+j}F^{a+b}$. Smash and composition preserve homotopies, so its class depends only on $x,y$. Use this same ordered sphere convention to define multiplication on $\pi_*E$. [F1, F2, F3, F4, given, construct]

2.1 Apply $u_{a+b}$ to the representative of $z$. The compatibility in [F1] gives $u_{a+b}\mu_{a,b}(\alpha\wedge\beta)\rho_{i,j}\simeq\mu_E((u_a\alpha)\wedge(u_b\beta))\rho_{i,j}$. By the product convention in step 1.1, the right side represents $pq\in\pi_{i+j}E$, since $u_a\alpha$ and $u_b\beta$ represent $p$ and $q$. Thus $pq$ lies in the image of $\pi_{i+j}F^{a+b}\to\pi_{i+j}E$, as required. This conclusion holds for every pair $p,q$; no choice of lifts changes their product in $\pi_*E$. [F1, F2, F3, step 1.1] ∎
