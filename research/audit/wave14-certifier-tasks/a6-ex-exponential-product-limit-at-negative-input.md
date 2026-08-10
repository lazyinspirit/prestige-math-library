## Assigned exact-final target — `ex-exponential-product-limit-at-negative-input`

Item path: `items/ex-exponential-product-limit-at-negative-input.md`

Normalized final-text SHA-256 at dispatch: `3bcd617417b2fca14e103c3632a20deab4ce64e463ff280cb5eeaa796bc2c55c`

Target type(s): `A4-material`

- A4 added the exponential definition, addition formula, and integer-power definition needed to identify exp(-2)=e^-2

Read these exact-current cited/dependency ids from disk (5): `cor-exponential-reciprocal-and-positivity`, `def-integer-power`, `def-real-exponential-function-and-e`, `thm-exponential-addition-formula`, `thm-exponential-product-limit`.

For source work, open every retained provenance URL and compare its mathematical claim with the current item and rationale. The two removed shell-blocked routes were independently confirmed browser-accessible but redundant; no retained evidence may be weakened by their removal.

Current generated-manifest rows:

```json
[
  {
    "source": "ex-exponential-product-limit-at-negative-input",
    "sourcePage": "the-exponential-function-examples",
    "batch": "wave14-real-analysis",
    "target": "thm-exponential-product-limit",
    "declared_target": "thm-exponential-product-limit",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-exponential-function",
    "targetBatch": "wave14-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-exponential-product-limit-at-negative-input",
    "sourcePage": "the-exponential-function-examples",
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
    "source": "ex-exponential-product-limit-at-negative-input",
    "sourcePage": "the-exponential-function-examples",
    "batch": "wave14-real-analysis",
    "target": "thm-exponential-addition-formula",
    "declared_target": "thm-exponential-addition-formula",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-exponential-function",
    "targetBatch": "wave14-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-exponential-product-limit-at-negative-input",
    "sourcePage": "the-exponential-function-examples",
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
    "source": "ex-exponential-product-limit-at-negative-input",
    "sourcePage": "the-exponential-function-examples",
    "batch": "wave14-real-analysis",
    "target": "def-integer-power",
    "declared_target": "def-integer-power",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
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
  "id": "ex-exponential-product-limit-at-negative-input",
  "statement": "ai-generated",
  "proof": "ai-generated",
  "evidence": "trivial",
  "urls": [],
  "rationale": "This is a bespoke numerical specialization of the preceding all-real product-limit theorem at x=-2. Direct verification: substituting x=-2 gives the displayed limit exp(-2), and the addition and reciprocal laws give exp(-2)=1/(exp(1)exp(1))=e^-2>0. The two-step proof is likewise local.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

Exact current item at dispatch:

````markdown
---
id: ex-exponential-product-limit-at-negative-input
kind: example
title: "The log-free product limit $(1-2/n)^n\\to\\exp(-2)$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-exponential-product-limit, def-real-exponential-function-and-e, thm-exponential-addition-formula, cor-exponential-reciprocal-and-positivity, def-integer-power]
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
pipeline_run: null
---

## Example

At $x=-2$,
$$\left(1-\frac2{\iota(n)}\right)^n\longrightarrow e^{-2}.$$
The finitely many initial indices with nonpositive base do not affect the limit.

## Facts & Assumptions

**Given:** The displayed sequence.

[L1] The product-limit theorem holds for every real input once $n>|x|$ ([[thm-exponential-product-limit]]).

[L2] Since $e=\exp(1)$, the addition and reciprocal formulas and the definition of negative integer powers give $\exp(-2)=1/\exp(2)=1/(\exp(1)\exp(1))=1/e^2=e^{-2}>0$ ([[def-real-exponential-function-and-e]], [[thm-exponential-addition-formula]], [[cor-exponential-reciprocal-and-positivity]], [[def-integer-power]]).

## Verification

**Proof technique:** direct.

1.1 For every $n>2$, the base is positive, so [L1] applies at $x=-2$ and gives the asserted limit.  [L1]

2.1 Removing or altering the terms at $n\le2$ does not change a sequence limit, and [L2] identifies the positive limit.  [step 1.1, L2] ∎
````
