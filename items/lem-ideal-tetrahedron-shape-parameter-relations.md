---
id: lem-ideal-tetrahedron-shape-parameter-relations
kind: lemma
title: "Shape parameters of an ideal tetrahedron"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-ideal-tetrahedron-shape-and-cusp-holonomy
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jessica S. Purcell, Hyperbolic Knot Theory"
      url: "https://users.monash.edu/~jpurcell/book/HypKnotTheory.pdf"
      locator: "§4.2, Lemma 4.6, printed pp.70–71"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

For an oriented ideal tetrahedron with normalized vertices $0,1,\infty,z$ and $\operatorname{Im}z>0$, its three edge-shape parameters are $z$, $z'=1/(1-z)$, and $z''=(z-1)/z$. They satisfy $zz'z''=-1$, and their arguments in $(0,\pi)$ are the three dihedral angles, whose sum is $\pi$. For $\omega=e^{i\pi/3}$, the choice $z=\omega$ gives $z=z'=z''=\omega$ and all six dihedral angles equal to $\pi/3$.

## Statement references

[Jessica S. Purcell, *Hyperbolic Knot Theory*, Lemma 4.6](https://users.monash.edu/~jpurcell/book/HypKnotTheory.pdf)

## Facts & Assumptions

**Given:** A positively oriented ideal tetrahedron in normalized upper half-space position with shape $z$, $\operatorname{Im}z>0$.

[F1] [[def-ideal-tetrahedron-shape-and-cusp-holonomy]] defines its edge parameters as $z$, $1/(1-z)$ and $(z-1)/z$, one for each opposite-edge pair.

## Proof

1.1 Since $\operatorname{Im}z>0$, the imaginary parts of $z$, $z'=1/(1-z)$ and $z''=1-1/z$ are all positive: the second is $\operatorname{Im}z/|1-z|^2$, and the third is $\operatorname{Im}z/|z|^2$. Thus their principal arguments lie in $(0,\pi)$. [given, F1, algebra]

2.1 Multiplication gives $zz'z''=z\cdot(1-z)^{-1}\cdot(z-1)z^{-1}=-1$. The sum of the three arguments is therefore an odd multiple of $\pi$; because it lies strictly between $0$ and $3\pi$, it must equal $\pi$. The arguments are the dihedral angles by the edge cross-ratio convention in [F1]. [F1, step 1.1, algebra]

3.1 For $\omega=e^{i\pi/3}$, $1-\omega=\omega^{-1}$ and $\omega-1=\omega^2$. Hence $1/(1-\omega)=\omega$ and $(\omega-1)/\omega=\omega$; each parameter has argument $\pi/3$. Each of the three parameter arguments occurs on a pair of opposite edges, proving the regular-angle assertion. [given, F1, step 2.1, algebra] ∎

## Sources

[Jessica S. Purcell, *Hyperbolic Knot Theory*, Lemma 4.6](https://users.monash.edu/~jpurcell/book/HypKnotTheory.pdf)
