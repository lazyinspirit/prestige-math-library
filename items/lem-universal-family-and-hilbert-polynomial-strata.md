---
id: lem-universal-family-and-hilbert-polynomial-strata
kind: lemma
title: "Universal family and open and closed Hilbert polynomial strata"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - thm-hilbert-scheme-represents-projective-flat-families
  - lem-hilbert-families-fpqc-descent
  - def-dependent-choice
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Nitin Nitsure, Construction of Hilbert and Quot Schemes, Sections 2–5"
      url: "https://arxiv.org/pdf/math/0504590"
    - title: "Alexander Grothendieck, Les schémas de Hilbert, Bourbaki 221, Sections 2–3"
      url: "https://www.numdam.org/item/SB_1960-1961__6__249_0.pdf"
---

## Statement

Under the hypotheses of [[thm-hilbert-scheme-represents-projective-flat-families]], there is a unique universal embedded family on the Hilbert scheme. Every family $Z\subseteq X_T$ equals the scheme theoretic pullback of this family along a unique classifying map. Its polynomial-$P$ locus is the inverse image of the open and closed stratum $H^{P,L}_{X/S}$. The representing scheme for the full functor, and its universal family, are intrinsically independent of the chosen polarization; the decomposition into polynomial strata uses that polarization. All these identifications are compatible with arbitrary base change.

## Facts & Assumptions

**Given:** The hypotheses in the statement and AC and DC, inherited from the scheme, cohomology, and finite-module suppliers ([[def-axiom-of-choice]], [[def-dependent-choice]]).

[F1] Representability, the fixed-polynomial components, and arbitrary base change are [[thm-hilbert-scheme-represents-projective-flat-families]]. Polynomial loci are open and closed by [[lem-hilbert-families-fpqc-descent]].

## Proof

1.1 Apply the natural representing bijection to the identity morphism of $H_{X/S}$. Its image is the universal family $\mathcal Z$. Naturality identifies the image of every $T\to H$ with its pullback, and bijectivity gives existence and uniqueness of the classifying map. The fixed-polynomial components represent exactly the polynomial subfunctors, so the image of a polynomial-$P$ open and closed locus lands in that component and its inverse image is precisely this locus. [F1, algebra]

2.1 The full functor is the set of embedded flat finitely presented families before any polarization is chosen. Hence two constructions made with different relatively ample bundles represent the identical functor; the natural identification gives unique mutually inverse scheme maps carrying universal families to each other. Its stratum labels can change because their polynomials are computed with the selected bundle. The same representing bijections and the canonical Cartesian identifications in [F1] prove compatibility of these intrinsic identifications, classifying maps, and families with every base change. [F1, step 1.1, algebra] ∎
