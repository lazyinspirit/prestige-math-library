---
id: def-class-formation
kind: definition
title: "Class formation"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-continuous-cohomology-of-a-profinite-group-with-discrete-module
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, 2nd ed., Chapter I, §1"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
    - title: "J. S. Milne, Class Field Theory, version 4.03, Chapter IV"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
verification: {}
---

## Definition

Let $G$ be a profinite group and let $C$ be a discrete abelian group with a
continuous $G$-action. A **class-formation structure** on $(G,C)$ is a family
of isomorphisms
$$\operatorname{inv}_U:H^2_{\mathrm{cont}}(U,C)\xrightarrow{\sim}\mathbb Q/\mathbb Z$$
indexed by the open subgroups $U\leq G$, satisfying both conditions:

1. $H^1_{\mathrm{cont}}(U,C)=0$ for every open subgroup $U\leq G$;
2. for every inclusion of open subgroups $V\leq U\leq G$,
   $$\operatorname{inv}_V\circ\operatorname{Res}_{V,U} =[U:V]\operatorname{inv}_U.$$

The maps $\operatorname{inv}_U$ are the invariant maps. The group $G$, module
$C$, and this family together are called a **class formation**.

## Definition references

[[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

[J. S. Milne, *Arithmetic Duality Theorems*, Chapter I, §1, pp. 17–19](https://www.jmilne.org/math/Books/ADTnot.pdf)

[J. S. Milne, *Class Field Theory*, Chapter IV, §1](https://www.jmilne.org/math/CourseNotes/CFT.pdf)
