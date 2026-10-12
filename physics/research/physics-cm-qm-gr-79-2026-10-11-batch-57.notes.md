# Batch 57 notes — Qm Identical Particles And Exclusion

Run `physics-cm-qm-gr-79-2026-10-11`, role **beta**, batch **57**, covering the
pair `qm-identical-particles-and-exclusion` (A, order 193) and
`qm-identical-particles-and-exclusion-examples` (B, order 194), category
`non-relativistic-quantum-mechanics`, library `physics`. Both page carriers are
`status: draft`; this batch publishes nothing.

Read first: root `CLAUDE.md`, workspace `CLAUDE.md`, `SCHEMA.md`,
`WORKFLOW.md`, `README.md`, `../PHYSICS-CONTENT-MODEL.md`, the binding owner
direction `research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md`
(no batch-57-specific override; its crash-recovery paragraph was applied —
in particular "bounded quantities restrict to a permutation sector only when
they preserve that sector", which is clause (e) of
`def-nrqm-identical-particles-framework-species-sectors-and-preparations`), the
batch dependency levels
`research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json` (batch
57: level 12, requires batches 41 and 55), the design section
`research/plan-non-relativistic-quantum-mechanics-track.md` L3267, the
reservation in
`research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`
(order 15), and `research/plan-spec.json`.

## Inventory

A page `qm-identical-particles-and-exclusion` (9 items; manifest
`dependency_level` in parentheses):

1. `lem-nrqm-identical-particles-two-particle-exchange-operator` (3) —
   mathematics: the exchange operator $\tau$ on the completed tensor square,
   $\tau^2=I=\tau^{*}$, the sector projections
   $P_\pm^{(2)}=\tfrac12(I\pm\tau)$, the norm identities for
   $u\otimes v\pm v\otimes u$ and the nonvanishing of the swap.
2. `thm-nrqm-identical-particles-occupation-number-basis` (3) — mathematics:
   product basis of the finite tensor power, the Slater basis of
   $\operatorname{ran}P_-^{(n)}$ with $\dim=\binom dn$, the symmetric
   (weak-composition) basis of $\operatorname{ran}P_+^{(n)}$ with
   $\dim=\binom{n+d-1}{n}$, the occupation operators $N_j$ and their joint
   eigenspaces.
3. `thm-nrqm-identical-particles-finite-mode-occupation-counts` (4) —
   mathematics: fermionic configurations in $\{0,1\}^d$, the row sum
   $2^d$, the bosonic at-most-$N$ count, and the vanishing of the
   antisymmetric sector for $n>d$.
4. `thm-nrqm-identical-particles-two-factor-symmetry-decomposition` (4) —
   mathematics: for a tensor factorisation $H=H_{\mathrm{orb}}\otimes V_s$,
   $(\tau_H\otimes\tau_V)\Theta=\Theta\,\tau$ and the decomposition of the
   antisymmetric sector into (antisymmetric$\otimes$antisymmetric) and
   (symmetric$\otimes$symmetric) parts.
5. `def-nrqm-identical-particles-framework-species-sectors-and-preparations`
   (8) — physics definition: the declared species sector reading P6 (sector
   projections, sector preparations, sector quantities that preserve the
   sector) and its status/scope.
6. `def-nrqm-identical-particles-framework-orbital-occupation-model` (9) —
   physics definition: the finite-mode occupation model of a sector (declared
   mode family, occupation readouts, joint outcome law, total-occupation
   identity).
7. `pthm-nrqm-identical-particles-permutation-invariance` (9) — physics
   theorem: every declared sector preparation is invariant under the
   permutation unitaries, and the outcome law of an assigned sharp observable
   of the labelled model equals that of its relabelled conjugate.
8. `pthm-nrqm-identical-particles-orbital-occupation-exclusion` (10) — physics
   theorem: in the finite-mode readout, occupations of the antisymmetric
   sector are $0$/$1$ per mode (exclusion), with the bosonic comparison.
9. `rem-nrqm-identical-particles-scope-and-empirical-status` (11) — scope and
   empirical status of the page.

B page `qm-identical-particles-and-exclusion-examples` (3 items):

1. `texp-nrqm-identical-particles-two-fermion-spatial-spin-symmetry` (12) —
   thought experiment (conditional model computation): the two spin-half
   fermion sector, singlet/triplet parts and the opposite orbital symmetry.
2. `ex-nrqm-identical-particles-exchange-versus-coulomb-terms` (13) — the
   direct and exchange contributions $D\pm X$ to the pair expectation of the
   repulsion, with $X>0$ for sign-definite orbitals.
3. `rem-nrqm-identical-particles-examples-scope-limits` (14) — scope of the
   examples page.

Carriers
`library/non-relativistic-quantum-mechanics/qm-identical-particles-and-exclusion.md`
and `...-examples.md`; manifest
`research/physics-cm-qm-gr-79-2026-10-11-batch-57.pages.json`; proof contracts
`research/physics-cm-qm-gr-79-2026-10-11-batch-57.proof-contracts.json` (8
proof-bearing items: the lemma, the three theorems, the two physics theorems,
the thought experiment and the example; the two definitions and the two
remarks carry no proof section); coverage
`research/physics-cm-qm-gr-79-2026-10-11-batch-57.coverage.json` (2 pages, 22
harvested results, 6 fetch-verified source entries); cross-batch input
`research/physics-cm-qm-gr-79-2026-10-11-batch-57.cross-batch-dependencies.json`
(52 rows: 49 item edges into in-run suppliers plus 3 page edges; see
"Cross-batch input" below).

## Design versus plan (conflicts and deviations)

1. **`requires` drift: a third requirement.** The design and `plan-spec.json`
   declare `qm-composites-entanglement-and-reduced-states` and
   `qm-math-fock-and-equilibrium` for the A page. The item
   `pthm-nrqm-identical-particles-permutation-invariance` consumes
   `lem-nrqm-oscillator-unitary-transport-of-spectral-pvms` (batch 52, page
   `qm-harmonic-oscillator`), so `validate-plan --run` reported
   `undeclared-prereq`. The A page now declares `qm-harmonic-oscillator` as a
   third requirement (order 183 < 193), as batch 54 and batch 55 declared
   their own third requirements. `plan-spec.json` is not edited; the
   difference is recorded here for owner reconciliation. After the addition
   `validate-plan --run` reports 0 errors for the pair.
2. **Citation replacement forced by a page outside the plan.**
   `thm-nrqm-identical-particles-occupation-number-basis` and
   `thm-nrqm-identical-particles-finite-mode-occupation-counts` originally
   cited `lem-binomial-coefficients-symmetric-and-unimodal` for
   $\binom{n+d-1}{d-1}=\binom{n+d-1}{n}$. That item is homed on
   `chains-antichains-sperner-and-dilworth`, a combinatorics page outside
   `plan-spec.json`: `validate-plan --run` flagged the induced page edge as
   `undeclared-prereq`, and adding that page to `requires` is impossible
   because `requires-resolve` accepts only planned pages. Under the tool's own
   instruction ("either add it or drop the dependency") the dependency was
   replaced by `thm-binomial-closed-formula` clause 3 (symmetry), homed on
   `finite-counting-and-binomial-coefficients`, which lies inside the
   requires closure. The identity used and its hypotheses are unchanged
   ($N=n+d-1\ge k=d-1\ge0$); no claim was weakened, and the proof contracts
   now quote the symmetry clause of the closed-formula theorem exactly. The
   old citation was dropped from the two items' `deps`, from the manifest
   mirrors and from the contracts; it is recorded here as history.
3. **Reservation scope versus implementation.** The reservation's
   `a_inventory` ("P6 exchange sectors, symmetrizers, Slater states,
   occupation numbers, exclusion; finite Fock preview [M,D,P,T], 40") is
   covered as follows: P6 exchange sectors are read in
   `def-nrqm-identical-particles-framework-species-sectors-and-preparations`
   (reading, not duplicating, `post-nrqm-framework-identical-particles-and-spin`);
   the symmetrizers are the batch-35 permutation projections $P_\pm^{(n)}$
   read through `lem-nrqm-identical-particles-two-particle-exchange-operator`
   clauses (b)-(c) and the sector definition; Slater states and occupation
   numbers are `thm-nrqm-identical-particles-occupation-number-basis` with
   `thm-nrqm-identical-particles-finite-mode-occupation-counts`; exclusion is
   `pthm-nrqm-identical-particles-orbital-occupation-exclusion`. The "finite
   Fock preview" is realised as the finite-mode occupation description of
   these two theorems; the open (infinite-mode) direction is not claimed on
   this page and is recorded in the remark of the occupation-basis theorem as
   the Fock-space pair's subject (`qm-math-fock-and-equilibrium`, already a
   declared prerequisite, and the later many-body pages that require this
   pair). The `b_inventory` ("two-fermion spatial/spin symmetry, exchange
   versus Coulomb terms [H,examples], 24") is covered by the three B items.
   Budgets: A 9/40, B 3/24 items.
4. **No experiment item.** The B reservation is `[H,examples]` only and the
   design names no `[E]` candidate for this pair, so no experiment item is
   built and no empirical result is reported; the singlet/triplet and
   direct/exchange comparisons are conditional model computations with the
   empirical qualifications carried in `physical_scope`.
5. **Conditional status of exclusion.** The pair proves exclusion as a
   consequence of the adopted antisymmetric sector of P6 (via the projection
   algebra), never as a derived spin-statistics theorem; every physical item's
   `physical_scope` says so, and `rem-nrqm-identical-particles-scope-and-empirical-status`
   records it. No measured prediction is extracted.

## Source harvest and dispositions

Two independent treatments support the A page (Binney–Skinner full book;
Skinner Cambridge Part II Chapter 7) plus Essler's Oxford lecture notes; the
B page uses the same three. Coverage records 22 harvested results, each
`included` with an item or `out-of-scope` with a specific reason (the helium
numerics and periodic-table material of Binney Chapter 10, the white-dwarf and
parity/scattering sections of Skinner Chapter 7 are out of scope for this
pair). All six source entries (two pages, three entries each) are
fetch-verified.

**Skinner URL recovery (recorded).** The cited HTTPS URL
`https://www.damtp.cam.ac.uk/user/dbs26/PQM/chap7.pdf` failed TLS chain
verification in the harvesting environment on all six recorded attempts
(`UNABLE_TO_VERIFY_LEAF_SIGNATURE`; the served chain omits the intermediate
`Let's Encrypt YR2` that issued the leaf — the AIA endpoint
`http://yr2.i.lencr.org/` serves it, but neither Node fetch nor curl completes
the chain). The Wayback Machine raw snapshot
`https://web.archive.org/web/20240801085112id_/https://www.damtp.cam.ac.uk/user/dbs26/PQM/chap7.pdf`
was verified at harvest time to be byte-identical to the live document
(3,042,070 bytes, sha256 `2278bc3257df5821…`, matching the payload digest
`FS4A6MWERNQGK56O736NSN3HTGXLB3XB` of the live file, 10 pages), so all printed
locators remain exact. The reader-facing `url` is the snapshot; the original
HTTPS URL is preserved as `original_url` with the six failed attempts as
`original_location_attempts` and an explanatory `recovery_note`. The seven
items and the manifest that cite Skinner carry the snapshot URL with the title
suffix "Internet Archive copy of the original …". `source-fetch-check --stamp`
stamped both page entries (`fetch_verified`: 3,042,070 bytes,
sha256_16 `2278bc3257df5821`, 10 pages) and check mode reports 6/6 resolved
with 0 documented drops, so no `source_resolution` record is needed.
`url-sweep --recover --fail-on-dead` reports 3/3 live, 0 failed, 0 blocking;
the declared superseded original is excluded from probing by the tool's
`original_url` rule.

## Authoring decisions and corrections

1. **Mathematical spine.** The page proves the mathematics on the tensor
   square and its finite-dimensional permutation sectors first (levels 3-4),
   then fixes the framework readings as definitions (levels 8-9), then proves
   the two physics theorems (levels 9-10); the B computations (levels 12-14)
   consume only proved suppliers. Every proof is complete and conditional on
   the cited P1/P2/P6 readings; no proof step uses a source's argument where
   the local proof is available.
2. **Choice hypotheses.** The Axiom of Countable Choice is declared where the
   tensor construction and permutation projections use it; the Axiom of
   Choice is declared where the spectral/trace machinery of the cited batch-35
   items requires it (carried into the consuming facts). The statement of
   each item names exactly the choice assumptions of its suppliers.
3. **Step renumbering and display joins.** Precheck's canonical stratification
   (each phase number $=1+\max$ cited step phase) was applied to several items
   during authoring; hard-wrapped display formulas were joined with
   `fix-multiline-display.mjs` (whitespace only, no character of the
   mathematics changed).
4. **Role corrections from the scoped physics-content run.** The first scoped
   closure run reported six `role-supplier` errors: five items marked the
   physics definition `def-nrqm-state-geometry-framework-state-space` as
   `mathematical-premise`, and
   `rem-nrqm-identical-particles-examples-scope-limits` marked the example
   `ex-nrqm-identical-particles-exchange-versus-coulomb-terms` as
   `physical-result`. The roles were corrected to `formulation-prerequisite`
   (the established pattern for framework vocabulary and for remarks citing
   examples); the rerun reports 0 errors.
5. **Manifest hygiene.** The manifest mirror of
   `lem-nrqm-identical-particles-two-particle-exchange-operator` was missing
   `lem-orthogonal-projection-is-linear-self-adjoint-contractive` from its
   `deps`/`dependency_roles`; it was aligned with the carrier. The two
   citation replacements and the new definition dependency were mirrored in
   the manifest. Two further statement mirrors
   (`thm-nrqm-identical-particles-two-factor-symmetry-decomposition` and
   `texp-nrqm-identical-particles-two-fermion-spatial-spin-symmetry`) were
   stale relative to their carriers — the proof contracts quote the carrier
   text, so the carriers are authoritative — and were re-extracted from the
   carriers together with the other ten mirrors under the established
   convention (leading newline of the body dropped, trailing newlines kept).
   A full parity check now reports 0 statement, deps and role mismatches
   between carriers and manifest for all 12 items.

## Checks run (actual results)

- `author-check.mts physics-cm-qm-gr-79-2026-10-11 57`: ok; receipt
  `research/physics-cm-qm-gr-79-2026-10-11-author-check-57.json`, fingerprint
  `b889ca89f7fa0295d7ae0ba747106a6d327615490dfb2ee263fc130ce603373c`
  (the earlier run of the same command, before the final manifest resync and
  the definition-dependency addition recorded above, had fingerprint
  `f970d1eee2f718895551a1769054b309f9dec3c6ecaf9d212c4a03c19732ac89`). Gates:
  precheck 8 checked/0 failing; rendercheck 14 files OK; content-policy 12
  items 0 errors/0 warnings; proof-contract `--strict` 0 errors/0 warnings.
- `precheck` on the 12 batch items: 8 checked, 0 failing (the two definitions
  and two remarks have no proof body).
- `proof-layout` on the 12 items: 12 items, 50 steps, 0 defects.
- `rendercheck` on the 12 items and the two carriers: 14 files, no wikilink
  in math, no delimiter or multiline-display defect, every span parses under
  KaTeX and every frontmatter block parses.
- `proof-contract --strict`: 8/8 items checked, 0 errors, 0 warnings; every
  declared fact has an exact quote from the supplier's own
  statement/definition/postulate section (including the new
  `thm-binomial-closed-formula` clause-3 quote), every step is contracted with
  its inputs, and all eight boundary worksheets are present for every
  proof-bearing item.
- `coverage-checklist`: 2 pages, 22 harvested results, 0 errors, 0 warnings.
- `source-fetch-check --stamp`: 6/6 source entries fetch-verified (2 newly
  stamped after the Skinner recovery); check mode: 6/6 resolved, 0 drops.
- `manifest-deps`: 12 items, 0 normalized, 0 errors.
- `content-policy`: 12 scoped items, 0 errors, 0 warnings.
- `item-dependency-levels.mjs check --run`: no batch-57 finding; the remaining
  findings are the empty scaffolds of later batches.
- `validate-plan --run`: OK — 0 errors; the two `undeclared-prereq` findings
  of the first pass are resolved by the changes recorded above (the tool's
  NOTE about 14 planned pages elsewhere without item lists is expected).
- Scoped `validatePhysicsContent` over the batch-57 dependency closure (2436
  items, 202 pages): 0 errors. The whole-run `physics-check --run` cannot
  complete during construction because later batches' scaffolds are still
  empty; the scoped closure run is the batch-level equivalent.
- `depcheck`: the batch-57 items carry 2 `cited-not-in-deps` warnings, both
  triaged as deliberate scope pointers: `def-…-species-sectors-and-preparations`
  clause (f) says the permutation invariance "is a conditional consequence
  proved on this page ([[pthm-…-permutation-invariance]]), not a content of
  this definition", and `def-…-orbital-occupation-model` clause (f) likewise
  points to `pthm-…-orbital-occupation-exclusion`; adding either to `deps`
  would create a cycle (those theorems depend on the definitions), so the
  warnings stand as triaged false positives. The run-wide `FAIL` is the
  published-unaudited root item
  `thm-zero-divisor-theorem-on-plane-domains`, unrelated to this batch.
- `fwdcheck`: 0 open forward references run-wide; the run-wide `FAIL` findings
  are all on the root mathematical item
  `thm-zero-weak-gradient-implies-componentwise-constancy`, unrelated.
- `extcheck`: OK — no recorded-not-proved statement in scope.
- `citecheck` on the 12 items: 0 warnings.
- `url-sweep --coverage <batch 57> --recover --fail-on-dead`: 3/3 live, 0
  failed, 0 blocking, 0 recoverable (the superseded original is excluded).
- `frontier-dependency-ledger.mjs refresh --run`: 52 batch-57 consumer edges,
  52/52 carrying a `verified` review, 0 orphaned reviews from the batch-57
  file, batch 57 present in `reviewed_batches` (run totals: 4590 edges, 187
  orphaned reviews in other batches, 7 unreviewed batches).

## Cross-batch input

The batch-57 cross-batch input has 52 rows: 49 item edges (into batches 35,
41, 43, 44, 45, 48, 52, 54) plus 3 page edges — A page requires
`qm-composites-entanglement-and-reduced-states` (batch 55, declared ordering
prerequisite with no item-level consumption, stated as such in the evidence),
`qm-math-fock-and-equilibrium` (batch 41, consumed through
`thm-nrqm-fock-and-equilibrium-slater-direct-and-exchange-calculation`) and
`qm-harmonic-oscillator` (batch 52, added by this batch as recorded in
"Design versus plan" above). Each item row cites either the contract fact and
supplier clause quote-checked by `proof-contract --strict` or the carrier
sentence/declaration-level use, states the supplier batch, page and levels,
and records that the supplier statement was inspected at its current file and
that the scoped physics-content closure reports 0 errors. Same-batch
prerequisites are covered by the item-level gates (`depcheck`,
`manifest-deps`, `item-dependency-levels`, scoped `physics-content`); the
ledger is not a substitute for them.

## Capacity, escalations and status

A page 9/100 items, B page 3/100 items; well inside the page cap. The Skinner
source issue was resolved by the recorded Wayback recovery, so no
`source_resolution` drop or owner escalation was needed for sources. No
escalation is filed: every prerequisite of every item is either an in-run
supplier authored earlier at a lower dependency level or a published/draft
root-library item that lies inside the declared `requires` closure after the
changes above, and every consumed supplier's statement and hypotheses were
inspected against the cited uses. The requires drift of item 1 and the
citation replacement of item 2 are recorded scope decisions, not unmet
prerequisites of any claim. All 12 items carry `ready` records written after
the carriers were final (see "Readiness records" below). The records are
Step-1 authoring dispositions, not independent review; concurrent edits by
other batches to upstream items can invalidate transitive input hashes and
would require re-recording, and `step1-decisions.mjs check --run` is the
authority on whether that has happened.

## Readiness records (final pass)

The 12 Step-1 records were written in one final pass after the carriers,
manifest, proof contracts, coverage, cross-batch input and ledger were all
final, in ascending item-dependency order (levels 3 -> 14). Each record file
`research/physics-cm-qm-gr-79-2026-10-11-step1-<id>.json` is `version: 1`,
`decision: ready`, `owner: false`, uses that item's exact frontmatter `deps`
array as the examined dependency list, and carries a reason naming the carrier,
the page placement and the check state.

| # | item | level | deps | decision | recorded (UTC) |
|---|------|-------|------|----------|----------------|
| 1 | `lem-nrqm-identical-particles-two-particle-exchange-operator` | 3 | 10 | ready | 12:14:25 |
| 2 | `thm-nrqm-identical-particles-occupation-number-basis` | 3 | 12 | ready | 12:14:26 |
| 3 | `thm-nrqm-identical-particles-finite-mode-occupation-counts` | 4 | 9 | ready | 12:14:26 |
| 4 | `thm-nrqm-identical-particles-two-factor-symmetry-decomposition` | 4 | 13 | ready | 12:14:27 |
| 5 | `def-nrqm-identical-particles-framework-species-sectors-and-preparations` | 8 | 11 | ready | 12:14:28 |
| 6 | `def-nrqm-identical-particles-framework-orbital-occupation-model` | 9 | 9 | ready | 12:14:29 |
| 7 | `pthm-nrqm-identical-particles-permutation-invariance` | 9 | 15 | ready | 12:14:30 |
| 8 | `pthm-nrqm-identical-particles-orbital-occupation-exclusion` | 10 | 13 | ready | 12:14:31 |
| 9 | `rem-nrqm-identical-particles-scope-and-empirical-status` | 11 | 9 | ready | 12:14:32 |
| 10 | `texp-nrqm-identical-particles-two-fermion-spatial-spin-symmetry` | 12 | 12 | ready | 12:14:33 |
| 11 | `ex-nrqm-identical-particles-exchange-versus-coulomb-terms` | 13 | 15 | ready | 12:14:34 |
| 12 | `rem-nrqm-identical-particles-examples-scope-limits` | 14 | 5 | ready | 12:14:36 |

Every item and every examined dependency carrier was inspected at its current
file before its record was written; the records are Step-1 authoring
dispositions, not independent mathematical review. After the records were
written no item, page carrier or manifest field was edited; only these notes
were updated (notes are not an input of the record hash).

Verification after recording (read-only, at the current files):

- `step1-decisions.mjs check --run physics-cm-qm-gr-79-2026-10-11`:
  batch-57 rows in `work` **0** — all 12 records match the current item and
  transitive dependency hashes. Run-wide the command reports
  `items 1407, ready 1389`; the remaining rows are other batches' items and
  empty scaffolds, so its exit code is 1 until those batches finish.
- `author-check.mts ... 57` (re-run after recording): ok; fingerprint
  `b889ca89f7fa0295d7ae0ba747106a6d327615490dfb2ee263fc130ce603373c`;
  gates precheck 8/0, rendercheck 14 files OK, content-policy 12/0/0,
  proof-contract `--strict` 8/8 0/0.
- Final battery re-run on the frozen carriers: `precheck` 8 checked/0 failing;
  `proof-layout` 12 items/50 steps/0 defects; `rendercheck` 14 files OK;
  `proof-contract --strict` 0/0 8/8; `coverage-checklist` 2 pages/22 results
  0/0; `source-fetch-check` check mode 6/6 fetch-verified and 6/6 resolved;
  `manifest-deps` 12 items, 0 normalized, 0 errors; `content-policy` 12 items
  0/0; `item-dependency-levels check --run` 0 batch-57 findings;
  `validate-plan --run` 0 errors; `frontier-dependency-ledger refresh`
  52 batch-57 consumer edges, 52/52 verified reviews, 0 orphaned.
