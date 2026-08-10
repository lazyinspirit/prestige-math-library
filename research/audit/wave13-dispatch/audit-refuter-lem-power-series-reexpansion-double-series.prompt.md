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

- high risk (6): 4 declared dependencies; 4 cited facts; analytic limiting/completeness language

## Target item — `lem-power-series-reexpansion-double-series`

Normalized current SHA-256: `7b6374079740a98a54ea5ee28a782445be10dc546478cdfbe9f324fdcf94948f`

The complete exact-current item follows, including frontmatter:

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

## Wave 13 provenance row

```json
{
  "id": "lem-power-series-reexpansion-double-series",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://encyclopediaofmath.org/wiki/Power_series",
    "https://sites.math.northwestern.edu/scg479/courses/notes/lecture-notes-320-2.pdf"
  ],
  "rationale": "The sources explain recentering a power series by binomial expansion and absolute rearrangement. The item isolates the exact double-series convergence region |d-c|+|h|<R and proves the bookkeeping locally.",
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
      "source": "cor-power-series-convergence-dichotomy",
      "source_section": "Statement",
      "quote": "Let $\\sum a_n(x-c)^n$ have radius $R$. It converges absolutely at every $x$ with $|x-c|<R$ and diverges at every $x$ with $|x-c|>R$. When $0<R<+\\infty$, no common conclusion holds at either endpoint $c\\pm R$: power series of radius $R$ can converge there, even absolutely, or diverge there.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-binomial-theorem",
      "source_section": "Statement",
      "quote": "For all $x, y \\in \\mathbb{R}$ and every $n \\in \\mathbb{N}$,\n\n$$(x+y)^{n} \\;=\\; \\sum_{k<n+1} \\iota\\binom{n}{k}\\, x^{k}\\, y^{\\,n-k},$$\n\nwhere the powers are the integer powers of [[def-integer-power]], the sum is the\nreal finite sum of [[def-finite-sum]] over $k = 0, 1, \\dots, n$, the difference\n$n-k$ is a genuine one because $k \\le n$ throughout the range, and $\\iota$ is the\ncanonical natural of [[def-canonical-natural]].\n\n**The coefficient is $\\iota\\binom{n}{k}$ and not $\\binom{n}{k}$.** A binomial\ncoefficient is a natural number, that is a von Neumann natural, that is a set; it\nis not an element of $\\mathbb{R}$, and it enters the field through $\\iota$.\n\n**The identity is stated in $\\mathbb{R}$ and only in $\\mathbb{R}$.** The same\nproof uses nothing but commutativity, associativity, distributivity and\nnatural-number multiples of a ring element, so a commutative-ring version is\navailable wherever rings are; rings are not available at this point in the\nreading order, and the ring statement is a separate statement, to be made where\nthey are. See the Remarks below.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-double-series-fubini",
      "source_section": "Statement",
      "quote": "Let $a : \\mathbb{N} \\times \\mathbb{N} \\to \\mathbb{R}$ be a doubly indexed array\nof reals, written $a_{ij}$. Assume:\n\n> **(H)** for every $i$ the series $\\sum_j |a_{ij}|$ converges, with sum $A_i$;\n> and the series $\\sum_i A_i$ converges, with sum $L$.\n\nThen, with $J : \\mathbb{N} \\to \\mathbb{N} \\times \\mathbb{N}$ any bijection\n([[thm-n-cross-n-countable]], [[def-injection-surjection-bijection]]):\n\n1. $\\sum_n a_{J(n)}$ converges absolutely\n   ([[def-absolute-and-conditional-convergence]]), and its sum $S$ is the same\n   for every such bijection ([[thm-dirichlet-rearrangement]]);\n2. for every $i$ the series $\\sum_j a_{ij}$ converges, say to $R_i$; the series\n   $\\sum_i R_i$ converges absolutely; and $\\sum_{i=0}^{\\infty} R_i = S$;\n3. for every $j$ the series $\\sum_i |a_{ij}|$ converges and $\\sum_i a_{ij}$\n   converges, say to $C_j$; the series $\\sum_j C_j$ converges absolutely; and\n   $\\sum_{j=0}^{\\infty} C_j = S$.\n\nIn particular the two iterated sums exist and agree:\n\n$$\\sum_{i=0}^{\\infty}\\Bigl(\\sum_{j=0}^{\\infty} a_{ij}\\Bigr) \\;=\\; \\sum_{j=0}^{\\infty}\\Bigl(\\sum_{i=0}^{\\infty} a_{ij}\\Bigr) \\;=\\; \\sum_{n=0}^{\\infty} a_{J(n)} .$$\n\n**The hypothesis is on the absolute values, and it is stated as an iterated\ncondition, not as an unqualified \"double sum\".** Each row must be absolutely\nsummable, and the row totals must themselves be summable. Without it the two\niterated sums may both exist and differ, which is\n[[fs-iterated-double-sums-always-agree]].",
      "quote_selection": "full-source-section",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-absolute-and-conditional-convergence",
      "source_section": "Definition",
      "quote": "Let $(a_k)$ be a sequence of reals, with series $\\sum a_k$ and partial sums\n$s_n = \\sum_{k<n} a_k$ as in [[def-series]], and let $|x|$ be the absolute value\n([[def-abs-value]]).\n\n**Absolute convergence.** The series $\\sum a_k$ **converges absolutely** when the\nseries $\\sum |a_k|$ converges ([[def-series]]). Since $|a_k| \\ge 0$ for every $k$\n([[lem-of-abs-value]]), this is a statement about a series of nonnegative terms.\n\n**Conditional convergence.** The series $\\sum a_k$ **converges conditionally**\nwhen it converges ([[def-series]], [[def-real-limit]]) and does *not* converge\nabsolutely.\n\nSo a convergent series is exactly one of the two: absolutely convergent or\nconditionally convergent, according as $\\sum |a_k|$ converges or not.\n\n**One implication is already proved, and is not reproved anywhere on this page.**\n[[lem-absolute-convergence-implies-convergence]] states that if $\\sum |a_k|$\nconverges then $\\sum a_k$ converges. That lemma was coined and proved on the\nprevious page of this track, where the root and ratio tests need it; this page\nnames it and builds on it. In particular an absolutely convergent series is a\nconvergent series, so the two words above really do partition the convergent\nseries, and \"conditionally convergent\" is not vacuous by accident: the alternating\nharmonic series is a witness, and the witness is exhibited in\n[[fs-convergent-implies-absolutely-convergent]].\n\n**General starting index.** Let $m \\in \\mathbb{N}$ and let $(a_k)_{k \\ge m}$ be a\nfamily from $m$ ([[def-series]]). The series $\\sum_{k \\ge m} a_k$ **converges\nabsolutely** when $\\sum_{k \\ge m} |a_k|$ converges, and **converges\nconditionally** when it converges and does not converge absolutely. By\n[[def-series]] both statements are the corresponding statements for the shifted\nsequence $j \\mapsto a_{j+m}$, so nothing new is being defined and every result\nbelow transfers to a general starting index in the same way, exactly as\n[[lem-absolute-convergence-implies-convergence]] already records for the one\nimplication it proves.",
      "quote_selection": "full-source-section",
      "uses": [
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Put $\\rho:=|d-c|+|h|<R$. By [L2], the sum of the absolute values in row $n$ is $|a_n|\\rho^n$.",
      "step": "1.1",
      "inputs": [
        "L2"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "The series $\\sum_n|a_n|\\rho^n$ converges by [L1], so the triangular double series is absolutely convergent.",
      "step": "2.1",
      "inputs": [
        "L1",
        "step 1.1"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "Apply the binomial theorem before summing and [L3] to regroup the absolutely convergent double series by $k$. This yields the displayed identity.",
      "step": "3.1",
      "inputs": [
        "L3",
        "step 2.1",
        "L2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "lem-power-series-reexpansion-double-series: the Statement fixes the displayed objects and has no conclusion depending on an unlicensed choice from an empty family: Let $\\sum_{n\\ge0}a_n(x-c)^n$ have radius $R$, let $d$ satisfy $|d-c|<R$, and let $h$ satisfy $|d-c|+|h|<R$. Then $$\\sum_{n=0}^{\\infty}\\sum_{k=0}^{n}\\iota\\!\\binom nk |a_n|\\,|d-c|^{n-k}|h|^k<\\infty.$$ Consequently the bino"
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "lem-power-series-reexpansion-double-series: no independent zero-parameter boundary remains after the stated hypotheses and definitions; checked against the Statement: Let $\\sum_{n\\ge0}a_n(x-c)^n$ have radius $R$, let $d$ satisfy $|d-c|<R$, and let $h$ satisfy $|d-c|+|h|<R$. Then $$\\sum_{n=0}^{\\infty}\\sum_{k=0}^{n}\\iota\\!\\binom nk |a_n|\\,|d-c|^{n-k}|h|^k<\\infty.$$ Consequently the bino"
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "lem-power-series-reexpansion-double-series: the assertion has no separate unit-size case; its quantified argument applies without a one-case split: Let $\\sum_{n\\ge0}a_n(x-c)^n$ have radius $R$, let $d$ satisfy $|d-c|<R$, and let $h$ satisfy $|d-c|+|h|<R$. Then $$\\sum_{n=0}^{\\infty}\\sum_{k=0}^{n}\\iota\\!\\binom nk |a_n|\\,|d-c|^{n-k}|h|^k<\\infty.$$ Consequently the bino"
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "lem-power-series-reexpansion-double-series: no geometric or algebraic degeneracy changes the asserted conclusion; checked against the Statement: Let $\\sum_{n\\ge0}a_n(x-c)^n$ have radius $R$, let $d$ satisfy $|d-c|<R$, and let $h$ satisfy $|d-c|+|h|<R$. Then $$\\sum_{n=0}^{\\infty}\\sum_{k=0}^{n}\\iota\\!\\binom nk |a_n|\\,|d-c|^{n-k}|h|^k<\\infty.$$ Consequently the bino"
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "lem-power-series-reexpansion-double-series: no interval or radial endpoint is part of the conclusion; checked against the Statement: Let $\\sum_{n\\ge0}a_n(x-c)^n$ have radius $R$, let $d$ satisfy $|d-c|<R$, and let $h$ satisfy $|d-c|+|h|<R$. Then $$\\sum_{n=0}^{\\infty}\\sum_{k=0}^{n}\\iota\\!\\binom nk |a_n|\\,|d-c|^{n-k}|h|^k<\\infty.$$ Consequently the bino"
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "lem-power-series-reexpansion-double-series: the proof uses only given objects, formulas, or universal instantiation and makes no choice from a possibly empty family; see Statement: Let $\\sum_{n\\ge0}a_n(x-c)^n$ have radius $R$, let $d$ satisfy $|d-c|<R$, and let $h$ satisfy $|d-c|+|h|<R$. Then $$\\sum_{n=0}^{\\infty}\\sum_{k=0}^{n}\\iota\\!\\binom nk |a_n|\\,|d-c|^{n-k}|h|^k<\\infty.$$ Consequently the bino"
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "lem-power-series-reexpansion-double-series: the Statement is not an equivalence, so there is no forward implication obligation: Let $\\sum_{n\\ge0}a_n(x-c)^n$ have radius $R$, let $d$ satisfy $|d-c|<R$, and let $h$ satisfy $|d-c|+|h|<R$. Then $$\\sum_{n=0}^{\\infty}\\sum_{k=0}^{n}\\iota\\!\\binom nk |a_n|\\,|d-c|^{n-k}|h|^k<\\infty.$$ Consequently the bino"
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "lem-power-series-reexpansion-double-series: the Statement is not an equivalence, so there is no reverse implication obligation: Let $\\sum_{n\\ge0}a_n(x-c)^n$ have radius $R$, let $d$ satisfy $|d-c|<R$, and let $h$ satisfy $|d-c|+|h|<R$. Then $$\\sum_{n=0}^{\\infty}\\sum_{k=0}^{n}\\iota\\!\\binom nk |a_n|\\,|d-c|^{n-k}|h|^k<\\infty.$$ Consequently the bino"
    }
  ]
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "lem-power-series-reexpansion-double-series",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "cor-power-series-convergence-dichotomy",
    "declared_target": "cor-power-series-convergence-dichotomy",
    "target_statement_provenance": "ai-altered",
    "targetPage": "power-series-and-real-analytic-functions",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-power-series-reexpansion-double-series",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "thm-binomial-theorem",
    "declared_target": "thm-binomial-theorem",
    "target_statement_provenance": "ai-altered",
    "targetPage": "finite-counting-and-binomial-coefficients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-power-series-reexpansion-double-series",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "thm-double-series-fubini",
    "declared_target": "thm-double-series-fubini",
    "target_statement_provenance": "literature-derived",
    "targetPage": "absolute-convergence-and-rearrangement",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-power-series-reexpansion-double-series",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "def-absolute-and-conditional-convergence",
    "declared_target": "def-absolute-and-conditional-convergence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "absolute-convergence-and-rearrangement",
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

## Full exact-current text of every cited or declared item (4)

### `cor-power-series-convergence-dichotomy`

````markdown
---
id: cor-power-series-convergence-dichotomy
kind: corollary
title: "A real power series converges absolutely inside its radius and diverges outside it, while either behaviour may occur at an endpoint"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-cauchy-hadamard-for-real-power-series, def-real-power-series-and-radius-of-convergence, thm-root-test]
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
    - title: "MIT 18.100C, Lecture 11: Power Series"
      url: "https://ocw.mit.edu/courses/18-100c-real-analysis-fall-2012/1058808e5cb57c986118333f8b6fa0d7_MIT18_100CF12_l11sum.pdf"
pipeline_run: null
---

## Statement

Let $\sum a_n(x-c)^n$ have radius $R$. It converges absolutely at every $x$ with $|x-c|<R$ and diverges at every $x$ with $|x-c|>R$. When $0<R<+\infty$, no common conclusion holds at either endpoint $c\pm R$: power series of radius $R$ can converge there, even absolutely, or diverge there.

## Facts & Assumptions

**Given:** A real power series $\sum a_n(x-c)^n$ with radius $R$ ([[def-real-power-series-and-radius-of-convergence]]).

[L1] Cauchy-Hadamard identifies $R$ from the limit superior of the coefficient roots and the root test gives absolute convergence below the reciprocal threshold and divergence above it ([[thm-cauchy-hadamard-for-real-power-series]]).

[L2] At root-test boundary value $1$, the coefficient families $1/(n+1)$ and $1/(n+1)^2$ both have root limit superior $1$, while the first series diverges and the second converges; changing the coefficient signs does not change their absolute values ([[thm-root-test]], claim 3).

## Proof

**Proof technique:** direct.

1.1 The assertions for $|x-c|<R$ and $|x-c|>R$ are exactly the two strict alternatives supplied by [L1], including the cases $R=0$ and $R=+\infty$. [L1]

1.2 For endpoint behaviour at radius $1$, the series with coefficients $1/(n+1)^2$ converges absolutely at both $x=1$ and $x=-1$. The series with coefficients $1/(n+1)$ diverges at $x=1$, while the series with coefficients $(-1)^n/(n+1)$ diverges at $x=-1$. All three have radius $1$ by [L2]. [L2]

2.1 Replacing $x$ by $(x-c)/R$ and multiplying coefficients by the corresponding powers of $R^{-1}$ transports the two radius-one examples to any finite $R>0$ and centre $c$. Thus either behaviour may occur at an endpoint, while no assertion has been made when the endpoints are not real. [step 1.2, algebra] ∎
````

### `def-absolute-and-conditional-convergence`

````markdown
---
id: def-absolute-and-conditional-convergence
kind: definition
title: "Absolutely convergent and conditionally convergent series, and the general starting index"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-series, lem-absolute-convergence-implies-convergence, def-abs-value, lem-of-abs-value, def-real-limit]
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
    - title: "Absolute convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Absolute_convergence"
    - title: "Conditional convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Conditional_convergence"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "N. Donaldson, Math 140A: Series"
      url: "https://www.math.uci.edu/~ndonalds/math140a/3series.html"
pipeline_run: null
---

## Definition

Let $(a_k)$ be a sequence of reals, with series $\sum a_k$ and partial sums
$s_n = \sum_{k<n} a_k$ as in [[def-series]], and let $|x|$ be the absolute value
([[def-abs-value]]).

**Absolute convergence.** The series $\sum a_k$ **converges absolutely** when the
series $\sum |a_k|$ converges ([[def-series]]). Since $|a_k| \ge 0$ for every $k$
([[lem-of-abs-value]]), this is a statement about a series of nonnegative terms.

**Conditional convergence.** The series $\sum a_k$ **converges conditionally**
when it converges ([[def-series]], [[def-real-limit]]) and does *not* converge
absolutely.

So a convergent series is exactly one of the two: absolutely convergent or
conditionally convergent, according as $\sum |a_k|$ converges or not.

**One implication is already proved, and is not reproved anywhere on this page.**
[[lem-absolute-convergence-implies-convergence]] states that if $\sum |a_k|$
converges then $\sum a_k$ converges. That lemma was coined and proved on the
previous page of this track, where the root and ratio tests need it; this page
names it and builds on it. In particular an absolutely convergent series is a
convergent series, so the two words above really do partition the convergent
series, and "conditionally convergent" is not vacuous by accident: the alternating
harmonic series is a witness, and the witness is exhibited in
[[fs-convergent-implies-absolutely-convergent]].

**General starting index.** Let $m \in \mathbb{N}$ and let $(a_k)_{k \ge m}$ be a
family from $m$ ([[def-series]]). The series $\sum_{k \ge m} a_k$ **converges
absolutely** when $\sum_{k \ge m} |a_k|$ converges, and **converges
conditionally** when it converges and does not converge absolutely. By
[[def-series]] both statements are the corresponding statements for the shifted
sequence $j \mapsto a_{j+m}$, so nothing new is being defined and every result
below transfers to a general starting index in the same way, exactly as
[[lem-absolute-convergence-implies-convergence]] already records for the one
implication it proves.

## Remarks

- **Absolute convergence is a condition on the terms, not on the sum.** It says
  the series of absolute values converges, and it says nothing about the value of
  $\sum_{k=0}^{\infty} a_k$. The two sums are in general different, and no
  statement here identifies them.

- **Why the distinction earns a page.** Every result on this page separates the
  two classes. An absolutely convergent series may be reordered at will
  ([[thm-dirichlet-rearrangement]]) and multiplied by another
  ([[thm-mertens]]); a conditionally convergent one may be reordered to any sum
  whatever ([[thm-riemann-series-theorem]]). The difference is not one of degree.

- **A series of nonnegative terms converges absolutely if it converges at all**,
  since then $|a_k| = a_k$. So the distinction is invisible for the comparison,
  condensation, Raabe, Gauss and Kummer tests of the previous page, all of which
  assume terms of one sign. It is not invisible on that page as a whole: the root
  and ratio tests are stated for terms of arbitrary sign and reach convergence of
  $\sum a_k$ precisely through
  [[lem-absolute-convergence-implies-convergence]], which is where the word
  *absolutely convergent* is first used. What that page does not develop, and this
  one does, is everything that separates the two classes rather than the one
  implication those two tests need.
````

### `thm-binomial-theorem`

````markdown
---
id: thm-binomial-theorem
kind: theorem
title: "The binomial theorem in $\\mathbb{R}$: $(x+y)^{n} = \\sum_{k<n+1} \\iota\\!\\binom{n}{k}\\, x^{k} y^{\\,n-k}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-pascals-rule, def-binomial-coefficient, def-finite-sum, lem-finite-sum-laws,
       def-nat-finite-sum-and-product, lem-nat-finite-sum-laws-and-the-canonical-embedding,
       def-integer-power, def-canonical-natural, lem-of-zero-mult,
       lem-nat-add-cancellative, lem-nat-nonzero-is-successor, def-nat-order,
       thm-induction-principle, def-field, def-ordered-field]
justified_by: []
forward_refs: [def-ring]
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
    - title: "Binomial theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binomial_theorem"
    - title: "Binomial coefficient (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binomial_coefficient"
    - title: "Pascal's rule (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pascal%27s_rule"
pipeline_run: null
---

## Statement

For all $x, y \in \mathbb{R}$ and every $n \in \mathbb{N}$,

$$(x+y)^{n} \;=\; \sum_{k<n+1} \iota\binom{n}{k}\, x^{k}\, y^{\,n-k},$$

where the powers are the integer powers of [[def-integer-power]], the sum is the
real finite sum of [[def-finite-sum]] over $k = 0, 1, \dots, n$, the difference
$n-k$ is a genuine one because $k \le n$ throughout the range, and $\iota$ is the
canonical natural of [[def-canonical-natural]].

**The coefficient is $\iota\binom{n}{k}$ and not $\binom{n}{k}$.** A binomial
coefficient is a natural number, that is a von Neumann natural, that is a set; it
is not an element of $\mathbb{R}$, and it enters the field through $\iota$.

**The identity is stated in $\mathbb{R}$ and only in $\mathbb{R}$.** The same
proof uses nothing but commutativity, associativity, distributivity and
natural-number multiples of a ring element, so a commutative-ring version is
available wherever rings are; rings are not available at this point in the
reading order, and the ring statement is a separate statement, to be made where
they are. See the Remarks below.

## Facts & Assumptions

**Given:** Reals $x, y$; a natural $n$; and the abbreviation $c_k := \iota\binom{n}{k}$ for **every** $k \in \mathbb{N}$, so that $c_k = \iota(0) = 0$ whenever $k > n$.

[L1] Induction ([[thm-induction-principle]]).

[L2] Integer powers ([[def-integer-power]]): $a^{0} = 1$ for **every** real $a$, including $a = 0$, and $a^{\sigma(m)} = a^{m}\cdot a$. An immediate induction gives $1^{m} = 1$.

[L3] Real finite sums ([[def-finite-sum]]): $\sum_{k<0} u_k = 0$ and $\sum_{k<\sigma(N)} u_k = \sum_{k<N} u_k + u_N$; additivity $\sum(u_k+v_k) = \sum u_k + \sum v_k$, scaling $\sum \lambda u_k = \lambda\sum u_k$, and splitting $\sum_{k<N} u_k = \sum_{k<p} u_k + \sum_{j<N-p} u_{p+j}$ for $p \le N$ ([[lem-finite-sum-laws]], clauses 1, 2 and 3).

[L4] $\iota$ is additive and multiplicative with $\iota(0) = 0$ and $\iota(1) = 1$ (clause 0 of [[lem-nat-finite-sum-laws-and-the-canonical-embedding]], [[def-canonical-natural]]).

[L5] Binomial coefficients ([[def-binomial-coefficient]]): $\binom{m}{0} = 1$ and $\binom{m}{j} = 0$ for $j > m$; Pascal's rule $\binom{\sigma(m)}{\sigma(j)} = \binom{m}{j} + \binom{m}{\sigma(j)}$ for all $m, j$ ([[thm-pascals-rule]], clause 1).

[L6] Field arithmetic of $\mathbb{R}$: associativity, commutativity, distributivity, $0 \cdot a = 0$ ([[def-field]], [[def-ordered-field]], [[lem-of-zero-mult]]).

[L7] Arithmetic of $\mathbb{N}$: for $k \le n$, $k + (n-k) = n$, and hence $(n-k)+1 = \sigma(n)-k$ and $\sigma(n) - \sigma(k) = n-k$; every nonzero natural is a successor ([[def-nat-order]], [[lem-nat-add-cancellative]], [[lem-nat-nonzero-is-successor]], [[def-nat-finite-sum-and-product]] for the truncated difference).

## Proof

**Proof technique:** induction.

1.1 Both sides are functions of $n$ with $x, y$ fixed, and the induction is on $n$. Note first that $c_{\sigma(n)} = \iota\binom{n}{\sigma(n)} = \iota(0) = 0$, since $\sigma(n) > n$. [given, L4, L5]

1.2 Base case $n = 0$. The left-hand side is $(x+y)^{0} = 1$ by [L2]. The right-hand side is $\sum_{k<1}\iota\binom{0}{k}x^{k}y^{\,0-k} = \iota\binom{0}{0}x^{0}y^{0} = 1\cdot 1\cdot 1 = 1$, using [L3], $\binom{0}{0} = 1$, $\iota(1) = 1$ and [L2]. This is correct at $x = 0$ and at $y = 0$ as well, because $a^{0} = 1$ for every real $a$. [base, L2, L3, L4, L5]

1.3 Inductive hypothesis: fix $n$ and assume $(x+y)^{n} = \sum_{k<\sigma(n)} c_k x^{k}y^{\,n-k}$ for all $x, y \in \mathbb{R}$. [ih]

2.1 Expanding one factor. By [L2] and distributivity, $(x+y)^{\sigma(n)} = (x+y)^{n}(x+y) = \big(\sum_{k<\sigma(n)} c_k x^{k}y^{\,n-k}\big)x + \big(\sum_{k<\sigma(n)} c_k x^{k}y^{\,n-k}\big)y$, using the hypothesis of step 1.3; and by the scaling clause of [L3] together with $x^{k}x = x^{\sigma(k)}$ and $y^{\,n-k}y = y^{\,(n-k)+1}$ this equals $\Sigma_1 + \Sigma_2$ with $\Sigma_1 := \sum_{k<\sigma(n)} c_k x^{\sigma(k)}y^{\,n-k}$ and $\Sigma_2 := \sum_{k<\sigma(n)} c_k x^{k}y^{\,(n-k)+1}$. [step 1.3, L2, L3, L6]

3.1 Rewriting $\Sigma_2$. For $k \le n$ one has $(n-k)+1 = \sigma(n)-k$ by [L7], so $\Sigma_2 = \sum_{k<\sigma(n)} c_k x^{k}y^{\,\sigma(n)-k}$. Extending the range by one term costs nothing: by the recursion clause of [L3], $\sum_{k<\sigma(\sigma(n))} c_k x^{k}y^{\,\sigma(n)-k} = \Sigma_2 + c_{\sigma(n)}x^{\sigma(n)}y^{0}$, and $c_{\sigma(n)} = 0$ by step 1.1, so the added term is $0$ by [L6] and $\Sigma_2 = \sum_{k<\sigma(\sigma(n))} c_k x^{k}y^{\,\sigma(n)-k}$. [step 1.1, step 2.1, L3, L6, L7]

3.2 Rewriting $\Sigma_1$. Define a list $b$ of length $\sigma(\sigma(n))$ by $b_0 := 0$ and $b_{\sigma(i)} := c_i x^{\sigma(i)}y^{\,n-i}$ for $i < \sigma(n)$; every index below $\sigma(\sigma(n))$ is $0$ or a successor $\sigma(i)$ with $i < \sigma(n)$, by [L7], so $b$ is well defined. Splitting at $p = 1$ by [L3] and using $\sigma(\sigma(n)) - 1 = \sigma(n)$ and $1 + i = \sigma(i)$, $\sum_{j<\sigma(\sigma(n))} b_j = b_0 + \sum_{i<\sigma(n)} b_{\sigma(i)} = 0 + \Sigma_1 = \Sigma_1$. [step 2.1, L3, L6, L7]

4.1 Adding the two. By step 3.1, step 3.2 and the additivity clause of [L3], $(x+y)^{\sigma(n)} = \sum_{k<\sigma(\sigma(n))}\big(b_k + c_k x^{k}y^{\,\sigma(n)-k}\big)$. Evaluate the general term. At $k = 0$ it is $0 + \iota\binom{n}{0}x^{0}y^{\,\sigma(n)} = y^{\,\sigma(n)} = \iota\binom{\sigma(n)}{0}x^{0}y^{\,\sigma(n)-0}$, both coefficients being $\iota(1) = 1$. At $k = \sigma(i)$ with $i < \sigma(n)$ it is $c_i x^{\sigma(i)}y^{\,n-i} + c_{\sigma(i)}x^{\sigma(i)}y^{\,\sigma(n)-\sigma(i)}$, and $\sigma(n)-\sigma(i) = n-i$ by [L7], so the term equals $\big(\iota\binom{n}{i} + \iota\binom{n}{\sigma(i)}\big)x^{\sigma(i)}y^{\,\sigma(n)-\sigma(i)} = \iota\binom{\sigma(n)}{\sigma(i)}x^{\sigma(i)}y^{\,\sigma(n)-\sigma(i)}$ by the additivity of $\iota$ and Pascal's rule. Hence $(x+y)^{\sigma(n)} = \sum_{k<\sigma(\sigma(n))}\iota\binom{\sigma(n)}{k}x^{k}y^{\,\sigma(n)-k}$, which is the claim at $\sigma(n)$. [step 3.1, step 3.2, L3, L4, L5, L6, L7]

5.1 By step 1.2, step 4.1 and induction the identity holds for every $n \in \mathbb{N}$ and all reals $x$, $y$; in particular at $x = 0$ or $y = 0$, where the convention $a^{0} = 1$ of [[def-integer-power]] is what makes the extreme terms come out right and no exceptional case is needed. [step 1.2, step 4.1, L1, L2, discharge-induction] ∎

## Remarks

- **Two index traps, both checked.** The sum runs over $k < n+1$, that is
  $k \le n$, so the exponent $n-k$ is never a truncated difference in disguise;
  and the inductive step needs the coefficient $\binom{n}{\sigma(n)}$, which is
  $0$ by the boundary values of [[def-binomial-coefficient]] rather than
  undefined. Step 1.1 records that once and both rewritings use it.

- **Where $0^{0}$ matters.** At $x = 0$ the term with $k = 0$ is
  $\iota\binom{n}{0}\,0^{0}y^{n} = y^{n}$, and the identity reads
  $y^{n} = y^{n}$. A treatment leaving $0^{0}$ undefined would have to state the
  theorem with exceptions; [[def-integer-power]] fixes $a^{0} = 1$ for every real
  $a$, so there are none.

- **The ring version is a different statement.** It says the same thing about
  $x, y$ in a commutative ring, with $\iota\binom{n}{k}$ replaced by the
  $\binom{n}{k}$-fold multiple of the ring element. Making it requires rings,
  which come later in the reading order; the pointer to [[def-ring]] is
  orientation only and nothing above rests on it.
````

### `thm-double-series-fubini`

````markdown
---
id: thm-double-series-fubini
kind: theorem
title: "Fubini for double series: if $\\sum_i \\sum_j |a_{ij}|$ converges then both iterated sums and the sum along every bijection $\\mathbb{N} \\to \\mathbb{N} \\times \\mathbb{N}$ converge to one and the same value"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-dirichlet-rearrangement, def-rearrangement-and-unconditional-convergence, def-absolute-and-conditional-convergence, lem-absolute-convergence-implies-convergence, thm-n-cross-n-countable, def-injection-surjection-bijection, thm-nonnegative-series-bounded-partial-sums, thm-direct-comparison-test, lem-triangle-inequality-finite, lem-of-abs-value, thm-induction-principle, def-finite-sum, lem-finite-sum-laws, thm-algebra-of-limits, lem-limit-preserves-order, def-series, def-real-limit]
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
    - title: "Fubini's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fubini%27s_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 8"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. C. Gunning, Analytic Functions of Several Complex Variables"
      url: "https://web.math.princeton.edu/~gunning/bk.pdf"
    - title: "John K. Hunter, An Introduction to Real Analysis, Chapter 4"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch4.pdf"
pipeline_run: null
---

## Statement

Let $a : \mathbb{N} \times \mathbb{N} \to \mathbb{R}$ be a doubly indexed array
of reals, written $a_{ij}$. Assume:

> **(H)** for every $i$ the series $\sum_j |a_{ij}|$ converges, with sum $A_i$;
> and the series $\sum_i A_i$ converges, with sum $L$.

Then, with $J : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$ any bijection
([[thm-n-cross-n-countable]], [[def-injection-surjection-bijection]]):

1. $\sum_n a_{J(n)}$ converges absolutely
   ([[def-absolute-and-conditional-convergence]]), and its sum $S$ is the same
   for every such bijection ([[thm-dirichlet-rearrangement]]);
2. for every $i$ the series $\sum_j a_{ij}$ converges, say to $R_i$; the series
   $\sum_i R_i$ converges absolutely; and $\sum_{i=0}^{\infty} R_i = S$;
3. for every $j$ the series $\sum_i |a_{ij}|$ converges and $\sum_i a_{ij}$
   converges, say to $C_j$; the series $\sum_j C_j$ converges absolutely; and
   $\sum_{j=0}^{\infty} C_j = S$.

In particular the two iterated sums exist and agree:

$$\sum_{i=0}^{\infty}\Bigl(\sum_{j=0}^{\infty} a_{ij}\Bigr) \;=\; \sum_{j=0}^{\infty}\Bigl(\sum_{i=0}^{\infty} a_{ij}\Bigr) \;=\; \sum_{n=0}^{\infty} a_{J(n)} .$$

**The hypothesis is on the absolute values, and it is stated as an iterated
condition, not as an unqualified "double sum".** Each row must be absolutely
summable, and the row totals must themselves be summable. Without it the two
iterated sums may both exist and differ, which is
[[fs-iterated-double-sums-always-agree]].

## Facts & Assumptions

**Given:** An array $a : \mathbb{N} \times \mathbb{N} \to \mathbb{R}$ satisfying (H), with row totals $A_i$ and $L = \sum_{i=0}^{\infty} A_i$, and a bijection $J : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$.

[L1] Finite sums: the empty sum is $0$, $\sum_{k<n+1}x_k = \sum_{k<n}x_k + x_n$, finite sums are additive, monotone in their terms, and may be split at any intermediate index ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L2] For a series of nonnegative terms, convergence is equivalent to the range of the partial sums being bounded above; then the sum is the supremum of that range, every partial sum is at most the sum, and the partial sums converge to it ([[thm-nonnegative-series-bounded-partial-sums]], [[def-series]]).

[L3] Direct comparison ([[thm-direct-comparison-test]]).

[L4] $\bigl|\sum_{k<n}x_k\bigr| \le \sum_{k<n}|x_k|$ ([[lem-triangle-inequality-finite]]).

[L5] Absolute value: $|x| \ge 0$, $-|x| \le x \le |x|$, and $|x| = 0$ exactly when $x = 0$ ([[lem-of-abs-value]]).

[L6] The principle of induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L7] A bijection is an injective surjection; $\mathbb{N} \times \mathbb{N}$ admits a bijection with $\mathbb{N}$ ([[def-injection-surjection-bijection]], [[thm-n-cross-n-countable]]).

[L8] If $\sum |x_k|$ converges then $\sum x_k$ converges ([[lem-absolute-convergence-implies-convergence]], [[def-absolute-and-conditional-convergence]]).

[L9] An absolutely convergent series has the same sum along every rearrangement ([[thm-dirichlet-rearrangement]], [[def-rearrangement-and-unconditional-convergence]]).

[L10] Algebra of limits, and limits preserve non-strict inequalities holding eventually ([[thm-algebra-of-limits]], [[lem-limit-preserves-order]], [[def-real-limit]]).

## Proof

**Proof technique:** direct.

1.1 **Rectangles are bounded by $L$.** For all $P, Q \in \mathbb{N}$ one has $\sum_{i<P}\sum_{j<Q}|a_{ij}| \le \sum_{i<P} A_i \le L$, since each inner sum is a partial sum of the convergent nonnegative series $\sum_j |a_{ij}|$ and so is at most $A_i$, and finite sums are monotone. [given, L1, L2]

1.2 **Single points.** Let $d : \mathbb{N}\times\mathbb{N} \to \mathbb{R}$ vanish except at one pair $(p,q)$, let $N \in \mathbb{N}$ and let $\rho$ be injective on $\{n : n<N\}$ with values in $\mathbb{N}\times\mathbb{N}$. If $(p,q) = \rho(n_0)$ for some (necessarily unique) $n_0 < N$, then $\sum_{n<N} d_{\rho(n)} = d_{pq}$; otherwise $\sum_{n<N} d_{\rho(n)} = 0$. Both follow by splitting the sum at $n_0$ and at $n_0+1$, all remaining terms being $0$. [L1, L7]

1.3 **List dominated by a rectangle.** For every $N \in \mathbb{N}$, every array $(c_{ij})$ of nonnegative reals, all $P, Q \in \mathbb{N}$ and every injective $\rho$ on $\{n : n<N\}$ with values in $\{(i,j) : i<P,\ j<Q\}$, one has $\sum_{n<N} c_{\rho(n)} \le \sum_{i<P}\sum_{j<Q} c_{ij}$. Induction on $N$, everything else universally quantified: at $N = 0$ the left side is $0$ and the right side is nonnegative; and passing from $N$ to $N+1$, put $(p,q) := \rho(N)$ and let $c''$ agree with $c$ except that $c''_{pq} := 0$, so that the induction hypothesis applied to $c''$ and $\rho$ restricted gives $\sum_{n<N} c_{\rho(n)} \le \sum_{i<P}\sum_{j<Q}c_{ij} - c_{pq}$, the subtraction coming from splitting the outer sum at $p$ and the inner one at $q$; adding $c_{pq}$ closes the induction. [L1, L6]

1.4 **Bounding indices.** For every $N$ there are $P, Q$ with $J(n) \in \{(i,j) : i<P,\ j<Q\}$ for all $n < N$; and for all $P, Q$ there is $N$ with $\{(i,j) : i<P,\ j<Q\} \subseteq \{J(n) : n<N\}$. Both are inductions using that the order on $\mathbb{N}$ is total, so that finitely many naturals have a strict upper bound; the second uses surjectivity of $J$ to name, for each pair, the index mapping onto it. [L6, L7]

1.5 For every $i$ the series $\sum_j a_{ij}$ converges, since $\sum_j |a_{ij}|$ does; write $R_i$ for its sum, so $|R_i| \le A_i$ by [L4] and [L10]. Hence $\sum_i |R_i|$ converges by comparison with $\sum_i A_i$, and $\sum_i R_i$ converges absolutely. [given, L2, L3, L4, L8, L10]

1.6 Let $\varepsilon > 0$ be real. Choose $P_0 \ge 1$ with $L - \sum_{i<P_0} A_i < \varepsilon$, possible because the partial sums of $\sum_i A_i$ converge to $L$; then choose, for each $i < P_0$, an index $Q_i$ with $A_i - \sum_{j<Q_i}|a_{ij}| < \varepsilon/P_0$, and let $Q_0$ be an upper bound of the finitely many $Q_i$, so that $A_i - \sum_{j<Q_0}|a_{ij}| < \varepsilon/P_0$ for every $i < P_0$. [given, L2, L6, choose]

2.1 **Rectangle to list.** Let $c$ be an array, let $P, Q, N \in \mathbb{N}$ and let $\rho$ be injective on $\{n : n<N\}$ with $\{(i,j) : i<P,\ j<Q\} \subseteq \{\rho(n) : n<N\}$. Let $c'$ agree with $c$ on that rectangle and vanish off it. Then $\sum_{i<P}\sum_{j<Q} c_{ij} = \sum_{n<N} c'_{\rho(n)}$. This is proved by induction on $P$, with an inner induction on $Q$: enlarging the rectangle by one column adds the single term $c_{PQ}$ to the left side, and changes $c'$ by an array vanishing except at $(P,Q)$, which by step 1.2 adds exactly $c_{PQ}$ to the right side; at $P = 0$ or $Q = 0$ both sides are $0$. [step 1.2, L1, L6]

2.2 By step 1.3 and step 1.4, every partial sum $\sum_{n<N}|a_{J(n)}|$ is at most $\sum_{i<P}\sum_{j<Q}|a_{ij}| \le L$; hence $\sum_n |a_{J(n)}|$ converges, with sum $\Lambda \le L$, and $\sum_n a_{J(n)}$ converges, say to $S$. Any two bijections $\mathbb{N} \to \mathbb{N}\times\mathbb{N}$ differ by a bijection of $\mathbb{N}$, so by [L9] the value $S$ does not depend on $J$; this is claim 1. [step 1.1, step 1.3, step 1.4, L2, L8, L9]

2.3 Write $D := \sum_{i<P_0}\sum_{j<Q_0} a_{ij}$ and $E := \sum_{i<P_0}\sum_{j<Q_0} |a_{ij}|$. By step 1.6 and monotonicity, $E > \sum_{i<P_0}(A_i - \varepsilon/P_0) = \sum_{i<P_0}A_i - \varepsilon > L - 2\varepsilon$, so $L - E < 2\varepsilon$. [step 1.6, L1]

2.4 By step 1.4 fix $N$ with $\{(i,j) : i<P_0,\ j<Q_0\} \subseteq \{J(n) : n<N\}$, and by step 1.4 again fix $P \ge P_0$, $Q \ge Q_0$ with $J(n)$ in the rectangle $\{(i,j) : i<P,\ j<Q\}$ for all $n<N$. [step 1.4, choose]

2.5 The transposed array $a^{\mathsf{T}}_{ij} := a_{ji}$ satisfies (H): its $i$-th row total is $\sum_j |a_{ji}|$, which converges because its partial sums $\sum_{j<Q}|a_{ji}|$ are bounded by $L$ by step 1.1; and the partial sums $\sum_{i<P}\sum_j |a_{ji}|$ are limits of the rectangle sums $\sum_{i<P}\sum_{j<Q}|a_{ji}|$, again bounded by $L$ by step 1.1, so the series of row totals converges. [step 1.1, L1, L2, L10]

3.1 For every $N$, $\bigl|S - \sum_{n<N}a_{J(n)}\bigr| \le \Lambda - \sum_{n<N}|a_{J(n)}|$: for $M > N$ the triangle inequality gives $\bigl|\sum_{n<M}a_{J(n)} - \sum_{n<N}a_{J(n)}\bigr| \le \sum_{n<M}|a_{J(n)}| - \sum_{n<N}|a_{J(n)}| \le \Lambda - \sum_{n<N}|a_{J(n)}|$, and letting $M$ grow, the limit preserves the two non-strict inequalities bounding the left side. [step 2.2, L1, L4, L10]

3.2 Let $a'$ agree with $a$ on the rectangle $\{(i,j) : i<P_0,\ j<Q_0\}$ and vanish off it. By step 2.1, $D = \sum_{n<N} a'_{J(n)}$ and $E = \sum_{n<N} |a'_{J(n)}|$; since $|a'_{J(n)}| \le |a_{J(n)}|$ termwise, monotonicity gives $E \le \sum_{n<N}|a_{J(n)}| \le \Lambda \le L$. [step 2.1, step 2.2, step 2.4, L1, L2]

4.1 By step 3.1 and step 3.2, $\bigl|S - \sum_{n<N} a_{J(n)}\bigr| \le \Lambda - \sum_{n<N}|a_{J(n)}| \le L - E < 2\varepsilon$. [step 3.1, step 2.3, step 3.2]

4.2 Also $\bigl|\sum_{n<N}a_{J(n)} - D\bigr| = \bigl|\sum_{n<N}(a - a')_{J(n)}\bigr| \le \sum_{n<N}|(a-a')_{J(n)}| \le \sum_{i<P}\sum_{j<Q}|(a-a')_{ij}| = \sum_{i<P}\sum_{j<Q}|a_{ij}| - E \le L - E < 2\varepsilon$, the middle inequality by step 1.3 and the following equality by splitting the iterated sum at $P_0$ and at $Q_0$, the array $a - a'$ agreeing with $a$ off the small rectangle and vanishing on it. [step 1.1, step 2.1, step 1.3, step 2.3, step 2.4, step 3.2, L1, L4]

4.3 For each $i < P_0$, $\bigl|R_i - \sum_{j<Q_0}a_{ij}\bigr| \le A_i - \sum_{j<Q_0}|a_{ij}| < \varepsilon/P_0$, by the argument of step 3.1 applied to the row $i$; summing over $i < P_0$ gives $\bigl|\sum_{i<P_0}R_i - D\bigr| < \varepsilon$. [step 3.1, step 1.6, L1, L4]

4.4 Writing $\Sigma R$ for the sum of $\sum_i R_i$, the same argument applied to the series $\sum_i R_i$ and the comparison $|R_i| \le A_i$ gives $\bigl|\Sigma R - \sum_{i<P_0}R_i\bigr| \le \sum_{i=0}^{\infty}|R_i| - \sum_{i<P_0}|R_i| \le L - \sum_{i<P_0}A_i < \varepsilon$. [step 3.1, step 1.5, step 1.6, L1, L2]

5.1 Combining step 4.1, step 4.2, step 4.3 and step 4.4, $|\Sigma R - S| < \varepsilon + \varepsilon + 2\varepsilon + 2\varepsilon = 6\varepsilon$. As $\varepsilon > 0$ was arbitrary and $|\Sigma R - S| \ge 0$, this forces $\Sigma R = S$, which with step 1.5 is claim 2. [step 1.5, step 4.1, step 4.2, step 4.3, step 4.4, L5]

6.1 Applying claims 1 and 2 to $a^{\mathsf{T}}$ and to the bijection $J^{\mathsf{T}}$ obtained by exchanging the coordinates of $J$ gives claim 3, since $a^{\mathsf{T}}_{J^{\mathsf{T}}(n)} = a_{J(n)}$ for every $n$, so the two linear series are the same series and have the same sum $S$. [step 2.2, step 5.1, step 2.5, L7] ∎

## Remarks

- **What the finite bookkeeping of steps 1.2 to 1.5 does, and why it is proved.** Three facts are needed and none of them is among the laws of [[lem-finite-sum-laws]], all of which compare sums term by term over the same index range: that a sum along an injective list picks up an isolated term exactly once; that an iterated sum over a rectangle equals the sum along any injective list containing that rectangle, of the array cut down to it; and that a sum of nonnegative terms along an injective list into a rectangle is at most the iterated sum over the rectangle. Each is proved by zeroing out one entry at a time, which keeps the argument inside those laws.

- **Where the hypothesis is used.** Only through step 1.1, which bounds every rectangle by $L$, and through step 1.6, which makes a single rectangle capture all but $2\varepsilon$ of the total mass. Everything else is bookkeeping. This is why the hypothesis has to be an absolute one: for a signed array no rectangle captures the mass, and the two iterated sums can disagree.

- **The independence of the enumeration is [[thm-dirichlet-rearrangement]] and nothing more.** Two bijections $\mathbb{N} \to \mathbb{N}\times\mathbb{N}$ differ by a bijection of $\mathbb{N}$, and an absolutely convergent series is unconditionally convergent. So the "sum of the array" is a well-defined real number attached to the array itself, and the theorem says the two iterated sums compute it.
````

