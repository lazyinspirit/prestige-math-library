---
id: thm-johnston-nickel-grw-etnc-induction-reduction
kind: theorem
title: Finite-Group Induction Reduction for the Negative-Tate ETNC
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 25
deps:
  - thm-johnston-nickel-etnc-class-is-torsion
  - thm-johnston-nickel-etnc-p-part-fitting-criterion
  - def-relative-k-group-and-etnc-for-a-tate-motive
  - def-elementary-one-dimensional-p-adic-lie-groups
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: Henri Johnston and Andreas Nickel, An Unconditional Proof of the Abelian Equivariant Iwasawa Main Conjecture and Applications
      url: https://arxiv.org/pdf/2010.03186
      locator: Theorem 12.4 proof, printed p. 36, citing Gruenberg–Ritter–Weiss, Proposition 9.
verification: {}
---

## Statement

Let $L/K$ be a finite Galois CM extension with group $G$, let $p$ be odd, and let $r<0$. Assume the $p$-part of its relative ETNC class is torsion. The induction step used by Johnston and Nickel says it suffices to verify vanishing on the certain $p$-elementary Galois subextensions selected by the induction, whose groups have the form $C_m\times P$ with $C_m$ cyclic of order prime to $p$ and $P$ a $p$-group. If a Sylow $p$-subgroup of $G$ is abelian, then the selected test groups are abelian and the source reduces the claim to its finite abelian CM cases.

## Theorem references

[Johnston and Nickel, proof of Theorem 12.4](https://arxiv.org/pdf/2010.03186)

[[def-elementary-one-dimensional-p-adic-lie-groups]]

[Gruenberg, Ritter, and Weiss, Proposition 9](https://doi.org/10.1112/S0024611599011922)

## Proof status

Johnston–Nickel §7.3 states this reduction and explains the torsion hypothesis and the $p$-elementary tests. The underlying descent relies on Gruenberg–Ritter–Weiss, Proposition 9, and has not been reconstructed locally; this carrier records the source interface and is escalated.
