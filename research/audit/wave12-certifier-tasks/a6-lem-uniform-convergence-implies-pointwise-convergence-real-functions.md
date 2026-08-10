## Assigned exact-final target — `lem-uniform-convergence-implies-pointwise-convergence-real-functions`

Item path: `items/lem-uniform-convergence-implies-pointwise-convergence-real-functions.md`

Normalized final-text SHA-256 at dispatch: `6ef5c5d8f23e3e01b36fe14422e808b7910ca5c913eb9e76374044c3efacbbd1`

Target type(s): `A6-source-correction`

- A6 removed the failed redundant Lebl draft endpoint; a live semantic source remains

Read the complete current item and every dependency needed for the changed inference or source attribution. For source work, open the retained exact-final URL(s) and compare the public claim with the current provenance rationale.

Current generated-manifest rows:

```json
[
  {
    "source": "lem-uniform-convergence-implies-pointwise-convergence-real-functions",
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
  "id": "lem-uniform-convergence-implies-pointwise-convergence-real-functions",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
  ],
  "rationale": "Uniform convergence of real-valued functions implies pointwise convergence: The open textbooks give the corresponding uniform-convergence definition, permanence/interchange theorem, completeness result, or standard counterexample; the item reindexes sequences at zero and spells out the library’s metric, Riemann-integral, endpoint, and dependency conventions. The supplied numbered argument was audited as a local proof rather than a transcription or identifiable adaptation of a source proof.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

Exact current item at dispatch:

````markdown
---
id: lem-uniform-convergence-implies-pointwise-convergence-real-functions
kind: lemma
title: "Uniform convergence of real-valued functions implies pointwise convergence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pointwise-uniform-and-uniformly-cauchy-convergence]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §6.1"
      url: "https://www.jirka.org/ra/html/sec_puconv.html"
    - title: "W. Trench, Introduction to Real Analysis"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a set. If a sequence of functions $f_k:X\to\mathbb{R}$ converges
uniformly to $f:X\to\mathbb{R}$, then it converges pointwise to $f$
([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

## Facts & Assumptions

**Given:** A set $X$, functions $f_k,f:X\to\mathbb{R}$, and uniform convergence $f_k\to f$ on $X$.

[A1] Uniform convergence means that for every real $\varepsilon>0$ there is $N\in\mathbb{N}$ such that $|f_k(x)-f(x)|<\varepsilon$ for every $k\ge N$ and every $x\in X$ ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

## Proof

**Proof technique:** direct.

1.1 Fix $x\in X$ and a real $\varepsilon>0$. By [A1] choose $N\in\mathbb{N}$ such that $|f_k(y)-f(y)|<\varepsilon$ for every $k\ge N$ and every $y\in X$. [A1, choose]

2.1 In particular, $|f_k(x)-f(x)|<\varepsilon$ for every $k\ge N$. [step 1.1]

3.1 Since $x$ and $\varepsilon$ were arbitrary, $f_k(x)\to f(x)$ for every $x\in X$, which is pointwise convergence. [step 2.1, A1] ∎
````
