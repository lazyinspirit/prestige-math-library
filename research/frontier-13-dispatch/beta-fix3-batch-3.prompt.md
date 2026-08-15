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

## Batch 3 third pass — the page-88 re-anchor failed, and that is my error

Your first repair followed my instruction exactly, and your `replacement_audit` is
what exposed that the instruction was wrong. Alpha's re-check confirms the
substitution was done honestly: no drifted locator, no swapped URL, all 34 claimed
Axler results present at their claimed numbers, 144/144 published quotes matching
disk, 0 placeholders. **Page 94 is `ready-for-splice`.** Keep that audit artifact —
it is the only reason this was caught, and I am recommending it become a required
artifact for every re-harvest.

### The failure

I told you to re-anchor page 88's 22 Kim rows onto **Treil, *Linear Algebra Done
Wrong*, Chapter 4**. I verified that URL returned HTTP 200 and did not verify it
contained the material. It does not. Measured directly:

```
Treil Ch.4 (311 KB)  "minimal polynomial" 0 · "primary" 0 · "coprime" 0
                     "generalized eigenspace" 0 · "Cayley" 0
Treil Ch.9 (443 KB)  "minimal polynomial" 0 · "primary" 0 · "coprime" 0
                     "generalized eigenspace" 63 · "Cayley" 15
```

18 of 22 rows found no replacement and **9 items were left with no source at all**,
including the whole primary-decomposition spine. Your audit reported this rather
than papering over it, which is the correct behaviour.

### The corrected instruction — both sources content-verified, not just URL-verified

I extracted the full text of each and counted terms, rather than trusting a title:

| source | pages | minimal polynomial | generalized eigenspace | primary decomposition | relatively prime | Cayley |
|---|---|---|---|---|---|---|
| **Axler, LADR 4e** | 404 | **135** | **42** | 0 | 0 | 10 |
| **Knapp, *Basic Algebra*** | 762 | **55** | — | **4** | **7** | — |

- `https://linear.axler.net/LADR4e.pdf` — you already read it for page 94 and Alpha
  verified 34 of its results at their claimed numbers. It carries the **minimal
  polynomial and generalized-eigenspace** material Kim was covering.
- `https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf` — **already
  in this run's source ledger** (batch 1 uses it) and verified live. It carries
  **primary decomposition and the relatively-prime/coprime kernel** material, which
  neither Axler nor Treil nor Conrad has. Alpha independently ruled out widening
  Conrad: 0 occurrences of "primary" across all seven sections.

Re-anchor the 22 rows across these two, enumerate each source's own section and
named-result headings over the exact ranges you read, and give every heading a
disposition. **Verify each locator by opening the source at it** — that is the
whole lesson of this pass. WebFetch cannot read PDFs; use a venv with `pypdf`.

If a specific result genuinely appears in neither — say so in the row and name
what would license it. **Do not leave an item with no source, and do not stretch a
locator to cover something it does not contain.** If after real searching the
general primary decomposition over an arbitrary field has no live source you can
verify, tell me and I will decide between restricting the page to the split case
and finding a source myself. That is a blocker worth raising, not a gap to absorb.

### Also in this pass

Whatever remains outstanding from your second-pass task (F3.4 iff converse, F3.6
splitting-fields citations, F3.7 third summary paragraph) if that pass did not
complete them — check your own notes for what landed.

### Re-run and report

The three gates, your closure audit, the updated `replacement_audit` covering all
22 page-88 rows, and an explicit count of items still lacking a source.
