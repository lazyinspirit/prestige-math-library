---
id: def-generalized-dihedral-group
kind: definition
title: ' The generalized dihedral group $\operatorname{Dih}(A)=A\rtimes C_2$ for an abelian group $A$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-external-semidirect-product, thm-classification-of-cyclic-groups]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
pipeline_run: null
---

## Definition

Let $A$ be an abelian group, and let the cyclic group $C_2=\langle s\rangle$ ([[thm-classification-of-cyclic-groups]]) act on $A$ by inversion, $s\cdot a=a^{-1}$. The **generalized dihedral group** of $A$ is the external semidirect product ([[def-external-semidirect-product]])

$$\operatorname{Dih}(A)=A\rtimes C_2.$$

The inversion map is an automorphism precisely because $A$ is abelian.
