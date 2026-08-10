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

## Assigned exact-final target — `cex-exponential-not-uniformly-continuous-on-r`

Item path: `items/cex-exponential-not-uniformly-continuous-on-r.md`

Normalized final-text SHA-256 at dispatch: `b57323d9a13b889de4db9a3a284d02c62c1db7e08c525e0f768a6d00dec9b242`

Target type(s): `A6-source-only`

- A6 removed a redundant shell-blocked Keisler URL and made the singular UTSA rationale exact; mathematics is unchanged

Read these exact-current cited/dependency ids from disk (7): `cor-archimedean-reciprocal`, `cor-mean-value-theorem`, `def-uniform-continuity-real`, `thm-derivative-of-exponential`, `thm-exponential-beats-every-polynomial`, `thm-exponential-is-strictly-increasing`, `thm-heine-cantor-r`.

For source work, open every retained provenance URL and compare its mathematical claim with the current item and rationale. The two removed shell-blocked routes were independently confirmed browser-accessible but redundant; no retained evidence may be weakened by their removal.

Current generated-manifest rows:

```json
[
  {
    "source": "cex-exponential-not-uniformly-continuous-on-r",
    "sourcePage": "the-exponential-function-examples",
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
    "source": "cex-exponential-not-uniformly-continuous-on-r",
    "sourcePage": "the-exponential-function-examples",
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
    "source": "cex-exponential-not-uniformly-continuous-on-r",
    "sourcePage": "the-exponential-function-examples",
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
    "source": "cex-exponential-not-uniformly-continuous-on-r",
    "sourcePage": "the-exponential-function-examples",
    "batch": "wave14-real-analysis",
    "target": "thm-exponential-beats-every-polynomial",
    "declared_target": "thm-exponential-beats-every-polynomial",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-exponential-function",
    "targetBatch": "wave14-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-exponential-not-uniformly-continuous-on-r",
    "sourcePage": "the-exponential-function-examples",
    "batch": "wave14-real-analysis",
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
    "source": "cex-exponential-not-uniformly-continuous-on-r",
    "sourcePage": "the-exponential-function-examples",
    "batch": "wave14-real-analysis",
    "target": "def-uniform-continuity-real",
    "declared_target": "def-uniform-continuity-real",
    "target_statement_provenance": "literature-derived",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-exponential-not-uniformly-continuous-on-r",
    "sourcePage": "the-exponential-function-examples",
    "batch": "wave14-real-analysis",
    "target": "thm-heine-cantor-r",
    "declared_target": "thm-heine-cantor-r",
    "target_statement_provenance": "literature-derived",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
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
  "id": "cex-exponential-not-uniformly-continuous-on-r",
  "statement": "literature-derived",
  "proof": "ai-altered",
  "evidence": "exact-source",
  "urls": [
    "https://mathresearch.utsa.edu/wiki/index.php?title=Uniform_Continuity"
  ],
  "rationale": "The UTSA notes explicitly state that the real exponential is not uniformly continuous on the whole real line. The library proof uses the standard close-pairs criterion and the mean value theorem with x_n=n and y_n=n+1/n.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

Exact current item at dispatch:

````markdown
---
id: cex-exponential-not-uniformly-continuous-on-r
kind: counterexample
title: "The exponential is not uniformly continuous on $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-derivative-of-exponential, thm-exponential-is-strictly-increasing, cor-mean-value-theorem, thm-exponential-beats-every-polynomial, cor-archimedean-reciprocal, def-uniform-continuity-real, thm-heine-cantor-r]
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
    - title: "J. Lebl, Basic Analysis, Analytic Functions"
      url: "https://www.jirka.org/ra/html/sec_analfuncs.html"
    - title: "UTSA Mathematics Research Wiki, Uniform Continuity"
      url: "https://mathresearch.utsa.edu/wiki/index.php?title=Uniform_Continuity"
pipeline_run: null
---

## Statement refuted

The exponential function is uniformly continuous on $\mathbb R$.

## Facts & Assumptions

**Given:** $\exp'=\exp$.

[L1] Uniform continuity is [[def-uniform-continuity-real]].

[L2] The exponential is strictly increasing ([[thm-exponential-is-strictly-increasing]]), the mean value theorem is [[cor-mean-value-theorem]], and exponential dominates polynomials ([[thm-exponential-beats-every-polynomial]]).

[L3] The reciprocal sequence $1/\iota(n)$ tends to $0$ when started at $n\ge1$ ([[cor-archimedean-reciprocal]]).

## Counterexample

**Proof technique:** direct.

1.1 For $n\ge1$, let $x_n=\iota(n)$ and $y_n=\iota(n)+1/\iota(n)$. Then $|y_n-x_n|=1/\iota(n)\to0$.  [L3]

1.2 By the mean value theorem, $\exp(y_n)-\exp(x_n)=\exp(c_n)/\iota(n)$ for some $c_n\in(x_n,y_n)$. Since exponential is increasing, this is at least $\exp(\iota(n))/\iota(n)$, which tends to $+\infty$ by [L2].   [L2, given]

2.1 Thus arbitrarily close pairs have image distances bounded away from $0$, contradicting the uniform-continuity condition [L1].  [step 1.1, step 1.2, L1] ∎

## Remarks

On every compact interval, $\exp$ is uniformly continuous by [[thm-heine-cantor-r]]; the failure is global.
````
