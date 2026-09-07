# Frontier 33 — Step 8 group e adjudication

Run: `frontier-33`  
Role: `alpha-adjudicate`  
Group: `e`  
Batches: `9`, `10`

## Result

I read all four assigned pages, all 109 owned items, the Step-7 context, and every dependency implicated by a rejection. The six exact rejection tuples are adjudicated at their pre-edit guard hashes: two are `confirmed_fatal`, two are `confirmed_nonfatal`, and two are `false_positive`.

The two fatal defects were repaired narrowly. Their exact adjudications are in `research/frontier-33-judge-adjudications.jsonl`, their matching defect rows are `frontier-33-A8-e-001` and `frontier-33-A8-e-002`, and the batch-10 manifest and proof-contract records made stale by the corrected interfaces were synchronized. No item was added or removed.

There were no Step-7 reader warnings, no cross-group findings, and no group-e alert disposition. The only group-e rejudge targets are the two repaired items.

## Sources consulted

- J. S. Milne, [*Algebraic Geometry*](https://www.jmilne.org/math/CourseNotes/AG.pdf), Proposition 5.35 on p. 114: for irreducible varieties, product dimension is additive. The proof computes the tensor coordinate ring and its transcendence degree.
- Milne, Proposition 5.39 on p. 116: two irreducible varieties are birational exactly when their function fields are isomorphic. This confirms the irreducibility scope of the birational argument.
- The Stacks Project, [Section 33.3, especially Lemma 33.3.3](https://stacks.math.columbia.edu/tag/020C): over an algebraically closed field the product of two varieties is again a variety; in the affine case the proof shows that the tensor product of the two finite-type domains is a domain. This verifies the exact point disputed in the product rejection.
- The Stacks Project, [Section 26.18, Definitions 26.18.1 and 26.18.4](https://stacks.math.columbia.edu/tag/01JW): base change is `Spec(K) ×_Spec(k) X`, and the fibre `X_s` is defined only for a morphism `f:X→S` and a point `s∈S`. These support both fatal repairs.
- Ravi Vakil, [FOAG §10.4.3](https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicimperfect.pdf): a geometric fibre is the fibre of a morphism over a geometric point. This independently confirms that the missing morphism in `def-geometric-fibre` is not optional notation.
- The Stacks Project, [Lemma 26.18.2](https://stacks.math.columbia.edu/tag/01JY) and [Section 29.11, Lemmas 29.11.9–10](https://stacks.math.columbia.edu/tag/01S5): immersions remain immersions after base change, affine morphisms remain affine after base change, and closed immersions are affine. Together with the repository definition of a closed immersion, these confirm that the omitted open-restriction sentence is an immediate local proof bridge rather than a false claim.

## Adjudications

### `cor-dimension-birational-invariant`

- Rejection tuple: `gpt-5.6-terra`; context `872d5a264b82342b9932fc467becfdbd27dab9e5372ad41120109a182fbbc316`.
- Pre-edit guard: `d86596ed79591c1227c8f4a483b348386dc60ddcb2f2c3222ecea8188c22c707`.
- Outcome: `false_positive`.
- Decision: `def-affine-variety-classical` defines a classical affine variety to be nonempty and irreducible. F2 exactly restates the opened theorem `thm-birational-equivalence-function-fields`, and step 2.1 applies it only to affine charts of irreducible varieties. The item asserts no function field for a reducible affine algebraic set.
- Repair and rejudge: none.

### `def-geometric-fibre`

- Rejection tuple: `gpt-5.6-terra`; context `972e43f7dd6c4388d4541ee4bd74708d4488c6f28266505d510efe9bac744f5f`.
- Outcome: `confirmed_fatal`; defect type `other`.
- Defect ledger: `frontier-33-A8-e-001` (`missing-map`).
- Pre-edit guard: `0aa5559b91643b0cd52198a803b740203bcce05a374ce8f55973d67ea833cf60`.
- Post-edit guard: `f1ae30be6b590adef8a8d424dcbb763705fc6c3ac85f0702f0749ef46329aec7`.
- Decision: the objection is exact. The displayed `X_s` was undefined because the definition supplied no morphism from `X` to `S`.
- Repair: the definition now fixes `f:X→S` and calls the construction the geometric fibre of `f` at `s`. Its algebraic-closure convention and formula are unchanged.
- Rejudge target: yes.

### `ex-linear-system-fibre-dimension-rank-loci`

- Rejection tuple: `gpt-5.6-terra`; context `89f6704486de26fa714ee54d587e92966c2a6c0a225106c2fc487ccff3c6b0ae`.
- Pre-edit guard: `a6919c18dc41316ebb525ed5af0350481146a10b8e2973a05f269cb7ec790770`.
- Outcome: `confirmed_nonfatal`.
- Decision: when `Y` is empty, `Y×A^n` and `W` are the empty algebraic set, there are no fibres to check, and every rank locus is the empty closed subset. The statement and computations are correct; step 1.1 omits only this immediate boundary sentence.
- Repair and rejudge: none, as required by the fatal-only rule.

### `lem-base-change-affine-morphisms`

- Rejection tuple: `gpt-5.6-terra`; context `3dfff7d3cf681762e5c3a4149d7862354529785b311d8bb26917ecdecc4d1652`.
- Pre-edit guard: `7dd4f4d67aca6b20c93ce745f1a38807ec5300314f75be8cb62c22443df2e882`.
- Outcome: `confirmed_nonfatal`.
- Decision: restricting a closed immersion to an open subset of its target restricts both its homeomorphism onto a closed subset and its surjective structure-sheaf map, so it is again a closed immersion. F5 then identifies the restriction over `Spec A` as `Spec(A/I)`. This is an immediately closable one-line proof gap, not a false statement or construction.
- Repair and rejudge: none, as required by the fatal-only rule.

### `lem-base-extension-field-coordinate-ring`

- Rejection tuple: `gpt-5.6-terra`; context `cd3a71596360367d74efe11eeb7c590a0175418eff79f14fe15a0322804428fe`.
- Outcome: `confirmed_fatal`; defect type `other`.
- Defect ledger: `frontier-33-A8-e-002` (`ill-typed-claim`).
- Pre-edit guard: `89c397e17e01c91229883d67c738cec09b9ad8f81c55064f73e4327a16d36b03`.
- Post-edit guard: `44cc1f94217f59497253a1c7585800a7f8ad44db9bbf1504c8fdcd04ab0cc2bd`.
- Decision: the statement put `U=Spec A` inside `X_K` while asking for an unspecified inverse image. Its proof instead and correctly pulls an affine open of `X` back along the canonical projection.
- Repair: the statement now names `X_K→X` and places `U=Spec A` in `X`. No proof or dependency changed.
- Rejudge target: yes.

### `thm-dimension-product-varieties`

- Rejection tuple: `gpt-5.6-terra`; context `5903fdba70350e0d7b159bcde141ca9b23c729f1b41b502108cbeca72f36dcc8`.
- Pre-edit guard: `8ae18bf8ccb1af553ba3ee43b9ec2b4de439deb69ec066555010f1c015f63760`.
- Outcome: `false_positive`.
- Decision: F5 explicitly says the affine product is a classical affine variety, and the repository definition makes every such object irreducible. The opened proof of F5 additionally proves directly that `A⊗_kB` is a domain. Thus step 1.1 establishes the irreducibility needed in steps 2.2–3.1 exactly as written.
- Repair and rejudge: none.

## Rejudge targets

1. `def-geometric-fibre`
2. `lem-base-extension-field-coordinate-ring`

No unchanged item is a rejudge target.

## Contract synchronization

The two repairs changed public source text without changing dependencies. I synchronized the `def-geometric-fibre` summary in `research/frontier-33-batch-10.pages.json`; in `research/frontier-33-batch-10.proof-contracts.json`, I updated only the now-stale exact quotations of `def-geometric-fibre` and `lem-base-extension-field-coordinate-ring`. The affected consumers' arguments were reread: they use the same corrected morphism/base-change data, so no downstream mathematical claim or proof needed a licensed content edit.

## Validation and blockers

- `node tools/tsx-run.mjs tools/precheck.mts items/lem-base-extension-field-coordinate-ring.md`: 1 checked, 0 failing. The repaired definition is not proof-bearing.
- `node tools/rendercheck.mjs` on both repaired items and their owning page: 3 files, no errors.
- `node tools/citecheck.mjs` on both repaired items: every recognized move is supported.
- `node tools/content-policy.mjs research/frontier-33-batch-10.pages.json`: 53 scoped items, 0 errors, 0 warnings.
- `node tools/proof-contract.mjs research/frontier-33-batch-10.proof-contracts.json --strict`: 42/42 proof-bearing items, 0 errors, 0 warnings.
- `node tools/citation-fidelity.mjs research/frontier-33-batch-10.proof-contracts.json`: 132 citations; no missing quote and no widening candidate.
- `node tools/tsx-run.mjs tools/articlecheck.mts`: all 5 narrative articles clean.
- `node tools/depcheck.mjs --quiet` found no group-e dependency error. The run-wide command remained red on the unrelated published item `def-tensor-product-total-complex-of-chain-complexes`, which currently has neither an audit nor verified stamp; it also reported 475 repository-wide warnings.
- Exact group audit: all six rejection tuples occur once with the correct pre-edit guard hashes; both fatal rows have distinct repaired hashes and exactly one matching group-e defect row.
- `node tools/step8-scope.mjs check --run frontier-33`: passed at the final check with 8 groups, 923 items, 77 routed rejections, and 0/0 reader alerts.
- `node tools/defect-ledger.mjs validate --run frontier-33`: 602 run rows checked, 0 errors.
- The run-wide `step8-guard` did not yet pass because ten changed items owned by other groups had no recorded fatal licence at check time. Neither group-e repaired item appeared in its errors; both were counted among the licensed changes.
- The run-wide defect-ledger cross-check did not yet pass because six confirmed-fatal group-f adjudications lacked their matching defect rows at check time. Both group-e fatal adjudications have matching rows.

No group-e blocker remains. The two run-wide failures are concurrent work owned by the engine and other assigned groups; I made no out-of-scope repair in response.
