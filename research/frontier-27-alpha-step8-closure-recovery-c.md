# frontier-27 — Step 8 closure recovery, group c

## Summary

Handled all 13 current group-c rejudge rejection tuples: 6
`confirmed_fatal` and 7 `confirmed_nonfatal`. Only the six fatal items were
edited. No cross-group or published-item defect was found.

The exact current `(id, model, context_sha256, item_sha256)` outcomes were
appended to `research/frontier-27-judge-adjudications.jsonl`.

## Confirmed fatal repairs

| item | context | pre-edit guard hash | repair |
|---|---|---|---|
| `ex-a-constant-map-with-a-large-critical-locus-and-one-critical-value` | `e2beb3850f7e89413482ba70387e244bb1f9ef16eaa04060ed3e3b9e875c4f6d` | `88680fe6786c30ca5fc99d3cadb6010e0f9829f7c05b6d80d97dd4552875eb3e` | Removed the false assertion that `Crit(F)=M` is non-isolated for every nonempty source; the example now concludes only the stated critical locus and value set. |
| `def-interior-product-of-a-form-by-a-vector-field` | `9ff9d6c0df1a512a945fac5c662d8bb1e7e1b15b8cfbbf5f32d51e8f78ec07bb` | `86a99537189fa4fdb76d5416e23aa4c44e497d06a8500f7dc1a534f5e5b48cf3` | Added the local-coordinate argument showing that the pointwise contraction has smooth coefficient functions and therefore lies in `Omega^{k-1}(M)`. |
| `def-interior-product-on-alternating-covectors` | `28719cbb3be3234a8c339c7a8cfed8e191ae5265915feae0018a94d2c4f1930d` | `df8acb088ee0de6f67331b3f341fe82820136f613a989c4719d1b7d8bd1c078e` | The degree-zero clause now explicitly defines the formal codomain `Alt^{-1}(V)={0}`. |
| `def-pullback-of-a-covariant-tensor-by-a-linear-map` | `74361d71f996e0074b67ff9aee226e114ffd5f598b1266bb927301f5e5cdc731` | `e8ae29e89b146f542c944f9c79dc977ade7ecd605ccf585bf9ee421cfa9925b7` | The definition now quantifies `k` as a nonnegative integer before using `W^k` and a degree-`k` tensor. |
| `lem-sard-on-the-infinitely-flat-critical-stratum` | `37b5a27f9c8cf8705601954f3c17bdde46a8f5e337df8e8e856cfd3aff9d3c66` | `7fcb16b970b7736adf9ba097684ab5cd28b3af1c0e2ac45e13a6c7c434ad207a` | Replaced the pointwise Peano estimate by a finite compact-cube reduction and a uniform order-`r` derivative estimate from Taylor with Lagrange remainder and uniform continuity. |
| `prop-transversality-is-stable-on-a-compact-source` | `a2a2c322624dc3b88229b64391f605b0fd5ebd1e43c8cc9c07fed5487d642ca7` | `e1762be03ffe6a793afe13890f26f7f7f05881addd3e24ffad66d687fab53a01` | Replaced the misuse of fixed-map submersion-locus openness by an explicit local minor argument controlled under `C^1` perturbations, including target-chart containment. |

## Confirmed nonfatal closures

| item | context | disposition |
|---|---|---|
| `cor-dimension-of-the-kth-exterior-power-is-binomial` | `28c8ce99803cea3d04f42ab6f536ec023b5a303ea1091166ebdbe19d2631d2d0` | The dimension conclusion follows immediately from the displayed finite basis and the listed definition of dimension. The objection is an omitted local citation. No edit. |
| `fs-every-critical-point-is-an-isolated-point` | `c29370356dc31861d9b66df89e43db89d2e53cbd89e308898ac65b6739f239b2` | A nonsurjective differential is critical by the earlier regular/critical-point definition. The repaired concrete witness is correct; only the fact paraphrase omitted that citation. No edit. |
| `fs-a-general-mixed-tensor-field-has-a-pullback-by-every-smooth-map` | `02c2ae9a028742f28b7e955b8f39319311db8e36fa9ad0f2a416a8e49fd8f85c` | The item concerns smooth fields throughout, and its concrete vector field is smooth. Dropping the adjective in the comparison fact does not affect the refutation. No edit. |
| `prop-functoriality-of-finite-dimensional-exterior-powers` | `f25ca855b2141faee0b15ccc47dab22b3acdf2757a02a4a53bdad78dbd32b61e` | Evaluation against every alternating covector makes the proposed map's multilinearity and alternation immediate, after which the universal property applies. No edit. |
| `lem-sard-slicing-for-compact-null-sections` | `6d780d966cb71c416b15fca5648920346ba279e5a916ecc3b67c0c6215d36c3a` | Closure of Euclidean null sets under subsets is stated in the cited nullity definition. Step 1.1 omitted that fact tag, but the repaired degenerate case is correct. No edit. |
| `prop-countable-unions-and-subsets-of-manifold-null-sets-are-null` | `464078f66278686dfcf35cf8b36cd74a85c5e7cc0d56e22e2540635303d016d3` | Existence of a countable relatively compact atlas is the immediately preceding published proposition. This is a local missing citation, not a false construction. No edit. |
| `prop-pullback-of-covariant-tensors-is-smooth-and-functorial` | `69d095d5598f6aa154cc1f83c78763243dfe649e24357a8cbf08148b8c0e5384` | The coordinate-component smoothness criterion is established earlier on the same page and applies directly to the displayed local coefficient formula. No edit. |

## Rejudge targets

`ex-a-constant-map-with-a-large-critical-locus-and-one-critical-value`,
`def-interior-product-of-a-form-by-a-vector-field`,
`def-interior-product-on-alternating-covectors`,
`def-pullback-of-a-covariant-tensor-by-a-linear-map`,
`lem-sard-on-the-infinitely-flat-critical-stratum`, and
`prop-transversality-is-stable-on-a-compact-source`.

## Licensing and records

- Every content edit is licensed by the matching current `confirmed_fatal` row
  and its pre-edit guard hash in the fatal table.
- Appended six exact-linked defect rows through the prescribed defect-ledger
  append interface; their assembly artifact is
  `research/frontier-27-alpha-c-step8-rejudge-round1-ledger-rows.json`.
- Regenerated all 87 batch-8 proof-contract citations and derivations after the
  repairs, then mechanically re-merged the whole-run contract.
- No nonfatal item, page, impact record, verification stamp, published item,
  or other-group item was changed.

## Changed files

- Six owned item files named in the fatal table.
- `research/frontier-27-judge-adjudications.jsonl` (13 appended exact outcomes).
- `research/frontier-27-alpha-c-step8-rejudge-round1-ledger-rows.json`.
- `research/defect-ledger.jsonl` and generated `research/DEFECT-LEDGER.md`.
- `research/frontier-27-batch-8.proof-contracts.json`.
- `research/frontier-27-proof-contracts.json`.
- This closure-recovery report.

## Checks

- Focused precheck: all three repaired proof-bearing items pass.
- Focused render check: all six repaired items pass YAML, delimiter, and KaTeX
  validation.
- Batch-8 strict proof contract: 87/87 checked, zero errors and zero warnings.
- Batch-8 citation fidelity: 194 citations, no missing quote and no widening
  candidate.
- Batch-8 reviewed risk report: 87 items routed, zero errors.
- Batch-8 boundary audit: no contradicted disposition.
- Batch-8 content policy: 116 scoped items, zero errors and zero warnings.
- Dependency check exits successfully.
- Exact recovery join: 13/13 tuples answered; all six fatal rows have exactly
  one defect-ledger owner.
- Frontier-27 defect-ledger shape validation: 286 current-run rows, zero errors.
- Step-8 guard: 96/96 current changes licensed, zero errors and zero warnings.
- Step-8 scope check: zero open rejection and zero cross-group alert.
- Whole-run defect-ledger linkage currently has twelve unmatched fatal rows,
  all owned by group d; no group-c row is unmatched.
- A manual current-context judge-only check did not produce a reliable gate
  result because its context-hash subprocesses returned malformed or truncated
  JSON for the whole scope. No judge-closure pass is claimed from that attempt.

## Sources and alerts

All decisions were resolved from current local items and their opened on-disk
dependencies. No web source was needed, and no incoming or outgoing
cross-group alert exists.

## Blockers

None within group c. The engine owns the targeted rejudge of the six repaired
items. Run-wide defect-ledger closure still awaits group d; the current-context
hash failure is left to the engine retry path.
