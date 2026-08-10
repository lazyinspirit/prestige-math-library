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

## Assigned exact-final target — `thm-componentwise-limits-and-continuity`

Item path: `items/thm-componentwise-limits-and-continuity.md`

Normalized final-text SHA-256 at dispatch: `2393fa57df0c3fd2794d4e186656015f5207fab2fdf3dab75c237d69e15c0661`

Target type(s): `A6-source-correction`

- A6 removed the failed redundant Lebl draft endpoint; a live semantic source remains

Read the complete current item and every dependency needed for the changed inference or source attribution. For source work, open the retained exact-final URL(s) and compare the public claim with the current provenance rationale.

Current generated-manifest rows:

```json
[
  {
    "source": "thm-componentwise-limits-and-continuity",
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
    "source": "thm-componentwise-limits-and-continuity",
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
    "source": "thm-componentwise-limits-and-continuity",
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
    "source": "thm-componentwise-limits-and-continuity",
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
    "source": "thm-componentwise-limits-and-continuity",
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
    "source": "thm-componentwise-limits-and-continuity",
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
    "source": "thm-componentwise-limits-and-continuity",
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
    "source": "thm-componentwise-limits-and-continuity",
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
    "source": "thm-componentwise-limits-and-continuity",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-metric-continuity",
    "declared_target": "def-metric-continuity",
    "target_statement_provenance": "literature-derived",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-componentwise-limits-and-continuity",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-function-limit",
    "declared_target": "def-function-limit",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limits-of-real-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-componentwise-limits-and-continuity",
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
  },
  {
    "source": "thm-componentwise-limits-and-continuity",
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
    "source": "thm-componentwise-limits-and-continuity",
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
    "source": "thm-componentwise-limits-and-continuity",
    "sourcePage": "rn-as-a-normed-space",
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
    "source": "thm-componentwise-limits-and-continuity",
    "sourcePage": "rn-as-a-normed-space",
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
    "source": "thm-componentwise-limits-and-continuity",
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
    "source": "thm-componentwise-limits-and-continuity",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "lem-finite-set-has-max",
    "declared_target": "lem-finite-set-has-max",
    "target_statement_provenance": "ai-altered",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-componentwise-limits-and-continuity",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
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
    "source": "thm-componentwise-limits-and-continuity",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "lem-finite-choice",
    "declared_target": "lem-finite-choice",
    "target_statement_provenance": "ai-altered",
    "targetPage": "order-zorn-and-the-axiom-of-choice",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-componentwise-limits-and-continuity",
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
    "source": "thm-componentwise-limits-and-continuity",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-metric-space",
    "declared_target": "def-metric-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-componentwise-limits-and-continuity",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "lem-real-line-is-a-metric-space",
    "declared_target": "lem-real-line-is-a-metric-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-componentwise-limits-and-continuity",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "lem-standard-basis-of-f-n",
    "declared_target": "lem-standard-basis-of-f-n",
    "target_statement_provenance": "ai-altered",
    "targetPage": "linear-independence-bases-and-dimension",
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
  "id": "thm-componentwise-limits-and-continuity",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://www.math.toronto.edu/courses/mat237y1/20189/notes/Chapter1/S1.2.html",
    "https://opentext.uleth.ca/apex-standard/sec_vvf_calc.html"
  ],
  "rationale": "The Toronto notes state that a finite-dimensional vector-valued function is continuous exactly when every component is continuous and record closure under addition; APEX Calculus states that vector-valued limits are computed componentwise and that continuity is equivalent to componentwise continuity. The item generalizes those Euclidean-domain statements to a subset of an arbitrary metric-space domain and arbitrary finite m >= 1, and supplies its own proofs of scalar multiplication, inner-product continuity, and continuity after every norm. The supplied numbered argument was audited as a local proof rather than a transcription or identifiable adaptation of a source proof.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

Exact current item at dispatch:

````markdown
---
id: thm-componentwise-limits-and-continuity
kind: theorem
title: "A vector-valued function has a limit, or is continuous, if and only if each of its components does; with the algebra of continuous vector-valued functions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-vector-valued-functions-limits-and-continuity, thm-componentwise-convergence-and-completeness, def-euclidean-inner-product, thm-cauchy-schwarz-and-the-euclidean-norm, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, def-norm-and-normed-space, def-metric-continuity, def-function-limit, def-limit-point-r, lem-finite-sum-laws, def-finite-sum, def-canonical-natural, lem-of-naturals-positive, lem-of-inverse-positive, lem-finite-set-has-max, def-max-min, lem-finite-choice, lem-of-abs-value, def-metric-space, lem-real-line-is-a-metric-space, lem-standard-basis-of-f-n]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Vector-valued function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Vector-valued_function"
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "MAT237 Multivariable Calculus, Section 1.2: Limits and continuity"
      url: "https://www.math.toronto.edu/courses/mat237y1/20189/notes/Chapter1/S1.2.html"
    - title: "APEX Calculus, Section 12.2: Calculus and Vector-Valued Functions"
      url: "https://opentext.uleth.ca/apex-standard/sec_vvf_calc.html"
pipeline_run: null
---

## Statement

Let $m \in \mathbb{N}$ with $m \ge 1$, with vector-valued functions, their
components $f_i = \pi_i \circ f$, their limits and their continuity as in
[[def-vector-valued-functions-limits-and-continuity]].

1. **Continuity is componentwise.** Let $(X,d_X)$ be a metric space, $A \subseteq X$,
   $f : A \to \mathbb{R}^{m}$ and $a \in A$. Then $f$ is continuous at $a$ if and
   only if every component $f_i : A \to \mathbb{R}$ $(i<m)$ is continuous at $a$.
2. **Limits are componentwise.** Let $A \subseteq \mathbb{R}$, let $c$ be a limit
   point of $A$ ([[def-limit-point-r]]), let $f : A \to \mathbb{R}^{m}$ and let
   $L \in \mathbb{R}^{m}$. Then $\lim_{x\to c} f(x) = L$ if and only if
   $\lim_{x\to c} f_i(x) = L_i$ for every $i<m$ ([[def-function-limit]]).
3. **Algebra.** Let $(X,d_X)$, $A$, $a$ be as in clause 1, let
   $f, g : A \to \mathbb{R}^{m}$ be continuous at $a$ and let $\lambda \in \mathbb{R}$.
   Then $f + g$ and $\lambda f$ (defined pointwise) are continuous at $a$; the
   real-valued function $x \mapsto \langle f(x), g(x)\rangle$ is continuous at
   $a$ ([[def-euclidean-inner-product]]); and for every norm $N$ on
   $\mathbb{R}^{m}$ the real-valued function $x \mapsto N(f(x))$ is continuous at
   $a$ ([[def-norm-and-normed-space]]).

**Where $m \ge 1$ is spent.** The "if" direction of clauses 1 and 2 divides
$\varepsilon$ by $\iota(m)$, which requires $\iota(m) \ne 0$; and clause 3's last
part quotes a bound available only for $m \ge 1$. The "only if" directions hold
for every $m$ but say nothing at $m = 0$, there being no index $i < 0$.

## Facts & Assumptions

**Given:** A natural $m \ge 1$; a metric space $(X,d_X)$, a subset $A \subseteq X$, a point $a \in A$ and functions $f, g : A \to \mathbb{R}^{m}$; a real $\lambda$; and a real $\varepsilon > 0$.

[L1] Continuity and limits of vector-valued functions in the $\varepsilon$-$\delta$ form, the coordinate projections $\pi_i$, and $|y_i| \le \lVert y\rVert_2$ for $i<m$ ([[def-vector-valued-functions-limits-and-continuity]], [[def-metric-continuity]], [[def-metric-space]], [[lem-real-line-is-a-metric-space]]).

[L2] The comparison $\lVert y\rVert_2 \le \lVert y\rVert_1 = \sum_{i<m}|y_i|$, and $N(y) \le C\lVert y\rVert_1 \le C\sqrt{\iota(m)}\lVert y\rVert_2$ with $C := \max\{N(e_i) : i<m\} \ge 0$, together with $|N(y)-N(z)| \le N(y-z)$, all for $m \ge 1$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clauses 1, 2, 3, [[def-p-norms-on-rn]], [[lem-standard-basis-of-f-n]]).

[L3] The norm axioms for $\lVert\cdot\rVert_2$ ([[def-norm-and-normed-space]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]]), and $\lVert u-v\rVert_2 = d_2(u,v)$.

[L4] Cauchy-Schwarz: $|\langle u,v\rangle| \le \lVert u\rVert_2\lVert v\rVert_2$, together with bilinearity and symmetry of the inner product ([[thm-cauchy-schwarz-and-the-euclidean-norm]], [[def-euclidean-inner-product]]).

[L5] Laws of finite sums ([[lem-finite-sum-laws]], [[def-finite-sum]]): additivity, scaling, monotonicity, $\sum_{i<m}\mu = \iota(m)\mu$, a sum of nonnegative terms is nonnegative, and each single term is at most such a sum.

[L6] $\iota(m) > 0$ for $m \ge 1$, and $u>0$ gives $u^{-1}>0$ ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[L7] A nonempty finite set of reals has a minimum ([[lem-finite-set-has-max]], [[def-max-min]]); and a family of nonempty sets indexed by a natural number has a choice function, this being a theorem of ZF ([[lem-finite-choice]]), which is what licenses picking one $\delta_i$ for each $i<m$.

[L8] Absolute value ([[lem-of-abs-value]]): $|t| \ge 0$, $|st| = |s||t|$, and $|s+t| \le |s|+|t|$.

## Proof

**Proof technique:** direct.

1.1 For every $y \in \mathbb{R}^{m}$: $|y_i| \le \lVert y\rVert_2$ for each $i<m$, and $\lVert y\rVert_2 \le \sum_{i<m}|y_i|$. [L1, L2]

1.2 If $a_i < b_i$ for every $i<m$ and $m \ge 1$, then $\sum_{i<m}a_i < \sum_{i<m}b_i$: the list $i \mapsto b_i - a_i$ has positive terms, so its sum is at least its term at index $0$, hence positive, and additivity gives the strict inequality. [L5, L6]

1.3 For each $i<m$ the set of positive reals $\delta$ witnessing continuity of $f_i$ at $a$ for a given tolerance is nonempty whenever $f_i$ is continuous at $a$, so a choice function on the family indexed by $m$ produces $\delta_0,\dots,\delta_{m-1}$ simultaneously, with no choice principle used. [L7]

1.4 For $f+g$: given $\varepsilon > 0$, pick $\delta_1, \delta_2 > 0$ for the tolerance $\varepsilon/\iota(2)$ at $f$ and at $g$ and put $\delta := \min\{\delta_1,\delta_2\}$; then for $d_X(x,a) < \delta$, $\lVert (f+g)(x)-(f+g)(a)\rVert_2 = \lVert (f(x)-f(a)) + (g(x)-g(a))\rVert_2 \le \lVert f(x)-f(a)\rVert_2 + \lVert g(x)-g(a)\rVert_2 < \varepsilon$. [L1, L3, L6, L7]

1.5 For $\lambda f$: if $\lambda = 0$ then $\lambda f$ is constant and every $\delta$ serves; otherwise $|\lambda| > 0$, and a $\delta$ for the tolerance $\varepsilon/|\lambda|$ at $f$ gives $\lVert \lambda f(x) - \lambda f(a)\rVert_2 = |\lambda|\,\lVert f(x)-f(a)\rVert_2 < \varepsilon$. [L1, L3, L6, L8]

1.6 For $N \circ f$: by [L2], $|N(f(x)) - N(f(a))| \le N\bigl(f(x)-f(a)\bigr) \le C\sqrt{\iota(m)}\,\lVert f(x)-f(a)\rVert_2$; so a $\delta$ for the tolerance $\varepsilon/(C\sqrt{\iota(m)}+1)$ at $f$ serves for $N\circ f$. [L1, L2, L6]

1.7 For $\langle f,g\rangle$: first take $\delta_0 > 0$ with $\lVert g(x)-g(a)\rVert_2 < 1$ for $d_X(x,a) < \delta_0$, so that $\lVert g(x)\rVert_2 \le \lVert g(x)-g(a)\rVert_2 + \lVert g(a)\rVert_2 < B := \lVert g(a)\rVert_2 + 1$ there. [L1, L3]

2.1 Suppose $f$ is continuous at $a$ and fix $i<m$. Given $\varepsilon > 0$, take $\delta$ from the definition; for $x \in A$ with $d_X(x,a) < \delta$, step 1.1 gives $|f_i(x)-f_i(a)| \le \lVert f(x)-f(a)\rVert_2 < \varepsilon$. So $f_i$ is continuous at $a$. [step 1.1, L1]

2.2 Conversely suppose every $f_i$ is continuous at $a$. Given $\varepsilon > 0$, the real $\varepsilon/\iota(m)$ is positive; by step 1.3 choose $\delta_i > 0$ for each $i<m$ with $|f_i(x)-f_i(a)| < \varepsilon/\iota(m)$ whenever $x \in A$ and $d_X(x,a) < \delta_i$, and put $\delta := \min\{\delta_0,\dots,\delta_{m-1}\} > 0$. [step 1.3, L1, L6, L7]

2.3 By bilinearity, $\langle f(x),g(x)\rangle - \langle f(a),g(a)\rangle = \langle f(x)-f(a),\, g(x)\rangle + \langle f(a),\, g(x)-g(a)\rangle$, so Cauchy-Schwarz and step 1.7 give $\bigl|\langle f(x),g(x)\rangle - \langle f(a),g(a)\rangle\bigr| \le B\,\lVert f(x)-f(a)\rVert_2 + \lVert f(a)\rVert_2\,\lVert g(x)-g(a)\rVert_2$ for every $x \in A$ with $d_X(x,a) < \delta_0$. [step 1.7, L4, L8]

3.1 For $x \in A$ with $d_X(x,a) < \delta$: each $|f_i(x)-f_i(a)| < \varepsilon/\iota(m)$, so by steps 1.1 and 1.2, $\lVert f(x)-f(a)\rVert_2 \le \sum_{i<m}|f_i(x)-f_i(a)| < \sum_{i<m}\varepsilon/\iota(m) = \varepsilon$. Hence $f$ is continuous at $a$, and clause 1 is proved. [step 1.1, step 1.2, step 2.2, L5, L6]

3.2 Clause 2 is the same two estimates with $f(a)$ replaced by $L$, $f_i(a)$ by $L_i$, and the condition $d_X(x,a) < \delta$ by $0 < |x-c| < \delta$: step 1.1 gives $|f_i(x)-L_i| \le \lVert f(x)-L\rVert_2$ for the forward direction, and steps 1.1, 1.2 give $\lVert f(x)-L\rVert_2 \le \sum_{i<m}|f_i(x)-L_i| < \varepsilon$ for the converse, with $\delta$ the minimum of $m$ radii obtained as in step 2.2. [step 1.1, step 1.2, step 1.3, L1, L5, L6, L7]

3.3 Put $P := B + \lVert f(a)\rVert_2 + 1 > 0$ and take $\delta \le \delta_0$ positive with both $\lVert f(x)-f(a)\rVert_2 < \varepsilon/P$ and $\lVert g(x)-g(a)\rVert_2 < \varepsilon/P$ for $d_X(x,a) < \delta$; then step 2.3 bounds the difference by $(B + \lVert f(a)\rVert_2)\varepsilon/P < \varepsilon$, so $\langle f,g\rangle$ is continuous at $a$. [step 1.7, step 2.3, L1, L6, L7]

4.1 Steps 1.4, 1.5, 1.6 and 3.3 are clause 3, and with steps 3.1 and 3.2 all three clauses are proved. [step 3.1, step 3.2, step 1.4, step 1.5, step 1.6, step 3.3] ∎

## Remarks

- **Why the algebra is proved here rather than quoted.** The published [[thm-algebra-of-continuous-functions]] and [[thm-algebra-of-function-limits]] are stated for real-valued functions on a subset of $\mathbb{R}$, and the domain in clause 3 is a subset of an arbitrary metric space; quoting them for a metric domain would be a citation to an item for a claim it does not make. The estimates in steps 1.4 to 3.3 are the same ones, written out. When the domain **is** a subset of $\mathbb{R}$, clause 1 and [[lem-real-and-metric-notions-agree]] identify the two readings, and the published theorems may then be used on the components.

- **Clause 3 is what makes the mean value inequality work.** The auxiliary function $t \mapsto \langle u, f(t)\rangle$ of [[thm-mean-value-inequality]] is continuous exactly by the inner-product part of clause 3, applied with the constant function $u$.

- **Nothing here is a sequential argument, so no choice principle is used** beyond the finitely many simultaneous selections of steps 1.3, 2.2 and 3.3, which are covered by [[lem-finite-choice]], a theorem of ZF.
````
