## Selection reasons

- high risk (7): 3 cited facts; boundary-sensitive language; quotient or equivalence-class construction; analytic limiting/completeness language

## Target item — `ex-a-rational-function-is-real-analytic-via-a-geometric-series`

Normalized current SHA-256: `aed2ea1fe90f88681adc05663e9042b0e6105863c22324fb248e596a0975ec5f`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: ex-a-rational-function-is-real-analytic-via-a-geometric-series
kind: example
title: "A rational function with nonvanishing denominator is locally represented by geometric-series expansions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-local-reciprocal-of-a-real-power-series, thm-real-analytic-functions-closed-under-algebra-quotients-and-composition, thm-geometric-series]
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
    - title: "Analytic function, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Analytic_function"
    - title: "Power series, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Power_series"
    - title: "Northwestern Math 320-2 lecture notes"
      url: "https://sites.math.northwestern.edu/scg479/courses/notes/lecture-notes-320-2.pdf"
pipeline_run: null
---

## Statement

The rational function $r(x)=1/(2-x)$ is real analytic on $\mathbb R\setminus\{2\}$. At every $c\ne2$ it has the local expansion

$$\frac1{2-x}=\sum_{n=0}^{\infty}\frac{(x-c)^n}{(2-c)^{n+1}}\qquad(|x-c|<|2-c|).$$

## Facts & Assumptions

**Given:** A centre $c\ne2$.

[L1] The geometric series converges for arguments of absolute value below $1$ ([[thm-geometric-series]]).

[L2] A nonvanishing analytic denominator has a local analytic reciprocal ([[lem-local-reciprocal-of-a-real-power-series]], [[thm-real-analytic-functions-closed-under-algebra-quotients-and-composition]]).

## Verification

**Proof technique:** direct.

1.1 Factor $2-x=(2-c)(1-(x-c)/(2-c))$ and apply [L1]. The resulting series is exactly the displayed one and converges when $|x-c|<|2-c|$. [given, L1, algebra]

2.1 Since every $c\ne2$ admits this positive-radius local representation, $r$ is real analytic on its domain, in agreement with [L2]. [step 1.1, L2] ∎
````

## Wave 13 provenance row

```json
{
  "id": "ex-a-rational-function-is-real-analytic-via-a-geometric-series",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://encyclopediaofmath.org/wiki/Power_series",
    "https://sites.math.northwestern.edu/scg479/courses/notes/lecture-notes-320-2.pdf"
  ],
  "rationale": "The sources derive rational-function analyticity from geometric or reciprocal power series. The item works out the local series of 1/(2-x) at an arbitrary c≠2.",
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
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-local-reciprocal-of-a-real-power-series",
      "source_section": "Statement",
      "quote": "Let $f(x)=\\sum_{n\\ge0}a_n(x-c)^n$ have positive radius and $a_0\\ne0$. Then on some neighbourhood of $c$, $1/f$ is represented by a convergent real power series about $c$.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-real-analytic-functions-closed-under-algebra-quotients-and-composition",
      "source_section": "Statement",
      "quote": "On open real domains, sums and products of real-analytic functions are real analytic. If $g$ is nonzero throughout the domain, then $f/g$ is real analytic. If $g:U\\to V$ and $f:V\\to\\mathbb R$ are real analytic, then $f\\circ g$ is real analytic on $U$.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Factor $2-x=(2-c)(1-(x-c)/(2-c))$ and apply [L1]. The resulting series is exactly the displayed one and converges when $|x-c|<|2-c|$.",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Since every $c\\ne2$ admits this positive-radius local representation, $r$ is real analytic on its domain, in agreement with [L2].",
      "step": "2.1",
      "inputs": [
        "L2",
        "step 1.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "ex-a-rational-function-is-real-analytic-via-a-geometric-series: the Statement fixes the displayed objects and has no conclusion depending on an unlicensed choice from an empty family: The rational function $r(x)=1/(2-x)$ is real analytic on $\\mathbb R\\setminus\\{2\\}$. At every $c\\ne2$ it has the local expansion $$\\frac1{2-x}=\\sum_{n=0}^{\\infty}\\frac{(x-c)^n}{(2-c)^{n+1}}\\qquad(|x-c|<|2-c|).$$"
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "ex-a-rational-function-is-real-analytic-via-a-geometric-series: no independent zero-parameter boundary remains after the stated hypotheses and definitions; checked against the Statement: The rational function $r(x)=1/(2-x)$ is real analytic on $\\mathbb R\\setminus\\{2\\}$. At every $c\\ne2$ it has the local expansion $$\\frac1{2-x}=\\sum_{n=0}^{\\infty}\\frac{(x-c)^n}{(2-c)^{n+1}}\\qquad(|x-c|<|2-c|).$$"
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "ex-a-rational-function-is-real-analytic-via-a-geometric-series: the assertion has no separate unit-size case; its quantified argument applies without a one-case split: The rational function $r(x)=1/(2-x)$ is real analytic on $\\mathbb R\\setminus\\{2\\}$. At every $c\\ne2$ it has the local expansion $$\\frac1{2-x}=\\sum_{n=0}^{\\infty}\\frac{(x-c)^n}{(2-c)^{n+1}}\\qquad(|x-c|<|2-c|).$$"
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "ex-a-rational-function-is-real-analytic-via-a-geometric-series: no geometric or algebraic degeneracy changes the asserted conclusion; checked against the Statement: The rational function $r(x)=1/(2-x)$ is real analytic on $\\mathbb R\\setminus\\{2\\}$. At every $c\\ne2$ it has the local expansion $$\\frac1{2-x}=\\sum_{n=0}^{\\infty}\\frac{(x-c)^n}{(2-c)^{n+1}}\\qquad(|x-c|<|2-c|).$$"
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "ex-a-rational-function-is-real-analytic-via-a-geometric-series: no interval or radial endpoint is part of the conclusion; checked against the Statement: The rational function $r(x)=1/(2-x)$ is real analytic on $\\mathbb R\\setminus\\{2\\}$. At every $c\\ne2$ it has the local expansion $$\\frac1{2-x}=\\sum_{n=0}^{\\infty}\\frac{(x-c)^n}{(2-c)^{n+1}}\\qquad(|x-c|<|2-c|).$$"
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "ex-a-rational-function-is-real-analytic-via-a-geometric-series: the proof uses only given objects, formulas, or universal instantiation and makes no choice from a possibly empty family; see Statement: The rational function $r(x)=1/(2-x)$ is real analytic on $\\mathbb R\\setminus\\{2\\}$. At every $c\\ne2$ it has the local expansion $$\\frac1{2-x}=\\sum_{n=0}^{\\infty}\\frac{(x-c)^n}{(2-c)^{n+1}}\\qquad(|x-c|<|2-c|).$$"
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "ex-a-rational-function-is-real-analytic-via-a-geometric-series: the Statement is not an equivalence, so there is no forward implication obligation: The rational function $r(x)=1/(2-x)$ is real analytic on $\\mathbb R\\setminus\\{2\\}$. At every $c\\ne2$ it has the local expansion $$\\frac1{2-x}=\\sum_{n=0}^{\\infty}\\frac{(x-c)^n}{(2-c)^{n+1}}\\qquad(|x-c|<|2-c|).$$"
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "ex-a-rational-function-is-real-analytic-via-a-geometric-series: the Statement is not an equivalence, so there is no reverse implication obligation: The rational function $r(x)=1/(2-x)$ is real analytic on $\\mathbb R\\setminus\\{2\\}$. At every $c\\ne2$ it has the local expansion $$\\frac1{2-x}=\\sum_{n=0}^{\\infty}\\frac{(x-c)^n}{(2-c)^{n+1}}\\qquad(|x-c|<|2-c|).$$"
    }
  ]
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "ex-a-rational-function-is-real-analytic-via-a-geometric-series",
    "sourcePage": "power-series-and-real-analytic-functions-examples",
    "batch": "wave13-real-analysis",
    "target": "lem-local-reciprocal-of-a-real-power-series",
    "declared_target": "lem-local-reciprocal-of-a-real-power-series",
    "target_statement_provenance": "ai-altered",
    "targetPage": "power-series-and-real-analytic-functions",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-a-rational-function-is-real-analytic-via-a-geometric-series",
    "sourcePage": "power-series-and-real-analytic-functions-examples",
    "batch": "wave13-real-analysis",
    "target": "thm-real-analytic-functions-closed-under-algebra-quotients-and-composition",
    "declared_target": "thm-real-analytic-functions-closed-under-algebra-quotients-and-composition",
    "target_statement_provenance": "ai-altered",
    "targetPage": "power-series-and-real-analytic-functions",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-a-rational-function-is-real-analytic-via-a-geometric-series",
    "sourcePage": "power-series-and-real-analytic-functions-examples",
    "batch": "wave13-real-analysis",
    "target": "thm-geometric-series",
    "declared_target": "thm-geometric-series",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
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

## Full exact-current text of every cited or declared item (3)

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

### `thm-real-analytic-functions-closed-under-algebra-quotients-and-composition`

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

