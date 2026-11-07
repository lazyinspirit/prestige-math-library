---
id: def-brauer-group-as-galois-cohomology
kind: definition
title: "Brauer group as continuous Galois cohomology"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-absolute-galois-group-of-a-field
  - thm-classic-brauer-group-is-h2-galois-cohomology
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03, Chapter IV, §§2–3"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
verification: {}
---

## Definition

For a field $F$, fix a separable closure $F_s$ and write
$G_F=\operatorname{Gal}(F_s/F)$. A central simple $F$-algebra is an
associative finite-dimensional $F$-algebra with center $F$ and no nonzero
proper two-sided ideals. The **Brauer group** $\operatorname{Br}(F)$ is the
abelian group of similarity classes of such algebras. The canonical comparison with continuous Galois
cohomology identifies it with
$$\operatorname{Br}(F)=H^2_{\mathrm{cont}}(G_F,F_s^\times),$$
where $F_s^\times$ has the discrete topology and its natural Galois action;
we write this group additively.

## Definition references

[[def-absolute-galois-group-of-a-field]]

[[thm-classic-brauer-group-is-h2-galois-cohomology]]

[J. S. Milne, *Class Field Theory*, Chapter IV, §§2–3](https://www.jmilne.org/math/CourseNotes/CFT.pdf)
