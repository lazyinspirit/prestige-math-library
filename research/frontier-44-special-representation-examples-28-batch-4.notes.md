# Batch 4 — `ordinals-and-transfinite-recursion` / `…-examples` construction evidence

Run: `frontier-44-special-representation-examples-28` (role beta, batch-4 dispatch).
Owned outputs: `research/frontier-44-special-representation-examples-28-batch-4.pages.json`
(22 preserved published A-page items + 12 new B-page items), the coverage record
`…-batch-4.coverage.json`, 34 current Step-1 readiness records, the consumer-batch
dependency input `…-batch-4.cross-batch-dependencies.json`, and this note.

Status: **34 items `ready`, 0 escalated**, subject to the staleness caveat in
“Unresolved uncertainty” below. These records are Step-1 construction evidence,
not mathematical approval; Step 3 owns authoring and independent review. No
published content, shared plan, engine state or verdict was edited.

## Controlling design, plan and binding direction

The dispatch lists three design locations. All three were read in full context;
none of them is the pair’s design section, and their orders are stale:

- `research/plan-algebra-track-expansion.md` L360 is a spot-check row inside the
  AL renumber table (§4, AL-D1/AL-D3/AL-D4): it records the ordinals page’s
  shifted order `183 → 201` for the AL splice. Renumbering note only.
- `research/plan-algebra-track.md` L388 is row 12 (`dimension`) of the LA
  well-definedness-obligations table: it records that `def-cardinal` is homed on
  `ordinals-and-transfinite-recursion` at order 183 and therefore cannot be
  cited from order 70. A hierarchy note for linear algebra, not this pair’s
  design.
- `research/plan-category-theory-track.md` L442 is §2.4 “Set-theoretic and
  order-theoretic prerequisites, all authored”: it names
  `ordinals-and-transfinite-recursion` as a prerequisite of the category-theory
  track and identifies the results consumers rely on, `thm-transfinite-recursion`
  and `thm-burali-forti`. Among the three this is the only one that states
  obligations on the pair’s content, so it controls **for the pair’s consumer
  interface**; it is a prerequisite description, not a construction design.

The pair itself is the published legacy singleton described in
`research/plan-set-theory-completion-track.md` §7 (“the read-only audit covered
… the two singleton A pages”; the registered B row was an empty placeholder).
The content authority for the A page is therefore its published inventory and
Markdown, and for the B page the **binding owner authoring direction**
`research/frontier-44-special-representation-examples-28-owner-authoring-direction.md`,
which overrides the stale placeholder: “Scaffold substantive, source-grounded
examples and counterexamples covering the companion A page’s concepts and
boundary cases; author complete verification arguments.” `plan-spec.json`
controls machine placement: orders 348/349, kind A/B, category `foundations`,
companions, `requires`. The dispatch asked for the conflict record, which
follows.

### Conflicts found between the designs and the current plan

1. **Orders.** The three design files carry orders 183/201/225/243 for this
   page; `plan-spec.json` assigns 348/349 after later splices. The plan controls;
   no renumbering was applied.
2. **`requires`.** `plan-set-theory-completion-track.md` §7.2.1 asked for
   *both* `countability-and-uncountability` and
   `linear-independence-bases-and-dimension` on the ordinals page. The canonical
   plan, as corrected by the owner drift repair of 2026-10-08
   (`frontier-44-…-owner-drift-prerequisite-repair.md`), declares only
   `linear-independence-bases-and-dimension`; countability is reached
   transitively (linear independence → vector spaces → rings → divisibility/gcd
   → monoids/groups → countability → Zorn) and a direct edge would be a
   redundant prerequisite. The plan controls; the transitive route was
   recomputed and all 12 new items’ dependencies were checked to lie inside the
   corrected closure (18 pages including the pair itself).
3. **B-page inventory.** The plan’s B entry is an empty historical placeholder;
   the binding direction commissions the page. The 12 new items were scaffolded
   into the manifest; the Step-4 splice is the ordinary route into the plan.
4. **Published A inventory preserved.** The manifest mirrors the published
   page’s inventory exactly — same 22 ids, same order as `plan-spec.json`, with
   `title` and the items’ actual `deps` copied verbatim from the item files
   (programmatically, byte-for-byte) and only `dependency_level` added. Raw
   pre-run hashes live in `…-published-a-preservation.json`; no published byte
   was touched.

## Inventory, dependency levels and cross-batch edges

- A page: 22 items (the published `items:` list plus the two `examples:` false
  statements and `rem-choice-ledger`), in the plan’s id order. B page: 12 items
  (8 examples, 4 counterexamples). Both far below the 100-item cap.
- `dependency_level`: A page 0–7 (`def-well-order` 0 … `rem-choice-ledger` 7,
  `def-cardinal` 6); B page `cex-the-lexicographic-order-on-integer-pairs-…` 1,
  `ex-an-explicit-well-ordering-of-the-integers` 2,
  `cex-the-shift-…` 4, `ex-lexicographic-orders-…` / `ex-the-one-point-extension-…`
  / `ex-the-mostowski-collapse-of-a-finite-chain` /
  `cex-the-collapsing-recursion-…` 5, and five items at 6
  (`ex-the-finite-von-neumann-ordinals-…`, `cex-a-set-of-ordinals-that-is-not-transitive`,
  `ex-the-hartogs-number-of-a-finite-set`, `ex-the-hartogs-number-of-the-naturals-…`,
  `cex-transfinite-induction-fails-…`). Distribution over the 34 items: level
  0 ×1, 1 ×5, 2 ×4, 3 ×4, 4 ×6, 5 ×7, 6 ×6, 7 ×1. Maximum level: 7
  (`rem-choice-ledger`).
- Labelling rule applied: level 0 when no dependency is an item of any manifest
  of this run; otherwise 1 + the maximum level of the in-run dependencies.
  Out-of-run published suppliers do not raise a level. Because batches 1 and 2
  (the other preserved published pages) were scaffolded concurrently, the labels
  were computed against their published inventories with the items’ actual file
  dependencies before they landed, and then re-verified against the live
  manifests; `node tools/item-dependency-levels.mjs check --run …` reports no
  label error for batch 4 in either state.
- Cross-batch input (`…-batch-4.cross-batch-dependencies.json`, 14 rows): the
  induced page edges to batch-2 `countability-and-uncountability`, and the item
  edges `def-cardinal → lem-nat-order-is-membership, lem-pigeonhole`;
  `rem-choice-ledger → def-countable-choice, def-dependent-choice`;
  `ex-the-one-point-extension-of-a-well-order → def-equinumerous`;
  `ex-the-hartogs-number-of-a-finite-set → lem-pigeonhole,
  thm-schroder-bernstein, def-equinumerous`;
  `ex-the-hartogs-number-of-the-naturals-… → def-countable,
  lem-subset-of-countable, def-equinumerous`; and
  `cex-transfinite-induction-fails-… → lem-nat-order-is-membership`. All rows are
  `open` for the Step-5 read: the supplier statements were read at scaffold time
  to build the examples, but no consumer proof exists yet and no supplier
  interface is certified here.
- Observation for the batch-2 owner: `lem-pigeonhole` and
  `lem-nat-order-is-membership` are published prerequisites homed on the
  countability page but are **not** among the 19 items in the current batch-2
  manifest, so the run does not audit them as scaffold items even though
  batch-4 consumers use them. Not a defect in batch 4’s scope; recorded so the
  cross-batch review is not blind to it.
- After `node tools/frontier-dependency-ledger.mjs refresh --run …`, the
  unified ledger records 10 batch-4 edges and lists exactly four of this
  batch’s input rows as `orphaned_reviews`: `def-cardinal →
  lem-nat-order-is-membership`, `def-cardinal → lem-pigeonhole`,
  `ex-the-hartogs-number-of-a-finite-set → lem-pigeonhole` and
  `cex-transfinite-induction-fails-… → lem-nat-order-is-membership`. The cause is
  the observation above: those suppliers have no manifest home in this run, so
  the derived ledger cannot bind them to a supplier batch. Recommended
  disposition for the Step-8 lead: treat them as out-of-run published
  suppliers, or have the batch-2 owner add the two items to its inventory;
  the dependency itself is real and is declared in the manifest and item files.

## Mathematical review performed (scaffold level)

Each new item was designed against the published A-page items after reading
their full Statements and proofs (well-orders, initial segments, rigidity,
comparability, transfinite induction/recursion, ordinals and trichotomy,
Mostowski collapse, limit ordinals and ω, Hartogs, the well-ordering/choice
equivalence, `def-cardinal`, `rem-choice-ledger`, and both false statements),
plus the published suppliers used: `lem-pigeonhole`, `lem-nat-order-is-membership`,
`def-equinumerous`, `def-countable`, `lem-subset-of-countable`,
`thm-schroder-bernstein`, `def-natural-numbers`, `def-int-order`,
`thm-int-ordered-ring`, `def-abs-value`, `lem-int-abs-properties`,
`def-axiom-of-foundation`, `def-axiom-schema-of-replacement`,
`thm-omega-is-peano-system`, `lem-nat-nonzero-is-successor`,
`thm-well-ordering-principle` and `lem-nat-embeds-int`.

- Every new item’s reference sketch was checked against the source treatments
  (Marks §§3–9; Moore §§3–8) and, where the source states only the general
  result, the instance was proved from published local items, not quoted.
- AC/TI hygiene: all 12 new items are choice-free; the three relying on
  Foundation/Replacement state it (`cex-the-collapsing-recursion-…`), and the
  Hartogs examples restate the choice-free character of `thm-hartogs`. No item
  uses `proved_here: false`, `external_refs` or any external-dependency record.
- B-leaf rule: no new item depends on another B-page item; nothing outside the
  B page depends on any new id. All new dependencies lie inside the closure of
  the B page’s `requires` (verified mechanically against `plan-spec.json`).
- Boundary scope: finite ordinals and ω = ⋃ω; a set of ordinals that is not an
  ordinal; lexicographic well-orders and their failure over Z; explicit
  well-ordering of Z; rigidity failing for a total non-well-order; collapse of a
  finite chain and the failure of the collapsing recursion on Z; the Hartogs
  number of a finite set and of ω; transfinite induction with the least element
  exempted.

No confirmed defect in the examined published items was found. Two
non-defects were checked and closed explicitly: `lem-pigeonhole`’s
`forward_refs: [def-cardinal]` is used only in its Remarks (“orientation only”),
which SCHEMA permits; and `def-ordinal`’s dependency on
`def-axiom-of-foundation` is licensed by a wikilink in its Remarks even though
the definition itself does not use Foundation.

## Sources and coverage

Two independent primary treatments were read in full and stamped for each page:

- A. Marks, *Set Theory* (Berkeley, revised 2026-01-31), 106-page lecture-note
  set, `https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf`,
  §§3–9, printed pp. 15–42.
- J. T. Moore, *MATH 6870: Set Theory* (Cornell), 101-page lecture-note set,
  `https://pi.math.cornell.edu/~justin/Limited2Cornell/lecture_notes_historic.pdf`,
  §§3–8, printed pp. 6–22.

`coverage-checklist` result: 2 pages, 97 harvested results, **0 errors**, 1
advisory warning (`coverage-low-yield` on the preserved A page: 4/69 scaffolded
there because its results are `already-published`; the B-page entry accounts for
the 12 `included` instances plus 4 canonical boundary rows). Every harvest row
has a disposition; deferrals name concrete plan destinations
(`ordinal-arithmetic`, `cardinal-arithmetic-and-cofinality`,
`well-founded-relations-rank-and-the-cumulative-hierarchy`); out-of-scope rows
carry specific reasons.

`source-fetch-check --stamp`: 4/4 sources fetch-verified (Marks 2 594 888 bytes /
106 pages / sha256_16 `84d316ec6c979f1e`; Moore 608 192 bytes / 101 pages /
sha256_16 `17ad5c1bb83c3b8a`). **Honest incident:** the first stamp run was
against a mistyped Marks URL that omitted the `/notes/` path segment and
returned 404 six times; those attempts are preserved per source under
`mistyped_url_attempts` with an explanatory `note`, and are not counted as
recovery attempts against the source, because they never requested it. The
correct URL was then fetched in full and verified. The retry allowance for the
real source was therefore not consumed or reset; no availability claim is made
that the fetch evidence does not support.

## Checks actually run (2026-10-08)

| check | command (abridged) | result |
|---|---|---|
| coverage | `node tools/coverage-checklist.mjs …-batch-4.coverage.json --require-destination` | 0 errors, 1 low-yield warning (preserved A page) |
| manifest deps (whole run) | `node tools/manifest-deps.mjs …-batch-*.pages.json` | 0 missing, 0 errors (128 items at the time of the check; sibling batches continue to land) |
| manifest policy (whole run) | `node tools/content-policy.mjs --manifest-only …-batch-*.pages.json` | 0 errors, 0 warnings (128 scoped items at the time of the check) |
| plan | `node tools/frontier-item-gate.mjs --run … --tool validate-plan` | passes: acyclic, no forward refs/B-leaf edges/unresolved ids among 8 populated pages; 48 still-empty sibling pages noted |
| external references | `node tools/extcheck.mjs --items-file <the 22 A items>` | OK: 0 recorded-not-proved, 0 resting on them. The frontier-wide extcheck currently fails only on sibling items whose files do not exist yet (expected before Step 3) |
| dependency levels | `node tools/item-dependency-levels.mjs check --run …` | no batch-4 label errors; remaining errors are `empty scaffold inventory` for batches not yet scaffolded |
| source fetch | `node tools/source-fetch-check.mjs --coverage …-batch-4.coverage.json` (and `--stamp`) | 4/4 sources fetch-verified |
| cross-batch ledger | `node tools/frontier-dependency-ledger.mjs refresh --run …` | refreshed; 10 batch-4 edges bound, 4 rows orphaned with the recorded cause (see above) |
| readiness | `node tools/step1-decisions.mjs check --run …` | all 34 batch-4 items closed at the time of writing (see caveat) |

`depcheck` was not used as a batch check: it validates authored `items/` and
`library/` content, which this dispatch did not modify; the 12 new items have no
files until Step 3, and the engine’s item gates run then.

## Unresolved uncertainty and owner-relevant notes

1. **Readiness-record staleness under concurrent writers.** `itemHash` walks the
   transitive closure of `deps ∪ justified_by ∪ forward_refs` over both manifests
   and item files, so every time a sibling batch writes its manifest or an item
   file in that closure changes, the affected readiness records must be
   re-recorded. During this dispatch the records were written, invalidated by
   concurrent batch-1/2 writes, and then re-recorded; all 34 were closed on the
   last check. If sibling writers drain later than this dispatch, the scaffold
   join may need one more refresh pass for the affected A-page items; the
   records are intentionally re-recordable (they are `ready`, not owner-held).
2. **Sibling dependency-shape assumption.** The A-page labels assume sibling
   batches list their preserved published inventories with the items’ actual
   file dependencies. Live manifests for batches 1 and 2 already do so for every
   dependency that matters here, and the level check agrees; a sibling that
   listed plan-scaffold deps instead would lower four batch-4 labels
   (`def-order-isomorphism` → 0, `def-limit-ordinal` → 3,
   `lem-omega-least-limit-ordinal` → 4, `rem-choice-ledger` → 6, and three B
   items by one each). Recorded so the scaffold join can be diagnosed quickly.
3. **No page split, no escalation, no source drop.** All twelve new items are
   local to the B page and none is a load-bearing supplier for another page.
4. The owner direction’s completion clause is met: the A page’s files,
   inventory, publication state and mathematics were preserved; the B page was
   scaffolded substantively with sources and complete verification strategies;
   new content remains draft and no publication or push is authorized here.

## Owner correction of the integer well-order example

Readiness review found that the equal-absolute-value tie clause lacked a!=b, making a positive integer precede itself. The statement now explicitly requires distinct a,b in that tie, giving precisely 0,1,-1,2,-2,... . The strategy correctly says that minimal absolute value zero puts 0 in S and makes it least, without claiming S={0}. The general initial-segment formula is restricted to nonzero a, with W_<0 empty. These are local repairs to ex-an-explicit-well-ordering-of-the-integers; no current manifest item depends on this B-leaf example. The existing published integer absolute-value/order and natural well-ordering suppliers suffice, and no choice principle is introduced. Actual pre-amendment manifest and notes bytes are frozen in the owner-readiness-repair-before-batch4.json carrier; native readiness history is preserved separately. Final owner readiness refresh awaits the supervisor's drained-writers signal.
