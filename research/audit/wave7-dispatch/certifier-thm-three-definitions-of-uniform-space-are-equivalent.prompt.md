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

## Assigned repair — `thm-three-definitions-of-uniform-space-are-equivalent`

Item path: `items/thm-three-definitions-of-uniform-space-are-equivalent.md`

Normalized final-text SHA-256 at dispatch: `9123ebdf2b12179eff9446a1fe3fa6d1d2f7c8215b65c61c1303bdd55e98f537`

Split reasons: ["body text","title"]

Provenance ledger: `wave7-topology-uniform.provenance.jsonl`

The four Wave 7 findings ledgers on disk record the original defect and Beta's repair. Locate this id there before certifying.

Read the current target from disk and every dependency needed to check the repair. The generated manifest rows are supplied only as a completeness checklist:

```json
[
  {
    "source": "thm-three-definitions-of-uniform-space-are-equivalent",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-entourage-and-uniform-cover-dictionary",
    "declared_target": "lem-entourage-and-uniform-cover-dictionary",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-three-definitions-of-uniform-space-are-equivalent",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "thm-entourage-uniformities-are-generated-by-gauges",
    "declared_target": "thm-entourage-uniformities-are-generated-by-gauges",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-three-definitions-of-uniform-space-are-equivalent",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-gauge-of-pseudometrics",
    "declared_target": "def-gauge-of-pseudometrics",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-three-definitions-of-uniform-space-are-equivalent",
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
id: thm-three-definitions-of-uniform-space-are-equivalent
kind: theorem
title: "On a nonempty set, entourages and uniform covers give equivalent definitions of a uniform space in ZF, and under dependent choice they are also equivalent to gauges of pseudometrics"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-entourage-and-uniform-cover-dictionary, thm-entourage-uniformities-are-generated-by-gauges, def-gauge-of-pseudometrics, def-dependent-choice]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "Encyclopedia of Mathematics, Uniform space", url: "https://encyclopediaofmath.org/wiki/Uniform_space"}, {title: "M. Kunzinger, General Topology", url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"}]
pipeline_run: null
---

## Statement

In ZF, on a nonempty set, the entourage and uniform-cover formulations determine each other. Assuming dependent choice, they are also equivalent to the formulation by gauges of pseudometrics.

## Facts & Assumptions

**Given:** A uniform structure on a nonempty set $X$ in any one of the named formulations.

[L1] Entourage uniformities and uniform-cover structures determine each other in ZF ([[lem-entourage-and-uniform-cover-dictionary]]).

[L2] Under dependent choice every entourage uniformity is generated by a gauge of uniformly continuous pseudometrics ([[thm-entourage-uniformities-are-generated-by-gauges]]).

[L3] A gauge itself generates an entourage uniformity ([[def-gauge-of-pseudometrics]]).

## Proof

**Proof technique:** direct.

1.1 The equivalence between entourages and covers is exactly [L1] and uses no choice principle. [L1]

1.2 Assuming dependent choice, [L2] sends an entourage uniformity to a gauge and [L3] sends every gauge back to an entourage uniformity. [L2, L3]

2.1 Thus the first two formulations are equivalent in ZF and all three are equivalent under the displayed assumption. [step 1.1, step 1.2] ∎
````
