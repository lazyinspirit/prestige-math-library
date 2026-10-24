---
id: lem-qftx-gaga-frechet-complex-compact-finiteness
kind: lemma
title: Compact morphisms of Fréchet complexes have finite Hausdorff cohomology
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-qftx-gaga-frechet-space
  - lem-qftx-gaga-frechet-open-mapping
  - lem-qftx-gaga-schwartz-compact-perturbation
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-qftx-gaga-frechet-space: mathematical-premise
  lem-qftx-gaga-frechet-open-mapping: mathematical-premise
  lem-qftx-gaga-schwartz-compact-perturbation: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Pierre Demailly, Complex Analytic and Differential Geometry
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: "Chapter IX §1.B, Theorem 1.9 and Remark 1.10, printed pp. 407–408: compact morphisms of Fréchet complexes, finite Hausdorff cohomology, and openness of a surjective cohomology map."
    - title: Henri Cartan, Un théorème de finitude
      url: https://www.numdam.org/item/SHC_1953-1954__6__A17_0.pdf
      locator: "Exposé 17, pp. 8–11: the compact restriction morphism and Schwartz finiteness argument."
verification:
  precheck: pending
page: qftx-gaga-compact-coherent-finiteness
category: quantum-field-theory-mathematics
---

## Statement

Assume the full Axiom of Choice. Let $(E^\bullet,d)$ and $(F^\bullet,\delta)$ be cochain complexes of Fréchet spaces over $\mathbb C$, with continuous differentials, and let $\rho^\bullet:E^\bullet\to F^\bullet$ be a continuous cochain map. Fix $q\ge0$. If $\rho^q:E^q\to F^q$ is compact and the induced map $H^q(\rho^\bullet):H^q(E^\bullet)\to H^q(F^\bullet)$ is surjective, then $H^q(F^\bullet)$, with its cocycle-subspace and coboundary-quotient topology, is Hausdorff and finite-dimensional. Moreover, whenever a continuous cochain map between Fréchet complexes induces a surjection on $q$th cohomology, that cohomology map is open.

## Statement references

[Jean-Pierre Demailly, *Complex Analytic and Differential Geometry*, Chapter IX §1.B](https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf)

[Henri Cartan, *Un théorème de finitude*, Exposé 17](https://www.numdam.org/item/SHC_1953-1954__6__A17_0.pdf)

## Facts & Assumptions

**Given:** Full AC; two cochain complexes of Fréchet spaces with continuous differentials; a continuous cochain map $\rho^\bullet$; a degree $q\ge0$; compactness of $\rho^q$ and surjectivity of the induced cohomology map for the finiteness assertion.

[F1] A Fréchet space is Hausdorff, complete, metrizable and locally convex ([[def-qftx-gaga-frechet-space]]).

[F2] A compact perturbation of a quasi-epimorphism between Fréchet spaces is a quasi-epimorphism ([[lem-qftx-gaga-schwartz-compact-perturbation]]).

[F3] A continuous surjective linear map between Fréchet spaces is open ([[lem-qftx-gaga-frechet-open-mapping]]).

[A1] Full AC is the set-choice postulate used by [F2] and [F3] ([[def-axiom-of-choice]]).

## Proof

1.1 Write $Z_E^q=\ker(d^q)$, $B_E^q=\operatorname{im}(d^{q-1})$, and likewise $Z_F^q,B_F^q$, using the actual degree $q-1$ term, or the zero space when that term is absent. The cocycle spaces are closed kernels of continuous maps, so they are Fréchet by [F1]. Define continuous linear maps on the Fréchet space $Z_E^q\oplus F^{q-1}$ by $g(x,y)=\rho^q(x)+\delta^{q-1}(y)$ and $h(x,y)=-\rho^q(x)$, with codomain $Z_F^q$. The cochain-map identity ensures both images lie in $Z_F^q$. [F1, given, construct]

1.2 The map $g$ is surjective: for $z\in Z_F^q$, surjectivity of $H^q(\rho^\bullet)$ gives $x\in Z_E^q$ and $y\in F^{q-1}$ with $z-\rho^q(x)=\delta^{q-1}(y)$. It is therefore a quasi-epimorphism by [F3]. The map $h$ is compact because it factors the compact map $\rho^q$ restricted to the closed subspace $Z_E^q$ through the finite product projection. [A1, F1, F3, given, step 1.1]

2.1 Apply [F2] to $g$ and $h$. Their sum is $(g+h)(x,y)=\delta^{q-1}(y)$, whose image is exactly $B_F^q$. Hence $B_F^q$ is closed and finite-codimensional in $Z_F^q$. The quotient $Z_F^q/B_F^q=H^q(F^\bullet)$ is consequently Hausdorff and finite-dimensional. [A1, F2, step 1.2]

3.1 For the openness assertion, let $\sigma^\bullet:E^\bullet\to F^\bullet$ be any continuous cochain map whose induced $q$th cohomology map is surjective, and put $Z_E^q=\ker d^q$, $Z_F^q=\ker\delta^q$. The map $G:Z_E^q\oplus F^{q-1}\to Z_F^q$, $G(x,y)=\sigma^q(x)+\delta^{q-1}(y)$, is surjective by the same representative argument as in step 1.2, hence open by [F3]. If $O$ is an open subset of $H^q(E^\bullet)$, its inverse image $\widetilde O$ under the quotient map $Z_E^q\to H^q(E^\bullet)$ is open and saturated by coboundaries. Then $G(\widetilde O\times F^{q-1})=\pi_F^{-1}(H^q(\sigma^\bullet)(O))$, where $\pi_F:Z_F^q\to H^q(F^\bullet)$ is the quotient map. The left side is open because $G$ is open; by the quotient topology the image $H^q(\sigma^\bullet)(O)$ is open. [A1, F1, F3, given, step 1.2, construct]

4.1 Steps 2.1 and 3.1 prove the two conclusions in the Statement. The argument uses no bound on the complex length and also applies in degree $q=0$; for a complex concentrated in nonnegative degrees, its absent degree $-1$ term is zero. [step 2.1, step 3.1] ∎
