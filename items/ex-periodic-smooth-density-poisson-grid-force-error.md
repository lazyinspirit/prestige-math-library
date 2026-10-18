---
id: ex-periodic-smooth-density-poisson-grid-force-error
kind: example
title: A manufactured smooth periodic density for the PIC grid-force estimate
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  - def-periodic-pic-grid-and-inner-product
  - thm-periodic-pic-continuum-regularized-poisson-kernel-is-smooth
  - thm-periodic-pic-smooth-density-grid-force-consistency
proof_strategy: direct
axiom_use: No choice principle is used; the Fourier solution has a single nonzero frequency pair.
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
    - title: A. Myers, P. Colella, and B. Van Straalen, A 4th-Order Particle-in-Cell Method with Phase-Space Remapping for the Vlasov–Poisson Equation, Sections 2.1–2.2
      url: https://escholarship.org/content/qt2tt7x68b/qt2tt7x68b.pdf
    - title: Benjamin Seibold, MIT 18.336 Lecture 5, Finite Difference Approximation
      url: https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/32dc4472b2967f90761db3677eade13e_MIT18_336S09_lec5.pdf
---

## Statement

Let $d=1$, $L=2\pi$, $a=1/2$, and let the probability measure $\mu$ have density
$$ d\mu(y)=\frac{1+a\cos y}{2\pi}\,dy. $$ For $\alpha_\varepsilon=e^{-\varepsilon/(2\pi)}$, the regularized neutralized source and zero-mean field are $$ \rho_\varepsilon(x)=\frac{a\alpha_\varepsilon}{2\pi}\cos x, \qquad E_\varepsilon(x)=-\phi_\varepsilon'(x)=\frac{a\alpha_\varepsilon}{2\pi}\sin x. $$ The gathered continuum target is $(\eta_\varepsilon*E_\varepsilon)(x)=\frac{a\alpha_\varepsilon^2}{2\pi}\sin x$. On any odd grid with spacing $h=2\pi/N$, the fixed-$\varepsilon$ theorem gives $$ \|G_hE_h-\eta_\varepsilon*E_\varepsilon\|_\infty \le (2\pi)^{1/2}h^{3/2}(\gamma_{N,2\pi}C_{\rm src}+C_3)+C_{\rm int}h^2, $$
where the constants are explicitly defined in [[thm-periodic-pic-smooth-density-grid-force-consistency]]. This tends to zero along odd $N\to\infty$ at fixed $\varepsilon$.

## Facts & Assumptions

**Given:** A positive smooth probability density on $\mathbb T_{2\pi}$, fixed regularization $\varepsilon>0$, and the periodic PIC shape and Poisson solve.

[F1] [[thm-periodic-pic-continuum-regularized-poisson-kernel-is-smooth]]: in one dimension the regularization kernel has Fourier series $(2\pi)^{-1}\sum_{k\in\mathbb Z}\alpha_\varepsilon^{|k|}e^{ikx}$.

[F2] [[thm-periodic-pic-smooth-density-grid-force-consistency]]: the fixed-$\varepsilon$ grid-force error satisfies the stated bound and $\gamma_{N,L}\le L/4$.

## Proof

1.1 Since $0<a<1$, the density $(1+a\cos y)/(2\pi)$ is nonnegative and integrates to one. Convolving its constant and first Fourier modes with [F1] leaves the constant coefficient $1/(2\pi)$ and multiplies the cosine coefficient by $\alpha_\varepsilon$. Subtracting the neutralizing background gives the displayed source. Since $-\frac{d^2}{dx^2}\cos x=\cos x$, the unique zero-mean potential is $\phi_\varepsilon=(a\alpha_\varepsilon/(2\pi))\cos x$, and differentiation yields the displayed $E_\varepsilon$. A second convolution multiplies its sine mode by $\alpha_\varepsilon$, giving $\eta_\varepsilon*E_\varepsilon=a\alpha_\varepsilon^2(2\pi)^{-1}\sin x$. [F1, given, algebra]

2.1 Apply [F2] to this smooth source on an odd $N$ grid. Since $d=1$, the power $h^{2-d/2}$ equals $h^{3/2}$, and $L^{d/2}=(2\pi)^{1/2}$, giving the displayed estimate. The upper bound $\gamma_{N,2\pi}\le\pi/2$ is uniform in $N$, and all fixed-$\varepsilon$ derivative constants are finite by [F1]; both powers $h^{3/2}$ and $h^2$ tend to zero. No limit as $\varepsilon\to0$ is taken. [F1, F2, step 1.1, algebra] ∎
