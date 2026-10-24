---
id: lem-coordinate-lasso-soft-threshold-update
kind: lemma
title: "Exact Lasso coordinate update, including a zero column"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-lasso-estimator
  - def-soft-thresholding-function
  - lem-na-coordinate-soft-threshold-minimizer
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Stephen J. Wright, Coordinate Descent Algorithms, §2"
      url: "https://arxiv.org/html/1502.04759v1"
    - title: "Clément Royer, Regularized, Large-Scale and Distributed Optimization, Lecture 3, §3.3"
      url: "https://www.lamsade.dauphine.fr/~croyer/ensdocs/RLD/LectureNotesOML-RLD.pdf"
---

## Statement

Use the Lasso objective $Q_y$ and notation of [[def-lasso-estimator]], with $n,d\ge1$ and $\tau>0$. Fix a coordinate $j$ and all other coefficients, and set $r_j=y-\sum_{\ell\ne j}X_\ell\theta_\ell$. If $X_j\ne0$, the unique minimizing coordinate is
$$\theta_j^+=\frac{S_{n\tau}(X_j^Tr_j)}{\|X_j\|_2^2}.$$
If $X_j=0$, the unique minimizing coordinate is $\theta_j^+=0$.

## Facts & Assumptions

**Given:** The fixed-design Lasso objective, a coordinate $j$, and the other coordinates.

[F1] [[def-lasso-estimator]]: $Q_y(\theta)=n^{-1}\|y-X\theta\|_2^2+2\tau\|\theta\|_1$, with $\tau>0$.

[F2] [[lem-na-coordinate-soft-threshold-minimizer]]: for $a>0$ and $\lambda>0$, $\tfrac a2u^2-bu+\lambda|u|$ has unique minimizer $S_\lambda(b)/a$.

[F3] [[def-soft-thresholding-function]]: $S_\lambda(b)=b-\lambda$ for $b>\lambda$, equals $0$ for $|b|\le\lambda$, and equals $b+\lambda$ for $b< -\lambda$.

[F4] [[def-euclidean-inner-product]]: $\|v\|_2^2=\langle v,v\rangle$ and the inner product is bilinear; [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $\|v\|_2=0$ only for $v=0$.

[A1] The residual excluding coordinate $j$ is $r_j=y-\sum_{\ell\ne j}X_\ell\theta_\ell$.

## Proof

1.1 For a candidate value $u$ in coordinate $j$, $y-X\theta=r_j-X_ju$. By bilinearity in [F4], expanding the square in [F1] shows that the terms depending on $u$ are $n^{-1}\|X_j\|_2^2u^2-2n^{-1}(X_j^Tr_j)u+2\tau|u|$. [F1, F4, A1, algebra]

2.1 If $X_j\ne0$, [F4] gives $\|X_j\|_2^2>0$. Multiply these terms by the positive constant $n/2$. The result is $\tfrac12\|X_j\|_2^2u^2-(X_j^Tr_j)u+n\tau|u|$. Apply [F2] with $a=\|X_j\|_2^2$, $b=X_j^Tr_j$, and $\lambda=n\tau>0$ to obtain the stated unique minimizer; [F3] fixes its threshold convention at both kink values. [F2, F3, F4, step 1.1, algebra]

3.1 If $X_j=0$, the squared-residual term in [F1] is independent of $u$, while the only varying term is $2\tau|u|$. Since $\tau>0$, this term has the unique minimum at $u=0$. [F1, A1, given, algebra] ∎

