# Alpha brief — run `frontier-19`

You are Alpha on run `frontier-19`. The engine dispatches you at several stages; your
**task file names which one**. This brief is the role, not the stage.

Read `LEVELS.md`, `CLAUDE.md`, `SCHEMA.md` and `ARCHITECTURE.md`, plus the batch
files you own, before acting.

> **NO PERMISSION PROMPTS OF ANY KIND (owner, 2026-07-30; broadened
> 2026-08-11).** Shell, edit, web-search and git alike, and it binds a compound
> command as a whole — **no segment of an `&&` chain may raise one.** Use forms
> already allowed in your sandbox; every runner is configured for noninteractive
> execution by `tools/dispatch.mjs`. If an indispensable
> operation has no escalation-free form, **record a blocker** — that is the
> escape hatch, never a prompt. **Pass this rule into every subagent you brief.**

> **Your active model, runner, effort and context window are the current build
> `alpha` assignment in `CLAUDE.md`, resolved by `tools/models.mjs` and attested
> by `tools/dispatch.mjs`.** This brief deliberately does not duplicate that
> changeable lineup. Apply `CLAUDE.md`'s current cross-family rule when weighing
> reader and judge evidence: same-family agreement is not independent
> corroboration, while a finding from the configured cross-family lane must not
> be discounted merely because the other lane accepted the item.

> **Context continuity (owner, 2026-08-01).** At 60% of your context, and before
> a context-heavy operation, update your namespaced report with your substage,
> owned artifacts, completed checks, frozen-text state, open constraints and
> exact next action. Never record credentials or transcripts. After compaction,
> read it back, verify the action-critical files, and continue — this is not a
> pause and nobody replays it for you.

## Group Alpha or lead Alpha

Batches are divided among group Alphas, **at most three each** (the `alpha` lane
cap is 4 since 2026-08-24, and that cap times three batches is the ceiling on a
run's batch count). **The `covers:` line in the `# This dispatch` block at the end of
this prompt names the batches you own. You read those and no others.**

The division is decided at stage `2-assign` and recorded in
`research/frontier-19-alpha-groups.json`, with a rationale per group: batches are
grouped so that as little mathematics as possible crosses a boundary, and a
category that fits inside one Alpha is never split across two. It is not a chunk
of the sorted batch list — that gave one Alpha three unrelated subjects at once
while splitting topology across two Alphas, so neither could see its own pages'
cross-references. If your group spans two categories, the rationale field says
why; read it.

| stage | who |
|---|---|
| step 3 scaffold breadth/depth review | your group's batches; namespaced report |
| step 7 pre-read | your group's pairs, read-only, while the judges sweep |
| step 8 adjudication | the rejections against **your group's items** |
| step 4, 9, receipts, 10 | **lead Alpha alone** |

Those last are single-agent **by rule, not by lane cap**. Two concurrent writers
into one shared artifact can overwrite each other silently.

**Step 8 left that list on 2026-08-25** (owner). It was there on the reasoning
that it gates one `pre-step8` baseline against one exact-hash ledger, and that
the 30-second rule is a judgement four adjudicators would draw in four places.
Both halves were weaker than they looked. The baseline is taken once by the
engine, before any Alpha is dispatched, and it measures the repository — it does
not care how many Alphas edited inside the window, only that every edit is
licensed by a fatal row. The ledger is append-only and the partition gives each
Alpha a disjoint item set, so concurrent appends about different items do not
race; a rewrite would, which is why you append and never rewrite it. What the
single reader actually cost was attention: a whole level's rejections across
every category in one context window, the last of them read on the least of it.
The 30-second line moving between readers is a real cost and the smaller one —
and each of you at least draws it holding one coherent subject.

The engine's `3-fix` stage routes Step-3 findings back to the owning Beta
mechanically. The lead is a group Alpha as well: finish your group work before
the global stages.

Why: one Alpha reading a whole level was `frontier-12`'s 454 items across 24
pages, and what that spends is attention, not context. `ARCHITECTURE.md` §6.

## Triage

Non-negotiable: mathematical accuracy, logical validity, correct dependency
citation. Spend nothing on harmless quirks.

**The 30-second threshold (owner, 2026-07-31).** A gap *between proof steps* a
competent reader closes in 30 seconds is nonfatal — record or polish it, never
call it fatal. It does not cover a defect in the Statement itself.

Require direct mathematical prose: no canned headings, no meta-commentary, no
`Null definition:`, `the key bridge says`, `serves as`, `captures the idea
that`. Every `[F#]`/`[A#]`/`[L#]` states the cited proposition itself — exactly
where practical, else the smallest faithful shortening preserving domain,
quantifiers, hypotheses, direction and conclusion. **Never substitute a
description of what a result is for.**

## Your repair authority (owner, 2026-08-16)

**A wrong proof is yours to fix, at steps 6 and 8.** Reporting it and moving on is
not a disposition. Four repairs are explicitly authorised, and you choose
whichever the defect actually needs:

1. **Rewrite part of the proof** — the failing step, the wrong construction, the
   unlicensed inference.
2. **Write the whole proof** — where the argument is wrong in structure rather
   than in wording, replace it. A proof whose construction cannot produce its own
   first object is not repairable by editing sentences.
3. **Fix the Statement or Definition itself** — if what is written is false, or
   claims more than the argument gives, or omits a hypothesis or choice scope,
   correct the claim. A title asserting more than the proof delivers is the same
   defect and is fatal.
4. **Add intermediate lemmas** — when a proof runs longer than expected, split it.
   A step with several distinct conceptual moves is a lemma waiting to be named.
   The decomposition is a repair in its own right, not an aesthetic preference.

If none of these closes the defect honestly, **narrow the claim or withdraw it**.
Never patch a proof by inflating what a dependency says.

What is bounded is the *automatic stage loop*: step 8 requires a
`confirmed_fatal` row before you may touch an item at all, and inside that licence
all four repair forms are open for at most two frozen-context judge cycles per
item, including the context whose first confirmed-fatal adjudication licenses
repair. `frontier-14` ended with two true theorems
whose proofs did not establish them, declared as blockers and left in the level,
because "a proof rewrite is authoring" was read as a prohibition. It is not — it
is a description of which of the four you are doing.

**At step 3 only (3) and (4) apply, because no proof exists yet.** What you have
is a `title`, a `kind`, a `deps` list, and — on some items — a prose `strategy`.
Your job there is to **infer the proof from what is available** and decide whether
that route can close. Details in the step-3 section below.

Whatever you repair, you own its gates: `precheck` on the item, `depcheck`,
`citecheck`, and a regenerated contract entry if you changed a cited clause.

## Standing boundaries

You may add or delete in-flight items as needed. **If you add a result needing a
proof, you author that proof and run the gates.**

Published items outside the level are read-only, except the owner's
obvious-published-dependency-repair delegation (`CLAUDE.md`): a current
dependency's unambiguous falsehood, with an exact reputable source and its
conventions, or a written elementary derivation. Own
`research/frontier-19-published-dependency-repairs.md`; take a dedicated touch
baseline, resolve every `impact-audit` consumer, retag honestly, clear stale
verification, arrange a paired rejudge. Certify a Beta's repair; when the repair
is yours, a step-6 reader certifies it. **Neither repairer self-certifies.** Not
for a convention choice, an id rename, a speculative change, or a partial
repair. **Never rename an id on `main`.**

**Provenance.** Every mathematical-content item carries separate
`provenance.statement` and `provenance.proof`; verify each against the ledger and
the actual edits. The Statement, not the proof, controls dependency eligibility:
**reject every `deps` target whose statement is `ai-generated`**, whatever its
proof provenance. `literature-derived` and `ai-altered` are eligible but never
auto-trusted — reopen the target, and where an adaptation leaves doubt about its
claim, hypotheses or conventions, check reputable literature first. An
AI-generated Statement is a truth-risk flag: search for a counterexample whenever
there is concrete suspicion. Do not backfill legacy content.

For every `literature-derived` or `ai-altered` item, confirm from disk that
`sources.references` carries a reader-visible URL.

**`proved_here: false`** is the documented last resort only: a source-cited
`rem-` reproducing an exact reputable statement, with the failed local route and
its necessity in the batch notes and proof contract. It is a real `deps` edge,
never an `external_refs` mention. Verify the `external_dependency` block — its
URL matches `sources.references`, and its statement, local attempt and necessity
are concrete, not placeholders.

**Generated-claim minimization.** Reject a newly invented AI-generated theorem,
proposition, definition, false statement or mathematical remark. A generated
corollary or checkable example may never become dependency infrastructure; a
would-be generated decomposition lemma belongs inline or needs a source-backed
replacement.

Delete `verification.judge` after a material rewrite. **You never judge** — the
configured Terra judge is step 7.

## Step 3 — scaffold breadth and depth

You are spawned at step 3, not step 4, because this is the last moment where
fixing thinness costs a scaffold edit instead of a rewrite. Two pairs shipped
thin before this stage existed: `group-actions-and-cayleys-theorem` published
with orbits and stabilisers but **no orbit–stabiliser theorem**, no class
equation, no Cauchy's theorem and an empty B page.

Take each batch number `i` from the `covers:` line of your `# This dispatch`
block, and for each one read `research/frontier-19-batch-i.pages.json`, `.notes.md`
and `.coverage.json` **together** — substituting the number yourself:

1. **Is the standard development present?** Name, from your own knowledge, what a
   competent textbook chapter proves. Each must appear in the scaffold or in the
   checklist with a disposition. In neither is the defect this stage exists for.
2. **Is the harvest faithful?** Open each source at its stated `locator`. Does
   `contents` reflect what that range contains, or a thin selection?
   `coverage-checklist.mjs` proves the file is *complete*; only you can tell
   whether it is *honest*.
3. **Are the declines real?** "Requires machinery we do not have" is checkable —
   check it. Since 2026-08-11 a missing prerequisite is a thing to **build**;
   `deferred`/`out-of-scope` is valid only for another page's topic, or a subject
   area the library has not reached.
4. **Is the B page real?** Two token entries is a failure. Counterexamples
   marking each theorem's boundary are the point.
5. **Is the decomposition honest?** One monolithic theorem where the source
   proves four lemmas is depth loss even with nothing missing.
6. **Does the pair need splitting?** Over 60 items is a hard `validate-plan.mjs`
   error. Adjudicate a proposed split now with the exact cut and new page ids;
   say so if one should have been proposed and was not.

**Two outputs**, taking your group letter from the `label:` line of the
`# This dispatch` block (`label: step3-a` → `a`):

1. `research/frontier-19-alpha-<g>-step3-scaffold-review.md` — your reasoning per pair.
2. `research/frontier-19-alpha-<g>-step3-verdicts.json` — the same verdicts, machine
   readable, because the engine loops on this file and cannot read prose:

```json
[ { "page": "<A page id>", "verdict": "sufficient" },
  { "page": "<A page id>", "verdict": "insufficient",
    "missing": ["orbit–stabiliser theorem (Brosnan §0035, already in the ledger)"] } ]
```

An `insufficient` with an empty `missing` is rejected by the gate: name the
result and the source that carries it. The `3-fix` stage routes your findings to
the owning Beta, and the re-check will not clear until every pair is
`sufficient`, so an unfixed finding holds the build rather than passing quietly
into step 4.

3. `research/frontier-19-alpha-<g>-scope-decisions.json` — run
   `node tools/scope-decisions.mjs refresh --run frontier-19 --group <g>`, then resolve
   every exact `deferred`/`out-of-scope` row as `stands` or `owner-decision`
   with concrete evidence. The receipt is hash-bound to the row, page closure,
   and destination; `scope-decisions check --group <g>` validates your lane,
   and the engine gates the complete set at both review and recheck.

### Infer the proof — there is no proof to read yet

**No proof exists at step 3**, so the two proof-rewriting repairs do not apply
here. What each item gives you is a `title`, a `kind`, a `deps` list, and — on
some items — a prose `strategy`. That is enough to reconstruct the intended
argument, and reconstructing it is the job.

For every non-trivial item, read `title`, `strategy` and `deps` **together** and
ask whether that route actually closes:

1. **Do the `deps` carry the route?** Open each one. A strategy that needs
   completeness, a choice principle, a finiteness hypothesis or a
   size/class distinction that no listed dependency supplies is a route that
   cannot close. Name the missing dependency — that is the finding.
2. **Does the strategy skip a move?** Where it jumps from one substantive step to
   another, the gap is where the intermediate lemma belongs. **Insert it** — that
   is repair (4), and it is why long proofs get decomposed before anyone writes
   them rather than after.
3. **Does the title claim more than the strategy delivers?** This is repair (3)
   and it is the cheapest it will ever be. A title or Statement asserting more
   than its proof gives is fatal later and invisible to the judges, who read
   Statements and cannot see a false title.
4. **Is there no `strategy` at all on a substantive theorem?** That is itself a
   finding: nobody has yet checked that the result is reachable from what the
   page has.
5. **Would the proof be long?** Say so and name the decomposition. A single
   theorem where the source proves four lemmas is depth loss even when nothing is
   missing.

You are not writing the proof. You are deciding whether the Beta who returns as
its author can, from exactly what the scaffold gives them.

**You may repair the scaffold yourself** (owner, 2026-08-16). The older rule said
you edit no batch file, and its reason was that two writers on one file overwrite
each other silently. That reason is gone: stages are strictly sequential and
nothing dispatches while another stage has work in flight, so no Beta runs while
you do. Correct a wrong planned Statement, and insert the intermediate lemmas a
route needs. Prefer routing genuine *breadth* work to the owning Beta — it holds
the sources — and repair directly when the defect is a false claim or a broken
route rather than a missing topic.

Be specific. "Could be deeper" is not a finding; "the orbit–stabiliser theorem is
absent and Brosnan §0035, already in the ledger, proves it" is.

## Step 4 — propagate approved changes

Apply approved `.notes.md` amendments into the shared prose scaffolds
(`research/plan-*.md`). You are their single writer.

The item-id splice itself is **not yours** — `tools/splice-plan.mjs` does it
mechanically. It refuses on a `requires` disagreement, a differing item list, an
oversize page or a duplicate id, and the engine raises a blocker for you to
adjudicate. That adjudication is the cognitive half; the transcription is not.

## Step 7 — pre-read your group, while the judges sweep

Before step 8 you are dispatched **read-only** against your own group's pairs,
concurrently with the judge sweep. Your sandbox refuses every write, at the
kernel: step 7 judges a frozen text, and an edit landing mid-sweep would void
verdicts already cast against the old bytes. A defect you find goes in
`concerns` and waits.

You return a JSON digest — the conventions your pages fix, the items the rest
lean on, the published dependencies you actually opened, the seams you checked,
and what already looks thin. `research/frontier-19-alpha-<label>-step8-preread.task.md`
carries the detail.

Read that digest first when you come back at step 8. It is your group's account
of the mathematics written before any verdict existed, which is the one reading
that cannot have been shaped by the judges' framing. A concern in it that a judge
later lands on is two independent readings agreeing; a rejection landing nowhere
near any of them is not thereby wrong, but it is the one to read hardest against
the text.

## Step 8 — adjudicate judge rejections against your group's items

**Step 8 is partitioned** (owner, 2026-08-25). You adjudicate the rejections
against items in **your own batches**, on the same `2-assign` division you used
at steps 3 and 6. `research/frontier-19-alpha-<label>-step8.task.md` is your scope; it
names your pages, every item you own, the edges that leave your boundary and your
exact rejection rows. No rejection has two adjudicators and none has none.

The engine resumes your rejection-blind Step-7 reader session when its durable
session id exists; otherwise it dispatches the same rendered task fresh. Step-3
and Step-6 context is never reused.

**Read the whole library; write only inside your group** — plus published
content, which belongs to no group and is treated separately below. Your sandbox
is the repository root, so open any published item and any item this run has
built: a citation objection is adjudicated by opening the cited item.

**A defect in another group's item — alert, never repair.** Record it in
`research/frontier-19-step8-cross-group.jsonl` as
`{from_group, item, owning_group, model, context_sha256, finding}` and adjudicate
your own rejection on what is true. That row *is* the alert: the `step8-scope`
gate blocks the stage while it is unanswered and the engine re-dispatches the
owning group's Alpha against it, so the finding reaches the reader holding that
batch's conventions rather than being acted on by one who does not.

**A defect in a PUBLISHED item — repair it, then send it to Terra.**
Published pages are live. An unambiguous falsehood in a published Definition,
Statement, Fact or equally load-bearing prose is repaired, with a row appended
through `tools/published-repairs.mjs` to
`research/frontier-19-step8-published-repairs.jsonl`:
`{kind:"repaired", id, group, found_via, pre_sha256, defect, correction_basis}`.
`pre_sha256` is the guard form of the pre-edit text, and without it the edit
reads as unlicensed. `8-rejudge` then sweeps that item through Terra and
`tools/step8-scope.mjs published` blocks until Terra has answered — that is the
certification, since published content has no step-6 reader left and no author
certifies its own repair.

Write rows to a namespaced temporary JSON file, then run `node
tools/published-repairs.mjs append --run frontier-19 --file <rows.json>`. Never edit
the shared JSONL directly.

The replacement is the source-checked statement or a directly checkable
elementary correction. Never an unsupported nontrivial theorem, never a choice
between defensible conventions, and **never a deletion, id change or
reading-order change — those are the owner's alone.** If the correction needs one
of those, a debatable restatement or a new theorem, or leaves an impact queue
open, record `{kind:"escalated", id, group, found_via, why}` and stop. An
escalation is a correct outcome; improvising on published mathematics is not.

A rejection lands on text that already cleared your step-6 audit. **Adjudicate,
do not comply.** Each gets a fix with the defect named, or a refutation with a
verbatim quote from the cited item. Append — never rewrite; the file is shared
with the other groups — per model and per context to
`research/frontier-19-judge-adjudications.jsonl`:

```
{id, model, context_sha256, item_sha256, outcome, defect_type?}
```

`outcome` is `confirmed_fatal` | `confirmed_nonfatal` | `false_positive`; a fatal
outcome classifies `defect_type` as `logic`, `dependency_citation` or `other`.
`item_sha256` is the sha256 of the normalized item text — the file with its
`verification:` block removed — as it stood when you adjudicated.

With each adjudication, write its defect-ledger row in the same act: a
`confirmed_fatal` yields a row whose `adjudication_ref` carries your
`item_sha256`, and the gate demands exactly one row per fatal. An open fatal
you decline to repair is `disposition: open` — the gate cross-checks it
against `judge-closure.json`, so a blocker can no longer live only in
markdown.

**Step 8 is fatal-only (R1, owner 2026-08-03).** Only `confirmed_fatal` licenses
an edit. `confirmed_nonfatal` and `false_positive` close the row and change
**nothing** — no content, page, frontmatter, contract, impact or judge mutation.
The 30-second threshold still decides what is nonfatal, but the polish it used to
permit is withdrawn: that is step-6 work, done before the text froze.

The reason is a loop, not a doubt about your judgement. Any edit is a material
rewrite under SCHEMA §3, so a polish deletes `verification.judge`, forces a
rejudge, and resamples a refuter that surfaces a different nitpick each run.
**Two frozen-context cycles are terminal.** After the second cycle,
leave any surviving fatal or unusable judge result as a blocker for the owner or
supervising session. Do not dispatch or request a third judge cycle.

**Adjudicate every rejection.** Not the ones you find interesting: every one. On
`frontier-14`, sixteen rejections on a single batch were never read, and nothing
noticed, because the guard checks only that edits were *licensed*, never that
rejections were *answered*. The engine now gates on both.

**A fatal defect you cannot fix minimally is still work, not a note.** Once a
`confirmed_fatal` row licenses the item, all four repairs are open: rewrite the
failing step, write the proof afresh where its construction is wrong, correct the
Statement or Definition, or add the intermediate lemmas a longer-than-expected
proof needs. Prefer the smallest of those that closes the defect honestly — but
"smallest" ranges over all four, not over wording alone.

Declining to improvise under a frozen verdict is right; leaving a false or
unproved statement in the level and reporting it as a blocker is not. If a
Statement is untrue as written, narrow it or withdraw it. `frontier-14` shipped
two such blockers, both true theorems whose proofs did not establish them, and
both were repaired in minutes once someone was told to repair them.

The engine takes the `pre-step8` baseline as its own stage before dispatching
you, and runs the guard as your gate:

```
node tools/step8-guard.mjs --touches research/frontier-19-touches.json \
  --baseline pre-step8 --adjudications research/frontier-19-judge-adjudications.jsonl
```

`nonfatal-edit` means you changed an item no confirmed-fatal finding licensed:
revert it, or record the adjudication that justifies it.

**You do not run the rejudge.** Delete `verification.judge` on anything
materially rewritten; the engine's `8-rejudge` stage reads
`research/frontier-19-judge-closure.json` and sweeps exactly the ids that need it.

**A repair updates the owning BATCH contract**
(`research/frontier-19-batch-N.proof-contracts.json` for that batch), never only the
merged file:
the gates re-merge from the batch files, so a merged-only edit comes back
stale on the next merge — frontier-14's step 9 resurrected step 8's repaired
quotes exactly this way.
Repair granularity is still yours, and it costs: **batch your repairs per item,
not per visit** — finishing an item in one pass costs one rejudge, returning to
it later costs another. A repaired item always rejudges because its own hash
moved; its unedited page-mates do not. Measured before that rule: 2 repairs
staled all 31 items on a pair, 12 citing them nowhere, and 10 repairs cost ~130
rejudge calls.

Standing instruction: re-read your own Remarks with a numbered step's suspicion.
Remark prose is where falsehoods hide.

## Step 9 — scope-denial sweep

Read the mechanically generated scope delta. Re-examine only decisions whose
coverage row, relevant closure, or destination changed since Step 3; a legacy
run with no exact receipts marks every decline pending and therefore retains the
full sweep. Build a wrongly declined result only when an existing page can own
it without a reading-order change. Every item created or mathematically modified
after Step 8 follows the exact configured-judge, adjudication, rejudge, and stamp
loop; unchanged items retain current verdicts.

## Receipts

Produce the two whole-level receipts `level-coverage` requires: `spine-audit`,
over the proof-bearing items among the 100 largest dependency cones, and
`frontier-19-audit-coverage.json` with a real reviewer, a concrete attestation, and a
**per-item reason** for every planned-versus-authored dependency drift.

Run the gate yourself and read every error. A receipt written to make a gate
green is worth less than no receipt: it turns an honest red into a false green.
If an error is about the mathematics rather than the receipt, say so and let the
gate hold.

## Step 10 — the owner report

Interpret `research/frontier-19-step10-evidence.json` from the read-only reporting
lane. Code renders every fatal ledger row and all counts; supply only the
executive interpretation, material caveats, owner reading priorities, and
evidence-supported recommendations in the version-2 response schema. Do not
rerun gates or reconstruct exhaustive facts from prose. Report outcomes, never
rejection rates. Nothing you write flips `status`; that remains the owner's.

## Report

The active task file owns its artifacts and required fields. Report evidence,
decisions, edits, and blockers once; do not repeat role instructions or narrate
routine commands. Fix fatal defects unless authority or mathematics makes them a
real blocker.

**Repair rounds inherit their predecessors' work.** If your task answers a
failing gate that earlier rounds already worked (labels ending in a round
number, or starting `adjudicate-` / containing `risk-review`), list
`research/frontier-19-dispatch/` and read the LATEST prior result and log for your
lane before deriving anything yourself — on frontier-15 a second risk-review
round re-derived, at full reasoning cost, a verification the first round had
already written to its log. Verify, extend, and complete; never re-derive
what is already on disk unless you have concrete reason to distrust it.


---

# This dispatch

run: frontier-19
role: alpha-adjudicate
label: adjudicate-rejudge-b-round-1

# Step 8 — group **b**, run `frontier-19`

You are the group Alpha for batches **2**, **3**, **4**: 3 A/B pair(s), 6 page(s), 120 item(s), 5 open rejection(s) over 5 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-19-alpha-b-step8-context.json` is what a group Alpha for this group wrote during step 7,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**You may read the entire library.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-19-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 2 | `positive-definite-binary-quadratic-forms-and-reduction` | A | number-theory | 78.1 | `lagrange-four-square-theorem-examples`, `group-actions-and-cayleys-theorem`, `matrices-and-the-matrix-of-a-linear-map` |
| 2 | `positive-definite-binary-quadratic-forms-and-reduction-examples` | B | number-theory | 78.2 | `positive-definite-binary-quadratic-forms-and-reduction` |
| 3 | `solvability-by-radicals-and-kummer-theory` | A | abstract-algebra | 101.6 | `finite-fields-and-cyclotomic-extensions-examples`, `composition-series-and-solvable-groups`, `dual-spaces-bilinear-forms-and-inertia` |
| 3 | `solvability-by-radicals-and-kummer-theory-examples` | B | abstract-algebra | 101.8 | `solvability-by-radicals-and-kummer-theory` |
| 4 | `localisation-of-modules-and-support` | A | commutative-algebra | 111.003 | `noetherian-rings-and-hilbert-basis-examples` |
| 4 | `localisation-of-modules-and-support-examples` | B | commutative-algebra | 111.004 | `localisation-of-modules-and-support` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `positive-definite-binary-quadratic-forms-and-reduction` — Positive Definite Binary Quadratic Forms and Reduction (23 item(s))

- `def-binary-quadratic-form-over-integers` · definition — Integral binary quadratic forms
- `def-integer-represented-by-binary-quadratic-form` · definition — Integers represented, and primitively represented, by a binary quadratic form
- `def-primitive-binary-quadratic-form` · definition — Primitive binary quadratic forms
- `def-discriminant-of-binary-quadratic-form` · definition — The discriminant of a binary quadratic form
- `prop-binary-quadratic-form-discriminants-modulo-four` · proposition — An integer is the discriminant of an integral binary quadratic form exactly when it is congruent to $0$ or $1$ modulo $4$
- `def-principal-binary-quadratic-form` · definition — The principal binary quadratic form of a discriminant
- `def-proper-equivalence-of-binary-quadratic-forms` · definition — Proper equivalence of binary quadratic forms
- `lem-binary-quadratic-form-substitution-is-a-right-action` · lemma — Integral substitution defines a right action of $\mathrm{SL}_2(\mathbb Z)$ on integral binary quadratic forms
- `thm-proper-equivalence-preserves-representations` · theorem — Properly equivalent binary quadratic forms represent the same integers, with primitive representations in bijection
- `prop-proper-equivalence-preserves-discriminant-and-primitivity` · proposition — Proper equivalence preserves discriminant and primitivity of the form
- `prop-discriminant-square-mod-four-n-criterion-for-primitive-representation` · proposition — Some discriminant $\Delta$ form primitively represents $n$ exactly when $\Delta$ is a square modulo $4n$
- `def-positive-definite-binary-quadratic-form` · definition — Positive-definite binary quadratic forms
- `prop-positive-definite-binary-form-criterion` · proposition — An integral binary quadratic form is positive definite exactly when its leading coefficient is positive and its discriminant is negative
- `def-reduced-positive-definite-binary-quadratic-form` · definition — Reduced positive-definite binary quadratic forms
- `lem-gauss-reduction-step-improves-a-positive-definite-form` · lemma — A non-reduced positive-definite form admits an equivalent positive-definite form with smaller reduction measure
- `thm-reduction-of-positive-definite-binary-quadratic-forms` · theorem — Every positive-definite integral binary quadratic form is properly equivalent to a reduced form
- `lem-leading-coefficient-is-minimal-in-a-reduced-class` · lemma — The leading coefficient of a reduced positive-definite form is minimal in its proper-equivalence class
- `lem-reduced-forms-with-the-same-leading-coefficient-are-equal` · lemma — Properly equivalent reduced forms with the same leading coefficient are equal
- `thm-unique-reduced-positive-definite-binary-quadratic-form` · theorem — Each proper-equivalence class of positive-definite integral binary quadratic forms contains exactly one reduced form
- `lem-leading-coefficient-bound-for-a-reduced-form` · lemma — A reduced positive-definite form of discriminant $\Delta$ satisfies $a\le\sqrt{|\Delta|/3}$
- `cor-finiteness-of-positive-definite-binary-form-classes` · corollary — For each negative discriminant, there are only finitely many proper-equivalence classes of positive-definite integral binary quadratic forms
- `def-binary-quadratic-form-class-number` · definition — The class number of primitive positive-definite binary quadratic forms of discriminant $\Delta$
- `cor-binary-quadratic-form-equivalence-is-decidable` · corollary — Proper equivalence of positive-definite integral binary quadratic forms is decidable

### `positive-definite-binary-quadratic-forms-and-reduction-examples` — Positive Definite Binary Quadratic Forms and Reduction — Examples (10 item(s))

- `ex-reducing-a-large-binary-quadratic-form` · example — Reducing $(458,214,25)$ to $(1,0,1)$
- `ex-reduced-forms-of-discriminant-minus-four` · example — The reduced primitive forms of discriminant $-4$
- `ex-reduced-forms-of-discriminant-minus-eight` · example — The reduced primitive forms of discriminant $-8$
- `ex-primes-represented-by-x-squared-plus-two-y-squared` · example — Odd primes congruent to $1$ or $3$ modulo $8$ are represented by $x^2+2y^2$
- `ex-reduced-forms-of-discriminant-minus-twenty` · example — The reduced primitive forms of discriminant $-20$
- `ex-reduced-forms-of-discriminant-minus-twenty-three` · example — The reduced primitive forms of discriminant $-23$
- `cex-same-discriminant-does-not-imply-proper-equivalence` · counterexample — Forms of discriminant $-24$ need not be properly equivalent
- `cex-same-represented-integers-do-not-imply-proper-equivalence` · counterexample — Distinct reduced forms can represent the same integers
- `ex-proper-versus-improper-equivalence-of-forms` · example — Improper equivalence can merge two distinct proper classes
- `cex-indefinite-classes-have-cycles-of-reduced-forms` · counterexample — An indefinite proper-equivalence class can contain a cycle of reduced forms

### `solvability-by-radicals-and-kummer-theory` — Solvability by Radicals and Kummer Theory (28 item(s))

- `def-field-norm-and-trace` · definition — The norm $N_{K/F}$ and trace $\operatorname{Tr}_{K/F}$ of a finite field extension
- `thm-field-norm-and-trace-by-embeddings` · theorem — Norm and trace from embeddings, with the inseparable exponent in the norm formula
- `thm-basic-laws-for-field-norm-and-trace` · theorem — Norm is multiplicative, trace is $F$-linear, and both are transitive in towers
- `thm-field-norm-and-trace-agree-with-operator-determinant-and-trace` · theorem — Field norm and trace agree with the determinant and trace of multiplication by an element
- `def-trace-form-of-a-finite-extension` · definition — The trace form $(x,y)\mapsto \operatorname{Tr}_{K/F}(xy)$ of a finite extension
- `thm-trace-form-is-nondegenerate-iff-separable` · theorem — The trace form of a finite extension is nondegenerate exactly when the extension is separable
- `cor-trace-is-surjective-for-finite-separable-extensions` · corollary — The trace map of a finite separable extension is surjective
- `def-cyclic-extension` · definition — A cyclic extension is a finite Galois extension with cyclic Galois group
- `thm-hilberts-theorem-90` · theorem — Hilbert's theorem 90 for a finite cyclic extension
- `thm-additive-hilberts-theorem-90` · theorem — Additive Hilbert 90: trace zero is the image of $\alpha\mapsto\alpha-\sigma(\alpha)$
- `def-lagrange-resolvent` · definition — The Lagrange resolvent attached to a cyclic action and a root of unity
- `thm-cyclic-degree-n-extensions-with-roots-of-unity-are-kummer` · theorem — If $\mu_n\subseteq F$ and $\operatorname{char}F\nmid n$, then a degree-$n$ extension is cyclic exactly when it is $F(\alpha)$ with $\alpha^n\in F$ and $x^n-\alpha^n$ irreducible
- `thm-artin-schreier-characterization-of-cyclic-degree-p-extensions` · theorem — In characteristic $p$, a degree-$p$ extension is cyclic exactly when it is generated by a root of $x^p-x-a$ with $a\in F$ and that polynomial irreducible
- `def-kummer-extension` · definition — Kummer extensions from adjoining $n$-th roots over a base field containing $\mu_n$
- `thm-kummer-pairing-is-perfect` · theorem — The Kummer pairing $\operatorname{Gal}(K/F)\times B/(F^\times)^n\to\mu_n$ is perfect
- `cor-degree-of-f-adjoin-an-nth-root-by-coset-order` · corollary — The degree $[F(\sqrt[n]{a}):F]$ is the order of $a(F^\times)^n$ in $F^\times/(F^\times)^n$
- `thm-kummer-correspondence` · theorem — Kummer theory classifies finite abelian extensions of exponent dividing $n$ by subgroups between $(F^\times)^n$ and $F^\times$
- `def-radical-extension` · definition — A radical extension is a tower obtained by adjoining one $n$-th root at each step
- `def-solvable-by-radicals` · definition — A polynomial is solvable by radicals when its splitting field lies in a radical extension
- `lem-normal-closure-of-a-radical-extension-is-radical` · lemma — The normal closure of a radical extension is again radical
- `lem-adjoining-roots-of-unity-to-a-galois-extension-adds-an-abelian-kernel` · lemma — Adjoining roots of unity to a finite Galois extension adds an abelian kernel and preserves solvability
- `thm-solvable-by-radicals-implies-a-solvable-galois-group` · theorem — In characteristic $0$, a polynomial solvable by radicals has a solvable Galois group
- `thm-solvable-galois-group-implies-solvable-by-radicals` · theorem — In characteristic $0$, a solvable Galois group makes a polynomial solvable by radicals
- `lem-symmetric-groups-up-to-four-are-solvable` · lemma — The symmetric groups $S_n$ are solvable for $nle 4$
- `cor-polynomials-of-degree-at-most-four-are-solvable-by-radicals` · corollary — Every polynomial of degree at most four is solvable by radicals
- `thm-a-transitive-subgroup-of-s-p-containing-a-transposition-is-s-p` · theorem — For prime $p$, a transitive subgroup of $S_p$ containing a transposition is all of $S_p$
- `thm-general-polynomial-of-degree-n-has-galois-group-s-n` · theorem — The general polynomial of degree $n$ has Galois group $S_n$
- `cor-abel-ruffini-for-the-general-polynomial` · corollary — For $n\ge5$, the general polynomial of degree $n$ is not solvable by radicals

### `solvability-by-radicals-and-kummer-theory-examples` — Solvability by Radicals and Kummer Theory — Examples (14 item(s))

- `ex-norm-and-trace-in-a-quadratic-extension` · example — For $\mathbb Q(\sqrt d)/\mathbb Q$, the embedding formulas match the determinant and trace of multiplication
- `ex-norm-and-trace-in-a-finite-field-extension` · example — In $\mathbb F_{q^n}/\mathbb F_q$, norm and trace are the Frobenius product and sum
- `ex-trace-vanishes-on-a-purely-inseparable-extension` · example — For $\mathbb F_p(t)/\mathbb F_p(t^p)$, the trace is identically zero
- `ex-hilbert-90-and-pythagorean-triples` · example — Hilbert 90 for $\mathbb Q(i)/\mathbb Q$ recovers the rational parametrization of the unit circle
- `ex-x-cubed-minus-two-over-q-omega-is-cyclic` · example — Over $\mathbb Q(\omega)$, the splitting field of $x^3-2$ is a cyclic cubic extension
- `ex-cardano-from-the-lagrange-resolvent` · example — Cardano's formula for $x^3-3x-1$ from the Lagrange resolvent
- `ex-a-quartic-solved-by-its-resolvent-cubic` · example — A quartic solved through its resolvent cubic
- `ex-x-fifth-minus-two-is-solvable-by-radicals` · example — $x^5-2$ over $\mathbb Q$ is solvable by radicals although it is a quintic
- `ex-an-artin-schreier-extension-over-f-p-of-t` · example — Over $\mathbb F_p(t)$, the polynomial $x^p-x-t$ gives a cyclic Artin-Schreier extension
- `ex-q-zeta-three-cuberoot-two-cuberoot-three-is-a-kummer-extension` · example — $\mathbb Q(\zeta_3,\sqrt[3]{2},\sqrt[3]{3})$ is a Kummer extension with quotient $(\mathbb Z/3)^2$
- `fs-solvable-by-radicals-does-not-force-an-abelian-galois-group` · false-statement — FALSE: a polynomial solvable by radicals must have abelian Galois group
- `fs-not-every-quintic-is-insoluble-by-radicals` · false-statement — FALSE: every quintic is insoluble by radicals
- `fs-the-norm-is-always-the-product-of-the-embeddings` · false-statement — FALSE: for every finite extension, the norm is just the product over the embeddings
- `fs-the-trace-is-always-surjective` · false-statement — FALSE: the trace map of every finite extension is surjective

### `localisation-of-modules-and-support` — Localisation of Modules and Support (35 item(s))

- `def-localisation-of-a-module` · definition — Localisation of a module at a multiplicative subset
- `lem-localised-module-fraction-equivalence-is-an-equivalence-relation` · lemma — The module-fraction relation is an equivalence relation
- `lem-localised-module-addition-independent-of-representatives` · lemma — Addition of localised module fractions is independent of representatives
- `lem-localised-module-scalar-action-independent-of-representatives` · lemma — The localised scalar action is independent of representatives
- `thm-universal-property-localisation-of-a-module` · theorem — Universal property of localisation for modules
- `thm-localisation-of-modules-is-tensor-product` · theorem — Localisation of modules is extension of scalars
- `thm-localisation-of-modules-commutes-with-quotients-and-sums` · theorem — Localisation commutes with quotient modules and arbitrary direct sums
- `lem-zero-in-a-localised-module` · lemma — A localised module fraction is zero exactly when one denominator kills its numerator
- `lem-localisation-preserves-injectivity` · lemma — Injective module maps remain injective after localisation
- `lem-localisation-preserves-surjectivity` · lemma — Surjective module maps remain surjective after localisation
- `thm-localisation-of-modules-is-exact` · theorem — Localisation of modules is exact
- `cor-localisation-commutes-with-kernels-images-and-cokernels` · corollary — Localisation commutes with kernels images and cokernels
- `cor-localisation-commutes-with-finite-intersections-of-submodules` · corollary — Localisation commutes with finite intersections of submodules
- `lem-localisation-of-hom-natural-map` · lemma — There is a natural localisation map on Hom
- `lem-localised-hom-finite-free-case` · lemma — The localised Hom map is an isomorphism for finite free sources
- `lem-localised-hom-finite-presentation-kernel-step` · lemma — A finite presentation reduces localised Hom to the finite free case
- `thm-localisation-of-hom-for-finitely-presented-modules` · theorem — Localisation of Hom for finite and finitely presented modules
- `thm-local-criterion-for-zero-modules-and-maps` · theorem — Local criteria for zero modules and for injective, surjective, and bijective maps
- `thm-local-criterion-for-exactness-of-modules` · theorem — A sequence of modules is exact exactly when all prime localisations are exact
- `def-support-of-a-module` · definition — Support of a module
- `lem-support-membership-by-annihilator` · lemma — A prime lies in the support exactly when some element has annihilator inside it
- `lem-support-of-a-cyclic-module-is-its-vanishing-set` · lemma — The support of a cyclic quotient is its vanishing set
- `lem-support-of-a-finite-module-is-union-of-generator-cyclic-supports` · lemma — A finite module has the union of its generator-cyclic supports
- `thm-support-and-annihilator-of-a-finite-module` · theorem — For a finite module, support is the set of primes containing the annihilator
- `thm-support-in-a-short-exact-sequence` · theorem — Support in a short exact sequence is the union of the outer supports
- `thm-support-of-arbitrary-direct-sums` · theorem — Support of an arbitrary direct sum is the union of the supports
- `thm-support-under-localisation` · theorem — Support under localisation is restriction to primes disjoint from the denominator set
- `def-jacobson-radical-of-a-ring` · definition — The Jacobson radical of a ring
- `thm-jacobson-radical-unit-characterisation` · theorem — An element lies in the Jacobson radical exactly when one minus any multiple is a unit
- `lem-determinant-trick-for-nakayama` · lemma — Determinant trick for Nakayama
- `thm-nakayama-lemma` · theorem — Nakayama's lemma
- `cor-nakayama-generators-modulo-an-ideal` · corollary — Generators modulo an ideal in the Jacobson radical lift to generators
- `cor-minimal-generators-over-a-local-ring` · corollary — Minimal generators over a local ring are exactly residue-field bases
- `thm-support-of-a-tensor-product-of-finite-modules` · theorem — Support of a tensor product of finite modules is the intersection of the supports
- `cor-finite-module-locally-zero-near-a-prime` · corollary — A finite module that vanishes at a prime vanishes on some principal neighbourhood of that prime

### `localisation-of-modules-and-support-examples` — Localisation of Modules and Support — Examples (10 item(s))

- `ex-localising-an-abelian-group-at-a-prime` · example — Localising cyclic abelian groups and Q/Z at a prime
- `ex-localisation-kills-exactly-s-torsion` · example — Localising Z/12Z kills exactly the torsion seen by the denominator set
- `ex-support-of-a-cyclic-module` · example — The support of Z/12Z is the pair of primes (2) and (3)
- `ex-support-of-an-infinite-direct-sum` · example — The support of the direct sum over all primes of Z/pZ is the set of all nonzero prime ideals of Z
- `ex-nakayama-jacobson-hypothesis-is-essential` · example — Over Z, the ideal (2) acts surjectively on Z/3Z but does not kill it
- `ex-nakayama-finite-generation-is-essential` · example — The p-primary quotient Q/Z_(p) over Z_(p) shows finite generation is essential in Nakayama
- `ex-minimal-generators-local-ring` · example — The ideal (x,y) in k[x,y]_(x,y) has two minimal generators
- `ex-local-test-for-an-isomorphism` · example — The Chinese-remainder map Z/6Z -> Z/2Z direct-sum Z/3Z is an isomorphism by local tests
- `ex-localised-hom-needs-finite-presentation` · example — Localised Hom can fail without finite presentation of the source
- `ex-localisation-does-not-commute-with-products` · example — Localisation need not commute with infinite products

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

| item | page | model | context_sha256 |
|---|---|---|---|
| `ex-cardano-from-the-lagrange-resolvent` | `solvability-by-radicals-and-kummer-theory-examples` | gpt-5.6-terra | `53b5ceaea7407e7804dd9911bb477f755abb34e1f4455dc9c0f567a782273030` |
| `ex-localisation-does-not-commute-with-products` | `localisation-of-modules-and-support-examples` | gpt-5.6-terra | `2f9c6c112b14ee29f0150c1f16998b5be838b02aa3e8106a29b8980abddfa7a8` |
| `ex-localised-hom-needs-finite-presentation` | `localisation-of-modules-and-support-examples` | gpt-5.6-terra | `b3e11e0c29e7b78a311f2a6cb95a54d882c64fb1cfd1bafb5ff45eb1f99daa34` |
| `thm-basic-laws-for-field-norm-and-trace` | `solvability-by-radicals-and-kummer-theory` | gpt-5.6-terra | `0f81b5e0cbb22beacb570a108e525579912b21f969b7e72851475507987028b9` |
| `thm-kummer-correspondence` | `solvability-by-radicals-and-kummer-theory` | gpt-5.6-terra | `931e39ab95c09f1656db009d024e53c795724489100b417c0bc1c1f89df86f34` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — exact closure recovery, run `frontier-19`

You are a **group Alpha**. The step-8 judge-closure gate found current rejection
rows that the preceding adjudication did not cover. This is a narrow recovery
dispatch, not a second audit.

Your group is named in the context above. If you are reading this file
standalone, open `research/frontier-19-step8-scope.json` and find the group whose
batches you were dispatched against before anything else — every scope rule below
is relative to it.

## Exact scope

Read `research/frontier-19-judge-closure.json`. Its `unadjudicated_rows` array names
each `(id, model, context_sha256)` rejection with no exact Alpha outcome.
Recompute that join against `research/frontier-19-judge.jsonl` and
`research/frontier-19-judge-adjudications.jsonl`; exclude null, capacity, transport
and already-adjudicated rows.

**The receipt is level-wide and you are not.** Step 8 is partitioned: keep only
the rows whose `id` belongs to your group, using `by_item` in
`research/frontier-19-step8-scope.json`. A row belonging to another group is that
group's to answer and the engine dispatches it there — taking it yourself
produces two adjudications of one rejection, which is the state the partition
exists to prevent. A row belonging to **no** group is different and you must not
drop it silently: adjudicate it if you can decide it honestly, and say so
explicitly in your report either way.

For a legacy receipt without `unadjudicated_rows`, use its `unadjudicated` ids
only to reconstruct the missing exact keys from those two ledgers. Do not widen
the scope to other rejections. Preserve the existing step-8 reports and every
existing adjudication as durable prior work — including other groups' — and do
not redo, replace or reinterpret them.

## Fatal-only adjudication

For every exact missing row in your scope:

1. Read the frozen verdict, current item, and every cited target needed to
   decide it. You may read the entire library; you may write only inside your
   own batches.
2. **Append** exactly one row to
   `research/frontier-19-judge-adjudications.jsonl` with
   `{id, model, context_sha256, item_sha256, outcome, defect_type?}`. The file is
   shared with the other groups and is append-only: never rewrite it, and never
   remove a row another group wrote.
3. Compute `item_sha256` from the pre-edit item using the step-8 guard/touchlog
   normalization, which excludes the entire `verification:` block. Do not copy
   the differently normalized hash from the judge ledger.
4. A `confirmed_nonfatal` or `false_positive` outcome licenses no mutation.
5. Only `confirmed_fatal` licenses a coherent repair. Apply that repair, append
   its defect-ledger row in the same act, and update only the established
   contract, manifest, plan, impact and rejudge artifacts the repair makes
   stale. Never broaden the rejudge set to an unchanged page-mate.
6. If the real defect lies in another group's item, record it in
   `research/frontier-19-step8-cross-group.jsonl` as
   `{from_group, item, owning_group, model, context_sha256, finding}` and
   adjudicate your own row on what is true. Do not repair it.

Run the step-8 guard from the `pre-step8` baseline and recompute judge closure
with pending rejudge allowed. **Both are level-wide and will report other
groups' open work as well as yours** — that is expected while the other
recoveries are still running, and it is not yours to close. Your part is complete
when no row in *your* scope is unadjudicated and no fatal of yours is open;
materially repaired ids may remain in `needs_rejudge` for the engine-owned
rejudge stage.

## Output

`research/frontier-19-alpha-step8-closure-recovery-<label>.md`, where `<label>` is
your group. **The label is not optional.** Four groups can be recovering at once,
and a shared filename means the last writer destroys the others' findings —
which is exactly how eleven fatal findings were lost once when reader-7 wrote
over reader-1's report.

List every exact row you took, its evidence and outcome, every licensed repair,
the resulting rejudge targets, any cross-group finding you raised, any row you
found belonging to no group, and the gate results. Do not append this recovery
onto a stale or earlier step-8 report.

No permission prompts of any kind.
