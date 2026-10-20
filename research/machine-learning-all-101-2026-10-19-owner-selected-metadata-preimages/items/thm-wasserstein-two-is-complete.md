---
id: "thm-wasserstein-two-is-complete"
kind: theorem
title: "The quadratic Wasserstein space is complete"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: ["def-wasserstein-two-space-and-couplings", "thm-wasserstein-two-is-a-metric", "lem-wasserstein-gluing", "prop-existence-and-lower-semicontinuity-of-optimal-couplings", "thm-prokhorov-tightness-theorem-on-polish-spaces", "thm-minkowski-integral-inequality", "thm-cauchy-schwarz-in-an-inner-product-space", "thm-fatou-lemma", "thm-monotone-convergence-for-the-integral", "cor-weakly-convergent-sequences-are-tight", "def-tight-family-of-probability-measures", "def-polish-space", "thm-complete-and-totally-bounded-implies-compact", "def-metric-space", "def-complete-metric-space", "def-totally-bounded", "def-axiom-of-choice", "thm-choice-implies-dependent-implies-countable-choice", "def-countable-choice", "def-dependent-choice", "def-weak-convergence-of-borel-probability-measures", "thm-change-of-variables-for-expectation", "def-expectation-of-a-nonnegative-or-integrable-random-variable"]
justified_by: []
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
proof_strategy: direct
axiom_use: "Full AC is used to choose a rapidly Cauchy subsequence, optimal pair couplings, and a Prokhorov subsequence; it supplies the countable/dependent choice used for countable-product compactness."
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

[F3] Minkowski's inequality holds for the $L^2$ norm, Cauchy--Schwarz bounds first moments by second moments on a probability space, and Fatou's lemma holds for nonnegative measurable functions. [[thm-minkowski-integral-inequality]] [[thm-cauchy-schwarz-in-an-inner-product-space]] [[thm-fatou-lemma]]

[F4] Integrals of increasing nonnegative functions converge to the integral of their pointwise limit; pushforward integration satisfies $\int f\,d(T_\#\eta)=\int f(T(\omega))d\eta(\omega)$ for nonnegative measurable $f$. [[thm-monotone-convergence-for-the-integral]] [[thm-change-of-variables-for-expectation]] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]

[F5] A complete totally bounded metric space is compact under Countable Choice; AC supplies Countable Choice. [[thm-complete-and-totally-bounded-implies-compact]] [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]] [[def-countable-choice]]

[F6] Weak convergence is convergence against bounded continuous tests; continuous coordinate projections preserve it by composition of tests. [[def-weak-convergence-of-borel-probability-measures]]

## Proof
1.1 For each k, the Cauchy property gives a threshold N_k such that $W_2(\mu_n,\mu_m)<2^{-k}$ whenever $n,m\ge N_k$. Set $n_1=N_1$ and recursively $n_{k+1}=\max\{N_{k+1},n_k+1\}$. Then $n_k<n_{k+1}$ and $W_2(\mu_{n_k},\mu_{n_{k+1}})\le2^{-k}$. By AC choose an optimal coupling $\pi_k$ of these consecutive laws for each k using [F1]. [given, F1, construct]

1.2 Equip $S$ with $D(x,y)=\sum_{j\ge1}2^{-j}\min(1,|x_j-y_j|)$. This metric induces the product topology: each coordinate projection is continuous from the bound on its summand, and a product neighborhood restricting finitely many coordinates contains a sufficiently small D-ball. A D-Cauchy sequence is Cauchy in each coordinate, so coordinate completeness gives a limit in S; bounding the first finitely many coordinate terms and then the geometric tail proves convergence in D. Sequences of rational vectors which are zero after finitely many coordinates form a countable dense subset, since the tail is arbitrarily small and each of finitely many coordinates can be approximated by rationals. Thus S is Polish by its definition in [F5]. [F5]

2.1 By repeated application of the gluing statement [F1], for each $N\ge1$ construct a probability $Q_N$ on $(\mathbb R^d)^{N+1}$ whose adjacent pair marginal at positions $(k,k+1)$ is $\pi_k$ for each $1\le k\le N$. Inductively, after constructing the law through position $N$, glue it to $\pi_N$ along its last marginal $\mu_{n_N}$. Extend $Q_N$ to a probability $\eta_N$ on $S=(\mathbb R^d)^{\mathbb N}$ by setting every coordinate after $N+1$ equal to zero. [F1, step 1.1]

2.2 The $j$th marginal of any $\eta_N$ is either $\mu_{n_j}$ (when $N+1\ge j$) or $\delta_0$. Each fixed probability $\mu_{n_j}$ is tight by [F2]; AC chooses a compact $K_j\subset\mathbb R^d$ containing zero with $\mu_{n_j}(K_j^c)<\varepsilon2^{-j-1}$. Countable subadditivity gives $\eta_N((\prod_jK_j)^c)\le\sum_{j\ge1}\varepsilon2^{-j-1}<\varepsilon$ for every $N$. The product $K=\prod_jK_j$ is compact in $S$: it is closed and complete, and it is totally bounded because for any radius one first makes the metric tail small and then takes finite nets in the finitely many compact coordinates; [F5] applies. Hence $(\eta_N)$ is tight. By [F2] and Prokhorov, a subsequence converges weakly to a probability $\eta$ on $S$. [F2, F5, step 1.2]

3.1 For fixed $k$, all sufficiently late $\eta_N$ have their $(k,k+1)$ coordinate marginal equal to $\pi_k$. The coordinate projection $S\to\mathbb R^{2d}$ is continuous, so [F6] gives that the corresponding marginal of $\eta$ is $\pi_k$. Let $X_k(x)=x_k$ be the coordinate maps on $(S,\eta)$. By [F4] and the pair marginal identity, $\int_S|X_{k+1}-X_k|^2d\eta=\int|x-y|^2d\pi_k=W_2(\mu_{n_k},\mu_{n_{k+1}})^2\le4^{-k}.$ Therefore $\int|X_{k+1}-X_k|d\eta\le2^{-k}$ by Cauchy–Schwarz. Monotone convergence [F4] shows $\int\sum_k|X_{k+1}-X_k|d\eta\le\sum_k2^{-k}<\infty$, so this sum is finite almost everywhere. Thus $X_k$ converges almost everywhere to a measurable $X_\infty:S\to\mathbb R^d$ (define it to be zero on the null set where convergence fails). [F2, F3, F4, F6, step 1.1, step 2.2]

4.1 Minkowski [F3] gives, for $m>n$, $\|X_m-X_n\|_{L^2(\eta)}\le\sum_{k=n}^{m-1}\|X_{k+1}-X_k\|_2\le\sum_{k=n}^{m-1}2^{-k}$. Fatou's lemma [F3] as $m\to\infty$ yields $\|X_\infty-X_n\|_2\le\sum_{k=n}^{\infty}2^{-k}$. Since $X_1$ has law $\mu_{n_1}\in\mathcal P_2$, the same inequality at $n=1$ and Minkowski imply $\int|X_\infty|^2d\eta<\infty$. Let $\mu_\infty=(X_\infty)_\#\eta$. Then $\mu_\infty\in\mathcal P_2$, and the joint law of $(X_n,X_\infty)$ is a coupling of $\mu_{n_n}$ and $\mu_\infty$, so $W_2(\mu_{n_n},\mu_\infty)\le\|X_n-X_\infty\|_2\le\sum_{k=n}^{\infty}2^{-k}\longrightarrow0.$ The original Cauchy sequence converges to the same limit: for any $\epsilon>0$, choose n large enough that the displayed tail bound is below $\epsilon/2$ and $n_n$ exceeds the Cauchy threshold for $\epsilon/2$; then $W_2(\mu_m,\mu_{n_n})<\epsilon/2$ for all sufficiently large m and apply the triangle inequality [F1]. [F1, F3, F4, step 3.1] ∎
