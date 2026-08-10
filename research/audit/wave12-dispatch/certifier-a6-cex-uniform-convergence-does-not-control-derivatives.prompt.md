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

## Assigned exact-final target — `cex-uniform-convergence-does-not-control-derivatives`

Item path: `items/cex-uniform-convergence-does-not-control-derivatives.md`

Normalized final-text SHA-256 at dispatch: `c4f9594cda63007cc29337f5f9358324a5fb360be1e891ebaac888918584099e`

Target type(s): `A6-source-correction`

- A6 removed the failed redundant Lebl draft endpoint; a live semantic source remains

Read the complete current item and every dependency needed for the changed inference or source attribution. For source work, open the retained exact-final URL(s) and compare the public claim with the current provenance rationale.

Current generated-manifest rows:

```json
[
  {
    "source": "cex-uniform-convergence-does-not-control-derivatives",
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
    "source": "cex-uniform-convergence-does-not-control-derivatives",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
    "target": "def-derivative",
    "declared_target": "def-derivative",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-uniform-convergence-does-not-control-derivatives",
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
    "source": "cex-uniform-convergence-does-not-control-derivatives",
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
    "source": "cex-uniform-convergence-does-not-control-derivatives",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-of-square-positive",
    "declared_target": "lem-of-square-positive",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-uniform-convergence-does-not-control-derivatives",
    "sourcePage": "uniform-convergence-of-functions-examples",
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
    "source": "cex-uniform-convergence-does-not-control-derivatives",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
    "target": "def-integer-power",
    "declared_target": "def-integer-power",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-uniform-convergence-does-not-control-derivatives",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-derivative-of-a-power",
    "declared_target": "lem-derivative-of-a-power",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-uniform-convergence-does-not-control-derivatives",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
    "target": "thm-algebra-of-derivatives",
    "declared_target": "thm-algebra-of-derivatives",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-derivative-and-mean-value-theorems",
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
  "id": "cex-uniform-convergence-does-not-control-derivatives",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
  ],
  "rationale": "$x/(1+(k+1)^2x^2)$ converges uniformly to zero on $\\\\mathbb{R}$ while every derivative at zero equals one: The open textbooks give the corresponding uniform-convergence definition, permanence/interchange theorem, completeness result, or standard counterexample; the item reindexes sequences at zero and spells out the library’s metric, Riemann-integral, endpoint, and dependency conventions. The supplied numbered argument was audited as a local proof rather than a transcription or identifiable adaptation of a source proof.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

Exact current item at dispatch:

````markdown
---
id: cex-uniform-convergence-does-not-control-derivatives
kind: counterexample
title: "$x/(1+(k+1)^2x^2)$ converges uniformly to zero on $\\mathbb{R}$ while every derivative at zero equals one"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pointwise-uniform-and-uniformly-cauchy-convergence, def-derivative, def-canonical-natural, cor-archimedean-reciprocal, lem-of-square-positive, lem-of-abs-value, def-integer-power, lem-derivative-of-a-power, thm-algebra-of-derivatives]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B, Real Analysis, Lectures 20–21"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "W. Trench, Introduction to Real Analysis"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** if differentiable functions converge uniformly, their
derivatives must converge to the derivative of the limit.

For $k\in\mathbb{N}$ put $a_k:=\iota(k+1)$ and define

$$f_k(x):=\frac{x}{1+a_k^2x^2}\qquad(x\in\mathbb{R}).$$

Then $f_k\to0$ uniformly on $\mathbb{R}$, but $f_k'(0)=1$ for every $k$, whereas
the derivative of the zero function is $0$.

## Facts & Assumptions

**Given:** The functions $f_k$ in the Statement, with $a_k=\iota(k+1)>0$.

[L1] Every square in an ordered field is nonnegative, with a nonzero square positive; absolute value is multiplicative ([[lem-of-square-positive]], [[lem-of-abs-value]]).

[L2] Natural powers are differentiable by the power rule, and sums, products, and quotients with nonzero denominator obey the usual derivative rules ([[lem-derivative-of-a-power]], [[thm-algebra-of-derivatives]], [[def-derivative]], [[def-integer-power]]).

[L3] For every real $\varepsilon>0$ there is $N\ge1$ with $1/\iota(N)<\varepsilon$ ([[cor-archimedean-reciprocal]], [[def-canonical-natural]]).

[L4] Uniform convergence requires one index controlling the error at every point ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

## Counterexample

**Proof technique:** direct.

1.1 The denominator $1+a_k^2x^2$ is positive for every $x$, so $f_k$ is differentiable on $\mathbb{R}$ by [L2]. [L1, L2]

1.2 From $(a_k|x|-1)^2\ge0$ one obtains $2a_k|x|\le1+a_k^2x^2$, hence $|f_k(x)|\le1/(2a_k)$ for every $x\in\mathbb{R}$. [L1, algebra]

1.3 At $x=0$, the numerator $x$ has derivative $1$, the denominator $1+a_k^2x^2$ has value $1$ and derivative $0$, so the quotient rule gives $f_k'(0)=1$. [L2, algebra]

1.4 The zero function has derivative $0$ by the constant case of the power rule. [L2]

2.1 Given $\varepsilon>0$, [L3] gives $N$ such that $1/(2a_k)<\varepsilon$ for every $k\ge N$; step 1.2 then gives $|f_k(x)|<\varepsilon$ for every $x\in\mathbb{R}$. [step 1.2, L3, choose]

3.1 Step 2.1 proves $f_k\to0$ uniformly, while steps 1.3 and 1.4 show that the derivatives at $0$ do not converge to the derivative of the limit. [step 2.1, step 1.3, step 1.4, L4]

4.1 The uniformly convergent differentiable sequence therefore refutes the claim. [step 3.1] ∎
````
