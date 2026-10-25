---
id: thm-residual-network-polynomial-width-training-convergence
kind: theorem
title: "Wide residual networks converge geometrically to zero empirical loss with polynomial depth dependence"
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
  - cor-cauchy-schwarz-for-random-variables
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
    - title: "Simon S. Du, Jason D. Lee, Haochuan Li, Liwei Wang, and Xiyu Zhai, Gradient Descent Finds Global Minima of Deep Neural Networks, Theorem 6.1"
      url: "https://proceedings.mlr.press/v97/du19c.html"
    - title: "Simon S. Du, Jason D. Lee, Haochuan Li, Liwei Wang, and Xiyu Zhai, Gradient Descent Finds Global Minima of Deep Neural Networks, Appendix C"
      url: "https://proceedings.mlr.press/v97/du19c/du19c-supp.pdf"
---

## Statement

Assume AC, DC and countable choice. Fix positive integers $d,n,H,m$, training data $x_1,\ldots,x_n\in\mathbb R^d$ and labels $y_1,\ldots,y_n\in\mathbb R$ with $\|x_i\|_2=1$ and $|y_i|\le C_y$ for a fixed finite constant $C_y$. Let the activation satisfy the Lipschitz and smoothness conditions $|\sigma(0)|\le C_\sigma$, $|\sigma(z)-\sigma(z')|\le L|z-z'|$, and $|\sigma'(z)-\sigma'(z')|\le\beta|z-z'|$ for finite constants, and also be analytic and nonpolynomial. Use the residual architecture with fixed $0<c_{\rm res}<1$ and the population matrix $K_{\rm res}^{(H)}$ defined on this page, initialized with independent standard normal entries in all weight matrices and the output vector, and trained in all layers by full-batch gradient descent on $L(\theta)=\frac12\sum_{i=1}^n(f_{\rm res}(x_i,\theta)-y_i)^2$. Write $K^{(H)}=K_{\rm res}^{(H)}$ and put $\lambda_0=\lambda_{\min}(K^{(H)})$ and assume $\lambda_0>0$. For $0<\delta<1$, if

$$m=\Omega\!\left(\max\left\{\frac{n^4H^6}{\lambda_0^4},\frac{n^2}{\lambda_0^2H^2},\frac{n}{\delta},\frac{n^2\log(Hn/\delta)}{\lambda_0^2}\right\}\right),\qquad 0<\eta=O\!\left(\frac{\lambda_0H^2}{n^2}\right),$$

then with probability at least $1-\delta$ over initialization, every gradient-descent iterate $k\ge1$ satisfies

$$L(\theta^{(k)})\le\left(1-\frac{\eta\lambda_0}{2}\right)^kL(\theta^{(0)}).$$

The constants hidden in $O$ and $\Omega$ may depend on the fixed activation, label, and residual-scaling bounds but not on $n,H,m,\delta$; the step-size constant is small enough that $0<\eta\lambda_0/2<1$. In particular, $L(\theta^{(k)})\to0$ geometrically as $k\to\infty$.

## Statement references

[Du et al., Theorem 6.1 and §3.3](https://proceedings.mlr.press/v97/du19c.html)

[Du et al., Appendix C, Lemmas C.1–C.7 and proof of Theorem 6.1](https://proceedings.mlr.press/v97/du19c/du19c-supp.pdf)

## Facts & Assumptions

**Given:** The data, architecture, activation, Gaussian initialization, positive terminal population eigenvalue $\lambda_0$, width, confidence and step-size hypotheses of the Statement.

[F1] The architecture-specific population kernel, including residual means and scaling, is defined locally and is positive semidefinite. [[def-du-overparameterized-network-architectures-and-gram-kernels]] [[lem-du-population-gram-kernels-are-finite-symmetric-psd]]

[F2] The simultaneous Gaussian initialization event gives feature, parameter, backward-coordinate, last-layer Gram, and initial-residual bounds at the stated width. [[lem-du-simultaneous-initialization-event]]

[F3] On parameter balls, the last-layer Gram perturbation and output/loss Hessian have explicit width-dependent bounds. [[lem-du-neighborhood-gram-and-hessian-control]]

[F4] Local Gram positivity and loss-Hessian control confine all GD iterates by a first-exit argument and give geometric loss contraction. [[lem-du-local-pl-descent-and-path-length]]

[F5] For square-integrable real random variables, $|\mathbb E X|\le(\mathbb E X^2)^{1/2}$. [[cor-cauchy-schwarz-for-random-variables]]

## Proof

1.1 First take $H\ge2$ and put $\lambda=\lambda_0$, $q=1+\log(16/\delta)$. At the stated width, [F2] supplies with probability at least $1-\delta$ a simultaneous event with all constants independent of $H$, on which $\|r_0\|^2\le Cnq$ and $J_H(0)J_H(0)^T\succeq3\lambda I/4$. By [F1], $S_{ii}^{(1)}=1$ and $S_{ii}^{(h)}-(b_i^{(h)})^2\ge0$. For $2\le h<H$, put $q_h=\sqrt{S_{ii}^{(h)}}$ and $Y_h=\sigma(G_i^{(h-1)})$. The residual recursion gives $q_h^2=S_{ii}^{(h-1)}+2\alpha b_i^{(h-1)}\mathbb E Y_h+\alpha^2\mathbb E Y_h^2$. By [F1] and [F5], $|b_i^{(h-1)}|\le q_{h-1}$ and $|\mathbb E Y_h|\le(\mathbb E Y_h^2)^{1/2}$; Lipschitz growth and [F5] also give $(\mathbb E Y_h^2)^{1/2}\le C_\sigma+Lq_{h-1}$. Hence $q_h\le(1+\alpha L)q_{h-1}+\alpha C_\sigma$. Starting from $q_1=1$ and iterating with $\alpha=c_{\rm res}/H$ gives $q_h\le e^{Lc_{\rm res}}(1+C_\sigma c_{\rm res})$ for every $h<H$, uniformly in $H$. The terminal diagonal formula and $|\sigma'|\le L$ now give $K_{ii}^{(H)}\le C/H^2$; positive semidefiniteness in [F1] implies $\lambda\le K_{ii}^{(H)}\le C/H^2$. The residual neighborhood bounds [F3] retain separate first-layer and readout gradients without an erroneous $1/H$ factor. [F1, F2, F3, F5, given, algebra]

2.1 Choose $D=4\sqrt{Cnq/\lambda}$, with $C$ fixed sufficiently large for the initial-residual bound. The width implies $m\ge Cn^3q/(\lambda^3H^4)$ and $m\ge CD^2$. To see the logarithmic absorption, use $A_*=n^4/\lambda^4$, $B_*=n/\delta$ and $n^3\lambda^{-3}\log(1/\delta)\le(4/e)\max(A_*,B_*)$, which follows from $\delta^{1/4}\log(1/\delta)\le4/e$ exactly as in the fully connected argument. Dividing by $H^4$ only decreases the requirement, while the approved width contains $H^6A_*$ and $B_*$. The constant part is absorbed using $\lambda H^2\le C$ and $n,H\ge1$. Consequently $D/\sqrt m\le c$ and $CnD/(H^2\sqrt m)\le\lambda/4$, so the last-layer Gram is at least $\lambda I/2$ throughout this ball. [F1, F3, step 1.1, algebra]

3.1 All constants in the residual Hessian estimate are independent of $H$. Substitution of $D$ and the initial-residual bound in [F3] yields $\|\nabla^2L\|\le Cn+Cn^2qM/(\lambda\sqrt m)$, because $\lambda\le C$ and $n,q\ge1$. The approved width and $\lambda\le C/H^2$ imply $m\ge C\max(n,H^6,1/\delta)$. Thus $M\le C\sqrt{\log(em)}$, $q\le C\log(em)$ and $qM/\sqrt m\le C/H^2$: explicitly, $\log(em)^{3/2}\le C m^{1/6}$ for all $m\ge1$, so the ratio is at most $Cm^{-1/3}\le C/H^2$. Also $n\le Cn^2/(\lambda H^2)$. Therefore $\|\nabla^2L\|\le S=Cn^2/(\lambda H^2)$ on the ball. The permitted sufficiently small fixed step-size constant makes $\eta\le1/S$. [F3, step 1.1, step 2.1, algebra]

4.1 Since $D>2\sqrt2\|r_0\|/\sqrt\lambda$, [F4] confines every iterate to the ball and gives $L(\theta^{(k)})\le(1-\eta\lambda/2)^kL(\theta^{(0)})$. The step-size constant can ensure $0<\eta\lambda/2<1$, because $\lambda H^2\le C$. This proves geometric convergence on the probability-$1-\delta$ event. For $H=1$ the architectures and population kernels coincide; the width is exactly the fully connected depth-one restriction up to fixed constants, and its local proof applies with the same contraction and step-size form. The same application bounds the total parameter path by $2\sqrt2\|r_0\|/\sqrt\lambda$; [F3] therefore supplies last-layer Gram stability and the displayed output Taylor-remainder bound on every accepted update segment, for all iterates simultaneously. [F1, F2, F3, F4, step 1.1, step 2.1, step 3.1, algebra] ∎

## Remarks

The displayed sufficient width retains the approved stronger depth restriction. The first term in the official Theorem 6.1 is $n^4/(\lambda_0^4H^6)$, whereas the displayed term is $n^4H^6/\lambda_0^4$. The proof here establishes the displayed approved restriction by a parameter-ball argument, retaining all trainable layers. It does not claim the sharper source width from this argument. The residual population kernel includes its mean cross terms and differs from the fully connected kernel.
