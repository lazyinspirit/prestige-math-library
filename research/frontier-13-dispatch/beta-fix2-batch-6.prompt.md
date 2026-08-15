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

## Batch 6 second pass — two residues from the first repair

Your first repair (49 contracts, 0 empty, 118 citations; F6.1/F6.2/F6.3 applied)
was verified on disk and is otherwise accepted. Item counts unchanged at 51/9 and
all gates green. Two things the repair left behind. Both are small; change nothing
else.

### F6.5 — the poset hypothesis has no dependency supplying it

`cor-a-galois-connection-satisfies-fgf-equals-f-and-gfg-equals-g` now reads, and
correctly:

- title: "A Galois connection between **posets** satisfies $FGF=F$ and $GFG=G$"
- strategy: "…$FGFa\le Fa\le FGFa$…; **antisymmetry** gives $FGF=F$…"

But its only dependency is `def-galois-connection`, whose own title is "Galois
connection between **preorders**" and whose deps are `def-preorder` and
`prop-preorders-as-categories-and-monotone-maps-as-functors`. **Nothing in the
dependency set supplies antisymmetry**, which is the entire load-bearing step.

`def-partial-order` is published, homed on `relations-functions-and-quotients`,
and **already in this page's closure** — verified by the orchestrator. Add it to
the corollary's `deps` and cite it at the antisymmetry step in the proof contract's
stated input map.

This is the proof-obligation-map rule: every substantive subclaim maps to an exact
dependency or an inline derivation. "Posets" is a hypothesis the item now states
and uses, so it needs a source.

### F6.6 — the id still describes the item you replaced

The id is `ex-the-maximal-subgroupoid-and-fractions-adjoint-triple`. It names
**fractions** and an **adjoint triple**. After your repair the item is:

- title: "The inclusion of groupoids into categories is left adjoint to the
  maximal-subgroupoid functor"
- deps: no fractions adjoint, no triple

The id now misdescribes its own content. **Item ids are immutable once on `main`** —
this item is still an unauthored scaffold entry, so this is the last moment it can
be corrected for free. Rename it to match what it proves (for example
`ex-groupoid-inclusion-is-left-adjoint-to-the-maximal-subgroupoid`; choose the id
that matches the title). Update every reference to the old id in your
`pages.json`, `coverage.json` and `proof-contracts.json`, and confirm nothing else
in the batch referenced it.

Since the id has never been published, no `aliases` entry is needed and none
should be added.

### Re-run and report

The three gates in the brief, plus your dependency-closure audit. Report the new
id, the corollary's new `deps`, and the gate output.
