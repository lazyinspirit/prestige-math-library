# Frontier 42 (Coxeter build) — batch 2 Step 1 notes

**Owner:** beta, batch 2. **Pair:** `coxeter-presentations-exchange-and-reduced-word-theorems` /
`coxeter-presentations-exchange-and-reduced-word-theorems-examples`, orders 1708/1709,
category `coxeter-groups` (design label HH-11). This file records scaffold decisions and
evidence; Step 3 authors the proofs and owner reconciliation plus the engine gate follow.
Nothing here is mathematical approval.

## Scope, plan and binding inputs

I read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the binding
`research/frontier-42-coxeter-32-owner-authoring-direction.md`, the batch task
`research/frontier-42-coxeter-32-beta-2.task.md`, the design
`research/plan-hopf-hecke-algebras-track.md` §HH-11 (line 321 ff.), the machine inventory
`research/hopf-hecke-scaffold/inventory.json` (HH-11), `research/hopf-hecke-scaffold/
independent-audit.md`, `research/hopf-hecke-scaffold/hecke-source-report.md`, the classical and
combinatorial source reports under `research/coxeter-scaffold/`, the canonical native A/B page
prose (`library/coxeter-groups/coxeter-presentations-exchange-and-reduced-word-theorems{,-examples}.md`),
`research/plan-spec.json`, the batch shells, and the step-1 drift report
(`research/frontier-42-coxeter-32-alpha-step1-drift.md`, verdict no-drift for this page).

The pair is unchanged: order, category, title, companion and the five page `requires` are exactly
the plan's, and the design's `Requires` line matches the plan verbatim. The A manifest carries the
six designed item IDs unchanged (`def-hh-coxeter-matrix-word-group-and-length`,
`def-hh-geometric-coxeter-representation-and-roots`, `lem-hh-dihedral-root-recurrence-and-root-sign`,
`thm-hh-coxeter-exchange-deletion-and-faithfulness`, `thm-hh-matsumoto-reduced-word-theorem`,
`thm-hh-parabolic-minimal-representatives-and-length-additivity`); the B manifest carries the five
examples promised by the design's Examples paragraph (rank-one, finite dihedral and type-A reduced
words, a nonreduced word deleted by exchange, minimal representatives for S2 ⊂ S3). No item was
added and none was dropped. The owner direction's HH-11 clauses are respected: the pair keeps its
Coxeter Groups home, exchange/Matsumoto are built algebraically without root positivity or
geometric faithfulness, HH-12's basis theorem is not pre-empted, and no complete local proof was
replaced by a citation.

## Design / plan / inventory reconciliation (recorded conflicts and route decisions)

1. **Inventory edge A2 → `lem-hh-finite-matrix-and-module-preliminaries`.** The inventory proposes
   the batch-1 item as a dependency of `def-hh-geometric-coxeter-representation-and-roots`. It is
   not an actual use of the recorded strategy: the exact order of `σ_sσ_t` is proved by the 2×2
   matrix of `A|_P`, its characteristic polynomial `X² − (c²−2)X + 1 = (X−ζ²)(X−ζ^{-2})` and an
   eigenvector/diagonalisability computation, none of which consumes the determinant/adjugate,
   rank, composition-series or nilpotent-trace facts of that item. The edge is therefore dropped
   as a proof dependency (not as content), as batch 1 recorded for its analogous A8 → A6 edge.
   No plan edge changes.
2. **Design route and its realization.** The design's rank-two route ("the off-plane block is
   annihilated by the geometric sum") is realized as a direct operator computation on the explicit
   decomposition `E = P ⊕ Q` with `Q = span{α_u : u ∉ {s,t}}`; no bilinear form, no definiteness and
   no positivity is introduced, so no extra supplier is needed. The signed action is the design's
   `U_s(ε,t) = (ε(−1)^δ(s,t), sts)`, realized as a right action of `W` on `{±1}×T` (Lusztig
   Proposition 1.5 / Davis Lemma 3.3.5); its well-definedness uses only the exact order of `st` and
   the repeat `r_{i+m} = r_i` of the 2m prefix reflections.
3. **Type-A clause of A6.** The design's closing sentence is kept inside
   `thm-hh-parabolic-minimal-representatives-and-length-additivity`: `S_n` with adjacent
   transpositions is the type-A Coxeter group with `ℓ = inv`. Route: the type-A relators hold (two
   of the three by the published disjoint-cycle and permutation computations), so the universal
   property gives a surjection `W → S_n`; injectivity follows from the Exchange Property of
   `(S_n, {τ_i})`, proved from `ℓ_A = inv` and the one-line-notation position argument
   [Björner–Brenti Proposition 1.5.2/1.5.4], and from the characterisation "exchange ⟺ Coxeter"
   [Björner–Brenti Theorem 1.5.1]. Two published items that state the conclusion are deliberately
   **not** cited because their home pages lie outside this A page's `requires` closure:
   `thm-the-symmetric-group-has-the-coxeter-presentation` (category-theory page) and
   `lem-reduced-adjacent-transposition-words-have-well-defined-positive-lifts` (braid-groups page).
   Their content is reproduced locally instead of widening the plan.
4. **Published inversion lemma.** `lem-a-transposition-reverses-inversion-sign` gives only the sign
   reversal `(−1)^{inv(στ)} = −(−1)^{inv(σ)}`; the exact `inv(στ_i) = inv(σ) ± 1` rule needed by the
   type-A proof is proved locally by the one-line-notation computation, so the item is not declared
   as a dependency of A6.
5. **Redundant prerequisite advisories.** `validate-plan` reports seven `redundant-prereq`
   warnings for this page's declared `requires` array (e.g. `group-homomorphisms-and-the-isomorphism-
   theorems` is already reached through three other prerequisites). The array is the owner-approved
   plan and the drift review left it intact; recorded for the owner, no plan edit made.

## Inventory, levels and dependency audit

The A manifest carries 6 items and the B manifest 5. In-run dependency levels (level = 1 + max
level of in-run `deps`; published suppliers do not raise a level, so the figures below are the
post-final-pass labels): 0 for A1, 1 for A2, 2 for A3, 3 for A4, 4 for A5, 5 for A6, 4 for B1–B2,
5 for B3, 6 for B4 and 7 for B5; maximum 7. There are 35 in-run edges (A2←A1; A3←A1,A2;
A4←A1,A2,A3; A5←A1..A4; A6←A1..A5; B1←A1,A2,A3,A4; B2←A1,A3,A4; B3←A1,A3,A4,B2;
B4←A1,A3,A4,A6,B2; B5←A1,A3,A6,B4), no cycles, no forward page-order edges, no B-page targets
outside the same B page, and no declared edge to a batch-1 (or any other in-run) item.

Fifty-nine distinct published items are cited. I opened each file, read its Statement and the
relevant proof paragraphs, and checked hypothesis, direction, conventions and axiom strength
against its use. The load-bearing checks actually made:

- **Presentation and length (A1).** `thm-reduced-words-form-the-free-group` supplies the free group
  with its universal property; `def-normal-closure` already contains the "smallest normal subgroup"
  property (no separate normality item exists or is needed); `thm-von-dyck`,
  `def-group-presentation`, `prop-normal-closure-is-products-of-conjugates` and
  `thm-quotient-group-universal-property` give the von Dyck form used; `thm-well-ordering-principle`
  (on `construction-of-the-natural-numbers`, inside the closure) makes `ℓ` well defined. No Choice:
  the only minimisation is over a nonempty set of natural numbers.
- **Field and roots (A2).** `cor-splitting-fields-exist-for-finite-families` is the common splitting
  field of the product, `thm-separability-of-x-n-minus-one-and-the-order-of-the-group-of-roots-of-unity`
  gives separability and `|μ_n| = n` in characteristic zero, and
  `prop-the-roots-of-unity-in-a-field-form-a-finite-cyclic-group` gives that primitive roots are the
  generators; `c = ζ + ζ^{-1}` is invariant under `ζ ↦ ζ^{-1}`, so the constants are well defined
  once one primitive root per finite edge is fixed. `char K = 0` follows because the prime subfield of
  `K` is `Q` (`thm-prime-subfield-classification`, `thm-rat-field`).
- **Rank-two order (A3).** The char-poly route is closed by `def-characteristic-polynomial-of-a-
  matrix/…-of-an-operator`, `lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients`
  (trace `c²−2`, determinant `1`), `thm-eigenvectors-for-distinct-eigenvalues-are-linearly-independent`
  and `cor-distinct-characteristic-roots-imply-diagonalisability`; `E = P ⊕ Q` is discharged by
  `thm-unique-coordinates-with-respect-to-an-ordered-basis` and `lem-direct-sum-criterion`. The
  `m = ∞` case uses characteristic zero for `k·(B−id) ≠ 0`, which is precisely where the design's
  "characteristic-zero splitting field" hypothesis is consumed.
- **Signed action and deletion (A3, A4).** The prefix-reflection bookkeeping, the 2m repeat, the
  two-letter deletion identity and the exchange step were checked line by line against Davis
  Lemma 3.2.6/Lemma 3.3.5 and Lusztig Propositions 1.5–1.7; the right-action convention used in the
  items is stated explicitly and matches `(ε,r)·w = (ε η(r,w), w^{-1}rw)`.
- **Matsumoto (A5).** The proof follows Lusztig's induction (A), (A′_p) and the final dihedral case;
  the only external inputs are exchange (A4), ambient reducedness of alternating words (A3(7)) and
  the singleton claim `S ∩ ⟨s,t⟩ = {s,t}`, proved from the action on `E/P` where elements of the
  dihedral subgroup act trivially and `σ_u` for `u ∉ {s,t}` does not. No unproved rank-two prefix
  theorem is imported.
- **Parabolics and cosets (A6).** Support via Matsumoto; Tits word reduction gives the intrinsic
  presentation and `ℓ_J = ℓ`; the minimal-coset argument is Lusztig Lemma 9.7 (subsequence
  reduction; a dropped `d`-letter would place a shorter element in the coset); uniqueness of the
  minimal element and the descent characterisation are proved from additivity. `def-coset`,
  `def-generated-subgroup`, `def-group-isomorphism-and-automorphism` were read. Type A: see §3.
- **Axiom ledger.** No item declares `def-axiom-of-choice`; no step selects an infinite family
  (the primitive roots are one finite selection; complements are explicit basis complements;
  coset minima are natural-number minima). Choice-free throughout, matching the design's
  `assumptions: []` for all six items.

## Sources, harvest, and dispositions

Three independent treatments were fetched and stamped with `source-fetch-check --stamp`
(2026-10-06; no retrieval failure, so no drop or alternative-proof record is owed):

| Treatment | Kind | Locator read | Fetch stamp |
| --- | --- | --- | --- |
| Davis, *The Geometry and Topology of Coxeter Groups*, PUP 2008, author's PDF | monograph | Ch. 3 §§3.1–3.4 (printed pp. 26–43), Ch. 4 §§4.1–4.3 (pp. 44–48), Example 6.7.1 (pp. 92–93) | 4 220 570 B / 600 pp. / `ccefbb950fdcfce9` |
| Lusztig, *Hecke Algebras with Unequal Parameters*, revised book, arXiv:math/0208154v2 | monograph | §1.1–1.11 (printed pp. 10–19), §§9.1–9.7 (pp. 39–41) | 1 096 504 B / 141 pp. / `6329366ceac9317c` |
| Björner–Brenti, *Combinatorics of Coxeter Groups*, Springer GTM 231 | textbook | §1.5 (printed pp. 18–22, incl. Theorem 1.5.1 and Propositions 1.5.2–1.5.4), the referenced Proposition 1.4.7, and Prop. 2.4.4/Cor. 2.4.5 (pp. 39–40) | 4 320 702 B / 370 pp. / `ad1e7d9260127bb2` |

The coverage file records 36 harvested headings with dispositions: 24 `included` (naming the A
items and the rank-two example `ex-hh-finite-dihedral-reduced-words`), 5 `inline`, 1 `deferred`
(Davis diagram/geometric-group material to `finite-coxeter-diagrams-and-complete-classification`, the
CG-10 page of this run) and 6 `out-of-scope`, each with a specific reason (reflection-wall
formalism, folding 1.10, bilinear form/tameness 1.11, longest elements and double cosets, the
iterated parabolic normal form, and figure-only examples). No source needed a drop and no
alternative argument was used; the five-paper-style retry allowance was not touched.

## Published defects

No defect was found in the suppliers this batch consumes: every cited statement matched its use,
including the two narrow checks above (the inversion lemma gives only the sign reversal; the Tits
reduction gives subwords, which the coset proof requires). Three observations for the owner, none a
defect claim: (1) the seven `redundant-prereq` advisories on the declared `requires` array; (2) the
out-of-closure published items `thm-the-symmetric-group-has-the-coxeter-presentation` and
`lem-reduced-adjacent-transposition-words-have-well-defined-positive-lifts` state the type-A
identification that this pair proves locally, so a future plan edge could avoid duplication — not
needed for closure now; (3) the batch-1 page `tensor-coherence-and-algebraic-descent` is a declared
page prerequisite but no batch-2 item uses it, recorded as an open row in the cross-batch ledger.

## Final verification pass (2026-10-07)

A closing read of every manifest item against its sources, dependencies and well-definedness
obligations produced the following repairs, all inside this batch's write scope (manifest,
notes and readiness records):

1. **Broken wikilink repaired.** `lem-hh-dihedral-root-recurrence-and-root-sign` (strategy 1.1)
   linked `def-hh-geometric-coexeter-representation-and-roots`; the correct id is
   `def-hh-geometric-coxeter-representation-and-roots`. It was the only unresolved `[[…]]`/`deps`
   target in the manifest: every wikilink and every dep now resolves against the in-run ids plus
   `items/` (re-verified mechanically).
2. **Prefix-reflection distinctness made explicit (A3 4.1 and 6.1).** The earlier justification
   for `r_1,…,r_m` being pairwise distinct (and for the distinct prefix reflections in 6.1) was a
   one-line appeal to the exact order of `st`. The repaired text states and uses the closed form
   `r_i=(st)^{i-1}s`, derived from the relators via `(st)^{-k}=(ts)^k`, `s(ts)^k=(st)^ks` and
   `sts=s(ts)` and checked numerically in `D_{2m}` for `m=2..8`: `r_i=r_j` forces `(st)^{j-i}=1`
   after right multiplication by `s`, so `m | j-i`, impossible for `0<j-i<m` (and no positive
   power of `st` is `1` when `m=∞`). This is exactly the step on which the well-definedness of the
   signed action (4.1) and ambient reducedness (6.1) rest.
3. **`justified_by` aligned with the text (A1).** Strategy 3.1 names both later results that
   discharge the definition's recorded features; the field now lists
   `thm-hh-coxeter-exchange-deletion-and-faithfulness` and
   `thm-hh-parabolic-minimal-representatives-and-length-additivity` (both depend on A1 through
   `deps`, so the schema's backward-justification rule holds).
4. **Four in-run dependencies declared.** The example strategies invoke material beyond the
   original lists: `ex-hh-exchange-deletion-on-a-nonreduced-word` and
   `ex-hh-type-a-reduced-words-and-inversions` use the dihedral length formulae of
   `ex-hh-finite-dihedral-reduced-words`; `ex-hh-minimal-representatives-for-s2-in-s3` uses the
   S3 table of `ex-hh-type-a-reduced-words-and-inversions`; and `ex-hh-rank-one-reduced-words`
   item 4 uses the root set and `σ_s` of `def-hh-geometric-coxeter-representation-and-roots`. All
   four edges stay inside the pair (same B page or A supplier) and were added to `deps`; levels
   were recomputed (B3 4→5, B5 6→7; B1 and B4 unchanged) and all 11 records re-recorded. The
   remaining `[[…]]` pointers in example strategies that are not proof uses (the
   `thm-hh-matsumoto-reduced-word-theorem` references in B2/B4 for the braid-move notion) stay
   undeclared citations, matching the run's convention; the underlying claims are proved where
   they are stated.
5. **Coverage counts corrected.** The harvest table holds 24 `included`, 5 `inline`,
   6 `out-of-scope` and 1 `deferred` row (36 total); earlier drafts of this note carried a
   19/7/9 split that the file never contained.
6. **Generator scripts stale, not used.** The `/tmp` fragment scripts from construction were
   found to predate the last hand-edits (they lacked the A3 characteristic-polynomial deps and
   the A6 local inversion argument), so they were not used for these repairs: the edits were
   applied directly to `research/frontier-42-coxeter-32-batch-2.pages.json` and the whole-file
   diff was verified to contain exactly the changes listed above.

## Checks actually run (2026-10-07, after the final-pass edits)

- `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-2.pages.json` — 11 items,
  0 errors; whole-run form over all manifests — 41 items, 0 errors.
- `node tools/content-policy.mjs --manifest-only research/frontier-42-coxeter-32-batch-2.pages.json`
  — 11 scoped items, 0 errors, 0 warnings; whole-run form — 41 scoped items, 0 errors, 0 warnings.
- `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` — exit 1 solely on
  56 `empty scaffold inventory` errors belonging to other batches (batches 3, 4, 7–32); no other
  error line, no cycle, and every batch-2 `dependency_level` equals the computed value
  (0,1,2,3,4,5 / 4,4,5 / 6,7).
- `node tools/step1-decisions.mjs check --run frontier-42-coxeter-32` — exit 1 because other
  batches' pages are empty; 41/41 run items ready and **no batch-2 item carries work**. The 11
  records were re-recorded after the final-pass edits (A1 `justified_by`, A3 strategy, and the
  B1/B3/B4/B5 dependency additions all changed the bound closure).
- `node tools/validate-plan.mjs research/plan-spec.json --pages-file <pair selection>` — exit 0;
  reading order and declared prerequisites consistent; 7 `redundant-prereq` advisories.
  `--run frontier-42-coxeter-32` exits 2 (`Empty frontier page …`), the documented pre-scaffold
  deferral: item files and other batches' scaffolds do not exist yet.
- `node tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-2.coverage.json
  --require-destination` — 1 page, 36 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage …` — 3/3 sources fetch-verified (stamps of
  2026-10-06 retained); check mode 3/3 resolved.
- `node tools/url-sweep.mjs --coverage … --recover --fail-on-dead --out <temp>` (temporary output
  so no run state is written) — 3/3 live, 0 dead, 3 citation decisions.
- `node tools/source-backing.mjs --coverage … --liveness <temp>` — 6 authored results, every one
  backed by an openable source.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` — exit 0; the
  batch-2 input is present with one `page` row (status `open`) for the declared
  `tensor-coherence-and-algebraic-descent` prerequisite. `--require-reviewed` exits 1 until every
  batch writes its input; the unreviewed edges are consumer-owned by other batches (this A page is
  a declared supplier for batches 3, 4, 7, 10, 14 and 28 per the refreshed merged ledger, whose
  owners must review those rows).
- `node tools/manifest-integrity.mjs --run frontier-42-coxeter-32` — 64 pages owed, 64 present,
  no scope drift.
- `node tools/audit-manifest.mjs research/frontier-42-coxeter-32-batch-2.pages.json` — reports 11
  `missing-source` rows because the item files are not authored yet; this is the documented
  pre-authoring state (the tool runs at 5b, not at step 1), not a defect of this scaffold.
- `node tools/extcheck.mjs research/frontier-42-coxeter-32-batch-2.pages.json` — exit 0; no active
  recorded-not-proved item, external reference or external fallback record in scope (the manifest
  declares none, and item mode runs after authoring).
- Observation only, unrelated to this batch: repo-wide `node tools/depcheck.mjs` currently exits 1
  on ~2731 `published-unaudited` published corpus items (none of them a batch-2 id, none in this
  pair's closure). This is pre-existing published debt that no new supplier can repair; recorded
  so the owner does not read it as a batch-2 finding.

## Outstanding findings

1. Whole-run gates (`step1-readiness`, `item-dependency-levels`, `--require-reviewed`,
   `validate-plan --run`) cannot pass until the remaining batches are scaffolded; the failures above
   name only other batches' empty pages. This is not a batch-2 escalation.
2. The readiness records are byte-bound to the transitive closure of their dependencies, which
   includes many published items; a concurrent edit anywhere in that closure mechanically stales a
   record, so re-check `step1-decisions check` at gate time on stable inputs.
3. Step 3 must author all 11 item proofs and the five worked examples; this scaffold records the
   strategies, supplier sets and source evidence only. Step 3 review and the engine gates follow.

Nothing in this batch is escalated: every item has a complete proof strategy with met prerequisites,
all supplier statements were read, no Choice boundary is crossed, and no required page split is
needed (6 + 5 items against the 100-item cap).
