# Independent repair certifier brief — Wave 10, A6

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
a source-disposition task, test the exact URL with web access, compare the cited
claim against the source if reachable, and state whether the URL is fit to
retain, needs replacement, or is blocked only by a named transport condition.

Return exactly:

```text
ITEM: <id-or-page-path-or-source-label>
VERDICT: CERTIFIED | REFUSED | BLOCKED
CURRENT-TEXT: READ
MATHEMATICS: [concise evidence]
CITATIONS: [concise evidence]
METADATA: [provenance/dependencies/stale-verdict disposition, or n/a for page/source]
FINDINGS: NONE | [fatal defect or concrete blocker]
```

Do not suggest optional polishing and do not write a verification stamp.


---

# This dispatch

## Assigned repaired item — `ex-integral-of-the-floor-function`

Named repair: add the integer-part uniqueness fact L1 to the exact step 1.2 that uses it and update the proof contract accordingly.

Item path: `items/ex-integral-of-the-floor-function.md`

Normalized exact-final SHA-256 at dispatch: `3c64174182d1171e3a4bf721c9e4b1ba74d3fe28cb1efec2d6cf3568a495737a`

Read the exact current item and relevant dependencies from disk. The exact current text at dispatch follows for hash-bound comparison.

````markdown
---
id: ex-integral-of-the-floor-function
kind: example
title: "$\\int_0^3 \\lfloor x \\rfloor = 3$: the floor function is nondecreasing, hence integrable, and the integral is computed from the uniform partitions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-monotone-implies-integrable, lem-integer-part, def-monotone-function, def-darboux-sums, def-darboux-integral, def-partition-and-refinement, lem-finite-sum-laws, def-finite-sum, def-classification-of-discontinuities, def-continuity-real, def-interval, cor-archimedean-reciprocal, thm-of-archimedean, def-canonical-natural, lem-of-naturals-positive, def-infimum, def-max-min, def-complete-ordered-field, def-ordered-field, lem-of-add-order, lem-of-sign-rules, lem-of-abs-value]
justified_by: []
aliases: []
landmark: true
short: "$\\int_0^3 \\lfloor x\\rfloor = 3$"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Floor and ceiling functions (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Floor_and_ceiling_functions"
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "MTH 421 Homework 1 (Michigan State University)"
      url: "https://users.math.msu.edu/users/seal/teaching/sp14/hw1.pdf"
pipeline_run: null
---

## Example

Let $g : [0,3] \to \mathbb{R}$ be $g(x) = \lfloor x \rfloor$, the integer part
([[lem-integer-part]]). Then $g$ is nondecreasing
([[def-monotone-function]]), hence Riemann integrable on $[0,3]$
([[thm-monotone-implies-integrable]]), and

$$\int_0^3 \lfloor x \rfloor \,\mathrm{d}x \;=\; 3 .$$

**$g$ is discontinuous at $x = 1$, $x = 2$ and $x = 3$** and continuous
elsewhere on $[0,3]$ ([[def-classification-of-discontinuities]]), so this is an
integrable function with genuine jumps, not a continuous one in disguise; the
value $3$ is $0\cdot 1 + 1\cdot 1 + 2\cdot 1$, the three constant pieces
weighted by their lengths.

The computation below uses the uniform partition into $N = 3M$ parts, $M \ge 1$,
for which the lower sum is **exactly** $3$ at every $M$ and the upper sum is
$3 + 3/M$. So the lower sums do not merely approach the integral, they attain it.

## Facts & Assumptions

**Given:** $g : [0,3] \to \mathbb{R}$ with $g(x) = \lfloor x \rfloor$; a natural $M \ge 1$; $N := 3M$; and the uniform partition $U_N = (N,t)$ of $[0,3]$ with $t_i = 3\iota(i)/\iota(N) = \iota(i)/\iota(M)$ for $i \le N$ and lengths $\Delta_i = 3/\iota(N) = 1/\iota(M)$.

[L1] For every real $x$ there is exactly one integer $\lfloor x \rfloor$ with $\lfloor x \rfloor \le x < \lfloor x \rfloor + 1$ ([[lem-integer-part]]).

[L2] $g$ is nondecreasing: for $x \le y$, $\lfloor x \rfloor \le x \le y < \lfloor y \rfloor + 1$, and $\lfloor x \rfloor$, $\lfloor y \rfloor$ are integers, so $\lfloor x \rfloor \le \lfloor y \rfloor$, no integer lying strictly between $\lfloor y \rfloor$ and $\lfloor y \rfloor + 1$ ([[lem-integer-part]], [[def-monotone-function]]).

[L3] A monotone function on a closed bounded interval with distinct endpoints is bounded and Riemann integrable ([[thm-monotone-implies-integrable]], [[def-darboux-integral]]).

[L4] For $U_N$: $t_0 = 0$, $t_N = 3$, $t_i < t_{i+1}$, $\Delta_i = 1/\iota(M)$, $\sum_{i<N}\Delta_i = 3$ ([[def-partition-and-refinement]], [[def-interval]]).

[L5] For a nondecreasing $g$ and a subinterval $I_i = [t_i,t_{i+1}]$: $m_i = g(t_i)$ and $M_i = g(t_{i+1})$, both attained; $L(g,P) = \sum_{i<N}m_i\Delta_i$, $U(g,P) = \sum_{i<N}M_i\Delta_i$, and $L(g,P) \le \underline{\int_0^3}g \le \overline{\int_0^3}g \le U(g,P)$ ([[def-darboux-sums]], [[def-darboux-integral]], [[def-infimum]], [[def-max-min]], [[def-complete-ordered-field]]).

[L6] Finite sums: splitting a sum over $i < 3M$ into the three blocks $i < M$, $M \le i < 2M$ and $2M \le i < 3M$; scaling; and $\sum_{i<M}c = \iota(M)c$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L7] For $i \in \mathbb{N}$: $\lfloor \iota(i)/\iota(M) \rfloor = 0$ when $i < M$, $= 1$ when $M \le i < 2M$, and $= 2$ when $2M \le i < 3M$; and $\lfloor \iota(j)/\iota(M)\rfloor = 3$ for $j = 3M$. Each case is [L1] applied to the displayed inequalities $0 \le \iota(i)/\iota(M) < 1$, $1 \le \iota(i)/\iota(M) < 2$, $2 \le \iota(i)/\iota(M) < 3$ and $\iota(3M)/\iota(M) = 3$, which follow from $\iota$ being strictly increasing and additive ([[lem-of-naturals-positive]], [[def-canonical-natural]], [[lem-of-add-order]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used here follow by adjoining the equality case, in which the two sides coincide.

[L8] For every real $\eta > 0$ there is a natural $M \ge 1$ with $1/\iota(M) < \eta$, and $\iota(M) > 0$ for $M \ge 1$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L9] Ordered-field arithmetic and the absolute value: adding a constant and multiplying by a positive quantity preserve an inequality; the order is total and transitive ([[lem-of-abs-value]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Verification

**Proof technique:** direct.

1.1 $g$ is nondecreasing by [L2], and $0 < 3$, so $g$ is Riemann integrable on $[0,3]$ by [L3]; write $J := \int_0^3 g$. [given, L2, L3]

1.2 By [L5] and [L7], for $i < N = 3M$ the lower value is $m_i = g(t_i) = \lfloor \iota(i)/\iota(M)\rfloor$, which is $0$ for $i < M$, $1$ for $M \le i < 2M$ and $2$ for $2M \le i < 3M$; and the upper value is $M_i = g(t_{i+1}) = \lfloor \iota(i+1)/\iota(M)\rfloor$, which is $0$ for $i+1 < M$, $1$ for $M \le i+1 < 2M$, $2$ for $2M \le i+1 < 3M$ and $3$ for $i+1 = 3M$. [given, L1, L4, L5, L7]

2.1 By [L6] and step 1.2, $L(g,U_N) = \frac{1}{\iota(M)}\Bigl(\sum_{i<M}0 + \sum_{M \le i < 2M}1 + \sum_{2M \le i < 3M}2\Bigr) = \frac{1}{\iota(M)}\bigl(0 + \iota(M) + 2\iota(M)\bigr) = 3$. [step 1.2, L4, L5, L6, L9]

2.2 By [L6] and step 1.2, the upper values run over $j = i+1$ from $1$ to $3M$, giving $\iota(M)-1$ indices with value $0$, then $\iota(M)$ with value $1$, then $\iota(M)$ with value $2$, and the single index $j = 3M$ with value $3$; hence $U(g,U_N) = \frac{1}{\iota(M)}\bigl(0 + \iota(M) + 2\iota(M) + 3\bigr) = 3 + \frac{3}{\iota(M)}$. [step 1.2, L4, L5, L6, L9]

3.1 By [L5], $3 = L(g,U_N) \le \underline{\int_0^3} g \le J \le \overline{\int_0^3} g \le U(g,U_N) = 3 + 3/\iota(M)$ for every natural $M \ge 1$. [step 1.1, step 2.1, step 2.2, L5]

4.1 Hence $0 \le J - 3 \le 3/\iota(M)$ for every $M \ge 1$. If $J > 3$ then $(J-3)\cdot 3^{-1} > 0$ and [L8] supplies $M \ge 1$ with $1/\iota(M) < (J-3)\cdot 3^{-1}$, that is $3/\iota(M) < J - 3$, contradicting step 3.1. So $J = 3$, that is $\int_0^3 \lfloor x \rfloor\,\mathrm{d}x = 3$. [step 3.1, L8, L9] ∎

## Remarks

- **Why $N$ is taken to be a multiple of $3$.** For a general $N$ the partition points $\iota(i)\cdot 3/\iota(N)$ do not land on the integers $1$ and $2$, where $\lfloor \cdot \rfloor$ jumps, and both sums acquire a boundary term. Restricting to $N = 3M$ costs nothing, since integrability is already known from [[thm-monotone-implies-integrable]] and only one sequence of partitions is needed to pin the value.

- **The lower sums are exactly $3$, not merely close to it.** This is a feature of the step function, not of the method: $g$ takes its value $\lfloor x\rfloor$ at the left endpoint of each subinterval of $U_{3M}$, so the lower sum is the exact area of the three rectangles. The upper sums overshoot by $3/M$, the three jumps of size $1$ each spread over one subinterval of length $1/M$.

- **The general identity for a monotone integrand.** By [[thm-monotone-implies-integrable]], $U(g,U_N) - L(g,U_N) = |g(3)-g(0)|\cdot 3/N$; here $g(3) = 3$, $g(0) = 0$ and $N = 3M$, so the gap is $3/M$, which is what steps 2.1 and 2.2 compute directly.
````

## Current manifest rows sourced by this item

```json
[
  {
    "source": "ex-integral-of-the-floor-function",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
    "target": "thm-monotone-implies-integrable",
    "declared_target": "thm-monotone-implies-integrable",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-riemann-integral",
    "targetBatch": "wave10-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-integral-of-the-floor-function",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
    "target": "lem-integer-part",
    "declared_target": "lem-integer-part",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limits-of-real-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-integral-of-the-floor-function",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
    "target": "def-monotone-function",
    "declared_target": "def-monotone-function",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-integral-of-the-floor-function",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
    "target": "def-darboux-sums",
    "declared_target": "def-darboux-sums",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral",
    "targetBatch": "wave10-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-integral-of-the-floor-function",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
    "target": "def-darboux-integral",
    "declared_target": "def-darboux-integral",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-riemann-integral",
    "targetBatch": "wave10-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-integral-of-the-floor-function",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
    "target": "def-partition-and-refinement",
    "declared_target": "def-partition-and-refinement",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral",
    "targetBatch": "wave10-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-integral-of-the-floor-function",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
    "target": "lem-finite-sum-laws",
    "declared_target": "lem-finite-sum-laws",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-integral-of-the-floor-function",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
    "target": "def-finite-sum",
    "declared_target": "def-finite-sum",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-integral-of-the-floor-function",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
    "target": "def-classification-of-discontinuities",
    "declared_target": "def-classification-of-discontinuities",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-integral-of-the-floor-function",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
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
    "source": "ex-integral-of-the-floor-function",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
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
    "source": "ex-integral-of-the-floor-function",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
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
    "source": "ex-integral-of-the-floor-function",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
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
    "source": "ex-integral-of-the-floor-function",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
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
    "source": "ex-integral-of-the-floor-function",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
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
    "source": "ex-integral-of-the-floor-function",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
    "target": "def-infimum",
    "declared_target": "def-infimum",
    "target_statement_provenance": "literature-derived",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-integral-of-the-floor-function",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
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
    "source": "ex-integral-of-the-floor-function",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
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
    "source": "ex-integral-of-the-floor-function",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
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
    "source": "ex-integral-of-the-floor-function",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
    "target": "lem-of-add-order",
    "declared_target": "lem-of-add-order",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-integral-of-the-floor-function",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
    "target": "lem-of-sign-rules",
    "declared_target": "lem-of-sign-rules",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-integral-of-the-floor-function",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
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

