# Unchanged outside-context Step4 presentation alerts

`outsideContextAlertRoute({root, run, batch, group, digestPath, digest, alertIndex})`
recognizes only a separately owner-authorized, exact occurrence disposition. It
records no repair, in-run owning group, mathematical acceptance, audit or native
review coverage. `scope: outside-authored-frontier-context-only` keeps it visible
in a separate derived inventory. The original reader output, digest, judges and
frozen Step3 history remain unchanged. The existing repaired-published route is
not altered.

CLAUDE §9, `STATEMENT-FIRST.md`, and the manifest-only statement checker distinguish
authored subjects from legacy prerequisite context. A presentation observation
about that context can be recorded without making its source an editorial subject.
This is not permission to dismiss a mathematical, missing-hypothesis or diagram
error. The owner must review the **exact reported finding**, classify it, and record
actual reading limits. `no_math_defect: true` means that this reported concern
establishes no mathematical defect; it does not assert a whole-source audit.

The opt-in file is `research/RUN-step4-outside-context-alert-routes.json`:

```json
{
  "version": 1,
  "kind": "owner-routed-step4-outside-context-alerts",
  "run": "RUN",
  "authorized_by": "owner",
  "owner_identity": "/root",
  "recorded_at": "ACTUAL_TIME",
  "routes": []
}
```

Every route contains `source_batch` and `source_group` strings, `digest_path`,
`digest_sha256`, zero-based `alert_index`, the exact `alert`,
`disposition: unchanged-outside-scope-presentation`, a substantive `reason`, and
one of these categories:

- `statement-first-outside-frontier`: legacy link-placement context.
- `legacy-context-formatting`: an individually reviewed formatting concern with
  no mathematical impact; never an automatic classification by severity or prose.

`native_result` and `native_output` are `{path, sha256}` references to the exact
successful immutable reader attempt and corresponding `.last-message.json`.
The full parsed native output must equal the canonical digest byte serialization.
The native completion, batch, group, exact alert and index are checked. The numeric `attempt` and full `evidence_tag` must agree with the immutable attempt/replay filename, and both `exit_code` and `process_exit_code` must be zero.

`before_file: {path, sha256}`, `source_raw_sha256`, `source_guard` and
`source_captured_at` bind the **current owner-boundary capture**, which must be
byte-identical to the current `items/ID.md`. This is explicitly not an invented
native observed-byte attestation. Source ID and status must match an existing
draft or published item. All current run manifests are parsed afresh, and that
source must occur in none of their item inventories. Frontier IDs use the same canonical mixed-case item-ID grammar as `statement-first-check.mjs`. A caller exclusion set cannot
waive this test.

`statement_first_policy: {path, sha256}` binds the actual current
`research/RUN-statement-first.json`, with its exact run/domain/standard.
`owner_evidence: {path, sha256}` binds a structured review with:

```text
version: 1
kind: focused-owner-outside-context-presentation-review
run, owner_identity: /root, reviewed_at
review_result: outside-authored-scope-no-action
category, source_batch, source_group, alert_index, digest_sha256
alert: exact native alert object
source_id, source_status, source_raw_sha256, source_guard
source_boundary: current-owner-capture-not-native-observed-bytes
no_math_defect: true
source_changed: false
mathematical_acceptance: false
audit_coverage_adopted: false
native_coverage_adopted: false
evidence: substantive exact-finding disposition and honest reading limits
```

Capture must follow native completion; review follows capture and precedes receipt
recording. Unknown categories, non-presentation severity, ambiguous routes, stale
or unsafe evidence and changed sources fail closed. Absent authority or no matching
occurrence returns `{ok:false, unavailable:true}` for ordinary strict fallback;
a matched invalid record returns `{ok:false, reason}` without `unavailable`.
The caller must never turn either failure into acceptance. Mathematical and actual
repair routes retain their own requirements.

`authenticateNativeAlertEvidence({...same arguments, route})` exports the common
native authentication only. It throws on invalid bindings and returns `{alert,
native}`; it supplies no disposition or mathematical judgment. A separate real
repair route can reuse it without inheriting this presentation policy.

Run the focused fixtures with
`node --test tools/step4-outside-context-alerts.test.mjs`. These are isolated test
authorities, not production route records, native review coverage or a native gate.
