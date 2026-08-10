## Selection reasons

- critical risk (8): 6 declared dependencies; 3 cited facts; biconditional / both-direction claim; boundary-sensitive language

## Target item — `lem-oscillation-characterisation-in-rn`

Normalized current SHA-256: `af3d9f6455c65bb75578cffc2d426d7eb75f6fc2a3807fa125a6f9182c569398`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: lem-oscillation-characterisation-in-rn
kind: lemma
title: "A function on a subset of $\\mathbb{R}^m$ is continuous at $x$ iff its oscillation there is $0$, and every oscillation superlevel set is closed"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-oscillation-in-rn, def-metric-continuity, def-metric-ball, def-metric-topology, lem-p-norms-are-norms-and-induce-the-published-metrics, def-bounded-set]
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

For $f:A\to\mathbb R$, $f$ is continuous at $c\in A$ if and only if $\omega_f(c)=0$. If $f$ is bounded, then for every $\varepsilon>0$, the relative superlevel set $\{c\in A:\omega_f(c)\ge\varepsilon\}$ is closed in $A$.

## Facts & Assumptions

**Given:** $f,A,c$.

[L1] Metric continuity and balls are [[def-metric-continuity]] and [[def-metric-ball]].

[L2] Oscillation is [[def-oscillation-in-rn]].

## Proof

**Proof technique:** direct.

1.1 If $f$ is continuous at $c$, choose a ball on which $|f(x)-f(c)|<\varepsilon/3$; pairwise differences are then below $2\varepsilon/3$, so the ball oscillation is at most $2\varepsilon/3<\varepsilon$ and $\omega_f(c)=0$.  [L1, L2]

1.2 If $\omega_f(c)=0$, choose $r$ with ball oscillation below $\varepsilon$. Holding one point at $c$ gives $|f(x)-f(c)|<\varepsilon$, proving continuity.  [L1, L2]

1.3 If $\omega_f(c)<\varepsilon$, choose $r$ with $\omega_f(A\cap B(c,r))<\varepsilon$. Every $d\in A\cap B(c,r/2)$ has a sufficiently small ball contained in $B(c,r)$, so $\omega_f(d)<\varepsilon$. Thus the sublevel set is relatively open.   [L1, L2, given]

2.1 Steps 1.1 and 1.2 give the equivalence; step 1.3 makes the complementary superlevel set closed.   [step 1.1, step 1.2, step 1.3, given] ∎
````

## Wave 13 provenance row

```json
{
  "id": "lem-oscillation-characterisation-in-rn",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://www.jirka.org/ra/html/sec_riemannlebesgue.html"
  ],
  "rationale": "The source states continuity iff point oscillation is zero and closedness of positive oscillation superlevels. The item proves the same result under its extended-real oscillation convention.",
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
      "source": "def-metric-continuity",
      "source_section": "Definition",
      "quote": "Let $(X, d_X)$ and $(Y, d_Y)$ be metric spaces ([[def-metric-space]]), let\n$f : X \\to Y$ be a function and let $a \\in X$.\n\n$f$ is **continuous at $a$** if for every real $\\varepsilon > 0$ there is a real\n$\\delta > 0$ such that\n\n$$d_X(x,a) < \\delta \\;\\Longrightarrow\\; d_Y\\big(f(x), f(a)\\big) < \\varepsilon \\qquad \\text{for all } x \\in X .$$\n\n$f$ is **continuous** (globally, or on $X$) if it is continuous at every point of\n$X$.\n\n**The same condition in balls.** Since $d_X(x,a) < \\delta$ says $x \\in B_X(a,\\delta)$\nand $d_Y(f(x),f(a)) < \\varepsilon$ says $f(x) \\in B_Y(f(a),\\varepsilon)$\n([[def-metric-ball]]), continuity at $a$ reads: for every $\\varepsilon > 0$ there\nis $\\delta > 0$ with\n\n$$f\\big[B_X(a,\\delta)\\big] \\subseteq B_Y\\big(f(a), \\varepsilon\\big).$$\n\nBoth forms are used below and are the same statement written twice.\n\n**Both metrics matter, and both are named.** Continuity is a property of the\ntriple $(d_X, d_Y, f)$, not of $f$ alone. When several metrics on the same\nunderlying sets are in play, as in [[def-equivalent-metrics]], the metrics are\nalways written out.\n\n**Quantifier order.** The $\\delta$ is allowed to depend on $\\varepsilon$ **and on\nthe point $a$**. Requiring one $\\delta$ to work at every point simultaneously is\na strictly stronger condition, uniform continuity; it is defined on a later page\nof this library, and at this point in the reading order it is written out in full\nwhere needed ([[def-equivalent-metrics]]).",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2",
        "1.3"
      ]
    },
    {
      "fact": "L1",
      "source": "def-metric-ball",
      "source_section": "Definition",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]), let $x \\in X$ and let\n$r \\in \\mathbb{R}$ with $r > 0$ ([[def-real-order]]). Define\n\n$$B(x,r) := \\{\\, y \\in X : d(x,y) < r \\,\\}, \\qquad \\bar B(x,r) := \\{\\, y \\in X : d(x,y) \\le r \\,\\}, \\qquad S(x,r) := \\{\\, y \\in X : d(x,y) = r \\,\\}.$$\n\n$B(x,r)$ is the **open ball**, $\\bar B(x,r)$ the **closed ball** and $S(x,r)$ the\n**sphere** of **centre** $x$ and **radius** $r$. The radius is always a strictly\npositive real; a ball of radius $0$ or of negative radius is never written in\nthis library.\n\n**Immediate consequences of the definitions.** For every $x \\in X$ and $r > 0$:\n\n- $x \\in B(x,r)$, because $d(x,x) = 0 < r$ (axiom (M1) of [[def-metric-space]]);\n  in particular open and closed balls are nonempty.\n- $B(x,r) \\subseteq \\bar B(x,r)$ and $S(x,r) \\subseteq \\bar B(x,r)$, and\n  $\\bar B(x,r)$ is the disjoint union of $B(x,r)$ and $S(x,r)$, by trichotomy of\n  the order of $\\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]):\n  each $y$ satisfies exactly one of $d(x,y) < r$, $d(x,y) = r$, $d(x,y) > r$.\n- If $0 < s \\le r$ then $B(x,s) \\subseteq B(x,r)$ and\n  $\\bar B(x,s) \\subseteq \\bar B(x,r)$, by transitivity of the order.\n- Nonnegativity of the metric ([[lem-metric-nonnegativity]]) is what forces the\n  radius convention, and it forces it for the **open** ball only: if $r \\le 0$\n  then $B(x,r) = \\{y : d(x,y) < r\\}$ is empty, because $d(x,y) \\ge 0 \\ge r$\n  for every $y$. The other two sets behave differently at $r = 0$, and the\n  convention $r > 0$ excludes them for uniformity rather than for emptiness:\n  $\\bar B(x,0) = S(x,0) = \\{x\\}$, since $d(x,y) \\le 0$ together with\n  $d(x,y) \\ge 0$ gives $d(x,y) = 0$ and hence $y = x$ by (M1). For $r < 0$ all\n  three sets are empty.\n\n**A sphere may be empty, and so the three sets are not on a par.** For $r > 0$\nthe open and closed balls always contain $x$, but nothing in the definition\nproduces a point at distance exactly $r$ from $x$. If a metric takes only the\nvalues $0$ and $1$, as the discrete metric on the companion page does, then\n$S(x,2) = \\emptyset$ while $B(x,2) = \\bar B(x,2)$ is the whole space. So\nnonemptiness of a sphere is never available by convention: where it is used, it\nis proved.\n\n**The ambient space is part of the notation.** $B(x,r)$ depends on $(X,d)$ and\nnot on $x$ and $r$ alone. When more than one space or more than one metric is in\nplay we write $B_X(x,r)$, or $B_d(x,r)$, and likewise for $\\bar B$ and $S$. This\nmatters as soon as subspaces appear ([[def-isometry-and-metric-embedding]]): a\nball of a subspace is the trace on it of a ball of the ambient space, and the two\nare different sets.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2",
        "1.3"
      ]
    },
    {
      "fact": "L2",
      "source": "def-oscillation-in-rn",
      "source_section": "Definition",
      "quote": "Let $f:A\\to\\mathbb R$, $A\\subseteq\\mathbb R^m$. For $S\\subseteq A$, define\n$$\\omega_f(S):=\\sup_{\\overline{\\mathbb R}}\\{|f(x)-f(y)|:x,y\\in S\\},$$\nwith value $0$ when $S=\\varnothing$. For $c\\in A$, define\n$$\\omega_f(c):=\\inf_{r>0}\\omega_f(A\\cap B(c,r)).$$\nThe extended supremum exists by [[def-extended-reals]] and [[lem-extended-reals-complete]]; for bounded $f$ all values are finite. Balls are [[def-metric-ball]] for the Euclidean metric ([[lem-metrics-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]]).\n\nIf $S\\subseteq T$, then $\\omega_f(S)\\le\\omega_f(T)$, directly from the supremum definition; hence the ball oscillations decrease as the radius shrinks and the infimum is well posed ([[def-infimum]], [[lem-of-abs-value]]). At $m=1$ this agrees with [[def-oscillation]] on every nonempty set; only the empty-set convention differs, being $0$ here and $-\\infty$ there.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2",
        "1.3"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "If $f$ is continuous at $c$, choose a ball on which $|f(x)-f(c)|<\\varepsilon/3$; pairwise differences are then below $2\\varepsilon/3$, so the ball oscillation is at most $2\\varepsilon/3<\\varepsilon$ and $\\omega_f(c)=0$. ",
      "step": "1.1",
      "inputs": [
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "If $\\omega_f(c)=0$, choose $r$ with ball oscillation below $\\varepsilon$. Holding one point at $c$ gives $|f(x)-f(c)|<\\varepsilon$, proving continuity. ",
      "step": "1.2",
      "inputs": [
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-1.3",
      "claim": "If $\\omega_f(c)<\\varepsilon$, choose $r$ with $\\omega_f(A\\cap B(c,r))<\\varepsilon$. Every $d\\in A\\cap B(c,r/2)$ has a sufficiently small ball contained in $B(c,r)$, so $\\omega_f(d)<\\varepsilon$. Thus the sublevel set is relatively open.  ",
      "step": "1.3",
      "inputs": [
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Steps 1.1 and 1.2 give the equivalence; step 1.3 makes the complementary superlevel set closed.  ",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "step 1.2",
        "step 1.3"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "lem-oscillation-characterisation-in-rn: the Statement fixes the displayed objects and has no conclusion depending on an unlicensed choice from an empty family: For $f:A\\to\\mathbb R$, $f$ is continuous at $c\\in A$ if and only if $\\omega_f(c)=0$. If $f$ is bounded, then for every $\\varepsilon>0$, the relative superlevel set $\\{c\\in A:\\omega_f(c)\\ge\\varepsilon\\}$ is closed in $A$."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 1.1: the proof explicitly handles the zero-valued parameter or zero object used by the statement."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "lem-oscillation-characterisation-in-rn: the assertion has no separate unit-size case; its quantified argument applies without a one-case split: For $f:A\\to\\mathbb R$, $f$ is continuous at $c\\in A$ if and only if $\\omega_f(c)=0$. If $f$ is bounded, then for every $\\varepsilon>0$, the relative superlevel set $\\{c\\in A:\\omega_f(c)\\ge\\varepsilon\\}$ is closed in $A$."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "lem-oscillation-characterisation-in-rn: no geometric or algebraic degeneracy changes the asserted conclusion; checked against the Statement: For $f:A\\to\\mathbb R$, $f$ is continuous at $c\\in A$ if and only if $\\omega_f(c)=0$. If $f$ is bounded, then for every $\\varepsilon>0$, the relative superlevel set $\\{c\\in A:\\omega_f(c)\\ge\\varepsilon\\}$ is closed in $A$."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "lem-oscillation-characterisation-in-rn: no interval or radial endpoint is part of the conclusion; checked against the Statement: For $f:A\\to\\mathbb R$, $f$ is continuous at $c\\in A$ if and only if $\\omega_f(c)=0$. If $f$ is bounded, then for every $\\varepsilon>0$, the relative superlevel set $\\{c\\in A:\\omega_f(c)\\ge\\varepsilon\\}$ is closed in $A$."
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
      "evidence": "Statement and step 2.1: the reverse implication is represented among the numbered derivations ending at or before this step."
    }
  ]
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "lem-oscillation-characterisation-in-rn",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "def-oscillation-in-rn",
    "declared_target": "def-oscillation-in-rn",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-oscillation-characterisation-in-rn",
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
    "source": "lem-oscillation-characterisation-in-rn",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
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
    "source": "lem-oscillation-characterisation-in-rn",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "def-metric-topology",
    "declared_target": "def-metric-topology",
    "target_statement_provenance": "literature-derived",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-oscillation-characterisation-in-rn",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "lem-p-norms-are-norms-and-induce-the-published-metrics",
    "declared_target": "lem-p-norms-are-norms-and-induce-the-published-metrics",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-oscillation-characterisation-in-rn",
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

## Full exact-current text of every cited or declared item (6)

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

### `def-metric-ball`

````markdown
---
id: def-metric-ball
kind: definition
title: "Open ball, closed ball and sphere in a metric space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-space, def-real-order, lem-metric-nonnegativity,
       def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: [def-open-ball, def-closed-ball, def-sphere]
landmark: true
short: "$B(x,r)$"
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
    - title: "Ball (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ball_(mathematics)"
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]), let $x \in X$ and let
$r \in \mathbb{R}$ with $r > 0$ ([[def-real-order]]). Define

$$B(x,r) := \{\, y \in X : d(x,y) < r \,\}, \qquad \bar B(x,r) := \{\, y \in X : d(x,y) \le r \,\}, \qquad S(x,r) := \{\, y \in X : d(x,y) = r \,\}.$$

$B(x,r)$ is the **open ball**, $\bar B(x,r)$ the **closed ball** and $S(x,r)$ the
**sphere** of **centre** $x$ and **radius** $r$. The radius is always a strictly
positive real; a ball of radius $0$ or of negative radius is never written in
this library.

**Immediate consequences of the definitions.** For every $x \in X$ and $r > 0$:

- $x \in B(x,r)$, because $d(x,x) = 0 < r$ (axiom (M1) of [[def-metric-space]]);
  in particular open and closed balls are nonempty.
- $B(x,r) \subseteq \bar B(x,r)$ and $S(x,r) \subseteq \bar B(x,r)$, and
  $\bar B(x,r)$ is the disjoint union of $B(x,r)$ and $S(x,r)$, by trichotomy of
  the order of $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]):
  each $y$ satisfies exactly one of $d(x,y) < r$, $d(x,y) = r$, $d(x,y) > r$.
- If $0 < s \le r$ then $B(x,s) \subseteq B(x,r)$ and
  $\bar B(x,s) \subseteq \bar B(x,r)$, by transitivity of the order.
- Nonnegativity of the metric ([[lem-metric-nonnegativity]]) is what forces the
  radius convention, and it forces it for the **open** ball only: if $r \le 0$
  then $B(x,r) = \{y : d(x,y) < r\}$ is empty, because $d(x,y) \ge 0 \ge r$
  for every $y$. The other two sets behave differently at $r = 0$, and the
  convention $r > 0$ excludes them for uniformity rather than for emptiness:
  $\bar B(x,0) = S(x,0) = \{x\}$, since $d(x,y) \le 0$ together with
  $d(x,y) \ge 0$ gives $d(x,y) = 0$ and hence $y = x$ by (M1). For $r < 0$ all
  three sets are empty.

**A sphere may be empty, and so the three sets are not on a par.** For $r > 0$
the open and closed balls always contain $x$, but nothing in the definition
produces a point at distance exactly $r$ from $x$. If a metric takes only the
values $0$ and $1$, as the discrete metric on the companion page does, then
$S(x,2) = \emptyset$ while $B(x,2) = \bar B(x,2)$ is the whole space. So
nonemptiness of a sphere is never available by convention: where it is used, it
is proved.

**The ambient space is part of the notation.** $B(x,r)$ depends on $(X,d)$ and
not on $x$ and $r$ alone. When more than one space or more than one metric is in
play we write $B_X(x,r)$, or $B_d(x,r)$, and likewise for $\bar B$ and $S$. This
matters as soon as subspaces appear ([[def-isometry-and-metric-embedding]]): a
ball of a subspace is the trace on it of a ball of the ambient space, and the two
are different sets.

## Remarks

- **The names "open ball" and "closed ball" are justified, not merely
  suggestive.** That $B(x,r)$ is an open set and $\bar B(x,r)$ a closed set in
  the metric topology is proved in [[thm-metric-open-set-algebra]]; the words are
  used here only as names for the three sets displayed above.
- **The closed ball is not in general the closure of the open ball**, and the
  sphere is not in general the boundary of either. Both failures are recorded on
  this page as [[fs-closed-ball-is-the-closure-of-the-open-ball]] and witnessed
  on the companion page. The safe reading of the three names is the displayed
  one and nothing more.
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

### `def-metric-topology`

````markdown
---
id: def-metric-topology
kind: definition
title: "The metric topology: a set is open when every one of its points has a ball around it inside the set; closed means open complement"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-metric-ball, def-metric-space]
justified_by: []
aliases: [def-open-set-metric, def-closed-set-metric]
landmark: true
short: "metric topology"
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
    - title: "Open set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Open_set"
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]).

A subset $U \subseteq X$ is **open in $(X,d)$** if for every $x \in U$ there is a
real $r > 0$ with $B(x,r) \subseteq U$ ([[def-metric-ball]]). A subset
$F \subseteq X$ is **closed in $(X,d)$** if its complement $X \setminus F$ is
open.

The collection

$$\mathcal{T}_d := \{\, U \subseteq X : U \text{ is open in } (X,d) \,\}$$

of all open subsets is the **metric topology** of $d$ on $X$. A subset of $X$
that is both open and closed is called **clopen**.

**Two sets are open for trivial reasons.** $\emptyset$ is open, because the
defining condition quantifies over no points; and $X$ is open, because
$B(x,r) \subseteq X$ for every $x$ and every $r > 0$. Consequently $X$ and
$\emptyset$ are also closed, and both are clopen.

**A neighbourhood of a point $x$** is any open set containing $x$. The condition
above therefore reads: $U$ is open exactly when every point of $U$ has a ball
around it inside $U$, and it is the balls alone that have to be tested.

**The metric, not the set, determines $\mathcal{T}_d$.** Two metrics on the same
set may have different metric topologies, and two different metrics may have the
same one; the systematic comparison is [[def-equivalent-metrics]].

## Remarks

- **What "topology" means here.** $\mathcal{T}_d$ is defined above as a
  collection of subsets of $X$; the abstract notion of a topological space, a
  collection of subsets closed under arbitrary unions and finite intersections
  taken as primitive data, is introduced on a later page and is not used
  here. What is proved
  here is that $\mathcal{T}_d$ has exactly those closure properties
  ([[thm-metric-open-set-algebra]]), which is what licenses the word.
- **Open and closed are not opposites.** A set may be neither ($[0,1)$ inside
  $\mathbb{R}$, once the usual metric is available from
  [[lem-real-line-is-a-metric-space]]) or both ($\emptyset$ and $X$ always, and
  in some spaces every subset at once, as the discrete metric on the companion
  page shows). "Not open" is never a synonym for "closed".
- **Closedness is complementation, and nothing else, at this stage.** The
  description of closed sets by limits of sequences, and the description of the
  closure as an infimum of distances, are theorems proved later on this page
  ([[thm-metric-closure-characterisation]], [[thm-metric-sequential-closure]]),
  not part of the definition.
````

### `def-oscillation-in-rn`

````markdown
---
id: def-oscillation-in-rn
kind: definition
title: "Oscillation of a real function on subsets of $\\mathbb{R}^m$ and at a point"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-oscillation, def-extended-reals, lem-extended-reals-complete, def-metric-ball, lem-metrics-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, def-bounded-set, def-infimum, lem-of-abs-value]
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

Let $f:A\to\mathbb R$, $A\subseteq\mathbb R^m$. For $S\subseteq A$, define
$$\omega_f(S):=\sup_{\overline{\mathbb R}}\{|f(x)-f(y)|:x,y\in S\},$$
with value $0$ when $S=\varnothing$. For $c\in A$, define
$$\omega_f(c):=\inf_{r>0}\omega_f(A\cap B(c,r)).$$
The extended supremum exists by [[def-extended-reals]] and [[lem-extended-reals-complete]]; for bounded $f$ all values are finite. Balls are [[def-metric-ball]] for the Euclidean metric ([[lem-metrics-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]]).

If $S\subseteq T$, then $\omega_f(S)\le\omega_f(T)$, directly from the supremum definition; hence the ball oscillations decrease as the radius shrinks and the infimum is well posed ([[def-infimum]], [[lem-of-abs-value]]). At $m=1$ this agrees with [[def-oscillation]] on every nonempty set; only the empty-set convention differs, being $0$ here and $-\infty$ there.
````

### `lem-p-norms-are-norms-and-induce-the-published-metrics`

````markdown
---
id: lem-p-norms-are-norms-and-induce-the-published-metrics
kind: lemma
title: "Each $\\lVert\\cdot\\rVert_p$ is a norm on $\\mathbb{R}^n$, and the induced metrics are exactly $d_1$, $d_2$ and $d_\\infty$ of the published metric-spaces page"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-p-norms-on-rn, def-norm-and-normed-space, def-euclidean-inner-product, thm-cauchy-schwarz-and-the-euclidean-norm, thm-minkowski-finite, lem-rational-power-laws, lem-rational-power-monotone, lem-finite-sum-laws, def-finite-sum, lem-metrics-on-rn, def-metric-space, def-metric-topology, thm-euclidean-space-complete, thm-heine-borel-rn, thm-metric-compactness-equivalences, lem-finite-set-has-max, def-max-min, def-rational-power, lem-of-abs-value, def-abs-value, lem-of-triangle-inequality, lem-of-sign-rules, def-ordered-field, thm-of-square-roots]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-10
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Lp space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lp_space"
    - title: "Minkowski inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Minkowski_inequality"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ and let $p \in \mathbb{Q}$ with $p \ge 1$, with the norms
of [[def-p-norms-on-rn]]. Then:

1. $\lVert\cdot\rVert_p$ is a norm on $\mathbb{R}^{n}$
   ([[def-norm-and-normed-space]]).
2. For $n \ge 1$, $\lVert\cdot\rVert_\infty$ is a norm on $\mathbb{R}^{n}$.
3. **The dictionary.** For $n \ge 1$ and all $x, y \in \mathbb{R}^{n}$,
   $$\lVert x-y\rVert_1 = d_1(x,y), \qquad \lVert x-y\rVert_2 = d_2(x,y), \qquad \lVert x-y\rVert_\infty = d_\infty(x,y),$$
   where $d_1$, $d_2$, $d_\infty$ are the metrics of the published
   [[lem-metrics-on-rn]]. So the metric induced by each of these three norms
   ([[def-norm-and-normed-space]]) **is** the correspondingly named published
   metric, not merely one equivalent to it.

**Consequence, used repeatedly below and stated once here.** By clause 3 at
$p = 2$, the metric space $(\mathbb{R}^{n}, d_2)$ of the published metric-spaces
page and the metric space underlying the normed space
$(\mathbb{R}^{n}, \lVert\cdot\rVert_2)$ of this page are the same object. Hence
completeness ([[thm-euclidean-space-complete]] clause 2), Heine-Borel
([[thm-heine-borel-rn]] clause 2) and the compactness equivalences
([[thm-metric-compactness-equivalences]]) are statements about this page's normed
space, **with their hypothesis $n \ge 1$ inherited unchanged and not weakened**.
Nothing below cites any of those three theorems for $n = 0$.

**Why this lemma exists.** Without it the library would hold a norm-induced
metric on $\mathbb{R}^{n}$ and a separately published metric on the same set with
no recorded relation, and every later citation would have to guess which was
meant. The proof of clause 3 is a comparison of two written expressions; the
value is that the comparison is made and recorded.

## Facts & Assumptions

**Given:** A natural number $n$, a rational $p \ge 1$, vectors $x, y \in \mathbb{R}^{n}$ and a real $\lambda$; write $S(x) := \sum_{k<n}|x_k|^{p}$, so that $\lVert x\rVert_p = S(x)^{1/p}$ ([[def-p-norms-on-rn]], [[def-finite-sum]]).

[A1] For clauses 2 and 3, $n \ge 1$, so that $\{|x_k| : k<n\}$ is a nonempty finite set of reals ([[def-p-norms-on-rn]], [[lem-metrics-on-rn]]).

[L1] Rational powers ([[def-rational-power]], [[lem-rational-power-laws]]): for $a, b \ge 0$ and rationals $r, s > 0$ one has $a^{r} \ge 0$, $(ab)^{r} = a^{r}b^{r}$, $0^{r} = 0$, and $a^{r} > 0$ when $a > 0$; and for $a > 0$, $(a^{r})^{s} = a^{rs}$ and $a^{1} = a$.

[L2] Monotonicity in the base ([[lem-rational-power-monotone]] clause 2): for a rational $r > 0$ and reals $0 \le a < b$ one has $a^{r} < b^{r}$; hence $a \le b$ implies $a^{r} \le b^{r}$, the case $a = b$ being trivial, and $a^{r} = 0$ only for $a = 0$.

[L3] Laws of finite sums ([[lem-finite-sum-laws]], [[def-finite-sum]]): additivity, scaling, monotonicity; a sum of nonnegative terms is nonnegative, each single term is at most such a sum, and a sum of nonnegative terms that vanishes has every term $0$.

[L4] Minkowski's inequality for finite sums at rational $p \ge 1$ ([[thm-minkowski-finite]]): $\bigl(\sum_{k<n}|a_k+b_k|^{p}\bigr)^{1/p} \le \bigl(\sum_{k<n}|a_k|^{p}\bigr)^{1/p} + \bigl(\sum_{k<n}|b_k|^{p}\bigr)^{1/p}$.

[L5] Absolute value ([[lem-of-abs-value]], [[def-abs-value]], [[lem-of-triangle-inequality]]): $|t| \ge 0$; $|t| = 0$ exactly when $t = 0$; $|st| = |s|\,|t|$; $|s+t| \le |s|+|t|$; and $|t|^{2} = t^{2}$.

[L6] Maxima ([[lem-finite-set-has-max]], [[def-max-min]]): a nonempty finite set of reals has a maximum, the maximum belongs to the set and bounds it above, and a set with an upper bound belonging to it has that element as its maximum.

[L7] Order arithmetic: multiplying an inequality by a nonnegative real preserves it ([[lem-of-sign-rules]] in its strict form, together with the case of equality settled by totality), and $\le$ is transitive ([[def-ordered-field]]).

[L8] The norm axioms (N1), (N2), (N3) ([[def-norm-and-normed-space]]); $\lVert\cdot\rVert_2$ agrees with the Euclidean norm of [[def-euclidean-inner-product]], and is a norm by [[thm-cauchy-schwarz-and-the-euclidean-norm]]; square roots are the rational power at exponent $1/2$ ([[thm-of-square-roots]], [[def-p-norms-on-rn]]).

[L9] The published metrics on $\mathbb{R}^{n}$ for $n \ge 1$ are $d_1(x,y) = \sum_{k<n}|x_k-y_k|$, $d_2(x,y) = \sqrt{\sum_{k<n}(x_k-y_k)^{2}}$ and $d_\infty(x,y) = \max\{|x_k-y_k| : k<n\}$, and each is a metric ([[lem-metrics-on-rn]], [[def-metric-space]], [[def-metric-topology]]).

## Proof

**Proof technique:** direct.

1.1 Every term $|x_k|^{p}$ is nonnegative, so $S(x) \ge 0$ and $\lVert x\rVert_p = S(x)^{1/p}$ is defined and nonnegative. [L1, L3]

1.2 $S(x) = 0$ holds exactly when $|x_k|^{p} = 0$ for every $k<n$, a vanishing sum of nonnegative terms having every term $0$; and $|x_k|^{p} = 0$ exactly when $|x_k| = 0$, that is exactly when $x_k = 0$. [L1, L2, L3, L5]

1.3 For every $k<n$, $|(\lambda x)_k|^{p} = \bigl(|\lambda|\,|x_k|\bigr)^{p} = |\lambda|^{p}|x_k|^{p}$, so $S(\lambda x) = |\lambda|^{p}S(x)$ by scaling of finite sums. [L1, L3, L5]

1.4 Instantiating [L4] at $a_k := x_k$ and $b_k := y_k$, and using $(x+y)_k = x_k+y_k$, gives $\lVert x+y\rVert_p \le \lVert x\rVert_p + \lVert y\rVert_p$, which is axiom (N3) for $\lVert\cdot\rVert_p$. [L4, L8]

1.5 Under [A1] the set $\{|x_k| : k<n\}$ is nonempty and finite, so $\lVert x\rVert_\infty$ exists, is one of the $|x_k|$, and satisfies $|x_k| \le \lVert x\rVert_\infty$ for every $k<n$; in particular $\lVert x\rVert_\infty \ge 0$. [A1, L5, L6]

1.6 Under [A1], $\lVert x-y\rVert_1 = \sum_{k<n}|x_k-y_k|$ by the case $p=1$ of the definition, and that is the written expression for $d_1(x,y)$. [L1, L9]

1.7 Under [A1], $\lVert x-y\rVert_2 = \bigl(\sum_{k<n}|x_k-y_k|^{2}\bigr)^{1/2} = \sqrt{\sum_{k<n}(x_k-y_k)^{2}}$, using $|t|^{2} = t^{2}$ and the identification of the exponent $1/2$ with the nonnegative square root, and that is the written expression for $d_2(x,y)$. [L5, L8, L9]

1.8 Under [A1], $\lVert x-y\rVert_\infty = \max\{|x_k-y_k| : k<n\}$ by definition, and that is the written expression for $d_\infty(x,y)$. [L9]

2.1 $\lVert x\rVert_p = 0$ holds exactly when $S(x) = 0$, since $S(x) > 0$ would give $S(x)^{1/p} > 0$ and $0^{1/p} = 0$. [step 1.1, L1, L2]

2.2 Under [A1]: $\lVert x\rVert_\infty = 0$ forces $|x_k| \le 0$ and $|x_k| \ge 0$ for every $k<n$, hence $x = 0$; and $\lVert 0\rVert_\infty = 0$. This is (N1) for $\lVert\cdot\rVert_\infty$. [step 1.5, L5, L8]

2.3 Under [A1]: for every $k<n$, $|(\lambda x)_k| = |\lambda|\,|x_k| \le |\lambda|\,\lVert x\rVert_\infty$, and choosing $j<n$ with $|x_j| = \lVert x\rVert_\infty$ gives $|(\lambda x)_j| = |\lambda|\,\lVert x\rVert_\infty$; so $|\lambda|\lVert x\rVert_\infty$ belongs to the set and bounds it above, whence $\lVert \lambda x\rVert_\infty = |\lambda|\lVert x\rVert_\infty$. This is (N2) for $\lVert\cdot\rVert_\infty$. [step 1.5, L5, L6, L7]

2.4 Under [A1]: for every $k<n$, $|(x+y)_k| = |x_k+y_k| \le |x_k| + |y_k| \le \lVert x\rVert_\infty + \lVert y\rVert_\infty$; choosing $j<n$ with $|(x+y)_j| = \lVert x+y\rVert_\infty$ gives $\lVert x+y\rVert_\infty \le \lVert x\rVert_\infty + \lVert y\rVert_\infty$, which is (N3) for $\lVert\cdot\rVert_\infty$. [step 1.5, L5, L6, L7]

3.1 By steps 2.1 and 1.2, $\lVert x\rVert_p = 0$ exactly when $x_k = 0$ for every $k<n$, that is exactly when $x = 0$; this is axiom (N1) for $\lVert\cdot\rVert_p$. [step 2.1, step 1.2, L8]

3.2 Steps 2.2, 2.3 and 2.4 are (N1), (N2) and (N3) for $\lVert\cdot\rVert_\infty$ under [A1], so clause 2 holds. [step 2.2, step 2.3, step 2.4, A1, L8]

4.1 If $\lambda = 0$ then $\lambda x = 0$ and both sides of (N2) are $0$ by step 3.1; if $\lambda \ne 0$ then $|\lambda| > 0$, and step 1.3 with the power laws gives $\lVert \lambda x\rVert_p = \bigl(|\lambda|^{p}S(x)\bigr)^{1/p} = \bigl(|\lambda|^{p}\bigr)^{1/p}S(x)^{1/p} = |\lambda|^{p\cdot(1/p)}\lVert x\rVert_p = |\lambda|\,\lVert x\rVert_p$; this is axiom (N2). [step 1.3, step 3.1, L1, L5, L8]

5.1 Steps 3.1, 4.1 and 1.4 are (N1), (N2) and (N3) for $\lVert\cdot\rVert_p$, so clause 1 holds. [step 1.4, step 3.1, step 4.1, L8]

6.1 Steps 1.6, 1.7 and 1.8 give clause 3, and with steps 5.1 and 3.2 all three clauses are proved; in particular the metric induced by $\lVert\cdot\rVert_2$ on $\mathbb{R}^{n}$ for $n \ge 1$ is the published $d_2$, which is the consequence recorded in the Statement. [step 5.1, step 3.2, step 1.6, step 1.7, step 1.8, L9] ∎

## Remarks

- **What the consequence does and does not license.** Because the two metric spaces are literally the same, a published theorem about $(\mathbb{R}^{n}, d_2)$ may be quoted here verbatim. It may **not** be quoted with a weaker hypothesis: [[thm-euclidean-space-complete]], [[thm-heine-borel-rn]] and [[lem-metrics-on-rn]] are all stated for $n \ge 1$ only, because $d_\infty$ is a maximum over an empty index set at $n = 0$, and every item on this page that uses one of them carries $n \ge 1$ in its own statement.

- **Clause 1 holds at $n = 0$ and clause 2 does not apply there.** At $n = 0$ every $\lVert\cdot\rVert_p$ is the zero function on the one-element space $\mathbb{R}^{0}$, which is the unique norm on the zero space ([[def-norm-and-normed-space]]); $\lVert\cdot\rVert_\infty$ is not defined there at all.

- **The route to (N3) differs between the two families, and that is not an accident.** For $\lVert\cdot\rVert_p$ the triangle inequality is Minkowski's inequality, a genuine theorem about rational powers; for $\lVert\cdot\rVert_\infty$ it is the elementary argument of step 2.4, that a maximum of sums is at most the sum of the maxima. The second argument is the one that needs a nonempty index set.
````

