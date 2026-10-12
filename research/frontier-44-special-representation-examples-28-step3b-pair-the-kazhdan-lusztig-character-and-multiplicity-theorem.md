# Step 3b — pair `the-kazhdan-lusztig-character-and-multiplicity-theorem` / `…-examples`

- Run: `frontier-44-special-representation-examples-28`
- Role/label: alpha-high / `step3b-pair-the-kazhdan-lusztig-character-and-multiplicity-theorem-2c3def1572bb8a95`
- Batch: 14 (A page `the-kazhdan-lusztig-character-and-multiplicity-theorem`, order
  1784, 7 items; B page `the-kazhdan-lusztig-character-and-multiplicity-theorem-examples`,
  order 1785, 4 items; both draft, authored in this dispatch)
- Date: 2026-10-10

## Owned IDs (11 items, 7 A + 4 B)

A page: `def-regular-integral-dot-orbit-labelling-convention`,
`lem-projective-verma-multiplicities-equal-soergel-standard-ranks`,
`thm-projective-verma-multiplicities-are-kazhdan-lusztig-values-at-one`,
`thm-simple-verma-composition-multiplicities-are-kazhdan-lusztig-values`,
`thm-the-kazhdan-lusztig-character-formula-in-regular-integral-category-o`,
`prop-translation-identifies-regular-integral-blocks`,
`rem-the-full-ext-version-requires-the-koszul-grading-of-category-o`.

B page: `cex-soergel-character-grading-alone-does-not-prove-category-o-koszulity`,
`ex-the-kl-multiplicity-matrix-for-the-sl-three-principal-block`,
`ex-inverting-kl-multiplicities-to-obtain-simple-characters`,
`ex-translation-between-two-regular-integral-blocks`.

## Inputs read

`CLAUDE.md`, `SCHEMA.md`, `AGENTS.md`; the current Step-3b dispatch (including
the level-ordered authoring list); `research/plan-kazhdan-lusztig-track.md`
§KL-4 and `research/plan-spec.json` (both pages, orders 1784/1785, category
`special-topics-in-representation-theory`, `requires`
`projective-functors-and-the-soergel-functor-in-category-o`,
`weyl-character-and-multiplicity-formulas`); the batch-14 manifest, Step-1
notes, coverage and cross-batch input; the Step-3a scope review
(`sufficient`, scope hash `83a7efa1…`); the owner authoring direction of
2026-10-08 with the Category-O prerequisite/order decision and the
regular-block-transport and inverse-KL correction; the owner proof note
`…-owner-category-o-batch14-transport-proof.md` and the batch-14 weighted
inverse witness; and the two current-step sibling scaffolds this pair consumes
(batch 13 `projective-functors-and-the-soergel-functor-in-category-o`, batch 12
`soergel-intersection-forms-and-hodge-theory`) together with every published
supplier on disk that is cited by the 11 items (statements read in full,
including `thm-bgg-reciprocity`, `def-verma-flag-and-its-multiplicities`,
`def-inverse-kazhdan-lusztig-polynomials`,
`thm-kazhdan-lusztig-inversion-formula`,
`def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization`,
`thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis`,
`def-normalized-type-a-hecke-algebra-and-its-bar-involution`,
`lem-the-hecke-bar-involution-is-well-defined`,
`thm-kazhdan-lusztig-polynomial-recursion`, `def-bruhat-interval-and-r-polynomials`,
`lem-bruhat-order-basic-properties-for-permutations`,
`prop-the-grothendieck-group-of-o-has-simple-and-standard-bases`,
`def-grothendieck-group-and-character-of-category-o`,
`def-type-a-standard-graph-bimodules-support-filtrations-and-character`,
`thm-split-grothendieck-group-of-the-soergel-category-is-the-type-a-hecke-algebra`,
`lem-dominant-norm-distance-comparison`,
`lem-weight-norm-bound-for-finite-dimensional-simple-modules`,
`lem-tensoring-with-a-finite-dimensional-module-preserves-verma-flags`,
`thm-verma-homomorphism-spaces-have-dimension-at-most-one`,
`thm-category-o-has-enough-projectives`,
`thm-projectives-in-category-o-have-verma-flags`,
`thm-category-o-is-abelian-and-extension-closed`,
`thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights`,
`cor-central-characters-are-dot-weyl-orbits`,
`def-translation-functor-between-o-blocks`,
`prop-translation-functors-are-exact-and-biadjoint-across-a-wall`,
`def-verma-module`, `thm-pbw-model-of-a-verma-module`,
`cor-antidominant-verma-modules-are-simple`,
`lem-maximal-verma-is-projective-in-a-finite-truncation`,
`lem-jordan-holder-factors-of-verma-modules-lie-above-the-head`,
`lem-dominant-integral-dot-translates-embed-in-the-verma-module`,
`thm-weyl-character-formula`, `cor-bgg-euler-character-identity`,
`prop-projective-covers-in-o-are-indecomposable-and-unique`,
`lem-finite-length-objects-decompose-into-indecomposables`, `def-axiom-of-choice`).
The authoring order was the dispatch order (levels 13,14,15,16,16,17,17,18,18,18,19).

## Scaffold audit

The Step-1 scaffolds were audited item by item against their exact suppliers
before authoring. Results:

- Hypotheses, sources and proof routes are authoring-ready. Every scaffold
  statement is retained verbatim in the item (the scope hash is unchanged); no
  approved claim was narrowed.
- The owner corrections of 2026-10-08/09 are realised: the categorical
  transport with the actual tensor/projection functors and unit–counit proof
  (`prop-translation-identifies-regular-integral-blocks`), the weighted
  incidence-algebra inverse with row support `x ≥ w` and the S₄ endpoint value
  −2 (`thm-the-kazhdan-lusztig-character-formula-in-regular-integral-category-o`,
  `cex-soergel-character-grading-alone-does-not-prove-category-o-koszulity`),
  and the sl₂ example constructing `F = pr_{χ₁}(L(1)⊗−)incl_{χ₀}` and its dual
  inverse (`ex-translation-between-two-regular-integral-blocks`).
- Repair made while authoring (all local, published suppliers only): seven
  dependencies actually cited by the completed proofs but absent from the
  scaffold rows were added to both item frontmatter and the batch-14 manifest:
  `thm-the-kazhdan-lusztig-character-formula-in-regular-integral-category-o` +
  `thm-kazhdan-lusztig-polynomial-recursion` (S₄ weighted-inverse witness, proof
  step 1.3); `prop-translation-identifies-regular-integral-blocks` +
  `def-verma-flag-and-its-multiplicities` (flag induction, proof step 4.1);
  `ex-the-kl-multiplicity-matrix-for-the-sl-three-principal-block` +
  `def-normalized-type-a-hecke-algebra-and-its-bar-involution` and
  `lem-the-hecke-bar-involution-is-well-defined` (H_v(3) computation, proof step
  1.2); `ex-inverting-kl-multiplicities-to-obtain-simple-characters` +
  `cor-bgg-euler-character-identity` and `thm-weyl-character-formula` (Euler
  check, proof step 3.1); `ex-translation-between-two-regular-integral-blocks` +
  `thm-category-o-has-enough-projectives` and
  `lem-jordan-holder-factors-of-verma-modules-lie-above-the-head` (cover
  uniqueness and composition factors, proof steps 3.1 and 5.1). All seven are
  published, out-of-run items, so no dependency level changed; the added items
  also carry their AC assumptions, which are declared in each consumer.
- No new item was created; the scaffold inventory is exactly the 11 owned IDs.

## Authoring summary (per item, in dispatch order)

All 11 items are fully authored with the scaffold's conventions, sources and
claims. Source locators: Soergel 1990 MPIM preprint; Lin Chen Lectures 8–9;
Björner–Brenti, *Combinatorics of Coxeter Groups*, author-hosted complete PDF
(exact locators carried in each item's frontmatter).

1. `def-regular-integral-dot-orbit-labelling-convention` (definition, 13):
   freezes clauses (i)–(iv) — multiplicities and BGG reciprocity, the two exact
   Bruhat/dominance directions used, the Hecke normalization
   `p_{y,w} = v^{ℓ(w)−ℓ(y)}P_{y,w}(v^{-2})` with simultaneous inversion, and the
   inverse-label Soergel dictionary with `V(P(w·λ)) = bar B_{w^{-1}}`. Choice-free.
   Sources: Soergel §§1.1–1.2; Chen Lecture 8 §§1–2.
2. `lem-projective-verma-multiplicities-equal-soergel-standard-ranks` (lemma, 14):
   applies the batch-13 rank comparison to `P(w·λ)` after proving the
   indecomposable decomposition has the single summand `P(w·λ)` (Krull–Schmidt
   uniqueness); pre-reduction ranks stressed. AC declared (inherited).
   Sources: Soergel §§1.1–1.2, 2.5; Chen Lecture 8 §4.
3. `thm-projective-verma-multiplicities-are-kazhdan-lusztig-values-at-one`
   (theorem, 15): reads `ch(B_{w^{-1}}) = underline H_{w^{-1}}` degree by
   degree through the split-Grothendieck/Hecke isomorphism, evaluates at
   `v = 1`, and uses `p_{y^{-1},w^{-1}} = p_{y,w}` for the label reversal; only
   the total value at one is claimed. Sources: Soergel §2.6 Lemma 10(i);
   Chen Lecture 8 §1 (Conjecture 1.15, Remark 1.16).
4. `thm-simple-verma-composition-multiplicities-are-kazhdan-lusztig-values`
   (theorem, 16): BGG reciprocity converts the projective multiplicities into
   composition multiplicities term by term. Sources: Chen Lecture 9 §2; Chen
   Lecture 8 §1.
5. `cex-soergel-character-grading-alone-does-not-prove-category-o-koszulity`
   (counterexample, 16): the ten-element interval `[1324,3412]` in S₄, the two
   descent recursions with empty correction sums, `P_{1324,3412} = 1+q`, leading
   coefficient 1 versus multiplicity `P(1) = 2`, plus the grading-scope clause.
   Sources: Björner–Brenti §5.1 p. 135, Exercise 7(a) p. 163.
6. `thm-the-kazhdan-lusztig-character-formula-in-regular-integral-category-o`
   (theorem, 17): unitriangular inversion of `A = P(1)` using `Q' = P^{-1}` from
   the chain definition, the signed normalization, the Möbius specialization on
   all-ones intervals (forward), and the S₄ witness `(Z+E)^{-1} = Z^{-1}−E` with
   endpoint −2 versus Möbius −1 (failure of the converse). Sources: Chen
   Lecture 8 §§1–2; Björner–Brenti §5.1 and the S₃/S₄ passages.
7. `ex-the-kl-multiplicity-matrix-for-the-sl-three-principal-block` (example, 17):
   the dot orbit of sl₃ at λ = 0; the six Kazhdan–Lusztig basis elements of
   `H_v(3)` built from `X = H_{213}`, `Y = H_{132}`, `α = v−v^{-1}` by the
   triangular bar-fixed construction; all 19 comparable pairs have `P = 1`; the
   multiplicity matrix is the zeta matrix and BGG gives the same flag matrix.
   Sources: Björner–Brenti pp. 134–135, Exercise 7(a); Chen Lecture 8 Example 1.13.
8. `prop-translation-identifies-regular-integral-blocks` (proposition, 18): the
   actual functors `F = pr_{χ_μ}(E⊗−)incl_{χ_λ}`, `G = pr_{χ_λ}(E*⊗−)incl_{χ_μ}`
   with `ν` dominant in `W(μ−λ)`; exactness/biadjunction; the norm-distance and
   weight-bound computation identifying `FΔ(y·λ) ≅ Δ(y·μ)` and dually
   `GΔ(y·μ) ≅ Δ(y·λ)`; unit/counit isomorphisms on standards via the
   dimension-one Hom theorem; extension to Verma-filtered objects by the five
   lemma and to all objects by finite projective presentations; labelled
   transport of simples, covers, multiplicities and the inverse-KL identity,
   with the weight-series caveat and no graded/Ext claim. Sources: Soergel §2.5
   Theorem 11; Chen Lecture 9 §3.
9. `rem-the-full-ext-version-requires-the-koszul-grading-of-category-o`
   (remark, 18): the scope warning that only the q=1 statements are proved and
   the graded/Koszul refinement is reserved for the separate frontier. Sources:
   Soergel §1.1 Remark 2 and the Introduction Remark 1 to Theorem 4.
10. `ex-inverting-kl-multiplicities-to-obtain-simple-characters` (example, 18):
    the displayed integer inverse matrix, both products `AB = BA = I` computed
    row by row, the six character formulas, and the row-123 Euler-characteristic
    check against `cor-bgg-euler-character-identity` and
    `thm-weyl-character-formula` (`ch L(0) = 1`). Sources: Björner–Brenti
    pp. 134–135; Chen Lecture 8 §1.
11. `ex-translation-between-two-regular-integral-blocks` (example, 19): the
    sl₂ PBW computation (sl₂ action, `W ≅ M(−n−2) = L(−n−2)`, `M(n)/W ≅ L(n)`,
    `M(n)` indecomposable), `Δ(n)` projective cover, the nonsplit two-step
    `0 → Δ(n) → P(−n−2) → Δ(−n−2) → 0`, the n = 0,1 matrices, the telescoping to
    the Weyl character, and the explicit transport of the principal-block
    sequence to `0 → M_{−3} → M_1 → L_1 → 0`. Sources: Chen Lecture 9 Example 3.16
    and Example 3.11.

Pages authored: `library/special-topics-in-representation-theory/the-kazhdan-lusztig-character-and-multiplicity-theorem.md`
and `…-examples.md`, both draft, with the A page listing the 7 A items and the
B page the 4 examples; page summaries written for the pair; no other pair's
page, manifest row, coverage row or ledger row was edited.

## Unfinished in-run suppliers (exact IDs and consuming steps)

At authoring and record time the following in-run suppliers were not yet
authored; each consumer is authored anyway, in full, and its decision is left
`escalate` until the supplier and the proof use are reconciled.

1. `prop-verma-flag-multiplicities-are-standard-filtration-ranks-under-v`
   (batch 13 `projective-functors-and-the-soergel-functor-in-category-o`) —
   consumed by `def-regular-integral-dot-orbit-labelling-convention` clause (iv)
   and by `lem-projective-verma-multiplicities-equal-soergel-standard-ranks`
   Fact [F3] / proof step 2.1 (the general rank comparison), and in the page
   requirement.
2. `thm-indecomposable-projectives-correspond-to-indecomposable-soergel-modules`
   (batch 13) — consumed by `def-regular-integral-dot-orbit-labelling-convention`
   clause (iv), by `lem-projective-verma-multiplicities-equal-soergel-standard-ranks`
   Fact [F2] / steps 1.1–2.1 (the projective dictionary), and by
   `rem-the-full-ext-version-requires-the-koszul-grading-of-category-o`
   (ungraded-reduction clause).
3. `thm-soergels-character-conjecture` (batch 12
   `soergel-intersection-forms-and-hodge-theory`) — consumed by
   `thm-projective-verma-multiplicities-are-kazhdan-lusztig-values-at-one`
   Fact [F2] / proof step 1.2 (`ch(B_w) = underline H_w`, read degree by degree).
4. `def-regular-integral-category-o-block-and-its-antidominant-weight` (batch
   13) was authored during this dispatch; its current text was read and matches
   the block conventions consumed by item 1 (clauses (i)–(iv)) and by the sl₂
   example; the edge is recorded open in the cross-batch input until the batch
   -13 decision is current.

Consequences recorded honestly: with these three files absent, `depcheck`
reports exactly the six `link-unresolved`/`dep-unresolved` entries and
`fwdcheck` the six `link-unplanned` entries listed in the Checks section, and
the batch-14 proof contract carries exactly three uncontracted citations (A2
[F2] → batch-13 theorem, A2 [F3] → batch-13 proposition, A3 [F2] → batch-12
theorem). All three clear mechanically once the suppliers are authored
(`regen-contract-entries` is re-run then) and spliced into the plan.

## Checks actually run (with results)

All commands were run from the repo root on the final bytes of this dispatch.

- `node tools/rendercheck.mjs <11 items>` → OK, 11 files; `<2 pages>` → OK, 2
  files; `node tools/tsx-run.mjs tools/precheck.mts <11 items>` → 9 checked
  (7 proofs plus 2 examples; definitions/remarks correctly report
  not-applicable), 0 failing; `node tools/proof-layout.mjs <11 items>` → 11
  items, 48 steps, 0 defects (single batched run after the final edits).
- `node tools/prosecheck.mjs <11 items + 2 pages>` → 13 files checked, 0 errors,
  0 warnings.
- `node tools/content-policy.mjs research/…-batch-14.pages.json` (item mode) →
  11 scoped items, 0 errors, 0 warnings. (`--manifest-only` run-wide now reports
  `batch-item-already-exists` for authored unspliced items, mine included; that
  scaffold-mode check is not one of the 3b gates and clears at the Step-4
  splice.)
- `node tools/manifest-deps.mjs research/…-batch-*.pages.json` → 861 items,
  0 errors. `node tools/item-dependency-levels.mjs check --run …` → 861 items
  across 100 pages, 0 errors; the 11 owned labels equal the computed levels and
  the maximum in-run level is 47.
- `node tools/depcheck.mjs --items-file <11 ids>` → exactly 6 failures, all of
  them the three unauthored in-run suppliers above (dep-unresolved +
  link-unresolved each); every published link resolves. `fwdcheck --quiet
  --items-file` → the same 6 `link-unplanned` entries and nothing else.
  `extcheck --items-file` → 11 items, 0 recorded-not-proved, 0 external
  references. `depsource --run … --items-file` → selected consumer coverage
  11/11, 0 unresolved.
- `node tools/coverage-checklist.mjs research/…-batch-14.coverage.json
  --require-destination` → 2 pages, 54 harvested results, 0 errors, 1 advisory
  (`coverage-low-yield`, 13/42 A-page results scaffolded — explained by the
  Step-1 declines to published/already-ready carriers; unchanged).
  `node tools/source-fetch-check.mjs --coverage …-batch-14.coverage.json` →
  6/6 sources resolved and 6/6 fetch-verified (the Step-1 stamps remain valid).
- `node tools/tsx-run.mjs tools/frontier-item-gate.mjs --run … --tool
  validate-plan` → my pair validates (orders 1784/1785, acyclic, requires
  closure, no forward or B-page edges); the run-wide command exits FAIL solely
  on another batch's `b-leaf`/`undeclared-prereq` error on
  `kashiwara-operators-and-crystal-lattices`, plus warnings. The only warning
  touching my pair is the inherited `redundant-prereq` on
  `weyl-character-and-multiplicity-formulas`, exactly as recorded at Step 3a.
- Proof-contract battery on
  `research/…-batch-14.proof-contracts.json` (scope: the 11 owned items, 88
  boundary rows): `proof-contract --strict` → 11/11 items checked, 3 errors —
  exactly the three uncontracted in-run supplier citations above; everything
  else (step inputs, citation uses, boundary worksheets) clean. `finite-smoke`
  → 0 errors (0 obligations declared; no registry check matches these items).
  `risk-report` → 0 errors, 11 items routed with transparency scores (highest:
  the sl₂ example). `boundary-audit --fail-on-contradicted --fail-on-template`
  → exit 0, 88 rows, 0 template clusters, 0 contradicted candidates.
  `citation-fidelity --fail-on-missing-quote` → exit 0, every recorded quote
  occurs in its cited item, no widening candidates.
- `node tools/frontier-dependency-ledger.mjs refresh --run …` → refreshed and
  deduplicated; the batch-14 input now records the exact consumer use of all 8
  cross-batch edges.
- `node tools/step3-decisions.mjs record-item` was run for all 11 items
  (`escalate` with defect type `dependency` for items 1–3 and 9 above,
  `repaired` with `["dependency"]` for the five dependency-addition items,
  `accept` with `[]` for `thm-simple-verma-composition-multiplicities-are-kazhdan-lusztig-values`
  and `cex-soergel-character-grading-alone-does-not-prove-category-o-koszulity`).
  Because sibling writers were authoring batch-12/batch-13 items concurrently,
  receipts became stale within minutes of recording (the item hash closes over
  the suppliers' manifest rows and item files, both of which were being written
  while this dispatch ran); the seven non-escalated receipts were re-recorded
  as the last write of the dispatch, and a further fresh pass will still be
  required once batch 12/13 writers drain. The four escalations are owner-held
  by construction and cannot be re-recorded by this role.
- `node tools/manifest-integrity.mjs --run …` → 100 pages owed, 100 in the
  manifests, no scope drift. `node tools/scope-decisions.mjs check --run …` →
  run-wide 451 current declines with 464 missing/unset decisions; exactly two
  of them belong to this page (the Chen Remark 1.14 pointer to the
  Elias–Makisumi–Thiel–Williamson book, destination an unheld book, and the
  Björner–Brenti nonrecursive Theorem 5.5.2 chain formula). Both declines were
  rechecked while authoring and stand: no authored item uses the nonrecursive
  formula (the S₃/S₄ computations use the descent recursion), and the Remark
  1.14 pointer is bibliographic. The group-`k` decision file (batches 12–14)
  has not been created, so this is group-level scope bookkeeping for the
  stage gate, not a content gap in this pair.

## Published concerns

None confirmed. Two advisories are inherited, not defects: the
`coverage-low-yield` warning on the Step-1 coverage (its declines are recorded
with reasons), and the `redundant-prereq` warning on the page's `requires`
(`weyl-character-and-multiplicity-formulas` is reachable through
`projective-functors-and-the-soergel-functor-in-category-o`); both were
already recorded at Step 3a and are owner-level scope questions, not
mathematical defects. Two normalizations of the Hecke algebra are in play on
different published pages (`H_{s_i} = vT_i` in the KL page,
`H_i = v(T_i+1)` in the Soergel page); the two quadratic relations
(`H² = 1+(v^{-1}−v)H` and `H² = (v+v^{-1})H`) were checked against each other
and are mutually consistent, so no concern is raised.

## Open obligations at handoff

1. The three unfinished in-run suppliers above: author them (their owners),
   then re-run `regen-contract-entries.mjs` on the batch-14 contract and
   re-record the four escalated item decisions; until then the batch-14
   `depcheck`/`fwdcheck` and `proof-contract --strict` failures are exactly
   these entries.
2. `gate-liveness` on the merged battery currently marks `finite-smoke` vacuous
   for the run (no contract in scope defines a registry check these items
   match) and cannot parse the frontier-wide `precheck` while unauthored items
   are in scope; both are run-level properties that clear as the remaining
   pairs author.
3. Run-wide gates whose scope includes the other 49 pairs clear only when all
   pairs complete; the batch-14 artifacts are complete and pass in isolation,
   as recorded above.

## Step-4 notes

No shared plan or prose amendment is requested. The batch-14 manifest was
edited only inside this pair's five rows (the dependency additions listed
above); page ids, titles, orders, `requires`, companion pointers and all
sibling rows are untouched, and `validate-plan`'s only my-pair warning is the
inherited advisory. Added dependencies are published and create no new
cross-batch edge; the cross-batch input keeps the same 8 rows with refreshed
use evidence.

## Checkpoint log (per item)

Items 1–11 above were authored in the listed order; each passed
`rendercheck` + `precheck` at authoring time, and the batched
`proof-layout`/`precheck`/`rendercheck` runs after the final edit are recorded
in the Checks section. Decisions: escalate — items 1, 2, 3, 9; repaired
(`dependency`) — items 6, 8, 10, 11; accept — items 4, 7 (numbering as in the
Authoring summary). Source locators, conventions and open gaps are recorded
per item in the Authoring summary and in the Unfinished-suppliers section.
Next action at handoff: the supplier/contract reconciliation in Open
obligation 1.

Final write of the dispatch: the batched `precheck` (9 checked, 0 failing),
`proof-layout` (11 items, 48 steps, 0 defects), `rendercheck` (13 files OK) and
`prosecheck` (13 files, 0/0) were re-run on the frozen final bytes, the batch-14
proof contract was re-validated (`--strict`: only the three supplier-blocked
citations; `boundary-audit` and `citation-fidelity` exit 0), the cross-batch
input and ledger were refreshed, and the seven non-escalated item receipts were
re-recorded as the last repository write. The three missing supplier files were
checked again immediately before that write and are still absent, so the four
owner-held escalations remain the only open item-level rows of this pair.
