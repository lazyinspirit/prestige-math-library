# Frontier-23 group c — Step-8 closure recovery, round 1

## Outcome

Handled all 15 exact current group-c rejudge tuples: 5 `confirmed_fatal` and
10 `confirmed_nonfatal`. Every outcome was appended to
`research/frontier-23-judge-adjudications.jsonl` with the complete current
tuple and pre-edit guard hash. Exactly the five confirmed-fatal items were
edited; no confirmed-nonfatal item, page, published dependency, impact record,
judge verdict, or judge stamp changed.

There were no incoming alerts, outgoing cross-group findings, published-item
repairs, orphaned tuples, or blockers.

## Exact dispositions

| item | context | outcome | evidence and disposition |
|---|---|---|---|
| `cex-product-of-complete-measures-need-not-be-complete` | `3e5bbbd95af754b657bb5116860b340470eaba50f449631e57500c349708b248` | `confirmed_fatal` | The proof established planar nullity but claimed product nullity. Repaired by proving each bounded vertical segment product-null from sigma-finiteness, singleton nullity, and the rectangle formula, then using countable additivity. The factors' completeness is now cited explicitly. Defect `frontier-23-S8R1-c-001`; rejudge target. |
| `cor-graph-of-a-measurable-function-is-lebesgue-null` | `f99b99c4f92a21780df31b2b23899df3860c5f9018a97cacb9f31cbc8d11692b` | `confirmed_nonfatal` | Tonelli directly gives the factor-product measure and the proof leaves the already available Borel product/Euclidean measure identification implicit. The claim and witness are correct; no edit. |
| `def-polar-surface-measure-on-the-unit-sphere` | `0a62d17458bc10ca22d091634e6e815efc8b577511f0cd0b55a03b3a32914493` | `confirmed_fatal` | The defining cone had not been shown Lebesgue measurable. Repaired by assuming countable choice and expressing the cone as the continuous preimage of `(0,1] x E` in punctured Euclidean space, then applying the Borel subspace and Borel-to-Lebesgue results. Defect `frontier-23-S8R1-c-002`; rejudge target. |
| `fs-the-product-lebesgue-sigma-algebra-is-the-full-euclidean-lebesgue-sigma-algebra` | `07294b80d33485ff7ee229fa50a9c5910d2ab8278a745d567347b82ef861113d` | `confirmed_nonfatal` | The proof leaves the standard sigma-finiteness of Lebesgue measure implicit before invoking the product theorem. This is an immediately closable local fact/tag gap; no edit. |
| `lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets` | `af967bd39a9006b8e28f976de42a51a0cad390b6bf56d0db81c115e17e356876` | `confirmed_nonfatal` | The cited completion corollary states the forward Borel-plus-null representation while the converse used in step 2.1 follows immediately from the same completion characterization. No claim or construction changes; no edit. |
| `rem-caratheodory-also-constructs-the-product-measure` | `1399662aa2369e9ab6950418185ad37110bc816ee32aef90614ee58b7e920e8b` | `confirmed_fatal` | The remark asserted that the rectangle rule induces a premeasure without a local result proving it. Repaired by identifying premeasure verification as the separate source-backed input and explicitly stating that the extension theorem begins only after that input. Defect `frontier-23-S8R1-c-003`; rejudge target. |
| `thm-branch-discrepancies-for-logarithm-and-complex-powers` | `90e2951c11bdf22cc68f845ecceb5670575c9d3ef2d9588f4e4a1a0a6de726ca` | `confirmed_nonfatal` | The proof leaves implicit the elementary fact that distinct points of `2 pi i Z` are separated by distance at least `2 pi`, so a connected subset is a singleton. No edit. |
| `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions` | `75e8fa39ba7da9b4ba52be66dc69e8277f379a33c4f498fcfc849d47835c4536` | `confirmed_nonfatal` | The monotone-class paragraph leaves the finite rectangle algebra refinement implicit. This is the standard immediate bridge from open rectangles to the generating algebra; the theorem and construction remain correct. No edit. |
| `thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures` | `6dba2792cd1a39bb40cfd4b9af6bef7de8c662a6a4082126d8a71d704739865f` | `confirmed_fatal` | Borel agreement alone did not identify the product measure on the larger factor-Lebesgue product sigma-algebra. Repaired by placing all Lebesgue rectangles in the Euclidean completion, identifying the restricted Euclidean measure through sigma-finite rectangle uniqueness, and proving both completion inclusions. Defect `frontier-23-S8R1-c-004`; rejudge target. |
| `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces` | `a7b3075a34d2a6e33d02e0adc6e1ba855693fb86ff4b45efaf8d0431d83d5e6f` | `confirmed_nonfatal` | Measurability and integrability of real/imaginary positive and negative parts follow immediately from the published integrable-complex-function definition and `|part| <= |f|`; the fact is omitted locally. No edit. |
| `thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets` | `8c253bc754d5d836f9dfe1b3f0debdb6adb67eecda262e93c9b614bf025c8177` | `confirmed_nonfatal` | Step 1.1 omits `L4` from its bracket although `L4` supplies the required sigma-finiteness and is stated immediately above. No edit. |
| `thm-polar-coordinates-formula-for-lebesgue-measure` | `9a173eeccfffdaf3e5c9eb786d0d4354d05ed1b950b13fd2199cdb45270c3aaf` | `confirmed_fatal` | Fact `L1` still called the cited object a measure before step 1.1 proved measurehood. Repaired `L1` to say set function; the existing proof order now establishes measurehood and finiteness before forming the radial product measure. Defect `frontier-23-S8R1-c-005`; rejudge target. |
| `thm-tonelli-and-fubini-for-completed-product-measures` | `661f5a50de890bdbbebfadeba0733929eb5a39d87893a6f9ca67af1cf1dffacd` | `confirmed_nonfatal` | Preservation of L1 membership under almost-everywhere equality is a standard immediate consequence of equality of the nonnegative absolute values almost everywhere; the current cited theorem is narrower than the local use. No edit. |
| `thm-weierstrass-factorization-for-entire-functions` | `3f0d0a99632fc9d0c6543473bf1645ce1a586a5a176d4907ff59eabbdcac3938` | `confirmed_nonfatal` | A nonzero entire function cannot vanish on a neighbourhood by the identity theorem, so its zero order is finite. The proof leaves that elementary dependency bridge implicit; no edit. |
| `thm-zero-exponent-is-bounded-by-entire-order` | `d1f5c7d628c9b2c220aad5f1a43a28a5f147c54a0616c5c4f7b704655374938c` | `confirmed_nonfatal` | The local factor extends globally by defining `g=f/z^m` off zero and using the local factor at zero, equivalently a removable-singularity argument. This is an immediate proof-step completion; no edit. |

## Rejudge targets

The complete group-c round-1 rejudge target set is:

- `cex-product-of-complete-measures-need-not-be-complete`
- `def-polar-surface-measure-on-the-unit-sphere`
- `rem-caratheodory-also-constructs-the-product-measure`
- `thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures`
- `thm-polar-coordinates-formula-for-lebesgue-measure`

## Documentary updates

Regenerated only the six batch-6 proof-contract entries made stale by these
repairs: the three proof-bearing changed items plus
`cex-completed-product-sections-need-not-be-pointwise-measurable`,
`fs-product-of-complete-measure-spaces-is-complete`, and
`fs-the-product-lebesgue-sigma-algebra-is-the-full-euclidean-lebesgue-sigma-algebra`.
Refreshed the risk reviews for the repaired null-line counterexample and polar
theorem, and added the newly required high-risk review for the expanded
Euclidean-completion proof.

## Changed files

- Five item files listed under Rejudge targets.
- `research/frontier-23-batch-6.proof-contracts.json`
- `research/frontier-23-judge-adjudications.jsonl` (15 appended exact outcomes)
- `research/frontier-23-alpha-c-step8-rejudge-round1-ledger-rows.json`
- `research/defect-ledger.jsonl` and generated `research/DEFECT-LEDGER.md`
- This closure-recovery report.

## Checks

- Exact tuple audit: 15/15 answered, with 5 confirmed fatal and 10 confirmed
  nonfatal; exactly the five fatal items changed and zero nonfatal items changed.
- Focused precheck: 3/3 repaired proof-bearing items pass.
- Focused render check: all 5 repaired items pass frontmatter, math, and KaTeX
  validation.
- Dependency check: no errors; 238 standing corpus warnings.
- Strict batch-6 proof contract: 38/38, zero errors and warnings.
- Citation fidelity: 110 citations over 38 authored items, no missing quote and
  no widening candidate.
- Reviewed risk report: 38/38 routed, zero errors.
- Defect-ledger validation and exact adjudication/defect join: 348 frontier-23
  rows, zero errors.
- Step-8 guard: all 75 current whole-run item changes licensed.
- Step-8 scope check: 504 items partitioned, zero open rejections routed, and
  zero cross-group alerts dispositioned.

## Blockers

None.
