---
id: lem-weak-closedness-keeps-the-direct-method-limit-admissible
kind: lemma
title: "Weak closedness keeps the direct-method limit admissible"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [def-weak-convergence-of-nets-and-sequences, lem-norm-closed-convex-sets-are-weakly-closed]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 13.2, proof of Theorem 13.1, printed p. 297"
    - title: "Francesco Paolo Maiale (course by Giovanni Alberti), Lecture Notes Calculus of Variations A, University of Pisa (last update 21 August 2019; complete 149-page notes)"
      url: "https://poisson.phc.dm.unipi.it/~fpmaiale/notes/CdV-A.pdf"
      locator: "Chapter 2 Section 1, printed pp. 31-33"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $X$ be a normed space and let $K\subseteq X$ be weakly sequentially closed ([[def-weak-convergence-of-nets-and-sequences]]). If $(u_j)\subseteq K$ and $u_j\rightharpoonup u$, then $u\in K$. In particular, under the Axiom of Choice every nonempty convex norm-closed $K$ has this property, by [[lem-norm-closed-convex-sets-are-weakly-closed]].

## Facts & Assumptions

**Given:** A normed space $X$ and a subset $K\subseteq X$ that is weakly sequentially closed: every sequence $(u_j)\subseteq K$ with $u_j\rightharpoonup u$ satisfies $u\in K$ ([[def-weak-convergence-of-nets-and-sequences]]).

[F1] A set $K$ is weakly sequentially closed when it contains the weak limit of every weakly convergent sequence contained in it; the relation $u_j\rightharpoonup u$ denotes convergence in the weak topology $\sigma(X,X^*)$ ([[def-weak-convergence-of-nets-and-sequences]]).

[F2] Under the Axiom of Choice, a convex subset of a real or complex normed space that is closed in the norm topology is closed in the weak topology $\sigma(X,X^*)$, hence weakly sequentially closed ([[lem-norm-closed-convex-sets-are-weakly-closed]]).

## Proof

**Proof technique:** direct, unpacking the definition and quoting the closed-convex lemma.

1.1 First assertion. Let $(u_j)\subseteq K$ with $u_j\rightharpoonup u$. By the definition [F1] of weak sequential closedness of $K$ recorded in the hypothesis, $u\in K$; this is exactly the first sentence of the statement. [F1, given]

2.1 Second assertion. Assume additionally that the Axiom of Choice holds and that $K$ is nonempty, convex and norm closed. By [F2] the set $K$ is weakly closed, and a weakly closed set is in particular weakly sequentially closed: if $(u_j)\subseteq K$ and $u_j\rightharpoonup u$, then $u$ lies in the weak closure of $K$, which is $K$. Hence such a $K$ satisfies the hypothesis of step 1.1 and contains every weak limit of its weakly convergent sequences. [F1, F2, step 1.1] ∎ 