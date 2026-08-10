## Selection reasons

- critical risk (10): 4 declared dependencies; 4 cited facts; boundary-sensitive language; quotient or equivalence-class construction; analytic limiting/completeness language

## Target item — `thm-real-analytic-functions-closed-under-algebra-quotients-and-composition`

Normalized current SHA-256: `b329b5fdcda33c6b7195ec9d2813b062856ca1ad6f6bf758639a5a4c7b3680dc`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: thm-real-analytic-functions-closed-under-algebra-quotients-and-composition
kind: theorem
title: "Real-analytic functions are closed under sums, products and compositions, and under quotients where the denominator is nonzero"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-real-analytic-function, lem-cauchy-product-of-real-power-series, lem-local-composition-of-real-power-series, lem-local-reciprocal-of-a-real-power-series]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Analytic function, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Analytic_function"
    - title: "Power series, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Power_series"
    - title: "E. Randles, Supplementary Notes for Real Analysis"
      url: "https://personal.colby.edu/~erandles/papers/Past_Courses/Supplementary_Notes.pdf"
    - title: "Northwestern Math 320-2 lecture notes"
      url: "https://sites.math.northwestern.edu/scg479/courses/notes/lecture-notes-320-2.pdf"
pipeline_run: null
---

## Statement

On open real domains, sums and products of real-analytic functions are real analytic. If $g$ is nonzero throughout the domain, then $f/g$ is real analytic. If $g:U\to V$ and $f:V\to\mathbb R$ are real analytic, then $f\circ g$ is real analytic on $U$.

## Facts & Assumptions

**Given:** Real-analytic functions with compatible domains as in the statement.

[L1] Each function has a convergent local power-series representation at every point ([[def-real-analytic-function]]).

[L2] Products are represented by Cauchy products, local reciprocals exist when the constant term is nonzero, and local compositions have convergent expansions ([[lem-cauchy-product-of-real-power-series]], [[lem-local-reciprocal-of-a-real-power-series]], [[lem-local-composition-of-real-power-series]]).

## Proof

**Proof technique:** cases.

1.1 For sums and products, fix a point and choose local series for the functions by [L1]. Termwise addition gives a convergent series for the sum, while [L2] gives one for the product. [assume-case algebra, L1, L2]

1.2 For a quotient, the denominator is nonzero at the point, so its local series has nonzero constant term. By [L2] it has a local reciprocal series, whose Cauchy product with the numerator series represents the quotient. [assume-case quotient, L1, L2]

1.3 For a composition, centre the outer series at the inner value. The inner series then has zero constant term, and absolute convergence lets one shrink the radius until the sum of the absolute values of its nonconstant terms is smaller than the outer radius. The composition lemma in [L2] then supplies a local series. [assume-case composition, L1, L2]

2.1 The cases in steps 1.1--1.3 are precisely the operations in the statement. Each construction works at every point of the relevant open domain, so the definition [L1] proves all assertions. [step 1.1, step 1.2, step 1.3, L1, cases-exhaustive] ∎
````

## Wave 13 provenance row

```json
{
  "id": "thm-real-analytic-functions-closed-under-algebra-quotients-and-composition",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://encyclopediaofmath.org/wiki/Power_series",
    "https://personal.colby.edu/~erandles/papers/Past_Courses/Supplementary_Notes.pdf",
    "https://sites.math.northwestern.edu/scg479/courses/notes/lecture-notes-320-2.pdf"
  ],
  "rationale": "The sources state closure of analytic functions under sums, products, nonvanishing quotients, and composition. The item consolidates these with explicit compatible-domain hypotheses and a proof through its local series lemmas.",
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
      "source": "def-real-analytic-function",
      "source_section": "Definition",
      "quote": "Let $U\\subseteq\\mathbb R$ be open ([[def-open-and-closed-in-r]]). A function $f:U\\to\\mathbb R$ is **real analytic on $U$** if, for every $c\\in U$, there are a real $r>0$ and real coefficients $(a_n)_{n\\in\\mathbb N}$ such that $N_r(c)\\subseteq U$ and\n\n$$f(x)=\\sum_{n=0}^{\\infty}a_n(x-c)^n\\qquad(x\\in N_r(c)).$$\n\nThe representing series must converge throughout this neighbourhood ([[def-real-power-series-and-radius-of-convergence]], [[def-neighbourhood-r]]). The radius and coefficients may initially depend on $c$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2",
        "1.3",
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-cauchy-product-of-real-power-series",
      "source_section": "Statement",
      "quote": "Suppose $f(x)=\\sum_{n\\ge0}a_n(x-c)^n$ and $g(x)=\\sum_{n\\ge0}b_n(x-c)^n$ have radii $R_f,R_g$. For $|x-c|<\\min(R_f,R_g)$,\n\n$$f(x)g(x)=\\sum_{n=0}^{\\infty}\\left(\\sum_{k=0}^{n}a_kb_{n-k}\\right)(x-c)^n,$$\n\nand the displayed product series converges absolutely.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2",
        "1.3"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-local-reciprocal-of-a-real-power-series",
      "source_section": "Statement",
      "quote": "Let $f(x)=\\sum_{n\\ge0}a_n(x-c)^n$ have positive radius and $a_0\\ne0$. Then on some neighbourhood of $c$, $1/f$ is represented by a convergent real power series about $c$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2",
        "1.3"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-local-composition-of-real-power-series",
      "source_section": "Statement",
      "quote": "Let $F(y)=\\sum_{m\\ge0}b_m(y-e)^m$ have positive radius $S$, and let $G(x)-e=\\sum_{n\\ge1}c_n(x-d)^n$ converge near $d$. If some $r>0$ satisfies\n\n$$B_r:=\\sum_{n\\ge1}|c_n|r^n<S,$$\n\nthen $F\\circ G$ is represented for $|x-d|<r$ by a convergent power series about $d$, obtained by expanding and regrouping $\\sum_m b_m(G(x)-e)^m$.",
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
      "claim": "For sums and products, fix a point and choose local series for the functions by [L1]. Termwise addition gives a convergent series for the sum, while [L2] gives one for the product.",
      "step": "1.1",
      "inputs": [
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "For a quotient, the denominator is nonzero at the point, so its local series has nonzero constant term. By [L2] it has a local reciprocal series, whose Cauchy product with the numerator series represents the quotient.",
      "step": "1.2",
      "inputs": [
        "L2",
        "L1"
      ]
    },
    {
      "id": "step-1.3",
      "claim": "For a composition, centre the outer series at the inner value. The inner series then has zero constant term, and absolute convergence lets one shrink the radius until the sum of the absolute values of its nonconstant terms is smaller than the outer radius. The composition lemma in [L2] then supplies a local series.",
      "step": "1.3",
      "inputs": [
        "L2",
        "L1"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "The cases in steps 1.1--1.3 are precisely the operations in the statement. Each construction works at every point of the relevant open domain, so the definition [L1] proves all assertions.",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "step 1.3",
        "L1",
        "step 1.2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "thm-real-analytic-functions-closed-under-algebra-quotients-and-composition: the Statement fixes the displayed objects and has no conclusion depending on an unlicensed choice from an empty family: On open real domains, sums and products of real-analytic functions are real analytic. If $g$ is nonzero throughout the domain, then $f/g$ is real analytic. If $g:U\\to V$ and $f:V\\to\\mathbb R$ are real analytic, then $f\\c"
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "thm-real-analytic-functions-closed-under-algebra-quotients-and-composition: no independent zero-parameter boundary remains after the stated hypotheses and definitions; checked against the Statement: On open real domains, sums and products of real-analytic functions are real analytic. If $g$ is nonzero throughout the domain, then $f/g$ is real analytic. If $g:U\\to V$ and $f:V\\to\\mathbb R$ are real analytic, then $f\\c"
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "thm-real-analytic-functions-closed-under-algebra-quotients-and-composition: the assertion has no separate unit-size case; its quantified argument applies without a one-case split: On open real domains, sums and products of real-analytic functions are real analytic. If $g$ is nonzero throughout the domain, then $f/g$ is real analytic. If $g:U\\to V$ and $f:V\\to\\mathbb R$ are real analytic, then $f\\c"
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "thm-real-analytic-functions-closed-under-algebra-quotients-and-composition: no geometric or algebraic degeneracy changes the asserted conclusion; checked against the Statement: On open real domains, sums and products of real-analytic functions are real analytic. If $g$ is nonzero throughout the domain, then $f/g$ is real analytic. If $g:U\\to V$ and $f:V\\to\\mathbb R$ are real analytic, then $f\\c"
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "thm-real-analytic-functions-closed-under-algebra-quotients-and-composition: no interval or radial endpoint is part of the conclusion; checked against the Statement: On open real domains, sums and products of real-analytic functions are real analytic. If $g$ is nonzero throughout the domain, then $f/g$ is real analytic. If $g:U\\to V$ and $f:V\\to\\mathbb R$ are real analytic, then $f\\c"
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 1.1: every witness selected there is drawn after the proof establishes the relevant positivity, existence, or nonemptiness condition."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "thm-real-analytic-functions-closed-under-algebra-quotients-and-composition: the Statement is not an equivalence, so there is no forward implication obligation: On open real domains, sums and products of real-analytic functions are real analytic. If $g$ is nonzero throughout the domain, then $f/g$ is real analytic. If $g:U\\to V$ and $f:V\\to\\mathbb R$ are real analytic, then $f\\c"
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "thm-real-analytic-functions-closed-under-algebra-quotients-and-composition: the Statement is not an equivalence, so there is no reverse implication obligation: On open real domains, sums and products of real-analytic functions are real analytic. If $g$ is nonzero throughout the domain, then $f/g$ is real analytic. If $g:U\\to V$ and $f:V\\to\\mathbb R$ are real analytic, then $f\\c"
    }
  ]
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "thm-real-analytic-functions-closed-under-algebra-quotients-and-composition",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "def-real-analytic-function",
    "declared_target": "def-real-analytic-function",
    "target_statement_provenance": "ai-altered",
    "targetPage": "power-series-and-real-analytic-functions",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-real-analytic-functions-closed-under-algebra-quotients-and-composition",
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
    "source": "thm-real-analytic-functions-closed-under-algebra-quotients-and-composition",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "lem-local-composition-of-real-power-series",
    "declared_target": "lem-local-composition-of-real-power-series",
    "target_statement_provenance": "ai-altered",
    "targetPage": "power-series-and-real-analytic-functions",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-real-analytic-functions-closed-under-algebra-quotients-and-composition",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "lem-local-reciprocal-of-a-real-power-series",
    "declared_target": "lem-local-reciprocal-of-a-real-power-series",
    "target_statement_provenance": "ai-altered",
    "targetPage": "power-series-and-real-analytic-functions",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  }
]
```

## Relevant current generated-risk rows

```json
[]
```

## Full exact-current text of every cited or declared item (4)

### `def-real-analytic-function`

````markdown
---
id: def-real-analytic-function
kind: definition
title: "A real-analytic function on an open subset of $\\mathbb{R}$ is locally represented by a convergent real power series"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-power-series-and-radius-of-convergence, def-open-and-closed-in-r, def-neighbourhood-r]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Analytic function, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Analytic_function"
    - title: "E. Randles, Supplementary Notes for Real Analysis"
      url: "https://personal.colby.edu/~erandles/papers/Past_Courses/Supplementary_Notes.pdf"
pipeline_run: null
---

## Definition

Let $U\subseteq\mathbb R$ be open ([[def-open-and-closed-in-r]]). A function $f:U\to\mathbb R$ is **real analytic on $U$** if, for every $c\in U$, there are a real $r>0$ and real coefficients $(a_n)_{n\in\mathbb N}$ such that $N_r(c)\subseteq U$ and

$$f(x)=\sum_{n=0}^{\infty}a_n(x-c)^n\qquad(x\in N_r(c)).$$

The representing series must converge throughout this neighbourhood ([[def-real-power-series-and-radius-of-convergence]], [[def-neighbourhood-r]]). The radius and coefficients may initially depend on $c$.
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

### `lem-local-composition-of-real-power-series`

````markdown
---
id: lem-local-composition-of-real-power-series
kind: lemma
title: "A composition of convergent real power series has a convergent power-series expansion wherever the inner series maps a neighbourhood into the outer disk of convergence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-cauchy-product-absolute, thm-double-series-fubini, cor-power-series-convergence-dichotomy]
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
    - title: "E. Randles, Supplementary Notes for Real Analysis"
      url: "https://personal.colby.edu/~erandles/papers/Past_Courses/Supplementary_Notes.pdf"
pipeline_run: null
---

## Statement

Let $F(y)=\sum_{m\ge0}b_m(y-e)^m$ have positive radius $S$, and let $G(x)-e=\sum_{n\ge1}c_n(x-d)^n$ converge near $d$. If some $r>0$ satisfies

$$B_r:=\sum_{n\ge1}|c_n|r^n<S,$$

then $F\circ G$ is represented for $|x-d|<r$ by a convergent power series about $d$, obtained by expanding and regrouping $\sum_m b_m(G(x)-e)^m$.

## Facts & Assumptions

**Given:** The outer and inner series and $r$ from the statement.

[L1] The Cauchy product of two absolutely convergent series converges absolutely, and its absolute sum is at most the product of the two absolute sums ([[cor-cauchy-product-absolute]]).

[L2] The outer series converges absolutely at every distance below $S$ ([[cor-power-series-convergence-dichotomy]]).

[L3] An absolutely convergent multiple series may be regrouped ([[thm-double-series-fubini]]).

## Proof

**Proof technique:** constructive.

1.1 For each $m$, repeatedly use [L1] to expand $(G(x)-e)^m$ in powers of $x-d$; take the zeroth power to be $1$. For $|x-d|\le r$, the inner numerical series is absolutely convergent with absolute sum at most $B_r$, so the expanded $m$th power has absolute term sum at most $B_r^m$. [given, construct, L1]

2.1 Consequently, for $|x-d|\le r$, the sum of absolute values of all expanded terms with outer degree $m$ is at most $|b_m|B_r^m$. The series of these bounds converges because $B_r<S$ and [L2] applies. [step 1.1, L2, algebra]

3.1 By [L3], regroup the absolutely convergent expansion by total powers of $x-d$. The resulting power series converges on $|x-d|<r$ and sums to $\sum_m b_m(G(x)-e)^m=F(G(x))$. [step 1.1, step 2.1, L3, discharge-construct] ∎
````

### `lem-local-reciprocal-of-a-real-power-series`

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

