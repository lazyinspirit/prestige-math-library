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

## Assigned repair — `ex-pointwise-but-not-uniform-convergence-on-a-countable-domain`

Item path: `items/ex-pointwise-but-not-uniform-convergence-on-a-countable-domain.md`

Normalized final-text SHA-256 at dispatch: `7a788ae9b7d30951a9cd6e8ca575235b56e13e341b060c8e6a8745dcf25fae5b`

Split reasons: ["body text","deps"]

Provenance ledger: `wave7-topology-uniform.provenance.jsonl`

The four Wave 7 findings ledgers on disk record the original defect and Beta's repair. Locate this id there before certifying.

Read the current target from disk and every dependency needed to check the repair. The generated manifest rows are supplied only as a completeness checklist:

```json
[
  {
    "source": "ex-pointwise-but-not-uniform-convergence-on-a-countable-domain",
    "sourcePage": "uniform-spaces-examples",
    "batch": "wave7-topology-uniform",
    "target": "def-pointwise-and-uniform-convergence-uniformities",
    "declared_target": "def-pointwise-and-uniform-convergence-uniformities",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-pointwise-but-not-uniform-convergence-on-a-countable-domain",
    "sourcePage": "uniform-spaces-examples",
    "batch": "wave7-topology-uniform",
    "target": "lem-uniform-convergence-uniformity-is-finer-than-pointwise",
    "declared_target": "lem-uniform-convergence-uniformity-is-finer-than-pointwise",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-pointwise-but-not-uniform-convergence-on-a-countable-domain",
    "sourcePage": "uniform-spaces-examples",
    "batch": "wave7-topology-uniform",
    "target": "def-standard-topologies",
    "declared_target": "def-standard-topologies",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-pointwise-but-not-uniform-convergence-on-a-countable-domain",
    "sourcePage": "uniform-spaces-examples",
    "batch": "wave7-topology-uniform",
    "target": "def-sequence-convergence-top",
    "declared_target": "def-sequence-convergence-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-pointwise-but-not-uniform-convergence-on-a-countable-domain",
    "sourcePage": "uniform-spaces-examples",
    "batch": "wave7-topology-uniform",
    "target": "def-metric-space",
    "declared_target": "def-metric-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-pointwise-but-not-uniform-convergence-on-a-countable-domain",
    "sourcePage": "uniform-spaces-examples",
    "batch": "wave7-topology-uniform",
    "target": "lem-metric-uniformity-dictionary",
    "declared_target": "lem-metric-uniformity-dictionary",
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
id: ex-pointwise-but-not-uniform-convergence-on-a-countable-domain
kind: example
title: "The functions $f_n(k)=1$ for $k\\ge n$ and $0$ otherwise converge pointwise but not uniformly on $\\mathbb{N}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pointwise-and-uniform-convergence-uniformities, lem-uniform-convergence-uniformity-is-finer-than-pointwise, def-standard-topologies, def-sequence-convergence-top, def-metric-space, lem-metric-uniformity-dictionary]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Give $\{0,1\}$ the uniformity of its zero-one metric. For $n,k\in\mathbb N$, let $f_n(k)=1$ when $k\ge n$ and $f_n(k)=0$ otherwise. Then $f_n$ converges pointwise, but not uniformly, to the zero function.

## Facts & Assumptions

**Given:** The function set $\{0,1\}^{\mathbb N}$.

[L1] For $d(u,v)=0$ when $u=v$ and $d(u,v)=1$ otherwise, separation and symmetry are immediate, while the triangle inequality follows because $u\ne w$ forces $u\ne v$ or $v\ne w$. Thus $d$ is a metric; its radius-$1/2$ balls are singletons, so its topology is discrete, and its radius-$1/2$ entourage is equality ([[def-metric-space]], [[lem-metric-uniformity-dictionary]], [[def-standard-topologies]]).

[L2] Pointwise and uniform convergence are the two function-space uniformities of [[def-pointwise-and-uniform-convergence-uniformities]].

[L3] Sequence convergence means eventual membership in every neighbourhood ([[def-sequence-convergence-top]]).

## Verification

**Proof technique:** direct.

1.1 For fixed $k$, all $n>k$ have $f_n(k)=0$, so the coordinate sequence converges to $0$. [L1, L3]

1.2 For every $n$, $f_n(n)=1$, so $f_n$ is not in the uniform entourage induced by equality on $\{0,1\}$. [L1, L2]

2.1 Thus $f_n$ converges pointwise to zero by [L2]. [step 1.1, L2]

3.1 Hence convergence is not uniform. [step 1.2] ∎
````
