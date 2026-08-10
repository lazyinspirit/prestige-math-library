# Independent repair certifier brief — Wave 14, A6

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
pre-repair judge/audited evidence is absent. For a source-only repair, verify
that every removed URL was redundant, the retained source directly supports
the provenance classification/rationale, and the public mathematics is
unchanged. Use web access when an external source is material.

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

## Assigned exact-final target — `cor-exponential-is-a-bijection-onto-positive-reals`

Item path: `items/cor-exponential-is-a-bijection-onto-positive-reals.md`

Normalized final-text SHA-256 at dispatch: `04d38d649f2aaa51e4b79784b9adf3563f554282598ba78e5bdd8af4159e22fa`

Target type(s): `A6-source-only`

- A6 removed a redundant shell-blocked TAMU URL; retained Lebl exact support and mathematics are unchanged

Read these exact-current cited/dependency ids from disk (4): `cor-power-series-sums-are-continuous`, `thm-exponential-is-strictly-increasing`, `thm-exponential-limits-and-range`, `thm-intermediate-value`.

For source work, open every retained provenance URL and compare its mathematical claim with the current item and rationale. The two removed shell-blocked routes were independently confirmed browser-accessible but redundant; no retained evidence may be weakened by their removal.

Current generated-manifest rows:

```json
[
  {
    "source": "cor-exponential-is-a-bijection-onto-positive-reals",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "thm-exponential-is-strictly-increasing",
    "declared_target": "thm-exponential-is-strictly-increasing",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-exponential-function",
    "targetBatch": "wave14-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-exponential-is-a-bijection-onto-positive-reals",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "thm-exponential-limits-and-range",
    "declared_target": "thm-exponential-limits-and-range",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-exponential-function",
    "targetBatch": "wave14-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-exponential-is-a-bijection-onto-positive-reals",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "thm-intermediate-value",
    "declared_target": "thm-intermediate-value",
    "target_statement_provenance": "literature-derived",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-exponential-is-a-bijection-onto-positive-reals",
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
  "id": "cor-exponential-is-a-bijection-onto-positive-reals",
  "statement": "literature-derived",
  "proof": "ai-altered",
  "evidence": "exact-source",
  "urls": [
    "https://www.jirka.org/ra/html/sec_logandexp.html"
  ],
  "rationale": "Lebl states that the exponential is a strictly increasing bijection from R to (0,infinity), exactly the corollary's mathematical assertion. The library proof repackages monotonicity, endpoint limits, continuity, and IVT.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

Exact current item at dispatch:

````markdown
---
id: cor-exponential-is-a-bijection-onto-positive-reals
kind: corollary
title: "The exponential is a continuous bijection from $\\mathbb{R}$ onto $(0,\\infty)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-exponential-is-strictly-increasing, thm-exponential-limits-and-range, thm-intermediate-value, cor-power-series-sums-are-continuous]
justified_by: []
aliases: []
landmark: true
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

$$\exp:\mathbb R\longrightarrow(0,\infty)$$
is a bijection.

## Facts & Assumptions

**Given:** The real exponential function.

[L1] It is strictly increasing ([[thm-exponential-is-strictly-increasing]]) and continuous ([[cor-power-series-sums-are-continuous]]).

[L2] Its values are positive, and its limits at the two ends are $0$ and $+\infty$ ([[thm-exponential-limits-and-range]]).

[L3] A continuous function on an interval takes every intermediate value ([[thm-intermediate-value]]).

## Proof

**Proof technique:** direct.

1.1 Strict increase gives injectivity.  [L1]

1.2 Given $y>0$, [L2] provides $a<b$ with $\exp(a)<y<\exp(b)$. Applying [L3] on $[a,b]$ gives $c$ with $\exp(c)=y$.  [L1, L2, L3, choose]

2.1 Positivity gives the stated codomain, and steps 1.1 and 1.2 give bijectivity.  [step 1.1, step 1.2, L2] ∎
````
