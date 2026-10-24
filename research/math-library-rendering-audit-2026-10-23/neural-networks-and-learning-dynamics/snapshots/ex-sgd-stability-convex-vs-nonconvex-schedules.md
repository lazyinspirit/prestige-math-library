---
id: ex-sgd-stability-convex-vs-nonconvex-schedules
kind: example
title: Constant and inverse-time schedules give different stability bounds
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - thm-sgd-stability-convex-loss
  - thm-sgd-stability-nonconvex-loss
generation:
  role: example
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-20}}
sources:
  references:
    - title: "Moritz Hardt, Benjamin Recht, and Yoram Singer, Train faster, generalize better: Stability of stochastic gradient descent, arXiv-version Theorems 3.8 and 3.12 (conference Theorems 3.7 and 3.8)"
      url: "https://arxiv.org/pdf/1509.01240"
      locator: "§§3.3–3.4, convex and nonconvex stability bounds"
    - title: "Nikolai Matni, ESE680 Lecture 16: Algorithmic Stability and Stochastic Gradient Descent, Theorem 3"
      url: "https://nikolaimatni.github.io/courses/ese680-fall2019/scribe-notes/lecture16.pdf"
      locator: "§4, convex SGD stability calculation, PDF pp. 5–6"
---

## Example

For each $r\in\{1,2\}$, let $(\mathsf X_r,\Sigma_{X_r})$, $(\mathsf Y_r,\Sigma_{Y_r})$, and $(\mathsf A_r,\Sigma_{A_r})$ be measurable spaces, let $P_r$ be a probability measure on $\mathsf X_r\times\mathsf Y_r$, let $\ell_r:\mathsf A_r\times\mathsf Y_r\to[0,+\infty)$ be measurable, and let $f_w^{(r)}:\mathsf X_r\to\mathsf A_r$ be measurable for $w\in\mathbb R^d$, where $d\ge1$. Put $g_r(w,(x,y))=\ell_r(f_w^{(r)}(x),y)$ and assume $g_r$ and $\nabla_wg_r$ are jointly measurable. Let $n=1000$, $T=100$, let $S_r=(Z_1^{(r)},\ldots,Z_n^{(r)})$ be IID with law $P_r$, and define $R_{P_r}(f_w^{(r)})=\int g_r(w,z)\,P_r(dz)$ and $\widehat R_{S_r}(f_w^{(r)})=n^{-1}\sum_{i=1}^ng_r(w,Z_i^{(r)})$. For each regime, let $I_1^{(r)},\ldots,I_T^{(r)}$ be independent of $S_r$ with $\mathbb P(I_t^{(r)}=i)=1/n$ for every $t,i$; dependence between times is allowed. Start from fixed $w_0^{(r)}\in\mathbb R^d$ and use $w_t^{(r)}=w_{t-1}^{(r)}-\alpha_t^{(r)}\nabla_wg_r(w_{t-1}^{(r)},Z_{I_t^{(r)}}^{(r)})$. In regime $r=1$, assume each $g_1(\cdot,z)$ is totally differentiable and convex, has $1$-Lipschitz gradient, and is $1$-Lipschitz in values; use $\alpha_t^{(1)}=1$. In regime $r=2$, assume each $g_2(\cdot,z)$ is totally differentiable, takes values in $[0,1]$, has $1$-Lipschitz gradient and is $1$-Lipschitz in values, with no convexity assumption; use $\alpha_t^{(2)}=1/t$. Assume the displayed output risk variables are measurable and integrable. The convex theorem's stability and absolute expected-generalization upper bound is $1/5$. The nonconvex theorem's upper bound is $20\sqrt2/999$. This comparison concerns only these theorem certificates under their distinct loss hypotheses, not the actual stability or generalization gaps of arbitrary training problems.
## Example references

[[thm-sgd-stability-convex-loss]] supplies the convex bound.

[[thm-sgd-stability-nonconvex-loss]] supplies the nonconvex bound.

Hardt, Recht, and Singer, arXiv-version Theorems 3.8 and 3.12 (conference Theorems 3.7 and 3.8): [full arXiv paper](https://arxiv.org/pdf/1509.01240).

## Facts & Assumptions

**Given:** $n=1000$, $T=100$, $L=\beta=1$, constant convex-regime steps $\alpha_t=1$, and nonconvex-regime steps $\alpha_t=1/t$ with $c=1$.

[F1] [[thm-sgd-stability-convex-loss]]: for admissible convex-regime steps, the bound is $2L^2n^{-1}\sum_t\alpha_t$.

[F2] [[thm-sgd-stability-nonconvex-loss]]: for $n\ge2$ and nonincreasing $\alpha_t\le c/t$, the bound is $(1+1/(\beta c))(2cL^2)^{1/(\beta c+1)}T^{\beta c/(\beta c+1)}/(n-1)$.

## Verification

1.1 For the convex schedule, $1\le2/\beta=2$ and $\sum_{t=1}^{100}\alpha_t=100$. Substitution in [F1] gives $2\cdot100/1000=1/5$. [given, F1, algebra]

1.2 The nonconvex schedule is nonincreasing, satisfies $\alpha_t=c/t$, and $q=\beta c=1$. Substitution in [F2] gives $2\sqrt{2}\sqrt{100}/999=20\sqrt2/999$. [given, F2, algebra]

2.1 Both denominators are positive. The comparison $20\sqrt2/999<1/5$ is equivalent to $100\sqrt2<999$; squaring these positive quantities reduces it to $20000<998001$. This compares only the stated upper bounds. [step 1.1, step 1.2, algebra] ∎
