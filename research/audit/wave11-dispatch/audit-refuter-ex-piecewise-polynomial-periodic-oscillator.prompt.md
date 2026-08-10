# Audit proof-refuter brief — Wave 11, A6

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
For an `ai-generated` Statement or counterexample, actively search for a
counterexample to the public claim or a failure in the witness. A false public
claim, invalid proof, missing necessary hypothesis, circularity, or materially
inaccurate load-bearing citation is fatal; a quickly closable gap is nonfatal.

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

- Wave 11 ai-generated Statement seed
- pending Wave 11 generated-risk seed (cone 3)

## Target item — `ex-piecewise-polynomial-periodic-oscillator`

Normalized current SHA-256: `f8a3e4dd88f80a8ee6f89bc4573093e906fb78b3bb1e4f027d794f798a546f1e`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: ex-piecewise-polynomial-periodic-oscillator
kind: example
title: "A bounded $C^1$ periodic oscillator made from a quartic Hermite spline"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [lem-integer-part, def-higher-derivatives-and-smoothness, thm-algebra-of-derivatives, lem-derivative-of-a-power, def-integer-power]
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
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 lecture notes"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/lecture-notes/"
pipeline_run: null
---

## Example

Define $\psi(t)=16u^2(1-u)^2$, where $u=t-\lfloor t\rfloor\in[0,1)$. Then $\psi$ is bounded, nonconstant, $1$-periodic, and $C^1$. Moreover, $\psi'$ takes the values $3$ and $-3$ in every period.

## Facts & Assumptions

**Given:** The displayed definition.

[L1] The integer-part lemma supplies the unique $u\in[0,1)$ ([[lem-integer-part]]).

[L2] Polynomial derivatives follow from [[thm-algebra-of-derivatives]], [[lem-derivative-of-a-power]], and [[def-integer-power]].

## Verification

**Proof technique:** direct.

1.1 On every interval $[k,k+1)$, $\psi$ is the same quartic in $u=t-k$, with derivative $32u(1-u)(1-2u)$. Its values and first derivatives at $u=0$ and $u=1$ are all $0$, so adjacent pieces and their derivatives agree continuously at every integer. [L1, L2, algebra]

2.1 Translation by an integer leaves the fractional part unchanged, so $\psi$ is $1$-periodic. Step 1.1 and the polynomial formula prove $C^1$-regularity, and $0\le\psi\le1$. At fractional parts $u=1/4$ and $u=3/4$, the derivative formula gives $\psi'=3$ and $\psi'=-3$, respectively. [step 1.1, L1, L2, algebra] ∎
````

## Wave 11 provenance row

```json
{
  "id": "ex-piecewise-polynomial-periodic-oscillator",
  "statement": "ai-generated",
  "proof": "ai-generated",
  "evidence": "trivial",
  "urls": [],
  "rationale": "The normalized quartic Hermite cell 16u^2(1-u)^2, its periodic gluing, and the chosen derivative values are a bespoke local construction. Direct polynomial differentiation gives matching value and first derivative at every seam, periodicity and boundedness are immediate from the fractional-part definition, and substituting the displayed quarter-points gives derivative values 3 and -3.",
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
      "source": "lem-integer-part",
      "source_section": "Statement",
      "quote": "Identify $\\mathbb{Z}$ with its canonical copy inside $\\mathbb{R}$, along the\nembeddings $\\mathbb{N} \\to \\mathbb{Z} \\to \\mathbb{Q} \\to \\mathbb{R}$\n([[lem-nat-embeds-int]], [[lem-int-embeds-rat]], [[lem-rat-embeds-dense]],\n[[def-integers]]). Then for every real $x$ there is **exactly one** integer $m$\nwith\n\n$$m \\;\\le\\; x \\;<\\; m + 1 .$$\n\nIt is written $\\lfloor x \\rfloor$ and called the **integer part**, or **floor**,\nof $x$.\n\n**Two independent ingredients are needed and neither may be dropped.** Existence\nis the Archimedean property ([[thm-of-archimedean]]) together with the\nwell-ordering of $\\mathbb{N}$ ([[thm-well-ordering-principle]]): the first says\nthat $x$ is caught between two integers at all, the second picks the *least*\ninteger above $x$. Uniqueness is the discreteness of $\\mathbb{Z}$: no integer\nlies strictly between $m$ and $m+1$.\n\nThis lemma is stated once here and reused. It is what turns \"the nearest integer\nto $x$\" from a picture into an object, and the companion page's oscillator\n$\\psi(x) = \\inf_{n \\in \\mathbb{Z}} |x - n|$ is computed from it in one line.",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-algebra-of-derivatives",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $c \\in A$ be a limit point of $A$\n([[def-limit-point-r]]), let $f, g : A \\to \\mathbb{R}$ be differentiable at $c$\n([[def-derivative]]) and let $\\alpha \\in \\mathbb{R}$. Then:\n\n1. $f + g$ is differentiable at $c$ and $(f+g)'(c) = f'(c) + g'(c)$;\n2. $\\alpha f$ is differentiable at $c$ and $(\\alpha f)'(c) = \\alpha f'(c)$;\n3. $fg$ is differentiable at $c$ and $(fg)'(c) = f'(c)g(c) + f(c)g'(c)$;\n4. if $g(c) \\ne 0$ then, writing $A_0 := \\{\\, x \\in A : g(x) \\ne 0 \\,\\}$, the\n   point $c$ lies in $A_0$ and is a limit point of $A_0$, the quotient\n   $(f/g)|_{A_0} : A_0 \\to \\mathbb{R}$, $x \\mapsto f(x)/g(x)$, is differentiable\n   at $c$ as a function on $A_0$, and\n   $$\\bigl((f/g)|_{A_0}\\bigr)'(c) \\;=\\; \\frac{f'(c)\\,g(c) - f(c)\\,g'(c)}{g(c)^{2}} .$$\n\nEach claim asserts two things: that the derivative on the left exists, and that\nit has the stated value. Both are proved.\n\n**Why claim 4 is stated on $A_0$.** The function $f/g$ is not defined where $g$\nvanishes, and $g$ may vanish at points of $A$ far from $c$; restricting to $A_0$\nis forced. That the restriction still has $c$ as a limit point, so that a\nderivative there means anything at all, is not free either, and it is the last\nclaim of [[lem-sign-preservation-near-a-limit]] applied to $g$. The hypothesis\nis $g(c) \\ne 0$, not \"$g$ vanishes nowhere\".\n\n**Everything is proved through\n[[thm-caratheodory-characterisation]].** No difference quotient is estimated and\nno limit theorem beyond continuity is used, so no choice principle is spent.\nThe four identities are four algebraic rearrangements of an increment, each\nfollowed by a reading of [[thm-algebra-of-continuous-functions]].",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-derivative-of-a-power",
      "source_section": "Statement",
      "quote": "Powers are those of [[def-integer-power]], and $\\iota : \\mathbb{N} \\to\n\\mathbb{R}$ is the canonical natural of [[def-canonical-natural]], so that\n$\\iota(0) = 0$ and $\\iota(m+1) = \\iota(m) + 1$. Let $n \\in \\mathbb{N}$.\n\n1. The function $p_0 : \\mathbb{R} \\to \\mathbb{R}$, $p_0(x) = x^{0}$, is the\n   constant function $1$, and it is differentiable at every $c \\in \\mathbb{R}$\n   with $p_0'(c) = 0$ ([[def-derivative]]).\n2. For $n \\ge 1$ the function $p_n : \\mathbb{R} \\to \\mathbb{R}$,\n   $p_n(x) = x^{n}$, is differentiable at every $c \\in \\mathbb{R}$, and\n   $$p_n'(c) \\;=\\; \\iota(n)\\,c^{\\,n-1} .$$\n3. For $n \\ge 1$ put $A_0 := \\{\\, x \\in \\mathbb{R} : x \\ne 0 \\,\\}$. The function\n   $m_n : A_0 \\to \\mathbb{R}$, $m_n(x) = x^{-n}$, is differentiable at every\n   $c \\in A_0$ as a function on $A_0$, and\n   $$m_n'(c) \\;=\\; -\\,\\iota(n)\\,c^{\\,-n-1} .$$\n4. Let $a : \\mathbb{N} \\to \\mathbb{R}$ with $a_j = 0$ for $j \\ge n$, and let\n   $P : \\mathbb{R} \\to \\mathbb{R}$ be the polynomial function\n   $P(x) = \\sum_{j<n} a_j x^{j}$ ([[def-finite-sum]]). Then $P$ is\n   differentiable at every $c \\in \\mathbb{R}$, and, defining $e : \\mathbb{N}\n   \\to \\mathbb{R}$ by $e_0 := 0$ and $e_j := \\iota(j)\\,a_j\\,c^{\\,j-1}$ for\n   $j \\ge 1$,\n   $$P'(c) \\;=\\; \\sum_{j<n} e_j .$$\n\n**Claim 2 is stated for $n \\ge 1$ and not for $n \\ge 0$, and that is not\ntimidity.** At $n = 0$ its right-hand side reads $\\iota(0)\\,c^{-1}$, and\n$c^{-1}$ is not defined at $c = 0$ ([[def-integer-power]]), so the formula is\nnot a statement about the whole line. Claim 1 is what covers $n = 0$, and it\nsays the derivative is $0$ there, which is what the informal reading\n\"$0 \\cdot c^{-1}$\" is reaching for. The same shift is why the term $e_0$ of\nclaim 4 is defined to be $0$ outright rather than by the formula.",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-integer-power",
      "source_section": "Definition",
      "quote": "Let $a \\in \\mathbb{R}$, where $\\mathbb{R}$ is the ambient ordered field\n([[def-ordered-field]], [[def-field]]).\n\n**Natural exponents.** By the recursion theorem ([[thm-recursion]]) applied to\nthe set $\\mathbb{R}$, the starting element $1$ and the function\n$f(x) = x \\cdot a$, there is a unique function $\\mathbb{N} \\to \\mathbb{R}$,\nwritten $n \\mapsto a^n$, with\n\n$$a^0 = 1, \\qquad a^{n+1} = a^n \\cdot a \\quad (n \\in \\mathbb{N}).$$\n\nThus $a^1 = a$, $a^2 = a \\cdot a$, and so on. Note that this is defined for\n**every** $a$, including $a = 0$.\n\n**Negative exponents.** If $a \\ne 0$ and $n \\in \\mathbb{N}$ with $n \\ge 1$, set\n\n$$a^{-n} := (a^n)^{-1}.$$\n\n**Why that is legitimate.** The right-hand side presupposes that $a^n$ is\ninvertible, that is, that $a^n \\ne 0$. This is a proof obligation and not an\nobservation, and it is discharged by claim 2 of [[lem-power-laws]]: for $a \\ne 0$\nin a field, $a^n \\ne 0$ for every $n \\in \\mathbb{N}$, proved there by induction on\n$n$ from the fact that a field has no zero divisors ([[lem-of-no-zero-divisors]]).\nThat lemma is a statement *about* the operation introduced here, so it depends on\nthis definition and is recorded in this item's `justified_by` rather than in its\n`deps` (SCHEMA §3). Given $a^n \\ne 0$, the value $(a^n)^{-1}$ is a single\nwell-determined element, because multiplicative inverses in a field are unique\n([[lem-of-inverse-unique]]).\n\n**Integer exponents.** Every integer $m$ ([[def-integers]]) is either\n$\\iota(n)$ or $-\\iota(n)$ for a unique natural $n$, where $\\iota$ is the\nembedding $\\mathbb{N} \\to \\mathbb{Z}$ ([[lem-nat-embeds-int]],\n[[def-int-operations]]). This too is a citation and not a slogan: the order on\n$\\mathbb{Z}$ is total ([[thm-int-ordered-ring]]), so $m \\ge 0$ or $m < 0$; the\nimage of $\\iota$ is exactly the set of nonnegative integers, and each of them is\n$\\iota(n)$ for a unique natural $n$ ([[lem-nat-embeds-int]]); and if $m < 0$ then\n$-m > 0$, by compatibility of the order with addition ([[thm-int-ordered-ring]]),\nso $-m = \\iota(n)$ and $m = -\\iota(n)$, with $n$ unique because $\\iota$ is\ninjective. The two clauses above therefore define $a^m$ for every\n$m \\in \\mathbb{Z}$ whenever $a \\ne 0$, and for every $m \\in \\mathbb{N}$ for\narbitrary $a$. The clauses are consistent where they overlap: the only overlap is\n$m = 0$, where $-\\iota(0) = \\iota(0)$ and $(a^0)^{-1} = 1^{-1} = 1 = a^0$.",
      "uses": [
        "1.1",
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "ex-piecewise-polynomial-periodic-oscillator-step-1-1",
      "claim": "On every interval $[k,k+1)$, $\\psi$ is the same quartic in $u=t-k$, with derivative $32u(1-u)(1-2u)$. Its values and first derivatives at $u=0$ and $u=1$ are all $0$, so adjacent pieces and their derivatives agree continuously at every integer. [L1, L2, algebra]",
      "step": "1.1",
      "inputs": [
        "L1",
        "L2",
        "algebra"
      ]
    },
    {
      "id": "ex-piecewise-polynomial-periodic-oscillator-step-2-1",
      "claim": "Translation by an integer leaves the fractional part unchanged, so $\\psi$ is $1$-periodic. Step 1.1 and the polynomial formula prove $C^1$-regularity, and $0\\le\\psi\\le1$. At fractional parts $u=1/4$ and $u=3/4$, the derivative formula gives $\\psi'=3$ and $\\psi'=-3$, respectively. [step 1.1, L1, L2, algebra] ∎",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "L1",
        "L2",
        "algebra"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "ex-piecewise-polynomial-periodic-oscillator concerns stipulated functions and points; no empty family, empty sum, or empty choice domain changes its assertion."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Statement includes the zero boundary, and step 1.1 treats or preserves that case."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "ex-piecewise-polynomial-periodic-oscillator has no counting, exponent, or unit parameter whose one case changes the proof."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "ex-piecewise-polynomial-periodic-oscillator has no interval-length or denominator parameter that may collapse degenerately."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "ex-piecewise-polynomial-periodic-oscillator contains no interval-endpoint assertion requiring a separate endpoint case."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.1 establishes or explicitly fixes the object before the proof chooses or extremizes it."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The Statement of ex-piecewise-polynomial-periodic-oscillator is not a biconditional, so it has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The Statement of ex-piecewise-polynomial-periodic-oscillator is not a biconditional, so it has no reverse iff direction."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "pending",
    "reviewer": "Alpha",
    "notes": "Audit-Beta captured the published A2 contract; independent risk routing occurs after A3."
  }
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "ex-piecewise-polynomial-periodic-oscillator",
    "sourcePage": "darboux-lhopital-and-taylor-examples",
    "batch": "wave11-real-analysis",
    "target": "lem-integer-part",
    "declared_target": "lem-integer-part",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limits-of-real-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-piecewise-polynomial-periodic-oscillator",
    "sourcePage": "darboux-lhopital-and-taylor-examples",
    "batch": "wave11-real-analysis",
    "target": "def-higher-derivatives-and-smoothness",
    "declared_target": "def-higher-derivatives-and-smoothness",
    "target_statement_provenance": "ai-altered",
    "targetPage": "darboux-lhopital-and-taylor",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-piecewise-polynomial-periodic-oscillator",
    "sourcePage": "darboux-lhopital-and-taylor-examples",
    "batch": "wave11-real-analysis",
    "target": "thm-algebra-of-derivatives",
    "declared_target": "thm-algebra-of-derivatives",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-piecewise-polynomial-periodic-oscillator",
    "sourcePage": "darboux-lhopital-and-taylor-examples",
    "batch": "wave11-real-analysis",
    "target": "lem-derivative-of-a-power",
    "declared_target": "lem-derivative-of-a-power",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-piecewise-polynomial-periodic-oscillator",
    "sourcePage": "darboux-lhopital-and-taylor-examples",
    "batch": "wave11-real-analysis",
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
    "id": "ex-piecewise-polynomial-periodic-oscillator",
    "file": "items/ex-piecewise-polynomial-periodic-oscillator.md",
    "source": "provenance",
    "cone_size": 3,
    "logical_consumers": [
      "cex-lhopital-converse",
      "ex-differentiable-function-with-discontinuous-derivative",
      "ex-positive-derivative-at-zero-with-no-local-monotonicity"
    ],
    "direct_citation_consumers": [
      {
        "id": "cex-lhopital-converse",
        "via": [
          "deps"
        ]
      },
      {
        "id": "ex-differentiable-function-with-discontinuous-derivative",
        "via": [
          "deps",
          "wikilink"
        ]
      },
      {
        "id": "ex-positive-derivative-at-zero-with-no-local-monotonicity",
        "via": [
          "deps",
          "wikilink"
        ]
      }
    ],
    "disposition": {
      "status": "pending",
      "by": "",
      "notes": ""
    }
  }
]
```

## Full exact-current text of every cited or declared item (5)

### `def-higher-derivatives-and-smoothness`

````markdown
---
id: def-higher-derivatives-and-smoothness
kind: definition
title: "Higher derivatives and the classes $C^k$ and $C^\\infty$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-derivative, def-continuity-real, def-one-sided-limits, def-natural-numbers]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, Taylor's theorem and related calculus"
      url: "https://www.jirka.org/ra/html/sec_taylor.html"
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 lecture notes"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/lecture-notes/"
pipeline_run: null
---

## Definition

Let $I\subseteq\mathbb R$ be an interval and $f:I\to\mathbb R$. Put $f^{(0)}:=f$. Recursively, wherever $f^{(j)}$ is differentiable, put $f^{(j+1)}:=(f^{(j)})'$, with derivatives at endpoints understood in the one-sided sense fixed by [[def-derivative]] and [[def-one-sided-limits]].

For $k\in\mathbb N$, the function is **$k$-times differentiable** on $I$ if $f^{(j)}$ exists on $I$ for every $j\le k$. It is of class **$C^k$** on $I$ if these derivatives exist and every $f^{(j)}$, $0\le j\le k$, is continuous on $I$ ([[def-continuity-real]]). It is **smooth**, or $C^\infty$, if it is $C^k$ for every $k\in\mathbb N$.

Since $0\in\mathbb N$ ([[def-natural-numbers]]), $C^0$ means continuity. The definitions also give $C^{k+1}\subseteq C^k$. Existence of $f^{(k)}$ alone does not assert that $f^{(k)}$ is continuous.
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

### `lem-derivative-of-a-power`

````markdown
---
id: lem-derivative-of-a-power
kind: lemma
title: "For a natural $n \\ge 1$ the function $x \\mapsto x^{n}$ is differentiable everywhere with derivative $\\iota(n)\\,x^{\\,n-1}$; for $n = 0$ it is the constant $1$, with derivative $0$; for a natural $n \\ge 1$ the function $x \\mapsto x^{-n}$ is differentiable at every $x \\ne 0$ with derivative $-\\iota(n)\\,x^{-n-1}$; consequently every polynomial function is differentiable at every real, with the derivative computed term by term"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-derivative, thm-algebra-of-derivatives, def-integer-power, lem-power-laws, def-canonical-natural, thm-induction-principle, def-finite-sum, def-function-limit, def-limit-point-r, def-neighbourhood-r]
justified_by: []
aliases: [lem-power-rule]
landmark: true
short: "the power rule"
proof_strategy: induction
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Power rule (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Power_rule"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.1"
      url: "https://www.jirka.org/ra/"
    - title: "J. Lebl, Basic Analysis I, The Derivative"
      url: "https://www.jirka.org/ra/html/der_chapter.html"
pipeline_run: null
---

## Statement

Powers are those of [[def-integer-power]], and $\iota : \mathbb{N} \to
\mathbb{R}$ is the canonical natural of [[def-canonical-natural]], so that
$\iota(0) = 0$ and $\iota(m+1) = \iota(m) + 1$. Let $n \in \mathbb{N}$.

1. The function $p_0 : \mathbb{R} \to \mathbb{R}$, $p_0(x) = x^{0}$, is the
   constant function $1$, and it is differentiable at every $c \in \mathbb{R}$
   with $p_0'(c) = 0$ ([[def-derivative]]).
2. For $n \ge 1$ the function $p_n : \mathbb{R} \to \mathbb{R}$,
   $p_n(x) = x^{n}$, is differentiable at every $c \in \mathbb{R}$, and
   $$p_n'(c) \;=\; \iota(n)\,c^{\,n-1} .$$
3. For $n \ge 1$ put $A_0 := \{\, x \in \mathbb{R} : x \ne 0 \,\}$. The function
   $m_n : A_0 \to \mathbb{R}$, $m_n(x) = x^{-n}$, is differentiable at every
   $c \in A_0$ as a function on $A_0$, and
   $$m_n'(c) \;=\; -\,\iota(n)\,c^{\,-n-1} .$$
4. Let $a : \mathbb{N} \to \mathbb{R}$ with $a_j = 0$ for $j \ge n$, and let
   $P : \mathbb{R} \to \mathbb{R}$ be the polynomial function
   $P(x) = \sum_{j<n} a_j x^{j}$ ([[def-finite-sum]]). Then $P$ is
   differentiable at every $c \in \mathbb{R}$, and, defining $e : \mathbb{N}
   \to \mathbb{R}$ by $e_0 := 0$ and $e_j := \iota(j)\,a_j\,c^{\,j-1}$ for
   $j \ge 1$,
   $$P'(c) \;=\; \sum_{j<n} e_j .$$

**Claim 2 is stated for $n \ge 1$ and not for $n \ge 0$, and that is not
timidity.** At $n = 0$ its right-hand side reads $\iota(0)\,c^{-1}$, and
$c^{-1}$ is not defined at $c = 0$ ([[def-integer-power]]), so the formula is
not a statement about the whole line. Claim 1 is what covers $n = 0$, and it
says the derivative is $0$ there, which is what the informal reading
"$0 \cdot c^{-1}$" is reaching for. The same shift is why the term $e_0$ of
claim 4 is defined to be $0$ outright rather than by the formula.

## Facts & Assumptions

**Given:** A natural $n$, a real $c$, and the functions $p_n$, $m_n$ and $P$ of the statement.

[L1] Powers ([[def-integer-power]]): $a^{0} = 1$ and $a^{m+1} = a^{m}a$ for every $a \in \mathbb{R}$ and $m \in \mathbb{N}$; $a^{-m} := (a^{m})^{-1}$ for $a \ne 0$ and $m \ge 1$; and $0^{m} = 0$ for $m \ge 1$.

[L2] Canonical naturals ([[def-canonical-natural]]): $\iota(0) = 0$, $\iota(m+1) = \iota(m) + 1$, and hence $\iota(1) = 1$.

[L3] Algebra of derivatives ([[thm-algebra-of-derivatives]]): at a limit point $c$ of the common domain, sums, scalar multiples and products of functions differentiable at $c$ are differentiable at $c$ with the four stated formulas, and if the denominator is nonzero at $c$ then the quotient, restricted to the set where the denominator does not vanish, is differentiable at $c$ with the quotient formula; that restricted set has $c$ as a limit point.

[L4] Derivative and difference quotient ([[def-derivative]]): $f$ is differentiable at a limit point $c$ of its domain $D$ exactly when the difference quotient $x \mapsto (f(x)-f(c))/(x-c)$, a function on $D \setminus \{c\}$, has a limit at $c$, and $f'(c)$ is that limit. A constant function $h \equiv K$ on a set having $c$ as a limit point has $\lim_{x \to c} h(x) = K$: given a real $\varepsilon > 0$, any real $\delta > 0$ serves, since $|K - K| = 0 < \varepsilon$ ([[def-function-limit]]).

[L5] Induction principle on $\mathbb{N}$ ([[thm-induction-principle]]).

[L6] Finite sums ([[def-finite-sum]]): $\sum_{j<0} b_j = 0$ and $\sum_{j<m+1} b_j = \bigl(\sum_{j<m} b_j\bigr) + b_m$.

[L7] Integer exponent laws for a nonzero base ([[lem-power-laws]]): $a^{k} \ne 0$ for every $k \in \mathbb{N}$ when $a \ne 0$; and for integers $j, k$ one has $a^{j}a^{k} = a^{j+k}$, $(a^{j})^{k} = a^{jk}$ and $a^{-k} = (a^{k})^{-1}$.

[L8] Every real is a limit point of $\mathbb{R}$, punctured neighbourhoods in $\mathbb{R}$ being never empty ([[def-limit-point-r]], [[def-neighbourhood-r]]).

## Proof

**Proof technique:** induction.

1.1 **Base case, claim 2 at $n = 1$.** By [L1], $x^{1} = x^{0}x = 1 \cdot x = x$, so $p_1$ is the identity. Fix $c \in \mathbb{R}$; for every $x \ne c$ the difference quotient is $(x - c)/(x - c) = 1$, so it is the constant function $1$ on $\mathbb{R} \setminus \{c\}$, and by [L4] and [L8] its limit at $c$ is $1$. Since $\iota(1)c^{0} = 1 \cdot 1 = 1$ by [L1] and [L2], claim 2 holds at $n = 1$. [base, L1, L2, L4, L8]

1.2 **Inductive hypothesis.** Fix a natural $n \ge 1$ and assume that $p_n$ is differentiable at every $c \in \mathbb{R}$ with $p_n'(c) = \iota(n)c^{\,n-1}$. [ih]

1.3 **Claim 1.** By [L1] the function $p_0$ is the constant function $1$. Fix $c \in \mathbb{R}$; for every $x \ne c$ its difference quotient is $(1-1)/(x-c) = 0$, the constant function $0$ on $\mathbb{R}\setminus\{c\}$, whose limit at $c$ is $0$ by [L4] and [L8]. So $p_0$ is differentiable at every $c$ with $p_0'(c) = 0$. [L1, L4, L8]

2.1 **Successor step.** Let $c \in \mathbb{R}$. By [L1], $p_{n+1}(x) = x^{n+1} = x^{n}x = p_n(x)\,p_1(x)$ for every $x$. Both factors are differentiable at $c$, by step 1.2 and step 1.1, so the product rule of [L3] gives that $p_{n+1}$ is differentiable at $c$ with $p_{n+1}'(c) = p_n'(c)p_1(c) + p_n(c)p_1'(c) = \iota(n)c^{\,n-1}c + c^{n} \cdot 1$. Now $c^{\,n-1}c = c^{\,(n-1)+1} = c^{n}$ by [L1], so the right-hand side is $\iota(n)c^{n} + c^{n} = \bigl(\iota(n)+1\bigr)c^{n} = \iota(n+1)c^{n}$ by [L2]. [step 1.1, step 1.2, L1, L2, L3]

3.1 **Claim 2.** Steps 1.1 and 2.1 are the base case and the successor step of an induction over the naturals $n \ge 1$, so by [L5] the function $p_n$ is differentiable at every $c \in \mathbb{R}$ with $p_n'(c) = \iota(n)c^{\,n-1}$, for every natural $n \ge 1$. [step 1.1, step 2.1, L5]

4.1 **Claim 3.** Let $n \ge 1$. The set $\{\, x \in \mathbb{R} : p_n(x) \ne 0 \,\}$ is exactly $A_0$: a nonzero $x$ has $x^{n} \ne 0$ by [L7], and $0^{n} = 0$ by [L1]. Fix $c \in A_0$. The constant function $1$ on $\mathbb{R}$ is differentiable at $c$ with derivative $0$ by step 1.3, and $p_n$ is differentiable at $c$ with derivative $\iota(n)c^{\,n-1}$ by step 3.1, with $p_n(c) = c^{n} \ne 0$. So the quotient rule of [L3] applies: the function $x \mapsto 1/x^{n}$ on $A_0$, which by [L1] and [L7] is $m_n$, is differentiable at $c$ with derivative $\bigl(0 \cdot c^{n} - 1 \cdot \iota(n)c^{\,n-1}\bigr)/(c^{n})^{2} = -\iota(n)\,c^{\,n-1}\bigl(c^{\,2n}\bigr)^{-1} = -\iota(n)\,c^{\,n-1-2n} = -\iota(n)\,c^{\,-n-1}$, where $(c^{n})^{2} = c^{\,2n}$ and $c^{\,n-1}c^{\,-2n} = c^{\,-n-1}$ are [L7]. [step 1.3, step 3.1, L1, L3, L7]

4.2 **Claim 4, by a second induction on $n$.** Fix $c \in \mathbb{R}$ and the sequence $a$. At $n = 0$ the sum $P(x) = \sum_{j<0} a_j x^{j}$ is $0$ for every $x$ by [L6], so $P$ is the constant function $0$ and, as in step 1.3, $P'(c) = 0 = \sum_{j<0} e_j$. Suppose the claim holds at $n$, and let $P_{n+1}(x) := \sum_{j<n+1} a_j x^{j}$. By [L6], $P_{n+1}(x) = P_n(x) + a_n x^{n}$ for every $x$, where $P_n(x) = \sum_{j<n} a_j x^{j}$. The function $x \mapsto a_n x^{n}$ is differentiable at $c$ with derivative $e_n$: for $n = 0$ it is the constant $a_n$, of derivative $0 = e_0$, by step 1.3 and the scalar rule of [L3]; for $n \ge 1$ it is the scalar multiple $a_n p_n$, of derivative $a_n \iota(n)c^{\,n-1} = e_n$, by step 3.1 and the scalar rule of [L3]. The inductive hypothesis gives $P_n'(c) = \sum_{j<n} e_j$, so the sum rule of [L3] gives that $P_{n+1}$ is differentiable at $c$ with $P_{n+1}'(c) = \sum_{j<n} e_j + e_n = \sum_{j<n+1} e_j$ by [L6]. By [L5] claim 4 holds for every $n \in \mathbb{N}$. [step 1.3, step 3.1, L3, L5, L6]

5.1 All four claims are established: claim 1 by step 1.3, claim 2 by step 3.1, claim 3 by step 4.1 and claim 4 by step 4.2. [step 1.3, step 3.1, step 4.1, step 4.2, discharge-induction] ∎

## Remarks

- **Why the induction starts at $n = 1$ and not at $n = 0$.** The successor step multiplies by the identity, and the identity is $p_1$; starting at $n = 0$ would require the formula of claim 2 to hold at $n = 0$, which it does not, since $c^{-1}$ is undefined at $c = 0$. The two statements are therefore kept apart, and claim 1 is proved on its own from the definition. This is the same index care that [[def-canonical-natural]] records for families of reciprocals: $\mathbb{N}$ contains $0$, and a formula written for "$n$" is a claim about $n = 0$ unless it says otherwise.

- **The negative exponents cost nothing extra.** Claim 3 is the quotient rule of [[thm-algebra-of-derivatives]] applied with numerator the constant $1$, and the domain it produces, the set where $x^{n}$ does not vanish, is exactly $\mathbb{R} \setminus \{0\}$; no separate argument and no separate limit is needed. Rational exponents are a different matter, resting on [[thm-nth-roots-exist]], and are treated on the companion page rather than here.

- **Claim 4 is a statement about a finite sum, not about an infinite one.** Nothing here says anything about differentiating a series term by term; that is a separate question, needing hypotheses about convergence that this page does not have and does not assume.
````

### `lem-integer-part`

````markdown
---
id: lem-integer-part
kind: lemma
title: "Integer part: for every real $x$ there is exactly one integer $m$ with $m \\le x < m + 1$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-integers, def-natural-numbers, lem-nat-embeds-int, lem-int-embeds-rat, lem-rat-embeds-dense, lem-nat-discrete, thm-int-ordered-ring, thm-int-comm-ring, thm-of-archimedean, thm-well-ordering-principle, thm-induction-principle, lem-of-naturals-positive, lem-of-add-order, lem-of-abs-value, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: [lem-floor-function, lem-floor-exists]
landmark: true
short: "integer part (floor)"
proof_strategy: constructive
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
    - title: "Floor and ceiling functions (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Floor_and_ceiling_functions"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §5.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Identify $\mathbb{Z}$ with its canonical copy inside $\mathbb{R}$, along the
embeddings $\mathbb{N} \to \mathbb{Z} \to \mathbb{Q} \to \mathbb{R}$
([[lem-nat-embeds-int]], [[lem-int-embeds-rat]], [[lem-rat-embeds-dense]],
[[def-integers]]). Then for every real $x$ there is **exactly one** integer $m$
with

$$m \;\le\; x \;<\; m + 1 .$$

It is written $\lfloor x \rfloor$ and called the **integer part**, or **floor**,
of $x$.

**Two independent ingredients are needed and neither may be dropped.** Existence
is the Archimedean property ([[thm-of-archimedean]]) together with the
well-ordering of $\mathbb{N}$ ([[thm-well-ordering-principle]]): the first says
that $x$ is caught between two integers at all, the second picks the *least*
integer above $x$. Uniqueness is the discreteness of $\mathbb{Z}$: no integer
lies strictly between $m$ and $m+1$.

This lemma is stated once here and reused. It is what turns "the nearest integer
to $x$" from a picture into an object, and the companion page's oscillator
$\psi(x) = \inf_{n \in \mathbb{Z}} |x - n|$ is computed from it in one line.

## Facts & Assumptions

**Given:** A real $x$. Naturals, integers and rationals are identified with their canonical copies in $\mathbb{R}$ along $\mathbb{N} \to \mathbb{Z} \to \mathbb{Q} \to \mathbb{R}$.

[L1] The embeddings $\mathbb{N} \to \mathbb{Z} \to \mathbb{Q} \to \mathbb{R}$ are injective and preserve $0$, $1$, addition, multiplication and order ([[lem-nat-embeds-int]], [[lem-int-embeds-rat]], [[lem-rat-embeds-dense]], [[def-integers]]); $\mathbb{Z}$ is a totally ordered commutative ring ([[thm-int-ordered-ring]], [[thm-int-comm-ring]]); every integer $\ge 0$ is the image of a unique natural, that map being injective and order preserving ([[lem-nat-embeds-int]]); and a natural $j \ne 0$ satisfies $j \ge 1$ ([[lem-nat-discrete]], [[def-natural-numbers]]).

[L2] The image of a natural $n \ge 1$ under the composite $\mathbb{N} \to \mathbb{R}$ is the canonical natural $n \cdot 1_{\mathbb{R}}$ of [[lem-of-naturals-positive]]. Indeed that composite preserves $1$ and addition by [L1], while $n \cdot 1_{\mathbb{R}}$ is defined by $1 \cdot 1_{\mathbb{R}} = 1_{\mathbb{R}}$ and $(n+1) \cdot 1_{\mathbb{R}} = n \cdot 1_{\mathbb{R}} + 1_{\mathbb{R}}$, so the two agree at $1$ and satisfy the same recursion; induction on $n$ ([[thm-induction-principle]]) gives the identification.

[L3] Archimedean property: for every real $t$ there is a natural $n \ge 1$ with $t < n \cdot 1_{\mathbb{R}}$ ([[thm-of-archimedean]], [[def-complete-ordered-field]]).

[L4] Well-ordering principle: every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L5] Order arithmetic in $\mathbb{R}$: the order is total, so the negation of $t < u$ is $u \le t$; trichotomy, so $t < u$ and $u \le t$ cannot both hold; translation invariance ([[lem-of-add-order]]); $t \le |t|$ and $-t \le |t|$ ([[lem-of-abs-value]]); and transitivity ([[def-ordered-field]], [[def-complete-ordered-field]]).

## Proof

**Proof technique:** constructive.

1.1 Apply [L3] to the real $|x|$: fix a natural $n \ge 1$ with $|x| < n$. Since $x \le |x|$ and $-x \le |x|$, this gives $-n < x < n$. [L2, L3, L5, choose]

2.1 Put $S := \{\, k \in \mathbb{N} \ : \ x < k - n \,\}$, where $k - n$ is formed in $\mathbb{Z}$ and read in $\mathbb{R}$ through [L1]. It is a subset of $\mathbb{N}$, and it is nonempty: the natural $2n$ satisfies $2n - n = n > x$ by step 1.1, so $2n \in S$. [step 1.1, L1, L2, construct]

3.1 By the well-ordering principle [L4] let $k_0$ be the least element of $S$. [step 2.1, L4, choose]

4.1 The index $k_0$ is not $0$: for $k = 0$ the defining condition reads $x < 0 - n = -n$, which trichotomy excludes since $-n < x$ by step 1.1. Hence $k_0 \ne 0$, so $k_0 \ge 1$ by [L1], and $k_0 - 1$ is again a natural number. [step 1.1, step 3.1, L1, L5]

5.1 Set $m := (k_0 - 1) - n$, an integer. Since $k_0 - 1 < k_0$ and $k_0$ is the least element of $S$, the natural $k_0 - 1$ does not lie in $S$, that is, $x < (k_0 - 1) - n$ fails; the order being total, $m = (k_0 - 1) - n \le x$. [step 3.1, step 4.1, L1, L5, construct]

6.1 On the other hand $k_0 \in S$ gives $x < k_0 - n = \bigl((k_0 - 1) - n\bigr) + 1 = m + 1$. So $m \le x < m + 1$, and existence is proved. [step 3.1, step 5.1, L1, L5]

7.1 Uniqueness: suppose an integer $m'$ also satisfies $m' \le x < m' + 1$ and $m' \ne m$. The order of $\mathbb{Z}$ being total, one of $m < m'$ and $m' < m$ holds, and the two cases are the same with the roles of $m$ and $m'$ exchanged; so assume $m < m'$. Then $m' - m$ is an integer $> 0$, hence by [L1] the image of a natural $j \ne 0$, so $j \ge 1$ and $m' - m \ge 1$, that is $m + 1 \le m'$. But then $x < m + 1 \le m' \le x$, which trichotomy forbids. Hence $m' = m$. [step 6.1, L1, L5]

8.1 Therefore exactly one integer $m$ satisfies $m \le x < m + 1$, and we write $m = \lfloor x \rfloor$. [step 6.1, step 7.1, discharge-construct] ∎

## Remarks

- **What the two halves of the proof really use.** Step 1.1 is the only use of the Archimedean property, and it is indispensable: in a non-Archimedean ordered field ([[cex-ordered-field-not-archimedean]]) an element larger than every canonical natural has no integer part at all, since the set $S$ of step 2.1 would be empty. Step 3.1 is the only use of the well-ordering principle, and it is what makes the construction canonical: no choice is made anywhere, and $\lfloor x \rfloor$ is a function of $x$.

- **Immediate consequences, used later.** From $m \le x < m + 1$ one reads off $0 \le x - m < 1$ and $0 < (m+1) - x \le 1$; and $\lfloor x \rfloor = x$ exactly when $x$ is an integer, since an integer $m$ satisfies $m \le m < m + 1$ and uniqueness does the rest. The translation identity $\lfloor x + p \rfloor = \lfloor x \rfloor + p$ for an integer $p$ follows the same way: adding $p$ to $m \le x < m+1$ gives $m + p \le x + p < (m + p) + 1$, and uniqueness identifies $m + p$ as the integer part of $x + p$.

- **The ceiling is not defined here** and is not needed on this page; it would be the least integer $\ge x$, obtained from the same set $S$ without the shift by one.
````

### `thm-algebra-of-derivatives`

````markdown
---
id: thm-algebra-of-derivatives
kind: theorem
title: "Sums, scalar multiples, products and quotients: $(f+g)'(c) = f'(c) + g'(c)$, $(\\alpha f)'(c) = \\alpha f'(c)$, $(fg)'(c) = f'(c)g(c) + f(c)g'(c)$, and $(f/g)'(c) = \\bigl(f'(c)g(c) - f(c)g'(c)\\bigr)/g(c)^{2}$ when $g(c) \\ne 0$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-derivative, thm-caratheodory-characterisation, cor-differentiable-implies-continuous, thm-algebra-of-continuous-functions, def-continuity-real, def-function-limit, def-limit-point-r, lem-sign-preservation-near-a-limit, def-integer-power, lem-of-no-zero-divisors]
justified_by: []
aliases: [thm-differentiation-rules, thm-product-rule, thm-quotient-rule]
landmark: true
short: "algebra of derivatives"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Product rule (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_rule"
    - title: "Quotient rule (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Quotient_rule"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5 (Thm 5.3)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.1"
      url: "https://www.jirka.org/ra/"
    - title: "J. Lebl, Basic Analysis I, The Derivative"
      url: "https://www.jirka.org/ra/html/der_chapter.html"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $c \in A$ be a limit point of $A$
([[def-limit-point-r]]), let $f, g : A \to \mathbb{R}$ be differentiable at $c$
([[def-derivative]]) and let $\alpha \in \mathbb{R}$. Then:

1. $f + g$ is differentiable at $c$ and $(f+g)'(c) = f'(c) + g'(c)$;
2. $\alpha f$ is differentiable at $c$ and $(\alpha f)'(c) = \alpha f'(c)$;
3. $fg$ is differentiable at $c$ and $(fg)'(c) = f'(c)g(c) + f(c)g'(c)$;
4. if $g(c) \ne 0$ then, writing $A_0 := \{\, x \in A : g(x) \ne 0 \,\}$, the
   point $c$ lies in $A_0$ and is a limit point of $A_0$, the quotient
   $(f/g)|_{A_0} : A_0 \to \mathbb{R}$, $x \mapsto f(x)/g(x)$, is differentiable
   at $c$ as a function on $A_0$, and
   $$\bigl((f/g)|_{A_0}\bigr)'(c) \;=\; \frac{f'(c)\,g(c) - f(c)\,g'(c)}{g(c)^{2}} .$$

Each claim asserts two things: that the derivative on the left exists, and that
it has the stated value. Both are proved.

**Why claim 4 is stated on $A_0$.** The function $f/g$ is not defined where $g$
vanishes, and $g$ may vanish at points of $A$ far from $c$; restricting to $A_0$
is forced. That the restriction still has $c$ as a limit point, so that a
derivative there means anything at all, is not free either, and it is the last
claim of [[lem-sign-preservation-near-a-limit]] applied to $g$. The hypothesis
is $g(c) \ne 0$, not "$g$ vanishes nowhere".

**Everything is proved through
[[thm-caratheodory-characterisation]].** No difference quotient is estimated and
no limit theorem beyond continuity is used, so no choice principle is spent.
The four identities are four algebraic rearrangements of an increment, each
followed by a reading of [[thm-algebra-of-continuous-functions]].

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a point $c \in A$ that is a limit point of $A$, functions $f, g : A \to \mathbb{R}$ differentiable at $c$, and a real $\alpha$; for claim 4 also the hypothesis $g(c) \ne 0$ together with $A_0 := \{\, x \in A : g(x) \ne 0 \,\}$ ([[def-derivative]], [[def-limit-point-r]]).

[L1] Carathéodory's characterisation ([[thm-caratheodory-characterisation]]), used in both directions: for a set $B \subseteq \mathbb{R}$, a point $p \in B$ that is a limit point of $B$ and a function $h : B \to \mathbb{R}$, the function $h$ is differentiable at $p$ if and only if there is $\eta : B \to \mathbb{R}$, continuous at $p$, with $h(x) - h(p) = \eta(x)(x - p)$ for every $x \in B$, and then $\eta(p) = h'(p)$.

[L2] Algebra of continuous functions ([[thm-algebra-of-continuous-functions]]): sums, scalar multiples and products of functions continuous at a point are continuous there (claim 1); every constant function and the identity are continuous everywhere on the domain (claim 5); and if $u, v$ are continuous at a point $p$ of their common domain $D$ with $v(p) \ne 0$, then $p$ lies in $D_0 := \{x \in D : v(x) \ne 0\}$ and $(u/v)|_{D_0}$ is continuous at $p$ as a function on $D_0$ (claim 4).

[L3] Continuity passes to a subset of the domain: if $B \subseteq A$, if $p \in B$ and if $\psi : A \to \mathbb{R}$ is continuous at $p$, then $\psi|_B$ is continuous at $p$, the condition on the restriction quantifying over fewer points ([[def-continuity-real]]).

[L4] A function differentiable at $c$ is continuous at $c$ ([[cor-differentiable-implies-continuous]]); in particular $g$ is.

[L5] At a limit point $c$ of $A$, continuity of $g$ at $c$ says exactly that $\lim_{x \to c} g(x)$ exists and equals $g(c)$ ([[def-continuity-real]], clause 1, [[def-function-limit]]).

[L6] Sign preservation ([[lem-sign-preservation-near-a-limit]]): if $c$ is a limit point of $A$ and $\lim_{x \to c} g(x)$ exists and is nonzero, then $c$ is a limit point of $A_0 = \{x \in A : g(x) \ne 0\}$.

[L7] A product of two nonzero reals is nonzero ([[lem-of-no-zero-divisors]]), and $g(c)^{2} = g(c)\,g(c)$ ([[def-integer-power]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], applied to $f$ and to $g$ on $A$ at $c$, fix $\varphi, \psi : A \to \mathbb{R}$, both continuous at $c$, with $f(x) - f(c) = \varphi(x)(x - c)$ and $g(x) - g(c) = \psi(x)(x - c)$ for every $x \in A$, and with $\varphi(c) = f'(c)$ and $\psi(c) = g'(c)$. [L1, choose]

1.2 Assume $g(c) \ne 0$. Then $c \in A_0$ by the definition of $A_0$; $g$ is continuous at $c$ by [L4], so $\lim_{x \to c} g(x) = g(c) \ne 0$ by [L5]; and therefore $c$ is a limit point of $A_0$ by [L6]. [L4, L5, L6]

2.1 **Sum.** For every $x \in A$, $(f+g)(x) - (f+g)(c) = \bigl(f(x)-f(c)\bigr) + \bigl(g(x)-g(c)\bigr) = \bigl(\varphi(x) + \psi(x)\bigr)(x-c)$. The function $\varphi + \psi$ is continuous at $c$ by [L2], and $(\varphi+\psi)(c) = f'(c) + g'(c)$. So [L1] gives claim 1. [step 1.1, L1, L2]

2.2 **Scalar multiple.** For every $x \in A$, $(\alpha f)(x) - (\alpha f)(c) = \alpha\bigl(f(x)-f(c)\bigr) = \bigl(\alpha\varphi(x)\bigr)(x-c)$. The function $\alpha\varphi$ is continuous at $c$ by [L2], with value $\alpha f'(c)$ there. So [L1] gives claim 2. [step 1.1, L1, L2]

2.3 **Product.** For every $x \in A$, $f(x)g(x) - f(c)g(c) = \bigl(f(x)-f(c)\bigr)g(x) + f(c)\bigl(g(x)-g(c)\bigr) = \bigl(\varphi(x)g(x) + f(c)\psi(x)\bigr)(x-c)$. Put $\chi := \varphi\,g + f(c)\,\psi$; it is continuous at $c$ by [L2], since $\varphi$, $\psi$ and (by [L4]) $g$ are, and constants are; and $\chi(c) = \varphi(c)g(c) + f(c)\psi(c) = f'(c)g(c) + f(c)g'(c)$. So [L1] gives claim 3. [step 1.1, L1, L2, L4]

2.4 **Quotient, the rearrangement.** Assume $g(c) \ne 0$ and let $x \in A_0$, so $g(x) \ne 0$ and $g(c) \ne 0$. Then $f(x)/g(x) - f(c)/g(c) = \bigl(f(x)g(c) - f(c)g(x)\bigr)/\bigl(g(x)g(c)\bigr)$, and $f(x)g(c) - f(c)g(x) = \bigl(f(x)-f(c)\bigr)g(c) - f(c)\bigl(g(x)-g(c)\bigr) = \bigl(\varphi(x)g(c) - f(c)\psi(x)\bigr)(x-c)$. So, defining $\theta : A_0 \to \mathbb{R}$ by $\theta(x) := \bigl(\varphi(x)g(c) - f(c)\psi(x)\bigr)/\bigl(g(x)g(c)\bigr)$, one has $(f/g)|_{A_0}(x) - (f/g)|_{A_0}(c) = \theta(x)(x-c)$ for every $x \in A_0$. [step 1.1, L1, L7]

2.5 **Quotient, continuity of the factor.** Assume $g(c) \ne 0$. The restrictions of $\varphi$, $\psi$ and $g$ to $A_0$ are continuous at $c \in A_0$ by [L3] and [L4], so by [L2] the numerator $u(x) := \varphi(x)g(c) - f(c)\psi(x)$ and the denominator $v(x) := g(x)g(c)$ are continuous at $c$ as functions on $A_0$. By [L7] the denominator vanishes at no point of $A_0$, so $\{x \in A_0 : v(x) \ne 0\} = A_0$, and $v(c) = g(c)^{2} \ne 0$; hence claim 4 of [L2] gives that $\theta = (u/v)|_{A_0}$ is continuous at $c$, with $\theta(c) = \bigl(\varphi(c)g(c) - f(c)\psi(c)\bigr)/g(c)^{2} = \bigl(f'(c)g(c) - f(c)g'(c)\bigr)/g(c)^{2}$. [step 1.1, step 1.2, L2, L3, L4, L7]

3.1 **Quotient, conclusion.** Assume $g(c) \ne 0$. By step 1.2 the point $c$ lies in $A_0$ and is a limit point of $A_0$; by steps 2.4 and 2.5 the function $\theta : A_0 \to \mathbb{R}$ is continuous at $c$ and factors the increment of $(f/g)|_{A_0}$. So [L1], applied on the domain $A_0$ at the point $c$, gives that $(f/g)|_{A_0}$ is differentiable at $c$ with derivative $\theta(c)$: claim 4. [step 1.2, step 2.4, step 2.5, L1]

4.1 Claims 1 to 4 are proved, by steps 2.1, 2.2, 2.3 and 3.1 respectively, each by exhibiting the Carathéodory factor of the new function and reading its continuity at $c$ off the algebra of continuous functions. [step 2.1, step 2.2, step 2.3, step 3.1] ∎

## Remarks

- **The product rearrangement in one line.** The identity $fg - f(c)g(c) = (f - f(c))\,g + f(c)\,(g - g(c))$ splits the increment of a product into two increments, one multiplied by $g$ and one by a constant. It is the same identity that carries the product case of [[thm-algebra-of-function-limits]], read at the level of increments rather than of $\varepsilon$; here the factor $g$ has to be continuous at $c$ rather than merely bounded near it, and [[cor-differentiable-implies-continuous]] is what supplies that.

- **The reciprocal is the case $f \equiv 1$.** Claim 4 then reads $\bigl((1/g)|_{A_0}\bigr)'(c) = -g'(c)/g(c)^{2}$, since $f'(c) = 0$ for a constant $f$; nothing separate has to be proved, and the derivative of a negative integer power on this page is obtained exactly this way.

- **Two hypotheses that look removable and are not.** In claim 4 the hypothesis $g(c) \ne 0$ cannot be weakened to "$g$ is nonzero somewhere near $c$", because $c$ itself must lie in the smaller domain for a derivative there to be a statement about $c$; and the conclusion is about $(f/g)|_{A_0}$, not about any extension of it to $A$, since no such extension is canonical.
````

