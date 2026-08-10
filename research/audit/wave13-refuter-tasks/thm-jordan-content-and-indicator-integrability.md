## Selection reasons

- critical risk (12): 9 declared dependencies; 7 cited facts; biconditional / both-direction claim; boundary-sensitive language; analytic limiting/completeness language
- top-20 manifest-edge consumer (9 outgoing relationships)

## Target item — `thm-jordan-content-and-indicator-integrability`

Normalized current SHA-256: `17e8a1d01aca8d5d4df07507320ee09c3df776bfee105ced989dcef25af2fdad`

The complete exact-current item follows, including frontmatter:

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

## Wave 13 provenance row

```json
{
  "id": "thm-jordan-content-and-indicator-integrability",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://www.jirka.org/ra/html/sec_jordansets.html"
  ],
  "rationale": "The source defines Jordan measurability by integrability of the global characteristic function and identifies its integral with volume. The item proves equivalence with its inner/outer-content construction on a bounding rectangle.",
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
      "source": "def-jordan-inner-and-outer-content",
      "source_section": "Definition",
      "quote": "For bounded $E\\subseteq\\mathbb R^m$, in the metric sense of [[def-metric-bounded-diameter]], its **Jordan outer content** is the infimum of $\\sum_{r<q}\\operatorname{vol}(R_r)$ over finite axis-parallel rectangle covers of $E$. Its **Jordan inner content** is the supremum of the same sums over finite families of rectangles contained in $E$ whose interiors are pairwise disjoint.\n\nMetric boundedness always supplies a nondegenerate bounding rectangle. For\nnonempty $E$, choose $x_0\\in\\mathbb R^m$ and $r>0$ with\n$E\\subseteq B(x_0,r)$. Since\n$|x_j-(x_0)_j|\\le d_\\infty(x,x_0)\\le d_2(x,x_0)<r$ for every coordinate\n([[lem-metrics-on-rn]], [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clause 3, [[def-metric-ball]]), the nondegenerate box\n$\\prod_{j<m}[(x_0)_j-r,(x_0)_j+r]$ contains $E$. The empty set lies in\nany fixed nondegenerate rectangle.\n\nThus the outer family is nonempty and the same bounding rectangle bounds the\ninner sums; the empty family gives inner sum $0$. Refining all listed\nendpoints into one grid and splitting the nested finite sums shows every\ninscribed sum is at most every covering sum\n([[def-multidimensional-grid-partition]], [[lem-finite-sum-laws]]).\nCompleteness therefore supplies finite real extrema\n([[def-complete-ordered-field]], [[thm-infimum-property]], [[def-infimum]],\n[[lem-sup-unique]]).\n\nThe set is **Jordan measurable** when the contents agree, and their common value is its **Jordan content**. The empty set and every degenerate rectangle have content $0$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-multidimensional-darboux-sums",
      "source_section": "Definition",
      "quote": "Let $f:Q\\to\\mathbb R$ be bounded on a nondegenerate rectangle and let $P$ be a grid. For each cell $Q_i$, put\n$$m_i:=\\inf f[Q_i],\\quad M_i:=\\sup f[Q_i],\\quad L(f,P):=\\sum_i m_i\\operatorname{vol}(Q_i),\\quad U(f,P):=\\sum_i M_i\\operatorname{vol}(Q_i).$$\nThe extrema exist as finite reals because each nonempty image is bounded ([[def-bounded-set]], [[def-complete-ordered-field]], [[thm-infimum-property]], [[def-infimum]], [[lem-sup-unique]]), and the sums use the iterated convention of [[def-multidimensional-grid-partition]].\n\nSince $m_i\\le M_i$ and cell volumes are nonnegative, $L(f,P)\\le U(f,P)$. Moreover\n$$U(f,P)-L(f,P)=\\sum_i(M_i-m_i)\\operatorname{vol}(Q_i),$$\nthe sum of cell oscillations weighted by volume ([[lem-finite-sum-laws]]).",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-multidimensional-darboux-integral",
      "source_section": "Definition",
      "quote": "For a bounded function $f:Q\\to\\mathbb R$ on a nondegenerate rectangle\n$Q\\subseteq\\mathbb R^m$, define\n$$\\underline{\\int_Q}f:=\\sup_P L(f,P),\\qquad \\overline{\\int_Q}f:=\\inf_P U(f,P),$$\nover all grid partitions $P$ of $Q$. The grid family is nonempty, since the endpoints in each coordinate give a one-cell grid. Every lower sum is at most every upper sum by a common refinement and [[lem-multidimensional-refinement-inequalities]], so the two sets of sums are nonempty and bounded and the extrema exist ([[def-complete-ordered-field]], [[thm-infimum-property]], [[def-infimum]], [[lem-sup-unique]]).\n\nThe function is **Riemann integrable over $Q$** when the two values agree.\nTheir unique common real is $\\int_Q f$. No integral is defined here for a\ndegenerate rectangle, because the grid definition requires every coordinate\ninterval to have distinct endpoints. This is the multidimensional Darboux\ndefinition; its agreement with the published one-dimensional definition is\nproved separately.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-multidimensional-riemann-criterion",
      "source_section": "Statement",
      "quote": "A bounded $f:Q\\to\\mathbb R$ on a nondegenerate rectangle is Riemann\nintegrable if and only if, for every $\\varepsilon>0$, some grid $P$ satisfies\n$U(f,P)-L(f,P)<\\varepsilon$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-finite-cube-covers-admit-grid-control",
      "source_section": "Statement",
      "quote": "If $Q$ is a closed nondegenerate rectangle and $E\\subseteq Q$ is covered by finitely many axis-parallel rectangles of total volume $V$, then for every $\\eta>0$ there is a grid of $Q$ such that the cells meeting $E$ have total volume below $V+\\eta$.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-multidimensional-rectangle-and-volume",
      "source_section": "Definition",
      "quote": "Fix a natural number $m\\ge1$. For $a,b\\in\\mathbb R^m$ with $a_j\\le b_j$ for $j<m$, define\n$$[a,b]:=\\{x\\in\\mathbb R^m:a_j\\le x_j\\le b_j\\ (j<m)\\},\\qquad \\operatorname{vol}[a,b]:=\\prod_{j<m}(b_j-a_j).$$\nThe product is the recursively defined finite product of [[def-finite-sum]]. The rectangle is **nondegenerate** when every $a_j<b_j$, and it is a **cube** when all side lengths are equal.\n\nEvery factor is nonnegative, so volume is nonnegative. For a coordinate index $r<m$, cutting at $c\\in[a_r,b_r]$ gives two rectangles whose volumes add to the original, by distributivity in that factor and [[lem-finite-sum-laws]]. Under the standard identification $\\mathbb R^1\\cong\\mathbb R$ ([[lem-metrics-on-rn]], [[def-p-norms-on-rn]]), this is the interval $[a_0,b_0]$ and its length.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "On a grid cell, the infimum of $1_E$ is $1$ exactly when the cell is contained in $E$, while its supremum is $1$ exactly when the cell meets $E$. Thus lower and upper sums are inscribed and covering grid approximations. ",
      "step": "1.1",
      "inputs": [
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Apply [L3] to each finite outer rectangle approximation to obtain a grid whose cells meeting $E$ have arbitrarily small excess volume. For an inner approximation, shrink each nondegenerate inscribed rectangle by an arbitrarily small volume, insert the shrunken endpoints, and retain the grid cells inside it. Degenerate rectangles contribute zero. Splitting along the aligned endpoints shows that arbitrary Jordan approximations and grid approximations have the same infimum and supremum.",
      "step": "2.1",
      "inputs": [
        "L3",
        "step 1.1"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "Equality of Jordan contents is therefore equality of the lower and upper integrals on the fixed bounding rectangle, and their common value is $\\operatorname{cont}(E)$.  ",
      "step": "3.1",
      "inputs": [
        "step 2.1",
        "L1",
        "L2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "thm-jordan-content-and-indicator-integrability: the Statement fixes the displayed objects and has no conclusion depending on an unlicensed choice from an empty family: A metric-bounded set $E\\subseteq\\mathbb R^m$ is Jordan measurable if and only if its indicator $1_E$ is Riemann integrable on a fixed nondegenerate bounding rectangle $Q$. In that case $$\\int_Q1_E=\\operatorname{cont}(E)."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "thm-jordan-content-and-indicator-integrability: no independent zero-parameter boundary remains after the stated hypotheses and definitions; checked against the Statement: A metric-bounded set $E\\subseteq\\mathbb R^m$ is Jordan measurable if and only if its indicator $1_E$ is Riemann integrable on a fixed nondegenerate bounding rectangle $Q$. In that case $$\\int_Q1_E=\\operatorname{cont}(E)."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "thm-jordan-content-and-indicator-integrability: the assertion has no separate unit-size case; its quantified argument applies without a one-case split: A metric-bounded set $E\\subseteq\\mathbb R^m$ is Jordan measurable if and only if its indicator $1_E$ is Riemann integrable on a fixed nondegenerate bounding rectangle $Q$. In that case $$\\int_Q1_E=\\operatorname{cont}(E)."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "step 2.1: the proof explicitly handles or excludes the degenerate configuration relevant to the statement."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "step 2.1: the proof explicitly treats the endpoint, boundary, or radial-limit behaviour used by the assertion."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "thm-jordan-content-and-indicator-integrability: the proof uses only given objects, formulas, or universal instantiation and makes no choice from a possibly empty family; see Statement: A metric-bounded set $E\\subseteq\\mathbb R^m$ is Jordan measurable if and only if its indicator $1_E$ is Riemann integrable on a fixed nondegenerate bounding rectangle $Q$. In that case $$\\int_Q1_E=\\operatorname{cont}(E)."
    },
    {
      "case": "iff-forward",
      "status": "checked",
      "evidence": "Statement and steps 1.1, 2.1, and 3.1: equality of the Jordan contents implies equality of the lower and upper indicator integrals."
    },
    {
      "case": "iff-reverse",
      "status": "checked",
      "evidence": "Statement and steps 1.1, 2.1, and 3.1: equality of the lower and upper indicator integrals implies equality of the Jordan contents."
    }
  ]
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "thm-jordan-content-and-indicator-integrability",
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
    "source": "thm-jordan-content-and-indicator-integrability",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "def-multidimensional-darboux-integral",
    "declared_target": "def-multidimensional-darboux-integral",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-jordan-content-and-indicator-integrability",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "def-multidimensional-darboux-sums",
    "declared_target": "def-multidimensional-darboux-sums",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-jordan-content-and-indicator-integrability",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "thm-multidimensional-riemann-criterion",
    "declared_target": "thm-multidimensional-riemann-criterion",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-jordan-content-and-indicator-integrability",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "def-multidimensional-grid-partition",
    "declared_target": "def-multidimensional-grid-partition",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-jordan-content-and-indicator-integrability",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "lem-multidimensional-refinement-inequalities",
    "declared_target": "lem-multidimensional-refinement-inequalities",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-jordan-content-and-indicator-integrability",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "lem-finite-cube-covers-admit-grid-control",
    "declared_target": "lem-finite-cube-covers-admit-grid-control",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-jordan-content-and-indicator-integrability",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "def-multidimensional-rectangle-and-volume",
    "declared_target": "def-multidimensional-rectangle-and-volume",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-jordan-content-and-indicator-integrability",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "def-metric-bounded-diameter",
    "declared_target": "def-metric-bounded-diameter",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
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

## Full exact-current text of every cited or declared item (9)

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

### `def-metric-bounded-diameter`

````markdown
---
id: def-metric-bounded-diameter
kind: definition
title: "Bounded subset, diameter, distance from a point to a set, and distance between two sets in a metric space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-space, def-metric-ball, def-bounded-set, def-infimum,
       thm-infimum-property, lem-sup-unique, def-complete-ordered-field,
       lem-metric-nonnegativity, rem-sup-conventions, lem-of-add-order,
       def-ordered-field]
justified_by: []
aliases: [def-metric-diameter, def-distance-to-set]
landmark: false
short: "bounded, $\\operatorname{diam}$, $d(x,A)$"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Bounded set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bounded_set"
    - title: "Diameter (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Diameter"
    - title: "Hausdorff distance (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_distance"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let
$A, B \subseteq X$.

**Bounded subset.** $A$ is **bounded** if $A = \emptyset$ or there are $x_0 \in X$
and a real $r > 0$ with $A \subseteq B(x_0, r)$ ([[def-metric-ball]]). The space
$(X,d)$ is a **bounded metric space** if $X$ is a bounded subset of itself.

**Diameter, for nonempty bounded $A$ only.** Suppose $A$ is nonempty and
bounded, and put

$$D(A) := \{\, d(a,b) : a, b \in A \,\} \subseteq \mathbb{R}.$$

Then $D(A)$ is nonempty, since $A$ is, and it is bounded above: fixing $x_0$ and
$r$ with $A \subseteq B(x_0,r)$, every $a, b \in A$ satisfy
$d(a,b) \le d(a,x_0) + d(x_0,b) < r + r$ by the triangle inequality, symmetry
([[def-metric-space]]) and addition of inequalities ([[lem-of-add-order]],
[[def-ordered-field]]), so $r + r$ is an upper bound of $D(A)$
([[def-bounded-set]]). Hence $D(A)$ has a least upper bound in $\mathbb{R}$ by
the least-upper-bound property ([[def-complete-ordered-field]]), and that bound
is unique ([[lem-sup-unique]]). Define

$$\operatorname{diam}(A) := \sup D(A).$$

**Distance from a point to a set, for nonempty $A$ only.** Let $x \in X$ and let
$A$ be nonempty, and put $E(x,A) := \{\, d(x,a) : a \in A \,\}$. Then $E(x,A)$ is
nonempty and bounded below by $0$, since a metric is nonnegative
([[lem-metric-nonnegativity]], [[def-bounded-set]]), so it has a greatest lower
bound ([[thm-infimum-property]], [[def-infimum]]), unique by [[lem-sup-unique]].
Define

$$d(x,A) := \inf E(x,A).$$

**Distance between two sets, for nonempty $A$ and $B$ only.** Put
$E(A,B) := \{\, d(a,b) : a \in A,\ b \in B \,\}$, again nonempty and bounded
below by $0$, and define

$$d(A,B) := \inf E(A,B).$$

**Every one of the three scope restrictions is load bearing.** In this library
$\sup$ and $\inf$ denote real numbers and are written only after existence has
been established; the extended real line is introduced on a later page and is
not used for the suprema and infima taken here, and no convention
$\sup \emptyset = -\infty$ is in force in this development
([[rem-sup-conventions]]). Accordingly:

- $\operatorname{diam}(A)$ is defined exactly when $A$ is nonempty **and**
  bounded. It is not defined for $A = \emptyset$, and it is not defined, not even
  as an infinite value, for an unbounded $A$.
- $d(x,A)$ is defined exactly when $A \ne \emptyset$, and $d(A,B)$ exactly when
  both $A$ and $B$ are nonempty. No boundedness is needed for these two, because
  $0$ is always a lower bound.

## Remarks

- **Diameter and the distance functions are nonnegative.** For nonempty bounded
  $A$ and any $a \in A$ we have $0 = d(a,a) \in D(A)$, so
  $\operatorname{diam}(A) \ge 0$; and $d(x,A) \ge 0$, $d(A,B) \ge 0$ because $0$
  is a lower bound of the sets they are infima of
  ([[lem-metric-nonnegativity]], [[def-infimum]]).
- **$d(A,B)$ is not a metric on the nonempty subsets of $X$.** It is symmetric
  and vanishes on $A = B$, but two distinct disjoint sets can be at distance $0$,
  so the separation axiom (M1) of [[def-metric-space]] fails; the witness is on
  the companion page. The letter $d$ is reused for three different functions
  here, the metric, the point-to-set distance and the set-to-set distance, only
  because the arguments make the intended one unambiguous.
- **$d(x,A)$ is the special case $d(\{x\},A)$**, since
  $E(\{x\},A) = E(x,A)$, and the two infima therefore agree by uniqueness
  ([[lem-sup-unique]]).
````

### `def-multidimensional-darboux-integral`

````markdown
---
id: def-multidimensional-darboux-integral
kind: definition
title: "The lower and upper Darboux integrals over a nondegenerate rectangle in $\\mathbb{R}^m$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-multidimensional-darboux-sums, lem-multidimensional-refinement-inequalities, def-multidimensional-grid-partition, def-complete-ordered-field, def-infimum, thm-infimum-property, lem-sup-unique, def-bounded-set]
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
pipeline_run: null
---

## Definition

For a bounded function $f:Q\to\mathbb R$ on a nondegenerate rectangle
$Q\subseteq\mathbb R^m$, define
$$\underline{\int_Q}f:=\sup_P L(f,P),\qquad \overline{\int_Q}f:=\inf_P U(f,P),$$
over all grid partitions $P$ of $Q$. The grid family is nonempty, since the endpoints in each coordinate give a one-cell grid. Every lower sum is at most every upper sum by a common refinement and [[lem-multidimensional-refinement-inequalities]], so the two sets of sums are nonempty and bounded and the extrema exist ([[def-complete-ordered-field]], [[thm-infimum-property]], [[def-infimum]], [[lem-sup-unique]]).

The function is **Riemann integrable over $Q$** when the two values agree.
Their unique common real is $\int_Q f$. No integral is defined here for a
degenerate rectangle, because the grid definition requires every coordinate
interval to have distinct endpoints. This is the multidimensional Darboux
definition; its agreement with the published one-dimensional definition is
proved separately.
````

### `def-multidimensional-darboux-sums`

````markdown
---
id: def-multidimensional-darboux-sums
kind: definition
title: "Lower and upper Darboux sums over a grid partition in $\\mathbb{R}^m$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-multidimensional-grid-partition, def-multidimensional-rectangle-and-volume, def-bounded-set, def-complete-ordered-field, def-infimum, thm-infimum-property, lem-sup-unique, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: false
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
pipeline_run: null
---

## Definition

Let $f:Q\to\mathbb R$ be bounded on a nondegenerate rectangle and let $P$ be a grid. For each cell $Q_i$, put
$$m_i:=\inf f[Q_i],\quad M_i:=\sup f[Q_i],\quad L(f,P):=\sum_i m_i\operatorname{vol}(Q_i),\quad U(f,P):=\sum_i M_i\operatorname{vol}(Q_i).$$
The extrema exist as finite reals because each nonempty image is bounded ([[def-bounded-set]], [[def-complete-ordered-field]], [[thm-infimum-property]], [[def-infimum]], [[lem-sup-unique]]), and the sums use the iterated convention of [[def-multidimensional-grid-partition]].

Since $m_i\le M_i$ and cell volumes are nonnegative, $L(f,P)\le U(f,P)$. Moreover
$$U(f,P)-L(f,P)=\sum_i(M_i-m_i)\operatorname{vol}(Q_i),$$
the sum of cell oscillations weighted by volume ([[lem-finite-sum-laws]]).
````

### `def-multidimensional-grid-partition`

````markdown
---
id: def-multidimensional-grid-partition
kind: definition
title: "Grid partitions of a rectangle in $\\mathbb{R}^m$, their cells, refinements and mesh"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-multidimensional-rectangle-and-volume, def-partition-and-refinement, thm-induction-principle, def-finite-sum, lem-finite-sum-laws, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, lem-finite-set-has-max, def-max-min]
justified_by: []
aliases: []
landmark: false
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
pipeline_run: null
---

## Definition

A **grid partition** $P$ of a nondegenerate rectangle $Q=[a,b]\subseteq\mathbb R^m$ is a family, one for each $j<m$, of one-dimensional partitions $a_j=t_{j,0}<\cdots<t_{j,n_j}=b_j$ ([[def-partition-and-refinement]]). For a multi-index $i=(i_0,\ldots,i_{m-1})$ with $i_j<n_j$, its cell is
$$Q_i:=\prod_{j<m}[t_{j,i_j},t_{j,i_j+1}].$$
A sum over cells means the iterated recursive sum $\sum_{i_0<n_0}\cdots\sum_{i_{m-1}<n_{m-1}}$ of [[def-finite-sum]]. The **mesh** is $\max_{j<m,i_j<n_j}(t_{j,i_j+1}-t_{j,i_j})$, which exists by [[lem-finite-set-has-max]] and is the largest $d_\infty$-diameter ([[def-p-norms-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]]).

Refinement is coordinatewise. Coordinatewise union gives a common refinement. The cells cover $Q$ and have pairwise disjoint interiors. Repeated splitting of finite sums and induction on $m$ give
$$\sum_i\operatorname{vol}(Q_i)=\operatorname{vol}(Q).$$
These statements include boundary overlaps: boundaries may meet, but interiors do not, and volume splitting is algebraic.
````

### `def-multidimensional-rectangle-and-volume`

````markdown
---
id: def-multidimensional-rectangle-and-volume
kind: definition
title: "Axis-parallel rectangles in $\\mathbb{R}^m$ and their volume"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [lem-metrics-on-rn, def-p-norms-on-rn, def-finite-sum, lem-finite-sum-laws, def-interval, def-canonical-natural, lem-of-naturals-positive]
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
pipeline_run: null
---

## Definition

Fix a natural number $m\ge1$. For $a,b\in\mathbb R^m$ with $a_j\le b_j$ for $j<m$, define
$$[a,b]:=\{x\in\mathbb R^m:a_j\le x_j\le b_j\ (j<m)\},\qquad \operatorname{vol}[a,b]:=\prod_{j<m}(b_j-a_j).$$
The product is the recursively defined finite product of [[def-finite-sum]]. The rectangle is **nondegenerate** when every $a_j<b_j$, and it is a **cube** when all side lengths are equal.

Every factor is nonnegative, so volume is nonnegative. For a coordinate index $r<m$, cutting at $c\in[a_r,b_r]$ gives two rectangles whose volumes add to the original, by distributivity in that factor and [[lem-finite-sum-laws]]. Under the standard identification $\mathbb R^1\cong\mathbb R$ ([[lem-metrics-on-rn]], [[def-p-norms-on-rn]]), this is the interval $[a_0,b_0]$ and its length.
````

### `lem-finite-cube-covers-admit-grid-control`

````markdown
---
id: lem-finite-cube-covers-admit-grid-control
kind: lemma
title: "A finite rectangle cover admits grid control with arbitrarily small volume excess"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-null-and-content-zero-in-rn, def-multidimensional-grid-partition, def-multidimensional-rectangle-and-volume, def-finite-sum, lem-finite-sum-laws, def-integer-power, thm-algebra-of-continuous-functions, def-continuity-real, lem-finite-set-has-max, def-max-min, thm-induction-principle, cor-archimedean-reciprocal]
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
    - title: "J. Lebl, Basic Analysis, Riemann Integral in Several Variables"
      url: "https://www.jirka.org/ra/html/sec_rirect.html"
    - title: "J. Lebl, Basic Analysis, The Riemann-Lebesgue Criterion"
      url: "https://www.jirka.org/ra/html/sec_riemannlebesgue.html"
    - title: "J. Lebl, Basic Analysis, Outer Measure and Null Sets"
      url: "https://www.jirka.org/ra/html/sec_outermeasure.html"
pipeline_run: null
---

## Statement

If $Q$ is a closed nondegenerate rectangle and $E\subseteq Q$ is covered by finitely many axis-parallel rectangles of total volume $V$, then for every $\eta>0$ there is a grid of $Q$ such that the cells meeting $E$ have total volume below $V+\eta$.

## Facts & Assumptions

**Given:** A finite rectangle cover and $\eta>0$.

[L1] Cube volume is an integer power and is continuous in the side length ([[def-integer-power]], [[thm-algebra-of-continuous-functions]], [[def-continuity-real]]).

[L2] Grids, cell volumes, and splitting are [[def-multidimensional-grid-partition]], [[def-multidimensional-rectangle-and-volume]], [[def-finite-sum]], and [[lem-finite-sum-laws]].

## Proof

**Proof technique:** constructive.

1.1 Intersect each covering rectangle with $Q$. Each nonempty intersection is a closed coordinate rectangle $R_j\subseteq Q$ with volume no larger than the original rectangle. If some $R_j=Q$, the one-cell grid already has total meeting-cell volume $\operatorname{vol}(Q)\le V<V+\eta$, so assume otherwise. Move every coordinate face of each $R_j$ that is not already a face of $Q$ outward by a positive margin, staying inside $Q$, so that the resulting rectangle $R_j^+$ has volume increase below a prescribed share of $\eta$. Continuity of the finite volume product and finiteness make the total increase below $\eta$; because no $R_j$ equals $Q$, at least one face of every $R_j$ moves, and the finite set of chosen margins has a positive least member.   [L1, L2, given, choose]

2.1 Insert every endpoint of every $R_j^+$ into the coordinate grids, then refine to mesh smaller than the least margin using [[cor-archimedean-reciprocal]]. If a closed cell meets $R_j$, each of its coordinate intervals lies inside the corresponding enlarged interval: away from a face of $Q$ this follows from the mesh-margin bound, while at a face of $Q$ there is no cell on the outside. Hence that cell lies in $R_j^+$.  [step 1.1, L2, construct]

3.1 Assign each cell meeting $E$ to one $R_j$ that it meets. By step 2.1 it lies in the aligned rectangle $R_j^+$. Splitting the iterated sums bounds the assigned cells' total volume by $\sum_j\operatorname{vol}(R_j^+) < V+\eta$.   [step 2.1, L2, given]

4.1 The constructed grid has the asserted control.  [step 3.1, discharge-construct] ∎
````

### `lem-multidimensional-refinement-inequalities`

````markdown
---
id: lem-multidimensional-refinement-inequalities
kind: lemma
title: "Refinement raises multidimensional lower sums and lowers upper sums, with a quantitative boundary-slab estimate"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-multidimensional-darboux-sums, def-multidimensional-grid-partition, def-multidimensional-rectangle-and-volume, def-finite-sum, lem-finite-sum-laws, thm-induction-principle, def-canonical-natural]
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
    - title: "J. Lebl, Basic Analysis, Riemann Integral in Several Variables"
      url: "https://www.jirka.org/ra/html/sec_rirect.html"
    - title: "J. Lebl, Basic Analysis, The Riemann-Lebesgue Criterion"
      url: "https://www.jirka.org/ra/html/sec_riemannlebesgue.html"
pipeline_run: null
---

## Statement

If $P'$ refines a grid $P$, then $L(f,P)\le L(f,P')\le U(f,P')\le U(f,P)$. Moreover, for a fixed grid $P$, there is a constant $C_P$ such that refining any grid of mesh $\delta$ by $P$ changes either Darboux sum by at most $2B C_P\delta$, where $|f|\le B$.

## Facts & Assumptions

**Given:** The grids, bounded $f$, and bound $B$.

[L1] Darboux sums and iterated cell sums are [[def-multidimensional-darboux-sums]] and [[def-multidimensional-grid-partition]].

[L2] Finite sums split and multiplication distributes ([[def-finite-sum]], [[lem-finite-sum-laws]]).

## Proof

**Proof technique:** induction.

1.1 Insert one coordinate hyperplane. Every new cell lies in one old cell, so its infimum is no smaller and its supremum no larger. Splitting the affected coordinate sum proves the four inequalities.  [base, L1, L2]

1.2 Only fine cells meeting an interior hyperplane of $P$ can cross a coarse-cell boundary. For a hyperplane perpendicular to coordinate $j$, those cells lie in a slab of thickness at most $2\delta$; repeated product distributivity bounds their total volume by $2\delta\prod_{r\ne j}(b_r-a_r)$.   [L1, L2, given]

2.1 Iterating over the finitely many inserted hyperplanes and coordinates proves refinement monotonicity.   [ih, step 1.1, given]

2.2 Sum this bound over the finitely many fixed interior hyperplanes to define $C_P$. On all other cells refinement changes no coarse bound, while on boundary cells each contribution changes by at most $2B$ times its volume.   [step 1.2, L2, given]

3.1 This yields the quantitative estimate and completes both assertions.  [step 2.1, step 2.2, discharge-induction] ∎
````

### `thm-multidimensional-riemann-criterion`

````markdown
---
id: thm-multidimensional-riemann-criterion
kind: theorem
title: "Riemann's criterion on a nondegenerate rectangle in $\\mathbb{R}^m$: integrability is equivalent to arbitrarily small Darboux gaps"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-multidimensional-darboux-integral, def-multidimensional-darboux-sums, lem-multidimensional-refinement-inequalities, def-multidimensional-grid-partition, lem-sup-epsilon, lem-inf-epsilon]
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

A bounded $f:Q\to\mathbb R$ on a nondegenerate rectangle is Riemann
integrable if and only if, for every $\varepsilon>0$, some grid $P$ satisfies
$U(f,P)-L(f,P)<\varepsilon$.

## Facts & Assumptions

**Given:** A bounded function on a nondegenerate rectangle.

[L1] The lower and upper integrals are the supremum and infimum in [[def-multidimensional-darboux-integral]].

[L2] Near-supremum and near-infimum elements exist ([[lem-sup-epsilon]], [[lem-inf-epsilon]]).

[L3] Common refinements improve both sums ([[lem-multidimensional-refinement-inequalities]], [[def-multidimensional-grid-partition]]).

## Proof

**Proof technique:** direct.

1.1 If the two integrals equal $I$, choose $P_-$ with $L(f,P_-)>I-\varepsilon/2$ and $P_+$ with $U(f,P_+)<I+\varepsilon/2$. A common refinement $P$ has gap below $\varepsilon$.  [L1, L2, L3]

1.2 Conversely, a common refinement shows every lower sum is at most every upper sum, so for every $P$, $0\le\overline{\int_Q}f-\underline{\int_Q}f\le U(f,P)-L(f,P)$. Arbitrarily small gaps force the integral difference to be $0$.   [L1, L3, given]

2.1 Thus the conditions are equivalent.  [step 1.1, step 1.2] ∎
````

