---
id: def-underdamped-langevin-equation-and-canonical-gibbs-density
kind: definition
title: "Underdamped Langevin equation and canonical Gibbs density"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-d-dimensional-brownian-motion
  - def-ito-sde-and-strong-solution
  - def-standard-normal-and-normal-laws
  - def-multivariate-normal-law
  - thm-non-negative-square-root-exists-and-is-unique
  - def-probability-measure
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
justified_by: []
axiom_base: Full AC
axiom_use: "AC is inherited through the Brownian, Itô-SDE, normal-law, Lebesgue, and density-measure interfaces; this item makes no independent selection."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Jean-Noël Roux, Stéphane Rodts, and Gabriel Stoltz, Introduction à la physique statistique et à la physique quantique, ENPC course text, §§5.2.1–5.2.2, pp. 82–87"
      url: "https://cermics.enpc.fr/~stoltz/poly_phys_stat_quantique.pdf"
    - title: "Benedict Leimkuhler and Charles Matthews, Rational Construction of Stochastic Numerical Methods for Molecular Sampling, §§2–3 and Appendix"
      url: "https://arxiv.org/pdf/1203.5428"
---

## Definition

Assume the Axiom of Choice. Let $d\ge1$ be finite, let $M\in\mathbb R^{d\times d}$ be symmetric positive definite (that is, $x^TMx>0$ for every nonzero $x$), and let $\beta,\gamma>0$. Then $M$ is invertible, and $M^{1/2}$ denotes its unique symmetric positive square root. Let $W_t$ be standard $d$-dimensional Brownian motion relative to a complete usual filtration, and let $V:\mathbb R^d\to\mathbb R$ be differentiable. The **underdamped Langevin equation** is the It\^o SDE on phase space $\mathbb R^d_q\times\mathbb R^d_p$
$$dQ_t=M^{-1}P_t\,dt,\qquad dP_t=-\nabla V(Q_t)\,dt-\gamma P_t\,dt+\sqrt{2\gamma\beta^{-1}}\,M^{1/2}dW_t.$$
Its Hamiltonian is $H(q,p)=\tfrac12p^TM^{-1}p+V(q)$. If $Z=\int_{\mathbb R^{2d}}e^{-\beta H(q,p)}\,dq\,dp$ is finite and positive, the **canonical Gibbs probability** is the probability measure with density $\rho(q,p)=Z^{-1}e^{-\beta H(q,p)}$ with respect to $2d$-dimensional Lebesgue measure. This definition alone asserts no stationarity or ergodicity.

For the finite-time order results below, $D^jV$ denotes the $j$th derivative as a multilinear map. The notation $C_b^k$ means that a function and each of its derivatives through order $k$ are continuous and bounded. The notation $C_P^k$ means that a function and each of its derivatives through order $k$ are continuous and bounded by $C(1+|z|^r)$ for some finite constants $C,r$ that may depend on the derivative. These growth conventions are used only where stated.

## Remarks

The noise covariance is $2\gamma\beta^{-1}M$, so the Maxwell momentum covariance in the canonical density is $\beta^{-1}M$. The friction and covariance convention is fixed by the displayed equation. $\beta$ is inverse temperature and $\gamma$ is the scalar friction rate.
