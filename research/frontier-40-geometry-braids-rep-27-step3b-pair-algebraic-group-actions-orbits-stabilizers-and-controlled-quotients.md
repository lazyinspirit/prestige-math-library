# Step 3b authoring record — `algebraic-group-actions-orbits-stabilizers-and-controlled-quotients`

Run `frontier-40-geometry-braids-rep-27`, batch 15, pair orders 877 (A) / 878
(B). Scope: the 13 scaffold items of this pair, 11 on the A page and 2 on the
examples companion. All 13 item files and both page files are written. Step-3b
decisions are recorded for all 13 items: 8 `accept` at confidence 1 and 5
`escalate` to the owner for one reading-order blocker (documented below). Every
authoring gate passes; the escalation is a plan-order decision that only the
owner can make.

## Completed items (dependency levels from `item-dependency-levels.mjs`)

| level | item | decision |
|---|---|---|
| 0 | `def-quotient-sheaf-and-representable-quotient` | escalate (owner: reading order) |
| 1 | `def-algebraic-group-action-and-scheme-theoretic-stabilizer` | accept |
| 1 | `lem-fppf-quotient-representability-criterion` | escalate (owner: reading order) |
| 1 | `thm-fppf-quotient-for-affine-finite-locally-free-equivalence-relation` | escalate (owner: reading order) |
| 2 | `lem-action-map-fibres-and-stabilizer-subscheme` | accept |
| 3 | `lem-orbit-map-faithfully-flat-and-orbit-locally-closed` | accept |
| 3 | `lem-projective-space-action-from-linear-representation` | accept |
| 3 | `prop-faithfully-flat-orbit-map-represents-coset-quotient` | accept |
| 3 | `cex-orbit-set-need-not-represent-quotient-sheaf` | accept |
| 4 | `lem-orbit-map-fibres-and-stabilizer-dimension` | escalate (owner: reading order) |
| 4 | `thm-homogeneous-space-for-smooth-affine-group` | escalate (owner: reading order) |
| 5 | `rem-quotient-sheaf-versus-representing-scheme` | accept |
| 5 | `ex-gl2-quotient-by-diagonal-torus` | accept (repaired during this lane) |

Item `dependency_level` frontmatter and the batch manifest
(`…-batch-15.pages.json`) now agree with the computed levels; the manifest item
`deps` arrays were re-synced from the item frontmatter, preserving every sibling
row. Pages: `library/scheme-theory/algebraic-group-actions-orbits-stabilizers-and-controlled-quotients.md`
and `…-examples.md`, both `status: draft`, list exactly the 13 owned items.

## Repairs made in this lane

1. **`ex-gl2-quotient-by-diagonal-torus` (B-page dependency removed).** The
   scaffold used `lem-product-of-projective-lines-is-a-smooth-projective-surface`,
   which lives on a B/examples page of batch 21, producing a hard
   `b-leaf-content` error naming this item. It was replaced by published
   A-page suppliers and a local argument: `lem-projective-line-curve-and-divisor-basics`
   (P^1 smooth proper), `thm-smooth-morphisms-stable-base-change-composition`,
   `cor-base-change-finite-type-and-products`,
   `lem-separated-stable-under-base-change` / `-composition`,
   `lem-separatedness-of-open-and-closed-immersions`,
   `lem-flat-morphisms-stable-base-change`,
   `lem-base-change-locally-finite-type-presentation`, `def-proper-morphism`.
   `[F1]` now records that the diagonal torus is standard smooth (so the local
   product trivialization gives q flat and lfp), `[F5]` now proves Y smooth,
   separated, finite type and the flatness/finite presentation of
   `Z ×_k U → U`, step 2.1 cites `[F1], [F5]`, and step 4.1 derives the
   smooth/separated/finite-type and dimension statements for `G/T` from
   `lem-orbit-map-faithfully-flat-and-orbit-locally-closed` and the
   orbit-stabilizer dimension identity. The `b-leaf-content` depcheck error is
   cleared; scoped depcheck reports no error naming any batch-15 item.
2. **Forward references declared (fwdcheck).** Six items link published items
   whose home pages come later in plan reading order. Declared in
   `forward_refs`, not `deps`: `lem-nonaffine-fppf-descent-of-scheme-morphisms`
   in `def-quotient-sheaf-and-representable-quotient` and
   `lem-fppf-quotient-representability-criterion`;
   `thm-nonaffine-finite-flat-affine-equivalence-quotient` in
   `thm-fppf-quotient-for-affine-finite-locally-free-equivalence-relation`;
   `lem-nonaffine-connected-group-geometrically-connected` in
   `lem-orbit-map-fibres-and-stabilizer-dimension`;
   `lem-nonaffine-subgroup-scheme-stabilizer-of-line` in
   `thm-homogeneous-space-for-smooth-affine-group` (all five on #885, and all
   five then escalated to the owner as the reading-order blocker below); and
   `lem-finite-etale-algebra-module-presentation-and-rank` (#911) in the
   counterexample `cex-orbit-set-need-not-represent-quotient-sheaf`, which
   fwdcheck permits for consequence kinds. No `forward-undeclared`,
   `forward-in-deps` or `forward-unused` defect remains for batch 15.
3. **Manifest/bookkeeping.** Manifest `deps` re-synced; `dependency_level`
   added to all 13 item frontmatters; the two coverage low-yield warnings are
   the owner-recorded, explained declines (44 dispositions reviewed at Step
   3a) and are unchanged.

## Cross-batch reconciliation (batch 13, in-run supplier pair)

Batch 13's `def-rational-representation-and-comodule-of-an-affine-group-scheme`
and `lem-general-linear-group-scheme-and-its-coordinate-ring` are now authored
on disk; their statements supply exactly the interfaces consumed by this pair:

- `lem-projective-space-action-from-linear-representation` steps 1.1/2.2 use
  the group-functor definition `r: G → GL_V`, `GL_V(R) = Aut_R(V_R)` (Definition
  (a)) and the GL_n identification (supplier step 6.1).
- `thm-homogeneous-space-for-smooth-affine-group` steps 1.1/2.1 use the same
  rational-representation interface through Chevalley's line-stabilizer input.
- `ex-gl2-quotient-by-diagonal-torus` `[F1]`/steps 1.1–1.2 use
  `GL_n(R)` = invertible matrices and the standard representation of
  `lem-general-linear-group-scheme-and-its-coordinate-ring`.

The four rows of `…-batch-15.cross-batch-dependencies.json` were updated from
`open` to `verified` with this evidence. The consumer decisions are hash-bound
to the current supplier bytes; if batch 13 is edited again, the engine will
reopen the affected consumers automatically.

## Reading-order blocker (the five escalated items)

`tools/fwdcheck.mjs` marks five published suppliers used load-bearingly by spine
items of this pair as *later* material (`forward-on-spine`), because their home
page `nonaffine-algebraic-groups-barsotti-chevalley-and-abelian-varieties` has
plan order 885, after this pair's 877/878:

| consumer | consuming step(s) | supplier (#885) |
|---|---|---|
| `def-quotient-sheaf-and-representable-quotient` | Definition (represented functors are fppf sheaves) | `lem-nonaffine-fppf-descent-of-scheme-morphisms` |
| `lem-fppf-quotient-representability-criterion` | steps 1.1, 1.3, 2.1 | `lem-nonaffine-fppf-descent-of-scheme-morphisms` |
| `lem-orbit-map-fibres-and-stabilizer-dimension` | step 1.1 via `[F1]` | `lem-nonaffine-connected-group-geometrically-connected` |
| `thm-fppf-quotient-for-affine-finite-locally-free-equivalence-relation` | step 2.1 | `thm-nonaffine-finite-flat-affine-equivalence-quotient` |
| `thm-homogeneous-space-for-smooth-affine-group` | step 1.1 | `lem-nonaffine-subgroup-scheme-stabilizer-of-line` |

All five suppliers are **published and complete** and their statements match
the uses exactly (the Step 3a owner review read them and called item 4 an
"exact recorded interface" and the descent lemma's closing sentence "exactly
the sentence item 1 uses"). The defect is only their position in the pre-splice
plan. The engine's own splice notes say that blocking a forward edge is a
"reading-order change" decided owner-only, so these five items are recorded as
`escalate`, and each keeps the supplier declared in `forward_refs` (nothing is
hidden; fwdcheck reports the mismatch loudly rather than silently).

Remedies for the owner, in order of preference: **(i)** reorder `plan-spec.json`
so page `nonaffine-algebraic-groups-barsotti-chevalley-and-abelian-varieties`
precedes #877 (or move this pair after it); then no item change is needed and
the five decisions can be re-recorded as `accept`. **(ii)** If the order is
deliberate, authorize a redesign of the five items. Items 1, 2 and 4 would then
need a locally authored fppf-descent-of-morphisms interface plus the affine
quotient theorem; that material exists only on the later pages in this library,
so remedy (ii) is substantially larger than (i). The transitive consumers
(`lem-action-map-fibres-and-stabilizer-subscheme`, `prop-faithfully-flat-…`,
`rem-quotient-sheaf-versus-representing-scheme`, `cex-orbit-set-…`, `ex-gl2-…`)
are otherwise complete and are recorded `accept`.

The examples-page forward reference of `cex-orbit-set-need-not-represent-quotient-sheaf`
to `lem-finite-etale-algebra-module-presentation-and-rank` (#911) is *not* a
defect: fwdcheck explicitly permits example/counterexample/remark/corollary
items to rest on later material, and the link is declared.


## Checks actually run (all on the final on-disk files)

- `node tools/proof-layout.mjs` (all 13 items, one command): 13 items, 68
  steps, 0 defects.
- `node tools/tsx-run.mjs tools/precheck.mts <13 items>`: 10 checked, 0 failing.
- `node tools/rendercheck.mjs <13 items + 2 pages>`: OK, 15 files.
- `node tools/proof-contract.mjs …-batch-15.proof-contracts.json --strict`:
  0 errors, 0 warnings, 13/13 items checked; every `[F#]` link has an exact
  quote from the cited item's own statement/definition section and every
  numbered step is mapped to a derivation with its stated inputs; all eight
  standard boundary cases are disposed per item.
- `node tools/content-policy.mjs …-batch-15.pages.json`: 13 scoped items,
  0 errors, 0 warnings.
- `node tools/depcheck.mjs --items-file scratchpad/f40b15/scope.json --json`:
  0 errors naming any batch-15 item; the two remaining errors at handoff are
  other lanes' rows (`lem-blowup-charts-of-the-quadric-cone` and one further
  `b-leaf-content` row).
- `node tools/manifest-deps.mjs …-batch-15.pages.json`: 13 items, 0 errors.
- `node tools/coverage-checklist.mjs …-batch-15.coverage.json`: 0 errors,
  2 documented low-yield warnings.
- `node tools/item-dependency-levels.mjs check --run frontier-40-geometry-braids-rep-27`:
  no batch-15 item named; the only run-wide error at handoff is another lane's
  `cex-lie-root-system-does-not-record-full-root-datum` (level 29 vs computed 28).
- `node tools/validate-plan.mjs research/plan-spec.json`: OK — acyclic page
  order; no item-level cycles, forward references, B-page dependencies or
  unresolved ids among the 1420 pages with item lists.
- `node tools/citecheck.mjs <13 items>`: one heuristic `order-axioms` warning on
  `thm-fppf-quotient-for-affine-finite-locally-free-equivalence-relation`
  step 1.1, where "reflexivity" refers to an equivalence relation, not an
  order; no declared prerequisite is missing and no repair is required.
- `node tools/fwdcheck.mjs --items-file scratchpad/f40b15/scope.json`: exactly
  five `forward-on-spine` errors, the reading-order blocker above; every such
  link is declared in `forward_refs`, no `forward-undeclared`, `forward-in-deps`
  or `forward-unused` defect remains for batch 15, and the counterexample's
  forward link is permitted by kind.
- `node tools/step3-decisions.mjs check --run … --phase final`: 0 batch-15
  items unresolved; all 13 decisions current.

## Choice accounting

AC assumptions are stated in each item where used and are not smuggled in:
`def-quotient-sheaf…` (sheafification/represented-sheaf suppliers),
`lem-fppf…` and `prop-…` (represented-sheaf and geometric suppliers; the
criterion itself only forwards faithful-flatness + lfp instances),
`thm-fppf…` (published affine quotient theorem),
`lem-action-map-fibres…` (AC only for the closed-point selection in the
finite-field trivialization of a nonempty fibre),
`lem-orbit-map-faithfully-flat…` / `lem-orbit-map-fibres-and-stabilizer-dimension`
(generic flatness and constructibility),
`lem-projective-space-action…` and `ex-gl2…` (projective-bundle supplier),
`thm-homogeneous-space…` (generic flatness, constructibility, Chevalley),
`cex-orbit-set…` (inherited from the quotient-sheaf supplier),
`rem-…` (inherited). `def-algebraic-group-action-…` explicitly carries no
choice assumption.

## Open obligations and concerns

- **Owner adjudication of the five reading-order escalations (above).** This is
  the only outstanding authoring-adjacent blocker for this pair; remedy (i)
  (reorder the two pages) clears it without touching any item.
- **Ledger refresh done.** `node tools/frontier-dependency-ledger.mjs refresh
  --run frontier-40-geometry-braids-rep-27` initially crashed parsing
  `items/lem-upper-unitriangular-coordinate-ring-is-coconnected.md` (batch 18;
  unquoted title containing a colon). That sibling file was repaired by its own
  lane, and the refresh now exits 0; the unified ledger
  `research/frontier-40-geometry-braids-rep-27-cross-batch-dependencies.json`
  carries the four batch-15 rows with `reviews:[{status:"verified"}]` for
  supplier batch 13. Nothing outstanding here; the transient parse failure is
  recorded only as a run observation for the serial lead.
- **Cross-batch hash binding.** The three consumers of batch-13 suppliers
  (`lem-projective-space-action…`, `thm-homogeneous-space…`, `ex-gl2…`) are
  accepted against the current supplier bytes; a later edit of batch 13 will
  reopen those decisions by design.
- **No new items, no new suppliers.** This lane added no item IDs; the only
  supplier changes are the A-page replacements recorded above. No owner
  decision was overridden and no Recorded result was consumed.

## Notes for Step 4

No shared plan/prose amendment is required by this pair. The batch-15
cross-batch input contains four `verified` rows; the two coverage warnings are
the already-reviewed declines. Pre-splice plan mismatches: none found by
`validate-plan`; the only run-level accounting item is the malformed batch-18
item above, which is outside this pair's scope and must not be edited here.
