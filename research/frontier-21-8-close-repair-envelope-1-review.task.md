# Exact Step-8 repair envelope — 8-close, round 1

The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,
the full untruncated output, exact current rejection tuples, and explicit run/published ownership.
Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.

```json
{
  "version": 1,
  "run": "frontier-21",
  "stage": "8-close",
  "round": 1,
  "mode": "close",
  "group": null,
  "failures": [
    {
      "id": "step8-cutover-frozen",
      "stage": "8-close",
      "why": "ERROR /home/lazyinspirit/Projects/prestige-math-library/research/frontier-21-step8-cutover.json: frozen cutover receipt is missing",
      "output": "step8-cutover: FAIL — frozen post-rejudge migration\nERROR /home/lazyinspirit/Projects/prestige-math-library/research/frontier-21-step8-cutover.json: frozen cutover receipt is missing\n",
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

# Step 8 — frozen integrity close, `{{run}}`

The final judge boundary is closed. The generated repair envelope above is
authoritative: review only its exact `assigned_items` and `live_tuples`, with
their explicit run or published scope; use a focused check when supported.

Do not alter mathematical items, start a judge cycle, or change another group's
records. You may correct a contract or receipt only when it exactly describes
the current item and cannot conceal a defect. A mathematical correction is a
blocker for the supervising session.

Return the gate, ids, non-item records changed, focused checks, and blockers.
