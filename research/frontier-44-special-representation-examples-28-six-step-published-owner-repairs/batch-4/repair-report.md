# Batch 4 published-carrier repair

Run: `frontier-44-special-representation-examples-28-six-step`; ownership group `batch-4`. One local repair pass; no gate, judge, audit, acceptance, publication or push. Source edits began only after root confirmed native pre-edit ownership claims and frozen routing hashes. Both carriers retain `status: published`, existing IDs, kinds, aliases, provenance and source references. Invalidated `verification.verified` and `verification.judge` mappings were removed; root owns replacement local repair receipts and the canonical ledger.

## Actual before evidence

Full pre-edit bytes, including historical verification, were saved before any source edit:

- `research/frontier-44-special-representation-examples-28-six-step-published-owner-repairs/batch-4/before/def-cardinal.md`; raw SHA-256 `190e80f698a233c00897cdb368f14739c082a4368b8df808b158686450666ced`.
- `research/frontier-44-special-representation-examples-28-six-step-published-owner-repairs/batch-4/before/fs-ordinals-form-a-set.md`; raw SHA-256 `16d7c92a0968e88fd98102f915c24a7578ede62eabf4f361c1684c4a9b84f0eb`.

`carrier-hashes.json` records complete before/current canonical hashes using `itemHashGuard` (verification excluded), raw hashes and exact original Definition/Statement section equality. Current canonical hashes: `def-cardinal` = `48e0d5800771a88910b6974d1bcb9b5812f712336ee318ed862a1fbae15cad63`; `fs-ordinals-form-a-set` = `2ff1ddc944146cf656ffd5c581cbc67358558caf3e922cbf28a38210f18275d0`.

## Confirmed defects and surgical changes

1. The empty set is equinumerous only with itself, so its equinumerosity class is the set `{empty set}`. The final cardinal-definition remark now states that exception and proves the proper-class assertion for every nonempty X: fix a in X, replace a with each y outside X, and conclude that the union of a purported set of representatives contains every set, hence every ordinal, contradicting Burali–Forti. This fixes only the false commentary; the original cardinal and cardinality Definition is byte-identical.
2. The singleton collection `{gamma}` is bounded by gamma but is not a subset of gamma. Refutation step 1.2 now uses Separation inside gamma's ordinal successor, including the endpoint. L2 explicitly supplies successor closure and the at-most-gamma characterization. The original false Statement and substantive Burali–Forti refutation remain unchanged.
3. The cardinal-unboundedness remark now gives the full choice-free Hartogs argument. H = aleph(alpha) cannot lie at or below alpha because inclusion would inject H into alpha. Each beta < H injects into alpha, ruling out a bijection between H and beta, so H is a cardinal above alpha. The union of a hypothetical set of cardinals would bound its members, contradicting unboundedness. The universal-set remark is also explicitly tied to Burali–Forti.

Exact old/new dependency arrays are in `interfaces.json`. `def-cardinal` adds only `thm-burali-forti`; `fs-ordinals-form-a-set` adds only `thm-hartogs` and `def-cardinal`. No dependency was removed. These additions use existing proved local suppliers, add no AC use and create no supplier cycle (the new suppliers' actual deps were read). Root must reconcile these arrays and changed argument evidence in batch-4 contracts/manifests after native writers drain; those files were not edited here.

## Supplier and consumer inspection

Fully read both assigned current carriers and the actual local proofs of `thm-hartogs`, `lem-ordinal-basics`, `lem-ordinal-trichotomy` and `thm-burali-forti`. Checked the new derivations directly against Hartogs leastness/non-injection and ordinal basics (c), (e), (f), (g). No fresh external-source reading is claimed or needed for these elementary repairs.

The original Definition/Statement of each assigned carrier is byte-identical to its archive, so the instruction triggering complete direct/indirect consumer maintenance for an original interface change is not triggered. Searched source items and pages for both IDs and the cardinal aliases `def-initial-ordinal`, `def-cardinality`, plus the defective equinumerosity-class phrasing. This was a focused use scan, not a whole dependency-closure audit.

Actually opened and checked both directly citing published consumers of `fs-ordinals-form-a-set`: `cex-a-category-that-is-not-well-powered` uses only the unchanged ordinal-proper-class conclusion in L3/step 3.1; `cex-a-complete-category-whose-coseparating-sets-are-never-small` uses it in L3/step 1.3 to find an ordinal outside a set of supports. Neither uses the old bounded-endpoint inference or missing cardinal argument; neither needs repair. Also opened `lem-cardinality-of-a-well-orderable-set`, `def-cardinal-arithmetic`, `lem-successor-cardinal-exists`, `rem-choice-ledger`, and `def-equinumerous`; their used initial-ordinal/cardinality and Hartogs interfaces remain unchanged and their empty-set handling does not rely on the defective class remark. The fully opened A-page summary remains compatible. No outside source repair is required by these corrections, and no active draft-writer file was edited.

## Actual checks and limitations

Executed the owned `validate.mjs` runner from the repo root. `validation.json` retains every exact argv, stdout, stderr, exit code, UTC check time and current canonical hash. Reflow reported both unchanged; ordinary precheck passed the proof with zero failures. After final edits/reflow, one batched `node tools/proof-layout.mjs items/def-cardinal.md items/fs-ordinals-form-a-set.md` reported **2 items, 5 steps, 0 defects**. Each one-file precheck `--json` succeeded: cardinal definition has zero proof checks and `not-applicable`; false statement has one proof check and `pass`. The false statement also has the policy-required ordinary `PASS`/`0 failing` output. Each ordinary one-file rendercheck reported `OK — 1 file(s)`; every command exited 0. No source edit or formatter followed final proof-layout.

No unresolved mathematical gap was found in the three repaired claims. These checks are local formatting/rendering evidence, not an independent audit or a new acceptance. Published evidence remains for root to install; publication-policy validation was not claimed while those receipt/ledger links are absent. Contract-only reader findings remain root-owned. Historical source/cycle caps were not altered.
