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

## Batch 7 fix task — `linear-recurrences-and-rational-generating-functions` (195)

Alpha verdict: **insufficient**. No split (32 items, 34 after these additions,
against a 60 ceiling — ruled by name).

### F7.1 — a Statement that claims more than its proof gives (must fix)

`cor-cayley-hamilton-recurrences-for-matrix-powers` **drops both hypotheses its
source carries.** Waldschmidt slide 18 states it for $A\in GL_d(K)$ — nonzero
determinant — and your own recurrence definition needs $c_d\ne 0$, which is
$\pm\det A$. **A nilpotent $A$ falsifies the unqualified title.**

A title or Statement asserting more than the proof gives is a **fatal** class at
step 6, and the paired judges read Statements and cannot see a false title. Fix it
here, where it costs a scaffold edit.

Second defect in the same item: the cited `thm-cayley-hamilton` is **field-only**,
while this item sits on a page working over a commutative ring. Either restrict
the item to fields, or cite a commutative-ring Cayley–Hamilton and check it exists
before relying on it.

### F7.2 — R7.1 has been applied to the spec; use it

`prop-reciprocity-for-biinfinite-linear-recurrences` states its conclusion in
$K(x)$, which order 195 could not reach. Stanley appends a **Note** saying the
identity is precisely an equality of *rational functions*, not of power series —
so the fix is to reach $K(x)$ honestly, not to restate the conclusion.

The orchestrator added **`the-field-of-fractions-and-localisation` (order 53.2,
published)** to this page's `requires` on Alpha's recommendation. Verified: 0 seams
across all 11 run pairs, closure 42 → 43, `validate-plan` exit 0. Restate the
proposition in $K(x)$ with that page cited. Do not edit `plan-spec.json`.

### F7.3 — a result inside a declared range with no disposition row

**Stanley Ex 4.7.5** sits inside your stated Stanley range and has no coverage
row. `coverage-checklist.mjs` cannot catch this — it verifies the rows you wrote,
not the headings you skipped. Re-walk your Stanley range and add every heading you
passed over.

### F7.4 — proof-contract citations

20 of your 37 contracts have an empty `citations` array. Populate them: the exact
cited source clause and the steps using each fact. Batches 1 and 2 populated all
of theirs at scaffold time and are the standard.

### Confirmed — leave alone

- **D7.1 stands.** The orchestrator verified the four adjugate ids are published,
  homed on `the-determinant-of-a-linear-operator`, and that page is in your
  closure (via the order-86 eigenvalue page). Reuse rather than re-minting is
  correct.
- **D7.2 stands.** `CB-15` resolves to no page id in a 1176-page spec; carrying it
  as a planning note only is right.
- Every locator Alpha could open verified — Stanley, Sagan, Waldschmidt,
  Gallier–Quaintance all check out at their stated pages, and **134 of 134
  published-citation quotes across this group match their item files verbatim.**
- Your Stanley eigenvalue decline stands, but make the row accurate: the spectral
  theorem is `inner-product-spaces-and-orthogonality` at order **94**, *below* 195
  — it is not out of scope, it is simply not in this pair's declared closure. Say
  that.
