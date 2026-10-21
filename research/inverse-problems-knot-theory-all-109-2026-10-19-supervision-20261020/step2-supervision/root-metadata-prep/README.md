# Root-only metadata reconciliation proposal

`root-reconcile-after-drain.proposal.mjs` is a new Step2 adaptation of the earlier Step1 proposal. Only `node --check` has been run by its author. It has not been run in plan or apply mode. No canonical, manifest, contract, coverage, page, plan, level, state, hash or readiness writes were performed for this preparation.

The script reads exactly the fixed 109 two-page manifests, 218 scoped pages and 1471 canonical items. It reads additional item frontmatter/defining sections only when a current source-resolution alternative names that existing item. The global plan is parsed to update only the 218 scoped requires arrays when root explicitly supplies replacements. It does not audit unrelated page contents or supplier proofs.

It mirrors canonical `deps`, `justified_by`, sources, provenance, proof strategy, declared axiom fields and literal defining sections into manifests; computes native in-run item levels; synchronizes page inventory/requirements while preserving page bodies; and updates only existing current `source_resolution.alternatives[].deps` arrays in coverage/source-coverage. Historical resolution/receipt/search/attempt fields are skipped and preserved. Unrelated manifest strategy/import/risk notes are retained. Every canonical argument body is asserted byte-identical, including all eight frozen reviewed-local lemmas. No accepted body is formatted or hashed.

This removes stale manifest edges such as the accepted batch93 map/triangle cycle by mirroring the actual current canonical `deps` and `justified_by`; it does not delete a historical review. Missing page reading-order edges, conflicting plan/manifest requirements, missing contracts and new cross-batch edges without explicit root evidence are holds. It does not infer new logical dependencies merely from a Fact link or from a Definition's `justified_by` provider. Thus an AC declaration requiring an additional canonical edge (for example the root-mentioned batch86 case) needs a separately evidenced explicit canonical override, rather than an automatic text-to-edge inference.

Proof contracts are entirely read-only in this script. Their dedicated owner is `root-contract-prep`; that script supplies claim/citation/routine mirrors and any exact owner decisions while preserving boundaries, risks and histories. This script only confirms owned scope/entry presence.

Before apply, the script requires stage `2-scope-review`, pause-after `2-scope-review`, no completed gate snapshot, all109 native batch states accepted, no live native dispatch, explicit external-writer drain plus named evidence, and zero unresolved metadata/evidence holds. It takes full-byte read guards (not hashes), archives every proposed mutation once into one fresh root-local archive, then rechecks all inputs before any writes. Native state, counters, reports and receipts are never written.

Root commands, after writer drain and independent review:

```bash
# 1. Copy decisions.template.json to a root-owned decisions.json; fill actual
#    drain evidence, reading-order overrides and exact new-edge evidence.
node research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step2-supervision/root-metadata-prep/root-reconcile-after-drain.proposal.mjs --decisions research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step2-supervision/root-metadata-prep/decisions.json --archive-dir research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step2-supervision/root-metadata-prep/applied-before-final > /tmp/prestige-step2-metadata-plan.json

# 2. Resolve all reported holds; inspect the exact plan and independent review.
#    Run the separate root-contract-prep script at its own reviewed interface.
#    Rerun this read-only plan if canonical/contract inputs changed.

# 3. Root alone applies this metadata batch to its exact guarded inputs.
node research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step2-supervision/root-metadata-prep/root-reconcile-after-drain.proposal.mjs --decisions research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step2-supervision/root-metadata-prep/decisions.json --archive-dir research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step2-supervision/root-metadata-prep/applied-before-final --apply

# 4. Root regenerates batch scheduling with its native tool, which owns the
#    normal input_sha256. This proposal does not compute it.
node tools/batch-dependency-levels.mjs write --run inverse-problems-knot-theory-all-109-2026-10-19
```

These commands are preparation/application, not proof acceptance, review recertification or a gate pass. Root then owns normal native liveness/reload and the exact current Step2 pre-battery/gate protocol, preserving the required pause before Step3. Do not run gates merely because a metadata plan has no holds.

Decision row shapes (root fills actual evidence; these are schemas, not acceptance):

```json
{
  "canonical_metadata_overrides": {
    "existing-scoped-id": {"fields": {"deps": ["exact-full-final-id-list"]}, "evidence": ["research/actual-root-acceptance.json"]}
  },
  "requires_overrides": {"existing-scoped-page": ["exact-full-final-page-requires"]},
  "edge_adoptions": {
    "deps:consumer-id->supplier-id": {"reason": "Exact current accepted interface and its actual evidence", "evidence": ["research/actual-root-acceptance.json"]},
    "justified_by:definition-id->result-id": {"reason": "Definition discharge only, not reversed logical deps", "evidence": ["research/actual-root-acceptance.json"]},
    "page:consumer-page->supplier-page": {"reason": "Actual accepted reading prerequisite", "evidence": ["research/actual-root-acceptance.json"]}
  }
}
```

The root apply archive also retains the pre-existing native batch-level file before the later native regeneration command. The proposal neither calculates nor writes its hash-bearing replacement.

Focused contract-eligibility correction: the inventory does **not** require contracts for every proof-free definition/algorithm. The script now uses the native `isProofBearing` predicate, plus the open-problem status-review case. `proof-contract-eligibility-correction.json` records the actual57 exempt proof-free rows (49 unselected;8 selected/no-entry contract-scope followups assigned to the separate contract owner). No fake contracts are generated.

`twenty-one-new-crossbatch-evidence-recommendations.{json,md}` is a read-only inventory of the provisional plan's exact21 edges:17 currently have accepted native endpoint-batch evidence candidates;4 await batch109 adoption. These are recommendations only. Do not copy them into `edge_adoptions` without the root's precise accepted-scope decision.

Battery2 correction: native ledger uniqueness is `[kind, consumer, supplier]`; `relation` is descriptive and is NOT part of the key. The proposal now rejects duplicate current pair rows and holds an existing pair whose declaration role needs migration. Such a role change must update the one current row and preserve the original in inline history; it must never append a second pair record. Exact batch91 two-pair repair is proposed separately under `battery2-ledger-pair-migration/`. Earlier recommendation of extra relation-keyed rows is superseded by that migration; its historical evidence is retained.
