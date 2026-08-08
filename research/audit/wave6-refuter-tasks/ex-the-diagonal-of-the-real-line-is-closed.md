## Target item — `ex-the-diagonal-of-the-real-line-is-closed`

Normalized current SHA-256: `f03326187b99f1b0dfee00adaefeff3b9ec0a4b13595a88a76a607e812f1e34f`

The complete current item follows, including frontmatter:

````markdown
---
id: ex-the-diagonal-of-the-real-line-is-closed
kind: example
title: "The diagonal of $\\mathbb{R}$ is closed in $\\mathbb{R}^2$, computed from the product basis"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-hausdorff-iff-the-diagonal-is-closed, def-the-diagonal-of-a-space,
       def-product-topology, lem-product-topology-on-rn, lem-real-line-is-a-metric-space,
       def-metrizable-space, def-hausdorff-space, def-interval,
       thm-closure-characterisation-top, def-topology-basis-subbasis,
       lem-of-triangle-inequality, def-abs-value]
justified_by: []
aliases: []
landmark: false
short: "the diagonal of the real line is closed"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
    - title: "Stacks Project, Topology, Lemma 5.3 (Tag 08ZD)"
      url: "https://stacks.math.columbia.edu/tag/08ZD"
pipeline_run: null
---

## Example

Give $\mathbb{R}$ its usual topology ([[lem-real-line-is-a-metric-space]],
[[def-metrizable-space]]) and let $\mathbb{R}^2 = \mathbb{R} \times \mathbb{R}$
carry the product topology ([[def-product-topology]],
[[lem-product-topology-on-rn]]). Then the diagonal
([[def-the-diagonal-of-a-space]])

$$\Delta_{\mathbb{R}} \;=\; \{\, (t,t) : t \in \mathbb{R} \,\}$$

is **closed** in $\mathbb{R}^2$, and the box that separates a point
$(a,b) \notin \Delta_{\mathbb{R}}$ from it may be written down:

$$(a - r, a + r) \times (b - r, b + r), \qquad r := \tfrac{1}{2}|a - b| > 0 .$$

Nothing here appeals to the general criterion; the computation is carried out
against the product basis directly. It agrees with
[[thm-hausdorff-iff-the-diagonal-is-closed]], $\mathbb{R}$ being Hausdorff
([[def-hausdorff-space]], [[def-metrizable-space]]), and the point of writing it
out is to show what the criterion's abstract box is in this case: the two open
intervals of half the distance between the coordinates.

## Facts & Assumptions

**Given:** $\mathbb{R}$ with its usual topology, $\mathbb{R}^2$ with the product topology, and $\Delta_{\mathbb{R}} = \{\, z \in \mathbb{R}^2 : z_0 = z_1 \,\}$.

[A1] Every bounded open interval is open in $\mathbb{R}$ ([[lem-real-line-is-a-metric-space]], claims 2 and 3, [[def-metrizable-space]], [[def-interval]]).

[A2] The boxes $U \times W$ with $U$ and $W$ open in $\mathbb{R}$ form a basis for the product topology on $\mathbb{R}^2$, the index set being $2$ ([[def-product-topology]], [[def-topology-basis-subbasis]], [[lem-product-topology-on-rn]]).

[A3] The absolute value satisfies $|u + v| \le |u| + |v|$, whence $|a - b| = |(a - t) + (t - b)| \le |a - t| + |t - b|$ for all reals $a, b, t$ ([[lem-of-triangle-inequality]], [[def-abs-value]]).

[L1] A point lies in $\overline{A}$ exactly when every basic open set containing it meets $A$, and $A$ is closed exactly when $A = \overline{A}$ ([[thm-closure-characterisation-top]], claims 1(d) and 2).

## Verification

**Proof technique:** direct.

1.1 Let $z = (a,b) \in \mathbb{R}^2$ with $z \notin \Delta_{\mathbb{R}}$, so $a \ne b$ and $r := |a-b|/2 > 0$. [given]

2.1 The set $B := (a - r, a + r) \times (b - r, b + r)$ is a basic open set of $\mathbb{R}^2$ containing $z$. [step 1.1, A1, A2]

3.1 $B \cap \Delta_{\mathbb{R}} = \varnothing$: a point of the intersection is of the form $(t,t)$ with $|t - a| < r$ and $|t - b| < r$, whence $|a - b| \le |a - t| + |t - b| < 2r = |a-b|$, which is impossible. [step 1.1, step 2.1, A3]

4.1 By [L1] no $z \notin \Delta_{\mathbb{R}}$ lies in $\overline{\Delta_{\mathbb{R}}}$, so $\overline{\Delta_{\mathbb{R}}} = \Delta_{\mathbb{R}}$ and $\Delta_{\mathbb{R}}$ is closed in $\mathbb{R}^2$. [step 1.1, step 2.1, step 3.1, L1] ∎

## Remarks

- **The radius $|a-b|/2$ is exactly the Hausdorff separation of $a$ and $b$ in $\mathbb{R}$, and that is not a coincidence.** The proof of [[thm-hausdorff-iff-the-diagonal-is-closed]] builds its box out of a pair of disjoint open sets separating the two coordinates; here that pair is $(a-r, a+r)$ and $(b-r, b+r)$, the two balls of radius half the distance which the usual metric supplies.

- **The product topology on $\mathbb{R}^2$ is the topology of the usual metrics on it**, so the computation above may be read equally as a statement about boxes or about balls ([[lem-product-topology-on-rn]]); the box form is used because it is what the criterion tests.
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "A1",
      "source": "lem-real-line-is-a-metric-space",
      "source_section": "Statement",
      "quote": "1. $d_{\\mathbb{R}}$ is a metric on $\\mathbb{R}$ ([[def-metric-space]]); it is called the **usual metric** of $\\mathbb{R}$. 2. For $x \\in \\mathbb{R}$ and $r > 0$ the open ball is the bounded open interval ([[def-interval]], [[def-metric-ball]]) $$B(x,r) = (x-r,\\ x+r),$$ and the closed ball is $\\bar B(x,r) = [x-r,\\ x+r]$. 3. Consequently $U \\subseteq \\mathbb{R}$ is open in the metric topology of $d_{\\mathbb{R}}$ ([[def-metric-topology]]) exactly when for every $x \\in U$ there is $r > 0$ with $(x-r, x+r) \\subseteq U$. This topology is called the **usual topology** of $\\mathbb{R}$. 4. $(\\mathbb{R}, d_{\\mathbb{R}})$ is not a bounded metric space ([[def-metric-bounded-diameter]]): no ball contains $\\mathbb{R}$, so $\\operatorname{diam}(\\mathbb{R})$ is not defined.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "A1",
      "source": "def-metrizable-space",
      "source_section": "Definition",
      "quote": "**The usual topology of $\\mathbb{R}$.** The absolute value makes $\\mathbb{R}$ a metric space under $d_{\\mathbb{R}}(x,y) = |x-y|$, its open balls are the bounded open intervals, and the resulting metric topology is what claim 3 of [[lem-real-line-is-a-metric-space]] names the **usual topology** of $\\mathbb{R}$. That is the topology meant by the phrase throughout these two pages, and $\\mathbb{R}$ carrying it is metrizable by definition. Every statement about it on these two pages is proved from the metric $d_{\\mathbb{R}}$ and the bridge above, and no example re-derives any of it.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "A1",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "An interval is **open** when both of its written endpoints are excluded, that is for the forms $(a,b)$, $(a,\\infty)$, $(-\\infty,b)$ and $(-\\infty,\\infty)$; it is **closed** when both written endpoints are included, that is for $[a,b]$, $[a,\\infty)$, $(-\\infty,b]$ and $(-\\infty,\\infty)$. The forms $[a,b)$ and $(a,b]$ are **half-open**.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "A2",
      "source": "def-product-topology",
      "source_section": "Definition",
      "quote": "**The product topology.** The **product topology** $\\mathcal{T}^{\\Pi}$ on $\\prod_i X_i$ is the initial topology of the family of projections $(\\pi_i)_{i \\in I}$ ([[def-initial-and-final-topology]]): the topology generated by the subbasis",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "A2",
      "source": "def-topology-basis-subbasis",
      "source_section": "Definition",
      "quote": "A family $\\mathcal{B} \\subseteq \\mathcal{T}$ is a **basis for $\\mathcal{T}$** if every open set is a union of members of $\\mathcal{B}$: for every $U \\in \\mathcal{T}$ there is $\\mathcal{B}_U \\subseteq \\mathcal{B}$ with $U = \\bigcup \\mathcal{B}_U$. Equivalently, and this is the form used in proofs,",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "A2",
      "source": "lem-product-topology-on-rn",
      "source_section": "Statement",
      "quote": "be the product of $n$ copies of $\\mathbb{R}$ ([[def-product-topology]]). As a **set** this is literally the $\\mathbb{R}^n$ of [[lem-metrics-on-rn]], both being the set of functions $n \\to \\mathbb{R}$; and $d_1$, $d_2$, $d_\\infty$ are the three metrics defined there. Then:",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "A3",
      "source": "lem-of-triangle-inequality",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$. Then $$|x + y| \\le |x| + |y|.$$",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "A3",
      "source": "def-abs-value",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]). The **absolute value** of $x \\in F$ is $$|x| \\;:=\\; \\begin{cases} x & \\text{if } x \\ge 0, \\\\ -x & \\text{if } x < 0. \\end{cases}$$",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-closure-characterisation-top",
      "source_section": "Statement",
      "quote": "1. The following four conditions are equivalent. - (a) $x \\in \\overline{A}$; - (b) $N \\cap A \\ne \\varnothing$ for every neighbourhood $N$ of $x$ ([[def-neighbourhood-top]]); - (c) $U \\cap A \\ne \\varnothing$ for every open $U$ with $x \\in U$; - (d) $B \\cap A \\ne \\varnothing$ for every $B \\in \\mathcal{B}$ with $x \\in B$. 2. $\\overline{A}$ is closed, contains $A$, and is contained in every closed $F \\subseteq X$ with $A \\subseteq F$; so it is the smallest closed superset of $A$, and $A$ is closed if and only if $A = \\overline{A}$. 3. $\\overline{A} = A \\cup A'$.",
      "uses": [
        "4.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Let $z = (a,b) \\in \\mathbb{R}^2$ with $z \\notin \\Delta_{\\mathbb{R}}$, so $a \\ne b$ and $r := |a-b|/2 > 0$. [given]",
      "step": "1.1",
      "inputs": [
        "statement hypotheses and the definitions or objects introduced in this step"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "The set $B := (a - r, a + r) \\times (b - r, b + r)$ is a basic open set of $\\mathbb{R}^2$ containing $z$. [step 1.1, A1, A2]",
      "step": "2.1",
      "inputs": [
        "1.1",
        "A1",
        "A2"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "$B \\cap \\Delta_{\\mathbb{R}} = \\varnothing$: a point of the intersection is of the form $(t,t)$ with $|t - a| < r$ and $|t - b| < r$, whence $|a - b| \\le |a - t| + |t - b| < 2r = |a-b|$, which is impossible. [step 1.1, step 2.1, A3]",
      "step": "3.1",
      "inputs": [
        "1.1",
        "2.1",
        "A3"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "By [L1] no $z \\notin \\Delta_{\\mathbb{R}}$ lies in $\\overline{\\Delta_{\\mathbb{R}}}$, so $\\overline{\\Delta_{\\mathbb{R}}} = \\Delta_{\\mathbb{R}}$ and $\\Delta_{\\mathbb{R}}$ is closed in $\\mathbb{R}^2$. [step 1.1, step 2.1, step 3.1, L1] ∎",
      "step": "4.1",
      "inputs": [
        "L1",
        "1.1",
        "2.1",
        "3.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "the statement fixes or assumes nonempty spaces or named points, so an empty carrier cannot satisfy its hypotheses"
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "no independently varying cardinal, dimension, norm, or scalar parameter has a separate zero case"
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "no independently varying cardinal, dimension, or index has a separate one case"
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "the statement has no separate coincident-map, constant-map, singleton, or collapsed-parameter branch"
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "no interval endpoint or one-sided boundary enters the statement or proof"
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "the proof uses only formula-defined maps, fixed quantified data, and cited implications; it selects from no asserted nonempty family"
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "the statement is not a biconditional"
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "the statement is not a biconditional"
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "ex-the-diagonal-of-the-real-line-is-closed",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
    "batch": "wave6-topology",
    "target": "thm-hausdorff-iff-the-diagonal-is-closed",
    "declared_target": "thm-hausdorff-iff-the-diagonal-is-closed",
    "target_statement_provenance": null,
    "targetPage": "hausdorff-via-the-diagonal",
    "targetBatch": "wave6-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-the-diagonal-of-the-real-line-is-closed",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
    "batch": "wave6-topology",
    "target": "def-the-diagonal-of-a-space",
    "declared_target": "def-the-diagonal-of-a-space",
    "target_statement_provenance": null,
    "targetPage": "hausdorff-via-the-diagonal",
    "targetBatch": "wave6-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-the-diagonal-of-the-real-line-is-closed",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
    "batch": "wave6-topology",
    "target": "def-product-topology",
    "declared_target": "def-product-topology",
    "target_statement_provenance": "ai-altered",
    "targetPage": "subspaces-products-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-the-diagonal-of-the-real-line-is-closed",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
    "batch": "wave6-topology",
    "target": "lem-product-topology-on-rn",
    "declared_target": "lem-product-topology-on-rn",
    "target_statement_provenance": "ai-altered",
    "targetPage": "subspaces-products-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-the-diagonal-of-the-real-line-is-closed",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
    "batch": "wave6-topology",
    "target": "lem-real-line-is-a-metric-space",
    "declared_target": "lem-real-line-is-a-metric-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-the-diagonal-of-the-real-line-is-closed",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
    "batch": "wave6-topology",
    "target": "def-metrizable-space",
    "declared_target": "def-metrizable-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-the-diagonal-of-the-real-line-is-closed",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
    "batch": "wave6-topology",
    "target": "def-hausdorff-space",
    "declared_target": "def-hausdorff-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "subspaces-products-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-the-diagonal-of-the-real-line-is-closed",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
    "batch": "wave6-topology",
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
    "source": "ex-the-diagonal-of-the-real-line-is-closed",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
    "batch": "wave6-topology",
    "target": "thm-closure-characterisation-top",
    "declared_target": "thm-closure-characterisation-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-the-diagonal-of-the-real-line-is-closed",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
    "batch": "wave6-topology",
    "target": "def-topology-basis-subbasis",
    "declared_target": "def-topology-basis-subbasis",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-the-diagonal-of-the-real-line-is-closed",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
    "batch": "wave6-topology",
    "target": "lem-of-triangle-inequality",
    "declared_target": "lem-of-triangle-inequality",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-the-diagonal-of-the-real-line-is-closed",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
    "batch": "wave6-topology",
    "target": "def-abs-value",
    "declared_target": "def-abs-value",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (12)

### `def-abs-value`

````markdown
---
id: def-abs-value
kind: definition
title: "Absolute value in an ordered field"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-ordered-field]
aliases: []
landmark: false
short: "|x|"
verification:
  precheck: n/a
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Dartmouth College analysis notes: Absolute value"
      url: "https://math.dartmouth.edu/~m63w21/lecture-m63-02.pdf"
pipeline_run: null
---

## Definition

Let $F$ be an ordered field ([[def-ordered-field]]). The **absolute value** of
$x \in F$ is

$$|x| \;:=\; \begin{cases} x & \text{if } x \ge 0, \\ -x & \text{if } x < 0. \end{cases}$$

## Remarks

- The distance between $x$ and $y$ is $|x - y|$.
- The basic algebraic properties ($|x| \ge 0$, $|x| = 0 \iff x = 0$,
  $|xy| = |x|\,|y|$, and the characterisation $|x| < c \iff -c < x < c$) are
  established in [[lem-of-abs-value]]; the triangle inequality is
  [[lem-of-triangle-inequality]].
````

### `def-hausdorff-space`

````markdown
---
id: def-hausdorff-space
kind: definition
title: "Hausdorff space: distinct points have disjoint open neighbourhoods; every metrizable space is Hausdorff and the indiscrete topology on two points is not"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-neighbourhood-top, def-standard-topologies,
       def-metrizable-space, thm-metric-hausdorff-separation,
       def-homeomorphism-and-open-maps]
justified_by: []
aliases: [def-hausdorff, def-t2-space]
landmark: true
short: "Hausdorff space"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "J. Munkres, Topology, 2nd ed., §17"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

A topological space $(X, \mathcal{T})$ ([[def-topological-space]]) is
**Hausdorff** when any two distinct points are separated by disjoint open sets:
for all $x, y \in X$ with $x \ne y$ there are $U, V \in \mathcal{T}$ with

$$x \in U, \qquad y \in V, \qquad U \cap V = \varnothing .$$

Since an open set containing a point is an open neighbourhood of it
([[def-neighbourhood-top]]), the condition reads: distinct points have disjoint
open neighbourhoods. Nothing is asserted about points that are equal, and the
condition is vacuous for a space with at most one point, so every such space is
Hausdorff.

**Every metrizable space is Hausdorff.** This is not proved here, because it is
already discharged: [[def-metrizable-space]] records it among the two things
every metrizable space has, deriving it from
[[thm-metric-hausdorff-separation]], which separates $p \ne q$ in a metric space
by the disjoint open balls $B(p,r)$ and $B(q,r)$ with $r = d(p,q)/2 > 0$. In
particular $\mathbb{R}$ with its usual topology, every $\mathbb{R}^n$, and every
subspace of a metrizable space are Hausdorff.

**Not every space is Hausdorff.** The indiscrete topology
$\mathcal{T}_{\mathrm{ind}} = \{\varnothing, X\}$ on a set $X = \{a,b\}$ with
$a \ne b$ ([[def-standard-topologies]]) is not: the only open set containing $a$
is $X$, the only one containing $b$ is $X$, and $X \cap X = X \ne \varnothing$.
This is the same two-point space that [[def-metrizable-space]] uses to exhibit a
topology induced by no metric, and the reason is the same one: failure of the
Hausdorff condition is an obstruction to metrizability.

**Being Hausdorff is a topological property** ([[def-homeomorphism-and-open-maps]]).
If $h : X \to Z$ is a homeomorphism and $X$ is Hausdorff, then for $z \ne z'$ in
$Z$ the points $h^{-1}(z)$ and $h^{-1}(z')$ are distinct, so they have disjoint
open $U, V$; the images $h[U]$ and $h[V]$ are open, disjoint, and contain $z$ and
$z'$ respectively, a homeomorphism carrying the open sets of one space
bijectively onto those of the other. So no space homeomorphic to a Hausdorff
space fails the condition.

**Scope of this item.** Only the definition, the metrizable case and the
two-point failure are recorded here, because that is all this page uses. The
Hausdorff condition is one of a graded family of separation axioms; that family,
its ordering, and the questions of which of its members are hereditary or
preserved by products, are not available at this point in the reading order and
nothing here anticipates them. What this page does use is a single negative
result: a quotient of a Hausdorff space need not be Hausdorff, which is recorded
below as a false statement and witnessed on the companion page.

## Remarks

- **Hausdorff spaces have closed singletons.** Fix $x \in X$ and take the union
  of all open subsets of $X$ that avoid $x$. Every $y \ne x$ belongs to one of
  them, by Hausdorff separation of $x$ and $y$, while $x$ belongs to none. The
  union is therefore exactly $X \setminus \{x\}$, so $\{x\}$ is closed.
  Thus the Hausdorff property implies the singleton-closed ($T_1$) property.
  The converse fails: closed singletons need not give disjoint neighbourhoods
  of distinct points.

- **What the Hausdorff condition buys, in the one place this page needs it.**
  Separation of distinct points by disjoint open sets is exactly what a quotient
  map can destroy: identifying points of a Hausdorff space can leave two classes
  every pair of whose open neighbourhoods meet, and the companion page exhibits
  such a quotient of a metrizable space. Nothing weaker than an explicit witness
  settles that, since the condition is a statement about all pairs of open sets.

- **The name.** Hausdorff's own 1914 axiom system for a topological space
  included this condition, so "topological space" once meant what is now called a
  Hausdorff space; this library follows the modern convention in which
  [[def-topological-space]] assumes no separation at all and every separation
  hypothesis is stated where it is used.
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

### `def-metrizable-space`

````markdown
---
id: def-metrizable-space
kind: definition
title: "Metrizable space: a topological space whose topology is induced by some metric; metrizability is topological, the metric is not"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-metric-topology, def-metric-space, thm-metric-open-set-algebra, def-equivalent-metrics,
       def-subspace-topology-top, def-isometry-and-metric-embedding,
       def-metric-ball, def-neighbourhood-top, def-interior-closure-boundary-top, def-continuous-map-top,
       def-sequence-convergence-top, def-homeomorphism-and-open-maps, def-first-countable-top,
       lem-metric-ball-neighbourhood-base, thm-metric-hausdorff-separation, def-metric-convergence,
       def-metric-continuity, thm-metric-closure-characterisation, def-metric-interior-closure-boundary,
       lem-metric-limits-unique, lem-real-line-is-a-metric-space]
justified_by: []
aliases: [def-metrizable, def-usual-topology-of-r]
landmark: true
short: "metrizable space; the usual topology of $\\mathbb{R}$"
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-03
    scope: published-audit-targeted
    context_sha256: 481fc46dfb5166d1c7254e753d62020d03b9c022b265f7afd686ea1f9dd7ff0a
    item_sha256: 36f4a57f6ea43198decefdca5ecb7883fa754f6a0fa1ef34d13dc55d3704c788
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Metrizable space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metrizable_space"
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "J. Munkres, Topology, 2nd ed., §20"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

A topological space $(X, \mathcal{T})$ ([[def-topological-space]]) is
**metrizable** if there is a metric $d$ on $X$ ([[def-metric-space]]) whose
metric topology is $\mathcal{T}$, that is $\mathcal{T} = \mathcal{T}_d$
([[def-metric-topology]]). Such a $d$ is said to **induce** or **metrise**
$\mathcal{T}$.

**The definition presupposes that $\mathcal{T}_d$ is a topology in the sense of
[[def-topological-space]], and it is.** By [[def-metric-topology]] both
$\varnothing$ and $X$ are open in $(X,d)$, which is (T1), and by
[[thm-metric-open-set-algebra]] the family $\mathcal{T}_d$ is closed under
arbitrary unions, which is (T2), and under intersections of $n \ge 1$ members,
which contains (T3). So every metric space is a topological space, and the
metric-space development of this library is a special case of the present one.

**The standard local notions in the two developments agree after translating
their neighbourhood conventions.** Let $d$ be a metric on $X$ and give $X$ the
topology $\mathcal{T}_d$.

- *Neighbourhoods and balls.* [[def-metric-topology]] uses "neighbourhood" for
  an open set containing $x$, whereas [[def-neighbourhood-top]] also allows a
  non-open superset of such a set. Thus the two collections are not literally
  equal, but the open metric neighbourhoods are cofinal in the broader
  neighbourhood filter. The balls $B(x,r)$, $r > 0$ ([[def-metric-ball]]), are
  open ([[thm-metric-open-set-algebra]]) and form a neighbourhood base at $x$:
  any neighbourhood $N$ contains an open $U \ni x$, hence a ball around $x$ by
  [[def-metric-topology]]. The balls of radius $1/n$ alone already suffice
  ([[lem-metric-ball-neighbourhood-base]]).
- *Interior, closure, boundary.* [[def-metric-interior-closure-boundary]] defines
  them by the same conditions with balls in place of neighbourhoods, and the
  previous bullet makes the two conditions equivalent; the metric closure is the
  smallest closed superset ([[thm-metric-closure-characterisation]]), which is the
  definition used here ([[def-interior-closure-boundary-top]]). So the two
  closures, the two interiors and the two boundaries are the same three
  operations.
- *Convergence.* $x_k \to p$ in the sense of [[def-sequence-convergence-top]] is
  "eventually in every neighbourhood of $p$", and by the first bullet this is
  "eventually in every ball around $p$", which is [[def-metric-convergence]].
- *Continuity.* $\varepsilon$-$\delta$ continuity at $a$
  ([[def-metric-continuity]]) says that every ball around $f(a)$ has a ball
  around $a$ mapped into it, which by the first bullet is continuity at $a$ in
  the sense of [[def-continuous-map-top]].

- *Subspaces.* For $A \subseteq X$ the subspace topology
  $\{\, U \cap A : U \in \mathcal{T}_d \,\}$ of [[def-subspace-topology-top]] is
  exactly the metric topology of the subspace metric $d_A$
  ([[def-isometry-and-metric-embedding]]), so the two uses of the phrase
  *subspace topology* in this library name one thing. Indeed
  $B_A(a,r) = B_X(a,r) \cap A$: a trace $U \cap A$ is $d_A$-open, since each of
  its points $a$ has $B_X(a,r) \subseteq U$ and hence $B_A(a,r) \subseteq U \cap A$;
  and a $d_A$-open $W$ is the trace of
  $U := \bigcup \{\, B_X(a,r) : a \in W,\ r > 0,\ B_X(a,r) \cap A \subseteq W \,\}$,
  which is $d_X$-open, satisfies $U \cap A = W$, and involves no choice principle,
  the union being taken over a set of pairs rather than over a selection.

Consequently the metric-space notions of interior, closure, boundary, density,
convergence, continuity and subspace agree with the topological notions here,
and statements about them transfer once a metric is named. For neighbourhoods
the transfer uses the explicit convention change above: a metric-page
neighbourhood is an open topological neighbourhood, while every topological
neighbourhood contains one.

**Metrizability is a topological property; the metric is not part of it.** If
$h : X \to Y$ is a homeomorphism ([[def-homeomorphism-and-open-maps]]) and $d$
metrises $X$, then $d'(y_1,y_2) := d(h^{-1}(y_1), h^{-1}(y_2))$ is a metric on
$Y$ — the three axioms transfer along the bijection $h^{-1}$ — and
$h[B_d(x,r)] = B_{d'}(h(x), r)$, so $h$ carries a basis of $\mathcal{T}_d$ to a
basis of $\mathcal{T}_{d'}$ and $\mathcal{T}_{d'} = h[\mathcal{T}_d] = \mathcal{T}_Y$.
Hence $Y$ is metrizable. The metric itself, however, is **not** determined by the
topology: two metrics on one set may induce the same topology without agreeing,
which is exactly topological equivalence ([[def-equivalent-metrics]]), and
properties of a metric that are not properties of its topology, boundedness among
them, are therefore not properties of a metrizable space.

**Two things every metrizable space has.** It is **Hausdorff**: distinct points
have disjoint open neighbourhoods, by [[thm-metric-hausdorff-separation]] applied
to any metric inducing the topology. And it is **first countable**
([[def-first-countable-top]]), by [[lem-metric-ball-neighbourhood-base]]. Either
failure is therefore an obstruction to metrizability, and this page uses the
first of them to exhibit a topology induced by no metric.

**Sequential limits in a metrizable space are unique, so the notation
$\lim_k x_k$ is available there.** In a metric space a sequence has at most one
limit ([[lem-metric-limits-unique]]), and by the agreement of convergence above
that uniqueness is a statement about the topology alone; so within a metrizable
space, and only there, this page writes $\lim_k x_k$ in the ordinary way. In a
general space the symbol is unavailable ([[def-sequence-convergence-top]]).

**The usual topology of $\mathbb{R}$.** The absolute value makes $\mathbb{R}$ a
metric space under $d_{\mathbb{R}}(x,y) = |x-y|$, its open balls are the bounded
open intervals, and the resulting metric topology is what claim 3 of
[[lem-real-line-is-a-metric-space]] names the **usual topology** of $\mathbb{R}$.
That is the topology meant by the phrase throughout these two pages, and
$\mathbb{R}$ carrying it is metrizable by definition. Every statement about it on
these two pages is proved from the metric $d_{\mathbb{R}}$ and the bridge above,
and no example re-derives any of it.

## Remarks

- **The usual topology of $\mathbb{R}$ is not a second notion alongside the
  order-native development built earlier in this library.**
  [[rem-r-native-topology-scope]] records that the two collections of open subsets
  of $\mathbb{R}$ — the one defined from balls and the one defined from
  order-neighbourhoods — are literally the same collection, and hence that
  interior, closure, boundary, limit point, density and sequential convergence
  agree on the two sides. That identification is quoted here for orientation only;
  the order-topology example on the companion page is where the order-native
  description is used.

- **A metrizable space comes with many metrics and no canonical one.** The
  statement "$X$ is metrizable" asserts existence, and every argument that uses a
  metric must name one first. Where two metrics are compared, the vocabulary is
  that of [[def-equivalent-metrics]]: Lipschitz, uniform and topological
  equivalence, of which only the last is visible to the topology.

- **Metrization theorems are not proved here.** Necessary conditions are easy —
  Hausdorff, first countable — and sufficient ones require separation and
  countability axioms that this page does not develop. Nothing below asserts that
  a space *is* metrizable except by exhibiting a metric.

- **Not every topology is metrizable**, and the cheapest witness is the
  indiscrete topology on a two-point set, which is not Hausdorff. That is
  recorded on this page as a false statement and witnessed on the companion page.
````

### `def-product-topology`

````markdown
---
id: def-product-topology
kind: definition
title: "The product set $\\prod_{i \\in I} X_i$ of functions choosing a point in each factor, the projections, the box topology, and the product topology as the initial topology of the projections; the empty product is a one-point space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-initial-and-final-topology, def-topological-space, def-topology-basis-subbasis,
       thm-basis-criterion, def-choice-function, def-axiom-of-choice, lem-finite-choice,
       def-standard-topologies]
justified_by: []
aliases: [def-product-top, def-box-topology, def-projection-top]
landmark: true
short: "product topology, box topology, projections"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
    - title: "Box topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Box_topology"
    - title: "J. Munkres, Topology, 2nd ed., §19"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

**The product set.** Let $I$ be a set and let $X_i$ be a set for each $i \in I$.
The **product** is

$$\prod_{i \in I} X_i \;:=\; \Big\{\, x : x \text{ is a function with domain } I \text{ and } x(i) \in X_i \text{ for every } i \in I \,\Big\},$$

and we write $x_i := x(i)$, the $i$-th **coordinate** of $x$. Two elements of the
product are equal exactly when they agree at every index, functions being equal
when they have the same domain and the same values. For $j \in I$ the $j$-th
**projection** is

$$\pi_j : \prod_{i \in I} X_i \to X_j, \qquad \pi_j(x) := x_j .$$

**Notation for a finite product.** For $I = n$ a natural number, which is the set
$\{0, 1, \dots, n-1\}$ of its predecessors, an element of $\prod_{k<n} X_k$ is a
function on $n$ and we write it $(x_0, \dots, x_{n-1})$. In particular $I = 2$
gives the **binary product**, written $X \times Y$ for $\prod_{i<2} X_i$ with
$X_0 = X$ and $X_1 = Y$, whose elements are written $(u,v)$ for the function
$0 \mapsto u$, $1 \mapsto v$. This is the only meaning the symbol $X \times Y$
carries on this page.

**Two facts about when the product is nonempty, stated because they are used and
because they cost something.** If some $X_{i_0}$ is empty then the product is
empty, since no function can take a value in $X_{i_0}$. Conversely, suppose every
$X_i$ is nonempty.

- For $I = n$ a natural number, the product is nonempty, and this is a theorem of
  ZF: [[lem-finite-choice]] applied to the function $i \mapsto X_i$ on $n$
  supplies a choice function $g$ for the family of values, and
  $x(i) := g(X_i)$ defines a member of $\prod_{k<n} X_k$.
- For an arbitrary $I$ the assertion "$\prod_{i \in I} X_i \ne \varnothing$
  whenever every $X_i$ is nonempty" **is** the Axiom of Choice: it is the
  formulation recorded in [[def-axiom-of-choice]], and the choice function of
  [[def-choice-function]] is exactly a point of the product of a family by
  itself. Every use of it below is flagged at the step that spends it.

**The box topology.** Now let each $X_i$ carry a topology $\mathcal{T}_i$
([[def-topological-space]]). Put

$$\mathcal{R} \;:=\; \Big\{\, \prod_{i \in I} U_i \;:\; U_i \in \mathcal{T}_i \text{ for every } i \in I \,\Big\},$$

the family of **boxes**. $\mathcal{R}$ is a basis for a topology
([[thm-basis-criterion]]): it contains $\prod_i X_i$, so it covers the product,
and it is closed under binary intersections, since

$$\Big(\prod_i U_i\Big) \cap \Big(\prod_i V_i\Big) = \prod_i (U_i \cap V_i)$$

and each $U_i \cap V_i$ is open by (T3). The topology it generates is the **box
topology** $\mathcal{T}^{\square}$, and $\mathcal{R}$ is a basis for it
([[def-topology-basis-subbasis]]).

**The product topology.** The **product topology** $\mathcal{T}^{\Pi}$ on
$\prod_i X_i$ is the initial topology of the family of projections
$(\pi_i)_{i \in I}$ ([[def-initial-and-final-topology]]): the topology generated
by the subbasis

$$\mathcal{G} \;:=\; \{\, \pi_i^{-1}[U] : i \in I,\ U \in \mathcal{T}_i \,\}, \qquad \pi_i^{-1}[U] = \prod_{j \in I} W_j \ \text{ with } W_i = U \text{ and } W_j = X_j \text{ for } j \ne i .$$

By [[thm-basis-criterion]] the finite intersections of members of $\mathcal{G}$
form a basis for $\mathcal{T}^{\Pi}$, and those finite intersections are exactly
the boxes with all but finitely many factors unrestricted:

$$\mathcal{R}^{\Pi} \;=\; \Big\{\, \prod_{i \in I} U_i \;:\; U_i \in \mathcal{T}_i \text{ for every } i, \text{ and } U_i = X_i \text{ for all but finitely many } i \,\Big\}.$$

Indeed the intersection of $\pi_{i_1}^{-1}[U_1], \dots, \pi_{i_n}^{-1}[U_n]$ is
the box whose factor at $i$ is the intersection of those $U_m$ with $i_m = i$ and
is $X_i$ when no $i_m$ equals $i$; and the intersection of no members is the
whole product, the box with every factor $X_i$. Conversely a box with
$U_i = X_i$ off a finite set is such an intersection. Members of
$\mathcal{R}^{\Pi}$ are called **basic product-open** sets, and members of
$\mathcal{R}$ **boxes**. So $\mathcal{R}^{\Pi} \subseteq \mathcal{R}$, with
equality when $I$ is a natural number.

**The empty product.** For $I = \varnothing$ there is exactly one function with
domain $\varnothing$, the empty function, so $\prod_{i \in \varnothing} X_i$ is a
one-point set. A one-point set carries exactly one topology, namely
$\{\varnothing, \{\varnothing\}\}$, since a topology must contain the empty set
and the whole set and there is nothing else to contain
([[def-topological-space]]); so the box topology and the product topology agree
there, and both equal the discrete topology and the indiscrete topology
([[def-standard-topologies]]), which coincide on a one-point set. There are no
projections to speak of, and the initial topology of the empty family is indeed
the indiscrete one ([[def-initial-and-final-topology]]).

**Convention.** Unless the box topology is named explicitly, $\prod_i X_i$ always
carries the product topology in this library. That is not a matter of taste: the
product topology is the one with the characteristic property of the next item,
and the box topology has no such property.

## Remarks

- **Where the two topologies actually differ.** The box topology is finer than
  the product topology by construction, since $\mathcal{R}^{\Pi} \subseteq
  \mathcal{R}$. They agree whenever $I$ is finite; and, assuming the Axiom of Choice, for a
  family of **nonempty** spaces they differ for infinite $I$ as soon as infinitely
  many factors have a nonempty proper open subset. Nonemptiness is not decoration: if one factor is
  empty then the product is empty and carries exactly one topology, so the two
  agree however the other factors are chosen. Both statements are proved two items
  below, with that hypothesis, and the failure is recorded on this page as a false
  statement.

- **The product set is a set of functions, and that is not a technicality.** The
  factors are indexed by an arbitrary set, so there is no "list" to write down;
  writing $x = (x_i)_{i \in I}$ is notation for the function $x$. The finite case
  recovers the familiar tuple, and the identification of $\prod_{k<n}\mathbb{R}$
  with the $\mathbb{R}^n$ of [[lem-metrics-on-rn]] is literal, that item defining
  $\mathbb{R}^n$ as the set of functions $n \to \mathbb{R}$.

- **The projections carry no hypothesis.** They are defined for every product,
  including the empty one and products with an empty factor; what does need a
  hypothesis is their *surjectivity*, which is the point at which choice enters
  and which is stated separately in the next item.
````

### `def-the-diagonal-of-a-space`

````markdown
---
id: def-the-diagonal-of-a-space
kind: definition
title: "The diagonal $\\Delta_X \\subseteq X \\times X$, the diagonal map $\\delta_X$, and the pairing $\\langle f, g \\rangle$ of two maps"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-product-topology, thm-product-universal-property,
       def-continuous-map-top, def-subspace-topology-top, def-homeomorphism-and-open-maps]
justified_by: []
aliases: [def-diagonal-top, def-pairing-of-two-maps]
landmark: true
short: "the diagonal, the diagonal map, the pairing of two maps"
verification:
  precheck: n/a
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "Diagonal embedding (PlanetMath)"
      url: "https://planetmath.org/diagonalembedding"
    - title: "Stacks Project, Topology, Lemma 5.3 (Tag 08ZD)"
      url: "https://stacks.math.columbia.edu/tag/08ZD"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ and $(Y, \mathcal{T}_Y)$ be topological spaces
([[def-topological-space]]). Throughout, $X \times Y$ is the binary product
$\prod_{i<2} X_i$ with $X_0 = X$ and $X_1 = Y$ ([[def-product-topology]]),
carrying the product topology; a point of it is a **function** $z$ on the von
Neumann natural $2 = \{0,1\}$, written $(z_0, z_1)$, and $\pi_0, \pi_1$ are the
two projections.

**The basis used throughout.** For the index set $2$ the product basis and the
box basis coincide, since a box $\prod_{i<2} U_i$ has all but finitely many
factors unrestricted for the trivial reason that it has only two
([[def-product-topology]]). So

$$\{\, U \times V : U \in \mathcal{T},\ V \in \mathcal{T}_Y \,\}$$

is a basis for the product topology on $X \times Y$, and every statement below
that tests a basic open set tests a box of two open sets.

**The diagonal.** The **diagonal** of $X$ is

$$\Delta_X \;:=\; \{\, z \in X \times X : z_0 = z_1 \,\} \;=\; \{\, (x,x) : x \in X \,\} ,$$

the second description being the first read through the definition of a point of
the product as a function on $2$. It is a subset of $X \times X$ and is given the
subspace topology ([[def-subspace-topology-top]]) whenever it is regarded as a
space.

**The diagonal map.** The **diagonal map** of $X$ is

$$\delta_X : X \to X \times X, \qquad \delta_X(x) := (x,x) ,$$

that is, the function sending $x$ to the constant function $2 \to X$ with value
$x$. Its two components are $\pi_0 \circ \delta_X = \mathrm{id}_X$ and
$\pi_1 \circ \delta_X = \mathrm{id}_X$, and by claim 2 of
[[thm-product-universal-property]] it is the *unique* function $X \to X \times X$
with those two components. The same claim makes it **continuous**
([[def-continuous-map-top]]), the identity being continuous. Its image is
$\Delta_X$, and it is injective, since $\delta_X(x) = \delta_X(x')$ forces
$x = x'$ by reading the coordinate at $0$. Whether $\delta_X$ is an **embedding**
onto $\Delta_X$ ([[def-homeomorphism-and-open-maps]]) is not asserted here; it is
the content of the next item.

**The pairing of two maps.** For functions $f : Z \to X$ and $g : Z \to Y$ on a
common domain, the **pairing** is

$$\langle f, g \rangle : Z \to X \times Y, \qquad \langle f, g \rangle(z) := (f(z), g(z)) .$$

By claim 2 of [[thm-product-universal-property]] it is the unique function
$Z \to X \times Y$ with $\pi_0 \circ \langle f, g \rangle = f$ and
$\pi_1 \circ \langle f, g \rangle = g$; no hypothesis on $f$ and $g$ is needed
for the pairing to be defined, and continuity of the pairing is exactly
continuity of both components, which is again that claim. In this notation

$$\delta_X = \langle \mathrm{id}_X, \mathrm{id}_X \rangle ,$$

so the diagonal map is a special case of the pairing and needs no separate
treatment.

**The preimage identity that every later proof uses.** For $f, g : Z \to Y$,

$$\langle f, g \rangle^{-1}[\Delta_Y] \;=\; \{\, z \in Z : f(z) = g(z) \,\} ,$$

directly from the definitions above: $\langle f, g \rangle(z) \in \Delta_Y$ says
that the function $(f(z), g(z))$ on $2$ takes the same value at $0$ and at $1$.

## Remarks

- **The diagonal is a subset of a product, and the diagonal map is a function
  into it; they are different objects with the same name.** The set $\Delta_X$
  records which pairs are repetitions, and the map $\delta_X$ produces the
  repetitions. Both are needed: the closedness criterion of this page is about the
  set, and the transport of properties from $X$ to its copy inside the square is
  about the map.

- **Nothing here depends on a choice principle.** The product $X \times X$ is a
  binary product, and a point of it is exhibited by naming its two coordinates;
  the nonemptiness of an arbitrary product, which is where choice enters
  ([[thm-product-universal-property]], claim 4), is never invoked for a binary
  product with a named point.

- **Why the box description is recorded at the top.** The criterion proved on
  this page tests basic open sets of $X \times X$, and for the binary product
  there is no gap between the box topology and the product topology to worry
  about ([[def-product-topology]]). No infinite product is formed anywhere on
  this page, so the distinction never becomes live here.
````

### `def-topology-basis-subbasis`

````markdown
---
id: def-topology-basis-subbasis
kind: definition
title: "Basis and subbasis for a topology, and the topology generated by a family of sets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space]
justified_by: []
aliases: [def-basis-top, def-subbasis-top, def-generated-topology]
landmark: true
short: "basis, subbasis, generated topology"
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
    - title: "Base (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Base_(topology)"
    - title: "Subbase (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subbase"
    - title: "J. Munkres, Topology, 2nd ed., §13"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

A family $\mathcal{B} \subseteq \mathcal{T}$ is a **basis for $\mathcal{T}$** if
every open set is a union of members of $\mathcal{B}$: for every
$U \in \mathcal{T}$ there is $\mathcal{B}_U \subseteq \mathcal{B}$ with
$U = \bigcup \mathcal{B}_U$. Equivalently, and this is the form used in proofs,

$$\text{for every } U \in \mathcal{T} \text{ and every } x \in U \text{ there is } B \in \mathcal{B} \text{ with } x \in B \subseteq U .$$

*The two forms say the same thing.* If every open $U$ is such a union and
$x \in U$, then $x$ lies in one of the sets united, which is a member of
$\mathcal{B}$ inside $U$. Conversely, if the displayed condition holds then
$U = \bigcup \{\, B \in \mathcal{B} : B \subseteq U \,\}$, since each such $B$ is
contained in $U$ and each $x \in U$ lies in one of them. Note that
$\bigcup \varnothing = \varnothing$, so the empty open set is covered by the empty
subfamily and needs no member of $\mathcal{B}$. The members of a basis are called
**basic open sets**.

**The topology generated by a family.** Let $\mathcal{S} \subseteq \mathcal{P}(X)$
be *any* family of subsets of $X$. Then

$$\langle \mathcal{S} \rangle := \bigcap \{\, \mathcal{T}' : \mathcal{T}' \text{ is a topology on } X \text{ with } \mathcal{S} \subseteq \mathcal{T}' \,\}$$

is a topology on $X$, it contains $\mathcal{S}$, and it is contained in every
topology on $X$ that contains $\mathcal{S}$. It is called the **topology
generated by $\mathcal{S}$**, and $\mathcal{S}$ is a **subbasis** for a topology
$\mathcal{T}$ when $\mathcal{T} = \langle \mathcal{S} \rangle$.

*This is well posed, and the obligation is discharged here.* The collection being
intersected is nonempty, because $\mathcal{P}(X)$ is a topology on $X$ containing
$\mathcal{S}$; so the intersection is an intersection of a nonempty family of
subsets of $\mathcal{P}(X)$ and is a set. It is a topology: $\varnothing$ and $X$
lie in every topology on $X$, hence in the intersection, which is (T1); if
$\mathcal{S}' \subseteq \langle \mathcal{S} \rangle$ then $\mathcal{S}'$ is a
subfamily of each $\mathcal{T}'$ in the collection, so $\bigcup \mathcal{S}'$ lies
in each $\mathcal{T}'$ and hence in the intersection, which is (T2); and the same
argument with $U \cap V$ gives (T3). It contains $\mathcal{S}$ because every
$\mathcal{T}'$ in the collection does, and it is contained in each such
$\mathcal{T}'$ because an intersection is contained in each of its members. So
$\langle \mathcal{S} \rangle$ is the coarsest topology on $X$ containing
$\mathcal{S}$ ([[def-topological-space]]), and in particular it is uniquely
determined by $\mathcal{S}$.

**Neither notion is intrinsic to the family alone.** "$\mathcal{B}$ is a basis
for $\mathcal{T}$" and "$\mathcal{S}$ is a subbasis for $\mathcal{T}$" are
relations between a family and a topology, not properties of the family. The
question of which families are a basis *for some* topology, and how the topology
generated by a subbasis is computed from it, is settled by the next item.

## Remarks

- **Every topology is a basis for itself**, so a basis always exists; the point
  of a basis is to be smaller and more explicit than $\mathcal{T}$, and the point
  of a subbasis is to be smaller still at the cost of one round of finite
  intersections.

- **Two extremes of the generated topology.** $\langle \varnothing \rangle$ is
  the indiscrete topology, since $\{\varnothing, X\}$ is a topology containing the
  empty family and is contained in every topology. At the other end,
  $\langle \mathcal{P}(X) \rangle = \mathcal{P}(X)$ is the discrete topology.

- **Generation is monotone and idempotent.** If
  $\mathcal{S}_1 \subseteq \mathcal{S}_2$ then every topology containing
  $\mathcal{S}_2$ contains $\mathcal{S}_1$, so
  $\langle \mathcal{S}_1 \rangle \subseteq \langle \mathcal{S}_2 \rangle$; and
  $\langle \langle \mathcal{S} \rangle \rangle = \langle \mathcal{S} \rangle$
  because $\langle \mathcal{S} \rangle$ is itself a topology containing
  $\mathcal{S}$. Both are used silently below.
````

### `lem-of-triangle-inequality`

````markdown
---
id: lem-of-triangle-inequality
kind: lemma
title: "The triangle inequality"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-of-abs-value, lem-of-add-order, def-ordered-field]
aliases: []
landmark: true
short: "Triangle ineq."
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Purdue University analysis notes: Ordered fields and absolute value"
      url: "https://www.math.purdue.edu/~gcavigli/Swanson.pdf"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \in F$. Then

$$|x + y| \le |x| + |y|.$$

## Facts & Assumptions

**Given:** An ordered field $F$ and elements $x, y \in F$.

[L1] For every $u \in F$, $-|u| \le u \le |u|$, and $|u|$ equals $u$ or $-u$ ([[lem-of-abs-value]]).

[L2] Order compatible with addition: if $a \le b$ and $c \le d$, then $a + c \le b + d$. [[lem-of-add-order]] states the STRICT forms and only those ($a < b \Rightarrow a + c < b + c$, and $a < b$ with $c < d$ giving $a + c < b + d$); the nonstrict form used here is those two together with the cases $a = b$ and $c = d$, settled by trichotomy, the order being total ([[def-ordered-field]]). Explicitly: if $a < b$ and $c < d$ the second strict form applies; if $a < b$ and $c = d$ the first gives $a + c < b + c = b + d$; if $a = b$ and $c < d$ the first gives $a + c < a + d = b + d$; and if $a = b$ and $c = d$ the two sides are equal.

[L3] Field and order arithmetic: $-(a + b) = -a + (-b)$, and $a \le b \iff -b \le -a$ ([[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $-|x| \le x \le |x|$ and $-|y| \le y \le |y|$. [L1]

2.1 Adding the two chains of [step 1.1] with [L2] and using $-(|x| + |y|) = -|x| + (-|y|)$ from [L3] gives $-(|x| + |y|) \le x + y \le |x| + |y|$. [step 1.1, L2, L3]

3.1 By [L1] the value $|x + y|$ equals $x + y$ or $-(x + y)$; both $x + y \le |x| + |y|$ and $-(x + y) \le |x| + |y|$ hold by [step 2.1] and [L3] (the latter from $-(|x| + |y|) \le x + y$), so $|x + y| \le |x| + |y|$. [step 2.1, L1, L3] ∎
````

### `lem-product-topology-on-rn`

````markdown
---
id: lem-product-topology-on-rn
kind: lemma
title: "For $n \\ge 1$ the product topology on $n$ copies of the usual topology of $\\mathbb{R}$ is the metric topology of $d_\\infty$ on $\\mathbb{R}^n$, and hence also of $d_1$ and $d_2$, so $\\mathbb{R}^n$ as a product and $\\mathbb{R}^n$ as a metric space are one space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-product-topology, lem-metrics-on-rn, def-metric-topology, def-metric-ball,
       def-metrizable-space, lem-real-line-is-a-metric-space, def-equivalent-metrics,
       thm-metric-equivalence-hierarchy, thm-of-square-roots, lem-finite-sum-laws,
       def-interval, def-max-min, lem-finite-set-has-max, lem-finite-choice, lem-of-square-monotone,
       lem-of-square-positive, lem-of-abs-value, lem-of-naturals-positive,
       lem-of-sign-rules, lem-metric-nonnegativity, def-topology-basis-subbasis]
justified_by: []
aliases: []
landmark: true
short: "$\\mathbb{R}^n$ as a product is $\\mathbb{R}^n$ as a metric space"
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
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
    - title: "Euclidean space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Euclidean_space"
    - title: "J. Munkres, Topology, 2nd ed., §20"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ with $n \ge 1$, and give $\mathbb{R}$ its usual topology,
the metric topology of $d_{\mathbb{R}}(s,t) = |s-t|$
([[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]). Let

$$\mathbb{R}^n \;=\; \prod_{k < n} \mathbb{R}$$

be the product of $n$ copies of $\mathbb{R}$ ([[def-product-topology]]). As a
**set** this is literally the $\mathbb{R}^n$ of [[lem-metrics-on-rn]], both being
the set of functions $n \to \mathbb{R}$; and $d_1$, $d_2$, $d_\infty$ are the
three metrics defined there. Then:

1. The product topology on $\mathbb{R}^n$ is the metric topology of $d_\infty$
   ([[def-metric-topology]]). The key computation is that a $d_\infty$-ball is a
   box:
   $$B_{d_\infty}(x, r) \;=\; \prod_{k<n} (x_k - r,\ x_k + r) \qquad (r > 0),$$
   a product of bounded open intervals ([[def-interval]]).
2. $d_\infty \le d_1 \le n\, d_\infty$ and $d_\infty \le d_2 \le n\, d_\infty$
   pointwise, so $d_1$ and $d_2$ are each Lipschitz equivalent to $d_\infty$
   ([[def-equivalent-metrics]]); here $n$ denotes the canonical natural
   $n \cdot 1_{\mathbb{R}}$.
3. Consequently all three metrics induce the product topology
   ([[thm-metric-equivalence-hierarchy]]). So $\mathbb{R}^n$ carrying the product
   topology and $\mathbb{R}^n$ carrying the topology of any one of $d_1$, $d_2$,
   $d_\infty$ are **one topological space**, and it is metrizable
   ([[def-metrizable-space]]).

**Why $n \ge 1$.** The metric $d_\infty$ is a maximum over $n$ terms, which does
not exist for $n = 0$; [[lem-metrics-on-rn]] carries the same hypothesis, and it
is carried here for the same reason. For $n = 0$ the product is a one-point space
and there is nothing to compare.

## Facts & Assumptions

**Given:** A natural $n \ge 1$; the set $\mathbb{R}^n$ of functions $n \to \mathbb{R}$; the three metrics $d_1(x,y) = \sum_{k<n}|x_k - y_k|$, $d_2(x,y) = \sqrt{\sum_{k<n}(x_k-y_k)^2}$ and $d_\infty(x,y) = \max\{|x_k-y_k| : k < n\}$; points $x, y \in \mathbb{R}^n$ and a real $r > 0$. Throughout, $n$ inside a real inequality denotes the canonical natural $n \cdot 1_{\mathbb{R}}$.

[A1] $d_1$, $d_2$ and $d_\infty$ are metrics on $\mathbb{R}^n$ for $n \ge 1$, and $\mathbb{R}^n$ is the set of functions $n \to \mathbb{R}$ ([[lem-metrics-on-rn]]).

[A2] For $I = n$ a natural number, a basis for the product topology on $\prod_{k<n}\mathbb{R}$ is the family of all boxes $\prod_{k<n} U_k$ with every $U_k$ open in $\mathbb{R}$ ([[def-product-topology]], [[def-topology-basis-subbasis]]).

[L1] $B_{\mathbb{R}}(t, r) = (t-r,\ t+r)$, and $U \subseteq \mathbb{R}$ is open in the usual topology exactly when every $t \in U$ has some $r > 0$ with $(t-r,t+r) \subseteq U$ ([[lem-real-line-is-a-metric-space]], claims 2 and 3; [[def-metric-ball]], [[def-metric-topology]], [[def-interval]]).

[L2] $U$ is open in a metric space $(X,d)$ exactly when every $u \in U$ has some $\rho > 0$ with $B_d(u,\rho) \subseteq U$ ([[def-metric-topology]], [[def-metric-ball]]); metric values are nonnegative ([[lem-metric-nonnegativity]]).

[L3] $\max S$ belongs to $S$ and is an upper bound for $S$, and likewise $\min S$ ([[def-max-min]]); a nonempty finite set of reals has a maximum, and by reflection a minimum ([[lem-finite-set-has-max]]).

[L4] For finite sums: if $a_k \le b_k$ for all $k<n$ then $\sum_{k<n} a_k \le \sum_{k<n} b_k$; if every $a_k \ge 0$ then every single term satisfies $a_j \le \sum_{k<n} a_k$; and $\sum_{k<n}\lambda = n\lambda$ ([[lem-finite-sum-laws]], claims 2 and 4).

[L5] $\sqrt{a}$ is the unique nonnegative real with $(\sqrt a)^2 = a$, for $a \ge 0$ ([[thm-of-square-roots]]); $t^2 \ge 0$ ([[lem-of-square-positive]]); $|t|^2 = t^2$ and $|t| \ge 0$ ([[lem-of-abs-value]]); and for $a, b \ge 0$ one has $a \le b$ if and only if $a^2 \le b^2$ ([[lem-of-square-monotone]]).

[L6] A function on a natural number $n$ whose values are nonempty sets has a choice function for its family of values ([[lem-finite-choice]]).

[L7] The canonical natural $n \cdot 1_{\mathbb{R}}$ is positive and $n \mapsto n \cdot 1_{\mathbb{R}}$ is strictly increasing for $n \ge 1$ ([[lem-of-naturals-positive]]); multiplying an inequality by a positive element preserves it ([[lem-of-sign-rules]], claim 4).

[L8] Lipschitz equivalent metrics are topologically equivalent, that is they have the same metric topology ([[thm-metric-equivalence-hierarchy]], claims 1 and 2; [[def-equivalent-metrics]]).

## Proof

**Proof technique:** direct.

1.1 For $y \in \mathbb{R}^n$: $d_\infty(x,y) < r$ if and only if $|x_k - y_k| < r$ for every $k < n$, since by [L3] the maximum is one of the values $|x_k-y_k|$ and is an upper bound for all of them. [A1, L3]

1.2 For $t \in \mathbb{R}$ and $r > 0$: $|t - y_k| < r$ if and only if $y_k \in (t-r, t+r)$, by [L1]. [L1]

1.3 Write $t_k := |x_k - y_k|$ and $M := d_\infty(x,y) = \max\{t_k : k<n\}$. Then $t_j \le M$ for every $j < n$ and $M = t_{j_0}$ for some $j_0 < n$, by [L3]. [A1, L3]

1.4 $d_2(x,y)^2 = \sum_{k<n}(x_k-y_k)^2$ by [L5], and $(x_k-y_k)^2 = t_k^2 \ge 0$ by [L5]. [L5]

1.5 $n \le n^2$ as reals: for $n \ge 1$ the canonical natural satisfies $\iota(1) = 1 \le \iota(n)$ by [L7], so either $\iota(n) = 1$, in which case $\iota(n) = \iota(n)^2 = 1$, or $1 < \iota(n)$, in which case multiplying that strict inequality by $\iota(n) > 0$ gives $\iota(n) < \iota(n)^2$ by [L7]. [L7]

1.6 Conversely let $B = \prod_{k<n} U_k$ be a box with every $U_k$ open in $\mathbb{R}$ and let $x \in B$. For each $k<n$ the set $\{\, \rho \in \mathbb{R} : \rho > 0,\ (x_k-\rho,\ x_k+\rho) \subseteq U_k \,\}$ is nonempty by [L1], so [L6] supplies $\rho_k$ in it for every $k<n$; put $r := \min\{\rho_k : k<n\}$, which exists and is positive by [L3]. [A2, L1, L3, L6, choose]

2.1 $d_1(x,y) = \sum_{k<n} t_k \le \sum_{k<n} M = n M$, using $t_k \le M$ from step 1.3 and [L4]. [step 1.3, L4]

2.2 $M = t_{j_0} \le \sum_{k<n} t_k = d_1(x,y)$, since every $t_k \ge 0$ by [L5] and a single nonnegative term is at most the sum, by [L4]. [step 1.3, L4, L5]

2.3 $B_{d_\infty}(x,r) = \prod_{k<n}(x_k - r,\ x_k + r)$: by step 1.1 a point $y$ lies in the ball exactly when $|x_k-y_k| < r$ for every $k<n$, and by step 1.2 that says exactly $y_k \in (x_k-r, x_k+r)$ for every $k < n$. [step 1.1, step 1.2]

2.4 $M^2 = t_{j_0}^2 \le \sum_{k<n} t_k^2 = d_2(x,y)^2$ by steps 1.3 and 1.4 with [L4], and both $M$ and $d_2(x,y)$ are nonnegative by [L2] and [L5], so $M \le d_2(x,y)$ by [L5]. [step 1.3, step 1.4, L2, L4, L5]

2.5 $d_2(x,y)^2 = \sum_{k<n} t_k^2 \le \sum_{k<n} M^2 = n M^2 \le n^2 M^2 = (nM)^2$, using $t_k \le M$ with [L5] and [L4], then step 1.5 with $M^2 \ge 0$; since $d_2(x,y) \ge 0$ and $nM \ge 0$, [L5] gives $d_2(x,y) \le n M$. [step 1.3, step 1.4, step 1.5, L4, L5]

3.1 Every $d_\infty$-ball is a box with open factors, by step 2.3 and [L1], hence a basic open set of the product topology by [A2]; so every $d_\infty$-open set is product-open, by [L2] and [A2]. [step 2.3, A2, L1, L2]

3.2 With $r$ as in step 1.6: $B_{d_\infty}(x,r) = \prod_{k<n}(x_k-r, x_k+r) \subseteq \prod_{k<n}(x_k-\rho_k, x_k+\rho_k) \subseteq B$, since $r \le \rho_k$ for every $k$ by [L3]. [step 2.3, step 1.6, L3]

3.3 Steps 2.1, 2.2, 2.4 and 2.5 give $d_\infty \le d_1 \le n\,d_\infty$ and $d_\infty \le d_2 \le n\,d_\infty$ at every pair of points, which is claim 2, the constants $1$ and $n$ being positive by [L7]. [step 2.1, step 2.2, step 2.4, step 2.5, L7]

4.1 By steps 1.6 and 3.2 every basic open set of the product topology is $d_\infty$-open by [L2], hence every product-open set is $d_\infty$-open; with step 3.1 this gives claim 1. [step 3.1, step 1.6, step 3.2, A2, L2]

5.1 By step 3.3 and [L8] the metrics $d_1$, $d_2$ and $d_\infty$ have the same metric topology, which by step 4.1 is the product topology; so all three induce it and $\mathbb{R}^n$ with the product topology is metrizable. This is claim 3, and with steps 4.1 and 3.3 all three claims are proved. [step 3.3, step 4.1, L8] ∎

## Remarks

- **This item exists to stop one symbol meaning two things.** Before it,
  "$\mathbb{R}^2$" could denote the product of two copies of the real line or the
  metric space of [[lem-metrics-on-rn]], and "open in $\mathbb{R}^2$" would have
  had two readings. Claim 3 says they are one space, so every statement about
  open sets, closures, convergence and continuity in $\mathbb{R}^n$ proved on
  either side transfers verbatim to the other.

- **The $d_\infty$-ball is the natural object here and the $d_2$-ball is not.**
  The proof works with $d_\infty$ because its balls *are* the basic boxes; for
  $d_2$ the corresponding computation would need a round ball inscribed in a box
  and a box inscribed in a round ball, which is the content of the inequalities
  of claim 2 read geometrically.

- **Choice is spent only on finitely many radii.** Step 1.6 selects one radius per
  coordinate, and there are $n$ of them, so [[lem-finite-choice]] suffices and no
  form of the Axiom of Choice is used anywhere in this item; step 3.2 only uses the
  radius already built there.
````

### `lem-real-line-is-a-metric-space`

````markdown
---
id: lem-real-line-is-a-metric-space
kind: lemma
title: "The absolute value makes $\\mathbb{R}$ a metric space: $d(x,y) = |x-y|$ is a metric, its open balls are the intervals $(x-r, x+r)$, and it is unbounded"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-space, def-metric-ball, def-metric-topology, def-metric-bounded-diameter,
       def-abs-value, lem-of-abs-value, lem-of-triangle-inequality, def-interval,
       thm-of-archimedean, def-complete-ordered-field, def-ordered-field,
       lem-of-add-order, lem-of-naturals-positive]
justified_by: []
aliases: [def-usual-metric-on-r]
landmark: true
short: "$(\\mathbb{R}, |x-y|)$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "Real line (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Real_line"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Statement

Define $d_{\mathbb{R}} : \mathbb{R} \times \mathbb{R} \to \mathbb{R}$ by
$d_{\mathbb{R}}(x,y) := |x - y|$ ([[def-abs-value]]). Then:

1. $d_{\mathbb{R}}$ is a metric on $\mathbb{R}$ ([[def-metric-space]]); it is
   called the **usual metric** of $\mathbb{R}$.
2. For $x \in \mathbb{R}$ and $r > 0$ the open ball is the bounded open interval
   ([[def-interval]], [[def-metric-ball]])
   $$B(x,r) = (x-r,\ x+r),$$
   and the closed ball is $\bar B(x,r) = [x-r,\ x+r]$.
3. Consequently $U \subseteq \mathbb{R}$ is open in the metric topology of
   $d_{\mathbb{R}}$ ([[def-metric-topology]]) exactly when for every $x \in U$
   there is $r > 0$ with $(x-r, x+r) \subseteq U$. This topology is called the
   **usual topology** of $\mathbb{R}$.
4. $(\mathbb{R}, d_{\mathbb{R}})$ is not a bounded metric space
   ([[def-metric-bounded-diameter]]): no ball contains $\mathbb{R}$, so
   $\operatorname{diam}(\mathbb{R})$ is not defined.

## Facts & Assumptions

**Given:** The complete ordered field $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]) with its absolute value ([[def-abs-value]]), and the function $d_{\mathbb{R}}(x,y) = |x-y|$; points $x, y, z \in \mathbb{R}$ and a real $r > 0$.

[L1] Absolute value: $|u| \ge 0$; $|u| = 0$ if and only if $u = 0$; $|-u| = |u|$; and for $c > 0$ one has $|u| < c$ if and only if $-c < u < c$ ([[lem-of-abs-value]], [[def-abs-value]]).

[L2] Triangle inequality in an ordered field: $|u + v| \le |u| + |v|$ ([[lem-of-triangle-inequality]]).

[L3] Intervals: $(a,b) = \{t : a < t < b\}$ and $[a,b] = \{t : a \le t \le b\}$ ([[def-interval]]).

[L4] Archimedean property: for every $w \in \mathbb{R}$ there is a natural $n \ge 1$ with $w < n \cdot 1_{\mathbb{R}}$ ([[thm-of-archimedean]]); and $n \cdot 1_{\mathbb{R}} > 0$ for $n \ge 1$ ([[lem-of-naturals-positive]]).

[L5] Adding a constant to an inequality, in strict and nonstrict form: the strict form is [[lem-of-add-order]] and the nonstrict form is that together with the case of equality, the order being total ([[def-ordered-field]]).

[L6] Trichotomy: for reals $a,b$ exactly one of $a < b$, $a = b$, $b < a$ holds ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Separation (M1): $d_{\mathbb{R}}(x,y) = |x-y| = 0$ holds if and only if $x - y = 0$, that is if and only if $x = y$. [L1]

1.2 Symmetry (M2): $d_{\mathbb{R}}(y,x) = |y-x| = |-(x-y)| = |x-y| = d_{\mathbb{R}}(x,y)$. [L1]

1.3 Triangle inequality (M3): $d_{\mathbb{R}}(x,z) = |x - z| = |(x-y) + (y-z)| \le |x-y| + |y-z| = d_{\mathbb{R}}(x,y) + d_{\mathbb{R}}(y,z)$. [L2]

1.4 For $y \in \mathbb{R}$ and $r > 0$: $y \in B(x,r)$ means $|x - y| < r$, which by [L1] holds if and only if $-r < x - y < r$, and adding $y - r$ respectively $y + r$ to the two halves shows this is equivalent to $x - r < y < x + r$. [L1, L5]

1.5 For $y \in \mathbb{R}$ and $r > 0$: $y \in \bar B(x,r)$ means $|x-y| \le r$, which by the same equivalence read with $\le$ in place of $<$ holds if and only if $x - r \le y \le x + r$. [L1, L5]

1.6 Let $x_0 \in \mathbb{R}$ and $r > 0$ be arbitrary, and use [L4] to fix a natural $n \ge 1$ with $x_0 + r < n \cdot 1_{\mathbb{R}}$; write $w := n \cdot 1_{\mathbb{R}}$. [L4, choose]

2.1 By steps 1.1, 1.2 and 1.3 the function $d_{\mathbb{R}}$ satisfies (M1), (M2) and (M3), so it is a metric on $\mathbb{R}$, which is claim 1. [step 1.1, step 1.2, step 1.3]

2.2 By step 1.4 and [L3] the set $B(x,r)$ has exactly the elements of $(x-r,x+r)$, and by step 1.5 and [L3] the set $\bar B(x,r)$ has exactly the elements of $[x-r,x+r]$; this is claim 2. [step 1.4, step 1.5, L3]

2.3 Since $r > 0$ we have $x_0 < x_0 + r < w$, so $w - x_0 > r > 0$ and hence $d_{\mathbb{R}}(x_0, w) = |x_0 - w| = |-(w - x_0)| = w - x_0 > r$; therefore $w \notin B(x_0,r)$. [step 1.6, L1, L5, L6]

3.1 Substituting claim 2 into the definition of open in the metric topology gives claim 3: $U$ is open exactly when every $x \in U$ admits $r > 0$ with $(x-r,x+r) = B(x,r) \subseteq U$. [step 2.2]

4.1 Since $x_0$ and $r$ were arbitrary, step 2.3 exhibits for every ball $B(x_0,r)$ a real not in it, so no ball contains $\mathbb{R}$; hence $\mathbb{R}$ is not a bounded subset of itself and $\operatorname{diam}(\mathbb{R})$ is not defined, which is claim 4. [step 2.1, step 2.3] ∎

## Remarks

- **This is the metric every later ceiling rests on.** Every real-line example on the companion page, and every subspace of $\mathbb{R}$ used there, takes its metric from $d_{\mathbb{R}}$ through the subspace construction of [[def-isometry-and-metric-embedding]].
- **Unboundedness needs no Archimedean input, and no completeness either.** No ordered field is bounded under $d(u,v) = |u-v|$, and the reason is a single element rather than any cofinality property: given a centre $c$ and a radius $r > 0$, the element $c + r + 1$ satisfies $d(c,\, c + r + 1) = |{-(r+1)}| = r + 1 > r$, because $1 > 0$ and $r + 1 > 0$ ([[lem-of-abs-value]], [[cor-of-one-positive]], [[lem-of-add-order]]); so it lies outside $B(c,r)$ and no ball contains the field. Step 1.6 above chooses its witness with [[thm-of-archimedean]] instead, which is a convenience and not a necessity: it delivers a witness that is a canonical natural, and claim 4 needs no such thing. Claim 4 therefore holds verbatim in every ordered field with this $d$, Archimedean or not. Note also that a radius is an element of $\mathbb{R}$, so "a ball of infinite radius" is not something that can be written here.
- **The claim that $\operatorname{diam}(\mathbb{R})$ is "not defined" is a claim about the conventions of this development** ([[rem-sup-conventions]], [[def-metric-bounded-diameter]]): suprema here are real numbers and the extended real line, which is introduced on a later page, is not used for them, so an unbounded set has no diameter at all rather than a diameter $+\infty$.
````

### `thm-closure-characterisation-top`

````markdown
---
id: thm-closure-characterisation-top
kind: theorem
title: "A point lies in the closure of $A$ iff every basic neighbourhood of it meets $A$; the closure is the smallest closed superset and equals $A$ together with its derived set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-interior-closure-boundary-top, def-neighbourhood-top, def-topology-basis-subbasis, def-topological-space]
justified_by: []
aliases: []
landmark: true
short: "closure by neighbourhoods; $\\overline{A} = A \\cup A'$"
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
    - title: "Closure (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closure_(topology)"
    - title: "Limit point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_point"
    - title: "J. Munkres, Topology, 2nd ed., §17"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space, let $\mathcal{B}$ be a basis for
$\mathcal{T}$ ([[def-topology-basis-subbasis]]), let $A \subseteq X$ and let
$x \in X$. Closure, derived set and limit points are as in
[[def-interior-closure-boundary-top]]. Then:

1. The following four conditions are equivalent.
   - (a) $x \in \overline{A}$;
   - (b) $N \cap A \ne \varnothing$ for every neighbourhood $N$ of $x$
     ([[def-neighbourhood-top]]);
   - (c) $U \cap A \ne \varnothing$ for every open $U$ with $x \in U$;
   - (d) $B \cap A \ne \varnothing$ for every $B \in \mathcal{B}$ with $x \in B$.
2. $\overline{A}$ is closed, contains $A$, and is contained in every closed
   $F \subseteq X$ with $A \subseteq F$; so it is the smallest closed superset of
   $A$, and $A$ is closed if and only if $A = \overline{A}$.
3. $\overline{A} = A \cup A'$.

Claim 2 is recorded here for reference and is discharged in
[[def-interior-closure-boundary-top]], where it is what makes the definition of
$\overline{A}$ well posed; claims 1 and 3 are proved below. Claim 1 is the form in
which the closure is used everywhere afterwards, and clause (d) is what makes a
closure computable from a basis rather than from all open sets.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$, a basis $\mathcal{B}$ for $\mathcal{T}$, a subset $A \subseteq X$ and a point $x \in X$.

[A1] $\overline{A}$ is the intersection of all closed supersets of $A$; it is closed, contains $A$, and is contained in every closed superset of $A$ ([[def-interior-closure-boundary-top]]).

[A2] $x \in A'$ means that $N \cap (A \setminus \{x\}) \ne \varnothing$ for every neighbourhood $N$ of $x$ ([[def-interior-closure-boundary-top]]).

[L1] $N$ is a neighbourhood of $x$ when $x \in U \subseteq N$ for some open $U$; an open set containing $x$ is a neighbourhood of $x$ ([[def-neighbourhood-top]]).

[L2] $\mathcal{B}$ is a basis for $\mathcal{T}$: for every open $U$ and every $x \in U$ there is $B \in \mathcal{B}$ with $x \in B \subseteq U$, and every member of $\mathcal{B}$ is open ([[def-topology-basis-subbasis]]).

[L3] A set is closed exactly when its complement is open ([[def-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 (a) implies (c): let $U$ be open with $x \in U$ and suppose $U \cap A = \varnothing$; then $X \setminus U$ is closed and contains $A$, so $\overline{A} \subseteq X \setminus U$ by [A1], whence $x \notin \overline{A}$, contradicting (a); therefore $U \cap A \ne \varnothing$. [A1, L3]

1.2 (c) implies (a): suppose $x \notin \overline{A}$; then $U := X \setminus \overline{A}$ is open by [A1] and [L3], contains $x$, and satisfies $U \cap A = \varnothing$ because $A \subseteq \overline{A}$, so (c) fails. [A1, L3]

1.3 (b) implies (c): an open $U$ containing $x$ is a neighbourhood of $x$, so (b) applies to it. [L1]

1.4 (c) implies (b): let $N$ be a neighbourhood of $x$ and fix open $U$ with $x \in U \subseteq N$; then $\varnothing \ne U \cap A \subseteq N \cap A$. [L1]

1.5 (c) implies (d): every $B \in \mathcal{B}$ with $x \in B$ is an open set containing $x$. [L2]

1.6 (d) implies (c): let $U$ be open with $x \in U$ and fix $B \in \mathcal{B}$ with $x \in B \subseteq U$; then $\varnothing \ne B \cap A \subseteq U \cap A$. [L2]

1.7 $A \subseteq \overline{A}$ and $\overline{A}$ is closed, and $\overline{A}$ is contained in every closed superset of $A$, which is claim 2; in particular $A$ is closed exactly when $A = \overline{A}$, since one inclusion always holds and the other says that $A$ is a closed superset of itself. [A1, L3]

2.1 By steps 1.1 to 1.6 the four conditions (a), (b), (c) and (d) are equivalent, which is claim 1: (a) and (c) are equivalent by steps 1.1 and 1.2, (b) and (c) by steps 1.3 and 1.4, and (c) and (d) by steps 1.5 and 1.6. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 1.6]

3.1 $A \cup A' \subseteq \overline{A}$: points of $A$ lie in $\overline{A}$ by [A1], and if $x \in A'$ then every neighbourhood $N$ of $x$ meets $A \setminus \{x\}$ and hence meets $A$, so $x \in \overline{A}$ by condition (b). [step 2.1, A1, A2]

3.2 $\overline{A} \subseteq A \cup A'$: let $x \in \overline{A}$ and suppose $x \notin A$; then for every neighbourhood $N$ of $x$ condition (b) gives $N \cap A \ne \varnothing$, and $A = A \setminus \{x\}$ because $x \notin A$, so $N \cap (A \setminus \{x\}) \ne \varnothing$ and $x \in A'$. [step 2.1, A2]

4.1 Steps 3.1 and 3.2 give $\overline{A} = A \cup A'$, which is claim 3; with step 2.1 for claim 1 and step 1.7 for claim 2 the theorem is proved. [step 1.7, step 2.1, step 3.1, step 3.2] ∎

## Remarks

- **Clause (d) is relative to a basis and clause (c) is not.** Different bases for one topology give different families of test sets in (d), and the theorem says all of them detect the same closure. This is why a closure in a metric space may be computed with balls alone, and a closure in $\mathbb{R}$ with bounded open intervals alone.

- **The empty set and the whole space.** $\overline{\varnothing} = \varnothing$, since $\varnothing$ is closed, and $\overline{X} = X$; claim 1 reads correctly in both cases, no neighbourhood meeting $\varnothing$ and every neighbourhood meeting $X$.

- **Nothing here assumes that singletons are closed.** In the indiscrete topology on a set with at least two points, $\overline{\{x\}} = X$ for every $x$, since the only neighbourhood of any point is $X$; claim 3 then says $A' = X \setminus \{x\}$ is contained in $\overline{\{x\}}$, which it is.
````

### `thm-hausdorff-iff-the-diagonal-is-closed`

````markdown
---
id: thm-hausdorff-iff-the-diagonal-is-closed
kind: theorem
title: "A space is Hausdorff if and only if its diagonal is closed in the square carrying the product topology"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-the-diagonal-of-a-space, def-hausdorff-space, def-product-topology,
       def-topology-basis-subbasis, thm-closure-characterisation-top,
       def-interior-closure-boundary-top, def-topological-space]
justified_by: []
aliases: [thm-diagonal-criterion-for-hausdorff]
landmark: true
short: "Hausdorff iff the diagonal is closed"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
    - title: "Stacks Project, Topology, Lemma 5.3 (Tag 08ZD)"
      url: "https://stacks.math.columbia.edu/tag/08ZD"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space and give $X \times X$ the product
topology ([[def-product-topology]]). Then $X$ is Hausdorff
([[def-hausdorff-space]]) if and only if the diagonal $\Delta_X$
([[def-the-diagonal-of-a-space]]) is closed in $X \times X$:

$$X \text{ Hausdorff} \iff \Delta_X = \overline{\Delta_X} \text{ in } X \times X .$$

The condition on the right is a single closedness statement about one subset of
one space, with no quantifier over pairs of points visible in it; that is what
makes the criterion useful, and every consequence on this page is obtained by
pulling $\Delta_X$ back along a continuous map.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$, the product $X \times X$ with the product topology, and the diagonal $\Delta_X = \{\, z \in X \times X : z_0 = z_1 \,\}$.

[A1] $X$ is Hausdorff when for all $x \ne y$ in $X$ there are open $U \ni x$ and $V \ni y$ with $U \cap V = \varnothing$ ([[def-hausdorff-space]]).

[A2] The boxes $U \times V$ with $U, V \in \mathcal{T}$ form a basis for the product topology on $X \times X$, the index set being $2$ ([[def-product-topology]], [[def-topology-basis-subbasis]], [[def-the-diagonal-of-a-space]]).

[L1] For a basis $\mathcal{B}$ of a space, a point lies in $\overline{A}$ if and only if every $B \in \mathcal{B}$ containing it meets $A$; and $A$ is closed if and only if $A = \overline{A}$ ([[thm-closure-characterisation-top]], claims 1(d) and 2, [[def-interior-closure-boundary-top]]).

[L2] $A \subseteq \overline{A}$ for every subset $A$ of a space ([[def-interior-closure-boundary-top]], [[def-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 Assume $X$ is Hausdorff and let $z \in X \times X$ with $z \notin \Delta_X$, so that $z_0 \ne z_1$; by [A1] there are open $U \ni z_0$ and $V \ni z_1$ with $U \cap V = \varnothing$. [A1]

1.2 Assume $\Delta_X$ is closed and let $x, y \in X$ with $x \ne y$; then $z := (x,y)$ satisfies $z \notin \Delta_X = \overline{\Delta_X}$, the equality holding by [L1] since $\Delta_X$ is closed. [L1]

2.1 The box $U \times V$ of step 1.1 is a basic open set containing $z$, and $(U \times V) \cap \Delta_X = \varnothing$: a point $w$ of the intersection would satisfy $w_0 = w_1$ with $w_0 \in U$ and $w_1 \in V$, putting $w_0$ in $U \cap V = \varnothing$. [step 1.1, A2]

2.2 By [L1] applied to the basis of [A2], step 1.2 supplies a basic open box $U \times V$ with $z \in U \times V$ and $(U \times V) \cap \Delta_X = \varnothing$; so $x \in U$ and $y \in V$. [step 1.2, A2, L1]

3.1 From step 2.1 and [L1], $z \notin \overline{\Delta_X}$ for every $z \notin \Delta_X$; hence $\overline{\Delta_X} \subseteq \Delta_X$, and with [L2] this gives $\overline{\Delta_X} = \Delta_X$, so $\Delta_X$ is closed. [step 1.1, step 2.1, L1, L2]

3.2 The sets $U$ and $V$ of step 2.2 are disjoint: if $t \in U \cap V$ then $(t,t)$ lies in $U \times V$ and in $\Delta_X$, contradicting $(U \times V) \cap \Delta_X = \varnothing$. [step 2.2]

4.1 Step 3.1 shows that $X$ Hausdorff implies $\Delta_X$ closed, and steps 2.2 and 3.2 show that $\Delta_X$ closed implies that any two distinct points of $X$ have disjoint open neighbourhoods, which by [A1] is the Hausdorff condition; the two implications are the theorem. [step 2.2, step 3.1, step 3.2, A1] ∎

## Remarks

- **The criterion is about the product topology on a binary product**, and there the box basis and the product basis are the same family ([[def-product-topology]]), so the boxes tested in steps 2.1 and 2.2 are legitimately basic. No infinite product is formed anywhere in the argument, and the criterion says nothing about one.

- **Neither direction spends a choice principle.** The forward direction produces one box from one Hausdorff separation of one named pair, and the backward direction reads one box out of the closure characterisation; there is no family to select from in either.

- **What the criterion does not say.** It does not say that $\Delta_X$ is closed in $X \times X$ carrying some other topology, and it does not say that $\Delta_X$ is closed in $X$ — the latter is not even a statement, $\Delta_X$ being a subset of the square. The hypothesis that $X \times X$ carries the product topology is used at [A2] and cannot be dropped.
````

