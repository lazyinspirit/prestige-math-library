# Terra screening brief

Read repository `CLAUDE.md` and `README.md` fully before work. Read the owner
plan `research/pre-phase-2-prerequisite-screening-plan.md`. Your assignment JSON
specifies disjoint, historically published target IDs. Do not spawn agents.

Read every assigned item's complete current text. Screen for potentially unmet
direct mathematical prerequisites and other potential fatal defects: false
claims, invalid proof steps, missing necessary assumptions, ill-defined
constructions. This is a bounded screening, not full transitive proof audit.
Inspect pertinent supplier contracts and local arguments. The reusable catalogue
is `suppliers.jsonl`; it includes historical context and explicitly unproved
records, which must not be mistaken for new proof suppliers. Look beyond this
catalogue for adequate existing implicit suppliers. A missing declared edge alone
is not a gap. Topic proximity alone is not evidence. A supplier's A-P/U-P status
or proof-only defect does not propagate a flag to its consumer when the supplier
statement matches the use. No indirect consumer expansion is authorized.

For each target, look up existing canonical ledger findings by its exact ID;
do not reread the enormous ledger indiscriminately. Do not downgrade existing
confirmed findings, duplicate classifications, or manufacture new discoveries
from already recorded debt. Consult authoritative sources when mathematics is
uncertain and record only source reading actually performed. A source citation
or old judge stamp is not proof verification. Preserve uncertainty explicitly.

Write evidence ONLY under `research/pre-phase-2-screening/`, named with your
assignment prefix. Do not edit mathematical items, library pages, dependency
metadata, publication stamps, canonical ledger, plan, workflow state or tools.
Do not repair or author any mathematics. Parent integrates approved findings.

Write a JSON array of receipts to `<assignment>-receipts.json`, plus a concise
Markdown report `<assignment>-report.md`. Keep candidate details substantive;
negative receipts can be short but must identify actual argument/interface
checks. Required receipt shape:

```json
{
  "id": "canonical-item-id",
  "consumer_sha256": "SHA256 of complete current file bytes",
  "baseline_commit": "52bba95d9bd8ede09e96f4b024d634cca38b0100",
  "baseline_sha256": "copy verified census value",
  "baseline_status": "published",
  "current_status": "published",
  "disposition": "no_candidate_found OR U-P_candidate OR existing_finding OR review_pending",
  "scope": "Full current text; direct prerequisites and potential fatal defects; bounded supplier checks, no indirect expansion",
  "fatal_screening_performed": true,
  "exact_passage": "LITERAL substring copied from current item, preserving Markdown and LaTeX",
  "explanation": "Exact direct use/argument checked, or a concrete potential gap",
  "suppliers": [{"id": "supplier-id", "sha256": "complete file hash", "contract_sha256": "optional Statement/Definition hash", "status": "published", "check": "actual checked mathematical use"}],
  "flags": [{"kind": "unmet_prerequisite OR false_claim OR invalid_proof OR missing_assumption OR ill_defined", "severity": "potential_fatal OR unresolved", "exact_passage": "literal quote", "reason": "mathematical explanation/witness", "supplier_ids": [], "uncertainty": "honest limits"}],
  "uncertainty": "none identified within recorded scope OR exact open question",
  "external_sources_checked": false
}
```

Use an empty `flags` list for no-candidate receipts. `U-P_candidate` is a
recommendation only, not a confirmed-fatal verdict. For a new flag on an already
classified item use `existing_finding` and explain the existing classification
and whether this flag is new; parent decides any index change. Record suppliers
actually checked, not an invented inventory of reads. Verify each literal quote
is a substring of the current target and each recorded hash matches disk.

Use `census.jsonl` for historical eligibility and current hashes, refusing stale
content. Read complete targets in manageable blocks, avoiding truncated output.
Preserve partial receipts when needed; do not claim assigned work is finished
until every target has an honest disposition. Return target/candidate counts and
evidence paths. Report a concrete blocker early instead of silently looping.
