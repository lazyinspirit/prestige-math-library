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

## Assigned exact-final target — `thm-exponential-limits-and-range`

Item path: `items/thm-exponential-limits-and-range.md`

Normalized final-text SHA-256 at dispatch: `18663af32ce5049a512e2903201e40e5e5bf04f6945e2ef3792c59a3d819b444`

Target type(s): `A6-source-only`

- A6 removed a redundant shell-blocked TAMU URL and made the singular Lebl rationale exact; mathematics is unchanged

Read these exact-current cited/dependency ids from disk (4): `cor-exponential-reciprocal-and-positivity`, `def-limits-at-infinity`, `def-real-exponential-function-and-e`, `thm-nonnegative-series-bounded-partial-sums`.

For source work, open every retained provenance URL and compare its mathematical claim with the current item and rationale. The two removed shell-blocked routes were independently confirmed browser-accessible but redundant; no retained evidence may be weakened by their removal.

Current generated-manifest rows:

```json
[
  {
    "source": "thm-exponential-limits-and-range",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "def-real-exponential-function-and-e",
    "declared_target": "def-real-exponential-function-and-e",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-exponential-function",
    "targetBatch": "wave14-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-exponential-limits-and-range",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "thm-nonnegative-series-bounded-partial-sums",
    "declared_target": "thm-nonnegative-series-bounded-partial-sums",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-exponential-limits-and-range",
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
    "source": "thm-exponential-limits-and-range",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "def-limits-at-infinity",
    "declared_target": "def-limits-at-infinity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "limits-of-real-functions",
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
  "id": "thm-exponential-limits-and-range",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://www.jirka.org/ra/html/sec_logandexp.html"
  ],
  "rationale": "Lebl gives the limits 0 and +infinity at the two ends and range (0,infinity). The item restates these together with the elementary bound exp(x)>=1+x and a specific reciprocal proof; that proof is locally assembled.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

Exact current item at dispatch:

````markdown
---
id: thm-exponential-limits-and-range
kind: theorem
title: "The exponential tends to $+\\infty$ at $+\\infty$ and to $0$ at $-\\infty$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-real-exponential-function-and-e, thm-nonnegative-series-bounded-partial-sums, cor-exponential-reciprocal-and-positivity, def-limits-at-infinity]
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

$$\exp(x)\to+\infty\quad(x\to+\infty),\qquad \exp(x)\to0\quad(x\to-\infty),$$
and the range of $\exp$ is contained in $(0,\infty)$ and is unbounded above with infimum $0$.

## Facts & Assumptions

**Given:** The exponential series.

[L1] For $x\ge0$, every exponential-series term is nonnegative, so its sum dominates every partial sum and in particular $\exp(x)\ge1+x$ ([[def-real-exponential-function-and-e]], [[thm-nonnegative-series-bounded-partial-sums]]).

[L2] $\exp(-x)=1/\exp(x)>0$ ([[cor-exponential-reciprocal-and-positivity]]).

[L3] Finite and infinite limits of functions at infinity have the quantified definitions in [[def-limits-at-infinity]].

## Proof

**Proof technique:** direct.

1.1 Given a real $M$, every $x>\max\{0,M-1\}$ satisfies $\exp(x)\ge1+x>M$. Hence $\exp(x)\to+\infty$.  [L1, L3]

1.2 Given $\varepsilon>0$, choose $X>0$ with $1+X>1/\varepsilon$. If $x<-X$, then $-x>X$, so [L1] gives $\exp(-x)\ge1-x>1+X>1/\varepsilon$; [L2] yields $0<\exp(x)<\varepsilon$.  [L1, L2, choose]

2.1 The range assertions follow from positivity and the two limit conclusions.  [step 1.1, step 1.2, L2] ∎
````
