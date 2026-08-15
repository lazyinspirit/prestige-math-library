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

## Batch 7 third pass — a better fix supersedes the one I sent you

Your second-pass task told you to add
`lem-monic-polynomials-split-over-an-algebraically-closed-field` to discharge
F7.2's split hypothesis. **Alpha's re-check found a strictly better fix, and it
also closes a defect the repair introduced.** If you built that lemma, read on
before keeping it.

### The problem with the algebraically-closed route

`ex-closed-walks-in-the-complete-graph` — the example added last pass — works
"over $\mathbb C$", which needs $\mathbb C$ to be algebraically closed. That is
the **fundamental theorem of algebra**, order **139**, status `planned`, **not in
order 195's closure**. So the example rests on an undischarged hypothesis, and
your dependency audit cannot see it: an *undeclared* hypothesis is structurally
invisible to a closure check, which only inspects declared `deps`.

### The fix — one edit closes both

**Give `cor-eigenvalue-form-of-the-transfer-matrix-trace` a *split* hypothesis
instead of an *algebraically closed* one.** Its two consumers —
`thm-spectral-mapping-for-polynomials` and `thm-trace-is-sum-of-eigenvalues` —
already take the split factorisation as an explicit hypothesis of their Statements
("suppose $\chi_T(x)=\prod_{i<n}(x-\lambda_i)$"), so a split hypothesis is what
they actually need. Algebraic closure was only ever a way to *get* splitting.

Then:

- The undischarged bridge disappears — you are no longer deriving "splits" from
  "has a root", so **the new lemma is unnecessary**. If you already added it,
  remove it unless it earns its place independently; do not keep it as dead
  weight, and do not leave its coverage row claiming an item that no longer exists.
- **`ex-closed-walks-in-the-complete-graph` then works over $\mathbb Q$**: the
  adjacency matrix of $K_p$ is $J-I$, whose characteristic polynomial splits over
  $\mathbb Q$ outright with eigenvalues $p-1$ and $-1$. No algebraic closure, no
  FTA, no forward reference. State it over $\mathbb Q$.

Note `splitting-fields` is **not** in order 195's closure either — but you do not
need it. Phrase the hypothesis as "$\chi_A$ is a product of linear factors over
$K$", matching what the two consumers already state, rather than as a technical
"splits" predicate needing a definition you cannot cite. (Order 88 took the other
route because the predicate appears in four of its titles; here it appears in one
hypothesis.)

### Everything else from the second-pass task stands

F7.4 (binomial citations), F7.5 (the false decline reason and `out-of-scope` →
`deferred`), F7.7 (drop the B-page summary), F7.8 (`def-finite-words-…` deps).
Keep whatever of those you completed.

Alpha records **F7.1 as the model repair of the run** — Statement, `deps`, contract
citations, input map and the `degenerate` boundary all moved together, both halves
fixed including the ring/field mismatch. That is the standard for this pass too.

### Re-run and report

The three gates plus your closure audit; report the corollary's new hypothesis, the
field the example is now stated over, and whether the lemma was kept or removed.
