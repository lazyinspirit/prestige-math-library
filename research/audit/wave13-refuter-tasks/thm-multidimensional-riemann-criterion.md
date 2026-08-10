## Selection reasons

- critical risk (11): 6 declared dependencies; 5 cited facts; biconditional / both-direction claim; boundary-sensitive language; analytic limiting/completeness language

## Target item — `thm-multidimensional-riemann-criterion`

Normalized current SHA-256: `2d83c1c7a0027981ca174d538844e9b67f8c03d7ac0a824a3291476f4990bc64`

The complete exact-current item follows, including frontmatter:

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

## Wave 13 provenance row

```json
{
  "id": "thm-multidimensional-riemann-criterion",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://www.jirka.org/ra/html/sec_rirect.html"
  ],
  "rationale": "The source gives the Darboux small-gap criterion in several variables. The item states it for the local grid definitions and adapts the common-refinement proof.",
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
      "source": "def-multidimensional-darboux-integral",
      "source_section": "Definition",
      "quote": "For a bounded function $f:Q\\to\\mathbb R$ on a nondegenerate rectangle\n$Q\\subseteq\\mathbb R^m$, define\n$$\\underline{\\int_Q}f:=\\sup_P L(f,P),\\qquad \\overline{\\int_Q}f:=\\inf_P U(f,P),$$\nover all grid partitions $P$ of $Q$. The grid family is nonempty, since the endpoints in each coordinate give a one-cell grid. Every lower sum is at most every upper sum by a common refinement and [[lem-multidimensional-refinement-inequalities]], so the two sets of sums are nonempty and bounded and the extrema exist ([[def-complete-ordered-field]], [[thm-infimum-property]], [[def-infimum]], [[lem-sup-unique]]).\n\nThe function is **Riemann integrable over $Q$** when the two values agree.\nTheir unique common real is $\\int_Q f$. No integral is defined here for a\ndegenerate rectangle, because the grid definition requires every coordinate\ninterval to have distinct endpoints. This is the multidimensional Darboux\ndefinition; its agreement with the published one-dimensional definition is\nproved separately.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-sup-epsilon",
      "source_section": "Statement",
      "quote": "Let $S \\subseteq \\mathbb{R}$ be nonempty and bounded above, and let $u$ be an\nupper bound of $S$ ([[def-complete-ordered-field]]). Then\n\n$$u = \\sup S \\quad \\Longleftrightarrow \\quad \\text{for every } \\varepsilon > 0 \\text{ there exists } s \\in S \\text{ with } u - \\varepsilon < s.$$\n\nIn words: among the upper bounds of $S$, the supremum is exactly the one that\ncannot be lowered by any positive amount and still bound $S$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-inf-epsilon",
      "source_section": "Statement",
      "quote": "Let $S \\subseteq \\mathbb{R}$ be nonempty and bounded below, and let $\\ell$ be a\nlower bound of $S$ ([[def-bounded-set]]). Then\n\n$$\\ell = \\inf S \\quad \\Longleftrightarrow \\quad \\text{for every } \\varepsilon > 0 \\text{ there exists } s \\in S \\text{ with } s < \\ell + \\varepsilon.$$\n\nIn words: among the lower bounds of $S$, the infimum is exactly the one that\ncannot be raised by any positive amount and still bound $S$ from below.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-multidimensional-refinement-inequalities",
      "source_section": "Statement",
      "quote": "If $P'$ refines a grid $P$, then $L(f,P)\\le L(f,P')\\le U(f,P')\\le U(f,P)$. Moreover, for a fixed grid $P$, there is a constant $C_P$ such that refining any grid of mesh $\\delta$ by $P$ changes either Darboux sum by at most $2B C_P\\delta$, where $|f|\\le B$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L3",
      "source": "def-multidimensional-grid-partition",
      "source_section": "Definition",
      "quote": "A **grid partition** $P$ of a nondegenerate rectangle $Q=[a,b]\\subseteq\\mathbb R^m$ is a family, one for each $j<m$, of one-dimensional partitions $a_j=t_{j,0}<\\cdots<t_{j,n_j}=b_j$ ([[def-partition-and-refinement]]). For a multi-index $i=(i_0,\\ldots,i_{m-1})$ with $i_j<n_j$, its cell is\n$$Q_i:=\\prod_{j<m}[t_{j,i_j},t_{j,i_j+1}].$$\nA sum over cells means the iterated recursive sum $\\sum_{i_0<n_0}\\cdots\\sum_{i_{m-1}<n_{m-1}}$ of [[def-finite-sum]]. The **mesh** is $\\max_{j<m,i_j<n_j}(t_{j,i_j+1}-t_{j,i_j})$, which exists by [[lem-finite-set-has-max]] and is the largest $d_\\infty$-diameter ([[def-p-norms-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]]).\n\nRefinement is coordinatewise. Coordinatewise union gives a common refinement. The cells cover $Q$ and have pairwise disjoint interiors. Repeated splitting of finite sums and induction on $m$ give\n$$\\sum_i\\operatorname{vol}(Q_i)=\\operatorname{vol}(Q).$$\nThese statements include boundary overlaps: boundaries may meet, but interiors do not, and volume splitting is algebraic.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "If the two integrals equal $I$, choose $P_-$ with $L(f,P_-)>I-\\varepsilon/2$ and $P_+$ with $U(f,P_+)<I+\\varepsilon/2$. A common refinement $P$ has gap below $\\varepsilon$. ",
      "step": "1.1",
      "inputs": [
        "L1",
        "L2",
        "L3"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "Conversely, a common refinement shows every lower sum is at most every upper sum, so for every $P$, $0\\le\\overline{\\int_Q}f-\\underline{\\int_Q}f\\le U(f,P)-L(f,P)$. Arbitrarily small gaps force the integral difference to be $0$.  ",
      "step": "1.2",
      "inputs": [
        "L1",
        "L3"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Thus the conditions are equivalent. ",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "step 1.2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "thm-multidimensional-riemann-criterion: the Statement fixes the displayed objects and has no conclusion depending on an unlicensed choice from an empty family: A bounded $f:Q\\to\\mathbb R$ on a nondegenerate rectangle is Riemann integrable if and only if, for every $\\varepsilon>0$, some grid $P$ satisfies $U(f,P)-L(f,P)<\\varepsilon$."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "thm-multidimensional-riemann-criterion: no independent zero-parameter boundary remains after the stated hypotheses and definitions; checked against the Statement: A bounded $f:Q\\to\\mathbb R$ on a nondegenerate rectangle is Riemann integrable if and only if, for every $\\varepsilon>0$, some grid $P$ satisfies $U(f,P)-L(f,P)<\\varepsilon$."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "thm-multidimensional-riemann-criterion: the assertion has no separate unit-size case; its quantified argument applies without a one-case split: A bounded $f:Q\\to\\mathbb R$ on a nondegenerate rectangle is Riemann integrable if and only if, for every $\\varepsilon>0$, some grid $P$ satisfies $U(f,P)-L(f,P)<\\varepsilon$."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Statement: degeneracy is explicitly excluded or separated by the hypotheses: A bounded $f:Q\\to\\mathbb R$ on a nondegenerate rectangle is Riemann integrable if and only if, for every $\\varepsilon>0$, some grid $P$ satisfies $U(f,P)-L(f,P)<\\varepsilon$."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "thm-multidimensional-riemann-criterion: no interval or radial endpoint is part of the conclusion; checked against the Statement: A bounded $f:Q\\to\\mathbb R$ on a nondegenerate rectangle is Riemann integrable if and only if, for every $\\varepsilon>0$, some grid $P$ satisfies $U(f,P)-L(f,P)<\\varepsilon$."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 1.1: every witness selected there is drawn after the proof establishes the relevant positivity, existence, or nonemptiness condition."
    },
    {
      "case": "iff-forward",
      "status": "checked",
      "evidence": "Statement and step 1.1: the forward implication is represented among the numbered derivations beginning at this step."
    },
    {
      "case": "iff-reverse",
      "status": "checked",
      "evidence": "Statement and step 1.2: the reverse implication is represented among the numbered derivations ending at or before this step."
    }
  ]
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "thm-multidimensional-riemann-criterion",
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
    "source": "thm-multidimensional-riemann-criterion",
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
    "source": "thm-multidimensional-riemann-criterion",
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
    "source": "thm-multidimensional-riemann-criterion",
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
    "source": "thm-multidimensional-riemann-criterion",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "lem-sup-epsilon",
    "declared_target": "lem-sup-epsilon",
    "target_statement_provenance": "ai-altered",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-multidimensional-riemann-criterion",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "lem-inf-epsilon",
    "declared_target": "lem-inf-epsilon",
    "target_statement_provenance": "ai-altered",
    "targetPage": "suprema-and-infima",
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

## Full exact-current text of every cited or declared item (6)

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

### `lem-inf-epsilon`

````markdown
---
id: lem-inf-epsilon
kind: lemma
title: "Epsilon characterisation of the infimum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-sup-epsilon, thm-infimum-property, lem-reflection, def-bounded-set,
       lem-of-add-order, lem-of-inverse-unique, def-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
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
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Infimum and supremum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infimum_and_supremum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $S \subseteq \mathbb{R}$ be nonempty and bounded below, and let $\ell$ be a
lower bound of $S$ ([[def-bounded-set]]). Then

$$\ell = \inf S \quad \Longleftrightarrow \quad \text{for every } \varepsilon > 0 \text{ there exists } s \in S \text{ with } s < \ell + \varepsilon.$$

In words: among the lower bounds of $S$, the infimum is exactly the one that
cannot be raised by any positive amount and still bound $S$ from below.

## Facts & Assumptions

**Given:** A nonempty $S \subseteq \mathbb{R}$ that is bounded below, a lower bound $\ell$ of $S$, and the reflection $T := -S = \{-s : s \in S\}$.

[L1] Reflection, at the level of sets: $S$ is nonempty exactly when $T$ is; $\ell$ is a lower bound of $S$ exactly when $-\ell$ is an upper bound of $T$; and $S$ is bounded below exactly when $T$ is bounded above ([[lem-reflection]]). Elementwise, negation reverses the order: $-(-a) = a$, because $(-a) + a = 0$ and additive inverses are unique ([[def-field]], [[lem-of-inverse-unique]]); and $a < b$ exactly when $-b < -a$, because translation invariance applied with the constant $-a - b$ turns $a < b$ into $-b < -a$ and, applied with the constant $a + b$, turns it back ([[lem-of-add-order]]).

[L2] Every nonempty $S \subseteq \mathbb{R}$ bounded below has an infimum, and $\inf S = -\sup(-S) = -\sup T$ ([[thm-infimum-property]]).

[L3] Epsilon characterisation of the supremum: for a nonempty $X \subseteq \mathbb{R}$ bounded above and an upper bound $v$ of $X$, one has $v = \sup X$ if and only if for every $\varepsilon > 0$ there is $x \in X$ with $v - \varepsilon < x$ ([[lem-sup-epsilon]]).

## Proof

**Proof technique:** direct.

1.1 Since $S$ is nonempty and bounded below and $\ell$ is a lower bound of $S$, the set $T$ is nonempty and $-\ell$ is an upper bound of $T$, so $T$ is nonempty and bounded above. [given, L1]

1.2 For $s \in \mathbb{R}$ and $\varepsilon > 0$, negation turns the inequality $(-\ell) - \varepsilon < -s$ into $s < \ell + \varepsilon$ and back, because $-(-s) = s$ and $-\big((-\ell) - \varepsilon\big) = \ell + \varepsilon$. [L1, algebra]

2.1 By [L2] the infimum of $S$ exists and equals $-\sup T$; hence $\ell = \inf S$ holds if and only if $\ell = -\sup T$, which by negating both sides holds if and only if $-\ell = \sup T$. [step 1.1, L2, L1]

3.1 Applying [L3] to the nonempty bounded-above set $T$ and its upper bound $-\ell$: $-\ell = \sup T$ if and only if for every $\varepsilon > 0$ there is $t \in T$ with $(-\ell) - \varepsilon < t$. [step 1.1, step 2.1, L3]

4.1 The elements of $T$ are exactly the $-s$ with $s \in S$, so by 1.2 the condition "there is $t \in T$ with $(-\ell) - \varepsilon < t$" is equivalent to "there is $s \in S$ with $s < \ell + \varepsilon$". [step 1.2, step 3.1, L1]

5.1 Chaining the equivalences, $\ell = \inf S$ if and only if for every $\varepsilon > 0$ there is $s \in S$ with $s < \ell + \varepsilon$. [step 2.1, step 3.1, step 4.1] ∎
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

### `lem-sup-epsilon`

````markdown
---
id: lem-sup-epsilon
kind: lemma
title: "Epsilon characterisation of the supremum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complete-ordered-field, lem-sup-unique, def-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
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
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Infimum and supremum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infimum_and_supremum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "David H. Ernst, An Introduction to Proof via Inquiry-Based Learning, Section 5.1"
      url: "https://math.libretexts.org/Bookshelves/Mathematical_Logic_and_Proof/An_Introduction_to_Proof_via_Inquiry-Based_Learning_%28Ernst%29/05%253A_New_Page/5.01%253A_New_Page"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $S \subseteq \mathbb{R}$ be nonempty and bounded above, and let $u$ be an
upper bound of $S$ ([[def-complete-ordered-field]]). Then

$$u = \sup S \quad \Longleftrightarrow \quad \text{for every } \varepsilon > 0 \text{ there exists } s \in S \text{ with } u - \varepsilon < s.$$

In words: among the upper bounds of $S$, the supremum is exactly the one that
cannot be lowered by any positive amount and still bound $S$.

## Facts & Assumptions

**Given:** A nonempty $S \subseteq \mathbb{R}$ that is bounded above, and an upper bound $u$ of $S$; since $S$ is nonempty and bounded above, $\sup S$ exists.

[L1] Supremum: $u = \sup S$ exactly when $u$ is an upper bound of $S$ and $u \le u'$ for every upper bound $u'$ of $S$; and every nonempty subset of $\mathbb{R}$ that is bounded above has such a least upper bound ([[def-complete-ordered-field]]).

[L2] The least upper bound is unique, so the equation $u = \sup S$ says precisely that $u$ is a least upper bound of $S$ ([[lem-sup-unique]]).

[L3] The order is total: for $a, b \in \mathbb{R}$ exactly one of $a < b$, $a = b$, $b < a$ holds, so the negation of $a \le b$ is $b < a$; and $a < b$ holds exactly when $b - a > 0$ ([[def-complete-ordered-field]], [[def-ordered-field]]). (Translation invariance follows in one line from that last equivalence, since $(b + c) - (a + c) = b - a$, but no step below uses it and it is not claimed here as a quoted result.)

## Proof

**Proof technique:** direct.

1.1 For the forward implication assume $u = \sup S$, that is, $u$ is an upper bound of $S$ that is $\le$ every upper bound of $S$, and let $\varepsilon > 0$ be arbitrary. [assume-hyp, L1, L2]

1.2 For the converse implication assume that $u$ is an upper bound of $S$ such that for every $\varepsilon > 0$ there exists $s \in S$ with $u - \varepsilon < s$, and let $u'$ be an arbitrary upper bound of $S$. [assume-hyp]

2.1 Since $u - (u - \varepsilon) = \varepsilon > 0$, we have $u - \varepsilon < u$. [step 1.1, L3, algebra]

2.2 By totality either $u \le u'$ or $u' < u$; in the second case put $\varepsilon_0 := u - u'$, so that $\varepsilon_0 > 0$ and $u - \varepsilon_0 = u'$. [step 1.2, L3, algebra]

3.1 The element $u - \varepsilon$ is not an upper bound of $S$: if it were, the leastness of $u$ among upper bounds would give $u \le u - \varepsilon$, which contradicts $u - \varepsilon < u$ by trichotomy. [step 2.1, step 1.1, L1, L3]

3.2 In that second case the hypothesis applied to $\varepsilon_0$ yields $s_0 \in S$ with $u' = u - \varepsilon_0 < s_0$, so $s_0 \le u'$ fails, contradicting that $u'$ is an upper bound of $S$; the second case is therefore impossible and $u \le u'$. [step 2.2, step 1.2, L3]

4.1 Failing to be an upper bound of $S$ means precisely that some $s \in S$ does not satisfy $s \le u - \varepsilon$, and by totality that says $u - \varepsilon < s$; since $\varepsilon > 0$ was arbitrary, the forward implication is proved. [step 3.1, L3]

4.2 Since $u'$ was an arbitrary upper bound of $S$, we get $u \le u'$ for every upper bound $u'$; as $u$ is itself an upper bound, $u$ is a least upper bound of $S$, hence $u = \sup S$ by uniqueness, which proves the converse implication. [step 3.2, step 1.2, L1, L2]

5.1 Both implications hold, so for an upper bound $u$ of a nonempty set $S$ bounded above, $u = \sup S$ if and only if for every $\varepsilon > 0$ there is $s \in S$ with $u - \varepsilon < s$. [step 4.1, step 4.2] ∎
````

