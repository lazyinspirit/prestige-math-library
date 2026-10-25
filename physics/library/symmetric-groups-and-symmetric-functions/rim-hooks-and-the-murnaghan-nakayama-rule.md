---
page: rim-hooks-and-the-murnaghan-nakayama-rule
title: "Rim Hooks and the Murnaghan–Nakayama Rule"
status: published
requires:
  - frobenius-characteristic-and-the-symmetric-group-character-dictionary
  - outer-products-skew-specht-modules-and-littlewood-richardson
  - the-hook-length-formula-and-rsk-correspondence
items:
  - def-removable-border-strip-and-height
  - lem-hooks-correspond-to-removable-border-strips
  - thm-determinantal-form-of-a-specht-character
  - lem-character-value-on-a-full-cycle-is-supported-on-hooks
  - lem-alternating-hook-induction-cancels-disconnected-rim-removals
  - lem-restriction-to-two-block-subgroup-has-lr-multiplicities
  - prop-r-cycle-virtual-character-filter
  - thm-murnaghan-nakayama-character-rule
  - cor-no-removable-cycle-length-strip-forces-a-character-zero
  - cor-hook-divisibility-defect-zero-vanishing-criterion
  - thm-triangular-fixed-tabloid-reconstruction-of-the-character-table
examples: []
---

This page develops the rim-hook (border-strip) calculus of symmetric-group
characters and the Murnaghan–Nakayama recursion that computes every character
value from it. Removable border strips and their height are defined in
[[def-removable-border-strip-and-height]], and
[[lem-hooks-correspond-to-removable-border-strips]] identifies them with the
hooks of the diagram, with the hook lengths as their sizes.

The analytic inputs are the determinantal form of a Specht character
([[thm-determinantal-form-of-a-specht-character]]), from which the full-cycle
hook column follows ([[lem-character-value-on-a-full-cycle-is-supported-on-hooks]]),
and the alternating hook induction of
[[lem-alternating-hook-induction-cancels-disconnected-rim-removals]], in which
disconnected removable unions of skew hooks cancel. Evaluating that virtual
identity at an element with a distinguished cycle uses the restriction
multiplicities of [[lem-restriction-to-two-block-subgroup-has-lr-multiplicities]]
and yields the character rule [[thm-murnaghan-nakayama-character-rule]]; the
signed sum over strips is itself the filtered virtual character of
[[prop-r-cycle-virtual-character-filter]].

Two vanishing criteria are recorded: a missing removable strip of the relevant
cycle length forces the value to be zero
([[cor-no-removable-cycle-length-strip-forces-a-character-zero]]), and if no
hook length is divisible by a prime $p$ then the character vanishes on all
$p$-singular permutations
([[cor-hook-divisibility-defect-zero-vanishing-criterion]]). The page closes
with the fixed-tabloid (Fox–Mullineux) reconstruction of the character table
from the Gram equation
([[thm-triangular-fixed-tabloid-reconstruction-of-the-character-table]]), an
algorithm independent of the recursion.
