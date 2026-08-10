## Assigned exact-final target — `thm-c-k-complete-in-the-sup-metric`

Item path: `items/thm-c-k-complete-in-the-sup-metric.md`

Normalized final-text SHA-256 at dispatch: `b895f20954fb2f0f712fd98c1c9a62cafe6d5117000d7ac6e8aa1fc31ec496aa`

Target type(s): `A6-source-correction`

- A6 removed the failed redundant Lebl draft endpoint; a live semantic source remains

Read the complete current item and every dependency needed for the changed inference or source attribution. For source work, open the retained exact-final URL(s) and compare the public claim with the current provenance rationale.

Current generated-manifest rows:

```json
[
  {
    "source": "thm-c-k-complete-in-the-sup-metric",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "def-continuous-real-functions-on-a-compact-metric-space",
    "declared_target": "def-continuous-real-functions-on-a-compact-metric-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-convergence-of-functions",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-c-k-complete-in-the-sup-metric",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "lem-sup-metric-is-a-metric",
    "declared_target": "lem-sup-metric-is-a-metric",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-c-k-complete-in-the-sup-metric",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "thm-extreme-value-metric",
    "declared_target": "thm-extreme-value-metric",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness-in-metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-c-k-complete-in-the-sup-metric",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "thm-uniform-cauchy-criterion-real-functions",
    "declared_target": "thm-uniform-cauchy-criterion-real-functions",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-convergence-of-functions",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-c-k-complete-in-the-sup-metric",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "thm-uniform-limit-continuous-real-functions",
    "declared_target": "thm-uniform-limit-continuous-real-functions",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-convergence-of-functions",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-c-k-complete-in-the-sup-metric",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "def-complete-metric-space",
    "declared_target": "def-complete-metric-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "completeness-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-c-k-complete-in-the-sup-metric",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "def-metric-convergence",
    "declared_target": "def-metric-convergence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-c-k-complete-in-the-sup-metric",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "def-cauchy-in-metric",
    "declared_target": "def-cauchy-in-metric",
    "target_statement_provenance": "ai-altered",
    "targetPage": "completeness-and-uniform-continuity",
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
  "id": "thm-c-k-complete-in-the-sup-metric",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
  ],
  "rationale": "$C(K,\\\\mathbb{R})$ is complete in the supremum metric for every nonempty compact metric space $K$: The open textbooks give the corresponding uniform-convergence definition, permanence/interchange theorem, completeness result, or standard counterexample; the item reindexes sequences at zero and spells out the library’s metric, Riemann-integral, endpoint, and dependency conventions. The supplied numbered argument was audited as a local proof rather than a transcription or identifiable adaptation of a source proof.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

Exact current item at dispatch:

````markdown
---
id: thm-c-k-complete-in-the-sup-metric
kind: theorem
title: "$C(K,\\mathbb{R})$ is complete in the supremum metric for every nonempty compact metric space $K$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-continuous-real-functions-on-a-compact-metric-space, lem-sup-metric-is-a-metric, thm-extreme-value-metric, thm-uniform-cauchy-criterion-real-functions, thm-uniform-limit-continuous-real-functions, def-complete-metric-space, def-metric-convergence, def-cauchy-in-metric]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B, Real Analysis, Lectures 20–21"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "W. Trench, Introduction to Real Analysis"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
pipeline_run: null
---

## Statement

Let $(K,d)$ be a nonempty compact metric space. Every member of
$C(K,\mathbb{R})$ is bounded, so the supremum metric

$$d_\infty(f,g):=\sup_{x\in K}|f(x)-g(x)|$$

is defined on $C(K,\mathbb{R})$. With this metric,
$C(K,\mathbb{R})$ is complete.

## Facts & Assumptions

**Given:** A nonempty compact metric space $(K,d)$ and the set $C(K,\mathbb{R})$ of continuous real-valued functions on it.

[L1] Every continuous real-valued function on a nonempty compact metric space has a bounded range ([[thm-extreme-value-metric]]).

[L2] If $S$ is nonempty, the formula $d_\infty(f,g)=\sup_{x\in S}|f(x)-g(x)|$ defines a metric on the set of bounded functions $S\to\mathbb{R}$ ([[lem-sup-metric-is-a-metric]]).

[L3] A sequence is Cauchy in a metric $d$ when, for every positive error, all pairwise distances sufficiently far out are below that error; it converges to $p$ when its distances to $p$ tend to zero ([[def-cauchy-in-metric]], [[def-metric-convergence]]).

[L4] A sequence of real-valued functions converges uniformly if and only if it is uniformly Cauchy ([[thm-uniform-cauchy-criterion-real-functions]]).

[L5] A uniform limit of continuous real-valued functions on a metric space is continuous ([[thm-uniform-limit-continuous-real-functions]]).

[L6] A metric space is complete when every Cauchy sequence in it converges to one of its points ([[def-complete-metric-space]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], every $f\in C(K,\mathbb{R})$ is bounded. Thus $C(K,\mathbb{R})$ is a subset of the bounded functions on $K$, and the restriction of the metric in [L2] is a metric on $C(K,\mathbb{R})$. [L1, L2]

1.2 Let $(f_j)$ be a Cauchy sequence in this supremum metric. [given, L3]

2.1 Given a real $\varepsilon>0$, choose $J$ such that $d_\infty(f_m,f_n)<\varepsilon$ for all $m,n\ge J$. Then $|f_m(x)-f_n(x)|\le d_\infty(f_m,f_n)<\varepsilon$ for all such $m,n$ and every $x\in K$, so $(f_j)$ is uniformly Cauchy. [step 1.2, L2, L3]

3.1 By [L4] there is a function $f:K\to\mathbb{R}$ such that $f_j\to f$ uniformly on $K$. [step 2.1, L4]

4.1 The function $f$ is continuous by [L5], hence belongs to $C(K,\mathbb{R})$ and is bounded by [L1]. [step 3.1, L1, L5]

5.1 Let $\varepsilon>0$. Uniform convergence gives $J$ such that $|f_j(x)-f(x)|<\varepsilon/2$ for every $j\ge J$ and $x\in K$; hence $d_\infty(f_j,f)\le\varepsilon/2<\varepsilon$, so $f_j\to f$ in the supremum metric. [step 3.1, step 4.1, L2, L3]

6.1 Every Cauchy sequence in $C(K,\mathbb{R})$ therefore converges in the supremum metric to a member of $C(K,\mathbb{R})$, so the metric space is complete. [step 1.1, step 5.1, L6] ∎
````
