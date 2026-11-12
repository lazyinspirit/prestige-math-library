---
title: Nesting of image filtration groups
status: published
research_item: lem-author-98a750efd0cc-filtration-nesting
dependency_level: 6
---

PDF p. 3: Section 2, image filtration

## Prerequisites

- [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum)
- [lem-author-98a750efd0cc-filtration-image](item-lem-author-98a750efd0cc-filtration-image)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice and the compatible nested Grothendieck universes $U\in V\in W$, with $\omega\in U$, stipulated by the supplied stable spectra and filtration constructions. All indexing diagrams and objects obey those size bounds.

For a decreasing filtration $F$ on a spectrum $E$ and integers $i$ and $a\geq b$, the image of $\pi_iF^a\to\pi_iE$ is contained in the image of $\pi_iF^b\to\pi_iE$.

## Facts & Assumptions
**Given:** $F$, $E$, $i$, and $a\geq b$ as stated. Write $F^j$ for the stage $F^jE$ of this filtration.

**Goal:** Prove the containment.

[F1] [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum) gives a transition $F^a\to F^b$ compatible with the maps to $E$.

[F2] [lem-author-98a750efd0cc-filtration-image](item-lem-author-98a750efd0cc-filtration-image) identifies these images as subgroups.

[F3] [def-stable-spectra-interface](item-def-stable-spectra-interface) defines $\pi_i(Z)=\pi_0\operatorname{Map}_{\mathrm{Sp}}(\mathbb S[i],Z)$. A map of spectra induces its homotopy-group map by postcomposition on these homotopy classes.

[F4] [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection) defines the image of a function $u:A\to B$ as $u[A]=\{u(x):x\in A\}$.

[A1] Retain the classical foundations and compatible universe bounds of the supplied constructions, including the Axiom of Choice and $\omega\in U$ for fixed $U\in V\in W$. These are premises of the selected framework; the algebraic image and product arguments below assert no necessity of Choice for the corresponding abstract group facts. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Proof
1.1 Let $t:\pi_iF^a\to\pi_iF^b$ and $u_j:\pi_iF^j\to\pi_iE$ be induced by the transition and the augmentation maps in [F1]. Their compatibility identifies the augmentation at $a$ with the composite through $b$ up to homotopy. Postcomposing a sphere map first with the transition and then with the augmentation represents the same class as postcomposing with that composite. Homotopic composites represent the same class, so [F3] gives $u_a=u_b\circ t$. [F1, F3, given]

2.1 Let $y$ belong to the image of $u_a$. By [F4] there is $x\in\pi_iF^a$ with $y=u_a(x)$. Step 1.1 gives $y=u_b(t(x))$, and $t(x)\in\pi_iF^b$, so [F4] puts $y$ in the image of $u_b$. Hence the first image is contained in the second. Both images are subgroups of $\pi_iE$ by [F2], giving the asserted containment of image filtration groups. [F2, F4, step 1.1] ∎
