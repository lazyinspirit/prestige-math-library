## Assigned repair — `ex-r-and-open-interval-homeomorphic-not-uniformly-isomorphic`

Item path: `items/ex-r-and-open-interval-homeomorphic-not-uniformly-isomorphic.md`

Normalized final-text SHA-256 at dispatch: `f6428e8c0466ce9eae09c2a434847bbf041e8ec8a72061700aa3c6d111d273c3`

Split reasons: ["body text","deps"]

Provenance ledger: `wave7-topology-uniform.provenance.jsonl`

The four Wave 7 findings ledgers on disk record the original defect and Beta's repair. Locate this id there before certifying.

Read the current target from disk and every dependency needed to check the repair. The generated manifest rows are supplied only as a completeness checklist:

```json
[
  {
    "source": "ex-r-and-open-interval-homeomorphic-not-uniformly-isomorphic",
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
  },
  {
    "source": "ex-r-and-open-interval-homeomorphic-not-uniformly-isomorphic",
    "sourcePage": "uniform-spaces-examples",
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
    "source": "ex-r-and-open-interval-homeomorphic-not-uniformly-isomorphic",
    "sourcePage": "uniform-spaces-examples",
    "batch": "wave7-topology-uniform",
    "target": "def-homeomorphism-and-open-maps",
    "declared_target": "def-homeomorphism-and-open-maps",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-r-and-open-interval-homeomorphic-not-uniformly-isomorphic",
    "sourcePage": "uniform-spaces-examples",
    "batch": "wave7-topology-uniform",
    "target": "lem-of-abs-value",
    "declared_target": "lem-of-abs-value",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-r-and-open-interval-homeomorphic-not-uniformly-isomorphic",
    "sourcePage": "uniform-spaces-examples",
    "batch": "wave7-topology-uniform",
    "target": "cor-archimedean-reciprocal",
    "declared_target": "cor-archimedean-reciprocal",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-r-and-open-interval-homeomorphic-not-uniformly-isomorphic",
    "sourcePage": "uniform-spaces-examples",
    "batch": "wave7-topology-uniform",
    "target": "lem-of-triangle-inequality",
    "declared_target": "lem-of-triangle-inequality",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
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
id: ex-r-and-open-interval-homeomorphic-not-uniformly-isomorphic
kind: example
title: "The map $x\\mapsto x/(1+|x|)$ is a uniformly continuous homeomorphism from $\\mathbb{R}$ to $(-1,1)$ whose inverse is not uniformly continuous"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-metric-uniformity-dictionary, def-uniform-embedding-and-uniform-isomorphism, def-homeomorphism-and-open-maps, lem-of-abs-value, cor-archimedean-reciprocal, lem-of-triangle-inequality]
aliases: []
landmark: false
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
  references: []
pipeline_run: null
---

## Example

The function $h(x)=x/(1+|x|)$ maps $\mathbb R$ onto $(-1,1)$ with inverse $h^{-1}(t)=t/(1-|t|)$. It is uniformly continuous, but its inverse is not.

## Facts & Assumptions

**Given:** The usual metric uniformities on $\mathbb R$ and $(-1,1)$.

[L1] The metric dictionary translates metric uniform continuity into uniform continuity ([[lem-metric-uniformity-dictionary]]).

[L2] Absolute value is nonnegative ([[lem-of-abs-value]]) and satisfies the triangle inequality ([[lem-of-triangle-inequality]]).

[L3] The reciprocal form of the Archimedean property says that $1/n\to0$ ([[cor-archimedean-reciprocal]]).

## Verification

**Proof technique:** direct.

1.1 Direct algebra gives $|h(x)-h(y)|\le2|x-y|$, so $h$ is uniformly continuous; its displayed inverse and the usual open-interval formulas make it a homeomorphism. [L1, L2]

1.2 Put $a_n=n/(n+1)$ and $b_n=(n+1)/(n+2)$. Then $|a_n-b_n|\to0$, while $|h^{-1}(a_n)-h^{-1}(b_n)|=1$. [L2, L3]

2.1 Thus $h^{-1}$ is not uniformly continuous, so this homeomorphism is not a uniform isomorphism ([[def-uniform-embedding-and-uniform-isomorphism]], [[def-homeomorphism-and-open-maps]]). [step 1.1, step 1.2] ∎
````
