## Selection reasons

- high risk (7): 7 declared dependencies; 4 cited facts; boundary-sensitive language

## Target item — `cex-bounded-open-set-with-nonnull-boundary`

Normalized current SHA-256: `095666df22949f30944b650648d3e90023f6d9ba0e2a3f7de75a699093ccfeaf`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: cex-bounded-open-set-with-nonnull-boundary
kind: counterexample
title: "$((0,1)\\setminus S)\\times(0,1)$ is bounded and open, but its boundary has positive Jordan outer content"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cex-compact-set-without-jordan-content, def-fat-cantor-set, thm-fat-cantor-set-has-positive-measure, lem-product-lower-bound-for-jordan-content, thm-jordan-boundary-criterion, def-metric-interior-closure-boundary, def-jordan-inner-and-outer-content]
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
    - title: "Whitman College real analysis notes"
      url: "https://www.whitman.edu/Documents/Academics/Mathematics/Hardman.pdf"
pipeline_run: null
---

## Statement refuted

Every bounded open subset of $\mathbb R^2$ is Jordan measurable.

## Facts & Assumptions

**Given:** $U=((0,1)\setminus S)\times(0,1)$, with $S$ the fat Cantor set.

[L1] $S$ is closed, nowhere dense, and has interval-cover lower bound $1/2$ ([[def-fat-cantor-set]], [[thm-fat-cantor-set-has-positive-measure]]).

[L2] The slab $S\times[0,1]$ has outer content at least $1/2$ ([[lem-product-lower-bound-for-jordan-content]], [[cex-compact-set-without-jordan-content]]).

## Counterexample

**Proof technique:** direct.

1.1 The set $(0,1)\setminus S$ is open, so $U$ is open and bounded.  [L1]

1.2 Every neighbourhood of a point of $S\times[0,1]$ meets $U$, by nowhere density in the first coordinate and the interval factor, and meets the complement. Hence $S\times[0,1]\subseteq\partial U$.   [L1, given]

2.1 Outer content is monotone under inclusion, so [L2] gives the boundary positive outer content.   [step 1.2, L2, given]

3.1 By [[thm-jordan-boundary-criterion]], $U$ is not Jordan measurable.  [step 2.1] ∎
````

## Wave 13 provenance row

```json
{
  "id": "cex-bounded-open-set-with-nonnull-boundary",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://www.whitman.edu/Documents/Academics/Mathematics/Hardman.pdf",
    "https://www.jirka.org/ra/html/sec_jordansets.html"
  ],
  "rationale": "The sources give fat Cantor sets and standard bounded open non-Jordan examples. The item uses the specific complement-times-interval construction and proves its boundary contains a positive-content slab.",
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
      "source": "def-fat-cantor-set",
      "source_section": "Definition",
      "quote": "**The lengths.** By the recursion theorem in the index-carrying form used by\n[[def-finite-sum]] ([[thm-recursion]], applied to $\\mathbb{N} \\times \\mathbb{R}$\nwith starting element $(0,1)$ and the map\n$(n,t) \\mapsto (n+1,\\, (t - 4^{-n-1}) \\cdot 2^{-1})$) there is a unique sequence\n$(\\lambda_n)_{n \\in \\mathbb{N}}$ of reals with\n\n$$\\lambda_0 = 1, \\qquad \\lambda_{n+1} = (\\lambda_n - 4^{-n-1}) \\cdot 2^{-1} \\quad (n \\in \\mathbb{N}),$$\n\npowers being those of [[def-integer-power]]. Put $g_n := \\lambda_n - \\lambda_{n+1}$.\n\n**The left endpoints.** Let $\\mathcal{F}$ be the set of pairs $(N, \\ell)$ with\n$N \\in \\mathbb{N}$, $N \\ge 1$, and $\\ell$ a function from\n$\\{\\, j \\in \\mathbb{N} : j < N \\,\\}$ to $\\mathbb{R}$; such a pair is a *finite\nlist of reals of length $N$*. Applying [[thm-recursion]] to\n$\\mathbb{N} \\times \\mathcal{F}$, the starting element $(0, (1, \\ell^{(0)}))$ with\n$\\ell^{(0)}_0 := 0$, and the map that sends $(n, (N,\\ell))$ to\n$(n+1, (N + N, \\ell'))$ where\n\n$$\\ell'_j := \\ell_j \\ \\ (j < N), \\qquad \\ell'_j := \\ell_{j - N} + g_n \\ \\ (N \\le j < N + N),$$\n\ngives a unique family $(N_n, \\ell^{(n)})_{n \\in \\mathbb{N}}$ of finite lists,\nwith $N_0 = 1$, $N_{n+1} = N_n + N_n$, and $\\ell^{(n+1)}$ the concatenation of\n$\\ell^{(n)}$ with its translate by $g_n$. Write $e^{(n)}_j := \\ell^{(n)}_j$.\n\n**The sets.** For $n \\in \\mathbb{N}$ put\n\n$$S_n \\;:=\\; \\bigcup_{j < N_n} \\big[\\, e^{(n)}_j,\\ e^{(n)}_j + \\lambda_n \\,\\big], \\qquad S \\;:=\\; \\bigcap_{n \\in \\mathbb{N}} S_n ,$$\n\nthe intervals being those of [[def-interval]]. $S$ is the\n**Smith-Volterra-Cantor set**, also called the *fat Cantor set*.\n\n**Counting.** For every $n$ and every real $c$ one has\n$\\sum_{j < N_n} c = 2^{n} c$, by induction on $n$ ([[thm-induction-principle]]):\nat $n = 0$ both sides are $c$; and $\\sum_{j<N_n + N_n} c = \\sum_{j<N_n} c +\n\\sum_{j<N_n} c = 2^{n}c + 2^{n}c = 2^{n+1}c$, by the splitting law\n([[lem-finite-sum-laws]], [[def-finite-sum]]) and\n$2^{n+1} = 2^{n} \\cdot 2 = 2^{n} + 2^{n}$ ([[def-integer-power]],\n[[def-ordered-field]]). So stage $n$ has \"$2^n$ intervals\" in exactly this sense,\nand no separate arithmetic of natural-number exponents is needed.\n\n**The lengths are positive and shrink.** By induction on $n$:\n$0 < \\lambda_{n+1} \\le \\lambda_n \\cdot 2^{-1}$ and $2^{n}\\lambda_n \\ge 2^{-1}$.\nIndeed $2^{n+1}\\lambda_{n+1} = 2^{n}(\\lambda_n - 4^{-n-1}) = 2^{n}\\lambda_n -\n4^{-1} \\cdot 2^{-n}$ by [[lem-power-laws]], so by induction\n$2^{n}\\lambda_n = 1 - 4^{-1}\\sum_{i<n} 2^{-i} \\ge 1 - 4^{-1} \\cdot 2 = 2^{-1}$,\nusing $\\sum_{i<n}2^{-i} \\le \\sum_{i=0}^{\\infty} 2^{-i} = 2$\n([[thm-geometric-series]], [[thm-nonnegative-series-bounded-partial-sums]],\n[[def-series]]). Hence $\\lambda_n \\ge 2^{-n-1} > 0$; and\n$\\lambda_{n+1} = (\\lambda_n - 4^{-n-1})\\cdot 2^{-1} \\le \\lambda_n \\cdot 2^{-1}$\ngives $\\lambda_n \\le 2^{-n}$ by a second induction, so the lengths tend to $0$.\n\n**Each stage removes an open middle interval of length $4^{-n-1}$.** From the\nrecursion, the two sub-intervals of $[e,\\, e + \\lambda_n]$ retained at stage\n$n+1$ are $[e,\\, e + \\lambda_{n+1}]$ and $[e + g_n,\\, e + g_n + \\lambda_{n+1}] =\n[e + g_n,\\, e + \\lambda_n]$, so what is dropped from that piece is the open\ninterval\n\n$$M \\;=\\; \\big(\\, e + \\lambda_{n+1},\\ e + g_n \\,\\big), \\qquad \\text{of length } \\ g_n - \\lambda_{n+1} \\;=\\; \\lambda_n - 2\\lambda_{n+1} \\;=\\; 4^{-n-1} .$$\n\nIn particular $\\lambda_{n+1} < g_n$, so $M$ is nonempty, and $g_n > 0$, so\n$[e + g_n, e + \\lambda_n] \\subseteq [e, e+\\lambda_n]$. Counting from $1$ as in\nthe title: at stage $n \\ge 1$ an open interval of length $4^{-n}$ is removed from\neach of the $2^{n-1}$ intervals then present.\n\n**The family is nested and lies in $[0,1]$.** Each retained sub-interval is\ncontained in the piece it came from, by the previous paragraph, so\n$S_{n+1} \\subseteq S_n$; and $S_0 = [0, 1]$ since $N_0 = 1$, $e^{(0)}_0 = 0$ and\n$\\lambda_0 = 1$. Hence $S \\subseteq S_m \\subseteq [0,1]$ for every $m$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-fat-cantor-set-has-positive-measure",
      "source_section": "Statement",
      "quote": "Let $S$ be the Smith-Volterra-Cantor set ([[def-fat-cantor-set]]). Then:\n\n1. $S$ is closed and bounded, hence compact\n   ([[thm-heine-borel-characterisation-r]]);\n2. $S$ is perfect ([[def-perfect-set-r]]);\n3. $S$ is nowhere dense ([[def-nowhere-dense-meager]]);\n4. if $(a_k)$ and $(b_k)$ are sequences of reals with $a_k \\le b_k$,\n   $S \\subseteq \\bigcup_k [a_k,b_k]$ and $\\sum_{k<i}(b_k - a_k) \\le M$ for every\n   $i \\in \\mathbb{N}$, then $M \\ge 2^{-1}$.\n\nIn particular $S$ does **not** have measure zero\n([[def-measure-zero-and-content-zero]]): no cover of $S$ by intervals has total\nlength below $2^{-1}$, let alone below every positive $\\varepsilon$.\n\n**Claim 4 is the quantitative form**, and it is what claim 4 of the title asserts\nin the only vocabulary available here. This library defines no outer measure, so\n\"the measure of $S$ is $1/2$\" is not a statement it can make; what it can state,\nand what is proved below, is that $2^{-1}$ is a lower bound for the total length\nof every interval cover of $S$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-product-lower-bound-for-jordan-content",
      "source_section": "Statement",
      "quote": "Let $A\\subseteq\\mathbb R$. If every finite interval cover of $A$ has total length at least $c\\ge0$, then every finite rectangle cover of $A\\times[0,d]$, $d\\ge0$, has total area at least $cd$.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "cex-compact-set-without-jordan-content",
      "source_section": "Statement refuted",
      "quote": "Every compact bounded subset of $\\mathbb R^2$ is Jordan measurable.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "The set $(0,1)\\setminus S$ is open, so $U$ is open and bounded. ",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "Every neighbourhood of a point of $S\\times[0,1]$ meets $U$, by nowhere density in the first coordinate and the interval factor, and meets the complement. Hence $S\\times[0,1]\\subseteq\\partial U$.  ",
      "step": "1.2",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Outer content is monotone under inclusion, so [L2] gives the boundary positive outer content.  ",
      "step": "2.1",
      "inputs": [
        "L2",
        "step 1.2"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "By [[thm-jordan-boundary-criterion]], $U$ is not Jordan measurable. ",
      "step": "3.1",
      "inputs": [
        "step 2.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "cex-bounded-open-set-with-nonnull-boundary: the Statement refuted fixes the displayed objects and has no conclusion depending on an unlicensed choice from an empty family: Every bounded open subset of $\\mathbb R^2$ is Jordan measurable."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "cex-bounded-open-set-with-nonnull-boundary: no independent zero-parameter boundary remains after the stated hypotheses and definitions; checked against the Statement refuted: Every bounded open subset of $\\mathbb R^2$ is Jordan measurable."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "cex-bounded-open-set-with-nonnull-boundary: the assertion has no separate unit-size case; its quantified argument applies without a one-case split: Every bounded open subset of $\\mathbb R^2$ is Jordan measurable."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "cex-bounded-open-set-with-nonnull-boundary: no geometric or algebraic degeneracy changes the asserted conclusion; checked against the Statement refuted: Every bounded open subset of $\\mathbb R^2$ is Jordan measurable."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "step 2.1: the proof explicitly treats the endpoint, boundary, or radial-limit behaviour used by the assertion."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "cex-bounded-open-set-with-nonnull-boundary: the proof uses only given objects, formulas, or universal instantiation and makes no choice from a possibly empty family; see Statement refuted: Every bounded open subset of $\\mathbb R^2$ is Jordan measurable."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "cex-bounded-open-set-with-nonnull-boundary: the Statement refuted is not an equivalence, so there is no forward implication obligation: Every bounded open subset of $\\mathbb R^2$ is Jordan measurable."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "cex-bounded-open-set-with-nonnull-boundary: the Statement refuted is not an equivalence, so there is no reverse implication obligation: Every bounded open subset of $\\mathbb R^2$ is Jordan measurable."
    }
  ]
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "cex-bounded-open-set-with-nonnull-boundary",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content-examples",
    "batch": "wave13-real-analysis",
    "target": "cex-compact-set-without-jordan-content",
    "declared_target": "cex-compact-set-without-jordan-content",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content-examples",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-bounded-open-set-with-nonnull-boundary",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content-examples",
    "batch": "wave13-real-analysis",
    "target": "def-fat-cantor-set",
    "declared_target": "def-fat-cantor-set",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-bounded-open-set-with-nonnull-boundary",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content-examples",
    "batch": "wave13-real-analysis",
    "target": "thm-fat-cantor-set-has-positive-measure",
    "declared_target": "thm-fat-cantor-set-has-positive-measure",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-bounded-open-set-with-nonnull-boundary",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content-examples",
    "batch": "wave13-real-analysis",
    "target": "lem-product-lower-bound-for-jordan-content",
    "declared_target": "lem-product-lower-bound-for-jordan-content",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-bounded-open-set-with-nonnull-boundary",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content-examples",
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
    "source": "cex-bounded-open-set-with-nonnull-boundary",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content-examples",
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
    "source": "cex-bounded-open-set-with-nonnull-boundary",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content-examples",
    "batch": "wave13-real-analysis",
    "target": "def-jordan-inner-and-outer-content",
    "declared_target": "def-jordan-inner-and-outer-content",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
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

## Full exact-current text of every cited or declared item (7)

### `cex-compact-set-without-jordan-content`

````markdown
---
id: cex-compact-set-without-jordan-content
kind: counterexample
title: "The Smith–Volterra–Cantor slab $S\\times[0,1]$ is compact and not Jordan measurable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-fat-cantor-set, thm-fat-cantor-set-has-positive-measure, lem-product-lower-bound-for-jordan-content, thm-jordan-boundary-criterion, thm-heine-borel-rn, def-metric-interior-closure-boundary, def-jordan-inner-and-outer-content]
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
    - title: "Whitman College real analysis notes"
      url: "https://www.whitman.edu/Documents/Academics/Mathematics/Hardman.pdf"
pipeline_run: null
---

## Statement refuted

Every compact bounded subset of $\mathbb R^2$ is Jordan measurable.

## Facts & Assumptions

**Given:** The Smith-Volterra-Cantor set $S$ and $K=S\times[0,1]$.

[L1] $S$ is compact, nowhere dense, and every finite interval cover has total length at least $1/2$ ([[def-fat-cantor-set]], [[thm-fat-cantor-set-has-positive-measure]]).

[L2] The product lower bound is [[lem-product-lower-bound-for-jordan-content]].

## Counterexample

**Proof technique:** direct.

1.1 The slab $K$ is closed and bounded, hence compact by [[thm-heine-borel-rn]]. Since $S$ has empty interior, $K$ has empty interior and, being closed, equals its boundary.   [L1, given]

1.2 By [L1] and [L2], every rectangle cover of $K$ has total area at least $1/2$; its boundary therefore does not have content zero.   [L1, L2, given]

2.1 The boundary criterion [[thm-jordan-boundary-criterion]] makes $K$ non-Jordan-measurable.  [step 1.1, step 1.2] ∎
````

### `def-fat-cantor-set`

````markdown
---
id: def-fat-cantor-set
kind: definition
title: "The Smith-Volterra-Cantor set: the same construction removing, at stage $n \\ge 1$, an open middle interval of length $4^{-n}$ from each of the $2^{n-1}$ remaining intervals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-cantor-set, def-interval, thm-recursion, thm-induction-principle, def-integer-power, lem-power-laws, def-finite-sum, lem-finite-sum-laws, thm-geometric-series, thm-nonnegative-series-bounded-partial-sums, def-series, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: [def-smith-volterra-cantor-set]
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
    - title: "Smith-Volterra-Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Smith%E2%80%93Volterra%E2%80%93Cantor_set"
    - title: "Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_set"
    - title: "A. Jin, Cantor sets in topology, analysis, and financial markets"
      url: "https://math.uchicago.edu/~may/REU2021/REUPapers/Jin%2CAlexa.pdf"
pipeline_run: null
---

## Definition

**The lengths.** By the recursion theorem in the index-carrying form used by
[[def-finite-sum]] ([[thm-recursion]], applied to $\mathbb{N} \times \mathbb{R}$
with starting element $(0,1)$ and the map
$(n,t) \mapsto (n+1,\, (t - 4^{-n-1}) \cdot 2^{-1})$) there is a unique sequence
$(\lambda_n)_{n \in \mathbb{N}}$ of reals with

$$\lambda_0 = 1, \qquad \lambda_{n+1} = (\lambda_n - 4^{-n-1}) \cdot 2^{-1} \quad (n \in \mathbb{N}),$$

powers being those of [[def-integer-power]]. Put $g_n := \lambda_n - \lambda_{n+1}$.

**The left endpoints.** Let $\mathcal{F}$ be the set of pairs $(N, \ell)$ with
$N \in \mathbb{N}$, $N \ge 1$, and $\ell$ a function from
$\{\, j \in \mathbb{N} : j < N \,\}$ to $\mathbb{R}$; such a pair is a *finite
list of reals of length $N$*. Applying [[thm-recursion]] to
$\mathbb{N} \times \mathcal{F}$, the starting element $(0, (1, \ell^{(0)}))$ with
$\ell^{(0)}_0 := 0$, and the map that sends $(n, (N,\ell))$ to
$(n+1, (N + N, \ell'))$ where

$$\ell'_j := \ell_j \ \ (j < N), \qquad \ell'_j := \ell_{j - N} + g_n \ \ (N \le j < N + N),$$

gives a unique family $(N_n, \ell^{(n)})_{n \in \mathbb{N}}$ of finite lists,
with $N_0 = 1$, $N_{n+1} = N_n + N_n$, and $\ell^{(n+1)}$ the concatenation of
$\ell^{(n)}$ with its translate by $g_n$. Write $e^{(n)}_j := \ell^{(n)}_j$.

**The sets.** For $n \in \mathbb{N}$ put

$$S_n \;:=\; \bigcup_{j < N_n} \big[\, e^{(n)}_j,\ e^{(n)}_j + \lambda_n \,\big], \qquad S \;:=\; \bigcap_{n \in \mathbb{N}} S_n ,$$

the intervals being those of [[def-interval]]. $S$ is the
**Smith-Volterra-Cantor set**, also called the *fat Cantor set*.

**Counting.** For every $n$ and every real $c$ one has
$\sum_{j < N_n} c = 2^{n} c$, by induction on $n$ ([[thm-induction-principle]]):
at $n = 0$ both sides are $c$; and $\sum_{j<N_n + N_n} c = \sum_{j<N_n} c +
\sum_{j<N_n} c = 2^{n}c + 2^{n}c = 2^{n+1}c$, by the splitting law
([[lem-finite-sum-laws]], [[def-finite-sum]]) and
$2^{n+1} = 2^{n} \cdot 2 = 2^{n} + 2^{n}$ ([[def-integer-power]],
[[def-ordered-field]]). So stage $n$ has "$2^n$ intervals" in exactly this sense,
and no separate arithmetic of natural-number exponents is needed.

**The lengths are positive and shrink.** By induction on $n$:
$0 < \lambda_{n+1} \le \lambda_n \cdot 2^{-1}$ and $2^{n}\lambda_n \ge 2^{-1}$.
Indeed $2^{n+1}\lambda_{n+1} = 2^{n}(\lambda_n - 4^{-n-1}) = 2^{n}\lambda_n -
4^{-1} \cdot 2^{-n}$ by [[lem-power-laws]], so by induction
$2^{n}\lambda_n = 1 - 4^{-1}\sum_{i<n} 2^{-i} \ge 1 - 4^{-1} \cdot 2 = 2^{-1}$,
using $\sum_{i<n}2^{-i} \le \sum_{i=0}^{\infty} 2^{-i} = 2$
([[thm-geometric-series]], [[thm-nonnegative-series-bounded-partial-sums]],
[[def-series]]). Hence $\lambda_n \ge 2^{-n-1} > 0$; and
$\lambda_{n+1} = (\lambda_n - 4^{-n-1})\cdot 2^{-1} \le \lambda_n \cdot 2^{-1}$
gives $\lambda_n \le 2^{-n}$ by a second induction, so the lengths tend to $0$.

**Each stage removes an open middle interval of length $4^{-n-1}$.** From the
recursion, the two sub-intervals of $[e,\, e + \lambda_n]$ retained at stage
$n+1$ are $[e,\, e + \lambda_{n+1}]$ and $[e + g_n,\, e + g_n + \lambda_{n+1}] =
[e + g_n,\, e + \lambda_n]$, so what is dropped from that piece is the open
interval

$$M \;=\; \big(\, e + \lambda_{n+1},\ e + g_n \,\big), \qquad \text{of length } \ g_n - \lambda_{n+1} \;=\; \lambda_n - 2\lambda_{n+1} \;=\; 4^{-n-1} .$$

In particular $\lambda_{n+1} < g_n$, so $M$ is nonempty, and $g_n > 0$, so
$[e + g_n, e + \lambda_n] \subseteq [e, e+\lambda_n]$. Counting from $1$ as in
the title: at stage $n \ge 1$ an open interval of length $4^{-n}$ is removed from
each of the $2^{n-1}$ intervals then present.

**The family is nested and lies in $[0,1]$.** Each retained sub-interval is
contained in the piece it came from, by the previous paragraph, so
$S_{n+1} \subseteq S_n$; and $S_0 = [0, 1]$ since $N_0 = 1$, $e^{(0)}_0 = 0$ and
$\lambda_0 = 1$. Hence $S \subseteq S_m \subseteq [0,1]$ for every $m$.

## Remarks

- **What is different from [[def-cantor-set]].** There the removed middle is a
  fixed *proportion* of each piece, so the construction is self-similar and the
  total removed length is $1$. Here the removed middle has a fixed *length*
  $4^{-n-1}$, chosen to shrink faster than the pieces multiply, and the total
  removed length is only $2^{-1}$. Everything topological survives the change:
  the set is still compact, perfect and nowhere dense
  ([[thm-fat-cantor-set-has-positive-measure]]). Everything metric fails: $S$ is
  not of measure zero.

- **Why the construction is written with explicit lists.** The set $S_n$ is a
  union of $2^n$ intervals, and both the estimate of the removed length and the
  finite covers used later need those intervals as a *list*, indexed by naturals
  below $N_n$. Building the list by recursion, rather than asserting its
  existence at each stage, is also what keeps the construction free of any
  choice: $(N_n, \ell^{(n)})$ is a single function of $n$.

- **The name.** The set was described by Smith in 1875, by Volterra in 1881 and
  by Cantor in 1883; "fat Cantor set" is the informal name, and the two names are
  used interchangeably below.

- **$0$ and $1$ belong to $S$.** Both are instances of the general fact that
  every $e^{(n)}_j$ and every $e^{(n)}_j + \lambda_n$ lies in $S$, proved where it
  is used, in [[thm-fat-cantor-set-has-positive-measure]]: take $n = 0$ and
  $j = 0$, where $e^{(0)}_0 = 0$ and $e^{(0)}_0 + \lambda_0 = 1$.
````

### `def-jordan-inner-and-outer-content`

````markdown
---
id: def-jordan-inner-and-outer-content
kind: definition
title: "Jordan inner and outer content and Jordan measurable bounded sets in $\\mathbb{R}^m$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-multidimensional-rectangle-and-volume, def-multidimensional-grid-partition, def-finite-sum, lem-finite-sum-laws, def-metric-bounded-diameter, def-metric-ball, lem-metrics-on-rn, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-complete-ordered-field, def-infimum, thm-infimum-property, lem-sup-unique]
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
    - title: "J. Lebl, Basic Analysis, Jordan Measurable Sets"
      url: "https://www.jirka.org/ra/html/sec_jordansets.html"
pipeline_run: null
---

## Definition

For bounded $E\subseteq\mathbb R^m$, in the metric sense of [[def-metric-bounded-diameter]], its **Jordan outer content** is the infimum of $\sum_{r<q}\operatorname{vol}(R_r)$ over finite axis-parallel rectangle covers of $E$. Its **Jordan inner content** is the supremum of the same sums over finite families of rectangles contained in $E$ whose interiors are pairwise disjoint.

Metric boundedness always supplies a nondegenerate bounding rectangle. For
nonempty $E$, choose $x_0\in\mathbb R^m$ and $r>0$ with
$E\subseteq B(x_0,r)$. Since
$|x_j-(x_0)_j|\le d_\infty(x,x_0)\le d_2(x,x_0)<r$ for every coordinate
([[lem-metrics-on-rn]], [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clause 3, [[def-metric-ball]]), the nondegenerate box
$\prod_{j<m}[(x_0)_j-r,(x_0)_j+r]$ contains $E$. The empty set lies in
any fixed nondegenerate rectangle.

Thus the outer family is nonempty and the same bounding rectangle bounds the
inner sums; the empty family gives inner sum $0$. Refining all listed
endpoints into one grid and splitting the nested finite sums shows every
inscribed sum is at most every covering sum
([[def-multidimensional-grid-partition]], [[lem-finite-sum-laws]]).
Completeness therefore supplies finite real extrema
([[def-complete-ordered-field]], [[thm-infimum-property]], [[def-infimum]],
[[lem-sup-unique]]).

The set is **Jordan measurable** when the contents agree, and their common value is its **Jordan content**. The empty set and every degenerate rectangle have content $0$.
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

### `lem-product-lower-bound-for-jordan-content`

````markdown
---
id: lem-product-lower-bound-for-jordan-content
kind: lemma
title: "If every finite interval cover of $A\\subseteq\\mathbb{R}$ has total length at least $c$, then every rectangle cover of $A\\times[0,d]$ has total area at least $cd$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-jordan-inner-and-outer-content, def-multidimensional-rectangle-and-volume, def-multidimensional-grid-partition, def-finite-sum, lem-finite-sum-laws, def-interval]
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

Let $A\subseteq\mathbb R$. If every finite interval cover of $A$ has total length at least $c\ge0$, then every finite rectangle cover of $A\times[0,d]$, $d\ge0$, has total area at least $cd$.

## Facts & Assumptions

**Given:** A finite rectangle cover and the stated interval-cover lower bound.

[L1] Rectangles and grids are [[def-multidimensional-rectangle-and-volume]] and [[def-multidimensional-grid-partition]].

[L2] Finite sums split and distribute ([[def-finite-sum]], [[lem-finite-sum-laws]]).

## Proof

**Proof technique:** direct.

1.1 If $d=0$, then every covering area is nonnegative and the required lower bound is $cd=0$. Hence assume $d>0$. Clip the rectangles to a common bounding rectangle and partition the nondegenerate interval $[0,d]$ at every vertical endpoint.   [L1, given]

2.1 On each nondegenerate horizontal strip, choose an interior height. The horizontal projections of the rectangles active at that height cover $A$, so their total widths are at least $c$.  [given, step 1.1, choose]

3.1 Multiply the inequality for each strip by its height and sum. Reindexing the nested finite sums counts each covering rectangle by its width times its total active height, at most its area. Thus the covering area is at least $c\sum\text{strip heights}=cd$.  [step 2.1, L2, algebra] ∎
````

### `thm-fat-cantor-set-has-positive-measure`

````markdown
---
id: thm-fat-cantor-set-has-positive-measure
kind: theorem
title: "The Smith-Volterra-Cantor set is compact, perfect and nowhere dense, and does not have measure zero"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-fat-cantor-set, def-measure-zero-and-content-zero, def-nowhere-dense-meager, thm-heine-borel-characterisation-r, def-open-cover-r, def-bounded-set, def-perfect-set-r, lem-nondegenerate-interval-is-not-null, thm-n-cross-n-countable, def-injection-surjection-bijection, def-finite-sum, lem-finite-sum-laws, def-series, def-interval, def-integer-power, lem-power-laws, thm-open-set-algebra-r, def-open-and-closed-in-r, def-limit-point-r, def-interior-closure-boundary-r, thm-closure-characterisations-r, def-neighbourhood-r, thm-geometric-series, thm-nonnegative-series-bounded-partial-sums, thm-induction-principle, thm-well-ordering-principle, lem-nat-trichotomy, def-nat-order, lem-geometric-sequence-null, def-real-limit, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
forward_refs: [cex-nowhere-dense-with-positive-measure, cex-dense-set-of-measure-zero, ex-fat-cantor-measure-computed]
aliases: []
landmark: true
short: "fat Cantor set: nowhere dense, not null"
proof_strategy: contradiction
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
    - title: "Smith-Volterra-Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Smith%E2%80%93Volterra%E2%80%93Cantor_set"
    - title: "Null set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Null_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 11"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "A. Jin, Cantor sets in topology, analysis, and financial markets"
      url: "https://math.uchicago.edu/~may/REU2021/REUPapers/Jin%2CAlexa.pdf"
pipeline_run: null
---

## Statement

Let $S$ be the Smith-Volterra-Cantor set ([[def-fat-cantor-set]]). Then:

1. $S$ is closed and bounded, hence compact
   ([[thm-heine-borel-characterisation-r]]);
2. $S$ is perfect ([[def-perfect-set-r]]);
3. $S$ is nowhere dense ([[def-nowhere-dense-meager]]);
4. if $(a_k)$ and $(b_k)$ are sequences of reals with $a_k \le b_k$,
   $S \subseteq \bigcup_k [a_k,b_k]$ and $\sum_{k<i}(b_k - a_k) \le M$ for every
   $i \in \mathbb{N}$, then $M \ge 2^{-1}$.

In particular $S$ does **not** have measure zero
([[def-measure-zero-and-content-zero]]): no cover of $S$ by intervals has total
length below $2^{-1}$, let alone below every positive $\varepsilon$.

**Claim 4 is the quantitative form**, and it is what claim 4 of the title asserts
in the only vocabulary available here. This library defines no outer measure, so
"the measure of $S$ is $1/2$" is not a statement it can make; what it can state,
and what is proved below, is that $2^{-1}$ is a lower bound for the total length
of every interval cover of $S$.

## Facts & Assumptions

**Given:** The lengths $(\lambda_n)$, the gaps $g_n = \lambda_n - \lambda_{n+1}$, the finite lists $(N_n, \ell^{(n)})$ with entries $e^{(n)}_j$, and the sets $S_n$, $S$ of [[def-fat-cantor-set]]. For $n \in \mathbb{N}$ and $j < N_n$ write $M^{(n)}_j := \big(e^{(n)}_j + \lambda_{n+1},\ e^{(n)}_j + g_n\big)$ for the open interval removed from the $j$-th piece at stage $n$.

[A1] The negation of claim 4: sequences $(a_k)$, $(b_k)$ with $a_k \le b_k$, $S \subseteq \bigcup_k [a_k,b_k]$, all partial sums $\sum_{k<i}(b_k - a_k) \le M$, and $M < 2^{-1}$.

[L1] The construction: $N_0 = 1$, $e^{(0)}_0 = 0$, $\lambda_0 = 1$, $N_{n+1} = N_n + N_n$, $e^{(n+1)}_j = e^{(n)}_j$ for $j < N_n$ and $e^{(n+1)}_{N_n + j} = e^{(n)}_j + g_n$ for $j < N_n$; $S_n = \bigcup_{j<N_n}[e^{(n)}_j, e^{(n)}_j + \lambda_n]$; $S = \bigcap_n S_n \subseteq S_m \subseteq [0,1]$; $0 < \lambda_{n+1} < g_n < \lambda_n \le 2^{-n}$; $g_n + \lambda_{n+1} = \lambda_n$; $\lambda_n - 2\lambda_{n+1} = 4^{-n-1}$; and $\sum_{j<N_n} c = 2^{n}c$ for every real $c$ ([[def-fat-cantor-set]], [[def-interval]], [[def-integer-power]], [[lem-power-laws]]).

[L2] $[c,d]$ is a closed set, $(c,d)$ is open, $N_\varepsilon(x) = (x-\varepsilon,x+\varepsilon)$, a closed bounded interval is bounded, finite unions of closed sets are closed and an intersection of a nonempty family of closed sets is closed ([[def-interval]], [[def-open-and-closed-in-r]], [[def-neighbourhood-r]], [[def-bounded-set]], [[thm-open-set-algebra-r]]).

[L3] A subset of $\mathbb{R}$ is compact exactly when it is closed and bounded ([[thm-heine-borel-characterisation-r]], [[def-open-cover-r]]).

[L4] Perfect means closed with no isolated point; nowhere dense means the interior of the closure is empty, and a closed set equals its closure ([[def-perfect-set-r]], [[def-limit-point-r]], [[def-nowhere-dense-meager]], [[def-interior-closure-boundary-r]], [[thm-closure-characterisations-r]]).

[L5] If $[u,v] \subseteq \bigcup_k [c_k,d_k]$ with $u \le v$, $c_k \le d_k$ and $\sum_{k<i}(d_k - c_k) \le M'$ for every $i$, then $M' \ge v - u$ ([[lem-nondegenerate-interval-is-not-null]]).

[L6] There is a bijection $J : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$ ([[thm-n-cross-n-countable]], [[def-injection-surjection-bijection]]).

[L7] Finite sums: splitting, scaling, monotonicity in the terms; a finite sum of nonnegative terms indexed injectively inside a finite rectangle is at most the sum over the rectangle ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L8] $\sum_{n=0}^{\infty} 2^{-n} = 2$, every partial sum of a nonnegative series is at most its sum, and $2^{-n} \to 0$ ([[thm-geometric-series]], [[thm-nonnegative-series-bounded-partial-sums]], [[def-series]], [[lem-geometric-sequence-null]], [[def-real-limit]]).

[L9] Induction on $\mathbb{N}$; every nonempty subset of $\mathbb{N}$ has a least element; every finite list of naturals has an upper bound in $\mathbb{N}$, the order of $\mathbb{N}$ being total ([[thm-induction-principle]], [[thm-well-ordering-principle]], [[lem-nat-trichotomy]], [[def-nat-order]]).

[L10] Ordered-field arithmetic: $0 < 1$, so $2 > 0$ and $4 > 0$ and $2^{-1} > 0$; adding a constant and multiplying by a positive preserve an inequality; the order is total and transitive ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that claim 4 fails, and fix $(a_k)$, $(b_k)$ and $M$ as in [A1], so that $M < 2^{-1}$. [assume-contra, given, A1, choose]

1.2 **$S$ is compact, claim 1.** Each $S_n$ is the union of the finite list of closed sets $[e^{(n)}_j, e^{(n)}_j + \lambda_n]$, $j < N_n$, hence closed by [L2]; so $S = \bigcap_n S_n$ is closed by [L2], and $S \subseteq [0,1]$ is bounded by [L1] and [L2]; by [L3] it is compact. [L1, L2, L3]

1.3 **Separation.** For every $n$ and all $i \ne j$ below $N_n$ one has $|e^{(n)}_i - e^{(n)}_j| > \lambda_n$, by induction on $n$ ([L9]). At $n = 0$ there is nothing to prove, since $N_0 = 1$. Assume it at $n$ and let $i \ne j$ below $N_{n+1} = N_n + N_n$. If both indices are $< N_n$, or both are $\ge N_n$, the two entries are $e^{(n)}_{i'}$ and $e^{(n)}_{j'}$ with $i' \ne j'$, possibly both shifted by the same $g_n$, so the difference has absolute value $> \lambda_n > \lambda_{n+1}$ by [L1]. Otherwise the entries are $e^{(n)}_{i'}$ and $e^{(n)}_{j'} + g_n$; if $i' = j'$ the difference is $g_n > \lambda_{n+1}$ by [L1]; if $e^{(n)}_{i'} - e^{(n)}_{j'} > \lambda_n$ then $e^{(n)}_{i'} - e^{(n)}_{j'} - g_n > \lambda_n - g_n = \lambda_{n+1}$, and if $e^{(n)}_{j'} - e^{(n)}_{i'} > \lambda_n$ then $e^{(n)}_{j'} + g_n - e^{(n)}_{i'} > \lambda_n > \lambda_{n+1}$, in each case by [L1] and [L10]. Consequently the pieces $[e^{(n)}_j, e^{(n)}_j + \lambda_n]$, $j < N_n$, are pairwise disjoint. [L1, L9, L10]

1.4 **Every endpoint lies in $S$.** Fix $n$ and $j < N_n$. For $m \le n$ one has $e^{(n)}_j$ and $e^{(n)}_j + \lambda_n$ in $S_n \subseteq S_m$ by [L1]. For $m \ge n$, an induction on $m$ ([L9]) gives indices $j', j'' < N_m$ with $e^{(m)}_{j'} = e^{(n)}_j$ and $e^{(m)}_{j''} + \lambda_m = e^{(n)}_j + \lambda_n$: at $m = n$ take $j' = j'' = j$; and if they exist at $m$, then $e^{(m+1)}_{j'} = e^{(m)}_{j'}$ works for the left endpoint, while $e^{(m+1)}_{N_m + j''} + \lambda_{m+1} = e^{(m)}_{j''} + g_m + \lambda_{m+1} = e^{(m)}_{j''} + \lambda_m$ works for the right one, by [L1]. So both points lie in every $S_m$, hence in $S$. [L1, L9]

1.5 **The complement decomposes over the stages.** $[0,1] \setminus S = \bigcup_{n}(S_n \setminus S_{n+1})$. The inclusion $\supseteq$ holds because $S_n \subseteq S_0 = [0,1]$ and $S \subseteq S_{n+1}$ by [L1]. For $\subseteq$, let $x \in [0,1] \setminus S$; then $x \in S_0$ and, $S$ being $\bigcap_m S_m$, the set of $m$ with $x \notin S_m$ is nonempty, so by [L9] it has a least element $m_0$, and $m_0 \ge 1$ since $x \in S_0$. Put $n := m_0 - 1$; then $x \in S_n$ by minimality and $x \notin S_{n+1}$. [L1, L9]

2.1 **The removed pieces.** Fix $n$ and $j < N_n$. By [L1] the pieces $[e^{(n)}_j, e^{(n)}_j + \lambda_{n+1}]$ and $[e^{(n)}_j + g_n,\ e^{(n)}_j + \lambda_n]$ both occur among the pieces of $S_{n+1}$, so a point $x$ of $[e^{(n)}_j, e^{(n)}_j + \lambda_n]$ outside $S_{n+1}$ satisfies $\lambda_{n+1} < x - e^{(n)}_j < g_n$, that is $x \in M^{(n)}_j$; hence $S_n \setminus S_{n+1} \subseteq \bigcup_{j<N_n} M^{(n)}_j$. Conversely $M^{(n)}_j \cap S_{n+1} = \varnothing$: a piece of $S_{n+1}$ coming from $i \ne j$ lies in $[e^{(n)}_i, e^{(n)}_i + \lambda_n]$, which is disjoint from $[e^{(n)}_j, e^{(n)}_j + \lambda_n] \supseteq M^{(n)}_j$ by step 1.3, while the two pieces coming from $j$ itself are disjoint from the open interval $M^{(n)}_j$ by [L10]. Finally each $M^{(n)}_j$ has length $g_n - \lambda_{n+1} = \lambda_n - 2\lambda_{n+1} = 4^{-n-1}$, so $\sum_{j<N_n} 4^{-n-1} = 2^{n} \cdot 4^{-n-1} = 4^{-1} \cdot 2^{-n}$ by [L1]. [step 1.3, L1, L10]

2.2 **$S$ is perfect, claim 2.** $S$ is closed by step 1.2. Let $x \in S$ and let the real $\varepsilon > 0$ be given; by [L1] and [L8] fix $n$ with $\lambda_n \le 2^{-n} < \varepsilon$. Since $x \in S_n$ there is $j < N_n$ with $x \in [e^{(n)}_j, e^{(n)}_j + \lambda_n]$; the two endpoints of that piece lie in $S$ by step 1.4, are distinct because $\lambda_n > 0$, and each is within $\lambda_n < \varepsilon$ of $x$ by [L10]. So at least one of them is a point of $S \cap N_\varepsilon(x)$ different from $x$, and $x$ is not isolated in $S$; by [L4], $S$ is perfect. [step 1.2, step 1.4, L1, L4, L8, L10]

3.1 **$S$ is nowhere dense, claim 3.** $S$ is closed by step 1.2, so it equals its closure, and by [L4] it suffices that its interior be empty. Suppose $N_\varepsilon(x) \subseteq S$ for some $x$ and some real $\varepsilon > 0$; fix $n$ with $\lambda_n \le 2^{-n} < \varepsilon$ by [L1] and [L8], and $j < N_n$ with $x \in [e^{(n)}_j, e^{(n)}_j + \lambda_n]$. The point $w := e^{(n)}_j + (\lambda_{n+1} + g_n) \cdot 2^{-1}$ lies in $M^{(n)}_j$, since $\lambda_{n+1} < g_n$, and hence in $[e^{(n)}_j, e^{(n)}_j + \lambda_n]$, so $|w - x| \le \lambda_n < \varepsilon$ and $w \in N_\varepsilon(x) \subseteq S \subseteq S_{n+1}$; but $M^{(n)}_j \cap S_{n+1} = \varnothing$ by step 2.1, which is impossible. So no neighbourhood is contained in $S$ and $S$ is nowhere dense. [step 1.2, step 2.1, L1, L4, L8, L10]

3.2 **A cover of $[0,1]$ built from [A1] and the removed pieces.** By [L6] fix a bijection $J$ and define sequences $(c_i)$, $(d_i)$ as follows: for $i \in \mathbb{N}$ write $(m, t) := J^{-1}(i)$; if $m = 0$ put $(c_i, d_i) := (a_t, b_t)$; if $m \ge 1$ and $t < N_{m-1}$ put $(c_i,d_i) := \big(e^{(m-1)}_t + \lambda_{m}, \ e^{(m-1)}_t + g_{m-1}\big)$; and otherwise put $(c_i,d_i) := (0,0)$. Then $c_i \le d_i$ for every $i$ by [L1], and $\bigcup_i [c_i,d_i]$ contains $S$ by [A1] and contains $[0,1] \setminus S$ by steps 1.5 and 2.1, hence contains $[0,1]$. For a partial sum, fix $i_0$; the pairs $J^{-1}(i)$ with $i < i_0$ are distinct, so by [L9] there is $P$ bounding both of their coordinates, and since all the terms are nonnegative [L7] gives $\sum_{i<i_0}(d_i - c_i) \le \sum_{t \le P}(b_t - a_t) + \sum_{n \le P}\sum_{t < N_n} 4^{-n-1} \le M + \sum_{n\le P} 4^{-1}2^{-n} \le M + 4^{-1} \cdot 2 = M + 2^{-1}$, using [A1], step 2.1, [L7] and [L8]. [step 1.1, step 1.5, step 2.1, A1, L1, L6, L7, L8, L9]

4.1 By [L5] applied to $[0,1]$ and the cover of step 3.2, $M + 2^{-1} \ge 1 - 0 = 1$, so $M \ge 2^{-1}$, contradicting step 1.1. Claim 4 therefore holds; and $S$ is not null, since nullity would give, at $\varepsilon := 4^{-1}$, a cover of $S$ with all partial total lengths $\le 4^{-1} < 2^{-1}$, which claim 4 forbids. With steps 1.2, 2.2 and 3.1 all four claims are proved. [step 1.1, step 1.2, step 2.2, step 3.1, step 3.2, L5, L10, discharge-contradiction] ∎

## Remarks

- **Nowhere dense and null are independent.** $S$ is nowhere dense and not null;
  $\mathbb{Q}$ is null and not nowhere dense ([[lem-countable-sets-are-null]],
  [[lem-q-and-irrationals-dense-r]]). The two false statements recording this are
  [[fs-nowhere-dense-implies-measure-zero]] and
  [[fs-measure-zero-implies-nowhere-dense]], with witnesses
  [[cex-nowhere-dense-with-positive-measure]] and
  [[cex-dense-set-of-measure-zero]].

- **Where the construction differs from the Cantor set, and where it does not.**
  Steps 1.2, 1.3, 1.4, 2.2 and 3.1 use only that the pieces shrink to $0$ in
  length, double in number and stay separated, which the middle-thirds
  construction also satisfies; so $S$ and $C$ are indistinguishable at that level.
  The difference is entirely in step 2.1: the removed length at stage $n$ is
  $4^{-1}2^{-n}$ here and $2^{n}3^{-n-1}$ there, and only the first is summable to
  less than $1$. The removed lengths are added up in
  [[ex-fat-cantor-measure-computed]], where they total exactly $2^{-1}$.

- **Compactness is not what is used against nullity.** The proof of claim 4 never
  extracts a finite subcover: it combines the given countable cover of $S$ with
  the countably many removed pieces and appeals to
  [[lem-nondegenerate-interval-is-not-null]], whose own proof is where the
  compactness of $[0,1]$ is spent. Passing through
  [[thm-compact-null-is-content-zero]] would work too and would be longer.
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

