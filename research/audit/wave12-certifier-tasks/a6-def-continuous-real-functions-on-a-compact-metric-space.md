## Assigned exact-final target — `def-continuous-real-functions-on-a-compact-metric-space`

Item path: `items/def-continuous-real-functions-on-a-compact-metric-space.md`

Normalized final-text SHA-256 at dispatch: `54165ab3bad48153a11530d94de02172aa56ecedef96852493469922ffb05c21`

Target type(s): `A6-source-correction`

- A6 removed the failed redundant Lebl draft endpoint; a live semantic source remains

Read the complete current item and every dependency needed for the changed inference or source attribution. For source work, open the retained exact-final URL(s) and compare the public claim with the current provenance rationale.

Current generated-manifest rows:

```json
[
  {
    "source": "def-continuous-real-functions-on-a-compact-metric-space",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "def-function-space",
    "declared_target": "def-function-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "vector-spaces-and-subspaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "def-continuous-real-functions-on-a-compact-metric-space",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "def-metric-continuity",
    "declared_target": "def-metric-continuity",
    "target_statement_provenance": "literature-derived",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "def-continuous-real-functions-on-a-compact-metric-space",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "def-metric-compactness",
    "declared_target": "def-metric-compactness",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness-in-metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "def-continuous-real-functions-on-a-compact-metric-space",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "lem-real-line-is-a-metric-space",
    "declared_target": "lem-real-line-is-a-metric-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

Current provenance row:

```json
{
  "id": "def-continuous-real-functions-on-a-compact-metric-space",
  "statement": "ai-altered",
  "proof": "not-applicable",
  "evidence": "semantic-source",
  "urls": [
    "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
  ],
  "rationale": "The space $C(K,\\\\mathbb{R})$ of continuous real-valued functions on a nonempty compact metric space: The open textbooks give the corresponding uniform-convergence definition, permanence/interchange theorem, completeness result, or standard counterexample; the item reindexes sequences at zero and spells out the library’s metric, Riemann-integral, endpoint, and dependency conventions. The item has no supplied proof component.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

Exact current item at dispatch:

````markdown
---
id: def-continuous-real-functions-on-a-compact-metric-space
kind: definition
title: "The space $C(K,\\mathbb{R})$ of continuous real-valued functions on a nonempty compact metric space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function-space, def-metric-continuity, def-metric-compactness, lem-real-line-is-a-metric-space]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B, Real Analysis, Lectures 20–21"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "W. Trench, Introduction to Real Analysis"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
pipeline_run: null
---

## Definition

Let $(K,d)$ be a nonempty compact metric space
([[def-metric-compactness]]). Define

$$C(K,\mathbb{R}):=\{\,f\in\mathbb{R}^{K}:f:(K,d)\to(\mathbb{R},d_{\mathbb{R}})\text{ is continuous}\,\},$$

where $\mathbb{R}^{K}$ is the function space of [[def-function-space]] and
$d_{\mathbb{R}}(s,t)=|s-t|$ is the usual metric
([[lem-real-line-is-a-metric-space]], [[def-metric-continuity]]).

This definition introduces the set of continuous functions only. Boundedness
and the supremum metric are assertions to be proved, not clauses of the
definition.
````
