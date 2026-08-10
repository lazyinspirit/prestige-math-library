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

## Assigned exact-final target — `cor-bolzano-weierstrass-in-rn`

Item path: `items/cor-bolzano-weierstrass-in-rn.md`

Normalized final-text SHA-256 at dispatch: `261bc5ab2323b98bdcdfd2456ba7485f577bc0239f71ff5cd790bf63351795da`

Target type(s): `A4-material`

- A4 material item repair requires exact-final independent certification

Read the complete current item and every dependency needed for the changed inference or source attribution. For source work, open the retained exact-final URL(s) and compare the public claim with the current provenance rationale.

Current generated-manifest rows:

```json
[
  {
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
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
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "thm-all-norms-on-rn-are-equivalent",
    "declared_target": "thm-all-norms-on-rn-are-equivalent",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-equivalent-norms",
    "declared_target": "def-equivalent-norms",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "thm-heine-borel-rn",
    "declared_target": "thm-heine-borel-rn",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness-in-metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "thm-compact-implies-the-other-compactness-forms",
    "declared_target": "thm-compact-implies-the-other-compactness-forms",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness-in-metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "thm-metric-compactness-equivalences",
    "declared_target": "thm-metric-compactness-equivalences",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness-in-metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-metric-compactness",
    "declared_target": "def-metric-compactness",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness-in-metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-metric-compactness-variants",
    "declared_target": "def-metric-compactness-variants",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness-in-metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
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
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-metric-ball",
    "declared_target": "def-metric-ball",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "thm-bolzano-weierstrass",
    "declared_target": "thm-bolzano-weierstrass",
    "target_statement_provenance": "literature-derived",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-dependent-choice",
    "declared_target": "def-dependent-choice",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness-in-metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
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
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
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
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
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
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
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
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
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
    "source": "cor-bolzano-weierstrass-in-rn",
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
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
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
    "source": "cor-bolzano-weierstrass-in-rn",
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
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
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
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
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
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
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
    "source": "cor-bolzano-weierstrass-in-rn",
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
  }
]
```

Current provenance row:

```json
{
  "id": "cor-bolzano-weierstrass-in-rn",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html",
    "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
  ],
  "rationale": "For $n \\\\ge 1$ every bounded sequence in $\\\\mathbb{R}^n$ has a convergent subsequence: The literature gives the standard norm definitions and finite-dimensional equivalence, compactness, or coordinate results; the item specializes it to the library’s zero-based function model of R^n, named published metrics, and explicit n-boundary conventions, and sometimes bundles consequences or a refuting witness. The supplied numbered argument was audited as a local proof rather than a transcription or identifiable adaptation of a source proof.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

Exact current item at dispatch:

````markdown
---
id: cor-bolzano-weierstrass-in-rn
kind: corollary
title: "For $n \\ge 1$ every bounded sequence in $\\mathbb{R}^n$ has a convergent subsequence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-componentwise-convergence-and-completeness, thm-all-norms-on-rn-are-equivalent, def-equivalent-norms, thm-heine-borel-rn, thm-compact-implies-the-other-compactness-forms, thm-metric-compactness-equivalences, def-metric-compactness, def-metric-compactness-variants, def-metric-bounded-diameter, def-metric-ball, thm-bolzano-weierstrass, def-dependent-choice, lem-metrics-on-rn, def-metric-convergence, def-sequence, lem-subsequence-inherits-limit, lem-index-map-grows, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, def-norm-and-normed-space, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-isometry-and-metric-embedding, thm-of-square-roots, lem-of-abs-value]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Bolzano-Weierstrass theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bolzano%E2%80%93Weierstrass_theorem"
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ with $n \ge 1$ and let $\bigl(x^{(j)}\bigr)_{j\in\mathbb{N}}$
be a sequence in $\mathbb{R}^{n}$ whose range
$\{\, x^{(j)} : j \in \mathbb{N} \,\}$ is a bounded subset of
$(\mathbb{R}^{n}, d_2)$ ([[def-metric-bounded-diameter]], [[lem-metrics-on-rn]]).
Then there are a strictly increasing $i : \mathbb{N} \to \mathbb{N}$
([[def-sequence]], [[lem-index-map-grows]]) and a point $p \in \mathbb{R}^{n}$
with

$$x^{(i_j)} \longrightarrow p \quad \text{in } (\mathbb{R}^{n}, d_2)$$

([[def-metric-convergence]]). By [[thm-all-norms-on-rn-are-equivalent]] the same
statement holds with $d_2$ replaced by the metric of any norm on
$\mathbb{R}^{n}$, boundedness and convergence both being unchanged by that
replacement ([[def-equivalent-norms]]).

**This is assembled from published theorems and is not proved again by
bisection.** The bisection is in [[thm-heine-borel-rn]], published at order 120;
what is added here is the passage from compactness to sequential compactness and
the reading of the conclusion in $\mathbb{R}^{n}$.

**Choice cost: none.** [[thm-heine-borel-rn]] is proved by bisection and uses no
choice principle, and "compact implies sequentially compact" is a theorem of ZF
([[thm-compact-implies-the-other-compactness-forms]]). The five-way equivalence
[[thm-metric-compactness-equivalences]] is **not** used, precisely because it is
stated under countable choice and dependent choice ([[def-dependent-choice]]) and
would overcharge this corollary; the arrow-by-arrow account is
[[rem-compactness-choice-ledger-metric]].

## Facts & Assumptions

**Given:** A natural $n \ge 1$; a sequence $\bigl(x^{(j)}\bigr)$ in $\mathbb{R}^{n}$ whose range is bounded in $(\mathbb{R}^{n},d_2)$.

[L1] Boundedness: a nonempty $A \subseteq X$ is bounded when $A \subseteq B(q,r)$ for some $q \in X$ and real $r > 0$ ([[def-metric-bounded-diameter]], [[def-metric-ball]]).

[L2] $d_2(u,v) = \lVert u-v\rVert_2$, $\lVert\cdot\rVert_2$ is a norm, and $|y_k| \le \lVert y\rVert_2$ for every $k<n$ ([[lem-p-norms-are-norms-and-induce-the-published-metrics]], [[def-p-norms-on-rn]], [[def-norm-and-normed-space]], [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clause 3).

[L3] Closed boxes are compact: for reals $a_k \le b_k$ $(k<n)$ the set $Q = \{\, y \in \mathbb{R}^{n} : a_k \le y_k \le b_k \text{ for every } k<n \,\}$ is a compact subset of $(\mathbb{R}^{n},d_2)$ ([[thm-heine-borel-rn]] clause 1, [[def-metric-compactness]]).

[L4] In ZF, a compact metric space is countably compact and limit point compact, and each of those implies sequential compactness ([[thm-compact-implies-the-other-compactness-forms]], [[def-metric-compactness-variants]]): every sequence in it has a subsequence converging to a point of it.

[L5] A compact subset $A$ of $X$ is one for which the metric subspace $(A,d_A)$ is a compact metric space, $d_A$ being the restriction of $d$ ([[def-metric-compactness]], [[def-isometry-and-metric-embedding]]).

[L6] Convergence in a metric space, and inheritance of limits by subsequences ([[def-metric-convergence]], [[lem-subsequence-inherits-limit]], [[lem-index-map-grows]]).

## Proof

**Proof technique:** direct.

1.1 The range of the sequence is nonempty and bounded, so there are $q \in \mathbb{R}^{n}$ and a real $r > 0$ with $d_2(x^{(j)}, q) < r$ for every $j \in \mathbb{N}$. [L1]

2.1 Put $M := r + \lVert q\rVert_2$, a real with $M > 0$. By the triangle inequality for the norm, $\lVert x^{(j)}\rVert_2 \le \lVert x^{(j)} - q\rVert_2 + \lVert q\rVert_2 = d_2(x^{(j)},q) + \lVert q\rVert_2 < M$ for every $j$. [step 1.1, L2]

3.1 For every $j$ and every $k<n$: $|x^{(j)}_k| \le \lVert x^{(j)}\rVert_2 < M$, hence $-M \le x^{(j)}_k \le M$. [step 2.1, L2]

4.1 Let $Q := \{\, y \in \mathbb{R}^{n} : -M \le y_k \le M \text{ for every } k<n \,\}$. Since $-M \le M$, $Q$ is a compact subset of $(\mathbb{R}^{n},d_2)$, and by step 3.1 every term $x^{(j)}$ lies in $Q$. [step 3.1, L3]

5.1 By [L5] the metric subspace $(Q, d_Q)$ is a compact metric space, and by [L4] it is sequentially compact. [step 4.1, L4, L5]

6.1 $\bigl(x^{(j)}\bigr)$ is a sequence in $Q$, so there are a strictly increasing $i : \mathbb{N} \to \mathbb{N}$ and $p \in Q$ with $x^{(i_j)} \to p$ in $(Q, d_Q)$. [step 4.1, step 5.1, L4, L6]

7.1 Since $d_Q$ is the restriction of $d_2$ to $Q \times Q$, the reals $d_Q(x^{(i_j)}, p)$ and $d_2(x^{(i_j)}, p)$ are equal for every $j$, so $x^{(i_j)} \to p$ in $(\mathbb{R}^{n},d_2)$ as well. [step 6.1, L5, L6]

8.1 So the bounded sequence $\bigl(x^{(j)}\bigr)$ has a subsequence converging in $(\mathbb{R}^{n},d_2)$, which is the claim. [step 6.1, step 7.1] ∎

## Remarks

- **The case $n = 1$ and the published one-dimensional theorem.** $\mathbb{R}^{1}$ is the set of functions $1 \to \mathbb{R}$ and is therefore **not literally** $\mathbb{R}$. The map $\theta : \mathbb{R} \to \mathbb{R}^{1}$ sending $t$ to the function with value $t$ at $0$ is a bijection, and $d_2(\theta(s),\theta(t)) = \sqrt{(s-t)^{2}} = |s-t|$ ([[thm-of-square-roots]], [[lem-of-abs-value]]), so $\theta$ is an isometric bijection onto $\mathbb{R}^{1}$ ([[def-isometry-and-metric-embedding]]). Under that identification this corollary at $n = 1$ and the published [[thm-bolzano-weierstrass]] are the same statement, and neither is used to prove the other: the published theorem is proved on the real line, and the corollary above is proved from Heine-Borel in $\mathbb{R}^{n}$.

- **Boundedness of the sequence is boundedness of its range**, a set, and not a condition on each coordinate separately. The two do agree here: step 3.1 gives one direction, while the reverse follows from $\lVert y\rVert_2\le\iota(n)\lVert y\rVert_\infty$ in [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clause 3 after taking the maximum of the finitely many coordinate bounds. What does **not** follow from bounded coordinates is convergence, and the companion page carries that false statement.

- **What sequential compactness gives and what it does not.** It produces a convergent subsequence and says nothing about the original sequence. A bounded sequence need not converge, and a sequence with a convergent subsequence need not be bounded; both remarks are already recorded for the real line in [[thm-bolzano-weierstrass]].
````
