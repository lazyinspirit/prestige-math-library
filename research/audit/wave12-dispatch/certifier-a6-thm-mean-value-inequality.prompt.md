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

## Assigned exact-final target — `thm-mean-value-inequality`

Item path: `items/thm-mean-value-inequality.md`

Normalized final-text SHA-256 at dispatch: `a2fd550db6117ac8543a8cc3337eff48e5c96d5c14890c85a72427bf2ad4f6a0`

Target type(s): `A6-source-correction`

- A6 removed the failed redundant Lebl draft endpoint; a live semantic source remains

Read the complete current item and every dependency needed for the changed inference or source attribution. For source work, open the retained exact-final URL(s) and compare the public claim with the current provenance rationale.

Current generated-manifest rows:

```json
[
  {
    "source": "thm-mean-value-inequality",
    "sourcePage": "rn-as-a-normed-space",
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
    "source": "thm-mean-value-inequality",
    "sourcePage": "rn-as-a-normed-space",
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
    "source": "thm-mean-value-inequality",
    "sourcePage": "rn-as-a-normed-space",
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
    "source": "thm-mean-value-inequality",
    "sourcePage": "rn-as-a-normed-space",
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
    "source": "thm-mean-value-inequality",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "thm-cauchy-schwarz-and-the-euclidean-norm",
    "declared_target": "thm-cauchy-schwarz-and-the-euclidean-norm",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-mean-value-inequality",
    "sourcePage": "rn-as-a-normed-space",
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
    "source": "thm-mean-value-inequality",
    "sourcePage": "rn-as-a-normed-space",
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
    "source": "thm-mean-value-inequality",
    "sourcePage": "rn-as-a-normed-space",
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
    "source": "thm-mean-value-inequality",
    "sourcePage": "rn-as-a-normed-space",
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
    "source": "thm-mean-value-inequality",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "thm-algebra-of-continuous-functions",
    "declared_target": "thm-algebra-of-continuous-functions",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-mean-value-inequality",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "lem-real-and-metric-notions-agree",
    "declared_target": "lem-real-and-metric-notions-agree",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-mean-value-inequality",
    "sourcePage": "rn-as-a-normed-space",
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
    "source": "thm-mean-value-inequality",
    "sourcePage": "rn-as-a-normed-space",
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
    "source": "thm-mean-value-inequality",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
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
    "source": "thm-mean-value-inequality",
    "sourcePage": "rn-as-a-normed-space",
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
    "source": "thm-mean-value-inequality",
    "sourcePage": "rn-as-a-normed-space",
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
    "source": "thm-mean-value-inequality",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
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
    "source": "thm-mean-value-inequality",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
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
    "source": "thm-mean-value-inequality",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "lem-of-inverse-positive",
    "declared_target": "lem-of-inverse-positive",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-mean-value-inequality",
    "sourcePage": "rn-as-a-normed-space",
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
    "source": "thm-mean-value-inequality",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-limit-point-r",
    "declared_target": "def-limit-point-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
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
  "id": "thm-mean-value-inequality",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://www.jirka.org/ra/html/sec_svthedercont.html"
  ],
  "rationale": "The mean value inequality: if $f : [a,b] \\\\to \\\\mathbb{R}^m$ is continuous and differentiable on $(a,b)$ with $\\\\lVert f'\\\\rVert_2 \\\\le M$, then $\\\\lVert f(b)-f(a)\\\\rVert_2 \\\\le M(b-a)$: The sources give the corresponding finite-dimensional vector limit, derivative, integral, or mean-value result; the item adapts it to componentwise Riemann integration, zero-based coordinates, oriented intervals, and the library’s existing scalar theorem names. The supplied numbered argument was audited as a local proof rather than a transcription or identifiable adaptation of a source proof.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

Exact current item at dispatch:

````markdown
---
id: thm-mean-value-inequality
kind: theorem
title: "The mean value inequality: if $f : [a,b] \\to \\mathbb{R}^m$ is continuous and differentiable on $(a,b)$ with $\\lVert f'\\rVert_2 \\le M$, then $\\lVert f(b)-f(a)\\rVert_2 \\le M(b-a)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-vector-valued-derivative-and-integral, def-vector-valued-functions-limits-and-continuity, thm-componentwise-limits-and-continuity, def-euclidean-inner-product, thm-cauchy-schwarz-and-the-euclidean-norm, def-p-norms-on-rn, def-norm-and-normed-space, cor-mean-value-theorem, thm-algebra-of-derivatives, thm-algebra-of-continuous-functions, lem-real-and-metric-notions-agree, def-derivative, cor-differentiable-implies-continuous, def-continuity-real, lem-finite-sum-laws, def-finite-sum, def-interval, thm-induction-principle, lem-of-inverse-positive, lem-of-abs-value, def-limit-point-r]
justified_by: []
aliases: []
landmark: true
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

## Statement

Let $m \in \mathbb{N}$ with $m \ge 1$, let $a, b \in \mathbb{R}$ with $a < b$,
and let $f : [a,b] \to \mathbb{R}^{m}$ be continuous on $[a,b]$ and
differentiable at every point of $(a,b)$ as a function on $[a,b]$
([[def-vector-valued-functions-limits-and-continuity]],
[[def-vector-valued-derivative-and-integral]], [[def-interval]]). Let
$M \in \mathbb{R}$ with $M \ge 0$ satisfy

$$\lVert f'(t)\rVert_2 \;\le\; M \qquad \text{for every } t \in (a,b).$$

Then

$$\lVert f(b) - f(a)\rVert_2 \;\le\; M\,(b-a).$$

**No integrability of $f'$ is assumed**, so the theorem applies to every
differentiable $f$; that is why it is proved from the scalar mean value theorem
rather than from
[[thm-norm-inequality-for-the-vector-valued-integral]].
[[cor-vector-valued-ftc-and-lipschitz-bound]] records the comparison between the
two routes.

**The equality form is not asserted, and for $m \ge 2$ it is false.** There need
be **no** $\xi \in (a,b)$ with $f(b)-f(a) = f'(\xi)(b-a)$; the companion page
carries a differentiable witness on $[0,1]$. The $\xi$ produced in the proof
below depends on the fixed vector $u = f(b)-f(a)$ and is a mean value point of
the **real** function $t \mapsto \langle u, f(t)\rangle$, not of $f$.

## Facts & Assumptions

**Given:** A natural $m \ge 1$, reals $a < b$, a function $f : [a,b] \to \mathbb{R}^{m}$ continuous on $[a,b]$ and differentiable on $(a,b)$, a real $M \ge 0$ bounding $\lVert f'\rVert_2$ on $(a,b)$, the vector $u := f(b)-f(a) \in \mathbb{R}^{m}$, and the real-valued function $\varphi : [a,b] \to \mathbb{R}$, $\varphi(t) := \langle u, f(t)\rangle$.

[L1] The inner product is bilinear and symmetric, $\langle w,w\rangle = \lVert w\rVert_2^{2}$, and $\langle u,w\rangle = \sum_{i<m}u_iw_i$ ([[def-euclidean-inner-product]], [[def-p-norms-on-rn]]).

[L2] Cauchy-Schwarz: $|\langle u,w\rangle| \le \lVert u\rVert_2\lVert w\rVert_2$, and $t \le |t|$ ([[thm-cauchy-schwarz-and-the-euclidean-norm]], [[lem-of-abs-value]]); $\lVert w\rVert_2 \ge 0$, and $\lVert w\rVert_2 = 0$ exactly when $w = 0$ ([[def-norm-and-normed-space]]).

[L3] Componentwise continuity and differentiability: $f$ is continuous at a point exactly when every $f_i$ is, and differentiable at a point exactly when every $f_i$ is, with $f'(t)_i = f_i'(t)$ ([[thm-componentwise-limits-and-continuity]] clause 1, [[def-vector-valued-derivative-and-integral]], [[def-derivative]], [[def-limit-point-r]]).

[L4] For a real domain, the metric notion of continuity and the notion of [[def-continuity-real]] agree ([[lem-real-and-metric-notions-agree]] clause 1).

[L5] Algebra of continuous real functions: sums and scalar multiples of functions continuous at a point are continuous there ([[thm-algebra-of-continuous-functions]] clause 1).

[L6] Algebra of derivatives: sums and scalar multiples of functions differentiable at a point are differentiable there, with $(w+z)'(c) = w'(c)+z'(c)$ and $(\alpha w)'(c) = \alpha w'(c)$ ([[thm-algebra-of-derivatives]] clauses 1 and 2); and a differentiable function is continuous ([[cor-differentiable-implies-continuous]]).

[L7] The mean value theorem: for $\psi$ continuous on $[a,b]$ with $a<b$ and differentiable on $(a,b)$ there is $\xi \in (a,b)$ with $\psi(b)-\psi(a) = \psi'(\xi)(b-a)$ ([[cor-mean-value-theorem]]).

[L8] Laws of finite sums and induction ([[lem-finite-sum-laws]], [[def-finite-sum]], [[thm-induction-principle]]).

[L9] Order arithmetic: $b - a > 0$; a product of nonnegatives is nonnegative; and $u>0$ gives $u^{-1}>0$, so an inequality may be multiplied by a positive real ([[lem-of-inverse-positive]]).

## Proof

**Proof technique:** direct.

1.1 Every component $f_i$ is continuous on $[a,b]$ in the sense of [[def-continuity-real]] and differentiable at every point of $(a,b)$, with $f'(t)_i = f_i'(t)$. [L3, L4]

1.2 $\varphi(t) = \sum_{i<m}u_i f_i(t)$ by the coordinate formula for the inner product. [L1]

1.3 $\varphi(b)-\varphi(a) = \langle u, f(b)\rangle - \langle u, f(a)\rangle = \langle u, f(b)-f(a)\rangle = \langle u,u\rangle = \lVert u\rVert_2^{2}$, by bilinearity. [L1]

1.4 By Cauchy-Schwarz and the bound on $\lVert f'\rVert_2$, $\langle u,f'(\xi)\rangle \le \bigl|\langle u,f'(\xi)\rangle\bigr| \le \lVert u\rVert_2\lVert f'(\xi)\rVert_2 \le \lVert u\rVert_2 M$. [L2]

1.5 If $u = 0$ then $\lVert u\rVert_2 = 0$ while $M(b-a) \ge 0$, so the conclusion holds. [L2, L9]

2.1 By induction on $p \le m$, each partial sum $t \mapsto \sum_{i<p}u_i f_i(t)$ is continuous on $[a,b]$ and differentiable on $(a,b)$ with derivative $\sum_{i<p}u_i f_i'(t)$: the empty sum is the constant $0$, and each successor step adds one scalar multiple of a function that is continuous and differentiable by step 1.1. [step 1.1, L5, L6, L8]

3.1 Hence $\varphi$ is continuous on $[a,b]$, differentiable at every point of $(a,b)$, and $\varphi'(t) = \sum_{i<m}u_i f_i'(t) = \langle u, f'(t)\rangle$ for $t \in (a,b)$. [step 1.2, step 2.1, L1]

4.1 By the mean value theorem applied to $\varphi$ there is $\xi \in (a,b)$ with $\varphi(b)-\varphi(a) = \varphi'(\xi)(b-a)$. [step 3.1, L7]

5.1 Combining steps 1.3 and 4.1, $\lVert u\rVert_2^{2} = \langle u, f'(\xi)\rangle\,(b-a)$. [step 3.1, step 1.3, step 4.1]

6.1 Since $b-a > 0$, multiplying the inequality of step 1.4 by $b-a$ and using step 5.1 gives $\lVert u\rVert_2^{2} \le \lVert u\rVert_2\,M\,(b-a)$. [step 5.1, step 1.4, L9]

7.1 If $u \ne 0$ then $\lVert u\rVert_2 > 0$, and multiplying step 6.1 by the positive real $1/\lVert u\rVert_2$ gives $\lVert u\rVert_2 \le M(b-a)$. [step 6.1, L2, L9]

8.1 The two cases of steps 1.5 and 7.1 exhaust the possibilities for $u = f(b)-f(a)$, so $\lVert f(b)-f(a)\rVert_2 \le M(b-a)$. [step 1.5, step 7.1] ∎

## Remarks

- **What the auxiliary function buys.** The scalar mean value theorem produces a point at which one real function has its average slope. Applying it to $\varphi = \langle u, f\rangle$ for the **particular** $u = f(b)-f(a)$ turns that into a statement about $f$, at the cost of the equality becoming an inequality. The loss is not an artefact of the proof: the equality form is genuinely false for $m \ge 2$, and the companion page's curve $t \mapsto (t^{2},t^{3})$ on $[0,1]$ is a differentiable witness.

- **The bound is sharp.** No constant smaller than $\sup\lVert f'\rVert_2$ works in general; the companion page exhibits a curve for which the inequality is an equality.

- **The case split at $u = 0$ is where the statement would otherwise be incomplete**, exactly as in [[thm-norm-inequality-for-the-vector-valued-integral]]. When $f(b) = f(a)$ the left-hand side is $0$ and nothing is divided.

- **$M \ge 0$ is a hypothesis, not a deduction.** It follows from $\lVert f'(t)\rVert_2 \le M$ at any single $t \in (a,b)$, and $(a,b)$ is nonempty here because $a<b$; it is stated anyway so that the conclusion reads as a genuine bound, in the style of [[cor-bounded-derivative-implies-lipschitz]].
````
