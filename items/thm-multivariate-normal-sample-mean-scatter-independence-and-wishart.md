---
id: thm-multivariate-normal-sample-mean-scatter-independence-and-wishart
kind: theorem
title: The Gaussian sample mean is independent of the Wishart sample scatter
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-multivariate-normal-sample-model-and-statistics
  - def-wishart-law
  - lem-standard-normal-matrix-has-full-row-rank-almost-surely
  - def-axiom-of-choice
  - def-multivariate-normal-law
  - def-standard-normal-and-normal-laws
  - thm-non-negative-square-root-exists-and-is-unique
  - def-independent-random-elements
  - thm-independent-random-elements-have-product-joint-law
  - thm-grouping-independent-sigma-algebras
  - lem-measurable-functions-preserve-independence
  - thm-orthogonal-transform-preserves-standard-normal-product-law
  - thm-finite-dimensional-orthogonal-decomposition
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - cor-continuous-functions-are-borel-measurable
  - lem-ac-supplies-sequential-choices-for-probability-constructions
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Arak Mathai, Serge Provost, and Hans J. Haubold, Multivariate Statistical Analysis in the Real and Complex Domains, Chapter 3 §3.5, PDF pp. 55–58"
      url: "https://link.springer.com/content/pdf/10.1007/978-3-030-95864-0_3.pdf"
    - title: "Arak Mathai, Serge Provost, and Hans J. Haubold, Multivariate Statistical Analysis in the Real and Complex Domains, Chapter 5 §5.5.3, PDF pp. 55–57"
      url: "https://link.springer.com/content/pdf/10.1007/978-3-030-95864-0_5.pdf"
    - title: "Soumendu Sundar Mukherjee, Multivariate Analysis 2021, Lecture 3, PDF pp. 1–4"
      url: "https://soumendu041.gitlab.io/teaching/courses/mva2021/lectures/scribes/lec-3.pdf"
    - title: "Peter D. Hoff, Multivariate Statistical Analysis, Duke STA 832 lecture notes, relevant sections in Chapters 4 and 7"
      url: "https://www2.stat.duke.edu/~pdh10/Teaching/832/Materials/notes.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Statement

Assume AC and the sample model in [[def-multivariate-normal-sample-model-and-statistics]], with $n\ge2$, $p\ge1$, and $\Sigma\succ0$. Then
$$\sqrt n(\bar X-\mu)\sim N_p(0,\Sigma),\qquad \bar X\perp S,\qquad (n-1)S\sim W_p(\Sigma,n-1).$$
If $n>p$, then $S$ is positive definite almost surely. The Wishart scale is $\Sigma$ and its degrees of freedom are $n-1$.

## Facts & Assumptions

**Given:** AC and the iid multivariate-normal sample model, with $n\ge2$, $p\ge1$, and $\Sigma\succ0$.

[A1] AC is the choice assumption in the multivariate-normal construction and the orthogonal Gaussian-coordinate supplier. [[def-axiom-of-choice]]

[F1] The sample model has independent vector-valued sampling units $X_i\sim N_p(\mu,\Sigma)$ and defines $\bar X$, $S$, and the $n-1$ covariance convention. [[def-multivariate-normal-sample-model-and-statistics]]

[F2] Under AC, $N_p(m,\Sigma)$ is realized by $m+\Sigma^{1/2}Z$ with independent standard-normal coordinates, and its linear projections have the specified normal laws. [[def-multivariate-normal-law]]

[F3] Every finite-dimensional real inner-product space has orthogonal complements and orthonormal bases. [[thm-finite-dimensional-orthogonal-decomposition]] [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]

[F4] An orthogonal transformation of a standard-normal vector with independent coordinates again has independent standard-normal coordinates. [[thm-orthogonal-transform-preserves-standard-normal-product-law]]

[F5] Disjoint groups of an independent family remain independent. [[thm-grouping-independent-sigma-algebras]]

[F6] Measurable functions of independent random elements remain independent. [[lem-measurable-functions-preserve-independence]]

[F7] The Wishart law $W_p(\Sigma,m)$ is the law of a sum of $m$ independent $N_p(0,\Sigma)$ outer products. [[def-wishart-law]]

[F8] A standard-normal matrix with $m\ge p$ columns has full row rank almost surely. [[lem-standard-normal-matrix-has-full-row-rank-almost-surely]]

[F9] Continuous Euclidean maps are Borel measurable under the choice assumption; in particular the sample mean, covariance, and whitening maps used here are measurable. [[cor-continuous-functions-are-borel-measurable]] [[lem-ac-supplies-sequential-choices-for-probability-constructions]]

[F10] A positive-semidefinite symmetric matrix has a positive square root; if $\Sigma\succ0$, that root is invertible because $\Sigma^{1/2}v=0$ would imply $v^T\Sigma v=0$. [[thm-non-negative-square-root-exists-and-is-unique]]

[F11] Finite independent random elements have the product joint law of their marginal laws. [[thm-independent-random-elements-have-product-joint-law]]

## Proof

1.1 Define $Y_i=\Sigma^{-1/2}(X_i-\mu)$. The positive root exists by [F10], and if $\Sigma^{1/2}v=0$ then $v^T\Sigma v=\|\Sigma^{1/2}v\|^2=0$, so $\Sigma\succ0$ makes the root invertible. Whitening is a continuous, hence Borel, map by [F9]; [F6] therefore preserves independence of the sample vectors. By [F2], each $Y_i\sim N_p(0,I_p)$ has independent standard-normal coordinates, and [F11] gives the product joint law across $i$. Thus all $np$ entries $Y_{ia}$ are independent standard normals. Let $u=n^{-1/2}(1,\ldots,1)^T\in\mathbb R^n$. By [F3], complete $u$ to an orthonormal basis $u_1=u,u_2,\ldots,u_n$ of $\mathbb R^n$. For each coordinate $a\in\{1,\ldots,p\}$, the sample-coordinate vector $(Y_{1a},\ldots,Y_{na})^T$ is therefore standard normal in $\mathbb R^n$, and these $p$ vectors are independent. [A1, F1, F2, F3, F6, F9, F10, F11, given, choose]

2.1 Let $Y=[Y_1|\cdots|Y_n]$ and, for each $j,a$, define $Y'_{ja}=u_j^T(Y_{1a},\ldots,Y_{na})^T$. Applying the orthogonal invariance [F4] separately to the $p$ independent coordinate vectors gives independent standard-normal entries within each transformed coordinate vector; [F6] preserves independence between those $p$ vectors under their separate orthogonal maps. Thus all $np$ entries $Y'_{ja}$ are independent standard normals, and the $p$-vectors $Y'_1,\ldots,Y'_n$ formed from their coordinates are independent $N_p(0,I_p)$ vectors. [F1, F4, F6, step 1.1, algebra]

3.1 Since $u_1=u$, $Y'_1=\sqrt n\,n^{-1}\sum_iY_i=\sqrt n\,\Sigma^{-1/2}(\bar X-\mu)$. Its law and [F2] give $\sqrt n(\bar X-\mu)\sim N_p(0,\Sigma)$. The vector $Y'_1$ is independent of $(Y'_2,\ldots,Y'_n)$ by [F5]. [F2, F5, step 2.1, algebra]

4.1 The matrix $U=[u_1|\cdots|u_n]$ is orthogonal and $u_1=u$. Hence $YY^T$ splits as $YY^T=Yuu^TY^T+\sum_{j=2}^nY u_ju_j^TY^T$. The first term is $n\bar Y\bar Y^T$, and the remaining terms are $Y'_jY_j'^T$, so $\sum_i(Y_i-\bar Y)(Y_i-\bar Y)^T=\sum_{j=2}^nY'_jY_j'^T$. Since $X_i-\bar X=\Sigma^{1/2}(Y_i-\bar Y)$, it follows that $(n-1)S=\Sigma^{1/2}(\sum_{j=2}^nY'_jY_j'^T)\Sigma^{1/2}$. The independent vectors in [F5] and Wishart definition [F7] give $(n-1)S\sim W_p(\Sigma,n-1)$. The sample mean is a function of $Y'_1$, while $S$ is a function of $Y'_2,\ldots,Y'_n$; the maps are Borel by [F9], so [F6] gives $\bar X\perp S$. [F5, F6, F7, F9, step 2.1, step 3.1, algebra]

5.1 If $n>p$, then $n-1\ge p$ and the residual vectors $Y'_2,\ldots,Y'_n$ are independent standard-normal columns. By [F8], their $p\times(n-1)$ matrix has row rank $p$ almost surely. Its sum of column outer products is therefore positive definite; the congruence in step 4.1 and $n-1>0$ show $S\succ0$ almost surely. [F8, step 4.1, algebra] ∎

