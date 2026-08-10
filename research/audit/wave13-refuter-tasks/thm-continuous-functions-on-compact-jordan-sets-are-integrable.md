## Selection reasons

- critical risk (9): 9 declared dependencies; 4 cited facts; boundary-sensitive language; analytic limiting/completeness language
- top-20 manifest-edge consumer (9 outgoing relationships)

## Target item — `thm-continuous-functions-on-compact-jordan-sets-are-integrable`

Normalized current SHA-256: `077d278bda95cf675c132b9edde62e6aacf1e7d9ae3b6534819bc20442a2d4b8`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: thm-continuous-functions-on-compact-jordan-sets-are-integrable
kind: theorem
title: "A continuous real function on a compact Jordan measurable set is Riemann integrable over that set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-riemann-integral-over-a-jordan-set, lem-jordan-set-integral-well-defined, thm-jordan-boundary-criterion, thm-lebesgue-criterion-in-rn, def-metric-continuity, def-metric-interior-closure-boundary, def-metric-compactness, thm-extreme-value-metric, def-bounded-set]
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

Every continuous real function on a compact Jordan measurable set $E\subseteq\mathbb R^m$ is Riemann integrable over $E$.

## Facts & Assumptions

**Given:** Compact Jordan measurable $E$ and continuous $f:E\to\mathbb R$.

[L1] A continuous real function on a nonempty compact metric space is bounded ([[thm-extreme-value-metric]], [[def-bounded-set]]).

[L2] The boundary of $E$ is null ([[thm-jordan-boundary-criterion]]).

[L3] A bounded function on a rectangle is integrable exactly when its discontinuity set is null ([[thm-lebesgue-criterion-in-rn]]).

## Proof

**Proof technique:** direct.

1.1 If $E=\varnothing$, its zero extension is identically zero and the conclusion is immediate. Otherwise [L1] makes $f$ bounded. Choose a bounding rectangle and form its zero extension as in [[def-riemann-integral-over-a-jordan-set]].  [L1, choose]

2.1 The extension is continuous at every point of the interior of $E$, by continuity of $f$, and at every point outside the closure of $E$, because it is locally zero. Its discontinuities are therefore contained in $\partial E$.   [step 1.1, given]

3.1 The containing boundary is null by [L2], so subset closure and [L3] make the extension integrable. Bounding-rectangle independence is [[lem-jordan-set-integral-well-defined]].  [step 2.1, L2, L3] ∎
````

## Wave 13 provenance row

```json
{
  "id": "thm-continuous-functions-on-compact-jordan-sets-are-integrable",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://www.jirka.org/ra/html/sec_jordansets.html"
  ],
  "rationale": "The source states integrability of bounded continuous functions on bounded Jordan sets. The item uses compactness to obtain boundedness and adapts the zero-extension discontinuity proof.",
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
      "source": "thm-extreme-value-metric",
      "source_section": "Statement",
      "quote": "Let $(X,d)$ be a nonempty compact metric space ([[def-metric-compactness]],\n[[def-metric-space]]) and let $f : X \\to \\mathbb{R}$ be continuous\n([[def-metric-continuity]]), $\\mathbb{R}$ carrying its usual metric\n$d_{\\mathbb{R}}(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]]). Then the\nimage $f[X]$ is bounded above and below ([[def-bounded-set]]), and it has a\nmaximum and a minimum ([[def-max-min]]): there are points\n$x_{\\max}, x_{\\min} \\in X$ with\n\n$$f(x_{\\min}) \\;\\le\\; f(x) \\;\\le\\; f(x_{\\max}) \\qquad \\text{for every } x \\in X,$$\n\nand then $f(x_{\\max}) = \\sup f[X]$ and $f(x_{\\min}) = \\inf f[X]$\n([[def-complete-ordered-field]], [[def-infimum]]).\n\nNonemptiness of $X$ is a hypothesis and not an oversight: for $X = \\emptyset$ the\nimage is empty and has neither a supremum nor a maximum. No choice principle is\nused.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-bounded-set",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ denotes the complete ordered field\n([[def-complete-ordered-field]]) and $S \\subseteq \\mathbb{R}$ is a subset of it.\n\nThe notions **upper bound** and **bounded above** are already fixed by\n[[def-complete-ordered-field]] and are only recalled here, never redefined:\n$u \\in \\mathbb{R}$ is an *upper bound* of $S$ if $s \\le u$ for all $s \\in S$, and\n$S$ is *bounded above* if it has at least one upper bound. The dual notions are:\n\n- $\\ell \\in \\mathbb{R}$ is a **lower bound** of $S$ if $\\ell \\le s$ for all $s \\in S$.\n- $S$ is **bounded below** if it has at least one lower bound.\n- $S$ is **bounded** if it is both bounded above and bounded below, that is, if\n  there are $\\ell, u \\in \\mathbb{R}$ with $\\ell \\le s \\le u$ for every $s \\in S$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-jordan-boundary-criterion",
      "source_section": "Statement",
      "quote": "A metric-bounded set $E\\subseteq\\mathbb R^m$ is Jordan measurable if and only\nif its boundary $\\partial E$ is null, equivalently has content zero.",
      "quote_selection": "full-source-section",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-lebesgue-criterion-in-rn",
      "source_section": "Statement",
      "quote": "A bounded real function on a closed nondegenerate rectangle in $\\mathbb R^m$, $m\\ge1$, is Riemann integrable if and only if its discontinuity set is null.",
      "quote_selection": "full-source-section",
      "uses": [
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "If $E=\\varnothing$, its zero extension is identically zero and the conclusion is immediate. Otherwise [L1] makes $f$ bounded. Choose a bounding rectangle and form its zero extension as in [[def-riemann-integral-over-a-jordan-set]]. ",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "The extension is continuous at every point of the interior of $E$, by continuity of $f$, and at every point outside the closure of $E$, because it is locally zero. Its discontinuities are therefore contained in $\\partial E$.  ",
      "step": "2.1",
      "inputs": [
        "step 1.1"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "The containing boundary is null by [L2], so subset closure and [L3] make the extension integrable. Bounding-rectangle independence is [[lem-jordan-set-integral-well-defined]]. ",
      "step": "3.1",
      "inputs": [
        "L2",
        "L3",
        "step 2.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "step 1.1: the proof explicitly disposes of the empty or zero-length family case."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 1.1: the proof explicitly handles the zero-valued parameter or zero object used by the statement."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "thm-continuous-functions-on-compact-jordan-sets-are-integrable: the assertion has no separate unit-size case; its quantified argument applies without a one-case split: Every continuous real function on a compact Jordan measurable set $E\\subseteq\\mathbb R^m$ is Riemann integrable over $E$."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "thm-continuous-functions-on-compact-jordan-sets-are-integrable: no geometric or algebraic degeneracy changes the asserted conclusion; checked against the Statement: Every continuous real function on a compact Jordan measurable set $E\\subseteq\\mathbb R^m$ is Riemann integrable over $E$."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "step 3.1: the proof explicitly treats the endpoint, boundary, or radial-limit behaviour used by the assertion."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 1.1: every witness selected there is drawn after the proof establishes the relevant positivity, existence, or nonemptiness condition."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "thm-continuous-functions-on-compact-jordan-sets-are-integrable: the Statement is not an equivalence, so there is no forward implication obligation: Every continuous real function on a compact Jordan measurable set $E\\subseteq\\mathbb R^m$ is Riemann integrable over $E$."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "thm-continuous-functions-on-compact-jordan-sets-are-integrable: the Statement is not an equivalence, so there is no reverse implication obligation: Every continuous real function on a compact Jordan measurable set $E\\subseteq\\mathbb R^m$ is Riemann integrable over $E$."
    }
  ]
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "thm-continuous-functions-on-compact-jordan-sets-are-integrable",
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
    "source": "thm-continuous-functions-on-compact-jordan-sets-are-integrable",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "lem-jordan-set-integral-well-defined",
    "declared_target": "lem-jordan-set-integral-well-defined",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-continuous-functions-on-compact-jordan-sets-are-integrable",
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
    "source": "thm-continuous-functions-on-compact-jordan-sets-are-integrable",
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
    "source": "thm-continuous-functions-on-compact-jordan-sets-are-integrable",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
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
    "source": "thm-continuous-functions-on-compact-jordan-sets-are-integrable",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "def-metric-interior-closure-boundary",
    "declared_target": "def-metric-interior-closure-boundary",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-continuous-functions-on-compact-jordan-sets-are-integrable",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
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
    "source": "thm-continuous-functions-on-compact-jordan-sets-are-integrable",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "thm-extreme-value-metric",
    "declared_target": "thm-extreme-value-metric",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness-in-metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-continuous-functions-on-compact-jordan-sets-are-integrable",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "def-bounded-set",
    "declared_target": "def-bounded-set",
    "target_statement_provenance": "literature-derived",
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

## Full exact-current text of every cited or declared item (9)

### `def-bounded-set`

````markdown
---
id: def-bounded-set
kind: definition
title: "Lower bound, bounded below, bounded set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
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
    - title: "Upper and lower bounds (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Upper_and_lower_bounds"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ denotes the complete ordered field
([[def-complete-ordered-field]]) and $S \subseteq \mathbb{R}$ is a subset of it.

The notions **upper bound** and **bounded above** are already fixed by
[[def-complete-ordered-field]] and are only recalled here, never redefined:
$u \in \mathbb{R}$ is an *upper bound* of $S$ if $s \le u$ for all $s \in S$, and
$S$ is *bounded above* if it has at least one upper bound. The dual notions are:

- $\ell \in \mathbb{R}$ is a **lower bound** of $S$ if $\ell \le s$ for all $s \in S$.
- $S$ is **bounded below** if it has at least one lower bound.
- $S$ is **bounded** if it is both bounded above and bounded below, that is, if
  there are $\ell, u \in \mathbb{R}$ with $\ell \le s \le u$ for every $s \in S$.

## Remarks

- A bound is an element of $\mathbb{R}$ and is not required to lie in $S$. A
  bound that does lie in $S$ is a maximum or a minimum ([[def-max-min]]), and
  that is a strictly stronger condition ([[fs-sup-belongs-to-set]]).
- Bounds come in half-lines: if $\ell$ is a lower bound of $S$ then so is every
  $\ell'' \le \ell$, and if $u$ is an upper bound then so is every $u'' \ge u$.
  Consequently a set that has one bound of a given kind has infinitely many, and
  the interesting question is whether the collection of them has a best element,
  which is what a supremum ([[def-complete-ordered-field]]) or an infimum
  ([[def-infimum]]) is.
- Bounded above and bounded below are independent conditions. The set
  $A = \{\, n \cdot 1_{\mathbb{R}} : n \ge 1 \,\}$ of canonical naturals of
  $\mathbb{R}$ is bounded below by $0$ ([[lem-of-naturals-positive]]) and is not
  bounded above ([[thm-of-archimedean]]); its reflection $-A$ is bounded above
  and not bounded below ([[lem-reflection]]).
- The empty set is bounded, and vacuously so: every real number is both an upper
  bound and a lower bound of $\emptyset$, since the defining condition quantifies
  over no elements. Having bounds is therefore much weaker than having a least
  upper bound or a greatest lower bound ([[fs-every-set-has-sup]]).
````

### `def-metric-compactness`

````markdown
---
id: def-metric-compactness
kind: definition
title: "Open cover, subcover, compact metric space, and compact subset of a metric space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-space, def-metric-topology, def-metric-ball, def-isometry-and-metric-embedding, def-countable, lem-subset-of-countable]
justified_by: []
aliases: [def-compact-metric-space]
landmark: true
short: "open cover, compact metric space"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Cover (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cover_(topology)"
    - title: "J. Munkres, Topology, 2nd ed., §26"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]), with open sets as in
[[def-metric-topology]] and balls as in [[def-metric-ball]].

- An **open cover** of $(X,d)$ is a family $\mathcal{U}$ of open subsets of $X$
  with $X = \bigcup \mathcal{U}$, where
  $\bigcup \mathcal{U} = \{\, x \in X : x \in U \text{ for some } U \in \mathcal{U} \,\}$.
- A **subcover** of $\mathcal{U}$ is a subfamily
  $\mathcal{V} \subseteq \mathcal{U}$ that is itself an open cover.
- A family $\mathcal{V}$ of sets is **finite** when $\mathcal{V} = \emptyset$ or
  there are $n \in \mathbb{N}$ and sets $V_0, \dots, V_n$ with
  $\mathcal{V} = \{V_0, \dots, V_n\}$; repetitions in the list are allowed and
  harmless.
- $(X,d)$ is **compact** when every open cover of it has a finite subcover: for
  every open cover $\mathcal{U}$, either $X = \emptyset$ and the empty subfamily
  covers it, or there are $n \in \mathbb{N}$ and
  $U_0, \dots, U_n \in \mathcal{U}$ with
  $$X = U_0 \cup \dots \cup U_n .$$
- A subset $A \subseteq X$ is a **compact subset** of $X$ when the metric
  subspace $(A, d_A)$ is a compact metric space, $d_A$ being the restriction of
  $d$ to $A \times A$ ([[def-isometry-and-metric-embedding]]).

**Compactness of a subset is defined intrinsically, and only intrinsically.**
The last clause speaks about the subspace $(A,d_A)$ and its own open sets, not
about families of open subsets of the ambient $X$. The two readings do agree,
but that is a theorem and not a convention: it is
[[lem-compactness-is-intrinsic]], and no item of this library may use the
ambient reading without citing it. Taking the intrinsic reading as the
definition is what makes "compact" a property of the metric space $(A,d_A)$
alone, so that a set compact in one ambient space is compact in every other one
containing it isometrically.

**The empty space is compact**, since the empty subfamily of any family covers
it; this is the reason the clause above is written with the two cases. The
one-point space is compact too, and so is every space listed as
$\{x_0, \dots, x_n\}$: given a cover, each $x_i$ lies in some member, and
finitely many members chosen in this way already cover.

**The finiteness convention, and how it is used both ways.** "Finite" above is
the listing form, matching the finite lists of
[[def-finite-intersection-property]]. It agrees with the definition of
finiteness by equinumerosity with a natural number ([[def-countable]]), and
both directions of the agreement are available and are used below:

- A nonempty finite set $F$ in the sense of [[def-countable]] satisfies
  $F \approx m$ for some $m \ge 1$, and a bijection $m \to F$ is exactly a
  listing $F = \{a_0, \dots, a_{m-1}\}$.
- Conversely a set listed as $A = \{a_0, \dots, a_n\}$, that is the image of a
  function $a$ with domain $\sigma(n)$, is finite in the sense of
  [[def-countable]]: the map sending $x \in A$ to the least $i \le n$ with
  $a_i = x$ is an injection of $A$ into $\sigma(n)$, so $A$ is equinumerous with
  a subset of $\mathbb{N}$ bounded above, and such a subset is finite
  ([[lem-subset-of-countable]]).

Neither direction uses a choice principle: the second selects nothing, taking a
least index instead.

## Remarks

**Why open covers rather than closed ones.** Nothing in the definition would
break if $\mathcal{U}$ were allowed to consist of arbitrary sets, but the
resulting notion would be uninteresting: every space is covered by its
singletons, and only a finite space would survive. Openness of the members is
what makes the condition a genuine restriction, and it is what
[[lem-compactness-is-intrinsic]] has to keep track of when the ambient space
changes.

**A warning about the word "cover".** A family may cover $A \subseteq X$ without
being a family of subsets of $A$: the members are open subsets of $X$ and their
union merely contains $A$. That is the ambient reading, and it is a different
statement from "$\mathcal{U}$ is an open cover of the metric space $(A,d_A)$",
whose members are open subsets of $A$. Which of the two is meant is written out
everywhere on this page.
````

### `def-metric-continuity`

````markdown
---
id: def-metric-continuity
kind: definition
title: "Continuity of a map between metric spaces, at a point and globally, in the $\\varepsilon$-$\\delta$ form"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-metric-space, def-metric-ball]
justified_by: []
aliases: [def-continuous-map-metric]
landmark: true
short: "$\\varepsilon$-$\\delta$ continuity"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $(X, d_X)$ and $(Y, d_Y)$ be metric spaces ([[def-metric-space]]), let
$f : X \to Y$ be a function and let $a \in X$.

$f$ is **continuous at $a$** if for every real $\varepsilon > 0$ there is a real
$\delta > 0$ such that

$$d_X(x,a) < \delta \;\Longrightarrow\; d_Y\big(f(x), f(a)\big) < \varepsilon \qquad \text{for all } x \in X .$$

$f$ is **continuous** (globally, or on $X$) if it is continuous at every point of
$X$.

**The same condition in balls.** Since $d_X(x,a) < \delta$ says $x \in B_X(a,\delta)$
and $d_Y(f(x),f(a)) < \varepsilon$ says $f(x) \in B_Y(f(a),\varepsilon)$
([[def-metric-ball]]), continuity at $a$ reads: for every $\varepsilon > 0$ there
is $\delta > 0$ with

$$f\big[B_X(a,\delta)\big] \subseteq B_Y\big(f(a), \varepsilon\big).$$

Both forms are used below and are the same statement written twice.

**Both metrics matter, and both are named.** Continuity is a property of the
triple $(d_X, d_Y, f)$, not of $f$ alone. When several metrics on the same
underlying sets are in play, as in [[def-equivalent-metrics]], the metrics are
always written out.

**Quantifier order.** The $\delta$ is allowed to depend on $\varepsilon$ **and on
the point $a$**. Requiring one $\delta$ to work at every point simultaneously is
a strictly stronger condition, uniform continuity; it is defined on a later page
of this library, and at this point in the reading order it is written out in full
where needed ([[def-equivalent-metrics]]).

## Remarks

- **Nothing is claimed here beyond the definition.** That continuity is
  equivalent to preimages of open sets being open, to preimages of closed sets
  being closed, to sequential continuity, and to
  $f[\overline{A}] \subseteq \overline{f[A]}$, is the theorem
  [[thm-metric-continuity-characterisations]].
- **Continuity at a point is a local condition**: it depends only on the values
  of $f$ on any one ball around $a$, since the condition may always be tested
  with a smaller $\delta$.
- Every isometric embedding is continuous, with $\delta = \varepsilon$
  ([[def-isometry-and-metric-embedding]], [[lem-isometry-is-an-embedding]]), and
  so is every map that does not increase distances, such as $u \mapsto d(u,A)$
  ([[lem-distance-to-set-is-lipschitz]]).
````

### `def-metric-interior-closure-boundary`

````markdown
---
id: def-metric-interior-closure-boundary
kind: definition
title: "Interior, closure, boundary, limit point, isolated point and dense subset of a metric space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-topology, def-metric-ball, thm-metric-open-set-algebra, def-metric-space]
justified_by: []
aliases: [def-closure, def-interior, def-boundary, def-limit-point, def-dense]
landmark: true
short: "$\\operatorname{int} A$, $\\overline{A}$, $\\partial A$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Closure (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closure_(topology)"
    - title: "Interior (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interior_(topology)"
    - title: "Limit point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_point"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Boundary (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Boundary_(topology)"
    - title: "Isolated point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Isolated_point"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]), let $A \subseteq X$ and let
$x \in X$. Balls are as in [[def-metric-ball]] and open sets as in
[[def-metric-topology]]; recall that a real $r$ written as a radius is always
$> 0$.

- $x$ is an **interior point** of $A$ if $B(x,r) \subseteq A$ for some $r$. The
  set of interior points is the **interior** $\operatorname{int}(A)$.
- $x$ is an **adherent point** of $A$ if $B(x,r) \cap A \ne \emptyset$ for every
  $r$. The set of adherent points is the **closure** $\overline{A}$.
- $x$ is a **limit point** (accumulation point) of $A$ if
  $B(x,r) \cap (A \setminus \{x\}) \ne \emptyset$ for every $r$. The set of limit
  points is the **derived set** $A'$.
- $x$ is an **isolated point** of $A$ if $x \in A$ and $B(x,r) \cap A = \{x\}$
  for some $r$.
- The **boundary** of $A$ is $\partial A := \overline{A} \setminus \operatorname{int}(A)$.
- $A$ is **dense** in $X$ if $\overline{A} = X$.

**The interior is open, and it is the largest open subset of $A$.** If
$x \in \operatorname{int}(A)$, fix $r$ with $B(x,r) \subseteq A$; the ball
$B(x,r)$ is itself open ([[thm-metric-open-set-algebra]]), so every
$y \in B(x,r)$ has some $s$ with $B(y,s) \subseteq B(x,r) \subseteq A$, which
puts $y$ in $\operatorname{int}(A)$. Hence $B(x,r) \subseteq \operatorname{int}(A)$
and $\operatorname{int}(A)$ is open. It is contained in $A$, since
$x \in B(x,r) \subseteq A$ for an interior point $x$; and if $V \subseteq A$ is
open then every $v \in V$ has a ball inside $V \subseteq A$, so
$V \subseteq \operatorname{int}(A)$.

**Two descriptions of the boundary agree.** $x \in \partial A$ says that every
ball around $x$ meets $A$ and that no ball around $x$ is contained in $A$; the
second half says exactly that every ball around $x$ meets $X \setminus A$. So

$$\partial A = \{\, x \in X : B(x,r) \cap A \ne \emptyset \text{ and } B(x,r) \cap (X \setminus A) \ne \emptyset \text{ for every } r \,\},$$

from which $\partial A = \partial(X \setminus A)$ is immediate.

**Elementary containments, straight from the definitions.** $A \subseteq \overline{A}$,
because $x \in A$ lies in every $B(x,r) \cap A$; $A' \subseteq \overline{A}$,
because a ball meeting $A \setminus \{x\}$ meets $A$; and
$\operatorname{int}(A) \subseteq A \subseteq \overline{A}$. A point of $A$ is
either isolated in $A$ or a limit point of $A$, and not both, according to
whether some ball meets $A$ only in $x$.

## Remarks

- **The closure is defined here by adherent points and by nothing else.** That it
  is closed, that it is the smallest closed set containing $A$, that for nonempty
  $A$ it is $\{x : d(x,A) = 0\}$, and that it consists of the limits of sequences
  from $A$, are theorems ([[thm-metric-closure-characterisation]],
  [[thm-metric-sequential-closure]]) and are proved from this definition.
- **Limit point of a set is not the same notion as subsequential limit of a
  sequence** ([[def-subsequential-limit]]), which this library deliberately keeps
  under a different name: the constant sequence $x_k = 0$ has $0$ as a
  subsequential limit, while its set of values $\{0\}$ has no limit point at all.
- **Dense is relative to the ambient space**, and the ambient space is part of
  the data: $A$ is dense in $X$ when $\overline{A} = X$, with $\overline{A}$
  computed in $(X,d)$. The same $A$ inside a larger space is a different
  question.
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

### `lem-jordan-set-integral-well-defined`

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

### `thm-extreme-value-metric`

````markdown
---
id: thm-extreme-value-metric
kind: theorem
title: "A continuous real-valued function on a nonempty compact metric space is bounded and attains a greatest and a least value"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-continuous-image-of-a-compact-space-is-compact, thm-compact-subset-is-closed-and-bounded, lem-compactness-is-intrinsic, lem-real-line-is-a-metric-space, def-metric-continuity, def-metric-compactness, def-bounded-set, def-infimum, lem-sup-epsilon, lem-inf-epsilon, def-max-min, def-complete-ordered-field, thm-metric-closure-characterisation, def-metric-interior-closure-boundary, def-metric-topology, def-metric-ball, def-interval, def-metric-bounded-diameter, def-isometry-and-metric-embedding, def-metric-space]
justified_by: []
forward_refs: [cex-evt-fails-without-compactness]
aliases: [thm-evt-metric]
landmark: true
short: "extreme value theorem (metric)"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Extreme value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extreme_value_theorem"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a nonempty compact metric space ([[def-metric-compactness]],
[[def-metric-space]]) and let $f : X \to \mathbb{R}$ be continuous
([[def-metric-continuity]]), $\mathbb{R}$ carrying its usual metric
$d_{\mathbb{R}}(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]]). Then the
image $f[X]$ is bounded above and below ([[def-bounded-set]]), and it has a
maximum and a minimum ([[def-max-min]]): there are points
$x_{\max}, x_{\min} \in X$ with

$$f(x_{\min}) \;\le\; f(x) \;\le\; f(x_{\max}) \qquad \text{for every } x \in X,$$

and then $f(x_{\max}) = \sup f[X]$ and $f(x_{\min}) = \inf f[X]$
([[def-complete-ordered-field]], [[def-infimum]]).

Nonemptiness of $X$ is a hypothesis and not an oversight: for $X = \emptyset$ the
image is empty and has neither a supremum nor a maximum. No choice principle is
used.

## Facts & Assumptions

**Given:** A nonempty compact metric space $(X,d)$ and a continuous $f : X \to \mathbb{R}$.

[L1] The image of a compact metric space under a continuous map is a compact subset of the codomain ([[thm-continuous-image-of-a-compact-space-is-compact]]).

[L2] A compact subset of a metric space is closed and bounded ([[thm-compact-subset-is-closed-and-bounded]], [[lem-compactness-is-intrinsic]], [[def-metric-bounded-diameter]]).

[L3] In $(\mathbb{R}, d_{\mathbb{R}})$ the ball $B(x_0,\rho)$ is the interval $(x_0-\rho, x_0+\rho)$ ([[lem-real-line-is-a-metric-space]], [[def-metric-ball]], [[def-interval]]).

[L4] A nonempty subset of $\mathbb{R}$ that is bounded above has a supremum, and one bounded below has an infimum ([[def-complete-ordered-field]], [[def-infimum]], [[def-bounded-set]]).

[L5] For $S$ nonempty and bounded above with supremum $u$: for every real $\varepsilon > 0$ there is $s \in S$ with $u - \varepsilon < s \le u$; dually for the infimum ([[lem-sup-epsilon]], [[lem-inf-epsilon]]).

[L6] $x$ lies in the closure of $S$ exactly when every ball around $x$ meets $S$, and a closed set contains its closure ([[def-metric-interior-closure-boundary]], [[thm-metric-closure-characterisation]], [[def-metric-topology]]).

[L7] A subset of a metric space is compact exactly when the corresponding metric subspace is compact, the subspace metric being the restriction ([[def-metric-compactness]], [[def-isometry-and-metric-embedding]]).

## Proof

**Proof technique:** direct.

1.1 $f[X]$ is a compact subset of $(\mathbb{R}, d_{\mathbb{R}})$, and it is nonempty because $X$ is. [L1, L7]

2.1 So $f[X]$ is closed in $\mathbb{R}$ and bounded as a subset of the metric space $(\mathbb{R},d_{\mathbb{R}})$: there are $x_0 \in \mathbb{R}$ and a real $\rho > 0$ with $f[X] \subseteq B(x_0,\rho) = (x_0-\rho,\ x_0+\rho)$. [L2, L3, step 1.1]

3.1 Hence $x_0 + \rho$ is an upper bound and $x_0 - \rho$ a lower bound of $f[X]$, so $f[X]$ is bounded above and below, and being nonempty it has a supremum $u$ and an infimum $\ell$. [L4, step 2.1]

4.1 For every real $\varepsilon > 0$ there is $t \in f[X]$ with $u - \varepsilon < t \le u$, so $|t - u| < \varepsilon$ and $t \in B(u,\varepsilon) \cap f[X]$; therefore every ball around $u$ meets $f[X]$ and $u$ lies in the closure of $f[X]$. [L3, L5, L6, step 3.1]

5.1 Since $f[X]$ is closed, $u \in f[X]$; so $u$ is a member of $f[X]$ bounding it above, that is $u = \max f[X]$, and $u = f(x_{\max})$ for some $x_{\max} \in X$. [L6, step 2.1, step 4.1]

6.1 The same argument with $\ell$ in place of $u$, using the infimum form of step 4.1, gives $\ell \in f[X]$, so $\ell = \min f[X]$ and $\ell = f(x_{\min})$ for some $x_{\min} \in X$. [L5, L6, step 3.1, step 5.1]

7.1 For every $x \in X$ the value $f(x)$ lies in $f[X]$, hence $f(x_{\min}) = \ell \le f(x) \le u = f(x_{\max})$, which is the assertion, with $f(x_{\max}) = \sup f[X]$ and $f(x_{\min}) = \inf f[X]$. [L4, step 3.1, step 5.1, step 6.1] ∎

## Remarks

**Compactness is what is used, not boundedness of the domain.** A bounded non-compact domain is not enough: on the interval $(0,1)$ the identity map is continuous and bounded with no greatest value, and $x \mapsto 1/x$ is continuous and unbounded ([[cex-evt-fails-without-compactness]]).

**Why the supremum has to be shown to be attained at all.** $\sup f[X]$ exists as soon as $f[X]$ is nonempty and bounded above, which needs only boundedness; what compactness adds is that $f[X]$ is closed, and a closed set contains the supremum it approaches. Steps 4.1 and 5.1 are exactly that passage, and they are where the theorem is more than the least-upper-bound property.
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
  statement: ai-altered
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

