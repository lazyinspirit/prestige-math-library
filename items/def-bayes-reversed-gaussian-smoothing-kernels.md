---
id: def-bayes-reversed-gaussian-smoothing-kernels
kind: definition
title: Bayes-reversed Gaussian smoothing kernels
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
page: anderson-reverse-time-diffusion
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-gaussian-smoothed-data-law-and-transition-density
  - def-measure-kernel-and-probability-kernel
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "B. D. O. Anderson, Reverse-time diffusion equation models, Sections 3–4"
      url: "https://eva.fcien.udelar.edu.uy/pluginfile.php/166428/mod_resource/content/1/1982_andersonREVERSE-TIME%20DIFFUSION%20EQUATION%20MODELS.pdf"
    - title: "Y. Tang and H. Zhao, Score-based diffusion models via stochastic differential equations: a technical tutorial, Section 2.2"
      url: "https://arxiv.org/pdf/2402.07487"
---

## Definition

Assume AC. Fix $T>0$, a compactly supported Borel probability measure $\mu$ on $\mathbb R^d$, a continuously differentiable function $g:[0,T]\to(0,\infty)$ bounded above and away from zero, and $v(t)=\int_0^t g(r)^2dr$. For $t>0$ put
$$p_t(y)=\int_{\mathbb R^d}\phi_{v(t)}(y-z)\,\mu(dz),\qquad q(s,x;t,y)=\phi_{v(t)-v(s)}(y-x)\quad(0\le s<t\le T),$$
where $\phi_a$ is the centered Gaussian density with covariance $aI_d$. Put $p_0=\mu$ as a probability measure, not as a Lebesgue density. For $0\le u<v<T$ define
$$K_{u,v}(y,dx)=\frac{p_{T-v}(x)q(T-v,x;T-u,y)}{p_{T-u}(y)}\,dx,$$
and for $0\le u<T$ at the singular data endpoint define
$$K_{u,T}(y,A)=\frac{\int_A q(0,x;T-u,y)\,\mu(dx)}{p_{T-u}(y)}\quad(A\text{ Borel}).$$
Set $K_{u,u}(y,\cdot)=\delta_y$. These are the Bayes-reversed kernels of the additive Gaussian smoothing process, including the posterior kernel at the original data time; no density for $\mu$ is required.

## Definition references

[[def-gaussian-smoothed-data-law-and-transition-density|Gaussian-smoothed law and transition density]]: supplies the explicit positive-time marginal density, Gaussian transition density, and forward marginal and Chapman–Kolmogorov identities.

[Anderson, Sections 3–4](https://eva.fcien.udelar.edu.uy/pluginfile.php/166428/mod_resource/content/1/1982_andersonREVERSE-TIME%20DIFFUSION%20EQUATION%20MODELS.pdf): context for Bayes reversal from forward transition densities.

## Facts & Assumptions

**Given:** AC, $\mu$, $g$, $v$, $p_t$, and $q$ in the definition.

[A1] The Gaussian smoothing supplier assumes AC, compact support, $p_t>0$ for $t>0$, the displayed transition density, the forward marginal identity, and Chapman–Kolmogorov; it defines $p_0=\mu$ without asserting a density there. [[def-axiom-of-choice]] [[def-gaussian-smoothed-data-law-and-transition-density]]

[F1] A probability kernel assigns a probability measure to each source state and has a measurable evaluation function for each Borel target set. [[def-measure-kernel-and-probability-kernel]]

[F2] Nonnegative joint Borel densities can be integrated in either order; parameter integrals are measurable. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

## Verification
1.1 For $u<v<T$, the integrand $1_A(x)p_{T-v}(x)q(T-v,x;T-u,y)$ is jointly Borel and nonnegative; Tonelli [F2] makes its integral measurable in $y$, and countable additivity in $A$ follows from countable additivity of the integral. For $v=T$, the integrand $1_A(x)q(0,x;T-u,y)$ is jointly Borel and nonnegative relative to the finite measure $\mu$, so the same parameter-integral argument applies. All denominators are positive because $T-u>0$. [F2, A1, F1]

2.1 If $v<T$, the forward marginal identity [A1] gives $\int p_{T-v}(x)q(T-v,x;T-u,y)dx=p_{T-u}(y)$; if $v=T$, the same identity with initial measure $\mu$ gives $\int q(0,x;T-u,y)\mu(dx)=p_{T-u}(y)$. Thus both formulas have total mass one. The equal-time kernel is a probability measure by definition. [A1, F1, step 1.1]

3.1 For $u<v<w<T$, composing the density ratios cancels $p_{T-v}(x)$, and Tonelli followed by forward Chapman–Kolmogorov [A1] gives $K_{u,v}K_{v,w}=K_{u,w}$. If $w=T$, the same computation leaves $\mu(dz)$ times $\displaystyle \int q(0,z;T-v,x)q(T-v,x;T-u,y)dx=q(0,z;T-u,y),$ so the endpoint formula gives $K_{u,v}K_{v,T}=K_{u,T}$. Cases with equal adjacent times use the identity kernel. [A1, F2, step 1.1] ∎
