# Frontier-21 Alpha-a 6b Adjudication

Run: `frontier-21`  
Group: `a`  
Dispatch: `6b-a`  
Date: Thursday, August 27, 2026

## Scope

Owned batches: `1`, `5`, `9`.

I read and checked against current disk for each owned batch:

- `research/frontier-21-step6-scope-1.json`, `research/frontier-21-step6-scope-5.json`, `research/frontier-21-step6-scope-9.json`
- reader reports and findings: `research/frontier-21-reader-1.md`, `research/frontier-21-reader-findings-1.json`, `research/frontier-21-reader-5.md`, `research/frontier-21-reader-findings-5.json`, `research/frontier-21-reader-9.md`, `research/frontier-21-reader-findings-9.json`
- refuter reports: `research/frontier-21-refute-1.json`, `research/frontier-21-refute-5.json`, `research/frontier-21-refute-9.json`
- current carriers: the routed item files, owned page files, and `research/frontier-21-batch-{1,5,9}.proof-contracts.json`
- cited dependencies needed to verify the Schreier/amenability, group-algebra/representation, and abelian-category arguments

The exhaustive per-obligation decisions are recorded in
`research/frontier-21-alpha-a-6b-decisions.json`.

## Outcome

Batch `1`:

- Wrote decisions for all `35` owed obligations: `31` touched items, `2` touched pages, `1` reader finding, and `1` refuter finding.
- Confirmed the reader's batch-local repairs across the Schreier and amenability carriers.
- Confirmed the published dependency defect on `def-external-semidirect-product` as a real nonfatal title issue and recorded it as `nonfatal-recorded` because this dispatch did not publish a protocol authorizing an out-of-scope published-item repair.
- Confirmed the refuter's fatal objection on `ex-boundary-expansion-in-the-free-group`, repaired the example to use the explicit one-sided generator boundary `|SB_n \setminus B_n|`, regenerated its contract entry, and fixed the stale zero-boundary contract row that the repair made newly relevant.

Batch `5`:

- No routed `touched`, `page`, `reader`, or `refuter` obligations were owed on the current scope split.
- Completed the mandatory mathematical reread and wrote `risk_review` rows for all `9` required `HIGH` or `CRITICAL` contract entries.

Batch `9`:

- Wrote decisions for both owed touched items.
- Confirmed the reader's dependency repair on `thm-every-monomorphism-is-the-kernel-of-its-cokernel`.
- Confirmed the reader's proof repair on `thm-third-isomorphism-theorem-in-an-abelian-category`, where the kernel computation for `q_C b` is now explicit before the first isomorphism theorem is applied.

## Risk Reviews

Completed `risk_review: {status: complete, reviewer: alpha-6b-a, notes: ...}`
for every owned `HIGH` or `CRITICAL` item reported by:

- `node tools/risk-report.mjs research/frontier-21-batch-1.proof-contracts.json --json`
- `node tools/risk-report.mjs research/frontier-21-batch-5.proof-contracts.json --json`
- `node tools/risk-report.mjs research/frontier-21-batch-9.proof-contracts.json --json`

Re-run with `--require-reviewed` after the repair and contract updates:

- batch `1` -> `ok: true`
- batch `5` -> `ok: true`
- batch `9` -> `ok: true`

## Checks

Local repair and contract gates completed:

- `node tools/tsx-run.mjs tools/reflow.mts items/ex-boundary-expansion-in-the-free-group.md`
- `node tools/tsx-run.mjs tools/precheck.mts items/ex-boundary-expansion-in-the-free-group.md`
- `node tools/rendercheck.mjs items/ex-boundary-expansion-in-the-free-group.md`
- `node tools/proof-contract.mjs research/frontier-21-batch-1.proof-contracts.json --strict`
- `node tools/proof-contract.mjs research/frontier-21-batch-5.proof-contracts.json --strict`
- `node tools/proof-contract.mjs research/frontier-21-batch-9.proof-contracts.json --strict`
- `node tools/citation-fidelity.mjs research/frontier-21-batch-1.proof-contracts.json --fail-on-missing-quote`
- `node tools/citation-fidelity.mjs research/frontier-21-batch-5.proof-contracts.json --fail-on-missing-quote`
- `node tools/citation-fidelity.mjs research/frontier-21-batch-9.proof-contracts.json --fail-on-missing-quote`
- `node tools/boundary-audit.mjs research/frontier-21-batch-1.proof-contracts.json --fail-on-contradicted --fail-on-template`
- `node tools/boundary-audit.mjs research/frontier-21-batch-5.proof-contracts.json --fail-on-contradicted --fail-on-template`
- `node tools/boundary-audit.mjs research/frontier-21-batch-9.proof-contracts.json --fail-on-contradicted --fail-on-template`
- `node tools/defect-ledger.mjs append --file research/frontier-21-alpha-a-6b-ledger-rows.json`
- `node tools/defect-ledger.mjs validate --run frontier-21`
- `node tools/step6-scope.mjs stamp --run frontier-21 --group a`

## External Blocker

No blocker remains inside the owned batch-`1`/`5`/`9` mathematics or contracts.

The shared Step-6 validator still fails on
`research/frontier-21-step6-published-claims.jsonl`, which on Thursday, August
27, 2026 contains six unrelated group-`c` claim rows:

- `thm-riemann-criterion`
- `lem-refinement-inequalities`
- `thm-finitely-many-discontinuities-integrable`
- `thm-dirichlet-and-thomae-continuity-sets`
- `thm-baire-category-r`
- `thm-discontinuity-set-is-f-sigma`

Those rows have no matching repaired Step-6 finding in this group and are
outside this dispatch's live write scope and published-content protocol.
