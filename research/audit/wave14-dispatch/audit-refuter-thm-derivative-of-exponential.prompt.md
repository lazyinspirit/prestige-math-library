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

## Target item — `thm-derivative-of-exponential`

Normalized current SHA-256: `50076afcc4e1cb21c7f29508d9b5bc521210977894c59c75c01a41d3406e332f`

The complete exact-current item follows, including frontmatter:

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

## Wave 14 provenance row

```json
{
  "id": "thm-derivative-of-exponential",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch10.pdf",
    "https://www.jirka.org/ra/html/sec_analfuncs.html"
  ],
  "rationale": "Hunter gives E'=E from the factorial series, while Lebl's analytic-functions section gives termwise derivatives and the resulting smoothness of power-series sums. The item combines these into the stronger all-orders identity exp^(m)=exp.",
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
      "source": "thm-termwise-differentiation-of-a-real-power-series",
      "source_section": "Statement",
      "quote": "Let\n\n$$f(x)=\\sum_{n=0}^{\\infty}a_n(x-c)^n$$\n\nhave radius $R$. For every $x$ with $|x-c|<R$, the function $f$ is differentiable at $x$ ([[def-derivative]]) and\n\n$$f'(x)=\\sum_{n=0}^{\\infty}\\iota(n+1)a_{n+1}(x-c)^n.$$\n\nThe differentiated series has the same radius $R$.",
      "uses": [
        "1.1",
        "3.1"
      ]
    },
    {
      "fact": "L1",
      "source": "cor-power-series-sums-are-smooth-with-coefficient-formula",
      "source_section": "Statement",
      "quote": "Let $f(x)=\\sum_{n\\ge0}a_n(x-c)^n$ have positive or infinite radius $R$. Define $f^{(0)}:=f$ and $f^{(m+1)}:=(f^{(m)})'$. Then every derivative exists on $|x-c|<R$, and for each $m\\in\\mathbb N$,\n\n$$f^{(m)}(x)=\\sum_{j=0}^{\\infty}\\iota\\!\\left((m+j)^{\\underline m}\\right)a_{m+j}(x-c)^j.$$\n\nIn particular,\n\n$$f^{(m)}(c)=\\iota(m!)a_m,\\qquad a_m=\\frac{f^{(m)}(c)}{\\iota(m!)}.$$",
      "uses": [
        "1.1",
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-exponential-series-has-infinite-radius",
      "source_section": "Statement",
      "quote": "For every real $x$, the series $\\sum_{n\\ge0}x^n/\\iota(n!)$ converges absolutely. Its power-series radius is therefore $+\\infty$.",
      "uses": [
        "1.1",
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-factorial-and-falling-factorial",
      "source_section": "Definition",
      "quote": "**The factorial.** By the recursion theorem ([[thm-recursion]]) applied to the\nset $\\mathbb{N}\\times\\mathbb{N}$, the starting element $(0,1)$ and the function\n$f(k, v) = (\\sigma(k),\\, v \\cdot \\sigma(k))$, and by the same induction on the\nfirst coordinate as in [[def-nat-finite-sum-and-product]], there is a unique\n$F : \\mathbb{N} \\to \\mathbb{N}$ with\n\n$$F(0) = 1, \\qquad F(\\sigma(n)) = F(n)\\cdot\\sigma(n) \\quad (n \\in \\mathbb{N}).$$\n\nWe write $n! := F(n)$. Thus $0! = 1$, $1! = 0!\\cdot 1 = 1$, $2! = 1!\\cdot 2 = 2$,\n$3! = 6$, $4! = 24$, $5! = 120$, $6! = 720$.\n\n**$0! = 1$ is the base clause of this recursion**, not a convention imported from\nelsewhere. Nothing about empty products is presupposed; the agreement with the\nempty product is proved below, in clause (a), rather than assumed.\n\n**Truncated difference.** Throughout, $n - k$ is the operation fixed in\n[[def-nat-finite-sum-and-product]]: the unique $j$ with $k + j = n$ when\n$k \\le n$, and $0$ when $n < k$.\n\n**The falling factorial.** For $n \\in \\mathbb{N}$ define $n^{\\underline{k}}$ by\nrecursion on $k$, by the recursion theorem applied to\n$\\mathbb{N}\\times\\mathbb{N}$ with starting element $(0,1)$ and\n$f(k, v) = (\\sigma(k),\\, v \\cdot (n-k))$:\n\n$$n^{\\underline{0}} = 1, \\qquad n^{\\underline{\\sigma(k)}} = n^{\\underline{k}}\\cdot(n-k) .$$\n\nSo $n^{\\underline{1}} = 1\\cdot(n-0) = n$ and $n^{\\underline{2}} = n\\,(n-1)$, and\nfor $k \\le n$ the value is the product $n(n-1)\\cdots(n-k+1)$ of the $k$ topmost\nfactors.\n\n**Four facts, proved here because the page uses each of them.**\n\n**(a) The factorial is the product of the first $n$ positive naturals.**\n$n! = \\prod_{j<n}\\sigma(j) = \\prod_{j<n}(j+1)$, the $\\mathbb{N}$-valued product of\n[[def-nat-finite-sum-and-product]]. Induction ([[thm-induction-principle]]): at\n$n = 0$ both sides are $1$, the empty product and the base clause agreeing; and\n$\\prod_{j<\\sigma(n)}\\sigma(j) = \\big(\\prod_{j<n}\\sigma(j)\\big)\\cdot\\sigma(n) = n!\\cdot\\sigma(n) = \\sigma(n)!$.\n**So the empty-product reading and the base-clause reading are the same reading**,\nand neither was assumed.\n\n**(b) $n! \\ne 0$, and $\\iota(n!) = \\prod^{\\mathbb{R}}_{j<n}\\iota(j+1)$.** For the\nfirst, $0! = 1 \\ne 0$ ([[thm-omega-is-peano-system]]) and\n$\\sigma(n)! = n!\\cdot\\sigma(n)$ is a product of two nonzero naturals, which is\nnonzero: if $xy = 0$ with $y \\ne 0$ then $xy = 0\\cdot y$\n([[lem-nat-mult-identity]]) and cancellation gives $x = 0$\n([[lem-nat-mult-cancellative]]). So $n! \\ne 0$ for every $n$ by induction. For the second, apply the bridge clause\n6 of that lemma to clause (a) above. This is what makes the factorial of this\npage and the real-valued product $\\prod_{j<n}(j+1)$ used elsewhere in the library\n**one object seen twice**, rather than two unrelated notions.\n\n**(c) $n^{\\underline{k}}\\cdot(n-k)! = n!$ for $k \\le n$.** Induction on $k$, for\nall $n$ at once. At $k = 0$ this reads $1 \\cdot n! = n!$. Assume it at $k$ and\nlet $\\sigma(k) \\le n$; then $k \\le n$, and writing $d := n - k$ we have\n$k + d = n$ and $d \\ne 0$, since $k + 0 = k \\ne n$; so $d = \\sigma(e)$ for a\nunique $e$ ([[lem-nat-nonzero-is-successor]]), and $\\sigma(k) + e = n$, that is\n$e = n - \\sigma(k)$ ([[lem-nat-add-cancellative]]). Therefore\n$n^{\\underline{\\sigma(k)}}\\cdot\\big(n-\\sigma(k)\\big)! = n^{\\underline{k}}\\cdot(n-k)\\cdot e! = n^{\\underline{k}}\\cdot\\big(e!\\cdot\\sigma(e)\\big) = n^{\\underline{k}}\\cdot\\sigma(e)! = n^{\\underline{k}}\\cdot(n-k)! = n!$,\nusing commutativity and associativity of multiplication\n([[lem-nat-mult-associative]], [[lem-nat-mult-commutative]]) and the recursion\nclause for the factorial.\n\n**(d) Boundary values.** $n^{\\underline{0}} = 1$ for every $n$, by the base\nclause; $n^{\\underline{n}} = n!$, since clause (c) at $k = n$ gives\n$n^{\\underline{n}}\\cdot 0! = n!$ and $0! = 1$; and\n$n^{\\underline{k}} = 0$ whenever $k > n$. For the last, $n - n = 0$ gives\n$n^{\\underline{\\sigma(n)}} = n^{\\underline{n}}\\cdot 0 = 0$, the clause\n$x \\cdot 0 = 0$ being definitional ([[def-nat-multiplication]]), and if\n$n^{\\underline{k}} = 0$ then\n$n^{\\underline{\\sigma(k)}} = 0$ as well, so $n^{\\underline{k}} = 0$ for every\n$k \\ge \\sigma(n)$ by induction.",
      "uses": [
        "1.1",
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-canonical-natural",
      "source_section": "Definition",
      "quote": "Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and\nmultiplicative identity $1_F$. Define\n$\\iota : \\mathbb{N} \\to F$ by recursion on $\\mathbb{N}$\n([[def-natural-numbers]], [[thm-recursion]]):\n\n$$\\iota(0) \\;:=\\; 0_F, \\qquad \\iota(n+1) \\;:=\\; \\iota(n) + 1_F .$$\n\n$\\iota(n)$ is the **canonical natural** of $n$ in $F$. It is also written\n$n \\cdot 1_F$, and for $n \\ge 1$ it is $1_F$ added to itself $n$ times.\n\n**Why the notation is needed at all.** A natural number in this library is a von\nNeumann natural, that is a set ([[def-natural-numbers]]), and a set is not an\nelement of $F$. So $1/n$, $n^{\\alpha}$ and $x/n$ are not expressions of $F$ when\n$n$ is a natural: what they mean is $1/\\iota(n)$, $\\iota(n)^{\\alpha}$ and\n$x/\\iota(n)$. The map $\\iota$ is what carries a counting number into the field,\nand writing it is the whole reason a reader meets $1/\\iota(k+1)$ where an\ninformal text would write $1/(k+1)$.",
      "uses": [
        "1.1",
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-of-naturals-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field, with field structure as in [[def-field]], and for\n$n \\ge 1$ let $n \\cdot 1_F$ denote the canonical natural number\n$\\underbrace{1_F + \\cdots + 1_F}_{n}$, defined recursively by $1 \\cdot 1_F = 1_F$\nand $(n+1) \\cdot 1_F = n \\cdot 1_F + 1_F$. Then for every $n \\ge 1$:\n\n- $n \\cdot 1_F > 0$ and $(n+1) \\cdot 1_F > n \\cdot 1_F$;\n- the map $n \\mapsto n \\cdot 1_F$ is strictly increasing, hence injective, on $\\{1, 2, 3, \\dots\\}$;\n- $(m+n) \\cdot 1_F = m \\cdot 1_F + n \\cdot 1_F$ and $(mn) \\cdot 1_F = (m \\cdot 1_F)(n \\cdot 1_F)$ for all $m, n \\ge 1$.",
      "uses": [
        "1.1",
        "2.1",
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Termwise differentiation gives $(\\exp)'(x)=\\sum_{n\\ge1}\\iota(n)x^{n-1}/\\iota(n!)$.  [L1, L2]",
      "step": "1.1",
      "inputs": [
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Reindex $n=j+1$ and cancel $\\iota(j+1)$ using the factorial recurrence. The series becomes $\\sum_{j\\ge0}x^j/\\iota(j!)=\\exp(x)$.  [step 1.1, L2, algebra]",
      "step": "2.1",
      "inputs": [
        "1.1",
        "L2",
        "algebra"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "Smoothness follows from [L1] and the infinite radius; iterating step 2.1 gives every higher derivative.  [step 2.1, L1, L2] ∎",
      "step": "3.1",
      "inputs": [
        "L1",
        "2.1",
        "L2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The statement concerns real numbers or functions, not a set-valued assertion with an empty-domain case."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Step 2.1 retains the n=0 coefficient and proves the derivative identity at x=0."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Steps 1.1–3.1 apply at x=1 and to derivative order m=1."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "No interval, quotient, or structure can collapse in this assertion."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "The statement has no finite endpoint hypothesis."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "The proof makes no choice from an arbitrary nonempty family."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional."
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "thm-derivative-of-exponential",
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
    "source": "thm-derivative-of-exponential",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "thm-termwise-differentiation-of-a-real-power-series",
    "declared_target": "thm-termwise-differentiation-of-a-real-power-series",
    "target_statement_provenance": "ai-altered",
    "targetPage": "power-series-and-real-analytic-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-derivative-of-exponential",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "cor-power-series-sums-are-smooth-with-coefficient-formula",
    "declared_target": "cor-power-series-sums-are-smooth-with-coefficient-formula",
    "target_statement_provenance": "ai-altered",
    "targetPage": "power-series-and-real-analytic-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-derivative-of-exponential",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "def-factorial-and-falling-factorial",
    "declared_target": "def-factorial-and-falling-factorial",
    "target_statement_provenance": "ai-altered",
    "targetPage": "finite-counting-and-binomial-coefficients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-derivative-of-exponential",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
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
    "source": "thm-derivative-of-exponential",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "lem-of-naturals-positive",
    "declared_target": "lem-of-naturals-positive",
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

## Full exact-current text of every cited or declared item (6)

### `cor-power-series-sums-are-smooth-with-coefficient-formula`

````markdown
---
id: cor-power-series-sums-are-smooth-with-coefficient-formula
kind: corollary
title: "A power-series sum is infinitely differentiable inside its radius and satisfies $a_n=f^{(n)}(c)/\\iota(n!)$ at its centre"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-termwise-differentiation-of-a-real-power-series, def-factorial-and-falling-factorial, def-canonical-natural, lem-nat-finite-sum-laws-and-the-canonical-embedding, thm-induction-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Power series, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Power_series"
    - title: "E. Randles, Supplementary Notes for Real Analysis"
      url: "https://personal.colby.edu/~erandles/papers/Past_Courses/Supplementary_Notes.pdf"
pipeline_run: null
---

## Statement

Let $f(x)=\sum_{n\ge0}a_n(x-c)^n$ have positive or infinite radius $R$. Define $f^{(0)}:=f$ and $f^{(m+1)}:=(f^{(m)})'$. Then every derivative exists on $|x-c|<R$, and for each $m\in\mathbb N$,

$$f^{(m)}(x)=\sum_{j=0}^{\infty}\iota\!\left((m+j)^{\underline m}\right)a_{m+j}(x-c)^j.$$

In particular,

$$f^{(m)}(c)=\iota(m!)a_m,\qquad a_m=\frac{f^{(m)}(c)}{\iota(m!)}.$$

## Facts & Assumptions

**Given:** A power-series sum $f$ of radius $R>0$ and the recursively defined derivatives $f^{(m)}$.

[L1] A power series may be differentiated term by term throughout its open radius, and its first derived series has the same radius ([[thm-termwise-differentiation-of-a-real-power-series]]).

[L2] Falling factorials satisfy $n^{\underline0}=1$ and $n^{\underline{k+1}}=n^{\underline k}(n-k)$ for all natural $n,k$, with truncated difference $n-k$, and $n^{\underline n}=n!\ne0$ ([[def-factorial-and-falling-factorial]]); the canonical embedding into $\mathbb R$ is multiplicative and injective ([[lem-nat-finite-sum-laws-and-the-canonical-embedding]]).

[L3] The induction principle on $\mathbb N$ ([[thm-induction-principle]]).

## Proof

**Proof technique:** induction.

1.1 For $m=0$, the formula reads $f(x)=\sum_{j\ge0}\iota(j^{\underline0})a_j(x-c)^j=\sum_{j\ge0}a_j(x-c)^j$, so the claim holds. [base, given, L2]

1.2 Fix $m$ and assume the displayed formula for $f^{(m)}$, with radius $R$. [ih]

2.1 By [L1], differentiate the series in step 1.2 term by term. Reindexing $j+1$ as $j$ gives $f^{(m+1)}(x)=\sum_{j\ge0}\iota(j+1)\iota((m+j+1)^{\underline m})a_{m+j+1}(x-c)^j$. [step 1.2, L1]

3.1 The falling-factorial recursion with $n=m+j+1$ and $k=m$ gives $(m+j+1)^{\underline{m+1}}=(m+j+1)^{\underline m}(j+1)$. Since $\iota$ preserves products, step 2.1 is precisely the asserted formula with $m+1$ in place of $m$. [step 2.1, L2, algebra]

4.1 By [L3], the derivative formula holds for every $m$. At each induction step [L1] also preserves the radius $R$, so every derived series has radius $R$. [step 1.1, step 3.1, L1, L3, discharge-induction]

5.1 At $x=c$, every term with $j\ge1$ vanishes and the $j=0$ term is $\iota(m^{\underline m})a_m=\iota(m!)a_m$; since $m!\ne0$, division gives the coefficient formula. [step 4.1, L2, discharge-induction] ∎
````

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

### `def-factorial-and-falling-factorial`

````markdown
---
id: def-factorial-and-falling-factorial
kind: definition
title: "The factorial $n!$ and the falling factorial $n^{\\underline{k}}$, defined by recursion in $\\mathbb{N}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-recursion, thm-induction-principle, def-nat-finite-sum-and-product,
       lem-nat-finite-sum-laws-and-the-canonical-embedding, def-nat-multiplication,
       lem-nat-mult-associative, lem-nat-mult-commutative, lem-nat-mult-identity,
       lem-nat-mult-cancellative, lem-nat-add-cancellative, def-nat-order,
       lem-nat-nonzero-is-successor, thm-omega-is-peano-system, def-canonical-natural]
justified_by: []
forward_refs: [lem-factorial-beats-geometric, def-monoid-finite-product]
aliases: []
landmark: true
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Factorial (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Factorial"
    - title: "Falling and rising factorials (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Falling_and_rising_factorials"
    - title: "Empty product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Empty_product"
pipeline_run: null
---

## Definition

**The factorial.** By the recursion theorem ([[thm-recursion]]) applied to the
set $\mathbb{N}\times\mathbb{N}$, the starting element $(0,1)$ and the function
$f(k, v) = (\sigma(k),\, v \cdot \sigma(k))$, and by the same induction on the
first coordinate as in [[def-nat-finite-sum-and-product]], there is a unique
$F : \mathbb{N} \to \mathbb{N}$ with

$$F(0) = 1, \qquad F(\sigma(n)) = F(n)\cdot\sigma(n) \quad (n \in \mathbb{N}).$$

We write $n! := F(n)$. Thus $0! = 1$, $1! = 0!\cdot 1 = 1$, $2! = 1!\cdot 2 = 2$,
$3! = 6$, $4! = 24$, $5! = 120$, $6! = 720$.

**$0! = 1$ is the base clause of this recursion**, not a convention imported from
elsewhere. Nothing about empty products is presupposed; the agreement with the
empty product is proved below, in clause (a), rather than assumed.

**Truncated difference.** Throughout, $n - k$ is the operation fixed in
[[def-nat-finite-sum-and-product]]: the unique $j$ with $k + j = n$ when
$k \le n$, and $0$ when $n < k$.

**The falling factorial.** For $n \in \mathbb{N}$ define $n^{\underline{k}}$ by
recursion on $k$, by the recursion theorem applied to
$\mathbb{N}\times\mathbb{N}$ with starting element $(0,1)$ and
$f(k, v) = (\sigma(k),\, v \cdot (n-k))$:

$$n^{\underline{0}} = 1, \qquad n^{\underline{\sigma(k)}} = n^{\underline{k}}\cdot(n-k) .$$

So $n^{\underline{1}} = 1\cdot(n-0) = n$ and $n^{\underline{2}} = n\,(n-1)$, and
for $k \le n$ the value is the product $n(n-1)\cdots(n-k+1)$ of the $k$ topmost
factors.

**Four facts, proved here because the page uses each of them.**

**(a) The factorial is the product of the first $n$ positive naturals.**
$n! = \prod_{j<n}\sigma(j) = \prod_{j<n}(j+1)$, the $\mathbb{N}$-valued product of
[[def-nat-finite-sum-and-product]]. Induction ([[thm-induction-principle]]): at
$n = 0$ both sides are $1$, the empty product and the base clause agreeing; and
$\prod_{j<\sigma(n)}\sigma(j) = \big(\prod_{j<n}\sigma(j)\big)\cdot\sigma(n) = n!\cdot\sigma(n) = \sigma(n)!$.
**So the empty-product reading and the base-clause reading are the same reading**,
and neither was assumed.

**(b) $n! \ne 0$, and $\iota(n!) = \prod^{\mathbb{R}}_{j<n}\iota(j+1)$.** For the
first, $0! = 1 \ne 0$ ([[thm-omega-is-peano-system]]) and
$\sigma(n)! = n!\cdot\sigma(n)$ is a product of two nonzero naturals, which is
nonzero: if $xy = 0$ with $y \ne 0$ then $xy = 0\cdot y$
([[lem-nat-mult-identity]]) and cancellation gives $x = 0$
([[lem-nat-mult-cancellative]]). So $n! \ne 0$ for every $n$ by induction. For the second, apply the bridge clause
6 of that lemma to clause (a) above. This is what makes the factorial of this
page and the real-valued product $\prod_{j<n}(j+1)$ used elsewhere in the library
**one object seen twice**, rather than two unrelated notions.

**(c) $n^{\underline{k}}\cdot(n-k)! = n!$ for $k \le n$.** Induction on $k$, for
all $n$ at once. At $k = 0$ this reads $1 \cdot n! = n!$. Assume it at $k$ and
let $\sigma(k) \le n$; then $k \le n$, and writing $d := n - k$ we have
$k + d = n$ and $d \ne 0$, since $k + 0 = k \ne n$; so $d = \sigma(e)$ for a
unique $e$ ([[lem-nat-nonzero-is-successor]]), and $\sigma(k) + e = n$, that is
$e = n - \sigma(k)$ ([[lem-nat-add-cancellative]]). Therefore
$n^{\underline{\sigma(k)}}\cdot\big(n-\sigma(k)\big)! = n^{\underline{k}}\cdot(n-k)\cdot e! = n^{\underline{k}}\cdot\big(e!\cdot\sigma(e)\big) = n^{\underline{k}}\cdot\sigma(e)! = n^{\underline{k}}\cdot(n-k)! = n!$,
using commutativity and associativity of multiplication
([[lem-nat-mult-associative]], [[lem-nat-mult-commutative]]) and the recursion
clause for the factorial.

**(d) Boundary values.** $n^{\underline{0}} = 1$ for every $n$, by the base
clause; $n^{\underline{n}} = n!$, since clause (c) at $k = n$ gives
$n^{\underline{n}}\cdot 0! = n!$ and $0! = 1$; and
$n^{\underline{k}} = 0$ whenever $k > n$. For the last, $n - n = 0$ gives
$n^{\underline{\sigma(n)}} = n^{\underline{n}}\cdot 0 = 0$, the clause
$x \cdot 0 = 0$ being definitional ([[def-nat-multiplication]]), and if
$n^{\underline{k}} = 0$ then
$n^{\underline{\sigma(k)}} = 0$ as well, so $n^{\underline{k}} = 0$ for every
$k \ge \sigma(n)$ by induction.

## Remarks

- **Why $0! = 1$ is not imported.** The empty-product convention of an arbitrary
  monoid is fixed in [[def-monoid-finite-product]], which comes later in the
  reading order, so citing it here would be a dependency pointing the wrong way.
  Taking $0! = 1$ as the base clause of the factorial's own recursion costs
  nothing and owes nothing, and clause (a) then records the agreement.

- **The library's other factorial.** [[lem-factorial-beats-geometric]], later in
  the reading order, works with a real-valued factorial defined as the product
  $\prod_{j<n}(j+1)$ in $\mathbb{R}$. Clause (b) says that this is exactly
  $\iota(n!)$, so the two agree and no second notion has been created. That
  pointer is orientation only.

- **Check every clause at $k = 0$ and at $k = n$.** The falling factorial is
  defined by two regimes, one for $k \le n$ and one beyond, and the recursion
  above covers both because the truncated difference is $0$ past the end. The
  two values that get used constantly are $n^{\underline{0}} = 1$ and
  $n^{\underline{n}} = n!$, and both are clause (d).
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

### `lem-of-naturals-positive`

````markdown
---
id: lem-of-naturals-positive
kind: lemma
title: "Canonical naturals are positive and strictly increasing"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-of-one-positive, lem-of-add-order, def-field]
aliases: []
landmark: false
short: "n·1 > 0"
proof_strategy: induction
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
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "Elias Zakon, Mathematical Analysis: Natural Numbers and Induction"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/02%3A_Real_Numbers_and_Fields/2.02%3A_Natural_Numbers._Induction"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field, with field structure as in [[def-field]], and for
$n \ge 1$ let $n \cdot 1_F$ denote the canonical natural number
$\underbrace{1_F + \cdots + 1_F}_{n}$, defined recursively by $1 \cdot 1_F = 1_F$
and $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$. Then for every $n \ge 1$:

- $n \cdot 1_F > 0$ and $(n+1) \cdot 1_F > n \cdot 1_F$;
- the map $n \mapsto n \cdot 1_F$ is strictly increasing, hence injective, on $\{1, 2, 3, \dots\}$;
- $(m+n) \cdot 1_F = m \cdot 1_F + n \cdot 1_F$ and $(mn) \cdot 1_F = (m \cdot 1_F)(n \cdot 1_F)$ for all $m, n \ge 1$.

## Facts & Assumptions

**Given:** An ordered field $F$ whose canonical naturals are defined recursively by $1 \cdot 1_F = 1_F$ and $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$, with $0 \cdot 1_F = 0$.

[L1] $0 < 1_F$ in every ordered field ([[cor-of-one-positive]]).

[L2] The order is compatible with addition and positives are closed under addition: $a < b$ implies $a + c < b + c$, and $a > 0$, $b > 0$ imply $a + b > 0$ ([[lem-of-add-order]]).

## Proof

**Proof technique:** induction.

1.1 Base case $n = 1$: by definition $1 \cdot 1_F = 1_F$, and $1_F > 0$. [L1, base]

1.2 Inductive hypothesis: assume $n \cdot 1_F > 0$ for some fixed $n \ge 1$. [ih]

1.3 By the recursion, $(n+1) \cdot 1_F - n \cdot 1_F = 1_F > 0$, so $(n+1) \cdot 1_F > n \cdot 1_F$. [given, L1]

1.4 Additive identity: fix $m$ and induct on $n$; at $n = 1$, $(m+1) \cdot 1_F = m \cdot 1_F + 1_F$ by the recursion, and if $(m+n) \cdot 1_F = m \cdot 1_F + n \cdot 1_F$ then $(m+n+1) \cdot 1_F = (m+n) \cdot 1_F + 1_F = m \cdot 1_F + n \cdot 1_F + 1_F = m \cdot 1_F + (n+1) \cdot 1_F$. [given, algebra]

2.1 Inductive step: $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$ is a sum of two positives, by the hypothesis and $1_F > 0$, hence $(n+1) \cdot 1_F > 0$. [step 1.2, L1, L2]

2.2 Iterating 1.3, for $m < n$ one has $m \cdot 1_F < n \cdot 1_F$, so $n \mapsto n \cdot 1_F$ is strictly increasing and therefore injective on $\{1, 2, 3, \dots\}$. [step 1.3, L2]

2.3 Multiplicative identity: fix $m$ and induct on $n$; at $n = 1$, $(m \cdot 1) \cdot 1_F = m \cdot 1_F = (m \cdot 1_F)(1 \cdot 1_F)$, and the step $(m(n+1)) \cdot 1_F = (mn + m) \cdot 1_F = (mn) \cdot 1_F + m \cdot 1_F = (m \cdot 1_F)(n \cdot 1_F) + (m \cdot 1_F)(1_F) = (m \cdot 1_F)((n+1) \cdot 1_F)$ uses 1.4 and distributivity. [step 1.4, algebra]

3.1 By induction on 1.1, 1.2, 2.1, $n \cdot 1_F > 0$ for every $n \ge 1$; with the strict increase 2.2 and the identities 1.4, 2.3, every claim holds. [step 2.1, step 2.2, step 1.4, step 2.3, discharge-induction] ∎
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

