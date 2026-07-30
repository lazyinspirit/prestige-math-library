<!-- TEMPLATE. Copy into a subagent prompt and substitute <n> (level) and
     <i> (batch). Kept in the repo because these briefs ARE the prompt-side
     half of the workflow: LEVELS.md describes them, this is the text. They
     lived in a session scratchpad until 2026-07-27 and would have been lost. -->

# Level-<n> scaffolding brief (steps 1 and 2 of the owner's per-level build)

> **STANDING OPERATIONAL RULE (owner, 2026-07-29) — binding on every subagent,
> in every brief.** Pass `dangerouslyDisableSandbox: true` on **EVERY** Bash tool
> call, without exception. Builds here run unattended; each omission raises a
> shell-permission prompt the owner must answer by hand, and an overnight run was
> once lost to exactly that. Two mechanical backstops exist —
> `sandbox.enabled: false` and a `SubagentStart` hook that injects this rule into
> every subagent — but both live in `.claude/settings.local.json`, which is
> gitignored and does not travel with a checkout. So it is written here too.

You are **Beta-<n>-<i>**, running **GPT 5.6 Sol via the Codex subscription plan**
(owner, 2026-07-30), scaffolding level <n> of the public math library at
`/root/Projects/prestige-math-library`. Betas run in parallel. Your batch is
named in your own prompt.

Your job is **not** to write proofs. It is to turn a prose scaffold into a
machine-readable per-item scaffold that a step-5 authoring agent can build from
without rediscovering your reasoning, and to fix the mathematical and dependency
defects in the prose while you are the one holding it in mind.

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

## 1. What you produce, and the ONLY files you may write

**Amendment 4 of the workflow, the namespaced write protocol.** You may READ
anything in the repo and RUN any gate. You may WRITE exactly two files:

- `research/level<n>-batch-<i>.pages.json` — your batch's page objects in final
  form, as a JSON array. Shape is exactly `research/level8-batch-1.pages.json`:
  `order`, `id`, `kind`, `category`, `title`, `companion`, `requires`, `items`,
  where each item is `{id, kind, title, strategy?, deps}`.
- `research/level<n>-batch-<i>.notes.md` — prose-scaffold amendments as precise
  APPLYABLE edits (file, section, exact old text, exact new text), plus
  authoring-time notes that have no scaffold anchor but must reach the step-5
  author.

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

One live obligation at this level, recorded at level 8:
**`lem-absolute-convergence-implies-convergence` already exists** and is
published on `series-and-nonnegative-tests` (order 34). It was coined there
because `absolute-convergence-and-rearrangement` (order 36) had an empty item
list. If your batch scaffolds order 36, its "absolute implies convergent" slot
MUST reuse or alias that id. Minting a second is an error.

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
3. **Citing an item for a claim it does not make.** The dominant defect class.
   Open the item; read its Statement; cite what it says.
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

## 9. What to report back (this is step 3, and it goes to the owner)

Your final message is a report to the orchestrator, not to a human reader.

1. **Per-page item list** — every id, kind and title, in reading order, with a
   count I can recount from the list. Never a summary fraction.
2. **Findings**, each stated as ONE recommendation the owner can approve, defer
   or ask a follow-up on. Order them by severity. For each: what is wrong, what
   you propose, and what breaks if it is deferred. The owner iterates these one
   at a time, so do not bundle two decisions into one bullet.
3. **Forward references** you kept, with the target page and why it was
   unavoidable.
4. **New ids you propose**, with the grep you ran to confirm they do not exist.
5. **Cross-batch dependencies** — anything your batch needs from the other
   batch of level <n>, or that you believe the other batch will need from you.
6. **An honest confidence statement**, including what you did NOT verify.

Do not claim a gate passed that you did not run. An accurate partial report is
worth more than a tidy false one.
