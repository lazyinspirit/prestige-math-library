## Assigned repair — `def-uniform-cover-space`

Item path: `items/def-uniform-cover-space.md`

Normalized final-text SHA-256 at dispatch: `9e0f09d7762b6583aed964edfbe7c0ac95736a3479bb64c6ae615942e2c8424e`

Split reasons: ["body text"]

Provenance ledger: `wave7-topology-uniform.provenance.jsonl`

The four Wave 7 findings ledgers on disk record the original defect and Beta's repair. Locate this id there before certifying.

Read the current target from disk and every dependency needed to check the repair. The generated manifest rows are supplied only as a completeness checklist:

```json
[
  {
    "source": "def-uniform-cover-space",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-topological-space",
    "declared_target": "def-topological-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "def-uniform-cover-space",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-finite-cardinality",
    "declared_target": "def-finite-cardinality",
    "target_statement_provenance": "ai-altered",
    "targetPage": "finite-counting-and-binomial-coefficients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

For a byte-exact cross-check, the current item at dispatch was:

````markdown
---
id: def-uniform-cover-space
kind: definition
title: "Uniform space in the uniform-cover formulation"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-finite-cardinality]
aliases: []
landmark: true
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "Encyclopedia of Mathematics, Uniform space", url: "https://encyclopediaofmath.org/wiki/Uniform_space"}]
pipeline_run: null
---

## Definition

For a cover $\mathcal V$ of $X$ and $A\subseteq X$, write $\operatorname{St}(A,\mathcal V)$ for the union of the members of $\mathcal V$ meeting $A$. A cover $\mathcal V$ **star-refines** $\mathcal W$ if for every $V\in\mathcal V$, $\operatorname{St}(V,\mathcal V)$ is contained in some member of $\mathcal W$.

A **uniform-cover structure** is a nonempty family $\mathfrak C$ of covers of $X$ such that a cover refined by a member of $\mathfrak C$ belongs to $\mathfrak C$, any two members have a common refinement in $\mathfrak C$, and every member has a star-refinement in $\mathfrak C$. Its members are **uniform covers**. When $X\ne\varnothing$, the topology it induces and its equivalence with entourages are proved in [[lem-entourage-and-uniform-cover-dictionary]].
````
