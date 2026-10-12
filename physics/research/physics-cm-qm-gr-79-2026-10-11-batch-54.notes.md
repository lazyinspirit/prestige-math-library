# Batch 54 notes — Qm Angular Momentum And Spin

Run `physics-cm-qm-gr-79-2026-10-11`, role **beta**, batch **54**, covering the
pair `qm-angular-momentum-and-spin` (A, order 187) and
`qm-angular-momentum-and-spin-examples` (B, order 188), category
`non-relativistic-quantum-mechanics`, library `physics`. Both pages are
`status: draft`; this batch publishes nothing.

Read first: root `CLAUDE.md`, workspace `CLAUDE.md`, `SCHEMA.md`,
`WORKFLOW.md`, `../PHYSICS-CONTENT-MODEL.md`, the binding owner direction
`research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md` (read
fully; it contains no batch-54-specific override, so nothing in it overrides
the design or task text), the batch dependency levels
`research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json`
(batch 54: level 10, requires batches 50 and 53), the design section
`research/plan-non-relativistic-quantum-mechanics-track.md` L3197 (pair
`qm-angular-momentum-and-spin`), the reservation in
`research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`,
the prose scaffold
`research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/prose-scaffold.md`,
and `research/plan-spec.json`.

## Inventory

A page `qm-angular-momentum-and-spin` (12 items; computed
`dependency_level` in parentheses):

1. `lem-nrqm-angular-momentum-product-flow-generator` (0) — batch-local
   mathematics: self-adjointness of $A+B$ for bounded self-adjoint $B$
   commuting with the flow of $A$, commutation of the two flows, and the
   product flow $e^{is(A+B)}=e^{isA}e^{isB}$ with generator $i(A+B)$.
2. `lem-nrqm-angular-momentum-su2-lift-of-the-rotation-action` (7) —
   batch-local mathematics: the lift $U_{s}(W)=U(\rho(W))M_{s}(W)$ of the
   componentwise rotation action, its unitarity, representation law and
   strong continuity, the identities $\rho(A_{i}(t))=R_{i}(t)$, the strong
   commutation of $L_{i}$ and $S_{i}$, self-adjointness of
   $J_{i}^{\mathrm{tot}}=L_{i}+S_{i}$ with
   $U_{s}(A_{i}(t))=e^{-itJ_{i}^{\mathrm{tot}}/\hbar}$, and the conjugations
   of $Q_{j},P_{k}$.
3. `lem-nrqm-angular-momentum-orbital-casimir-identity` (9) — batch-local
   mathematics: on the harmonic blocks $V_{l}$,
   $(1/\hbar)L_{i}|_{V_{l}}$ is unitarily equivalent to the spin-$l$
   matrices, and $\sum_{i}L_{i}^{2}F=\hbar^{2}l(l+1)F$ on the harmonic span.
4. `def-nrqm-angular-momentum-framework-angular-momentum-observables` (10) —
   the page's fixed readings: orbital, spin and total angular momentum as
   assigned sharp observables, units, scope.
5. `post-nrqm-angular-momentum-magnetic-moment-coupling` (8) — the
   effective magnetic-moment coupling $\boldsymbol\mu=\gamma_{s}\mathbf S$
   and the Zeeman operator $H_{Z}=H_{0}-\sum_{i}\gamma_{s}B_{i}(Q)S_{i}$ on
   $W^{2,2}$, with units and the empirical status of $\gamma_{s}$ and
   $\mathbf B$.
6. `pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws` (11) — the
   spectra and Born laws of the directional components $S_{n}$, the Casimir
   identity $S^{2}=\hbar^{2}s(s+1)I$, and the spin-half projections.
7. `pthm-nrqm-angular-momentum-orbital-eigenstates-and-quantum-numbers`
   (11) — the vectors $R(|x|)h_{lm}(x)w$, $L_{3}\psi=\hbar m\psi$ and the
   quadratic-form Casimir identity.
8. `pthm-nrqm-angular-momentum-total-conservation` (11) — lifted coordinate
   rotations are symmetries and $J_{i}^{\mathrm{tot}}$, $S_{i}$, $L_{i}$ are
   conserved for rotation-invariant bounded potentials.
9. `pthm-nrqm-angular-momentum-zeeman-precession` (11) — uniform-field
   factorization, transverse rotation at $\omega=\gamma_{s}B_{z}$,
   conservation of $S_{3}$, conjugation identities.
10. `pthm-nrqm-angular-momentum-stern-gerlach-conditional-force` (11) —
    the conditional Stern-Gerlach force law in the spin sectors,
    transported from the magnetic page.
11. `pthm-nrqm-angular-momentum-two-spin-composition` (11) — the
    Clebsch-Gordan decomposition of a two-spin internal factor, ladder
    actions, weight multiplicities, uniqueness of the spin-half singlet.
12. `rem-nrqm-angular-momentum-scope-and-empirical-status` (12) — scope and
    empirical status of the page.

B page `qm-angular-momentum-and-spin-examples` (5 items):

1. `ex-nrqm-angular-momentum-spin-half-directional-probabilities` (12) —
   Bloch parametrization and the directional probabilities.
2. `ex-nrqm-angular-momentum-l-eigenfunctions` (12) — explicit low
   spherical harmonics, orthonormality, degree-one Casimir value.
3. `ex-nrqm-angular-momentum-zeeman-toy-model` (12) — uniform-field sector
   identities and the labelled two-level truncation.
4. `texp-nrqm-angular-momentum-stern-gerlach-splitting` (12) — the
   conditional two-sector separation under the hypothetical containment
   premise.
5. `rem-nrqm-angular-momentum-examples-scope-limits` (13) — the examples
   reading. No B item consumes a foreign B-page item; the page remains a
   leaf across pages.

Carriers
`library/non-relativistic-quantum-mechanics/qm-angular-momentum-and-spin.md`
and `...-examples.md`; manifest
`research/physics-cm-qm-gr-79-2026-10-11-batch-54.pages.json`; proof
contracts
`research/physics-cm-qm-gr-79-2026-10-11-batch-54.proof-contracts.json`
(14 entries: the nine proof-bearing A items, the four proof-bearing B items
and the postulate's physics-review contract; the definition and the two
remarks carry no proof section); coverage
`research/physics-cm-qm-gr-79-2026-10-11-batch-54.coverage.json` (2 pages,
12 source entries, 50 harvested results, all 12 sources fetch-stamped);
cross-batch input
`research/physics-cm-qm-gr-79-2026-10-11-batch-54.cross-batch-dependencies.json`
(189 rows: 185 item edges into in-run suppliers plus four page edges).

## Design versus plan (conflicts and deviations)

1. **`requires` drift (dispatch names two pages; the manifest names three).**
   The dispatch and `plan-spec.json` declare `qm-symmetries-and-conservation`
   and `qm-uncertainty-and-compatibility` for the A page. The implementation
   additionally consumes — inside the batch-local mathematics, not inside
   any physical conclusion — the quaternion rotation model and its covering
   homomorphism, homed on the published page `cm-math-rotation-double-cover`
   (and, through it, `lie-subgroups-actions-and-homogeneous-spaces`). The A
   page therefore declares the third requirement
   `cm-math-rotation-double-cover`, and `validate-plan --run` reports no
   `undeclared-prereq` finding for either batch-54 page. `plan-spec.json` is
   not edited; the difference is recorded here for owner reconciliation.
2. **Reservation scope versus implementation.** The reservation's
   `a_inventory` ("orbital sphere theory, SU(2) spin postulate, ladders,
   S²/Sz, Pauli matrices, magnetic moment coupling [M,D,P,T], 48") and
   `b_inventory` ("spin probabilities, L eigenfunctions, SG force
   approximation, Zeeman toy model [H,examples], 24") are both covered; the
   implementation adds three batch-local mathematical lemmas (items 1–3
   above) as the local closure of the lift and Casimir statements, and a
   two-spin composition theorem, which the reservation did not name but
   which the composites page (batch 55) consumes. Budgets are respected
   (A 12/48, B 5/24 items). No other design-versus-plan conflict was found.
3. **Dependency levels recomputed mechanically.** Levels are computed from
   the in-run manifests alone (published and other out-of-run suppliers do
   not raise a level); after the final dependency edits the labels are
   A: 0, 7, 9, 10, 8, 11, 11, 11, 11, 11, 11, 12 and B: 12, 12, 12, 12, 13,
   and `item-dependency-levels.mjs check --run` reports no batch-54 finding.

## Source-pointer corrections and harvest dispositions

1. **Zwiebach Chapter 7, not Chapter 6.** Two Zeeman items originally cited
   "Chapter 7 'Time Evolution'" with the OCW `Chap_06` URL. The fetched
   `Chap_06` document is "Quantum Dynamics"; the spin-precession material is
   Chapter 7 "Two State Systems", Sections 2–3 (chapter pages 2–6), whose
   OCW URL is `7c376a3b…Chap_07.pdf` (already fetch-verified by batch 45).
   Both items now cite Chapter 7 with that URL; the `Chap_06` URL is no
   longer cited by this batch.
2. **Tong §4.4 misattribution (four items).** The fetched 133-page Tong
   document contains zero occurrences of "spin", "Pauli", "Stern" or
   "precess"; its §4.4 is "A Pre-Quantum Quantum History". The citations of
   "Section 4.4, printed pages 118–122: spin one-half in a magnetic field …
   precession frequency" were therefore removed from
   `post-nrqm-angular-momentum-magnetic-moment-coupling`,
   `pthm-nrqm-angular-momentum-zeeman-precession` and
   `ex-nrqm-angular-momentum-zeeman-toy-model`, and restricted to Sections
   4.1–4.1.2 (printed pages 96–103) in
   `pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws`. The content
   is sourced from Binney §7.4/§7.4.5 (printed pages 158–169) and Zwiebach
   Chapter 7 Sections 2–3, both fetched and read. The wrongly attributed
   claim is preserved in the coverage file as an `out-of-scope` harvest
   entry with the exact reason.
3. **MIT 8.05 Chapter 2 locators.** The chapter has Sections 1 (pp. 1–7),
   2 (pp. 7–12), 3 (pp. 12–16) and 4 (pp. 16–19); the original citations
   "Sections 4–5" and "Section 4, printed pages 13–16" did not exist. The
   locators now cite Section 1 for the Stern-Gerlach force and two-peak
   idealization and Section 4 for the directional spin operator.
4. **Teschl locators.** Against the fetched 317-page first edition: the
   product-flow lemma's resolvent/Neumann reference moved from §2.1
   pp. 63–64 to §2.4 pp. 73–79 (printed page 63 is §2.2 self-adjointness
   criteria); the SU(2) lift's reference moved from §8.1 to §8.2
   pp. 175–178; the Casimir item's "§8.1 and 8.4" was corrected to
   "§8.1–8.2" pp. 173–178 (Noether Theorem 8.1 on p. 174 verified). Binney
   locators were verified against the fetched book (PDF page = printed page
   + 8; §4.2 starts at printed p. 65; §7.4.5 precession at pp. 168–169).
   The defective Teschl §7.8 and Binney §3.5 locators recorded by batch 53
   for the magnetic page are not consumed by this batch.

## Authoring corrections made in this batch

1. **Postulate dependency removed from a mathematics item.** The SU(2) lift
   originally declared `post-nrqm-framework-identical-particles-and-spin`
   (domain physics); mathematics items may not depend on physical suppliers.
   The lemma now defines $D_{s}$ by the symmetric-power theorem and the spin
   matrices directly; the statement, facts and remarks were rewritten
   accordingly, with no change to the mathematical content.
2. **Kernel remark corrected.** The remark on the two-valued lift had the
   two spin-parity cases interchanged; it now proves the factorisation
   statement via $U_{s}(-I_{2})=(-1)^{2s}\mathrm{id}$ (kernel $\{I\}$ for
   half-integer $s$, $\{I,-I\}$ for integer $s$) without claiming the exact
   kernel.
3. **Unproved unused clause trimmed.** The product-flow lemma's clause
   (b)(ii) (domain invariance of $e^{itB}$ and $Ae^{itB}=e^{itB}A$ on
   $D(A)$) had no step; its proof needs the Laplace/resolvent route to
   "flow commutation implies spectral commutation" and no consumer uses it
   (the consumers cite clauses (a) and (c)). The clause was removed rather
   than left unproved; clause (b) remains the commutation of the flows.
4. **Role metadata.** The magnetic postulate's four framework-postulate
   dependencies were re-typed from `physical-assumption` to
   `formulation-prerequisite` (a postulate may not derive from other
   postulates); the B-page scope remark's three example dependencies were
   re-typed from `physical-result` to `formulation-prerequisite` (examples
   are not established physical results). Both were found by the scoped
   `validatePhysicsContent` run.
5. **Missing declared edges.**
   `pthm-nrqm-angular-momentum-total-conservation` cites
   `lem-nrqm-kinematics-componentwise-position-and-momentum` in its first
   fact, and
   `def-nrqm-angular-momentum-framework-angular-momentum-observables` cites
   `lem-nrqm-angular-momentum-orbital-casimir-identity` in clause (b);
   neither edge was declared. Both were added with role
   `mathematical-premise`; the definition's level rose 9→10 and the
   downstream labels were recomputed (total-conservation stayed at 11).
6. **Step renumbering.** In
   `ex-nrqm-angular-momentum-spin-half-directional-probabilities` the
   terminal step was renumbered to the canonical pinned-layer form
   (2.2→3.1, 3.1→4.1) per precheck's auto-repair.
7. **Multiline display repair.** Eight items had hard-wrapped `$$…$$`
   spans; the spans were joined with `fix-multiline-display.mjs` (whitespace
   only, no character of the mathematics changed) and `rendercheck` is now
   clean.

## Checks run (actual results)

- `precheck` on the 17 batch items: 14 checked (the three non-proof items
  are excluded by kind), 0 failing; all proof-bearing items use `direct`.
- `proof-layout` on the 17 items: 17 items, 69 steps, 0 defects.
- `rendercheck` on the 17 items and the two carriers: 19 files, no wikilink
  in math, no delimiter defects, every span parses under KaTeX and every
  frontmatter block parses.
- `proof-contract --strict`: 14/14 items checked, 0 errors, 0 warnings;
  every declared fact has an exact quote from the supplier's own
  statement/definition section and every step is contracted with its
  inputs; all eight boundary worksheets are present for every proof-bearing
  item and the postulate carries the four physics-review verdicts.
- `coverage-checklist`: 2 pages, 50 harvested results, 0 errors,
  0 warnings.
- `source-fetch-check --stamp`: 12/12 source entries fetch-verified (seven
  A-page and five B-page entries; every URL was downloaded in full, not
  merely probed); check mode: 12/12 fetch-verified, 0 drops.
- `manifest-deps`: 17 items, 0 normalized, 0 errors.
- `content-policy` on the batch-54 manifest: 17 scoped items, 0 errors,
  0 warnings.
- `audit-manifest` over all 79 run manifests: 17253 relationships over 1349
  items, 0 defects (running it on the single batch reports in-run suppliers
  as unresolved, which is an artefact of the smaller manifest set).
- `depcheck` repo-wide: no batch-54 finding remains (the missing edges of
  the authoring corrections above were repaired during authoring; the
  remaining repo-wide findings are other batches' and the corpus-wide
  `published-unaudited` backlog).
- `fwdcheck --run`: no batch-54 finding; the batch-54 items classify as
  `inherited`; the run-level FAIL names other batches' items.
- `extcheck`: OK — every recorded-not-proved statement is a cited remark
  with no proof and every consequence is marked.
- `citecheck` on the 17 items: OK — every recognised elementary move cites
  a home that states it.
- `item-dependency-levels.mjs check --run`: 22 errors, all other batches'
  (empty scaffolds of batches 55–59 and two controlled-dynamics labels);
  0 batch-54 findings.
- `validate-plan --run`: 4 remaining run errors in other batches' pages
  (`cm-math-evidence`, `cm-math-chaos`, `qm-math-controlled-dynamics`,
  `qm-state-geometry-examples`); no batch-54 page appears. One
  `redundant-prereq` warning on batch 55's
  `qm-composites-entanglement-and-reduced-states` (it requires
  `qm-measurement-and-instruments` directly although its new requirement
  `qm-angular-momentum-and-spin` reaches that page through
  `qm-uncertainty-and-compatibility`) is recorded for batch 55's owner.
- Scoped `validatePhysicsContent` over the batch-54 dependency closure
  (2867 items): 0 errors.
- `frontier-dependency-ledger refresh --run`: refreshed and deduplicated.
- `physics-check --run`: cannot run to completion during construction — it
  stops on the empty scaffolds of batches 55–59, whose pages are not yet
  authored; the scoped closure run above is the equivalent batch-level
  evidence, and this is expected until the later batches are built.

## Capacity, escalations and status

A page 12/100 items, B page 5/100 items; well inside the page cap. No source
drop was needed, so no `source_resolution` record exists. No escalation is
filed: every prerequisite of every item is either an in-run supplier
(authored earlier in this run at a lower dependency level) or a published
root-library item, and every consumed supplier's statement and hypotheses
were inspected against the cited uses. All 17 items are recorded `ready`
with their examined dependency IDs; the records are Step-1 authoring
dispositions and not independent review. Readiness was recorded only after
the final carriers, manifest, coverage, contracts and cross-batch input were
written, so the recorded input hashes are current for the batch's own files;
concurrent edits by other batches' owners to upstream items can invalidate
the transitive input hashes and would require re-recording, which only these
notes can flag.
