# Initial metadata history at the paused 5.1 boundary

This adapter is an explicit root opt-in for a completed initial wave whose
metadata labels must be corrected before owner recertification and native
collection. It grants historical byte continuity only. It supplies no current
review, mathematical acceptance, judge credit or execution coverage.

The native recorder is `recordInitialMetadataHistory(root,run,payload)` in
`tools/step5-initial-metadata-history.mjs`. Root invokes it after applying only
the previewed metadata repairs, while the actual run is paused and drained in
`5.1-adjudicate`, before initial collection and before any impact pack/dispatch.
The recorder requires the matching actual native owner request. It copies the
native state/request itself; it rejects synthetic caller-provided creation
state and records no invented native timestamp or filesystem-mtime authority.

The payload supplies a concrete reason (at least 80 characters), `carriers`
and the sole `source_level` record. An illustrative shape is:

```json
{
  "reason": "ACTUAL ROOT EXPLANATION OF THE OBSERVED INITIAL METADATA FAILURE",
  "carriers": [
    {"path": "research/RUN-batch-11.pages.json", "before_file": "research/EXACT-ORIGINAL-BATCH-11.json"}
  ],
  "source_level": {
    "id": "ex-box-muller-finite-midpoint-tail",
    "before": 2,
    "after": 1,
    "before_file": "research/EXACT-NATIVE-REVIEWED-BOX-MULLER.md"
  }
}
```

These strings illustrate the schema and confer no evidence. Include every
actually corrected manifest, here batches 11, 33, 42, 48 and 63. Root preserves
exact original full files before any edit. The immutable receipt is
`research/RUN-step5-v2/initial-1-owner-metadata-history.json`, with archives under
`initial-metadata-history/`. Its sealed bindings cover all actual initial
reports, stable and immutable worker results, frozen initial inventory/pack,
baseline/verdicts, creation state/request, all repair-time in-run source
carriers, all repaired-time manifests, and original corrected-file preimages.

Validation reconstructs the complete repair-time graph and ordinary in-run
dependency levels. Each current manifest row must match source kind, title,
deps and level, with exact inventory and unique ownership. Corrected
manifests may differ only in source-mirrored title, deps and dependency_level;
their page/item inventory, kind and all other fields remain identical. The
sole source change must be exactly the unique literal numeric
`dependency_level: 2` to `dependency_level: 1` replacement in the Box–Muller
example, with every other byte retained. Its computed level must actually be
one. Its exact original source guard must match the genuine original repaired
review row and confirmed-nonfatal decision. No old review/context is refreshed.

Every frozen initial unit must retain its actual successful report and native
dispatch identity, role, coverage and completion ordering against the
archived paused state and request. Worker results must match their immutable
attempts and successful Sol6.1/high terminal execution. Genuine mechanical
zero-work units retain their tool-result and empty-assignment meaning.
Original reports, packs and verdicts remain unchanged.

During the original initial collection, live sources/manifests must equal the
validated corrected archives. Live state must be drained in 5.1 or pre-dispatch
5.2; the actual native 5.1 collection gate runs unpaused after owner permission
and resume. Creation and recording still require the actual paused, drained
5.1 hold authenticated by the archived state/request. Collection authenticates
that earlier creation and does not require or imply another pause. All original
native handoff, current graph and no-impact guards remain mandatory.
Historical supporting-metadata lookup returns
only the exact bound original manifest preimage. It does not demand that
later genuine owner repairs leave the live metadata forever unchanged:
subsequent history checks authenticate sealed before/after archives and the
repair-time source graph. Current review/certification still uses actual live
bytes and ordinary currency rules.

Collection validates the one original review against its exact historical
source guard, preserves that row unchanged in `historical_metadata_reviews`,
and removes it from the current `reviews` inventory. The collection's `post`
snapshot uses actual current source hashes. An explicit
`metadata_history_current_review_targets` field queues the label-changed item
into the first genuine 5.2 owner pack even though no Statement/Definition
changed. Native current review, certification and current judging remain
mandatory; certification rejects missing current owner review for the item.

Installation changes the workflow's static imports. Restart the controller
and workflow host in fresh processes at the real paused/drained boundary
before resuming. No native history or frozen pack is rewritten to load code.
