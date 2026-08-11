---
id: cor-elementary-matrices-are-invertible
kind: corollary
title: "Every elementary matrix is invertible, with inverse given by the reverse elementary operation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-elementary-row-operations-are-reversible, thm-elementary-row-operations-are-left-multiplication, def-invertible-matrix-and-general-linear-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "J. Hefferon, Linear Algebra, 4th ed., Ch. Three, §IV.3"
      url: "https://jheffero.w3.uvm.edu/linearalgebra/book.pdf"
pipeline_run: null
---

## Statement

Every elementary matrix $E\in M_n(F)$ is invertible. Its inverse is the elementary matrix belonging to the inverse row operation.

## Facts & Assumptions

**Given:** An elementary matrix $E$ corresponding to a row operation $\rho$.

[L1] The operation $\rho$ has an elementary inverse $\rho^{-1}$ ([[lem-elementary-row-operations-are-reversible]]).

[L2] Applying an elementary row operation is left multiplication by its elementary matrix ([[thm-elementary-row-operations-are-left-multiplication]]).

[L3] A square matrix is invertible when it has a two-sided inverse ([[def-invertible-matrix-and-general-linear-group]]).

## Proof

**Proof technique:** direct.

1.1 Let $E'$ be the elementary matrix of $\rho^{-1}$. Applying $\rho$ and then $\rho^{-1}$ to $I_n$ gives $E'E=I_n$, while applying them in the reverse order gives $EE'=I_n$. [L1, L2]

2.1 Thus $E'$ is a two-sided inverse of $E$, so $E$ is invertible and $E^{-1}=E'$. [step 1.1, L3] ∎

