# frontier-20 Alpha-d Step 6b

Date: Wednesday, August 26, 2026.
Run: `frontier-20`
Group: `d`
Scope: batches `5`, `8`, `10`

## Batch 5

- `touched:5:thm-rational-continued-fraction-termination` — `accepted_repair`.
  The reader's repaired descent now starts at the positive first complete quotient, so the negative-rational counterexample no longer applies.
- `touched:5:lem-periodic-continued-fraction-is-quadratic` — `accepted_repair`.
  The repaired proof now isolates the purely periodic tail, proves it irrational from the tail quadratic, and recovers the full value through the prefix map.
- `touched:5:lem-quadratic-irrational-complete-quotients-are-finite-state` — `accepted_repair`.
  The statement is now narrowed to the finite-state claim actually used downstream, and the proof runs through bounded discriminant-preserving coefficient triples.
- `touched:5:thm-continued-fraction-convergents-are-best-approximations` — `amended_repair`.
  The reader fixed the broken denominator comparison. Rechecking the live theorem exposed a remaining fatal `n=0` overstatement and an imprecise basis citation, so 6b narrowed the theorem to `n >= 1` and rewrote the cited facts accordingly.
- `touched:5:thm-lagrange-periodic-continued-fraction-theorem` — `amended_repair`.
  The mathematics was sound, but the live proof still contained malformed step prose (`then alpha`, `agree:`) that no longer wrote the argument correctly; 6b repaired the written carrier.
- `touched:5:ex-continued-fraction-of-square-root-fourteen` — `amended_repair`.
  The live example still contained malformed proof prose and stale theory scaffolding; 6b rewrote it as the direct deterministic computation actually used.
- `refuter:5:1` on `thm-continued-fraction-convergents-are-best-approximations` — `confirmed_fatal`.
  The refuter's `n=0` boundary objection was real. On Wednesday, August 26, 2026, the current theorem still overclaimed the denominator-at-most-`q_n` consequence without the needed `n >= 1` boundary.

## Batch 8

- `touched:8:cor-touchards-congruence-for-bell-numbers` — `accepted_repair`.
  The repaired fixed-partition classification now explicitly separates the singleton and one-block orbit cases, which is the missing orbit argument the old proof skipped.
- `touched:8:fs-blockade-order-never-matters-for-x-sparsity` — `accepted_repair`.
  The live witness no longer overloads the sparsity parameter and the vertex name, and the counterexample argument is now well-formed.
- `touched:8:lem-p-four-free-pattern-graphs-have-square-root-homogeneous-sets` — `accepted_repair`.
  The source-backed pure-pair split now has an exact locator, and the induction closes cleanly on the current bytes.
- `refuter:8:1` on `def-signed-and-signless-stirling-first-kind` — `confirmed_nonfatal`.
  The definition's empty case really needed `[0]=varnothing`, not `[\varnothing]`; this was a notation defect, not a mathematical failure of the definition.

## Batch 10

- `touched:10:cor-additive-categories-are-closed-under-passage-to-the-opposite` — `accepted_repair`.
  The repaired proof now uses the same biproduct diagram after passing to opposites, rather than the old unsupported finite-coproduct shortcut.
- `touched:10:cor-any-adjoint-between-additive-categories-is-additive` — `accepted_repair`.
  The left-adjoint half now routes through opposite categories and the repaired opposite-additive corollary, which closes the earlier gap.
- `touched:10:cor-the-uniqueness-of-the-enrichment-is-an-instance-of-the-eckmann-hilton-argument` — `accepted_repair`.
  The live proof now uses the actual interchange law between the canonical biproduct sum and the second compatible law on each hom-set.
- `touched:10:fs-every-idempotent-splits` — `accepted_repair`.
  The witness now names the explicit ring `Z x Z`, so the non-splitting idempotent argument is well-formed.
- `touched:10:thm-an-additive-functor-preserves-finite-biproducts` — `accepted_repair`.
  The repaired proof now constructs the comparison maps `F(A \oplus B) <-> FA \oplus FB` and proves they are inverse isomorphisms.
- `refuter:10:1` on `cex-a-zero-kernel-does-not-force-monicity-in-a-merely-semiadditive-category` — `confirmed_nonfatal`.
  The witness category `CMon` really is semiadditive, but the current item had not written that finite-product/finite-coproduct check on the page. 6b inserted the direct calculation, so the defect was a nonfatal justification omission rather than a false witness.

No page or reader-findings obligations were routed to group `d`.

## Gate repair — `risk-report` (Thursday, August 27, 2026)

- Reopened the 16 live high/critical batch-10 carriers named by the Step-6 gate
  repair against the current item text, `research/frontier-20-reader-10.md`,
  `research/frontier-20-reader-findings-10.json`, and
  `research/frontier-20-refute-10.json`.
- Two additional current-carrier defects were real on Thursday, August 27, 2026:
  - `gate:f20-d-g10-1` on
    `prop-biproducts-are-associative-commutative-and-unital-up-to-canonical-isomorphism`
    — `confirmed_fatal`. Steps `1.1`-`1.3` had still been citing initial/terminal
    uniqueness where product universal-property uniqueness was the load-bearing
    fact. The repaired carrier now constructs the associativity, symmetry, and
    unit isomorphisms directly from the product universal properties.
  - `gate:f20-d-g10-2` on
    `thm-the-idempotent-completion-is-idempotent-complete-and-its-inclusion-is-fully-faithful-and-universal`
    — `confirmed_nonfatal`. Step `3.1` had still treated an arbitrary supplied
    splitting of `F(1_A)` as though it were literally the identity splitting.
    The repaired carrier now passes through the canonical isomorphism to the
    identity splitting and writes the naturality check explicitly.
- Wrote Alpha `risk_review` blocks for all 16 live batch-10 items named by this
  repair dispatch.
- Focused reruns on Thursday, August 27, 2026:
  - `node tools/tsx-run.mjs tools/reflow.mts items/prop-biproducts-are-associative-commutative-and-unital-up-to-canonical-isomorphism.md items/thm-the-idempotent-completion-is-idempotent-complete-and-its-inclusion-is-fully-faithful-and-universal.md`
    - both items reflowed once, then remained unchanged on the final rerun.
  - `node tools/tsx-run.mjs tools/precheck.mts items/prop-biproducts-are-associative-commutative-and-unital-up-to-canonical-isomorphism.md items/thm-the-idempotent-completion-is-idempotent-complete-and-its-inclusion-is-fully-faithful-and-universal.md`
    - `2 checked, 0 failing`.
  - `node tools/proof-contract.mjs research/frontier-20-batch-10.proof-contracts.json --strict --items thm-in-a-preadditive-category-an-object-is-initial-exactly-when-it-is-terminal,thm-biproduct-data-characterisation-without-addition,prop-the-empty-biproduct-is-a-zero-object,prop-biproducts-are-associative-commutative-and-unital-up-to-canonical-isomorphism,thm-the-matrix-category-is-equivalent-to-the-finitely-generated-free-modules,thm-in-a-preadditive-category-the-equalizer-of-a-parallel-pair-is-the-kernel-of-their-difference,thm-an-additive-category-with-all-kernels-and-cokernels-has-all-finite-limits-and-colimits,thm-in-a-preadditive-category-with-a-zero-object-a-morphism-is-monic-exactly-when-its-kernel-is-zero,cor-in-a-preadditive-category-with-a-zero-object-a-morphism-is-epic-exactly-when-its-cokernel-is-zero,thm-an-additive-functor-preserves-finite-biproducts,thm-an-additive-functor-is-left-exact-exactly-when-it-preserves-kernels,thm-a-splitting-of-an-idempotent-is-simultaneously-an-equalizer-and-a-coequalizer-and-is-unique-up-to-unique-isomorphism,thm-an-additive-category-with-kernels-is-idempotent-complete,thm-the-idempotent-completion-is-idempotent-complete-and-its-inclusion-is-fully-faithful-and-universal,ex-a-ring-viewed-as-a-one-object-preadditive-category-with-its-matrices,ex-the-idempotent-completion-of-a-ring-is-the-finitely-generated-projective-modules`
    - `0 error(s), 0 warning(s), 16/16 item(s) checked`.
  - `node tools/risk-report.mjs research/frontier-20-batch-10.proof-contracts.json --items thm-in-a-preadditive-category-an-object-is-initial-exactly-when-it-is-terminal,thm-biproduct-data-characterisation-without-addition,prop-the-empty-biproduct-is-a-zero-object,prop-biproducts-are-associative-commutative-and-unital-up-to-canonical-isomorphism,thm-the-matrix-category-is-equivalent-to-the-finitely-generated-free-modules,thm-in-a-preadditive-category-the-equalizer-of-a-parallel-pair-is-the-kernel-of-their-difference,thm-an-additive-category-with-all-kernels-and-cokernels-has-all-finite-limits-and-colimits,thm-in-a-preadditive-category-with-a-zero-object-a-morphism-is-monic-exactly-when-its-kernel-is-zero,cor-in-a-preadditive-category-with-a-zero-object-a-morphism-is-epic-exactly-when-its-cokernel-is-zero,thm-an-additive-functor-preserves-finite-biproducts,thm-an-additive-functor-is-left-exact-exactly-when-it-preserves-kernels,thm-a-splitting-of-an-idempotent-is-simultaneously-an-equalizer-and-a-coequalizer-and-is-unique-up-to-unique-isomorphism,thm-an-additive-category-with-kernels-is-idempotent-complete,thm-the-idempotent-completion-is-idempotent-complete-and-its-inclusion-is-fully-faithful-and-universal,ex-a-ring-viewed-as-a-one-object-preadditive-category-with-its-matrices,ex-the-idempotent-completion-of-a-ring-is-the-finitely-generated-projective-modules --require-reviewed`
    - `0 error(s), 16 item(s) routed`.

## Gate repair — `risk-report` cycle 3 (Thursday, August 27, 2026)

- Reopened the 5 live high/critical batch-5 carriers against the current item
  text, `research/frontier-20-reader-5.md`, and `research/frontier-20-refute-5.json`.
- One additional current-carrier defect was real on Thursday, August 27, 2026:
  - `gate:f20-d-g5-1` on `ex-continued-fraction-of-square-root-two`
    — `confirmed_fatal`. Step `3.1` wrote
    `|sqrt(2)-7/5|=(7-5sqrt(2))/5` even though `7/5 < sqrt(2)`. The repaired
    carrier now uses the correct positive numerator `5sqrt(2)-7`.
- Wrote Alpha `risk_review` blocks for all 5 live batch-5 items named by this
  repair dispatch.
- Focused reruns on Thursday, August 27, 2026:
  - `node tools/tsx-run.mjs tools/reflow.mts items/ex-continued-fraction-of-square-root-two.md`
    - reflowed once, then stayed canonical.
  - `node tools/tsx-run.mjs tools/precheck.mts items/ex-continued-fraction-of-square-root-two.md`
    - `1 checked, 0 failing`.
  - `node tools/rendercheck.mjs items/ex-continued-fraction-of-square-root-two.md`
    - clean.
  - `node tools/proof-contract.mjs research/frontier-20-batch-5.proof-contracts.json --strict --items lem-quadratic-irrational-complete-quotients-are-finite-state,thm-lagrange-periodic-continued-fraction-theorem,ex-continued-fraction-and-extended-euclid,ex-continued-fraction-of-square-root-two,ex-a-negative-real-continued-fraction`
    - `0 error(s), 0 warning(s), 5/5 item(s) checked`.
  - `node tools/citation-fidelity.mjs research/frontier-20-batch-5.proof-contracts.json --fail-on-missing-quote`
    - no missing quotes and no widening candidates.
  - `node tools/risk-report.mjs research/frontier-20-batch-5.proof-contracts.json --items lem-quadratic-irrational-complete-quotients-are-finite-state,thm-lagrange-periodic-continued-fraction-theorem,ex-continued-fraction-and-extended-euclid,ex-continued-fraction-of-square-root-two,ex-a-negative-real-continued-fraction --require-reviewed`
    - `0 error(s), 5 item(s) routed`.
  - `node tools/step6-scope.mjs check --run frontier-20 --phase final --batch 5`
    - `0 error(s)`.

## Gate repair — `risk-report` cycle 4 (Thursday, August 27, 2026)

- Reopened the `11` live high/critical batch-5 carriers named by this repair
  dispatch against the current item text, `research/frontier-20-reader-5.md`,
  and `research/frontier-20-refute-5.json`.
- No surviving batch-5 content defect remained on current bytes. The live
  proofs now close with the repaired boundaries already in place, including the
  positive-numerator descent in
  `thm-rational-continued-fraction-termination`, the `n >= 1` scope in
  `thm-continued-fraction-convergents-are-best-approximations`, and the
  periodic-tail irrationality route in
  `lem-periodic-continued-fraction-is-quadratic`.
- Wrote Alpha `risk_review` blocks for all `11` live batch-5 items, re-merged
  `research/frontier-20-proof-contracts.json`, and appended the matching
  nonfatal gate records `gate:f20-d-g5-2` through `gate:f20-d-g5-12` in
  `research/frontier-20-alpha-d-6b-decisions.json`,
  `research/frontier-20-alpha-d-6b-ledger-rows.json`, and
  `research/defect-ledger.jsonl`.
- Focused reruns on Thursday, August 27, 2026:
  - `node tools/proof-contract.mjs research/frontier-20-batch-5.proof-contracts.json --strict --items lem-continued-fraction-convergent-recurrence,lem-continued-fraction-determinant-identity,lem-continued-fraction-complete-quotient-formula,thm-convergence-of-infinite-regular-continued-fractions,thm-continued-fraction-algorithm-for-real-numbers,thm-rational-continued-fraction-termination,thm-normalized-finite-continued-fraction-uniqueness,lem-continued-fraction-error-bound,thm-continued-fraction-convergents-are-best-approximations,thm-legendre-continued-fraction-criterion,lem-periodic-continued-fraction-is-quadratic`
    - `0 error(s), 0 warning(s), 11/11 item(s) checked`.
  - `node tools/risk-report.mjs research/frontier-20-proof-contracts.json --require-reviewed --items thm-lebesgue-stieltjes-measures-are-regular-on-r,prop-unique-abelian-minimal-normal-subgroup-gives-affine-type,thm-onan-scott-classification-of-finite-primitive-groups,fs-every-primitive-group-has-a-unique-minimal-normal-subgroup,ex-socle-of-a-finite-solvable-primitive-group,thm-morse-stability-of-quasi-geodesics,prop-free-abelian-groups-of-rank-at-least-two-are-not-hyperbolic,thm-linear-isoperimetric-characterisation-of-hyperbolic-groups,thm-non-elementary-hyperbolic-groups-contain-a-rank-two-free-subgroup,thm-boundary-topology-is-well-defined-and-quasi-isometry-invariant,fs-the-boundary-definition-needs-no-properness-or-equivalence-check,lem-continued-fraction-convergent-recurrence,lem-continued-fraction-determinant-identity,lem-continued-fraction-complete-quotient-formula,thm-convergence-of-infinite-regular-continued-fractions,thm-continued-fraction-algorithm-for-real-numbers,thm-rational-continued-fraction-termination,thm-normalized-finite-continued-fraction-uniqueness,lem-continued-fraction-error-bound,thm-continued-fraction-convergents-are-best-approximations,thm-legendre-continued-fraction-criterion,lem-periodic-continued-fraction-is-quadratic`
    - `0 error(s), 22 item(s) routed`.
  - `node tools/step6-scope.mjs check --run frontier-20 --phase final --batch 5`
    - `0 error(s)`.

## Gate repair - `step6-routing-adjudicate` (Thursday, August 27, 2026)

- Reproduced the live `decision-not-applied` queue for group `d` on the current tree and confirmed that the touched obligations below no longer equal the exact post-reader carriers recorded in `research/frontier-20-step6-hash-*-post.json`.
- The earlier touched bullets remain the mathematical closure record for the original reader defects; the supersession below updates only the exact carrier-state verdict after later risk_review contract writes changed the live carriers.
- Reclassified these contract-only touched obligations from `accepted_repair` to `amended_repair` because the live carriers now also include the later Alpha `risk_review` contract state:
  - `touched:5:lem-periodic-continued-fraction-is-quadratic`
  - `touched:5:lem-quadratic-irrational-complete-quotients-are-finite-state`
  - `touched:5:thm-rational-continued-fraction-termination`
  - `touched:8:cor-touchards-congruence-for-bell-numbers`
  - `touched:8:fs-blockade-order-never-matters-for-x-sparsity`
  - `touched:8:lem-p-four-free-pattern-graphs-have-square-root-homogeneous-sets`
  - `touched:10:cor-additive-categories-are-closed-under-passage-to-the-opposite`
  - `touched:10:cor-any-adjoint-between-additive-categories-is-additive`
  - `touched:10:cor-the-uniqueness-of-the-enrichment-is-an-instance-of-the-eckmann-hilton-argument`
  - `touched:10:fs-every-idempotent-splits`
  - `touched:10:thm-an-additive-functor-preserves-finite-biproducts`
- No new mathematical defect or new defect-ledger row was introduced by this repair; it is a stale adjudication-state correction on current disk.
- Focused reruns on Thursday, August 27, 2026: `node tools/step6-scope.mjs check --run frontier-20 --phase adjudicate` and `node tools/step6-scope.mjs check --run frontier-20 --phase final` each returned `step6-scope: 522 item(s) routed, 146 adjudication obligation(s), 0 error(s)`.
