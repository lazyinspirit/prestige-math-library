---
id: thm-wide-network-gradient-descent-reaches-zero-training-loss
kind: theorem
title: "Wide fully connected networks converge geometrically to zero empirical training loss"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-du-overparameterized-network-architectures-and-gram-kernels
  - lem-du-population-gram-kernels-are-finite-symmetric-psd
  - lem-du-output-gradient-gram-update-identity
  - lem-du-initial-output-gaussian-concentration
  - lem-du-conditional-loss-contraction-under-gram-control
  - lem-du-simultaneous-initialization-event
  - lem-du-neighborhood-gram-and-hessian-control
  - lem-du-local-pl-descent-and-path-length
  - alg-gradient-descent
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - thm-standard-gaussian-lipschitz-concentration
  - thm-shared-parameter-backpropagation-gradient-formula
  - def-axiom-of-choice
  - def-dependent-choice
  - def-countable-choice
justified_by: []
proof_strategy: direct
axiom_use: "The statement retains the AC, DC and countable-choice branch used by the Gaussian concentration supplier. The source theorem is stated over standard Gaussian initialization."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Simon S. Du, Jason D. Lee, Haochuan Li, Liwei Wang, and Xiyu Zhai, Gradient Descent Finds Global Minima of Deep Neural Networks, Theorem 5.1"
      url: "https://proceedings.mlr.press/v97/du19c.html"
    - title: "Simon S. Du, Jason D. Lee, Haochuan Li, Liwei Wang, and Xiyu Zhai, Gradient Descent Finds Global Minima of Deep Neural Networks, Appendix B"
      url: "https://proceedings.mlr.press/v97/du19c/du19c-supp.pdf"
---

## Statement

Assume AC, DC and countable choice. Fix positive integers $d,n,H,m$, training data $x_1,\ldots,x_n\in\mathbb R^d$ and labels $y_1,\ldots,y_n\in\mathbb R$ with $\|x_i\|_2=1$ and $|y_i|\le C_y$ for a fixed finite constant $C_y$. Let the activation satisfy the Lipschitz and smoothness conditions $|\sigma(0)|\le C_\sigma$, $|\sigma(z)-\sigma(z')|\le L|z-z'|$, and $|\sigma'(z)-\sigma'(z')|\le\beta|z-z'|$ for finite constants, and also be analytic and nonpolynomial. Use the fully connected architecture and population matrix $K_{\rm fc}^{(H)}$ defined on this page, initialized with independent standard normal entries in all weight matrices and the output vector, and trained in all layers by full-batch gradient descent on $L(\theta)=\frac12\sum_{i=1}^n(f(x_i,\theta)-y_i)^2$. Write $K^{(H)}=K_{\rm fc}^{(H)}$ and put $\lambda_0=\lambda_{\min}(K^{(H)})$ and assume $\lambda_0>0$. For $0<\delta<1$, if the width and fixed step size satisfy

$$m=\Omega\!\left(2^{O(H)}\max\left\{\frac{n^4}{\lambda_0^4},\frac{n}{\delta},\frac{n^2\log(Hn/\delta)}{\lambda_0^2}\right\}\right),\qquad 0<\eta=O\!\left(\frac{\lambda_0}{n^2 2^{O(H)}}\right),$$

then with probability at least $1-\delta$ over initialization, every gradient-descent iterate $k\ge1$ satisfies

$$L(\theta^{(k)})\le\left(1-\frac{\eta\lambda_0}{2}\right)^kL(\theta^{(0)}).$$

The constants hidden in $O$ and $\Omega$ may depend on the fixed activation and label bounds but not on $n,H,m,\delta$; the step-size constant is small enough that $0<\eta\lambda_0/2<1$. In particular, $L(\theta^{(k)})\to0$ geometrically as $k\to\infty$.

## Statement references

[Du et al., Theorem 5.1 and §3.3](https://proceedings.mlr.press/v97/du19c.html)

[Du et al., Appendix B, Lemmas B.1–B.7 and proof of Theorem 5.1](https://proceedings.mlr.press/v97/du19c/du19c-supp.pdf)

## Facts & Assumptions

**Given:** The data, architecture, activation, Gaussian initialization, positive terminal population eigenvalue $\lambda_0$, width, confidence and step-size hypotheses of the Statement.

[F1] The architecture-specific population kernel, including residual means and scaling, is defined locally and is positive semidefinite. [[def-du-overparameterized-network-architectures-and-gram-kernels]] [[lem-du-population-gram-kernels-are-finite-symmetric-psd]]

[F2] The simultaneous Gaussian initialization event gives feature, parameter, backward-coordinate, last-layer Gram, and initial-residual bounds at the stated width. [[lem-du-simultaneous-initialization-event]]

[F3] On parameter balls, the last-layer Gram perturbation and output/loss Hessian have explicit width-dependent bounds. [[lem-du-neighborhood-gram-and-hessian-control]]

[F4] Local Gram positivity and loss-Hessian control confine all GD iterates by a first-exit argument and give geometric loss contraction. [[lem-du-local-pl-descent-and-path-length]]

## Proof

1.1 Put $\lambda=\lambda_0$ and $q=1+\log(16/\delta)$. Fix an exponential envelope $E=A_0^H$ for all initialization constants in [F2] and another $F=A_1^H$ for [F3] with those initialization bounds. These bases depend only on the permitted fixed bounds. The source-width form permits $m\ge W\max\{n^4/\lambda^4,n/\delta,n^2\log(16Hn/\delta)/\lambda^2\}$, where $W=A_2^H$ is chosen sufficiently large in terms of the fixed bases of $E,F$; in particular take $W\ge CEF^2$. All these choices are fixed before selecting the radius. On the event from [F2], of probability at least $1-\delta$, $r_0=u(0)-y$ satisfies $\|r_0\|^2\le Enq$, the initialized last-layer Gram is at least $3\lambda I/4$, and all other hypotheses of [F3] hold. Also $\lambda\le c_\sigma L^2$ by the diagonal of [F1]. [F1, F2, given, algebra]

2.1 The displayed width also implies $m\ge CEF^2 n^3q/\lambda^3$, after fixing $W$ sufficiently large. For the logarithmic term this follows without an extra logarithmic width factor: writing $A_*=n^4/\lambda^4$ and $B_*=n/\delta$, one has $n^3\lambda^{-3}\log(1/\delta)=n^{-1/4}A_*^{3/4}B_*^{1/4}\delta^{1/4}\log(1/\delta)\le(4/e)\max(A_*,B_*)$, since $t e^{-t/4}\le4/e$ for $t\ge0$. The constant part of $q$ is absorbed by $A_*$ using $\lambda\le c_\sigma L^2$ and $n\ge1$. Choose the fixed radius $D=4\sqrt{Enq/\lambda}$. These inequalities give $D/\sqrt m\le c/F$ and $FnD/\sqrt m\le\lambda/4$. Hence [F3] supplies $J_H(\theta)J_H(\theta)^T\succeq\lambda I/2$ on the entire ball of radius $D$. [F1, F3, step 1.1, algebra]

3.1 The same width implies $m\ge C\max(n,H,1/\delta)$, so $M=\sqrt{1+\log(16mnH/\delta)}\le C\sqrt{\log(em)}$ and $q\le C\log(em)$. The loss-Hessian bound in [F3], $D=4\sqrt{Enq/\lambda}$, and $\lambda\le c_\sigma L^2$ yield $\|\nabla^2L\|\le T'n^2\lambda^{-1}(1+qM/\sqrt m)$, where $T'=A'^H$ after enlarging its fixed base. Indeed expand $(\sqrt{Enq}+F\sqrt nD)(1+D)$ in that bound; because $n,q\ge1$ and $\lambda$ is bounded above, every term is at most an allowed exponential constant times $n^{3/2}q/\lambda$, before the exterior factor $\sqrt nM/\sqrt m$. The function $\log(em)^{3/2}/\sqrt m$ is bounded for $m\ge1$, so the Hessian is bounded by $S=T''n^2/\lambda$ on the ball, with $T''=A''^H$. The allowed sufficiently small step-size constant ensures $\eta\le1/S$. [F3, step 1.1, step 2.1, algebra]

4.1 The radius satisfies $D>2\sqrt2\|r_0\|/\sqrt\lambda$. Apply [F4] with the last-hidden-layer Jacobian block and the ball and smoothness bounds from steps 2.1 and 3.1. Every iterate stays in that ball, and $L(\theta^{(k)})\le(1-\eta\lambda/2)^kL(\theta^{(0)})$ for all $k$. Choosing the step-size constant also ensures $0<\eta\lambda/2<1$, so geometric convergence to zero follows. The initialization event has probability at least $1-\delta$, proving the claim. The same application bounds the total parameter path by $2\sqrt2\|r_0\|/\sqrt\lambda$; [F3] therefore supplies last-layer Gram stability and the displayed output Taylor-remainder bound on every accepted update segment, for all iterates simultaneously. [F3, F4, step 1.1, step 2.1, step 3.1, algebra] ∎  