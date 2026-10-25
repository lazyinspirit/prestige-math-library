---
id: lem-huber-covariance-contamination-modulus-lower-bound
kind: lemma
title: The Huber covariance contamination modulus has a quadratic lower bound
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
deps:
  - def-huber-covariance-model
  - def-bounded-spectrum-covariance-class
  - def-block-sparse-covariance-class
  - lem-gaussian-kullback-leibler-covariance-formula
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - thm-pinsker
  - def-contamination-modulus
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: AC is inherited through the finite-dimensional Gaussian-law supplier; the covariance pair is explicit and uses no further choice.
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Mengjie Chen, Chao Gao and Zhao Ren, Robust Covariance and Scatter Matrix Estimation under Huber's Contamination Model, proof of Theorems 3.2 and 3.7"
      url: "https://arxiv.org/pdf/1506.00691"
dependency_level: 5
---

## Statement

For fixed $M>0$, $0\le\epsilon\le1$, and $p\ge1$, the squared operator
loss $L(\Sigma_0,\Sigma_1)=\|\Sigma_0-\Sigma_1\|_{\rm op}^2$ has
contamination modulus at least $c_M\epsilon^2$ on $\mathcal F_p(M)$ and on
$\mathcal F_{p,s}(M)$ for every $1\le s\le p/2$.

## Facts & Assumptions

**Given:** The bounded covariance classes, the contamination modulus, the Gaussian Huber covariance model, Pinsker's inequality, and the local Gaussian KL formula.

[F1] [[def-contamination-modulus]]: the modulus uses pairs of clean laws whose total-variation distance is at most $\epsilon/(1-\epsilon)$; at $\epsilon=1$ the threshold is infinite.

[F2] [[thm-pinsker]]: $TV(P,Q)\le\sqrt{D(P\|Q)/2}$ under $TV=\sup_A|P(A)-Q(A)|$.

[F3] [[def-huber-covariance-model]]: the clean Gaussian law is $N_p(0,\Sigma)$ with covariance parameter $\Sigma$.

[F4] [[lem-gaussian-kullback-leibler-covariance-formula]]: the KL divergence of the positive-definite Gaussian pair is given by its trace-determinant formula.

[F5] [[def-bounded-spectrum-covariance-class]] and [[def-block-sparse-covariance-class]]: a diagonal positive semidefinite matrix with largest eigenvalue at most $M$ lies in the dense class and in every defined single-block class.

## Proof

1.1 For $0<\epsilon\le1$, set $\Sigma_0=(M/2)I$ and $\Sigma_1=(M/2)I+(M\epsilon/4)e_1e_1^T$. Both are positive definite, their largest eigenvalues are at most $3M/4$, and they are diagonal. Thus they belong to the dense class and to every block-sparse class in the Statement by [F5]. Their squared operator separation is $M^2\epsilon^2/16$. [F3, F5, algebra]

2.1 Put $r=\epsilon/2$. By [F4], $$D(N_p(0,\Sigma_0)\|N_p(0,\Sigma_1)) =\frac12\left[\log(1+r)+(1+r)^{-1}-1\right] \le\frac{r^2}{4}=\frac{\epsilon^2}{16}.$$ The derivative of the bracket is $r/(1+r)^2\le r$; integration from $0$ proves the inequality. Pinsker [F2] gives $TV\le\epsilon/\sqrt{32}\le\epsilon\le\epsilon/(1-\epsilon)$ for $0<\epsilon<1$. At $\epsilon=1$, the modulus threshold is infinite. [F2, F4, step 1.1, algebra]

3.1 The pair from step 1.1 is admissible in the supremum defining the contamination modulus [F1]. Its loss is $M^2\epsilon^2/16$, so the modulus on both classes is at least that amount. At $\epsilon=0$ the claimed lower bound is zero. [F1, step 1.1, step 2.1] ∎
