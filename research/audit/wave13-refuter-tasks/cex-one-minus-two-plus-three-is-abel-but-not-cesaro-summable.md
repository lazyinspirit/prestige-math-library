## Selection reasons

- high risk (6): 4 declared dependencies; 4 cited facts; analytic limiting/completeness language

## Target item — `cex-one-minus-two-plus-three-is-abel-but-not-cesaro-summable`

Normalized current SHA-256: `457c29608885838183f3c893a9fa6fb14f4026f96201219d2c29e83c484ad4d7`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: cex-one-minus-two-plus-three-is-abel-but-not-cesaro-summable
kind: counterexample
title: "$1-2+3-4+\\cdots$ is Abel summable to $1/4$ but is not Cesaro summable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-abel-and-cesaro-summability-of-a-series, thm-termwise-differentiation-of-a-real-power-series, thm-geometric-series, def-cesaro-mean]
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
    - title: "Abel summability, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Abel_summability_method"
    - title: "Cesàro summation, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Cesaro_summation_method"
    - title: "Cesàro summation methods, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Ces%C3%A0ro_summation_methods"
    - title: "S. Semmes, Rice Math 322 notes"
      url: "https://math.rice.edu/~semmes/math322.pdf"
pipeline_run: null
---

## Statement

The series $\sum_{n\ge0}(-1)^n\iota(n+1)$ is Abel summable to $1/4$, but its Cesaro means do not converge.

## Facts & Assumptions

**Given:** Coefficients $a_n=(-1)^n\iota(n+1)$.

[L1] The geometric series for $1/(1+x)$ may be differentiated term by term for $|x|<1$ ([[thm-geometric-series]], [[thm-termwise-differentiation-of-a-real-power-series]]).

[L2] Cesaro means average the inclusive partial sums ([[def-cesaro-mean]], [[def-abel-and-cesaro-summability-of-a-series]]).

## Verification

**Proof technique:** direct.

1.1 Differentiating $\sum_{n\ge0}(-1)^nx^n=1/(1+x)$ and combining with the original series gives $\sum_{n\ge0}(-1)^n\iota(n+1)x^n=1/(1+x)^2$ for $0\le x<1$. Its limit as $x\uparrow1$ is $1/4$. [L1, algebra]

1.2 The inclusive partial sums satisfy $S_{2m}=\iota(m+1)$ and $S_{2m+1}=-\iota(m+1)$. Hence $\sigma_{2m}=\iota(m+1)/\iota(2m+1)\to1/2$, while $\sigma_{2m+1}=0$. [L2, algebra]

2.1 Thus the Cesaro means have two distinct subsequential limits and do not converge, whereas step 1.1 proves Abel summability to $1/4$. [step 1.1, step 1.2] ∎
````

## Wave 13 provenance row

```json
{
  "id": "cex-one-minus-two-plus-three-is-abel-but-not-cesaro-summable",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://encyclopediaofmath.org/wiki/Ces%C3%A0ro_summation_methods",
    "https://math.rice.edu/~semmes/math322.pdf"
  ],
  "rationale": "The sources develop Abel and Cesàro summability and the Cauchy-product generating-function calculation. The item works out the classical 1-2+3-4+… separation example and its two Cesàro subsequences locally.",
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
      "fact": "L1",
      "source": "thm-termwise-differentiation-of-a-real-power-series",
      "source_section": "Statement",
      "quote": "Let\n\n$$f(x)=\\sum_{n=0}^{\\infty}a_n(x-c)^n$$\n\nhave radius $R$. For every $x$ with $|x-c|<R$, the function $f$ is differentiable at $x$ ([[def-derivative]]) and\n\n$$f'(x)=\\sum_{n=0}^{\\infty}\\iota(n+1)a_{n+1}(x-c)^n.$$\n\nThe differentiated series has the same radius $R$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-cesaro-mean",
      "source_section": "Definition",
      "quote": "Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with finite sums as in\n[[def-finite-sum]]. For $n \\in \\mathbb{N}$ the **$n$-th Cesaro mean** of\n$(x_k)$ is\n\n$$\\sigma_n \\;:=\\; \\frac{1}{n+1}\\sum_{k=0}^{n} x_k \\;=\\; \\frac{x_0 + x_1 + \\dots + x_n}{n+1},$$\n\nwhere $n+1$ denotes the canonical natural $(n+1)\\cdot 1_{\\mathbb{R}}$.\n\n**This is well defined.** The only thing that could fail is the division: since\n$n + 1 \\ge 1$, the canonical natural $(n+1)\\cdot 1_{\\mathbb{R}}$ is strictly\npositive ([[lem-of-naturals-positive]]), hence nonzero by trichotomy\n([[def-complete-ordered-field]]), hence invertible. The sum\n$\\sum_{k=0}^{n} x_k$ is the finite sum $\\sum_{k < n+1} x_k$ of\n[[def-finite-sum]], a single well-determined real for each $n$. So\n$(\\sigma_n)_{n \\in \\mathbb{N}}$ is again a sequence of reals.\n\nThe sequence $(x_k)$ is **$(C,1)$-summable to $L \\in \\mathbb{R}$**, or\n**Cesaro summable to $L$**, when the sequence of Cesaro means converges to $L$\n([[def-real-limit]]). Limits of real sequences are unique\n([[lem-limit-unique]]), so such an $L$ is unique when it exists, and we write it\n$\\lim_n \\sigma_n$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "def-abel-and-cesaro-summability-of-a-series",
      "source_section": "Definition",
      "quote": "For a real series $\\sum_{n\\ge0}a_n$, write its inclusive partial sums as\n\n$$S_n:=\\sum_{k=0}^{n}a_k$$\n\nand their Cesaro means as\n\n$$\\sigma_n:=\\frac1{\\iota(n+1)}\\sum_{k=0}^{n}S_k.$$\n\nThe series is **Cesaro summable to $s$** if $\\sigma_n\\to s$ ([[def-cesaro-mean]]).\n\nIt is **Abel summable to $s$** if the power series\n\n$$A(x):=\\sum_{n=0}^{\\infty}a_nx^n$$\n\nconverges for every $0\\le x<1$ and $\\lim_{x\\uparrow1}A(x)=s$ in the one-sided sense of [[def-function-limit]]. These are summability methods for the zero-indexed series of [[def-series]]; they do not assert ordinary convergence.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Differentiating $\\sum_{n\\ge0}(-1)^nx^n=1/(1+x)$ and combining with the original series gives $\\sum_{n\\ge0}(-1)^n\\iota(n+1)x^n=1/(1+x)^2$ for $0\\le x<1$. Its limit as $x\\uparrow1$ is $1/4$.",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "The inclusive partial sums satisfy $S_{2m}=\\iota(m+1)$ and $S_{2m+1}=-\\iota(m+1)$. Hence $\\sigma_{2m}=\\iota(m+1)/\\iota(2m+1)\\to1/2$, while $\\sigma_{2m+1}=0$.",
      "step": "1.2",
      "inputs": [
        "L2"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Thus the Cesaro means have two distinct subsequential limits and do not converge, whereas step 1.1 proves Abel summability to $1/4$.",
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
      "reason": "cex-one-minus-two-plus-three-is-abel-but-not-cesaro-summable: the Statement fixes the displayed objects and has no conclusion depending on an unlicensed choice from an empty family: The series $\\sum_{n\\ge0}(-1)^n\\iota(n+1)$ is Abel summable to $1/4$, but its Cesaro means do not converge."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "cex-one-minus-two-plus-three-is-abel-but-not-cesaro-summable: no independent zero-parameter boundary remains after the stated hypotheses and definitions; checked against the Statement: The series $\\sum_{n\\ge0}(-1)^n\\iota(n+1)$ is Abel summable to $1/4$, but its Cesaro means do not converge."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "step 1.1: the proof explicitly handles the unit value, first index, or limit at one relevant to the assertion."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "cex-one-minus-two-plus-three-is-abel-but-not-cesaro-summable: no geometric or algebraic degeneracy changes the asserted conclusion; checked against the Statement: The series $\\sum_{n\\ge0}(-1)^n\\iota(n+1)$ is Abel summable to $1/4$, but its Cesaro means do not converge."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "step 1.1: the proof explicitly treats the endpoint, boundary, or radial-limit behaviour used by the assertion."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "cex-one-minus-two-plus-three-is-abel-but-not-cesaro-summable: the proof uses only given objects, formulas, or universal instantiation and makes no choice from a possibly empty family; see Statement: The series $\\sum_{n\\ge0}(-1)^n\\iota(n+1)$ is Abel summable to $1/4$, but its Cesaro means do not converge."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "cex-one-minus-two-plus-three-is-abel-but-not-cesaro-summable: the Statement is not an equivalence, so there is no forward implication obligation: The series $\\sum_{n\\ge0}(-1)^n\\iota(n+1)$ is Abel summable to $1/4$, but its Cesaro means do not converge."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "cex-one-minus-two-plus-three-is-abel-but-not-cesaro-summable: the Statement is not an equivalence, so there is no reverse implication obligation: The series $\\sum_{n\\ge0}(-1)^n\\iota(n+1)$ is Abel summable to $1/4$, but its Cesaro means do not converge."
    }
  ]
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "cex-one-minus-two-plus-three-is-abel-but-not-cesaro-summable",
    "sourcePage": "power-series-and-real-analytic-functions-examples",
    "batch": "wave13-real-analysis",
    "target": "def-abel-and-cesaro-summability-of-a-series",
    "declared_target": "def-abel-and-cesaro-summability-of-a-series",
    "target_statement_provenance": "ai-altered",
    "targetPage": "power-series-and-real-analytic-functions",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-one-minus-two-plus-three-is-abel-but-not-cesaro-summable",
    "sourcePage": "power-series-and-real-analytic-functions-examples",
    "batch": "wave13-real-analysis",
    "target": "thm-termwise-differentiation-of-a-real-power-series",
    "declared_target": "thm-termwise-differentiation-of-a-real-power-series",
    "target_statement_provenance": "ai-altered",
    "targetPage": "power-series-and-real-analytic-functions",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-one-minus-two-plus-three-is-abel-but-not-cesaro-summable",
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
  },
  {
    "source": "cex-one-minus-two-plus-three-is-abel-but-not-cesaro-summable",
    "sourcePage": "power-series-and-real-analytic-functions-examples",
    "batch": "wave13-real-analysis",
    "target": "def-cesaro-mean",
    "declared_target": "def-cesaro-mean",
    "target_statement_provenance": "literature-derived",
    "targetPage": "equivalent-forms-of-completeness",
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

### `def-abel-and-cesaro-summability-of-a-series`

````markdown
---
id: def-abel-and-cesaro-summability-of-a-series
kind: definition
title: "Abel summability by $\\lim_{x\\uparrow1}\\sum a_nx^n$ and Cesaro summability by the Cesaro means of the partial sums"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-series, def-cesaro-mean, def-function-limit, def-real-power-series-and-radius-of-convergence]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Abel summability, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Abel_summability_method"
    - title: "Cesàro summation, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Cesaro_summation_method"
    - title: "Cesàro summation methods, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Ces%C3%A0ro_summation_methods"
    - title: "S. Semmes, Rice Math 322 notes"
      url: "https://math.rice.edu/~semmes/math322.pdf"
pipeline_run: null
---

## Definition

For a real series $\sum_{n\ge0}a_n$, write its inclusive partial sums as

$$S_n:=\sum_{k=0}^{n}a_k$$

and their Cesaro means as

$$\sigma_n:=\frac1{\iota(n+1)}\sum_{k=0}^{n}S_k.$$

The series is **Cesaro summable to $s$** if $\sigma_n\to s$ ([[def-cesaro-mean]]).

It is **Abel summable to $s$** if the power series

$$A(x):=\sum_{n=0}^{\infty}a_nx^n$$

converges for every $0\le x<1$ and $\lim_{x\uparrow1}A(x)=s$ in the one-sided sense of [[def-function-limit]]. These are summability methods for the zero-indexed series of [[def-series]]; they do not assert ordinary convergence.
````

### `def-cesaro-mean`

````markdown
---
id: def-cesaro-mean
kind: definition
title: "The Cesaro means $\\sigma_n = (x_0 + \\dots + x_n)/(n+1)$ and $(C,1)$-summability"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-sequence, def-finite-sum, def-real-limit, lem-of-naturals-positive, lem-limit-unique, def-complete-ordered-field]
forward_refs: [ex-cesaro-means-of-alternating]
justified_by: []
aliases: []
landmark: true
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
    - title: "Summation methods (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Summation_methods"
    - title: "Cesàro summation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ces%C3%A0ro_summation"
    - title: "Divergent series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Divergent_series"
    - title: "G. H. Hardy, Divergent Series, Ch. 1 and Ch. 5"
      url: "https://archive.org/details/divergentseries033523mbp"
pipeline_run: null
---

## Definition

Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with finite sums as in
[[def-finite-sum]]. For $n \in \mathbb{N}$ the **$n$-th Cesaro mean** of
$(x_k)$ is

$$\sigma_n \;:=\; \frac{1}{n+1}\sum_{k=0}^{n} x_k \;=\; \frac{x_0 + x_1 + \dots + x_n}{n+1},$$

where $n+1$ denotes the canonical natural $(n+1)\cdot 1_{\mathbb{R}}$.

**This is well defined.** The only thing that could fail is the division: since
$n + 1 \ge 1$, the canonical natural $(n+1)\cdot 1_{\mathbb{R}}$ is strictly
positive ([[lem-of-naturals-positive]]), hence nonzero by trichotomy
([[def-complete-ordered-field]]), hence invertible. The sum
$\sum_{k=0}^{n} x_k$ is the finite sum $\sum_{k < n+1} x_k$ of
[[def-finite-sum]], a single well-determined real for each $n$. So
$(\sigma_n)_{n \in \mathbb{N}}$ is again a sequence of reals.

The sequence $(x_k)$ is **$(C,1)$-summable to $L \in \mathbb{R}$**, or
**Cesaro summable to $L$**, when the sequence of Cesaro means converges to $L$
([[def-real-limit]]). Limits of real sequences are unique
([[lem-limit-unique]]), so such an $L$ is unique when it exists, and we write it
$\lim_n \sigma_n$.

## Remarks

- **The indexing starts at $0$ and the denominator is $n+1$, not $n$.**
  Sequences here are functions on $\mathbb{N}$ and $\mathbb{N}$ contains $0$
  ([[def-sequence]]), so $\sigma_n$ averages the $n+1$ terms
  $x_0, \dots, x_n$. Writing $\sigma_n = (x_1 + \dots + x_n)/n$, as texts
  indexing from $1$ do, would leave $\sigma_0$ undefined and would not be a
  sequence on $\mathbb{N}$ at all. The convention chosen here is also what makes
  the Cesaro matrix $c_{n,k} = 1/(n+1)$ for $k \le n$ a genuine
  $\mathbb{N} \times \mathbb{N}$ summability matrix
  ([[def-summability-matrix]], [[cor-cesaro-matrix-is-regular]]).

- **$(C,1)$-summability is strictly weaker than convergence.** Every convergent
  sequence is $(C,1)$-summable to its limit ([[thm-cesaro-mean-theorem]]), and
  the converse fails ([[fs-cesaro-converse]]): the Cesaro means of the
  alternating sequence converge to $0$ while the sequence itself diverges
  ([[ex-cesaro-means-of-alternating]]). That is the entire point of the notion:
  it assigns a value to some divergent sequences, consistently with the ordinary
  limit wherever the ordinary limit exists.

- **Nothing here sums a series.** The object averaged is the sequence $(x_k)$
  itself, not its partial sums, and $\sum_{k=0}^{n} x_k$ is a finite sum in the
  sense of [[def-finite-sum]]. Applied instead to the partial sums of a series,
  the same definition gives the classical Cesaro summation of divergent series;
  series are not available until the next page of this track and nothing above
  presupposes them.
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

### `thm-termwise-differentiation-of-a-real-power-series`

````markdown
---
id: thm-termwise-differentiation-of-a-real-power-series
kind: theorem
title: "Inside its radius a real power series may be differentiated term by term, and the differentiated series has the same radius"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-derived-and-integrated-power-series-have-the-same-radius, thm-power-series-uniform-on-compact-subintervals, thm-uniform-derivative-limit-on-a-closed-interval, lem-derivative-of-a-power, def-derivative]
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
    - title: "E. Randles, Supplementary Notes for Real Analysis"
      url: "https://personal.colby.edu/~erandles/papers/Past_Courses/Supplementary_Notes.pdf"
pipeline_run: null
---

## Statement

Let

$$f(x)=\sum_{n=0}^{\infty}a_n(x-c)^n$$

have radius $R$. For every $x$ with $|x-c|<R$, the function $f$ is differentiable at $x$ ([[def-derivative]]) and

$$f'(x)=\sum_{n=0}^{\infty}\iota(n+1)a_{n+1}(x-c)^n.$$

The differentiated series has the same radius $R$.

## Facts & Assumptions

**Given:** A real power series of radius $R$ with polynomial partial sums $p_N(x):=\sum_{n<N}a_n(x-c)^n$.

[L1] The formal derivative series has radius $R$ ([[lem-derived-and-integrated-power-series-have-the-same-radius]]).

[L2] A power series converges uniformly on every closed interval strictly inside its radius ([[thm-power-series-uniform-on-compact-subintervals]]).

[L3] If continuously differentiable functions converge at one point of a closed interval and their derivatives converge uniformly, then the functions converge uniformly to a differentiable function whose derivative is the derivative limit ([[thm-uniform-derivative-limit-on-a-closed-interval]]).

[L4] The derivative of $(x-c)^n$ is $0$ for $n=0$ and $\iota(n)(x-c)^{n-1}$ for $n\ge1$ ([[lem-derivative-of-a-power]] and the algebra of derivatives cited there).

## Proof

**Proof technique:** direct.

1.1 Fix $x_0$ with $|x_0-c|<R$ and choose a closed interval $J$ containing both $c$ and $x_0$ strictly inside the radius. [given, choose]

1.2 Each $p_N$ is continuously differentiable on $J$, and [L4] gives $p_N'(x)=\sum_{n<N-1}\iota(n+1)a_{n+1}(x-c)^n$. The derivative partial sums converge uniformly on $J$ by [L1] and [L2]. [L1, L2, L4]

2.1 The sequence $p_N(c)$ converges to $a_0$, since it equals $a_0$ for every $N\ge1$. Thus [L3] applies and says that the uniform limit of $(p_N)$ on $J$ is differentiable with derivative equal to the uniform limit of $(p_N')$. [step 1.2, L3]

3.1 The uniform limit of $(p_N)$ is $f$, and the limit of $(p_N')$ is the displayed differentiated series. Hence the formula holds at $x_0$; since $x_0$ was arbitrary it holds throughout $|x-c|<R$, and [L1] supplies the equality of radii. [step 2.1, L1] ∎
````

