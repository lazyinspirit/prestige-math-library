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

## Target item — `cor-exponential-is-a-bijection-onto-positive-reals`

Normalized current SHA-256: `04d38d649f2aaa51e4b79784b9adf3563f554282598ba78e5bdd8af4159e22fa`

The complete exact-current item follows, including frontmatter:

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

## Wave 14 provenance row

```json
{
  "id": "cor-exponential-is-a-bijection-onto-positive-reals",
  "statement": "literature-derived",
  "proof": "ai-altered",
  "evidence": "exact-source",
  "urls": [
    "https://www.jirka.org/ra/html/sec_logandexp.html"
  ],
  "rationale": "Lebl states that the exponential is a strictly increasing bijection from R to (0,infinity), exactly the corollary's mathematical assertion. The library proof repackages monotonicity, endpoint limits, continuity, and IVT.",
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
      "source": "thm-exponential-is-strictly-increasing",
      "source_section": "Statement",
      "quote": "The exponential function is continuous and strictly increasing on $\\mathbb R$.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L1",
      "source": "cor-power-series-sums-are-continuous",
      "source_section": "Statement",
      "quote": "If $f(x)=\\sum_{n\\ge0}a_n(x-c)^n$ for $|x-c|<R$, then $f$ is continuous at every $x_0$ satisfying $|x_0-c|<R$.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-exponential-limits-and-range",
      "source_section": "Statement",
      "quote": "$$\\exp(x)\\to+\\infty\\quad(x\\to+\\infty),\\qquad \\exp(x)\\to0\\quad(x\\to-\\infty),$$\nand the range of $\\exp$ is contained in $(0,\\infty)$ and is unbounded above with infimum $0$.",
      "uses": [
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-intermediate-value",
      "source_section": "Statement",
      "quote": "Let $a, b \\in \\mathbb{R}$ with $a \\le b$, let $f : [a,b] \\to \\mathbb{R}$ be\ncontinuous on the closed bounded interval $[a,b]$ ([[def-interval]],\n[[def-continuity-real]]), and let $y \\in \\mathbb{R}$ satisfy\n\n$$f(a) \\le y \\le f(b) \\qquad \\text{or} \\qquad f(b) \\le y \\le f(a) .$$\n\nThen there is $c \\in [a,b]$ with $f(c) = y$.\n\n**The construction is canonical, so no choice principle is used.** The bisection\nbelow tests the left half first and takes the right half only when the left one\nhas been ruled out, so the passage from one interval to the next is a *function*\nof that interval, and [[thm-recursion]] applies with nothing selected. This is\nthe same discipline the library uses wherever a sequence is built one term at a\ntime.\n\n**Completeness of $\\mathbb{R}$ is what does the work.** The bisection produces a\nnested sequence of closed bounded intervals whose lengths tend to $0$, and it is\n[[thm-nested-interval-property]] — hence the least-upper-bound property — that\nsupplies the point. Over an ordered field that is not complete the theorem\nfails; the witness for that, stated for an arbitrary ordered field and worked\nover $\\mathbb{Q}$, is\n[[cex-evt-and-ivt-fail-over-a-non-complete-field]], which states its own\n$\\varepsilon$-$\\delta$ continuity inline and is not an instance of this page's\ndefinition.",
      "uses": [
        "1.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Strict increase gives injectivity.  [L1]",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "Given $y>0$, [L2] provides $a<b$ with $\\exp(a)<y<\\exp(b)$. Applying [L3] on $[a,b]$ gives $c$ with $\\exp(c)=y$.  [L1, L2, L3, choose]",
      "step": "1.2",
      "inputs": [
        "L2",
        "L3",
        "L1",
        "a",
        "b",
        "choose"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Positivity gives the stated codomain, and steps 1.1 and 1.2 give bijectivity.  [step 1.1, step 1.2, L2] ∎",
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
      "reason": "The codomain (0,infinity) is fixed and nonempty."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Step 2.1 checks that 0 is excluded from the range by positivity and the limiting infimum."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "The statement includes the target value 1; exp(0)=1 from the defining series."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "Injectivity is tested on distinct inputs and surjectivity on a fixed nonempty codomain."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Step 2.1 uses both limits at the two infinite ends to bracket every y>0."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 2.1 invokes IVT to obtain an x after producing a finite bracket."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "Bijection is proved as injectivity plus surjectivity, not as an iff statement."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "Bijection is proved as injectivity plus surjectivity, not as an iff statement."
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "cor-exponential-is-a-bijection-onto-positive-reals",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "thm-exponential-is-strictly-increasing",
    "declared_target": "thm-exponential-is-strictly-increasing",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-exponential-function",
    "targetBatch": "wave14-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-exponential-is-a-bijection-onto-positive-reals",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "thm-exponential-limits-and-range",
    "declared_target": "thm-exponential-limits-and-range",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-exponential-function",
    "targetBatch": "wave14-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-exponential-is-a-bijection-onto-positive-reals",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "thm-intermediate-value",
    "declared_target": "thm-intermediate-value",
    "target_statement_provenance": "literature-derived",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-exponential-is-a-bijection-onto-positive-reals",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "cor-power-series-sums-are-continuous",
    "declared_target": "cor-power-series-sums-are-continuous",
    "target_statement_provenance": "ai-altered",
    "targetPage": "power-series-and-real-analytic-functions",
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

### `cor-power-series-sums-are-continuous`

````markdown
---
id: cor-power-series-sums-are-continuous
kind: corollary
title: "The sum of a real power series is continuous at every point strictly inside its interval of convergence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-power-series-uniform-on-compact-subintervals, thm-uniform-limit-continuous-real-functions, thm-algebra-of-continuous-functions]
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
    - title: "E. Randles, Supplementary Notes for Real Analysis"
      url: "https://personal.colby.edu/~erandles/papers/Past_Courses/Supplementary_Notes.pdf"
pipeline_run: null
---

## Statement

If $f(x)=\sum_{n\ge0}a_n(x-c)^n$ for $|x-c|<R$, then $f$ is continuous at every $x_0$ satisfying $|x_0-c|<R$.

## Facts & Assumptions

**Given:** A power-series sum $f$ and a point $x_0$ strictly inside its radius.

[L1] The series converges uniformly on each closed interval strictly inside its radius ([[thm-power-series-uniform-on-compact-subintervals]]).

[L2] Every polynomial partial sum is continuous, since constants, the identity, powers, scalar multiples and finite sums are continuous ([[thm-algebra-of-continuous-functions]]).

[L3] A uniform limit of continuous real-valued functions is continuous ([[thm-uniform-limit-continuous-real-functions]]).

## Proof

**Proof technique:** direct.

1.1 Choose $\delta>0$ so small that $[x_0-\delta,x_0+\delta]$ lies strictly inside $|x-c|<R$. [given, choose]

1.2 The polynomial partial sums are continuous on this interval by [L2] and converge uniformly there to $f$ by [L1]. [L1, L2]

2.1 By [L3], $f$ is continuous on that interval, and in particular at $x_0$. [step 1.2, L3] ∎
````

### `thm-exponential-is-strictly-increasing`

````markdown
---
id: thm-exponential-is-strictly-increasing
kind: theorem
title: "The exponential function is strictly increasing"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-exponential-series-has-infinite-radius, thm-derivative-of-exponential, cor-exponential-reciprocal-and-positivity, cor-mean-value-theorem, cor-power-series-sums-are-continuous]
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

The exponential function is continuous and strictly increasing on $\mathbb R$.

## Facts & Assumptions

**Given:** The exponential function.

[L1] Its derivative equals itself ([[thm-derivative-of-exponential]]) and it is everywhere positive ([[cor-exponential-reciprocal-and-positivity]]).

[L2] The mean value theorem applies to a continuous function on a closed interval and converts a positive interior derivative into strict increase ([[cor-mean-value-theorem]]). A power-series sum is continuous at every point strictly inside its convergence interval, and the exponential series has infinite radius ([[cor-power-series-sums-are-continuous]], [[lem-exponential-series-has-infinite-radius]]).

## Proof

**Proof technique:** direct.

1.1 If $x<y$, the mean value theorem gives $\exp(y)-\exp(x)=\exp(c)(y-x)$ for some $c\in(x,y)$.  [L1, L2]

2.1 Both factors on the right are positive, so $\exp(y)>\exp(x)$. Continuity is the cited power-series conclusion.  [step 1.1, L1, L2] ∎
````

### `thm-exponential-limits-and-range`

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

### `thm-intermediate-value`

````markdown
---
id: thm-intermediate-value
kind: theorem
title: "Intermediate value theorem, by bisection with a canonical left-half rule: a continuous function on $[a,b]$ takes every value between $f(a)$ and $f(b)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-continuity-real, thm-algebra-of-continuous-functions, thm-sequential-criterion-for-continuity, thm-nested-interval-property, def-interval, def-complete-ordered-field, thm-recursion, lem-geometric-sequence-null, thm-algebra-of-limits, lem-limit-preserves-order, def-real-limit, def-sequence, def-integer-power, lem-power-laws, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: [thm-ivt]
landmark: true
short: "intermediate value theorem"
proof_strategy: constructive
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
    - title: "Intermediate value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Intermediate_value_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.23)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.3"
      url: "https://www.jirka.org/ra/"
    - title: "E. Zakon, Mathematical Analysis, §4.9: The Intermediate Value Property"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/04%3A_Function_Limits_and_Continuity/4.09%3A_The_Intermediate_Value_Property"
pipeline_run: null
---

## Statement

Let $a, b \in \mathbb{R}$ with $a \le b$, let $f : [a,b] \to \mathbb{R}$ be
continuous on the closed bounded interval $[a,b]$ ([[def-interval]],
[[def-continuity-real]]), and let $y \in \mathbb{R}$ satisfy

$$f(a) \le y \le f(b) \qquad \text{or} \qquad f(b) \le y \le f(a) .$$

Then there is $c \in [a,b]$ with $f(c) = y$.

**The construction is canonical, so no choice principle is used.** The bisection
below tests the left half first and takes the right half only when the left one
has been ruled out, so the passage from one interval to the next is a *function*
of that interval, and [[thm-recursion]] applies with nothing selected. This is
the same discipline the library uses wherever a sequence is built one term at a
time.

**Completeness of $\mathbb{R}$ is what does the work.** The bisection produces a
nested sequence of closed bounded intervals whose lengths tend to $0$, and it is
[[thm-nested-interval-property]] — hence the least-upper-bound property — that
supplies the point. Over an ordered field that is not complete the theorem
fails; the witness for that, stated for an arbitrary ordered field and worked
over $\mathbb{Q}$, is
[[cex-evt-and-ivt-fail-over-a-non-complete-field]], which states its own
$\varepsilon$-$\delta$ continuity inline and is not an instance of this page's
definition.

## Facts & Assumptions

**Given:** Reals $a \le b$, a function $f : [a,b] \to \mathbb{R}$ continuous on $[a,b]$, and a real $y$ with $f(a) \le y \le f(b)$ or $f(b) \le y \le f(a)$.

[L1] Scalar multiples of continuous functions are continuous, so $(-1)f$ is continuous on $[a,b]$ ([[thm-algebra-of-continuous-functions]], [[def-continuity-real]]).

[L2] Recursion: for a set $X$, an element $x_0 \in X$ and a function $F : X \to X$ there is a unique $g : \mathbb{N} \to X$ with $g(0) = x_0$ and $g(k+1) = F(g(k))$ for every $k$ ([[thm-recursion]]).

[L3] Nested intervals: if $I_k = [a_k,b_k]$ with $a_k \le b_k$ and $I_{k+1} \subseteq I_k$ for every $k \in \mathbb{N}$, then $\bigcap_{k} I_k$ is nonempty, and it is a single point exactly when the lengths $b_k - a_k$ tend to $0$ ([[thm-nested-interval-property]], [[def-interval]], [[def-real-limit]]).

[L4] Null geometric sequences: $|r| < 1$ implies $r^{k} \to 0$; and a constant multiple of a null sequence is null, while a constant sequence converges to that constant ([[lem-geometric-sequence-null]], [[thm-algebra-of-limits]], [[def-integer-power]], [[def-sequence]]).

[L5] Powers: $(2^{-1})^{k} = (2^{k})^{-1}$ for every $k \in \mathbb{N}$ ([[lem-power-laws]], [[def-integer-power]]).

[L6] Sequential criterion, the choice-free direction: if $f$ is continuous at $c$ and $x_k \in [a,b]$ with $x_k \to c$, then $f(x_k) \to f(c)$ ([[thm-sequential-criterion-for-continuity]], [[def-continuity-real]]).

[L7] Limits preserve non-strict inequalities ([[lem-limit-preserves-order]]).

[L8] Order and field arithmetic in $\mathbb{R}$: trichotomy and totality, so exactly one of $f(m) \ge y$ and $f(m) < y$ holds; halving and the ordered-field identities ([[def-ordered-field]], [[def-complete-ordered-field]]); and $|t| \le s$ whenever $-s \le t \le s$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** constructive.

1.1 **Reduction.** It is enough to prove the theorem under the hypothesis $f(a) \le y \le f(b)$. Indeed, in the remaining case $f(b) \le y \le f(a)$, put $h := (-1)f$ and $z := -y$; then $h$ is continuous on $[a,b]$ by [L1] and $h(a) = -f(a) \le -y = z \le -f(b) = h(b)$, so a point $c \in [a,b]$ with $h(c) = z$ is a point with $f(c) = y$. [L1, L8, suffices: assume f(a) le y le f(b)]

1.2 **The bisection map.** Assume $f(a) \le y \le f(b)$ and put $$X \;:=\; \bigl\{\, (u,v) \in \mathbb{R} \times \mathbb{R} \ : \ a \le u \le v \le b,\ f(u) \le y \le f(v) \,\bigr\},$$ so $(a,b) \in X$. For $(u,v) \in X$ write $m := (u+v)/2$, which satisfies $a \le u \le m \le v \le b$ and so lies in $[a,b]$, and define $$F(u,v) \;:=\; \begin{cases} (u,\ m) & \text{if } f(m) \ge y,\\ (m,\ v) & \text{if } f(m) < y. \end{cases}$$ By trichotomy exactly one clause applies, so $F$ is a function on $X$; and $F(u,v) \in X$ in both clauses, since in the first $f(u) \le y \le f(m)$ and in the second $f(m) \le y \le f(v)$. **The left half is tested first and the right half is taken only when the left is excluded, so nothing is selected.** [L8, construct]

2.1 **The nested sequence.** By [L2] applied to $X$, the element $(a,b)$ and the map $F$, there is a unique $g : \mathbb{N} \to X$ with $g(0) = (a,b)$ and $g(k+1) = F(g(k))$. Write $g(k) = (a_k,b_k)$ and $I_k := [a_k,b_k]$. Then for every $k$: $a \le a_k \le b_k \le b$ and $f(a_k) \le y \le f(b_k)$, because $g(k) \in X$; and $I_{k+1} \subseteq I_k$, since in either clause of the definition of $F$ the new endpoints lie in $[a_k,b_k]$ and the new interval is $[a_k,m_k]$ or $[m_k,b_k]$ with $m_k = (a_k+b_k)/2$. [step 1.2, L2, L8]

3.1 **The lengths.** In both clauses the new length is $m_k - a_k = (b_k - a_k)/2$ or $b_k - m_k = (b_k - a_k)/2$, so $b_{k+1} - a_{k+1} = (b_k - a_k)/2$; with $b_0 - a_0 = b - a$ an induction on $k$ gives $b_k - a_k = (b-a)\,(2^{-1})^{k}$ for every $k \in \mathbb{N}$, that is $(b-a)/2^{k}$ by [L5]. Since $|2^{-1}| < 1$, [L4] gives $(2^{-1})^{k} \to 0$ and hence $b_k - a_k \to 0$. [step 2.1, L4, L5, L8]

4.1 **The point.** By [L3] applied to the nested family $(I_k)$, whose lengths tend to $0$ by step 3.1, the intersection $\bigcap_k I_k$ is a single point; call it $c$. Then $c \in I_0 = [a,b]$ and $a_k \le c \le b_k$ for every $k$. [step 2.1, step 3.1, L3, construct]

5.1 **The endpoints converge to $c$.** Let a rational $\varepsilon > 0$ be given. By step 3.1 there is $K$ with $b_k - a_k < \varepsilon$ for all $k \ge K$. For such $k$, from $a_k \le c \le b_k$ we get $-(b_k - a_k) \le a_k - c \le 0$ and $0 \le b_k - c \le b_k - a_k$, so $|a_k - c| \le b_k - a_k < \varepsilon$ and $|b_k - c| \le b_k - a_k < \varepsilon$ by [L8]. Hence $a_k \to c$ and $b_k \to c$. [step 3.1, step 4.1, L8]

6.1 **Passing to the limit.** The point $c$ lies in $[a,b]$, so $f$ is continuous at $c$, and [L6] applied to the two sequences of step 5.1 gives $f(a_k) \to f(c)$ and $f(b_k) \to f(c)$. [step 4.1, step 5.1, L6]

7.1 By step 2.1, $f(a_k) \le y$ for every $k$; the constant sequence with value $y$ converges to $y$ by [L4], so [L7] gives $f(c) \le y$. Likewise $y \le f(b_k)$ for every $k$ gives $y \le f(c)$. Hence $f(c) = y$. [step 2.1, step 6.1, L4, L7, L8]

8.1 A point $c \in [a,b]$ with $f(c) = y$ has therefore been constructed, under the reduction of step 1.1 and hence in both cases of the hypothesis. [step 1.1, step 4.1, step 7.1, discharge-construct: c is the unique point of the nested intersection] ∎

## Remarks

- **Why the left half is tested first.** The bisection has to choose one of two halves at every stage, and if the rule were "choose a half in which the sign change persists" the construction would be a dependent choice, not a recursion. Testing $f(m) \ge y$ and taking the left half in that case makes the successor a function of its predecessor, so [[thm-recursion]] applies verbatim. The same device is used in [[thm-perfect-set-uncountable-r]] and in the bisection proof of Heine-Borel.

- **What the theorem does *not* say.** It does not say that $c$ is unique, and it does not say that the set of solutions is an interval; $f$ may take the value $y$ on a complicated set. It also does not say that a function with the intermediate value property is continuous — that converse is false, and the witness for it needs machinery that is not available at this point in the reading order.

- **Only the choice-free direction of the sequential criterion is used.** Step 6.1 turns a convergent sequence into a convergent image sequence, which is the implication proved in ZF ([[thm-sequential-criterion-for-continuity]]); the converse, which spends countable choice, is never invoked here.
````

