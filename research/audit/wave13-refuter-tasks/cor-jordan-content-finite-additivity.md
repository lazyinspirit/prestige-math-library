## Selection reasons

- critical risk (11): 5 declared dependencies; 4 cited facts; 6 numbered proof steps; boundary-sensitive language; induction, recursion, or minimality; analytic limiting/completeness language

## Target item — `cor-jordan-content-finite-additivity`

Normalized current SHA-256: `cb9ebfda43a6f0a2dadf3b3b1b1bfef37c3e78b0fc7647cfc5edbd85ae12792a`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: cor-jordan-content-finite-additivity
kind: corollary
title: "Jordan content is finitely additive when the overlap has content zero"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-jordan-content-and-indicator-integrability, thm-multidimensional-integral-properties, def-jordan-inner-and-outer-content, def-null-and-content-zero-in-rn, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
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

If bounded Jordan measurable sets $E,F$ have $E\cap F$ of content zero, then
$$\operatorname{cont}(E\cup F)=\operatorname{cont}(E)+\operatorname{cont}(F).$$
In particular Jordan content is additive on disjoint finite families.

## Facts & Assumptions

**Given:** $E,F$ as stated.

[L1] Indicator integrals equal Jordan content ([[thm-jordan-content-and-indicator-integrability]]).

[L2] The integral is linear ([[thm-multidimensional-integral-properties]]).

[L3] Content zero means that for every positive $\varepsilon$ there is a finite cube cover of total volume below $\varepsilon$ ([[def-null-and-content-zero-in-rn]]); Jordan inner and outer content are the inscribed supremum and covering infimum ([[def-jordan-inner-and-outer-content]]).

## Proof

**Proof technique:** induction.

1.1 Pointwise, $1_{E\cup F}=1_E+1_F-1_{E\cap F}$. Cube-cover content zero makes the Jordan outer content of $E\cap F$ at most every positive $\varepsilon$, hence zero; its nonnegative inner content is no larger, so it too is zero. Thus $E\cap F$ is Jordan measurable with content zero, and [L1] gives $\int1_{E\cap F}=0$.   [L1, L3, given]

1.2 The finite-family formula is immediate for a family of length one. [base]

1.3 Assume it holds for a disjoint family of length $r$. [ih]

2.1 Integrate and apply [L2] to obtain the two-set formula. [step 1.1, L2, given]

3.1 Apply the two-set formula to the union of that family and the next set. Their intersection is empty, so this adds the next content and proves the formula at length $r+1$. [step 2.1, step 1.3]

4.1 Hence Jordan content is additive on every finite disjoint family. [step 1.2, step 3.1, discharge-induction] ∎
````

## Wave 13 provenance row

```json
{
  "id": "cor-jordan-content-finite-additivity",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://www.jirka.org/ra/html/sec_jordansets.html"
  ],
  "rationale": "The source states finite additivity of Jordan volume. The item strengthens the two-set hypothesis to allow content-zero overlap and derives the disjoint-family clause by induction.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

## Exact-current proof contract

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "thm-jordan-content-and-indicator-integrability",
      "source_section": "Statement",
      "quote": "A metric-bounded set $E\\subseteq\\mathbb R^m$ is Jordan measurable if and only\nif its indicator $1_E$ is Riemann integrable on a fixed nondegenerate bounding\nrectangle $Q$. In that case\n$$\\int_Q1_E=\\operatorname{cont}(E).$$",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-multidimensional-integral-properties",
      "source_section": "Statement",
      "quote": "Let $Q=\\prod_{j<m}[a_j,b_j]$ be nondegenerate. For integrable\n$f,g:Q\\to\\mathbb R$ and scalars $\\alpha,\\beta$, the function\n$\\alpha f+\\beta g$ is integrable and its integral is\n$\\alpha\\int_Qf+\\beta\\int_Qg$. If $f\\le g$, then\n$\\int_Qf\\le\\int_Qg$. Also $|f|$ is integrable and\n$|\\int_Qf|\\le\\int_Q|f|$. If $a_r<c<b_r$, cutting $Q$ at the coordinate\nhyperplane $x_r=c$ gives two nondegenerate subrectangles; integrability on\n$Q$ is equivalent to integrability on both restrictions, and their integral\nvalues add to the integral over $Q$.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-null-and-content-zero-in-rn",
      "source_section": "Definition",
      "quote": "Fix $m\\ge1$. A **closed cube** is a rectangle $\\prod_{j<m}[a_j,a_j+\\ell]$ with $\\ell\\ge0$; its volume is $\\ell^m$. A set $E\\subseteq\\mathbb R^m$ is **null** when, for every $\\varepsilon>0$, it is covered by a sequence of closed cubes whose nonnegative volume series converges with sum at most $\\varepsilon$. It has **content zero** when such a cover can be finite.\n\nThe series and finite sums are [[def-series]] and [[def-finite-sum]], and their nonnegative bounds use [[thm-nonnegative-series-bounded-partial-sums]] and [[lem-finite-sum-laws]]. Both properties pass to subsets. Padding a finite cover with degenerate zero-volume cubes proves that content zero implies null. This terminology defines only cover-nullity; it does not define a measure on arbitrary sets.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-jordan-inner-and-outer-content",
      "source_section": "Definition",
      "quote": "For bounded $E\\subseteq\\mathbb R^m$, in the metric sense of [[def-metric-bounded-diameter]], its **Jordan outer content** is the infimum of $\\sum_{r<q}\\operatorname{vol}(R_r)$ over finite axis-parallel rectangle covers of $E$. Its **Jordan inner content** is the supremum of the same sums over finite families of rectangles contained in $E$ whose interiors are pairwise disjoint.\n\nMetric boundedness always supplies a nondegenerate bounding rectangle. For\nnonempty $E$, choose $x_0\\in\\mathbb R^m$ and $r>0$ with\n$E\\subseteq B(x_0,r)$. Since\n$|x_j-(x_0)_j|\\le d_\\infty(x,x_0)\\le d_2(x,x_0)<r$ for every coordinate\n([[lem-metrics-on-rn]], [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clause 3, [[def-metric-ball]]), the nondegenerate box\n$\\prod_{j<m}[(x_0)_j-r,(x_0)_j+r]$ contains $E$. The empty set lies in\nany fixed nondegenerate rectangle.\n\nThus the outer family is nonempty and the same bounding rectangle bounds the\ninner sums; the empty family gives inner sum $0$. Refining all listed\nendpoints into one grid and splitting the nested finite sums shows every\ninscribed sum is at most every covering sum\n([[def-multidimensional-grid-partition]], [[lem-finite-sum-laws]]).\nCompleteness therefore supplies finite real extrema\n([[def-complete-ordered-field]], [[thm-infimum-property]], [[def-infimum]],\n[[lem-sup-unique]]).\n\nThe set is **Jordan measurable** when the contents agree, and their common value is its **Jordan content**. The empty set and every degenerate rectangle have content $0$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Pointwise, $1_{E\\cup F}=1_E+1_F-1_{E\\cap F}$. Cube-cover content zero makes the Jordan outer content of $E\\cap F$ at most every positive $\\varepsilon$, hence zero; its nonnegative inner content is no larger, so it too is zero. Thus $E\\cap F$ is Jordan measurable with content zero, and [L1] gives $\\int1_{E\\cap F}=0$.  ",
      "step": "1.1",
      "inputs": [
        "L1",
        "L3"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "The finite-family formula is immediate for a family of length one.",
      "step": "1.2",
      "inputs": [
        "base"
      ]
    },
    {
      "id": "step-1.3",
      "claim": "Assume it holds for a disjoint family of length $r$.",
      "step": "1.3",
      "inputs": [
        "ih"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Integrate and apply [L2] to obtain the two-set formula.",
      "step": "2.1",
      "inputs": [
        "L2",
        "step 1.1"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "Apply the two-set formula to the union of that family and the next set. Their intersection is empty, so this adds the next content and proves the formula at length $r+1$.",
      "step": "3.1",
      "inputs": [
        "step 2.1",
        "step 1.3"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "Hence Jordan content is additive on every finite disjoint family.",
      "step": "4.1",
      "inputs": [
        "step 1.2",
        "step 3.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "step 3.1: the proof explicitly disposes of the empty or zero-length family case."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 1.1: the proof explicitly handles the zero-valued parameter or zero object used by the statement."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "cor-jordan-content-finite-additivity: the assertion has no separate unit-size case; its quantified argument applies without a one-case split: If bounded Jordan measurable sets $E,F$ have $E\\cap F$ of content zero, then $$\\operatorname{cont}(E\\cup F)=\\operatorname{cont}(E)+\\operatorname{cont}(F).$$ In particular Jordan content is additive on disjoint finite fam"
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "cor-jordan-content-finite-additivity: no geometric or algebraic degeneracy changes the asserted conclusion; checked against the Statement: If bounded Jordan measurable sets $E,F$ have $E\\cap F$ of content zero, then $$\\operatorname{cont}(E\\cup F)=\\operatorname{cont}(E)+\\operatorname{cont}(F).$$ In particular Jordan content is additive on disjoint finite fam"
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "cor-jordan-content-finite-additivity: no interval or radial endpoint is part of the conclusion; checked against the Statement: If bounded Jordan measurable sets $E,F$ have $E\\cap F$ of content zero, then $$\\operatorname{cont}(E\\cup F)=\\operatorname{cont}(E)+\\operatorname{cont}(F).$$ In particular Jordan content is additive on disjoint finite fam"
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "cor-jordan-content-finite-additivity: the proof uses only given objects, formulas, or universal instantiation and makes no choice from a possibly empty family; see Statement: If bounded Jordan measurable sets $E,F$ have $E\\cap F$ of content zero, then $$\\operatorname{cont}(E\\cup F)=\\operatorname{cont}(E)+\\operatorname{cont}(F).$$ In particular Jordan content is additive on disjoint finite fam"
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "cor-jordan-content-finite-additivity: the Statement is not an equivalence, so there is no forward implication obligation: If bounded Jordan measurable sets $E,F$ have $E\\cap F$ of content zero, then $$\\operatorname{cont}(E\\cup F)=\\operatorname{cont}(E)+\\operatorname{cont}(F).$$ In particular Jordan content is additive on disjoint finite fam"
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "cor-jordan-content-finite-additivity: the Statement is not an equivalence, so there is no reverse implication obligation: If bounded Jordan measurable sets $E,F$ have $E\\cap F$ of content zero, then $$\\operatorname{cont}(E\\cup F)=\\operatorname{cont}(E)+\\operatorname{cont}(F).$$ In particular Jordan content is additive on disjoint finite fam"
    }
  ]
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "cor-jordan-content-finite-additivity",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "thm-jordan-content-and-indicator-integrability",
    "declared_target": "thm-jordan-content-and-indicator-integrability",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-jordan-content-finite-additivity",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "thm-multidimensional-integral-properties",
    "declared_target": "thm-multidimensional-integral-properties",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-jordan-content-finite-additivity",
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
    "source": "cor-jordan-content-finite-additivity",
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
    "source": "cor-jordan-content-finite-additivity",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "lem-finite-sum-laws",
    "declared_target": "lem-finite-sum-laws",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Relevant current generated-risk rows

```json
[]
```

## Full exact-current text of every cited or declared item (5)

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

### `lem-finite-sum-laws`

````markdown
---
id: lem-finite-sum-laws
kind: lemma
title: "Laws of finite sums and finite products"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-finite-sum, thm-induction-principle, def-ordered-field, def-field, lem-of-add-order, lem-of-sign-rules, lem-of-zero-mult, cor-of-one-positive, lem-of-q-embeds, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "J. Aspnes, Summation Notation"
      url: "https://www.cs.yale.edu/homes/aspnes/pinewiki/SummationNotation.html"
    - title: "M. Fochler, Recursive sums, products, and powers"
      url: "https://people.math.binghamton.edu/mfochler/bu-mfx/bu-math-arv/math-330-arv/math-330-2019-08/html/lec-notes/bu-ln-330-m330-solns-2019-12-03.pdf"
    - title: "T. Tao, Analysis I, 3rd ed., §7.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Telescoping series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Telescoping_series"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $a, b, c : \mathbb{N} \to \mathbb{R}$ be sequences of reals, let
$\lambda \in \mathbb{R}$, and let $m, n \in \mathbb{N}$, with finite sums and
finite products as in [[def-finite-sum]]. Then:

1. **Additivity.** $\displaystyle\sum_{k<n}(a_k + b_k) = \sum_{k<n} a_k + \sum_{k<n} b_k$.
2. **Scaling.** $\displaystyle\sum_{k<n} \lambda a_k = \lambda \sum_{k<n} a_k$; in particular $\displaystyle\sum_{k<n} \lambda = n\lambda$, where $n$ denotes the canonical natural $\iota(n) \in \mathbb{R}$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).
3. **Splitting.** If $m \le n$ then $\displaystyle\sum_{k<n} a_k = \sum_{k<m} a_k + \sum_{k=m}^{n-1} a_k$, and $\displaystyle\prod_{k<n} a_k = \Big(\prod_{k<m} a_k\Big)\Big(\prod_{k=m}^{n-1} a_k\Big)$.
4. **Monotonicity.** If $a_k \le b_k$ for all $k < n$ then $\displaystyle\sum_{k<n} a_k \le \sum_{k<n} b_k$. In particular, if $a_k \ge 0$ for all $k < n$ then $\sum_{k<n} a_k \ge 0$, every single term satisfies $a_j \le \sum_{k<n} a_k$ for $j < n$, and $\sum_{k<n} a_k = 0$ forces $a_k = 0$ for every $k < n$.
5. **Telescoping.** $\displaystyle\sum_{k<n}\big(c_{k+1} - c_k\big) = c_n - c_0$.
6. **Products.** $\displaystyle\prod_{k<n}(a_k b_k) = \Big(\prod_{k<n} a_k\Big)\Big(\prod_{k<n} b_k\Big)$; if $a_k \ge 0$ for all $k < n$ then $\prod_{k<n} a_k \ge 0$, and if $a_k > 0$ for all $k < n$ then $\prod_{k<n} a_k > 0$.

## Facts & Assumptions

**Given:** Sequences $a, b, c : \mathbb{N} \to \mathbb{R}$, a real $\lambda$, and naturals $m, n$. Write $\Sigma_n = \sum_{k<n} a_k$ and $\Pi_n = \prod_{k<n} a_k$.

[L1] Recursion clauses ([[def-finite-sum]]): $\sum_{k<0} a_k = 0$ and $\sum_{k<n+1} a_k = \sum_{k<n} a_k + a_n$; $\prod_{k<0} a_k = 1$ and $\prod_{k<n+1} a_k = \big(\prod_{k<n} a_k\big) \cdot a_n$; and $\sum_{k=m}^{n-1} a_k = \sum_{j < n-m} a_{m+j}$ for $m \le n$, likewise for products.

[L2] Field axioms: addition and multiplication are associative and commutative, $0$ and $1$ are the identities, $x - x = 0$, and multiplication distributes over addition ([[def-field]], [[def-ordered-field]]); and $0 \cdot x = 0$, which is not an axiom but a lemma ([[lem-of-zero-mult]]).

[L3] Induction principle: a property holding at $0$ and inherited by successors holds at every natural ([[thm-induction-principle]]).

[L4] Adding inequalities: $x \le y$ and $u \le v$ imply $x + u \le y + v$. [[lem-of-add-order]] states the STRICT forms and only those ($x < y \Rightarrow x + c < y + c$, and $x < y$ with $u < v$ giving $x + u < y + v$); the nonstrict form used throughout below is those two together with the cases $x = y$ and $u = v$, which are settled by trichotomy, the order being total and transitive ([[def-ordered-field]]).

[L5] The canonical embedding $\iota : \mathbb{Q} \to \mathbb{R}$ is a field homomorphism, so $\iota(0) = 0$ and $\iota(n+1) = \iota(n) + 1$, and $\iota(n) > 0$ for $n \ge 1$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).

[L6] Sign rules: a product of two positives is positive ([[lem-of-sign-rules]], claim 1), and a product of two nonnegatives is nonnegative, since a factor equal to $0$ makes the product $0$ ([[lem-of-zero-mult]]) and otherwise both factors are positive; and $1 > 0$, which is proved in [[cor-of-one-positive]] and stated by none of the items named above.

## Proof

**Proof technique:** induction.

1.1 Base case $n = 0$: every claim holds at $n = 0$, since both sides of claim 1 are $0 = 0 + 0$, both sides of claim 2 are $0 = \lambda \cdot 0$ and $0 = \iota(0)\lambda$, claim 4 reads $0 \le 0$ with no term to bound and the hypothesis $\sum_{k<0} a_k = 0$ giving nothing to prove, claim 5 reads $0 = c_0 - c_0$, and claim 6 reads $1 = 1 \cdot 1$ with $1 > 0$. [base, L1, L2, L5, L6]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume claims 1, 2, 4, 5 and 6 hold for this $n$ and for all sequences $a, b, c$ and all $\lambda$. [ih]

1.3 Splitting, claim 3, by a separate induction on the number of trailing terms $d = n - m$ with $m$ fixed: for $d = 0$ the claim reads $\sum_{k<m} a_k = \sum_{k<m} a_k + 0$ and $\prod_{k<m} a_k = \big(\prod_{k<m} a_k\big) \cdot 1$, which hold; and if $\sum_{k<m+d} a_k = \sum_{k<m} a_k + \sum_{j<d} a_{m+j}$, then $\sum_{k<m+d+1} a_k = \sum_{k<m+d} a_k + a_{m+d} = \sum_{k<m} a_k + \big(\sum_{j<d} a_{m+j} + a_{m+d}\big) = \sum_{k<m} a_k + \sum_{j<d+1} a_{m+j}$ by associativity, and identically for products with $1$ in place of $0$ and multiplication in place of addition, so induction on $d$ gives claim 3 for every $m \le n$. [L1, L2, L3]

2.1 Additivity at $n+1$: $\sum_{k<n+1}(a_k + b_k) = \sum_{k<n}(a_k + b_k) + (a_n + b_n) = \big(\sum_{k<n} a_k + \sum_{k<n} b_k\big) + (a_n + b_n) = \big(\sum_{k<n} a_k + a_n\big) + \big(\sum_{k<n} b_k + b_n\big) = \sum_{k<n+1} a_k + \sum_{k<n+1} b_k$, using the recursion clause, the hypothesis, and commutativity with associativity of addition. [step 1.2, L1, L2]

2.2 Scaling at $n+1$: $\sum_{k<n+1} \lambda a_k = \sum_{k<n} \lambda a_k + \lambda a_n = \lambda \sum_{k<n} a_k + \lambda a_n = \lambda\big(\sum_{k<n} a_k + a_n\big) = \lambda \sum_{k<n+1} a_k$ by the recursion clause, the hypothesis and distributivity; taking $a_k = 1$ for all $k$ gives $\sum_{k<n+1} \lambda = \sum_{k<n} \lambda + \lambda = \iota(n)\lambda + \lambda = (\iota(n) + 1)\lambda = \iota(n+1)\lambda$. [step 1.2, L1, L2, L5]

2.3 Monotonicity at $n+1$: assume $a_k \le b_k$ for all $k < n+1$; then $a_k \le b_k$ for all $k < n$, so the hypothesis gives $\sum_{k<n} a_k \le \sum_{k<n} b_k$, and adding the inequality $a_n \le b_n$ gives $\sum_{k<n+1} a_k = \sum_{k<n} a_k + a_n \le \sum_{k<n} b_k + b_n = \sum_{k<n+1} b_k$. [step 1.2, L1, L4]

2.4 Telescoping at $n+1$: $\sum_{k<n+1}(c_{k+1} - c_k) = \sum_{k<n}(c_{k+1} - c_k) + (c_{n+1} - c_n) = (c_n - c_0) + (c_{n+1} - c_n) = c_{n+1} - c_0$, by the recursion clause, the hypothesis and the field identities. [step 1.2, L1, L2]

2.5 Products at $n+1$: $\prod_{k<n+1}(a_k b_k) = \big(\prod_{k<n}(a_k b_k)\big)(a_n b_n) = \big(\prod_{k<n} a_k\big)\big(\prod_{k<n} b_k\big)(a_n b_n) = \big(\prod_{k<n+1} a_k\big)\big(\prod_{k<n+1} b_k\big)$ by the recursion clause, the hypothesis, and commutativity with associativity of multiplication; and if every $a_k \ge 0$ for $k < n+1$ then $\prod_{k<n+1} a_k = \big(\prod_{k<n} a_k\big) a_n$ is a product of two nonnegatives, hence nonnegative, with the same argument giving positivity from positivity since $\prod_{k<0} a_k = 1 > 0$. [step 1.2, L1, L2, L6]

3.1 Consequences of monotonicity, completing claim 4: monotonicity itself holds at every $n$, by the induction principle applied to the base case of step 1.1 and the successor step 2.3, so it is available for an arbitrary $n$ in what follows; if $a_k \ge 0$ for all $k < n$ then comparing with the zero sequence gives $\sum_{k<n} a_k \ge \sum_{k<n} 0 = 0$; for $j < n$ splitting at $j$ and then at $j+1$ writes $\sum_{k<n} a_k = \sum_{k<j} a_k + a_j + \sum_{k=j+1}^{n-1} a_k$ with the first and third summands $\ge 0$, so $a_j \le \sum_{k<n} a_k$; and if moreover $\sum_{k<n} a_k = 0$ then $0 \le a_j \le 0$ for every $j < n$, so $a_j = 0$. [step 1.1, step 2.3, step 1.3, L3, L4, L2]

4.1 By the induction principle claims 1, 2, 4, 5 and 6 hold for every $n \in \mathbb{N}$, and claim 3 was proved in step 1.3 with its consequences in step 3.1, so all six laws hold. [step 1.1, step 2.1, step 2.2, step 2.3, step 2.4, step 2.5, step 1.3, step 3.1, L3, discharge-induction] ∎
````

### `thm-jordan-content-and-indicator-integrability`

````markdown
---
id: thm-jordan-content-and-indicator-integrability
kind: theorem
title: "A bounded set is Jordan measurable iff its indicator is Riemann integrable, and the integral is its Jordan content"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-jordan-inner-and-outer-content, def-multidimensional-darboux-integral, def-multidimensional-darboux-sums, thm-multidimensional-riemann-criterion, def-multidimensional-grid-partition, lem-multidimensional-refinement-inequalities, lem-finite-cube-covers-admit-grid-control, def-multidimensional-rectangle-and-volume, def-metric-bounded-diameter]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
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

A metric-bounded set $E\subseteq\mathbb R^m$ is Jordan measurable if and only
if its indicator $1_E$ is Riemann integrable on a fixed nondegenerate bounding
rectangle $Q$. In that case
$$\int_Q1_E=\operatorname{cont}(E).$$

## Facts & Assumptions

**Given:** Metric-bounded $E\subseteq Q$ in the sense of [[def-metric-bounded-diameter]], where $Q$ is a nondegenerate bounding rectangle.

[L1] Jordan inner and outer content are [[def-jordan-inner-and-outer-content]].

[L2] Multidimensional Darboux sums and integrability are [[def-multidimensional-darboux-sums]], [[def-multidimensional-darboux-integral]], and [[thm-multidimensional-riemann-criterion]].

[L3] A finite rectangle cover can be converted to grid cells meeting $E$ with arbitrarily small excess volume ([[lem-finite-cube-covers-admit-grid-control]]), and rectangles are finite coordinate products ([[def-multidimensional-rectangle-and-volume]]).

## Proof

**Proof technique:** direct.

1.1 On a grid cell, the infimum of $1_E$ is $1$ exactly when the cell is contained in $E$, while its supremum is $1$ exactly when the cell meets $E$. Thus lower and upper sums are inscribed and covering grid approximations.  [L1, L2]

2.1 Apply [L3] to each finite outer rectangle approximation to obtain a grid whose cells meeting $E$ have arbitrarily small excess volume. For an inner approximation, shrink each nondegenerate inscribed rectangle by an arbitrarily small volume, insert the shrunken endpoints, and retain the grid cells inside it. Degenerate rectangles contribute zero. Splitting along the aligned endpoints shows that arbitrary Jordan approximations and grid approximations have the same infimum and supremum. [step 1.1, L3, given]

3.1 Equality of Jordan contents is therefore equality of the lower and upper integrals on the fixed bounding rectangle, and their common value is $\operatorname{cont}(E)$.   [step 2.1, L1, L2, given] ∎
````

### `thm-multidimensional-integral-properties`

````markdown
---
id: thm-multidimensional-integral-properties
kind: theorem
title: "Linearity, monotonicity, the absolute-value estimate and coordinate-slice additivity for the Riemann integral in $\\mathbb{R}^m$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-multidimensional-darboux-integral, thm-multidimensional-riemann-criterion, thm-multidimensional-darboux-equals-riemann, lem-multidimensional-refinement-inequalities, def-multidimensional-darboux-sums, def-multidimensional-grid-partition, lem-finite-sum-laws, def-abs-value, lem-of-abs-value, cor-of-reverse-triangle]
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

Let $Q=\prod_{j<m}[a_j,b_j]$ be nondegenerate. For integrable
$f,g:Q\to\mathbb R$ and scalars $\alpha,\beta$, the function
$\alpha f+\beta g$ is integrable and its integral is
$\alpha\int_Qf+\beta\int_Qg$. If $f\le g$, then
$\int_Qf\le\int_Qg$. Also $|f|$ is integrable and
$|\int_Qf|\le\int_Q|f|$. If $a_r<c<b_r$, cutting $Q$ at the coordinate
hyperplane $x_r=c$ gives two nondegenerate subrectangles; integrability on
$Q$ is equivalent to integrability on both restrictions, and their integral
values add to the integral over $Q$.

## Facts & Assumptions

**Given:** The stated integrable functions on the nondegenerate rectangle, and, for coordinate-slice additivity, a strictly interior cut $a_r<c<b_r$.

[L1] Small Darboux gaps characterize integrability; a common refinement improves both lower and upper sums; and the common integral is the tagged-mesh limit ([[thm-multidimensional-riemann-criterion]], [[lem-multidimensional-refinement-inequalities]], [[thm-multidimensional-darboux-equals-riemann]]).

[L2] Grid sums split coordinatewise ([[def-multidimensional-grid-partition]], [[lem-finite-sum-laws]]).

[L3] $\bigl||u|-|v|\bigr|\le|u-v|$, the reverse triangle inequality on the real line ([[cor-of-reverse-triangle]], [[def-abs-value]], [[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 Refine grids good for $f$ and $g$. Cellwise supremum and infimum estimates make the gap of $\alpha f+\beta g$ at most $|\alpha|$ times the gap of $f$ plus $|\beta|$ times that of $g$; tagged-sum linearity identifies the value.  [L1, L2]

1.2 Termwise $f\le g$ gives monotonicity of every tagged sum and hence of integrals. By [L3], the oscillation of $|f|$ on a cell is no larger than that of $f$, so $|f|$ is integrable; $-|f|\le f\le|f|$ then gives the absolute-value estimate.   [L1, L3, given]

1.3 Insert the cut coordinate into the grid. [L2] splits every Darboux or tagged sum into the two subrectangle sums. Good grids splice conversely, proving integrability on $Q$ exactly when both restrictions are integrable, and proving additivity.  [L1, L2]

2.1 These arguments establish all clauses with positively oriented rectangles.  [step 1.1, step 1.2, step 1.3] ∎
````

