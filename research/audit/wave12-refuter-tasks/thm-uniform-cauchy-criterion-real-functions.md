## Selection reasons

- high risk (7): 5 cited facts; biconditional / both-direction claim; analytic limiting/completeness language

## Target item — `thm-uniform-cauchy-criterion-real-functions`

Normalized current SHA-256: `9badc4993f21da2dfdbf10f013b6d0918c337289f4e823b4b3325ee2aa9b5720`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: thm-uniform-cauchy-criterion-real-functions
kind: theorem
title: "A sequence of real-valued functions converges uniformly if and only if it is uniformly Cauchy"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pointwise-uniform-and-uniformly-cauchy-convergence, thm-cauchy-criterion-via-lub, lem-of-triangle-inequality]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Stanford Math 63CM, Additional Lecture Notes, Theorem 1.12"
      url: "https://math.stanford.edu/~ryzhik/STANFORD/STANF63CM-20/lecture-notes-63cm-20-prelim.pdf"
    - title: "W. Trench, Introduction to Real Analysis"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a set and let $f_k:X\to\mathbb{R}$ for every
$k\in\mathbb{N}$. Then $(f_k)$ converges uniformly on $X$ to some
$f:X\to\mathbb{R}$ if and only if $(f_k)$ is uniformly Cauchy on $X$
([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

## Facts & Assumptions

**Given:** A set $X$ and a sequence of functions $f_k:X\to\mathbb{R}$.

[A1] Uniform convergence to $f$ means that for every real $\varepsilon>0$ there is $N$ such that $|f_k(x)-f(x)|<\varepsilon$ for every $k\ge N$ and every $x\in X$ ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

[A2] Uniform Cauchyness means that for every real $\varepsilon>0$ there is $N$ such that $|f_m(x)-f_n(x)|<\varepsilon$ for every $m,n\ge N$ and every $x\in X$ ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

[A3] Pointwise convergence as defined through real sequences can equivalently be tested with every positive real error ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

[L1] For reals $u,v$, $|u+v|\le |u|+|v|$ ([[lem-of-triangle-inequality]]).

[L2] Every Cauchy sequence of reals converges to a real ([[thm-cauchy-criterion-via-lub]]).

## Proof

**Proof technique:** direct.

1.1 Suppose first that $f_k\to f$ uniformly on $X$, and let $\varepsilon>0$ be real. By [A1] choose $N$ with $|f_j(x)-f(x)|<\varepsilon/2$ for every $j\ge N$ and $x\in X$. Thus, for $m,n\ge N$ and $x\in X$, $|f_m(x)-f_n(x)|\le |f_m(x)-f(x)|+|f(x)-f_n(x)|<\varepsilon$. Since $\varepsilon$ was arbitrary, $(f_k)$ is uniformly Cauchy. [A1, A2, L1, choose, algebra]

1.2 Conversely, suppose that $(f_k)$ is uniformly Cauchy on $X$. For each $x\in X$, [A2] makes $(f_k(x))$ a Cauchy real sequence; by [L2] it has a real limit $f(x)$. These values define a function $f:X\to\mathbb{R}$. [A2, L2, construct]

1.3 Under this converse assumption, let $\varepsilon>0$ be real and choose $N$ such that $|f_m(x)-f_n(x)|<\varepsilon/2$ for every $m,n\ge N$ and every $x\in X$. [A2, choose]

2.1 Fix $k\ge N$ and $x\in X$. Pointwise convergence at $x$ gives a threshold $M$ such that $|f_n(x)-f(x)|<\varepsilon/2$ for $n\ge M$. Choose $n\ge N,M$. Then $|f_k(x)-f(x)|\le |f_k(x)-f_n(x)|+|f_n(x)-f(x)|<\varepsilon$. [step 1.2, step 1.3, A3, L1, choose]

3.1 The index $N$ in step 1.3 is independent of $k$ and $x$, so step 2.1 proves $f_k\to f$ uniformly. Together with step 1.1 this proves both directions. [step 1.1, step 2.1, A1] ∎
````

## Wave 12 provenance row

```json
{
  "id": "thm-uniform-cauchy-criterion-real-functions",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
  ],
  "rationale": "A sequence of real-valued functions converges uniformly if and only if it is uniformly Cauchy: The open textbooks give the corresponding uniform-convergence definition, permanence/interchange theorem, completeness result, or standard counterexample; the item reindexes sequences at zero and spells out the library’s metric, Riemann-integral, endpoint, and dependency conventions. The supplied numbered argument was audited as a local proof rather than a transcription or identifiable adaptation of a source proof.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

## Exact-current proof contract

```json
{
  "citations": [
    {
      "fact": "A1",
      "source": "def-pointwise-uniform-and-uniformly-cauchy-convergence",
      "source_section": "Definition",
      "quote": "Let $X$ be a set and, for each $k \\in \\mathbb{N}$, let $f_k : X \\to \\mathbb{R}$ be a real-valued function ([[def-function-space]]). Let $f : X \\to \\mathbb{R}$. The sequence $(f_k)$ **converges pointwise** to $f$ on $X$ when, for every $x \\in X$, the real sequence $(f_k(x))$ converges to $f(x)$ ([[def-real-limit]]). Thus the index after which $|f_k(x)-f(x)|<\\varepsilon$ may depend on both $\\varepsilon$ and $x$. The sequence $(f_k)$ **converges uniformly** to $f$ on $X$ when $$(\\forall \\varepsilon>0)(\\exists N\\in\\mathbb{N})(\\forall k\\ge N)(\\forall x\\in X)\\quad |f_k(x)-f(x)|<\\varepsilon,$$ where $\\varepsilon$ ranges over the positive reals. Here one index $N$ serves every point of $X$. The sequence $(f_k)$ is **uniformly Cauchy** on $X$ when $$(\\forall \\varepsilon>0)(\\exists N\\in\\mathbb{N})(\\forall m,n\\ge N)(\\forall x\\in X)\\quad |f_m(x)-f_n(x)|<\\varepsilon.$$ For each of the three notions above, restricting the error to positive rationals gives an equivalent condition. The real-error condition immediately implies the rational-error condition. Conversely, given a real $\\eta>0$, choose $n\\ge1$ with $1/n<\\eta$ by [[cor-archimedean-reciprocal]]; the condition for the positive rational $1/n$ implies the condition for $\\eta$. The real-error form is used because it makes the uniform quantifiers transparent.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "3.1"
      ]
    },
    {
      "fact": "A2",
      "source": "def-pointwise-uniform-and-uniformly-cauchy-convergence",
      "source_section": "Definition",
      "quote": "Let $X$ be a set and, for each $k \\in \\mathbb{N}$, let $f_k : X \\to \\mathbb{R}$ be a real-valued function ([[def-function-space]]). Let $f : X \\to \\mathbb{R}$. The sequence $(f_k)$ **converges pointwise** to $f$ on $X$ when, for every $x \\in X$, the real sequence $(f_k(x))$ converges to $f(x)$ ([[def-real-limit]]). Thus the index after which $|f_k(x)-f(x)|<\\varepsilon$ may depend on both $\\varepsilon$ and $x$. The sequence $(f_k)$ **converges uniformly** to $f$ on $X$ when $$(\\forall \\varepsilon>0)(\\exists N\\in\\mathbb{N})(\\forall k\\ge N)(\\forall x\\in X)\\quad |f_k(x)-f(x)|<\\varepsilon,$$ where $\\varepsilon$ ranges over the positive reals. Here one index $N$ serves every point of $X$. The sequence $(f_k)$ is **uniformly Cauchy** on $X$ when $$(\\forall \\varepsilon>0)(\\exists N\\in\\mathbb{N})(\\forall m,n\\ge N)(\\forall x\\in X)\\quad |f_m(x)-f_n(x)|<\\varepsilon.$$ For each of the three notions above, restricting the error to positive rationals gives an equivalent condition. The real-error condition immediately implies the rational-error condition. Conversely, given a real $\\eta>0$, choose $n\\ge1$ with $1/n<\\eta$ by [[cor-archimedean-reciprocal]]; the condition for the positive rational $1/n$ implies the condition for $\\eta$. The real-error form is used because it makes the uniform quantifiers transparent.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2",
        "1.3"
      ]
    },
    {
      "fact": "A3",
      "source": "def-pointwise-uniform-and-uniformly-cauchy-convergence",
      "source_section": "Definition",
      "quote": "Let $X$ be a set and, for each $k \\in \\mathbb{N}$, let $f_k : X \\to \\mathbb{R}$ be a real-valued function ([[def-function-space]]). Let $f : X \\to \\mathbb{R}$. The sequence $(f_k)$ **converges pointwise** to $f$ on $X$ when, for every $x \\in X$, the real sequence $(f_k(x))$ converges to $f(x)$ ([[def-real-limit]]). Thus the index after which $|f_k(x)-f(x)|<\\varepsilon$ may depend on both $\\varepsilon$ and $x$. The sequence $(f_k)$ **converges uniformly** to $f$ on $X$ when $$(\\forall \\varepsilon>0)(\\exists N\\in\\mathbb{N})(\\forall k\\ge N)(\\forall x\\in X)\\quad |f_k(x)-f(x)|<\\varepsilon,$$ where $\\varepsilon$ ranges over the positive reals. Here one index $N$ serves every point of $X$. The sequence $(f_k)$ is **uniformly Cauchy** on $X$ when $$(\\forall \\varepsilon>0)(\\exists N\\in\\mathbb{N})(\\forall m,n\\ge N)(\\forall x\\in X)\\quad |f_m(x)-f_n(x)|<\\varepsilon.$$ For each of the three notions above, restricting the error to positive rationals gives an equivalent condition. The real-error condition immediately implies the rational-error condition. Conversely, given a real $\\eta>0$, choose $n\\ge1$ with $1/n<\\eta$ by [[cor-archimedean-reciprocal]]; the condition for the positive rational $1/n$ implies the condition for $\\eta$. The real-error form is used because it makes the uniform quantifiers transparent.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-of-triangle-inequality",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$. Then $$|x + y| \\le |x| + |y|.$$",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-cauchy-criterion-via-lub",
      "source_section": "Statement",
      "quote": "Every Cauchy sequence of reals converges to a real ([[def-real-limit]]). More carefully, this is a statement about the *axioms*: in a complete ordered field, that is in an ordered field with the least-upper-bound property ([[def-complete-ordered-field]]), every Cauchy sequence converges. The proof below uses nothing about $\\mathbb{R}$ except that property, through [[thm-bolzano-weierstrass]]. **This library already knows the conclusion by a different route.** It is proved on the Cauchy-construction page, where $\\mathbb{R}$ is built out of Cauchy sequences of rationals and completeness is read off the construction. That proof is about a particular construction; this one is about the axioms, and it is what tells us the statement holds in *any* complete ordered field, however it was obtained.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Suppose first that $f_k\\to f$ uniformly on $X$, and let $\\varepsilon>0$ be real. By [A1] choose $N$ with $|f_j(x)-f(x)|<\\varepsilon/2$ for every $j\\ge N$ and $x\\in X$. Thus, for $m,n\\ge N$ and $x\\in X$, $|f_m(x)-f_n(x)|\\le |f_m(x)-f(x)|+|f(x)-f_n(x)|<\\varepsilon$. Since $\\varepsilon$ was arbitrary, $(f_k)$ is uniformly Cauchy.",
      "step": "1.1",
      "inputs": [
        "A1",
        "A2",
        "L1",
        "choose",
        "algebra"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "Conversely, suppose that $(f_k)$ is uniformly Cauchy on $X$. For each $x\\in X$, [A2] makes $(f_k(x))$ a Cauchy real sequence; by [L2] it has a real limit $f(x)$. These values define a function $f:X\\to\\mathbb{R}$.",
      "step": "1.2",
      "inputs": [
        "A2",
        "L2",
        "construct"
      ]
    },
    {
      "id": "step-1.3",
      "claim": "Under this converse assumption, let $\\varepsilon>0$ be real and choose $N$ such that $|f_m(x)-f_n(x)|<\\varepsilon/2$ for every $m,n\\ge N$ and every $x\\in X$.",
      "step": "1.3",
      "inputs": [
        "A2",
        "choose"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Fix $k\\ge N$ and $x\\in X$. Pointwise convergence at $x$ gives a threshold $M$ such that $|f_n(x)-f(x)|<\\varepsilon/2$ for $n\\ge M$. Choose $n\\ge N,M$. Then $|f_k(x)-f(x)|\\le |f_k(x)-f_n(x)|+|f_n(x)-f(x)|<\\varepsilon$.",
      "step": "2.1",
      "inputs": [
        "step 1.2",
        "step 1.3",
        "A3",
        "L1",
        "choose"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "The index $N$ in step 1.3 is independent of $k$ and $x$, so step 2.1 proves $f_k\\to f$ uniformly. Together with step 1.1 this proves both directions.",
      "step": "3.1",
      "inputs": [
        "step 1.1",
        "step 2.1",
        "A1",
        "1.3"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "Statement: The quantified set X may be empty; all pointwise assertions are vacuous there, and in the Cauchy criterion the constructed limit is the unique empty function. Let $X$ be a set and let $f_k:X\\to\\mathbb{R}$ for every $k\\in\\mathbb{N}$. Then $(f_k)$ converges uniformly on $X$ to some $f:X\\to\\mathbb{R}$ if and only if $(f_k)$ is uniformly Cau"
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "thm-uniform-cauchy-criterion-real-functions: zero is not a distinguished parameter case in the claim; ordinary zero-valued functions, vectors, or bounds remain covered by its universal hypotheses."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "thm-uniform-cauchy-criterion-real-functions: there is no cardinal, dimension, or exponent parameter with a separate value-one branch in this claim."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "thm-uniform-cauchy-criterion-real-functions: the Statement has no collapse, coincidence, constant-family, or equality-case branch beyond cases already included by its universal estimates."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "thm-uniform-cauchy-criterion-real-functions: no closed-interval endpoint, exponent endpoint, or finite-index endpoint affects the assertion."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "thm-uniform-cauchy-criterion-real-functions: the proof makes no choice from a family whose nonemptiness is not already supplied; any witness used is explicit or uniquely determined."
    },
    {
      "case": "iff-forward",
      "status": "checked",
      "evidence": "step 1.1: uniform convergence and the triangle inequality give a uniform Cauchy threshold."
    },
    {
      "case": "iff-reverse",
      "status": "checked",
      "evidence": "steps 1.2, 1.3, 2.1, and 3.1: pointwise completeness constructs the limit and the uniform Cauchy threshold makes convergence uniform."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "pending",
    "reviewer": "Alpha",
    "notes": "Audit-Beta captured the A2 contract. Alpha assigns the independent proof-refuter route at A5/A6."
  }
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "thm-uniform-cauchy-criterion-real-functions",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "def-pointwise-uniform-and-uniformly-cauchy-convergence",
    "declared_target": "def-pointwise-uniform-and-uniformly-cauchy-convergence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-convergence-of-functions",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-uniform-cauchy-criterion-real-functions",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "thm-cauchy-criterion-via-lub",
    "declared_target": "thm-cauchy-criterion-via-lub",
    "target_statement_provenance": "literature-derived",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-uniform-cauchy-criterion-real-functions",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "lem-of-triangle-inequality",
    "declared_target": "lem-of-triangle-inequality",
    "target_statement_provenance": "literature-derived",
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

## Full exact-current text of every cited or declared item (3)

### `def-pointwise-uniform-and-uniformly-cauchy-convergence`

````markdown
---
id: def-pointwise-uniform-and-uniformly-cauchy-convergence
kind: definition
title: "Pointwise convergence, uniform convergence, and the uniformly Cauchy condition for sequences of real-valued functions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function-space, def-real-limit, cor-archimedean-reciprocal]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
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

Let $X$ be a set and, for each $k \in \mathbb{N}$, let
$f_k : X \to \mathbb{R}$ be a real-valued function
([[def-function-space]]). Let $f : X \to \mathbb{R}$.

The sequence $(f_k)$ **converges pointwise** to $f$ on $X$ when, for every
$x \in X$, the real sequence $(f_k(x))$ converges to $f(x)$
([[def-real-limit]]). Thus the index after which
$|f_k(x)-f(x)|<\varepsilon$ may depend on both $\varepsilon$ and $x$.

The sequence $(f_k)$ **converges uniformly** to $f$ on $X$ when

$$(\forall \varepsilon>0)(\exists N\in\mathbb{N})(\forall k\ge N)(\forall x\in X)\quad |f_k(x)-f(x)|<\varepsilon,$$

where $\varepsilon$ ranges over the positive reals. Here one index $N$ serves
every point of $X$.

The sequence $(f_k)$ is **uniformly Cauchy** on $X$ when

$$(\forall \varepsilon>0)(\exists N\in\mathbb{N})(\forall m,n\ge N)(\forall x\in X)\quad |f_m(x)-f_n(x)|<\varepsilon.$$

For each of the three notions above, restricting the error to positive
rationals gives an equivalent condition. The real-error condition immediately
implies the rational-error condition. Conversely, given a real $\eta>0$,
choose $n\ge1$ with $1/n<\eta$ by
[[cor-archimedean-reciprocal]]; the condition for the positive rational
$1/n$ implies the condition for $\eta$. The real-error form is used because
it makes the uniform quantifiers transparent.
````

### `lem-of-triangle-inequality`

````markdown
---
id: lem-of-triangle-inequality
kind: lemma
title: "The triangle inequality"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-of-abs-value, lem-of-add-order, def-ordered-field]
aliases: []
landmark: true
short: "Triangle ineq."
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Purdue University analysis notes: Ordered fields and absolute value"
      url: "https://www.math.purdue.edu/~gcavigli/Swanson.pdf"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \in F$. Then

$$|x + y| \le |x| + |y|.$$

## Facts & Assumptions

**Given:** An ordered field $F$ and elements $x, y \in F$.

[L1] For every $u \in F$, $-|u| \le u \le |u|$, and $|u|$ equals $u$ or $-u$ ([[lem-of-abs-value]]).

[L2] Order compatible with addition: if $a \le b$ and $c \le d$, then $a + c \le b + d$. [[lem-of-add-order]] states the STRICT forms and only those ($a < b \Rightarrow a + c < b + c$, and $a < b$ with $c < d$ giving $a + c < b + d$); the nonstrict form used here is those two together with the cases $a = b$ and $c = d$, settled by trichotomy, the order being total ([[def-ordered-field]]). Explicitly: if $a < b$ and $c < d$ the second strict form applies; if $a < b$ and $c = d$ the first gives $a + c < b + c = b + d$; if $a = b$ and $c < d$ the first gives $a + c < a + d = b + d$; and if $a = b$ and $c = d$ the two sides are equal.

[L3] Field and order arithmetic: $-(a + b) = -a + (-b)$, and $a \le b \iff -b \le -a$ ([[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $-|x| \le x \le |x|$ and $-|y| \le y \le |y|$. [L1]

2.1 Adding the two chains of [step 1.1] with [L2] and using $-(|x| + |y|) = -|x| + (-|y|)$ from [L3] gives $-(|x| + |y|) \le x + y \le |x| + |y|$. [step 1.1, L2, L3]

3.1 By [L1] the value $|x + y|$ equals $x + y$ or $-(x + y)$; both $x + y \le |x| + |y|$ and $-(x + y) \le |x| + |y|$ hold by [step 2.1] and [L3] (the latter from $-(|x| + |y|) \le x + y$), so $|x + y| \le |x| + |y|$. [step 2.1, L1, L3] ∎
````

### `thm-cauchy-criterion-via-lub`

````markdown
---
id: thm-cauchy-criterion-via-lub
kind: theorem
title: "The Cauchy criterion from the least-upper-bound property: in a complete ordered field every Cauchy sequence converges"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-cauchy-sequence-bounded, thm-bolzano-weierstrass, lem-cauchy-with-convergent-subsequence, def-real-limit, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: true
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
    - title: "Completeness of the real numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Completeness_of_the_real_numbers"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Thm 3.11(c))"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4 (Thm 6.4.18)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §2.4 (Thm 2.4.5)"
      url: "https://www.jirka.org/ra/"
---

## Statement

Every Cauchy sequence of reals converges to a real ([[def-real-limit]]).

More carefully, this is a statement about the *axioms*: in a complete ordered
field, that is in an ordered field with the least-upper-bound property
([[def-complete-ordered-field]]), every Cauchy sequence converges. The proof
below uses nothing about $\mathbb{R}$ except that property, through
[[thm-bolzano-weierstrass]].

**This library already knows the conclusion by a different route.**
It is proved on the Cauchy-construction page, where
$\mathbb{R}$ is built out of Cauchy sequences of rationals and completeness is
read off the construction. That proof is about a particular construction; this
one is about the axioms, and it is what tells us the statement holds in *any*
complete ordered field, however it was obtained.

## Facts & Assumptions

**Given:** A Cauchy sequence $(x_k)$ of reals, $\mathbb{R}$ being a complete ordered field.

[L1] Every Cauchy sequence of reals is bounded ([[lem-cauchy-sequence-bounded]]).

[L2] Bolzano-Weierstrass: every bounded sequence of reals has a convergent subsequence, that is a strictly increasing $n$ and a real $L$ with $x_{n_j} \to L$ ([[thm-bolzano-weierstrass]]).

[L3] A Cauchy sequence with a subsequence converging to $L$ converges to $L$ ([[lem-cauchy-with-convergent-subsequence]]).

[L4] Convergence of a sequence of reals to a real ([[def-real-limit]]).

[L5] $\mathbb{R}$ is a complete ordered field, and this is the only property of it used, through [L2] ([[def-complete-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 The Cauchy sequence $(x_k)$ is bounded. [given, L1]

2.1 Being bounded, $(x_k)$ has a convergent subsequence: fix a strictly increasing $n : \mathbb{N} \to \mathbb{N}$ and a real $L$ with $x_{n_j} \to L$. [step 1.1, L2, L5, choose]

3.1 The sequence $(x_k)$ is Cauchy and has a subsequence converging to $L$, so it converges to $L$. [step 2.1, L3]

4.1 An arbitrary Cauchy sequence of reals has therefore been shown to converge to a real, so every Cauchy sequence of reals converges, and this was derived from the least-upper-bound property alone. [step 3.1, L4, L5] ∎

## Remarks

- **The three steps are exactly the three lemmas, and each is sharp.** A Cauchy
  sequence is bounded ([[lem-cauchy-sequence-bounded]]); a bounded sequence has a
  convergent subsequence ([[thm-bolzano-weierstrass]]); a Cauchy sequence with a
  convergent subsequence converges ([[lem-cauchy-with-convergent-subsequence]]).
  Dropping the Cauchy hypothesis at the last step breaks the chain, since a
  bounded sequence need not converge ([[fs-bounded-implies-convergent]]).

- **Where completeness enters.** Only in the middle step, and there only through
  [[cor-monotone-converges-iff-bounded]] inside the proof of
  Bolzano-Weierstrass. The first and third steps hold in any ordered field. That
  localisation is the reason for the page order.

- **The converse needs an extra hypothesis.** Cauchy completeness alone does not
  imply the least-upper-bound property; it does so together with the Archimedean
  property, and there are Cauchy complete non-Archimedean ordered fields that are
  not Dedekind complete. This library does not prove that here; the equivalences
  between the forms of completeness are the subject of a later page, and
  [[rem-completeness-routes]] states precisely what is and is not established
  now.

- **The name.** "Cauchy criterion" is the useful reading: the theorem lets one
  prove convergence without producing the limit, which is what makes it the
  standard tool for series and for uniform convergence later on.

- The construction-side proof of the same sentence is
  [[thm-reals-cauchy-complete]], and [[rem-completeness-routes]] sets out why
  this library keeps both. Neither proof uses the other, and nothing above
  depends on that item.
````

