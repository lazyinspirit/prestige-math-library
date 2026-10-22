---
id: thm-donaldson-definite-diagonalization
kind: theorem
title: Donaldson diagonalization theorem for positive-definite four-manifolds
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-integral-intersection-lattice-of-a-simply-connected-four-manifold
  - lem-integral-intersection-pairing-is-unimodular
  - def-asd-moduli-fredholm-index-and-lattice-setup
  - thm-asd-deformation-complex-index-formula
  - lem-asd-regularity-perturbation-and-orientability
  - lem-uhlenbeck-compactness-and-removable-singularities
  - lem-taubes-positive-definite-instanton-existence
  - lem-donaldson-reducible-ends-and-one-instanton-compactification
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: Simon K. Donaldson, An Application of Gauge Theory to the Topology of 4-Manifolds
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/donaldson.pdf
      locator: Theorem 1, printed p. 280; complete argument §§I.2–I.5, II.1–II.4, III.1–III.4 and Appendix
    - title: Tim Perutz, Lectures on Gauge Theory and Symplectic Geometry
      url: https://web.ma.utexas.edu/users/perutz/GaugeTheory/FullCourse.pdf
      locator: §24, pp. 119–126; independent Seiberg–Witten/Elkies route, comparison only
---

## Statement

Let $X$ be a compact connected smooth simply connected oriented four-manifold. If its integral intersection form is positive definite, then there is an integral basis of $H_2(X;\mathbb Z)/\operatorname{Tor}$ in which the form is the identity matrix. Equivalently, the integral intersection lattice is isometric to the standard diagonal lattice $\mathbb Z^{b_2(X)}$ with dot product.

## Statement references

[Donaldson, *An Application of Gauge Theory to the Topology of 4-Manifolds*, Theorem 1](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/donaldson.pdf)

[Perutz, *Lectures on Gauge Theory and Symplectic Geometry*, §24](https://web.ma.utexas.edu/users/perutz/GaugeTheory/FullCourse.pdf)

## Facts & Assumptions

**Given:** A compact connected smooth simply connected oriented four-manifold with positive-definite integral intersection form.

[F1] The integral lattice and positive-definite convention are fixed by the local intersection-lattice definition. [[def-integral-intersection-lattice-of-a-simply-connected-four-manifold]]

[F2] The specified ASD route uses $F_A^-=0$ and $c_2(P)[X]=-1$ on the positive-definite orientation. [[def-asd-moduli-fredholm-index-and-lattice-setup]]

## Proof

**Given:** The smooth simply connected positive-definite manifold in the statement and the sign-fixed gauge setup [F1]–[F2].

1.1 The lattice target is the integral intersection pairing [F1], which is unimodular for a closed simply connected four-manifold; the ASD route is fixed by [F2]. [given, F1, F2]

1.2 A proof that the lattice is diagonal requires the index, regularity/orientation, compactness/removability, Taubes existence, and reducible-end/compactification arguments in the unresolved modules listed in `deps`. They are not established by the statement [F1] or by citing Donaldson's article, so the proof stops before the diagonalization conclusion. [F1, step 1.1]

## Unresolved proof obligations

The source's proof requires the local index theorem, generic regularity and orientability, Weitzenböck exclusion of unwanted solutions, Uhlenbeck compactness and removability, Taubes's irreducible instanton construction, and reducible-end/spectral-flow analysis of the compactified moduli bordism. The exact current-batch interfaces are [F2] and the five gauge modules listed in `deps`; their bodies explicitly retain the missing arguments. The source's appendix is an outline and refers back to the cited analytic theorems. The Perutz notes prove an independent Seiberg–Witten route and do not discharge the controlling ASD obligations. The diagonalization statement is recorded accurately, but this item is escalated and must not be used as a ready proof supplier.
