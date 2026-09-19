# Step 7 preflight repair — group e

Run: `phase-2-remaining-27`  
Dispatch: `step7-preflight-e-1`  
Batches: 14, 15, 3

## Result

All nine owned preflight failures were stale proof-contract records. I read the
current items, the affected contract entries, the cited local clauses, and the
source locators before changing the contracts. No mathematical item, manifest,
plan, dependency, or frontier-ledger row was changed. Consequently there is no
content repair and no defect-ledger append: each pre/post `itemHashGuard` pair is
identical at the current digest recorded below.

The source-sensitive checks included Fremlin, *Real-valued-measurable
cardinals*, Theorem 8C and Corollary 8G, printed pp. 70–71
(`https://www1.essex.ac.uk/maths/people/fremlin/rvmc.pdf`), and Ishii,
*Regularity Properties and Inaccessible Cardinals*, Lemma 3.11, printed
pp. 48–50
(`https://tsukuba.repo.nii.ac.jp/record/37187/files/Hiromi%20ISHII.pdf`).

## Items

### `cex-a-closed-uncomplemented-subspace-is-not-a-split-banach-submanifold`

- Failure: the L1 quotes for
  `def-countable-base-banach-manifold-and-smooth-map` and
  `def-split-banach-submanifold` no longer occurred verbatim.
- Cause: both definitions had acquired current qualifications about specified
  atlases and componentwise split-submanifold models after this contract entry
  was generated. L1 and steps 1.1/6.1 remain mathematically consistent with
  those clauses. The item repeats the split-submanifold link within L1, so the
  generator emitted the same `(L1, source)` citation twice; one duplicate
  contract row was removed without changing the fact.
- Repair: regenerated the batch-3 citation and derivation entry and retained
  one exact current citation per fact/source pair.
- Checks: strict focused proof contract: 0 errors, 0 warnings.
- `itemHashGuard`, pre = post:
  `781b639eaf213fde3cb9e3030bada1c4db15adc4a2d9a8b18858f326a39ad806`.
- Blocker: none.

### `def-absolute-value-and-singular-values-of-a-compact-operator`

- Failure: `iff-forward` and `iff-reverse` were marked `not_applicable` although
  the Definition says `ran T` is finite-dimensional iff `ran |T|` is, and later
  characterises finite rank by eventual vanishing of the singular values.
- Cause: stale boundary prose incorrectly treated a definition as incapable of
  containing a proved biconditional.
- Repair: marked both rows `checked`. The forward evidence uses the constructed
  bijection `Phi: ran|T| -> ran T` and the finite-rank zero padding; the reverse
  evidence uses the same bijection and the stated non-finite-rank branch, where
  every `s_n` is positive.
- Checks: strict focused proof contract: 0 errors, 0 warnings; focused boundary
  audit: no candidate.
- `itemHashGuard`, pre = post:
  `83febb0d292e30bd7d2a9fe2f4d112f6b840d21d4484031fc5e0d8140631770f`.
- Blocker: none.

### `def-dependent-multiple-choice-finite-level-tree`

- Failure: `iff-forward` was marked `not_applicable` despite the Definition's
  assertion that, for nonempty `A`, the `R`-chain tree is pruned exactly when
  `R` is serial.
- Cause: the row referred to unrelated metacompactness text; the reverse row
  also omitted the empty-node use of `A != empty`.
- Repair: recorded both directions as checked. Prunedness applied to each
  one-entry node supplies an `R`-successor; conversely seriality extends every
  positive-length chain and nonemptiness extends the empty node.
- Checks: strict focused proof contract: 0 errors, 0 warnings; focused boundary
  audit: no candidate.
- `itemHashGuard`, pre = post:
  `0e545bdfd7c6ef76b577a72c262fcbe046bf42ed3f13589b3a0dbffa3ce47ff6`.
- Blocker: none.

### `lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal`

- Failure: the A1 quote for `thm-hilbert-adjoint-properties` no longer occurred
  in the current Statement.
- Cause: the contract contained an old truncated statement. The current
  Hilbert-adjoint identity still gives exactly the self-adjoint pairing used in
  steps 1.1 and 2.1, with the library convention linear in the first argument.
- Repair: regenerated the batch-3 citation and derivation entry from the current
  item and supplier.
- Checks: strict focused proof contract: 0 errors, 0 warnings.
- `itemHashGuard`, pre = post:
  `a7ffead5c19f21f7f3e28b26108c86315bc748c55ab3acb43da39049b04df585`.
- Blocker: none.

### `lem-orthogonal-complement-of-an-eigenspace-is-invariant`

- Failure: the A1 quote for `thm-hilbert-adjoint-properties` no longer occurred
  in the current Statement.
- Cause: the same old truncated supplier quote was stale. The current identity
  still proves `T(E_lambda^perp) subseteq E_lambda^perp` in step 1.4 and the
  self-adjoint identities for the restrictions in step 2.1.
- Repair: regenerated the batch-3 citation and derivation entry.
- Checks: strict focused proof contract: 0 errors, 0 warnings.
- `itemHashGuard`, pre = post:
  `f33993f3eaa2228bcb43b1d98569e2b881b75b807df6728d31d5fe545ffb8a12`.
- Blocker: none.

### `lem-uniform-null-g-delta-capture-functions`

- Failure: the finite-smoke assertion excerpt did not occur in the item.
- Cause: the contract paraphrased independence, while step 1.1 now states the
  exact finite intersection and complementary-intersection product formulas.
  Ishii Lemma 3.11 uses the same disjoint-block independence, exponential
  product estimate, finite capture bound, and Baire argument.
- Repair: regenerated the batch-15 citation and derivation entry, then bound
  `binary-shift-disjoint-cylinder-independence` to the exact current product
  formula in step 1.1.
- Checks: strict focused proof contract: 0 errors, 0 warnings; finite smoke:
  PASS, 2,187 cylinder pairs with empty and nonempty prescriptions.
- `itemHashGuard`, pre = post:
  `ad4a8c25f6bd456e2ce561560ff6a23df48add8224fce1bcb84aa8fc112d4310`.
- Blocker: none.

### `prop-the-index-of-a-fredholm-map-is-locally-constant`

- Failure: the L5 quote for
  `def-countable-base-banach-manifold-and-smooth-map` no longer occurred in the
  current Definition.
- Cause: the supplier now explicitly restricts `chart` to a member of the
  specified atlas. The item's chosen chart pair and the conjugation argument in
  steps 1.1–4.1 already have that reading, so no mathematical change was needed.
- Repair: regenerated the batch-3 citation and derivation entry.
- Checks: strict focused proof contract: 0 errors, 0 warnings.
- `itemHashGuard`, pre = post:
  `c60e1ed1ace36f7129d61f0bf733d6f6704a33179ccd0947e66ca1a3bba3070d`.
- Blocker: none.

### `thm-a-transverse-banach-bundle-section-has-a-split-zero-submanifold`

- Failure: the L3 quote for `def-split-banach-submanifold` no longer occurred
  in the current Definition.
- Cause: the supplier's current componentwise local-model qualification was
  absent from the old quote. The proof uses only the unchanged local slice
  condition and tangent identification in steps 1.1 and 3.1–5.1.
- Repair: regenerated the batch-3 citation and derivation entry.
- Checks: strict focused proof contract: 0 errors, 0 warnings.
- `itemHashGuard`, pre = post:
  `61d2e2ac95f19b92c0dc605a8455fdfaea1274d38b90e48884ab4139675f1e88`.
- Blocker: none.

### `thm-strongly-compact-relative-consistency-normal-moore`

- Failure: the high-risk item lacked a complete current `risk_review`.
- Cause: the repaired proof and citations were present, but its contract record
  had not received the post-repair review.
- Repair: added a specific complete review after checking the current
  F1–F4/steps 1.1–3.1 and Fremlin 8C/8G. The proof composes the 8C consistency
  interface with the PMEA-to-NMSC theorem through an explicit primitive-
  recursive proof translator satisfying
  `thm-formal-relative-consistency-from-verified-proof-reduction`; it does not
  claim a ground-model implication.
- Checks: strict focused proof contract: 0 errors, 0 warnings; focused risk
  report: HIGH 6, 0 errors, complete review present.
- `itemHashGuard`, pre = post:
  `02b58408e2b525b6b82e43a5843863398ef4f209cc59ccbefc98d3c4753b372f`.
- Blocker: none.

## Validation and carrier hashes

Commands run:

- `node tools/regen-contract-entries.mjs` for the five batch-3 mismatch items
  and the batch-15 finite-smoke item.
- `node tools/proof-contract.mjs ... --strict --items ...` on all nine items:
  all focused selections passed with 0 errors and 0 warnings.
- `node tools/finite-smoke.mjs ... --items lem-uniform-null-g-delta-capture-functions`:
  PASS.
- `node tools/risk-report.mjs ... --items thm-strongly-compact-relative-consistency-normal-moore --require-reviewed`:
  0 errors.
- `node tools/boundary-audit.mjs ... --fail-on-contradicted --json` on batches
  3 and 14: no owned candidate remained.

Current contract-file SHA-256 digests:

- batch 3: `861c5c2860c21b158cf3d57e04cb7383b6e8c3ffd21f7e7d87e7b7bfef74e4c6`
- batch 14: `db303aa481b165304f310ccb1d9aa39934ad514b1a3e51d110aee14fe72736d6`
- batch 15: `5c9602cd73ac2461b63bd86096fe2d5c3a2252c3905168b6c4f1afa4c00e8672`

No blocker remains in the owned scope. The next action belongs to the engine:
rerun the Step-7 preflight gate after all groups finish their repairs and
required recertification.
