---
id: def-uniform-grid-and-difference-operators
kind: definition
title: Uniform periodic, infinite, and Dirichlet grid conventions
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [def-natural-numbers, def-real-numbers, def-complex-numbers-and-arithmetic, def-complex-conjugate-real-imaginary-part-and-modulus]
justified_by: []
aliases: []
landmark: false
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Endre Süli, B6.1 Numerical Solution of Partial Differential Equations"
      url: "https://people.maths.ox.ac.uk/suli/nspdes.pdf"
      locator: "§6.3–§6.6, PDF pp. 85–104: uniform wave/advection grids, differences, and weighted mesh norms."
    - title: "Benjamin Seibold, MIT 18.336 Lecture 15, Finite Difference Methods for the One-Way Wave Equation"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/286be9198204bea2f7e7d77f88e7b061_MIT18_336S09_lec15.pdf"
      locator: "Complete 5-page PDF, pp. 1–4: uniform-grid differences and Fourier-mode symbols."
verification:
  precheck: n/a
---

## Definition

Use $\mathbb N$ for the natural-number index set (including zero) ([[def-natural-numbers]]), $\mathbb R$ for the real scalar field ([[def-real-numbers]]), and $\mathbb C$ with its real embedding and modulus ([[def-complex-numbers-and-arithmetic]], [[def-complex-conjugate-real-imaginary-part-and-modulus]]).

Let $N\ge2$, $h>0$, $k>0$, and $t_n=nk$. For the finite periodic grid put $J_N=\{0,\ldots,N-1\}$ and reduce every shifted index modulo $N$. A periodic grid function is a map $v:J_N\to\mathbb C$, with weighted norm
$$ \|v\|_{2,h}=\left(h\sum_{j=0}^{N-1}|v_j|^2\right)^{1/2}. $$
The infinite uniform grid has indices $j\in\mathbb Z$ and positions $x_j=jh$. On the periodic and infinite grids define
$$ (D_+v)_j=\frac{v_{j+1}-v_j}{h},\qquad (D_-v)_j=\frac{v_j-v_{j-1}}{h},\qquad (D_0v)_j=\frac{v_{j+1}-v_{j-1}}{2h},\qquad (\Delta_hv)_j=\frac{v_{j+1}-2v_j+v_{j-1}}{h^2}. $$
Use the inner product linear in its first entry,
$$ \langle p,q\rangle_{2,h}=h\sum_{j=0}^{N-1}p_j\overline{q_j},\qquad \langle D_+p,D_+q\rangle_{e,h}=h\sum_{j=0}^{N-1}(D_+p)_j\overline{(D_+q)_j}, $$
where the indices in $D_+$ are reduced periodically, and set $\|D_+p\|_{e,h}^2=\langle D_+p,D_+p\rangle_{e,h}$. The same definitions apply to real-valued grid functions.

For a finite interval of length $L=Nh$, use physical nodes $x_j=jh$ with indices $j=0,\ldots,N$. On its edges $j=0,\ldots,N-1$ define $(D_+v)_j=(v_{j+1}-v_j)/h$, and on interior nodes $j=1,\ldots,N-1$ use $(\Delta_hv)_j=(v_{j+1}-2v_j+v_{j-1})/h^2$. At the right endpoint define $(D_-v)_N=(v_N-v_{N-1})/h$. For edge arrays $p,q$ indexed by $j=0,\ldots,N-1$, the interior inner product, norm, and edge inner product are
$$ \langle p,q\rangle_h=h\sum_{j=1}^{N-1}p_j\overline{q_j},\qquad \|v\|_h^2=\langle v,v\rangle_h,\qquad \langle p,q\rangle_{e,h}=h\sum_{j=0}^{N-1}p_j\overline{q_j}. $$
Dirichlet grid functions have prescribed endpoint values; when they are zero, the interior norm and edge inner product above are the ones used for the wave energy.

All statements below distinguish these periodic, infinite, and finite-interval index sets. Periodic Fourier calculations are not boundary estimates for the finite-interval grid.

