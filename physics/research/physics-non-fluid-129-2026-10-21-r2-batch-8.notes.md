# Batch 8 — Radiation reaction as a singular model reduction

Run: physics-non-fluid-129-2026-10-21-r2 · role beta · batch 8.

## Inputs and plan reconciliation

The run-specific physics-non-fluid-129-2026-10-21-r2-owner-authoring-direction.md
is absent. The assigned page pair, order 713/714, category, library, titles,
companions, and all three A-page requires entries match both the current
research/plan-spec.json and the assigned section of
research/plan-classical-electromagnetism-frontier-expansion-track.md.
plan-spec.json has empty item arrays for these pages; the complete assigned
design inventory supplies the three A items and two B examples. There is no
conflict between the assigned design and plan.

The item dependency-level calculations are: post-emx-abraham-lorentz-model
level 0 (no in-run item supplier), pthm-emx-runaway-preacceleration level 1
(postulate supplier), pthm-emx-reduction-order-error level 2 (runaway theorem),
ex-emx-free-runaway level 2 (runaway theorem), and
ex-emx-force-frequency-regime level 3 (runaway theorem and reduction theorem).
Batch 8 is level 1 with in-run prerequisite batch 7, as recorded in the current
dependency-level file.

The harmonic example declares pthm-emx-runaway-preacceleration directly as
well as pthm-emx-reduction-order-error. The reduction theorem's Statement gives
the residual and absolute error but not the exact future-kernel formula needed
to evaluate a harmonic input. The direct kernel dependency therefore records a
necessary proof input and raises this example's level to 3. The postulate also
declares the exact laboratory geometry, charge and mass parameter interfaces,
and the published radiation-reaction limits remark required to type and scope
its equation.

## Supplier inspection and interface

The published em-primitives-and-postulates page fixes the named laboratory
chart, SI conventions, charge parameter and externally supplied mass; the
published Lorentz-coupling postulate explicitly excludes self-force. The
published em-retarded-fields-and-radiation page and its
rem-em-radiation-reaction-limits say that prescribed-source radiation does
not provide a self-force or a well-defined product of the singular self-field
with its point source. The new Abraham–Lorentz equation is therefore recorded
as an additional effective postulate. It does not reinterpret prescribed-source
radiated power as particle energy loss and is not derived by substituting a
singular Maxwell field into the Lorentz force.

Batch 7's current emx-radiation-multipoles page is a draft A-page prerequisite
with four current A items. Their exact page statements and scope were inspected.
The page supplies smooth-source radiation data and controlled far-field and
dipole-power results; none asserts a point-charge self-force. Its current
requires list agrees with current plan-spec.json. The earlier batch-7 notes
recorded a page-prerequisite escalation before those additions; current batch-7
manifest requirements and current hash-valid step1Decision records for all
four items now show the complete declared interface and ready authoring
status. The old note is treated as historical. The page dependency is verified
only at its current interface and actual Step 1 readiness, not as independent
proof approval. Its three transitive mathematical page prerequisites remain
observations in these notes, not unsupported cross-batch ledger rows.

The physical deductions here depend on the adopted effective ODE and purely
mathematical calculus: the real exponential derivative and reciprocal,
finite-interval Riemann integration, the mean value theorem, a compact smooth
bump construction, and finite-dimensional Euclidean Cauchy–Schwarz. The
exponential tail and force-weighted integral are checked with the exact
bounded-force hypotheses. The smooth force used for preacceleration is
constructed from the published bump supplier. No arbitrary-index choice or
Countable Choice is used.

## Full-text sources and harvested results

1. Fritz Rohrlich, The Dynamics of a Charged Particle,
   https://arxiv.org/pdf/0804.4614. The complete 11-page full-text paper was
   retrieved and inspected. Sections 1–2, PDF pp. 2–6, state the finite-size
   force-variation condition, nonrelativistic third-order equation, and
   first-order reduction; §3, PDF pp. 6–7, develops the nonrelativistic
   illustration. Its broader assertion that the reduced equation is
   physically correct is not adopted. The local items adopt only a separately
   stated effective ODE and prove their conditional consequences.

2. Jack Vanderlinde, Classical Electromagnetic Theory, Springer (2004),
   https://eva.fcien.udelar.edu.uy/pluginfile.php/220397/mod_page/content/2/Classical%20Electromagnetic%20Theory%20%28Fundamental%20Theories%20of%20Physics%29%20-%20Jack%20Vanderlinde%20%282004%29.pdf.
   The complete 426-page book was retrieved; Chapter 12, §§12.3–12.4, printed
   pp. 335–339 (PDF pp. 342–346), was inspected in full. Section 12.3 derives
   the coefficient from a rigid charged sphere and explicitly warns that a
   rigid extended sphere is inconsistent with special relativity. Section 12.4
   states the mass-renormalized ODE, its runaway branch, and the future-weighted
   solution. The local proofs do not use its rigid-body derivation as a
   mathematical supplier.

The per-item harvest and disposition for both sources is in
physics-non-fluid-129-2026-10-21-r2-batch-8.coverage.json. Both independent
treatments support the adopted-model context; all theorem conclusions,
uniform estimates, exact harmonic response and finite-data examples are proved
locally. Neither source supplies empirical measurements, and none are claimed.

## Authored inventory and scope

The A page adopts the nonrelativistic Abraham–Lorentz equation as an extra
model postulate, proves its complete solution family and unique bounded-future
branch, and derives the exact residual/error bound for first-order reduction
of order. The B page verifies a force-free runaway with fixed position and
velocity data, and an exact harmonic response with a tolerance-based error
criterion. Both examples are conditional model calculations; no observed
trajectory or experimental frequency response is reported. The A page has
three items and the B page two, below the 100-item page cap.

The new A/B pages retain the assigned identities and all planned page
requirements. The cross-batch dependency array has one verified page edge from
the A page to batch 7's emx-radiation-multipoles; the B-to-A and all item
edges are within batch 8. No other-batch edges are added.

## Scoped checks

Final scoped results after all item, manifest, coverage, and contract edits:

- `proof-layout.mjs` on all five changed items: 5 items, 14 proof steps, 0 defects.
- `proof-contract.mjs --strict`: all 5 items checked, 0 errors and 0 warnings.
- `content-policy.mjs` on the batch manifest: 5 scoped items, 0 errors and 0 warnings.
- `manifest-deps.mjs`: 5 items, 0 normalized, 0 errors.
- `depcheck.mjs --items-file` scoped to the five assigned items: selected item and prerequisite-cycle checks passed; 1515 items and 346 pages were in the reached cycle context.
- `rendercheck.mjs` on five items and both pages: all 7 files parsed; math and YAML checks passed.
- `coverage-checklist.mjs`: 1 page, 10 harvested results, 0 errors and 0 warnings. `source-fetch-check.mjs` verified both URL stamps and both source-resolution entries; there were no failed retrievals, retries, drops, or owner escalations. The textbook source kind is recorded as `textbook`.
- Scoped `dependencyLevels` recomputation returned no errors: postulate 0; runaway/preacceleration theorem 1; reduction-order theorem 2; free-runaway example 2; force-frequency example 3.
- `loadStep1Record` plus `step1Decision` reports current hash-valid `ready` records for all five assigned items and for the four current A items on the required `emx-radiation-multipoles` page. These are authoring-readiness records, not independent proof approval.

The current full batch graph recomputes batch 8 at level 1 with prerequisite batch 7, matching the recorded graph and level. Its `input_sha256` differs from the owner-owned shared snapshot because the finalized batch-8 manifest now records the explicitly used `def-oriented-integral` supplier on the runaway theorem. The shared snapshot was left unchanged; the owner must refresh it before a full-run check that requires hash equality. This does not change the recomputed batch level or the verified page interface.
