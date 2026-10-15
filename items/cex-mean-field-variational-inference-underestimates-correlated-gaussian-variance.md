---
id: cex-mean-field-variational-inference-underestimates-correlated-gaussian-variance
kind: counterexample
title: "Gaussian mean-field reverse KL underestimates correlated marginal variance"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-variational-family-and-elbo
  - def-countable-choice
  - def-finite-sigma-finite-and-semifinite-measures
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - lem-normal-density-has-total-mass-one
  - lem-normal-location-scale-density
  - lem-normal-location-scale-mean-and-variance
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-integration-against-a-density
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: direct
axiom_use: "AC is used for the library normal-density and moment suppliers and implies countable choice, which supplies the Lebesgue measure and sigma-finiteness hypotheses for Tonelli and Fubini. No other choice is used."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David M. Blei, Alp Kucukelbir, and Jon D. McAuliffe, Variational Inference: A Review for Statisticians (2017)"
      url: "https://www.cs.columbia.edu/~blei/papers/BleiKucukelbirMcAuliffe2017.pdf"
      locator: "§2.3, Figure 1 and discussion, PDF pp. 2–3"
    - title: "Michael I. Jordan, Zoubin Ghahramani, Tommi S. Jaakkola, and Lawrence K. Saul, An Introduction to Variational Methods for Graphical Models (1999)"
      url: "https://people.eecs.berkeley.edu/~jordan/papers/variational-intro.pdf"
      locator: "§6.3.1, printed pp. 216–218, PDF pp. 33–35"
---

## Statement refuted

Under AC, the claim that maximizing the ELBO over independent Gaussian factors always recovers the target's marginal variances is false, even for a nonsingular centered bivariate Gaussian target.

## Facts & Assumptions

**Given:** Assume AC. Fix $0<|\rho|<1$ and put $\beta=1-\rho^2$. On $\mathbb R^2$ with product reference measure $\mu=\lambda_1\otimes\lambda_1$, take the target density
$$\gamma_\rho(x,y)=\frac1{2\pi\sqrt\beta}\exp\!\left(-\frac{x^2-2\rho xy+y^2}{2\beta}\right)$$
and independent Gaussian variational factors $q(x,y)=g_{m_1,v_1}(x)g_{m_2,v_2}(y)$ with $v_1,v_2>0$, where $g_{m,v}(z)=(2\pi v)^{-1/2}e^{-(z-m)^2/(2v)}$.

[F1] [[def-variational-family-and-elbo]]: admissibility requires support on $\{\pi>0\}$ and finite $\int q(|\log\gamma|+|\log q|)d\mu$.

[F2] [[def-variational-family-and-elbo]]: $\operatorname{ELBO}(q)=\int q(\log\gamma-\log q)d\mu$.

[A1] AC implies countable choice by restriction to any countable family of nonempty sets. [[def-axiom-of-choice]] [[def-countable-choice]]

[F3] The standard normal density $\phi(t)=(2\pi)^{-1/2}e^{-t^2/2}$ has Lebesgue mass one. [[lem-normal-density-has-total-mass-one]]

[F4] For $v>0$, $g_{m,v}(t)=v^{-1/2}\phi((t-m)/\sqrt v)$ is the Lebesgue density of $N(m,v)$. [[lem-normal-location-scale-density]]

[F5] A variable with law $N(m,v)$ has mean $m$ and variance $v$. [[lem-normal-location-scale-mean-and-variance]]

[F6] Tonelli applies to nonnegative functions and Fubini applies to absolutely integrable functions on sigma-finite product spaces. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[F7] Integrating against a density measure agrees with integrating the product against the base measure. [[thm-integration-against-a-density]]

[F8] By [A1], one-dimensional Lebesgue measure is a measure and each interval $[-n,n]$ has finite measure $2n$; these intervals cover $\mathbb R$, so the factor Lebesgue spaces are sigma-finite. [[thm-lebesgue-measure-is-a-complete-measure]] [[thm-lebesgue-measure-of-a-box-of-every-kind]] [[def-finite-sigma-finite-and-semifinite-measures]]

## Counterexample

**Given:** The hypotheses and explicit densities in Facts & Assumptions.

1.1 Let $s=\sqrt\beta>0$ and $\phi(t)=(2\pi)^{-1/2}e^{-t^2/2}$. Direct algebra gives $\gamma_\rho(x,y)=\phi(x)g_{\rho x,\beta}(y)=\phi(y)g_{\rho y,\beta}(x)$. The target is nonnegative and measurable, and [F8] supplies the sigma-finite Lebesgue product spaces; Tonelli [F6] and [F3] show that it integrates to one and has both marginals $\phi$. By [F5], both marginal means are zero and both marginal variances are one. Since $|xy|\le(x^2+y^2)/2$, the cross moment is absolutely integrable. Fubini [F6], density integration [F7], and [F5] give $E[XY]=\int x\phi(x)(\rho x)dx=\rho$, because the conditional density $g_{\rho x,\beta}$ has mean $\rho x$. Thus the covariance is $\begin{pmatrix}1&\rho\\\rho&1\end{pmatrix}$. [A1, F3, F5, F6, F7, F8, algebra]

2.1 For $m_j\in\mathbb R$ and $v_j>0$, [F4] makes $g_{m_j,v_j}$ probability densities with means $m_j$ and variances $v_j$. Tonelli [F6] gives $\int q=1$. The product density $q$ and target $\gamma_\rho$ are positive everywhere, so the support condition in [F1] holds. Their logarithms are quadratic; the second moments and $|xy|\le(x^2+y^2)/2$ make the absolute logarithms integrable under $q$, so $q$ is admissible. Fubini [F6], density integration [F7], and [F5] give $E_q[X^2]=m_1^2+v_1$, $E_q[Y^2]=m_2^2+v_2$, and $E_q[XY]=m_1m_2$. [F1, F4, F5, F6, F7, step 1.1, algebra]

3.1 From the displayed density, $\log\gamma_\rho=-\log(2\pi s)-(x^2-2\rho xy+y^2)/(2\beta)$. Also $-E_{g_{m_j,v_j}}\log g_{m_j,v_j}=\tfrac12\log(2\pi v_j)+\tfrac12$, by the moments in step 2.1. Substituting these expectations into [F2] gives $\operatorname{ELBO}(q)=C_\rho-\frac{m_1^2-2\rho m_1m_2+m_2^2+v_1+v_2}{2\beta}+\frac12\log v_1+\frac12\log v_2$, where $C_\rho$ is independent of $m_1,m_2,v_1,v_2$. The mean quadratic equals $(m_1-\rho m_2)^2+\beta m_2^2$, so its unique minimizing, hence ELBO-maximizing, means are $m_1=m_2=0$. [F2, step 2.1, algebra]

4.1 For each variance, the part depending on $v$ is $g(v)=-v/(2\beta)+(1/2)\log v$. Its derivative is $g'(v)=(\beta-v)/(2\beta v)$, positive for $0<v<\beta$ and negative for $v>\beta$. Thus the unique maximizer is $v=\beta$. Since $0<|\rho|<1$, $0<\beta<1$, proving strict variance underestimation. [given, step 3.1, algebra] ∎
