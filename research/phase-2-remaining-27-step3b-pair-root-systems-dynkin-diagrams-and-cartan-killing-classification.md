# Step 3b — scaffold audit, repair and authoring: `root-systems-dynkin-diagrams-and-cartan-killing-classification`

Run `phase-2-remaining-27`, batch 11, pair DG-31 (A page
`root-systems-dynkin-diagrams-and-cartan-killing-classification`, 50 items;
B page `root-systems-dynkin-diagrams-and-cartan-killing-classification-examples`,
12 items). The sibling DG-30 pair in the shared batch files
(`research/phase-2-remaining-27-batch-11.pages.json`,
`…coverage.json`, `…proof-contracts.json`) was preserved: its 45 + 11 items,
their dependency rows, coverage rows and proof contracts are byte-unchanged
apart from the manifest JSON re-serialisation forced by synchronising the
DG-31 rows, and the DG-30 dispatch report and receipts were not touched.

## Outcome

All 62 scaffolded items of the pair are authored as draft items with complete
proofs or verifications, and the two A/B pages are written:

| Class | Count | IDs |
|---|---|---|
| A items (scaffolded) | 50 | items 1–50 of the manifest order, including the three owner-added classical items 39–41 |
| B items | 12 | the design's B inventory verbatim |

No item was added, dropped or renamed; every original ID and promised claim is
retained, including the owner-amended classical block
(`def-classical-complex-matrix-lie-algebras`,
`prop-classical-matrix-lie-algebras-have-split-cartan-subalgebras`,
`prop-root-systems-of-the-classical-complex-lie-algebras`). The only
statements expanded beyond the scaffold summaries are the file-level
Statements, which state the same claims with their hypotheses and conventions
made explicit; the manifest statements (the scope hash) were left untouched.

## Repairs made to the scaffold (all documented, none silent)

1. **Dependency arrays refreshed to the suppliers actually used.** 40 of the
   62 items had their `deps` extended with the items their completed proofs
   actually cite (`def-reduced-crystallographic-euclidean-root-system`,
   `def-coroot-and-dual-root-system`, `def-weyl-group-of-a-root-system`,
   `def-positive-system-and-base-of-simple-roots`,
   `def-cartan-matrix-of-a-based-root-system`,
   `thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates`,
   `thm-rank-two-root-system-classification`,
   `prop-distinct-simple-roots-have-nonpositive-inner-product`,
   `def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention`,
   `thm-existence-of-each-classified-root-system`, …). The manifest rows were
   synchronised with the item files, and `manifest-deps` reports 118 items
   with 0 errors. No forward edge was introduced: every added dependency
   precedes its consumer in the manifest order.
2. **Axiom-base marks corrected to the actual contracts.** The closure of
   `def-axiom-of-choice` computed from the authored dependency graph is now
   `ZFC` exactly for: `thm-serre-presentation-theorem`,
   `thm-isomorphism-theorem-for-complex-semisimple-lie-algebras`,
   `thm-existence-theorem-for-complex-semisimple-lie-algebras`,
   `thm-cartan-killing-classification-of-complex-simple-lie-algebras`,
   `cor-complex-semisimple-lie-algebras-are-classified-by-finite-disjoint-unions-of-dynkin-diagrams`,
   `prop-classical-types-correspond-to-sl-so-and-sp`,
   `prop-dimensions-of-the-exceptional-simple-lie-algebras`,
   `rem-dynkin-diagrams-do-not-classify-global-lie-groups` and
   `ex-serre-relations-for-a-two-recover-sl-three`; every other item is `ZF`,
   with the single exception of
   `fs-two-connected-lie-groups-with-the-same-dynkin-diagram-are-isomorphic`,
   which is `ZF + AC_omega` inherited from its published covering-group
   supplier. Definitions 39 and 40, which the scaffold had marked `ZFC`, are
   choice-free as authored and are now `ZF`; item 41 genuinely consumes the
   AC-conditional root-space suppliers and states the assumption; and the two
   false statements 49–50 and the B-page global-group counterexample were made
   choice-free by dropping the unused orientation remark from their
   dependencies, so that their witnesses are the explicit matrix and
   fundamental-group computations recorded in them. Every `ZFC` item states
   “Assume the Axiom of Choice” (the remark declares its inherited assumption
   in its prose) and identifies the exact use in its facts, and every receipt
   and contract reflects the current arrays.
3. **Existence theorem completed.** `thm-existence-of-each-classified-root-system`
   now carries the full constructions and verifications inside its proof:
   the coordinate models $A_n,B_n,C_n,D_n$, the twelve-root $G_2$ model with
   its reflection tables, $F_4$ with the three case checks of Knapp
   Proposition 2.87, $E_8$ with the half-sum and same-length checks, and
   $E_7,E_6$ as orthogonal sections of the $E_8$ lattice with their simple
   roots and Cartan matrices. This closes the Step-3a review's Omission 2.
4. **Classical block completed.** `def-classical-complex-matrix-lie-algebras`
   now also defines $\mathfrak{gl}_n$ and $\mathfrak{sl}_n$ (the Step-3a
   review's Omission 1 remedy, matching the owner's “sl/so/sp” wording), with
   the block forms, dimensions and bracket-closure computation;
   `prop-root-systems-of-the-classical-complex-lie-algebras` computes the root
   spaces from matrix units, proves one-dimensionality and completeness, and
   verifies the four root sets as reduced crystallographic systems;
   `prop-classical-types-correspond-to-sl-so-and-sp` identifies the types
   using the isomorphism theorem and records the low-rank coincidences.
5. **Source locators tightened.** The remark and the two global-group false
   statements (`rem-dynkin-diagrams-do-not-classify-global-lie-groups`,
   `fs-dynkin-diagrams-classify-all-real-semisimple-lie-algebras`,
   `fs-two-connected-lie-groups-with-the-same-dynkin-diagram-are-isomorphic`)
   no longer carry the Milne “relevant sections” placeholder; they now cite
   Knapp Chapter II §11 and the Etingof lecture notes with printed locators,
   and the two refutations use explicit witnesses
   ($\mathfrak{sl}_2(\mathbb R)$ versus $\mathfrak{su}(2)$; $\mathrm{SU}(2)$
   versus $\mathrm{SO}(3)$) rather than a citation.
6. **Mirror cases stated, not waved through.** The rank-two classification
   and its B-page examples treat both orientations $(-2,-1)$ and $(-1,-2)$
   explicitly, and $B_2\cong C_2$ is witnessed by the explicit
   rotate-by-$45^{\circ}$-and-rescale map.

## Axiom-of-choice bookkeeping

* `def-axiom-of-choice` appears in the dependency arrays exactly for the items
  whose authored proofs consume the AC-conditional DG-30 root theory:
  `thm-serre-presentation-theorem`,
  `thm-isomorphism-theorem-for-complex-semisimple-lie-algebras`,
  `thm-existence-theorem-for-complex-semisimple-lie-algebras`,
  `thm-cartan-killing-classification-of-complex-simple-lie-algebras`,
  `cor-complex-semisimple-lie-algebras-are-classified-by-finite-disjoint-unions-of-dynkin-diagrams`,
  `prop-classical-types-correspond-to-sl-so-and-sp`,
  `prop-dimensions-of-the-exceptional-simple-lie-algebras`,
  `fs-dynkin-diagrams-classify-all-real-semisimple-lie-algebras`.
  Each such item states “Assume the Axiom of Choice” in its Statement and
  records the exact use in its facts (`[A1]`), which every contract cites.
* `fs-two-connected-lie-groups…` states countable choice, declares
  `def-countable-choice`, and identifies the inherited use in the published
  SU(2)/SO(3) example.
* Everything else is choice-free: the abstract root-system theory, the
  rank-two classification, the lattice and chamber theory, the Dynkin
  classification, the explicit existence of each root system, the free Lie
  algebra and the Serre algebra definition, and the classical matrix
  computations (items 39–41). No item that declares ZF depends on an item
  that carries AC.

## Published-item concerns for the canonical ledger

None of these was used as a proof supplier on this page; they are reported for
the serial reconciler, with evidence.

1. The defects already recorded in the DG-30 dispatch report and in
   `research/published-consumer-supplier-ledger.md` —
   `thm-additive-jordan-chevalley-decomposition` (AC in the statement, no
   `def-axiom-of-choice` in its published `deps`),
   `thm-root-space-decomposition-relative-to-a-cartan-subalgebra`,
   `thm-cartan-subalgebras-are-conjugate-in-a-complex-semisimple-lie-algebra`,
   `lem-regular-elements-form-a-connected-dense-open-subset`,
   `lem-regular-semisimple-elements-form-a-dense-open-subset`,
   `thm-the-root-set-is-a-reduced-crystallographic-root-system` — are relied
   upon here only through their DG-30 replacements
   (`thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra`,
   `thm-cartan-subalgebras-of-a-complex-semisimple-lie-algebra-are-conjugate`,
   the DG-30 regular-element corollary,
   `thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system`).
   This page's items cite none of the defective published IDs directly
   (verified by explicit grep over the 62 item files).
2. **Potential overlap (suspicion, not a confirmed defect):**
   `thm-cauchy-schwarz-in-an-inner-product-space` (draft, run
   `phase-2-remaining-27` or later) and the published
   `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces` state the
   same inequality with the same equality clause. This page cites only the
   published one. If the duplicate is realised, the two should be merged with
   an alias; confidence high, no consumer impact.
3. **Scope observation for the owner:** the design's remark that “global
   classification also requires isogeny or lattice data” is realised here as
   the remark `rem-dynkin-diagrams-do-not-classify-global-lie-groups` and the
   false statement `fs-two-connected-lie-groups…`; the constructive global
   theory belongs to DG-33 and is not claimed here.

## Checks actually run (all on this pair's files)

| Check | Command | Result |
|---|---|---|
| Proof format, explicit paths | `node tools/tsx-run.mjs tools/precheck.mts <62 item paths>` | 44 proof-bearing items checked, 0 failing |
| Rendering | `node tools/rendercheck.mjs <62 items> <both pages>` | OK — no wikilink in math, no multiline display, KaTeX and YAML parse |
| Content policy | `node tools/content-policy.mjs research/phase-2-remaining-27-batch-11.pages.json` | 118 scoped items, 0 errors, 0 warnings |
| Manifest dependencies | `node tools/manifest-deps.mjs research/phase-2-remaining-27-batch-11.pages.json` | 118 items, 0 errors |
| Plan | `node tools/validate-plan.mjs research/plan-spec.json` | OK, acyclic and consistent, no item-level cycles or B-page dependencies |
| Coverage | `node tools/coverage-checklist.mjs research/phase-2-remaining-27-batch-11.coverage.json --require-destination` | 2 pages, 41 harvested results, 0 errors |
| Sources | `node tools/source-fetch-check.mjs --coverage research/phase-2-remaining-27-batch-11.coverage.json` | 4/4 fetch-verified, 4/4 resolved |
| Proof contracts (strict) | `node tools/proof-contract.mjs research/phase-2-remaining-27-batch-11.proof-contracts.json --strict` | 0 errors, 0 warnings, 118/118 items checked |
| Dependency graph | `node tools/depcheck.mjs` | no finding involving any of this pair's ids (other agents' in-flight items report their own cycles/errors) |
| Forward and recorded references | `node tools/fwdcheck.mjs`, `node tools/extcheck.mjs` | no finding involving this pair |
| Frontier ledger | `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-remaining-27` | refreshed; the batch-11 input remains `[]` and the unified ledger has no row involving this pair |
| Step-3 decisions | `node tools/step3-decisions.mjs check --run phase-2-remaining-27 --phase final` | 62/62 owned items closed with current receipts; pair scope closed by the owner's amended `proceed` decision (hash `4be25432…`) |

Two authorship cautions observed and reported honestly: the precheck gate
accepts only single-line numbered steps, so every step in the 62 items is one
source line; and the `citation-uses`/`citation-undeclared-dependency` checks
of the strict proof-contract gate forced the dependency synchronisation, the
explicit `[A1]` citations and the removal of two fact links whose suppliers
were not genuinely used (the orientation remark on three global-group items).
After those edits all 62 item receipts were re-recorded against the current
files, so `step3-decisions check --phase final` reports zero pending items for
this pair.

## Decisions and handoff

* Pair scope: unchanged (no statement, ID or inventory change), so the owner's
  amended `proceed` decision remains current; no refreshed scope decision was
  recorded because none was needed and only the owner may replace an owner
  decision.
* Item decisions: 62 receipts recorded with `repaired`, confidence 1, the
  examined dependency IDs and a concrete per-item evidence reason
  (`research/phase-2-remaining-27-step3b-review-<id>.json`).
* No `--owner` flag, judge stamp, audit stamp, published-item edit or
  sibling-pair edit was made anywhere in this dispatch.
* Open obligations: (i) the published-item concerns above for the canonical
  ledger; (ii) the Step-5 readers/refuters should re-examine the two longest
  proofs (`thm-rank-two-root-system-classification`'s case induction and
  `thm-serre-presentation-theorem`'s triangular-decomposition and radical
  argument), which are the pair's highest-risk arguments; (iii) the B-page
  counterexample `cex-same-complex-lie-algebra-with-distinct-global-groups-sl-two-and-pgl-two`
  leans on the published Möbius identification for the Lie algebra of
  $\operatorname{PGL}_2(\mathbb C)$, which is the one place where a later
  global Lie-group page may wish to add a dedicated Lie-algebra statement.

## Checkpoint (end of dispatch)

* Inventory: 62 item files on disk; both page files
  (`library/differential-geometry/root-systems-dynkin-diagrams-and-cartan-killing-classification.md`
  with 50 items and `…-examples.md` with 12 examples/counterexamples); the
  batch manifest (50 + 12 for this pair, DG-30 rows preserved); the coverage
  file (unchanged, 41 harvested results, 0 errors); and the batch
  proof-contract file (118 scoped entries, strict gate green).
* Gates: precheck 44/44 pass; rendercheck OK; content-policy 0/0;
  manifest-deps 0 errors; validate-plan OK; coverage-checklist 0 errors;
  source-fetch-check 4/4; strict proof contract 0 errors 0 warnings;
  depcheck/fwdcheck/extcheck no finding involving this pair; frontier ledger
  refreshed with an empty batch-11 input.
* Decisions: 62 `repaired` item receipts with confidence 1 and examined
  dependency IDs; the pair's scope remains closed by the owner's amended
  `proceed` decision.
* Next action after this dispatch: the engine's 3b gate battery and Step 4
  splicing of this pair's 62 item IDs from the batch manifest into
  `plan-spec.json`; Step 5a then reads the pair on another batch's files. No
  further authoring is owed by this dispatch.
