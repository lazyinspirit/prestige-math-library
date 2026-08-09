## Assigned repaired item — `fs-additive-implies-linear`

Named repair: replace the invalid basis-vector multiplication argument by a range-based irrational-value contradiction.

Item path: `items/fs-additive-implies-linear.md`

Normalized exact-final SHA-256 at dispatch: `71ebcbd6d2d6f71b7ad441f3243fa179581785c70f64fa3850b0070c4214803f`

Read the exact current item and relevant dependencies from disk. The exact current text at dispatch follows for hash-bound comparison.

````markdown
---
id: fs-additive-implies-linear
kind: false-statement
title: "FALSE: every additive $f : \\mathbb{R} \\to \\mathbb{R}$ is of the form $x \\mapsto cx$ for a single real $c$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
  evidence: exact-source
deps: [def-additive-function, lem-additive-is-q-linear, lem-hamel-basis-exists, thm-cauchy-functional-equation-regularity, def-vector-space, def-linear-combination-and-span, lem-restriction-of-scalars, def-axiom-of-choice, thm-zorn, def-complete-ordered-field, lem-rat-embeds-dense, lem-q-and-irrationals-dense-r]
justified_by: []
aliases: []
landmark: true
short: "additive does not imply linear"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Cauchy's functional equation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy%27s_functional_equation"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "Hamel Basis (MathWorld)"
      url: "https://mathworld.wolfram.com/HamelBasis.html"
pipeline_run: null
---

## Statement

**FALSE.** Every additive $f : \mathbb{R} \to \mathbb{R}$
([[def-additive-function]]) is of the form $x \mapsto c\,x$ for a single real
$c$.

What is true is the $\mathbb{Q}$-linear part of it, $f(qx) = q f(x)$ for rational
$q$ ([[lem-additive-is-q-linear]]), and the conditional statements of
[[thm-cauchy-functional-equation-regularity]], each of which adds a regularity
hypothesis. The claim above asserts the conclusion with no hypothesis at all,
and it is false.

**The refutation assumes the Axiom of Choice** ([[def-axiom-of-choice]]), which
it uses through [[lem-hamel-basis-exists]] and hence through [[thm-zorn]]. The
hypothesis is carried explicitly in the Facts below and in every step that needs
it. It is an axiom already adopted in this library, so the refutation is a
refutation and not a conditional one; what it does not settle is whether a
counterexample exists without choice, and nothing here bears on that question.

## Facts & Assumptions

**Given:** The Axiom of Choice, and $\mathbb{Q}$ denoting the canonical copy of the rationals inside $\mathbb{R}$ ([[lem-rat-embeds-dense]]).

[A1] The Axiom of Choice ([[def-axiom-of-choice]], [[thm-zorn]]).

[L1] **Assume the Axiom of Choice.** Then there is $B \subseteq \mathbb{R}$, a basis of $\mathbb{R}$ as a vector space over $\mathbb{Q}$ by restriction of scalars, and for each $b_{\star} \in B$ a map $\Lambda_{b_{\star}} : \mathbb{R} \to \mathbb{Q}$ with $\Lambda_{b_{\star}}(x+y) = \Lambda_{b_{\star}}(x) + \Lambda_{b_{\star}}(y)$ for all reals $x, y$, with $\Lambda_{b_{\star}}(b_{\star}) = 1$, and with range the whole of $\mathbb{Q}$ ([[lem-hamel-basis-exists]], claims 1 and 4, [[lem-restriction-of-scalars]], [[def-vector-space]], [[def-linear-combination-and-span]]).

[L2] A function $f : \mathbb{R} \to \mathbb{R}$ is additive when $f(x+y) = f(x)+f(y)$ for all reals $x, y$ ([[def-additive-function]]).

[L3] There exists an irrational real, that is a real not lying in $\mathbb{Q}$: the irrationals are dense in $\mathbb{R}$ and in particular nonempty ([[lem-q-and-irrationals-dense-r]]).

[L4] $\mathbb{R}$ is a field, so a nonzero real is invertible ([[def-complete-ordered-field]]).

## Refutation

**Proof technique:** direct.

1.1 Assume the Axiom of Choice and fix a Hamel basis $B$ of $\mathbb{R}$ over $\mathbb{Q}$ together with an element $b_{\star} \in B$; such an element exists because $B$ spans $\mathbb{R}$, which is not $\{0\}$, so $B$ is nonempty. Put $f := \Lambda_{b_{\star}}$, regarded as a function $\mathbb{R} \to \mathbb{R}$. [A1, L1, construct]

2.1 $f$ is additive: $\Lambda_{b_{\star}}(x+y) = \Lambda_{b_{\star}}(x) + \Lambda_{b_{\star}}(y)$ for all reals $x, y$ is one of the properties of the coefficient map. [step 1.1, L1, L2]

2.2 Every value of $f$ is rational, and $f(b_{\star}) = 1$. [step 1.1, L1]

3.1 Suppose there were a real $c$ with $f(x) = c\,x$ for every real $x$. Then $c\,b_{\star} = f(b_{\star}) = 1$, so $c \ne 0$ and $c$ is invertible. [step 1.1, step 2.2, L4]

4.1 Take an irrational real $\theta$ and put $x_{0} := c^{-1}\theta$. Then $f(x_{0}) = c\,x_{0} = \theta$, which is irrational; but every value of $f$ is rational by step 2.2. This is impossible, so no such $c$ exists. [step 2.2, step 3.1, L3, L4]

5.1 So $f$ is an additive function $\mathbb{R} \to \mathbb{R}$ that is not of the form $x \mapsto c\,x$ for any real $c$, and the claim in the Statement is false. [step 2.1, step 4.1, discharge-construct] ∎

## Remarks

- **What the witness looks like, by the regularity theorem.** Since $f$ is additive and not of the form $x \mapsto cx$, the contrapositive of each clause of [[thm-cauchy-functional-equation-regularity]] applies: $f$ is continuous at no point of $\mathbb{R}$, is bounded neither above nor below on any nondegenerate interval, is monotone on no nondegenerate interval, is of constant sign on none, and its graph is dense in $\mathbb{R}^{2}$. The companion page states and uses exactly this in full.

- **The cost is the Axiom of Choice, and only that.** The construction uses no other principle, and AC is an axiom this library has adopted, so nothing here is conditional in the sense of resting on unproved material. It is worth being precise about what is *not* claimed: it is not claimed that no explicit non-linear additive function can be written down, only that this one is produced by a proof that exhibits nothing.

- **Every hypothesis that would rescue the claim is already recorded.** Adding any single one of the six conditions of [[thm-cauchy-functional-equation-regularity]] turns the false statement into a theorem. That is the reason the false statement is worth stating: the failure is not marginal, and yet it is repaired by an extremely weak hypothesis, as little as continuity at one single point.
````

## Current manifest rows sourced by this item

```json
[
  {
    "source": "fs-additive-implies-linear",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-additive-function",
    "declared_target": "def-additive-function",
    "target_statement_provenance": "literature-derived",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-additive-implies-linear",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "lem-additive-is-q-linear",
    "declared_target": "lem-additive-is-q-linear",
    "target_statement_provenance": "literature-derived",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-additive-implies-linear",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "lem-hamel-basis-exists",
    "declared_target": "lem-hamel-basis-exists",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-additive-implies-linear",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "thm-cauchy-functional-equation-regularity",
    "declared_target": "thm-cauchy-functional-equation-regularity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-additive-implies-linear",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-vector-space",
    "declared_target": "def-vector-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "vector-spaces-and-subspaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-additive-implies-linear",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-linear-combination-and-span",
    "declared_target": "def-linear-combination-and-span",
    "target_statement_provenance": "ai-altered",
    "targetPage": "vector-spaces-and-subspaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-additive-implies-linear",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "lem-restriction-of-scalars",
    "declared_target": "lem-restriction-of-scalars",
    "target_statement_provenance": "ai-altered",
    "targetPage": "vector-spaces-and-subspaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-additive-implies-linear",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-axiom-of-choice",
    "declared_target": "def-axiom-of-choice",
    "target_statement_provenance": "literature-derived",
    "targetPage": "relations-functions-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-additive-implies-linear",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "thm-zorn",
    "declared_target": "thm-zorn",
    "target_statement_provenance": "literature-derived",
    "targetPage": "order-zorn-and-the-axiom-of-choice",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-additive-implies-linear",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-complete-ordered-field",
    "declared_target": "def-complete-ordered-field",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-additive-implies-linear",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "lem-rat-embeds-dense",
    "declared_target": "lem-rat-embeds-dense",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-additive-implies-linear",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "lem-q-and-irrationals-dense-r",
    "declared_target": "lem-q-and-irrationals-dense-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

