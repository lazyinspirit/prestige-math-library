# Step 5 owner repairs: batch 21 braid carriers

Run: `frontier-37-owner-30`. Date: 2026-10-01.

## Findings and writer guard

The completed `research/frontier-37-owner-30-refute-21.json` records a nonfatal defect in `lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles`, Proof 1.7, and a fatal false fibre label in the A-page summary `pure-braids-fadell-neuwirth-and-asphericity`.

Before mutation, native state showed refute-21 attempt 2 successfully ended at 2026-10-01T11:25:53.480Z and collect-21 successfully ended at 11:25:54.845Z. No Step-5 Alpha dispatch was present, and the process check found no native Alpha worker. Group b covers batches 20, 21, 22. The affected batch's reader and refuter had drained.

## Mathematical checks and repair

Read the complete punctured-disk item, its polygonal boundary-extension supplier `lem-finite-polygonal-disk-and-collar-surgery`, and the complete current `thm-fadell-neuwirth-forgetful-fibration`.

For the affected retraction, checked the construction from the square parametrization through quotient descent. The polynomial g(u,v)=1+u−v+2uv restricts to 1−v on the left, 1+u on the bottom, and 2+v on the right. For fixed u it is affine in v between 1+u and 3u, so its whole range lies in [0,3]. Its inverse boundary parametrization is (0,1−s) for 0≤s≤1, (s−1,0) for 1≤s≤2, and (1,s−2) for 2≤s≤3; these pieces agree at their endpoints. Therefore R₀ is a continuous retraction onto the left, bottom, and right sides U. The straight homotopy stays in the square by convexity and fixes U at every time.

Changed the boundary homeomorphism G to send W onto the **top** side, so G(λ)=U. The existing polygonal extension supplier permits this prescribed boundary homeomorphism. The conjugated homotopy now fixes λ, including its two endpoints. In the quotient of Proof 1.6 all nontrivial equivalence classes lie in λ, so they stay fixed; singleton classes impose no restriction. Joint continuity descends because q×id_I is a continuous surjection from compact P×I to Hausdorff B×I and hence a quotient map. Its final image is q(λ)=Σ and it fixes Σ throughout, as required in Proof 2.1. This repairs the flagged mismatch without changing the Statement or altering the polynomial.

For the page, last-coordinate forgetting has fibre F₁(int D² minus {q₁,…,qₙ₋₁}), directly from the supplier's fibre F_n(M minus Q) with one forgotten point. Replaced only the erroneous first term of the displayed fibration with that fibre. The induction argument and its hypotheses remain intact.

Updated only the matching Proof 1.7 derivation claim in `research/frontier-37-owner-30-batch-21.proof-contracts.json`. Item Statement, Facts, dependencies, metadata, and all other proof steps remain unchanged. No item interface changed, so this proof repair does not open a direct-consumer propagation review.

## Actual scoped verification

- `node tools/tsx-run.mjs tools/precheck.mts items/lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles.md`: exit 0, 1 checked, 0 failing.
- `node tools/rendercheck.mjs items/lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles.md library/braid-groups/pure-braids-fadell-neuwirth-and-asphericity.md`: exit 0; both carriers' YAML and math parse.
- Snapshot comparison: Statement byte-identical; the item differs only by the prescribed boundary-side identification; the contract differs only in the matching step-1-7 claim; page diff consists only of the fibre formula.

| Carrier | Before SHA-256 | After SHA-256 |
| --- | --- | --- |
| Punctured-disk lemma | `c3f9114fd2c4d55b621b3d81b11a3410c2871386000e79adf9ca8ffbcb329076` | `36578113890965fa888a16b141c1131d34f67875a1cf15a3cc100603139ebf9a` |
| Braid A-page | `6375456637e9afad3d72d65dc1555e9e49466a9482c9f39e9d2082e2f82fb98f` | `52289bdd7fa701aac4a545379c9158f37868b9c73c71dd90c1787305fcd5f183` |
| Batch-21 proof contracts | `e8acdfe175b300b3d7b54ea5e8cee38b9feeef8a6b0fb91a3426ec6fa546c873` | `3e63d30bfb8681ef61831917518c21c068e943285ce3411811bd22c9e1ccdd7f` |

These are local owner repair checks, not independent adjudication. The refuter report and native receipts and decisions remain untouched. The engine owns native adjudication and evidence refresh; this lane attempted no gate, retry, or stage transition.
