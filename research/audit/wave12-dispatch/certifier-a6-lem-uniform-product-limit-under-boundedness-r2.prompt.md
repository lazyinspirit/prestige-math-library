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

## Assigned exact-final target — `lem-uniform-product-limit-under-boundedness`

Item path: `items/lem-uniform-product-limit-under-boundedness.md`

Normalized final-text SHA-256 at dispatch: `e7af45d7579504b248bb712a9471f3781b75cf0fa2668d14a7711dd95347bf99`

Target type(s): `A6-source-correction`

- A6 removed the failed redundant Lebl draft endpoint; a live semantic source remains

Read the complete current item and every dependency needed for the changed inference or source attribution. For source work, open the retained exact-final URL(s) and compare the public claim with the current provenance rationale.

Current generated-manifest rows:

```json
[
  {
    "source": "lem-uniform-product-limit-under-boundedness",
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
    "source": "lem-uniform-product-limit-under-boundedness",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "def-bounded-set",
    "declared_target": "def-bounded-set",
    "target_statement_provenance": "literature-derived",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-uniform-product-limit-under-boundedness",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "lem-of-abs-value",
    "declared_target": "lem-of-abs-value",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-uniform-product-limit-under-boundedness",
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
  "id": "lem-uniform-product-limit-under-boundedness",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
  ],
  "rationale": "Products converge uniformly when both factors converge uniformly and one limiting factor and one approximating family are uniformly bounded: The open textbooks give the corresponding uniform-convergence definition, permanence/interchange theorem, completeness result, or standard counterexample; the item reindexes sequences at zero and spells out the library’s metric, Riemann-integral, endpoint, and dependency conventions. The supplied numbered argument was audited as a local proof rather than a transcription or identifiable adaptation of a source proof.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

Exact current item at dispatch:

````markdown
---
id: lem-uniform-product-limit-under-boundedness
kind: lemma
title: "Products converge uniformly when both factors converge uniformly and one limiting factor and one approximating family are uniformly bounded"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pointwise-uniform-and-uniformly-cauchy-convergence, def-bounded-set, lem-of-abs-value, lem-of-triangle-inequality]
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

Let $X$ be a set, and suppose $f_k\to f$ and $g_k\to g$ uniformly on $X$.
Assume there are reals $B,C\ge0$ such that

$$|f(x)|\le B\quad\text{and}\quad |g_k(x)|\le C$$

for every $x\in X$ and every $k\in\mathbb{N}$. Then
$f_kg_k\to fg$ uniformly on $X$.

The same conclusion holds after interchanging the two factors: it is enough
that one limit function and the approximating sequence of the other factor
have uniform bounds.

## Facts & Assumptions

**Given:** Uniform convergence $f_k\to f$ and $g_k\to g$ on $X$, with bounds $|f(x)|\le B$ and $|g_k(x)|\le C$ for all $x,k$.

[A1] Uniform convergence gives one index serving all points for any prescribed positive real error ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

[A2] A subset of $\mathbb{R}$ is bounded when it has real lower and upper bounds; the displayed absolute-value inequalities are the corresponding uniform bounds on the ranges ([[def-bounded-set]]).

[L1] For reals $u,v,c$, $|u+v|\le|u|+|v|$ and $|cu|=|c||u|$ ([[lem-of-triangle-inequality]], [[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 Let $\varepsilon>0$ be real and put $\eta:=\varepsilon/(B+C+1)>0$. [construct]

1.2 Choose $N$ such that, for every $k\ge N$ and every $x\in X$, both $|f_k(x)-f(x)|<\eta$ and $|g_k(x)-g(x)|<\eta$. [A1, choose]

2.1 For $k\ge N$ and $x\in X$, add and subtract $f(x)g_k(x)$ to obtain $|f_k(x)g_k(x)-f(x)g(x)|\le |g_k(x)|\,|f_k(x)-f(x)|+|f(x)|\,|g_k(x)-g(x)|<(B+C)\eta<\varepsilon$. [step 1.1, step 1.2, A2, L1, algebra]

3.1 Since $N$ is independent of $x$, step 2.1 proves $f_kg_k\to fg$ uniformly. Interchanging the names of the factors gives the symmetric clause. [step 2.1, A1] ∎
````
