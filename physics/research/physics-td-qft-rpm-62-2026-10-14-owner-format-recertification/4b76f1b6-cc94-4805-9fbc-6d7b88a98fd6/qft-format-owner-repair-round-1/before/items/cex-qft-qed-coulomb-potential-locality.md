---
id: cex-qft-qed-coulomb-potential-locality
kind: counterexample
title: Coulomb potential has nonlocal equal-time commutator
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 4
deps:
  - def-countable-choice
  - lem-qft-photon-smeared-potential
  - lem-qft-photon-transverse-projector-kernel
  - lem-smooth-bump-between-concentric-euclidean-balls
dependency_roles:
  def-countable-choice: mathematical-premise
  lem-qft-photon-smeared-potential: mathematical-premise
  lem-qft-photon-transverse-projector-kernel: mathematical-premise
  lem-smooth-bump-between-concentric-euclidean-balls: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, Chapter 6, §§6.2.1 and 6.4
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
      locator: Complete author-hosted HTML chapter 6; Coulomb-gauge transverse projector and nonlocal potential commutator.
    - title: Mark Srednicki, Quantum Field Theory, author-hosted 2006 book draft, §§55–56
      url: https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete 616-page book draft; Coulomb gauge and transverse photon field.
---

## Statement

Assume Countable Choice and the transverse-projector kernel of [[lem-qft-photon-transverse-projector-kernel]]. The equal-time commutator in [[lem-qft-photon-smeared-potential]] is
$$[A_i(\mathbf x),E_j(\mathbf y)]
=-i\left(\delta_{ij}\delta^3(\mathbf x-\mathbf y)+\partial_i\partial_jG(\mathbf x-\mathbf y)\right),\qquad
G(\mathbf x)=\frac1{4\pi|\mathbf x|}.$$
For $i=j=1$ and $\mathbf x-\mathbf y$ on the nonzero $x_1$ axis, the off-diagonal kernel is
$$\partial_1^2G(\mathbf x-\mathbf y)=\frac{2}{4\pi|\mathbf x-\mathbf y|^3}>0.$$
Thus the Coulomb-gauge potential has a nonzero commutator kernel away from the diagonal and is not a local observable. This counterexample does not imply nonlocality of the gauge-invariant field strength.

## Facts & Assumptions

**Given:** Countable Choice; the equal-time potential commutator; the Newtonian projector-kernel identity and its off-origin derivative; and compact smooth test functions.

[A1] Assume Countable Choice. [[def-countable-choice]]

[F1] At equal time, $[A_i(\mathbf x),E_j(\mathbf y)]=-iP_{T,ij}(-i\nabla)\delta^3(\mathbf x-\mathbf y)$. [[lem-qft-photon-smeared-potential]]

[F2] $P_{T,ij}\delta^3=\delta_{ij}\delta^3+\partial_i\partial_jG$, and on the nonzero $x_1$ axis $\partial_1^2G=2/(4\pi r^3)>0$. [[lem-qft-photon-transverse-projector-kernel]]

[F3] Every open ball contains a nonnegative compactly supported smooth bump positive on a smaller ball. [[lem-smooth-bump-between-concentric-euclidean-balls]]

## Proof

**Given:** [A1], [F1]–[F3].

1.1 Choose a nonzero point $z_0$ on the $x_1$ axis. By [F2], the $11$ commutator kernel is continuous and strictly positive on a sufficiently small neighborhood of $z_0$. [A1, F2, given]

1.2 Choose nonnegative smooth tests $f,g$ from [F3], supported in small disjoint balls centered at points whose difference is $z_0$, with the difference of their supports contained in that neighborhood. The delta term in [F1] pairs to zero because the supports are disjoint, while the integral against the strictly positive off-diagonal kernel from step 1.1 is positive. Hence the commutator pairing is nonzero for disjoint supports, so its kernel is not supported on the diagonal. The potential is nonlocal; the separate field-strength locality result is unaffected. [F1, F3, step 1.1, given] ∎
