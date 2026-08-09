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

## Assigned repair — `lem-convergent-filters-are-cauchy`

Item path: `items/lem-convergent-filters-are-cauchy.md`

Normalized final-text SHA-256 at dispatch: `5a42a027eb9a01b7a29d29c6a5346d3086d9f378713dd46766c5d1b37a00ad74`

Split reasons: ["body text","deps"]

Provenance ledger: `wave7-topology-uniform.provenance.jsonl`

The four Wave 7 findings ledgers on disk record the original defect and Beta's repair. Locate this id there before certifying.

Read the current target from disk and every dependency needed to check the repair. The generated manifest rows are supplied only as a completeness checklist:

```json
[
  {
    "source": "lem-convergent-filters-are-cauchy",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-uniform-space-by-entourages",
    "declared_target": "def-uniform-space-by-entourages",
    "target_statement_provenance": "literature-derived",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-convergent-filters-are-cauchy",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-cauchy-filter-in-a-uniform-space",
    "declared_target": "def-cauchy-filter-in-a-uniform-space",
    "target_statement_provenance": "literature-derived",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-convergent-filters-are-cauchy",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-filter-convergence-and-cluster-point",
    "declared_target": "def-filter-convergence-and-cluster-point",
    "target_statement_provenance": "literature-derived",
    "targetPage": "nets-and-filters",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-convergent-filters-are-cauchy",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "thm-uniformity-induces-a-topology",
    "declared_target": "thm-uniformity-induces-a-topology",
    "target_statement_provenance": "literature-derived",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-convergent-filters-are-cauchy",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-symmetric-entourages-form-a-base",
    "declared_target": "lem-symmetric-entourages-form-a-base",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  }
]
```

For a byte-exact cross-check, the current item at dispatch was:

````markdown
---
id: lem-convergent-filters-are-cauchy
kind: lemma
title: "Every convergent filter on a uniform space is Cauchy"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-uniform-space-by-entourages, def-cauchy-filter-in-a-uniform-space, def-filter-convergence-and-cluster-point, thm-uniformity-induces-a-topology, lem-symmetric-entourages-form-a-base]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}]
pipeline_run: null
---

## Statement

Every filter converging in the induced topology of a uniform space is Cauchy.

## Facts & Assumptions

**Given:** A filter $\mathcal F$ converging to $x$ in a uniform space.

[L1] Filter convergence means that every neighbourhood of the limit belongs to the filter ([[def-filter-convergence-and-cluster-point]]).

[L2] Entourage balls form neighbourhood bases, and every entourage has a symmetric square root ([[thm-uniformity-induces-a-topology]], [[def-uniform-space-by-entourages]], [[lem-symmetric-entourages-form-a-base]]).

[L3] A Cauchy filter has an $E$-small member for every entourage $E$ ([[def-cauchy-filter-in-a-uniform-space]]).

## Proof

**Proof technique:** direct.

1.1 Let $E$ be an entourage and choose a symmetric entourage $D$ with $D\circ D\subseteq E$. [L2, choose]

1.2 The neighbourhood $D[x]$ belongs to $\mathcal F$ by convergence. [L1, L2]

2.1 Since $D$ is symmetric, $D[x]\times D[x]\subseteq D^{-1}\circ D=D\circ D\subseteq E$, so $D[x]$ is $E$-small. [step 1.1, step 1.2]

3.1 As $E$ was arbitrary, $\mathcal F$ is Cauchy by [L3]. [step 2.1, L3] ∎
````
