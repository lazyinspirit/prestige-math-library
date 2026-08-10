## Selection reasons

- critical risk (8): 4 cited facts; 7 numbered proof steps; biconditional / both-direction claim; analytic limiting/completeness language

## Target item — `cor-uniform-cauchy-criterion-function-series`

Normalized current SHA-256: `7955c3b2daa48dec91349ba63b0559daffe4ea8a8d39c4b8019d9103d6eea507`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: cor-uniform-cauchy-criterion-function-series
kind: corollary
title: "A series of real-valued functions converges uniformly if and only if its tails are uniformly small"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-series-of-real-functions, thm-uniform-cauchy-criterion-real-functions, lem-of-abs-value]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Mathematics LibreTexts, Sequences and Series of Functions"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/04%253A_Function_Limits_and_Continuity/4.12%253A_Sequences_and_Series_of_Functions"
    - title: "W. Trench, Introduction to Real Analysis"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a set and let $f_k:X\to\mathbb{R}$. The function series
$\sum f_k$ converges uniformly on $X$ if and only if, for every real
$\varepsilon>0$, there is $N\in\mathbb{N}$ such that

$$\left|\sum_{k=m+1}^{n}f_k(x)\right|<\varepsilon$$

for every $n>m\ge N$ and every $x\in X$.

## Facts & Assumptions

**Given:** A set $X$, functions $f_k:X\to\mathbb{R}$, and partial-sum functions $S_r(x)=\sum_{k<r}f_k(x)$.

[L1] The series $\sum f_k$ converges uniformly exactly when its partial-sum sequence $(S_r)$ converges uniformly ([[def-series-of-real-functions]]).

[L2] A sequence of real-valued functions converges uniformly exactly when it is uniformly Cauchy ([[thm-uniform-cauchy-criterion-real-functions]]).

[L3] For $n>m$, $\sum_{k=m+1}^{n}f_k(x)=S_{n+1}(x)-S_{m+1}(x)$, and $|-u|=|u|$ for every real $u$ ([[def-series-of-real-functions]], [[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 Suppose first that $\sum f_k$ converges uniformly, and let $\varepsilon>0$ be real. [L1]

1.2 Conversely, suppose the displayed tail condition holds, and fix a real $\varepsilon>0$ and a corresponding index $N$. [given]

2.1 By [L1] and [L2], choose $K$ such that $|S_p(x)-S_q(x)|<\varepsilon$ for every $p,q\ge K$ and every $x\in X$. [step 1.1, L1, L2, choose]

2.2 Put $K:=N+1$. If $p,q\ge K$ and $x\in X$, then the difference is $0$ when $p=q$; if $p>q$, set $m=q-1\ge N$ and $n=p-1>m$, so the tail condition and [L3] give $|S_p(x)-S_q(x)|<\varepsilon$; the case $q>p$ follows by symmetry of absolute value. [step 1.2, L3, algebra]

3.1 For $n>m\ge K$ and $x\in X$, the indices $n+1,m+1$ are at least $K$, so [L3] and step 2.1 give $\left|\sum_{k=m+1}^{n}f_k(x)\right|<\varepsilon$. [step 2.1, L3]

3.2 Thus $(S_r)$ is uniformly Cauchy, hence converges uniformly by [L2], and therefore $\sum f_k$ converges uniformly by [L1]. [step 2.2, L1, L2]

4.1 Steps 3.1 and 3.2 prove the two implications, hence the equivalence. [step 3.1, step 3.2] ∎
````

## Wave 12 provenance row

```json
{
  "id": "cor-uniform-cauchy-criterion-function-series",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
  ],
  "rationale": "A series of real-valued functions converges uniformly if and only if its tails are uniformly small: The open textbooks give the corresponding uniform-convergence definition, permanence/interchange theorem, completeness result, or standard counterexample; the item reindexes sequences at zero and spells out the library’s metric, Riemann-integral, endpoint, and dependency conventions. The supplied numbered argument was audited as a local proof rather than a transcription or identifiable adaptation of a source proof.",
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
      "source": "def-series-of-real-functions",
      "source_section": "Definition",
      "quote": "Let $X$ be a set and let $f_k:X\\to\\mathbb{R}$ for $k\\in\\mathbb{N}$. The **series of real-valued functions** $\\sum f_k$ is studied through its partial-sum functions $$S_n(x):=\\sum_{k<n}f_k(x)\\qquad(n\\in\\mathbb{N},\\ x\\in X),$$ where the sum on the right is the finite sum of [[def-series]]. Thus $S_0$ is the zero function and $S_{n+1}=S_n+f_n$ under the pointwise operations of [[def-function-space]]. The series $\\sum f_k$ **converges pointwise** to $S:X\\to\\mathbb{R}$ when $S_n\\to S$ pointwise, and it **converges uniformly** to $S$ when $S_n\\to S$ uniformly ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]). The series is **absolutely convergent at $x\\in X$** when the scalar series $\\sum |f_k(x)|$ converges. It is **absolutely pointwise convergent** when this holds for every $x\\in X$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "2.1",
        "3.2"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-uniform-cauchy-criterion-real-functions",
      "source_section": "Statement",
      "quote": "Let $X$ be a set and let $f_k:X\\to\\mathbb{R}$ for every $k\\in\\mathbb{N}$. Then $(f_k)$ converges uniformly on $X$ to some $f:X\\to\\mathbb{R}$ if and only if $(f_k)$ is uniformly Cauchy on $X$ ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1",
        "3.2"
      ]
    },
    {
      "fact": "L3",
      "source": "def-series-of-real-functions",
      "source_section": "Definition",
      "quote": "Let $X$ be a set and let $f_k:X\\to\\mathbb{R}$ for $k\\in\\mathbb{N}$. The **series of real-valued functions** $\\sum f_k$ is studied through its partial-sum functions $$S_n(x):=\\sum_{k<n}f_k(x)\\qquad(n\\in\\mathbb{N},\\ x\\in X),$$ where the sum on the right is the finite sum of [[def-series]]. Thus $S_0$ is the zero function and $S_{n+1}=S_n+f_n$ under the pointwise operations of [[def-function-space]]. The series $\\sum f_k$ **converges pointwise** to $S:X\\to\\mathbb{R}$ when $S_n\\to S$ pointwise, and it **converges uniformly** to $S$ when $S_n\\to S$ uniformly ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]). The series is **absolutely convergent at $x\\in X$** when the scalar series $\\sum |f_k(x)|$ converges. It is **absolutely pointwise convergent** when this holds for every $x\\in X$.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with $|x|$ the absolute value ([[def-abs-value]]). Then $$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$ and, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.2",
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Suppose first that $\\sum f_k$ converges uniformly, and let $\\varepsilon>0$ be real.",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "Conversely, suppose the displayed tail condition holds, and fix a real $\\varepsilon>0$ and a corresponding index $N$.",
      "step": "1.2",
      "inputs": [
        "given"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "By [L1] and [L2], choose $K$ such that $|S_p(x)-S_q(x)|<\\varepsilon$ for every $p,q\\ge K$ and every $x\\in X$.",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "L1",
        "L2",
        "choose"
      ]
    },
    {
      "id": "step-2.2",
      "claim": "Put $K:=N+1$. If $p,q\\ge K$ and $x\\in X$, then the difference is $0$ when $p=q$; if $p>q$, set $m=q-1\\ge N$ and $n=p-1>m$, so the tail condition and [L3] give $|S_p(x)-S_q(x)|<\\varepsilon$; the case $q>p$ follows by symmetry of absolute value.",
      "step": "2.2",
      "inputs": [
        "step 1.2",
        "L3",
        "algebra"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "For $n>m\\ge K$ and $x\\in X$, the indices $n+1,m+1$ are at least $K$, so [L3] and step 2.1 give $\\left|\\sum_{k=m+1}^{n}f_k(x)\\right|<\\varepsilon$.",
      "step": "3.1",
      "inputs": [
        "step 2.1",
        "L3"
      ]
    },
    {
      "id": "step-3.2",
      "claim": "Thus $(S_r)$ is uniformly Cauchy, hence converges uniformly by [L2], and therefore $\\sum f_k$ converges uniformly by [L1].",
      "step": "3.2",
      "inputs": [
        "step 2.2",
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "Steps 3.1 and 3.2 prove the two implications, hence the equivalence.",
      "step": "4.1",
      "inputs": [
        "step 3.1",
        "step 3.2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "Statement: The quantified set X may be empty; all pointwise assertions are vacuous there, and in the Cauchy criterion the constructed limit is the unique empty function. Let $X$ be a set and let $f_k:X\\to\\mathbb{R}$. The function series $\\sum f_k$ converges uniformly on $X$ if and only if, for every real $\\varepsilon>0$, there is $N\\in\\mathbb{N}$ s"
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "cor-uniform-cauchy-criterion-function-series: zero is not a distinguished parameter case in the claim; ordinary zero-valued functions, vectors, or bounds remain covered by its universal hypotheses."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "cor-uniform-cauchy-criterion-function-series: there is no cardinal, dimension, or exponent parameter with a separate value-one branch in this claim."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "step 2.2: Put $K:=N+1$. If $p,q\\ge K$ and $x\\in X$, then the difference is $0$ when $p=q$; if $p>q$, set $m=q-1\\ge N$ and $n=p-1>m$, so the tail condition and [L3] give $|S_p(x)-S_q(x)|<\\varepsilon$; the case $q>p$ follows by symmetry of absolute value."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "cor-uniform-cauchy-criterion-function-series: no closed-interval endpoint, exponent endpoint, or finite-index endpoint affects the assertion."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "cor-uniform-cauchy-criterion-function-series: the proof makes no choice from a family whose nonemptiness is not already supplied; any witness used is explicit or uniquely determined."
    },
    {
      "case": "iff-forward",
      "status": "checked",
      "evidence": "steps 1.1, 2.1, and 3.1: uniform convergence of partial sums gives the displayed uniform tail estimate."
    },
    {
      "case": "iff-reverse",
      "status": "checked",
      "evidence": "steps 1.2, 2.2, and 3.2: the tail estimate makes the partial sums uniformly Cauchy and hence uniformly convergent."
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
    "source": "cor-uniform-cauchy-criterion-function-series",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "def-series-of-real-functions",
    "declared_target": "def-series-of-real-functions",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-convergence-of-functions",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-uniform-cauchy-criterion-function-series",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "thm-uniform-cauchy-criterion-real-functions",
    "declared_target": "thm-uniform-cauchy-criterion-real-functions",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-convergence-of-functions",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-uniform-cauchy-criterion-function-series",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "lem-of-abs-value",
    "declared_target": "lem-of-abs-value",
    "target_statement_provenance": "ai-altered",
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

### `lem-of-abs-value`

````markdown
---
id: lem-of-abs-value
kind: lemma
title: "Basic properties of the absolute value"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-abs-value, def-ordered-field, lem-of-mult-neg, lem-of-sign-rules]
aliases: []
landmark: false
short: "|x| properties"
proof_strategy: cases
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
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

Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \in F$, with
$|x|$ the absolute value ([[def-abs-value]]). Then

$$|x| \ge 0; \quad |x| = 0 \iff x = 0; \quad -|x| \le x \le |x|; \quad |-x| = |x|; \quad |xy| = |x|\,|y|;$$

and, for every $c > 0$, one has $|x| < c \iff -c < x < c$.

## Facts & Assumptions

**Given:** An ordered field $F$ and elements $x, y \in F$.

[L1] Absolute value: $|u| = u$ if $u \ge 0$, and $|u| = -u$ if $u < 0$ ([[def-abs-value]]).

[L2] Ordered-field order: trichotomy holds (for each $u$ exactly one of $u > 0$, $u = 0$, $u < 0$), $a < b$ means $b - a$ is positive, and sums and products of positives are positive ([[def-ordered-field]]).

[L3] Signs in products: $(-a)b = -(ab)$ and $(-a)(-b) = ab$ ([[lem-of-mult-neg]]).

[L4] Sign rules: a product of two elements of the same sign is positive, and a product of two elements of opposite sign is negative ([[lem-of-sign-rules]]).

## Proof

**Proof technique:** cases.

1.1 Case $x > 0$: by [L1] $|x| = x > 0$, so $|x| \ge 0$ and $|x| \ne 0$; since $-x < 0$ we get $|-x| = -(-x) = x = |x|$ by [L1], and $-|x| = -x < 0 < x = |x|$, so $-|x| \le x \le |x|$. [assume-case pos, L1, L2, algebra]

1.2 Case $x = 0$: then $|x| = |0| = 0$, so $|x| \ge 0$ holds with $|x| = 0$ and $x = 0$, while $|-x| = |0| = |x|$ and $-|x| = 0 \le 0 \le 0 = |x|$. [assume-case zero, L1]

1.3 Case $x < 0$: by [L1] $|x| = -x$, and [L2] gives $-x > 0$, so $|x| > 0$ and $|x| \ne 0$; here $|-x| = -x = |x|$ by [L1], and $-|x| = -(-x) = x \le x$ while $x < 0 < -x = |x|$, so $-|x| \le x \le |x|$. [assume-case neg, L1, L2, algebra]

1.4 Case $x = 0$ or $y = 0$: then $xy = 0$, so $|xy| = 0$, and one of $|x|, |y|$ is $0$, whence $|x|\,|y| = 0 = |xy|$. [assume-case zerofactor, L1]

1.5 Case $x, y$ have the same sign (both positive or both negative): by [L4] $xy > 0$, so $|xy| = xy$, while $|x|\,|y| = xy$ by [L3] (for $x, y < 0$ this is $(-x)(-y) = xy$), hence $|xy| = |x|\,|y|$. [assume-case same, L1, L3, L4]

1.6 Case $x, y$ have opposite signs (one positive, one negative): by [L4] $xy < 0$, so $|xy| = -(xy)$, while $|x|\,|y| = -(xy)$ by [L3] (namely $x(-y)$ or $(-x)y$), hence $|xy| = |x|\,|y|$. [assume-case opposite, L1, L3, L4]

2.1 By trichotomy [L2] each $x$ lies in exactly one of the cases 1.1-1.3, and in each we verified $|x| \ge 0$, that $|x| = 0 \iff x = 0$, that $|-x| = |x|$, and that $-|x| \le x \le |x|$; hence all four hold for every $x$. [step 1.1, step 1.2, step 1.3, cases-exhaustive]

2.2 By trichotomy [L2] each pair $x, y$ lies in exactly one of the cases 1.4-1.6, and in each $|xy| = |x|\,|y|$; hence $|xy| = |x|\,|y|$ for all $x, y$. [step 1.4, step 1.5, step 1.6, cases-exhaustive]

3.1 Let $c > 0$: if $|x| < c$ then $-c < -|x| \le x \le |x| < c$ by [step 2.1] and [L2], so $-c < x < c$; conversely if $-c < x < c$ then both $x < c$ and $-x < c$, and since $|x|$ equals $x$ or $-x$ by [L1], we get $|x| < c$, so $|x| < c \iff -c < x < c$. [step 2.1, L1, L2] ∎
````

### `thm-uniform-cauchy-criterion-real-functions`

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

