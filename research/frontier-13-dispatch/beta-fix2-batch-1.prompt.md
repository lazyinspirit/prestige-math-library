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

## Batch 1 second pass — two findings my first fix brief omitted

Your first repair was executed faithfully and is accepted (26 → 29 items on
`symmetric-polynomials`, 73 contracts / 0 empty / 218 citations, gates green).
**The omissions below are the orchestrator's error, not yours.** The first brief
was written from the Alpha's closing summary rather than its full report, and it
renumbered findings while transcribing: what it called "F1.2" was actually Alpha's
**F1.4**, and the real F1.2 and F1.3 — both Grinberg, both on `symmetric-polynomials`
— were dropped. Apply only these two.

Source of record: `research/frontier-13-alpha-a-step3-scaffold-review.md` §§1.3–1.4.

### F1.2 — the Grinberg locator excludes the range two of your items are sourced from

Declared locator: *"Chapter 7, Section 7.1, printed pp. 434–449, in full; stopping
before Section 7.2."* Alpha opened `arxiv.org/pdf/2506.00738v1` and found two
defects:

1. **The locator is self-contradictory.** §7.2 "N-partitions and monomial symmetric
   polynomials" begins on printed page **449**, which "pp. 434–449" includes. The
   range and the "stopping before §7.2" clause cannot both hold.
2. **Two scaffold items are sourced from §7.2, which the locator excludes.** Your
   provenance table credits `def-monomial-symmetric-polynomials` to "DG-7's orbit
   sums indexed by partitions" and `thm-monomial-symmetric-polynomials-form-a-basis`
   to "DG-7's basis result". Those are **Definition 7.2.4** ($m_\lambda$) and
   **Theorem 7.2.7(a)**. Neither has a coverage row, because the declared range
   stops before them.

This is the sharpest kind of citation defect: two items carry `literature-derived`
provenance sourced from a range their own source ledger excludes, and
`coverage-checklist.mjs` cannot see it because it only validates the rows that are
present.

**Fix:** extend the locator to §7.1–§7.2 through Theorem 7.2.7, and add disposition
rows for 7.2.1, 7.2.2, 7.2.3, **7.2.4 → `def-monomial-symmetric-polynomials`**,
7.2.5, 7.2.6, **7.2.7 → `thm-monomial-symmetric-polynomials-form-a-basis`**, 7.2.8
and 7.2.9. §7.3 (Schur polynomials) stays outside the range.

### F1.3 — the Grinberg harvest enumerates 9 rows against 17 numbered results

Grinberg §7.1 contains 7.1.1 through 7.1.17; your coverage file records **9 rows**.
Un-enumerated with no disposition: Convention 7.1.1, Definition 7.1.2, Example
7.1.3, Proposition 7.1.4, Proposition 7.1.5, Theorem 7.1.6, Definition 7.1.7,
Definition 7.1.8, Definition 7.1.9, Example 7.1.10, and Lemma 7.1.17.

Almost nothing is lost mathematically — Thm 7.1.6 is
`prop-symmetric-polynomials-form-a-subring` and Def 7.1.9 is
`def-elementary-symmetric-polynomials`, both already scaffolded. The defect is in
the artifact: the 2026-08-11 rule requires a disposition for **every** named-result
heading in the declared range. **Add the eleven rows**, pointing the two above at
their existing items.

For calibration, Alpha records your Conrad *Symmetric Polynomials* harvest as
complete and faithful — 25 rows over §§1–5, with Theorem 2.12 correctly `inline`
into the FTSP existence proof. That is the standard the Grinberg harvest should
match.

### Re-run and report

The three gates plus your dependency-closure audit, and the new Grinberg row count.
