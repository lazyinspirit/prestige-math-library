# Step 3a scope review — `morse-inequalities-and-the-handle-chain-complex`

- Run `frontier-41-ha-dt-29`; role alpha; label
  `step3a-pair-morse-inequalities-and-the-handle-chain-complex-a3851b44791c1905`
  (a sibling task file `…-f1592513453f3af0` covers the same pair; this is the single
  review artifact for the page).
- A page `morse-inequalities-and-the-handle-chain-complex` (order 535, batch 4,
  differential-topology); B page `morse-inequalities-and-the-handle-chain-complex-examples`
  (order 536, companion). Scope review only; no scaffold, manifest, item or coverage file
  was edited.
- Inputs read: DT-8 prose design `research/plan-differential-topology-track.md` L598–635 and
  role line L37; §12.4 exact `requires` array (row L2226), §12.6 disposition (L2442),
  §12.7 findings 4–5 (L2492, L2501); `research/plan-spec.json` (pages 535/536);
  `research/frontier-41-ha-dt-29-batch-4.pages.json` (19 A + 5 B items),
  `…-batch-4.coverage.json` (74 harvested rows), `…-batch-4.notes.md`,
  `…-batch-4.cross-batch-dependencies.json` (20 open rows);
  `research/frontier-41-ha-dt-29-scope-ledger.json`;
  `research/frontier-41-ha-dt-29-owner-authoring-direction.md`; the batch-1 and batch-3
  scaffold manifests (DT-6, DT-7) and their statements/strategies; the published supplier
  items actually consumed (read in `items/`); downstream consumer manifests (batches 7, 8,
  15, 16); the scope-review precedent for this run
  (`…-step3a-pair-characteristic-numbers-and-cobordism-obstructions.md`).

## Verdict

`sufficient` for `morse-inequalities-and-the-handle-chain-complex`. The 19 A + 5 B
scaffold items realize all 15 DT-8 A design rows and all 5 B design rows (design L598–635);
the four added A items are local closure lemmas for the sublevel filtration and the handle
retraction, consistent with §12.6's "DT-8–DT-10 retained" disposition as recorded in the
batch-4 notes. All 199 direct dependency edges of the 24 pair items resolve: 81 distinct
targets = 55 published items (all `status: published`) + 26 in-run items (14 on the pair's
own A page, 9 in DT-6 batch 1, 3 in DT-7 batch 3), 0 unresolved and 0 plan-only. The
154-item transitive closure (112 published + 42 in-run, the latter comprising the pair's
14 own items plus 28 distinct DT-6/DT-7 supplier items) also resolves with 0 unresolved.
All seven `requires` pages are
either published (`sublevel-deformation-and-the-handle-attachment-theorem`, the three AT
pages and `chain-complexes-and-homology`) or in-run at earlier orders (DT-6 order 527,
DT-7 order 533). Two findings are recorded for the owner and the batch-1/batch-3 producers
(closed-case reading of the DT-6 correspondence; one missing dependency declaration on A
item 13); neither is an omission from this pair's planned subject, so neither changes the
verdict. Details, evidence and the two coverage-record notes follow.

## Design → scaffold mapping (scope, not proof)

| Design row(s) (L604–617) | Realization in the batch-4 manifest | Evidence |
|---|---|---|
| 1 `def-morse-numbers-and-morse-polynomial` | present, id identical | manifest item; statement fixes $\mathbb Z[t]$, index = negative squares, closed $M$ |
| 2 `def-poincare-polynomial-over-a-field` | present | statement includes the relative pair version and coefficient dependence |
| 3 `lem-exact-sequence-dimension-inequality` | present | states the $P_A+P_C=P_B+(1+t)Q$, $q_k=\dim\ker\alpha_k\ge0$ form |
| 4 `lem-one-handle-changes-relative-homology-in-one-degree` | present; (a) general handle attachment, (b) one critical level with several points | strengthens the design wording (batch-4 notes §3–4); both forms needed by items 5 and 14 |
| 5 `thm-morse-polynomial-identity` | present | closed $M$, field $F$, $Q$ nonnegative, both coefficientwise and partial-sum forms |
| 6, 7 weak/strong inequalities | present, ids identical | coefficients of $(1+t)Q$; partial sums equal $q_k$ |
| 8 `cor-morse-euler-characteristic-identity` | present | field-independent, orientable or not |
| 9 `cor-total-critical-point-lower-bound` | present | equality iff $F$-perfect |
| 10 `def-perfect-morse-function-over-a-field` | present | no orientation, no Morse–Smale condition |
| 11 `lem-perfectness-is-equivalent-to-vanishing-morse-correction-polynomial` | present; reformulated to handle boundary maps | design's "Morse differentials" are DT-9 content, unavailable here (batch-4 notes §3); reformulation is the correct on-page statement |
| 12 `prop-relative-morse-inequalities-for-a-cobordism` | present | adapted $f$, relative Betti numbers, boundary-critical-point caveat printed |
| 13 `lem-handle-boundary-coefficients-are-attaching-belt-intersection-numbers` | present; Milnor Cor 7.3 / Wall Lemma 5.3.2 route | design locators (N/AD/R) contain the Morse-complex route only; substitution recorded in coverage and batch notes §4, sources Milnor §6–7 and Wall §5.3 read |
| 14 `prop-morse-handle-chain-complex-computes-singular-homology` | present | chain complex, $\partial^2=0$, $H_*(C)\cong H_*(M;F)$, finite-dimensionality |
| 15 `rem-morse-inequalities-depend-on-the-coefficient-field` | present | Euler identity the only field-independent statement |
| added A items | `lem-long-exact-sequence-of-a-triple-in-singular-homology`, `lem-a-collar-product-region-deformation-retracts-onto-its-face`, `lem-higher-index-handle-attachments-do-not-change-lower-homology`, `lem-a-k-handle-deformation-retracts-onto-its-cocore-and-outgoing-region` | local closure lemmas named in the coverage canonical list or the read Hatcher/Wall/Milnor ranges; no design claim is dropped or narrowed |
| B rows 1–5 (L627–635) | all 5 present, design ids identical | sphere $1+t^n$; torus $1+2t+t^2$; $\mathbb{RP}^n$ coefficient-dependent perfectness; cancelling pair adds $(1+t)t^k$; Euler equality does not imply perfectness |

## Source coverage

- 7 full texts, all fetch-verified and live: Nicolaescu (2nd ed.) §2.3; Wall §§5.1–5.4;
  Cohen Ch. 12 §5 (with the stale-`bookR3` recovery documented); Audin–Damian §4.4;
  Ritter Lecture 21; Milnor h-Cobordism §§6–7; Hatcher §§2.1–2.2. Coverage dispositions:
  74 rows = 40 included, 9 inline, 10 already-published, 12 deferred, 3 out-of-scope; every
  deferral names a plan-spec page and every out-of-scope row carries a per-result reason.
- The design's four sources (N §2.3, C §12.5 with the corrected printed pp. 489–493, AD
  §4.4, R L21) are all read; the added Wall/Milnor/Hatcher locators supply the handle-chain
  and boundary-coefficient route that the design's locators do not (recorded, with corrected
  page ranges).
- **Coverage-record note 1 (recommended correction, not a scope omission).** Two "deferred"
  rows name `morse-homology-continuation-and-comparison` as destination, but its current
  scaffold (batch 6, 23 items) plans neither Nicolaescu Prop 2.3.6 (gap condition
  $|\operatorname{ind}p-\operatorname{ind}q|\ne1$ gives perfectness) nor Ritter's "products
  of Morse homology classes via triples of trajectories"; the plan's DT-10 design
  (L678–716) does not include them either. Both rows are outside the approved DT-8/DT-10
  design. Recommended owner action: re-disposition the two rows as `out-of-scope` (with the
  design reference) or as `owner-decision`; if the owner prefers to keep the classical
  gap-condition perfectness criterion, the cheapest home is a one-line corollary on this
  page from item 11(iii) (no adjacent indices $\Rightarrow$ all handle boundary maps vanish
  degreewise $\Rightarrow Q=0$, perfect over every field) — an enrichment decision, not a
  defect of the current scaffold.
- **Coverage-record note 2.** The batch-4 coverage record is keyed to the A page only
  (sibling batches 2, 5, 10, 15 carry entries for both pages). All five B items are named in
  the A page's source contents/canonical lists, so no evidence is lost; the engine's
  `coverage-checklist` accepts the single entry. Optionally add a B-page entry for
  uniformity. Five items are not individually named in the coverage record
  (`def-morse-numbers-and-morse-polynomial`, `cor-total-critical-point-lower-bound`,
  `rem-morse-inequalities-depend-on-the-coefficient-field`, and the two added lemmas
  `lem-a-collar-product-region-deformation-retracts-onto-its-face`,
  `lem-higher-index-handle-attachments-do-not-change-lower-homology`); their content is
  standard packaging of the harvested N §2.3 / AD §4.4 rows or of the read Hatcher
  §§2.1–2.2 ranges, so this is a harvest-ledger granularity matter, not missing support.

## Prerequisite findings (unmet-prerequisite check)

- **Confirmed available (no gap).** All 55 distinct published dependencies carry
  `status: published` in `items/`; the published page homes match the `requires` array
  (AT/HA pages hold the relative/cellular/chain-complex suppliers; DT-5 holds the
  attachment, standard-pair, simultaneous-attachment and handle-vocabulary items). All 12
  cross-pair in-run targets (9 in DT-6 batch 1, 3 in DT-7 batch 3) exist in the current
  scaffold, the closure reaches 28 distinct DT-6/DT-7 items, and all DT-6/DT-7 items are
  ordered before 535. No dependency resolves to a plan-only id.
- **Confirmed interface obligation (report and reconcile at Step 3b; it is already an open
  ledger row, repair owner = batch-1 producer).** *Closed-manifold case of the DT-6
  correspondence, rearrangement and equal-index items.* Consuming planned items:
  `prop-morse-handle-chain-complex-computes-singular-homology` (strategy step 1: "the handle
  correspondence for the triad $(M;\varnothing,\varnothing)$ with the empty-face
  convention"), `cor-morse-euler-characteristic-identity` (strategy: handle presentation
  of the closed $M$ with one handle per critical point),
  `ex-perfect-morse-function-on-a-torus`, `ex-cancellation-pair-contributes-a-one-plus-t-term`,
  `cex-euler-equality-alone-does-not-imply-perfectness` (converse direction of the
  correspondence on $S^2$). Required prerequisite claim and hypotheses: for a **closed**
  smooth $n$-manifold $M$ and a Morse $f$ (no boundary), there is a finite handle
  presentation of $M$ relative to $\varnothing$ with exactly one handle of index
  $\operatorname{ind}(p)$ per critical point, and it can be chosen index-ordered; conversely
  each finite presentation relative to $\varnothing$ is induced by such an $f$. Evidence of
  absence of the literal statement: `def-morse-function-adapted-to-a-cobordism` (batch-1
  manifest) requires $f^{-1}(0)=M_0$ and $f^{-1}(1)=M_1$ for $f:W\to[0,1]$; on the triad
  $(M;\varnothing,\varnothing)$ with $M\ne\varnothing$ compact, $f$ attains $0$ and $1$, so
  no adapted function exists; `thm-morse-functions-and-handle-decompositions-correspond`,
  `thm-morse-rearrangement-by-index` and `lem-handles-of-equal-index-can-be-attached-on-one-
  level` are all stated for adapted functions on triads, and no batch-1 statement applies
  the correspondence or rearrangement to a closed manifold (checked all batch-1 statements
  for "closed"; its only closed-manifold items are the presentation examples
  `ex-dual-handle-presentations-of-a-genus-g-surface` and
  `ex-empty-incoming-boundary-requires-zero-handles`, which exhibit presentations but do not
  state the function–presentation bridge for closed manifolds). The decomposition-side
  convention does exist (`def-handle-decomposition-relative-to-the-incoming-boundary`:
  "if $M_0=\varnothing$, the initial stage is empty and the first handle is a $0$-handle")
  and the B example `ex-empty-incoming-boundary-requires-zero-handles` illustrates it, so
  the mathematical content is standard (Milnor, *Morse Theory* §3; Wall Thm 5.1.6/Cor 5.1.7)
  and the fix is a statement-level clause. Recommended scaffold addition: extend the three
  DT-6 statements (or add one bridge item on DT-6) with an explicit closed-face clause: when
  both faces are empty read adaptedness as "all critical points interior and nondegenerate,
  no boundary condition", and construct the presentation from the sublevel filtration with
  empty initial stage, both directions. The two existing open ledger rows for this reading
  (cross-batch-dependencies rows for `cor-morse-euler-characteristic-identity` and
  `prop-morse-handle-chain-complex-computes-singular-homology`) cover it.
  *Uncertainty:* this is a scaffold interface/reading gap on a supplier pair, not a missing
  theorem and not an omission from this pair's planned inventory; I did not write the clause.
- **Confirmed dependency-declaration gap (minor; fix suggested).**
  `lem-handle-boundary-coefficients-are-attaching-belt-intersection-numbers` (A item 13)
  prints "the endpoint conventions for $k=0$ and $k=n-1$ are those of the geometric
  cancelling-pair definition" and cites $k=0$/$k=n-1$ behaviour, but its `deps` array omits
  `def-geometric-cancelling-handle-pair` (batch 3), the item that actually states those
  conventions; the matrix definition `def-attaching-belt-intersection-matrix-of-adjacent-
  index-handles` is stated only for $1\le k\le n-2$, so the endpoint content is load-bearing
  for the torus example and for the $k=0$/$k=n-1$ stages. Recommended action: add the
  dependency edge (or inline the conventions in item 13 and drop the citation); the
  cross-batch ledger already carries a row for the matrix definition, and the endpoint
  content itself is present in the scaffold, so no content is missing.
- **Published-item caveats reaching this pair only through DT-6 (already recorded in
  §12.7; no new finding).** The transitive closure passes
  `thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms` →
  `lem-compact-morse-critical-points-have-uniform-hessian-gaps` (§12.7 finding 4: persistence
  step under-justified) and `thm-morse-functions-are-dense-by-relative-jet-transversality`
  (§12.7 finding 5: missing $\mathrm{AC}_\omega$ annotation). No batch-4 item cites them
  directly; they constrain the DT-6 proof route and are the batch-1 producer's to reconcile.
  `thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces` (finding 3) is
  **not** reached.

## Library role and consumers

- Declared page consumers: `vector-field-index-euler-characteristic-and-poincare-hopf`
  (order 541, batch 7; uses `cor-morse-euler-characteristic-identity` and
  `lem-exact-sequence-dimension-inequality`) and `the-smooth-h-cobordism-theorem` (order 561,
  batch 15; uses `lem-one-handle-changes-relative-homology-in-one-degree` and
  `lem-handle-boundary-coefficients-are-attaching-belt-intersection-numbers` through its
  relative handle chain complex).
- Item-level consumers without a page edge: batch 16's based handle chain complex and
  modification lemmas use the boundary-coefficient lemma; batch 8's algebraic Lefschetz
  number uses `prop-morse-handle-chain-complex-computes-singular-homology`. Every claim these
  consumers need is planned on the pair; no consumer needs a claim the pair does not plan.
- The pair is the sole home of "Morse polynomial/Morse inequalities" content in the library
  (no published item text contains either phrase), which matches its role: weak/strong
  inequalities, Euler identity, relative and perfect cases, plus the handle chain complex.

## Checks run (actual results)

| check | result |
|---|---|
| `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-4.pages.json` | 24 items, 0 missing, 0 errors |
| `node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29` | 883 items / 60 pages, max level 23, exit 0 |
| dependency resolution scan (pair, 199 edges / 81 distinct targets) | 55 published (`status: published`) + 26 in-run, 0 unresolved; transitive closure 154 items, 0 unresolved |
| `node tools/coverage-checklist.mjs …batch-4.coverage.json --require-destination` | 1 page, 74 rows, 0 errors, 0 warnings |
| `node tools/source-fetch-check.mjs --coverage …batch-4.coverage.json` | 7/7 fetch-verified, 7/7 resolved |
| `node tools/url-sweep.mjs --coverage …batch-4.coverage.json` | 7/7 live, 0 failed |
| `node tools/source-backing.mjs --coverage … --liveness …` | every harvested result still backed |
| `node tools/content-policy.mjs --manifest-only research/frontier-41-ha-dt-29-batch-*.pages.json` | 883 items, 0 errors, 0 warnings (single-batch invocation reports cross-batch edges as errors; expected) |
| `node tools/fwdcheck.mjs` / `node tools/extcheck.mjs` | exit 0; unrelated published notices only |

## Item-level notes for Step 3b / owner (non-blocking; no edits made)

- A item 4's part (a) is stronger than the published `cor-relative-homology-of-a-single-
  handle-pair` (Morse-band form); the general attachment form and the generator/connecting-
  map identification are the item's own obligation, built from the published standard-pair
  lemma and naturality (both present).
- A item 13 prints transversality of all attaching/belt spheres as a hypothesis; the batch-3
  matrix definition notes entries may depend on the isotopy otherwise, so the restriction is
  consistent with the page's use (torus computation, boundary matrix identification).
- The relative Morse inequality (A item 12) currently has no declared downstream consumer in
  this frontier; it is nonetheless a designed row of the intended subject ("relative cases"),
  so it is not an orphan finding, only a note for Step 4/5.

## Uncertainty

- The closed-case clause (finding above) is stated as an obligation, not verified present; I
  did not attempt to author it, per the no-scaffold-edit rule.
- Whether the two unhonored deferrals matter is the owner's enrichment call; I confirmed the
  destination pair's current scaffold and the plan's DT-10 design do not plan them.
- I read the design, manifests, coverage, ledger and the supplier statements/strategies, not
  the full proofs of the published suppliers; proof-level adequacy is Step 3b/Step 5 work.
