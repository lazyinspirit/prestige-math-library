---
id: cex-knot-kt-24-boundary-case
kind: counterexample
title: A prime-power torsion linking form need not have a metabolizer
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 9
deps:
  - def-bounding-chain-torsion-linking-pairing
  - def-finite-linking-form-and-metabolizer
  - lem-linking-pairing-on-rational-homology-sphere-is-nonsingular
  - lem-branched-cover-surgery-presentation-from-seifert-surface
  - lem-cyclic-cover-linking-form-inverse-matrix
  - lem-positive-hopf-plumbing-has-trefoil-seifert-matrix
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Dale Rolfsen, Knots and Links
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf
      locator: Chapter 8.D, printed pp. 212–215; trefoil double-cover surgery calculation read
    - title: Jozef H. Przytycki and Akira Yasuhara, Linking Numbers in Rational Homology 3-Spheres, Cyclic Branched Covers and Infinite Cyclic Covers
      url: https://arxiv.org/pdf/math/0111203v1
      locator: Section 1, printed pp. 4–7, and Section 3, pp. 12–14; inverse surgery-matrix linking formula read
---
## Statement refuted

Assume AC. The assertion that every nonsingular linking form on a finite group of odd prime-power order has a metabolizer is false: the double branched cover of the positive trefoil has cyclic first homology of order three and no metabolizer.

## Statement references

[[def-finite-linking-form-and-metabolizer|The metabolizer definition]]

[[def-bounding-chain-torsion-linking-pairing|The oriented linking-pairing convention]]

[[lem-positive-hopf-plumbing-has-trefoil-seifert-matrix|The positive trefoil Seifert matrix]]

[[lem-branched-cover-surgery-presentation-from-seifert-surface|The branched-cover surgery presentation]]

[[lem-cyclic-cover-linking-form-inverse-matrix|The surgery linking form formula]]

[[def-axiom-of-choice|Axiom of Choice]]

[Rolfsen, *Knots and Links*, Chapter 8.D, pp. 212–215](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf)

[Przytycki and Yasuhara, *Linking Numbers in Rational Homology 3-Spheres, Cyclic Branched Covers and Infinite Cyclic Covers*, §§1 and 3](https://arxiv.org/pdf/math/0111203v1)

## Facts & Assumptions

**Given:** The positive trefoil, its Seifert matrix $V$, and the double branched-cover orientation convention.

[A1] Full AC is assumed wherever the cover and orientation conventions use the choice axiom. [[def-axiom-of-choice]]

[F1] $V=\begin{pmatrix}1&1\\0&1\end{pmatrix}$. [[lem-positive-hopf-plumbing-has-trefoil-seifert-matrix]]

[F2] The double-cover surgery matrix is $A=V+V^T$. [[lem-branched-cover-surgery-presentation-from-seifert-surface]]

[F3] The oriented linking form on the surgery cokernel is $-A^{-1}\bmod\mathbb Z$. [[lem-cyclic-cover-linking-form-inverse-matrix]]

[F4] A finite nonsingular linking form has a metabolizer only if some subgroup has square-root order. [[def-finite-linking-form-and-metabolizer]]

[F5] The surgery linking matrix computes the same oriented torsion linking pairing as the signed bounding-chain formula. [[def-bounding-chain-torsion-linking-pairing]] [[lem-cyclic-cover-linking-form-inverse-matrix]]

[F6] A closed oriented $3$-manifold with finite first homology has nonsingular torsion linking form. [[lem-linking-pairing-on-rational-homology-sphere-is-nonsingular]]

## Counterexample

1.1 Computing gives $A=\begin{pmatrix}2&1\\1&2\end{pmatrix}$ with determinant $3$, and unimodular row and column operations reduce it to $\operatorname{diag}(1,3)$. Therefore $H_1(\Sigma_2(T);\mathbb Z)\cong\mathbb Z/3$. The matrix formula [F3] gives generator self-linking $-2/3\equiv1/3\bmod\mathbb Z$ under [F5], so the full group is not isotropic. [F1, F2, F3, F5, given, algebra, A1]

2.1 The only subgroups of $\mathbb Z/3$ have order $1$ or $3$, while a metabolizer would have order $\sqrt3$ by [F4]. The form is nonsingular by [F6] and step 1.1, so it satisfies the assertion's nonsingularity hypothesis. No subgroup has that order, so no metabolizer exists. This finite nonsingular form of odd prime-power order refutes the assertion. [F4, F6, step 1.1, algebra] ∎
