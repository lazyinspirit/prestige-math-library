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
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-factorization-of-expectations-for-independent-variables
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - cor-cauchy-schwarz-for-random-variables
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

Assume AC, DC and countable choice. Under the hypotheses and notation defining the Du population Gram recursion, every fully connected matrix $K^{(h)}$, every residual feature second-moment matrix $S^{(h)}$, and both terminal matrices are finite, symmetric, and positive semidefinite. The fully connected matrices satisfy $K_{ii}^{(h)}=1$ for $0\le h<H$. For the residual sequence, $S^{(h)}-b^{(h)}(b^{(h)})^T$ is positive semidefinite for $1\le h<H$; its diagonal is not asserted to equal one.

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

[F7] For two Borel probability laws on finite-dimensional real spaces, their product measure exists, has total mass one and satisfies the rectangle formula. Thus its two coordinate projections have the prescribed laws and are independent. [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]

[F8] If $X,Y$ have finite second moments, then $\mathbb E|XY|\le(\mathbb E X^2)^{1/2}(\mathbb E Y^2)^{1/2}$. This ensures integrability of the Gaussian activation products in steps 2.1 and 4.1 and the terminal-coordinate products in steps 3.1 and 5.1. [[cor-cauchy-schwarz-for-random-variables]]

## Proof

**Proof technique:** induction on the layer index, using Gaussian feature vectors to express each quadratic form as an expectation of a square.

1.1 The input matrix $K^{(0)}$ is symmetric, and for $v\in\mathbb R^n$, $v^TK^{(0)}v=\|\sum_i v_ix_i\|_2^2\ge0$. Its diagonal entries are $\|x_i\|_2^2=1$, giving the base case. [base, F1, given, algebra]

2.1 Assume the induction hypothesis that $K^{(h-1)}$ is finite, symmetric positive semidefinite, and has diagonal $1$, for some $1\le h<H$. By [F2]–[F3], take $G\sim N_n(0,K^{(h-1)})$; each pair $(G_i,G_j)$ has covariance $A_{ij}^{(h)}$. The growth bound $|\sigma(z)|\le|\sigma(0)|+L|z|$ and finite Gaussian second moments put each $\sigma(G_i)$ in $L^2$; [F8] then makes every product $\sigma(G_i)\sigma(G_j)$ integrable. Thus $K^{(h)}$ is finite and symmetric, and for every $v$, $v^TK^{(h)}v=c_\sigma\mathbb E[(\sum_i v_i\sigma(G_i))^2]\ge0$. Because $G_i\sim N(0,1)$, its diagonal is $c_\sigma\mathbb E[\sigma(Z)^2]=1$ by [F5]. This establishes the induction step. [ih, A1, F1, F2, F3, F5, F8, step 1.1, algebra]

3.1 For the fixed $H$, let $P(h)$ mean that $K^{(h)}$ is finite, symmetric positive semidefinite, and has diagonal $1$, for $0\le h<H$. Define $Q(k)$ to mean $P(j)$ for every $j\le\min(k,H-1)$. Step 1.1 gives $Q(0)$. If $Q(k)$ and $k+1<H$, step 2.1 applied with $h=k+1$ gives $P(k+1)$ and hence $Q(k+1)$; if $k+1\ge H$, $Q(k+1)$ adds no new index. By [F6], $Q(H-1)$ holds, so $K^{(H-1)}$ is finite, symmetric positive semidefinite, and has diagonal $1$; when $H=1$, this is exactly the base matrix $K^{(0)}$. By [F4], take independent $G,G'$ both distributed as $N_n(0,K^{(H-1)})$. The vector with coordinates $Y_i=\sqrt{c_\sigma}\,G'_i\sigma'(G_i)$ has finite second moments; $\sigma'$ is bounded because it is the derivative of a Lipschitz differentiable function. Factoring expectations of independent variables gives $\mathbb E[Y_iY_j]=c_\sigma K_{ij}^{(H-1)}\mathbb E[\sigma'(G_i)\sigma'(G_j)]=K_{ij}^{(H)}$. Therefore $K^{(H)}$ is finite and symmetric, and $v^TK^{(H)}v=\mathbb E[(\sum_i v_iY_i)^2]\ge0$ for every $v$. This proves the fully connected terminal claim and discharges that induction. [A1, A2, F2, F3, F4, F6, step 1.1, step 2.1, algebra, discharge-induction]

3.2 For the residual base layer let $G_0\sim N_n(0,S^{(0)})$ and $V^{(1)}=\sqrt{c_\sigma}\,\sigma(G_0)$, with activation applied coordinatewise. Then $EV^{(1)}=b^{(1)}$ and $E[V^{(1)}(V^{(1)})^T]=S^{(1)}$ by [F1]. The growth bound used in step 2.1 proves finite second moments. For every $v$, $v^TS^{(1)}v=E[(v^TV^{(1)})^2]\ge0$, while $S^{(1)}-b^{(1)}(b^{(1)})^T$ is its covariance and has quadratic form $E[(v^T(V^{(1)}-EV^{(1)}))^2]\ge0$. Thus both matrices are symmetric positive semidefinite. [A1, F1, F2, step 2.1, construct, algebra]

4.1 Suppose a finite-second-moment vector $V^{(h-1)}$ has mean $b^{(h-1)}$ and second-moment matrix $S^{(h-1)}$. Let $\mu$ be the Borel law of this generally non-Gaussian vector and let $\nu=N_n(0,S^{(h-1)})$, which exists by [F2]. Both are probability measures and hence sigma-finite. By [F7], on $(\mathbb R^n\times\mathbb R^n,\mu\times\nu)$ the coordinate projections $V$ and $G$ have laws $\mu$ and $\nu$ and are independent: for Borel sets $A,B$, the probability of $\{V\in A,G\in B\}$ is $\mu(A)\nu(B)$. Put $V^{(h)}=V+\alpha\sigma(G)$. Finite second moments follow from the growth bound and $(u+v)^2\le2u^2+2v^2$. Independence gives $EV^{(h)}=b^{(h-1)}+\alpha\mu^{(h-1)}$ and $E[V_i^{(h)}V_j^{(h)}]=S_{ij}^{(h-1)}+\alpha(b_i^{(h-1)}\mu_j^{(h-1)}+b_j^{(h-1)}\mu_i^{(h-1)})+\alpha^2E[\sigma(G_i)\sigma(G_j)]=S_{ij}^{(h)}$. For every $v$, $v^TS^{(h)}v=E[(v^TV^{(h)})^2]\ge0$, and $S^{(h)}-b^{(h)}(b^{(h)})^T$ is the covariance of $V^{(h)}$, so its quadratic form is also an expectation of a square. Thus both matrices are finite, symmetric positive semidefinite at this stage, which supplies the covariance hypothesis for the next stage. Iterating through the finitely many layers is justified by [F6]. [A1, A2, F1, F2, F4, F6, F7, F8, step 3.2, construct, algebra]

5.1 For $H\ge2$, take independent $G,G'\sim N_n(0,S^{(H-1)})$ and set $Y_i=(c_{\rm res}/H)G'_i\sigma'(G_i)$. The boundedness $|\sigma'|\le L$ gives finite second moments, and independence gives $E[Y_iY_j]=K_{{\rm res},ij}^{(H)}$. Consequently this terminal matrix is symmetric positive semidefinite. At $H=1$ it equals the already proved fully connected matrix by definition. This proves all residual assertions. [A1, A2, F1, F2, F4, step 3.1, step 4.1, construct, algebra, discharge-induction] ∎  
