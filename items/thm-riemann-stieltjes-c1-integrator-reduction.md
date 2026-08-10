---
id: thm-riemann-stieltjes-c1-integrator-reduction
kind: theorem
title: "A continuously differentiable integrator reduces Stieltjes integration to ordinary integration"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-riemann-stieltjes-sum-and-integral,
       cor-riemann-stieltjes-agrees-with-riemann, cor-mean-value-theorem,
       def-derivative, def-continuity-real, thm-heine-cantor-r,
       def-darboux-integral, def-darboux-sums,
       thm-continuous-implies-integrable,
       cor-integrability-of-absolute-values-products-and-lattice-operations,
       thm-darboux-equals-riemann]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, Ch. 6, Theorem 6.17"
      url: "https://archive.org/details/principlesofmath00rudi"
pipeline_run: null
---

## Statement

Let $f:[a,b]\to\mathbb R$ be Riemann integrable. Suppose $\alpha$ is continuous on $[a,b]$, differentiable on $(a,b)$, and $\alpha'$ extends continuously to $[a,b]$. Then $f$ is Riemann–Stieltjes integrable with respect to $\alpha$ and

$$\int_a^b f\,d\alpha=\int_a^b f(x)\alpha'(x)\,dx.$$

## Facts & Assumptions

**Given:** A Riemann-integrable $f$ and an integrator $\alpha$ with continuous derivative on the compact interval.

[L1] The mean value theorem represents every increment of $\alpha$ as $\alpha'(\eta_i)(t_{i+1}-t_i)$ ([[cor-mean-value-theorem]]).

[L2] The continuous function $\alpha'$ is uniformly continuous ([[thm-heine-cantor-r]]).

[L3] The continuous function $\alpha'$ is Riemann integrable, so the product $f\alpha'$ is Riemann integrable ([[thm-continuous-implies-integrable]], [[cor-integrability-of-absolute-values-products-and-lattice-operations]]).

[L4] Riemann tagged sums converge to the Darboux integral ([[thm-darboux-equals-riemann]]).

## Proof

**Proof technique:** direct.

1.1 A Riemann-integrable function is bounded; choose $M$ with $|f|\le M$. For each partition interval, [L1] gives $\eta_i\in(t_i,t_{i+1})$ such that $\Delta_i\alpha=\alpha'(\eta_i)\Delta_i t$. Hence [L1]
$$S_\alpha(f;P,\xi)-\sum_i f(\xi_i)\alpha'(\xi_i)\Delta_i t=\sum_i f(\xi_i)(\alpha'(\eta_i)-\alpha'(\xi_i))\Delta_i t.$$

2.1 By [L2], the absolute value of the right side is at most $M(b-a)\omega_{\alpha'}(\lVert P\rVert)$, which tends to zero with the mesh. By [L3] and [L4], the second sum in step 1.1 tends to $\int_a^b f\alpha'$. Thus all Stieltjes sums have the same limit, proving both existence and the formula. [step 1.1, L2, L3, L4] ∎
