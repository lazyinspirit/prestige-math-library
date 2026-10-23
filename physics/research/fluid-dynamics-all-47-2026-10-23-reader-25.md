# Step 3a reader report — batch 25

Run: `fluid-dynamics-all-47-2026-10-23`  
Batch: `25`  
Role: independent reader  

## Scope and opened inventory

Read the batch manifest and current batch notes; consulted the coverage record,
the relevant proof-contract entries, the cross-batch dependency record, the
reader brief, and both assigned page files. The
manifest assigns ten A-page items to `fd-k01` and three B-page items to
`fd-k01-examples`. Both pages are draft, retain `page_layout: compact-v1`, and
have empty Markdown bodies.

Assigned items opened and reviewed in supplier order:

1. `def-fd-kinetic-density`
2. `def-fd-elastic-collision-measure`
3. `prop-fd-kinetic-moment-balances`
4. `thm-fd-kinetic-h`
5. `thm-fd-collision-maxwellian`
6. `prop-fd-maxwellian-moments`
7. `thm-fd-controlled-euler-passage`
8. `def-fd-conserving-bgk`
9. `thm-fd-homogeneous-bgk-limit`
10. `prop-fd-bgk-entropy-rate`
11. `cex-fd-collision-support`
12. `ex-fd-bgk-initial-layer`
13. `rem-fd-kinetic-limit-status`

Opened the three A-page prerequisite pages:
`library/measure-theory/product-measures-and-the-fubini-tonelli-theorems.md`,
`library/thermodynamics-mathematics/td-math-mixture-dynamics-and-shells.md`, and
`library/differential-geometry/smooth-partitions-of-unity-and-exhaustions.md`.
The B page requires the assigned A page `fd-k01`.

The external item suppliers opened for the assigned claims were:

- Measure and product integration: `def-countable-choice`,
  `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`,
  `thm-lebesgue-measure-is-a-complete-measure`,
  `prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets`,
  `def-product-measure-on-sigma-finite-spaces`,
  `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`,
  `thm-tonelli-theorem-for-sigma-finite-product-spaces`, and
  `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`.
- Collision and entropy interfaces: `def-tdmath-elastic-collision-kernel` and
  `thm-tdmath-regular-collision-entropy`.
- Differentiation, algebra, and Taylor estimates:
  `thm-differentiation-under-the-integral-sign`, `thm-chain-rule`,
  `thm-algebra-of-derivatives`, `thm-ftc-second-part`,
  `thm-taylor-peano-remainder`, `thm-logarithm-derivative-and-integral`, and
  `cor-mean-value-theorem`.
- Gaussian and decay estimates: `thm-gaussian-integral`, `thm-of-square-roots`,
  `thm-substitution-for-improper-integrals`, `thm-integration-by-parts`,
  `thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line`,
  and `thm-exponential-beats-every-polynomial`.
- The local-to-pointwise Euler argument: `lem-smooth-bump-between-concentric-euclidean-balls`.

The current batch cross-edge inventory contains outside published mathematical
suppliers and all three declared A-page prerequisites; no assigned item depends
on another current-run batch. The original cross-edge inventory omitted the
`smooth-partitions-of-unity-and-exhaustions` page edge even though the assigned
A page requires it. I opened that page and its bump supplier and added the
scoped verified page-edge row. I also read the two batch-26
consumers of `def-fd-conserving-bgk` because its Definition wording changed.

## Repairs and evidence

- `items/prop-fd-kinetic-moment-balances.md`: added
  `omega_3 f in L^1_loc(I x Omega x R^3)` to ensure the moment densities and
  fluxes are locally integrable, as required for distributional identities.
  Pointwise finiteness of each velocity moment and derivative envelopes alone
  do not give product-space integrability of those fields. The proof now
  identifies the exact time derivative of each moment density and the
  corresponding coordinate derivative of each flux that pass under the
  velocity integral; it uses the new L1 hypothesis for the fields and the
  derivative envelopes for Fubini and distributional integration by parts.

- `items/thm-fd-controlled-euler-passage.md`: made both weighted convergence
  limits explicitly limits as `epsilon downarrow 0`. Its proof now derives the
  moment-balance L1 hypothesis for all sufficiently small `epsilon` from the
  spacetime convergence and the uniform weighted Gaussian bound supplied by
  the stated bounds on `n`, `u`, and `T`. I removed the unsupported assertion
  that all moment fluxes are C1: the argument needs only the controlled time
  derivatives of moment densities, the corresponding spatial derivatives of
  flux components, their local integrability, and the initial traces. The
  direct consumer of the repaired moment-balance result was checked against
  its strengthened hypothesis; `rem-fd-kinetic-limit-status` remains accurate.

- `items/prop-fd-maxwellian-moments.md` and
  `items/ex-fd-bgk-initial-layer.md`: added
  `thm-tonelli-theorem-for-sigma-finite-product-spaces` as a direct mathematical
  supplier. Their Fubini arguments now first establish absolute integrability
  of the nonnegative product majorants by iterated Tonelli, using the finite
  one-dimensional Gaussian-polynomial integrals, and then factor the signed
  moments by Fubini. The current batch manifest and cross-batch edge inventory
  were synchronized with these two new item dependencies.

- `items/def-fd-conserving-bgk.md`: declared the relaxation time `tau > 0`
  before its first use in the operator formula. The Definition itself is
  unchanged mathematically. I checked the current batch consumers
  `thm-fd-homogeneous-bgk-limit` and `prop-fd-bgk-entropy-rate`, as well as the
  batch-26 consumers `pthm-fd-bgk-equilibration` and
  `post-fd-bgk-relaxation`; all use the same operator and relaxation time.

- `items/ex-fd-bgk-initial-layer.md`: corrected the mixture covariance wording.
  Its normalized covariance is `theta I_3`; its unnormalized centered
  second-moment tensor is `n theta I_3`, as shown by the proof.

- `items/cex-fd-collision-support.md`: made the refuted implication complete
  within `Statement refuted` by defining the elastic collision set, symmetric
  measure, collision-production functional, Maxwellian form, and full-support
  condition there. The counterexample still uses the symmetric Dirac measure at
  the zero collision and the positive non-Gaussian density proved in its
  `Counterexample` section.

The current batch manifest's affected item statements and two new item edges
were synchronized. I also added the missing scoped review row for the existing
`fd-k01` requirement on `smooth-partitions-of-unity-and-exhaustions` after
checking its current published page and bump supplier. The proof-contract entries for the five
changed proof-bearing items were regenerated; no changed item had a stale
`verification.judge` record to remove. The `proof-contract.mjs --strict` check
passed for all six changed items, with 0 errors and 0 warnings.

## Source review

Opened the cited PDF sources at their relevant sections. Tong's §2.3 covers the
Boltzmann H functional and its collision-symmetry argument; §2.4.1 covers
collision invariants and moment balances; §2.5.1 presents a relaxation-time
approximation and explicitly says it is not exact. Golse §§3.1–3.2 give
collision conservation and the Boltzmann H theorem under a scattering-kernel
interface; its equality hypotheses differ from the assigned full-support
measure formulation. Zamponi §3.2 is explicitly in the notes' formal
hydrodynamic-limits section and derives Euler moments under an assumed formal
limit. The assigned conditional convergence proof is local and does not claim
that these sources establish its strong-convergence hypothesis.

The title page at the shared
[metaphor.ethz.ch PDF](https://metaphor.ethz.ch/x/2022/fs/401-4820-22L/notes/Mean-Field_Limits_in_Statistical_Dynamics_Golse.pdf)
used in five published mathematics dependencies identifies the actual PDF as
*Mean-Field Limits in Statistical Dynamics* by François Golse,
arXiv:2201.02005v1, not John K. Hunter's *Measure Theory*. This supports the
citation-inaccurate findings below. Carlen's Rutgers Lebesgue-measure notes and
the cited Tao text were also opened as alternate references where listed.

## Uneditable published-dependency defects

These subjects are published mathematical suppliers outside batch 25 and were
not edited:

- `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, Definition lines
  41–44 and 54–58, contains broken duplicated prose: “Under countable choice,
  Assuming countable choice” and “are proved ... in Assuming countable choice”.
  The measure-existence content is still stated elsewhere in the item, so this
  is recorded as a nonfatal `ill-formed` defect.
- `def-product-measure-on-sigma-finite-spaces`, Definition lines 32–35, has a
  malformed explanatory sentence after its product-measure formula (“The two
  displayed integrals are well-defined by For sigma-finite measures ... by For
  sigma-finite measures ...”). The formula and cited supplier statements remain
  intelligible; this is a nonfatal `ill-formed` defect.
- `sources.references[0]` in `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`
  (lines 26–27), `thm-lebesgue-measure-is-a-complete-measure` (lines 27–28),
  and `prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets`
  (lines 21–22), and `sources.references[1]` in
  `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`
  (lines 26–27) and `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`
  (lines 20–21), all name John K. Hunter's UC Davis measure-theory notes but
  link to the Golse PDF above. Its title page identifies *Mean-Field Limits in
  Statistical Dynamics* by François Golse, arXiv:2201.02005v1. Each mismatch is
  a nonfatal `citation-inaccurate` finding. For every finding, the assigned
  consumer is `def-fd-kinetic-density`, whose dependency closure reaches that
  published supplier.

The exact subject IDs, locations, and evidence are in
`research/fluid-dynamics-all-47-2026-10-23-reader-findings-25.json`.

## Page verdicts

- `fd-k01` (`library/fluid-dynamics-mathematics/fd-k01.md`): no local page
  defect. Its draft inventory, requirements, compact layout, and empty body are
  consistent with the assigned ten A items. The read-only published-supplier
  defects inherited through `def-fd-kinetic-density` are recorded above.
- `fd-k01-examples`
  (`library/fluid-dynamics-mathematics/fd-k01-examples.md`): no local page
  defect. Its draft inventory, A-page requirement, compact layout, and empty
  body are consistent with the assigned three B items. Its page dependency
  reaches the same read-only supplier findings through `fd-k01`.

No TikZ or tikzcd diagrams occur in the assigned pages or items.

## Validation and blocker

- `reflow.mts` and `precheck.mts` were run on each changed item. Reflow reported
  no further formatting changes; all five proof-bearing items passed precheck.
  The changed definition has no numbered proof section, and precheck reported
  0 checked and 0 failing.
- The final `proof-layout.mjs` run covered the six changed item paths: 6 items,
  14 numbered steps, 0 defects.
- No experimental or empirical claims occur in this mathematical batch.
- No blocker prevents handoff. The read-only published-supplier prose and
  citation issues remain for owner disposition.

Coverage limitation: I checked the direct item and page suppliers required by
the assigned proofs and consulted the cited public PDFs at the relevant
sections; I did not independently audit every transitive proof dependency of
those published mathematics suppliers or read the cited books cover to cover.
