---
id: thm-siegel-rationality-of-equivariant-stickelberger-special-values
kind: theorem
title: Rationality of Equivariant Artin Special Values
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 23
deps:
  - def-equivariant-stickelberger-element-at-nonpositive-integer
  - def-finite-galois-extension-and-galois-group
  - def-group-ring
  - thm-group-ring-is-a-unital-algebra-with-basis-g
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: Henri Johnston and Andreas Nickel, An Unconditional Proof of the Abelian Equivariant Iwasawa Main Conjecture and Applications
      url: https://arxiv.org/pdf/2010.03186
      locator: §2.2, printed p. 6; rationality attributed there to Siegel.
verification: {}
---

## Statement

Let $L/K$ be a finite Galois extension of number fields with group $G$, and let $S,T$ be finite disjoint sets of places of $K$ with $S$ containing every infinite place and every place ramified in $L/K$. For each $r\le0$, let $\Theta_{S,T}(r)\in\zeta(\mathbb C[G])$ be the central element whose irreducible-character coordinate at $\chi$ is the $S$-truncated Artin $L$-value at $r$ for the contragredient character, multiplied by the $T$-Euler factor. Then $\Theta_{S,T}(r)\in\zeta(\mathbb Q[G])$.

## Theorem references

[Johnston and Nickel, §2.2, citing Siegel](https://arxiv.org/pdf/2010.03186)

[[thm-group-ring-is-a-unital-algebra-with-basis-g]]

## Proof status

Johnston–Nickel invoke Siegel's rationality theorem for these special values. The rationality proof is not reconstructed in the local library, so this carrier is an escalated supplier and does not establish the theorem independently.
