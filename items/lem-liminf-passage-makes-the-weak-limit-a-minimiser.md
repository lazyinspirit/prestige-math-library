---
id: lem-liminf-passage-makes-the-weak-limit-a-minimiser
kind: lemma
title: "The liminf passage makes the weak limit a minimiser"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [def-proper-coercive-and-weakly-lower-semicontinuous-functional, def-infimum, def-limsup-liminf, def-weak-convergence-of-nets-and-sequences]
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
      locator: "Chapter 2 Section 1, Theorem 2.4 and its proof, printed pp. 31-32"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $A\subseteq X$ and $I:A\to(-\infty,+\infty]$ be proper, and let $(u_j)\subseteq A$ be a minimising sequence with $u_j\rightharpoonup u\in A$ ([[def-weak-convergence-of-nets-and-sequences]]). If $I$ is weakly sequentially lower semicontinuous at $u$ ([[def-proper-coercive-and-weakly-lower-semicontinuous-functional]]), then $I(u)=\inf_AI$, so $u$ is a minimiser of $I$ on $A$.

## Facts & Assumptions

**Given:** A set $A\subseteq X$, a proper extended-real functional $I:A\to(-\infty,+\infty]$ ([[def-proper-coercive-and-weakly-lower-semicontinuous-functional]]), a minimising sequence $(u_j)\subseteq A$ with $u_j\rightharpoonup u$ and $u\in A$, and weak sequential lower semicontinuity of $I$ at $u$.

[F1] Weak sequential lower semicontinuity of $I$ at $u$ means $I(u)\le\liminf_jI(u_j)$ for every sequence $(u_j)\subseteq A$ with $u_j\rightharpoonup u$ ([[def-proper-coercive-and-weakly-lower-semicontinuous-functional]], [[def-limsup-liminf]]).

[F2] Infimum and limit inferior: $\inf_AI$ is the greatest lower bound of $I$ on $A$ in $[-\infty,+\infty]$ and $\inf_AI\le I(w)$ for every $w\in A$ ([[def-proper-coercive-and-weakly-lower-semicontinuous-functional]]).

[F3] If a sequence of extended reals converges to a limit, its limit inferior equals that limit ([[def-proper-coercive-and-weakly-lower-semicontinuous-functional]]).

## Proof

**Proof technique:** direct.

1.1 The limit inferior of the values. Since $(u_j)$ is minimising, $I(u_j)\to\inf_AI$; by [F3] therefore $\liminf_jI(u_j)=\inf_AI$. [F3, F2, given]

2.1 Lower semicontinuity. Applying [F1] to the sequence $(u_j)$, which lies in $A$ and converges weakly to $u\in A$, gives $I(u)\le\liminf_jI(u_j)=\inf_AI$. [F1, step 1.1]

2.2 The reverse inequality. Since $u\in A$, the defining property of the infimum [F2] gives $\inf_AI\le I(u)$. [F2, step 1.1]

3.1 Conclusion. If $\inf_AI=-\infty$, step 2.1 would give $I(u)\le-\infty$, impossible because $I$ takes values in $(-\infty,+\infty]$; hence under the hypotheses this case cannot occur. Otherwise $\inf_AI$ is finite, and steps 2.1 and 2.2 combine to $I(u)=\inf_AI$, so $u$ attains the infimum and is a minimiser. [step 2.1, step 2.2, given] ∎ 