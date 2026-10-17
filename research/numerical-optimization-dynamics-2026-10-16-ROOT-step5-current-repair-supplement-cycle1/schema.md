# Root-current repair receipt fields

This is a schema description, not an actual receipt, source-review attestation,
native execution or completed repair. Root supplies actual evidence and hashes.
Canonical receipt path: `research/R-step5-v2/repeat-N-owner-current-repairs.json`.
The separate path leaves all existing v1/v2/v3 supplements unchanged and usable.

Envelope fields:

- `version: 4`, `kind: step5-owner-current-repair-supplement`, exact `run`,
  `phase: repeat`, positive numeric `round`, `pack_sha256` equal to the frozen
  repeat pack's ordinary **JSON-object** digest (the report input hash), not
  its raw pretty-printed file SHA.
- `authorized_by: owner`, `reviewed_by: root`, substantive `authorization`
  (at least 80 characters), `native_execution_coverage_adopted: false`.
- Truthful `repair_started_at` at/after the actual paused owner request and
  `completed_at` after the actual correction/current review. These refer to
  root preservation work, not invented native execution dates.
- `creation_state`, `creation_request`, each `{path,sha256}` pointing to the
  actual immutable root archives of the native state/request, plus the actual
  `owner_gate_request_id`. The state must be paused/drained 5.5 before gate or
  collection completion; the request must name sole stage/group 5.5. Native
  collection consumes this history in the same drained stage after resume.
- Nonempty bounded `entries`, the exact `scope`, sorted `expected_review_ids`,
  actual current `reviews`, preserved-classification `decisions`, and actual
  relevant `source_reading`.
- Plain `repairer_identity` naming the real helpers (multiple actual helper
  identities may be named), and `repair_evidence: {path,sha256}` linking their
  real work/root application attribution. This confers no native coverage.

Each entry has `id`, string `unit`, and typed `origin_kind`. Common references
are `{path,sha256}`: `original_report`, `dispatch`, `original_attempt`,
`dispatch_prompt`, `native_source`, `approved_source`, `root_finding`.
Report/result/attempt/prompt references name the actual unchanged canonical
native files; those files remain intact and may also have archival copies.
Source/finding references name actual regular research archives. Native sources
are complete post-native/pre-root carriers. Approved sources are complete
frozen repeat-pack preimages; their guard and Statement/Definition hash must
match `pack.before[id]` and `pack.before_statements[id]`. A mere prose claim or
an unrelated old copy cannot substitute. All digests on references are raw-byte
SHA-256. The loader binds all these references in collection evidence.

`assigned-scope-preservation` additionally has the exact original `rejection`
tuple. It requires a genuinely successful completed assigned confirmed-fatal
repair with non-uncertain `repaired` review and `assigned_repair_complete` /
`repair_complete:true`. `native_source` must match that actual review's guard.
It needs no invented native open finding or uncertain blocker. Each corresponding
root `decisions` row preserves the original tuple, outcome and defect type;
it adds `reviewed_by:root` and actual root reasoning/evidence. Current cases
are unit29 `alg-pseudo-arclength-continuation-with-certified-local-corrector`
and unit65 `alg-implicit-stiff-time-stepper-with-consistent-starts`.

`native-outside-alert` has **no rejection or decision**. It requires an
unassigned existing draft frontier **definition**, unchanged from the repeat
baseline before the root correction. Its `repair_note_index` is a zero-based
index into the actual original native `repair_notes` array; `native_alert` is
the complete literal original string. The string must name the subject path
and explicitly record an outside-lane owner alert, frontier-owner routing, and
that the subject was not edited or fully adjudicated. For the actual unit80
alert the index is 5 and the subject is
`def-mollified-biot-savart-vortex-kernel`. Do not fabricate a canonical open
finding, tuple, whole-item native reading or mathematical verdict from that
prose alert. Root performs and attributes the actual current definition review.

The `root_finding` archive is JSON with `version:1`, exact `id`,
`reviewed_by:root`, `confirmed_defect:true`, `native_finding_claimed:false`,
`native_execution_coverage_adopted:false`, actual `reviewed_at`, substantive
`reason` (at least 80 characters), a `native_excerpt` literally in the full
pre-root source and a `repaired_excerpt` literally in the actual corrected
source (each at least 20 characters). Its kind is respectively
`owner-confirmed-approved-scope-narrowing` or
`owner-confirmed-native-outside-alert`. Assigned scope restoration additionally
requires an `approved_excerpt` literally present in both the authentic approved
source and actual restored carrier. These literal guards supplement genuine
root mathematical review; they do not prove logical scope restoration by
themselves. Root must verify the restored broader contract and special cases.

`scope` contains one unique row per exact affected existing frontier subject.
Primary entries have `role:repair-target`; others have `role:direct-consumer`,
an actual changed `supplier`, and substantive `consumed_clause`. Every row has
an item-specific `reason` and complete `before_source:{path,sha256}`. Its
source guard must match the actual native review if assigned in this wave, or
the repeat pack's original guard if unassigned. Native history must have
exactly one review for assigned subjects and zero for unassigned ones. The
loader compares old/current graphs and propagates only across actually changed
defining clauses, rejecting extra or missing scope IDs. New items and published
source repairs are outside this variant; ordinary maintenance remains owed.

Every scope subject has exactly one genuinely current root review using the
ordinary review fields plus `reviewed_by:root`, exact `post_sha256`,
`review_context_sha256`, `item_sha256`, `context_sha256`. Disposition compares
the current carrier with its true post-native/pre-root source. `source_reading`
entries bind actual archived full text in `source:{path,sha256}`, with
`full_text_reviewed:true` and substantive actual `reason`/`read_extent` (at
least 40 characters each). Local full-text reading is allowed with honest
`familiar:true` and no invented external URL. Any declared `review.source_urls`
must correspond to an actual reviewed entry's HTTPS `url`.

Collection preserves original native reviews/decisions as
`native_current_repair_reviews` / `native_current_repair_decisions` and exact
entry origins as `native_current_repair_origins`. Actual root reviews are
separately retained in `root_current_reviews` and the attributed
`root_current_repair_resolution`; they also supply ordinary current collection
reviews. There is no new outside-alert decision, fatal-count adjustment,
native execution, native report rewrite, judge credit or acceptance stamp.
Actual current defining-clause changes and examined consumers follow ordinary
5.6 consumer work, 5.7 certification and subsequent Sol judging/gates.

Root's real creation archive inventory already exists at
`research/numerical-optimization-dynamics-2026-10-16-ROOT-step55-preservation-integration-cycle1/creation-archives.json`.
This proposal read its path/schema without modifying it or recomputing hashes.
It does not claim that its three native-post source captures are also the
pre-native approved sources: root must bind the separately authenticated
approved preimages. Referenced native files retain their original canonical
paths; creation state/request and source archives use their actual archive paths.
