# Authoring brief for run `frontier-12` (step 5)

> **NO PERMISSION PROMPTS OF ANY KIND (owner, 2026-07-30; broadened 2026-08-11)
> — binding on you.** The owner's wording: *"Do not ask and do not let any agents
> ask for shell command permissions, edit permissions, web search permissions,
> git permissions, or any permissions whatsoever."* It binds a **compound command
> as a whole — no segment of an `&&` chain may raise a prompt either.** Use
> command forms already allowed inside the workspace sandbox, choose
> non-escalated forms, and pass `dangerouslyDisableSandbox: true` on every Bash
> call where your runtime exposes it. Web search is part of your job and you never
> ask before searching. If an indispensable operation has no escalation-free form,
> **record a blocker in your notes** — that is the escape hatch, not a prompt.

You are the Beta who scaffolded this batch on run `frontier-12`. The scaffolds are
spliced into `research/plan-spec.json` and reviewed. **You now author every item
in your own batch** — the owner's step-5/6 ownership rule (2026-07-31): the Beta
that scaffolded a batch personally authors it, and is excluded at step 6 from
auditing anything it authored.

## Read first

1. `CLAUDE.md`, `SCHEMA.md` — normative. SCHEMA wins over this brief.
2. `briefs/authoring.md` — your base contract, in full.
3. `items/lem-cauchy-bounded.md` — the approved house-style exemplar. Match its
   voice, its density, its layout.
4. `research/frontier-12-step3-decisions.md` — the settled decisions.
5. `research/frontier-12-alpha-step3-scaffold-review.md` — Alpha's verdict on
   your pair, including anything it ruled `insufficient`.
6. Your own `research/frontier-12-batch-<i>.notes.md` and
   `.proof-contracts.json` — you wrote the proof design; author to it.

## What you write

`items/<id>.md` for every item on your pages, and `library/<category>/<page>.md`
for each page. Everything is `status: draft`; `origin: session`. The owner audit
at step 10 is what flips anything to `published`, and nothing you do here
publishes.

`library/complex-analysis/` does not exist yet — batch 6 creates it. That is a new
directory of content, **not** a styling change: presentation is FROZEN, the
category renders with the existing neutral fallback, and no file in the app repo
is touched by anyone on this run.

## The rules that bite hardest at authoring time

**Provenance on every mathematical-content item.** `provenance.statement` and
`provenance.proof`, both, per SCHEMA §3. A generated proof does not make a
source-derived statement AI-generated. Never make an `ai-generated` Statement or
Construction a dependency target.

**Citation fidelity.** In every `[F#]`, `[A#]`, `[L#]` fact, state the cited
definition or theorem **itself** — quote it exactly when practical, otherwise the
smallest faithful shortening, with no changed domain, quantifier, hypothesis,
direction or conclusion, and no invented converse. Never replace the proposition
with a summary of what it is "for". No AI-sounding labels, no interpretive filler
("the key bridge says", "Null definition:").

**Proof discipline.** Every step uses an explicit fact, an earlier step, a given
hypothesis, or elementary algebra. Do the boundary pass you promised in your
contract: empty objects, zero and one indices, degenerate parameters, endpoints,
nonempty choices, and **both directions of every iff**. If a proof will not close
honestly, narrow the claim — do not patch it with an overstated dependency.

**Notation.** No applied `\iota` on a natural number — write the number.
`content-policy.mjs` fails the batch with `notation-iota-applied`. Bare `\iota` in
a universal property is fine.

**Page summaries.** Exactly two nonempty prose paragraphs, each under 150 words.
Paragraph 1: the background, naming definitions and results from declared
dependencies that the development uses. Paragraph 2: the main definitions and
theorems developed on the page and their logical progression. No counts, no
self-ranking, no survey claims about other pages. **A B page has no authored
summary body at all.**

**B pages are leaves.** Nothing may depend on an item homed on an `-examples`
page (`validate-plan` error `b-leaf`).

## Gates to leave green

```
node tools/tsx-run.mjs tools/precheck.mts <your item files>
node tools/rendercheck.mjs <your item and page files>
node tools/prosecheck.mjs <your page files>
node tools/citecheck.mjs <your item files>
```

On a `precheck` REPAIR, adopt the printed canonical stratification into the file
and re-run until clean; record `verification.precheck: pass`.

**`rendercheck` genuinely runs now** — its KaTeX and YAML dependencies resolve.
On the previous run it skipped silently for the whole build and, once fixed,
immediately caught `|z|\ge0,qquad`, a missing backslash that would have published
the literal letters "qquad" into a proof. Treat it as a real gate.

**Do not run `tools/gates.mjs`** — it fails `EPERM` in this sandbox. The
individual scripts are the same checks; the orchestrator is the gate of record.

## Your proof contracts are a promise, not paperwork

`proof-contract.mjs --strict` verifies that a `quote` is a substring of the named
`source_section` and that facts and steps map onto each other. It **cannot**
verify the quote actually supports the fact, or that a boundary row's named step
does the work. On the previous run it reported `206/206, 0 errors` over 355 rows
whose "evidence" was an instruction ("Step 1.1 **must** isolate…"), 137 quotes
truncated before the clause they relied on, and genuine biconditionals marked
`not_applicable` for the iff pass.

Alpha reads the contracts against your text at step 6 and that is where such rows
are found. Write the contract you would want a skeptical reader to check.

## Report

Item counts authored per page, gate results, every place your written proof
departs from the scaffolded strategy and why, anything you could not close
honestly, and any blocker.
