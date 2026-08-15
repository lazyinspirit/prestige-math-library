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
