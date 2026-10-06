---
id: lem-finite-atomic-sums-are-dense-in-hone
kind: lemma
title: "Finite atomic sums are dense in H1"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 9
deps: [thm-atomic-characterisation-of-real-hp, lem-ellp-sums-of-hp-atoms-converge-in-tempered-distributions, def-hp-atom-with-moment-order, def-real-hardy-space-by-a-radial-maximal-function]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Proposition 7.36 and the density statement in Definition 7.39(1) ('$H^1_0\\subset H^1$ is the dense subset of finite linear combinations of atoms'), printed pp. 41 and 47"
---

## Statement

Assume Countable Choice. The finite linear combinations of $H^1$ atoms are
dense in $H^1(\mathbb R^n)$: for every $f\in H^1(\mathbb R^n)$ and every
$\varepsilon>0$ there are finitely many atoms $a_1,\dots,a_N$ and coefficients
$\lambda_1,\dots,\lambda_N$ with
$\bigl\|f-\sum_{1\le j\le N}\lambda_ja_j\bigr\|_{H^1}<\varepsilon$.

## Facts & Assumptions

**Given:** Countable Choice, $f\in H^1(\mathbb R^n)$ and $\varepsilon>0$, with the $(1,\infty,0)$-atoms of [[def-hp-atom-with-moment-order]] and the $H^1$ functional of [[def-real-hardy-space-by-a-radial-maximal-function]].

[F1] The atomic characterisation of $H^1$ gives a sequence $(\lambda_j)\in\ell^1$ and $(1,\infty,0)$-atoms $a_j$, reindexed by $j\ge1$, with $f=\sum_j\lambda_ja_j$ converging in $\mathcal S'$, with $\sum_j|\lambda_j|\le C\|f\|_{H^1}$ for a suitable constant; moreover every such series converges also in the $H^1$ quasi-norm, which for $p=1$ is the norm $\|\cdot\|_{H^1}$ ([[thm-atomic-characterisation-of-real-hp]], [[def-real-hardy-space-by-a-radial-maximal-function]]).

[F2] For an $\ell^1$ sum of atoms indexed by $j\ge1$, the partial sums converge to the sum in the $H^1$ quasi-norm and the tail bound $\bigl\|g-\sum_{1\le j\le N}\lambda_ja_j\bigr\|_{H^1}\le C(\sum_{j>N}|\lambda_j|)$ holds ([[lem-ellp-sums-of-hp-atoms-converge-in-tempered-distributions]] with $p=1$).

## Proof

**Proof technique:** direct.

1.1 By [F1] fix $\ell^1$-coefficients $(\lambda_j)$ and atoms $(a_j)$, indexing both sequences by $j\ge1$, with $f=\sum_j\lambda_ja_j$ converging in $\mathcal S'$ and with $\sum_j|\lambda_j|\le C\|f\|_{H^1}$; by the same item the partial sums $S_N:=\sum_{1\le j\le N}\lambda_ja_j$ converge to $f$ in the $H^1$ norm. [F1]

2.1 Since $\|f-S_N\|_{H^1}\to0$ as $N\to\infty$ by step 1.1 and $\varepsilon>0$, there is $N\ge1$ with $\|f-S_N\|_{H^1}<\varepsilon$; the sum $S_N$ is a finite linear combination of the atoms $a_1,\dots,a_N$ with coefficients $\lambda_1,\dots,\lambda_N$, and [F2] gives the same conclusion with the explicit tail bound. [step 1.1, F2]

3.1 Thus for every $f\in H^1(\mathbb R^n)$ and every $\varepsilon>0$ there is a finite atomic sum within $\varepsilon$ in the $H^1$ norm, which is density. Countable Choice is inherited from the atomic characterisation. [step 2.1] ∎ 