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

## Assigned exact-final target — `cex-shrinking-rectangles-have-integral-one`

Item path: `items/cex-shrinking-rectangles-have-integral-one.md`

Normalized final-text SHA-256 at dispatch: `52fe2fd8da9a1f07faaf7efcb05f20640f6ee2abd95c21a638423649c359874a`

Target type(s): `A6-source-correction`

- A6 removed the failed redundant Lebl draft endpoint; a live semantic source remains

Read the complete current item and every dependency needed for the changed inference or source attribution. For source work, open the retained exact-final URL(s) and compare the public claim with the current provenance rationale.

Current generated-manifest rows:

```json
[
  {
    "source": "cex-shrinking-rectangles-have-integral-one",
    "sourcePage": "uniform-convergence-of-functions-examples",
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
    "source": "cex-shrinking-rectangles-have-integral-one",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
    "target": "def-darboux-integral",
    "declared_target": "def-darboux-integral",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-riemann-integral",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-shrinking-rectangles-have-integral-one",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
    "target": "thm-finitely-many-discontinuities-integrable",
    "declared_target": "thm-finitely-many-discontinuities-integrable",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-riemann-integral",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-shrinking-rectangles-have-integral-one",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-changing-a-function-at-finitely-many-points",
    "declared_target": "lem-changing-a-function-at-finitely-many-points",
    "target_statement_provenance": "literature-derived",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-shrinking-rectangles-have-integral-one",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-integral-elementary-bounds",
    "declared_target": "lem-integral-elementary-bounds",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-riemann-integral",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-shrinking-rectangles-have-integral-one",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
    "target": "thm-additivity-over-subintervals",
    "declared_target": "thm-additivity-over-subintervals",
    "target_statement_provenance": "ai-altered",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-shrinking-rectangles-have-integral-one",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
    "target": "def-oriented-integral",
    "declared_target": "def-oriented-integral",
    "target_statement_provenance": "literature-derived",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-shrinking-rectangles-have-integral-one",
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
    "source": "cex-shrinking-rectangles-have-integral-one",
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
    "source": "cex-shrinking-rectangles-have-integral-one",
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
    "source": "cex-shrinking-rectangles-have-integral-one",
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
  }
]
```

Current provenance row:

```json
{
  "id": "cex-shrinking-rectangles-have-integral-one",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
  ],
  "rationale": "Shrinking rectangles converge pointwise to zero while every integral equals one: The open textbooks give the corresponding uniform-convergence definition, permanence/interchange theorem, completeness result, or standard counterexample; the item reindexes sequences at zero and spells out the library’s metric, Riemann-integral, endpoint, and dependency conventions. The supplied numbered argument was audited as a local proof rather than a transcription or identifiable adaptation of a source proof.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

Exact current item at dispatch:

````markdown
---
id: cex-shrinking-rectangles-have-integral-one
kind: counterexample
title: "Shrinking rectangles converge pointwise to zero while every integral equals one"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pointwise-uniform-and-uniformly-cauchy-convergence, def-darboux-integral, thm-finitely-many-discontinuities-integrable, lem-changing-a-function-at-finitely-many-points, lem-integral-elementary-bounds, thm-additivity-over-subintervals, def-oriented-integral, cor-archimedean-reciprocal, def-canonical-natural, lem-of-naturals-positive, lem-of-inverse-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "W. F. Trench, Introduction to Real Analysis, §4.4"
      url: "https://open.umn.edu/opentextbooks/textbooks/174"
    - title: "W. Trench, Introduction to Real Analysis"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** if Riemann-integrable functions on $[0,1]$ converge
pointwise to $0$, then their integrals converge to $0$.

For $k\in\mathbb{N}$ put $a_k:=\iota(k+1)$, the positive canonical natural in
$\mathbb{R}$, and define

$$r_k(x):=\begin{cases}a_k,&0<x\le1/a_k,\\0,&x=0\text{ or }1/a_k<x\le1.\end{cases}$$

Then $r_k\to0$ pointwise while $\int_0^1r_k=1$ for every $k$.

## Facts & Assumptions

**Given:** The functions $r_k$ in the Statement, with $a_k=\iota(k+1)>0$.

[L1] For every real $\varepsilon>0$ there is $N\ge1$ with $1/\iota(N)<\varepsilon$; canonical naturals increase and their positive reciprocals decrease ([[cor-archimedean-reciprocal]], [[def-canonical-natural]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[L2] A bounded function on a closed interval with only finitely many possible discontinuities is Riemann integrable ([[thm-finitely-many-discontinuities-integrable]], [[def-darboux-integral]]).

[L3] Changing an integrable function at finitely many points preserves its integrability and integral ([[lem-changing-a-function-at-finitely-many-points]]).

[L4] A constant $c$ has integral $c(v-u)$ on $[u,v]$, and integrals add over adjacent subintervals, including the oriented convention at coincident endpoints ([[lem-integral-elementary-bounds]], [[thm-additivity-over-subintervals]], [[def-oriented-integral]]).

[L5] Pointwise convergence of $(f_k)$ to $f$ means that for every $x$ and every $\varepsilon>0$ there is an $N$ such that $k\ge N$ implies $|f_k(x)-f(x)|<\varepsilon$; uniform convergence requires one such $N$ for every $x$ simultaneously ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

## Counterexample

**Proof technique:** direct.

1.1 Each $r_k$ is bounded and is continuous except possibly at $0$ and $1/a_k$, so it is integrable by [L2]. [L2]

1.2 Let $q_k$ equal $a_k$ on $[0,1/a_k]$ and $0$ on $(1/a_k,1]$. The functions $q_k$ and $r_k$ differ only at $0$, so they have the same integral by [L3]. [L3, construct]

1.3 At $x=0$ one has $r_k(0)=0$ for all $k$. If $x>0$, choose $N$ with $1/\iota(N)<x$; for $k\ge N$, monotonicity of the canonical naturals gives $1/a_k<x$, hence $r_k(x)=0$. Thus $r_k\to0$ pointwise. [L1, L5, choose]

1.4 To see explicitly that the convergence is not uniform, take $\varepsilon:=1/2$. For every proposed $N\in\mathbb N$, choose $k:=N$ and $x_N:=1/a_N$; then $|r_N(x_N)-0|=a_N\ge1>\varepsilon$. Thus the uniform quantifier condition in [L5] fails. [given, L1, L5]

2.1 By [L3] and [L4], endpoint values do not affect either piece, and splitting at $1/a_k$ when it lies in the interior, with the coincident-endpoint convention otherwise, gives $\int_0^1q_k=a_k(1/a_k)+0=1$. [step 1.2, L3, L4, algebra]

3.1 Steps 1.2 and 2.1 give $\int_0^1r_k=1$ for every $k$, whereas the integral of the zero function is $0$. [step 1.2, step 2.1, L3, L4]

4.1 The sequence therefore converges pointwise to $0$ but its integrals do not converge to the integral of the limit, refuting the claim. [step 1.3, step 3.1] ∎
````
