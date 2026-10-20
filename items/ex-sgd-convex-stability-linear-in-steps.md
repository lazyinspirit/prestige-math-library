---
id: ex-sgd-convex-stability-linear-in-steps
kind: example
title: The convex constant-step stability bound is linear in the step count
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - thm-sgd-stability-convex-loss
generation:
  role: example
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-20}}
sources:
  references:
    - title: "Moritz Hardt, Benjamin Recht, and Yoram Singer, Train faster, generalize better: Stability of stochastic gradient descent, arXiv-version Theorem 3.8 (conference Theorem 3.7)"
      url: "https://arxiv.org/pdf/1509.01240"
      locator: "§3.3, convex stability bound"
---

## Example

Let $n,T,d\ge1$, $L,\beta>0$, and let $(\mathsf X,\Sigma_X)$, $(\mathsf Y,\Sigma_Y)$, and $(\mathsf A,\Sigma_A)$ be measurable spaces. Let $P$ be a probability measure on $\mathsf X\times\mathsf Y$, let $\ell:\mathsf A\times\mathsf Y\to[0,+\infty)$ be measurable, and let $f_w:\mathsf X\to\mathsf A$ be measurable for every $w\in\mathbb R^d$. For $z=(x,y)$ put $g(w,z)=\ell(f_w(x),y)$ and assume $g$ and $\nabla_wg$ are jointly measurable. For every $z$, assume $g(\cdot,z)$ is totally differentiable and convex, its gradient is $\beta$-Lipschitz, and its values satisfy $|g(w,z)-g(v,z)|\le L\|w-v\|_2$. Let $S=(Z_1,\ldots,Z_n)$ be IID with law $P$, and define $R_P(f_w)=\int g(w,z)\,P(dz)$ and $\widehat R_S(f_w)=n^{-1}\sum_{i=1}^ng(w,Z_i)$. Let $I_1,\ldots,I_T$ be independent of $S$ with $\mathbb P(I_t=i)=1/n$ for each $t,i$; dependence across times is allowed. From fixed $w_0\in\mathbb R^d$, run $w_t=w_{t-1}-\alpha_t\nabla_wg(w_{t-1},Z_{I_t})$ and assume the resulting loss and risk maps are measurable and integrable. For the constant schedule $\alpha_t=1/\beta$, the stability and absolute expected-generalization upper bound is $2L^2T/(\beta n)$, which is linear in $T$ as a bound. This is an upper-bound calculation, not a lower bound on the actual stability or generalization gap.
## Example references

[[thm-sgd-stability-convex-loss]] supplies the convex SGD stability and expected-gap bound.

Hardt, Recht, and Singer, arXiv-version Theorem 3.8 (conference Theorem 3.7): [full arXiv paper](https://arxiv.org/pdf/1509.01240).

## Facts & Assumptions

**Given:** $n,T\ge1$, $L,\beta>0$, the convex theorem hypotheses, and the constant schedule $\alpha_t=1/\beta$.

[F1] [[thm-sgd-stability-convex-loss]]: for admissible deterministic steps, stability and the absolute expected-generalization gap are at most $\frac{2L^2}{n}\sum_{t=1}^T\alpha_t$.

## Verification

1.1 Since $\alpha_t=1/\beta\le2/\beta$, every step meets the convex theorem's step-size condition. The sum of the $T$ equal steps is $T/\beta$. [given, F1, algebra]

2.1 Substituting this sum into [F1] gives $\varepsilon_{\mathrm{stab}}\le\frac{2L^2}{n}\frac{T}{\beta}=\frac{2L^2T}{\beta n}$. [F1, step 1.1, algebra]

3.1 For fixed positive $L,\beta,n$, the displayed right-hand side is a constant multiple of $T$. It bounds the stability and expected gap from above and yields no corresponding lower bound. [given, step 2.1, algebra] ∎
