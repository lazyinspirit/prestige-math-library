---
id: def-gaussian-smoothed-data-law-and-transition-density
kind: definition
title: Gaussian-smoothed data law and transition density
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
axiom_base: Full AC
dependency_level: 1
deps:
  - def-axiom-of-choice
  - lem-deterministic-ito-integral-has-gaussian-independent-increments
  - def-ito-sde-and-strong-solution
  - thm-global-strong-well-posedness-for-lipschitz-ito-sdes
  - def-probability-measure
  - def-law-or-distribution-of-a-random-element
  - thm-independent-random-elements-have-product-joint-law
  - thm-borel-products-of-euclidean-spaces-are-euclidean-borel
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - def-standard-normal-and-normal-laws
  - lem-normal-density-has-total-mass-one
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - def-multivariate-normal-law
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations"
      url: "https://math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 5, §5.1.1, The heat kernel and Gaussian convolution, printed pp. 127–131."
    - title: "Simo Särkkä and Arno Solin, Applied Stochastic Differential Equations"
      url: "https://users.aalto.fi/~asolin/sde-book/sde-book.pdf"
      locator: "Chapter 5, §§5.1–5.2, transition densities and the Fokker–Planck–Kolmogorov equation, PDF pp. 67–69."
---

## Definition

Assume the Axiom of Choice. Let $d\ge1$, $T>0$, and let $\mu$ be a Borel probability measure on $\mathbb R^d$ supported in the closed ball $\overline B(0,R)$ for some finite $R\ge0$. Let $g:[0,T]\to(0,\infty)$ be continuously differentiable with $0<g_{\min}\le g(t)\le g_{\max}<\infty$, and set $v(t)=\int_0^t g(r)^2\,dr$. On a complete filtered probability space with the usual conditions, take $X_0$ with law $\mu$, measurable at time zero and independent of the future Brownian increments. Let $W$ be a standard $d$-dimensional Brownian motion adapted to the filtration, with $W_t-W_s$ independent of $\mathcal F_s$ and distributed as $N_d(0,(t-s)I_d)$ for every $0\le s<t\le T$. Let $X$ be the strong solution of $dX_t=g(t)\,dW_t$ with initial value $X_0$. For $a>0$ define the product Gaussian density $\phi_a(z)=\prod_{j=1}^d(2\pi a)^{-1/2}\exp(-z_j^2/(2a))$. For $t>0$ and $0\le s<t\le T$, define

$$p_t(x)=\int_{\mathbb R^d}\phi_{v(t)}(x-z)\,\mu(dz),\qquad q(s,x;t,y)=\phi_{v(t)-v(s)}(y-x).$$

Then $p_t$ is a finite, strictly positive, normalized Lebesgue density of the law of $X_t$. For each $x$, $q(s,x;t,\cdot)$ is a finite, strictly positive, normalized Lebesgue density, and for all Borel sets $A,B\subseteq\mathbb R^d$,

$$P(X_s\in A,\ X_t\in B)=\int_A\int_B q(s,x;t,y)\,dy\,\mu_s(dx),\qquad \mu_s:=\operatorname{Law}(X_s).$$

For $0\le s<r<t\le T$, these transition densities satisfy

$$\int_{\mathbb R^d}q(s,x;r,z)q(r,z;t,y)\,dz=q(s,x;t,y)\qquad(x,y\in\mathbb R^d).$$

No Lebesgue density for the initial law $\mu$ is assumed.

## Definition references

[Hunter, Notes on Partial Differential Equations, Chapter 5, §5.1.1](https://math.ucdavis.edu/~hunter/pdes/pde_notes.pdf)

[Särkkä and Solin, Applied Stochastic Differential Equations, Chapter 5, §§5.1–5.2](https://users.aalto.fi/~asolin/sde-book/sde-book.pdf)

## Facts & Assumptions

**Given:** The objects and hypotheses in the definition, including full AC and the filtered Brownian increment condition.

[A1] The full Axiom of Choice is an assumption of the Itô, Brownian, and strong-solution interfaces used here. [[def-axiom-of-choice]]

[F1] A probability measure has total mass one, and a random element has law given by the probability of its measurable inverse images. [[def-probability-measure]]

[F2] The SDE data require a complete usual filtered probability space, an adapted Brownian motion with increments independent of the past, an initial value measurable at time zero and independent of future Brownian increments, and jointly Borel coefficients satisfying uniform Lipschitz and linear-growth bounds. [[def-ito-sde-and-strong-solution]]

[F3] Under those SDE hypotheses there is a unique strong solution, up to indistinguishability, with finite path-sup second moment. [[thm-global-strong-well-posedness-for-lipschitz-ito-sdes]]

[F4] The deterministic Itô increment over an interval of length $t-s$ has law $N_d(0,(v(t)-v(s))I_d)$ and is independent of the past. [[lem-deterministic-ito-integral-has-gaussian-independent-increments]]

[F5] The law of a random element is its probability pushforward. [[def-law-or-distribution-of-a-random-element]]

[F6] Independent random elements have the product of their marginal laws as their joint law. [[thm-independent-random-elements-have-product-joint-law]]

[F7] The Borel sigma-algebra of a Euclidean product is the product of the Euclidean Borel sigma-algebras. [[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]]

[F8] The scalar normal law is the pushforward of the standard normal density under the corresponding affine map. [[def-standard-normal-and-normal-laws]]

[F9] The standard normal density is positive and has Lebesgue integral one. [[lem-normal-density-has-total-mass-one]]

[F10] A $C^1$ diffeomorphism changes Lebesgue integrals by its absolute Jacobian determinant, including for nonnegative measurable functions. [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]

[F11] Tonelli gives measurability of parameter integrals of nonnegative product-measurable functions and permits the order of integration to be interchanged. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F12] The law $N_d(m,\Sigma)$ exists for positive semidefinite covariance matrices and is the law of a finite-dimensional affine transform of independent standard normals. [[def-multivariate-normal-law]]

## Proof

**Given:** The objects and hypotheses in the definition.

1.1 For $b(t,x)=0$ and $\sigma(t,x)=g(t)I_d$, the state-Lipschitz constant is zero and $\|\sigma(t,x)\|_F=\sqrt d\,g(t)\le\sqrt d\,g_{\max}$, so the linear-growth bound in [F2] holds with $K=\sqrt d\,g_{\max}$. Since $|X_0|\le R$ almost surely, $E|X_0|^2\le R^2$. The complete usual filtration, Brownian independence, and initial-value hypotheses are exactly those of [F2]; [F3] therefore gives the unique strong solution used in the definition. [A1, F2, F3, given]

1.2 Since $g(r)\ge g_{\min}>0$, $v(t)>0$ for $t>0$ and $v(t)-v(s)\ge g_{\min}^2(t-s)>0$ for $s<t$. The one-dimensional density $(2\pi a)^{-1/2}e^{-u^2/(2a)}$ is obtained from the standard normal density in [F8] by the $C^1$ scaling $u\mapsto\sqrt a\,u$ in [F10], so it is positive and has integral one by [F9]. The product formula for $\phi_a$ is therefore positive; Tonelli [F11] gives $\int_{\mathbb R^d}\phi_a(z)\,dz=\prod_{j=1}^d1=1$. [F8, F9, F10, F11, given]

1.3 The bound $\phi_{v(t)}(x-z)\le(2\pi v(t))^{-d/2}$ and $\mu(\mathbb R^d)=1$ show $p_t(x)<\infty$. Since $\phi_{v(t)}(x-z)>0$ for every $z$ and $\mu$ has mass one, $p_t(x)>0$. Tonelli and translation change of variables give $\int_{\mathbb R^d}p_t(x)\,dx=\int_{\mathbb R^d}\left(\int_{\mathbb R^d}\phi_{v(t)}(x-z)\,dx\right)\mu(dz)=\int_{\mathbb R^d}1\,\mu(dz)=1.$ The same argument proves that $q(s,x;t,\cdot)$ is positive, finite, and normalized for every $s<t$ and $x$. [F1, F9, F10, F11, given]

2.1 Write $Z_t=X_t-X_0=\int_0^t g(r)\,dW_r$. By [F4], $Z_t$ is independent of $X_0$, which is measurable at time zero, and has law $N_d(0,v(t)I_d)$. By [F12] this law is the product of $d$ scalar normal laws of variance $v(t)$; [F8]–[F11] show that this product law has density $\phi_{v(t)}$. The independent-random-elements product law [F6] and the continuous addition map give, for every Borel $A$, $P(X_t\in A)=\int_{\mathbb R^d}\int_{\mathbb R^d}\mathbf1_A(z+w)\phi_{v(t)}(w)\,dw\,\mu(dz)=\int_A\left(\int_{\mathbb R^d}\phi_{v(t)}(x-z)\,\mu(dz)\right)dx,$ where Tonelli and translation were used in the last equality. Thus $p_t$ is the law density. [A1, F4, F5, F6, F7, F8, F9, F10, F11, F12, step 1.1, step 1.2, step 1.3]

3.1 Fix $0\le s<t\le T$. The vector $Z_{s,t}=X_t-X_s$ is independent of $\mathcal F_s$ by [F4], and $X_s$ is $\mathcal F_s$-measurable by the strong-solution conclusion of [F3]. Thus $X_s$ and $Z_{s,t}$ are independent random elements. The same product-law calculation as in step 2.1, now with $Z_{s,t}$ of law $N_d(0,(v(t)-v(s))I_d)$, gives for Borel $A,B$ $P(X_s\in A,\ X_t\in B)=\int_A\left(\int_B\phi_{v(t)-v(s)}(y-x)\,dy\right)\mu_s(dx).$ This is the asserted transition-density identity. [F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, step 1.1, step 1.2, step 1.3, step 2.1]

4.1 For $0\le s<r<t\le T$, put $a=v(r)-v(s)>0$ and $b=v(t)-v(r)>0$. In one coordinate, completing the square gives $\frac{(z-x)^2}{a}+\frac{(y-z)^2}{b}=\frac{a+b}{ab}\left(z-\frac{bx+ay}{a+b}\right)^2+\frac{(y-x)^2}{a+b}.$ Applying this identity in each of the $d$ coordinates and integrating the centered Gaussian factor using [F9]–[F11] yields $\int\phi_a(z-x)\phi_b(y-z)\,dz=\phi_{a+b}(y-x)$. Since $a+b=v(t)-v(s)$, this is exactly the claimed Chapman–Kolmogorov identity. [F9, F10, F11, step 1.2, algebra] ∎
