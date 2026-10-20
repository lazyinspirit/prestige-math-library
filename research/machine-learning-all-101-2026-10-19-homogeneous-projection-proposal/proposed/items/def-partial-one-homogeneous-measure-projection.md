---
id: def-partial-one-homogeneous-measure-projection
kind: definition
title: Partially one-homogeneous signed measure projection
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [def-feature-measure-energy, def-total-variation-of-a-signed-or-complex-measure]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
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

Let $(\Theta,\mathcal T)$ be a measurable space, equip $\mathbb R\times\Theta$ with $\mathcal B(\mathbb R)\otimes\mathcal T$, and let $\mu$ be a finite nonnegative measure on this product sigma-algebra, and assume $\int|w|d\mu(w,\theta)<\infty$. For each measurable $B\subseteq\Theta$, define

$$h^1(\mu)(B)=\int_{\mathbb R\times B}w\,d\mu(w,\theta).$$

Put $\alpha=(\pi_\Theta)_\#(w_+\mu)$ and $\beta=(\pi_\Theta)_\#(w_-\mu)$, where $w_+=\max(w,0)$ and $w_-=\max(-w,0)$. These are finite nonnegative measures and $h^1(\mu)=\alpha-\beta$. They are a positive-measure decomposition, not in general the Jordan positive and negative parts: mass with both signs of $w$ can project to the same $\theta$ and cancel. Define also the projected absolute-weight measure $\lambda_\mu=\alpha+\beta=(\pi_\Theta)_\#(|w|\mu)$. Then the total-variation measure satisfies

$$|h^1(\mu)|(B)\le\lambda_\mu(B)=\int_{\mathbb R\times B}|w|\,d\mu\qquad(B\in\mathcal T).$$

Indeed every countable measurable partition $(B_j)$ of $B$ gives $\sum_j|\alpha(B_j)-\beta(B_j)|\le\alpha(B)+\beta(B)$; take the supremum in the definition of total variation. The inequality can be strict: on a one-point $\Theta=\{\theta\}$, $\mu=\delta_{(1,\theta)}+\delta_{(-1,\theta)}$ has $h^1(\mu)=0$, whereas $\alpha=\beta=\delta_\theta$ and $\lambda_\mu=2\delta_\theta$. For every bounded measurable $\varphi:\Theta\to\mathbb R$, $\int\varphi\,dh^1(\mu)=\int w\varphi(\theta)d\mu$; when $\Phi(w,\theta)=w\varphi(\theta)$, the corresponding Bochner feature integral factors through this signed measure whenever it exists. For every bounded nonnegative measurable $\widetilde V$,

$$\int_\Theta\widetilde V\,d|h^1(\mu)|\le\int_{\mathbb R\times\Theta}|w|\widetilde V(\theta)\,d\mu.$$

Thus the signed projection alone does not determine this penalty; in the same cancellation example with $\widetilde V\equiv1$ the penalty is $2$, while the zero lift has the same signed projection and penalty $0$. For the source Euclidean specialization, take $\Theta\subseteq\mathbb R^{d-1}$ with its relative Borel sigma-algebra; the product sigma-algebra is then the relative Euclidean Borel sigma-algebra. No topology or Borel structure is presumed for general $(\Theta,\mathcal T)$.

## Definition references

[[def-feature-measure-energy]]

[[def-total-variation-of-a-signed-or-complex-measure]]

[Chizat and Bach, Appendix A.2.1 and Appendix C.2.2](https://arxiv.org/pdf/1805.09545)

[Ambrosio, Gigli, and Savaré, Chapters 8 and 10](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)
