---
id: lem-generic-pfaffian-ring-normal
kind: lemma
title: Normality of the Pfaffian rank ring
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [lem-generic-pfaffian-straightening]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Linshaw and Song, Standard Monomials and Invariant Theory of Arc Spaces II: Symplectic Group, §1"
      url: https://jag.math.tsinghua.edu.cn/1487/JAG1487.pdf
      locator: "PDF pp. 1–2: the standard basis of Pfaffian coordinate rings, with prior-theorem attribution."
    - title: "Goodman, Multiplicity-Free Spaces and Schur-Weyl-Howe Duality, §6.5"
      url: https://sites.math.rutgers.edu/~goodman/pub/webnuslect.pdf
      locator: "PDF p. 19: Pfaffian rank ideal and its quotient; the straightening and normality proofs are imported."
---

## Statement

Under the hypotheses and notation of [[lem-generic-pfaffian-straightening]], the ring $k[a_{ij}:i<j]/J_{m+2}$ is an integrally closed domain for every even $m$ with $0\le m\le t$.

## Facts & Assumptions

**Given:** The standard-Pfaffian basis requested in [[lem-generic-pfaffian-straightening]].

[F1] [[lem-generic-pfaffian-straightening]]: the ordered standard Pfaffian products form a basis modulo $J_{m+2}$.

## Proof

Escalated: no complete local proof of normality has been supplied. The proposed route is a saturated semigroup degeneration derived from Pfaffian straightening, or a rank-chart proof establishing both $R_1$ and $S_2$; the accessible theorem statements alone do not supply either route.
