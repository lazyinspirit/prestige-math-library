---
id: rem-nrqm-approximations-examples-scope-limits
aliases: [nrqm-approximations-examples-scope-limits]
kind: remark
domain: physics
title: "What the controlled-approximations examples establish and what they do not"
status: draft
origin: session
dependency_level: 16
deps: [ex-nrqm-approximations-two-level-finite-gap-correction, ex-nrqm-approximations-stark-finite-level-shift, ex-nrqm-approximations-zeeman-multiplet-splitting, ex-nrqm-approximations-smooth-barrier-tunnelling-limits, pthm-nrqm-approximations-nondegenerate-perturbation-expansion, pthm-nrqm-approximations-degenerate-first-order-splitting, pthm-nrqm-approximations-barrier-transmission-asymptotics, post-nrqm-approximations-static-finite-level-dipole-coupling, rem-nrqm-approximations-scope-and-empirical-status]
dependency_roles:
  ex-nrqm-approximations-two-level-finite-gap-correction: formulation-prerequisite
  ex-nrqm-approximations-stark-finite-level-shift: formulation-prerequisite
  ex-nrqm-approximations-zeeman-multiplet-splitting: formulation-prerequisite
  ex-nrqm-approximations-smooth-barrier-tunnelling-limits: formulation-prerequisite
  pthm-nrqm-approximations-nondegenerate-perturbation-expansion: physical-result
  pthm-nrqm-approximations-degenerate-first-order-splitting: physical-result
  pthm-nrqm-approximations-barrier-transmission-asymptotics: physical-result
  post-nrqm-approximations-static-finite-level-dipole-coupling: physical-assumption
  rem-nrqm-approximations-scope-and-empirical-status: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A scope record for the examples companion of the controlled-approximations pair: the four conditional computations it contains, their model reliance, the checks they perform and the content they do not supply (no experiment, no measured value, no laboratory identification, no transition or relaxation)."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 9.1 printed pages 203-211 (PDF pages 211-219): the textbook perturbation, Stark and Zeeman families that motivate the examples, whose conjectural branch-selection sentence is not imported"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 7 'Two State Systems', Section 5 'Ammonia molecule in an electric field' printed and PDF pages 11-16: the exactly solvable two-state electric-field family used as the template for the closed-form checks"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/7c376a3b5b27e5ea586a7e37b85a05d3_MIT8_05F13_Chap_07.pdf"
verification:
  precheck: n/a
---

## Remarks

- **What the page contains.** Four conditional computations of the declared
  models of the companion A page: the exact two-level finite-gap family with
  its second-order coefficient and a finite check of the cubic remainder
  bound
  ([[ex-nrqm-approximations-two-level-finite-gap-correction]]); the finite
  level static Stark model of the declared Coulomb pair with vanishing
  first-order shift, the exact quadratic splitting and a finite check of the
  remainder bound
  ([[ex-nrqm-approximations-stark-finite-level-shift]]); the spin-one
  multiplet in a uniform field with the exact linear splitting and the
  degenerate first-order check
  ([[ex-nrqm-approximations-zeeman-multiplet-splitting]]); and the two
  tunnelling asymptotic limits, the smooth-barrier semiclassical limit and
  the exact rectangular thick-barrier prefactor
  ([[ex-nrqm-approximations-smooth-barrier-tunnelling-limits]]). Each
  computation states its model and its sources and cites the page's theorem
  it checks.

- **What the checks are.** The first two examples verify the quantitative
  remainder bound of
  [[pthm-nrqm-approximations-nondegenerate-perturbation-expansion]] on
  exactly solvable two-state families, one with a finite gap and a
  second-order shift, one with the compressed dipole coupling of
  [[post-nrqm-approximations-static-finite-level-dipole-coupling]]; the
  third verifies the first-order localisation of
  [[pthm-nrqm-approximations-degenerate-first-order-splitting]] in the
  exactly diagonalizable Zeeman family; the fourth compares two asymptotic
  limits, one covered by
  [[pthm-nrqm-approximations-barrier-transmission-asymptotics]] and one
  explicitly excluded by it. These are mathematical checks inside declared
  models, not tests of the models against data.

- **What the page does not contain.** No experiment, no measured Stark or
  Zeeman shift, no splitting value, no gyromagnetic ratio, no measured matrix element
  or polarizability value, no transmission count, no detector response, no
  apparatus, no calibration, no sampling model and no uncertainty record
  appears; the radial dipole parameter $D_{\rm rel}$ of the Stark example is
  computed exactly from the declared charge and Coulomb length scale,
  and is not measured. The examples
  assert no transition rate, no lifetime and no branch-relaxation process;
  see [[rem-nrqm-approximations-scope-and-empirical-status]] for the
  corresponding scope record of the A page.

- **Deferred content.** Empirical numerical matrix-element comparisons for concrete Coulomb
  systems, time-dependent driving, transition rates, adiabatic evolution, and
  any comparison with measured spectra belong to the driven-dynamics and
  light-matter pairs of the track; the uncompressed static-field model is
  outside the present scope by the postulate's exclusion clause.
