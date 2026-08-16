// judge-currency.mjs — is this judge verdict still evidence about this text?
//
// ONE PREDICATE, TWO CALLERS, and they used to disagree.
//
//   tools/judge-sweep.mjs    decides which items to SPEND a judge call on.
//   tools/level-coverage.mjs decides whether the receipt gate is satisfied.
//
// A verdict is current when EITHER
//
//   (a) it was cast against the item's current frozen PAIR context, or
//   (b) it was cast against byte-identical text of THAT ITEM.
//
// Clause (b) is owner policy of 2026-08-06. Repairing one item moves the whole
// pair's context hash, so under clause (a) alone every untouched sibling on the
// page reads as unjudged, and the strict reading forced a rejudge of every
// page-mate of every repair. level-coverage honoured (b); the sweep, which is
// what actually spends the calls, did not — so it re-judged items the gate
// already considered covered.
//
// The waste is the visible half. The defect is two readings of one rule: a
// later change to either would silently not reach the other, which is the same
// shape as the two `item_sha256` normalisations in tools/item-hash.mjs.
//
// A REPAIRED ITEM ALWAYS REJUDGES. Its own `item_sha256` changed, so it fails
// both clauses; only its unedited page-mates are spared. Nothing that needs a
// fresh verdict escapes through this.
//
// The hashes here are the JUDGE form (`itemHashJudge`): the whole file with only
// the `judge:` stamp removed. Writing the stamp must not invalidate the verdict
// the stamp records.

/**
 * @param {{context_sha256?: string, item_sha256?: string}|null|undefined} row
 *        a verdict row from the judge ledger
 * @param {{context: string, item: string|null}} current
 *        the item's current context hash and current judge-form item hash
 * @returns {boolean}
 */
export function verdictIsCurrent(row, current) {
  if (!row || !current) return false;
  if (row.context_sha256 && row.context_sha256 === current.context) return true;
  // A ledger written before `item_sha256` existed carries none, and `null`
  // must never match `undefined` into a false pass.
  return Boolean(current.item) && row.item_sha256 === current.item;
}
