---
id: prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold
kind: proposition
title: "An oriented transverse normal bundle orients an embedded submanifold"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space, def-normal-and-conormal-bundles-of-an-embedded-submanifold, prop-normal-and-conormal-bundles-are-smooth-vector-bundles]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ioan Mărcuț, Manifolds (2017 lecture notes), §§14.5, 15.1"
      url: "https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf"
    - title: "Will Merry, Differential Geometry (2021), Lecture 24"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

Assume $\mathrm{AC}_\omega$. For an embedded submanifold, any two of the orientations of the ambient tangent bundle, tangent bundle, and transverse normal bundle determine the third.

## Facts & Assumptions

**Given:** The axiom $\mathrm{AC}_\omega$, an embedded submanifold $S\subseteq M$, and orientations of any two among $TM|_S$, $TS$, and the normal bundle $\nu S$.

[L1] Under $\mathrm{AC}_\omega$, the normal bundle is a smooth vector bundle ([[prop-normal-and-conormal-bundles-are-smooth-vector-bundles]]).

[L2] Its fibre is the quotient $\nu_pS=T_pM/T_pS$ ([[def-normal-and-conormal-bundles-of-an-embedded-submanifold]]).

[L3] An orientation is a positive ray in the one-dimensional determinant line ([[def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], $0\to TS\to TM|_S\to\nu S\to0$ is an exact sequence of smooth vector bundles. Local frames of $TS$ extended to frames of $TM|_S$ give the ordered smooth determinant-line isomorphism $\det(TM|_S)\cong\det(TS)\otimes\det(\nu S)$. [given, L1, L2, construct]

2.1 Under this isomorphism, [L3] turns any two selected positive rays into a unique third ray: tensor the tangent and normal rays to obtain the ambient ray, or choose the unique tangent or normal ray whose tensor product is the prescribed ambient ray. Smoothness is local in the adapted frames, so each resulting ray field is an orientation. [L3, step 1.1] ∎
