# Frontier 27 — Step 8 closure recovery, group a, round 1

## Scope

This recovery handled exactly the five current unadjudicated tuples assigned to
group `a`. No other group's item, adjudication, contract, or ledger row was
changed.

## Exact outcomes

| item | context | outcome | disposition |
|---|---|---|---|
| `def-c-zero-on-rn` | `2e1d414e421117ac963948e0feeef6ca85d7d22f7503ce548b7869d354cefbc4` | `false_positive` | The published finite-`p` and `L^infinity` spaces used on this page are real-valued. The proposed imaginary indicator is therefore outside the corollary's hypotheses, so real-valued `C_0` is consistent with every actual use. No edit. |
| `def-lanczos-process-as-hermitian-arnoldi` | `995fcc63d0215e790f76f9146967fc42b3093865e915a8a3ebccd36a96c640a1` | `confirmed_fatal` | The definition asserted the Hermitian Arnoldi three-term collapse without proving or justifying it. The later theorem that proves the collapse now discharges the definition's well-definedness through `justified_by`. |
| `def-series-and-absolute-convergence-in-a-normed-space` | `26e30efee36c1f1a73a008bf77b2f27c9e524a2b132eedcb34eb9f3d4f070bea` | `confirmed_fatal` | The opening cited a definition restricted to real-valued sequences. The item now defines a sequence in `V` directly as a function from `N` to `V` and cites only the natural-number domain. |
| `ex-minres-on-a-symmetric-indefinite-system` | `8ddafdccf205d4acb398b31f7c4802222d040007465fc1a0c996996336dd3b65` | `confirmed_nonfatal` | The displayed Lanczos and least-squares calculations are correct and follow immediately from the preceding page definitions. Their missing direct citations are a local proof-step gap, not a false claim or invalid witness. No edit. |
| `fs-l-one-convolution-is-defined-at-every-point` | `1c98986717c7ddace8cdf6a3efa2248735b355b28e6398fea2a3bb3f16bea292` | `confirmed_fatal` | The prior piecewise formula still evaluated `0/0` at `x=plus-or-minus e`. The singular expression is now used only for `0<abs(x)<1/2`, with value zero everywhere else. |

The exact tuple, pre-edit guard hash, outcome, group, and allowed defect type are
appended to `research/frontier-27-judge-adjudications.jsonl`.

## Licensed repairs and rejudge targets

The three repaired items requiring the engine's next targeted rejudge are:

1. `def-lanczos-process-as-hermitian-arnoldi`
2. `def-series-and-absolute-convergence-in-a-normed-space`
3. `fs-l-one-convolution-is-defined-at-every-point`

Each confirmed fatal has exactly one matching row in
`research/defect-ledger.jsonl`. No extra judge cycle was initiated here.

## Contract synchronization

The repair to the series definition changed the exact quoted Definition used by
`lem-absolutely-convergent-series-is-cauchy`. Its citation and derivation entry
was regenerated in the batch-4 and merged proof contracts. The false-statement
entry was also regenerated in the batch-3 and merged contracts. The Lanczos
repair changed only frontmatter well-definedness metadata and did not alter the
citable Definition text.

## Checks

- Focused precheck: the repaired false statement passed, 1 checked and 0 failing.
- Focused rendercheck: all 3 repaired items passed YAML, math, and rendering checks.
- Strict owned proof contracts passed: batch 2 `21/21`, batch 3 `41/41`, and batch 4 `21/21`, all with 0 errors and 0 warnings.
- `depcheck --quiet` exited 0 with no errors and 312 standing warnings.
- Content policy passed batches 2, 3, and 4 with 0 errors and 0 warnings.
- Defect-ledger validation passed with 277 frontier-27 rows and 0 validation errors.
- The Step-8 guard passed level-wide: all 96 changed items are licensed, with 0 errors and 0 warnings.
- The merged proof-contract check has 0 group-a findings; its remaining 35 errors and 3 warnings belong to other groups.
- Exact closure reconciliation finds 77 group-a rejection tuples in the accumulated ledger, all with exact outcomes; the five tuples assigned here are all closed.
- `step8-scope check --run frontier-27` passed with 449 partitioned items, 0 open rejection rows, and 0 cross-group alerts.

No web search was needed. The five decisions were resolved from the exact item
text, the opened published dependencies, and elementary calculations.

## Alerts and blockers

No cross-group or published-item finding was produced. Group `a` has no
unadjudicated tuple remaining, and this recovery has no group-a blocker. A
separate level-wide defect-ledger check still names 21 confirmed-fatal rows
owned by other groups without matching defect records; this dispatch has no
authority to create or repair those rows.
