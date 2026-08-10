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

## Assigned exact-final target — `cor-uniform-cauchy-criterion-function-series`

Item path: `items/cor-uniform-cauchy-criterion-function-series.md`

Normalized final-text SHA-256 at dispatch: `7955c3b2daa48dec91349ba63b0559daffe4ea8a8d39c4b8019d9103d6eea507`

Target type(s): `A6-source-correction`

- A6 removed the failed redundant Lebl draft endpoint; a live semantic source remains

Read the complete current item and every dependency needed for the changed inference or source attribution. For source work, open the retained exact-final URL(s) and compare the public claim with the current provenance rationale.

Current generated-manifest rows:

```json
[
  {
    "source": "cor-uniform-cauchy-criterion-function-series",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "def-series-of-real-functions",
    "declared_target": "def-series-of-real-functions",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-convergence-of-functions",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-uniform-cauchy-criterion-function-series",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "thm-uniform-cauchy-criterion-real-functions",
    "declared_target": "thm-uniform-cauchy-criterion-real-functions",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-convergence-of-functions",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-uniform-cauchy-criterion-function-series",
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
  }
]
```

Current provenance row:

```json
{
  "id": "cor-uniform-cauchy-criterion-function-series",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
  ],
  "rationale": "A series of real-valued functions converges uniformly if and only if its tails are uniformly small: The open textbooks give the corresponding uniform-convergence definition, permanence/interchange theorem, completeness result, or standard counterexample; the item reindexes sequences at zero and spells out the library’s metric, Riemann-integral, endpoint, and dependency conventions. The supplied numbered argument was audited as a local proof rather than a transcription or identifiable adaptation of a source proof.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

Exact current item at dispatch:

````markdown
---
id: cor-uniform-cauchy-criterion-function-series
kind: corollary
title: "A series of real-valued functions converges uniformly if and only if its tails are uniformly small"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-series-of-real-functions, thm-uniform-cauchy-criterion-real-functions, lem-of-abs-value]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Mathematics LibreTexts, Sequences and Series of Functions"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/04%253A_Function_Limits_and_Continuity/4.12%253A_Sequences_and_Series_of_Functions"
    - title: "W. Trench, Introduction to Real Analysis"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a set and let $f_k:X\to\mathbb{R}$. The function series
$\sum f_k$ converges uniformly on $X$ if and only if, for every real
$\varepsilon>0$, there is $N\in\mathbb{N}$ such that

$$\left|\sum_{k=m+1}^{n}f_k(x)\right|<\varepsilon$$

for every $n>m\ge N$ and every $x\in X$.

## Facts & Assumptions

**Given:** A set $X$, functions $f_k:X\to\mathbb{R}$, and partial-sum functions $S_r(x)=\sum_{k<r}f_k(x)$.

[L1] The series $\sum f_k$ converges uniformly exactly when its partial-sum sequence $(S_r)$ converges uniformly ([[def-series-of-real-functions]]).

[L2] A sequence of real-valued functions converges uniformly exactly when it is uniformly Cauchy ([[thm-uniform-cauchy-criterion-real-functions]]).

[L3] For $n>m$, $\sum_{k=m+1}^{n}f_k(x)=S_{n+1}(x)-S_{m+1}(x)$, and $|-u|=|u|$ for every real $u$ ([[def-series-of-real-functions]], [[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 Suppose first that $\sum f_k$ converges uniformly, and let $\varepsilon>0$ be real. [L1]

1.2 Conversely, suppose the displayed tail condition holds, and fix a real $\varepsilon>0$ and a corresponding index $N$. [given]

2.1 By [L1] and [L2], choose $K$ such that $|S_p(x)-S_q(x)|<\varepsilon$ for every $p,q\ge K$ and every $x\in X$. [step 1.1, L1, L2, choose]

2.2 Put $K:=N+1$. If $p,q\ge K$ and $x\in X$, then the difference is $0$ when $p=q$; if $p>q$, set $m=q-1\ge N$ and $n=p-1>m$, so the tail condition and [L3] give $|S_p(x)-S_q(x)|<\varepsilon$; the case $q>p$ follows by symmetry of absolute value. [step 1.2, L3, algebra]

3.1 For $n>m\ge K$ and $x\in X$, the indices $n+1,m+1$ are at least $K$, so [L3] and step 2.1 give $\left|\sum_{k=m+1}^{n}f_k(x)\right|<\varepsilon$. [step 2.1, L3]

3.2 Thus $(S_r)$ is uniformly Cauchy, hence converges uniformly by [L2], and therefore $\sum f_k$ converges uniformly by [L1]. [step 2.2, L1, L2]

4.1 Steps 3.1 and 3.2 prove the two implications, hence the equivalence. [step 3.1, step 3.2] ∎
````
