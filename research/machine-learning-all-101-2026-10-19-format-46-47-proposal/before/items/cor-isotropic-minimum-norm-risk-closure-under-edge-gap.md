---
id: cor-isotropic-minimum-norm-risk-closure-under-edge-gap
kind: corollary
title: "Isotropic minimum-norm risk limits under a positive spectral gap"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 7
deps:
  - def-axiom-of-choice
  - def-identically-distributed-and-iid-random-variables
  - def-moore-penrose-pseudoinverse
  - def-marchenko-pastur-measure
  - def-weak-convergence-of-borel-probability-measures
  - thm-dominated-convergence
  - cor-rank-equals-number-of-nonzero-singular-values
  - lem-moore-penrose-products-are-orthogonal-projectors
  - lem-marchenko-pastur-formula-defines-a-finite-measure
  - lem-deformed-mp-fixed-point-solution-is-unique
  - thm-directional-sample-covariance-resolvent-limit
  - thm-marchenko-pastur-law-for-sample-covariance
  - thm-singular-value-decomposition
  - thm-smallest-positive-eigenvalue-sample-covariance-edge
---
## Statement

Assume the Axiom of Choice. Let $(\xi_{ij})_{i,j\ge1}$ be one infinite iid array of real random variables with mean zero, variance one and finite fourth moment. For each $n$, let $p_n$ be a positive integer with $p_n/n\to\gamma\in(0,\infty)\setminus\{1\}$ and let $X_n=(\xi_{ij})_{1\le i\le n,\,1\le j\le p_n}$ be the upper-left block. Let $\beta_n\in\mathbb R^{p_n}$ be deterministic with $\|\beta_n\|_2=r>0$. Let $\varepsilon_n\in\mathbb R^n$ have independent centered components of variance $\sigma^2$, independent of $X_n$ (so its covariance is $\sigma^2I_n$), and let $z_{0,n}\in\mathbb R^{p_n}$ be independent of $(X_n,\varepsilon_n)$ with mean zero and covariance  $I_{p_n}$. Set $y_n=X_n\beta_n+\varepsilon_n$, $\widehat\beta_n=X_n^+y_n$, and $S_n=X_n^{\mathsf T}X_n/n$. Define the design-conditional prediction risk by $\mathcal R_n=\mathbb E_{\varepsilon_n,z_{0,n}}[(z_{0,n}^{\mathsf T}\widehat\beta_n-z_{0,n}^{\mathsf T}\beta_n)^2\mid X_n]$. If $\gamma<1$, then almost surely $\mathcal R_n\to\sigma^2\gamma/(1-\gamma)$. If $\gamma>1$, then almost surely $\mathcal R_n\to r^2(1-1/\gamma)+\sigma^2/(\gamma-1)$.

## Statement references

Hastie, Montanari, Rosset, and Tibshirani, Theorem 1 and Appendix C.2 ([full paper PDF](https://arxiv.org/pdf/1903.08560)).

Bai, Miao, and Pan, Theorem 1 ([full paper PDF](https://arxiv.org/pdf/0708.1720)).

## Facts & Assumptions

**Given:** The nested real iid design, deterministic signal, independent centered noise with covariance $\sigma^2I_n$, and AC in the Statement.

[A1] The Axiom of Choice permits a choice function for every family of nonempty sets ([[def-axiom-of-choice]]).

[A2] The noise vector is independent of the design, centered, and has covariance $\sigma^2I_n$ as stated.

[A3] The test feature is independent of the design and noise, centered, and has covariance $I_{p_n}$ as stated.

[F1] The Moore–Penrose inverse $X^+$ is characterized by the four Penrose equations ([[def-moore-penrose-pseudoinverse]]).

[F2] $X^+X$ and $XX^+$ are the orthogonal projections onto the row and column spaces, respectively ([[lem-moore-penrose-products-are-orthogonal-projectors]]).

[F3] Positive covariance eigenvalues are squared positive singular values divided by the sample size, and their number is the matrix rank ([[thm-singular-value-decomposition]], [[cor-rank-equals-number-of-nonzero-singular-values]]).

[F4] For the nested design, the smallest positive covariance eigenvalue has limit $(1-\sqrt\gamma)^2$ for $\gamma<1$ and $(\sqrt\gamma-1)^2$ for $\gamma>1$, with eventual full rectangular rank ([[thm-smallest-positive-eigenvalue-sample-covariance-edge]]).

[F5] The empirical spectral distribution of $S_n$ converges almost surely to the Marchenko–Pastur law with aspect ratio $\gamma$ ([[thm-marchenko-pastur-law-for-sample-covariance]]).

[F6] The directional spectral measure of $S_n$ in each deterministic unit direction converges almost surely to the isotropic specialization $F_{\gamma,\delta_1}$ ([[thm-directional-sample-covariance-resolvent-limit]]).

[F7] The Marchenko–Pastur probability law has an atom $(1-1/\gamma)_+$ at zero, positive support $[(1-\sqrt\gamma)^2,(1+\sqrt\gamma)^2]$, and transform satisfying $1+zm=m/(1+\gamma m)$ ([[def-marchenko-pastur-measure]], [[lem-marchenko-pastur-formula-defines-a-finite-measure]]).

[F8] Weak convergence gives convergence of integrals against every bounded continuous test function ([[def-weak-convergence-of-borel-probability-measures]]).

[F9] The isotropic limit $F_{\gamma,\delta_1}$ equals the Marchenko–Pastur law: both Stieltjes transforms solve the same fixed-point equation, and the solution is unique ([[lem-deformed-mp-fixed-point-solution-is-unique]], [[lem-marchenko-pastur-formula-defines-a-finite-measure]]).

[F10] Dominated convergence passes limits through integrals under an integrable majorant ([[thm-dominated-convergence]]).

[F11] Iid entries are independent and share one common law ([[def-identically-distributed-and-iid-random-variables]]).

## Proof

1.1 Put $P_{\ker X_n}=I_{p_n}-X_n^+X_n$. For any fixed $v\in\mathbb R^{p_n}$, $\mathbb E_{z_{0,n}}(z_{0,n}^{\mathsf T}v)^2=v^{\mathsf T}\mathbb E[z_{0,n}z_{0,n}^{\mathsf T}]v=\|v\|_2^2$, so the stated prediction risk equals $\mathbb E_{\varepsilon_n}[\|\widehat\beta_n-\beta_n\|_2^2\mid X_n]$. By [F2], $X_n^+X_n$ is the row-space projection, so $\widehat\beta_n-\beta_n=-P_{\ker X_n}\beta_n+X_n^+\varepsilon_n$. Conditional on $X_n$, the cross term has expectation zero because $\mathbb E[\varepsilon_n\mid X_n]=0$. Its noise contribution is
$$\mathbb E_{\varepsilon_n}\|X_n^+\varepsilon_n\|_2^2=\sigma^2\operatorname{tr}(X_n^+(X_n^+)^{\mathsf T})=\sigma^2\operatorname{tr}((X_n^{\mathsf T}X_n)^+)=\frac{\sigma^2}{n}\operatorname{tr}(S_n^+),$$
where the middle equality follows by writing an SVD and the last uses $(aB)^+=a^{-1}B^+$ for $a>0$. With $x_n=\beta_n/r$, this proves the exact identity
$$\mathcal R_n=r^2x_n^{\mathsf T}P_{\ker X_n}x_n+\frac{\sigma^2}{n}\operatorname{tr}(S_n^+).$$
[given, A2, A3, F1, F2, F3, algebra]

2.1 Suppose $\gamma<1$ and set $a=(1-\sqrt\gamma)^2>0$. By [F4], $X_n$ has full column rank eventually and every eigenvalue of $S_n$ is at least $a/2$ eventually. Thus the bias term in step 1.1 is zero and $p_n^{-1}\operatorname{tr}(S_n^+)=\int f(t)d\mu_n(t)$ for the bounded continuous function $f(t)=1/\max(t,a/2)$. By [F5] and [F8], this converges to $J_\gamma=\int t^{-1}d\mu_\gamma(t)$, since the Marchenko–Pastur support is bounded below by $a$. For $s>0$, define $m_\gamma(-s)=\int(t+s)^{-1}d\mu_\gamma(t)$. The integrands are bounded by $1/a$ and converge pointwise to $1/t$, so [F10] gives $m_\gamma(-s)\to J_\gamma$ as $s\downarrow0$. The fixed-point equation in [F7], initially stated for $z\in\mathbb C^+$, extends to $z=-s<0$ by dominated convergence in its defining integral; its denominator stays nonzero because $1+\gamma m_\gamma(-s)>0$. Taking $s\downarrow0$ yields $1+(\gamma-1)J_\gamma=0$, hence $J_\gamma=1/(1-\gamma)$. Since $p_n/n\to\gamma$, step 1.1 gives $\mathcal R_n\to\sigma^2\gamma/(1-\gamma)$. [given, A1, F4, F5, F7, F8, F10, F11, step 1.1, algebra]

3.1 Suppose $\gamma>1$ and set $a=(\sqrt\gamma-1)^2>0$. By [F4], $X_n$ has full row rank eventually, $S_n$ has exactly $p_n-n$ zero eigenvalues, and all positive eigenvalues are at least $a/2$ eventually. The continuous function $g(t)=\max(1-2t/a,0)$ equals one at zero and vanishes on the positive spectrum for all sufficiently large $n$. Hence $x_n^{\mathsf T}P_{\ker X_n}x_n=\int g(t)d\mu_n^{x_n}(t)\to\int g(t)dF_{\gamma,\delta_1}(t)=1-1/\gamma$ by [F6], [F7], and [F9]; [F9] identifies the limit with $\mu_\gamma$, on whose positive support $g=0$ and whose zero atom has mass $1-1/\gamma$. Define $h(0)=0$ and, for $t>0$, $h(t)=t^{-1}\min(1,\max(0,4t/a-1))$. This is bounded and continuous, equals zero at zero, and equals $1/t$ for $t\ge a/2$. Therefore $p_n^{-1}\operatorname{tr}(S_n^+)=\int h(t)d\mu_n(t)\to J_\gamma^+:=\int_{(0,\infty)}t^{-1}d\mu_\gamma(t)$ by [F5] and [F8]. [F7] gives $m_\gamma(-s)=(1-1/\gamma)/s+J_\gamma^++o(1)$ as $s\downarrow0$: subtract the zero atom and use [F10] by dominated convergence on the positive support, whose lower endpoint is $a>0$. To compute the constant term, write $\alpha=1-1/\gamma$ and substitute $m=\alpha/s+J_\gamma^++o(1)$ into $1+(\gamma-1-s)m-\gamma s m^2=0$, the fixed-point equation at $z=-s$ (again obtained by dominated convergence from [F7]). The coefficient of $s^{-1}$ vanishes because $\gamma\alpha=\gamma-1$; the constant term is $1-\alpha-(\gamma-1)J_\gamma^++o(1)$. It must vanish, so $J_\gamma^+=1/[\gamma(\gamma-1)]$. Using $p_n/n\to\gamma$ in step 1.1 proves $\mathcal R_n\to r^2(1-1/\gamma)+\sigma^2/(\gamma-1)$. [given, A1, F4, F5, F6, F7, F8, F9, F10, F11, step 1.1, algebra] ∎

## Proof references

Hastie, Montanari, Rosset, and Tibshirani, Theorem 1 and Appendix C.2 ([full paper PDF](https://arxiv.org/pdf/1903.08560)). The proof above separates the conditional noise expectation from the design almost-sure limits and uses a positive-edge cutoff rather than a $z\downarrow0$ interchange.
