# Step 6 judge-stamp regression: focused operational disposition

The stamper caused invalid YAML in one statistics item. Its empty-flow branch
unconditionally inserts `, judge`, converting valid `verification: {}` into
`verification: {, judge: {...}}`. Reapplying no longer matches the shallow flow
pattern because the inserted judge is itself nested; fallback then inserts a
second top-level verification mapping. The observed current item has both
signatures. Its earlier native source archives explicitly contain the original
empty map. No mathematical finding is involved.

Read-only inventory selected all 809 current manifest IDs. Exactly one has the
leading comma or multiple top-level verification keys:
`lem-product-prior-predictive-and-fixed-truth-data-laws-equivalent`. It is also
the only scoped flow-verification item. The complete selected ID list and exact
current findings are recorded in `inventory-and-resolution.PROPOSED.json`.
Native preparation attempt 2 ended unsuccessfully at
`2026-10-15T19:39:33.727Z`; the observed dispatch was drained. Step 6 calls the
stamper with `--apply` before metadata/render checks, which explains why those
checks found the newly introduced corruption.

`native-stamper-and-item.PROPOSED.patch` and `files/` propose the complete focused
repair. The current exact malformed item is retained as `item-before.md`.
Replace only its malformed flow line and duplicate judge block with:

```yaml
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-15}}
```

The genuine native ledger contains that item's Luna keep verdict dated
`2026-10-15T16:11:44.968Z`. The proposal retains its model, verdict and date,
adds no audit evidence, and does not manufacture currency or acceptance.
All other metadata and the complete mathematical body remain byte-identical.
There are no other verification audit fields in the replaced region.

The writer now distinguishes empty from nonempty maps, replaces an existing
flow judge before its unstamped-flow path, and refuses unsupported complex flow
updates rather than adding a duplicate key or losing audit fields. Proposed
frontmatter is parsed before writing. `stripJudgeStamp` also handles a sole
flow judge without a leading comma, restoring the exact original empty map,
including inner spacing. This companion change is necessary: a syntactically
valid first field alone would otherwise change the normalized judged content.
No ledger/verdict rewrite or widened currency policy is proposed.

Root integration should archive the exact current stamper, item-hash module,
Step 6 documentation, affected item and applicable ownership receipt before
applying the proposal. Refresh only genuine current native bindings and the
code/metadata ownership evidence. No Statement/Definition, dependency,
manifest promise or quoted contract section changes, so no consumer proof
repair is needed. Run the mandatory explicit proof-layout on the affected item
and actual fresh Step 6 preparation/full final battery under the engine's normal
repair route. Preserve both failed native preparation attempts and original
judgments. Any changed source/evidence invalidates the previous preparation.

This work inspected only the statistics scope for corruption and native code
for its cause. No live source/code/metadata edits, stamper/preparation calls,
tests, gates, model calls or foreign-session actions were performed.
