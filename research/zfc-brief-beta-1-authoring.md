# Beta-zfc-1 — step-5 authoring brief for run `zfc`, batch 1

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30).** Pass
> `dangerouslyDisableSandbox: true` on every Bash call; never ask the owner to
> approve a shell command. If an indispensable operation has no escalation-free
> form, report a blocker.

You are the **same Beta-zfc-1 that scaffolded this batch**, returning as its
step-5 author. `briefs/authoring.md` is your base contract; read it in full and
follow it except where this file overrides it.

**Model note (owner, 2026-08-06, this day only).** The standing rule dispatches
you as GPT 5.6 Sol through the Codex subscription. The owner's Codex weekly limit
is exhausted, so **no GPT model may be used today**: you run as **Claude Opus 5**.
Nothing else about the author contract changes.

## Read first

1. `briefs/authoring.md` — the base contract.
2. `CLAUDE.md`, `SCHEMA.md`, `README.md` — normative; they win over both briefs.
3. `items/lem-cauchy-bounded.md` — the approved house-style exemplar.
4. **Your own step-1/2 artifacts**, which you may have been compacted away from:
   `research/zfc-batch-1.notes.md` (gap analysis, source ledger, per-item
   provenance rationale, authoring decisions), `research/zfc-batch-1.pages.json`,
   `research/zfc-batch-1.proof-contracts.json`,
   `research/zfc-published-rewiring.md`, and `research/zfc-brief-beta-1.md`.
5. `research/zfc-RESUME.md` — the run record, including the orchestrator's
   step-3 adjudications.

## The scaffold is spliced and approved

`research/plan-spec.json` now carries your four pages at orders 5.1–5.4 with all
95 items. **It is authoritative** for ids, kinds, titles, reading order and the
baseline dependency list. All step-4 gates are clear:

```
validate-plan.mjs   ok
content-policy.mjs  ok — 95 scoped item(s), 0 error(s), 0 warning(s)
```

## What you write

- One `items/<id>.md` for each of the **92 new items** — `status: draft`,
  `origin: session`, both `provenance` components, `sources.references` with a
  working URL wherever a component is source-backed.
- `library/foundations/the-zfc-axioms-and-basic-set-constructions.md`,
  `…-examples.md`, `relations-functions-and-quotients.md`, `…-examples.md`, all
  `status: draft`, in the house page shape.
- Updates to `research/zfc-batch-1.proof-contracts.json` and
  `research/zfc-batch-1.notes.md`.

## Six things specific to this run

**1. The three re-homed items already exist and are PUBLISHED. Do not create an
item file for them and do not edit their files.** `def-equivalence-relation`,
`lem-equivalence-classes-partition` and `def-injection-surjection-bijection` are
listed in page 5.3's `items:` at the positions your scaffold gives them, and that
is the whole of your involvement with them. Their own edits are already staged in
`research/zfc-published-rewiring.md` and are applied by the orchestrator at
publish time. Write around them: your new items may cite them freely.

**2. Write nothing to any published item or page, for any reason.** The
repository is the live serving path, so such an edit is live immediately. If
authoring reveals that a published item needs a change, append it to
`research/zfc-published-rewiring.md` as an exact applyable edit in the format
already established there, classified (i) non-material or (ii) material. That
file and your four batch artifacts plus your new draft files are your entire
write surface.

**3. If a gate complains about the re-homed items, report it — do not fix it.**
The three ids are deliberately multi-homed for the duration of the build (on
their current published page and on draft page 5.3), because removing them from a
live published page before the new page is published would leave that page with a
prerequisite link readers cannot open. `depcheck` will warn `multi-home`; that
warning is expected and correct. If `fwdcheck`, `depcheck` or any other gate
raises a **hard error** naming one of those three ids, stop, report the exact
output, and let the orchestrator adjudicate. Do not edit a published item to
silence a gate.

**4. Refresh every proof contract to byte-exact final text.** You flagged this
yourself as the largest piece of work carried forward: the `quote` fields in
`research/zfc-batch-1.proof-contracts.json` are *planned* text written before the
cited items existed. `proof-contract.mjs --strict` checks each quote as a
substring of the cited section and each step map against the authored proof, so
every quote and every step map must be refreshed against what you actually wrote.
Do this per page as you finish it, not in one pass at the end.

**5. The Choice sentence (step-3 adjudication F8).** Page 5.1 keeps the title
`The ZFC Axioms and the Basic Set Constructions`. `def-language-of-set-theory`'s
Remark, `rem-which-axiom-each-construction-uses`, and paragraph 2 of page 5.1's
summary must each say plainly that Choice is the tenth axiom and is stated at
`def-axiom-of-choice`, so the title can never be read as a claim that all ten are
proved on that page.

**6. Boundary cases are where this material ships falsehoods.** The empty set,
the empty family, the empty relation, functions out of and into $\varnothing$,
$\mathcal{P}(\varnothing)$, $A \times \varnothing$, $\bigcap \varnothing$, zero-
and one-element index sets, and both directions of every iff. Your contracts
carry an anchored disposition for each; honour it in the prose.

## Working method, because 95 items is large

Author **page by page in reading order**: 5.1, then 5.2, then 5.3, then 5.4. An
item may only cite what precedes it, so this order is also the order in which
your citations become checkable. After each page:

1. `node tools/tsx-run.mjs tools/reflow.mts items/<the ids you just wrote>`
2. `node tools/tsx-run.mjs tools/precheck.mts items/<same>` — adopt any REPAIR
   stratification with `node tools/adopt-repair.mjs` and re-run until clean.
3. `node tools/rendercheck.mjs` — a KaTeX or YAML defect here is invisible
   everywhere else and silently drops the item from the corpus.
4. Refresh that page's proof-contract entries.
5. Append a one-paragraph progress note to `research/zfc-batch-1.notes.md`.

**Context continuity.** At 60% of your context, append a concise
`## Continuity checkpoint` to `research/zfc-batch-1.notes.md`: current page and
item, what is authored and gated, open mathematical constraints, and the exact
next action. If you are compacted, read it first, verify the files it names, and
continue without waiting for a replay.

## Do not

- Do not set `verification.audited` or `verification.judge` on anything. You are
  not a judge and not the owner; judging is step 7.
- Do not invent a theorem, proposition, definition, false statement, lemma or
  remark that is not in the approved scaffold. A generated corollary or
  example/counterexample is allowed only where the scaffold already plans one,
  and never as a `deps` target.
- Do not add a dep to silence a checker when the proof does not use it. That is
  this library's dominant historical defect class.
- Do not write a count, a self-ranking, a positional claim not derived from the
  spec, or a library-wide scope denial in any prose. `prosecheck.mjs` gates two
  of the three; the third is a reading check.

## Report

Per page: items authored, gates actually run and their real output, contract
refresh status, and anything you could not close honestly. Name every item where
you narrowed, rescoped or dropped what the scaffold planned, and why. State
explicitly whether any published file was touched (the answer must be no). Do not
claim a gate passed that you did not run.
