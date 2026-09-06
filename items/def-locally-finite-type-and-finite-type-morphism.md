---
id: def-locally-finite-type-and-finite-type-morphism
kind: definition
title: "Locally finite type and finite type morphisms"
status: draft
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-morphism-of-schemes, def-affine-open-subscheme, def-finite-type-and-module-finite-algebras]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Definition 15.1"
      url: "https://stacks.math.columbia.edu/tag/01T2"
---
## Definition

A morphism $f:X\to S$ is **locally of finite type** if every point of $X$ has
an affine open neighbourhood $U$ and $f(U)$ lies in an affine open
$V=\operatorname{Spec}A$ of $S$ such that $U=\operatorname{Spec}B$ and
$A\to B$ is of finite type. It is **of finite type** if it is locally of finite
type and quasi-compact.
