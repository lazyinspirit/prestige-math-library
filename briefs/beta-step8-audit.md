<!-- RETITLED 2026-07-30. This file remains at its historical path because
     old docs and commits reference it. It is now the Beta batch-audit brief for
     step 6a after workflow renumbering. -->
<!-- TEMPLATE. Copy into a Beta-n-i audit prompt and substitute <n> and <i>. -->

# Independent Step-6 reader brief — batch audit

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on every current
> and future agent.** Use commands already allowed inside the workspace sandbox;
> choose non-escalated forms and never ask the owner to approve a shell command.
> Claude runtimes pass `dangerouslyDisableSandbox: true` on every Bash call.
> Sandboxed Codex runtimes stay within granted workspace permissions. If an
> indispensable operation has no escalation-free form, report a blocker.

> **Model/routing rule (owner, 2026-07-31).** You are **GPT 5.6 Sol via the Codex
> subscription plan at `xhigh` reasoning with a 1,000,000-token context window**.
> Do not run GPT-family work through
> ofox.

You did **not** scaffold or author this batch. The pages have since been authored
by their scaffold Beta. Your job is to audit this foreign batch exhaustively and
fix what you find. Read every proof step and dependency as a skeptical refuter:
seek a concrete fatal defect rather than presuming the author is correct.

## Required coverage

For **every proof item in your batch**:

1. Read every proof step.
2. For every cited fact, open the cited item on disk and verify that it actually
   licenses the claim made in the step.
3. Enforce direct, natural mathematical prose throughout, removing canned
   headings, meta-commentary, and rhetorical filler. Enforce maximum citation
   fidelity: each `[F#]`, `[A#]`, or
   `[L#]` fact must state the cited Definition or Statement itself, exactly when
   practical or as a concise shortening that preserves its domain, quantifiers,
   hypotheses, conclusion, and direction. Replace AI-sounding labels or filler
   such as `Null definition:` and `the key bridge says`.
4. Verify the dependency list: each dependency is necessary, allowed by plan
   order or same-page order, and semantically correct.
5. Check titles and Statements against what the proof actually proves.
6. For every theorem, lemma, and corollary, check the reader-facing `authorship`
   tag against the actual source and edit history. `literature-derived` is only
   a faithful source transcription with cosmetic edits; a material AI rewrite,
   extension, repair, or generated proof requires `ai-altered`. An originally
   AI-generated item remains `ai-generated` after later AI repair. Do not
   backfill legacy items.
7. Re-read every Remark and page summary with proof-step suspicion. Verify every
   A-page summary has exactly two nonempty prose paragraphs under 150 words each:
   mathematical background and actually used declared dependencies first; main
   definitions, theorems, and logical progression second. Verify every B page
   has no authored summary body.

For **examples, counterexamples, false statements and remarks**, verify the
mathematical claim, the witness, and every dependency citation with the same
standard.

## Write authority

You may edit files in your own in-flight batch. You may add or delete definitions,
propositions, theorems, lemmas, corollaries, examples, counterexamples,
false-statements and remarks as needed for mathematical correctness and coherent
batch structure. If you add anything that needs a proof, **you personally author
that proof** in house style and run the gates. Do not rename existing ids on
`main`. Published items outside the in-flight level are read-only; report them.

If a material rewrite changes an item with `verification.judge`, delete that
block. Do not judge; judging is step 7.

If your change materially alters literature-derived mathematical text or proof,
retag it `ai-altered`. Preserve `ai-generated` for an item that was already
AI-generated. If you add a theorem, lemma, or corollary, set its `authorship`
tag before reporting.

Update your batch's `research/level<n>-batch-<i>.proof-contracts.json` whenever
you change a proof, a citation, a proof-step number, or boundary handling. Keep
the contract's exact source excerpts and use lists faithful to the text. If a
finite smoke check fails, report the concrete model to Alpha and do not treat a
passing bounded test as a proof. Report any high-risk item that needs Alpha's
additional proof-refuter read.

## Gates before reporting

Run the relevant file-level checks for everything you changed, including
`tools/reflow.mts`, `tools/precheck.mts` for proof items, and
`tools/prosecheck.mjs --warnings`. The orchestrator runs the authoritative gates
of record after all audits.

## Report to Alpha-n

Return a structured report:

1. Every item/page you changed, with the defect named.
2. Every result you added or deleted, and why; for added results, state that you
   personally authored the proof.
3. Every proof-step defect and every semantic citation defect found.
4. Anything unresolved or outside your write boundary.
5. **Coverage statement:** list the batch items and state whether every proof
   step, dependency citation, and required authorship tag was read. Name any
   exception explicitly.
6. **Fatal-error ledger for step 10:** for every publish-blocking mathematical
   error, record the affected id/file, defect type, location
   (title/Statement, proof/refutation, Facts/dependencies, Remark, or page
   prose/summary), and exact fix disposition (drop/defer, restate, repair/replace
   proof, repair prose, correct dependencies/hypotheses, or add a lemma/result).
   Minor mechanical or 30-second-gap edits are not fatal; do not inflate this
   ledger, but do not omit a fatal defect.

Triage remains: mathematical accuracy, logical validity and correct citation are
non-negotiable; minor citational quirks and 30-second gaps are not worth a repair
cycle.
