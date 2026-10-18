---
id: thm-periodic-pic-continuum-regularized-poisson-kernel-is-smooth
kind: theorem
title: Periodic PIC regularization gives a smooth compatible Poisson solution
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-periodic-pic-shape-assignment-and-gather]
proof_strategy: direct
axiom_use: No choice principle is used; all Fourier series converge by geometric bounds.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: R. W. Hockney and J. W. Eastwood, Computer Simulation Using Particles, Chapters 2 and 5
      url: https://djvu.online/file/cjOfwRgltjv1g
    - title: A. Myers, P. Colella, and B. Van Straalen, A 4th-Order Particle-in-Cell Method with Phase-Space Remapping for the Vlasov–Poisson Equation, Section 2
      url: https://escholarship.org/content/qt2tt7x68b/qt2tt7x68b.pdf
---

## Statement

Let $\eta_\varepsilon$ be the explicit product kernel in [[def-periodic-pic-shape-assignment-and-gather]], with $\alpha_\varepsilon=e^{-\varepsilon/L}\in(0,1)$. Let $\mu$ be a finite signed Borel measure on $\mathbb T_L^d$ with mass $Q$ and total variation $\|\mu\|_{\rm TV}$. Put
$$ \widehat\mu(k)=\int_{\mathbb T_L^d}e^{-2\pi i k\cdot y/L}\,d\mu(y),\qquad \kappa_k=2\pi k/L . $$ Then $\eta_\varepsilon$ is strictly positive, even, smooth, and has integral one. The regularized neutralized source $$ \rho_\varepsilon^\mu(x)=\int_{\mathbb T_L^d}\eta_\varepsilon(x-y)\,d\mu(y)-Q/L^d $$ is $C^\infty$ with zero mean. Its unique zero-mean periodic solution of $-\Delta\phi_\varepsilon^\mu=\rho_\varepsilon^\mu$ is the absolutely and uniformly differentiable Fourier series $$ \phi_\varepsilon^\mu(x)=L^{-d}\sum_{k\in\mathbb Z^d\setminus\{0\}} \frac{\left(\prod_{a=1}^d\alpha_\varepsilon^{|k_a|}\right)\widehat\mu(k)} {|\kappa_k|^2}e^{i\kappa_k\cdot x}. $$
For every integer $r\ge0$, all spatial derivative series of order at most $r$ converge absolutely and uniformly; their bounds may depend on $r,\varepsilon,L,\|\mu\|_{\rm TV}$.

## Facts & Assumptions

**Given:** $d\in\{1,2,3\}$, $L,\varepsilon>0$, the product periodic kernel from the shape definition, and a finite real signed measure $\mu$ on the torus.

[F1] [[def-periodic-pic-shape-assignment-and-gather]]: $\eta_\varepsilon(x)=L^{-d}\prod_a(1-\alpha_\varepsilon^2)/(1-2\alpha_\varepsilon\cos(2\pi x_a/L)+\alpha_\varepsilon^2)$ with $\alpha_\varepsilon=e^{-\varepsilon/L}$.

## Proof

1.1 For $0<\alpha<1$, the two geometric series $\sum_{n\ge0}\alpha^ne^{in\theta}$ and $\sum_{n\ge1}\alpha^ne^{-in\theta}$ converge absolutely and uniformly. Adding them and simplifying the denominator gives $\sum_{n\in\mathbb Z}\alpha^{|n|}e^{in\theta} =1+\frac{\alpha e^{i\theta}}{1-\alpha e^{i\theta}} +\frac{\alpha e^{-i\theta}}{1-\alpha e^{-i\theta}} =\frac{1-\alpha^2}{1-2\alpha\cos\theta+\alpha^2}.$ The denominator is $(1-\alpha)^2+2\alpha(1-\cos\theta)>0$. The constant Fourier coefficient is $1$, so integrating the absolutely convergent series over one period gives mean one. Applying this in every coordinate proves the positivity, evenness, smoothness, and unit integral of $\eta_\varepsilon$. [F1, algebra]

2.1 Multiplying the coordinate Fourier series from step 1.1 gives $\eta_\varepsilon(x)=L^{-d}\sum_{k\in\mathbb Z^d} \left(\prod_a\alpha_\varepsilon^{|k_a|}\right)e^{i\kappa_k\cdot x}.$ The product coefficients are absolutely summable, so uniform convergence permits termwise integration against the finite measure $\mu$. The $k=0$ term is $Q/L^d$ and is removed by neutralization. For each $k\ne0$, $|\widehat\mu(k)|\le\|\mu\|_{\rm TV}$. For every integer $m\ge0$, $\sum_{n\in\mathbb Z}(1+|n|)^m\alpha_\varepsilon^{|n|}<\infty$ by the ratio test; taking products bounds the corresponding $d$-dimensional weighted sums. Hence the source and every formally differentiated Fourier series converge absolutely and uniformly, proving that $\rho_\varepsilon^\mu\in C^\infty$ and has zero mean. [F1, step 1.1, algebra]

3.1 For $k\ne0$, $-\Delta e^{i\kappa_k\cdot x}=|\kappa_k|^2e^{i\kappa_k\cdot x}$. Dividing the nonzero source coefficients in step 2.1 by this positive eigenvalue gives the displayed $\phi_\varepsilon^\mu$; the weighted geometric summability in step 2.1 justifies termwise differentiation and the equation. Its zero Fourier coefficient is set to zero, so it has mean zero. If two mean-zero $C^2$ potentials solve the equation, their difference $u$ satisfies $\Delta u=0$. Periodic integration by parts gives $\int_{\mathbb T_L^d}|\nabla u|^2=-\int u\Delta u=0$, so $\nabla u=0$, $u$ is constant, and its zero mean forces $u=0$. This proves uniqueness. [step 2.1, algebra] ∎
