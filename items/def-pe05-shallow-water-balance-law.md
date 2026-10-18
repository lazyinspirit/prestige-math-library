---
id: def-pe05-shallow-water-balance-law
kind: definition
title: One-dimensional shallow-water balance law with a dry-state convention
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: []
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
    - title: "E. Audusse, F. Bouchut, M.-O. Bristeau, R. Klein, and B. Perthame, A Fast and Stable Well-Balanced Scheme with Hydrostatic Reconstruction for Shallow Water Flows"
      url: "https://publications.imp.fu-berlin.de/478/1/file_2004_siam.pdf"
      locator: "Complete 16-page paper; §1, equations (1.1)–(1.4), printed pp. 2050–2051."
    - title: "D. I. Ketcheson, R. J. LeVeque, and M. J. del Razo, Riemann Problems and Jupyter Solutions, Chapter 12"
      url: "https://www.clawpack.org/riemann_book/html/Shallow_water_approximate.html"
      locator: "Complete chapter; opening shallow-water system and conserved-variable convention, lines 0–14."
---

## Definition

Fix gravity $g>0$ and a stationary bed $b:\mathbb R\to\mathbb R$. A shallow-water state is a pair $U=(h,m)$ with depth $h\ge0$ and momentum $m\in\mathbb R$. Its admissible wet/dry state set is
$$K=\{(h,m):h>0,\ m\in\mathbb R\}\cup\{(0,0)\}.$$
For $U\in K$, define velocity by $u=m/h$ when $h>0$ and $u=0$ when $h=0$. Thus a dry state has both $h=0$ and $m=0$. Define the free surface by $\eta=h+b$ and the physical flux by
$$F(U)=\begin{cases}(m,\ m^2/h+gh^2/2),&h>0,\\(0,0),&U=(0,0).\end{cases}$$
For a continuously differentiable bed, the one-dimensional shallow-water balance law is
$$U_t+\partial_xF(U)=(0,-gh\,b_x).$$
The source is evaluated as zero at a dry state.

A discrete lake-at-rest profile with level $\eta_0$ has $m_i=0$ and $h_i+b_i=\eta_0$ in every wet cell; cells with $h_i=0$ are dry and satisfy $b_i\ge\eta_0$.

## Remarks

The conserved variables are depth and momentum, not depth and velocity. The convention at $h=0$ makes both $m/h$ and the physical flux well-defined. No entropy inequality, convergence result, or path product for discontinuous bed steps is included in this definition.
