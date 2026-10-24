---
id: thm-periodic-pic-smooth-density-grid-force-consistency
kind: theorem
title: Fixed-regularization periodic PIC force consistency on a smooth density
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-periodic-pic-grid-and-inner-product
  - def-periodic-pic-shape-assignment-and-gather
  - lem-periodic-pic-shape-partition-and-quadrature-bound
  - thm-periodic-pic-continuum-regularized-poisson-kernel-is-smooth
  - thm-periodic-centered-difference-poisson-zero-mode-and-gauge
  - thm-periodic-pic-poisson-residual-to-gathered-force-bound
proof_strategy: direct
axiom_use: No choice principle is used; estimates use finite sums and Taylor's theorem.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Benjamin Seibold, MIT 18.336 Lecture 5, Finite Difference Approximation
      url: https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/32dc4472b2967f90761db3677eade13e_MIT18_336S09_lec5.pdf
    - title: A. Myers, P. Colella, and B. Van Straalen, A 4th-Order Particle-in-Cell Method with Phase-Space Remapping for the Vlasov–Poisson Equation, Sections 2.1–2.2
      url: https://escholarship.org/content/qt2tt7x68b/qt2tt7x68b.pdf
    - title: R. W. Hockney and J. W. Eastwood, Computer Simulation Using Particles, Section 5-4
      url: https://djvu.online/file/cjOfwRgltjv1g
---

## Statement

Fix $\varepsilon>0$ and a finite signed Borel measure $\mu$ on $\mathbb T_L^d$ with total mass $Q$. Let $\rho_\varepsilon=\eta_\varepsilon*\mu-Q/L^d$ and let $\phi_\varepsilon$ be its unique zero-mean periodic Poisson potential from [[thm-periodic-pic-continuum-regularized-poisson-kernel-is-smooth]]. Put $E_\varepsilon=-\nabla\phi_\varepsilon$. Use the shape and periodic centered-difference Poisson operator of [[def-periodic-pic-shape-assignment-and-gather]] and [[def-periodic-pic-grid-and-inner-product]]. Let $s_h=P_h^\varepsilon\mu-Q/L^d$, let $A_h\phi_h=s_h$ with $\bar\phi_h=0$, set $E_{h,j}=-D^0\phi_h$, and gather $G_hE_h$ using the same shape. Define
$$ C_{\rm dep}=\frac{C_\eta\|\eta_\varepsilon\|_\infty}{Z_{\min}}\|\mu\|_{\rm TV},\quad C_{\rm FD}=\frac1{12}\sum_{a=1}^d\|\partial_a^4\phi_\varepsilon\|_\infty,\quad C_{\rm src}=C_{\rm dep}+C_{\rm FD}, $$ where $C_\eta,Z_{\min}$ are from [[lem-periodic-pic-shape-partition-and-quadrature-bound]]. Put $$ C_3=\frac16\left(\sum_{a=1}^d\|\partial_a^3\phi_\varepsilon\|_\infty^2\right)^{1/2},\qquad C_{\rm int}=\frac{C_{\eta,E}+\|E_\varepsilon\|_\infty C_\eta}{Z_{\min}}, \quad C_{\eta,E}=\frac{L^d}{12}\sum_{a=1}^d \sup_{x,y\in\mathbb T_L^d}\left|\partial_{y_a y_a}[\eta_\varepsilon(y-x)E_\varepsilon(y)]\right|_2 . $$ For vector fields, $\|V\|_\infty=\sup_x|V(x)|_2$ (the maximum of Euclidean lengths for grid fields); the derivatives in $C_{\eta,E}$ use this same Euclidean norm. Then the source $s_h$ is compatible and $$ \|G_hE_h-\eta_\varepsilon*E_\varepsilon\|_\infty \le L^{d/2}h^{2-d/2}\left(\gamma_{N,L}C_{\rm src}+C_3\right) +C_{\rm int}h^2. $$
The displayed $\gamma_{N,L}$ is the actual finite-grid inverse/derivative norm of [[thm-periodic-pic-poisson-residual-to-gathered-force-bound]] and satisfies $\gamma_{N,L}\le L/4$. Thus for $d\in\{1,2,3\}$ this fixed-$\varepsilon$ force error tends to zero as $h\to0$. Every constant depends on the stated smooth regularized solution and kernel; this is not an $\varepsilon\to0$ estimate.

## Facts & Assumptions

**Given:** A zero-mean periodic density, its stated smooth potential and field, a fixed $\varepsilon>0$, and odd periodic grids with the specified shape and Poisson operators.

[F1] [[lem-periodic-pic-shape-partition-and-quadrature-bound]]: the smooth weights are nonnegative and normalized; assigned samples differ from $(\eta_\varepsilon*\mu)(x_j)$ by at most $C_\eta\|\eta_\varepsilon\|_\infty\|\mu\|_{\rm TV}h^2/Z_{\min}$, and gathered samples of a $C^2$ real vector field differ from its $\eta_\varepsilon$ convolution by the stated Euclidean trapezoidal bound with translation-uniform shifted-product derivatives.

[F2] [[thm-periodic-centered-difference-poisson-zero-mode-and-gauge]]: $A_h$ has range exactly the zero-mean arrays and a unique mean-zero solution for every such source.

[F3] [[thm-periodic-pic-poisson-residual-to-gathered-force-bound]]: if $A_h\phi=s$ is the zero-mean solution and $r=s-A_h\widetilde\phi$, then $\bar r=0$ and $\|D^0(\phi-\widetilde\phi)\|_h\le\gamma_{N,L}\|r\|_h$, with $\gamma_{N,L}\le L/4$.

[F4] [[thm-periodic-pic-continuum-regularized-poisson-kernel-is-smooth]]: $\eta_\varepsilon*\mu-Q/L^d$ has a unique zero-mean $C^\infty$ periodic potential obtained by dividing each nonzero Fourier coefficient by its positive Laplacian eigenvalue.

## Proof

1.1 The assigned source has mean zero: by the partition identity in [F1], $h^d\sum_j(P_h^\varepsilon\mu)_j=\int\sum_jw_j(x)\,d\mu(x)=Q$, so subtracting the background gives zero mean. By [F4], the continuum potential and field are smooth; [F2] gives the unique grid potential. The assignment and centered-stencil Taylor bounds give the residual $r_h=s_h-A_h(\phi_\varepsilon|_h),\qquad \|r_h\|_\infty\le C_{\rm src}h^2 .$ Here [F1] bounds the measure-assignment error by $C_{\rm dep}h^2$, and for each coordinate the centered second difference has remainder at most $h^2\|\partial_a^4\phi_\varepsilon\|_\infty/12$, whose sum is $C_{\rm FD}h^2$. [F1, F2, F4, given, algebra]

2.1 The weighted grid norm satisfies $\|r_h\|_h\le L^{d/2}\|r_h\|_\infty$ because the grid has $N^d$ points and $h^dN^d=L^d$. In [F3], take $s=s_h$, $\phi=\phi_h$, and $\widetilde\phi=\phi_\varepsilon|_h$; its residual is exactly $r_h$ from step 1.1, so $\|D^0(\phi_h-\phi_\varepsilon|_h)\|_h \le \gamma_{N,L}L^{d/2}C_{\rm src}h^2$. Taylor's theorem for the centered first difference gives $\|D^0(\phi_\varepsilon|_h)-(\nabla\phi_\varepsilon)|_h\|_\infty\le C_3h^2$, hence its grid $L^2$ norm is at most $L^{d/2}C_3h^2$. [F1, F3, step 1.1, algebra]

3.1 For any nonnegative normalized weights, $\sum_jw_j(x)^2\le1$, so Cauchy–Schwarz gives $|G_xV|\le h^{-d/2}\|V\|_h$. Apply this to the two grid-field errors in step 2.1. Their gathered contribution is at most $L^{d/2}h^{2-d/2}(\gamma_{N,L}C_{\rm src}+C_3)$. [F1, step 2.1, algebra]

4.1 The remaining difference is gathering the exact nodal samples $E_\varepsilon(x_j)$ instead of the continuous field. Apply the Euclidean-vector bound of [F1] with $m=d$ and $g=E_\varepsilon$. Its translation-uniform constant is exactly $C_{\eta,E}$ in the Statement, so this difference is at most $C_{\rm int}h^2$. The unit-vector projection proof in that supplier introduces no $\sqrt d$ factor. Add this to step 3.1 to get the displayed estimate. Since $\gamma_{N,L}\le L/4$ and $2-d/2>0$ for $d\le3$, both terms tend to zero. [F1, step 3.1, algebra] ∎
