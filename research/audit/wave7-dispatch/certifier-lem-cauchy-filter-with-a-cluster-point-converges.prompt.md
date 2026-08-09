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

## Assigned repair — `lem-cauchy-filter-with-a-cluster-point-converges`

Item path: `items/lem-cauchy-filter-with-a-cluster-point-converges.md`

Normalized final-text SHA-256 at dispatch: `37ef91139d3f526c94b10c3ea38097b354adbe4a174f7dfbca531813bd8f147e`

Split reasons: ["body text","deps"]

Provenance ledger: `wave7-topology-uniform.provenance.jsonl`

The four Wave 7 findings ledgers on disk record the original defect and Beta's repair. Locate this id there before certifying.

Read the current target from disk and every dependency needed to check the repair. The generated manifest rows are supplied only as a completeness checklist:

```json
[
  {
    "source": "lem-cauchy-filter-with-a-cluster-point-converges",
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
    "source": "lem-cauchy-filter-with-a-cluster-point-converges",
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
    "source": "lem-cauchy-filter-with-a-cluster-point-converges",
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
  },
  {
    "source": "lem-cauchy-filter-with-a-cluster-point-converges",
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
  }
]
```

For a byte-exact cross-check, the current item at dispatch was:

````markdown
---
id: lem-cauchy-filter-with-a-cluster-point-converges
kind: lemma
title: "A Cauchy filter with a cluster point converges to that point"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cauchy-filter-in-a-uniform-space, def-filter-convergence-and-cluster-point, lem-symmetric-entourages-form-a-base, thm-uniformity-induces-a-topology]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}]
pipeline_run: null
---

## Statement

A Cauchy filter on a uniform space with a cluster point $x$ converges to $x$.

## Facts & Assumptions

**Given:** A Cauchy filter $\mathcal F$ and one of its cluster points $x$.

[L1] A cluster point meets every filter member in every neighbourhood, while convergence means containment of every neighbourhood ([[def-filter-convergence-and-cluster-point]]).

[L2] Cauchy filters have small members, and symmetric entourages have symmetric square roots ([[def-cauchy-filter-in-a-uniform-space]], [[lem-symmetric-entourages-form-a-base]]).

[L3] For the topology induced by a uniformity, every entourage ball $D[x]$ is a neighbourhood of $x$ ([[thm-uniformity-induces-a-topology]]).

## Proof

**Proof technique:** direct.

1.1 Let $E$ be an entourage and choose symmetric $D$ with $D\circ D\subseteq E$; choose $A\in\mathcal F$ with $A\times A\subseteq D$. [L2, choose]

1.2 The ball $D[x]$ is a neighbourhood of $x$, so it meets $A$ because $x$ is a cluster point; fix $a\in A\cap D[x]$. [L1, L3, choose]

2.1 For every $b\in A$, symmetry gives $(x,a)\in D$ and smallness gives $(a,b)\in D$, hence $(x,b)\in E$; so $A\subseteq E[x]$. [step 1.1, step 1.2]

3.1 Every entourage ball about $x$ belongs to $\mathcal F$ by upward closure, and such balls form a neighbourhood base at $x$, so $\mathcal F$ converges to $x$. [step 2.1, L1, L3] ∎
````
