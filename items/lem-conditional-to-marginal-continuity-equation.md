---
id: lem-conditional-to-marginal-continuity-equation
kind: lemma
title: Conditional continuity equations pass to the marginal path
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-probability-path-and-velocity-field
  - cor-mean-value-theorem
  - thm-dominated-convergence
  - thm-linearity-of-the-lebesgue-integral-on-l-one
justified_by: []
axiom_use: No choice principle is used.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yaron Lipman et al., Flow Matching for Generative Modeling, §3.1 and Appendix A"
      url: "https://arxiv.org/html/2210.02747"
    - title: "Peter Holderrieth and Ezra Erives, Introduction to Flow Matching and Diffusion Models, §3.2"
      url: "https://arxiv.org/html/2506.02070"
---

## Statement

Let $\lambda$, $\pi$, and $\rho$ be as in the conditional probability-path definition, and let $u$ be a jointly measurable vector field. Suppose that for $\pi$-almost every $x_1$, $\rho$ and each component of $\rho u$ are continuously differentiable in $(t,x)$ and satisfy the classical coordinate equation $\partial_t\rho_t+\sum_{j=1}^d\partial_{x_j}(\rho_tu_t^j)=0$ on $(0,1)\times\mathbb R^d$. This is an explicit algebraic hypothesis; for general $\lambda$ it is not the definition of measure transport. Suppose also that for every compact $K\subset(0,1)\times\mathbb R^d$ there is a nonnegative $G_K\in L^1(\pi)$ which, for $\pi$-almost every $x_1$, bounds on $K$ the absolute values of $\rho_t(x\mid x_1)$, $\partial_t\rho_t(x\mid x_1)$, each component of $\rho_t(x\mid x_1)u_t(x\mid x_1)$, and each derivative $\partial_{x_j}(\rho_tu_t^j)(x\mid x_1)$. If $p_t(x)>0$ on $(0,1)\times\mathbb R^d$, define
$$J_t(x):=\int_{\mathbb R^d}\rho_t(x\mid x_1)u_t(x\mid x_1)\,\pi(dx_1), \qquad u_t(x):=\frac{J_t(x)}{p_t(x)}.$$
Then $\partial_t p_t$ and each indicated flux derivative $\partial_{x_j}J_t^j$ exist and are continuous locally in $(t,x)$, and the marginal continuity equation
$$\partial_t p_t(x)+\sum_{j=1}^d\partial_{x_j}\!\left(p_t(x)u_t^j(x)\right)=0$$
holds on $(0,1)\times\mathbb R^d$. The domination hypothesis is a sufficient Leibniz condition for the time and spatial derivatives to pass through the $x_1$ integral.

## Statement references

[Lipman et al., §3.1 and Appendix A](https://arxiv.org/html/2210.02747)

[Holderrieth and Erives, §3.2](https://arxiv.org/html/2506.02070)

## Facts & Assumptions

**Given:** The conditional path and field, the conditional continuity equation, local C1 regularity, local integrable domination in the endpoint variable, and positivity of the mixture density as stated.

[F1] [[def-probability-path-and-velocity-field]]: $p_t(x)=\int\rho_t(x\mid x_1)\,\pi(dx_1)$. The classical coordinate equation and the local regularity used here are separate hypotheses in the Statement.

[F2] [[cor-mean-value-theorem]]: if a real function is continuous on a closed interval and differentiable in its interior, some interior derivative equals its endpoint difference quotient.

[F3] [[thm-dominated-convergence]]: pointwise convergence under one integrable majorant permits passage of a sequence of integrals to the limit.

[F4] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: the integral is linear for integrable scalar components.

## Proof

**Given:** The hypotheses in the Statement.

1.1 Fix a compact neighborhood $K$ of an interior point $(t,x)$. The bounds on $\rho$ and $\rho u$ make $p_t(x)$ and $J_t(x)$ finite, so positivity makes the quotient well-defined. For any sequence of nonzero increments $h_n\to0$ small enough that the time segment from $t$ to $t+h_n$ stays in $K$, the mean value theorem [F2] bounds the difference quotient of $\rho_{t+h_n}(x\mid x_1)-\rho_t(x\mid x_1)$ by $G_K(x_1)$. The quotient converges for $\pi$-almost every $x_1$ to $\partial_t\rho_t(x\mid x_1)$. Dominated convergence [F3] therefore gives $$\partial_t p_t(x)=\int_{\mathbb R^d}\partial_t\rho_t(x\mid x_1)\,\pi(dx_1).$$ The same argument for each flux component on its spatial coordinate segment gives $$\partial_{x_j}J_t^j(x)=\int_{\mathbb R^d}\partial_{x_j}\!\left(\rho_t(x\mid x_1)u_t^j(x\mid x_1)\right)\pi(dx_1).$$ The local continuity of these derivatives follows from their pointwise continuity in $(t,x)$ and the same integrable majorant. [given, F1, F2, F3]

2.1 Integrate the conditional continuity equation over $\pi$. All terms are integrable by $G_K$, so linearity [F4] and the identities of step 1.1 yield $$\partial_t p_t(x)+\sum_{j=1}^d\partial_{x_j}J_t^j(x) =\int_{\mathbb R^d}\left(\partial_t\rho_t(x\mid x_1)+\sum_{j=1}^d\partial_{x_j}(\rho_tu_t^j)(x\mid x_1)\right)\pi(dx_1)=0.$$ By definition $J_t=p_tu_t$ wherever $p_t>0$, proving the marginal continuity equation. [given, F1, F4, step 1.1, algebra] ∎

## Source notes

The source proofs explicitly require differentiation under the endpoint integral. This item states local integrable domination for every derivative it exchanges and derives those exchanges from the mean value theorem and dominated convergence.
