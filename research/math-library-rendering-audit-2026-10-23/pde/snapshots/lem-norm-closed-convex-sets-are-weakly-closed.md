---
id: lem-norm-closed-convex-sets-are-weakly-closed
kind: lemma
title: "A norm-closed convex set is weakly sequentially closed"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [thm-strong-separation-of-closed-and-compact-convex-sets, def-weak-topology-on-a-normed-space, def-weak-convergence-of-nets-and-sequences, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 13.2, Lemma 13.2 and its proof, printed p. 297"
    - title: "Francesco Paolo Maiale (course by Giovanni Alberti), Lecture Notes Calculus of Variations A, University of Pisa (last update 21 August 2019; complete 149-page notes)"
      url: "https://poisson.phc.dm.unipi.it/~fpmaiale/notes/CdV-A.pdf"
      locator: "Chapter 2 Section 4, Lemma 2.41, printed p. 43"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice. Let $X$ be a real or complex normed space and let $K\subseteq X$ be convex and closed in the norm topology. Then $K$ is closed in the weak topology $\sigma(X,X^*)$ ([[def-weak-topology-on-a-normed-space]]); in particular $K$ is weakly sequentially closed: if $(u_j)\subseteq K$ and $u_j\rightharpoonup u$ ([[def-weak-convergence-of-nets-and-sequences]]), then $u\in K$.

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]); a real or complex normed space $X$ with dual $X^*$; a convex set $K\subseteq X$ that is closed in the norm topology. The weak topology is $\sigma(X,X^*)$ ([[def-weak-topology-on-a-normed-space]]) and weak sequential convergence is as in [[def-weak-convergence-of-nets-and-sequences]].

[F1] Under the Axiom of Choice, two disjoint nonempty convex sets $C,K\subseteq X$, with $C$ closed and $K$ compact, are strongly separated by a nonzero functional in $X^*$ ([[thm-strong-separation-of-closed-and-compact-convex-sets]]): there are $f\in X^*$, $f\ne0$, and a positive gap $\sup_C\operatorname{Re}f<\inf_K\operatorname{Re}f$.

[F2] The weak topology is the initial topology of the maps $f:X\to\mathbb K$, $f\in X^*$, hence every set $\{y\in X:\operatorname{Re}f(y)>\alpha\}$ with $f\in X^*$ and $\alpha\in\mathbb R$ is weakly open, and a subset of $X$ is weakly closed exactly when its complement is weakly open ([[def-weak-topology-on-a-normed-space]]).

[F3] A sequence $u_j\rightharpoonup u$ converges weakly in the sense of convergence in $\sigma(X,X^*)$; a weakly closed set contains the limit of every weakly convergent sequence contained in it ([[def-weak-convergence-of-nets-and-sequences]]).

## Proof

**Proof technique:** direct, by separating an exterior point from $K$ with a weak half-space.

1.1 Trivial case and set-up. If $K=\varnothing$ then $K$ is closed in every topology, so both assertions hold; assume henceforth $K\ne\varnothing$ and fix a point $x\in X\setminus K$. [given, algebra]

2.1 Strong separation of $K$ and the singleton $\{x\}$. The sets $K$ and $\{x\}$ are nonempty and convex, $K$ is closed in the norm topology and $\{x\}$ is compact; they are disjoint because $x\notin K$. By [F1], applied here, there are $f\in X^*$, $f\ne0$, and a real number $\alpha$ with $\sup_K\operatorname{Re}f\le\alpha<\operatorname{Re}f(x)$, the gap being the one supplied by the theorem. [F1, step 1.1]

3.1 A weak neighbourhood of $x$ missing $K$. Put $U:=\{y\in X:\operatorname{Re}f(y)>\alpha\}$. By [F2] the set $U$ is open in $\sigma(X,X^*)$; it contains $x$ because $\operatorname{Re}f(x)>\alpha$, and it is disjoint from $K$ because every $y\in K$ satisfies $\operatorname{Re}f(y)\le\sup_K\operatorname{Re}f\le\alpha$. [F2, step 2.1]

4.1 $K$ is weakly closed. Since $x\in X\setminus K$ was arbitrary and step 3.1 produces for it a weak neighbourhood $U\subseteq X\setminus K$, the complement $X\setminus K$ is weakly open; equivalently $K$ is closed in the weak topology $\sigma(X,X^*)$. [step 3.1, F2]

5.1 Weak sequential closedness. Let $(u_j)\subseteq K$ with $u_j\rightharpoonup u$. By [F3] the convergence is convergence in $\sigma(X,X^*)$, and a set closed in a topology contains the limit of every convergent sequence in it; hence $u\in K$. [F3, step 4.1] ∎ 