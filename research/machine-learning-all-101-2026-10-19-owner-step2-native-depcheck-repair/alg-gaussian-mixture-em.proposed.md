---
id: alg-gaussian-mixture-em
kind: algorithm
title: "Exact EM updates for a finite Gaussian mixture"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - alg-expectation-maximization
  - def-axiom-of-choice
  - def-finite-gaussian-mixture
  - thm-finite-gaussian-component-density-normalized
  - thm-gaussian-mixture-exact-m-step-maximizes-q
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Hastie, Tibshirani, and Friedman, The Elements of Statistical Learning, 2nd ed., corrected 12th printing"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
    - title: "Christopher M. Bishop, Pattern Recognition and Machine Learning"
      url: "https://www.microsoft.com/en-us/research/wp-content/uploads/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf"
verification:
  precheck: n/a
---

## Definition

**Inputs.** Assume AC. Supply positive integers $n,p,K$, observations $x_1,\ldots,x_n\in\mathbb R^p$ whose affine span is $\mathbb R^p$ (equivalently, no nonzero $v\in\mathbb R^p$ has $v^{\mathsf T}x_i$ constant over all $i$), an initial finite Gaussian mixture parameter $\theta_0=((\pi_k^{(0)},\mu_k^{(0)},\Sigma_k^{(0)}))_{k=1}^K$ in the domain of the finite-mixture definition, and a positive integer $T$.

**Procedure.** For $t=0,1,\ldots,T-1$, compute the responsibilities

$$\gamma_{ik}^{(t)}:=\frac{\pi_k^{(t)}\phi_p(x_i;\mu_k^{(t)},\Sigma_k^{(t)})}{\sum_{j=1}^K\pi_j^{(t)}\phi_p(x_i;\mu_j^{(t)},\Sigma_j^{(t)})},\qquad N_k^{(t)}:=\sum_{i=1}^n\gamma_{ik}^{(t)}.$$

Then make the exact updates

$$\pi_k^{(t+1)}:=\frac{N_k^{(t)}}{n},\qquad \mu_k^{(t+1)}:=\frac{1}{N_k^{(t)}}\sum_{i=1}^n\gamma_{ik}^{(t)}x_i,$$

$$\Sigma_k^{(t+1)}:=\frac{1}{N_k^{(t)}}\sum_{i=1}^n\gamma_{ik}^{(t)}(x_i-\mu_k^{(t+1)})(x_i-\mu_k^{(t+1)})^{\mathsf T}.$$

**Output.** Return the finite parameter sequence $(\theta_0,\theta_1,\ldots,\theta_T)$. Every E-step uses the current parameter and every M-step uses that E-step's responsibilities. The affine-span hypothesis is imposed for the unrestricted positive-definite covariance update; constrained covariance domains require their own M-step. This definition makes no claim about convergence of parameters or a global maximum.
