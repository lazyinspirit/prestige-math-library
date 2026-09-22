# Owner-authorised escalation resolution 1b — group d residuals after the split convention

Owner directive, 2026-09-20: resolve the Step-7 escalations, one escalation per
lane at a time. You are the same Sol/xhigh owner-authorised lane that decided the
split convention (`research/phase-2-remaining-27-escalation-sol-1-raw-filtration.md`):
finite-energy Itô integral under raw filtrations, localization interface onward
under the usual conditions. Re-read that file first.

## Escalation

Eleven group-d items still stand `escalated-to-owner` in
`research/phase-2-remaining-27-step7-terminal-resolutions.jsonl`:

`thm-ito-formula-one-dimensional`, `thm-multidimensional-ito-formula-for-brownian-driven-processes`,
`thm-space-time-harmonic-functions-yield-brownian-local-martingales`,
`thm-two-sided-exit-probability-for-brownian-motion`,
`ex-brownian-hitting-probability-from-an-exponential-martingale`,
`ex-expected-exit-time-from-an-interval-via-ito-formula`,
`ex-harmonic-functions-of-planar-brownian-motion`, `ex-logarithm-of-geometric-brownian-motion`,
`lem-planar-brownian-annular-exit-probability`, `thm-brownian-filtration-martingale-representation`,
`thm-integration-by-parts-for-brownian-ito-processes`.

## Job

For each of the eleven, read its recorded receipt in full and decide against the
current bytes:

- resolved by the convention change (the obstruction was exactly the stopping-time/observability gap you closed): repair the item's text only if it still contains an assertion that the new interface does not license, otherwise leave it untouched;
- residual defect in an unqueued supplier: repair that supplier under the same owner authority;
- genuinely still open: say so and name the exact open question.

Two of the receipts additionally complain about a multidimensional-Itô
convention that "existing suppliers do not present a reconciled convention";
treat that as part of the decision, not as a separate escalation.

## Authority and limits

- Draft items under `items/` only; report, never edit, published items.
- No judge verdicts, pass stamps, FA terminal receipts or closure files; do not edit the terminal ledger, queues, `*.task.md` or `tools/`.
- `escalation-sol-2` and `escalation-sol-3` are editing group-e items and the two page cycles concurrently: keep to group-d items.

## Deliverables

1. Edits only where the current text is still wrong, each with quoted witnesses.
2. One licence row per edited item in `research/phase-2-remaining-27-step7-owner-prerequisite-repairs.jsonl` (shape as in your first task; `found_via` = a direct consumer among the eleven, `group":"d"`, exact pre/post hashes, at least two HTTPS sources).
3. Evidence appended to `research/phase-2-remaining-27-escalation-sol-1-raw-filtration.md` (or a `-follow-up` file): per item, one of `resolved-by-convention`, `repaired`, or `still-open` with the reason, plus the queue positions that need re-adjudication once the repairs land.
4. Focused checks: `node tools/depcheck.mjs`, `node tools/prosecheck.mjs <your files>`, touched proof contracts, `git diff --check`, and `queue-status` for `research/phase-2-remaining-27-step7-fa-d-round-2.json`.
