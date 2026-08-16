# frontier-14 — Step 6b: Alpha adjudicates the independent readers' findings

Seven independent readers audited content they did not author and returned **~19
fatal findings**. You adjudicate the ones in your batches, from disk.

## Hard rules

- **No permission prompts of ANY kind**, from you or any subagent; no segment of
  an `&&` chain may raise one. If blocked, **record a blocker**.
- You **may** repair items in your own batches — this is the step where Alpha
  applies fixes. Do not touch another group's batches, `research/plan-spec.json`,
  or any published item outside the narrow obvious-published-dependency
  delegation.
- Write `research/frontier-14-alpha-<g>-6b.md`.

## Adjudicate each finding: confirmed / refuted / nonfatal

**A reader finding is not a defect until you confirm it.** This run has already
produced two confident findings that were wrong — a source reported 404 that
returns 200 and 9.4 MB, and a group's own hereditary-dependency finding that it
withdrew after checking the batch instead of its prior sentence. Open the cited
item and the cited dependency and read both.

For each finding record:

- `confirmed_fatal` — a concrete false claim, unlicensed inference, missing
  hypothesis, or inaccurate citation. **Repair it**, then state exactly what
  changed.
- `confirmed_nonfatal` — real but closable by a competent reader in 30 seconds.
  Polish it here if cheap; step 8 will not permit it later.
- `false_positive` — the reader is wrong. Say why, with the evidence.

## The dominant class this run produced

Ten of the nineteen are **an inflated dependency restatement**: the `[F#]`/`[L#]`
text claims more than the cited item's Statement says — an enlarged domain, a
dropped hypothesis, a strengthened conclusion — and a numbered step then leans on
the inflated version.

The repair is **never** to inflate the citation further or add an unused dep.
It is one of: restate the dependency faithfully and add the inline steps that
close the gap; change the proof strategy; or narrow the claim. If the honest
restatement does not license the step and no inline derivation closes it, **the
Statement is wrong and must be narrowed** — say so plainly rather than patching.

## Also yours

- **Titles and Statements against proofs.** Readers flagged false statements and
  false titles. The judges read Statements and cannot see a false title, so
  anything surviving here reaches step 7 intact.
- **`risk_review` dispositions.** `risk-report` routed CRITICAL and HIGH tier
  items in your batches; each needs your recorded disposition before the level
  can close.

## Report

Per finding: reader id, item, verdict, evidence, and what you changed. Close with
a per-page verdict and the count you adjudicated. Re-run the batch-scoped gates
after any repair and give their output.

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

## Group Alpha **a** — step 6b adjudication, batches 1, 2, 3

The independent readers have reported. You adjudicate every finding they raised
for your batches, and you own the repairs.

### Inputs

- `research/frontier-14-reader-<i>.md` for each of your batches
- the items themselves, on disk
- `research/frontier-14-batch-<i>.proof-contracts.json`

### What to do

1. For each reader finding, adjudicate from disk: **confirmed fatal**,
   **confirmed nonfatal**, or **false positive**, with evidence.
2. Apply repairs for confirmed findings. This is step 6 — cosmetic polish and
   30-second-gap tidying belong here, before the text freezes. After step 7 they
   do not.
3. Dispatch read-only proof-refuter subagents for the proof-bearing items in
   your batches, held to the judges' skeptical standard: report only a concrete
   false claim, unlicensed inference, missing hypothesis, or inaccurate
   citation, and inspect the supplied dependency before alleging it is too weak.
   **A refuter never writes content.** You adjudicate every finding.
4. Write a `risk_review` disposition for every high/critical item that
   `risk-report.mjs` routes. Alpha alone may write these.
5. Re-run the harvest check: `coverage-checklist.mjs` is structural; you check
   the harvest is **faithful** — open sources and verify locators by extracting
   text, never by an HTTP status.

### Output

`research/frontier-14-alpha-a-6b.md`: per finding id, the adjudication and
what you changed; the refuter findings and their dispositions; the risk reviews;
and anything you could not check.

**No permission prompts of any kind**, including inside an `&&` chain.
