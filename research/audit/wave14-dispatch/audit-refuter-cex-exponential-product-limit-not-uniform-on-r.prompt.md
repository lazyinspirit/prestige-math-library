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

- high risk (6): 5 declared dependencies; 4 cited facts; analytic limiting/completeness language
- Wave 14 ai-generated Statement seed
- Wave 14 generated-risk seed (cone 0)

## Target item — `cex-exponential-product-limit-not-uniform-on-r`

Normalized current SHA-256: `f6a7e9b849ebc562f886a49909863bac10c61b51345ff881d6c7409e99b0cda9`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: cex-exponential-product-limit-not-uniform-on-r
kind: counterexample
title: "The convergence $(1+x/n)^n\\to\\exp x$ is not uniform on $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-exponential-product-limit, thm-exponential-addition-formula, cor-two-less-than-e-less-than-three, def-pointwise-uniform-and-uniformly-cauchy-convergence, def-integer-power]
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
    - title: "J. Lebl, Basic Analysis, Analytic Functions"
      url: "https://www.jirka.org/ra/html/sec_analfuncs.html"
pipeline_run: null
---

## Statement refuted

The pointwise convergence $(1+x/\iota(n))^n\to\exp(x)$ is uniform on all of $\mathbb R$.

## Facts & Assumptions

**Given:** $h_n(x)=(1+x/\iota(n))^n$.

[L1] Pointwise convergence is [[thm-exponential-product-limit]], while uniform convergence is [[def-pointwise-uniform-and-uniformly-cauchy-convergence]].

[L2] $e>2$ ([[cor-two-less-than-e-less-than-three]]) and $\exp(n)=e^n$ by [[thm-exponential-addition-formula]].

## Counterexample

**Proof technique:** direct.

1.1 At the moving point $x=\iota(n)$, $h_n(x)=2^n$, whereas $\exp(x)=e^n$.   [given, L2]

2.1 Since $e>2$, the difference $e^n-2^n$ is at least $e-2>0$ and in fact grows; therefore $\sup_x|h_n(x)-\exp(x)|\not\to0$.  [step 1.1, L2, algebra]

3.1 Hence the pointwise convergence is not uniform on $\mathbb R$.  [step 2.1, L1] ∎
````

## Wave 14 provenance row

```json
{
  "id": "cex-exponential-product-limit-not-uniform-on-r",
  "statement": "ai-generated",
  "proof": "ai-generated",
  "evidence": "trivial",
  "urls": [],
  "rationale": "This is a bespoke moving-point witness for failure of uniform convergence of the just-defined product-limit sequence. Direct verification: at x=n the nth function equals 2^n, whereas exp(n)=e^n and e>2, so the error (e^n-2^n) is unbounded. No located source contained this exact witness, and the construction is completely checked from stated dependencies.",
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
      "source": "thm-exponential-product-limit",
      "source_section": "Statement",
      "quote": "For every real $x$,\n$$\\lim_{n\\to\\infty}\\left(1+\\frac{x}{\\iota(n)}\\right)^n=\\exp(x),$$\nwith the sequence started after $n>|x|$, so the base is positive.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-pointwise-uniform-and-uniformly-cauchy-convergence",
      "source_section": "Definition",
      "quote": "Let $X$ be a set and, for each $k \\in \\mathbb{N}$, let\n$f_k : X \\to \\mathbb{R}$ be a real-valued function\n([[def-function-space]]). Let $f : X \\to \\mathbb{R}$.\n\nThe sequence $(f_k)$ **converges pointwise** to $f$ on $X$ when, for every\n$x \\in X$, the real sequence $(f_k(x))$ converges to $f(x)$\n([[def-real-limit]]). Thus the index after which\n$|f_k(x)-f(x)|<\\varepsilon$ may depend on both $\\varepsilon$ and $x$.\n\nThe sequence $(f_k)$ **converges uniformly** to $f$ on $X$ when\n\n$$(\\forall \\varepsilon>0)(\\exists N\\in\\mathbb{N})(\\forall k\\ge N)(\\forall x\\in X)\\quad |f_k(x)-f(x)|<\\varepsilon,$$\n\nwhere $\\varepsilon$ ranges over the positive reals. Here one index $N$ serves\nevery point of $X$.\n\nThe sequence $(f_k)$ is **uniformly Cauchy** on $X$ when\n\n$$(\\forall \\varepsilon>0)(\\exists N\\in\\mathbb{N})(\\forall m,n\\ge N)(\\forall x\\in X)\\quad |f_m(x)-f_n(x)|<\\varepsilon.$$\n\nFor each of the three notions above, restricting the error to positive\nrationals gives an equivalent condition. The real-error condition immediately\nimplies the rational-error condition. Conversely, given a real $\\eta>0$,\nchoose $n\\ge1$ with $1/n<\\eta$ by\n[[cor-archimedean-reciprocal]]; the condition for the positive rational\n$1/n$ implies the condition for $\\eta$. The real-error form is used because\nit makes the uniform quantifiers transparent.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "cor-two-less-than-e-less-than-three",
      "source_section": "Statement",
      "quote": "$$2<e<3.$$",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-exponential-addition-formula",
      "source_section": "Statement",
      "quote": "For all real $x,y$,\n$$\\exp(x+y)=\\exp(x)\\exp(y).$$",
      "uses": [
        "1.1",
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "At the moving point $x=\\iota(n)$, $h_n(x)=2^n$, whereas $\\exp(x)=e^n$.   [given, L2]",
      "step": "1.1",
      "inputs": [
        "L2",
        "given"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Since $e>2$, the difference $e^n-2^n$ is at least $e-2>0$ and in fact grows; therefore $\\sup_x|h_n(x)-\\exp(x)|\\not\\to0$.  [step 1.1, L2, algebra]",
      "step": "2.1",
      "inputs": [
        "1.1",
        "L2",
        "algebra"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "Hence the pointwise convergence is not uniform on $\\mathbb R$.  [step 2.1, L1] ∎",
      "step": "3.1",
      "inputs": [
        "2.1",
        "L1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The domain is the fixed nonempty set R."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "The functions are defined at x=0 and equal the pointwise limit there; the counterexample instead uses a moving point."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Step 2.1 includes n=1 and the argument is eventually strict as n grows."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "Integer powers are defined for every real base; no excluded denominator occurs because n>=1."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Step 2.1 deliberately exploits the unbounded end x=n of R, which is why compact-uniform reasoning cannot apply."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 2.1 provides the explicit witness x=n for every index, so no unstated choice is needed."
    },
    {
      "case": "iff-forward",
      "status": "checked",
      "evidence": "Step 1.1 verifies pointwise convergence from the cited product-limit theorem."
    },
    {
      "case": "iff-reverse",
      "status": "checked",
      "evidence": "Steps 2.1 and 3.1 negate the uniform quantifier by an explicit sequence of witnesses."
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "cex-exponential-product-limit-not-uniform-on-r",
    "sourcePage": "the-exponential-function-examples",
    "batch": "wave14-real-analysis",
    "target": "thm-exponential-product-limit",
    "declared_target": "thm-exponential-product-limit",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-exponential-function",
    "targetBatch": "wave14-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-exponential-product-limit-not-uniform-on-r",
    "sourcePage": "the-exponential-function-examples",
    "batch": "wave14-real-analysis",
    "target": "thm-exponential-addition-formula",
    "declared_target": "thm-exponential-addition-formula",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-exponential-function",
    "targetBatch": "wave14-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-exponential-product-limit-not-uniform-on-r",
    "sourcePage": "the-exponential-function-examples",
    "batch": "wave14-real-analysis",
    "target": "cor-two-less-than-e-less-than-three",
    "declared_target": "cor-two-less-than-e-less-than-three",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-exponential-function",
    "targetBatch": "wave14-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-exponential-product-limit-not-uniform-on-r",
    "sourcePage": "the-exponential-function-examples",
    "batch": "wave14-real-analysis",
    "target": "def-pointwise-uniform-and-uniformly-cauchy-convergence",
    "declared_target": "def-pointwise-uniform-and-uniformly-cauchy-convergence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-convergence-of-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-exponential-product-limit-not-uniform-on-r",
    "sourcePage": "the-exponential-function-examples",
    "batch": "wave14-real-analysis",
    "target": "def-integer-power",
    "declared_target": "def-integer-power",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Relevant current generated-risk rows

```json
[
  {
    "id": "cex-exponential-product-limit-not-uniform-on-r",
    "file": "items/cex-exponential-product-limit-not-uniform-on-r.md",
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

## Full exact-current text of every cited or declared item (5)

### `cor-two-less-than-e-less-than-three`

````markdown
---
id: cor-two-less-than-e-less-than-three
kind: corollary
title: "The elementary numerical bound $2<e<3$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-exponential-factorial-tail-bound, def-real-exponential-function-and-e, def-finite-sum, lem-finite-sum-laws]
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
    - title: "J. Lebl, Basic Analysis, Analytic Functions"
      url: "https://www.jirka.org/ra/html/sec_analfuncs.html"
    - title: "LSU MATH 7230, Homework 1"
      url: "https://www.math.lsu.edu/~mahlburg/teaching/handouts/2018-7230/HW1.pdf"
    - title: "University of Michigan MATH 295 notes"
      url: "https://sites.lsa.umich.edu/idolga/wp-content/uploads/sites/1334/2024/08/295notes.pdf"
pipeline_run: null
---

## Statement

$$2<e<3.$$

## Facts & Assumptions

**Given:** $e=\sum_{k\ge0}1/\iota(k!)$ ([[def-real-exponential-function-and-e]]).

[L1] The factorial tail bound is [[lem-exponential-factorial-tail-bound]].

## Proof

**Proof technique:** direct.

1.1 The first three terms give $e>1+1+1/2>2$.   [given]

1.2 The term at index $2$ is $1/2$. Apply [L1] with $x=1,N=2$: the tail from index $3$ onward is at most $2/3!=1/3$. Thus the whole tail after index $1$ is at most $1/2+1/3=5/6<1$, and hence $e<2+1=3$.  [L1, algebra]

2.1 Combining the strict bounds gives the claim.  [step 1.1, step 1.2] ∎
````

### `def-integer-power`

````markdown
---
id: def-integer-power
kind: definition
title: "Integer powers $a^m$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-recursion, def-ordered-field, def-integers, def-field, def-int-operations, lem-nat-embeds-int, lem-of-inverse-unique, lem-of-no-zero-divisors, lem-of-zero-mult, thm-int-ordered-ring]
justified_by: [lem-power-laws]
aliases: [def-power]
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
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §4.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

Let $a \in \mathbb{R}$, where $\mathbb{R}$ is the ambient ordered field
([[def-ordered-field]], [[def-field]]).

**Natural exponents.** By the recursion theorem ([[thm-recursion]]) applied to
the set $\mathbb{R}$, the starting element $1$ and the function
$f(x) = x \cdot a$, there is a unique function $\mathbb{N} \to \mathbb{R}$,
written $n \mapsto a^n$, with

$$a^0 = 1, \qquad a^{n+1} = a^n \cdot a \quad (n \in \mathbb{N}).$$

Thus $a^1 = a$, $a^2 = a \cdot a$, and so on. Note that this is defined for
**every** $a$, including $a = 0$.

**Negative exponents.** If $a \ne 0$ and $n \in \mathbb{N}$ with $n \ge 1$, set

$$a^{-n} := (a^n)^{-1}.$$

**Why that is legitimate.** The right-hand side presupposes that $a^n$ is
invertible, that is, that $a^n \ne 0$. This is a proof obligation and not an
observation, and it is discharged by claim 2 of [[lem-power-laws]]: for $a \ne 0$
in a field, $a^n \ne 0$ for every $n \in \mathbb{N}$, proved there by induction on
$n$ from the fact that a field has no zero divisors ([[lem-of-no-zero-divisors]]).
That lemma is a statement *about* the operation introduced here, so it depends on
this definition and is recorded in this item's `justified_by` rather than in its
`deps` (SCHEMA §3). Given $a^n \ne 0$, the value $(a^n)^{-1}$ is a single
well-determined element, because multiplicative inverses in a field are unique
([[lem-of-inverse-unique]]).

**Integer exponents.** Every integer $m$ ([[def-integers]]) is either
$\iota(n)$ or $-\iota(n)$ for a unique natural $n$, where $\iota$ is the
embedding $\mathbb{N} \to \mathbb{Z}$ ([[lem-nat-embeds-int]],
[[def-int-operations]]). This too is a citation and not a slogan: the order on
$\mathbb{Z}$ is total ([[thm-int-ordered-ring]]), so $m \ge 0$ or $m < 0$; the
image of $\iota$ is exactly the set of nonnegative integers, and each of them is
$\iota(n)$ for a unique natural $n$ ([[lem-nat-embeds-int]]); and if $m < 0$ then
$-m > 0$, by compatibility of the order with addition ([[thm-int-ordered-ring]]),
so $-m = \iota(n)$ and $m = -\iota(n)$, with $n$ unique because $\iota$ is
injective. The two clauses above therefore define $a^m$ for every
$m \in \mathbb{Z}$ whenever $a \ne 0$, and for every $m \in \mathbb{N}$ for
arbitrary $a$. The clauses are consistent where they overlap: the only overlap is
$m = 0$, where $-\iota(0) = \iota(0)$ and $(a^0)^{-1} = 1^{-1} = 1 = a^0$.

## Remarks

- **The convention $0^0 = 1$ is adopted here**, and it is not a matter of taste
  but of agreement with the recursion above: $a^0 = 1$ is the starting value for
  every $a$, exactly as the empty product is $1$ ([[def-finite-sum]]). This is
  the convention that makes the empty product, the binomial theorem, and
  polynomial notation $\sum_k c_k x^k$ work at $x = 0$ without an exception. The
  competing convention "$0^0$ undefined" belongs to contexts where $x^y$ is
  studied as a function of two *real* variables and one wants continuity, which
  is unavailable and irrelevant here: the exponent in $a^m$ is an integer, never
  a real.
- $0^n = 0$ for every $n \ge 1$, since $0^{n} = 0^{n-1} \cdot 0 = 0$, a product
  with a zero factor ([[lem-of-zero-mult]]); and
  $0^{-n}$ is not defined for $n \ge 1$, since $0$ has no inverse.
- The exponent is an integer and stays an integer. Rational exponents are a
  separate construction resting on the existence of roots
  ([[thm-nth-roots-exist]], [[def-rational-power]]), and real exponents do not
  exist in this library yet ([[rem-real-exponents-deferred]]).
- The laws $a^{m+n} = a^m a^n$, $(a^m)^n = a^{mn}$ and $(ab)^n = a^n b^n$ are
  proved, not assumed, in [[lem-power-laws]]; the order behaviour of $a \mapsto a^n$
  is [[lem-power-monotone]].
````

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

### `thm-exponential-addition-formula`

````markdown
---
id: thm-exponential-addition-formula
kind: theorem
title: "The exponential addition formula $\\exp(x+y)=\\exp(x)\\exp(y)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-exponential-series-has-infinite-radius, lem-cauchy-product-of-real-power-series, thm-binomial-theorem, thm-binomial-closed-formula, def-binomial-coefficient, def-factorial-and-falling-factorial, def-canonical-natural, def-finite-sum, lem-finite-sum-laws]
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
pipeline_run: null
---

## Statement

For all real $x,y$,
$$\exp(x+y)=\exp(x)\exp(y).$$

## Facts & Assumptions

**Given:** $x,y\in\mathbb R$.

[L1] For fixed $x,y$, the auxiliary power series $\sum_{n\ge0}x^nz^n/\iota(n!)$ and $\sum_{n\ge0}y^nz^n/\iota(n!)$ have infinite radius by [[lem-exponential-series-has-infinite-radius]]. Inside their common radius, their product is the Cauchy product of their coefficients ([[lem-cauchy-product-of-real-power-series]]).

[L2] The binomial theorem says $(x+y)^n=\sum_{k=0}^n\iota\binom nk x^ky^{n-k}$ ([[thm-binomial-theorem]], [[def-binomial-coefficient]]).

[L3] For $k\le n$, $\iota\binom nk=\iota(n!)/(\iota(k!)\iota((n-k)!))$ ([[thm-binomial-closed-formula]]). Therefore $1/(\iota(k!)\iota((n-k)!))=\iota\binom nk/\iota(n!)$, with all naturals read in $\mathbb R$ through [[def-canonical-natural]].

## Proof

**Proof technique:** direct.

1.1 Apply [L1] at the auxiliary value $z=1$. The coefficient of degree $n$ in the resulting Cauchy product for $\exp(x)\exp(y)$ is $\sum_{k=0}^n x^ky^{n-k}/(\iota(k!)\iota((n-k)!))$.   [L1, given]

2.1 Apply [L3] and [L2] to identify this finite sum with $(x+y)^n/\iota(n!)$.  [step 1.1, L2, L3, algebra]

3.1 Summing over $n$ gives the exponential series at $x+y$, hence the formula.  [step 2.1, L1] ∎
````

### `thm-exponential-product-limit`

````markdown
---
id: thm-exponential-product-limit
kind: theorem
title: "For every real $x$, $(1+x/n)^n\\to\\exp x$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-scaled-binomial-coefficients-converge, thm-binomial-theorem, lem-exponential-series-has-infinite-radius, def-real-exponential-function-and-e, def-real-limit, lem-finite-sum-laws]
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
    - title: "J. Lebl, Basic Analysis, Analytic Functions"
      url: "https://www.jirka.org/ra/html/sec_analfuncs.html"
    - title: "J. Lebl, Basic Analysis, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
pipeline_run: null
---

## Statement

For every real $x$,
$$\lim_{n\to\infty}\left(1+\frac{x}{\iota(n)}\right)^n=\exp(x),$$
with the sequence started after $n>|x|$, so the base is positive.

## Facts & Assumptions

**Given:** A real $x$.

[L1] The binomial theorem expands the product. For fixed $k$, [[lem-scaled-binomial-coefficients-converge]] gives both convergence of the scaled coefficient to $1/\iota(k!)$ and, whenever $n\ge\max\{1,k\}$, the bound $0\le\iota\binom nk/\iota(n)^k\le1/\iota(k!)$ ([[thm-binomial-theorem]]).

[L2] The exponential series converges absolutely ([[lem-exponential-series-has-infinite-radius]], [[def-real-exponential-function-and-e]]).

## Proof

**Proof technique:** direct.

1.1 For $n>|x|$, the binomial theorem gives $(1+x/\iota(n))^n=\sum_{k=0}^{n}\bigl(\iota\binom nk/\iota(n)^k\bigr)x^k$.  [L1]

1.2 Each fixed coefficient tends to $1/\iota(k!)$, while the uniform bound in [L1] holds for every term present in the sum.  [L1]

2.1 Given $\varepsilon>0$, choose $K$ so the absolute exponential tail after $K$ is below $\varepsilon/3$ using [L2]. The same coefficient bound controls the product tail uniformly in $n$; for the finite head $k\le K$, choose $n$ so all coefficient errors sum to below $\varepsilon/3$.  [step 1.2, L2, choose]

3.1 The triangle inequality then makes the product differ from $\sum_{k\ge0}x^k/\iota(k!)=\exp(x)$ by less than $\varepsilon$.   [step 1.1, step 2.1, given] ∎
````

