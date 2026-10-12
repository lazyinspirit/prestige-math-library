# Batch 61 notes — Qm Three Dimensional Scattering

Run `physics-cm-qm-gr-79-2026-10-11`, role **beta**, batch **61**, covering
the pair `qm-three-dimensional-scattering` (A, order 201) and
`qm-three-dimensional-scattering-examples` (B, order 202), category
`non-relativistic-quantum-mechanics`, library `physics`. Both page carriers
are `status: draft`; this batch publishes nothing.

Read first: root `CLAUDE.md`, workspace `CLAUDE.md`, `SCHEMA.md`,
`WORKFLOW.md`, `README.md`, `../PHYSICS-CONTENT-MODEL.md`, the binding owner
direction `research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md`
(no batch-61-specific override), the batch dependency levels
`research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json`
(batch 61: level 14, requires batch 59), the design section
`research/plan-non-relativistic-quantum-mechanics-track.md` L3361, the
reservation in
`research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`
(order 19: A "scattering states/wave operators, conditions for
existence/completeness, S, flux, differential/total cross sections, partial
waves [M,D,T], 56"; B "short-range potential, phase-shift resonance, Born
approximation with scope; long-range warning [H,examples], 28"), and
`research/plan-spec.json`.

## Plan and design conflicts (recorded)

- The design section and the scaffold inventory declare
  `requires_physics: [NRQ-A06, NRQ-A09, NRQ-A12, NRQ-A17]`, while
  `research/plan-spec.json` declares the page-level requirement
  `requires: ["qm-controlled-approximations"]` for the A page (and the B page's
  `["qm-three-dimensional-scattering"]`). The dispatch fixes the current plan
  as controlling, so the manifest and carriers carry
  `requires: ["qm-controlled-approximations"]`. The substance of the older
  design codes is present at item level: the pair consumes the framework
  postulates, the central-potential vocabulary, the controlled-dynamics
  mathematics of batches 40-41 and the Coulomb model items directly through
  explicit `deps` and `dependency_roles`, so no promised claim was dropped.
- The design budget 56 (A) / 28 (B) is respected: the A page carries 18 items
  and the B page 5 items; the inventory claims (wave operators, existence and
  completeness conditions, S, flux, differential and total cross sections,
  partial waves; short-range potential, phase-shift resonance, Born with
  scope, long-range warning) are each covered by at least one item, with the
  Coulomb case treated in a declared Dollard-modified model that explicitly
  does not assert the ordinary short-range comparison.
- Design warning preserved: the design's inventory language is reproduced
  without strengthening it. The pair asserts no derived potential, no
  preparation or detector realization of the stationary reading, no measured
  cross section, no lifetime from the width parameter, and no ordinary
  comparison completeness for the Coulomb potential.

## Inventory and dependency levels

A page `qm-three-dimensional-scattering` (18 items; computed
`dependency_level` in parentheses):

1. `lem-nrqm-scattering-model-scaling-correspondence` (4) — units, time and
   spectral correspondence $H=cA$, $\tau=\hbar t/(2m)$.
2. `lem-nrqm-scattering-three-dimensional-current-and-flux` (0) — continuity
   identity, stationary divergence and sphere flux, incident and outgoing
   current readings.
3. `def-nrqm-scattering-framework-short-range-model` (9) — the declared model:
   state space, two potential classes, assigned energy observables, wave
   operator / $S$ / asymptotic-completeness vocabulary, units.
4. `def-nrqm-scattering-stationary-beam-and-cross-section-model` (10) — the
   stationary elastic beam model and the cross-section readings.
5. `pthm-nrqm-scattering-wave-operator-existence-and-free-continuity` (10) —
   Cook existence, isometry, intertwining, free absolute continuity, no
   positive eigenvalues.
6. `pthm-nrqm-scattering-compact-support-asymptotic-completeness` (11) —
   completeness, $H_{\mathrm{sc}}=\{0\}$, unitary $S$, commutation.
7. `pthm-nrqm-scattering-resolvent-tail-asymptotic-completeness` (10) —
   resolvent-tail class, decaying-tail form, Coulomb exclusion.
8. `pthm-nrqm-scattering-stationary-wave-amplitude-and-flux` (11) — the
   stationary solution, amplitude, far-field bounds, cross-section readings.
9. `def-nrqm-scattering-partial-wave-and-phase-shift-readings` (11) — channel
   vocabulary and phase shift modulo $\pi$.
10. `def-nrqm-scattering-single-channel-resonance-model` (12) — declared
    single-channel resonance factor and width parameter.
11. `pthm-nrqm-scattering-partial-wave-cross-section` (12) — Legendre
    expansion and phase-shift series.
12. `pthm-nrqm-scattering-controlled-born-approximation` (12) — controlled
    Born error contract and coupling scaling.
13. `pthm-nrqm-scattering-stationary-dynamical-identification` (13) — on-shell
    operator $S(E)=I+ik\mathcal A_k/(2\pi)$, covariance, central channels.
14. `def-nrqm-scattering-coulomb-dollard-model` (14) — Coulomb model and
    Dollard-modified comparison.
15. `pthm-nrqm-scattering-coulomb-dollard-completeness` (15) — modified wave
    operators and $S_D$; ordinary comparison not claimed.
16. `pthm-nrqm-scattering-single-channel-resonance-cross-section` (13) —
    Lorentzian $\sin^{2}\delta_l$, half-height width $\Gamma$, channel reading.
17. `rem-nrqm-scattering-scope-and-empirical-status` (15) — scope and
    empirical status.
18. `rem-nrqm-scattering-long-range-and-threshold-limits` (15) — long-range,
    threshold and positive-eigenvalue limits.

B page `qm-three-dimensional-scattering-examples` (5 items):

1. `ex-nrqm-scattering-square-well-s-wave-phase-shift` (13).
2. `ex-nrqm-scattering-single-channel-resonance-cross-section` (14).
3. `ex-nrqm-scattering-born-uniform-ball-amplitude` (13).
4. `ex-nrqm-scattering-long-range-tail-and-coulomb-warning` (15).
5. `rem-nrqm-scattering-examples-scope-limits` (16).

The item `dependency_level` labels in the carriers and in
`research/physics-cm-qm-gr-79-2026-10-11-batch-61.pages.json` were recomputed
mechanically after the last dependency edit and agree with
`node tools/physics-support/item-dependency-levels.mjs check --run
physics-cm-qm-gr-79-2026-10-11`, which now reports only the two empty-inventory
errors of the unauthored batch 64 (below) and no batch-61 error.

## Repairs made while authoring (Step 1, own items only)

- `lem-nrqm-scattering-three-dimensional-current-and-flux`: the outgoing-field
  clause originally asserted the stationary free equation for every
  $f\in C^{1}(S^{2})$, which is false for nonconstant $f$, and its supporting
  radial-Laplacian fact depended on the published example
  `ex-radial-harmonic-functions-away-from-the-origin`, homed on a B page,
  which `validate-plan` rejects (`[b-leaf]`). The clause now asserts exactly
  the current identity for every declared $f\in C^{1}(S^{2})$ (valid for all
  such fields and needing no equation) and no exact solution property; the
  example dependency was removed and the fact block re-cited to
  `lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules`,
  `thm-chain-rule-for-total-derivatives`,
  `thm-total-derivative-computes-directional-and-partial-derivatives`,
  `thm-algebra-of-derivatives` and `thm-sine-and-cosine-derivatives`. The
  consumed interface (the outgoing radial current density
  $(\hbar k/m)|f|^{2}/r^{2}$) is unchanged.
- `def-nrqm-scattering-framework-short-range-model` and
  `pthm-nrqm-scattering-resolvent-tail-asymptotic-completeness`: the
  resolvent-tail class is now stated in exactly the nondimensional form of its
  supplier, $h(r)=\|M_{W}(A_{0}-i)^{-1}\mathbf 1_{\{|x|\ge r\}}\|$ with
  $W=2mV/\hbar^{2}$ and $A_{0}=-\Delta_{w}$, so the supplier applies verbatim;
  the former shift-conversion argument (`+i/c` versus `-i`) was a genuine gap
  and is gone. The theorem's now-unused functional-calculus and free-spectrum
  facts and their three dependencies were removed.
- `pthm-nrqm-scattering-wave-operator-existence-and-free-continuity`: the
  boundedness-below assertion is now attributed to the model definition's
  compact-support clause (which states it) instead of to the Cook-existence
  supplier (which does not).
- `pthm-nrqm-scattering-coulomb-dollard-completeness`: the identification of
  the physical with the nondimensional comparison is now stated for
  $|\tau|>1$ (the range that carries the strong limits), and the isometry of
  the modified wave operators is derived locally from the fact that each
  comparison operator is unitary and the limits are strong.
- `pthm-nrqm-scattering-stationary-dynamical-identification` and
  `ex-nrqm-scattering-long-range-tail-and-coulomb-warning`: step references
  corrected (`steps 1.1-1.2` → `steps 1.1 and 2.1`; `1.1 and 1.2` → `1.1 and
  2.1`), and the Yukawa tail constant now bounds
  $e^{-\mu r}(1+r)^{1+\delta}$, the exponent actually needed for the
  $(1+|x|)^{-1-\delta}$ decay.
- `ex-nrqm-scattering-square-well-s-wave-phase-shift`: the strong-depth limit
  was corrected. $\tan(K_{0}a)\to+\infty$ at $K_{0}a\to(n+\frac12)\pi$ gives
  $a_{\mathrm{eff}}\to-\infty$ (zero-energy resonance, new bound state), not
  $a_{\mathrm{eff}}\to a$; the hard-sphere reading
  $\sigma_{0}\to4\pi a^{2}$ is reached at depths with
  $\tan(K_{0}a)/K_{0}\to0$, in particular $K_{0}a=n\pi$. The remark now
  refers to the corrected steps.
- `def-nrqm-scattering-partial-wave-and-phase-shift-readings`: the reduced
  radial equation is now explicitly read in the pair's nondimensional
  normalization with reduced potential $w=2mv/\hbar^{2}$, so that the metric
  in the display matches the supplier's reduced equation.
- `ex-nrqm-scattering-single-channel-resonance-cross-section`: decimal tokens
  in a proof step ($4.5$, $3.5$, $1.2$) were replaced by exact fractions and
  a step reference, since the proof-contract input vocabulary reads
  `d.d` tokens as step references.
- `pthm-nrqm-scattering-stationary-wave-amplitude-and-flux`,
  `pthm-nrqm-scattering-partial-wave-cross-section` and
  `pthm-nrqm-scattering-controlled-born-approximation`: the scaling
  correspondence is now cited to the lemma's energy/spectral-measure clause
  (b) rather than to the eigenvector clause (e) in the three facts that use
  the energy identity $E=ck^{2} = \hbar^{2}k^{2}/(2m)$.

## Sources

`research/physics-cm-qm-gr-79-2026-10-11-batch-61.coverage.json` records four
independent treatments for the A page, all fetched in full and stamped by
`node tools/physics-support/source-fetch-check.mjs --coverage <file> --stamp`:

- Binney and Skinner, *The Physics of Quantum Mechanics* (book), Chapter 12
  printed pages 257-284 — §12.1 scattering operator, §12.2 S-matrix, §12.3
  cross sections and flux, §12.5 partial waves and low energy, §12.6
  resonances; §12.4/§12.7 (target survey, qualitative conclusions) out of scope
  because the pair records no experiment.
- Teschl, *Mathematical Methods in Quantum Mechanics*, 1st ed. (monograph),
  Chapter 12 printed pages 247-256 — Theorem 12.4 page 249 (Cook), Theorem
  12.12 pages 253-256 (Enss completeness), the short-range condition; Chapter
  3 §3.1 (spectral theorem) and Chapter 7 §7.2-7.3 (free operator, Sobolev
  domain) for the scaling lemma and the model definition; Chapter 12
  §§12.4-12.5 (further extensions) out of scope.
- Fitzpatrick, *Quantum Mechanics* (complete course text), Chapter 15 printed
  pages 209-222 — §§15.1-15.4 amplitude/flux/cross-section/Born, §15.5
  partial waves and hard sphere, §15.7 low energy; the optical theorem and
  further approximation sections out of scope because the pair declares no
  optical theorem or inelastic extension.
- Tong, *Quantum Mechanics* (complete lecture set), §1.2.2 printed pages 11-13
  — conservation of probability and the current, used for the continuity
  item's conventions.

Full text (not snippets) was read for the cited ranges of all four documents;
the `fetch_verified` stamps record the bytes and hashes. Nothing was
harvested from a preview, abstract page or HTTP error page.

## Consumer-batch dependency inputs

`research/physics-cm-qm-gr-79-2026-10-11-batch-61.cross-batch-dependencies.json`
records 229 item edges to in-run batches and out-of-run published mathematics
items, with role, use context and status `verified`, plus one page edge for the
declared A-page requirement `qm-controlled-approximations` (batch 59). The
derived shared ledger was refreshed with
`node tools/physics-support/frontier-dependency-ledger.mjs refresh --run
physics-cm-qm-gr-79-2026-10-11`. No batch-61 edge is open or escalated: every
in-run supplier is authored except as noted under "unresolved findings", and
batch 61 consumes no item of the escalated batch 59 WKB/perturbation set.

## Checks run (actual outputs)

- `precheck.mts` on all 23 items: `15 checked, 0 failing — all clean`.
- `proof-layout.mjs` on all 23 items: `23 items, 79 steps, 0 defects`.
- `rendercheck.mjs` on all 23 items: `OK — 23 file(s)` (KaTeX, YAML, no
  multiline displays).
- `item-dependency-levels.mjs check --run ...`: reports only
  `qm-light-matter-and-spectral-transitions` and its examples companion with
  `empty scaffold inventory` (batch 64, not this batch); no batch-61 error.
- `manifest-deps.mjs` on the batch manifest: `23 item(s), 0 normalized,
  0 error(s)`.
- `manifest-integrity.mjs --run ...`: `158 page(s) owed, 158 in the
  manifests; no scope drift`.
- `content-policy.mjs` on the batch manifest: `23 scoped item(s), 0 error(s),
  0 warning(s)`.
- `proof-contract.mjs <batch contract> --strict`: `0 error(s), 0 warning(s),
  15/15 item(s) checked`.
- `coverage-checklist.mjs <batch coverage>`: `1 page(s), 21 harvested
  result(s), 0 error(s), 0 warning(s)`.
- `source-fetch-check.mjs --coverage <batch coverage>` (check mode): `4/4
  source(s) fetch-verified; 4/4 resolved`.
- `citecheck.mjs` on all 23 items: `23 item(s) scanned; OK — every recognised
  elementary move cites a home that states it`.
- `prosecheck.mjs` on all 23 items and both library pages: `0 error(s),
  2 warning(s)`, the warnings being the heuristic `count-of-this-page` on the
  phrases "one of these" / "none of them" inside the enumerated scope list of
  `rem-nrqm-scattering-scope-and-empirical-status`; both sentences are true of
  the list they immediately follow and were left as written.
- `articlecheck.mts` does not apply to library pages (it is the gate for
  `articles/` narrative files and requires `slug`/`description`/`purpose`
  frontmatter that no physics library page carries; the batch-63 page fails it
  identically). The library pages are validated by `depcheck`'s page checks and
  by `content-policy` instead, both clean for this batch.
- `extcheck.mjs` (repo-wide): `28656 items, 0 recorded-not-proved, 0 resting
  on them; OK`. No batch-61 finding.
- `fwdcheck.mjs` (repo-wide): `0 open forward reference(s), 373 closed, 56
  load bearing`; the single error names
  `items/thm-zero-weak-gradient-implies-componentwise-constancy` (imported
  mathematics, not this batch).
- `depcheck.mjs` (repo-wide): FAIL with 3,639 lines of pre-existing corpus
  debt, overwhelmingly `[published-unaudited]` on imported mathematics items
  and missing historical owner receipts; **no line names any batch-61 item**
  (verified by grep for `nrqm-scattering`).
- `validate-plan.mjs research/plan-spec.json --run ...`: FAIL with four
  `[undeclared-prereq]` errors, all on the GR batch 79 pages
  (`gr-gr15-exact-checked-sbierski-...`); no batch-61 page or item is named.
  Before the repair above it also reported `[b-leaf]` and
  `[undeclared-prereq]` for `qm-three-dimensional-scattering`; those are gone.
- `physics-check.mjs --run ...` and `frontier-item-gate.mjs --tool depcheck
  --run ...` cannot run at all while batch 64's manifest pages are empty
  (`Invalid or empty current page in ...batch-64.pages.json`); this is
  unauthored-batch debt, not a batch-61 finding.

## Unresolved findings and honest status

**Imported or neighbour dependency defects observed (canonical-ledger
material; none repaired here because the carriers are outside this batch, and
the imported mathematics workspace is read-only).**

- `depcheck` `[cited-not-in-deps]` in actual dependencies:
  `items/def-interval.md` cites `rem-sup-conventions`;
  `items/def-l-p-space-as-a-quotient-by-null-functions.md` cites
  `thm-the-l-p-distance-for-zero-less-p-less-one-is-a-complete-translation-invariant-metric`;
  `items/def-projection-valued-measure.md` cites
  `lem-scalar-and-complex-measures-from-a-pvm`;
  `items/thm-nrqm-controlled-dynamics-concrete-three-dimensional-cook-existence.md`
  (in-run, batch 40/41 material) cites
  `thm-nrqm-controlled-dynamics-compact-support-asymptotic-completeness` in
  its closing remark without a `deps`/`forward_refs` entry. Publication
  states: the first three are published imported mathematics; the last is an
  authored draft of this run. Repair strategy: the owning writer adds the edge
  (or removes the sentence); batch 61 uses only the unchanged load-bearing
  clauses of these items.
- `fwdcheck` `[forward-undeclared]`: 53 error lines corpus-wide name one of
  the files batch 61 depends on (most frequently
  `thm-algebra-of-derivatives`, `thm-bounded-borel-pvm-integral`,
  `def-divergence-and-curl-of-a-c1-vector-field`, `def-countable-choice`,
  `lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules`).
  They are internal wikilinks of imported mathematics items to pages that sit
  later in the merged corpus order. None names a batch-61 item. Repair
  strategy: the root-library owner declares the links in `forward_refs`;
  batch 61's proofs rely on the cited statements only.
- `def-countable-choice` carries a recorded local repair receipt in
  `depcheck`'s `[published-local-repair]` class (no whole-item audit claimed).
  Batch 61 consumes only its stated choice axiom, unchanged.

- **Batch 64 (not this batch).**
  `qm-light-matter-and-spectral-transitions` and its companion still have
  empty scaffold inventories; they block the run-scoped gates listed above and
  supply the only `item-dependency-levels` errors. Reported, not repaired here.
- **Required page and neighbour batch status.** The A page's declared
  requirement `qm-controlled-approximations` (batch 59, 13 items) is authored
  and carries no open `step1-decisions` work entry. The owner-held escalations
  visible to `step1-decisions check` are on `qm-driven-dynamics-and-adiabatic-
  limits` (batch 60, 11 items) and on GR batch 79 items; batch 61 consumes no
  item of either set (its controlled-dynamics suppliers are batches 40-41, its
  framework suppliers batches 43-58, and its Coulomb suppliers are the central
  and run mathematics items). The batch-61 prerequisites are therefore met;
  planned or escalated suppliers were not treated as published.
- **Pre-existing corpus debt.** `depcheck` and `validate-plan` fail on
  repo-wide debt that does not name batch-61 items (published-unaudited
  imported items, the GR batch 79 undeclared prerequisites). Recorded for the
  canonical ledger; not repaired because the affected items are outside this
  batch's ownership and the imported mathematics workspace is read-only.
- **Known limitation of the design's Coulomb clause.** The pair proves
  completeness of the Dollard-modified comparison for the Coulomb model and
  explicitly does not assert the ordinary comparison; whether a given Coulomb
  potential satisfies the general resolvent-tail integrability hypothesis is
  deliberately not asserted. An explicit Rutherford-type amplitude would
  require a further angular asymptotic analysis and is not claimed.
- No escalation is required from this batch: every consumed prerequisite is
  either an authored in-run item or a published imported mathematics item, and
  no assigned claim was weakened to fit the page budget (18/56 and 5/28 used).
