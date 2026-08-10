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

## Assigned exact-final target — `cex-mean-value-equality-fails-for-a-vector-valued-function`

Item path: `items/cex-mean-value-equality-fails-for-a-vector-valued-function.md`

Normalized final-text SHA-256 at dispatch: `1ac77453627f53423818fcdccccd4442b2af9c1c7ac831b21673414a7286ec3e`

Target type(s): `A6-source-correction`

- A6 removed the failed redundant Lebl draft endpoint; a live semantic source remains

Read the complete current item and every dependency needed for the changed inference or source attribution. For source work, open the retained exact-final URL(s) and compare the public claim with the current provenance rationale.

Current generated-manifest rows:

```json
[
  {
    "source": "cex-mean-value-equality-fails-for-a-vector-valued-function",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "thm-mean-value-inequality",
    "declared_target": "thm-mean-value-inequality",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-mean-value-equality-fails-for-a-vector-valued-function",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-vector-valued-derivative-and-integral",
    "declared_target": "def-vector-valued-derivative-and-integral",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-mean-value-equality-fails-for-a-vector-valued-function",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-vector-valued-functions-limits-and-continuity",
    "declared_target": "def-vector-valued-functions-limits-and-continuity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-mean-value-equality-fails-for-a-vector-valued-function",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "thm-componentwise-limits-and-continuity",
    "declared_target": "thm-componentwise-limits-and-continuity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-mean-value-equality-fails-for-a-vector-valued-function",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-euclidean-inner-product",
    "declared_target": "def-euclidean-inner-product",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-mean-value-equality-fails-for-a-vector-valued-function",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-p-norms-on-rn",
    "declared_target": "def-p-norms-on-rn",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-mean-value-equality-fails-for-a-vector-valued-function",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-norm-and-normed-space",
    "declared_target": "def-norm-and-normed-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-mean-value-equality-fails-for-a-vector-valued-function",
    "sourcePage": "rn-as-a-normed-space-examples",
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
    "source": "cex-mean-value-equality-fails-for-a-vector-valued-function",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "thm-algebra-of-derivatives",
    "declared_target": "thm-algebra-of-derivatives",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-mean-value-equality-fails-for-a-vector-valued-function",
    "sourcePage": "rn-as-a-normed-space-examples",
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
    "source": "cex-mean-value-equality-fails-for-a-vector-valued-function",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "cor-mean-value-theorem",
    "declared_target": "cor-mean-value-theorem",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-mean-value-equality-fails-for-a-vector-valued-function",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
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
    "source": "cex-mean-value-equality-fails-for-a-vector-valued-function",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "thm-of-square-roots",
    "declared_target": "thm-of-square-roots",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-mean-value-equality-fails-for-a-vector-valued-function",
    "sourcePage": "rn-as-a-normed-space-examples",
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
    "source": "cex-mean-value-equality-fails-for-a-vector-valued-function",
    "sourcePage": "rn-as-a-normed-space-examples",
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
    "source": "cex-mean-value-equality-fails-for-a-vector-valued-function",
    "sourcePage": "rn-as-a-normed-space-examples",
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
    "source": "cex-mean-value-equality-fails-for-a-vector-valued-function",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-of-square-monotone",
    "declared_target": "lem-of-square-monotone",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-mean-value-equality-fails-for-a-vector-valued-function",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-standard-basis-of-f-n",
    "declared_target": "lem-standard-basis-of-f-n",
    "target_statement_provenance": "ai-altered",
    "targetPage": "linear-independence-bases-and-dimension",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-mean-value-equality-fails-for-a-vector-valued-function",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
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
    "source": "cex-mean-value-equality-fails-for-a-vector-valued-function",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
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
    "source": "cex-mean-value-equality-fails-for-a-vector-valued-function",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-interval",
    "declared_target": "def-interval",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
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
  "id": "cex-mean-value-equality-fails-for-a-vector-valued-function",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://www.jirka.org/ra/html/sec_svthedercont.html"
  ],
  "rationale": "$f(t) = (t^{2}, t^{3})$ on $[0,1]$: no $\\\\xi$ satisfies $f(1)-f(0) = f'(\\\\xi)$: The sources give the corresponding finite-dimensional vector limit, derivative, integral, or mean-value result; the item adapts it to componentwise Riemann integration, zero-based coordinates, oriented intervals, and the library’s existing scalar theorem names. The supplied numbered argument was audited as a local proof rather than a transcription or identifiable adaptation of a source proof.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

Exact current item at dispatch:

````markdown
---
id: cex-mean-value-equality-fails-for-a-vector-valued-function
kind: counterexample
title: "$f(t) = (t^{2}, t^{3})$ on $[0,1]$: no $\\xi$ satisfies $f(1)-f(0) = f'(\\xi)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-mean-value-inequality, def-vector-valued-derivative-and-integral, def-vector-valued-functions-limits-and-continuity, thm-componentwise-limits-and-continuity, def-euclidean-inner-product, def-p-norms-on-rn, def-norm-and-normed-space, lem-derivative-of-a-power, thm-algebra-of-derivatives, def-derivative, cor-mean-value-theorem, cor-differentiable-implies-continuous, thm-of-square-roots, def-canonical-natural, lem-of-naturals-positive, def-integer-power, lem-of-square-monotone, lem-standard-basis-of-f-n, lem-finite-sum-laws, def-finite-sum, def-interval]
justified_by: []
aliases: []
landmark: false
cx_machine_verified: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Mean value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mean_value_theorem"
    - title: "Vector-valued function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Vector-valued_function"
    - title: "J. Lebl, Basic Analysis I, Section 8.4"
      url: "https://www.jirka.org/ra/html/sec_svthedercont.html"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** if $f : [a,b] \to \mathbb{R}^{m}$ is continuous on $[a,b]$ and
differentiable on $(a,b)$, then there is $\xi \in (a,b)$ with

$$f(b) - f(a) \;=\; f'(\xi)\,(b-a).$$

That is the equality form of the mean value theorem
([[cor-mean-value-theorem]]), which is true for $m = 1$ and **false for
$m \ge 2$**. What survives is the inequality
$\lVert f(b)-f(a)\rVert_2 \le M(b-a)$ of [[thm-mean-value-inequality]], and this
item is the witness showing that the inequality cannot be upgraded.

**The witness.** Take $m = 2$, $[a,b] = [0,1]$ and
$f : [0,1] \to \mathbb{R}^{2}$ with components $f_0(t) = t^{2}$ and
$f_1(t) = t^{3}$ ([[def-integer-power]],
[[def-vector-valued-functions-limits-and-continuity]]).

**Why this curve and not the classical one.** The crispest classical witness is
$t \mapsto (\cos t, \sin t)$ on $[0,2\pi]$, whose derivative has constant norm
$1$ while the endpoints coincide. The trigonometric functions are introduced
**later in the reading order** than this page, so they may not be used here; the
polynomial curve above carries the same refutation with the material available.
This substitution is recorded here, in the item itself, so that a reader who
knows the classical example is told why it is absent rather than left to suppose
that this library does not know it.

## Facts & Assumptions

**Given:** The function $f : [0,1] \to \mathbb{R}^{2}$ with $f_0(t) = t^{2}$ and $f_1(t) = t^{3}$, and the reals $\iota(2), \iota(3), \iota(4), \iota(13)$ ([[def-canonical-natural]]).

[A1] The refuted claim, instantiated at $m = 2$, $a = 0$, $b = 1$: there is $\xi \in (0,1)$ with $f(1)-f(0) = f'(\xi)\cdot(1-0)$, that is $f(1)-f(0) = f'(\xi)$.

[L1] Derivatives of powers: $x \mapsto x^{p}$ is differentiable at every real with derivative $\iota(p)x^{\,p-1}$ for $p \ge 1$ ([[lem-derivative-of-a-power]], [[def-integer-power]], [[def-canonical-natural]]).

[L2] A vector-valued function is differentiable at a point exactly when each component is, and then $f'(t)_i = f_i'(t)$; equality of two elements of $\mathbb{R}^{2}$ is equality of both coordinates ([[def-vector-valued-derivative-and-integral]], [[thm-componentwise-limits-and-continuity]], [[def-derivative]], [[lem-standard-basis-of-f-n]]).

[L3] Differentiability implies continuity ([[cor-differentiable-implies-continuous]], [[def-vector-valued-functions-limits-and-continuity]], [[thm-componentwise-limits-and-continuity]]).

[L4] The Euclidean norm: $\lVert y\rVert_2 = \sqrt{y_0^{2}+y_1^{2}}$ on $\mathbb{R}^{2}$, and $\sqrt{\cdot}$ is the unique nonnegative square root ([[def-p-norms-on-rn]], [[def-euclidean-inner-product]], [[thm-of-square-roots]], [[def-norm-and-normed-space]], [[lem-finite-sum-laws]], [[def-finite-sum]]).

[L5] Canonical naturals are positive and strictly increasing, and carry sums to sums and products to products, so $\iota(2)^{2} = \iota(4)$, $\iota(3)^{2} = \iota(9)$, $\iota(4)+\iota(9) = \iota(13)$ and $\iota(3) \ne \iota(4)$ ([[lem-of-naturals-positive]], [[def-canonical-natural]]).

[L6] Squaring is strictly monotone on the nonnegatives, so square roots compare in the same direction ([[lem-of-square-monotone]]).

[L7] The mean value inequality ([[thm-mean-value-inequality]]) and the algebra of derivatives ([[thm-algebra-of-derivatives]]), together with the interval notation ([[def-interval]]).

## Counterexample

**Proof technique:** direct.

1.1 Each component is differentiable at every real, with $f_0'(t) = \iota(2)t$ and $f_1'(t) = \iota(3)t^{2}$; hence $f$ is differentiable at every $t \in [0,1]$ with $f'(t) = \bigl(\iota(2)t,\ \iota(3)t^{2}\bigr)$, and $f$ is continuous on $[0,1]$. [L1, L2, L3, L7]

1.2 $f(1) = (1,1)$ and $f(0) = (0,0)$, so $f(1)-f(0) = (1,1)$. [given]

2.1 Suppose [A1] holds and let $\xi \in (0,1)$ be as there; comparing first coordinates gives $\iota(2)\xi = 1$, so $\xi = 1/\iota(2)$. [step 1.1, step 1.2, A1, L2]

2.2 Comparing second coordinates gives $\iota(3)\xi^{2} = 1$. [step 1.1, step 1.2, A1, L2]

3.1 Substituting $\xi = 1/\iota(2)$ into step 2.2 gives $\iota(3)/\iota(2)^{2} = \iota(3)/\iota(4) = 1$, hence $\iota(3) = \iota(4)$, contradicting the strict increase of $\iota$. [step 2.1, step 2.2, L5]

4.1 So no $\xi \in (0,1)$ satisfies [A1], and the refuted claim is false for $m = 2$. [step 2.1, step 2.2, step 3.1, A1]

5.1 The inequality form does hold on this curve, with room to spare: $\lVert f(1)-f(0)\rVert_2 = \sqrt{2}$, while for $t \in [0,1]$ one has $\lVert f'(t)\rVert_2 = \sqrt{\iota(4)t^{2}+\iota(9)t^{4}} \le \sqrt{\iota(4)+\iota(9)} = \sqrt{\iota(13)}$, so $M := \sqrt{\iota(13)}$ bounds $\lVert f'\rVert_2$ on $(0,1)$ and $\sqrt{2} \le \sqrt{\iota(13)} = M(1-0)$. [step 1.1, step 1.2, L4, L6, L7] ∎

## Remarks

- **What exactly fails.** The scalar mean value theorem is applied in the proof of [[thm-mean-value-inequality]] to the auxiliary function $t \mapsto \langle u, f(t)\rangle$ for the fixed vector $u = f(b)-f(a)$, and it does produce a point $\xi$. That $\xi$ is a mean value point of **that real function**, and it depends on $u$; there is no reason for the two coordinates to be served by one and the same point, and on this curve they are not: the first coordinate demands $\xi = 1/\iota(2)$ and the second demands $\iota(3)\xi^{2} = 1$.

- **The curve is not pathological.** Both components are polynomials, so $f$ is differentiable at every real ([[lem-derivative-of-a-power]]) and $f'$ is continuous. No smoothness hypothesis would rescue the equality form.

- **The bound of [[thm-mean-value-inequality]] is not merely true but sharp**, and the companion item [[cex-the-mean-value-inequality-is-attained]] exhibits a curve on which it is an equality. The two items together show that the failure of the equality **form** is not a failure of the bound.
````
