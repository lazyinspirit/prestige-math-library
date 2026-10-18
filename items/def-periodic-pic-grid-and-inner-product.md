---
id: def-periodic-pic-grid-and-inner-product
kind: definition
title: Periodic uniform PIC grid and inner product
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
axiom_use: No choice principle is used.
sources:
  references:
    - title: R. W. Hockney and J. W. Eastwood, Computer Simulation Using Particles,
        Chapters 2, 4, and 5
      url: https://djvu.online/file/cjOfwRgltjv1g
    - title: A. Myers, P. Colella, and B. Van Straalen, A 4th-Order Particle-in-Cell
        Method with Phase-Space Remapping for the Vlasov–Poisson Equation, SIAM
        Journal on Scientific Computing 39(3) (2017)
      url: https://escholarship.org/content/qt2tt7x68b/qt2tt7x68b.pdf
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Fix a spatial dimension $d\in\{1,2,3\}$, side length $L>0$, and odd integer $N\ge3$. Put $h=L/N$ and $\mathbb T_L^d=(\mathbb R/L\mathbb Z)^d$. The periodic grid has index set $J_N=(\mathbb Z/N\mathbb Z)^d$ and nodes $x_j=hj$ modulo $L$. A grid scalar is a real array $u=(u_j)_{j\in J_N}$; a grid vector has $d$ real components at each node. Define
$$ \langle u,v\rangle_h=h^d\sum_{j\in J_N}u_jv_j,\qquad \|u\|_h=\langle u,u\rangle_h^{1/2},\qquad \bar u=L^{-d}h^d\sum_{j\in J_N}u_j . $$ The same pairing is componentwise for grid vectors. For the coordinate vector $e_a$, define the centered field difference and positive periodic Poisson stencil by $$ (D_a^0u)_j=\frac{u_{j+e_a}-u_{j-e_a}}{2h},\qquad (A_hu)_j=\sum_{a=1}^d\frac{2u_j-u_{j+e_a}-u_{j-e_a}}{h^2}. $$
All indices wrap modulo $N$. The discrete Fourier index set is $\mathcal K_N=\{-\frac{N-1}{2},\ldots,\frac{N-1}{2}\}^d$; the character at $k\in\mathcal K_N$ is $j\mapsto e^{2\pi i k\cdot j/N}$. This odd-grid convention has no Nyquist mode.

