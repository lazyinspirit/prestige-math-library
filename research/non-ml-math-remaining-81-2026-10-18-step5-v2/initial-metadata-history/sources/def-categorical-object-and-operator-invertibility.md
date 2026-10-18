---
id: def-categorical-object-and-operator-invertibility
kind: definition
title: "Tensor-invertible objects, fusion-ring units, and invertible operators"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-fusion-and-multifusion-category, def-fusion-rules]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§4.5, Remark 4.5.3: Grothendieck fusion ring and nonnegative simple-object basis."
    - title: "David Penneys, Unitary Fusion Categories, Math 8800 lecture notes"
      url: "https://people.math.osu.edu/penneys.2/UQSL/ArchivedNotes/TPM/FusionCats.pdf"
      locator: "§3.5, PDF pp. 13–14: fusion rules and fusion algebra."
verification:
  precheck: n/a
---

## Definition

Let $\mathcal C$ be a fusion category with unit $\mathbf1$. Its Grothendieck fusion ring $K_0(\mathcal C)$ is the free abelian group on simple isomorphism classes, with multiplication induced by tensor product and coefficients given by the fusion rules of [[def-fusion-rules]].

- An object $X$ is **tensor-invertible** if there is an object $Y$ with $X\otimes Y\cong\mathbf1$ and $Y\otimes X\cong\mathbf1$.
- A class $[X]$ is a **fusion-ring unit** if it has a two-sided multiplicative inverse in $K_0(\mathcal C)$; that inverse may have negative integer coefficients in the simple-object basis.
- A linear operator is **invertible** only relative to a specified vector space $H$ and operator $T:H\to H$: it must have a two-sided inverse $S:H\to H$ with $ST=TS=I_H$.

These definitions concern different objects: categorical tensor product, a ring with virtual classes, and a chosen representation on a vector space.
