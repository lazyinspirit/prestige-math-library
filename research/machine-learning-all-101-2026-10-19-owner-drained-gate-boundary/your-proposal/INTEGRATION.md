# Guarded integration operations

Proposal only. Nothing here has controlled the live engine or installed live code.
Root owns all operations below. Keep the run paused throughout installation and
verification; do not issue recertification, retry, resume or native gate commands
as part of installing this repair.

1. Recompute exact run status and inspect the process evidence. Confirm the
   controller's paused state, local worker drain and absence of adopted native
   workers. Preserve all native reports, sweep output, result files and ledgers.
   The sweep exiting does not certify a gate or mathematical acceptance.
2. Record the controller's original argv/environment and normal start operation.
   Request its normal stop with the existing exact run/state-dir arguments, wait
   for confirmed controller exit, and reconfirm no run workers remain. Executor
   code is process-loaded: editing it or hot-reloading the stage table alone
   does not install this fix into an existing controller.
3. From the repo root, verify then install the bound candidate using the stopped
   controller's PID (1911 was the observed controller; use the actual PID if it
   has changed):

   ```bash
   python3 research/machine-learning-all-101-2026-10-19-owner-drained-gate-boundary/your-proposal/install-candidate.py --repo "$PWD" --controller-pid 1911
   python3 research/machine-learning-all-101-2026-10-19-owner-drained-gate-boundary/your-proposal/install-candidate.py --repo "$PWD" --controller-pid 1911 --apply
   ```

   Both invocations fail if the exact state is unpaused, the old controller still
   exists, any exact-run native Node process survives, any live preimage differs,
   or any candidate hash differs. Root's process review also covers non-Node
   wrappers; a disk paused flag alone cannot prove drain. No existing runtime
   file is written by the helper. It installs exactly the six inventory paths.
4. Review the exact six-file diff. Focused checks, all synthetic fixtures, are:

   ```bash
   node tools/tsx-run.mjs --test tools/autopilot/test/drained-gate-boundary.test.mts tools/autopilot/test/owner-supervised-compact.test.mts tools/autopilot/test/owner-gate-supervision.test.mjs tools/autopilot/test/native-refresh.test.mts
   ```

   The baseline comparison also ran pipeline.test.mts and TypeScript checking;
   their pre-existing failures are recorded in REPORT.md. They must not be
   represented as passing. Do not run source/content/native batteries to test
   this engine-only change.
5. Root stages and commits only the six inventoried paths plus chosen proposal
   evidence. Restart using the preserved native start operation and original
   run/state-dir/selected owner-wrapper arguments. Confirm the run still loads
   paused, the new code is in the new process, and historical evidence remains.
   Root separately owns any later retry, owner recertification and resume after
   resolving the actual judge/provider status. This proposal grants no gate
   permission and does not clear any repair, coverage or stage history.

Rollback, if root needs it before restart, consists of restoring exactly the
five preimage files and removing the newly added test; do not revert other dirty
workspace files or alter runtime state/history. Recheck source hashes first.
