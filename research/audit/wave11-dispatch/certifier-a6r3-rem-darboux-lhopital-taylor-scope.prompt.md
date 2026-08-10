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

## Assigned exact-final target — `rem-darboux-lhopital-taylor-scope`

Item path: `items/rem-darboux-lhopital-taylor-scope.md`

Normalized final-text SHA-256 at dispatch: `03cd06aa5512aacd12f5231beccf707d9c34f71afc937d165774735799efde60`

Target type: `item-major-repair`

- A6 fatal repair of an undeclared derivative-continuity page relationship exposed by proof refutation

Read the complete current item and every exact dependency needed for the changed inference or source attribution. For source work, open the exact final URL(s) with web access and compare the source claim to the current provenance rationale and public Statement.

Current generated-manifest rows (completeness checklist only):

```json
[
  {
    "source": "rem-darboux-lhopital-taylor-scope",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "def-higher-derivatives-and-smoothness",
    "declared_target": "def-higher-derivatives-and-smoothness",
    "target_statement_provenance": "ai-altered",
    "targetPage": "darboux-lhopital-and-taylor",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-darboux-lhopital-taylor-scope",
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
    "source": "rem-darboux-lhopital-taylor-scope",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "thm-darboux-theorem-for-derivatives",
    "declared_target": "thm-darboux-theorem-for-derivatives",
    "target_statement_provenance": "literature-derived",
    "targetPage": "darboux-lhopital-and-taylor",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-darboux-lhopital-taylor-scope",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "cor-injective-or-monotone-derivative-is-continuous",
    "declared_target": "cor-injective-or-monotone-derivative-is-continuous",
    "target_statement_provenance": "ai-altered",
    "targetPage": "darboux-lhopital-and-taylor",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-darboux-lhopital-taylor-scope",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "thm-lhopital-zero-over-zero",
    "declared_target": "thm-lhopital-zero-over-zero",
    "target_statement_provenance": "ai-altered",
    "targetPage": "darboux-lhopital-and-taylor",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-darboux-lhopital-taylor-scope",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "thm-lhopital-infinity-over-infinity",
    "declared_target": "thm-lhopital-infinity-over-infinity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "darboux-lhopital-and-taylor",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-darboux-lhopital-taylor-scope",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "thm-taylor-schlomilch-roche-remainder",
    "declared_target": "thm-taylor-schlomilch-roche-remainder",
    "target_statement_provenance": "ai-altered",
    "targetPage": "darboux-lhopital-and-taylor",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-darboux-lhopital-taylor-scope",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "thm-taylor-peano-remainder",
    "declared_target": "thm-taylor-peano-remainder",
    "target_statement_provenance": "ai-altered",
    "targetPage": "darboux-lhopital-and-taylor",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-darboux-lhopital-taylor-scope",
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
    "source": "rem-darboux-lhopital-taylor-scope",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "def-binomial-coefficient",
    "declared_target": "def-binomial-coefficient",
    "target_statement_provenance": "literature-derived",
    "targetPage": "finite-counting-and-binomial-coefficients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-darboux-lhopital-taylor-scope",
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
  }
]
```

Current provenance row:

```json
{
  "id": "rem-darboux-lhopital-taylor-scope",
  "statement": "ai-generated",
  "proof": "not-applicable",
  "evidence": "none",
  "urls": [],
  "rationale": "This is a repository-specific scope statement about the exact conventions and deliberate omissions of the current page, not an established mathematical proposition. Alpha checked each cross-reference and omission directly against current disk and repaired the injective/monotone derivative-continuity sentence with its exact page theorem and declared dependency.",
  "alpha_concurred": false,
  "at": "2026-08-10"
}
```

Exact current item at dispatch:

````markdown
---
id: rem-darboux-lhopital-taylor-scope
kind: remark
title: "Scope, endpoint, factorial, and deferred-remainder conventions"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-applicable
deps: [def-higher-derivatives-and-smoothness, def-neighbourhood-r, thm-darboux-theorem-for-derivatives, cor-injective-or-monotone-derivative-is-continuous, thm-lhopital-zero-over-zero, thm-lhopital-infinity-over-infinity, thm-taylor-schlomilch-roche-remainder, thm-taylor-peano-remainder, def-factorial-and-falling-factorial, def-binomial-coefficient, def-canonical-natural]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, Taylor's theorem and related calculus"
      url: "https://www.jirka.org/ra/html/sec_taylor.html"
pipeline_run: null
---

## Remarks

Higher derivatives are the recursive objects of [[def-higher-derivatives-and-smoothness]]. Darboux's theorem ([[thm-darboux-theorem-for-derivatives]]) concerns every first derivative, without assuming that derivative continuous. The two L'Hôpital theorems, [[thm-lhopital-zero-over-zero]] and [[thm-lhopital-infinity-over-infinity]], require their stated derivative and nonvanishing hypotheses and do not assert converses.

Endpoint derivatives and finite-endpoint limits are one-sided when the domain supplies only one side. Natural factorials and binomial coefficients ([[def-factorial-and-falling-factorial]], [[def-binomial-coefficient]]) enter real formulas through the canonical embedding $\iota$ of [[def-canonical-natural]]. Darboux's property alone has no general continuity converse; the page's [[cor-injective-or-monotone-derivative-is-continuous]] proves continuity under the stated injectivity or monotonicity hypotheses.

The Schlömilch-Roche formula ([[thm-taylor-schlomilch-roche-remainder]]) assumes
an $(n+1)$-st derivative on an interval. Peano's formula
([[thm-taylor-peano-remainder]]) assumes $n$-fold differentiability on an
open interval $N_\delta(a)$ around the expansion point
([[def-neighbourhood-r]]), but not continuity of the $n$-th derivative. No
integral remainder, Borel interpolation theorem, or assertion about Dini
derivatives is made here.
````
