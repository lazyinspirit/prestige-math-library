---
id: def-qftx-loop-current-cocycle
kind: definition
title: Loop current Lie algebra and central term
status: published
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 0
deps: []
justified_by: []
dependency_roles: {}
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: Boris Khesin and Robert Wendt, The Geometry of Infinite-Dimensional Groups
      url: https://www.math.utoronto.ca/khesin/papers/Lecture_notes.pdf
      locator: Chapter II, §1.1, Definition 1.1 through Remark 1.5, printed pp. 48–49 (PDF pp. 58–60); smooth loop algebra and the integral cocycle.
    - title: Ana Ros Camacho, Kac-Moody Algebras
      url: https://www.math.uni-hamburg.de/home/wockel/teaching/data/cohomology_of_lie_algebras_ros_camacho.pdf
      locator: §6, Definition 25 through Proposition 3, PDF pp. 7–9; Laurent-polynomial loop algebra, residue cocycle, and its central extension.
---

## Definition

Let $\mathfrak g$ be a finite-dimensional real Lie algebra. Let $\kappa:\mathfrak g\times\mathfrak g\to\mathbb R$ be a symmetric bilinear form that is invariant, meaning
$$\kappa([U,V],W)=\kappa(U,[V,W])\qquad(U,V,W\in\mathfrak g).$$
No nondegeneracy, positivity, simplicity, or compactness assumption is imposed. Put $S^1=\mathbb R/(2\pi\mathbb Z)$ and $\mathcal L\mathfrak g=C^\infty(S^1,\mathfrak g)$, with pointwise bracket $[X,Y](\theta)=[X(\theta),Y(\theta)]_{\mathfrak g}$. For $Y\in\mathcal L\mathfrak g$, write $Y'=\partial_\theta Y$ in the indicated periodic coordinate.

A Lie-algebra $2$-cocycle for the trivial scalar action is an alternating bilinear map $\omega:\mathcal L\mathfrak g\times\mathcal L\mathfrak g\to\mathbb R$ satisfying
$$\omega([X,Y],Z)+\omega([Y,Z],X)+\omega([Z,X],Y)=0.$$
Define the candidate current cocycle and its candidate central-term bracket by
$$\omega(X,Y)=\frac1{2\pi}\int_0^{2\pi}\kappa(X(\theta),Y'(\theta))\,d\theta,\qquad \widehat{\mathcal L\mathfrak g}=\mathcal L\mathfrak g\oplus\mathbb R,$$
$$[(X,a),(Y,b)]=([X,Y],\omega(X,Y)).$$
The real coordinates $a,b$ are central coordinates and do not enter the right-hand side. A one-dimensional central extension means a short exact sequence of Lie algebras $0\to\mathbb R\to\widehat{\mathcal L\mathfrak g}\to\mathcal L\mathfrak g\to0$ whose kernel is central. The proposition on this page verifies that the displayed operation has this Lie-algebra structure. The normalization is fixed as written; no integer level, integration to a loop group, or representation-theoretic existence or unitarity follows from this definition.

