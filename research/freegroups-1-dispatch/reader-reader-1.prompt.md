<!-- RETITLED 2026-07-30. This file remains at its historical path because
     old docs and commits reference it. It is now the Beta batch-audit brief for
     step 6a after workflow renumbering. -->
<!-- TEMPLATE. Copy into a Beta-n-i audit prompt and substitute freegroups-1 and 1. -->

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

> **Context continuity (owner, 2026-08-01).** At 60% of your own context length,
> and before a context-heavy operation when practical, append a concise
> checkpoint to your write-authorized batch notes: current substage, owned
> artifact paths, completed checks, open mathematical constraints, and exact
> next action. Never record credentials or copied transcripts. If compaction
> occurs, read it first, verify the action-critical files, and continue
> immediately without waiting for an orchestrator replay.

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
   order or same-page order, and semantically correct. Reject an
   dependency whose `provenance.statement` is `ai-generated`, regardless of
   proof provenance. Literature-derived and AI-altered statements are eligible,
   but for an AI-adapted target source-check the exact claim and conventions
   whenever there is doubt. For any `proved_here: false` dependency,
   verify the source-cited `rem-`, its exact source statement, the recorded
   failed in-library route, and necessity; it belongs in `deps`, never
   `external_refs`.
   In an in-flight fallback, verify `external_dependency.source_url` matches a
   `sources.references` URL and that the exact-statement, local-attempt and
   necessity fields are concrete.
5. Check titles and Statements against what the proof actually proves.
6. For every mathematical-content item, including definitions, propositions,
   theorems, lemmas, corollaries, examples, counterexamples, false statements,
   and mathematical remarks, check `provenance.statement` and `provenance.proof`
   separately against the actual source and edit history. An AI-generated proof
   does not make a source-backed statement ineligible; an AI-generated
   Statement/Construction remains a truth-risk flag. For every such statement
   where there is concrete doubt, search for a relevant counterexample before
   accepting a proof repair. Do not backfill legacy items.
7. Verify generated-claim minimization: reject a newly invented AI-generated
   theorem, proposition, definition, false statement, or remark; source-backed
   material must instead carry the appropriate source-derived provenance. A
   generated corollary must be directly/easily verifiable, and a generated
   example/counterexample must have a checkable witness. Every AI-generated
   Statement/Construction is forbidden as a dependency target: keep a would-be
   decomposition lemma inline or replace it with a source-backed statement.
   Check `generation` frontmatter for the permitted non-load-bearing roles.
8. Re-read every Remark and page summary with proof-step suspicion. Verify every
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
`main`. A published dependency used by the batch is otherwise read-only except
for the owner-delegated obvious-published-dependency-repair protocol in
`CLAUDE.md`: repair only an unambiguous falsehood whose exact replacement is
source-checked with conventions or directly elementary, record the old/new text
and evidence in your batch notes, take the dedicated touch baseline, and resolve
the full `impact-audit` consumer set. Do not use it for a debatable restatement,
convention preference, id rename/removal, or partial repair. Alpha independently
checks and certifies your repair; do not set `audited` or `verified` yourself.

If a material rewrite changes an item with `verification.judge`, delete that
block. Do not judge; judging is step 7.

If your change materially alters a source-backed Statement/Construction or
proof, update the relevant component provenance to `ai-altered`. Preserve
an AI-generated Statement/Construction as such after repair. If you add an
item, set both component-provenance fields before reporting.
For every load-bearing legacy-unclassified dependency you introduce or retain,
record whether the exact statement was established from mathematical knowledge
or source-checked; include the reputable source URL for the latter. Do not
invent a provenance label on an untouched historical item.
A source-backed statement or proof component must retain a supporting URL in
`sources.references`.

Update your batch's `research/levelfreegroups-1-batch-1.proof-contracts.json` whenever
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
   step, dependency citation, and required component-provenance tag was read. Name any
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


---

# This dispatch

# This dispatch — independent Step-6 reader, run `freegroups-1`

You are an **independent reader** for run `freegroups-1`. You did **not** author
any of this content, so every item below is foreign to you. Repo:
`/root/Projects/prestige-math-library`.

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30).** Pass
> `dangerouslyDisableSandbox: true` on every Bash call and never ask the owner to
> approve a shell command. Report a blocker instead of prompting.

## What you are auditing

The **37 new `status: draft` items** listed in
`research/freegroups-1-batch-1.pages.json`. They enrich the already-published
pair `free-groups-and-presentations` (order 60) and its `-examples` companion
(61). The 7 items already on those pages are **published** and are NOT your
scope except as cited dependencies.

Read, in this order: `CLAUDE.md`, `SCHEMA.md`,
`research/freegroups-1-RESUME.md` (decisions **D1–D7**),
`research/freegroups-1-step3-decisions.md` (**my adjudication and its binding
conditions**), then the items.

## Verify every proof step and every in-batch dependency citation

For each item: every numbered step must follow from an explicit Fact, an earlier
step, a stated hypothesis, or elementary algebra. Every `[F#]`/`[A#]`/`[L#]`
fact must reproduce the cited Definition or Statement, or be its smallest
faithful shortening — **open the cited item on disk and check it**, never trust
the restatement. A changed domain, quantifier, hypothesis, direction or
conclusion, or an invented converse, is a defect.

## Where this pair specifically goes wrong — check these hardest

1. **The van der Waerden argument**
   (`lem-formal-letters-act-by-permutations-on-reduced-words` →
   `thm-normal-form-for-the-word-quotient-model`). Is the permutation of reduced
   words genuinely well defined? Is `σ_{a^{-1}} ∘ σ_a = id` actually *verified*
   rather than asserted? Is the conclusion drawn by evaluating at the empty word,
   or does it circularly assume the normal form it is proving?

2. **`def-tietze-transformations`** must *prove or exactly cite* its equivalence
   to the classical four moves — a bare assertion is a **fatal** defect, because
   Tietze completeness is only as true as the move set is rich. Check the
   legality conditions on each inverse move, and check that the renaming
   simulation actually respects them.
   `thm-tietze-transformations-connect-finite-presentations` is **high-risk**;
   its reverse direction is the most proof-sensitive result in the run.

3. **`def-rank-of-a-finite-rank-free-group`** must state its own finite-rank
   restriction and must not hint that the general case follows. Infinite rank is
   unreachable here: `cardinal-arithmetic-and-cofinality` is at order 247 against
   this page's 60.

4. **`thm-normal-form-for-the-word-quotient-model`** must not imply it is new.
   Published `thm-reduced-words-form-the-free-group` already reaches the same
   fact by a different route (its step 2.1, invariance of `red`). It is minted
   only because no citable Statement exists.

5. **No item may rest on computability** (D2). Any reliance on decidability,
   Novikov–Boone, Dehn's decision problems as decision problems, "solvable word
   problem" as a predicate, Knuth–Bendix or Todd–Coxeter is **fatal** — this
   library has built none of it. The three `cex-delete-only-relator-rewriting-*`
   items are claims about a *specific syntactic procedure* and are legitimate;
   verify each witness by direct computation.

6. **Overstated titles and Statements are fatal.** The judges read Statements and
   cannot see a false title. Watch for "the" free group vs "a" free group, rank
   claims true only in finite rank, and presentations asserted as isomorphisms
   where only a surjection was proved.

7. **The published `def-free-group` must not be silently reconvention'd.** It
   characterises a free group abstractly by the universal property. The new
   `W(X)/~` items construct a model and *prove* it satisfies that
   characterisation. A new item redefining "free group" is fatal.

## The 30-second threshold

A logical gap a competent reader closes in 30 seconds is **nonfatal**. You may
polish it — step 6 is where polish is still allowed — but do not raise it as a
fatal defect or start a repair cycle on it.

## Your writes

You may repair in-batch proof-step and citation defects in the draft items you
audit. You must **not**: touch a published item, edit either page file, add any
id to a page's `items:`/`examples:` list, change an id, change reading order,
flip `status`, or write `verification.audited`. Alpha audits your fixes from
disk and is the sole adjudicator.

Run `node tools/tsx-run.mjs tools/precheck.mts items/<file>` on anything you
edit and leave it clean.

## Report

Your final message is the return value. Make it self-contained: every defect
found with item id and step number, its severity, what you repaired, what you
left for Alpha, and anything you could not verify.

## YOUR ASSIGNMENT — reader 1 of 2

Audit these 18 items in full. Reader 2 covers the rest; do not duplicate them.

prop-free-equivalence-is-an-equivalence-and-a-congruence
def-word-quotient-model-of-the-free-group
thm-word-quotient-model-is-a-group
lem-formal-letters-act-by-permutations-on-reduced-words
thm-normal-form-for-the-word-quotient-model
thm-word-quotient-model-is-free
cor-generators-embed-in-the-word-quotient
cor-word-quotient-and-reduced-word-models-are-uniquely-isomorphic
def-free-basis
thm-finite-free-bases-have-the-same-cardinality
def-rank-of-a-finite-rank-free-group
def-relators-relations-and-finite-presentations
prop-normal-closure-is-products-of-conjugates
prop-equality-of-words-in-a-presentation
thm-von-dyck
cor-every-finite-group-is-finitely-presented
ex-free-group-on-the-empty-set
ex-free-group-on-one-generator

**Your highest-priority target is the van der Waerden chain** (items 4 and 5
above) and the universal-property proof that rests on it. This is the spine of
the whole run.
