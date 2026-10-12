---
id: rem-nrqm-state-geometry-scope-and-empirical-status
kind: remark
domain: physics
title: "Scope audit of the state-geometry page: what is mathematics, what is
  adopted, and what is deferred"
status: draft
origin: pipeline
dependency_level: 8
deps:
  [
    def-nrqm-state-geometry-framework-state-space,
    pthm-nrqm-state-geometry-pure-preparation-phase-invariance,
    pthm-nrqm-state-geometry-mixtures-and-extremal-preparations,
    def-nrqm-state-geometry-state-vectors-and-rays,
    lem-nrqm-state-geometry-normalization-and-phase-classes,
    lem-nrqm-state-geometry-ray-to-rank-one-projection,
    def-nrqm-state-geometry-pure-mixed-states-and-purity,
    lem-nrqm-state-geometry-density-set-convex-and-complete,
    lem-nrqm-state-geometry-purity-criterion,
    lem-nrqm-state-geometry-extreme-points-of-the-state-space,
    post-nrqm-framework-state-and-composition
  ]
dependency_roles:
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  pthm-nrqm-state-geometry-pure-preparation-phase-invariance: operational-prerequisite
  pthm-nrqm-state-geometry-mixtures-and-extremal-preparations: operational-prerequisite
  def-nrqm-state-geometry-state-vectors-and-rays: operational-prerequisite
  lem-nrqm-state-geometry-normalization-and-phase-classes: operational-prerequisite
  lem-nrqm-state-geometry-ray-to-rank-one-projection: operational-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: operational-prerequisite
  lem-nrqm-state-geometry-density-set-convex-and-complete: operational-prerequisite
  lem-nrqm-state-geometry-purity-criterion: operational-prerequisite
  lem-nrqm-state-geometry-extreme-points-of-the-state-space: operational-prerequisite
  post-nrqm-framework-state-and-composition: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A scope audit of the state-geometry pair: it separates the
  mathematical layer (rays, normalization, rank-one projections, convexity,
  purity and extremality of the state space) from the readings of the state
  postulate adopted on the framework page, records that this page adopts no new
  physical assumption and no empirical claim, and lists the deliberate
  deferrals: observable consequences of phase, the probability law, measurement
  models, superselection and identical-particle sectors, and the photon
  interpretation of two-level polarization vectors. The remark proves nothing
  and asserts no observation."
sources:
  references:
    - title: "J. Preskill, Lecture Notes for Ph219/CS219: Quantum Information, Chapter
        2 (updated July 2015), Sections 2.1 and 2.5.5, printed pages 3-4 and
        34-35: rays versus normalized vectors, and the ambiguity of the ensemble
        interpretation"
      url: "https://preskill.caltech.edu/ph219/chap2_15.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 6.3,
        printed pages 121-126: pure and impure states, and the remark that an
        impure state is not a pure state with unknown parameters"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 2.1, printed pages 55-58 (PDF pages 66-69): the axiomatic status
        of the state space and the separability assumption"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Scope of the state-geometry page

This remark audits the status of the items of the pair. It records which statements are conditional mathematics, which are readings of an adopted model assumption, and which questions are deliberately left to other pages. It proves nothing and asserts no empirical result.

**Mathematical layer, independent of any physical assumption.** The items [[def-nrqm-state-geometry-state-vectors-and-rays]], [[lem-nrqm-state-geometry-normalization-and-phase-classes]], [[lem-nrqm-state-geometry-ray-to-rank-one-projection]], [[def-nrqm-state-geometry-pure-mixed-states-and-purity]], [[lem-nrqm-state-geometry-density-set-convex-and-complete]], [[lem-nrqm-state-geometry-purity-criterion]] and [[lem-nrqm-state-geometry-extreme-points-of-the-state-space]] are theorems and definitions of mathematics. They use only published or previously authored mathematical items, assume the stated choice hypotheses of those suppliers, and would be true of any complex Hilbert space regardless of any physical interpretation. In particular, the convexity of the state space, the criterion that purity is trace of the square, and the identification of the extreme points with the pure states carry no physical premise.

**The adopted state postulate is homed on the framework page.** The model assumption that a system is assigned a nonzero separable complex Hilbert space, that pure preparations are its unit rays and that general preparations are its density operators is clause-level content of [[post-nrqm-framework-state-and-composition]], authored on the framework page of this category. The present page does not restate it as a second postulate; [[def-nrqm-state-geometry-framework-state-space]] only fixes the readings of its clauses in the geometry vocabulary, and the two physical theorems [[pthm-nrqm-state-geometry-pure-preparation-phase-invariance]] and [[pthm-nrqm-state-geometry-mixtures-and-extremal-preparations]] are conditional consequences of it together with the mathematical layer. No new physical assumption is adopted anywhere on this page.

**No observable consequence of phase is claimed here.** The two physical theorems use the redundancy of the unit representative and of phase factors only at the level of the assigned density operator. That a global phase has no consequence for any outcome probability is a statement about the framework's probability law and is not asserted on this page; the probability law, the moment conditions and the role of the phase in interferences belong to the observable and Born-probability items of this category.

**Ensembles are not determined by states.** The state postulate states, and the companion page exemplifies, that distinct weighted ensembles of pure preparations can determine the same density operator. This is a feature of the model's state assignment and not a claim that the model is incomplete, that nature is classical, or that some ensemble is the physically realized one. The mixture weights are classical preparation weights; they are not amplitudes, and no coherence between the alternatives of a mixture is asserted.

**Deliberate deferrals and exclusions.** The page adopts no superselection restriction, no identical-particle symmetry sector, no external field or radiation content and no measurement model; those are separate assumptions of the framework adopted on the pages that name them. The two-level vector space of the fixed-mode examples is treated purely as a two-dimensional Hilbert space; the identification of its vectors with photon polarization states, and any statement about photon number, energy or momentum, is deferred to the radiation assumptions of the category and is not made here.

**Empirical status.** No item of this page reports, predicts or compares a measured outcome. The worked checks of the companion page are finite computations verifying the definitions and the mathematical lemmas; they are not experiments, they use no data, and agreement of the model with any dataset is not established by them.
