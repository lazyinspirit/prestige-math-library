# Owner-authorised escalation resolution 2 — compact-Lie-group torus cluster

Owner directive, 2026-09-20: resolve the Step-7 final-adjudicator escalations in
parallel, one escalation per lane. You are a Sol/xhigh owner-authorised lane.

## The escalation

- Escalated item: `def-torus-and-maximal-torus-in-a-compact-lie-group` (group a, round-2 queue position 1), recorded `escalated-to-owner` in `research/phase-2-remaining-27-step7-terminal-resolutions.jsonl`.
- The lane's finding: its torus-classification supplier was circular and omitted a required countable-choice obligation, and repairing an existing supplier was outside that lane's authority. Read the full receipt (`basis` of that row) before doing anything.
- Since that receipt was written, the same FA lane repaired and recorded later positions of the cluster, including `thm-maximal-tori-exist-in-compact-lie-groups` (position 2) and `cor-every-compact-connected-abelian-subgroup-is-contained-in-a-maximal-torus` (position 3).

## Job

Re-adjudicate the obstruction against the CURRENT bytes, then act on what you
find:

- Read the current text of the escalated item, every supplier it names, its manifest, coverage, proof contract and A/B page context.
- Run `node tools/depcheck.mjs` and establish exactly where countable choice is spent (`lem-ac-...`, `def-axiom-of-choice`) in the current chain.
- If the later repairs removed the obstruction: edit nothing. Write evidence that names the exact change that removed it, with hashes, and state that the remaining step is re-adjudication by the FA lane, not a repair.
- If it survives: repair the offending item minimally — break the cycle and declare the choice principle its proof spends — and prove the repair against authoritative sources (standard references for maximal tori in compact Lie groups; record exact URLs and what they support).

## Authority and limits

- Draft items under `items/` only; report, never edit, `library/` or published items.
- No judge verdicts, pass stamps, FA terminal receipts or closure files.
- Do not edit the terminal-resolution ledger, queue JSON, `*.task.md` or `tools/`; report a real tool bug instead.
- Other FA lanes are running: keep the edit set minimal.

## Deliverables

1. The repair when one is needed, with quoted witnesses; otherwise nothing.
2. A licence row per edited item in `research/phase-2-remaining-27-step7-owner-prerequisite-repairs.jsonl` with the exact shape `{version:1, kind:"owner-prerequisite-repair", run:"phase-2-remaining-27", id, found_via:"def-torus-and-maximal-torus-in-a-compact-lie-group", group:"a", authorized_by:"owner", defect, correction_basis, source_urls:[>=2 https urls], pre_sha256, post_sha256, at}`, `pre_sha256` taken from the `pre-step7` snapshot in `research/phase-2-remaining-27-touches.json` (use `kind:"owner-impact-repair"` with `dependency_path` if the edited item is not a direct frontmatter dependency of `found_via`).
3. Evidence at `research/phase-2-remaining-27-escalation-sol-2-torus.md`: the verdict on whether the obstruction survives, the exact evidence for it, hashes before/after, focused-check output, certification still owed, and the queue positions that need re-adjudication (`a` position 1 at minimum).
4. Focused checks: `node tools/depcheck.mjs`, `node tools/prosecheck.mjs <your files>`, the relevant proof-contract run, `git diff --check`, and `queue-status` for the round-2 a queue if you edited anything.
