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

## Batch 3 second pass — three findings my first fix brief omitted

Your first repair was executed faithfully and is accepted: the dead source is gone
(0 occurrences), both pages now carry two live treatments, harvest 126 → 201 rows,
gates green. **The omissions below are the orchestrator's error, not yours** — the
first brief was written from the Alpha's closing summary instead of its full
report, and three findings never reached you. Apply only these.

Source of record: `research/frontier-13-alpha-b-step3-scaffold-review.md`. Read
F3.4, F3.6 and F3.7 there in full before acting.

### F3.4 (page 88) — a harvest row claims an iff the item delivers in one direction

The Conrad row reads "Theorem 5.2, a finite family of diagonalizable operators is
simultaneously diagonalizable **if and only if** it commutes", disposed `included`
to `thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms` —
whose title states only the forward direction. Alpha verified against Conrad PDF
p. 9 that Thm 5.2 really is an iff. **The converse is nowhere in the scaffold.**

The converse is one line: operators diagonal in a common basis commute because
diagonal matrices commute. It is also the half a reader uses to *rule out*
simultaneous diagonalisability. **Add it to the same item and make the title an
iff** — do not mint a second id.

### F3.6 (page 88) — "splits" was an uncited technical term; the fix is now a spec edge

`def-polynomials-that-split-and-splitting-fields` is homed on `splitting-fields`
(order 56), which was **not** in order 88's closure — so the page used a technical
predicate it could not cite.

Alpha offered two remedies and preferred rephrasing to "product of linear factors".
**The orchestrator chose the other one, and applied it:** `splitting-fields` has
been added to order 88's `requires` (published, order 56 < 88, closure 37 → 38,
**0 seams** across all eleven in-run pairs, `validate-plan` exit 0).

Reason for overriding the preference: Alpha's premise was that "only the corollary
and prose drift". In fact the predicate appears in **four A-page titles** —
`cor-generalised-eigenspace-decomposition-for-a-split-minimal-polynomial`,
`thm-diagonalisable-iff-characteristic-polynomial-splits-and-multiplicities-agree`
(added by your own repair), `cor-distinct-characteristic-roots-imply-diagonalisability`
— plus the B-page `fs-a-split-minimal-polynomial-always-gives-diagonalisability`,
and "split" is baked into several ids, which become immutable at publication.
Paraphrasing four titles around a standard published definition is worse than
citing it.

**So: cite `def-polynomials-that-split-and-splitting-fields` wherever the page uses
"splits" as a technical predicate**, and add it to the relevant `deps` and contract
input maps. Do **not** mint a local `def-` for it. Do not edit `plan-spec.json` —
the edge is already there.

Note `thm-primary-decomposition-for-an-endomorphism` uses "split" in the ordinary
sense (the factors *split V* into kernels), not as the polynomial predicate. Leave
that one alone.

### F3.7 (both pages) — the third summary paragraph must go

Your notes §"Reader-facing page summaries" has, after page 94's two paragraphs, a
third 37-word paragraph beginning "The B pages supply concrete computations and
misconception checks…". An A-page summary is **exactly two paragraphs** and a B
page has **no authored summary body at all**, so that paragraph has no legal
destination. Delete it. Your four A-page summary paragraphs themselves are correct
(79/67 and 70/54 words).

### Re-run and report

The three gates in the brief plus your dependency-closure audit. Report the
converse's new title, the items whose `deps` gained the splitting-fields
definition, and confirmation the third paragraph is gone.
