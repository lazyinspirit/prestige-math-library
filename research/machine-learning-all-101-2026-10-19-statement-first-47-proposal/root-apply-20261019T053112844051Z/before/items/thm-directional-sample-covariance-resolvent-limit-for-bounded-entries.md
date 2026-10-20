---
id: thm-directional-sample-covariance-resolvent-limit-for-bounded-entries
kind: theorem
title: "Directional deterministic equivalent for bounded sample-covariance entries"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-polish-space
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-sample-covariance-directional-spectral-measure
  - def-stieltjes-transform-of-a-real-probability-measure
  - def-weak-convergence-of-borel-probability-measures
  - lem-hermitian-spectral-measure-is-probability
  - lem-bounded-complex-resolvent-deterministic-equivalent
  - lem-bounded-complex-resolvent-quadratic-form-concentration
  - lem-bounded-complex-iid-matrix-norm-bound
  - lem-stieltjes-transform-inversion-and-uniqueness-on-the-real-line
  - thm-dominated-convergence
  - thm-general-population-sample-covariance-esd-limit-for-bounded-entries
  - thm-prokhorov-tightness-theorem-on-polish-spaces
  - thm-singular-value-decomposition
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Z. D. Bai, B. Q. Miao, and G. M. Pan, On Asymptotics of Eigenvectors of Large Sample Covariance Matrix"
      url: "https://arxiv.org/pdf/0708.1720"
    - title: "J. W. Silverstein, Strong Convergence of the Empirical Distribution of Eigenvalues of Large Dimensional Random Matrices"
      url: "https://jack.math.ncsu.edu/strong.pdf"
---
## Statement

Assume the Axiom of Choice. For each positive integer $n$, let $N_n$ be a positive integer with $N_n/n\to\kappa\in(0,\infty)$, let $X_n\in\mathbb C^{n\times N_n}$ have entries from one common iid law with mean zero, second absolute moment one and absolute value bounded by a fixed finite constant, and let $T_n$ be deterministic Hermitian positive semidefinite (self-adjoint with $v^*T_nv\ge0$ for every $v$) with uniformly bounded induced Euclidean operator norm and empirical eigenvalue measures $H_n=n^{-1}\sum_i\delta_{\lambda_i(T_n)}\Rightarrow H$. Let $x_n\in\mathbb C^n$ be deterministic unit vectors such that for every $w\in\mathbb C\setminus[0,\infty)$,
$$x_n^*(T_n-wI_n)^{-1}x_n\longrightarrow m_H(w):=\int_{[0,\infty)}(t-w)^{-1}\,dH(t).$$
For $A_n=N_n^{-1}T_n^{1/2}X_nX_n^*T_n^{1/2}$, define the directional spectral measure $\mu_n^{x_n}(B)=x_n^*\mathbf1_B(A_n)x_n$ for Borel $B\subseteq[0,\infty)$. Then almost surely $\mu_n^{x_n}\Rightarrow F_{c,H}$, where $c=\kappa^{-1}$ and $F_{c,H}$ is the probability measure characterized by
$$m_{c,H}(z)=\int_{[0,\infty)}\frac{1}{t(1-c-czm_{c,H}(z))-z}\,dH(t),\qquad \operatorname{Im}z>0.$$

## Statement references

Bai, Miao, and Pan, Theorem 1 and complete Section 2 proof, printed pp. 8–16 ([full paper PDF](https://arxiv.org/pdf/0708.1720)).

Silverstein, Theorem 1.1 and complete Section 3 proof ([full paper PDF](https://jack.math.ncsu.edu/strong.pdf)).

## Facts & Assumptions

**Given:** The hypotheses, matrices, and directional measures in the Statement, including AC.

[A1] The Axiom of Choice permits a choice function for every family of nonempty sets ([[def-axiom-of-choice]]).

[F1] For Hermitian $A_n$ and unit $x_n$, the directional spectral measure is $\sum_{\lambda}\|P_\lambda x_n\|_2^2\delta_\lambda$ ([[def-sample-covariance-directional-spectral-measure]]).

[F2] This measure is a Borel probability because the spectral projections are orthogonal and sum to the identity ([[lem-hermitian-spectral-measure-is-probability]]).

[F3] The expected resolvent has deterministic equivalent $-(z(I+q_nT_n))^{-1}$, uniformly for deterministic unit-vector quadratic forms ([[lem-bounded-complex-resolvent-deterministic-equivalent]]).

[F4] The bounded-entry empirical spectral distribution converges almost surely to $F_{c,H}$ with the stated fixed-point transform ([[thm-general-population-sample-covariance-esd-limit-for-bounded-entries]]).

[F5] A bounded-entry directional resolvent quadratic form concentrates almost surely about its expectation ([[lem-bounded-complex-resolvent-quadratic-form-concentration]]).

[F6] Dominated convergence passes limits through integrals under a common integrable bound ([[thm-dominated-convergence]]).

[F7] The normalized operator norm of bounded complex iid matrices is almost surely eventually bounded ([[lem-bounded-complex-iid-matrix-norm-bound]]).

[F8] Tight probability laws on a Polish space have weakly convergent subsequences under AC ([[thm-prokhorov-tightness-theorem-on-polish-spaces]]).

[F9] The Stieltjes transform uses $(t-z)^{-1}$ and determines a probability measure uniquely ([[def-stieltjes-transform-of-a-real-probability-measure]], [[lem-stieltjes-transform-inversion-and-uniqueness-on-the-real-line]]).

[F10] The nonzero eigenvalues of $Y^*Y$ and $YY^*$ agree with multiplicity ([[thm-singular-value-decomposition]]).

[F11] A Polish space is a separable topological space whose topology is induced by a complete metric ([[def-polish-space]]).

[F12] Weak convergence of Borel probabilities means convergence of integrals against every bounded continuous real-valued function ([[def-weak-convergence-of-borel-probability-measures]]).

[F13] The operator norm is the maximum of $\|Av\|_2$ over unit vectors in the domain ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

## Proof

1.1 Fix $z\in\mathbb C^+$ and let $q_n(z)=\mathbb E[N_n^{-1}\operatorname{tr}(N_n^{-1}X_n^*T_nX_n-zI)^{-1}]$. By [F4], the empirical transforms of $A_n$ converge almost surely to $m_{c,H}(z)$; their absolute values are at most $1/\operatorname{Im}z$, so [F6] gives convergence of their expectations. By [F10], the nonzero eigenvalue equality for $A_n$ and $N_n^{-1}X_n^*T_nX_n$ gives $q_n=-(1-c_n)/z+c_n\mathbb E[n^{-1}\operatorname{tr}(A_n-zI)^{-1}]$, with $c_n=n/N_n$. Hence $q_n(z)\to u(z):=-(1-c)/z+cm_{c,H}(z)$. [given, F4, F6, F9, F10, algebra]

2.1 For deterministic unit $x_n$, [F3] and [F5] yield $$x_n^*(A_n-zI)^{-1}x_n+\frac1z x_n^*(I+q_n(z)T_n)^{-1}x_n\longrightarrow0\quad\text{almost surely}.$$ The matrix inverses are uniformly bounded by $|z|/\operatorname{Im}z$ from the positive-measure resolvent estimate in the proof of [F3]. Since $T_n$ are uniformly bounded and $q_n\to u$, the resolvent identity gives $$\left\|(I+q_nT_n)^{-1}-(I+uT_n)^{-1}\right\|_{\mathrm{op}}\le M(|z|/\operatorname{Im}z)^2|q_n-u|\longrightarrow0.$$ [given, F3, F5, F13, step 1.1, algebra]

3.1 Since $u\in\mathbb C^+$, $w=-1/u$ also lies in $\mathbb C^+$ and $(I+uT_n)^{-1}=u^{-1}(T_n-wI)^{-1}$. The population-resolvent hypothesis at this fixed $w$ therefore gives $x_n^*(I+uT_n)^{-1}x_n\to u^{-1}m_H(-1/u)$. By [F4], $m_{c,H}(z)=-z^{-1}\int(1+ut)^{-1}dH(t)=-[zu]^{-1}m_H(-1/u)$. Step 2.1 now proves $x_n^*(A_n-zI)^{-1}x_n\to m_{c,H}(z)$ almost surely for each fixed $z\in\mathbb C^+$. [given, F4, step 1.1, step 2.1, algebra]

4.1 The resolvent in step 3.1 is the Stieltjes transform of $\mu_n^{x_n}$ by [F1]. Intersect the probability-one events over a countable dense subset of $\mathbb C^+$. By [F7], on this event the spectra of $A_n$ are eventually contained in one compact interval, so [F2] makes the directional measures a tight sequence of probabilities. The half-line is Polish: it is a closed subset of the complete real line with dense subset $\mathbb Q\cap[0,\infty)$, in the sense of [F11]. By [A1] and [F8], every subsequence has a weakly convergent further subsequence. Its transform agrees with $m_{c,H}$ on the dense set by step 3.1; continuity of Stieltjes transforms extends equality to all $\mathbb C^+$, and [F9] identifies that limit with $F_{c,H}$. Therefore every subsequence has the same further limit, which by the bounded-continuous-test definition [F12] proves $\mu_n^{x_n}\Rightarrow F_{c,H}$ almost surely. [given, A1, F1, F2, F7, F8, F9, F11, F12, F13, step 3.1, algebra] ∎

## Proof references

Bai, Miao, and Pan, Theorem 1, equations (1.1)–(1.5), and Section 2, equations (2.1)–(2.9), printed pp. 8–16 ([full paper PDF](https://arxiv.org/pdf/0708.1720)).
