# Frontier 37 owner 30: Young and tensor owner repairs

Date: 2026-10-01. Scope: the two completed refuter-14 findings, two source items, and their batch-14 contract rows. The successful refuter had drained. Native status immediately before source mutation (updated 11:21:37 UTC) showed no Alpha writer; group f covers batches 1, 14, and 16. No decisions, finding artifacts, run controls, or gates were changed.

## Mathematical findings and repairs

1. `lem-tensor-place-operators-span-the-symmetric-centralizer`, F7: the refuter correctly identified the false equality between the top elementary symmetric polynomial and the permutation sum. The published `def-elementary-symmetric-polynomials` Definition sums over increasing index sets, hence `e_n=x_1⋯x_n`, whereas the old permutation sum is `n! x_1⋯x_n`. Replace F7 by the correct monomial and record `e_0=1`. The published `cor-power-sums-generate-when-factorial-is-invertible` Statement supplies the polynomial expression in power sums. In step 2.3 the place operators commute, so evaluating that polynomial in their commutative generated algebra gives their product and therefore the diagonal tensor operator; this now uses the correct F7 directly. Add a separate `n=0` opening sentence using the unital algebra, then assume `n≥1` for the substitution. No extra factor or division is required. The zero vector space case still gives the zero algebra for positive n.
2. `cor-paths-in-the-young-graph-index-standard-tableaux`, Remark: the cited largest-entry lemma supplies removable-box deletion only. Replace that dimension citation by `thm-standard-polytabloid-basis` and add the latter to deps. Its published Statement explicitly gives `dim_C S^λ=f^λ`, including the empty partition. The finite path/tableau bijection proof is unchanged.

Both Statements are byte-for-byte untouched by these edits. There is no Definition in either item and no claim interface changed. The new dependency supports the existing Remark; direct-consumer examination is therefore not triggered.

## Exact incremental edits and contract reconciliation

The two item files and the batch contract are untracked in the current working tree, so `git diff` has no tracked before-image. The source edits are exactly the F7 formula replacement, the step-2.3 empty-case sentence, and the corollary dependency/Remark citation replacement described above. The batch-14 contract changes only these two rows: the tensor step-2.3 derivation matches its revised text; tensor F1's stale full-Definition quote is refreshed from its current supplier; the corollary degenerate-boundary evidence gains a `Step 2.1` anchor. The original F7 supplier quotes already matched the correct published sources and remain unchanged. Remark citations are outside numbered proof-contract citations, so no artificial proof fact or proof use was added for the dimension Remark.

## Local checks

- `node tools/tsx-run.mjs tools/precheck.mts items/lem-tensor-place-operators-span-the-symmetric-centralizer.md items/cor-paths-in-the-young-graph-index-standard-tableaux.md --json`: 2 checked, 2 pass.
- `node tools/rendercheck.mjs` on the same two files with `--json`: 2 checked, no errors or warnings.
- `node tools/proof-contract.mjs research/frontier-37-owner-30-batch-14.proof-contracts.json --strict --items lem-tensor-place-operators-span-the-symmetric-centralizer,cor-paths-in-the-young-graph-index-standard-tableaux --json`: pass, no errors or warnings after the exact quote and boundary-anchor refresh. The first scoped attempt exposed those two pre-existing contract defects; both were repaired within the allowed rows.

These are local mechanical checks and an owner helper's mathematical review, not independent adjudication. Refuter findings remain intact for the engine's native adjudication and evidence refresh. No gate was rerun. No external full-text retrieval is claimed: the repairs are independently justified by the exact local published prerequisites read above.

## Hashes

Before repair item SHA-256:

- `lem-tensor-place-operators-span-the-symmetric-centralizer`: `679c3cd5b8e19a0296d9a1d27998ce365e29bf05d0680fab2949e8f0cbf5ed99`
- `cor-paths-in-the-young-graph-index-standard-tableaux`: `ac81afdbd7bb12fe5b5342ef2a165a3ee2b2ff4780be78a25482e7a8acf7e161`

After repair and source SHA-256:

- `items/lem-tensor-place-operators-span-the-symmetric-centralizer.md`: `43039e395ccacda7f4de69957ee0eb1ecec26067d7e01f5ccf5c63c8e46246ac`
- `items/cor-paths-in-the-young-graph-index-standard-tableaux.md`: `86bf16ae7f8683203b7fc916fab29f2e889cb0aed63ba78037d02b64e353ec82`
- `items/def-elementary-symmetric-polynomials.md`: `7f15136abce42bd18c7ac5bb12050a0aeee8a690b18a067d1f4e382a46e8834a`
- `items/cor-power-sums-generate-when-factorial-is-invertible.md`: `cb892e51aee76247ae6487e85623bbf335ed71d9234fd822d59e39c72b516480`
- `items/thm-standard-polytabloid-basis.md`: `163bfd1024171b71fd19531dec728aae0e35409bf5b66b0e2c1c8f0780de9b7f`
- `items/def-commuting-symmetric-and-linear-actions-on-tensor-power.md`: `b52de9fb31f0238388ff0089c2388c419fea3310d5adbea0fa705fb8abda2120`
- `research/frontier-37-owner-30-batch-14.proof-contracts.json`: `b75bd3a702f331f2b0190d2250621a67df2c32497186d56a01bc0c83efa593db`
- `research/frontier-37-owner-30-refute-14.json`: `03defc81026e3c307a3878a27c6e95f2772765951bc07b255d13d9604d953a97`
