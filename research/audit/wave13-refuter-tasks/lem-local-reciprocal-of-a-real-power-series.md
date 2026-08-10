## Selection reasons

- high risk (6): 5 declared dependencies; 5 cited facts; analytic limiting/completeness language

## Target item — `lem-local-reciprocal-of-a-real-power-series`

Normalized current SHA-256: `c2dd35501e63a7344e40fc71293516705771e50d0881d2479fbef9d955ed0f14`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: lem-local-reciprocal-of-a-real-power-series
kind: lemma
title: "A convergent real power series with nonzero constant term has a convergent reciprocal power series on a smaller neighbourhood"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-cauchy-product-of-real-power-series, thm-geometric-series, cor-power-series-sums-are-continuous, cor-power-series-convergence-dichotomy, thm-double-series-fubini]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Power series, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Power_series"
    - title: "Northwestern Math 320-2 lecture notes"
      url: "https://sites.math.northwestern.edu/scg479/courses/notes/lecture-notes-320-2.pdf"
pipeline_run: null
---

## Statement

Let $f(x)=\sum_{n\ge0}a_n(x-c)^n$ have positive radius and $a_0\ne0$. Then on some neighbourhood of $c$, $1/f$ is represented by a convergent real power series about $c$.

## Facts & Assumptions

**Given:** The convergent power series $f$ with $f(c)=a_0\ne0$.

[L1] For $|z|<1$, $\sum_{m\ge0}(-z)^m=1/(1+z)$ ([[thm-geometric-series]]).

[L2] A power series converges absolutely inside its radius, and its sum is continuous there ([[cor-power-series-convergence-dichotomy]], [[cor-power-series-sums-are-continuous]]).

[L3] Finite powers of a power series are represented by repeated Cauchy products ([[lem-cauchy-product-of-real-power-series]]).

[L4] Absolutely convergent double series may be regrouped without changing their sum ([[thm-double-series-fubini]]).

## Proof

**Proof technique:** constructive.

1.1 Write $f=a_0+h$, where $h(c)=0$. By absolute convergence, choose $r>0$ inside the radius so small that $B_r:=\sum_{n\ge1}|a_n|r^n<|a_0|$. [construct, L2, choose]

2.1 By [L1], $1/f(x)=a_0^{-1}\sum_{m\ge0}(-h(x)/a_0)^m$ for $|x-c|\le r$. Expand each power by [L3]. [step 1.1, L1, L3]

3.1 The total absolute sum of the expanded terms is bounded by $|a_0|^{-1}\sum_m(B_r/|a_0|)^m<\infty$. By [L4], regrouping by powers of $x-c$ gives a convergent reciprocal power series on the neighbourhood. [step 1.1, step 2.1, L1, L4, discharge-construct] ∎
````

## Wave 13 provenance row

```json
{
  "id": "lem-local-reciprocal-of-a-real-power-series",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://encyclopediaofmath.org/wiki/Power_series",
    "https://sites.math.northwestern.edu/scg479/courses/notes/lecture-notes-320-2.pdf"
  ],
  "rationale": "The sources state that a power series with nonzero constant term has a locally convergent reciprocal series. The item uses a geometric-series majorant and locally generated regrouping details.",
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
      "source": "thm-geometric-series",
      "source_section": "Statement",
      "quote": "Let $r \\in \\mathbb{R}$ and let $r^k$ be the integer power ([[def-integer-power]]),\nso that $r^0 = 1$ for every $r$, including $r = 0$.\n\n1. If $|r| < 1$ then the series $\\sum r^k$ converges ([[def-series]]) and\n   $$\\sum_{k=0}^{\\infty} r^{k} \\;=\\; \\frac{1}{1-r} .$$\n2. If $|r| \\ge 1$ then $\\sum r^k$ diverges.\n\nThe series starts at $k = 0$ and its first term is $r^0 = 1$; in particular\n$\\sum_{k=0}^{\\infty} 2^{-k} = 2$, while the series starting at $k = 1$ sums to\n$1$. Which starting index is meant has to be said, and it is said here.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L2",
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
      "source": "cor-power-series-sums-are-continuous",
      "source_section": "Statement",
      "quote": "If $f(x)=\\sum_{n\\ge0}a_n(x-c)^n$ for $|x-c|<R$, then $f$ is continuous at every $x_0$ satisfying $|x_0-c|<R$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-cauchy-product-of-real-power-series",
      "source_section": "Statement",
      "quote": "Suppose $f(x)=\\sum_{n\\ge0}a_n(x-c)^n$ and $g(x)=\\sum_{n\\ge0}b_n(x-c)^n$ have radii $R_f,R_g$. For $|x-c|<\\min(R_f,R_g)$,\n\n$$f(x)g(x)=\\sum_{n=0}^{\\infty}\\left(\\sum_{k=0}^{n}a_kb_{n-k}\\right)(x-c)^n,$$\n\nand the displayed product series converges absolutely.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-double-series-fubini",
      "source_section": "Statement",
      "quote": "Let $a : \\mathbb{N} \\times \\mathbb{N} \\to \\mathbb{R}$ be a doubly indexed array\nof reals, written $a_{ij}$. Assume:\n\n> **(H)** for every $i$ the series $\\sum_j |a_{ij}|$ converges, with sum $A_i$;\n> and the series $\\sum_i A_i$ converges, with sum $L$.\n\nThen, with $J : \\mathbb{N} \\to \\mathbb{N} \\times \\mathbb{N}$ any bijection\n([[thm-n-cross-n-countable]], [[def-injection-surjection-bijection]]):\n\n1. $\\sum_n a_{J(n)}$ converges absolutely\n   ([[def-absolute-and-conditional-convergence]]), and its sum $S$ is the same\n   for every such bijection ([[thm-dirichlet-rearrangement]]);\n2. for every $i$ the series $\\sum_j a_{ij}$ converges, say to $R_i$; the series\n   $\\sum_i R_i$ converges absolutely; and $\\sum_{i=0}^{\\infty} R_i = S$;\n3. for every $j$ the series $\\sum_i |a_{ij}|$ converges and $\\sum_i a_{ij}$\n   converges, say to $C_j$; the series $\\sum_j C_j$ converges absolutely; and\n   $\\sum_{j=0}^{\\infty} C_j = S$.\n\nIn particular the two iterated sums exist and agree:\n\n$$\\sum_{i=0}^{\\infty}\\Bigl(\\sum_{j=0}^{\\infty} a_{ij}\\Bigr) \\;=\\; \\sum_{j=0}^{\\infty}\\Bigl(\\sum_{i=0}^{\\infty} a_{ij}\\Bigr) \\;=\\; \\sum_{n=0}^{\\infty} a_{J(n)} .$$\n\n**The hypothesis is on the absolute values, and it is stated as an iterated\ncondition, not as an unqualified \"double sum\".** Each row must be absolutely\nsummable, and the row totals must themselves be summable. Without it the two\niterated sums may both exist and differ, which is\n[[fs-iterated-double-sums-always-agree]].",
      "quote_selection": "full-source-section",
      "uses": [
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Write $f=a_0+h$, where $h(c)=0$. By absolute convergence, choose $r>0$ inside the radius so small that $B_r:=\\sum_{n\\ge1}|a_n|r^n<|a_0|$.",
      "step": "1.1",
      "inputs": [
        "L2"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "By [L1], $1/f(x)=a_0^{-1}\\sum_{m\\ge0}(-h(x)/a_0)^m$ for $|x-c|\\le r$. Expand each power by [L3].",
      "step": "2.1",
      "inputs": [
        "L1",
        "L3",
        "step 1.1"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "The total absolute sum of the expanded terms is bounded by $|a_0|^{-1}\\sum_m(B_r/|a_0|)^m<\\infty$. By [L4], regrouping by powers of $x-c$ gives a convergent reciprocal power series on the neighbourhood.",
      "step": "3.1",
      "inputs": [
        "L4",
        "step 1.1",
        "step 2.1",
        "L1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "lem-local-reciprocal-of-a-real-power-series: the Statement fixes the displayed objects and has no conclusion depending on an unlicensed choice from an empty family: Let $f(x)=\\sum_{n\\ge0}a_n(x-c)^n$ have positive radius and $a_0\\ne0$. Then on some neighbourhood of $c$, $1/f$ is represented by a convergent real power series about $c$."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "lem-local-reciprocal-of-a-real-power-series: no independent zero-parameter boundary remains after the stated hypotheses and definitions; checked against the Statement: Let $f(x)=\\sum_{n\\ge0}a_n(x-c)^n$ have positive radius and $a_0\\ne0$. Then on some neighbourhood of $c$, $1/f$ is represented by a convergent real power series about $c$."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "lem-local-reciprocal-of-a-real-power-series: the assertion has no separate unit-size case; its quantified argument applies without a one-case split: Let $f(x)=\\sum_{n\\ge0}a_n(x-c)^n$ have positive radius and $a_0\\ne0$. Then on some neighbourhood of $c$, $1/f$ is represented by a convergent real power series about $c$."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Statement: degeneracy is explicitly excluded or separated by the hypotheses: Let $f(x)=\\sum_{n\\ge0}a_n(x-c)^n$ have positive radius and $a_0\\ne0$. Then on some neighbourhood of $c$, $1/f$ is represented by a convergent real power series about $c$."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "lem-local-reciprocal-of-a-real-power-series: no interval or radial endpoint is part of the conclusion; checked against the Statement: Let $f(x)=\\sum_{n\\ge0}a_n(x-c)^n$ have positive radius and $a_0\\ne0$. Then on some neighbourhood of $c$, $1/f$ is represented by a convergent real power series about $c$."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 1.1: every witness selected there is drawn after the proof establishes the relevant positivity, existence, or nonemptiness condition."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "lem-local-reciprocal-of-a-real-power-series: the Statement is not an equivalence, so there is no forward implication obligation: Let $f(x)=\\sum_{n\\ge0}a_n(x-c)^n$ have positive radius and $a_0\\ne0$. Then on some neighbourhood of $c$, $1/f$ is represented by a convergent real power series about $c$."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "lem-local-reciprocal-of-a-real-power-series: the Statement is not an equivalence, so there is no reverse implication obligation: Let $f(x)=\\sum_{n\\ge0}a_n(x-c)^n$ have positive radius and $a_0\\ne0$. Then on some neighbourhood of $c$, $1/f$ is represented by a convergent real power series about $c$."
    }
  ]
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "lem-local-reciprocal-of-a-real-power-series",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "lem-cauchy-product-of-real-power-series",
    "declared_target": "lem-cauchy-product-of-real-power-series",
    "target_statement_provenance": "ai-altered",
    "targetPage": "power-series-and-real-analytic-functions",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-local-reciprocal-of-a-real-power-series",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "thm-geometric-series",
    "declared_target": "thm-geometric-series",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-local-reciprocal-of-a-real-power-series",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "cor-power-series-sums-are-continuous",
    "declared_target": "cor-power-series-sums-are-continuous",
    "target_statement_provenance": "ai-altered",
    "targetPage": "power-series-and-real-analytic-functions",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-local-reciprocal-of-a-real-power-series",
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
    "source": "lem-local-reciprocal-of-a-real-power-series",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "thm-double-series-fubini",
    "declared_target": "thm-double-series-fubini",
    "target_statement_provenance": "literature-derived",
    "targetPage": "absolute-convergence-and-rearrangement",
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

### `cor-power-series-sums-are-continuous`

````markdown
---
id: cor-power-series-sums-are-continuous
kind: corollary
title: "The sum of a real power series is continuous at every point strictly inside its interval of convergence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-power-series-uniform-on-compact-subintervals, thm-uniform-limit-continuous-real-functions, thm-algebra-of-continuous-functions]
justified_by: []
aliases: []
landmark: false
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
    - title: "E. Randles, Supplementary Notes for Real Analysis"
      url: "https://personal.colby.edu/~erandles/papers/Past_Courses/Supplementary_Notes.pdf"
pipeline_run: null
---

## Statement

If $f(x)=\sum_{n\ge0}a_n(x-c)^n$ for $|x-c|<R$, then $f$ is continuous at every $x_0$ satisfying $|x_0-c|<R$.

## Facts & Assumptions

**Given:** A power-series sum $f$ and a point $x_0$ strictly inside its radius.

[L1] The series converges uniformly on each closed interval strictly inside its radius ([[thm-power-series-uniform-on-compact-subintervals]]).

[L2] Every polynomial partial sum is continuous, since constants, the identity, powers, scalar multiples and finite sums are continuous ([[thm-algebra-of-continuous-functions]]).

[L3] A uniform limit of continuous real-valued functions is continuous ([[thm-uniform-limit-continuous-real-functions]]).

## Proof

**Proof technique:** direct.

1.1 Choose $\delta>0$ so small that $[x_0-\delta,x_0+\delta]$ lies strictly inside $|x-c|<R$. [given, choose]

1.2 The polynomial partial sums are continuous on this interval by [L2] and converge uniformly there to $f$ by [L1]. [L1, L2]

2.1 By [L3], $f$ is continuous on that interval, and in particular at $x_0$. [step 1.2, L3] ∎
````

### `lem-cauchy-product-of-real-power-series`

````markdown
---
id: lem-cauchy-product-of-real-power-series
kind: lemma
title: "Inside the common radius the product of two power-series sums is represented by the Cauchy product of their coefficients"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-power-series-convergence-dichotomy, def-cauchy-product, cor-cauchy-product-absolute]
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
    - title: "E. Randles, Supplementary Notes for Real Analysis"
      url: "https://personal.colby.edu/~erandles/papers/Past_Courses/Supplementary_Notes.pdf"
pipeline_run: null
---

## Statement

Suppose $f(x)=\sum_{n\ge0}a_n(x-c)^n$ and $g(x)=\sum_{n\ge0}b_n(x-c)^n$ have radii $R_f,R_g$. For $|x-c|<\min(R_f,R_g)$,

$$f(x)g(x)=\sum_{n=0}^{\infty}\left(\sum_{k=0}^{n}a_kb_{n-k}\right)(x-c)^n,$$

and the displayed product series converges absolutely.

## Facts & Assumptions

**Given:** The two power series in the statement and a point in their common open radius.

[L1] Both numerical series converge absolutely there ([[cor-power-series-convergence-dichotomy]]).

[L2] The Cauchy product of two absolutely convergent series converges absolutely to the product of their sums ([[def-cauchy-product]], [[cor-cauchy-product-absolute]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L2] to the numerical series with terms $a_k(x-c)^k$ and $b_j(x-c)^j$, whose absolute convergence is [L1]. [L1, L2]

2.1 Its $n$th Cauchy-product term is $\sum_{k=0}^{n}a_kb_{n-k}(x-c)^n$, which gives the formula and absolute convergence. [step 1.1, algebra] ∎
````

### `thm-double-series-fubini`

````markdown
---
id: thm-double-series-fubini
kind: theorem
title: "Fubini for double series: if $\\sum_i \\sum_j |a_{ij}|$ converges then both iterated sums and the sum along every bijection $\\mathbb{N} \\to \\mathbb{N} \\times \\mathbb{N}$ converge to one and the same value"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-dirichlet-rearrangement, def-rearrangement-and-unconditional-convergence, def-absolute-and-conditional-convergence, lem-absolute-convergence-implies-convergence, thm-n-cross-n-countable, def-injection-surjection-bijection, thm-nonnegative-series-bounded-partial-sums, thm-direct-comparison-test, lem-triangle-inequality-finite, lem-of-abs-value, thm-induction-principle, def-finite-sum, lem-finite-sum-laws, thm-algebra-of-limits, lem-limit-preserves-order, def-series, def-real-limit]
justified_by: []
aliases: []
landmark: true
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
    - title: "Fubini's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fubini%27s_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 8"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. C. Gunning, Analytic Functions of Several Complex Variables"
      url: "https://web.math.princeton.edu/~gunning/bk.pdf"
    - title: "John K. Hunter, An Introduction to Real Analysis, Chapter 4"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch4.pdf"
pipeline_run: null
---

## Statement

Let $a : \mathbb{N} \times \mathbb{N} \to \mathbb{R}$ be a doubly indexed array
of reals, written $a_{ij}$. Assume:

> **(H)** for every $i$ the series $\sum_j |a_{ij}|$ converges, with sum $A_i$;
> and the series $\sum_i A_i$ converges, with sum $L$.

Then, with $J : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$ any bijection
([[thm-n-cross-n-countable]], [[def-injection-surjection-bijection]]):

1. $\sum_n a_{J(n)}$ converges absolutely
   ([[def-absolute-and-conditional-convergence]]), and its sum $S$ is the same
   for every such bijection ([[thm-dirichlet-rearrangement]]);
2. for every $i$ the series $\sum_j a_{ij}$ converges, say to $R_i$; the series
   $\sum_i R_i$ converges absolutely; and $\sum_{i=0}^{\infty} R_i = S$;
3. for every $j$ the series $\sum_i |a_{ij}|$ converges and $\sum_i a_{ij}$
   converges, say to $C_j$; the series $\sum_j C_j$ converges absolutely; and
   $\sum_{j=0}^{\infty} C_j = S$.

In particular the two iterated sums exist and agree:

$$\sum_{i=0}^{\infty}\Bigl(\sum_{j=0}^{\infty} a_{ij}\Bigr) \;=\; \sum_{j=0}^{\infty}\Bigl(\sum_{i=0}^{\infty} a_{ij}\Bigr) \;=\; \sum_{n=0}^{\infty} a_{J(n)} .$$

**The hypothesis is on the absolute values, and it is stated as an iterated
condition, not as an unqualified "double sum".** Each row must be absolutely
summable, and the row totals must themselves be summable. Without it the two
iterated sums may both exist and differ, which is
[[fs-iterated-double-sums-always-agree]].

## Facts & Assumptions

**Given:** An array $a : \mathbb{N} \times \mathbb{N} \to \mathbb{R}$ satisfying (H), with row totals $A_i$ and $L = \sum_{i=0}^{\infty} A_i$, and a bijection $J : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$.

[L1] Finite sums: the empty sum is $0$, $\sum_{k<n+1}x_k = \sum_{k<n}x_k + x_n$, finite sums are additive, monotone in their terms, and may be split at any intermediate index ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L2] For a series of nonnegative terms, convergence is equivalent to the range of the partial sums being bounded above; then the sum is the supremum of that range, every partial sum is at most the sum, and the partial sums converge to it ([[thm-nonnegative-series-bounded-partial-sums]], [[def-series]]).

[L3] Direct comparison ([[thm-direct-comparison-test]]).

[L4] $\bigl|\sum_{k<n}x_k\bigr| \le \sum_{k<n}|x_k|$ ([[lem-triangle-inequality-finite]]).

[L5] Absolute value: $|x| \ge 0$, $-|x| \le x \le |x|$, and $|x| = 0$ exactly when $x = 0$ ([[lem-of-abs-value]]).

[L6] The principle of induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L7] A bijection is an injective surjection; $\mathbb{N} \times \mathbb{N}$ admits a bijection with $\mathbb{N}$ ([[def-injection-surjection-bijection]], [[thm-n-cross-n-countable]]).

[L8] If $\sum |x_k|$ converges then $\sum x_k$ converges ([[lem-absolute-convergence-implies-convergence]], [[def-absolute-and-conditional-convergence]]).

[L9] An absolutely convergent series has the same sum along every rearrangement ([[thm-dirichlet-rearrangement]], [[def-rearrangement-and-unconditional-convergence]]).

[L10] Algebra of limits, and limits preserve non-strict inequalities holding eventually ([[thm-algebra-of-limits]], [[lem-limit-preserves-order]], [[def-real-limit]]).

## Proof

**Proof technique:** direct.

1.1 **Rectangles are bounded by $L$.** For all $P, Q \in \mathbb{N}$ one has $\sum_{i<P}\sum_{j<Q}|a_{ij}| \le \sum_{i<P} A_i \le L$, since each inner sum is a partial sum of the convergent nonnegative series $\sum_j |a_{ij}|$ and so is at most $A_i$, and finite sums are monotone. [given, L1, L2]

1.2 **Single points.** Let $d : \mathbb{N}\times\mathbb{N} \to \mathbb{R}$ vanish except at one pair $(p,q)$, let $N \in \mathbb{N}$ and let $\rho$ be injective on $\{n : n<N\}$ with values in $\mathbb{N}\times\mathbb{N}$. If $(p,q) = \rho(n_0)$ for some (necessarily unique) $n_0 < N$, then $\sum_{n<N} d_{\rho(n)} = d_{pq}$; otherwise $\sum_{n<N} d_{\rho(n)} = 0$. Both follow by splitting the sum at $n_0$ and at $n_0+1$, all remaining terms being $0$. [L1, L7]

1.3 **List dominated by a rectangle.** For every $N \in \mathbb{N}$, every array $(c_{ij})$ of nonnegative reals, all $P, Q \in \mathbb{N}$ and every injective $\rho$ on $\{n : n<N\}$ with values in $\{(i,j) : i<P,\ j<Q\}$, one has $\sum_{n<N} c_{\rho(n)} \le \sum_{i<P}\sum_{j<Q} c_{ij}$. Induction on $N$, everything else universally quantified: at $N = 0$ the left side is $0$ and the right side is nonnegative; and passing from $N$ to $N+1$, put $(p,q) := \rho(N)$ and let $c''$ agree with $c$ except that $c''_{pq} := 0$, so that the induction hypothesis applied to $c''$ and $\rho$ restricted gives $\sum_{n<N} c_{\rho(n)} \le \sum_{i<P}\sum_{j<Q}c_{ij} - c_{pq}$, the subtraction coming from splitting the outer sum at $p$ and the inner one at $q$; adding $c_{pq}$ closes the induction. [L1, L6]

1.4 **Bounding indices.** For every $N$ there are $P, Q$ with $J(n) \in \{(i,j) : i<P,\ j<Q\}$ for all $n < N$; and for all $P, Q$ there is $N$ with $\{(i,j) : i<P,\ j<Q\} \subseteq \{J(n) : n<N\}$. Both are inductions using that the order on $\mathbb{N}$ is total, so that finitely many naturals have a strict upper bound; the second uses surjectivity of $J$ to name, for each pair, the index mapping onto it. [L6, L7]

1.5 For every $i$ the series $\sum_j a_{ij}$ converges, since $\sum_j |a_{ij}|$ does; write $R_i$ for its sum, so $|R_i| \le A_i$ by [L4] and [L10]. Hence $\sum_i |R_i|$ converges by comparison with $\sum_i A_i$, and $\sum_i R_i$ converges absolutely. [given, L2, L3, L4, L8, L10]

1.6 Let $\varepsilon > 0$ be real. Choose $P_0 \ge 1$ with $L - \sum_{i<P_0} A_i < \varepsilon$, possible because the partial sums of $\sum_i A_i$ converge to $L$; then choose, for each $i < P_0$, an index $Q_i$ with $A_i - \sum_{j<Q_i}|a_{ij}| < \varepsilon/P_0$, and let $Q_0$ be an upper bound of the finitely many $Q_i$, so that $A_i - \sum_{j<Q_0}|a_{ij}| < \varepsilon/P_0$ for every $i < P_0$. [given, L2, L6, choose]

2.1 **Rectangle to list.** Let $c$ be an array, let $P, Q, N \in \mathbb{N}$ and let $\rho$ be injective on $\{n : n<N\}$ with $\{(i,j) : i<P,\ j<Q\} \subseteq \{\rho(n) : n<N\}$. Let $c'$ agree with $c$ on that rectangle and vanish off it. Then $\sum_{i<P}\sum_{j<Q} c_{ij} = \sum_{n<N} c'_{\rho(n)}$. This is proved by induction on $P$, with an inner induction on $Q$: enlarging the rectangle by one column adds the single term $c_{PQ}$ to the left side, and changes $c'$ by an array vanishing except at $(P,Q)$, which by step 1.2 adds exactly $c_{PQ}$ to the right side; at $P = 0$ or $Q = 0$ both sides are $0$. [step 1.2, L1, L6]

2.2 By step 1.3 and step 1.4, every partial sum $\sum_{n<N}|a_{J(n)}|$ is at most $\sum_{i<P}\sum_{j<Q}|a_{ij}| \le L$; hence $\sum_n |a_{J(n)}|$ converges, with sum $\Lambda \le L$, and $\sum_n a_{J(n)}$ converges, say to $S$. Any two bijections $\mathbb{N} \to \mathbb{N}\times\mathbb{N}$ differ by a bijection of $\mathbb{N}$, so by [L9] the value $S$ does not depend on $J$; this is claim 1. [step 1.1, step 1.3, step 1.4, L2, L8, L9]

2.3 Write $D := \sum_{i<P_0}\sum_{j<Q_0} a_{ij}$ and $E := \sum_{i<P_0}\sum_{j<Q_0} |a_{ij}|$. By step 1.6 and monotonicity, $E > \sum_{i<P_0}(A_i - \varepsilon/P_0) = \sum_{i<P_0}A_i - \varepsilon > L - 2\varepsilon$, so $L - E < 2\varepsilon$. [step 1.6, L1]

2.4 By step 1.4 fix $N$ with $\{(i,j) : i<P_0,\ j<Q_0\} \subseteq \{J(n) : n<N\}$, and by step 1.4 again fix $P \ge P_0$, $Q \ge Q_0$ with $J(n)$ in the rectangle $\{(i,j) : i<P,\ j<Q\}$ for all $n<N$. [step 1.4, choose]

2.5 The transposed array $a^{\mathsf{T}}_{ij} := a_{ji}$ satisfies (H): its $i$-th row total is $\sum_j |a_{ji}|$, which converges because its partial sums $\sum_{j<Q}|a_{ji}|$ are bounded by $L$ by step 1.1; and the partial sums $\sum_{i<P}\sum_j |a_{ji}|$ are limits of the rectangle sums $\sum_{i<P}\sum_{j<Q}|a_{ji}|$, again bounded by $L$ by step 1.1, so the series of row totals converges. [step 1.1, L1, L2, L10]

3.1 For every $N$, $\bigl|S - \sum_{n<N}a_{J(n)}\bigr| \le \Lambda - \sum_{n<N}|a_{J(n)}|$: for $M > N$ the triangle inequality gives $\bigl|\sum_{n<M}a_{J(n)} - \sum_{n<N}a_{J(n)}\bigr| \le \sum_{n<M}|a_{J(n)}| - \sum_{n<N}|a_{J(n)}| \le \Lambda - \sum_{n<N}|a_{J(n)}|$, and letting $M$ grow, the limit preserves the two non-strict inequalities bounding the left side. [step 2.2, L1, L4, L10]

3.2 Let $a'$ agree with $a$ on the rectangle $\{(i,j) : i<P_0,\ j<Q_0\}$ and vanish off it. By step 2.1, $D = \sum_{n<N} a'_{J(n)}$ and $E = \sum_{n<N} |a'_{J(n)}|$; since $|a'_{J(n)}| \le |a_{J(n)}|$ termwise, monotonicity gives $E \le \sum_{n<N}|a_{J(n)}| \le \Lambda \le L$. [step 2.1, step 2.2, step 2.4, L1, L2]

4.1 By step 3.1 and step 3.2, $\bigl|S - \sum_{n<N} a_{J(n)}\bigr| \le \Lambda - \sum_{n<N}|a_{J(n)}| \le L - E < 2\varepsilon$. [step 3.1, step 2.3, step 3.2]

4.2 Also $\bigl|\sum_{n<N}a_{J(n)} - D\bigr| = \bigl|\sum_{n<N}(a - a')_{J(n)}\bigr| \le \sum_{n<N}|(a-a')_{J(n)}| \le \sum_{i<P}\sum_{j<Q}|(a-a')_{ij}| = \sum_{i<P}\sum_{j<Q}|a_{ij}| - E \le L - E < 2\varepsilon$, the middle inequality by step 1.3 and the following equality by splitting the iterated sum at $P_0$ and at $Q_0$, the array $a - a'$ agreeing with $a$ off the small rectangle and vanishing on it. [step 1.1, step 2.1, step 1.3, step 2.3, step 2.4, step 3.2, L1, L4]

4.3 For each $i < P_0$, $\bigl|R_i - \sum_{j<Q_0}a_{ij}\bigr| \le A_i - \sum_{j<Q_0}|a_{ij}| < \varepsilon/P_0$, by the argument of step 3.1 applied to the row $i$; summing over $i < P_0$ gives $\bigl|\sum_{i<P_0}R_i - D\bigr| < \varepsilon$. [step 3.1, step 1.6, L1, L4]

4.4 Writing $\Sigma R$ for the sum of $\sum_i R_i$, the same argument applied to the series $\sum_i R_i$ and the comparison $|R_i| \le A_i$ gives $\bigl|\Sigma R - \sum_{i<P_0}R_i\bigr| \le \sum_{i=0}^{\infty}|R_i| - \sum_{i<P_0}|R_i| \le L - \sum_{i<P_0}A_i < \varepsilon$. [step 3.1, step 1.5, step 1.6, L1, L2]

5.1 Combining step 4.1, step 4.2, step 4.3 and step 4.4, $|\Sigma R - S| < \varepsilon + \varepsilon + 2\varepsilon + 2\varepsilon = 6\varepsilon$. As $\varepsilon > 0$ was arbitrary and $|\Sigma R - S| \ge 0$, this forces $\Sigma R = S$, which with step 1.5 is claim 2. [step 1.5, step 4.1, step 4.2, step 4.3, step 4.4, L5]

6.1 Applying claims 1 and 2 to $a^{\mathsf{T}}$ and to the bijection $J^{\mathsf{T}}$ obtained by exchanging the coordinates of $J$ gives claim 3, since $a^{\mathsf{T}}_{J^{\mathsf{T}}(n)} = a_{J(n)}$ for every $n$, so the two linear series are the same series and have the same sum $S$. [step 2.2, step 5.1, step 2.5, L7] ∎

## Remarks

- **What the finite bookkeeping of steps 1.2 to 1.5 does, and why it is proved.** Three facts are needed and none of them is among the laws of [[lem-finite-sum-laws]], all of which compare sums term by term over the same index range: that a sum along an injective list picks up an isolated term exactly once; that an iterated sum over a rectangle equals the sum along any injective list containing that rectangle, of the array cut down to it; and that a sum of nonnegative terms along an injective list into a rectangle is at most the iterated sum over the rectangle. Each is proved by zeroing out one entry at a time, which keeps the argument inside those laws.

- **Where the hypothesis is used.** Only through step 1.1, which bounds every rectangle by $L$, and through step 1.6, which makes a single rectangle capture all but $2\varepsilon$ of the total mass. Everything else is bookkeeping. This is why the hypothesis has to be an absolute one: for a signed array no rectangle captures the mass, and the two iterated sums can disagree.

- **The independence of the enumeration is [[thm-dirichlet-rearrangement]] and nothing more.** Two bijections $\mathbb{N} \to \mathbb{N}\times\mathbb{N}$ differ by a bijection of $\mathbb{N}$, and an absolutely convergent series is unconditionally convergent. So the "sum of the array" is a well-defined real number attached to the array itself, and the theorem says the two iterated sums compute it.
````

### `thm-geometric-series`

````markdown
---
id: thm-geometric-series
kind: theorem
title: "For $|r| < 1$, $\\sum_{k \\ge 0} r^k = 1/(1-r)$, and for $|r| \\ge 1$ the series diverges"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-series, lem-power-difference-factorisation, lem-geometric-sequence-null, lem-nth-term-test, def-integer-power, thm-algebra-of-limits, def-finite-sum, lem-of-abs-value, lem-power-monotone, thm-induction-principle, def-real-limit]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
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
    - title: "Geometric series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Geometric_series"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $r \in \mathbb{R}$ and let $r^k$ be the integer power ([[def-integer-power]]),
so that $r^0 = 1$ for every $r$, including $r = 0$.

1. If $|r| < 1$ then the series $\sum r^k$ converges ([[def-series]]) and
   $$\sum_{k=0}^{\infty} r^{k} \;=\; \frac{1}{1-r} .$$
2. If $|r| \ge 1$ then $\sum r^k$ diverges.

The series starts at $k = 0$ and its first term is $r^0 = 1$; in particular
$\sum_{k=0}^{\infty} 2^{-k} = 2$, while the series starting at $k = 1$ sums to
$1$. Which starting index is meant has to be said, and it is said here.

## Facts & Assumptions

**Given:** A real number $r$, the integer powers $r^k$ ([[def-integer-power]]), and the partial sums $s_n = \sum_{k<n} r^k$ of $\sum r^k$ ([[def-series]], [[def-finite-sum]]).

[L1] Factorisation of a difference of powers: for $a, b \in \mathbb{R}$ and natural $n \ge 1$, $b^n - a^n = (b-a)\sum_{k=0}^{n-1} a^k b^{\,n-1-k}$ ([[lem-power-difference-factorisation]]).

[L2] For $|r| < 1$ the sequence $(r^k)$ is null, that is $r^k \to 0$ ([[lem-geometric-sequence-null]]).

[L3] Algebra of limits: sums, differences and quotients of convergent sequences converge to the corresponding combination, the quotient rule requiring a nonzero limit and nonzero denominators ([[thm-algebra-of-limits]], [[def-real-limit]]).

[L4] Absolute value: $|xy| = |x|\,|y|$, $|x| \ge 0$, and $|x| = 0$ exactly when $x = 0$; also $|1| = 1$, since $1 > 0$ ([[lem-of-abs-value]]).

[L5] Powers and order: $a^0 = 1$ for every $a$; if $a \ge 1$ and $n \ge 1$ then $a^n \ge a \ge 1$; and $1^n = 1$ for every $n$ ([[lem-power-monotone]], [[def-integer-power]]).

[L6] The principle of induction ([[thm-induction-principle]]).

[L7] If a series converges then its terms tend to $0$ ([[lem-nth-term-test]]).

[L8] Notation of [[def-finite-sum]]: $\sum_{k=0}^{n-1} x_k$ is $\sum_{k<n} x_k$, and the empty sum $\sum_{k<0} x_k$ is $0$.

## Proof

**Proof technique:** cases.

1.1 Assume $|r| < 1$. [assume-case lt]

1.2 Assume instead $|r| \ge 1$. [assume-case ge]

1.3 For every natural $n \ge 1$, applying [L1] with $b = 1$ and $a = r$ gives $1 - r^n = (1-r)\sum_{k=0}^{n-1} r^k \cdot 1^{\,n-1-k} = (1-r)\,s_n$, using $1^m = 1$ and the notation of [L8]. [L1, L5, L8]

1.4 At $n = 0$ the identity $1 - r^n = (1-r)s_n$ also holds, both sides being $0$ because $r^0 = 1$ and $s_0$ is the empty sum. [L5, L8]

2.1 In the case $|r| < 1$ we have $r \ne 1$, since $|1| = 1$ and $|r| < 1$; hence $1 - r \ne 0$. [step 1.1, L4, algebra]

2.2 In the case $|r| \ge 1$, an induction gives $|r^k| = |r|^k$ for every $k \in \mathbb{N}$: at $k = 0$ both sides are $1$, and if $|r^k| = |r|^k$ then $|r^{k+1}| = |r^k \cdot r| = |r^k|\,|r| = |r|^k |r| = |r|^{k+1}$. [step 1.2, L4, L5, L6]

2.3 In the case $|r| \ge 1$ we get $|r|^k \ge 1$ for every $k \in \mathbb{N}$: at $k = 0$ this reads $1 \ge 1$, and for $k \ge 1$ it is the comparison $|r|^k \ge |r| \ge 1$. [step 1.2, L5]

3.1 In the case $|r| < 1$, dividing by $1 - r \ne 0$ gives $s_n = (1 - r^n)/(1-r)$ for every $n \in \mathbb{N}$. [step 2.1, step 1.3, step 1.4, algebra]

3.2 In the case $|r| \ge 1$, combining the two previous steps gives $|r^k - 0| = |r^k| = |r|^k \ge 1$ for every $k \in \mathbb{N}$. [step 2.2, step 2.3]

4.1 In the case $|r| < 1$ the sequence $(r^n)$ is null, so $1 - r^n \to 1$ and therefore $s_n \to 1/(1-r)$, the denominator being the nonzero constant $1-r$; hence $\sum r^k$ converges with sum $1/(1-r)$, which is claim 1. [step 1.1, step 3.1, step 2.1, L2, L3]

4.2 In the case $|r| \ge 1$ the sequence $(r^k)$ does not converge to $0$, since the rational tolerance $\varepsilon = 1$ admits no index $K$ with $|r^k - 0| < 1$ for all $k \ge K$; so by the term test $\sum r^k$ diverges, which is claim 2. [step 3.2, L7]

5.1 The two cases $|r| < 1$ and $|r| \ge 1$ exhaust the possibilities, since the order on $\mathbb{R}$ is total, so claims 1 and 2 together cover every real $r$. [step 4.1, step 4.2, cases-exhaustive] ∎

## Remarks

- **The divergence half needs no separate treatment of $r = 1$ and $r = -1$.** Both are covered by $|r| \ge 1$, and the single reason is the same in every case: the terms have absolute value at least $1$, so they cannot tend to $0$. For $r = 1$ the partial sums are $s_n = n$ and run to $+\infty$; for $r = -1$ they oscillate between $0$ and $1$. The theorem says only that neither converges, which is all that "diverges" means here ([[def-series]]).

- **Why the identity is proved at $n = 0$ separately.** [[lem-power-difference-factorisation]] requires $n \ge 1$, since its right-hand side is a sum over $k < n$ of a term involving $b^{\,n-1-k}$, and $n-1$ is not a natural number at $n = 0$. The identity is still true at $n = 0$, but by inspection of two empty objects rather than by that lemma, and step 1.4 says so rather than letting the reader assume the citation covers it.
````

