---
id: lem-nuclear-series-characterizes-trace-norm
kind: lemma
title: Nuclear series characterizes trace norm
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-trace-class-operator, def-absolute-value-and-singular-values-of-a-compact-operator, thm-singular-value-decomposition-for-compact-operators, thm-hilbert-space-fourier-expansion, thm-norm-limit-of-compact-operators-is-compact, lem-finite-rank-operators-are-compact, thm-cauchy-schwarz-in-an-inner-product-space, lem-finite-bessel-inequality, def-operator-norm, def-bounded-linear-operator, def-metric-convergence, def-infimum, def-dimension, def-hilbert-space, def-countable-choice, def-real-and-complex-inner-product-space]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.6, Lemma 3.29 (printed pp. 98–100)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Anthony W. Knapp, Advanced Real Analysis — Chapter II, §5, Proposition 2.9"
      url: "https://www.math.stonybrook.edu/~aknapp/download/a2-realanal-inside.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ and $K$
be real or complex Hilbert spaces and let $T\in\mathcal B(H,K)$ be compact
([[def-compact-linear-operator]]). Then $T$ is trace class
([[def-trace-class-operator]]) if and only if there are sequences
$(u_j)_{j\ge1}$ in $H$ and $(v_j)_{j\ge1}$ in $K$ with
$$\sum_{j\ge1}\|u_j\|\,\|v_j\|<+\infty$$
such that the finite-rank operators $R_m:=\sum_{j\le m}\langle\cdot,u_j\rangle v_j$
converge to $T$ in operator norm ([[def-operator-norm]],
[[def-metric-convergence]]). In that case
$$\|T\|_1=\inf\Bigl\{\sum_{j\ge1}\|u_j\|\,\|v_j\|:\ R_m\to T\ \text{in operator norm}\Bigr\},$$
the infimum being over all such **nuclear representations** of $T$, and the
infimum is attained: after reindexing its at-most-countable index set by the
positive integers, the singular-value series
$T=\sum_{j\in J}s_j\langle\cdot,e_j\rangle f_j$ is a nuclear representation with
sum $\|T\|_1$.

## Facts & Assumptions

**Given:** Countable Choice, Hilbert spaces $H,K$, a compact $T\in\mathcal B(H,K)$, and nuclear sequences $(u_j),(v_j)$.

[A1] **Singular value decomposition.** With $J$ the index set of positive singular values, $T=\sum_{j\in J}s_j\langle\cdot,e_j\rangle f_j$ in norm with $\|T-T_n\|\le s_{n+1}$ for the partial sums $T_n$, $(e_j)$ and $(f_j)$ orthonormal, and $s_j$ nonincreasing; $s_j>0$ for all $j\in J$ ([[thm-singular-value-decomposition-for-compact-operators]], [[def-absolute-value-and-singular-values-of-a-compact-operator]]).

[A2] **Trace norm and trace class.** $T$ is trace class exactly when $\sum_ns_n(T)<+\infty$, and then $\|T\|_1=\sum_ns_n(T)$; for finite-rank $T$ the series is a finite sum ([[def-trace-class-operator]]).

[A4] **Finite-rank operators are compact, and norm limits of compact operators are compact** for a Banach target, under $\mathrm{AC}_\omega$ ([[lem-finite-rank-operators-are-compact]], [[thm-norm-limit-of-compact-operators-is-compact]], [[def-hilbert-space]]).

[A5] **Pairing and Bessel.** The pairing is linear in the first argument and conjugate-linear in the second, $|\langle u,v\rangle|\le\|u\|\|v\|$; for an orthonormal family $(e_j)$ the finite coefficient sums of any vector are bounded by its squared norm ([[thm-cauchy-schwarz-in-an-inner-product-space]], [[def-real-and-complex-inner-product-space]], [[lem-finite-bessel-inequality]]); Fourier expansions converge in norm ([[thm-hilbert-space-fourier-expansion]]).

[A6] **Infimum.** The infimum of a nonempty set of nonnegative reals is its greatest lower bound ([[def-infimum]], [[def-dimension]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, the compact $T$, its singular system, and the nuclear data.

1.1 **The singular series is nuclear with sum $\|T\|_1$.** Write the SVD as $T=\sum_{j\in J}s_j\langle\cdot,e_j\rangle f_j=\sum_{j\in J}\langle\cdot,s_je_j\rangle f_j$. If $J=\mathbb N$ (the infinite-rank case), define $u_{m+1}:=s_me_m$ and $v_{m+1}:=f_m$ for every $m\in\mathbb N$; thus the positive-indexed nuclear series includes the SVD term with index $m=0$. If $J=\{1,\ldots,r\}$, use $u_j:=s_je_j$, $v_j:=f_j$ for $1\le j\le r$ and put $u_j=v_j:=0$ for $j>r$; if $J=\varnothing$, use the two zero sequences. In every case $\sum_{j\ge1}\|u_j\|\|v_j\|$ is exactly the sum of all positive singular values, hence equals $\|T\|_1<+\infty$, and the corresponding partial sums converge to $T$ in operator norm by [A1]. Hence if $T$ is trace class it has a nuclear representation with sum $\|T\|_1$. [A1, A2]

1.2 **A nuclear representation makes $T$ trace class.** Assume $R_m=\sum_{j\le m}\langle\cdot,u_j\rangle v_j$ converges to $T$ in operator norm with $C:=\sum_j\|u_j\|\|v_j\|<+\infty$. Each $R_m$ has finite rank, hence is compact [A4], and the target $K$ is a Hilbert space, so the norm limit $T$ is compact [A4]; the singular system of [A1] therefore applies, and for every finite $F\subseteq J$, $R_m\to T$ gives $\langle Te_j,f_j\rangle=\lim_m\langle R_me_j,f_j\rangle=\lim_m\sum_{j'\le m}\langle e_j,u_{j'}\rangle\langle v_{j'},f_j\rangle$ [A5]; hence $\sum_{j\in F}s_j=\lim_m\sum_{j\in F}\sum_{j'\le m}\langle e_j,u_{j'}\rangle\langle v_{j'},f_j\rangle=\lim_m\sum_{j'\le m}\sum_{j\in F}\langle e_j,u_{j'}\rangle\langle v_{j'},f_j\rangle$ (finite sums) and, bounding the inner sum by finite Cauchy–Schwarz and Bessel, $|\sum_{j\in F}\langle e_j,u_{j'}\rangle\langle v_{j'},f_j\rangle|\le(\sum_{j\in F}|\langle u_{j'},e_j\rangle|^2)^{1/2}(\sum_{j\in F}|\langle v_{j'},f_j\rangle|^2)^{1/2}\le\|u_{j'}\|\|v_{j'}\|$; therefore $\sum_{j\in F}s_j\le\sum_{j'}\|u_{j'}\|\|v_{j'}\|=C$. Taking the supremum over finite $F$ gives $\|T\|_1=\sum_js_j\le C<+\infty$, so $T$ is trace class and $\|T\|_1\le C$. [A1, A2, A4, A5, algebra]

2.1 **Conclusion.** By [step 1.2] every nuclear representation has sum $\ge\|T\|_1$, and by [step 1.1] the singular series is a nuclear representation with sum exactly $\|T\|_1$; hence $T$ is trace class exactly when some nuclear representation exists, the trace norm equals the infimum of the nuclear sums by [A6], and that infimum is attained. [step 1.1, step 1.2, A1, A2, A6] ∎
