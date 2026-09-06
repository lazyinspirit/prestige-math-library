---
id: def-radial-mollifier-family-in-rn
kind: definition
title: "A radial mollifier family in Rn"
status: draft
origin: pipeline
deps: [def-mollifier-family-generated-by-a-unit-mass-smooth-bump]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "PDE source treatment"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
---
## Definition

A radial mollifier family is $\rho_\varepsilon(x)=\varepsilon^{-n}\rho(x/\varepsilon)$ as in [[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]], where $\rho\ge0$, $\int\rho=1$, $\rho\in C_c^\infty(\mathbb R^n)$, $\rho(x)=q(|x|)$, and $\operatorname{supp}\rho\subset B_1(0)$. Thus $\operatorname{supp}\rho_\varepsilon\subset B_\varepsilon(0)$.
