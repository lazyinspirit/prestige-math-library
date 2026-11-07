---
id: op-cohen-lenstra-odd-primary-imaginary-quadratic-distribution
kind: open-problem
title: "Odd-primary Cohen–Lenstra distribution for imaginary quadratic fields"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps: [def-cohen-lenstra-measure-for-odd-primary-imaginary-quadratic-class-groups, lem-class-group-three-torsion-surjections]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jordan Ellenberg, Recent Progress around Cohen–Lenstra Heuristics, §§1–4"
      url: "https://arxiv.org/pdf/2606.06024"
      locator: "§§1–4, odd-primary imaginary-quadratic class-group conjecture and status"
    - title: "A. Landesman, Distributions of Class Groups of Global Fields, Lecture 3"
      url: "https://people.math.harvard.edu/~landesman/assets/class-groups-notes.pdf"
      locator: "§3, Cohen–Lenstra conjecture and Davenport–Heilbronn moment"
verification: {}
---

## Open problem

For each odd prime $\ell$ and each finite abelian $\ell$-group $A$, prove that
$$\lim_{X\to\infty}\frac{\#\{K/\mathbb Q\text{ imaginary quadratic}:|D_K|<X,\ \operatorname{Cl}(K)[\ell^\infty]\cong A\}}{\#\{K/\mathbb Q\text{ imaginary quadratic}:|D_K|<X\}}=\mu_\ell(A),$$
where $D_K$ is the fundamental discriminant and $\mu_\ell(A)$ is the odd-primary Cohen–Lenstra mass. The corresponding heuristic also predicts that for every finite abelian group $B$ of odd order, the average number of surjections $\operatorname{Cl}(K)\twoheadrightarrow B$ over the same family is $1$.

## Open problem references

[[def-cohen-lenstra-measure-for-odd-primary-imaginary-quadratic-class-groups]]

[[lem-class-group-three-torsion-surjections]]

[Jordan Ellenberg, *Recent Progress around Cohen–Lenstra Heuristics*, §§1–4](https://arxiv.org/pdf/2606.06024)

[A. Landesman, *Distributions of Class Groups of Global Fields*, Lecture 3](https://people.math.harvard.edu/~landesman/assets/class-groups-notes.pdf)

## Status

The full odd-primary distribution remains open. Davenport–Heilbronn proves the first $3$-torsion average, but that first moment does not establish the distribution law or all predicted surjection moments. The total-mass normalization is separately recorded as an escalated lemma; the open formulation itself uses the pointwise mass formula.
