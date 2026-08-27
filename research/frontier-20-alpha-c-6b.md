# Frontier 20 — Alpha group c step-6b adjudication

**Dispatch:** `6b-c`

## Scope and method

- Reopened `CLAUDE.md`, `README.md`, `research/frontier-20-alpha-6b-routed.task.md`, `tools/step6-scope.mjs`, and the routed Step-6 scope files for batches `4`, `6`, and `7`.
- Verified the reader reports, reader findings JSON, refuter reports, current carriers, and the cited dependencies on current disk before deciding any routed obligation.
- Worked only inside group `c` scope: touched carriers and refuter findings for batches `4`, `6`, and `7`.

## Batch 4 obligations

| obligation | verdict | evidence |
|---|---|---|
| `refuter:4:1` | `confirmed_fatal` | Step 3.1 no longer collapses (T^m)^r to T^r; it now concludes G ≅ T^{mr} and then renames s=mr for the statement. |
| `touched:4:fs-the-socle-is-always-a-single-simple-group` | `accepted_repair` | The touched carrier change is contract-only: the contract quote citing the socle decomposition now matches the repaired proposition on disk, and the refreshed batch-4 contract passes strict and citation-fidelity checks. |
| `touched:4:lem-asymptoticity-is-an-equivalence-relation-on-gromov-sequences` | `accepted_repair` | The touched carrier change is contract-only: the contract quote from the hyperbolicity equivalence theorem is resynchronized to the repaired statement, and the batch-4 contract now passes strict and citation-fidelity checks. |
| `touched:4:prop-socle-is-characteristic-and-admits-a-direct-product-decomposition` | `accepted_repair` | The current proposition now allows r=0 with the empty direct product, and its repaired proof handles the trivial-group and maximality cases coherently. |
| `touched:4:thm-slim-triangle-gromov-product-and-four-point-hyperbolicity-are-equivalent-up-to-constants` | `accepted_repair` | Item 2 now uses the quantified constant δ'_o consistently, and the refreshed dependent contract quote matches the theorem on disk. |

## Batch 6 obligations

| obligation | verdict | evidence |
|---|---|---|
| `refuter:6:1` | `confirmed_fatal` | L1 now cites def-principal-distinguished-subset-of-spectrum, the source that actually defines D(x) as the primes avoiding x. |
| `refuter:6:2` | `confirmed_fatal` | L1 no longer widens the nilradical definition into radicality on its own; it now cites lem-radical-is-an-ideal for the radical-ideal claim. |
| `touched:6:ex-prime-sets-of-a-field-and-the-integers` | `accepted_repair` | The current proof now cites the division algorithm and carries the remainder argument explicitly to show every nonzero ideal of Z is (n). |
| `touched:6:ex-radical-of-a-product-and-intersection` | `accepted_repair` | Step 1.1 now proves √(y^3)=(y) by the direct decomposition g=a(x)+yh(x,y), avoiding the uncited UFD appeal. |
| `touched:6:lem-distinguished-subset-cover-detects-radical` | `accepted_repair` | L2 now cites the definition that actually identifies D(h)=Spec(R)\V((h)), and the regenerated contract entry matches the live facts block. |

## Batch 7 obligations

| obligation | verdict | evidence |
|---|---|---|
| `refuter:7:2` | `confirmed_nonfatal` | Step 2.1 now proves a<2 from a^4=6/5<16 before using IVT on the outer intervals. |
| `refuter:7:1` | `confirmed_nonfatal` | Step 1.1 now uses tower law to deduce E=F(α) and [F(α):F]=2 before invoking the minimal-polynomial theorem. |
| `refuter:7:5` | `confirmed_fatal` | The remark no longer claims IVT is the only analytic input; it now names the real square-root existence used in the published complex square-root theorem. |
| `refuter:7:3` | `confirmed_fatal` | The opening paragraph now says the route is mostly algebraic but uses both the odd-degree theorem and the real-square-root input behind the complex square-root theorem. |
| `refuter:7:4` | `confirmed_fatal` | The opening now says the odd-degree witness isolates one analytic input and the quintic example exhibits the derivative, monotonicity, and IVT input. |
| `touched:7:cor-every-complex-polynomial-splits-into-linear-factors` | `accepted_repair` | The touched carrier change is contract-only: the reader's batch-7 contract regeneration resynchronized this item's citation/derivation row to the current proof, and the refreshed batch-7 contract passes proof-contract --strict and citation-fidelity. |
| `touched:7:cor-every-real-polynomial-factors-into-linear-and-irreducible-quadratic-factors` | `accepted_repair` | The touched carrier change is contract-only: the reader's batch-7 contract regeneration resynchronized this item's citation/derivation row to the current proof, and the refreshed batch-7 contract passes proof-contract --strict and citation-fidelity. |
| `touched:7:cor-irreducible-real-polynomial-has-degree-one-or-even-degree` | `accepted_repair` | The touched carrier change is contract-only: the reader's batch-7 contract regeneration resynchronized this item's citation/derivation row to the current proof, and the refreshed batch-7 contract passes proof-contract --strict and citation-fidelity. |
| `touched:7:cor-irreducible-real-polynomials-have-degree-one-or-two` | `accepted_repair` | The touched carrier change is contract-only: the reader's batch-7 contract regeneration resynchronized this item's citation/derivation row to the current proof, and the refreshed batch-7 contract passes proof-contract --strict and citation-fidelity. |
| `touched:7:cor-the-algebraic-numbers-in-c-form-an-algebraic-closure-of-q` | `accepted_repair` | The touched carrier change is contract-only: the reader's batch-7 contract regeneration resynchronized this item's citation/derivation row to the current proof, and the refreshed batch-7 contract passes proof-contract --strict and citation-fidelity. |
| `touched:7:cor-the-complex-numbers-are-an-algebraic-closure-of-the-reals` | `accepted_repair` | The touched carrier change is contract-only: the reader's batch-7 contract regeneration resynchronized this item's citation/derivation row to the current proof, and the refreshed batch-7 contract passes proof-contract --strict and citation-fidelity. |
| `touched:7:ex-x-cubed-minus-two-over-r-and-c` | `accepted_repair` | The touched carrier change is contract-only: the reader's batch-7 contract regeneration resynchronized this item's citation/derivation row to the current proof, and the refreshed batch-7 contract passes proof-contract --strict and citation-fidelity. |
| `touched:7:ex-x-fifth-minus-six-x-plus-three-is-not-solvable-by-radicals` | `amended_repair` | The reader's splitting-field and separability repair is still present, and Alpha additionally proved a<2 before applying IVT on (-2,-a) and (a,2). |
| `touched:7:ex-x-fifth-minus-x-minus-one-has-a-real-root` | `accepted_repair` | The touched carrier change is contract-only: the reader's batch-7 contract regeneration resynchronized this item's citation/derivation row to the current proof, and the refreshed batch-7 contract passes proof-contract --strict and citation-fidelity. |
| `touched:7:ex-x-four-plus-one-factors-into-two-real-quadratics` | `accepted_repair` | The touched carrier change is contract-only: the reader's batch-7 contract regeneration resynchronized this item's citation/derivation row to the current proof, and the refreshed batch-7 contract passes proof-contract --strict and citation-fidelity. |
| `touched:7:ex-x-squared-plus-one-is-irreducible-over-r-and-split-over-c` | `accepted_repair` | The touched carrier change is contract-only: the reader's batch-7 contract regeneration resynchronized this item's citation/derivation row to the current proof, and the refreshed batch-7 contract passes proof-contract --strict and citation-fidelity. |
| `touched:7:fs-every-irreducible-quintic-over-q-is-insoluble-by-radicals` | `accepted_repair` | The touched carrier change is contract-only: the reader's batch-7 contract regeneration resynchronized this item's citation/derivation row to the current proof, and the refreshed batch-7 contract passes proof-contract --strict and citation-fidelity. |
| `touched:7:fs-every-irreducible-real-polynomial-has-degree-one` | `accepted_repair` | The touched carrier change is contract-only: the reader's batch-7 contract regeneration resynchronized this item's citation/derivation row to the current proof, and the refreshed batch-7 contract passes proof-contract --strict and citation-fidelity. |
| `touched:7:fs-every-real-polynomial-has-a-real-root` | `accepted_repair` | The touched carrier change is contract-only: the reader's batch-7 contract regeneration resynchronized this item's citation/derivation row to the current proof, and the refreshed batch-7 contract passes proof-contract --strict and citation-fidelity. |
| `touched:7:fs-the-real-numbers-are-algebraically-closed` | `accepted_repair` | The touched carrier change is contract-only: the reader's batch-7 contract regeneration resynchronized this item's citation/derivation row to the current proof, and the refreshed batch-7 contract passes proof-contract --strict and citation-fidelity. |
| `touched:7:lem-nonreal-roots-of-a-real-polynomial-occur-in-conjugate-pairs` | `accepted_repair` | The touched carrier change is contract-only: the reader's batch-7 contract regeneration resynchronized this item's citation/derivation row to the current proof, and the refreshed batch-7 contract passes proof-contract --strict and citation-fidelity. |
| `touched:7:lem-quadratic-extension-in-characteristic-not-two-is-generated-by-a-square-root` | `amended_repair` | The reader had already resynchronized the touched contract entry, and Alpha additionally supplied the missing tower-law step proving E=F(α) and [F(α):F]=2 before invoking the minimal-polynomial theorem. |
| `touched:7:lem-real-polynomial-splitting-suffices-for-the-fundamental-theorem-of-algebra` | `accepted_repair` | The touched carrier change is contract-only: the reader's batch-7 contract regeneration resynchronized this item's citation/derivation row to the current proof, and the refreshed batch-7 contract passes proof-contract --strict and citation-fidelity. |
| `touched:7:prop-algebraically-closed-splitting-and-finite-extension-criteria` | `accepted_repair` | Step 1.2 now cites the minimal-polynomial theorem explicitly, so the finite simple-extension argument is licensed on current disk. |
| `touched:7:thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity` | `accepted_repair` | The touched carrier change is contract-only: the tightened boundary rows for this theorem now match the live proof, and the refreshed batch-7 contract passes proof-contract --strict and boundary-audit. |
| `touched:7:thm-odd-degree-real-polynomial-has-a-real-root` | `accepted_repair` | The touched carrier change is contract-only: the tightened boundary rows for this theorem now match the live proof, and the refreshed batch-7 contract passes proof-contract --strict and boundary-audit. |
| `touched:7:thm-the-complex-numbers-are-algebraically-closed` | `accepted_repair` | Step 2.2 now cites the simple-extension degree formula before using oddness of [R(α):R]. |

## Focused checks

Ran on Wednesday, August 26, 2026:

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-finite-characteristically-simple-groups-are-direct-products-of-isomorphic-simple-groups.md items/ex-distinguished-subset-and-localisation-primes.md items/thm-noetherian-ring-has-finitely-many-minimal-primes.md items/lem-quadratic-extension-in-characteristic-not-two-is-generated-by-a-square-root.md items/ex-x-fifth-minus-six-x-plus-three-is-not-solvable-by-radicals.md items/rem-artin-and-minimum-modulus-proofs-of-the-fundamental-theorem-of-algebra.md` -> reflowed the three edited proof items; the other edited item/remark carriers were already canonical.
- `node tools/regen-contract-entries.mjs research/frontier-20-batch-4.proof-contracts.json thm-finite-characteristically-simple-groups-are-direct-products-of-isomorphic-simple-groups` -> regenerated `1`, skipped `0`.
- `node tools/regen-contract-entries.mjs research/frontier-20-batch-6.proof-contracts.json ex-distinguished-subset-and-localisation-primes thm-noetherian-ring-has-finitely-many-minimal-primes` -> regenerated `2`, skipped `0`.
- `node tools/regen-contract-entries.mjs research/frontier-20-batch-7.proof-contracts.json lem-quadratic-extension-in-characteristic-not-two-is-generated-by-a-square-root ex-x-fifth-minus-six-x-plus-three-is-not-solvable-by-radicals` -> regenerated `2`, skipped `0`.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-finite-characteristically-simple-groups-are-direct-products-of-isomorphic-simple-groups.md items/ex-distinguished-subset-and-localisation-primes.md items/thm-noetherian-ring-has-finitely-many-minimal-primes.md items/lem-quadratic-extension-in-characteristic-not-two-is-generated-by-a-square-root.md items/ex-x-fifth-minus-six-x-plus-three-is-not-solvable-by-radicals.md` -> `5 checked, 0 failing`.
- `node tools/rendercheck.mjs items/thm-finite-characteristically-simple-groups-are-direct-products-of-isomorphic-simple-groups.md items/ex-distinguished-subset-and-localisation-primes.md items/thm-noetherian-ring-has-finitely-many-minimal-primes.md items/lem-quadratic-extension-in-characteristic-not-two-is-generated-by-a-square-root.md items/ex-x-fifth-minus-six-x-plus-three-is-not-solvable-by-radicals.md items/rem-artin-and-minimum-modulus-proofs-of-the-fundamental-theorem-of-algebra.md library/abstract-algebra/the-fundamental-theorem-of-algebra.md library/abstract-algebra/the-fundamental-theorem-of-algebra-examples.md` -> clean on all `8` edited carriers.
- `node tools/proof-contract.mjs research/frontier-20-batch-4.proof-contracts.json --strict` -> `0 error(s), 0 warning(s), 53/53 item(s) checked`.
- `node tools/proof-contract.mjs research/frontier-20-batch-6.proof-contracts.json --strict` -> `0 error(s), 0 warning(s), 50/50 item(s) checked`.
- `node tools/proof-contract.mjs research/frontier-20-batch-7.proof-contracts.json --strict` -> `0 error(s), 0 warning(s), 22/22 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-20-batch-4.proof-contracts.json --fail-on-missing-quote` -> no missing quotes and no widening candidates.
- `node tools/citation-fidelity.mjs research/frontier-20-batch-6.proof-contracts.json --fail-on-missing-quote` -> no missing quotes and no widening candidates.
- `node tools/citation-fidelity.mjs research/frontier-20-batch-7.proof-contracts.json --fail-on-missing-quote` -> no missing quotes and no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-20-batch-4.proof-contracts.json --fail-on-contradicted` -> no contradicted candidates.
- `node tools/boundary-audit.mjs research/frontier-20-batch-6.proof-contracts.json --fail-on-contradicted` -> no contradicted candidates.
- `node tools/boundary-audit.mjs research/frontier-20-batch-7.proof-contracts.json --fail-on-contradicted` -> no contradicted candidates; only pre-existing template clusters remain.
- `node tools/content-policy.mjs research/frontier-20-batch-4.pages.json` -> `66 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs research/frontier-20-batch-6.pages.json` -> `56 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs research/frontier-20-batch-7.pages.json` -> `23 scoped item(s), 0 error(s), 0 warning(s)`.

## Blockers

- None inside group `c` scope after the current repairs.

## Files changed in this Alpha pass

- `items/thm-finite-characteristically-simple-groups-are-direct-products-of-isomorphic-simple-groups.md`
- `items/ex-distinguished-subset-and-localisation-primes.md`
- `items/thm-noetherian-ring-has-finitely-many-minimal-primes.md`
- `items/lem-quadratic-extension-in-characteristic-not-two-is-generated-by-a-square-root.md`
- `items/ex-x-fifth-minus-six-x-plus-three-is-not-solvable-by-radicals.md`
- `library/abstract-algebra/the-fundamental-theorem-of-algebra.md`
- `library/abstract-algebra/the-fundamental-theorem-of-algebra-examples.md`
- `items/rem-artin-and-minimum-modulus-proofs-of-the-fundamental-theorem-of-algebra.md`
- `research/frontier-20-batch-4.proof-contracts.json`
- `research/frontier-20-batch-6.proof-contracts.json`
- `research/frontier-20-batch-7.proof-contracts.json`
- `research/frontier-20-alpha-c-6b-decisions.json`
- `research/frontier-20-alpha-c-6b.md`

## Next action

- Stamp the current carrier hashes for group `c`, validate the Step-6 adjudication scope for batches `4`, `6`, and `7`, and hand the run back to the level-wide Step-6 progression.

## Gate repair — `risk-report` cycle 3 (Thursday, August 27, 2026)

- Reopened the 18 live high/critical batch-6 carriers against the current item
  text, `research/frontier-20-reader-6.md`,
  `research/frontier-20-reader-findings-6.json`, and
  `research/frontier-20-refute-6.json`.
- One additional current-carrier defect was real on Thursday, August 27, 2026:
  - `gate:f20-c-g6-1` on
    `cor-radical-ideal-has-finitely-many-minimal-primes-noetherian`
    — `confirmed_fatal`. The live corollary still claimed the result for every
    radical ideal, but the proof had no `I=R` case and there are no prime
    ideals over the unit ideal. The repaired carrier now states the
    empty-intersection convention explicitly and separates the unit-ideal
    boundary before the induction split.
- Wrote Alpha `risk_review` blocks for all 18 live batch-6 items named by this
  repair dispatch.
- Focused reruns on Thursday, August 27, 2026:
  - `node tools/tsx-run.mjs tools/precheck.mts items/cor-radical-ideal-has-finitely-many-minimal-primes-noetherian.md`
    - `1 checked, 0 failing`.
  - `node tools/rendercheck.mjs items/cor-radical-ideal-has-finitely-many-minimal-primes-noetherian.md`
    - clean.
  - `node tools/proof-contract.mjs research/frontier-20-batch-6.proof-contracts.json --strict --items lem-radical-membership-by-a-power,lem-radical-commutes-with-quotient-correspondence,cor-reduced-quotient-by-the-nilradical,lem-radical-intersection-proof-separating-prime,cor-nilradical-as-intersection-of-primes,cor-ring-reduced-iff-zero-is-an-intersection-of-primes,lem-vanishing-sets-detect-radicals,lem-distinguished-subset-cover-detects-radical,thm-prime-spectrum-of-a-quotient-bijection,cor-prime-spectrum-insensitive-to-nilpotents,lem-minimal-prime-over-an-ideal-exists,lem-noetherian-minimal-primes-induction-split,thm-nilradical-of-a-noetherian-ring-is-nilpotent,cor-radical-ideal-has-finitely-many-minimal-primes-noetherian,thm-noetherian-ring-has-finitely-many-minimal-primes,cor-dimension-of-a-quotient-as-chains-above-an-ideal,ex-prime-sets-of-a-field-and-the-integers,ex-prime-ideals-of-a-node`
    - `0 error(s), 0 warning(s), 18/18 item(s) checked`.
  - `node tools/citation-fidelity.mjs research/frontier-20-batch-6.proof-contracts.json --fail-on-missing-quote`
    - no missing quotes and no widening candidates.
  - `node tools/risk-report.mjs research/frontier-20-batch-6.proof-contracts.json --items lem-radical-membership-by-a-power,lem-radical-commutes-with-quotient-correspondence,cor-reduced-quotient-by-the-nilradical,lem-radical-intersection-proof-separating-prime,cor-nilradical-as-intersection-of-primes,cor-ring-reduced-iff-zero-is-an-intersection-of-primes,lem-vanishing-sets-detect-radicals,lem-distinguished-subset-cover-detects-radical,thm-prime-spectrum-of-a-quotient-bijection,cor-prime-spectrum-insensitive-to-nilpotents,lem-minimal-prime-over-an-ideal-exists,lem-noetherian-minimal-primes-induction-split,thm-nilradical-of-a-noetherian-ring-is-nilpotent,cor-radical-ideal-has-finitely-many-minimal-primes-noetherian,thm-noetherian-ring-has-finitely-many-minimal-primes,cor-dimension-of-a-quotient-as-chains-above-an-ideal,ex-prime-sets-of-a-field-and-the-integers,ex-prime-ideals-of-a-node --require-reviewed`
    - `0 error(s), 18 item(s) routed`.
  - `node tools/step6-scope.mjs check --run frontier-20 --phase final --batch 6`
    - `0 error(s)`.

## Gate repair — `risk-report` cycle 4 (Thursday, August 27, 2026)

- Reopened the `10` live high/critical batch-4 carriers named by this repair
  dispatch against the current item text, `research/frontier-20-reader-4.md`,
  and `research/frontier-20-refute-4.json`.
- No surviving batch-4 content defect remained on current bytes. The live
  primitive-group and hyperbolic-group carriers now close as written, including
  the diagonal-type witness for
  `fs-every-primitive-group-has-a-unique-minimal-normal-subgroup`, the
  affine-type stabilizer argument, the geodesic-square obstruction in
  `\mathbb Z^n`, and the properness/equivalence prerequisites in the boundary
  items.
- Wrote Alpha `risk_review` blocks for all `10` live batch-4 items, re-merged
  `research/frontier-20-proof-contracts.json`, and appended the matching
  nonfatal gate records `gate:f20-c-g4-1` through `gate:f20-c-g4-10` in
  `research/frontier-20-alpha-c-6b-decisions.json`,
  `research/frontier-20-alpha-c-6b-ledger-rows.json`, and
  `research/defect-ledger.jsonl`.
- Focused reruns on Thursday, August 27, 2026:
  - `node tools/proof-contract.mjs research/frontier-20-batch-4.proof-contracts.json --strict --items prop-unique-abelian-minimal-normal-subgroup-gives-affine-type,thm-onan-scott-classification-of-finite-primitive-groups,fs-every-primitive-group-has-a-unique-minimal-normal-subgroup,ex-socle-of-a-finite-solvable-primitive-group,thm-morse-stability-of-quasi-geodesics,prop-free-abelian-groups-of-rank-at-least-two-are-not-hyperbolic,thm-linear-isoperimetric-characterisation-of-hyperbolic-groups,thm-non-elementary-hyperbolic-groups-contain-a-rank-two-free-subgroup,thm-boundary-topology-is-well-defined-and-quasi-isometry-invariant,fs-the-boundary-definition-needs-no-properness-or-equivalence-check`
    - `0 error(s), 0 warning(s), 10/10 item(s) checked`.
  - `node tools/risk-report.mjs research/frontier-20-proof-contracts.json --require-reviewed --items thm-lebesgue-stieltjes-measures-are-regular-on-r,prop-unique-abelian-minimal-normal-subgroup-gives-affine-type,thm-onan-scott-classification-of-finite-primitive-groups,fs-every-primitive-group-has-a-unique-minimal-normal-subgroup,ex-socle-of-a-finite-solvable-primitive-group,thm-morse-stability-of-quasi-geodesics,prop-free-abelian-groups-of-rank-at-least-two-are-not-hyperbolic,thm-linear-isoperimetric-characterisation-of-hyperbolic-groups,thm-non-elementary-hyperbolic-groups-contain-a-rank-two-free-subgroup,thm-boundary-topology-is-well-defined-and-quasi-isometry-invariant,fs-the-boundary-definition-needs-no-properness-or-equivalence-check,lem-continued-fraction-convergent-recurrence,lem-continued-fraction-determinant-identity,lem-continued-fraction-complete-quotient-formula,thm-convergence-of-infinite-regular-continued-fractions,thm-continued-fraction-algorithm-for-real-numbers,thm-rational-continued-fraction-termination,thm-normalized-finite-continued-fraction-uniqueness,lem-continued-fraction-error-bound,thm-continued-fraction-convergents-are-best-approximations,thm-legendre-continued-fraction-criterion,lem-periodic-continued-fraction-is-quadratic`
    - `0 error(s), 22 item(s) routed`.
  - `node tools/step6-scope.mjs check --run frontier-20 --phase final --batch 4`
    - `0 error(s)`.

## Gate repair — `risk-report` cycle 5 (Thursday, August 27, 2026)

- Reproduced the primary gate on the live batch-4 scope for
  `thm-finite-characteristically-simple-groups-are-direct-products-of-isomorphic-simple-groups`,
  `prop-socle-is-characteristic-and-admits-a-direct-product-decomposition`,
  `lem-two-distinct-minimal-normal-subgroups-of-a-primitive-group-are-regular`,
  and `cor-a-finite-primitive-group-has-at-most-two-minimal-normal-subgroups`.
  The tiering rerun still routes all four as `HIGH`, and the initial
  `--require-reviewed` rerun failed only because each contract row lacked a
  complete Alpha `risk_review`.
- Reopened all four live group-theory carriers against the current item text,
  `research/frontier-20-reader-4.md`, the batch-4 refuter result, and their
  cited dependencies. No surviving content defect remained on current bytes.
  The only compressed point was the standard left-regular/right-regular
  centralizer argument in
  `cor-a-finite-primitive-group-has-at-most-two-minimal-normal-subgroups`,
  which closes immediately once both `M_2` and `M_3` are seen to centralize the
  regular copy of `M_1`.
- Wrote item-specific Alpha `risk_review` blocks for those four live ids into
  `research/frontier-20-batch-4.proof-contracts.json` and re-merged
  `research/frontier-20-proof-contracts.json`.
- Under this cycle's published gate rule, a missing `risk_review` was not
  itself a defect-ledger row. Because the reread found no concrete new defect, I
  did not modify `research/frontier-20-alpha-c-6b-decisions.json`,
  `research/frontier-20-alpha-c-6b-ledger-rows.json`, or
  `research/defect-ledger.jsonl`.
- Focused reruns on Thursday, August 27, 2026:
  - `node tools/proof-contract.mjs research/frontier-20-batch-4.proof-contracts.json --strict --items thm-finite-characteristically-simple-groups-are-direct-products-of-isomorphic-simple-groups,prop-socle-is-characteristic-and-admits-a-direct-product-decomposition,lem-two-distinct-minimal-normal-subgroups-of-a-primitive-group-are-regular,cor-a-finite-primitive-group-has-at-most-two-minimal-normal-subgroups`
    - `0 error(s), 0 warning(s), 4/4 item(s) checked`.
  - `node tools/risk-report.mjs research/frontier-20-batch-4.proof-contracts.json --require-reviewed --items thm-finite-characteristically-simple-groups-are-direct-products-of-isomorphic-simple-groups,prop-socle-is-characteristic-and-admits-a-direct-product-decomposition,lem-two-distinct-minimal-normal-subgroups-of-a-primitive-group-are-regular,cor-a-finite-primitive-group-has-at-most-two-minimal-normal-subgroups`
    - `0 error(s), 4 item(s) routed`.
  - `node tools/risk-report.mjs research/frontier-20-proof-contracts.json --require-reviewed --items thm-finite-characteristically-simple-groups-are-direct-products-of-isomorphic-simple-groups,prop-socle-is-characteristic-and-admits-a-direct-product-decomposition,lem-two-distinct-minimal-normal-subgroups-of-a-primitive-group-are-regular,cor-a-finite-primitive-group-has-at-most-two-minimal-normal-subgroups`
    - `0 error(s), 4 item(s) routed`.
  - `node tools/step6-scope.mjs check --run frontier-20 --phase final --batch 4`
    - `0 error(s)`.

## Gate repair - `step6-routing-adjudicate` (Thursday, August 27, 2026)

- Reproduced the live `decision-not-applied` queue for group `c` on the current tree and confirmed that the touched obligations below no longer equal the exact post-reader carriers recorded in `research/frontier-20-step6-hash-*-post.json`.
- The earlier touched-table evidence remains the mathematical closure record for the original reader defects; the supersession below updates only the exact carrier-state verdict after later risk_review contract writes changed the live carriers.
- Reclassified these contract-only touched obligations from `accepted_repair` to `amended_repair` because the live carriers now also include the later Alpha `risk_review` contract state:
  - `touched:4:prop-socle-is-characteristic-and-admits-a-direct-product-decomposition`
  - `touched:6:ex-prime-sets-of-a-field-and-the-integers`
  - `touched:6:lem-distinguished-subset-cover-detects-radical`
  - `touched:7:cor-every-complex-polynomial-splits-into-linear-factors`
  - `touched:7:cor-every-real-polynomial-factors-into-linear-and-irreducible-quadratic-factors`
  - `touched:7:cor-irreducible-real-polynomial-has-degree-one-or-even-degree`
  - `touched:7:cor-irreducible-real-polynomials-have-degree-one-or-two`
  - `touched:7:cor-the-algebraic-numbers-in-c-form-an-algebraic-closure-of-q`
  - `touched:7:cor-the-complex-numbers-are-an-algebraic-closure-of-the-reals`
  - `touched:7:ex-x-cubed-minus-two-over-r-and-c`
  - `touched:7:ex-x-fifth-minus-x-minus-one-has-a-real-root`
  - `touched:7:ex-x-four-plus-one-factors-into-two-real-quadratics`
  - `touched:7:ex-x-squared-plus-one-is-irreducible-over-r-and-split-over-c`
  - `touched:7:fs-every-irreducible-quintic-over-q-is-insoluble-by-radicals`
  - `touched:7:fs-every-irreducible-real-polynomial-has-degree-one`
  - `touched:7:fs-every-real-polynomial-has-a-real-root`
  - `touched:7:fs-the-real-numbers-are-algebraically-closed`
  - `touched:7:lem-nonreal-roots-of-a-real-polynomial-occur-in-conjugate-pairs`
  - `touched:7:lem-real-polynomial-splitting-suffices-for-the-fundamental-theorem-of-algebra`
  - `touched:7:prop-algebraically-closed-splitting-and-finite-extension-criteria`
  - `touched:7:thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity`
  - `touched:7:thm-odd-degree-real-polynomial-has-a-real-root`
  - `touched:7:thm-the-complex-numbers-are-algebraically-closed`
- No new mathematical defect or new defect-ledger row was introduced by this repair; it is a stale adjudication-state correction on current disk.
- Focused reruns on Thursday, August 27, 2026: `node tools/step6-scope.mjs check --run frontier-20 --phase adjudicate` and `node tools/step6-scope.mjs check --run frontier-20 --phase final` each returned `step6-scope: 522 item(s) routed, 146 adjudication obligation(s), 0 error(s)`.
