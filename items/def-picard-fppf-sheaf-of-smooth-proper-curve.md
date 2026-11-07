---
id: def-picard-fppf-sheaf-of-smooth-proper-curve
kind: definition
title: The fppf Picard Sheaf of a Smooth Proper Curve
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-algebraic-curve-over-field
  - def-picard-group-scheme
  - def-fppf-topology-on-schemes
  - def-fppf-sheaf-and-sheafification
  - lem-fppf-sheafification-exists
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: J. S. Milne, Abelian Varieties, version 2.0, Chapter III §1, printed pp. 85–89
      url: https://www.jmilne.org/math/CourseNotes/AV.pdf
    - title: Bjorn Poonen, Rational Points on Varieties, §5.7.1, printed pp. 139–141
      url: https://math.mit.edu/~poonen/papers/Qpoints.pdf
---

## Definition

Let $k$ be a field and let $C$ be a smooth, proper, geometrically connected curve over $k$. For a $k$-scheme $T$, put $C_T=C\times_kT$ and let $p_T:C_T\to T$ be projection. The **relative Picard fppf sheaf** $\operatorname{Pic}_{C/k}$ is the sheafification for the fppf topology of the presheaf $T\mapsto\operatorname{Pic}(C_T)/p_T^*\operatorname{Pic}(T)$, where $\operatorname{Pic}(X)$ is the group of isomorphism classes of line bundles on $X$. Thus sections record line-bundle classes on $C_T$ modulo line bundles pulled back from $T$; this definition does not assert representability.

## Definition references

[Milne, Picard functor convention, Ch. III §1](https://www.jmilne.org/math/CourseNotes/AV.pdf)

[Poonen, Picard schemes of curves, §5.7.1](https://math.mit.edu/~poonen/papers/Qpoints.pdf)

[[def-fppf-topology-on-schemes]]

[[def-fppf-sheaf-and-sheafification]]
