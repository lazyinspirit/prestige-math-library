---
id: thm-johnston-nickel-etnc-class-is-torsion
kind: theorem
title: Torsion of the Negative-Tate ETNC Class
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-relative-k-group-and-etnc-for-a-tate-motive
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: Henri Johnston and Andreas Nickel, An Unconditional Proof of the Abelian Equivariant Iwasawa Main Conjecture and Applications
      url: https://arxiv.org/pdf/2010.03186
      locator: Theorem 12.3(i) and proof, printed p. 35.
verification: {}
---

## Statement

Let $p$ be an odd prime, let $L/K$ be a finite Galois CM extension of number fields with group $G$, and let $r<0$. The relative ETNC class $T\Omega(L/K,e_r\mathbb Z[1/2][G],r)$ lies in the torsion subgroup of $K_0(e_r\mathbb Z[1/2][G],\mathbb Q[G])$, where $e_r=(1-(-1)^rj)/2$ and $j$ is complex conjugation.

## Theorem references

[Johnston and Nickel, Theorem 12.3(i)](https://arxiv.org/pdf/2010.03186)

## Proof status

The source deduces this claim by an induction argument from the conditional $\mu=0$ ETNC theorem, citing Nickel, Proposition 6.1(iii), and notes a parity qualification for odd $r$. That induction proof and its local prerequisites are not reconstructed here.
