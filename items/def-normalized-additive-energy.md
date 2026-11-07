---
id: def-normalized-additive-energy
kind: definition
title: "Normalized additive energy and its density scale"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps: [def-additive-energy-of-a-subset]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Terence Tao and Van H. Vu, Additive Combinatorics"
      url: "https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf"
      locator: "§2.3, Definition 2.8, printed p. 59, and §4.2, equation (4.14), printed p. 157: additive energy and its density scale"
    - title: "Swastik Kopparty, Fourier Analysis, Topics in Finite Fields course notes"
      url: "https://www.math.toronto.edu/swastik/courses/finitefields-F23/fourier.pdf"
      locator: "§1.6.1, PDF p. 4: the lower baseline E(A)≥|A|⁴/|G|"
verification:
  precheck: n/a
---

## Definition

Let $N\ge1$, $G=\mathbb Z/N\mathbb Z$, and let $\varnothing\ne A\subseteq G$. Write $m=|A|$ and $\alpha=m/N$. The **normalized additive energy** is $e(A):=E(A)/m^3$, and its **density-scaled ratio** is

$$\frac{e(A)}{\alpha}=\frac{NE(A)}{m^4}.$$

## Definition references

[Tao and Vu, *Additive Combinatorics*, §§2.3 and 4.2](https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf)

[Kopparty, *Fourier Analysis*, §1.6.1](https://www.math.toronto.edu/swastik/courses/finitefields-F23/fourier.pdf)

