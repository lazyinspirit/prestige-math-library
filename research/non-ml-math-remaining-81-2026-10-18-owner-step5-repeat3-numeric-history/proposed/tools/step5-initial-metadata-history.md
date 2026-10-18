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

## Opt-in version 2: computed draft dependency levels

Version 1 remains the sole hardcoded Box–Muller route above. An explicit payload `version:2` instead supplies nonempty `source_levels` (and no `source_level`):

```json
{
  "version": 2,
  "reason": "ACTUAL OWNER EXPLANATION OF THE COMPUTED METADATA DEFECT",
  "carriers": [{"path":"research/RUN-batch-N.pages.json","before_file":"research/EXACT-NATIVE-MANIFEST.json"}],
  "source_levels": [{"id":"EXISTING_DRAFT_ID","before":9,"after":2,"before_file":"research/EXACT-FULL-PREEDIT-SOURCE.md","historical_basis":"native-post"}]
}
```

The recorder captures all complete current in-run sources and every current run manifest itself, plus actual paused/drained 5.1 state/request, frozen initial pack/frontier/baseline/verdicts and every successful original handoff. Callers cannot supply creation or current-graph archives. No initial collection or impact freeze/dispatch may exist. Numeric values and counts above illustrate fields, never authorize edits.

Every listed source must be a true draft with unchanged ID/kind and every byte unchanged except one canonical top-level `dependency_level: INTEGER` numeric substitution. Both values are distinct nonnegative integers and the new value must equal the ordinary computed dependency level. Published source labels are expressly excluded: they require ordinary recorded published repair policy and the published-maintenance bridge. No body, Statement, Definition, deps, title, provenance, verification or other source edit is authorized by this adapter.

`historical_basis:native-post` requires the full before source guard to equal the unique actually assigned original native report post and immutable final-output post; disposition, context hash and explicit uncertainty must agree. `historical_basis:baseline-keep` requires no original assignment or review, exact initial/baseline guard and the unique unchanged accepted Luna verdict. It creates no original review or rejection. The complete current draft graph must match these original post/baseline guards except the explicitly listed numeric substitutions; omitted numeric changes and unrelated current draft source changes fail closed.

The complete source/manifest graph retains the original frozen item inventory and all original units. Every current source and manifest label must agree with the computed acyclic in-run dependency graph. Corrected manifests retain exact page/item identities, kind and other fields. Only current-source-backed title/deps/level mirrors may change. An actual nonempty `justified_by` mirror may additionally be corrected for a draft whose complete source is authenticated by its exact assigned original report/final native post (or numeric preimage). This reflects already-authored native source metadata; it never authors a new logical edge. Existing absent/empty optional justification mirrors are semantically empty and should remain untouched. Null/type/nonempty mismatches are not normalized.

Every original native supporting manifest hash must match its preserved full before archive, including absolute native evidence paths. Missing changed carriers or forged preimages fail. Historical lookups retain these exact archives after later native work without pinning the live graph forever. All nonempty units additionally bind original prompt/log bytes and the exact immutable final-message identity; no session journal payload is consumed.

Collection returns `historicalGuards` only for these drafts, preserves genuine original review rows in `historical_metadata_reviews`, and supplies no new current review. Unassigned baseline items have no invented historical row. The collection post remains actual current source bytes; existing decisions and repair counters retain their original meaning. Every changed draft ID is queued in `metadata_history_current_review_targets` for ordinary fresh native 5.2 review, certification, Sol judgment and gates, even though no public mathematical interface changed.

When published repairs also change mirrors in the same manifest, preserve layering: keep original native manifests for this v2 history, apply draft-only mirrors, archive that intermediate state as the published bridge's metadata preimage, then apply only the authenticated published mirrors. Both receipts capture the same final complete current graph. This v2 carrier may span original-native to final source-backed mirrors; the published carrier remains strictly published-only. Do not overwrite historical pins or rewrite old reports.


## V3: repeat-adjudication numeric labels

`recordRepeatMetadataHistory(root, run, round, payload)` is a separate opt-in V3
lane at the actual paused/drained `5.5-adjudicate` hold for that exact round,
before its collection or first impact pack/dispatch. Initial V1/V2 APIs and their
strict original behavior remain unchanged. The V3 marker is
`research/RUN-step5-v2/repeat-ROUND-owner-metadata-history.json`, with durable
captures in `repeat-ROUND-metadata-history/`.

The payload has `version:3`, a concrete `reason`, `prior_certificate` path,
`carriers:[{path,before_file}]`, and `source_levels` with ID, old/computed numeric
levels, exact `before_file` and typed historical basis. `native-post` requires a
unique genuinely assigned successful native report/final-output post and context.
`unassigned-before` requires no assigned/reported review and exact current
repeat-pack before guard. It does not invent a keep verdict for an item with no
current judge tuple. Original false-positive decisions/no-edit observations remain
exact; a numeric change never becomes a mathematical repair or new judgment.

The recorder captures the actual state/request and all successful original unit
handoffs, immutable native attempts/prompts/terminal outputs, current source and
manifest graph itself. It validates one numeric dependency_level substitution
per true draft, exact source-backed numeric-only manifest changes, independent
complete graph computation and no unexplained source/manifest residual. The
prior immutable native certificate must be linked by the pack's pinned judge;
its already-certified creations remain graph context without new scope/creation
credit. Published/status/body/interface/dependency/title edits are outside this
lane. Changed native supporting pins require separate authentic treatment; V3
cannot quietly invent their old bytes or rewrite declarations.

Root first installs the reviewed guarded numeric candidates and records truthful
application evidence, then calls the recorder against actual current bytes. No
owner-supplied state/current graph archives or fake historical timestamps are
accepted. Creation is paused; the subsequent ordinary native first collection can
run unpaused but drained at the exact same stage/round. Wrong stage, active writers,
collection/impact already started or altered evidence are rejected.

Collection validates original rows against exact historical guards while `post`
remains actual current. Original decisions persist, affected old rows move to
`historical_metadata_reviews` with zero current credit, and every changed numeric
source becomes a mandatory `metadata_history_current_review_targets` entry. The
ordinary next impact pack binds the actual source-phase/round collection and
assigns genuine fresh reviews. Completed closure and certification cannot use old
source reviews to replace current target rows. Gates, fatal thresholds, published
maintenance and scientific interface propagation retain their existing rules.
