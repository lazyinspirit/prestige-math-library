---
id: def-dubrovnik-tangle-skein-algebra
kind: definition
title: Ordinary Dubrovnik tangle skein algebra
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-bmw-dubrovnik-coefficient-extension
  - def-kauffman-regular-isotopy-and-dubrovnik-conventions
proof_strategy: not-applicable
axiom_use: "Choice-free: the algebra is a quotient of a monoid algebra by the displayed local relations."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Frederick M. Goodman and Holly Hauschild, Affine Birman–Wenzl–Murakami Algebras and Tangles in the Solid Torus, §§2.2–2.3 and Definition 2.6"
      url: "https://arxiv.org/pdf/math/0411155"
      locator: "PDF pp. 4–8: ordinary tangle diagrams, regular isotopy, stacking, and the Kauffman tangle algebra"
    - title: "Louis H. Kauffman, An Invariant of Regular Isotopy, Transactions of the AMS 318(2) (1990), §§VI–VII"
      url: "https://homepages.math.uic.edu/~kauffman/IRH.pdf"
      locator: "PDF pp. 38–54/printed pp. 453–469: regular-isotopy skein, curl, and circle relations"
---

## Definition

Fix $n\ge0$ and a rectangle with $n$ distinct ordered endpoints on its top edge and $n$ on its bottom edge. An ordinary $(n,n)$ tangle diagram is a finite generic planar projection in the rectangle of arcs joining these endpoints and finitely many closed curves, with an over/under marking at each transverse double point and no other singularities. Two diagrams are regularly isotopic when related by planar isotopy fixing the boundary and Reidemeister moves II and III. Their regular-isotopy classes form a monoid under vertical stacking, with the $n$ straight strands as its identity. In the fixed crossing chart, $D_+$ and $D_-$ differ by switching the marked crossing, $D_0$ is the through left/right smoothing, and $D_\infty$ is the cup-cap top/bottom smoothing. The displayed $D_+$ has its over-strand running southwest to northeast; with both strands directed downward it is the determinant-positive Artin crossing. A positive curl is a type-I kink with determinant crossing sign $+1$; a negative curl has sign $-1$. Define $\mathcal{KT}_n(T)$ to be the $T$-algebra obtained from the monoid algebra of these classes by imposing, in every interior disk, the Dubrovnik relations
$$D_+-D_-=z_D(D_0-D_\infty),\qquad \text{positive curl}=a\,\text{straight strand},\qquad \text{negative curl}=a^{-1}\,\text{straight strand},$$
and the free-circle relation that adjoining one disjoint circle with no crossings with the tangle multiplies it by $d$. The symbols $a,z_D,d$ are the images from the coefficient extension. No type-I move is imposed as a regular isotopy; its effect is represented by the displayed curl relations.

## Definition references

[[def-bmw-dubrovnik-coefficient-extension|Coefficient extension and parameter symbols]]

[[def-kauffman-regular-isotopy-and-dubrovnik-conventions|Dubrovnik local skein, curl, and circle rules]]

[Goodman and Hauschild, *Affine Birman–Wenzl–Murakami Algebras and Tangles in the Solid Torus*](https://arxiv.org/pdf/math/0411155)

[Kauffman, *An Invariant of Regular Isotopy*](https://homepages.math.uic.edu/~kauffman/IRH.pdf)
