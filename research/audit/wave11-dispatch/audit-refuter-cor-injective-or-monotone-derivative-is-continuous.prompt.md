# Audit proof-refuter brief — Wave 11, A6

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
For an `ai-generated` Statement or counterexample, actively search for a
counterexample to the public claim or a failure in the witness. A false public
claim, invalid proof, missing necessary hypothesis, circularity, or materially
inaccurate load-bearing citation is fatal; a quickly closable gap is nonfatal.

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

- high risk (6): 4 declared dependencies; 4 cited facts; boundary-sensitive language

## Target item — `cor-injective-or-monotone-derivative-is-continuous`

Normalized current SHA-256: `a697858b17ddafe16dc21e493fd9de9198421ec61b5bc821a1d98beafe63a521`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: cor-injective-or-monotone-derivative-is-continuous
kind: corollary
title: "An injective or monotone derivative on an interval is continuous"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-darboux-theorem-for-derivatives, lem-injective-darboux-function-is-strictly-monotone, lem-monotone-with-interval-image-is-continuous, def-monotone-function]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, Taylor's theorem and related calculus"
      url: "https://www.jirka.org/ra/html/sec_taylor.html"
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 lecture notes"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/lecture-notes/"
    - title: "Peer-reviewed article on injective Darboux functions (DOI Serbia)"
      url: "https://doiserbia.nb.rs/Article.aspx?id=1452-86302100024M"
    - title: "J. Lebl, Basic Analysis I, Mean value theorem"
      url: "https://www.jirka.org/ra/html/sec_mvt.html"
    - title: "J. Lebl, Basic Analysis I, Monotone functions"
      url: "https://www.jirka.org/ra/html/sec_monotonefunc.html"
pipeline_run: null
---

## Statement

Let $f$ be differentiable on an interval. If $f'$ is injective, or if $f'$ is monotone, then $f'$ is continuous.

## Facts & Assumptions

**Given:** The derivative $f'$ and one of the two stated hypotheses.

[L1] Every derivative has the intermediate value property ([[thm-darboux-theorem-for-derivatives]]).

[L2] An injective Darboux function is strictly monotone ([[lem-injective-darboux-function-is-strictly-monotone]]).

[L3] A nondecreasing function on an interval whose image is an interval is continuous ([[lem-monotone-with-interval-image-is-continuous]]); the increasing, decreasing, nondecreasing, and nonincreasing alternatives are those of [[def-monotone-function]].

## Proof

**Proof technique:** cases.

1.1 If $f'$ is injective, [L1] and [L2] make it strictly monotone. If it is increasing, [L1] and [L3] make it continuous; if it is decreasing, apply [L3] to $-f'$, whose interval images are the negatives of the interval images of $f'$.  [assume-case injective, L1, L2, L3]

1.2 If $f'$ is nondecreasing, [L1] and [L3] make it continuous. If it is nonincreasing, the same argument applied to $-f'$ gives continuity.  [assume-case monotone, L1, L3]

2.1 These are the two stated alternatives.  [step 1.1, step 1.2, cases-exhaustive] ∎
````

## Wave 11 provenance row

```json
{
  "id": "cor-injective-or-monotone-derivative-is-continuous",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://doiserbia.nb.rs/Article.aspx?id=1452-86302100024M",
    "https://www.jirka.org/ra/html/sec_mvt.html",
    "https://www.jirka.org/ra/html/sec_monotonefunc.html"
  ],
  "rationale": "The literature supplies the three exact ingredients: derivatives have the Darboux property, injective Darboux functions are strictly monotone, and a monotone function on an interval with interval image is continuous. The item packages them into the injective-or-monotone derivative corollary.",
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
      "source": "thm-darboux-theorem-for-derivatives",
      "source_section": "Statement",
      "quote": "If $I\\subseteq\\mathbb R$ is an interval and $f:I\\to\\mathbb R$ is differentiable, then $f'$ has the intermediate value property ([[def-intermediate-value-property]]).",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-injective-darboux-function-is-strictly-monotone",
      "source_section": "Statement",
      "quote": "An injective function $f:I\\to\\mathbb R$ on an interval $I$ with the intermediate value property is strictly monotone.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-monotone-with-interval-image-is-continuous",
      "source_section": "Statement",
      "quote": "Let $I \\subseteq \\mathbb{R}$ be order-convex ([[def-interval]]) and let\n$f : I \\to \\mathbb{R}$ satisfy\n\n$$f(x) \\le f(y) \\qquad \\text{whenever } x, y \\in I \\text{ and } x \\le y .$$\n\nIf the image $f[I]$ is order-convex, then $f$ is continuous on $I$\n([[def-continuity-real]]).\n\n**No definition of a monotone function is used, and none is available at this\npoint in the reading order.** The hypothesis is written out as the displayed\ninequality; the classification of monotone functions and their discontinuities\ncomes later in the library. Equivalently, by\n[[thm-connected-subsets-of-r-are-intervals]], the hypothesis on the image is\nthat $f[I]$ is connected ([[def-connected-r]]).\n\n**The hypothesis on the image cannot be dropped.** Define $f$ on $I = [0,1]$ by\n$f(x) := x$ for $x < 1$ and $f(1) := 2$. It satisfies the displayed inequality,\nits image is $[0,1) \\cup \\{2\\}$, which is not order-convex, and it is not\ncontinuous at $1$: no $\\delta$ works for $\\varepsilon = 1/2$, since points of\n$[0,1)$ arbitrarily close to $1$ have values close to $1$, at distance close to\n$1$ from $f(1) = 2$.\n\n**This is a genuine converse to the intermediate value property, in the presence\nof the inequality.** It does not need one-sided limits of monotone functions,\nwhich are not available at this point in the reading order; the entire proof is\nthe two paragraphs below, which read the required $\\delta$ off the image.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L3",
      "source": "def-monotone-function",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]). Let $A \\subseteq \\mathbb{R}$ and let\n$f : A \\to \\mathbb{R}$. Then $f$ is:\n\n- **nondecreasing** when $f(x) \\le f(y)$ for all $x, y \\in A$ with $x \\le y$;\n- **increasing**, or *strictly increasing*, when $f(x) < f(y)$ for all\n  $x, y \\in A$ with $x < y$;\n- **nonincreasing** when $f(x) \\ge f(y)$ for all $x, y \\in A$ with $x \\le y$;\n- **decreasing**, or *strictly decreasing*, when $f(x) > f(y)$ for all\n  $x, y \\in A$ with $x < y$;\n- **monotone** when it is nondecreasing or nonincreasing;\n- **strictly monotone** when it is increasing or decreasing.\n\nThe naming follows the convention of [[def-monotone-sequence]], which is the\nconvention of this library throughout: *increasing* is the strict notion and\n*nondecreasing* the weak one.\n\n**An increasing function is nondecreasing, and a decreasing function is\nnonincreasing.** For $x \\le y$ either $x < y$, and then $f(x) < f(y)$, hence\n$f(x) \\le f(y)$; or $x = y$, and then $f(x) = f(y)$. The same argument with the\ninequalities reversed gives the second claim. So strictly monotone implies\nmonotone.\n\n**A strictly monotone function is injective**\n([[def-injection-surjection-bijection]]). Let $f$ be increasing and let\n$x, y \\in A$ with $x \\ne y$. By trichotomy either $x < y$, and then\n$f(x) < f(y)$, or $y < x$, and then $f(y) < f(x)$; in both cases\n$f(x) \\ne f(y)$. The decreasing case is the same argument. The converse fails,\nand the failure is not exotic: a continuous injection on an interval *is*\nstrictly monotone ([[thm-continuous-injection-on-an-interval-is-strictly-monotone]]),\nbut on a domain that is not an interval it need not be.\n\n**Negation exchanges the two directions.** For $g := -f$, that is\n$g(x) := -f(x)$, the four conditions above are exchanged in pairs: $f$ is\nnondecreasing exactly when $g$ is nonincreasing, and $f$ is increasing exactly\nwhen $g$ is decreasing, because $u \\le v$ holds exactly when $-v \\le -u$\n([[def-ordered-field]]). Several proofs below use this to reduce a nonincreasing\ncase to a nondecreasing one.\n\n**Monotone on a set, not at a point.** All six conditions are conditions on the\nwhole of $A$; unlike continuity ([[def-continuity-real]]) there is no pointwise\nversion, and none is used in this library. The domain $A$ is an arbitrary subset\nof $\\mathbb{R}$; where a result needs $A$ to be an interval\n([[def-interval]]) it says so, and the hypothesis is never decoration.\n\n### The dictionary to monotone sequences\n\nA sequence of reals is a function $x : \\mathbb{N} \\to \\mathbb{R}$\n([[def-sequence]]), and [[def-monotone-sequence]] calls it nondecreasing when\n$x_j \\le x_k$ for all $j \\le k$, increasing when $x_j < x_k$ for all $j < k$,\nand so on. Those are **the same four conditions as above**, read with the\nordered set $\\mathbb{N}$ in place of the ordered subset $A \\subseteq \\mathbb{R}$\nand with the comparison of indices in place of the comparison of arguments. So\nnothing new is introduced here for sequences, and the two vocabularies may be\nused interchangeably: the words *nondecreasing*, *increasing*, *nonincreasing*,\n*decreasing*, *monotone* and *strictly monotone* mean the corresponding\ncondition on the domain at hand.\n\nOne consequence is used repeatedly, and it has to be stated carefully because\ncomposition does **not** simply preserve the four words. Let $(x_k)$ be a\n**nondecreasing** sequence with $x_k \\in A$ for every $k$, so that $j \\le k$ gives\n$x_j \\le x_k$. Then:\n\n- if $f$ is nondecreasing, $(f(x_k))$ is nondecreasing, since $f(x_j) \\le f(x_k)$;\n- if $f$ is nonincreasing, $(f(x_k))$ is **nonincreasing**, since\n  $f(x_j) \\ge f(x_k)$.\n\nSo along a nondecreasing sequence the composite inherits the direction of $f$;\nand with $(x_k)$ increasing and $f$ increasing, $(f(x_k))$ is increasing, while\nwith $(x_k)$ increasing and $f$ decreasing, $(f(x_k))$ is decreasing.\n\n**Along a nonincreasing sequence the direction is reversed, not inherited.** If\n$(x_k)$ is nonincreasing and $f$ is nonincreasing, then $j \\le k$ gives\n$x_j \\ge x_k$ and hence $f(x_j) \\le f(x_k)$: the composite is **nondecreasing**.\nThe witness is $f(x) = -x$ on $A = \\mathbb{R}$ with $x_k = -k$, where both $f$ and\n$(x_k)$ are decreasing and $f(x_k) = k$ is increasing. Two order-reversing maps\ncompose to an order-preserving one, exactly as for the four words applied to\nfunctions.",
      "uses": [
        "1.1",
        "1.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "cor-injective-or-monotone-derivative-is-continuous-step-1-1",
      "claim": "If $f'$ is injective, [L1] and [L2] make it strictly monotone. If it is increasing, [L1] and [L3] make it continuous; if it is decreasing, apply [L3] to $-f'$, whose interval images are the negatives of the interval images of $f'$. [assume-case injective, L1, L2, L3]",
      "step": "1.1",
      "inputs": [
        "assume-case injective",
        "L1",
        "L2",
        "L3"
      ]
    },
    {
      "id": "cor-injective-or-monotone-derivative-is-continuous-step-1-2",
      "claim": "If $f'$ is nondecreasing, [L1] and [L3] make it continuous. If it is nonincreasing, the same argument applied to $-f'$ gives continuity. [assume-case monotone, L1, L3]",
      "step": "1.2",
      "inputs": [
        "assume-case monotone",
        "L1",
        "L3"
      ]
    },
    {
      "id": "cor-injective-or-monotone-derivative-is-continuous-step-2-1",
      "claim": "These are the two stated alternatives. [step 1.1, step 1.2, cases-exhaustive] ∎",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "step 1.2",
        "cases-exhaustive"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "cor-injective-or-monotone-derivative-is-continuous concerns stipulated functions and points; no empty family, empty sum, or empty choice domain changes its assertion."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "cor-injective-or-monotone-derivative-is-continuous has no counting, exponent, or value parameter whose zero case changes the proof."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "cor-injective-or-monotone-derivative-is-continuous has no counting, exponent, or unit parameter whose one case changes the proof."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "cor-injective-or-monotone-derivative-is-continuous has no interval-length or denominator parameter that may collapse degenerately."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "cor-injective-or-monotone-derivative-is-continuous contains no interval-endpoint assertion requiring a separate endpoint case."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.1 establishes or explicitly fixes the object before the proof chooses or extremizes it."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The Statement of cor-injective-or-monotone-derivative-is-continuous is not a biconditional, so it has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The Statement of cor-injective-or-monotone-derivative-is-continuous is not a biconditional, so it has no reverse iff direction."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "pending",
    "reviewer": "Alpha",
    "notes": "Audit-Beta captured the published A2 contract; independent risk routing occurs after A3."
  }
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "cor-injective-or-monotone-derivative-is-continuous",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "thm-darboux-theorem-for-derivatives",
    "declared_target": "thm-darboux-theorem-for-derivatives",
    "target_statement_provenance": "literature-derived",
    "targetPage": "darboux-lhopital-and-taylor",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-injective-or-monotone-derivative-is-continuous",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "lem-injective-darboux-function-is-strictly-monotone",
    "declared_target": "lem-injective-darboux-function-is-strictly-monotone",
    "target_statement_provenance": "literature-derived",
    "targetPage": "darboux-lhopital-and-taylor",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-injective-or-monotone-derivative-is-continuous",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "lem-monotone-with-interval-image-is-continuous",
    "declared_target": "lem-monotone-with-interval-image-is-continuous",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-injective-or-monotone-derivative-is-continuous",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "def-monotone-function",
    "declared_target": "def-monotone-function",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-functions-and-discontinuities",
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

### `def-monotone-function`

````markdown
---
id: def-monotone-function
kind: definition
title: "Nondecreasing, increasing (strictly increasing), nonincreasing, decreasing, monotone and strictly monotone real functions on a subset of $\\mathbb{R}$, with the dictionary to monotone sequences"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
  evidence: semantic-source
deps: [def-complete-ordered-field, def-real-order, def-interval, def-monotone-sequence, def-sequence, def-ordered-field, def-injection-surjection-bijection]
justified_by: []
aliases: [def-monotone-real-function, def-strictly-monotone]
landmark: true
short: "monotone real function"
verification:
  audited: 2026-07-28
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Monotonic function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotonic_function"
    - title: "Monotone Functions (Analysis WebNotes)"
      url: "https://mathcs.org/analysis/reals/cont/defs/monofun.html"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) with its order
([[def-real-order]]). Let $A \subseteq \mathbb{R}$ and let
$f : A \to \mathbb{R}$. Then $f$ is:

- **nondecreasing** when $f(x) \le f(y)$ for all $x, y \in A$ with $x \le y$;
- **increasing**, or *strictly increasing*, when $f(x) < f(y)$ for all
  $x, y \in A$ with $x < y$;
- **nonincreasing** when $f(x) \ge f(y)$ for all $x, y \in A$ with $x \le y$;
- **decreasing**, or *strictly decreasing*, when $f(x) > f(y)$ for all
  $x, y \in A$ with $x < y$;
- **monotone** when it is nondecreasing or nonincreasing;
- **strictly monotone** when it is increasing or decreasing.

The naming follows the convention of [[def-monotone-sequence]], which is the
convention of this library throughout: *increasing* is the strict notion and
*nondecreasing* the weak one.

**An increasing function is nondecreasing, and a decreasing function is
nonincreasing.** For $x \le y$ either $x < y$, and then $f(x) < f(y)$, hence
$f(x) \le f(y)$; or $x = y$, and then $f(x) = f(y)$. The same argument with the
inequalities reversed gives the second claim. So strictly monotone implies
monotone.

**A strictly monotone function is injective**
([[def-injection-surjection-bijection]]). Let $f$ be increasing and let
$x, y \in A$ with $x \ne y$. By trichotomy either $x < y$, and then
$f(x) < f(y)$, or $y < x$, and then $f(y) < f(x)$; in both cases
$f(x) \ne f(y)$. The decreasing case is the same argument. The converse fails,
and the failure is not exotic: a continuous injection on an interval *is*
strictly monotone ([[thm-continuous-injection-on-an-interval-is-strictly-monotone]]),
but on a domain that is not an interval it need not be.

**Negation exchanges the two directions.** For $g := -f$, that is
$g(x) := -f(x)$, the four conditions above are exchanged in pairs: $f$ is
nondecreasing exactly when $g$ is nonincreasing, and $f$ is increasing exactly
when $g$ is decreasing, because $u \le v$ holds exactly when $-v \le -u$
([[def-ordered-field]]). Several proofs below use this to reduce a nonincreasing
case to a nondecreasing one.

**Monotone on a set, not at a point.** All six conditions are conditions on the
whole of $A$; unlike continuity ([[def-continuity-real]]) there is no pointwise
version, and none is used in this library. The domain $A$ is an arbitrary subset
of $\mathbb{R}$; where a result needs $A$ to be an interval
([[def-interval]]) it says so, and the hypothesis is never decoration.

### The dictionary to monotone sequences

A sequence of reals is a function $x : \mathbb{N} \to \mathbb{R}$
([[def-sequence]]), and [[def-monotone-sequence]] calls it nondecreasing when
$x_j \le x_k$ for all $j \le k$, increasing when $x_j < x_k$ for all $j < k$,
and so on. Those are **the same four conditions as above**, read with the
ordered set $\mathbb{N}$ in place of the ordered subset $A \subseteq \mathbb{R}$
and with the comparison of indices in place of the comparison of arguments. So
nothing new is introduced here for sequences, and the two vocabularies may be
used interchangeably: the words *nondecreasing*, *increasing*, *nonincreasing*,
*decreasing*, *monotone* and *strictly monotone* mean the corresponding
condition on the domain at hand.

One consequence is used repeatedly, and it has to be stated carefully because
composition does **not** simply preserve the four words. Let $(x_k)$ be a
**nondecreasing** sequence with $x_k \in A$ for every $k$, so that $j \le k$ gives
$x_j \le x_k$. Then:

- if $f$ is nondecreasing, $(f(x_k))$ is nondecreasing, since $f(x_j) \le f(x_k)$;
- if $f$ is nonincreasing, $(f(x_k))$ is **nonincreasing**, since
  $f(x_j) \ge f(x_k)$.

So along a nondecreasing sequence the composite inherits the direction of $f$;
and with $(x_k)$ increasing and $f$ increasing, $(f(x_k))$ is increasing, while
with $(x_k)$ increasing and $f$ decreasing, $(f(x_k))$ is decreasing.

**Along a nonincreasing sequence the direction is reversed, not inherited.** If
$(x_k)$ is nonincreasing and $f$ is nonincreasing, then $j \le k$ gives
$x_j \ge x_k$ and hence $f(x_j) \le f(x_k)$: the composite is **nondecreasing**.
The witness is $f(x) = -x$ on $A = \mathbb{R}$ with $x_k = -k$, where both $f$ and
$(x_k)$ are decreasing and $f(x_k) = k$ is increasing. Two order-reversing maps
compose to an order-preserving one, exactly as for the four words applied to
functions.
````

### `lem-injective-darboux-function-is-strictly-monotone`

````markdown
---
id: lem-injective-darboux-function-is-strictly-monotone
kind: lemma
title: "An injective Darboux function on an interval is strictly monotone"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-interval, def-intermediate-value-property, def-monotone-function]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, Taylor's theorem and related calculus"
      url: "https://www.jirka.org/ra/html/sec_taylor.html"
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 lecture notes"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/lecture-notes/"
    - title: "Peer-reviewed article on injective Darboux functions (DOI Serbia)"
      url: "https://doiserbia.nb.rs/Article.aspx?id=1452-86302100024M"
pipeline_run: null
---

## Statement

An injective function $f:I\to\mathbb R$ on an interval $I$ with the intermediate value property is strictly monotone.

## Facts & Assumptions

**Given:** An injective Darboux function $f$ on an interval $I$.

[L1] The pointwise Darboux property in [[def-intermediate-value-property]] attains every value between $f(a)$ and $f(b)$ on $[a,b]$.

[L2] Strict monotonicity has the order formulations in [[def-monotone-function]].

## Proof

**Proof technique:** contradiction.

1.1 For any $a<b<c$ in $I$, $f(b)$ must lie strictly between $f(a)$ and $f(c)$. Indeed, if it lies above both, a value strictly between $\max\{f(a),f(c)\}$ and $f(b)$ is attained once in $(a,b)$ and once in $(b,c)$, contradicting injectivity; the case below both is analogous.  [assume-contra, L1, given]

2.1 Fix $a<b$. If $f(a)<f(b)$, step 1.1 forces $f(x)<f(y)$ for every $x<y$ in $I$; inserting points between or beyond $a,b$ proves all possible placements. If $f(b)<f(a)$, the symmetric argument gives strict decrease.  [step 1.1, L2, cases]

3.1 Injectivity excludes equality, so one of the two alternatives holds and $f$ is strictly monotone.  [step 2.1, discharge-contradiction] ∎
````

### `lem-monotone-with-interval-image-is-continuous`

````markdown
---
id: lem-monotone-with-interval-image-is-continuous
kind: lemma
title: "A function on an interval satisfying $f(x) \\le f(y)$ whenever $x \\le y$, whose image is order-convex, is continuous"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-continuity-real, def-interval, thm-connected-subsets-of-r-are-intervals, def-connected-r, def-neighbourhood-r, def-max-min, lem-finite-set-has-max, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: [lem-monotone-darboux-implies-continuous]
landmark: true
short: "monotone with order-convex image is continuous"
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
    - title: "Monotonic function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotonic_function"
    - title: "Intermediate value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Intermediate_value_theorem"
    - title: "J. Lebl, Basic Analysis I, §3.3"
      url: "https://www.jirka.org/ra/"
    - title: "E. Zakon, Mathematical Analysis, §4.9: The Intermediate Value Property"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/04%3A_Function_Limits_and_Continuity/4.09%3A_The_Intermediate_Value_Property"
pipeline_run: null
---

## Statement

Let $I \subseteq \mathbb{R}$ be order-convex ([[def-interval]]) and let
$f : I \to \mathbb{R}$ satisfy

$$f(x) \le f(y) \qquad \text{whenever } x, y \in I \text{ and } x \le y .$$

If the image $f[I]$ is order-convex, then $f$ is continuous on $I$
([[def-continuity-real]]).

**No definition of a monotone function is used, and none is available at this
point in the reading order.** The hypothesis is written out as the displayed
inequality; the classification of monotone functions and their discontinuities
comes later in the library. Equivalently, by
[[thm-connected-subsets-of-r-are-intervals]], the hypothesis on the image is
that $f[I]$ is connected ([[def-connected-r]]).

**The hypothesis on the image cannot be dropped.** Define $f$ on $I = [0,1]$ by
$f(x) := x$ for $x < 1$ and $f(1) := 2$. It satisfies the displayed inequality,
its image is $[0,1) \cup \{2\}$, which is not order-convex, and it is not
continuous at $1$: no $\delta$ works for $\varepsilon = 1/2$, since points of
$[0,1)$ arbitrarily close to $1$ have values close to $1$, at distance close to
$1$ from $f(1) = 2$.

**This is a genuine converse to the intermediate value property, in the presence
of the inequality.** It does not need one-sided limits of monotone functions,
which are not available at this point in the reading order; the entire proof is
the two paragraphs below, which read the required $\delta$ off the image.

## Facts & Assumptions

**Given:** An order-convex set $I \subseteq \mathbb{R}$ and a function $f : I \to \mathbb{R}$ with $f(x) \le f(y)$ whenever $x, y \in I$ and $x \le y$, such that $f[I]$ is order-convex; and a point $c \in I$ together with a real $\varepsilon > 0$.

[L1] Continuity of $f$ at $c$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|f(x) - f(c)| < \varepsilon$ for every $x \in I$ satisfying $|x - c| < \delta$ ([[def-continuity-real]], [[def-neighbourhood-r]]).

[L2] Order-convexity of $f[I]$: if $u, v \in f[I]$ and $u \le w \le v$ then $w \in f[I]$ ([[def-interval]]); equivalently $f[I]$ is connected ([[thm-connected-subsets-of-r-are-intervals]], [[def-connected-r]]).

[L3] Order and field arithmetic in $\mathbb{R}$: trichotomy and totality of the order, so any two reals are comparable and exactly one of $r < c$, $r = c$, $r > c$ holds; $\varepsilon > 0$ gives $\varepsilon/2 > 0$ and $f(c) - \varepsilon < f(c) - \varepsilon/2 < f(c)$ ([[def-ordered-field]]).

[L4] The minimum of a two-element set of reals exists and is one of the two elements ([[lem-finite-set-has-max]], [[def-max-min]]).

[L5] Absolute value: for $s > 0$, $|t| < s$ holds exactly when $-s < t < s$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 **A point of $I$ below $c$ with a value close to $f(c)$, when one exists at all.** Suppose some $p \in I$ has $p < c$. We claim there is $q \in I$ with $q < c$ and $f(q) > f(c) - \varepsilon$. If there were none, then $f(q) \le f(c) - \varepsilon$ for every $q \in I$ with $q < c$, and in particular $f(p) \le f(c) - \varepsilon$. Put $w := f(c) - \varepsilon/2$, so $f(p) \le f(c) - \varepsilon < w < f(c)$ by [L3]. Since $f(p), f(c) \in f[I]$, [L2] gives $r \in I$ with $f(r) = w$. By [L3] exactly one of $r < c$, $r = c$, $r > c$ holds: the first gives $w = f(r) \le f(c) - \varepsilon < w$, the second gives $w = f(c)$, and the third gives $w = f(r) \ge f(c)$ by the monotonicity hypothesis; each contradicts $f(c) - \varepsilon < w < f(c)$. So the claimed $q$ exists. [L2, L3]

2.1 **The left radius.** If some $p \in I$ has $p < c$, fix $q$ as in step 1.1 and put $\delta_1 := c - q > 0$; then every $x \in I$ with $c - \delta_1 < x \le c$ satisfies $q < x \le c$, hence $f(q) \le f(x) \le f(c)$ by monotonicity, hence $f(c) - \varepsilon < f(x) \le f(c)$. If no point of $I$ lies below $c$, put $\delta_1 := 1$; then the only $x \in I$ with $c - \delta_1 < x \le c$ is $x = c$, for which $f(c) - \varepsilon < f(c) = f(x) \le f(c)$ holds as well. In both cases $\delta_1 > 0$ and every $x \in I$ with $c - \delta_1 < x \le c$ satisfies $f(c) - \varepsilon < f(x) \le f(c)$. [step 1.1, L3, choose]

2.2 **The right radius, symmetrically.** Suppose some $p \in I$ has $p > c$. If every $s \in I$ with $s > c$ had $f(s) \ge f(c) + \varepsilon$, then with $w' := f(c) + \varepsilon/2$ we would have $f(c) < w' < f(c) + \varepsilon \le f(p)$, so [L2] would give $r \in I$ with $f(r) = w'$; but by [L3] exactly one of $r > c$, $r = c$, $r < c$ holds, and the first gives $w' = f(r) \ge f(c) + \varepsilon > w'$, the second gives $w' = f(c)$, and the third gives $w' = f(r) \le f(c)$ by the monotonicity hypothesis, each contradicting $f(c) < w' < f(c) + \varepsilon$. So there is $s \in I$ with $s > c$ and $f(s) < f(c) + \varepsilon$; put $\delta_2 := s - c > 0$. If no point of $I$ lies above $c$, put $\delta_2 := 1$. In both cases $\delta_2 > 0$ and every $x \in I$ with $c \le x < c + \delta_2$ satisfies $f(c) \le f(x) < f(c) + \varepsilon$. [step 1.1, L2, L3, choose]

3.1 **Combining.** Put $\delta := \min\{\delta_1, \delta_2\}$, which is a positive real by [L4]. Let $x \in I$ with $|x - c| < \delta$, so $c - \delta < x < c + \delta$ by [L5]. By totality either $x \le c$, and then $c - \delta_1 \le c - \delta < x \le c$, so step 2.1 gives $f(c) - \varepsilon < f(x) \le f(c)$; or $x \ge c$, and then $c \le x < c + \delta \le c + \delta_2$, so step 2.2 gives $f(c) \le f(x) < f(c) + \varepsilon$. In either case $-\varepsilon < f(x) - f(c) < \varepsilon$, that is $|f(x) - f(c)| < \varepsilon$ by [L5]. [step 2.1, step 2.2, L3, L4, L5]

4.1 The point $c \in I$ and the real $\varepsilon > 0$ were arbitrary, so by [L1] the function $f$ is continuous at every point of $I$, that is, continuous on $I$. [step 3.1, L1] ∎

## Remarks

- **Where order-convexity of the image is used, and where it is not.** It is used exactly twice, in steps 1.1 and 2.2, each time to convert a value strictly between two attained values into an attained value. Nothing else in the argument looks at the image. In particular, no continuity of $f$ is assumed anywhere, which is what makes the lemma a converse rather than a reformulation.

- **The endpoint cases are not a technicality.** If $c$ is the left endpoint of $I$ there is no point of $I$ below it, and the left half of the estimate is vacuous; the same at the right. Handling them by the fixed radius $1$ keeps the proof free of any hypothesis that $I$ be open or nondegenerate.

- **What this lemma is for.** It is the standard route to continuity of a function defined by a monotone construction whose image is known independently — the Cantor function is the classical instance, its image being all of $[0,1]$ — and it is stated here as a standalone lemma so that a later page may cite it rather than repeat the argument.
````

### `thm-darboux-theorem-for-derivatives`

````markdown
---
id: thm-darboux-theorem-for-derivatives
kind: theorem
title: "Darboux's theorem: every derivative has the intermediate-value property"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-derivative, cor-differentiable-implies-continuous, thm-heine-borel-r, thm-extreme-value-r, thm-fermat-interior-extremum, thm-algebra-of-derivatives, lem-derivative-of-a-power, def-interval, def-intermediate-value-property]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, Taylor's theorem and related calculus"
      url: "https://www.jirka.org/ra/html/sec_taylor.html"
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 lecture notes"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/lecture-notes/"
    - title: "J. Lebl, Basic Analysis I, Mean value theorem"
      url: "https://www.jirka.org/ra/html/sec_mvt.html"
    - title: "Colgate University MATH 323, Chapter 5 notes"
      url: "https://math.colgate.edu/math323/dlantz/extras/notesC5.pdf"
pipeline_run: null
---

## Statement

If $I\subseteq\mathbb R$ is an interval and $f:I\to\mathbb R$ is differentiable, then $f'$ has the intermediate value property ([[def-intermediate-value-property]]).

## Facts & Assumptions

**Given:** $x<y$ in $I$ and a real $\lambda$ between $f'(x)$ and $f'(y)$.

[L1] Differentiability implies continuity; the closed bounded interval $[x,y]$ is compact; and a continuous real function on a nonempty compact set attains its extrema ([[cor-differentiable-implies-continuous]], [[thm-heine-borel-r]], [[thm-extreme-value-r]]).

[L2] An interior extremum of a differentiable function has derivative $0$ ([[thm-fermat-interior-extremum]]).

[L3] Derivatives obey the algebra rules, and the derivative of $t\mapsto t$ is $1$ ([[thm-algebra-of-derivatives]], [[lem-derivative-of-a-power]]).

## Proof

**Proof technique:** cases.

1.1 If $\lambda=f'(x)$ or $\lambda=f'(y)$, choose that endpoint.  [assume-case endpoint, given]

1.2 Suppose $f'(x)<\lambda<f'(y)$, and define $h(t)=f(t)-\lambda t$ on $[x,y]$. Then $h'(x)<0<h'(y)$.  [assume-case increasing, L3, algebra]

1.3 If instead $f'(y)<\lambda<f'(x)$, apply the preceding argument to $-h$, obtaining an interior extremum of $h$.  [assume-case decreasing, L1, L3]

2.1 For sufficiently small positive $s,t$, the derivative inequalities give $h(x+s)<h(x)$ and $h(y-t)<h(y)$. Hence a minimum of $h$ on $[x,y]$ occurs at an interior point $c$.  [step 1.2, L1, choose]

3.1 In either strict-order case, Fermat gives $h'(c)=0$, hence $f'(c)=\lambda$. Together with the endpoint case, every intermediate value is attained.  [step 2.1, step 1.3, L2, L3, cases-exhaustive] ∎
````

