# Independent repair certifier brief — Wave 11, A6

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
an external source is material. For the repaired page, read the complete
current page and all current items it summarizes; pages have no item stamp. For
a source-correction task, open the exact source, compare the cited claim against
it, and state whether the final attribution and provenance class are exact.

Return exactly:

```text
ITEM: <id-or-page-path-or-source-label>
VERDICT: CERTIFIED | REFUSED | BLOCKED
CURRENT-TEXT: READ
MATHEMATICS: [concise evidence]
CITATIONS: [concise evidence]
METADATA: [provenance/dependencies/stale-verdict disposition, or n/a for page]
FINDINGS: NONE | [fatal defect or concrete blocker]
```

Do not suggest optional polishing and do not write a verification stamp.


---

# This dispatch

## Assigned exact-final target — `thm-taylor-peano-remainder`

Item path: `items/thm-taylor-peano-remainder.md`

Normalized final-text SHA-256 at dispatch: `1fd31188a9056349302d69f4d887bed4cd76fd75d92e505ea13400b108d39295`

Target type: `item-source-repair`

- A6 replacement of failed Iowa DNS source with exact live Drexel Peano/Lagrange note

Read the complete current item and every exact dependency needed for the changed inference or source attribution. For source work, open the exact final URL(s) with web access and compare the source claim to the current provenance rationale and public Statement.

Current generated-manifest rows (completeness checklist only):

```json
[
  {
    "source": "thm-taylor-peano-remainder",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "def-taylor-polynomial-and-remainder",
    "declared_target": "def-taylor-polynomial-and-remainder",
    "target_statement_provenance": "ai-altered",
    "targetPage": "darboux-lhopital-and-taylor",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-taylor-peano-remainder",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "lem-taylor-polynomial-derivatives",
    "declared_target": "lem-taylor-polynomial-derivatives",
    "target_statement_provenance": "literature-derived",
    "targetPage": "darboux-lhopital-and-taylor",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-taylor-peano-remainder",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "lem-cauchy-mean-value-quotient-form",
    "declared_target": "lem-cauchy-mean-value-quotient-form",
    "target_statement_provenance": "literature-derived",
    "targetPage": "darboux-lhopital-and-taylor",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-taylor-peano-remainder",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
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
    "source": "thm-taylor-peano-remainder",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "thm-chain-rule",
    "declared_target": "thm-chain-rule",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-taylor-peano-remainder",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "cor-differentiable-implies-continuous",
    "declared_target": "cor-differentiable-implies-continuous",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-taylor-peano-remainder",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
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
    "source": "thm-taylor-peano-remainder",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "def-function-limit",
    "declared_target": "def-function-limit",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limits-of-real-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-taylor-peano-remainder",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "def-continuity-real",
    "declared_target": "def-continuity-real",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-taylor-peano-remainder",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "def-neighbourhood-r",
    "declared_target": "def-neighbourhood-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-taylor-peano-remainder",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "thm-algebra-of-function-limits",
    "declared_target": "thm-algebra-of-function-limits",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limits-of-real-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-taylor-peano-remainder",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "thm-induction-principle",
    "declared_target": "thm-induction-principle",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-taylor-peano-remainder",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
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
    "source": "thm-taylor-peano-remainder",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "lem-of-naturals-positive",
    "declared_target": "lem-of-naturals-positive",
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
  "id": "thm-taylor-peano-remainder",
  "statement": "literature-derived",
  "proof": "ai-generated",
  "evidence": "exact-source",
  "urls": [
    "https://www.math.drexel.edu/~tolya/Lagrange%20remainder.pdf"
  ],
  "rationale": "Grinshpan's university Real Analysis note states the Peano form under n-times differentiability at the expansion point, with remainder o((x-a)^n), matching the item's hypothesis, quantifier, and direction. The inductive quotient proof is local.",
  "alpha_concurred": false,
  "at": "2026-08-10"
}
```

Exact current item at dispatch:

````markdown
---
id: thm-taylor-peano-remainder
kind: theorem
title: "Peano's form: the normalized Taylor remainder tends to zero"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-taylor-polynomial-and-remainder, lem-taylor-polynomial-derivatives, lem-cauchy-mean-value-quotient-form, lem-derivative-of-a-power, thm-chain-rule, cor-differentiable-implies-continuous, def-derivative, def-function-limit, def-continuity-real, def-neighbourhood-r, thm-algebra-of-function-limits, thm-induction-principle, def-canonical-natural, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 lecture notes"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/lecture-notes/"
    - title: "A. Grinshpan, Real Analysis: Peano and Lagrange remainder terms"
      url: "https://www.math.drexel.edu/~tolya/Lagrange%20remainder.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$. If there is a real $\delta>0$ such that $f$ is
$n$-times differentiable on the open interval
$N_\delta(a)=(a-\delta,a+\delta)$, then
$$\frac{R_{n,a}f(x)}{(x-a)^n}\longrightarrow0\qquad(x\to a).$$
Equivalently, in the usual little-$o$ shorthand,
$f(x)=T_{n,a}f(x)+o((x-a)^n)$. For $n=0$, the analogous assertion is the
separate continuity condition at $a$: for every $\varepsilon>0$, all
domain points $x$ sufficiently near $a$ satisfy
$|f(x)-f(a)|<\varepsilon$.

## Facts & Assumptions

**Given:** The stated differentiability on the open neighbourhood $N_\delta(a)$ of [[def-neighbourhood-r]], or the separate continuity hypothesis when $n=0$.

[L1] Taylor polynomials and their matching derivatives are [[def-taylor-polynomial-and-remainder]] and [[lem-taylor-polynomial-derivatives]].

[L2] The derivative quotient is [[def-derivative]], differentiability implies continuity ([[cor-differentiable-implies-continuous]]), and continuity at $a$ has the stated quantified condition ([[def-continuity-real]]). The Cauchy quotient lemma is [[lem-cauchy-mean-value-quotient-form]], the shifted-power derivative follows from [[lem-derivative-of-a-power]] and [[thm-chain-rule]], and finite limits are [[def-function-limit]] and obey [[thm-algebra-of-function-limits]].

[L3] For $n\ge1$, the canonical real $\iota(n)$ is positive and hence nonzero ([[def-canonical-natural]], [[lem-of-naturals-positive]]).

## Proof

**Proof technique:** induction.

1.1 Under the separate $n=0$ hypothesis, the quantified assertion is exactly the definition of continuity at $a$.  [given, L2]

1.2 For $n=1$, the derivative definition gives $$\frac{f(x)-f(a)-f'(a)(x-a)}{x-a} =\frac{f(x)-f(a)}{x-a}-f'(a)\longrightarrow0.$$ This is the required base case.  [base, given, L2]

1.3 Assume $n\ge2$ and the assertion through order $n-1$. Put $R=R_{n,a}f$. Then $R(a)=R'(a)=0$, and $R'(x)=R_{n-1,a}(f')(x)$.  [L1, algebra]

2.1 By the induction hypothesis applied to $f'$, $R'(x)/(x-a)^{n-1}\to0$. Applying the Cauchy quotient lemma to $R(x)-R(a)$ and $(x-a)^n$ gives $R(x)/(x-a)^n=R'(\xi)/(\iota(n)(\xi-a)^{n-1})$ for a point $\xi$ between $a$ and $x$.  [step 1.3, ih, L2, L3]

3.1 Since $\xi\to a$, the right side tends to $0$. This proves the Peano estimate without assuming continuity of $f^{(n)}$.  [step 2.1, L2, discharge-induction] ∎
````
