---
id: thm-covariance-likelihood-ratio-asymptotic-chi-square
kind: theorem
title: The Gaussian covariance likelihood ratio has its fixed-dimensional Wilks limit
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-multivariate-normal-sample-model-and-statistics
  - lem-standard-normal-matrix-has-full-row-rank-almost-surely
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - thm-orthogonal-transform-preserves-standard-normal-product-law
  - def-axiom-of-choice
  - def-multivariate-normal-law
  - def-standard-normal-and-normal-laws
  - def-independent-random-elements
  - thm-independent-random-elements-have-product-joint-law
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
  - lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness
  - lem-ac-supplies-sequential-choices-for-probability-constructions
  - def-dominated-statistical-experiment
  - def-likelihood-density
  - def-wald-score-likelihood-ratio-statistics
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - thm-non-negative-square-root-exists-and-is-unique
  - thm-multivariate-iid-central-limit-theorem
  - thm-continuous-mapping-theorem
  - thm-vector-slutsky
  - thm-vector-stochastic-order-calculus
  - def-op-and-little-op-stochastic-bounds
  - def-chi-square-law
  - cor-continuous-functions-are-borel-measurable
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Arak Mathai, Serge Provost, and Hans J. Haubold, Multivariate Statistical Analysis in the Real and Complex Domains, Chapter 3 §3.5, PDF pp. 55–62; Chapter 5 §5.5, PDF pp. 47–66"
      url: "https://link.springer.com/content/pdf/10.1007/978-3-030-95864-0_3.pdf"
    - title: "Soumendu Sundar Mukherjee, Multivariate Analysis 2021, Lecture 7, PDF pp. 1–4"
      url: "https://soumendu041.gitlab.io/teaching/courses/mva2021/lectures/scribes/lec-7.pdf"
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

Assume AC, fix $p\ge1$, and use the iid multivariate-normal sample model with $n>p$. Test $H_0:\Sigma=\Sigma_0$ against unrestricted $\Sigma\in\mathcal S_{++}^p$, with $\mu\in\mathbb R^p$ unrestricted under both hypotheses and fixed $\Sigma_0\succ0$. Let $M=R/n$ be the full-model Gaussian covariance MLE, and let $\Lambda_n$ be the null-over-full maximized likelihood ratio formed from the explicit Lebesgue Gaussian density. Almost surely,
$$-2\log\Lambda_n=n\left[\operatorname{tr}(\Sigma_0^{-1}M)-\log\det(\Sigma_0^{-1/2}M\Sigma_0^{-1/2})-p\right].$$
With $p$ fixed and the null true, $-2\log\Lambda_n\Rightarrow\chi^2_{p(p+1)/2}$ as $n\to\infty$. The covariance null is interior in $\mathcal S_{++}^p$. This calibration is asymptotic; no finite-sample chi-square law is asserted.

## Facts & Assumptions

**Given:** AC, fixed $p\ge1$, $n>p$, observations from the stated iid sample model, and under the null the true covariance is $\Sigma_0\succ0$.

[A1] AC supplies the Gaussian construction and the countable-choice branch used by Borel measurability and the density/change-of-variables setup. [[def-axiom-of-choice]] [[lem-ac-supplies-sequential-choices-for-probability-constructions]]

[F1] The sample consists of independent vector observations with mean $\mu$, covariance $\Sigma$, and centered scatter $R=\sum_i(X_i-\bar X)(X_i-\bar X)^T$; $M=R/n$. [[def-multivariate-normal-sample-model-and-statistics]]

[F2] A multivariate normal vector is representable as $\mu+\Sigma^{1/2}Z$ with independent standard-normal coordinates. [[def-multivariate-normal-law]]

[F3] A standard-normal coordinate has Lebesgue density $(2\pi)^{-1/2}e^{-z^2/2}$. [[def-standard-normal-and-normal-laws]]

[F4] Independent coordinates have their product joint law; Tonelli integrates the nonnegative product density, and finite product Lebesgue measure agrees with Euclidean Lebesgue measure on Borel sets. [[def-independent-random-elements]] [[thm-independent-random-elements-have-product-joint-law]] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]]

[F5] An invertible affine change of variables transforms a nonnegative Borel density by the absolute determinant Jacobian. [[lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness]]

[F6] For $n>p$, the centered Gaussian scatter $R$ is positive definite almost surely. Indeed, write $X_i=\mu+\Sigma^{1/2}G_i$ with independent standard-normal columns and put $G=[G_1|\cdots|G_n]$. Complete $u=n^{-1/2}(1,\ldots,1)^T$ to an orthogonal matrix $U=[u|u_2|\cdots|u_n]$. The map $G\mapsto GU$ is orthogonal on the $np$ entries, so those entries remain independent standard normals. Centering gives $R=\Sigma^{1/2}BB^T\Sigma^{1/2}$ with $B=[Gu_2|\cdots|Gu_n]$. Since $n-1\ge p$, the rank lemma makes $BB^T\succ0$ almost surely, and invertibility of $\Sigma^{1/2}$ gives the claim. [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]] [[thm-orthogonal-transform-preserves-standard-normal-product-law]] [[lem-standard-normal-matrix-has-full-row-rank-almost-surely]]

[F7] An iid finite-dimensional vector with finite second moment obeys the multivariate iid central limit theorem. [[thm-multivariate-iid-central-limit-theorem]]

[F8] Convergence in distribution implies boundedness in probability; products of bounded-in-probability vectors are bounded in probability, a vanishing factor times a bounded factor vanishes in probability, and Slutsky and continuous mapping preserve the stated limits. [[thm-vector-stochastic-order-calculus]] [[def-op-and-little-op-stochastic-bounds]] [[thm-vector-slutsky]] [[thm-continuous-mapping-theorem]]

[F9] $\chi_k^2$ is the law of the sum of squares of $k$ independent standard-normal coordinates. [[def-chi-square-law]]

[F10] For nested hypotheses with existing maxima, the likelihood-ratio statistic is twice the full-minus-null maximized log likelihood. [[def-wald-score-likelihood-ratio-statistics]]

[F11] Every real symmetric matrix has an orthonormal eigenbasis. [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]

[F12] Every positive-semidefinite symmetric matrix has a positive-semidefinite square root; if it is positive definite, that root is invertible. [[thm-non-negative-square-root-exists-and-is-unique]]

[F13] A statistical experiment is dominated by a measure when every sampling law is absolutely continuous with respect to that common measure; Lebesgue measure is sigma-finite. [[def-dominated-statistical-experiment]] [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]

[F14] A likelihood density is a Radon–Nikodym density of the sampling law relative to the fixed dominating measure. [[def-likelihood-density]]

[F15] Continuous Euclidean functions are Borel measurable. [[cor-continuous-functions-are-borel-measurable]]

## Proof

1.1 By [F2] and [F3], one observation has density $\phi_{\mu,\Sigma}(x)=(2\pi)^{-p/2}(\det\Sigma)^{-1/2}\exp[-(x-\mu)^T\Sigma^{-1}(x-\mu)/2]$: the independent-coordinate product density follows from [F4], its continuous Gaussian formula is Borel by [F15], and the invertible affine map $z\mapsto\mu+\Sigma^{1/2}z$ has determinant $|\det\Sigma^{1/2}|=(\det\Sigma)^{1/2}$, so [F5] gives the displayed density. Independence in [F1] then makes the sample density its product over $i=1,\ldots,n$. The finite-dimensional Lebesgue measure is sigma-finite by [F13], so the product law is dominated by it and the displayed function is a likelihood density by [F14]. [A1, F1, F2, F3, F4, F5, F13, F14, F15, algebra]

1.2 Under $H_0$, the positive root $\Sigma_0^{1/2}$ is invertible by [F12], so define $Y_i=\Sigma_0^{-1/2}(X_i-\mu)$. By [F1]–[F2] these are iid $N_p(0,I_p)$. Write $C_n=n^{-1}\sum_iY_iY_i^T$ and $A_n=\Sigma_0^{-1/2}M\Sigma_0^{-1/2}=C_n-\bar Y\bar Y^T$. For a symmetric matrix, let $\operatorname{vech}$ list its upper-triangular entries in a fixed order; put $V_i=\operatorname{vech}(Y_iY_i^T-I_p)$. These vectors have mean zero and diagonal covariance: diagonal coordinates have variance $2$, off-diagonal coordinates variance $1$, and distinct coordinates have covariance zero. Indeed, independence and symmetry give zero for any product with an odd coordinate power; integration by parts against [F3]'s density gives $E Z^2=1$ and $E Z^4=3$ (using $\phi'(z)=-z\phi(z)$ and vanishing polynomial-times-Gaussian boundary terms), while independence factors mixed even products. These finite moments make $V_i$ square-integrable, so [F7] yields $\sqrt n\operatorname{vech}(C_n-I_p)\Rightarrow N(0,D)$ with those diagonal variances. Also $\sqrt n\bar Y=O_P(1)$ by [F7]–[F8], whence $\sqrt n\bar Y\bar Y^T=n^{-1/2}(\sqrt n\bar Y)(\sqrt n\bar Y)^T=o_P(1)$ by [F8]. Thus $H_n=\sqrt n(A_n-I_p)$ converges in distribution to a symmetric Gaussian matrix $H$ whose entries on and above the diagonal are independent, with variances $2$ on the diagonal and $1$ off it. [F1, F2, F3, F7, F8, F12, algebra]

2.1 Taking logarithms of that positive product density gives, up to the parameter-free constant $-np\log(2\pi)/2$, $$\ell_n(\mu,\Sigma)=-\frac n2\log\det\Sigma-\frac12\sum_{i=1}^n(X_i-\mu)^T\Sigma^{-1}(X_i-\mu).$$ Expanding $X_i-\mu=(X_i-\bar X)+(\bar X-\mu)$ and using $\sum_i(X_i-\bar X)=0$ shows the quadratic sum equals $n(\bar X-\mu)^T\Sigma^{-1}(\bar X-\mu)+\operatorname{tr}(\Sigma^{-1}R)$. Since $\Sigma^{-1}\succ0$, this is minimized uniquely at $\mu=\bar X$ for every fixed $\Sigma$. [F1, step 1.1, algebra]

3.1 By [F6], $M=R/n\succ0$ almost surely. The square root $M^{1/2}$ exists by [F12] and is invertible because $M\succ0$. At $\mu=\bar X$, compare the covariance log likelihood at any $\Sigma\succ0$ with its value at $M$. Let $B=M^{1/2}\Sigma^{-1}M^{1/2}\succ0$. The trace and determinant identities give $$\ell_n(\bar X,\Sigma)-\ell_n(\bar X,M)=-\frac n2\{\operatorname{tr}B-\log\det B-p\}.$$ By [F11], the eigenvalues $\lambda_1,\ldots,\lambda_p$ of $B$ are positive and the brace is $\sum_j(\lambda_j-\log\lambda_j-1)\ge0$, since $x-\log x-1\ge0$ for $x>0$ by differentiation and its unique minimum at $1$. Equality holds precisely when all $\lambda_j=1$, hence $B=I$ and $\Sigma=M$. Thus the unrestricted MLE is $(\bar X,M)$; under $H_0$ the maximizing mean remains $\bar X$ by step 2.1. [F6, F11, F12, step 2.1, algebra]

4.1 Substituting the unrestricted and null maxima into [F10], and using $R=nM$, yields $$-2\log\Lambda_n=n\{\operatorname{tr}(\Sigma_0^{-1}M)+\log\det\Sigma_0-\log\det M-p\}.$$ Since $\det(\Sigma_0^{-1/2}M\Sigma_0^{-1/2})=\det M/\det\Sigma_0$, this is the asserted finite-sample identity. [F10, step 3.1, algebra]

5.1 Since $H_n=O_P(1)$ by [F8], $E_n=A_n-I_p=H_n/\sqrt n$ has Frobenius norm $\|E_n\|_F=O_P(n^{-1/2})$, where $\|B\|_F=(\sum_{i,j}B_{ij}^2)^{1/2}$. On an event whose probability tends to one, every eigenvalue $e_j$ of the symmetric $E_n$ has $|e_j|\le1/2$. Taylor's theorem on $[-1/2,1/2]$ gives $e-\log(1+e)=e^2/2+O(|e|^3)$ with a uniform finite remainder constant there. Hence the statistic in step 4.1 equals $$n\sum_{j=1}^p(e_j-\log(1+e_j))=\frac12\operatorname{tr}(H_n^2)+O_P(n\|E_n\|_F^3)=\frac12\operatorname{tr}(H_n^2)+o_P(1),$$ because $p$ is fixed and $n\|E_n\|_F^3=O_P(n^{-1/2})$. [step 4.1, step 1.2, F8, algebra]

6.1 The map $H\mapsto\tfrac12\operatorname{tr}(H^2)$ is continuous, so [F8] and step 1.2 give convergence to $\tfrac12\operatorname{tr}(H^2)$. For the stated independent entries this is $$\sum_{i=1}^p(H_{ii}/\sqrt2)^2+\sum_{1\le i<j\le p}H_{ij}^2,$$ a sum of $p+p(p-1)/2=p(p+1)/2$ independent squared standard normals, which has law $\chi^2_{p(p+1)/2}$ by [F9]. Step 5.1 and Slutsky [F8] prove the asserted limit. When $p=1$, the off-diagonal sum is empty and the same count gives one degree of freedom; $p$ is fixed throughout, and no finite-sample calibration follows from this limit. [F8, F9, step 1.2, step 5.1, algebra] ∎

