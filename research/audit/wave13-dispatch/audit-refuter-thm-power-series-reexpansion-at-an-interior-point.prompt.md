# Audit proof-refuter brief — Wave 13, A6

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

## Target item — `thm-power-series-reexpansion-at-an-interior-point`

Normalized current SHA-256: `cd183bfa2c72cb4eaf57216cb4c13f4c4baa0e57ef4a300e2e570ea88da20325`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: thm-power-series-reexpansion-at-an-interior-point
kind: theorem
title: "A power-series sum may be re-expanded about every interior point, with coefficients given by its derivatives there"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-power-series-reexpansion-double-series, cor-power-series-sums-are-smooth-with-coefficient-formula, thm-binomial-closed-formula]
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
    - title: "Northwestern Math 320-2 lecture notes"
      url: "https://sites.math.northwestern.edu/scg479/courses/notes/lecture-notes-320-2.pdf"
pipeline_run: null
---

## Statement

Suppose $f(x)=\sum_{n\ge0}a_n(x-c)^n$ has radius $R$, and let $d$ satisfy $|d-c|<R$. Then for every real $x$ with

$$|d-c|+|x-d|<R$$

one has

$$f(x)=\sum_{k=0}^{\infty}\frac{f^{(k)}(d)}{\iota(k!)}(x-d)^k.$$

Thus the sum may be re-expanded about every interior point.

## Facts & Assumptions

**Given:** The series for $f$ and the interior point $d$.

[L1] The binomial double series is absolutely convergent when $|d-c|+|x-d|<R$ and may be regrouped by powers of $x-d$ ([[lem-power-series-reexpansion-double-series]]).

[L2] Repeated termwise differentiation gives $f^{(k)}(d)=\sum_{n\ge k}\iota(n^{\underline k})a_n(d-c)^{n-k}$ ([[cor-power-series-sums-are-smooth-with-coefficient-formula]]).

[L3] $\binom nk k!=n^{\underline k}$ for $k\le n$ ([[thm-binomial-closed-formula]]).

## Proof

**Proof technique:** direct.

1.1 Fix $x$ satisfying the stated inequality and set $h:=x-d$. By [L1], $f(x)=\sum_{k\ge0}b_kh^k$, where $b_k:=\sum_{n\ge k}\iota\!\binom nk a_n(d-c)^{n-k}$. [given, L1]

2.1 By [L2] and [L3], $\iota(k!)b_k=f^{(k)}(d)$ for every $k$. [step 1.1, L2, L3, algebra]

3.1 Substituting the coefficient identity from step 2.1 into the series in step 1.1 proves the formula. [step 1.1, step 2.1] ∎
````

## Wave 13 provenance row

```json
{
  "id": "thm-power-series-reexpansion-at-an-interior-point",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://encyclopediaofmath.org/wiki/Power_series",
    "https://sites.math.northwestern.edu/scg479/courses/notes/lecture-notes-320-2.pdf"
  ],
  "rationale": "The sources state that a power-series sum re-expands about each interior point and that the new coefficients are its Taylor coefficients. The item supplies the explicit real radius R-|d-c| and adapts the proof through its double-series lemma.",
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
      "source": "lem-power-series-reexpansion-double-series",
      "source_section": "Statement",
      "quote": "Let $\\sum_{n\\ge0}a_n(x-c)^n$ have radius $R$, let $d$ satisfy $|d-c|<R$, and let $h$ satisfy $|d-c|+|h|<R$. Then\n\n$$\\sum_{n=0}^{\\infty}\\sum_{k=0}^{n}\\iota\\!\\binom nk |a_n|\\,|d-c|^{n-k}|h|^k<\\infty.$$\n\nConsequently the binomial double series is absolutely convergent and may be regrouped by powers of $h$:\n\n$$\\sum_{n=0}^{\\infty}a_n(d+h-c)^n=\\sum_{k=0}^{\\infty}\\left(\\sum_{n=k}^{\\infty}\\iota\\!\\binom nk a_n(d-c)^{n-k}\\right)h^k.$$",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "cor-power-series-sums-are-smooth-with-coefficient-formula",
      "source_section": "Statement",
      "quote": "Let $f(x)=\\sum_{n\\ge0}a_n(x-c)^n$ have positive or infinite radius $R$. Define $f^{(0)}:=f$ and $f^{(m+1)}:=(f^{(m)})'$. Then every derivative exists on $|x-c|<R$, and for each $m\\in\\mathbb N$,\n\n$$f^{(m)}(x)=\\sum_{j=0}^{\\infty}\\iota\\!\\left((m+j)^{\\underline m}\\right)a_{m+j}(x-c)^j.$$\n\nIn particular,\n\n$$f^{(m)}(c)=\\iota(m!)a_m,\\qquad a_m=\\frac{f^{(m)}(c)}{\\iota(m!)}.$$",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-binomial-closed-formula",
      "source_section": "Statement",
      "quote": "Let $n, k \\in \\mathbb{N}$ with $k \\le n$. Then, in $\\mathbb{N}$,\n\n$$\\binom{n}{k}\\cdot k!\\cdot (n-k)! = n! ,$$\n\nand consequently:\n\n1. $\\binom{n}{k}\\cdot k! = n^{\\underline{k}}$\n   ([[def-factorial-and-falling-factorial]]);\n2. **integrality**: in $\\mathbb{R}$,\n   $\\iota\\binom{n}{k} = \\dfrac{\\iota(n!)}{\\iota(k!)\\,\\iota((n-k)!)}$, so the\n   familiar quotient $n!/(k!\\,(n-k)!)$ is the canonical natural of a natural\n   number, namely of the count $\\binom{n}{k}$;\n3. **symmetry**: $\\binom{n}{k} = \\binom{n}{n-k}$.\n\nHere $\\iota$ is the canonical natural of [[def-canonical-natural]] and $n-k$ the\ntruncated difference, which for $k \\le n$ is the ordinary one.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Fix $x$ satisfying the stated inequality and set $h:=x-d$. By [L1], $f(x)=\\sum_{k\\ge0}b_kh^k$, where $b_k:=\\sum_{n\\ge k}\\iota\\!\\binom nk a_n(d-c)^{n-k}$.",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "By [L2] and [L3], $\\iota(k!)b_k=f^{(k)}(d)$ for every $k$.",
      "step": "2.1",
      "inputs": [
        "L2",
        "L3",
        "step 1.1"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "Substituting the coefficient identity from step 2.1 into the series in step 1.1 proves the formula.",
      "step": "3.1",
      "inputs": [
        "step 2.1",
        "step 1.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "thm-power-series-reexpansion-at-an-interior-point: the Statement fixes the displayed objects and has no conclusion depending on an unlicensed choice from an empty family: Suppose $f(x)=\\sum_{n\\ge0}a_n(x-c)^n$ has radius $R$, and let $d$ satisfy $|d-c|<R$. Then for every real $x$ with $$|d-c|+|x-d|<R$$ one has $$f(x)=\\sum_{k=0}^{\\infty}\\frac{f^{(k)}(d)}{\\iota(k!)}(x-d)^k.$$ Thus the sum ma"
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "thm-power-series-reexpansion-at-an-interior-point: no independent zero-parameter boundary remains after the stated hypotheses and definitions; checked against the Statement: Suppose $f(x)=\\sum_{n\\ge0}a_n(x-c)^n$ has radius $R$, and let $d$ satisfy $|d-c|<R$. Then for every real $x$ with $$|d-c|+|x-d|<R$$ one has $$f(x)=\\sum_{k=0}^{\\infty}\\frac{f^{(k)}(d)}{\\iota(k!)}(x-d)^k.$$ Thus the sum ma"
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "thm-power-series-reexpansion-at-an-interior-point: the assertion has no separate unit-size case; its quantified argument applies without a one-case split: Suppose $f(x)=\\sum_{n\\ge0}a_n(x-c)^n$ has radius $R$, and let $d$ satisfy $|d-c|<R$. Then for every real $x$ with $$|d-c|+|x-d|<R$$ one has $$f(x)=\\sum_{k=0}^{\\infty}\\frac{f^{(k)}(d)}{\\iota(k!)}(x-d)^k.$$ Thus the sum ma"
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "thm-power-series-reexpansion-at-an-interior-point: no geometric or algebraic degeneracy changes the asserted conclusion; checked against the Statement: Suppose $f(x)=\\sum_{n\\ge0}a_n(x-c)^n$ has radius $R$, and let $d$ satisfy $|d-c|<R$. Then for every real $x$ with $$|d-c|+|x-d|<R$$ one has $$f(x)=\\sum_{k=0}^{\\infty}\\frac{f^{(k)}(d)}{\\iota(k!)}(x-d)^k.$$ Thus the sum ma"
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Statement: the assertion expressly restricts to the open/interior regime, leaving endpoint behaviour outside its quantifiers: Suppose $f(x)=\\sum_{n\\ge0}a_n(x-c)^n$ has radius $R$, and let $d$ satisfy $|d-c|<R$. Then for every real $x$ with $$|d-c|+|x-d|<R$$ one has $$f(x)=\\sum_{k=0}^{\\infty}\\frac{f^{(k)}(d)}{\\iota(k!)}(x-d)^k.$$ Thus the sum ma"
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "thm-power-series-reexpansion-at-an-interior-point: the proof uses only given objects, formulas, or universal instantiation and makes no choice from a possibly empty family; see Statement: Suppose $f(x)=\\sum_{n\\ge0}a_n(x-c)^n$ has radius $R$, and let $d$ satisfy $|d-c|<R$. Then for every real $x$ with $$|d-c|+|x-d|<R$$ one has $$f(x)=\\sum_{k=0}^{\\infty}\\frac{f^{(k)}(d)}{\\iota(k!)}(x-d)^k.$$ Thus the sum ma"
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "thm-power-series-reexpansion-at-an-interior-point: the Statement is not an equivalence, so there is no forward implication obligation: Suppose $f(x)=\\sum_{n\\ge0}a_n(x-c)^n$ has radius $R$, and let $d$ satisfy $|d-c|<R$. Then for every real $x$ with $$|d-c|+|x-d|<R$$ one has $$f(x)=\\sum_{k=0}^{\\infty}\\frac{f^{(k)}(d)}{\\iota(k!)}(x-d)^k.$$ Thus the sum ma"
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "thm-power-series-reexpansion-at-an-interior-point: the Statement is not an equivalence, so there is no reverse implication obligation: Suppose $f(x)=\\sum_{n\\ge0}a_n(x-c)^n$ has radius $R$, and let $d$ satisfy $|d-c|<R$. Then for every real $x$ with $$|d-c|+|x-d|<R$$ one has $$f(x)=\\sum_{k=0}^{\\infty}\\frac{f^{(k)}(d)}{\\iota(k!)}(x-d)^k.$$ Thus the sum ma"
    }
  ]
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "thm-power-series-reexpansion-at-an-interior-point",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "lem-power-series-reexpansion-double-series",
    "declared_target": "lem-power-series-reexpansion-double-series",
    "target_statement_provenance": "ai-altered",
    "targetPage": "power-series-and-real-analytic-functions",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-power-series-reexpansion-at-an-interior-point",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "cor-power-series-sums-are-smooth-with-coefficient-formula",
    "declared_target": "cor-power-series-sums-are-smooth-with-coefficient-formula",
    "target_statement_provenance": "ai-altered",
    "targetPage": "power-series-and-real-analytic-functions",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-power-series-reexpansion-at-an-interior-point",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "thm-binomial-closed-formula",
    "declared_target": "thm-binomial-closed-formula",
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

## Full exact-current text of every cited or declared item (3)

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

### `lem-power-series-reexpansion-double-series`

````markdown
---
id: lem-power-series-reexpansion-double-series
kind: lemma
title: "The binomial double series used to re-expand a power series at an interior point is absolutely convergent and may be regrouped"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-power-series-convergence-dichotomy, thm-binomial-theorem, thm-double-series-fubini, def-absolute-and-conditional-convergence]
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
    - title: "Power series, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Power_series"
    - title: "Northwestern Math 320-2 lecture notes"
      url: "https://sites.math.northwestern.edu/scg479/courses/notes/lecture-notes-320-2.pdf"
pipeline_run: null
---

## Statement

Let $\sum_{n\ge0}a_n(x-c)^n$ have radius $R$, let $d$ satisfy $|d-c|<R$, and let $h$ satisfy $|d-c|+|h|<R$. Then

$$\sum_{n=0}^{\infty}\sum_{k=0}^{n}\iota\!\binom nk |a_n|\,|d-c|^{n-k}|h|^k<\infty.$$

Consequently the binomial double series is absolutely convergent and may be regrouped by powers of $h$:

$$\sum_{n=0}^{\infty}a_n(d+h-c)^n=\sum_{k=0}^{\infty}\left(\sum_{n=k}^{\infty}\iota\!\binom nk a_n(d-c)^{n-k}\right)h^k.$$

## Facts & Assumptions

**Given:** The power series and points $c,d,d+h$ from the statement.

[L1] A power series converges absolutely at every distance smaller than its radius ([[cor-power-series-convergence-dichotomy]]).

[L2] The binomial theorem gives $\sum_{k=0}^{n}\iota\!\binom nk u^{n-k}v^k=(u+v)^n$ for all real $u,v$ ([[thm-binomial-theorem]]).

[L3] An absolutely convergent double series may be summed and regrouped in either order ([[thm-double-series-fubini]], [[def-absolute-and-conditional-convergence]]).

## Proof

**Proof technique:** direct.

1.1 Put $\rho:=|d-c|+|h|<R$. By [L2], the sum of the absolute values in row $n$ is $|a_n|\rho^n$. [given, L2, algebra]

2.1 The series $\sum_n|a_n|\rho^n$ converges by [L1], so the triangular double series is absolutely convergent. [step 1.1, L1]

3.1 Apply the binomial theorem before summing and [L3] to regroup the absolutely convergent double series by $k$. This yields the displayed identity. [step 2.1, L2, L3] ∎
````

### `thm-binomial-closed-formula`

````markdown
---
id: thm-binomial-closed-formula
kind: theorem
title: "$\\binom{n}{k}\\,k!\\,(n-k)! = n!$ for $k \\le n$; hence $\\binom{n}{k}\\,k! = n^{\\underline{k}}$, the quotient $n!/(k!(n-k)!)$ is a natural number, and $\\binom{n}{k} = \\binom{n}{n-k}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-binomial-coefficient, thm-number-of-bijections-of-a-finite-set,
       def-factorial-and-falling-factorial, thm-sum-rule, thm-product-rule,
       def-sum-over-a-finite-index-set, def-finite-cardinality, thm-subset-of-a-finite-set,
       lem-nat-mult-cancellative, lem-nat-mult-associative, lem-nat-mult-commutative,
       lem-nat-finite-sum-laws-and-the-canonical-embedding, def-canonical-natural,
       lem-of-inverse-unique, def-field, def-nat-order, lem-nat-add-cancellative,
       def-injection-surjection-bijection, def-equinumerous]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
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
    - title: "Binomial coefficient (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binomial_coefficient"
    - title: "Double counting (proof technique) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Double_counting_(proof_technique)"
    - title: "R. Stanley, Enumerative Combinatorics, Vol. 1, Ch. 1"
      url: "https://en.wikipedia.org/wiki/Enumerative_Combinatorics"
pipeline_run: null
---

## Statement

Let $n, k \in \mathbb{N}$ with $k \le n$. Then, in $\mathbb{N}$,

$$\binom{n}{k}\cdot k!\cdot (n-k)! = n! ,$$

and consequently:

1. $\binom{n}{k}\cdot k! = n^{\underline{k}}$
   ([[def-factorial-and-falling-factorial]]);
2. **integrality**: in $\mathbb{R}$,
   $\iota\binom{n}{k} = \dfrac{\iota(n!)}{\iota(k!)\,\iota((n-k)!)}$, so the
   familiar quotient $n!/(k!\,(n-k)!)$ is the canonical natural of a natural
   number, namely of the count $\binom{n}{k}$;
3. **symmetry**: $\binom{n}{k} = \binom{n}{n-k}$.

Here $\iota$ is the canonical natural of [[def-canonical-natural]] and $n-k$ the
truncated difference, which for $k \le n$ is the ordinary one.

## Facts & Assumptions

**Given:** Naturals $n, k$ with $k \le n$; the initial segment $k = \{\,i : i<k\,\}$, which satisfies $k \subseteq n$; and $\operatorname{Bij}(X,Y)$ for the set of bijections $X \to Y$.

[L1] $\binom{m}{j} = \lvert [X]^{j}\rvert$ for every finite $X$ with $\lvert X\rvert = m$; $[X]^{j}$ is finite ([[def-binomial-coefficient]]).

[L2] $\lvert\operatorname{Bij}(X,Y)\rvert = m!$ when $\lvert X\rvert = \lvert Y\rvert = m$, and such a set is finite ([[thm-number-of-bijections-of-a-finite-set]]).

[L3] The sum rule ([[thm-sum-rule]]) and $\sum_{i \in S} c = \lvert S\rvert\cdot c$ ([[def-sum-over-a-finite-index-set]]).

[L4] The product rule $\lvert X \times Y\rvert = \lvert X\rvert\lvert Y\rvert$ ([[thm-product-rule]]).

[L5] Factorials ([[def-factorial-and-falling-factorial]]): $m! \ne 0$ for every $m$; $n^{\underline{k}}(n-k)! = n!$ for $k \le n$.

[L6] Cardinality and subsets ([[def-finite-cardinality]], [[thm-subset-of-a-finite-set]]): transport along a bijection; $\lvert m\rvert = m$; a subset of a finite set is finite.

[L7] Arithmetic of $\mathbb{N}$: multiplication is associative and commutative, and $x\cdot c = y\cdot c$ with $c \ne 0$ gives $x = y$ ([[lem-nat-mult-associative]], [[lem-nat-mult-commutative]], [[lem-nat-mult-cancellative]]); $k + t = n$ determines $t = n-k$ ([[def-nat-order]], [[lem-nat-add-cancellative]]).

[L8] The embedding $\iota$ is multiplicative and injective, and $\iota(m) \ne 0$ for $m \ne 0$ (clauses 0 and 7 of [[lem-nat-finite-sum-laws-and-the-canonical-embedding]], [[def-canonical-natural]]); a nonzero element of a field has a unique inverse, so division by it is legitimate ([[lem-of-inverse-unique]], [[def-field]]).

[L9] Maps ([[def-injection-surjection-bijection]], [[def-equinumerous]]): a map with a two-sided inverse is a bijection; a bijection of $n$ carries a subset onto a subset and the complement onto the complement.

## Proof

**Proof technique:** direct.

1.1 The set to be counted twice is $\operatorname{Bij}(n)$, of cardinality $n!$ by [L2]. For $S \in [n]^{k}$ put $\operatorname{Bij}_S := \{\, f \in \operatorname{Bij}(n) : f[k] = S \,\}$. These sets are pairwise disjoint, since $f$ determines $f[k]$, and their union over $S \in [n]^{k}$ is all of $\operatorname{Bij}(n)$, because $f[k]$ is a subset of $n$ of cardinality $k$ for every bijection $f$ of $n$. [L1, L2, L6, L9, construct]

1.2 For any $X \subseteq n$ with $\lvert X\rvert = k$ one has $\lvert n \setminus X\rvert = n-k$: the sets $X$ and $n \setminus X$ are disjoint with union $n$, so $n = k + \lvert n\setminus X\rvert$ by [L3], and [L7] identifies the second summand as $n-k$. [L3, L6, L7]

2.1 $\lvert\operatorname{Bij}_S\rvert = k!\,(n-k)!$ for every $S \in [n]^{k}$. Indeed $f \mapsto (f\restriction k,\ f\restriction (n\setminus k))$ maps $\operatorname{Bij}_S$ to $\operatorname{Bij}(k, S) \times \operatorname{Bij}(n\setminus k,\ n\setminus S)$: if $f[k] = S$ then $f$ restricted to $k$ is a bijection onto $S$, and, $f$ being a bijection of $n$, it carries $n \setminus k$ onto $n \setminus S$. The map $(u,v) \mapsto u \cup v$ is a two-sided inverse, the union of the two functions being a function on $k \cup (n\setminus k) = n$ and a bijection onto $S \cup (n\setminus S) = n$. Since $\lvert k\rvert = \lvert S\rvert = k$ and $\lvert n\setminus k\rvert = \lvert n\setminus S\rvert = n-k$ by step 1.2, [L2] and [L4] give the cardinality $k!\,(n-k)!$. [step 1.1, step 1.2, L2, L4, L6, L9]

2.2 Symmetry. The map $S \mapsto n \setminus S$ sends $[n]^{k}$ into $[n]^{\,n-k}$ by step 1.2, and $T \mapsto n\setminus T$ sends $[n]^{\,n-k}$ into $[n]^{k}$, again by step 1.2 together with $n-(n-k) = k$, which holds because $(n-k) + k = n$. The two are mutually inverse, since $n\setminus(n\setminus S) = S$ for $S \subseteq n$. Hence $\binom{n}{k} = \binom{n}{n-k}$. [step 1.2, L1, L6, L7, L9, construct]

3.1 Counting $\operatorname{Bij}(n)$ by the blocks of step 1.1 and using [L3], $n! = \lvert\operatorname{Bij}(n)\rvert = \sum_{S \in [n]^{k}}\lvert\operatorname{Bij}_S\rvert = \sum_{S \in [n]^{k}} k!\,(n-k)! = \big\lvert [n]^{k}\big\rvert\cdot k!\,(n-k)! = \binom{n}{k}\,k!\,(n-k)!$, the summand being constant. [step 1.1, step 2.1, L1, L3]

4.1 Clause 1. By [L5], $n^{\underline{k}}(n-k)! = n!$, so $\big(\binom{n}{k}k!\big)(n-k)! = n^{\underline{k}}(n-k)!$ by step 3.1 and associativity; since $(n-k)! \ne 0$, cancellation gives $\binom{n}{k}\,k! = n^{\underline{k}}$. [step 3.1, L5, L7]

4.2 Clause 2. Applying $\iota$ to step 3.1 and using multiplicativity, $\iota(n!) = \iota\binom{n}{k}\,\iota(k!)\,\iota((n-k)!)$. Both $\iota(k!)$ and $\iota((n-k)!)$ are nonzero by [L5] and [L8], so their product is invertible in $\mathbb{R}$ and $\iota\binom{n}{k} = \iota(n!)\big/\big(\iota(k!)\iota((n-k)!)\big)$. The left-hand side is the canonical natural of the count $\binom{n}{k}$, which is what the word *integrality* means here. [step 3.1, L5, L8]

5.1 The displayed identity is step 3.1, clause 1 is step 4.1, clause 2 is step 4.2 and clause 3 is step 2.2. [step 2.2, step 3.1, step 4.1, step 4.2] ∎

## Remarks

- **Why the symmetry is proved by a bijection.** Complementation is shorter than
  manipulating the closed formula, it needs no hypothesis beyond $k \le n$, and
  it is the argument that survives to the multinomial coefficient, where no
  single closed formula is available until the analogous count has been made.

- **Where $k \le n$ is used.** In step 1.1, so that $k$ is a subset of $n$ of
  cardinality $k$ and $[n]^{k}$ is nonempty; and in step 1.2, so that $n-k$ is a
  genuine difference. For $k > n$ both sides of the displayed identity are still
  defined, but the left-hand side is $0$ while $n!$ is not, so the hypothesis is
  not removable.

- **The quotient formula is a theorem about a natural number.** A reader who
  starts from $n!/(k!(n-k)!)$ has to prove that the division comes out exact.
  Starting from the count, the exactness is what step 3.1 says, and the quotient
  is a consequence.
````

