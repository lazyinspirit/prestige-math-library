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
  - def-axiom-of-choice
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

Assume full AC. Let $X$ be a compact connected smooth simply connected oriented four-manifold. If its integral intersection form is positive definite, then there is an integral basis of $H_2(X;\mathbb Z)/\operatorname{Tor}$ in which the form is the identity matrix. Equivalently, the integral intersection lattice is isometric to the standard diagonal lattice $\mathbb Z^{b_2(X)}$ with dot product.

## Statement references

[Donaldson, *An Application of Gauge Theory to the Topology of 4-Manifolds*, Theorem 1](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/donaldson.pdf)

[Perutz, *Lectures on Gauge Theory and Symplectic Geometry*, §24](https://web.ma.utexas.edu/users/perutz/GaugeTheory/FullCourse.pdf)

## Facts & Assumptions

**Given:** A compact connected smooth simply connected oriented four-manifold with positive-definite integral intersection form.

[F1] The integral lattice and positive-definite convention are fixed by the local intersection-lattice definition. [[def-integral-intersection-lattice-of-a-simply-connected-four-manifold]]

[F2] The specified ASD route uses $F_A^-=0$ and $c_2(P)[X]=-1$ on the positive-definite orientation. [[def-asd-moduli-fredholm-index-and-lattice-setup]]

[F3] The actual index, unbased finite-slice smoothing regularity/determinant orientation, and curved-metric Uhlenbeck compactness/removability are supplied by the completed preceding modules. The Taubes construction supplies existence for the actual metric and bundle, without consuming generic regularity and without asserting an inverse end. [[thm-asd-deformation-complex-index-formula]] [[lem-asd-regularity-perturbation-and-orientability]] [[lem-uhlenbeck-compactness-and-removable-singularities]] [[lem-taubes-positive-definite-instanton-existence]]

[A1] Full AC is inherited from these analytic and topological suppliers. [[def-axiom-of-choice]]

## Proof

**Given:** The smooth simply connected positive-definite manifold in the statement and the sign-fixed gauge setup [F1]–[F2].

1.1 The lattice target is the integral intersection pairing [F1], which is unimodular for a closed simply connected four-manifold; the ASD route is fixed by [F2]. [given, F1, F2]

1.2 The preceding completed analytic constructions [F3] supply the index, actual unbased regularity/orientation, compactness/removability and Taubes existence. They do not yet supply the controlled cut end/bordism with projective reducible links, the inverse small-instanton parametrization or exhaustion of all ends. Those remain the actual held obligations of the original end module in `deps`; without that bordism the final lattice argument is not concluded here. [F1, F3, A1, step 1.1]

## Unresolved proof obligations

The remaining controlling ASD obligation is the complete compatible perturbation and cut one-instanton end/bordism construction, including charge-one spherical-model classification, inverse small-instanton gluing and exhaustion. The preceding index, actual finite-slice regularity/orientation, curved Uhlenbeck and given-bundle existence proofs [F3] are no longer blanket missing proofs. Once the end bordism is supplied, its induced projective-link signs and oriented signature inequality must be combined with the finite integral norm-one-vector argument; neither a common link sign nor a missing inverse-end theorem is inferred from generic regularity. The Perutz route remains comparison context and does not replace this controlling ASD route. The original diagonalization conclusion remains held; no proof acceptance is asserted here.
