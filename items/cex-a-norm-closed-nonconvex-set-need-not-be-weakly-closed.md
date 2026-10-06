---
id: cex-a-norm-closed-nonconvex-set-need-not-be-weakly-closed
kind: counterexample
title: "A norm-closed nonconvex set need not be weakly closed"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps: [lem-norm-closed-convex-sets-are-weakly-closed, thm-direct-method-in-a-reflexive-banach-space, cor-weak-closure-of-the-unit-sphere-is-the-closed-unit-ball, def-hilbert-space, def-square-summable-family-on-an-arbitrary-index-set, cor-ell-p-duality-by-counting-measure, def-weak-convergence-of-nets-and-sequences, def-axiom-of-choice, thm-reflexivity-of-lp-for-one-less-p-less-infinity, rem-ell-p-is-l-p-of-counting-measure]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 13.2, discussion after Lemma 13.2, printed p. 297"
    - title: "Francesco Paolo Maiale (course by Giovanni Alberti), Lecture Notes Calculus of Variations A, University of Pisa (last update 21 August 2019; complete 149-page notes)"
      url: "https://poisson.phc.dm.unipi.it/~fpmaiale/notes/CdV-A.pdf"
      locator: "Chapter 2 Section 2, compactness in Banach spaces, printed pp. 33-36"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement refuted

**Counterexample.** Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $H=\ell^2(\mathbb N,\mathbb R)$ ([[def-hilbert-space]], [[def-square-summable-family-on-an-arbitrary-index-set]]) and let $S=\{u\in H:\|u\|=1\}$ be its unit sphere. Then $S$ is norm closed and norm bounded, but it is not weakly sequentially closed: the coordinate vectors $e_j$, the families that are $1$ at $j$ and $0$ elsewhere, lie in $S$ and satisfy $e_j\rightharpoonup0\notin S$. Indeed the weak closure of $S$ is the closed unit ball ([[cor-weak-closure-of-the-unit-sphere-is-the-closed-unit-ball]]). So the convexity hypothesis in [[lem-norm-closed-convex-sets-are-weakly-closed]] cannot be dropped, and a norm-closed admissible set need not be weakly closed for [[thm-direct-method-in-a-reflexive-banach-space]].

## Facts & Assumptions

**Given:** The Axiom of Choice; the real Hilbert space $H=\ell^2(\mathbb N,\mathbb R)$ ([[def-hilbert-space]], [[def-square-summable-family-on-an-arbitrary-index-set]]), its coordinate vectors $e_j$, the families that are $1$ at $j$ and $0$ elsewhere, and its unit sphere $S=\{u\in H:\|u\|=1\}$. The counting-measure dictionary [[rem-ell-p-is-l-p-of-counting-measure]] identifies $H$ with real $L^2(\#)$, which is reflexive (and thus Banach) by [[thm-reflexivity-of-lp-for-one-less-p-less-infinity]] under Countable Choice, supplied here by AC; the series pairing is its inner product.

[F1] The unit sphere of an infinite-dimensional Hilbert space is norm closed and norm bounded; its weak closure is the closed unit ball ([[cor-weak-closure-of-the-unit-sphere-is-the-closed-unit-ball]]).

[F2] Each coordinate vector satisfies $e_j\in H$, $\|e_j\|=1$ and $e_j\rightharpoonup0$: by the duality of $\ell^p$ and $\ell^q$ every bounded linear functional on $\ell^2$ is $\Lambda(a)=\sum_ja_jb_j$ for a unique $b\in\ell^2$ ([[cor-ell-p-duality-by-counting-measure]]), so $\Lambda(e_j)=b_j$, and $b_j\to0$ because a square-summable family has small tails, that is, for every $\varepsilon>0$ there is a finite $F$ with $\sum_{j\notin F}|b_j|^2<\varepsilon$ ([[def-square-summable-family-on-an-arbitrary-index-set]]), whence $|b_j|^2<\varepsilon$ for every $j$ beyond all elements of $F$; weak convergence means convergence against every bounded linear functional ([[def-weak-convergence-of-nets-and-sequences]]). Hence the sequence $(e_j)$ lies in $S$ and converges weakly to the origin, which is not in $S$.

[F3] A norm-closed convex set is weakly closed under the Axiom of Choice ([[lem-norm-closed-convex-sets-are-weakly-closed]]); the direct method's admissibility requirement is weak sequential closedness ([[thm-direct-method-in-a-reflexive-banach-space]]).

## Counterexample

**Proof technique:** direct verification with an orthonormal sequence.

1.1 $S$ is norm closed and norm bounded. The map $u\mapsto\|u\|$ is continuous for the norm topology and $\{1\}$ is closed in $\mathbb R$, so $S$, its preimage, is norm closed; and $\|u\|=1$ for $u\in S$, so $S$ is norm bounded. [F1, algebra]

1.2 $S$ is not weakly sequentially closed. By [F2] the orthonormal sequence $(e_j)$ lies in $S$, satisfies $e_j\rightharpoonup0$, and $0\notin S$; hence a sequence in $S$ converges weakly to a point outside $S$, so $S$ is not weakly sequentially closed. [F2, algebra]

1.3 The failure is not an artefact of the sequence. By [F1] the full weak closure of $S$ is the closed unit ball, which strictly contains $S$; so $S$ is not weakly closed. This is a property of the set, independent of which witness sequence is used. [F1, algebra]

2.1 Conclusion. The set $S$ is norm closed (even bounded) but not weakly sequentially closed, so the convexity hypothesis in [F3] cannot be dropped; consequently a norm-closed nonconvex admissible set need not qualify for the direct method on the strength of norm closedness alone. [F3, step 1.2, step 1.3] ∎ 
