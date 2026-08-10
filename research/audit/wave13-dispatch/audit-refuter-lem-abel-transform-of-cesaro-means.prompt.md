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

- high risk (7): 11 declared dependencies; 13 cited facts; analytic limiting/completeness language
- top-20 manifest-edge consumer (11 outgoing relationships)

## Target item — `lem-abel-transform-of-cesaro-means`

Normalized current SHA-256: `8a94c713f6bd738aa35f15d56ef8e69b2f3e3217992af0d2517efa8ce1ad0998`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: lem-abel-transform-of-cesaro-means
kind: lemma
title: "For $0<x<1$, the Abel transform of a series is $(1-x)^2\\sum_{n\\ge0}(n+1)\\sigma_nx^n$, where $\\sigma_n$ are the Cesaro means of its partial sums"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-abel-and-cesaro-summability-of-a-series, def-finite-sum, thm-geometric-series, lem-power-monotone, lem-of-abs-value, def-cauchy-product, cor-cauchy-product-absolute, thm-direct-comparison-test, lem-series-linearity, def-canonical-natural, lem-of-naturals-positive]
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
    - title: "Cesàro summation, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Cesaro_summation_method"
    - title: "Cesàro summation methods, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Ces%C3%A0ro_summation_methods"
    - title: "S. Semmes, Rice Math 322 notes"
      url: "https://math.rice.edu/~semmes/math322.pdf"
pipeline_run: null
---

## Statement

Let $S_n:=\sum_{k=0}^{n}a_k$ and $\sigma_n:=\iota(n+1)^{-1}\sum_{k=0}^{n}S_k$. If $(\sigma_n)$ is bounded, then for every $0<x<1$ the Abel series converges and

$$\sum_{n=0}^{\infty}a_nx^n=(1-x)^2\sum_{n=0}^{\infty}\iota(n+1)\sigma_nx^n.$$

## Facts & Assumptions

**Given:** The coefficients, partial sums, and Cesaro means in the statement.

[L1] The canonical natural $\iota(n+1)$ is positive. Thus, putting $T_n:=\sum_{k=0}^{n}S_k$, the definition of $\sigma_n$ gives $T_n=\iota(n+1)\sigma_n$. Also $S_n=T_n-T_{n-1}$ with $T_{-1}:=0$; putting $S_{-1}:=0$ gives $a_n=S_n-S_{n-1}$ for every $n\ge0$ ([[def-abel-and-cesaro-summability-of-a-series]], [[def-finite-sum]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L2] For $0<x<1$, the geometric series is absolutely convergent because its terms are nonnegative. Its Cauchy product with itself has coefficient $\sum_{k=0}^{n}x^kx^{n-k}=\iota(n+1)x^n$ and sum $1/(1-x)^2$ ([[thm-geometric-series]], [[lem-power-monotone]], [[lem-of-abs-value]], [[def-cauchy-product]], [[cor-cauchy-product-absolute]], [[def-finite-sum]], [[def-canonical-natural]]).

[L3] Convergent real series may be added, subtracted and scaled term by term ([[lem-series-linearity]]).

[L4] A nonnegative series dominated termwise by a convergent nonnegative series converges ([[thm-direct-comparison-test]]).

## Proof

**Proof technique:** direct.

1.1 Choose $M\ge0$ with $|\sigma_n|\le M$ for every $n$. Then $|T_nx^n|\le M\iota(n+1)x^n$; [L2] and [L3] give convergence of the majorant series, so [L4] gives absolute convergence of $\sum_nT_nx^n$. [L1, L2, L3, L4, choose]

2.1 Since $S_n=T_n-T_{n-1}$, step 1.1 gives absolute convergence of $\sum_nS_nx^n$. With $T_{-1}=0$, the shifted series satisfies $\sum_{n\ge0}T_{n-1}x^n=x\sum_{n\ge0}T_nx^n$; combining the two convergent series by [L3] gives $\sum_{n\ge0}S_nx^n=(1-x)\sum_{n\ge0}T_nx^n$. [step 1.1, L1, L3, algebra]

3.1 Since $a_n=S_n-S_{n-1}$ with $S_{-1}=0$, step 2.1 likewise gives absolute convergence and $\sum_na_nx^n=(1-x)\sum_nS_nx^n$. Substitute step 2.1 and $T_n=\iota(n+1)\sigma_n$ to get the formula. [step 2.1, L1, L3] ∎
````

## Wave 13 provenance row

```json
{
  "id": "lem-abel-transform-of-cesaro-means",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://encyclopediaofmath.org/wiki/Ces%C3%A0ro_summation_methods",
    "https://math.rice.edu/~semmes/math322.pdf"
  ],
  "rationale": "The literature records the generating-function relation behind Cesàro and Abel methods. The item isolates the exact zero-indexed transform with weights (n+1)(1-x)^2 and proves the algebra and convergence locally.",
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
      "source": "def-abel-and-cesaro-summability-of-a-series",
      "source_section": "Definition",
      "quote": "For a real series $\\sum_{n\\ge0}a_n$, write its inclusive partial sums as\n\n$$S_n:=\\sum_{k=0}^{n}a_k$$\n\nand their Cesaro means as\n\n$$\\sigma_n:=\\frac1{\\iota(n+1)}\\sum_{k=0}^{n}S_k.$$\n\nThe series is **Cesaro summable to $s$** if $\\sigma_n\\to s$ ([[def-cesaro-mean]]).\n\nIt is **Abel summable to $s$** if the power series\n\n$$A(x):=\\sum_{n=0}^{\\infty}a_nx^n$$\n\nconverges for every $0\\le x<1$ and $\\lim_{x\\uparrow1}A(x)=s$ in the one-sided sense of [[def-function-limit]]. These are summability methods for the zero-indexed series of [[def-series]]; they do not assert ordinary convergence.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-finite-sum",
      "source_section": "Definition",
      "quote": "Throughout this page $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]]), in particular an ordered field\n([[def-ordered-field]]) and a field ([[def-field]]), and $\\mathbb{N}$ is the set\nof natural numbers ([[def-natural-numbers]]) with successor $\\sigma(n) = n + 1$\n([[def-nat-addition]]).\n\nLet $a : \\mathbb{N} \\to \\mathbb{R}$ be a sequence of reals, written $a_k$ for\n$a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the\nupper index**, which is legitimate because of the recursion theorem\n([[thm-recursion]]). That theorem produces a function of one variable, so the\nrunning index has to be carried along inside the value: applying it to the set\n$A = \\mathbb{N} \\times \\mathbb{R}$, the starting element $(0, 0)$ and the function\n$f(n, s) = (\\sigma(n),\\, s + a_n)$ gives a unique\n$g : \\mathbb{N} \\to \\mathbb{N} \\times \\mathbb{R}$ with\n\n$$g(0) = (0, 0), \\qquad g(\\sigma(n)) = f(g(n)) \\quad (n \\in \\mathbb{N}).$$\n\nWrite $g(n) = \\big(\\pi_1(g(n)),\\, \\Sigma_n\\big)$ for its two coordinates.\n\n**The first coordinate is the index itself, and that is a small induction, not an\nobservation** ([[thm-induction-principle]]). Indeed $\\pi_1(g(0)) = 0$; and if\n$\\pi_1(g(n)) = n$, then\n$g(\\sigma(n)) = f\\big(\\pi_1(g(n)), \\Sigma_n\\big) = \\big(\\sigma(\\pi_1(g(n))),\\, \\Sigma_n + a_{\\pi_1(g(n))}\\big) = \\big(\\sigma(n),\\, \\Sigma_n + a_n\\big)$,\nso $\\pi_1(g(\\sigma(n))) = \\sigma(n)$. By induction $\\pi_1(g(n)) = n$ for every\n$n \\in \\mathbb{N}$. Only now may the second coordinate of the two displayed\nclauses be read off, and doing so gives\n\n$$\\Sigma_0 = 0, \\qquad \\Sigma_{\\sigma(n)} = \\Sigma_n + a_n .$$\n\n$\\Sigma$ is moreover the **unique** function $\\mathbb{N} \\to \\mathbb{R}$ with those\ntwo properties: if $\\Sigma'$ also has them then $n \\mapsto (n, \\Sigma'_n)$ satisfies\nthe two clauses defining $g$, hence equals $g$ by the uniqueness clause of\n[[thm-recursion]], so $\\Sigma' = \\Sigma$.\n\nWe write $\\sum_{k < n} a_k := \\Sigma_n$. The same construction with starting\nelement $(0, 1)$ and $f(n, p) = (\\sigma(n),\\, p \\cdot a_n)$, with the same\ninduction on the first coordinate and the same uniqueness argument, gives the\nunique $\\Pi : \\mathbb{N} \\to \\mathbb{R}$ with\n\n$$\\Pi_0 = 1, \\qquad \\Pi_{\\sigma(n)} = \\Pi_n \\cdot a_n ,$$\n\nand we write $\\prod_{k < n} a_k := \\Pi_n$.\n\n**Notation.** For $m, n \\in \\mathbb{N}$ we abbreviate\n\n$$\\sum_{k=0}^{n} a_k := \\sum_{k < n+1} a_k, \\qquad \\prod_{k=0}^{n} a_k := \\prod_{k < n+1} a_k,$$\n\nand, for a general lower index $m$ with $m \\le n + 1$, writing $d = n + 1 - m$\nfor the number of terms,\n\n$$\\sum_{k=m}^{n} a_k := \\sum_{j < d} a_{m+j}, \\qquad \\prod_{k=m}^{n} a_k := \\prod_{j < d} a_{m+j} .$$\n\nWhen $m = n + 1$ we have $d = 0$ and the sum is **empty**, with value $0$, while\nthe empty product has value $1$. In the same spirit $\\sum_{k=0}^{-1} a_k$ is\nnotation for the empty sum $\\Sigma_0 = 0$ and $\\prod_{k=0}^{-1} a_k$ for the\nempty product $\\Pi_0 = 1$; the index $-1$ never occurs as an element of\n$\\mathbb{N}$ and is only a way of writing \"no terms\".\n\nOnly finitely many values of $a$ enter $\\sum_{k<n} a_k$, so the notation\n$\\sum_{k<n} a_k$ and $\\prod_{k<n} a_k$ is also used for a list\n$a_0, \\dots, a_{n-1}$ of reals given without reference to any extension of the\nlist to all of $\\mathbb{N}$: extend the list by $a_k = 0$ (respectively\n$a_k = 1$) for $k \\ge n$ and apply the definition above.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-canonical-natural",
      "source_section": "Definition",
      "quote": "Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and\nmultiplicative identity $1_F$. Define\n$\\iota : \\mathbb{N} \\to F$ by recursion on $\\mathbb{N}$\n([[def-natural-numbers]], [[thm-recursion]]):\n\n$$\\iota(0) \\;:=\\; 0_F, \\qquad \\iota(n+1) \\;:=\\; \\iota(n) + 1_F .$$\n\n$\\iota(n)$ is the **canonical natural** of $n$ in $F$. It is also written\n$n \\cdot 1_F$, and for $n \\ge 1$ it is $1_F$ added to itself $n$ times.\n\n**Why the notation is needed at all.** A natural number in this library is a von\nNeumann natural, that is a set ([[def-natural-numbers]]), and a set is not an\nelement of $F$. So $1/n$, $n^{\\alpha}$ and $x/n$ are not expressions of $F$ when\n$n$ is a natural: what they mean is $1/\\iota(n)$, $\\iota(n)^{\\alpha}$ and\n$x/\\iota(n)$. The map $\\iota$ is what carries a counting number into the field,\nand writing it is the whole reason a reader meets $1/\\iota(k+1)$ where an\ninformal text would write $1/(k+1)$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-of-naturals-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field, with field structure as in [[def-field]], and for\n$n \\ge 1$ let $n \\cdot 1_F$ denote the canonical natural number\n$\\underbrace{1_F + \\cdots + 1_F}_{n}$, defined recursively by $1 \\cdot 1_F = 1_F$\nand $(n+1) \\cdot 1_F = n \\cdot 1_F + 1_F$. Then for every $n \\ge 1$:\n\n- $n \\cdot 1_F > 0$ and $(n+1) \\cdot 1_F > n \\cdot 1_F$;\n- the map $n \\mapsto n \\cdot 1_F$ is strictly increasing, hence injective, on $\\{1, 2, 3, \\dots\\}$;\n- $(m+n) \\cdot 1_F = m \\cdot 1_F + n \\cdot 1_F$ and $(mn) \\cdot 1_F = (m \\cdot 1_F)(n \\cdot 1_F)$ for all $m, n \\ge 1$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-geometric-series",
      "source_section": "Statement",
      "quote": "Let $r \\in \\mathbb{R}$ and let $r^k$ be the integer power ([[def-integer-power]]),\nso that $r^0 = 1$ for every $r$, including $r = 0$.\n\n1. If $|r| < 1$ then the series $\\sum r^k$ converges ([[def-series]]) and\n   $$\\sum_{k=0}^{\\infty} r^{k} \\;=\\; \\frac{1}{1-r} .$$\n2. If $|r| \\ge 1$ then $\\sum r^k$ diverges.\n\nThe series starts at $k = 0$ and its first term is $r^0 = 1$; in particular\n$\\sum_{k=0}^{\\infty} 2^{-k} = 2$, while the series starting at $k = 1$ sums to\n$1$. Which starting index is meant has to be said, and it is said here.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-power-monotone",
      "source_section": "Statement",
      "quote": "Let $\\mathbb{R}$ be an ordered field ([[def-ordered-field]]), let\n$a, b \\in \\mathbb{R}$ and let $n \\in \\mathbb{N}$, with powers as in\n[[def-integer-power]].\n\n1. **Signs.** If $a \\ge 0$ then $a^n \\ge 0$, and if $a > 0$ then $a^n > 0$.\n2. **Strict monotonicity in the base.** If $0 \\le a < b$ and $n \\ge 1$ then $a^n < b^n$. Consequently, for $a, b \\ge 0$ and $n \\ge 1$: $a < b \\iff a^n < b^n$ and $a \\le b \\iff a^n \\le b^n$, and $x \\mapsto x^n$ is injective on $\\{x \\in \\mathbb{R} : x \\ge 0\\}$.\n3. **Comparison with the base.** If $a \\ge 1$ and $n \\ge 1$ then $a^n \\ge a \\ge 1$; if $a > 1$ and $n \\ge 1$ then $a^n \\ge a > 1$; and if $0 \\le a \\le 1$ then $a^n \\le 1$.\n4. **Monotonicity in the exponent.** If $a > 1$ then $a^m < a^n$ whenever $m < n$ in $\\mathbb{N}$; if $a = 1$ then $a^n = 1$ for all $n$; and if $0 < a < 1$ then $a^m > a^n$ whenever $m < n$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with\n$|x|$ the absolute value ([[def-abs-value]]). Then\n\n$$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$\n\nand, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-cauchy-product",
      "source_section": "Definition",
      "quote": "Let $(a_k)$ and $(b_k)$ be sequences of reals ([[def-series]]). The **Cauchy\nproduct** of $\\sum a_k$ and $\\sum b_k$ is the series $\\sum c_n$ of the sequence\n\n$$c_n \\;:=\\; \\sum_{k=0}^{n} a_k\\, b_{n-k} \\qquad (n \\in \\mathbb{N}),$$\n\na finite sum of $n+1$ terms in the sense of [[def-finite-sum]]. Each index\n$n - k$ occurring here is a natural number, because $k$ runs over $0, \\dots, n$;\nand $c_0 = a_0 b_0$.\n\nThe definition uses only the two sequences of terms. **No convergence is assumed\nand none is asserted**: $\\sum c_n$ is a series formed from $(a_k)$ and $(b_k)$,\nand whether it converges, and to what, is the subject of [[thm-mertens]] and\n[[cor-cauchy-product-absolute]], while [[fs-cauchy-product-of-convergent-series-converges]]\nshows that convergence of both factors is not enough.\n\n**Why these coefficients.** Reading $\\sum a_k x^k$ and $\\sum b_k x^k$ as formal\npower series and multiplying them term by term, the coefficient of $x^n$ collects\nexactly the products $a_k b_{n-k}$ with $k + (n-k) = n$. So $c_n$ is the\ncoefficient one is forced to write down if the product of two series is to behave\nlike the product of two polynomials, and the results on this page say when that\nformal operation computes the product of the two sums.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "cor-cauchy-product-absolute",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ and $(b_k)$ be sequences of reals whose series both converge\nabsolutely ([[def-absolute-and-conditional-convergence]]), with sums $A$ and $B$,\nand let $(c_n)$ be their Cauchy product ([[def-cauchy-product]]). Then $\\sum c_n$\nconverges **absolutely**, and\n\n$$\\sum_{n=0}^{\\infty} c_n \\;=\\; A\\,B .$$\n\nMoreover $\\sum_{n=0}^{\\infty} |c_n| \\le \\bigl(\\sum_{k=0}^{\\infty}|a_k|\\bigr)\n\\bigl(\\sum_{k=0}^{\\infty}|b_k|\\bigr)$.\n\nCombined with [[thm-dirichlet-rearrangement]] this says that within the\nabsolutely convergent series the product behaves exactly as one would want: it\nconverges, its sum is the product of the sums, and neither factor's order nor the\nproduct's order matters.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-finite-sum",
      "source_section": "Definition",
      "quote": "Throughout this page $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]]), in particular an ordered field\n([[def-ordered-field]]) and a field ([[def-field]]), and $\\mathbb{N}$ is the set\nof natural numbers ([[def-natural-numbers]]) with successor $\\sigma(n) = n + 1$\n([[def-nat-addition]]).\n\nLet $a : \\mathbb{N} \\to \\mathbb{R}$ be a sequence of reals, written $a_k$ for\n$a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the\nupper index**, which is legitimate because of the recursion theorem\n([[thm-recursion]]). That theorem produces a function of one variable, so the\nrunning index has to be carried along inside the value: applying it to the set\n$A = \\mathbb{N} \\times \\mathbb{R}$, the starting element $(0, 0)$ and the function\n$f(n, s) = (\\sigma(n),\\, s + a_n)$ gives a unique\n$g : \\mathbb{N} \\to \\mathbb{N} \\times \\mathbb{R}$ with\n\n$$g(0) = (0, 0), \\qquad g(\\sigma(n)) = f(g(n)) \\quad (n \\in \\mathbb{N}).$$\n\nWrite $g(n) = \\big(\\pi_1(g(n)),\\, \\Sigma_n\\big)$ for its two coordinates.\n\n**The first coordinate is the index itself, and that is a small induction, not an\nobservation** ([[thm-induction-principle]]). Indeed $\\pi_1(g(0)) = 0$; and if\n$\\pi_1(g(n)) = n$, then\n$g(\\sigma(n)) = f\\big(\\pi_1(g(n)), \\Sigma_n\\big) = \\big(\\sigma(\\pi_1(g(n))),\\, \\Sigma_n + a_{\\pi_1(g(n))}\\big) = \\big(\\sigma(n),\\, \\Sigma_n + a_n\\big)$,\nso $\\pi_1(g(\\sigma(n))) = \\sigma(n)$. By induction $\\pi_1(g(n)) = n$ for every\n$n \\in \\mathbb{N}$. Only now may the second coordinate of the two displayed\nclauses be read off, and doing so gives\n\n$$\\Sigma_0 = 0, \\qquad \\Sigma_{\\sigma(n)} = \\Sigma_n + a_n .$$\n\n$\\Sigma$ is moreover the **unique** function $\\mathbb{N} \\to \\mathbb{R}$ with those\ntwo properties: if $\\Sigma'$ also has them then $n \\mapsto (n, \\Sigma'_n)$ satisfies\nthe two clauses defining $g$, hence equals $g$ by the uniqueness clause of\n[[thm-recursion]], so $\\Sigma' = \\Sigma$.\n\nWe write $\\sum_{k < n} a_k := \\Sigma_n$. The same construction with starting\nelement $(0, 1)$ and $f(n, p) = (\\sigma(n),\\, p \\cdot a_n)$, with the same\ninduction on the first coordinate and the same uniqueness argument, gives the\nunique $\\Pi : \\mathbb{N} \\to \\mathbb{R}$ with\n\n$$\\Pi_0 = 1, \\qquad \\Pi_{\\sigma(n)} = \\Pi_n \\cdot a_n ,$$\n\nand we write $\\prod_{k < n} a_k := \\Pi_n$.\n\n**Notation.** For $m, n \\in \\mathbb{N}$ we abbreviate\n\n$$\\sum_{k=0}^{n} a_k := \\sum_{k < n+1} a_k, \\qquad \\prod_{k=0}^{n} a_k := \\prod_{k < n+1} a_k,$$\n\nand, for a general lower index $m$ with $m \\le n + 1$, writing $d = n + 1 - m$\nfor the number of terms,\n\n$$\\sum_{k=m}^{n} a_k := \\sum_{j < d} a_{m+j}, \\qquad \\prod_{k=m}^{n} a_k := \\prod_{j < d} a_{m+j} .$$\n\nWhen $m = n + 1$ we have $d = 0$ and the sum is **empty**, with value $0$, while\nthe empty product has value $1$. In the same spirit $\\sum_{k=0}^{-1} a_k$ is\nnotation for the empty sum $\\Sigma_0 = 0$ and $\\prod_{k=0}^{-1} a_k$ for the\nempty product $\\Pi_0 = 1$; the index $-1$ never occurs as an element of\n$\\mathbb{N}$ and is only a way of writing \"no terms\".\n\nOnly finitely many values of $a$ enter $\\sum_{k<n} a_k$, so the notation\n$\\sum_{k<n} a_k$ and $\\prod_{k<n} a_k$ is also used for a list\n$a_0, \\dots, a_{n-1}$ of reals given without reference to any extension of the\nlist to all of $\\mathbb{N}$: extend the list by $a_k = 0$ (respectively\n$a_k = 1$) for $k \\ge n$ and apply the definition above.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-canonical-natural",
      "source_section": "Definition",
      "quote": "Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and\nmultiplicative identity $1_F$. Define\n$\\iota : \\mathbb{N} \\to F$ by recursion on $\\mathbb{N}$\n([[def-natural-numbers]], [[thm-recursion]]):\n\n$$\\iota(0) \\;:=\\; 0_F, \\qquad \\iota(n+1) \\;:=\\; \\iota(n) + 1_F .$$\n\n$\\iota(n)$ is the **canonical natural** of $n$ in $F$. It is also written\n$n \\cdot 1_F$, and for $n \\ge 1$ it is $1_F$ added to itself $n$ times.\n\n**Why the notation is needed at all.** A natural number in this library is a von\nNeumann natural, that is a set ([[def-natural-numbers]]), and a set is not an\nelement of $F$. So $1/n$, $n^{\\alpha}$ and $x/n$ are not expressions of $F$ when\n$n$ is a natural: what they mean is $1/\\iota(n)$, $\\iota(n)^{\\alpha}$ and\n$x/\\iota(n)$. The map $\\iota$ is what carries a counting number into the field,\nand writing it is the whole reason a reader meets $1/\\iota(k+1)$ where an\ninformal text would write $1/(k+1)$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-series-linearity",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ and $(b_k)$ be sequences of reals whose series converge\n([[def-series]]), and let $c \\in \\mathbb{R}$. Then:\n\n1. $\\sum (a_k + b_k)$ converges, with\n   $\\displaystyle\\sum_{k=0}^{\\infty}(a_k + b_k) = \\sum_{k=0}^{\\infty} a_k + \\sum_{k=0}^{\\infty} b_k$;\n2. $\\sum c\\,a_k$ converges, with\n   $\\displaystyle\\sum_{k=0}^{\\infty} c\\,a_k = c \\sum_{k=0}^{\\infty} a_k$.\n\nMoreover, for $c \\ne 0$ and an arbitrary sequence $(a_k)$, whose series is not\nassumed to converge:\n\n3. $\\sum c\\,a_k$ converges **if and only if** $\\sum a_k$ converges. Equivalently,\n   $\\sum a_k$ diverges if and only if $\\sum c\\,a_k$ diverges.\n\nClaim 3 is the form used whenever a comparison is made against a constant\nmultiple of a known series.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-direct-comparison-test",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ and $(b_k)$ be sequences of reals and suppose there is\n$K \\in \\mathbb{N}$ with\n\n$$0 \\;\\le\\; a_k \\;\\le\\; b_k \\qquad \\text{for all } k \\ge K .$$\n\nThen:\n\n1. if $\\sum b_k$ converges then $\\sum a_k$ converges ([[def-series]]);\n2. if $\\sum a_k$ diverges then $\\sum b_k$ diverges.\n\nThe same statement holds verbatim for series with a general starting index $m$,\napplied to the shifted sequences of [[def-series]].\n\nThe hypothesis is on the terms from some index on, not on all of them: finitely\nmany terms of either sequence may violate it, or be negative, without affecting\nthe conclusion. What may not be dropped is nonnegativity of $(a_k)$ from that\nindex on.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Choose $M\\ge0$ with $|\\sigma_n|\\le M$ for every $n$. Then $|T_nx^n|\\le M\\iota(n+1)x^n$; [L2] and [L3] give convergence of the majorant series, so [L4] gives absolute convergence of $\\sum_nT_nx^n$.",
      "step": "1.1",
      "inputs": [
        "L2",
        "L3",
        "L4",
        "L1"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Since $S_n=T_n-T_{n-1}$, step 1.1 gives absolute convergence of $\\sum_nS_nx^n$. With $T_{-1}=0$, the shifted series satisfies $\\sum_{n\\ge0}T_{n-1}x^n=x\\sum_{n\\ge0}T_nx^n$; combining the two convergent series by [L3] gives $\\sum_{n\\ge0}S_nx^n=(1-x)\\sum_{n\\ge0}T_nx^n$.",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "L3",
        "L1"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "Since $a_n=S_n-S_{n-1}$ with $S_{-1}=0$, step 2.1 likewise gives absolute convergence and $\\sum_na_nx^n=(1-x)\\sum_nS_nx^n$. Substitute step 2.1 and $T_n=\\iota(n+1)\\sigma_n$ to get the formula.",
      "step": "3.1",
      "inputs": [
        "step 2.1",
        "L1",
        "L3"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "lem-abel-transform-of-cesaro-means: the Statement fixes the displayed objects and has no conclusion depending on an unlicensed choice from an empty family: Let $S_n:=\\sum_{k=0}^{n}a_k$ and $\\sigma_n:=\\iota(n+1)^{-1}\\sum_{k=0}^{n}S_k$. If $(\\sigma_n)$ is bounded, then for every $0<x<1$ the Abel series converges and $$\\sum_{n=0}^{\\infty}a_nx^n=(1-x)^2\\sum_{n=0}^{\\infty}\\iota("
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "lem-abel-transform-of-cesaro-means: no independent zero-parameter boundary remains after the stated hypotheses and definitions; checked against the Statement: Let $S_n:=\\sum_{k=0}^{n}a_k$ and $\\sigma_n:=\\iota(n+1)^{-1}\\sum_{k=0}^{n}S_k$. If $(\\sigma_n)$ is bounded, then for every $0<x<1$ the Abel series converges and $$\\sum_{n=0}^{\\infty}a_nx^n=(1-x)^2\\sum_{n=0}^{\\infty}\\iota("
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "lem-abel-transform-of-cesaro-means: the assertion has no separate unit-size case; its quantified argument applies without a one-case split: Let $S_n:=\\sum_{k=0}^{n}a_k$ and $\\sigma_n:=\\iota(n+1)^{-1}\\sum_{k=0}^{n}S_k$. If $(\\sigma_n)$ is bounded, then for every $0<x<1$ the Abel series converges and $$\\sum_{n=0}^{\\infty}a_nx^n=(1-x)^2\\sum_{n=0}^{\\infty}\\iota("
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "lem-abel-transform-of-cesaro-means: no geometric or algebraic degeneracy changes the asserted conclusion; checked against the Statement: Let $S_n:=\\sum_{k=0}^{n}a_k$ and $\\sigma_n:=\\iota(n+1)^{-1}\\sum_{k=0}^{n}S_k$. If $(\\sigma_n)$ is bounded, then for every $0<x<1$ the Abel series converges and $$\\sum_{n=0}^{\\infty}a_nx^n=(1-x)^2\\sum_{n=0}^{\\infty}\\iota("
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "lem-abel-transform-of-cesaro-means: no interval or radial endpoint is part of the conclusion; checked against the Statement: Let $S_n:=\\sum_{k=0}^{n}a_k$ and $\\sigma_n:=\\iota(n+1)^{-1}\\sum_{k=0}^{n}S_k$. If $(\\sigma_n)$ is bounded, then for every $0<x<1$ the Abel series converges and $$\\sum_{n=0}^{\\infty}a_nx^n=(1-x)^2\\sum_{n=0}^{\\infty}\\iota("
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 1.1: every witness selected there is drawn after the proof establishes the relevant positivity, existence, or nonemptiness condition."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "lem-abel-transform-of-cesaro-means: the Statement is not an equivalence, so there is no forward implication obligation: Let $S_n:=\\sum_{k=0}^{n}a_k$ and $\\sigma_n:=\\iota(n+1)^{-1}\\sum_{k=0}^{n}S_k$. If $(\\sigma_n)$ is bounded, then for every $0<x<1$ the Abel series converges and $$\\sum_{n=0}^{\\infty}a_nx^n=(1-x)^2\\sum_{n=0}^{\\infty}\\iota("
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "lem-abel-transform-of-cesaro-means: the Statement is not an equivalence, so there is no reverse implication obligation: Let $S_n:=\\sum_{k=0}^{n}a_k$ and $\\sigma_n:=\\iota(n+1)^{-1}\\sum_{k=0}^{n}S_k$. If $(\\sigma_n)$ is bounded, then for every $0<x<1$ the Abel series converges and $$\\sum_{n=0}^{\\infty}a_nx^n=(1-x)^2\\sum_{n=0}^{\\infty}\\iota("
    }
  ]
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "lem-abel-transform-of-cesaro-means",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "def-abel-and-cesaro-summability-of-a-series",
    "declared_target": "def-abel-and-cesaro-summability-of-a-series",
    "target_statement_provenance": "ai-altered",
    "targetPage": "power-series-and-real-analytic-functions",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-abel-transform-of-cesaro-means",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "def-finite-sum",
    "declared_target": "def-finite-sum",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-abel-transform-of-cesaro-means",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "thm-geometric-series",
    "declared_target": "thm-geometric-series",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-abel-transform-of-cesaro-means",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "lem-power-monotone",
    "declared_target": "lem-power-monotone",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-abel-transform-of-cesaro-means",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
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
    "source": "lem-abel-transform-of-cesaro-means",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "def-cauchy-product",
    "declared_target": "def-cauchy-product",
    "target_statement_provenance": "ai-altered",
    "targetPage": "absolute-convergence-and-rearrangement",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-abel-transform-of-cesaro-means",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "cor-cauchy-product-absolute",
    "declared_target": "cor-cauchy-product-absolute",
    "target_statement_provenance": "literature-derived",
    "targetPage": "absolute-convergence-and-rearrangement",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-abel-transform-of-cesaro-means",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "thm-direct-comparison-test",
    "declared_target": "thm-direct-comparison-test",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-abel-transform-of-cesaro-means",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "lem-series-linearity",
    "declared_target": "lem-series-linearity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-abel-transform-of-cesaro-means",
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
    "source": "lem-abel-transform-of-cesaro-means",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
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

## Full exact-current text of every cited or declared item (11)

### `cor-cauchy-product-absolute`

````markdown
---
id: cor-cauchy-product-absolute
kind: corollary
title: "If $\\sum a_k$ and $\\sum b_k$ both converge absolutely then their Cauchy product converges absolutely, with sum $AB$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-mertens, def-cauchy-product, def-absolute-and-conditional-convergence, lem-absolute-convergence-implies-convergence, thm-nonnegative-series-bounded-partial-sums, thm-direct-comparison-test, lem-triangle-inequality-finite, lem-of-abs-value, lem-finite-sum-laws, def-finite-sum, def-series]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
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
    - title: "Cauchy product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_product"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis, Chapter 4"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch4.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ and $(b_k)$ be sequences of reals whose series both converge
absolutely ([[def-absolute-and-conditional-convergence]]), with sums $A$ and $B$,
and let $(c_n)$ be their Cauchy product ([[def-cauchy-product]]). Then $\sum c_n$
converges **absolutely**, and

$$\sum_{n=0}^{\infty} c_n \;=\; A\,B .$$

Moreover $\sum_{n=0}^{\infty} |c_n| \le \bigl(\sum_{k=0}^{\infty}|a_k|\bigr)
\bigl(\sum_{k=0}^{\infty}|b_k|\bigr)$.

Combined with [[thm-dirichlet-rearrangement]] this says that within the
absolutely convergent series the product behaves exactly as one would want: it
converges, its sum is the product of the sums, and neither factor's order nor the
product's order matters.

## Facts & Assumptions

**Given:** Sequences $(a_k)$ and $(b_k)$ with $\sum |a_k|$ and $\sum |b_k|$ convergent, sums $L_a$ and $L_b$ respectively, partial sums $P_N = \sum_{k<N}|a_k|$ and $Q_m = \sum_{j<m}|b_j|$, and the Cauchy product $c_n = \sum_{k=0}^{n} a_k b_{n-k}$ ([[def-cauchy-product]]).

[L1] The finite identity of [[thm-mertens]], claim 1: for arbitrary sequences $(x_k)$, $(y_k)$ with partial sums $Y_m = \sum_{j<m} y_j$ and Cauchy product $(z_n)$, one has $\sum_{n<N} z_n = \sum_{i<N} x_i\, Y_{N-i}$ for every $N$.

[L2] Mertens' theorem, claim 2 of [[thm-mertens]]: if $\sum x_k$ converges absolutely and $\sum y_k$ converges, their Cauchy product converges to the product of the sums.

[L3] $\bigl|\sum_{k<n} x_k\bigr| \le \sum_{k<n}|x_k|$ ([[lem-triangle-inequality-finite]]).

[L4] Absolute value: $|xy| = |x|\,|y|$ and $|x| \ge 0$ ([[lem-of-abs-value]]).

[L5] Finite sums are monotone in their terms and scale by a constant factor; the empty sum is $0$ ([[lem-finite-sum-laws]], [[def-finite-sum]]).

[L6] For a series of nonnegative terms, convergence is equivalent to the range of the partial sums being bounded above, and then every partial sum is at most the sum ([[thm-nonnegative-series-bounded-partial-sums]], [[def-series]]).

[L7] Direct comparison ([[thm-direct-comparison-test]]).

[L8] If $\sum |x_k|$ converges then $\sum x_k$ converges ([[lem-absolute-convergence-implies-convergence]]).

## Proof

**Proof technique:** direct.

1.1 Both $L_a$ and $L_b$ are nonnegative, and $P_N \le L_a$ and $Q_m \le L_b$ for all $N$ and $m$, the terms $|a_k|$ and $|b_j|$ being nonnegative. [given, L4, L6]

1.2 Put $\gamma_n := \sum_{k=0}^{n} |a_k|\,|b_{n-k}|$, the Cauchy product of the sequences $(|a_k|)$ and $(|b_k|)$; every $\gamma_n$ is nonnegative. [given, L4, L5]

2.1 For every $n$, $|c_n| = \bigl|\sum_{k=0}^{n} a_k b_{n-k}\bigr| \le \sum_{k=0}^{n} |a_k b_{n-k}| = \gamma_n$. [step 1.2, L3, L4]

2.2 Applying [L1] to $(|a_k|)$ and $(|b_k|)$ gives $\sum_{n<N} \gamma_n = \sum_{i<N} |a_i|\, Q_{N-i}$ for every $N$. [step 1.2, L1]

3.1 Since $0 \le Q_{N-i} \le L_b$ and $|a_i| \ge 0$, monotonicity and scaling give $\sum_{i<N} |a_i|\,Q_{N-i} \le \sum_{i<N} |a_i|\,L_b = L_b\,P_N \le L_b L_a$ for every $N$. [step 1.1, step 2.2, L5]

4.1 So $\sum \gamma_n$ is a series of nonnegative terms whose partial sums are bounded above by $L_a L_b$; it therefore converges, with sum at most $L_a L_b$. [step 1.2, step 3.1, L6]

5.1 By step 2.1 and comparison, $\sum |c_n|$ converges, and its sum is at most that of $\sum \gamma_n$, hence at most $L_a L_b$; that is, $\sum c_n$ converges absolutely and satisfies the displayed bound. [step 2.1, step 4.1, L6, L7]

6.1 The hypotheses of Mertens' theorem hold, $\sum a_k$ converging absolutely and $\sum b_k$ converging by step 1.1 and [L8]; so $\sum c_n$ converges with sum $AB$. [given, L2, L8] ∎

## Remarks

- **Only claim 1 of [[thm-mertens]] is reused, and it is reused for a different pair of sequences.** The identity there is proved for arbitrary real sequences and carries no convergence hypothesis, which is exactly what allows it to be applied here to $(|a_k|)$ and $(|b_k|)$. Nothing about the absolute values is reproved.

- **The bound is not an equality.** The sum of $\sum|c_n|$ can be strictly less than $L_a L_b$, since cancellation inside each $c_n$ is invisible to $\gamma_n$; the inequality is all that is claimed and all that is needed.

- **Absolute convergence of both factors is a genuine strengthening.** Mertens' theorem already gives $\sum c_n = AB$ with only one factor absolutely convergent; what the second hypothesis buys is that the product series is itself absolutely convergent, hence unconditionally convergent ([[thm-dirichlet-rearrangement]]), so that its terms may be reordered in turn.
````

### `def-abel-and-cesaro-summability-of-a-series`

````markdown
---
id: def-abel-and-cesaro-summability-of-a-series
kind: definition
title: "Abel summability by $\\lim_{x\\uparrow1}\\sum a_nx^n$ and Cesaro summability by the Cesaro means of the partial sums"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-series, def-cesaro-mean, def-function-limit, def-real-power-series-and-radius-of-convergence]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Abel summability, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Abel_summability_method"
    - title: "Cesàro summation, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Cesaro_summation_method"
    - title: "Cesàro summation methods, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Ces%C3%A0ro_summation_methods"
    - title: "S. Semmes, Rice Math 322 notes"
      url: "https://math.rice.edu/~semmes/math322.pdf"
pipeline_run: null
---

## Definition

For a real series $\sum_{n\ge0}a_n$, write its inclusive partial sums as

$$S_n:=\sum_{k=0}^{n}a_k$$

and their Cesaro means as

$$\sigma_n:=\frac1{\iota(n+1)}\sum_{k=0}^{n}S_k.$$

The series is **Cesaro summable to $s$** if $\sigma_n\to s$ ([[def-cesaro-mean]]).

It is **Abel summable to $s$** if the power series

$$A(x):=\sum_{n=0}^{\infty}a_nx^n$$

converges for every $0\le x<1$ and $\lim_{x\uparrow1}A(x)=s$ in the one-sided sense of [[def-function-limit]]. These are summability methods for the zero-indexed series of [[def-series]]; they do not assert ordinary convergence.
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

### `def-cauchy-product`

````markdown
---
id: def-cauchy-product
kind: definition
title: "The Cauchy product of two series: $c_n = \\sum_{k=0}^{n} a_k b_{n-k}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-series, def-finite-sum, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: true
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
    - title: "Cauchy product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_product"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis, Chapter 4"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch4.pdf"
pipeline_run: null
---

## Definition

Let $(a_k)$ and $(b_k)$ be sequences of reals ([[def-series]]). The **Cauchy
product** of $\sum a_k$ and $\sum b_k$ is the series $\sum c_n$ of the sequence

$$c_n \;:=\; \sum_{k=0}^{n} a_k\, b_{n-k} \qquad (n \in \mathbb{N}),$$

a finite sum of $n+1$ terms in the sense of [[def-finite-sum]]. Each index
$n - k$ occurring here is a natural number, because $k$ runs over $0, \dots, n$;
and $c_0 = a_0 b_0$.

The definition uses only the two sequences of terms. **No convergence is assumed
and none is asserted**: $\sum c_n$ is a series formed from $(a_k)$ and $(b_k)$,
and whether it converges, and to what, is the subject of [[thm-mertens]] and
[[cor-cauchy-product-absolute]], while [[fs-cauchy-product-of-convergent-series-converges]]
shows that convergence of both factors is not enough.

**Why these coefficients.** Reading $\sum a_k x^k$ and $\sum b_k x^k$ as formal
power series and multiplying them term by term, the coefficient of $x^n$ collects
exactly the products $a_k b_{n-k}$ with $k + (n-k) = n$. So $c_n$ is the
coefficient one is forced to write down if the product of two series is to behave
like the product of two polynomials, and the results on this page say when that
formal operation computes the product of the two sums.

## Remarks

- **Only the two sequences of terms enter.** The construction is a rule on
  sequences, and every result below is stated for the sequence $(c_n)$ it
  produces. The Cauchy product of $\sum b_k$ with $\sum a_k$ is formed by the same
  rule with the roles exchanged, giving $\sum_{k=0}^{n} b_k a_{n-k}$; that this
  is the same number as $c_n$ is the reversal invariance of a finite sum, which is
  not among the laws of [[lem-finite-sum-laws]] and is not used anywhere on this
  page. Each statement below therefore says which factor carries which
  hypothesis, rather than appealing to symmetry.

- **The definition is stated for series indexed from $0$**, as every series on
  this page is ([[def-series]]). For families from a general starting index the
  Cauchy product is formed after shifting both families to $\mathbb{N}$, as
  [[def-series]] prescribes; the shift changes which products appear in $c_n$, so
  the starting indices have to be said, and they are said wherever this
  construction is used below.

- **Nothing here is a product of sums.** The symbol $\sum c_n$ names a new series
  built from the terms, not the number
  $\bigl(\sum_{k=0}^{\infty}a_k\bigr)\bigl(\sum_{k=0}^{\infty}b_k\bigr)$, which
  may not even be defined. Identifying the two is a theorem with hypotheses.
````

### `def-finite-sum`

````markdown
---
id: def-finite-sum
kind: definition
title: "Finite sums and finite products, by recursion"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-recursion, thm-induction-principle, def-ordered-field, def-natural-numbers, def-nat-addition, def-field, def-complete-ordered-field, lem-of-naturals-positive, lem-of-q-embeds]
justified_by: []
aliases: [def-finite-product]
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
    - title: "Empty sum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Empty_sum"
    - title: "T. Tao, Analysis I, 3rd ed., §7.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Throughout this page $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]), in particular an ordered field
([[def-ordered-field]]) and a field ([[def-field]]), and $\mathbb{N}$ is the set
of natural numbers ([[def-natural-numbers]]) with successor $\sigma(n) = n + 1$
([[def-nat-addition]]).

Let $a : \mathbb{N} \to \mathbb{R}$ be a sequence of reals, written $a_k$ for
$a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the
upper index**, which is legitimate because of the recursion theorem
([[thm-recursion]]). That theorem produces a function of one variable, so the
running index has to be carried along inside the value: applying it to the set
$A = \mathbb{N} \times \mathbb{R}$, the starting element $(0, 0)$ and the function
$f(n, s) = (\sigma(n),\, s + a_n)$ gives a unique
$g : \mathbb{N} \to \mathbb{N} \times \mathbb{R}$ with

$$g(0) = (0, 0), \qquad g(\sigma(n)) = f(g(n)) \quad (n \in \mathbb{N}).$$

Write $g(n) = \big(\pi_1(g(n)),\, \Sigma_n\big)$ for its two coordinates.

**The first coordinate is the index itself, and that is a small induction, not an
observation** ([[thm-induction-principle]]). Indeed $\pi_1(g(0)) = 0$; and if
$\pi_1(g(n)) = n$, then
$g(\sigma(n)) = f\big(\pi_1(g(n)), \Sigma_n\big) = \big(\sigma(\pi_1(g(n))),\, \Sigma_n + a_{\pi_1(g(n))}\big) = \big(\sigma(n),\, \Sigma_n + a_n\big)$,
so $\pi_1(g(\sigma(n))) = \sigma(n)$. By induction $\pi_1(g(n)) = n$ for every
$n \in \mathbb{N}$. Only now may the second coordinate of the two displayed
clauses be read off, and doing so gives

$$\Sigma_0 = 0, \qquad \Sigma_{\sigma(n)} = \Sigma_n + a_n .$$

$\Sigma$ is moreover the **unique** function $\mathbb{N} \to \mathbb{R}$ with those
two properties: if $\Sigma'$ also has them then $n \mapsto (n, \Sigma'_n)$ satisfies
the two clauses defining $g$, hence equals $g$ by the uniqueness clause of
[[thm-recursion]], so $\Sigma' = \Sigma$.

We write $\sum_{k < n} a_k := \Sigma_n$. The same construction with starting
element $(0, 1)$ and $f(n, p) = (\sigma(n),\, p \cdot a_n)$, with the same
induction on the first coordinate and the same uniqueness argument, gives the
unique $\Pi : \mathbb{N} \to \mathbb{R}$ with

$$\Pi_0 = 1, \qquad \Pi_{\sigma(n)} = \Pi_n \cdot a_n ,$$

and we write $\prod_{k < n} a_k := \Pi_n$.

**Notation.** For $m, n \in \mathbb{N}$ we abbreviate

$$\sum_{k=0}^{n} a_k := \sum_{k < n+1} a_k, \qquad \prod_{k=0}^{n} a_k := \prod_{k < n+1} a_k,$$

and, for a general lower index $m$ with $m \le n + 1$, writing $d = n + 1 - m$
for the number of terms,

$$\sum_{k=m}^{n} a_k := \sum_{j < d} a_{m+j}, \qquad \prod_{k=m}^{n} a_k := \prod_{j < d} a_{m+j} .$$

When $m = n + 1$ we have $d = 0$ and the sum is **empty**, with value $0$, while
the empty product has value $1$. In the same spirit $\sum_{k=0}^{-1} a_k$ is
notation for the empty sum $\Sigma_0 = 0$ and $\prod_{k=0}^{-1} a_k$ for the
empty product $\Pi_0 = 1$; the index $-1$ never occurs as an element of
$\mathbb{N}$ and is only a way of writing "no terms".

Only finitely many values of $a$ enter $\sum_{k<n} a_k$, so the notation
$\sum_{k<n} a_k$ and $\prod_{k<n} a_k$ is also used for a list
$a_0, \dots, a_{n-1}$ of reals given without reference to any extension of the
list to all of $\mathbb{N}$: extend the list by $a_k = 0$ (respectively
$a_k = 1$) for $k \ge n$ and apply the definition above.

## Remarks

- **Why recursion and not "$a_0 + a_1 + \cdots + a_{n-1}$".** The dots are not a
  definition: they presuppose that the displayed pattern determines a value for
  every $n$, which is exactly what the recursion theorem
  ([[thm-recursion]]) supplies, and its uniqueness clause is what makes
  $\sum_{k<n} a_k$ a single well-determined real rather than a family of choices.
  Associativity and commutativity of addition are *not* used in the definition;
  they are used in the laws proved from it ([[lem-finite-sum-laws]]).
- **Naturals and rationals inside $\mathbb{R}$ (a convention used on the whole
  page).** A natural number $n$ and a rational number $r$ are not literally
  elements of $\mathbb{R}$: they enter $\mathbb{R}$ through the canonical
  embedding $\iota : \mathbb{Q} \to \mathbb{R}$, which is an injective,
  order-preserving field homomorphism ([[lem-of-q-embeds]]), restricting on
  positive naturals to $n \mapsto n \cdot 1_{\mathbb{R}} = 1_\mathbb{R} + \cdots + 1_\mathbb{R}$
  ([[lem-of-naturals-positive]]). Following ordinary practice, and only where no
  confusion is possible, we write $n$ for $\iota(n)$ and $r$ for $\iota(r)$; so,
  for instance, $\frac{1}{n}\sum_{k<n} a_k$ means
  $\iota(n)^{-1} \cdot \sum_{k<n} a_k$, which makes sense because
  $\iota(n) > 0$ for $n \ge 1$. Exponents are the one place where the
  identification is deliberately NOT made: in $a^n$ and $a^r$ the exponent stays
  a natural, an integer or a rational ([[def-integer-power]],
  [[def-rational-power]]), never a real.
- The two indexings are related by $\sum_{k=0}^{n} a_k = \sum_{k < n+1} a_k$, so
  a statement proved for one is available for the other. Sums over $k < n$ are
  the primitive form here because $\Sigma_0$, the empty sum, is then the base
  case of every induction, and no index outside $\mathbb{N}$ is ever needed.
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

### `lem-power-monotone`

````markdown
---
id: lem-power-monotone
kind: lemma
title: "Monotonicity of $x \\mapsto x^n$ and of $n \\mapsto a^n$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-integer-power, cor-of-one-positive, lem-of-sign-rules, prop-of-multiply-inequalities, thm-induction-principle, def-ordered-field, def-nat-order, lem-nat-discrete]
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
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
pipeline_run: null
---

## Statement

Let $\mathbb{R}$ be an ordered field ([[def-ordered-field]]), let
$a, b \in \mathbb{R}$ and let $n \in \mathbb{N}$, with powers as in
[[def-integer-power]].

1. **Signs.** If $a \ge 0$ then $a^n \ge 0$, and if $a > 0$ then $a^n > 0$.
2. **Strict monotonicity in the base.** If $0 \le a < b$ and $n \ge 1$ then $a^n < b^n$. Consequently, for $a, b \ge 0$ and $n \ge 1$: $a < b \iff a^n < b^n$ and $a \le b \iff a^n \le b^n$, and $x \mapsto x^n$ is injective on $\{x \in \mathbb{R} : x \ge 0\}$.
3. **Comparison with the base.** If $a \ge 1$ and $n \ge 1$ then $a^n \ge a \ge 1$; if $a > 1$ and $n \ge 1$ then $a^n \ge a > 1$; and if $0 \le a \le 1$ then $a^n \le 1$.
4. **Monotonicity in the exponent.** If $a > 1$ then $a^m < a^n$ whenever $m < n$ in $\mathbb{N}$; if $a = 1$ then $a^n = 1$ for all $n$; and if $0 < a < 1$ then $a^m > a^n$ whenever $m < n$.

## Facts & Assumptions

**Given:** An ordered field $\mathbb{R}$, elements $a, b \in \mathbb{R}$ and naturals $m, n$.

[L1] Definition of powers ([[def-integer-power]]): $a^0 = 1$ and $a^{n+1} = a^n a$.

[L2] Induction principle ([[thm-induction-principle]]).

[L3] Sign and scaling rules: a product of positives is positive, and for $c > 0$, $x < y \iff cx < cy$ ([[lem-of-sign-rules]]); the positives are closed under addition and satisfy trichotomy ([[def-ordered-field]]); and $1 > 0$ ([[cor-of-one-positive]], which is where that fact is proved: neither of the two items just named states it).

[L4] Multiplying inequalities of nonnegatives: if $0 \le x \le y$ and $0 \le u \le v$ then $xu \le yv$, and if $0 < x < y$ and $0 < u < v$ then $xu < yv$ ([[prop-of-multiply-inequalities]]).

[L5] Trichotomy and transitivity of the order: for $x, y$ exactly one of $x < y$, $x = y$, $y < x$ holds, and $<$ and $\le$ are transitive ([[def-ordered-field]]).

[L6] The order on the exponents: $m \le n$ holds exactly when $n = m + k$ for some natural $k$ ([[def-nat-order]]), and $m < n$ holds exactly when $m + 1 \le n$ ([[lem-nat-discrete]]); combining the two, $m < n$ holds exactly when $n = m + d$ for some natural $d \ge 1$.

## Proof

**Proof technique:** induction.

1.1 Base case $n = 0$: $a^0 = 1 > 0$, so claim 1 holds; claim 2 is vacuous at $n = 0$; $a^0 = 1 \ge 1$ and $a^0 = 1 \le 1$, so claim 3 holds at $n = 0$ in the nonstrict readings. [base, L1, L3]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume, for all $a, b$: $a \ge 0 \Rightarrow a^n \ge 0$ and $a > 0 \Rightarrow a^n > 0$; and $0 \le a \le b \Rightarrow a^n \le b^n$, with $a^n < b^n$ when moreover $a < b$ and $n \ge 1$. [ih]

2.1 Signs at $n+1$: if $a \ge 0$ then $a^{n+1} = a^n a$ is a product of two nonnegatives, hence $\ge 0$, and if $a > 0$ it is a product of two positives, hence $> 0$. [step 1.2, L1, L3, L4]

3.1 Strict monotonicity at $n+1$, assuming $0 \le a < b$: then $b > 0$, and the hypothesis gives $0 \le a^n \le b^n$ with $b^n > 0$ by step 2.1; if $a = 0$ then $a^{n+1} = 0 < b^{n+1}$ since $b^{n+1} = b^n b > 0$; if $a > 0$ then $a^{n+1} = a^n a \le b^n a$ by multiplying $a^n \le b^n$ by $a > 0$, and $b^n a < b^n b$ by multiplying $a < b$ by $b^n > 0$, so $a^{n+1} < b^{n+1}$ by transitivity; and in either case $0 \le a \le b$ gives $a^{n+1} \le b^{n+1}$ by [L4]. [step 1.2, step 2.1, L1, L3, L4, L5]

4.1 By the induction principle, claims 1 and 2 hold for every $n$, in the form: $a \ge 0 \Rightarrow a^n \ge 0$; $a > 0 \Rightarrow a^n > 0$; and $0 \le a < b$ with $n \ge 1$ gives $a^n < b^n$. [step 1.1, step 2.1, step 3.1, L2]

5.1 The equivalences of claim 2 follow by trichotomy: for $a, b \ge 0$ and $n \ge 1$, if $a^n < b^n$ then neither $a = b$ (which would give $a^n = b^n$) nor $b < a$ (which would give $b^n < a^n$) is possible, so $a < b$; the $\le$ form is the negation of the $<$ form with $a$ and $b$ exchanged; and injectivity is the case $a^n = b^n$, where $a < b$ and $b < a$ are both excluded. [step 4.1, L5]

5.2 Claim 4: for $a > 1$ we have $a^{n+1} = a^n a > a^n \cdot 1 = a^n$, multiplying $1 < a$ by $a^n > 0$, so $a^n$ is strictly increasing in $n$, and hence $a^m < a^n$ whenever $m < n$: writing $n = m + d$ with $d \ge 1$ and inducting on $d$, the case $d = 1$ is that one-step inequality and the passage from $d$ to $d+1$ is $a^m < a^{m+d} < a^{m+d+1}$ by transitivity; for $a = 1$ an induction gives $1^n = 1$ for all $n$; and for $0 < a < 1$ we have $a^{n+1} = a^n a < a^n \cdot 1 = a^n$, so $a^n$ is strictly decreasing in $n$ and the same induction on the gap $d$ gives $a^m > a^n$ for $m < n$. [step 4.1, L1, L2, L3, L5, L6]

6.1 Claim 3: if $a \ge 1$ and $n \ge 1$ then applying step 4.1 to $1 \le a$ gives $1 = 1^n \le a^n$, and $a^n = a^{n-1} a \ge 1 \cdot a = a$ since $a^{n-1} \ge 1$ by the same argument and $a > 0$; if $a > 1$ the same computation gives $a^n \ge a > 1$; and if $0 \le a \le 1$ then $a^n \le 1^n = 1$. [step 4.1, step 5.1, L1, L3, L4]

7.1 All four claims are proved: signs and strict monotonicity in the base by the induction of steps 1.1 and 3.1, the order equivalences and injectivity by trichotomy, and the comparisons with the base and the behaviour in the exponent by steps 6.1 and 5.2. [step 4.1, step 5.1, step 6.1, step 5.2, discharge-induction] ∎
````

### `lem-series-linearity`

````markdown
---
id: lem-series-linearity
kind: lemma
title: "Convergent series add and scale termwise"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-series, thm-algebra-of-limits, lem-finite-sum-laws, def-finite-sum]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
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
    - title: "Series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Series_(mathematics)"
    - title: "T. Tao, Analysis I, 3rd ed., §7.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ and $(b_k)$ be sequences of reals whose series converge
([[def-series]]), and let $c \in \mathbb{R}$. Then:

1. $\sum (a_k + b_k)$ converges, with
   $\displaystyle\sum_{k=0}^{\infty}(a_k + b_k) = \sum_{k=0}^{\infty} a_k + \sum_{k=0}^{\infty} b_k$;
2. $\sum c\,a_k$ converges, with
   $\displaystyle\sum_{k=0}^{\infty} c\,a_k = c \sum_{k=0}^{\infty} a_k$.

Moreover, for $c \ne 0$ and an arbitrary sequence $(a_k)$, whose series is not
assumed to converge:

3. $\sum c\,a_k$ converges **if and only if** $\sum a_k$ converges. Equivalently,
   $\sum a_k$ diverges if and only if $\sum c\,a_k$ diverges.

Claim 3 is the form used whenever a comparison is made against a constant
multiple of a known series.

## Facts & Assumptions

**Given:** Sequences $(a_k)$, $(b_k)$ of reals and $c \in \mathbb{R}$, with partial sums $s_n = \sum_{k<n} a_k$ and $t_n = \sum_{k<n} b_k$ ([[def-series]], [[def-finite-sum]]).

[L1] Additivity and scaling of finite sums: $\sum_{k<n}(a_k + b_k) = \sum_{k<n} a_k + \sum_{k<n} b_k$ and $\sum_{k<n} c\,a_k = c \sum_{k<n} a_k$ ([[lem-finite-sum-laws]]).

[L2] Algebra of limits: if $x_n \to x$ and $y_n \to y$ then $x_n + y_n \to x + y$ and $c\,x_n \to c\,x$ ([[thm-algebra-of-limits]]).

## Proof

**Proof technique:** direct.

1.1 The partial sums of $\sum (a_k + b_k)$ are $\sum_{k<n}(a_k + b_k) = s_n + t_n$, and those of $\sum c\,a_k$ are $\sum_{k<n} c\,a_k = c\,s_n$. [given, L1]

1.2 Assume $\sum a_k$ and $\sum b_k$ converge, say $s_n \to S$ and $t_n \to T$. [given]

2.1 Then $s_n + t_n \to S + T$, so $\sum(a_k + b_k)$ converges with sum $S + T$, which is claim 1. [step 1.2, step 1.1, L2]

2.2 Likewise $c\,s_n \to c\,S$, so $\sum c\,a_k$ converges with sum $c\,S$, which is claim 2. [step 1.2, step 1.1, L2]

3.1 For claim 3, let $c \ne 0$ and let $(a_k)$ be arbitrary. If $\sum a_k$ converges then $\sum c\,a_k$ converges by claim 2. [step 2.2]

3.2 Conversely, if $\sum c\,a_k$ converges then applying claim 2 to the sequence $(c\,a_k)$ and the scalar $1/c$, which exists since $c \ne 0$, shows that $\sum (1/c)(c\,a_k) = \sum a_k$ converges. [step 2.2, algebra]

4.1 The two implications are claim 3, and its contrapositive form is the statement about divergence. [step 3.1, step 3.2] ∎

## Remarks

- **There is no product rule here, and there is no rule for $\sum a_k b_k$.** The proof works because a finite sum is additive and homogeneous, and neither property has an analogue for products. Multiplying series is a genuinely harder question, requiring absolute convergence, and it is not treated on this page.

- **Claim 3 needs $c \ne 0$ and nothing else.** In particular it does not need either series to converge, which is what makes it usable in the divergence direction: scaling a divergent series by a nonzero constant leaves it divergent.
````

### `thm-direct-comparison-test`

````markdown
---
id: thm-direct-comparison-test
kind: theorem
title: "If $0 \\le a_k \\le b_k$ eventually, convergence of $\\sum b_k$ gives convergence of $\\sum a_k$, and divergence of $\\sum a_k$ gives divergence of $\\sum b_k$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-nonnegative-series-bounded-partial-sums, lem-series-tail-invariance, def-series, lem-finite-sum-laws, def-bounded-set, def-finite-sum]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
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
    - title: "Direct comparison test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Direct_comparison_test"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.25)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ and $(b_k)$ be sequences of reals and suppose there is
$K \in \mathbb{N}$ with

$$0 \;\le\; a_k \;\le\; b_k \qquad \text{for all } k \ge K .$$

Then:

1. if $\sum b_k$ converges then $\sum a_k$ converges ([[def-series]]);
2. if $\sum a_k$ diverges then $\sum b_k$ diverges.

The same statement holds verbatim for series with a general starting index $m$,
applied to the shifted sequences of [[def-series]].

The hypothesis is on the terms from some index on, not on all of them: finitely
many terms of either sequence may violate it, or be negative, without affecting
the conclusion. What may not be dropped is nonnegativity of $(a_k)$ from that
index on.

## Facts & Assumptions

**Given:** Sequences $(a_k)$, $(b_k)$ of reals and $K \in \mathbb{N}$ with $0 \le a_k \le b_k$ for all $k \ge K$; the partial sums $\alpha_j = \sum_{i<j} a_{K+i}$ and $\beta_j = \sum_{i<j} b_{K+i}$ of the $K$-th tail series ([[def-series]], [[def-finite-sum]]).

[L1] Monotonicity of finite sums: if $x_i \le y_i$ for all $i < j$ then $\sum_{i<j} x_i \le \sum_{i<j} y_i$ ([[lem-finite-sum-laws]]).

[L2] A series converges if and only if its $K$-th tail series converges ([[lem-series-tail-invariance]]).

[L3] For a series of nonnegative terms: it converges if and only if the range of its partial sums is bounded above, and in the convergent case every partial sum is at most the sum ([[thm-nonnegative-series-bounded-partial-sums]], [[def-bounded-set]]).

## Proof

**Proof technique:** direct.

1.1 For every $i \in \mathbb{N}$ the index $K + i$ is at least $K$, so $0 \le a_{K+i} \le b_{K+i}$; in particular both tail series have nonnegative terms. [given]

1.2 Assume $\sum b_k$ converges. Then its $K$-th tail series $\sum_{k \ge K} b_k$ converges. [given, L2]

2.1 By monotonicity of finite sums, $\alpha_j \le \beta_j$ for every $j \in \mathbb{N}$. [step 1.1, L1]

2.2 That tail series has nonnegative terms, so its partial sums satisfy $\beta_j \le B$ for every $j$, where $B$ is its sum. [step 1.2, step 1.1, L3]

3.1 Hence $\alpha_j \le \beta_j \le B$ for every $j$, so the range of $(\alpha_j)$ is bounded above by $B$. [step 2.1, step 2.2]

4.1 The tail series $\sum_{k \ge K} a_k$ has nonnegative terms and partial sums bounded above, so it converges. [step 3.1, step 1.1, L3]

5.1 Therefore $\sum a_k$ converges, which is claim 1. [step 4.1, L2]

6.1 Claim 2 is the contrapositive of claim 1: if $\sum a_k$ diverges then $\sum b_k$ cannot converge. [step 5.1] ∎

## Remarks

- **Both nonnegativity hypotheses are used, and in different places.** $a_k \ge 0$ is what lets convergence of $\sum_{k \ge K} a_k$ be read off from boundedness of its partial sums, and $b_k \ge a_k \ge 0$ is what makes the sum of $\sum_{k \ge K} b_k$ an upper bound for the partial sums $\beta_j$. Drop the sign hypothesis and the theorem is false, not merely unproved; the companion page exhibits a pair with $a_k \le b_k$ for every $k$, $\sum b_k$ convergent and $\sum a_k$ divergent.

- **The comparison is with a series, not with a limit.** No quotient $a_k/b_k$ appears and no $b_k$ is required to be nonzero, which is what distinguishes this test from the limit comparison test proved next.
````

### `thm-geometric-series`

````markdown
---
id: thm-geometric-series
kind: theorem
title: "For $|r| < 1$, $\\sum_{k \\ge 0} r^k = 1/(1-r)$, and for $|r| \\ge 1$ the series diverges"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-series, lem-power-difference-factorisation, lem-geometric-sequence-null, lem-nth-term-test, def-integer-power, thm-algebra-of-limits, def-finite-sum, lem-of-abs-value, lem-power-monotone, thm-induction-principle, def-real-limit]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
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
    - title: "Geometric series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Geometric_series"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $r \in \mathbb{R}$ and let $r^k$ be the integer power ([[def-integer-power]]),
so that $r^0 = 1$ for every $r$, including $r = 0$.

1. If $|r| < 1$ then the series $\sum r^k$ converges ([[def-series]]) and
   $$\sum_{k=0}^{\infty} r^{k} \;=\; \frac{1}{1-r} .$$
2. If $|r| \ge 1$ then $\sum r^k$ diverges.

The series starts at $k = 0$ and its first term is $r^0 = 1$; in particular
$\sum_{k=0}^{\infty} 2^{-k} = 2$, while the series starting at $k = 1$ sums to
$1$. Which starting index is meant has to be said, and it is said here.

## Facts & Assumptions

**Given:** A real number $r$, the integer powers $r^k$ ([[def-integer-power]]), and the partial sums $s_n = \sum_{k<n} r^k$ of $\sum r^k$ ([[def-series]], [[def-finite-sum]]).

[L1] Factorisation of a difference of powers: for $a, b \in \mathbb{R}$ and natural $n \ge 1$, $b^n - a^n = (b-a)\sum_{k=0}^{n-1} a^k b^{\,n-1-k}$ ([[lem-power-difference-factorisation]]).

[L2] For $|r| < 1$ the sequence $(r^k)$ is null, that is $r^k \to 0$ ([[lem-geometric-sequence-null]]).

[L3] Algebra of limits: sums, differences and quotients of convergent sequences converge to the corresponding combination, the quotient rule requiring a nonzero limit and nonzero denominators ([[thm-algebra-of-limits]], [[def-real-limit]]).

[L4] Absolute value: $|xy| = |x|\,|y|$, $|x| \ge 0$, and $|x| = 0$ exactly when $x = 0$; also $|1| = 1$, since $1 > 0$ ([[lem-of-abs-value]]).

[L5] Powers and order: $a^0 = 1$ for every $a$; if $a \ge 1$ and $n \ge 1$ then $a^n \ge a \ge 1$; and $1^n = 1$ for every $n$ ([[lem-power-monotone]], [[def-integer-power]]).

[L6] The principle of induction ([[thm-induction-principle]]).

[L7] If a series converges then its terms tend to $0$ ([[lem-nth-term-test]]).

[L8] Notation of [[def-finite-sum]]: $\sum_{k=0}^{n-1} x_k$ is $\sum_{k<n} x_k$, and the empty sum $\sum_{k<0} x_k$ is $0$.

## Proof

**Proof technique:** cases.

1.1 Assume $|r| < 1$. [assume-case lt]

1.2 Assume instead $|r| \ge 1$. [assume-case ge]

1.3 For every natural $n \ge 1$, applying [L1] with $b = 1$ and $a = r$ gives $1 - r^n = (1-r)\sum_{k=0}^{n-1} r^k \cdot 1^{\,n-1-k} = (1-r)\,s_n$, using $1^m = 1$ and the notation of [L8]. [L1, L5, L8]

1.4 At $n = 0$ the identity $1 - r^n = (1-r)s_n$ also holds, both sides being $0$ because $r^0 = 1$ and $s_0$ is the empty sum. [L5, L8]

2.1 In the case $|r| < 1$ we have $r \ne 1$, since $|1| = 1$ and $|r| < 1$; hence $1 - r \ne 0$. [step 1.1, L4, algebra]

2.2 In the case $|r| \ge 1$, an induction gives $|r^k| = |r|^k$ for every $k \in \mathbb{N}$: at $k = 0$ both sides are $1$, and if $|r^k| = |r|^k$ then $|r^{k+1}| = |r^k \cdot r| = |r^k|\,|r| = |r|^k |r| = |r|^{k+1}$. [step 1.2, L4, L5, L6]

2.3 In the case $|r| \ge 1$ we get $|r|^k \ge 1$ for every $k \in \mathbb{N}$: at $k = 0$ this reads $1 \ge 1$, and for $k \ge 1$ it is the comparison $|r|^k \ge |r| \ge 1$. [step 1.2, L5]

3.1 In the case $|r| < 1$, dividing by $1 - r \ne 0$ gives $s_n = (1 - r^n)/(1-r)$ for every $n \in \mathbb{N}$. [step 2.1, step 1.3, step 1.4, algebra]

3.2 In the case $|r| \ge 1$, combining the two previous steps gives $|r^k - 0| = |r^k| = |r|^k \ge 1$ for every $k \in \mathbb{N}$. [step 2.2, step 2.3]

4.1 In the case $|r| < 1$ the sequence $(r^n)$ is null, so $1 - r^n \to 1$ and therefore $s_n \to 1/(1-r)$, the denominator being the nonzero constant $1-r$; hence $\sum r^k$ converges with sum $1/(1-r)$, which is claim 1. [step 1.1, step 3.1, step 2.1, L2, L3]

4.2 In the case $|r| \ge 1$ the sequence $(r^k)$ does not converge to $0$, since the rational tolerance $\varepsilon = 1$ admits no index $K$ with $|r^k - 0| < 1$ for all $k \ge K$; so by the term test $\sum r^k$ diverges, which is claim 2. [step 3.2, L7]

5.1 The two cases $|r| < 1$ and $|r| \ge 1$ exhaust the possibilities, since the order on $\mathbb{R}$ is total, so claims 1 and 2 together cover every real $r$. [step 4.1, step 4.2, cases-exhaustive] ∎

## Remarks

- **The divergence half needs no separate treatment of $r = 1$ and $r = -1$.** Both are covered by $|r| \ge 1$, and the single reason is the same in every case: the terms have absolute value at least $1$, so they cannot tend to $0$. For $r = 1$ the partial sums are $s_n = n$ and run to $+\infty$; for $r = -1$ they oscillate between $0$ and $1$. The theorem says only that neither converges, which is all that "diverges" means here ([[def-series]]).

- **Why the identity is proved at $n = 0$ separately.** [[lem-power-difference-factorisation]] requires $n \ge 1$, since its right-hand side is a sum over $k < n$ of a term involving $b^{\,n-1-k}$, and $n-1$ is not a natural number at $n = 0$. The identity is still true at $n = 0$, but by inspection of two empty objects rather than by that lemma, and step 1.4 says so rather than letting the reader assume the citation covers it.
````

