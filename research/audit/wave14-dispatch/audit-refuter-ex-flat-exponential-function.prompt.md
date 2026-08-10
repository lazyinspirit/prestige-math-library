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

- critical risk (13): 7 declared dependencies; 6 cited facts; boundary-sensitive language; induction, recursion, or minimality; quotient or equivalence-class construction; analytic limiting/completeness language

## Target item — `ex-flat-exponential-function`

Normalized current SHA-256: `f8e641a955e0d82c97b4417e4dc193c8df5ebb9479102a135560756cb1e54644`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: ex-flat-exponential-function
kind: example
title: "The one-sided flat function is $C^\\infty$ with identically zero Taylor series"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-exponential-beats-every-polynomial, thm-derivative-of-exponential, thm-chain-rule, thm-algebra-of-derivatives, cor-power-series-sums-are-smooth-with-coefficient-formula, cor-exponential-reciprocal-and-positivity, def-factorial-and-falling-factorial]
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
    - title: "MIT 18.102, Chapter 4 notes"
      url: "https://math.mit.edu/~rbm/18-102-Sp16/Chapter4.pdf"
pipeline_run: null
---

## Example

Define
$$\phi(x)=\begin{cases}\exp(-1/x),&x>0,\\0,&x\le0.\end{cases}$$
Then $\phi\in C^\infty(\mathbb R)$ and $\phi^{(m)}(0)=0$ for every $m\in\mathbb N$, although $\phi(x)>0$ for $x>0$.

## Facts & Assumptions

**Given:** The displayed function.

[L1] Exponential dominates every polynomial ([[thm-exponential-beats-every-polynomial]]).

[L2] Exponential is smooth, with positive values ([[thm-derivative-of-exponential]], [[cor-power-series-sums-are-smooth-with-coefficient-formula]], [[cor-exponential-reciprocal-and-positivity]]).

[L3] Products and composites are differentiable by [[thm-algebra-of-derivatives]] and [[thm-chain-rule]].

## Verification

**Proof technique:** induction.

1.1 On $x>0$, repeated product and chain rules give $\phi^{(m)}(x)=P_m(1/x)\exp(-1/x)$ for a polynomial $P_m$; on $x<0$, every derivative is $0$.   [base, L2, L3, given]

2.1 If the formula holds at order $m$, differentiating produces another polynomial $P_{m+1}(1/x)$ times $\exp(-1/x)$. By [L1], this tends to $0$ as $x\to0^+$.  [ih, step 1.1, L1, L2, L3]

3.1 The difference quotient for the $m$-th derivative at $0$ is again a polynomial in $1/x$ times $\exp(-1/x)$, so it tends to $0$. Induction therefore extends every derivative continuously across $0$, with value $0$.   [step 2.1, L1, given, discharge-induction] ∎
````

## Wave 14 provenance row

```json
{
  "id": "ex-flat-exponential-function",
  "statement": "literature-derived",
  "proof": "ai-altered",
  "evidence": "exact-source",
  "urls": [
    "https://www.jirka.org/ra/html/sec_analfuncs.html",
    "https://math.mit.edu/~rbm/18-102-Sp16/Chapter4.pdf"
  ],
  "rationale": "Lebl and the MIT notes give the same one-sided function exp(-1/x) for x>0 and 0 for x<=0, state it is smooth, and state that all derivatives at 0 vanish. The local polynomial-times-exponential induction follows the standard proof with repository notation.",
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
      "source": "thm-exponential-beats-every-polynomial",
      "source_section": "Statement",
      "quote": "For every $m\\in\\mathbb N$ and every real $a>0$,\n$$\\frac{x^m}{\\exp(ax)}\\longrightarrow0\\qquad(x\\to+\\infty).$$",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-derivative-of-exponential",
      "source_section": "Statement",
      "quote": "The real exponential function is $C^\\infty$, and for every $m\\in\\mathbb N$,\n$$\\exp^{(m)}=\\exp.$$\nIn particular $(\\exp)'=\\exp$.",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "cor-power-series-sums-are-smooth-with-coefficient-formula",
      "source_section": "Statement",
      "quote": "Let $f(x)=\\sum_{n\\ge0}a_n(x-c)^n$ have positive or infinite radius $R$. Define $f^{(0)}:=f$ and $f^{(m+1)}:=(f^{(m)})'$. Then every derivative exists on $|x-c|<R$, and for each $m\\in\\mathbb N$,\n\n$$f^{(m)}(x)=\\sum_{j=0}^{\\infty}\\iota\\!\\left((m+j)^{\\underline m}\\right)a_{m+j}(x-c)^j.$$\n\nIn particular,\n\n$$f^{(m)}(c)=\\iota(m!)a_m,\\qquad a_m=\\frac{f^{(m)}(c)}{\\iota(m!)}.$$",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "cor-exponential-reciprocal-and-positivity",
      "source_section": "Statement",
      "quote": "For every real $x$, $\\exp(x)>0$ and\n$$\\exp(-x)=\\frac1{\\exp(x)}.$$",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-algebra-of-derivatives",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $c \\in A$ be a limit point of $A$\n([[def-limit-point-r]]), let $f, g : A \\to \\mathbb{R}$ be differentiable at $c$\n([[def-derivative]]) and let $\\alpha \\in \\mathbb{R}$. Then:\n\n1. $f + g$ is differentiable at $c$ and $(f+g)'(c) = f'(c) + g'(c)$;\n2. $\\alpha f$ is differentiable at $c$ and $(\\alpha f)'(c) = \\alpha f'(c)$;\n3. $fg$ is differentiable at $c$ and $(fg)'(c) = f'(c)g(c) + f(c)g'(c)$;\n4. if $g(c) \\ne 0$ then, writing $A_0 := \\{\\, x \\in A : g(x) \\ne 0 \\,\\}$, the\n   point $c$ lies in $A_0$ and is a limit point of $A_0$, the quotient\n   $(f/g)|_{A_0} : A_0 \\to \\mathbb{R}$, $x \\mapsto f(x)/g(x)$, is differentiable\n   at $c$ as a function on $A_0$, and\n   $$\\bigl((f/g)|_{A_0}\\bigr)'(c) \\;=\\; \\frac{f'(c)\\,g(c) - f(c)\\,g'(c)}{g(c)^{2}} .$$\n\nEach claim asserts two things: that the derivative on the left exists, and that\nit has the stated value. Both are proved.\n\n**Why claim 4 is stated on $A_0$.** The function $f/g$ is not defined where $g$\nvanishes, and $g$ may vanish at points of $A$ far from $c$; restricting to $A_0$\nis forced. That the restriction still has $c$ as a limit point, so that a\nderivative there means anything at all, is not free either, and it is the last\nclaim of [[lem-sign-preservation-near-a-limit]] applied to $g$. The hypothesis\nis $g(c) \\ne 0$, not \"$g$ vanishes nowhere\".\n\n**Everything is proved through\n[[thm-caratheodory-characterisation]].** No difference quotient is estimated and\nno limit theorem beyond continuity is used, so no choice principle is spent.\nThe four identities are four algebraic rearrangements of an increment, each\nfollowed by a reading of [[thm-algebra-of-continuous-functions]].",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-chain-rule",
      "source_section": "Statement",
      "quote": "Let $A, B \\subseteq \\mathbb{R}$, let $g : A \\to \\mathbb{R}$ with\n$g[A] \\subseteq B$ and let $f : B \\to \\mathbb{R}$, so that the composite\n$f \\circ g : A \\to \\mathbb{R}$ is defined. Let $c \\in A$ be a limit point of\n$A$ ([[def-limit-point-r]]) at which $g$ is differentiable\n([[def-derivative]]), put $b := g(c)$, and suppose $b$ is a limit point of $B$\nat which $f$ is differentiable. Then $f \\circ g$ is differentiable at $c$ and\n\n$$(f \\circ g)'(c) \\;=\\; f'\\bigl(g(c)\\bigr)\\,g'(c) .$$\n\n**Both limit-point hypotheses are needed, and neither is automatic.** That $c$\nis a limit point of $A$ is what makes $g'(c)$ and $(f \\circ g)'(c)$ defined\nsymbols; that $b = g(c)$ is a limit point of $B$ is what makes $f'(b)$ one.\nNothing forces the second: $g$ may be differentiable at $c$ and send $c$ to an\nisolated point of $B$, and there $f'(b)$ is not defined and the formula asserts\nnothing.\n\n**No case analysis appears anywhere.** The naive difference-quotient proof\nwrites $\\frac{f(g(x)) - f(g(c))}{g(x) - g(c)} \\cdot \\frac{g(x) - g(c)}{x - c}$\nand then has to say what happens where $g(x) = g(c)$, which may occur at points\narbitrarily close to $c$. Carathéodory's factorisation never divides by the\ninner increment, so the difficulty does not arise.",
      "uses": [
        "1.1",
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "On $x>0$, repeated product and chain rules give $\\phi^{(m)}(x)=P_m(1/x)\\exp(-1/x)$ for a polynomial $P_m$; on $x<0$, every derivative is $0$.   [base, L2, L3, given]",
      "step": "1.1",
      "inputs": [
        "L2",
        "L3",
        "base",
        "given"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "If the formula holds at order $m$, differentiating produces another polynomial $P_{m+1}(1/x)$ times $\\exp(-1/x)$. By [L1], this tends to $0$ as $x\\to0^+$.  [ih, step 1.1, L1, L2, L3]",
      "step": "2.1",
      "inputs": [
        "L1",
        "1.1",
        "L2",
        "L3",
        "ih"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "The difference quotient for the $m$-th derivative at $0$ is again a polynomial in $1/x$ times $\\exp(-1/x)$, so it tends to $0$. Induction therefore extends every derivative continuously across $0$, with value $0$.   [step 2.1, L1, given, discharge-induction] ∎",
      "step": "3.1",
      "inputs": [
        "2.1",
        "L1",
        "given",
        "discharge-induction"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The domain is the fixed line R."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Steps 1.1 and 3.1 treat the junction x=0 and prove every derivative there is zero."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Step 1.1 gives phi(1)=exp(-1)>0 on the positive branch."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "The two formula branches agree continuously to all orders at their only junction, x=0, by step 3.1."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Step 3.1 is the endpoint check for the half-line branch at 0; away from 0 smoothness is step 1.1."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "No arbitrary selection occurs."
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
    "source": "ex-flat-exponential-function",
    "sourcePage": "the-exponential-function-examples",
    "batch": "wave14-real-analysis",
    "target": "thm-exponential-beats-every-polynomial",
    "declared_target": "thm-exponential-beats-every-polynomial",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-exponential-function",
    "targetBatch": "wave14-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-flat-exponential-function",
    "sourcePage": "the-exponential-function-examples",
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
    "source": "ex-flat-exponential-function",
    "sourcePage": "the-exponential-function-examples",
    "batch": "wave14-real-analysis",
    "target": "thm-chain-rule",
    "declared_target": "thm-chain-rule",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-flat-exponential-function",
    "sourcePage": "the-exponential-function-examples",
    "batch": "wave14-real-analysis",
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
    "source": "ex-flat-exponential-function",
    "sourcePage": "the-exponential-function-examples",
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
    "source": "ex-flat-exponential-function",
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
    "source": "ex-flat-exponential-function",
    "sourcePage": "the-exponential-function-examples",
    "batch": "wave14-real-analysis",
    "target": "def-factorial-and-falling-factorial",
    "declared_target": "def-factorial-and-falling-factorial",
    "target_statement_provenance": "ai-altered",
    "targetPage": "finite-counting-and-binomial-coefficients",
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

## Full exact-current text of every cited or declared item (7)

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

### `thm-chain-rule`

````markdown
---
id: thm-chain-rule
kind: theorem
title: "The chain rule, in one line from Carathéodory: if $g$ is differentiable at $c$ and $f$ is differentiable at $g(c)$, then $f \\circ g$ is differentiable at $c$ with $(f \\circ g)'(c) = f'(g(c))\\,g'(c)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-derivative, thm-caratheodory-characterisation, thm-composition-of-continuous-functions, cor-differentiable-implies-continuous, thm-algebra-of-continuous-functions, def-continuity-real, def-limit-point-r]
justified_by: []
aliases: []
landmark: true
short: "the chain rule"
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
    - title: "Chain rule (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Chain_rule"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5 (Thm 5.5)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.1"
      url: "https://www.jirka.org/ra/"
    - title: "J. Lebl, Basic Analysis I, The Derivative"
      url: "https://www.jirka.org/ra/html/der_chapter.html"
    - title: "J. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $A, B \subseteq \mathbb{R}$, let $g : A \to \mathbb{R}$ with
$g[A] \subseteq B$ and let $f : B \to \mathbb{R}$, so that the composite
$f \circ g : A \to \mathbb{R}$ is defined. Let $c \in A$ be a limit point of
$A$ ([[def-limit-point-r]]) at which $g$ is differentiable
([[def-derivative]]), put $b := g(c)$, and suppose $b$ is a limit point of $B$
at which $f$ is differentiable. Then $f \circ g$ is differentiable at $c$ and

$$(f \circ g)'(c) \;=\; f'\bigl(g(c)\bigr)\,g'(c) .$$

**Both limit-point hypotheses are needed, and neither is automatic.** That $c$
is a limit point of $A$ is what makes $g'(c)$ and $(f \circ g)'(c)$ defined
symbols; that $b = g(c)$ is a limit point of $B$ is what makes $f'(b)$ one.
Nothing forces the second: $g$ may be differentiable at $c$ and send $c$ to an
isolated point of $B$, and there $f'(b)$ is not defined and the formula asserts
nothing.

**No case analysis appears anywhere.** The naive difference-quotient proof
writes $\frac{f(g(x)) - f(g(c))}{g(x) - g(c)} \cdot \frac{g(x) - g(c)}{x - c}$
and then has to say what happens where $g(x) = g(c)$, which may occur at points
arbitrarily close to $c$. Carathéodory's factorisation never divides by the
inner increment, so the difficulty does not arise.

## Facts & Assumptions

**Given:** Sets $A, B \subseteq \mathbb{R}$, functions $g : A \to \mathbb{R}$ with $g[A] \subseteq B$ and $f : B \to \mathbb{R}$, a point $c \in A$ that is a limit point of $A$ at which $g$ is differentiable, and the point $b := g(c) \in B$, a limit point of $B$ at which $f$ is differentiable ([[def-derivative]], [[def-limit-point-r]]).

[L1] Carathéodory's characterisation ([[thm-caratheodory-characterisation]]), used in both directions: for $D \subseteq \mathbb{R}$, a point $p \in D$ that is a limit point of $D$ and $h : D \to \mathbb{R}$, the function $h$ is differentiable at $p$ if and only if there is $\eta : D \to \mathbb{R}$, continuous at $p$, with $h(y) - h(p) = \eta(y)(y - p)$ for every $y \in D$, and then $\eta(p) = h'(p)$.

[L2] Algebra of continuous functions ([[thm-algebra-of-continuous-functions]], claim 1): a product of two functions continuous at a point of their common domain is continuous there.

[L3] Composition of continuous functions ([[thm-composition-of-continuous-functions]]): if $g : A \to \mathbb{R}$ has $g[A] \subseteq B$ and is continuous at $c \in A$, and if $\eta : B \to \mathbb{R}$ is continuous at $g(c)$, then $\eta \circ g$ is continuous at $c$ ([[def-continuity-real]]).

[L4] A function differentiable at a point is continuous there ([[cor-differentiable-implies-continuous]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], applied to $g$ on $A$ at $c$, fix $\psi : A \to \mathbb{R}$, continuous at $c$, with $g(x) - g(c) = \psi(x)(x - c)$ for every $x \in A$ and $\psi(c) = g'(c)$. [L1, choose]

1.2 By [L1], applied to $f$ on $B$ at $b$, fix $\varphi : B \to \mathbb{R}$, continuous at $b$, with $f(y) - f(b) = \varphi(y)(y - b)$ for every $y \in B$ and $\varphi(b) = f'(b)$. [L1, choose]

2.1 **The factorisation.** Let $x \in A$. Then $g(x) \in B$, so taking $y := g(x)$ in step 1.2 gives $f(g(x)) - f(b) = \varphi(g(x))\bigl(g(x) - b\bigr)$, and $g(x) - b = g(x) - g(c) = \psi(x)(x-c)$ by step 1.1. Since $(f \circ g)(c) = f(g(c)) = f(b)$, this reads $(f \circ g)(x) - (f \circ g)(c) = \chi(x)(x - c)$ for every $x \in A$, where $\chi : A \to \mathbb{R}$ is the pointwise product $\chi := (\varphi \circ g)\,\psi$. [step 1.1, step 1.2]

2.2 **The outer factor is continuous at $c$.** By [L4] the function $g$ is continuous at $c$; by step 1.2 the function $\varphi$ is continuous at $b = g(c)$; and $g[A] \subseteq B$. So $\varphi \circ g$ is continuous at $c$ by [L3]. [step 1.2, L3, L4]

3.1 **The factor is continuous at $c$, with the right value.** $\chi$ is the product of $\varphi \circ g$, continuous at $c$ by step 2.2, with $\psi$, continuous at $c$ by step 1.1, so $\chi$ is continuous at $c$ by [L2]; and $\chi(c) = \varphi(g(c))\,\psi(c) = \varphi(b)\,\psi(c) = f'(b)\,g'(c)$. [step 1.1, step 2.2, L2]

4.1 By step 2.1 the function $\chi : A \to \mathbb{R}$ factors the increment of $f \circ g$ at $c$, and by step 3.1 it is continuous at $c$. So [L1], applied to $f \circ g$ on $A$ at the limit point $c$, gives that $f \circ g$ is differentiable at $c$ with $(f \circ g)'(c) = \chi(c) = f'(g(c))\,g'(c)$. [step 2.1, step 3.1, L1] ∎

## Remarks

- **Where the classical proof goes wrong, precisely.** It divides by $g(x) - g(c)$, which may vanish at points arbitrarily close to $c$ even when $g$ is differentiable at $c$ with $g'(c) = 0$; the usual repair defines an auxiliary function equal to the outer quotient off the bad set and to $f'(b)$ on it, and then proves that auxiliary function continuous. That auxiliary function is $\varphi \circ g$, and [[thm-caratheodory-characterisation]] is the observation that it exists before any repair is attempted.

- **What is composed is continuity, not differentiability.** The only theorem about composites used above is [[thm-composition-of-continuous-functions]], and it needs no side hypothesis, unlike the corresponding statement for limits. That is the whole reason the proof has no cases.

- **The formula is about the point $g(c)$, not about $g$ near $c$.** Both derivatives on the right are taken at single points, and the theorem says nothing about $f$ on the image of any neighbourhood of $c$. In particular no hypothesis is placed on $g[A]$ beyond its lying in $B$.
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

### `thm-exponential-beats-every-polynomial`

````markdown
---
id: thm-exponential-beats-every-polynomial
kind: theorem
title: "The exponential dominates every fixed nonnegative integer power at $+\\infty$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-real-exponential-function-and-e, cor-exponential-reciprocal-and-positivity, def-limits-at-infinity, def-factorial-and-falling-factorial, def-canonical-natural, lem-finite-sum-laws]
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
    - title: "MIT 18.102, Chapter 4 notes"
      url: "https://math.mit.edu/~rbm/18-102-Sp16/Chapter4.pdf"
pipeline_run: null
---

## Statement

For every $m\in\mathbb N$ and every real $a>0$,
$$\frac{x^m}{\exp(ax)}\longrightarrow0\qquad(x\to+\infty).$$

## Facts & Assumptions

**Given:** $m\in\mathbb N$ and $a>0$.

[L1] Every term of the exponential series is nonnegative at a nonnegative argument ([[def-real-exponential-function-and-e]]).

[L2] The exponential reciprocal identity is [[cor-exponential-reciprocal-and-positivity]], and limits at infinity are [[def-limits-at-infinity]].

## Proof

**Proof technique:** direct.

1.1 For $x>0$, retain term $m+1$ of the series at $ax$: $\exp(ax)\ge (ax)^{m+1}/\iota((m+1)!)$.   [L1, given]

2.1 Hence $0\le x^m/\exp(ax)\le \iota((m+1)!)/(a^{m+1}x)$.  [step 1.1, L2, algebra]

3.1 The upper bound tends to $0$, so the quotient tends to $0$.  [step 2.1, L2] ∎
````

