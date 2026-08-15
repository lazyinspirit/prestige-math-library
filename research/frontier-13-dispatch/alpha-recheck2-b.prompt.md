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

## Group B round 2 — batches 3, 7

Round-1 verdicts: 94 `ready-for-splice`; **88 and 195 `not-ready`**.

### Batch 3, page 88 — the re-anchor you caught, now retried against verified sources

Your round-1 finding was right and the instruction that caused it was mine: I told
Beta 3 to use Treil Ch. 4 having checked only that the URL returned 200. Measured
directly since:

```
Treil Ch.4  minimal polynomial 0 · primary 0 · coprime 0 · generalized eigenspace 0
Treil Ch.9  minimal polynomial 0 · primary 0 · coprime 0 · generalized eigenspace 63
```

The third pass re-anchors onto two sources I content-verified by extracting full
text, not by reading titles:

| source | min. poly | gen. eigenspace | primary decomp | relatively prime |
|---|---|---|---|---|
| Axler LADR 4e | 135 | 42 | 0 | 0 |
| Knapp *Basic Algebra* | 55 | — | 4 | 7 |

**Verify: are there still items with no source?** That is the number that matters —
it was 9. Open the new locators; a locator stretched to cover something it does not
contain is the exact failure this pass exists to undo. If the general primary
decomposition over an arbitrary field still has no honest source, say so plainly
and I will decide between restricting the page to the split case and sourcing it
myself. **Do not accept a strained locator to reach `ready-for-splice`.**

Also confirm the second pass's work: the simultaneous-diagonalisation title is now
an iff with the converse proved, `def-polynomials-that-split-and-splitting-fields`
reached the five items using "splits" as a technical predicate (the orchestrator
added `splitting-fields` to order 88's `requires` — 0 seams — rather than
rephrasing, because the predicate is in four titles and several ids), and the
illegal third summary paragraph is gone.

### Batch 7 (order 195) — my superseded instruction, corrected

The second pass built `lem-monic-polynomials-split-over-an-algebraically-closed-field`
as I asked. Your round-1 finding then showed the better fix: give
`cor-eigenvalue-form-of-the-transfer-matrix-trace` a **split** hypothesis rather
than an algebraically-closed one, which also lets
`ex-closed-walks-in-the-complete-graph` be stated over **ℚ** instead of resting on
FTA (order 139, `planned`, not in closure). The third pass carries that.

**Verify:** the corollary's hypothesis is now the split factorisation its two
consumers actually state; the example is over ℚ; the lemma was either removed or
independently earns its place, with no orphaned coverage row either way. Then F7.4,
F7.5 (`out-of-scope` → `deferred` with the true obstruction), F7.7, F7.8.

You called F7.1 the model repair of the run. Say whether this pass meets it.
