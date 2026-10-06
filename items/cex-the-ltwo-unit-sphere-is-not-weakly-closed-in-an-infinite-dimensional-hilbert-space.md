---
id: "cex-the-ltwo-unit-sphere-is-not-weakly-closed-in-an-infinite-dimensional-hilbert-space"
kind: "counterexample"
title: "The L^2 unit sphere is not weakly sequentially closed in infinite dimensions"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 3
deps:
  - "cor-finite-dimensional-subspaces-are-closed"
  - "cor-weak-closure-of-the-unit-sphere-is-the-closed-unit-ball"
  - "def-axiom-of-choice"
  - "def-countable-choice"
  - "def-hilbert-space"
  - "def-linear-basis"
  - "def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis"
  - "def-weak-convergence-of-nets-and-sequences"
  - "lem-reverse-triangle-inequality-in-a-normed-space"
  - "lem-strong-ltwo-compactness-preserves-unit-normalisation"
  - "thm-bessel-inequality-for-an-arbitrary-orthonormal-family"
  - "thm-choice-implies-dependent-implies-countable-choice"
  - "thm-continuity-characterisations-top"
  - "thm-existence-of-a-maximal-orthonormal-family"
  - "thm-hahn-banach-dominated-extension"
  - "thm-riesz-representation-for-hilbert-space"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 13 Section 13.3 Constraints, printed p. 302 (the unit sphere is not weakly closed; its weak closure is the unit ball), developed in Lemma 13.5 and Theorem 13.6"
---

## Statement refuted

**Refuted:** that the unit sphere $S=\{u\in H:\|u\|=1\}$ of an infinite-dimensional real Hilbert space $H$ is weakly sequentially closed — equivalently, that norm closedness and norm boundedness of a subset of a Hilbert space force weak sequential closedness ([[def-weak-convergence-of-nets-and-sequences]]).

Assume the Axiom of Choice ([[def-axiom-of-choice]]). The witness works in every infinite-dimensional real Hilbert space, for instance $H=\ell^2(\mathbb N;\mathbb R)$ ([[def-hilbert-space]]). There $S$ is norm closed and norm bounded, yet an orthonormal sequence $(e_j)\subseteq S$ satisfies $e_j\rightharpoonup0$ while $0\notin S$, so $S$ is not weakly sequentially closed. In particular the direct method for minimisation cannot be applied to the unit sphere by weak closedness alone; the repair used for the eigenvalue problems below is the strong $L^2$ compactness of [[lem-strong-ltwo-compactness-preserves-unit-normalisation]]. By [[cor-weak-closure-of-the-unit-sphere-is-the-closed-unit-ball]] (which assumes the Hahn–Banach extension principle, available under our Axiom of Choice hypothesis through [[thm-hahn-banach-dominated-extension]]) the weak closure of $S$ is exactly the closed unit ball of $H$.

## Facts & Assumptions

**Given:** An infinite-dimensional real Hilbert space $H$ (assumed to admit no ordered basis of finite length), with the Axiom of Choice available.

[A1] [[def-axiom-of-choice]], [[def-countable-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]: the Axiom of Choice implies Countable Choice, so the countable-selection and maximal-family suppliers below apply.

[F1] [[thm-existence-of-a-maximal-orthonormal-family]]: $H$ contains an orthonormal set maximal under inclusion, and an orthonormal set is maximal exactly when it is complete, that is, when its closed linear span is $H$ ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[F2] [[cor-finite-dimensional-subspaces-are-closed]], [[def-linear-basis]]: the linear span of a finite set is finite dimensional and closed in $H$, so if a complete orthonormal set were finite, its span would already be the closed linear span and $H$ would admit an ordered basis of finite length.

[F3] The infinite set $B$ admits a sequence of distinct elements under the Axiom of Choice; the finite-tuple recursion establishing this fact is given in step 3.1.

[F4] [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]: a subset of an orthonormal family is orthonormal; in particular $\|e_j\|=1$ and $\langle e_i,e_j\rangle=0$ for $i\ne j$.

[F5] [[thm-bessel-inequality-for-an-arbitrary-orthonormal-family]]: for every $y\in H$ the family $(|\langle y,e_j\rangle|^2)_j$ has finite sum $\sum_j|\langle y,e_j\rangle|^2\le\|y\|^2$.

[F6] [[thm-riesz-representation-for-hilbert-space]]: every bounded linear functional $f$ on $H$ has the form $f(x)=\langle x,y_f\rangle$ for a unique $y_f\in H$.

[F7] [[def-weak-convergence-of-nets-and-sequences]]: $e_j\rightharpoonup0$ means $f(e_j)\to0$ for every bounded linear functional $f$.

[F8] [[lem-reverse-triangle-inequality-in-a-normed-space]], [[thm-continuity-characterisations-top]]: $\bigl|\|x\|-\|y\|\bigr|\le\|x-y\|$, so the norm is continuous and preimages of closed sets under it are closed.

## Counterexample

**Proof technique:** direct.

**Given:** An infinite-dimensional real Hilbert space $H$ and the unit sphere $S=\{u\in H:\|u\|=1\}$.

1.1 By [F1] choose a maximal, equivalently complete, orthonormal set $B\subseteq H$. [A1, F1]

2.1 The set $B$ is infinite: were $B$ finite, its linear span would be finite dimensional and closed by [F2], and completeness would force it to equal the closed linear span of $B$, namely $H$; then $H$ would admit an ordered basis of finite length, contrary to the hypothesis. [step 1.1, F1, F2]

3.1 Let $\mathcal T$ be the nonempty set of all finite tuples of distinct elements of $B$, including the empty tuple. Every tuple has an extension by one new element because its range is finite and $B$ is infinite. The Axiom of Choice in [A1] selects one such extension for each tuple in $\mathcal T$. Starting with the empty tuple, iterate this fixed extension function recursively over $\mathbb N$; the successive appended elements give distinct $e_j\in B$. This proves [F3] locally. By [F4], $(e_j)$ is orthonormal, so $\|e_j\|=1$ and $e_j\in S$ for every $j$. [step 2.1, A1, F3, F4]

4.1 We claim $e_j\rightharpoonup0$. Fix $y\in H$; by Bessel's inequality [F5] the series $\sum_j|\langle e_j,y\rangle|^2$ has finite sum, so its terms tend to $0$, that is $\langle e_j,y\rangle\to0$. Given a bounded linear functional $f$, write $f(x)=\langle x,y_f\rangle$ by [F6]; then $f(e_j)=\langle e_j,y_f\rangle\to0$, which by the definition of weak convergence [F7] is exactly $e_j\rightharpoonup0$. [step 3.1, F5, F6, F7]

5.1 The set $S$ is norm closed, because $S$ is the preimage of the closed singleton $\{1\}$ under the continuous norm [F8], and it is norm bounded because $\|u\|=1$ for every $u\in S$. Since $e_j\in S$ for every $j$ by step 3.1 while $0\notin S$ because $\|0\|=0\ne1$, and $e_j\rightharpoonup0$ by step 4.1, the sphere $S$ is not weakly sequentially closed; the refuted claim is therefore false. [step 3.1, step 4.1, F8, F4] ∎

## Remarks

- The weak closure is much larger than $S$: by [[cor-weak-closure-of-the-unit-sphere-is-the-closed-unit-ball]] it is the closed unit ball $B=\{u:\|u\|\le1\}$, which contains $0$ and every point of the open unit ball. The maximal orthonormal family used above exists in every Hilbert space under the Axiom of Choice; on the concrete space $\ell^2(\mathbb N;\mathbb R)$ the standard basis itself is the orthonormal sequence ([[ex-standard-basis-of-ell-two]]), and no maximal-family argument is needed.

- **Why compactness replaces closedness.** A bounded sequence in an infinite-dimensional Hilbert space need not have a strongly convergent subsequence, but [[lem-strong-ltwo-compactness-preserves-unit-normalisation]] shows that weak $H^1_0$ convergence plus Rellich compactness nevertheless preserves the $L^2$ normalisation along a subsequence, which is the substitute used in the eigenvalue problems of this page.
