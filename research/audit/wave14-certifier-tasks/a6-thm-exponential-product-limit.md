## Assigned exact-final target — `thm-exponential-product-limit`

Item path: `items/thm-exponential-product-limit.md`

Normalized final-text SHA-256 at dispatch: `c6d91007aaddc641bc9eb95b639fe69108831d6fe33f31bf634776743630b0f1`

Target type(s): `A6-source-only`

- A6 removed a redundant shell-blocked Keisler URL; retained Lebl Exercise 5.4.5 exact support and mathematics are unchanged

Read these exact-current cited/dependency ids from disk (6): `def-real-exponential-function-and-e`, `def-real-limit`, `lem-exponential-series-has-infinite-radius`, `lem-finite-sum-laws`, `lem-scaled-binomial-coefficients-converge`, `thm-binomial-theorem`.

For source work, open every retained provenance URL and compare its mathematical claim with the current item and rationale. The two removed shell-blocked routes were independently confirmed browser-accessible but redundant; no retained evidence may be weakened by their removal.

Current generated-manifest rows:

```json
[
  {
    "source": "thm-exponential-product-limit",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "lem-scaled-binomial-coefficients-converge",
    "declared_target": "lem-scaled-binomial-coefficients-converge",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-exponential-function",
    "targetBatch": "wave14-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-exponential-product-limit",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "thm-binomial-theorem",
    "declared_target": "thm-binomial-theorem",
    "target_statement_provenance": "ai-altered",
    "targetPage": "finite-counting-and-binomial-coefficients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-exponential-product-limit",
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
    "source": "thm-exponential-product-limit",
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
    "source": "thm-exponential-product-limit",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "def-real-limit",
    "declared_target": "def-real-limit",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-exponential-product-limit",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "lem-finite-sum-laws",
    "declared_target": "lem-finite-sum-laws",
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
  "id": "thm-exponential-product-limit",
  "statement": "literature-derived",
  "proof": "ai-altered",
  "evidence": "exact-source",
  "urls": [
    "https://www.jirka.org/ra/html/sec_logandexp.html"
  ],
  "rationale": "Lebl Exercise 5.4.5 states e^x=lim_n(1+x/n)^n for every real x, with the same eventual-domain convention implicit in a real sequence. The library supplies a binomial head-tail proof instead of Lebl's logarithmic hint.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

Exact current item at dispatch:

````markdown
---
id: thm-exponential-product-limit
kind: theorem
title: "For every real $x$, $(1+x/n)^n\\to\\exp x$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-scaled-binomial-coefficients-converge, thm-binomial-theorem, lem-exponential-series-has-infinite-radius, def-real-exponential-function-and-e, def-real-limit, lem-finite-sum-laws]
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
    - title: "J. Lebl, Basic Analysis, Analytic Functions"
      url: "https://www.jirka.org/ra/html/sec_analfuncs.html"
    - title: "J. Lebl, Basic Analysis, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
pipeline_run: null
---

## Statement

For every real $x$,
$$\lim_{n\to\infty}\left(1+\frac{x}{\iota(n)}\right)^n=\exp(x),$$
with the sequence started after $n>|x|$, so the base is positive.

## Facts & Assumptions

**Given:** A real $x$.

[L1] The binomial theorem expands the product. For fixed $k$, [[lem-scaled-binomial-coefficients-converge]] gives both convergence of the scaled coefficient to $1/\iota(k!)$ and, whenever $n\ge\max\{1,k\}$, the bound $0\le\iota\binom nk/\iota(n)^k\le1/\iota(k!)$ ([[thm-binomial-theorem]]).

[L2] The exponential series converges absolutely ([[lem-exponential-series-has-infinite-radius]], [[def-real-exponential-function-and-e]]).

## Proof

**Proof technique:** direct.

1.1 For $n>|x|$, the binomial theorem gives $(1+x/\iota(n))^n=\sum_{k=0}^{n}\bigl(\iota\binom nk/\iota(n)^k\bigr)x^k$.  [L1]

1.2 Each fixed coefficient tends to $1/\iota(k!)$, while the uniform bound in [L1] holds for every term present in the sum.  [L1]

2.1 Given $\varepsilon>0$, choose $K$ so the absolute exponential tail after $K$ is below $\varepsilon/3$ using [L2]. The same coefficient bound controls the product tail uniformly in $n$; for the finite head $k\le K$, choose $n$ so all coefficient errors sum to below $\varepsilon/3$.  [step 1.2, L2, choose]

3.1 The triangle inequality then makes the product differ from $\sum_{k\ge0}x^k/\iota(k!)=\exp(x)$ by less than $\varepsilon$.   [step 1.1, step 2.1, given] ∎
````
