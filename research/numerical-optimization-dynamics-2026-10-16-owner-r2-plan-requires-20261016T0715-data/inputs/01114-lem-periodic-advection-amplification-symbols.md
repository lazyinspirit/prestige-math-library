---
id: lem-periodic-advection-amplification-symbols
kind: lemma
title: Amplification symbols for periodic scalar advection stencils
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps: [def-periodic-one-way-advection-schemes, def-uniform-grid-and-difference-operators, lem-periodic-heat-difference-amplification-symbol, lem-orthogonality-of-characters-on-a-finite-cyclic-group, def-complex-conjugate-real-imaginary-part-and-modulus, lem-complex-conjugation-and-modulus-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Endre Süli, B6.1 Numerical Solution of Partial Differential Equations"
      url: "https://people.maths.ox.ac.uk/suli/nspdes.pdf"
      locator: "§6.6, PDF pp. 99–104: upwind amplification and CFL calculations."
    - title: "Benjamin Seibold, MIT 18.336 Lecture 15, Finite Difference Methods for the One-Way Wave Equation"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/286be9198204bea2f7e7d77f88e7b061_MIT18_336S09_lec15.pdf"
      locator: "Complete PDF pp. 2–4: amplification factors for the five named stencils; the equation sign convention is reflected."
---

## Statement

On an $N$-point periodic grid let $z_\ell=\exp(2\pi i\ell/N)$, $C_\ell=\operatorname{Re}z_\ell$, $S_\ell=\operatorname{Im}z_\ell$, and $\nu=ak/h$ with $a>0$. The Fourier vector $j\mapsto z_\ell^j$ is multiplied in one step by
$$ g_{\rm up}=1-\nu+\nu z_\ell^{-1},\quad g_{\rm down}=1+\nu-\nu z_\ell,\quad g_{\rm centered}=1-i\nu S_\ell,\quad g_{\rm LF}=C_\ell-i\nu S_\ell,\quad g_{\rm LW}=1-\nu^2(1-C_\ell)-i\nu S_\ell. $$
Their squared moduli, in the same order, are
$$ 1-2\nu(1-\nu)(1-C_\ell),\quad 1+2\nu(1+\nu)(1-C_\ell),\quad 1+\nu^2S_\ell^2,\quad 1-(1-\nu^2)S_\ell^2,\quad 1-\nu^2(1-\nu^2)(1-C_\ell)^2. $$
The $N$ Fourier vectors form an orthogonal basis under the periodic inner product of [[def-uniform-grid-and-difference-operators]], and each has squared norm $Nh$.

## Facts & Assumptions

**Given:** $N\ge2$, $a,h,k>0$, and the periodic stencils of [[def-periodic-one-way-advection-schemes]].

[F1] The five one-step formulas and periodic wrap are defined in [[def-periodic-one-way-advection-schemes]].

[F2] The finite root-of-unity sum $\sum_{j=0}^{N-1}\exp(2\pi i(\ell-r)j/N)$ equals $N$ if $\ell\equiv r\pmod N$ and $0$ otherwise ([[lem-orthogonality-of-characters-on-a-finite-cyclic-group]]).

[F3] The displayed periodic Fourier modes form a basis of the complexified grid space ([[lem-periodic-heat-difference-amplification-symbol]]).

[F4] For complex numbers, $\bar z=\operatorname{Re}z-i\operatorname{Im}z$ and $z\bar z=|z|^2$; conjugation is multiplicative and modulus obeys the field laws ([[def-complex-conjugate-real-imaginary-part-and-modulus]], [[lem-complex-conjugation-and-modulus-laws]]).

[F5] The periodic grid inner product and norm are $\langle p,q\rangle_{2,h}=h\sum_jp_j\overline{q_j}$ and $\|p\|_{2,h}^2=h\sum_j|p_j|^2$ ([[def-uniform-grid-and-difference-operators]]).

## Proof

1.1 Write $\phi_j=z_\ell^j$. Then $\phi_{j+1}=z_\ell\phi_j$, $\phi_{j-1}=z_\ell^{-1}\phi_j$, and $z_\ell^{-1}=\bar z_\ell$. Substitution into each update in [F1] gives, respectively, $$ 1-\nu+\nu z_\ell^{-1},\quad 1+\nu-\nu z_\ell,\quad 1-\frac{\nu}{2}(z_\ell-z_\ell^{-1}),\quad \frac{z_\ell+z_\ell^{-1}}2-\frac{\nu}{2}(z_\ell-z_\ell^{-1}),\quad 1-\frac{\nu}{2}(z_\ell-z_\ell^{-1})+\frac{\nu^2}{2}(z_\ell+z_\ell^{-1}-2). $$ Since $z_\ell^{-1}=C_\ell-iS_\ell$, these are the displayed factors. [F1, F4, algebra]

2.1 The identity $|z_\ell|=1$ gives $C_\ell^2+S_\ell^2=1$. Multiplying each factor in step 1.1 by its conjugate and simplifying with this identity gives the five displayed squared-modulus formulas. [F4, step 1.1, algebra]

3.1 By [F2] the distinct Fourier modes are mutually orthogonal; by [F3] they form a basis. By [F5], each has squared norm $Nh$, so the normalized modes are an orthonormal basis. Every update is diagonal in this basis with the factors from step 1.1, which therefore describe the full periodic updates. [F2, F3, F5, step 1.1] ∎
