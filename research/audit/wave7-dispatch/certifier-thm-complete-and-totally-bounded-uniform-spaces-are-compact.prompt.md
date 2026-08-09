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

## Assigned repair — `thm-complete-and-totally-bounded-uniform-spaces-are-compact`

Item path: `items/thm-complete-and-totally-bounded-uniform-spaces-are-compact.md`

Normalized final-text SHA-256 at dispatch: `91d26633a9e3b832d3c2dde737fc2c70afd8167422362a9a561d0f6cea594bda`

Split reasons: ["body text","deps"]

Provenance ledger: `wave7-topology-uniform.provenance.jsonl`

The four Wave 7 findings ledgers on disk record the original defect and Beta's repair. Locate this id there before certifying.

Read the current target from disk and every dependency needed to check the repair. The generated manifest rows are supplied only as a completeness checklist:

```json
[
  {
    "source": "thm-complete-and-totally-bounded-uniform-spaces-are-compact",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-ultrafilters-on-totally-bounded-uniform-spaces-are-cauchy",
    "declared_target": "lem-ultrafilters-on-totally-bounded-uniform-spaces-are-cauchy",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-complete-and-totally-bounded-uniform-spaces-are-compact",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-complete-uniform-space",
    "declared_target": "def-complete-uniform-space",
    "target_statement_provenance": "literature-derived",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-complete-and-totally-bounded-uniform-spaces-are-compact",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "thm-compactness-via-nets-filters-and-ultrafilters",
    "declared_target": "thm-compactness-via-nets-filters-and-ultrafilters",
    "target_statement_provenance": "ai-altered",
    "targetPage": "nets-and-filters",
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
id: thm-complete-and-totally-bounded-uniform-spaces-are-compact
kind: theorem
title: "Assuming the ultrafilter lemma, every complete and totally bounded uniform space is compact"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-ultrafilters-on-totally-bounded-uniform-spaces-are-cauchy, def-complete-uniform-space, thm-compactness-via-nets-filters-and-ultrafilters]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "Encyclopedia of Mathematics, Uniform space", url: "https://encyclopediaofmath.org/wiki/Uniform_space"}]
pipeline_run: null
---

## Statement

**Assume the ultrafilter lemma.** Every complete and totally bounded uniform space is compact.

## Facts & Assumptions

**Given:** A complete, totally bounded uniform space $X$ and the ultrafilter lemma.

[L1] Every ultrafilter on a totally bounded uniform space is Cauchy ([[lem-ultrafilters-on-totally-bounded-uniform-spaces-are-cauchy]]).

[L2] Completeness makes every Cauchy filter converge ([[def-complete-uniform-space]]).

[L3] Assuming the ultrafilter lemma, a topological space is compact if and only if every ultrafilter converges ([[thm-compactness-via-nets-filters-and-ultrafilters]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal V$ be an ultrafilter on $X$. It is Cauchy by [L1]. [L1]

2.1 Completeness makes $\mathcal V$ converge by [L2]. [step 1.1, L2]

3.1 Every ultrafilter converges, so $X$ is compact by [L3], under the stated ultrafilter-lemma assumption. [step 2.1, L3] ∎
````
