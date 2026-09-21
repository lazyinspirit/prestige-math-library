# Paused Step-7 v2 cutover review

This is a design review, not a migration receipt. No live state or mathematical
evidence was changed by the review. The replacement workflow must not adopt the
legacy Step-7 dispatch receipts as fresh round coverage.

## Verified source

On 2026-09-21, `.autopilot/phase-2-remaining-27/state.json` remained paused at
`7-rejudge`, with workflow revision `group-authors-nine-step-v1`.
Its touch ledger's original `pre-step7` baseline is dated
`2026-09-19T09:15:55.598Z` and records 20,088 item hashes, each a 16-character
GUARD digest. Judge ledger rows carry `at`, `item_sha256`, and
`context_sha256`; historical verdicts can therefore be selected by the original
Step-7 boundary without confusing later rejudge rows with Step-6 inputs.

## Why a state-only migration is insufficient

The v2 baseline stores full GUARD hashes. A truncated touchlog digest cannot be
expanded by padding or relabeling it. Full hashes must come from actual matching
item text or already recorded full GUARD hashes, and every recovered digest must
match the original touchlog prefix. Judge-form hashes are a different identity
and cannot substitute.

The existing v2 initial adjudication pack measures repairs against the current
working tree. The legacy run has already repaired original Step-6 rejections.
Replaying those rejections would require a sound item to change again merely to
satisfy `confirmed_fatal`'s new-edit check. Omitting those changes instead leaves
the original baseline-to-current repairs without centralized certification.
Neither changing the baseline to current bytes nor relabeling old receipts
resolves this evidence gap.

## Required bounded bridge

1. Require paused state, an inactive controller, no live dispatch processes,
   and no unresolved in-flight dispatch records. Acquire the controller lock
   throughout preparation and cutover; process-list failures must block.
2. Preserve the source state, original stage/dispatch records, touchlog,
   manifests, scope, all judge/adjudication/repair evidence, and current item
   hashes in an immutable migration bundle. Record content digests and the
   original baseline timestamp. Never rewrite historical files.
3. Reconstruct every original full GUARD hash from matching current text,
   archived text/Git objects, or exact existing GUARD evidence. Fail closed on
   missing or conflicting identities. Preserve the exact original census,
   including any baseline item now missing.
4. Freeze the original manifest frontier and only genuine judge verdicts from
   at or before the original Step-7 boundary. Require complete valid verdict
   evidence for that selected scope; timestamp filtering alone is insufficient
   if an item's last pre-boundary verdict is missing.
5. Add an explicit legacy-repair review input to the initial v2 protocol.
   Current adjudicators must review every historical baseline-to-current repair
   and its real original findings, including published repairs. A reviewer may
   certify an already repaired, sound carrier without claiming a new edit or a
   new judge verdict. Newly found fatal defects still require actual repairs.
   Every inherited repair must receive fresh impact coverage and the ordinary
   drained centralized certification pass before Terra rejudgment.
6. Prepare v2 baseline/frontier/legacy-review inputs in a separate staging
   directory, bind their hashes in the migration receipt, and validate the
   complete bundle before changing state. Commit the evidence directory first,
   then atomically write the paused migrated state. A journal must allow
   interrupted preparation to resume without changing immutable inputs.
7. Retain Steps 1–6's state unchanged. Archive and remove only Step-7-and-later
   scheduling stamps, retry budgets, blockers, and dispatch state; retain their
   original files as history. Use fresh v2 round labels and empty round counters.
   Set the new workflow revision and first v2 entry stage, keeping `paused:true`.
8. Verify exact inherited scope/baseline, original evidence hashes, no fresh
   success receipts, no active writers, and paused state. Resume remains a
   separate owner action.

The current `migrate-checkpoint.mjs` translates a different historical workflow
and does not implement this bridge. A ready cutover command needs fixtures for
already repaired original rejections, unresolved rejections, published impacts,
missing full baseline identities, malformed/missing pre-boundary verdicts,
active writers, interrupted preparation, and an unchanged Steps 1–6 prefix.
