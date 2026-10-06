---
id: cor-index-one-trajectory-moduli-spaces-are-finite
kind: corollary
title: "Index-one trajectory moduli spaces are finite"
status: draft
origin: pipeline
deps: [def-axiom-of-choice, cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points, thm-choice-implies-dependent-implies-countable-choice, prop-index-one-trajectory-spaces-are-zero-dimensional, thm-unparametrized-trajectory-space-is-a-smooth-manifold, thm-morse-trajectory-compactness-up-to-breaking, lem-breaking-length-is-bounded-by-index-drop, def-broken-morse-trajectory, def-geometric-convergence-to-a-broken-morse-trajectory, thm-topological-manifolds-are-metrizable-and-paracompact, thm-metric-compactness-equivalences, def-compact-space, def-metrizable-space, def-countable-choice, def-dependent-choice, def-unparametrized-morse-trajectory-moduli-space, def-morse-smale-pair]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology, Part I Ch. 3, complete author PDF"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 3 Corollary 3.2.4, printed p. 62 (finiteness for index drop one)"
    - title: "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes), Lectures 17-19, complete combined PDF"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
      locator: "Lecture 19 Sec. 6.1 (finiteness of the zero-dimensional moduli space)"
    - title: "Alberto Abbondandolo and Pietro Majer, Lectures on the Morse Complex for Infinite-Dimensional Manifolds, complete PDF"
      url: "https://people.dm.unipi.it/abbondandolo/preprints/montreal.pdf"
      locator: "Sec. 2.8, printed pp. 69-70 (Wu(x) considered with index drop one is compact, hence finite)"
dependency_level: 4
---

## Statement

Assume the Axiom of Choice. Let $(f,X)$ be Morse--Smale on a closed manifold and let $\lambda(p)-\lambda(q)=1$. Then the unparametrized moduli space $\mathcal M(p,q)$ is a finite set, and the coefficients of the Morse differentials of this page are finite sums.

## Facts & Assumptions

**Given:** The Axiom of Choice, a Morse--Smale pair $(f,X)$ on a closed manifold, and critical points $p,q$ with $\lambda(p)-\lambda(q)=1$.

[A1] The Axiom of Choice ([[def-axiom-of-choice]]).

[F1] Under these hypotheses $\mathcal M(p,q)$ is a discrete smooth manifold of dimension $\lambda(p)-\lambda(q)-1=0$ ([[prop-index-one-trajectory-spaces-are-zero-dimensional]], [[thm-unparametrized-trajectory-space-is-a-smooth-manifold]], [[def-unparametrized-morse-trajectory-moduli-space]]).

[F2] Every sequence in $\mathcal M(p,q)$ has a subsequence converging geometrically to a broken trajectory with at most $\lambda(p)-\lambda(q)=1$ components ([[thm-morse-trajectory-compactness-up-to-breaking]], [[lem-breaking-length-is-bounded-by-index-drop]], [[def-broken-morse-trajectory]], [[def-geometric-convergence-to-a-broken-morse-trajectory]]).

[F3] Under the choice principles carried by the cited results, every topological manifold is metrizable, and for metric spaces sequential compactness is equivalent to compactness; $\mathrm{AC}$ implies $\mathrm{AC}_\omega$ and $\mathrm{DC}$ through the bridge ([[thm-topological-manifolds-are-metrizable-and-paracompact]], [[thm-metric-compactness-equivalences]], [[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]], [[def-dependent-choice]], [[def-metrizable-space]], [A1]).

[F4] A discrete topological space is compact exactly when it is finite: the singletons form an open cover, and a finite subcover exhibits the space as a finite set ([[def-compact-space]]).

[F5] A Morse function on a closed manifold has finitely many critical points, so only finitely many index classes occur ([[cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points]]).

## Proof

**Proof technique:** direct.

1.1 Let $(v_n)$ be a sequence in $\mathcal M(p,q)$. By [F2] a subsequence converges geometrically to a broken trajectory whose number of components is at most $1$; a broken trajectory has length at least one, so the limit is an ordinary trajectory, that is, an element of $\mathcal M(p,q)$. Hence every sequence in $\mathcal M(p,q)$ has a convergent subsequence: the space is sequentially compact. [A1, F2, given]

2.1 By [F1] the space $\mathcal M(p,q)$ is a topological manifold, hence metrizable by [F3]; for metrizable spaces sequential compactness is equivalent to compactness, so step 1.1 makes $\mathcal M(p,q)$ compact. This is where the choice principles enter: [A1] supplies the full AC assumed by the metrization result, and $\mathrm{DC}$ and $\mathrm{AC}_\omega$ assumed by the metric compactness equivalence in [F3]. [A1, F1, F3, step 1.1]

3.1 By [F1] the compact space $\mathcal M(p,q)$ is discrete, so by [F4] it is finite. For the second clause: whenever a differential on this page is defined by counting trajectories between critical points of Morse index drop one, each of its coefficients is the cardinality (modulo two) or the signed count of a space of the form $\mathcal M(p,q)$ with $\lambda(p)-\lambda(q)=1$, and each such space is finite by the first clause; the sums defining the differential therefore have only finitely many nonzero terms, and the total number of coefficients is finite because the critical set of a Morse function on a closed manifold is finite by [F5]. [F1, F4, F5, step 2.1] ∎
