---
id: thm-general-population-sample-covariance-esd-limit-for-bounded-entries
kind: theorem
title: "General-population sample-covariance law for bounded entries"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-identically-distributed-and-iid-random-variables
  - def-probability-measure
  - def-polish-space
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-sample-covariance-empirical-spectral-distribution
  - def-stieltjes-transform-of-a-real-probability-measure
  - def-weak-convergence-of-borel-probability-measures
  - cor-markov-inequality-for-random-variables
  - thm-monotone-convergence-for-the-integral
  - lem-bounded-complex-iid-matrix-norm-bound
  - lem-hermitian-resolvent-trace-concentration
  - lem-bounded-complex-resolvent-deterministic-equivalent
  - lem-deformed-mp-fixed-point-solution-is-unique
  - lem-stieltjes-transform-inversion-and-uniqueness-on-the-real-line
  - lem-complex-hermitian-eigenvalues-lipschitz
  - thm-prokhorov-tightness-theorem-on-polish-spaces
  - thm-singular-value-decomposition
---
## Statement

Assume the Axiom of Choice. For each positive integer $n$, let $N_n$ be a positive integer with $N_n/n\to\kappa\in(0,\infty)$, let $X_n\in\mathbb C^{n\times N_n}$ have entries from one common iid law with mean zero, second absolute moment one and absolute value bounded by one fixed finite constant, and let $T_n$ be deterministic Hermitian positive semidefinite (self-adjoint with $v^*T_nv\ge0$ for every $v$) with uniformly bounded induced Euclidean operator norm. Suppose the empirical eigenvalue measures $H_n=n^{-1}\sum_{i=1}^n\delta_{\lambda_i(T_n)}$ converge weakly to a Borel probability measure $H$ on $[0,\infty)$. Put $c=\kappa^{-1}$ and $A_n=N_n^{-1}T_n^{1/2}X_nX_n^*T_n^{1/2}$, and let $F_n=n^{-1}\sum_{i=1}^n\delta_{\lambda_i(A_n)}$. Then there is a unique Borel probability measure $F_{c,H}$ on $[0,\infty)$ such that, almost surely, $F_n$ converges weakly to $F_{c,H}$. Its Stieltjes transform $m_{c,H}(z)=\int(t-z)^{-1}\,dF_{c,H}(t)$ is the unique $m\in\mathbb C$ satisfying $\operatorname{Im}m>0$, $u:=-(1-c)/z+cm$ with $\operatorname{Im}u>0$, and
$$m=\int_{[0,\infty)}\frac{1}{t(1-c-czm)-z}\,dH(t)\qquad(\operatorname{Im}z>0).$$

## Statement references

Silverstein, Theorem 1.1 and its complete proof in Section 3 ([full paper PDF](https://jack.math.ncsu.edu/strong.pdf)).

Bai, Miao, and Pan, Section 2, including the sample-covariance resolvent conventions ([full paper PDF](https://arxiv.org/pdf/0708.1720)).

## Facts & Assumptions

**Given:** The assumptions, matrices, and empirical measures in the Statement, including AC.

[A1] The Axiom of Choice permits a choice function for every family of nonempty sets ([[def-axiom-of-choice]]).

[F1] The normalized eigenvalue measure of a finite Hermitian matrix is its empirical spectral distribution ([[def-sample-covariance-empirical-spectral-distribution]]).

[F2] Iid entries are mutually independent and share one common distribution ([[def-identically-distributed-and-iid-random-variables]]).

[F3] The Stieltjes transform convention is $m_\mu(z)=\int(t-z)^{-1}\,d\mu(t)$ for $\operatorname{Im}z>0$ ([[def-stieltjes-transform-of-a-real-probability-measure]]).

[F4] Markov's inequality bounds the mass of $\{t>R\}$ by the first moment divided by $R$ ([[cor-markov-inequality-for-random-variables]]).

[F5] Tight families of Borel probabilities on a Polish space are relatively sequentially compact for weak convergence, under AC ([[thm-prokhorov-tightness-theorem-on-polish-spaces]]).

[F6] The bounded-entry resolvent has the deterministic equivalent $-(z(I+q_nT_n))^{-1}$, uniformly on deterministic unit-vector quadratic forms ([[lem-bounded-complex-resolvent-deterministic-equivalent]]).

[F7] The normalized resolvent trace concentrates almost surely about its expectation ([[lem-hermitian-resolvent-trace-concentration]]).

[F8] The deformed fixed-point equation has at most one solution satisfying the stated upper-half-plane conditions ([[lem-deformed-mp-fixed-point-solution-is-unique]]).

[F9] Equal Stieltjes transforms determine probability measures on the real line ([[lem-stieltjes-transform-inversion-and-uniqueness-on-the-real-line]]).

[F10] The normalized operator norm of bounded complex iid matrices is almost surely eventually bounded ([[lem-bounded-complex-iid-matrix-norm-bound]]).

[F11] The nonzero eigenvalues of $Y^*Y$ and $YY^*$ agree with multiplicity ([[thm-singular-value-decomposition]]).

[F12] A probability measure is a countably additive Borel measure of total mass one ([[def-probability-measure]]).

[F13] Integrals of nonnegative increasing measurable sequences converge to the integral of their pointwise limit ([[thm-monotone-convergence-for-the-integral]]).

[F14] The ordered eigenvalues of a Hermitian matrix vary continuously with the matrix in operator norm ([[lem-complex-hermitian-eigenvalues-lipschitz]]).

[F15] A Polish space is a separable topological space whose topology is induced by a complete metric ([[def-polish-space]]).

[F16] Weak convergence of Borel probabilities means convergence of integrals against all bounded continuous real-valued functions ([[def-weak-convergence-of-borel-probability-measures]]).

[F17] The operator norm is the maximum of $\|Av\|_2$ over unit vectors in the domain ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

## Proof

1.1 Write $c_n=n/N_n$, let $\bar F_n(B)=\mathbb E F_n(B)$, and let $\bar G_n$ be defined similarly for $\widetilde A_n=N_n^{-1}X_n^*T_nX_n$. By [F14], each ordered eigenvalue is continuous in the matrix entries, so these setwise expectations are defined for Borel $B$. For disjoint Borel sets, countable additivity of the random ESDs followed by [F13] gives countable additivity of $\bar F_n$ and $\bar G_n$; their total masses are one. Independence and unit second moment give $\int t\,d\bar F_n(t)=n^{-1}\operatorname{tr}T_n$ and $\int t\,d\bar G_n(t)=N_n^{-1}\operatorname{tr}T_n$. Both first moments are uniformly bounded because $c_n\to c>0$ and $\|T_n\|_{\mathrm{op}}$ is uniformly bounded. By [F4], their tails above $R$ are at most the corresponding first moment divided by $R$, so both expected-measure sequences are tight on $[0,\infty)$. The half-line is Polish: it is a closed subset of the complete real line and $\mathbb Q\cap[0,\infty)$ is dense. By [A1] and [F5], every subsequence of $\bar F_n$ has a further weakly convergent subsequence. [given, A1, F1, F2, F4, F5, F12, F13, F14, F15, F17, algebra]

2.1 Fix $z\in\mathbb C^+$ and take any such subsequence with $\bar F_n\Rightarrow G$. Let $m_G(z)=\int(t-z)^{-1}dG(t)$ and $q_n(z)=\int(t-z)^{-1}d\bar G_n(t)$. By [F11], the two sample-covariance matrices have the same nonzero eigenvalues, so their transforms satisfy exactly $q_n=-(1-c_n)/z+c_n\int(t-z)^{-1}d\bar F_n(t)$. Hence $q_n\to u:=-(1-c)/z+cm_G(z)$. Moreover $\operatorname{Im}m_G(z)>0$. The first moments of $\bar G_n$ are bounded, so at least half of each $\bar G_n$ lies in some fixed interval $[0,L]$; consequently $\operatorname{Im}q_n(z)\ge\eta/(2(L+|z|)^2)$ and $\operatorname{Im}u>0$. [given, F3, F4, F11, F16, step 1.1, algebra]

3.1 Apply [F6] to an orthonormal eigenbasis of $T_n$. Its uniform quadratic-form error implies
$$\int(t-z)^{-1}\,d\bar F_n(t)=-\frac1{z n}\operatorname{tr}(I+q_nT_n)^{-1}+o(1)=-\frac1z\int\frac{1}{1+q_nt}\,dH_n(t)+o(1).$$
Since $H_n\Rightarrow H$, all $H_n$ are supported in one compact interval, $q_n\to u$, and $\operatorname{Im}u>0$, the integrands converge uniformly on that interval to $-1/[z(1+ut)]$. Thus $m_G(z)=\int[-z(1+ut)]^{-1}dH(t)$. The relation for $u$ in step 2.1 gives $-z(1+ut)=t(1-c-czm_G(z))-z$, so $m_G$ satisfies the fixed-point equation in the Statement. The argument applies to every $z\in\mathbb C^+$ and every weak subsequential limit $G$. By [F8], all such limits have the same transform; [F9] makes them equal. At least one such limit exists by step 1.1, so call it $F_{c,H}$. Tightness then implies $\bar F_n\Rightarrow F_{c,H}$. [given, F3, F6, F8, F9, F16, F17, step 1.1, step 2.1, algebra]

4.1 For each fixed $z\in\mathbb C^+$, [F7] gives $\int(t-z)^{-1}dF_n(t)-\int(t-z)^{-1}d\bar F_n(t)\to0$ almost surely. Intersect these probability-one events over the countable dense set $\{a+ib:a,b\in\mathbb Q,\ b>0\}$. [given, F7]

5.1 On the same event, [F10] gives $\|A_n\|_{\mathrm{op}}\le L_1$ eventually for a finite deterministic $L_1$, so the random measures $F_n$ are eventually supported on $[0,L_1]$ and are tight. The half-line is Polish by the metric facts in step 1.1 and [F15]. By [A1] and [F5], every subsequence has a weakly convergent further subsequence. For each dense-set $z$, its transform equals that of $F_{c,H}$ by steps 3.1 and 4.1, since the real and imaginary parts of $(t-z)^{-1}$ are bounded continuous and [F16] applies to each. For any probability law $\mu$, its transform satisfies $|m_\mu(z)-m_\mu(w)|\le |z-w|/(\operatorname{Im}z\operatorname{Im}w)$, so equality on the dense set extends to all $\mathbb C^+$; [F9] identifies the subsequential limit as $F_{c,H}$. Every subsequence has the same further limit, and [F16] gives $F_n\Rightarrow F_{c,H}$ almost surely. [given, A1, F5, F9, F10, F15, F16, step 1.1, step 3.1, step 4.1, algebra] ∎

## Proof references

Silverstein, Theorem 1.1 and complete Section 3 proof ([full paper PDF](https://jack.math.ncsu.edu/strong.pdf)). The local proof makes the companion-transform relation and the uniqueness step explicit.
