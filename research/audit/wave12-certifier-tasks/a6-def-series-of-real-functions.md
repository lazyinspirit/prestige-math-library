## Assigned exact-final target — `def-series-of-real-functions`

Item path: `items/def-series-of-real-functions.md`

Normalized final-text SHA-256 at dispatch: `c4bbb5a0ff36d46a1fffa83c65776d22eed94c2efc020babbe483b7de21d5686`

Target type(s): `A6-source-correction`

- A6 removed the failed redundant Lebl draft endpoint; a live semantic source remains

Read the complete current item and every dependency needed for the changed inference or source attribution. For source work, open the retained exact-final URL(s) and compare the public claim with the current provenance rationale.

Current generated-manifest rows:

```json
[
  {
    "source": "def-series-of-real-functions",
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
    "source": "def-series-of-real-functions",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "def-series",
    "declared_target": "def-series",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "def-series-of-real-functions",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "def-pointwise-uniform-and-uniformly-cauchy-convergence",
    "declared_target": "def-pointwise-uniform-and-uniformly-cauchy-convergence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-convergence-of-functions",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  }
]
```

Current provenance row:

```json
{
  "id": "def-series-of-real-functions",
  "statement": "ai-altered",
  "proof": "not-applicable",
  "evidence": "semantic-source",
  "urls": [
    "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
  ],
  "rationale": "A series of real-valued functions and its pointwise and uniform convergence through its partial sums: The open textbooks give the corresponding uniform-convergence definition, permanence/interchange theorem, completeness result, or standard counterexample; the item reindexes sequences at zero and spells out the library’s metric, Riemann-integral, endpoint, and dependency conventions. The item has no supplied proof component.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

Exact current item at dispatch:

````markdown
---
id: def-series-of-real-functions
kind: definition
title: "A series of real-valued functions and its pointwise and uniform convergence through its partial sums"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function-space, def-series, def-pointwise-uniform-and-uniformly-cauchy-convergence]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §6.1"
      url: "https://www.jirka.org/ra/html/sec_puconv.html"
    - title: "W. Trench, Introduction to Real Analysis"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
pipeline_run: null
---

## Definition

Let $X$ be a set and let $f_k:X\to\mathbb{R}$ for
$k\in\mathbb{N}$. The **series of real-valued functions**
$\sum f_k$ is studied through its partial-sum functions

$$S_n(x):=\sum_{k<n}f_k(x)\qquad(n\in\mathbb{N},\ x\in X),$$

where the sum on the right is the finite sum of [[def-series]]. Thus
$S_0$ is the zero function and $S_{n+1}=S_n+f_n$ under the pointwise
operations of [[def-function-space]].

The series $\sum f_k$ **converges pointwise** to $S:X\to\mathbb{R}$ when
$S_n\to S$ pointwise, and it **converges uniformly** to $S$ when
$S_n\to S$ uniformly
([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

The series is **absolutely convergent at $x\in X$** when the scalar series
$\sum |f_k(x)|$ converges. It is **absolutely pointwise convergent** when this
holds for every $x\in X$.
````
