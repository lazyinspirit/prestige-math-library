# Frontier 33 — group E order-repair and scope recheck

The shared plan, all batch manifests, and all coverage ledgers are frozen for
this dispatch. Do not edit them. Do not run `splice-plan` without `--dry-run`.

Verify the owner-authorized adjacent-block order repair recorded at the end of
`research/frontier-33-batch-9.notes.md` against the current plan and batch-9
manifest. Confirm that both previously missing suppliers are now backward and
in the A page's declared prerequisite closure. Run the focused plan,
manifest-dependency, policy, and batch-9 dry-splice checks.

Then review all group-E scope-decision rows currently marked `pending` against
the exact frozen coverage and plan context. Record `stands` or
`owner-decision` plus specific nonempty evidence. If and only if the two
prerequisite findings are closed, change the batch-9 A-page verdict from
`insufficient` to `sufficient` and update the recheck report accordingly.

You may update only:

- `research/frontier-33-alpha-e-scope-decisions.json`
- `research/frontier-33-alpha-e-step3-verdicts.json`
- `research/frontier-33-alpha-e-recheck.md`

Run `node tools/scope-decisions.mjs check --run frontier-33 --group e` and the
aggregate scaffold-verdict check. Do not change plan order, page prerequisites,
item lists, item files, manifests, coverage, sources, or another group's files.

