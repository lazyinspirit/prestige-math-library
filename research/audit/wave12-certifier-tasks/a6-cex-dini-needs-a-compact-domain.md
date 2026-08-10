## Assigned exact-final target — `cex-dini-needs-a-compact-domain`

Item path: `items/cex-dini-needs-a-compact-domain.md`

Normalized final-text SHA-256 at dispatch: `0b2e0fd1e00c3bb9970c36c0948f76b596995830f7c25bff74331a8fcdb90772`

Target type(s): `A6-source-correction`

- A6 removed the failed redundant KTH endpoint; live Dini/Trench sources remain

Read the complete current item and every dependency needed for the changed inference or source attribution. For source work, open the retained exact-final URL(s) and compare the public claim with the current provenance rationale.

Current generated-manifest rows:

```json
[
  {
    "source": "cex-dini-needs-a-compact-domain",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
    "target": "thm-dini-on-a-closed-interval",
    "declared_target": "thm-dini-on-a-closed-interval",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-convergence-of-functions",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-dini-needs-a-compact-domain",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
    "target": "def-continuity-real",
    "declared_target": "def-continuity-real",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-dini-needs-a-compact-domain",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
    "target": "thm-algebra-of-continuous-functions",
    "declared_target": "thm-algebra-of-continuous-functions",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-dini-needs-a-compact-domain",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
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
    "source": "cex-dini-needs-a-compact-domain",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
    "target": "def-canonical-natural",
    "declared_target": "def-canonical-natural",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-dini-needs-a-compact-domain",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-of-naturals-positive",
    "declared_target": "lem-of-naturals-positive",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-dini-needs-a-compact-domain",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-of-inverse-positive",
    "declared_target": "lem-of-inverse-positive",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-dini-needs-a-compact-domain",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
    "target": "thm-heine-borel-characterisation-r",
    "declared_target": "thm-heine-borel-characterisation-r",
    "target_statement_provenance": "literature-derived",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-dini-needs-a-compact-domain",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
    "target": "def-bounded-set",
    "declared_target": "def-bounded-set",
    "target_statement_provenance": "literature-derived",
    "targetPage": "suprema-and-infima",
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
  "id": "cex-dini-needs-a-compact-domain",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://en.wikipedia.org/wiki/Dini%27s_theorem",
    "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
  ],
  "rationale": "Dini's theorem fails on $[0,\\\\infty)$: $x/(\\\\iota(k+1)+x)$ decreases pointwise to zero but not uniformly: The sources state Dini’s theorem with compactness, continuity, continuous limit, and monotonicity; the item specializes to a closed real interval or supplies an explicit standard witness showing why one named hypothesis cannot be dropped. The supplied numbered argument was audited as a local proof rather than a transcription or identifiable adaptation of a source proof.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

Exact current item at dispatch:

````markdown
---
id: cex-dini-needs-a-compact-domain
kind: counterexample
title: "Dini's theorem fails on $[0,\\infty)$: $x/(\\iota(k+1)+x)$ decreases pointwise to zero but not uniformly"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-dini-on-a-closed-interval, def-continuity-real, thm-algebra-of-continuous-functions, cor-archimedean-reciprocal, def-canonical-natural, lem-of-naturals-positive, lem-of-inverse-positive, thm-heine-borel-characterisation-r, def-bounded-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Dini's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dini%27s_theorem"
    - title: "W. Trench, Introduction to Real Analysis"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** the compact-domain hypothesis in Dini's theorem can be
dropped.

On $[0,\infty)$ define

$$f_k(x):=\frac{x}{\iota(k+1)+x}.$$

The functions $f_k$ and their pointwise limit $0$ are continuous, and
$f_{k+1}(x)\le f_k(x)$ for every $x\ge0$, but $f_k\to0$ is not uniform.

## Facts & Assumptions

**Given:** The functions $f_k$ in the Statement, with $a_k:=\iota(k+1)>0$.

[L1] Constants and the identity are continuous; sums and quotients with nonvanishing denominator preserve continuity ([[thm-algebra-of-continuous-functions]], [[def-continuity-real]]).

[L2] For every real $\varepsilon>0$ there is $N\ge1$ with $1/\iota(N)<\varepsilon$, and the positive canonical naturals increase while their reciprocals decrease ([[cor-archimedean-reciprocal]], [[def-canonical-natural]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[L3] A subset of $\mathbb{R}$ is compact exactly when it is closed and bounded; $[0,\infty)$ is unbounded ([[thm-heine-borel-characterisation-r]], [[def-bounded-set]]).

[L4] Dini's theorem on a closed interval concludes uniform convergence from continuity, pointwise monotonicity, and a continuous pointwise limit ([[thm-dini-on-a-closed-interval]]).

## Counterexample

**Proof technique:** direct.

1.1 For every $k$, the denominator $a_k+x$ is positive on $[0,\infty)$, so $f_k$ is continuous by [L1]; the zero function is continuous as well. [given, L1]

1.2 Since $a_{k+1}>a_k>0$, one has $a_{k+1}+x>a_k+x>0$, hence $f_{k+1}(x)\le f_k(x)$ for every $x\ge0$. [L2, algebra]

1.3 Fix $x\ge0$. If $x=0$ then $f_k(x)=0$; if $x>0$, then $0\le f_k(x)\le x/a_k$, and [L2] gives $x/a_k\to0$. Thus $f_k(x)\to0$ for every $x$. [L2, algebra]

1.4 At $x_k:=a_k$ one has $f_k(x_k)=a_k/(a_k+a_k)=1/2$, so the convergence is not uniform. [given, algebra]

1.5 The domain $[0,\infty)$ is not compact by [L3]. [L3]

2.1 Hence all the listed Dini hypotheses except compactness hold, while the uniform conclusion fails; compactness cannot be dropped. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, L4] ∎
````
