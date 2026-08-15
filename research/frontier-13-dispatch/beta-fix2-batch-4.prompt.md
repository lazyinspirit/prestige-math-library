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

## Batch 4 second pass — one defect your repair introduced

Your repair is otherwise confirmed correct, and Alpha checked the arguments rather
than their presence:

- **$K_t$-free ⟹ EH**: your $\binom{t+s-2}{t-1}$ is the published
  $\binom{s+t-2}{s-1}$ under $(s,t)\mapsto(t,s)$ — not transposed. The condition
  $s\ge t-2$ is stated and used exactly where $(t+s-2)\le 2s$ needs it. Your
  claimed exponent $1/t$ is **below** what Ramsey delivers ($\approx 1/(t-1)$) — an
  underclaim, which is the right direction to err.
- **$P_3$-free**: the empty graph closes for a real reason —
  `def-clique-stable-set-and-numbers` publishes $\omega(K_0)=\alpha(K_0)=0$ — and
  $\alpha,\omega$ are correctly taken over $G$ rather than over components.
- **$\le 3$ vertices**: $K_0$ explicitly flagged, enumeration correct.
- 46/46 contracts, every published quote verbatim, **0 hollow**. 0 of 15 new
  dependencies out of closure.

### F4.5 — the hereditary hypothesis is used but never cited

All three new items assert the **Erdős–Hajnal property**, which
`def-erdos-hajnal-property-and-constant` defines only for **hereditary** classes,
about an $H$-free class. None of them cites
`lem-forbidden-induced-subgraph-classes-are-hereditary` — the lemma that licenses
treating an $H$-free class as hereditary.

That lemma is **published, in this page's closure, and already cited by two
pre-existing items on this very page for exactly this step**, so the fix is
mechanical: add it to the `deps` of the three new items (and the fourth if the
B-page instance also asserts the property), and cite it at the corresponding step
in each proof contract's input map.

**This is the same shape as the defect the batch-6 repair produced**: a Statement
that moved while its dependency set stayed put. It is worth naming because it is
what this re-check pass exists to catch — a repair is not finished when the claim
is right, only when its obligations are discharged too.

### Re-run and report

The three gates plus your dependency-closure audit; report the items whose `deps`
gained the lemma and the contract steps that now cite it.
