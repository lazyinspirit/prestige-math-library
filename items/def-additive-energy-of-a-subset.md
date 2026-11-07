---
id: def-additive-energy-of-a-subset
kind: definition
title: "Additive energy of a subset"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: []
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Terence Tao and Van H. Vu, Additive Combinatorics"
      url: "https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf"
      locator: "§2.3, Definition 2.8, printed p. 59: additive energy as ordered equal-sum quadruples"
    - title: "Swastik Kopparty, Fourier Analysis, Topics in Finite Fields course notes"
      url: "https://www.math.toronto.edu/swastik/courses/finitefields-F23/fourier.pdf"
      locator: "§1.6.1, PDF p. 4: additive energy as the count of ordered solutions to x+y=z+w"
verification:
  precheck: n/a
---

## Definition

Let $N\ge1$, $G=\mathbb Z/N\mathbb Z$, and $A\subseteq G$. The **additive energy** of $A$ is

$$E(A):=\#\{(a,b,c,d)\in A^4:a+b=c+d\text{ in }G\},$$

where the quadruples are ordered and repetitions are allowed.

## Definition references

[Tao and Vu, *Additive Combinatorics*, §2.3, Definition 2.8](https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf)

[Kopparty, *Fourier Analysis*, §1.6.1](https://www.math.toronto.edu/swastik/courses/finitefields-F23/fourier.pdf)
