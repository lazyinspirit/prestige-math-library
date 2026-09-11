# Exact Step-7 repair envelope — 7-preflight, round 1

The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,
complete relevant diagnostic records, exact current rejection tuples, and explicit run/published ownership.
The full_evidence file retains the original untruncated battery output and all ownership assignments.
Read its relevant sections if a diagnostic is ambiguous; do not infer absence from this scoped view.
Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.

```json
{
  "version": 1,
  "run": "phase-2-next-20",
  "stage": "7-preflight",
  "round": 1,
  "mode": "preflight",
  "group": "h",
  "full_evidence": "research/phase-2-next-20-7-preflight-repair-evidence-1-95abcf533a79403e886a695db1cbc65c495d647a596338d053c633b82121377b.json",
  "full_evidence_sha256": "95abcf533a79403e886a695db1cbc65c495d647a596338d053c633b82121377b",
  "failures": [
    {
      "id": "risk-report",
      "stage": "7-preflight",
      "why": "ERROR risk-review-missing [lem-names-for-pairs-functions-and-ordinals]: lem-names-for-pairs-functions-and-ordinals is high risk and lacks a complete Alpha risk_review",
      "output": "ERROR risk-review-missing [lem-names-for-pairs-functions-and-ordinals]: lem-names-for-pairs-functions-and-ordinals is high risk and lacks a complete Alpha risk_review",
      "named_ids": [
        "lem-names-for-pairs-functions-and-ordinals"
      ]
    },
    {
      "id": "boundary-audit",
      "stage": "7-preflight",
      "why": "}",
      "output": "",
      "named_ids": []
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "lem-names-for-pairs-functions-and-ordinals",
      "scope": "run",
      "owner": "h"
    }
  ],
  "assigned_items": [
    {
      "id": "lem-names-for-pairs-functions-and-ordinals",
      "scope": "run",
      "owner": "h"
    }
  ],
  "fatal_repair_licences": [
    {
      "id": "lem-names-for-pairs-functions-and-ordinals",
      "model": "gpt-5.6-terra",
      "context_sha256": "548d4a4ca1c724190ee57d299c325249a696689021c91e0841184791d9fee862",
      "item_sha256": "ba4bd5bc07b3f985a2f8d0f2cf6759408c5e213972ecd393c6c26c90ccd93710",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "h",
      "rationale": "The cited transitivity/rank theorem does not supply the name-stage common-bound construction or the valuation recursion used in step 1.1. The repair cites def-forcing-names-and-name-rank and def-forcing-name-valuation-and-generic-extension directly, and also exposes the check-name definition used by the internal ground-model construction.",
      "at": "2026-09-11T19:08:00+10:00"
    }
  ],
  "live_tuples": []
}
```

---

# Step 7 — targeted repair-integrity review, `{{run}}`

The generated repair envelope is authoritative. It supplies unresolved
diagnostics, exact live ids and rejection tuples, and each id's
run or published scope. Work only on `assigned_items`, using the live tuples
and retained fatal repair licences as evidence. Rerun focused checks where supported.

Inspect only the named finding and the item/dependency text needed to resolve it.
Do not repeat whole-group reading, settled adjudication, or upheld boundary
reviews. Cited suppliers are context, not additional repair targets. Original
reports are retained in `full_evidence`; open only relevant sections if needed.

Resolve every assigned finding in this pass, keeping the existing mathematics
and detail except where an exact fatal licence requires correction. A serial
reviewer must establish ownership before editing an ambiguous record. If the
detector or repair authority is wrong, report the cause; unchanged retries stop.

Complete a repair already licensed by an exact `confirmed_fatal` adjudication,
including the envelope's `fatal_repair_licences`. These bind validated original
rejections to the pre-Step-7 baseline even after a repair makes their verdicts
stale. Empty `live_tuples` does not revoke these licences. Use them only to
complete the assigned repair; do not readjudicate settled findings.
You may also correct a documentary contract, manifest, impact or verification
record to match the current proof. A licensed fatal repair may add fully proved
missing-dependency lemmas under the Step-7 adjudication instructions, including
their page, manifest, contract, and scope registrations. Do not otherwise
broaden scope, edit a nonfatal or false-positive item, run a judge sweep, or run
a workflow transition.

Preserve append-only ledgers and return the gate, ids, licensing rows, changed
files, targeted checks, and blocker. This task applies before `7-rejudge`; a
frozen-cutover dispatch uses the Step-7 close task instead.
