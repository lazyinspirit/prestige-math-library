---
id: lem-knot-a-polynomial-boundary-elimination
kind: lemma
title: "Boundary eigenvalue curve elimination for the A-polynomial"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 10
deps:
  - def-knot-a-polynomial
  - lem-sl-two-character-trace-coordinate-model
  - lem-laurent-algebraic-curve-has-principal-equation
  - lem-knot-boundary-eigenvalue-locus-defined-over-q
  - thm-boundary-restriction-character-variety-elimination
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "D. Cooper, M. Culler, H. Gillet, D. D. Long, and P. B. Shalen, Plane curves associated to character varieties of 3-manifolds, §§2–3"
      url: "https://homepages.math.uic.edu/~culler/papers/PlaneCurves/curves.pdf"
    - title: "Stephan Tillmann, Varieties associated to 3-manifolds, §7"
      url: "https://www.maths.usyd.edu.au/u/tillmann/papers/course.pdf"
---

## Statement

Assume full AC and let $K\subset S^3$ be a smooth oriented knot. The restriction of representations of $\pi_1(E_K)$ to the peripheral torus gives an algebraic eigenvalue locus in $(\mathbb C^*)^2$. Its one-dimensional reduced image components are exactly the curve components used in $A_K(M,L)$; isolated image points contribute no curve factor. Eliminating the representation and trace coordinates from the finite presentation equations yields the Laurent ideal of that curve union, whose square-free primitive generator is $A_K$ up to $\pm M^aL^b$.

## Statement references

[Cooper, Culler, Gillet, Long, and Shalen, §§2–3](https://homepages.math.uic.edu/~culler/papers/PlaneCurves/curves.pdf)

[Tillmann, §7](https://www.maths.usyd.edu.au/u/tillmann/papers/course.pdf)

## Facts & Assumptions

**Given:** Full AC, the finite Wirtinger equations, the marked peripheral words, and the character quotient trace coordinates.

[F1] The trace model is a finite closed model of the character quotient only after its escalated trace-generation and locus arguments are supplied ([[lem-sl-two-character-trace-coordinate-model]]).

[F2] The eigenvalue image closure descends to $\mathbb Q$ only after the incidence-projection and scalar-descent claim is proved ([[lem-knot-boundary-eigenvalue-locus-defined-over-q]]).

[F3] A reduced finite union of rationally defined Laurent curves has a square-free primitive Laurent equation under full AC ([[lem-laurent-algebraic-curve-has-principal-equation]]).

[A1] The restriction morphism, eigenline incidence elimination, correspondence between the quotient image and the lifted eigenvalue locus, and the assertion that isolated image points do not enter the curve ideal require a complete elimination argument; it is not supplied locally. The proposed missing supplier is [[thm-boundary-restriction-character-variety-elimination]].

## Proof obligation

The proposed proof must construct the peripheral restriction morphism on the categorical quotient, lift its image to the eigenvalue torus, compute the closure by eliminating all trace/eigenline variables, and separate the reducible $L=1$ component from nonabelian components without adding isolated points as curve factors. The field-of-definition passage and principal equation are separately assigned suppliers [F2] and [F3]. Because the first elimination and quotient-lifting argument remains unproved, this lemma is escalated.
