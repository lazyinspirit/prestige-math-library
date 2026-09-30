# Owner-authorized incomplete author continuations

The `mathlib.ready-pairs.mts` table supports an explicit continuation when a
successful historical Step 3 author left required artifacts unfinished.
The operator must first confirm the pair has no active engine or helper writer,
record the actual missing artifacts, and obtain owner authorization to continue
authoring. Mathematical gate repair remains owner-held.

Write `research/RUN-author-continuations.json`:

```json
{
  "version": 1,
  "run": "RUN",
  "authorized_by": "owner",
  "authorization": "The owner requested engine authors for all unfinished pairs.",
  "continuations": [
    {
      "page": "PAIR",
      "previous_result": "alpha-high-step3b-pair-PAIR-HASH.result.json",
      "writers_drained_at": "2026-09-30T13:00:00Z",
      "reason": "The earlier author succeeded but left these required files missing: ..."
    }
  ]
}
```

The table validates the named existing successful, single-pair receipt and
excludes only that exact filename from current author coverage. Historical
receipts and engine state remain intact. Other pairs and later successful
continuation receipts retain ordinary coverage. The standard planner chooses
the current content/direction hash, waits for a current approved pair scope,
and enforces shared-batch writer exclusivity. Update the binding owner authoring
direction with the concrete continuation obligations before dispatch; a fresh
direction is required if the old label would otherwise be reused.

Failed dispatches already provide no coverage and require no exclusion. After
correcting their cause or issuing an authorized authoring continuation, the
ordinary engine planner can start a new content/direction-hashed call. Neither
case waives an artifact check, freezes a new baseline, accepts an item proof, or
clears a mathematical gate. Preserve the continuation record through closeout
so the original receipt cannot regain current coverage prematurely.
