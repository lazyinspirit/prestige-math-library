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

## Assigned repair — `thm-hausdorff-completion-of-a-uniform-space`

Item path: `items/thm-hausdorff-completion-of-a-uniform-space.md`

Normalized final-text SHA-256 at dispatch: `a321a3ca44e3d81bbe0c125bf4d51238926639548bfa70a23c76c03065bf91ee`

Split reasons: ["body text"]

Provenance ledger: `wave7-topology-uniform.provenance.jsonl`

The four Wave 7 findings ledgers on disk record the original defect and Beta's repair. Locate this id there before certifying.

Read the current target from disk and every dependency needed to check the repair. The generated manifest rows are supplied only as a completeness checklist:

```json
[
  {
    "source": "thm-hausdorff-completion-of-a-uniform-space",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-completion-of-a-uniform-space",
    "declared_target": "def-completion-of-a-uniform-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-hausdorff-completion-of-a-uniform-space",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity",
    "declared_target": "lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-hausdorff-completion-of-a-uniform-space",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-minimal-cauchy-filter-space-is-complete",
    "declared_target": "lem-minimal-cauchy-filter-space-is-complete",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-hausdorff-completion-of-a-uniform-space",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-point-filters-are-dense-in-the-minimal-cauchy-filter-space",
    "declared_target": "lem-point-filters-are-dense-in-the-minimal-cauchy-filter-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-hausdorff-completion-of-a-uniform-space",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-uniform-embedding-and-uniform-isomorphism",
    "declared_target": "def-uniform-embedding-and-uniform-isomorphism",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-hausdorff-completion-of-a-uniform-space",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "thm-separated-uniformity-iff-induced-topology-is-hausdorff",
    "declared_target": "thm-separated-uniformity-iff-induced-topology-is-hausdorff",
    "target_statement_provenance": "literature-derived",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-hausdorff-completion-of-a-uniform-space",
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
id: thm-hausdorff-completion-of-a-uniform-space
kind: theorem
title: "Every uniform space has a complete Hausdorff reflection with dense canonical image, and the canonical map is a uniform embedding exactly when the original uniformity is separated"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-completion-of-a-uniform-space, lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity, lem-minimal-cauchy-filter-space-is-complete, lem-point-filters-are-dense-in-the-minimal-cauchy-filter-space, def-uniform-embedding-and-uniform-isomorphism, thm-separated-uniformity-iff-induced-topology-is-hausdorff, lem-symmetric-entourages-form-a-base]
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "Encyclopedia of Mathematics, Uniform space", url: "https://encyclopediaofmath.org/wiki/Uniform_space"}, {title: "Encyclopedia of Mathematics, Complete uniform space", url: "https://encyclopediaofmath.org/wiki/Complete_uniform_space"}]
pipeline_run: null
---

## Statement

Every uniform space $X$ has a Hausdorff completion $\eta:X\to\widehat X$. The map has dense image, and it is a uniform embedding if and only if the original uniformity is separated.

## Facts & Assumptions

**Given:** A uniform space $X$.

[L1] Minimal Cauchy filters carry a separated uniformity ([[lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity]]) and form a complete space ([[lem-minimal-cauchy-filter-space-is-complete]]).

[L2] Point filters define a uniformly continuous dense map $\eta:X\to\widehat X$, and every member of $\eta(x)$ contains $x$ ([[lem-point-filters-are-dense-in-the-minimal-cauchy-filter-space]]).

[L3] A Hausdorff completion and a uniform embedding have the stated definitions ([[def-completion-of-a-uniform-space]], [[def-uniform-embedding-and-uniform-isomorphism]]).

[L4] Separatedness is equivalent to Hausdorffness of the induced topology ([[thm-separated-uniformity-iff-induced-topology-is-hausdorff]]).

[L5] Symmetric entourages form a base and may be chosen inside any prescribed entourage ([[lem-symmetric-entourages-form-a-base]]).

## Proof

**Proof technique:** constructive.

1.1 Take $\widehat X$ to be the uniform space of minimal Cauchy filters and take $\eta$ from [L2]. [L1, L2, construct]

2.1 It is complete and separated by [L1], and $\eta$ is uniformly continuous with dense image by [L2]. It remains to verify that the pullback uniformity is not strictly coarser than the original one. Given an entourage $E$ of $X$, choose a symmetric $D\subseteq E$. If $(\eta(x),\eta(y))\in\widehat D$, witnesses $A\in\eta(x)$ and $B\in\eta(y)$ satisfy $A\times B\subseteq D$. Every member of the minimal point filter $\eta(x)$ contains $x$, and every member of $\eta(y)$ contains $y$; therefore $(x,y)\in D\subseteq E$. Thus $(\eta\times\eta)^{-1}[\widehat D]\subseteq E$. Together with uniform continuity, this is exactly the pullback condition in [L3], so $\eta$ is a Hausdorff completion. [step 1.1, L1, L2, L3, L5]

3.1 If $\eta(x)=\eta(y)$, step 2.1 puts $(x,y)$ in every entourage of $X$. Conversely, if $(x,y)$ belongs to every entourage of $X$, uniform continuity puts $(\eta(x),\eta(y))$ in every entourage of $\widehat X$; separatedness of $\widehat X$ gives $\eta(x)=\eta(y)$. [step 2.1, L1, L2]

4.1 Step 3.1 says that $\eta$ is injective exactly when $\mathcal U$ is separated. When injective, the two directions of the pullback condition in step 2.1 say precisely that the corestriction $X\to\eta[X]$ and its inverse are uniformly continuous, so $\eta$ is a uniform embedding. Conversely every uniform embedding is injective. [step 2.1, step 3.1, L3, L4]

5.1 This proves the completion assertion and the exact embedding criterion. [step 2.1, step 4.1, discharge-construct] ∎
````
