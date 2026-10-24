---
id: lem-centered-independent-weighted-sum-variance
kind: lemma
title: "Variance of a centered random weighted sum"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - cor-cauchy-schwarz-for-random-variables
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-independent-random-elements
  - def-moments-variance-and-covariance
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-factorization-of-expectations-for-independent-variables
  - thm-independent-random-elements-have-product-joint-law
  - lem-measurable-functions-preserve-independence
  - cor-expectation-linearity-monotonicity-and-modulus-bound
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Kaiming He, Xiangyu Zhang, Shaoqing Ren, and Jian Sun, Delving Deep into Rectifiers, §2.2"
      url: "https://openaccess.thecvf.com/content_iccv_2015/papers/He_Delving_Deep_into_ICCV_2015_paper.pdf"
    - title: "Simon J. D. Prince, Understanding Deep Learning, §7.5.1"
      url: "https://github.com/udlbook/udlbook/releases/download/v2.0.2/UnderstandingDeepLearning_03_06_24_C.pdf"
    - title: "Johns Hopkins University, Handout #8: Neural Network Training and Tokenization, §3"
      url: "https://self-supervised.cs.jhu.edu/fa2026/files/readings/08.stable-training.html"
---

## Statement

Let $n\ge1$. Let $W_1,\ldots,W_n$ be mutually independent real random
variables with finite second moments, means $\mathbb E[W_i]=0$, and variances
$\sigma_i^2$. Let $X=(X_1,\ldots,X_n)$ be a real random vector whose
coordinates have finite second moments, and suppose the random elements $W$
and $X$ are independent. The coordinates of $X$ need not be mutually
independent. For $S=\sum_{i=1}^n W_iX_i$, the variable $S$ is square-integrable,
$\mathbb E[S]=0$, and
$$\operatorname{Var}(S)=\sum_{i=1}^n\sigma_i^2\mathbb E[X_i^2].$$

## Facts & Assumptions

**Given:** Mutually independent centered square-integrable real random variables $W_1,\ldots,W_n$ and a square-integrable random vector $X=(X_1,\ldots,X_n)$ independent of the vector $W=(W_1,\ldots,W_n)$.

[F1] Independence of random elements means independence of their generated sigma-algebras. ([[def-independent-random-elements]])

[F2] The joint law of a finite family of independent random elements is the product of their marginal laws. ([[thm-independent-random-elements-have-product-joint-law]])

[F3] Measurable coordinatewise maps preserve independence. ([[lem-measurable-functions-preserve-independence]])

[F4] Expectations of products of independent integrable random variables factor, and the product is integrable. ([[thm-factorization-of-expectations-for-independent-variables]])

[F5] Sums, products, and lattice operations of measurable real-valued functions used here are measurable. ([[thm-arithmetic-and-lattice-operations-preserve-measurability]])

[F6] If $U,V\in L^2(\mathbb P)$, then $\mathbb E[|UV|]\le(\mathbb E[U^2])^{1/2}(\mathbb E[V^2])^{1/2}$. ([[cor-cauchy-schwarz-for-random-variables]])

[F7] Expectation is integration against the probability measure. ([[def-expectation-of-a-nonnegative-or-integrable-random-variable]])

[F8] For a square-integrable real random variable $Y$, $\operatorname{Var}(Y)=\mathbb E[(Y-\mathbb E[Y])^2]$. ([[def-moments-variance-and-covariance]])

[F9] Expectation is linear in scalar multiples and binary sums of integrable random variables; repeated use gives the finite-sum rule. ([[cor-expectation-linearity-monotonicity-and-modulus-bound]])

## Proof


1.1 Each $W_i$ and $X_i$ is integrable by [F6] applied with the constant random variable $1$. Independence of the two random elements gives independence of $W_i$ and $X_i$ by [F1], so [F4] yields $\mathbb E[W_iX_i]=\mathbb E[W_i]\mathbb E[X_i]=0$. Linearity [F9] over the finite index set gives $\mathbb E[S]=0$. [given, F1, F4, F6, F9]

1.2 Fix $i\ne j$. The coordinate-product maps $(w,x)\mapsto w_iw_j$ and $(w,x)\mapsto x_ix_j$ are measurable by [F5]. Since the joint law of $(W,X)$ is the product law by [F2], these maps, one applied to each independent factor, give independent random variables $A=W_iW_j$ and $B=X_iX_j$ by [F3]. Both are integrable by [F6]. Also $\mathbb E[A]=\mathbb E[W_i]\mathbb E[W_j]=0$ by [F4] and mutual independence of the weights. Hence [F4] gives $\mathbb E[W_iW_jX_iX_j]=\mathbb E[AB]=0$. [given, F2, F3, F4, F5, F6]

1.3 For each $i$, $W_i^2$ and $X_i^2$ are independent nonnegative random variables by [F2] and [F3]. Applying the nonnegative case of [F4] gives $\mathbb E[W_i^2X_i^2]=\mathbb E[W_i^2]\mathbb E[X_i^2]=\sigma_i^2\mathbb E[X_i^2]<\infty$. [given, F2, F3, F4]

2.1 Expanding the finite square $S^2$ gives diagonal terms from step 1.3 and cross terms from step 1.2, so $S^2$ is integrable. Linearity [F9] gives $\mathbb E[S^2]=\sum_i\sigma_i^2\mathbb E[X_i^2]$. By step 1.1, $\mathbb E[S]=0$; [F7] and [F8] therefore identify this second moment with $\operatorname{Var}(S)$ and prove the claim. [step 1.1, step 1.2, step 1.3, F7, F8, F9, algebra] ∎
