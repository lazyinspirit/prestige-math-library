# frontier-13 — Step 5 authoring brief (the scaffold Betas, by batch)

You scaffolded this batch. You now author it. `LEVELS.md` §"Step 5" and
`briefs/authoring.md` are the contract; this brief carries what is specific to
this run.

**Your batch has been spliced and validated** — its receipt is
`research/frontier-13-splice-<i>.json`. Read it first: it carries the lead
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
   `research/frontier-13-alpha-c-recheck2.md`.
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
node tools/content-policy.mjs research/frontier-13-batch-<i>.pages.json
node tools/coverage-checklist.mjs research/frontier-13-batch-<i>.coverage.json
```

On a `precheck` REPAIR, adopt the printed canonical stratification into the file
and re-run until clean. Do **not** run `tools/gates.mjs` — the orchestrator owns
the gates of record.

Report: items authored, gate output verbatim, provenance rationale summary, and
any blocker.
