# Initial reporting owner context recovery

`tools/step5-reporting-owner-recovery.mjs` optionally admits an unavailable initial
reporting context at **impact-initial, round 1, lane 2**. Its ordinary repeat/lane1
recovery remains unchanged. Default initial dispatch and reader ownership remain
unchanged. This is a new native context, never a resume or adoption of the old
session's reviews.

Before installation, root pauses and drains the native controller at its actual
5.2 boundary, waits for every writer, and obtains independent code review. Restart
the controller after installing reviewed code; a running controller may retain
cached modules. Do not change runtime counters, gates, old reports, packs,
receipts, prompts or native attempts. Root owns current-source preparation and
recertification. No mathematical source edits are part of this adapter.

Admission requires the real paused/drained 5.2 state and owner-gate request,
three completed successful immutable Sol6.1/high initial executions and their
original collection, the exact reporting lane's assigned review inventory and
nonempty native downstream_pending, null original session_home, and explicit
root-confirmed unavailable-context evidence. Any genuine lane2 reader ownership
conflicts rather than silently moving to a replacement context. A recovery must
be recorded before the first followup pack/progress exists.

Preparation is the existing root preparation/inputs pair: metadata_checked:true,
ok:true, native_execution_coverage:false and mathematical_review_claimed:false,
with the exact manifest-selected source vector, raw/guard hashes and manifest
guards. Contexts are computed from current source by the recorder. Root's separate
unavailable evidence contains run, phase, round, unit, actual session_id,
session_home:null, original_context_unavailable:true, journal_payloads_read:false,
matching_session_paths:[], confirmed_by:'/root', confirmed_at, a substantive reason,
and observation:{path,sha256} referring to the actual read-only observation.
Never read credentials or archive journal payloads to manufacture this evidence.

At the actual hold, call `previewReportingOwnerRecovery(root,run,'impact-initial',1,
'2',payload)` first. The payload has exactly reason, preparation_file,
preparation_inputs_file and session_unavailable_evidence_file. Root checks the
result against actual original assignments and all pending consumers, then calls
`recordReportingOwnerRecovery` with the identical arguments and files. Preview
writes nothing. The recorder archives actual state/request/current hashes and
binds original native evidence; it grants zero coverage. It fails if current
sources, manifests, originals, stage, pause, writer drain or first-followup state
changed. The write-once receipt is
`research/R-step5-v2/impact-initial-1-owner-reporting-context-recovery.json`.

Ordinary native advance-impact then creates the next pack. All original lane2
assignments (including unaffected suppliers) plus all its pending consumers must
receive fresh full native review in supplier-first order by one new persistent
lane2 reporter. The home is
`.autopilot/R/step5-reporting-owner-sessions/impact-initial-r1/u2`.
The first dispatch has no resumeSession. Later passes resume the actual collected
new reporting session, including when that lane has an empty assignment. Old
reviews remain historical. Full closure recomputes current contexts and verifies
successful genuine fresh reports/attempts, session continuity and native coverage.
Additional supplier interface changes expand consumer duties normally. Existing
repair limits, no-progress holds, certification, judgment and final gates apply.

Regression commands:

```
node --test tools/step5-initial-reporting-owner-recovery.test.mjs tools/step5-reporting-owner-recovery.test.mjs
node --test tools/step5-impact-recovery.test.mjs tools/step5-owner-review-withdrawal.test.mjs tools/step5-certification-consumer.test.mjs
node tools/tsx-run.mjs --test tools/autopilot/test/step5-reader-concerns.test.mts tools/autopilot/test/step5-groups.test.mts
```
