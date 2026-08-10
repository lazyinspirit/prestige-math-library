## Selection reasons

- high risk (6): 6 declared dependencies; 4 cited facts; analytic limiting/completeness language

## Target item — `thm-exponential-product-limit`

Normalized current SHA-256: `c6d91007aaddc641bc9eb95b639fe69108831d6fe33f31bf634776743630b0f1`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: thm-exponential-product-limit
kind: theorem
title: "For every real $x$, $(1+x/n)^n\\to\\exp x$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-scaled-binomial-coefficients-converge, thm-binomial-theorem, lem-exponential-series-has-infinite-radius, def-real-exponential-function-and-e, def-real-limit, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "J. Lebl, Basic Analysis, Analytic Functions"
      url: "https://www.jirka.org/ra/html/sec_analfuncs.html"
    - title: "J. Lebl, Basic Analysis, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
pipeline_run: null
---

## Statement

For every real $x$,
$$\lim_{n\to\infty}\left(1+\frac{x}{\iota(n)}\right)^n=\exp(x),$$
with the sequence started after $n>|x|$, so the base is positive.

## Facts & Assumptions

**Given:** A real $x$.

[L1] The binomial theorem expands the product. For fixed $k$, [[lem-scaled-binomial-coefficients-converge]] gives both convergence of the scaled coefficient to $1/\iota(k!)$ and, whenever $n\ge\max\{1,k\}$, the bound $0\le\iota\binom nk/\iota(n)^k\le1/\iota(k!)$ ([[thm-binomial-theorem]]).

[L2] The exponential series converges absolutely ([[lem-exponential-series-has-infinite-radius]], [[def-real-exponential-function-and-e]]).

## Proof

**Proof technique:** direct.

1.1 For $n>|x|$, the binomial theorem gives $(1+x/\iota(n))^n=\sum_{k=0}^{n}\bigl(\iota\binom nk/\iota(n)^k\bigr)x^k$.  [L1]

1.2 Each fixed coefficient tends to $1/\iota(k!)$, while the uniform bound in [L1] holds for every term present in the sum.  [L1]

2.1 Given $\varepsilon>0$, choose $K$ so the absolute exponential tail after $K$ is below $\varepsilon/3$ using [L2]. The same coefficient bound controls the product tail uniformly in $n$; for the finite head $k\le K$, choose $n$ so all coefficient errors sum to below $\varepsilon/3$.  [step 1.2, L2, choose]

3.1 The triangle inequality then makes the product differ from $\sum_{k\ge0}x^k/\iota(k!)=\exp(x)$ by less than $\varepsilon$.   [step 1.1, step 2.1, given] ∎
````

## Wave 14 provenance row

```json
{
  "id": "thm-exponential-product-limit",
  "statement": "literature-derived",
  "proof": "ai-altered",
  "evidence": "exact-source",
  "urls": [
    "https://www.jirka.org/ra/html/sec_logandexp.html"
  ],
  "rationale": "Lebl Exercise 5.4.5 states e^x=lim_n(1+x/n)^n for every real x, with the same eventual-domain convention implicit in a real sequence. The library supplies a binomial head-tail proof instead of Lebl's logarithmic hint.",
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
      "source": "lem-scaled-binomial-coefficients-converge",
      "source_section": "Statement",
      "quote": "For each fixed $k\\in\\mathbb N$,\n$$\\frac{\\iota\\binom nk}{\\iota(n)^k}\\longrightarrow\\frac1{\\iota(k!)} \\qquad(n\\to\\infty),$$\nwhere the expression is read for $n\\ge\\max\\{1,k\\}$.\nFor every such $n$, one also has the uniform bound\n$$0\\le \\frac{\\iota\\binom nk}{\\iota(n)^k}\\le\\frac1{\\iota(k!)}.$$",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-binomial-theorem",
      "source_section": "Statement",
      "quote": "For all $x, y \\in \\mathbb{R}$ and every $n \\in \\mathbb{N}$,\n\n$$(x+y)^{n} \\;=\\; \\sum_{k<n+1} \\iota\\binom{n}{k}\\, x^{k}\\, y^{\\,n-k},$$\n\nwhere the powers are the integer powers of [[def-integer-power]], the sum is the\nreal finite sum of [[def-finite-sum]] over $k = 0, 1, \\dots, n$, the difference\n$n-k$ is a genuine one because $k \\le n$ throughout the range, and $\\iota$ is the\ncanonical natural of [[def-canonical-natural]].\n\n**The coefficient is $\\iota\\binom{n}{k}$ and not $\\binom{n}{k}$.** A binomial\ncoefficient is a natural number, that is a von Neumann natural, that is a set; it\nis not an element of $\\mathbb{R}$, and it enters the field through $\\iota$.\n\n**The identity is stated in $\\mathbb{R}$ and only in $\\mathbb{R}$.** The same\nproof uses nothing but commutativity, associativity, distributivity and\nnatural-number multiples of a ring element, so a commutative-ring version is\navailable wherever rings are; rings are not available at this point in the\nreading order, and the ring statement is a separate statement, to be made where\nthey are. See the Remarks below.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-exponential-series-has-infinite-radius",
      "source_section": "Statement",
      "quote": "For every real $x$, the series $\\sum_{n\\ge0}x^n/\\iota(n!)$ converges absolutely. Its power-series radius is therefore $+\\infty$.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-real-exponential-function-and-e",
      "source_section": "Definition",
      "quote": "For $x\\in\\mathbb R$, define\n$$\\exp(x):=\\sum_{n=0}^{\\infty}\\frac{x^n}{\\iota(n!)}, \\qquad e:=\\exp(1),$$\nprovided by the all-real convergence proved in [[lem-exponential-series-has-infinite-radius]]. Here $n!\\in\\mathbb N$ is the factorial of [[def-factorial-and-falling-factorial]], $\\iota(n!)$ is its nonzero real image ([[def-canonical-natural]], [[lem-of-naturals-positive]]), and powers and series are those of [[def-integer-power]] and [[def-series]].\n\nThis is a real power series centred at $0$ ([[def-real-power-series-and-radius-of-convergence]]). No logarithm, irrational power, or differential equation enters the definition.",
      "uses": [
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "For $n>|x|$, the binomial theorem gives $(1+x/\\iota(n))^n=\\sum_{k=0}^{n}\\bigl(\\iota\\binom nk/\\iota(n)^k\\bigr)x^k$.  [L1]",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "Each fixed coefficient tends to $1/\\iota(k!)$, while the uniform bound in [L1] holds for every term present in the sum.  [L1]",
      "step": "1.2",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Given $\\varepsilon>0$, choose $K$ so the absolute exponential tail after $K$ is below $\\varepsilon/3$ using [L2]. The same coefficient bound controls the product tail uniformly in $n$; for the finite head $k\\le K$, choose $n$ so all coefficient errors sum to below $\\varepsilon/3$.  [step 1.2, L2, choose]",
      "step": "2.1",
      "inputs": [
        "L2",
        "1.2",
        "choose"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "The triangle inequality then makes the product differ from $\\sum_{k\\ge0}x^k/\\iota(k!)=\\exp(x)$ by less than $\\varepsilon$.   [step 1.1, step 2.1, given] ∎",
      "step": "3.1",
      "inputs": [
        "1.1",
        "2.1",
        "given"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "No set parameter is present."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "The statement at x=0 has every term equal to 1, and steps 1.1–3.1 retain k=0."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Steps 1.1–3.1 apply at x=1 with no sign exception."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "The base-zero possibility is excluded by starting after n>|x|, as recorded in the statement."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Step 1.1 fixes the infinite-series tail and step 3.1 completes the n-to-infinity limit."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.1 chooses a finite K from absolute convergence and step 3.1 then chooses n sufficiently large."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The statement is a limit identity, not a biconditional."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The statement is a limit identity, not a biconditional."
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "thm-exponential-product-limit",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "lem-scaled-binomial-coefficients-converge",
    "declared_target": "lem-scaled-binomial-coefficients-converge",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-exponential-function",
    "targetBatch": "wave14-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-exponential-product-limit",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "thm-binomial-theorem",
    "declared_target": "thm-binomial-theorem",
    "target_statement_provenance": "ai-altered",
    "targetPage": "finite-counting-and-binomial-coefficients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-exponential-product-limit",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "lem-exponential-series-has-infinite-radius",
    "declared_target": "lem-exponential-series-has-infinite-radius",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-exponential-function",
    "targetBatch": "wave14-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-exponential-product-limit",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "def-real-exponential-function-and-e",
    "declared_target": "def-real-exponential-function-and-e",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-exponential-function",
    "targetBatch": "wave14-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-exponential-product-limit",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "def-real-limit",
    "declared_target": "def-real-limit",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-exponential-product-limit",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "lem-finite-sum-laws",
    "declared_target": "lem-finite-sum-laws",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
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

### `def-real-exponential-function-and-e`

````markdown
---
id: def-real-exponential-function-and-e
kind: definition
title: "The real exponential function and the number $e$ by a power series"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-power-series-and-radius-of-convergence, def-factorial-and-falling-factorial, def-integer-power, def-canonical-natural, lem-of-naturals-positive, def-series]
justified_by: [lem-exponential-series-has-infinite-radius]
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "J. Lebl, Basic Analysis, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
pipeline_run: null
---

## Definition

For $x\in\mathbb R$, define
$$\exp(x):=\sum_{n=0}^{\infty}\frac{x^n}{\iota(n!)}, \qquad e:=\exp(1),$$
provided by the all-real convergence proved in [[lem-exponential-series-has-infinite-radius]]. Here $n!\in\mathbb N$ is the factorial of [[def-factorial-and-falling-factorial]], $\iota(n!)$ is its nonzero real image ([[def-canonical-natural]], [[lem-of-naturals-positive]]), and powers and series are those of [[def-integer-power]] and [[def-series]].

This is a real power series centred at $0$ ([[def-real-power-series-and-radius-of-convergence]]). No logarithm, irrational power, or differential equation enters the definition.
````

### `def-real-limit`

````markdown
---
id: def-real-limit
kind: definition
title: "Limits and Cauchy sequences of reals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-numbers, def-real-order]
aliases: []
verification:
  precheck: n/a
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
pipeline_run: null
---

## Definition

A sequence $(x_k)$ of reals **converges** to $x \in \mathbb{R}$ when for
every rational $\varepsilon > 0$ there is $K$ with
$|x_k - x| < \hat\varepsilon$ for all $k \ge K$. It is **Cauchy** when for
every rational $\varepsilon > 0$ there is $K$ with
$|x_k - x_l| < \hat\varepsilon$ for all $k, l \ge K$.

## Remarks

- Quantifying over rational $\varepsilon$ loses nothing: below any real
  $\varepsilon > 0$ lies a positive rational ([[lem-rat-embeds-dense]]).
- $|\cdot|$ is the absolute value of [[def-real-order]].
````

### `lem-exponential-series-has-infinite-radius`

````markdown
---
id: lem-exponential-series-has-infinite-radius
kind: lemma
title: "The exponential series converges absolutely for every real argument"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-real-exponential-function-and-e, thm-direct-comparison-test, thm-geometric-series, lem-absolute-convergence-implies-convergence, thm-of-archimedean, def-factorial-and-falling-factorial, def-canonical-natural, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "J. Lebl, Basic Analysis, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
pipeline_run: null
---

## Statement

For every real $x$, the series $\sum_{n\ge0}x^n/\iota(n!)$ converges absolutely. Its power-series radius is therefore $+\infty$.

## Facts & Assumptions

**Given:** A real $x$.

[L1] Archimedes supplies a natural larger than any prescribed real ([[thm-of-archimedean]]).

[L2] A tail bounded termwise by a convergent geometric series converges ([[thm-direct-comparison-test]], [[thm-geometric-series]]), and absolute convergence implies convergence ([[lem-absolute-convergence-implies-convergence]]).

[L3] Factorials satisfy $(n+1)!=n!(n+1)$ and are nonzero naturals; every positive natural has a positive, hence nonzero, canonical real image ([[def-factorial-and-falling-factorial]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

## Proof

**Proof technique:** direct.

1.1 If $x=0$, the series is $1+0+0+\cdots$ and converges absolutely. Hence assume $x\ne0$. Choose $N\ge1$ with $\iota(N)>2|x|$. For $n\ge N$, the absolute terms $a_n=|x|^n/\iota(n!)$ are positive and satisfy $a_{n+1}/a_n=|x|/\iota(n+1)<1/2$.  [L1, L3, choose]

2.1 Thus $a_{N+j}\le a_N2^{-j}$ by induction, and the tail is dominated by a convergent geometric series.  [step 1.1, L2]

3.1 The zero case from step 1.1 and, when $x\ne0$, adding the finite initial segment to the convergent tail prove absolute convergence for arbitrary $x$. Hence every nonnegative radius works and the radius is $+\infty$.  [step 1.1, step 2.1, L2] ∎
````

### `lem-finite-sum-laws`

````markdown
---
id: lem-finite-sum-laws
kind: lemma
title: "Laws of finite sums and finite products"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-finite-sum, thm-induction-principle, def-ordered-field, def-field, lem-of-add-order, lem-of-sign-rules, lem-of-zero-mult, cor-of-one-positive, lem-of-q-embeds, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
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
    - title: "J. Aspnes, Summation Notation"
      url: "https://www.cs.yale.edu/homes/aspnes/pinewiki/SummationNotation.html"
    - title: "M. Fochler, Recursive sums, products, and powers"
      url: "https://people.math.binghamton.edu/mfochler/bu-mfx/bu-math-arv/math-330-arv/math-330-2019-08/html/lec-notes/bu-ln-330-m330-solns-2019-12-03.pdf"
    - title: "T. Tao, Analysis I, 3rd ed., §7.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Telescoping series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Telescoping_series"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $a, b, c : \mathbb{N} \to \mathbb{R}$ be sequences of reals, let
$\lambda \in \mathbb{R}$, and let $m, n \in \mathbb{N}$, with finite sums and
finite products as in [[def-finite-sum]]. Then:

1. **Additivity.** $\displaystyle\sum_{k<n}(a_k + b_k) = \sum_{k<n} a_k + \sum_{k<n} b_k$.
2. **Scaling.** $\displaystyle\sum_{k<n} \lambda a_k = \lambda \sum_{k<n} a_k$; in particular $\displaystyle\sum_{k<n} \lambda = n\lambda$, where $n$ denotes the canonical natural $\iota(n) \in \mathbb{R}$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).
3. **Splitting.** If $m \le n$ then $\displaystyle\sum_{k<n} a_k = \sum_{k<m} a_k + \sum_{k=m}^{n-1} a_k$, and $\displaystyle\prod_{k<n} a_k = \Big(\prod_{k<m} a_k\Big)\Big(\prod_{k=m}^{n-1} a_k\Big)$.
4. **Monotonicity.** If $a_k \le b_k$ for all $k < n$ then $\displaystyle\sum_{k<n} a_k \le \sum_{k<n} b_k$. In particular, if $a_k \ge 0$ for all $k < n$ then $\sum_{k<n} a_k \ge 0$, every single term satisfies $a_j \le \sum_{k<n} a_k$ for $j < n$, and $\sum_{k<n} a_k = 0$ forces $a_k = 0$ for every $k < n$.
5. **Telescoping.** $\displaystyle\sum_{k<n}\big(c_{k+1} - c_k\big) = c_n - c_0$.
6. **Products.** $\displaystyle\prod_{k<n}(a_k b_k) = \Big(\prod_{k<n} a_k\Big)\Big(\prod_{k<n} b_k\Big)$; if $a_k \ge 0$ for all $k < n$ then $\prod_{k<n} a_k \ge 0$, and if $a_k > 0$ for all $k < n$ then $\prod_{k<n} a_k > 0$.

## Facts & Assumptions

**Given:** Sequences $a, b, c : \mathbb{N} \to \mathbb{R}$, a real $\lambda$, and naturals $m, n$. Write $\Sigma_n = \sum_{k<n} a_k$ and $\Pi_n = \prod_{k<n} a_k$.

[L1] Recursion clauses ([[def-finite-sum]]): $\sum_{k<0} a_k = 0$ and $\sum_{k<n+1} a_k = \sum_{k<n} a_k + a_n$; $\prod_{k<0} a_k = 1$ and $\prod_{k<n+1} a_k = \big(\prod_{k<n} a_k\big) \cdot a_n$; and $\sum_{k=m}^{n-1} a_k = \sum_{j < n-m} a_{m+j}$ for $m \le n$, likewise for products.

[L2] Field axioms: addition and multiplication are associative and commutative, $0$ and $1$ are the identities, $x - x = 0$, and multiplication distributes over addition ([[def-field]], [[def-ordered-field]]); and $0 \cdot x = 0$, which is not an axiom but a lemma ([[lem-of-zero-mult]]).

[L3] Induction principle: a property holding at $0$ and inherited by successors holds at every natural ([[thm-induction-principle]]).

[L4] Adding inequalities: $x \le y$ and $u \le v$ imply $x + u \le y + v$. [[lem-of-add-order]] states the STRICT forms and only those ($x < y \Rightarrow x + c < y + c$, and $x < y$ with $u < v$ giving $x + u < y + v$); the nonstrict form used throughout below is those two together with the cases $x = y$ and $u = v$, which are settled by trichotomy, the order being total and transitive ([[def-ordered-field]]).

[L5] The canonical embedding $\iota : \mathbb{Q} \to \mathbb{R}$ is a field homomorphism, so $\iota(0) = 0$ and $\iota(n+1) = \iota(n) + 1$, and $\iota(n) > 0$ for $n \ge 1$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).

[L6] Sign rules: a product of two positives is positive ([[lem-of-sign-rules]], claim 1), and a product of two nonnegatives is nonnegative, since a factor equal to $0$ makes the product $0$ ([[lem-of-zero-mult]]) and otherwise both factors are positive; and $1 > 0$, which is proved in [[cor-of-one-positive]] and stated by none of the items named above.

## Proof

**Proof technique:** induction.

1.1 Base case $n = 0$: every claim holds at $n = 0$, since both sides of claim 1 are $0 = 0 + 0$, both sides of claim 2 are $0 = \lambda \cdot 0$ and $0 = \iota(0)\lambda$, claim 4 reads $0 \le 0$ with no term to bound and the hypothesis $\sum_{k<0} a_k = 0$ giving nothing to prove, claim 5 reads $0 = c_0 - c_0$, and claim 6 reads $1 = 1 \cdot 1$ with $1 > 0$. [base, L1, L2, L5, L6]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume claims 1, 2, 4, 5 and 6 hold for this $n$ and for all sequences $a, b, c$ and all $\lambda$. [ih]

1.3 Splitting, claim 3, by a separate induction on the number of trailing terms $d = n - m$ with $m$ fixed: for $d = 0$ the claim reads $\sum_{k<m} a_k = \sum_{k<m} a_k + 0$ and $\prod_{k<m} a_k = \big(\prod_{k<m} a_k\big) \cdot 1$, which hold; and if $\sum_{k<m+d} a_k = \sum_{k<m} a_k + \sum_{j<d} a_{m+j}$, then $\sum_{k<m+d+1} a_k = \sum_{k<m+d} a_k + a_{m+d} = \sum_{k<m} a_k + \big(\sum_{j<d} a_{m+j} + a_{m+d}\big) = \sum_{k<m} a_k + \sum_{j<d+1} a_{m+j}$ by associativity, and identically for products with $1$ in place of $0$ and multiplication in place of addition, so induction on $d$ gives claim 3 for every $m \le n$. [L1, L2, L3]

2.1 Additivity at $n+1$: $\sum_{k<n+1}(a_k + b_k) = \sum_{k<n}(a_k + b_k) + (a_n + b_n) = \big(\sum_{k<n} a_k + \sum_{k<n} b_k\big) + (a_n + b_n) = \big(\sum_{k<n} a_k + a_n\big) + \big(\sum_{k<n} b_k + b_n\big) = \sum_{k<n+1} a_k + \sum_{k<n+1} b_k$, using the recursion clause, the hypothesis, and commutativity with associativity of addition. [step 1.2, L1, L2]

2.2 Scaling at $n+1$: $\sum_{k<n+1} \lambda a_k = \sum_{k<n} \lambda a_k + \lambda a_n = \lambda \sum_{k<n} a_k + \lambda a_n = \lambda\big(\sum_{k<n} a_k + a_n\big) = \lambda \sum_{k<n+1} a_k$ by the recursion clause, the hypothesis and distributivity; taking $a_k = 1$ for all $k$ gives $\sum_{k<n+1} \lambda = \sum_{k<n} \lambda + \lambda = \iota(n)\lambda + \lambda = (\iota(n) + 1)\lambda = \iota(n+1)\lambda$. [step 1.2, L1, L2, L5]

2.3 Monotonicity at $n+1$: assume $a_k \le b_k$ for all $k < n+1$; then $a_k \le b_k$ for all $k < n$, so the hypothesis gives $\sum_{k<n} a_k \le \sum_{k<n} b_k$, and adding the inequality $a_n \le b_n$ gives $\sum_{k<n+1} a_k = \sum_{k<n} a_k + a_n \le \sum_{k<n} b_k + b_n = \sum_{k<n+1} b_k$. [step 1.2, L1, L4]

2.4 Telescoping at $n+1$: $\sum_{k<n+1}(c_{k+1} - c_k) = \sum_{k<n}(c_{k+1} - c_k) + (c_{n+1} - c_n) = (c_n - c_0) + (c_{n+1} - c_n) = c_{n+1} - c_0$, by the recursion clause, the hypothesis and the field identities. [step 1.2, L1, L2]

2.5 Products at $n+1$: $\prod_{k<n+1}(a_k b_k) = \big(\prod_{k<n}(a_k b_k)\big)(a_n b_n) = \big(\prod_{k<n} a_k\big)\big(\prod_{k<n} b_k\big)(a_n b_n) = \big(\prod_{k<n+1} a_k\big)\big(\prod_{k<n+1} b_k\big)$ by the recursion clause, the hypothesis, and commutativity with associativity of multiplication; and if every $a_k \ge 0$ for $k < n+1$ then $\prod_{k<n+1} a_k = \big(\prod_{k<n} a_k\big) a_n$ is a product of two nonnegatives, hence nonnegative, with the same argument giving positivity from positivity since $\prod_{k<0} a_k = 1 > 0$. [step 1.2, L1, L2, L6]

3.1 Consequences of monotonicity, completing claim 4: monotonicity itself holds at every $n$, by the induction principle applied to the base case of step 1.1 and the successor step 2.3, so it is available for an arbitrary $n$ in what follows; if $a_k \ge 0$ for all $k < n$ then comparing with the zero sequence gives $\sum_{k<n} a_k \ge \sum_{k<n} 0 = 0$; for $j < n$ splitting at $j$ and then at $j+1$ writes $\sum_{k<n} a_k = \sum_{k<j} a_k + a_j + \sum_{k=j+1}^{n-1} a_k$ with the first and third summands $\ge 0$, so $a_j \le \sum_{k<n} a_k$; and if moreover $\sum_{k<n} a_k = 0$ then $0 \le a_j \le 0$ for every $j < n$, so $a_j = 0$. [step 1.1, step 2.3, step 1.3, L3, L4, L2]

4.1 By the induction principle claims 1, 2, 4, 5 and 6 hold for every $n \in \mathbb{N}$, and claim 3 was proved in step 1.3 with its consequences in step 3.1, so all six laws hold. [step 1.1, step 2.1, step 2.2, step 2.3, step 2.4, step 2.5, step 1.3, step 3.1, L3, discharge-induction] ∎
````

### `lem-scaled-binomial-coefficients-converge`

````markdown
---
id: lem-scaled-binomial-coefficients-converge
kind: lemma
title: "For fixed $k$, $\\binom{n}{k}/n^k$ tends to $1/k!$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-binomial-closed-formula, def-binomial-coefficient, def-factorial-and-falling-factorial, def-finite-sum, lem-finite-sum-laws, thm-algebra-of-limits, cor-archimedean-reciprocal, def-canonical-natural, lem-of-naturals-positive, lem-of-sign-rules, def-ordered-field]
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
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "J. Lebl, Basic Analysis, Analytic Functions"
      url: "https://www.jirka.org/ra/html/sec_analfuncs.html"
    - title: "J. Lebl, Basic Analysis, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
    - title: "J. K. Hunter, An Introduction to Real Analysis, Chapter 10"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch10.pdf"
    - title: "R. Sedgewick and P. Flajolet, Analytic Combinatorics, Asymptotic Approximations"
      url: "https://aofa.cs.princeton.edu/40asymptotic/"
pipeline_run: null
---

## Statement

For each fixed $k\in\mathbb N$,
$$\frac{\iota\binom nk}{\iota(n)^k}\longrightarrow\frac1{\iota(k!)} \qquad(n\to\infty),$$
where the expression is read for $n\ge\max\{1,k\}$.
For every such $n$, one also has the uniform bound
$$0\le \frac{\iota\binom nk}{\iota(n)^k}\le\frac1{\iota(k!)}.$$

## Facts & Assumptions

**Given:** A fixed $k\in\mathbb N$.

[L1] For $n\ge k$, $\binom nk\,k!=n^{\underline{k}}$ ([[thm-binomial-closed-formula]], [[def-factorial-and-falling-factorial]]), and the canonical embedding preserves the products involved ([[def-canonical-natural]]).

[L2] Finite products and sums obey [[def-finite-sum]] and [[lem-finite-sum-laws]], limits obey [[thm-algebra-of-limits]], and $1/\iota(n)\to0$ ([[cor-archimedean-reciprocal]]). Canonical naturals are positive and strictly increasing ([[lem-of-naturals-positive]]), while multiplication by a positive real preserves order ([[lem-of-sign-rules]], [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 For $n\ge\max\{1,k\}$, $\iota\binom nk/\iota(n)^k=\iota(k!)^{-1}\prod_{j<k}(1-\iota(j)/\iota(n))$.   [L1, given, algebra]

2.1 For $j<k\le n$, strict increase and positivity give $0\le\iota(j)/\iota(n)<1$, so every factor in step 1.1 lies in $(0,1]$. Thus the finite product lies in $[0,1]$, proving the displayed uniform bound.  [step 1.1, L2]

3.1 For each of the finitely many $j<k$, $\iota(j)/\iota(n)\to0$; finite-product limit algebra makes the product in step 1.1 tend to $1$. Multiplication by the fixed factor $1/\iota(k!)$ yields the limit.  [step 1.1, L2] ∎
````

### `thm-binomial-theorem`

````markdown
---
id: thm-binomial-theorem
kind: theorem
title: "The binomial theorem in $\\mathbb{R}$: $(x+y)^{n} = \\sum_{k<n+1} \\iota\\!\\binom{n}{k}\\, x^{k} y^{\\,n-k}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-pascals-rule, def-binomial-coefficient, def-finite-sum, lem-finite-sum-laws,
       def-nat-finite-sum-and-product, lem-nat-finite-sum-laws-and-the-canonical-embedding,
       def-integer-power, def-canonical-natural, lem-of-zero-mult,
       lem-nat-add-cancellative, lem-nat-nonzero-is-successor, def-nat-order,
       thm-induction-principle, def-field, def-ordered-field]
justified_by: []
forward_refs: [def-ring]
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Binomial theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binomial_theorem"
    - title: "Binomial coefficient (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binomial_coefficient"
    - title: "Pascal's rule (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pascal%27s_rule"
pipeline_run: null
---

## Statement

For all $x, y \in \mathbb{R}$ and every $n \in \mathbb{N}$,

$$(x+y)^{n} \;=\; \sum_{k<n+1} \iota\binom{n}{k}\, x^{k}\, y^{\,n-k},$$

where the powers are the integer powers of [[def-integer-power]], the sum is the
real finite sum of [[def-finite-sum]] over $k = 0, 1, \dots, n$, the difference
$n-k$ is a genuine one because $k \le n$ throughout the range, and $\iota$ is the
canonical natural of [[def-canonical-natural]].

**The coefficient is $\iota\binom{n}{k}$ and not $\binom{n}{k}$.** A binomial
coefficient is a natural number, that is a von Neumann natural, that is a set; it
is not an element of $\mathbb{R}$, and it enters the field through $\iota$.

**The identity is stated in $\mathbb{R}$ and only in $\mathbb{R}$.** The same
proof uses nothing but commutativity, associativity, distributivity and
natural-number multiples of a ring element, so a commutative-ring version is
available wherever rings are; rings are not available at this point in the
reading order, and the ring statement is a separate statement, to be made where
they are. See the Remarks below.

## Facts & Assumptions

**Given:** Reals $x, y$; a natural $n$; and the abbreviation $c_k := \iota\binom{n}{k}$ for **every** $k \in \mathbb{N}$, so that $c_k = \iota(0) = 0$ whenever $k > n$.

[L1] Induction ([[thm-induction-principle]]).

[L2] Integer powers ([[def-integer-power]]): $a^{0} = 1$ for **every** real $a$, including $a = 0$, and $a^{\sigma(m)} = a^{m}\cdot a$. An immediate induction gives $1^{m} = 1$.

[L3] Real finite sums ([[def-finite-sum]]): $\sum_{k<0} u_k = 0$ and $\sum_{k<\sigma(N)} u_k = \sum_{k<N} u_k + u_N$; additivity $\sum(u_k+v_k) = \sum u_k + \sum v_k$, scaling $\sum \lambda u_k = \lambda\sum u_k$, and splitting $\sum_{k<N} u_k = \sum_{k<p} u_k + \sum_{j<N-p} u_{p+j}$ for $p \le N$ ([[lem-finite-sum-laws]], clauses 1, 2 and 3).

[L4] $\iota$ is additive and multiplicative with $\iota(0) = 0$ and $\iota(1) = 1$ (clause 0 of [[lem-nat-finite-sum-laws-and-the-canonical-embedding]], [[def-canonical-natural]]).

[L5] Binomial coefficients ([[def-binomial-coefficient]]): $\binom{m}{0} = 1$ and $\binom{m}{j} = 0$ for $j > m$; Pascal's rule $\binom{\sigma(m)}{\sigma(j)} = \binom{m}{j} + \binom{m}{\sigma(j)}$ for all $m, j$ ([[thm-pascals-rule]], clause 1).

[L6] Field arithmetic of $\mathbb{R}$: associativity, commutativity, distributivity, $0 \cdot a = 0$ ([[def-field]], [[def-ordered-field]], [[lem-of-zero-mult]]).

[L7] Arithmetic of $\mathbb{N}$: for $k \le n$, $k + (n-k) = n$, and hence $(n-k)+1 = \sigma(n)-k$ and $\sigma(n) - \sigma(k) = n-k$; every nonzero natural is a successor ([[def-nat-order]], [[lem-nat-add-cancellative]], [[lem-nat-nonzero-is-successor]], [[def-nat-finite-sum-and-product]] for the truncated difference).

## Proof

**Proof technique:** induction.

1.1 Both sides are functions of $n$ with $x, y$ fixed, and the induction is on $n$. Note first that $c_{\sigma(n)} = \iota\binom{n}{\sigma(n)} = \iota(0) = 0$, since $\sigma(n) > n$. [given, L4, L5]

1.2 Base case $n = 0$. The left-hand side is $(x+y)^{0} = 1$ by [L2]. The right-hand side is $\sum_{k<1}\iota\binom{0}{k}x^{k}y^{\,0-k} = \iota\binom{0}{0}x^{0}y^{0} = 1\cdot 1\cdot 1 = 1$, using [L3], $\binom{0}{0} = 1$, $\iota(1) = 1$ and [L2]. This is correct at $x = 0$ and at $y = 0$ as well, because $a^{0} = 1$ for every real $a$. [base, L2, L3, L4, L5]

1.3 Inductive hypothesis: fix $n$ and assume $(x+y)^{n} = \sum_{k<\sigma(n)} c_k x^{k}y^{\,n-k}$ for all $x, y \in \mathbb{R}$. [ih]

2.1 Expanding one factor. By [L2] and distributivity, $(x+y)^{\sigma(n)} = (x+y)^{n}(x+y) = \big(\sum_{k<\sigma(n)} c_k x^{k}y^{\,n-k}\big)x + \big(\sum_{k<\sigma(n)} c_k x^{k}y^{\,n-k}\big)y$, using the hypothesis of step 1.3; and by the scaling clause of [L3] together with $x^{k}x = x^{\sigma(k)}$ and $y^{\,n-k}y = y^{\,(n-k)+1}$ this equals $\Sigma_1 + \Sigma_2$ with $\Sigma_1 := \sum_{k<\sigma(n)} c_k x^{\sigma(k)}y^{\,n-k}$ and $\Sigma_2 := \sum_{k<\sigma(n)} c_k x^{k}y^{\,(n-k)+1}$. [step 1.3, L2, L3, L6]

3.1 Rewriting $\Sigma_2$. For $k \le n$ one has $(n-k)+1 = \sigma(n)-k$ by [L7], so $\Sigma_2 = \sum_{k<\sigma(n)} c_k x^{k}y^{\,\sigma(n)-k}$. Extending the range by one term costs nothing: by the recursion clause of [L3], $\sum_{k<\sigma(\sigma(n))} c_k x^{k}y^{\,\sigma(n)-k} = \Sigma_2 + c_{\sigma(n)}x^{\sigma(n)}y^{0}$, and $c_{\sigma(n)} = 0$ by step 1.1, so the added term is $0$ by [L6] and $\Sigma_2 = \sum_{k<\sigma(\sigma(n))} c_k x^{k}y^{\,\sigma(n)-k}$. [step 1.1, step 2.1, L3, L6, L7]

3.2 Rewriting $\Sigma_1$. Define a list $b$ of length $\sigma(\sigma(n))$ by $b_0 := 0$ and $b_{\sigma(i)} := c_i x^{\sigma(i)}y^{\,n-i}$ for $i < \sigma(n)$; every index below $\sigma(\sigma(n))$ is $0$ or a successor $\sigma(i)$ with $i < \sigma(n)$, by [L7], so $b$ is well defined. Splitting at $p = 1$ by [L3] and using $\sigma(\sigma(n)) - 1 = \sigma(n)$ and $1 + i = \sigma(i)$, $\sum_{j<\sigma(\sigma(n))} b_j = b_0 + \sum_{i<\sigma(n)} b_{\sigma(i)} = 0 + \Sigma_1 = \Sigma_1$. [step 2.1, L3, L6, L7]

4.1 Adding the two. By step 3.1, step 3.2 and the additivity clause of [L3], $(x+y)^{\sigma(n)} = \sum_{k<\sigma(\sigma(n))}\big(b_k + c_k x^{k}y^{\,\sigma(n)-k}\big)$. Evaluate the general term. At $k = 0$ it is $0 + \iota\binom{n}{0}x^{0}y^{\,\sigma(n)} = y^{\,\sigma(n)} = \iota\binom{\sigma(n)}{0}x^{0}y^{\,\sigma(n)-0}$, both coefficients being $\iota(1) = 1$. At $k = \sigma(i)$ with $i < \sigma(n)$ it is $c_i x^{\sigma(i)}y^{\,n-i} + c_{\sigma(i)}x^{\sigma(i)}y^{\,\sigma(n)-\sigma(i)}$, and $\sigma(n)-\sigma(i) = n-i$ by [L7], so the term equals $\big(\iota\binom{n}{i} + \iota\binom{n}{\sigma(i)}\big)x^{\sigma(i)}y^{\,\sigma(n)-\sigma(i)} = \iota\binom{\sigma(n)}{\sigma(i)}x^{\sigma(i)}y^{\,\sigma(n)-\sigma(i)}$ by the additivity of $\iota$ and Pascal's rule. Hence $(x+y)^{\sigma(n)} = \sum_{k<\sigma(\sigma(n))}\iota\binom{\sigma(n)}{k}x^{k}y^{\,\sigma(n)-k}$, which is the claim at $\sigma(n)$. [step 3.1, step 3.2, L3, L4, L5, L6, L7]

5.1 By step 1.2, step 4.1 and induction the identity holds for every $n \in \mathbb{N}$ and all reals $x$, $y$; in particular at $x = 0$ or $y = 0$, where the convention $a^{0} = 1$ of [[def-integer-power]] is what makes the extreme terms come out right and no exceptional case is needed. [step 1.2, step 4.1, L1, L2, discharge-induction] ∎

## Remarks

- **Two index traps, both checked.** The sum runs over $k < n+1$, that is
  $k \le n$, so the exponent $n-k$ is never a truncated difference in disguise;
  and the inductive step needs the coefficient $\binom{n}{\sigma(n)}$, which is
  $0$ by the boundary values of [[def-binomial-coefficient]] rather than
  undefined. Step 1.1 records that once and both rewritings use it.

- **Where $0^{0}$ matters.** At $x = 0$ the term with $k = 0$ is
  $\iota\binom{n}{0}\,0^{0}y^{n} = y^{n}$, and the identity reads
  $y^{n} = y^{n}$. A treatment leaving $0^{0}$ undefined would have to state the
  theorem with exceptions; [[def-integer-power]] fixes $a^{0} = 1$ for every real
  $a$, so there are none.

- **The ring version is a different statement.** It says the same thing about
  $x, y$ in a commutative ring, with $\iota\binom{n}{k}$ replaced by the
  $\binom{n}{k}$-fold multiple of the ring element. Making it requires rings,
  which come later in the reading order; the pointer to [[def-ring]] is
  orientation only and nothing above rests on it.
````

