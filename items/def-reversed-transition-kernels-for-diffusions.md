---
id: def-reversed-transition-kernels-for-diffusions
kind: definition
title: Bayes-reversed transition kernels for a diffusion
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
page: anderson-reverse-time-diffusion
dependency_level: 0
deps:
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

Let $T>0$, let $p_t$ be a strictly positive probability density on $\mathbb R^d$ for each $t\in[0,T]$, and let $q(s,x;t,y)$ be a jointly Borel, strictly positive transition density for $0\le s<t\le T$. Assume the marginal identity $p_t(y)=\int_{\mathbb R^d}p_s(x)q(s,x;t,y)\,dx$ and the Chapman–Kolmogorov identity $q(s,x;t,y)=\int_{\mathbb R^d}q(s,x;r,z)q(r,z;t,y)\,dz$ whenever $s<r<t$. For $0\le u<v\le T$ define
$$K_{u,v}(y,A)=\frac{\int_A p_{T-v}(x)q(T-v,x;T-u,y)\,dx}{p_{T-u}(y)}\qquad(A\subseteq\mathbb R^d\text{ Borel}),$$
and set $K_{u,u}(y,\cdot)=\delta_y$. This is the Bayes-reversed transition probability kernel from reverse time $u$ to reverse time $v$; its source state $y$ is the forward-time state at $T-u$ and its output $x$ is the state at $T-v$.

## Definition references

[Anderson, Sections 3–4](https://eva.fcien.udelar.edu.uy/pluginfile.php/166428/mod_resource/content/1/1982_andersonREVERSE-TIME%20DIFFUSION%20EQUATION%20MODELS.pdf): uses forward transition and marginal densities to describe finite-interval reversal under additional smoothness and uniqueness assumptions.

[Tang and Zhao, Section 2.2](https://arxiv.org/pdf/2402.07487): states the score-based reverse-drift formula and marks its derivation as heuristic.

## Facts & Assumptions

**Given:** the positive Borel densities and marginal and Chapman–Kolmogorov identities in the definition, the measure-kernel convention, and Tonelli's theorem for nonnegative measurable functions.

[F1] A probability kernel assigns a probability measure to each source state and has a measurable evaluation function for each Borel target set. [[def-measure-kernel-and-probability-kernel]]

[F2] The integral of a nonnegative jointly Borel function over one variable is measurable in the remaining variable, and iterated nonnegative integrals may be interchanged. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

## Verification
1.1 For fixed $u<v$ and Borel $A$, the integrand $1_A(x)p_{T-v}(x)q(T-v,x;T-u,y)$ is nonnegative and jointly Borel in $(y,x)$. Tonelli's parameter-integral clause [F2] makes its integral Borel in $y$; division by the positive Borel function $p_{T-u}(y)$ preserves measurability. For each fixed $y$ the numerator defines a measure in $A$ by countable additivity of the Lebesgue integral. [F2, F1]

2.1 Taking $A=\mathbb R^d$ in the formula gives $K_{u,v}(y,\mathbb R^d)=p_{T-u}(y)/p_{T-u}(y)=1$ by the marginal identity, so each $K_{u,v}(y,\cdot)$ is a probability measure. The identity kernel at $u=v$ is also a probability kernel. [F1, step 1.1]

3.1 If $u<v<w$, Tonelli and the two density ratios give $\displaystyle \int K_{v,w}(x,A)K_{u,v}(y,dx)=\frac{\int_A p_{T-w}(z)\int q(T-w,z;T-v,x)q(T-v,x;T-u,y)\,dx\,dz}{p_{T-u}(y)}.$ The inner integral is $q(T-w,z;T-u,y)$ by forward Chapman–Kolmogorov, so the expression is $K_{u,w}(y,A)$. If two adjacent times coincide, composition with the identity kernel gives the same equality. [F2, step 1.1] ∎
