---
id: lem-graphical-lasso-profiled-gaussian-likelihood
kind: lemma
title: "The Gaussian profile likelihood reduces to the trace score"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-graphical-lasso-objective
  - def-multivariate-normal-law
  - thm-nondegenerate-multivariate-normal-law-has-density
  - thm-independent-random-elements-have-product-joint-law
  - def-measure-kernel-and-probability-kernel
  - lem-finite-products-of-dominated-kernels-have-product-density
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "The Elements of Statistical Learning, second edition"
      url: "https://course.ccs.neu.edu/ds4420sp20/readings/ESLII.pdf"
      locator: "§17.3.1, equations (17.10)–(17.11), printed pp. 631–632"
    - title: "Robin Evans, Graphical Models course notes"
      url: "https://www.stats.ox.ac.uk/~evans/gms/lecturenotes.pdf"
      locator: "§5.2, printed p. 25"
---

## Statement

Assume AC. Let $N,p\ge1$, let $x_1,\ldots,x_N\in\mathbb R^p$ be independent observations with common law $N_p(\mu,\Sigma)$, where $\Sigma$ is real symmetric positive definite; put $\Theta=\Sigma^{-1}$, $\bar x=N^{-1}\sum_{r=1}^N x_r$, and $S=N^{-1}\sum_{r=1}^N(x_r-\bar x)(x_r-\bar x)^T$. The log-likelihood maximized over $\mu$ is
$$-\frac{Np}{2}\log(2\pi)+\frac N2\bigl(\log\det\Theta-\operatorname{tr}(S\Theta)\bigr).$$
Thus, after removing the additive constant and multiplying by $2/N$, the normalized Gaussian profile-likelihood score is $\log\det\Theta-\operatorname{tr}(S\Theta)$.

## Statement references

[The Elements of Statistical Learning, §17.3.1](https://course.ccs.neu.edu/ds4420sp20/readings/ESLII.pdf)

[Evans, Graphical Models, §5.2](https://www.stats.ox.ac.uk/~evans/gms/lecturenotes.pdf)

## Facts & Assumptions

**Given:** AC, observations $x_1,\ldots,x_N\in\mathbb R^p$, an iid model $N_p(\mu,\Sigma)$ with $\Sigma$ positive definite, and $\Theta=\Sigma^{-1}$.

[F1] For the data, $\bar x=N^{-1}\sum_r x_r$ and $S=N^{-1}\sum_r(x_r-\bar x)(x_r-\bar x)^T$; the score is defined on symmetric positive-definite $\Theta$. [[def-graphical-lasso-objective]].

[F2] A positive-definite multivariate normal law has density $(2\pi)^{-p/2}\det(\Sigma)^{-1/2}\exp(-\tfrac12(x-\mu)^T\Sigma^{-1}(x-\mu))$. [[thm-nondegenerate-multivariate-normal-law-has-density]].

[F3] The law $N_p(\mu,\Sigma)$ is the multivariate normal law with the given mean and covariance. [[def-multivariate-normal-law]].

[F4] A probability kernel has probability-measure sections and measurable evaluations; a constant probability law on a singleton source is a probability kernel. [[def-measure-kernel-and-probability-kernel]].

[F5] A finite product of dominated probability kernels has the product density relative to the product reference measure. [[lem-finite-products-of-dominated-kernels-have-product-density]].

[F6] Independent random elements have joint law equal to the finite product of their marginal laws. [[thm-independent-random-elements-have-product-joint-law]].

[A1] AC is an explicit hypothesis of the cited multivariate-normal density supplier; here AC means every family of nonempty sets has a choice function. [[thm-nondegenerate-multivariate-normal-law-has-density]] [[def-axiom-of-choice]].

## Proof

1.1 Each independent observation with the common law in [F3] has the density in [F2]. On the one-point source $\{*\}$, the constant law $K_r(*,\cdot)=N_p(\mu,\Sigma)$ is a probability kernel: its sections are probability measures and each evaluation map is constant, hence measurable [F4]. The density $f_r(*,x)=f_{\mu,\Theta}(x)$ is continuous in $x$ and constant in $*$, hence jointly measurable; [F5] gives the product law density $\prod_{r=1}^N f_{\mu,\Theta}(x_r)$. By [F6], independence identifies this product law with the joint observation law. Its log-likelihood for fixed $\mu$ and $\Theta$ is $$L(\mu,\Theta)=-\frac{Np}{2}\log(2\pi)+\frac N2\log\det\Theta-\frac12\sum_{r=1}^N(x_r-\mu)^T\Theta(x_r-\mu).$$ [given, A1, F2, F3, F4, F5, F6]

2.1 Write $y_r=x_r-\bar x$, so $\sum_r y_r=0$ and $x_r-\mu=y_r+(\bar x-\mu)$. Expanding and summing removes the cross term: $$\sum_{r=1}^N(x_r-\mu)^T\Theta(x_r-\mu)=\sum_{r=1}^Ny_r^T\Theta y_r+N(\mu-\bar x)^T\Theta(\mu-\bar x).$$ [given, F1, step 1.1, algebra]

3.1 Positive definiteness of $\Theta$ makes the last quadratic term nonnegative and equal to zero exactly at $\mu=\bar x$. Therefore $\bar x$ uniquely maximizes $L(\mu,\Theta)$ over $\mu$. [given, step 2.1, algebra]

4.1 By [F1], $\sum_r y_ry_r^T=NS$. Cyclicity of the finite matrix trace gives $\sum_r y_r^T\Theta y_r=\sum_r\operatorname{tr}(\Theta y_ry_r^T)=N\operatorname{tr}(S\Theta)$. Substituting this identity and $\mu=\bar x$ into step 1.1 yields the displayed profile log-likelihood and its normalization. [F1, step 1.1, step 2.1, step 3.1, algebra] ∎
