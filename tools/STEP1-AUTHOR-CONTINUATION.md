# Native Step 1 authoring continuation

When a successful author process returned without completing its carriers
because of a resolved operational hold, the owner may request one continuation:

```bash
node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts refresh \
  --run RUN --state-dir .autopilot/RUN --stage 1-scaffold --unit N \
  --reason 'Exact resolved hold and current owner release evidence'
```

The engine must still be in the active, unclosed authoring stage. The unit
must belong to its current manifest assignment, have a genuine successful
original author result and full prompt, and have absent inventory or carriers.
An active writer or already completed carrier set prevents this continuation.
Each unit can receive only one such request; unresolved substantive defects
retain the ordinary owner escalation policy and its review/repair limits.

The fresh native result has a unique label. Its task binds the original result
and complete prompt, preserves original evidence, and supplies the current owner
directions. Deleted temporary session homes are not represented as resumable.
Requests use the single native control slot: wait for acceptance before sending
the next request. A paused controller may record requests before resuming work.

The original report grants no authoring completion. The continuation must
produce actual items, pages, manifests, contracts and current readiness; every
normal review, source check and gate remains mandatory. This control does not
reopen a closed stage, adopt review coverage, change the approved frontier or
authorize publication.
