## Selection reasons

- critical risk (9): 11 declared dependencies; 9 cited facts; existence, choice, uniqueness, or well-definedness; boundary-sensitive language

## Target item — `thm-normalized-exponential-functional-equation`

Normalized current SHA-256: `320bdc45524a752781b0a431bb19cefa0fc4a42d7c864bec24a6399cfdcab031`

The complete exact-current item follows, including frontmatter:

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

## Wave 14 provenance row

```json
{
  "id": "thm-normalized-exponential-functional-equation",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://people.tamu.edu/~yvorobets/MATH409-2013C/Lect2-07web.pdf",
    "https://math.mit.edu/~stevenj/exponential.pdf"
  ],
  "rationale": "The Texas A&M notes give uniqueness of the continuous positive multiplicative function normalized at 1, and Johnson derives exponential form from continuity of a nonzero multiplicative solution. The item combines that standard characterization with the differentiability-at-zero normalization F(0)=F'(0)=1, so no one located source has its exact two-part packaging.",
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
      "source": "thm-exponential-addition-formula",
      "source_section": "Statement",
      "quote": "For all real $x,y$,\n$$\\exp(x+y)=\\exp(x)\\exp(y).$$",
      "uses": [
        "1.1",
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L1",
      "source": "cor-exponential-reciprocal-and-positivity",
      "source_section": "Statement",
      "quote": "For every real $x$, $\\exp(x)>0$ and\n$$\\exp(-x)=\\frac1{\\exp(x)}.$$",
      "uses": [
        "1.1",
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-real-exponential-function-and-e",
      "source_section": "Definition",
      "quote": "For $x\\in\\mathbb R$, define\n$$\\exp(x):=\\sum_{n=0}^{\\infty}\\frac{x^n}{\\iota(n!)}, \\qquad e:=\\exp(1),$$",
      "uses": [
        "1.1",
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-derivative-of-exponential",
      "source_section": "Statement",
      "quote": "The real exponential function is $C^\\infty$, and for every $m\\in\\mathbb N$,\n$$\\exp^{(m)}=\\exp.$$\nIn particular $(\\exp)'=\\exp$.",
      "uses": [
        "1.1",
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-exponential-is-strictly-increasing",
      "source_section": "Statement",
      "quote": "The exponential function is continuous and strictly increasing on $\\mathbb R$.",
      "uses": [
        "1.1",
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-exponential-ivp-uniqueness",
      "source_section": "Statement",
      "quote": "If $y:\\mathbb R\\to\\mathbb R$ is differentiable, $y'=y$, and $y(0)=1$, then $y=\\exp$.",
      "uses": [
        "1.1",
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-nth-roots-exist",
      "source_section": "Statement",
      "quote": "Let $\\mathbb{R}$ be a complete ordered field ([[def-complete-ordered-field]]).\nFor every $a \\in \\mathbb{R}$ with $a \\ge 0$ and every $n \\in \\mathbb{N}$ with\n$n \\ge 1$ there is a **unique** $s \\in \\mathbb{R}$ with $s \\ge 0$ and $s^n = a$\n([[def-integer-power]]); we write\n\n$$s = a^{1/n} = \\sqrt[n]{a}.$$\n\nMoreover $a^{1/n} > 0$ when $a > 0$, and $a^{1/1} = a$.\n\n**This generalises the published [[thm-of-square-roots]], and the case $n = 2$ is\nnot new.** That theorem already produces the unique $\\sqrt{a} \\ge 0$ with\n$(\\sqrt{a})^2 = a$, and it is cited as such throughout the library; the notation\n$a^{1/2}$ introduced here is the same number. What is new is the passage to\ngeneral $n$: the completed square that drives the $n = 2$ argument has no direct\nanalogue, and its place is taken by the factorisation of $b^n - a^n$ and the\nresulting Lipschitz estimate ([[lem-power-difference-factorisation]]).",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-rational-power",
      "source_section": "Definition",
      "quote": "Let $a \\in \\mathbb{R}$ with $a > 0$ and let $r \\in \\mathbb{Q}$ ([[def-rationals]]).\n\nEvery rational has a representative with positive denominator\n([[lem-rat-positive-denominator]]), so write $r = m/n$ with $m \\in \\mathbb{Z}$\nand $n$ a positive integer; a positive integer is the image of a unique natural\n$\\ge 1$ ([[lem-nat-embeds-int]]), and we write $n$ for that natural too. Define\n\n$$a^{r} := \\big(a^{1/n}\\big)^{m},$$\n\nwhere $a^{1/n}$ is the unique nonnegative $n$-th root of $a$\n([[thm-nth-roots-exist]]) and the outer exponent is an integer power\n([[def-integer-power]]). The outer power is legitimate because $a^{1/n} > 0$ when\n$a > 0$, so it has an inverse and negative integer exponents are allowed.\n\n**Well-definedness.** The right-hand side must not depend on which representative\n$m/n$ of $r$ was chosen. It does not: that is [[lem-rational-power-well-defined]],\nwhich is recorded in this item's `justified_by` rather than in its `deps`, since\nit is a statement *about* the operation defined here and therefore depends on\nthis definition.\n\n**The base must be positive.** For $a < 0$ the same formula is not a definition\nat all, because different representatives of the same rational give different\nanswers, or no answer: see [[fs-rational-power-of-negative-base]], which is\nexactly the item that justifies the restriction.\n\n**Supplementary clause for the base $0$.** For $a = 0$ and rational $r > 0$\n([[def-rat-order]]) the displayed formula still makes sense and still does not\ndepend on the representative: $r > 0$ forces $m \\ge 1$, and\n$\\big(0^{1/n}\\big)^{m} = 0^{m} = 0$ ([[thm-nth-roots-exist]] applies to every\n$a \\ge 0$). So we set $0^{r} = 0$ for rational $r > 0$. For $r < 0$ the\nexpression $0^{r}$ is left undefined, since $0$ has no inverse. This clause is\nwhat lets the inequalities later on this page be stated for nonnegative entries\nrather than for positive ones only.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-rat-embeds-dense",
      "source_section": "Statement",
      "quote": "The map $q \\mapsto \\hat q$ ([[def-real-numbers]]) is an embedding of ordered\nfields. Every real is approximated by rationals: for $x \\in \\mathbb{R}$ and\nrational $\\varepsilon > 0$ there is $q \\in \\mathbb{Q}$ with\n$|x - \\hat q| < \\hat\\varepsilon$. Consequently, strictly between any two\nreals lies a rational.",
      "uses": [
        "1.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Under continuity and $F(1)=e$, the equation gives $F(n)=e^n$, $F(-n)=e^{-n}$, and uniqueness of positive roots gives $F(m/n)=e^{m/n}$ for rationals $m/n$. Density and continuity then give $F(x)=\\exp(x)$ for every real $x$.   [assume-case continuous, L1, L2, given]",
      "step": "1.1",
      "inputs": [
        "L1",
        "L2",
        "assume-case continuous",
        "given"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "Under differentiability at $0$, $\\frac{F(x+h)-F(x)}h=F(x)\\frac{F(h)-1}h$, so $F'(x)=F(x)F'(0)=F(x)$. With $F(0)=1$, [L1] gives $F=\\exp$.   [assume-case differentiable, given, L1, algebra]",
      "step": "1.2",
      "inputs": [
        "L1",
        "assume-case differentiable",
        "given",
        "algebra"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "The exponential itself satisfies both normalizations, so both uniqueness assertions follow.  [step 1.1, step 1.2, L1, cases-exhaustive] ∎",
      "step": "2.1",
      "inputs": [
        "1.1",
        "1.2",
        "L1",
        "cases-exhaustive"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "Both function domains are the fixed line R."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Step 1.1 derives F(0)=1 in the continuous case, and step 1.2 assumes and propagates the normalized value in the differentiable case."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Step 1.1 uses the normalization F(1)=e and step 1.2 includes the derivative normalization 1."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "The positivity codomain prevents the zero-function degeneracy."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "R has no finite endpoints."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 2.1 uses the unique positive nth root, so no ambiguous root choice remains."
    },
    {
      "case": "iff-forward",
      "status": "checked",
      "evidence": "Step 1.1 is intended to verify that exp has both sets of defining properties."
    },
    {
      "case": "iff-reverse",
      "status": "checked",
      "evidence": "Steps 1.1 and 1.2 prove uniqueness from each set of defining properties."
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "thm-normalized-exponential-functional-equation",
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
    "source": "thm-normalized-exponential-functional-equation",
    "sourcePage": "the-exponential-function",
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
    "source": "thm-normalized-exponential-functional-equation",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "thm-exponential-is-strictly-increasing",
    "declared_target": "thm-exponential-is-strictly-increasing",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-exponential-function",
    "targetBatch": "wave14-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-normalized-exponential-functional-equation",
    "sourcePage": "the-exponential-function",
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
    "source": "thm-normalized-exponential-functional-equation",
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
    "source": "thm-normalized-exponential-functional-equation",
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
    "source": "thm-normalized-exponential-functional-equation",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "def-derivative",
    "declared_target": "def-derivative",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-normalized-exponential-functional-equation",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "def-rational-power",
    "declared_target": "def-rational-power",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-normalized-exponential-functional-equation",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "thm-nth-roots-exist",
    "declared_target": "thm-nth-roots-exist",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-normalized-exponential-functional-equation",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "lem-rat-embeds-dense",
    "declared_target": "lem-rat-embeds-dense",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-normalized-exponential-functional-equation",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "def-continuity-real",
    "declared_target": "def-continuity-real",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
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

## Full exact-current text of every cited or declared item (11)

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

### `def-continuity-real`

````markdown
---
id: def-continuity-real
kind: definition
title: "Continuity of $f : A \\to \\mathbb{R}$ at a point of $A$ and on $A$: the $\\varepsilon$-$\\delta$ condition, its agreement with $\\lim_{x \\to c} f(x) = f(c)$ at a limit point, and continuity at an isolated point"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function-limit, def-limit-point-r, def-neighbourhood-r, def-open-and-closed-in-r, def-interval, lem-of-abs-value, def-complete-ordered-field]
justified_by: []
aliases: [def-continuity-at-a-point-r]
forward_refs: [cex-dirichlet-is-nowhere-continuous]
landmark: true
short: "continuity of a real function"
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
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.2"
      url: "https://www.jirka.org/ra/"
    - title: "E. Zakon, Mathematical Analysis, §4.1: Basic Definitions"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/04%3A_Function_Limits_and_Continuity/4.01%3A_Basic_Definitions"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field with its order and
absolute value ([[def-complete-ordered-field]], [[lem-of-abs-value]]), and
neighbourhoods are those of [[def-neighbourhood-r]].

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$. Then
$f$ is **continuous at $c$** when

$$(\forall \varepsilon > 0)\ (\exists \delta > 0)\ (\forall x \in A)\ \bigl[\ |x - c| < \delta \ \Longrightarrow\ |f(x) - f(c)| < \varepsilon\ \bigr],$$

with $\varepsilon$ and $\delta$ ranging over the **positive reals**. In the
language of neighbourhoods: for every real $\varepsilon > 0$ there is a real
$\delta > 0$ with

$$f\bigl(A \cap N_{\delta}(c)\bigr) \;\subseteq\; N_{\varepsilon}\bigl(f(c)\bigr).$$

$f$ is **continuous on $A$** when it is continuous at every point of $A$.

**The point $c$ is required to lie in $A$, and the condition is unpunctured.**
Both differ from [[def-function-limit]], and deliberately. There the quantifier
runs over $0 < |x - c| < \delta$, which removes $x = c$; here $x = c$ is allowed,
and at $x = c$ the implication reads $|f(c) - f(c)| = 0 < \varepsilon$, which is
automatic. So allowing $x = c$ costs nothing, and it is what lets the definition
be stated at every point of $A$, including the points where no limit exists.

**Three clauses, and all three are part of the definition.**

1. **At a limit point.** Suppose $c \in A$ is a limit point of $A$
   ([[def-limit-point-r]]). Then $f$ is continuous at $c$ if and only if the
   limit of $f$ at $c$ exists and
   $$\lim_{x \to c} f(x) \;=\; f(c)$$
   ([[def-function-limit]]). Indeed, for a given $\varepsilon > 0$ a $\delta$
   witnessing continuity witnesses the limit condition, because the limit
   condition quantifies over a subset of the points continuity quantifies over;
   and conversely a $\delta$ witnessing $\lim_{x \to c} f(x) = f(c)$ witnesses
   continuity, because the one point it omits, $x = c$, satisfies
   $|f(c) - f(c)| < \varepsilon$ anyway.

2. **At an isolated point.** Suppose $c \in A$ is an isolated point of $A$
   ([[def-limit-point-r]]), so that $N_{\eta}(c) \cap A = \{c\}$ for some real
   $\eta > 0$. Then **every** $f : A \to \mathbb{R}$ is continuous at $c$: take
   $\delta := \eta$, so that the only $x \in A$ with $|x - c| < \delta$ is $c$
   itself, and $|f(c) - f(c)| = 0 < \varepsilon$.

3. **On a set.** Continuity on $A$ is continuity at each point of $A$, and
   nothing more. It is not a condition relating $f$ to points outside $A$.

Every point of $A$ is either a limit point of $A$ or an isolated point of $A$,
and never both ([[def-limit-point-r]]), so clauses 1 and 2 between them describe
continuity at every point of $A$.

**This is not the raw $\varepsilon$-$\delta$ formula of
[[fs-limit-unique-at-every-point-of-the-domain]].** That item records what goes
wrong when the *punctured* formula of [[def-function-limit]] is written down at
an arbitrary point of the domain: at an isolated point it is satisfied
vacuously by every real $L$ at once, so it defines nothing, and this library
therefore leaves $\lim_{x \to c} f(x)$ **undefined** at an isolated point.
Continuity at an isolated point is a different matter: the formula above is not
vacuous — it is a genuine condition on $f(c)$, satisfied because $f(c)$ is the
only value being compared with itself — and it names a single, well-defined
property. The limit is undefined there; the continuity is defined, and is
automatic. Clause 1 is the only place where the two notions meet, and it is
stated only where the limit exists as a notion.

**Where the distinction disappears.** If $A$ is an open subset of $\mathbb{R}$
([[def-open-and-closed-in-r]]), then every $c \in A$ has some
$N_{\eta}(c) \subseteq A$, and a punctured neighbourhood is never empty
([[def-neighbourhood-r]]), so every point of $A$ is a limit point of $A$ and
clause 1 covers the whole of $A$. The same holds when $A$ is a nondegenerate
interval ([[def-interval]]). Isolated points are what force clause 2 to exist at
all, and they occur as soon as $A$ is allowed to be an arbitrary subset of
$\mathbb{R}$, as in $A = \{0\} \cup [1,2]$.

## Remarks

- **Continuity is local.** If $\eta > 0$ and $g : A \to \mathbb{R}$ agrees with
  $f$ on $A \cap N_{\eta}(c)$, then $f$ is continuous at $c$ if and only if $g$
  is: any $\delta$ may be replaced by $\min\{\delta, \eta\}$, after which the
  condition only ever evaluates the two functions where they agree. So
  continuity at $c$ sees only an arbitrarily small neighbourhood of $c$, exactly
  as the limit does ([[lem-limit-is-local]]).

- **Continuity passes to subsets of the domain.** If $B \subseteq A$ and
  $c \in B$, then continuity of $f$ at $c$ gives continuity of the restriction
  $f|_B$ at $c$, with the same $\delta$: the condition on $f|_B$ quantifies over
  fewer points. The converse fails, and the standard witness is the indicator of
  $\mathbb{Q}$ restricted to $\mathbb{Q}$, which is constant and hence
  continuous, while the indicator itself is continuous nowhere
  ([[cex-dirichlet-is-nowhere-continuous]]).

- **The radius is a real number.** As in [[def-neighbourhood-r]], $\varepsilon$
  and $\delta$ range over the positive reals here. Restricting either quantifier
  to the positive rationals defines the same relation, by the passage recorded
  in [[def-function-limit]]: below every positive real lies a positive rational
  ([[lem-rat-embeds-dense]]), and a real $\delta$ may be shrunk to a rational
  one below it.

- **The word *continuous* is used for two things in this library, and they
  agree.** [[def-metric-continuity]] defines continuity of a map between metric
  spaces, and $A \subseteq \mathbb{R}$ carries the metric $d(x,y) = |x-y|$. The
  two notions coincide, and that is proved, not assumed:
  [[lem-real-and-metric-notions-agree]] is the dictionary, and it is stated on
  this page precisely so that no later item has to guess.
````

### `def-derivative`

````markdown
---
id: def-derivative
kind: definition
title: "The derivative $f'(c) = \\lim_{x \\to c} \\frac{f(x) - f(c)}{x - c}$ of $f : A \\to \\mathbb{R}$ at a point $c \\in A$ that is a limit point of $A$, and differentiability on a set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function-limit, lem-function-limit-unique, def-limit-point-r, def-interval, def-neighbourhood-r, def-complete-ordered-field, def-continuity-real, lem-limit-is-local]
justified_by: []
forward_refs: [cex-absolute-value-is-not-differentiable-at-zero]
aliases: [def-differentiable, def-differentiability]
landmark: true
short: "the derivative at a point"
verification:
  audited: 2026-07-28
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Derivative (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Derivative"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5 (Def. 5.1)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.1"
      url: "https://www.jirka.org/ra/"
    - title: "T. Tao, Analysis I, 3rd ed., §10.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "T. Gantumur, Differentiation"
      url: "https://www.math.mcgill.ca/gantumur/math248f19/differentiation.pdf"
    - title: "J. Lebl, Basic Analysis I, The Derivative"
      url: "https://www.jirka.org/ra/html/der_chapter.html"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]), neighbourhoods are those of
[[def-neighbourhood-r]] and limit points those of [[def-limit-point-r]].

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$ be a
**limit point of $A$**. The **difference quotient of $f$ at $c$** is the function

$$q_{f,c} : A \setminus \{c\} \to \mathbb{R}, \qquad q_{f,c}(x) := \frac{f(x) - f(c)}{x - c} .$$

The division is legitimate at every point of the domain, since $x \ne c$ gives
$x - c \ne 0$.

**The point $c$ is a limit point of $A \setminus \{c\}$, not merely of $A$.**
For every real $\varepsilon > 0$ the punctured neighbourhood
$N^{*}_{\varepsilon}(c)$ omits $c$, so

$$N^{*}_{\varepsilon}(c) \cap A \;=\; N^{*}_{\varepsilon}(c) \cap (A \setminus \{c\}) ,$$

and the left-hand side is nonempty because $c$ is a limit point of $A$. So
$q_{f,c}$ is a function on a set having $c$ as a limit point, and
$\lim_{x \to c} q_{f,c}(x)$ is a notion that [[def-function-limit]] defines.

$f$ is **differentiable at $c$** when that limit exists, and then the
**derivative of $f$ at $c$** is

$$f'(c) \;:=\; \lim_{x \to c} q_{f,c}(x) \;=\; \lim_{x \to c} \frac{f(x) - f(c)}{x - c} .$$

**Two obligations are carried by that notation, and both are discharged here.**

1. **Uniqueness.** Writing $f'(c)$ treats the right-hand side as a name for a
   single real number. That is legitimate: $c$ is a limit point of the domain
   $A \setminus \{c\}$ of $q_{f,c}$, so at most one real can satisfy the
   $\varepsilon$-$\delta$ condition, by [[lem-function-limit-unique]] applied to
   $q_{f,c}$. Two reals both meeting the condition are therefore equal, and the
   symbol denotes.
2. **Meaningfulness.** The hypothesis that $c$ is a limit point of $A$ is not
   decoration. At an **isolated** point of $A$ the punctured condition
   $0 < |x - c| < \delta$ is met by no point of the domain at all, so the
   $\varepsilon$-$\delta$ formula is satisfied vacuously by *every* real at
   once; this is why [[def-function-limit]] leaves the limit undefined there,
   and it is why this library defines $f'(c)$ only at a limit point of $A$. At
   an isolated point of its domain a function is neither differentiable nor
   non-differentiable here: the question is not posed.

**The limit sees only $A \setminus \{c\}$, so how the difference quotient is
extended to $c$ is irrelevant.** Let $Q : A \to \mathbb{R}$ agree with
$q_{f,c}$ at every point of $A \setminus \{c\}$, and let $L \in \mathbb{R}$.
Then $\lim_{x \to c} Q(x) = L$ if and only if $\lim_{x \to c} q_{f,c}(x) = L$.
Both conditions read: for every real $\varepsilon > 0$ there is a real
$\delta > 0$ such that every point $x$ of the relevant domain with
$0 < |x - c| < \delta$ satisfies $|{\cdot} - L| < \varepsilon$
([[def-function-limit]]). The clause $0 < |x - c|$ removes $x = c$ from both
quantifiers, so in both cases the points quantified over are exactly the
$x \in A \setminus \{c\}$ with $0 < |x - c| < \delta$, at which $Q$ and
$q_{f,c}$ take the same value. The two conditions are the same condition.

**Differentiability on a set.** For $S \subseteq A$, $f$ is **differentiable on
$S$** when it is differentiable at every $c \in S$; implicit in that phrase is
that every point of $S$ is a limit point of $A$. $f$ is **differentiable** when
it is differentiable on the whole of $A$.

**Restriction of the domain.** Let $B \subseteq A$, let $c \in B$ and suppose
$c$ is a limit point of $B$. If $f$ is differentiable at $c$, then so is the
restriction $f|_B : B \to \mathbb{R}$, and

$$(f|_B)'(c) \;=\; f'(c) .$$

Indeed $B \setminus \{c\} \subseteq A \setminus \{c\}$; the displayed identity
of punctured neighbourhoods above, applied to $B$, shows that $c$ is a limit
point of $B \setminus \{c\}$; the difference quotient $q_{f|_B, c}$ is the
restriction of $q_{f,c}$ to $B \setminus \{c\}$, since $f|_B(c) = f(c)$; and
claim 2 of [[lem-limit-is-local]] carries the limit to that restriction.

**Every point of a nondegenerate interval is a limit point of it.** Let
$J \subseteq \mathbb{R}$ be order-convex ([[def-interval]]) with at least two
elements and let $p \in J$. Choose $q \in J$ with $q \ne p$, and let a real
$\varepsilon > 0$ be given. If $p < q$, put $y := p + \tfrac{1}{2}\min\{\varepsilon,\ q - p\}$;
then $p < y$, and $y - p \le \tfrac{1}{2}(q-p) < q - p$, so $p < y < q$ and
order-convexity gives $y \in J$, while $0 < |y - p| < \varepsilon$. If $q < p$,
the point $y := p - \tfrac{1}{2}\min\{\varepsilon,\ p - q\}$ serves in the same
way. So $N^{*}_{\varepsilon}(p) \cap J \ne \varnothing$ for every real
$\varepsilon > 0$, that is, $p$ is a limit point of $J$
([[def-limit-point-r]]).

Consequently, for $f$ defined on a nondegenerate interval $I$, the symbol
$f'(c)$ is meaningful at **every** $c \in I$, endpoints included. At an endpoint
the difference quotient is taken over the points of $I$ lying on the one side
that is available, so what other texts call a one-sided derivative is, here,
simply the derivative of $f$ on $I$.

## Remarks

- **Notation.** $f'(c)$ and $\frac{df}{dx}(c)$ denote the same real number, and
  this library uses the first. Neither is an operation performed on a symbol
  $x$: the variable in the second is a name for the argument and nothing more.

- **Differentiability is a property of the pair $(f, A)$ at $c$, not of $f$
  alone.** The restriction clause above goes in one direction only, and the
  converse fails. Take $A := \mathbb{R}$, $f(x) := |x|$, $B := [0,\infty)$ and
  $c := 0$. Then $f|_B$ is the identity on $B$, whose difference quotient at $0$
  is constantly $1$, so $f|_B$ is differentiable at $0$ with derivative $1$;
  that $f$ itself is not differentiable at $0$ is
  [[cex-absolute-value-is-not-differentiable-at-zero]] on the companion page.
  So enlarging the domain can destroy differentiability, and the phrase
  "$f$ is differentiable at $c$" always carries the domain with it.

- **The relation to continuity is not definitional.** [[def-continuity-real]]
  is a condition on $f$ near $c$ that does not mention a quotient, and it is
  defined at every point of $A$, isolated points included, whereas
  differentiability is defined only at limit points of $A$. That
  differentiability implies continuity is a theorem on this page and not a
  reading of the definitions.

- **No second derivative and no one-sided derivative is introduced here.**
  Both are standard, and both are absent from this page on purpose;
  [[rem-derivative-conventions]] records exactly what is fixed and what is left
  open at this point in the reading order.
````

### `def-rational-power`

````markdown
---
id: def-rational-power
kind: definition
title: "Rational powers $a^r$ of a positive base"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-nth-roots-exist, def-integer-power, def-rationals, lem-rat-positive-denominator, lem-nat-embeds-int, def-rat-order, lem-power-monotone, lem-power-laws, lem-of-inverse-positive]
justified_by: [lem-rational-power-well-defined]
aliases: []
landmark: true
short: "$a^{m/n} := (a^{1/n})^m$, $a>0$"
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-04
    scope: published-audit-targeted
    context_sha256: 22067f1978d2f781dd7327a6f5c81cccbbc2009bd13885930f7d56ba5a2ceb5e
    item_sha256: 4f75fe6e8c39549d9a1c82a4fc920d13b890d3917b367621daddcaf70f377565
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I"
      url: "https://www.jirka.org/ra/realanal.pdf"
    - title: "Radicals and rational exponents (Emory University)"
      url: "https://mathcenter.oxford.emory.edu/site/math100/radicals/"
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
    - title: "Nth root (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nth_root"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $a \in \mathbb{R}$ with $a > 0$ and let $r \in \mathbb{Q}$ ([[def-rationals]]).

Every rational has a representative with positive denominator
([[lem-rat-positive-denominator]]), so write $r = m/n$ with $m \in \mathbb{Z}$
and $n$ a positive integer; a positive integer is the image of a unique natural
$\ge 1$ ([[lem-nat-embeds-int]]), and we write $n$ for that natural too. Define

$$a^{r} := \big(a^{1/n}\big)^{m},$$

where $a^{1/n}$ is the unique nonnegative $n$-th root of $a$
([[thm-nth-roots-exist]]) and the outer exponent is an integer power
([[def-integer-power]]). The outer power is legitimate because $a^{1/n} > 0$ when
$a > 0$, so it has an inverse and negative integer exponents are allowed.

**Well-definedness.** The right-hand side must not depend on which representative
$m/n$ of $r$ was chosen. It does not: that is [[lem-rational-power-well-defined]],
which is recorded in this item's `justified_by` rather than in its `deps`, since
it is a statement *about* the operation defined here and therefore depends on
this definition.

**The base must be positive.** For $a < 0$ the same formula is not a definition
at all, because different representatives of the same rational give different
answers, or no answer: see [[fs-rational-power-of-negative-base]], which is
exactly the item that justifies the restriction.

**Supplementary clause for the base $0$.** For $a = 0$ and rational $r > 0$
([[def-rat-order]]) the displayed formula still makes sense and still does not
depend on the representative: $r > 0$ forces $m \ge 1$, and
$\big(0^{1/n}\big)^{m} = 0^{m} = 0$ ([[thm-nth-roots-exist]] applies to every
$a \ge 0$). So we set $0^{r} = 0$ for rational $r > 0$. For $r < 0$ the
expression $0^{r}$ is left undefined, since $0$ has no inverse. This clause is
what lets the inequalities later on this page be stated for nonnegative entries
rather than for positive ones only.

## Remarks

- **Consistency with integer powers.** If $r \in \mathbb{Z}$ then $r = r/1$,
  $a^{1/1} = a$ ([[thm-nth-roots-exist]]), and the definition returns
  $(a^{1})^{r} = a^{r}$ as given by [[def-integer-power]]. So the notation $a^{r}$
  is unambiguous, and rational powers extend integer powers on positive bases.
  At $r = 1/n$ it returns $\big(a^{1/n}\big)^{1} = a^{1/n}$, so the root notation
  of [[thm-nth-roots-exist]] is the special case $r = 1/n$, as intended.
- $a^{r} > 0$ for every $a > 0$ and **every** $r \in \mathbb{Q}$, the exponent $0$
  included. Writing $r = m/n$ with $n \ge 1$: the root $a^{1/n}$ is positive
  ([[thm-nth-roots-exist]]); for $m \ge 0$ the value $\big(a^{1/n}\big)^{m}$ is a
  natural power of a positive element, hence positive, which is claim 1 of
  [[lem-power-monotone]] and covers $m = 0$ as well, since $a^{0} = 1 > 0$; and for
  $m < 0$ the value is $\big(a^{1/n}\big)^{m} = \Big(\big(a^{1/n}\big)^{-m}\Big)^{-1}$
  ([[lem-power-laws]], claim 2), the inverse of a positive element, hence positive
  ([[lem-of-inverse-positive]]). Note that [[lem-power-monotone]] is stated for
  natural exponents only, so it does not by itself settle the negative case; that
  is what the inverse step is for. The exponent laws are
  [[lem-rational-power-laws]] and the order behaviour is
  [[lem-rational-power-monotone]].
- **The exponent is a rational, never a real.** Nothing on this page is a limit,
  a series or a continuous function, and $a^{r}$ is computed in finitely many
  field operations once the root is available. What would be needed to go
  further, why it is deferred here, and where the library later defines $a^{x}$
  for real $x$ are recorded in [[rem-real-exponents-deferred]].
- The convention $0^0 = 1$ of [[def-integer-power]] is untouched: $r = 0$ is not
  covered by the supplementary clause, which asks for $r > 0$. So $0^0 = 1$ while
  $0^{r} = 0$ for every rational $r > 0$. There is no inconsistency, only the
  familiar fact that the two-variable function $(a, r) \mapsto a^{r}$ has no
  continuous extension to $(0,0)$, a statement this library cannot even make yet.
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

### `lem-rat-embeds-dense`

````markdown
---
id: lem-rat-embeds-dense
kind: lemma
title: "The rationals embed densely in the reals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-real-numbers, def-real-order, thm-reals-ordered-field, thm-reals-field, def-rational-cauchy-sequence, thm-rat-ordered-field, thm-rat-field]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §5.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dense_set"
pipeline_run: null
---

## Statement

The map $q \mapsto \hat q$ ([[def-real-numbers]]) is an embedding of ordered
fields. Every real is approximated by rationals: for $x \in \mathbb{R}$ and
rational $\varepsilon > 0$ there is $q \in \mathbb{Q}$ with
$|x - \hat q| < \hat\varepsilon$. Consequently, strictly between any two
reals lies a rational.

## Facts & Assumptions

**Given:** A real $x = [(a_n)]$ and a rational $\varepsilon > 0$.

[L1] The orders of $\mathbb{Q}$ and $\mathbb{R}$; ordered-field arithmetic ([[thm-rat-ordered-field]], [[thm-reals-ordered-field]]).

[L2] Field arithmetic in $\mathbb{Q}$: $\varepsilon/2, \delta/4$ are positive rationals, and every nonzero rational $q$ has a reciprocal $1/q$ with $q \cdot (1/q) = 1$ ([[thm-rat-field]]).

[L3] Cauchy definition ([[def-rational-cauchy-sequence]]).

[L4] Real positivity via eventual rational lower bounds ([[def-real-order]]).

[L5] $\mathbb{R} = \mathcal{C}/\mathcal{N}$ is a field ([[thm-reals-field]]), and $0_{\mathbb{R}} = \hat 0$, $1_{\mathbb{R}} = \hat 1$ are the classes of the constant sequences ([[def-real-numbers]]). A multiplicative inverse there is unique: if $ab = 1_{\mathbb{R}} = ac$ then $b = b(ac) = (ba)c = c$.

## Proof

**Proof technique:** direct.

1.1 Embedding: constant sequences are Cauchy; $\hat q = \hat r$ iff the constant $q - r$ is null iff $q = r$; operations match termwise; and $q < r$ gives the constant lower bound $r - q > 0$, so $\hat q < \hat r$ and order is preserved and reflected. [L1, L4]

1.2 Fix $N$ with $|a_m - a_n| < \varepsilon/2$ for all $m, n \ge N$, and set $q = a_N$. [L3, L2]

2.1 The difference $\hat q - x$ has representative $(a_N - a_n)$ with $|a_N - a_n| < \varepsilon/2$ for $n \ge N$; hence both $\hat\varepsilon - (x - \hat q)$ and $\hat\varepsilon - (\hat q - x)$ have representatives eventually $> \varepsilon/2$, so both are positive: $|x - \hat q| < \hat\varepsilon$. [step 1.2, L4, L1]

2.2 Inverses: let $q$ be a nonzero rational. Then $\hat q \ne \hat 0 = 0_{\mathbb{R}}$ by the injectivity of step 1.1, and $1/q$ exists in $\mathbb{Q}$ by [L2]; since the operations match termwise (step 1.1), $\hat q \cdot \widehat{1/q} = \widehat{q \cdot (1/q)} = \hat 1 = 1_{\mathbb{R}}$. Inverses in $\mathbb{R}$ are unique by [L5], so $(\hat q)^{-1} = \widehat{1/q}$: the embedding preserves reciprocals. [step 1.1, L2, L5]

3.1 Density: let $x < y$; pick $\delta > 0$ rational and $N$ with the representative of $y - x$ eventually $> \delta$; set $\varepsilon = \delta/4$ and pick $q$ with $|x - \hat q| < \hat\varepsilon$; then $q' = q + 2\varepsilon$ satisfies $\hat q' - x \ge -\hat\varepsilon + 2\hat\varepsilon = \hat\varepsilon > 0$ and $y - \hat q' \ge \hat\delta - \hat\varepsilon - 2\hat\varepsilon = \hat\delta/4 > 0$, so $x < \hat q' < y$. [step 2.1, L4, L1, L2]

4.1 The rationals embed as an ordered subfield — injectively, preserving the order in both directions, the ring operations, and reciprocals — and they approximate every real arbitrarily well and separate any two reals. [step 1.1, step 2.2, step 3.1] ∎
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

### `thm-exponential-is-strictly-increasing`

````markdown
---
id: thm-exponential-is-strictly-increasing
kind: theorem
title: "The exponential function is strictly increasing"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-exponential-series-has-infinite-radius, thm-derivative-of-exponential, cor-exponential-reciprocal-and-positivity, cor-mean-value-theorem, cor-power-series-sums-are-continuous]
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

The exponential function is continuous and strictly increasing on $\mathbb R$.

## Facts & Assumptions

**Given:** The exponential function.

[L1] Its derivative equals itself ([[thm-derivative-of-exponential]]) and it is everywhere positive ([[cor-exponential-reciprocal-and-positivity]]).

[L2] The mean value theorem applies to a continuous function on a closed interval and converts a positive interior derivative into strict increase ([[cor-mean-value-theorem]]). A power-series sum is continuous at every point strictly inside its convergence interval, and the exponential series has infinite radius ([[cor-power-series-sums-are-continuous]], [[lem-exponential-series-has-infinite-radius]]).

## Proof

**Proof technique:** direct.

1.1 If $x<y$, the mean value theorem gives $\exp(y)-\exp(x)=\exp(c)(y-x)$ for some $c\in(x,y)$.  [L1, L2]

2.1 Both factors on the right are positive, so $\exp(y)>\exp(x)$. Continuity is the cited power-series conclusion.  [step 1.1, L1, L2] ∎
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

### `thm-nth-roots-exist`

````markdown
---
id: thm-nth-roots-exist
kind: theorem
title: "Existence and uniqueness of $n$-th roots: a unique $a^{1/n} \\ge 0$ with $(a^{1/n})^n = a$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complete-ordered-field, lem-sup-epsilon, lem-sup-unique, lem-power-monotone, lem-power-difference-factorisation, def-bounded-set, lem-of-add-order, thm-of-square-roots, def-integer-power, lem-of-sign-rules, lem-of-inverse-positive, cor-of-one-positive, lem-of-zero-mult, lem-of-naturals-positive, lem-of-q-embeds, def-ordered-field]
justified_by: []
aliases: [thm-nth-root, def-nth-root]
landmark: true
short: "unique $s\\ge0$ with $s^n=a$"
proof_strategy: contradiction
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
    - title: "J. Lebl, Basic Analysis I"
      url: "https://www.jirka.org/ra/realanal.pdf"
    - title: "Radicals and rational exponents (Emory University)"
      url: "https://mathcenter.oxford.emory.edu/site/math100/radicals/"
    - title: "Nth root (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nth_root"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (Thm 1.21)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §5.6"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $\mathbb{R}$ be a complete ordered field ([[def-complete-ordered-field]]).
For every $a \in \mathbb{R}$ with $a \ge 0$ and every $n \in \mathbb{N}$ with
$n \ge 1$ there is a **unique** $s \in \mathbb{R}$ with $s \ge 0$ and $s^n = a$
([[def-integer-power]]); we write

$$s = a^{1/n} = \sqrt[n]{a}.$$

Moreover $a^{1/n} > 0$ when $a > 0$, and $a^{1/1} = a$.

**This generalises the published [[thm-of-square-roots]], and the case $n = 2$ is
not new.** That theorem already produces the unique $\sqrt{a} \ge 0$ with
$(\sqrt{a})^2 = a$, and it is cited as such throughout the library; the notation
$a^{1/2}$ introduced here is the same number. What is new is the passage to
general $n$: the completed square that drives the $n = 2$ argument has no direct
analogue, and its place is taken by the factorisation of $b^n - a^n$ and the
resulting Lipschitz estimate ([[lem-power-difference-factorisation]]).

## Facts & Assumptions

**Given:** A complete ordered field $\mathbb{R}$ ([[def-complete-ordered-field]]), that is, an ordered field ([[def-ordered-field]]) with the least-upper-bound property; an element $a \ge 0$; and a natural $n \ge 1$, with $\iota(n) \in \mathbb{R}$ written $n$ ([[lem-of-naturals-positive]], [[lem-of-q-embeds]]).

[L1] Least-upper-bound property: every nonempty subset of $\mathbb{R}$ that is bounded above ([[def-bounded-set]]) has a least upper bound, and it is unique, so the notation $\sup S$ is legitimate ([[def-complete-ordered-field]], [[lem-sup-unique]]).

[L2] Epsilon characterisation of the supremum: if $S$ is nonempty and bounded above and $u = \sup S$, then for every $\varepsilon > 0$ there is $t \in S$ with $u - \varepsilon < t$ ([[lem-sup-epsilon]]).

[L3] Monotonicity of powers ([[lem-power-monotone]]): $x \mapsto x^n$ is strictly increasing on $\{x \ge 0\}$ for $n \ge 1$, hence injective there; $x \ge 0$ implies $x^n \ge 0$ and $x > 0$ implies $x^n > 0$; and $x \ge 1$ implies $x^n \ge x$.

[L4] Lipschitz estimate ([[lem-power-difference-factorisation]]): if $0 \le x \le y \le B$ and $n \ge 1$ then $0 \le y^n - x^n \le n B^{\,n-1}(y - x)$.

[L5] Order arithmetic: adding a constant preserves the order and for $c > 0$, $x < y \iff cx < cy$ ([[lem-of-add-order]], [[lem-of-sign-rules]]), both stated there for the STRICT order alone, so where a $\le$ is added or scaled below the move is that statement together with the case of equality, settled by trichotomy ([[def-ordered-field]]); $1 > 0$, which is proved in [[cor-of-one-positive]] and stated by none of those three, hence $2 = 1 + 1 > 0$; and $0 < 2^{-1} < 1$, since $0 < 1 < 2$ gives $0 < 2^{-1} < 1^{-1} = 1$ ([[lem-of-inverse-positive]], claim 2).

[L6] Trichotomy: for $x, y \in \mathbb{R}$ exactly one of $x < y$, $x = y$, $y < x$ holds; consequently any two elements have a minimum ([[def-ordered-field]]).

[L7] A product with a zero factor vanishes: $0 \cdot x = x \cdot 0 = 0$ ([[lem-of-zero-mult]]).

## Proof

**Proof technique:** contradiction.

1.1 If $a = 0$ then $s = 0$ satisfies $s \ge 0$ and $s^n = 0 = a$, since $0^n = 0^{n-1} \cdot 0 = 0$ for $n \ge 1$; so existence holds in that case and we assume $a > 0$ from here on. [given, L3, L7, algebra]

1.2 Uniqueness holds as soon as a root exists: if $u, v \ge 0$ satisfy $u^n = v^n$, then strict monotonicity of $x \mapsto x^n$ on the nonnegatives rules out both $u < v$ and $v < u$, so $u = v$ by trichotomy. [L3, L6]

1.3 Define $S = \{t \in \mathbb{R} : t \ge 0 \text{ and } t^n \le a\}$; then $0 \in S$, because $0 \ge 0$ and $0^n = 0 \le a$, so $S$ is nonempty. [given, L3, L7]

1.4 The element $M := 1 + a$ is an upper bound of $S$: since $a > 0$ and $1 > 0$ we have $M > 1$ and $M > a$, so any $t > M$ satisfies $t > 1$, whence $t^n \ge t > M > a$ and $t \notin S$. [given, L3, L5]

2.1 By the least-upper-bound property $s := \sup S$ exists in $\mathbb{R}$; moreover $s \ge 0$ because $0 \in S$, and $s \le M$ because $M$ is an upper bound and $s$ is the least one. [L1, step 1.3, step 1.4]

3.1 Put $B := M + 1 = a + 2$; then $B > M \ge 1 > 0$, so $B^{\,n-1} > 0$ and $n B^{\,n-1} > 0$, and every $x$ with $0 \le x \le M + 1$ satisfies $0 \le x \le B$. [step 2.1, L3, L5]

3.2 Assume, for contradiction, that $s^n \ne a$; by trichotomy either $s^n < a$ or $s^n > a$. [assume-contra, step 2.1, L6]

4.1 (Case $s^n < a$.) Put $\delta := \min\{1, (a - s^n)(n B^{\,n-1})^{-1}\}$, which is $> 0$ since $a - s^n > 0$ and $n B^{\,n-1} > 0$, and put $h := 2^{-1}\delta$, so that $0 < h < \delta \le 1$ and $h < (a - s^n)(nB^{\,n-1})^{-1}$; then $0 \le s \le s + h \le M + 1 = B$, so the Lipschitz estimate gives $(s+h)^n - s^n \le nB^{\,n-1} h < a - s^n$, hence $(s+h)^n < a$ and $s + h \in S$, while $s + h > s$ contradicts that $s$ is an upper bound of $S$. [assume-case low, step 3.2, step 2.1, step 3.1, L4, L5, L6, choose]

4.2 (Case $s^n > a$.) Here $s > 0$, since $s = 0$ would give $s^n = 0 \le a$; put $\delta := \min\{s, (s^n - a)(nB^{\,n-1})^{-1}\} > 0$ and $h := 2^{-1}\delta$, so that $0 < h < s$ and $h < (s^n - a)(nB^{\,n-1})^{-1}$; then $0 \le s - h \le s \le B$, so the Lipschitz estimate gives $s^n - (s-h)^n \le nB^{\,n-1}h < s^n - a$, hence $(s-h)^n > a$; applying the epsilon characterisation with $\varepsilon = h$ produces $t \in S$ with $t > s - h \ge 0$, whence $t^n > (s-h)^n > a$ by strict monotonicity, contradicting $t \in S$. [assume-case high, step 3.2, step 2.1, step 3.1, L2, L3, L4, L5, L6, L7, choose]

5.1 Both cases of the disjunction in step 3.2 are impossible, so the assumption fails and $s^n = a$; this $s$ is the unique nonnegative $n$-th root of $a$ by step 1.2, it satisfies $s > 0$ when $a > 0$ because $s = 0$ would force $a = s^n = 0$, and at $n = 1$ the element $a$ itself is a nonnegative solution of $s^1 = a$, so $a^{1/1} = a$; writing $a^{1/n} = \sqrt[n]{a}$ for it, the case $n = 2$ recovers the already published $\sqrt{a}$ of [[thm-of-square-roots]]. [step 4.1, step 4.2, step 3.2, step 1.2, step 1.1, L3, L7, cases, discharge-contradiction] ∎
````

