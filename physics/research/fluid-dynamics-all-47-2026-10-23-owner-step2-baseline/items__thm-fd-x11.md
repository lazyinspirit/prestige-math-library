---
id: thm-fd-x11
kind: theorem
title: Linear vortex-sheet growing modes
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-fd-x00
dependency_roles:
  def-fd-x00: mathematical-premise
scope: "Equal-density harmonic linear interface model with no gravity or surface tension; for k>0, a nonzero horizontal velocity jump gives a real exponentially growing mode. The periodic-interface Sobolev calculation is linear only; no nonlinear transition claim."
verification:
  precheck: pass
sources:
  references:
    - title: "David Tong, Fluid Mechanics lecture notes, Chapter 4: Instabilities"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids4.pdf"
      locator: "§5.1 and §5.1.1, printed pp. 182-185/PDF pp. 1-5; the zero-gravity/zero-surface-tension potential-flow dispersion relation."
    - title: "Markus Zahn, MIT OpenCourseWare 6.642 Continuum Electromechanics, Kelvin-Helmholtz Instability"
      url: "https://ocw.mit.edu/courses/6-642-continuum-electromechanics-fall-2008/acf162c3f92b66baf592c488ee2624ca_kelvin_helmholtz.pdf"
      locator: "Complete 4-page lecture note, equilibrium, kinematic boundary condition, pressure balance, finite-depth dispersion relation and deep-layer special case."
---

## Statement

For $t\in\mathbb R$, assume fields are independent of any third spatial coordinate, so the cross-section has coordinates $(x,y)$. Use ordinary pointwise Euclidean partial derivatives and set $\Delta=\partial_{xx}+\partial_{yy}$. Let $U_+,U_-\in\mathbb R$ be constant horizontal base velocities, and let the two half-planes $y>0$ and $y<0$ have the same constant density $\rho_0>0$. The unknown interface displacement $\eta(x,t)$ and scalar potentials $\phi_+(x,y,t)$ for $y>0$ and $\phi_-(x,y,t)$ for $y<0$ are smooth, have one-sided traces at $y=0$, satisfy $\Delta\phi_\pm=0$, and decay together with their first derivatives as $y\to+\infty$ and $y\to-\infty$ respectively. The stipulated linear interface equations at $y=0$ are $(\partial_t+U_\pm\partial_x)\eta=\partial_y\phi_\pm$ and continuity of the defined pressure perturbations $p'_\pm=-\rho_0(\partial_t+U_\pm\partial_x)\phi_\pm$. Gravity and surface tension are absent. Complexify this real linear system for the following normal-mode calculation.

For every $k>0$, every nonzero complex amplitude $H$, and every mode of the form $\eta=H e^{ikx+\lambda t}$, $\phi_+=A_+e^{-ky}e^{ikx+\lambda t}$, $\phi_-=A_-e^{ky}e^{ikx+\lambda t}$, set $\overline U=(U_++U_-)/2$ and $\Delta U=U_+-U_-$. The mode equations require

$$\lambda=-ik\overline U\pm \frac{k|\Delta U|}{2}.$$

If $\Delta U\ne0$, one root has positive real part $k|\Delta U|/2$, and its real or imaginary part gives a real exponentially growing solution of the stated linear system.

For the periodic interface $x\in\mathbb T_{2\pi}$, define $\widehat\eta_j=(2\pi)^{-1}\int_0^{2\pi}\eta(x)e^{-ijx}\,dx$ and, for $m\ge0$, $\|\eta\|_{H^m}^2=\sum_{j\in\mathbb Z}(1+j^2)^m|\widehat\eta_j|^2$. Let $H^m(\mathbb T_{2\pi})$ be the completion of trigonometric polynomials in this norm. If $\Delta U\ne0$, then for every fixed $t>0$ this exact mode family has bounded initial $H^m$ norm but unbounded evolved $H^m$ norm as its integer wavenumber $k\to\infty$. Thus no uniform estimate of the form $\|\eta(t)\|_{H^m}\le C_t\|\eta(0)\|_{H^m}$ holds for this family. This is a linear interface-model conclusion, not a theorem of nonlinear turbulent transition, viscous shear-layer behavior, or physical instability in a particular experiment.

## Statement references

[Tong, Chapter 4, §5.1.1, zero-gravity/zero-surface-tension vortex-sheet dispersion](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids4.pdf)

[MIT OpenCourseWare 6.642, Kelvin-Helmholtz Instability, pp. 1-4](https://ocw.mit.edu/courses/6-642-continuum-electromechanics-fall-2008/acf162c3f92b66baf592c488ee2624ca_kelvin_helmholtz.pdf)

## Facts & Assumptions

**Given:** The equal-density, no-gravity/no-surface-tension linear interface equations and Fourier-mode form in [A1]. The formal derivative and incompressibility conventions are the planned interface [F1].

[A1] $\rho_0>0$, $U_+,U_-\in\mathbb R$, $k>0$, $H\ne0$, and the mode forms $\eta=He^{ikx+\lambda t}$, $\phi_+=A_+e^{-ky}e^{ikx+\lambda t}$, $\phi_-=A_-e^{ky}e^{ikx+\lambda t}$ with complex $A_+,A_-,\lambda$. On $y>0$ and $y<0$, $\Delta\phi_\pm=0$ and the potentials and their first derivatives decay at the corresponding infinity. At $y=0$, $(\partial_t+U_\pm\partial_x)\eta=\partial_y\phi_\pm$ and $p'_\pm=-\rho_0(\partial_t+U_\pm\partial_x)\phi_\pm$ with $p'_+=p'_-$; gravity and surface tension are absent.

[F1] [[def-fd-x00]] on $fd-x01$ defines Euclidean partial derivatives pointwise, defines the scalar Laplacian by $\Delta f=\operatorname{div}\nabla f=\sum_j\partial_j^2f$, and applies vector Laplacians componentwise. Extending these potentials independently of a third coordinate makes this two-coordinate Laplacian the restriction of that defined three-coordinate Laplacian.

## Proof

1.1 Using the planned supplier's pointwise Euclidean derivative convention [F1], substitute the upper and lower mode forms into the Laplace equations. Since $\partial_{xx}$ multiplies each mode by $-k^2$ and $\partial_{yy}$ multiplies the exponential profile by $k^2$, both potentials are harmonic; the chosen signs make them decay in their respective half-planes. [given, A1, F1, algebra]

2.1 Let $D_\pm=\lambda+ikU_\pm$. The kinematic conditions at $y=0$ give $D_+H=-kA_+$ and $D_-H=kA_-$. Since $k>0$, $A_+=-D_+H/k$ and $A_-=D_-H/k$. [given, A1, step 1.1, algebra]

3.1 Pressure continuity gives $-\rho_0D_+A_+=-\rho_0D_-A_-$. Substitute step 2.1 and use $\rho_0>0$, $k>0$, and $H\ne0$ to obtain $D_+^2+D_-^2=0$. [given, A1, step 2.1, algebra]

4.1 Put $\Lambda=\lambda+ik\overline U$. Then $D_+=\Lambda+ik\Delta U/2$ and $D_-=\Lambda-ik\Delta U/2$, so step 3.1 becomes $2\Lambda^2-k^2(\Delta U)^2/2=0$. [given, step 3.1, algebra]

5.1 Solving the quadratic gives $\Lambda=\pm k|\Delta U|/2$, hence $\lambda=-ik\overline U\pm k|\Delta U|/2$. When $\Delta U\ne0$, the plus branch has positive real part $k|\Delta U|/2$. Because the interface equations have real coefficients, real and imaginary parts of a complex mode separately solve them. [given, A1, step 4.1, algebra]

6.1 On $\mathbb T_{2\pi}$ take an integer $k\ge1$ and the growing-branch interface mode $\eta_k(x,t)=a_k e^{k|\Delta U|t/2}\cos(k(x-\overline U t))$, where $a_k=(1+k^2)^{-m/2}$. Its only nonzero Fourier coefficients at time $t$ are at $\pm k$, each of magnitude $a_k e^{k|\Delta U|t/2}/2$. Therefore $\|\eta_k(0)\|_{H^m}^2=1/2$ and $\|\eta_k(t)\|_{H^m}^2=e^{k|\Delta U|t}/2$. For fixed $t>0$ and $\Delta U\ne0$, the first norm is uniformly bounded and the second diverges as $k\to\infty$, proving the stated failure of a uniform bound. [given, A1, step 5.1, algebra] ∎
