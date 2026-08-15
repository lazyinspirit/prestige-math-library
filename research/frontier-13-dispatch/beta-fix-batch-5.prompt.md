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

## Batch 5 fix task — `tensor-products-of-modules` (order 106)

Alpha verdict: **insufficient**. One hard defect, two smaller items.

### F5.1 — OUT-OF-CLOSURE DEPENDENCY (must fix)

`def-tensor-product-of-modules-by-generators-and-relations` declares:

```
deps: [def-balanced-and-bilinear-maps, def-free-abelian-group,
       thm-abelianisation-of-a-free-group-is-free-abelian,
       def-generated-subgroup, def-quotient-group]
```

`def-free-abelian-group` and `thm-abelianisation-of-a-free-group-is-free-abelian`
are both homed on **`free-groups-and-presentations` (order 60), which is NOT in
this page's `requires` closure.** This is a hard `undeclared-prereq` failure and
it is load-bearing: your universal-property contract opens "Let $F$ be the free
abelian group on $M\times N$".

Verified independently by the orchestrator: 662 published dependencies across all
450 items in this run were resolved to their home pages and checked against each
pair's closure. **These two are the only out-of-closure edges in the entire run.**

**The fix** — cite the free-module machinery at $R=\mathbb Z$ instead:

- `def-free-module-on-a-set-and-standard-basis`
- `thm-universal-property-of-free-modules`

Both are homed on **`free-modules-and-exact-sequences`, which IS in your closure**
and is already this page's most-cited prerequisite. The published, judged
`lem-every-abelian-group-embeds-in-a-divisible-group` on that same page uses
exactly this move, so it is an established route in this library rather than a
workaround.

A free $\mathbb Z$-module on a set is a free abelian group on that set; make the
identification explicitly in the construction rather than leaving it implicit, and
adjust the proof contract's stated input map to match. Do **not** add a `requires`
edge to `free-groups-and-presentations` — the orchestrator considered and declined
it, because the free-module route is already available and adding an edge to reach
a result you can already cite is the worse of the two fixes.

### F5.2 — the two deferrals must name their licensing pages

Your `deferred` rows for directed-colimit closure of flat modules and the Tor
formulation give reasons but do not name where the result will live. Alpha
identified them: `subobject-lattices-...` (order 365.017) and
`tor-flatness-and-global-dimension` (order 365.055). Verify those ids against
`research/plan-spec.json` yourself and name the licensing page in each row. A
deferral that names no destination is indistinguishable from a drop.

### F5.3 — proof-contract citations are entirely empty

All 41 of your contracts have an empty `citations` array. Batches 1 and 2
populated all of theirs at scaffold time (212 and 222 disk-checked citations).
Populate yours: for each proof-bearing item, the exact cited source clause and the
steps using each fact. See the brief's table.

### Not in scope

Your `requires` amendments D5.1 (`dual-spaces-bilinear-forms-and-inertia`) and
D5.2 (`field-extensions-and-the-complex-numbers`) were **approved and already
applied** to `plan-spec.json` by the orchestrator. Do not re-apply them. Your
proposed design-document amendments to `research/plan-algebra-track-expansion.md`
are queued for the lead Alpha at step 4 — correct call not to apply them; leave
them alone.

Alpha confirmed your guard item, its failure witness ($q(m\otimes n)=m$ on
$\mathbb Z\otimes_\mathbb Z\mathbb Z$ where $2\otimes1=1\otimes2$), the separation
of construction from module structure, the `already-published` enough-injectives
disposition, and the $\mathbb C\otimes_\mathbb R\mathbb C$ licensing. Leave all of
that as it is.
