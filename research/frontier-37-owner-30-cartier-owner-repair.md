# Step 5 Cartier owner repair

Run: `frontier-37-owner-30`. Subject: `thm-effective-cartier-divisor-closed-immersion`. Recorded 2026-10-01.

## Evidence and ownership

Read the entire theorem, matching batch-5 proof-contract row, and `research/frontier-37-owner-30-refute-5.json`. Refuter-5 reports a fatal `citation-inaccurate` finding: Facts omit F8 although steps 1.1 and 1.2 cite it. The contract already identifies F8 with `def-scheme` and `def-affine-scheme`. Read both complete definitions: the first provides affine neighbourhoods and the second identifies an affine presentation and its coordinate ring with global sections. Also read the exact Statement of `lem-cartier-divisor-local-equation-equivalence` to reconcile its stale contract quote.

Before mutation, runtime disk state showed refuter-5 ended successfully at `2026-10-01T11:27:11.173Z` and no active native Step-5 Alpha covering batch 5. The same guard was checked before the follow-up contract mutation.

## Repair

Restored concise F8, supported by the existing scheme and affine-scheme definitions: schemes have affine neighbourhoods, and an affine presentation identifies global sections with the coordinate ring. This supplies the previously dangling proof references without adding a supplier or changing the Statement, hypotheses, or dependency interface. No downstream Statement/Definition impact arises.

The first strict scoped contract check exposed ten existing errors in this row. Reconciled F2/F4 use lists with step 3.3; removed unsupported F7/5.1 and F8/4.1 mappings; replaced stale F8/F10 supplier quotes with exact current text; added the explicit final-step inputs 1.1, 2.1, 1.2 and F7. The parser attaches the post-proof gluing paragraph citing F7 to step 6.1. Also corrected the boundary's nonexistent 5.2 reference to the actual converse step 5.1. All edits are confined to the assigned theorem and matching contract row.

The examples-page finding is assigned separately; that page was not edited. Refuter findings and all engine receipts remain untouched. No adjudication, broad review, upstream audit, stage transition or gate attempt was made.

## Actual checks

- `node tools/tsx-run.mjs tools/precheck.mts items/thm-effective-cartier-divisor-closed-immersion.md`: exit 0, 1 checked, 0 failing.
- `node tools/rendercheck.mjs items/thm-effective-cartier-divisor-closed-immersion.md`: exit 0, 1 file, real renderer YAML and KaTeX passed.
- First `node tools/proof-contract.mjs research/frontier-37-owner-30-batch-5.proof-contracts.json --strict --items thm-effective-cartier-divisor-closed-immersion`: exit 1, 10 errors, 0 warnings. These exact stale mappings/quotes were repaired as described above.
- Repeated the same strict item-only contract check after those repairs: exit 0, 0 errors, 0 warnings, 1/1 checked.

These are local format/render/contract checks, not independent mathematical audit or adjudication. Native Alpha and current-content certification remain owned by the engine/orchestrator.

## SHA-256 hashes

- Before `items/thm-effective-cartier-divisor-closed-immersion.md`: `4d577b2615d3c28a99ae6f8ba9776a0e89f2f6b079520b8f88c1d86430365a9c`
- After `items/thm-effective-cartier-divisor-closed-immersion.md`: `6baf7abcae70a3e5b38ca6ac49ee4b33bf52ba20a20361cb881e29fb549fe2d2`
- Before `research/frontier-37-owner-30-batch-5.proof-contracts.json`: `9c7fc6790d6d01a5081f85d94f0eb1d15196b55208942918d7ef57a2f25a696c`
- After `research/frontier-37-owner-30-batch-5.proof-contracts.json`: `483f4b55dd8994f423c76f228a2a65240e93914130bc6350769caea340d5d2f4`
- Evidence `research/frontier-37-owner-30-refute-5.json`: `32aa5c9cbb2d62faaa42a1a678bbbdf651782b4845b19ab7dfcedd3e99180c56`
- Evidence `items/def-scheme.md`: `9ce155e61c89bfc30116ce7d57fc0b363f5906ecb8bab31afb730e10bd046a62`
- Evidence `items/def-affine-scheme.md`: `becbbb838aacc5bbca67ecb8d099685881c080b718186fa41bbf8374795a91a3`
- Evidence `items/lem-cartier-divisor-local-equation-equivalence.md`: `6931f9d53d21e20603a70f3dab77bedc0fb72147ef06dec4f1384e443ed28a7c`
