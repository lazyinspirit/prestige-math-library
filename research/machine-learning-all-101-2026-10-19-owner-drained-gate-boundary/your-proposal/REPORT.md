# Drained owner gate boundary proposal

Proposal prepared entirely in `/tmp/ap-drained-boundary-f6hhesjr`; live executor,
stages, content and runtime history were not edited. No actual run gates,
recertification or engine controls were invoked. `inventory.json` binds five
preimages and six candidate paths; `packet-sha256.json` binds packet artifacts.

The last worker can finish after `onProgress` has observed a live worker and
before `tick`'s group join. Owner supervision previously checked holds only
through `onProgress`, so the join could build gate descriptors while the
request/consumed permission still belonged to an earlier battery.

The candidate adds optional `Stage.beforeGates`, invoked in `runGroupGates`
after the existing inflight, adopted-process and pending-refresh barriers and
before any pending descriptor is built. It checks current group unit completion
for opted-in hooks. Completed/waived members do not repeat hooks. Every hook
finishes before any descriptor is evaluated; pauses return `working` and thrown
hook errors become visible `before-gates` blockers. After awaited hooks it
rechecks live work, refreshes and current units before admitting descriptors.
The existing `onProgress` collection/advance hooks retain their single pass.

Both mathematics owner wrappers compose `holdBeforeBattery`, any inherited
`beforeGates`, and a second hold check. Native gates, gatesWaived, gate ordering,
pipeline deduplication, coverage, source hooks, and report history remain intact.
Stages without the hook retain their gate path, with an explicit paused-state
check at the gate entry. Step 6 remains the original native object/transaction;
physics files are unchanged. The workflow explanation sits under Pre-gate
recertification.

Validation used isolated synthetic fixtures and fake logging gates only:

- `focused-candidate.log`: 27/27 pass across the new nine regression tests,
  compact wrapper tests, owner supervision tests and native-refresh tests.
  The same-tick tests cover serial/pipeline groups, an old consumed Step-3
  permission/request pair, receipt/process completion during `sleep(0)`, zero
  pre-hold descriptor evaluation/stamps, genuine planning-only recertification
  and resume, shared group permission and gate deduplication. Other tests cover
  unchanged no-hook behavior, local/adopted/refresh/paused barriers, later-member
  hook failures/pauses, inherited hook input mutation, asynchronous work or unit
  invalidation, incomplete units, and completed/waived hook suppression.
- `negative-original-executor.log`: both same-tick tests fail with only the
  isolated executor restored to its original bytes. The original proceeds
  through fake gate execution and then fails the expected owner-paused assertion;
  the old consumed permission is accepted by the existing descriptor wrapper.
  The candidate passes the same tests. No native run gate is involved.
- `pipeline-candidate.log` and `pipeline-baseline.log`: both 34 pass / 3 fail.
  The exact same existing stage-table assumptions fail: `the do-not-relax stages
  are still barriers`, `no pipeline group starts before the batch assignment it
  depends on`, and `authoring, independent review and adjudication precede the
  impact snapshot`. These assume absent `2-assign` or retired `3b-author` table
  positions. They are outside this repair.
- `typecheck-candidate.log` and `typecheck-baseline.log`: TypeScript exits 2 with
  21 errors on both trees; the complete diagnostics are byte-identical. No new
  type error is introduced. Existing errors include Step-6 cutover, legacy math
  stage calls, existing scope/page tests and physics types. They are documented,
  not represented as passing or repaired here.

The baseline tree was obtained by restoring all five exact live preimages and
removing the new test inside the isolated candidate tree. Files were restored
before final candidate verification. The final focused suite used the frozen
code/test bytes; the final documentation relocation does not change test inputs.

`INTEGRATION.md` records root-owned installation, scoped review/commit and restart
operations. The helper validates every preimage/candidate hash and a paused exact
run, requires the original controller to have exited, refuses exact-run native
Node processes, and defaults to verification only. Root must still substantiate
full process drain, preserve original restart arguments and retain native state
and evidence. Executor code requires a new controller process; stage hot reload
alone does not install this fix. Later judge-provider recovery, owner decisions,
recertification and resume remain separate root work.
