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

- Wave 14 ai-generated Statement seed
- Wave 14 generated-risk seed (cone 0)

## Target item — `rem-exponential-roadmap-and-circularity`

Normalized current SHA-256: `d53803c17d5d91930101b6ec6d0488e1d720db3398e7370bebc15df48048ca72`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: rem-exponential-roadmap-and-circularity
kind: remark
title: "The exponential roadmap and its circularity hazards"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-applicable
deps: [thm-exponential-definition-equivalence, cor-exponential-is-a-bijection-onto-positive-reals, thm-exponential-beats-every-polynomial, thm-e-is-irrational]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "J. Lebl, Basic Analysis, Analytic Functions"
      url: "https://www.jirka.org/ra/html/sec_analfuncs.html"
pipeline_run: null
---

## Remarks

The equivalence theorem [[thm-exponential-definition-equivalence]] is an identification after independent proofs, not a list of mutually supporting definitions. The power series first defines $\exp$; the addition law is proved by an absolutely convergent Cauchy product; differentiation is then termwise. Only after those steps are the differential-equation and functional-equation characterizations invoked.

The bijection onto the positive reals ([[cor-exponential-is-a-bijection-onto-positive-reals]]), polynomial domination ([[thm-exponential-beats-every-polynomial]]), and irrationality of $e$ ([[thm-e-is-irrational]]) use no logarithm. Each result is therefore independent of an inverse function and of real exponentiation.
````

## Wave 14 provenance row

```json
{
  "id": "rem-exponential-roadmap-and-circularity",
  "statement": "ai-generated",
  "proof": "not-applicable",
  "evidence": "none",
  "urls": [],
  "rationale": "This is a bespoke description of this repository's dependency order and explicitly names its own local theorem graph. Literature can support the mathematics it mentions but cannot contain this corpus-specific roadmap; it is therefore positively identified as locally invented. A remark of this kind supplies no proof.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

## Exact-current proof contract

No Wave 14 proof contract is required for this target.

## Generated audit-manifest relationships

```json
[
  {
    "source": "rem-exponential-roadmap-and-circularity",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "thm-exponential-definition-equivalence",
    "declared_target": "thm-exponential-definition-equivalence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-exponential-function",
    "targetBatch": "wave14-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-exponential-roadmap-and-circularity",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "cor-exponential-is-a-bijection-onto-positive-reals",
    "declared_target": "cor-exponential-is-a-bijection-onto-positive-reals",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-exponential-function",
    "targetBatch": "wave14-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-exponential-roadmap-and-circularity",
    "sourcePage": "the-exponential-function",
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
    "source": "rem-exponential-roadmap-and-circularity",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "thm-e-is-irrational",
    "declared_target": "thm-e-is-irrational",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-exponential-function",
    "targetBatch": "wave14-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  }
]
```

## Relevant current generated-risk rows

```json
[
  {
    "id": "rem-exponential-roadmap-and-circularity",
    "file": "items/rem-exponential-roadmap-and-circularity.md",
    "source": "provenance",
    "cone_size": 0,
    "logical_consumers": [],
    "direct_citation_consumers": [],
    "disposition": {
      "status": "pending",
      "by": "",
      "notes": ""
    }
  }
]
```

## Full exact-current text of every cited or declared item (4)

### `cor-exponential-is-a-bijection-onto-positive-reals`

````markdown
---
id: cor-exponential-is-a-bijection-onto-positive-reals
kind: corollary
title: "The exponential is a continuous bijection from $\\mathbb{R}$ onto $(0,\\infty)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-exponential-is-strictly-increasing, thm-exponential-limits-and-range, thm-intermediate-value, cor-power-series-sums-are-continuous]
justified_by: []
aliases: []
landmark: true
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
pipeline_run: null
---

## Statement

$$\exp:\mathbb R\longrightarrow(0,\infty)$$
is a bijection.

## Facts & Assumptions

**Given:** The real exponential function.

[L1] It is strictly increasing ([[thm-exponential-is-strictly-increasing]]) and continuous ([[cor-power-series-sums-are-continuous]]).

[L2] Its values are positive, and its limits at the two ends are $0$ and $+\infty$ ([[thm-exponential-limits-and-range]]).

[L3] A continuous function on an interval takes every intermediate value ([[thm-intermediate-value]]).

## Proof

**Proof technique:** direct.

1.1 Strict increase gives injectivity.  [L1]

1.2 Given $y>0$, [L2] provides $a<b$ with $\exp(a)<y<\exp(b)$. Applying [L3] on $[a,b]$ gives $c$ with $\exp(c)=y$.  [L1, L2, L3, choose]

2.1 Positivity gives the stated codomain, and steps 1.1 and 1.2 give bijectivity.  [step 1.1, step 1.2, L2] ∎
````

### `thm-e-is-irrational`

````markdown
---
id: thm-e-is-irrational
kind: theorem
title: "The number $e$ is irrational"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-exponential-factorial-tail-bound, def-real-exponential-function-and-e, def-rationals, def-integers, def-factorial-and-falling-factorial, thm-of-archimedean, def-canonical-natural, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "J. Lebl, Basic Analysis, Analytic Functions"
      url: "https://www.jirka.org/ra/html/sec_analfuncs.html"
    - title: "MIT Proofs in Analysis and Probability, Lecture 2 notes"
      url: "https://math.mit.edu/classes/proofsiap/notes/Lecture2.pdf"
    - title: "LSU MATH 7230, Homework 1"
      url: "https://www.math.lsu.edu/~mahlburg/teaching/handouts/2018-7230/HW1.pdf"
pipeline_run: null
---

## Statement

The number $e$ is irrational.

## Facts & Assumptions

**Given:** The series definition of $e$ ([[def-real-exponential-function-and-e]]).

[L1] Factorials are nonzero naturals and obey their recurrence, and every positive natural has a positive, hence nonzero, canonical real image ([[def-factorial-and-falling-factorial]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L2] The exponential factorial tail is bounded by [[lem-exponential-factorial-tail-bound]].

## Proof

**Proof technique:** contradiction.

1.1 Assume $e=p/q$ with integers $p$ and $q\ge1$ ([[def-rationals]], [[def-integers]]). Choose a natural $n\ge\max\{q,2\}$ ([[thm-of-archimedean]]).  [assume-contra, choose]

2.1 Put $A:=\iota(n!)\left(e-\sum_{k=0}^{n}1/\iota(k!)\right)$. Every tail term is positive, so $A>0$. Applying [L2] with $x=1$ and $N=n$, then using the factorial recurrence, gives $$ A\le \frac{2\iota(n!)}{\iota((n+1)!)} =\frac2{\iota(n+1)} \le\frac23<1 $$ because $n\ge2$.  [step 1.1, L1, L2, algebra]

3.1 The number $A$ from step 2.1 is an integer: both $\iota(n!)e=\iota(n!)p/q$ and every $\iota(n!)/\iota(k!)$ are integers because $q\mid n!$ and $k!\mid n!$.  [step 1.1, L1, algebra]

4.1 No integer lies strictly between $0$ and $1$, contradicting steps 3.1 and 2.1. Therefore $e\notin\mathbb Q$.  [step 3.1, step 2.1, discharge-contradiction] ∎
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

### `thm-exponential-definition-equivalence`

````markdown
---
id: thm-exponential-definition-equivalence
kind: theorem
title: "The power-series, product-limit, IVP, functional-equation, and Picard definitions agree"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-real-exponential-function-and-e, thm-derivative-of-exponential, thm-exponential-product-limit, thm-exponential-ivp-uniqueness, thm-normalized-exponential-functional-equation, thm-picard-iterates-for-exponential]
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
    - title: "J. Lebl, Basic Analysis, Analytic Functions"
      url: "https://www.jirka.org/ra/html/sec_analfuncs.html"
    - title: "University of Pennsylvania MATH 3600, Section 34"
      url: "https://www2.math.upenn.edu/~ancoop/3600/section-34.html"
    - title: "J. Lebl, Basic Analysis, Picard's Theorem"
      url: "https://www.jirka.org/ra/html/sec_picard.html"
    - title: "J. Lebl, Basic Analysis, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
pipeline_run: null
---

## Statement

The following descriptions give the same function $\mathbb R\to(0,\infty)$: the power series $\sum x^n/\iota(n!)$; the product limit $\lim_n(1+x/\iota(n))^n$; the normalized solution of $y'=y,\ y(0)=1$; the normalized continuous multiplicative function; and the compact-uniform limit of the Picard iterates.

## Facts & Assumptions

**Given:** The five displayed constructions.

[L1] The series is [[def-real-exponential-function-and-e]].

[L2] The series-defined exponential satisfies $\exp'=\exp$ and $\exp(0)=1$, and the product, ODE-uniqueness, functional-equation, and Picard characterizations are [[thm-derivative-of-exponential]], [[thm-exponential-product-limit]], [[thm-exponential-ivp-uniqueness]], [[thm-normalized-exponential-functional-equation]], and [[thm-picard-iterates-for-exponential]].

## Proof

**Proof technique:** direct.

1.1 Each theorem in [L2] identifies its construction with the series-defined function in [L1], with exactly the normalization stated here.  [L1, L2]

2.1 Equality with a common function is transitive, so all five descriptions are equivalent.  [step 1.1, algebra] ∎
````

