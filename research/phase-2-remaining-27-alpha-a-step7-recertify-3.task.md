# Step 7 — combined recertification of two auditor-created items

Run: `phase-2-remaining-27`. Group a (batches 11, 12, 13). This dispatch covers batches **12 and 13**.

## Why this dispatch exists

Two auditor-created items changed during Step 7 without a *single successful* adjudicator
dispatch covering both current carriers. The Step-7 certification gate needs one successful
dispatch whose window contains the current bytes of each:

- `prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system` (batch 12) — already
  re-verified and re-issued by an earlier targeted dispatch, including a locator correction
  (Knapp Chapter II §§4–5, Kirillov §§6.6–7.4). Re-check that its locators and contract entry
  are as that dispatch left them.
- `def-coadjoint-representation-of-a-lie-group` (batch 13) — already re-verified and re-issued
  by a later targeted dispatch, with a declared-interface repair. Re-check its statement,
  contract entry and manifest mirror.

The earlier dispatches reused one lane label, so only the last one's stable result survives;
this dispatch exists to give both items a single surviving author window.

## Your job

- Read both items, their proof-contract entries (`research/phase-2-remaining-27-batch-12.proof-contracts.json`,
  `…-batch-13.proof-contracts.json`), their manifest entries, and the dependency clauses and
  source locators they rest on. Web search is available; consult authoritative sources for any
  convention the library does not settle.
- For each item: if you verify the claim, hypotheses, proof, citations and locators, re-issue
  the file with byte-identical mathematical content (a no-op write is the point — it records
  that this successful dispatch authorises these exact bytes). If you find a defect, repair it
  under the ordinary Step-7 rules (exact pre/post `itemHashGuard` digests, one defect-ledger
  row, manifest/contract update if required).
- Never re-issue an item you could not verify — report the blocker instead. Do not touch any
  other item.

## Report

Write `research/phase-2-remaining-27-alpha-step7-recertify-a3.md`: for each item, the files
read, the verdict (verified and re-issued, or repaired with digests), the sources consulted,
and any blocker.
