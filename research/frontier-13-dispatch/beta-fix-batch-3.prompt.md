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

## Batch 3 fix task — `diagonalisation-and-the-minimal-polynomial` (88) · `inner-product-spaces-and-orthogonality` (94)

Alpha verdict: both pairs **insufficient**. No split on either (ruled by name).
The scaffolds are strong; these are specific cheap fixes, not a re-scaffold.

### F3.1 — YOUR SECOND SOURCE IS A DEAD LINK (must fix, highest priority)

`https://www.homepages.ucl.ac.uk/~ucahmki/2201notes.pdf` — Minhyong Kim, Math 2201
Lecture Notes — **returns HTTP 404.** So does the whole `~ucahmki/` directory. The
orchestrator verified both independently with full browser headers. Group B also
found the Wayback Machine has no snapshot of the PDF at any status, and the last
archived copy of that directory (2026-02-11) is a research page with no teaching
notes.

Measured exposure, computed from your own `coverage.json`:

```
diagonalisation-…  Conrad  25 rows | Kim  22 rows  ** DEAD **
inner-product-…    Kim     25 rows  ** DEAD ** | Treil 42 rows
total 114 harvested rows — 47 (41%) rest on the dead source
15 items are backed ONLY by it
```

Those 15 include the spine of page 88: `thm-primary-decomposition-for-an-endomorphism`,
`lem-coprime-kernel-decomposition`, `def-diagonalisable-endomorphism`,
`cor-minimal-polynomial-divides-characteristic-polynomial`, and
`thm-sylvesters-law-of-inertia` on page 94.

**This is not a formatting problem.** The source-depth rule requires each pair to
be backed by at least two independent treatments, at least one with a harvestable
table of contents. With Kim gone, page 88 has **one** live source and page 94 has
**one**. `level-coverage` checks that a URL is *present*, not that it *resolves*,
so this would have shipped 84 items with a dead citation past a green gate.

Nobody is claiming the notes never existed — a search index still carries the
title and Kim did host UCL course notes there. It does not matter: a reader
cannot follow a 404, so the citation cannot stand either way.

**The remedy, both verified live (HTTP 200) by the orchestrator:**

- **Page 88 → Sergei Treil, *Linear Algebra Done Wrong*, Chapter 4.**
- **Page 94 → Sheldon Axler, *Linear Algebra Done Right* 4e** —
  `https://linear.axler.net/LADR4e.pdf`. **You already read it** as a
  supplementary check, so promote it to a primary enumerated source.

Re-harvest the section/named-result headings over the exact ranges you read in the
replacement, give every heading a disposition, and re-anchor all 47 affected rows.
Where a Kim-backed result is genuinely in the replacement, cite it there; where it
is not, say so in the row rather than silently keeping it.

### F3.2 — two standard results are missing, each with a live source

- **The multiplicity criterion for diagonalisability** (Treil Thm 4.2.8):
  diagonalisable iff every eigenvalue's geometric multiplicity equals its
  algebraic multiplicity. It appears in **no** source's contents in your harvest.
  Both ingredients are already published and in your closure.
- **Least squares and the normal equation** (Treil §5.4) — one section inside the
  chapter you already harvested, on a page that develops orthogonal projections
  and the unique-nearest-point theorem.

### F3.3 — a result inside a declared range with no disposition row

**Conrad Cor 5.5** sits inside your stated Conrad range and has no coverage row.
`coverage-checklist.mjs` structurally cannot see this: it checks that every row
you listed is complete, not that you listed every heading in the range. Re-walk
your Conrad range and add any other heading you skipped.

### F3.4 — D3.1 was approved and applied; use the room it bought

The orchestrator added `field-extensions-and-the-complex-numbers` to page 88's
`requires`. Confirm `thm-minimal-and-characteristic-polynomials-have-the-same-irreducible-factors`
actually uses it, and that the **scalar-extension invariance** step of that proof
is stated and proved rather than assumed — invariance of the minimal polynomial
under field extension reads as obvious and is not. Do not edit `plan-spec.json`.

### F3.5 — proof-contract citations

28 of your 72 contracts have an empty `citations` array. Populate them.

### Confirmed — leave alone

Every locator Alpha could open verified (Conrad, Treil). Your linear-first
conjugate-linear-second convention and its Riesz/adjoint/Gram consequences are
recorded correctly. Your spectral-theorem decline stands — but name its licensing
page in the row.
