## Step 4 — splice and propagate, PIPELINED. LEAD ALPHA ONLY (group A)

You are the lead Alpha. Steps 4, 6c and 8 are yours alone by rule
(`briefs/alpha.md` §"Group Alpha or lead Alpha"): one prose writer, one global
citation reader, one exact-hash ledger. Groups B and C do not participate here.

**This step is pipelined (orchestrator decision, 2026-08-15).** You splice
**one batch at a time** and emit a receipt after each. The orchestrator releases
that batch's authoring Beta the moment its receipt lands, so step 5 begins for
batch 1 while you are still splicing batch 7.

### Why this is safe here, and the one condition that makes it so

The run has **zero cross-pair seams** — verified over all 11 closures, 699
published dependency occurrences, 0 cross-pair edges, 0 B-leaf dependencies, 0
duplicate ids. No item in any batch cites an item in any other. That is what
makes the splice *separable*: batch 3's items cannot be invalidated by batch 6's
splice.

**If you find that property broken for any batch — a duplicate id, a cross-batch
citation, a `size` violation — STOP the pipeline and record a blocker.** Do not
emit that batch's receipt and do not continue splicing. The whole justification
for releasing authors early is that a later splice cannot reach back.

### Hard rules

- **No permission prompts of ANY kind**, from you or any subagent. If something
  cannot proceed without new authority, **record a blocker**.
- You may edit `research/plan-spec.json` **only** to splice item lists. Every
  `requires` amendment is already applied — D1, D1-amend, D3.1, D5.1, D5.2, R2.1,
  R7.1, and `splitting-fields` onto order 88. Do not add, remove or tidy an edge.
- **Do not write `items/*.md` and do not write `library/<category>/<page>.md`.**
  Both belong to the authoring Betas at step 5. See §2 — this is a change from
  what you may expect, and it is deliberate.
- **Ids are immutable once spliced.** This is the last free moment; two ids have
  already been corrected this run for describing content they no longer had.

### 1. Splice, one batch at a time

For each batch `i` in 1..7, in ascending order:

1. Splice `research/frontier-13-batch-<i>.pages.json`'s item lists into
   `research/plan-spec.json`. Keep the spec's page metadata, take the union of
   `requires`, log any disagreement, hard-fail on an id clash.
2. Run `node tools/validate-plan.mjs research/plan-spec.json`. Require **exit 0**
   with zero `undeclared-prereq`, `b-leaf`, `size` or cycle errors. The
   `redundant-prereq` warnings are pre-existing and expected.
3. Re-run the closure check **in the form that matters** — resolve every
   published dependency to its **home page on disk** and require that page to be
   in the pair's declared closure. The weaker "is this dep published" test misses
   `undeclared-prereq` entirely; it did exactly that earlier in this run and let
   a real defect through to step 3.
4. Emit the receipt: `research/frontier-13-splice-<i>.json`, containing
   `{batch, pages: [...], items_spliced, validate_plan: "exit 0", closure_check:
   {out_of_closure: 0, cross_pair: 0, b_leaf: 0, duplicate_ids: 0},
   summary_corrections: {...}}` — see §2 for the last field.

**Emit the receipt only when that batch is genuinely clean.** It is a release
signal: an authoring Beta starts work on it within seconds.

Expect ~463 items across 11 pairs.

### 2. The page summaries — you decide them, the Betas write them

`LEVELS.md` step 5 gives the authoring Beta `library/<category>/<page>.md`, which
is the file a summary lives in. If you wrote summaries directly you would be the
second writer on that file, which is exactly what the one-prose-writer rule
exists to prevent.

So: **you are the authority, they are the typist.** For each A page, check the
Beta's proposed summary in its `.notes.md` against the contract —

> exactly two nonempty paragraphs, each under 150 words; **paragraph 1 gives the
> mathematical background and names definitions and results from the declared
> dependencies that the development uses**; paragraph 2 names the main
> definitions and theorems developed on the page and explains their logical
> progression. No counts, no self-ranking, no reading-position claims, no survey
> claims about other pages.

— and put your verdict in the batch's splice receipt under
`summary_corrections`, keyed by page id, as either `"ok"` or **the exact
replacement prose**. The Beta writes what you specify, verbatim, and writes
nothing you marked `ok`.

**Group C found several summaries open with the page's own development rather
than dependency background, and that finding was never routed to a Beta — it is
yours now.** It is not uniform. Batch 1's opens "A splitting field presents a
monic polynomial through its roots, and Vieta's formulas connect those roots to
its coefficients" — correct background. Batch 3's opens "This page defines
diagonalisability and derives the minimal polynomial…" — that is the
development. **Check all eleven; rewrite only the ones that fail.**

**B pages get no authored summary body at all.** Three drafts were written and
removed during repair (batch 4's two, batch 7's one). If any survives in a notes
file, mark it for deletion in the receipt.

### 3. Propagate the design-document amendments

Batch 5's notes carry exact find/replace amendments for
`research/plan-algebra-track-expansion.md` §II.4 block MOD-3 — stale order 102 →
106, the `requires` line, the A/B estimate, the enough-injectives clause, the
complex-example sentence. Beta correctly did not apply them. Apply them now.

Then sweep the other track scaffolds for the two drift patterns this run has
already hit twice: a design block naming prerequisites the spec does not declare
(D1), and a design block instructing a Beta to mint machinery that is already
published (D7.1). This is prose-scaffold work and touches no batch file.

### 4. What step 5 must inherit — put this in your step-4 report

1. **A repair is not done when the claim is fixed — only when its obligations
   are.** Four items this run had a Statement, title or id changed while their
   `deps`, contract input map, provenance row or coverage row stayed put.
2. **`--strict`'s "input map covers every step exactly once" passes vacuously**
   when a contract declares one derivation at step 1.1 with every fact attached.
   That is how 18 hollow citations across 10 items in batch 6 quoted a clause's
   opening words and stopped while passing every count and verbatim check. Step 5
   re-anchors every citation, so this is step 5's to fix — the exact list is in
   `research/frontier-13-alpha-c-recheck2.md`.
3. **Half the run's citations are not yet checkable.** Of 594 in group A's
   batches, 285 target published items and all 285 match disk byte-for-byte; the
   other 309 cite items that do not exist yet, so their "quote" is necessarily
   the planned title. After step 5 a contract still quoting a title passes
   `--strict` all the same.
4. **Batch 5's ℤ-module/group-hom identification exists only in Alpha reports.**
   The universal property yields a unique **ℤ-module** hom while the theorem
   concludes a unique **group** hom; they coincide because additivity forces
   ℤ-linearity, and that appears in no batch-5 file. Carry it into the authoring
   task or it is lost.
5. **Two round-1 findings were never routed**: the Chernikov/Zhao section titles,
   and group B's note that `def-gram-matrix-and-gram-determinant` and
   `thm-gram-determinant-detects-linear-independence` are tagged
   `literature-derived` while "Gram matrix"/"Gram determinant" occur **0 times**
   in all 404 pages of Axler and 0 times in Treil Ch. 5. Do not let step 5 write
   Axler as their reference.
6. **Citation liveness is now a gate** at steps 2 and 6 (`url-sweep.mjs
   --recover --fail-on-dead`, `ARCHITECTURE.md` §3.11c). If a source dies between
   now and step 6, **recover it from the archive under host variants before
   re-sourcing anything** — re-sourcing a recoverable source cost this run a
   42-minute re-harvest.

### Report

`research/frontier-13-alpha-a-step4-report.md`: batches spliced with their
receipts, the `validate-plan` and closure output per batch, the summary verdicts,
the design-document amendments applied, and any blocker.
