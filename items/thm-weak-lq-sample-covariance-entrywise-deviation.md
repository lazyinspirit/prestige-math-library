---
id: thm-weak-lq-sample-covariance-entrywise-deviation
kind: theorem
title: "Entrywise deviation for sample-centered covariance under directional Gaussian tails"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps:
  - def-euclidean-spheres-and-closed-balls
  - def-identically-distributed-and-iid-random-variables
  - def-independent-random-elements
  - def-moments-variance-and-covariance
  - def-sample-covariance-and-operator-norm-loss
  - def-weak-lq-sparse-covariance-class
  - lem-directional-tail-implies-subgaussian-mgf
  - lem-directional-tail-products-are-subexponential
  - lem-probability-measure-basic-identities
  - lem-measurable-functions-preserve-independence
  - thm-factorization-of-expectations-for-independent-variables
  - thm-finite-subgaussian-maximum-and-epsilon-net
  - thm-subexponential-independent-sums
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "T. Tony Cai and Harrison H. Zhou, Optimal Rates of Convergence for Sparse Covariance Matrix Estimation, Section 4, equations (26)–(27)"
      url: "https://arxiv.org/pdf/1302.3030"
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 4"
      url: "https://arxiv.org/pdf/2310.19244v1"
---

## Statement

Let $X_1,\ldots,X_n$ be iid from $\mathcal P_q(\tau,c_{n,p})$ of [[def-weak-lq-sparse-covariance-class]], with $n\ge1$, $p\ge2$, and $\tau>0$. Let $u>0$ and let $\widehat\Sigma^\ast$ be the sample-centered covariance. Then
$$\mathbb P\!\left(\max_{1\le j,k\le p}|\widehat\sigma^\ast_{jk}-\sigma_{jk}| \le192\tau\left(\sqrt{\frac un}+\frac un\right)\right)\ge1-2pe^{-u}-2p^2e^{-2u}.$$
In particular $u=\log(8p^4)$ gives the original probability $1-p^{-2}$.
No independence between coordinates of a single observation is assumed.

## Facts & Assumptions

**Given:** Iid vectors $X_i\sim P\in\mathcal P_q(\tau,c_{n,p})$, with mean $\mu$ and covariance $\Sigma$, integers $n\ge1$, $p\ge2$, and $\tau>0$.

[F1] Every unit-direction projection of $X_i-\mu$ satisfies $\mathbb P(|v^{\mathsf T}(X_i-\mu)|>t)\le e^{-t^2/(2\tau)}$ ([[def-weak-lq-sparse-covariance-class]]).

[F2] For two variables with these directional tails, their centered product is sub-exponential with parameters $(1024\tau^2,16\tau)$ ([[lem-directional-tail-products-are-subexponential]]).

[F3] Independent centered sub-exponential sums with total variance proxy $v$ and maximum scale $b$ obey the two-sided Bernstein bound ([[thm-subexponential-independent-sums]]).

[F4] The directional tail bound implies a centered sub-Gaussian MGF proxy $64\tau$ ([[lem-directional-tail-implies-subgaussian-mgf]]).

[F5] A finite maximum of centered sub-Gaussian variables with common proxy $a^2$ has tail at most $2m e^{-t^2/(2a^2)}$ ([[thm-finite-subgaussian-maximum-and-epsilon-net]]).

[F6] The sample vectors are iid and mutually independent; applying the coordinate maps $x\mapsto x_j-\mu_j$ preserves independence, so their coordinate samples are independent across $i$ ([[def-identically-distributed-and-iid-random-variables]], [[def-independent-random-elements]], [[lem-measurable-functions-preserve-independence]]).

[F7] Expectations of products of independent nonnegative measurable functions factor ([[thm-factorization-of-expectations-for-independent-variables]]).

[F8] The covariance entry is $\sigma_{jk}=\mathbb E[(X_j-\mu_j)(X_k-\mu_k)]$, and $\widehat\Sigma^\ast=n^{-1}\sum_i(X_i-\bar X)(X_i-\bar X)^{\mathsf T}$ ([[def-moments-variance-and-covariance]], [[def-sample-covariance-and-operator-norm-loss]]).

[F9] Probability is subadditive on finite unions ([[lem-probability-measure-basic-identities]]).

## Proof



1.1 Put $U_i=X_i-\mu$. For coordinate unit vectors $e_j,e_k$, [F1] gives the required tail bounds for $U_{ij}$ and $U_{ik}$. Hence [F2] makes $W_i^{jk}=U_{ij}U_{ik}-\sigma_{jk}$ centered sub-exponential with parameters $(1024\tau^2,16\tau)$. For fixed $(j,k)$ these variables are independent across $i$ by [F6]. [F1, F2, F6, F8, given]

1.2 By [F4], each $U_{ij}$ is sub-Gaussian with proxy $64\tau$. Independence across $i$ and [F7] give $\mathbb E e^{\lambda n^{-1}\sum_iU_{ij}}\le\prod_i e^{32\tau\lambda^2/n^2}=e^{32\tau\lambda^2/n},$ so each $\bar U_j=n^{-1}\sum_iU_{ij}$ has proxy $64\tau/n$. Apply [F5] at $s=\sqrt{128\tau u/n}$ to obtain $\mathbb P\!\left(\max_j|\bar U_j|>s\right)\le2p e^{-u}.$ [F4, F5, F6, F7, algebra]

2.1 Set $r=u/n$ and $t=64\tau(\sqrt r+r)$. Applying [F3] to $n^{-1}\sum_iW_i^{jk}$ gives $\mathbb P\!\left(\left|n^{-1}\sum_iW_i^{jk}\right|>t\right)\le2\exp\!\left[-\frac12\min\!\left\{\frac{nt^2}{1024\tau^2},\frac{nt}{16\tau}\right\}\right]\le2e^{-2u},$ because each expression inside the minimum is at least $4u$. A union bound over $p^2$ ordered pairs gives failure probability at most $2p^2e^{-2u}$. [F3, F9, step 1.1, algebra]

3.1 Expanding [F8] gives $\widehat\sigma^\ast_{jk}=n^{-1}\sum_iU_{ij}U_{ik}-\bar U_j\bar U_k$. On the intersection of the mean event in step 1.2 and the entrywise event in step 2.1, $|\bar U_j\bar U_k|\le(\bar U_j^2+\bar U_k^2)/2\le s^2$, so every entry error is at most $64\tau(\sqrt r+r)+128\tau r\le192\tau(\sqrt r+r).$ The two failure probabilities sum to at most $2pe^{-u}+2p^2e^{-2u}$ by [F9]. At $u=\log(8p^4)$ this is at most $p^{-2}$, proving the original specialization as well. [F8, F9, step 2.1, step 1.2, algebra] ∎

