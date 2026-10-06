# Step 3b authoring report — pair `pontryagin-thom-and-framed-cobordism`

- Run: `frontier-41-ha-dt-29`, stage `3b-author`, role alpha-high, dispatch label
  `step3b-pair-pontryagin-thom-and-framed-cobordism-28975f874b8478fd`
- A page: `pontryagin-thom-and-framed-cobordism` (batch 9, order 549,
  `differential-topology`); B page: `pontryagin-thom-and-framed-cobordism-examples`
- Owned IDs (25): the 20 A-page items and 5 B-page items listed in the dispatch,
  in ascending dependency level.
- Scope receipt: `research/frontier-41-ha-dt-29-step3a-review-pontryagin-thom-and-framed-cobordism.json`
  (decision `sufficient`, 2026-10-06), refreshed after the local scaffold
  repairs recorded in §3 below.
- Open obligations at entry: all 25 item files, both `library/differential-topology/`
  pages, the batch-9 proof-contract file, and this report are owed; no in-run
  supplier pair exists for this pair, and every declared direct supplier is a
  published library item.

## 1. Scaffold audit at entry

All 25 batch-9 records were read from
`research/frontier-41-ha-dt-29-batch-9.pages.json` together with the batch notes,
coverage, cross-batch ledger, the Step 3a scope review and report, and
`research/frontier-41-ha-dt-29-ac-omega-contract-audit.md`. Every item is
`ready`; the dependency levels of the manifest are reproduced by
`tools/item-dependency-levels.mjs`.

## 2. Choice audit (repairs recorded before authoring)

The published DT-16 supplier
`lem-based-homotopies-transverse-to-the-zero-section-give-normal-cobordisms`
*assumes the full Axiom of Choice* in its statement, while the scaffold makes
its two declared consumers (`def-pontryagin-thom-collapse-of-a-framed-neat-cobordism`
and `lem-homotopic-maps-with-a-common-regular-value-have-framed-cobordant-preimages`)
assume only $\mathrm{AC}_\omega$. Two repairs, both dependency-level preserving:

1. Item 7 (a definition) does not use that lemma at all; the spurious dependency
   was dropped.
2. Item 11 needs only the relative transversality perturbation, which is
   published under $\mathrm{AC}_\omega$ as
   `prop-relative-transversality-preserves-a-map-on-a-closed-good-region`
   (with `thm-transversality-homotopy-theorem`); its proof is rewritten on that
   route, so the full-AC supplier is dropped from both the item and the
   manifest dependency list.

The B example `ex-framed-links-represent-elements-of-pi-three-of-s-two` uses
`thm-numerable-fiber-bundles-are-hurewicz-fibrations`, which assumes AC; the
item and its consumer `cex-changing-a-framing-can-change-the-pontryagin-thom-class`
therefore state AC explicitly and declare `def-axiom-of-choice`, following
SCHEMA's choice rules. No other declared supplier assumes more than
$\mathrm{AC}_\omega$.

## 3. Local scaffold repairs (statements)

- `def-framed-cobordism-of-embedded-submanifolds`: the end collars are
  specified as the product ends of Milnor's definition
  ($W\cap(X\times[0,\varepsilon))=N_0\times[0,\varepsilon)$ and
  $W\cap(X\times(1-\varepsilon,1])=N_1\times(1-\varepsilon,1]$), so that
  reflexivity, symmetry, gluing and the collapse's end restrictions are
  literal. The promised content (framed cobordism, collars part of the data,
  literal framing restrictions, no implicit boundary sign) is unchanged; the
  previous general-collar phrasing left the transitivity gluing and the
  end-restriction claim underdetermined.
- `ex-framed-links-represent-elements-of-pi-three-of-s-two` and
  `cex-changing-a-framing-can-change-the-pontryagin-thom-class`: AC added as
  the choice hypothesis (see §2).

Status: authoring in progress. Per-item checkpoints are appended below as each
item is completed.

## 4. Dispatch re-entry (`step3b-pair-...-42067724d19f64a4`, 2026-10-06)

Re-dispatched to the same pair after the previous dispatch stopped with the
report above. State found on disk at entry (re-verified against the item files,
the batch-9 manifest and `git status`):

- 22 of the 25 item files exist and pass `tools/precheck.mts` on explicit
  paths (16 proof-bearing items PASS; the 6 definitions carry no step text).
  They still need an independent read against their stated suppliers before
  any item decision is recorded.
- 3 item files are absent and must be created from their manifest rows:
  `ex-pontryagin-thom-map-of-the-standard-framed-equator`,
  `ex-stabilizing-a-framed-submanifold-suspends-its-collapse-map`,
  `rem-normal-framing-stable-normal-framing-and-tangential-framing-are-distinct-data`.
  All three are original scaffold IDs (present in
  `research/frontier-41-ha-dt-29-step3-auditor-baseline.json`), so they take
  ordinary current item decisions.
- Both `library/differential-topology/pontryagin-thom-and-framed-cobordism.md`
  and `library/differential-topology/pontryagin-thom-and-framed-cobordism-examples.md`
  are owed.
- `research/frontier-41-ha-dt-29-batch-9.proof-contracts.json` is owed.
- Scope: `research/frontier-41-ha-dt-29-step3a-review-pontryagin-thom-and-framed-cobordism.json`
  is current (the scope phase check reports this pair closed).
- No in-run supplier pair exists for this pair; all declared direct suppliers
  are published library items or earlier items of this pair.

Open obligations at entry: read and independently check the 22 inherited item
files in dependency order, write the 3 missing items, write both pages, write
the batch-9 proof contracts, run explicit-path precheck + proof-layout,
rendercheck, content policy, depcheck, dependency-level and `validate-plan`
checks, then record one Step 3b item decision per owned item.

## 5. Final handoff (dispatch `...42067724d19f64a4`, completed 2026-10-06)

This section supersedes the "authoring in progress" status of §3. All 25 owned
items were read in full in the dispatch's dependency order, all obligations of
§4 were discharged, and one current item decision per owned ID was recorded
with `tools/step3-decisions.mjs record-item` at confidence 1 (receipts:
`research/frontier-41-ha-dt-29-step3b-review-<id>.json`; 20 `accept`, 5
`repaired`).

### 5.1 Completed IDs and repairs made this dispatch

- A page (20 items, batch 9, order 549): `def-framing-of-a-normal-bundle`,
  `lem-based-and-free-homotopy-classes-of-sphere-maps-agree`,
  `lem-positively-oriented-bases-are-path-connected`,
  `def-framed-cobordism-of-embedded-submanifolds`,
  `def-framed-regular-preimage-of-a-map-to-a-sphere`,
  `prop-a-framing-identifies-the-thom-target-with-a-sphere-smash-product`,
  `def-pontryagin-thom-collapse-of-a-framed-neat-cobordism`,
  `def-pontryagin-thom-map-of-a-framed-submanifold`,
  `lem-framed-cobordism-is-an-equivalence-relation`,
  `lem-homotopic-maps-with-a-common-regular-value-have-framed-cobordant-preimages`,
  `lem-changing-framed-tube-data-changes-the-pontryagin-thom-map-by-based-homotopy`,
  `lem-regular-preimage-after-collapse-recovers-the-original-framed-submanifold`,
  `lem-regular-value-choice-does-not-change-the-framed-cobordism-class`,
  `lem-collapse-after-regular-preimage-is-homotopic-to-the-original-map`,
  `lem-framed-cobordant-submanifolds-have-homotopic-collapse-maps`,
  `thm-pontryagin-thom-correspondence-in-fixed-codimension`,
  `def-stabilized-framed-cobordism-colimit`,
  `lem-stabilization-of-a-framed-submanifold-suspends-the-pontryagin-thom-map`,
  `thm-stable-pontryagin-thom-identifies-framed-bordism-with-stable-stems`,
  `rem-normal-framing-stable-normal-framing-and-tangential-framing-are-distinct-data`.
- B page (5 items, order 550):
  `ex-framed-zero-manifolds-and-signed-points`,
  `ex-pontryagin-thom-map-of-the-standard-framed-equator`,
  `ex-framed-links-represent-elements-of-pi-three-of-s-two`,
  `cex-changing-a-framing-can-change-the-pontryagin-thom-class`,
  `ex-stabilizing-a-framed-submanifold-suspends-its-collapse-map`.
- All 25 IDs are original scaffold IDs (present in
  `research/frontier-41-ha-dt-29-step3-auditor-baseline.json`), including the
  three whose files were first written on re-entry, so all took ordinary
  current item decisions; the engine's auditor-created bypass does not apply.
- Independent re-audit on re-entry found and repaired five defects:
  1. `lem-positively-oriented-bases-are-path-connected`, step 2.1: the
     transvection path `T_{pq}(tc)` started at `I` and left the transvection
     `T_{pq}(c)` in `A(1)`, so the claimed diagonal endpoint failed whenever the
     elementary factorisation contains a row addition. The path is now
     `T_{pq}((1-t)c)`, and the invertibility clause was restated.
  2. `lem-homotopic-maps-with-a-common-regular-value-have-framed-cobordant-preimages`,
     step 2.1: constancy of the perturbed homotopy on the end collars was
     asserted but did not follow from relative transversality alone. The
     homotopy is now flattened by the standard step function before the
     perturbation (new fact [F5], new dep
     `def-the-standard-smooth-step-function`), which yields literal product
     ends and the correct end framings.
  3. `lem-regular-preimage-after-collapse-recovers-the-original-framed-submanifold`,
     step 1.1: the collapse class was written as the class of `(s,v)`,
     inconsistent with [F1] and with the displayed formula; it is now the class
     of `(s,v/(1-\lVert v\rVert_h))`.
  4. `lem-collapse-after-regular-preimage-is-homotopic-to-the-original-map`:
     [F4] cited the continuity pasting lemma for categorical gluing of smooth
     maps on closed sets, which is not valid in general. The two pastings were
     rewritten as open-cover pastings of smoothness, and the dep is now
     `lem-smooth-maps-paste-over-an-open-cover`.
  5. `lem-regular-value-choice-does-not-change-the-framed-cobordism-class`:
     [F2]/step 1.1 claimed that reparametrising by the standard step function
     makes a path constant near both endpoints; the corrected statement glues
     constant end segments to the path and smooths the two junctions, which is
     what the construction uses.
- The 20 remaining IDs were re-read against their declared suppliers without
  further changes; in particular the previous dispatch's repairs
  (`lem-based-and-free-...` step 1.2, the collapse definition's end-restriction
  wording, `def-stabilized-...` framing order and group-law deferral,
  `lem-stabilization-...`, `ex-framed-zero-...`, and the stable theorem's
  additivity rewrite off the B-page example) stand as recorded in §2-§3.
- `research/frontier-41-ha-dt-29-batch-9.proof-contracts.json` covers the 18
  proof-bearing items (the seven definitions/remark are outside contract
  scope); the five entries whose steps or facts changed were regenerated with
  `tools/regen-contract-entries.mjs`, preserving their boundary blocks.
- No manifest, coverage, page or contract scope change was needed on re-entry:
  batch 9 contains exactly this pair's two pages (20 + 5 items), and the
  manifest rows and levels were left untouched.

### 5.2 Checks actually run (final content)

- `node tools/proof-layout.mjs` on all 25 explicit item paths (single batched
  run after the last edit): 25 items, 75 steps, 0 defects.
- `node tools/tsx-run.mjs tools/precheck.mts` on the same 25 paths: 18
  checked (proof-bearing), 0 failing; the definitions and the remark are
  `not-applicable` and were not counted.
- `node tools/content-policy.mjs research/frontier-41-ha-dt-29-batch-9.pages.json`:
  25 scoped items, 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-9.pages.json`:
  25 items, 0 errors.
- `node tools/coverage-checklist.mjs research/frontier-41-ha-dt-29-batch-9.coverage.json --require-destination`:
  1 page, 63 harvested results, 0 errors, 0 warnings.
- `node tools/source-backing.mjs --coverage ... --liveness ... --reharvest-plan ...`:
  20 authored results, every one still backed.
- `node tools/proof-contract.mjs research/frontier-41-ha-dt-29-batch-9.proof-contracts.json --strict`:
  0 errors, 0 warnings, 18/18 items checked.
- `node tools/citation-fidelity.mjs ... --fail-on-missing-quote`: every
  recorded quote found, no widening candidates.
- `node tools/boundary-audit.mjs ... --fail-on-contradicted --fail-on-template`:
  144 rows over the contract file, 39 marked not-applicable, no template reuse
  at or above 3 members, no contradicted dispositions.
- `node tools/finite-smoke.mjs research/frontier-41-ha-dt-29-batch-9.proof-contracts.json`:
  0 errors, 0 checks over 0/18 items carrying obligations (vacuous: this batch
  declares no finite-smoke obligation; noted, not a blocker).
- `node tools/rendercheck.mjs`: OK — 25,835 files, no bad wikilinks in math, no
  unbalanced delimiters, every math span parses.
- `node tools/validate-plan.mjs research/plan-spec.json`: OK — no item-level
  cycles, forward references, B-page dependencies or unresolved ids among the
  1,422 pages with item lists.
- `node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29`:
  exit 1 repo-wide for stale labels in other pairs; 0 error lines touch any of
  this pair's 25 IDs.
- `node tools/depcheck.mjs`: exit 1 repo-wide (880 hard errors of pre-existing
  published debt); grep-verified 0 errors and 0 warnings touching this pair's
  IDs.
- `node tools/fwdcheck.mjs`: exit 1 repo-wide (19 errors); 0 touch this pair.
- `node tools/step3-decisions.mjs check --run frontier-41-ha-dt-29 --phase final`
  after recording: 0 of the 25 IDs remain in `work`. The scope phase check
  leaves this pair closed (it is not among the five pairs whose scope is still
  open).

### 5.3 Choice accounting

Choice is tracked item by item. The proof-bearing items that invoke the
transversality, approximation or normal-bundle machinery
(`def-framing-of-a-normal-bundle`, `def-framed-cobordism-of-embedded-submanifolds`,
`def-framed-regular-preimage-of-a-map-to-a-sphere`,
`prop-a-framing-identifies-the-thom-target-with-a-sphere-smash-product`,
`def-pontryagin-thom-collapse-of-a-framed-neat-cobordism`,
`def-pontryagin-thom-map-of-a-framed-submanifold`,
`lem-homotopic-maps-with-a-common-regular-value-have-framed-cobordant-preimages`,
`lem-changing-framed-tube-data-changes-the-pontryagin-thom-map-by-based-homotopy`,
`lem-regular-preimage-after-collapse-recovers-the-original-framed-submanifold`,
`lem-regular-value-choice-does-not-change-the-framed-cobordism-class`,
`lem-collapse-after-regular-preimage-is-homotopic-to-the-original-map`,
`lem-framed-cobordant-submanifolds-have-homotopic-collapse-maps`,
`thm-pontryagin-thom-correspondence-in-fixed-codimension`,
`def-stabilized-framed-cobordism-colimit`,
`lem-stabilization-of-a-framed-submanifold-suspends-the-pontryagin-thom-map`,
`thm-stable-pontryagin-thom-identifies-framed-bordism-with-stable-stems`)
state `\mathrm{AC}_\omega` and inherit it only through those suppliers. The two
choice-free items `lem-positively-oriented-bases-are-path-connected` and
`lem-based-and-free-homotopy-classes-of-sphere-maps-agree` explicitly record
that their explicit constructions use no choice, and the example
`ex-framed-zero-manifolds-and-signed-points` and the remark add no choice
assumption beyond the suppliers they cite. The two B-page items
`ex-framed-links-represent-elements-of-pi-three-of-s-two` and
`cex-changing-a-framing-can-change-the-pontryagin-thom-class` assume the full
Axiom of Choice and declare `def-axiom-of-choice`, used only through
`thm-numerable-fiber-bundles-are-hurewicz-fibrations` (the Hopf fibration is a
numerable circle bundle). No incompatible-axiom branch occurs, and no item uses
more choice than it declares.

### 5.4 Added suppliers

None. No prerequisite had to be created: every declared direct supplier already
exists in the published library or earlier in this pair. Two published items
are newly cited by the repaired items (`def-the-standard-smooth-step-function`
in `lem-homotopic-maps-...`, `lem-smooth-maps-paste-over-an-open-cover` in
`lem-collapse-after-regular-preimage-...`); both are published, resolve, and
carry `verified`/audit evidence.

### 5.5 Published concerns (evidence for the serial reconciler)

- Thirteen external suppliers of this pair carry depcheck's
  `published-unaudited` code (judge pass recorded, but neither
  `verification.audited` nor `verification.verified` and no local repair
  receipt): `def-pontryagin-thom-collapse-of-an-embedded-submanifold`,
  `def-disk-bundle-sphere-bundle-and-thom-space`,
  `lem-tubular-charts-realize-a-prescribed-normal-identification`,
  `lem-collapse-map-is-continuous-and-smooth-away-from-the-basepoint`,
  `lem-collapse-map-is-independent-of-tubular-neighbourhood-and-radius-up-to-based-homotopy`,
  `prop-transverse-preimage-carries-a-pulled-back-normal-structure`,
  `prop-thom-space-of-a-trivial-rank-r-bundle-is-a-suspension-smash-product`,
  `lem-stabilizing-a-normal-bundle-suspends-its-thom-space`,
  `lem-thom-space-is-independent-of-the-bundle-metric-up-to-canonical-homeomorphism`,
  `def-unoriented-smooth-cobordism-of-closed-manifolds`,
  `thm-disjoint-union-makes-bordism-classes-abelian-groups`,
  `def-stable-normal-bundle-of-a-compact-smooth-manifold`,
  `thm-stable-normal-bundle-is-independent-of-the-embedding` (the
  `frontier-38-owner-30` DT-16 cluster). Evidence: `node tools/depcheck.mjs`
  error rows. Confidence: confirmed mechanical fact; this audit found no
  mathematical defect in any of them. Required supplier: none for this pair's
  authoring. Repair strategy: owner-side audit stamp or an entry in
  `research/published-consumer-supplier-ledger.md`, handled at reconciliation;
  unrelated published debt does not block this pair's sound new work.
- Repo-wide `depcheck` (880 errors) and `fwdcheck` (19 errors) additionally
  report pre-existing debt in other groups (unresolved links, B-leaf content,
  page cycles); none of it touches any of the 25 IDs of this pair.
- No published mathematical defect in a supplier was confirmed during this
  dispatch; the only defects found were inside this pair and were repaired
  (5.1).

### 5.6 Open obligations and notes for Steps 4-5

- Step 4 (splice): `research/plan-spec.json` still lists
  `pontryagin-thom-and-framed-cobordism` (order 549) and
  `...-examples` (order 550) with empty `items` arrays. The authored item lists
  live in `research/frontier-41-ha-dt-29-batch-9.pages.json` and on the two
  `library/differential-topology/` pages and match the approved scope exactly
  (20 A items, 5 B examples); splice them, with no scope change.
- Step 5 review should concentrate on the pair's convention-heavy points,
  which this authoring pass checked for internal coherence but did not
  independently certify: (a) the long cascade of
  `thm-stable-pontryagin-thom-identifies-framed-bordism-with-stable-stems`
  (transported spherical pinch under the fixed `h`, the squeeze cobordisms, the
  smoothing step) and its interplay with the framing order
  `\nu_{\mathrm{eq}}\oplus\varphi` and the suspension `E` determined by
  `S^1\wedge S^k\cong S^{k+1}`; (b) the radial model `v/(1-\lVert v\rVert_h)`
  used in `def-pontryagin-thom-map-of-a-framed-submanifold` versus the `v/\rho`
  model fixed in the published
  `def-pontryagin-thom-collapse-of-an-embedded-submanifold` — the published
  tube-independence lemma interpolates radial cutoffs in its proof but its
  statement mentions only charts, radii and metrics; (c)
  `def-pontryagin-thom-collapse-of-a-framed-neat-cobordism` uses the
  tube-independence lemma (level 3) as a definitional well-definedness remark
  while itself sitting at level 2; (d) choice propagation in the two B items.
- No escalations are held: no in-run unfinished supplier, no unresolved
  prerequisite and no source-uncertainty blocker was found for this pair, so
  all 25 decisions are `accept`/`repaired` at confidence 1.

### 5.7 Re-entry checkpoint (for compaction)

Objective: author and audit the 25 items and two pages of this pair for Step
3b. Verified state: all items exist and pass the checks of 5.2; both pages and
the batch-9 proof-contract file exist; decisions recorded; 0 of the 25 IDs in
`step3-decisions check --phase final` work list; pair scope closed. Blockers:
none for this pair. Next action: none for this dispatch; the pair is ready for
Step 4 splice and Step 5 review.

### 5.8 Per-item checkpoint index

Decision receipts (dependencies examined, evidence and input hash) are in
`research/frontier-41-ha-dt-29-step3b-review-<id>.json`; entries in the
18-item scope of `research/frontier-41-ha-dt-29-batch-9.proof-contracts.json`
were checked strict.

| item | level | kind | decision |
|---|---|---|---|
| `def-framing-of-a-normal-bundle` | 0 | definition | `accept` |
| `lem-based-and-free-homotopy-classes-of-sphere-maps-agree` | 0 | lemma | `accept` |
| `lem-positively-oriented-bases-are-path-connected` | 0 | lemma | `repaired` |
| `def-framed-cobordism-of-embedded-submanifolds` | 1 | definition | `accept` |
| `def-framed-regular-preimage-of-a-map-to-a-sphere` | 1 | definition | `accept` |
| `prop-a-framing-identifies-the-thom-target-with-a-sphere-smash-product` | 1 | proposition | `accept` |
| `def-pontryagin-thom-collapse-of-a-framed-neat-cobordism` | 2 | definition | `accept` |
| `def-pontryagin-thom-map-of-a-framed-submanifold` | 2 | definition | `accept` |
| `lem-framed-cobordism-is-an-equivalence-relation` | 2 | lemma | `accept` |
| `lem-homotopic-maps-with-a-common-regular-value-have-framed-cobordant-preimages` | 2 | lemma | `repaired` |
| `lem-changing-framed-tube-data-changes-the-pontryagin-thom-map-by-based-homotopy` | 3 | lemma | `accept` |
| `lem-regular-preimage-after-collapse-recovers-the-original-framed-submanifold` | 3 | lemma | `repaired` |
| `lem-regular-value-choice-does-not-change-the-framed-cobordism-class` | 3 | lemma | `repaired` |
| `lem-collapse-after-regular-preimage-is-homotopic-to-the-original-map` | 4 | lemma | `repaired` |
| `lem-framed-cobordant-submanifolds-have-homotopic-collapse-maps` | 4 | lemma | `accept` |
| `thm-pontryagin-thom-correspondence-in-fixed-codimension` | 5 | theorem | `accept` |
| `def-stabilized-framed-cobordism-colimit` | 6 | definition | `accept` |
| `ex-framed-links-represent-elements-of-pi-three-of-s-two` | 6 | example | `accept` |
| `ex-framed-zero-manifolds-and-signed-points` | 6 | example | `accept` |
| `lem-stabilization-of-a-framed-submanifold-suspends-the-pontryagin-thom-map` | 7 | lemma | `accept` |
| `cex-changing-a-framing-can-change-the-pontryagin-thom-class` | 7 | counterexample | `accept` |
| `thm-stable-pontryagin-thom-identifies-framed-bordism-with-stable-stems` | 8 | theorem | `accept` |
| `ex-pontryagin-thom-map-of-the-standard-framed-equator` | 8 | example | `accept` |
| `ex-stabilizing-a-framed-submanifold-suspends-its-collapse-map` | 8 | example | `accept` |
| `rem-normal-framing-stable-normal-framing-and-tangential-framing-are-distinct-data` | 9 | remark | `accept` |
