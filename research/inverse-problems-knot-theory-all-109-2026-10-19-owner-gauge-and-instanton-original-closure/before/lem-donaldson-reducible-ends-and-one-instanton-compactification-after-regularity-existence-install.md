---
id: lem-donaldson-reducible-ends-and-one-instanton-compactification
kind: lemma
title: Reducible ends and compactification of the one-instanton moduli space
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-asd-moduli-fredholm-index-and-lattice-setup
  - def-axiom-of-choice
  - lem-asd-regularity-perturbation-and-orientability
  - lem-uhlenbeck-compactness-and-removable-singularities
  - lem-taubes-positive-definite-instanton-existence
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
      locator: §§II.1–II.4 and III.3–III.4, printed pp. 287–294 and 302–315; reducible slices, spectral flow, and Taubes end
---

## Statement

Assume full AC. Let $X$ be a closed simply connected oriented smooth four-manifold with positive-definite intersection form, let $P\to X$ have structure group $SU(2)$ and $c_2(P)[X]=-1$, and choose a regular perturbation of $F_A^-=0$ with the determinant-line orientation from the regularity module. The compactification of the resulting five-dimensional one-instanton moduli space is an oriented compact five-manifold whose boundary consists of the Taubes small-instanton end, identified with $X$, and the links of the finitely many reducible ends. Each reducible link and its boundary orientation are determined by the local circle-stabilizer slice and its spectral-flow label. No other boundary strata occur.

## Statement references

[Donaldson, *An Application of Gauge Theory to the Topology of 4-Manifolds*, §§II.1–II.4 and III.3–III.4](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/donaldson.pdf)

## Facts & Assumptions

**Given:** The sign-fixed moduli setup, regular perturbation and orientation, compactness/removability, and Taubes instanton existence.

[F1] The moduli set and deformation operator use $F_A^-=0$ and charge $c_2(P)[X]=-1$. [[def-asd-moduli-fredholm-index-and-lattice-setup]]

[F2] On the actual unbased $H^3/H^4$ quotient, finite bounded Coulomb-slice collars and bounded $H^3$-valued smoothing sections give open dense transverse perturbations and an orientable five-dimensional zero set. This is a local finite-slice interface; it does not state that arbitrary perturbations preserve a prescribed end. [[lem-asd-regularity-perturbation-and-orientability]]

[F3] Convergent subsequences, bubble points, and removable singularities are the compactness input. [[lem-uhlenbeck-compactness-and-removable-singularities]]

[F4] A smooth irreducible self-dual connection exists for the given metric and charge-minus-one bundle. This is existence only; an end parametrization, inverse gluing and its completeness still require [L2]. [[lem-taubes-positive-definite-instanton-existence]]

[L1] `lem-asd-reducible-connection-classification-and-spectral-flow` is the proposed A-page supplier for the reducible classification and signed link labels; it is not currently supplied.

[L2] `thm-taubes-small-instanton-gluing-and-compactified-end` is the proposed A-page supplier for the end parametrization and inverse gluing map; it is not currently supplied.

## Proof

**Given:** The moduli setup and the four preceding interfaces [F1]–[F4].

1.1 The prior modules specify the equation, the actual finite-slice unbased regularity and orientation interface, compactness and removability for unperturbed self-dual sequences, and existence of an irreducible connection. They do not turn that existence assertion into an end theorem. [F1, F2, F3, F4]

1.2 They do not classify reducible strata or prove the compactified end and its boundary orientations; these require [L1] and [L2]. The claimed compact five-manifold and complete boundary description are therefore not concluded here. [L1, L2, step 1.1]

## Unresolved proof obligations

The controlled reducible preparation, the Taubes end parametrization and inverse, and exclusion of all other ends are still required before this original can be closed. The Statement’s unqualified regular-perturbation wording also requires an explicit compatibility completion: perturb the reducible Kuranishi models as prescribed and regularize only a compact middle region, preserving the small-instanton end. Generic irreducible transversality alone does not supply this. Donaldson’s compactification has cone singularities at reducibles; deleting smaller cone neighborhoods gives the smooth projective boundary links. Its printed pp.280–281 explicitly leave the projective orientation signs undetermined at that stage, so no spectral-flow calculation or common link sign is inferred from the preceding modules. This item remains held pending the actual complete end proof and the corresponding precise Statement completion.
