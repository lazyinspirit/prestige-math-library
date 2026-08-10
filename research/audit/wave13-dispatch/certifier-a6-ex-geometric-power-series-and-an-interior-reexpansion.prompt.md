# Independent repair certifier brief — Wave 13, A6

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30).** Use only non-mutating
> reads already available in the read-only sandbox. Do not edit, delegate,
> escalate, or ask for shell or edit permission.

You are **GPT 5.6 Terra** at `xhigh` effort with a 1,000,000-token context
window. You are an independent, read-only certifier of a repair you did not
author.

## Binding triage

- **Non-negotiable:** mathematical accuracy, logical validity, correct citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes within 30 seconds; other non-fatal quirks;
  imperfection at the level of the letter.

Read the assigned target's exact current final text from disk and compare its
hash with the dispatch task. Read every dependency needed for the repaired
inference, the title/public statement, every numbered step, Facts & Assumptions,
Remarks, dependency list, provenance tags, sources, and verification block.
Check the named baseline defect is fixed without a new one and that stale
pre-repair judge/audited evidence is absent. Use web access when an external
source is material.

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

Do not suggest optional polishing and do not write a verification stamp.


---

# This dispatch

## Assigned exact-final target — `ex-geometric-power-series-and-an-interior-reexpansion`

Item path: `items/ex-geometric-power-series-and-an-interior-reexpansion.md`

Normalized final-text SHA-256 at dispatch: `6a93b0d25da3f563708c82054b9b955f5d5cd92fa106f08238f67c042821e74c`

Target type: `A4-material`

- A4 made the general re-expansion sources qualitative and derived the full sharp interval directly from the geometric series

Read the complete current item and every dependency needed for the changed inference or source attribution. For source work, open the retained exact-final URL(s) and compare the public claim with the current provenance rationale.

Current generated-manifest rows:

```json
[
  {
    "source": "ex-geometric-power-series-and-an-interior-reexpansion",
    "sourcePage": "power-series-and-real-analytic-functions-examples",
    "batch": "wave13-real-analysis",
    "target": "thm-geometric-series",
    "declared_target": "thm-geometric-series",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-geometric-power-series-and-an-interior-reexpansion",
    "sourcePage": "power-series-and-real-analytic-functions-examples",
    "batch": "wave13-real-analysis",
    "target": "thm-power-series-reexpansion-at-an-interior-point",
    "declared_target": "thm-power-series-reexpansion-at-an-interior-point",
    "target_statement_provenance": "ai-altered",
    "targetPage": "power-series-and-real-analytic-functions",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-geometric-power-series-and-an-interior-reexpansion",
    "sourcePage": "power-series-and-real-analytic-functions-examples",
    "batch": "wave13-real-analysis",
    "target": "lem-local-reciprocal-of-a-real-power-series",
    "declared_target": "lem-local-reciprocal-of-a-real-power-series",
    "target_statement_provenance": "ai-altered",
    "targetPage": "power-series-and-real-analytic-functions",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  }
]
```

Current provenance row:

```json
{
  "id": "ex-geometric-power-series-and-an-interior-reexpansion",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://encyclopediaofmath.org/wiki/Power_series",
    "https://sites.math.northwestern.edu/scg479/courses/notes/lecture-notes-320-2.pdf"
  ],
  "rationale": "The sources give the geometric series and interior recentering of power-series sums. The item combines them into the explicit coefficient formula about an arbitrary real c and verifies it directly.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

Exact current item at dispatch:

````markdown
---
id: ex-geometric-power-series-and-an-interior-reexpansion
kind: example
title: "The geometric series represents $1/(1-x)$ for $|x|<1$ and re-expands explicitly about every $c$ with $|c|<1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-geometric-series, thm-power-series-reexpansion-at-an-interior-point, lem-local-reciprocal-of-a-real-power-series]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Power series, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Power_series"
    - title: "Northwestern Math 320-2 lecture notes"
      url: "https://sites.math.northwestern.edu/scg479/courses/notes/lecture-notes-320-2.pdf"
pipeline_run: null
---

## Statement

For $|x|<1$,

$$\frac1{1-x}=\sum_{n=0}^{\infty}x^n.$$

More generally, if $|c|<1$, then

$$\frac1{1-x}=\sum_{n=0}^{\infty}\frac{(x-c)^n}{(1-c)^{n+1}}\qquad(|x-c|<1-c).$$

## Facts & Assumptions

**Given:** A real $c$ with $|c|<1$.

[L1] The geometric series sums to $1/(1-t)$ for $|t|<1$ ([[thm-geometric-series]]).

[L2] Power-series sums re-expand about interior points, and a nonzero local denominator has a reciprocal series ([[thm-power-series-reexpansion-at-an-interior-point]], [[lem-local-reciprocal-of-a-real-power-series]]).

## Verification

**Proof technique:** direct.

1.1 Apply [L1] with $t=x$ to get the first formula. [L1]

2.1 The general results in [L2] show qualitatively that the sum re-expands about $c$ and that the nonzero denominator there has a local reciprocal series. To identify that series and its full convergence interval directly, use $1-x=(1-c)(1-(x-c)/(1-c))$ and $1-c>0$, and apply [L1] with $t=(x-c)/(1-c)$. This gives the second formula precisely when $|x-c|<1-c$. [given, L1, L2, algebra] ∎
````
