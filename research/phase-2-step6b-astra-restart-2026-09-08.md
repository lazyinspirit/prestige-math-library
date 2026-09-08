# Step 6b model and escalation update

Owner request implemented on 2026-09-08. Paused new dispatches before editing.
Step 6b Alpha adjudication and gate repairs now use Astra medium. Other stages
retain their model profiles. The canonical Alpha brief requires acceptance of
sound items, repairs only at 100% confidence, and owner escalation otherwise;
unfamiliar mathematics requires web searches and authoritative source reading.

An `escalated` group decision or explicitly sub-100% `repair_confidence` fails
the owner-escalation gate and returns the engine's owner hold instead of
dispatching automatic repair. Routing checks also reject unresolved decisions.
Existing decision schemas remain compatible; no historical outcomes were edited.

Verification: 39 targeted Step 6 routing/cross/closure tests pass; autopilot
doctor passes; `git diff --check` passes. Full TypeScript checking reports four
missing-confidence argument errors in the untouched
`tools/autopilot/test/scaffold-final.test.mts` (lines 52, 54, 56, 57).

Stopped controller 3508838 through the normal control interface. Its loop
exited and released its lock; SIGTERM then closed the lingering controller
process without terminating its worker. Restarted controller 3705756 at
13:16:56 UTC and verified the resume event and active gate checks.
The existing `gate-batch-2-all` worker remains observed. All 15 author and
Step 6a batches have coverage; Step 6b has not started. Step 5 dependency and
forward-reference gate failures remain under the engine's repair workflow.
