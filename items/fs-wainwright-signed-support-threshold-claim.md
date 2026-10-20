---
id: fs-wainwright-signed-support-threshold-claim
kind: false-statement
title: The unrestricted Wainwright signed-support threshold claim fails without active-dimension control
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-linear-regression-objectives
  - lem-gaussian-sample-covariance-operator-concentration
  - lem-chi-square-degree-ratio
  - lem-finite-gaussian-max-comparison
  - lem-standard-gaussian-maximum-expectation-lower-bound
  - lem-lasso-active-set-stationarity
  - def-multivariate-normal-law
  - def-standard-normal-and-normal-laws
  - thm-nondegenerate-multivariate-normal-law-has-density
  - thm-independent-random-elements-have-product-joint-law
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-standard-gaussian-lipschitz-concentration
  - def-axiom-of-choice
  - def-dependent-choice
  - def-countable-choice
  - cor-markov-inequality-for-random-variables
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The finite Gaussian constructions use AC. The published Gaussian Lipschitz concentration supplier explicitly assumes AC, DC, and countable choice; all three are stated and carried. The local concentration and comparison arguments spend no additional choice principle."
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Wainwright, Sharp Thresholds for High-Dimensional and Noisy Recovery of Sparsity, 2006, Theorem 1 and §§3.1, 3.3–3.4"
      url: "https://arxiv.org/pdf/math/0605740"
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, §§1.1, 1.4, 2.2–2.4"
      url: "https://arxiv.org/pdf/2310.19244v1"
---

## Statement

Assume the Axiom of Choice, the Axiom of Dependent Choice, and countable choice. Wainwright's 2006 two-sided threshold claim is the following: consider a sequence of real Gaussian linear models with $S=\{j:\beta_j^*\ne0\}$, $s=|S|$, $N=p-s$, $\rho_n=\min_{j\in S}|\beta_j^*|$, $s,n-s,N\to\infty$, and
$$y_i=x_i^{\mathsf T}\beta^*+w_i,\qquad x_i\sim N_p(0,\Sigma),\quad w_i\sim N(0,\sigma^2),$$
where observations are independent, design and noise are independent, there is no separate intercept, and $\Sigma$ has unit diagonal. Suppose constants $C_{\min}>0$, $C_{\max}<\infty$, $D_{\max}<\infty$, and $0<\epsilon\le1$ satisfy
$$\lambda_{\min}(\Sigma_{SS})\ge C_{\min},\quad \lambda_{\max}(\Sigma)\le C_{\max},\quad \|(\Sigma_{SS})^{-1}\|_\infty\le D_{\max},\quad \|\Sigma_{S^cS}(\Sigma_{SS})^{-1}\|_\infty\le1-\epsilon,$$
where $\|M\|_\infty=\max_i\sum_j|M_{ij}|$. Define
$$\theta_\ell=\frac{\bigl(\sqrt{C_{\max}}-\sqrt{C_{\max}-1/C_{\max}}\bigr)^2}{C_{\max}(2-\epsilon)^2},\qquad \theta_u=\frac{C_{\max}}{\epsilon^2C_{\min}}.$$
Let $X$ have rows $x_i^{\mathsf T}$, $w=(w_i)$, and $y=(y_i)$. For $\lambda_n>0$, let success mean that there exists an optimizer with $\operatorname{sgn}(\widehat\beta)=\operatorname{sgn}(\beta^*)$ for the objective $\|y-X\beta\|_2^2/(2n)+\lambda_n\|\beta\|_1$. The threshold claim is that for every fixed $\nu>0$, success probability tends to zero if $n<2(\theta_\ell-\nu)s\log N+s+1$ for every non-increasing positive $\lambda_n$, and tends to one if $n>2(\theta_u+\nu)s\log N+s$, $\lambda_n\to0$, $n\lambda_n^2/\log N\to\infty$, and $\rho_n^{-1}(\lambda_n+\sqrt{\log s/n})\to0$.

## Statement references

[Wainwright 2006, Theorem 1 and its proof](https://arxiv.org/pdf/math/0605740)

## Facts & Assumptions

**Given:** The model, covariance assumptions, loss normalization, threshold constants, and claimed two-sided conclusion in the Statement refuted.

[F1] If an optimizer has positive signs on its active coordinates and the active design has full column rank, its active coefficients equal $(X_S^{\mathsf T}X_S/n)^{-1}(X_S^{\mathsf T}y/n-\lambda\mathbf1)$ ([[lem-lasso-active-set-stationarity]]).

[F2] For an iid standard-Gaussian matrix with dimension $d=o(n)$, its Gram matrix divided by $n$ converges in operator norm to the identity ([[lem-gaussian-sample-covariance-operator-concentration]]).

[F3] If $r/n\to1$, a sum of $r$ independent squared standard normals divided by $n$ converges in probability to one ([[lem-chi-square-degree-ratio]]).

[F4] For finite centered Gaussian vectors, larger pairwise increment variances imply a larger expected maximum ([[lem-finite-gaussian-max-comparison]]).

[F5] For sufficiently large $m$, the expected maximum of $m$ independent standard normals is at least $\frac14\sqrt{\log m}$ ([[lem-standard-gaussian-maximum-expectation-lower-bound]]).

[F6] An $L$-Lipschitz function of a standard Gaussian has upper-tail probability at most $e^{-r^2/(2L^2)}$ above its mean, under AC, DC, and countable choice ([[thm-standard-gaussian-lipschitz-concentration]]).

[F7] Under AC, a multivariate normal with covariance $C\succeq0$ is realized as $C^{1/2}G$ for a standard Gaussian vector $G$ ([[def-multivariate-normal-law]]).

[F8] A nondegenerate multivariate normal has density proportional to $e^{-(x-m)^{\mathsf T}\Sigma^{-1}(x-m)/2}$ ([[thm-nondegenerate-multivariate-normal-law-has-density]]).

[F9] Independent random elements have product joint law ([[thm-independent-random-elements-have-product-joint-law]]).

[F10] A standard normal has density $(2\pi)^{-1/2}e^{-x^2/2}$ ([[def-standard-normal-and-normal-laws]]).

[F11] For nonnegative $U$ and $a>0$, $\mathbb P(U\ge a)\le\mathbb E[U]/a$ ([[cor-markov-inequality-for-random-variables]]).

[F12] Product measures exist for sigma-finite probability factors and have the rectangle formula ([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]).

[A1] AC is assumed for the finite Gaussian laws ([[def-axiom-of-choice]]).

[A2] DC and countable choice are separately assumed for the Gaussian Lipschitz concentration result ([[def-dependent-choice]], [[def-countable-choice]]).

## Refutation

1.1 For integers $n\le\lceil e^e\rceil$, set $\lambda_n=1$, and for $n>\lceil e^e\rceil$ set $\lambda_n=(\log\log n)^{-1/2}$. Since $\log\log n>1$ in the latter range and is increasing, this defines a positive non-increasing sequence. For $k\ge2$, set $N_k=\lceil e^k\rceil$, $s_k=\lceil e^{k^2}\rceil$, $n_k=\lceil5s_kk\rceil$, and $p_k=s_k+N_k$. Use the model subsequence at sample sizes $n_k$, with $\Sigma_k=I_{p_k}$, $\beta_k^*=(\mathbf1_{s_k},0_{N_k})$, $\sigma^2=1$, and $\lambda_k=\lambda_{n_k}$. Then $C_{\min}=C_{\max}=D_{\max}=\epsilon=1$, $\rho_{n_k}=1$, and $\theta_u=1$, while $\log N_k\sim k$, $\log s_k\sim k^2$, $n_k/s_k\sim5k$, and $\log\log n_k\sim2\log k$. For $\nu=1/2$, $n_k>3s_k\log N_k+s_k$ eventually; also $\lambda_k\to0$, $n_k\lambda_k^2/\log N_k\to\infty$, and $\lambda_k+\sqrt{\log s_k/n_k}\to0$, so the claimed upper hypotheses hold. [given, construct, algebra]

2.1 Let $X_S$ be the active design, $A=X_S^{\mathsf T}X_S/n_k$, and $v=X_S^{\mathsf T}w/n_k$. Choose an orthogonal $R$ with first column $q=\mathbf1_{s_k}/\sqrt{s_k}$ and write $X_SR=[h,H]$. Each row keeps its $N(0,I_{s_k})$ projection laws under $R$; [F7]–[F10] give its factorized standard-normal density and [F9] gives independent rows, so entries of $h,H$ are mutually independent standard normals. Set $B=H^{\mathsf T}H$, $P_H=HB^{-1}H^{\mathsf T}$ when $B$ is invertible, and $d=h^{\mathsf T}(I-P_H)h$. Conditional on $H$, $d$ is chi-square with $n_k-s_k+1$ degrees of freedom. [A1, F7, F8, F9, F10, step 1.1, algebra]

3.1 Since $s_k/n_k\to0$ and $(n_k-s_k+1)/n_k\to1$, [F2] applied to $X_S$ and $H$ and [F3] applied conditionally to $d$ show that $E_{A,k}=\{\|A-I\|_{\mathrm{op}}\le1/2\}$, $E_{B,k}=\{\|B/n_k-I\|_{\mathrm{op}}\le1/2\}$, and $E_{d,k}=\{n_k/2\le d\le2n_k\}$ each have probability tending to one. Their intersection $E_k=E_{A,k}\cap E_{B,k}\cap E_{d,k}$ therefore has probability tending to one. [F2, F3, step 2.1, given, algebra]

4.1 On $E_{A,k}$, $\|A^{-1}\|_{\mathrm{op}}\le2$. Given $X_S$, $A^{-1}v$ is centered Gaussian with covariance $A^{-1}/n_k$, so each coordinate variance is at most $2/n_k$. Completing the square in [F10] gives moment-generating function $e^{\tau_i^2t^2/2}$; [F11] at $t=n_k/2$ yields $\mathbb P(|(A^{-1}v)_i|\ge1\mid X_S)\le2e^{-n_k/4}$. A union bound gives $\mathbb P(\|A^{-1}v\|_\infty\ge1\mid X_S)\le2s_ke^{-n_k/4}$ on $E_{A,k}$, hence $\mathbb P(E_{A,k}\cap\{\|A^{-1}v\|_\infty\ge1\})\le2s_ke^{-n_k/4}\to0$. [F10, F11, step 3.1, algebra]

4.2 For fixed full-rank $H$, the Gaussian coordinates of $h$ along $\operatorname{im}H$ and its orthogonal complement are independent by the factorized density [F8]–[F10]; hence $H^{\mathsf T}h\sim N(0,B)$ is independent of $d$, and $B^{-1}H^{\mathsf T}h$ has covariance $B^{-1}$. This conditional law is measurable because $B^{-1}$ and $P_H$ are Borel on $\det B>0$. Direct multiplication gives $\begin{pmatrix}h^{\mathsf T}h&h^{\mathsf T}H\\H^{\mathsf T}h&B\end{pmatrix}\binom{1}{-B^{-1}H^{\mathsf T}h}=\binom d0$; since $R^{\mathsf T}\mathbf1=\sqrt{s_k}e_1$, it follows that $A^{-1}\mathbf1=(n_k/d)\mathbf1+Z$, where $Z=-(n_k\sqrt{s_k}/d)R\binom0{B^{-1}H^{\mathsf T}h}$ is conditionally centered Gaussian with covariance $\Gamma=(n_k^2s_k/d^2)R\begin{pmatrix}0&0\\0&B^{-1}\end{pmatrix}R^{\mathsf T}$. On $E_{B,k}\cap E_{d,k}$, $\|\Gamma\|_{\mathrm{op}}\le8s_k/n_k$ and, for $i\ne j$, $\mathbb E[(Z_i-Z_j)^2\mid H,d]\ge(n_k^2s_k/d^2)(1/(2n_k))\|e_i-e_j\|_2^2\ge s_k/(4n_k)$. [A1, F7, F8, F9, F10, step 2.1, step 3.1, algebra]

5.1 Conditional on $H,d$ when $E_{B,k}\cap E_{d,k}$ holds, use [F12] to put the law of $Z$ and an independent standard Gaussian vector $G$ on a product space, and set $Y_i=\sqrt{s_k/(8n_k)}G_i$. By [F4], their increment variances, and [F5], $\mathbb E[\max_iZ_i\mid H,d]\ge\mathbb E\max_iY_i\ge(4\sqrt8)^{-1}\sqrt{s_k\log s_k/n_k}$. [F4, F5, F7, F10, F12, step 4.2, given, algebra]

6.1 The map $z\mapsto-\max_i z_i$ is 1-Lipschitz. By [F7], represent $Z=\Gamma^{1/2}G$ conditionally and apply [F6] with Lipschitz constant $\sqrt{\|\Gamma\|_{\mathrm{op}}}$ and deviation half the mean bound in step 5.1; uniformly when $E_{B,k}\cap E_{d,k}$ holds, $\mathbb P(\max_iZ_i<\tfrac12\mathbb E[\max_iZ_i\mid H,d]\mid H,d)\le e^{-c\log s_k}\to0$ for some fixed $c>0$. Hence $\max_iZ_i\ge(8\sqrt8)^{-1}\sqrt{s_k\log s_k/n_k}$ with probability tending to one. [A1, A2, F6, F7, step 4.2, step 5.1, algebra]

7.1 On $E_{d,k}$, $n_k/d\ge1/2$. Step 6.1 gives $\max_iZ_i\ge(8\sqrt8)^{-1}\sqrt{s_k\log s_k/n_k}$ with probability tending to one, and $\mathbb P(E_{B,k}\cap E_{d,k})\to1$. Since $A^{-1}\mathbf1=(n_k/d)\mathbf1+Z$ on this event, and step 1.1 gives $\log s_k\sim k^2$, $n_k/s_k\sim5k$, and $\lambda_k\sim(2\log k)^{-1/2}$, it follows that $\lambda_k\max_i(A^{-1}\mathbf1)_i\ge\lambda_k(1/2+(8\sqrt8)^{-1}\sqrt{s_k\log s_k/n_k})\to\infty$ in probability; the diverging term has order $\sqrt{k/\log k}$. [step 1.1, step 3.1, step 4.2, step 6.1, algebra]

8.1 By steps 3.1, 4.1, and 7.1 and a union bound, with probability tending to one $E_{A,k}$ holds, $\|A^{-1}v\|_\infty<1$, and $\lambda_k\max_i(A^{-1}\mathbf1)_i>2$. If an optimizer had the correct signed support, [F1] would force $\widehat\beta_S=A^{-1}(X_S^{\mathsf T}y/n_k-\lambda_k\mathbf1)=\mathbf1+A^{-1}v-\lambda_kA^{-1}\mathbf1$. At an index attaining the maximum, these events imply $\widehat\beta_i<0$, contradicting the required positive sign. Thus exact signed-support success probability tends to zero, refuting the upper implication and the combined threshold statement. [F1, step 3.1, step 4.1, step 7.1, given, algebra] ∎
## Source notes

The counterexample uses $\log s_k/\log(p_k-s_k)\to\infty$. It isolates the missing active-coordinate fluctuation term in the claimed upper implication; it makes no prediction-risk claim and does not establish the separate lower-threshold branch.
