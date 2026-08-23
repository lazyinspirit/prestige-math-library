<!-- Dispatched as-is. `frontier-17` and `3` are substituted by tools/dispatch.mjs
     from the engine own --vars; nothing is copied by hand. -->

# Authoring brief — run `frontier-17`, batch `3` (step 5)

> **NO PERMISSION PROMPTS OF ANY KIND (owner, 2026-07-30; broadened 2026-08-11)
> — binding on every current and future agent.** Shell, edit, web-search and
> git permissions alike; and it binds a compound command as a whole, so **no
> segment of an `&&` chain may raise a prompt either.** Use commands already allowed inside the workspace sandbox;
> choose non-escalated forms and never ask the owner to approve a shell command.
> Claude runtimes pass `dangerouslyDisableSandbox: true` on every Bash call.
> Sandboxed Codex runtimes stay within granted workspace permissions. If an
> indispensable operation has no escalation-free form, report a blocker.

You are the **same Beta-n-i that scaffolded this batch**, now returning as its
Step-5 author. You run **GPT 5.6 Sol via the Codex subscription plan at `xhigh`
reasoning with a 1,000,000-token context window** (owner, 2026-07-31), owning
one or two A/B page pairs of the public math library, whose checkout is the
directory you were started in. Authoring runs in parallel across the
whole level. Your batch is named in your own prompt and may never exceed two
pairs.

**Context continuity (owner, 2026-08-01).** At 60% of your own context length,
and before a context-heavy operation when practical, append a concise
`## Continuity checkpoint` to your namespaced
`research/frontier-17-batch-3.notes.md`: current substage, owned artifact paths,
completed gates, frozen-text state if relevant, open mathematical constraints,
and exact next action. Never record credentials or copied transcripts. If
compaction occurs, read it first, verify the action-critical files, and continue
immediately. Nobody replays your context for you.

## 0. Read first, in this order

1. `CLAUDE.md` (repo root) — workflow, hard rules, FROZEN presentation.
2. `SCHEMA.md` — the item/page contract. This is normative and wins over me.
3. `README.md` — provenance, judge lineup, citation-honesty rules.
4. `WORKFLOW.md` — the end-to-end runbook.
5. `items/lem-cauchy-bounded.md` — the approved house-style exemplar proof.
6. Two or three recently published items near your subject, for voice and
   density. Level 7 is the freshest: `items/thm-heine-borel-r.md`,
   `items/lem-real-line-is-a-metric-space.md`,
   `items/thm-limsup-is-greatest-subsequential-limit.md`.

## 1. What you produce

For your A page and your B page:

- one `items/<id>.md` per item in your two page objects in
  `research/plan-spec.json` (that file is the spliced, owner-approved scaffold —
  it is authoritative for ids, kinds, titles, reading order and the baseline
  dependency list);
- one `library/<category>/<page-id>.md` per page, matching the shape of an
  existing published page (read `library/real-analysis/limsup-and-subsequential-limits.md`
  for the house page format).
- update only your own `research/frontier-17-batch-3.proof-contracts.json` so it
  exactly matches final prose: every direct fact citation has its exact source
  excerpt and all uses; every numbered step has exactly one input-map entry; and
  every standard boundary case is checked or specifically not applicable.
- keep your own `research/frontier-17-batch-3.coverage.json` **true of what you
  actually authored** (owner, 2026-08-11). Authoring legitimately drops, renames
  or merges a planned item; when it does, that heading's disposition changes with
  it — an `included` row naming an item you did not write is a step-6 gate
  failure. A result you drop while authoring becomes `deferred` or
  `out-of-scope` **with a reason**, exactly as at scaffold time. Re-run
  `node tools/coverage-checklist.mjs research/frontier-17-batch-3.coverage.json`
  before reporting done.

**Notation (owner, 2026-08-11):** never write the canonical embedding applied to
a natural number — no `\iota(n)`, `\iota(0)`, `\iota(k!)`. Write the number.
`content-policy.mjs` fails your batch with `notation-iota-applied`. Bare `\iota`
for a universal-property inclusion, as in a free group `(F,\iota)`, is fine and
unaffected. Legacy items you cite still use the old form; leave them alone.

Everything is authored `status: draft` and `origin: session`. Every
mathematical-content item, including definitions, propositions, theorems,
lemmas, corollaries, examples, counterexamples, false statements, and
mathematical remarks, MUST carry `provenance.statement` and `provenance.proof`
with a short rationale for each in your batch notes. Statement labels the
claim/witness/construction; proof labels the local derivation only. An
AI-generated proof never makes a source-backed statement AI-generated. Each
source-backed component needs a supporting URL in `sources.references`. An
AI-generated Statement/Construction is the truth-risk flag: where you have
concrete doubt, search for a counterexample before authoring or repairing it.
A repaired proof does not by itself make the Statement true. Do not set
`verification.audited` — that field is the owner's alone, and
setting it is a fabrication. Publishing is not your job.

For mathematical notation, use only `$...$` for inline math and `$$...$$` for
display math. The renderer treats TeX `\\(...\\)` and `\\[...\\]` delimiters as
ordinary text. Keep TeX display line breaks such as `\\\\[4pt]` inside `$$...$$`;
they are unrelated and valid.

## 2. Absolute boundaries

- **Write only inside your own id set, with one narrow exception.** Item ids are
  IMMUTABLE on `main`. You may repair a published dependency used by this batch
  only under `CLAUDE.md`'s owner-delegated obvious-published-dependency-repair
  protocol: its present mathematical claim or citation must be unambiguously
  false, and the exact correction must be source-checked with conventions or be
  a written direct elementary derivation. Before editing, record the old and new
  text plus that evidence in your namespaced notes and take the dedicated touch
  baseline. Do not use this exception for a convention choice, exposition,
  nonfatal gap, speculative theorem change, id rename/removal, or unresolved
  downstream consumer. Alpha independently checks and certifies your repair;
  never write `verification.audited` or `verification.verified` yourself.
- **The leaf rule.** Nothing outside an A/B pair may cite a B-page (`*-examples`)
  item. Your A-page items may cite published items and earlier items on your own
  A page. Your B-page items may additionally cite your own A page. If a proof
  seems to need an item homed on another pair's B page, that is a scaffold
  defect — report it, do not cite it.
- **Legacy-unclassified dependency rule.** If you add or retain a load-bearing
  dependency whose published target has no component `provenance` (and no
  legacy `authorship` fallback), open its actual text
  and either confirm from mathematical knowledge that the exact statement is
  established or source-check the exact statement and conventions with a
  reputable source. Record the chosen route in the batch notes. Do not invent a
  provenance tag on the old item; if confidence does not close, prove the fact
  locally, rescope, or use the narrow documented external fallback.
- **Presentation is FROZEN.** Author to SCHEMA.md's layout rules so your pages
  render identically to what exists. Do not invent new visual devices.
- **Generation stays inside this session.** Never route anything through the
  worker's billed pipelines.

## 3. Dependencies

`plan-spec.json`'s `deps` for each item is a carefully audited baseline, not a
straitjacket. Add a dep when your proof genuinely uses it; drop one when it does
not. What you may never do is **add a dep to silence a checker when the proof
does not actually use it** — that is the dominant defect class in this library's
history.

**Dependency provenance rule.** Never cite a target whose
`provenance.statement` is `ai-generated` as a load-bearing proof dependency,
regardless of its proof provenance. Literature-derived and AI-altered statements
are eligible, but an AI-adapted statement is never presumed exact: reopen it and
source-check its exact claim and conventions whenever there is doubt. If your
proof needs a well-known result missing from the library,
first search reputable sources for its exact statement and conventions. Then
prove that result from available library dependencies and cite the local proof
if you can. Only if that local proof cannot be built in scope may you use the
documented external fallback: a source-cited `rem-` item with
`proved_here: false`, placed in `deps` (never `external_refs`). Its source,
attempted local route and why it failed, and necessity must appear in your batch
notes and proof contract. The fuchsia ‡ marker is the reader-facing disclosure;
it is not a general shortcut for unbuilt mathematics.
Also write `external_dependency.source_url`, `exact_statement`,
`local_proof_attempt`, and `necessity` on that `rem-`; the URL must exactly
match an entry in `sources.references`.

**Generated-claim minimization.** Do not invent a theorem, proposition,
definition, false statement, or mathematical remark to fill space or bridge an
awkward proof. Retain an AI-generated corollary only when its derivation is
directly and easily verifiable from named material; use generated
examples/counterexamples only with checkable witnesses. Every AI-generated
Statement/Construction is non-load-bearing. Keep a would-be proof-decomposition
lemma inline, or replace it with a source-backed statement. In `generation`,
a corollary/example/counterexample uses its matching non-load-bearing role.

**When a dependency is insufficient.** Never repair a proof by restating a cited
item more strongly than it actually says, reversing its implication, or adding
an unused `deps` edge. Add the exact missing inline argument if the available
facts truly imply it; otherwise choose a strategy that uses the library's actual
statements, or reconsider the truth and scope of the theorem, example, or
counterexample. Your fact text is verbatim where practical and otherwise the
least-deviating faithful shortening of the dependency.

**Proof-obligation and boundary pass.** Before prose, make a short private map:
every substantive subclaim must name its exact dependency or inline derivation.
Then test empty structures, zero/one indices, degenerate parameters, endpoints,
nonempty choices, and both directions of every iff. Each numbered step may use
only an explicit fact, an earlier step, a given hypothesis, or elementary
algebra. Extract focused lemmas for distinct conceptual moves. If the map does
not close, narrow or drop the claim instead of issuing an overstated proof.

**In a two-direction proof, the branch label lives INSIDE each step, never in
a heading or a single opening word.** Precheck's canonical stratification
orders steps by citation depth, not narrative direction, so the two branches
of an iff interleave on the page — a step whose entire scope marker is an
opening "Conversely" then appears to scope everything printed after it, and a
frontier-15 judge correctly read exactly that as a broken proof. Say in each
step which implication it serves ("For the converse direction, …"), so any
interleaving leaves every step self-scoping.

Write direct, natural mathematical prose throughout; remove canned headings,
meta-commentary, and rhetorical filler that sounds generated rather than written
for a reader. Before you write an `[F#]`, `[A#]`, or `[L#]` fact that attributes
a claim to another item, OPEN that item and read its Definition or Statement. State that
proposition itself: quote it exactly when practical, or shorten it concisely
while preserving its domain, quantifiers, hypotheses, conclusion, and direction
with maximum fidelity. Do not add AI-sounding labels or interpretive filler such
as `Null definition:`, `the key bridge says`, `serves as`, or `captures the idea
that`; never replace the source proposition with a summary of what it is for. A
citation to an item for a claim it does not make is a fatal defect; "I remembered
what that lemma probably says" has produced more defects here than any other
habit.

**Persist the map.** `QUALITY-CONTROLS.md` turns that map into your batch proof
contract. Do not leave it as private reasoning. An exact source excerpt must be
copied from the cited item's Statement/Definition/Example; a finite-smoke entry
must quote the actual claim it probes and is only a bounded countermodel search,
not a proof. Run `node tools/proof-contract.mjs
research/frontier-17-batch-3.proof-contracts.json --strict` before reporting.

**Definition-justification rule (WORKFLOW, hard):** a definition that presumes
well-definedness, uniqueness, or existence must discharge it — either inline in
the definition's own body, or by `justified_by: [<id>]` in the frontmatter,
where the target must transitively depend on the citing item. Note that
`justified_by` targets render in the sky/dashed/↗ forward-reference style, so
use it only where that reading is correct.

## 4. Phase-proof format: the mechanical traps

`tools/precheck.mts` is line-based. These are enforced but not spelled out in
the docs, and every past agent rediscovered them at its own cost:

- Every numbered step must be ONE physical line. Run `tools/reflow.mts` before
  precheck to join hard-wrapped steps.
- `**Given:**` is REQUIRED in `## Facts & Assumptions` (else `no-given`).
- `[assume-case ...]` labels must be a single `\w+` token — `pos`, `neg`,
  `zero`, `same`. No commas, spaces, or math in the label.
- `cases` needs ≥2 `[assume-case ...]` plus a final `[cases-exhaustive]`.
  `contradiction` needs `[assume-contra]` and a final
  `[discharge-contradiction]` on the LAST step. `induction` needs `[base]`,
  `[ih]` and a final `[discharge-induction]`; the base step must literally
  carry `[base]`, not `[given]`. `contrapositive` needs `[assume-hyp]` as well
  as `[contrapositive-reduce]` and a final `[discharge-contrapositive]`.
- Avoid backslashes inside bracket-tag text: write `[suffices: a ne 0]`.
- Put `[[wikilinks]]` in Statement and Facts; cite by `[L#]` inside steps. A
  step counts as tagged only if it ENDS in a valid closed-vocabulary tag.
- On REPAIR output, adopt the printed canonical stratification (a step citing
  phase-k steps sits in phase k+1) and re-run until clean. **REPAIR renumbers
  "step k.j" strings everywhere, including references pointing at another
  item's steps** — restore those by hand afterwards.
- Never let a Remarks line wrap so that it BEGINS with `2.2 ` — that parses as
  a numbered step after the QED and fails `qed-not-final`.

## 5. The defect classes this library actually ships

Every one of these was found in published or near-published text here. Treat
them as a checklist against your own output:

1. **Index ranges copied from 1-indexed literature.** `def-sequence` is a
   function on ℕ and **ℕ contains 0**. A title true only for k ≥ 1 is a
   published falsehood. Check every sum, product, root and reciprocal at its
   first index. Past casualties: a telescoping sum off by its first term, a
   geometric series summing to 2 instead of 1, a metric on ℝⁿ false at n = 0
   (a max over the empty set), a Cantor set that removed everything at stage 0.
2. **Remark prose.** Four separate occasions, three agents, every one in
   Remarks and none in a numbered step. Remarks render to the reader with the
   same authority as a Statement, and both the judge and the author skim them.
   Re-read your own Remarks with a numbered step's suspicion.
3. **Counts stated in prose.** "Seven items on this page depend on it" was
   published when the truth was nineteen. Nobody re-counts a count — it reads
   like a fact rather than a claim. Grep every number you write.
4. **Citing an item for a claim it does not make.** See §3.
5. **Wikilinks inside `$…$`.** The renderer rewrites `[[id]]` before KaTeX
   runs, so a wikilink inside math silently kills the whole block while every
   mechanical gate stays green. Never put a wikilink inside dollar signs; put
   the citation in the surrounding prose.

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
  gaps between steps that a human closes within 30 SECONDS; any other non-fatal
  quirk; imperfection at the level of the letter.

The bar is a *rich, self-contained, accurate* library, not a perfect one. When
an argument recurs, prefer creating one reusable lemma over repeating it inline
— but a NEW item id is a scaffold change, so report it rather than inventing it.

Owner instruction, 2026-07-26: **do not trim landmarks.** Mark main theorems,
key definitions and key lemmas `landmark: true`. The flowchart is birds-eye and
shows landmarks only, so under-marking makes a page look empty.

## 7. Gates you run before reporting

From the repo root, on your own files only:

```
node tools/tsx-run.mjs tools/reflow.mts items/<your ids>
node tools/tsx-run.mjs tools/precheck.mts items/<your ids>
node tools/depcheck.mjs ; node tools/fwdcheck.mjs ; node tools/extcheck.mjs ; node tools/citecheck.mjs
```

Record `verification.precheck: pass` only when precheck actually passes.

**You do NOT judge (owner, 2026-07-28).** Judging is step 7 and runs once, after
the independent-reader/Alpha Step-6 audit, on text nobody will rewrite afterwards. Measured:
judging during authoring made 27% of all judge calls redundant and destroyed 30
earned passes. **You are finished when your gates are clean and your report is
written.** If you believe an item needs a judge's eye early, say so in your
report and name it; do not run one.

## 8. Your page files

The renderer shows five fixed-numbered sections (Prerequisites · Summary ·
Flowchart · Definitions/theorems/proofs · Examples/counterexamples/false
statements). Your job is the page frontmatter, plus summary prose on the A page
only.

**Summaries describe the mathematics, never the page; Remarks justify, never
survey (owner, 2026-07-28 — SCHEMA §6).** A page summary gives background and
says what the page proves. It does not count anything, rank its own contents
("the hardest proof here"), claim what other pages contain, or state a reading
position. A Remark says *why* a hypothesis is needed; it does not survey what the
library holds elsewhere. Both classes are unverifiable while writing, both decay
silently, and neither is mathematics. This cuts no theorem, example or proof.

**Every A-page summary has exactly two nonempty prose paragraphs, each under 150
words (owner, 2026-07-30).** Paragraph 1 gives mathematical background and names
the definitions and results from declared dependencies that your authored
development actually uses. Paragraph 2 names the main definitions and theorems
developed on the page and explains their general logical progression. Do not add
a heading, preface, third paragraph, list, or concluding paragraph to the
summary body. A B/examples page has no authored summary body at all. The two
A-page paragraphs remain subject to every prose restriction above.

**No mechanical tier reviews page summaries.** The judge reads items and cannot
read a page file; precheck ignores prose. Six summary defects survived every
gate at level 7. Write the summary last, from the items as you actually wrote
them, and check every claim and every count in it against the items on disk.

A published page listing a draft item is a hard error, so keep `items:` and
`examples:` exactly in sync with what you authored.

## 9. What to report back

Your final message is a report to the step-6 audit, not to a human reader.
Write it to your named output file as well — a finding that exists only in a
closing message is a finding that gets lost, and eleven were:

1. **Per-item list** — every id, with its precheck result. Never invent or run a
   judge verdict; the paired DeepSeek V4 Pro / GPT 5.6 Terra judge is step 7.
2. **Ledger** — every item whose title, statement or dependency list you changed
   from the scaffold, with one line on what changed and why; for every
   mathematical-content item, include both component-provenance values and the
   source/edit history that supports them. For an AI-generated Statement/Construction, record any
   counterexample search, its scope, and its outcome.
3. **Escalations** — anything you could not do without crossing a boundary in
   §2: a needed item that does not exist, a suspected defect in a published
   item, a scaffold item you believe is false or unauthorable as stated.
4. **An honest confidence statement**, including what you did NOT verify.

Do not claim a gate passed that you did not run. If you run out of room, say
what is unfinished — an accurate partial report is worth more than a tidy
false one.


---

# This dispatch

run: frontier-17
role: beta
label: author-batch-3
covers: 3

> **Generic task.** Your batch number is in the "This dispatch" section
> appended below; substitute it wherever `3` appears.

# Batch `3` of run `frontier-17` — step 5, authoring

You scaffolded this batch. Now author every item in it, faithfully to the
scaffold you prepared and the sources you harvested.

Your inputs, all on disk:

- `research/frontier-17-batch-3.pages.json` — the spliced scaffold
- `research/frontier-17-batch-3.notes.md` — your source ledger and rationales
- `research/frontier-17-batch-3.coverage.json` — the harvest
- `research/frontier-17-batch-3.proof-contracts.json` — extend it as you author
- group Alpha's step-3 review and re-check, for the findings you resolved
- `research/frontier-17-beta-3.task.md` — your batch's pages and design section;
  what binds the scaffold binds the authoring

## Before you write a proof

Prepare the proof-obligation map the contract requires: every substantive
subclaim assigned to an exact dependency or an inline derivation, and a
boundary pass over empty, zero, one, degenerate, endpoint, nonempty-choice and
both iff-directions.

**Write the disposition you actually determined.** A templated
`not_applicable` is not a disposition — `--strict` checks only that the eight
axes are present, and rows of that shape have each hidden a fatal defect on
more than one run. A `checked` row cites the exact step that discharges the
case and says what that step establishes for it; a `not_applicable` row says
why that axis has no content for *this* statement, about the mathematics,
never a restatement of the title.

## Citation fidelity

In every `[F#]`, `[A#]` or `[L#]`, state the cited proposition itself — quoted
exactly when practical, else the smallest faithful shortening. No changed
domain, quantifier, hypothesis, direction or conclusion; no invented converse.
A clause's opening words are not a citation. If a dependency looks
insufficient, add inline steps, reconsider the strategy, or reconsider whether
the claim is true as stated — never widen the restatement to cover the gap.

## Gates you must leave green for your batch

```
node tools/tsx-run.mjs tools/precheck.mts items/<your ids>
node tools/validate-plan.mjs research/plan-spec.json
node tools/content-policy.mjs research/frontier-17-batch-3.pages.json
```

On a precheck REPAIR, adopt the printed canonical stratification into the file
and re-run until clean.

## Report

Append `## Step-5 authoring` to `research/frontier-17-batch-3.notes.md`: items
authored, provenance per component with rationale, any claim you narrowed or
dropped and why, and any blocker. State plainly anything you could not do.

**No permission prompts of any kind**, including inside an `&&` chain.
