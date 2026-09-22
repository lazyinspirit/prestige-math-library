# Step 7 adjudication compatibility repair

During supervision, owner 2 completed its gate repairs and reported an
operator-only schema blocker: 128 engine-emitted V2 fatal adjudications lack
the legacy `defect_type` field. The original adjudicators did provide bound
decisions and repair evidence. Do not invent retrospective classifications.

1. Pause new engine transitions while current owners finish their repairs.
2. Add a read-only compatibility resolver for missing categories only when a
   ledger row exactly matches preserved V2 collection/pack evidence. Preserve
   all fatal outcomes and expose the category as explicitly unclassified.
3. Use the same resolver in coverage and judge statistics; retain strict legacy
   shape checks and all current-content, rejection and certification checks.
4. Require explicit categories in future adjudicator prompts and reports, while
   keeping already-frozen report inputs usable without rewriting their evidence.
5. Test authentic compatibility, forged/tampered/malformed records, unchanged
   fatal rejection behavior and unclassified statistics. Update docs and commit.
6. Verify the live rows read-only, then resume only after the operator blocker
   is resolved. No certification before complete repair/downstream closure.
