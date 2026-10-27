---
page: the-kazhdan-lusztig-character-and-multiplicity-theorem
title: "The Kazhdan–Lusztig Character and Multiplicity Theorem"
status: published
items: [def-regular-integral-dot-orbit-labelling-convention, lem-projective-verma-multiplicities-equal-soergel-standard-ranks, thm-projective-verma-multiplicities-are-kazhdan-lusztig-values-at-one, thm-simple-verma-composition-multiplicities-are-kazhdan-lusztig-values, thm-the-kazhdan-lusztig-character-formula-in-regular-integral-category-o, prop-translation-identifies-regular-integral-blocks, rem-the-full-ext-version-requires-the-koszul-grading-of-category-o]
examples: []
---

This page proves the Kazhdan–Lusztig character and multiplicity theorem in a
regular integral block of type A, through the Soergel functor rather than as an
imported conjecture. The labelling conventions fix the dot-orbit labels, BGG
reciprocity, the classical $q=v^{-2}$ normalization and the label-reversing
Soergel dictionary. A standard-support rank comparison for polynomial Soergel
lifts then computes the Verma-flag multiplicity of each indecomposable
projective, and Soergel's character theorem ${\rm ch}(B_w)=\underline H_w$ read
degree by degree at $q=1$ turns it into the Kazhdan–Lusztig value $P_{y,w}(1)$.
BGG reciprocity converts the projective multiplicities into Verma composition
multiplicities, and inverting the unitriangular multiplicity matrix — a weighted
incidence-algebra inverse, not ordinary Bruhat Möbius inversion — yields the
inverse-Kazhdan–Lusztig character formula $\mathrm{ch}\,L(w\cdot\lambda)=
\sum_x q'_{w,x}(1)\,\mathrm{ch}\,M(x\cdot\lambda)$. The actual tensor/block-projection
translations between dominant regular integral blocks are then proved to be
inverse equivalences preserving all labelled data. A closing scope remark
separates these ordinary statements from the graded, $\mathrm{Ext}$ and Koszul
refinements, which are reserved for a separate frontier. The finite
computations, the signed inverse matrices and the counterexample to the naive
coefficientwise reading are collected on
[[the-kazhdan-lusztig-character-and-multiplicity-theorem-examples]].
