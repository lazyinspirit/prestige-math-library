---
id: "cex-na-least-squares-boundary-omission-nonunique"
kind: "counterexample"
title: "Dropping the H1-zero boundary condition makes least squares nonunique"
status: "draft"
origin: "session"
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 5
deps: [ "def-na-least-squares-poisson-first-order" ]
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
            "locator": "Complete 26-page article; §§2.2.1 and 4.1–4.2."
          },
        {
            "title": "J. Bond et al., A First-Order System Least-Squares Finite Element
              Method for the Poisson-Boltzmann Equation",
            "url": "https://lukeo.cs.illinois.edu/files/2010_BoChCyOl_lspbe.pdf",
            "locator": "Complete 11-page article; Theorem 1 and proof; comparative weighted
              model."
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

If zero boundary values are removed from the continuous first-order Poisson least-squares problem with zero load, every constant scalar $u$ with $\sigma=0$ has zero residual; hence the unconstrained minimizer is not unique.

## Facts & Assumptions

**Given:** The least-squares residual convention and $f=0$.

[F1] The residual is $(\sigma+\nabla u,div\sigma-f)$ and the intended scalar space is $H^1_0$. ([[def-na-least-squares-poisson-first-order]])

## Proof

1.1 Fix any $c\in\mathbb R$ and set $u(x)=c$, $\sigma(x)=0$, $f=0$. Then $\nabla u=0$ and $div\sigma=0$, so both residual components in [F1] vanish. [F1, construct, algebra]

2.1 Distinct constants give distinct H1 functions, and every one has objective zero, the minimum of a sum of squares. They are all admissible after the stated replacement of H1_0 by H1, so the unconstrained minimizer is not unique. [step 1.1, given, algebra] ∎
