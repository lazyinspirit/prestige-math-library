---
id: "lem-na-least-squares-poisson-space-conformity"
kind: "lemma"
title: "The RT0/P1 least-squares family is conforming"
status: "draft"
origin: "session"
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 7
deps:
  [
    "def-na-least-squares-poisson-first-order",
    "lem-na-rt0-unisolvence-and-global-conformity",
    "lem-na-h1-interior-facet-traces-agree",
    "def-countable-choice"
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance: { "statement": "literature-derived", "proof": "ai-altered" }
sources:
  {
    "references":
      [
        {
            "title": "Peter Bochev and Max Gunzburger, Least-squares finite element methods",
            "url": "https://people.sc.fsu.edu/~mgunzburger/files_papers/gunzburger-ls-icm.p\
              df",
            "locator": "Complete 26-page paper; §§2.2.1 and 4.1–4.2 on first-order
              least-squares Poisson and residual norm equivalence."
          },
        {
            "title": "J. Bond, R. Chaudhry, L. Cyr, and L. Olson, A First-Order System
              Least-Squares Finite Element Method for the Poisson-Boltzmann
              Equation",
            "url": "https://lukeo.cs.illinois.edu/files/2010_BoChCyOl_lspbe.pdf",
            "locator": "Complete 11-page paper; Theorem 1 and proof, used comparatively
              because its coefficients and boundary hypotheses differ."
          }
      ]
  }
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice. The finite-mesh family $RT_0(\mathcal T_h)\times(P_1(\mathcal T_h)\cap H^1_0(\Omega))$ from [[def-na-least-squares-poisson-first-order]] is a finite-dimensional subspace of $H(div;\Omega)\times H^1_0(\Omega)$.

## Facts & Assumptions

**Given:** A finite conforming triangular mesh.

[A1] Countable Choice is inherited by Sobolev interfaces. ([[def-countable-choice]])

[F1] The RT0/P1 trial factors and boundary condition are fixed by the definition. ([[def-na-least-squares-poisson-first-order]])

[F2] Matching RT0 facet fluxes imply global H(div) conformity. ([[lem-na-rt0-unisolvence-and-global-conformity]])

[F3] Global H1 traces agree across interior facets. ([[lem-na-h1-interior-facet-traces-agree]])

## Proof

1.1 Local RT0 fields and their divergences are polynomials; shared normal flux degrees of freedom agree by [F2]. Their global distributional divergence is therefore the piecewise $L^{2}$ divergence, so the flux factor lies in H(div). [A1, F1, F2, algebra]

2.1 The scalar factor is globally continuous piecewise affine and has H1_0 boundary condition; [F3] gives the interior trace convention. The finite mesh has finitely many polynomial coefficients, so the product space is finite dimensional. [F1, F3, step 1.1, algebra] ∎
