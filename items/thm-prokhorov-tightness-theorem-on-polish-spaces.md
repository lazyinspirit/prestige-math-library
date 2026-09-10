---
id: thm-prokhorov-tightness-theorem-on-polish-spaces
kind: theorem
title: Prokhorov tightness theorem on polish spaces
deps: ["def-tight-family-of-probability-measures", "def-relative-sequential-compactness-for-weak-convergence", "thm-every-borel-probability-on-a-polish-space-is-tight", "lem-probability-laws-on-a-compact-metric-space-have-weakly-convergent-subsequences", "thm-portmanteau-theorem", "thm-hilbert-cube-universal-for-separable-metrizable-spaces", "thm-complete-and-totally-bounded-implies-compact", "thm-finite-and-countable-subadditivity-of-measures", "thm-continuity-from-below-for-measures", "def-axiom-of-choice", "lem-standard-complete-metric-on-a-countable-product"]
sources:
  references:
    - title: van Gaans, Theorem 5.2, Proposition 5.3, Lemma 5.4, pp. 14–18
      url: https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Assume AC. A family $\mathcal A$ of Borel probabilities on a Polish space S is tight if and only if it is relatively sequentially compact for weak convergence.

## Facts & Assumptions

[F1] [[thm-hilbert-cube-universal-for-separable-metrizable-spaces]]: Every separable metrizable space is homeomorphic to a subspace of the Hilbert cube $[0,1]^{\mathbb N}$.

[F2] [[lem-standard-complete-metric-on-a-countable-product]]: Let $((X_n,d_n))_{n\in\mathbb N}$ be complete metric spaces with $d_n\le1$. On $\prod_nX_n$, the formula $D(x,y)=\sum_{n=0}^{\infty}2^{-(n+1)}d_n(x_n,y_n)$ defines a complete metric inducing the product topology. The empty product is the one-point space.

[F3] [[thm-complete-and-totally-bounded-implies-compact]]: **Assume the Axiom of Countable Choice** (def-countable-choice). Let $(X,d)$
be a metric space (def-metric-space) that is complete
(def-complete-metric-space) and totally bounded (def-totally-bounded).
Then $(X,d)$ is compact (def-metric-compactness).

**Where the axiom is spent, and why the weaker principle suffices.**
$\mathrm{AC}_\omega$ is used exactly once, at step 3.1, to fix one finite
$1/(n+1)$-net **together with a listing of it** for every $n \in \mathbb{N}$ at
once. The family of sets being chosen from is written down before any selection
is made and does not depend on the earlier selections, which is precisely the
situation countable choice covers and dependent choice
(def-dependent-choice) is not needed for. Everything after step 3.1 is
canonical: at each stage the construction takes the **least** admissible index in
the listing already fixed.

As always on this page, the claim is an upper bound on the cost of the proof
given here, not an assertion that $\mathrm{AC}_\omega$ is necessary for the
theorem.

[F4] [[lem-probability-laws-on-a-compact-metric-space-have-weakly-convergent-subsequences]]: Assume AC. Every sequence of Borel probability laws on a compact metric K has a subsequence converging weakly to a Borel probability on K.

[F5] [[thm-portmanteau-theorem]]: For Borel probabilities $\mu_n,\mu$ on a metric space S, the following are equivalent: (i) $\mu_n\Rightarrow\mu$; (ii) integrals converge for all bounded uniformly continuous real tests; (iii) $\limsup_n\mu_n(F)\le\mu(F)$ for every closed F; (iv) $\liminf_n\mu_n(G)\ge\mu(G)$ for every open G; (v) $\mu_n(A)\to\mu(A)$ for every Borel A with $\mu(\partial A)=0$.

[F6] [[thm-continuity-from-below-for-measures]]: Let $(E_n)_{n\in\mathbb N}$ be an increasing sequence of measurable sets for a measure $\mu$, so $E_n\subseteq E_{n+1}$. Then

$$\mu\left(\bigcup_{n\in\mathbb N}E_n\right)=\sup_{n\in\mathbb N}\mu(E_n).$$

No finiteness hypothesis is required.

[F7] [[thm-finite-and-countable-subadditivity-of-measures]]: Let $\mu$ be a measure and let $(E_k)_{k\in\mathbb N}$ be measurable. Then

$$\mu\left(\bigcup_{k\in\mathbb N}E_k\right)\le\sum_{k=0}^{\infty}\mu(E_k).$$

For every $m\in\mathbb N$ one also has

$$\mu\left(\bigcup_{k<m}E_k\right)\le\sum_{k<m}\mu(E_k),$$

including $m=0$, where both sides are $0$.

## Proof

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 The empty family satisfies both definitions vacuously. Otherwise fix a compatible complete metric on S. By F1 there is a homeomorphic embedding e into $H=[0,1]^{\mathbb N}$. H has complete metric $\rho(x,y)=\sum_{j=0}^{\infty}2^{-(j+1)}|x_j-y_j|$ by F2. It is totally bounded: choose an integer $N\ge1$ with tail $\sum_{j\ge N}2^{-(j+1)}<\eta/2$ and a finite mesh in coordinates $0,\ldots,N-1$ with weighted error below $\eta$/2, putting zero in later coordinates. AC restricted to countable nonempty families gives the countable choice required by F3, which makes H compact. [F1, F2, F3]

1.2 Assume tightness and take any sequence $\mu_n$ in the family. Push it forward by e. F4 gives a subsequence $\nu_{n_j}=e_*\mu_{n_j}\Rightarrow\nu$ on H. For every integer $m\ge1$, choose compact $K_m$ in S with all $\mu_n$($K_m$)>1-1/m. Their images are compact and closed in H, so F5 gives $\nu(e(K_m))\ge\limsup_j\nu_{n_j}(e(K_m))\ge1-1/m$. Hence the Borel set $E=\bigcup_{m\ge1}e(K_m)\subseteq e(S)$ has $\nu$ mass one. [F4, F5]

1.3 For Borel B in S, e(B) is Borel relative to e(S). Since E is ambient Borel and contained in e(S), $E\cap e(B)$ is Borel in H. Define $\mu(B)=\nu(E\cap e(B))$; disjoint unions are preserved and $\mu$(S)=$\nu$(E)=1. For closed F in S there is a closed Z in H with $Z\cap e(S)=e(F)$, by the relative topology. Then $\mu_{n_j}(F)=\nu_{n_j}(Z)$ and $\nu(Z)=\nu(Z\cap E)=\mu(F)$. The closed bound from F5 gives $\limsup_j\mu_{n_j}(F)\le\mu(F)$, hence weak convergence on S. This proves tightness implies relative sequential compactness without assuming e(S) is Borel. [F5]

1.4 For the reverse, let $U_i$ be any countable open cover of S. Fix $\varepsilon$>0. If no finite initial union works uniformly, AC selects $\mu_n$ in the family with $\mu_n(\bigcup_{i\le n}U_i)\le1-\varepsilon$. Relative sequential compactness gives a weakly convergent subsequence with probability limit $\mu$. For any fixed r, eventually $n_j$>=r, so for the fixed open set $G_r=\bigcup_{i\le r}U_i$ one has $\mu_{n_j}(G_r)\le1-\varepsilon$ eventually. The open bound in F5 yields $\mu(G_r)\le\liminf_j\mu_{n_j}(G_r)\le1-\varepsilon$. F6 as r tends to infinity would give $\mu$(S)<=1-$\varepsilon$, a contradiction. Thus a uniform finite initial union exists. [F5, F6]

2.1 Apply step 1.4 to the dense-center ball cover of radius $2^{-m}$ and loss $\varepsilon2^{-m-1}$ at each $m\ge1$. Let $C_m$ be the corresponding finite union of closed balls and $K=\bigcap_mC_m$. F7 bounds every $\mu$(S\K) by $\sum_m\varepsilon2^{-m-1}<\varepsilon$. K is closed in the complete S and is totally bounded: for any $\eta$ choose m with $2^{1-m}<\eta$ and select one point of K from each of the finitely many balls meeting it. These form an $\eta$-net. F3 makes K compact, proving tightness. [F3, F7, step 1.4] ∎
