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

## Batch 4 fix task — `erdos-hajnal-property-and-homogeneous-sets` (395) · `regular-pairs-and-induced-counting` (399)

Alpha verdicts: order 395 **insufficient**; order 399 **sufficient**. No split on
either page.

### F4.1 — order 395 never proves any forbidden graph HAS the EH property (must fix)

This is the run's strongest finding. Your page defines the Erdős–Hajnal property,
refutes it for the class of all graphs, proves three invariances, states the
conjecture — **and stops. There is no positive instance anywhere on the page.**
It has 11 A items; the next-thinnest A page in this run has 23, and this page
opens a 21-page block whose later pairs inherit its definitions.

`ex-complete-and-empty-hereditary-classes-have-constant-one` is **not** a positive
instance. "Complete graphs have EH constant 1" only says a complete graph is a
clique. The real statement is "$K_t$-**free** graphs are EH" — Ramsey's theorem —
and it is absent.

Your Chudnovsky locator stops at p. 2. **Page 3 opens with exactly this material.**
Extend the read range and add three results (11 → 14 items), all provable from
published items already in your closure, needing no `requires` change and no
split:

1. **$K_t$-free $\Rightarrow$ EH**, from `thm-finite-graph-ramsey-binomial-bound`.
   Alpha read that item on disk and confirms it is the off-diagonal form
   $\binom{s+t-2}{s-1}\to(s,t)^2$ — exactly what this needs.
2. **$P_3$-free $\Rightarrow \hom(G)\ge\sqrt n$.** Every component is a clique, so
   $n\le\alpha\omega\le\hom(G)^2$. `graphs-walks-and-connectivity` already supplies
   14 of this page's dependencies.
3. **Every graph on $\le 3$ vertices is EH**, from those two plus your scaffolded
   complement invariance.

Update the Chudnovsky coverage rows for the newly-read range, giving every heading
a disposition.

### F4.2 — DELETE the two B-page summaries (must fix)

Your notes §"Two-paragraph page summaries for step 4" drafts two-paragraph
summaries for all four pages, **including both `-examples` companions.** The
page-summary contract is explicit: **a B page has no authored summary body at
all.** Yours is the only batch in the run that did this. Delete the
`erdos-hajnal-property-and-homogeneous-sets-examples` and
`regular-pairs-and-induced-counting-examples` summary blocks; keep the two A-page
summaries, which are correct in form.

### F4.3 — one wording fix, one coverage gap

- `rem-tower-and-wowzer-bounds-in-regularity` says regularity "gives tower bounds".
  It must say ***upper*** bounds. Alpha confirmed your decline of the tower-type
  **lower** bounds is real — Zhao's Thm 2.1.17 says verbatim "We do not include the
  proof here" — and that your titles otherwise claim no more than the proofs give.
  This one word is the exception.
- Zhao Exercises 2.1.22–2.1.25 sit inside §2.1 but outside your stated locator,
  and **2.1.24 is the half graph your own notes already cite.** Extend the locator
  and give all four a disposition.

### F4.4 — proof-contract citations are entirely empty

All 43 of your contracts have an empty `citations` array. Populate them — see the
brief's table; batches 1 and 2 are the standard.

### Confirmed — leave alone

Alpha verified your induced-removal chain closes as advertised (strong regularity
→ energy approximation → self-regular extraction → representative selection →
induced counting) — the run's clearest case of building the machinery rather than
declining. Your two pairs correctly do not cite each other.
