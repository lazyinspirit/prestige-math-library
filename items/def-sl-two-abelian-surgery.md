---
id: def-sl-two-abelian-surgery
kind: definition
title: SL2(C)-abelian surgery
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - thm-knot-wirtinger-presentation-correctness
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
  - thm-knot-exterior-homology-and-longitude
  - def-oriented-slope-and-knot-dehn-filling
justified_by: []
proof_strategy: not-applicable
axiom_use: The meridian-longitude basis uses the full-AC exterior-homology
  supplier; the representation and quotient definitions are choice-free.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: John A. Baldwin and Steven Sivek, Torus knots, the A-polynomial, and
        SL(2,C), §§1 and 2.2
      url: https://arxiv.org/pdf/2405.19197v2
    - title: Steven Sivek and Raphael Zentner, SU(2)-cyclic surgeries and the
        pillowcase, §1
      url: https://arxiv.org/pdf/2103.12651v2
---

## Definition

Assume full AC. Let $K\subset S^3$ be a smooth oriented knot, let $p,q\in\mathbb Z$ be coprime and not both zero, and let $E_K(p/q)$ be the Dehn filling whose attached solid-torus meridian is identified with $p[\mu]+q[\lambda]$. A closed 3-manifold $Y$ is **$SL_2(\mathbb C)$-abelian** if every homomorphism $\pi_1(Y)\to SL_2(\mathbb C)$ has abelian image. The slope $p/q$ is an **$SL_2(\mathbb C)$-abelian surgery slope** for $K$ if $E_K(p/q)$ is $SL_2(\mathbb C)$-abelian. The knot admits infinitely many such surgeries if infinitely many distinct rational slopes have this property.

## Definition references

[[def-oriented-slope-and-knot-dehn-filling|The primitive slope and filling convention]]

[Baldwin and Sivek, §§1 and 2.2](https://arxiv.org/pdf/2405.19197v2)

[Sivek and Zentner, §1](https://arxiv.org/pdf/2103.12651v2)
