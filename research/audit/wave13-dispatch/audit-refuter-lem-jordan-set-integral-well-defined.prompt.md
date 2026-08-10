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

- critical risk (9): 8 declared dependencies; 4 cited facts; boundary-sensitive language; analytic limiting/completeness language

## Target item — `lem-jordan-set-integral-well-defined`

Normalized current SHA-256: `20c5c3041f774bf34d8ac1767501635cd09edea5712f520255575437e6f7a4a5`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: lem-jordan-set-integral-well-defined
kind: lemma
title: "The Riemann integral over a Jordan set is independent of the bounding rectangle"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-riemann-integral-over-a-jordan-set, thm-multidimensional-integral-properties, thm-lebesgue-criterion-in-rn, thm-jordan-content-and-indicator-integrability, def-null-and-content-zero-in-rn, def-multidimensional-grid-partition, def-multidimensional-rectangle-and-volume, cor-archimedean-reciprocal]
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
    - title: "J. Lebl, Basic Analysis, Jordan Measurable Sets"
      url: "https://www.jirka.org/ra/html/sec_jordansets.html"
    - title: "J. Lebl, Basic Analysis, Outer Measure and Null Sets"
      url: "https://www.jirka.org/ra/html/sec_outermeasure.html"
pipeline_run: null
---

## Statement

The definition of $\int_E f$ is independent of the chosen bounding rectangle.

## Facts & Assumptions

**Given:** Nondegenerate bounding rectangles $Q_1,Q_2$ for $E$.

[L1] There is a nondegenerate rectangle $Q$ that contains both $Q_1,Q_2$ strictly in every coordinate: decrease each of the finitely many lower endpoints and increase each upper endpoint by any fixed positive margin ([[def-multidimensional-rectangle-and-volume]]).

[L2] Coordinate-slice additivity, including its converse integrability clause, is part of [[thm-multidimensional-integral-properties]].

[L3] A bounded function on a nondegenerate rectangle is integrable when its discontinuity set is null ([[thm-lebesgue-criterion-in-rn]]), and the indicator of a Jordan measurable set integrates to its Jordan content ([[thm-jordan-content-and-indicator-integrability]]).

## Proof

**Proof technique:** direct.

1.1 Extend the zero extension on $Q_i$ further by zero to $Q$. Cut $Q$ at the lower and upper endpoint of $Q_i$ in each coordinate. The strict containment in [L1] and nondegeneracy of $Q_i$ make every cut strictly interior. On every added nondegenerate subrectangle the restriction is zero away from the finitely many coordinate faces of $Q_i$; only shared boundary points may retain nonzero values. [L1, given]

2.1 Every bounded piece of a coordinate hyperplane has content zero: subdivide its bounded $(m-1)$-dimensional coordinate ranges into cubes of side at most $1/\iota(N)$, and thicken the fixed coordinate by the same amount. The number of cubes grows at most as a fixed multiple of $\iota(N)^{m-1}$, so their total $m$-volume is at most a fixed multiple of $1/\iota(N)$, which can be made arbitrarily small ([[def-null-and-content-zero-in-rn]], [[cor-archimedean-reciprocal]]). Finite unions preserve this estimate. Thus the exceptional face set $H$ from step 1.1 is Jordan measurable with content zero, and [L3] gives $\int 1_H=0$. [step 1.1, L3]

3.1 On each added subrectangle the extended function is bounded and is zero off $H$, so its discontinuities lie in the null set $H$. It is integrable by [L3]. If $|f|\le B$, then $|h|\le B1_H$; monotonicity and the absolute-value estimate in [L2] give $\left|\int h\right|\le\int|h|\le B\int1_H=0$. Hence every added subrectangle has integral $0$. [step 1.1, step 2.1, L2, L3]

4.1 Repeated coordinate-slice additivity [L2] now says that the extension is integrable on $Q$ exactly when it is integrable on $Q_i$, and its integral equals the $Q_i$-integral because every added integral is $0$. Applying this to $i=1,2$ gives the same integrability decision and value in both rectangles.   [step 3.1, L2, given] ∎
````

## Wave 13 provenance row

```json
{
  "id": "lem-jordan-set-integral-well-defined",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://www.jirka.org/ra/html/sec_jordansets.html"
  ],
  "rationale": "The source states independence of the containing rectangle. The item isolates it as a lemma and supplies locally generated coordinate-slice and null-face bookkeeping.",
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
      "source": "def-multidimensional-rectangle-and-volume",
      "source_section": "Definition",
      "quote": "Fix a natural number $m\\ge1$. For $a,b\\in\\mathbb R^m$ with $a_j\\le b_j$ for $j<m$, define\n$$[a,b]:=\\{x\\in\\mathbb R^m:a_j\\le x_j\\le b_j\\ (j<m)\\},\\qquad \\operatorname{vol}[a,b]:=\\prod_{j<m}(b_j-a_j).$$\nThe product is the recursively defined finite product of [[def-finite-sum]]. The rectangle is **nondegenerate** when every $a_j<b_j$, and it is a **cube** when all side lengths are equal.\n\nEvery factor is nonnegative, so volume is nonnegative. For a coordinate index $r<m$, cutting at $c\\in[a_r,b_r]$ gives two rectangles whose volumes add to the original, by distributivity in that factor and [[lem-finite-sum-laws]]. Under the standard identification $\\mathbb R^1\\cong\\mathbb R$ ([[lem-metrics-on-rn]], [[def-p-norms-on-rn]]), this is the interval $[a_0,b_0]$ and its length.",
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
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-lebesgue-criterion-in-rn",
      "source_section": "Statement",
      "quote": "A bounded real function on a closed nondegenerate rectangle in $\\mathbb R^m$, $m\\ge1$, is Riemann integrable if and only if its discontinuity set is null.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-jordan-content-and-indicator-integrability",
      "source_section": "Statement",
      "quote": "A metric-bounded set $E\\subseteq\\mathbb R^m$ is Jordan measurable if and only\nif its indicator $1_E$ is Riemann integrable on a fixed nondegenerate bounding\nrectangle $Q$. In that case\n$$\\int_Q1_E=\\operatorname{cont}(E).$$",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1",
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Extend the zero extension on $Q_i$ further by zero to $Q$. Cut $Q$ at the lower and upper endpoint of $Q_i$ in each coordinate. The strict containment in [L1] and nondegeneracy of $Q_i$ make every cut strictly interior. On every added nondegenerate subrectangle the restriction is zero away from the finitely many coordinate faces of $Q_i$; only shared boundary points may retain nonzero values.",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Every bounded piece of a coordinate hyperplane has content zero: subdivide its bounded $(m-1)$-dimensional coordinate ranges into cubes of side at most $1/\\iota(N)$, and thicken the fixed coordinate by the same amount. The number of cubes grows at most as a fixed multiple of $\\iota(N)^{m-1}$, so their total $m$-volume is at most a fixed multiple of $1/\\iota(N)$, which can be made arbitrarily small ([[def-null-and-content-zero-in-rn]], [[cor-archimedean-reciprocal]]). Finite unions preserve this estimate. Thus the exceptional face set $H$ from step 1.1 is Jordan measurable with content zero, and [L3] gives $\\int 1_H=0$.",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "L3"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "On each added subrectangle the extended function is bounded and is zero off $H$, so its discontinuities lie in the null set $H$. It is integrable by [L3]. If $|f|\\le B$, then $|h|\\le B1_H$; monotonicity and the absolute-value estimate in [L2] give $\\left|\\int h\\right|\\le\\int|h|\\le B\\int1_H=0$. Hence every added subrectangle has integral $0$.",
      "step": "3.1",
      "inputs": [
        "L3",
        "L2",
        "step 1.1",
        "step 2.1"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "Repeated coordinate-slice additivity [L2] now says that the extension is integrable on $Q$ exactly when it is integrable on $Q_i$, and its integral equals the $Q_i$-integral because every added integral is $0$. Applying this to $i=1,2$ gives the same integrability decision and value in both rectangles.  ",
      "step": "4.1",
      "inputs": [
        "L2",
        "step 3.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "lem-jordan-set-integral-well-defined: the Statement fixes the displayed objects and has no conclusion depending on an unlicensed choice from an empty family: The definition of $\\int_E f$ is independent of the chosen bounding rectangle."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "lem-jordan-set-integral-well-defined: no independent zero-parameter boundary remains after the stated hypotheses and definitions; checked against the Statement: The definition of $\\int_E f$ is independent of the chosen bounding rectangle."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "lem-jordan-set-integral-well-defined: the assertion has no separate unit-size case; its quantified argument applies without a one-case split: The definition of $\\int_E f$ is independent of the chosen bounding rectangle."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "step 1.1: the proof explicitly handles or excludes the degenerate configuration relevant to the statement."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "step 1.1: the proof explicitly treats the endpoint, boundary, or radial-limit behaviour used by the assertion."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "lem-jordan-set-integral-well-defined: the proof uses only given objects, formulas, or universal instantiation and makes no choice from a possibly empty family; see Statement: The definition of $\\int_E f$ is independent of the chosen bounding rectangle."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "lem-jordan-set-integral-well-defined: the Statement is not an equivalence, so there is no forward implication obligation: The definition of $\\int_E f$ is independent of the chosen bounding rectangle."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "lem-jordan-set-integral-well-defined: the Statement is not an equivalence, so there is no reverse implication obligation: The definition of $\\int_E f$ is independent of the chosen bounding rectangle."
    }
  ]
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "lem-jordan-set-integral-well-defined",
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
    "source": "lem-jordan-set-integral-well-defined",
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
    "source": "lem-jordan-set-integral-well-defined",
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
    "source": "lem-jordan-set-integral-well-defined",
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
    "source": "lem-jordan-set-integral-well-defined",
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
    "source": "lem-jordan-set-integral-well-defined",
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
    "source": "lem-jordan-set-integral-well-defined",
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
    "source": "lem-jordan-set-integral-well-defined",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "cor-archimedean-reciprocal",
    "declared_target": "cor-archimedean-reciprocal",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
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

## Full exact-current text of every cited or declared item (8)

### `cor-archimedean-reciprocal`

````markdown
---
id: cor-archimedean-reciprocal
kind: corollary
title: "For every $\\varepsilon > 0$ in a complete ordered field there is a natural $n \\ge 1$ with $1/n < \\varepsilon$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-of-archimedean, lem-of-inverse-positive, def-complete-ordered-field, def-ordered-field, def-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (Thm 1.20(a) and its corollaries)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §5.4 (Prop. 5.4.12, the Archimedean property)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "UTSA Mathematics: The Archimedean property"
      url: "https://mathresearch.utsa.edu/wiki/index.php?title=Real_Numbers%3AArchimedean_Property"
---

## Statement

Let $F$ be a complete ordered field ([[def-complete-ordered-field]]) and let
$\varepsilon \in F$ with $\varepsilon > 0$. Then there is a natural number
$n \ge 1$ such that

$$\frac{1}{n \cdot 1_F} < \varepsilon ,$$

where $n \cdot 1_F$ is the canonical natural of $F$ ([[thm-of-archimedean]]) and
$1/(n \cdot 1_F)$ is its multiplicative inverse ([[def-field]]). As is standard
we abbreviate $n \cdot 1_F$ to $n$ and write the conclusion $1/n < \varepsilon$.

This is the **reciprocal form** of the Archimedean property.
[[thm-of-archimedean]] on its own delivers only the assertion that the canonical
naturals are cofinal, $x < n \cdot 1_F$; the form actually used in analysis, that
the reciprocals of the naturals get below every positive bound, is the statement
above, and it is recorded separately so that no proof has to reconstruct the
inversion step in passing.

## Facts & Assumptions

**Given:** A complete ordered field $F$ and an element $\varepsilon \in F$ with $\varepsilon > 0$.

[L1] Archimedean property: for every $x \in F$ there is a natural number $n \ge 1$ with $x < n \cdot 1_F$ ([[thm-of-archimedean]], [[def-complete-ordered-field]]).

[L2] Inverses and order: if $a > 0$ then $a^{-1} > 0$, and if $0 < a < b$ then $0 < b^{-1} < a^{-1}$ ([[lem-of-inverse-positive]], [[def-ordered-field]]).

[L3] Field arithmetic: an element $a$ with $a > 0$ is nonzero by trichotomy, hence has a multiplicative inverse $a^{-1}$, and $(a^{-1})^{-1} = a$ ([[def-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Since $\varepsilon > 0$, trichotomy gives $\varepsilon \ne 0$, so $\varepsilon^{-1}$ exists, and $\varepsilon^{-1} > 0$. [given, L2, L3]

2.1 Apply [L1] to $x = \varepsilon^{-1}$: fix a natural number $n \ge 1$ with $\varepsilon^{-1} < n \cdot 1_F$. [step 1.1, L1, choose]

3.1 Chaining the two displayed inequalities gives $0 < \varepsilon^{-1} < n \cdot 1_F$; in particular $n \cdot 1_F > 0$, so $n \cdot 1_F \ne 0$ and $1/(n \cdot 1_F)$ is defined. [step 1.1, step 2.1, L3]

4.1 Apply the second claim of [L2] with $a = \varepsilon^{-1}$ and $b = n \cdot 1_F$: $0 < (n \cdot 1_F)^{-1} < (\varepsilon^{-1})^{-1}$. [step 3.1, L2]

5.1 By [L3], $(\varepsilon^{-1})^{-1} = \varepsilon$, so the natural number $n \ge 1$ fixed in step 2.1 satisfies $1/(n \cdot 1_F) < \varepsilon$, which is the assertion. [step 4.1, L3] ∎

## Remarks

- **Monotonicity gives the eventual form for free.** If $m \ge n \ge 1$ then
  $m \cdot 1_F \ge n \cdot 1_F > 0$, because $k \mapsto k \cdot 1_F$ is strictly
  increasing on the naturals $\ge 1$ ([[lem-of-naturals-positive]]), and so
  $1/(m \cdot 1_F) \le 1/(n \cdot 1_F) < \varepsilon$ by [[lem-of-inverse-positive]]
  again. So the corollary yields not merely one index but a threshold: every
  $m \ge n$ satisfies $1/m < \varepsilon$. That one extra line is what a
  convergence proof needs, and it is left to the caller rather than folded into
  the statement, because the caller usually has a threshold of its own to combine
  it with.

- **Completeness is used only through [[thm-of-archimedean]].** Nothing here
  needs the least-upper-bound property directly. The corollary therefore holds
  verbatim in any Archimedean ordered field, in particular in $\mathbb{Q}$, and
  it fails in a non-Archimedean ordered field, where an infinitesimal
  $\varepsilon > 0$ is below every $1/n$ by construction.

- The equivalence is exact: the reciprocal form implies the cofinal form back
  again, since given $x > 0$ one applies it to $\varepsilon = 1/x$. The two are
  the same property written on the two sides of the inversion, and only the
  direction proved above is used in this library.
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

