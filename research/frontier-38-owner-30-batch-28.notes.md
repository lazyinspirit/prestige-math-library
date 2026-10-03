> Current held-gate source/boundary repair: `research/frontier-38-owner-30-step3-gate-repair-modular-report.md`
> and matching `...-modular-decisions.json` supersede the earlier decline details below.
> Batch28 retains A11/B3; overbroad source bundles are split and global derived Hom is explicitly distinguished in the proof.

# Batch 28 Step 1 scaffold — coherent duality on projective Cohen–Macaulay schemes

Run `frontier-38-owner-30`, role beta, label batch-28, pages
`coherent-duality-on-projective-cohen-macaulay-schemes` (A, order 903) and
`coherent-duality-on-projective-cohen-macaulay-schemes-examples` (B, order 904).
This record covers construction only; it is not an independent mathematical
review or a gate receipt.

## Scope and plan reconciliation

- The binding owner direction `research/frontier-38-owner-30-owner-authoring-direction.md`
  was read first. Its 903/904 bullet requires closing every missing duality
  prerequisite locally, preserving the full contracts, exact base categories
  and source obligations. A has 11 items and B has 3, both far below the
  100-item cap.
- The generated task cites `research/plan-algebraic-geometry-expansion-track.md`
  L45, but that line is only the page-id registration. The substantive design
  row is **AG-DUAL-1** in the “Geometry and scheme-theory extensions” table
  (line 254). It promises `def-dualizing-complex-on-projective-cm-scheme`,
  `thm-serre-duality-for-coherent-sheaves-on-projective-cm-scheme`, the
  smooth-locally-free comparison remark and the dimension-one curve
  comparison remark, with the three B examples, and cites V25 Ch. 29
  (Cor. 29.3.10/29.3.14) and Stacks §48.27 [0FVV–0FW0].
- `research/plan-spec.json` confirms the same page IDs, orders, titles,
  categories, companions and the seven `requires` entries, and extends the
  four design A items to eleven with seven `local_addition: true`
  prerequisite lemmas. That extension is exactly the owner direction's
  authorized local closure, not a conflict: no design claim is dropped or
  weakened, and no selected pair or shared plan was edited.
- No other design-versus-plan conflict was found. The `requires` list is a
  superset of the design's AV-18/19/21/22 plus the published
  `derived-categories` and `ext-and-balanced-resolutions` foundations.

## Inventory and dependency audit

A inventory in prerequisite order (dependency level in parentheses):

1. `def-dualizing-complex-on-projective-cm-scheme` (0) — local definition.
2. `lem-finite-closed-immersion-derived-coinduction-adjunction` (0).
3. `lem-regular-quotient-dualizing-complex-and-biduality` (1).
4. `lem-cm-quotient-of-regular-local-ring-ext-concentration` (1).
5. `lem-projective-embedding-dualizing-complex-existence` (2).
6. `lem-projective-space-derived-coherent-duality` (0).
7. `lem-projective-dualizing-complex-trace-and-embedding-independence` (3).
8. `lem-projective-pure-cm-dualizing-complex-concentration` (4).
9. `thm-serre-duality-for-coherent-sheaves-on-projective-cm-scheme` (5).
10. `rem-smooth-projective-locally-free-duality-is-the-ag-lie-special-case` (6).
11. `rem-curve-residue-duality-is-the-dimension-one-case` (7).

B inventory: `ex-serre-duality-on-a-singular-projective-cm-curve` (6),
`ex-serre-duality-on-a-smooth-projective-surface` (7),
`cex-serre-duality-without-properness` (6); B items are leaves and consume
only A items plus published suppliers.

- Every external dependency in the 14 `deps` arrays was resolved to a
  **published** item on disk (38 distinct published suppliers). The only
  draft prerequisites are the batch's own A items. No dependency points at an
  unbuilt, unselected, Recorded or forward-referenced pair, and no page or
  item outside this batch depends on batch-28 content (the unified ledger
  shows no edge touching 903/904).
- Dependency order was checked against the actual proofs, not page
  membership: the definition precedes both quotient lemmas, the two
  independent lemmas precede the embedding existence, the embedding,
  trace and concentration chain precedes the theorem, and the theorem
  precedes both comparison remarks and all three B items. The graph is
  acyclic; a direct computation over this batch's manifests reproduces
  every `dependency_level` label exactly.
- Proof-step review found and repaired three genuine missing declared
  dependencies, each a named published result used without declaration:
  - `lem-projective-space-derived-coherent-duality`: the five-lemma step over
    long exact sequences now declares
    `thm-long-exact-hom-sequences-of-a-distinguished-triangle` and
    `thm-five-lemma-for-a-morphism-of-long-exact-sequences`.
  - `lem-projective-dualizing-complex-trace-and-embedding-independence`: the
    Yoneda uniqueness step now declares `lem-yoneda-evaluation-bijection`.
  - `lem-finite-closed-immersion-derived-coinduction-adjunction`: the exactness
    of extension by zero and the closed-immersion cohomology/coherence
    comparison now declare `thm-extension-by-zero-adjunction-exactness` and
    `lem-closed-immersion-cohomology-pushforward`.
  - The two B examples that use a flasque point sheaf now declare
    `thm-flasque-sheaves-acyclic`, and the singular-cubic example now declares
    `lem-projective-hypersurface-cohomology-sequence` for the structure
    sequence and its cohomology computation. The hypersurface lemma was
    already the published supplier for the sibling plane-cubic computation
    (`ex-hypersurface-structure-sheaf-cohomology`), so this aligns the pair
    with existing content instead of duplicating it.
- Axiom strength: all proof-bearing A items declare AC and identify its use
  through the injective-resolution, global-dimension, regularity and derived
  product suppliers; B examples inherit AC through the theorem. No
  choice-free claim is made from AC-qualified suppliers, and no Recorded
  (`proved_here: false`) item appears anywhere in the closure.
- One proof passage was tightened for logical completeness without changing
  its claim or dependencies: the concentration lemma's step 2.1 now derives
  `Ext_R^c(B,R) != 0` explicitly from the nonvanishing of
  `R Hom_R(B,R)` (biduality) together with the degree-c concentration, instead
  of asserting it in one compressed clause. That item's readiness record was
  regenerated against the edited bytes, and because the item lies in their
  transitive dependency closure the six downstream records (the theorem, both
  comparison remarks and all three B examples) were regenerated as well; no
  downstream statement or dependency changed.
- Mathematical spot checks against the sources read in full: the definition
  matches Stacks Definition 47.15.1 and the trace normalization of Vakil
  §29.1.5/§29.3.14; the Ext concentration bound `pd_R B = N − d` and the
  regular-sequence shift follow Auslander–Buchsbaum as in Jeffries
  Cor. 4.30/Prop. 4.36; the final theorem is exactly Stacks Lemma 48.27.5(3)–(4)
  and Vakil Cor. 29.3.14. The smooth and curve remarks are comparisons with
  the already published AG-LIE theorem and residue item, not new claims.

## Source record

The coverage file `research/frontier-38-owner-30-batch-28.coverage.json`
records 45 harvested results over two pages with 0 errors. Four source
entries back the A page (Vakil textbook, two Stacks Project entries, Jeffries
lecture notes) and two back the B page; every URL is fetch-stamped
(`source-fetch-check`: 6/6 resolved and fetch-verified).

- **Ravi Vakil, The Rising Sea (2025-10-21 edition)** —
  `https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf`, 852-page
  PDF, SHA-256 `d07177aa0317c13490c170fc6ccc6a2ee07989a9120d9958ed3453eefe5b2784`.
  Chapter 29 (Serre duality), printed pp. 792–812, §§29.1–29.4, was read in
  full, including the named results 29.1.5/29.1.8/29.1.10/29.1.13, §29.2.2,
  Cor. 29.3.10, Prop. 29.3.13, Cor. 29.3.14, Rmk. 29.3.15, Thm. 29.4.3,
  Prop. 29.4.8 and Exercises 29.1.A–29.4.K.
- **The Stacks Project, §48.27** — `https://stacks.math.columbia.edu/tag/0FVV`
  (HTML, 4,635 chars of extracted text), tags 0FVV, 0FVW, 0FVY, 0FVZ, 0FW0.
- **The Stacks Project, Chapter 47 (Dualizing Complexes)** —
  `https://stacks.math.columbia.edu/download/dualizing.pdf` (57-page chapter
  PDF). The stable tag pages 0A7B, 0A70, 08XR, 0AX0, 0A7C, 0A7G, 0A7I were
  cross-checked against the chapter's Section 3 (Lemma 3.4), Section 13
  (Lemma 13.1) and Section 15 (Definition 15.1, Lemmas 15.3, 15.6, 15.8,
  15.9). The 0A7B tag page itself answers with only 1,810 characters of
  extracted text and fails the fetch tool's 2,048-character HTML floor; the
  chapter download was retrieved as the alternate locator after that
  mechanical failure. The six failed tag-page attempts are preserved on the
  source row as `superseded_locator_attempts`, and the chapter PDF passed on
  its first attempt.
- **Jack Jeffries, Local Cohomology** —
  `https://jack-jeffries.github.io/UM/LCnotes.pdf`, 111 pages, SHA-256
  `224a47e31bb65b3d4b3d8b14d4dbf247d255e2c57f342e8089bd69bff1b03471`.
  §4.4, Remark 4.10, Props. 4.29/4.34/4.36/4.40, Cors. 4.30/4.35 and
  Lemma 4.37 (printed pp. 60–70) were read in full as the independent
  local CM/canonical-module treatment.

Every harvested heading has a disposition: 6 `included`, 31 `inline`,
2 `already-published` and 6 `out-of-scope` with specific reasons. The single
coverage warning is the advisory `coverage-low-yield` count (6/39), which
counts only `included` rows; most of this pair's source results are absorbed
`inline` by the local re-proofs, and Step-3 Alpha is the intended reader of
that advisory.

## Checks run and actual results

- `precheck` (14 explicit paths): 11 proof-bearing items checked, 0 failing.
- `rendercheck` (14 explicit paths): all frontmatters and KaTeX spans parse.
- `proof-layout` (14 explicit paths, renderer loader workaround): 14 items,
  25 steps, 0 defects.
- `manifest-deps` and `content-policy --manifest-only` on
  `research/frontier-38-owner-30-batch-28.pages.json`: 14 items, 0 errors,
  0 warnings.
- `coverage-checklist --require-destination`: 2 pages, 45 harvested results,
  0 errors, 1 advisory warning.
- `source-fetch-check` (check and stamp modes): 6/6 sources resolved.
- `depcheck` (whole corpus): 4 errors, all in another batch's items —
  `def-multiplicative-type-coordinate-hopf-algebra` and
  `lem-multiplicative-type-affineness-by-field-descent` reference the
  unresolved `def-group-scheme-over-a-field`. Recorded for the canonical
  ledger and the batch-25/22 owners; not repaired here. No error touches
  batch 28.
- `fwdcheck`: FAIL on the same two 887/888 items (unplanned unresolved link);
  all other findings are the expected recorded-material notices. `extcheck`:
  OK. `validate-plan`: OK; 289 planned pages still carry no item list.
- `drift-review-check --run frontier-38-owner-30`: 30 pages reviewed, 6 spec
  edits applied, no blocked edges.
- `item-dependency-levels.mjs check --run frontier-38-owner-30`: nonzero at
  this snapshot because other batches are still mid-scaffold (empty
  inventories and, at one snapshot, items without labels in the
  heat-kernel batch). No error names a batch-28 item; a direct computation
  over the current manifests reproduces all 14 labels.
- `step1-decisions.mjs check --run frontier-38-owner-30`: all 14 batch-28
  items have current non-owner `ready` records; the run-level result stays
  open only for other batches' unfinished work.
- `frontier-dependency-ledger.mjs refresh --run frontier-38-owner-30`:
  refreshed; the batch-28 input is `[]` because no declared cross-batch edge
  involves 903/904. The unrelated 10↔11, 22↔24, 22↔25, 2↔26 and 2↔27 page
  edges remain unreviewed and belong to those batches.

## Readiness outcome

All 14 items were recorded `ready` with the examined dependency IDs and the
evidence above; no item was escalated. The item files themselves, the
manifest, the coverage record, the empty cross-batch input and the unified
ledger are the only files this batch wrote. Owner/operator reconciliation and
the Step-3 review remain with the run owner; a readiness record is not
independent mathematical approval.
