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

- critical risk (9): 8 declared dependencies; 8 cited facts; boundary-sensitive language; analytic limiting/completeness language

## Target item — `thm-weierstrass-m-test-for-function-series`

Normalized current SHA-256: `7922e6ed1da76397dc8f24bc22a785d00dbddc33e19314a53d98cecb4cf41e37`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: thm-weierstrass-m-test-for-function-series
kind: theorem
title: "The Weierstrass M-test gives absolute pointwise convergence and uniform convergence of a function series"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-uniform-cauchy-criterion-function-series, thm-series-cauchy-criterion, thm-direct-comparison-test, def-series-of-real-functions, def-finite-sum, lem-finite-sum-laws, lem-of-abs-value, lem-of-triangle-inequality]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-07-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B, Real Analysis, Lectures 20–21"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "University of Alberta Math 317, Infinite Series of Functions"
      url: "https://www.math.ualberta.ca/~xinweiyu/317.Q1.14w/LecNote317-02%20Infinite%20Series%20of%20Functions.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a set and let $f_k:X\to\mathbb{R}$. Suppose there is a sequence of
nonnegative reals $(M_k)$ such that

$$|f_k(x)|\le M_k\qquad(k\in\mathbb{N},\ x\in X)$$

and the scalar series $\sum M_k$ converges. Then $\sum f_k(x)$ converges
absolutely for every $x\in X$, and the function series $\sum f_k$ converges
uniformly on $X$.

## Facts & Assumptions

**Given:** Functions $f_k:X\to\mathbb{R}$ and nonnegative reals $M_k$ with $|f_k(x)|\le M_k$ for all $k,x$, such that $\sum M_k$ converges.

[L1] If $0\le a_k\le b_k$ eventually and $\sum b_k$ converges, then $\sum a_k$ converges ([[thm-direct-comparison-test]]).

[L2] A convergent real series has uniformly small scalar tails: for every real $\varepsilon>0$ there is $N$ such that $\left|\sum_{k=m+1}^{n}a_k\right|<\varepsilon$ whenever $n>m\ge N$ ([[thm-series-cauchy-criterion]]).

[L3] Repeated triangle inequalities for finite sums give $\left|\sum_{k=p}^{q}u_k\right|\le\sum_{k=p}^{q}|u_k|$, and finite sums preserve termwise inequalities ([[lem-of-triangle-inequality]], [[lem-of-abs-value]], [[def-finite-sum]], [[lem-finite-sum-laws]]).

[L4] A function series converges uniformly exactly when its tails are uniformly small ([[cor-uniform-cauchy-criterion-function-series]], [[def-series-of-real-functions]]).

## Proof

**Proof technique:** direct.

1.1 Fix $x\in X$. Since $0\le |f_k(x)|\le M_k$ for every $k$, [L1] shows that $\sum |f_k(x)|$ converges. [given, L1]

1.2 Let $\varepsilon>0$. By [L2] choose $N$ such that $\sum_{k=m+1}^{n}M_k<\varepsilon$ whenever $n>m\ge N$, the absolute value being unnecessary because the terms are nonnegative. [L2, choose]

2.1 For $n>m\ge N$ and $x\in X$, one has $\left|\sum_{k=m+1}^{n}f_k(x)\right|\le\sum_{k=m+1}^{n}|f_k(x)|\le\sum_{k=m+1}^{n}M_k<\varepsilon$. [step 1.2, L3]

3.1 Step 1.1 gives absolute pointwise convergence, while step 2.1 and [L4] give uniform convergence of $\sum f_k$. [step 1.1, step 2.1, L4] ∎
````

## Wave 12 provenance row

```json
{
  "id": "thm-weierstrass-m-test-for-function-series",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://www.math.ualberta.ca/~xinweiyu/317.Q1.14w/LecNote317-02%20Infinite%20Series%20of%20Functions.pdf"
  ],
  "rationale": "The Weierstrass M-test gives absolute pointwise convergence and uniform convergence of a function series: The university notes give the same classical function-series test; the item adapts notation to zero-based partial sums and states all domain, monotonicity, boundedness, and uniform-tail hypotheses explicitly. The supplied numbered argument was audited as a local proof rather than a transcription or identifiable adaptation of a source proof.",
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
      "source": "thm-direct-comparison-test",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ and $(b_k)$ be sequences of reals and suppose there is $K \\in \\mathbb{N}$ with $$0 \\;\\le\\; a_k \\;\\le\\; b_k \\qquad \\text{for all } k \\ge K .$$ Then: 1. if $\\sum b_k$ converges then $\\sum a_k$ converges ([[def-series]]); 2. if $\\sum a_k$ diverges then $\\sum b_k$ diverges. The same statement holds verbatim for series with a general starting index $m$, applied to the shifted sequences of [[def-series]]. The hypothesis is on the terms from some index on, not on all of them: finitely many terms of either sequence may violate it, or be negative, without affecting the conclusion. What may not be dropped is nonnegativity of $(a_k)$ from that index on.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-series-cauchy-criterion",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ be a sequence of reals, with partial sums $s_n = \\sum_{k<n} a_k$ ([[def-series]]). Then $\\sum a_k$ converges **if and only if** $$\\text{for every real } \\varepsilon > 0 \\text{ there is } N \\in \\mathbb{N} \\text{ such that } \\Big| \\sum_{k=m+1}^{n} a_k \\Big| < \\varepsilon \\text{ for all } n > m \\ge N .$$ The block $\\sum_{k=m+1}^{n} a_k$ is the finite sum $a_{m+1} + \\dots + a_n$ of [[def-finite-sum]], and it equals $s_{n+1} - s_{m+1}$. This is the Cauchy criterion transported from sequences to series. Its value is that it decides convergence without producing, or even naming, the sum.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-of-triangle-inequality",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$. Then $$|x + y| \\le |x| + |y|.$$",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with $|x|$ the absolute value ([[def-abs-value]]). Then $$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$ and, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-finite-sum",
      "source_section": "Definition",
      "quote": "Throughout this page $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]]), in particular an ordered field ([[def-ordered-field]]) and a field ([[def-field]]), and $\\mathbb{N}$ is the set of natural numbers ([[def-natural-numbers]]) with successor $\\sigma(n) = n + 1$ ([[def-nat-addition]]). Let $a : \\mathbb{N} \\to \\mathbb{R}$ be a sequence of reals, written $a_k$ for $a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the upper index**, which is legitimate because of the recursion theorem ([[thm-recursion]]). That theorem produces a function of one variable, so the running index has to be carried along inside the value: applying it to the set $A = \\mathbb{N} \\times \\mathbb{R}$, the starting element $(0, 0)$ and the function $f(n, s) = (\\sigma(n),\\, s + a_n)$ gives a unique $g : \\mathbb{N} \\to \\mathbb{N} \\times \\mathbb{R}$ with $$g(0) = (0, 0), \\qquad g(\\sigma(n)) = f(g(n)) \\quad (n \\in \\mathbb{N}).$$ Write $g(n) = \\big(\\pi_1(g(n)),\\, \\Sigma_n\\big)$ for its two coordinates. **The first coordinate is the index itself, and that is a small induction, not an observation** ([[thm-induction-principle]]). Indeed $\\pi_1(g(0)) = 0$; and if $\\pi_1(g(n)) = n$, then $g(\\sigma(n)) = f\\big(\\pi_1(g(n)), \\Sigma_n\\big) = \\big(\\sigma(\\pi_1(g(n))),\\, \\Sigma_n + a_{\\pi_1(g(n))}\\big) = \\big(\\sigma(n),\\, \\Sigma_n + a_n\\big)$, so $\\pi_1(g(\\sigma(n))) = \\sigma(n)$. By induction $\\pi_1(g(n)) = n$ for every $n \\in \\mathbb{N}$. Only now may the second coordinate of the two displayed clauses be read off, and doing so gives $$\\Sigma_0 = 0, \\qquad \\Sigma_{\\sigma(n)} = \\Sigma_n + a_n .$$ $\\Sigma$ is moreover the **unique** function $\\mathbb{N} \\to \\mathbb{R}$ with those two properties: if $\\Sigma'$ also has them then $n \\mapsto (n, \\Sigma'_n)$ satisfies the two clauses defining $g$, hence equals $g$ by the uniqueness clause of [[thm-recursion]], so $\\Sigma' = \\Sigma$. We write $\\sum_{k < n} a_k := \\Sigma_n$. The same construction with starting element $(0, 1)$ and $f(n, p) = (\\sigma(n),\\, p \\cdot a_n)$, with the same induction on the first coordinate and the same uniqueness argument, gives the unique $\\Pi : \\mathbb{N} \\to \\mathbb{R}$ with $$\\Pi_0 = 1, \\qquad \\Pi_{\\sigma(n)} = \\Pi_n \\cdot a_n ,$$ and we write $\\prod_{k < n} a_k := \\Pi_n$. **Notation.** For $m, n \\in \\mathbb{N}$ we abbreviate $$\\sum_{k=0}^{n} a_k := \\sum_{k < n+1} a_k, \\qquad \\prod_{k=0}^{n} a_k := \\prod_{k < n+1} a_k,$$ and, for a general lower index $m$ with $m \\le n + 1$, writing $d = n + 1 - m$ for the number of terms, $$\\sum_{k=m}^{n} a_k := \\sum_{j < d} a_{m+j}, \\qquad \\prod_{k=m}^{n} a_k := \\prod_{j < d} a_{m+j} .$$ When $m = n + 1$ we have $d = 0$ and the sum is **empty**, with value $0$, while the empty product has value $1$. In the same spirit $\\sum_{k=0}^{-1} a_k$ is notation for the empty sum $\\Sigma_0 = 0$ and $\\prod_{k=0}^{-1} a_k$ for the empty product $\\Pi_0 = 1$; the index $-1$ never occurs as an element of $\\mathbb{N}$ and is only a way of writing \"no terms\". Only finitely many values of $a$ enter $\\sum_{k<n} a_k$, so the notation $\\sum_{k<n} a_k$ and $\\prod_{k<n} a_k$ is also used for a list $a_0, \\dots, a_{n-1}$ of reals given without reference to any extension of the list to all of $\\mathbb{N}$: extend the list by $a_k = 0$ (respectively $a_k = 1$) for $k \\ge n$ and apply the definition above.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-finite-sum-laws",
      "source_section": "Statement",
      "quote": "Let $a, b, c : \\mathbb{N} \\to \\mathbb{R}$ be sequences of reals, let $\\lambda \\in \\mathbb{R}$, and let $m, n \\in \\mathbb{N}$, with finite sums and finite products as in [[def-finite-sum]]. Then: 1. **Additivity.** $\\displaystyle\\sum_{k<n}(a_k + b_k) = \\sum_{k<n} a_k + \\sum_{k<n} b_k$. 2. **Scaling.** $\\displaystyle\\sum_{k<n} \\lambda a_k = \\lambda \\sum_{k<n} a_k$; in particular $\\displaystyle\\sum_{k<n} \\lambda = n\\lambda$, where $n$ denotes the canonical natural $\\iota(n) \\in \\mathbb{R}$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]). 3. **Splitting.** If $m \\le n$ then $\\displaystyle\\sum_{k<n} a_k = \\sum_{k<m} a_k + \\sum_{k=m}^{n-1} a_k$, and $\\displaystyle\\prod_{k<n} a_k = \\Big(\\prod_{k<m} a_k\\Big)\\Big(\\prod_{k=m}^{n-1} a_k\\Big)$. 4. **Monotonicity.** If $a_k \\le b_k$ for all $k < n$ then $\\displaystyle\\sum_{k<n} a_k \\le \\sum_{k<n} b_k$. In particular, if $a_k \\ge 0$ for all $k < n$ then $\\sum_{k<n} a_k \\ge 0$, every single term satisfies $a_j \\le \\sum_{k<n} a_k$ for $j < n$, and $\\sum_{k<n} a_k = 0$ forces $a_k = 0$ for every $k < n$. 5. **Telescoping.** $\\displaystyle\\sum_{k<n}\\big(c_{k+1} - c_k\\big) = c_n - c_0$. 6. **Products.** $\\displaystyle\\prod_{k<n}(a_k b_k) = \\Big(\\prod_{k<n} a_k\\Big)\\Big(\\prod_{k<n} b_k\\Big)$; if $a_k \\ge 0$ for all $k < n$ then $\\prod_{k<n} a_k \\ge 0$, and if $a_k > 0$ for all $k < n$ then $\\prod_{k<n} a_k > 0$.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L4",
      "source": "cor-uniform-cauchy-criterion-function-series",
      "source_section": "Statement",
      "quote": "Let $X$ be a set and let $f_k:X\\to\\mathbb{R}$. The function series $\\sum f_k$ converges uniformly on $X$ if and only if, for every real $\\varepsilon>0$, there is $N\\in\\mathbb{N}$ such that $$\\left|\\sum_{k=m+1}^{n}f_k(x)\\right|<\\varepsilon$$ for every $n>m\\ge N$ and every $x\\in X$.",
      "quote_selection": "full-source-section",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-series-of-real-functions",
      "source_section": "Definition",
      "quote": "Let $X$ be a set and let $f_k:X\\to\\mathbb{R}$ for $k\\in\\mathbb{N}$. The **series of real-valued functions** $\\sum f_k$ is studied through its partial-sum functions $$S_n(x):=\\sum_{k<n}f_k(x)\\qquad(n\\in\\mathbb{N},\\ x\\in X),$$ where the sum on the right is the finite sum of [[def-series]]. Thus $S_0$ is the zero function and $S_{n+1}=S_n+f_n$ under the pointwise operations of [[def-function-space]]. The series $\\sum f_k$ **converges pointwise** to $S:X\\to\\mathbb{R}$ when $S_n\\to S$ pointwise, and it **converges uniformly** to $S$ when $S_n\\to S$ uniformly ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]). The series is **absolutely convergent at $x\\in X$** when the scalar series $\\sum |f_k(x)|$ converges. It is **absolutely pointwise convergent** when this holds for every $x\\in X$.",
      "quote_selection": "full-source-section",
      "uses": [
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Fix $x\\in X$. Since $0\\le |f_k(x)|\\le M_k$ for every $k$, [L1] shows that $\\sum |f_k(x)|$ converges.",
      "step": "1.1",
      "inputs": [
        "given",
        "L1"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "Let $\\varepsilon>0$. By [L2] choose $N$ such that $\\sum_{k=m+1}^{n}M_k<\\varepsilon$ whenever $n>m\\ge N$, the absolute value being unnecessary because the terms are nonnegative.",
      "step": "1.2",
      "inputs": [
        "L2",
        "choose"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "For $n>m\\ge N$ and $x\\in X$, one has $\\left|\\sum_{k=m+1}^{n}f_k(x)\\right|\\le\\sum_{k=m+1}^{n}|f_k(x)|\\le\\sum_{k=m+1}^{n}M_k<\\varepsilon$.",
      "step": "2.1",
      "inputs": [
        "step 1.2",
        "L3"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "Step 1.1 gives absolute pointwise convergence, while step 2.1 and [L4] give uniform convergence of $\\sum f_k$.",
      "step": "3.1",
      "inputs": [
        "step 1.1",
        "step 2.1",
        "L4"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "Statement: The quantified set X may be empty; all pointwise assertions are vacuous there, and in the Cauchy criterion the constructed limit is the unique empty function. Let $X$ be a set and let $f_k:X\\to\\mathbb{R}$. Suppose there is a sequence of nonnegative reals $(M_k)$ such that $$|f_k(x)|\\le M_k\\qquad(k\\in\\mathbb{N},\\ x\\in X)$$ and the scalar "
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "thm-weierstrass-m-test-for-function-series: zero is not a distinguished parameter case in the claim; ordinary zero-valued functions, vectors, or bounds remain covered by its universal hypotheses."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "thm-weierstrass-m-test-for-function-series: there is no cardinal, dimension, or exponent parameter with a separate value-one branch in this claim."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "thm-weierstrass-m-test-for-function-series: the Statement has no collapse, coincidence, constant-family, or equality-case branch beyond cases already included by its universal estimates."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "thm-weierstrass-m-test-for-function-series: no closed-interval endpoint, exponent endpoint, or finite-index endpoint affects the assertion."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "thm-weierstrass-m-test-for-function-series: the proof makes no choice from a family whose nonemptiness is not already supplied; any witness used is explicit or uniquely determined."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "thm-weierstrass-m-test-for-function-series: the asserted result has no biconditional requiring a forward implication; any “if and only if” appearing inside a cited definition is not a new proof obligation here."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "thm-weierstrass-m-test-for-function-series: the asserted result has no biconditional requiring a reverse implication; any equivalence used as a dependency is consumed only in the direction named by the numbered proof."
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
    "source": "thm-weierstrass-m-test-for-function-series",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "cor-uniform-cauchy-criterion-function-series",
    "declared_target": "cor-uniform-cauchy-criterion-function-series",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-convergence-of-functions",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-weierstrass-m-test-for-function-series",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "thm-series-cauchy-criterion",
    "declared_target": "thm-series-cauchy-criterion",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-weierstrass-m-test-for-function-series",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
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
    "source": "thm-weierstrass-m-test-for-function-series",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "def-series-of-real-functions",
    "declared_target": "def-series-of-real-functions",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-convergence-of-functions",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-weierstrass-m-test-for-function-series",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
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
    "source": "thm-weierstrass-m-test-for-function-series",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "lem-finite-sum-laws",
    "declared_target": "lem-finite-sum-laws",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-weierstrass-m-test-for-function-series",
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
    "source": "thm-weierstrass-m-test-for-function-series",
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

## Full exact-current text of every cited or declared item (8)

### `cor-uniform-cauchy-criterion-function-series`

````markdown
---
id: cor-uniform-cauchy-criterion-function-series
kind: corollary
title: "A series of real-valued functions converges uniformly if and only if its tails are uniformly small"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-series-of-real-functions, thm-uniform-cauchy-criterion-real-functions, lem-of-abs-value]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Mathematics LibreTexts, Sequences and Series of Functions"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/04%253A_Function_Limits_and_Continuity/4.12%253A_Sequences_and_Series_of_Functions"
    - title: "W. Trench, Introduction to Real Analysis"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a set and let $f_k:X\to\mathbb{R}$. The function series
$\sum f_k$ converges uniformly on $X$ if and only if, for every real
$\varepsilon>0$, there is $N\in\mathbb{N}$ such that

$$\left|\sum_{k=m+1}^{n}f_k(x)\right|<\varepsilon$$

for every $n>m\ge N$ and every $x\in X$.

## Facts & Assumptions

**Given:** A set $X$, functions $f_k:X\to\mathbb{R}$, and partial-sum functions $S_r(x)=\sum_{k<r}f_k(x)$.

[L1] The series $\sum f_k$ converges uniformly exactly when its partial-sum sequence $(S_r)$ converges uniformly ([[def-series-of-real-functions]]).

[L2] A sequence of real-valued functions converges uniformly exactly when it is uniformly Cauchy ([[thm-uniform-cauchy-criterion-real-functions]]).

[L3] For $n>m$, $\sum_{k=m+1}^{n}f_k(x)=S_{n+1}(x)-S_{m+1}(x)$, and $|-u|=|u|$ for every real $u$ ([[def-series-of-real-functions]], [[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 Suppose first that $\sum f_k$ converges uniformly, and let $\varepsilon>0$ be real. [L1]

1.2 Conversely, suppose the displayed tail condition holds, and fix a real $\varepsilon>0$ and a corresponding index $N$. [given]

2.1 By [L1] and [L2], choose $K$ such that $|S_p(x)-S_q(x)|<\varepsilon$ for every $p,q\ge K$ and every $x\in X$. [step 1.1, L1, L2, choose]

2.2 Put $K:=N+1$. If $p,q\ge K$ and $x\in X$, then the difference is $0$ when $p=q$; if $p>q$, set $m=q-1\ge N$ and $n=p-1>m$, so the tail condition and [L3] give $|S_p(x)-S_q(x)|<\varepsilon$; the case $q>p$ follows by symmetry of absolute value. [step 1.2, L3, algebra]

3.1 For $n>m\ge K$ and $x\in X$, the indices $n+1,m+1$ are at least $K$, so [L3] and step 2.1 give $\left|\sum_{k=m+1}^{n}f_k(x)\right|<\varepsilon$. [step 2.1, L3]

3.2 Thus $(S_r)$ is uniformly Cauchy, hence converges uniformly by [L2], and therefore $\sum f_k$ converges uniformly by [L1]. [step 2.2, L1, L2]

4.1 Steps 3.1 and 3.2 prove the two implications, hence the equivalence. [step 3.1, step 3.2] ∎
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

### `def-series-of-real-functions`

````markdown
---
id: def-series-of-real-functions
kind: definition
title: "A series of real-valued functions and its pointwise and uniform convergence through its partial sums"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function-space, def-series, def-pointwise-uniform-and-uniformly-cauchy-convergence]
justified_by: []
aliases: []
landmark: false
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

Let $X$ be a set and let $f_k:X\to\mathbb{R}$ for
$k\in\mathbb{N}$. The **series of real-valued functions**
$\sum f_k$ is studied through its partial-sum functions

$$S_n(x):=\sum_{k<n}f_k(x)\qquad(n\in\mathbb{N},\ x\in X),$$

where the sum on the right is the finite sum of [[def-series]]. Thus
$S_0$ is the zero function and $S_{n+1}=S_n+f_n$ under the pointwise
operations of [[def-function-space]].

The series $\sum f_k$ **converges pointwise** to $S:X\to\mathbb{R}$ when
$S_n\to S$ pointwise, and it **converges uniformly** to $S$ when
$S_n\to S$ uniformly
([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

The series is **absolutely convergent at $x\in X$** when the scalar series
$\sum |f_k(x)|$ converges. It is **absolutely pointwise convergent** when this
holds for every $x\in X$.
````

### `lem-finite-sum-laws`

````markdown
---
id: lem-finite-sum-laws
kind: lemma
title: "Laws of finite sums and finite products"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-finite-sum, thm-induction-principle, def-ordered-field, def-field, lem-of-add-order, lem-of-sign-rules, lem-of-zero-mult, cor-of-one-positive, lem-of-q-embeds, lem-of-naturals-positive]
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
    - title: "T. Tao, Analysis I, 3rd ed., §7.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Telescoping series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Telescoping_series"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $a, b, c : \mathbb{N} \to \mathbb{R}$ be sequences of reals, let
$\lambda \in \mathbb{R}$, and let $m, n \in \mathbb{N}$, with finite sums and
finite products as in [[def-finite-sum]]. Then:

1. **Additivity.** $\displaystyle\sum_{k<n}(a_k + b_k) = \sum_{k<n} a_k + \sum_{k<n} b_k$.
2. **Scaling.** $\displaystyle\sum_{k<n} \lambda a_k = \lambda \sum_{k<n} a_k$; in particular $\displaystyle\sum_{k<n} \lambda = n\lambda$, where $n$ denotes the canonical natural $\iota(n) \in \mathbb{R}$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).
3. **Splitting.** If $m \le n$ then $\displaystyle\sum_{k<n} a_k = \sum_{k<m} a_k + \sum_{k=m}^{n-1} a_k$, and $\displaystyle\prod_{k<n} a_k = \Big(\prod_{k<m} a_k\Big)\Big(\prod_{k=m}^{n-1} a_k\Big)$.
4. **Monotonicity.** If $a_k \le b_k$ for all $k < n$ then $\displaystyle\sum_{k<n} a_k \le \sum_{k<n} b_k$. In particular, if $a_k \ge 0$ for all $k < n$ then $\sum_{k<n} a_k \ge 0$, every single term satisfies $a_j \le \sum_{k<n} a_k$ for $j < n$, and $\sum_{k<n} a_k = 0$ forces $a_k = 0$ for every $k < n$.
5. **Telescoping.** $\displaystyle\sum_{k<n}\big(c_{k+1} - c_k\big) = c_n - c_0$.
6. **Products.** $\displaystyle\prod_{k<n}(a_k b_k) = \Big(\prod_{k<n} a_k\Big)\Big(\prod_{k<n} b_k\Big)$; if $a_k \ge 0$ for all $k < n$ then $\prod_{k<n} a_k \ge 0$, and if $a_k > 0$ for all $k < n$ then $\prod_{k<n} a_k > 0$.

## Facts & Assumptions

**Given:** Sequences $a, b, c : \mathbb{N} \to \mathbb{R}$, a real $\lambda$, and naturals $m, n$. Write $\Sigma_n = \sum_{k<n} a_k$ and $\Pi_n = \prod_{k<n} a_k$.

[L1] Recursion clauses ([[def-finite-sum]]): $\sum_{k<0} a_k = 0$ and $\sum_{k<n+1} a_k = \sum_{k<n} a_k + a_n$; $\prod_{k<0} a_k = 1$ and $\prod_{k<n+1} a_k = \big(\prod_{k<n} a_k\big) \cdot a_n$; and $\sum_{k=m}^{n-1} a_k = \sum_{j < n-m} a_{m+j}$ for $m \le n$, likewise for products.

[L2] Field axioms: addition and multiplication are associative and commutative, $0$ and $1$ are the identities, $x - x = 0$, and multiplication distributes over addition ([[def-field]], [[def-ordered-field]]); and $0 \cdot x = 0$, which is not an axiom but a lemma ([[lem-of-zero-mult]]).

[L3] Induction principle: a property holding at $0$ and inherited by successors holds at every natural ([[thm-induction-principle]]).

[L4] Adding inequalities: $x \le y$ and $u \le v$ imply $x + u \le y + v$. [[lem-of-add-order]] states the STRICT forms and only those ($x < y \Rightarrow x + c < y + c$, and $x < y$ with $u < v$ giving $x + u < y + v$); the nonstrict form used throughout below is those two together with the cases $x = y$ and $u = v$, which are settled by trichotomy, the order being total and transitive ([[def-ordered-field]]).

[L5] The canonical embedding $\iota : \mathbb{Q} \to \mathbb{R}$ is a field homomorphism, so $\iota(0) = 0$ and $\iota(n+1) = \iota(n) + 1$, and $\iota(n) > 0$ for $n \ge 1$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).

[L6] Sign rules: a product of two positives is positive ([[lem-of-sign-rules]], claim 1), and a product of two nonnegatives is nonnegative, since a factor equal to $0$ makes the product $0$ ([[lem-of-zero-mult]]) and otherwise both factors are positive; and $1 > 0$, which is proved in [[cor-of-one-positive]] and stated by none of the items named above.

## Proof

**Proof technique:** induction.

1.1 Base case $n = 0$: every claim holds at $n = 0$, since both sides of claim 1 are $0 = 0 + 0$, both sides of claim 2 are $0 = \lambda \cdot 0$ and $0 = \iota(0)\lambda$, claim 4 reads $0 \le 0$ with no term to bound and the hypothesis $\sum_{k<0} a_k = 0$ giving nothing to prove, claim 5 reads $0 = c_0 - c_0$, and claim 6 reads $1 = 1 \cdot 1$ with $1 > 0$. [base, L1, L2, L5, L6]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume claims 1, 2, 4, 5 and 6 hold for this $n$ and for all sequences $a, b, c$ and all $\lambda$. [ih]

1.3 Splitting, claim 3, by a separate induction on the number of trailing terms $d = n - m$ with $m$ fixed: for $d = 0$ the claim reads $\sum_{k<m} a_k = \sum_{k<m} a_k + 0$ and $\prod_{k<m} a_k = \big(\prod_{k<m} a_k\big) \cdot 1$, which hold; and if $\sum_{k<m+d} a_k = \sum_{k<m} a_k + \sum_{j<d} a_{m+j}$, then $\sum_{k<m+d+1} a_k = \sum_{k<m+d} a_k + a_{m+d} = \sum_{k<m} a_k + \big(\sum_{j<d} a_{m+j} + a_{m+d}\big) = \sum_{k<m} a_k + \sum_{j<d+1} a_{m+j}$ by associativity, and identically for products with $1$ in place of $0$ and multiplication in place of addition, so induction on $d$ gives claim 3 for every $m \le n$. [L1, L2, L3]

2.1 Additivity at $n+1$: $\sum_{k<n+1}(a_k + b_k) = \sum_{k<n}(a_k + b_k) + (a_n + b_n) = \big(\sum_{k<n} a_k + \sum_{k<n} b_k\big) + (a_n + b_n) = \big(\sum_{k<n} a_k + a_n\big) + \big(\sum_{k<n} b_k + b_n\big) = \sum_{k<n+1} a_k + \sum_{k<n+1} b_k$, using the recursion clause, the hypothesis, and commutativity with associativity of addition. [step 1.2, L1, L2]

2.2 Scaling at $n+1$: $\sum_{k<n+1} \lambda a_k = \sum_{k<n} \lambda a_k + \lambda a_n = \lambda \sum_{k<n} a_k + \lambda a_n = \lambda\big(\sum_{k<n} a_k + a_n\big) = \lambda \sum_{k<n+1} a_k$ by the recursion clause, the hypothesis and distributivity; taking $a_k = 1$ for all $k$ gives $\sum_{k<n+1} \lambda = \sum_{k<n} \lambda + \lambda = \iota(n)\lambda + \lambda = (\iota(n) + 1)\lambda = \iota(n+1)\lambda$. [step 1.2, L1, L2, L5]

2.3 Monotonicity at $n+1$: assume $a_k \le b_k$ for all $k < n+1$; then $a_k \le b_k$ for all $k < n$, so the hypothesis gives $\sum_{k<n} a_k \le \sum_{k<n} b_k$, and adding the inequality $a_n \le b_n$ gives $\sum_{k<n+1} a_k = \sum_{k<n} a_k + a_n \le \sum_{k<n} b_k + b_n = \sum_{k<n+1} b_k$. [step 1.2, L1, L4]

2.4 Telescoping at $n+1$: $\sum_{k<n+1}(c_{k+1} - c_k) = \sum_{k<n}(c_{k+1} - c_k) + (c_{n+1} - c_n) = (c_n - c_0) + (c_{n+1} - c_n) = c_{n+1} - c_0$, by the recursion clause, the hypothesis and the field identities. [step 1.2, L1, L2]

2.5 Products at $n+1$: $\prod_{k<n+1}(a_k b_k) = \big(\prod_{k<n}(a_k b_k)\big)(a_n b_n) = \big(\prod_{k<n} a_k\big)\big(\prod_{k<n} b_k\big)(a_n b_n) = \big(\prod_{k<n+1} a_k\big)\big(\prod_{k<n+1} b_k\big)$ by the recursion clause, the hypothesis, and commutativity with associativity of multiplication; and if every $a_k \ge 0$ for $k < n+1$ then $\prod_{k<n+1} a_k = \big(\prod_{k<n} a_k\big) a_n$ is a product of two nonnegatives, hence nonnegative, with the same argument giving positivity from positivity since $\prod_{k<0} a_k = 1 > 0$. [step 1.2, L1, L2, L6]

3.1 Consequences of monotonicity, completing claim 4: monotonicity itself holds at every $n$, by the induction principle applied to the base case of step 1.1 and the successor step 2.3, so it is available for an arbitrary $n$ in what follows; if $a_k \ge 0$ for all $k < n$ then comparing with the zero sequence gives $\sum_{k<n} a_k \ge \sum_{k<n} 0 = 0$; for $j < n$ splitting at $j$ and then at $j+1$ writes $\sum_{k<n} a_k = \sum_{k<j} a_k + a_j + \sum_{k=j+1}^{n-1} a_k$ with the first and third summands $\ge 0$, so $a_j \le \sum_{k<n} a_k$; and if moreover $\sum_{k<n} a_k = 0$ then $0 \le a_j \le 0$ for every $j < n$, so $a_j = 0$. [step 1.1, step 2.3, step 1.3, L3, L4, L2]

4.1 By the induction principle claims 1, 2, 4, 5 and 6 hold for every $n \in \mathbb{N}$, and claim 3 was proved in step 1.3 with its consequences in step 3.1, so all six laws hold. [step 1.1, step 2.1, step 2.2, step 2.3, step 2.4, step 2.5, step 1.3, step 3.1, L3, discharge-induction] ∎
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

### `thm-series-cauchy-criterion`

````markdown
---
id: thm-series-cauchy-criterion
kind: theorem
title: "A series converges iff for every $\\varepsilon > 0$ there is $N$ with $|a_{m+1} + \\dots + a_n| < \\varepsilon$ for all $n > m \\ge N$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-series, thm-cauchy-criterion-via-lub, lem-convergent-implies-cauchy, def-real-limit, def-finite-sum, lem-finite-sum-laws, cor-archimedean-reciprocal]
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
    - title: "Cauchy's convergence test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy%27s_convergence_test"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals, with partial sums $s_n = \sum_{k<n} a_k$
([[def-series]]). Then $\sum a_k$ converges **if and only if**

$$\text{for every real } \varepsilon > 0 \text{ there is } N \in \mathbb{N} \text{ such that } \Big| \sum_{k=m+1}^{n} a_k \Big| < \varepsilon \text{ for all } n > m \ge N .$$

The block $\sum_{k=m+1}^{n} a_k$ is the finite sum $a_{m+1} + \dots + a_n$ of
[[def-finite-sum]], and it equals $s_{n+1} - s_{m+1}$.

This is the Cauchy criterion transported from sequences to series. Its value is
that it decides convergence without producing, or even naming, the sum.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals with partial sums $s_n = \sum_{k<n} a_k$ ([[def-series]], [[def-finite-sum]]).

[L1] Splitting of finite sums: if $m' \le n'$ then $\sum_{k<n'} a_k = \sum_{k<m'} a_k + \sum_{k=m'}^{n'-1} a_k$ ([[lem-finite-sum-laws]], [[def-finite-sum]]).

[L2] Every convergent sequence of reals is Cauchy ([[lem-convergent-implies-cauchy]]).

[L3] Every Cauchy sequence of reals converges ([[thm-cauchy-criterion-via-lub]]).

[L4] Cauchyness reads: for every rational $\varepsilon > 0$ there is $K$ with $|s_p - s_q| < \varepsilon$ for all $p, q \ge K$ ([[def-real-limit]]). Rational and real tolerances give the same condition, because every real $\varepsilon > 0$ exceeds some rational $1/n$ with $n \ge 1$ natural ([[cor-archimedean-reciprocal]]), and conversely every positive rational is a positive real.

## Proof

**Proof technique:** direct.

1.1 For all naturals $m < n$, splitting $s_{n+1}$ at the index $m+1 \le n+1$ gives $s_{n+1} = s_{m+1} + \sum_{k=m+1}^{n} a_k$, hence $\sum_{k=m+1}^{n} a_k = s_{n+1} - s_{m+1}$. [L1, algebra]

1.2 Conversely, every pair $p > q \ge 1$ of naturals is of the form $p = n+1$, $q = m+1$ with $n = p - 1 > m = q - 1 \ge 0$. [given, algebra]

1.3 Suppose $\sum a_k$ converges, that is $(s_n)$ converges; then $(s_n)$ is Cauchy. [given, L2]

1.4 Suppose conversely that the stated condition holds, and let a rational $\varepsilon > 0$ be given; take $N$ for $\varepsilon$ as in the condition and put $K := N + 1$. [given, choose]

2.1 Let a real $\varepsilon > 0$ be given, choose a rational $\varepsilon' $ with $0 < \varepsilon' < \varepsilon$, and take $K$ for $\varepsilon'$ as in the Cauchy condition; put $N := K$. [step 1.3, L4, choose]

2.2 Let $p, q \ge K$. If $p = q$ then $|s_p - s_q| = 0 < \varepsilon$; otherwise one of them exceeds the other, and by symmetry we may take $p > q \ge K \ge 1$. [step 1.4, algebra]

3.1 For all $n > m \ge N$ one has $n + 1 > m + 1 \ge K$, so $\big|\sum_{k=m+1}^{n} a_k\big| = |s_{n+1} - s_{m+1}| < \varepsilon' < \varepsilon$, which is the stated condition. [step 2.1, step 1.1, L4]

3.2 Writing $p = n+1$ and $q = m+1$ gives $n > m$ and $m = q - 1 \ge K - 1 = N$, so the condition applies and $|s_p - s_q| = \big|\sum_{k=m+1}^{n} a_k\big| < \varepsilon$. [step 2.2, step 1.2, step 1.1, step 1.4]

4.1 So $(s_n)$ is Cauchy, hence converges, hence $\sum a_k$ converges. [step 2.2, step 3.2, L4, L3]

5.1 The two implications together are the stated equivalence. [step 3.1, step 4.1] ∎

## Remarks

- **The criterion is stated over blocks, not over partial sums, on purpose.** In applications one estimates a run of consecutive terms $a_{m+1}, \dots, a_n$ directly; the translation into $|s_{n+1} - s_{m+1}|$ is step 1.1 and is done once here so that no later proof has to repeat it.

- **Taking $n = m+1$ recovers the term test.** The single-term block gives $|a_{m+1}| < \varepsilon$ for all $m \ge N$, which is $a_k \to 0$; so [[lem-nth-term-test]] is the weakest consequence of this criterion. The criterion is strictly stronger, since it constrains arbitrarily long blocks and not only single terms.
````

