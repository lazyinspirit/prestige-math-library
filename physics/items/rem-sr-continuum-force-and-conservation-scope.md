---
id: rem-sr-continuum-force-and-conservation-scope
kind: remark
title: "The two force carriers and the scope of continuum conservation"
status: draft
origin: pipeline
domain: physics
physical_scope: "Flat affine Minkowski spacetime; scope remarks on the force vocabulary, the conditional character of the conservation statements and the exclusions of the continuum framework. No gravity, electromagnetic coupling, equation of state, energy condition, angular-momentum theorem or empirical premise is asserted anywhere on this page."
deps: [def-sr-proper-time-derivative-and-four-force, post-sr-massive-particle-dynamics, def-sr-stress-energy-tensor-and-force-density, pthm-sr-local-stress-energy-conservation, post-sr-matter-isolation-and-total-stress-energy, pthm-sr-integrated-conservation-for-isolated-matter]
dependency_roles:
  def-sr-proper-time-derivative-and-four-force: formulation-prerequisite
  post-sr-massive-particle-dynamics: physical-assumption
  def-sr-stress-energy-tensor-and-force-density: formulation-prerequisite
  pthm-sr-local-stress-energy-conservation: physical-result
  post-sr-matter-isolation-and-total-stress-energy: physical-assumption
  pthm-sr-integrated-conservation-for-isolated-matter: physical-result
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t; Chapter 9 pp. 179-197: 9.1 pp. 179-182 (current vector, flux, charge conservation), 9.2 pp. 183-191 (stress-energy tensor, conservation and flux, symmetry, dust, rank-2 transformation law, pressure, perfect fluid, worked examples, energy conditions), 9.3 pp. 192-197 (Gauss's theorem, integral conservation laws, the energy-momentum vector, angular momentum); the printed 9.2.8 dominant energy condition p. 191 has the defective |P| > rho and is not used"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "D. Tong, General Relativity, University of Cambridge Part III Mathematical Tripos (Michaelmas Term 2019); c = 1 formulas converted to x^0 = c t; 4.5.1-4.5.5 printed pp. 181-191: scalar-field action (4.42)-(4.43) and equation of motion, Hilbert energy-momentum tensor (4.46), diffeomorphism invariance and conservation (4.50), flat-space Noether form, scalar tensor (4.51), Maxwell tensor (4.52), perfect fluid (4.53) with conservation equations (4.54)-(4.55), and the flat-space conserved-charge box argument of 4.5.5"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1 printed pp. 28-30 (energy-momentum tensor, dust T^{mu nu}=rho U^mu U^nu (1.106), perfect fluid (1.107)-(1.110), scalar and Maxwell tensors (1.111)-(1.112), conservation (1.113) with the remark that the proof follows from each matter model's equations of motion) and Chapter 5 printed pp. 138-139 (on-shell conservation from diffeomorphism invariance with compact-support variations, (5.34)-(5.38))"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Two force carriers

The force vocabulary of this framework has two distinct mathematical carriers. On a massive particle worldline the four-force is $F=\dot P=dP/d\tau$ ([[def-sr-proper-time-derivative-and-four-force]]), and its identities are conditional on the adopted particle dynamics [[post-sr-massive-particle-dynamics]]. In the continuum the force carrier is the four-force density $f^b=\partial_aT^{ab}$ of a symmetric type-$(2,0)$ field ([[def-sr-stress-energy-tensor-and-force-density]]). Neither object is a force law: the definition of $\dot P$ asserts no equation of motion, and the definition of $f$ asserts no conservation and no interaction.

## Conservation is conditional

The page's conservation statements are conditional deductions. Local conservation of the scalar, dust and fluid tensors is proved from the adopted model equations of [[pthm-sr-local-stress-energy-conservation]]; for any other matter the conservation of $T$ must be adopted or derived separately, and no conservation is asserted for an arbitrary prescribed symmetric field. Integrated conservation additionally requires the isolation premise of [[post-sr-matter-isolation-and-total-stress-energy]] and is asserted only for finite boxes and slices in one inertial chart [[pthm-sr-integrated-conservation-for-isolated-matter]]; it does not supply a four-vector transformation law for the slice integrals and does not extend to noncompact regions.

## Exclusions

The framework contains no gravity, no electromagnetic coupling, no derivation of an equation of state, no energy conditions — the printed dominant-energy-condition inequality of the Crowell source p. 191 is defective and is not used — no angular-momentum theorem and no empirical premise; no measurement, apparatus or uncertainty claim is made anywhere on this page. The energy conditions, the electromagnetic field stress tensor and its coupling to charged matter, and angular-momentum flux are developed, if at all, by other frameworks or pairs of the library, not here.
