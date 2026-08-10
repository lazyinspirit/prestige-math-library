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

- high risk (6): 6 declared dependencies; 6 cited facts; analytic limiting/completeness language

## Target item — `thm-exponential-definition-equivalence`

Normalized current SHA-256: `c9aa46095b24559283950724d2fa7b31c7a415ab3396159260b9e29207c75f15`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: thm-exponential-definition-equivalence
kind: theorem
title: "The power-series, product-limit, IVP, functional-equation, and Picard definitions agree"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-real-exponential-function-and-e, thm-derivative-of-exponential, thm-exponential-product-limit, thm-exponential-ivp-uniqueness, thm-normalized-exponential-functional-equation, thm-picard-iterates-for-exponential]
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
    - title: "J. Lebl, Basic Analysis, Analytic Functions"
      url: "https://www.jirka.org/ra/html/sec_analfuncs.html"
    - title: "University of Pennsylvania MATH 3600, Section 34"
      url: "https://www2.math.upenn.edu/~ancoop/3600/section-34.html"
    - title: "J. Lebl, Basic Analysis, Picard's Theorem"
      url: "https://www.jirka.org/ra/html/sec_picard.html"
    - title: "J. Lebl, Basic Analysis, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
pipeline_run: null
---

## Statement

The following descriptions give the same function $\mathbb R\to(0,\infty)$: the power series $\sum x^n/\iota(n!)$; the product limit $\lim_n(1+x/\iota(n))^n$; the normalized solution of $y'=y,\ y(0)=1$; the normalized continuous multiplicative function; and the compact-uniform limit of the Picard iterates.

## Facts & Assumptions

**Given:** The five displayed constructions.

[L1] The series is [[def-real-exponential-function-and-e]].

[L2] The series-defined exponential satisfies $\exp'=\exp$ and $\exp(0)=1$, and the product, ODE-uniqueness, functional-equation, and Picard characterizations are [[thm-derivative-of-exponential]], [[thm-exponential-product-limit]], [[thm-exponential-ivp-uniqueness]], [[thm-normalized-exponential-functional-equation]], and [[thm-picard-iterates-for-exponential]].

## Proof

**Proof technique:** direct.

1.1 Each theorem in [L2] identifies its construction with the series-defined function in [L1], with exactly the normalization stated here.  [L1, L2]

2.1 Equality with a common function is transitive, so all five descriptions are equivalent.  [step 1.1, algebra] ∎
````

## Wave 14 provenance row

```json
{
  "id": "thm-exponential-definition-equivalence",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://www2.math.upenn.edu/~ancoop/3600/section-34.html",
    "https://www.jirka.org/ra/html/sec_picard.html",
    "https://www.jirka.org/ra/html/sec_logandexp.html"
  ],
  "rationale": "The sources identify the ODE, factorial power series, product-limit, functional-equation, and Picard descriptions of the ordinary exponential across their sections. The item is a library-specific consolidation of five standard characterizations, and its proof is the local composition of the preceding equivalence results.",
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
      "source": "def-real-exponential-function-and-e",
      "source_section": "Definition",
      "quote": "For $x\\in\\mathbb R$, define\n$$\\exp(x):=\\sum_{n=0}^{\\infty}\\frac{x^n}{\\iota(n!)}, \\qquad e:=\\exp(1),$$\nprovided by the all-real convergence proved in [[lem-exponential-series-has-infinite-radius]]. Here $n!\\in\\mathbb N$ is the factorial of [[def-factorial-and-falling-factorial]], $\\iota(n!)$ is its nonzero real image ([[def-canonical-natural]], [[lem-of-naturals-positive]]), and powers and series are those of [[def-integer-power]] and [[def-series]].\n\nThis is a real power series centred at $0$ ([[def-real-power-series-and-radius-of-convergence]]). No logarithm, irrational power, or differential equation enters the definition.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-derivative-of-exponential",
      "source_section": "Statement",
      "quote": "The real exponential function is $C^\\infty$, and for every $m\\in\\mathbb N$,\n$$\\exp^{(m)}=\\exp.$$\nIn particular $(\\exp)'=\\exp$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-exponential-product-limit",
      "source_section": "Statement",
      "quote": "For every real $x$,\n$$\\lim_{n\\to\\infty}\\left(1+\\frac{x}{\\iota(n)}\\right)^n=\\exp(x),$$\nwith the sequence started after $n>|x|$, so the base is positive.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-exponential-ivp-uniqueness",
      "source_section": "Statement",
      "quote": "If $y:\\mathbb R\\to\\mathbb R$ is differentiable, $y'=y$, and $y(0)=1$, then $y=\\exp$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-normalized-exponential-functional-equation",
      "source_section": "Statement",
      "quote": "The exponential function is the unique continuous $F:\\mathbb R\\to(0,\\infty)$ satisfying $F(x+y)=F(x)F(y)$ and $F(1)=e$. It is also the unique function differentiable at $0$ satisfying the functional equation, $F(0)=1$, and $F'(0)=1$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-picard-iterates-for-exponential",
      "source_section": "Statement",
      "quote": "Define $u_0(x)=1$ and $u_{r+1}(x)=1+\\int_0^x u_r(t)\\,dt$. Then\n$$u_r(x)=\\sum_{k=0}^{r}\\frac{x^k}{\\iota(k!)}$$\nand $u_r\\to\\exp$ uniformly on every bounded interval.\nMoreover,\n$$\\exp(x)=1+\\int_0^x\\exp(t)\\,dt,$$\nand differentiating this integral equation recovers $\\exp' = \\exp$ and $\\exp(0)=1$.",
      "uses": [
        "1.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Each theorem in [L2] identifies its construction with the series-defined function in [L1], with exactly the normalization stated here.  [L1, L2]",
      "step": "1.1",
      "inputs": [
        "L2",
        "L1"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Equality with a common function is transitive, so all five descriptions are equivalent.  [step 1.1, algebra] ∎",
      "step": "2.1",
      "inputs": [
        "1.1",
        "algebra"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "All five constructions are functions on the fixed domain R."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Step 1.1 includes exp(0)=1 in the series and ODE normalizations."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Step 1.1 includes e=exp(1), which fixes the functional-equation normalization."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "The cited constructions already exclude their possible zero-function or invalid-base degeneracies."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Step 1.1 uses the all-real product limit with its eventual positive-base convention; R itself has no finite endpoints."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "No arbitrary selection is made in composing the five established characterizations."
    },
    {
      "case": "iff-forward",
      "status": "checked",
      "evidence": "Step 1.1 shows the series-defined exp satisfies each of the other four constructions."
    },
    {
      "case": "iff-reverse",
      "status": "checked",
      "evidence": "Step 2.1 invokes uniqueness in each characterization to identify any function produced there with exp."
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "thm-exponential-definition-equivalence",
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
    "source": "thm-exponential-definition-equivalence",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "thm-derivative-of-exponential",
    "declared_target": "thm-derivative-of-exponential",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-exponential-function",
    "targetBatch": "wave14-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-exponential-definition-equivalence",
    "sourcePage": "the-exponential-function",
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
    "source": "thm-exponential-definition-equivalence",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "thm-exponential-ivp-uniqueness",
    "declared_target": "thm-exponential-ivp-uniqueness",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-exponential-function",
    "targetBatch": "wave14-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-exponential-definition-equivalence",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "thm-normalized-exponential-functional-equation",
    "declared_target": "thm-normalized-exponential-functional-equation",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-exponential-function",
    "targetBatch": "wave14-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-exponential-definition-equivalence",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "thm-picard-iterates-for-exponential",
    "declared_target": "thm-picard-iterates-for-exponential",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-exponential-function",
    "targetBatch": "wave14-real-analysis",
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

### `thm-derivative-of-exponential`

````markdown
---
id: thm-derivative-of-exponential
kind: theorem
title: "The exponential function is smooth and $(\\exp)'=\\exp$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-exponential-series-has-infinite-radius, thm-termwise-differentiation-of-a-real-power-series, cor-power-series-sums-are-smooth-with-coefficient-formula, def-factorial-and-falling-factorial, def-canonical-natural, lem-of-naturals-positive]
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
    - title: "J. Lebl, Basic Analysis, Analytic Functions"
      url: "https://www.jirka.org/ra/html/sec_analfuncs.html"
pipeline_run: null
---

## Statement

The real exponential function is $C^\infty$, and for every $m\in\mathbb N$,
$$\exp^{(m)}=\exp.$$
In particular $(\exp)'=\exp$.

## Facts & Assumptions

**Given:** The exponential power series.

[L1] A real power series may be differentiated termwise inside its radius ([[thm-termwise-differentiation-of-a-real-power-series]]), and its sum is smooth there ([[cor-power-series-sums-are-smooth-with-coefficient-formula]]).

[L2] The radius is infinite, $(n+1)!=(n+1)n!$, and the canonical embedding preserves products and sends positive naturals to nonzero reals ([[lem-exponential-series-has-infinite-radius]], [[def-factorial-and-falling-factorial]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

## Proof

**Proof technique:** direct.

1.1 Termwise differentiation gives $(\exp)'(x)=\sum_{n\ge1}\iota(n)x^{n-1}/\iota(n!)$.  [L1, L2]

2.1 Reindex $n=j+1$ and cancel $\iota(j+1)$ using the factorial recurrence. The series becomes $\sum_{j\ge0}x^j/\iota(j!)=\exp(x)$.  [step 1.1, L2, algebra]

3.1 Smoothness follows from [L1] and the infinite radius; iterating step 2.1 gives every higher derivative.  [step 2.1, L1, L2] ∎
````

### `thm-exponential-ivp-uniqueness`

````markdown
---
id: thm-exponential-ivp-uniqueness
kind: theorem
title: "The exponential is the unique solution of $y'=y$ with $y(0)=1$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-real-exponential-function-and-e, thm-derivative-of-exponential, cor-exponential-reciprocal-and-positivity, thm-algebra-of-derivatives, thm-chain-rule, cor-differentiable-implies-continuous, cor-zero-derivative-implies-constant]
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
    - title: "J. Lebl, Basic Analysis, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
    - title: "J. K. Hunter, An Introduction to Real Analysis, Chapter 10"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch10.pdf"
    - title: "University of Pennsylvania MATH 3600, Section 34"
      url: "https://www2.math.upenn.edu/~ancoop/3600/section-34.html"
pipeline_run: null
---

## Statement

If $y:\mathbb R\to\mathbb R$ is differentiable, $y'=y$, and $y(0)=1$, then $y=\exp$.

## Facts & Assumptions

**Given:** A differentiable solution $y$ of the initial-value problem.

[L1] $\exp'=\exp$, $\exp(-x)=1/\exp(x)$, and the series definition gives $\exp(0)=1$ ([[thm-derivative-of-exponential]], [[cor-exponential-reciprocal-and-positivity]], [[def-real-exponential-function-and-e]]).

[L2] Products and composites satisfy [[thm-algebra-of-derivatives]] and [[thm-chain-rule]].

[L3] Differentiability implies continuity, and a continuous function with zero derivative on an interval is constant ([[cor-differentiable-implies-continuous]], [[cor-zero-derivative-implies-constant]]).

## Proof

**Proof technique:** direct.

1.1 Define $h(x)=y(x)\exp(-x)$. By [L1] and [L2], $h'(x)=y'(x)\exp(-x)-y(x)\exp(-x)=0$.  [given, L1, L2]

2.1 The differentiable function $h$ is continuous, so [L3] makes it constant; $h(0)=y(0)\exp(0)=1$.  [step 1.1, L1, L3]

3.1 Thus $y(x)\exp(-x)=1$, and multiplying by $\exp(x)$ gives $y(x)=\exp(x)$.  [step 2.1, L1, algebra] ∎
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

### `thm-normalized-exponential-functional-equation`

````markdown
---
id: thm-normalized-exponential-functional-equation
kind: theorem
title: "Regular normalized multiplicative Cauchy equations characterize the exponential"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-exponential-ivp-uniqueness, thm-exponential-addition-formula, thm-exponential-is-strictly-increasing, cor-exponential-reciprocal-and-positivity, def-real-exponential-function-and-e, thm-derivative-of-exponential, def-derivative, def-rational-power, thm-nth-roots-exist, lem-rat-embeds-dense, def-continuity-real]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "J. Lebl, Basic Analysis, Analytic Functions"
      url: "https://www.jirka.org/ra/html/sec_analfuncs.html"
    - title: "Y. Vorobets, Texas A&M MATH 409 Lecture 2-07"
      url: "https://people.tamu.edu/~yvorobets/MATH409-2013C/Lect2-07web.pdf"
    - title: "S. G. Johnson, Exponential Functions"
      url: "https://math.mit.edu/~stevenj/exponential.pdf"
pipeline_run: null
---

## Statement

The exponential function is the unique continuous $F:\mathbb R\to(0,\infty)$ satisfying $F(x+y)=F(x)F(y)$ and $F(1)=e$. It is also the unique function differentiable at $0$ satisfying the functional equation, $F(0)=1$, and $F'(0)=1$.

## Facts & Assumptions

**Given:** A function $F$ satisfying one of the two normalizations.

[L1] The exponential satisfies $\exp(x+y)=\exp(x)\exp(y)$, is continuous and positive, obeys $\exp(0)=1$, $\exp(1)=e$, and $\exp'=\exp$, and is the unique normalized solution of $y'=y$ ([[thm-exponential-addition-formula]], [[thm-exponential-is-strictly-increasing]], [[cor-exponential-reciprocal-and-positivity]], [[def-real-exponential-function-and-e]], [[thm-derivative-of-exponential]], [[thm-exponential-ivp-uniqueness]]).

[L2] Positive $n$-th roots exist uniquely ([[thm-nth-roots-exist]]), rational powers are [[def-rational-power]], and rationals are dense ([[lem-rat-embeds-dense]]).

## Proof

**Proof technique:** cases.

1.1 Under continuity and $F(1)=e$, the equation gives $F(n)=e^n$, $F(-n)=e^{-n}$, and uniqueness of positive roots gives $F(m/n)=e^{m/n}$ for rationals $m/n$. Density and continuity then give $F(x)=\exp(x)$ for every real $x$.   [assume-case continuous, L1, L2, given]

1.2 Under differentiability at $0$, $\frac{F(x+h)-F(x)}h=F(x)\frac{F(h)-1}h$, so $F'(x)=F(x)F'(0)=F(x)$. With $F(0)=1$, [L1] gives $F=\exp$.   [assume-case differentiable, given, L1, algebra]

2.1 The exponential itself satisfies both normalizations, so both uniqueness assertions follow.  [step 1.1, step 1.2, L1, cases-exhaustive] ∎
````

### `thm-picard-iterates-for-exponential`

````markdown
---
id: thm-picard-iterates-for-exponential
kind: theorem
title: "Picard iteration from $1$ produces the exponential partial sums"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-oriented-integral, thm-linearity-of-the-integral, thm-ftc-first-part, thm-ftc-second-part, lem-derivative-of-a-power, thm-uniform-limit-interchanges-riemann-integration, thm-uniform-limit-continuous-real-functions, thm-continuous-implies-integrable, thm-algebra-of-continuous-functions, thm-power-series-uniform-on-compact-subintervals, lem-exponential-series-has-infinite-radius, def-real-exponential-function-and-e, def-factorial-and-falling-factorial, def-finite-sum, lem-finite-sum-laws, thm-induction-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
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
    - title: "J. Lebl, Basic Analysis, Picard's Theorem"
      url: "https://www.jirka.org/ra/html/sec_picard.html"
    - title: "University of Pennsylvania MATH 3600, Section 34"
      url: "https://www2.math.upenn.edu/~ancoop/3600/section-34.html"
pipeline_run: null
---

## Statement

Define $u_0(x)=1$ and $u_{r+1}(x)=1+\int_0^x u_r(t)\,dt$. Then
$$u_r(x)=\sum_{k=0}^{r}\frac{x^k}{\iota(k!)}$$
and $u_r\to\exp$ uniformly on every bounded interval.
Moreover,
$$\exp(x)=1+\int_0^x\exp(t)\,dt,$$
and differentiating this integral equation recovers $\exp' = \exp$ and $\exp(0)=1$.

## Facts & Assumptions

**Given:** The displayed recursion with the oriented integral of [[def-oriented-integral]].

[L1] For $k\in\mathbb N$, the derivative of $t^{k+1}/\iota(k+1)$ is $t^k$ ([[lem-derivative-of-a-power]]), so the second fundamental theorem evaluates its oriented integral ([[thm-ftc-second-part]], [[def-oriented-integral]]); the integral is linear over finite sums ([[thm-linearity-of-the-integral]]), and the factorial recurrence is [[def-factorial-and-falling-factorial]].

[L2] The exponential series has infinite radius ([[lem-exponential-series-has-infinite-radius]], [[def-real-exponential-function-and-e]]), and a power series converges uniformly on compact subintervals of its interval of convergence ([[thm-power-series-uniform-on-compact-subintervals]]).

[L3] Polynomial functions are continuous ([[thm-algebra-of-continuous-functions]]); uniform limits of continuous real functions are continuous ([[thm-uniform-limit-continuous-real-functions]]); continuous functions on compact intervals are integrable ([[thm-continuous-implies-integrable]]); uniform limits interchange with Riemann integration ([[thm-uniform-limit-interchanges-riemann-integration]]); and the first fundamental theorem differentiates an integral of a continuous function ([[thm-ftc-first-part]]).

## Proof

**Proof technique:** induction.

1.1 At $r=0$, $u_0=1$, the stated finite sum.  [base, given]

1.2 If the formula holds at $r$, integrate its finite sum termwise from $0$ to $x$. By [L1], the integral of $t^k/\iota(k!)$ is $x^{k+1}/\iota((k+1)!)$, giving the formula at $r+1$.   [ih, L1, given]

2.1 Hence the iterates are precisely the partial sums of the exponential series. Its infinite radius and [L2] give uniform convergence on every bounded interval.   [step 1.1, step 1.2, L2, given]

3.1 Fix $x$ and work on the compact interval with endpoints $0$ and $x$. The polynomial iterates are continuous and integrable there, and step 2.1 gives uniform convergence to $\exp$. Thus [L3] lets the integrals in $u_{r+1}(x)=1+\int_0^x u_r(t)\,dt$ pass to the limit, giving $\exp(x)=1+\int_0^x\exp(t)\,dt$, with the orientation supplied by [[def-oriented-integral]] when $x<0$.  [step 2.1, L3, given]

4.1 Step 2.1 and [L3] make $\exp$ continuous. The first fundamental theorem applied to step 3.1 gives $\exp'(x)=\exp(x)$, and setting $x=0$ gives $\exp(0)=1$.  [step 2.1, step 3.1, L3, discharge-induction] ∎
````

