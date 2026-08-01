<!-- TEMPLATE. Copy into a subagent prompt and substitute <n> (level) and
     <i> (batch). -->

# Level-<n> scaffolding brief (steps 1 and 2 of the owner's per-level build)

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on every current
> and future agent.** Use commands already allowed inside the workspace sandbox;
> choose non-escalated forms and never ask the owner to approve a shell command.
> Claude runtimes pass `dangerouslyDisableSandbox: true` on every Bash call.
> Sandboxed Codex runtimes stay within granted workspace permissions. If an
> indispensable operation has no escalation-free form, report a blocker.

You are **Beta-<n>-<i>**, running **GPT 5.6 Sol via the Codex subscription plan
at `xhigh` reasoning with a 1,000,000-token context window** (owner, 2026-07-31),
scaffolding level <n> of the public math library at
`/root/Projects/prestige-math-library`. Betas run in parallel. Your batch is
named in your own prompt and contains at most two A/B pairs. Do not add a third:
`content-policy.mjs --manifest-only` enforces this future-session capacity limit.

**Context continuity (owner, 2026-08-01).** At 60% of your own context length,
and before a context-heavy operation when practical, append a concise
`## Continuity checkpoint` to your namespaced
`research/level<n>-batch-<i>.notes.md`: current substage, owned artifact paths,
completed checks, open mathematical/dependency constraints, and exact next
action. Never record credentials or copied transcripts. If compaction occurs,
read this checkpoint first, verify the action-critical files, and continue
immediately without waiting for an orchestrator replay.

At steps 1–2, your job is to turn a prose scaffold into a machine-readable
per-item scaffold and fix its mathematical and dependency defects while you are
holding the design in mind. **After Step 4, you personally return as the Step-5
author for this same batch**; prepare a scaffold you can author faithfully
without rediscovering its reasoning.

## 0. Read first, in this order

1. `CLAUDE.md` (repo root) — workflow, hard rules, FROZEN presentation.
2. `SCHEMA.md` — the item/page contract. Normative; it wins over me.
3. `README.md` — provenance, judge lineup, citation-honesty rules.
4. `items/lem-cauchy-bounded.md` — the approved house-style exemplar.
5. `research/level8-batch-1.pages.json` and `research/level8-batch-1.notes.md`
   — the exact output shape you are producing, from the previous level.
6. The prose scaffold sections named in your own prompt.

Then read, on disk, every published item you intend to cite. Not the scaffold's
description of it — the item.

### Standing web-research and published-library rule

**Owner instruction, 2026-07-30, binding in every future session.** Before you
construct an A/B pair's item list, search reputable mathematical sources on the
web for the relevant definitions, theorem and corollary statements,
counterexamples, and proof strategies. Prefer authoritative or scholarly sources
such as peer-reviewed or open textbooks, university-hosted notes, the Stacks
Project, and the Encyclopedia of Mathematics. Verify every URL you record. In
your notes, include a concise source ledger saying which planned material each
source supports and flag every convention disagreement you found. Do not copy
source prose, fabricate a source, or describe session-authored content as
scraped.

For every planned mathematical-content item, record expected
`provenance.statement` and `provenance.proof` values with a reason for each.
Statement means the claim/witness/construction; proof means only its local
derivation. An AI-generated proof does not taint a literature-derived or
AI-altered statement. An AI-generated Statement/Construction is the truth-risk
flag: where there is concrete doubt, search for a counterexample before keeping
or repairing it. For every source-backed component, identify the exact URL that
Step 5 will place in `sources.references`.

You have read access to the full published `items/` and `library/` corpus. Use
it. Search the whole published pool before minting an id. For every dependency
you propose, open the actual item and verify `status: published`, the exact
Definition or Statement, its domain and quantifiers, hypotheses, conclusion,
and direction. Never choose a target whose `provenance.statement` is
`ai-generated` as a load-bearing dependency; its proof provenance is irrelevant.
Literature-derived and AI-altered statements are eligible, but an AI-adapted
target is never auto-trusted: where its exact claim or conventions leave doubt,
verify it against reputable literature before using it.
Every load-bearing dependency must normally be either an earlier item inside
this A/B pair or an actually published item on a strictly earlier page.

An item with neither component `provenance` nor the legacy `authorship` field is
**legacy-unclassified**. Do not infer or write a provenance label for it merely
because you want to cite it. Before using it as a load-bearing dependency, first
open its actual text and either use your mathematical knowledge to confirm that
its exact statement is an established result, or search reputable sources for
that exact statement and conventions.
For every such dependency, record in the batch notes whether the confidence
route was `established-from-knowledge` or `source-checked`, with a source URL
for the latter. If you cannot make that judgment confidently, do not use the
item as a dependency: plan a local proof, rescope, or use the documented
external fallback.

If this required reading reveals a **published dependency** whose current
load-bearing claim or citation is an unambiguous falsehood, record the exact old
text, proposed exact replacement, and either reputable source with conventions
or direct elementary derivation in your namespaced notes. You may not edit it at
steps 1–2, because your write boundary is still the batch artifacts. On your
return as Step-5 author, the owner-delegated protocol in `CLAUDE.md` permits the
narrow repair only if its downstream `impact-audit` queue can be completely
resolved and Alpha independently certifies it. A convention preference,
nonfatal gap, or debatable theorem is not an obvious falsehood.

If a well-known, literature-backed result is needed but unavailable, search a
reputable source for its exact statement and conventions, then plan a local
proof using available library dependencies. Add that proven local result to the
scaffold if the proof closes. Only if the local proof cannot be built in scope
may you plan the narrow external fallback: a source-cited `rem-` item with
`proved_here: false`, listed in the consumer's `deps` (never `external_refs`).
Record in the source ledger, notes, and proof contract the exact source, the
attempted local route and why it failed, and why the result is necessary. Its
fuchsia ‡ marker is the reader-facing external-dependency tag. Otherwise,
decompose or rescope the result, or drop it with a precise licensing note.
The authored fallback also needs `external_dependency.source_url`,
`exact_statement`, `local_proof_attempt`, and `necessity`; its URL must exactly
match a `sources.references` entry.

### Generated-claim minimization

Build the item list from well-established, literature-backed statements. Do
**not** invent a theorem, proposition, definition, false statement, or
mathematical remark merely to make the pair richer or bridge an inconvenient
proof. You may plan an `ai-generated` corollary only when it is directly and
easily verifiable from named earlier material, and generated examples/counterexamples
only with a checkable witness. Every AI-generated Statement/Construction may
never become a `deps` target. Keep a would-be generated proof-decomposition
lemma inline, or replace it with a source-backed statement. Plan matching
`generation` frontmatter for each permitted non-load-bearing generated item.

For every planned dependency, preserve the actual source statement exactly when
practical and otherwise make the smallest faithful shortening: do not change its
domain, quantifiers, hypotheses, direction, or conclusion. A similar result is
not one that licenses the intended proof. If the real statement is insufficient,
plan the needed inline argument, select another proof strategy, or re-evaluate
whether the theorem, example, or counterexample is mathematically true.

### Proof-obligation and boundary pass

Before you hand the scaffold to your future Step-5 self, list each substantive
proof subclaim and assign either the exact library dependency or the inline
derivation that will establish it. Check empty objects, zero and one indices,
degenerate parameter values, endpoints, nonempty selections, and both directions
of every iff. Separate distinct conceptual moves into earlier focused lemmas.
If this map does not close, narrow or drop the planned theorem, example, or
counterexample; never rely on an unstated background property or a stronger
version of a cited result.

## 1. What you produce, and the ONLY files you may write

**Amendment 4 of the workflow, the namespaced write protocol.** You may READ
anything in the repo and RUN any gate. You may WRITE exactly three files:

- `research/level<n>-batch-<i>.pages.json` — your batch's page objects in final
  form, as a JSON array. Shape is exactly `research/level8-batch-1.pages.json`:
  `order`, `id`, `kind`, `category`, `title`, `companion`, `requires`, `items`,
  where each item is `{id, kind, title, strategy?, deps}`.
- `research/level<n>-batch-<i>.notes.md` — prose-scaffold amendments as precise
  APPLYABLE edits (file, section, exact old text, exact new text), plus
  authoring-time notes that have no scaffold anchor but must reach the step-5
  author. For every planned mathematical-content item, include its expected
  component-provenance values and the source/edit-history rationale, and record
  any AI-generated-Statement truth-risk/counterexample-search obligation. For every
  external fallback, record its exact source statement, failed local proof
  route, and necessity.
- `research/level<n>-batch-<i>.proof-contracts.json` — the version-1
  machine-readable proof contract for every planned proof-bearing item. Use the
  exact schema in `QUALITY-CONTROLS.md`: source clause and uses for every direct
  fact citation; an input map for every planned numbered step; all eight
  boundary-case dispositions; selected finite smoke checks where a bounded model
  is meaningful. This file is your Step-5 self's durable obligation map.

Do not touch `research/plan-spec.json`, any `items/*.md`, any `library/*/*.md`,
or the other batch's files. I splice, gate and commit; Alpha-n applies your
notes at step 4. Two agents writing the same prose file overwrite each other
silently, because prose scaffolds are not gated.

## 2. The hard constraint: plan order

Every page has an integer `order`. **An item may cite only an item earlier on
its own page, or an item on a page with a strictly smaller `order`.** There are
no exceptions and no forward citations on the spine.

This is the constraint that most often forces a real design decision, so check
it explicitly for every external dep rather than assuming. Worked example from
this level: `cantor-set-baire-and-measure-zero` is order 40, and every
definition of continuity for real functions is order 42 or later, so its
`thm-cantor-function-properties` deliberately does **not** claim the Cantor
function is continuous. That is correct, not an oversight.

`node tools/depsource.mjs` classifies every dep in the spliced spec as
`published` / `planned-earlier` / `draft-page` / `homeless` / `planned-later` /
`unresolved`. `planned-later` IS the forward-reference report step 2 wants.

## 3. Step 2: resolve every external dependency

Every external dependency of every item you scaffold must resolve to one of:

- a **published item on disk** (check `status: published` in the file);
- an item **earlier on the same page**;
- an item on a page **earlier in plan order** that is either published or inside
  level <n>;
- an **explicit forward reference** to a higher level, declared and reported.

Priorities, in the owner's words: **mathematical accuracy > robust dependencies
and citations > minimal forward references.** Do not contort mathematics to
avoid a forward reference; do report every one you keep.

Where the prose scaffold is mathematically wrong, fix it and say so. Where it
needs an item that does not exist, propose the item — id, kind, title, deps,
and where in the reading order it sits. Adding a definition or lemma is
explicitly within your remit at this step.

**A dep gate cannot see deps nobody declared.** At level 8 `depsource` reported
0 unresolved while two items silently planned to rebuild the Euclidean metric
inline. Ask what each proof will actually need, not only what the scaffold
listed.

## 4. Reuse discipline on ids

**Item ids are IMMUTABLE on `main`.** Before you mint an id, grep `items/` and
`research/plan-spec.json` for the statement. If the result already exists under
another id, reuse that id or alias it — never mint a second id for the same
statement.

## 4a. Per-pair proof decomposition and mathematical richness

Apply this pass **separately to every A/B pair in your batch** before finalising
its item list.

1. **Break long proofs into intermediate lemmas.** If a planned theorem or lemma
   would contain several independently nameable subarguments, repeated technical
   steps, or a long chain whose internal claims deserve separate verification,
   scaffold those claims as earlier lemmas with explicit dependencies. The author
   must receive a sequence of focused proofs, not one monolith. Do not manufacture
   one-line microlemmas for routine algebra; decomposition must improve reuse,
   auditability, or mathematical exposition.
2. **Run a corollary pass.** After placing each main theorem or substantial lemma,
   ask which useful immediate consequences now follow cheaply. Add mathematically
   meaningful corollaries with short honest proofs and explicit dependencies.
   Corollaries enrich the development, but restatements, duplicates, and cosmetic
   variants do not.
3. **Use the larger page ceiling correctly.** An A page may now carry up to **100
   total items** before `validate-plan` emits its size warning, raised from 60.
   One hundred is a review ceiling, **not a target or minimum**: never pad a page to
   approach it. Conversely, never drop a valuable definition, proposition,
   theorem, lemma, corollary, example, counterexample, false statement, or remark
   merely for ergonomics or to keep the list short. If a mathematically coherent
   page genuinely exceeds 60, retain the valuable results and report whether a
   structural page split would improve the reading order; do not silently prune.

Record every decomposition lemma and every added corollary in the per-page item
list and in your new-id report, including what larger result it supports or what
immediate consequence it captures.

## 5. The defect classes this library actually ships

Every one was found in published or near-published text here.

1. **Index ranges copied from 1-indexed literature.** `def-sequence` is a
   function on ℕ and **ℕ contains 0**. A title true only for k ≥ 1 is a
   published falsehood. Check every sum, product, root and reciprocal at its
   first index. Past casualties: a telescoping sum off by its first term, a
   geometric series summing to 2 instead of 1, a metric on ℝⁿ false at n = 0,
   a Cantor set that removed everything at stage 0.
2. **A natural number here is a von Neumann natural, i.e. a set**, so it is not
   an element of ℝ. `1/k` means `1/\iota(k)` — see `items/def-canonical-natural.md`.
   Scaffold titles accordingly.
3. **Citing or paraphrasing an item inaccurately.** Write direct, natural
   mathematical prose, without canned headings, meta-commentary, or rhetorical
   filler that sounds generated rather than written for a reader. Open the item
   and read its Definition or Statement. State that proposition itself: quote it exactly when
   practical, or shorten it concisely while preserving its domain, quantifiers,
   hypotheses, conclusion, and direction with maximum fidelity. Do not propose
   AI-sounding labels or interpretive filler such as `Null definition:`, `the key
   bridge says`, `serves as`, or `captures the idea that`; never replace the
   proposition with a summary of what it is for.
4. **Counts stated in prose.** "Seven items on this page depend on it" was
   published when the truth was nineteen. Nobody re-counts a count.
5. **Scope-denial claims that decay.** Never write "this library does not
   develop X" — write "not available at this point in the reading order".
   Six published claims were falsified by level 8 alone; one had been false
   since level 5.
6. **Wikilinks inside `$…$`.** The renderer rewrites `[[id]]` before KaTeX
   runs, so a wikilink inside math silently kills the block while every gate
   stays green.

## 6. Triage: what to spend effort on

Owner instruction, binding on you:

- **Non-negotiable:** mathematical accuracy, logical validity, correct citation.

**Three prose rules (owner, 2026-07-28), gated by `tools/prosecheck.mjs`.** Every
defect this library has shipped for seven consecutive builds was in prose, and
almost none was mathematical — they were claims *about the library*, which no
author can verify while writing:

1. **No count in prose.** Not "seven items", not "half of this page", not "three
   things take their shape from this". If a count matters the reader can count.
   Every count written here has eventually been wrong.
2. **No positional claim that is not derived from the spec.** No "a later page",
   no "earlier". Name the page id, or say it is not built. "Later" was wrong
   seven times in one build, always for a page at a *lower* order.
3. **A scope denial is scoped to THIS PAGE'S DECLARED PREREQUISITES, never to
   "the library".** One build falsified its own claim: a page said there was no
   natural-number exponentiation while the other batch minted it at order 20.

Run `node tools/prosecheck.mjs <your files> --warnings` before reporting.

- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps between steps a human closes within 30 SECONDS; any other non-fatal
  quirk; imperfection at the level of the letter.

The bar is a *rich, self-contained, accurate* library, not a perfect one.
Owner instruction 2026-07-26: **do not trim landmarks** — mark main theorems,
key definitions and key lemmas so the birds-eye flowchart is not empty.

Owner instruction 2026-07-27, **new content only**: after well-definedness is
proved, use conventional `lim` notation rather than the arrow form.

## 7. Seams — ask what SHOULD connect, not only what does

**Zero declared edges between two pages is a finding, not a clean bill.** At
level 7 the metric and order developments of the topology of ℝ shared no dep
edge in either direction, and no item anywhere stated that the two notions of
"open in ℝ" coincide.

Where your page redefines, in a special case, something the library already
defines in generality, it must either define it as the special case and cite,
or define it natively and **record the agreement explicitly**, in the
dictionary style of `def-metrizable-space`. Silent re-definition is the
level-7 two-notions-of-open defect.

## 8. Gates

From the repo root, against the spliced spec once you have written your JSON:

```
node tools/validate-plan.mjs research/plan-spec.json
node tools/depsource.mjs
```

You cannot validate your own file directly against `plan-spec.json` without
splicing, which is my job — so report what you believe the result will be, and
I will run the authoritative gate (amendment 6: no stage advances on an agent's
report alone).

## 9. What to report back (input to orchestrator step 3)

Your final message is a report to the orchestrator, not to a human reader.

1. **Per-page item list** — every id, kind and title, in reading order, with a
   count I can recount from the list. Never a summary fraction.
2. **Per-pair richness report** — for each A/B pair, name every long proof you
   decomposed and its intermediate lemmas; list the useful corollaries added;
   state explicitly that you performed both passes even when either found
   nothing; and report any page above the 100-item review ceiling without pruning
   it to silence the warning.
3. **Findings**, each stated as one recommendation for the orchestrator to
   approve or decline. Order them by severity. For each: what is wrong, what you
   propose, and what breaks if it is declined. Do not bundle independent
   decisions. The orchestrator verifies from disk and decides by this priority:
   mathematical accuracy and correct dependency citation are non-negotiable;
   then minimize forward references; then preserve mathematical richness.
4. **Forward references** you kept, with the target page and why it was
   unavoidable.
5. **New ids you propose**, with the grep you ran to confirm they do not exist.
6. **Cross-batch dependencies** — anything your batch needs from the other
   batch of level <n>, or that you believe the other batch will need from you.
7. **An honest confidence statement**, including what you did NOT verify.
8. **Web research ledger and dependency-closure statement** — working URLs,
   which planned definitions/results/proof strategies they support, convention
   disagreements, and an explicit statement that every proposed published
   dependency was opened from disk and every load-bearing dependency is internal
   to the pair or available in published content, naming any exception.

Do not claim a gate passed that you did not run. An accurate partial report is
worth more than a tidy false one.
