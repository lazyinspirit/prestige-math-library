# Audit proof-refuter brief — Wave 14, A6

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30).** You are read-only and
> tool-less. Do not ask for shell or edit permission. Everything available to
> you is reproduced in the dispatch task.

You are **DeepSeek V4 Pro** at the API's maximum reasoning setting, serving as
an independent adversarial proof-refuter. Return evidence only; Audit-Alpha
alone adjudicates and edits.

## Binding triage

- **Non-negotiable:** mathematical accuracy, logical validity, correct citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes within 30 seconds; other non-fatal quirks;
  imperfection at the level of the letter.

Read the target's title, complete public statement, Facts & Assumptions, every
numbered proof/refutation/verification step, and Remarks. Try to falsify every
load-bearing inference. Before alleging that a cited dependency is too weak,
compare the exact current supplied dependency: domain, hypotheses, quantifiers,
direction, conclusion, boundary cases, and conventions. Check biconditionals,
existence/uniqueness, recursion/induction, limits, index shifts, empty/zero/one/
endpoint/degenerate cases, hidden division, hidden choice, and false Remarks.
For an `ai-generated` Statement or consumer, actively search for a
counterexample or a failure in the witness or cited generated premise. A false
public claim, invalid proof, missing necessary hypothesis, circularity, or
materially inaccurate load-bearing citation is fatal; a quickly closable gap is
nonfatal.

Return no more than 450 words, exactly in this shape:

```text
VERDICT: CLEAN | DEFECTS
```

For each defect:

```text
FINDING 1
  location: [exact section/fact/step]
  severity: fatal | nonfatal
  claim:    [exact assertion]
  evidence: [counterexample, invalid inference, or exact source mismatch]
```

Always end with:

```text
BOUNDARY: [specific boundary/counterexample checks and disposition]
SOURCES:  [confirm every supplied cited item used by the target was inspected]
CHECKED:  [confirm title, public claim, every numbered step, and Remarks]
```


---

# This dispatch

## Selection reasons

- high risk (6): 5 declared dependencies; 5 cited facts; analytic limiting/completeness language
- Wave 14 ai-generated Statement seed
- Wave 14 generated-risk seed (cone 0)

## Target item — `ex-exponential-product-limit-at-negative-input`

Normalized current SHA-256: `3bcd617417b2fca14e103c3632a20deab4ce64e463ff280cb5eeaa796bc2c55c`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: ex-exponential-product-limit-at-negative-input
kind: example
title: "The log-free product limit $(1-2/n)^n\\to\\exp(-2)$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-exponential-product-limit, def-real-exponential-function-and-e, thm-exponential-addition-formula, cor-exponential-reciprocal-and-positivity, def-integer-power]
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
    - title: "J. Lebl, Basic Analysis, Analytic Functions"
      url: "https://www.jirka.org/ra/html/sec_analfuncs.html"
pipeline_run: null
---

## Example

At $x=-2$,
$$\left(1-\frac2{\iota(n)}\right)^n\longrightarrow e^{-2}.$$
The finitely many initial indices with nonpositive base do not affect the limit.

## Facts & Assumptions

**Given:** The displayed sequence.

[L1] The product-limit theorem holds for every real input once $n>|x|$ ([[thm-exponential-product-limit]]).

[L2] Since $e=\exp(1)$, the addition and reciprocal formulas and the definition of negative integer powers give $\exp(-2)=1/\exp(2)=1/(\exp(1)\exp(1))=1/e^2=e^{-2}>0$ ([[def-real-exponential-function-and-e]], [[thm-exponential-addition-formula]], [[cor-exponential-reciprocal-and-positivity]], [[def-integer-power]]).

## Verification

**Proof technique:** direct.

1.1 For every $n>2$, the base is positive, so [L1] applies at $x=-2$ and gives the asserted limit.  [L1]

2.1 Removing or altering the terms at $n\le2$ does not change a sequence limit, and [L2] identifies the positive limit.  [step 1.1, L2] ∎
````

## Wave 14 provenance row

```json
{
  "id": "ex-exponential-product-limit-at-negative-input",
  "statement": "ai-generated",
  "proof": "ai-generated",
  "evidence": "trivial",
  "urls": [],
  "rationale": "This is a bespoke numerical specialization of the preceding all-real product-limit theorem at x=-2. Direct verification: substituting x=-2 gives the displayed limit exp(-2), and the addition and reciprocal laws give exp(-2)=1/(exp(1)exp(1))=e^-2>0. The two-step proof is likewise local.",
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
      "source": "thm-exponential-product-limit",
      "source_section": "Statement",
      "quote": "For every real $x$,\n$$\\lim_{n\\to\\infty}\\left(1+\\frac{x}{\\iota(n)}\\right)^n=\\exp(x),$$\nwith the sequence started after $n>|x|$, so the base is positive.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-real-exponential-function-and-e",
      "source_section": "Definition",
      "quote": "For $x\\in\\mathbb R$, define\n$$\\exp(x):=\\sum_{n=0}^{\\infty}\\frac{x^n}{\\iota(n!)}, \\qquad e:=\\exp(1),$$",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-exponential-addition-formula",
      "source_section": "Statement",
      "quote": "For all real $x,y$,\n$$\\exp(x+y)=\\exp(x)\\exp(y).$$",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "cor-exponential-reciprocal-and-positivity",
      "source_section": "Statement",
      "quote": "For every real $x$, $\\exp(x)>0$ and\n$$\\exp(-x)=\\frac1{\\exp(x)}.$$",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-integer-power",
      "source_section": "Definition",
      "quote": "**Negative exponents.** If $a \\ne 0$ and $n \\in \\mathbb{N}$ with $n \\ge 1$, set\n\n$$a^{-n} := (a^n)^{-1}.$$",
      "uses": [
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "For every $n>2$, the base is positive, so [L1] applies at $x=-2$ and gives the asserted limit.  [L1]",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Removing or altering the terms at $n\\le2$ does not change a sequence limit, and [L2] identifies the positive limit.  [step 1.1, L2] ∎",
      "step": "2.1",
      "inputs": [
        "L2",
        "1.1"
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
      "status": "not_applicable",
      "reason": "The example fixes x=-2, so x=0 is not among its inputs."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Step 1.1 begins after n>2; the first admissible bases are positive and the integer power is defined."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "The potentially zero base at n=2 is explicitly outside the started tail in step 1.1."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Step 1.1 checks the n-to-infinity limit on the eventual positive-base tail."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "No arbitrary selection is used."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The example is not a biconditional."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The example is not a biconditional."
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "ex-exponential-product-limit-at-negative-input",
    "sourcePage": "the-exponential-function-examples",
    "batch": "wave14-real-analysis",
    "target": "thm-exponential-product-limit",
    "declared_target": "thm-exponential-product-limit",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-exponential-function",
    "targetBatch": "wave14-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-exponential-product-limit-at-negative-input",
    "sourcePage": "the-exponential-function-examples",
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
    "source": "ex-exponential-product-limit-at-negative-input",
    "sourcePage": "the-exponential-function-examples",
    "batch": "wave14-real-analysis",
    "target": "thm-exponential-addition-formula",
    "declared_target": "thm-exponential-addition-formula",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-exponential-function",
    "targetBatch": "wave14-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-exponential-product-limit-at-negative-input",
    "sourcePage": "the-exponential-function-examples",
    "batch": "wave14-real-analysis",
    "target": "cor-exponential-reciprocal-and-positivity",
    "declared_target": "cor-exponential-reciprocal-and-positivity",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-exponential-function",
    "targetBatch": "wave14-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-exponential-product-limit-at-negative-input",
    "sourcePage": "the-exponential-function-examples",
    "batch": "wave14-real-analysis",
    "target": "def-integer-power",
    "declared_target": "def-integer-power",
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
[
  {
    "id": "ex-exponential-product-limit-at-negative-input",
    "file": "items/ex-exponential-product-limit-at-negative-input.md",
    "source": "provenance",
    "cone_size": 0,
    "logical_consumers": [],
    "direct_citation_consumers": [],
    "disposition": {
      "status": "pending",
      "by": "",
      "notes": ""
    }
  }
]
```

## Full exact-current text of every cited or declared item (5)

### `cor-exponential-reciprocal-and-positivity`

````markdown
---
id: cor-exponential-reciprocal-and-positivity
kind: corollary
title: "The exponential is positive and satisfies $\\exp(-x)=1/\\exp(x)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-exponential-addition-formula, def-real-exponential-function-and-e, lem-of-square-positive]
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
    - title: "J. K. Hunter, An Introduction to Real Analysis, Chapter 10"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch10.pdf"
    - title: "S. G. Johnson, Exponential Functions"
      url: "https://math.mit.edu/~stevenj/exponential.pdf"
pipeline_run: null
---

## Statement

For every real $x$, $\exp(x)>0$ and
$$\exp(-x)=\frac1{\exp(x)}.$$

## Facts & Assumptions

**Given:** $x\in\mathbb R$.

[L1] $\exp(x+y)=\exp(x)\exp(y)$ ([[thm-exponential-addition-formula]]), and $\exp(0)=1$ from [[def-real-exponential-function-and-e]].

[L2] Every nonzero square in an ordered field is positive ([[lem-of-square-positive]]).

## Proof

**Proof technique:** direct.

1.1 Setting $y=-x$ in [L1] gives $\exp(x)\exp(-x)=1$, so both factors are nonzero.  [L1, algebra]

2.1 Also $\exp(x)=\exp(x/2)^2$, so it is nonnegative; by step 1.1 and [L2] it is positive.  [L1, L2]

3.1 Dividing the identity in step 1.1 by $\exp(x)$ gives the reciprocal formula.  [step 1.1, algebra] ∎
````

### `def-integer-power`

````markdown
---
id: def-integer-power
kind: definition
title: "Integer powers $a^m$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-recursion, def-ordered-field, def-integers, def-field, def-int-operations, lem-nat-embeds-int, lem-of-inverse-unique, lem-of-no-zero-divisors, lem-of-zero-mult, thm-int-ordered-ring]
justified_by: [lem-power-laws]
aliases: [def-power]
landmark: false
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "J. Aspnes, Summation Notation"
      url: "https://www.cs.yale.edu/homes/aspnes/pinewiki/SummationNotation.html"
    - title: "M. Fochler, Recursive sums, products, and powers"
      url: "https://people.math.binghamton.edu/mfochler/bu-mfx/bu-math-arv/math-330-arv/math-330-2019-08/html/lec-notes/bu-ln-330-m330-solns-2019-12-03.pdf"
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §4.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

Let $a \in \mathbb{R}$, where $\mathbb{R}$ is the ambient ordered field
([[def-ordered-field]], [[def-field]]).

**Natural exponents.** By the recursion theorem ([[thm-recursion]]) applied to
the set $\mathbb{R}$, the starting element $1$ and the function
$f(x) = x \cdot a$, there is a unique function $\mathbb{N} \to \mathbb{R}$,
written $n \mapsto a^n$, with

$$a^0 = 1, \qquad a^{n+1} = a^n \cdot a \quad (n \in \mathbb{N}).$$

Thus $a^1 = a$, $a^2 = a \cdot a$, and so on. Note that this is defined for
**every** $a$, including $a = 0$.

**Negative exponents.** If $a \ne 0$ and $n \in \mathbb{N}$ with $n \ge 1$, set

$$a^{-n} := (a^n)^{-1}.$$

**Why that is legitimate.** The right-hand side presupposes that $a^n$ is
invertible, that is, that $a^n \ne 0$. This is a proof obligation and not an
observation, and it is discharged by claim 2 of [[lem-power-laws]]: for $a \ne 0$
in a field, $a^n \ne 0$ for every $n \in \mathbb{N}$, proved there by induction on
$n$ from the fact that a field has no zero divisors ([[lem-of-no-zero-divisors]]).
That lemma is a statement *about* the operation introduced here, so it depends on
this definition and is recorded in this item's `justified_by` rather than in its
`deps` (SCHEMA §3). Given $a^n \ne 0$, the value $(a^n)^{-1}$ is a single
well-determined element, because multiplicative inverses in a field are unique
([[lem-of-inverse-unique]]).

**Integer exponents.** Every integer $m$ ([[def-integers]]) is either
$\iota(n)$ or $-\iota(n)$ for a unique natural $n$, where $\iota$ is the
embedding $\mathbb{N} \to \mathbb{Z}$ ([[lem-nat-embeds-int]],
[[def-int-operations]]). This too is a citation and not a slogan: the order on
$\mathbb{Z}$ is total ([[thm-int-ordered-ring]]), so $m \ge 0$ or $m < 0$; the
image of $\iota$ is exactly the set of nonnegative integers, and each of them is
$\iota(n)$ for a unique natural $n$ ([[lem-nat-embeds-int]]); and if $m < 0$ then
$-m > 0$, by compatibility of the order with addition ([[thm-int-ordered-ring]]),
so $-m = \iota(n)$ and $m = -\iota(n)$, with $n$ unique because $\iota$ is
injective. The two clauses above therefore define $a^m$ for every
$m \in \mathbb{Z}$ whenever $a \ne 0$, and for every $m \in \mathbb{N}$ for
arbitrary $a$. The clauses are consistent where they overlap: the only overlap is
$m = 0$, where $-\iota(0) = \iota(0)$ and $(a^0)^{-1} = 1^{-1} = 1 = a^0$.

## Remarks

- **The convention $0^0 = 1$ is adopted here**, and it is not a matter of taste
  but of agreement with the recursion above: $a^0 = 1$ is the starting value for
  every $a$, exactly as the empty product is $1$ ([[def-finite-sum]]). This is
  the convention that makes the empty product, the binomial theorem, and
  polynomial notation $\sum_k c_k x^k$ work at $x = 0$ without an exception. The
  competing convention "$0^0$ undefined" belongs to contexts where $x^y$ is
  studied as a function of two *real* variables and one wants continuity, which
  is unavailable and irrelevant here: the exponent in $a^m$ is an integer, never
  a real.
- $0^n = 0$ for every $n \ge 1$, since $0^{n} = 0^{n-1} \cdot 0 = 0$, a product
  with a zero factor ([[lem-of-zero-mult]]); and
  $0^{-n}$ is not defined for $n \ge 1$, since $0$ has no inverse.
- The exponent is an integer and stays an integer. Rational exponents are a
  separate construction resting on the existence of roots
  ([[thm-nth-roots-exist]], [[def-rational-power]]), and real exponents do not
  exist in this library yet ([[rem-real-exponents-deferred]]).
- The laws $a^{m+n} = a^m a^n$, $(a^m)^n = a^{mn}$ and $(ab)^n = a^n b^n$ are
  proved, not assumed, in [[lem-power-laws]]; the order behaviour of $a \mapsto a^n$
  is [[lem-power-monotone]].
````

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

### `thm-exponential-addition-formula`

````markdown
---
id: thm-exponential-addition-formula
kind: theorem
title: "The exponential addition formula $\\exp(x+y)=\\exp(x)\\exp(y)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-exponential-series-has-infinite-radius, lem-cauchy-product-of-real-power-series, thm-binomial-theorem, thm-binomial-closed-formula, def-binomial-coefficient, def-factorial-and-falling-factorial, def-canonical-natural, def-finite-sum, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "J. Lebl, Basic Analysis, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
    - title: "J. K. Hunter, An Introduction to Real Analysis, Chapter 10"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch10.pdf"
pipeline_run: null
---

## Statement

For all real $x,y$,
$$\exp(x+y)=\exp(x)\exp(y).$$

## Facts & Assumptions

**Given:** $x,y\in\mathbb R$.

[L1] For fixed $x,y$, the auxiliary power series $\sum_{n\ge0}x^nz^n/\iota(n!)$ and $\sum_{n\ge0}y^nz^n/\iota(n!)$ have infinite radius by [[lem-exponential-series-has-infinite-radius]]. Inside their common radius, their product is the Cauchy product of their coefficients ([[lem-cauchy-product-of-real-power-series]]).

[L2] The binomial theorem says $(x+y)^n=\sum_{k=0}^n\iota\binom nk x^ky^{n-k}$ ([[thm-binomial-theorem]], [[def-binomial-coefficient]]).

[L3] For $k\le n$, $\iota\binom nk=\iota(n!)/(\iota(k!)\iota((n-k)!))$ ([[thm-binomial-closed-formula]]). Therefore $1/(\iota(k!)\iota((n-k)!))=\iota\binom nk/\iota(n!)$, with all naturals read in $\mathbb R$ through [[def-canonical-natural]].

## Proof

**Proof technique:** direct.

1.1 Apply [L1] at the auxiliary value $z=1$. The coefficient of degree $n$ in the resulting Cauchy product for $\exp(x)\exp(y)$ is $\sum_{k=0}^n x^ky^{n-k}/(\iota(k!)\iota((n-k)!))$.   [L1, given]

2.1 Apply [L3] and [L2] to identify this finite sum with $(x+y)^n/\iota(n!)$.  [step 1.1, L2, L3, algebra]

3.1 Summing over $n$ gives the exponential series at $x+y$, hence the formula.  [step 2.1, L1] ∎
````

### `thm-exponential-product-limit`

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

