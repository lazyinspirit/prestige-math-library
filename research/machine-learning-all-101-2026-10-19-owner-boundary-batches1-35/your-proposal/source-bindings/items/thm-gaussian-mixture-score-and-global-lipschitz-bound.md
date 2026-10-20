---
id: thm-gaussian-mixture-score-and-global-lipschitz-bound
kind: theorem
title: Gaussian-mixture score identities and a global Lipschitz bound
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
axiom_base: Full AC
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-gaussian-smoothed-data-law-and-transition-density
  - thm-gaussian-smoothing-density-and-forward-equation
  - def-moments-variance-and-covariance
  - thm-dominated-convergence
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Wenpin Tang, Nizar Touzi, Zikun Zhang, and Xun Yu Zhou, Tweedie's Formulae and Diffusion Generative Models Beyond Gaussian"
      url: "https://arxiv.org/pdf/2605.19391"
      locator: "Section 1, equations (1.1)–(1.3), Gaussian posterior-mean formula for the score."
    - title: "John K. Hunter, Notes on Partial Differential Equations"
      url: "https://math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 5, §§5.1.1–5.1.2, printed pp. 127–132, positive Gaussian convolution and heat-kernel differentiation context."
---

## Statement

For $a>0$, define the product Gaussian density $\phi_a(z)=\prod_{j=1}^d(2\pi a)^{-1/2}\exp(-z_j^2/(2a))$. The operator norm below is induced by the Euclidean norm on $\mathbb R^d$.

Assume the Axiom of Choice and the hypotheses of the compactly supported Gaussian smoothing setup: $d\ge1$, $T>0$, $\mu$ is a Borel probability measure supported in $\overline B(0,R)$ for finite $R\ge0$, $g:[0,T]\to(0,\infty)$ is continuously differentiable with $0<g_{\min}\le g(t)\le g_{\max}<\infty$, $v(t)=\int_0^t g(r)^2\,dr$, and $p_t(x)=\int\phi_{v(t)}(x-z)\,\mu(dz)$ for $t>0$. Fix $0<\epsilon<T$. For $t\in[\epsilon,T]$ and $x\in\mathbb R^d$, define the probability measure

$$\nu_{t,x}(dz)=\frac{\phi_{v(t)}(x-z)}{p_t(x)}\,\mu(dz),\qquad m_{t,x}=\int z\,\nu_{t,x}(dz),$$

and the matrix

$$C_{t,x}=\int (z-m_{t,x})(z-m_{t,x})^{\mathsf T}\,\nu_{t,x}(dz).$$

The density $p_t$ is positive and smooth, and its score $s_t(x):=\nabla_x\log p_t(x)$ satisfies

$$s_t(x)=-\frac{x-m_{t,x}}{v(t)},\qquad D_xs_t(x)=-\frac{I_d}{v(t)}+\frac{C_{t,x}}{v(t)^2}.$$

For all $t\in[\epsilon,T]$ and $x,y\in\mathbb R^d$,

$$\|D_xs_t(x)\|_{\mathrm{op}}\le\frac1{v(\epsilon)}+\frac{R^2}{v(\epsilon)^2},\qquad |s_t(x)|\le\frac{|x|+R}{v(\epsilon)},$$

so $s_t$ is globally Lipschitz in $x$, uniformly over this truncated time interval, with Lipschitz constant at most $1/v(\epsilon)+R^2/v(\epsilon)^2$. No such bound is asserted uniformly as $\epsilon\downarrow0$.

## Statement references

[Tang, Touzi, Zhang, and Zhou, *Tweedie's Formulae and Diffusion Generative Models Beyond Gaussian*, Section 1](https://arxiv.org/pdf/2605.19391)

[Hunter, *Notes on Partial Differential Equations*, Chapter 5, §§5.1.1–5.1.2](https://math.ucdavis.edu/~hunter/pdes/pde_notes.pdf)

## Facts & Assumptions

**Given:** The compactly supported probability law, positive scalar time-dependent noise variance, explicit Gaussian convolution, and truncated interval in the statement.

[A1] The full Axiom of Choice is assumed by the inherited Itô and probability interfaces. [[def-axiom-of-choice]]

[F1] For every $t>0$, $p_t$ is a positive normalized density and is the Gaussian convolution of $\mu$ with covariance $v(t)I_d$. [[def-gaussian-smoothed-data-law-and-transition-density]]

[F2] On every interval bounded away from zero, $p_t$ is smooth in space and continuously differentiable in time; the spatial derivatives are obtained by differentiating the Gaussian kernel under the compactly supported measure. [[thm-gaussian-smoothing-density-and-forward-equation]]

[F3] Dominated convergence permits differentiation under an integral when the difference quotients converge pointwise and share an integrable majorant. [[thm-dominated-convergence]]

[F4] The support of $\mu$ lies in $\overline B(0,R)$, so every measure absolutely continuous with respect to $\mu$ is also supported there; all coordinate products in the displayed covariance integral are bounded and integrable. [[def-moments-variance-and-covariance]]

## Proof

**Given:** The statement's hypotheses and notation.

1.1 For fixed $t>0$, positivity in [F1] makes the quotient defining $\nu_{t,x}$ meaningful. Its density relative to $\mu$ is measurable and nonnegative, and its integral equals $p_t(x)/p_t(x)=1$, so it is a probability measure. By [F4], it is supported in $\overline B(0,R)$ and has finite first and second moments. The regularity conclusion [F2] applies on $[\epsilon,T]$. On each compact set of $x$ values, every spatial derivative of $\phi_{v(t)}(x-z)$ is bounded uniformly for $z\in\overline B(0,R)$ because $v(t)>0$ is fixed and the Gaussian derivatives are polynomials times a Gaussian. The finite measure $\mu$ supplies an integrable constant majorant. Difference quotients have the same kind of bound on a slightly larger compact set by the fundamental theorem of calculus, so [F3] justifies differentiating the convolution and its bounded-moment numerators under the integral. [A1, F1, F2, F3, F4, given]

2.1 For each coordinate $i$, differentiation of $p_t$ gives $\partial_i p_t(x)=\int -\frac{x_i-z_i}{v(t)}\phi_{v(t)}(x-z)\,\mu(dz)=-\frac{x_i-m_{t,x,i}}{v(t)}p_t(x).$ Dividing by the positive $p_t(x)$ proves $\nabla\log p_t(x)=-(x-m_{t,x})/v(t)$. [F1, F3, step 1.1, algebra]

3.1 Differentiate $m_{t,x,j}=p_t(x)^{-1}\int z_j\phi_{v(t)}(x-z)\,\mu(dz)$ in coordinate $i$. The quotient rule and $\partial_i\phi_{v(t)}(x-z)=-(x_i-z_i)\phi_{v(t)}(x-z)/v(t)$ yield $\partial_i m_{t,x,j}=\frac1{v(t)}\left(\int z_jz_i\,\nu_{t,x}(dz)-m_{t,x,j}m_{t,x,i}\right)=(C_{t,x})_{ji} / v(t).$ All terms are finite by [F4], and the derivative is justified by step 1.1. Differentiating the score identity from step 2.1 therefore gives $D_xs_t=-I_d/v(t)+C_{t,x}/v(t)^2$. [F3, F4, step 1.1, step 2.1, algebra]

4.1 The matrix $C_{t,x}$ is positive semidefinite because for every $u\in\mathbb R^d$, $u^{\mathsf T}C_{t,x}u=\int(u\cdot(z-m_{t,x}))^2\,\nu_{t,x}(dz)\ge0$. Also $u^{\mathsf T}C_{t,x}u=\int(u\cdot z)^2\,d\nu_{t,x}-\left(\int u\cdot z\,d\nu_{t,x}\right)^2\le\int|u|^2|z|^2\,d\nu_{t,x}\le R^2|u|^2.$ Thus $\|C_{t,x}\|_{\mathrm{op}}\le R^2$. Since $v$ is increasing and $v(t)\ge v(\epsilon)>0$, the Jacobian formula in step 3.1 and the triangle inequality for operator norms give the stated uniform derivative bound. The mean satisfies $|m_{t,x}|\le\int|z|\,d\nu_{t,x}\le R$, so the score formula in step 2.1 gives the displayed growth bound. [F4, step 2.1, step 3.1, given, algebra]

5.1 For any $x,y$, the fundamental theorem of calculus along the segment $y+r(x-y)$ gives $s_t(x)-s_t(y)=\int_0^1D_xs_t(y+r(x-y))(x-y)\,dr$. Taking norms and using step 4.1 proves the global Lipschitz bound uniformly for $t\in[\epsilon,T]$. Since $g\ge g_{\min}>0$, $v(\epsilon)\downarrow0$ as $\epsilon\downarrow0$; the bound therefore supplies no uniform-in-$\epsilon$ constant. [step 4.1, given, algebra] ∎