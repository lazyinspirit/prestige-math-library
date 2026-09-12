# Step 7 adjudication — group g

Run: `phase-2-next-17`  
Owned batch: 11  
Status: locally complete; append-only shared-ledger blocker recorded

## Completed rejections

### `ex-condensation-bounds-a-constructible-real`

- Rejection: `(ex-condensation-bounds-a-constructible-real, gpt-5.6-terra, 80c9e45808305d49648b8fa2933438bd120838c0181c7f3ff3bc9776c6f80546)`.
- Outcome: `confirmed_fatal` (`dependency_citation`). F3 attributed the recursive collapse equation to `lem-collapse-fixes-transitive-parts-and-orders-ordinals`, whose Statement gives only pointwise fixing of transitive subsets and the ordinal order-type calculation.
- Repair: state F3 exactly and derive the collapse equation for `x` from the collapse isomorphism and pointwise fixing of `omega`. Pre/post guard hashes: `3a8d311ab29f8fa2a4d9ce310a910e94f33295917f2f0badda1be419a48071ab` / `69083be64b50cc936d49744a07bfcc98473ce10355609b225298d28f688bade4`.
- Defect: `p2-next17-step7-g-condensation-real-collapse-citation`.
- Checks: focused precheck, rendercheck, and strict proof-contract check pass.

### `ex-diamond-seals-a-maximal-antichain-in-l`

- Rejection: `(ex-diamond-seals-a-maximal-antichain-in-l, gpt-5.6-terra, 13b19caf0e7e9942171cc868319f5d715ca9773144314e7a6ec023efeb00b1cf)`.
- Outcome: `confirmed_fatal` (`dependency_citation`). F1 attributed the guessed-antichain/singleton-root stage rule to a supplier whose Statement gives only the global diamond-to-Suslin-tree theorem.
- Repair: state F1 exactly, derive the local stage only from `lem-countable-tree-antichain-sealing`, and use F1 solely for the separate global construction. Pre/post guard hashes: `d1b5a92078b77dd1279413b0ac0ac03c26946f85d7d585e81e5903892a7e74b2` / `0b5903bcba57407e8aef4c3a2679a768098f88b3f379065244b39006ecf9cb81`.
- Defect: `p2-next17-step7-g-diamond-stage-rule-citation`.
- Checks: focused precheck, rendercheck, and strict proof-contract check pass.

### `fs-l-equals-v-in-zf`

- Rejection: `(fs-l-equals-v-in-zf, gpt-5.6-terra, 81a06bb6398a84aeacde8717265d0546b974b135f90bfde22e9351a8f4ec4528)`.
- Outcome: `confirmed_fatal` (`dependency_citation`). The cited corollary is parameterized by a specified arithmetic base `B`, so it did not license the asserted PA theorem. The independent Step-6 warning `s8a-8bee6c602c3188442aa984ef` also correctly identified that the uniform PA-verified Cohen constructor had never been supplied; it is dispositioned `covered_by_rejection` because the same repaired passage removes both defects.
- Repair: remove the uniform arithmetic-constructor claim and use the published external finite-fragment model-transfer theorem. Add and fully author the missing dependency `lem-finite-support-constructibility-absoluteness`, register it on the condensation page, batch manifest, proof contract, and Step-7 scope, and cite it in the consumer. Pre/post consumer guard hashes: `d5d5cb39627f7e196f37ff46fb165e319f92612801194810f264b9ebfa9cc580` / `dc8b533242a8e1c8381cb315fb62def3b3f5692b2b11e4f2f90aa339449288f5`. New-lemma guard: `86231acc7bbea9b4b8fcb102fdedd2d1b0657235be2a35986e94d4c6b5b7f0fb`.
- Defect: `p2-next17-step7-g-v-equals-l-formal-transfer`.
- Rejudge/coverage targets: changed consumer `fs-l-equals-v-in-zf`; auditor-created lemma `lem-finite-support-constructibility-absoluteness` enters the engine's normal coverage and targeted checks without a manufactured rejection.
- Checks: focused precheck and rendercheck pass for both items and both affected pages; strict proof-contract checks pass for the new lemma and consumer.

### `lem-finite-fragment-l-interpretation-with-gch`

- Rejection: `(lem-finite-fragment-l-interpretation-with-gch, gpt-5.6-terra, 05d37ea81c2b47e241b07f0a21461a7db8e14e7aae704ac4fbc8a54c32a6da65)`.
- Outcome: `confirmed_fatal` (`logic`). Step 5.1 put interpretation-obligation proof codes into `Gamma`, although `Gamma` must be a finite set of certified ZF axiom sentences.
- Repair: extract the nonlogical ZF axiom occurrences from both the translated-axiom derivations and the fixed interpretation-obligation derivations, union those finite sentence supports, and state explicitly that proof codes are not members of `Gamma`. Pre/post guard hashes: `5c3ba2a2e742f5b1ac236d8b3c26fe95fb97e73a3f6e71637fcf6e9f96d1e51a` / `496bef4274a2bf1f37c5e3909fb5c6268c27c130223d487b79d194032944101b`.
- Step-6 warning `s8a-464aac44342b3d02f826ae91`: `nonfatal`. F1 and F2 prove the eight fixed relativized axiom blocks; they are constants, while steps 2.2–4.1 separately handle the schema-uniform constructors. Printing the concrete proof codes would be bookkeeping detail, not a missing inference. This is distinct from the repaired type error in `Gamma`.
- Defect: `p2-next17-step7-g-l-fragment-proof-codes`.
- Rejudge target: `lem-finite-fragment-l-interpretation-with-gch`.
- Checks: focused precheck, rendercheck, and strict proof-contract check pass.

### `lem-finite-stage-l-history-and-limit-level-absoluteness`

- Rejection: `(lem-finite-stage-l-history-and-limit-level-absoluteness, gpt-5.6-terra, 492011cf2118aeabf2b4aac08a4a52b984e5da5f71867cdee3a70ee78a76da57)`.
- Outcome: `confirmed_fatal` (`dependency_citation`). F7 attributed the successor least-definition-code and limit-union recursion to a published Statement that exported only existence, initial segments, fixed coding, and internal agreement.
- Repair: expose the exact recursion already proved in `thm-canonical-definable-global-well-order-of-l` in that supplier's Statement through the prescribed published-repair ledger, and make F7 state the repaired interface literally. Consumer pre/post guard hashes: `e243456192a43a1246a22af59c7947254fb6496bbfc58ac8f284d78dce9899d9` / `932ecfce04f0fa3fce8e5023fc65fbb0bb60f38dd817bdc969fae515a3a2b956`. Published supplier pre/post guard hashes: `43db883b9dd633782505bf4798e84463e468a40222ddf917c1dcea88ac9b9fa6` / `9b89c6782ada630fbf191f4d4df3af14f126e72a675906a92dba7613637e8d02`.
- Step-6 warning `s8a-03c40d84a82f7b5345b7d75c`: `nonfatal`. The fixed sentence uses finitely many explicit syntax/table/Decode clauses; external induction identifies accepted histories, and the successor and limit constructions fit well inside the stated finite stage overheads. The warning identifies compressed bookkeeping, not a false characterization or used numerical bound.
- Defect: `p2-next17-step7-g-finite-stage-l-order-interface`.
- Rejudge target: `lem-finite-stage-l-history-and-limit-level-absoluteness`; published certification target: `thm-canonical-definable-global-well-order-of-l`.
- Checks: focused precheck and rendercheck pass for both consumer and supplier; strict proof-contract validation passes for the consumer.

### `lem-forcing-monotonicity-density-and-decision`

- Rejection: `(lem-forcing-monotonicity-density-and-decision, gpt-5.6-terra, 3971236938cdc55754e0763a1c28951ed076aa1cfa17d43457b9a66e5a81b8ec)`.
- Outcome: `confirmed_fatal` (`logic`). Step 4.1 inferred that the externally defined decision set belongs to `M`, although quantified external forcing ranges over all names and internal forcing ranges only over names in `M`.
- Repair: retain the external decision-density argument, state that Separation inside `M` instead forms the set defined with `Vdash^M`, and explicitly decline to identify the two sets. Pre/post guard hashes: `994032b64d3765e183690bdb02909f93ad2711a0b119d6ed301ba796c33f1ae4` / `57ebc05add6441b45bae7d58b77a589610ddb77c878907cc598658cec480b75b`.
- Defect: `p2-next17-step7-g-external-internal-decision-set`.
- Rejudge target: `lem-forcing-monotonicity-density-and-decision`.
- Checks: focused precheck, rendercheck, and strict proof-contract check pass.

### `rem-intermediate-models-and-complete-subalgebras`

- Rejection: `(rem-intermediate-models-and-complete-subalgebras, gpt-5.6-terra, 38c7b59ef10541210b8bc1f106674bdbddfcaefcffadeedfb0b43de943f55cff)`.
- Outcome: `confirmed_fatal` (`other`: missing hypothesis). Join preservation by the inclusion of an independently structured Boolean algebra does not imply preservation of complements or meets; the judge's four-element finite example makes the restricted filter fail directedness. An append-only correction row records the required closed-enum class; the earlier row used the descriptive defect-ledger subclass `missing_hypothesis` in the adjudication field.
- Repair: require the inclusion to be a Boolean embedding that also preserves all ground-model joins, and spell out the preserved finite operations used by the proof. Pre/post guard hashes: `8a6eb2a6fd26346e064d5775348340105734901185f4f741ff420cca769ab272` / `d5109c58e5a878e9f5e04d815ea9b63811c4f62d6330a69d7ef8d59701c93ad6`.
- Defect: `p2-next17-step7-g-complete-subalgebra-embedding`.
- Rejudge target: `rem-intermediate-models-and-complete-subalgebras`.
- Checks: rendercheck and strict proof-contract check pass; the remark has no proof-format body for precheck.

### `thm-forcing-equivalence-and-boolean-completion`

- Rejection: `(thm-forcing-equivalence-and-boolean-completion, gpt-5.6-terra, 3b25749d2413546b86559c3c1f7f8fb881ff91b7150804c4bd8e5482b4dff6ae)`.
- Outcome: `confirmed_fatal` (`logic`). The assertion that Boolean zero cannot be a forcing condition fails for the full two-element algebra, which is a valid preorder and has no incompatible positive pair.
- Repair: identify the actual obstruction: the canonical nonzero image is not dense below zero in the full Boolean algebra, so the dense-translation theorem requires the nonzero part. Explicitly preserve the valid two-element endpoint. Pre/post guard hashes: `4ee54c131e3b2a29bf6584eb037a2eecadc14d207f3cf9969c1d2dc17ff77f97` / `4f83bf226929c05b7eda1a41bcf4e386efe0c9b83daffdfcfca2dcf9aac80d01`.
- Defect: `p2-next17-step7-g-boolean-zero-density`.
- Rejudge target: `thm-forcing-equivalence-and-boolean-completion`.
- Checks: focused precheck, rendercheck, and strict proof-contract check pass.

### `thm-formal-consistency-of-zfc-plus-gch-from-zf`

- Rejection: `(thm-formal-consistency-of-zfc-plus-gch-from-zf, gpt-5.6-terra, d1a4d258c2571ab14889f78f9415f82958f5e28cb331e9b57ad23ee652d99c71)`.
- Outcome: `confirmed_fatal` (`dependency_citation`). F1 attributed a final translated-contradiction refutation block to a supplier whose Statement exports only the PA-verified proof translator and its guarded translated endpoint.
- Repair: narrow F1 to that exact endpoint and explicitly build the fixed ZF append block from the literal translation of `bot`, equality reflexivity, quantified Boolean reasoning, and explosion; PA verifies the finitely many shifted line templates together with the supplier's uniform checker result. Pre/post guard hashes: `05643bfc632bdd3e6ed4141179fa42a098b2d5b1896d02f5f08d65ef5f42ddd2` / `3f87f192e55914d93cce9d2a1cbf3b3e676a520ab4c1ee7899cf0631822e3057`.
- Defect: `p2-next17-step7-g-gch-contradiction-block`.
- Rejudge target: `thm-formal-consistency-of-zfc-plus-gch-from-zf`.
- Checks: focused precheck, rendercheck, and strict proof-contract check pass.

### `thm-generic-extensions-satisfy-zf-and-zfc`

- Rejection: `(thm-generic-extensions-satisfy-zf-and-zfc, gpt-5.6-terra, 1b1500bc90ead5ab1b84a2c156920d1a1c3568d8a53254c762bdb93a5a1aa9ca)`.
- Outcome: `confirmed_fatal` (`logic`). Replacement step 2.2 used an undeclared name tuple `vec beta`, leaving its rank-minimization forcing predicate undefined for the formula whose value parameters are `vec b`.
- Repair: use the declared tuple `vec tau` from step 1.2, whose valuation is `vec b`. Pre/post guard hashes: `98400f3ac540482205d0e9e17cb629d725993435ae3efba4d81e370b1ff0e336` / `784d96d955ac804bdce467f7f68aa9f06bd97abd14b82cc8ab6df32958567901`.
- Defect: `p2-next17-step7-g-replacement-parameter-tuple`.
- Rejudge target: `thm-generic-extensions-satisfy-zf-and-zfc`.
- Checks: focused precheck, rendercheck, and strict proof-contract check pass.

## Reader-warning-only dispositions

- `s8a-8077b3d25799299bdfeb2178` on `thm-v-equals-l-implies-diamond`: `nonfatal`. For `xi in X intersect omega_1`, elementarity supplies in `X` a surjection from `omega` onto `xi`; closure under evaluation makes the intersection downward closed. At the collapsed stage, the initial-segment property puts every earlier canonical-order pair in `M`, and the fixed badness predicate is bounded-absolute. Both compressed inferences follow without a new hypothesis.
- `s8a-b528f4715f020ef7cb4d3fe2` on `def-skolem-hulls-in-constructible-levels`: `nonfatal`. The definition fixes one formula enumeration before defining the hull, so the resulting operation is deterministic relative to that convention and uses no family of choices. Enumeration-independence is neither used nor needed for elementarity and size.

## Sources consulted

- Complete local statements and relevant proofs: `thm-condensation-for-constructible-levels`, `lem-collapse-fixes-transitive-parts-and-orders-ordinals`, `thm-collapse-of-elementary-membership-submodels`, `lem-canonical-small-skolem-hulls-in-l`, `thm-diamond-constructs-normal-suslin-tree`, `lem-countable-tree-antichain-sealing`, `thm-constructibility-is-absolute-and-l-is-minimal`, `lem-derivation-finite-support-and-concatenation`, `def-countable-transitive-model-and-fragment-transfer`, `lem-forcing-transfer-for-finite-zfc-fragments`, and `thm-finite-fragment-relative-consistency-transfer`.
- Kenneth Kunen, *Set Theory: An Introduction to Independence Proofs*, https://pages.jh.edu/rrynasi1/NewFoundations4Math/Literature/Set/Kunen1980SetTheory-AnIntroductionToIndependenceProofs.pdf. Chapter VI Theorem 3.8, printed pp. 171–172, supplies a fixed finite conjunction sufficient for constructibility absoluteness/minimality in transitive set models. Chapter VII §1, printed pp. 184–186, states the exact external finite-fragment structure of the proof of `Con(ZFC) -> Con(ZFC + V != L)` and explicitly distinguishes it from assuming a full ZFC CTM.
- The same Kunen source, Chapter VI Definition 4.1 and Theorem 4.5, defines the canonical order by retaining old elements, ordering new elements through least definition codes, and taking unions at limits, and proves the construction absolute to transitive models of a fixed finite fragment.

## Validation and handoff

- Batch 11 strict proof-contract validation passes: 37/37 items, 0 errors, 0 warnings. Two stale citation-use locators exposed by the final full-batch run were corrected without changing item content: `lem-definable-subsets-of-constructible-levels-are-small` F1 and `thm-forcing-preserves-ordinals` F1 now name their actual steps 1.1 and 1.2.
- Manifest dependency validation passes for all 37 batch-11 items. Batch 11 has no same-frontier cross-batch edge, so its input remains `[]`; the prescribed unified frontier-ledger refresh completed after the dependency edits. Group precheck passes for all 33 proof-bearing items; rendercheck passes for the 37 items and four pages; citation fidelity passes for 153 citations; scoped `git diff --check` and JSON parsing pass.
- The defect-ledger reconciliation passes: 115 run rows checked, 0 errors. All ten group-g fatal adjudications have matching fixed defect rows, and all five Step-6 warnings have owning-group dispositions.
- Batch-11 judge-only coverage finds 0 unadjudicated rejections and 0 open fatal decisions. It correctly schedules 11 engine-owned coverage targets: the ten repaired consumers and the new auditor-authored lemma.
- The global scope check is held only by two missing dispositions owned by other groups: `s8a-29aad83de5e5f8d6d8be93f9` and `s8a-6f948b122eceb89a6367e7ec`.
- The global fatal-only guard recognizes all group-g existing-item edits. Its remaining failures are the expected not-yet-created engine certification for `lem-finite-support-constructibility-absoluteness` and an unrelated unlicensed edit to `ex-the-punctured-euclidean-plane-is-geodesically-incomplete`.

## Blocker

The first adjudication row for `rem-intermediate-models-and-complete-subalgebras` used the descriptive value `missing_hypothesis` as `defect_type`, but this ledger field has the closed enum `logic | dependency_citation | other`. I appended a later exact-tuple correction using `other`; the exact-evidence reader and fatal-only guard select that current row, and defect-ledger reconciliation passes. However, `level-coverage.mjs` validates every historical row before selecting the latest one and therefore still reports the preserved original at `research/phase-2-next-17-judge-adjudications.jsonl:101` as malformed. Removing or rewriting that row is forbidden by this dispatch's append-only/no-rewrite boundary, and no sanctioned adjudication-ledger correction interface exists. Controller/operator action is required to reconcile the historical malformed row or its gate treatment. No content, contract, scope, alert, or judge work remains for group g; engine-owned certification and rejudging remain pending after that preflight issue is cleared.
