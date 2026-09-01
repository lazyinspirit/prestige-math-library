# Step 8 closure recovery — group d, rejudge round 1

Run `frontier-28`; batches 9 and 11.

## Rows handled

| item | context | pre-edit guard hash | outcome | decision |
|---|---|---|---|---|
| `lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses` | `4a355002beb9f6a211758b8525ce901ce4a6b43225b0841c21b91ebe819a150d` | `38e09e0fa6cc78800147a872f6373115aa14be00d15a2a01cd235e07052444e3` | `confirmed_fatal` (`other`) | The statement used `a` in `eta=y^a` without introducing or quantifying it, leaving the star alternative ill-formed. |
| `thm-polynomial-reductions-transfer-p-np-and-conp-membership` | `e57d4fefd712afdcfe178d7c0674f342c379181fc305d16c31c96ae8647dc9a1` | `b03bc62a99934fedffc3956ff292842f92d80df51ed06d5df364c602632aebaf` | `confirmed_fatal` (`logic`) | The witness `f` was chosen only inside the P case, so it was out of scope in the separate NP and coNP cases. |

Both rows were current, unadjudicated, run-local, and owned by group d in the
envelope and `research/frontier-28-step8-scope.json`.

## Licensed repairs

- `lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses`
  now quantifies a real exponent `a` before defining `eta=y^a`.
- `thm-polynomial-reductions-transfer-p-np-and-conp-membership` now fixes one
  total polynomial-time reduction witness in the Given block, before all three
  cases. The proof uses that same map throughout and adopts the canonical case
  numbering `1.1`, `1.2`, `2.1`, `3.1`.

The matching defect rows are `frontier-28-A8R1-d-001` and
`frontier-28-A8R1-d-002`. Each exact fatal adjudication has exactly one
defect-ledger owner.

## Documentary synchronization

- Regenerated the repaired auxiliary lemma's batch-9 contract entry.
- Regenerated the downstream
  `lem-star-or-special-vertex-obstructions-force-wonderfulness` citation entry,
  whose exact quoted source statement was made stale by the licensed repair.
- Regenerated the reduction theorem's batch-11 contract entry.
- Rebuilt the merged 339-item contract from all 11 batch files.

## Rejudge targets

The engine should target exactly:

- `lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses`
- `thm-polynomial-reductions-transfer-p-np-and-conp-membership`

No judge sweep was initiated by this dispatch.

## Changed files and records

- The two repaired item files above.
- `research/frontier-28-batch-9.proof-contracts.json`
- `research/frontier-28-batch-11.proof-contracts.json`
- `research/frontier-28-proof-contracts.json`
- Two appended exact rows in `research/frontier-28-judge-adjudications.jsonl`
- `research/frontier-28-alpha-d-step8-rejudge-round1-ledger-rows.json`
- Two rows appended through `tools/defect-ledger.mjs`, with the generated
  `research/DEFECT-LEDGER.md` refreshed by that interface
- This report

## Targeted checks

- Contract regeneration: 3 affected entries regenerated, 0 skipped.
- Contract merge: 339 scoped items from 11 batch files.
- Strict proof contract: 2/2 repaired items, 0 errors, 0 warnings.
- Citation fidelity over batches 9 and 11: 110 citations, 0 missing quotes,
  0 widening candidates.
- Reviewed risk report: both repaired items routed, 0 errors.
- Focused precheck: both repaired items pass.
- Focused render check: both repaired files pass YAML, delimiter, and KaTeX validation.
- Defect-ledger validation for `frontier-28`: 363 rows checked, 0 schema errors.
- Exact linkage audit: each of the two current fatal tuples has exactly one
  matching round-one defect row.
- Step-8 scope check: both group-d tuples are closed; 16 open rejections remain
  routed to other owning groups, with 0 cross-group alerts.
- Scoped whitespace check: clean.

## Cross-group alerts and blockers

No cross-group finding or group-d blocker remains. The 16 other-group live
rows reported by the scope check were left untouched for engine routing.
