---
id: lem-normality-local-on-affine-opens
kind: lemma
title: Normality is checked on affine open charts
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 1
proof_strategy: direct
justified_by: []
aliases: []
deps: [cor-finite-type-algebra-over-noetherian-ring-is-noetherian, def-normal-noetherian-ring, thm-classical-principal-open-coordinate-ring-localization, def-normal-point-and-normal-variety, thm-normality-is-local-for-domains, thm-local-ring-affine-variety-localization, lem-principal-opens-form-affine-basis, thm-classical-principal-open-is-affine-variety, def-classical-integral-affine-atlas-and-chartwise-morphism, def-axiom-of-choice, thm-classical-affine-variety-prime-coordinate-ring, lem-maximal-ideals-are-points-over-algebraically-closed-field]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Algebraic Geometry (2025 version), Ch. 8 §a: Definition 8.1 and the preceding localisation reductions (cross-references 1.42, 1.49)"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Michael Artin, MIT 18.721 Algebraic Geometry notes (January 26, 2022), Ch. 4 §§4.2-4.3"
      url: "https://ocw.mit.edu/courses/18-721-algebraic-geometry-fall-2020/"
---

## Statement

Assume the Axiom of Choice. Let $X$ be a classical variety over an algebraically closed field $k$, with a finite affine open cover $X=\bigcup_i U_i$ and coordinate rings $A_i$. Then $X$ is normal if and only if every $A_i$ is a normal Noetherian ring. If $U_i$ is irreducible, this says precisely that $A_i$ is an integrally closed domain. A point can be checked in any one affine chart containing it. Empty charts have the zero ring, which is normal vacuously.

## Facts & Assumptions

**Given:** AC, $k$, $X$ and its affine cover.

[F1] Affine chart rings are finite-type $k$-algebras and hence Noetherian ([[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]). The local ring at a classical point $x\in U_i$ is $(A_i)_{\mathfrak m_x}$. This is [[thm-local-ring-affine-variety-localization]] for irreducible charts; for a reduced affine algebraic set the same identification follows from [[thm-classical-principal-open-coordinate-ring-localization]]: a germ is represented on a principal neighbourhood and hence by a localized fraction. The maximal ideals are exactly the point ideals ([[lem-maximal-ideals-are-points-over-algebraically-closed-field]]).

[F2] A classical variety is normal when its point local rings are integrally closed domains. A Noetherian ring is normal when all prime localizations are integrally closed domains, including the vacuous zero-ring case ([[def-normal-point-and-normal-variety]], [[def-normal-noetherian-ring]]).

[F3] Localizations of an integrally closed domain are integrally closed, and a domain is integrally closed if all its maximal localizations are ([[thm-normality-is-local-for-domains]]). An irreducible affine chart has a domain as coordinate ring ([[thm-classical-affine-variety-prime-coordinate-ring]]).

## Proof

1.1 If every $A_i$ is normal, each maximal localization $(A_i)_{\mathfrak m_x}$ is an integrally closed domain by [F2]. These are the local rings of $X$ by [F1], so $X$ is normal. [F1, F2, given]

1.2 Conversely suppose $X$ is normal. For a prime $\mathfrak p$ of $A_i$, choose a maximal ideal $\mathfrak m$ containing it, using AC. By [F1] and [F2], $(A_i)_{\mathfrak m}$ is an integrally closed domain. Its further localization at $\mathfrak p(A_i)_{\mathfrak m}$ is $(A_i)_{\mathfrak p}$ and is integrally closed by [F3]. Thus $A_i$ is normal. For an irreducible chart, [F3] identifies this with integral closedness of its coordinate domain. [F1, F2, F3, given, choose]

2.1 For $x\in U_i$, [F1] identifies its germ ring with $(A_i)_{\mathfrak m_x}$, so this one ring decides normality of $x$ independently of the chart. The empty variety and empty charts have no points or primes, and all conditions are vacuous. This proves the chartwise and pointwise assertions. [F1, F2, step 1.1, step 1.2] ∎
