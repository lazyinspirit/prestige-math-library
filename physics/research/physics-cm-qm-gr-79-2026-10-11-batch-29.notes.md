# Batch 29 notes — `cm13-symplectic-geometry-and-canonical-methods` (and examples)

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, batch 29; one A/B pair
(orders 137/138), category `non-relativistic-classical-mechanics`, library
`physics`. Step 1 (complete initial authoring) is finished: 21 items, both page
carriers, the batch manifest, coverage, cross-batch inputs and the proof
contract are authored, and every item is checked and recorded ready. This is an
authoring disposition, not a mathematical approval; Step 2 and Step 3 review
follow.

## Delivered inventory

- A page `cm13-symplectic-geometry-and-canonical-methods` (15 items, levels
  0–24): `def-cm13-two-form` (16), `pthm-cm13-two-form-is-symplectic` (17),
  `def-cm13-canonical-form` (18), `def-cm13-hamiltonian-field` (19),
  `pthm-cm13-hamiltonian-field-integrates-the-model-equations` (20),
  `def-cm13-poisson` (20), `pthm-cm13-bracket-identities` (21),
  `pthm-cm13-observable-evolution` (22), `def-cm13-canonical-map` (20),
  `pthm-cm13-flow-preservation` (21),
  `pthm-cm13-dynamics-transport-under-canonical-maps` (22),
  `lem-cm13-poincare-cartan-annihilation-characterization` (0,
  `domain: mathematics`), `pthm-cm13-liouville` (22),
  `pthm-cm13-generating-functions` (23), `rem-cm13-locality-topology` (24).
- B page `cm13-symplectic-geometry-and-canonical-methods-examples` (6 items,
  levels 4–24): `ex-cm13-fundamental-brackets-and-evolution-checks` (23),
  `ex-cm13-isotropic-oscillator-flow-symplectic-and-volume-checks` (23),
  `ex-cm13-free-particle-flow-generating-function` (24),
  `ex-cm13-point-transformation-generating-function-and-projection` (24),
  `ex-cm13-determinant-tests-for-linear-canonical-maps` (4,
  `domain: mathematics`), `ex-cm13-verlet-map-of-the-mechanical-splitting-is-canonical`
  (22).
- Levels are one plus the maximum level of an in-run `deps` target; published
  root suppliers and out-of-run pages do not raise them. Checked mechanically
  with `item-dependency-levels.mjs check --run`: no cm13 finding (remaining
  errors are other batches' stale levels and empty inventories).

## Design versus plan

- The reservation (track plan L795–L833 and `research/plan-spec.json` entries
  137/138) lists ten provisional A items with their kinds; the delivered A
  inventory realizes every one of them (`cm13-two-form` → `def-cm13-two-form`,
  `cm13-canonical-form` → `def-cm13-canonical-form`, `cm13-hamiltonian-field` →
  `def-cm13-hamiltonian-field`, `cm13-poisson` → `def-cm13-poisson`,
  `cm13-bracket-identities` → `pthm-cm13-bracket-identities`,
  `cm13-flow-preservation` → `pthm-cm13-flow-preservation`, `cm13-liouville` →
  `pthm-cm13-liouville`, `cm13-canonical-map` → `def-cm13-canonical-map`,
  `cm13-generating-functions` → `pthm-cm13-generating-functions`,
  `cm13-locality-topology` → `rem-cm13-locality-topology`) and adds five
  locally required items that the contract needs but the reservation did not
  name: `pthm-cm13-two-form-is-symplectic` (closedness, nondegeneracy and
  chart-covariance of the model's forms),
  `pthm-cm13-hamiltonian-field-integrates-the-model-equations` (identification
  of the model's motions with the integral curves, including the forced case),
  `pthm-cm13-observable-evolution` (evolution law, first integrals and their
  closed bracket algebra), `pthm-cm13-dynamics-transport-under-canonical-maps`
  (conjugation and transport) and the local mathematics lemma
  `lem-cm13-poincare-cartan-annihilation-characterization`. No reserved claim
  was dropped or weakened; the A budget 65 and B budget 28 are respected.
- B themes realized: "symplectic map versus globally exact generating
  function" through `ex-cm13-point-transformation-generating-function-and-projection`
  (second-kind generation with a nowhere-invertible $(q,Q)$-projection),
  `ex-cm13-free-particle-flow-generating-function` and the scope remark
  `rem-cm13-locality-topology` with the cited
  `prop-cm-cylinder-shift-has-no-global-generating-function`; "local
  projections and determinant tests" through `ex-cm13-determinant-tests-for-linear-canonical-maps`
  (dimension two versus dimension four) and the projection clause of
  `pthm-cm13-generating-functions`.
- The design's local mathematical proof sections `E1`, `E7`, `E15` are
  realized in this run's mathematics suppliers on `cm-math-canonical` and
  `cm-math-numerical` (phase domains, the standard form, Hamiltonian field and
  bracket, canonical-map tests, generating functions, splitting and Verlet),
  which the pair consumes as in-run mathematical premises, plus the new local
  lemma on the A page. Of the design's published canonical mathematical
  suppliers, `def-countable-choice`, `thm-euclidean-inverse-function-theorem`
  and `cor-c-one-change-of-variables-for-l-one-functions` are consumed;
  `thm-a-regular-level-set-is-an-embedded-submanifold` is not, because no
  delivered claim develops level-set or submanifold structure, and no scope was
  narrowed to avoid it.
- `research/plan-spec.json` entries 137/138 agree with the carriers in id,
  title, kind, order, category, library, companion and `requires`
  (`cm-math-numerical`, `cm12-legendre-transformation-and-hamiltonian-mechanics`);
  the plan item arrays are empty (prose-track splice), so item scope comes from
  the linked inventory and this batch's manifest. No design-versus-plan
  conflict was found.
- **Design source pointer reconciliation (recorded, destination fixed).** The
  reservation's source line reads "T§§4.2,4.4,4.6; S Ch5; L§10.4". Tong §§4.2
  (Liouville), 4.4 (canonical transformations, generating functions) and SICM
  Ch 5, together with Likharev §10.1, are harvested with item dispositions.
  Tong §4.6 (adiabatic invariants) and Likharev §10.4 (the Hamilton–Jacobi
  equation) concern topics this pair's contract does not carry; they are the
  cm14-hamilton-jacobi-and-integrability subject matter (whose provisional
  inventory carries `cm14-adiabatic-invariant`, `cm14-hj` and
  `cm14-complete-integral`). Four explicit `deferred` rows with that
  destination and per-row reasons were added to the coverage this session
  (Tong 4.6 and Likharev 10.4 on both pages) so the design pointer is neither
  silently dropped nor wrongly absorbed. Flagged for the owner: cm14's own
  source list cites T§§4.5,4.7 and L§§10.5–10.6, so the §4.6/§10.4 pointers
  look like a reservation split artifact; no cm13 claim was added, weakened or
  re-homed.

## Sources and coverage

- A page: four independent treatments — Tong, Classical Dynamics (lecture
  notes) §§4.2–4.4; Cline, Variational Principles in Classical Mechanics
  §§15.1–15.7; Sussman–Wisdom, SICM (2nd ed.) §§5.1–5.4.1; Likharev, Essential
  Graduate Physics CM §10.1 (three textbooks, one lecture-notes set). B page:
  the same four treatments with example-focused locators. All eight source
  entries are `source-fetch-check --stamp` verified (byte counts, hashes,
  timestamps, PDF page counts: Tong 139 pp., Cline 772 pp., Likharev 252 pp.,
  SICM archive) and re-check clean (`8/8 source(s) fetch-verified`); no
  recovery attempt or source drop was needed.
- 47 disposition rows: 43 harvested results (A page 33: 19 included, 5 inline,
  5 out-of-scope, 4 deferred; B page 10 included) plus the four design-pointer
  deferrals of the previous section. Deferred destinations: Poincaré
  recurrence and canonical perturbation theory → `cm16-stability-perturbations-and-chaos`;
  Cline 15.4 Hamilton–Jacobi and 15.5 action–angle → `cm14-hamilton-jacobi-and-integrability`;
  Tong 4.6 and Likharev 10.4 → `cm14-hamilton-jacobi-and-integrability`.
  Out-of-scope results carry per-result reasons (ensemble densities and
  Boltzmann distributions belong to statistical mechanics; the angular-momentum
  Runge–Lenz algebra, the magnetic monopole and the point-vortex model belong to
  other frameworks or pages).

## Cross-batch dependencies and consumer inputs

- 178 outgoing rows (176 item edges plus the A page's two `requires` edges) are
  recorded with consumer-side evidence in
  `physics-cm-qm-gr-79-2026-10-11-batch-29.cross-batch-dependencies.json` and
  accepted by `frontier-dependency-ledger.mjs refresh` ("refreshed and
  deduplicated"): 178 batch-29 edges, 0 without review, 0 orphaned reviews.
  Supplier batches: 6 (`cm-math-canonical`, 41 edges), 10 (`cm-math-numerical`,
  9), 17 (`cm01`, 29), 18 (`cm02`, 23), 19 (`cm03`, 13), 23 (`cm07`, 27), 28
  (`cm12`, 36); 28 distinct in-run suppliers, all statements read against the
  current carriers. Published root-library suppliers (differential forms,
  pullbacks, inverse-function theorem, countable choice, volume-form corollary)
  are read-only context and are not cross-batch rows.
- Consumer batches of this pair (from the run level file): batch 30 (cm14,
  `requires: [5, 24, 29]`) and later CM pages reachable through cm13; their
  manifests are still empty, so their dependency inputs will be written by
  their own workers against the current carriers.
- Choice: `pthm-cm13-liouville` assumes the Axiom of Countable Choice
  (`def-countable-choice`, role `mathematical-premise`, used only in the
  change-of-variables step of clause 2 and stated in its statement); the scope
  remark carries the qualification. The Poincaré–Cartan lemma, the bracket
  identities, the transport theorems and all examples are choice-free.

## Authoring review repairs (Step 1, handoff session)

1. **Missing page carriers authored.** The two page carriers
   `library/non-relativistic-classical-mechanics/cm13-symplectic-geometry-and-canonical-methods.md`
   and `...-examples.md` did not exist on disk (the manifest alone is not a
   carrier; `dispatch-author-artifacts` requires both page files). They were
   authored with frontmatter (`page`, `title`, `status: draft`, `library`,
   `items`/`examples` mirroring the manifest order, `requires` matching the
   plan) and page prose summarizing the delivered items, the scope remark and
   the worked checks.
2. **Stale proof contract regenerated.** `proof-contract --strict` reported 37
   `citation-quote-mismatch` errors because item texts had been edited (same-page
   forward links replaced by descriptive references) after the last contract
   regeneration. All 15 entries were regenerated with
   `regen-contract-entries.mjs` (citation quotes are the full statement
   sections of the cited items, per the regenerator's documented convention);
   strict mode is now 0 errors, 0 warnings.
3. **One citation-fidelity candidate read and dismissed.** The widening screen
   flagged `pthm-cm13-observable-evolution` F1 → `def-cm13-two-form` as
   "quantifies over all $N$"; the detector had matched the substring "any
   solution" case-insensitively (its final "n" read as the symbol $N$). F1 is
   restated inside the item's own adopted presentation, whose $N\ge1$ label
   number is fixed in the Statement. Recorded with `reviewed.upheld` and a
   reason in the contract citation; the screen now reports 0 widening
   candidates and 1 upheld-by-review row.
4. **Stale manifest statements re-synced.** Seven manifest `statement` fields
   still carried the pre-edit texts (the same late item edits as item 2). All
   seven were re-synced from the item carriers; after the sync every manifest
   field (title, kind, domain, statement, strategy, deps, dependency_roles,
   dependency_level, provenance, physical_scope, sources) equals the
   corresponding item carrier, and the manifest remains ASCII-escaped like its
   siblings.
5. **One page-prose sentence tightened.** The A-page summary of clause 4 of
   `pthm-cm13-hamiltonian-field-integrates-the-model-equations` now states the
   exact criterion $d(t,x,v)=-\nabla_{x}V(t,x)$ for a $C^{2}$ potential
   $V:I_{0}\times Q\to\mathbb R$ instead of the looser "velocity-independent
   potential" phrasing.

## Checks run on the final carriers

- `precheck.mts` (all 21 items): `15 checked, 0 failing — all clean` (the five
  definitions and the remark have no proof body).
- `proof-layout.mjs` (21 items + 2 page carriers): `23 items, 81 steps,
  0 defects`.
- `rendercheck.mjs` (23 files): OK — YAML, KaTeX, math nesting, no multiline
  displays.
- `proof-contract.mjs --strict`: `0 error(s), 0 warning(s), 15/15 item(s)
  checked`; `citation-fidelity.mjs`: 323 citations, 0 quote-not-found, 0
  widening candidates, 1 upheld-by-review; `truncated-citation.mjs`: no
  candidates.
- `coverage-checklist.mjs` (with `--require-destination`): `2 page(s),
  47 harvested result(s), 0 error(s), 0 warning(s)`;
  `source-fetch-check.mjs --coverage`: `8/8 source(s) fetch-verified`.
- `content-policy.mjs` on the batch manifest: `21 scoped item(s), 0 error(s),
  0 warning(s)`; `manifest-deps.mjs`: `21 item(s), 0 normalized, 0 error(s)`;
  `manifest-integrity.mjs --run`: `158 page(s) owed, 158 in the manifests — no
  scope drift`.
- `item-dependency-levels.mjs check --run`: no cm13 finding (63 errors remain
  in other batches). `depcheck.mjs --quiet`: no cm13 line (run-wide FAIL from
  unrelated legacy published items). `fwdcheck.mjs --quiet`: no cm13 line.
  `extcheck.mjs --quiet`: `OK`. `validate-plan.mjs`: the cm13 lines show the
  two pages with 15 and 6 items and their declared `requires`, no cm13 error
  (the run has 5 `undeclared-prereq` errors on other pages).
- Scoped `validatePhysicsContent` over the batch (21 items, 2 pages): 0 errors.
  `frontier-dependency-ledger.mjs refresh`: accepted, 178 batch-29 edges all
  reviewed.

## Run-level findings outside batch 29 (recorded, not repaired here)

1. `depcheck.mjs` fails run-wide on legacy published items unrelated to this
   batch (for example `published-unaudited` rows on
   `thm-word-problem-for-finitely-generated-abelian-groups`,
   `thm-zero-divisor-theorem-on-plane-domains`): 0 of those lines concern cm13.
2. `item-dependency-levels.mjs check --run` reports 63 errors in other batches
   (for example stale levels on `ex-gr-plane-wave-regauge-to-tt`,
   `cex-gr-subluminal-planar-profile-not-a-vacuum-wave`), none on cm13.
3. `physics-check.mjs --run` aborts on `physics-content: Invalid or empty
   current page in physics-cm-qm-gr-79-2026-10-11-batch-30.pages.json`, and
   `proof-contract-coverage.mjs --run` aborts on the empty cm14 frontier page
   inventory; the unbuilt later batches block those run-wide forms, as
   recorded by batches 28. The batch-local contract itself covers all 15
   proof-bearing items.
4. `validate-plan.mjs research/plan-spec.json --run` reports five
   `undeclared-prereq` errors on `qm-math-coulomb`,
   `qm-math-controlled-dynamics`, `qm-math-fock-and-equilibrium`,
   `gr-linearized-waves` and `gr-linearized-waves-examples`; none concerns
   cm13.

## Readiness

All 21 items are recorded `ready` after the final carriers, manifest, page
carriers and contract were written, each with its exact examined dependency
list; no cm13 item is escalated. `step1-decisions check --run` reports 0 stale
cm13 records (other batches' missing records remain theirs). Step 1 authoring
is complete; independent review is Step 2's task, and readiness here is an
authoring disposition, not a mathematical approval.
