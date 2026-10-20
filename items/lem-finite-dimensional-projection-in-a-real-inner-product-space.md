---
id: lem-finite-dimensional-projection-in-a-real-inner-product-space
kind: lemma
title: Projection onto a finite-dimensional subspace of an arbitrary real inner-product space
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-inner-product-space
  - def-orthogonal-projection
  - thm-orthogonal-projection-is-the-unique-nearest-point
  - prop-pythagorean-parallelogram-and-polarisation-identities
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., Definition 6.55 and Result 6.61'
      url: 'https://linear.axler.net/LADR4e.pdf'
      locator: 'Section 6C, printed pp. 214–218; apply the finite-dimensional nearest-point result inside span(M union {f}).'
---

## Statement

Let $E$ be a real inner-product space, let $M\subseteq E$ be a finite-dimensional subspace, and let $f\in E$. There is a unique $p\in M$ such that $f-p$ is orthogonal to every vector of $M$. This vector is the unique nearest point in $M$ to $f$, and it satisfies $\|p\|\le\|f\|$. The conclusion does not require $E$ to be complete.

## Statement references

[Sheldon Axler, *Linear Algebra Done Right*, 4th ed., Result 6.61](https://linear.axler.net/LADR4e.pdf)

## Facts & Assumptions

**Given:** A real inner-product space $E$, a finite-dimensional subspace $M\subseteq E$, and $f\in E$.

[F1] In a finite-dimensional inner-product space $V$, the orthogonal projection of a vector onto a subspace is its unique nearest point ([[thm-orthogonal-projection-is-the-unique-nearest-point]]).

[F2] In a finite-dimensional inner-product space $V$, the orthogonal projection $P_W f$ belongs to $W$ and $f-P_Wf\in W^\perp$ ([[def-orthogonal-projection]]).

[F3] If $u\perp v$, then $\|u+v\|^2=\|u\|^2+\|v\|^2$ ([[prop-pythagorean-parallelogram-and-polarisation-identities]]).

## Proof




1.1 Set $V:=\operatorname{span}(M\cup\{f\})$. Since $M$ is finite-dimensional and adjoining one vector increases dimension by at most one, $V$ is a finite-dimensional real inner-product space with the inherited inner product; $M$ is a subspace of $V$ and $f\in V$. Apply [F1] inside $V$ and set $p:=P_Mf$. [given, F1, construct]


2.1 By [F2], $p\in M$ and $f-p\in M^\perp$. [step 1.1, F2]


3.1 Since $p\in M$ and $f-p\in M^\perp$, Pythagoras [F3] gives $\|f\|^2=\|p\|^2+\|f-p\|^2\ge\|p\|^2$, so $\|p\|\le\|f\|$. If $q\in M$ also has $f-q\in M^\perp$, then for every $r\in M$, [F3] gives $\|f-r\|^2=\|f-q\|^2+\|q-r\|^2\ge\|f-q\|^2$. Thus $q$ is a nearest point to $f$, and [F1] forces $q=p$. [step 2.1, F1, F3, algebra] ∎

