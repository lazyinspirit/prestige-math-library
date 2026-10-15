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
      url: "https://arxiv.org/html/1102.0529v3"
      locator: "Full text inspected; §1.2 and §22.1 on the singular point-charge field and the regular-field/tail formulation."
    - title: "Samuel E. Gralla, Abraham I. Harte, and Robert M. Wald, A Rigorous Derivation of Electromagnetic Self-force, Physical Review D 80, 024031 (2009)"
      url: "https://arxiv.org/pdf/0905.2391"
      locator: "Complete 52-page paper inspected; §§I–III, V–VI, including the one-parameter small-body family, first-order corrections, and the authors’ qualified reduced-order discussion."
verification: {}
physical_scope: "Scope remark separating prescribed-field LL/LAD effective equations, finite-body moments and literature results for a specific shrinking-body family. It supplies no point-charge self-field, universal fixed-charge point limit, or quantitative global accuracy claim."
empirical_premises: []
---

## Remark

The present pair prescribes an external field and adopts the flat LAD equation as a separate effective model. It does not construct a coupled Maxwell field sourced by a point charge or evaluate a self-field on the worldline. [[def-rpm-body-moments]] defines moments for a smooth finite body (and a local curved moment convention); its definitions do not assert a point limit or a self-force law.

The point-charge field is singular on the worldline, as reviewed by Poisson, Pound, and Vega; a self-force treatment therefore requires a specified regularization or extended-body limiting argument. Gralla, Harte, and Wald prove results for a particular one-parameter family of exact flat Maxwell–matter solutions in which body size, charge, and mass scale toward zero while the charge-to-mass ratio has a limit. Their leading motion is Lorentz-force motion and their first-order description includes self-force and multipole corrections. Their separate reduced-order discussion is qualified to regimes with negligible dipole and spin contributions. These results do not establish an unrestricted fixed-charge point construction, arbitrary-duration global accuracy, or the physical truth of the separately adopted postulate [[post-rpm-lad-effective-equation]].

## Facts & Assumptions

**Given:** The finite-body moment definitions of [[def-rpm-body-moments]], the adopted-model status of [[post-rpm-lad-effective-equation]], and the cited literature statements with the restrictions just summarized.

[F1] [[def-rpm-body-moments]]: the flat moments are defined by integrals of a smooth stress-energy tensor with spatially compact support; the local curved moments are also definitions, and the supplier explicitly asserts no slice independence or MPD equation.

[F2] [[post-rpm-lad-effective-equation]]: LAD is adopted here as a prescribed-field effective equation, not derived by evaluating a Maxwell self-field on the worldline.

[L1] Poisson, Pound, and Vega, §§1.2 and 22.1, review the singular point-charge field and the regular-field/tail treatment. Gralla, Harte, and Wald, §§I–III and V–VI, prove results for a specified shrinking-body family and state a separately qualified reduced-order discussion; the source details and dispositions are recorded in this batch’s coverage evidence.

## Proof

1.1 The flat moments and local curved moments in [F1] are definitions for smooth finite-body stress-energy data; the supplier explicitly says no slice-independence theorem or equation of motion is asserted. Thus these moment definitions alone do not specify a point-particle limit or a value of the self-field on the representative worldline. [F1]

2.1 The LAD equation in [F2] is adopted for a prescribed external field and makes no source construction. Together with the restricted literature results [L1], this establishes the scope of this remark: those specific shrinking-body results do not convert the adopted postulate into an unrestricted fixed-charge point construction or arbitrary-duration global accuracy theorem. The historical source claims remain reports with their own hypotheses, not proofs supplied by this item. [F2, L1, step 1.1] ∎

