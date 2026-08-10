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

- high risk (6): 2 cited facts; biconditional / both-direction claim; analytic limiting/completeness language

## Target item — `fs-power-series-uniform-on-its-open-interval`

Normalized current SHA-256: `19b30529b3ed1050ca97723a7a545c0a90ebe9e282e5b709be55209369ead5d4`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: fs-power-series-uniform-on-its-open-interval
kind: false-statement
title: "FALSE: every power series converges uniformly on its entire open interval of convergence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-geometric-series, thm-uniform-cauchy-criterion-real-functions, def-pointwise-uniform-and-uniformly-cauchy-convergence]
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
    - title: "MIT 18.100C, Lecture 11: Power Series"
      url: "https://ocw.mit.edu/courses/18-100c-real-analysis-fall-2012/1058808e5cb57c986118333f8b6fa0d7_MIT18_100CF12_l11sum.pdf"
    - title: "Power series, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Power_series"
pipeline_run: null
---

## Statement

**False claim:** every real power series converges uniformly on its entire open interval of convergence.

## Facts & Assumptions

**Given:** The geometric power series $\sum_{n\ge0}x^n$ on $(-1,1)$.

[L1] It converges pointwise there to $1/(1-x)$ ([[thm-geometric-series]]).

[L2] A sequence of real-valued functions converges uniformly if and only if it is uniformly Cauchy ([[thm-uniform-cauchy-criterion-real-functions]]).

## Refutation

**Proof technique:** direct.

1.1 For every $N$, the difference between the $(N+1)$st and $N$th partial sums is $x^N$. Its supremum over $x\in(-1,1)$ is $1$. [given, algebra]

2.1 Thus the partial sums are not uniformly Cauchy and cannot converge uniformly by [L2], despite pointwise convergence on the entire open radius interval by [L1]. [step 1.1, L1, L2] ∎
````

## Wave 13 provenance row

```json
{
  "id": "fs-power-series-uniform-on-its-open-interval",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://encyclopediaofmath.org/wiki/Power_series"
  ],
  "rationale": "The source states uniform convergence on compact subsets rather than on the whole open interval. The item formulates the stronger false claim and refutes it with the geometric series by an explicit local computation.",
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
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-uniform-cauchy-criterion-real-functions",
      "source_section": "Statement",
      "quote": "Let $X$ be a set and let $f_k:X\\to\\mathbb{R}$ for every\n$k\\in\\mathbb{N}$. Then $(f_k)$ converges uniformly on $X$ to some\n$f:X\\to\\mathbb{R}$ if and only if $(f_k)$ is uniformly Cauchy on $X$\n([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "For every $N$, the difference between the $(N+1)$st and $N$th partial sums is $x^N$. Its supremum over $x\\in(-1,1)$ is $1$.",
      "step": "1.1",
      "inputs": [
        "given",
        "algebra"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Thus the partial sums are not uniformly Cauchy and cannot converge uniformly by [L2], despite pointwise convergence on the entire open radius interval by [L1].",
      "step": "2.1",
      "inputs": [
        "L2",
        "L1",
        "step 1.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "fs-power-series-uniform-on-its-open-interval: the Statement fixes the displayed objects and has no conclusion depending on an unlicensed choice from an empty family: **False claim:** every real power series converges uniformly on its entire open interval of convergence."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "fs-power-series-uniform-on-its-open-interval: no independent zero-parameter boundary remains after the stated hypotheses and definitions; checked against the Statement: **False claim:** every real power series converges uniformly on its entire open interval of convergence."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "fs-power-series-uniform-on-its-open-interval: the assertion has no separate unit-size case; its quantified argument applies without a one-case split: **False claim:** every real power series converges uniformly on its entire open interval of convergence."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "fs-power-series-uniform-on-its-open-interval: no geometric or algebraic degeneracy changes the asserted conclusion; checked against the Statement: **False claim:** every real power series converges uniformly on its entire open interval of convergence."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Statement: the assertion expressly restricts to the open/interior regime, leaving endpoint behaviour outside its quantifiers: **False claim:** every real power series converges uniformly on its entire open interval of convergence."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "fs-power-series-uniform-on-its-open-interval: the proof uses only given objects, formulas, or universal instantiation and makes no choice from a possibly empty family; see Statement: **False claim:** every real power series converges uniformly on its entire open interval of convergence."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "fs-power-series-uniform-on-its-open-interval: the Statement is not an equivalence, so there is no forward implication obligation: **False claim:** every real power series converges uniformly on its entire open interval of convergence."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "fs-power-series-uniform-on-its-open-interval: the Statement is not an equivalence, so there is no reverse implication obligation: **False claim:** every real power series converges uniformly on its entire open interval of convergence."
    }
  ]
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "fs-power-series-uniform-on-its-open-interval",
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
    "source": "fs-power-series-uniform-on-its-open-interval",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "thm-uniform-cauchy-criterion-real-functions",
    "declared_target": "thm-uniform-cauchy-criterion-real-functions",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-convergence-of-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-power-series-uniform-on-its-open-interval",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "def-pointwise-uniform-and-uniformly-cauchy-convergence",
    "declared_target": "def-pointwise-uniform-and-uniformly-cauchy-convergence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-convergence-of-functions",
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

### `def-pointwise-uniform-and-uniformly-cauchy-convergence`

````markdown
---
id: def-pointwise-uniform-and-uniformly-cauchy-convergence
kind: definition
title: "Pointwise convergence, uniform convergence, and the uniformly Cauchy condition for sequences of real-valued functions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function-space, def-real-limit, cor-archimedean-reciprocal]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-10
    scope: published-audit
    delegated_by: owner
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

Let $X$ be a set and, for each $k \in \mathbb{N}$, let
$f_k : X \to \mathbb{R}$ be a real-valued function
([[def-function-space]]). Let $f : X \to \mathbb{R}$.

The sequence $(f_k)$ **converges pointwise** to $f$ on $X$ when, for every
$x \in X$, the real sequence $(f_k(x))$ converges to $f(x)$
([[def-real-limit]]). Thus the index after which
$|f_k(x)-f(x)|<\varepsilon$ may depend on both $\varepsilon$ and $x$.

The sequence $(f_k)$ **converges uniformly** to $f$ on $X$ when

$$(\forall \varepsilon>0)(\exists N\in\mathbb{N})(\forall k\ge N)(\forall x\in X)\quad |f_k(x)-f(x)|<\varepsilon,$$

where $\varepsilon$ ranges over the positive reals. Here one index $N$ serves
every point of $X$.

The sequence $(f_k)$ is **uniformly Cauchy** on $X$ when

$$(\forall \varepsilon>0)(\exists N\in\mathbb{N})(\forall m,n\ge N)(\forall x\in X)\quad |f_m(x)-f_n(x)|<\varepsilon.$$

For each of the three notions above, restricting the error to positive
rationals gives an equivalent condition. The real-error condition immediately
implies the rational-error condition. Conversely, given a real $\eta>0$,
choose $n\ge1$ with $1/n<\eta$ by
[[cor-archimedean-reciprocal]]; the condition for the positive rational
$1/n$ implies the condition for $\eta$. The real-error form is used because
it makes the uniform quantifiers transparent.
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

### `thm-uniform-cauchy-criterion-real-functions`

````markdown
---
id: thm-uniform-cauchy-criterion-real-functions
kind: theorem
title: "A sequence of real-valued functions converges uniformly if and only if it is uniformly Cauchy"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pointwise-uniform-and-uniformly-cauchy-convergence, thm-cauchy-criterion-via-lub, lem-of-triangle-inequality]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-10
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Stanford Math 63CM, Additional Lecture Notes, Theorem 1.12"
      url: "https://math.stanford.edu/~ryzhik/STANFORD/STANF63CM-20/lecture-notes-63cm-20-prelim.pdf"
    - title: "W. Trench, Introduction to Real Analysis"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a set and let $f_k:X\to\mathbb{R}$ for every
$k\in\mathbb{N}$. Then $(f_k)$ converges uniformly on $X$ to some
$f:X\to\mathbb{R}$ if and only if $(f_k)$ is uniformly Cauchy on $X$
([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

## Facts & Assumptions

**Given:** A set $X$ and a sequence of functions $f_k:X\to\mathbb{R}$.

[A1] Uniform convergence to $f$ means that for every real $\varepsilon>0$ there is $N$ such that $|f_k(x)-f(x)|<\varepsilon$ for every $k\ge N$ and every $x\in X$ ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

[A2] Uniform Cauchyness means that for every real $\varepsilon>0$ there is $N$ such that $|f_m(x)-f_n(x)|<\varepsilon$ for every $m,n\ge N$ and every $x\in X$ ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

[A3] Pointwise convergence as defined through real sequences can equivalently be tested with every positive real error ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

[L1] For reals $u,v$, $|u+v|\le |u|+|v|$ ([[lem-of-triangle-inequality]]).

[L2] Every Cauchy sequence of reals converges to a real ([[thm-cauchy-criterion-via-lub]]).

## Proof

**Proof technique:** direct.

1.1 Suppose first that $f_k\to f$ uniformly on $X$, and let $\varepsilon>0$ be real. By [A1] choose $N$ with $|f_j(x)-f(x)|<\varepsilon/2$ for every $j\ge N$ and $x\in X$. Thus, for $m,n\ge N$ and $x\in X$, $|f_m(x)-f_n(x)|\le |f_m(x)-f(x)|+|f(x)-f_n(x)|<\varepsilon$. Since $\varepsilon$ was arbitrary, $(f_k)$ is uniformly Cauchy. [A1, A2, L1, choose, algebra]

1.2 Conversely, suppose that $(f_k)$ is uniformly Cauchy on $X$. For each $x\in X$, [A2] makes $(f_k(x))$ a Cauchy real sequence; by [L2] it has a real limit $f(x)$. These values define a function $f:X\to\mathbb{R}$. [A2, L2, construct]

1.3 Under this converse assumption, let $\varepsilon>0$ be real and choose $N$ such that $|f_m(x)-f_n(x)|<\varepsilon/2$ for every $m,n\ge N$ and every $x\in X$. [A2, choose]

2.1 Fix $k\ge N$ and $x\in X$. Pointwise convergence at $x$ gives a threshold $M$ such that $|f_n(x)-f(x)|<\varepsilon/2$ for $n\ge M$. Choose $n\ge N,M$. Then $|f_k(x)-f(x)|\le |f_k(x)-f_n(x)|+|f_n(x)-f(x)|<\varepsilon$. [step 1.2, step 1.3, A3, L1, choose]

3.1 The index $N$ in step 1.3 is independent of $k$ and $x$, so step 2.1 proves $f_k\to f$ uniformly. Together with step 1.1 this proves both directions. [step 1.1, step 2.1, A1] ∎
````

