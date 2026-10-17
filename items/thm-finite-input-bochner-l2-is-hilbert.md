---
id: thm-finite-input-bochner-l2-is-hilbert
kind: theorem
title: Finite-input Bochner L2 of a separable Hilbert space is Hilbert
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-finite-input-bochner-l2-space
  - def-hilbert-space
  - def-countable-choice
  - lem-borel-map-into-separable-banach-is-strongly-measurable
  - thm-minkowski-inequality-for-integrals
  - thm-monotone-convergence-for-the-integral
  - thm-dominated-convergence
  - cor-cauchy-schwarz-inequality-for-l-two
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: Countable Choice selects a summably Cauchy subsequence and the strongly measurable representatives and simple-approximation witnesses for the resulting countable sequence of equivalence classes.
verification: {}
sources:
  references:
    - title: Gerald Teschl, Topics in Real and Functional Analysis, §11.6
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
    - title: Christian Clason, Introduction to Finite Element Methods, Chapter 11
      url: https://arxiv.org/pdf/1709.08618v2.pdf
---

## Statement

Assume Countable Choice. For the space $L^2_\rho(V)$ of
[[def-finite-input-bochner-l2-space]], the displayed integral pairing is a
well-defined real inner product, its norm is
$$\|U\|_{L^2_\rho(V)}=\left(\int_\Gamma\|U(y)\|_V^2\,d\rho(y)\right)^{1/2},$$
and this norm is complete. Moreover, finite-valued strongly measurable
functions are dense in this space.

## Facts & Assumptions

**Given:** Countable Choice, a finite product Borel probability space
$(\Gamma,\mathcal B(\Gamma),\rho)$, and a separable real Hilbert space $V$.

[F1] [[def-finite-input-bochner-l2-space]] defines the elements as strongly measurable $V$-valued classes with square-integrable norm, modulo equality almost everywhere.

[F2] [[def-hilbert-space]] gives completeness of $V$ and the positive-definite inner product $(\cdot,\cdot)_V$.

[F3] [[cor-cauchy-schwarz-inequality-for-l-two]] gives the scalar integral estimate $\int fg\,d\rho\le\|f\|_2\|g\|_2$ for nonnegative $f,g\in L^2(\rho)$.

[F4] Minkowski's inequality and monotone convergence for nonnegative integrals are [[thm-minkowski-inequality-for-integrals]] and [[thm-monotone-convergence-for-the-integral]].

[F5] A Borel map into a separable Banach space on a probability space is strongly measurable ([[lem-borel-map-into-separable-banach-is-strongly-measurable]]).

[F6] Dominated convergence applies to integrable scalar majorants ([[thm-dominated-convergence]]).

[A1] Countable Choice permits selecting a subsequence of a Cauchy sequence with prescribed summable successive distances ([[def-countable-choice]]).

[A2] Countable Choice also permits selecting strongly measurable representatives and their simple-approximation witnesses for a countable sequence of equivalence classes; replacing each representative on its measurable null exceptional set by zero gives a Borel version.

## Proof

1.1 For $U,W\in L^2_\rho(V)$, use the Borel representatives obtained by the null-set modification in [F1], and denote them again by $U,W$. Their norm functions and pairings are measurable. Pointwise Cauchy–Schwarz gives $|(U(y),W(y))_V|\le\|U(y)\|_V\|W(y)\|_V$. Integrating and applying [F3] shows that the product is integrable and the pairing is finite. Changing either representative on a null set does not change the integral. The pairing is bilinear and symmetric. If its value on $(U,U)$ is zero, then for each integer $n\ge1$ the set $E_n=\{y:\|U(y)\|_V\ge1/n\}$ has measure zero, since $0=\int\|U\|^2\ge\rho(E_n)/n^2$; their countable union contains every point where $U\ne0$. Thus the class of $U$ is zero, proving positive definiteness. [F1, F2, F3, given]

1.2 Let $(U_n)$ be Cauchy in the displayed norm. By [A1] select a subsequence $(U_{n_k})$ with $\|U_{n_{k+1}}-U_{n_k}\|_{L^2_\rho(V)}\le2^{-k}$. By [A2], choose strongly measurable representatives for these countably many classes and simple-approximation witnesses for each representative; replace each representative by zero on its measurable null exceptional set, obtaining Borel versions of the same classes. Put $d_k(y)=\|U_{n_{k+1}}(y)-U_{n_k}(y)\|_V$ and $s_m=\sum_{k=1}^m d_k$. Minkowski [F4] gives $\|s_m\|_2\le\sum_{k=1}^m2^{-k}\le1$. The functions $s_m^2$ increase, so monotone convergence [F4] yields $\int(\lim_m s_m)^2\,d\rho\le1$. Therefore $\sum_kd_k(y)<\infty$ outside a measurable null set; otherwise its square integral would be infinite on a set of positive measure. [F1, F4, A1, A2, given]

2.1 Let $E=\{y:\sum_kd_k(y)<\infty\}$, a Borel set of full measure by step 1.2. On $E$, $(U_{n_k}(y))$ is Cauchy in $V$ and hence has a limit by [F2]. Define $U(y)$ to be this limit on $E$ and zero on $E^c$. The Borel maps equal to $U_{n_k}$ on $E$ and zero on $E^c$ converge pointwise everywhere to $U$; their pointwise limit is Borel measurable (equivalently, distances to a countable dense subset of $V$ are Borel limits). By [F5], $U$ is strongly measurable. If $g_m=\sum_{k\ge m}d_k$, then $g_m\downarrow0$ almost everywhere, $g_m\le\lim_k s_k$, and the latter is in $L^2$ by step 1.2. Dominated convergence [F6] gives $\|g_m\|_2\to0$, while $\|U-U_{n_m}\|_V\le g_m$ almost everywhere on $E$. Thus $U_{n_m}\to U$ in $L^2_\rho(V)$. [F2, F5, F6, step 1.2]

3.1 Since $(U_n)$ is Cauchy and its subsequence converges to $U$, the full sequence converges to $U$: for $\varepsilon>0$, choose $N$ so $\|U_n-U_m\|<\varepsilon/2$ for $m,n\ge N$, then choose $n_k\ge N$ with $\|U_{n_k}-U\|<\varepsilon/2$; the triangle inequality gives $\|U_n-U\|<\varepsilon$ for $n\ge N$. This proves completeness. [step 1.2, step 2.1, algebra]

4.1 Let $U\in L^2_\rho(V)$ and choose a strongly measurable representative with simple approximants and measurable null exceptional set as in the definition. Change the representative and approximants to zero on that set; the resulting representative is measurable and the finite-valued simple approximants converge to it everywhere. Truncate each approximant to zero where its norm exceeds $2\|U(y)\|_V$. The truncation set is measurable; the truncated functions remain finite-valued simple functions, converge to $U$ almost everywhere, and their squared errors are bounded by $9\|U(y)\|_V^2$. Dominated convergence [F6] gives convergence in $L^2_\rho(V)$, proving density. [F1, F6] ∎
