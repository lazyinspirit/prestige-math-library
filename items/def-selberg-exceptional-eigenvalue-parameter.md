---
id: def-selberg-exceptional-eigenvalue-parameter
kind: definition
title: Exceptional Maass Eigenvalue Parameter
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-maass-spectral-parameter
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "A. Knightly and C. Li, Kuznetsov's Trace Formula and the Hecke Eigenvalues of Maass Forms"
      url: "https://arxiv.org/pdf/1202.0189v1"
      locator: "§4.1, printed p. 27: the Laplace eigenvalue and exceptional spectral-parameter convention."
    - title: "A. Pascadi, On the Exponents of Distribution of Primes and Smooth Numbers"
      url: "https://arxiv.org/pdf/2505.00653v2"
      locator: "§1.4: θ_f=2|Im(t_f)|=sqrt(max(0,1−4λ_f)) and θ_f=0 for real tempered t_f."
---

## Definition

Let $u\not\equiv0$ be a smooth, square-integrable function on a congruence
quotient of the upper half-plane that is an eigenfunction of the positive
hyperbolic Laplacian
$$\Delta=-y^2\left(\partial_x^2+\partial_y^2\right)$$
with eigenvalue $\lambda\ge0$. Let $t\in\mathbb R_{\ge0}\cup i[0,1/2]$ be its
Maass spectral parameter, determined by $\lambda=1/4+t^2$. Define the
exceptional-eigenvalue parameter by
$$\theta(\lambda)=2|\operatorname{Im}t|=\sqrt{\max(0,1-4\lambda)}.$$
Thus $\theta(\lambda)=0$ for $\lambda\ge1/4$, and
$\theta(\lambda)=\sqrt{1-4\lambda}$ for $0\le\lambda<1/4$. In particular,
$\theta(0)=1$ and $\theta(1/4)=0$. The definition makes no lower-bound claim
for $\lambda$.

## Definition references

[A. Knightly and C. Li, *Kuznetsov's Trace Formula and the Hecke Eigenvalues of Maass Forms*](https://arxiv.org/pdf/1202.0189v1)

[A. Pascadi, *On the Exponents of Distribution of Primes and Smooth Numbers*](https://arxiv.org/pdf/2505.00653v2)
