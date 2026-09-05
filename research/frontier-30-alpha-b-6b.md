# Frontier-30 Alpha b Step 6b

Run: `frontier-30`  
Group: `b`  
Date: Friday, September 4, 2026

## Scope

Owned batches: `2`, `12`, and `13`.

Routed obligations on current disk:

- Batch `2`: `15` touched items and `1` refuter finding.
- Batch `12`: `6` touched items, `1` reader finding, and `5` refuter findings.
- Batch `13`: `4` touched items and `2` refuter findings.
- Supplemental gate findings created during the mandatory high-risk reread, contract reruns, and the stale-touched reread: `12`.

There were no routed page obligations for this group.

## Adjudication

Touched obligations: `0` close as `accepted_repair` and `25` close as `amended_repair`. The amended carriers are exactly the items whose contract or manifest fingerprints changed later in Step 6b through the required risk-review writes, the batch-13 contract regeneration, the follow-on refuter repairs, or the later stale-touched reread recorded below.

Routed findings confirmed and repaired:

- Batch `2`: the lone refuter finding on `ex-nonclosed-support-without-finiteness` is `confirmed_nonfatal`; I repaired the missing distinguished-open refinement in verification step `2.2`.
- Batch `12`: the reader finding on `cex-rational-map-with-indeterminacy` is `confirmed_nonfatal`; the refuter findings are `1` fatal and `4` nonfatal. I repaired the ring-nonisomorphism witness in `cex-birational-does-not-imply-isomorphic`, replaced the bad neighbourhood-equality citation in `cex-rational-map-with-indeterminacy` by a principal-open localization argument, narrowed `cor-affine-algebraic-set-coordinate-duality-complete` to the classical-variety full-and-faithful claim the current dependencies license, repaired the density step in `lem-dominant-map-pullback-function-fields`, and repaired the restriction-neighbourhood step in `lem-regular-functions-form-sheaf-classical`.
- Batch `13`: the refuter findings are `1` fatal and `1` nonfatal. I repaired the false stalk claim in `ex-skyscraper-sheaf-exact-sequence` and narrowed `lem-pullback-modules-right-exact` to the forward flat-stalk implication the current proof actually establishes.

Additional 6b gate repair on current disk:

- The mandatory batch-13 contract rerun exposed a nonfatal missing-citation defect in `thm-exactness-of-sheaves-stalkwise`: steps `1.1` and `1.2` were using the stalk construction without citing `[F2]`. I repaired the proof-step citations, regenerated the batch-13 contract, and recorded that gate finding.

One further batch-13 citation-use cleanup in `cex-global-sections-not-right-exact` was mechanical rather than mathematical: the proof already established the counterexample, and the repair only aligned an unused fact-block citation with the proof-contract checker. I therefore did not mint a defect row for it.

## Risk Review

Completed `risk_review: {status: complete, reviewer: alpha-6b-b, notes: ...}` on every current high/critical item owned by this group:

- Batch `2`: `12` items.
- Batch `12`: `6` items.
- Batch `13`: `8` items.

Each note names the actual risk signal reread on current disk and why the present proof or repaired text resolves it. The required `risk-report --require-reviewed` rerun is clean for all three owned batch contracts.

## Focused Checks

- `node tools/tsx-run.mjs tools/reflow.mts` on the ten directly edited item files: six needed reflow.
- `node tools/tsx-run.mjs tools/precheck.mts` on the eight proof-bearing routed edits, then on `thm-exactness-of-sheaves-stalkwise` and `cex-global-sections-not-right-exact`: all clean.
- `node tools/rendercheck.mjs` on the eight directly edited routed items, and again on the two batch-13 contract-sync items: both passes clean.
- `node tools/regen-contract-entries.mjs` regenerated the affected batch-2 and batch-12 entries and then all `22` batch-13 entries to clear stale quote and derivation contracts after the current repairs.
- `node tools/proof-contract.mjs research/frontier-30-batch-12.proof-contracts.json --strict` and `...batch-13... --strict`: clean. Batch `2` is clean apart from the pre-existing nonfatal `shotgun-bracket` style warning on `lem-clopen-subset-gives-idempotent-decomposition`.
- `node tools/content-policy.mjs` on batches `2`, `12`, and `13`: all clean.
- `node tools/apply-risk-reviews.mjs --run frontier-30 --file /tmp/frontier30-alpha-b-risk-reviews.json`: applied `26` risk-review records across batches `2`, `12`, and `13`.

Artifacts written:

- `research/frontier-30-alpha-b-6b-decisions.json`
- appended `35` Step-6 rows to `research/defect-ledger.jsonl`

## Blockers

None.

## Gate repair - `step6-routing-adjudicate`

- Reproduced the live stale-touched queue on the current tree and confirmed eleven touched-decision drifts across batches `2` and `12`.
- Re-read the current items against `research/frontier-30-reader-2.md` and `research/frontier-30-reader-12.md` and found no new mathematical defect. I retagged the eleven touched decisions from `accepted_repair` to `amended_repair` and appended the supplemental gate rows `frontier-30-S6-b-gate-2-1` through `frontier-30-S6-b-gate-2-10` and `frontier-30-S6-b-gate-12-1` via `research/frontier-30-alpha-b-6b-gate-ledger-rows.json`.
- Focused reruns: batch `2` -> `34 item(s) routed, 16 adjudication obligation(s), 0 error(s)`; batch `12` -> `30 item(s) routed, 12 adjudication obligation(s), 0 error(s)`.
