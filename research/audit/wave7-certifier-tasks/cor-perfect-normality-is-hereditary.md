## Assigned repair — `cor-perfect-normality-is-hereditary`

Item path: `items/cor-perfect-normality-is-hereditary.md`

Normalized final-text SHA-256 at dispatch: `ed05d5603e206d2a0b3614f84c39064e45ea56007745e943eec65d8a8e3ad3f7`

Split reasons: ["body text","deps"]

Provenance ledger: `wave7-topology-separation-urysohn.provenance.jsonl`

The four Wave 7 findings ledgers on disk record the original defect and Beta's repair. Locate this id there before certifying.

Read the current target from disk and every dependency needed to check the repair. The generated manifest rows are supplied only as a completeness checklist:

```json
[
  {
    "source": "cor-perfect-normality-is-hereditary",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-perfectly-normal-implies-completely-normal",
    "declared_target": "thm-perfectly-normal-implies-completely-normal",
    "target_statement_provenance": "ai-altered",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-perfect-normality-is-hereditary",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-completely-normal-iff-hereditarily-normal",
    "declared_target": "thm-completely-normal-iff-hereditarily-normal",
    "target_statement_provenance": "literature-derived",
    "targetPage": "hereditary-and-productive-separation",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-perfect-normality-is-hereditary",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "lem-t0-t1-and-hausdorff-are-hereditary",
    "declared_target": "lem-t0-t1-and-hausdorff-are-hereditary",
    "target_statement_provenance": "ai-altered",
    "targetPage": "hereditary-and-productive-separation",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-perfect-normality-is-hereditary",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-g-delta-and-f-sigma-in-a-topological-space",
    "declared_target": "def-g-delta-and-f-sigma-in-a-topological-space",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-perfect-normality-is-hereditary",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-subspace-topology-top",
    "declared_target": "def-subspace-topology-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-perfect-normality-is-hereditary",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-countable-choice",
    "declared_target": "def-countable-choice",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
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
id: cor-perfect-normality-is-hereditary
kind: corollary
title: "Assuming countable choice, perfect normality, and hence $T_6$, is hereditary"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-perfectly-normal-implies-completely-normal, thm-completely-normal-iff-hereditarily-normal, lem-t0-t1-and-hausdorff-are-hereditary, def-g-delta-and-f-sigma-in-a-topological-space, def-subspace-topology-top, def-countable-choice]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "R. Engelking, General Topology, §1.5"
      url: "https://en.wikipedia.org/wiki/General_topology"
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
pipeline_run: null
---

## Statement

Assuming the Axiom of Countable Choice, perfect normality is hereditary. Consequently $T_6$ is hereditary.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and a subspace $S$ of a perfectly normal space $X$.

[A1] The Axiom of Countable Choice ([[def-countable-choice]]).

[L1] Under [A1], every perfectly normal space is completely normal ([[thm-perfectly-normal-implies-completely-normal]]).

[L2] A space is completely normal exactly when every one of its subspaces is normal; $T_1$ is hereditary ([[thm-completely-normal-iff-hereditarily-normal]], [[lem-t0-t1-and-hausdorff-are-hereditary]]).

[F1] A closed set of $S$ is $C\cap S$ for ambient closed $C$; a $G_\delta$ is a countable intersection of open sets ([[def-subspace-topology-top]], [[def-g-delta-and-f-sigma-in-a-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $X$ is completely normal. Every subspace of $S$ is then a subspace of $X$, hence normal by [L2]; applying [L2] to $S$ shows that $S$ is completely normal. The $T_1$ clause of [L2] also shows that $S$ is $T_1$ when $X$ is $T_6$. [A1, L1, L2]

1.2 Let $F$ be closed in $S$. Write $F=C\cap S$ with $C$ closed in $X$; perfect normality writes $C=\bigcap_{n\in\mathbb N}U_n$ with every $U_n$ open in $X$. [F1]

2.1 Then $F=\bigcap_{n\in\mathbb N}(U_n\cap S)$, a $G_\delta$ of $S$. Thus $S$ is perfectly normal, and with its inherited $T_1$ property it is $T_6$ when $X$ is $T_6$. [F1, step 1.1, step 1.2] ∎
````
