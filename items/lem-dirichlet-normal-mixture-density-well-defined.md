---
id: lem-dirichlet-normal-mixture-density-well-defined
kind: lemma
title: "The Dirichlet normal-mixture density is jointly measurable and normalized"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-probability-measure
  - def-measure-kernel-and-probability-kernel
  - thm-measurability-of-integration-against-a-kernel
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - lem-normal-location-scale-density
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Subhashis Ghosal and Aad W. van der Vaart, Posterior convergence rates of Dirichlet mixtures at smooth densities, §1.1"
      url: "https://arxiv.org/pdf/0708.1885"
    - title: "Subhashis Ghosal and Aad W. van der Vaart, Fundamentals of Nonparametric Bayesian Inference, §6.3"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/bayesianstatistics"
---

## Statement

Let $\mathcal P(\mathbb R)$ be the probability measures on the Borel sets of
$\mathbb R$, equipped with the evaluation sigma-algebra, and let $\sigma>0$.
For $F\in\mathcal P(\mathbb R)$ define
$$p_{F,\sigma}(x):=\int_{\mathbb R}\frac{1}{\sigma\sqrt{2\pi}}\exp\!\left(-\frac{(x-z)^2}{2\sigma^2}\right)F(dz).$$
Then $(F,\sigma,x)\mapsto p_{F,\sigma}(x)$ is jointly measurable,
$0<p_{F,\sigma}(x)\le(\sigma\sqrt{2\pi})^{-1}$ for every $(F,\sigma,x)$,
and $\int_{\mathbb R}p_{F,\sigma}(x)\,dx=1$. In particular it is the
Lebesgue density of the convolution of $F$ with $N(0,\sigma^2)$.

## Facts & Assumptions

**Given:** The evaluation sigma-algebra on $\mathcal P(\mathbb R)$, $F\in\mathcal P(\mathbb R)$, and $\sigma>0$.

[A1] Assume AC for the library normal location-scale density interface. [[def-axiom-of-choice]]

[F1] [[lem-normal-location-scale-density]]: $z\mapsto(\sigma\sqrt{2\pi})^{-1}\exp(-(x-z)^2/(2\sigma^2))$ is the Lebesgue density of $N(x,\sigma^2)$ and integrates to one.

[F2] [[def-probability-measure]] and [[def-measure-kernel-and-probability-kernel]]: each $F$ is a probability measure, and the evaluation map $(F,A)\mapsto F(A)$ makes $K((F,\sigma,x),A):=F(A)$ a probability kernel from $\mathcal P(\mathbb R)\times(0,\infty)\times\mathbb R$ to $\mathbb R$.

[F3] [[thm-measurability-of-integration-against-a-kernel]]: integrating a nonnegative product-measurable function against a probability kernel gives a measurable function of the kernel's input.

[F4] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative measurable functions on product measure spaces may be integrated in either order.

## Proof

**Given:** The hypotheses in the Statement.

1.1 The kernel $K$ in [F2] is a probability kernel because, for fixed $(F,\sigma,x)$, $A\mapsto F(A)$ is a probability measure, while for fixed Borel $A$, $(F,\sigma,x)\mapsto F(A)$ is measurable by the evaluation sigma-algebra. The integrand $(\sigma,x,z)\mapsto(\sigma\sqrt{2\pi})^{-1}\exp(-(x-z)^2/(2\sigma^2))$ is continuous on $(0,\infty)\times\mathbb R^2$ and hence product-measurable. Therefore [F3] makes its integral against $K$ jointly measurable. [A1, F2, F3, given]

1.2 The integrand is strictly positive, so its integral against a probability measure is positive. It is bounded above by $(\sigma\sqrt{2\pi})^{-1}$, so the integral is finite and has the stated upper bound. [F1, given, algebra]

1.3 By [F4], $\int_{\mathbb R}p_{F,\sigma}(x)\,dx=\int_{\mathbb R}\left(\int_{\mathbb R}\frac{1}{\sigma\sqrt{2\pi}}e^{-(x-z)^2/(2\sigma^2)}\,dx\right)F(dz)=\int_{\mathbb R}1\,F(dz)=1,$ where the inner integral is one by [F1] and $F$ has total mass one. Thus $p_{F,\sigma}$ is a probability density. [F1, F4, given, algebra]

2.1 For every Borel set $B\subseteq\mathbb R$, Tonelli [F4] gives $\int_Bp_{F,\sigma}(x)\,dx=\int_{\mathbb R}\left(\int_B\frac{1}{\sigma\sqrt{2\pi}}e^{-(x-z)^2/(2\sigma^2)}\,dx\right)F(dz)$. The inner integral is $N(z,\sigma^2)(B)$ by [F1], so the right side is the convolution measure $(F*N(0,\sigma^2))(B)$ by its definition. Hence this density represents the convolution law in the Statement. [F1, F4, given, algebra] ∎
