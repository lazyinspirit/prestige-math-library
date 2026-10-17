---
id: lem-parabolic-weak-compactness-separable-bochner-hilbert
kind: lemma
title: Bounded sequences in a separable Hilbert space have weakly convergent subsequences
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-countable-choice
  - def-hilbert-space
  - def-separable-space
  - def-parabolic-evolution-triple-and-energy-space
  - thm-dominated-convergence
  - thm-finite-and-countable-subadditivity-of-measures
  - thm-holder-inequality-for-integrals
  - thm-minkowski-inequality-for-integrals
  - thm-monotone-convergence-for-the-integral
  - thm-orthogonal-decomposition-by-a-closed-subspace
  - thm-riesz-representation-for-hilbert-space
  - thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn
  - thm-continuity-from-below-for-measures
  - thm-bolzano-weierstrass
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Christian Clason, Introduction to Finite Element Methods, lecture notes
      url: https://arxiv.org/pdf/1709.08618v2.pdf
      locator: "Chapter 11, §11.2, PDF pp. 102–103: weak compactness is the limiting step in the parabolic variational argument."
    - title: Long Chen, Finite Element Methods for Parabolic Equations
      url: https://www.math.uci.edu/~chenlong/226/ParabolicEquation.pdf
      locator: "§1, pp. 1–2: the L2-in-time evolution setting used for weak compactness."
verification: {}
---

## Statement

Assume Countable Choice. Every bounded sequence in a separable real Hilbert
space $X$ has a weakly convergent subsequence. If $V$ is a separable real
Hilbert space, then $L^2(0,T;V)$ and $L^2(0,T;V^*)$ are separable real Hilbert
spaces, their product is a separable Hilbert space, and the graph of the weak
time-derivative operator is closed there. Consequently $W(0,T;V)$ is a closed
Hilbert subspace of that product and every bounded sequence in $W(0,T;V)$ has
a weakly convergent subsequence.

## Facts & Assumptions

**Given:** A separable real Hilbert space $X$ and a sequence $(x_n)$ with $\sup_n\|x_n\|_X\le C<\infty$.

[F1] $L^2(0,T;X)$ consists of strongly measurable equivalence classes with the square-integral norm, and the weak time derivative is the scalar test identity stated for the parabolic energy space ([[def-parabolic-evolution-triple-and-energy-space]]).

[F2] Riesz representation identifies the continuous dual of a real Hilbert space isometrically with that space; hence $V^*$ is separable when $V$ is separable ([[thm-riesz-representation-for-hilbert-space]]).

[F3] Rational box-step functions are countable and dense in scalar $L^2(\mathbb R)$ under Countable Choice; restricting them to $(0,T)$ gives a countable dense subset of $L^2(0,T)$ ([[thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn]]).

[F4] Holder, Minkowski, monotone convergence and dominated convergence apply to the scalar integrals used below ([[thm-holder-inequality-for-integrals]], [[thm-minkowski-inequality-for-integrals]], [[thm-monotone-convergence-for-the-integral]], [[thm-dominated-convergence]]).

[F5] A countable union of measurable null sets is null ([[thm-finite-and-countable-subadditivity-of-measures]]).

[F6] Measures of increasing sets converge to the measure of their union ([[thm-continuity-from-below-for-measures]]).

[F7] Every closed subspace of a Hilbert space and its orthogonal complement decompose the whole space ([[thm-orthogonal-decomposition-by-a-closed-subspace]]).

[F8] A Hilbert space is complete in its induced norm ([[def-hilbert-space]]).

[A1] Countable Choice supplies representatives for countably many $L^2$ classes and the assumptions of [F2], [F3] and [F7]; the coordinate extraction below is deterministic ([[def-countable-choice]]).

[F9] Every bounded real sequence has a convergent subsequence ([[thm-bolzano-weierstrass]]).

## Proof
1.1 Apply Gram–Schmidt to a countable dense sequence in $X$, omitting zero remainders, to obtain a finite or countable orthonormal family $(e_j)$ with dense span. Use the following deterministic extraction for each bounded real sequence $(b_n)$ with $|b_n|\le C$. Start with $[-C,C]$; at each bisection retain the left closed half if it contains infinitely many terms, and otherwise the right closed half, which then contains infinitely many terms. From the $k$th retained interval select the least index larger than the preceding selected index whose term lies in that interval. The selected terms lie in nested intervals of diameters tending to zero, hence are Cauchy; [F9] gives a convergent subsequence, so the entire selected sequence converges. This rule determines the extracted indices uniquely, including when $C=0$, and can therefore be recursively applied to successive coordinates $(x_n,e_j)_X$ without dependent choice. For finitely many coordinates use the last extracted subsequence; for infinitely many take the diagonal of the nested subsequences, whose indices are strictly increasing and whose tail lies in every earlier subsequence. If the family is empty retain the original sequence. The resulting $(x_{n_k})$ has a limit $a_j=\lim_k(x_{n_k},e_j)_X$ for each coordinate present. [F9, given, construct]

1.2 Let $E$ be any separable real Hilbert space. The formula $(f,g)_{L^2(E)}=\int_0^T(f(t),g(t))_E\,dt$ is well-defined by pointwise Cauchy–Schwarz and Holder [F4], and its induced norm is the square-integral norm. To prove completeness, let $(f_n)$ be Cauchy. By [A1], choose a subsequence $(f_{n_k})$ with summable successive $L^2(E)$ distances and representatives for that countable subsequence. Put $h_k(t)=\|f_{n_{k+1}}(t)-f_{n_k}(t)\|_E$. Minkowski bounds partial-sum $L^2$ norms by the sums of the norms; monotone convergence [F4] gives $h=\sum_kh_k\in L^2(0,T)$. Its infinite-value set is null, since positive measure would force $\int h^2\ge N^2|\{h=\infty\}|$ for every $N$. Thus $f_{n_k}(t)$ converges in complete $E$ for a.e. $t$ to $f(t)$. The limit is strongly measurable: because $E$ is separable, distances to a countable dense set are measurable; first-dense-point approximants are countably valued, and finite truncations with summable exceptional-set measures converge a.e. by [F5]–[F6]. The pointwise tail estimate and Minkowski give $$\|f-f_{n_m}\|_{L^2(E)}\le\sum_{k\ge m}\|f_{n_{k+1}}-f_{n_k}\|_{L^2(E)}\to0.$$ The original Cauchy sequence then converges to $f$. This proves that $L^2(0,T;E)$ is Hilbert. [A1, F1, F4, F5, F6, given, choose]

1.3 Finite-valued simple functions are dense in $L^2(0,T;E)$: take the pointwise simple approximants from [F1], replace values by zero where their norm exceeds twice the target norm, and use dominated convergence [F4]; the squared error is at most nine times the target's squared norm. Approximate the finitely many values by a countable dense subset of $E$, and each scalar indicator by the countable dense family [F3]. Since $(0,T)$ has finite measure, these approximations produce a countable dense family of finite sums in $L^2(0,T;E)$. With [F2], this proves that both $L^2(0,T;V)$ and $L^2(0,T;V^*)$, and therefore their product, are separable Hilbert spaces. [A1, F1, F2, F3, F4, given, construct]

2.1 For each $m$, orthogonality gives $\sum_{j=1}^m a_j^2=\lim_k\sum_{j=1}^m(x_{n_k},e_j)_X^2\le C^2$. Thus $(a_j)$ is square-summable, so its partial sums form a Cauchy sequence; completeness [F8] gives the Hilbert-series limit $x=\sum_j a_j e_j$ in $X$. [F8, step 1.1, algebra]

3.1 Inner products $(x_{n_k},y)_X$ converge to $(x,y)_X$ when $y$ lies in the finite span of the $e_j$, by coordinate convergence. For arbitrary $y\in X$, approximate it by such a finite-span vector $y_m$ using the dense span from step 1.1; the uniform bound gives $|(x_{n_k}-x,y-y_m)_X|\le(C+\|x\|_X)\|y-y_m\|_X$. First choose $m$ large, then $k$ large. Therefore $x_{n_k}\rightharpoonup x$. [step 1.1, step 2.1, algebra]

4.1 The derivative graph is closed in the product: if $(u_n,g_n)\to(u,g)$ strongly in both factors, continuous embedding $V\to H$ and Cauchy–Schwarz let every scalar test identity [F1] pass to the limit. Thus the graph is a closed Hilbert subspace. It is weakly closed: a weak limit is orthogonal to the graph's orthogonal complement, so [F7] gives $(S^\perp)^\perp=S$ for that closed subspace. Apply steps 1.1–3.1 to the separable product Hilbert space. Every bounded graph sequence has a weakly convergent subsequence by that argument, and its limit remains in the graph. This proves the asserted weak subsequential compactness in $W(0,T;V)$. [F1, F2, F7, step 1.1, step 2.1, step 3.1, given] ∎
