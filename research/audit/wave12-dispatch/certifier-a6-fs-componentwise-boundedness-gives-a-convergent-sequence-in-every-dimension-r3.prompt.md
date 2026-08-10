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

## Assigned exact-final target — `fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension`

Item path: `items/fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension.md`

Normalized final-text SHA-256 at dispatch: `c19057e7c283f0dc2cfcdc6fc7ff8818497f04cf712514e28ebcc60a2ec03a9c`

Target type(s): `A4-material`

- A4 material item repair requires exact-final independent certification

Read the complete current item and every dependency needed for the changed inference or source attribution. For source work, open the retained exact-final URL(s) and compare the public claim with the current provenance rationale.

Current generated-manifest rows:

```json
[
  {
    "source": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "cor-bolzano-weierstrass-in-rn",
    "declared_target": "cor-bolzano-weierstrass-in-rn",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "thm-componentwise-convergence-and-completeness",
    "declared_target": "thm-componentwise-convergence-and-completeness",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-limit-unique",
    "declared_target": "lem-limit-unique",
    "target_statement_provenance": "literature-derived",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-subsequence-inherits-limit",
    "declared_target": "lem-subsequence-inherits-limit",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "thm-convergence-iff-limsup-equals-liminf",
    "declared_target": "thm-convergence-iff-limsup-equals-liminf",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-alternating-sequence",
    "declared_target": "lem-alternating-sequence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-metric-convergence",
    "declared_target": "def-metric-convergence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-sequence",
    "declared_target": "def-sequence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-real-limit",
    "declared_target": "def-real-limit",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-metrics-on-rn",
    "declared_target": "lem-metrics-on-rn",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
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
    "source": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric",
    "declared_target": "lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-p-norms-are-norms-and-induce-the-published-metrics",
    "declared_target": "lem-p-norms-are-norms-and-induce-the-published-metrics",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-convergent-implies-bounded",
    "declared_target": "lem-convergent-implies-bounded",
    "target_statement_provenance": "literature-derived",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
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
    "source": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-isometry-and-metric-embedding",
    "declared_target": "def-isometry-and-metric-embedding",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-metric-bounded-diameter",
    "declared_target": "def-metric-bounded-diameter",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
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
    "source": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
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
    "source": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-index-map-grows",
    "declared_target": "lem-index-map-grows",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
    "sourcePage": "rn-as-a-normed-space-examples",
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
  "id": "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html",
    "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
  ],
  "rationale": "FALSE: a sequence in $\\\\mathbb{R}^{n}$ whose coordinate sequences are each bounded converges: The literature gives the standard norm definitions and finite-dimensional equivalence, compactness, or coordinate results; the item specializes it to the library’s zero-based function model of R^n, named published metrics, and explicit n-boundary conventions, and sometimes bundles consequences or a refuting witness. The supplied numbered argument was audited as a local proof rather than a transcription or identifiable adaptation of a source proof.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

Exact current item at dispatch:

````markdown
---
id: fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension
kind: false-statement
title: "FALSE: a sequence in $\\mathbb{R}^{n}$ whose coordinate sequences are each bounded converges"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-bolzano-weierstrass-in-rn, thm-componentwise-convergence-and-completeness, lem-limit-unique, lem-subsequence-inherits-limit, thm-convergence-iff-limsup-equals-liminf, lem-alternating-sequence, def-metric-convergence, def-sequence, def-real-limit, lem-metrics-on-rn, def-p-norms-on-rn, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, lem-p-norms-are-norms-and-induce-the-published-metrics, lem-convergent-implies-bounded, lem-standard-basis-of-f-n, def-isometry-and-metric-embedding, def-metric-bounded-diameter, lem-of-naturals-positive, def-canonical-natural, lem-index-map-grows, lem-of-abs-value]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Bolzano-Weierstrass theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bolzano%E2%80%93Weierstrass_theorem"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Statement

**False claim:** let $n \ge 1$ and let $\bigl(x^{(k)}\bigr)$ be a sequence in
$\mathbb{R}^{n}$ such that every coordinate sequence
$k \mapsto x^{(k)}_j$ $(j<n)$ is bounded ([[def-sequence]]). Then
$\bigl(x^{(k)}\bigr)$ converges in $(\mathbb{R}^{n}, d_2)$
([[def-metric-convergence]], [[lem-metrics-on-rn]]).

**The claim conflates two theorems.** What is true about boundedness is
[[cor-bolzano-weierstrass-in-rn]]: a bounded sequence has a convergent
**subsequence**. What is true componentwise is
[[thm-componentwise-convergence-and-completeness]] clause 1, which is about
**convergence** of the coordinate sequences and says nothing about boundedness.
The false claim takes the hypothesis of the first and the conclusion of the
second.

**The witness is the smallest possible.** Take $n = 1$ and let
$x^{(k)} \in \mathbb{R}^{1}$ be the function $1 \to \mathbb{R}$ with value
$\varepsilon_k$ at $0$, where $(\varepsilon_k)$ is the alternating sequence
([[lem-alternating-sequence]]).

## Facts & Assumptions

**Given:** The alternating sequence $(\varepsilon_k)$, with $\varepsilon_0 = 1$, $\varepsilon_{k+1} = -\varepsilon_k$ and $|\varepsilon_k| = 1$; its even and odd index maps $e$ and $o$, strictly increasing with $\varepsilon_{e_l} = 1$ and $\varepsilon_{o_l} = -1$ for every $l$ ([[lem-alternating-sequence]]); and the sequence $x^{(k)} \in \mathbb{R}^{1}$ with $x^{(k)}_0 = \varepsilon_k$.

[A1] The refuted claim, at $n = 1$ and this sequence: $\bigl(x^{(k)}\bigr)$ converges in $(\mathbb{R}^{1},d_2)$.

[L1] The alternating sequence and its index maps, and $|\varepsilon_k| = 1$ ([[lem-alternating-sequence]], [[lem-of-abs-value]], [[lem-index-map-grows]]).

[L2] Convergence in $\mathbb{R}^{n}$ for $n \ge 1$ is componentwise ([[thm-componentwise-convergence-and-completeness]] clause 1, [[lem-standard-basis-of-f-n]], [[def-p-norms-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]], [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]).

[L3] A subsequence of a convergent real sequence converges to the same limit, and a real sequence has at most one limit ([[lem-subsequence-inherits-limit]], [[lem-limit-unique]], [[def-real-limit]]).

[L4] A constant real sequence converges to its value ([[def-real-limit]]).

[L5] $1 \ne -1$, since $1-(-1) = \iota(2) > 0$ ([[lem-of-naturals-positive]], [[def-canonical-natural]]).

[L6] A bounded sequence in $\mathbb{R}^{n}$ has a convergent subsequence ([[cor-bolzano-weierstrass-in-rn]], [[def-metric-bounded-diameter]], [[def-isometry-and-metric-embedding]]); and a convergent real sequence is bounded ([[lem-convergent-implies-bounded]]).

## Refutation

**Proof technique:** direct.

1.1 The only coordinate sequence of $\bigl(x^{(k)}\bigr)$ is $k \mapsto \varepsilon_k$, and it is bounded: $|\varepsilon_k| = 1$ for every $k$, so $M = 1$ works. So the hypothesis of the refuted claim is met. [L1]

1.2 The subsequence $l \mapsto \varepsilon_{e_l}$ is constantly $1$ and converges to $1$; the subsequence $l \mapsto \varepsilon_{o_l}$ is constantly $-1$ and converges to $-1$; both index maps are strictly increasing. [L1, L4]

2.1 The real sequence $(\varepsilon_k)$ does not converge: if it converged to $L$, both subsequences of step 1.2 would converge to $L$, so $L = 1$ and $L = -1$ by uniqueness of limits, contradicting $1 \ne -1$. [step 1.2, L3, L5]

3.1 By the componentwise criterion, $\bigl(x^{(k)}\bigr)$ converges in $(\mathbb{R}^{1},d_2)$ if and only if $(\varepsilon_k)$ converges in $\mathbb{R}$; by step 2.1 it does not. So [A1] fails while the hypothesis holds, and the claim is false. [step 1.1, step 2.1, A1, L2]

4.1 The true statement in this neighbourhood is that the sequence has a convergent **subsequence**: its range is bounded, so [L6] applies, and step 1.2 exhibits two convergent subsequences with different limits. [step 1.1, step 1.2, L6] ∎

## Remarks

- **The same witness separates the two notions on the real line.** Boundedness of a real sequence gives a convergent subsequence and nothing more, and the alternating sequence has limit inferior $-1$ and limit superior $1$, so by [[thm-convergence-iff-limsup-equals-liminf]] it cannot converge. That is a second route to step 2.1; the one taken above uses only uniqueness of limits.

- **Componentwise boundedness and boundedness agree, so nothing is gained by weakening the hypothesis.** For $n \ge 1$ the comparison chain $\lVert y\rVert_\infty \le \lVert y\rVert_2 \le \iota(n)\lVert y\rVert_\infty$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clause 3) shows that a sequence in $\mathbb{R}^{n}$ has bounded range if and only if every coordinate sequence is bounded. So the refuted claim is exactly the claim that a bounded sequence converges, restated coordinatewise.

- **The converse direction is fine.** A convergent sequence in $\mathbb{R}^{n}$ does have bounded coordinate sequences, each coordinate sequence being convergent by [[thm-componentwise-convergence-and-completeness]] clause 1 and a convergent real sequence being bounded ([[lem-convergent-implies-bounded]]). Only the direction asserted above fails.
````
