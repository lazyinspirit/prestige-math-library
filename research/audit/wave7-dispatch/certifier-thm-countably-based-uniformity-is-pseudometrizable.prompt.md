# Independent repair certifier brief — Wave 7, step A6

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on every current
> and future agent.** Use commands already allowed inside the workspace sandbox;
> choose non-escalated forms and never ask the owner to approve a shell command.
> If an indispensable operation has no escalation-free form, report a blocker.

You are **GPT 5.6 Terra** at `xhigh` effort with a 1,000,000-token context
window. You are an independent, read-only certifier of one Audit-Beta repair.
You did not author it. Your Codex lane has a mechanically read-only shell: use
non-mutating commands such as `rg`, `sed`, and `git diff` to read the current
workspace and use web access where a source check is material. Do not edit,
delegate, escalate, or ask for a shell permission. Shell reads already allowed
inside the read-only sandbox require no owner approval.

## Triage — the standing rule (verbatim, binding on you)

- **Non-negotiable:** mathematical accuracy, logical validity, correct
  citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes **within 30 seconds**; other non-fatal quirks;
  imperfection at the level of the letter.

Read the assigned item's **current final text from disk**, not merely its task
summary. Read each dependency relevant to the repaired inference. Check the
title and public statement, every numbered step, Facts & Assumptions, Remarks,
dependency lists, provenance tags, and verification block. Where an exact
external source is material, use web access to check that source. Confirm that
stale pre-repair `verification.judge`/`verification.audited` evidence is absent
and that the stated repair fixes its named defect without introducing a new
one. A passing mechanical gate is supporting evidence, not a mathematical
substitute.

Return exactly:

```text
ITEM: <id>
VERDICT: CERTIFIED | REFUSED | BLOCKED
CURRENT-TEXT: READ
MATHEMATICS: [concise evidence]
CITATIONS: [concise evidence]
METADATA: [provenance/dependencies/stale-verdict disposition]
FINDINGS: NONE | [fatal defect or concrete blocker]
```

Do not suggest optional polishing and do not write a verification stamp. Audit-
Alpha decides whether the independent reading licenses one.


---

# This dispatch

## Assigned repair — `thm-countably-based-uniformity-is-pseudometrizable`

Item path: `items/thm-countably-based-uniformity-is-pseudometrizable.md`

Normalized final-text SHA-256 at dispatch: `5711f269016750ca796e5b5cfdccf4a5e8a2557cc3c695fb6c228b803803d8d4`

Split reasons: ["body text","deps"]

Provenance ledger: `wave7-topology-uniform.provenance.jsonl`

The four Wave 7 findings ledgers on disk record the original defect and Beta's repair. Locate this id there before certifying.

Read the current target from disk and every dependency needed to check the repair. The generated manifest rows are supplied only as a completeness checklist:

```json
[
  {
    "source": "thm-countably-based-uniformity-is-pseudometrizable",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-countable-uniform-base-normalisation",
    "declared_target": "lem-countable-uniform-base-normalisation",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-countably-based-uniformity-is-pseudometrizable",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-pseudometric-from-a-normal-entourage-sequence",
    "declared_target": "lem-pseudometric-from-a-normal-entourage-sequence",
    "target_statement_provenance": "literature-derived",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-countably-based-uniformity-is-pseudometrizable",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-separated-uniform-space",
    "declared_target": "def-separated-uniform-space",
    "target_statement_provenance": "literature-derived",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-countably-based-uniformity-is-pseudometrizable",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-metric-uniformity-dictionary",
    "declared_target": "lem-metric-uniformity-dictionary",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-countably-based-uniformity-is-pseudometrizable",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-metric-space",
    "declared_target": "def-metric-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

For a byte-exact cross-check, the current item at dispatch was:

````markdown
---
id: thm-countably-based-uniformity-is-pseudometrizable
kind: theorem
title: "Every countably based uniformity is generated by one pseudometric, which is a metric exactly when the uniformity is separated"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-countable-uniform-base-normalisation, lem-pseudometric-from-a-normal-entourage-sequence, def-separated-uniform-space, lem-metric-uniformity-dictionary, def-metric-space]
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "M. Kunzinger, General Topology", url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"}, {title: "M. Megrelishvili, Lecture Notes in Topological Groups", url: "https://u.math.biu.ac.il/~megereli/TGrNotes070217.pdf"}]
pipeline_run: null
---

## Statement

Every countably based uniformity is generated by one pseudometric. That pseudometric is a metric exactly when the uniformity is separated.

## Facts & Assumptions

**Given:** A countably based uniformity $\mathcal U$.

[L1] In ZF it has a decreasing normal symmetric base ([[lem-countable-uniform-base-normalisation]]).

[L2] A normal sequence yields a pseudometric with balls cofinal in the sequence ([[lem-pseudometric-from-a-normal-entourage-sequence]]).

[L3] A metric uniformity is separated ([[lem-metric-uniformity-dictionary]], [[def-separated-uniform-space]]), and a pseudometric is a metric exactly when its zero pairs are diagonal ([[def-metric-space]]).

## Proof

**Proof technique:** constructive.

1.1 Apply [L1] and [L2] to obtain a pseudometric $p$ whose dyadic balls are cofinal in $\mathcal U$. [L1, L2, construct]

2.1 Cofinality means that the uniformity generated by $p$ is exactly $\mathcal U$. [step 1.1]

3.1 The zero pairs of $p$ are the intersection of its dyadic entourages, so they are diagonal exactly when $\mathcal U$ is separated; by [L3] this is exactly when $p$ is a metric. [step 2.1, L3]

4.1 This proves both assertions. [step 2.1, step 3.1, discharge-construct] ∎
````
