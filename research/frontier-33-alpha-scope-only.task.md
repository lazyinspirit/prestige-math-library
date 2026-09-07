# Frontier 33 — current-context scope-decision recheck

The shared plan, all batch manifests, all coverage ledgers, and all Step-3
verdict files are frozen for this dispatch. Do not edit any of them. Do not run
`splice-plan` without `--dry-run`; a dry splice is optional and is not needed
for this task.

Use the dispatch block's group label and covers. Read the group's current
`research/frontier-33-alpha-<group>-scope-decisions.json`, assigned coverage
files, current plan closure, and prior Step-3 report. Review every row currently
marked `pending` against those exact bytes. Record `stands` or
`owner-decision` plus specific nonempty evidence in that group's scope-decision
file. Preserve already-current exact decisions. You may update only:

- `research/frontier-33-alpha-<group>-scope-decisions.json`
- `research/frontier-33-alpha-<group>-recheck.md`

Run `node tools/scope-decisions.mjs check --run frontier-33 --group <group>`.
Do not change plan order, page prerequisites, item lists, item files, manifests,
coverage, sources, verdicts, or any other group's artifacts.

