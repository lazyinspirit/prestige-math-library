# Step 3b authoring — `morse-inequalities-and-the-handle-chain-complex`

- Run `frontier-41-ha-dt-29`; role alpha-high; label
  `step3b-pair-morse-inequalities-and-the-handle-chain-complex-f45b4eb10e259172`.
- A page `morse-inequalities-and-the-handle-chain-complex` (order 535, batch 4,
  differential-topology); B page `morse-inequalities-and-the-handle-chain-complex-examples`
  (order 536). Owned items are exactly the 24 in
  `research/frontier-41-ha-dt-29-batch-4.pages.json`; sibling batches are not touched.
- The earlier dispatch of this pair
  (`…-d10960c7a210c375`) completed its authoring work and its artifact check
  (`author_artifacts ok: true`, 28/28) but the process exited 1 on a trailing
  `429 Too Many Requests`; this pass re-verified the artifacts on disk, re-ran the
  checks, reconciled the now-landed sibling suppliers, and refreshed the ledger
  input and this record. No item or page text was changed in this pass.
- Inputs read at entry and in this pass: `CLAUDE.md`, `SCHEMA.md`, the DT-8 design
  (`research/plan-differential-topology-track.md` L598–635 and §12.4/§12.6/§12.7),
  `research/plan-spec.json` orders 535/536, the batch-4 manifest / coverage /
  cross-batch input / proof contracts, the Step-3a scope review
  (`research/frontier-41-ha-dt-29-step3a-pair-morse-inequalities-and-the-handle-chain-complex.md`)
  and its review receipt, `research/frontier-41-ha-dt-29-owner-authoring-direction.md`,
  the 24 owned item files, the two page files, and every in-run supplier the pair
  consumes (batches 1 and 3, read in `items/`).

## Owned IDs and completion state

Authored 24/24 items + 2 pages (all files on disk, all mechanical checks below green
for this batch except the citations of the three still-missing DT-6 suppliers):

| # | Item | Level | State |
| --- | --- | --- | --- |
| 1 | `def-morse-numbers-and-morse-polynomial` | 0 | authored, decision `accept` (current) |
| 2 | `def-poincare-polynomial-over-a-field` | 0 | authored, decision `accept` |
| 3 | `lem-a-collar-product-region-deformation-retracts-onto-its-face` | 0 | authored, decision `accept` |
| 4 | `lem-a-k-handle-deformation-retracts-onto-its-cocore-and-outgoing-region` | 0 | authored (statement repaired; see below), decision `accept` |
| 5 | `lem-exact-sequence-dimension-inequality` | 0 | authored, decision `accept` |
| 6 | `lem-long-exact-sequence-of-a-triple-in-singular-homology` | 0 | authored, decision `accept` |
| 7 | `lem-one-handle-changes-relative-homology-in-one-degree` | 0 | authored, decision `accept` |
| 8 | `def-perfect-morse-function-over-a-field` | 1 | authored, decision `accept` |
| 9 | `lem-higher-index-handle-attachments-do-not-change-lower-homology` | 1 | authored, decision `accept` |
| 10 | `thm-morse-polynomial-identity` | 1 | authored, decision `accept` |
| 11 | `cor-strong-morse-inequalities` | 2 | authored, decision `accept` |
| 12 | `cor-weak-morse-inequalities` | 2 | authored, decision `accept` |
| 13 | `ex-perfect-height-function-on-a-sphere` | 2 | authored, decision `accept` |
| 14 | `cor-total-critical-point-lower-bound` | 3 | authored, decision `accept` |
| 15 | `prop-relative-morse-inequalities-for-a-cobordism` | 3 | authored; decision `escalate` (suppliers now landed — owner may flip) |
| 16 | `cor-morse-euler-characteristic-identity` | 4 | authored; decision `escalate` (blocked on DT-6) |
| 17 | `prop-morse-handle-chain-complex-computes-singular-homology` | 5 | authored; decision `escalate` (blocked on DT-6) |
| 18 | `rem-morse-inequalities-depend-on-the-coefficient-field` | 5 | authored; decision `escalate` (chain through item 16) |
| 19 | `ex-real-projective-space-shows-coefficient-dependent-perfectness` | 5 | authored; decision `escalate` (chain through item 16) |
| 20 | `lem-handle-boundary-coefficients-are-attaching-belt-intersection-numbers` | 6 | authored; decision `escalate` (chain through item 17) |
| 21 | `lem-perfectness-is-equivalent-to-vanishing-morse-correction-polynomial` | 6 | authored; decision `escalate` (chain through item 17) |
| 22 | `cex-euler-equality-alone-does-not-imply-perfectness` | 6 | authored; decision `escalate` (blocked on DT-6) |
| 23 | `ex-cancellation-pair-contributes-a-one-plus-t-term` | 6 | authored; decision `escalate` (blocked on DT-6) |
| 24 | `ex-perfect-morse-function-on-a-torus` | 7 | authored; decision `escalate` (chain through items 17 and 20) |

Pages written with the manifest inventories:
`library/differential-topology/morse-inequalities-and-the-handle-chain-complex.md`
(19 items) and `…-examples.md` (5 examples); the A page's closing paragraph records
the AC_ω use. 
`research/frontier-41-ha-dt-29-batch-4.proof-contracts.json` carries one strict
entry per scoped item (24/24).

No supplier items were added by this pair: all 24 owned IDs are original scaffold
inventory (`research/frontier-41-ha-dt-29-step3-auditor-baseline.json` lists every
one of them and none of their files predates the run), so the ordinary item-decision
route applies to all 24 and no auditor-created certification is owed.

## Statement history of the repaired local lemma, with a corrected record

The Step-3a review did not test the four local additions for truth, and at authoring
`lem-a-k-handle-deformation-retracts-onto-its-cocore-and-outgoing-region` was
rewritten, with the manifest title and statement updated and the pair's Step-3a
scope decision refreshed
(`research/frontier-41-ha-dt-29-step3a-review-morse-inequalities-and-the-handle-chain-complex.json`,
current `scopeHash 5e9bc361…4302`). The other three additions were kept as stated.
The Step-3a dependency-declaration finding on
`lem-handle-boundary-coefficients-are-attaching-belt-intersection-numbers` was
resolved locally by adding `def-geometric-cancelling-handle-pair` to the item and
manifest edges (present in both).

**Correction (this pass; no item or receipt was edited).** The earlier record — in
the superseded version of this report and in the refreshed scope receipt — says the
scaffold claim was *false*, with the reason that for $k=n-k=1$ the target is "not
even a retract". That reason is invalid, and I record the correction rather than
repeating it. The scaffold statement (retrieved from the batch-4 scaffold draft in
`research/frontier-41-ha-dt-29-dispatch/beta-batch-4.log`) was: there is a strong
deformation retraction of $H=D^k\times D^{n-k}$ onto
$A=\{0\}\times D^{n-k}\cup D^k\times S^{n-k-1}$ fixing the outgoing region
pointwise, "given by pushing along the $D^k$ factor", plus the punctured-outgoing
radial retraction onto $S^{k-1}\times S^{n-k-1}$.

- The recorded counterexample does not exist: for $k=n-k=1$ the target is a tree
  and does admit a strong deformation retraction of the square fixing it. Each
  half-square retracts onto its three-edge "C" (an arc, hence a retract of the
  square by Tietze extension of a homeomorphism $C\to[0,1]$ composed with its
  inverse), and the straight-line homotopy to that retraction stays in the convex
  half-square and fixes the "C" pointwise; the two halves agree on their common
  edge, so the glued homotopy is a strong deformation retraction of the square onto
  the target fixing it pointwise.
- The existence clause is true in general: $A$ deformation retracts onto the cocore
  disk $C$ by $(x,y)\mapsto((1-t)x,y)$ on $R$ (fixing $B$) and the identity on $C$,
  so $A$ is a contractible compact polyhedron; all obstruction groups
  $H^{i}(H,A;\pi_{i-1}(A))$ vanish, so the identity on the subpolyhedron $A$
  extends to a retraction $r:H\to A$, and the straight-line homotopy
  $(1-s)\operatorname{id}+s\,r$ in the convex $H$ is a strong deformation
  retraction of $H$ onto $A$ fixing $A$ pointwise.
- What is genuinely defective in the scaffold is the *witness and sketch*: the named
  formula family cannot fix the outgoing region pointwise (for $x\ne0$ any push
  along $D^k$ moves $(x,y)\in R$), the sketch also keeps the attaching collar
  $S^{k-1}\times D^{n-k}$ fixed, which is incompatible with the target whenever
  $0<k<n$, and its assertion that $D^k$ retracts onto $\{0\}\cup S^{k-1}$ is false
  for $k\ge1$ (for $k=1$ connectedness obstructs it; for $k=2$ a retraction would
  make the identity of $H_1(S^1)=\mathbb Z$ factor through
  $H_1(D^2)=0$, since $S^1\hookrightarrow D^2$ induces zero).
- The authored replacement (a), (b), (c) is true and carries exactly the facts the
  page uses: (b) is the cocore retraction with $R$ carried onto the belt sphere
  (Milnor's Lemma 7.2 argument, the use of [F6] in
  `lem-handle-boundary-coefficients-are-attaching-belt-intersection-numbers`), and
  (c) is the punctured radial retraction. No consumer uses the narrowed-away clause.
- **Owner question (scope, not a defect of the authored item).** The reformulation
  did narrow a true existence statement, and the current scope receipt records an
  incorrect sentence ("not a retract") that my check refutes. Restoring the
  stronger clause would need a complete proof; the one I can give uses obstruction
  theory, which the library does not have, and I did not certify an explicit
  construction for all $k$. I did not re-edit the item: the authored form is sound,
  is what the consumers use, and any further statement edit now would invalidate
  about ninety recorded downstream decisions. Recommended disposition: keep the
  reformulation and record this correction at Step 5; commission the strengthened
  statement separately if the original promise is to be restored.

## Verification performed in this pass

- Every one of the 24 item files was read end to end and its statement, facts,
  numbered steps, tags, edge cases and supplier uses checked against the recorded
  uses. No mathematical defect was found; all proof routes are complete in the
  authoring sense (independent audit follows in Steps 5–8). Non-blocking editorial
  observations are listed at the end.
- The Step-3a interface obligation on the closed-manifold case of the DT-6
  correspondence was re-checked: `thm-morse-functions-and-handle-decompositions-correspond`
  is still not on disk, so the obligation stands (see below).
- **Sibling suppliers reconciled against the current bytes** (all of batch 3 and the
  authored part of batch 1): `def-handle-decomposition-relative-to-the-incoming-boundary`,
  `def-morse-function-adapted-to-a-cobordism`, `def-smooth-cobordism-triad-for-morse-theory`,
  `lem-interior-slab-handle-attachment`, `lem-a-handle-decomposition-gives-a-relative-cw-complex`,
  `lem-handle-attachments-are-relative-cell-attachments-up-to-homotopy`,
  `def-attaching-belt-intersection-matrix-of-adjacent-index-handles`,
  `lem-transverse-complementary-spheres-have-product-charts`,
  `thm-creation-of-a-cancelling-handle-pair`, `def-geometric-cancelling-handle-pair`.
  Each states exactly the claim the consuming step needs; the batch-4 cross-batch
  input records the confirmation with the exact claim and use
  (`research/frontier-41-ha-dt-29-batch-4.cross-batch-dependencies.json`: 21 rows,
  14 `verified`, 7 `open`). Because several of these files were last written after
  the earlier verification, each `verified` row was re-checked today and carries a
  dated re-verification note; the DT-7 page row was promoted from `open` to
  `verified` (batch 3 is authored in full, 19/19 A + 5/5 B).
- Dependency declarations: the only unresolved links in the pair are the three
  missing DT-6 items (12 depcheck findings: 6 dep-unresolved + 6 link-unresolved,
  all on items 16, 17, 22, 23). No cycle, no undeclared use, no unresolved link
  elsewhere. `manifest-deps` reports 24 items, 0 missing, 0 errors.

## Open obligations (unfinished sibling suppliers)

`handle-decompositions-duality-and-rearrangement` (DT-6, batch 1) is **not finished**:
21/29 A item files exist; eight are missing, including all three this pair consumes;
the five B items and the page file
`library/differential-topology/handle-decompositions-duality-and-rearrangement.md`
do not exist. The exact supplier ID, consumer ID and consuming step are flagged:

| Supplier (missing) | Consumer | Consuming fact / step |
| --- | --- | --- |
| `thm-morse-functions-and-handle-decompositions-correspond` | `cor-morse-euler-characteristic-identity` | [F4], step 4.1 |
| `thm-morse-rearrangement-by-index` | `prop-morse-handle-chain-complex-computes-singular-homology` | [F2], step 1.1 |
| `lem-handles-of-equal-index-can-be-attached-on-one-level` | `prop-morse-handle-chain-complex-computes-singular-homology` | [F2], step 1.1 |
| `thm-morse-functions-and-handle-decompositions-correspond` | `prop-morse-handle-chain-complex-computes-singular-homology` | [F2], step 1.1 |
| `thm-morse-functions-and-handle-decompositions-correspond` | `ex-cancellation-pair-contributes-a-one-plus-t-term` | [F2], step 2.1 |
| `thm-morse-functions-and-handle-decompositions-correspond` | `cex-euler-equality-alone-does-not-imply-perfectness` | [F2], step 2.1 |
| the same three, indirectly | `lem-perfectness-is-equivalent-to-vanishing-morse-correction-polynomial` | [F3], steps 1.2–1.3 (through item 17) |
| `thm-morse-functions-and-handle-decompositions-correspond`, indirectly | `rem-morse-inequalities-depend-on-the-coefficient-field` | prose link (through item 16) |
| `thm-morse-functions-and-handle-decompositions-correspond`, indirectly | `ex-real-projective-space-shows-coefficient-dependent-perfectness` | statement-level (through item 16) |
| the same three, indirectly | `lem-handle-boundary-coefficients-are-attaching-belt-intersection-numbers` | [F1], steps 1.2–1.3 (through item 17) |
| the same three, indirectly | `ex-perfect-morse-function-on-a-torus` | [F2] steps 1.1/2.1/4.1, [F3] steps 3.1–3.2, [F4] steps 4.1/5.1 |

`prop-relative-morse-inequalities-for-a-cobordism` no longer has any missing item in
its transitive closure (all suppliers — `def-morse-function-adapted-to-a-cobordism`,
`lem-interior-slab-handle-attachment`, `def-smooth-cobordism-triad-for-morse-theory`,
`lem-finitely-many-critical-values-can-be-separated-locally`,
`thm-regular-interval-diffeomorphism` — are on disk, and the three used at steps
1.1/2.1 were read against their facts [F1], [F7], [F8] and the collar lemma).

**Closed-case reading of the DT-6 correspondence (Step-3a finding; still open).**
`prop-morse-handle-chain-complex-computes-singular-homology` [F2]/step 1.1 and
`cor-morse-euler-characteristic-identity` [F4]/step 4.1 read the correspondence on
the triad $(M;\varnothing,\varnothing)$ under the empty-face convention. The batch-1
definition of adaptedness requires $f^{-1}(0)=M_0$ and $f^{-1}(1)=M_1$, which
collapses when both faces are empty; the consuming items state the required claim
plainly, and the repair (an explicit closed-face clause on the three DT-6
statements, or a bridge item) belongs to the batch-1 producer. Recorded in the
batch-4 cross-batch input as the page row and the item rows for
`thm-morse-functions-and-handle-decompositions-correspond`.

## Item decisions (escalations are owner-held)

`node tools/step3-decisions.mjs check --run frontier-41-ha-dt-29 --phase final`
currently reports 14 of the pair's items accepted (confidence 1) and 10 recorded
`escalate`. Nine of the ten still have a missing DT-6 item in their transitive
closure: four directly (16, 17, 22, 23), and five through a blocked consumer
(18 and 19 through 16; 20 and 21 through 17; 24 through 17 and 20). Only
`prop-relative-morse-inequalities-for-a-cobordism` (15) has no missing item left in
its closure — its three suppliers landed and are reconciled above. Because
`step3-decisions.mjs record-item` refuses a non-owner overwrite of an `escalate`
receipt, the owner (or an owner-authorized re-dispatch) must record the fresh
decisions; the receipts are all stale in the tool's hash sense. Reconciliation
evidence for each supplier is in the cross-batch input above.

## Checks run in this pass (exact results)

Run 2026-10-06 (AEDT, `Asia/Sydney`) on the explicit batch-4 paths unless stated; the
run is paused and sibling batches are still writing, so whole-run tools also report
sibling findings, listed separately below.

| Check | Command | Result |
| --- | --- | --- |
| proof format (explicit paths) | `node tools/tsx-run.mjs tools/precheck.mts <24 items>` | 20 checked, 0 failing (4 definitions/remark have no phase body) |
| rendering | `node tools/rendercheck.mjs <24 items + 2 pages>` | exit 0 |
| step layout / blue tags | `node tools/proof-layout.mjs <24 items>` (one batched command) | 24 items, 105 steps, 0 defects |
| content policy | `node tools/content-policy.mjs research/frontier-41-ha-dt-29-batch-4.pages.json` | 24 scoped items, 0 errors, 0 warnings |
| manifest dependencies | `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-4.pages.json` | 24 items, 0 missing, 0 errors |
| strict proof contracts (batch) | `node tools/proof-contract.mjs research/frontier-41-ha-dt-29-batch-4.proof-contracts.json --strict` | 24/24 checked; 6 errors, all `citation-source-missing` for the three missing DT-6 suppliers |
| strict proof contracts (merged) | `node tools/merge-proof-contracts.mjs …; node tools/proof-contract.mjs research/frontier-41-ha-dt-29-proof-contracts.json --strict` | the only errors whose subject is a batch-4 item are the same 6; no batch-4 item is a missing cited source |
| boundary audit | `node tools/boundary-audit.mjs research/frontier-41-ha-dt-29-proof-contracts.json --fail-on-contradicted --fail-on-template --json` | 0 findings on any batch-4 item |
| citation fidelity | `node tools/citation-fidelity.mjs research/frontier-41-ha-dt-29-proof-contracts.json --fail-on-missing-quote` | 2 widening candidates on batch-4 items, both read and cleared: `ex-perfect-morse-function-on-a-torus` [F4] → `thm-morse-polynomial-identity` ("carries $k\ge0$"; the restatement is the coefficientwise form) and `lem-one-handle-changes-relative-homology-in-one-degree` [F7] → `prop-singular-homology-of-a-disjoint-union-is-the-direct-sum` ("carries $n\ge0$"; the use in step 4.2 is in nonnegative degrees and negative-degree homology vanishes in both conventions) |
| finite smoke | `node tools/finite-smoke.mjs research/frontier-41-ha-dt-29-proof-contracts.json` | no batch-4 item carries a finite obligation |
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29` | names no batch-4 item (32 mismatches, all in other batches) |
| plan validation | `node tools/validate-plan.mjs research/plan-spec.json` | OK — acyclic, consistent, no unresolved ids |
| coverage checklist | `node tools/coverage-checklist.mjs research/frontier-41-ha-dt-29-batch-4.coverage.json --require-destination` | 1 page, 74 rows, 0 errors, 0 warnings |
| dependency check (library) | `node tools/depcheck.mjs` | 12 findings on this pair, all the three missing DT-6 links; no other batch-4 finding |
| forward check | `node tools/fwdcheck.mjs` | 6 findings on this pair, all `link-unplanned` for the three missing DT-6 items |
| external check / dep source / prose / pathway | `node tools/extcheck.mjs`, `tools/depsource.mjs`, `tools/prosecheck.mjs`, `tools/pathcheck.mjs` | exit 0; no batch-4 finding |
| sources | `node tools/source-fetch-check.mjs --coverage …batch-4.coverage.json`; `node tools/url-sweep.mjs --coverage … --out /tmp/urlsweep-b4.json` | 7/7 fetch-verified, 7/7 live, 0 failed |
| manifest integrity | `node tools/manifest-integrity.mjs --run frontier-41-ha-dt-29` | 62 pages owed, 62 present, no scope drift |
| item decisions | `node tools/step3-decisions.mjs check --run frontier-41-ha-dt-29 --phase final` | 14 batch-4 accept, 10 escalate (see above); no batch-4 item is missing a receipt |
| ledger input | `node tools/frontier-dependency-ledger.mjs refresh --run frontier-41-ha-dt-29` | blocked by a sibling input, see below; the batch-4 file itself validates |

## Run-level blockers and cross-pair impacts reported (not batch-4 defects)

1. **Ledger refresh blocked by batch 19.**
   `research/frontier-41-ha-dt-29-batch-19.cross-batch-dependencies.json`
   (the `isotopy-extension-and-embedding-theory-beyond-whitney` pair) contains 20
   rows, of which 8 use statuses outside `open|verified|removed` (7 `available`, 1
   `reconciled`). `frontier-dependency-ledger.mjs refresh` aborts there
   (`invalid review or consumer ownership`), so the unified ledger
   (`research/frontier-41-ha-dt-29-cross-batch-dependencies.json`, last written
   2026-10-05 14:34 UTC) is stale; batch 4 was merged in that snapshot and its own
   input passes the tool's validation. Repair owner: that pair's writer; remedy: use
   the three allowed statuses with evidence.
2. **Scope-decision register empty for the run.**
   `node tools/scope-decisions.mjs check --run frontier-41-ha-dt-29` reports 454
   pending declines, 15 of them on this page (12 `deferred`, 3 `out-of-scope`;
   batch 4 is in alpha group f, whose 46 declines also cover batches 1 and 13). No
   `research/frontier-41-ha-dt-29-alpha-*-scope-decisions.json` file exists, and
   only the owner may resolve the two rows the Step-3a review flagged (Nicolaescu
   Prop 2.3.6 gap-condition perfectness and Ritter's products of Morse classes, both
   deferred to `morse-homology-continuation-and-comparison`, which plans neither).
   This is an owner-held scope item, not a pair defect.
3. **Two consumer contracts quote a superseded statement of this pair's item.**
   `thm-poincare-hopf-for-closed-manifolds` [F5] and
   `cor-euler-number-of-the-tangent-bundle-is-the-euler-characteristic` [F3]
   (batch 7, `vector-field-index-euler-characteristic-and-poincare-hopf`) quote the
   pre-edit text of `cor-morse-euler-characteristic-identity` (mentioning
   `def-euler-characteristic-of-a-compact-manifold`) and fail
   `citation-quote-mismatch` in the merged strict contract run; the authored
   statement now cites `def-euler-characteristic-of-a-finite-cw-complex` and
   `thm-euler-poincare-formula-for-finite-cw-complexes` (scope receipt above). The
   identity itself is unchanged and batch 7's cross-batch rows already carry a
   current interface check (2026-10-06); only their quote text must be refreshed.
   Repair owner: the batch-7 pair writer.
4. **Whole-run fwdcheck fails** on sibling items (notably the published page cycle
   `the-hirzebruch-signature-theorem ↔ exotic-smooth-structures-and-milnor-spheres`,
   `link-unplanned` links to the four unauthored DT-6 items, and unrelated missing
   links); `depcheck` reports ~2,860 findings elsewhere in the in-flight run. None is
   in batch 4.

## Published concerns

None newly found in this pair. The two Step-3a coverage-record notes (the two
deferred rows of item 1 above; the A-page-only coverage key) remain owner/enrichment
decisions and are unchanged.

## Non-blocking editorial observations (for Steps 5–8)

- `lem-one-handle-changes-relative-homology-in-one-degree`, Remarks: cites "[F5]",
  a label the item no longer carries (its facts are F1, F2, F3, F6, F7, L1). The
  claim (AC_ω enters through the handle-attachment suppliers) is unaffected; a
  cosmetic reference fix is deferred to avoid invalidating ~94 recorded downstream
  decisions for a non-mathematical change.
- `cor-strong-morse-inequalities`, statement: for $k>n$ the common value of the two
  alternating sums is minus the $k=n$ value; the sentence "the common value being
  the total alternating sum" is loose, though the equality claim is standard and the
  proof fixes $q_k=0$ for $k\ge n$ correctly.
- `lem-exact-sequence-dimension-inequality`: the proof reuses the symbol $\alpha_k$
  for both the map of the displayed sequence and $\dim_F\ker\alpha_k$ (declared in
  the Given); unambiguous but worth a symbol change at review.

## Next action

The batch-1 producer authors the three missing DT-6 items
(`thm-morse-functions-and-handle-decompositions-correspond`,
`thm-morse-rearrangement-by-index`,
`lem-handles-of-equal-index-can-be-attached-on-one-level`, plus the closed-face
clause); then this pair's ten escalations are re-read against the landed suppliers
and re-recorded by the owner or an authorized re-dispatch. Independently, the
batch-19 ledger input and the batch-7 quote refresh are needed before the run-level
Step-3 gates can close. The owner is also asked to read the statement-history
correction above and record whether the strengthened clause of the local handle
lemma is to be restored (recommended: keep the authored reformulation and note the
correction at Step 5). No batch-4 item, page or contract is missing.
