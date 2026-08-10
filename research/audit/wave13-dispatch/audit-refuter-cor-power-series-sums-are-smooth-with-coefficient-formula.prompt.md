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

- critical risk (11): 5 declared dependencies; 4 cited facts; 6 numbered proof steps; existence, choice, uniqueness, or well-definedness; induction, recursion, or minimality; analytic limiting/completeness language

## Target item — `cor-power-series-sums-are-smooth-with-coefficient-formula`

Normalized current SHA-256: `a52300c3122f43df39661f15550d95f35f5930fd6f6da6edf84197a1eb64f3c7`

The complete exact-current item follows, including frontmatter:

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

## Wave 13 provenance row

```json
{
  "id": "cor-power-series-sums-are-smooth-with-coefficient-formula",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://encyclopediaofmath.org/wiki/Power_series",
    "https://personal.colby.edu/~erandles/papers/Past_Courses/Supplementary_Notes.pdf"
  ],
  "rationale": "The sources state infinite differentiability and the coefficient formula a_n=f^(n)(c)/n!. The item expands all iterates using falling factorials and canonical embeddings, so the statement and induction proof are semantic adaptations.",
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
      "quote_selection": "full-source-section",
      "uses": [
        "2.1",
        "4.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-factorial-and-falling-factorial",
      "source_section": "Definition",
      "quote": "**The factorial.** By the recursion theorem ([[thm-recursion]]) applied to the\nset $\\mathbb{N}\\times\\mathbb{N}$, the starting element $(0,1)$ and the function\n$f(k, v) = (\\sigma(k),\\, v \\cdot \\sigma(k))$, and by the same induction on the\nfirst coordinate as in [[def-nat-finite-sum-and-product]], there is a unique\n$F : \\mathbb{N} \\to \\mathbb{N}$ with\n\n$$F(0) = 1, \\qquad F(\\sigma(n)) = F(n)\\cdot\\sigma(n) \\quad (n \\in \\mathbb{N}).$$\n\nWe write $n! := F(n)$. Thus $0! = 1$, $1! = 0!\\cdot 1 = 1$, $2! = 1!\\cdot 2 = 2$,\n$3! = 6$, $4! = 24$, $5! = 120$, $6! = 720$.\n\n**$0! = 1$ is the base clause of this recursion**, not a convention imported from\nelsewhere. Nothing about empty products is presupposed; the agreement with the\nempty product is proved below, in clause (a), rather than assumed.\n\n**Truncated difference.** Throughout, $n - k$ is the operation fixed in\n[[def-nat-finite-sum-and-product]]: the unique $j$ with $k + j = n$ when\n$k \\le n$, and $0$ when $n < k$.\n\n**The falling factorial.** For $n \\in \\mathbb{N}$ define $n^{\\underline{k}}$ by\nrecursion on $k$, by the recursion theorem applied to\n$\\mathbb{N}\\times\\mathbb{N}$ with starting element $(0,1)$ and\n$f(k, v) = (\\sigma(k),\\, v \\cdot (n-k))$:\n\n$$n^{\\underline{0}} = 1, \\qquad n^{\\underline{\\sigma(k)}} = n^{\\underline{k}}\\cdot(n-k) .$$\n\nSo $n^{\\underline{1}} = 1\\cdot(n-0) = n$ and $n^{\\underline{2}} = n\\,(n-1)$, and\nfor $k \\le n$ the value is the product $n(n-1)\\cdots(n-k+1)$ of the $k$ topmost\nfactors.\n\n**Four facts, proved here because the page uses each of them.**\n\n**(a) The factorial is the product of the first $n$ positive naturals.**\n$n! = \\prod_{j<n}\\sigma(j) = \\prod_{j<n}(j+1)$, the $\\mathbb{N}$-valued product of\n[[def-nat-finite-sum-and-product]]. Induction ([[thm-induction-principle]]): at\n$n = 0$ both sides are $1$, the empty product and the base clause agreeing; and\n$\\prod_{j<\\sigma(n)}\\sigma(j) = \\big(\\prod_{j<n}\\sigma(j)\\big)\\cdot\\sigma(n) = n!\\cdot\\sigma(n) = \\sigma(n)!$.\n**So the empty-product reading and the base-clause reading are the same reading**,\nand neither was assumed.\n\n**(b) $n! \\ne 0$, and $\\iota(n!) = \\prod^{\\mathbb{R}}_{j<n}\\iota(j+1)$.** For the\nfirst, $0! = 1 \\ne 0$ ([[thm-omega-is-peano-system]]) and\n$\\sigma(n)! = n!\\cdot\\sigma(n)$ is a product of two nonzero naturals, which is\nnonzero: if $xy = 0$ with $y \\ne 0$ then $xy = 0\\cdot y$\n([[lem-nat-mult-identity]]) and cancellation gives $x = 0$\n([[lem-nat-mult-cancellative]]). So $n! \\ne 0$ for every $n$ by induction. For the second, apply the bridge clause\n6 of that lemma to clause (a) above. This is what makes the factorial of this\npage and the real-valued product $\\prod_{j<n}(j+1)$ used elsewhere in the library\n**one object seen twice**, rather than two unrelated notions.\n\n**(c) $n^{\\underline{k}}\\cdot(n-k)! = n!$ for $k \\le n$.** Induction on $k$, for\nall $n$ at once. At $k = 0$ this reads $1 \\cdot n! = n!$. Assume it at $k$ and\nlet $\\sigma(k) \\le n$; then $k \\le n$, and writing $d := n - k$ we have\n$k + d = n$ and $d \\ne 0$, since $k + 0 = k \\ne n$; so $d = \\sigma(e)$ for a\nunique $e$ ([[lem-nat-nonzero-is-successor]]), and $\\sigma(k) + e = n$, that is\n$e = n - \\sigma(k)$ ([[lem-nat-add-cancellative]]). Therefore\n$n^{\\underline{\\sigma(k)}}\\cdot\\big(n-\\sigma(k)\\big)! = n^{\\underline{k}}\\cdot(n-k)\\cdot e! = n^{\\underline{k}}\\cdot\\big(e!\\cdot\\sigma(e)\\big) = n^{\\underline{k}}\\cdot\\sigma(e)! = n^{\\underline{k}}\\cdot(n-k)! = n!$,\nusing commutativity and associativity of multiplication\n([[lem-nat-mult-associative]], [[lem-nat-mult-commutative]]) and the recursion\nclause for the factorial.\n\n**(d) Boundary values.** $n^{\\underline{0}} = 1$ for every $n$, by the base\nclause; $n^{\\underline{n}} = n!$, since clause (c) at $k = n$ gives\n$n^{\\underline{n}}\\cdot 0! = n!$ and $0! = 1$; and\n$n^{\\underline{k}} = 0$ whenever $k > n$. For the last, $n - n = 0$ gives\n$n^{\\underline{\\sigma(n)}} = n^{\\underline{n}}\\cdot 0 = 0$, the clause\n$x \\cdot 0 = 0$ being definitional ([[def-nat-multiplication]]), and if\n$n^{\\underline{k}} = 0$ then\n$n^{\\underline{\\sigma(k)}} = 0$ as well, so $n^{\\underline{k}} = 0$ for every\n$k \\ge \\sigma(n)$ by induction.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "3.1",
        "5.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-nat-finite-sum-laws-and-the-canonical-embedding",
      "source_section": "Statement",
      "quote": "Let $a, b : \\mathbb{N} \\to \\mathbb{N}$, let $c \\in \\mathbb{N}$, and let\n$m, n \\in \\mathbb{N}$, with $\\sum^{\\mathbb{N}}$ and $\\prod^{\\mathbb{N}}$ as in\n[[def-nat-finite-sum-and-product]] and $\\sum^{\\mathbb{R}}$, $\\prod^{\\mathbb{R}}$\nas in [[def-finite-sum]]. Let $\\iota : \\mathbb{N} \\to \\mathbb{R}$ be the\ncanonical natural of [[def-canonical-natural]], so $\\iota(0) = 0$ and\n$\\iota(\\sigma(n)) = \\iota(n) + 1$. Then:\n\n0. **$\\iota$ is additive and multiplicative.** $\\iota(1) = 1$, and\n   $\\iota(m+n) = \\iota(m) + \\iota(n)$ and $\\iota(m n) = \\iota(m)\\,\\iota(n)$ for\n   **all** $m, n \\in \\mathbb{N}$, the cases where a factor is $0$ included.\n1. **Additivity.** $\\displaystyle\\sum_{k<n}(a_k + b_k) = \\sum_{k<n} a_k + \\sum_{k<n} b_k$.\n2. **Constants.** $\\displaystyle\\sum_{k<n} c = n \\cdot c$, the summand being the constant list.\n3. **Splitting.** If $m \\le n$ and $d := n - m$, then\n   $\\displaystyle\\sum_{k<n} a_k = \\sum_{k<m} a_k + \\sum_{j<d} a_{m+j}$, and\n   $\\displaystyle\\prod_{k<n} a_k = \\Big(\\prod_{k<m} a_k\\Big)\\Big(\\prod_{j<d} a_{m+j}\\Big)$.\n4. **Monotonicity.** If $a_k \\le b_k$ for every $k < n$ then\n   $\\sum_{k<n} a_k \\le \\sum_{k<n} b_k$; and $a_j \\le \\sum_{k<n} a_k$ for every $j < n$.\n5. **Products.** $\\displaystyle\\prod_{k<n}(a_k b_k) = \\Big(\\prod_{k<n} a_k\\Big)\\Big(\\prod_{k<n} b_k\\Big)$;\n   and if $a_k \\ne 0$ for every $k < n$ then $\\prod_{k<n} a_k \\ne 0$.\n6. **The bridge into $\\mathbb{R}$.**\n   $\\displaystyle\\iota\\Big(\\sum^{\\mathbb{N}}_{k<n} a_k\\Big) = \\sum^{\\mathbb{R}}_{k<n} \\iota(a_k)$\n   and\n   $\\displaystyle\\iota\\Big(\\prod^{\\mathbb{N}}_{k<n} a_k\\Big) = \\prod^{\\mathbb{R}}_{k<n} \\iota(a_k)$.\n7. **$\\iota$ is strictly increasing, hence injective.** $m < n$ if and only if\n   $\\iota(m) < \\iota(n)$, and $m = n$ if and only if $\\iota(m) = \\iota(n)$.\n\nClauses 6 and 7 together are the licence used everywhere below: an identity\nbetween natural numbers may be proved by proving the corresponding identity\nbetween their canonical naturals in $\\mathbb{R}$, and conversely a real identity\nwhose two sides are canonical naturals is an identity in $\\mathbb{N}$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "3.1",
        "5.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-induction-principle",
      "source_section": "Statement",
      "quote": "Let $S \\subseteq \\mathbb{N}$. If $0 \\in S$ and $\\sigma(n) \\in S$ whenever $n \\in S$, then $S = \\mathbb{N}$. Equivalently (property form): if a property $P$ satisfies $P(0)$ and ($P(n) \\Rightarrow P(\\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \\in \\mathbb{N}$. This is the induction principle, the basis of proof by induction.",
      "quote_selection": "full-source-section",
      "uses": [
        "4.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "For $m=0$, the formula reads $f(x)=\\sum_{j\\ge0}\\iota(j^{\\underline0})a_j(x-c)^j=\\sum_{j\\ge0}a_j(x-c)^j$, so the claim holds.",
      "step": "1.1",
      "inputs": [
        "L2"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "Fix $m$ and assume the displayed formula for $f^{(m)}$, with radius $R$.",
      "step": "1.2",
      "inputs": [
        "ih"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "By [L1], differentiate the series in step 1.2 term by term. Reindexing $j+1$ as $j$ gives $f^{(m+1)}(x)=\\sum_{j\\ge0}\\iota(j+1)\\iota((m+j+1)^{\\underline m})a_{m+j+1}(x-c)^j$.",
      "step": "2.1",
      "inputs": [
        "L1",
        "step 1.2"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "The falling-factorial recursion with $n=m+j+1$ and $k=m$ gives $(m+j+1)^{\\underline{m+1}}=(m+j+1)^{\\underline m}(j+1)$. Since $\\iota$ preserves products, step 2.1 is precisely the asserted formula with $m+1$ in place of $m$.",
      "step": "3.1",
      "inputs": [
        "step 2.1",
        "L2"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "By [L3], the derivative formula holds for every $m$. At each induction step [L1] also preserves the radius $R$, so every derived series has radius $R$.",
      "step": "4.1",
      "inputs": [
        "L3",
        "L1",
        "step 1.1",
        "step 3.1"
      ]
    },
    {
      "id": "step-5.1",
      "claim": "At $x=c$, every term with $j\\ge1$ vanishes and the $j=0$ term is $\\iota(m^{\\underline m})a_m=\\iota(m!)a_m$; since $m!\\ne0$, division gives the coefficient formula.",
      "step": "5.1",
      "inputs": [
        "step 4.1",
        "L2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "cor-power-series-sums-are-smooth-with-coefficient-formula: the Statement fixes the displayed objects and has no conclusion depending on an unlicensed choice from an empty family: Let $f(x)=\\sum_{n\\ge0}a_n(x-c)^n$ have positive or infinite radius $R$. Define $f^{(0)}:=f$ and $f^{(m+1)}:=(f^{(m)})'$. Then every derivative exists on $|x-c|<R$, and for each $m\\in\\mathbb N$, $$f^{(m)}(x)=\\sum_{j=0}^{\\"
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 5.1: the proof explicitly handles the zero-valued parameter or zero object used by the statement."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "cor-power-series-sums-are-smooth-with-coefficient-formula: the assertion has no separate unit-size case; its quantified argument applies without a one-case split: Let $f(x)=\\sum_{n\\ge0}a_n(x-c)^n$ have positive or infinite radius $R$. Define $f^{(0)}:=f$ and $f^{(m+1)}:=(f^{(m)})'$. Then every derivative exists on $|x-c|<R$, and for each $m\\in\\mathbb N$, $$f^{(m)}(x)=\\sum_{j=0}^{\\"
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "cor-power-series-sums-are-smooth-with-coefficient-formula: no geometric or algebraic degeneracy changes the asserted conclusion; checked against the Statement: Let $f(x)=\\sum_{n\\ge0}a_n(x-c)^n$ have positive or infinite radius $R$. Define $f^{(0)}:=f$ and $f^{(m+1)}:=(f^{(m)})'$. Then every derivative exists on $|x-c|<R$, and for each $m\\in\\mathbb N$, $$f^{(m)}(x)=\\sum_{j=0}^{\\"
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "cor-power-series-sums-are-smooth-with-coefficient-formula: no interval or radial endpoint is part of the conclusion; checked against the Statement: Let $f(x)=\\sum_{n\\ge0}a_n(x-c)^n$ have positive or infinite radius $R$. Define $f^{(0)}:=f$ and $f^{(m+1)}:=(f^{(m)})'$. Then every derivative exists on $|x-c|<R$, and for each $m\\in\\mathbb N$, $$f^{(m)}(x)=\\sum_{j=0}^{\\"
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 1.2: every witness selected there is drawn after the proof establishes the relevant positivity, existence, or nonemptiness condition."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "cor-power-series-sums-are-smooth-with-coefficient-formula: the Statement is not an equivalence, so there is no forward implication obligation: Let $f(x)=\\sum_{n\\ge0}a_n(x-c)^n$ have positive or infinite radius $R$. Define $f^{(0)}:=f$ and $f^{(m+1)}:=(f^{(m)})'$. Then every derivative exists on $|x-c|<R$, and for each $m\\in\\mathbb N$, $$f^{(m)}(x)=\\sum_{j=0}^{\\"
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "cor-power-series-sums-are-smooth-with-coefficient-formula: the Statement is not an equivalence, so there is no reverse implication obligation: Let $f(x)=\\sum_{n\\ge0}a_n(x-c)^n$ have positive or infinite radius $R$. Define $f^{(0)}:=f$ and $f^{(m+1)}:=(f^{(m)})'$. Then every derivative exists on $|x-c|<R$, and for each $m\\in\\mathbb N$, $$f^{(m)}(x)=\\sum_{j=0}^{\\"
    }
  ]
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "cor-power-series-sums-are-smooth-with-coefficient-formula",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "thm-termwise-differentiation-of-a-real-power-series",
    "declared_target": "thm-termwise-differentiation-of-a-real-power-series",
    "target_statement_provenance": "ai-altered",
    "targetPage": "power-series-and-real-analytic-functions",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-power-series-sums-are-smooth-with-coefficient-formula",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
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
    "source": "cor-power-series-sums-are-smooth-with-coefficient-formula",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
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
    "source": "cor-power-series-sums-are-smooth-with-coefficient-formula",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "lem-nat-finite-sum-laws-and-the-canonical-embedding",
    "declared_target": "lem-nat-finite-sum-laws-and-the-canonical-embedding",
    "target_statement_provenance": "ai-altered",
    "targetPage": "finite-counting-and-binomial-coefficients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-power-series-sums-are-smooth-with-coefficient-formula",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "thm-induction-principle",
    "declared_target": "thm-induction-principle",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
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

## Full exact-current text of every cited or declared item (5)

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

### `lem-nat-finite-sum-laws-and-the-canonical-embedding`

````markdown
---
id: lem-nat-finite-sum-laws-and-the-canonical-embedding
kind: lemma
title: "Laws of finite sums and products in $\\mathbb{N}$, and $\\iota\\big(\\sum_{k<n} a_k\\big) = \\sum_{k<n} \\iota(a_k)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-nat-finite-sum-and-product, def-finite-sum, def-canonical-natural,
       lem-of-naturals-positive, lem-of-zero-mult, thm-induction-principle,
       thm-omega-is-peano-system, def-nat-addition, def-nat-multiplication,
       lem-nat-add-associative, lem-nat-add-commutative, lem-nat-add-identity,
       lem-nat-mult-associative, lem-nat-mult-commutative, lem-nat-mult-distributive,
       lem-nat-mult-identity, lem-nat-order-add-compatible, lem-nat-add-cancellative,
       lem-nat-mult-cancellative, lem-nat-trichotomy, lem-nat-discrete, def-nat-order,
       def-field, def-ordered-field]
justified_by: []
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
    - title: "Summation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Summation"
    - title: "Natural number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Natural_number"
    - title: "T. Tao, Analysis I, 3rd ed., §7.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $a, b : \mathbb{N} \to \mathbb{N}$, let $c \in \mathbb{N}$, and let
$m, n \in \mathbb{N}$, with $\sum^{\mathbb{N}}$ and $\prod^{\mathbb{N}}$ as in
[[def-nat-finite-sum-and-product]] and $\sum^{\mathbb{R}}$, $\prod^{\mathbb{R}}$
as in [[def-finite-sum]]. Let $\iota : \mathbb{N} \to \mathbb{R}$ be the
canonical natural of [[def-canonical-natural]], so $\iota(0) = 0$ and
$\iota(\sigma(n)) = \iota(n) + 1$. Then:

0. **$\iota$ is additive and multiplicative.** $\iota(1) = 1$, and
   $\iota(m+n) = \iota(m) + \iota(n)$ and $\iota(m n) = \iota(m)\,\iota(n)$ for
   **all** $m, n \in \mathbb{N}$, the cases where a factor is $0$ included.
1. **Additivity.** $\displaystyle\sum_{k<n}(a_k + b_k) = \sum_{k<n} a_k + \sum_{k<n} b_k$.
2. **Constants.** $\displaystyle\sum_{k<n} c = n \cdot c$, the summand being the constant list.
3. **Splitting.** If $m \le n$ and $d := n - m$, then
   $\displaystyle\sum_{k<n} a_k = \sum_{k<m} a_k + \sum_{j<d} a_{m+j}$, and
   $\displaystyle\prod_{k<n} a_k = \Big(\prod_{k<m} a_k\Big)\Big(\prod_{j<d} a_{m+j}\Big)$.
4. **Monotonicity.** If $a_k \le b_k$ for every $k < n$ then
   $\sum_{k<n} a_k \le \sum_{k<n} b_k$; and $a_j \le \sum_{k<n} a_k$ for every $j < n$.
5. **Products.** $\displaystyle\prod_{k<n}(a_k b_k) = \Big(\prod_{k<n} a_k\Big)\Big(\prod_{k<n} b_k\Big)$;
   and if $a_k \ne 0$ for every $k < n$ then $\prod_{k<n} a_k \ne 0$.
6. **The bridge into $\mathbb{R}$.**
   $\displaystyle\iota\Big(\sum^{\mathbb{N}}_{k<n} a_k\Big) = \sum^{\mathbb{R}}_{k<n} \iota(a_k)$
   and
   $\displaystyle\iota\Big(\prod^{\mathbb{N}}_{k<n} a_k\Big) = \prod^{\mathbb{R}}_{k<n} \iota(a_k)$.
7. **$\iota$ is strictly increasing, hence injective.** $m < n$ if and only if
   $\iota(m) < \iota(n)$, and $m = n$ if and only if $\iota(m) = \iota(n)$.

Clauses 6 and 7 together are the licence used everywhere below: an identity
between natural numbers may be proved by proving the corresponding identity
between their canonical naturals in $\mathbb{R}$, and conversely a real identity
whose two sides are canonical naturals is an identity in $\mathbb{N}$.

## Facts & Assumptions

**Given:** Lists $a, b : \mathbb{N} \to \mathbb{N}$, a natural $c$, naturals $m, n$, and the ambient ordered field $\mathbb{R}$. Recall $\sigma(n) = n + 1$ and the truncated difference $n - m$ of [[def-nat-finite-sum-and-product]].

[L1] Induction: a property holding at $0$ and inherited by successors holds at every natural ([[thm-induction-principle]]).

[L2] Recursion clauses in $\mathbb{N}$ ([[def-nat-finite-sum-and-product]]): $\sum_{k<0} a_k = 0$, $\sum_{k<\sigma(n)} a_k = \sum_{k<n} a_k + a_n$, $\prod_{k<0} a_k = 1$, $\prod_{k<\sigma(n)} a_k = \big(\prod_{k<n} a_k\big)\cdot a_n$.

[L3] Recursion clauses in $\mathbb{R}$ ([[def-finite-sum]]): $\sum^{\mathbb{R}}_{k<0} x_k = 0$, $\sum^{\mathbb{R}}_{k<\sigma(n)} x_k = \sum^{\mathbb{R}}_{k<n} x_k + x_n$, and likewise $\prod^{\mathbb{R}}_{k<0} x_k = 1$, $\prod^{\mathbb{R}}_{k<\sigma(n)} x_k = \big(\prod^{\mathbb{R}}_{k<n} x_k\big)\cdot x_n$.

[L4] Arithmetic of $\mathbb{N}$: addition and multiplication are associative and commutative, $0 + n = n$ and $n + 0 = n$, $1 \cdot n = n \cdot 1 = n$ and $0 \cdot n = n \cdot 0 = 0$, multiplication distributes over addition, and $\sigma(a)\cdot n = a \cdot n + n$ ([[lem-nat-add-associative]], [[lem-nat-add-commutative]], [[lem-nat-add-identity]], [[lem-nat-mult-associative]], [[lem-nat-mult-commutative]], [[lem-nat-mult-identity]], [[lem-nat-mult-distributive]], [[def-nat-addition]], [[def-nat-multiplication]]).

[L5] Order of $\mathbb{N}$: $m \le n$ means $m + j = n$ for some $j$, that $j$ is unique, $m \le n \iff m + k \le n + k$, and $m < n \iff \sigma(m) \le n$, so $n \ne 0$ is the same as $1 \le n$; exactly one of $m<n$, $m=n$, $n<m$ holds ([[def-nat-order]], [[lem-nat-add-cancellative]], [[lem-nat-order-add-compatible]], [[lem-nat-discrete]], [[lem-nat-trichotomy]]). Transitivity of $\le$ follows from the definition and associativity: $m + j = n$ and $n + i = p$ give $m + (j+i) = p$.

[L6] The canonical natural ([[def-canonical-natural]]): $\iota(0) = 0_{\mathbb{R}}$ and $\iota(\sigma(n)) = \iota(n) + 1_{\mathbb{R}}$; $\iota(n)$ is also written $n \cdot 1_{\mathbb{R}}$.

[L7] For $n \ge 1$, with $n \cdot 1_F$ defined by $1 \cdot 1_F = 1_F$ and $(n+1)\cdot 1_F = n \cdot 1_F + 1_F$: $n \cdot 1_F > 0$, and $(m+n)\cdot 1_F = m\cdot 1_F + n\cdot 1_F$ and $(mn)\cdot 1_F = (m\cdot 1_F)(n \cdot 1_F)$ for all $m, n \ge 1$ ([[lem-of-naturals-positive]]). **These identities are asserted for $m, n \ge 1$ only**; the cases with a zero argument are checked separately below.

[L8] In a field, $0 \cdot x = 0$ ([[lem-of-zero-mult]]); and $\mathbb{R}$ is an ordered field, so its addition and multiplication are associative and commutative with identities $0$ and $1$, and its order is total and compatible with addition ([[def-field]], [[def-ordered-field]]).

[L9] Cancellation in $\mathbb{N}$: $m \cdot k = n \cdot k$ with $k \ne 0$ implies $m = n$ ([[lem-nat-mult-cancellative]]); and $\sigma(n) \ne 0$, so $1 \ne 0$ ([[thm-omega-is-peano-system]]).

## Proof

**Proof technique:** induction.

1.1 Every clause is proved by induction on the upper index, using only the recursion clauses [L2], [L3] and the arithmetic [L4], [L8]; the inductions are written out one clause at a time. [given]

1.2 The two notations agree: $\iota(n) = n \cdot 1_{\mathbb{R}}$ for every $n \ge 1$. At $n = 1$, $\iota(1) = \iota(\sigma(0)) = \iota(0) + 1_{\mathbb{R}} = 1_{\mathbb{R}} = 1 \cdot 1_{\mathbb{R}}$; and the successor clauses of the two recursions coincide, $\iota(\sigma(n)) = \iota(n) + 1_{\mathbb{R}}$ and $(n+1)\cdot 1_{\mathbb{R}} = n \cdot 1_{\mathbb{R}} + 1_{\mathbb{R}}$. So the two agree at every $n \ge 1$ by induction, and [L7] may be read as a statement about $\iota$. [L1, L6, L7]

1.3 Clause 1 at $n = 0$: both sides are the empty sum, $0 = 0 + 0$. [base, L2, L4]

1.4 Clause 1, inductive hypothesis: assume $\sum_{k<n}(a_k+b_k) = \sum_{k<n} a_k + \sum_{k<n} b_k$ for a fixed $n$ and all lists $a, b$. [ih]

1.5 Clause 2, by induction on $n$. At $n = 0$ both sides are $0$, since $0 \cdot c = 0$. If $\sum_{k<n} c = n \cdot c$, then $\sum_{k<\sigma(n)} c = \sum_{k<n} c + c = n\cdot c + c = \sigma(n)\cdot c$, the last equality being the successor law $\sigma(a)\cdot n = a\cdot n + n$ of [L4]. [L1, L2, L4]

1.6 Clause 3, by induction on $d$, with $m$ fixed and $n = m + d$. At $d = 0$ we have $n = m$ and the second sum is empty, so the claim reads $\sum_{k<m} a_k = \sum_{k<m} a_k + 0$. Assuming it at $d$, and using $m + \sigma(d) = \sigma(m+d)$, we get $\sum_{k<\sigma(n)} a_k = \sum_{k<n} a_k + a_n = \big(\sum_{k<m} a_k + \sum_{j<d} a_{m+j}\big) + a_{m+d} = \sum_{k<m} a_k + \big(\sum_{j<d} a_{m+j} + a_{m+d}\big) = \sum_{k<m} a_k + \sum_{j<\sigma(d)} a_{m+j}$. The product form is the same argument with $+$ replaced by $\cdot$ and $0$ by $1$. [L1, L2, L4, L5]

1.7 Clause 5, by induction on $n$. At $n = 0$ both sides are $1 = 1 \cdot 1$; and $\prod_{k<\sigma(n)}(a_kb_k) = \big(\prod_{k<n}(a_kb_k)\big)a_nb_n = \big(\prod_{k<n}a_k\big)\big(\prod_{k<n}b_k\big)a_nb_n = \big(\prod_{k<\sigma(n)}a_k\big)\big(\prod_{k<\sigma(n)}b_k\big)$ by associativity and commutativity. For the second assertion, note first that a product of two nonzero naturals is nonzero: if $xy = 0$ with $y \ne 0$, then $xy = 0 \cdot y$, so $x = 0$ by [L9]. Now induct: $\prod_{k<0}a_k = 1 \ne 0$ by [L9], and $\prod_{k<\sigma(n)}a_k = \big(\prod_{k<n}a_k\big)a_n$ is a product of two nonzero naturals. [L1, L2, L4, L9]

2.1 Clause 1, inductive step. Using [L2] twice and the associativity and commutativity of addition, $\sum_{k<\sigma(n)}(a_k+b_k) = \sum_{k<n}(a_k+b_k) + (a_n+b_n) = \big(\sum_{k<n}a_k + \sum_{k<n}b_k\big) + (a_n+b_n) = \big(\sum_{k<n}a_k + a_n\big) + \big(\sum_{k<n}b_k + b_n\big) = \sum_{k<\sigma(n)}a_k + \sum_{k<\sigma(n)}b_k$, where the inductive hypothesis of step 1.4 was used at the second equality. [step 1.4, L2, L4]

2.2 Clause 0. First $\iota(1) = 1$, computed in step 1.2. For $m, n \ge 1$ the two identities are [L7], read through step 1.2. If $n = 0$ then $\iota(m+0) = \iota(m) = \iota(m) + 0 = \iota(m) + \iota(0)$, and $\iota(m \cdot 0) = \iota(0) = 0 = \iota(m)\cdot 0 = \iota(m)\iota(0)$ by [L8]; the case $m = 0$ follows from these by the commutativity of addition and multiplication in $\mathbb{N}$ and in $\mathbb{R}$. So both identities hold for all $m, n \in \mathbb{N}$. [step 1.2, L4, L7, L8]

2.3 Clause 4. Monotonicity is an induction: at $n = 0$ both sums are $0$; and if $\sum_{k<n}a_k \le \sum_{k<n}b_k$ and $a_n \le b_n$, then $\sum_{k<n}a_k + a_n \le \sum_{k<n}b_k + a_n \le \sum_{k<n}b_k + b_n$ by [L5], so $\sum_{k<\sigma(n)}a_k \le \sum_{k<\sigma(n)}b_k$ by transitivity. For the second assertion let $j < n$, so $1 \le n - j$; splitting at $j$ and then splitting the tail at $1$, and using $\sum_{i<1}a_{j+i} = 0 + a_j = a_j$, gives $\sum_{k<n}a_k = \big(\sum_{k<j}a_k + a_j\big) + R$ for some $R \in \mathbb{N}$, and $a_j \le \big(\sum_{k<j}a_k + a_j\big) + R$ because $a_j$ plus something equals it. [step 1.6, L2, L4, L5]

3.1 Clause 1 holds for every $n$, by step 1.3 and step 2.1 together with induction. [step 1.3, step 2.1, L1]

3.2 Clause 7. If $m < n$ put $d = n - m$, so $m + d = n$ and $d \ne 0$, hence $d \ge 1$ and $\iota(d) > 0$ by [L7]; then $\iota(n) = \iota(m) + \iota(d) > \iota(m)$ by step 2.2. Conversely, if $\iota(m) < \iota(n)$ then $m = n$ and $n < m$ are both excluded, the first because the order of $\mathbb{R}$ is irreflexive and the second by what was just proved, so $m < n$ by trichotomy in $\mathbb{N}$. The statement about equality follows by trichotomy on both sides. [step 2.2, L5, L7, L8]

3.3 Clause 6, by induction on $n$. At $n = 0$, $\iota\big(\sum_{k<0}a_k\big) = \iota(0) = 0 = \sum^{\mathbb{R}}_{k<0}\iota(a_k)$. Assuming the identity at $n$, $\iota\big(\sum_{k<\sigma(n)}a_k\big) = \iota\big(\sum_{k<n}a_k + a_n\big) = \iota\big(\sum_{k<n}a_k\big) + \iota(a_n) = \sum^{\mathbb{R}}_{k<n}\iota(a_k) + \iota(a_n) = \sum^{\mathbb{R}}_{k<\sigma(n)}\iota(a_k)$, the second equality by step 2.2. The product form is the same induction, starting from $\iota(1) = 1$ and using multiplicativity. [step 2.2, L1, L2, L3, L6]

4.1 Clause 0 is step 2.2, clause 1 is step 3.1, clause 2 is step 1.5, clause 3 is step 1.6, clause 4 is step 2.3, clause 5 is step 1.7, clause 6 is step 3.3 and clause 7 is step 3.2. [step 1.5, step 1.6, step 1.7, step 2.3, step 3.1, step 3.2, step 3.3, discharge-induction] ∎

## Remarks

- **Why the zero cases are done by hand.** [[lem-of-naturals-positive]] states
  $(m+n)\cdot 1_F = m \cdot 1_F + n \cdot 1_F$ and
  $(mn)\cdot 1_F = (m\cdot 1_F)(n \cdot 1_F)$ **for $m, n \ge 1$ only**, because
  the notation $n \cdot 1_F$ is introduced there by a recursion that starts at
  $1$. Every count on this page can be $0$, so the two one-line checks at $0$ in
  step 2.2 are not pedantry: without them clause 0 would be a citation to a
  statement that was not made.

- **The real-valued laws are the same list.** [[lem-finite-sum-laws]] proves
  additivity, scaling, splitting, monotonicity, telescoping and the product laws
  for sums of **reals**. The clauses above are their $\mathbb{N}$-valued
  counterparts, proved from the same recursion, and clause 6 is what ties the two
  lists together. Neither list contains a permutation-invariance clause; that is
  proved separately in the next item, and it is what the sum over a finite index
  set needs.

- **What clause 7 buys.** Because $\iota$ is injective, a proof may cross into
  $\mathbb{R}$, use subtraction or division there, and come back: if
  $\iota(x) = \iota(y)$ with $x, y \in \mathbb{N}$ then $x = y$. The binomial
  theorem below lives in $\mathbb{R}$ for exactly this reason, while every
  coefficient in it is a count.
````

### `thm-induction-principle`

````markdown
---
id: thm-induction-principle
kind: theorem
title: "The principle of mathematical induction"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-natural-numbers, def-inductive-set, lem-omega-smallest-inductive]
aliases: [principle-of-induction, induction-principle]
landmark: true
short: "$0\\in S$, $\\sigma$-closed $\\Rightarrow S=\\mathbb N$"
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
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "Set-theoretic definition of natural numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Set-theoretic_definition_of_natural_numbers"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
pipeline_run: null
---

## Statement

Let $S \subseteq \mathbb{N}$. If $0 \in S$ and $\sigma(n) \in S$ whenever $n \in S$, then $S = \mathbb{N}$. Equivalently (property form): if a property $P$ satisfies $P(0)$ and ($P(n) \Rightarrow P(\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \in \mathbb{N}$. This is the induction principle, the basis of proof by induction.

## Facts & Assumptions

**Given:** $\mathbb{N} = \omega$ is the smallest inductive set ([[def-inductive-set]], [[def-natural-numbers]], [[lem-omega-smallest-inductive]]); $0 = \varnothing$, $\sigma(n) = n \cup \{n\}$.

[L1] $\omega$ is contained in every inductive set ([[lem-omega-smallest-inductive]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $S \subseteq \mathbb{N}$ with $0 = \varnothing \in S$ and ($x \in S \Rightarrow \sigma(x) = x \cup \{x\} \in S$). [given]

2.1 Then $S$ contains $\varnothing$ and is closed under $x \mapsto x \cup \{x\}$, so $S$ is an inductive set. [step 1.1]

3.1 $\mathbb{N} = \omega \subseteq S$ because $\omega$ is a subset of every inductive set. [L1, step 2.1]

4.1 With $S \subseteq \mathbb{N}$ by hypothesis, $S = \mathbb{N}$. [step 3.1, given]

5.1 The property form is the set case with $S = \{n \in \mathbb{N} : P(n)\}$: $P(0)$ and $P(n) \Rightarrow P(\sigma(n))$ give $0 \in S$ and $\sigma$-closure, so $S = \mathbb{N}$, i.e. $P$ holds for all $n$; conversely the set form is the property form applied to $P(n) :\equiv n \in S$, so the two are equivalent. [step 4.1] ∎
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

