# Step 3b authoring — pair whitehead-torsion-and-the-s-cobordism-theorem

- Run: `frontier-41-ha-dt-29`; role alpha-high; label
  `step3b-pair-whitehead-torsion-and-the-s-cobordism-theorem-3ee13553c1c7cc80`.
- A page: `whitehead-torsion-and-the-s-cobordism-theorem` (order 563,
  differential-topology, DT-24); B page:
  `whitehead-torsion-and-the-s-cobordism-theorem-examples` (order 564).
- Batch: 16. Date of this report: 2026-10-06. This dispatch continues the
  interrupted attempt `...-8f21c2646a455944`, which had written all 26 item
  files but no pages, no receipts and no checkpoint table. This report records
  the completed audit, the local repairs, the placed pages, the reconciled
  manifests/contracts/ledger inputs and the item decisions. It is authoring
  evidence, not an independent audit (Steps 5–8 follow).
- Owner resolution inherited and honoured: the presentation-relative criterion
  (`thm-smooth-s-cobordism-theorem`), with intrinsic arbitrary-structure
  independence deferred (batch-16 notes "Current owner resolution
  2026-10-04"; Step-1 record of `thm-smooth-s-cobordism-theorem`, owner: true).

## Owned IDs, levels and decisions

Authoring order per the dispatch; levels recomputed after the dependency repair
(`lem-h-cobordisms-admit-two-index-normal-form-presentations` moved 10 → 11
because its authored file cites the level-10
`def-middle-handle-intersection-matrix-of-an-h-cobordism`).

| item (A page unless noted) | level | decision |
| --- | ---: | --- |
| lem-a-vanishing-group-ring-coefficient-sum-pairs-off-opposite-signed-equal-labels | 0 | accept |
| lem-whitehead-classes-are-represented-by-invertible-matrices | 0 | accept |
| rem-whitehead-group-construction-remains-at-owned | 0 | accept |
| def-based-handle-chain-complex-over-the-fundamental-group-ring | 7 | escalate |
| lem-a-contractible-relative-group-ring-complex-with-a-pi-one-isomorphism-gives-a-homotopy-equivalence | 8 | escalate |
| lem-group-labelled-homology-lemma-realizes-group-ring-handle-bases-by-isotopy | 8 | escalate |
| lem-h-cobordism-handle-complex-is-contractible-over-the-group-ring | 8 | escalate |
| cex-ordinary-acyclicity-over-z-does-not-detect-group-ring-torsion (B) | 8 | escalate |
| lem-group-ring-modification-lemma-for-embedded-spheres | 9 | escalate |
| lem-relative-handle-complex-torsion-agrees-with-the-inclusion | 9 | escalate |
| def-whitehead-torsion-of-an-h-cobordism | 10 | escalate |
| lem-h-cobordisms-admit-two-index-normal-form-presentations | 11 | escalate |
| lem-handle-slides-and-cancelling-pair-creations-preserve-whitehead-torsion | 11 | escalate |
| lem-product-h-cobordisms-have-zero-whitehead-torsion | 11 | escalate |
| prop-realization-of-whitehead-torsion-by-h-cobordisms | 11 | escalate |
| rem-simple-homotopy-and-the-vanishing-criterion-are-at-owned | 11 | escalate |
| rem-torsion-from-the-opposite-boundary-involves-the-standard-involution-and-dimension-sign | 11 | escalate |
| lem-vanishing-torsion-allows-algebraic-diagonalization-by-simple-handle-moves | 12 | escalate |
| thm-whitehead-torsion-of-an-h-cobordism-is-well-defined | 12 | escalate |
| ex-a-group-ring-handle-matrix-and-its-torsion-class (B) | 12 | escalate |
| ex-handle-slides-change-the-matrix-but-not-whitehead-torsion (B) | 12 | escalate |
| lem-group-labelled-whitney-tricks-realize-the-diagonalized-handle-complex | 13 | escalate |
| thm-vanishing-torsion-implies-product-cobordism | 14 | escalate |
| thm-smooth-s-cobordism-theorem | 15 | escalate |
| cor-h-cobordism-theorem-when-the-whitehead-group-vanishes | 15 | escalate |
| ex-simply-connected-h-cobordisms-have-zero-whitehead-obstruction (B) | 16 | escalate |

Receipts: `research/frontier-41-ha-dt-29-step3b-review-<id>.json` (26 written:
3 `accept` with confidence 1, 23 `escalate`). The 23 escalations name the exact
unfinished suppliers and consuming paths in their `reason` field; they remain
owner-held until the suppliers are authored and the actual uses are reconciled.

## Local repairs and edits made in this dispatch

1. `cex-ordinary-acyclicity-over-z-does-not-detect-group-ring-torsion`, step
   2.1: the previous text inferred acyclicity of the underlying complex of
   abelian groups only from a base change along the augmentation, which does not
   imply it. The step now contracts the underlying complex directly through the
   `Z`-linear contraction of step 1.1 (the differential is multiplication by the
   unit `u`, inverse `y ↦ yu^{-1}`) and keeps the augmentation computation as a
   separate display.
2. `lem-relative-handle-complex-torsion-agrees-with-the-inclusion`, step 2.2:
   replaced the meaningless "zero contraction" phrase by the published argument
   that the identity is simple (empty sequence,
   `def-simple-homotopy-equivalence`) and therefore has vanishing torsion
   (`thm-simple-homotopy-equivalences-have-zero-whitehead-torsion`); both items
   added to `deps` and to the manifest entry.
3. `lem-h-cobordism-handle-complex-is-contractible-over-the-group-ring`, step
   4.1: replaced the bare appeal to a "standard comparison" by the explicit
   quotient chain map `γ(b,a)=[b]`, its kernel complex
   `K(a',a)=(∂a'+a,−∂a')`, the explicit kernel contraction `s(a',a)=(0,a')`,
   and the splitting correction producing a chain section, so that
   `C^h_*(W,M_0)` is exhibited as a chain retract of the contractible cone.
4. `def-based-handle-chain-complex-over-the-fundamental-group-ring`: the
   `AC_ω` premise now declares `def-countable-choice` in `deps` and links it in
   the statement, matching the run convention for choice-bearing items (the
   assumption is inherited only through
   `lem-a-handle-decomposition-gives-a-relative-cw-complex`).
5. `lem-h-cobordisms-admit-two-index-normal-form-presentations`: manifest and
   item `dependency_level` raised 10 → 11 (see above).
6. Manifest `research/frontier-41-ha-dt-29-batch-16.pages.json`: each item's
   `deps` reconciled to the union of the manifest and authored-file lists
   (`verification` fields untouched); no item id, kind, title or statement was
   changed, so the Step-3a scope hash stays current.
7. Proof contracts `research/frontier-41-ha-dt-29-batch-16.proof-contracts.json`:
   the three repaired steps' derivation entries (claim + inputs) and the `F4`
   citation uses of the contractibility lemma were updated to the new text; no
   other contract row was touched.
8. Library pages created:
   `library/differential-topology/whitehead-torsion-and-the-s-cobordism-theorem.md`
   (22 items, `requires` equal to the plan §12.4 row) and
   `library/differential-topology/whitehead-torsion-and-the-s-cobordism-theorem-examples.md`
   (4 examples, `requires` = the A page).
9. Cross-batch input `research/frontier-41-ha-dt-29-batch-16.cross-batch-dependencies.json`
   rebuilt: one row per (kind, consumer, supplier) for all 75 current direct
   cross-batch edges plus the page edge = 76 rows; 71 `verified`, 5 `open`.
10. `rem-torsion-from-the-opposite-boundary-involves-the-standard-involution-and-dimension-sign`:
    corrected the attribution of the standard involution and dimension sign
    from "part of the AT-owned torsion calculus of `def-k-one-…`" (which does
    not define it) to the cited source's calculus (Lück Lemma 2.16(2)), checked
    verbatim against the fetched source text; the group-ring conventions of
    `def-k-one-…` are still cited as the ring in which the formula is read.
11. `cor-h-cobordism-theorem-when-the-whitehead-group-vanishes` and
    `ex-simply-connected-h-cobordisms-have-zero-whitehead-obstruction`:
    `depcheck` flagged both as `b-leaf-content` because they load-bear on
    `ex-the-whitehead-group-of-the-trivial-group-is-zero`, which is homed only
    on the published AT-22 examples page. The dependency is replaced by a
    complete local computation of `Wh(1)=0` in each item (Z[1]=Z; the
    determinant is a well-defined surjection `K_1(Z) → {±1}` and is injective
    because a primitive integer column is reduced to `(±1,0,…,0)` by the
    division algorithm and the Bézout identity and induction on the size, so
    `K_1(Z) ≅ {±1}` and the quotient defining `Wh(1)` dies), citing the
    A-homed published suppliers `thm-division-algorithm-in-z` and
    `thm-bezout-identity`; deps, manifest entries and the two proof-contract
    citation sets (including exact source quotes) were updated accordingly.

No item was added, no ID or statement changed, no sibling or published content
edited, and no owner-held decision overridden.

## Unfinished in-run suppliers at handoff (exact IDs, consumers, steps)

Authors of batches 1 and 14 were active during this dispatch. Seven suppliers
arrived mid-session (`thm-morse-functions-and-handle-decompositions-correspond`,
`thm-morse-rearrangement-by-index`,
`lem-handles-of-equal-index-can-be-attached-on-one-level`,
`thm-handle-duality-from-negating-a-morse-function`,
`thm-self-indexing-morse-function-existence`,
`prop-connected-cobordisms-admit-presentations-without-superfluous-zero-handles`,
`prop-dual-elimination-of-top-index-handles`);
each was read and checked against the consumers' uses, and the corresponding
cross-batch rows were moved from `open` to `verified` where the supplier is a
directly declared dependency (the `prop-connected-cobordisms-…` row also needed
its contract quote refreshed to the newly authored wording). The set still
missing at the final check (2026-10-06 ~02:44 AEDT) is:

1. `thm-high-dimensional-whitney-trick` (batch 14) — consumer
   `lem-group-labelled-homology-lemma-realizes-group-ring-handle-bases-by-isotopy`,
   [F3]/step 3.1 (stable range 3 ≤ q ≤ n−3), and every consumer of that lemma.
2. `thm-whitney-trick-in-the-two-dimensional-borderline-case` (batch 14) —
   consumers `lem-group-labelled-homology-lemma-…` ([F3]/step 3.1, q = 2 and
   q = n−2), `lem-h-cobordisms-admit-two-index-normal-form-presentations`
   ([F3]/step 2.1, r = 2), and `lem-group-labelled-whitney-tricks-realize-…`
   ([F1]/step 1.1, q = 2).

## Open mathematical obligation carried by the authored text

**Flipped borderline Whitney pattern (Step-3a finding 1).** In
`lem-group-labelled-homology-lemma-…` the case `q = n−2` isotropes a
`(n−2)`-sphere off a fixed `2`-sphere — the `(≥3, 2)` pattern. The batch-14
scaffold contains only the stable theorem (both sheets ≥ 3) and the
`(2, ≥3)` borderline theorem, so the flipped pattern is not covered verbatim;
the item's step 3.1 states this as an explicit open obligation, and the
`q = n−2` realization routes in the pair (normal form step 3.1, realization
proposition) inherit it. The `q = 2` / `r = 2` borderline uses additionally
require the fundamental-group complement hypothesis recorded by the source
(Lück's later qualification; Scorpan pp. 51–53), which the item text flags as
an obligation "fulfilled in the h-cobordism situation" but not reproved
locally. These two obligations must be discharged by the batch-14 author or by
the Step 5–8 audit before the affected consumers can be accepted. All five
affected consumers carry this in their escalate reason.

Findings 2 and 3 of the Step-3a review are handled: the oriented
intersection-matrix route is stated only where the local proof needs
orientability (the sufficiency theorem, criterion and corollary carry the
oriented hypotheses they use and claim no orientation-free strengthening), and
the corollary's only instance claim is the published vanishing of `Wh(1)`.

## Files written or edited

- `items/cex-ordinary-acyclicity-over-z-does-not-detect-group-ring-torsion.md`
- `items/lem-relative-handle-complex-torsion-agrees-with-the-inclusion.md`
- `items/lem-h-cobordism-handle-complex-is-contractible-over-the-group-ring.md`
- `items/def-based-handle-chain-complex-over-the-fundamental-group-ring.md`
- `items/lem-h-cobordisms-admit-two-index-normal-form-presentations.md` (level only)
- `items/rem-torsion-from-the-opposite-boundary-involves-the-standard-involution-and-dimension-sign.md`
- `items/cor-h-cobordism-theorem-when-the-whitehead-group-vanishes.md`
- `items/ex-simply-connected-h-cobordisms-have-zero-whitehead-obstruction.md`
- `library/differential-topology/whitehead-torsion-and-the-s-cobordism-theorem.md` (new)
- `library/differential-topology/whitehead-torsion-and-the-s-cobordism-theorem-examples.md` (new)
- `research/frontier-41-ha-dt-29-batch-16.pages.json` (deps reconciled, one level)
- `research/frontier-41-ha-dt-29-batch-16.proof-contracts.json` (repaired-step entries)
- `research/frontier-41-ha-dt-29-batch-16.cross-batch-dependencies.json` (76 rows)
- `research/frontier-41-ha-dt-29-step3b-review-<26 ids>.json` (decisions)
- this report

The other 18 item files were audited and left unchanged.

## Checks actually run (final pass, 2026-10-06)

- `node tools/proof-layout.mjs` on the 8 changed item paths (one batched
  command, run after the last item edit): `8 items, 22 steps, 0 defects`.
- `node tools/tsx-run.mjs tools/precheck.mts <26 explicit item paths>`:
  `21 checked, 0 failing — all clean` (5 definition/remark bodies are
  `not-applicable`).
- `node tools/rendercheck.mjs <26 items + 2 pages>`: OK — 28 files, no
  wikilinks in math, no unbalanced delimiters, all math parses under KaTeX, all
  frontmatter parses under the renderer's YAML parser.
- `node tools/content-policy.mjs research/frontier-41-ha-dt-29-batch-16.pages.json`:
  `26 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/proof-contract.mjs research/frontier-41-ha-dt-29-batch-16.proof-contracts.json --strict`:
  `26/26 checked, 4 error(s), 0 warning(s)` — every error is
  `citation-source-missing` for the not-yet-authored suppliers listed above
  (`thm-high-dimensional-whitney-trick`,
  `thm-whitney-trick-in-the-two-dimensional-borderline-case`); no other
  contract defect.
- `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-16.pages.json`:
  `26 item(s), 0 normalized, 0 error(s)`.
- `node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29`:
  11 errors at the final check, all on other batches' items (the
  Whitney-trick/immersion pairs and the Eilenberg–Watts pair); no batch-16 item
  is flagged, so every owned level matches the computed level.
- `node tools/validate-plan.mjs research/plan-spec.json`: OK — declared page
  order acyclic and consistent, no item-level cycles, forward references, B-page
  dependencies or unresolved ids among the 1422 pages with item lists (the
  pre-existing redundant-prerequisite warnings are on other pairs).
- `node tools/coverage-checklist.mjs research/frontier-41-ha-dt-29-batch-16.coverage.json --require-destination`:
  `2 pages, 91 harvested results, 0 errors, 0 warnings`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-41-ha-dt-29-batch-16.coverage.json`:
  `5/5 sources fetch-verified; 5/5 resolved` (no stamps written).
- `node tools/depcheck.mjs`: FAIL, unchanged in kind from the run state — for
  this pair only `dep-unresolved`/`link-unresolved` entries naming the two
  still-unfinished suppliers above; all other reported findings (b-leaf-content,
  justification-backward, page-cycle, published-unaudited) are on other pairs
  and were not touched. The `b-leaf-content` finding on the corollary and the
  simply connected example was repaired in this dispatch (repair 11 above) and
  no longer appears.
- `node tools/step3-decisions.mjs check --run frontier-41-ha-dt-29 --phase final`:
  run-level 903 items / 31 pairs, `accepted 322`, exit 1 — expected while other
  pairs are in flight. For batch 16: 3 `accept` receipts are closed; the 23
  `escalate` receipts are owner-held, and several already read "changed inputs
  require a current owner decision" because batch-1/14 suppliers changed after
  the receipt was written, which is exactly the reconciliation the escalations
  record.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-41-ha-dt-29`:
  **blocked by a sibling input** —
  `frontier-41-ha-dt-29-batch-19.cross-batch-dependencies.json: invalid review
  or consumer ownership` (its rows use statuses `available`/`reconciled`,
  outside the `{open, verified, removed}` vocabulary). Batch 16's own input is
  current and atomic; the run-level `…-cross-batch-dependencies.json` therefore
  still shows the previous refresh (2026-10-06 01:34). Owner of batch 19 must
  fix its input; whoever reruns the serial refresh afterwards will pick up the
  batch-16 rows.
- `node tools/prosecheck.mjs` on the two new pages: `0 error(s), 0 warning(s)`.

## Published concerns and escalations

- No published item was edited and no new published defect was found while
  auditing. One outside finding for a sibling author:
  `lem-a-handle-decomposition-gives-a-relative-cw-complex` (batch 1) states
  "Assume AC_ω" but does not declare `def-countable-choice` in its `deps`
  (consumer `def-based-handle-chain-complex-over-the-fundamental-group-ring`;
  the consumer now declares the axiom itself, so the assumption is tracked
  locally).
- Required cross-group remedy: author the two missing suppliers listed above
  (batches 1 and 14) and, for the borderline Whitney obligation, either extend
  the batch-14 borderline theorem to the flipped `(≥3, 2)` pattern with the
  complement hypothesis or route the `q = n−2` uses through the dualised
  presentation; then re-run `proof-contract --strict`, `depcheck`,
  `step3-decisions` and the ledger refresh, and let the owner resolve the 23
  escalations.
- No scope change is requested: the pair's Step-3a scope decision
  (`sufficient`, owner resolution recorded) is still current, and the pages'
  `requires` arrays match plan §12.4.

## Step 4 pre-splice state (no action requested from this pair)

`research/plan-spec.json` still carries the two pages with empty `items`
arrays, and the new library pages are drafts not yet placed in the
differential-topology pathway; the authoritative item inventory for the splice
is the batch-16 manifest written here (22 A + 4 B). This is the normal
pre-splice state; no plan or pathway edit is made by this dispatch.

## Handoff summary

All 26 assigned items are authored on disk (22 A + 4 B) with the two library
pages, the reconciled manifest/coverage/contracts, the rebuilt cross-batch
input and 26 item receipts. 3 items are accepted with confidence 1; 23 are
escalated for the exact unfinished suppliers and the borderline Whitney
obligation recorded above. The final proof-layout command was run once on the
eight changed item paths (0 defects). No item, page or ID was added, removed,
rehomed or reworded beyond the recorded repairs.
