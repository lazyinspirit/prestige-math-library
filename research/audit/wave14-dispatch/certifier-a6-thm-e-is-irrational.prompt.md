# Independent repair certifier brief — Wave 14, A6

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30).** Use only non-mutating
> reads already available in the read-only sandbox. Do not edit, delegate,
> escalate, or ask for shell or edit permission.

You are **GPT 5.6 Terra** at `xhigh` effort with a 1,000,000-token context
window. You are an independent, read-only certifier of a repair you did not
author.

## Binding triage

- **Non-negotiable:** mathematical accuracy, logical validity, correct citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes within 30 seconds; other non-fatal quirks;
  imperfection at the level of the letter.

Read the assigned target's exact current final text from disk and compare its
hash with the dispatch task. Read every dependency needed for the repaired
inference, the title/public statement, every numbered step, Facts & Assumptions,
Remarks, dependency list, provenance tags, sources, and verification block.
Check the named baseline defect is fixed without a new one and that stale
pre-repair judge/audited evidence is absent. For a source-only repair, verify
that every removed URL was redundant, the retained source directly supports
the provenance classification/rationale, and the public mathematics is
unchanged. Use web access when an external source is material.

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

## Assigned exact-final target — `thm-e-is-irrational`

Item path: `items/thm-e-is-irrational.md`

Normalized final-text SHA-256 at dispatch: `733ef7c24688da2b73d1223df8b5729e86121937c6c4ee5e028d699cb63bb38a`

Target type(s): `A4-material`

- A4 reordered the integer-tail contradiction, corrected the tail bound, and added canonical-natural positivity

Read these exact-current cited/dependency ids from disk (8): `def-canonical-natural`, `def-factorial-and-falling-factorial`, `def-integers`, `def-rationals`, `def-real-exponential-function-and-e`, `lem-exponential-factorial-tail-bound`, `lem-of-naturals-positive`, `thm-of-archimedean`.

For source work, open every retained provenance URL and compare its mathematical claim with the current item and rationale. The two removed shell-blocked routes were independently confirmed browser-accessible but redundant; no retained evidence may be weakened by their removal.

Current generated-manifest rows:

```json
[
  {
    "source": "thm-e-is-irrational",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "lem-exponential-factorial-tail-bound",
    "declared_target": "lem-exponential-factorial-tail-bound",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-exponential-function",
    "targetBatch": "wave14-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-e-is-irrational",
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
    "source": "thm-e-is-irrational",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "def-rationals",
    "declared_target": "def-rationals",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-e-is-irrational",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "def-integers",
    "declared_target": "def-integers",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-e-is-irrational",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "def-factorial-and-falling-factorial",
    "declared_target": "def-factorial-and-falling-factorial",
    "target_statement_provenance": "ai-altered",
    "targetPage": "finite-counting-and-binomial-coefficients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-e-is-irrational",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "thm-of-archimedean",
    "declared_target": "thm-of-archimedean",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-e-is-irrational",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
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
    "source": "thm-e-is-irrational",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
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
  "id": "thm-e-is-irrational",
  "statement": "literature-derived",
  "proof": "literature-derived",
  "evidence": "exact-source",
  "urls": [
    "https://math.mit.edu/classes/proofsiap/notes/Lecture2.pdf",
    "https://www.math.lsu.edu/~mahlburg/teaching/handouts/2018-7230/HW1.pdf"
  ],
  "rationale": "Both university sources state that e is irrational and use the classical contradiction in which a factorial-scaled positive tail is an integer strictly between 0 and 1. The published proof currently misattributes one tail estimate; that is an A2 citation defect, not a change in the proof's recognizable literary provenance.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

Exact current item at dispatch:

````markdown
---
id: thm-e-is-irrational
kind: theorem
title: "The number $e$ is irrational"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-exponential-factorial-tail-bound, def-real-exponential-function-and-e, def-rationals, def-integers, def-factorial-and-falling-factorial, thm-of-archimedean, def-canonical-natural, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "J. Lebl, Basic Analysis, Analytic Functions"
      url: "https://www.jirka.org/ra/html/sec_analfuncs.html"
    - title: "MIT Proofs in Analysis and Probability, Lecture 2 notes"
      url: "https://math.mit.edu/classes/proofsiap/notes/Lecture2.pdf"
    - title: "LSU MATH 7230, Homework 1"
      url: "https://www.math.lsu.edu/~mahlburg/teaching/handouts/2018-7230/HW1.pdf"
pipeline_run: null
---

## Statement

The number $e$ is irrational.

## Facts & Assumptions

**Given:** The series definition of $e$ ([[def-real-exponential-function-and-e]]).

[L1] Factorials are nonzero naturals and obey their recurrence, and every positive natural has a positive, hence nonzero, canonical real image ([[def-factorial-and-falling-factorial]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L2] The exponential factorial tail is bounded by [[lem-exponential-factorial-tail-bound]].

## Proof

**Proof technique:** contradiction.

1.1 Assume $e=p/q$ with integers $p$ and $q\ge1$ ([[def-rationals]], [[def-integers]]). Choose a natural $n\ge\max\{q,2\}$ ([[thm-of-archimedean]]).  [assume-contra, choose]

2.1 Put $A:=\iota(n!)\left(e-\sum_{k=0}^{n}1/\iota(k!)\right)$. Every tail term is positive, so $A>0$. Applying [L2] with $x=1$ and $N=n$, then using the factorial recurrence, gives $$ A\le \frac{2\iota(n!)}{\iota((n+1)!)} =\frac2{\iota(n+1)} \le\frac23<1 $$ because $n\ge2$.  [step 1.1, L1, L2, algebra]

3.1 The number $A$ from step 2.1 is an integer: both $\iota(n!)e=\iota(n!)p/q$ and every $\iota(n!)/\iota(k!)$ are integers because $q\mid n!$ and $k!\mid n!$.  [step 1.1, L1, algebra]

4.1 No integer lies strictly between $0$ and $1$, contradicting steps 3.1 and 2.1. Therefore $e\notin\mathbb Q$.  [step 3.1, step 2.1, discharge-contradiction] ∎
````
