---
id: fs-wainwright-signed-support-threshold-claim
kind: false-statement
title: The unrestricted Wainwright signed-support threshold claim fails without active-dimension control
status: draft
origin: pipeline
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
  - thm-standard-gaussian-lipschitz-concentration
  - def-axiom-of-choice
  - def-dependent-choice
  - def-countable-choice
  - cor-markov-inequality-for-random-variables
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

## Statement refuted

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

[A1] AC, DC, and countable choice hold; these are separate stated hypotheses ([[def-axiom-of-choice]], [[def-dependent-choice]], [[def-countable-choice]]).

## Counterexample

1.1 For integers $k\ge2$, set
$$N_k=\lceil e^k\rceil,\qquad s_k=\lceil e^{k^2}\rceil,\qquad n_k=\lceil5s_kk\rceil,\qquad p_k=s_k+N_k.$$
Take $\Sigma_k=I_{p_k}$, $\beta_k^*=(\mathbf1_{s_k},0_{N_k})$, $\sigma^2=1$, and $\lambda_k=(\log\log n_k)^{-1/2}$. Then $C_{\min}=C_{\max}=D_{\max}=\epsilon=1$, $\rho_{n_k}=1$, and $\theta_u=1$. Also $\log N_k\sim k$, $\log s_k\sim k^2$, $n_k/s_k\sim5k$, and $\log\log n_k\sim2\log k$. With $\nu=1/2$, $n_k>3s_k\log N_k+s_k$ for large $k$; moreover $\lambda_k\to0$, $n_k\lambda_k^2/\log N_k\to\infty$, and $\lambda_k+\sqrt{\log s_k/n_k}\to0$. Thus every hypothesis of the claimed upper implication holds. [given, construct, algebra]

1.2 Write $X_S$ for the $n_k\times s_k$ active design, $A=X_S^{\mathsf T}X_S/n_k$, and $v=X_S^{\mathsf T}w/n_k$. Since $s_k/n_k\to0$, [F2] gives $\|A-I_{s_k}\|_{\mathrm{op}}\to0$ in probability. Choose an orthogonal $R$ whose first column is $q=\mathbf1_{s_k}/\sqrt{s_k}$ and write $X_SR=[h,H]$. Each row of $X_S$ has the standard Gaussian law with covariance identity; its orthogonal transform has the same normal projection laws and therefore is again $N_{s_k}(0,I_{s_k})$. By [F8], its density factors into independent standard-normal coordinates. Row independence and [F9] then show that the entries of $h$ and $H$ are mutually independent standard normals. Put $B=H^{\mathsf T}H$ and, on the event $B$ is invertible, $P_H=HB^{-1}H^{\mathsf T}$ and $d=h^{\mathsf T}(I-P_H)h$. Applying [F2] to $H$ and [F3] to the $n_k-s_k+1$ orthogonal Gaussian coordinates in $d$ shows that the event
$$E_k=\{\|A-I\|_{\mathrm{op}}\le1/2,\ \|B/n_k-I\|_{\mathrm{op}}\le1/2,\ n_k/2\le d\le2n_k\}$$
has probability tending to one. [A1, F2, F3, F8, F9, step 1.1, algebra]

2.1 Conditional on a fixed full-rank $H$, the Gaussian coordinates of $h$ along $\operatorname{im}H$ and its orthogonal complement are independent: in an orthonormal basis adapted to these subspaces, the standard Gaussian density factors into the product of coordinate densities by [F8]–[F10]. Consequently $H^{\mathsf T}h$ is conditionally $N(0,B)$ and is independent of $d$; hence $B^{-1}H^{\mathsf T}h$ conditionally has covariance $B^{-1}$. Write the Gram matrix in this basis as
$$\begin{pmatrix}h^{\mathsf T}h&h^{\mathsf T}H\\H^{\mathsf T}h&B\end{pmatrix}.$$
Multiplication shows this matrix sends $\binom{1}{-B^{-1}H^{\mathsf T}h}$ to $\binom{d}{0}$, so its inverse sends $\binom{\sqrt{s_k}}{0}$ to $\frac{\sqrt{s_k}}{d}\binom{1}{-B^{-1}H^{\mathsf T}h}$. Since $R^{\mathsf T}\mathbf1=\sqrt{s_k}e_1$, this gives
$$A^{-1}\mathbf1_{s_k}=\frac{n_k}{d}\mathbf1_{s_k}+Z,\qquad Z=-\frac{n_k\sqrt{s_k}}{d}R\binom{0}{B^{-1}H^{\mathsf T}h},$$
so, conditional on $H,d$, $Z$ is centered Gaussian with covariance
$$\Gamma=\frac{n_k^2s_k}{d^2}R\begin{pmatrix}0&0\\0&B^{-1}\end{pmatrix}R^{\mathsf T}.$$
On $E_k$, $\|\Gamma\|_{\mathrm{op}}\le8s_k/n_k$, and for $i\ne j$, because $e_i-e_j\perp q$,
$$\mathbb E[(Z_i-Z_j)^2\mid H,d]\ge\frac{n_k^2s_k}{d^2}\frac{1}{2n_k}\|e_i-e_j\|_2^2\ge\frac{s_k}{4n_k}.$$
[A1, F7, F8, F9, F10, step 1.2, algebra]

3.1 Conditional on $H,d$ on $E_k$, compare $Z$ by [F4] with independent $Y_i\sim N(0,s_k/(8n_k))$, whose pairwise increment variances equal $s_k/(4n_k)$. By [F5],
$$\mathbb E[\max_i Z_i\mid H,d]\ge\mathbb E\max_iY_i\ge\frac{1}{4\sqrt8}\sqrt{\frac{s_k\log s_k}{n_k}}.$$
The function $z\mapsto-\max_i z_i$ is 1-Lipschitz in Euclidean norm. By [F7], represent $Z=\Gamma^{1/2}G$ conditionally; [F6] applied with Lipschitz constant $\sqrt{\|\Gamma\|_{\mathrm{op}}}$ gives, uniformly on $E_k$,
$$\mathbb P\!\left(\max_iZ_i<\frac12\mathbb E[\max_iZ_i\mid H,d]\,\middle|\,H,d\right)\le e^{-c\log s_k}\to0$$
for a fixed $c>0$, using the covariance bound in step 2.1. Thus with probability tending to one, $\max_i Z_i\ge(8\sqrt8)^{-1}\sqrt{s_k\log s_k/n_k}$. [A1, F4, F5, F6, F7, step 2.1, algebra]

4.1 Since $\log s_k\sim k^2$ and $n_k/s_k\sim5k$, step 3.1 implies
$$\lambda_k\max_i(A^{-1}\mathbf1)_i\ge\lambda_k\left(\frac12+\frac{1}{8\sqrt8}\sqrt{\frac{s_k\log s_k}{n_k}}\right)\longrightarrow+\infty$$
in probability on $E_k$. The diverging term is of order $\sqrt{k/\log k}$. [step 1.1, step 2.1, step 3.1, algebra]

5.1 On $\|A-I\|_{\mathrm{op}}\le1/2$, $\|A^{-1}\|_{\mathrm{op}}\le2$. Conditional on $X_S$, $A^{-1}v$ is centered Gaussian with covariance $A^{-1}/n_k$, so each coordinate has variance $\tau_i^2\le2/n_k$. Completing the square in [F10] gives $\mathbb E e^{tG}=e^{\tau_i^2t^2/2}$ for a centered normal $G$ of variance $\tau_i^2$. Applying [F11] to $e^{tG}$ and $e^{-tG}$ and choosing $t=1/\tau_i^2$ gives $\mathbb P(|G|\ge1\mid X_S)\le2e^{-1/(2\tau_i^2)}\le2e^{-n_k/4}$. A union bound yields
$$\mathbb P(\|A^{-1}v\|_\infty\ge1\mid X_S)\le2s_ke^{-n_k/4}\to0.$$
[F2, F10, F11, step 1.2, algebra]

6.1 If an optimizer had the correct signed support, all its active coordinates would be positive, and [F1] would force
$$\widehat\beta_S=A^{-1}(X_S^{\mathsf T}y/n_k-\lambda_k\mathbf1)=\mathbf1+A^{-1}v-\lambda_kA^{-1}\mathbf1.$$
By steps 4.1 and 5.1, with probability tending to one there is an index $i$ with $\lambda_k(A^{-1}\mathbf1)_i>2$ while $\|A^{-1}v\|_\infty<1$. Then $\widehat\beta_i<0$, contradicting the required positive sign. Hence the probability that any optimizer has the correct signed support tends to zero, not one. This refutes the upper implication and therefore the combined threshold statement. [F1, step 4.1, step 5.1, given, algebra] ∎

## Source notes

The counterexample uses $\log s_k/\log(p_k-s_k)\to\infty$. It isolates the missing active-coordinate fluctuation term in the claimed upper implication; it makes no prediction-risk claim and does not establish the separate lower-threshold branch.
