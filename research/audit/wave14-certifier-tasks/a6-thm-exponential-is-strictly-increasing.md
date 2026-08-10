## Assigned exact-final target — `thm-exponential-is-strictly-increasing`

Item path: `items/thm-exponential-is-strictly-increasing.md`

Normalized final-text SHA-256 at dispatch: `9f325793011f0f447532084d85dffed78e3b3663bed6e6cc81e4df1464d055e2`

Target type(s): `A6-source-only`

- A6 removed a redundant shell-blocked Keisler URL; retained Lebl exact support and mathematics are unchanged

Read these exact-current cited/dependency ids from disk (5): `cor-exponential-reciprocal-and-positivity`, `cor-mean-value-theorem`, `cor-power-series-sums-are-continuous`, `lem-exponential-series-has-infinite-radius`, `thm-derivative-of-exponential`.

For source work, open every retained provenance URL and compare its mathematical claim with the current item and rationale. The two removed shell-blocked routes were independently confirmed browser-accessible but redundant; no retained evidence may be weakened by their removal.

Current generated-manifest rows:

```json
[
  {
    "source": "thm-exponential-is-strictly-increasing",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "lem-exponential-series-has-infinite-radius",
    "declared_target": "lem-exponential-series-has-infinite-radius",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-exponential-function",
    "targetBatch": "wave14-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-exponential-is-strictly-increasing",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "thm-derivative-of-exponential",
    "declared_target": "thm-derivative-of-exponential",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-exponential-function",
    "targetBatch": "wave14-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-exponential-is-strictly-increasing",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "cor-exponential-reciprocal-and-positivity",
    "declared_target": "cor-exponential-reciprocal-and-positivity",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-exponential-function",
    "targetBatch": "wave14-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-exponential-is-strictly-increasing",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "cor-mean-value-theorem",
    "declared_target": "cor-mean-value-theorem",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-exponential-is-strictly-increasing",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "cor-power-series-sums-are-continuous",
    "declared_target": "cor-power-series-sums-are-continuous",
    "target_statement_provenance": "ai-altered",
    "targetPage": "power-series-and-real-analytic-functions",
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
  "id": "thm-exponential-is-strictly-increasing",
  "statement": "literature-derived",
  "proof": "ai-altered",
  "evidence": "exact-source",
  "urls": [
    "https://www.jirka.org/ra/html/sec_logandexp.html"
  ],
  "rationale": "Lebl's exponential proposition states that exp is strictly increasing and differentiable with positive derivative. The local proof uses the mean value theorem rather than Lebl's inverse-log construction.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

Exact current item at dispatch:

````markdown
---
id: thm-exponential-is-strictly-increasing
kind: theorem
title: "The exponential function is strictly increasing"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-exponential-series-has-infinite-radius, thm-derivative-of-exponential, cor-exponential-reciprocal-and-positivity, cor-mean-value-theorem, cor-power-series-sums-are-continuous]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "J. Lebl, Basic Analysis, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
pipeline_run: null
---

## Statement

The exponential function is continuous and strictly increasing on $\mathbb R$.

## Facts & Assumptions

**Given:** The exponential function.

[L1] Its derivative equals itself ([[thm-derivative-of-exponential]]) and it is everywhere positive ([[cor-exponential-reciprocal-and-positivity]]).

[L2] The mean value theorem applies to a continuous function on a closed interval and converts a positive interior derivative into strict increase ([[cor-mean-value-theorem]]). A power-series sum is continuous at every point strictly inside its convergence interval, and the exponential series has infinite radius ([[cor-power-series-sums-are-continuous]], [[lem-exponential-series-has-infinite-radius]]).

## Proof

**Proof technique:** direct.

1.1 If $x<y$, the mean value theorem gives $\exp(y)-\exp(x)=\exp(c)(y-x)$ for some $c\in(x,y)$.  [L1, L2]

2.1 Both factors on the right are positive, so $\exp(y)>\exp(x)$. Continuity is the cited power-series conclusion.  [step 1.1, L1, L2] ∎
````
