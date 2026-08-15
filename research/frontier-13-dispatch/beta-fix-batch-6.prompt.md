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

## Batch 6 fix task — `adjunctions-units-and-counits` (365.001)

Alpha verdict: **sufficient**. Three corrections, all **edits to existing items,
not additions** — your 51-item page keeps its 9 items of headroom under the 60
ceiling. Do not add items; do not split.

### F6.1 — a title that claims more than its hypotheses give (must fix)

`cor-a-galois-connection-satisfies-fgf-equals-f-and-gfg-equals-g` asserts
**equality** while depending only on a **preorder** definition. Riehl Cor. 4.2.10
states it for **posets**: "If $A$ and $B$ are posets…". Without antisymmetry you
get only $FGF\cong F$, not $FGF=F$.

A title or Statement asserting more than the proof gives is a **fatal** class at
step 6, and the paired judges read Statements and cannot see a false title. Fix it
now, at step 3, where it costs a scaffold edit. Either add the poset hypothesis
and keep the equality, or keep the preorder generality and weaken to natural
isomorphism — your call on which matches the page's use, but the title, Statement
and dependency set must agree.

### F6.2 — the ideal/variety example cites the wrong definition

That example is **antitone**, but it cites the monotone `def-galois-connection`.
Riehl homes it under Def. 4.4.1. Repoint it to
`def-mutually-left-and-mutually-right-adjoint-contravariant-functors` — which, as
Alpha notes, currently has **no consumer at all**, so this fix also stops you
shipping an item nothing uses.

### F6.3 — an adjoint triple with no support for one of its adjoints

`ex-the-maximal-subgroupoid-and-fractions-adjoint-triple` claims a **triple** but
has no dependency supporting the groupoid-of-fractions left adjoint, and there is
**no localisation page anywhere in `research/plan-spec.json`** — Alpha checked.
Narrow the item to the right adjoint it can actually support, and adjust the title
so it does not promise a triple.

### F6.4 — proof-contract citations

8 of your 49 contracts have empty `citations`. Populate those 8.

### Confirmed by Alpha — leave alone

- **The Riehl locators are correct.** Alpha downloaded the 2nd-edition PDF (build
  `D:20260728`) and read Chapter 4: §4.6 genuinely is "Adjunctions, limits, and
  colimits", the adjoint functor theorems are Thms 4.7.3/4.7.10/4.7.17 in §4.7,
  and you cite §4.7 only for Lemma 4.7.1. Every page boundary is exact; no
  first-edition locator was carried over. The orchestrator's step-0 concern here
  is retired.
- **MA-1 item 40** dropped to the Hom side and recorded — correct.
- **The RAPL split** is intact: `thm-right-adjoints-preserve-limits` and
  `thm-representable-second-proof-of-rapl-under-local-smallness` separate,
  reconciled by `rem-rapl-carries-no-size-hypothesis`.
- **The choice wording survived in four places**, not the three required.
- Both published B-leaf traps avoided by local construction.
- Your 43 deferrals are well-founded: the tensor bucket names batch 5, the adjoint
  functor theorem bucket names `reflective-subcategories-and-the-adjoint-functor-theorems`
  (order 365.003, which requires this pair's B page). Leave them.

### Spec change you should know about

The orchestrator **removed** the D1 `requires` edge on
`conjugacy-and-simplicity-in-the-symmetric-groups`: zero of your items cite any of
its 18 items, and `def-abelianisation-of-a-group` is homed on
`free-groups-and-presentations`, which was already in your closure. The other two
D1 edges stand (`free-modules-and-exact-sequences`, cited twice;
`tychonoff-embedding-and-stone-cech`, cited three times). Re-verified: every one of
your dependencies remains in closure. Do not edit `plan-spec.json`.
