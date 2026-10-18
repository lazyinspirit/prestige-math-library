---
id: def-pe18-local-impedance-absorbing-boundary
kind: definition
title: First-order local impedance condition at an artificial plane
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-pe18-exterior-helmholtz-problem]
justified_by: []
proof_strategy: not-applicable
axiom_use: "No axiom is used; this defines a local boundary approximation under the stated time convention."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Galkowski, Lafontaine, and Spence, Local absorbing boundary conditions on fixed domains give order-one errors for high-frequency waves"
      url: "https://arxiv.org/pdf/2101.02154"
    - title: "NIST Digital Library of Mathematical Functions, Chapter 10: Bessel Functions"
      url: "https://dlmf.nist.gov/10"
---

## Definition

Use the outgoing time convention $e^{-i\omega t}$. On an artificial boundary with outward unit normal $n$, the first-order local impedance condition is $\partial_nu-iku=0$. For the plane $x=R$ with $n=+e_x$, this is $\partial_xu-iku=0$. It is the exact outgoing relation at normal incidence and an approximation for oblique propagating modes; no exactness or uniform small-reflection claim at grazing incidence is part of this definition.
