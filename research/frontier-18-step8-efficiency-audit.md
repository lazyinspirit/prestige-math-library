# Frontier 18 Step-8 efficiency and safety audit

Date: 2026-08-25
Run state while rebuilt: **paused**
Scope: Step 8 only; mathematical standards and both judge lanes are unchanged.

## Evidence from the last three closed frontiers

| run | in-run items | judge transport attempts | adjudicated judge rejections | fatal defects caught at Step 8 | observed waste relevant here |
|---|---:|---:|---:|---:|---|
| frontier 15 | 398 | 3,387 | 149 | 5 | three of the five Step-8 fatals were already explicit in Step-3 titles/strategies; each therefore paid for later adjudication, repair and rejudge |
| frontier 16 | 324 | 987 | 304 | 95 distinct defects on 75 ids | two repair rounds did no work because exact `closure.unadjudicated` rows were not routed |
| frontier 17 | 443 | 2,114 | 164 | 53 | 1,107 fast Opus transport refusals occurred in a two-hour window without pre-fan-out backoff |

Sources: `frontier-15-step10-report.md`,
`frontier-16-step10-report.md`, `frontier-17-step10-report.md`, and each
run's `judge-cost.jsonl` / `judge-adjudications.jsonl`.

Frontier 16 sent 55% of its fatal defects past Step 6; Frontier 17 reduced that
to 30%, but still recorded 67 defects in the
`6b-adjudicate -> 8-adjudicate/8-rejudge` leakage routes. This supports keeping
Step 8 mathematically strong while moving preventable classes earlier; it does
not support weakening either judge lane or the fatal-only rule.

Frontier 18 magnified the mechanical cost: the run has 796 Step-8 items. The
same exact-current scan took about 5m47s through the old serial caller and
57.63s through the bounded canonical pool. The live closure incident also
showed why targeted repair sets matter: rerunning the whole 796-item scope when
only rejected/repaired ids are stale adds no mathematical evidence.

## Waste removed

1. **Repeated whole-scope currency scans.** `8-scope` trusts the exact closure
   just produced by Step 7 while bytes are unchanged. Exact context construction
   remains `judge.mts --context-hash`, but is pooled and cached only under a
   fingerprint of all prompt inputs.
2. **Judge calls before known decisions.** Existing unadjudicated and
   confirmed-fatal rows route to the owning Alpha before any missing-pair sweep.
   Only ids whose current text lacks a pair go to both lanes.
3. **Bookkeeping spending mathematical rounds.** Repository, proof-contract and
   defect-ledger repair runs in `8-preflight` and `8-close`; only judge
   currency can consume the bounded `8-rejudge` loop.
4. **Unfunded fan-out and immediate retry.** A paired-lane availability probe
   runs before fan-out. Failure launches no sweep and is not immediately retried
   by the stage.
5. **Rejudging already-current items.** A durable per-item cycle receipt records
   the original confirmed-fatal context and every target set before launch. After two
   distinct frozen contexts that item is an intervention blocker. Another
   item's repair cannot spend its budget.
6. **Stale recovery prompts and duplicate group reads.** Recovery files are
   regenerated from current exact closure rows. Exact item failures return only
   to their owner; an unscoped integrity residue gets one focused reviewer.
7. **Self-attested reading coverage.** Step-7 group digests must enumerate the
   exact unique owned page, item and seam sets. Counts, duplicates and omissions
   fail mechanically.
8. **Dead cross-group alerts.** Alerts now have stable identities, preserve the
   source rejection only as provenance, and require an owning-group decision.
   A target cannot be repaired as fatal until it has its own real targeted
   rejection and exact adjudication.
9. **Published repairs falling outside run closure.** They have a separate
   closure receipt, both current judge lanes, and return to the group that made
   the repair if rejected. Owner-reserved escalations are publish blockers.
10. **Fabricated or silently lost evidence.** JSONL is strict and line-numbered.
    An adjudication counts only when its `(id, model, context_sha256)` tuple
    exact-matches a real `keep:false` verdict. Creation and deletion at Step 8
    are hard failures.
11. **Unsafe live stage insertion.** Gate-complete stage prefixes are immutable.
    The already-rejudged Frontier 18 run uses a write-once cutover receipt that
    freezes its successful result and item hashes; rerunning prepare validates
    the receipt instead of overwriting it.
12. **A global terminal bypass.** Manual intervention is bound to the exact
    unresolved item, two distinct cycle ids, the closure class and closure hash,
    plus current item/context hashes. It creates neither a judge verdict nor a
    pass stamp.

## Deliberately not changed

- No judge, adjudicator or mathematical acceptance standard was weakened.
- No current verdict was treated as stale merely because an unrelated item
  changed.
- No speculative auth-race or proof-parser rewrite was made without a
  reproducible defect.
- The canonical context builder was parallelised and exactly cached, not
  replaced by a second hashing implementation.
- Step-5/Step-6 prevention changes remain a separate owner iteration: the
  historical leakage data supports doing that work, but it does not license
  silently changing earlier mathematical roles as part of this Step-8 rebuild.

## Verification

Focused tests cover: two-cycle accounting and refusal before preflight; funded
preflight currency; exact alert identity; strict JSONL diagnostics; fabricated
adjudication rejection; published repair/rejection/escalation routes; exact
digest inventories; write-once historical cutover; immutable hot-reload
prefixes; exact terminal target binding; pooled-hash equality, cache reuse and
invalidation; and the separation between integrity and paid judge gates.

The live Frontier 18 checks are run only while the engine is paused. They verify
the frozen cutover, strict Step-8 edit licences, group scope, published closure,
and current exact judge closure without resuming or dispatching a judge.
