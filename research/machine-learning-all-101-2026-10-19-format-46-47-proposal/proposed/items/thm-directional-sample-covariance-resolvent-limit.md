---
id: thm-directional-sample-covariance-resolvent-limit
kind: theorem
title: "Sample-covariance resolvent deterministic equivalents"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-identically-distributed-and-iid-random-variables
  - def-polish-space
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-sample-covariance-directional-spectral-measure
  - def-stieltjes-transform-of-a-real-probability-measure
  - def-weak-convergence-of-borel-probability-measures
  - lem-complex-sample-covariance-norm-bound-from-real-edge
  - lem-hermitian-spectral-measure-is-probability
  - lem-stieltjes-transform-inversion-and-uniqueness-on-the-real-line
  - thm-directional-sample-covariance-resolvent-limit-for-bounded-entries
  - thm-prokhorov-tightness-theorem-on-polish-spaces
proof_strategy: direct
---
## Statement

Assume the Axiom of Choice. Let $(\xi_{ij})_{i,j\ge1}$ be one infinite iid array of complex random variables with $\mathbb E\xi_{11}=0$, $\mathbb E|\xi_{11}|^2=1$, and $\mathbb E|\xi_{11}|^4<\infty$. For each positive integer $n$, let $N_n$ be positive with $n/N_n\to c\in(0,\infty)$ and let $X_n=(\xi_{ij})_{1\le i\le n,\,1\le j\le N_n}$ be its upper-left block. Let $T_n$ be deterministic Hermitian positive semidefinite with uniformly bounded operator norm and empirical eigenvalue measures $H_n=n^{-1}\sum_i\delta_{\lambda_i(T_n)}\Rightarrow H$. Let $x_n\in\mathbb C^n$ be deterministic unit vectors such that, for every $w\in\mathbb C\setminus[0,\infty)$,
$$x_n^*(T_n-wI_n)^{-1}x_n\longrightarrow m_H(w):=\int_{[0,\infty)}(t-w)^{-1}\,dH(t).$$
Define $A_n=N_n^{-1}T_n^{1/2}X_nX_n^*T_n^{1/2}$ and $\mu_n^{x_n}(B)=x_n^*\mathbf1_B(A_n)x_n$ for Borel $B\subseteq[0,\infty)$. Then almost surely $\mu_n^{x_n}$ converges weakly to the probability measure $F_{c,H}$ whose Stieltjes transform is the unique $m\in\mathbb C$ satisfying $\operatorname{Im}m>0$, $u=-(1-c)/z+cm$ with $\operatorname{Im}u>0$, and
$$m=\int_{[0,\infty)}\frac{1}{t(1-c-czm)-z}\,dH(t),\qquad \operatorname{Im}z>0.$$

## Statement references

Bai, Miao, and Pan, Theorem 1 and complete Section 2 proof, printed pp. 8–16 ([full paper PDF](https://arxiv.org/pdf/0708.1720)).

Silverstein, Theorem 1.1 and complete Section 3 proof ([full paper PDF](https://jack.math.ncsu.edu/strong.pdf)).

## Facts & Assumptions

**Given:** The common nested iid array, finite-fourth-moment law, deterministic population matrices and directions, aspect ratio, and AC in the Statement.

[A1] The Axiom of Choice permits a choice function for every family of nonempty sets ([[def-axiom-of-choice]]).

[F1] For bounded complex iid entries with the stated population and direction hypotheses, the directional measures converge almost surely to $F_{c,H}$ ([[thm-directional-sample-covariance-resolvent-limit-for-bounded-entries]]).

[F2] A centered complex iid finite-fourth-moment array satisfies $\limsup\|X_n\|_{\mathrm{op}}/\sqrt{N_n}\le\sqrt2(1+\sqrt c)$ almost surely ([[lem-complex-sample-covariance-norm-bound-from-real-edge]]).

[F3] A Hermitian directional spectral measure is a probability law ([[lem-hermitian-spectral-measure-is-probability]]).

[F4] Tight probability laws on a Polish space have weakly convergent subsequences under AC ([[thm-prokhorov-tightness-theorem-on-polish-spaces]]).

[F5] Equal Stieltjes transforms determine probability measures on the real line ([[lem-stieltjes-transform-inversion-and-uniqueness-on-the-real-line]]).

[F6] A Polish space is a separable topological space whose topology is induced by a complete metric ([[def-polish-space]]).

[F7] Iid entries are mutually independent and share one common law ([[def-identically-distributed-and-iid-random-variables]]).

[F8] The directional measure is $\sum_\lambda\|P_\lambda x_n\|_2^2\delta_\lambda$ for a deterministic unit vector ([[def-sample-covariance-directional-spectral-measure]]).

[F9] The Stieltjes transform convention is $m_\mu(z)=\int(t-z)^{-1}d\mu(t)$ on $\mathbb C^+$ ([[def-stieltjes-transform-of-a-real-probability-measure]]).

[F10] Weak convergence means convergence of integrals against all bounded continuous real-valued functions ([[def-weak-convergence-of-borel-probability-measures]]).

[F11] The operator norm is the maximum of $\|Av\|_2$ over unit vectors in the domain ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

## Proof

1.1 Let $\xi$ have the common entry law. For integer $K$, set $\xi^{(K)}=\xi\mathbf1_{\{|\xi|\le K\}}-\mathbb E[\xi\mathbf1_{\{|\xi|\le K\}}]$, $\sigma_K^2=\mathbb E|\xi^{(K)}|^2$, and $\Delta^{(K)}=\xi-\xi^{(K)}$. Then $\sigma_K\to1$, and $\tau_K^2:=\mathbb E|\Delta^{(K)}|^2\to0$ because $\mathbb E\xi=0$ and $\mathbb E|\xi|^2<\infty$. For all sufficiently large $K$, $\sigma_K>0$; put $\zeta^{(K)}=\xi^{(K)}/\sigma_K$. These entries are centered, bounded, iid and have unit second absolute moment, while $\Delta^{(K)}$ is centered iid with finite fourth moment. At matrix level, $X_n=\sigma_K Z_n^{(K)}+D_n^{(K)}$, where $Z_n^{(K)}$ and $D_n^{(K)}$ are the common upper-left blocks formed from $\zeta^{(K)}$ and $\Delta^{(K)}$. [given, F1, F2, F7, algebra]

2.1 For each fixed sufficiently large integer $K$, [F2] applied to the original, standardized, and residual arrays gives almost surely $$\limsup_n\frac{\|X_n\|}{\sqrt{N_n}}\le C_c,\quad \limsup_n\frac{\|Z_n^{(K)}\|}{\sqrt{N_n}}\le C_c,\quad \limsup_n\frac{\|D_n^{(K)}\|}{\sqrt{N_n}}\le C_c\tau_K,$$ where $C_c=\sqrt2(1+\sqrt c)$. Intersect these events over the countable set of such $K$. Writing $A_n^{(K)}=N_n^{-1}T_n^{1/2}Z_n^{(K)}Z_n^{(K)*}T_n^{1/2}$, the identity $UU^*-VV^*=(U-V)U^*+V(U-V)^*$ yields $$\limsup_n\|A_n-\sigma_K^2A_n^{(K)}\|_{\mathrm{op}}\le M C_c^2(1+\sigma_K)\tau_K, \qquad \limsup_n\|\sigma_K^2A_n^{(K)}-A_n^{(K)}\|_{\mathrm{op}}\le M C_c^2|\sigma_K^2-1|,$$ where $M=\sup_n\|T_n\|_{\mathrm{op}}$. For positive semidefinite $B,C$ and $z\in\mathbb C^+$, the resolvent identity gives $\|(B-zI)^{-1}-(C-zI)^{-1}\|_{\mathrm{op}}\le\|B-C\|_{\mathrm{op}}/(\operatorname{Im}z)^2$. [given, F2, F11, step 1.1, algebra]

3.1 Fix $z\in\mathbb C^+$ and a deterministic unit direction sequence $x_n$. For each such $K$, [F1] applied to $Z_n^{(K)}$ gives $x_n^*(A_n^{(K)}-zI)^{-1}x_n\to m_{c,H}(z)$ almost surely, with the transform convention [F9]. By step 2.1, $$\limsup_n\left|x_n^*(A_n-zI)^{-1}x_n-m_{c,H}(z)\right|\le\frac{M C_c^2}{(\operatorname{Im}z)^2}\left((1+\sigma_K)\tau_K+|\sigma_K^2-1|\right)$$ on the probability-one event obtained by intersecting the events from step 2.1 with the almost-sure convergence event for this fixed truncation level. The right side tends to zero as $K\to\infty$, so the directional Stieltjes transforms converge almost surely at every fixed $z\in\mathbb C^+$. Intersecting over a countable dense set gives simultaneous convergence there. [given, F1, F9, step 1.1, step 2.1, algebra]

4.1 By [F2], $\|A_n\|_{\mathrm{op}}\le M\|X_n\|_{\mathrm{op}}^2/N_n$ is almost surely eventually bounded. Thus the directional laws are eventually supported on one compact interval; [F3] makes them probability measures and [F8] gives their exact spectral-measure meaning. They are therefore tight. The half-line is Polish: it is closed in the complete real line and has dense subset $\mathbb Q\cap[0,\infty)$, as required by [F6]. By [A1] and [F4], each subsequence has a weakly convergent further subsequence. Its transform equals $m_{c,H}$ on the dense set by step 3.1; continuity of Stieltjes transforms extends equality to $\mathbb C^+$, and [F5] identifies the subsequential limit as $F_{c,H}$. The bounded-continuous-test definition [F10] yields the stated weak convergence. Every subsequence has the same further limit, proving the asserted almost-sure limit. [given, A1, F2, F3, F4, F5, F6, F8, F10, F11, step 3.1, algebra] ∎

## Proof references

Bai, Miao, and Pan, Theorem 1 and Section 2, printed pp. 8–16 ([full paper PDF](https://arxiv.org/pdf/0708.1720)). The sampling convention is the upper-left block of one iid double array. The truncation comparison uses the separately proved real-edge norm supplier; it does not assume weak convergence alone controls spectral edges.
