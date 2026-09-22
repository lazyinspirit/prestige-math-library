# Owner-authorised escalation resolution 1 — raw-filtration localisation stack

Owner directive, 2026-09-20: resolve the Step-7 final-adjudicator escalations in
parallel, one escalation per lane. You are a Sol/xhigh owner-authorised repair
lane. Decide the mathematics, land the repair, and say plainly what stays owed.

## The escalation

- Root cause item: `items/def-locally-square-integrable-predictable-brownian-integrand.md` (draft, group d, in no FA queue and not itself rejected).
- Consumers the final adjudicator recorded as `escalated-to-owner` in `research/phase-2-remaining-27-step7-terminal-resolutions.jsonl`: `thm-localized-ito-integral`, `def-continuous-brownian-ito-process`, `thm-stopping-an-ito-integral`, `thm-quadratic-variation-of-an-ito-integral`, `thm-quadratic-covariation-of-brownian-ito-processes`, `thm-ito-formula-one-dimensional`.
- Obstruction as proved by that lane: clause 2 asserts `tau_n = inf{t : A_t >= n} \wedge n` is a stopping time from `{tau_n <= t} = {A_t >= n}`, which needs everywhere continuity of the energy process, while clause 1 and `def-continuous-time-adapted-process-and-martingale` supply only almost-sure continuity on a possibly noncomplete, non-right-continuous filtration.
- Its counterexample: product of a standard Brownian space with `({0,1}, delta_0)`, `D = {1}` measurable and null, `F_t` blind to the second coordinate until time 1, `H_s = 1_D/(s-1)` for `s > 1` and `0` otherwise; `H` is predictable with almost-sure finite energy at every finite time, yet `{tau_2 <= 1} = D` is not `F_1`-measurable.
- Read every escalated receipt in full before deciding: they are the `basis` field of the rows with `"disposition":"escalated-to-owner"`.

## Decision owed

Choose one convention for the whole localisation stack and make it true:

- keep raw filtrations and require adapted, pathwise-finite representatives with measurable sublevel sets, or
- impose the usual conditions (complete, right-continuous) on the Itô page,

or a split you can defend from the library's own conventions. Read
`def-continuous-time-adapted-process-and-martingale`,
`def-progressive-measurability-and-predictable-process`,
`def-law-modification-and-indistinguishability-of-processes`, the Itô-page A/B
context, the owning manifests and the proof contracts before choosing. Verify
against authoritative sources on the web (van der Vaart, Karatzas–Shreve,
Protter or equivalent) and record exact URLs with what each supports. Prefer the
smallest change that makes the stack true and keeps the rest of the library
consistent. If the options are genuinely incompatible page by page, say so and
propose the split explicitly.

## Authority and limits

- You may edit draft items under `items/`, including the root supplier and any interface it owns.
- Report, never edit, anything under `library/` or any item its frontmatter marks published.
- Do not write judge verdicts, pass stamps, FA terminal receipts or closure files.
- Do not edit `research/phase-2-remaining-27-step7-terminal-resolutions.jsonl`, any queue JSON, any `*.task.md`, or `tools/`; if you find a real tool bug, report it and stop.
- Five FA lanes are running now and editing other items. Keep your edit set minimal.

## Deliverables, in this order

1. The repair: minimal, complete, self-consistent edits with the witnesses quoted in the proofs.
2. Licence row per edited item in `research/phase-2-remaining-27-step7-owner-prerequisite-repairs.jsonl`, exact shape
   `{version:1, kind:"owner-prerequisite-repair", run:"phase-2-remaining-27", id, found_via, group:"d", authorized_by:"owner", defect, correction_basis, source_urls:[>=2 https urls], pre_sha256, post_sha256, at}`.
   `found_via` is the escalated consumer your edited item exposes (`thm-localized-ito-integral` for the root supplier). `pre_sha256` is the edited item's `pre-step7` hash in `research/phase-2-remaining-27-touches.json`; `post_sha256` is its hash now. If your item is not a direct dependency of that consumer, use `kind:"owner-impact-repair"` with `dependency_path` from `found_via` to `id` instead — check frontmatter `deps` first.
3. Evidence at `research/phase-2-remaining-27-escalation-sol-1-raw-filtration.md`: the decision and why the rejected option lost, sources with URLs and what they support, exact hashes before/after, focused-check output, the certification still owed (one Terra verdict per changed item), and which queue positions need re-adjudication once the repair lands.
4. Focused checks: `node tools/depcheck.mjs`, `node tools/prosecheck.mjs <your files>`, `node tools/proof-contract.mjs <contract> --items <ids>` when a contract is touched, `git diff --check`, and `node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json` to name the positions your edit froze.

Work in order: read, decide, edit, licence row, checks, evidence. Auto-compact
at 250k and re-anchor to the live item and its dependencies afterwards. No
filler: exact mathematics, exact commands.
