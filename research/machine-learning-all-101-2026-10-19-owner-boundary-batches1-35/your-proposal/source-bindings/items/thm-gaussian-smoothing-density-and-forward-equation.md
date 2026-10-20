---
id: thm-gaussian-smoothing-density-and-forward-equation
kind: theorem
title: Gaussian smoothing density and forward equation
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
axiom_base: Full AC
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-gaussian-smoothed-data-law-and-transition-density
  - def-ito-sde-and-strong-solution
  - thm-global-strong-well-posedness-for-lipschitz-ito-sdes
  - def-law-or-distribution-of-a-random-element
  - thm-dominated-convergence
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - def-weak-convergence-of-borel-probability-measures
  - thm-uniqueness-of-a-law-from-its-characteristic-function
  - thm-cramer-wold-device
  - lem-characteristic-function-of-a-multivariate-normal-law
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations"
      url: "https://math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 5, §§5.1.1–5.1.2, Theorems 5.4–5.5, printed pp. 127–132. Theorem 5.5's Lp initial-density hypothesis is not used for singular finite measures."
    - title: "Simo Särkkä and Arno Solin, Applied Stochastic Differential Equations"
      url: "https://users.aalto.fi/~asolin/sde-book/sde-book.pdf"
      locator: "Chapter 5, §§5.1–5.2, Fokker–Planck–Kolmogorov equation and transition densities, PDF pp. 67–69."
---

## Statement

Assume the Axiom of Choice. Fix $d\ge1$, $T>0$, a finite $R\ge0$, and a Borel probability measure $\mu$ on $\mathbb R^d$ supported in $\overline B(0,R)$. Let $g:[0,T]\to(0,\infty)$ be continuously differentiable with $0<g_{\min}\le g(t)\le g_{\max}<\infty$, and set $v(t)=\int_0^t g(r)^2\,dr$. On a complete filtered probability space with the usual conditions, let $X_0$ be measurable at time zero with law $\mu$ and independent of future Brownian increments. Let $W$ be a standard $d$-dimensional Brownian motion adapted to the filtration, with $W_t-W_s$ independent of $\mathcal F_s$ for every $s<t$, and let $X$ be the unique strong solution of $X_t=X_0+\int_0^t g(r)\,dW_r$. For $a>0$ define $\phi_a(z)=\prod_{j=1}^d(2\pi a)^{-1/2}\exp(-z_j^2/(2a))$. For $t>0$ set

$$p_t(x)=\int_{\mathbb R^d}\phi_{v(t)}(x-z)\,\mu(dz),$$

and set $\mu_0=\mu$. Let $C_c^\infty(\mathbb R^d)$ denote the real infinitely differentiable functions with compact support. For every $t>0$, $p_t$ is positive and infinitely differentiable in $x$. On each interval $[\epsilon,T]$ with $0<\epsilon<T$, it is continuously differentiable in time and satisfies

$$\partial_t p_t(x)=\frac{g(t)^2}{2}\Delta_xp_t(x),\qquad \Delta_x=\sum_{j=1}^d\partial_{x_j}^2.$$

A family $(\nu_t)_{0\le t\le T}$ of Borel probability measures is narrowly continuous when $t\mapsto\int f\,d\nu_t$ is continuous for every bounded continuous real function $f$. It is a weak forward solution with initial law $\mu$ when it is narrowly continuous, $\nu_0=\mu$, and, for every $t\in[0,T]$ and every real-valued function $\psi:[0,T]\times\mathbb R^d\to\mathbb R$ with continuous first time derivative and continuous spatial derivatives through order two, whose spatial support lies in one compact set for all $s$, it satisfies

$$\int_{\mathbb R^d}\psi(t,x)\,\nu_t(dx)-\int_{\mathbb R^d}\psi(0,x)\,\mu(dx)=\int_0^t\int_{\mathbb R^d}\left(\partial_s\psi(s,x)+\frac{g(s)^2}{2}\Delta_x\psi(s,x)\right)\nu_s(dx)\,ds.$$

Then $(\mu_t)_{0\le t\le T}$, where $\mu_t(dx)=p_t(x)\,dx$ for $t>0$ and $\mu_0=\mu$, is the unique narrowly continuous weak forward solution with initial law $\mu$. No density for $\mu$ at $t=0$ is asserted.

## Statement references

[Hunter, *Notes on Partial Differential Equations*, Chapter 5, §§5.1.1–5.1.2](https://math.ucdavis.edu/~hunter/pdes/pde_notes.pdf)

[Särkkä and Solin, *Applied Stochastic Differential Equations*, Chapter 5, §§5.1–5.2](https://users.aalto.fi/~asolin/sde-book/sde-book.pdf)

## Facts & Assumptions

**Given:** Full AC, the compactly supported initial probability measure, the scalar noise coefficient, and the density and transition formulas from the preceding definition.

[A1] The full Axiom of Choice is assumed by the inherited Brownian and Itô interfaces. [[def-axiom-of-choice]]

[F1] For $t>0$, $p_t$ is the positive normalized density of the strong solution's law, and the initial law is $\mu$. [[def-gaussian-smoothed-data-law-and-transition-density]]

[F2] The SDE data include a complete usual filtered probability space, adapted Brownian motion with increments independent of the past, and an initial value independent of future increments. [[def-ito-sde-and-strong-solution]]

[F3] Under these Lipschitz and linear-growth hypotheses there is a unique strong solution with continuous paths. [[thm-global-strong-well-posedness-for-lipschitz-ito-sdes]]

[F4] Dominated convergence passes almost-everywhere limits through an integral under one integrable majorant. [[thm-dominated-convergence]]

[F5] Fubini interchanges absolutely integrable iterated Lebesgue integrals on sigma-finite product spaces. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[F6] Narrow continuity and weak convergence of Borel probability measures are tested by bounded continuous real functions. [[def-weak-convergence-of-borel-probability-measures]]

[F7] Two Borel probability laws on $\mathbb R$ with the same characteristic function are equal under AC. [[thm-uniqueness-of-a-law-from-its-characteristic-function]]

[F8] Borel probability laws on $\mathbb R^d$ are determined by the laws of all one-dimensional linear projections under AC. [[thm-cramer-wold-device]]

[F9] The law of a random element is the probability of its measurable inverse images. [[def-law-or-distribution-of-a-random-element]]

[F10] A centered normal law with covariance $aI_d$ has characteristic function $\theta\mapsto\exp(-a|\theta|^2/2)$. [[lem-characteristic-function-of-a-multivariate-normal-law]]

## Proof

**Given:** The statement's hypotheses and definitions.

1.1 For $a>0$, direct differentiation gives $\partial_a\phi_a(z)=\tfrac12\Delta_z\phi_a(z)$. Every finite spatial derivative of $\phi_a(z)$ is a polynomial in $z$ and $a^{-1}$ times $\phi_a(z)$. Fix $\epsilon>0$ and compact sets $K\subset\mathbb R^d$ and $J\subset[\epsilon,T]$. Since $a=v(t)$ is bounded above and away from zero on $J$, and $z$ lies in the compact support of $\mu$, each such derivative is uniformly bounded for $x\in K$, $t\in J$, and $z\in\operatorname{supp}\mu$. Difference quotients are bounded by the same type of constant on a slightly larger compact set, by the one-variable fundamental theorem of calculus. Dominated convergence [F4] therefore permits differentiation under the finite measure $\mu$ to every spatial order and once in time. The chain rule and $v'(t)=g(t)^2$ give $\partial_t p_t(x)=\int \frac{g(t)^2}{2}\Delta_x\phi_{v(t)}(x-z)\,\mu(dz)=\frac{g(t)^2}{2}\Delta_xp_t(x).$ Positivity follows from the positive kernel and the nonzero probability measure. [F1, F4, given]

1.2 The SDE setup in [F2] and well-posedness theorem [F3] give a common continuous-path event. For bounded continuous $f$, $X_t\to X_s$ almost surely as $t\to s$ on that event, and [F4] applied to the bounded variables $f(X_t)$ gives $\mathbb E f(X_t)\to\mathbb E f(X_s)$. By [F9], these expectations are $\int f\,d\mu_t$; also $\mu_0=\mu$. [F2, F3, F4, F6, F9, given]

1.3 Fix $t\in(0,T]$ and $f\in C_c^\infty(\mathbb R^d)$. For $0\le s<t$ set $h(s,x)=\int_{\mathbb R^d}f(x+z)\phi_{v(t)-v(s)}(z)\,dz,\qquad h(t,x)=f(x).$ For $a=v(t)-v(s)>0$, write $P_af(x)=\int f(x+z)\phi_a(z)\,dz$. Differentiating the explicit Gaussian and integrating by parts twice, with boundary terms zero because $f$ is compactly supported, gives $\partial_aP_af=\tfrac12P_a\Delta f$. Thus $\partial_sh+\tfrac12g(s)^2\Delta_xh=0$ for $s<t$. Spatial derivatives may be moved onto $f$, so $h$, $\nabla h$, and $\Delta h$ are bounded by the corresponding sup norms of $f$, $\nabla f$, and $\Delta f$. For any such derivative $q$ and $\eta>0$, $\sup_x|P_aq(x)-q(x)|\le\|\nabla q\|_\infty\eta+2\|q\|_\infty\int_{|z|>\eta}\phi_a(z)\,dz.$ The tail equals $\int_{|u|>\eta/\sqrt a}\phi_1(u)\,du$ and tends to zero as $a\downarrow0$ because $\phi_1$ is integrable. Letting first $a\downarrow0$ and then $\eta\downarrow0$ proves uniform convergence of $P_aq$ to $q$, including $q=\Delta f$; hence the backward equation and bounds extend continuously to $s=t$. [F1, F4, given]

2.1 At $t=0$ the weak identity has equal endpoint terms and a zero right-hand integral. For $t>0$, fix an admissible test $\psi$ and $0<\delta<t$. On the common compact spatial support, $p_s$ and $\partial_s p_s$ are continuous and bounded for $s\in[\delta,t]$ by step 1.1. Differentiation under the space integral is therefore justified by [F4]. Using step 1.1 and integrating by parts twice in each coordinate, with no boundary terms because $\psi$ has compact spatial support, gives $\frac{d}{ds}\int\psi(s,x)p_s(x)\,dx=\int\left(\partial_s\psi(s,x)+\frac{g(s)^2}{2}\Delta_x\psi(s,x)\right)p_s(x)\,dx.$ Integrating from $\delta$ to $t$ gives the weak identity with lower endpoint $\int\psi(\delta,x)\,\mu_\delta(dx)$. Its difference from $\int\psi(0,x)\,\mu(dx)$ tends to zero: the term $\sup_x|\psi(\delta,x)-\psi(0,x)|$ tends to zero by the bounded continuous time derivative on the common compact support, and $\int\psi(0,\cdot)\,d\mu_\delta\to\int\psi(0,\cdot)\,d\mu$ by step 1.2. The omitted right-hand integral over $[0,\delta]$ tends to zero because each $\mu_s$ has mass one and the derivatives of $\psi$ and $g$ are bounded on the common compact support. Letting $\delta\downarrow0$ proves the weak identity, so $\mu_t$ is a weak forward solution. [F1, F4, F5, F6, step 1.1, step 1.2, given]

3.1 Choose a smooth cutoff $\chi_L$ equal to one on $|x|\le L$ and zero on $|x|\ge2L$, with $|\nabla\chi_L|\le C/L$ and $|\Delta\chi_L|\le C/L^2$. For completeness, take $\chi_L(x)=\eta(|x|^2/L^2)$, where $\rho(u)=0$ for $u\le0$, $\rho(u)=e^{-1/u}$ for $u>0$, and $\eta(u)=\rho(4-u)/(\rho(4-u)+\rho(u-1))$. The function $\psi_L(s,x)=\chi_L(x)h(s,x)$ is an admissible compactly supported test in the weak equation. By step 1.3, $\partial_s\psi_L+\frac{g(s)^2}{2}\Delta\psi_L=\frac{g(s)^2}{2}\left(2\nabla\chi_L\cdot\nabla h+h\Delta\chi_L\right),$ whose absolute value is at most $C_t(L^{-1}\|\nabla f\|_\infty+L^{-2}\|f\|_\infty)$. Since each $\nu_s$ is a probability, the time-integrated error tends to zero as $L\to\infty$. For all sufficiently large $L$, $\chi_L=1$ on the support of $f$ and on the support of $\mu$. Letting $L\to\infty$ in the weak identity therefore gives $\int f\,d\nu_t=\int h(0,x)\,\mu(dx).$ The same cutoff argument applied to the weak solution $\mu_t$ from step 2.1 gives $\int f\,d\mu_t=\int h(0,x)\,\mu(dx)$. Thus $\nu_t$ and $\mu_t$ agree on every compactly supported smooth real function. [step 2.1, step 1.3, given]

4.1 For any fixed $t>0$, any $\theta\in\mathbb R^d$, and integer $n\ge1$, apply step 3.1 to $\chi_n(x)\cos(\theta\cdot x)$ and $\chi_n(x)\sin(\theta\cdot x)$ and combine the resulting identities into one complex identity. Let $n\to\infty$. The left side converges to the characteristic function of $\nu_t$ by dominated convergence [F4]. For each fixed $x$, the backward averages on the right converge by [F4] and [F10] to $e^{i\theta\cdot x}e^{-v(t)|\theta|^2/2}$; they are bounded by one, so another application of [F4] gives the limit $e^{-v(t)|\theta|^2/2}\int e^{i\theta\cdot x}\,\mu(dx)$. By [F1], $\mu_t$ is the convolution of $\mu$ with the centered Gaussian of covariance $v(t)I_d$; Fubini [F5] and [F10] show that its characteristic function is exactly this product. Hence the vector characteristic functions of $\nu_t$ and $\mu_t$ agree for every $\theta$. For each $u\in\mathbb R^d$, take $\theta=ru$ for arbitrary $r\in\mathbb R$; scalar uniqueness [F7] gives equality of the laws of $u\cdot x$ under the two measures, and [F8] then gives $\nu_t=\mu_t$. This holds for every $t>0$; at $t=0$ both laws equal $\mu$ by the initial condition, proving uniqueness. AC is used only through the inherited Brownian/Itô interfaces and the cited Fourier-uniqueness results. [A1, F1, F4, F5, F7, F8, F10, step 3.1, given] ∎
