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

## Assigned exact-final target — `cex-absolute-value-integrable-without-the-function`

Item path: `items/cex-absolute-value-integrable-without-the-function.md`

Normalized final-text SHA-256 at dispatch: `a99c7da3efe8d50a1c039266c052f8d954e17ca76ce842dcd7bce9cff39463d5`

Target type: `item`

- A4 material item repair

Read the complete current item and every exact dependency needed for the changed inference or source attribution. For source work, open the exact final URL(s) with web access and compare the source claim to the current provenance rationale and public Statement.

Current generated-manifest rows (completeness checklist only):

```json
[
  {
    "source": "cex-absolute-value-integrable-without-the-function",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
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
    "source": "cex-absolute-value-integrable-without-the-function",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
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
    "source": "cex-absolute-value-integrable-without-the-function",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "def-darboux-sums",
    "declared_target": "def-darboux-sums",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-absolute-value-integrable-without-the-function",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "def-partition-and-refinement",
    "declared_target": "def-partition-and-refinement",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-absolute-value-integrable-without-the-function",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "lem-q-and-irrationals-dense-r",
    "declared_target": "lem-q-and-irrationals-dense-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-absolute-value-integrable-without-the-function",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "def-dirichlet-and-thomae-functions",
    "declared_target": "def-dirichlet-and-thomae-functions",
    "target_statement_provenance": "literature-derived",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-absolute-value-integrable-without-the-function",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "thm-dirichlet-and-thomae-continuity-sets",
    "declared_target": "thm-dirichlet-and-thomae-continuity-sets",
    "target_statement_provenance": "literature-derived",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-absolute-value-integrable-without-the-function",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "thm-lebesgue-criterion",
    "declared_target": "thm-lebesgue-criterion",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-riemann-integral",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-absolute-value-integrable-without-the-function",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "lem-nondegenerate-interval-is-not-null",
    "declared_target": "lem-nondegenerate-interval-is-not-null",
    "target_statement_provenance": "literature-derived",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-absolute-value-integrable-without-the-function",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
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
    "source": "cex-absolute-value-integrable-without-the-function",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
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
    "source": "cex-absolute-value-integrable-without-the-function",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
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
    "source": "cex-absolute-value-integrable-without-the-function",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
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
    "source": "cex-absolute-value-integrable-without-the-function",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
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
    "source": "cex-absolute-value-integrable-without-the-function",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
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
    "source": "cex-absolute-value-integrable-without-the-function",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
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
    "source": "cex-absolute-value-integrable-without-the-function",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "def-bounded-set",
    "declared_target": "def-bounded-set",
    "target_statement_provenance": "literature-derived",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-absolute-value-integrable-without-the-function",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
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
    "source": "cex-absolute-value-integrable-without-the-function",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "def-ordered-field",
    "declared_target": "def-ordered-field",
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
  "id": "cex-absolute-value-integrable-without-the-function",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "established-knowledge",
  "urls": [],
  "rationale": "The signed Dirichlet function, equal to 1 on rationals and -1 on irrationals, is a standard counterexample: its absolute value is constant while every Darboux lower and upper sum differs. Search located the exact witness only in non-qualifying discussion sources; reputable texts located during the pass state Dirichlet nonintegrability but not this full signed claim. It therefore requires Alpha's independent established-knowledge concurrence and is not mislabeled as invented.",
  "alpha_concurred": true,
  "at": "2026-08-09"
}
```

Exact current item at dispatch:

````markdown
---
id: cex-absolute-value-integrable-without-the-function
kind: counterexample
title: "A function that is not Riemann integrable although $\\lvert f\\rvert$ is"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-integrability-of-absolute-values-products-and-lattice-operations, def-darboux-integral, def-darboux-sums, def-partition-and-refinement, lem-q-and-irrationals-dense-r, def-dirichlet-and-thomae-functions, thm-dirichlet-and-thomae-continuity-sets, thm-lebesgue-criterion, lem-nondegenerate-interval-is-not-null, lem-integral-elementary-bounds, def-finite-sum, lem-finite-sum-laws, def-infimum, def-max-min, def-abs-value, def-interval, def-bounded-set, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "$|f|$ integrable, $f$ not"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "Thomae's function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Thomae%27s_function"
pipeline_run: null
---

## Statement refuted

**False claim:** if $|f|$ is Riemann integrable on $[a,b]$ then so is $f$; that
is, the first clause of
[[cor-integrability-of-absolute-values-products-and-lattice-operations]] has a
converse.

Let $\mathbf{1}_{\mathbb{Q}}$ be the Dirichlet function
([[def-dirichlet-and-thomae-functions]]) and put

$$f : [0,1] \to \mathbb{R}, \qquad f(x) \;:=\; 2\,\mathbf{1}_{\mathbb{Q}}(x) - 1 \;=\; \begin{cases} 1 & x \text{ rational}, \\ -1 & x \text{ irrational}. \end{cases}$$

Then $|f|$ is the constant function $1$, integrable with $\int_0^1 |f| = 1$,
while $f$ is **not** Riemann integrable on $[0,1]$: every lower Darboux sum of
$f$ is $-1$ and every upper Darboux sum is $1$, so the lower and upper integrals
are $-1$ and $1$.

## Facts & Assumptions

**Given:** The function $f = 2\mathbf{1}_{\mathbb{Q}} - 1$ on $[0,1]$, and a partition $P = (n,t)$ of $[0,1]$.

[L1] $\mathbf{1}_{\mathbb{Q}}(x) = 1$ at a rational $x$ and $0$ at an irrational $x$ ([[def-dirichlet-and-thomae-functions]]).

[L2] Both $\mathbb{Q}$ and the irrationals are dense in $\mathbb{R}$, so every nonempty open interval contains a rational and an irrational ([[lem-q-and-irrationals-dense-r]]).

[L3] For a partition $P = (n,t)$ of $[0,1]$: $n \ge 1$, $\Delta_i = t_{i+1}-t_i > 0$, $\sum_{i<n}\Delta_i = 1$, and the open interval $(t_i,t_{i+1})$ is nonempty ([[def-partition-and-refinement]], [[def-interval]], [[def-finite-sum]], [[lem-finite-sum-laws]]).

[L4] $L(u,P) = \sum_{i<n}m_i\Delta_i$ and $U(u,P) = \sum_{i<n}M_i\Delta_i$ with $m_i = \inf u[I_i]$ and $M_i = \sup u[I_i]$; a set with a least element has it as its infimum and with a greatest element has it as its supremum ([[def-darboux-sums]], [[def-infimum]], [[def-max-min]]).

[L5] $\underline{\int_0^1} u = \sup_P L(u,P)$ and $\overline{\int_0^1} u = \inf_P U(u,P)$; $u$ is integrable exactly when the two agree ([[def-darboux-integral]], [[def-bounded-set]]).

[L6] Finite sums: scaling and $\sum_{i<n}\lambda\Delta_i = \lambda\sum_{i<n}\Delta_i$ ([[def-finite-sum]], [[lem-finite-sum-laws]], clause 2).

[L7] $\int_p^q c = c(q-p)$ for a constant $c$ ([[lem-integral-elementary-bounds]]).

[L8] Absolute value and ordered-field arithmetic: $|1| = |-1| = 1$, and the order is total ([[def-abs-value]], [[def-ordered-field]], [[def-complete-ordered-field]]).

## Counterexample

**Proof technique:** direct.

1.1 $|f|$ is the constant function $1$ on $[0,1]$: at a rational $x$, $f(x) = 2\cdot1 - 1 = 1$, and at an irrational $x$, $f(x) = 2\cdot0-1 = -1$, and $|1| = |-1| = 1$ by [L1] and [L8]. Hence $|f|$ is integrable with $\int_0^1|f| = 1$ by [L7]. [given, L1, L7, L8]

1.2 Let $P = (n,t)$ be any partition of $[0,1]$ and let $i < n$. The open interval $(t_i,t_{i+1})$ is nonempty by [L3], so it contains a rational and an irrational by [L2]; both lie in $I_i$, so $1 \in f[I_i]$ and $-1 \in f[I_i]$. [given, L2, L3]

2.1 $f$ is bounded, with values in $\{-1,1\}$, so its Darboux sums are defined by [L4] and [L5]. [step 1.1, given, L4, L5]

3.1 Since $f[I_i] \subseteq \{-1,1\}$ and both values occur, $m_i = -1$ and $M_i = 1$ by [L4]. [step 2.1, step 1.2, L4]

4.1 Hence $L(f,P) = \sum_{i<n}(-1)\Delta_i = -1$ and $U(f,P) = \sum_{i<n}1\cdot\Delta_i = 1$, by [L4], [L6] and [L3]. [step 3.1, L3, L4, L6]

5.1 That holds for every partition $P$, so the set of lower sums is $\{-1\}$ and the set of upper sums is $\{1\}$; by [L5], $\underline{\int_0^1}f = -1 \ne 1 = \overline{\int_0^1}f$ and $f$ is not integrable. [step 4.1, L5]

6.1 So $|f|$ is integrable on $[0,1]$ while $f$ is not, and the claim is false. [step 1.1, step 5.1] ∎

## Remarks

- **The Lebesgue criterion says the same thing.** $f$ agrees with $2\mathbf{1}_{\mathbb{Q}} - 1$, and $\mathbf{1}_{\mathbb{Q}}$ is continuous at no point of $\mathbb{R}$ ([[thm-dirichlet-and-thomae-continuity-sets]], claim 1), so the discontinuity set of $f$ in $[0,1]$ is the whole of $[0,1]$, which is not null ([[lem-nondegenerate-interval-is-not-null]]); by [[thm-lebesgue-criterion]] $f$ is not integrable. The direct computation above is given because it also *locates* both Darboux integrals, which the criterion does not.

- **Why no converse can be expected.** Passing to $|f|$ destroys all sign information, and integrability is a statement about the oscillation of $f$; here $|f|$ has oscillation $0$ on every subinterval while $f$ has oscillation $2$ on every subinterval. The corollary's implication runs only in the direction the composition theorem provides, because $t \mapsto |t|$ is continuous and no continuous $\psi$ satisfies $\psi(|t|) = t$.

- **The same example separates $\int|f|$ from $\bigl|\int f\bigr|$ in the strongest possible way**: the right-hand side is not even defined.
````
