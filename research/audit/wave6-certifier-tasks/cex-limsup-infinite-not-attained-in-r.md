## Assigned repair — `cex-limsup-infinite-not-attained-in-r`

Item path: `items/cex-limsup-infinite-not-attained-in-r.md`

Normalized final-text SHA-256 at dispatch: `75f6b52dbb4b55bf29a648a5b64e0d49206b781a28f50b7367c6548ef176363a`

Named repair: Removed an unused duplicated fact, linked the relevant remark directly, and renumbered the proof facts; verify that every remaining citation and numbered use is exact and the counterexample still proves its claim.

Split reasons: ["body text"]

Read the current target from disk and every dependency needed to check the repair. The generated manifest rows are supplied only as a completeness checklist:

```json
[
  {
    "source": "cex-limsup-infinite-not-attained-in-r",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "def-limsup-liminf",
    "declared_target": "def-limsup-liminf",
    "target_statement_provenance": null,
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-limsup-infinite-not-attained-in-r",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "thm-limsup-is-greatest-subsequential-limit",
    "declared_target": "thm-limsup-is-greatest-subsequential-limit",
    "target_statement_provenance": null,
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-limsup-infinite-not-attained-in-r",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "def-extended-reals",
    "declared_target": "def-extended-reals",
    "target_statement_provenance": null,
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-limsup-infinite-not-attained-in-r",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "def-extended-limits",
    "declared_target": "def-extended-limits",
    "target_statement_provenance": null,
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-limsup-infinite-not-attained-in-r",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "def-subsequential-limit",
    "declared_target": "def-subsequential-limit",
    "target_statement_provenance": "literature-derived",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-limsup-infinite-not-attained-in-r",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "def-divergence-to-infinity",
    "declared_target": "def-divergence-to-infinity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-limsup-infinite-not-attained-in-r",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "cex-limsup-infinite-not-attained-in-r",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "cex-limsup-infinite-not-attained-in-r",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-limsup-exists",
    "declared_target": "lem-limsup-exists",
    "target_statement_provenance": null,
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-limsup-infinite-not-attained-in-r",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-extended-reals-complete",
    "declared_target": "lem-extended-reals-complete",
    "target_statement_provenance": null,
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-limsup-infinite-not-attained-in-r",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "cex-limsup-infinite-not-attained-in-r",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "cex-limsup-infinite-not-attained-in-r",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-limit-of-tail",
    "declared_target": "lem-limit-of-tail",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-limsup-infinite-not-attained-in-r",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "cex-limsup-infinite-not-attained-in-r",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "cex-limsup-infinite-not-attained-in-r",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "cex-limsup-infinite-not-attained-in-r",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "def-abs-value",
    "declared_target": "def-abs-value",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-limsup-infinite-not-attained-in-r",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "def-upper-bound",
    "declared_target": "def-upper-bound",
    "target_statement_provenance": "ai-altered",
    "targetPage": "order-zorn-and-the-axiom-of-choice",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-limsup-infinite-not-attained-in-r",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "def-partial-order",
    "declared_target": "def-partial-order",
    "target_statement_provenance": "literature-derived",
    "targetPage": "relations-functions-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-limsup-infinite-not-attained-in-r",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "cex-limsup-infinite-not-attained-in-r",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "cex-limsup-infinite-not-attained-in-r",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "cor-of-one-positive",
    "declared_target": "cor-of-one-positive",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-limsup-infinite-not-attained-in-r",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "cex-limsup-infinite-not-attained-in-r",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "def-nat-order",
    "declared_target": "def-nat-order",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-limsup-infinite-not-attained-in-r",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "thm-nat-linear-order",
    "declared_target": "thm-nat-linear-order",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-limsup-infinite-not-attained-in-r",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "cex-limsup-infinite-not-attained-in-r",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "def-complete-ordered-field",
    "declared_target": "def-complete-ordered-field",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

For a byte-exact cross-check, the current item at dispatch was:

````markdown
---
id: cex-limsup-infinite-not-attained-in-r
kind: counterexample
title: "A sequence with $\\limsup = +\\infty$: the greatest subsequential limit exists only in $\\overline{\\mathbb{R}}$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-limsup-liminf, thm-limsup-is-greatest-subsequential-limit, def-extended-reals, def-extended-limits, def-subsequential-limit, def-divergence-to-infinity, lem-alternating-sequence, lem-index-map-grows, lem-limsup-exists, lem-extended-reals-complete, lem-convergent-implies-bounded, lem-limit-unique, lem-limit-of-tail, thm-of-archimedean, lem-of-naturals-positive, lem-of-abs-value, def-abs-value, def-upper-bound, def-partial-order, def-sequence, def-real-limit, cor-of-one-positive, lem-of-add-order, def-nat-order, thm-nat-linear-order, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Limit superior and limit inferior (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_superior_and_limit_inferior"
    - title: "Subsequential limit (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequential_limit"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement refuted

That [[thm-limsup-is-greatest-subsequential-limit]] can be stated inside
$\mathbb{R}$: that for every sequence $(x_k)$ of reals the set
$\operatorname{SL}(x)$ of *real* subsequential limits ([[def-subsequential-limit]])
has a greatest element and that element is $\limsup_k x_k$.

The witness below has a nonempty $\operatorname{SL}(x)$ with a greatest element,
so the failure is not that the real set is empty: it is that the greatest element
of $\operatorname{SL}(x)$ is $0$ while $\limsup_k x_k = +\infty$. The dominant
behaviour of the sequence is invisible to $\operatorname{SL}(x)$ and is recorded
only by $\overline{\operatorname{SL}}(x)$ ([[def-extended-limits]]).

## Facts & Assumptions

**Given:** The alternating sequence $(s_k)$ and the index maps $e, o$ of [[lem-alternating-sequence]]; the canonical naturals $\iota(k) = k \cdot 1_{\mathbb{R}}$ with $\iota(0) = 0$; and the sequence $x_k := \iota(k)$ when $s_k = 1$ and $x_k := 0$ when $s_k = -1$.

[L1] The alternating sequence: $|s_k| = 1$, $s_{e_j} = 1$, $s_{o_j} = -1$, and $e$, $o$ are strictly increasing, so $e_j \ge j$ and $o_j \ge j$ ([[lem-alternating-sequence]], [[lem-index-map-grows]]).

[L2] Limit superior in $\overline{\mathbb{R}}$: existence for every sequence, the tail supremum being the least upper bound of the tail range and $\limsup$ the greatest lower bound of the family of tail suprema ([[def-limsup-liminf]], [[lem-limsup-exists]], [[lem-extended-reals-complete]], [[def-upper-bound]], [[def-partial-order]], [[def-sequence]]).

[L3] The order on $\overline{\mathbb{R}}$ is total, $+\infty$ is greatest, every real is $< +\infty$ and $> -\infty$, and the order restricts on $\mathbb{R}$ to the order of $\mathbb{R}$ ([[def-extended-reals]]).

[L4] Extended subsequential limits and convergence in $\overline{\mathbb{R}}$; divergence to $+\infty$ means that for every real $M$ one has $x_k > M$ eventually ([[def-extended-limits]], [[def-divergence-to-infinity]], [[def-subsequential-limit]], [[def-real-limit]]).

[L5] Canonical naturals: $\iota$ is strictly increasing with $\iota(k) \ge 0$, and for every real $M$ there is a natural $p \ge 1$ with $M < \iota(p)$ ([[lem-of-naturals-positive]], [[thm-of-archimedean]]).

[L6] A convergent sequence of reals is bounded, a limit is unique, and a sequence agreeing with a constant from some index on converges to that constant ([[lem-convergent-implies-bounded]], [[lem-limit-unique]], [[lem-limit-of-tail]], [[def-sequence]]).

[L7] Absolute value and order: $|t| = 1$ forces $t = 1$ or $t = -1$; $0 < 1$; the order on $\mathbb{N}$ is total ([[lem-of-abs-value]], [[def-abs-value]], [[cor-of-one-positive]], [[lem-of-add-order]], [[def-nat-order]], [[thm-nat-linear-order]], [[def-ordered-field]], [[def-complete-ordered-field]]).

## Counterexample

**Proof technique:** direct.

1.1 Each $s_k$ is $1$ or $-1$, so $(x_k)$ is a well-defined sequence of reals with $x_k \ge 0$ for every $k$; moreover $x_{e_j} = \iota(e_j)$ and $x_{o_j} = 0$ for every $j$. [given, L1, L5, L7]

1.2 The subsequence along $o$ is constantly $0$, and $o$ is strictly increasing, so $0 \in \operatorname{SL}(x)$. [given, L1, L4, L6]

2.1 For every $n \in \mathbb{N}$ the tail supremum $\sup T_n(x)$ is $+\infty$. Given a real $M$, take a natural $p \ge 1$ with $M < \iota(p)$ and an index $j$ at least as large as both $n$ and $p$; then $e_j \ge j \ge n$, so $x_{e_j} = \iota(e_j) \in T_n(x)$, and $e_j \ge j \ge p$ gives $\iota(e_j) \ge \iota(p) > M$. So no real number bounds $T_n(x)$ above, and the least upper bound in $\overline{\mathbb{R}}$ must be $+\infty$. [step 1.1, L1, L2, L3, L5, L7]

3.1 Every real subsequential limit of $(x_k)$ equals $0$. Let $n$ be strictly increasing with $x_{n_i} \to L \in \mathbb{R}$; the subsequence is then bounded, say $|x_{n_i}| \le B$ for every $i$. Suppose $s_{n_i} = 1$ for arbitrarily large $i$: taking a natural $p \ge 1$ with $B < \iota(p)$ and such an index $i \ge p$, we get $x_{n_i} = \iota(n_i) \ge \iota(i) \ge \iota(p) > B$, contradicting the bound. So there is $I$ with $s_{n_i} = -1$, hence $x_{n_i} = 0$, for every $i \ge I$; a sequence equal to $0$ from an index on converges to $0$, so $L = 0$ by uniqueness of limits. [step 1.1, step 2.1, L1, L4, L5, L6, L7]

4.1 Consequently $\limsup_k x_k$ is the greatest lower bound of the family $\{+\infty\}$, namely $+\infty$, while $\operatorname{SL}(x) = \{0\}$ by steps 1.2 and 3.1, whose greatest element is the real number $0$. Since $0 \ne +\infty$, the refuted claim fails for this sequence. [step 2.1, step 1.2, step 3.1, L2, L3] ∎

## Remarks

- **What the extended set records.** By [[thm-limsup-is-greatest-subsequential-limit]] the element $\limsup_k x_k = +\infty$ lies in $\overline{\operatorname{SL}}(x)$ and is its greatest element, so $\overline{\operatorname{SL}}(x) = \{0, +\infty\}$: the value $-\infty$ is excluded because $x_k \ge 0$ for every $k$, so no subsequence can be eventually below a negative real. The real set $\operatorname{SL}(x) = \{0\}$ is exactly the finite part of it, as [[def-extended-limits]] says it must be.

- **Why the theorem cannot simply be restricted to bounded sequences.** For a bounded sequence $\limsup$ is real and the two statements agree; the point of stating [[thm-limsup-is-greatest-subsequential-limit]] in $\overline{\mathbb{R}}$ is that it then holds for *every* sequence, with no hypothesis to check, and this witness shows the hypothesis-free version is strictly stronger.

- **A simpler witness would prove less.** The sequence $x_k = \iota(k)$ has $\operatorname{SL}(x) = \emptyset$, so the refuted claim fails there only because an empty set has no greatest element. Interleaving with $0$ makes $\operatorname{SL}(x)$ nonempty with a greatest element, so the claim fails for the substantive reason: the greatest real subsequential limit is not the limit superior.
````
