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

## Assigned repair — `thm-uniformizable-iff-completely-regular`

Item path: `items/thm-uniformizable-iff-completely-regular.md`

Normalized final-text SHA-256 at dispatch: `dccd58b925d3439023bf282e404e0e076df6ee29157e1a14c3c2308cb2cef3f2`

Split reasons: ["body text","title"]

Provenance ledger: `wave7-topology-uniform.provenance.jsonl`

The four Wave 7 findings ledgers on disk record the original defect and Beta's repair. Locate this id there before certifying.

Read the current target from disk and every dependency needed to check the repair. The generated manifest rows are supplied only as a completeness checklist:

```json
[
  {
    "source": "thm-uniformizable-iff-completely-regular",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-uniformizable-spaces-are-completely-regular",
    "declared_target": "lem-uniformizable-spaces-are-completely-regular",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-uniformizable-iff-completely-regular",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-completely-regular-topologies-come-from-continuous-pseudometrics",
    "declared_target": "lem-completely-regular-topologies-come-from-continuous-pseudometrics",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-uniformizable-iff-completely-regular",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-uniformizable-space",
    "declared_target": "def-uniformizable-space",
    "target_statement_provenance": "literature-derived",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-uniformizable-iff-completely-regular",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-dependent-choice",
    "declared_target": "def-dependent-choice",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness-in-metric-spaces",
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
id: thm-uniformizable-iff-completely-regular
kind: theorem
title: "Assuming dependent choice, a nonempty topological space is uniformizable if and only if it is completely regular"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-uniformizable-spaces-are-completely-regular, lem-completely-regular-topologies-come-from-continuous-pseudometrics, def-uniformizable-space, def-dependent-choice]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "M. Kunzinger, General Topology", url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"}, {title: "M. Megrelishvili, Lecture Notes in Topological Groups", url: "https://u.math.biu.ac.il/~megereli/TGrNotes070217.pdf"}]
pipeline_run: null
---

## Statement

**Assuming dependent choice,** a nonempty topological space is uniformizable if and only if it is completely regular.

## Facts & Assumptions

**Given:** A nonempty topological space and dependent choice.

[L1] Under dependent choice, uniformizable spaces are completely regular ([[lem-uniformizable-spaces-are-completely-regular]]).

[L2] A completely regular topology is induced by its gauge of continuous pseudometrics ([[lem-completely-regular-topologies-come-from-continuous-pseudometrics]]).

[L3] Uniformizable means induced by some uniformity ([[def-uniformizable-space]]).

## Proof

**Proof technique:** direct.

1.1 The forward implication is [L1]. [L1]

1.2 The gauge supplied by [L2] is a uniformity inducing the given topology, so the reverse implication is [L2] and [L3]. [L2, L3]

2.1 The two implications prove the equivalence under dependent choice. [step 1.1, step 1.2] ∎
````
