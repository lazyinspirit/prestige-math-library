# Exact Step-8 repair envelope — 8-preflight, round 2

The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,
the full untruncated output, exact current rejection tuples, and explicit run/published ownership.
Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.

```json
{
  "version": 1,
  "run": "frontier-25",
  "stage": "8-preflight",
  "round": 2,
  "mode": "preflight",
  "group": null,
  "failures": [
    {
      "id": "defect-ledger",
      "stage": "8-preflight",
      "why": "ERROR frontier-25-S8-d-009 is open in the ledger but prop-deterministic-cfls-are-unambiguous is not open in the closure receipt — one of them is stale",
      "output": "defect-ledger: 232 defect row(s) checked for frontier-25, 1 error(s)\nERROR frontier-25-S8-d-009 is open in the ledger but prop-deterministic-cfls-are-unambiguous is not open in the closure receipt — one of them is stale\n",
      "named_ids": []
    }
  ],
  "mechanical_residue": "",
  "live_items": [],
  "assigned_items": [],
  "live_tuples": []
}
```

---

# Step 8 — targeted repair-integrity review, `{{run}}`

The generated repair envelope above is authoritative. It supplies every failed
gate with full output, the exact live ids and rejection tuples, and each id's
run or published scope. Take only its `assigned_items` and `live_tuples`; rerun
the focused gate where it supports item scope.

Complete a repair already licensed by an exact `confirmed_fatal` adjudication,
or correct a documentary contract/manifest/impact/verification record that must
match the current proof. Do not edit a nonfatal or false-positive item, broaden
the scope, run a judge sweep, or run a workflow transition.

Preserve append-only ledgers and return the gate, ids, licensing rows, changed
files, targeted checks, and blocker. This task applies before `8-rejudge`; a
frozen-cutover dispatch uses the Step-8 close task instead.
