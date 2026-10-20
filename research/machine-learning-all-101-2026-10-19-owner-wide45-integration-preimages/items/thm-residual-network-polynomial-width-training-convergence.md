---
id: thm-residual-network-polynomial-width-training-convergence
kind: theorem
title: "Wide residual networks converge geometrically to zero empirical loss with polynomial depth dependence"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-du-overparameterized-network-architectures-and-gram-kernels
  - lem-du-population-gram-kernels-are-finite-symmetric-psd
  - lem-du-output-gradient-gram-update-identity
  - lem-du-initial-output-gaussian-concentration
  - lem-du-conditional-loss-contraction-under-gram-control
  - alg-gradient-descent
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - thm-standard-gaussian-lipschitz-concentration
  - thm-shared-parameter-backpropagation-gradient-formula
  - def-axiom-of-choice
  - def-dependent-choice
  - def-countable-choice
justified_by: []
axiom_use: "The statement retains the AC, DC and countable-choice branch used by the Gaussian concentration supplier. The source theorem is stated over standard Gaussian initialization."
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Simon S. Du, Jason D. Lee, Haochuan Li, Liwei Wang, and Xiyu Zhai, Gradient Descent Finds Global Minima of Deep Neural Networks, Theorem 6.1"
      url: "https://proceedings.mlr.press/v97/du19c.html"
    - title: "Simon S. Du, Jason D. Lee, Haochuan Li, Liwei Wang, and Xiyu Zhai, Gradient Descent Finds Global Minima of Deep Neural Networks, Appendix C"
      url: "https://proceedings.mlr.press/v97/du19c/du19c-supp.pdf"
---

## Statement

Assume AC, DC and countable choice. Fix positive integers $d,n,H,m$, training data $x_1,\ldots,x_n\in\mathbb R^d$ and labels $y_1,\ldots,y_n\in\mathbb R$ with $\|x_i\|_2=1$ and $|y_i|\le C_y$ for a fixed finite constant $C_y$. Let the activation satisfy the Lipschitz and smoothness conditions $|\sigma(0)|\le C_\sigma$, $|\sigma(z)-\sigma(z')|\le L|z-z'|$, and $|\sigma'(z)-\sigma'(z')|\le\beta|z-z'|$ for finite constants, and also be analytic and nonpolynomial. Use the residual architecture with fixed $0<c_{\rm res}<1$ and the population matrix $K^{(H)}$ defined on this page, initialized with independent standard normal entries in all weight matrices and the output vector, and trained in all layers by full-batch gradient descent on $L(\theta)=\frac12\sum_{i=1}^n(f_{\rm res}(x_i,\theta)-y_i)^2$. Put $\lambda_0=\lambda_{\min}(K^{(H)})$ and assume $\lambda_0>0$. For $0<\delta<1$, if

$$m=\Omega\!\left(\max\left\{\frac{n^4H^6}{\lambda_0^4},\frac{n^2}{\lambda_0^2H^2},\frac{n}{\delta},\frac{n^2\log(Hn/\delta)}{\lambda_0^2}\right\}\right),\qquad 0<\eta=O\!\left(\frac{\lambda_0H^2}{n^2}\right),$$

then with probability at least $1-\delta$ over initialization, every gradient-descent iterate $k\ge1$ satisfies

$$L(\theta^{(k)})\le\left(1-\frac{\eta\lambda_0}{2}\right)^kL(\theta^{(0)}).$$

The constants hidden in $O$ and $\Omega$ may depend on the fixed activation, label, and residual-scaling bounds but not on $n,H,m,\delta$; the step-size constant is small enough that $0<\eta\lambda_0/2<1$. In particular, $L(\theta^{(k)})\to0$ geometrically as $k\to\infty$.

## Statement references

[Du et al., Theorem 6.1 and §3.3](https://proceedings.mlr.press/v97/du19c.html)

[Du et al., Appendix C, Lemmas C.1–C.7 and proof of Theorem 6.1](https://proceedings.mlr.press/v97/du19c/du19c-supp.pdf)

## Escalation

The complete theorem statement is retained, but a complete local proof has not been established. The source proof requires initialization concentration for the residual-layer Gram matrices, a uniform perturbation bound for the output Jacobian Gram matrix along all iterates, and a displacement induction that uses the $c_{\rm res}/(H\sqrt m)$ residual scaling. Appendix C.5 has the same confidence-dependent initial-residual term $\sqrt n\,\|y-u(0)\|_2$ as the fully connected argument. The conditional Gaussian bound available locally does not yet establish simultaneous trace and operator-norm control for all residual feature matrices under the stated width or close the residual all-iterate stability induction. The source width has confidence-dependent terms, so no counterexample is asserted; the residual-specific estimates in Appendix C.1–C.7 have not been independently reproduced with their polynomial dependence on $H$. The theorem must remain escalated until those initialization, perturbation and trajectory-stability estimates are proved under the exact displayed bounds.
