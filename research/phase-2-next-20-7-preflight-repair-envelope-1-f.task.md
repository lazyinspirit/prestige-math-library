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
  "group": "f",
  "full_evidence": "research/phase-2-next-20-7-preflight-repair-evidence-1-95abcf533a79403e886a695db1cbc65c495d647a596338d053c633b82121377b.json",
  "full_evidence_sha256": "95abcf533a79403e886a695db1cbc65c495d647a596338d053c633b82121377b",
  "failures": [
    {
      "id": "risk-report",
      "stage": "7-preflight",
      "why": "ERROR risk-review-missing [lem-names-for-pairs-functions-and-ordinals]: lem-names-for-pairs-functions-and-ordinals is high risk and lacks a complete Alpha risk_review",
      "output": "",
      "named_ids": []
    },
    {
      "id": "boundary-audit",
      "stage": "7-preflight",
      "why": "}",
      "output": "ERROR boundary-template [def-finite-semisimple-lie-algebra-and-symmetric-adjoint-action]: {\"id\":\"def-finite-semisimple-lie-algebra-and-symmetric-adjoint-action\",\"case\":\"iff-forward\",\"text\":\"This item proves direct implications and defines its conventions; it does not assert a biconditional.\",\"row_sha256\":\"874576be22ac6797518b3a855cf9272723c1d531aa4c31e2058e246fd7b5d852\"}\nERROR boundary-template [def-finite-semisimple-lie-algebra-and-symmetric-adjoint-action]: {\"id\":\"def-finite-semisimple-lie-algebra-and-symmetric-adjoint-action\",\"case\":\"iff-reverse\",\"text\":\"This item proves direct implications and defines its conventions; it does not assert a biconditional.\",\"row_sha256\":\"c2fcab925c5eaa0e0025ca4d9d90a47017e7862632fe3e3ada83808cb1d5f9f9\"}\nERROR boundary-template [lem-finite-lie-engel-trace-criterion-and-killing-nondegeneracy]: {\"id\":\"lem-finite-lie-engel-trace-criterion-and-killing-nondegeneracy\",\"case\":\"iff-forward\",\"text\":\"This item proves direct implications and defines its conventions; it does not assert a biconditional.\",\"row_sha256\":\"874576be22ac6797518b3a855cf9272723c1d531aa4c31e2058e246fd7b5d852\"}\nERROR boundary-template [lem-finite-lie-engel-trace-criterion-and-killing-nondegeneracy]: {\"id\":\"lem-finite-lie-engel-trace-criterion-and-killing-nondegeneracy\",\"case\":\"iff-reverse\",\"text\":\"This item proves direct implications and defines its conventions; it does not assert a biconditional.\",\"row_sha256\":\"c2fcab925c5eaa0e0025ca4d9d90a47017e7862632fe3e3ada83808cb1d5f9f9\"}",
      "named_ids": [
        "def-finite-semisimple-lie-algebra-and-symmetric-adjoint-action",
        "lem-finite-lie-engel-trace-criterion-and-killing-nondegeneracy"
      ]
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "def-finite-semisimple-lie-algebra-and-symmetric-adjoint-action",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-finite-lie-engel-trace-criterion-and-killing-nondegeneracy",
      "scope": "run",
      "owner": "f"
    }
  ],
  "assigned_items": [
    {
      "id": "def-finite-semisimple-lie-algebra-and-symmetric-adjoint-action",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-finite-lie-engel-trace-criterion-and-killing-nondegeneracy",
      "scope": "run",
      "owner": "f"
    }
  ],
  "fatal_repair_licences": [
    {
      "id": "def-finite-semisimple-lie-algebra-and-symmetric-adjoint-action",
      "model": "gpt-5.6-terra",
      "context_sha256": "246db08837bb052700ae4a7cf3286d113cfc13b8cdc5dafc1f382ae35ac2a780",
      "item_sha256": "389859d9837b46e649e3e7cb78fcfa35adec0e26153244415233d4915b95acd9",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "f",
      "rationale": "The cited polynomial-ring definition constructs only R[x], while the target calls C[e_1,...,e_n] an algebra of that definition without specifying iteration or the multivariate construction. Because this is the concrete definition of S(g), the missing construction is load-bearing rather than a cosmetic citation. The repair defines the iterated ring and its finite monomials locally and derives the free commutative-algebra and basis-change properties from substitution.",
      "at": "2026-09-11T18:12:00+10:00"
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
