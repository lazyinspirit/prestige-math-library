---
id: lem-generic-symmetric-determinantal-ring-normal
kind: lemma
title: Normality of the symmetric determinantal ring
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [lem-generic-symmetric-minor-straightening]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Lakshmibai, Raghavan, Sankaran, and Shukla, Standard Monomial Bases, Moduli Spaces of Vector Bundles & Invariant Theory, §§5–6"
      url: https://www.imsc.res.in/~sankaran/Papers/0604321.pdf
      locator: "PDF pp. 25–29: normality by Serre's criterion after standard-monomial and Schubert-variety inputs."
---

## Statement

Under the hypotheses and notation of [[lem-generic-symmetric-minor-straightening]], the ring $k[z_{ij}]/I_{m+1}$ is an integrally closed domain for every $0\le m\le t$.

## Facts & Assumptions

**Given:** The standard-monomial basis requested in [[lem-generic-symmetric-minor-straightening]].

[F1] [[lem-generic-symmetric-minor-straightening]]: the standard products form a basis of the quotient by $I_{m+1}$.

## Proof

Escalated: a full normality proof must establish an explicit saturated semigroup degeneration with its normality-lifting argument, or prove both Serre conditions $R_1$ and $S_2$ from the local rank charts and straightening basis. The retrieved proof imports normality of the relevant Schubert varieties, so it does not close this local obligation.
