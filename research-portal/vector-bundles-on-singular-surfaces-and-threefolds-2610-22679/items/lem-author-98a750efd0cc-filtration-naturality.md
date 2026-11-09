---
id: lem-author-98a750efd0cc-filtration-naturality
kind: lemma
title: Naturality of image filtrations
status: draft
domain: mathematics
deps:
  - def-decreasing-filtered-spectrum
  - lem-author-98a750efd0cc-filtration-image
dependency_roles:
  def-decreasing-filtered-spectrum: mathematical-premise
  lem-author-98a750efd0cc-filtration-image: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 6
---

## Statement
Let $F$ and $G$ be decreasing filtrations on spectra $E$ and $D$. Suppose maps $F^j\to G^j$ and $E\to D$ form a coherent map of augmented towers: in particular each square with the maps to $E$ and $D$ commutes up to the specified homotopy. Then $\pi_iE\to\pi_iD$ carries the $j$th image subgroup of $E$ into that of $D$, for every $i,j\in\mathbb Z$. These restricted maps respect identity and composition whenever the original maps do.

## Facts & Assumptions
**Given:** The two augmented towers and compatible maps just specified.

**Goal:** Establish induced functorial maps on their image subgroups.

[F1] [[def-decreasing-filtered-spectrum]] supplies the induced homomorphisms on homotopy groups; homotopic maps induce the same homomorphism.

[F2] The image subgroups are defined and are subgroups by [[lem-author-98a750efd0cc-filtration-image]].

## Proof
1.1 Take an element in the image subgroup for $F^j$. Choose a preimage in $\pi_iF^j$. The homotopy-commutative square sends its image in $\pi_iE$ to the image in $\pi_iD$ of the chosen preimage under $\pi_iF^j\to\pi_iG^j$. Hence the element lands in the stated subgroup. [F1, F2, given]

2.1 The restricted map is the restriction of the given homomorphism on ambient homotopy groups. Therefore identity and composition hold on the image subgroups whenever they hold on the ambient groups. This proves the claim. [step 1.1] ∎
