---
id: lem-asd-regularity-perturbation-and-orientability
kind: lemma
title: Generic regularity and orientability for the sign-fixed self-dual moduli problem
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-asd-moduli-fredholm-index-and-lattice-setup
  - thm-asd-deformation-complex-index-formula
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
      locator: §§II.2–II.4, printed pp. 290–294; perturbation transversality and determinant-line orientability
---

## Statement

Let $X$ be a closed simply connected oriented Riemannian four-manifold with positive-definite intersection form, and let $P\to X$ be an $SU(2)$-bundle with $c_2(P)[X]=-1$. Use Sobolev completions of the sign-fixed equation $F_A^-=0$ and quotient the irreducible connections by the based gauge group. In any relatively compact open set in the irreducible configuration quotient covered by finitely many Coulomb slices, let $\Phi$ be the section given by the anti-self-dual curvature. The allowed perturbations are smooth gauge-equivariant sections supported in that open set whose slice derivatives are compact operators from the first Sobolev tangent spaces to the zeroth Sobolev target spaces. The perturbations for which $\Phi+\sigma$ is transverse to zero on that set form an open dense subset in the topology of uniform convergence of the section and its slice derivative on compact sets. For every resulting regular moduli space, the determinant line of its real Fredholm deformation operator is orientable.

## Statement references

[Donaldson, *An Application of Gauge Theory to the Topology of 4-Manifolds*, §§II.2–II.4](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/donaldson.pdf)

## Facts & Assumptions

**Given:** The sign-fixed deformation setup and its index formula.

[F1] $F_A^-=0$ and the Sobolev deformation operator are fixed in the local setup definition. [[def-asd-moduli-fredholm-index-and-lattice-setup]]

[F2] The expected dimension is the real Fredholm index of that operator. [[thm-asd-deformation-complex-index-formula]]

[L1] `lem-asd-permitted-perturbations-sard-smale-regularity` is a proposed A-page supplier for transversality in the stated allowed perturbation class; it is not currently supplied.

[L2] `lem-asd-determinant-line-orientability` is a proposed A-page supplier for the family-index orientation calculation; it is not currently supplied.

## Proof

**Given:** The local operator [F1], expected-index interface [F2], and the explicit perturbation class in the statement.

1.1 The setup [F1] fixes the Sobolev deformation operator, and [F2] fixes its expected dimension; the statement asks for regularity after perturbation and an orientation of its determinant line. [given, F1, F2]

1.2 The open-dense transversality conclusion needs [L1], and orientability needs [L2]. These analytic/family-index arguments are not contained in [F1]–[F2], so no regularity or orientability conclusion is proved here. [F1, F2, L1, L2, step 1.1]

## Unresolved proof obligations

The source uses Coulomb slices, a Banach bundle over the irreducible quotient, compactness of the perturbation derivative, an open-and-dense transversality argument, and a family-index calculation for orientability. This carrier records the precise local interface and source locators, but it does not reproduce those analytic arguments or the determinant-line calculation. No generic-regularity or orientation claim is certified as proved here. Supply complete slice, Sard/Sard–Smale, and family-index proofs with the stated allowed perturbation class before marking ready.
