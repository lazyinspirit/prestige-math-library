---
id: rem-hh-affine-tempered-langlands-classification-awaits-local-proof
kind: remark
title: "The tempered and Langlands classification remains a local proof obligation"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-hh-affine-hecke-algebra-from-root-datum, def-hh-affine-hecke-bernstein-presentation, lem-hh-affine-hecke-im-basis]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Maarten Solleveld, Affine Hecke Algebras and Their Representations"
      url: "https://arxiv.org/pdf/2009.03007"
      locator: "§3.2, Definitions 3.6, 3.9, and 3.12 and Theorem 3.13, PDF pp. 27–30; the survey cites Solleveld, Theorem 2.4.4, for the classification proof."
    - title: "Dan Ciubotaru, Tutorial on Affine Hecke Algebras"
      url: "https://imsarchives.nus.edu.sg/oldwww/Programs/016theory/files/dan.pdf"
      locator: "§§4–5, PDF pp. 5–8: Iwahori-fixed representations and the group-specific p-adic interface; no proof of the general root-data Langlands classification is given."
---

## Remark

For an affine Hecke algebra with positive real affine parameters (in Solleveld's notation, $q>1$ and real-valued $W_0$-invariant functions $\lambda,\lambda^*$ satisfying the stated compatibility condition), the source defines tempered and essentially tempered finite-dimensional modules by their $\mathbb C[X]$-weights. A Langlands datum is a parabolic subset $P\subseteq\Delta$ together with an irreducible essentially tempered representation of the corresponding parabolic algebra in strictly positive position. The induced standard module has a unique irreducible quotient, and every irreducible finite-dimensional affine-Hecke module occurs as that quotient for a unique Langlands datum.

This item reports the source theorem and is not a logical supplier. The local batch has not proved the constructions of the parabolic subalgebras and central characters, the weight criteria, the unique-quotient assertion, exhaustivity, or uniqueness of Langlands data. A group-specific p-adic representation conclusion also needs the exact Iwahori-type equivalence for the chosen group; the affine-Hecke theorem alone does not provide it. Keep the classification and that interface blocked until complete local suppliers are authored. This is an established-theorem proof obligation, not an open problem.
