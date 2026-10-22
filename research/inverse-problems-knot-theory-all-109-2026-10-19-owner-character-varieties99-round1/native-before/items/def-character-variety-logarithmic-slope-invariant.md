---
id: def-character-variety-logarithmic-slope-invariant
kind: definition
title: "Character-variety logarithmic slope"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 10
deps:
  - def-sl-two-character-variety-and-peripheral-eigenvalues
  - def-knot-a-polynomial
  - def-enhanced-a-polynomial
  - def-adjoint-twisted-homology-and-culler-shalen-data
  - def-knot-twisted-chain-complex-and-reidemeister-torsion
  - thm-knot-exterior-homology-and-longitude
justified_by:
  - def-adjoint-twisted-homology-and-culler-shalen-data
proof_strategy: not-applicable
axiom_use: "The representation, local-system, and peripheral conventions inherit the full-AC branch of their named knot-exterior suppliers."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Léo Bénard, François Florens, and Adrien Rodau, A slope invariant and the A-polynomial of knots, §3.1"
      url: "https://arxiv.org/html/2103.14151"
    - title: "Stephan Tillmann, Varieties associated to 3-manifolds, §§4.5–4.8"
      url: "https://www.maths.usyd.edu.au/u/tillmann/papers/course.pdf"
---

## Definition

Assume full AC. Let $K\subset S^3$ be a smooth oriented knot, let $\rho:\pi_1(E_K)\to SL_2(\mathbb C)$ have admissible adjoint local system, and let $v_\rho$ be a nonzero peripheral-adjoint-invariant vector for which $[v_\rho\otimes\lambda],[v_\rho\otimes\mu]$ form the specified ordered basis of $H_1(\partial E_K;\operatorname{Ad}\rho)$. If a generator of the one-dimensional kernel of inclusion is $a[v_\rho\otimes\lambda]+b[v_\rho\otimes\mu]$, the **Bénard–Florens–Rodau slope** is $s_K(\rho)=-b/a\in\mathbb C\cup\{\infty\}$, with $a=0$ interpreted as $\infty$. Rescaling $v_\rho$ or the kernel generator does not change this projective ratio. A rational function on an irreducible character component means an element of its function field, the fraction field of its coordinate domain; the slope's rational extension is not a value assigned to every singular or inadmissible character.

## Definition references

[[def-adjoint-twisted-homology-and-culler-shalen-data|Admissible adjoint homology and peripheral basis]]

[Bénard, Florens, and Rodau, §3.1](https://arxiv.org/html/2103.14151)

[Tillmann, §§4.5–4.8](https://www.maths.usyd.edu.au/u/tillmann/papers/course.pdf)
