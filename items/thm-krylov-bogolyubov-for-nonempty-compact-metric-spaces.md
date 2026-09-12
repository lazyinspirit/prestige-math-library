---
id: thm-krylov-bogolyubov-for-nonempty-compact-metric-spaces
kind: theorem
title: Krylov–Bogolyubov existence of an invariant probability
deps: ["lem-borel-probability-sequences-on-compact-metric-spaces-have-integral-convergent-subsequences", "prop-dirac-measure-is-a-probability-measure", "thm-increasing-simple-approximation-of-a-nonnegative-measurable-function", "thm-monotone-convergence-for-the-integral", "thm-linearity-of-the-lebesgue-integral-on-l-one", "lem-finite-measure-uniqueness-on-a-pi-system", "def-measure-preserving-transformation-and-system", "def-countable-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: E–W Theorem 4.1 and Corollary 4.2 p.98
      url: https://webspace.maths.qmul.ac.uk/f.vivaldi/teaching/ETAD/NotesI.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Assume countable choice. Every continuous self-map $T:K\to K$ of a nonempty compact metric space admits a Borel probability $\mu$ satisfying $\mu(T^{-1}E)=\mu(E)$ for every Borel $E\subseteq K$. Thus $(K,\mathcal B(K),\mu,T)$ is a measure-preserving probability system.

## Facts & Assumptions

[F1] Under countable choice, probability sequences on nonempty compact metric spaces have subsequences converging against every real continuous test function to a Borel probability. [[lem-borel-probability-sequences-on-compact-metric-spaces-have-integral-convergent-subsequences]].

[F2] The Dirac set function at a point is a probability on any sigma-algebra. [[prop-dirac-measure-is-a-probability-measure]].

[F3] Nonnegative measurable functions have increasing simple approximations. [[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]].

[F4] Increasing nonnegative measurable approximations have increasing integrals converging to the limit integral. [[thm-monotone-convergence-for-the-integral]].

[F5] Integrals are linear on integrable real functions. [[thm-linearity-of-the-lebesgue-integral-on-l-one]].

[F6] Finite measures agreeing on a generating pi-system and on total mass coincide. [[lem-finite-measure-uniqueness-on-a-pi-system]].

[F7] Measure preservation means equality of the measure of every measurable set and its inverse image. [[def-measure-preserving-transformation-and-system]].

## Proof

**Given:** Assume countable choice. Every continuous self-map $T:K\to K$ of a nonempty compact metric space admits a Borel probability $\mu$ satisfying $\mu(T^{-1}E)=\mu(E)$ for every Borel $E\subseteq K$. Thus $(K,\mathcal B(K),\mu,T)$ is a measure-preserving probability system.

1.1 Fix one point $x\in K$ and, for $N\ge1$, define $\mu_N(E)=N^{-1}\sum_{j=0}^{N-1}\delta_{T^jx}(E)$ on the Borel sets. By [F2], each summand is a probability; finite sums preserve countable additivity because a finite sum commutes with the increasing partial sums of a nonnegative series. Thus $\mu_N$ is a Borel probability. For indicators its integral is exactly $N^{-1}\sum_{j=0}^{N-1}\mathbf1_E(T^jx)$; the simple integral gives this for every nonnegative simple function. Applying [F3] and [F4], with finite sums of increasing limits, gives $\int f\,d\mu_N=N^{-1}\sum_{j=0}^{N-1}f(T^jx)$ for nonnegative Borel $f$. For bounded real $f$, apply this to $f^+,f^-$ and subtract by [F5]. The starting-point choice is a single existential instantiation, not an axiom of choice. [F2, F3, F4, F5]

2.1 By [F1] there are $N_r\uparrow\infty$ and a Borel probability $\mu$ such that $\int f\,d\mu_{N_r}\to\int f\,d\mu$ for all continuous real $f$. Continuity of $T$ ensures that $f\circ T$ is also continuous. Step 1.1 telescopes to $\int(f\circ T-f)\,d\mu_N=(f(T^Nx)-f(x))/N$, of absolute value at most $2\|f\|_\infty/N$. Hence $\int f\circ T\,d\mu=\int f\,d\mu$ for every such $f$, by [F5] and passage to the two limits. [1.1, F1, F5]

3.1 Define $\nu(E)=\mu(T^{-1}E)$ for Borel $E$. The class of sets whose inverse images are Borel is a sigma-algebra containing the opens, since $T$ is continuous; thus $\nu$ is defined on all Borel sets. Inverse images commute with complements and disjoint countable unions, so $\nu$ is a Borel probability. For indicators, $\int\mathbf1_E\,d\nu=\int\mathbf1_E\circ T\,d\mu$. The finite simple-integral formula, then [F3] and [F4] on both sides, prove $\int f\,d\nu=\int f\circ T\,d\mu$ for every nonnegative Borel $f$, including infinite values. Applying it first to $|f|$ verifies integrability of $f\circ T$ whenever $f$ is $\nu$-integrable; positive/negative decomposition and [F5] then prove the real signed identity. Combining it with step 2.1 gives equality of $\mu$ and $\nu$ on all continuous real integrals. [2.1, F3, F4, F5]

4.1 To pass from these test functions to sets without invoking a stronger-choice LCH theorem, let $F$ be a nonempty closed subset of $K$ and put $h_m(z)=\max(0,1-m d(z,F))$ for $m\ge1$. The infimum defining $d(z,F)$ is 1-Lipschitz by the triangle inequality. It is zero on $F$ and positive outside $F$, since the complement of $F$ is open. Thus $h_m$ is continuous and $1-h_m\uparrow\mathbf1_{K\setminus F}$. By [F4] and the equal continuous integrals, $\mu(K\setminus F)=\nu(K\setminus F)$; total masses one give $\mu(F)=\nu(F)$. Empty $F$ also has equal measure zero. The closed subsets form a nonempty pi-system containing $K$ and generate the Borel sigma-algebra because their complements are exactly the opens. All hypotheses of [F6] hold, so $\mu=\nu$ on the Borel sets. By the definition of $\nu$, this is precisely [F7]. Countable choice enters through [F1]; the orbit, metric test functions and monotone simple approximants require no further selection principle. [2.1, 3.1, F1, F4, F6, F7] ∎

