---
id: "thm-wasserstein-two-is-complete"
kind: theorem
title: "The quadratic Wasserstein space is complete"
status: draft
dependency_level: 3
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: ["def-wasserstein-two-space-and-couplings", "thm-wasserstein-two-is-a-metric", "lem-wasserstein-gluing", "prop-existence-and-lower-semicontinuity-of-optimal-couplings", "thm-prokhorov-tightness-theorem-on-polish-spaces", "thm-minkowski-integral-inequality", "thm-cauchy-schwarz-in-an-inner-product-space", "thm-fatou-lemma", "thm-monotone-convergence-for-the-integral", "cor-weakly-convergent-sequences-are-tight", "def-tight-family-of-probability-measures", "def-polish-space", "thm-complete-and-totally-bounded-implies-compact", "def-metric-space", "def-complete-metric-space", "def-totally-bounded", "def-axiom-of-choice", "thm-choice-implies-dependent-implies-countable-choice", "def-countable-choice", "def-dependent-choice", "def-weak-convergence-of-borel-probability-measures", "cor-weak-limits-are-unique", "thm-change-of-variables-for-expectation", "def-expectation-of-a-nonnegative-or-integrable-random-variable", "def-borel-probability-law-on-a-polish-space", "def-measure"]
justified_by: []
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
proof_strategy: direct
axiom_use: "Full AC is used to choose a rapidly Cauchy subsequence, optimal pair couplings, each finite gluing law in the recursive construction, and a Prokhorov subsequence; it supplies Countable/Dependent Choice for the countable-product compactness argument."
sources:
  references:
    - title: "Filippo Santambrogio, Optimal Transport for Applied Mathematicians, Chapter 5, §§5.1–5.3, PDF pp. 161–178"
      url: "https://math.univ-lyon1.fr/~santambrogio/OTAM-cvgmt.pdf"
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport, Appendix A.1, PDF pp. 12–13"
      url: "https://arxiv.org/pdf/1805.09545"
---
## Statement

Assume the Axiom of Choice. The metric space $(\mathcal P_2(\mathbb R^d),W_2)$ is complete: every $W_2$-Cauchy sequence converges in $W_2$ to an element of $\mathcal P_2(\mathbb R^d)$.

## Statement references

[[def-wasserstein-two-space-and-couplings]]

[[thm-wasserstein-two-is-a-metric]]

[[lem-wasserstein-gluing]]

[[prop-existence-and-lower-semicontinuity-of-optimal-couplings]]

[[thm-prokhorov-tightness-theorem-on-polish-spaces]]

[[thm-minkowski-integral-inequality]]

[[thm-fatou-lemma]]

[[thm-monotone-convergence-for-the-integral]]

[[cor-weakly-convergent-sequences-are-tight]]

[[cor-weak-limits-are-unique]]

[[def-tight-family-of-probability-measures]]

[[def-polish-space]]

[[thm-complete-and-totally-bounded-implies-compact]]

[[def-axiom-of-choice]]

[[thm-choice-implies-dependent-implies-countable-choice]]

[[def-countable-choice]]

[[def-dependent-choice]]

[[thm-change-of-variables-for-expectation]]

[[def-expectation-of-a-nonnegative-or-integrable-random-variable]]

[Santambrogio, *Optimal Transport for Applied Mathematicians*, Chapter 5](https://math.univ-lyon1.fr/~santambrogio/OTAM-cvgmt.pdf)

[Chizat and Bach, Appendix A.1](https://arxiv.org/pdf/1805.09545)

## Facts & Assumptions

**Given:** AC and a $W_2$-Cauchy sequence $(\mu_n)_{n\ge1}$ in $\mathcal P_2(\mathbb R^d)$.

[F1] Any two consecutive laws have an optimal coupling, and two couplings with a common marginal can be glued under AC. [[prop-existence-and-lower-semicontinuity-of-optimal-couplings]] [[lem-wasserstein-gluing]]

[F2] Borel probabilities on Polish spaces are tight; Prokhorov's theorem extracts a weakly convergent subsequence from a tight sequence under AC. [[cor-weakly-convergent-sequences-are-tight]] [[def-tight-family-of-probability-measures]] [[thm-prokhorov-tightness-theorem-on-polish-spaces]] [[def-polish-space]] [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]] [[def-countable-choice]] [[def-dependent-choice]]

[F3] Scalar Minkowski's inequality holds in $L^2$; for Euclidean-valued $U,V$, the pointwise triangle inequality gives $|U+V|\le|U|+|V|$, so scalar Minkowski applied to $|U|,|V|$ gives $\|U+V\|_2\le\|U\|_2+\|V\|_2$. Cauchy--Schwarz bounds first moments by second moments on a probability space, and Fatou's lemma holds for nonnegative measurable functions. [[thm-minkowski-integral-inequality]] [[thm-cauchy-schwarz-in-an-inner-product-space]] [[thm-fatou-lemma]]

[F4] Integrals of increasing nonnegative functions converge to the integral of their pointwise limit; pushforward integration satisfies $\int f\,d(T_\#\eta)=\int f(T(\omega))d\eta(\omega)$ for nonnegative measurable $f$. [[thm-monotone-convergence-for-the-integral]] [[thm-change-of-variables-for-expectation]] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]

[F5] A complete totally bounded metric space is compact under Countable Choice; AC supplies Countable Choice. [[thm-complete-and-totally-bounded-implies-compact]] [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]] [[def-countable-choice]]

[F6] Weak convergence is convergence against bounded continuous tests; continuous coordinate projections preserve it by composition of tests, and a probability law has a unique weak limit. [[def-weak-convergence-of-borel-probability-measures]] [[cor-weak-limits-are-unique]]

[F7] If $P$ is a Borel probability law on a Polish space and $F$ is Borel into a Polish space, define $F_\#P(B)=P(F^{-1}(B))$; preimages show this is a Borel probability law and that coordinate marginals compose with the corresponding coordinate maps. [[def-borel-probability-law-on-a-polish-space]] [[def-measure]]

## Proof
1.1 For each k, the Cauchy property gives a threshold N_k such that $W_2(\mu_n,\mu_m)<2^{-k}$ whenever $n,m\ge N_k$. Set $n_1=N_1$ and recursively $n_{k+1}=\max\{N_{k+1},n_k+1\}$. Then $n_k<n_{k+1}$ and $W_2(\mu_{n_k},\mu_{n_{k+1}})\le2^{-k}$. By AC choose an optimal coupling $\pi_k$ of these consecutive laws for each k using [F1]. [given, F1, construct]

1.2 Put $S=(\mathbb R^d)^{\mathbb N}$, the set of all sequences of Euclidean vectors, and equip $S$ with $D(x,y)=\sum_{j\ge1}2^{-j}\min(1,|x_j-y_j|)$. This metric induces the product topology: each coordinate projection is continuous from the bound on its summand, and a product neighborhood restricting finitely many coordinates contains a sufficiently small D-ball. A D-Cauchy sequence is Cauchy in each coordinate, so coordinate completeness gives a limit in S; bounding the first finitely many coordinate terms and then the geometric tail proves convergence in D. Sequences of rational vectors which are zero after finitely many coordinates form a countable dense subset, since the tail is arbitrarily small and each of finitely many coordinates can be approximated by rationals. Thus S is complete and separable, hence Polish by definition. [def. Polish space]

2.1 Set $Q_1=\pi_1$, the probability on the first two coordinates. For $N\ge2$, assume $Q_{N-1}$ is a probability on coordinates $1,\ldots,N$ with adjacent pair marginals $\pi_1,\ldots,\pi_{N-1}$ and last marginal $\mu_{n_N}$. Regard it as a law on $\mathbb R^{d(N-1)}\times\mathbb R^d$, and regard $\pi_N$ as a law on $\mathbb R^d\times\mathbb R^d$; they have the common second/first marginal $\mu_{n_N}$. The gluing statement [F1] gives $Q_N$ on coordinates $1,\ldots,N+1$ preserving all earlier adjacent marginals and adding $\pi_N$. Let $I_N:(\mathbb R^d)^{N+1}\to S$ send $(x_1,\ldots,x_{N+1})$ to $(x_1,\ldots,x_{N+1},0,0,\ldots)$; this map is continuous for the product topology. Define $\eta_N=(I_N)_\#Q_N$, that is, $\eta_N(B)=Q_N(I_N^{-1}(B))$ for Borel $B\subset S$. By [F7] it is a Borel probability, and its first $N+1$ coordinates have law $Q_N$ while every later coordinate equals zero. [F1, F7, step 1.1]

2.2 The $j$th marginal of any $\eta_N$ is either $\mu_{n_j}$ (when $N+1\ge j$) or $\delta_0$. Each fixed probability $\mu_{n_j}$ is tight by [F2]; AC chooses a compact $K_j\subset\mathbb R^d$ containing zero with $\mu_{n_j}(K_j^c)<\varepsilon2^{-j-1}$. Countable subadditivity gives $\eta_N((\prod_jK_j)^c)\le\sum_{j\ge1}\varepsilon2^{-j-1}<\varepsilon$ for every $N$. The product $K=\prod_jK_j$ is compact in $S$: it is closed and complete, and it is totally bounded because for any radius one first makes the metric tail small and then takes finite nets in the finitely many compact coordinates; [F5] applies. Hence $(\eta_N)$ is tight. By [F2] and Prokhorov, a subsequence converges weakly to a probability $\eta$ on $S$. [F2, F5, step 1.2]

3.1 For fixed $k$, all sufficiently late $\eta_N$ have their $(k,k+1)$ coordinate marginal equal to $\pi_k$. The coordinate projection $S\to\mathbb R^{2d}$ is continuous, so the projected laws of $\eta_N$ converge weakly to the corresponding marginal of $\eta$; because they are eventually exactly $\pi_k$, uniqueness of weak limits [F6] shows that this marginal is $\pi_k$. Let $X_k(x)=x_k$ be the coordinate maps on $(S,\eta)$. By [F4] and the pair marginal identity, $\int_S|X_{k+1}-X_k|^2d\eta=\int|x-y|^2d\pi_k=W_2(\mu_{n_k},\mu_{n_{k+1}})^2\le4^{-k}.$ Therefore $\int|X_{k+1}-X_k|d\eta\le2^{-k}$ by Cauchy–Schwarz. Monotone convergence [F4] shows $\int\sum_k|X_{k+1}-X_k|d\eta\le\sum_k2^{-k}<\infty$, so this sum is finite almost everywhere. The convergence set is Borel; its pointwise limit there, extended by zero on the complement, is a Borel map $X_\infty:S\to\mathbb R^d$. [F2, F3, F4, F6, F7, step 1.1, step 2.2]

4.1 Minkowski [F3] gives, for $m>n$, $\|X_m-X_n\|_{L^2(\eta)}\le\sum_{k=n}^{m-1}\|X_{k+1}-X_k\|_2\le\sum_{k=n}^{m-1}2^{-k}$. Fatou's lemma [F3] as $m\to\infty$ yields $\|X_\infty-X_n\|_2\le\sum_{k=n}^{\infty}2^{-k}$. Since $X_1$ has law $\mu_{n_1}\in\mathcal P_2$, the same inequality at $n=1$ and Minkowski imply $\int|X_\infty|^2d\eta<\infty$. Let $\mu_\infty=(X_\infty)_\#\eta$, a Borel probability by [F7]. The map $x\mapsto(X_n(x),X_\infty(x))$ is Borel, so its pushforward is a Borel probability by [F7]; its marginals are the laws of $X_n$ and $X_\infty$, namely $\mu_{n_n}$ and $\mu_\infty$. Thus $\mu_\infty\in\mathcal P_2$, and this joint law is a coupling, so $W_2(\mu_{n_n},\mu_\infty)\le\|X_n-X_\infty\|_2\le\sum_{k=n}^{\infty}2^{-k}\longrightarrow0.$ The original Cauchy sequence converges to the same limit: for any $\epsilon>0$, choose n large enough that the displayed tail bound is below $\epsilon/2$ and $n_n$ exceeds the Cauchy threshold for $\epsilon/2$; then $W_2(\mu_m,\mu_{n_n})<\epsilon/2$ for all sufficiently large m and apply the triangle inequality [F1]. [F1, F3, F4, F7, step 3.1] ∎
