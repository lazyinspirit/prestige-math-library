# frontier-27 · Alpha step 4 adjudication

Lane: `step4-adjudicate-4`  
Run date: Monday, August 31, 2026

I read `research/frontier-27-alpha-step4.task.md`,
`research/frontier-27-splice-refusals.json`,
`research/frontier-27-splice-6.json`,
the owning batch scaffold `research/frontier-27-batch-6.pages.json`,
the current `research/plan-spec.json`,
the authored items
`items/fs-a-degreewise-split-short-exact-sequence-of-complexes-has-zero-connecting-map.md`
and
`items/ex-a-degreewise-split-sequence-with-nonzero-connecting-map.md`,
and the live output of
`node tools/validate-plan.mjs research/plan-spec.json`.

`research/frontier-27-splice-refusals.json` is empty on current disk
(`research/frontier-27-splice-refusals.json:1-4`). The live Step-4 state still
showed one underlying seam in batch `6`: pre-edit `validate-plan` emitted the
matching diagnostics `[b-leaf]`, `[page-cycle]`, and `[undeclared-prereq]`
because an A-page false statement depended on a B-page example homed on its own
companion page. `research/frontier-27-splice-6.json:6-16` correspondingly
showed both HA-4 pages with `requires_reconciled: false`.

## Edge review

| edge | evidence | disposition | edit | validation result | blocker |
|---|---|---|---|---|---|
| `long-exact-sequences-in-homology -> long-exact-sequences-in-homology-examples` via `fs-a-degreewise-split-short-exact-sequence-of-complexes-has-zero-connecting-map -> ex-a-degreewise-split-sequence-with-nonzero-connecting-map` | The A page `long-exact-sequences-in-homology` sits at order `365.043` and currently requires only `mapping-cones-cylinders-and-chain-triangles-examples` and `the-diagram-lemmas-in-an-abelian-category` (`research/plan-spec.json:124833-124842`), while the companion B page `long-exact-sequences-in-homology-examples` sits later at order `365.044` and homes `ex-a-degreewise-split-sequence-with-nonzero-connecting-map` (`research/plan-spec.json:125227-125252`). The authored false statement already closes directly from the two A-page results `thm-the-canonical-mapping-cone-sequence-is-degreewise-split-short-exact` and `prop-the-cone-connecting-map-agrees-with-the-shifted-identity-up-to-the-declared-sign` (`items/fs-a-degreewise-split-short-exact-sequence-of-complexes-has-zero-connecting-map.md:10-46`); the B-page example uses those same two A-page results for its own local verification (`items/ex-a-degreewise-split-sequence-with-nonzero-connecting-map.md:10-46`). So the examples-page witness was not load-bearing. | Unneeded B-page dependency. Adding a page edge to the later companion `-examples` page would have been a forward-edge/page-cycle owner blocker, and the task explicitly requires rerouting an `-examples` dependency through an A-page result instead. | Replaced the stale example dependency with the two genuine A-page supports in the owning scaffold (`research/frontier-27-batch-6.pages.json:356-363`) and synced the same reroute into the current canonical plan (`research/plan-spec.json:125186-125193`). No new page edge, reading-order change, or scope change was introduced. | Post-edit `node tools/validate-plan.mjs research/plan-spec.json` returned `OK`; the `[b-leaf]`, `[page-cycle]`, and `[undeclared-prereq]` rows are gone. The command still emits repository-wide `redundant-prereq` advisories only. | none |

## Validation

Command run:

```bash
node tools/validate-plan.mjs research/plan-spec.json
```

Result on the post-edit bytes:

- `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 622 page(s) with item lists.`
- `NOTE — 671 planned page(s) carry no item list yet; their reading order is guaranteed, but their item dependencies are not yet asserted.`
- Repository-wide `redundant-prereq` advisories remain outside this dispatch.

## Summary

- Splice refusals in `research/frontier-27-splice-refusals.json`: `0`.
- Live Step-4 blockers at the start of this turn: `1` underlying edge, surfaced as `1` `[b-leaf]`, `1` `[page-cycle]`, and `1` `[undeclared-prereq]`.
- Backward page edges added: `0`.
- Item-level dependency reroutes applied: `1`.
- Owner blockers: none.
