# Audit proof-refuter brief — Wave 12, A6

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

- high risk (5): 3 cited facts; boundary-sensitive language; analytic limiting/completeness language

## Target item — `lem-uniform-limits-linear-combinations`

Normalized current SHA-256: `5de0cb26a95e498393f22e3f304afa88cf9d7e25170c80f835166bec167405af`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: lem-uniform-limits-linear-combinations
kind: lemma
title: "Uniform limits respect sums and scalar multiples"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pointwise-uniform-and-uniformly-cauchy-convergence, lem-of-abs-value, lem-of-triangle-inequality]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §6.1"
      url: "https://www.jirka.org/ra/html/sec_puconv.html"
    - title: "W. Trench, Introduction to Real Analysis"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a set. Suppose $f_k\to f$ and $g_k\to g$ uniformly on $X$, where
all functions are real valued. Then, for all $\alpha,\beta\in\mathbb{R}$,

$$\alpha f_k+\beta g_k\longrightarrow \alpha f+\beta g$$

uniformly on $X$. In particular, uniform convergence is preserved by sums,
differences, and scalar multiples.

## Facts & Assumptions

**Given:** A set $X$, uniformly convergent sequences $f_k\to f$ and $g_k\to g$, and reals $\alpha,\beta$.

[A1] Uniform convergence gives, for every real $\eta>0$, one index after which $|f_k(x)-f(x)|<\eta$ at every $x$, and likewise for $g_k\to g$ ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

[L1] For reals $u,v$, $|u+v|\le |u|+|v|$, while $|cu|=|c||u|$ and absolute values are nonnegative ([[lem-of-triangle-inequality]], [[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 Let $\varepsilon>0$ be real and put $\eta:=\varepsilon/\bigl(2(|\alpha|+|\beta|+1)\bigr)>0$. [construct, L1]

1.2 By uniform convergence choose $N_f,N_g$ such that $|f_k(x)-f(x)|<\eta$ for $k\ge N_f$ and all $x$, and $|g_k(x)-g(x)|<\eta$ for $k\ge N_g$ and all $x$. [A1, choose]

2.1 Choose an index $N$ at least as large as $N_f$ and $N_g$. For every $k\ge N$ and $x\in X$, one has $|\alpha(f_k(x)-f(x))+\beta(g_k(x)-g(x))|\le |\alpha|\eta+|\beta|\eta<\varepsilon$. [step 1.1, step 1.2, L1, choose, algebra]

3.1 The expression in step 2.1 is $|(\alpha f_k+\beta g_k)(x)-(\alpha f+\beta g)(x)|$, and the index $N$ serves every $x$, so the asserted convergence is uniform. [step 2.1, A1] ∎
````

## Wave 12 provenance row

```json
{
  "id": "lem-uniform-limits-linear-combinations",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
  ],
  "rationale": "Uniform limits respect sums and scalar multiples: The open textbooks give the corresponding uniform-convergence definition, permanence/interchange theorem, completeness result, or standard counterexample; the item reindexes sequences at zero and spells out the library’s metric, Riemann-integral, endpoint, and dependency conventions. The supplied numbered argument was audited as a local proof rather than a transcription or identifiable adaptation of a source proof.",
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
        "1.2",
        "3.1"
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
      "fact": "L1",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with $|x|$ the absolute value ([[def-abs-value]]). Then $$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$ and, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Let $\\varepsilon>0$ be real and put $\\eta:=\\varepsilon/\\bigl(2(|\\alpha|+|\\beta|+1)\\bigr)>0$.",
      "step": "1.1",
      "inputs": [
        "construct",
        "L1"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "By uniform convergence choose $N_f,N_g$ such that $|f_k(x)-f(x)|<\\eta$ for $k\\ge N_f$ and all $x$, and $|g_k(x)-g(x)|<\\eta$ for $k\\ge N_g$ and all $x$.",
      "step": "1.2",
      "inputs": [
        "A1",
        "choose"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Choose an index $N$ at least as large as $N_f$ and $N_g$. For every $k\\ge N$ and $x\\in X$, one has $|\\alpha(f_k(x)-f(x))+\\beta(g_k(x)-g(x))|\\le |\\alpha|\\eta+|\\beta|\\eta<\\varepsilon$.",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "step 1.2",
        "L1",
        "choose",
        "algebra"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "The expression in step 2.1 is $|(\\alpha f_k+\\beta g_k)(x)-(\\alpha f+\\beta g)(x)|$, and the index $N$ serves every $x$, so the asserted convergence is uniform.",
      "step": "3.1",
      "inputs": [
        "step 2.1",
        "A1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "Statement: The quantified set X may be empty; all pointwise assertions are vacuous there, and in the Cauchy criterion the constructed limit is the unique empty function. Let $X$ be a set. Suppose $f_k\\to f$ and $g_k\\to g$ uniformly on $X$, where all functions are real valued. Then, for all $\\alpha,\\beta\\in\\mathbb{R}$, $$\\alpha f_k+\\beta g_k\\longrig"
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "lem-uniform-limits-linear-combinations: zero is not a distinguished parameter case in the claim; ordinary zero-valued functions, vectors, or bounds remain covered by its universal hypotheses."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "lem-uniform-limits-linear-combinations: there is no cardinal, dimension, or exponent parameter with a separate value-one branch in this claim."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "lem-uniform-limits-linear-combinations: the Statement has no collapse, coincidence, constant-family, or equality-case branch beyond cases already included by its universal estimates."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "lem-uniform-limits-linear-combinations: no closed-interval endpoint, exponent endpoint, or finite-index endpoint affects the assertion."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "lem-uniform-limits-linear-combinations: the proof makes no choice from a family whose nonemptiness is not already supplied; any witness used is explicit or uniquely determined."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "lem-uniform-limits-linear-combinations: the asserted result has no biconditional requiring a forward implication; any “if and only if” appearing inside a cited definition is not a new proof obligation here."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "lem-uniform-limits-linear-combinations: the asserted result has no biconditional requiring a reverse implication; any equivalence used as a dependency is consumed only in the direction named by the numbered proof."
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
    "source": "lem-uniform-limits-linear-combinations",
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
    "source": "lem-uniform-limits-linear-combinations",
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
  },
  {
    "source": "lem-uniform-limits-linear-combinations",
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

