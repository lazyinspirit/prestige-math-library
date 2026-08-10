# Independent repair certifier brief — Wave 12, A6

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30).** Use only non-mutating
> reads already available in the read-only sandbox. Do not edit, delegate,
> escalate, or ask for shell or edit permission.

You are **GPT 5.6 Terra** at `xhigh` effort with a 1,000,000-token context
window. You are an independent, read-only certifier of a repair or source
disposition you did not author.

## Binding triage

- **Non-negotiable:** mathematical accuracy, logical validity, correct citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes within 30 seconds; other non-fatal quirks;
  imperfection at the level of the letter.

Read the assigned target's exact current final text from disk and compare its
hash with the dispatch task. For an item, read every dependency needed for the
repaired inference, the title/public statement, every numbered step, Facts &
Assumptions, Remarks, dependency list, provenance tags, sources, and
verification block. Check the named baseline defect is fixed without a new one
and that stale pre-repair judge/audited evidence is absent. Use web access when
an external source is material. For a source-correction task, open the retained
live source(s), compare the cited claim against them, and state whether the
final attribution and provenance class remain exact after the dead redundant
endpoint was removed.

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

## Assigned exact-final target — `thm-uniform-cauchy-criterion-real-functions`

Item path: `items/thm-uniform-cauchy-criterion-real-functions.md`

Normalized final-text SHA-256 at dispatch: `9badc4993f21da2dfdbf10f013b6d0918c337289f4e823b4b3325ee2aa9b5720`

Target type(s): `A6-source-correction`

- A6 removed the failed redundant Lebl draft endpoint; a live semantic source remains

Read the complete current item and every dependency needed for the changed inference or source attribution. For source work, open the retained exact-final URL(s) and compare the public claim with the current provenance rationale.

Current generated-manifest rows:

```json
[
  {
    "source": "thm-uniform-cauchy-criterion-real-functions",
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
  },
  {
    "source": "thm-uniform-cauchy-criterion-real-functions",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "thm-cauchy-criterion-via-lub",
    "declared_target": "thm-cauchy-criterion-via-lub",
    "target_statement_provenance": "literature-derived",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-uniform-cauchy-criterion-real-functions",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "lem-of-triangle-inequality",
    "declared_target": "lem-of-triangle-inequality",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
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
  "id": "thm-uniform-cauchy-criterion-real-functions",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
  ],
  "rationale": "A sequence of real-valued functions converges uniformly if and only if it is uniformly Cauchy: The open textbooks give the corresponding uniform-convergence definition, permanence/interchange theorem, completeness result, or standard counterexample; the item reindexes sequences at zero and spells out the library’s metric, Riemann-integral, endpoint, and dependency conventions. The supplied numbered argument was audited as a local proof rather than a transcription or identifiable adaptation of a source proof.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

Exact current item at dispatch:

````markdown
---
id: thm-uniform-cauchy-criterion-real-functions
kind: theorem
title: "A sequence of real-valued functions converges uniformly if and only if it is uniformly Cauchy"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pointwise-uniform-and-uniformly-cauchy-convergence, thm-cauchy-criterion-via-lub, lem-of-triangle-inequality]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Stanford Math 63CM, Additional Lecture Notes, Theorem 1.12"
      url: "https://math.stanford.edu/~ryzhik/STANFORD/STANF63CM-20/lecture-notes-63cm-20-prelim.pdf"
    - title: "W. Trench, Introduction to Real Analysis"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a set and let $f_k:X\to\mathbb{R}$ for every
$k\in\mathbb{N}$. Then $(f_k)$ converges uniformly on $X$ to some
$f:X\to\mathbb{R}$ if and only if $(f_k)$ is uniformly Cauchy on $X$
([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

## Facts & Assumptions

**Given:** A set $X$ and a sequence of functions $f_k:X\to\mathbb{R}$.

[A1] Uniform convergence to $f$ means that for every real $\varepsilon>0$ there is $N$ such that $|f_k(x)-f(x)|<\varepsilon$ for every $k\ge N$ and every $x\in X$ ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

[A2] Uniform Cauchyness means that for every real $\varepsilon>0$ there is $N$ such that $|f_m(x)-f_n(x)|<\varepsilon$ for every $m,n\ge N$ and every $x\in X$ ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

[A3] Pointwise convergence as defined through real sequences can equivalently be tested with every positive real error ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

[L1] For reals $u,v$, $|u+v|\le |u|+|v|$ ([[lem-of-triangle-inequality]]).

[L2] Every Cauchy sequence of reals converges to a real ([[thm-cauchy-criterion-via-lub]]).

## Proof

**Proof technique:** direct.

1.1 Suppose first that $f_k\to f$ uniformly on $X$, and let $\varepsilon>0$ be real. By [A1] choose $N$ with $|f_j(x)-f(x)|<\varepsilon/2$ for every $j\ge N$ and $x\in X$. Thus, for $m,n\ge N$ and $x\in X$, $|f_m(x)-f_n(x)|\le |f_m(x)-f(x)|+|f(x)-f_n(x)|<\varepsilon$. Since $\varepsilon$ was arbitrary, $(f_k)$ is uniformly Cauchy. [A1, A2, L1, choose, algebra]

1.2 Conversely, suppose that $(f_k)$ is uniformly Cauchy on $X$. For each $x\in X$, [A2] makes $(f_k(x))$ a Cauchy real sequence; by [L2] it has a real limit $f(x)$. These values define a function $f:X\to\mathbb{R}$. [A2, L2, construct]

1.3 Under this converse assumption, let $\varepsilon>0$ be real and choose $N$ such that $|f_m(x)-f_n(x)|<\varepsilon/2$ for every $m,n\ge N$ and every $x\in X$. [A2, choose]

2.1 Fix $k\ge N$ and $x\in X$. Pointwise convergence at $x$ gives a threshold $M$ such that $|f_n(x)-f(x)|<\varepsilon/2$ for $n\ge M$. Choose $n\ge N,M$. Then $|f_k(x)-f(x)|\le |f_k(x)-f_n(x)|+|f_n(x)-f(x)|<\varepsilon$. [step 1.2, step 1.3, A3, L1, choose]

3.1 The index $N$ in step 1.3 is independent of $k$ and $x$, so step 2.1 proves $f_k\to f$ uniformly. Together with step 1.1 this proves both directions. [step 1.1, step 2.1, A1] ∎
````
