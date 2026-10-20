---
id: "thm-ac2-curve-admits-minimal-velocity"
kind: theorem
title: "AC2 curves admit a unique minimum-action velocity field"
status: draft
dependency_level: 6
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: ["def-wasserstein-two-space-and-couplings", "def-ac2-curves-in-wasserstein-two", "def-continuity-equation-with-finite-action", "lem-spacetime-law-of-a-narrow-probability-curve", "thm-metric-derivative-of-ac2-wasserstein-curves", "thm-continuity-equation-implies-ac2", "prop-existence-and-lower-semicontinuity-of-optimal-couplings", "thm-riesz-representation-for-hilbert-space", "thm-riesz-fischer-completeness-of-l-p", "thm-first-fundamental-theorem-of-calculus-for-l-one", "thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions", "thm-dominated-convergence", "thm-cauchy-schwarz-in-an-inner-product-space", "def-axiom-of-choice", "thm-choice-implies-dependent-implies-countable-choice", "def-countable-choice", "def-dependent-choice", "def-real-and-complex-inner-product-space", "def-hilbert-space", "thm-holder-inequality-for-integrals", "def-metric-space"]
justified_by: []
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
proof_strategy: direct
axiom_use: "AC supplies Countable Choice for Hilbert Riesz and the scalar Lebesgue FTC. The coupling estimates and localization use no further selections."
sources:
  references:
    - title: "Luigi Ambrosio, Nicola Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures, Theorem 8.3.1 and §8.4, PDF pp. 183–190"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
    - title: "Filippo Santambrogio, Optimal Transport for Applied Mathematicians, Chapter 5, §5.3, PDF pp. 176–178"
      url: "https://math.univ-lyon1.fr/~santambrogio/OTAM-cvgmt.pdf"
---
## Statement

Assume AC. Let $T>0$ and $\mu\in AC^2([0,T];\mathcal P_2(\mathbb R^d))$. There is a Borel vector field $v$ of finite action that solves the continuity equation and satisfies
$$\int|v_t(x)|^2d\mu_t(x)=|\dot\mu_t|^2$$
for almost every $t$. Every other Borel finite-action solution $w$ of the same continuity equation obeys the pointwise Pythagorean identity
$$\int|w_t(x)|^2d\mu_t(x)=|\dot\mu_t|^2+\int|w_t(x)-v_t(x)|^2d\mu_t(x)$$
for almost every $t$. Consequently $v$ is the unique minimum-action velocity up to $dt\,\mu_t(dx)$-null sets and
$$\int_0^T|\dot\mu_t|^2dt=\min_w\int_0^T\!\int|w_t(x)|^2d\mu_t(x)dt,$$
where the minimum ranges over Borel finite-action fields solving the same continuity equation.

## Statement references

[[def-wasserstein-two-space-and-couplings]]

[[def-ac2-curves-in-wasserstein-two]]

[[def-continuity-equation-with-finite-action]]

[[lem-spacetime-law-of-a-narrow-probability-curve]]

[[thm-metric-derivative-of-ac2-wasserstein-curves]]

[[thm-continuity-equation-implies-ac2]]

[[prop-existence-and-lower-semicontinuity-of-optimal-couplings]]

[[thm-riesz-representation-for-hilbert-space]]

[[thm-riesz-fischer-completeness-of-l-p]]

[[thm-first-fundamental-theorem-of-calculus-for-l-one]]

[[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]

[[thm-dominated-convergence]]

[[thm-cauchy-schwarz-in-an-inner-product-space]]

[[def-axiom-of-choice]]

[[thm-choice-implies-dependent-implies-countable-choice]]

[[def-countable-choice]]

[[def-dependent-choice]]

[[def-real-and-complex-inner-product-space]]

[[def-hilbert-space]]

[[thm-holder-inequality-for-integrals]]

[[def-metric-space]]

[Ambrosio, Gigli, and Savaré, *Gradient Flows*, Theorem 8.3.1 and §8.4](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

[Santambrogio, *Optimal Transport for Applied Mathematicians*, Chapter 5, §5.3](https://math.univ-lyon1.fr/~santambrogio/OTAM-cvgmt.pdf)

## Facts & Assumptions

**Given:** AC, the $AC^2$ curve $\mu_t$, its measurable metric speed $s(t)=|\dot\mu_t|$, and its space-time measure $M(dt,dx)=dt\,\mu_t(dx)$.

[F1] The real space $H=L^2(M;\mathbb R^d)$ with inner product $\langle u,w\rangle=\int u\cdot w\,dM$ is a Hilbert space; the Hilbert-space Riesz representation theorem holds under Countable Choice, which follows from AC. [[thm-riesz-fischer-completeness-of-l-p]] [[def-real-and-complex-inner-product-space]] [[def-hilbert-space]] [[thm-riesz-representation-for-hilbert-space]] [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]] [[def-countable-choice]]

[F2] For every pair $\mu_t,\mu_{t+h}$ an optimal coupling exists; its quadratic cost is $W_2(\mu_t,\mu_{t+h})^2$. [[prop-existence-and-lower-semicontinuity-of-optimal-couplings]]

[F3] An absolutely continuous scalar function equals its initial value plus the integral of its derivative; its derivative is integrable almost everywhere. [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]] [[thm-first-fundamental-theorem-of-calculus-for-l-one]] [[def-countable-choice]] [[def-dependent-choice]]

[F8] Dominated convergence passes integrable test limits through the space-time integrals. [[thm-dominated-convergence]]

[F4] Holder's inequality gives $\int_I s(t)\|\nabla\varphi_t\|_{L^2(\mu_t)}dt\le\|s\|_{L^2(I)}\|\nabla\varphi\|_{L^2(M|_I)}$. [[thm-holder-inequality-for-integrals]]

[F5] Cauchy--Schwarz holds for the coupling and real Hilbert-space inner products. [[thm-cauchy-schwarz-in-an-inner-product-space]]

[F6] A finite Borel measure on the space-time product has the stated section integral, and time marginal $dt$, so interval endpoints are $M$-null. [[lem-spacetime-law-of-a-narrow-probability-curve]]

[F7] A finite-action solution of the continuity equation has metric speed at most its instantaneous $L^2(\mu_t)$ velocity norm. [[thm-continuity-equation-implies-ac2]]

## Proof
1.1 We first prove the scalar transport estimate $\left|\int_0^T\!\int\partial_t\varphi(t,x)d\mu_t(x)dt\right|\le\int_0^T s(t)\|\nabla_x\varphi(t,\cdot)\|_{L^2(\mu_t)}dt\qquad\text{(1)}$ for $\varphi\in C_c^\infty((0,T)\times\mathbb R^d)$. Put $F(t)=\int\varphi(t,x)d\mu_t(x)$. If $r<t$, the time increment of $\varphi$ is bounded by $\|\partial_t\varphi\|_\infty(t-r)$, and its spatial increment under an optimal coupling is bounded by $\|\nabla\varphi\|_\infty W_2(\mu_r,\mu_t)$. The $AC^2$ control therefore makes F absolutely continuous. At an interior time t where the metric derivative exists, use an optimal coupling $\pi_h$ of $\mu_t,\mu_{t+h}$. Taylor's formula with bounded Hessian gives $\varphi(t,y)-\varphi(t,x)=\nabla_x\varphi(t,x)\cdot(y-x)+R_t(x,y),\quad |R_t(x,y)|\le C|y-x|^2.$ Cauchy--Schwarz and [F2] yield $\left|\int(\varphi(t,y)-\varphi(t,x))d\pi_h\right|\le\|\nabla\varphi(t,\cdot)\|_{L^2(\mu_t)}W_2(\mu_t,\mu_{t+h})+C W_2(\mu_t,\mu_{t+h})^2.$ After division by $|h|$, the remainder tends to zero and the first term tends to $s(t)\|\nabla\varphi_t\|_2$. The separate time increment converges to $\int\partial_t\varphi(t,x)d\mu_t(x)$ by narrow continuity and uniform convergence of the smooth time difference quotients. Hence $|F'(t)-\int\partial_t\varphi_t d\mu_t|\le s(t)\|\nabla\varphi_t\|_2$ almost everywhere. Since F vanishes near 0 and T, the absolutely-continuous FTC [F3] gives $\int_0^TF' =0$; integrating the pointwise derivative inequality proves (1). Holder [F4] will be used for the right side. [F2, F3, F4, F5, given]

2.1 Let $\mathcal G$ be the closure in H of $\{\nabla_x\varphi:\varphi\in C_c^\infty((0,T)\times\mathbb R^d)\}$. Define $\ell(\nabla\varphi)=-\int\partial_t\varphi\,dM$. Estimate (1) and [F4] show $|\ell(g)|\le\|s\|_{L^2(0,T)}\|g\|_H$. Thus if two tests have the same gradient in H their $\ell$ values agree; this defines a bounded linear functional on the gradient subspace and extends uniquely to $\mathcal G$. By [F1] and Riesz there is a unique $v\in\mathcal G$ with $\ell(g)=\langle g,v\rangle_H$ for all $g\in\mathcal G$, and $\|v\|_H\le\|s\|_2$. Choose a Borel representative of this $L^2(M)$ class. For every test $\varphi$, $\int(\partial_t\varphi+\nabla_x\varphi\cdot v)dM=0,$ so v solves the continuity equation and has finite action. [F1, F4, F5, step 1.1]

3.1 Fix an interval I with rational endpoints in $(0,T)$ and let $\mathcal G_I$ be the closure in $L^2(M|_{I\times\mathbb R^d})$ of gradients of tests compactly supported in the interior of I. The restriction $v\mathbf1_I$ belongs to $\mathcal G_I$: approximate v by global test gradients, multiply each by smooth time cutoffs converging to $\mathbf1_I$, and use [F8] dominated convergence; the time marginal is Lebesgue, so the endpoints are null. For tests supported in I, $v\mathbf1_I$ represents the restricted functional $\ell_I$. By (1), its norm is at most $\|s\|_{L^2(I)}$. Consequently $\int_I\|v_t\|_{L^2(\mu_t)}^2dt\le\int_I s(t)^2dt$ for every rational interval I. Apply [F3] to the indefinite integral of $q(t)=\|v_t\|_{L^2(\mu_t)}^2-s(t)^2$: the interval inequalities make its values nonincreasing first on rational endpoints and then, by continuity of the indefinite integral, on all endpoints; its derivative is therefore nonpositive almost everywhere. Thus $\|v_t\|_{L^2(\mu_t)}\le s(t)$ a.e. Applying [F6] to the solution v gives the reverse inequality. Hence equality holds almost everywhere. [F1, F3, F4, F6, F7, F8, step 2.1]

4.1 Let w be any other Borel finite-action solution and put h=w-v. Subtracting the two weak equations gives $\langle h,\nabla\varphi\rangle_H=0$ for every test. Therefore on each rational interval I, h is orthogonal to $\mathcal G_I$; step 3.1 has $v\mathbf1_I\in\mathcal G_I$, so $\int_I\int h_t\cdot v_t d\mu_tdt=0$. The scalar integrand is in $L^1(0,T)$ by Cauchy--Schwarz. Its indefinite integral has zero increments on all rational intervals and is therefore constant; [F3] makes the integrand zero almost everywhere. Thus $\langle h_t,v_t\rangle_{L^2(\mu_t)}=0$ a.e., and the Hilbert-space identity gives $\|w_t\|_{L^2(\mu_t)}^2=\|v_t+h_t\|_{L^2(\mu_t)}^2=\|v_t\|_{L^2(\mu_t)}^2+\|h_t\|_{L^2(\mu_t)}^2=s(t)^2+\|w_t-v_t\|_{L^2(\mu_t)}^2.$ Integrating proves the minimum value and uniqueness up to $M$-null sets. [F1, F3, F5, F6, step 3.1] ∎
