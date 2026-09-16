---
id: thm-double-orthogonal-complement-is-closure
kind: theorem
title: The double orthogonal complement of a subspace is its closure
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-orthogonal-decomposition-by-a-closed-subspace, lem-orthogonal-complement-is-closed, def-orthogonality-and-orthogonal-complement, def-linear-subspace, thm-metric-closure-characterisation, lem-vector-operations-are-continuous-in-a-normed-space, def-metric-convergence, def-countable-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, Lemma 5.37, p.238"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis, Theorem 181"
      url: "https://live.ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
---

## Statement

Assume the Axiom of Countable Choice. Let $M$ be a linear subspace of a real or complex Hilbert space $H$. Then

$$M^{\perp\perp}=\overline{M},$$

where $\overline M$ is the norm closure of $M$ and $M^{\perp\perp}=(M^\perp)^\perp$.

## Facts & Assumptions

[A1] $S^\perp$ is a linear subspace, $S\subseteq S^{\perp\perp}$, and $S\subseteq T$ implies $T^\perp\subseteq S^\perp$ ([[def-orthogonality-and-orthogonal-complement]]).

[A2] $S^\perp$ is closed for every subset $S$, and the closure of a set is the smallest closed superset, so $\overline M$ is contained in every closed set containing $M$; a closed set contains the limits of its convergent sequences ([[lem-orthogonal-complement-is-closed]], [[thm-metric-closure-characterisation]]).

[A3] $M^{\perp\perp}$ is a linear subspace and $M^{\perp\perp}\cap M^\perp=\{0\}$ ([[def-orthogonality-and-orthogonal-complement]]).

[A4] Addition and scalar multiplication are continuous for the norm topology, and convergence means that distances to the limit tend to zero ([[lem-vector-operations-are-continuous-in-a-normed-space]], [[def-metric-convergence]]).

[A5] Every closed linear subspace of $H$ splits $H$ as $H=N\oplus N^\perp$ ([[thm-orthogonal-decomposition-by-a-closed-subspace]]).

[A6] Countable Choice is the hypothesis under which the decomposition is available ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, a Hilbert space $H$ and a linear subspace $M\subseteq H$.

1.1 Every $m\in M$ is orthogonal to every element of $M^\perp$, so $M\subseteq M^{\perp\perp}$; since $M^{\perp\perp}$ is closed by [A2], and $\overline M$ is the smallest closed superset of $M$, we get $\overline M\subseteq M^{\perp\perp}$. [A1, A2, A6]

1.2 The closure $N=\overline M$ is a linear subspace: it contains $0\in M$; if $u,v\in N$ choose sequences $u_n,v_n\in M$ with $u_n\to u$ and $v_n\to v$, then $u_n+v_n\in M$ converges to $u+v$ by continuity of addition, so $u+v\in N$; and $au\in N$ for every scalar $a$ by continuity of scalar multiplication. [A2, A4]

2.1 Let $x\in M^{\perp\perp}$ and decompose $x=n+z$ with $n\in N$ and $z\in N^\perp$; then $z=x-n$ lies in $M^{\perp\perp}$ because both $x$ and $n\in N\subseteq M^{\perp\perp}$ do, while $z\in N^\perp\subseteq M^\perp$ because $M\subseteq N$; hence $z\in M^\perp\cap M^{\perp\perp}=\{0\}$, so $z=0$ and $x=n\in\overline M$. [step 1.1, step 1.2, A1, A3, A5]

3.1 Therefore $M^{\perp\perp}\subseteq\overline M$ by step 2.1, and the reverse inclusion is step 1.1, so $M^{\perp\perp}=\overline M$ for every linear subspace $M$. [step 1.1, step 2.1] ∎
