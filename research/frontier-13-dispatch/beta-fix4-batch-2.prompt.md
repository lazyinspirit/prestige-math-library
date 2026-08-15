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

## Batch 2 — step-5 repair: 26 B-page ids are listed on your A page files

Your authoring is otherwise accepted (77 items, scoped gates all clean, the late
binomial-congruence corollary complete with its input map, both provenance axes
and the Hackman C.III.1 linkage). Your batch-scoped gates could not see this —
`multi-home` is a cross-page check that only the repo-wide `depcheck` performs,
and it could not run cleanly until every batch had landed.

### The defect

**Both of your A page files list their B page's items in addition to their own.**
`depcheck` reports 26 `multi-home` errors:

```
[multi-home] "ex-dihedral-group-of-order-six-is-s-three" appears on both
             semidirect-products-and-automorphism-groups-examples
         and semidirect-products-and-automorphism-groups
```

**Your manifest is correct** — `research/frontier-13-batch-2.pages.json` homes
every one of these on the B page, `kind: "B"`. The authored page file is what
disagrees. So this is a page-file edit only: **no item file changes, no manifest
change, no `plan-spec.json` change, and no id is renamed or removed.**

### Exactly what to remove

From `library/number-theory/primitive-roots-and-unit-groups-modulo-n.md` — 11 ids:

```
ex-primitive-roots-modulo-seventeen
ex-index-table-modulo-seventeen
ex-primitive-root-modulo-thirteen-by-prime-divisor-tests
ex-lifting-a-primitive-root-through-powers-of-five
ex-unit-group-modulo-two-hundred-forty
ex-carmichael-function-of-five-hundred-sixty-one
ex-carmichael-function-of-one-thousand-seven-hundred-twenty-nine
cex-unit-group-modulo-fifteen-is-not-cyclic
cex-euler-totient-need-not-be-the-unit-group-exponent
ex-square-roots-of-one-modulo-one-hundred-twenty-eight
ex-moduli-below-twenty-with-primitive-roots
```

From `library/abstract-algebra/semidirect-products-and-automorphism-groups.md` —
15 ids:

```
ex-dihedral-group-of-order-six-is-s-three
ex-affine-group-of-the-real-line
ex-symmetric-group-splits-over-the-alternating-group
ex-generalized-dihedral-group-of-the-klein-four-group
ex-affine-group-modulo-eight-as-a-holomorph
ex-automorphism-group-of-the-cyclic-group-of-order-eight
ex-two-automorphisms-of-z-squared
ex-s-four-as-the-holomorph-of-the-klein-four-group
ex-nonabelian-group-of-order-twenty-one
cex-cyclic-prime-square-extension-does-not-split
cex-a-complement-in-a-semidirect-product-need-not-be-normal
cex-a-subgroup-of-an-abelian-group-need-not-be-characteristic
fs-every-short-exact-sequence-of-groups-splits
fs-kernel-and-quotient-determine-a-group-extension
fs-an-abelian-group-has-an-abelian-automorphism-group
```

Each must remain listed on its `-examples` page, exactly once. **Confirm the B
page still lists all of them after your edit** — the failure mode of this repair
is removing an id from both pages and orphaning it.

### Then check the A-page summary and body still make sense

If either A page's prose refers to those examples as being *on this page*, adjust
the wording. The summary is the lead Alpha's binding text — if the correction
requires a summary change, **do not rewrite it yourself: record it and report
it**, and I will route it back to the lead Alpha.

### Re-run and report

```
node tools/depcheck.mjs
node tools/tsx-run.mjs tools/precheck.mts
node tools/rendercheck.mjs
node tools/content-policy.mjs research/frontier-13-batch-2.pages.json
```

Report the `multi-home` count for your two pages (expect 0) and confirm both B
pages still carry all 26. **`depcheck` will still fail overall** — there are 154
pre-existing errors in this worktree from uncommitted work outside this run, plus
batch 6's. Report only your own pages' status; do not touch anything else.
