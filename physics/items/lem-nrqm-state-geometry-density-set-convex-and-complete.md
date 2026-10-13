---
id: lem-nrqm-state-geometry-density-set-convex-and-complete
kind: lemma
domain: mathematics
title: "The state space is convex, closed under countable mixtures, and complete in the trace norm"
status: published
origin: pipeline
dependency_level: 4
deps: [def-nrqm-state-geometry-pure-mixed-states-and-purity, lem-nrqm-composites-density-and-scalar-spectral-probability, thm-trace-class-is-a-two-sided-banach-operator-ideal, thm-trace-is-absolutely-convergent-and-basis-independent, thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues, thm-hilbert-adjoint-properties, thm-cauchy-schwarz-in-an-inner-product-space, def-self-adjoint-positive-unitary-and-normal-operator, def-series-and-absolute-convergence-in-a-normed-space, def-banach-space, def-metric-convergence, thm-complete-subspace-iff-closed, def-complete-metric-space, lem-restriction-of-scalars, def-subfield, def-countable-choice]
dependency_roles:
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  thm-trace-class-is-a-two-sided-banach-operator-ideal: mathematical-premise
  thm-trace-is-absolutely-convergent-and-basis-independent: mathematical-premise
  thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues: mathematical-premise
  thm-hilbert-adjoint-properties: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  def-self-adjoint-positive-unitary-and-normal-operator: mathematical-premise
  def-series-and-absolute-convergence-in-a-normed-space: mathematical-premise
  def-banach-space: mathematical-premise
  def-metric-convergence: mathematical-premise
  thm-complete-subspace-iff-closed: mathematical-premise
  def-complete-metric-space: mathematical-premise
  lem-restriction-of-scalars: mathematical-premise
  def-subfield: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Preskill, Lecture Notes for Ph219/CS219: Quantum Information, Chapter 2 (updated July 2015), Section 2.5.1, printed pages 26-27: the convex linear combination of two density matrices is a density matrix, and the density operators form a convex subset of the real vector space of Hermitian operators"
      url: "https://preskill.caltech.edu/ph219/chap2_15.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 6.3, printed pages 121-124: averaging density operators with probabilities, and the trace of the averaged operator"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "G. Teschl, Topics in Real and Functional Analysis (17 November 2017), Section 3.6, printed pages 95-100: the trace-class operators form a Banach space, with trace linear and bounded by the trace norm"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice. Let $H\ne\{0\}$ be a complex Hilbert space and let $D(H)$ be the state space of [[def-nrqm-state-geometry-pure-mixed-states-and-purity]]. Write $\mathcal S_1(H)$ for the complex Banach space of trace-class operators on $H$ with the trace norm $\|\cdot\|_1$, and
$$X:=\{\rho\in\mathcal S_1(H):\rho^{*}=\rho\}$$
for the set of self-adjoint trace-class operators, regarded as a real vector space by restricting scalars from $\mathbb C$ to $\mathbb R$ ([[lem-restriction-of-scalars]], [[def-subfield]]). Then:

(a) **Finite mixtures.** $X$ is a closed real-linear subspace of $\mathcal S_1(H)$ and hence a real Banach space, and $D(H)\subseteq X$ is **closed under finite real convex combinations**, that is, it contains with any two of its points the whole real segment between them: for all $\rho,\sigma\in D(H)$ and every real $\lambda\in[0,1]$,
$$\lambda\rho+(1-\lambda)\sigma\in D(H).$$
By induction every finite convex combination $\sum_{j=1}^{n}\lambda_j\rho_j$ with $\rho_j\in D(H)$, real $\lambda_j\ge0$ and $\sum_j\lambda_j=1$ is again an element of $D(H)$.

(b) **Countable mixtures.** Let $(\rho_n)_{n\in\mathbb N}\subseteq D(H)$ and let $(w_n)_{n\in\mathbb N}$ be real weights with $w_n\ge0$ and $\sum_{n}w_n=1$. Then the series $\sum_{n}w_n\rho_n$ converges absolutely in $\|\cdot\|_1$ to an element of $D(H)$: the series converges in $X$, its sum $T$ satisfies $T^{*}=T$, $T\ge0$, $\operatorname{tr}T=1$, and $\|T\|_1=\operatorname{tr}T$, with
$$\Bigl\|T-\sum_{n<K}w_n\rho_n\Bigr\|_1\longrightarrow0\quad(K\to\infty).$$

(c) **Grouping of consecutive blocks.** In the situation of (b) let $0=N_0<N_1<N_2<\cdots$ be an increasing sequence with $N_k\to\infty$, and for every $k\in\mathbb N$ put
$$u_k:=\sum_{N_k\le n<N_{k+1}}w_n,\qquad \sigma_k:=\frac{1}{u_k}\sum_{N_k\le n<N_{k+1}}w_n\rho_n,$$
where it is assumed that $u_k>0$ for every $k$ (blocks of zero weight are omitted). Then $\sigma_k\in D(H)$ for every $k$, $\sum_ku_k=1$, and
$$\sum_{k}u_k\sigma_k=\sum_{n}w_n\rho_n$$
in $\|\cdot\|_1$, the series on the left converging absolutely.

(d) **Closedness and completeness.** $D(H)$ is closed in the Banach space $(X,\|\cdot\|_1)$, and $D(H)$ is complete for the trace-norm metric.

## Facts & Assumptions

**Given:** The complex Hilbert space $H\ne\{0\}$; density operators $\rho,\sigma,\rho_n\in D(H)$; real weights $\lambda,w_n\ge0$; a block decomposition $N_0<N_1<\cdots$ with $N_0=0$, $N_k\to\infty$.

[F1] **Trace class is a Banach ideal** ([[thm-trace-class-is-a-two-sided-banach-operator-ideal]]): $\mathcal S_1(H)$ is a linear subspace of $\mathcal B(H)$ on which $\|\cdot\|_1$ is a norm and $(\mathcal S_1(H),\|\cdot\|_1)$ is a Banach space; $\|T\|\le\|T\|_1$; and $ATB$ is trace class with $\|ATB\|_1\le\|A\|\,\|T\|_1\|B\|$ for bounded $A,B$.

[F2] **Density operators** ([[lem-nrqm-composites-density-and-scalar-spectral-probability]] clause (a), [[def-nrqm-state-geometry-pure-mixed-states-and-purity]]): $\rho\in D(H)$ means $\rho^{*}=\rho$, $\rho\ge0$ (that is, $\langle\rho x,x\rangle\in[0,\infty)$ for all $x$) and $\rho$ is trace class with $\operatorname{tr}\rho=1$.

[F3] **Positivity, norm and trace of a positive trace-class operator** ([[def-self-adjoint-positive-unitary-and-normal-operator]], [[thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues]], [[thm-trace-is-absolutely-convergent-and-basis-independent]]): a positive operator satisfies $\langle Tx,x\rangle\in[0,\infty)$; for a self-adjoint positive trace-class $T$ one has $\operatorname{tr}T=\|T\|_1$; the trace is linear and $|\operatorname{tr}T|\le\|T\|_1$ for every trace-class $T$.

[F4] **Adjoints and operator-norm continuity** ([[thm-hilbert-adjoint-properties]]): $(aS+bT)^{*}=\overline aS^{*}+\overline bT^{*}$ for complex scalars $a,b$; $T^{**}=T$; and $\|T^{*}\|=\|T\|$. Thus $T\mapsto T^{*}$ is real-linear and isometric in the operator norm. By [F1], trace-norm convergence implies operator-norm convergence, so if trace-class $T_m\to T$ in trace norm and every $T_m$ is self-adjoint, then $T_m^{*}\to T^{*}$ and $T_m\to T$ in operator norm. Since $T_m^{*}=T_m$ for every $m$, uniqueness of limits gives $T^{*}=T$.

[F5] **Cauchy–Schwarz and its use** ([[thm-cauchy-schwarz-in-an-inner-product-space]]): $|\langle y,x\rangle|\le\|y\|\,\|x\|$; hence $|\langle (T-S)x,x\rangle|\le\|T-S\|\,\|x\|^{2}\le\|T-S\|_1\|x\|^{2}$ by [F1].

[F6] **Series in a Banach space and completeness** ([[def-series-and-absolute-convergence-in-a-normed-space]], [[def-banach-space]], [[def-metric-convergence]], [[def-complete-metric-space]]): an absolutely convergent series in a Banach space converges; a sequence converges to a limit $p$ when the distances tend to $0$, and then every subsequence converges to the same limit.

[F7] **Closed subspaces of complete metric spaces** ([[thm-complete-subspace-iff-closed]] clause 2): a closed subset of a complete metric space is complete; and the subspace metric is the restriction of the ambient metric.

[F8] **Convexity convention and restricted scalars** ([[lem-restriction-of-scalars]], [[def-subfield]]): a subset $C$ of a real or complex vector space is read as convex when $(1-t)x+ty\in C$ for all $x,y\in C$ and all real $t$ with $0\le t\le1$, coefficients always real; this is the reading fixed in clause (a) of the statement and used below. A complex vector space is a real vector space by restricting scalars along the subfield $\mathbb R\subseteq\mathbb C$, with the same addition and scalar multiplication.

## Proof

1.1 [(a) finite mixtures are states] Let $\rho,\sigma\in D(H)$ and $\lambda\in[0,1]$ real. The combination $\lambda\rho+(1-\lambda)\sigma$ is trace class by [F1] and self-adjoint because $(\lambda\rho+(1-\lambda)\sigma)^{*}=\lambda\rho^{*}+(1-\lambda)\sigma^{*}=\lambda\rho+(1-\lambda)\sigma$ by [F4] with real scalars; it is positive because $\langle(\lambda\rho+(1-\lambda)\sigma)x,x\rangle=\lambda\langle\rho x,x\rangle+(1-\lambda)\langle\sigma x,x\rangle\ge0$ by [F2] and [F3]; and its trace is $\lambda\operatorname{tr}\rho+(1-\lambda)\operatorname{tr}\sigma=\lambda+(1-\lambda)=1$ by the linearity of the trace in [F3]. Hence it is a density operator, so $D(H)$ is closed under finite real convex combinations in the reading of [F8]; the finite-combination statement follows by induction on the number of components. [given, F1, F2, F3, F4, F8, algebra]

1.2 [(b) the mixture series converges in the trace norm] For every $n$ the operator $w_n\rho_n$ is self-adjoint by [F4] and positive, and it is trace class with $\|w_n\rho_n\|_1=w_n\|\rho_n\|_1=w_n\operatorname{tr}\rho_n=w_n$ by [F1] and [F3]; hence $\sum_n\|w_n\rho_n\|_1=\sum_nw_n=1<\infty$, so the series is absolutely convergent in the Banach space $\mathcal S_1(H)$ by [F6] and has a trace-class sum $T$; moreover $\|T-\sum_{n<K}w_n\rho_n\|_1\to0$ because the tail is a convergent series of norms of the omitted terms, by [F6]. The self-adjointness argument below places this sum in $X$. [given, F1, F3, F6, algebra]

1.3 [(a) $X$ is a real Banach space] If $T_m\in X$ and $\|T_m-T\|_1\to0$, then by [F1] and [F4], $\|T^{*}-T\|\le\|T^{*}-T_m^{*}\|+\|T_m-T\|=\|(T_m-T)^{*}\|+\|T_m-T\|=2\|T_m-T\|\le2\|T_m-T\|_1\to0$. Thus $T^{*}=T$ and $X$ is closed in $\mathcal S_1(H)$. It is a real-linear subspace because sums and real scalar multiples of self-adjoint operators are self-adjoint by [F4], and it is complete in the restricted trace-norm metric by [F7] applied to the complete space $\mathcal S_1(H)$ of [F1]. [given, F1, F4, F6, F7, F8, algebra]

2.1 [(c) block members are states] Fix $k$ with $u_k>0$. The finite combination $\sigma_k=u_k^{-1}\sum_{N_k\le n<N_{k+1}}w_n\rho_n$ is a convex combination of the operators $\rho_n$, $N_k\le n<N_{k+1}$, with nonnegative real coefficients $w_n/u_k$ summing to $1$ (the finite sum of the weights is $u_k$), so $\sigma_k\in D(H)$ by step 1.1 and induction. [given, step 1.1, algebra]

2.2 [(b) the mixture sum is a state] Let $S_K:=\sum_{n<K}w_n\rho_n$, the self-adjoint partial sums of step 1.2. Trace-norm convergence and [F1] give $\|T-S_K\|\to0$, and operator-norm continuity of the adjoint [F4] gives $\|T^{*}-T\|\le\|T^{*}-S_K^{*}\|+\|S_K-T\|=2\|T-S_K\|\le2\|T-S_K\|_1\to0$. Hence $T$ is self-adjoint. It is positive because for every $x$ the numbers $\langle S_Kx,x\rangle=\sum_{n<K}w_n\langle\rho_nx,x\rangle$ are nonnegative by [F2], while $|\langle(T-S_K)x,x\rangle|\le\|T-S_K\|_1\|x\|^{2}\to0$ by [F5], so $\langle Tx,x\rangle\ge0$; and $\operatorname{tr}T=\lim_K\sum_{n<K}w_n=1$ because $|\operatorname{tr}T-\operatorname{tr}S_K|\le\|T-S_K\|_1\to0$ by [F3] and the trace is linear. Thus $T\in D(H)\subseteq X$, and since $S_K\in X$ this trace-norm convergence is also convergence in $X$. [given, step 1.2, F1, F2, F3, F4, F5, algebra]

3.1 [(c) grouping of consecutive blocks] Let $T_m:=\sum_{n<m}w_n\rho_n$ be the partial sums of the $n$-series; by regrouping finite sums in the real vector space $X$ one has, for every $K$, $\sum_{k<K}u_k\sigma_k=\sum_{k<K}\sum_{N_k\le n<N_{k+1}}w_n\rho_n=\sum_{n<N_K}w_n\rho_n=T_{N_K}.$ Since $T_m\to T$ by step 1.2 and $N_K\to\infty$, the sequence $(T_{N_K})_K$ is a subsequence of a convergent sequence in the metric space $X$ and therefore converges to $T$ as well by [F6]; the left series converges absolutely because $\sum_k\|u_k\sigma_k\|_1=\sum_ku_k\operatorname{tr}\sigma_k=\sum_ku_k=\sum_nw_n=1$ by [F3] and step 2.1. Hence both series have the same sum $T$. [given, step 2.1, step 1.2, F3, F6, algebra]

4.1 [(d) closedness and completeness] Let $\rho_m\in D(H)$ converge to $\rho\in X$ in the trace norm. Then $\rho$ is self-adjoint by definition of $X$; it is positive because $|\langle(\rho-\rho_m)x,x\rangle|\le\|\rho-\rho_m\|_1\|x\|^{2}\to0$ by [F5] while $\langle\rho_mx,x\rangle\ge0$; and $\operatorname{tr}\rho=\lim_m\operatorname{tr}\rho_m=1$ by [F3] and trace linearity. Hence $\rho\in D(H)$, so $D(H)$ is closed in $X$; since $X$ is complete by step 1.3, $D(H)$ is complete for the restricted metric by [F7]. This proves (a)-(d). [given, step 1.3, F2, F3, F5, F7, algebra] ∎
