# Step 7 — targeted recertification, second item

Run: `phase-2-remaining-27`. Group a (batches 11, 12, 13).

## Why this dispatch exists

`def-coadjoint-representation-of-a-lie-group` (batch 13) was created by a Step-3 auditor and
carried through Step 5. It changed during Step 7 without a successful adjudicator dispatch
covering its current carriers, so the Step-7 auditor-created certification gate reports:

> `def-coadjoint-representation-of-a-lie-group: no successful Step 7 auditor/adjudicator
> dispatch authored its current carriers`

Its repairs were licensed normally (`step7-guard` reports every Step-7 edit licensed). What is
missing is a *successful* adjudicator dispatch covering the bytes now on disk.

## Your job

- Read the item, its proof-contract entry in `research/phase-2-remaining-27-batch-13.proof-contracts.json`,
  its manifest entry, and every cited dependency clause it rests on. Web search is available;
  consult authoritative sources for any convention the library does not settle.
- If, and only if, you verify the claim, hypotheses, proof, citations and source locators:
  re-issue the item file with byte-identical mathematical content (a no-op write is the point —
  it records that a successful Step-7 adjudicator dispatch authorises these exact bytes) and
  say so in your report.
- If you find a defect instead, repair it under the ordinary Step-7 rules: exact pre/post
  `itemHashGuard` digests, one defect-ledger row, and any manifest/contract update the repair
  requires. Never repair another group's item.
- Do not touch any other item. Never re-issue an item you could not verify — report the blocker.

## Report

Write `research/phase-2-remaining-27-alpha-step7-recertify-a2.md`: item id, files read, verdict
(verified and re-issued, or repaired with digests), sources consulted, and any blocker.
