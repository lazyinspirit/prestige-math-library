# Native pre-report integrity recovery

`reopen-report` repairs a failed `6-report-baseline-v2` boundary before any owner
report has started. It records no review or execution coverage. The native
controller reruns the complete readiness/evidence/report/closeout suffix.

The exact root-relative directory `research/defect-ledger.jsonl.append-lock` is
an operational mutex owned by `tools/defect-ledger.mjs`: it creates `owner.json`
and removes the directory after its append. Report traversal skips that exact
path before `lstat`, including its metadata children. Missing content, missing
evidence, other lock-like names, and errors at every protected path remain fatal.
The ledger itself and the owning run's projected defect history remain sealed.
No other lock exclusion is introduced: per-run published-repair and dependency
merge locks have distinct names and ownership, and are not this global mutex.

## Preconditions

Pause the owning controller, drain its workers, and stop that controller with
native controls. Do not control another run. The canonical `.autopilot/RUN/`
and `research/RUN-dispatch/` directories are required. Prior native readiness
and evidence must have passed; the report-baseline stage must have entered and
failed without closing. Any owner-report/closeout stage, dispatch, artifact,
historical event, or recorded closeout commit refuses recovery.

Commit only the bounded core repair on `main`. HEAD must be a single-parent
commit whose changed paths belong to this exact allowlist:

- `tools/step6-report.mjs`
- `tools/publication-ready.mjs`
- `tools/autopilot-report-reopen.mjs`
- `tools/autopilot/bin/autopilot.mts`
- `tools/autopilot/test/step6-integrity-lock.test.mjs`
- `tools/autopilot/test/report-reopen.test.mjs`
- `tools/STEP6-REPORT-RECOVERY.md`

The report tool must be among the changed paths. Each current core carrier must
match its committed blob, and each parent preimage must match the original
frozen report hash (or be genuinely absent for an added path). `WORKFLOW.md`
remains protected: an unrelated owner's existing uncommitted hunk cannot be
absorbed into this repair.

## Inspection and authorization

Run the installed native CLI with the run's actual configuration:

```
node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts reopen-report \
  --run RUN --state-dir .autopilot/RUN \
  --authorization .autopilot/RUN/report-reopen-authorization.json --inspect
```

Save the exact JSON output as the `guards` property of an authorization file:

```
{
  "authorized_by": "owner",
  "authorization": "The owner's explicit instruction authorizing this bounded repair and fresh native suffix.",
  "guards": { "...": "the complete exact inspection output" }
}
```

The authorization binds version/run, HEAD/parent, original state and index byte
hashes, original protected-file count, original content digest, every owned
item/page hash, prerequisite context hashes, exact core before/after hashes,
every original derived receipt/native result byte hash, exact new proposal
artifacts and the six suffix stages. Proposal additions must be new paths beneath
`research/RUN-owner/step6-integrity-lock-escalation/`; existing evidence cannot
be edited or deleted under that allowance. Sealed foreign ownership retains
its existing scope rules; no unowned prefix or new ownership ledger is admitted.

`publication-ready --verify --inspect` is read-only diagnostic output of the
current expected receipt and its physical/projection digest rows. It grants no
readiness pass and writes no receipt. Recovery replaces only the exact core
rows with their original frozen hashes (removing genuinely added core paths),
then requires the resulting row count and aggregate hash to equal the ORIGINAL
passed readiness receipt. The active run additionally binds the exact historical
core transition `a57016780981116be0ddf303099dfb865d864049`: its fifteen readiness-sealed
paths changed after the original readiness passed and before report snapshot.
Only that pinned ancestor commit's exact unique text hunks may be reversed in
memory. This preserves the independent preexisting WORKFLOW paragraph; no live
source is reversed. The resulting historical preimages are archived. The current
post-transition carriers must still match the original report snapshot.

The shared dependency-review brief may additionally retain an exact original
snapshot prefix followed by foreign Alpha notes. Every recorded owner must have
an unchanged originally sealed scope ledger; appended report links require
matching genuine successful native Alpha result receipts. Their exact bytes and
hashes, prefix length/hash and suffix hash are owner-bound. A changed old brief
byte fails closed. These exact substitutions MUST reconstruct the ORIGINAL
readiness aggregate; unrelated projection or source changes cannot be waived.
All original mathematical content, published supplier context, manifests, ledgers,
evidence and semantic projections must therefore still agree. The content digest and original readiness input hashes must also
match directly. Neither inspector is a substitute gate.

Invoke the same `reopen-report` command without `--inspect`. It repeats all
checks, creates `.autopilot/RUN/report-reopen-before/`, archives the exact
original state, authorization, readiness, evidence, report-integrity snapshot,
proof-layout receipt if present, and all suffix stable/attempt native result
receipts. It verifies every archived hash before mutation and scans guarded
inputs again. Independent foreign progress does not invalidate the recovery;
owned state, mathematical carriers, core repair, proposals, and original derived
receipts must remain exact.

The tool retires those derived artifacts/results, clears only the six suffix
stage/dispatch/gate/refresh/blocker records, and atomically writes paused state
at `6-readiness-v2`. The archive receipt states `native_coverage_created: false`.
Earlier stage records, content and Git/index bytes stay intact. The immutable
original snapshot remains archived; native `snapshot` must create a NEW receipt
through a genuine fresh dispatch. A second recovery cannot overwrite the archive.

Restart/resume the owning controller through ordinary native commands. Complete
the required owner formatting/metadata recertification immediately before each
fresh full native gate battery. Readiness, evidence, baseline, owner report,
render and closeout each execute anew; the old successful dispatch cannot supply
coverage. No final readiness/report/closeout check is waived.

For the active Hopf–Hecke recovery, leave existing closeout ownership/policy
carriers exact until the guarded reopen has archived and retired the original
readiness/report baseline. Register newly committed administrative repair files
in the existing owner-authorized closeout scope only afterward, before the fresh
native readiness dispatch. Editing those old policy files before inspection is
an unexplained protected change and must refuse recovery.


For `hopf-hecke-unfinished-15-2026-10-15`, the exact reconstruction is recorded
in runtime `owner-readiness-historical-reconstruction.json`: fifteen historical
core paths plus the brief's 166270-byte original prefix reconstruct
`72bf828c0a8aec3dd4d637e6f63ea8d0600c12e2a9682a277bfce5ff7d69bd43`.
The original report snapshot contains 409272 paths. The historical core policy
now requires zero confirmed defective items; HH's original closure had zero.
The commit and its stronger policy remain intact.

After root review, integrate and commit only the seven listed repair files.
Stop only the HH controller after native pause/drain. Inspect and authorize the
native reopen, then invoke it. Keep the run-local configuration unchanged:
`tools/autopilot/stages/owner-supervised.mts` and the existing 500000 compaction
settings remain authoritative. Restart using
`node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts start --run RUN --state-dir .autopilot/RUN --detach`,
then the ordinary `resume --run RUN --state-dir .autopilot/RUN`. Before allowing
each paused battery, resolve escalations and run the ordinary
`tools/owner-gate-supervision.mjs --run RUN --state-dir .autopilot/RUN --escalations-resolved`.
The complete fresh fifteen-gate readiness battery must pass; no historical
success is substituted. Prior Step 1–5 and earlier Step-6 evidence is untouched.

Foreign owner-created item ownership can also survive a changed batch manifest.
The shared report checker and recovery inventory require an unchanged originally
sealed per-item owner Step-1 identity, originally sealed successful native Beta
result and page assignment prompt, sealed owed page/batch, exact unique current
manifest and canonical page category/kind, and matching physical source ID, kind,
`origin: pipeline` and `pipeline_run`. Only originally present item paths qualify.
These old records establish ownership only: they grant no fresh authoring
readiness, mathematical acceptance or native execution coverage. Owning readiness
and reporter inputs remain excluded from every foreign exemption.
