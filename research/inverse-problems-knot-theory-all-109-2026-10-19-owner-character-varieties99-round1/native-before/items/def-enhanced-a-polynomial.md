---
id: def-enhanced-a-polynomial
kind: definition
title: "The enhanced A-polynomial"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 9
deps:
  - def-knot-a-polynomial
justified_by:
  - def-knot-a-polynomial
proof_strategy: not-applicable
axiom_use: "Inherits the full-AC branch of the ordinary A-polynomial definition; removing the reducible component is choice-free."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "John A. Baldwin and Steven Sivek, Torus knots, the A-polynomial, and SL(2,C), §2.3"
      url: "https://arxiv.org/html/2405.19197v2"
    - title: "Yi Ni and Xingru Zhang, Characterizing slopes for torus knots, §2"
      url: "https://arxiv.org/abs/1712.04012"
---

## Definition

Assume full AC and let $K\subset S^3$ be a smooth oriented knot. The **enhanced A-polynomial** $\widetilde A_K(M,L)$ is the primitive square-free Laurent polynomial defining the union of one-dimensional peripheral-eigenvalue image components arising from irreducible characters of $\pi_1(E_K)$. It is defined up to multiplication by $\pm M^aL^b$. The ordinary A-polynomial is the least common multiple $A_K=\operatorname{lcm}(\widetilde A_K,L-1)$, up to a Laurent unit, where the least common multiple uses each distinct irreducible Laurent factor only once; the factor $L-1$ is the contribution of the abelian character component, and an irreducible component may also contribute that same factor.

## Definition references

[[def-knot-a-polynomial|The ordinary A-polynomial and its abelian component]]

[Baldwin and Sivek, §2.3](https://arxiv.org/html/2405.19197v2)

[Ni and Zhang, §2](https://arxiv.org/abs/1712.04012"
