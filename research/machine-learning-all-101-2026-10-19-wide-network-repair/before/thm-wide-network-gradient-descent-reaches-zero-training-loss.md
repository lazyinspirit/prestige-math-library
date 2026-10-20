---
id: thm-wide-network-gradient-descent-reaches-zero-training-loss
kind: theorem
title: "Wide fully connected networks converge geometrically to zero empirical training loss"
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
    - title: "Simon S. Du, Jason D. Lee, Haochuan Li, Liwei Wang, and Xiyu Zhai, Gradient Descent Finds Global Minima of Deep Neural Networks, Theorem 5.1"
      url: "https://proceedings.mlr.press/v97/du19c.html"
    - title: "Simon S. Du, Jason D. Lee, Haochuan Li, Liwei Wang, and Xiyu Zhai, Gradient Descent Finds Global Minima of Deep Neural Networks, Appendix B"
      url: "https://proceedings.mlr.press/v97/du19c/du19c-supp.pdf"
---

## Statement

Assume AC, DC and countable choice. Fix positive integers $d,n,H,m$, training data $x_1,\ldots,x_n\in\mathbb R^d$ and labels $y_1,\ldots,y_n\in\mathbb R$ with $\|x_i\|_2=1$ and $|y_i|\le C_y$ for a fixed finite constant $C_y$. Let the activation satisfy the Lipschitz and smoothness conditions $|\sigma(0)|\le C_\sigma$, $|\sigma(z)-\sigma(z')|\le L|z-z'|$, and $|\sigma'(z)-\sigma'(z')|\le\beta|z-z'|$ for finite constants, and also be analytic and nonpolynomial. Use the fully connected architecture and population matrix $K^{(H)}$ defined on this page, initialized with independent standard normal entries in all weight matrices and the output vector, and trained in all layers by full-batch gradient descent on $L(\theta)=\frac12\sum_{i=1}^n(f(x_i,\theta)-y_i)^2$. Put $\lambda_0=\lambda_{\min}(K^{(H)})$ and assume $\lambda_0>0$. For $0<\delta<1$, if the width and fixed step size satisfy

$$m=\Omega\!\left(2^{O(H)}\max\left\{\frac{n^4}{\lambda_0^4},\frac{n}{\delta},\frac{n^2\log(Hn/\delta)}{\lambda_0^2}\right\}\right),\qquad 0<\eta=O\!\left(\frac{\lambda_0}{n^2 2^{O(H)}}\right),$$

then with probability at least $1-\delta$ over initialization, every gradient-descent iterate $k\ge1$ satisfies

$$L(\theta^{(k)})\le\left(1-\frac{\eta\lambda_0}{2}\right)^kL(\theta^{(0)}).$$

The constants hidden in $O$ and $\Omega$ may depend on the fixed activation and label bounds but not on $n,H,m,\delta$; the step-size constant is small enough that $0<\eta\lambda_0/2<1$. In particular, $L(\theta^{(k)})\to0$ geometrically as $k\to\infty$.

## Statement references

[Du et al., Theorem 5.1 and §3.3](https://proceedings.mlr.press/v97/du19c.html)

[Du et al., Appendix B, Lemmas B.1–B.7 and proof of Theorem 5.1](https://proceedings.mlr.press/v97/du19c/du19c-supp.pdf)

## Escalation

The complete theorem statement is retained, but a complete local proof has not been established. The source proof requires initialization concentration for the layer Gram matrices, a uniform perturbation bound for the output Jacobian Gram matrix along all iterates, and a weight-displacement induction that closes with the displayed width and step-size bounds. Appendix B.5 places the factor $\sqrt n\,\|y-u(0)\|_2$ in the displacement radius, and a later perturbation line invokes $\|y-u(0)\|_2=O(\sqrt n)$ without spelling out its confidence dependence there. The source width already contains confidence-dependent terms, so this estimate may close after a sharper local derivation; no theorem counterexample is asserted. The local conditional Gaussian bound on this page’s prerequisites does not yet establish simultaneous feature-matrix trace and operator-norm bounds under the theorem’s initialization event or close the all-iterate Gram-stability induction. The theorem must remain escalated until these finite-width initialization and trajectory-stability estimates are proved with the stated dependence on $n,H,\lambda_0,\delta$.
