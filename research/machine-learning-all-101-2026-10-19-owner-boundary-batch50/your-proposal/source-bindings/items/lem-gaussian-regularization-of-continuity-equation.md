---
id: "lem-gaussian-regularization-of-continuity-equation"
kind: lemma
title: "Gaussian regularization preserves finite-action continuity equations"
status: draft
dependency_level: 2
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: ["def-continuity-equation-with-finite-action", "lem-spacetime-law-of-a-narrow-probability-curve", "thm-tonelli-theorem-for-sigma-finite-product-spaces", "thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces", "thm-monotone-convergence-for-the-integral", "thm-measurability-of-integration-against-a-kernel", "def-standard-normal-and-normal-laws", "lem-normal-density-has-total-mass-one", "lem-normal-location-scale-mean-and-variance", "def-product-measure-on-sigma-finite-spaces", "thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique", "thm-holder-inequality-for-integrals", "thm-dominated-convergence", "def-axiom-of-choice", "thm-choice-implies-dependent-implies-countable-choice", "def-countable-choice", "prop-closure-properties-of-measurable-functions-used-by-the-integral"]
justified_by: []
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
proof_strategy: direct
sources:
  references:
    - title: "Luigi Ambrosio, Nicola Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures, Chapter 8, §§8.1–8.2, PDF pp. 171–182"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
    - title: "Filippo Santambrogio, Optimal Transport for Applied Mathematicians, Chapter 5, §5.3, PDF pp. 173–178"
      url: "https://math.univ-lyon1.fr/~santambrogio/OTAM-cvgmt.pdf"
---
## Statement

Assume the Axiom of Choice. Let $T>0$, $d\ge1$, and let $(\mu_t,v_t)$ be a narrowly continuous finite-action solution of the continuity equation on $[0,T]\times\mathbb R^d$, with space-time law $M(dt,dx)=dt\,\mu_t(dx)$. Put $a(t)=\int|v_t(y)|^2d\mu_t(y)$ and $N=\{t:a(t)=+\infty\}$. Then $a$ is measurable, $N$ is Borel and Lebesgue-null, and the Borel representative $\bar v(t,x)=0$ for $t\in N$ and $\bar v(t,x)=v(t,x)$ for $t\notin N$ agrees with $v$ $M$-almost everywhere. For $\varepsilon>0$, let $\rho_\varepsilon$ be the strictly positive centered Gaussian probability density with covariance $\varepsilon I_d$, and define
$$p_t^\varepsilon(x)=\int\rho_\varepsilon(x-y)d\mu_t(y),\quad j_t^\varepsilon(x)=\int\rho_\varepsilon(x-y)\bar v_t(y)d\mu_t(y),\quad v_t^\varepsilon(x)=j_t^\varepsilon(x)/p_t^\varepsilon(x).$$
Then $p_t^\varepsilon$ is a strictly positive smooth probability density for each $t$, $t\mapsto\mu_t^\varepsilon$ is narrowly continuous, $v_t^\varepsilon$ is Borel and locally Lipschitz in $x$ with local magnitude and Lipschitz bounds integrable in time, and $(\mu_t*\rho_\varepsilon,v_t^\varepsilon)$ solves the continuity equation. For almost every $t$,
$$\int|v_t^\varepsilon(x)|^2p_t^\varepsilon(x)dx\le\int|v_t(y)|^2d\mu_t(y).$$

## Statement references

[[def-continuity-equation-with-finite-action]]

[[lem-spacetime-law-of-a-narrow-probability-curve]]

[[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[[thm-monotone-convergence-for-the-integral]]

[[thm-measurability-of-integration-against-a-kernel]]

[[def-standard-normal-and-normal-laws]]

[[lem-normal-density-has-total-mass-one]]

[[lem-normal-location-scale-mean-and-variance]]

[[def-product-measure-on-sigma-finite-spaces]]

[[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]

[[thm-holder-inequality-for-integrals]]

[[thm-dominated-convergence]]

[[def-axiom-of-choice]]

[[thm-choice-implies-dependent-implies-countable-choice]]

[[def-countable-choice]]

[[prop-closure-properties-of-measurable-functions-used-by-the-integral]]

[Ambrosio, Gigli, and Savaré, *Gradient Flows*, Chapter 8](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

[Santambrogio, *Optimal Transport for Applied Mathematicians*, Chapter 5, §5.3](https://math.univ-lyon1.fr/~santambrogio/OTAM-cvgmt.pdf)

## Facts & Assumptions

**Given:** AC; $T,d,\varepsilon$, the probability curve $\mu_t$, its Borel vector field $v$, finite action, and the distributional continuity equation.

[F1] The space-time law $M$ is finite and integrates nonnegative Borel functions by time sections; in particular $a(t)=\int|v_t|^2d\mu_t$ is measurable and integrable. [[lem-spacetime-law-of-a-narrow-probability-curve]] [[def-continuity-equation-with-finite-action]]

[F2] The Gaussian kernel is strictly positive, smooth, has integral one and second moment $d\varepsilon$. By differentiating its explicit density, each derivative has the form of a polynomial times the Gaussian, so every derivative is bounded and integrable. The d-dimensional law is the product of d one-dimensional normals. [[def-standard-normal-and-normal-laws]] [[lem-normal-density-has-total-mass-one]] [[lem-normal-location-scale-mean-and-variance]] [[def-product-measure-on-sigma-finite-spaces]] [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]

[F3] Kernel integration preserves Borel measurability; Tonelli and Fubini apply to the nonnegative and integrable convolution terms. [[thm-measurability-of-integration-against-a-kernel]] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[F4] Holder bounds first moments by second moments on finite probability spaces; monotone convergence and measurable closure apply to the remaining limits and quotients. [[thm-holder-inequality-for-integrals]] [[thm-monotone-convergence-for-the-integral]] [[prop-closure-properties-of-measurable-functions-used-by-the-integral]]

[F5] Dominated convergence passes the cutoff limits through the space-time integrals. [[thm-dominated-convergence]]

## Proof
1.1 The Gaussian second moment is finite: in one dimension $x^2e^{-x^2/(2\varepsilon)}$ is bounded on $[-1,1]$ and, outside it, is bounded by a constant times $e^{-x^2/(4\varepsilon)}$, which is integrable; product integration gives $\int|z|^2\rho_\varepsilon(z)dz=d\varepsilon$. Hence $\mu_t*\rho_\varepsilon$ has finite second moment by $|y+z|^2\le2|y|^2+2|z|^2$. For bounded continuous f, $y\mapsto\int f(y+z)\rho_\varepsilon(z)dz$ is bounded and continuous by dominated convergence, so narrow continuity of $\mu_t$ gives narrow continuity of $\mu_t^\varepsilon$. By [F1], $a\in L^1(0,T)$ and $N$ is a Borel null set. Use $\bar v$ from the statement; because $\bar v=v$ $M$-almost everywhere, the distributional equation and action are unchanged. Set $g(t)=\sqrt{a(t)}$ for $t\notin N$ and $g(t)=0$ on $N$. Holder gives $\int|\bar v_t|d\mu_t\le g(t)$ for every t and $g\in L^1(0,T)$, so all integrals defining $j$ are finite for every t. By [F3], $p,j$ are Borel in $(t,x)$. Positivity of $\rho_\varepsilon$ and total mass one give $p_t^\varepsilon(x)>0$. For every spatial multi-index, the Gaussian derivative is bounded by [F2], so differentiation under the integral is justified for $p$ and for $j$'s first derivatives by domination by a constant times $1+|\bar v_t|$. Thus $p_t^\varepsilon$ is smooth in x and $j_t^\varepsilon$ is continuously differentiable in x. Also $\int p_t^\varepsilon dx=1$ by [F2] and Tonelli. [given, F1, F2, F3, F4]

2.1 Fix a compact spatial set K. Narrow continuity of $\mu_t$ and bounded continuity of each Gaussian derivative imply joint continuity of $p_t^\varepsilon(x)$ and its spatial derivatives in $(t,x)$: for $t_n\to t$, $x_n\to x$, the spatial difference is uniformly bounded by a derivative bound times $|x_n-x|$, and the remaining integral converges by narrow continuity. On $[0,T]\times K$ the positive density therefore has a positive minimum. For every first spatial derivative, boundedness of the corresponding Gaussian derivative gives $|j_t^\varepsilon(x)|+|\nabla j_t^\varepsilon(x)|\le C_\varepsilon\int|\bar v_t|d\mu_t\le C_\varepsilon g(t)$ and $|\nabla p_t^\varepsilon(x)|\le C_\varepsilon$. The quotient rule and the positive lower bound for p show that $|v_t^\varepsilon(x)|+|\nabla v_t^\varepsilon(x)|\le C_{K,\varepsilon}g(t)$ on K. The right side is time-integrable, proving the local magnitude and Lipschitz bounds required for the Carathéodory flow. [F1, F2, F3, step 1.1]

2.2 For every t, the probability measure $p_t^\varepsilon(x)^{-1}\rho_\varepsilon(x-y)d\mu_t(y)$ averages $\bar v_t$ to $v_t^\varepsilon(x)$. Cauchy--Schwarz for this probability gives $\frac{|j_t^\varepsilon(x)|^2}{p_t^\varepsilon(x)}\le\int\rho_\varepsilon(x-y)|\bar v_t(y)|^2d\mu_t(y).$ Integrate in x and use Tonelli and $\int\rho_\varepsilon(x-y)dx=1$ to obtain $\int|v_t^\varepsilon|^2p_t^\varepsilon dx\le\int|\bar v_t|^2d\mu_t$ for every t; since $\bar v=v$ $M$-almost everywhere, this is the asserted a.e. action inequality. [F1, F2, F3, step 1.1]

3.1 Since $\bar v=v$ $M$-almost everywhere, the distributional continuity-equation identity also holds with $\bar v$. Let $\varphi\in C_c^\infty((0,T)\times\mathbb R^d)$ and set $\psi(t,y)=\int\varphi(t,x)\rho_\varepsilon(x-y)dx$. This function and its derivatives decay rapidly in y, but are not compactly supported. Choose smooth cutoffs $\chi_R$ equal to one on $B_R$, supported in $B_{2R}$, with $|\nabla\chi_R|\le C/R$, and apply the equation with $\bar v$ to $\chi_R(y)\psi(t,y)$. As $R\to\infty$, dominated convergence [F5] sends the terms with $\chi_R$ to their uncut values: $\partial_t\psi$ and $\nabla_y\psi$ are bounded, while $|v|$ is integrable against M by [F1]. The extra term $\psi v\cdot\nabla\chi_R$ tends to zero, bounded in absolute integral by $C\|\psi\|_\infty R^{-1}\int|v|dM$. Thus $\int(\partial_t\psi+\nabla_y\psi\cdot v_t(y))d\mu_t(y)dt=0.$ Differentiating the convolution and integrating by parts in x gives $\nabla_y\psi(t,y)=\int\nabla_x\varphi(t,x)\rho_\varepsilon(x-y)dx$. Fubini then rewrites the last identity as $\int_0^T\int\left(\partial_t\varphi(t,x)p_t^\varepsilon(x)+\nabla_x\varphi(t,x)\cdot j_t^\varepsilon(x)\right)dxdt=0,$ which is exactly the continuity equation for density $p_t^\varepsilon$ and velocity $v_t^\varepsilon=j_t^\varepsilon/p_t^\varepsilon$. [given, F1, F3, F4, F5, step 1.1, step 2.1] ∎
