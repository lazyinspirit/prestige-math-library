# Audit proof-refuter brief — Wave 9, A6

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
For an `ai-generated` proof, actively search for a counterexample. A false
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

## Wave 9 target — `cor-cantor-function-is-continuous`

Selection: mandatory Wave 9 high/critical proof-bearing route.

Normalized current SHA-256: `dc7ed30e390159a6927777d0246bc0098c6f41debbf85c4af43c2e3656c3d548`

## Complete current target

````markdown
---
id: cor-cantor-function-is-continuous
kind: corollary
title: "The Cantor function is continuous on $[0,1]$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
  evidence: exact-source
deps: [def-cantor-function, thm-cantor-function-properties, lem-monotone-with-interval-image-is-continuous, def-monotone-function, def-continuity-real, def-interval, def-cantor-set]
justified_by: []
aliases: []
landmark: true
short: "the Cantor function is continuous"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Cantor function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_function"
pipeline_run: null
---

## Statement

The Cantor function $c : [0,1] \to \mathbb{R}$ ([[def-cantor-function]]) is
continuous on $[0,1]$ ([[def-continuity-real]]). It is moreover nondecreasing
([[def-monotone-function]]), with $c(0) = 0$ and $c(1) = 1$.

**No intermediate value theorem is used.** The Cantor function is surjective
onto $[0,1]$ by construction ([[thm-cantor-function-properties]], claim 3), so
its image is order-convex without any appeal to continuity, and continuity is
then read off the monotone-with-interval-image criterion
([[lem-monotone-with-interval-image-is-continuous]]). The implication runs in
the direction opposite to the usual one: here surjectivity is known first and
continuity is deduced.

## Facts & Assumptions

**Given:** The Cantor set $C$ and the Cantor function $c : [0,1] \to \mathbb{R}$ ([[def-cantor-set]], [[def-cantor-function]]).

[L1] $c(x) \le c(y)$ whenever $0 \le x \le y \le 1$ ([[thm-cantor-function-properties]], claim 2).

[L2] $c$ is surjective onto $[0,1]$, and $c(0) = 0$, $c(1) = 1$ ([[thm-cantor-function-properties]], claim 3).

[L3] If $J \subseteq \mathbb{R}$ is order-convex, $h : J \to \mathbb{R}$ satisfies $h(u) \le h(v)$ whenever $u, v \in J$ and $u \le v$, and $h[J]$ is order-convex, then $h$ is continuous on $J$ ([[lem-monotone-with-interval-image-is-continuous]]).

[L4] Every interval of the nine written forms, and in particular $[0,1]$, is order-convex ([[def-interval]]).

[L5] A function $h : A \to \mathbb{R}$ with $h(x) \le h(y)$ whenever $x \le y$ in $A$ is nondecreasing ([[def-monotone-function]]).

## Proof

**Proof technique:** direct.

1.1 The domain $[0,1]$ is order-convex. [L4]

1.2 $c$ satisfies $c(x) \le c(y)$ whenever $x, y \in [0,1]$ and $x \le y$. [L1]

1.3 The image $c[\,[0,1]\,]$ is exactly $[0,1]$, since $c$ is surjective onto $[0,1]$, and $[0,1]$ is order-convex. [L2, L4]

2.1 The three hypotheses of the monotone-with-interval-image criterion hold for $c$ on $[0,1]$, so $c$ is continuous on $[0,1]$. [step 1.1, step 1.2, step 1.3, L3]

3.1 $c$ is nondecreasing, which is what the inequality of step 1.2 says, and $c(0) = 0$ and $c(1) = 1$. [step 1.2, L2, L5] ∎

## Remarks

- **[[thm-cantor-function-properties]] deliberately claims nothing about
  continuity, and says so**, for want of a definition of continuity at that
  point in the reading order. The present corollary supplies it, using nothing
  about $c$ beyond claims 2 and 3 of that theorem.

- **The Cantor function is not strictly monotone.** It is constant on every
  interval removed in the construction of the Cantor set
  ([[thm-cantor-function-properties]], claim 4), so it is nondecreasing but not
  increasing, and in particular it is not injective. The continuous inverse
  theorem ([[thm-continuous-inverse]]) therefore does not apply to it, and
  nothing here suggests otherwise.
````

## Current Wave 9 provenance determination

```json
{
  "id": "cor-cantor-function-is-continuous",
  "statement": "literature-derived",
  "proof": "ai-generated",
  "evidence": "exact-source",
  "urls": [
    "https://en.wikipedia.org/wiki/Cantor_function"
  ],
  "rationale": "The source states exactly that the Cantor function is continuous on the unit interval.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

## Current Wave 9 proof contract

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "thm-cantor-function-properties",
      "source_section": "Statement",
      "quote": "1. $c$ is well defined with values in $[0,1]$, and $c(t) = \\gamma(t)$ for every\n   $t \\in C$, so $c$ extends $\\gamma$;\n2. $c(x) \\le c(y)$ whenever $0 \\le x \\le y \\le 1$;\n3. $c$ is surjective onto $[0,1]$\n   ([[def-injection-surjection-bijection]]), and $c(0) = 0$, $c(1) = 1$;\n4. $c$ is constant on $[u,v]$ whenever $u < v$, $u, v \\in C$ and\n   $(u,v) \\cap C = \\varnothing$; and every $x \\in [0,1] \\setminus C$ lies in the\n   open interval of such a pair, so $c$ is constant on a whole neighbourhood of\n   every point of $[0,1]$ outside $C$.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-cantor-function-properties",
      "source_section": "Statement",
      "quote": "1. $c$ is well defined with values in $[0,1]$, and $c(t) = \\gamma(t)$ for every\n   $t \\in C$, so $c$ extends $\\gamma$;\n2. $c(x) \\le c(y)$ whenever $0 \\le x \\le y \\le 1$;\n3. $c$ is surjective onto $[0,1]$\n   ([[def-injection-surjection-bijection]]), and $c(0) = 0$, $c(1) = 1$;\n4. $c$ is constant on $[u,v]$ whenever $u < v$, $u, v \\in C$ and\n   $(u,v) \\cap C = \\varnothing$; and every $x \\in [0,1] \\setminus C$ lies in the\n   open interval of such a pair, so $c$ is constant on a whole neighbourhood of\n   every point of $[0,1]$ outside $C$.",
      "uses": [
        "1.3",
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-monotone-with-interval-image-is-continuous",
      "source_section": "Statement",
      "quote": "Let $I \\subseteq \\mathbb{R}$ be order-convex ([[def-interval]]) and let\n$f : I \\to \\mathbb{R}$ satisfy",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "**Every one of the nine forms is order-convex.** Each is defined by a conjunction\nof at most two conditions, each of the shape $a < x$, $a \\le x$, $x < b$ or\n$x \\le b$, and each such condition is inherited by an intermediate point: if\n$a < x$ and $x \\le z$ then $a < z$, and if $z \\le y$ and $y < b$ then $z < b$,\nby transitivity of the order ([[def-ordered-field]]). Applying this to whichever\none or two conditions define the form in question gives $z \\in I$ whenever\n$x, y \\in I$ and $x \\le z \\le y$.",
      "uses": [
        "1.1",
        "1.3"
      ]
    },
    {
      "fact": "L5",
      "source": "def-monotone-function",
      "source_section": "Definition",
      "quote": "A sequence of reals is a function $x : \\mathbb{N} \\to \\mathbb{R}$\n([[def-sequence]]), and [[def-monotone-sequence]] calls it nondecreasing when\n$x_j \\le x_k$ for all $j \\le k$, increasing when $x_j < x_k$ for all $j < k$,\nand so on. Those are **the same four conditions as above**, read with the\nordered set $\\mathbb{N}$ in place of the ordered subset $A \\subseteq \\mathbb{R}$\nand with the comparison of indices in place of the comparison of arguments. So\nnothing new is introduced here for sequences, and the two vocabularies may be\nused interchangeably: the words *nondecreasing*, *increasing*, *nonincreasing*,\n*decreasing*, *monotone* and *strictly monotone* mean the corresponding\ncondition on the domain at hand.",
      "uses": [
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "cor-cantor-function-is-continuous-step-1-1",
      "claim": "The domain $[0,1]$ is order-convex. [L4]",
      "step": "1.1",
      "inputs": [
        "L4"
      ]
    },
    {
      "id": "cor-cantor-function-is-continuous-step-1-2",
      "claim": "$c$ satisfies $c(x) \\le c(y)$ whenever $x, y \\in [0,1]$ and $x \\le y$. [L1]",
      "step": "1.2",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "cor-cantor-function-is-continuous-step-1-3",
      "claim": "The image $c[\\,[0,1]\\,]$ is exactly $[0,1]$, since $c$ is surjective onto $[0,1]$, and $[0,1]$ is order-convex. [L2, L4]",
      "step": "1.3",
      "inputs": [
        "L2",
        "L4"
      ]
    },
    {
      "id": "cor-cantor-function-is-continuous-step-2-1",
      "claim": "The three hypotheses of the monotone-with-interval-image criterion hold for $c$ on $[0,1]$, so $c$ is continuous on $[0,1]$. [step 1.1, step 1.2, step 1.3, L3]",
      "step": "2.1",
      "inputs": [
        "1.1",
        "1.2",
        "1.3",
        "L3"
      ]
    },
    {
      "id": "cor-cantor-function-is-continuous-step-3-1",
      "claim": "$c$ is nondecreasing, which is what the inequality of step 1.2 says, and $c(0) = 0$ and $c(1) = 1$. [step 1.2, L2, L5] ∎",
      "step": "3.1",
      "inputs": [
        "1.2",
        "L2",
        "L5"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The statement forms no empty set, empty family, or empty finite sum whose value affects the claim."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 1.1: the zero-valued or zero-index boundary is handled explicitly, or is included without division by it."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "step 1.1: the unit or first-index boundary is included explicitly in the stated construction."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Statement: interval degeneracy is either excluded by a strict endpoint hypothesis or included by the stated weak endpoint convention."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "step 1.1: domain endpoints and any one-sided interpretation are kept within the stated relative-domain convention."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "The proof selects no witness from a varying asserted nonempty family."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional or equivalence."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional or equivalence."
    }
  ]
}
```

## Generated cross-batch/cross-level relationships sourced by this target

```json
[
  {
    "source": "cor-cantor-function-is-continuous",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-cantor-function",
    "declared_target": "def-cantor-function",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-cantor-function-is-continuous",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "thm-cantor-function-properties",
    "declared_target": "thm-cantor-function-properties",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-cantor-function-is-continuous",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
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
    "source": "cor-cantor-function-is-continuous",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-monotone-function",
    "declared_target": "def-monotone-function",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-cantor-function-is-continuous",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-continuity-real",
    "declared_target": "def-continuity-real",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-cantor-function-is-continuous",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-interval",
    "declared_target": "def-interval",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-cantor-function-is-continuous",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-cantor-set",
    "declared_target": "def-cantor-set",
    "target_statement_provenance": "literature-derived",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Complete current text of every declared or cited item (8)

### `def-cantor-function`

````markdown
---
id: def-cantor-function
kind: definition
title: "The Cantor function on $[0,1]$, defined on the Cantor set through ternary digits and extended constantly across each removed interval"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-cantor-set-ternary-description, def-cantor-set, def-series, thm-geometric-series, thm-nonnegative-series-bounded-partial-sums, def-complete-ordered-field, def-bounded-set, lem-sup-unique, def-interval, def-injection-surjection-bijection, def-integer-power, lem-power-laws, def-sequence, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: [thm-cantor-function-properties]
aliases: [def-devils-staircase]
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
    - title: "Cantor function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_function"
    - title: "Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_set"
    - title: "Stanford Math 205A, Homework 1"
      url: "https://math.stanford.edu/~ryzhik/STANFORD/STANF205-11/hw205-11-1.pdf"
pipeline_run: null
---

## Definition

Let $C$ be the Cantor set, $D$ the set of sequences with values in $\{0,2\}$ and
$\Phi : D \to C$ the bijection $\Phi(a) = \sum_{k \ge 0} a_k 3^{-k-1}$ of
[[thm-cantor-set-ternary-description]]. Since $\Phi$ is a bijection it has a
two-sided inverse $\Phi^{-1} : C \to D$, and that inverse is a single function,
determined and not selected ([[def-injection-surjection-bijection]]).

**On the Cantor set.** For $x \in C$ write $a := \Phi^{-1}(x)$ and put

$$\gamma(x) \;:=\; \sum_{k=0}^{\infty} \big(a_k \cdot 2^{-1}\big)\, 2^{-k-1} .$$

Each coefficient $a_k \cdot 2^{-1}$ is $0$ or $1$, so all the terms are
nonnegative and every partial sum is at most
$\sum_{k<n} 2^{-k-1} \le \sum_{k=0}^{\infty} 2^{-k-1} = 1$
([[thm-geometric-series]], [[def-integer-power]], [[lem-power-laws]]); hence the
series converges and $\gamma(x) \in [0,1]$
([[thm-nonnegative-series-bounded-partial-sums]], [[def-series]],
[[def-interval]]). In words: $\gamma$ halves each ternary digit of $x$ and reads
the result as a binary expansion.

**On all of $[0,1]$.** The **Cantor function** is
$c : [0,1] \to \mathbb{R}$,

$$c(x) \;:=\; \sup\{\, \gamma(t) : t \in C \text{ and } t \le x \,\} .$$

**The supremum exists and is a single real number.** The set on the right is
nonempty, because $0 \in C$ ([[def-cantor-set]]) and $0 \le x$, and it is bounded
above by $1$, because $\gamma$ takes values in $[0,1]$; so it has a least upper
bound by completeness ([[def-complete-ordered-field]], [[def-bounded-set]]), and
that bound is unique ([[lem-sup-unique]]). Since $0 \le \gamma(0) \le c(x) \le 1$,
the values of $c$ lie in $[0,1]$.

**That $c$ really extends $\gamma$**, that is, $c(t) = \gamma(t)$ for every
$t \in C$, is not an observation but a small theorem: it needs $\gamma$ to be
nondecreasing along $C$. It is claim 1 of [[thm-cantor-function-properties]],
recorded in this item's `justified_by`, and until it is proved the two symbols
are kept apart.

## Remarks

- **Why the extension is a supremum and not a case distinction.** Writing "$c$ is
  constant across each interval removed in the construction of $C$" presupposes a
  description of those intervals; the supremum formula presupposes nothing, is
  defined at every point of $[0,1]$ at once, and yields the constancy as a
  theorem (claim 4 of [[thm-cantor-function-properties]]). It also makes the
  monotonicity of $c$ immediate, since the set whose supremum is taken grows with
  $x$.

- **Nothing is claimed here about continuity.** No definition of continuity for a
  real function of a real variable is available at this point in the reading
  order, so no statement about it is made, in either direction; the properties
  proved on this page are well-definedness, monotonicity in the sense
  $c(x) \le c(y)$ for $x \le y$, surjectivity onto $[0,1]$ and constancy across
  the gaps of $C$.

- **The name.** The function is also called the *devil's staircase*, because it
  climbs from $0$ to $1$ while being constant across every gap of $C$, and the
  gaps fill up all of $[0,1]$ except a set of measure zero
  ([[thm-cantor-set-properties]]).

- **The digits are halved, not truncated.** $\gamma$ sends the ternary digit
  sequence $(a_k)$ with values in $\{0,2\}$ to the binary sequence $(a_k/2)$ with
  values in $\{0,1\}$, which is the bijection $D \to \{0,1\}^{\mathbb{N}}$ of
  claim 3 of [[thm-cantor-set-ternary-description]] read backwards. So $\gamma$ is
  the composition of $\Phi^{-1}$ with that bijection and with the binary
  summation, and its surjectivity onto $[0,1]$ is exactly the statement that
  every real of $[0,1]$ has a binary expansion, proved where it is used.
````

### `def-cantor-set`

````markdown
---
id: def-cantor-set
kind: definition
title: "The Cantor middle-thirds set as the intersection of the sets $C_n$ obtained by removing open middle thirds"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-interval, thm-recursion, thm-induction-principle, def-integer-power, lem-power-laws, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: [def-cantor-middle-thirds-set]
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
    - title: "Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (§2.44)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "University of Chicago MATH 395 notes"
      url: "https://math.uchicago.edu/~alephnil/notes/MATH-395-notes.pdf"
pipeline_run: null
---

## Definition

For $S \subseteq \mathbb{R}$ write

$$\tfrac{1}{3} S \;:=\; \{\, x \cdot 3^{-1} : x \in S \,\}, \qquad \tfrac{2}{3} + \tfrac{1}{3} S \;:=\; \{\, 2 \cdot 3^{-1} + x \cdot 3^{-1} : x \in S \,\},$$

and let $F : \mathcal{P}(\mathbb{R}) \to \mathcal{P}(\mathbb{R})$ be

$$F(S) \;:=\; \tfrac{1}{3} S \ \cup \ \big(\tfrac{2}{3} + \tfrac{1}{3} S\big).$$

By the recursion theorem ([[thm-recursion]]), applied to the set
$\mathcal{P}(\mathbb{R})$, the starting element $[0,1]$ ([[def-interval]]) and
the function $F$, there is a unique family $(C_n)_{n \in \mathbb{N}}$ of subsets
of $\mathbb{R}$ with

$$C_0 = [0,1], \qquad C_{n+1} = F(C_n) = \tfrac{1}{3}C_n \cup \big(\tfrac{2}{3} + \tfrac{1}{3}C_n\big) \quad (n \in \mathbb{N}).$$

The **Cantor middle-thirds set** is

$$C \;:=\; \bigcap_{n \in \mathbb{N}} C_n .$$

**The first step really is the removal of the open middle third.** Directly from
the clauses,

$$C_1 \;=\; \tfrac{1}{3}[0,1] \cup \big(\tfrac{2}{3} + \tfrac{1}{3}[0,1]\big) \;=\; [0, \tfrac13] \cup [\tfrac23, 1] \;=\; [0,1] \setminus (\tfrac13, \tfrac23),$$

the middle equality because $x \mapsto x \cdot 3^{-1}$ is an order isomorphism of
$\mathbb{R}$ onto itself with inverse $x \mapsto 3x$ ([[def-ordered-field]],
[[lem-of-sign-rules]]), and the last because $0 \le x \le 1$ splits, by
totality of the order, into $x \le \tfrac13$, $\tfrac13 < x < \tfrac23$ and
$x \ge \tfrac23$. The recursion then performs the same operation inside each of
the two scaled copies, which is what "removing the open middle thirds" names.

**Every $C_n$ lies in $[0,1]$**, by induction on $n$ ([[thm-induction-principle]]):
$C_0 = [0,1]$; and if $C_n \subseteq [0,1]$ then $\tfrac13 C_n \subseteq [0,\tfrac13]$
and $\tfrac23 + \tfrac13 C_n \subseteq [\tfrac23, 1]$, so
$C_{n+1} \subseteq [0,1]$ ([[lem-of-add-order]], [[lem-of-sign-rules]]). The same
computation shows that **the two halves of $C_{n+1}$ are disjoint**, the first
lying in $[0,\tfrac13]$ and the second in $[\tfrac23,1]$, and $\tfrac13 < \tfrac23$
([[cor-of-one-positive]]).

**The family is nested**, $C_{n+1} \subseteq C_n$ for every $n$, again by
induction. For $n = 0$ this is $C_1 = [0,\tfrac13] \cup [\tfrac23,1] \subseteq
[0,1]$. And $F$ is monotone, in the sense that $S \subseteq T$ implies
$F(S) \subseteq F(T)$, directly from the displayed description of $F$; so
$C_{n+1} \subseteq C_n$ gives $C_{n+2} = F(C_{n+1}) \subseteq F(C_n) = C_{n+1}$.
Consequently $C = \bigcap_n C_n \subseteq C_m$ for every $m$, and
$\bigcap_n C_{n+1} = \bigcap_n C_n = C$.

**Powers.** Here $3^{-n}$ means $(3^{-1})^n$, the integer power of
[[def-integer-power]], so that $3^{0} = 1$, $3^{-(n+1)} \cdot 3 = 3^{-n}$ and
$3^{-n} > 0$ for every $n$ ([[lem-power-laws]], [[def-complete-ordered-field]]).

## Remarks

- **Why the self-similar recursion rather than a description by digits.** The
  clause $C_{n+1} = F(C_n)$ is a single application of [[thm-recursion]] to one
  explicitly given function on $\mathcal{P}(\mathbb{R})$, so nothing is selected
  at any stage and no listing of the $2^n$ intervals making up $C_n$ has to be
  constructed. Every structural property below is then proved by induction on
  $n$ through $F$. The description by ternary digits is a theorem about $C$, not
  its definition, and it is [[thm-cantor-set-ternary-description]].

- **$C$ is not empty.** $0 \in C_n$ for every $n$, by induction:
  $0 \in [0,1]$, and $0 \in C_n$ gives $0 = 0 \cdot 3^{-1} \in \tfrac13 C_n
  \subseteq C_{n+1}$. Likewise $1 \in C$, since $1 \in C_n$ gives
  $1 = \tfrac23 + 1 \cdot \tfrac13 \in C_{n+1}$. So $C$ contains at least the two
  endpoints; that it is in fact uncountable is
  [[thm-cantor-set-properties]].

- **The construction with a different proportion.** Replacing "middle third" by
  an interval of length $4^{-n}$ removed at stage $n$ produces a set that is
  closed, has empty interior and is *not* of measure zero
  ([[def-fat-cantor-set]]). So none of the qualitative properties of $C$ proved
  on this page is a consequence of its being nowhere dense, and the two
  constructions are kept apart deliberately.
````

### `def-continuity-real`

````markdown
---
id: def-continuity-real
kind: definition
title: "Continuity of $f : A \\to \\mathbb{R}$ at a point of $A$ and on $A$: the $\\varepsilon$-$\\delta$ condition, its agreement with $\\lim_{x \\to c} f(x) = f(c)$ at a limit point, and continuity at an isolated point"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function-limit, def-limit-point-r, def-neighbourhood-r, def-open-and-closed-in-r, def-interval, lem-of-abs-value, def-complete-ordered-field]
justified_by: []
aliases: [def-continuity-at-a-point-r]
forward_refs: [cex-dirichlet-is-nowhere-continuous]
landmark: true
short: "continuity of a real function"
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
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.2"
      url: "https://www.jirka.org/ra/"
    - title: "E. Zakon, Mathematical Analysis, §4.1: Basic Definitions"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/04%3A_Function_Limits_and_Continuity/4.01%3A_Basic_Definitions"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field with its order and
absolute value ([[def-complete-ordered-field]], [[lem-of-abs-value]]), and
neighbourhoods are those of [[def-neighbourhood-r]].

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$. Then
$f$ is **continuous at $c$** when

$$(\forall \varepsilon > 0)\ (\exists \delta > 0)\ (\forall x \in A)\ \bigl[\ |x - c| < \delta \ \Longrightarrow\ |f(x) - f(c)| < \varepsilon\ \bigr],$$

with $\varepsilon$ and $\delta$ ranging over the **positive reals**. In the
language of neighbourhoods: for every real $\varepsilon > 0$ there is a real
$\delta > 0$ with

$$f\bigl(A \cap N_{\delta}(c)\bigr) \;\subseteq\; N_{\varepsilon}\bigl(f(c)\bigr).$$

$f$ is **continuous on $A$** when it is continuous at every point of $A$.

**The point $c$ is required to lie in $A$, and the condition is unpunctured.**
Both differ from [[def-function-limit]], and deliberately. There the quantifier
runs over $0 < |x - c| < \delta$, which removes $x = c$; here $x = c$ is allowed,
and at $x = c$ the implication reads $|f(c) - f(c)| = 0 < \varepsilon$, which is
automatic. So allowing $x = c$ costs nothing, and it is what lets the definition
be stated at every point of $A$, including the points where no limit exists.

**Three clauses, and all three are part of the definition.**

1. **At a limit point.** Suppose $c \in A$ is a limit point of $A$
   ([[def-limit-point-r]]). Then $f$ is continuous at $c$ if and only if the
   limit of $f$ at $c$ exists and
   $$\lim_{x \to c} f(x) \;=\; f(c)$$
   ([[def-function-limit]]). Indeed, for a given $\varepsilon > 0$ a $\delta$
   witnessing continuity witnesses the limit condition, because the limit
   condition quantifies over a subset of the points continuity quantifies over;
   and conversely a $\delta$ witnessing $\lim_{x \to c} f(x) = f(c)$ witnesses
   continuity, because the one point it omits, $x = c$, satisfies
   $|f(c) - f(c)| < \varepsilon$ anyway.

2. **At an isolated point.** Suppose $c \in A$ is an isolated point of $A$
   ([[def-limit-point-r]]), so that $N_{\eta}(c) \cap A = \{c\}$ for some real
   $\eta > 0$. Then **every** $f : A \to \mathbb{R}$ is continuous at $c$: take
   $\delta := \eta$, so that the only $x \in A$ with $|x - c| < \delta$ is $c$
   itself, and $|f(c) - f(c)| = 0 < \varepsilon$.

3. **On a set.** Continuity on $A$ is continuity at each point of $A$, and
   nothing more. It is not a condition relating $f$ to points outside $A$.

Every point of $A$ is either a limit point of $A$ or an isolated point of $A$,
and never both ([[def-limit-point-r]]), so clauses 1 and 2 between them describe
continuity at every point of $A$.

**This is not the raw $\varepsilon$-$\delta$ formula of
[[fs-limit-unique-at-every-point-of-the-domain]].** That item records what goes
wrong when the *punctured* formula of [[def-function-limit]] is written down at
an arbitrary point of the domain: at an isolated point it is satisfied
vacuously by every real $L$ at once, so it defines nothing, and this library
therefore leaves $\lim_{x \to c} f(x)$ **undefined** at an isolated point.
Continuity at an isolated point is a different matter: the formula above is not
vacuous — it is a genuine condition on $f(c)$, satisfied because $f(c)$ is the
only value being compared with itself — and it names a single, well-defined
property. The limit is undefined there; the continuity is defined, and is
automatic. Clause 1 is the only place where the two notions meet, and it is
stated only where the limit exists as a notion.

**Where the distinction disappears.** If $A$ is an open subset of $\mathbb{R}$
([[def-open-and-closed-in-r]]), then every $c \in A$ has some
$N_{\eta}(c) \subseteq A$, and a punctured neighbourhood is never empty
([[def-neighbourhood-r]]), so every point of $A$ is a limit point of $A$ and
clause 1 covers the whole of $A$. The same holds when $A$ is a nondegenerate
interval ([[def-interval]]). Isolated points are what force clause 2 to exist at
all, and they occur as soon as $A$ is allowed to be an arbitrary subset of
$\mathbb{R}$, as in $A = \{0\} \cup [1,2]$.

## Remarks

- **Continuity is local.** If $\eta > 0$ and $g : A \to \mathbb{R}$ agrees with
  $f$ on $A \cap N_{\eta}(c)$, then $f$ is continuous at $c$ if and only if $g$
  is: any $\delta$ may be replaced by $\min\{\delta, \eta\}$, after which the
  condition only ever evaluates the two functions where they agree. So
  continuity at $c$ sees only an arbitrarily small neighbourhood of $c$, exactly
  as the limit does ([[lem-limit-is-local]]).

- **Continuity passes to subsets of the domain.** If $B \subseteq A$ and
  $c \in B$, then continuity of $f$ at $c$ gives continuity of the restriction
  $f|_B$ at $c$, with the same $\delta$: the condition on $f|_B$ quantifies over
  fewer points. The converse fails, and the standard witness is the indicator of
  $\mathbb{Q}$ restricted to $\mathbb{Q}$, which is constant and hence
  continuous, while the indicator itself is continuous nowhere
  ([[cex-dirichlet-is-nowhere-continuous]]).

- **The radius is a real number.** As in [[def-neighbourhood-r]], $\varepsilon$
  and $\delta$ range over the positive reals here. Restricting either quantifier
  to the positive rationals defines the same relation, by the passage recorded
  in [[def-function-limit]]: below every positive real lies a positive rational
  ([[lem-rat-embeds-dense]]), and a real $\delta$ may be shrunk to a rational
  one below it.

- **The word *continuous* is used for two things in this library, and they
  agree.** [[def-metric-continuity]] defines continuity of a map between metric
  spaces, and $A \subseteq \mathbb{R}$ carries the metric $d(x,y) = |x-y|$. The
  two notions coincide, and that is proved, not assumed:
  [[lem-real-and-metric-notions-agree]] is the dictionary, and it is stated on
  this page precisely so that no later item has to guess.
````

### `def-interval`

````markdown
---
id: def-interval
kind: definition
title: "Intervals of $\\mathbb{R}$: the nine order-convex forms, nondegeneracy, and length"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complete-ordered-field, def-ordered-field, def-real-order, def-bounded-set]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Interval (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interval_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (segments and cells)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §0.3 and §1.1"
      url: "https://www.jirka.org/ra/"
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) with its order
([[def-real-order]]).

A subset $I \subseteq \mathbb{R}$ is **order-convex** when

$$x, y \in I \text{ and } x \le z \le y \;\Longrightarrow\; z \in I .$$

The **intervals** of $\mathbb{R}$ are the sets of the following nine forms, where
$a, b \in \mathbb{R}$:

| | bounded forms | | one-sided and full forms |
|---|---|---|---|
| $(a,b)$ | $\{x : a < x < b\}$ | $(a,\infty)$ | $\{x : a < x\}$ |
| $[a,b]$ | $\{x : a \le x \le b\}$ | $[a,\infty)$ | $\{x : a \le x\}$ |
| $[a,b)$ | $\{x : a \le x < b\}$ | $(-\infty,b)$ | $\{x : x < b\}$ |
| $(a,b]$ | $\{x : a < x \le b\}$ | $(-\infty,b]$ | $\{x : x \le b\}$ |
| | | $(-\infty,\infty)$ | $\mathbb{R}$ |

An interval is **open** when both of its written endpoints are excluded, that is
for the forms $(a,b)$, $(a,\infty)$, $(-\infty,b)$ and $(-\infty,\infty)$; it is
**closed** when both written endpoints are included, that is for $[a,b]$,
$[a,\infty)$, $(-\infty,b]$ and $(-\infty,\infty)$. The forms $[a,b)$ and
$(a,b]$ are **half-open**.

**The symbols $\pm\infty$ are notation and not elements of $\mathbb{R}$.** They
mark which side carries no endpoint condition at all; the five forms in the right
column are defined by the displayed conditions on $x$ alone, and no arithmetic is
ever performed with $\infty$. This is the same refusal to extend $\mathbb{R}$
silently that [[rem-sup-conventions]] records for suprema.

**Every one of the nine forms is order-convex.** Each is defined by a conjunction
of at most two conditions, each of the shape $a < x$, $a \le x$, $x < b$ or
$x \le b$, and each such condition is inherited by an intermediate point: if
$a < x$ and $x \le z$ then $a < z$, and if $z \le y$ and $y < b$ then $z < b$,
by transitivity of the order ([[def-ordered-field]]). Applying this to whichever
one or two conditions define the form in question gives $z \in I$ whenever
$x, y \in I$ and $x \le z \le y$.

**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly
when it is of one of the four forms in the left column: for those, $a$ is a lower
bound and $b$ an upper bound. The other five forms are unbounded, on the side or
sides written with $\infty$; the verification is in the remarks below.

**Nondegeneracy.** An interval is **degenerate** when it has at most one element,
and **nondegenerate** when it has at least two. For the four bounded forms with
endpoints $a$ and $b$:

- $[a,b]$ is nonempty exactly when $a \le b$, and it is nondegenerate exactly
  when $a < b$. It is the singleton $\{a\}$ when $a = b$.
- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each
  is nondegenerate.

The only assertion here that is not immediate from the defining conditions is
that $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because
$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to
both sides and halving ([[def-ordered-field]]); repeating the halving inside
$(a, (a+b)/2)$ produces a second point.

**Closed bounded intervals.** These are the sets $[a,b]$ with $a \le b$, which is
exactly the condition making them nonempty. They are the intervals the nested
interval property is stated for, and the phrase *closed bounded interval* always
carries the hypothesis $a \le b$ in this library.

**Length.** The **length** of a bounded interval presented by its endpoints
$a \le b$ is

$$\ell = b - a \;\ge\; 0 .$$

Length is attached to the presentation by endpoints and is not recovered from the
set: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is
$(c,c)$ for any other $c$, while each of these presentations has length $0$, so
nothing inconsistent arises; but the endpoints are named explicitly at every
point where a length is used in this library, and never inferred from the set.
Unbounded intervals are assigned no length.

## Remarks

- **Why the five unbounded forms really are unbounded.** Take $[a,\infty)$ and
  suppose $u \in \mathbb{R}$ were an upper bound of it. The element
  $x = a + |u - a| + 1$ satisfies $x \ge a$, so $x \in [a,\infty)$, and
  $x \ge a + (u - a) + 1 = u + 1 > u$, since $|t| \ge t$ ([[lem-of-abs-value]])
  and $1 > 0$ ([[cor-of-one-positive]]). That contradicts $x \le u$. The same
  computation with $a$ replaced by any element of $(a,\infty)$ handles the open
  form, and reflecting through the origin handles $(-\infty,b)$ and
  $(-\infty,b]$; $\mathbb{R}$ itself is unbounded on both sides for the same
  reason. Note that this uses no Archimedean property: it is the failure of a
  *single* bound, not the cofinality of the naturals.

- **The converse classification is not asserted here.** It is true that every
  order-convex subset of $\mathbb{R}$ is empty or one of the nine forms, and the
  proof runs through suprema and infima, but nothing in this library needs it and
  it is not proved anywhere here. What is used is only the direction proved
  above: each of the nine forms is order-convex.

- **Degenerate intervals are kept, not excluded.** $[a,a] = \{a\}$ and
  $(a,a) = \emptyset$ are intervals under this definition. Excluding them would
  force a nonemptiness hypothesis into every statement that produces an interval,
  and the nested interval property is a good illustration: its conclusion is that
  the intersection is nonempty, and in the equality case the intersection is the
  degenerate interval $[a,a]$, which is exactly the single point.
````

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

### `thm-cantor-function-properties`

````markdown
---
id: thm-cantor-function-properties
kind: theorem
title: "The Cantor function is well defined, satisfies $c(x) \\le c(y)$ whenever $x \\le y$, is surjective onto $[0,1]$, and is constant on every interval removed from the Cantor set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cantor-function, thm-cantor-set-ternary-description, thm-cantor-set-properties, def-cantor-set, def-series, thm-geometric-series, thm-nonnegative-series-bounded-partial-sums, lem-series-linearity, def-interval, def-bounded-set, lem-sup-unique, lem-sup-epsilon, def-infimum, lem-inf-epsilon, thm-infimum-property, def-integer-power, lem-power-laws, thm-recursion, thm-induction-principle, thm-well-ordering-principle, lem-geometric-sequence-null, def-real-limit, lem-limit-unique, def-sequence, def-open-and-closed-in-r, thm-closure-characterisations-r, def-interior-closure-boundary-r, def-neighbourhood-r, lem-finite-set-has-max, def-max-min, def-injection-surjection-bijection, lem-of-abs-value, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
forward_refs: [ex-cantor-function-values]
aliases: []
landmark: true
short: "Cantor function: monotone, onto, flat on gaps"
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
    - title: "Cantor function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_function"
    - title: "Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_set"
    - title: "Stanford Math 205A, Homework 1"
      url: "https://math.stanford.edu/~ryzhik/STANFORD/STANF205-11/hw205-11-1.pdf"
pipeline_run: null
---

## Statement

Let $C$ be the Cantor set, $\gamma : C \to [0,1]$ and $c : [0,1] \to \mathbb{R}$
as in [[def-cantor-function]]. Then:

1. $c$ is well defined with values in $[0,1]$, and $c(t) = \gamma(t)$ for every
   $t \in C$, so $c$ extends $\gamma$;
2. $c(x) \le c(y)$ whenever $0 \le x \le y \le 1$;
3. $c$ is surjective onto $[0,1]$
   ([[def-injection-surjection-bijection]]), and $c(0) = 0$, $c(1) = 1$;
4. $c$ is constant on $[u,v]$ whenever $u < v$, $u, v \in C$ and
   $(u,v) \cap C = \varnothing$; and every $x \in [0,1] \setminus C$ lies in the
   open interval of such a pair, so $c$ is constant on a whole neighbourhood of
   every point of $[0,1]$ outside $C$.

Claim 2 is what "monotone" names for a function; that word is not used here,
because [[def-monotone-sequence]] is about sequences and no definition of a
monotone function is available at this point in the reading order. Claim 4 is
what "constant on every interval removed in the construction" means: the removed
intervals are gaps of $C$ in the sense of claim 4, as
$(\tfrac13, \tfrac23)$ illustrates. **No claim whatever is made here about
continuity**, for which no definition is available at this point in the reading
order.

## Facts & Assumptions

**Given:** The Cantor set $C$, the set $D$ of $\{0,2\}$-valued sequences, the bijection $\Phi : D \to C$, and the functions $\gamma$ and $c$ of [[def-cantor-function]]. For $x \in C$ write $\Phi^{-1}(x)$ for its digit sequence.

[L1] $\Phi(a) = \sum_{k \ge 0} a_k 3^{-k-1}$ is a bijection from $D$ onto $C$, with two-sided inverse $\Phi^{-1}$; $\gamma(x) = \sum_{k \ge 0}(a_k 2^{-1})2^{-k-1}$ for $a = \Phi^{-1}(x)$, with values in $[0,1]$; $c(x) = \sup\{\gamma(t) : t \in C,\ t \le x\}$, the supremum of a nonempty set bounded above by $1$ and containing $\gamma(0)$ ([[thm-cantor-set-ternary-description]], [[def-cantor-function]], [[def-injection-surjection-bijection]], [[def-complete-ordered-field]], [[def-bounded-set]], [[lem-sup-unique]]).

[L2] $\sum_{k=0}^{\infty} r^{k} = 1/(1-r)$ for $|r|<1$, so $\sum_{k \ge m} 2^{-k-1} = 2^{-m}$ and $\sum_{k \ge m} 2 \cdot 3^{-k-1} = 3^{-m}$; convergent series add and scale termwise; a series of nonnegative terms has nonnegative sum and all partial sums at most the sum ([[thm-geometric-series]], [[lem-series-linearity]], [[thm-nonnegative-series-bounded-partial-sums]], [[def-series]], [[def-integer-power]], [[lem-power-laws]]).

[L3] $C$ is closed and $0, 1 \in C$; $\overline{A}$ is the set of points every neighbourhood of which meets $A$, and a closed set equals its closure ([[thm-cantor-set-properties]], [[def-cantor-set]], [[def-open-and-closed-in-r]], [[thm-closure-characterisations-r]], [[def-interior-closure-boundary-r]], [[def-neighbourhood-r]]).

[L4] Suprema: $u = \sup S$ exactly when $u$ is an upper bound and for every $\varepsilon > 0$ some $s \in S$ has $u - \varepsilon < s$; infima exist for nonempty sets bounded below, and $\ell = \inf S$ exactly when $\ell$ is a lower bound and for every $\varepsilon > 0$ some $s \in S$ has $s < \ell + \varepsilon$; both are unique; a supremum is monotone in the set, since an upper bound of a larger set bounds a smaller one ([[lem-sup-epsilon]], [[lem-inf-epsilon]], [[thm-infimum-property]], [[def-infimum]], [[lem-sup-unique]], [[def-complete-ordered-field]], [[def-bounded-set]]).

[L5] Recursion and induction on $\mathbb{N}$; every nonempty subset of $\mathbb{N}$ has a least element ([[thm-recursion]], [[thm-induction-principle]], [[thm-well-ordering-principle]]).

[L6] $2^{-n} \to 0$; convergence is tested against rational $\varepsilon > 0$; a convergent sequence has exactly one limit; $|z| \ge 0$ and $|z| = z$ for $z \ge 0$ ([[lem-geometric-sequence-null]], [[def-real-limit]], [[lem-limit-unique]], [[def-sequence]], [[lem-of-abs-value]]).

[L7] Every nonempty finite set of reals has a minimum ([[lem-finite-set-has-max]], [[def-max-min]]).

[L8] $[u,v]$ and $(u,v)$ are the intervals of [[def-interval]], and $N_\varepsilon(x) = (x-\varepsilon,x+\varepsilon)$ ([[def-neighbourhood-r]]).

[L9] Ordered-field arithmetic: $0 < 1$, so $2 > 0$, $3 > 0$ and $2^{-1} > 0$; adding a constant and multiplying by a positive preserve an inequality; the order is total and transitive ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 **Comparison of two digit sequences.** Let $a \ne b$ in $D$ and let $k$ be the least index with $a_k \ne b_k$, which exists by [L5]; suppose $a_k = 0$ and $b_k = 2$. Then $\Phi(b) - \Phi(a) = \sum_{j \ge 0}(b_j - a_j)3^{-j-1}$ by [L2], the terms with $j < k$ vanish, and the tail $R := \sum_{j \ge k+1}(b_j - a_j)3^{-j-1}$ satisfies $|R| \le \sum_{j \ge k+1} 2 \cdot 3^{-j-1} = 3^{-k-1}$ by [L2], since $|b_j - a_j| \le 2$; hence $\Phi(b) - \Phi(a) \ge 2 \cdot 3^{-k-1} - 3^{-k-1} = 3^{-k-1} > 0$. The same computation with the halved digits gives $\gamma(\Phi(b)) - \gamma(\Phi(a)) = 2^{-k-1} + R'$ with $|R'| \le \sum_{j \ge k+1} 2^{-j-1} = 2^{-k-1}$, so $\gamma(\Phi(b)) \ge \gamma(\Phi(a))$. Consequently, for $s, t \in C$ with $s \le t$ one has $\gamma(s) \le \gamma(t)$: this is trivial if $s = t$, and otherwise the least index $k$ at which the digit sequences differ must have the digit of $t$ equal to $2$, by the first computation applied both ways. [given, L1, L2, L5, L9]

1.2 **Values at the endpoints.** The constant sequence $\bar 0$ has $\Phi(\bar 0) = 0$ and $\gamma(0) = 0$; the constant sequence $\bar 2$ has $\Phi(\bar 2) = \sum_{k \ge 0} 2 \cdot 3^{-k-1} = 1$ and $\gamma(1) = \sum_{k \ge 0} 2^{-k-1} = 1$, by [L2]. Both $0$ and $1$ lie in $C$ by [L3]. [L1, L2, L3]

2.1 **Claims 1 and 2.** For $x \in [0,1]$ the set $A_x := \{\gamma(t) : t \in C,\ t \le x\}$ is nonempty and bounded above by $1$ by [L1], so $c(x) = \sup A_x$ exists, is unique and lies in $[0,1]$ by [L1] and [L4]; that is claim 1 apart from the extension property. If $0 \le x \le y \le 1$ then $A_x \subseteq A_y$, so $c(x) \le c(y)$ by [L4], which is claim 2. And for $t \in C$: $\gamma(t) \in A_t$, while $\gamma(t)$ is an upper bound of $A_t$ by step 1.1, so $\gamma(t) = \sup A_t = c(t)$ by [L4]. [step 1.1, step 1.2, L1, L4]

2.2 **The two endpoints of a gap carry the same value of $\gamma$.** Let $u < v$ with $u, v \in C$ and $(u,v) \cap C = \varnothing$, and put $a := \Phi^{-1}(u)$, $b := \Phi^{-1}(v)$, with $k$ the least index where they differ; by step 1.1 and $u < v$ we have $a_k = 0$ and $b_k = 2$. If some $j > k$ had $a_j = 0$, let $a'$ agree with $a$ except that $a'_j = 2$; then $\Phi(a') \in C$, $\Phi(a') > u$ by step 1.1, and $a'$ still differs from $b$ first at $k$ with $a'_k = 0 < 2 = b_k$, so $\Phi(a') < v$ by step 1.1, putting $\Phi(a')$ in $(u,v) \cap C$, which is empty. Hence $a_j = 2$ for every $j > k$. Symmetrically, if some $j > k$ had $b_j = 2$, replacing it by $0$ gives $b'$ with $\Phi(b') < v$ and $\Phi(b') > u$, again impossible; hence $b_j = 0$ for every $j > k$. Writing $P := \sum_{j<k}(a_j 2^{-1})2^{-j-1} = \sum_{j<k}(b_j 2^{-1})2^{-j-1}$, [L2] now gives $\gamma(u) = P + 0 + \sum_{j \ge k+1} 2^{-j-1} = P + 2^{-k-1}$ and $\gamma(v) = P + 2^{-k-1} + 0 = P + 2^{-k-1}$, so $\gamma(u) = \gamma(v)$. [step 1.1, L1, L2, L9]

3.1 **Claim 4, first half.** Let $u < v$ with $u,v \in C$ and $(u,v) \cap C = \varnothing$, and let $x \in [u,v]$. Every $t \in C$ with $t \le x$ satisfies $t \le u$ or $t = v$: indeed if $t > u$ then $t \le x \le v$ and $t \notin (u,v)$ force $t = v$. In the first case $\gamma(t) \le \gamma(u)$ by step 1.1, and in the second $\gamma(t) = \gamma(v) = \gamma(u)$ by step 2.2. So $\gamma(u)$ is an upper bound of $A_x$ and belongs to it, whence $c(x) = \gamma(u)$ by [L4]: $c$ is constant on $[u,v]$, with the value $c(u)$ given by step 2.1. [step 1.1, step 2.1, step 2.2, L4, L9]

3.2 **Claim 3.** Let $s \in [0,1]$. Let $T : \mathbb{R} \to \mathbb{R}$ be $T(r) := 2r$ for $r < 2^{-1}$ and $T(r) := 2r - 1$ for $r \ge 2^{-1}$, a definition by cases on the total order, and by [L5] let $(r_n)$ satisfy $r_0 = s$ and $r_{n+1} = T(r_n)$; put $\beta_n := 0$ when $r_n < 2^{-1}$ and $\beta_n := 1$ otherwise, so $r_{n+1} = 2r_n - \beta_n$. An induction ([L5]) gives $r_n \in [0,1]$ for every $n$, since $0 \le r < 2^{-1}$ gives $0 \le 2r < 1$ and $2^{-1} \le r \le 1$ gives $0 \le 2r - 1 \le 1$ by [L9]; a second induction gives $s = \sum_{k<n}\beta_k 2^{-k-1} + 2^{-n} r_n$ for every $n$, the step being $\sum_{k<n+1}\beta_k2^{-k-1} + 2^{-n-1}r_{n+1} = \sum_{k<n}\beta_k2^{-k-1} + \beta_n 2^{-n-1} + 2^{-n-1}(2r_n - \beta_n) = \sum_{k<n}\beta_k2^{-k-1} + 2^{-n}r_n$. Hence $0 \le s - \sum_{k<n}\beta_k2^{-k-1} \le 2^{-n}$, so by [L6] the partial sums converge to $s$ and $s = \sum_{k \ge 0}\beta_k 2^{-k-1}$. Now $a := (2\beta_k)_k$ lies in $D$, the point $x := \Phi(a)$ lies in $C$ by [L1], and $\gamma(x) = \sum_k \beta_k 2^{-k-1} = s$; by step 2.1, $c(x) = \gamma(x) = s$. With step 1.2 and step 2.1 this also gives $c(0) = \gamma(0) = 0$ and $c(1) = \gamma(1) = 1$. [step 1.2, step 2.1, L1, L2, L5, L6, L9]

4.1 **Claim 4, second half.** Let $x \in [0,1] \setminus C$. The set $A := \{t \in C : t \le x\}$ is nonempty by [L3] and bounded above by $x$, so $u := \sup A$ exists by [L4]; by [L4] every $N_\varepsilon(u)$ meets $A \subseteq C$, so $u \in \overline{C} = C$ by [L3], and $u \le x$ with $u \ne x$, so $u < x$. The set $B := \{t \in C : t \ge x\}$ is nonempty by [L3], since $1 \in C$ and $x \le 1$, and is bounded below by $x$, so $v := \inf B$ exists by [L4]; likewise $v \in C$ and $v > x$. If $t \in C$ satisfied $u < t < v$, then $t \le x$ would put $t \in A$ and force $t \le u$, while $t \ge x$ would put $t \in B$ and force $t \ge v$, and one of the two holds by totality of the order ([L9]); so $(u,v) \cap C = \varnothing$. By step 3.1 the function $c$ is constant on $[u,v]$, and $N_\delta(x) \subseteq (u,v)$ for $\delta := \min\{x - u,\ v - x\} > 0$ by [L7], [L8] and [L9]. [step 3.1, L3, L4, L7, L8, L9]

5.1 Claims 1 and 2 are step 2.1, claim 3 is step 3.2, and claim 4 is steps 3.1 and 4.1 together; so all four hold. [step 2.1, step 3.1, step 3.2, step 4.1] ∎

## Remarks

- **The gap $(\tfrac13,\tfrac23)$ worked out.** $\tfrac13 = \Phi(0,2,2,2,\dots)$
  and $\tfrac23 = \Phi(2,0,0,0,\dots)$, both in $C$, and
  $C \subseteq C_1 = [0,\tfrac13] \cup [\tfrac23,1]$ ([[def-cantor-set]]) shows
  $(\tfrac13,\tfrac23) \cap C = \varnothing$. Step 2.2 gives
  $\gamma(\tfrac13) = \gamma(\tfrac23) = \tfrac12$, so $c \equiv \tfrac12$ on
  $[\tfrac13, \tfrac23]$; this and three further values are computed in
  [[ex-cantor-function-values]].

- **Where each hypothesis is used.** Step 1.1 is the only place the ternary
  comparison is made, and everything else rests on it: monotonicity of $c$ comes
  from monotonicity of the set $A_x$, and the constancy across gaps comes from
  step 2.2, which is a statement about digit sequences and not about the topology
  of $C$.

- **What is deliberately absent.** Continuity, differentiability and any
  statement about the derivative of $c$ are outside the vocabulary available at
  this point in the reading order and none of them is asserted anywhere above.
  What is proved is that $c$ climbs from $0$ to $1$, never decreases, misses no
  value of $[0,1]$, and is locally constant off a set of measure zero
  ([[thm-cantor-set-properties]]). That combination is already the paradoxical
  content of the example.

- **Surjectivity is a binary expansion theorem in disguise.** Step 3.2 constructs
  the binary digits of an arbitrary $s \in [0,1]$ by the same canonical recursion
  that [[thm-cantor-set-ternary-description]] uses for ternary digits, so no
  general expansion theorem is presupposed and no choice is made.
````

### `thm-continuous-inverse`

````markdown
---
id: thm-continuous-inverse
kind: theorem
title: "Continuous inverse theorem: a continuous injective $f$ on an interval $I$ is a bijection onto the order-convex set $f[I]$, and the inverse $g : f[I] \\to I$ is continuous and strictly monotone in the same sense as $f$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
  evidence: exact-source
deps: [thm-continuous-injection-on-an-interval-is-strictly-monotone, def-monotone-function, cor-continuous-image-of-an-interval-is-an-interval, lem-monotone-with-interval-image-is-continuous, def-continuity-real, def-interval, def-injection-surjection-bijection, thm-algebra-of-continuous-functions, thm-composition-of-continuous-functions]
justified_by: []
aliases: [thm-inverse-function-continuity]
landmark: true
short: "continuous inverse theorem"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Inverse function theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Inverse_function_theorem"
    - title: "Monotonic function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotonic_function"
    - title: "Real Analysis Notes 10 (California State University, Dominguez Hills)"
      url: "https://math.csudh.edu/~pong/a3/Notes_10.html"
pipeline_run: null
---

## Statement

Let $I \subseteq \mathbb{R}$ be order-convex ([[def-interval]]) and let
$f : I \to \mathbb{R}$ be continuous on $I$ ([[def-continuity-real]]) and
injective ([[def-injection-surjection-bijection]]). Then:

1. $f$ is strictly monotone ([[def-monotone-function]]);
2. $f[I]$ is order-convex;
3. the map $f : I \to f[I]$ is a bijection, so there is exactly one
   $g : f[I] \to I$ with $g(f(x)) = x$ for every $x \in I$ and $f(g(u)) = u$ for
   every $u \in f[I]$;
4. $g$ is strictly monotone in the same sense as $f$: increasing if $f$ is
   increasing, decreasing if $f$ is decreasing;
5. $g$ is continuous on $f[I]$.

**"Interval" means "order-convex" here**, as throughout this library
([[thm-connected-subsets-of-r-are-intervals]] is what licenses the word and
[[def-interval]] records that the classification of order-convex sets into the
nine written forms is not proved here). No compactness and no boundedness is
assumed: $I$ may be open, half-open, unbounded, or a single point.

## Facts & Assumptions

**Given:** An order-convex $I \subseteq \mathbb{R}$ and a continuous injective $f : I \to \mathbb{R}$.

[L1] A continuous injective function on an order-convex subset of $\mathbb{R}$ is strictly monotone ([[thm-continuous-injection-on-an-interval-is-strictly-monotone]]).

[L2] The image of an order-convex subset of the domain under a continuous function is order-convex ([[cor-continuous-image-of-an-interval-is-an-interval]], claim 1).

[L3] If $J \subseteq \mathbb{R}$ is order-convex, $h : J \to \mathbb{R}$ satisfies $h(u) \le h(v)$ whenever $u, v \in J$ and $u \le v$, and $h[J]$ is order-convex, then $h$ is continuous on $J$ ([[lem-monotone-with-interval-image-is-continuous]]).

[L4] Sums, scalar multiples and composites of continuous functions are continuous; in particular $u \mapsto -u$ is continuous on every subset of $\mathbb{R}$, being the scalar multiple $(-1)\,\mathrm{id}$ of the identity ([[thm-algebra-of-continuous-functions]], [[thm-composition-of-continuous-functions]]).

[L5] $f$ is injective, so $f : I \to f[I]$ is a bijection and has a unique two-sided inverse ([[def-injection-surjection-bijection]]).

[L6] $f$ increasing means $f(x) < f(y)$ whenever $x < y$ in $I$; $-f$ is decreasing exactly when $f$ is increasing, and $-S$ is order-convex exactly when $S$ is ([[def-monotone-function]], [[def-interval]]).

## Proof

**Proof technique:** direct.

1.1 Claim 1 is immediate: $f$ is continuous and injective on the order-convex set $I$, hence strictly monotone. [L1]

1.2 Claim 2 is immediate: $I$ is order-convex and $f$ is continuous on $I$, so $f[I]$ is order-convex. [L2]

1.3 Claim 3 is immediate: $f$ is injective and $f : I \to f[I]$ is onto its image by definition of the image, so it is a bijection and has a unique two-sided inverse $g : f[I] \to I$. [L5]

2.1 Suppose $f$ is increasing, and let $u, v \in f[I]$ with $u < v$. Write $u = f(p)$ and $v = f(q)$ with $p = g(u)$ and $q = g(v)$ in $I$. If $q \le p$ then $f(q) \le f(p)$, since $q = p$ gives equality and $q < p$ gives $f(q) < f(p)$; that is $v \le u$, contradicting $u < v$. Hence $p < q$, that is $g(u) < g(v)$, and $g$ is increasing. [step 1.1, step 1.3, L6]

2.2 Suppose instead that $f$ is decreasing, and put $F := -f$, that is $F(x) := -f(x)$. Then $F$ is continuous on $I$, it is injective because $f$ is, and it is increasing. [step 1.1, L4, L6]

3.1 Still with $f$ increasing: $g$ satisfies $g(u) \le g(v)$ whenever $u \le v$ in $f[I]$, by step 2.1 when $u < v$ and trivially when $u = v$; the domain $f[I]$ is order-convex by step 1.2; and the image $g[f[I]]$ is $I$, which is order-convex, because $g$ is onto $I$. So the monotone-with-interval-image criterion applies and $g$ is continuous on $f[I]$. [step 1.2, step 1.3, step 2.1, L3]

4.1 By steps 2.1 and 3.1 applied to $F$, the inverse $G : F[I] \to I$ of $F$ is increasing and continuous, and $F[I] = -f[I]$ is order-convex. [step 2.1, step 3.1, step 2.2]

5.1 For $u \in f[I]$ one has $-u \in F[I]$ and $G(-u) = g(u)$, since $F(g(u)) = -f(g(u)) = -u$ and $G$ is the inverse of $F$. So $g$ is the composite of the continuous map $u \mapsto -u$ from $f[I]$ into $F[I]$ with the continuous $G$, hence continuous on $f[I]$. [step 1.3, step 4.1, L4]

6.1 In that case $g$ is decreasing: for $u < v$ in $f[I]$ one has $-v < -u$ in $F[I]$, so $G(-v) < G(-u)$ because $G$ is increasing, that is $g(v) < g(u)$. [step 4.1, step 5.1]

7.1 Claims 4 and 5 are now proved in both cases: for $f$ increasing by steps 2.1 and 3.1, and for $f$ decreasing by steps 5.1 and 6.1; and by step 1.1 there is no other case. [step 1.1, step 2.1, step 3.1, step 5.1, step 6.1] ∎

## Remarks

- **No epsilon-delta argument appears anywhere.** Continuity of the inverse is obtained entirely from [[lem-monotone-with-interval-image-is-continuous]], whose hypotheses are exactly the two facts the theorem has already established: the inverse is monotone, and its image is the order-convex set $I$. The decreasing case is reduced to the increasing one by composing with $u \mapsto -u$ rather than repeating the argument.

- **What the theorem is used for.** It is the tool that turns a strictly monotone continuous bijection into a continuous one in the other direction, and the standard elementary functions are built with it: the companion page derives the continuity of $x \mapsto x^{1/n}$ this way.
````

