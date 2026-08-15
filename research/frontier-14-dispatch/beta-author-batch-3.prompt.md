# frontier-14 — Step 5 authoring brief (the scaffold Betas, by batch)

You scaffolded this batch. You now author it. `LEVELS.md` §"Step 5" and
`briefs/authoring.md` are the contract; this brief carries what is specific to
this run.

**Your batch has been spliced and validated** — its receipt is
`research/frontier-14-splice-<i>.json`. Read it first: it carries the lead
Alpha's summary verdicts, which are binding.

## Hard rules

- **No permission prompts of ANY kind** (owner, 2026-07-30, broadened
  2026-08-11), from you or any subagent, and no segment of an `&&` chain may
  raise one. If an indispensable operation truly cannot proceed without new
  authority, **stop and record a blocker** — that is the escape hatch.
- **Write scope:** `items/<id>.md` for every item in your batch, and
  `library/<category>/<page>.md` for your pages. Plus your own four batch
  artifacts. **Do not edit `research/plan-spec.json`** — the lead Alpha owns it
  and the splice is done. Do not touch another batch's files.
- `status: draft`, `origin: session`. **Never** set `verification.audited`.
- **Ids are immutable now.** They are spliced. Author the id you were given.
- **Authors do not judge** (owner, 2026-07-28). You are finished when your gates
  are clean and your report is written. Judging is step 7.

## The page summary — the lead Alpha decided it, you type it

Your splice receipt has a `summary_corrections` map keyed by page id. For each A
page it is either `"ok"` — write your own proposed summary from `.notes.md`
unchanged — or **exact replacement prose**, which you write **verbatim**. Do not
improve it, do not merge it with yours.

**A B page has no authored summary body at all.** Zero bytes after the
frontmatter. Three drafts were written and deleted during repair; do not
reintroduce one.

## What this run has already learned — do not re-earn these

1. **A change is not done when the claim is fixed — only when its obligations
   are.** Four separate items this run had a Statement, title or id changed while
   their `deps`, proof-contract input map, provenance row or coverage row stayed
   put. When you author an item whose statement differs at all from the scaffold,
   move all four with it.
2. **Citations must state a proposition, not a clause's opening words.** Batch 6
   shipped 18 hollow citations across 10 items — `"Let $G$ be a group. Its
   abelianisation is the quotient"`, `"Whenever the expressions are defined,"` —
   each byte-identical to its source, each carrying no proposition, each passing
   every count and verbatim check. You re-anchor every citation at this step, so
   this is yours to fix. If your batch is 6, the exact list is in
   `research/frontier-14-alpha-c-recheck2.md`.
3. **`--strict` passes vacuously on a one-step input map.** A contract that
   declares a single derivation at step 1.1 with every fact attached satisfies
   "covers every step exactly once" while proving nothing. Write a real map:
   numbered steps, each naming the facts it uses.
4. **Half your scaffold's citations were unverifiable when written**, because
   they quote items that did not exist yet and their "quote" is the planned
   title. Those items exist as you author them. Replace every planned-title quote
   with the actual Statement you just wrote.
5. **A dead source is recovered, not replaced.** `url-sweep.mjs --recover` is a
   gate at step 6. If a source dies, recover it from the Wayback index under host
   variants first — querying the hostname in the citation is what makes a
   recoverable document look permanently lost, and re-sourcing cost this run a
   42-minute re-harvest. `ARCHITECTURE.md` §3.11c.

## Authoring discipline

Author every load-bearing citation with the cited Definition or Statement **in
view**. Quote it when practical; otherwise the smallest faithful shortening, with
domain, hypotheses, quantifiers, direction and conclusion preserved. If the real
statement does not license your step, **do not strengthen the restatement** — add
inline proof steps, reconsider the strategy, or reconsider the claim.

Never make an `ai-generated` Statement/Construction a load-bearing dependency.
Do not expand the approved scaffold with a newly invented theorem, proposition,
definition, lemma or remark. Every mathematical-content item carries separate
`provenance.statement` and `provenance.proof` with a reason in your batch notes.

**Adding a dep to silence a checker when the proof does not use it is the
dominant historical defect class here and is forbidden.**

## Gates before you report

```
node tools/tsx-run.mjs tools/precheck.mts        # adopt the printed stratification
node tools/depcheck.mjs
node tools/fwdcheck.mjs
node tools/extcheck.mjs
node tools/rendercheck.mjs
node tools/prosecheck.mjs
node tools/content-policy.mjs research/frontier-14-batch-<i>.pages.json
node tools/coverage-checklist.mjs research/frontier-14-batch-<i>.coverage.json
```

On a `precheck` REPAIR, adopt the printed canonical stratification into the file
and re-run until clean. Do **not** run `tools/gates.mjs` — the orchestrator owns
the gates of record.

Report: items authored, gate output verbatim, provenance rationale summary, and
any blocker.

---

## frontier-14 additions — defects that shipped, and what is different

Read `research/frontier-14-PREVENTIONS.md` in full. Four items bear directly on
your work:

**The inflated `[F#]` restatement** was the largest confirmed-fatal class last
run — ten of twenty-five step-8 rows. Open the cited item and quote its clause
exactly, or give the smallest faithful shortening. No changed domain,
quantifier, hypothesis, direction or conclusion. A clause's opening words are
not a citation. `tools/citation-fidelity.mjs` now reports quotes that do not
appear in the item they cite, and fact lines that widen what they cite.

**Boundary rows are dispositions, not boilerplate.** 2,169 of 3,144 rows last
run were `not_applicable`, one rationale recurring 124 times with only the id
substituted — and two of those false rows each hid a confirmed-fatal defect
(a division by zero at `h = 0`, a counterexample at `n = 0`).
`tools/boundary-audit.mjs` clusters reused rationales and flags a row marked
`not_applicable` on an axis the item's own text exhibits. Write the disposition
you actually determined.

**A false title is invisible to the judges** — they read Statements. A title
asserting more than the proof gives is fatal, and it is caught only by a reader
who checks title and Statement against the proof as a distinct pass.

**Proof-step display orphaning.** A step ending in a standalone display followed
by a citation line gets scrambled by precheck's stratification; it caused a fatal
defect and then reproduced it in the repair. Keep the citation inside the step's
prose.

**Findings live in files, not messages.** Whatever you report, write it to your
named output file. Eleven findings were lost last run because fix briefs were
built from an agent's closing message instead of its report, and renumbering
made the losses look like completions. Never renumber a finding id.


---

# This dispatch

## Batch 3 of run `frontier-14` — step 5, authoring

You scaffolded this batch. Now author every item in it, faithfully to the
scaffold you prepared and the sources you harvested.

Your inputs, all on disk:

- `research/frontier-14-batch-3.pages.json` — the spliced scaffold
- `research/frontier-14-batch-3.notes.md` — your source ledger and rationales
- `research/frontier-14-batch-3.coverage.json` — the harvest
- `research/frontier-14-batch-3.proof-contracts.json` — extend it as you author
- group Alpha's step-3 review and re-check, for the findings you resolved

### Before you write a proof

Prepare the proof-obligation map the contract requires: every substantive
subclaim assigned to an exact dependency or an inline derivation, and a boundary
pass over empty, zero, one, degenerate, endpoint, nonempty-choice and both
iff-directions. **Write the disposition you actually determined** — a templated
`not_applicable` is not a disposition, and two of them each hid a fatal defect
last run.

### Gates you must leave green for your batch

```
node tools/tsx-run.mjs tools/precheck.mts items/<your ids>
node tools/validate-plan.mjs research/plan-spec.json
node tools/content-policy.mjs research/frontier-14-batch-3.pages.json
```

On a precheck REPAIR, adopt the printed canonical stratification and re-run
until clean.

### Report

Append `## Step-5 authoring` to `research/frontier-14-batch-3.notes.md`:
items authored, provenance per component with rationale, any claim you narrowed
or dropped and why, and any blocker. State plainly anything you could not do.

**No permission prompts of any kind**, including inside an `&&` chain.
