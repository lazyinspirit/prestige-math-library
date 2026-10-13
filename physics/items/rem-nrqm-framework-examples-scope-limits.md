---
id: rem-nrqm-framework-examples-scope-limits
kind: remark
title: "What the example and counterexample checks of this companion page establish"
status: published
origin: session
domain: physics
dependency_level: 9
deps:
  [
    ex-nrqm-framework-dimension-bookkeeping,
    ex-nrqm-framework-quantity-type-checks,
    cex-nrqm-framework-zero-mass-has-no-self-adjoint-limit,
    cex-nrqm-framework-quadratic-shear-is-not-galilean,
    cex-nrqm-framework-mean-position-can-fail-to-exist
  ]
dependency_roles:
  ex-nrqm-framework-dimension-bookkeeping: operational-prerequisite
  ex-nrqm-framework-quantity-type-checks: operational-prerequisite
  cex-nrqm-framework-zero-mass-has-no-self-adjoint-limit: operational-prerequisite
  cex-nrqm-framework-quadratic-shear-is-not-galilean: operational-prerequisite
  cex-nrqm-framework-mean-position-can-fail-to-exist: operational-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A scope audit of the worked checks of this companion page: what
  the dimension and type checks establish, which specific statements the
  counterexamples refute, and the empirical neutrality of all of them. The
  remark records status only, proves nothing new and asserts no observation."
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 3.1, printed pages 92-95 (PDF pages 104-107): probabilities from
        a projection-valued measure, for comparison with the type checks of this
        page"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "BIPM, The International System of Units (SI), 9th edition 2019, Chapter
        2 pp. 15-25: the unit conventions used in the dimension checks"
      url: "https://www.bipm.org/documents/20126/41483022/SI-Brochure-9-EN.pdf"
verification:
  precheck: n/a
---

## Scope of the worked checks

This companion page contains worked checks of the framework's conventions and refutations of specific statements about them. The status of each is as follows.

**Dimension bookkeeping.** [[ex-nrqm-framework-dimension-bookkeeping]] verifies that the quantities and displayed laws of the framework are dimensionally consistent under the conventions of [[def-nrqm-framework-quantities-and-units]]: coordinates, wave function, position and momentum acts, the canonical commutator, the kinetic and potential terms, the Schroedinger equation, the probability current and the boost phase. The check is bookkeeping inside the conventions: it contains no measured value and tests no physical equation against data.

**Type checks.** [[ex-nrqm-framework-quantity-type-checks]] verifies the mathematical types of the adopted objects on explicit finite-dimensional data: a pure preparation as a unit ray and as a rank-one density operator, a mixture of two orthogonal pure preparations as a density operator that is not pure, the action of a local observable on a product state, and the outcome law of a finite-spectrum observable as a probability measure on its possible values rather than a single deterministic outcome. These are internal consistency checks of the postulates; they establish no laboratory fact.

**Counterexample: the specified mass-zero limit.** [[cex-nrqm-framework-zero-mass-has-no-self-adjoint-limit]] refutes the specific assertion of a self-adjoint strong action limit on every Schwartz state together with finite limiting frequency at each fixed nonzero wave number: one explicit normalized compactly supported smooth state has diverging kinetic-operator norm, and each fixed normalized operator-domain state with nonzero momentum second moment has divergent kinetic expectation. Its model root-mean-square speed depends on mass and is not held fixed during this limit. The argument does not decide other notions of convergence or exclude independently specified massless models; the radiation extension is a separately adopted model.

**Counterexample: the frame class.** [[cex-nrqm-framework-quadratic-shear-is-not-galilean]] refutes the claim that every smooth time-dependent spatial translation chart of the arena is an inertial frame: the quadratic shear is a smooth bijection of the coordinate space that is not a Galilean transformation, and a curve of zero coordinate acceleration in the standard chart acquires nonzero coordinate acceleration in it. It refutes that specific frame-class claim; it adopts no force law and makes no statement about physical bodies.

**Counterexample: existence of moments.** [[cex-nrqm-framework-mean-position-can-fail-to-exist]] refutes, in a one-dimensional instance of P1 and P2, the claim that every normalized preparation has a finite position mean: an explicit normalized state with infinite second and first absolute moments is displayed. It records that the mean is the Lebesgue expectation and requires absolute integrability; it does not question the definition of the preparation or the probability law.

**Empirical neutrality.** None of the five items reports, compares or predicts a measured outcome. No experiment is described, no uncertainty is quoted and no statistical inference is drawn; the checks are mathematical consequences of the framework's stated assumptions or refutations of stated claims under explicit hypotheses, and no empirical conclusion is drawn from them.

## Remarks

- A refuted statement in the counterexamples is a specific claim about the framework's objects, not a claim about nature; a reader should not read a refutation of "every smooth translation chart is inertial" as evidence for or against any physical model.
- The checks assume the choice hypotheses recorded in their items; where a consequence uses Countable Choice or the Axiom of Choice, the assumption is declared in the item that states the consequence.
