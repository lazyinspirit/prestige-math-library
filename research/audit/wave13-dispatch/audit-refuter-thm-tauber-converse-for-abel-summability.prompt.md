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

- critical risk (8): 6 declared dependencies; 6 cited facts; boundary-sensitive language; analytic limiting/completeness language

## Target item — `thm-tauber-converse-for-abel-summability`

Normalized current SHA-256: `1fbbe3dca2ab937c858760f9708c1bd387d9650f656643c8ca14362334929860`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: thm-tauber-converse-for-abel-summability
kind: theorem
title: "Tauber's theorem: an Abel-summable series with $\\iota(n+1)a_n\\to0$ converges ordinarily to its Abel sum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-abel-and-cesaro-summability-of-a-series, lem-tauber-block-estimate, cor-archimedean-reciprocal, lem-of-naturals-positive, lem-of-inverse-positive, def-real-limit]
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
    - title: "Tauberian theorem, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Tauberian_theorem"
    - title: "Tauberian theorems, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Tauberian_theorems"
pipeline_run: null
---

## Statement

Let $\sum_{n\ge0}a_n$ be Abel summable to $s$. If

$$\iota(n+1)a_n\longrightarrow0,$$

then its ordinary partial sums converge to $s$.

## Facts & Assumptions

**Given:** The Abel sum $A(x):=\sum_{n\ge0}a_nx^n\to s$ as $x\uparrow1$ and the stated Tauber condition.

[L1] The block lemma supplies uniform bounds for the weighted middle and tail when $x_N:=1-1/\iota(N+1)$ ([[lem-tauber-block-estimate]]).

[L2] The Archimedean reciprocal property gives a reciprocal below every positive tolerance. Canonical naturals increase and reciprocation reverses positive order, so every later reciprocal remains below that tolerance; hence $1/\iota(N+1)\to0$ and $x_N\uparrow1$. Abel summability then gives $A(x_N)\to s$ ([[cor-archimedean-reciprocal]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]], [[def-abel-and-cesaro-summability-of-a-series]], [[def-real-limit]]).

## Proof

**Proof technique:** direct.

1.1 Write $S_N:=\sum_{n=0}^{N}a_n$. For $N\ge1$, one has $S_N-A(x_N)=\sum_{n=0}^{N}a_n(1-x_N^n)-\sum_{n>N}a_nx_N^n$. [given, algebra]

2.1 Given $\varepsilon>0$, choose $N_0$ from [L1]. The part of the first sum with $n<N_0$ tends to $0$ because it is finite and $x_N\to1$; the remaining part and the tail have absolute value at most $\varepsilon$ each by [L1]. [step 1.1, L1, choose]

3.1 Hence $S_N-A(x_N)\to0$. Since $A(x_N)\to s$ by [L2], it follows that $S_N\to s$. [step 2.1, L2] ∎
````

## Wave 13 provenance row

```json
{
  "id": "thm-tauber-converse-for-abel-summability",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://encyclopediaofmath.org/wiki/Tauberian_theorems"
  ],
  "rationale": "The source states Tauber's converse: Abel summability plus a_n=o(1/n) implies ordinary convergence to the Abel sum. The item uses the equivalent shifted condition (n+1)a_n→0 and adapts the standard x_N=1-1/(N+1) proof.",
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
      "source": "lem-tauber-block-estimate",
      "source_section": "Statement",
      "quote": "Suppose $\\iota(n+1)a_n\\to0$. For every $\\varepsilon>0$ there is $N_0$ such that, whenever $q\\ge p\\ge N_0$,\n\n$$\\sum_{n=p}^{q}|a_n|\\le\\varepsilon\\frac{\\iota(q-p+1)}{\\iota(p+1)}.$$\n\nMoreover, for $N\\ge N_0$ and $x_N:=1-1/\\iota(N+1)$,\n\n$$\\sum_{n=N_0}^{N}|a_n|(1-x_N^n)\\le\\varepsilon,\\qquad \\sum_{n>N}|a_n|x_N^n\\le\\varepsilon.$$",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "cor-archimedean-reciprocal",
      "source_section": "Statement",
      "quote": "Let $F$ be a complete ordered field ([[def-complete-ordered-field]]) and let\n$\\varepsilon \\in F$ with $\\varepsilon > 0$. Then there is a natural number\n$n \\ge 1$ such that\n\n$$\\frac{1}{n \\cdot 1_F} < \\varepsilon ,$$\n\nwhere $n \\cdot 1_F$ is the canonical natural of $F$ ([[thm-of-archimedean]]) and\n$1/(n \\cdot 1_F)$ is its multiplicative inverse ([[def-field]]). As is standard\nwe abbreviate $n \\cdot 1_F$ to $n$ and write the conclusion $1/n < \\varepsilon$.\n\nThis is the **reciprocal form** of the Archimedean property.\n[[thm-of-archimedean]] on its own delivers only the assertion that the canonical\nnaturals are cofinal, $x < n \\cdot 1_F$; the form actually used in analysis, that\nthe reciprocals of the naturals get below every positive bound, is the statement\nabove, and it is recorded separately so that no proof has to reconstruct the\ninversion step in passing.",
      "quote_selection": "full-source-section",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-of-naturals-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field, with field structure as in [[def-field]], and for\n$n \\ge 1$ let $n \\cdot 1_F$ denote the canonical natural number\n$\\underbrace{1_F + \\cdots + 1_F}_{n}$, defined recursively by $1 \\cdot 1_F = 1_F$\nand $(n+1) \\cdot 1_F = n \\cdot 1_F + 1_F$. Then for every $n \\ge 1$:\n\n- $n \\cdot 1_F > 0$ and $(n+1) \\cdot 1_F > n \\cdot 1_F$;\n- the map $n \\mapsto n \\cdot 1_F$ is strictly increasing, hence injective, on $\\{1, 2, 3, \\dots\\}$;\n- $(m+n) \\cdot 1_F = m \\cdot 1_F + n \\cdot 1_F$ and $(mn) \\cdot 1_F = (m \\cdot 1_F)(n \\cdot 1_F)$ for all $m, n \\ge 1$.",
      "quote_selection": "full-source-section",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-of-inverse-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b \\in F$.\n\n1. If $a > 0$ then $a^{-1} > 0$.\n2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.",
      "quote_selection": "full-source-section",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-abel-and-cesaro-summability-of-a-series",
      "source_section": "Definition",
      "quote": "For a real series $\\sum_{n\\ge0}a_n$, write its inclusive partial sums as\n\n$$S_n:=\\sum_{k=0}^{n}a_k$$\n\nand their Cesaro means as\n\n$$\\sigma_n:=\\frac1{\\iota(n+1)}\\sum_{k=0}^{n}S_k.$$\n\nThe series is **Cesaro summable to $s$** if $\\sigma_n\\to s$ ([[def-cesaro-mean]]).\n\nIt is **Abel summable to $s$** if the power series\n\n$$A(x):=\\sum_{n=0}^{\\infty}a_nx^n$$\n\nconverges for every $0\\le x<1$ and $\\lim_{x\\uparrow1}A(x)=s$ in the one-sided sense of [[def-function-limit]]. These are summability methods for the zero-indexed series of [[def-series]]; they do not assert ordinary convergence.",
      "quote_selection": "full-source-section",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-real-limit",
      "source_section": "Definition",
      "quote": "A sequence $(x_k)$ of reals **converges** to $x \\in \\mathbb{R}$ when for\nevery rational $\\varepsilon > 0$ there is $K$ with\n$|x_k - x| < \\hat\\varepsilon$ for all $k \\ge K$. It is **Cauchy** when for\nevery rational $\\varepsilon > 0$ there is $K$ with\n$|x_k - x_l| < \\hat\\varepsilon$ for all $k, l \\ge K$.",
      "quote_selection": "full-source-section",
      "uses": [
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Write $S_N:=\\sum_{n=0}^{N}a_n$. For $N\\ge1$, one has $S_N-A(x_N)=\\sum_{n=0}^{N}a_n(1-x_N^n)-\\sum_{n>N}a_nx_N^n$.",
      "step": "1.1",
      "inputs": [
        "given",
        "algebra"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Given $\\varepsilon>0$, choose $N_0$ from [L1]. The part of the first sum with $n<N_0$ tends to $0$ because it is finite and $x_N\\to1$; the remaining part and the tail have absolute value at most $\\varepsilon$ each by [L1].",
      "step": "2.1",
      "inputs": [
        "L1",
        "step 1.1"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "Hence $S_N-A(x_N)\\to0$. Since $A(x_N)\\to s$ by [L2], it follows that $S_N\\to s$.",
      "step": "3.1",
      "inputs": [
        "L2",
        "step 2.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "thm-tauber-converse-for-abel-summability: the Statement fixes the displayed objects and has no conclusion depending on an unlicensed choice from an empty family: Let $\\sum_{n\\ge0}a_n$ be Abel summable to $s$. If $$\\iota(n+1)a_n\\longrightarrow0,$$ then its ordinary partial sums converge to $s$."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "thm-tauber-converse-for-abel-summability: no independent zero-parameter boundary remains after the stated hypotheses and definitions; checked against the Statement: Let $\\sum_{n\\ge0}a_n$ be Abel summable to $s$. If $$\\iota(n+1)a_n\\longrightarrow0,$$ then its ordinary partial sums converge to $s$."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "step 1.1: the proof explicitly handles the unit value, first index, or limit at one relevant to the assertion."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "thm-tauber-converse-for-abel-summability: no geometric or algebraic degeneracy changes the asserted conclusion; checked against the Statement: Let $\\sum_{n\\ge0}a_n$ be Abel summable to $s$. If $$\\iota(n+1)a_n\\longrightarrow0,$$ then its ordinary partial sums converge to $s$."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "step 1.1: the proof explicitly treats the endpoint, boundary, or radial-limit behaviour used by the assertion."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 2.1: every witness selected there is drawn after the proof establishes the relevant positivity, existence, or nonemptiness condition."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "thm-tauber-converse-for-abel-summability: the Statement is not an equivalence, so there is no forward implication obligation: Let $\\sum_{n\\ge0}a_n$ be Abel summable to $s$. If $$\\iota(n+1)a_n\\longrightarrow0,$$ then its ordinary partial sums converge to $s$."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "thm-tauber-converse-for-abel-summability: the Statement is not an equivalence, so there is no reverse implication obligation: Let $\\sum_{n\\ge0}a_n$ be Abel summable to $s$. If $$\\iota(n+1)a_n\\longrightarrow0,$$ then its ordinary partial sums converge to $s$."
    }
  ]
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "thm-tauber-converse-for-abel-summability",
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
    "source": "thm-tauber-converse-for-abel-summability",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "lem-tauber-block-estimate",
    "declared_target": "lem-tauber-block-estimate",
    "target_statement_provenance": "ai-altered",
    "targetPage": "power-series-and-real-analytic-functions",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-tauber-converse-for-abel-summability",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "cor-archimedean-reciprocal",
    "declared_target": "cor-archimedean-reciprocal",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-tauber-converse-for-abel-summability",
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
  },
  {
    "source": "thm-tauber-converse-for-abel-summability",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "lem-of-inverse-positive",
    "declared_target": "lem-of-inverse-positive",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-tauber-converse-for-abel-summability",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "def-real-limit",
    "declared_target": "def-real-limit",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
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

### `cor-archimedean-reciprocal`

````markdown
---
id: cor-archimedean-reciprocal
kind: corollary
title: "For every $\\varepsilon > 0$ in a complete ordered field there is a natural $n \\ge 1$ with $1/n < \\varepsilon$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-of-archimedean, lem-of-inverse-positive, def-complete-ordered-field, def-ordered-field, def-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (Thm 1.20(a) and its corollaries)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §5.4 (Prop. 5.4.12, the Archimedean property)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "UTSA Mathematics: The Archimedean property"
      url: "https://mathresearch.utsa.edu/wiki/index.php?title=Real_Numbers%3AArchimedean_Property"
---

## Statement

Let $F$ be a complete ordered field ([[def-complete-ordered-field]]) and let
$\varepsilon \in F$ with $\varepsilon > 0$. Then there is a natural number
$n \ge 1$ such that

$$\frac{1}{n \cdot 1_F} < \varepsilon ,$$

where $n \cdot 1_F$ is the canonical natural of $F$ ([[thm-of-archimedean]]) and
$1/(n \cdot 1_F)$ is its multiplicative inverse ([[def-field]]). As is standard
we abbreviate $n \cdot 1_F$ to $n$ and write the conclusion $1/n < \varepsilon$.

This is the **reciprocal form** of the Archimedean property.
[[thm-of-archimedean]] on its own delivers only the assertion that the canonical
naturals are cofinal, $x < n \cdot 1_F$; the form actually used in analysis, that
the reciprocals of the naturals get below every positive bound, is the statement
above, and it is recorded separately so that no proof has to reconstruct the
inversion step in passing.

## Facts & Assumptions

**Given:** A complete ordered field $F$ and an element $\varepsilon \in F$ with $\varepsilon > 0$.

[L1] Archimedean property: for every $x \in F$ there is a natural number $n \ge 1$ with $x < n \cdot 1_F$ ([[thm-of-archimedean]], [[def-complete-ordered-field]]).

[L2] Inverses and order: if $a > 0$ then $a^{-1} > 0$, and if $0 < a < b$ then $0 < b^{-1} < a^{-1}$ ([[lem-of-inverse-positive]], [[def-ordered-field]]).

[L3] Field arithmetic: an element $a$ with $a > 0$ is nonzero by trichotomy, hence has a multiplicative inverse $a^{-1}$, and $(a^{-1})^{-1} = a$ ([[def-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Since $\varepsilon > 0$, trichotomy gives $\varepsilon \ne 0$, so $\varepsilon^{-1}$ exists, and $\varepsilon^{-1} > 0$. [given, L2, L3]

2.1 Apply [L1] to $x = \varepsilon^{-1}$: fix a natural number $n \ge 1$ with $\varepsilon^{-1} < n \cdot 1_F$. [step 1.1, L1, choose]

3.1 Chaining the two displayed inequalities gives $0 < \varepsilon^{-1} < n \cdot 1_F$; in particular $n \cdot 1_F > 0$, so $n \cdot 1_F \ne 0$ and $1/(n \cdot 1_F)$ is defined. [step 1.1, step 2.1, L3]

4.1 Apply the second claim of [L2] with $a = \varepsilon^{-1}$ and $b = n \cdot 1_F$: $0 < (n \cdot 1_F)^{-1} < (\varepsilon^{-1})^{-1}$. [step 3.1, L2]

5.1 By [L3], $(\varepsilon^{-1})^{-1} = \varepsilon$, so the natural number $n \ge 1$ fixed in step 2.1 satisfies $1/(n \cdot 1_F) < \varepsilon$, which is the assertion. [step 4.1, L3] ∎

## Remarks

- **Monotonicity gives the eventual form for free.** If $m \ge n \ge 1$ then
  $m \cdot 1_F \ge n \cdot 1_F > 0$, because $k \mapsto k \cdot 1_F$ is strictly
  increasing on the naturals $\ge 1$ ([[lem-of-naturals-positive]]), and so
  $1/(m \cdot 1_F) \le 1/(n \cdot 1_F) < \varepsilon$ by [[lem-of-inverse-positive]]
  again. So the corollary yields not merely one index but a threshold: every
  $m \ge n$ satisfies $1/m < \varepsilon$. That one extra line is what a
  convergence proof needs, and it is left to the caller rather than folded into
  the statement, because the caller usually has a threshold of its own to combine
  it with.

- **Completeness is used only through [[thm-of-archimedean]].** Nothing here
  needs the least-upper-bound property directly. The corollary therefore holds
  verbatim in any Archimedean ordered field, in particular in $\mathbb{Q}$, and
  it fails in a non-Archimedean ordered field, where an infinitesimal
  $\varepsilon > 0$ is below every $1/n$ by construction.

- The equivalence is exact: the reciprocal form implies the cofinal form back
  again, since given $x > 0$ one applies it to $\varepsilon = 1/x$. The two are
  the same property written on the two sides of the inversion, and only the
  direction proved above is used in this library.
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

### `def-real-limit`

````markdown
---
id: def-real-limit
kind: definition
title: "Limits and Cauchy sequences of reals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-numbers, def-real-order]
aliases: []
verification:
  precheck: n/a
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
pipeline_run: null
---

## Definition

A sequence $(x_k)$ of reals **converges** to $x \in \mathbb{R}$ when for
every rational $\varepsilon > 0$ there is $K$ with
$|x_k - x| < \hat\varepsilon$ for all $k \ge K$. It is **Cauchy** when for
every rational $\varepsilon > 0$ there is $K$ with
$|x_k - x_l| < \hat\varepsilon$ for all $k, l \ge K$.

## Remarks

- Quantifying over rational $\varepsilon$ loses nothing: below any real
  $\varepsilon > 0$ lies a positive rational ([[lem-rat-embeds-dense]]).
- $|\cdot|$ is the absolute value of [[def-real-order]].
````

### `lem-of-inverse-positive`

````markdown
---
id: lem-of-inverse-positive
kind: lemma
title: "Inverses of positives are positive, and reciprocation reverses order"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-ordered-field, lem-of-sign-rules, cor-of-one-positive]
aliases: []
landmark: false
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
    - title: "University of Innsbruck notes: Ordered fields"
      url: "https://www.uibk.ac.at/media/filer_public/28/02/280225fd-dde6-4e9c-bff6-baad33ff4a05/ragen.pdf"
pipeline_run: null
proof_strategy: direct
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and
let $a, b \in F$.

1. If $a > 0$ then $a^{-1} > 0$.
2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.

## Facts & Assumptions

**Given:** An ordered field $F$ with positive cone $P$, and elements $a, b \in F$.

[L1] $x > 0 \iff x \in P$; $x < 0 \iff -x \in P$; and for $x \neq 0$ exactly one of $x \in P$, $-x \in P$ holds ([[def-ordered-field]]).

[L2] Sign rules: a product of a positive and a negative is negative, a product of two positives is positive, and for $c > 0$ one has $a < b \iff ac < bc$ ([[lem-of-sign-rules]]).

[L3] $0 < 1$; in particular $1 \neq 0$ ([[cor-of-one-positive]]).

[L4] $P$ is closed under addition, so $<$ is transitive ([[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Assume $a > 0$, so $a \neq 0$ and its inverse $a^{-1}$ exists with $a \cdot a^{-1} = 1$; moreover $a^{-1} \neq 0$, since $a^{-1}$ has $a$ as its inverse while $0$ is non-invertible ($1 \neq 0$ by L3). [assume-hyp, L1, L3]

2.1 By trichotomy $a^{-1} \in P$ or $-a^{-1} \in P$; if $-a^{-1} \in P$, then $a > 0$ and $a^{-1} < 0$ give $a \cdot a^{-1} < 0$ by the sign rules, i.e. $1 < 0$, contradicting $0 < 1$; hence $a^{-1} \in P$, i.e. $a^{-1} > 0$, proving claim 1. [step 1.1, L2, L3, L1]

3.1 Assume $0 < a < b$; then $0 < b$ by transitivity, so by claim 1 both $a^{-1} > 0$ and $b^{-1} > 0$, and the sign rules give $a^{-1} b^{-1} > 0$. [assume-hyp, step 2.1, L4, L2, L1]

4.1 Multiplying $a < b$ by the positive $a^{-1} b^{-1}$ via the sign rules gives $a (a^{-1} b^{-1}) < b (a^{-1} b^{-1})$; since $a a^{-1} = 1$ and $b b^{-1} = 1$, this simplifies to $b^{-1} < a^{-1}$. [step 3.1, L2, algebra]

5.1 Together with $b^{-1} > 0$ from step 3.1, we conclude $0 < b^{-1} < a^{-1}$, proving claim 2. [step 3.1, step 4.1] ∎
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

### `lem-tauber-block-estimate`

````markdown
---
id: lem-tauber-block-estimate
kind: lemma
title: "If $\\iota(n+1)a_n\\to0$, short multiplicative blocks of the coefficients have uniformly small sums"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-real-limit, lem-rat-embeds-dense, def-canonical-natural, lem-of-naturals-positive, lem-of-inverse-positive, lem-of-abs-value, thm-geometric-series]
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
    - title: "Tauberian theorem, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Tauberian_theorem"
    - title: "Tauberian theorems, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Tauberian_theorems"
pipeline_run: null
---

## Statement

Suppose $\iota(n+1)a_n\to0$. For every $\varepsilon>0$ there is $N_0$ such that, whenever $q\ge p\ge N_0$,

$$\sum_{n=p}^{q}|a_n|\le\varepsilon\frac{\iota(q-p+1)}{\iota(p+1)}.$$

Moreover, for $N\ge N_0$ and $x_N:=1-1/\iota(N+1)$,

$$\sum_{n=N_0}^{N}|a_n|(1-x_N^n)\le\varepsilon,\qquad \sum_{n>N}|a_n|x_N^n\le\varepsilon.$$

## Facts & Assumptions

**Given:** The Tauber condition $\iota(n+1)a_n\to0$.

[L1] The canonical naturals $\iota(n+1)$ are positive and strictly increasing, positive reciprocals reverse order, and $|uv|=|u||v|$ ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]], [[lem-of-abs-value]]).

[L2] Real-sequence convergence is tested with positive rational tolerances, and below every positive real lies a positive rational ([[def-real-limit]], [[lem-rat-embeds-dense]]).

[L3] For $0\le x\le1$, multiplying out the finite sum gives $1-x^n=(1-x)\sum_{k=0}^{n-1}x^k\le\iota(n)(1-x)$.

[L4] For $0\le x<1$, the geometric-series formula gives $\sum_{n>N}x^n=x^{N+1}/(1-x)$ ([[thm-geometric-series]]).

## Proof

**Proof technique:** direct.

1.1 Choose a positive rational $\delta<\varepsilon$. By the limit hypothesis and [L2], choose $N_0$ so that $|\iota(n+1)a_n|<\delta$ for $n\ge N_0$. Positivity and multiplicativity in [L1] give $|a_n|<\delta/\iota(n+1)<\varepsilon/\iota(n+1)$ there. Since $1/\iota(n+1)\le1/\iota(p+1)$ on $p\le n\le q$, summing proves the block estimate. [L1, L2, choose, algebra]

2.1 For $N_0\le n\le N$, [L3] gives $|a_n|(1-x_N^n)\le\varepsilon(1-x_N)$. There are at most $N+1$ terms and $\iota(N+1)(1-x_N)=1$, proving the first weighted estimate. [step 1.1, L3, algebra]

3.1 For $n>N$, step 1.1 gives $|a_n|\le\varepsilon/\iota(N+2)$. Summing the geometric tail yields $\sum_{n>N}|a_n|x_N^n\le\varepsilon x_N^{N+1}\iota(N+1)/\iota(N+2)\le\varepsilon$. [step 1.1, L4, algebra] ∎
````

