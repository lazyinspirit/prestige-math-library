---
id: def-cohen-lenstra-measure-for-odd-primary-imaginary-quadratic-class-groups
kind: definition
title: "Odd-primary Cohen–Lenstra mass assignment"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: [def-group, def-group-isomorphism-and-automorphism]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jordan Ellenberg, Recent Progress around Cohen–Lenstra Heuristics, §§1–4"
      url: "https://arxiv.org/pdf/2606.06024"
      locator: "§§1–4, especially the odd-primary heuristic and its normalizing constant"
    - title: "A. Landesman, Distributions of Class Groups of Global Fields, Lecture 3"
      url: "https://people.math.harvard.edu/~landesman/assets/class-groups-notes.pdf"
      locator: "§3, Definition 3.14 and surrounding discussion"
verification: {}
---

## Definition

Let $\ell$ be an odd prime, and let $\mathcal G_\ell$ be the set of isomorphism classes of finite abelian groups of order a power of $\ell$, including the trivial group. For $A\in\mathcal G_\ell$, define
$$c_\ell:=\prod_{j=1}^{\infty}(1-\ell^{-j}),\qquad \mu_\ell(A):=\frac{c_\ell}{|\operatorname{Aut}(A)|}.$$
Here $|\operatorname{Aut}(A)|$ is the finite cardinality of the automorphism group of $A$. The assignment $A\mapsto\mu_\ell(A)$ is the odd-primary Cohen–Lenstra mass weight. The claim that the weights sum to one is a separate normalization theorem and is not asserted by this definition.

## Definition references

[Recent Progress around Cohen–Lenstra Heuristics, §§1–4](https://arxiv.org/pdf/2606.06024)

[Distributions of Class Groups of Global Fields, Lecture 3](https://people.math.harvard.edu/~landesman/assets/class-groups-notes.pdf)
