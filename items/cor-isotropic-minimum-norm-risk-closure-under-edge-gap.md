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
  - lem-bounded-complex-resolvent-quadratic-form-concentration
  - lem-largest-sample-covariance-eigenvalue-upper-bound
  - cor-markov-inequality-for-random-variables
  - cor-first-borel-cantelli-lemma-for-events
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "T. Hastie, A. Montanari, S. Rosset, and R. J. Tibshirani, Surprises in High-Dimensional Ridgeless Least Squares Interpolation"
      url: "https://arxiv.org/pdf/1903.08560"
    - title: "Z. D. Bai, B. Q. Miao, and G. M. Pan, On Asymptotics of Eigenvectors of Large Sample Covariance Matrix"
      url: "https://arxiv.org/pdf/0708.1720"
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

[F2] $X^+X$ and $XX^+$ are orthogonal projections with ranges $\operatorname{Ran}(X^+)$ and $\operatorname{Ran}(X)$, respectively ([[lem-moore-penrose-products-are-orthogonal-projectors]]).

[F3] Positive covariance eigenvalues are squared positive singular values divided by the sample size, and their number is the matrix rank ([[thm-singular-value-decomposition]], [[cor-rank-equals-number-of-nonzero-singular-values]]).

[F4] For the nested design, the smallest positive covariance eigenvalue has limit $(1-\sqrt\gamma)^2$ for $\gamma<1$ and $(\sqrt\gamma-1)^2$ for $\gamma>1$, with eventual full rectangular rank ([[thm-smallest-positive-eigenvalue-sample-covariance-edge]]).

[F5] The empirical spectral distribution of $S_n$ converges almost surely to the Marchenko–Pastur law with aspect ratio $\gamma$ ([[thm-marchenko-pastur-law-for-sample-covariance]]).

[F6] For upper-left $d\times N_d$ blocks indexed by their row dimension $d$, the directional theorem with identity population gives almost-sure weak convergence to $F_{\gamma,\delta_1}$ when $d/N_d\to\gamma$ ([[thm-directional-sample-covariance-resolvent-limit]]). Repeated dimensions $p_n$ require the argument below.

[F7] The Marchenko–Pastur probability law has an atom $(1-1/\gamma)_+$ at zero, positive support $[(1-\sqrt\gamma)^2,(1+\sqrt\gamma)^2]$, and transform satisfying $1+zm=m/(1+\gamma m)$ ([[def-marchenko-pastur-measure]], [[lem-marchenko-pastur-formula-defines-a-finite-measure]]).

[F8] Weak convergence gives convergence of integrals against every bounded continuous test function ([[def-weak-convergence-of-borel-probability-measures]]).

[F9] The deformed fixed-point solution is unique when both its transform and its companion transform have positive imaginary part ([[lem-deformed-mp-fixed-point-solution-is-unique]]).

[F10] Dominated convergence passes limits through integrals under an integrable majorant ([[thm-dominated-convergence]]).

[F11] Iid entries are independent and share one common law ([[def-identically-distributed-and-iid-random-variables]]).

[F12] The finite-column proof of bounded resolvent concentration, steps 1.1–4.1, bounds the fourth moment of each leave-one-column increment by $C/N^4$ and that of the centered directional resolvent by $C/N^2$, with constants independent of the unit direction and row dimension when the population is the identity ([[lem-bounded-complex-resolvent-quadratic-form-concentration]]).

[F13] For a nested real iid unit-variance finite-fourth-moment array with $p_n/n\to\gamma$, almost surely $\limsup\|X_n\|_{\mathrm{op}}/\sqrt n\le1+\sqrt\gamma$ ([[lem-largest-sample-covariance-eigenvalue-upper-bound]], [F3]).

[F14] Markov bounds a nonnegative random variable's tail by its expectation divided by the threshold; summable event probabilities imply only finitely many occurrences almost surely ([[cor-markov-inequality-for-random-variables]], [[cor-first-borel-cantelli-lemma-for-events]]).

## Proof

1.1 Put $P_{\ker X_n}=I_{p_n}-X_n^+X_n$. For any fixed $v\in\mathbb R^{p_n}$, $\mathbb E_{z_{0,n}}(z_{0,n}^{\mathsf T}v)^2=v^{\mathsf T}\mathbb E[z_{0,n}z_{0,n}^{\mathsf T}]v=\|v\|_2^2$, so the stated prediction risk equals $\mathbb E_{\varepsilon_n}[\|\widehat\beta_n-\beta_n\|_2^2\mid X_n]$. By [F2], $P_n:=X_n^+X_n$ is an orthogonal projection. The Penrose equation $X_nX_n^+X_n=X_n$ shows $\ker(P_n)=\ker(X_n)$: if $X_nv=0$, then $P_nv=0$, and if $P_nv=0$, then $X_nv=X_nX_n^+X_nv=X_nP_nv=0$. Hence $\operatorname{Ran}(P_n)=\ker(X_n)^\perp=\operatorname{Ran}(X_n^{\mathsf T})$ by the right-singular-vector basis in [F3], so $\widehat\beta_n-\beta_n=-P_{\ker X_n}\beta_n+X_n^+\varepsilon_n$. Conditional on $X_n$, the cross term has expectation zero because $\mathbb E[\varepsilon_n\mid X_n]=0$. Its noise contribution is $$\mathbb E_{\varepsilon_n}\|X_n^+\varepsilon_n\|_2^2=\sigma^2\operatorname{tr}(X_n^+(X_n^+)^{\mathsf T})=\sigma^2\operatorname{tr}((X_n^{\mathsf T}X_n)^+)=\frac{\sigma^2}{n}\operatorname{tr}(S_n^+),$$ where the middle equality follows by writing an SVD and the last uses $(aB)^+=a^{-1}B^+$ for $a>0$. With $x_n=\beta_n/r$, this proves the exact identity $$\mathcal R_n=r^2x_n^{\mathsf T}P_{\ker X_n}x_n+\frac{\sigma^2}{n}\operatorname{tr}(S_n^+).$$ [given, A2, A3, F1, F2, F3, algebra]

1.2 First identify the isotropic limit. By [F7], $\nu_\gamma=(1-\gamma)\delta_0+\gamma\mu_\gamma$ is a nonnegative probability measure: when $\gamma>1$, the negative coefficient cancels exactly the zero atom of $\gamma\mu_\gamma$. Thus $u=-(1-\gamma)/z+\gamma m_\gamma(z)$ is its Stieltjes transform and has positive imaginary part, as does $m_\gamma(z)$. The scalar equation in [F7] rearranges to $m_\gamma=(1-\gamma-z-\gamma z m_\gamma)^{-1}$; [F9] therefore identifies $F_{\gamma,\delta_1}=\mu_\gamma$. For any deterministic unit directions $x_n$ and fixed $z\in\mathbb C^+$, we claim $\mathbb E[x_n^{\mathsf T}(S_n-zI)^{-1}x_n]\to m_\gamma(z)$. Indeed, every subsequence has a further subsequence $(n_j)$ with strictly increasing $p_{n_j}$, since $p_n\to\infty$. In the transposed infinite array, prescribe $N_d=n_j$ and direction $x_{n_j}$ at $d=p_{n_j}$, and at all other dimensions prescribe $N_d=\max(1,\lfloor d/\gamma\rfloor)$ and the first coordinate vector. Then $d/N_d\to\gamma$, so [F6] applies to this completed sequence. The bound $|(t-z)^{-1}|\le1/\operatorname{Im}z$ and [F10] give the claimed expectation limit along $(n_j)$. The subsequence criterion gives it along the original sequence. This argument also applies to each fixed standardized bounded truncation of the entry law. [given, A1, F6, F7, F9, F10, F11, algebra]

2.1 Suppose $\gamma<1$ and set $a=(1-\sqrt\gamma)^2>0$. By [F4], $X_n$ has full column rank eventually and every eigenvalue of $S_n$ is at least $a/2$ eventually. Thus the bias term in step 1.1 is zero and $p_n^{-1}\operatorname{tr}(S_n^+)=\int f(t)d\mu_n(t)$ for the bounded continuous function $f(t)=1/\max(t,a/2)$. By [F5] and [F8], this converges to $J_\gamma=\int t^{-1}d\mu_\gamma(t)$, since the Marchenko–Pastur support is bounded below by $a$. For $s>0$, define $m_\gamma(-s)=\int(t+s)^{-1}d\mu_\gamma(t)$. The integrands are bounded by $1/a$ and converge pointwise to $1/t$, so [F10] gives $m_\gamma(-s)\to J_\gamma$ as $s\downarrow0$. The fixed-point equation in [F7], initially stated for $z\in\mathbb C^+$, extends to $z=-s<0$ by dominated convergence in its defining integral; its denominator stays nonzero because $1+\gamma m_\gamma(-s)>0$. Taking $s\downarrow0$ yields $1+(\gamma-1)J_\gamma=0$, hence $J_\gamma=1/(1-\gamma)$. Since $p_n/n\to\gamma$, step 1.1 gives $\mathcal R_n\to\sigma^2\gamma/(1-\gamma)$. [given, A1, F4, F5, F7, F8, F10, F11, step 1.1, algebra]

2.2 For such a bounded unit-variance truncation, let $Z_n$ be its $n\times p_n$ block and $S_n^{(K)}=Z_n^{\mathsf T}Z_n/n$. Apply the finite-column argument [F12] to $Z_n^{\mathsf T}$, which has $n$ independent columns and identity population. More explicitly, each leave-one-column resolvent quadratic-form increment $U_j$ has $\mathbb E|U_j|^4\le C_K n^{-4}$ by the bounded-entry eighth-moment linear-form estimate; its column-filtration difference $D_j$ satisfies $\mathbb E|D_j|^4\le16\mathbb E|U_j|^4$. The fourth-moment recursion in [F12], $a_j\le a_{j-1}+C_K\sqrt{a_{j-1}}/n^2+C_K/n^4$, gives $a_j\le C'_K j^2/n^4$, and hence $\mathbb E|x_n^{\mathsf T}((S_n^{(K)}-zI)^{-1}-\mathbb E(S_n^{(K)}-zI)^{-1})x_n|^4\le C'_K/n^2$. These are finite-matrix estimates, with no indexing or distinctness assumption on $p_n$. By [F14], their tails are summable in the original index $n$. Together with step 1.2 this proves $x_n^{\mathsf T}(S_n^{(K)}-zI)^{-1}x_n\to m_\gamma(z)$ almost surely for each fixed $K,z$. [given, F12, F14, step 1.2, algebra]

3.1 To remove boundedness, put $\xi^{(K)}=\xi\mathbf1_{\{|\xi|\le K\}}-\mathbb E[\xi\mathbf1_{\{|\xi|\le K\}}]$, $\sigma_K^2=\mathbb E|\xi^{(K)}|^2\to1$, and $\tau_K^2=\mathbb E|\xi-\xi^{(K)}|^2\to0$. For sufficiently large integers $K$, form $Z_n$ from $\xi^{(K)}/\sigma_K$ and write $X_n=\sigma_K Z_n+D_n$. The residual entries are centered with finite fourth moment and variance $\tau_K^2$. Applying [F13] to the original, standardized and variance-normalized residual arrays yields, with $L=1+\sqrt\gamma$, almost surely $\limsup\|X_n\|/\sqrt n\le L$, $\limsup\|Z_n\|/\sqrt n\le L$, and $\limsup\|D_n\|/\sqrt n\le L\tau_K$. If $\tau_K=0$, countability of the array makes every residual entry zero almost surely. The Gram-matrix identity then gives $\limsup\|S_n-S_n^{(K)}\|\le L^2((1+\sigma_K)\tau_K+|\sigma_K^2-1|)$. For $\eta=\operatorname{Im}z>0$, the resolvent identity bounds the difference of their directional transforms by $\eta^{-2}\|S_n-S_n^{(K)}\|$. Intersect the probability-one events over integers $K$ and let $K\to\infty$ in step 2.2 to obtain $x_n^{\mathsf T}(S_n-zI)^{-1}x_n\to m_\gamma(z)$ almost surely. [given, F3, F11, F13, step 2.2, algebra]

4.1 Suppose $\gamma>1$ and set $a=(\sqrt\gamma-1)^2>0$. By [F4], $X_n$ has full row rank eventually, $S_n$ has exactly $p_n-n$ zero eigenvalues, and all positive eigenvalues are at least $a/2$ eventually. For each rational $s>0$, the spectral identity bounds the difference between the directional transforms at $-s$ and $-s+i\eta$ by $\eta/s^2$, both for $S_n$ and for $\mu_\gamma$. Use step 3.1 at $-s+i/k$ for all positive integers $k$, then let $k\to\infty$, to obtain $x_n^{\mathsf T}(S_n+sI)^{-1}x_n\to m_\gamma(-s)$ on one probability-one event for all rational $s>0$. The gap gives $0\le s x_n^{\mathsf T}(S_n+sI)^{-1}x_n-x_n^{\mathsf T}P_{\ker X_n}x_n\le2s/a$ eventually. Since $s m_\gamma(-s)\to\mu_\gamma(\{0\})=1-1/\gamma$ by [F7] and [F10], letting rational $s\downarrow0$ proves the required bias limit. Define $h(0)=0$ and, for $t>0$, $h(t)=t^{-1}\min(1,\max(0,4t/a-1))$. This is bounded and continuous, equals zero at zero, and equals $1/t$ for $t\ge a/2$. Therefore $p_n^{-1}\operatorname{tr}(S_n^+)=\int h(t)d\mu_n(t)\to J_\gamma^+:=\int_{(0,\infty)}t^{-1}d\mu_\gamma(t)$ by [F5] and [F8]. [F7] gives $m_\gamma(-s)=(1-1/\gamma)/s+J_\gamma^++o(1)$ as $s\downarrow0$: subtract the zero atom and use [F10] by dominated convergence on the positive support, whose lower endpoint is $a>0$. To compute the constant term, write $\alpha=1-1/\gamma$ and substitute $m=\alpha/s+J_\gamma^++o(1)$ into $1+(\gamma-1-s)m-\gamma s m^2=0$, the fixed-point equation at $z=-s$ (again obtained by dominated convergence from [F7]). The coefficient of $s^{-1}$ vanishes because $\gamma\alpha=\gamma-1$; the constant term is $1-\alpha-(\gamma-1)J_\gamma^++o(1)$. It must vanish, so $J_\gamma^+=1/[\gamma(\gamma-1)]$. Using $p_n/n\to\gamma$ in step 1.1 proves $\mathcal R_n\to r^2(1-1/\gamma)+\sigma^2/(\gamma-1)$. [given, F3, F4, F5, F7, F8, F10, step 1.1, step 3.1, algebra] ∎

## Source notes

Hastie, Montanari, Rosset, and Tibshirani, Theorem 1 and Appendix C.2 ([full paper PDF](https://arxiv.org/pdf/1903.08560)). The repeated-dimension argument in steps 1.2, 2.2, and 3.1 uses injective row dimensions only for expectation limits; almost-sure concentration is summed in the original sample index. It follows the truncation and martingale structure of Bai, Miao, and Pan, Section 2, without changing the row-indexed supplier interface. The proof above separates the conditional noise expectation from the design almost-sure limits and uses a positive-edge cutoff rather than a $z\downarrow0$ interchange.
