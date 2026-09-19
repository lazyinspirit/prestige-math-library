# Step 7 — final combined recertification, four auditor-created items

Run: `phase-2-remaining-27`. Group a (batches 11, 12, 13). This dispatch covers batches **11, 12, 13** and is the last dispatch under this label.

## Why this dispatch exists

Four auditor-created/carried items changed during Step 7. Their earlier repairs happened inside
dispatches whose stable result was later overwritten (or inside the group-a dispatch that hit
its six-hour timeout), so the Step-7 certification gate cannot see a *surviving* successful
adjudicator window covering their current bytes. The engine needs one dispatch whose surviving
result covers all four carriers:

1. `prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system` (batch 12) — already
   verified and re-issued, with corrected external locators (Knapp Chapter II §§4–5; Kirillov
   §§6.6–7.4).
2. `def-coadjoint-representation-of-a-lie-group` (batch 13) — already verified and re-issued,
   with a declared-interface repair.
3. `lem-highest-weight-modules-have-weights-below-the-top-weight` (batch 12) — changed during
   this group's Step-7 adjudication by a dispatch that later timed out.
4. `lem-simple-reflections-preserve-weight-multiplicities` (batch 12) — same history.

## Your job

For each of the four items, in order:

- Read the item, its proof-contract entry (`research/phase-2-remaining-27-batch-12.proof-contracts.json`
  or `…-batch-13.proof-contracts.json`), its manifest entry, and the dependency clauses, sources
  and locators it rests on. Web search is available; consult authoritative sources for any
  convention the library does not settle.
- If you verify the claim, hypotheses, proof, citations and locators: re-issue the file with
  byte-identical mathematical content (a no-op write is the point — it records that this
  successful dispatch authorises these exact bytes) and record that in your report.
- If you find a defect: repair it under the ordinary Step-7 rules (exact pre/post
  `itemHashGuard` digests, one defect-ledger row, and any manifest/contract update the repair
  requires).
- Never re-issue an item you could not verify; report the blocker instead. Do not touch any
  other item.

## Report

Write `research/phase-2-remaining-27-alpha-step7-recertify-a4.md` with one section per item:
files read, verdict (verified and re-issued, or repaired with digests), sources consulted, and
any blocker.
