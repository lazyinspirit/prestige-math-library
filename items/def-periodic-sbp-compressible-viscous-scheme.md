---
id: def-periodic-sbp-compressible-viscous-scheme
kind: definition
title: Periodic diagonal-norm SBP compressible viscous scheme
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
aliases: []
deps:
  - def-compressible-navier-stokes-fourier-model
  - lem-compressible-ideal-gas-entropy-pair-and-variables
  - def-ideal-gas-entropy-conservative-pair-flux
  - lem-compressible-viscous-flux-entropy-variable-factorization
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
      locator: "Printed pp. 482–490, Sections 4.6–6: entropy-conservative system fluxes and high-order entropy-stable constructions."
    - title: "Pablo Fernandez, Ngoc-Cuong Nguyen, and Jaime Peraire, Entropy-stable hybridized discontinuous Galerkin methods for the compressible Euler and Navier-Stokes equations, complete author preprint"
      url: "https://arxiv.org/pdf/1808.05066"
      locator: "Sections 3.3 and 4.4–4.5, PDF pp. 6 and 11–12. The nodal SBP operator is defined locally."
---

## Definition

Let $\mathcal I=\{1,\ldots,M\}$ be a nonempty finite periodic node set. Let $H\in\mathbb R^{M\times M}$ be diagonal with strictly positive entries, and for each direction $j=1,\ldots,d$ let $D_j\in\mathbb R^{M\times M}$ satisfy the periodic diagonal-norm SBP identities

$$HD_j+D_j^TH=0,\qquad D_j\mathbf1=0.$$

For a nodal array $w=(w_i)_{i\in\mathcal I}$, $D_jw$ means componentwise matrix multiplication, $(D_jw)_i=\sum_{\ell\in\mathcal I}(D_j)_{i\ell}w_\ell$. Given admissible nodal states $U_i\in\mathcal G$, write $v_i=v(U_i)$. Define the semidiscrete system

$$\dot U_i+2\sum_{j=1}^d\sum_{\ell\in\mathcal I}(D_j)_{i\ell}F_j^{\mathrm{ec}}(U_i,U_\ell) =\sum_{j,k=1}^d\left[D_j\left(\bigl(K_{jk}(U_i)(D_kv)_i\bigr)_{i\in\mathcal I}\right)\right]_i, \qquad i\in\mathcal I,$$

where $F_j^{\mathrm{ec}}$ is the two-point flux in [[def-ideal-gas-entropy-conservative-pair-flux]] and $K_{jk}$ is the viscous block matrix in [[lem-compressible-viscous-flux-entropy-variable-factorization]]. This definition specifies a periodic semidiscrete operator on $\mathcal G^M$; it does not include a time discretization or a positivity limiter.
