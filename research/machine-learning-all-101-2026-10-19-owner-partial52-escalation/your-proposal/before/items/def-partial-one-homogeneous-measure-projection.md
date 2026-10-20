---
id: def-partial-one-homogeneous-measure-projection
kind: definition
title: Partially one-homogeneous signed measure projection
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [def-feature-measure-energy, def-measure, def-signed-measure, def-total-variation-of-a-signed-or-complex-measure, def-bochner-integrable-function, thm-bochner-integrability-criterion, thm-bounded-linear-maps-commute-with-bochner-integration, thm-indefinite-integral-of-a-nonnegative-function-is-a-measure, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-linearity-of-the-lebesgue-integral-on-l-one]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport"
      url: "https://arxiv.org/pdf/1805.09545"
    - title: "Luigi Ambrosio, Nicola Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
---
## Definition

Let $(\Theta,\mathcal T)$ be a measurable space and let $\mu$ be a finite nonnegative measure on $(\mathbb R\times\Theta,\mathcal B(\mathbb R)\otimes\mathcal T)$ such that $\int|w|d\mu(w,\theta)<\infty$. Set $w_+=\max(w,0)$ and $w_-=\max(-w,0)$, and define finite nonnegative measures on $\Theta$ by

$$\alpha_\mu(B)=\int_{\mathbb R\times B}w_+d\mu,\qquad\beta_\mu(B)=\int_{\mathbb R\times B}w_-d\mu\quad(B\in\mathcal T).$$

The partially one-homogeneous signed projection is

$$h^1(\mu)=\alpha_\mu-\beta_\mu,\qquad h^1(\mu)(B)=\int_{\mathbb R\times B}w\,d\mu(w,\theta).$$

It is a finite signed measure. For every bounded measurable $\varphi:\Theta\to\mathbb R$, define its integral against this signed projection by

$\int_\Theta\varphi\,dh^1(\mu):=\int_\Theta\varphi d\alpha_\mu-\int_\Theta\varphi d\beta_\mu=\int_{\mathbb R\times\Theta}w\varphi(\theta)d\mu(w,\theta).$

Put $\lambda_\mu=\alpha_\mu+\beta_\mu$, so $\lambda_\mu(B)=\int_{\mathbb R\times B}|w|d\mu$. Its total variation satisfies $|h^1(\mu)|(B)\le\lambda_\mu(B)$ for every $B\in\mathcal T$. Therefore $\int\widetilde Vd|h^1(\mu)|\le\int |w|\widetilde V(\theta)d\mu$ for every bounded nonnegative measurable $\widetilde V$.

If $\mathcal H$ is a separable real Hilbert space and $\varphi:\Theta\to\mathcal H$ is bounded and strongly measurable, then for every $z\in\mathcal H$ the feature moment satisfies $\langle z,\int w\varphi(\theta)d\mu\rangle=\int\langle z,\varphi(\theta)\rangle dh^1(\mu)$, with the scalar integral defined above. The raw measures $\alpha_\mu$ and $\beta_\mu$ record positive and negative parameter weights before cancellation and need not be mutually singular; for example, if $\mu$ assigns mass one to each of $(1,\theta_0)$ and $(-1,\theta_0)$ and zero elsewhere, then $\alpha_\mu=\beta_\mu$ both assign mass one to $\theta_0$ while $h^1(\mu)=0$. Thus the signed projection does not by itself determine a penalty of the form $\int|w|\widetilde V(\theta)d\mu$.

## Definition references

[[def-feature-measure-energy]]

[[def-bochner-integrable-function]]

[[thm-bochner-integrability-criterion]]

[[thm-bounded-linear-maps-commute-with-bochner-integration]]

[[def-total-variation-of-a-signed-or-complex-measure]]

[[def-measure]]

[[def-signed-measure]]

[[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]]

[[prop-order-and-scalar-rules-for-the-nonnegative-integral]]

[[thm-linearity-of-the-lebesgue-integral-on-l-one]]

[Chizat and Bach, Appendix A.2.1 and Appendix C.2.2](https://arxiv.org/pdf/1805.09545)

[Ambrosio, Gigli, and Savaré, Chapters 8 and 10](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

## Facts & Assumptions

**Given:** $(\Theta,\mathcal T)$, $\mu$, and the integrability assumption in the Definition.

[F1] For a nonnegative measurable $f$, the set function $B\mapsto\int_{\mathbb R\times B}f(w,\theta)d\mu$ is a measure. [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]]

[F2] The nonnegative integral is monotone, so $0\le w_+,w_-\le|w|$ implies each of these measures has total mass at most $\int|w|d\mu$. [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]

[F3] A signed measure is a countably additive set function taking at most one infinite value; in particular a finite difference of finite measures is a finite signed measure. [[def-signed-measure]]

[F4] Total variation is the supremum of sums over countable measurable partitions. [[def-total-variation-of-a-signed-or-complex-measure]]

[F5] The Lebesgue integral is linear on integrable functions. [[thm-linearity-of-the-lebesgue-integral-on-l-one]]

[F6] A strongly measurable Banach-valued function is Bochner integrable exactly when its norm has finite integral. [[thm-bochner-integrability-criterion]]

[F7] Bounded linear maps commute with Bochner integration. [[thm-bounded-linear-maps-commute-with-bochner-integration]]

## Proof

**Given:** The measurable space and measure in the Definition.

1.1 The coordinate $w$ is measurable, so $w_+$ and $w_-$ are nonnegative measurable functions. By [F1], $\alpha_\mu$ and $\beta_\mu$ are measures, and [F2] gives $\alpha_\mu(\Theta),\beta_\mu(\Theta)\le\int|w|d\mu<\infty$. [given, F1, F2]

2.1 For each measurable $B$, $w=w_+-w_-$ and both integrals are finite, so $\int_{\mathbb R\times B}w d\mu=\alpha_\mu(B)-\beta_\mu(B)$. Countable additivity of both finite measures makes their difference countably additive with finite real values, hence a finite signed measure by [F3]. For every $B\in\mathcal T$ and every countable measurable partition $(B_j)$ of $B$, $\sum_j|h^1(\mu)(B_j)|\le\sum_j(\alpha_\mu(B_j)+\beta_\mu(B_j))=\alpha_\mu(B)+\beta_\mu(B)$; taking the supremum in [F4] proves the stated pointwise total-variation bound. The weighted penalty inequality follows by monotonicity of the nonnegative integral, first for simple nonnegative weights and then by increasing simple approximation. For a finite-valued simple $\varphi$, linearity [F5] and the definitions of $\alpha_\mu,\beta_\mu$ give $\int\varphi d\alpha_\mu-\int\varphi d\beta_\mu=\int w\varphi d\mu$. For general bounded measurable $\varphi$, choose $M$ with $|\varphi|\le M$ and partition $[-M,M]$ into finitely many intervals of length at most $1/n$; assigning one endpoint on each measurable inverse image gives a finite-valued simple $\varphi_n$ with $\|\varphi_n-\varphi\|_\infty\le1/n$. The errors in the two $\alpha_\mu,\beta_\mu$ integrals are at most $(\alpha_\mu(\Theta)+\beta_\mu(\Theta))/n$, and the error in the $w\varphi$ integral is at most $\int|w|d\mu/n$. Letting $n\to\infty$ proves the identity. [F3, F4, F5, given, step 1.1, algebra]

3.1 Let $\varphi:\Theta\to\mathcal H$ be bounded and strongly measurable. Simple approximants to $\varphi$ and to the measurable scalar coordinate $w$ show that $w\varphi(\theta)$ is strongly measurable; moreover $\|w\varphi(\theta)\|\le|w|\|\varphi\|_\infty$, so [F6] makes it Bochner integrable. For each $z\in\mathcal H$, [F7] moves the bounded functional $x\mapsto\langle z,x\rangle$ inside that Bochner integral, and step 2.1 identifies the resulting scalar integral with the pairing in the Definition. Equality of all inner products proves the displayed feature-moment factorization. [F2, F6, F7, given, step 2.1] ∎
