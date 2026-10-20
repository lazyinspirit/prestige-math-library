# Final timing correction review — approved

Approved the exact three-file `your-proposal/candidate/` packet against committed baseline `46f67f67ef`. Every advertised after hash and existing live before hash was independently verified. `approved-hashes.json` records the inventory and the reviewer's isolated executable snapshot `/tmp/hold-timing-independent-3ist9co8`.

The dry-run failure exposed an incorrect fixture assumption in the earlier review: native `holdBeforeBattery` deliberately retains the existing request for the same group. The actual 5.2 request was created at 12:12:19.911Z, while the successful first persistent owner jobs ended at 12:48, 12:52 and 12:54. Its creation timestamp does not describe the later drained join. Read-only inspection confirmed the real paused/drained 5.2 state and the unchanged genuine request; neither is fabricated or rewritten by this correction.

The private hold validator now uses the immutable admission `recorded_at` as its capture cutoff. The request must already exist by that cutoff, and every exact actual native/observed dispatch completion must precede it. Both archived and live first-freeze checks use that same cutoff. Exact stage, paused state, drain, attempt/coverage identity, native success, persistent session/home, request bytes, progress, completed repair and current input guards remain unchanged. No envelope, budget, gate, permission, state or history transition is relaxed.

Independent results on those exact bytes:

- Focused timing/successor/initial/repeat selection: 105 passed, 0 failed.
- Six independently authored retained-request E2E/tamper cases: 6 passed.
- The identical retained-request E2E fixture on the original `46f67f67ef` module fails at the exact known `hold does not bind exact successful successor executions` guard.

The positive test retains the original same-group request bytes through preview, record, native next-pass creation and genuine persistent owner resume, then closes only after fresh accepted current native reviews. Independent negative variants reject a changed request timestamp, a changed dispatch even when its timestamp looks historical, unpaused state, a future completion after recording, and the wrong persistent home. The focused matrix additionally rejects future completion/request at admission, active writers, changed request identity and altered session IDs. Ordinary uncertain collection remains strict and all prior source, consumer, pending-work, no-progress, certification, judgment and gate requirements remain owed.

No native paused-event reconstruction is needed: this narrow correction binds the actual truthfully captured current paused/drained state and exact native attempts to the immutable admission time. It does not infer a later join from the retained request's earlier creation date or write a false permission.

This is the final timing review within the authorized successor issue's bounded review/repair process. No additional repair round is requested. Root owns the actual stopped/paused, drained CAS installation, fresh process loading, preview/record, native advance helper, resumption and later recertification/gates. This reviewer changed only research evidence and isolated fixtures, and made no live code, control, source, request, state, attempt or gate edits.
