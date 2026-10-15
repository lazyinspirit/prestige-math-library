# Construction restart

Step 1's progress hook runs before dispatch, including after a controller or host
crash. No active writers alone does not mean authoring has finished: interrupted
authors can leave partial frontmatter that their native replacement must finish.

The strict post-authoring batch-level recomputation therefore requires both
drained writers and the executor's native `stageStatus(stage, ctx).unitsDone`.
That completion check includes successful coverage, pending native refreshes,
actual item/page artifacts, populated inventories and current readiness receipts.
An incomplete construction remains eligible for ordinary author dispatch; it
does not receive acceptance from this guard.

Construction dispatch retains its existing scheduling projection. Ordinary
batch-level commands, the completed-authoring recomputation and all native gates
retain strict parsing and validation. Restart does not manufacture worker
results, reset attempt budgets or reconstruct lost conversations.
