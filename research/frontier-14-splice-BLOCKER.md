# frontier-14 step 4 — BLOCKER: `stone-weierstrass-general` (287) is not spliced

Recorded by the **lead Alpha** at step 4, 2026-08-16. Sixteen of the run's
eighteen pages are spliced (314 items) and all six receipts are emitted; this one
pair — 25 items — is held.

The escape hatch is "record a blocker", not a prompt (owner, 2026-08-11). This is
that record.

## What is held

| page | kind | order | items withheld |
|---|---|---|---|
| `stone-weierstrass-general` | A | 287 | 19 |
| `stone-weierstrass-general-examples` | B | 288 | 6 |

Nothing spliced depends on any of the 25 withheld ids — checked mechanically
across the whole post-splice spec, not just this run's pages. So the hold is
self-contained and the other five batches release to authoring now.

## Why

LEVELS.md §"Step 4": *"Do not splice a pair Alpha marked `insufficient` at step 3
until its findings are resolved and it has re-checked."*

Group Alpha **a** marked 287 `insufficient` on finding **D1**
(`research/frontier-14-alpha-a-step3-scaffold-review.md` §D). Its re-check
(`research/frontier-14-alpha-a-recheck.md`, per-pair verdict table) returns
**not ready**: *"D1 has no recorded decision and no splice-ready alternative in
the manifest."*

I confirmed on current disk that D1 is genuinely unresolved: the batch-2 manifest
still carries all four re-minted items and still declares no edge to the
published complex numbers.

**This is not Beta work and it is not mine.** Finding D1 asks for a `requires`
edge plus two item deletions and three re-points — a scaffold decision, and
step-3 scaffold decisions belong to the orchestrator (CLAUDE.md, owner
2026-07-30). A lead Alpha at step 4 may not edit a batch manifest.

### Naming collision, flagged so it is not mis-routed

There are **two different "D1"s** in this run and they are unrelated:

- **`step3-decisions.md` D1** — the step-0 `ascoli-arzela → compactness` edge.
  **Already approved and already on disk**; both batch-2 pages carry
  `compactness` in `requires`. Nothing outstanding.
- **Alpha a's finding D1** — the ℂ re-mint below. **This is the blocker.**

The re-check's phrase "D1 has no recorded decision" means the *finding*. Reading
it as the decisions-file entry would conclude, wrongly, that the blocker is
already closed.

## The finding, re-verified from disk today

Batch 2 builds complex scalars locally because
`field-extensions-and-the-complex-numbers` is not in 287's closure:

- `def-complex-scalar-pairs-for-stone-weierstrass`
- `thm-complex-scalar-pair-field-and-conjugation-laws`
- `lem-dyadic-root-of-unity-filter`
- `def-self-adjoint-complex-function-algebra` (rests on the above)

I re-checked every load-bearing claim rather than relaying them:

| claim | verified |
|---|---|
| `field-extensions-and-the-complex-numbers` is order **54**, published | ✓ |
| it is **not** in 287's declared closure | ✓ |
| `the-complex-exponential-and-eulers-formula` is order **189**, not in closure | ✓ |
| both candidate edges point **backward** (54 < 287, 189 < 287) | ✓ |
| neither introduces a **cycle** — 287 is in neither page's closure | ✓ |
| `cor-sum-of-roots-of-unity` reads *"For $n\in\mathbb N$ with $n\ge2$, the sum of all $n$th roots of unity is $0$"* | ✓ verbatim |
| `thm-complex-numbers-form-a-field`, `thm-every-complex-number-has-a-square-root`, `lem-complex-conjugation-and-modulus-laws` published and carry the content | ✓ |

The cost of declining is not duplication but **a second, different $\mathbb{C}$ in
the library**: `ex-trigonometric-polynomials-are-dense-on-the-circle` would be a
theorem about `def-complex-scalar-pairs-for-stone-weierstrass` rather than about
the library's complex numbers, and any complex-analysis page citing it would have
to bridge the two definitions through `thm-complex-numbers-are-the-real-coordinate-plane`
— the very item that is out of closure.

## The decision the orchestrator owns

**Option A — approve the edges (Alpha a's recommendation).** Add
`field-extensions-and-the-complex-numbers` to 287's `requires` (required) and
optionally `the-complex-exponential-and-eulers-formula` (which removes
`lem-dyadic-root-of-unity-filter` outright). Batch 2's Beta then drops
`def-complex-scalar-pairs-for-stone-weierstrass` and
`thm-complex-scalar-pair-field-and-conjugation-laws` and re-points
`def-self-adjoint-complex-function-algebra`,
`lem-real-part-of-a-self-adjoint-complex-function-algebra` and
`cex-disc-algebra-is-not-dense-without-self-adjointness` at the published items.
Alpha a re-checks, then this pair splices. Net: −2 or −3 items of scalar
plumbing, plus the library's actual ℂ.

**Option B — decline both edges.** The scaffold as written is a legitimate
fallback; Alpha a records *"no mathematical objection to it — the dyadic root
construction and the averaging argument in the disc-algebra counterexample are
both correct as described."* Splices immediately with no manifest edit.

Either way the decision belongs in `research/frontier-14-step3-decisions.md` as
**D5**. Option A is the cheaper one to take **now** and the expensive one to take
after step 5, because after authoring it stops being a scaffold edit.

## To release this pair

1. Record D5 in `research/frontier-14-step3-decisions.md`.
2. If A: re-dispatch batch 2's Beta for the manifest edit, then Alpha a re-checks.
3. Re-run `node research/frontier-14-splice.mjs 2 --write` with
   `stone-weierstrass-general` removed from the `HOLD` set, then
   `node tools/validate-plan.mjs research/plan-spec.json`.
4. Re-emit `research/frontier-14-splice-2.json`.

The splice script is idempotent-safe: it refuses to re-splice a page that already
carries items, so re-running it cannot double-apply the fifteen spliced pages.
