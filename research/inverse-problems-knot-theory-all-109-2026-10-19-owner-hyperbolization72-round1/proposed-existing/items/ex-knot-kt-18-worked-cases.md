---
id: ex-knot-kt-18-worked-cases
kind: example
title: "Worked case: the figure-eight complement"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-knot-exterior
  - def-finite-volume-hyperbolic-knot-exterior
  - lem-figure-eight-ideal-gluing-and-cusp-completeness
  - thm-regular-ideal-tetrahedron-volume
  - lem-lobachevsky-fourier-expansion-and-pi-third-bound
  - thm-mostow-prasad-rigidity-and-knot-volume
  - def-axiom-of-choice
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "AC is carried by the complete finite-volume rigidity interface; the explicit gluing and volume calculation use no choice beyond the stated geometry."
sources:
  references:
    - title: "Jessica S. Purcell, Hyperbolic Knot Theory"
      url: "https://users.monash.edu/~jpurcell/book/HypKnotTheory.pdf"
      locator: "Chapter 1, §§1.1–1.1.5; §4.3, Examples 4.8, 4.14, 4.16; §9.1, Example 9.4"
    - title: "William P. Thurston, The Geometry and Topology of Three-Manifolds"
      url: "https://library.slmath.org/nonmsri/gt3m/PDF/3.pdf"
      locator: "Chapter 3, §3.1, printed p.29, two regular ideal tetrahedra and 60-degree edge angles"
verification:
  precheck: pending
---

## Example

Assume the Axiom of Choice. Let $K$ be the standard figure-eight knot and $E_K$ its compact exterior. Its interior admits a complete finite-volume hyperbolic metric obtained by gluing two regular ideal tetrahedra; each edge class has total angle $2\pi$, both generators of the peripheral torus have trivial rotation-and-scale cusp multiplier, and its complete hyperbolic volume is $6\Lambda(\pi/3)=2v_3\approx2.02988$.

## Example references

[Jessica S. Purcell, *Hyperbolic Knot Theory*, Chapters 1, 4 and 9](https://users.monash.edu/~jpurcell/book/HypKnotTheory.pdf)

[William P. Thurston, *The Geometry and Topology of Three-Manifolds*, Chapter 3](https://library.slmath.org/nonmsri/gt3m/PDF/3.pdf)

## Facts & Assumptions

**Given:** AC and the standard figure-eight knot exterior.

[F1] [[lem-figure-eight-ideal-gluing-and-cusp-completeness]] constructs the complete finite-volume metric from the specified two-tetrahedron face gluing and verifies both edge classes and a basis of cusp multipliers.

[F2] [[thm-regular-ideal-tetrahedron-volume]] gives the volume of each regular ideal tetrahedron as $v_3=3\Lambda(\pi/3)$.

[F4] [[thm-mostow-prasad-rigidity-and-knot-volume]] proves uniqueness and volume preservation for complete finite-volume hyperbolic metrics on this knot exterior.

[F3] [[lem-lobachevsky-fourier-expansion-and-pi-third-bound]] gives the positive series for $\Lambda(\pi/3)$ and bounds the tail after the first $N+1$ terms by $\sqrt3/(72N^2)$.

## Verification

**Given:** The explicit complete metric in [F1], built from two regular ideal tetrahedra.

1.1 The two tetrahedra have disjoint interiors in the face-glued triangulation, and their common faces have three-dimensional volume zero. Additivity of the Riemannian volume integral and [F2] therefore give total volume $2v_3=6\Lambda(\pi/3)$. [given, F1, F2, algebra]

2.1 For $N=10{,}000$ and $Q=10^{30}$, let $a_k=\lfloor Q/(3k+1)^2\rfloor$ and $b_k=\lfloor Q/(3k+2)^2\rfloor$. Exact integer division gives $781302412526189990283977435641\le\sum_{k=0}^{N}(a_k-b_k-1)\le Q\sum_{k=0}^{N}((3k+1)^{-2}-(3k+2)^{-2})\le\sum_{k=0}^{N}(a_k-b_k+1)=781302412526189990283977455643$. Also $r=1732050807568877293527446341505<Q\sqrt3<r+1=1732050807568877293527446341506$, as verified by squaring both integer endpoints against $3Q^2$. The truncated volume is $V_N=\frac{3\sqrt3}{2}\sum_{k=0}^{N}((3k+1)^{-2}-(3k+2)^{-2})$, because [F3] gives $\Lambda(\pi/3)=\frac{\sqrt3}{4}$ times that series. The preceding integer bounds and $r<Q\sqrt3<r+1$ give $\frac{3r(781302412526189990283977435641)}{2Q^2}\le V_N\le\frac{3(r+1)(781302412526189990283977455643)}{2Q^2}$. Exact cross-multiplication places $V_N$ between $2.02988321185$ and $2.02988321187$. Its omitted positive tail is less than $1.445\times10^{-9}$ because $6\sqrt3/(72N^2)=\sqrt3/(12N^2)<1.445\times10^{-9}$. Thus the complete interval lies strictly between $2.029875$ and $2.029885$, giving the stated five-decimal rounding. [F3, step 1.1, algebra]

3.1 Steps 1.1–2.1 compute the volume of the explicit complete gluing metric. For any other complete finite-volume hyperbolic metric on the same exterior interior, the identity fundamental-group isomorphism satisfies [F4], which supplies a volume-preserving isometry. Therefore the computed value is independent of the chosen complete hyperbolic metric and is the asserted complete hyperbolic volume of the figure-eight complement. [given, F1, F2, F4, step 1.1, step 2.1, algebra] ∎

## Verification references

[Jessica S. Purcell, *Hyperbolic Knot Theory*, Chapters 1, 4 and 9](https://users.monash.edu/~jpurcell/book/HypKnotTheory.pdf)

[William P. Thurston, *The Geometry and Topology of Three-Manifolds*, Chapter 3](https://library.slmath.org/nonmsri/gt3m/PDF/3.pdf)

## Remarks

The metric-independent identification is proved in step 3.1 using the full local finite-volume rigidity theorem. The rounded value follows from the exact integer bounds in step 2.1.
