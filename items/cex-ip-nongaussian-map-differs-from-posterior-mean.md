---
id: cex-ip-nongaussian-map-differs-from-posterior-mean
kind: counterexample
title: "A non-Gaussian posterior can have different MAP and mean"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-standard-normal-and-normal-laws
  - thm-nondegenerate-multivariate-normal-law-has-density
  - def-ip-misfit-evidence-and-posterior-law
  - cor-ip-gaussian-map-equals-tikhonov-minimizer
proof_strategy: direct
axiom_use: "AC is used only through the repository's standard-normal law and density interfaces. The posterior normalization and one-dimensional integral comparison are direct."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems: Lecture Notes, arXiv:2001.00617v2 (2021)"
      url: "https://arxiv.org/pdf/2001.00617"
      locator: "Chapter 13, printed pp. 127–131 (PDF pp. 129–133), discussion after equation (13.4): the conditional mean need not generally coincide with MAP when the prior or likelihood is non-Gaussian or the inverse problem is nonlinear; the bounded-support witness is proved locally."
    - title: "M. Dashti and A. M. Stuart, The Bayesian Approach to Inverse Problems (full lecture notes, arXiv:1302.6989)"
      url: "https://arxiv.org/pdf/1302.6989"
      locator: "§§3.1–3.2 for the posterior as a normalized likelihood update; the explicit non-Gaussian witness is proved locally."
---

## Statement refuted

For every probability density $p$ on $\mathbb R$ with finite first absolute
moment and at least one global maximizer, every maximum a posteriori (MAP)
point, meaning every global maximizer of $p$, equals its mean
$\int_{\mathbb R}t\,p(t)\,dt$.

## Statement references

[[cor-ip-gaussian-map-equals-tikhonov-minimizer|The Gaussian result has explicit prior, likelihood, support, and quadratic-posterior hypotheses.]]

## Facts & Assumptions

**Given:** AC; a prior uniform on $[0,1]$; independent standard-normal observation noise; and the observation model in the Counterexample.

[A1] AC is assumed by the standard-normal law. [[def-axiom-of-choice]]

[F1] The standard-normal noise has a strictly positive Gaussian density. [[def-standard-normal-and-normal-laws]], [[thm-nondegenerate-multivariate-normal-law-has-density]]

[F2] A normalized potential update is the prior reweighted by its likelihood and divided by its evidence when the evidence is positive and finite. [[def-ip-misfit-evidence-and-posterior-law]]

[F3] The equality of MAP, posterior mean, and support-restricted Tikhonov minimizer proved for the finite Gaussian model uses Gaussian prior and likelihood assumptions. [[cor-ip-gaussian-map-equals-tikhonov-minimizer]]

## Counterexample

**Given:** Let $\theta$ have the uniform probability density
$\mathbf 1_{[0,1]}$ on $\mathbb R$. Independently let
$\epsilon\sim N(0,1)$, observe $Y=\theta+\epsilon$, and condition on $y=0$.
The likelihood potential is $\Phi_0(\theta)=\theta^2/2$ on $[0,1]$ and the
posterior density relative to Lebesgue measure is
$$ p(\theta\mid 0)= \frac{e^{-\theta^2/2}}{\int_0^1 e^{-t^2/2}\,dt}\, \mathbf 1_{[0,1]}(\theta). $$

1.1 The evidence in [F2] is $Z=\int_0^1e^{-t^2/2}\,dt$. Since $e^{-1/2}\le e^{-t^2/2}\le1$ on $[0,1]$, one has $0<e^{-1/2}\le Z\le1$. Thus the displayed normalized posterior density is proper. [A1, F1, F2, given, algebra]

2.1 On $(0,1]$, the derivative of $e^{-\theta^2/2}$ is $-\theta e^{-\theta^2/2}<0$. The posterior density vanishes outside $[0,1]$, so its unique global maximizer is $\theta=0$. Its support is the bounded interval $[0,1]$ and it is not a point mass. A nondegenerate one-dimensional Gaussian has a strictly positive density on all of $\mathbb R$ by [F1], whereas a zero-variance Gaussian is a point mass. Therefore this posterior is non-Gaussian. [F1, step 1.1, algebra]

3.1 The posterior mean is $$ \frac{\int_0^1 t e^{-t^2/2}\,dt}{Z} =\frac{1-e^{-1/2}}{Z}>0, $$ which differs from the MAP point $0$. This refutes the universal claim. It also shows why [F3] is restricted to the Gaussian model. [F3, step 1.1, step 2.1, algebra] ∎
