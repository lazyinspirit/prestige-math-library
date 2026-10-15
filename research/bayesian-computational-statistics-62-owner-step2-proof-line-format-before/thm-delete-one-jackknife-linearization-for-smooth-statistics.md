---
id: thm-delete-one-jackknife-linearization-for-smooth-statistics
kind: theorem
title: Delete-one jackknife linearization for smooth functions of a mean
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-iid-empirical-bootstrap-sample
  - def-moments-variance-and-covariance
  - lem-iid-sample-covariance-converges
  - thm-finite-and-countable-subadditivity-of-measures
  - def-frechet-derivative-between-banach-spaces
  - thm-chain-sum-product-and-composition-rules-for-banach-derivatives
  - cor-mean-value-theorem
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "University of Washington STAT 581, Chapter 8: Bootstrap and Jackknife Estimation of Sampling Distributions, §3"
      url: "https://sites.stat.washington.edu/jaw/COURSES/580s/581/LECTNOTES/ch8b.pdf"
    - title: "Bradley Efron and Robert Tibshirani, The Bootstrap Method for Assessing Statistical Accuracy, Behaviormetrika 12 (1985), §10"
      url: "https://link.springer.com/content/pdf/10.2333/bhmk.12.17_1.pdf"
---

## Statement

Let $X_i$ be IID $\mathbb R^d$-valued vectors with $\mathbb E\|X_1\|^2<\infty$, $\mu_j=\mathbb E X_{1j}$, and $\Sigma_{jk}=\mathbb E[(X_{1j}-\mu_j)(X_{1k}-\mu_k)]$ ([[def-moments-variance-and-covariance]]). Let $g:\mathbb R^d\to\mathbb R$ be Borel and continuously Fréchet differentiable on an open neighborhood $U$ of $\mu$; this means its Fréchet derivative exists at every point of $U$ and varies continuously there ([[def-frechet-derivative-between-banach-spaces]]). For each $x\in U$, write the row representing $Dg(x)$ in Euclidean coordinates as $\nabla g(x)^T$, and set $a=\nabla g(\mu)$; suppose $0<a^T\Sigma a<\infty$. For $n\ge2$, set $\hat\theta_n=g(\bar X_n)$, $\hat\theta_{n,(-i)}=g(\bar X_{n,(-i)})$, $\bar\theta_{n,(-)}=n^{-1}\sum_i\hat\theta_{n,(-i)}$, and
$$V_{J,n}=\frac{n-1}{n}\sum_{i=1}^n(\hat\theta_{n,(-i)}-\bar\theta_{n,(-)})^2,\qquad p_{n,i}=n\hat\theta_n-(n-1)\hat\theta_{n,(-i)}.$$
Then
$$\frac1n\sum_{i=1}^n\left|p_{n,i}-\{\hat\theta_n+a^T(X_i-\bar X_n)\}\right|^2\longrightarrow0\quad\text{in probability},\qquad nV_{J,n}\longrightarrow a^T\Sigma a\quad\text{in probability}.$$
The neighborhood $C^1$ condition is used for the deletion secants; differentiability at $\mu$ alone is not asserted to give this jackknife conclusion.

## Facts & Assumptions

**Given:** The IID vectors, finite second moment, local $C^1$ map, and definitions in the statement.

[F1] The data mean and empirical covariance converge in probability to $\mu$ and $\Sigma$. [[lem-iid-sample-covariance-converges]]

[F2] A finite union has measure at most the sum of its measures. [[thm-finite-and-countable-subadditivity-of-measures]]

[F3] The delete-one mean equals $\bar X_n-(X_i-\bar X_n)/(n-1)$. [[def-iid-empirical-bootstrap-sample]]

[F4] The mean value theorem applies to a real function continuous on a closed interval and differentiable on its interior. [[cor-mean-value-theorem]]

[F5] The derivative of a composition of Fréchet differentiable maps is the composition of their derivatives. [[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]]

## Proof

1.1 By [F1], $\bar X_n\to\mu$ and $n^{-1}\sum_i\|X_i-\bar X_n\|^2=\operatorname{tr}(\widehat\Sigma_n)$ is bounded in probability. For each $\varepsilon>0$, [F2] and the finite second moment give $\mathbb P\!\left(\max_{i\le n}\|X_i\|>\varepsilon n\right)\le n\,\mathbb P(\|X_1\|>\varepsilon n)\le\frac{\mathbb E\|X_1\|^2}{\varepsilon^2 n}\longrightarrow0.$ Therefore $\max_i\|X_i-\bar X_n\|/(n-1)\to0$ in probability. Choose $\delta>0$ so the closed Euclidean ball $\overline B(\mu,2\delta)$ is contained in $U$, and let $E_n=\{\|\bar X_n-\mu\|\le\delta,\ \max_i\|X_i-\bar X_n\|/(n-1)\le\delta\}$. This is measurable and has probability tending to one by the preceding bounds. Extend $\nabla g$ by zero outside $U$ to a Borel map $\widetilde{\nabla g}:\mathbb R^d\to\mathbb R^d$, and define
$$\omega_n=\max_{i\le n}\sup_{t\in\mathbb Q\cap[0,1]}1_{E_n}\left\|\widetilde{\nabla g}\!\left(\bar X_n-t\frac{X_i-\bar X_n}{n-1}\right)-a\right\|.$$
Each rational-indexed term is measurable, and the countable supremum is measurable because its strict superlevel sets are countable unions; the finite maximum is measurable as well. On $E_n$, every segment lies in $\overline B(\mu,2\delta)\subset U$, where $\nabla g$ is bounded by continuity on this compact ball, and continuity along the segment makes the rational supremum equal the supremum over $[0,1]$. On $E_n^c$ every term inside the supremum is zero. The greatest distance of any segment point from $\mu$ on $E_n$ is at most $\|\bar X_n-\mu\|+\max_i\|X_i-\bar X_n\|/(n-1)$, which tends to zero in probability. Continuity of $\nabla g$ at $\mu$ and $\mathbb P(E_n)\to1$ therefore imply $\omega_n\to0$ in probability. [F1, F2, F3, given, algebra]

2.1 On $E_n$, define $\varphi_i(t)=g(\bar X_n-t(X_i-\bar X_n)/(n-1))$ for $0\le t\le1$. It is continuous on $[0,1]$ and differentiable on $(0,1)$ by [F5], with derivative $-(n-1)^{-1}\nabla g(\bar X_n-t(X_i-\bar X_n)/(n-1))^T(X_i-\bar X_n)$. By [F4] there is $\tau_i\in(0,1)$ at which this derivative equals $\varphi_i(1)-\varphi_i(0)$. On every outcome define the measurable algebraic remainder $e_{n,i}:=\hat\theta_{n,(-i)}-\hat\theta_n+a^T(X_i-\bar X_n)/(n-1)$. On $E_n$ the mean-value identity expresses this remainder as $-\frac{(\nabla g(\bar X_n-\tau_i(X_i-\bar X_n)/(n-1))-a)^T(X_i-\bar X_n)}{n-1}$, so $|e_{n,i}|\le\omega_n\|X_i-\bar X_n\|/(n-1)$. The points $\tau_i$ are used only for this pointwise identity and bound; no measurable selection is needed. Since $\mathbb P(E_n)\to1$, the expansion with the stated bound holds with probability tending to one. [F4, F5, step 1.1, given, choose, algebra]

3.1 The algebraic definition of $e_{n,i}$ gives $p_{n,i}=\hat\theta_n+a^T(X_i-\bar X_n)-(n-1)e_{n,i}$. On $E_n$, the bound in step 2.1 makes the average squared error in the statement at most $\omega_n^2\,\frac1n\sum_i\|X_i-\bar X_n\|^2,$ which tends to zero in probability by step 1.1. Since $\mathbb P(E_n^c)\to0$, the stated convergence in probability follows. [step 1.1, step 2.1, algebra]

4.1 The algebraic definition of $e_{n,i}$ gives, after averaging over $i$ and using $\sum_i(X_i-\bar X_n)=0$, $$nV_{J,n}=\frac1{n-1}\sum_i\left(a^T(X_i-\bar X_n)-(n-1)(e_{n,i}-\bar e_n)\right)^2,$$ where $\bar e_n=n^{-1}\sum_ie_{n,i}$. The leading quadratic term is $\frac1{n-1}\sum_i\{a^T(X_i-\bar X_n)\}^2=\frac n{n-1}a^T\widehat\Sigma_n a\longrightarrow a^T\Sigma a$ by [F1]. On $E_n$, the normalized squared error term is bounded by $(n-1)\sum_i(e_{n,i}-\bar e_n)^2\le(n-1)\sum_i e_{n,i}^2\le\omega_n^2\frac1{n-1}\sum_i\|X_i-\bar X_n\|^2\longrightarrow0.$ If $\psi_i=a^T(X_i-\bar X_n)$ and $r_i=(n-1)(e_{n,i}-\bar e_n)$, then on $E_n$ the absolute cross term is at most $2\sqrt{\left(\frac1{n-1}\sum_i\psi_i^2\right)\left(\frac1{n-1}\sum_i r_i^2\right)},$ which tends to zero because the first factor converges to the finite $a^T\Sigma a$ and the second to zero. Since $\mathbb P(E_n^c)\to0$, these bounds prove the jackknife variance limit in probability. [F1, step 1.1, step 2.1, algebra] ∎
