# Proposal only: retained native owner-hold timing

The frozen three-file candidate corrects one false timing assumption in the
successor uncertainty admission guard. Preimages are from46f67f67ef and pinned
in cas-inventory.json. All prior approved packets remain unchanged. The patch
passes git apply --check; no live code, source, runtime state, request, original
report/attempt, admission evidence, gate or control was changed.

The native wrapper can retain one same-group owner request across multiple
owner passes. Its creation time therefore legitimately predates the successful
persistent successor jobs. Requiring observed completion<=request.at falsely
rejects the actual later paused/drained hold.

The private hold validator now receives the immutable admission recorded_at
capture cutoff for both archived and live hold checks. It requires the existing
request to predate that cutoff and preserves the full actual native timestamp
chain: observed.start<=native.start<=native.end<=observed.end<=recorded_at.
The envelope already requires a valid recorded_at not in the future. Exact
current stage, pause/drain, original dispatch identities/rows, request bytes,
progress, actual persistent session, source/context/scope and final first-pack
CAS checks are unchanged. The request is neither replaced nor re-timestamped;
no permit, history rewrite or synthetic paused event is needed.

Validation:

-105 focused tests pass: prior98 plus seven targeted timing cases.
- The retained same-group fixture preserves actual request ID
  2f78316b-07b0-479a-ae56-e07c56261131 and time
  2026-10-20T12:12:19.911Z through initial hold, later successful persistent jobs,
  preview, record and genuine resumed native closure. Request bytes stay exact.
- The identical retained-request test on46f67f67ef fails with the actual observed
  error: hold does not bind exact successful successor executions.
- A fresh request still passes. Future completion/request timestamps, a live
  writer, changed request and tampered native session fail closed.

Only root may CAS-install independently approved candidate bytes at the actual
paused/drained hold and reload the controller, then repeat the real read-only
preview with the same genuine completed repair/current preparation evidence.
Recording and native next-pass scheduling still require all original admission
conditions. Root owns all live work, recertification and commit. Independent
final review is pending; these synthetic checks grant no mathematical credit.
