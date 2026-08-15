# frontier-13 — Beta scaffold-repair brief (step 3 → 4)

You are the Beta that scaffolded this batch. The step-3 Alpha review is complete
and the orchestrator has adjudicated it. **Apply the fixes listed in your task
file, and nothing else.**

## Hard rules

- **No permission prompts of ANY kind** (owner, 2026-07-30, broadened
  2026-08-11). Not from you, not from any subagent you dispatch. This binds a
  compound command as a whole: no segment of an `&&` chain may raise a prompt.
  If an indispensable operation truly cannot be expressed without new authority,
  **stop and record a blocker in your notes** — that is the escape hatch, never a
  prompt.
- **Your write scope is exactly your own four artifacts:**
  `research/frontier-13-batch-<i>.{pages,coverage,proof-contracts}.json` and
  `research/frontier-13-batch-<i>.notes.md`. Do **not** edit
  `research/plan-spec.json` — the orchestrator owns it and has already applied
  every approved `requires` amendment. Do not edit another batch's files. Do not
  create `items/*.md`; authoring is step 5.
- **Ids are immutable.** Adding an item mints a new id; never rename or remove an
  existing one.
- This is a **scaffold repair, not a re-scaffold.** Do not re-harvest, do not
  restructure pages that were found sufficient, do not "improve" anything not
  named in your task file.

## What the fixes must satisfy

1. **Every new item is dependency-closed.** Each dependency is either an earlier
   item in the same pair or a published item whose **home page is inside this
   page's declared `requires` closure**. Checking that a dependency is *published*
   is NOT sufficient — that is precisely the check that let a real defect through
   this run. Resolve each published dependency to the page that lists it, then
   confirm that page is in the closure.
2. **No cross-pair edge.** No item may depend on an item scaffolded in another
   pair of this run, including the other pair in your own batch.
3. **No dependency on a B-page item**, including from the same B page. B pages
   are leaves.
4. **The 60-item ceiling** stands per A page. If a fix would cross it, stop and
   record a blocker rather than splitting on your own.
5. **Provenance** on every new item: `provenance.statement` and
   `provenance.proof`, with a rationale in your notes. An `ai-generated`
   statement may never be load-bearing.
6. **Coverage rows.** If a fix adds a result that came from a source heading,
   update that heading's disposition to `included` and name the new item id. If a
   fix corrects a decline reason, rewrite the reason to be true of the new state.
7. **Natural mathematical voice.** State the cited proposition itself in each
   `[F#]`/`[A#]`/`[L#]` fact — quote exactly when practical, otherwise the
   smallest faithful shortening. No changed domain, quantifier, hypothesis,
   direction or conclusion; no invented converse; no interpretive filler.

## Proof-contract citations — read this even if your task file does not mention it

A whole-run audit found the `citations` arrays populated very unevenly:

```
batch 1: 70 contracts,  0 empty, 212 citations
batch 2: 65 contracts,  0 empty, 222 citations
batch 6: 49 contracts,  8 empty, 100 citations
batch 7: 37 contracts, 20 empty,  43 citations
batch 3: 72 contracts, 28 empty,  91 citations
batch 4: 43 contracts, 43 empty,   0 citations
batch 5: 41 contracts, 41 empty,   0 citations
```

Batches 1 and 2 populated every contract's citations at scaffold time with
disk-checked exact source clauses. **That is the standard.** If your batch has
empty `citations` arrays, populate them now for every proof-bearing item: the
exact cited source clause and the steps that use each fact. This is required by
`QUALITY-CONTROLS.md` before step 7 freezes context, and doing it now is far
cheaper than doing it after the items are authored.

## When you are done

Re-run your own gates and report their exact output:

```
node tools/validate-plan.mjs research/plan-spec.json
node tools/coverage-checklist.mjs research/frontier-13-batch-<i>.coverage.json
node tools/content-policy.mjs research/frontier-13-batch-<i>.pages.json --manifest-only
```

Then re-run your own dependency-closure audit over every item in your batch —
unresolved ids, out-of-closure published deps, cross-pair edges, B-leaf deps,
duplicate ids — and report the counts. Do **not** run `tools/gates.mjs`.

Report: what you changed, the new item count per page, the gate output, and any
blocker. Append a dated section to your notes; do not delete existing notes.


---

# This dispatch

## Batch 4 third pass — two one-line edits

Alpha confirms F4.5 landed **completely** — all three new items plus the B-page
instance, which you found yourself when the task only said "and the fourth if".
Each quotes the lemma's exact Statement, both home pages are in closure, counts and
gates unmoved, citations 146 → 150 for exactly the four additions. Order 399/400 is
`ready-for-splice` and must not be touched.

Two things block order 395, both in artifacts step 4 splices into
`research/plan-spec.json`.

### F4.6 — `ex-bounded-order-graph-classes-are-erdos-hajnal` asserts the property of a class that need not be hereditary

The Erdős–Hajnal property is defined **only for hereditary classes**
(`def-erdos-hajnal-property-and-constant`). A bounded-order class need not be
hereditary: $\{K_2\}$ is a bounded-order class and is not hereditary, since
deleting a vertex leaves $K_1\notin\{K_2\}$.

**No citation can fix this one** — unlike F4.5, the hypothesis is missing from the
**title**, not merely uncited. Add it: restrict to *hereditary* classes of bounded
order (or state it for the hereditary closure, whichever matches your proof). One
word in the title, plus the matching hypothesis in the Statement and strategy.

This is the run's recurring fatal class — a title claiming more than the proof
gives — and the judges read Statements and cannot see a false title.

### F4.7 — the $\le 3$ vertices corollary is missing two definitional deps

`cor-every-graph-on-at-most-three-vertices-has-the-erdos-hajnal-property` does not
cite `def-erdos-hajnal-property-and-constant` — **the definition of the phrase in
its own title** — nor `def-h-free-and-family-free-graph`.

Its two siblings, repaired in the same pass, carry all three. This is a routing
loss: my fix task named only the hereditary lemma. Add both, and cite each at the
step where it is used in the proof contract.

### Re-run and report

The three gates plus your closure audit; report the corrected title and the
corollary's new `deps`. Alpha re-checks only these two items on return.
