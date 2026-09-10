---
id: thm-measure-preservation-on-a-generating-pi-system
kind: theorem
title: Measure preservation can be checked on a generating pi-system
deps: [def-measure-preserving-transformation-and-system, thm-measure-uniqueness-on-a-sigma-finite-pi-system]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: E–W §2.1 p.13; local sigma-finite uniqueness theorem
      url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
  scraped: []
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Let $T:X\to X$ be measurable on $(X,\mathcal A,\mu)$. Let $\mathcal P$ be a pi-system generating $\mathcal A$, with an increasing sequence $P_n\in\mathcal P$ covering $X$ and satisfying $\mu(P_n)<\infty$. If $\mu(T^{-1}P)=\mu(P)$ for every $P\in\mathcal P$, then $T$ preserves $\mu$. For finite $\mu$, a generating pi-system can be enlarged by $X$ to meet the exhaustion condition.

## Facts & Assumptions

[F1] Two measures agreeing on a generating pi-system and an increasing finite-mass exhaustion agree everywhere [[thm-measure-uniqueness-on-a-sigma-finite-pi-system]].

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Set $\nu(E)=\mu(T^{-1}E)$. Inverse images take the empty set to the empty set and disjoint countable unions to disjoint countable unions. Thus $\nu(\varnothing)=0$ and $\nu(\bigcup_j E_j)=\sum_j\nu(E_j)$ for disjoint measurable $E_j$, so $\nu$ is a measure. [given]

2.1 The measures $\nu,\mu$ agree on $\mathcal P$, and $\nu(P_n)=\mu(P_n)<\infty$ on the stated increasing exhaustion. Uniqueness therefore gives $\nu(E)=\mu(E)$ for all $E\in\mathcal A$, which is measure preservation. [F1, step 1.1]

3.1 If $\mu(X)<\infty$, adjoining $X$ keeps the family a generating pi-system; its preservation identity holds since $T^{-1}X=X$. The constant exhaustion $P_n=X$ then satisfies every required hypothesis. [step 2.1, given] ∎
