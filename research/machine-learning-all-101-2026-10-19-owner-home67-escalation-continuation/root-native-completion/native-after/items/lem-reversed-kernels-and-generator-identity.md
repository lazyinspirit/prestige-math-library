---
id: lem-reversed-kernels-and-generator-identity
kind: lemma
title: Reversed kernels, generator, and martingale problem
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
page: anderson-reverse-time-diffusion
dependency_level: 2
deps:
  - def-reversed-transition-kernels-for-diffusions
  - lem-forward-kolmogorov-duality-gives-reversed-martingales
  - thm-dominated-convergence
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pending
sources:
  references:
    - title: "B. D. O. Anderson, Reverse-time diffusion equation models, Section 5"
      url: "https://eva.fcien.udelar.edu.uy/pluginfile.php/166428/mod_resource/content/1/1982_andersonREVERSE-TIME%20DIFFUSION%20EQUATION%20MODELS.pdf"
    - title: "Y. Tang and H. Zhao, Score-based diffusion models via stochastic differential equations: a technical tutorial, Section 2.2"
      url: "https://arxiv.org/pdf/2402.07487"
---

## Statement
Let $X_t$ have continuous paths on $[0,T]$ and be Markov on $\mathbb R^d$, meaning its conditional future law given the past depends only on its current state; nonexplosive means it remains in $\mathbb R^d$ throughout this finite interval. Let it have forward generator
$$L_t\phi=b_t\cdot\nabla\phi+\tfrac12a_t:D^2\phi,$$
where $a_t=\sigma_t\sigma_t^{\mathsf T}$ is symmetric and $L_t^*r=-\partial_i(b_{t,i}r)+\tfrac12\partial_i\partial_j(a_{t,ij}r)$. Assume positive $C^{1,2}$ marginal densities $p_t$ and positive transition densities $q(s,x;t,y)$ satisfy the marginal identity and Chapman–Kolmogorov identity, and that $\partial_t p_t=L_t^*p_t$ and $\partial_tq(s,x;t,y)=L_t^{*,y}q(s,x;t,y)$ hold classically. Assume for every $\phi\in C_c^\infty(\mathbb R^d)$ that the transition-density integrals can be differentiated in time, the resulting derivatives are integrable, and integration by parts in the state variable has no boundary term.

Define $K_{u,v}$ by the Bayes-reversed kernel formula for $0\le u\le v\le T$. Then the reversed process $Y_u=X_{T-u}$ is Markov with transitions $K_{u,v}$. For compact smooth $\phi$, define the formal adjoint candidate operator
$$\widetilde L_u\phi(y)=\frac{L_{T-u}^*(p_{T-u}\phi)(y)-\phi(y)L_{T-u}^*p_{T-u}(y)}{p_{T-u}(y)}.$$
The product rule gives the identity
$$\widetilde L_u\phi=\widetilde b_u\cdot\nabla\phi+\tfrac12a_{T-u}:D^2\phi,\qquad \widetilde b_u=-b_{T-u}+\nabla\!\cdot a_{T-u}+a_{T-u}\nabla\log p_{T-u},$$
with $(\nabla\!\cdot a)_i=\sum_j\partial_j a_{ij}$. These Bayes-kernel and formal product identities use only the preceding hypotheses.

For the martingale conclusion, impose additionally the following forward analytic conditions. For every compact $K\subset\mathbb R^d$, with $A_{ij}(r,x)=p_r(x)a_{r,ij}(x)$ and $C_i=-p_rb_{r,i}+\sum_j\partial_jA_{ij}$,
$$\int_0^T\!\int_K\left[\sum_i|C_i|+\sum_{i,j}p_r|a_{r,ij}|\right]dx\,dr<\infty.$$
For every $t\in(0,T]$ and $f\in C_c^\infty(\mathbb R^d)$, the actual forward conditional expectation $g_{t,f}(r,x)=\int q(r,x;t,y)f(y)dy$ has a $C^{1,2}$ version on $(0,t)\times\mathbb R^d$, solves $\partial_rg_{t,f}+L_rg_{t,f}=0$, and satisfies $\int p_r\phi L_rg_{t,f}dx=\int g_{t,f}L_r^*(p_r\phi)dx$ for each compact smooth $\phi$ and almost every $r<t$. All coefficient expressions in these conditions are Borel. These are conditions on the original forward transition family.

Under these additional forward analytic conditions, $\widetilde L_u$ is the extended martingale generator of $Y$: for its natural reversed filtration $\mathcal G_u=\sigma(Y_r:0\le r\le u)$, every compact-test compensated process is a martingale, hence a local martingale. The unconditional formal candidate identity alone makes no martingale or pointwise transition-quotient assertion.

## Statement references

[Anderson, Section 5, printed pp. 322–324](https://eva.fcien.udelar.edu.uy/pluginfile.php/166428/mod_resource/content/1/1982_andersonREVERSE-TIME%20DIFFUSION%20EQUATION%20MODELS.pdf): gives the reverse Kolmogorov-equation approach as context; the full kernel and martingale argument is proved here.

[Tang and Zhao, Section 2.2, PDF pp. 3–5](https://arxiv.org/pdf/2402.07487): states the reverse-drift formula and explicitly gives a heuristic derivation.

## Facts & Assumptions

**Given:** the positive density, forward equation, regularity, differentiation, and no-boundary-term hypotheses in the Statement; $L^*$ is the formal adjoint of $L$. The additional forward analytic hypotheses are imposed when proving the martingale conclusion.

[F1] The Bayes-reversed kernels are probability kernels and compose in reverse order by the forward marginal and Chapman–Kolmogorov identities. [[def-reversed-transition-kernels-for-diffusions]]

[F2] The forward backward-Kolmogorov and local weighted integrability conditions in the Statement imply the finite-time reversed compact-test martingale identity by differentiating $\int p_r\phi g_{t,f}(r,\cdot)$ and integrating in time. [[lem-forward-kolmogorov-duality-gives-reversed-martingales]]

[F3] The explicit local weighted bound makes $\int_0^T E|D_r\phi(X_r)|dr$ finite for each compact smooth test; Fubini then justifies the conditional time integral. No varying-endpoint transition quotient or partition limit is used. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[F4] For $A_{ij}=a_{ij}p$, symmetry of $a$ and the product rule give
$$L_t^*(p\phi)-\phi L_t^*p=p\left(-b_i+\frac1p\partial_j(pa_{ij})\right)\partial_i\phi+\tfrac12pa_{ij}\partial_{ij}\phi.$$
This is an algebraic expansion of the displayed formal adjoint.

## Proof
**Given:** the process and base hypotheses in the Statement; impose its additional forward analytic conditions for steps 2.1–3.1.

1.1 Bayes' formula gives the one-step reversed conditional law: for Borel $A$, the joint density of $(X_{T-v},X_{T-u})$ is $p_{T-v}(x)q(T-v,x;T-u,y)$, while the later marginal is $p_{T-u}(y)$. Their ratio is exactly $K_{u,v}(y,A)$. The kernel is normalized and composes by [F1], so the finite-dimensional reversed laws have the Markov factorization with these kernels. [F1]

2.1 Put $t=T-u$ and $D_t\phi=p_t^{-1}\{L_t^*(p_t\phi)-\phi L_t^*p_t\}$. Under the additional forward analytic conditions in the Statement, the hypotheses are exactly those of [F2], so that result gives the compensated-test martingale with coefficient $D_{T-u}$. Thus the displayed operator is the extended martingale generator. This argument uses the finite-time product identity for the actual forward transition family. [F2, step 1.1]

3.1 Under the same additional conditions, [F2] gives for $0\le s<t\le T$ and every bounded Borel $f$ the identity $\displaystyle E\!\left[f(X_t)\left\{\phi(X_s)-\phi(X_t)-\int_s^tD_r\phi(X_r)dr\right\}\right]=0$. Reversed Markov conditioning and [F3] therefore give zero conditional expectation of every compensated increment given $\mathcal G_u$, as required. The explicit bound gives a true martingale, hence a local martingale. [F1, F2, F3, step 1.1, step 2.1]

4.1 Expanding the adjoint in step 2.1, the drift part contributes $-p b_i\partial_i\phi$. The second-order product rule contributes $\partial_j(pa_{ij})\partial_i\phi+\tfrac12pa_{ij}\partial_{ij}\phi$ after summing and using symmetry of $a$. Divide by $p$ and use $p^{-1}\partial_j(pa_{ij})=\partial_j a_{ij}+a_{ij}\partial_j\log p$ to obtain the stated reverse drift and diffusion matrix. [step 2.1, F4] ∎
