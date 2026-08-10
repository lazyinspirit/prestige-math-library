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

- high risk (6): 4 declared dependencies; 4 cited facts; analytic limiting/completeness language

## Target item — `thm-exponential-limits-and-range`

Normalized current SHA-256: `18663af32ce5049a512e2903201e40e5e5bf04f6945e2ef3792c59a3d819b444`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: thm-exponential-limits-and-range
kind: theorem
title: "The exponential tends to $+\\infty$ at $+\\infty$ and to $0$ at $-\\infty$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-real-exponential-function-and-e, thm-nonnegative-series-bounded-partial-sums, cor-exponential-reciprocal-and-positivity, def-limits-at-infinity]
justified_by: []
aliases: []
landmark: false
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

$$\exp(x)\to+\infty\quad(x\to+\infty),\qquad \exp(x)\to0\quad(x\to-\infty),$$
and the range of $\exp$ is contained in $(0,\infty)$ and is unbounded above with infimum $0$.

## Facts & Assumptions

**Given:** The exponential series.

[L1] For $x\ge0$, every exponential-series term is nonnegative, so its sum dominates every partial sum and in particular $\exp(x)\ge1+x$ ([[def-real-exponential-function-and-e]], [[thm-nonnegative-series-bounded-partial-sums]]).

[L2] $\exp(-x)=1/\exp(x)>0$ ([[cor-exponential-reciprocal-and-positivity]]).

[L3] Finite and infinite limits of functions at infinity have the quantified definitions in [[def-limits-at-infinity]].

## Proof

**Proof technique:** direct.

1.1 Given a real $M$, every $x>\max\{0,M-1\}$ satisfies $\exp(x)\ge1+x>M$. Hence $\exp(x)\to+\infty$.  [L1, L3]

1.2 Given $\varepsilon>0$, choose $X>0$ with $1+X>1/\varepsilon$. If $x<-X$, then $-x>X$, so [L1] gives $\exp(-x)\ge1-x>1+X>1/\varepsilon$; [L2] yields $0<\exp(x)<\varepsilon$.  [L1, L2, choose]

2.1 The range assertions follow from positivity and the two limit conclusions.  [step 1.1, step 1.2, L2] ∎
````

## Wave 14 provenance row

```json
{
  "id": "thm-exponential-limits-and-range",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://www.jirka.org/ra/html/sec_logandexp.html"
  ],
  "rationale": "Lebl gives the limits 0 and +infinity at the two ends and range (0,infinity). The item restates these together with the elementary bound exp(x)>=1+x and a specific reciprocal proof; that proof is locally assembled.",
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
      "source": "def-real-exponential-function-and-e",
      "source_section": "Definition",
      "quote": "For $x\\in\\mathbb R$, define\n$$\\exp(x):=\\sum_{n=0}^{\\infty}\\frac{x^n}{\\iota(n!)}, \\qquad e:=\\exp(1),$$\nprovided by the all-real convergence proved in [[lem-exponential-series-has-infinite-radius]]. Here $n!\\in\\mathbb N$ is the factorial of [[def-factorial-and-falling-factorial]], $\\iota(n!)$ is its nonzero real image ([[def-canonical-natural]], [[lem-of-naturals-positive]]), and powers and series are those of [[def-integer-power]] and [[def-series]].\n\nThis is a real power series centred at $0$ ([[def-real-power-series-and-radius-of-convergence]]). No logarithm, irrational power, or differential equation enters the definition.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-nonnegative-series-bounded-partial-sums",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ be a sequence of reals with $a_k \\ge 0$ for every $k \\in \\mathbb{N}$,\nlet $s_n = \\sum_{k<n} a_k$ be its partial sums and let\n$S = \\{\\, s_n : n \\in \\mathbb{N} \\,\\}$ be the range of $(s_n)$ ([[def-series]]).\nThen:\n\n1. $(s_n)$ is nondecreasing ([[def-monotone-sequence]]) and $s_n \\ge 0$ for every\n   $n$;\n2. $\\sum a_k$ converges **if and only if** $S$ is bounded above\n   ([[def-bounded-set]]), and in that case\n   $$\\sum_{k=0}^{\\infty} a_k \\;=\\; \\sup S ,$$\n   so in particular $s_n \\le \\sum_{k=0}^{\\infty} a_k$ for every $n$;\n3. if $S$ is not bounded above then $s_n \\to +\\infty$\n   ([[def-divergence-to-infinity]]) and $\\sum a_k$ diverges.\n\nThis is the theorem that makes the nonnegative theory work: for terms of one\nsign, convergence is a boundedness question and no candidate limit is ever\nneeded. Every comparison test on this page is an application of it.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "cor-exponential-reciprocal-and-positivity",
      "source_section": "Statement",
      "quote": "For every real $x$, $\\exp(x)>0$ and\n$$\\exp(-x)=\\frac1{\\exp(x)}.$$",
      "uses": [
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-limits-at-infinity",
      "source_section": "Definition",
      "quote": "Throughout, $+\\infty$ and $-\\infty$ are **abbreviations and not real numbers**,\nexactly as in [[def-interval]] and [[def-divergence-to-infinity]]. Every phrase\nbelow is a single abbreviation for a displayed condition on reals, and no\narithmetic is ever performed with the symbols.\n\n**Limits at $+\\infty$.** Let $A \\subseteq \\mathbb{R}$ be **not bounded above**\n([[def-bounded-set]]), let $f : A \\to \\mathbb{R}$ and let $L \\in \\mathbb{R}$. We\nwrite\n\n$$\\lim_{x \\to +\\infty} f(x) = L$$\n\nwhen for every real $\\varepsilon > 0$ there is a real $M$ such that\n\n$$|f(x) - L| < \\varepsilon \\qquad \\text{for every } x \\in A \\text{ with } x > M .$$\n\n**Limits at $-\\infty$.** Let $A$ be **not bounded below**. We write\n$\\lim_{x \\to -\\infty} f(x) = L$ when for every real $\\varepsilon > 0$ there is a\nreal $M$ with $|f(x) - L| < \\varepsilon$ for every $x \\in A$ with $x < M$.\n\n**Why unboundedness is required.** It plays exactly the role the limit-point\ncondition plays in [[def-function-limit]]. Saying that $A$ is not bounded above\nsays that no real is an upper bound of $A$, that is, that for every real $M$\nthere is $x \\in A$ with $x > M$ ([[def-bounded-set]],\n[[def-complete-ordered-field]]); so the set over which the condition quantifies\nis never empty and the condition is never vacuous. Without the hypothesis every\nreal $L$ would satisfy it and the notation would not denote.\n\n**Uniqueness, proved here.** Suppose $A$ is not bounded above and\n$\\lim_{x \\to +\\infty} f(x) = L$ and $\\lim_{x \\to +\\infty} f(x) = L'$ with\n$L \\ne L'$. Then $|L - L'| > 0$ ([[lem-of-abs-value]]), so\n$\\varepsilon := |L - L'|/2 > 0$ ([[cor-of-one-positive]],\n[[lem-of-inverse-positive]], [[lem-of-sign-rules]]). Choose reals $M_1, M_2$\nwitnessing the two conditions at this $\\varepsilon$ and let $M$ be the larger of\nthem, the order being total. Since $A$ is not bounded above there is $x \\in A$\nwith $x > M$, hence with $x > M_1$ and $x > M_2$, and then\n\n$$|L - L'| = |(L - f(x)) + (f(x) - L')| \\le |f(x) - L| + |f(x) - L'| < 2\\varepsilon = |L - L'|$$\n\n([[lem-of-triangle-inequality]], [[lem-of-abs-value]], [[lem-of-add-order]]),\nwhich trichotomy forbids. So $L = L'$, and the notation\n$\\lim_{x \\to +\\infty} f(x)$ denotes a single real. The same four lines, with the\ninequalities on $x$ reversed, give uniqueness at $-\\infty$.\n\n**Infinite limits at a point.** Let $A \\subseteq \\mathbb{R}$, let $c$ be a limit\npoint of $A$ ([[def-limit-point-r]]) and let $f : A \\to \\mathbb{R}$. We write\n\n$$f(x) \\to +\\infty \\ \\text{ as } \\ x \\to c$$\n\nwhen for every real $M$ there is a real $\\delta > 0$ such that $f(x) > M$ for\nevery $x \\in A$ with $0 < |x - c| < \\delta$; and $f(x) \\to -\\infty$ as $x \\to c$\nwhen for every real $M$ there is a real $\\delta > 0$ with $f(x) < M$ for every\nsuch $x$.\n\n**This library does not write $\\lim_{x \\to c} f(x) = +\\infty$.** The right-hand\nside would not be an element of $\\mathbb{R}$, and writing the equation would\nsilently move the discussion into the extended real line, a structure that is\nnot a field. That is the convention already fixed by\n[[def-divergence-to-infinity]] for sequences and by [[rem-sup-conventions]] for\nsuprema, and it is kept here. In particular none of the rules of\n[[thm-algebra-of-function-limits]] may be applied to a function tending to\n$\\pm\\infty$.\n\n**Combined forms.** Let $A$ be not bounded above and $f : A \\to \\mathbb{R}$. We\nwrite $f(x) \\to +\\infty$ as $x \\to +\\infty$ when for every real $N$ there is a\nreal $M$ with $f(x) > N$ for every $x \\in A$ with $x > M$. The other forms are\nobtained the same way, by pairing one of the two conditions on $x$ (unbounded\nabove, unbounded below) with one of the two conditions on $f(x)$ (above every\nreal, below every real); each is again a single abbreviation for the displayed\ncondition, and none of them is an equation.",
      "uses": [
        "1.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Given a real $M$, every $x>\\max\\{0,M-1\\}$ satisfies $\\exp(x)\\ge1+x>M$. Hence $\\exp(x)\\to+\\infty$.  [L1, L3]",
      "step": "1.1",
      "inputs": [
        "L1",
        "L3"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "Given $\\varepsilon>0$, choose $X>0$ with $1+X>1/\\varepsilon$. If $x<-X$, then $-x>X$, so [L1] gives $\\exp(-x)\\ge1-x>1+X>1/\\varepsilon$; [L2] yields $0<\\exp(x)<\\varepsilon$.  [L1, L2, choose]",
      "step": "1.2",
      "inputs": [
        "L1",
        "L2",
        "choose"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "The range assertions follow from positivity and the two limit conclusions.  [step 1.1, step 1.2, L2] ∎",
      "step": "2.1",
      "inputs": [
        "1.1",
        "1.2",
        "L2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The statement concerns the fixed domain R."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Step 1.1 includes x=0 in exp(x)>=1+x."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Step 1.1 includes x=1 and uses the n=0,1 partial terms."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "No interval or quotient parameter can collapse."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Steps 1.2 and 2.1 separately establish the +infinity and -infinity limits."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "No arbitrary nonempty family is used."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional."
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "thm-exponential-limits-and-range",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "def-real-exponential-function-and-e",
    "declared_target": "def-real-exponential-function-and-e",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-exponential-function",
    "targetBatch": "wave14-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-exponential-limits-and-range",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "thm-nonnegative-series-bounded-partial-sums",
    "declared_target": "thm-nonnegative-series-bounded-partial-sums",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-exponential-limits-and-range",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "cor-exponential-reciprocal-and-positivity",
    "declared_target": "cor-exponential-reciprocal-and-positivity",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-exponential-function",
    "targetBatch": "wave14-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-exponential-limits-and-range",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "def-limits-at-infinity",
    "declared_target": "def-limits-at-infinity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "limits-of-real-functions",
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

### `cor-exponential-reciprocal-and-positivity`

````markdown
---
id: cor-exponential-reciprocal-and-positivity
kind: corollary
title: "The exponential is positive and satisfies $\\exp(-x)=1/\\exp(x)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-exponential-addition-formula, def-real-exponential-function-and-e, lem-of-square-positive]
justified_by: []
aliases: []
landmark: false
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
    - title: "J. K. Hunter, An Introduction to Real Analysis, Chapter 10"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch10.pdf"
    - title: "S. G. Johnson, Exponential Functions"
      url: "https://math.mit.edu/~stevenj/exponential.pdf"
pipeline_run: null
---

## Statement

For every real $x$, $\exp(x)>0$ and
$$\exp(-x)=\frac1{\exp(x)}.$$

## Facts & Assumptions

**Given:** $x\in\mathbb R$.

[L1] $\exp(x+y)=\exp(x)\exp(y)$ ([[thm-exponential-addition-formula]]), and $\exp(0)=1$ from [[def-real-exponential-function-and-e]].

[L2] Every nonzero square in an ordered field is positive ([[lem-of-square-positive]]).

## Proof

**Proof technique:** direct.

1.1 Setting $y=-x$ in [L1] gives $\exp(x)\exp(-x)=1$, so both factors are nonzero.  [L1, algebra]

2.1 Also $\exp(x)=\exp(x/2)^2$, so it is nonnegative; by step 1.1 and [L2] it is positive.  [L1, L2]

3.1 Dividing the identity in step 1.1 by $\exp(x)$ gives the reciprocal formula.  [step 1.1, algebra] ∎
````

### `def-limits-at-infinity`

````markdown
---
id: def-limits-at-infinity
kind: definition
title: "Limits at $+\\infty$ and $-\\infty$, and infinite limits at a point"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function-limit, def-limit-point-r, def-divergence-to-infinity, def-interval, def-bounded-set, def-complete-ordered-field, lem-of-abs-value, lem-of-triangle-inequality, lem-of-add-order, lem-of-sign-rules, lem-of-inverse-positive, cor-of-one-positive]
justified_by: []
aliases: [def-limit-at-infinity, def-infinite-limit-at-a-point]
landmark: true
short: "limits at and to infinity"
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
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.5"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Definition

Throughout, $+\infty$ and $-\infty$ are **abbreviations and not real numbers**,
exactly as in [[def-interval]] and [[def-divergence-to-infinity]]. Every phrase
below is a single abbreviation for a displayed condition on reals, and no
arithmetic is ever performed with the symbols.

**Limits at $+\infty$.** Let $A \subseteq \mathbb{R}$ be **not bounded above**
([[def-bounded-set]]), let $f : A \to \mathbb{R}$ and let $L \in \mathbb{R}$. We
write

$$\lim_{x \to +\infty} f(x) = L$$

when for every real $\varepsilon > 0$ there is a real $M$ such that

$$|f(x) - L| < \varepsilon \qquad \text{for every } x \in A \text{ with } x > M .$$

**Limits at $-\infty$.** Let $A$ be **not bounded below**. We write
$\lim_{x \to -\infty} f(x) = L$ when for every real $\varepsilon > 0$ there is a
real $M$ with $|f(x) - L| < \varepsilon$ for every $x \in A$ with $x < M$.

**Why unboundedness is required.** It plays exactly the role the limit-point
condition plays in [[def-function-limit]]. Saying that $A$ is not bounded above
says that no real is an upper bound of $A$, that is, that for every real $M$
there is $x \in A$ with $x > M$ ([[def-bounded-set]],
[[def-complete-ordered-field]]); so the set over which the condition quantifies
is never empty and the condition is never vacuous. Without the hypothesis every
real $L$ would satisfy it and the notation would not denote.

**Uniqueness, proved here.** Suppose $A$ is not bounded above and
$\lim_{x \to +\infty} f(x) = L$ and $\lim_{x \to +\infty} f(x) = L'$ with
$L \ne L'$. Then $|L - L'| > 0$ ([[lem-of-abs-value]]), so
$\varepsilon := |L - L'|/2 > 0$ ([[cor-of-one-positive]],
[[lem-of-inverse-positive]], [[lem-of-sign-rules]]). Choose reals $M_1, M_2$
witnessing the two conditions at this $\varepsilon$ and let $M$ be the larger of
them, the order being total. Since $A$ is not bounded above there is $x \in A$
with $x > M$, hence with $x > M_1$ and $x > M_2$, and then

$$|L - L'| = |(L - f(x)) + (f(x) - L')| \le |f(x) - L| + |f(x) - L'| < 2\varepsilon = |L - L'|$$

([[lem-of-triangle-inequality]], [[lem-of-abs-value]], [[lem-of-add-order]]),
which trichotomy forbids. So $L = L'$, and the notation
$\lim_{x \to +\infty} f(x)$ denotes a single real. The same four lines, with the
inequalities on $x$ reversed, give uniqueness at $-\infty$.

**Infinite limits at a point.** Let $A \subseteq \mathbb{R}$, let $c$ be a limit
point of $A$ ([[def-limit-point-r]]) and let $f : A \to \mathbb{R}$. We write

$$f(x) \to +\infty \ \text{ as } \ x \to c$$

when for every real $M$ there is a real $\delta > 0$ such that $f(x) > M$ for
every $x \in A$ with $0 < |x - c| < \delta$; and $f(x) \to -\infty$ as $x \to c$
when for every real $M$ there is a real $\delta > 0$ with $f(x) < M$ for every
such $x$.

**This library does not write $\lim_{x \to c} f(x) = +\infty$.** The right-hand
side would not be an element of $\mathbb{R}$, and writing the equation would
silently move the discussion into the extended real line, a structure that is
not a field. That is the convention already fixed by
[[def-divergence-to-infinity]] for sequences and by [[rem-sup-conventions]] for
suprema, and it is kept here. In particular none of the rules of
[[thm-algebra-of-function-limits]] may be applied to a function tending to
$\pm\infty$.

**Combined forms.** Let $A$ be not bounded above and $f : A \to \mathbb{R}$. We
write $f(x) \to +\infty$ as $x \to +\infty$ when for every real $N$ there is a
real $M$ with $f(x) > N$ for every $x \in A$ with $x > M$. The other forms are
obtained the same way, by pairing one of the two conditions on $x$ (unbounded
above, unbounded below) with one of the two conditions on $f(x)$ (above every
real, below every real); each is again a single abbreviation for the displayed
condition, and none of them is an equation.

## Remarks

- **These are the same definition with a different notion of "near".** In
  [[def-function-limit]] the sets $A \cap N^{*}_\delta(c)$ shrink to $c$; here
  the sets $\{\, x \in A : x > M \,\}$ shrink towards being unbounded above. The
  limit-point hypothesis and the unboundedness hypothesis play the same role:
  each says the relevant sets are never empty.

- **One-sided infinite limits.** Combining this definition with
  [[def-one-sided-limits]] gives, for instance, $f(x) \to +\infty$ as
  $x \to c^{+}$, meaning $f^{+}(x) \to +\infty$ as $x \to c$ for the restriction
  $f^{+}$ of $f$ to $A \cap (c, \infty)$, provided $c$ is a limit point of that
  set. Nothing new has to be defined.

- **The extended reals are not needed on these pages.** The extended line
  $\overline{\mathbb{R}}$ of [[def-extended-reals]] exists in this library and is
  the right home for $\limsup$; it is deliberately not used here, because every
  statement above is a statement about reals and quantifiers, and introducing a
  second ordered structure would oblige every later algebraic step to say which
  structure it is working in.
````

### `def-real-exponential-function-and-e`

````markdown
---
id: def-real-exponential-function-and-e
kind: definition
title: "The real exponential function and the number $e$ by a power series"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-power-series-and-radius-of-convergence, def-factorial-and-falling-factorial, def-integer-power, def-canonical-natural, lem-of-naturals-positive, def-series]
justified_by: [lem-exponential-series-has-infinite-radius]
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "J. Lebl, Basic Analysis, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
pipeline_run: null
---

## Definition

For $x\in\mathbb R$, define
$$\exp(x):=\sum_{n=0}^{\infty}\frac{x^n}{\iota(n!)}, \qquad e:=\exp(1),$$
provided by the all-real convergence proved in [[lem-exponential-series-has-infinite-radius]]. Here $n!\in\mathbb N$ is the factorial of [[def-factorial-and-falling-factorial]], $\iota(n!)$ is its nonzero real image ([[def-canonical-natural]], [[lem-of-naturals-positive]]), and powers and series are those of [[def-integer-power]] and [[def-series]].

This is a real power series centred at $0$ ([[def-real-power-series-and-radius-of-convergence]]). No logarithm, irrational power, or differential equation enters the definition.
````

### `thm-nonnegative-series-bounded-partial-sums`

````markdown
---
id: thm-nonnegative-series-bounded-partial-sums
kind: theorem
title: "A series of nonnegative terms converges iff its partial sums are bounded, and then the sum is their supremum"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-series, def-monotone-sequence, thm-monotone-convergence, cor-monotone-converges-iff-bounded, lem-monotone-unbounded-diverges, def-bounded-set, def-finite-sum, lem-finite-sum-laws, def-sequence, def-divergence-to-infinity, def-complete-ordered-field]
justified_by: []
forward_refs: [cex-comparison-needs-nonnegativity]
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
    - title: "Series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Series_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.24)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals with $a_k \ge 0$ for every $k \in \mathbb{N}$,
let $s_n = \sum_{k<n} a_k$ be its partial sums and let
$S = \{\, s_n : n \in \mathbb{N} \,\}$ be the range of $(s_n)$ ([[def-series]]).
Then:

1. $(s_n)$ is nondecreasing ([[def-monotone-sequence]]) and $s_n \ge 0$ for every
   $n$;
2. $\sum a_k$ converges **if and only if** $S$ is bounded above
   ([[def-bounded-set]]), and in that case
   $$\sum_{k=0}^{\infty} a_k \;=\; \sup S ,$$
   so in particular $s_n \le \sum_{k=0}^{\infty} a_k$ for every $n$;
3. if $S$ is not bounded above then $s_n \to +\infty$
   ([[def-divergence-to-infinity]]) and $\sum a_k$ diverges.

This is the theorem that makes the nonnegative theory work: for terms of one
sign, convergence is a boundedness question and no candidate limit is ever
needed. Every comparison test on this page is an application of it.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals with $a_k \ge 0$ for every $k$, its partial sums $s_n = \sum_{k<n} a_k$, and the range $S = \{s_n : n \in \mathbb{N}\}$ ([[def-series]], [[def-finite-sum]], [[def-sequence]]).

[L1] The recursion clause of the finite sum: $s_{n+1} = s_n + a_n$ ([[def-finite-sum]]).

[L2] Consecutive comparisons suffice for monotonicity: $(x_k)$ is nondecreasing if and only if $x_k \le x_{k+1}$ for every $k$; and a nondecreasing sequence is bounded below by its first term ([[def-monotone-sequence]]).

[L3] Monotonicity of finite sums: if $a_k \ge 0$ for all $k < n$ then $\sum_{k<n} a_k \ge 0$ ([[lem-finite-sum-laws]]).

[L4] A monotone sequence converges if and only if it is bounded, that is if and only if there is $M$ with $|x_k| \le M$ for every $k$ ([[cor-monotone-converges-iff-bounded]], [[def-sequence]]).

[L5] A nondecreasing sequence bounded above converges to the supremum of its range, which exists by the least-upper-bound property ([[thm-monotone-convergence]], [[def-complete-ordered-field]], [[def-bounded-set]]).

[L6] A nondecreasing sequence whose range is not bounded above diverges to $+\infty$ ([[lem-monotone-unbounded-diverges]], [[def-divergence-to-infinity]]).

## Proof

**Proof technique:** direct.

1.1 For every $n$, $s_{n+1} - s_n = a_n \ge 0$, so $s_n \le s_{n+1}$ and $(s_n)$ is nondecreasing. [given, L1, L2]

1.2 For every $n$, $s_n = \sum_{k<n} a_k \ge 0$, all terms being nonnegative. [given, L3]

2.1 Claim 1 is steps 1.1 and 1.2 together. [step 1.1, step 1.2]

2.2 Since $s_n \ge 0$ we have $|s_n| = s_n$, so $(s_n)$ is bounded in the sense of [L4] if and only if $S$ is bounded above. [step 1.2, L4]

3.1 By [L4] applied to the monotone sequence $(s_n)$, the series converges if and only if $(s_n)$ is bounded, hence if and only if $S$ is bounded above. [step 1.1, step 2.2, L4]

4.1 If $S$ is bounded above then $(s_n)$ converges to $\sup S$, so $\sum a_k$ converges with sum $\sup S$; and since $\sup S$ is an upper bound of $S$, $s_n \le \sup S$ for every $n$. [step 1.1, step 3.1, L5]

4.2 If $S$ is not bounded above then $s_n \to +\infty$, and by step 3.1 the series diverges. [step 1.1, step 3.1, L6]

5.1 The equivalence and the identification of the sum as the supremum together make claim 2, and the divergence statement is claim 3. [step 3.1, step 4.1, step 4.2] ∎

## Remarks

- **"Bounded" and "bounded above" coincide here, and only here.** The equivalence used in step 2.2 rests on $s_n \ge 0$, which rests on every term being nonnegative. For a series with terms of both signs the partial sums can be bounded above and still fail to converge, so nothing in this theorem survives the loss of the sign hypothesis. That failure is exhibited by [[cex-comparison-needs-nonnegativity]] on the companion page.

- **Claim 3 is a strictly stronger statement than "diverges".** Divergence alone permits oscillation ([[def-series]]); for nonnegative terms it cannot occur, and the partial sums necessarily run to $+\infty$. This is what licenses the phrase "the series diverges to $+\infty$" for nonnegative terms, and it is what the Abel-Dini theorem later on this page uses.

- **This criterion is the monotone convergence property, worn differently.** The proof above is monotone convergence for $\mathbb{R}$ applied to the nondecreasing sequence of partial sums, and nothing is lost going back the other way. Given a nondecreasing sequence $(x_n)$ of reals, put $y_n := x_n - x_0 \ge 0$ and let $a_0 := 0$, $a_{k+1} := y_{k+1} - y_k \ge 0$; then $s_{n+1} = y_n$ ([[def-series]]), the partial sums are bounded exactly when $(x_n)$ is bounded above, and claim 1 returns the convergence of $(y_n)$ and so of $(x_n)$. Testing boundedness of partial sums is therefore not a device special to series. Read in the vocabulary of [[def-completeness-properties]] it is the property (MCT), which in an arbitrary ordered field already forces the Archimedean property on its own ([[lem-mct-implies-archimedean]]) and with it the least-upper-bound property ([[lem-mct-implies-lub]]). The translation just given is carried out in $\mathbb{R}$, since [[def-series]] is stated for sequences of reals and this library defines no series over a general ordered field.
````

