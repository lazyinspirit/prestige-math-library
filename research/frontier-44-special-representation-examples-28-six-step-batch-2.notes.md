# Batch 2 — `countability-and-uncountability` — scaffold notes

Run `frontier-44-special-representation-examples-28`, role beta, batch 2, 2026-10-08.
Owned scope: the A/B pair `countability-and-uncountability` /
`countability-and-uncountability-examples` (real-analysis, orders 17/18).
Wrote only this batch's manifest, coverage record, notes, cross-batch input and
Step-1 readiness records. No item file, page file, shared plan, design, engine
state or verdict was edited.

**Outcome.** 27 manifest items, all recorded `ready`: the 19 published items the
canonical plan already homes on the A page (preserved, not re-authored; their
manifest deps carry the dependency lists their own published proofs declare) and
8 new example/counterexample items scaffolded for the B page. Highest in-run
`dependency_level` is 7. Four findings are recorded below for owner
reconciliation — F1 (run-level plan/page inventory), F2 and F3 (published
prose), F4 (a Step-1 record staleness hazard from concurrent sibling batches);
none of them is a mathematical defect of an item this batch builds.

## Which design controls, and why

The dispatch names three design locations, all *mentions of the page id*, not
headings:

- `research/plan-algebra-track-expansion.md` L1824, in §II.1.a («Reconciliation
  against disk, 2026-08-13»): the table row `countability-and-uncountability`,
  spec says 18 items, disk has 21. This is the only listed location that speaks
  to this pair's **inventory**, and it states the rule that governs it: «the
  true index of what exists is the union of the spec's `items` arrays and the
  `items:`/`examples:` lists in `library/<cat>/<page>.md`».
- `research/plan-algebra-track.md` L147, in «Why this track exists» (owner
  decision D1, 2026-07-27): records that finiteness (`def-countable`, aliased
  `def-finite-set`) and `lem-pigeonhole` are homed on this page at order 18
  (now 17) and that the algebra track consumes them. Informational placement,
  not an authoring instruction.
- `research/plan-category-theory-track.md` L4683, in the «Foundations/Set Theory
  reconciliation (2026-09-08)»: rehomes `def-dependent-choice` onto this A page
  **directly after `def-countable-choice`** and replaces its incorrect
  real-sequence input by `def-function`. This is the only one of the three that
  makes a concrete binding change to the page's item inventory and item order,
  and it is already realized on disk and in the manifest order.

**Control.** `research/plan-spec.json` controls the run, per the dispatch. Among
the three design locations, the Category-Theory reconciliation is the binding
one that has already been materialized (item order and deps of
`def-dependent-choice`); the expansion §II.1.a is the binding *method* for
reading the page's inventory, and it is the location that anticipates the
plan/page mismatch recorded below. The task's own `design` column
(`plan-algebra-track-expansion.md` L1824) is the entry point, but nothing in it
proposes new mathematics for this pair.

**Design-vs-plan conflicts recorded.** (1) §II.1.a's row is stale in its counts
(it reported «spec 18 / disk 21»; today the plan has 19 and the page 22). (2)
The plan's `countability-and-uncountability` item array is **not** the page's
inventory: it omits three published, page-homed items (finding F1 below). No
other conflict was found: the plan's `requires`
(`suprema-and-infima`, `order-zorn-and-the-axiom-of-choice`), the page order 17
and the pair's category all agree with the manifest and with the current page.

## Inventory

A page `countability-and-uncountability` — preserved published inventory as the
canonical plan lists it (19 items, in plan order):

`def-equinumerous, def-countable, thm-schroder-bernstein, lem-subset-of-countable,
lem-countable-iff-surjection-from-n, lem-finite-subsets-listable,
thm-n-cross-n-countable, thm-product-of-countable, def-countable-choice,
def-dependent-choice, def-choice-for-pairs-and-countable-finite-choice,
thm-choice-implies-dependent-implies-countable-choice,
thm-countable-union-of-countable, thm-rationals-countable, thm-cantor-powerset,
thm-r-uncountable, cor-irrationals-uncountable, fs-uncountable-contains-interval,
rem-continuum-hypothesis`.

Each entry carries the item's own published `deps` (from its frontmatter) unioned
with the plan entry's stale deps, plus `title`, and `justified_by`/`forward_refs`/
`provenance` where the file has them. Deps were read from the item files and
checked against the A page's `requires` closure; every home lies in
`the-zfc-axioms-and-basic-set-constructions`, `relations-functions-and-quotients`,
`construction-of-the-natural-numbers`, `construction-of-r-via-cauchy-sequences`,
`foundations-of-the-real-numbers`, `order-zorn-and-the-axiom-of-choice`,
`suprema-and-infima`, or the A page itself. The published statements, proofs,
publication state and hashes recorded in
`research/frontier-44-special-representation-examples-28-published-a-preservation.json`
were not touched.

B page `countability-and-uncountability-examples` — 8 new items (order within the
page; a B item may depend only on published items or on earlier items of the same
page; nothing may depend on these):

| # | id | level | content |
|---|---|---|---|
| 1 | `ex-integers-are-countably-infinite` | 5 | ℤ ≈ ℕ by two injections + Schröder–Bernstein; the min-index injection of the onto criterion is exhibited explicitly; choice-free. Isolates the onto criterion on a concrete quotient. |
| 2 | `ex-deleting-a-point-from-a-countably-infinite-set` | 2 | For countably infinite X and x ∈ X: X ≈ X∖{x}, via the explicit shift φ_n on ℕ and conjugation by a bijection; contrast with `lem-pigeonhole` claim 5 for finite sets. |
| 3 | `ex-power-set-of-the-naturals-is-uncountable` | 2 | 𝒫(ℕ) uncountable: n ↦ {n} gives ℕ ≼ 𝒫(ℕ); countability of 𝒫(ℕ) plus Schröder–Bernstein would produce a surjection ℕ → 𝒫(ℕ), contradicting Cantor. |
| 4 | `ex-binary-sequences-are-uncountable` | 3 | The characteristic-function bijection 𝒫(ℕ) → {0,1}^ℕ, hence {0,1}^ℕ uncountable; the function-space form of Cantor's diagonal and the library's record that infinite products of countable sets need not be countable. Depends on item 3. |
| 5 | `ex-rationals-in-an-interval` | 6 | For a < b: the rationals of (a,b) are countably infinite (density + a canonical least-index recursion, choice-free), while (a,b) minus them is uncountable (interleaving two given enumerations). Density and cardinality separated. |
| 6 | `ex-complement-of-a-countable-set-of-reals-is-uncountable` | 7 | For at most countable C ⊆ ℝ, ℝ∖C is uncountable; the two-set-union contradiction against `thm-r-uncountable`, with no choice spent (contrast `thm-countable-union-of-countable`). |
| 7 | `cex-a-surjective-image-of-n-need-not-be-equinumerous-with-n` | 4 | The constant map ℕ → σ(0) is onto, σ(0) is at most countable, and σ(0) ≉ ℕ by the pigeonhole principle: repetitions in an enumeration are unavoidable in general. |
| 8 | `cex-the-empty-set-is-not-a-surjective-image-of-n` | 4 | ∅ is finite hence at most countable, yet no function ℕ → ∅ exists: the nonemptiness hypothesis of the onto criterion cannot be dropped. |

Items 5 and 6 depend on `cor-interval-uncountable`, `cor-irrationals-uncountable`
and `lem-of-q-dense`; all are published and homed inside the A page's `requires`
closure. Items 3–4 are ordered so that the same-page dependency is strictly
backward (content-policy `batch-b-leaf-forward` and validate-plan `intra-order`).
No item is a load-bearing supplier for any other page, and no pair prerequisite
had to be minted.

## Findings for owner reconciliation

### F1 (run-level, shared plan; blocks Step 9 as it stands)

The A page `countability-and-uncountability` is homed on 22 items on disk — the
21 ids in its `items:` list plus `fs-uncountable-contains-interval` in
`examples:` — but `research/plan-spec.json` homes only 19 of them. The three
plan-absent, published, page-homed items are:

`lem-nat-order-is-membership`, `lem-pigeonhole`, `cor-interval-uncountable`
(all `status: published` in `items/`; all listed in
`library/real-analysis/countability-and-uncountability.md` lines 5–14).

Evidence and consequences.

- `node tools/content-policy.mjs --manifest-only` rejects listing them in this
  batch's manifest: `batch-item-already-exists` for each, because the canonical
  plan gives them no home on this page (`planHomes` has no entry, so
  `samePageReuse` is false). I verified this by running the checker on a scratch
  manifest containing `lem-pigeonhole` and `cor-interval-uncountable`; both were
  rejected with that exact code. Including them would therefore fail the run's
  `content-policy-scaffold` gate at stage 1.
- `tools/proof-layout-receipt.mjs` (`proofLayoutScope`) nevertheless requires the
  current manifests and the run's scope-ledger page inventories to agree exactly:
  the scope ledger is read from the page files (`items:` + `examples:`), and a
  manifest that lists 19 items while the page lists 22 raises
  `proof-layout: current manifests and run pages disagree` (Step 9 readiness).
  This is why the gap must be closed rather than ignored.
- The same shape does not affect the other three example pairs of this run:
  `roots-and-rational-powers` plan/disk 22/22, `sequences-and-limits` 18/18,
  `ordinals-and-transfinite-recursion` 22/22 (checked against the current
  plan-spec and page files).

Required repair (owner or an authorized plan-repair lane; not a batch-2 edit):
add the three ids to the plan's `countability-and-uncountability` item array in
their page positions (page order: `lem-nat-order-is-membership` and
`lem-pigeonhole` between `def-equinumerous` and `def-countable`;
`cor-interval-uncountable` between `thm-r-uncountable` and
`cor-irrationals-uncountable`), then extend this batch manifest's A-page item
array to the full 22 (or let the manifest follow the page in a licensed repair).
Suggested metadata for the three, read from their published files:
`lem-nat-order-is-membership` (lemma), `lem-pigeonhole` (lemma),
`cor-interval-uncountable` (corollary), each with the `deps` printed in the
file. Any such edit must be followed by fresh Step-1 records for the three new
manifest entries and by `splice-plan --update`; then the Step-9 agreement check
is satisfiable. Until then the 19-item manifest is the most this batch may
legally declare, and the mismatch surviving to Step 9 is an owner hold, not a
silent omission.

### F2 (published prose defect, A page)

`library/real-analysis/countability-and-uncountability.md` line 91 (page
summary): «The three false statements at the end guard exactly these
distinctions: two of them record, conditionally on the consistency of ZF … that
the countable union theorem and the existence of countably infinite subsets of
infinite sets are genuinely not theorems of ZF; the third refutes the belief
that an uncountable set of reals must contain an interval.»

Only the third false statement is homed on the page
(`fs-uncountable-contains-interval`). The other two results exist and are
published, but on later foundations pages:
`fs-countable-unions-of-countable-sets-are-countable-in-zf` is homed on
`library/foundations/symmetric-collapse-and-ultrafilter-free-models-examples.md`
(order 1449, published); the Dedekind/Cantor-model material is
`thm-basic-cohen-generic-real-set-has-no-countably-infinite-subset` and
`thm-basic-cohen-model-has-an-infinite-dedekind-finite-set-of-reals` on
`symmetric-extensions-and-basic-choice-failure-models` (order 1444, published).
So the mathematics is not missing; the page's self-description is stale, and a
reader at order 17 is pointed at three items two of which are not there.
Repair strategy (published-content lane, prose only): rewrite the sentence to
name the later homes, or to say that the two conditional independence statements
are recorded on the later symmetric-model pages; no item, dep or page list needs
to change.

### F3 (published prose defect, `thm-countable-union-of-countable`)

`items/thm-countable-union-of-countable.md` lines 55–57 (statement): «… ZF alone
does not prove it, **conditionally on the consistency of ZF**, as recorded among
this page's false statements and discussed in the remarks below, where that item
is named and linked.» No such item is on the page, and its final remark says the
opposite routing («proving such a lower bound belongs to the later symmetric-model
development»). The referenced item is
`fs-countable-unions-of-countable-sets-are-countable-in-zf`, published on
`symmetric-collapse-and-ultrafilter-free-models-examples` (order 1449).
Repair strategy (published-content lane, prose only): replace «among this page's
false statements and discussed in the remarks below, where that item is named
and linked» by a pointer to the later page, or drop the cross-reference and keep
the consistency qualification that the same sentence already states; the
mathematical content (AC_ω is spent at step 3.1 and no lower bound is proved
here) is correct as written.

Both F2 and F3 are prose-only; no statement, proof, dep or publication state of
any item is defective. No published *item* defect was found in the batch's
dependency closure.

### F4 (run-level bookkeeping hazard: Step-1 records couple to sibling batches)

A Step-1 readiness record hashes its item's whole transitive input closure, and
that closure follows published items' `deps`, `justified_by` **and
`forward_refs`**. Several published suppliers in this pair's closure carry
forward references into material that sibling batches of this run re-declare in
their manifests — concretely, the closure of the A-page items reaches all 20
roots-page items that are re-listed by batch 1 (of its 22) and all 22
ordinals-page items re-listed by batch 4 (for example through
`def-axiom-of-choice` → `rem-choice-ledger`, and through `def-cardinal` and
`lem-omega-least-limit-ordinal`). The record hash
therefore binds the *manifest item objects* of those batches.

Observed consequence, not a defect of this batch: after batch 4 (21:57) and
batch 1 (22:00) edited their manifests, 26 of this batch's first-pass records
read as «Item or dependency changed; record current readiness». All 27 are
refreshed and current as of 2026-10-08T11:0xZ, but any later sibling manifest
edit to those items will stale them again. The same condition was observed on
batch 1's own records in the same check, so this is mutual and structural, not
something batch 2 can fix by dropping dependencies. Operator action: after the
stage's writers drain, refresh the affected records mechanically (re-run
`step1-decisions.mjs record` for items whose records read stale) before the
`step1-readiness` gate is judged; the findings are visible in
`research/frontier-44-special-representation-examples-28-scaffold-closure.json`
if the controller writes it. No mathematical content is at stake.

## Sources and coverage

Two independent treatments, one full lecture-note set and one textbook, both
fetched in full and inspected:

- John K. Hunter, *An Introduction to Real Analysis*, complete author-hosted
  lecture notes, 307 pp., `https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf`
  (strip 2 628 085 bytes, sha256_16 `0f660721c17cd5d9`, 307 pages). Read:
  §1.6 printed pp. 16–19 (Definition 1.41, Example 1.43, Propositions 1.44/1.45,
  Theorems 1.46/1.47, Corollary 1.48, Hypothesis 1.49, the binary-sequence
  diagonal); §2.3 printed pp. 24–26 (Theorem 2.5 and its after-paragraph);
  §2.6 printed pp. 30–31 (Theorem 2.19, Cantor 1874); §2.8 printed pp. 35–36
  (Lemma 2.30, Theorem 2.31).
- Jiri Lebl, *Basic Analysis I: Introduction to Real Analysis, Volume I*,
  author-hosted complete book PDF, 312 pp.,
  `https://www.jirka.org/ra/realanal.pdf` (1 901 622 bytes, sha256_16
  `9c204ae1f1ee1641`, 312 pages). Read: §0.3 printed pp. 15–20 (Definition
  0.3.28/0.3.29, Examples 0.3.30–0.3.32, Definition 0.3.33, Theorem 0.3.34,
  Exercises 0.3.24–0.3.26); §1.2 printed pp. 30–32 (Theorem 1.2.4); §1.4
  printed pp. 41–43 (Theorem 1.4.2 and its after-paragraph); §1.5 printed
  pp. 46–48 (Theorem 1.5.2, Exercise 1.5.5).

Every harvested heading received a disposition in
`research/frontier-44-special-representation-examples-28-batch-2.coverage.json`:
45 rows total (30 on the A-page entry, 13 on the B-page entry, plus 3 canonical
rows recording the page-homed items the plan omits, F1). `included` rows name the
eight new B items; `already-published` rows name the published A-page items that
realize the source's results; `inline` rows record the two source results the new
items absorb without a separate carrier (Hunter's squaring example and the
even-numbers witness of Lebl, both instances of the one-point deletion item);
`out-of-scope` rows give specific reasons (the general infinite-set Dedekind
argument of Lebl's Exercise 0.3.25, and the binary/real identification of
Exercise 1.5.5, both beyond this pair's machinery). One advisory warning
remains: `coverage-low-yield` (6/30 built on the A-page entry) is expected
because the A page is preserved and published, so its harvested results are
dispositions of already-published items rather than new scaffolds; no decline
there is unexplained.

## Checks run (actual results)

- `node tools/manifest-deps.mjs research/…-batch-2.pages.json` → 27 item(s),
  0 missing, 0 errors.
- `node tools/content-policy.mjs --manifest-only research/…-batch-2.pages.json`
  → 27 scoped items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json --pages-file
  research/…-frontier-gate-pages.json --run frontier-44-…` → exit 0: «no
  item-level cycles, forward references, B-page dependencies, or unresolved ids
  among the 4 page(s) with item lists»; my two pages appear with 19 and 8 items
  and the declared `requires`. (Remaining `redundant-prereq` warnings are on
  other batches' pages and are not mine.)
- `node tools/coverage-checklist.mjs research/…-batch-2.coverage.json
  --require-destination` → 2 pages, 45 harvested results, 0 errors, 1 expected
  advisory warning (see above).
- `node tools/source-fetch-check.mjs --coverage research/…-batch-2.coverage.json`
  → 4/4 sources fetch-verified (4 newly stamped), 0 documented drops.
- `node tools/item-dependency-levels.mjs check --run frontier-44-…` → only the
  expected `empty scaffold inventory` errors for batches not yet scaffolded; no
  cycle and no label error on any of this batch's 27 items (levels recomputed
  mechanically; max 7). The run-wide check cannot report green until every batch
  is scaffolded.
- `node tools/step1-decisions.mjs check --run frontier-44-…` → 27 ready; my two
  pages contribute no open work. (Other batches still carry open work.)
- `node tools/depcheck.mjs --items-file` (the batch's 19 preserved A-page items)
  → OK, exit 0, plus three `published-local-repair` informational warnings for
  `def-countable-choice`, `def-dependent-choice` and `rem-continuum-hypothesis`
  (recorded 2026-10-06 retirement repairs; no whole-item audit claimed — these
  are honest published states, not defects). The same command scoped to the
  batch's full 27 items reports the 8 B items as `focus-item-unknown`, which is
  the expected pre-authoring state: item validators resolve manifest ids through
  authored item files, and Step 3 writes those files. `node tools/extcheck.mjs
  --items-file` (19 preserved items) → OK, exit 0, no active recorded-not-proved
  items, external references or external fallback records in scope.
- Per-item readiness evidence: 27 records
  `research/frontier-44-…-step1-<id>.json`, each listing the examined dependency
  ids, hashed against the current manifest bytes, the item file and the plan
  entries of its transitive suppliers.

## Cross-batch dependency input

`research/frontier-44-special-representation-examples-28-batch-2.cross-batch-dependencies.json`
is `[]` with a written review note: this batch declares **no** in-run
cross-batch edge. Its pages require only published pages
(`suprema-and-infima`, `order-zorn-and-the-axiom-of-choice` and, for the B page,
its own A page); its item deps resolve either to published items outside the run
or to items of this same batch. The forward references carried by
`def-countable-choice`, `def-dependent-choice` and `rem-continuum-hypothesis`
point to published items on later pages outside this run, not to manifest items.
Consistent with that, the derived ledger
(`research/frontier-44-special-representation-examples-28-cross-batch-dependencies.json`)
shows this batch as a **consumer of nothing in the run** and as the **supplier**
of 11 edges: eight item edges and two page edges into batch 4
(`ex-the-hartogs-number-of-a-finite-set`,
`ex-the-hartogs-number-of-the-naturals-is-a-limit-ordinal`,
`ex-the-one-point-extension-of-a-well-order`, `rem-choice-ledger`, and the two
`ordinals-and-transfinite-recursion` pages requiring this A page), all ten
already carrying batch 4's reviews, plus one page edge into batch 3
(`sequences-and-limits` requires this A page), which is batch 3's own input to
review and is still pending there. The remaining four review rows in the
derived ledger are **orphaned** — `def-cardinal → lem-pigeonhole`,
`def-cardinal → lem-nat-order-is-membership`,
`ex-the-hartogs-number-of-a-finite-set → lem-pigeonhole`,
`cex-transfinite-induction-fails-when-the-minimum-is-exempted →
lem-nat-order-is-membership` — precisely because those two suppliers are
published and page-homed but absent from this batch's manifest (finding F1).
Once F1 is repaired, those four rows resolve into ordinary cross-batch edges
with batch 4 as consumer; batch 4's own file already states the same fact
(«checked 2026-10-08 … not listed among the 19 scaffold items»).

## Remaining uncertainty

- F1's repair is outside this batch's write scope; until an owner-authorized
  repair extends the plan and the manifest to the page's full 22-item
  inventory, Step 9 readiness cannot agree with the scope ledger. I did not
  invent the missing plan entries or edit shared state.
- F2/F3 are prose findings I read directly from the current files; I did not
  trace their git history to decide when the sentences went stale, and I did
  not verify whether the later pages' `requires` chains already give a reader
  of this page a resolving path — the named homes do exist and are published.
- The B page's eight items are scaffold contracts with complete strategies, not
  authored proofs; Step 3 authoring and Step 5 review still owe the full
  verification text. No mathematical acceptance is claimed here.

## Owner correction — F1–F3, 2026-10-08

This addendum supersedes the **current** inventory/hold conclusions above without changing the native Beta observations, source-reading history or dispatch evidence. The owner-delegated reviewer independently confirmed F1–F3 and restored all 22 existing published A items in the canonical inventory and this manifest, with exact current source metadata/dependency/source mirrors and supplier-first page order. Batch 2 now contains 30 records (22 preserved A + unchanged 8 B), maximum dependency level 8. Existing canonical coverage rows now identify the restored registrations. Cross-batch input remains `[]` because this pair has no outgoing cross-batch prerequisites; consumer-owned incoming rows and aggregate refresh remain with root.

The exact two verified published location/prose deltas are separately guarded; published mathematical interfaces, all proof bytes, frontmatter and audit markers remain unchanged. F3 changes commentary inside the Statement section, so whole-section byte preservation is **not** asserted. Original published-preservation hashes remain original evidence. No fresh publication audit is claimed. All four newly selected/patched item paths pass proof-layout (42 steps, zero defects) and precheck (four checked, zero failing); focused manifest policy, rendering, canonical source/home and plan checks pass. Owner readiness records are current for 30/30 owned subjects at recording time; final stable transitive recertification remains root-owned. The run-overlay depsource loader still sees an empty sibling batch-10 page, retained as a live scaffold join limitation.

Exact independent review, corrections, supplier uses, guards, command results and remaining limits: `research/frontier-44-special-representation-examples-28-owner-countability-repair.md`. No missing supplier or mathematical narrowing remains in this pair's assigned F1–F3 repair.

## Owner current-design coverage correction — RA-03 B, 2026-10-08

Current working `research/plan-realanalysis-pages.md` RA-03 explicitly promises Q enumeration, the diagonal construction and algebraic-number countability; the generated legacy locator omitted that label-only controlling heading. Preserving all22 repaired published A records and all8 native B contracts exactly, added4 substantive B-local records: `ex-explicit-enumeration-of-the-rationals`, `lem-finite-real-coefficient-lists-have-at-most-degree-many-roots`, `ex-real-algebraic-numbers-are-countably-infinite`, and `ex-cantor-diagonal-misses-every-listed-binary-sequence`. The diagonal addition supplies the literal missed-sequence construction, which the preserved binary bijection contract does not itself perform. Real algebraic convention is explicit; finite root bound is proved by full local finite algebra/induction strategy; least-code/root-rank construction is choice-free. Native B claims and strategies were not replaced or narrowed.

Pair now34 records, B12. B requires gains only the owner-authorized backward `roots-and-rational-powers` A15 edge, mirrored in canonical B metadata; A requires/inventory unchanged. Nine batch2 cross-input reviews cover the6 new exact roots uses and3 restored-A Remarks-only ordinal/cardinal orientation pointers; no aggregate or another batch input was edited. Twelve B owner-readiness records were current at recording observation. Focused34-item manifest policy passes; coverage54harvested/0errors retains one preexisting A low-yield warning; B page-level plan passes (canonical B inventory remains empty until ordinary splice). Run-overlay depsource remains held by empty sibling batch10, not declared successful. Full independent source/interface review, complete strategies, guards, checks and remaining engine authoring/review duties: `research/frontier-44-special-representation-examples-28-owner-countability-coverage-repair.md`.

## Owner guarded-readiness re-review — held on changed supplier carriers

Fresh current A22+B12review found and corrected two precise wording defects before certification: the native one-point-deletion strategy's codomain is X minus x rather than X; three new algebraic scaffold complement spellings “RA” are now unambiguously “R minus A”. Formal intended claims, proof maps/arguments and deps are retained, with exact original guards/history preserved. Earlier nativeB8byte-preservation reports remain historical observations; this later strategy delta is separately attributed. No published item or page was edited.

Fresh transitive guard closure included1343physical inputs plus12absent B-item carriers (1355guards), only manifests1/2/3/4, no active5/20carrier. A real dependency-ordered owner registrar pass preserved all34prior records and guarded inputs before replacement. It stopped after30writes when batch1manifest raw bytes changed; batch3also changed on follow-up inspection. No completed after-pass seal or34closure was issued. Native readiness was32/34at subsequent observation, with `thm-choice-implies-dependent-implies-countable-choice` and `fs-uncountable-contains-interval` stale. Root retains a new stable pass after all relevant mutations drain. Current explicit manifest policy passes34/0errors and coverage54harvested/0errors with the existing A low-yield warning. Exact substantive review, narrow corrections, guards, partial prefix and hold: `research/frontier-44-special-representation-examples-28-owner-countability-readiness-review.md` and its linked JSON evidence.

## Owner stable readiness r2 — 34/34current

After root's explicit stable handoff following the drained batches1/3guarded70record pass, a fresh genuine dependency-ordered batch2owner registrar pass completed2026-10-08T12:30:34.601Z–12:30:59.833Z. Exactly34subjects are freshly current; all1355physical/absent raw guards and the complete transitive input closure are unchanged. Only current manifests1/2/3/4occur in that closure; active native13/21/28and conservatively completed6/20have no consumed item/manifest intersection. No further protected-content edits occurred.

New immutable before/after evidence: `research/frontier-44-special-representation-examples-28-owner-countability-readiness-before-r2.json` and `research/frontier-44-special-representation-examples-28-owner-countability-readiness-after-r2.json`. The genuine prior34records, original guarded hold and partial registrar history remain intact and SHA-linked. Full actual34subject review and narrow codomain/complement corrections remain in `research/frontier-44-special-representation-examples-28-owner-countability-readiness-review.md`. Batch2source/registrar work is drained; root retains engine gate/transition ownership. This supersedes the earlier current readiness hold without erasing its history or claiming proof acceptance.
