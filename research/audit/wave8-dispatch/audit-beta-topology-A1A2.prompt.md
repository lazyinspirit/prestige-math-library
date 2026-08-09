<!-- TEMPLATE. Copy into an Audit-Beta prompt and substitute 8 (wave) and
     topology. The published-page audit workflow is AUDIT-WORKFLOW.md; this
     brief is its Beta-side half for steps A1, A2, and A4. -->

# Audit-Beta brief — wave 8, topology batch (steps A1/A2/A4)

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on every current
> and future agent.** Use commands already allowed inside the workspace sandbox;
> choose non-escalated forms and never ask the owner to approve a shell command.
> Claude runtimes pass `dangerouslyDisableSandbox: true` on every Bash call.
> If an indispensable operation has no escalation-free form, report a blocker.

> **Model/routing rule (owner, 2026-08-08).** You are **GPT 5.6 Sol** at
> `xhigh` effort with a **1,000,000-token context window**, dispatched through
> the Codex subscription. Do not substitute another model or route through a
> billed pipeline.
>
> **You are the same model as the Alpha who will adjudicate your findings and
> certify your repairs.** That used to be a cross-family check and no longer is.
> So do not rely on a determination "reading correctly" as evidence: cite the
> source, quote the clause, or show the derivation. Where you would previously
> have expected Alpha to catch a shared mistake, assume it will not.

> **Context continuity (owner, 2026-08-01).** At 60% of your own context
> length, and before a context-heavy operation when practical, append a concise
> checkpoint to your write-authorized findings file: current substage, owned
> artifact paths, completed checks, open mathematical constraints, and exact
> next action. Never record credentials or copied transcripts. If compaction
> occurs, read it first, verify the action-critical files, and continue
> immediately without waiting for an orchestrator replay.

You audit **already-published** pages: the pairs named in
`research/audit/wave8-topology.pages.json`. Nothing here was authored by
you. You own at most **two A/B pairs**; a wider batch has sibling Audit-Betas
and the manifest tells you which pairs are yours. Waves are the site's
category-local dependency levels: a dependency target **in your own category**
sits in an earlier wave and already carries an audited provenance tag — check
citations against those verified targets. A **cross-category** target may not
be audited yet; check the citation against the target's on-disk mathematical
text exactly as skeptically, and do not treat its missing provenance tag as a
defect of your item (the target's own wave supplies it).

**The manifest is the scope of record (owner, 2026-08-02).** An item already
carrying both component-provenance tags was tagged, audited, and judged at
authoring and is deliberately absent from your manifest: do **not** audit,
retag, or ledger it, even when it sits on a page beside your in-scope items.
You still read such an item whenever it is a dependency target of an in-scope
citation — reading a verified target is citation checking, not re-auditing.

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
in `research/audit/wave8-topology.provenance.jsonl`:

```json
{"id":"...","statement":"...","proof":"...","evidence":"...","urls":["..."],"rationale":"...","alpha_concurred":false,"at":"<date>"}
```

| you found | `provenance.statement` | `evidence` | obligations |
|---|---|---|---|
| the exact statement (same hypotheses, quantifiers, direction, conventions) | `literature-derived` | `exact-source` | working URL into `sources.references` |
| a semantically identical statement, differently worded/notated | `ai-altered` | `semantic-source` | working URL into `sources.references`; convention deltas in the rationale |
| nothing semantically identical AND you positively judge the claim genuinely AI-invented (bespoke witness/example, invented bridge claim, composition with no recognizable counterpart in established mathematics) | `ai-generated` | `none` | truth-risk route below; rationale must say why the claim is novel, not just unsourced |
| you are confident it is an established standard result but no source surfaced after a real search | `ai-altered` **without URL** | `established-knowledge` | valid only after Alpha's independent concurrence (`alpha_concurred: true`); until then it is `ai-generated` |
| trivially true: directly verifiable from its stated dependencies | `ai-generated` | `trivial` | record the verification in the rationale |

`provenance.proof` independently: `literature-derived` (follows a sourced
proof, URL), `ai-altered` (adapted from a sourced argument), `ai-generated`
(locally invented — the expected default here), `not-supplied`, or
`not-applicable`. A repaired proof never establishes its Statement; proof
provenance never changes dependency eligibility.

Hard rules: **`ai-generated` requires a positive determination (owner,
2026-08-02): tag a statement `ai-generated` only when you are absolutely sure
it is genuinely AI-invented, never merely because a source failed to surface.**
A recoverable restatement or alteration of an established result is
`ai-altered` even without a URL (`established-knowledge`, Alpha concurrence).
If you genuinely cannot decide between recoverable and invented, do not
default either way — record the evidence and escalate the item to Alpha in
your findings file. Uncertainty still never falls toward a *sourced* label:
`exact-source`/`semantic-source` require a located, verified source. An
`ai-generated` statement is the truth-risk flag: on any concrete doubt,
search for a counterexample before accepting the item. Every URL you record
must return HTTP 200. Delete the legacy one-axis `authorship`
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
   decision D1) in `research/audit/wave8-topology.proof-contracts.json`:
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

Snapshot `touchlog` at the right granularity (measured, wave 2, 2026-08-04). A
**material repair** takes its own dedicated snapshot before its first edit, named
for the item — that is what anchors its `impact-audit` baseline. A **bulk
pure-retag pass**, where nothing but frontmatter provenance and
`sources.references` changes, takes **one stage snapshot for the pass**, not one
per item: `pre-A4` and `post-A4` already bracket exactly that work.

This is not a style preference. Every snapshot stores a hash for **every item in
the corpus**, so wave 2's 267 per-item A4 snapshots produced a **95 MB** ledger
(pruned to 6.4 MB) and made `touchlog report` announce 51 items "repaired more
than once" when the true count was zero — a phantom that cost an Alpha
escalation to disprove. Waves 0, 1 and 1b used stage snapshots and stayed under
17 MB.
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
`research/audit/wave8-topology.provenance.jsonl`, `.findings.md`,
`.proof-contracts.json` — plus, at A4, the approved item repairs themselves.
Report to Alpha: every item classified with its evidence class; every defect
found; every repair applied; unresolved concerns; and an explicit coverage
statement that every proof step and every dependency citation in your pairs
was read, or naming the exception.


---

# This dispatch

Complete only published-audit steps A1 and A2 for the manifest
`research/audit/wave8-topology.pages.json`.

Read all canonical instructions and the substituted Audit-Beta brief in full.
This assignment owns exactly the A/B pair in that manifest. It must read all 32
scoped items, every proof step, every declared dependency target needed to
verify citation semantics, Remarks, and the A-page summary. Perform real
reputable-literature searches for each provenance determination. Produce one
ledger row per scoped item, full strict contracts for all 24 proof-bearing
items, and a findings/proposal register with an explicit no-exception coverage
statement or named exceptions.

This is the proposal stage: do not edit any item or page and do not apply a
repair. Write only:

- `research/audit/wave8-topology.provenance.jsonl`
- `research/audit/wave8-topology.findings.md`
- `research/audit/wave8-topology.proof-contracts.json`

Do not write RESUME, shared/global artifacts, or another batch's files. Use
apply_patch for edits. Do not ask for shell-command or edit permission. Do not
spawn subagents. End with exact ledger/contract counts and proposed repairs.
