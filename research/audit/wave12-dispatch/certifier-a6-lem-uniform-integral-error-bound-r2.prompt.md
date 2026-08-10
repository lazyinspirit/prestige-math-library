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

## Assigned exact-final target — `lem-uniform-integral-error-bound`

Item path: `items/lem-uniform-integral-error-bound.md`

Normalized final-text SHA-256 at dispatch: `de261b34daa3402e4275effd9bbf1c39af6b5596c4f2a0dabd373a959ac9c334`

Target type(s): `A6-source-correction`

- A6 removed the failed redundant Lebl draft endpoint; a live semantic source remains

Read the complete current item and every dependency needed for the changed inference or source attribution. For source work, open the retained exact-final URL(s) and compare the public claim with the current provenance rationale.

Current generated-manifest rows:

```json
[
  {
    "source": "lem-uniform-integral-error-bound",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "thm-linearity-of-the-integral",
    "declared_target": "thm-linearity-of-the-integral",
    "target_statement_provenance": "literature-derived",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-uniform-integral-error-bound",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "thm-monotonicity-of-the-integral",
    "declared_target": "thm-monotonicity-of-the-integral",
    "target_statement_provenance": "literature-derived",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-uniform-integral-error-bound",
    "sourcePage": "uniform-convergence-of-functions",
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
    "source": "lem-uniform-integral-error-bound",
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
  "id": "lem-uniform-integral-error-bound",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
  ],
  "rationale": "Uniformly close integrable functions have integrals differing by at most the interval length times their uniform error: The open textbooks give the corresponding uniform-convergence definition, permanence/interchange theorem, completeness result, or standard counterexample; the item reindexes sequences at zero and spells out the library’s metric, Riemann-integral, endpoint, and dependency conventions. The supplied numbered argument was audited as a local proof rather than a transcription or identifiable adaptation of a source proof.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

Exact current item at dispatch:

````markdown
---
id: lem-uniform-integral-error-bound
kind: lemma
title: "Uniformly close integrable functions have integrals differing by at most the interval length times their uniform error"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-linearity-of-the-integral, thm-monotonicity-of-the-integral, def-oriented-integral, lem-of-abs-value]
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

## Statement

Let $u,v\in\mathbb{R}$, and let $f$ and $g$ be integrable between $u$ and $v$.
If $\eta\ge0$ and

$$|f(x)-g(x)|\le\eta$$

throughout the closed interval with endpoints $u$ and $v$, then

$$\left|\int_u^v f-\int_u^v g\right|\le \eta\,|v-u|.$$

## Facts & Assumptions

**Given:** Reals $u,v$, functions $f,g$ integrable between them, and a real $\eta\ge0$ with $|f-g|\le\eta$ on the interval between them.

[L1] Linear combinations of integrable functions are integrable and their integrals are the corresponding linear combinations, including for oriented limits ([[thm-linearity-of-the-integral]], [[def-oriented-integral]]).

[L2] If $a<b$, an integrable function $h$ satisfying $m\le h(x)\le M$ on $[a,b]$ has $m(b-a)\le\int_a^b h\le M(b-a)$ ([[thm-monotonicity-of-the-integral]]).

[L3] For every real $z$, $-|z|\le z\le|z|$ and $|-z|=|z|$; for $c>0$, $|z|<c$ exactly when $-c<z<c$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 If $u=v$, both oriented integrals are $0$ and the asserted inequality holds. [L1, algebra]

1.2 Suppose $u<v$ and put $h:=f-g$. Then $h$ is integrable and $\int_u^v h=\int_u^v f-\int_u^v g$. [L1]

2.1 The hypothesis gives $|h(x)|\le\eta$, while [L3] gives $-|h(x)|\le h(x)\le|h(x)|$; hence $-\eta\le h(x)\le\eta$ on $[u,v]$, and [L2] gives $-\eta(v-u)\le\int_u^v h\le\eta(v-u)$. [step 1.2, L2, L3]

3.1 Hence $\left|\int_u^v f-\int_u^v g\right|=\left|\int_u^v h\right|\le\eta(v-u)$ when $u<v$. [step 1.2, step 2.1, L3]

4.1 If $u>v$, apply step 3.1 to the ordered pair $(v,u)$ and use antisymmetry of oriented integrals; the same bound results because $|u-v|=|v-u|$. [step 3.1, L1, L3]

5.1 The alternatives $u=v$, $u<v$, and $u>v$ are exhaustive, and steps 1.1, 3.1, and 4.1 give the claimed inequality. [step 1.1, step 3.1, step 4.1] ∎
````
