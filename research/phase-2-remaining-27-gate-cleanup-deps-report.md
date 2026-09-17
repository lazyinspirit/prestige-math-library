# Step-3 gate cleanup report — depcheck `b-leaf-content`, run `phase-2-remaining-27`

Role `alpha-high`, label `step3b-cleanup-depcheck`, covers
`real-forms-and-real-semisimple-lie-algebras`. Written 2026-09-17.

## Result

`node tools/depcheck.mjs` exits 0:

```
depcheck: 20087 items (18999 published), 1196 pages
...
OK — no cycles, all references resolve, no draft items on published pages.
```

All 26 `[b-leaf-content]` errors are gone, and the run is still clean for
cycles and references (0 `b-leaf-content`, 0 `item-cycle`, 0 `page-cycle`,
0 `dep-unresolved`, 0 `link-unresolved`). The 287 remaining warnings are all in
the four classes the dispatch excluded (`multi-home`, `cited-not-in-deps`,
`orphan`, `b-leaf-legacy`); none was touched.

`node tools/tsx-run.mjs tools/author-check.mts phase-2-remaining-27 <b>` for
every batch whose page files this pass edited:

| batch | pages edited | result |
|---|---|---|
| 11 | `cartan-subalgebras-and-root-space-decompositions`, `root-systems-dynkin-diagrams-and-cartan-killing-classification` | `ok: true`, fresh fingerprint `8e2ce52072301eed…` (precheck, rendercheck, content-policy-items, proof-contract all exit 0) |
| 13 | `real-forms-and-real-semisimple-lie-algebras` | `ok: true`, fresh fingerprint `46b5b2a310b46f9b…` (same four gates, exit 0) |

The two published pages edited (`lie-groups-invariant-fields-and-the-exponential-map`,
`semisimple-lie-algebras-cohomology-and-levi-theory`) are in no batch manifest of
this run, so there is no batch author-check for them; `node tools/rendercheck.mjs`
passes on both, and on the other three edited pages. `node tools/depsource.mjs`
and `node tools/pathcheck.mjs` also exit 0.

## The 26 errors and the fix applied

Every one of the 26 errors is a load-bearing dependency, so fix (b) (delete the
`deps` entry) was not available for any of them: in each consumer the supplier
is declared in a `Facts & Assumptions` / `Given` line, and for 24 of the 26 that
line's tag is cited in a numbered proof step (mechanical check), the two
exceptions being the single `[L1]` line of `ex-iwasawa-decomposition-of-sl-two-r`,
whose content (SL₂(ℝ) embedded, SO(2) closed connected) is consumed by that
item's step 4.1. Each row below is one error; the supplier is multi-homed, and
the B page keeps listing it (fix (a)).

| # | consumer item | supplier | supplier's B page | new non-B home |
|---|---|---|---|---|
| 1 | `ex-compact-and-split-real-forms-of-sl-two-c` | `ex-killing-form-of-sl-two` | semisimple-lie-algebras…-examples | semisimple-lie-algebras-cohomology-and-levi-theory |
| 2 | `ex-compact-and-split-real-forms-of-sl-two-c` | `ex-unitary-and-special-unitary-lie-groups` | lie-groups…-examples | lie-groups-invariant-fields-and-the-exponential-map |
| 3 | `ex-compact-and-split-real-forms-of-sl-two-c` | `ex-general-and-special-linear-lie-groups` | lie-groups…-examples | lie-groups-invariant-fields-and-the-exponential-map |
| 4 | `ex-cartan-involution-and-k-plus-p-for-sl-n-r` | `ex-general-and-special-linear-lie-groups` | lie-groups…-examples | lie-groups-invariant-fields-and-the-exponential-map |
| 5 | `ex-cartan-involution-and-k-plus-p-for-sl-n-r` | `ex-orthogonal-and-special-orthogonal-lie-groups` | lie-groups…-examples | real-forms-and-real-semisimple-lie-algebras (see obstruction note) |
| 6 | `ex-polar-cartan-decomposition-of-sl-n-r` | `ex-general-and-special-linear-lie-groups` | lie-groups…-examples | lie-groups-invariant-fields-and-the-exponential-map |
| 7 | `ex-polar-cartan-decomposition-of-sl-n-r` | `ex-orthogonal-and-special-orthogonal-lie-groups` | lie-groups…-examples | real-forms-and-real-semisimple-lie-algebras |
| 8 | `ex-polar-cartan-decomposition-of-sl-n-r` | `ex-matrix-exponential-as-the-lie-group-exponential` | lie-groups…-examples | lie-groups-invariant-fields-and-the-exponential-map |
| 9 | `ex-compact-and-split-cartan-subalgebras-of-sl-two-r` | `ex-general-and-special-linear-lie-groups` | lie-groups…-examples | lie-groups-invariant-fields-and-the-exponential-map |
| 10 | `ex-compact-and-split-cartan-subalgebras-of-sl-two-r` | `ex-orthogonal-and-special-orthogonal-lie-groups` | lie-groups…-examples | real-forms-and-real-semisimple-lie-algebras |
| 11 | `ex-iwasawa-decomposition-of-sl-two-r` | `ex-general-and-special-linear-lie-groups` | lie-groups…-examples | lie-groups-invariant-fields-and-the-exponential-map |
| 12 | `ex-iwasawa-decomposition-of-sl-two-r` | `ex-orthogonal-and-special-orthogonal-lie-groups` | lie-groups…-examples | real-forms-and-real-semisimple-lie-algebras |
| 13 | `ex-iwasawa-decomposition-of-sl-two-r` | `ex-matrix-exponential-as-the-lie-group-exponential` | lie-groups…-examples | lie-groups-invariant-fields-and-the-exponential-map |
| 14 | `ex-restricted-roots-of-sl-n-r` | `ex-general-and-special-linear-lie-groups` | lie-groups…-examples | lie-groups-invariant-fields-and-the-exponential-map |
| 15 | `ex-restricted-roots-of-sl-n-r` | `ex-diagonal-cartan-subalgebra-and-roots-of-sl-n` | cartan-subalgebras…-examples | cartan-subalgebras-and-root-space-decompositions |
| 16 | `ex-a-nonreduced-bc-root-system-from-a-real-form` | `ex-unitary-and-special-unitary-lie-groups` | lie-groups…-examples | lie-groups-invariant-fields-and-the-exponential-map |
| 17 | `ex-vogan-diagrams-for-real-forms-of-sl-three-c` | `ex-general-and-special-linear-lie-groups` | lie-groups…-examples | lie-groups-invariant-fields-and-the-exponential-map |
| 18 | `ex-vogan-diagrams-for-real-forms-of-sl-three-c` | `ex-unitary-and-special-unitary-lie-groups` | lie-groups…-examples | lie-groups-invariant-fields-and-the-exponential-map |
| 19 | `ex-vogan-diagrams-for-real-forms-of-sl-three-c` | `ex-diagonal-cartan-subalgebra-and-roots-of-sl-n` | cartan-subalgebras…-examples | cartan-subalgebras-and-root-space-decompositions |
| 20 | `cex-two-nonconjugate-real-cartan-subalgebras` | `ex-general-and-special-linear-lie-groups` | lie-groups…-examples | lie-groups-invariant-fields-and-the-exponential-map |
| 21 | `cex-same-complexification-with-different-killing-form-signatures` | `ex-killing-form-of-sl-two` | semisimple-lie-algebras…-examples | semisimple-lie-algebras-cohomology-and-levi-theory |
| 22 | `ex-hyperbolic-space-as-so-zero-n-one-mod-so-n` | `ex-orthogonal-and-special-orthogonal-lie-groups` | lie-groups…-examples | real-forms-and-real-semisimple-lie-algebras |
| 23 | `ex-hyperbolic-space-as-so-zero-n-one-mod-so-n` | `ex-general-and-special-linear-lie-groups` | lie-groups…-examples | lie-groups-invariant-fields-and-the-exponential-map |
| 24 | `ex-hyperbolic-space-as-so-zero-n-one-mod-so-n` | `ex-matrix-exponential-as-the-lie-group-exponential` | lie-groups…-examples | lie-groups-invariant-fields-and-the-exponential-map |
| 25 | `prop-restricted-root-systems-may-be-nonreduced` | `ex-classical-root-systems-in-euclidean-coordinates` | root-systems…-examples | root-systems-dynkin-diagrams-and-cartan-killing-classification |
| 26 | `prop-restricted-root-systems-may-be-nonreduced` | `ex-weyl-groups-of-b-n-and-d-n-as-signed-permutation-groups` | root-systems…-examples | real-forms-and-real-semisimple-lie-algebras (see obstruction note) |

Load-bearing locators (consumer → the Facts/Given line the proof uses):
rows 1, 21 → Killing form of 𝔰𝔩₂ ([L4], [L2]); rows 2, 16, 18 → the
unitary/special-unitary matrix groups and 𝔰𝔲(p,q) ([L2], [L1], Given); rows
3, 4, 6, 9, 11, 14, 17, 20, 23 → GLₙ/SLₙ real matrix Lie groups ([L1], [L4]);
rows 5, 7, 10, 12, 22 → 𝔰𝔬(n) = {X : Xᵀ + X = 0}, SO(n) closed connected
([L4], [L1], [L2]); rows 8, 13, 24 → matrix exponential = Lie-group
exponential ([L4], [L3], [L6]); rows 15, 19 → diagonal Cartan subalgebra and
roots εᵢ−εⱼ of 𝔰𝔩ₙ(ℂ) ([L4], Given); rows 25, 26 → the coordinate models
Bᵣ, Cᵣ and W(Bᵣ) as signed permutations ([L5]).

## Structural obstruction: two suppliers cannot sit on their companion A page

For two of the eight suppliers the fix (a) placement is impossible without a
hard `page-cycle`, because the supplier depends directly on a *sibling example
of its own pair* whose first home is that pair's B page:

- `ex-orthogonal-and-special-orthogonal-lie-groups` depends on
  `ex-general-and-special-linear-lie-groups` (its `[F1]`, load-bearing);
- `ex-weyl-groups-of-b-n-and-d-n-as-signed-permutation-groups` depends on
  `ex-classical-root-systems-in-euclidean-coordinates` (its `[L1]`,
  load-bearing).

`depcheck` computes the induced page graph from an item's **first** home in
reading order, and `…-examples.md` precedes `….md` in the sorted library walk,
so the sibling's home is the B page. Adding the supplier to its companion A
page then gives that A page the edge A → B, while B → A already exists (B-page
items depend on A-page items). Reproduced with only those two placements, the
gate reported:

```
[page-cycle] CIRCULAR PAGES: lie-groups-invariant-fields-and-the-exponential-map -> lie-groups-invariant-fields-and-the-exponential-map-examples -> lie-groups-invariant-fields-and-the-exponential-map
[page-cycle] CIRCULAR PAGES: root-systems-dynkin-diagrams-and-cartan-killing-classification -> root-systems-dynkin-diagrams-and-cartan-killing-classification-examples -> root-systems-dynkin-diagrams-and-cartan-killing-classification
```

Fix (b) is unavailable (the dependencies are load-bearing, above) and fix (c)
forbids removal, so those two suppliers were multi-homed on the A page of the
pair whose items actually consume them, `real-forms-and-real-semisimple-lie-algebras`:
the induced edges are backward-only (real-forms → lie-groups/root-systems B
pages, and neither B page can reach the real-forms page), so the page graph
stays acyclic, and both B pages still list both items. This is the only
deviation from fix (a)'s "companion A page" wording in this pass; items 5, 7,
10, 12, 22 and 26 above are its six edges.

## Files edited (complete)

1. `library/differential-geometry/lie-groups-invariant-fields-and-the-exponential-map.md`
   — `examples: []` → `[ex-general-and-special-linear-lie-groups,
   ex-unitary-and-special-unitary-lie-groups,
   ex-matrix-exponential-as-the-lie-group-exponential]`.
2. `library/differential-geometry/semisimple-lie-algebras-cohomology-and-levi-theory.md`
   — added `ex-killing-form-of-sl-two` to the existing `examples:` list, before
   the two entries already there.
3. `library/differential-geometry/cartan-subalgebras-and-root-space-decompositions.md`
   — `examples: []` → `[ex-diagonal-cartan-subalgebra-and-roots-of-sl-n]`.
4. `library/differential-geometry/root-systems-dynkin-diagrams-and-cartan-killing-classification.md`
   — new `examples:` key with `[ex-classical-root-systems-in-euclidean-coordinates]`.
5. `library/differential-geometry/real-forms-and-real-semisimple-lie-algebras.md`
   — `examples: []` → `[ex-orthogonal-and-special-orthogonal-lie-groups,
   ex-weyl-groups-of-b-n-and-d-n-as-signed-permutation-groups]`.

No item frontmatter, no proof text, no item body, no manifest row, no coverage
file, no proof contract, no cross-batch-dependency file, and no other page was
edited. No manifest row needed a change: the fix is a home change, and the
batch manifests do not model A-page `examples:` lists. The A-page listings
appear in `depcheck` as the expected `multi-home` warnings (eight items, one
each).

## Open obligations for Step 4 / the owner

1. **`validate-plan`'s published `b-leaf` check still sees these edges.** That
   check uses the first disk home, not all homes, so it reports every
   multi-homed supplier whose B page sorts first — including the three
   suppliers re-homed by commit `096923b25` (`ex-classical-simple-lie-algebras-and-their-killing-forms`,
   `ex-su-two-and-so-three-have-isomorphic-real-lie-algebras-locally-but-different-global-groups`,
   `ex-su-two-to-so-three-as-a-covering-homomorphism`) and the eight from this
   pass. Evidence: splicing this run's manifests into a copy of
   `research/plan-spec.json` and running `node tools/validate-plan.mjs <copy> --repo .`
   reports 41 `b-leaf` lines with the authored item deps (25 from this pass's
   suppliers, 15 from `096923b25`, 1 allowlisted legacy edge). Proposed
   remedy (owner-only code change, not made here): have that check flag a
   published dep only when **every** home of the target is a B page, matching
   `depcheck`'s `homesOf` reading of the leaf rule. Alternative: owner-licensed
   re-home receipts for the affected supplier pairs.
2. **Plan/manifest carriers do not model A-page `examples:` lists.** The Step-4
   splice copies manifest item lists only, so these homes live solely in the
   page files; nothing in this pass created a manifest/plan mismatch, but the
   serial reconciliation should record the page-level carrier.
3. **Ledger.** `research/published-consumer-supplier-ledger.md` needs the
   serial-reconciler entry for this home update (the previous identical repair
   is recorded there under "Published example home updates for b-leaf legality
   — 2026-09-17"); a sibling lane owns that file and it was not edited here.
4. **Optional supersession of the two consuming-pair homes.** If the owner
   prefers the canonical structure, the two items in item 5 of the edit list
   can be replaced by an owner-licensed `--rehomed` receipt moving each
   supplier *and* its sibling dependency onto their companion A pages (a
   move-only change; it alters those B pages' inventories) — the current
   placement was chosen because it clears the gate without touching any
   published item or any B-page inventory.

## Observation (provisional, not a finding acted on)

`ex-iwasawa-decomposition-of-sl-two-r` declares `[L1]` but no numbered step
carries the `[L1]` tag (its group-level content is consumed by step 4.1); the
item is an in-run draft, batch 13's proof-contract gate passes, and this was
not treated as a defect in this pass. Flagged only for Step 5's readers.
