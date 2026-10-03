# Step 3b authoring report — oriented-links-braid-closures-and-markov-equivalence

- Run `frontier-38-owner-30`, pair `oriented-links-braid-closures-and-markov-equivalence`
  (A, order 749, 33 items) and `oriented-links-braid-closures-and-markov-equivalence-examples`
  (B, order 750, 4 items). Batch 17. Role alpha-high, label
  `step3b-pair-oriented-links-braid-closures-and-markov-equivalence-af93d89963b59d14`.
- Owned IDs and dependency order (ascending level, ties by page then item ID):
  - L0: def-closure-of-a-geometric-braid, def-oriented-link-in-s-three-and-ambient-isotopy,
    lem-a-smooth-isotopy-of-compact-embedded-submanifolds-extends-to-an-ambient-isotopy,
    lem-every-geometric-braid-is-braid-isotopic-to-a-smooth-braid,
    lem-free-homotopy-classes-of-loops-are-conjugacy-classes,
    lem-two-disjoint-circles-in-s-two-cobound-an-annulus
  - L1: def-markov-conjugation-and-stabilization-moves, def-regular-oriented-link-diagram,
    lem-braid-isotopic-closed-braids-are-conjugate, lem-closure-depends-only-on-the-braid-isotopy-class,
    ex-torus-links-as-closures-of-two-strand-braids
  - L2: def-planar-isotopy-of-link-diagrams,
    def-seifert-smoothing-and-seifert-circles-of-an-oriented-link-diagram,
    lem-every-oriented-link-admits-a-regular-projection
  - L3: def-coherence-of-seifert-circles-and-the-height-of-a-diagram, def-oriented-reidemeister-moves,
    lem-a-smooth-isotopy-of-links-can-be-put-in-general-position
  - L4: def-reducing-arc-and-yamada-vogel-reducing-move,
    lem-a-generic-isotopy-of-links-has-only-reidemeister-singular-times,
    lem-braid-like-reidemeister-moves-on-closed-braids-are-braid-isotopies,
    lem-each-oriented-reidemeister-move-is-realized-by-ambient-isotopy
  - L5: lem-a-height-zero-diagram-represents-a-closed-braid,
    lem-a-positive-height-diagram-has-a-defect-region,
    lem-markov-moves-preserve-oriented-closure-isotopy,
    lem-non-braid-like-reidemeister-moves-are-generated-by-braid-like-moves-and-reductions,
    lem-yamada-vogel-reducing-moves-lower-bad-seifert-circle-complexity,
    thm-oriented-reidemeister-equivalence-theorem
  - L6: lem-braid-like-moves-can-be-moved-to-height-zero, thm-alexanders-closed-braid-theorem,
    ex-a-markov-stabilization-preserves-the-unknot-closure
  - L7: def-braid-index-of-an-oriented-link, lem-reducing-move-peaks-can-be-lowered-to-the-four-band-case,
    ex-alexanders-braiding-algorithm-on-a-small-diagram
  - L8: lem-the-four-band-d-pair-case-is-a-markov-sequence
  - L9: lem-reidemeister-moves-between-closed-braid-diagrams-factor-through-markov-moves
  - L10: thm-markovs-closed-braid-equivalence-theorem
  - L11: cex-conjugacy-alone-does-not-classify-braid-closures

## Authoring outcome

All 37 assigned items are authored under `items/` (33 on the A page, 4 on the B
page), the two library pages are written (`library/braid-groups/`), and the batch
manifest (`...-batch-17.pages.json`), coverage, cross-batch input and
`...-batch-17.proof-contracts.json` are registered. No new IDs were created and
no sibling pair's rows were touched. Item decisions recorded with
`step3-decisions.mjs record-item`: **26 accept, 8 repaired, 3 escalate**.

### Repairs made at this step (each with the check that exposed it)

1. **Generation frontmatter (content-policy errors).** Removed the `generation`
   blocks from `ex-torus-links-as-closures-of-two-strand-braids`,
   `ex-a-markov-stabilization-preserves-the-unknot-closure`,
   `ex-alexanders-braiding-algorithm-on-a-small-diagram` and
   `cex-conjugacy-alone-does-not-classify-braid-closures`; `generation` is
   reserved for ai-generated statements (SCHEMA.md, "Provenance"), and these
   statements are literature-derived. `content-policy` went from 4 errors to 0.
2. **`lem-reducing-move-peaks-can-be-lowered-to-the-four-band-case` (repaired).**
   Proof rewritten to follow the survey's textual argument (Birman-Brendle
   Lemmas 2.4-2.7, printed pp. 21-25) instead of asserting the peak reductions
   through mis-cited local items; dependency
   `lem-a-positive-height-diagram-has-a-defect-region` added to the item and the
   manifest for the three-exposed-circle fact used in the once-crossing case.
   The two remaining figure-based locators (the intersection-number-one
   arrangement, printed pp. 21-22, and the four-band classification, printed
   pp. 23-24 with Traczyk Figures 7 and 9) are cited as such.
3. **Declared-dependency repairs (`depcheck` `cited-not-in-deps`).**
   `def-coherence-of-seifert-circles-and-the-height-of-a-diagram` added to
   `lem-braid-like-moves-can-be-moved-to-height-zero`;
   `def-geometric-braid-with-setwise-endpoints` added to
   `lem-closure-depends-only-on-the-braid-isotopy-class`;
   `def-reducing-arc-and-yamada-vogel-reducing-move` and the coherence
   definition added to `thm-alexanders-closed-braid-theorem`. All four were
   cited in the items' Statement/Given and are declared now in both the item
   file and the manifest.
4. **`lem-the-four-band-d-pair-case-is-a-markov-sequence` (escalated).** The
   F-block and proof now cite the source computation exactly (survey Lemma 2.8
   and Remark 2.2, printed pp. 25-26; Traczyk Figures 7-11, printed pp.
   415-419); the manifest strategy was updated to record the open transcription
   obligation instead of the earlier "the source verifies this by figures"
   placeholder. See the escalations below.
5. **Boundary dispositions.** After regenerating the contracts, the 10 rows
   flagged by `boundary-audit --fail-on-contradicted --fail-on-template`
   (empty axis on four definition items; the two iff axes on three
   one-directional items whose Statements contain "are equivalent") were given
   item-specific checked dispositions; the audit now exits 0.

## Checks run (batch-17 scope)

| Check | Result |
| --- | --- |
| `precheck` on the 37 item paths | 27 proof-bearing, 0 failing |
| `rendercheck` on the 37 item paths | 37 files OK (wikilinks, delimiters, KaTeX, YAML) |
| `proof-layout` on the 37 item paths (single batched run, after final edits) | 37 items, 112 steps, 0 defects |
| `content-policy` on batch-17 manifest | 37 items, 0 errors, 0 warnings |
| `proof-contract --strict` | 0 errors, 0 warnings, 37/37 items |
| `boundary-audit --fail-on-contradicted --fail-on-template` | exit 0 |
| `citation-fidelity` | exit 0: every quoted excerpt occurs in its cited item; no widening candidates |
| `finite-smoke` | 0 errors |
| `risk-report` | 0 errors, 37 items routed for Step 5 |
| `manifest-deps` | 37 items, 0 normalized, 0 errors |
| `item-dependency-levels check --run` | exit 0 (816 items, 60 pages; no batch-17 error after the dep additions) |
| `coverage-checklist --require-destination` | 0 errors, 1 explained `coverage-low-yield` warning (16/54, proof-heavy page) |
| `depcheck --quiet` | repo-wide exit 1 from other pairs' in-flight rows; **0 findings on batch-17 items** |
| `fwdcheck --quiet` | repo-wide exit 1 from other pairs; **0 findings on batch-17 items** |
| `extcheck --quiet` | exit 0 |
| `validate-plan research/plan-spec.json` | exit 0 |
| `step3-decisions check --phase scope` | batch-17 pair closed at the current scope hash |

## Added dependencies / suppliers

All additions are intra-pair publishers that existed earlier at lower
dependency levels; no new external supplier was needed and no unbuilt pair is
consumed: `lem-a-positive-height-diagram-has-a-defect-region` ->
`lem-reducing-move-peaks-can-be-lowered-to-the-four-band-case`;
`def-coherence-of-seifert-circles-and-the-height-of-a-diagram` ->
`lem-braid-like-moves-can-be-moved-to-height-zero`;
`def-geometric-braid-with-setwise-endpoints` ->
`lem-closure-depends-only-on-the-braid-isotopy-class`;
`def-reducing-arc-and-yamada-vogel-reducing-move`, `def-coherence...` ->
`thm-alexanders-closed-braid-theorem`. The manifest deps and the item-file deps
agree for all 37 items (verified).

## Published concerns, escalations and open obligations

1. **Erratum, B-page counterexample statement (owner action, Step 3a Obs. 1).**
   The manifest row of `cex-conjugacy-alone-does-not-classify-braid-closures`
   (`research/frontier-38-owner-30-batch-17.pages.json`, item at the
   `dependency_level: 11` row) still reads `sigma_2 in B_3`, whose closure is a
   two-component unlink, so the clause "both the unknot" is false as written.
   The authored item, the manifest strategy and the Step-1 readiness record all
   use the repaired comparison `sigma_1 in B_2` versus `sigma_1 sigma_2 in B_3`
   (three-cycle, one component, closure the unknot). The item is authored with
   the correct comparison; changing the manifest statement would invalidate the
   pair scope hash, so the one-line manifest repair is left to the owner and
   recorded here with evidence. Exact locator: statement of
   `cex-conjugacy-alone-does-not-classify-braid-closures` in batch 17.
2. **Escalated: `lem-the-four-band-d-pair-case-is-a-markov-sequence`.** The
   item's load-bearing content is Traczyk's multiple-reduction computation
   (Figures 7, 8, 10, 11) / survey Lemma 2.8, printed pp. 25-26. The sources
   carry this computation in figures and delegate the details ("the reader is
   referred to [129] for the details of this calculation"); the scaffold
   strategy assigns the figure transcription to the Step 3 author, and this
   author could not reproduce the figure computation textually (no figure
   access; the exchange-move algebra was not settled beyond the source's
   statement). The item now states the source's computation with exact
   locators, and the local proof is citation-only for the comparison step.
   Remedy: owner-directed transcription of Traczyk Figures 7-11, or an
   equivalent verifiable computation, before closure.
3. **Escalated consumer: `lem-reidemeister-moves-between-closed-braid-diagrams-factor-through-markov-moves`.**
   Supplier `lem-the-four-band-d-pair-case-is-a-markov-sequence`; consuming
   step **3.1** (through [F4]). Steps 1.1-2.1 and the height induction are
   verified; keep escalated until the supplier closes and this use is
   reconciled.
4. **Escalated consumer: `thm-markovs-closed-braid-equivalence-theorem`.**
   Supplier chain `lem-reidemeister-moves-between...` (step **1.2**, [F3]) ->
   `lem-the-four-band-...` (step 3.1). The reverse direction (step 1.1) and all
   other steps are verified. Keep escalated until the chain is reconciled.
5. **Step 3a Obs. 2 (terminology) addressed.** The B items read "unknot",
   "(2,m) torus link" and "trefoil" through the closure construction of
   `def-closure-of-a-geometric-braid`; no new items were needed.
6. **Verification of the entry obligations.** (R2/R3 local expansions) written
   out in steps 1.1-1.3 of
   `lem-a-generic-isotopy-of-links-has-only-reidemeister-singular-times`;
   (height-zero nesting induction) written out in steps 1.1-3.1 of
   `lem-a-height-zero-diagram-represents-a-closed-braid`; (planar annulus)
   expanded in steps 2.2-6.1 of
   `lem-two-disjoint-circles-in-s-two-cobound-an-annulus` with AC declared and
   used only through the published Jordan-Schoenflies/Jordan-Brouwer suppliers.
7. **Repo-wide noise, not batch-17 debt.** `depcheck` and `fwdcheck` exit
   non-zero only on other pairs' in-flight rows (86 fwdcheck errors, several
   `b-leaf-content`/`page-cycle` depcheck errors); zero findings involve any
   batch-17 item.

## Handoff state

34 of 37 items are closed (26 accept, 8 repaired); the decision-closed IDs are
all 37 owned IDs except the three escalated ones named above, and each receipt
is on disk at `research/frontier-38-owner-30-step3b-review-<id>.json` with the
examined dependency list and the current input hash. 3 items are escalated with
the exact supplier/consumer/step flags above, so a full Step-3 close for this
pair is **not** claimed. Both pages, all 37 item files, the manifest, coverage
and the strict proof contracts are on disk and consistent; the Step-3 gates
listed above were run on the current inputs and pass except for the escalated
content itself. Next actions: owner resolves the three escalations (figure
transcription) and the one-line manifest statement erratum (scope refresh); all
other batch-17 work is ready for Steps 4-5.

## Checkpoint log

- Entry: read CLAUDE.md, SCHEMA.md, batch-17 manifest/notes/coverage, Step 3a
  report, owner authoring direction, design BG-11 (L574-611), step3-decisions
  tool semantics, proof-contract schema. All 40 external suppliers exist on
  disk with status published. Scope review `sufficient` at hash 3cc8772f...
  (matches current scope).
- Resumed from the mid-flight checkpoint: fixed the four `generation` blocks,
  rewrote the two Traczyk-dependent items, repaired the four missing declared
  dependencies, patched 10 boundary rows, regenerated the strict contracts,
  ran the full gate battery, and recorded 37 item decisions (26/8/3).
