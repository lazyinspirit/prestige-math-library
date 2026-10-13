# Step 3a reader report — batch 54

- **Run:** `physics-cm-qm-gr-79-2026-10-11`
- **Role:** reader (`reader-54`)
- **Batch:** `54`
- **Scope:** angular momentum and spin page and its examples companion

## Opened inventory

Pages opened:

- `qm-angular-momentum-and-spin` — A page.
- `qm-angular-momentum-and-spin-examples` — B/examples page.

All 17 assigned items were opened and reviewed in dependency order:

1. `lem-nrqm-angular-momentum-product-flow-generator` — repaired.
2. `lem-nrqm-angular-momentum-su2-lift-of-the-rotation-action`.
3. `lem-nrqm-angular-momentum-orbital-casimir-identity`.
4. `post-nrqm-angular-momentum-magnetic-moment-coupling`.
5. `def-nrqm-angular-momentum-framework-angular-momentum-observables`.
6. `pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws` — repaired.
7. `pthm-nrqm-angular-momentum-orbital-eigenstates-and-quantum-numbers`.
8. `pthm-nrqm-angular-momentum-zeeman-precession`.
9. `pthm-nrqm-angular-momentum-stern-gerlach-conditional-force`.
10. `pthm-nrqm-angular-momentum-two-spin-composition`.
11. `pthm-nrqm-angular-momentum-total-conservation`.
12. `ex-nrqm-angular-momentum-spin-half-directional-probabilities`.
13. `ex-nrqm-angular-momentum-l-eigenfunctions`.
14. `ex-nrqm-angular-momentum-zeeman-toy-model`.
15. `texp-nrqm-angular-momentum-stern-gerlach-splitting` — repaired.
16. `rem-nrqm-angular-momentum-scope-and-empirical-status`.
17. `rem-nrqm-angular-momentum-examples-scope-limits` — downstream wording updated.

Dependency context inspected for the arguments included the P1, P2, P4, P5,
P6 and P7 items; the state, observable, kinematics, units, autonomous-dynamics,
and symmetry definitions; the finite-spin-matrix and finite-block-classification
suppliers; the rotation action and generator statements; the tensor-spin
composition theorem; the conditional Stern–Gerlach force theorem; and the
operator-calculus suppliers named in the repaired lemma. Statements for the
sphere-harmonic, orbital-generator, and sphere-integral suppliers were also
inspected for the orbital computations.

For the magnetic-moment and idealized Stern–Gerlach context, I opened the cited
sections of [Binney and Skinner](https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf),
Chapter 7, §§7.4.2 and 7.4.5 (printed pp. 161–163 and 168–169), and
[Zwiebach's MIT 8.05 Chapter 2 notes](https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/a56c316e4ec548d8bd0a554fac9a74e8_MIT8_05F13_Chap_02.pdf),
§§1 and 4 (chapter pp. 1–7 and 16–19). Those passages discuss spin-half coupling and idealized filters; the
assigned items make no empirical measurement claim, and no quantitative
apparatus or uncertainty claim was taken from them.

## Repairs and evidence

### `lem-nrqm-angular-momentum-product-flow-generator`

The facts used bounded Borel functional-calculus multiplication and the inverse
of `A+iλ`, although the original cited theorem on the bounded PVM integral did
not state either multiplication of functions of the same PVM or the domain
identity for the unbounded resolvent. The item now derives flow commutation from
the PVM integral's star-homomorphism property. Its resolvent fact gives the
domain estimate
`∫ μ² |(μ+iλ)⁻¹|² dE_{A,x} ≤ ||x||²`, then uses the spectral domain formula and
unbounded Borel calculus to establish both inverse identities. The item now
declares the corresponding direct mathematical dependencies and roles; its
proof-contract citations were updated.

`verification.judge` was absent. Reflow completed; precheck passed:

```text
PASS items/lem-nrqm-angular-momentum-product-flow-generator.md (direct)
1 checked, 0 failing — all clean
```

### `pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws`

The P2 outcome law applies to assigned sharp-observable pairs. The angular
momentum definition assigns the coordinate components `S_i`, while this theorem
used outcome laws for arbitrary `S_n` and for `S²` without stating the added
model readings or their units. The theorem now explicitly assigns
`(S_n, J s)` for each unit direction and `(S², (J s)²)` for its Casimir-law
clause. Fact F5 records those assignments, and proof step 3.1 now invokes the
P2 law for the stated squared-spin pair. The proof-contract derivation for step
3.1 now includes F5.

I traced the 17-item current-run dependency closure of this theorem and checked
the relevant directional-observable and outcome-law uses in its direct and
indirect consumers, including batches 55, 56 and 59. The composites and Bell
consumers either declare their local directional readouts or inherit the
spin-half projections through the declared arrangement; the Zeeman
approximation uses the already assigned coordinate component `S_3`. No
consumer repair was needed.

`verification.judge` was absent. Reflow completed; precheck passed:

```text
PASS items/pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws.md (direct)
1 checked, 0 failing — all clean
```

### `texp-nrqm-angular-momentum-stern-gerlach-splitting`

The original Statement and step 3.1 said the two final sector means differ by
`γℏGτ` independently of their initial means. The sector-rate formulas only
establish the increment of that difference. They now state and prove
`M_+(τ)-M_-(τ) = M_+(0)-M_-(0)+γℏGτ` when both sector means are defined. The
equal-weight clause now says the sector mean changes are equal and opposite,
and notes that both changes vanish when `γG=0`. The physical-scope wording and
the step-3.1 proof-contract derivation were updated. The direct consumer
`rem-nrqm-angular-momentum-examples-scope-limits` was checked and its description
was changed to “the change in the difference” of the sector means.

`verification.judge` was absent. Final reflow reported no changes; precheck
passed:

```text
PASS items/texp-nrqm-angular-momentum-stern-gerlach-splitting.md (direct)
1 checked, 0 failing — all clean
```

### `rem-nrqm-angular-momentum-examples-scope-limits`

As a focused downstream update after the thought-experiment repair, its summary
now says the thought experiment derives the change in the difference of the
sector means. This is an item-level remark, not B-page prose.

## Defects not edited

- **B-page summary:** `qm-angular-momentum-and-spin-examples`, summary paragraph
  describing `texp-nrqm-angular-momentum-stern-gerlach-splitting`. It says the
  thought experiment derives “the separation of the two spin-sector means,”
  although the allowed cases `γ=0` or `G=0` give zero change in their difference.
  The corrected item states the exact difference increment. B-page prose is
  outside reader edit authority; the summary should say that the difference
  changes by `γℏGτ`, which may be zero. This is reported as a nonfatal
  overstrong summary claim.

- **Historical in-run dependency wording:** `post-nrqm-framework-identical-particles-and-spin`
  (batch 43), clause (i), before “A bounded quantity A.” On the initial read,
  the sentence transition was a comma splice (“not assumptions added to it, A
  bounded quantity”). The current line 59 has a full stop, so that wording is
  now corrected. I did not edit the other-batch item. No contemporaneous raw
  hash was recorded for the earlier bytes, so the findings JSON leaves
  `observed_source` null and does not bind the historical observation to the
  corrected current bytes.

## Page verdicts

- **`qm-angular-momentum-and-spin`:** acceptable after the assigned-item
  repairs. Its summary's model assumptions, mathematical suppliers, and
  conditional physical results match the reviewed items; no remaining A-page
  prose defect was identified.
- **`qm-angular-momentum-and-spin-examples`:** needs owner disposition for the
  B-page summary wording above. The assigned examples themselves are conditional
  model computations and do not report measurements.

## Blocker and coverage note

There is no process blocker. The B-page summary finding is the outstanding
outside-scope correction. I opened every assigned page and item and checked the
direct supplier claims material to the reviewed arguments, but did not audit
the full transitive supplier closure (the local graph traversal reports 2,457
items in the closure). I did not audit an experimental dataset; none is claimed
by the assigned items.
