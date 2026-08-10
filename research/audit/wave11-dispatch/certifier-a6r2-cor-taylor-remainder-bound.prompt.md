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

## Assigned exact-final target — `cor-taylor-remainder-bound`

Item path: `items/cor-taylor-remainder-bound.md`

Normalized final-text SHA-256 at dispatch: `3727505d8318a08e271f9339f63a3aaceb6853ee2b57e272b67a48bc658d55e4`

Target type: `item-source-repair`

- A6 replacement of failed Iowa DNS and invalid-TLS Drexel sources with the live exact Taylor remainder source

Read the complete current item and every exact dependency needed for the changed inference or source attribution. For source work, open the exact final URL(s) with web access and compare the source claim to the current provenance rationale and public Statement.

Current generated-manifest rows (completeness checklist only):

```json
[
  {
    "source": "cor-taylor-remainder-bound",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "cor-taylor-lagrange-and-cauchy-remainders",
    "declared_target": "cor-taylor-lagrange-and-cauchy-remainders",
    "target_statement_provenance": "ai-altered",
    "targetPage": "darboux-lhopital-and-taylor",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-taylor-remainder-bound",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
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
    "source": "cor-taylor-remainder-bound",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
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
    "source": "cor-taylor-remainder-bound",
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
    "source": "cor-taylor-remainder-bound",
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
  "id": "cor-taylor-remainder-bound",
  "statement": "literature-derived",
  "proof": "ai-generated",
  "evidence": "exact-source",
  "urls": [
    "https://en.wikipedia.org/wiki/Taylor%27s_theorem"
  ],
  "rationale": "The live Taylor's theorem article states the Lagrange remainder formula under the corresponding derivative hypotheses and the resulting uniform error estimate. This matches the item's bound M|x-a|^{n+1}/(n+1)!; the repository proof is a direct local application of its preceding remainder theorem.",
  "alpha_concurred": false,
  "at": "2026-08-10"
}
```

Exact current item at dispatch:

````markdown
---
id: cor-taylor-remainder-bound
kind: corollary
title: "A uniform derivative bound gives a uniform Taylor remainder bound"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-taylor-lagrange-and-cauchy-remainders, lem-of-abs-value, def-factorial-and-falling-factorial, def-canonical-natural, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 lecture notes"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/lecture-notes/"
    - title: "Taylor's theorem (Wikipedia): Lagrange remainder and error estimate"
      url: "https://en.wikipedia.org/wiki/Taylor%27s_theorem"
pipeline_run: null
---

## Statement

Let $n\in\mathbb N$, and suppose $f$ has derivatives through order $n+1$ on the closed interval between $a$ and $x$, with the usual endpoint continuity. If $|f^{(n+1)}(t)|\le M$ throughout that interval, then
$$|R_{n,a}f(x)|\le \frac{M}{\iota((n+1)!)}|x-a|^{n+1}.$$

## Facts & Assumptions

**Given:** The stated regularity and derivative bound.

[L1] The Lagrange remainder formula is [[cor-taylor-lagrange-and-cauchy-remainders]].

[L2] Absolute value respects products and powers ([[lem-of-abs-value]]), and factorials are positive ([[def-factorial-and-falling-factorial]], [[lem-of-naturals-positive]], [[def-canonical-natural]]).

## Proof

**Proof technique:** direct.

1.1 If $x=a$, then $R_{n,a}f(a)=0$, so the estimate is immediate. If $x\ne a$, [L1] gives $$R_{n,a}f(x)=\frac{f^{(n+1)}(\xi)}{\iota((n+1)!)}(x-a)^{n+1}$$ for some point $\xi$ strictly between $a$ and $x$.  [L1]

2.1 In the case $x\ne a$, take absolute values in step 1.1, use $|f^{(n+1)}(\xi)|\le M$, and divide by the positive factorial. Together with the case $x=a$, this proves the estimate.  [step 1.1, L2, algebra] ∎
````
