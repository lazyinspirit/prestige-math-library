## Selection reasons

- critical risk (8): 6 declared dependencies; 6 cited facts; boundary-sensitive language; analytic limiting/completeness language

## Target item — `ex-three-radius-one-series-with-different-endpoint-behaviour`

Normalized current SHA-256: `1cf4446be1f2b6ca09459c53ef04b0b92852ef8a44f983f777ca1bb546b41d48`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: ex-three-radius-one-series-with-different-endpoint-behaviour
kind: example
title: "The radius-one series with coefficients $1/(n+1)^2$, $1/(n+1)$ and $1$ realise absolute, conditional and divergent endpoint behaviour"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-cauchy-hadamard-for-real-power-series, thm-p-series-rational, thm-alternating-series-test, def-canonical-natural, lem-nth-root-of-n-tends-to-one, thm-algebra-of-limits]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
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

Each of

$$\sum_{n\ge0}\frac{x^n}{\iota(n+1)^2},\qquad \sum_{n\ge0}\frac{x^n}{\iota(n+1)},\qquad \sum_{n\ge0}x^n$$

has radius $1$. At $x=\pm1$ the first converges absolutely; the second converges conditionally at $-1$ and diverges at $1$; the third diverges at both endpoints.

## Facts & Assumptions

**Given:** The three displayed real power series.

[L1] The relevant coefficient roots tend to $1$, because $\iota(n)^{1/n}\to1$ and limits respect products and reciprocals ([[lem-nth-root-of-n-tends-to-one]], [[def-canonical-natural]], [[thm-algebra-of-limits]]).

[L2] Cauchy–Hadamard converts that limit into radius $1$ ([[thm-cauchy-hadamard-for-real-power-series]]).

[L3] The $p$-series converges for rational $p>1$ and diverges for $p\le1$, while the alternating harmonic series converges ([[thm-p-series-rational]], [[thm-alternating-series-test]]).

## Verification

**Proof technique:** cases.

1.1 By [L1], all three Cauchy–Hadamard limit superiors equal $1$, so [L2] gives radius $1$ in each case. [L1, L2]

1.2 For the squared-denominator series, absolute values at either endpoint form the $p$-series with $p=2$, which converges by [L3]. [assume-case squared, L3]

1.3 For the first-power denominator, $x=1$ gives the divergent harmonic series, while $x=-1$ gives a convergent alternating series whose absolute series is harmonic. [assume-case harmonic, L3]

1.4 For the constant coefficients, at either endpoint the terms have absolute value $1$ and do not tend to zero, so both endpoint series diverge. [assume-case constant, given]

2.1 The coefficient families in steps 1.2--1.4 exhaust the displayed series and give the asserted absolute, conditional, and divergent endpoint behaviours. [step 1.1, step 1.2, step 1.3, step 1.4, cases-exhaustive] ∎
````

## Wave 13 provenance row

```json
{
  "id": "ex-three-radius-one-series-with-different-endpoint-behaviour",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://encyclopediaofmath.org/wiki/Power_series",
    "https://ocw.mit.edu/courses/18-100c-real-analysis-fall-2012/1058808e5cb57c986118333f8b6fa0d7_MIT18_100CF12_l11sum.pdf"
  ],
  "rationale": "The sources state that endpoint behaviour is independent of the common radius and exhibit standard endpoint alternatives. The item's selected p-series and alternating-harmonic trio is a locally worked construction.",
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
      "source": "lem-nth-root-of-n-tends-to-one",
      "source_section": "Statement",
      "quote": "For a natural number $n \\ge 1$ write $\\iota(n) := n \\cdot 1_{\\mathbb{R}}$ for the\ncanonical natural of $\\mathbb{R}$ ([[lem-of-naturals-positive]]) and\n$n^{1/n} := \\iota(n)^{1/n}$, $n^{1/2} := \\iota(n)^{1/2}$ for its roots\n([[thm-nth-roots-exist]], [[def-rational-power]]). Then:\n\n1. $\\displaystyle 1 \\;\\le\\; n^{1/n} \\;\\le\\; 1 + \\frac{2}{n^{1/2}}$ for every natural $n \\ge 1$;\n2. the sequence $r_k := (k+1)^{1/(k+1)}$, $k \\in \\mathbb{N}$, converges to $1$\n   ([[def-real-limit]]).\n\n**The index range is not cosmetic.** The expression $n^{1/n}$ is defined only for\n$n \\ge 1$, since $1/n$ is not a rational number when $n = 0$\n([[def-rational-power]]). Sequences in this library are functions on $\\mathbb{N}$\nand $\\mathbb{N}$ contains $0$ ([[def-sequence]]), so the statement of convergence\nis made about the shifted family $r_k = (k+1)^{1/(k+1)}$, which is the classical\nfamily $n^{1/n}$, $n \\ge 1$, reindexed by $n = k+1$. Claim 1 is stated over the\nnatural range $n \\ge 1$ where the expression means something.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-canonical-natural",
      "source_section": "Definition",
      "quote": "Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and\nmultiplicative identity $1_F$. Define\n$\\iota : \\mathbb{N} \\to F$ by recursion on $\\mathbb{N}$\n([[def-natural-numbers]], [[thm-recursion]]):\n\n$$\\iota(0) \\;:=\\; 0_F, \\qquad \\iota(n+1) \\;:=\\; \\iota(n) + 1_F .$$\n\n$\\iota(n)$ is the **canonical natural** of $n$ in $F$. It is also written\n$n \\cdot 1_F$, and for $n \\ge 1$ it is $1_F$ added to itself $n$ times.\n\n**Why the notation is needed at all.** A natural number in this library is a von\nNeumann natural, that is a set ([[def-natural-numbers]]), and a set is not an\nelement of $F$. So $1/n$, $n^{\\alpha}$ and $x/n$ are not expressions of $F$ when\n$n$ is a natural: what they mean is $1/\\iota(n)$, $\\iota(n)^{\\alpha}$ and\n$x/\\iota(n)$. The map $\\iota$ is what carries a counting number into the field,\nand writing it is the whole reason a reader meets $1/\\iota(k+1)$ where an\ninformal text would write $1/(k+1)$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-algebra-of-limits",
      "source_section": "Statement",
      "quote": "Let $(x_k)$ and $(y_k)$ be sequences of reals ([[def-sequence]]) converging to\n$x$ and $y$ respectively ([[def-real-limit]]), and let $c \\in \\mathbb{R}$. Then\n\n$$x_k + y_k \\to x + y, \\qquad c\\,x_k \\to c\\,x, \\qquad x_k - y_k \\to x - y, \\qquad x_k y_k \\to x y,$$\n\nand if in addition $y \\ne 0$ and $y_k \\ne 0$ for every $k \\in \\mathbb{N}$, then\n\n$$\\frac{1}{y_k} \\to \\frac{1}{y} \\qquad \\text{and} \\qquad \\frac{x_k}{y_k} \\to \\frac{x}{y}.$$\n\nThe quotient case rests on an eventual lower bound for $|y_k|$, proved below\nrather than assumed: $|y_k| > |y|/2$ for all sufficiently large $k$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-cauchy-hadamard-for-real-power-series",
      "source_section": "Statement",
      "quote": "Let $\\sum_{n\\ge0}a_n(x-c)^n$ be a real power series with radius $R$ ([[def-real-power-series-and-radius-of-convergence]]), and put\n\n$$L:=\\limsup_{k\\to\\infty}|a_{k+1}|^{1/(k+1)}\\in[0,+\\infty].$$\n\nThen $R$ is the reciprocal of $L$ in the following explicit sense:\n\n$$R=\\begin{cases}+\\infty,&L=0,\\\\[2pt]1/L,&0<L<+\\infty,\\\\[2pt]0,&L=+\\infty.\\end{cases}$$\n\nEquivalently, with the conventions $1/0:=+\\infty$ and $1/(+\\infty):=0$, one has $R=1/L$. The roots use $a_{k+1}$ and the exponent $1/(k+1)$ because $\\mathbb N$ starts at $0$ and a zeroth root is undefined.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-p-series-rational",
      "source_section": "Statement",
      "quote": "Let $p \\in \\mathbb{Q}$ with $p > 0$. For a natural number $k \\ge 1$ write\n$\\iota(k) = k \\cdot 1_{\\mathbb{R}}$ for the canonical natural, which is positive\n([[lem-of-naturals-positive]]), and write $k^{p} := \\iota(k)^{p}$ for its rational\npower ([[def-rational-power]]). Then\n\n$$\\sum_{k \\ge 1} \\frac{1}{k^{p}} \\ \\text{converges} \\qquad \\Longleftrightarrow \\qquad p > 1 .$$\n\nIn particular the harmonic series $\\sum_{k \\ge 1} 1/k$ diverges, at $p = 1$, and\n$\\sum_{k \\ge 1} 1/k^{2}$ converges, at $p = 2$.\n\n**The index range is not cosmetic.** The series starts at $k = 1$ because\n$1/0^{p}$ is undefined: [[def-rational-power]] gives $0^{p} = 0$ for rational\n$p > 0$, and $0$ has no inverse. Sequences here are functions on $\\mathbb{N}$ and\n$\\mathbb{N}$ contains $0$ ([[def-series]]), so the object named above is a series\nfrom the starting index $1$ in the sense of [[def-series]], not a series of a\nsequence on $\\mathbb{N}$.\n\n**The exponent is rational, and that is a limitation of this page.** Rational\npowers of a positive base are what [[def-rational-power]] supplies; real exponents\nrequire the exponential and the logarithm, which this library develops later. The\nstatement above is therefore the full $p$-series theorem for every exponent this\npage can name.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2",
        "1.3"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-alternating-series-test",
      "source_section": "Statement",
      "quote": "Let $(\\varepsilon_k)$ be the alternating sequence of [[lem-alternating-sequence]],\nthat is the unique sequence of reals with $\\varepsilon_0 = 1$ and\n$\\varepsilon_{k+1} = -\\varepsilon_k$, which is what is usually written\n$\\varepsilon_k = (-1)^k$; let $e$ and $o$ be its even and odd index maps, so that\n$\\varepsilon_{e_j} = 1$, $\\varepsilon_{o_j} = -1$, and every natural number is\n$e_j$ for exactly one $j$ or $o_j$ for exactly one $j$.\n\nLet $(b_k)$ be a sequence of reals that is nonincreasing\n([[def-monotone-sequence]]) and converges to $0$ ([[def-real-limit]]); then\n$b_k \\ge 0$ for every $k$. Write $t_n := \\sum_{k<n} \\varepsilon_k b_k$ for the\npartial sums ([[def-series]]). Then:\n\n1. the series $\\sum \\varepsilon_k b_k$ converges; write $L$ for its sum;\n2. $t_{e_j} \\le L \\le t_{o_j}$ for every $j \\in \\mathbb{N}$, and for every\n   $n \\in \\mathbb{N}$ the sum $L$ lies between the two consecutive partial sums\n   $t_n$ and $t_{n+1}$;\n3. $|L - t_n| \\le b_n$ for every $n \\in \\mathbb{N}$.\n\nClaim 3 is the error bound: the partial sum $t_n$, which uses the $n$ terms\n$\\varepsilon_0 b_0, \\dots, \\varepsilon_{n-1}b_{n-1}$, differs from the sum by at\nmost the first term omitted.\n\n**Only claim 1 is a corollary of [[thm-dirichlet-test]].** Claims 2 and 3 are not:\nthey come from the interlacing of the even-index and odd-index partial sums, and\nthat argument is carried out below rather than smuggled into the Dirichlet\nestimate, which produces no bracketing at all.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2",
        "1.3"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "By [L1], all three Cauchy–Hadamard limit superiors equal $1$, so [L2] gives radius $1$ in each case.",
      "step": "1.1",
      "inputs": [
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "For the squared-denominator series, absolute values at either endpoint form the $p$-series with $p=2$, which converges by [L3].",
      "step": "1.2",
      "inputs": [
        "L3"
      ]
    },
    {
      "id": "step-1.3",
      "claim": "For the first-power denominator, $x=1$ gives the divergent harmonic series, while $x=-1$ gives a convergent alternating series whose absolute series is harmonic.",
      "step": "1.3",
      "inputs": [
        "L3"
      ]
    },
    {
      "id": "step-1.4",
      "claim": "For the constant coefficients, at either endpoint the terms have absolute value $1$ and do not tend to zero, so both endpoint series diverge.",
      "step": "1.4",
      "inputs": [
        "assume-case constant",
        "given"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "The coefficient families in steps 1.2--1.4 exhaust the displayed series and give the asserted absolute, conditional, and divergent endpoint behaviours.",
      "step": "2.1",
      "inputs": [
        "step 1.2",
        "step 1.4",
        "step 1.1",
        "step 1.3"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "ex-three-radius-one-series-with-different-endpoint-behaviour: the Statement fixes the displayed objects and has no conclusion depending on an unlicensed choice from an empty family: Each of $$\\sum_{n\\ge0}\\frac{x^n}{\\iota(n+1)^2},\\qquad \\sum_{n\\ge0}\\frac{x^n}{\\iota(n+1)},\\qquad \\sum_{n\\ge0}x^n$$ has radius $1$. At $x=\\pm1$ the first converges absolutely; the second converges conditionally at $-1$ and"
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 1.4: the proof explicitly handles the zero-valued parameter or zero object used by the statement."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "ex-three-radius-one-series-with-different-endpoint-behaviour: the assertion has no separate unit-size case; its quantified argument applies without a one-case split: Each of $$\\sum_{n\\ge0}\\frac{x^n}{\\iota(n+1)^2},\\qquad \\sum_{n\\ge0}\\frac{x^n}{\\iota(n+1)},\\qquad \\sum_{n\\ge0}x^n$$ has radius $1$. At $x=\\pm1$ the first converges absolutely; the second converges conditionally at $-1$ and"
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "ex-three-radius-one-series-with-different-endpoint-behaviour: no geometric or algebraic degeneracy changes the asserted conclusion; checked against the Statement: Each of $$\\sum_{n\\ge0}\\frac{x^n}{\\iota(n+1)^2},\\qquad \\sum_{n\\ge0}\\frac{x^n}{\\iota(n+1)},\\qquad \\sum_{n\\ge0}x^n$$ has radius $1$. At $x=\\pm1$ the first converges absolutely; the second converges conditionally at $-1$ and"
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "step 1.2: the proof explicitly treats the endpoint, boundary, or radial-limit behaviour used by the assertion."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "ex-three-radius-one-series-with-different-endpoint-behaviour: the proof uses only given objects, formulas, or universal instantiation and makes no choice from a possibly empty family; see Statement: Each of $$\\sum_{n\\ge0}\\frac{x^n}{\\iota(n+1)^2},\\qquad \\sum_{n\\ge0}\\frac{x^n}{\\iota(n+1)},\\qquad \\sum_{n\\ge0}x^n$$ has radius $1$. At $x=\\pm1$ the first converges absolutely; the second converges conditionally at $-1$ and"
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "ex-three-radius-one-series-with-different-endpoint-behaviour: the Statement is not an equivalence, so there is no forward implication obligation: Each of $$\\sum_{n\\ge0}\\frac{x^n}{\\iota(n+1)^2},\\qquad \\sum_{n\\ge0}\\frac{x^n}{\\iota(n+1)},\\qquad \\sum_{n\\ge0}x^n$$ has radius $1$. At $x=\\pm1$ the first converges absolutely; the second converges conditionally at $-1$ and"
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "ex-three-radius-one-series-with-different-endpoint-behaviour: the Statement is not an equivalence, so there is no reverse implication obligation: Each of $$\\sum_{n\\ge0}\\frac{x^n}{\\iota(n+1)^2},\\qquad \\sum_{n\\ge0}\\frac{x^n}{\\iota(n+1)},\\qquad \\sum_{n\\ge0}x^n$$ has radius $1$. At $x=\\pm1$ the first converges absolutely; the second converges conditionally at $-1$ and"
    }
  ]
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "ex-three-radius-one-series-with-different-endpoint-behaviour",
    "sourcePage": "power-series-and-real-analytic-functions-examples",
    "batch": "wave13-real-analysis",
    "target": "thm-cauchy-hadamard-for-real-power-series",
    "declared_target": "thm-cauchy-hadamard-for-real-power-series",
    "target_statement_provenance": "ai-altered",
    "targetPage": "power-series-and-real-analytic-functions",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-three-radius-one-series-with-different-endpoint-behaviour",
    "sourcePage": "power-series-and-real-analytic-functions-examples",
    "batch": "wave13-real-analysis",
    "target": "thm-p-series-rational",
    "declared_target": "thm-p-series-rational",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-three-radius-one-series-with-different-endpoint-behaviour",
    "sourcePage": "power-series-and-real-analytic-functions-examples",
    "batch": "wave13-real-analysis",
    "target": "thm-alternating-series-test",
    "declared_target": "thm-alternating-series-test",
    "target_statement_provenance": "literature-derived",
    "targetPage": "absolute-convergence-and-rearrangement",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-three-radius-one-series-with-different-endpoint-behaviour",
    "sourcePage": "power-series-and-real-analytic-functions-examples",
    "batch": "wave13-real-analysis",
    "target": "def-canonical-natural",
    "declared_target": "def-canonical-natural",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-three-radius-one-series-with-different-endpoint-behaviour",
    "sourcePage": "power-series-and-real-analytic-functions-examples",
    "batch": "wave13-real-analysis",
    "target": "lem-nth-root-of-n-tends-to-one",
    "declared_target": "lem-nth-root-of-n-tends-to-one",
    "target_statement_provenance": "ai-altered",
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-three-radius-one-series-with-different-endpoint-behaviour",
    "sourcePage": "power-series-and-real-analytic-functions-examples",
    "batch": "wave13-real-analysis",
    "target": "thm-algebra-of-limits",
    "declared_target": "thm-algebra-of-limits",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
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

### `def-canonical-natural`

````markdown
---
id: def-canonical-natural
kind: definition
title: "The canonical natural $\\iota(n) = n \\cdot 1_F$ of a field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-field, def-natural-numbers, thm-recursion]
justified_by: []
forward_refs: [def-metric-completion]
aliases: []
landmark: false
short: "$\\iota(n) = n \\cdot 1_F$"
verification:
  precheck: n/a
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Characteristic (algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Characteristic_(algebra)"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Elias Zakon, Mathematical Analysis: Natural Numbers and Induction"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/02%3A_Real_Numbers_and_Fields/2.02%3A_Natural_Numbers._Induction"
pipeline_run: null
---

## Definition

Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and
multiplicative identity $1_F$. Define
$\iota : \mathbb{N} \to F$ by recursion on $\mathbb{N}$
([[def-natural-numbers]], [[thm-recursion]]):

$$\iota(0) \;:=\; 0_F, \qquad \iota(n+1) \;:=\; \iota(n) + 1_F .$$

$\iota(n)$ is the **canonical natural** of $n$ in $F$. It is also written
$n \cdot 1_F$, and for $n \ge 1$ it is $1_F$ added to itself $n$ times.

**Why the notation is needed at all.** A natural number in this library is a von
Neumann natural, that is a set ([[def-natural-numbers]]), and a set is not an
element of $F$. So $1/n$, $n^{\alpha}$ and $x/n$ are not expressions of $F$ when
$n$ is a natural: what they mean is $1/\iota(n)$, $\iota(n)^{\alpha}$ and
$x/\iota(n)$. The map $\iota$ is what carries a counting number into the field,
and writing it is the whole reason a reader meets $1/\iota(k+1)$ where an
informal text would write $1/(k+1)$.

## Remarks

- **Where the index shift comes from.** $\mathbb{N}$ contains $0$
  ([[def-natural-numbers]]) and $\iota(0) = 0_F$, so $1/\iota(k)$ is undefined at
  $k = 0$. A family of reciprocals indexed by $\mathbb{N}$ is therefore written
  over $\iota(k+1)$, which is why the harmonic and telescoping families of this
  library run over $k+1$ rather than over $k$. This is bookkeeping, not a
  restriction: the values are the usual ones.

- **This definition records notation; the arithmetic is proved elsewhere.** That
  $\iota$ is strictly increasing and positive on $n \ge 1$, and that it carries
  sums to sums and products to products, is [[lem-of-naturals-positive]], stated
  for an ordered field. That lemma introduces the same element by the equivalent
  recursion $1 \cdot 1_F = 1_F$, $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$, which
  agrees with the definition above because $\iota(1) = \iota(0) + 1_F = 1_F$.
  Nothing here is new mathematics; the definition exists so that the notation has
  a home a reader can look up.

- **The symbol $\iota$ is used in this library for other canonical maps, and this
  definition does not govern them.** It also denotes the canonical field
  embedding $\iota : \mathbb{Q} \to F$ ([[lem-of-q-embeds]]), the isometric
  embedding of a metric space into a completion ([[def-metric-completion]]), and
  an inclusion map $\iota : S \to X$ of a subspace. Each of those is introduced
  where it is used and means something different from the map defined here. What
  the four share is only that each is the canonical map of its situation.

- **Fields, not just ordered fields.** The recursion needs no order, so the
  definition is stated for a field; every use in this library is in an ordered
  field, and the order is what makes $\iota$ injective
  ([[lem-of-naturals-positive]]). In a field of positive characteristic $\iota$
  is not injective, which is one reason the injectivity is a lemma rather than
  part of the definition.
````

### `lem-nth-root-of-n-tends-to-one`

````markdown
---
id: lem-nth-root-of-n-tends-to-one
kind: lemma
title: "$n^{1/n} \\to 1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-nth-roots-exist, thm-am-gm, def-rational-power, lem-rational-power-monotone, lem-rational-power-laws, thm-squeeze, thm-of-archimedean, lem-of-inverse-positive, lem-of-sign-rules, lem-of-naturals-positive, lem-power-monotone, def-integer-power, def-real-limit, def-sequence, def-finite-sum, lem-finite-sum-laws, thm-induction-principle, lem-of-add-order, def-nat-order, thm-nat-linear-order]
justified_by: []
aliases: []
landmark: false
short: "$n^{1/n}\\to 1$"
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
    - title: "Nth root (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nth_root"
    - title: "AM-GM inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/AM%E2%80%93GM_inequality"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.20)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.5"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

For a natural number $n \ge 1$ write $\iota(n) := n \cdot 1_{\mathbb{R}}$ for the
canonical natural of $\mathbb{R}$ ([[lem-of-naturals-positive]]) and
$n^{1/n} := \iota(n)^{1/n}$, $n^{1/2} := \iota(n)^{1/2}$ for its roots
([[thm-nth-roots-exist]], [[def-rational-power]]). Then:

1. $\displaystyle 1 \;\le\; n^{1/n} \;\le\; 1 + \frac{2}{n^{1/2}}$ for every natural $n \ge 1$;
2. the sequence $r_k := (k+1)^{1/(k+1)}$, $k \in \mathbb{N}$, converges to $1$
   ([[def-real-limit]]).

**The index range is not cosmetic.** The expression $n^{1/n}$ is defined only for
$n \ge 1$, since $1/n$ is not a rational number when $n = 0$
([[def-rational-power]]). Sequences in this library are functions on $\mathbb{N}$
and $\mathbb{N}$ contains $0$ ([[def-sequence]]), so the statement of convergence
is made about the shifted family $r_k = (k+1)^{1/(k+1)}$, which is the classical
family $n^{1/n}$, $n \ge 1$, reindexed by $n = k+1$. Claim 1 is stated over the
natural range $n \ge 1$ where the expression means something.

## Facts & Assumptions

**Given:** For a natural $m \ge 1$ the canonical natural $\iota(m) := m \cdot 1_{\mathbb{R}}$, extended by $\iota(0) := 0$; this extension keeps the additivity $\iota(m + m') = \iota(m) + \iota(m')$ of [[lem-of-naturals-positive]], which for $m$ or $m'$ equal to $0$ reads $\iota(m) = \iota(m) + 0$.

[L1] Roots: for real $a \ge 0$ and natural $n \ge 1$ there is a unique real $s \ge 0$ with $s^n = a$, written $a^{1/n}$; it is $> 0$ when $a > 0$, and $a^{1/1} = a$ ([[thm-nth-roots-exist]], [[def-integer-power]]).

[L2] Rational powers and monotonicity: $a^{1/n}$ is the rational power $a^r$ at $r = 1/n$, and for rational $t > 0$ one has $a^t > 1$ whenever $a > 1$; also $\big(1/a\big)^{1/2} = 1/a^{1/2}$ for $a > 0$ ([[def-rational-power]], [[lem-rational-power-monotone]], [[lem-rational-power-laws]]).

[L3] AM-GM: for a natural $n \ge 1$ and reals $a_0, \dots, a_{n-1} \ge 0$, the geometric mean $\big(\prod_{j<n} a_j\big)^{1/n}$ is $\le$ the arithmetic mean $\frac{1}{\iota(n)}\sum_{j<n} a_j$ ([[thm-am-gm]]).

[L4] Finite sums and products: the empty sum is $0$ and the empty product $1$; sums and products split at any intermediate index; and $\sum_{j<m} \lambda = \iota(m)\lambda$ for a constant $\lambda$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L5] Induction principle ([[thm-induction-principle]]).

[L6] Canonical naturals: $\iota(m) > 0$ and $\iota(m)$ is invertible for $m \ge 1$, $\iota$ is strictly increasing, and $\iota(2) = 2 > 1$; the Archimedean property gives, for every real $x$, a natural $p \ge 1$ with $x < \iota(p)$ ([[lem-of-naturals-positive]], [[thm-of-archimedean]]).

[L7] Order and reciprocals: $0 < a < b$ gives $0 < 1/b < 1/a$; multiplying an inequality by a positive element preserves it; and inequalities may be added and translated ([[lem-of-inverse-positive]], [[lem-of-sign-rules]], [[lem-of-add-order]]).

[L8] Squares: for $a, b \ge 0$ one has $a < b$ if and only if $a \cdot a < b \cdot b$ ([[lem-power-monotone]], [[def-integer-power]]).

[L9] Squeeze theorem, and the fact that a constant sequence converges to its value; to establish convergence it suffices to produce a threshold for every real $\varepsilon > 0$ ([[thm-squeeze]], [[def-sequence]], [[def-real-limit]]).

[L10] The order on $\mathbb{N}$ is total and $\iota$ respects it ([[def-nat-order]], [[thm-nat-linear-order]]).

## Proof

**Proof technique:** direct.

1.1 For a natural $n \ge 1$ the element $\iota(n)$ is positive and invertible, so $\iota(n)^{1/n}$ and $\iota(n)^{1/2}$ exist and are positive. [given, L1, L6]

1.2 For every natural $m$ one has $\prod_{j<m} 1 = 1$: the empty product is $1$, and if $\prod_{j<m} 1 = 1$ then $\prod_{j<m+1} 1 = \big(\prod_{j<m} 1\big) \cdot 1 = 1$, so this follows by induction on $m$. [given, L4, L5]

2.1 For $n = 1$ one has $\iota(1) = 1$ and $1^{1/1} = 1$; for $n \ge 2$ one has $\iota(n) \ge \iota(2) = 2 > 1$ and $1/n$ is a positive rational, so $\iota(n)^{1/n} > 1$. In either case $n^{1/n} \ge 1$. [step 1.1, L1, L2, L6, L10]

2.2 Let $n \ge 2$ and put $u := \iota(n)^{1/2}$, so that $u > 0$ and $u \cdot u = \iota(n)$. Apply [L3] to the list of $n$ nonnegative reals given by $a_0 = a_1 = u$ and $a_j = 1$ for $2 \le j < n$, the latter range being empty when $n = 2$. Splitting at index $2$ gives $\prod_{j<n} a_j = \big(\prod_{j<2} a_j\big)\big(\prod_{j<n-2} a_{2+j}\big) = (u \cdot u) \cdot 1 = \iota(n)$ by step 1.2, so the geometric mean is $\iota(n)^{1/n}$; and $\sum_{j<n} a_j = \big(\sum_{j<2} a_j\big) + \big(\sum_{j<n-2} 1\big) = (u + u) + \iota(n-2) = (u+u) + \iota(n) - 2$, using additivity of $\iota$ and $\iota(2) = 2$, so the arithmetic mean is $A = \big((u+u) + \iota(n) - 2\big)/\iota(n) = 1 + \big((u+u) - 2\big)/\iota(n)$. Since $(u+u) - 2 < u + u$ and $\iota(n) > 0$, and $(u+u)/\iota(n) = (u+u)/(u \cdot u) = 2/u$, this gives $\iota(n)^{1/n} \le A \le 1 + 2/u = 1 + 2/n^{1/2}$. [step 1.1, step 1.2, L1, L3, L4, L6, L7, algebra]

2.3 For $n = 1$ the same bound holds trivially: $1^{1/1} = 1 \le 1 + 2 = 1 + 2/1^{1/2}$. [step 1.1, L1, L6, L7]

2.4 The sequence $b_k := 1 + 2/(k+1)^{1/2}$ converges to $1$. Given a real $\varepsilon > 0$, put $t := 2/\varepsilon > 0$ and take a natural $p \ge 1$ with $t \cdot t < \iota(p)$. For $k \ge p$ we have $k + 1 > p$, hence $\iota(k+1) > \iota(p) > t \cdot t$, and since $\big(\iota(k+1)^{1/2}\big)\big(\iota(k+1)^{1/2}\big) = \iota(k+1)$ with both factors $\ge 0$, this forces $t < \iota(k+1)^{1/2}$. Therefore $0 < 2/\iota(k+1)^{1/2} < 2/t = \varepsilon$, that is $|b_k - 1| < \varepsilon$. [step 1.1, L1, L6, L7, L8, L9, L10, algebra]

3.1 Claim 1 is the combination of steps 2.1, 2.2 and 2.3, the two upper bounds covering $n \ge 2$ and $n = 1$ respectively. [step 2.1, step 2.2, step 2.3]

4.1 For every $k \in \mathbb{N}$ the natural $k+1$ is $\ge 1$, so claim 1 gives $1 \le r_k \le b_k$. The constant sequence $1$ converges to $1$ and $(b_k)$ converges to $1$ by step 2.4, so the squeeze theorem gives $r_k \to 1$, which is claim 2. [step 3.1, step 2.4, L9] ∎

## Remarks

- **Where the $\sqrt{n}$ comes from.** AM-GM is applied to a list whose product is
  $n$ but whose entries are as close to $1$ as possible: two copies of $n^{1/2}$
  and $n-2$ copies of $1$. The arithmetic mean is then
  $1 + (2n^{1/2} - 2)/n$, which tends to $1$ at the rate $2/n^{1/2}$. Splitting
  $n$ as $n^{1/2} \cdot n^{1/2}$ rather than as $n \cdot 1$ is the whole trick:
  the list $n, 1, \dots, 1$ gives only $n^{1/n} \le 2 - 1/n$, which does not
  converge to $1$.

- **The lower bound is not decoration.** Without $n^{1/n} \ge 1$ the squeeze has
  nothing below it, and the upper bound alone would leave open a limit smaller
  than $1$. It comes from monotonicity of rational powers in the base
  ([[lem-rational-power-monotone]]) and holds with equality only at $n = 1$.

- **No logarithm and no exponential is used.** The usual quick proof writes
  $n^{1/n} = e^{(\log n)/n}$ and appeals to $(\log n)/n \to 0$; neither function
  exists in this library yet, and the AM-GM route needs nothing beyond roots and
  finite sums.
````

### `thm-algebra-of-limits`

````markdown
---
id: thm-algebra-of-limits
kind: theorem
title: "Algebra of limits: sums, scalar multiples, products and quotients"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-real-limit, def-sequence, lem-convergent-implies-bounded, lem-null-times-bounded, lem-of-triangle-inequality, lem-of-abs-value, cor-of-reverse-triangle, thm-of-archimedean, lem-of-inverse-positive, lem-rat-embeds-dense, lem-of-add-order, lem-of-sign-rules, cor-of-one-positive, thm-rat-ordered-field, thm-nat-linear-order, def-field, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "limits respect $+$, $\\cdot$, $/$"
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
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "OpenStax Calculus Volume 2, §5.1 Sequences"
      url: "https://openstax.org/books/calculus-volume-2/pages/5-1-sequences"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(x_k)$ and $(y_k)$ be sequences of reals ([[def-sequence]]) converging to
$x$ and $y$ respectively ([[def-real-limit]]), and let $c \in \mathbb{R}$. Then

$$x_k + y_k \to x + y, \qquad c\,x_k \to c\,x, \qquad x_k - y_k \to x - y, \qquad x_k y_k \to x y,$$

and if in addition $y \ne 0$ and $y_k \ne 0$ for every $k \in \mathbb{N}$, then

$$\frac{1}{y_k} \to \frac{1}{y} \qquad \text{and} \qquad \frac{x_k}{y_k} \to \frac{x}{y}.$$

The quotient case rests on an eventual lower bound for $|y_k|$, proved below
rather than assumed: $|y_k| > |y|/2$ for all sufficiently large $k$.

## Facts & Assumptions

**Given:** Sequences $(x_k)$, $(y_k)$ of reals with $(x_k)$ converging to $x$ and $(y_k)$ converging to $y$, and a real $c$ ([[def-sequence]], [[def-real-limit]]). For the last two claims we assume in addition $y \ne 0$ and $y_k \ne 0$ for every $k$.

[L1] Convergence, quantified over rational $\varepsilon > 0$ ([[def-real-limit]]).

[L2] Absolute value and the triangle inequality: $|uv| = |u|\,|v|$, $|u| \ge 0$, $|u| = 0$ if and only if $u = 0$, $|-u| = |u|$, and $|a + b| \le |a| + |b|$ ([[lem-of-abs-value]], [[lem-of-triangle-inequality]]).

[L3] Real versus rational $\varepsilon$: for every real $\eta > 0$ there is a rational $\varepsilon$ with $0 < \varepsilon < \eta$, by density ([[lem-rat-embeds-dense]]) or by the Archimedean property ([[thm-of-archimedean]]) applied to $1/\eta$ ([[lem-of-inverse-positive]]); consequently the convergence test of [[def-real-limit]] may equivalently be run with real $\varepsilon > 0$ ([[def-sequence]]).

[L4] Convergent sequences are bounded ([[lem-convergent-implies-bounded]]), and a constant sequence $(c)$ is bounded by $|c|$ ([[def-sequence]]).

[L5] A null sequence times a bounded sequence is null ([[lem-null-times-bounded]]).

[L6] Reverse triangle inequality: $\bigl||u| - |v|\bigr| \le |u - v|$, hence $|u| \ge |v| - |v - u|$ ([[cor-of-reverse-triangle]]).

[L7] Inverses and order: $a > 0$ implies $a^{-1} > 0$; $0 < a < b$ implies $0 < b^{-1} < a^{-1}$; $(u^{-1})^{-1} = u$ for $u \ne 0$ ([[lem-of-inverse-positive]], [[def-field]]).

[L8] Order arithmetic in $\mathbb{R}$: adding a constant and adding inequalities preserve the order, multiplying a strict inequality by a positive factor preserves it, and $\le$ and $<$ compose transitively; trichotomy holds, and since $u \ge 0$ means $u > 0$ or $u = 0$, an element with $u \ge 0$ and $u \ne 0$ satisfies $u > 0$ ([[lem-of-add-order]], [[lem-of-sign-rules]], [[def-complete-ordered-field]], [[def-ordered-field]]). Moreover $2 = 1 + 1 > 0$ and $2$ is invertible: $0 < 1$ in any ordered field ([[cor-of-one-positive]]) and the positives are closed under addition, so $2 > 0$ and in particular $2 \ne 0$ ([[def-ordered-field]]), whence $2^{-1}$ exists ([[def-field]]).

[L9] Rational arithmetic: $\varepsilon/2$ is a rational $> 0$ whenever $\varepsilon$ is, and $\varepsilon/2 + \varepsilon/2 = \varepsilon$ ([[thm-rat-ordered-field]]); the order on $\mathbb{N}$ is total, so finitely many thresholds admit a common index ([[thm-nat-linear-order]]).

## Proof

**Proof technique:** direct.

1.1 Reduction to null sequences: for any sequence $(z_k)$ of reals and any real $z$, the statements "$(z_k)$ converges to $z$" and "$(z_k - z)$ converges to $0$" are literally the same condition, because $|(z_k - z) - 0| = |z_k - z|$ for every $k$. [L1, L2]

1.2 Sum rule, in general form. Let $(u_k) \to u$ and $(v_k) \to v$ be any convergent sequences of reals and let $\varepsilon > 0$ be rational; take $K_1$ with $|u_k - u| < \varepsilon/2$ for $k \ge K_1$ and $K_2$ with $|v_k - v| < \varepsilon/2$ for $k \ge K_2$, and let $K$ be an index at least as large as both. For $k \ge K$, $|(u_k + v_k) - (u + v)| = |(u_k - u) + (v_k - v)| \le |u_k - u| + |v_k - v| < \varepsilon/2 + \varepsilon/2 = \varepsilon$; hence $u_k + v_k \to u + v$, and in particular $x_k + y_k \to x + y$. [L1, L2, L8, L9, algebra]

1.3 Boundedness: every convergent sequence of reals is bounded, and every constant sequence $(d)$ is bounded by $|d|$. [L4]

1.4 Quotient preparation. Assume $y \ne 0$ and $y_k \ne 0$ for every $k$. Then $|y| > 0$ by [L2], so $|y|/2 > 0$; running the convergence test of $(y_k)$ with the real number $|y|/2$ as tolerance, which [L3] licenses, produces $K_0 \in \mathbb{N}$ with $|y_k - y| < |y|/2$ for all $k \ge K_0$. [L1, L2, L3, L7, L8, choose]

2.1 Scalar rule, in general form. Let $(u_k) \to u$ and let $d \in \mathbb{R}$. By step 1.1 the sequence $(u_k - u)$ is null and by step 1.3 the constant sequence $(d)$ is bounded, so $(d(u_k - u)) = (d u_k - d u)$ is null by [L5]; by step 1.1 again, $d u_k \to d u$, and in particular $c x_k \to c x$. [step 1.1, step 1.3, L5, algebra]

2.2 Product rule, in general form. Let $(u_k) \to u$ and $(v_k) \to v$, and write $u_k v_k - u v = u_k(v_k - v) + v(u_k - u)$. By step 1.1 both $(v_k - v)$ and $(u_k - u)$ are null; by step 1.3 both $(u_k)$ and the constant sequence $(v)$ are bounded; so both $(u_k(v_k - v))$ and $(v(u_k - u))$ are null by [L5], and their sum is null by step 1.2 applied with both limits equal to $0$. By step 1.1, $u_k v_k \to u v$, and in particular $x_k y_k \to x y$. [step 1.1, step 1.2, step 1.3, L5, algebra]

2.3 Eventual lower bound. For every $k \ge K_0$, the reverse triangle inequality gives $|y_k| \ge |y| - |y - y_k| = |y| - |y_k - y| > |y| - |y|/2 = |y|/2 > 0$; so $|y_k| > |y|/2$ for all $k \ge K_0$, and in particular $|y_k| \ne 0$ there. [step 1.4, L2, L6, L8]

3.1 Difference rule. Applying step 2.1 to the sequence $(y_k)$ with $d = -1$ gives $-y_k \to -y$; the sum rule of step 1.2 applied to $(x_k)$ and $(-y_k)$ then gives $x_k - y_k = x_k + (-y_k) \to x + (-y) = x - y$. [step 1.2, step 2.1, L8, algebra]

3.2 Reciprocal estimate. For $k \ge K_0$ we have $y_k \ne 0$ and $|y_k| > |y|/2 > 0$, so [L7] applied to $0 < |y|/2 < |y_k|$ gives $0 < |y_k|^{-1} < 2/|y|$, and therefore $\left|\dfrac{1}{y_k} - \dfrac{1}{y}\right| = \dfrac{|y - y_k|}{|y_k|\,|y|} \le \dfrac{2}{|y|^2}\,|y_k - y|$. [step 2.3, L2, L7, L8, algebra]

4.1 Reciprocal rule. Let $\varepsilon > 0$ be an arbitrary real and put $\eta := \varepsilon |y|^2/2$, a real $> 0$; by [L3] there is $K_1$ with $|y_k - y| < \eta$ for all $k \ge K_1$. For every $k$ at least as large as both $K_0$ and $K_1$, step 3.2 gives $\left|\dfrac{1}{y_k} - \dfrac{1}{y}\right| \le \dfrac{2}{|y|^2}|y_k - y| < \dfrac{2}{|y|^2}\,\eta = \varepsilon$; hence $1/y_k \to 1/y$. [step 3.2, L1, L3, L7, L8, L9, algebra]

5.1 Quotient rule. By step 4.1 the sequence $(1/y_k)$ converges to $1/y$, so the product rule of step 2.2 applied to $(x_k)$ and $(1/y_k)$ gives $x_k/y_k = x_k \cdot (1/y_k) \to x \cdot (1/y) = x/y$. [step 2.2, step 4.1, algebra]

6.1 All the claims are established: the sum rule in step 1.2, the scalar rule in step 2.1, the difference rule in step 3.1, the product rule in step 2.2, and the reciprocal and quotient rules in steps 4.1 and 5.1. [step 1.2, step 2.1, step 2.2, step 3.1, step 4.1, step 5.1] ∎

## Remarks

- **The quotient case is where proofs usually cheat.** The estimate $|1/y_k - 1/y| = |y - y_k| / (|y_k||y|)$ is worthless until $|y_k|$ is known to stay away from $0$: without a lower bound the denominator can be arbitrarily small and the fraction arbitrarily large, even while $|y - y_k|$ shrinks. Step 2.3 supplies that bound, $|y_k| > |y|/2$ for $k \ge K_0$, and it is proved from the reverse triangle inequality, not assumed.

- The hypothesis $y_k \ne 0$ for every $k$ is only there so that $1/y_k$ is defined for every index. It is not needed for the limit: step 2.3 shows $|y_k| > |y|/2 > 0$ from $K_0$ on, so a sequence with $y \ne 0$ has at most finitely many zero terms, and by [[lem-limit-of-tail]] one may pass to the $K_0$-th tail and read the conclusion there.

- The hypothesis $y \ne 0$ cannot be dropped. With $x_k = 1$ and $y_k = 1/(k+1)$, both sequences converge: the first is constant ([[def-sequence]]) and the second is null ([[fs-limit-preserves-strict-inequality]]), so $y = 0$. Yet $x_k/y_k = k+1$, and no real $M$ bounds every $k+1$, by the Archimedean property ([[thm-of-archimedean]]); so the quotient sequence is unbounded, hence not convergent by [[lem-convergent-implies-bounded]].

- Nothing in the proof uses completeness of $\mathbb{R}$ beyond the Archimedean property invoked in [L3], so the same rules hold verbatim for sequences of rationals.
````

### `thm-alternating-series-test`

````markdown
---
id: thm-alternating-series-test
kind: theorem
title: "The alternating series test: if $(b_k)$ is nonincreasing with $b_k \\to 0$ then $\\sum_{k} (-1)^{k} b_k$ converges, the sum lies between any two consecutive partial sums, and the error after $n$ terms is at most $b_n$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-dirichlet-test, lem-alternating-sequence, def-monotone-sequence, lem-limit-preserves-order, lem-subsequence-inherits-limit, thm-induction-principle, lem-of-abs-value, def-series, def-real-limit]
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
    - title: "Alternating series test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Alternating_series_test"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "N. Donaldson, Math 140A: Series"
      url: "https://www.math.uci.edu/~ndonalds/math140a/3series.html"
pipeline_run: null
---

## Statement

Let $(\varepsilon_k)$ be the alternating sequence of [[lem-alternating-sequence]],
that is the unique sequence of reals with $\varepsilon_0 = 1$ and
$\varepsilon_{k+1} = -\varepsilon_k$, which is what is usually written
$\varepsilon_k = (-1)^k$; let $e$ and $o$ be its even and odd index maps, so that
$\varepsilon_{e_j} = 1$, $\varepsilon_{o_j} = -1$, and every natural number is
$e_j$ for exactly one $j$ or $o_j$ for exactly one $j$.

Let $(b_k)$ be a sequence of reals that is nonincreasing
([[def-monotone-sequence]]) and converges to $0$ ([[def-real-limit]]); then
$b_k \ge 0$ for every $k$. Write $t_n := \sum_{k<n} \varepsilon_k b_k$ for the
partial sums ([[def-series]]). Then:

1. the series $\sum \varepsilon_k b_k$ converges; write $L$ for its sum;
2. $t_{e_j} \le L \le t_{o_j}$ for every $j \in \mathbb{N}$, and for every
   $n \in \mathbb{N}$ the sum $L$ lies between the two consecutive partial sums
   $t_n$ and $t_{n+1}$;
3. $|L - t_n| \le b_n$ for every $n \in \mathbb{N}$.

Claim 3 is the error bound: the partial sum $t_n$, which uses the $n$ terms
$\varepsilon_0 b_0, \dots, \varepsilon_{n-1}b_{n-1}$, differs from the sum by at
most the first term omitted.

**Only claim 1 is a corollary of [[thm-dirichlet-test]].** Claims 2 and 3 are not:
they come from the interlacing of the even-index and odd-index partial sums, and
that argument is carried out below rather than smuggled into the Dirichlet
estimate, which produces no bracketing at all.

## Facts & Assumptions

**Given:** A nonincreasing sequence $(b_k)$ of reals with $b_k \to 0$, the alternating sequence $(\varepsilon_k)$ with its index maps $e$ and $o$, and the partial sums $t_n = \sum_{k<n} \varepsilon_k b_k$.

[L1] The alternating sequence and its index maps: $\varepsilon_0 = 1$, $\varepsilon_{k+1} = -\varepsilon_k$, $|\varepsilon_k| = 1$; $e_0 = 0$ and $e_{j+1} = e_j + 2$; $o_0 = 1$ and $o_{j+1} = o_j + 2$; both $e$ and $o$ are strictly increasing; $\mathbb{N}$ is the disjoint union of their ranges; $\varepsilon_{e_j} = 1$ and $\varepsilon_{o_j} = -1$ ([[lem-alternating-sequence]]).

[L2] Nonincreasing means $b_j \ge b_k$ whenever $j \le k$ ([[def-monotone-sequence]]).

[L3] Limits preserve non-strict inequalities holding eventually ([[lem-limit-preserves-order]], [[def-real-limit]]).

[L4] Dirichlet's test: if the partial sums of $\sum x_k$ are bounded and $(y_k)$ is nonincreasing with $y_k \to 0$, then $\sum x_k y_k$ converges ([[thm-dirichlet-test]]).

[L5] A subsequence of a convergent sequence converges to the same limit ([[lem-subsequence-inherits-limit]]).

[L6] Partial sums satisfy $t_0 = 0$ and $t_{n+1} = t_n + \varepsilon_n b_n$ ([[def-series]]).

[L7] The principle of induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L8] Absolute value: $|xy| = |x|\,|y|$ and $|x| \ge 0$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 For each fixed $k$ the inequality $b_m \le b_k$ holds for all $m \ge k$, and $(b_m)_m$ converges to $0$ while the constant sequence with value $b_k$ converges to $b_k$; hence $b_k \ge 0$. [given, L2, L3]

1.2 Writing $A_n = \sum_{k<n}\varepsilon_k$, an induction gives that for every $n$ either $A_n = 0$ and $\varepsilon_n = 1$, or $A_n = 1$ and $\varepsilon_n = -1$: at $n = 0$ we have $A_0 = 0$ and $\varepsilon_0 = 1$; and if $A_n = 0$ and $\varepsilon_n = 1$ then $A_{n+1} = 1$ and $\varepsilon_{n+1} = -1$, while if $A_n = 1$ and $\varepsilon_n = -1$ then $A_{n+1} = 0$ and $\varepsilon_{n+1} = 1$. In particular $|A_n| \le 1$ for every $n$. [L1, L6, L7]

1.3 For every $j$ one has $o_j = e_j + 1$ and $e_{j+1} = o_j + 1$, by induction: $o_0 = 1 = e_0 + 1$; and if $o_j = e_j + 1$ then $e_{j+1} = e_j + 2 = o_j + 1$ and $o_{j+1} = o_j + 2 = e_{j+1} + 1$. [L1, L7]

1.4 By [L6], $t_{n+1} - t_n = \varepsilon_n b_n$ for every $n$; hence $t_{e_j + 1} = t_{e_j} + b_{e_j}$ and $t_{o_j + 1} = t_{o_j} - b_{o_j}$. [L1, L6]

2.1 The partial sums of $\sum \varepsilon_k$ are bounded by step 1.2 and $(b_k)$ is nonincreasing with limit $0$, so $\sum \varepsilon_k b_k$ converges by Dirichlet's test; write $L$ for its sum, so that $t_n \to L$. [step 1.2, given, L4]

2.2 Using step 1.3, $t_{o_j} = t_{e_j + 1} = t_{e_j} + b_{e_j}$ and $t_{e_{j+1}} = t_{o_j + 1} = t_{o_j} - b_{o_j}$, so $t_{e_{j+1}} = t_{e_j} + b_{e_j} - b_{o_j}$ and $t_{o_{j+1}} = t_{e_{j+1}} + b_{e_{j+1}} = t_{o_j} - b_{o_j} + b_{e_{j+1}}$. [step 1.3, step 1.4]

3.1 Since $e_j < o_j < e_{j+1}$ and $(b_k)$ is nonincreasing, $b_{e_j} - b_{o_j} \ge 0$ and $b_{e_{j+1}} - b_{o_j} \le 0$; so by step 2.2 the sequence $(t_{e_j})_j$ is nondecreasing and the sequence $(t_{o_j})_j$ is nonincreasing. [step 1.3, step 2.2, L2]

3.2 The maps $e$ and $o$ are strictly increasing, so $(t_{e_j})_j$ and $(t_{o_j})_j$ are subsequences of $(t_n)$ and both converge to $L$. [step 2.1, L1, L5]

4.1 Fix $j$. For every $m \ge j$ one has $t_{e_j} \le t_{e_m}$, and $(t_{e_m})_m$ converges to $L$, so $t_{e_j} \le L$; symmetrically $t_{o_j} \ge L$. This is the first half of claim 2. [step 3.1, step 3.2, L3]

5.1 Let $n \in \mathbb{N}$. If $n = e_j$ then $t_n = t_{e_j} \le L$ and $t_{n+1} = t_{e_j+1} = t_{o_j} \ge L$; if $n = o_j$ then $t_n = t_{o_j} \ge L$ and $t_{n+1} = t_{o_j+1} = t_{e_{j+1}} \le L$. Since every $n$ is of exactly one of these two forms, $L$ always lies between $t_n$ and $t_{n+1}$, which is the second half of claim 2. [step 1.3, step 4.1, L1]

6.1 Consequently $|L - t_n| \le |t_{n+1} - t_n| = |\varepsilon_n b_n| = |\varepsilon_n|\,b_n = b_n$ for every $n$, using $b_n \ge 0$ and $|\varepsilon_n| = 1$; this is claim 3. [step 5.1, step 1.4, step 1.1, L1, L8] ∎

## Remarks

- **The two hypotheses are not interchangeable with "$b_k \to 0$" alone.** A null sequence that is not monotone can make $\sum \varepsilon_k b_k$ diverge, and the bracketing of step 3.1 is exactly where monotonicity enters; the error bound is false without it. The test as stated is the classical Leibniz criterion.

- **Why the index maps rather than "$2j$" and "$2j+1$".** The even and odd index maps come from [[lem-alternating-sequence]] together with the parity object itself, and step 1.3 is the only arithmetic needed about them. Rebuilding $(-1)^k$ by a fresh recursion inside this proof, and then proving afresh that the even indices and the odd indices partition $\mathbb{N}$, is precisely what that lemma exists to prevent.

- **What the test does not give.** It produces the sum $L$ as a limit and bounds the error, and it identifies $L$ with no closed expression. For the alternating harmonic series the value is not available at this point in the reading order; see [[rem-sums-proved-to-exist-but-not-evaluated]].
````

### `thm-cauchy-hadamard-for-real-power-series`

````markdown
---
id: thm-cauchy-hadamard-for-real-power-series
kind: theorem
title: "Cauchy–Hadamard: the reciprocal radius is $\\limsup_{k\\to\\infty}|a_{k+1}|^{1/(k+1)}$, with the zero and infinite cases included"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-real-power-series-and-radius-of-convergence, def-limsup-liminf, lem-limsup-exists, lem-limsup-epsilon-characterisation, thm-root-test, def-absolute-and-conditional-convergence]
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
    - title: "Cauchy-Hadamard theorem, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Cauchy-Hadamard_theorem"
    - title: "Power series, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Power_series"
pipeline_run: null
---

## Statement

Let $\sum_{n\ge0}a_n(x-c)^n$ be a real power series with radius $R$ ([[def-real-power-series-and-radius-of-convergence]]), and put

$$L:=\limsup_{k\to\infty}|a_{k+1}|^{1/(k+1)}\in[0,+\infty].$$

Then $R$ is the reciprocal of $L$ in the following explicit sense:

$$R=\begin{cases}+\infty,&L=0,\\[2pt]1/L,&0<L<+\infty,\\[2pt]0,&L=+\infty.\end{cases}$$

Equivalently, with the conventions $1/0:=+\infty$ and $1/(+\infty):=0$, one has $R=1/L$. The roots use $a_{k+1}$ and the exponent $1/(k+1)$ because $\mathbb N$ starts at $0$ and a zeroth root is undefined.

## Facts & Assumptions

**Given:** A real power series $\sum a_n(x-c)^n$, its radius $R$, the nonnegative root sequence $q_k:=|a_{k+1}|^{1/(k+1)}$, and $L:=\limsup_k q_k$.

[L1] The limit superior $L$ exists in $\overline{\mathbb R}$ for every real sequence ([[def-limsup-liminf]], [[lem-limsup-exists]]).

[L2] If $L$ is real, then for every real $\varepsilon>0$, $q_k<L+\varepsilon$ eventually and $q_k>L-\varepsilon$ frequently ([[lem-limsup-epsilon-characterisation]]).

[L3] The root test says that a real series from index $1$ converges absolutely when the limit superior of its shifted roots is $<1$, and diverges when that limit superior is $>1$ ([[thm-root-test]]).

[L4] Absolute convergence means convergence of the series of absolute values ([[def-absolute-and-conditional-convergence]]).

## Proof

**Proof technique:** direct.

1.1 Fix $x\in\mathbb R$ and put $d:=|x-c|$. The shifted roots of the terms $a_n(x-c)^n$, $n\ge1$, are $|a_{k+1}(x-c)^{k+1}|^{1/(k+1)}=q_kd$. [given, algebra]

2.1 If $L=0$, then for $d=0$ every root in step 1.1 is $0$, while for $d>0$ and any $\eta>0$, [L2] applied with $\varepsilon=\eta/d$ makes $q_kd<\eta$ eventually. Thus $\limsup_k(q_kd)=0<1$ for every $x$. [step 1.1, L2]

2.2 Suppose $0<L<+\infty$. If $d<1/L$, choose a real $t$ with $L<t<1/d$ (with the second inequality omitted when $d=0$). By [L2], $q_k<t$ eventually, so $\limsup_k(q_kd)\le td<1$. If $d>1/L$, choose $t$ with $1/d<t<L$; [L2] gives $q_k>t$ frequently, so $\limsup_k(q_kd)\ge td>1$. [step 1.1, L2, choose]

2.3 If $L=+\infty$ and $d>0$, then for every real $M>0$ and every index $N$ there is $k\ge N$ with $q_k>M$: otherwise $M$ would bound a tail and its supremum, forcing the infimum of the tail suprema to be finite. Taking $M>1/d$ shows $q_kd>1$ arbitrarily late, hence $\limsup_k(q_kd)>1$. [L1, step 1.1, choose]

3.1 By [L3] and [L4], step 2.1 gives absolute convergence at every real $x$ when $L=0$; step 2.2 gives absolute convergence for $d<1/L$ and divergence for $d>1/L$ when $0<L<+\infty$; and step 2.3 gives divergence at every $x\ne c$ when $L=+\infty$, while the series converges at $c$ to $a_0$. [step 2.1, step 2.2, step 2.3, L3, L4]

4.1 Reading these three alternatives through the definition of the radius yields $R=+\infty$, $R=1/L$, and $R=0$, respectively, which is the stated convention-complete formula. [step 3.1] ∎
````

### `thm-p-series-rational`

````markdown
---
id: thm-p-series-rational
kind: theorem
title: "For rational $p > 0$, $\\sum 1/k^p$ converges iff $p > 1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-cauchy-condensation, thm-geometric-series, def-rational-power, lem-rational-power-monotone, lem-rational-power-laws, def-monotone-sequence, def-series, lem-of-inverse-positive, thm-nth-roots-exist, lem-of-naturals-positive, def-integer-power, lem-of-abs-value]
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
    - title: "Harmonic series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Harmonic_series_(mathematics)"
    - title: "Cauchy condensation test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_condensation_test"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.28)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "Stephen Semmes, Elements of Analysis"
      url: "https://math.rice.edu/~semmes/math331.pdf"
pipeline_run: null
---

## Statement

Let $p \in \mathbb{Q}$ with $p > 0$. For a natural number $k \ge 1$ write
$\iota(k) = k \cdot 1_{\mathbb{R}}$ for the canonical natural, which is positive
([[lem-of-naturals-positive]]), and write $k^{p} := \iota(k)^{p}$ for its rational
power ([[def-rational-power]]). Then

$$\sum_{k \ge 1} \frac{1}{k^{p}} \ \text{converges} \qquad \Longleftrightarrow \qquad p > 1 .$$

In particular the harmonic series $\sum_{k \ge 1} 1/k$ diverges, at $p = 1$, and
$\sum_{k \ge 1} 1/k^{2}$ converges, at $p = 2$.

**The index range is not cosmetic.** The series starts at $k = 1$ because
$1/0^{p}$ is undefined: [[def-rational-power]] gives $0^{p} = 0$ for rational
$p > 0$, and $0$ has no inverse. Sequences here are functions on $\mathbb{N}$ and
$\mathbb{N}$ contains $0$ ([[def-series]]), so the object named above is a series
from the starting index $1$ in the sense of [[def-series]], not a series of a
sequence on $\mathbb{N}$.

**The exponent is rational, and that is a limitation of this page.** Rational
powers of a positive base are what [[def-rational-power]] supplies; real exponents
require the exponential and the logarithm, which this library develops later. The
statement above is therefore the full $p$-series theorem for every exponent this
page can name.

## Facts & Assumptions

**Given:** A rational $p > 0$ and the family $a_k := 1/k^{p} = \iota(k)^{-p}$, defined for naturals $k \ge 1$ ([[def-rational-power]], [[def-series]]).

[L1] Rational powers of a positive base are positive, and $a^{r+s} = a^{r}a^{s}$, $(a^{r})^{s} = a^{rs}$, $a^{-r} = 1/a^{r}$ for $a > 0$ and rationals $r, s$ ([[lem-rational-power-laws]]).

[L2] Monotonicity of rational powers: for rational $t > 0$ and $0 < a < b$ one has $a^{t} < b^{t}$; and for $a > 1$ and rationals $r < s$ one has $a^{r} < a^{s}$ ([[lem-rational-power-monotone]]).

[L3] The integer power and the rational power agree at an integer exponent: for $a > 0$ and $n \in \mathbb{Z}$, $a^{n}$ read as in [[def-integer-power]] equals $a^{n}$ read as in [[def-rational-power]], since $n = n/1$ and $a^{1/1} = a$ ([[thm-nth-roots-exist]], [[def-rational-power]]). In particular $a^{0} = 1$.

[L4] Reciprocation reverses the order on the positives: $0 < a < b$ implies $0 < 1/b < 1/a$ ([[lem-of-inverse-positive]]).

[L5] Condensation: for a family $(x_k)_{k \ge 1}$ that is nonnegative and nonincreasing, $\sum_{k \ge 1} x_k$ converges if and only if $\sum_{j \ge 0} 2^{j} x_{2^{j}}$ converges ([[thm-cauchy-condensation]], [[def-monotone-sequence]]).

[L6] The geometric series: $\sum_{j \ge 0} r^{j}$ converges if and only if $|r| < 1$ ([[thm-geometric-series]], [[lem-of-abs-value]]).

[L7] The canonical naturals are positive and order preserving: $0 < \iota(1) \le \iota(j) < \iota(k)$ for naturals $1 \le j < k$, and $\iota(2) = 2 > 1$ ([[lem-of-naturals-positive]]).

## Proof

**Proof technique:** direct.

1.1 For every natural $k \ge 1$ the base $\iota(k)$ is positive, so $a_k = \iota(k)^{-p}$ is defined and positive; in particular the family is nonnegative. [given, L7, L1]

1.2 For naturals $1 \le j < k$ we have $0 < \iota(j) < \iota(k)$, hence $\iota(j)^{p} < \iota(k)^{p}$ since $p > 0$, hence $a_j = 1/\iota(j)^{p} > 1/\iota(k)^{p} = a_k$; and for $j = k$ the two are equal. So $a_j \ge a_k$ whenever $1 \le j \le k$. [given, L7, L2, L4, L1]

1.3 For every $j \in \mathbb{N}$ the base $2^{j}$ is positive and, reading the exponent $j$ as a rational, $2^{j} a_{2^{j}} = 2^{j} \big(2^{j}\big)^{-p} = 2^{j} \cdot 2^{-jp} = 2^{\,j - jp} = 2^{\,(1-p)j} = \big(2^{\,1-p}\big)^{j}$. [L1, L3, L7, algebra]

1.4 Since $2 > 1$, the map $t \mapsto 2^{t}$ is strictly increasing on $\mathbb{Q}$ and $2^{0} = 1$; hence $r = 2^{\,1-p} < 1 = 2^{0}$ holds exactly when $1 - p < 0$, that is exactly when $p > 1$. [L2, L3, L7]

2.1 Condensation applies to $(a_k)_{k \ge 1}$: $\sum_{k \ge 1} a_k$ converges if and only if $\sum_{j \ge 0} 2^{j} a_{2^{j}}$ converges. [step 1.1, step 1.2, L5]

2.2 So the condensed series is the geometric series $\sum_{j \ge 0} r^{j}$ with $r := 2^{\,1-p}$, and $r > 0$, so $|r| = r$. [step 1.3, L1, L3]

3.1 By the geometric series theorem, $\sum_{j \ge 0} r^{j}$ converges if and only if $r < 1$. [step 2.2, L6]

4.1 Chaining the three equivalences: $\sum_{k \ge 1} 1/k^{p}$ converges $\iff$ the condensed series converges $\iff$ $r < 1$ $\iff$ $p > 1$. [step 2.1, step 2.2, step 3.1, step 1.4] ∎

## Remarks

- **Where the threshold comes from.** Condensation turns the $p$-series into a geometric series of ratio $2^{1-p}$, and the geometric threshold $r = 1$ pulls back to $p = 1$. Nothing about the number $1$ is special to the $p$-series; it is the exponent at which the condensed terms stop shrinking.

- **At $p = 1$ the condensed series is $\sum_{j \ge 0} 1$.** Its terms do not tend to $0$, so it diverges, and with it the harmonic series. That instance is worked out on the companion page, together with the older block argument that does not use condensation at all.

- **Only rational exponents are covered, and the gap is real.** For irrational $p$ the expression $k^{p}$ has no meaning in this library yet, so the statement is not merely unproved there, it is unstatable. The same limitation is what keeps the Bertrand-type series $\sum 1/(k (\log k)^{p})$ off this page entirely, the logarithm not being available.
````

