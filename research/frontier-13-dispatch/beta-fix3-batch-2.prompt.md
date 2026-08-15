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

## Batch 2 third pass — one item that was never dispatched to you

Alpha's F2.1 named **two** results. My fix brief said "Add it", singular, and only
one arrived. Your work is not at fault: Alpha confirms there is no second-pass
record in your notes, so this is **unattempted, not failed**. My error.

Order 68 is `ready-for-splice` and untouched by this — do not edit it.

### F2.3 — add `cor-number-of-solutions-of-a-binomial-congruence`

Currently **zero occurrences** across all four of your artifacts; the A page is at
27 items, not 28.

**Position:** immediately after `thm-eulers-criterion-for-binomial-congruences`
(position 12).

**Statement:** when $x^m\equiv a\pmod n$ is solvable under the hypotheses of the
preceding theorem — $n$ admits a primitive root, $\gcd(a,n)=1$, $m\ge1$ — the
number of solutions modulo $n$ is exactly $\gcd(\varphi(n),m)$.

**Deps** — all already on the page or already cited by the theorem it follows, so
**no new `requires` edge and no new published dependency**:

```
thm-eulers-criterion-for-binomial-congruences
prop-index-calculus-modulo-n
def-index-of-a-unit-relative-to-a-primitive-root
thm-linear-congruence-solvability-and-solution-count   (published; already a
    declared dependency of the theorem above it, and it supplies the count as
    well as the solvability)
```

**Obligations that must move with it** — this is the exact shape this run has
dropped four times, so treat it as part of the item, not follow-up:

- a proof-contract entry whose input map covers its numbered steps, with citations
  quoting the **proposition** of each cited item, never a clause's opening words;
- component provenance on **both** axes with a rationale in your notes —
  `literature-derived` statement from Hackman C.III.1's count, `ai-altered` proof
  if you reorganise the route around the local index calculus;
- the **Hackman C.III.1 coverage row updated to name both items**: one row
  currently disposes a heading that yields two results.

**Why it matters mathematically.** Your page already carries
`cor-power-congruence-solution-count-modulo-a-prime` — the $a=1$, prime-$n$
**count**. Without this corollary the page states a general **solvability**
criterion and a narrower **count**, so the special case says more than the general
one. That is a real gap in the page's logic, not bookkeeping. One corollary at
scaffold cost now; after the step-4 splice it is a rewrite.

### Re-run and report

The three gates plus your closure audit; report the new item count (expect 28),
its deps, its provenance pair, and the updated Hackman row.
