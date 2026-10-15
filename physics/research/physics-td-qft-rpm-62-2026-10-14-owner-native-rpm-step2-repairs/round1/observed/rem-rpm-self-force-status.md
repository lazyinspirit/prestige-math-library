---
id: rem-rpm-self-force-status
kind: remark
title: "Self-force status and point-particle limits"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 3
provenance:
  statement: literature-derived
  proof: not-applicable
proof_strategy: direct
deps:
  - def-rpm-body-moments
  - post-rpm-lad-effective-equation
dependency_roles:
  def-rpm-body-moments: formulation-prerequisite
  post-rpm-lad-effective-equation: formulation-prerequisite
sources:
  references:
    - title: "Eric Poisson, Adam Pound, and Ian Vega, The Motion of Point Particles in Curved Spacetime, Living Reviews in Relativity 14 (2011)"
      url: "https://link.springer.com/article/10.12942/lrr-2011-7"
      locator: "Relevant Springer article text inspected; §22.1 introduces the point-charge equations and singularity on the worldline; §§22.2–22.6 develop the electromagnetic field near the worldline, singular/regular split, tail, and equation of motion, particularly §22.6."
    - title: "Samuel E. Gralla, Abraham I. Harte, and Robert M. Wald, A Rigorous Derivation of Electromagnetic Self-force, Physical Review D 80, 024031 (2009)"
      url: "https://arxiv.org/pdf/0905.2391"
      locator: "Relevant text inspected; §II, assumptions (i)–(ii), assumes a one-parameter family with the stated support/scaling form and a retarded self-field plus a jointly smooth homogeneous external field, satisfying Maxwell's equations, current conservation, and total-stress-energy conservation; §IV derives the first-order correction; §§V–VI discuss a qualified reduction-of-order formulation. The paper assumes rather than constructs such a family."
verification: {}
physical_scope: "Scope remark separating prescribed-field LL/LAD effective equations, finite-body moments and literature results for a specific shrinking-body family. It supplies no point-charge self-field, universal fixed-charge point limit, or quantitative global accuracy claim."
empirical_premises: []
---

## Remark

The present pair prescribes an external field and adopts the flat LAD equation as a separate effective model. It does not construct a coupled Maxwell field sourced by a point charge or evaluate a self-field on the worldline. [[def-rpm-body-moments]] defines moments for a smooth finite body (and a local curved moment convention); its definitions do not assert a point limit or a self-force law.

Poisson, Pound, and Vega's §22.1 records the formal point-charge equations and the singularity of the field on the worldline; §§22.2–22.6 develop the electromagnetic field near the worldline, singular/regular field split, tail, and equation of motion, particularly §22.6. A self-force calculation therefore requires a specified regularization or extended-body limiting argument. Gralla, Harte, and Wald's conclusions are conditional on assuming a one-parameter family $(F_{\mu\nu}(\lambda),J^\mu(\lambda),T^M_{\mu\nu}(\lambda))$ of exact solutions to Maxwell's equations, current conservation, and total stress-energy conservation, with the support/scaling hypothesis (i) of their §II and a field decomposition satisfying hypothesis (ii): a retarded self-field plus an external homogeneous Maxwell solution jointly smooth in $\lambda$ and spacetime. In that scaling limit the body size, charge, and mass tend to zero while the charge-to-mass ratio has a finite limit; the paper does not construct such a family or a constitutive matter model. Under those assumptions, the leading motion is Lorentz-force motion and §IV derives the first-order correction, including self-force, electromagnetic-dipole, and spin terms. In §§V–VI the authors discuss and qualify a self-consistent reduction-of-order formulation; the reduced-order ALD case is tied to negligible spin and electromagnetic-dipole contributions. These conditional results do not establish an unrestricted fixed-charge point construction, arbitrary-duration global accuracy, or the physical truth of the separately adopted postulate [[post-rpm-lad-effective-equation]].

## Facts & Assumptions

**Given:** The finite-body moment definitions of [[def-rpm-body-moments]], the adopted-model status of [[post-rpm-lad-effective-equation]], and the cited literature statements with the restrictions just summarized.

[F1] [[def-rpm-body-moments]]: the flat moments are defined by integrals of a smooth stress-energy tensor with spatially compact support; the local curved moments are also definitions, and the supplier explicitly asserts no slice independence or MPD equation.

[F2] [[post-rpm-lad-effective-equation]]: LAD is adopted here as a prescribed-field effective equation, not derived by evaluating a Maxwell self-field on the worldline.

[L1] Poisson, Pound, and Vega, §22.1 and §§22.2–22.6, review the formal point-charge equations, singular field, regular-field decomposition, and tail term, particularly in §22.6. Gralla, Harte, and Wald, §II, assumptions (i)–(ii), state the assumed family and support/field hypotheses; §IV gives the first-order correction, and §§V–VI discuss the qualified reduction-of-order formulation.

## Proof

1.1 The flat moments and local curved moments in [F1] are definitions for smooth finite-body stress-energy data; the supplier explicitly says no slice-independence theorem or equation of motion is asserted. Thus these moment definitions alone do not specify a point-particle limit or a value of the self-field on the representative worldline. [F1]

2.1 The LAD equation in [F2] is adopted for a prescribed external field and makes no source construction. Together with the restricted literature results [L1], this establishes the scope of this remark: those specific shrinking-body results do not convert the adopted postulate into an unrestricted fixed-charge point construction or arbitrary-duration global accuracy theorem. The historical source claims remain reports with their own hypotheses, not proofs supplied by this item. [F2, L1, step 1.1] ∎

