# Independent repair certifier brief — Wave 7, step A6

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on every current
> and future agent.** Use commands already allowed inside the workspace sandbox;
> choose non-escalated forms and never ask the owner to approve a shell command.
> If an indispensable operation has no escalation-free form, report a blocker.

You are **GPT 5.6 Terra** at `xhigh` effort with a 1,000,000-token context
window. You are an independent, read-only certifier of one Audit-Beta repair.
You did not author it. You have `Read`/`Glob`/`Grep`/`WebSearch`/`WebFetch` and
nothing else: do not edit, delegate, ask for a shell permission, or claim to
have run a command.

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

## Assigned repair — `cor-separated-uniformizable-iff-tychonoff`

Item path: `items/cor-separated-uniformizable-iff-tychonoff.md`

Normalized final-text SHA-256 at dispatch: `06aa1e80d51c689d9b1515af020d2f3c952726e4d26fe98c73501fa51c9fa571`

Split reasons: ["body text","title","deps"]

Provenance ledger: `wave7-topology-uniform.provenance.jsonl`

The four Wave 7 findings ledgers on disk record the original defect and Beta's repair. Locate this id there before certifying.

Read the current target from disk and every dependency needed to check the repair. The generated manifest rows are supplied only as a completeness checklist:

```json
[
  {
    "source": "cor-separated-uniformizable-iff-tychonoff",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "thm-uniformizable-iff-completely-regular",
    "declared_target": "thm-uniformizable-iff-completely-regular",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-separated-uniformizable-iff-tychonoff",
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
    "source": "cor-separated-uniformizable-iff-tychonoff",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-completely-regular-and-tychonoff-spaces",
    "declared_target": "def-completely-regular-and-tychonoff-spaces",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-separated-uniformizable-iff-tychonoff",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-t0-and-t1-spaces",
    "declared_target": "def-t0-and-t1-spaces",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-separated-uniformizable-iff-tychonoff",
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
  },
  {
    "source": "cor-separated-uniformizable-iff-tychonoff",
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
    "source": "cor-separated-uniformizable-iff-tychonoff",
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
    "source": "cor-separated-uniformizable-iff-tychonoff",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-urysohn-sits-between-hausdorff-and-regular-plus-t1",
    "declared_target": "lem-urysohn-sits-between-hausdorff-and-regular-plus-t1",
    "target_statement_provenance": "ai-altered",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-separated-uniformizable-iff-tychonoff",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "thm-t1-iff-singletons-are-closed",
    "declared_target": "thm-t1-iff-singletons-are-closed",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
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
id: cor-separated-uniformizable-iff-tychonoff
kind: corollary
title: "Assuming dependent choice, a nonempty topological space is separated-uniformizable if and only if it is Tychonoff"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-uniformizable-iff-completely-regular, thm-separated-uniformity-iff-induced-topology-is-hausdorff, def-completely-regular-and-tychonoff-spaces, def-t0-and-t1-spaces, def-dependent-choice, lem-completely-regular-topologies-come-from-continuous-pseudometrics, def-gauge-of-pseudometrics, lem-urysohn-sits-between-hausdorff-and-regular-plus-t1, thm-t1-iff-singletons-are-closed]
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

**Assuming dependent choice,** a nonempty topological space is separated-uniformizable if and only if it is Tychonoff.

## Facts & Assumptions

**Given:** A nonempty topological space and dependent choice.

[L1] Uniformizable is equivalent to completely regular under dependent choice ([[thm-uniformizable-iff-completely-regular]]).

[L2] A separated compatible uniformity induces a Hausdorff topology ([[thm-separated-uniformity-iff-induced-topology-is-hausdorff]]).

[L3] Tychonoff means completely regular plus $T_1$ ([[def-completely-regular-and-tychonoff-spaces]], [[def-t0-and-t1-spaces]]).

[L4] A completely regular topology is induced by the gauge $p_f(x,y)=|f(x)-f(y)|$ over all continuous $f:X\to[0,1]$ ([[lem-completely-regular-topologies-come-from-continuous-pseudometrics]], [[def-gauge-of-pseudometrics]]).

[L5] Every Hausdorff space is $T_1$ ([[lem-urysohn-sits-between-hausdorff-and-regular-plus-t1]], clause 2).

[L6] In a $T_1$ space every singleton is closed ([[thm-t1-iff-singletons-are-closed]], clause (b)).

## Proof

**Proof technique:** direct.

1.1 A separated-uniformizable space is completely regular by [L1] and Hausdorff by [L2], hence $T_1$ by [L5] and therefore Tychonoff by [L3]. [L1, L2, L3, L5]

1.2 Conversely, let $X$ be Tychonoff. For $x\ne y$, the singleton $\{y\}$ is closed by [L6], and complete regularity gives a continuous $f:X\to[0,1]$ with $f(x)=1$ and $f(y)=0$. Thus the gauge in [L4] has an entourage excluding $(x,y)$, so its intersection is the diagonal and it is separated. It induces the original topology by [L4]. [L3, L4, L6]

2.1 Thus it is separated-uniformizable, proving the converse and the equivalence. [step 1.2] ∎
````
