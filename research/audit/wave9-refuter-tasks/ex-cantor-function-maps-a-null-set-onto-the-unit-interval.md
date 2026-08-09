## Wave 9 target — `ex-cantor-function-maps-a-null-set-onto-the-unit-interval`

Selection: mandatory Wave 9 high/critical proof-bearing route.

Normalized current SHA-256: `ae3471a1eb5539dbcf34ea7c2131f68f5216d111161304ea7eb40935b1573829`

## Complete current target

````markdown
---
id: ex-cantor-function-maps-a-null-set-onto-the-unit-interval
kind: example
title: "The Cantor set has measure zero, yet the Cantor function maps it onto all of $[0,1]$: a null set can have image an interval of length $1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
  evidence: semantic-source
deps: [def-cantor-function, thm-cantor-function-properties, thm-cantor-set-properties, cor-cantor-function-is-continuous, def-measure-zero-and-content-zero, lem-nondegenerate-interval-is-not-null, def-cantor-set, def-interval, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: false
short: "a null set mapped onto $[0,1]$"
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
    - title: "Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_set"
    - title: "The Cantor Function and the Cantor Set (University of Melbourne)"
      url: "https://researchers.ms.unimelb.edu.au/~xgge%40unimelb/Files/Teaching/Advanced%20Probability%20%28Semester%201%202020%29/The%20Cantor%20Function%20and%20the%20Cantor%20Set.pdf"
pipeline_run: null
---

## Example

Let $C$ be the Cantor set ([[def-cantor-set]]) and let $c : [0,1] \to \mathbb{R}$
be the Cantor function ([[def-cantor-function]]). Then:

1. $C$ has measure zero ([[def-measure-zero-and-content-zero]]);
2. $c[C] = [0,1]$: the Cantor function maps the Cantor set **onto** the whole of
   $[0,1]$ ([[def-injection-surjection-bijection]]);
3. $[0,1]$ does not have measure zero
   ([[lem-nondegenerate-interval-is-not-null]]).

So a continuous function can carry a set of measure zero onto a set that is not
of measure zero, and indeed onto an interval of length $1$: **being null is not
preserved by continuous images.**

## Facts & Assumptions

**Given:** The Cantor set $C$ and the Cantor function $c : [0,1] \to \mathbb{R}$.

[L1] $C$ has content zero and therefore measure zero ([[thm-cantor-set-properties]], claim 2, [[def-measure-zero-and-content-zero]]).

[L2] $c$ is surjective onto $[0,1]$ as a function on $[0,1]$, that is $c[\,[0,1]\,] = [0,1]$; and $c$ is constant on $[u,v]$ whenever $u < v$ lie in $C$ with $(u,v) \cap C = \varnothing$, while every point of $[0,1] \setminus C$ lies in the open interval $(u,v)$ of such a pair ([[thm-cantor-function-properties]], claims 3 and 4).

[L3] No set containing a bounded interval with two distinct endpoints has measure zero ([[lem-nondegenerate-interval-is-not-null]], [[def-interval]]).

[L4] $c$ is continuous on $[0,1]$ ([[cor-cantor-function-is-continuous]]).

## Verification

**Proof technique:** direct.

1.1 Claim 1 is claim 2 of the Cantor set theorem. [L1]

1.2 Claim 3 is the nondegenerate-interval lemma applied to $[0,1]$, whose endpoints $0$ and $1$ are distinct. [L3]

1.3 $c[C] \subseteq [0,1]$, since $c[\,[0,1]\,] = [0,1]$ and $C \subseteq [0,1]$. [L2]

1.4 $[0,1] \subseteq c[C]$: let $y \in [0,1]$ and take $x \in [0,1]$ with $c(x) = y$. If $x \in C$ we are done. Otherwise $x \in [0,1] \setminus C$, so $x$ lies in the open interval $(u,v)$ of a pair $u < v$ of points of $C$ with $(u,v) \cap C = \varnothing$, and $c$ is constant on $[u,v]$; hence $y = c(x) = c(u)$ with $u \in C$, so $y \in c[C]$. [L2]

2.1 Claim 2 follows from steps 1.3 and 1.4: $c[C] = [0,1]$. With claims 1 and 3 this says that the null set $C$ has image the set $[0,1]$, which is not null, under the continuous function $c$. [step 1.1, step 1.2, step 1.3, step 1.4, L4] ∎

## Remarks

- **Nothing here contradicts any theorem about null sets.** Measure zero is
  preserved by countable unions ([[thm-countable-union-of-null-is-null]]) and by
  passing to subsets, both of which are statements about covers. What this
  example shows is that it is **not** preserved by continuous images, and that
  is not a gap in any theorem above: no result in this library asserts that a
  continuous image of a null set is null.

- **The image is as large as it could possibly be.** $c$ takes values in $[0,1]$
  ([[thm-cantor-function-properties]]), so $c[C] \subseteq [0,1]$ always; claim 2
  says the inclusion is an equality. So $C$, which is null and nowhere dense
  ([[thm-cantor-set-properties]]), surjects onto an interval of length $1$;
  that $C$ is uncountable is proved independently as claim 4 of
  [[thm-cantor-set-properties]].

- **Where the increase happens.** The remark
  [[rem-cantor-function-increases-only-on-a-null-set]] records the complementary
  fact: $c$ is locally constant off $C$, so all of its climb from $0$ to $1$
  takes place on the null set $C$, and this example says that the climb is
  complete.
````

## Current Wave 9 provenance determination

```json
{
  "id": "ex-cantor-function-maps-a-null-set-onto-the-unit-interval",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://researchers.ms.unimelb.edu.au/~xgge%40unimelb/Files/Teaching/Advanced%20Probability%20%28Semester%201%202020%29/The%20Cantor%20Function%20and%20the%20Cantor%20Set.pdf",
    "https://en.wikipedia.org/wiki/Cantor_function"
  ],
  "rationale": "The university notes state that the Cantor set is null and that the Cantor function maps it onto [0,1], exactly the example’s core claim.",
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
      "source": "thm-cantor-set-properties",
      "source_section": "Statement",
      "quote": "1. $C$ is closed and bounded, hence compact\n   ([[thm-heine-borel-characterisation-r]], [[def-open-cover-r]]);\n2. $C$ has content zero, and therefore measure zero\n   ([[def-measure-zero-and-content-zero]]);\n3. $C$ is perfect ([[def-perfect-set-r]]);\n4. $C$ is uncountable ([[def-countable]]);\n5. $C$ contains no interval with two distinct endpoints, and is nowhere dense\n   ([[def-nowhere-dense-meager]]);\n6. every nonempty connected subset of $C$ ([[def-connected-r]]) is a single\n   point.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-measure-zero-and-content-zero",
      "source_section": "Definition",
      "quote": "- $A$ has **measure zero**, equivalently $A$ is **null**, when for every real\n  $\\varepsilon > 0$ there are sequences $(a_k)_{k \\in \\mathbb{N}}$ and\n  $(b_k)_{k \\in \\mathbb{N}}$ of reals with $a_k \\le b_k$ for every $k$, such\n  that\n  $$A \\subseteq \\bigcup_{k \\in \\mathbb{N}} [a_k, b_k] \\qquad \\text{and} \\qquad \\sum_{k=0}^{\\infty} (b_k - a_k) \\text{ converges with sum } \\le \\varepsilon .$$\n- $A$ has **content zero** when for every real $\\varepsilon > 0$ there are\n  $n \\in \\mathbb{N}$ and reals $a_0 \\le b_0, \\dots, a_n \\le b_n$ with\n  $$A \\subseteq \\bigcup_{j \\le n} [a_j, b_j] \\qquad \\text{and} \\qquad \\sum_{j=0}^{n} (b_j - a_j) \\le \\varepsilon .$$",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-cantor-function-properties",
      "source_section": "Statement",
      "quote": "1. $c$ is well defined with values in $[0,1]$, and $c(t) = \\gamma(t)$ for every\n   $t \\in C$, so $c$ extends $\\gamma$;\n2. $c(x) \\le c(y)$ whenever $0 \\le x \\le y \\le 1$;\n3. $c$ is surjective onto $[0,1]$\n   ([[def-injection-surjection-bijection]]), and $c(0) = 0$, $c(1) = 1$;\n4. $c$ is constant on $[u,v]$ whenever $u < v$, $u, v \\in C$ and\n   $(u,v) \\cap C = \\varnothing$; and every $x \\in [0,1] \\setminus C$ lies in the\n   open interval of such a pair, so $c$ is constant on a whole neighbourhood of\n   every point of $[0,1]$ outside $C$.",
      "uses": [
        "1.3",
        "1.4"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-nondegenerate-interval-is-not-null",
      "source_section": "Statement",
      "quote": "Consequently, if $a < b$ then **no subset of $\\mathbb{R}$ containing $[a,b]$ has\nmeasure zero** ([[def-measure-zero-and-content-zero]]); in particular none of\nthe four bounded intervals $[a,b]$, $(a,b)$, $[a,b)$, $(a,b]$ with $a < b$ has\nmeasure zero, so measure zero is not a vacuous notion.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L3",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "**Nondegeneracy.** An interval is **degenerate** when it has at most one element,\nand **nondegenerate** when it has at least two. For the four bounded forms with\nendpoints $a$ and $b$:",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L4",
      "source": "cor-cantor-function-is-continuous",
      "source_section": "Statement",
      "quote": "The Cantor function $c : [0,1] \\to \\mathbb{R}$ ([[def-cantor-function]]) is\ncontinuous on $[0,1]$ ([[def-continuity-real]]). It is moreover nondecreasing\n([[def-monotone-function]]), with $c(0) = 0$ and $c(1) = 1$.",
      "uses": [
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "ex-cantor-function-maps-a-null-set-onto-the-unit-interval-step-1-1",
      "claim": "Claim 1 is claim 2 of the Cantor set theorem. [L1]",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "ex-cantor-function-maps-a-null-set-onto-the-unit-interval-step-1-2",
      "claim": "Claim 3 is the nondegenerate-interval lemma applied to $[0,1]$, whose endpoints $0$ and $1$ are distinct. [L3]",
      "step": "1.2",
      "inputs": [
        "L3"
      ]
    },
    {
      "id": "ex-cantor-function-maps-a-null-set-onto-the-unit-interval-step-1-3",
      "claim": "$c[C] \\subseteq [0,1]$, since $c[\\,[0,1]\\,] = [0,1]$ and $C \\subseteq [0,1]$. [L2]",
      "step": "1.3",
      "inputs": [
        "L2"
      ]
    },
    {
      "id": "ex-cantor-function-maps-a-null-set-onto-the-unit-interval-step-1-4",
      "claim": "$[0,1] \\subseteq c[C]$: let $y \\in [0,1]$ and take $x \\in [0,1]$ with $c(x) = y$. If $x \\in C$ we are done. Otherwise $x \\in [0,1] \\setminus C$, so $x$ lies in the open interval $(u,v)$ of a pair $u < v$ of points of $C$ with $(u,v) \\cap C = \\varnothing$, and $c$ is constant on $[u,v]$; hence $y = c(x) = c(u)$ with $u \\in C$, so $y \\in c[C]$. [L2]",
      "step": "1.4",
      "inputs": [
        "L2"
      ]
    },
    {
      "id": "ex-cantor-function-maps-a-null-set-onto-the-unit-interval-step-2-1",
      "claim": "Claim 2 follows from steps 1.3 and 1.4: $c[C] = [0,1]$. With claims 1 and 3 this says that the null set $C$ has image the set $[0,1]$, which is not null, under the continuous function $c$. [step 1.1, step 1.2, step 1.3, step 1.4, L4] ∎",
      "step": "2.1",
      "inputs": [
        "1.3",
        "1.4",
        "1.1",
        "1.2",
        "L4"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "step 1.4: the empty-object convention or its exclusion is explicit in the statement/proof."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 1.2: the zero-valued or zero-index boundary is handled explicitly, or is included without division by it."
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
      "evidence": "step 1.2: domain endpoints and any one-sided interpretation are kept within the stated relative-domain convention."
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
    "source": "ex-cantor-function-maps-a-null-set-onto-the-unit-interval",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
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
    "source": "ex-cantor-function-maps-a-null-set-onto-the-unit-interval",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
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
    "source": "ex-cantor-function-maps-a-null-set-onto-the-unit-interval",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "thm-cantor-set-properties",
    "declared_target": "thm-cantor-set-properties",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-cantor-function-maps-a-null-set-onto-the-unit-interval",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "cor-cantor-function-is-continuous",
    "declared_target": "cor-cantor-function-is-continuous",
    "target_statement_provenance": "literature-derived",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-cantor-function-maps-a-null-set-onto-the-unit-interval",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "def-measure-zero-and-content-zero",
    "declared_target": "def-measure-zero-and-content-zero",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-cantor-function-maps-a-null-set-onto-the-unit-interval",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "lem-nondegenerate-interval-is-not-null",
    "declared_target": "lem-nondegenerate-interval-is-not-null",
    "target_statement_provenance": "literature-derived",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-cantor-function-maps-a-null-set-onto-the-unit-interval",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "def-cantor-set",
    "declared_target": "def-cantor-set",
    "target_statement_provenance": "literature-derived",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-cantor-function-maps-a-null-set-onto-the-unit-interval",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
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
    "source": "ex-cantor-function-maps-a-null-set-onto-the-unit-interval",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "def-injection-surjection-bijection",
    "declared_target": "def-injection-surjection-bijection",
    "target_statement_provenance": "ai-altered",
    "targetPage": "relations-functions-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Complete current text of every declared or cited item (11)

### `cor-cantor-function-is-continuous`

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

### `def-injection-surjection-bijection`

````markdown
---
id: def-injection-surjection-bijection
kind: definition
title: "Injection, surjection, bijection"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function, def-image-and-preimage-under-a-relation]
justified_by: []
aliases: [def-injective, def-surjective, def-bijective]
landmark: false
short: "injective, surjective, bijective"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: published-rehoming-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Bijection, injection and surjection (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bijection,_injection_and_surjection"
    - title: "T. Tao, Analysis I, 3rd ed., §3.3 (Functions)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

Let $A$ and $B$ be sets and let $f : A \to B$ be a function ([[def-function]]).

- $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all
  $x, y \in A$.
- $f$ is **surjective** (onto) if for every $b \in B$ there is some $x \in A$
  with $f(x) = b$; equivalently, the image $f[A] := \{ f(x) : x \in A \}$ equals
  $B$.
- $f$ is **bijective** if it is both injective and surjective.

For $S \subseteq A$ we write $f[S] = \{ f(x) : x \in S \}$ for the image of $S$,
and for $T \subseteq B$ we write $f^{-1}[T] = \{ x \in A : f(x) \in T \}$ for the
preimage of $T$; these are the image and preimage of a set under $f$ read as a
relation ([[def-image-and-preimage-under-a-relation]]).

## Remarks

- **Composition.** If $f : A \to B$ and $g : B \to C$ are both injective then so
  is $g \circ f$, since $g(f(x)) = g(f(y))$ forces $f(x) = f(y)$ and then
  $x = y$; if both are surjective then so is $g \circ f$, since any $c \in C$ is
  $g(b)$ for some $b \in B$ and that $b$ is $f(a)$ for some $a \in A$. Hence a
  composition of bijections is a bijection. These verifications, together with the
  two partial converses, are
  [[prop-composition-preserves-injectivity-surjectivity-and-bijectivity]].

- **Inverses.** $f : A \to B$ is bijective exactly when there is a function
  $f^{-1} : B \to A$ with $f^{-1}(f(x)) = x$ for all $x \in A$ and
  $f(f^{-1}(b)) = b$ for all $b \in B$; that two-sided inverse is unique, and it
  is itself a bijection. Injectivity alone gives a bijection from $A$ onto the
  image $f[A]$, and hence an inverse defined on $f[A]$ only. No choice principle
  is involved: the value $f^{-1}(b)$ is the *unique* $x$ with $f(x) = b$, so it
  is determined rather than selected. The full statement, with the uniqueness of the
  two-sided inverse, is
  [[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]]; the
  corresponding statement for an arbitrary surjection is not available at this point
  in the reading order, because a right inverse for every surjection is equivalent
  to the Axiom of Choice.

- **What this item does and does not do.** A function $A \to B$ is a set of ordered
  pairs, single valued and total on $A$ ([[def-function]]); ordered pairs, Cartesian
  products, images and preimages are fixed by [[def-ordered-pair]],
  [[def-cartesian-product]] and [[def-image-and-preimage-under-a-relation]]. This
  item only fixes the three adjectives and the notation used for them. Nothing here
  is proved.
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

### `def-measure-zero-and-content-zero`

````markdown
---
id: def-measure-zero-and-content-zero
kind: definition
title: "Measure zero (a countable cover by intervals of total length below every $\\varepsilon$) and content zero (a finite such cover)"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-interval, def-series, def-countable, thm-nonnegative-series-bounded-partial-sums, def-finite-sum, lem-finite-sum-laws, def-complete-ordered-field]
justified_by: []
forward_refs: [cex-null-set-not-of-content-zero]
aliases: [def-null-set]
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
    - title: "Null set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Null_set"
    - title: "Jordan measure (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Jordan_measure"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 11"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "MIT 18.125, Homework 2: Measure-zero sets"
      url: "https://math.mit.edu/classes/18.125/HW2.pdf"
    - title: "UAF Math 641, Measure Theory notes"
      url: "https://www.cs.uaf.edu/~maxwell/AY2007/math641/Measure.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]), intervals and their lengths are as in
[[def-interval]], and a *sequence* is a function on $\mathbb{N}$, which contains
$0$. Let $A \subseteq \mathbb{R}$.

- $A$ has **measure zero**, equivalently $A$ is **null**, when for every real
  $\varepsilon > 0$ there are sequences $(a_k)_{k \in \mathbb{N}}$ and
  $(b_k)_{k \in \mathbb{N}}$ of reals with $a_k \le b_k$ for every $k$, such
  that
  $$A \subseteq \bigcup_{k \in \mathbb{N}} [a_k, b_k] \qquad \text{and} \qquad \sum_{k=0}^{\infty} (b_k - a_k) \text{ converges with sum } \le \varepsilon .$$
- $A$ has **content zero** when for every real $\varepsilon > 0$ there are
  $n \in \mathbb{N}$ and reals $a_0 \le b_0, \dots, a_n \le b_n$ with
  $$A \subseteq \bigcup_{j \le n} [a_j, b_j] \qquad \text{and} \qquad \sum_{j=0}^{n} (b_j - a_j) \le \varepsilon .$$

The number $b_k - a_k \ge 0$ is the length of $[a_k,b_k]$ ([[def-interval]]), and
the sums are the series and the finite sums of [[def-series]] and
[[def-finite-sum]].

**Working form: only the partial sums have to be checked.** All the terms
$b_k - a_k$ are $\ge 0$, so by claim 2 of
[[thm-nonnegative-series-bounded-partial-sums]] the series converges exactly when
its partial sums are bounded above, and its sum is then their supremum.
Consequently, for a fixed $\varepsilon > 0$,

$$\sum_{k=0}^{\infty}(b_k - a_k) \text{ converges with sum} \le \varepsilon \quad \Longleftrightarrow \quad \sum_{k<n} (b_k - a_k) \le \varepsilon \ \text{ for every } n \in \mathbb{N},$$

since a supremum is $\le \varepsilon$ exactly when $\varepsilon$ is an upper
bound of the set it is the supremum of ([[def-complete-ordered-field]]). Every
verification of nullity below checks the right-hand condition.

**Closed intervals lose nothing.** A bounded interval with endpoints
$a \le b$ is contained in $[a,b]$ and has the same length ([[def-interval]]), so
a cover by intervals of any of the four bounded forms yields a cover by closed
intervals with the same lengths. The definition is therefore stated with closed
intervals once and for all. Covers by *open* intervals are a genuinely different
demand, and passing to one costs a little extra length: the enlargement
$[a_k,b_k] \subseteq (a_k - \delta_k,\ b_k + \delta_k)$ is carried out where it is
needed, in [[lem-nondegenerate-interval-is-not-null]] and in
[[thm-compact-null-is-content-zero]].

**Both notions are inherited by subsets.** If $B \subseteq A$ and $A$ is null,
then any cover of $A$ covers $B$, so $B$ is null; the same sentence with finite
covers shows a subset of a set of content zero has content zero.

**A finite cover is a countable cover, so content zero implies measure zero.**
Padding the list $[a_0,b_0], \dots, [a_n,b_n]$ with the degenerate intervals
$[0,0]$ for $k > n$ leaves the total length unchanged, by the splitting law for
finite sums ([[lem-finite-sum-laws]]). This is recorded as a lemma with its
proof, [[lem-content-zero-implies-null]], because it is cited on its own.

## Remarks

- **The two notions genuinely differ.** $\mathbb{Q} \cap [0,1]$ is null and does
  not have content zero ([[cex-null-set-not-of-content-zero]]), so the two
  quantifier patterns, "a sequence of intervals" and "a finite list of
  intervals", are not interchangeable. They do agree for compact sets
  ([[thm-compact-null-is-content-zero]]), and the compact case is the only one in
  which content zero is used anywhere on this pair of pages. Nothing is claimed
  about what later pages will do with it.

- **Why "content" and not "measure" for the finite version.** The finite-cover
  notion is the vanishing of the Jordan outer content, and the countable-cover
  notion is the vanishing of the Lebesgue outer measure. Neither outer quantity
  is defined in this library, and no item here assigns a nonzero size to any set:
  every statement is of the shape "can, or cannot, be covered by intervals of
  total length below such and such a bound". That is a deliberate restriction of
  scope at this point in the reading order, not a claim that the general notions
  are unavailable in mathematics.

- **Measure zero is not vacuous and not universal.** No interval with two
  distinct endpoints is null ([[lem-nondegenerate-interval-is-not-null]]), while
  every at most countable set is ([[lem-countable-sets-are-null]]) and so is the
  uncountable Cantor set ([[thm-cantor-set-properties]]). The three facts
  together are what make the notion worth having.
````

### `lem-nondegenerate-interval-is-not-null`

````markdown
---
id: lem-nondegenerate-interval-is-not-null
kind: lemma
title: "A sequence of intervals covering $[a,b]$ has total length at least $b - a$, so no interval of positive length has measure zero"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-finite-interval-cover-total-length, def-measure-zero-and-content-zero, def-interval, thm-heine-borel-characterisation-r, def-open-cover-r, def-open-and-closed-in-r, def-bounded-set, thm-geometric-series, def-series, def-finite-sum, lem-finite-sum-laws, thm-nonnegative-series-bounded-partial-sums, def-integer-power, thm-induction-principle, lem-nat-trichotomy, def-nat-order, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
forward_refs: [cex-null-set-not-of-content-zero]
aliases: []
landmark: true
short: "countable cover of $[a,b]$ has total length $\\ge b-a$"
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Null set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Null_set"
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 11"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "UAF Math 641, Measure Theory notes"
      url: "https://www.cs.uaf.edu/~maxwell/AY2007/math641/Measure.pdf"
pipeline_run: null
---

## Statement

Let $a, b \in \mathbb{R}$ with $a \le b$, let $(a_k)_{k \in \mathbb{N}}$ and
$(b_k)_{k \in \mathbb{N}}$ be sequences of reals with $a_k \le b_k$ for every
$k$, and suppose

$$[a,b] \;\subseteq\; \bigcup_{k \in \mathbb{N}} [a_k, b_k] .$$

If $M \in \mathbb{R}$ satisfies $\sum_{k < n} (b_k - a_k) \le M$ for every
$n \in \mathbb{N}$, then

$$M \;\ge\; b - a .$$

Consequently, if $a < b$ then **no subset of $\mathbb{R}$ containing $[a,b]$ has
measure zero** ([[def-measure-zero-and-content-zero]]); in particular none of
the four bounded intervals $[a,b]$, $(a,b)$, $[a,b)$, $(a,b]$ with $a < b$ has
measure zero, so measure zero is not a vacuous notion.

This is the countable strengthening of
[[lem-finite-interval-cover-total-length]], and it is what compactness is spent
on: the countable cover is enlarged to an open one at an arbitrarily small cost
in total length, and [[thm-heine-borel-characterisation-r]] reduces it to a
finite cover, where the finite lemma applies.

## Facts & Assumptions

**Given:** Reals $a \le b$, sequences $(a_k)$ and $(b_k)$ with $a_k \le b_k$ for every $k$ and $[a,b] \subseteq \bigcup_k [a_k,b_k]$, and a real $M$ with $\sum_{k<n}(b_k - a_k) \le M$ for every $n \in \mathbb{N}$. Throughout, $\theta := 2^{-1}$.

[L1] Measure zero: $A$ is null when for every real $\varepsilon > 0$ there is a sequence of closed intervals covering $A$ all of whose partial total lengths are $\le \varepsilon$; a subset of a null set is null ([[def-measure-zero-and-content-zero]]).

[L2] $[c,d] = \{\, x : c \le x \le d \,\}$ has length $d - c \ge 0$ when $c \le d$; $(c,d)$ is the open interval; a closed bounded interval is bounded ([[def-interval]], [[def-bounded-set]]).

[L3] Every open interval $(c,d)$ is an open set and every interval $[c,d]$ is a closed set ([[def-open-and-closed-in-r]], [[def-interval]]).

[L4] A subset of $\mathbb{R}$ is compact exactly when it is closed and bounded ([[thm-heine-borel-characterisation-r]]); from every family of open sets whose union contains a compact set, either the set is empty and the empty subfamily covers it, or one can extract $m \in \mathbb{N}$ and members $U_0, \dots, U_m$ of the family whose union already contains it ([[def-open-cover-r]]).

[L5] If $[a,b] \subseteq \bigcup_{j \le n}[c_j,d_j]$ with $c_j \le d_j$ and $a \le b$, then $\sum_{j \le n}(d_j - c_j) \ge b - a$; the same holds for covering intervals of any bounded form with those endpoints ([[lem-finite-interval-cover-total-length]]).

[L6] Powers and the geometric series: $\theta^0 = 1$ and $\theta^{k+1} = \theta^k \theta$, all $\theta^k > 0$ for $\theta > 0$, and $\sum_{k=0}^{\infty} \theta^k = 1/(1-\theta) = 2$ for $\theta = 2^{-1}$; a series of nonnegative terms has all its partial sums at most its sum ([[def-integer-power]], [[thm-geometric-series]], [[def-series]], [[thm-nonnegative-series-bounded-partial-sums]]).

[L7] Finite sums: additivity, scaling by a constant, splitting, and monotonicity in the terms ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L8] Every finite list $k_0, \dots, k_m$ of naturals has an upper bound $K \in \mathbb{N}$: by induction on $m$, taking $K = 0$ for the empty case and replacing $K$ by whichever of $K$ and $k_{m+1}$ is the larger, the order of $\mathbb{N}$ being total ([[thm-induction-principle]], [[lem-nat-trichotomy]], [[def-nat-order]]).

[L9] Ordered-field arithmetic: $0 < 1$, so $2 > 0$ and $0 < t \cdot 2^{-1} < t$ for $t > 0$; adding a constant and multiplying by a positive preserve an inequality; the order is total and transitive ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $M < b - a$. Since $\sum_{k<0}(b_k - a_k) = 0$ by [L7], we have $M \ge 0$, so $b - a > 0$ and $a < b$. Put $\varepsilon := (b - a - M) \cdot 2^{-1}$, a positive real by [L9]. [assume-contra, given, L7, L9]

2.1 For $k \in \mathbb{N}$ put $\delta_k := \varepsilon \cdot 4^{-1} \cdot \theta^{k}$, a positive real by [L6] and [L9], and $J_k := (a_k - \delta_k,\ b_k + \delta_k)$. Each $J_k$ is an open set by [L3], and $[a_k,b_k] \subseteq J_k$ because $a_k - \delta_k < a_k \le x \le b_k < b_k + \delta_k$ for $x \in [a_k,b_k]$, by [L2] and [L9]. Hence $[a,b] \subseteq \bigcup_k [a_k,b_k] \subseteq \bigcup_k J_k$, so $\{\, J_k : k \in \mathbb{N} \,\}$ is a family of open sets whose union contains $[a,b]$. The length of the interval with endpoints $a_k - \delta_k$ and $b_k + \delta_k$ is $(b_k - a_k) + 2\delta_k = (b_k - a_k) + \varepsilon \cdot 2^{-1} \cdot \theta^{k}$, by [L2] and [L9]. [step 1.1, given, L2, L3, L6, L9]

3.1 $[a,b]$ is closed and bounded by [L2] and [L3], hence compact by [L4]; so there are $m \in \mathbb{N}$ and members $J_{k_0}, \dots, J_{k_m}$ of the family with $[a,b] \subseteq J_{k_0} \cup \dots \cup J_{k_m}$. By [L8] fix $K \in \mathbb{N}$ with $k_t \le K$ for every $t \le m$; then every $J_{k_t}$ occurs among $J_0, \dots, J_K$, so $[a,b] \subseteq \bigcup_{k \le K} J_k$. [step 2.1, L2, L3, L4, L8, choose]

4.1 By [L5], applied to the $K+1$ intervals $J_k$ with endpoints $a_k - \delta_k \le b_k + \delta_k$, one gets $\sum_{k \le K} \big( (b_k - a_k) + \varepsilon \cdot 2^{-1} \cdot \theta^{k} \big) \ge b - a$. [step 2.1, step 3.1, L5]

5.1 The left-hand side is at most $M + \varepsilon$: by [L7] it splits as $\sum_{k < K+1}(b_k - a_k) + \varepsilon \cdot 2^{-1} \sum_{k < K+1} \theta^{k}$, the first sum is $\le M$ by hypothesis, and the second is $\le \varepsilon \cdot 2^{-1} \cdot 2 = \varepsilon$ by [L6]. So $b - a \le M + \varepsilon = (b - a + M) \cdot 2^{-1} < b - a$ by [L9], which is impossible; the assumption of step 1.1 is untenable and $M \ge b - a$. For the consequence, let $a < b$ and let $A \supseteq [a,b]$ be null; taking $\varepsilon_1 := (b-a) \cdot 2^{-1} > 0$ in [L1] gives a sequence of closed intervals covering $A$, hence covering $[a,b]$, with every partial total length $\le \varepsilon_1$, so what has just been proved gives $(b-a) \cdot 2^{-1} \ge b - a$ and hence $b - a \le 0$ by [L9], contradicting $a < b$. Finally each of $(a,b)$, $[a,b)$, $(a,b]$ and $[a,b]$ with $a < b$ contains $[a', b']$ for $a' := a + (b-a) \cdot 4^{-1}$ and $b' := b - (b-a) \cdot 4^{-1}$, which satisfy $a < a' < b' < b$ by [L9], so none of them is null. [step 1.1, step 2.1, step 4.1, given, L1, L6, L7, L9, discharge-contradiction] ∎

## Remarks

- **What the hypothesis $\sum_{k<n}(b_k - a_k) \le M$ says.** It is the working form of "the total length is at most $M$" recorded in [[def-measure-zero-and-content-zero]]: for nonnegative terms, having all partial sums below $M$ is the same as convergence with sum below $M$. Stating the lemma with partial sums avoids assuming convergence, and the conclusion is therefore also the statement that a cover of $[a,b]$ whose total length diverges is no counterexample.

- **The $\varepsilon$ is spent on making the cover open, not on the estimate.** Enlarging $[a_k,b_k]$ to $(a_k - \delta_k, b_k + \delta_k)$ adds $2\delta_k$ to the $k$-th length, and the geometric choice $\delta_k = \varepsilon \theta^k/4$ makes the whole added amount at most $\varepsilon$, however many intervals are used. This is the standard device and it recurs in [[thm-compact-null-is-content-zero]].

- **Compactness is not optional here.** Without it the finite lemma cannot be reached, and the countable statement is genuinely stronger than the finite one: $\mathbb{Q} \cap [0,1]$ is covered by countably many intervals of total length below any $\varepsilon$, and by no finite family of total length below $1$ ([[cex-null-set-not-of-content-zero]]).
````

### `rem-cantor-function-increases-only-on-a-null-set`

````markdown
---
id: rem-cantor-function-increases-only-on-a-null-set
kind: remark
title: "The Cantor function is continuous and nondecreasing, climbs from $0$ to $1$, and is constant on every interval removed in the construction of the Cantor set, so all of its increase happens on a set of measure zero"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
  evidence: semantic-source
deps: [cor-cantor-function-is-continuous, thm-cantor-function-properties, thm-cantor-set-properties, def-cantor-set, def-cantor-function, def-measure-zero-and-content-zero, def-monotone-function, def-interval]
justified_by: []
aliases: []
landmark: false
short: "the Cantor function climbs on a null set"
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
    - title: "Cantor function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_function"
    - title: "Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_set"
pipeline_run: null
---

## Remark

Collect what is now known about the Cantor function $c : [0,1] \to \mathbb{R}$
([[def-cantor-function]]) and the Cantor set $C$ ([[def-cantor-set]]).

- $c$ is continuous on $[0,1]$ ([[cor-cantor-function-is-continuous]]).
- $c$ is nondecreasing ([[def-monotone-function]]), and $c(0) = 0$, $c(1) = 1$:
  it climbs the whole way from $0$ to $1$ ([[thm-cantor-function-properties]],
  claims 2 and 3).
- $c$ is **constant on every interval removed in the construction of $C$**: if
  $u < v$ lie in $C$ and $(u,v) \cap C = \varnothing$, then $c$ is constant on
  $[u,v]$; and every point of $[0,1] \setminus C$ lies in the open interval
  $(u,v)$ of such a pair ([[thm-cantor-function-properties]], claim 4).
- $C$ has content zero, and therefore measure zero
  ([[thm-cantor-set-properties]], claim 2, [[def-measure-zero-and-content-zero]]).

**All of the increase happens on $C$, in the following exact sense.** Let
$x < y$ in $[0,1]$ with $c(x) < c(y)$. Then $(x,y) \cap C \ne \varnothing$.
Indeed, suppose $(x,y) \cap C = \varnothing$ and pick any $t$ with $x < t < y$.
Then $t \notin C$, so $t$ lies in the open interval $(u,v)$ of a pair $u < v$ of
points of $C$ with $(u,v) \cap C = \varnothing$, and $c$ is constant on $[u,v]$.
Now $u < t < y$, and $u \in C$, so $u \notin (x,y)$ and therefore $u \le x$;
symmetrically $x < t < v$ and $v \in C$ give $v \ge y$. Hence
$[x,y] \subseteq [u,v]$ and $c(x) = c(y)$, contrary to assumption. So a
nondegenerate interval on which $c$ actually rises must meet $C$, a set of
measure zero, while on the complement of $C$ the function is locally constant.

**What is not claimed here.** Nothing above says that $c$ is differentiable
anywhere, that its derivative vanishes anywhere, or that $c$ is singular: no
notion of derivative is available at this point in the reading order, and no
notion of Lebesgue measure is developed in the library as it stands. Measure
zero here is exactly [[def-measure-zero-and-content-zero]], a condition on
covers by intervals, and every statement above is a statement about $c$, about
$C$, and about that covering condition, and about nothing else.

**Why this is worth recording at all.** A continuous nondecreasing function that
climbs from $0$ to $1$ might be expected to do its climbing on a set that is
large in some sense; $c$ does all of it on a set that is null and, being
nowhere dense ([[thm-cantor-set-properties]], claim 5), small in category as
well. The companion page pushes the same observation one step further: $c$ maps
the null set $C$ **onto** the whole of $[0,1]$.
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

### `thm-cantor-set-properties`

````markdown
---
id: thm-cantor-set-properties
kind: theorem
title: "The Cantor set is compact, perfect, uncountable, nowhere dense and of measure zero, and it contains no interval of positive length, so its only nonempty connected subsets are single points"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cantor-set, thm-cantor-set-ternary-description, thm-heine-borel-characterisation-r, def-open-cover-r, def-perfect-set-r, thm-perfect-set-uncountable-r, def-nowhere-dense-meager, def-measure-zero-and-content-zero, lem-content-zero-implies-null, lem-nondegenerate-interval-is-not-null, def-connected-r, thm-connected-subsets-of-r-are-intervals, thm-open-set-algebra-r, def-countable, def-interval, def-integer-power, lem-power-laws, def-open-and-closed-in-r, def-limit-point-r, def-neighbourhood-r, def-interior-closure-boundary-r, thm-closure-characterisations-r, thm-induction-principle, def-finite-sum, lem-finite-sum-laws, lem-series-linearity, def-series, lem-geometric-sequence-null, def-real-limit, lem-of-abs-value, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: true
short: "$C$ compact, perfect, uncountable, null"
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
    - title: "Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_set"
    - title: "Perfect set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Perfect_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (§2.44)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "University of Chicago MATH 395 notes"
      url: "https://math.uchicago.edu/~alephnil/notes/MATH-395-notes.pdf"
    - title: "Stanford Math 205A, Homework 1"
      url: "https://math.stanford.edu/~ryzhik/STANFORD/STANF205-11/hw205-11-1.pdf"
pipeline_run: null
---

## Statement

Let $C$ be the Cantor set ([[def-cantor-set]]). Then:

1. $C$ is closed and bounded, hence compact
   ([[thm-heine-borel-characterisation-r]], [[def-open-cover-r]]);
2. $C$ has content zero, and therefore measure zero
   ([[def-measure-zero-and-content-zero]]);
3. $C$ is perfect ([[def-perfect-set-r]]);
4. $C$ is uncountable ([[def-countable]]);
5. $C$ contains no interval with two distinct endpoints, and is nowhere dense
   ([[def-nowhere-dense-meager]]);
6. every nonempty connected subset of $C$ ([[def-connected-r]]) is a single
   point.

Claim 6 is what the phrase "totally disconnected" names elsewhere; that phrase
is **not** used here, because no definition of total disconnectedness exists at
this point in the reading order. What is proved is exactly the displayed
statement, and it is obtained from claim 5 through
[[thm-connected-subsets-of-r-are-intervals]].

## Facts & Assumptions

**Given:** The sets $C_n$ and $C$ of [[def-cantor-set]], and the map $\Phi$ and the set $D$ of $\{0,2\}$-valued sequences of [[thm-cantor-set-ternary-description]].

[L1] $C_0 = [0,1]$, $C_{n+1} = \tfrac13 C_n \cup (\tfrac23 + \tfrac13 C_n)$, $C = \bigcap_n C_n \subseteq C_m$ for every $m$, every $C_n \subseteq [0,1]$, $0 \in C$, and $3^{-n} = (3^{-1})^n$ ([[def-cantor-set]], [[def-interval]], [[def-integer-power]], [[lem-power-laws]]).

[L2] $\Phi$ is a bijection from $D$ onto $C$, $\Phi(a) = \sum_{k \ge 0} a_k 3^{-k-1}$, and convergent series add and scale termwise ([[thm-cantor-set-ternary-description]], [[lem-series-linearity]], [[def-series]]).

[L3] $[c,d]$ is a closed set and a bounded interval, $(c,d)$ is open, $N_\varepsilon(x) = (x-\varepsilon, x+\varepsilon)$, and every open set contains a neighbourhood of each of its points ([[def-interval]], [[def-open-and-closed-in-r]], [[def-neighbourhood-r]]).

[L4] Finite unions of closed sets are closed, and an intersection of a nonempty family of closed sets is closed ([[thm-open-set-algebra-r]]).

[L5] A subset of $\mathbb{R}$ is compact exactly when it is closed and bounded ([[thm-heine-borel-characterisation-r]], [[def-open-cover-r]]).

[L6] Content zero and measure zero as in [[def-measure-zero-and-content-zero]]; a set of content zero is null ([[lem-content-zero-implies-null]]); no null set contains an interval $[u,v]$ with $u < v$ ([[lem-nondegenerate-interval-is-not-null]]).

[L7] $P$ is perfect when it is closed and no point of it is isolated in it ([[def-perfect-set-r]], [[def-limit-point-r]]); every nonempty perfect subset of $\mathbb{R}$ is uncountable ([[thm-perfect-set-uncountable-r]], [[def-countable]]).

[L8] A set is nowhere dense exactly when the interior of its closure is empty, and a closed set equals its closure ([[def-nowhere-dense-meager]], [[def-interior-closure-boundary-r]], [[thm-closure-characterisations-r]]).

[L9] A subset of $\mathbb{R}$ is connected exactly when it is order-convex ([[thm-connected-subsets-of-r-are-intervals]], [[def-connected-r]], [[def-interval]]).

[L10] $|r|^k \to 0$ for $|r| < 1$ ([[lem-geometric-sequence-null]]); convergence to $0$ is tested against rational $\varepsilon > 0$ ([[def-real-limit]]); $|z| \ge 0$, $|z| = z$ for $z \ge 0$, and $|uv| = |u||v|$ ([[lem-of-abs-value]]).

[L11] Induction on $\mathbb{N}$ ([[thm-induction-principle]]); finite sums split, scale and are monotone in their terms ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L12] Ordered-field arithmetic: $0 < 1$, so $2 > 0$, $3 > 0$, $3^{-1} > 0$ and $0 < 2 \cdot 3^{-1} < 1$; adding a constant and multiplying by a positive preserve an inequality; the order is total and transitive ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 **$C$ is compact, claim 1.** First, for $\lambda \ne 0$ and $c \in \mathbb{R}$ the set $\lambda S + c := \{\lambda s + c : s \in S\}$ is closed whenever $S$ is: if $x \notin \lambda S + c$ then $(x - c)\lambda^{-1} \notin S$, so by [L3] there is a real $\eta > 0$ with $N_\eta((x-c)\lambda^{-1}) \cap S = \varnothing$, and every $z$ with $|z - x| < |\lambda|\eta$ satisfies $|(z-c)\lambda^{-1} - (x-c)\lambda^{-1}| = |z-x| \cdot |\lambda|^{-1} < \eta$ by [L10] and [L12], hence $(z-c)\lambda^{-1} \notin S$ and $z \notin \lambda S + c$. Now every $C_n$ is closed, by induction on $n$ ([L11]): $C_0 = [0,1]$ is closed by [L3], and $C_{n+1}$ is the union of the two closed sets $\tfrac13 C_n$ and $\tfrac23 + \tfrac13 C_n$, hence closed by [L4]. So $C = \bigcap_n C_n$ is closed by [L4], and $C \subseteq [0,1]$ is bounded by [L1] and [L3]; by [L5] it is compact. [L1, L3, L4, L5, L10, L11, L12]

1.2 **$C$ has content zero and measure zero, claim 2.** By induction on $n$ ([L11]) the following holds for every $n$: there are $m \in \mathbb{N}$ and reals $u_0 \le v_0, \dots, u_m \le v_m$ with $C_n \subseteq \bigcup_{j \le m}[u_j,v_j]$ and $\sum_{j \le m}(v_j - u_j) = (2 \cdot 3^{-1})^{n}$. At $n = 0$ take the single interval $[0,1]$, of total length $1 = (2 \cdot 3^{-1})^0$ by [L1]. Given such a list at $n$, define $2m + 2$ intervals by $[u_j 3^{-1},\, v_j 3^{-1}]$ for $j \le m$ and $[2 \cdot 3^{-1} + u_{j-m-1}3^{-1},\, 2 \cdot 3^{-1} + v_{j-m-1}3^{-1}]$ for $m < j \le 2m+1$; they cover $\tfrac13 C_n$ and $\tfrac23 + \tfrac13 C_n$ respectively, hence cover $C_{n+1}$, and their total length is $3^{-1}(2 \cdot 3^{-1})^{n} + 3^{-1}(2 \cdot 3^{-1})^{n} = (2 \cdot 3^{-1})^{n+1}$ by [L11] and [L12]. Since $0 < 2 \cdot 3^{-1} < 1$ by [L12], [L10] gives, for every real $\varepsilon > 0$, an $n$ with $(2 \cdot 3^{-1})^{n} \le \varepsilon$; as $C \subseteq C_n$ by [L1], the corresponding finite list covers $C$ with total length at most $\varepsilon$. So $C$ has content zero by [L6], and hence measure zero by [L6]. [L1, L6, L10, L11, L12]

2.1 **$C$ is perfect, claim 3.** $C$ is closed by step 1.1. Let $x \in C$ and let the real $\varepsilon > 0$ be given. By [L2] write $x = \Phi(a)$ with $a \in D$. By [L10] and [L12] fix $k \in \mathbb{N}$ with $2 \cdot 3^{-k-1} < \varepsilon$, and define $b \in D$ by $b_j := a_j$ for $j \ne k$ and $b_k := 2 - a_k$, so $b_k \in \{0,2\}$ and $b \ne a$. Then $\Phi(b) \in C$ and $\Phi(b) \ne \Phi(a)$ by [L2], while $\Phi(b) - \Phi(a) = \sum_{j \ge 0}(b_j - a_j)3^{-j-1} = (b_k - a_k)3^{-k-1}$ by [L2], all other terms being $0$, so $|\Phi(b) - x| = 2 \cdot 3^{-k-1} < \varepsilon$ by [L10]. Thus $N_\varepsilon(x)$ contains a point of $C$ other than $x$, for every $\varepsilon$, so $x$ is not isolated in $C$; by [L7] $C$ is perfect. [step 1.1, L2, L7, L10, L12]

2.2 **$C$ contains no nondegenerate interval and is nowhere dense, claim 5.** By step 1.2 the set $C$ is null, so by [L6] it contains no $[u,v]$ with $u < v$; in particular it contains no interval of any of the four bounded forms with distinct endpoints, since such an interval contains a closed one with distinct endpoints by [L6] and [L12]. Its interior is therefore empty: if $N_\varepsilon(x) \subseteq C$ for some real $\varepsilon > 0$, then $[x - \varepsilon \cdot 2^{-1},\, x + \varepsilon \cdot 2^{-1}] \subseteq N_\varepsilon(x) \subseteq C$ by [L3] and [L12], an interval with distinct endpoints. Since $C$ is closed by step 1.1, it equals its closure, so [L8] gives that $C$ is nowhere dense. [step 1.1, step 1.2, L3, L6, L8, L12]

3.1 **$C$ is uncountable, claim 4.** $C$ is nonempty, since $0 \in C$ by [L1], and perfect by step 2.1, so [L7] applies. [step 2.1, L1, L7]

3.2 **Connected subsets, claim 6.** Let $E \subseteq C$ be connected and nonempty. By [L9] $E$ is order-convex, so if $u, v \in E$ with $u < v$ then $[u,v] \subseteq E \subseteq C$, contradicting step 2.2. Hence no two distinct elements of $E$ exist, and $E$, being nonempty, is a single point. [step 2.2, L9, L12]

4.1 Claims 1 to 6 are steps 1.1, 1.2, 2.1, 3.1, 2.2 and 3.2 respectively, so all six hold. [step 1.1, step 1.2, step 2.1, step 2.2, step 3.1, step 3.2] ∎

## Remarks

- **Two independent proofs of uncountability.** The route above is [[thm-perfect-set-uncountable-r]] applied to a nonempty perfect set. The other is claim 3 of [[thm-cantor-set-ternary-description]]: $C$ is in bijection with $\{0,1\}^{\mathbb{N}}$, which is in bijection with the power set of $\mathbb{N}$, uncountable by [[thm-cantor-powerset]]. The two arguments share nothing, and the second is the one that makes the *size* of $C$ evident: $C$ is in bijection with the power set of $\mathbb{N}$, while having content zero. **It is deliberately not said here that $C$ has as many points as $\mathbb{R}$.** That would require a bijection between $\mathbb{R}$ and the power set of $\mathbb{N}$, and no such bijection is constructed anywhere at this point in the reading order; the two uncountability results available here are separate facts, one proved by the diagonal argument on power sets and one by nested intervals.

- **Claim 2 and claim 4 together are the point of the whole construction.** A set of measure zero may be uncountable, so nullity is not a cardinality condition; and a nowhere dense set need not be null, so it is not a category condition either ([[fs-nowhere-dense-implies-measure-zero]], [[thm-fat-cantor-set-has-positive-measure]]).

- **Why claim 5 is proved through measure and not by inspection.** The intervals making up $C_n$ have length $3^{-n}$, and one can see directly that a long interval cannot fit inside $C$. Doing that rigorously means keeping track of the $2^n$ component intervals of $C_n$ and their gaps; going through [[lem-nondegenerate-interval-is-not-null]] uses the estimate already made in step 1.2 and needs no such bookkeeping.

- **Every point of $C$ is a limit of other points of $C$, and the witnesses are explicit**: change one ternary digit far out, as step 2.1 does. This is also what shows $C$ has no isolated points without any appeal to the structure of its complement.
````

### `thm-countable-union-of-null-is-null`

````markdown
---
id: thm-countable-union-of-null-is-null
kind: theorem
title: "A countable union of measure-zero sets has measure zero, by countable choice"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-measure-zero-and-content-zero, def-countable, def-countable-choice, thm-n-cross-n-countable, thm-geometric-series, def-series, thm-nonnegative-series-bounded-partial-sums, def-finite-sum, lem-finite-sum-laws, def-integer-power, def-injection-surjection-bijection, thm-induction-principle, lem-nat-trichotomy, def-nat-order, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
forward_refs: [cex-null-set-not-of-content-zero, cex-meager-set-of-full-measure]
aliases: []
landmark: true
short: "countable union of null sets is null"
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
    - title: "Null set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Null_set"
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 11"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "MIT 18.125, Homework 2: Measure-zero sets"
      url: "https://math.mit.edu/classes/18.125/HW2.pdf"
pipeline_run: null
---

## Statement

**Assume the Axiom of Countable Choice** ([[def-countable-choice]]). Let
$(A_n)_{n \in \mathbb{N}}$ be a sequence of subsets of $\mathbb{R}$, each of
measure zero ([[def-measure-zero-and-content-zero]]). Then

$$\bigcup_{n \in \mathbb{N}} A_n \quad \text{has measure zero.}$$

By the padding convention of [[def-measure-zero-and-content-zero]] and
[[def-countable]] the same conclusion covers the union of an at most countable
family of null sets, a finite family being extended by copies of $\varnothing$.

**The hypothesis $\mathrm{AC}_\omega$ is spent at exactly one step, step 2.1
below**, where one covering sequence is selected for every $A_n$ at once. Each
$A_n$ has many such covers and nullity provides no rule for singling one out.
Nothing else in the proof selects anything: the diagonal enumeration and the
estimate are formulas.

## Facts & Assumptions

**Given:** A sequence $(A_n)_{n \in \mathbb{N}}$ of null subsets of $\mathbb{R}$ and a real $\varepsilon > 0$. Throughout, $\theta := 2^{-1}$.

[A1] The Axiom of Countable Choice: every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets has a function $f$ on $\mathbb{N}$ with $f(n) \in X_n$ for every $n$ ([[def-countable-choice]]).

[L1] $A$ is null when for every real $\eta > 0$ there are sequences $(a_k)$, $(b_k)$ with $a_k \le b_k$, $A \subseteq \bigcup_k[a_k,b_k]$ and $\sum_{k<n}(b_k - a_k) \le \eta$ for every $n$ ([[def-measure-zero-and-content-zero]]).

[L2] There is a bijection $J : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$, with inverse $J^{-1}$ ([[thm-n-cross-n-countable]], [[def-injection-surjection-bijection]]).

[L3] Powers and the geometric series: $\theta^0 = 1$, $\theta^{m+1} = \theta^m \theta$, $\theta^m > 0$, and $\sum_{m=0}^{\infty}\theta^m = 2$ for $\theta = 2^{-1}$; a series of nonnegative terms has all its partial sums at most its sum ([[def-integer-power]], [[thm-geometric-series]], [[def-series]], [[thm-nonnegative-series-bounded-partial-sums]]).

[L4] Finite sums: additivity, scaling, splitting and monotonicity in the terms; a sum of nonnegative terms is nonnegative and does not decrease when further nonnegative terms are adjoined, so a sum of finitely many nonnegative terms indexed injectively inside a finite rectangle is at most the sum over the whole rectangle ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L5] Every finite list of naturals has an upper bound in $\mathbb{N}$, by induction on its length and the totality of the order of $\mathbb{N}$ ([[thm-induction-principle]], [[lem-nat-trichotomy]], [[def-nat-order]]).

[L6] Ordered-field arithmetic: $0 < 1$, so $2 > 0$ and $t \cdot 2^{-1} > 0$ for $t > 0$; adding a constant and multiplying by a positive preserve an inequality ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 Let the real $\varepsilon > 0$ be given and put $\varepsilon_n := \varepsilon \cdot \theta^{n+1}$ for $n \in \mathbb{N}$, a positive real by [L3] and [L6]. Let $X_n$ be the set of all pairs of sequences $\big((a_k),(b_k)\big)$ with $a_k \le b_k$ for every $k$, $A_n \subseteq \bigcup_k [a_k,b_k]$ and $\sum_{k<i}(b_k - a_k) \le \varepsilon_n$ for every $i \in \mathbb{N}$. Each $A_n$ is null, so each $X_n$ is nonempty by [L1]. [given, L1, L3, L6]

2.1 By [A1] fix $f$ with $f(n) \in X_n$ for every $n$, and write $f(n) = \big((a^n_k)_k, (b^n_k)_k\big)$. This is the one and only application of countable choice in the proof. [step 1.1, A1, choose]

3.1 By [L2] fix a bijection $J : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$ and define sequences $(c_j)$ and $(d_j)$ by $c_{J(m,k)} := a^m_k$ and $d_{J(m,k)} := b^m_k$, which is a total definition because $J$ is a bijection; then $c_j \le d_j$ for every $j$. Every $x \in \bigcup_n A_n$ lies in some $A_m$, hence in some $[a^m_k, b^m_k] = [c_{J(m,k)}, d_{J(m,k)}]$ by step 2.1, so $\bigcup_n A_n \subseteq \bigcup_j [c_j, d_j]$. [step 2.1, L2]

4.1 Fix $i \in \mathbb{N}$. The pairs $J^{-1}(j)$ for $j < i$ are finitely many and pairwise distinct, so by [L5] there is $N \in \mathbb{N}$ with both coordinates of each of them at most $N$; since all the terms $d_j - c_j$ are nonnegative, [L4] gives $\sum_{j<i}(d_j - c_j) \le \sum_{m \le N}\Big(\sum_{k \le N}(b^m_k - a^m_k)\Big)$. For each $m \le N$ the inner sum is $\sum_{k < N+1}(b^m_k - a^m_k) \le \varepsilon_m$ by step 2.1, so the whole is at most $\sum_{m \le N} \varepsilon \cdot \theta^{m+1} = \varepsilon \cdot \theta \sum_{m<N+1}\theta^{m} \le \varepsilon \cdot 2^{-1} \cdot 2 = \varepsilon$, by [L3], [L4] and [L6]. [step 3.1, L3, L4, L5, L6]

5.1 Steps 3.1 and 4.1 exhibit, for the given $\varepsilon > 0$, sequences of closed intervals covering $\bigcup_n A_n$ with every partial total length at most $\varepsilon$; since $\varepsilon > 0$ was arbitrary, [L1] gives that $\bigcup_n A_n$ has measure zero. [step 1.1, step 3.1, step 4.1, L1] ∎

## Remarks

- **Why the slack is geometric.** The $n$-th set is covered to within
  $\varepsilon \cdot 2^{-n-1}$ and the budgets sum to $\varepsilon$, exactly as in
  [[lem-countable-sets-are-null]], of which this theorem is the abstract form:
  applying it to the singletons $\{x_n\}$ of a listing recovers that lemma, at
  the cost of an appeal to $\mathrm{AC}_\omega$ that the direct proof avoids.
  The expenditure is the same one, and made for the same reason, as in
  [[thm-countable-union-of-countable]].

- **No rearrangement theorem is used, and none is available here.** The estimate
  is made on finite partial sums only, and every finite partial sum of the
  doubly-indexed family is compared with a sum over a finite rectangle, which is a
  finite rearrangement. The theory of rearranging infinite series is not in the
  reading order at this point, and the proof is arranged so as not to need it.

- **The bound is on the total length, not on the number of intervals.** The
  combined cover is countable even when each $A_n$ is covered by infinitely many
  intervals, which is exactly what [[thm-n-cross-n-countable]] supplies. Nothing
  analogous holds for content zero: a countable union of sets of content zero
  need not have content zero, since $\mathbb{Q} \cap [0,1]$ is such a union
  ([[cex-null-set-not-of-content-zero]]).

- **This is where the two smallness notions of the page separate cleanly.** A
  countable union of null sets is null, whereas a countable union of nowhere
  dense sets is meager and, by [[thm-baire-category-r]], never all of
  $\mathbb{R}$; and yet $\mathbb{R}$ is the union of a meager set and a null set
  ([[cex-meager-set-of-full-measure]]).
````

