---
id: def-cyclotomic-hecke-central-content-sector-notation
kind: definition
title: "Central content sectors of the cyclotomic Hecke algebra"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 4
deps: [def-type-a-affine-presentations-and-charged-cyclotomic-quotients,
       lem-cyclotomic-hecke-polynomial-spectra-and-central-content-sectors]
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Brundan and Kleshchev, Blocks of cyclotomic Hecke algebras and Khovanov-Lauda algebras, arXiv:0808.2032v4"
      url: "https://arxiv.org/pdf/0808.2032"
      locator: "Actual retrieved v4, pp. 1–27 and 31–32 read; local source-interface calculations are reproduced in the strategy. No reading of pp. 28–30 is claimed."
---

## Definition

Work in the charged finite-$e$ specialization of
[[def-type-a-affine-presentations-and-charged-cyclotomic-quotients]] at a
dominant weight $\Lambda$ and rank $d$, and let $H=H^\Lambda_d$. For the
canonical CRT projectors supplied by
[[lem-cyclotomic-hecke-polynomial-spectra-and-central-content-sectors]],
denote by $e(\nu)$ the joint residue projector attached to the residue tuple
$\nu$ and by
$$e_\alpha:=\sum_{\nu\ \text{of content}\ \alpha}e(\nu)$$
their sum at content $\alpha$ ([[def-type-a-affine-presentations-and-charged-cyclotomic-quotients]]).

**Content sector.** Put
$$H^\Lambda_\alpha:=e_\alpha H^\Lambda_d=e_\alpha H^\Lambda_d\,e_\alpha,$$
an ideal and unital algebra with unit $e_\alpha$, called the **central content
sector** of content $\alpha$; it may be the zero algebra, and at this stage it
is NOT asserted to be a primitive block. The two descriptions coincide because
$e_\alpha$ is a central idempotent.

**Named nilpotent generators.** On $H^\Lambda_\alpha$ put
$$y_r:=\sum_{\nu\ \text{of content}\ \alpha}(x_r-\nu_r)\,e(\nu)\quad\text{(degenerate branch)},\qquad y_r:=\sum_{\nu\ \text{of content}\ \alpha}\bigl(1-q_H^{-\nu_r}X_r\bigr)e(\nu)\quad\text{(nondegenerate branch)}.$$
By the spectral supplier these named elements are commuting nilpotents on the
sector, and they provide the local variables in which the sector is compared
with the corresponding KLR block.

**Boundary conventions.** For $\alpha=0$ one has $e_{\mathrm{empty}}=1$ and
$H^\Lambda_0=F$ at rank zero. Later primitivity statements may identify the
nonzero sectors with the blocks of $H$, but that identification does not
change the objects named here. This definition introduces no new primitivity
or basis assertion of its own and uses no choice principle.
