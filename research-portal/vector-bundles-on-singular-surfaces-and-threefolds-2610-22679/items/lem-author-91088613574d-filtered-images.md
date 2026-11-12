---
id: lem-author-91088613574d-filtered-images
kind: lemma
title: Filtered equivalences preserve image filtrations
status: published
domain: mathematics
deps:
  - def-decreasing-filtered-spectrum
  - lem-author-98a750efd0cc-filtration-image
  - def-stable-spectra-interface
  - math:def-injection-surjection-bijection
  - math:def-group-isomorphism-and-automorphism
  - math:def-axiom-of-choice
dependency_roles:
  def-decreasing-filtered-spectrum: mathematical-premise
  lem-author-98a750efd0cc-filtration-image: mathematical-premise
  def-stable-spectra-interface: mathematical-premise
  math:def-injection-surjection-bijection: mathematical-premise
  math:def-group-isomorphism-and-automorphism: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 6
formulation_deps:
  - def-decreasing-filtered-spectrum
  - lem-author-98a750efd0cc-filtration-image
  - def-stable-spectra-interface
  - math:def-injection-surjection-bijection
  - math:def-group-isomorphism-and-automorphism
  - math:def-axiom-of-choice
argument_deps:
  - def-decreasing-filtered-spectrum
  - lem-author-98a750efd0cc-filtration-image
  - def-stable-spectra-interface
  - math:def-injection-surjection-bijection
  - math:def-group-isomorphism-and-automorphism
  - math:def-axiom-of-choice
---

## Statement
Assume the Axiom of Choice and the compatible nested Grothendieck universes $U\in V\in W$, with $\omega\in U$, stipulated by the supplied stable spectra and filtration constructions. All indexing diagrams and objects obey those size bounds.

Let $F^\bullet,G^\bullet$ be integer-indexed decreasing towers of spectra and $e:F^\bullet\simeq G^\bullet$ an equivalence compatible with their coherent transition maps. Identify $F^0$ and $G^0$ with the same spectrum $E$ so that $e^0$ becomes the identity. For every $j\geq0$ and $i\in\mathbb Z$, the isomorphism $\pi_i(e^j)$ identifies the images of the two transition maps to stage zero inside $\pi_iE$.

More generally, suppose the towers carry compatible augmentations $a_F^j:F^j\to E$ and $a_G^j:G^j\to E$, and $e$ respects them: $a_G^j e^j\simeq a_F^j$ for every integer $j$. Then their augmentation images agree for every $i,j\in\mathbb Z$. If the stage-zero augmentations are the chosen identifications, these are the transition-to-zero images for $j\geq0$. A decreasing tower supplies a transition $j\to k$ when $j\geq k$; it supplies no transition from a negative stage to zero.

## Statement references
[[def-decreasing-filtered-spectrum]]

[[lem-author-98a750efd0cc-filtration-image]]

[[def-stable-spectra-interface]]

[[math:def-injection-surjection-bijection]]

[[math:def-group-isomorphism-and-automorphism]]

## Facts & Assumptions
**Given:** The towers, their equivalence and stage-zero identifications; for the second assertion, the specified compatible augmentations.

**Goal:** Compare the two image subgroups in the stated ranges.

[F1] An augmentation induces a homomorphism of abelian homotopy groups whose image is a subgroup. Transitions in a decreasing tower go from larger indices to smaller ones. For the first assertion, restrict each tower to nonnegative indices and extend it constantly by its stage-zero spectrum below zero, with identity augmentations there. The transitions to stage zero on the nonnegative part and these identities form a coherent augmentation; this gives an augmented decreasing filtration with the same nonnegative transition maps. [[def-decreasing-filtered-spectrum]], [[lem-author-98a750efd0cc-filtration-image]]

[F2] In the stable category of [[def-stable-spectra-interface]], $\pi_i(E)=\pi_0\operatorname{Map}_{\mathrm{Sp}}(\mathbb S[i],E)$ is functorial: it preserves identities and compositions and sends homotopic maps to equal homomorphisms. Applying it to an equivalence and its homotopy inverse gives mutually inverse homomorphisms. Thus the induced homomorphism is an isomorphism, meaning a bijective group homomorphism as in [[math:def-group-isomorphism-and-automorphism]].

[F3] The image of a function $u:A\to B$ is $u[A]=\{u(x):x\in A\}$; surjectivity means that every element of the codomain has a preimage. These are the conventions of [[math:def-injection-surjection-bijection]].

[A1] Retain the classical foundations and compatible universe bounds of the supplied constructions, including the Axiom of Choice and $\omega\in U$ for fixed $U\in V\in W$. These are premises of the selected framework; the algebraic image and product arguments below assert no necessity of Choice for the corresponding abstract group facts. [[math:def-axiom-of-choice]]

## Proof
1.1 For $j\geq0$, the transition $j\to0$ exists. Compatibility of $e$ with this transition gives a commutative square on homotopy groups with left vertical isomorphism $\pi_i(e^j)$ and right vertical identity on $\pi_iE$, by [F2]. An element in the first image therefore lies in the second; conversely, lift its source along the inverse left isomorphism. The images agree by the image and surjectivity descriptions in [F3]. [F1, F2, F3, given]

2.1 Under the additional augmentation compatibility, the same commutative square exists with the augmentation maps for every integer $j$. The identical element argument proves equality of those images. For $j\geq0$, compatibility of each augmentation with the transition to zero and its stipulated stage-zero identification identifies the augmentation map with that transition followed by identification. Thus this general form includes the first form whenever these extra data are supplied. [F1, F2, F3, given, step 1.1] ∎
