# frontier-13 — Alpha re-check, round 2 (final gate before step 4)

Narrow pass. Your round-1 report stands; verify **only** the corrective work
listed in your task file, and answer one question per pair:

> **`ready-for-splice` or `not-ready`?**

After this, item text stops being cheap to change.

## Hard rules

- **No permission prompts of ANY kind**, from you or any subagent. If blocked,
  **record a blocker** — never a prompt.
- Author nothing. Edit no batch file, no `plan-spec.json` entry, no published
  item. Write only `research/frontier-13-alpha-<g>-recheck2.md`.
- **Read from disk.** A Beta's account of its own repair is not evidence.
- Your batches only.

## The failure shape to hunt

Every round of this run has produced the same defect: **a repair fixes the claim
and leaves its obligations behind.** A Statement, title or id moves while its
`deps`, proof-contract input map, provenance row or coverage row stays put. It has
appeared in batch 6 (poset hypothesis with no antisymmetry dependency), batch 4
(hereditary property asserted without the licensing lemma), and batch 6 again (a
rename that reached three artifacts but not the notes' provenance table).

Check that shape on every item the corrective pass touched, then check the pass's
own additions for it.

## Also verify, briefly

- **New items**: dependency in closure or an earlier same-pair item; component
  provenance on both axes; contract citations that state a **proposition**, not a
  clause's opening words; a coverage row naming the item.
- **Ids versus content** — last free moment before immutability.
- **Nothing else regressed**: item counts, gates, closure.

## Verdict

`ready-for-splice` / `not-ready` per pair. `not-ready` names the exact remaining
work. Close with anything the orchestrator or the step-4 splice must know.


---

# This dispatch

## Group C round 3 — batch 4, two items only (targeted)

Orders 399/400 and 365.001/365.002 are `ready-for-splice` and must not be
re-opened. Verify only the two items you blocked 395 on. Both are already
confirmed present on disk by the orchestrator:

```
ex-bounded-order-graph-classes-are-erdos-hajnal
  title: "Every hereditary graph class of bounded order has the
          Erdős–Hajnal property"

cor-every-graph-on-at-most-three-vertices-has-the-erdos-hajnal-property
  deps now lead with def-erdos-hajnal-property-and-constant,
       def-h-free-and-family-free-graph
```

What is verified is that the strings changed. What you check is whether the
mathematics did:

1. Does the **hereditary** hypothesis actually discharge in the proof, or was the
   word added to the title while the argument still ranges over arbitrary
   bounded-order classes? If the proof needs the hereditary closure rather than
   hereditariness, the Statement must say so.
2. Do the corollary's two new definitional deps get **cited at the steps that use
   them** in the proof contract, or merely listed?
3. Counts unmoved at 14/8/25/8, gates green, no regression in the four items
   repaired last pass.

Verdict: `ready-for-splice` or `not-ready` for 395/396. Nothing else.
