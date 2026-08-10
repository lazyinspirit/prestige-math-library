## Selection reasons

- high risk (6): 4 declared dependencies; 4 cited facts; analytic limiting/completeness language

## Target item — `thm-power-series-uniform-on-compact-subintervals`

Normalized current SHA-256: `ac752d521dc9607a731be14ebba7f10e8095180b70857bfb5bc29f09906b8f91`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: thm-power-series-uniform-on-compact-subintervals
kind: theorem
title: "A power series converges absolutely and uniformly on every closed interval strictly inside its interval of convergence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-power-series-convergence-dichotomy, thm-weierstrass-m-test-for-function-series, def-series-of-real-functions, def-interval]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "MIT 18.100C, Lecture 11: Power Series"
      url: "https://ocw.mit.edu/courses/18-100c-real-analysis-fall-2012/1058808e5cb57c986118333f8b6fa0d7_MIT18_100CF12_l11sum.pdf"
    - title: "Power series, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Power_series"
pipeline_run: null
---

## Statement

Let $\sum a_n(x-c)^n$ have radius $R$, and let $[u,v]$ be a nonempty closed interval for which

$$r:=\max\{|u-c|,|v-c|\}<R.$$

Then the function series converges absolutely at every point of $[u,v]$ and converges uniformly there.

## Facts & Assumptions

**Given:** A power series of radius $R$ and a closed interval $[u,v]$ satisfying the strict interior condition above ([[def-interval]], [[def-series-of-real-functions]]).

[L1] The power series converges absolutely at every point whose distance from $c$ is less than $R$ ([[cor-power-series-convergence-dichotomy]]).

[L2] If $|f_n(x)|\le M_n$ for all $n,x$ and $\sum M_n$ converges, the Weierstrass M-test gives absolute pointwise and uniform convergence of $\sum f_n$ ([[thm-weierstrass-m-test-for-function-series]]).

## Proof

**Proof technique:** direct.

1.1 Choose a real $\rho$ with $r<\rho<R$, or merely $\rho>r$ when $R=+\infty$. Then the scalar series $\sum |a_n|\rho^n$ converges by [L1], applied at $x=c+\rho$. [given, L1, choose]

1.2 For every $x\in[u,v]$, order-convexity gives $|x-c|\le\max\{|u-c|,|v-c|\}=r<\rho$, and hence $|a_n(x-c)^n|\le |a_n|\rho^n$ for every $n$. [given, algebra]

2.1 Apply [L2] to $f_n(x)=a_n(x-c)^n$ and $M_n=|a_n|\rho^n$. The series is absolutely convergent at each $x\in[u,v]$ and uniformly convergent on the whole interval. [step 1.1, step 1.2, L2] ∎
````

## Wave 13 provenance row

```json
{
  "id": "thm-power-series-uniform-on-compact-subintervals",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://encyclopediaofmath.org/wiki/Power_series",
    "https://ocw.mit.edu/courses/18-100c-real-analysis-fall-2012/1058808e5cb57c986118333f8b6fa0d7_MIT18_100CF12_l11sum.pdf"
  ],
  "rationale": "The sources state compact-subset uniform convergence inside the convergence disc or interval. The item specializes this to closed real subintervals with explicit endpoint inequalities and supplies an M-test proof.",
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
      "source": "cor-power-series-convergence-dichotomy",
      "source_section": "Statement",
      "quote": "Let $\\sum a_n(x-c)^n$ have radius $R$. It converges absolutely at every $x$ with $|x-c|<R$ and diverges at every $x$ with $|x-c|>R$. When $0<R<+\\infty$, no common conclusion holds at either endpoint $c\\pm R$: power series of radius $R$ can converge there, even absolutely, or diverge there.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-weierstrass-m-test-for-function-series",
      "source_section": "Statement",
      "quote": "Let $X$ be a set and let $f_k:X\\to\\mathbb{R}$. Suppose there is a sequence of\nnonnegative reals $(M_k)$ such that\n\n$$|f_k(x)|\\le M_k\\qquad(k\\in\\mathbb{N},\\ x\\in X)$$\n\nand the scalar series $\\sum M_k$ converges. Then $\\sum f_k(x)$ converges\nabsolutely for every $x\\in X$, and the function series $\\sum f_k$ converges\nuniformly on $X$.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Choose a real $\\rho$ with $r<\\rho<R$, or merely $\\rho>r$ when $R=+\\infty$. Then the scalar series $\\sum |a_n|\\rho^n$ converges by [L1], applied at $x=c+\\rho$.",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "For every $x\\in[u,v]$, order-convexity gives $|x-c|\\le\\max\\{|u-c|,|v-c|\\}=r<\\rho$, and hence $|a_n(x-c)^n|\\le |a_n|\\rho^n$ for every $n$.",
      "step": "1.2",
      "inputs": [
        "given",
        "algebra"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Apply [L2] to $f_n(x)=a_n(x-c)^n$ and $M_n=|a_n|\\rho^n$. The series is absolutely convergent at each $x\\in[u,v]$ and uniformly convergent on the whole interval.",
      "step": "2.1",
      "inputs": [
        "L2",
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
      "reason": "thm-power-series-uniform-on-compact-subintervals: the Statement fixes the displayed objects and has no conclusion depending on an unlicensed choice from an empty family: Let $\\sum a_n(x-c)^n$ have radius $R$, and let $[u,v]$ be a nonempty closed interval for which $$r:=\\max\\{|u-c|,|v-c|\\}<R.$$ Then the function series converges absolutely at every point of $[u,v]$ and converges uniformly"
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "thm-power-series-uniform-on-compact-subintervals: no independent zero-parameter boundary remains after the stated hypotheses and definitions; checked against the Statement: Let $\\sum a_n(x-c)^n$ have radius $R$, and let $[u,v]$ be a nonempty closed interval for which $$r:=\\max\\{|u-c|,|v-c|\\}<R.$$ Then the function series converges absolutely at every point of $[u,v]$ and converges uniformly"
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "thm-power-series-uniform-on-compact-subintervals: the assertion has no separate unit-size case; its quantified argument applies without a one-case split: Let $\\sum a_n(x-c)^n$ have radius $R$, and let $[u,v]$ be a nonempty closed interval for which $$r:=\\max\\{|u-c|,|v-c|\\}<R.$$ Then the function series converges absolutely at every point of $[u,v]$ and converges uniformly"
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "thm-power-series-uniform-on-compact-subintervals: no geometric or algebraic degeneracy changes the asserted conclusion; checked against the Statement: Let $\\sum a_n(x-c)^n$ have radius $R$, and let $[u,v]$ be a nonempty closed interval for which $$r:=\\max\\{|u-c|,|v-c|\\}<R.$$ Then the function series converges absolutely at every point of $[u,v]$ and converges uniformly"
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "thm-power-series-uniform-on-compact-subintervals: no interval or radial endpoint is part of the conclusion; checked against the Statement: Let $\\sum a_n(x-c)^n$ have radius $R$, and let $[u,v]$ be a nonempty closed interval for which $$r:=\\max\\{|u-c|,|v-c|\\}<R.$$ Then the function series converges absolutely at every point of $[u,v]$ and converges uniformly"
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 1.1: every witness selected there is drawn after the proof establishes the relevant positivity, existence, or nonemptiness condition."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "thm-power-series-uniform-on-compact-subintervals: the Statement is not an equivalence, so there is no forward implication obligation: Let $\\sum a_n(x-c)^n$ have radius $R$, and let $[u,v]$ be a nonempty closed interval for which $$r:=\\max\\{|u-c|,|v-c|\\}<R.$$ Then the function series converges absolutely at every point of $[u,v]$ and converges uniformly"
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "thm-power-series-uniform-on-compact-subintervals: the Statement is not an equivalence, so there is no reverse implication obligation: Let $\\sum a_n(x-c)^n$ have radius $R$, and let $[u,v]$ be a nonempty closed interval for which $$r:=\\max\\{|u-c|,|v-c|\\}<R.$$ Then the function series converges absolutely at every point of $[u,v]$ and converges uniformly"
    }
  ]
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "thm-power-series-uniform-on-compact-subintervals",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "cor-power-series-convergence-dichotomy",
    "declared_target": "cor-power-series-convergence-dichotomy",
    "target_statement_provenance": "ai-altered",
    "targetPage": "power-series-and-real-analytic-functions",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-power-series-uniform-on-compact-subintervals",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "thm-weierstrass-m-test-for-function-series",
    "declared_target": "thm-weierstrass-m-test-for-function-series",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-convergence-of-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-power-series-uniform-on-compact-subintervals",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "def-series-of-real-functions",
    "declared_target": "def-series-of-real-functions",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-convergence-of-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-power-series-uniform-on-compact-subintervals",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "def-interval",
    "declared_target": "def-interval",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
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

## Full exact-current text of every cited or declared item (4)

### `cor-power-series-convergence-dichotomy`

````markdown
---
id: cor-power-series-convergence-dichotomy
kind: corollary
title: "A real power series converges absolutely inside its radius and diverges outside it, while either behaviour may occur at an endpoint"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-cauchy-hadamard-for-real-power-series, def-real-power-series-and-radius-of-convergence, thm-root-test]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Power series, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Power_series"
    - title: "MIT 18.100C, Lecture 11: Power Series"
      url: "https://ocw.mit.edu/courses/18-100c-real-analysis-fall-2012/1058808e5cb57c986118333f8b6fa0d7_MIT18_100CF12_l11sum.pdf"
pipeline_run: null
---

## Statement

Let $\sum a_n(x-c)^n$ have radius $R$. It converges absolutely at every $x$ with $|x-c|<R$ and diverges at every $x$ with $|x-c|>R$. When $0<R<+\infty$, no common conclusion holds at either endpoint $c\pm R$: power series of radius $R$ can converge there, even absolutely, or diverge there.

## Facts & Assumptions

**Given:** A real power series $\sum a_n(x-c)^n$ with radius $R$ ([[def-real-power-series-and-radius-of-convergence]]).

[L1] Cauchy-Hadamard identifies $R$ from the limit superior of the coefficient roots and the root test gives absolute convergence below the reciprocal threshold and divergence above it ([[thm-cauchy-hadamard-for-real-power-series]]).

[L2] At root-test boundary value $1$, the coefficient families $1/(n+1)$ and $1/(n+1)^2$ both have root limit superior $1$, while the first series diverges and the second converges; changing the coefficient signs does not change their absolute values ([[thm-root-test]], claim 3).

## Proof

**Proof technique:** direct.

1.1 The assertions for $|x-c|<R$ and $|x-c|>R$ are exactly the two strict alternatives supplied by [L1], including the cases $R=0$ and $R=+\infty$. [L1]

1.2 For endpoint behaviour at radius $1$, the series with coefficients $1/(n+1)^2$ converges absolutely at both $x=1$ and $x=-1$. The series with coefficients $1/(n+1)$ diverges at $x=1$, while the series with coefficients $(-1)^n/(n+1)$ diverges at $x=-1$. All three have radius $1$ by [L2]. [L2]

2.1 Replacing $x$ by $(x-c)/R$ and multiplying coefficients by the corresponding powers of $R^{-1}$ transports the two radius-one examples to any finite $R>0$ and centre $c$. Thus either behaviour may occur at an endpoint, while no assertion has been made when the endpoints are not real. [step 1.2, algebra] ∎
````

### `def-interval`

````markdown
---
id: def-interval
kind: definition
title: "Intervals of $\\mathbb{R}$: the nine order-convex forms, nondegeneracy, and length"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complete-ordered-field, def-ordered-field, def-real-order, def-bounded-set]
justified_by: []
aliases: []
landmark: true
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
    - title: "Interval (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interval_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (segments and cells)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §0.3 and §1.1"
      url: "https://www.jirka.org/ra/"
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) with its order
([[def-real-order]]).

A subset $I \subseteq \mathbb{R}$ is **order-convex** when

$$x, y \in I \text{ and } x \le z \le y \;\Longrightarrow\; z \in I .$$

The **intervals** of $\mathbb{R}$ are the sets of the following nine forms, where
$a, b \in \mathbb{R}$:

| | bounded forms | | one-sided and full forms |
|---|---|---|---|
| $(a,b)$ | $\{x : a < x < b\}$ | $(a,\infty)$ | $\{x : a < x\}$ |
| $[a,b]$ | $\{x : a \le x \le b\}$ | $[a,\infty)$ | $\{x : a \le x\}$ |
| $[a,b)$ | $\{x : a \le x < b\}$ | $(-\infty,b)$ | $\{x : x < b\}$ |
| $(a,b]$ | $\{x : a < x \le b\}$ | $(-\infty,b]$ | $\{x : x \le b\}$ |
| | | $(-\infty,\infty)$ | $\mathbb{R}$ |

An interval is **open** when both of its written endpoints are excluded, that is
for the forms $(a,b)$, $(a,\infty)$, $(-\infty,b)$ and $(-\infty,\infty)$; it is
**closed** when both written endpoints are included, that is for $[a,b]$,
$[a,\infty)$, $(-\infty,b]$ and $(-\infty,\infty)$. The forms $[a,b)$ and
$(a,b]$ are **half-open**.

**The symbols $\pm\infty$ are notation and not elements of $\mathbb{R}$.** They
mark which side carries no endpoint condition at all; the five forms in the right
column are defined by the displayed conditions on $x$ alone, and no arithmetic is
ever performed with $\infty$. This is the same refusal to extend $\mathbb{R}$
silently that [[rem-sup-conventions]] records for suprema.

**Every one of the nine forms is order-convex.** Each is defined by a conjunction
of at most two conditions, each of the shape $a < x$, $a \le x$, $x < b$ or
$x \le b$, and each such condition is inherited by an intermediate point: if
$a < x$ and $x \le z$ then $a < z$, and if $z \le y$ and $y < b$ then $z < b$,
by transitivity of the order ([[def-ordered-field]]). Applying this to whichever
one or two conditions define the form in question gives $z \in I$ whenever
$x, y \in I$ and $x \le z \le y$.

**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly
when it is of one of the four forms in the left column: for those, $a$ is a lower
bound and $b$ an upper bound. The other five forms are unbounded, on the side or
sides written with $\infty$; the verification is in the remarks below.

**Nondegeneracy.** An interval is **degenerate** when it has at most one element,
and **nondegenerate** when it has at least two. For the four bounded forms with
endpoints $a$ and $b$:

- $[a,b]$ is nonempty exactly when $a \le b$, and it is nondegenerate exactly
  when $a < b$. It is the singleton $\{a\}$ when $a = b$.
- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each
  is nondegenerate.

The only assertion here that is not immediate from the defining conditions is
that $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because
$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to
both sides and halving ([[def-ordered-field]]); repeating the halving inside
$(a, (a+b)/2)$ produces a second point.

**Closed bounded intervals.** These are the sets $[a,b]$ with $a \le b$, which is
exactly the condition making them nonempty. They are the intervals the nested
interval property is stated for, and the phrase *closed bounded interval* always
carries the hypothesis $a \le b$ in this library.

**Length.** The **length** of a bounded interval presented by its endpoints
$a \le b$ is

$$\ell = b - a \;\ge\; 0 .$$

Length is attached to the presentation by endpoints and is not recovered from the
set: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is
$(c,c)$ for any other $c$, while each of these presentations has length $0$, so
nothing inconsistent arises; but the endpoints are named explicitly at every
point where a length is used in this library, and never inferred from the set.
Unbounded intervals are assigned no length.

## Remarks

- **Why the five unbounded forms really are unbounded.** Take $[a,\infty)$ and
  suppose $u \in \mathbb{R}$ were an upper bound of it. The element
  $x = a + |u - a| + 1$ satisfies $x \ge a$, so $x \in [a,\infty)$, and
  $x \ge a + (u - a) + 1 = u + 1 > u$, since $|t| \ge t$ ([[lem-of-abs-value]])
  and $1 > 0$ ([[cor-of-one-positive]]). That contradicts $x \le u$. The same
  computation with $a$ replaced by any element of $(a,\infty)$ handles the open
  form, and reflecting through the origin handles $(-\infty,b)$ and
  $(-\infty,b]$; $\mathbb{R}$ itself is unbounded on both sides for the same
  reason. Note that this uses no Archimedean property: it is the failure of a
  *single* bound, not the cofinality of the naturals.

- **The converse classification is not asserted here.** It is true that every
  order-convex subset of $\mathbb{R}$ is empty or one of the nine forms, and the
  proof runs through suprema and infima, but nothing in this library needs it and
  it is not proved anywhere here. What is used is only the direction proved
  above: each of the nine forms is order-convex.

- **Degenerate intervals are kept, not excluded.** $[a,a] = \{a\}$ and
  $(a,a) = \emptyset$ are intervals under this definition. Excluding them would
  force a nonemptiness hypothesis into every statement that produces an interval,
  and the nested interval property is a good illustration: its conclusion is that
  the intersection is nonempty, and in the equality case the intersection is the
  degenerate interval $[a,a]$, which is exactly the single point.
````

### `def-series-of-real-functions`

````markdown
---
id: def-series-of-real-functions
kind: definition
title: "A series of real-valued functions and its pointwise and uniform convergence through its partial sums"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function-space, def-series, def-pointwise-uniform-and-uniformly-cauchy-convergence]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-10
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §6.1"
      url: "https://www.jirka.org/ra/html/sec_puconv.html"
    - title: "W. Trench, Introduction to Real Analysis"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
pipeline_run: null
---

## Definition

Let $X$ be a set and let $f_k:X\to\mathbb{R}$ for
$k\in\mathbb{N}$. The **series of real-valued functions**
$\sum f_k$ is studied through its partial-sum functions

$$S_n(x):=\sum_{k<n}f_k(x)\qquad(n\in\mathbb{N},\ x\in X),$$

where the sum on the right is the finite sum of [[def-series]]. Thus
$S_0$ is the zero function and $S_{n+1}=S_n+f_n$ under the pointwise
operations of [[def-function-space]].

The series $\sum f_k$ **converges pointwise** to $S:X\to\mathbb{R}$ when
$S_n\to S$ pointwise, and it **converges uniformly** to $S$ when
$S_n\to S$ uniformly
([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

The series is **absolutely convergent at $x\in X$** when the scalar series
$\sum |f_k(x)|$ converges. It is **absolutely pointwise convergent** when this
holds for every $x\in X$.
````

### `thm-weierstrass-m-test-for-function-series`

````markdown
---
id: thm-weierstrass-m-test-for-function-series
kind: theorem
title: "The Weierstrass M-test gives absolute pointwise convergence and uniform convergence of a function series"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-uniform-cauchy-criterion-function-series, thm-series-cauchy-criterion, thm-direct-comparison-test, def-series-of-real-functions, def-finite-sum, lem-finite-sum-laws, lem-of-abs-value, lem-of-triangle-inequality]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-07-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B, Real Analysis, Lectures 20–21"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "University of Alberta Math 317, Infinite Series of Functions"
      url: "https://www.math.ualberta.ca/~xinweiyu/317.Q1.14w/LecNote317-02%20Infinite%20Series%20of%20Functions.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a set and let $f_k:X\to\mathbb{R}$. Suppose there is a sequence of
nonnegative reals $(M_k)$ such that

$$|f_k(x)|\le M_k\qquad(k\in\mathbb{N},\ x\in X)$$

and the scalar series $\sum M_k$ converges. Then $\sum f_k(x)$ converges
absolutely for every $x\in X$, and the function series $\sum f_k$ converges
uniformly on $X$.

## Facts & Assumptions

**Given:** Functions $f_k:X\to\mathbb{R}$ and nonnegative reals $M_k$ with $|f_k(x)|\le M_k$ for all $k,x$, such that $\sum M_k$ converges.

[L1] If $0\le a_k\le b_k$ eventually and $\sum b_k$ converges, then $\sum a_k$ converges ([[thm-direct-comparison-test]]).

[L2] A convergent real series has uniformly small scalar tails: for every real $\varepsilon>0$ there is $N$ such that $\left|\sum_{k=m+1}^{n}a_k\right|<\varepsilon$ whenever $n>m\ge N$ ([[thm-series-cauchy-criterion]]).

[L3] Repeated triangle inequalities for finite sums give $\left|\sum_{k=p}^{q}u_k\right|\le\sum_{k=p}^{q}|u_k|$, and finite sums preserve termwise inequalities ([[lem-of-triangle-inequality]], [[lem-of-abs-value]], [[def-finite-sum]], [[lem-finite-sum-laws]]).

[L4] A function series converges uniformly exactly when its tails are uniformly small ([[cor-uniform-cauchy-criterion-function-series]], [[def-series-of-real-functions]]).

## Proof

**Proof technique:** direct.

1.1 Fix $x\in X$. Since $0\le |f_k(x)|\le M_k$ for every $k$, [L1] shows that $\sum |f_k(x)|$ converges. [given, L1]

1.2 Let $\varepsilon>0$. By [L2] choose $N$ such that $\sum_{k=m+1}^{n}M_k<\varepsilon$ whenever $n>m\ge N$, the absolute value being unnecessary because the terms are nonnegative. [L2, choose]

2.1 For $n>m\ge N$ and $x\in X$, one has $\left|\sum_{k=m+1}^{n}f_k(x)\right|\le\sum_{k=m+1}^{n}|f_k(x)|\le\sum_{k=m+1}^{n}M_k<\varepsilon$. [step 1.2, L3]

3.1 Step 1.1 gives absolute pointwise convergence, while step 2.1 and [L4] give uniform convergence of $\sum f_k$. [step 1.1, step 2.1, L4] ∎
````

