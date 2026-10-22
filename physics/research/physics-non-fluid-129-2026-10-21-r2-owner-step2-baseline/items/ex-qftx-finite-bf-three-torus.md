---
id: ex-qftx-finite-bf-three-torus
kind: example
title: "Abelian finite BF counts on S³ and T³"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 3
deps:
  - thm-qftx-cw-fundamental-group-presentation
  - thm-qftx-finite-bf-topological-invariance
justified_by: []
aliases: []
domain: mathematics
library: mathematics
dependency_roles:
  thm-qftx-cw-fundamental-group-presentation: mathematical-premise
  thm-qftx-finite-bf-topological-invariance: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Robbert Dijkgraaf and Edward Witten, Topological Gauge Theories and Group Cohomology"
      url: "https://www.ias.edu/sites/default/files/sns/%5B126%5DCommMathPhys129-1990.pdf"
      locator: "§6.6, PDF pp. 30–32, for the finite-group 3-torus partition function; this example uses the untwisted cocycle."
    - title: "Gregory W. Moore and Vivek Saxena, TASI Lectures on Topological Field Theories and Differential Cohomology"
      url: "https://arxiv.org/pdf/2510.07408"
      locator: "§13, PDF pp. 51–53, and §23.3, PDF pp. 98–99, for finite-group partition sums and the automorphism-weighted normalization."
verification:
  precheck: pending
---

## Example

For a finite abelian group $G$, the untwisted finite BF normalization gives

$$Z_G(S^3)=\frac1{|G|},\qquad Z_G(T^3)=|G|^2.$$

These scalar amplitudes need not equal one.

## Example references

[[thm-qftx-finite-bf-topological-invariance]]

[[thm-qftx-cw-fundamental-group-presentation]]

## Facts & Assumptions

**Given:** A finite abelian group $G$ and the untwisted finite BF amplitude of a connected closed finite CW complex.

[F1] [[thm-qftx-finite-bf-topological-invariance]]: for connected $K$, $Z_G(K)=|\operatorname{Hom}(\pi_1(K),G)|/|G|$.

[F2] [[thm-qftx-cw-fundamental-group-presentation]]: the fundamental group is computed from the 1-cells and 2-cell attaching words; cells of dimension at least three do not change it.

## Verification

1.1 Give $S^3$ its CW structure with one 0-cell and one 3-cell. Its 1-skeleton has no non-tree edges and it has no 2-cell relators, so [F2] gives $\pi_1(S^3)=1$. There is exactly one homomorphism from the trivial group to $G$, and [F1] gives $Z_G(S^3)=1/|G|$. [given, F1, F2, algebra]

2.1 Give $T^3$ its CW structure with one 0-cell, three 1-cells $a,b,c$, three 2-cells attached along the commutators $aba^{-1}b^{-1}$, $bcb^{-1}c^{-1}$, and $cac^{-1}a^{-1}$, and one 3-cell. By [F2], $\pi_1(T^3)=\langle a,b,c\mid [a,b]=[b,c]=[c,a]=1\rangle\cong\mathbb Z^3$. The isomorphism sends $(1,0,0),(0,1,0),(0,0,1)$ to $a,b,c$: it is surjective because these generators generate the presented group, and its inverse sends $a,b,c$ to the standard basis because the relators are satisfied. [F2, step 1.1, construct]

3.1 A homomorphism $\mathbb Z^3\to G$ is determined by the images of its three standard generators. Every triple in $G^3$ satisfies the commutation relations because $G$ is abelian, so $|\operatorname{Hom}(\mathbb Z^3,G)|=|G|^3$. Equation [F1] now gives $Z_G(T^3)=|G|^3/|G|=|G|^2$. For $G=\mathbb Z/2\mathbb Z$, the two amplitudes are $1/2$ and $4$, respectively, so neither normalization forces every scalar amplitude to be one. [given, F1, step 2.1, algebra] ∎
