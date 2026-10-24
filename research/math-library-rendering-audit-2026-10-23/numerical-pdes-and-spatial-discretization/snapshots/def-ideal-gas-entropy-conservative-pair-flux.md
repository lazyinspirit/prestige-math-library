---
id: def-ideal-gas-entropy-conservative-pair-flux
kind: definition
title: Explicit entropy-conservative two-point Euler flux
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
aliases: []
deps:
  - def-compressible-navier-stokes-fourier-model
  - lem-compressible-admissible-state-set-open-convex
  - lem-compressible-ideal-gas-entropy-pair-and-variables
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Eitan Tadmor, Entropy Stable Schemes, Chapter 18, Handbook of Numerical Methods for Hyperbolic Problems: Basic and Fundamental Issues, 2016, complete chapter"
      url: "https://math.umd.edu/~tadmor/references/files/Tadmor%20entropy%20stable%20schemes-r%20handbook2016.pdf"
      locator: "Printed pp. 482–483, Section 4.6, equations (32)–(33): entropy-conservative fluxes from the entropy potential."
    - title: "F. Ismail and P. L. Roe, Affordable, entropy-consistent Euler flux functions II: Entropy production at shocks, Journal of Computational Physics 228 (2009), 5410–5436, complete paper"
      url: "https://www.math.umd.edu/~tadmor/references/files/Ismail%20and%20Roe%20affordable%20fluxes%20JCP2009.pdf"
      locator: "PDF pp. 8–10, printed pp. 5417–5419, equations (40)–(42) and Appendix A: ideal-gas entropy variables and entropy-conservative Euler flux construction."
---

## Definition

For two admissible states $U_L,U_R\in\mathcal G$, let $\bar U=(U_L+U_R)/2$, $\Delta v=v(U_R)-v(U_L)$, and $\Delta\psi_j=\psi_j(U_R)-\psi_j(U_L)$, where $v$ and $\psi_j$ are given by [[lem-compressible-ideal-gas-entropy-pair-and-variables]]. Define the symmetric two-point flux

$$F_j^{\mathrm{ec}}(U_L,U_R)= \begin{cases} F_j(U_L),&\Delta v=0,\\[2mm] F_j(\bar U)+\dfrac{\Delta\psi_j-\Delta v^TF_j(\bar U)}{\|\Delta v\|^2}\,\Delta v,&\Delta v\ne0. \end{cases}$$

The norm is Euclidean in the $d+2$ conservative-state coordinates. The convexity result [[lem-compressible-admissible-state-set-open-convex]] ensures $\bar U\in\mathcal G$.
