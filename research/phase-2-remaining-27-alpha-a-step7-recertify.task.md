# Step 7 — targeted recertification of one auditor-created item

Run: `phase-2-remaining-27`. Group a (batches 11, 12, 13).

## Why this dispatch exists

`prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system` (batch 12, page
`highest-weight-theory-for-complex-semisimple-lie-algebras`) was authored during this group's
Step-7 adjudication by the dispatch that hit its six-hour timeout. That dispatch cannot count
as an author, so the Step-7 auditor-created certification gate reports:

> `prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system: no successful Step 7
> auditor/adjudicator dispatch authored its current carriers`

The item's own content and its repairs were licensed normally (`step7-guard` reports every
Step-7 edit licensed). What is missing is a *successful* adjudicator dispatch covering its
current carriers.

## Your job

- Read the item, its proof contract entry in `research/phase-2-remaining-27-batch-12.proof-contracts.json`,
  its manifest entry in `research/phase-2-remaining-27-batch-12.pages.json`, and every cited
  dependency clause it rests on. Consult authoritative sources (web search is available) for
  any convention you cannot fix from the library alone.
- If, and only if, you have verified the claim, its hypotheses, its proof and its citations:
  re-issue the item file with byte-identical mathematical content (a no-op write is the point —
  it records that a successful Step-7 adjudicator dispatch authorises these exact bytes), and
  state in your report that you verified and re-issued it.
- If you find a defect instead, repair it under the ordinary Step-7 rules: `confirmed_fatal`
  style licence, exact pre/post `itemHashGuard` digests, one defect-ledger row, and any
  manifest/contract update the repair requires. Do not repair another group's item.
- Do not touch any other item. Do not edit shared ledgers other than appending a defect row if
  your own repair requires one.
- Never re-issue an item you could not verify. Report the blocker instead.

## Report

Write `research/phase-2-remaining-27-alpha-step7-recertify-a.md`:

- the item id and the exact files you read;
- your verdict (verified and re-issued, or repaired with the defect and the pre/post digests);
- the sources you consulted for any external convention;
- anything you could not verify, stated as a blocker rather than smoothed over.
