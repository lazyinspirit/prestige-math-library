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

## Assigned exact-final target — `thm-first-mean-value-theorem-for-integrals`

Item path: `items/thm-first-mean-value-theorem-for-integrals.md`

Normalized final-text SHA-256 at dispatch: `1a1053f333b60a6da379b3b5a31ffe93767a7bdf6904d108178443641eaaf433`

Target type: `item`

- A4 material item repair

Read the complete current item and every exact dependency needed for the changed inference or source attribution. For source work, open the exact final URL(s) with web access and compare the source claim to the current provenance rationale and public Statement.

Current generated-manifest rows (completeness checklist only):

```json
[
  {
    "source": "thm-first-mean-value-theorem-for-integrals",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "thm-monotonicity-of-the-integral",
    "declared_target": "thm-monotonicity-of-the-integral",
    "target_statement_provenance": "literature-derived",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-first-mean-value-theorem-for-integrals",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "cor-integrability-of-absolute-values-products-and-lattice-operations",
    "declared_target": "cor-integrability-of-absolute-values-products-and-lattice-operations",
    "target_statement_provenance": "ai-altered",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-first-mean-value-theorem-for-integrals",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "thm-linearity-of-the-integral",
    "declared_target": "thm-linearity-of-the-integral",
    "target_statement_provenance": "literature-derived",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-first-mean-value-theorem-for-integrals",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "thm-extreme-value-r",
    "declared_target": "thm-extreme-value-r",
    "target_statement_provenance": "literature-derived",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-first-mean-value-theorem-for-integrals",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "cor-continuous-image-of-an-interval-is-an-interval",
    "declared_target": "cor-continuous-image-of-an-interval-is-an-interval",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-first-mean-value-theorem-for-integrals",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "thm-heine-borel-r",
    "declared_target": "thm-heine-borel-r",
    "target_statement_provenance": "literature-derived",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-first-mean-value-theorem-for-integrals",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "def-open-cover-r",
    "declared_target": "def-open-cover-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-first-mean-value-theorem-for-integrals",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "thm-continuous-implies-integrable",
    "declared_target": "thm-continuous-implies-integrable",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-riemann-integral",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-first-mean-value-theorem-for-integrals",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
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
    "source": "thm-first-mean-value-theorem-for-integrals",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "def-max-min",
    "declared_target": "def-max-min",
    "target_statement_provenance": "ai-altered",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-first-mean-value-theorem-for-integrals",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
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
    "source": "thm-first-mean-value-theorem-for-integrals",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
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
    "source": "thm-first-mean-value-theorem-for-integrals",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "def-interval",
    "declared_target": "def-interval",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-first-mean-value-theorem-for-integrals",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "def-ordered-field",
    "declared_target": "def-ordered-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-first-mean-value-theorem-for-integrals",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "def-complete-ordered-field",
    "declared_target": "def-complete-ordered-field",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-first-mean-value-theorem-for-integrals",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "cex-the-first-mean-value-theorem-needs-a-one-signed-weight",
    "declared_target": "cex-the-first-mean-value-theorem-needs-a-one-signed-weight",
    "target_statement_provenance": "ai-generated",
    "targetPage": "properties-of-the-integral-and-the-working-ftc-examples",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "forward_ref",
    "kind": "forward",
    "requires_semantic_audit": true
  }
]
```

Current provenance row:

```json
{
  "id": "thm-first-mean-value-theorem-for-integrals",
  "statement": "literature-derived",
  "proof": "ai-generated",
  "evidence": "exact-source",
  "urls": [
    "https://encyclopediaofmath.org/wiki/Integral_calculus"
  ],
  "rationale": "The source states the weighted first mean value theorem with continuous f, one-signed integrable g, and a point xi satisfying integral(fg)=f(xi)integral(g). The zero-weight and reversed-orientation cases are local convention handling.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

Exact current item at dispatch:

````markdown
---
id: thm-first-mean-value-theorem-for-integrals
kind: theorem
title: "If $f$ is continuous on $[a,b]$ and $g$ is integrable with $g \\ge 0$, there is $\\xi \\in [a,b]$ with $\\int_a^b fg = f(\\xi)\\int_a^b g$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-monotonicity-of-the-integral, cor-integrability-of-absolute-values-products-and-lattice-operations, thm-linearity-of-the-integral, thm-extreme-value-r, cor-continuous-image-of-an-interval-is-an-interval, thm-heine-borel-r, def-open-cover-r, thm-continuous-implies-integrable, def-continuity-real, def-max-min, lem-integral-elementary-bounds, def-darboux-integral, def-interval, def-ordered-field, def-complete-ordered-field]
forward_refs: [cex-the-first-mean-value-theorem-needs-a-one-signed-weight]
justified_by: []
aliases: [thm-mean-value-theorem-for-integrals]
landmark: true
short: "first mean value theorem for integrals"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Mean value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mean_value_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Encyclopedia of Mathematics, Integral calculus"
      url: "https://encyclopediaofmath.org/wiki/Integral_calculus"
pipeline_run: null
---

## Statement

Let $a < b$ be reals, let $f : [a,b] \to \mathbb{R}$ be continuous on $[a,b]$
([[def-continuity-real]]) and let $g : [a,b] \to \mathbb{R}$ be integrable
([[def-darboux-integral]]) with $g(x) \ge 0$ for every $x \in [a,b]$. Then $fg$
is integrable and there is $\xi \in [a,b]$ with

$$\int_a^b f\,g \;=\; f(\xi)\,\int_a^b g .$$

**The special case $g \equiv 1$** is the familiar statement that a continuous
function attains its average value: there is $\xi \in [a,b]$ with

$$\int_a^b f \;=\; f(\xi)\,(b-a) ,$$

and it is this clause that the fundamental theorem below is usually derived
from in other treatments.

**The hypothesis $g \ge 0$ is essential.** For a sign-changing integrable $g$
the conclusion fails, and the witness is
the counterexample with a sign-changing weight on the companion
page.

## Facts & Assumptions

**Given:** Reals $a < b$, a continuous $f : [a,b] \to \mathbb{R}$, and an integrable $g : [a,b] \to \mathbb{R}$ with $g \ge 0$ on $[a,b]$.

[L1] $[a,b]$ is compact, and a continuous real function on a nonempty compact set attains a minimum and a maximum there ([[thm-heine-borel-r]], [[def-open-cover-r]], [[thm-extreme-value-r]], [[def-max-min]], [[def-interval]]).

[L2] For continuous $f$ on $[a,b]$ with $a \le b$, $f[\,[a,b]\,] = [\min f[\,[a,b]\,],\ \max f[\,[a,b]\,]]$ ([[cor-continuous-image-of-an-interval-is-an-interval]], claim 2).

[L3] A continuous function on $[a,b]$ is integrable there ([[thm-continuous-implies-integrable]]).

[L4] A product of two integrable functions on $[a,b]$ is integrable ([[cor-integrability-of-absolute-values-products-and-lattice-operations]], claim 1).

[L5] If $u \le w$ pointwise and both are integrable then $\int_a^b u \le \int_a^b w$; and if $u \ge 0$ is integrable then $\int_a^b u \ge 0$ ([[thm-monotonicity-of-the-integral]]).

[L6] Scalar multiples: $\int_a^b \lambda u = \lambda\int_a^b u$ ([[thm-linearity-of-the-integral]]), and $\int_a^b 1 = b-a$ ([[lem-integral-elementary-bounds]]).

[L7] Ordered-field arithmetic: multiplying an inequality by a nonnegative quantity preserves it, a positive real has a positive inverse, and the order is total and transitive ([[def-ordered-field]], [[def-complete-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 $f$ is integrable by [L3], so $fg$ is integrable by [L4]. [given, L3, L4]

1.2 By [L1] fix $p, q \in [a,b]$ with $f(q) = \min f[\,[a,b]\,] =: m$ and $f(p) = \max f[\,[a,b]\,] =: M$, so $m \le f(x) \le M$ for every $x \in [a,b]$. [given, L1, choose]

1.3 By [L5], $\int_a^b g \ge 0$. [given, L5]

2.1 Since $g \ge 0$, multiplying the inequalities of step 1.2 by $g(x)$ gives $m\,g(x) \le f(x)g(x) \le M\,g(x)$ for every $x \in [a,b]$, and all three functions are integrable by step 1.1 and [L6]. [step 1.1, step 1.2, given, L6, L7]

3.1 By [L5] and [L6] applied to step 2.1, $m\int_a^b g \;\le\; \int_a^b fg \;\le\; M\int_a^b g$. [step 2.1, L5, L6]

4.1 **The case $\int_a^b g = 0$.** Then step 3.1 reads $0 \le \int_a^b fg \le 0$, so $\int_a^b fg = 0 = f(a)\int_a^b g$, and $\xi := a$ works. [step 1.3, step 3.1, L7]

4.2 **The case $\int_a^b g > 0$.** Then $\lambda := \bigl(\int_a^b fg\bigr)\big/\bigl(\int_a^b g\bigr)$ is a real satisfying $m \le \lambda \le M$, by step 3.1 divided by the positive $\int_a^b g$. [step 1.3, step 3.1, L7, construct]

5.1 By step 1.2 and [L2], $f[\,[a,b]\,] = [m,M]$, so $\lambda = f(\xi)$ for some $\xi \in [a,b]$; then $\int_a^b fg = \lambda\int_a^b g = f(\xi)\int_a^b g$. [step 1.2, step 4.2, L2, L7, choose]

6.1 The two cases $\int_a^b g = 0$ and $\int_a^b g > 0$ are exhaustive by step 1.3, so the theorem holds. [step 1.3, step 4.1, step 5.1, L7]

7.1 **The clause $g \equiv 1$.** The constant $1$ is integrable, nonnegative, with $\int_a^b 1 = b-a$ by [L6], so step 6.1 gives $\xi \in [a,b]$ with $\int_a^b f = f(\xi)(b-a)$. [step 6.1, L6] ∎

## Remarks

- **The case $\int_a^b g = 0$ is handled first because the usual proof divides by it.** There the conclusion is trivially true for *every* $\xi$, and nothing is claimed about the location of a distinguished point; the theorem asserts only that some $\xi$ works.

- **No intermediate value theorem is invoked directly.** What is needed is that the continuous image of $[a,b]$ is exactly $[\min,\max]$, which is claim 2 of [[cor-continuous-image-of-an-interval-is-an-interval]]; that item is itself proved from the intermediate and extreme value theorems, and citing it here saves repeating the argument.

- **$\xi$ can be forced to lie in the open interval only under extra hypotheses**, and none is claimed. The standard refinement puts $\xi$ in the open interval when $g \equiv 1$; it is not proved here, it is not needed anywhere on this page, and the theorem does not assert it.

- **Forward reference, orientation only.** The witness showing that $g \ge 0$ cannot be dropped is [[cex-the-first-mean-value-theorem-needs-a-one-signed-weight]] on the companion page; nothing above depends on it.
````
