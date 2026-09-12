# phase-2-next-17 — Step 5b cross-batch audit and closure (lead Alpha)

Run `phase-2-next-17`, dispatch `5b-cross` (`covers: all`), 2026-09-12.
Artifacts written: this report, `research/phase-2-next-17-5b-verdicts.jsonl`,
`research/phase-2-next-17-impact.json`, `research/phase-2-next-17-impact-5b.json`.

No item, page, manifest, contract, plan or published file was edited. Nothing was
judged, stamped or self-certified. There were no repairs, strikes, drops, removals or
reversions at 5b, so no `5b-cross` defect-ledger row exists and no verdict row uses
`defect_ids`.

## 1. Inputs read

- `research/phase-2-next-17-cross-group-edges.json` — 13 edges, 0 forward
  references, 0 post-5a changes. Every listed `from_sha256`/`to_sha256` matched the
  current file bytes when re-derived (`tools/cross-group-edges.mjs check` reports
  `13 edge(s), 0 forward reference(s), 0 post-5a change(s), 0 error(s)`).
- The complete text of all 8 citing items and all 11 cited items named by those 13
  edges (883 lines total), plus the batch-5/6/7 page manifests and proof contracts
  that carry their carriers.
- `research/phase-2-next-17-batch-{1..11}.pages.json`,
  `...-batch-{1..11}.proof-contracts.json`, the seven
  `research/phase-2-next-17-alpha-{a..g}-5a-decisions.json` files, the post-5a hash
  snapshots `research/phase-2-next-17-step5-hash-{1..11}-post-5a.json`, and the
  run's coverage checklists.
- Migration/import inputs named by the dispatch do not exist for this run:
  `research/phase-2-next-17-checkpoint-import.json`,
  `research/phase-2-next-17-merge-import.json` and
  `research/phase-2-next-17-step7-published-repairs.jsonl` are all absent. The last
  one is not merely missing by accident: `tools/step5-scope.mjs check --phase final`
  requires an exact row-for-row match between 5a decisions that repair published
  mathematics and that handoff file, and it reports 0 errors, so no published-repair
  judgment is owed to a later stage. The three `5a-adjudicate` defect rows this run
  does carry (`p2-next17-5a-c-kunneth-koszul-sign`,
  `p2-next17-5a-f-padding-step-truncated`, `p2-next17-5a-f-padding-self-citation`)
  repair in-run drafts (`thm-kunneth-tor-spectral-sequence`,
  `thm-nondeterministic-recursive-padding-separation`), whose current carrier hashes
  match their 5a `subject_sha256` values; none is a published item.

## 2. The 13 cross-batch edges — verdicts

All 13 edges are batch 7 → batch 5 inside group `d` ("the seven batch-7-to-5
dependencies" of the group rationale, plus the surrounding items they touch). The
citing items are the de Rham/degree spine of batch 7; the cited items are the
cup-product, orientation and degree definitions of batch 5. I read each citing
clause against the cited clause it names, not against the citation list.

| # | citing item (batch 7) | cited item (batch 5) | verdict |
|---|---|---|---|
| 1 | `ex-nonzero-degree-forces-surjectivity-on-closed-oriented-manifolds` | `def-degree-of-a-map-between-oriented-closed-manifolds` | accurate |
| 2 | `fs-the-de-rham-theorem-as-built-here-is-an-isomorphism-of-rings` | `def-singular-cohomology-ring` | accurate |
| 3 | `lem-affine-diagonal-and-front-back-shuffle-have-a-specified-chain-homotopy` | `def-alexander-whitney-diagonal-approximation` | accurate |
| 4 | `lem-de-rham-integration-respects-wedge-and-cup-in-cohomology` | `def-singular-cup-product-on-cochains` | accurate |
| 5 | `lem-de-rham-integration-respects-wedge-and-cup-in-cohomology` | `thm-cup-product-leibniz-identity` | accurate |
| 6 | `lem-smooth-orientation-sign-is-the-local-integral-homology-multiplier` | `def-r-orientation-of-a-topological-manifold` | accurate |
| 7 | `lem-smooth-orientation-sign-is-the-local-integral-homology-multiplier` | `lem-coordinate-ball-classes-identify-local-homology-stalks` | accurate |
| 8 | `lem-smooth-orientation-sign-is-the-local-integral-homology-multiplier` | `thm-local-homology-detects-interior-points-boundary-points-and-dimension` | accurate |
| 9 | `prop-degree-is-multiplicative-under-composition` | `prop-manifold-degree-is-functorial-and-detected-by-top-cohomology` | accurate |
| 10 | `thm-de-rham-theorem` | `def-singular-cohomology-ring` | accurate |
| 11 | `thm-de-rham-theorem` | `thm-singular-cohomology-is-graded-commutative` | accurate |
| 12 | `thm-regular-value-formula-for-degree` | `def-degree-of-a-map-between-oriented-closed-manifolds` | accurate |
| 13 | `thm-regular-value-formula-for-degree` | `def-fundamental-class-of-a-compact-oriented-manifold` | accurate |

The full reading for each row, with the citing clause and the supplier clause, is the
`note` field of the matching line of `research/phase-2-next-17-5b-verdicts.jsonl`.
Summary of what was checked, by edge:

1. [F1] claims exactly the supplier's four definitional clauses (closed = compact
   boundaryless; `f_*[M]=deg(f)[N]`; restriction at a point = infinite cyclic local
   stalk with `[N]` the prescribed generator; uniqueness of the integer). Step 1.1
   consumes exactly those: an omitted point makes `f_*[M]` vanish in the relative
   quotient while `q_y([N])` has infinite order, so `deg(f)=0`. Step 3.1 uses the
   supplier's signed `n=0` convention. No clause is overstated.
2. [F1] says the supplier defines the target multiplication by the front/back cup on
   representatives; the supplier does exactly that (`[φ]⌣[ψ]=[φ⌣ψ]` with descent via
   the Leibniz theorem) and the consumer uses it only to name the target product and
   state the missing multiplicativity equality — the counterexample is carried by the
   consumer's own step 1.1 and by its separate compatibility lemma.
3. [F2] claims the front/back sum, its chain-map identity and its naturality for
   postcomposition: the supplier proves `d·AW = AW·∂` by the face-cancellation
   paragraph and `D_{X'}f_# = (f_#⊗f_#)D_X`. The consumer's step 1.1 uses precisely
   those for the diagonal simplex and its faces `(δ_i×δ_i)`; degenerate generators
   are retained on both sides.
4–5. [F1] claims the unsigned front/back formula (the supplier states it with no extra
   cochain sign); [F2] claims the positive-coboundary Leibniz identity and descent
   (the supplier proves both as chain-level facts, so they restrict to the smooth
   subcomplex without a new hypothesis). The consumer uses the surviving bidegree cut
   in step 2.2 and cocycle/descent facts in step 5.1.
6–8. [F14] (orientation = locally constant generator section), [F13] (ball-to-point
   restriction isomorphisms, with the translated-sphere calculation in the proof) and
   [F1] (local group = `R` in degree `n`, identified with the reduced homology of the
   punctured ball's sphere) are all present verbatim in the suppliers' statements and
   proofs; the consumer's reflection computation (step 2.1), continuity argument
   (step 7.1) and `n=0` case (step 9.1) consume those clauses and nothing stronger.
9. [F4] claims the supplier gives the choice-free homological identity and composition
   laws on closed manifolds; the supplier's statement separates exactly that clause
   from its AC-dependent top-cohomology detection, and the consumer's step 2.1 says so
   and does not use the AC clause.
10–11. [F3] (graded algebra, front/back product, constant-vertex unit) and [F4]
   (graded commutativity `a⌣b=(-1)^{pq}b⌣a` on classes) are the suppliers' stated
   content; the consumer uses them in steps 1.1/1.2/2.1 and 3.1, and only on cohomology
   classes for the sign.
12–13. [F4] (`F_*[M]=d[N]`, unique `d`, signed zero-manifolds) and [F3]
   (`[M]` restricts to the prescribed local generators) are the suppliers' defining
   clauses; steps 1.1, 2.1–4.1 and 5.1 of the consumer consume them at exactly the
   stated level of generality (proper maps between nonempty connected oriented
   boundaryless manifolds, with the closed case for the comparison).

Forward references: none are declared by any in-scope item, so no `lemmas-added` or
`dropped` decision was owed. Post-5a additions, removals, item edits and page edits:
none exist in the computed change list, so no change verdict was owed. No page
addition, removal or reading-order question arose.

## 3. Impact windows (both closed)

Both receipts name a reviewer. Windows were computed by `tools/impact-audit.mjs`
against `research/phase-2-next-17-touches.json`.

- `research/phase-2-next-17-impact.json` — `pre-author → post-5a`: 1162 changed
  interfaces, 1298 affected items, 1298 dispositions, 0 errors; reviewer "Lead Alpha
  (DeepSeek V4.1 Flash) - phase-2-next-17 step 5b cross-batch audit, 2026-09-12".
- `research/phase-2-next-17-impact-5b.json` — `post-5a → current`: 0 changed
  interfaces, 0 affected items; reviewer recorded, with the empty-window statement in
  the `reviewer` field.

### 3.1 What the 1162 changed interfaces actually are

The window's changes are overwhelmingly *new content* and *publication bookkeeping*,
not edits to published mathematics. I classified every changed supplier against the
pre-author snapshot and against the run's pre-edit backups
(`.autopilot/phase-2-next-17/publish-backup.RmulpE`, `.../owner-audit-backup.7uEYLc`):

| supplier class | count | evidence |
|---|---:|---|
| authored in this window (new items) | 570 | absent from the pre-author snapshot; all are in the run's batch manifests and carry current 5a decision rows |
| owner publication/audit stamp only | 589 | differ from their pre-edit backup bytes only in the `status:` line (draft→published) and the `verification:` block; no mathematical byte moved |
| authorized published repair | 3 | `ex-the-euclidean-levi-civita-connection`, `cex-a-nonnatural-choice-of-connecting-maps-does-not-form-a-delta-functor`, `fs-any-sequence-of-functors-with-long-exact-sequences-is-a-delta-functor` |

Note for the serial lead: the publication-status flip is inside `itemSurfaceHash`, so
589 published items with *identical mathematics* enter `changed_interfaces`. That is
the tool's definition, not a finding; the dispositions below record the distinction
explicitly rather than treating them as interface edits.

### 3.2 Dispositions

Every one of the 1298 affected items was written with its own computed evidence:
consumer class and home page, the exact changed suppliers it consumes and the channel
(`deps`, `justified_by`, `forward_refs`, `external_refs`, body wikilink), the clause
locator of the first use (section plus `[Fn]`/step label, or "frontmatter declaration
only"), the supplier's change class and the byte evidence for it, the full
changed-source cone on disk, and the transitive witness path where the obligation is
not a direct citation. 208 items consume no changed interface directly and name their
dependency witness instead.

| disposition class | items | basis |
|---|---:|---|
| Same-window authored consumer | 517 | new run content; every one of these carries a 5a decision row whose `subject_sha256` equals its current composite carrier hash (checked item by item) |
| Same-window published consumer | 477 | the item's own only window change is the publication/audit stamp; byte-compared against its pre-edit backup |
| Published untouched consumer | 304 | `itemHashGuard` fingerprint equals the pre-author snapshot's, i.e. the whole file outside `verification:` is unchanged |

All 1298 dispositions are `still-licensed`. No consumer's cited clause was invalidated
by anything in the window, so no item was repaired and none is recorded as repaired;
`repaired` is deliberately not used to mean "was itself authored in this window".

### 3.3 The one affected published consumer of a repaired supplier

`ex-hessian-and-divergence-in-euclidean-coordinates` (published, byte-stable across
the window, guard `c2b6dd1d1aa1586d`) consumes
`ex-the-euclidean-levi-civita-connection` at its [F2] — "Cartesian Euclidean
Christoffel symbols vanish". I read both items end to end. The supplier's authorized
window repair added `def-affine-connection-on-a-smooth-manifold` and
`def-parallel-transport-along-a-piecewise-smooth-curve` as declared suppliers and
rewrote only the transport clause (`[F3]`, step 2.1). Its Example still states "Its
Christoffel symbols vanish", so the consumer's [F2] use is untouched and it remains
licensed. The other two repaired items have zero published consumers, so they reopen
nothing. This is the only affected item whose changed supplier had a mathematical
edit; it is recorded in the published ledger (see §5).

## 4. Step-5 gate battery — local runs

Run from the repository root; all commands below are the ones the `5b-cross` gate list
executes. Results as of this dispatch:

| gate | command (abbreviated) | result |
|---|---|---|
| cross-group-edges | `cross-group-edges.mjs check --run phase-2-next-17 --reconcile-plan` | pass — 13 edges, 0 forwards, 0 changes, 0 errors; plan/manifests unchanged by reconciliation |
| step5-routing-final | `step5-scope.mjs check --run … --phase final` | pass — 570 item(s) routed, 604 obligation(s), 0 errors |
| step5-ledger-valid | `defect-ledger.mjs validate --run …` | pass — 3 rows, 0 errors (all `5a-adjudicate`) |
| validate-plan | `validate-plan.mjs research/plan-spec.json` | pass |
| splice-verify | `splice-plan.mjs --run … --verify` | pass — 34 pages across 11 manifests |
| precheck | `tsx-run.mjs tools/precheck.mts` | pass — 14130 checked, 0 failing |
| depcheck | `depcheck.mjs --pending-audit-ok` | pass |
| fwdcheck / extcheck / depsource | as listed | pass |
| rendercheck | `rendercheck.mjs` | pass |
| prosecheck | `prosecheck.mjs` | pass |
| pathcheck | `pathcheck.mjs` | pass |
| manifest-integrity | `manifest-integrity.mjs --run …` | pass |
| coverage-1..11 | `coverage-checklist.mjs research/…-batch-N.coverage.json` | pass — 692 harvested results, 0 errors |
| content-policy-items | `content-policy.mjs …batch-*.pages.json` | pass |
| merge/proof-contract/finite-smoke/risk-report | `merge-proof-contracts`, `proof-contract --strict` (0 errors, 4 warnings), `finite-smoke`, `risk-report --require-reviewed` | pass |
| boundary-audit / citation-fidelity / gate-liveness | as listed | pass |
| auditor-created certifications | `auditor-created-items.mjs certify --run … --step 5` | pass — 49 items certified |
| impact-audit | `impact-audit.mjs --from pre-author --to post-5a --receipt …-impact.json` | pass — see §3 |
| impact-audit-5b | `impact-audit.mjs --from post-5a --current --receipt …-impact-5b.json` | pass — empty window |
| audit-manifest | `audit-manifest.mjs …batch-*.pages.json --output …-audit-manifest.json` | pass (written to the run artifact path by the gate) |
| **url-liveness** | `url-sweep.mjs --coverage …` | **FAIL — see §7** |

I did not re-run the two network-dependent side effects beyond `url-sweep` and the
`--recover` archive probe it performs internally.

## 5. Ledger work

`research/published-consumer-supplier-ledger.md` (edited under
`research/.published-consumer-ledger.lock`, acquired once and released with `rmdir`;
no contention occurred):

- Added "Step-5b cross-batch audit and in-window published-repair verification —
  2026-09-12" recording the edge audit, the three in-window published edits with exact
  current hashes, and the consumer re-check for the Euclidean pair.
- Recorded the executed status of the 2026-09-08 delta-functor cutover in the existing
  four-track entry (both items now declare the two published cone-sequence suppliers
  instead of `ex-a-degreewise-split-sequence-with-nonzero-connecting-map`).
- Appended the 5b consumer re-check to the existing A-R row for
  `ex-the-euclidean-levi-civita-connection`.
- No new published mathematical defect was found, so no new finding entry was added.
  The ledger's header and classification-table counts already disagree
  (A-R 187 vs 186, A-P 306 vs 315); I recorded that observation but did not edit
  either count, since no item's class changed in this audit.

`briefs/tasks/frontier-dependency-ledger.md` records: the batch-7 cross-batch input
(`research/phase-2-next-17-batch-7.cross-batch-dependencies.json`) now carries the 5b
reading on all 13 verified item rows (edge re-derived from current carrier hashes,
citing clause re-read against the supplier clause, with the verdict row locator), and
`tools/frontier-dependency-ledger.mjs refresh --run phase-2-next-17` was run; the
unified ledger still reports 11/11 batches reviewed, 15 edges, 1 orphaned review (the
existing `removed` row for the dropped Kronecker pairing), no unreviewed batch.

`research/defect-ledger.jsonl`: no rows added — no repair, strike, drop, removal or
reversion occurred, and this run has no open `5a-adjudicate`/`5b-cross` row.

## 6. Edits made by this dispatch

- `research/phase-2-next-17-5b-verdicts.jsonl` — 13 evidence-bearing edge rows
  (`accurate`, `defect_ids: []`, with current `from_sha256`/`to_sha256`).
- `research/phase-2-next-17-impact.json` — pre-author → post-5a receipt, 1298
  dispositions.
- `research/phase-2-next-17-impact-5b.json` — post-5a → current receipt, empty window.
- `research/phase-2-next-17-alpha-5b.md` — this report.
- `research/phase-2-next-17-batch-7.cross-batch-dependencies.json` — 5b evidence
  appended to the 13 audited rows.
- `research/phase-2-next-17-cross-batch-dependencies.json` — regenerated by
  `frontier-dependency-ledger.mjs refresh`.
- `research/phase-2-next-17-url-liveness.json` — regenerated by the `url-sweep`
  gate run (same path the gate writes).
- `research/published-consumer-supplier-ledger.md` — §5 updates.

No `items/`, `library/`, `research/plan-spec.json`, manifest or contract file was
touched. Shared-plan amendments: none. Phase-2 scope amendments: none — no new pair,
no new prerequisite, no reading-order change, and no published debt was transferred
into Phase 2.

## 7. Remaining blocker (owner-held)

`url-liveness` is red, and it is the only failing gate:

- URL: `https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf`
- Failure: `curl: (56) Recv failure: Connection reset by peer`; the sweep's archive
  probe found "no archived snapshot under any host variant" (I confirmed the Wayback
  CDX index returns no rows). Sweep summary: `57/58 live; 1 failed`.
- It was live earlier in this run: the gate-level sweeps at
  2026-09-12T11:26:31Z and 12:39:29Z both report `58/58 live; 0 failed`. The failure
  appeared between those runs and this dispatch (the earlier advisory failure at
  09:00:55Z was a different host, `fliphtml5.com`, and had cleared).
- Exact live replacement, verified by me at this dispatch:
  `https://webspace.maths.qmul.ac.uk/f.vivaldi/teaching/ETAD/NotesI.pdf` (HTTP 200,
  1,024,475 bytes; the site's new base is
  `https://webspace.maths.qmul.ac.uk/f.vivaldi/`, HTTP 200). The old
  `maths.qmul.ac.uk/~fvivaldi/...` host is the migrated-from address.
- Affected items (16, all batch 1 of this run, sources-only): `def-invertible-measure-preserving-system`,
  `def-koopman-operator-on-l-p`, `def-measure-preserving-transformation-and-system`,
  `def-strict-and-mod-null-invariant-sigma-algebras`, `def-strong-and-weak-mixing`,
  `ex-koopman-on-a-finite-probability-space`, `ex-two-point-preserving-permutation`,
  `lem-finite-measure-sets-are-approximable-by-a-generating-algebra`,
  `lem-mod-null-invariant-sets-have-strictly-invariant-representatives`,
  `prop-ergodic-positive-sets-sweep-out-almost-every-point`,
  `thm-ergodicity-and-invariant-functions`,
  `thm-integrals-are-invariant-under-measure-preserving-maps`,
  `thm-koopman-operator-is-a-linear-isometry-on-l-p`,
  `thm-measure-preservation-on-a-generating-pi-system`,
  `thm-mixing-implies-weak-mixing-implies-ergodicity`,
  `thm-mixing-is-checkable-on-a-generating-pi-system`.
- Repair strategy for the owner: update the single `sources.references[].url` value in
  each of the 16 items to the live replacement above (same author, same notes, new
  host). This is a source-record repair; the mathematics, statements and suppliers are
  unchanged. It does change those items' raw bytes, so their carriers move and their
  5a decision `subject_sha256` values become stale; per the run's gate policy the
  owner/operator performs the edit, refreshes the affected certifications, and then
  `retry` — I did not touch the items, because this dispatch is not granted a repair
  round and rule 6 makes every gate failure owner-held.

## 8. Limits of this audit (stated plainly)

- The 13 cross-batch edges were checked against the *complete* text of both endpoints,
  but this is a 5b cross-batch reading, not an independent re-proof of the 11 batch-5
  suppliers or of the 8 batch-7 items; those carry their own 5a adjudications.
- The 1298 impact dispositions are evidence-bearing but tiered: 994 affected items are
  themselves in-window content (517 of them with a hash-current 5a decision row, 477
  with a byte-identical pre-edit backup), 304 are published items whose full
  non-verification bytes are unchanged across the window, and 1 is the Euclidean
  consumer whose repaired supplier I read end to end. I did not re-prove any of the
  304 untouched published consumers.
- The `status` flip makes 589 publication-stamp-only items look like interface changes;
  I verified that classification against two independent backups for every one of
  them, but the class itself comes from that byte comparison.
- I did not re-run the network sweep after recording the failure above; the gate will
  re-run it, and the URL's state at that moment decides.
