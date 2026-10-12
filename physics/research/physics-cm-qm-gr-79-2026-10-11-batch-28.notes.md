# Batch 28 notes — `cm12-legendre-transformation-and-hamiltonian-mechanics` (and examples)

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, batch 28; one A/B pair
(orders 135/136), category `non-relativistic-classical-mechanics`, library
`physics`. Step 1 (complete initial authoring) is finished: 14 items, both page
carriers, the batch manifest, coverage, cross-batch inputs and the proof
contract are authored, and every item is checked and recorded ready. This is an
authoring disposition, not a mathematical approval; Step 2 and Step 3 review
follow.

## Delivered inventory

- A page `cm12-legendre-transformation-and-hamiltonian-mechanics` (9 items,
  levels 14–19): `def-cm12-cotangent-momentum` (14), `def-cm12-regularity`
  (14), `def-cm12-hyperregularity` (15), `def-cm12-hamiltonian` (16),
  `pthm-cm12-local-legendre` (15), `pthm-cm12-mechanical-hyperregularity`
  (17), `pthm-cm12-hamilton-equivalence` (18), `pthm-cm12-energy-time` (19),
  `rem-cm12-singular-models` (19).
- B page `cm12-legendre-transformation-and-hamiltonian-mechanics-examples`
  (5 items, levels 4–20): `ex-cm12-mechanical-legendre-positive-metric` (19),
  `ex-cm12-pendulum-legendre` (20), `ex-cm12-shifted-momentum` (19),
  `ex-cm12-regular-not-surjective` (4, `domain: mathematics`),
  `ex-cm12-moving-coordinates` (20).
- Levels are one plus the maximum level of an in-run `deps` target; root
  published suppliers and out-of-run pages do not raise them. Checked
  mechanically with `item-dependency-levels.mjs check --run`: no cm12 finding
  (remaining errors are the empty inventories of unbuilt later batches).

## Design versus plan

- The reservation (track plan L765 and `research/plan-spec.json` entries
  135/136) lists eight provisional A items with their kinds; the delivered A
  inventory realizes every one of them (cotangent-momentum def, regularity
  def, hyperregularity def, local-legendre pthm, hamiltonian def,
  hamilton-equivalence pthm, energy-time pthm, singular-models rem) and adds
  one locally required theorem, `pthm-cm12-mechanical-hyperregularity`: the
  physics identification that the model's two charts are hyperregular with
  the explicit inverse branches and kinetic-plus-potential Hamiltonians. The
  B page carries five constructed examples covering the design's B themes
  (positive kinetic metric, shifted momentum, regular-but-not-surjective
  `e^v`, moving coordinates) plus the planar pendulum instance of the
  constraint-elimination chart. No reserved claim was dropped or weakened.
- Local mathematical proof sections: the design's `M4` (regular, hyperregular
  and mechanical Legendre maps) and `E20` (pace/endpoint action) are realized
  in this run's mathematics items on `cm-math-variations`
  (`def-cm-legendre-map-in-a-time-dependent-chart`,
  `lem-cm-legendre-map-local-invertibility`,
  `prop-cm-mechanical-chart-lagrangian-is-hyperregular`,
  `prop-cm-hamiltonian-branch-identities`, `rem-cm-scope-of-the-legendre-map`),
  which the pair consumes as in-run mathematical premises. The published
  canonical supplier named by the reservation,
  `thm-euclidean-inverse-function-theorem`, is consumed with its exact
  statement; `thm-cm-stationarity-iff-euler-lagrange` and
  `prop-cm-hamiltonian-branch-identities` are the other load-bearing
  mathematics.
- `research/plan-spec.json` entries 135/136 agree with the carriers in id,
  title, kind, order, category, library, companion and `requires`; the plan's
  item arrays are empty (prose-track splice), so item scope comes from the
  linked inventory and this batch's manifest. No design-versus-plan conflict
  was found.
- Design interactions recorded, not repaired: (1) the design's B note "no
  Dirac constraints claimed" is preserved as the scope statement of
  `rem-cm12-singular-models` and as clause 4 of
  `pthm-cm12-hamilton-equivalence`, which covers constraints only by
  elimination; (2) the design's "moving coordinates" theme is realized as a
  time-dependent chart computation
  (`ex-cm12-moving-coordinates`), which is *not* a generalized-coordinate map
  of `def-cm07-generalized-coordinates-and-forces` (that map is
  time-independent), so the example uses the rheonomic covariance theorem
  `pthm-cm07-coordinate-covariance-of-the-equations` instead of the
  substituted-chart items.

## Sources and coverage

- A page: five independent treatments — Tong §§4.1–4.1.5, Likharev §10.1,
  Stewart §1.2, SICM §§3.1–3.1.3 and Cline §§8.1–8.3 (three textbooks, one
  lecture-notes set, one course-notes set). B page: four of them with
  example-focused locators. All nine coverage entries are
  `source-fetch-check`-stamped with byte counts, hashes and timestamps
  (`fetch_verified`: Tong PDF 139 pages, Likharev PDF 252 pages, Stewart PDF
  199 pages, SICM archive, Cline PDF 772 pages); no recovery attempt or drop
  was needed. 53 harvested results receive dispositions (31 included, 5
  inline, 17 out-of-scope or deferred with per-result reasons and, where
  applicable, planned-page destinations).
- Source limitations recorded: Tong §4.1.1's convexity framing of the inverse
  Legendre transform is too restrictive for local mechanical inversion; the
  hypothesis actually used is nonsingularity of the velocity Hessian, as the
  in-run `lem-cm-legendre-map-local-invertibility` states, and no convexity
  premise is claimed anywhere. Tong's §4.1.1 inverse-transform display has the
  sign slip recorded by the CM source audit; nothing on this page uses that
  display, and the differential identities consumed here are those of
  `prop-cm-hamiltonian-branch-identities`. Likharev's §10.1 omits explicit
  Legendre-regularity hypotheses; the pair supplies them from the mathematical
  items rather than from the source. SICM's §3.1.1 explicitly restricts the
  closed-form Legendre implementation to velocity-quadratic Lagrangians, which
  is exactly the class of the model's charts; Stewart's H-versus-E caution and
  moving-cart computation are consumed as the moving-chart example, with the
  inertial-frame Hamiltonian identity restricted accordingly.

## Cross-batch dependencies and consumer inputs

- 116 outgoing cross-batch rows (115 item edges plus the A-page → cm07 page
  edge) are recorded with consumer-side evidence in
  `physics-cm-qm-gr-79-2026-10-11-batch-28.cross-batch-dependencies.json` and
  accepted by `frontier-dependency-ledger.mjs refresh`
  ("refreshed and deduplicated"): 116 batch-28 edges, 0 without review, 0
  orphaned. In-run item suppliers come from batches 4, 17, 18, 19, 22 and 23;
  root published items supply the analysis but are not cross-batch rows.
- Consumer batches of this pair (from the run manifests): batch 29 (cm13,
  `requires: [10, 28]`) and later CM pages reachable through cm13; their
  manifests are still empty, so their dependency inputs will be written by
  their own workers against the current carriers.
- **Recorded cross-batch metadata defect (not repaired here).** The scoped
  physics-content validation of this batch's dependency closure reports
  `role-supplier` errors on seven batch-23 (cm07) items —
  `def-cm07-generalized-coordinates-and-forces`,
  `pthm-cm07-first-variation-and-euler-lagrange-expression`,
  `pthm-cm07-euler-lagrange-equations`, `pthm-cm07-newton-equivalence`,
  `pthm-cm07-coordinate-covariance-of-the-equations`,
  `pthm-cm07-boundary-terms-and-gauge` and
  `pthm-cm07-lagrangian-reduction-of-ideal-constraints` — because each
  annotates its `def-cm03-potential-and-mechanical-energy` dependency as
  `physical-assumption` while the supplier is a `definition`, and the current
  validator requires `formulation-prerequisite` (or another non-physical
  assumption role) for a non-postulate. The defect is metadata only: the
  statements and proofs of those items are unaffected, and this batch cites
  them as `physical-result` prerequisites of their own theorems with their
  actual statements read. The repair belongs to the batch-23 owner under the
  ordinary dependency-role rules; no batch-23 carrier was edited here.

## Authoring review repairs (Step 1, final session)

1. Precheck canonicalisation: all nine proof-bearing items were adopted in the
   precheck's canonical step-numbering form (52 numbered steps), and one stale
   internal reference (`ex-cm12-regular-not-surjective` step 2.1 citing the
   old `2.2`) was corrected after renumbering.
2. `rendercheck` found one multiline display in
   `ex-cm12-moving-coordinates`; it was joined into one source line.
3. `content-policy` rejected two facts citing the `ai-generated`-statement
   example `ex-cm-regular-lagrangians-need-not-be-hyperregular`; both
   consumers were rewritten to cite the `ai-altered` scope remark
   `rem-cm-scope-of-the-legendre-map` instead (and, in
   `ex-cm12-regular-not-surjective`, the definition
   `def-cm-legendre-map-in-a-time-dependent-chart`), removing the prohibited
   edge.
4. Every fact of every proof-bearing item is cited by at least one numbered
   step; the proof contract's citation/derivation/boundary worksheets are
   regenerated from the final carriers, its citation quotes are targeted
   excerpts aligned to sentence boundaries, and it passes strict mode;
   `citation-fidelity.mjs` reports every recorded quote found in its cited
   item and no widening candidate, and `truncated-citation.mjs` finds no
   candidate over the nine proof-bearing items.

## Checks run on the final carriers

- `precheck.mts` (14 items): `9 checked, 0 failing — all clean` (the four
  definitions and one remark have no phase body).
- `proof-layout.mjs` (9 proof items + 2 pages): `11 items, 52 steps,
  0 defects`.
- `rendercheck.mjs` (14 items + 2 pages): OK — YAML, KaTeX, math nesting.
- `proof-contract.mjs --strict`: `0 error(s), 0 warning(s), 14/14 item(s)
  checked`; boundaries for all eight standard cases per item.
- `coverage-checklist.mjs`: `2 page(s), 53 harvested result(s), 0 error(s),
  0 warning(s)`; `source-fetch-check.mjs --coverage` (check mode):
  `9/9 source(s) fetch-verified`.
- `content-policy.mjs` on the batch manifest: `14 scoped item(s), 0 error(s),
  0 warning(s)`; `manifest-deps.mjs`: `14 item(s), 0 normalized, 0 error(s)`;
  `manifest-integrity.mjs --run`: `158 page(s) owed, 158 in the manifests — no
  scope drift`.
- `item-dependency-levels.mjs check --run`: no cm12 finding (other batches'
  empty inventories remain). `depcheck.mjs --run`: no cm12 finding.
  `validate-plan.mjs --run`: no cm12 finding. `fwdcheck.mjs --run`: cm12 items
  `inherited`, no finding. `extcheck.mjs` on the 14 explicit paths:
  `0 recorded-not-proved, 0 resting on them — OK`.
- Scoped physics-content validation of the 14 items and 2 pages (local scope
  script over `validatePhysicsContent`, since the run-wide invocation aborts
  on other batches): no error attributable to a batch-28 item; the only
  findings are the seven batch-23 `role-supplier` rows recorded above.

## Run-level findings outside batch 28 (recorded, not repaired here)

1. `physics-check.mjs --run` aborts on
   `physics-content: Invalid or empty current page in
   physics-cm-qm-gr-79-2026-10-11-batch-29.pages.json`; the unbuilt later
   batches are outside this worker's scope and block the run-wide forms of
   `item-dependency-levels`, `proof-contract-coverage` and `extcheck --run` as
   well.
2. `proof-contract-coverage.mjs --run` therefore aborts with
   `Empty or invalid frontier page inventory
   cm08-symmetry-noether-and-conditional-conservation`; the batch-local
   contract itself passes strict mode and covers all nine proof-bearing items
   of this batch.
3. The seven batch-23 `role-supplier` rows of the previous section are the
   only supplier-side findings visible in this batch's dependency closure.

## Readiness

All 14 items are recorded `ready` after the final carrier, manifest, contract
and coverage were written, each with its exact examined dependency list; no
cm12 item is escalated. Step 1 authoring is complete; independent review is
Step 2's task, and readiness here is an authoring disposition, not a
mathematical approval.

## Post-handoff Step-1 proof-text repair pass (2026-10-11, final session)

Four carriers were repaired after the initial handoff; the page carriers,
coverage, sources and dependency edges are unchanged. The pass changed item
text only — no claim, hypothesis or dependency was altered:

1. `pthm-cm12-mechanical-hyperregularity` step 2.1: the LaTeX typo
   `$\mathbb C^{1}$` was repaired to `$C^{1}$` (the hyperregularity
   vocabulary requires a $C^{1}$ inverse branch).
2. `pthm-cm12-hamilton-equivalence` clauses 1(b) and 2(b) and steps 1.1/2.2:
   the Cartesian-chart second-slot derivative is now written $H_{x}$ for
   $H(t,x,p)$; the previous $H_{q}$ clashed with the generalized-coordinate
   symbol used in the same statement and with the companion examples'
   $H_{x}$ usage. The generic supplier identities $H_{q}=-\mathcal L_{q}$
   quoted in [F4] from `prop-cm-hamiltonian-branch-identities` are kept
   verbatim, and the coordinate clauses 3-4 correctly keep $\widetilde H_{q}$.
3. `def-cm12-regularity` (Remarks) and `def-cm12-hyperregularity` (clause
   (c)): the witness of the regular-versus-hyperregular separation is now
   named as the companion page's example $\mathcal L(v)=e^{v}$. The earlier
   phrase "bounded-gradient example" did not describe that example (whose
   velocity gradient $e^{v}$ is unbounded); the companion page of this pair
   carries the $e^{v}$ witness, not the mathematical bounded-gradient example
   `ex-cm-regular-lagrangians-need-not-be-hyperregular` of the
   `cm-math-variations-examples` page.

Ripple, regenerated and re-checked: the transitive item-input hash of 12 of
the 14 items changed (only `def-cm12-cotangent-momentum` and
`ex-cm12-regular-not-surjective` lie outside the closure of the four edited
items), so all 12 stale readiness records were re-recorded `ready` with their
unchanged examined dependency lists; the manifest statements of
`def-cm12-hyperregularity` and `pthm-cm12-hamilton-equivalence` were
regenerated from the items; contract entries were regenerated
(`regen-contract-entries.mjs`) and quotes re-trimmed with the sentence-bounded
`best_window` rule, which restored every prior quote except two quotations of
`pthm-cm12-hamilton-equivalence` clause 1(b) (in
`ex-cm12-mechanical-legendre-positive-metric` and `ex-cm12-shifted-momentum`)
and three derivation claims (step 2.1 of
`pthm-cm12-mechanical-hyperregularity`, steps 1.1/2.2 of
`pthm-cm12-hamilton-equivalence`).

Final-state re-run results: precheck 9 checked/0 failing; proof-layout 16
items/52 steps/0 defects; rendercheck clean; proof-contract `--strict` 0
errors/0 warnings (14/14); citation-fidelity 197 citations with no missing
quote and no widening candidate; truncated-citation no candidates over the 9
proof-bearing items; coverage-checklist 2 pages/53 results/0 warnings;
source-fetch-check 9/9 fetch-verified; content-policy 14 items/0 errors/0
warnings; manifest-deps 0 errors; manifest-integrity 158/158 no scope drift;
item-dependency-levels no cm12 finding; depcheck/fwdcheck/validate-plan no
cm12-produced finding (their run-wide non-green output is other batches'
business, recorded above); extcheck 0 recorded-not-proved; scoped
physics-content shows only the seven batch-23 `role-supplier` rows;
`frontier-dependency-ledger refresh` re-accepted 116 batch-28 edges; and
`step1-decisions check --run` reports 0 stale cm12 records. Readiness remains
an authoring disposition, not a mathematical approval.
