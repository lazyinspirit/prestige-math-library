# Audit proof-refuter brief — Wave 13, A6

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30).** You are read-only and
> tool-less. Do not ask for shell or edit permission. Everything available to
> you is reproduced in the dispatch task.

You are **DeepSeek V4 Pro** at the API's maximum reasoning setting, serving as
an independent adversarial proof-refuter. Return evidence only; Audit-Alpha
alone adjudicates and edits.

## Binding triage

- **Non-negotiable:** mathematical accuracy, logical validity, correct citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes within 30 seconds; other non-fatal quirks;
  imperfection at the level of the letter.

Read the target's title, complete public statement, Facts & Assumptions, every
numbered proof/refutation/verification step, and Remarks. Try to falsify every
load-bearing inference. Before alleging that a cited dependency is too weak,
compare the exact current supplied dependency: domain, hypotheses, quantifiers,
direction, conclusion, boundary cases, and conventions. Check biconditionals,
existence/uniqueness, recursion/induction, limits, index shifts, empty/zero/one/
endpoint/degenerate cases, hidden division, hidden choice, and false Remarks.
For an `ai-generated` Statement or consumer, actively search for a
counterexample or a failure in the witness or cited generated premise. A false
public claim, invalid proof, missing necessary hypothesis, circularity, or
materially inaccurate load-bearing citation is fatal; a quickly closable gap is
nonfatal.

Return no more than 450 words, exactly in this shape:

```text
VERDICT: CLEAN | DEFECTS
```

For each defect:

```text
FINDING 1
  location: [exact section/fact/step]
  severity: fatal | nonfatal
  claim:    [exact assertion]
  evidence: [counterexample, invalid inference, or exact source mismatch]
```

Always end with:

```text
BOUNDARY: [specific boundary/counterexample checks and disposition]
SOURCES:  [confirm every supplied cited item used by the target was inspected]
CHECKED:  [confirm title, public claim, every numbered step, and Remarks]
```


---

# This dispatch

## Selection reasons

- Wave 13 ai-generated Statement seed
- top-20 manifest-edge consumer (9 outgoing relationships)
- Wave 13 generated-risk seed (cone 0)

## Target item — `rem-multidimensional-riemann-conventions-and-scope`

Normalized current SHA-256: `a53630972af11397bb3779617121a3befe30ceabffbe3ef3e73599a2d013262b`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: rem-multidimensional-riemann-conventions-and-scope
kind: remark
title: "Conventions and proved scope for the Riemann integral in $\\mathbb{R}^m$ and Jordan content"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-applicable
deps: [def-null-and-content-zero-in-rn, def-jordan-inner-and-outer-content, cor-one-dimensional-and-multidimensional-riemann-agree, cor-one-dimensional-null-and-content-zero-agree, thm-lebesgue-criterion-in-rn, thm-jordan-boundary-criterion, def-riemann-integral-over-a-jordan-set, thm-lipschitz-images-of-null-sets-in-rn-are-null, thm-graphs-of-continuous-functions-have-content-zero]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Jordan Measurable Sets"
      url: "https://www.jirka.org/ra/html/sec_jordansets.html"
    - title: "J. Lebl, Basic Analysis, Outer Measure and Null Sets"
      url: "https://www.jirka.org/ra/html/sec_outermeasure.html"
pipeline_run: null
---

## Remarks

Throughout, $m\ge1$. Rectangles and grids are axis-parallel. The
multidimensional Darboux and tagged integrals are defined on nondegenerate
rectangles, and integration over a Jordan set chooses a nondegenerate bounding
rectangle. Degenerate rectangles still have geometric volume and Jordan
content $0$, but no competing integral convention is introduced for them.
Nullity in [[def-null-and-content-zero-in-rn]] uses cube covers, while Jordan
outer content in [[def-jordan-inner-and-outer-content]] uses arbitrary finite
rectangle covers. The one-dimensional dictionaries are
[[cor-one-dimensional-and-multidimensional-riemann-agree]] and
[[cor-one-dimensional-null-and-content-zero-agree]].

The historical Lebesgue criterion [[thm-lebesgue-criterion-in-rn]] uses only cover-nullity and no Lebesgue measure or integral. The proved image results are the equal-dimensional Lipschitz theorem [[thm-lipschitz-images-of-null-sets-in-rn-are-null]] and the graph theorem [[thm-graphs-of-continuous-functions-have-content-zero]]. No general continuously differentiable image theorem is asserted.

Jordan measurability is related to null boundaries by [[thm-jordan-boundary-criterion]]. Integration over a Jordan set uses the zero-extension convention of [[def-riemann-integral-over-a-jordan-set]]; no integration over arbitrary bounded sets is defined here.
````

## Wave 13 provenance row

```json
{
  "id": "rem-multidimensional-riemann-conventions-and-scope",
  "statement": "ai-generated",
  "proof": "not-applicable",
  "evidence": "none",
  "urls": [],
  "rationale": "This is a positive AI-invention determination: the remark is an item-by-item account of this library's chosen rectangle, nullity, image-theorem, and integration scope. That repository-specific dependency ledger has no external mathematical statement counterpart; each mathematical scope assertion was checked against the named on-disk item.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

## Exact-current proof contract

No Wave 13 proof contract is required for this target.

## Generated audit-manifest relationships

```json
[
  {
    "source": "rem-multidimensional-riemann-conventions-and-scope",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "def-null-and-content-zero-in-rn",
    "declared_target": "def-null-and-content-zero-in-rn",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-multidimensional-riemann-conventions-and-scope",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "def-jordan-inner-and-outer-content",
    "declared_target": "def-jordan-inner-and-outer-content",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-multidimensional-riemann-conventions-and-scope",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "cor-one-dimensional-and-multidimensional-riemann-agree",
    "declared_target": "cor-one-dimensional-and-multidimensional-riemann-agree",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-multidimensional-riemann-conventions-and-scope",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "cor-one-dimensional-null-and-content-zero-agree",
    "declared_target": "cor-one-dimensional-null-and-content-zero-agree",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-multidimensional-riemann-conventions-and-scope",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "thm-lebesgue-criterion-in-rn",
    "declared_target": "thm-lebesgue-criterion-in-rn",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-multidimensional-riemann-conventions-and-scope",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "thm-jordan-boundary-criterion",
    "declared_target": "thm-jordan-boundary-criterion",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-multidimensional-riemann-conventions-and-scope",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "def-riemann-integral-over-a-jordan-set",
    "declared_target": "def-riemann-integral-over-a-jordan-set",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-multidimensional-riemann-conventions-and-scope",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "thm-lipschitz-images-of-null-sets-in-rn-are-null",
    "declared_target": "thm-lipschitz-images-of-null-sets-in-rn-are-null",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-multidimensional-riemann-conventions-and-scope",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "thm-graphs-of-continuous-functions-have-content-zero",
    "declared_target": "thm-graphs-of-continuous-functions-have-content-zero",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  }
]
```

## Relevant current generated-risk rows

```json
[
  {
    "id": "rem-multidimensional-riemann-conventions-and-scope",
    "file": "items/rem-multidimensional-riemann-conventions-and-scope.md",
    "source": "provenance",
    "cone_size": 0,
    "logical_consumers": [],
    "direct_citation_consumers": [],
    "disposition": {
      "status": "pending",
      "by": "",
      "notes": ""
    }
  }
]
```

## Full exact-current text of every cited or declared item (9)

### `cor-one-dimensional-and-multidimensional-riemann-agree`

````markdown
---
id: cor-one-dimensional-and-multidimensional-riemann-agree
kind: corollary
title: "At $m=1$, nondegenerate multidimensional rectangles, grid sums and the integral are exactly the published one-dimensional notions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-multidimensional-darboux-equals-riemann, def-multidimensional-rectangle-and-volume, def-multidimensional-grid-partition, def-multidimensional-darboux-sums, def-multidimensional-darboux-integral, def-multidimensional-tagged-partition-and-riemann-sum, def-darboux-integral, def-tagged-partition-and-riemann-sum, thm-darboux-equals-riemann, lem-metrics-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Riemann Integral in Several Variables"
      url: "https://www.jirka.org/ra/html/sec_rirect.html"
    - title: "J. Lebl, Basic Analysis, The Riemann-Lebesgue Criterion"
      url: "https://www.jirka.org/ra/html/sec_riemannlebesgue.html"
pipeline_run: null
---

## Statement

Under $\mathbb R^1\cong\mathbb R$, nondegenerate multidimensional rectangles,
grids, Darboux sums, tagged sums, integrability, and integral values are exactly
the published one-dimensional notions on intervals $[a,b]$ with $a<b$.

## Facts & Assumptions

**Given:** The standard isometry $\mathbb R^1\cong\mathbb R$ ([[lem-metrics-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]]).

[L1] The one-dimensional notions are [[def-darboux-integral]], [[def-tagged-partition-and-riemann-sum]], and [[thm-darboux-equals-riemann]].

[L2] A multidimensional rectangle is a finite coordinate product with product volume; a grid is a coordinatewise partition whose cells split that volume; and the Darboux and tagged notions are the cited cell sums and their extrema or mesh limits ([[def-multidimensional-rectangle-and-volume]], [[def-multidimensional-grid-partition]], [[def-multidimensional-darboux-sums]], [[def-multidimensional-darboux-integral]], [[def-multidimensional-tagged-partition-and-riemann-sum]], [[thm-multidimensional-darboux-equals-riemann]]).

## Proof

**Proof technique:** direct.

1.1 With one coordinate, nondegeneracy says $a<b$. A grid is one ordinary partition of $[a,b]$, its cells are its subintervals, and their volumes are their lengths. The iterated cell sum has one index and is the ordinary finite sum.  [given, L1, L2]

2.1 Therefore the lower, upper, and tagged sums agree term for term; taking extrema or mesh limits gives identical integrability classes and values.  [step 1.1, L1, L2] ∎
````

### `cor-one-dimensional-null-and-content-zero-agree`

````markdown
---
id: cor-one-dimensional-null-and-content-zero-agree
kind: corollary
title: "At $m=1$, cube-nullity and cube-content-zero are exactly the published interval-cover notions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-null-and-content-zero-in-rn, def-measure-zero-and-content-zero, def-multidimensional-rectangle-and-volume, lem-metrics-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Riemann Integral in Several Variables"
      url: "https://www.jirka.org/ra/html/sec_rirect.html"
    - title: "J. Lebl, Basic Analysis, The Riemann-Lebesgue Criterion"
      url: "https://www.jirka.org/ra/html/sec_riemannlebesgue.html"
    - title: "J. Lebl, Basic Analysis, Outer Measure and Null Sets"
      url: "https://www.jirka.org/ra/html/sec_outermeasure.html"
pipeline_run: null
---

## Statement

Under $\mathbb R^1\cong\mathbb R$, nullity and content zero from cube covers are exactly the published interval-cover notions.

## Facts & Assumptions

**Given:** The standard identification ([[lem-metrics-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]]).

[L1] A one-dimensional closed cube is a closed interval and its volume is its length ([[def-multidimensional-rectangle-and-volume]]).

[L2] The definitions are [[def-null-and-content-zero-in-rn]] and [[def-measure-zero-and-content-zero]].

## Proof

**Proof technique:** direct.

1.1 Under the identification, countable cube covers and their volume-series bounds are word for word the countable interval-cover conditions.  [given, L1, L2]

1.2 The same is true for finite covers and finite sums.  [given, L1, L2]

2.1 Hence both implications hold for nullity and for content zero.  [step 1.1, step 1.2] ∎
````

### `def-jordan-inner-and-outer-content`

````markdown
---
id: def-jordan-inner-and-outer-content
kind: definition
title: "Jordan inner and outer content and Jordan measurable bounded sets in $\\mathbb{R}^m$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-multidimensional-rectangle-and-volume, def-multidimensional-grid-partition, def-finite-sum, lem-finite-sum-laws, def-metric-bounded-diameter, def-metric-ball, lem-metrics-on-rn, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-complete-ordered-field, def-infimum, thm-infimum-property, lem-sup-unique]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Riemann Integral in Several Variables"
      url: "https://www.jirka.org/ra/html/sec_rirect.html"
    - title: "J. Lebl, Basic Analysis, The Riemann-Lebesgue Criterion"
      url: "https://www.jirka.org/ra/html/sec_riemannlebesgue.html"
    - title: "J. Lebl, Basic Analysis, Jordan Measurable Sets"
      url: "https://www.jirka.org/ra/html/sec_jordansets.html"
pipeline_run: null
---

## Definition

For bounded $E\subseteq\mathbb R^m$, in the metric sense of [[def-metric-bounded-diameter]], its **Jordan outer content** is the infimum of $\sum_{r<q}\operatorname{vol}(R_r)$ over finite axis-parallel rectangle covers of $E$. Its **Jordan inner content** is the supremum of the same sums over finite families of rectangles contained in $E$ whose interiors are pairwise disjoint.

Metric boundedness always supplies a nondegenerate bounding rectangle. For
nonempty $E$, choose $x_0\in\mathbb R^m$ and $r>0$ with
$E\subseteq B(x_0,r)$. Since
$|x_j-(x_0)_j|\le d_\infty(x,x_0)\le d_2(x,x_0)<r$ for every coordinate
([[lem-metrics-on-rn]], [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clause 3, [[def-metric-ball]]), the nondegenerate box
$\prod_{j<m}[(x_0)_j-r,(x_0)_j+r]$ contains $E$. The empty set lies in
any fixed nondegenerate rectangle.

Thus the outer family is nonempty and the same bounding rectangle bounds the
inner sums; the empty family gives inner sum $0$. Refining all listed
endpoints into one grid and splitting the nested finite sums shows every
inscribed sum is at most every covering sum
([[def-multidimensional-grid-partition]], [[lem-finite-sum-laws]]).
Completeness therefore supplies finite real extrema
([[def-complete-ordered-field]], [[thm-infimum-property]], [[def-infimum]],
[[lem-sup-unique]]).

The set is **Jordan measurable** when the contents agree, and their common value is its **Jordan content**. The empty set and every degenerate rectangle have content $0$.
````

### `def-null-and-content-zero-in-rn`

````markdown
---
id: def-null-and-content-zero-in-rn
kind: definition
title: "Measure zero and content zero in $\\mathbb{R}^m$ by countable and finite cube covers"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-multidimensional-rectangle-and-volume, def-series, thm-nonnegative-series-bounded-partial-sums, def-finite-sum, lem-finite-sum-laws, def-countable, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Riemann Integral in Several Variables"
      url: "https://www.jirka.org/ra/html/sec_rirect.html"
    - title: "J. Lebl, Basic Analysis, The Riemann-Lebesgue Criterion"
      url: "https://www.jirka.org/ra/html/sec_riemannlebesgue.html"
    - title: "J. Lebl, Basic Analysis, Outer Measure and Null Sets"
      url: "https://www.jirka.org/ra/html/sec_outermeasure.html"
pipeline_run: null
---

## Definition

Fix $m\ge1$. A **closed cube** is a rectangle $\prod_{j<m}[a_j,a_j+\ell]$ with $\ell\ge0$; its volume is $\ell^m$. A set $E\subseteq\mathbb R^m$ is **null** when, for every $\varepsilon>0$, it is covered by a sequence of closed cubes whose nonnegative volume series converges with sum at most $\varepsilon$. It has **content zero** when such a cover can be finite.

The series and finite sums are [[def-series]] and [[def-finite-sum]], and their nonnegative bounds use [[thm-nonnegative-series-bounded-partial-sums]] and [[lem-finite-sum-laws]]. Both properties pass to subsets. Padding a finite cover with degenerate zero-volume cubes proves that content zero implies null. This terminology defines only cover-nullity; it does not define a measure on arbitrary sets.
````

### `def-riemann-integral-over-a-jordan-set`

````markdown
---
id: def-riemann-integral-over-a-jordan-set
kind: definition
title: "The Riemann integral of a bounded function over a bounded Jordan measurable set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-jordan-inner-and-outer-content, thm-jordan-content-and-indicator-integrability, def-multidimensional-darboux-integral, def-multidimensional-rectangle-and-volume, def-metric-bounded-diameter, def-bounded-set]
justified_by: [lem-jordan-set-integral-well-defined]
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Jordan Measurable Sets"
      url: "https://www.jirka.org/ra/html/sec_jordansets.html"
    - title: "J. Lebl, Basic Analysis, Outer Measure and Null Sets"
      url: "https://www.jirka.org/ra/html/sec_outermeasure.html"
pipeline_run: null
---

## Definition

Let $E\subseteq\mathbb R^m$ be bounded in the metric sense of
[[def-metric-bounded-diameter]] and Jordan measurable, and let
$f:E\to\mathbb R$ be bounded. Choose a nondegenerate rectangle
$Q\supseteq E$, whose existence follows from
[[def-jordan-inner-and-outer-content]], and define the zero extension
$$\widetilde f_Q(x):=\begin{cases}f(x),&x\in E,\\0,&x\in Q\setminus E.\end{cases}$$
The function $f$ is **Riemann integrable over $E$** when $\widetilde f_Q$ is integrable over $Q$, and then
$$\int_Ef:=\int_Q\widetilde f_Q.$$
Independence of the bounding rectangle, for both integrability and value, is proved in [[lem-jordan-set-integral-well-defined]] and recorded as the definition's forward justification. For $f=1$, the zero extension is $1_E$, so [[thm-jordan-content-and-indicator-integrability]] gives $\int_E1=\operatorname{cont}(E)$.
````

### `thm-graphs-of-continuous-functions-have-content-zero`

````markdown
---
id: thm-graphs-of-continuous-functions-have-content-zero
kind: theorem
title: "The graph of a continuous function on a closed nondegenerate rectangle in $\\mathbb{R}^m$ has content zero in $\\mathbb{R}^{m+1}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-null-and-content-zero-in-rn, def-multidimensional-grid-partition, def-multidimensional-rectangle-and-volume, thm-heine-borel-rn, thm-heine-cantor-metric, def-metric-continuity, lem-p-norms-are-norms-and-induce-the-published-metrics, lem-integer-part, def-canonical-natural, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Jordan Measurable Sets"
      url: "https://www.jirka.org/ra/html/sec_jordansets.html"
    - title: "J. Lebl, Basic Analysis, Outer Measure and Null Sets"
      url: "https://www.jirka.org/ra/html/sec_outermeasure.html"
    - title: "A. Cañez, multivariable calculus notes"
      url: "https://www.math.cmu.edu/~gautam/sj/teaching/2017-18/268-multid-calc/pdfs/canez-calculus.pdf"
pipeline_run: null
---

## Statement

Let $m\ge1$, let $Q\subseteq\mathbb R^m$ be a closed nondegenerate rectangle, and let $f:Q\to\mathbb R$ be continuous. Its graph has content zero in $\mathbb R^{m+1}$.

## Facts & Assumptions

**Given:** $Q,f$ as stated.

[L1] $Q$ is compact and $f$ uniformly continuous ([[thm-heine-borel-rn]], [[thm-heine-cantor-metric]], [[def-metric-continuity]]).

[L2] Grid cells and cube volumes are [[def-multidimensional-grid-partition]] and [[def-multidimensional-rectangle-and-volume]].

## Proof

**Proof technique:** constructive.

1.1 Given $\varepsilon>0$, choose a uniform coordinate grid with cell widths at most $\delta$, where uniform continuity makes the oscillation of $f$ on each cell below a vertical amount $\eta$. Since $Q$ is nondegenerate, the grid may be chosen so that the number $N_\delta$ of cells satisfies $N_\delta\delta^m\le C_Q$ for a constant depending only on $Q$. [L1, L2, given, choose, construct]

2.1 One horizontal cube footprint of side $\delta$ covers each domain cell. Above it, stack $(m+1)$-cubes of side $\delta$ across the graph's vertical range. [[lem-integer-part]] bounds their number by $\eta/\delta+2$, so all stacks together have volume at most $N_\delta(\eta\delta^m+2\delta^{m+1})\le C_Q(\eta+2\delta)$. [step 1.1, L2, given]

3.1 Summing over the finitely many domain cells gives total covering volume at most a rectangle-dependent constant times $\eta+\delta$. Choose $\eta$ and then $\delta$ to make this below $\varepsilon$.   [step 2.1, given, choose]

4.1 This finite cube cover proves content zero in the sense of [[def-null-and-content-zero-in-rn]].  [step 3.1, discharge-construct] ∎
````

### `thm-jordan-boundary-criterion`

````markdown
---
id: thm-jordan-boundary-criterion
kind: theorem
title: "A bounded set in $\\mathbb{R}^m$ is Jordan measurable iff its boundary is null, equivalently of content zero"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-jordan-content-and-indicator-integrability, thm-lebesgue-criterion-in-rn, def-metric-interior-closure-boundary, thm-metric-closure-characterisation, def-metric-topology, def-metric-bounded-diameter, thm-heine-borel-rn, lem-compact-null-iff-content-zero-in-rn, def-null-and-content-zero-in-rn, def-jordan-inner-and-outer-content]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Jordan Measurable Sets"
      url: "https://www.jirka.org/ra/html/sec_jordansets.html"
    - title: "J. Lebl, Basic Analysis, Outer Measure and Null Sets"
      url: "https://www.jirka.org/ra/html/sec_outermeasure.html"
pipeline_run: null
---

## Statement

A metric-bounded set $E\subseteq\mathbb R^m$ is Jordan measurable if and only
if its boundary $\partial E$ is null, equivalently has content zero.

## Facts & Assumptions

**Given:** Metric-bounded $E$ in the sense of [[def-metric-bounded-diameter]].

[L1] If $Q$ is a nondegenerate rectangle with $\overline E\subseteq\operatorname{int}Q$, then the relative-domain indicator $1_E:Q\to\mathbb R$ is discontinuous exactly at the ambient boundary $\partial E$. At a boundary point every sufficiently small ambient ball lies in $Q$ and meets both $E$ and its ambient complement, while away from the boundary the indicator is locally constant ([[def-metric-interior-closure-boundary]]).

[L2] Indicator integrability is Jordan measurability ([[thm-jordan-content-and-indicator-integrability]]), and integrability is equivalent to a null discontinuity set ([[thm-lebesgue-criterion-in-rn]]).

[L3] The boundary is closed: it is the intersection of the closed set $\overline E$ with the complement of the open set $\operatorname{int}E$ ([[def-metric-interior-closure-boundary]], [[thm-metric-closure-characterisation]], [[def-metric-topology]]). By [[def-jordan-inner-and-outer-content]], metric boundedness places $E$ in a closed bounding rectangle $Q$. Since $Q$ is closed and contains $E$, the smallest-closed-superset property gives $\partial E\subseteq\overline E\subseteq Q$. Thus $\partial E$ is closed and bounded, hence compact by [[thm-heine-borel-rn]], and compact nullity is equivalent to content zero ([[lem-compact-null-iff-content-zero-in-rn]]).

## Proof

**Proof technique:** direct.

1.1 By [L3], choose a closed bounding rectangle $Q_0$ for $E$ and enlarge every coordinate interval by a fixed positive margin to obtain a nondegenerate rectangle $Q$ with $\overline E\subseteq Q_0\subseteq\operatorname{int}Q$. By [L1] and [L2], $E$ is Jordan measurable exactly when $\partial E$ is null. [L1, L2, L3, given, choose]

1.2 By [L3], nullity of this compact boundary is equivalent to content zero.   [L3, given]

2.1 Combining the equivalences proves the criterion.   [step 1.1, step 1.2, given] ∎
````

### `thm-lebesgue-criterion-in-rn`

````markdown
---
id: thm-lebesgue-criterion-in-rn
kind: theorem
title: "Lebesgue's criterion in $\\mathbb{R}^m$: a bounded function on a closed nondegenerate rectangle is Riemann integrable iff its discontinuity set is null"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-multidimensional-riemann-criterion, def-multidimensional-darboux-sums, def-multidimensional-darboux-integral, def-multidimensional-grid-partition, def-multidimensional-rectangle-and-volume, def-null-and-content-zero-in-rn, lem-null-sets-in-rn-closed-under-subsets-and-countable-unions, lem-compact-null-iff-content-zero-in-rn, def-oscillation-in-rn, lem-oscillation-characterisation-in-rn, cor-archimedean-reciprocal, lem-finite-cube-covers-admit-grid-control, thm-heine-borel-rn, lem-closed-subset-of-a-compact-space-is-compact, def-metric-compactness, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-countable-choice, lem-integer-part, thm-algebra-of-continuous-functions, def-continuity-real, def-finite-sum, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Riemann Integral in Several Variables"
      url: "https://www.jirka.org/ra/html/sec_rirect.html"
    - title: "J. Lebl, Basic Analysis, The Riemann-Lebesgue Criterion"
      url: "https://www.jirka.org/ra/html/sec_riemannlebesgue.html"
pipeline_run: null
---

## Statement

A bounded real function on a closed nondegenerate rectangle in $\mathbb R^m$, $m\ge1$, is Riemann integrable if and only if its discontinuity set is null.

## Facts & Assumptions

**Given:** A closed nondegenerate rectangle $Q\subseteq\mathbb R^m$, $m\ge1$, and a bounded $f:Q\to\mathbb R$, with $|f|\le B$.

[L1] Continuity at $x$ is equivalent to $\omega_f(x)=0$, and each set $\{x:\omega_f(x)\ge\varepsilon\}$ is closed for $\varepsilon>0$ ([[def-oscillation-in-rn]], [[lem-oscillation-characterisation-in-rn]]).

[L2] The rectangle is compact ([[thm-heine-borel-rn]]), its relatively closed subsets are compact ([[lem-closed-subset-of-a-compact-space-is-compact]]), and compact null sets have content zero ([[lem-compact-null-iff-content-zero-in-rn]]).

[L3] Finite cube covers admit grid control ([[lem-finite-cube-covers-admit-grid-control]]), and small Darboux gaps characterize integrability ([[thm-multidimensional-riemann-criterion]]).

[L4] Compactness supplies finite subcovers ([[def-metric-compactness]]), and the Euclidean and sup norms satisfy fixed dimension-dependent comparisons ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]).

[L5] If $u\ge0$, the integer-part theorem supplies a natural $N\ge1$ with $u\le N\le u+1$ after treating the integral and zero cases separately ([[lem-integer-part]]). Rectangle volume is the product of the side lengths ([[def-multidimensional-rectangle-and-volume]]); finite sums and products obey [[def-finite-sum]] and [[lem-finite-sum-laws]]; and every real polynomial is continuous ([[thm-algebra-of-continuous-functions]], [[def-continuity-real]]).

[L6] For every positive real $u$ there is a natural $r\ge1$ with $1/r<u$ ([[cor-archimedean-reciprocal]]).

## Proof

**Proof technique:** direct.

1.1 **Finite rectangle-to-cube claim.** Let $R_s=\prod_{j<m}[a_{s,j},b_{s,j}]$, for $s$ in a finite index set, and let $\gamma>0$. Put $\ell_{s,j}=b_{s,j}-a_{s,j}$. For every $\delta>0$, [L5] supplies naturals $N_{s,j}\ge1$ with $\ell_{s,j}\le\iota(N_{s,j})\delta\le\ell_{s,j}+\delta$. Partition the interval from $a_{s,j}$ into $N_{s,j}$ consecutive intervals of length $\delta$, allowing the last one to extend past $b_{s,j}$. Their Cartesian products are closed cubes of side $\delta$ covering $R_s$, and their total volume is $$\prod_{j<m}\iota(N_{s,j})\delta \le \prod_{j<m}(\ell_{s,j}+\delta).$$ The finite sum of the expressions on the right is a polynomial in $\delta$ whose value at $0$ is $\sum_s\operatorname{vol}(R_s)$. Continuity at $0$ therefore permits a common $\delta>0$ for which the resulting finite cube cover of $\bigcup_sR_s$ has total volume below $\sum_s\operatorname{vol}(R_s)+\gamma$. This includes degenerate rectangles: every zero side contributes a factor $\delta$, so its covering volume tends to $0$.  [L5, construct]

1.2 Suppose the discontinuity set $D$ is null. Given $\varepsilon>0$, choose $\alpha>0$ with $\alpha\operatorname{vol}Q<\varepsilon/2$, and put $S_\alpha=\{x:\omega_f(x)\ge\alpha\}$. Then $S_\alpha\subseteq D$ is relatively closed in $Q$, hence compact, and is null.  [L1, L2, choose]

1.3 Conversely, suppose $f$ is integrable. Fix $r\ge1$ and $\eta>0$, and choose a grid $P$ whose Darboux gap is below $\eta/(2r)$. Let $H_P\subseteq Q$ be the finite union of the pieces of the coordinate hyperplanes forming cell boundaries. Every point of $S_{1/r}\setminus H_P$ lies in the interior of a unique cell whose oscillation is at least $1/r$. Thus the total volume of these high-oscillation cells is below $\eta/2$.  [L1, L3, choose, algebra]

2.1 Cover $S_\alpha$ by finitely many cubes and enlarge them so that their interiors still cover $S_\alpha$, keeping their total volume below $\varepsilon/(8(B+1))$. Apply [L3] to the union of the enlarged cubes, with the remaining volume budget, to obtain a grid $P_0$ whose cells meeting that union have total volume below $\varepsilon/(4(B+1))$.  [step 1.2, L2, L3, choose]

2.2 The set $S_{1/r}$ is contained in the union of the high-oscillation cells and the finitely many pieces forming $H_P$. Each hyperplane piece is a degenerate rectangle of volume $0$.  [step 1.3, L5]

3.1 Let $O$ be the union of those cube interiors and $K=Q\setminus O$. The set $K$ is relatively closed in compact $Q$, hence compact by [L2]. For every $z\in K$, $\omega_f(z)<\alpha$, so some Euclidean ball about $z$ has oscillation below $\alpha$. Shrink these balls by a factor of two; compactness gives a finite subcover of $K$.  [step 2.1, L1, L2, L4, choose]

3.2 Apply the finite rectangle-to-cube claim of step 1.1 to that finite family, with $\gamma=\eta/2$. Its rectangle-volume sum is below $\eta/2$, so $S_{1/r}$ has a finite cube cover of total volume below $\eta$. Since $\eta>0$ was arbitrary, $S_{1/r}$ has content zero and is null.  [step 1.1, step 1.3, step 2.2, L2]

4.1 Refine $P_0$ to mesh small enough that the fixed norm comparison in [L4] makes every cell meeting a shrunken ball lie inside the corresponding original ball. Every cell not meeting $O$ contains a point of $K$, hence is contained in one of those original oscillation balls; refinement does not increase the total volume of cells meeting $O$.  [step 3.1, L3, L4]

5.1 The Darboux gap is therefore below $\alpha\operatorname{vol}Q+2B\,\varepsilon/(4(B+1))<\varepsilon$. By [L3], $f$ is integrable.  [step 1.2, step 2.1, step 4.1, L3, algebra]

6.1 By [L1] and [L6], $D=\bigcup_{r\ge1}S_{1/r}$. Countable-union closure makes $D$ null, with countable choice used exactly through [[lem-null-sets-in-rn-closed-under-subsets-and-countable-unions]] and [[def-countable-choice]]. Together with step 5.1, this proves both directions using cover-nullity only. [step 5.1, step 3.2, L1, L6] ∎
````

### `thm-lipschitz-images-of-null-sets-in-rn-are-null`

````markdown
---
id: thm-lipschitz-images-of-null-sets-in-rn-are-null
kind: theorem
title: "A Lipschitz map $\\mathbb{R}^m\\to\\mathbb{R}^m$ sends null sets to null sets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-null-and-content-zero-in-rn, def-lipschitz-holder-contraction, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-multidimensional-rectangle-and-volume, def-integer-power, def-canonical-natural, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Jordan Measurable Sets"
      url: "https://www.jirka.org/ra/html/sec_jordansets.html"
    - title: "J. Lebl, Basic Analysis, Outer Measure and Null Sets"
      url: "https://www.jirka.org/ra/html/sec_outermeasure.html"
pipeline_run: null
---

## Statement

If $T:\mathbb R^m\to\mathbb R^m$ is Lipschitz and $E$ is null, then $T[E]$ is null.

## Facts & Assumptions

**Given:** A Lipschitz constant $L\ge0$ and null $E$.

[L1] Lipschitz means $\|T(x)-T(y)\|_2\le L\|x-y\|_2$ ([[def-lipschitz-holder-contraction]]).

[L2] Norm comparisons on $\mathbb R^m$ bound Euclidean diameter of a side-$\ell$ cube by a fixed dimension multiple of $\ell$ ([[def-p-norms-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]], [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]).

## Proof

**Proof technique:** cases.

1.1 If $L=0$, $T[E]$ is empty or a singleton, covered by cubes of arbitrarily small side.   [assume-case zero, L1, given]

1.2 Suppose $L>0$. The image of a side-$\ell$ cube lies in a cube of side $C_mL\ell$, where $C_m$ is the fixed norm-comparison factor. Its volume is $(C_mL)^m\ell^m$.   [assume-case positive, L1, L2, given]

2.1 Given an output budget $\varepsilon$, cover $E$ by cubes with total volume below $\varepsilon/(C_mL)^m$. Replacing each by its image-containing cube gives a cover of $T[E]$ with total volume below $\varepsilon$.   [step 1.2, given]

3.1 Both cases prove nullity. Equal domain and codomain dimensions are used in the volume scaling.  [step 1.1, step 2.1, cases-exhaustive] ∎
````

