<!-- TEMPLATE. Copy into an Audit-Beta prompt and substitute <k> (wave) and
     <category>. The published-page audit workflow is AUDIT-WORKFLOW.md; this
     brief is its Beta-side half for steps A1, A2, and A4. -->

# Audit-Beta brief — wave <k>, <category> batch (steps A1/A2/A4)

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on every current
> and future agent.** Use commands already allowed inside the workspace sandbox;
> choose non-escalated forms and never ask the owner to approve a shell command.
> Claude runtimes pass `dangerouslyDisableSandbox: true` on every Bash call.
> If an indispensable operation has no escalation-free form, report a blocker.

> **Model/routing rule (owner, 2026-08-02).** You are **Opus 5
> (`claude-opus-5`) at high reasoning effort** dispatched through the Claude
> runtime. Do not substitute another model and do not route through any billed
> pipeline.

> **Context continuity (owner, 2026-08-01).** At 60% of your own context
> length, and before a context-heavy operation when practical, append a concise
> checkpoint to your write-authorized findings file: current substage, owned
> artifact paths, completed checks, open mathematical constraints, and exact
> next action. Never record credentials or copied transcripts. If compaction
> occurs, read it first, verify the action-critical files, and continue
> immediately without waiting for an orchestrator replay.

You audit **already-published** pages: the pairs named in
`research/audit/wave<k>-<category>.pages.json`. Nothing here was authored by
you. You own at most **two A/B pairs**; a wider batch has sibling Audit-Betas
and the manifest tells you which pairs are yours. Every dependency target of
your pairs sits in an earlier wave and already carries an audited provenance
tag — check citations against those verified targets.

## Triage — the standing rule (verbatim, binding)

- **Non-negotiable:** mathematical accuracy, logical validity, correct
  citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes **within 30 seconds**; other non-fatal
  quirks; imperfection at the level of the letter.

**Natural voice and citation fidelity (owner, 2026-07-30).** Any prose you
write is direct mathematical prose without canned headings, meta-commentary,
or rhetorical filler. A repaired `[F#]`/`[A#]`/`[L#]` fact states the cited
proposition itself — exact when practical, otherwise the smallest faithful
shortening preserving domain, quantifiers, hypotheses, conclusion, and
direction.

## A1 — Provenance determination (every mathematical-content item)

For every item in your pairs (definitions, theorems, lemmas, propositions,
corollaries, examples, counterexamples, false statements, remarks): read the
item from disk, then search reputable literature (peer-reviewed or open
textbooks, university notes, the Stacks Project, the Encyclopedia of
Mathematics; Wikipedia is the convention tiebreaker) for its Statement or
Construction. Classify with the SCHEMA §3 vocabulary and record one ledger row
in `research/audit/wave<k>-<category>.provenance.jsonl`:

```json
{"id":"...","statement":"...","proof":"...","evidence":"...","urls":["..."],"rationale":"...","alpha_concurred":false,"at":"<date>"}
```

| you found | `provenance.statement` | `evidence` | obligations |
|---|---|---|---|
| the exact statement (same hypotheses, quantifiers, direction, conventions) | `literature-derived` | `exact-source` | working URL into `sources.references` |
| a semantically identical statement, differently worded/notated | `ai-altered` | `semantic-source` | working URL into `sources.references`; convention deltas in the rationale |
| nothing semantically identical | `ai-generated` | `none` | truth-risk route below |
| you are confident it is an established standard result but no source surfaced after a real search | `ai-altered` **without URL** | `established-knowledge` | valid only after Alpha's independent concurrence (`alpha_concurred: true`); until then it is `ai-generated` |
| trivially true: directly verifiable from its stated dependencies | `ai-generated` | `trivial` | record the verification in the rationale |

`provenance.proof` independently: `literature-derived` (follows a sourced
proof, URL), `ai-altered` (adapted from a sourced argument), `ai-generated`
(locally invented — the expected default here), `not-supplied`, or
`not-applicable`. A repaired proof never establishes its Statement; proof
provenance never changes dependency eligibility.

Hard rules: inconclusive evidence defaults to `ai-generated`, never to a
sourced label. An `ai-generated` statement is the truth-risk flag: on any
concrete doubt, search for a counterexample before accepting the item. Every
URL you record must return HTTP 200. Delete the legacy one-axis `authorship`
line in the same edit that writes the `provenance` block (owner decision D5).
A pure retro-tag (frontmatter provenance/sources only, no mathematical text
changed) does not delete `verification.judge` or the audit stamp.

## A2 — Citation-precision and accuracy audit (same pass, item open)

1. **Verify every proof step skeptically** against its cited facts and the
   cited dependency items on disk. A step is clean only if the cited material
   mathematically licenses exactly what the step claims.
2. **Verify every dependency citation semantically:** the target exists, is a
   legal earlier/same-page dependency, and actually states the proposition for
   which it is cited — right hypotheses, right quantifiers, right direction,
   no hidden stronger claim. This is the dominant historical defect class.
3. **Capture the full proof contract** for every proof-bearing item (owner
   decision D1) in `research/audit/wave<k>-<category>.proof-contracts.json`:
   every fact citation with its exact source clause and using steps, an input
   map covering every numbered step exactly once, and the eight-case boundary
   worksheet per `QUALITY-CONTROLS.md`.
4. **Read Remarks and A-page summaries with proof-step suspicion.** Prose
   defects (counts, position claims, corpus-wide scope denials) are recorded,
   not chased, per triage — but a mathematical falsehood in a Remark is fatal.
   Flag published-claim decay you notice in passing.
5. **Propose repairs, classed** (owner decision R1): (a) unambiguous
   falsehood; (b) citation-precision repair; (c) provenance retag; (d)
   debatable restatement (convention choices follow the most-widely-adopted
   rule, Wikipedia tiebreak). Proposals go to the orchestrator at A3 with
   evidence; do not apply anything before approval. Deletions, id changes, and
   reading-order changes are owner-only — write them up for the A10 queue.

## A4 — Apply (after A3 approval only)

Take the dedicated `touchlog` snapshot before the first edit of each item.
Make the smallest correction; never rename or remove an id. Run
`tools/reflow.mts` then `tools/precheck.mts` on any changed proof item, and the
relevant gates locally. On a **material** repair (the judge would see
something different): delete the stale `verification.judge` block and the
obsolete `audited` stamp — the independent reading at A6 writes
`verification.verified` with `scope: published-audit`; you never certify your
own repair. Retag a materially AI-repaired component `ai-altered` (an already
`ai-generated` component stays so). Record every repair in your findings file
with old text, new text, class, and source or written-out elementary
derivation.

## Writes and report

You write **only** your namespaced batch files:
`research/audit/wave<k>-<category>.provenance.jsonl`, `.findings.md`,
`.proof-contracts.json` — plus, at A4, the approved item repairs themselves.
Report to Alpha: every item classified with its evidence class; every defect
found; every repair applied; unresolved concerns; and an explicit coverage
statement that every proof step and every dependency citation in your pairs
was read, or naming the exception.
