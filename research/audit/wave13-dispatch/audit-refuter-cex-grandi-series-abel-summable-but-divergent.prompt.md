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

- high risk (5): 2 cited facts; boundary-sensitive language; analytic limiting/completeness language

## Target item — `cex-grandi-series-abel-summable-but-divergent`

Normalized current SHA-256: `cf1fed044d83ed9e9bf9c9b5476d8f3df32cf48a3ac9abca557f6b1b713df4e0`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: cex-grandi-series-abel-summable-but-divergent
kind: counterexample
title: "Grandi's series is Abel summable to $1/2$ but its partial sums do not converge"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [fs-abel-summability-implies-ordinary-convergence, thm-geometric-series, def-abel-and-cesaro-summability-of-a-series]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Abel summability, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Abel_summability_method"
    - title: "S. Semmes, Rice Math 322 notes"
      url: "https://math.rice.edu/~semmes/math322.pdf"
pipeline_run: null
---

## Statement

Grandi's series $1-1+1-1+\cdots$ is Abel summable to $1/2$ but diverges ordinarily.

## Facts & Assumptions

**Given:** Coefficients $a_n=(-1)^n$.

[L1] For $0\le x<1$, $\sum_{n\ge0}(-1)^nx^n=1/(1+x)$ ([[thm-geometric-series]]).

[L2] Abel summability and ordinary convergence are defined through the boundary limit and partial sums, respectively ([[def-abel-and-cesaro-summability-of-a-series]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], the Abel transform tends to $1/2$ as $x\uparrow1$. [L1, L2]

2.1 The partial sums alternate between $1$ and $0$, so they diverge. This concretely refutes [[fs-abel-summability-implies-ordinary-convergence]]. [given, L2] ∎
````

## Wave 13 provenance row

```json
{
  "id": "cex-grandi-series-abel-summable-but-divergent",
  "statement": "literature-derived",
  "proof": "ai-generated",
  "evidence": "exact-source",
  "urls": [
    "https://math.rice.edu/~semmes/math322.pdf"
  ],
  "rationale": "The source explicitly treats Grandi's divergent series and its Abel value 1/2. The item gives the same construction in the library's zero-indexed notation with a local calculation.",
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
      "source": "def-abel-and-cesaro-summability-of-a-series",
      "source_section": "Definition",
      "quote": "For a real series $\\sum_{n\\ge0}a_n$, write its inclusive partial sums as\n\n$$S_n:=\\sum_{k=0}^{n}a_k$$\n\nand their Cesaro means as\n\n$$\\sigma_n:=\\frac1{\\iota(n+1)}\\sum_{k=0}^{n}S_k.$$\n\nThe series is **Cesaro summable to $s$** if $\\sigma_n\\to s$ ([[def-cesaro-mean]]).\n\nIt is **Abel summable to $s$** if the power series\n\n$$A(x):=\\sum_{n=0}^{\\infty}a_nx^n$$\n\nconverges for every $0\\le x<1$ and $\\lim_{x\\uparrow1}A(x)=s$ in the one-sided sense of [[def-function-limit]]. These are summability methods for the zero-indexed series of [[def-series]]; they do not assert ordinary convergence.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "By [L1], the Abel transform tends to $1/2$ as $x\\uparrow1$.",
      "step": "1.1",
      "inputs": [
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "The partial sums alternate between $1$ and $0$, so they diverge. This concretely refutes [[fs-abel-summability-implies-ordinary-convergence]].",
      "step": "2.1",
      "inputs": [
        "L2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "cex-grandi-series-abel-summable-but-divergent: the Statement fixes the displayed objects and has no conclusion depending on an unlicensed choice from an empty family: Grandi's series $1-1+1-1+\\cdots$ is Abel summable to $1/2$ but diverges ordinarily."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "cex-grandi-series-abel-summable-but-divergent: no independent zero-parameter boundary remains after the stated hypotheses and definitions; checked against the Statement: Grandi's series $1-1+1-1+\\cdots$ is Abel summable to $1/2$ but diverges ordinarily."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "step 1.1: the proof explicitly handles the unit value, first index, or limit at one relevant to the assertion."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "cex-grandi-series-abel-summable-but-divergent: no geometric or algebraic degeneracy changes the asserted conclusion; checked against the Statement: Grandi's series $1-1+1-1+\\cdots$ is Abel summable to $1/2$ but diverges ordinarily."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "step 1.1: the proof explicitly treats the endpoint, boundary, or radial-limit behaviour used by the assertion."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "cex-grandi-series-abel-summable-but-divergent: the proof uses only given objects, formulas, or universal instantiation and makes no choice from a possibly empty family; see Statement: Grandi's series $1-1+1-1+\\cdots$ is Abel summable to $1/2$ but diverges ordinarily."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "cex-grandi-series-abel-summable-but-divergent: the Statement is not an equivalence, so there is no forward implication obligation: Grandi's series $1-1+1-1+\\cdots$ is Abel summable to $1/2$ but diverges ordinarily."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "cex-grandi-series-abel-summable-but-divergent: the Statement is not an equivalence, so there is no reverse implication obligation: Grandi's series $1-1+1-1+\\cdots$ is Abel summable to $1/2$ but diverges ordinarily."
    }
  ]
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "cex-grandi-series-abel-summable-but-divergent",
    "sourcePage": "power-series-and-real-analytic-functions-examples",
    "batch": "wave13-real-analysis",
    "target": "fs-abel-summability-implies-ordinary-convergence",
    "declared_target": "fs-abel-summability-implies-ordinary-convergence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "power-series-and-real-analytic-functions",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-grandi-series-abel-summable-but-divergent",
    "sourcePage": "power-series-and-real-analytic-functions-examples",
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
    "source": "cex-grandi-series-abel-summable-but-divergent",
    "sourcePage": "power-series-and-real-analytic-functions-examples",
    "batch": "wave13-real-analysis",
    "target": "def-abel-and-cesaro-summability-of-a-series",
    "declared_target": "def-abel-and-cesaro-summability-of-a-series",
    "target_statement_provenance": "ai-altered",
    "targetPage": "power-series-and-real-analytic-functions",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  }
]
```

## Relevant current generated-risk rows

```json
[]
```

## Full exact-current text of every cited or declared item (3)

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

### `fs-abel-summability-implies-ordinary-convergence`

````markdown
---
id: fs-abel-summability-implies-ordinary-convergence
kind: false-statement
title: "FALSE: Abel summability alone implies ordinary convergence of a series"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-abel-and-cesaro-summability-of-a-series, thm-geometric-series, def-series]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Abel summability, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Abel_summability_method"
    - title: "S. Semmes, Rice Math 322 notes"
      url: "https://math.rice.edu/~semmes/math322.pdf"
    - title: "Tauberian theorems, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Tauberian_theorems"
pipeline_run: null
---

## Statement

**False claim:** every Abel-summable real series converges ordinarily.

## Facts & Assumptions

**Given:** Grandi's series $\sum_{n\ge0}(-1)^n$.

[L1] For $0\le x<1$, the geometric series gives $\sum_{n\ge0}(-1)^nx^n=1/(1+x)$ ([[thm-geometric-series]]).

[L2] Ordinary convergence means convergence of the partial-sum sequence, whereas Abel summability uses the boundary limit of the power series ([[def-series]], [[def-abel-and-cesaro-summability-of-a-series]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], the Abel transform tends to $1/2$ as $x\uparrow1$, so the series is Abel summable to $1/2$. [L1, L2]

2.1 Its inclusive partial sums alternate between $1$ and $0$, so they do not converge. Hence Abel summability alone does not imply ordinary convergence. [given, L2] ∎
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

