---
id: lem-du-population-gram-kernels-are-finite-symmetric-psd
kind: lemma
title: "The recursively defined population Gram matrices are finite, symmetric, and positive semidefinite"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-du-overparameterized-network-architectures-and-gram-kernels
  - lem-du-activation-normalizer-finite-positive
  - def-multivariate-normal-law
  - cor-countable-independent-copies-exist
  - thm-factorization-of-expectations-for-independent-variables
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - thm-induction-principle
  - def-axiom-of-choice
  - def-dependent-choice
  - def-countable-choice
justified_by: []
proof_strategy: induction
axiom_use: "AC is inherited from the finite-dimensional Gaussian-law supplier; DC and countable choice are inherited from the independent-copy supplier. The finite quadratic-form arguments are choice-free."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Simon S. Du, Jason D. Lee, Haochuan Li, Liwei Wang, and Xiyu Zhai, Gradient Descent Finds Global Minima of Deep Neural Networks, Definition 5.1 and Appendix E"
      url: "https://proceedings.mlr.press/v97/du19c.html"
---

## Statement

Under the hypotheses and notation defining the Du population Gram recursion, every matrix $K^{(h)}$ in the recursion, including the terminal matrix $K^{(H)}$, is finite, symmetric, and positive semidefinite. Moreover, $K_{ii}^{(h)}=1$ for $0\le h<H$.

## Statement references

[Du et al., Definition 5.1 and Appendix E](https://proceedings.mlr.press/v97/du19c.html)

## Facts & Assumptions

**Given:** The finite unit-norm data, activation, normalization, Gaussian covariance convention, and matrices from the definition.

[F1] The architecture and matrices are defined by the stated recurrences, with $c_\sigma>0$ and finite. [[def-du-overparameterized-network-architectures-and-gram-kernels]]

[F5] The normalizer satisfies $c_\sigma\mathbb E[\sigma(Z)^2]=1$ for standard normal $Z$. [[lem-du-activation-normalizer-finite-positive]]

[F6] A property holding at zero and preserved by successor holds for every natural-number index. [[thm-induction-principle]]

[F2] A finite-dimensional positive semidefinite covariance matrix defines a possibly singular centered multivariate normal law, with the listed covariance and finite second moments. [[def-multivariate-normal-law]]

[F3] A real self-adjoint matrix has an orthonormal eigenbasis. [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]

[F4] Countably many independent copies of a normal vector can be constructed, and expectations of products of integrable independent variables factor. [[cor-countable-independent-copies-exist]] [[thm-factorization-of-expectations-for-independent-variables]]

[A1] Assume AC as required by the multivariate normal-law supplier. [[def-axiom-of-choice]]

[A2] Assume DC and countable choice as required by the independent-copy supplier. [[def-dependent-choice]] [[def-countable-choice]]

## Proof

**Proof technique:** induction on the layer index, using Gaussian feature vectors to express each quadratic form as an expectation of a square.

1.1 The input matrix $K^{(0)}$ is symmetric, and for $v\in\mathbb R^n$, $v^TK^{(0)}v=\|\sum_i v_ix_i\|_2^2\ge0$. Its diagonal entries are $\|x_i\|_2^2=1$, giving the base case. [base, F1, given, algebra]

2.1 Assume the induction hypothesis that $K^{(h-1)}$ is finite, symmetric positive semidefinite, and has diagonal $1$, for some $1\le h<H$. By [F2]–[F3], take $G\sim N_n(0,K^{(h-1)})$; each pair $(G_i,G_j)$ has covariance $A_{ij}^{(h)}$. The growth bound $|\sigma(z)|\le|\sigma(0)|+L|z|$ and the finite Gaussian second moments make each product $\sigma(G_i)\sigma(G_j)$ integrable by Cauchy–Schwarz. Thus $K^{(h)}$ is finite and symmetric, and for every $v$, $v^TK^{(h)}v=c_\sigma\mathbb E[(\sum_i v_i\sigma(G_i))^2]\ge0$. Because $G_i\sim N(0,1)$, its diagonal is $c_\sigma\mathbb E[\sigma(Z)^2]=1$ by [F5]. This establishes the induction step. [ih, A1, F1, F2, F3, F5, step 1.1, algebra]

3.1 For the fixed $H$, let $P(h)$ mean that $K^{(h)}$ is finite, symmetric positive semidefinite, and has diagonal $1$, for $0\le h<H$. Define $Q(k)$ to mean $P(j)$ for every $j\le\min(k,H-1)$. Step 1.1 gives $Q(0)$. If $Q(k)$ and $k+1<H$, step 2.1 applied with $h=k+1$ gives $P(k+1)$ and hence $Q(k+1)$; if $k+1\ge H$, $Q(k+1)$ adds no new index. By [F6], $Q(H-1)$ holds, so $K^{(H-1)}$ is finite, symmetric positive semidefinite, and has diagonal $1$; when $H=1$, this is exactly the base matrix $K^{(0)}$. By [F4], take independent $G,G'$ both distributed as $N_n(0,K^{(H-1)})$. The vector with coordinates $Y_i=\sqrt{c_\sigma}\,G'_i\sigma'(G_i)$ has finite second moments; $\sigma'$ is bounded because it is the derivative of a Lipschitz differentiable function. Factoring expectations of independent variables gives $\mathbb E[Y_iY_j]=c_\sigma K_{ij}^{(H-1)}\mathbb E[\sigma'(G_i)\sigma'(G_j)]=K_{ij}^{(H)}$. Therefore $K^{(H)}$ is finite and symmetric, and $v^TK^{(H)}v=\mathbb E[(\sum_i v_iY_i)^2]\ge0$ for every $v$. This proves the terminal claim and discharges the induction. [A1, A2, F2, F3, F4, F6, step 1.1, step 2.1, algebra, discharge-induction] ∎
