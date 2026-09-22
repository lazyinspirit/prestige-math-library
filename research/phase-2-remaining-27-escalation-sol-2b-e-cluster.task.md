# Owner-authorised escalation resolution 2b — group e Shelah / choice-strength cluster

Owner directive, 2026-09-20: resolve the Step-7 escalations, one escalation per
lane at a time. You are a Sol/xhigh owner-authorised repair lane. Group e holds
twenty escalations that all cite existing unqueued suppliers, so find the root
causes before repairing anything.

## Escalations (all `escalated-to-owner` in the terminal ledger, group e)

`lem-shelah-universal-meagre-forcing-absorbs-old-nowhere-dense-sets`,
`ex-a-universal-meagre-stage-absorbs-old-nowhere-dense-sets`,
`thm-shelah-sweet-amalgamation-preserves-sweetness`,
`ex-sweet-amalgam-over-a-common-complete-subalgebra`,
`lem-measurable-null-code-orders-bound-constructible-null-unions`,
`lem-raisonnier-family-is-a-sigma-one-three-filter`,
`thm-shelah-sweet-partial-isomorphism-extension`,
`thm-shelah-universal-meagre-composition-preserves-sweetness`,
`thm-shelah-ch-omega-one-sweet-construction`,
`lem-shelah-real-name-capture-and-coded-meagre-unions`,
`lem-shelah-homogeneous-truth-has-baire-representatives`,
`lem-uniform-null-g-delta-capture-functions`,
`thm-relative-consistency-bpi-without-urysohn`,
`thm-relative-consistency-countable-choice-without-urysohn`,
`thm-relative-consistency-bpi-without-stone`,
`thm-relative-consistency-dc-without-stone`,
`rem-choice-strength-ledger-baire-urysohn-stone-tychonoff`,
`thm-raisonnier-filter-is-rapid-from-null-code-measurability`,
`thm-shelah-inner-model-all-sets-of-reals-have-baire-property`,
`thm-shelah-baire-model-separates-baire-property-from-measurability`.

Several of those receipts are context reseals (`Position 17/18/47/48/50/51`
style): they re-affirm an earlier escalation after a sibling repair. Treat them
as the same underlying obstruction, not as new work.

## Job

1. Read every receipt, then cluster the twenty by root cause and name each root cause's owning supplier item.
2. For each root cause, decide against the current bytes whether the supplier is false, too strong for its consumers, or merely missing a stated hypothesis (choice principle, normality/absoluteness assumption, carrier interface).
3. Repair each defective unqueued supplier minimally, with the missing hypothesis stated where the consumers already supply it. Use authoritative sources (Shelah's universal meagre forcing and sweetness papers, Raisonnier, Bartoszyński–Judah, standard choice-strength references) and record the URLs and what each supports.
4. Report per escalated item whether it is now `resolvable-by-re-adjudication` or `still-open`, so the final-adjudicator round can settle it.

## Authority and limits

- Draft items under `items/` only; published items are reported, never edited.
- No judge verdicts, pass stamps, FA terminal receipts or closure files; do not edit the terminal ledger, queues, `*.task.md` or `tools/`.
- `escalation-sol-1` works in group d and `escalation-sol-3` on the two page cycles: stay in group e.

## Deliverables

1. The supplier repairs, with quoted witnesses.
2. Licence rows in `research/phase-2-remaining-27-step7-owner-prerequisite-repairs.jsonl` (`found_via` = an escalated consumer that directly depends on the repaired supplier, `group":"e"`, exact pre/post hashes, at least two HTTPS URLs).
3. Evidence at `research/phase-2-remaining-27-escalation-sol-2b-e-cluster.md`: the clustering, each root cause, the decision, sources, per-item verdict, and the queue positions that now need re-adjudication.
4. Focused checks: `node tools/depcheck.mjs`, `node tools/prosecheck.mjs <your files>`, touched proof contracts, `git diff --check`, `queue-status` for the round-2 e queue.
