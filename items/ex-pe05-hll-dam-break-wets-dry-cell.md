---
id: ex-pe05-hll-dam-break-wets-dry-cell
kind: example
title: A first HLL step wets a dry cell without negative depth
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  - def-pe05-shallow-water-balance-law
  - def-pe05-hydrostatic-hll-scheme
  - thm-pe05-hydrostatic-update-preserves-water-and-dry-admissibility
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "E. Audusse, F. Bouchut, M.-O. Bristeau, R. Klein, and B. Perthame, A Fast and Stable Well-Balanced Scheme with Hydrostatic Reconstruction for Shallow Water Flows"
      url: "https://publications.imp.fu-berlin.de/478/1/file_2004_siam.pdf"
      locator: "Complete 16-page paper; dry-state and nonnegative-depth construction, §2.1, printed pp. 2052–2057."
    - title: "D. I. Ketcheson, R. J. LeVeque, and M. J. del Razo, Riemann Problems and Jupyter Solutions, Chapter 12"
      url: "https://www.clawpack.org/riemann_book/html/Shallow_water_approximate.html"
      locator: "Complete chapter; standard dam-break HLL example and positivity discussion, lines 460–552."
---

## Example

On the full-line unit grid, set $g=1$, $b_i=0$, $U_i^0=(1,0)$ for $i\le0$, and $U_i^0=(0,0)$ for $i\ge1$. Use $\lambda=\Delta t/\Delta x=1/2$ for one hydrostatic HLL step.

## Facts & Assumptions

**Given:** The step data and time step above. Compute the wet/dry interface fluxes, verify the cellwise CFL and update the two cells adjacent to the initial front.

[F1] [[def-pe05-hydrostatic-hll-scheme]]: with flat bed the hydrostatic states equal the cell states; the HLL flux uses the specified wave-speed extrema and the finite-volume flux-difference update.

[F2] [[thm-pe05-hydrostatic-update-preserves-water-and-dry-admissibility]]: on a finite chain with admissible ghost states, including a single updated cell, the face-specific CFL $\lambda(a_R\text{ at right}-a_L\text{ at left})\le1$ preserves admissible depth and dry momentum.

## Verification

1.1 At every wet/wet face the states agree at $(1,0)$, the speeds are $(-1,1)$, and the HLL flux is $(0,1/2)$. At every dry/dry face the speeds and flux are zero. At the unique wet/dry face, $F_L=(0,1/2)$, $F_R=(0,0)$, $U_R-U_L=(-1,0)$ and $a_La_R=-1$, so the middle formula in [F1] gives $\widehat F=(1/2,1/4)$. [F1, given, algebra]

2.1 For a wet cell adjacent to the front the outgoing-speed sum is $1+1=2$, so $\lambda$ times that sum is $1$; for the first dry cell it is $1+0=1$, so the product is $1/2$; all other cells have either the wet/wet value $1$ or the dry/dry value $0$ on each side, and satisfy the same bound. For each $i$, apply [F2] to the single-cell chain consisting of cell $i$, with its actual initial neighbors $U_{i-1}^0,U_{i+1}^0\in K$ as ghost states and their bed values zero. Its two face fluxes and update coincide with those on the full-line grid by [F1]. Thus every updated cell is admissible. [F1, F2, step 1.1, algebra]

3.1 The wet cell $i=0$ has left flux $(0,1/2)$ and right flux $(1/2,1/4)$, hence $U_0^1=(1,0)-\tfrac12((1/2,1/4)-(0,1/2))=(3/4,1/8)$. The dry cell $i=1$ has left flux $(1/2,1/4)$ and right flux $(0,0)$, hence $U_1^1=(0,0)-\tfrac12((0,0)-(1/2,1/4))=(1/4,1/8)$. Both depths are positive, and their sum remains $1$, so the front wets the adjacent dry cell without losing water. [F1, F2, step 1.1, step 2.1, algebra] ∎
